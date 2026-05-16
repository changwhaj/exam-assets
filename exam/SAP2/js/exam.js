// ── 패스워드 인증 ──────────────────────────────────
const PW_CORRECT  = 'SAP2';
const COOKIE_NAME = 'sap2_auth';
const COOKIE_DAYS = 30;

function getCookie(name) {
  for (let c of document.cookie.split(';')) {
    const [k, v] = c.trim().split('=');
    if (k === name) return decodeURIComponent(v || '');
  }
  return null;
}
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/;SameSite=Lax`;
}
function unlockPage() {
  const overlay = document.getElementById('pw-overlay');
  overlay.classList.add('hidden');
  overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
}
function checkPw() {
  const input = document.getElementById('pw-input');
  const errEl = document.getElementById('pw-error');
  if (input.value.trim() === PW_CORRECT) {
    setCookie(COOKIE_NAME, PW_CORRECT, COOKIE_DAYS);
    errEl.textContent = '';
    input.classList.remove('error');
    unlockPage();
  } else {
    errEl.textContent = '❌ 패스워드가 올바르지 않습니다.';
    input.classList.add('error', 'shake');
    input.select();
    input.addEventListener('animationend', () => input.classList.remove('shake'), { once: true });
  }
}
function togglePwVisible() {
  const input  = document.getElementById('pw-input');
  const toggle = document.getElementById('pw-toggle');
  input.type   = input.type === 'password' ? 'text' : 'password';
  toggle.textContent = input.type === 'password' ? '👁' : '🙈';
}
(function checkAuth() {
  if (getCookie(COOKIE_NAME) === PW_CORRECT) {
    const overlay = document.getElementById('pw-overlay');
    if (overlay) overlay.remove();
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      const input = document.getElementById('pw-input');
      if (input) setTimeout(() => input.focus(), 100);
    });
  }
})();

// ── SET 이동 ───────────────────────────────────────
function goSet(setNum) {
  const currentPath = window.location.pathname;
  const fileName = currentPath.split('/').pop();
  const newFileName = fileName && fileName.match(/SAP2-SET\d{2}/i)
    ? fileName.replace(/SET\d{2}/i, `SET${setNum}`)
    : `SAP2-SET${setNum}.html`;
  window.location.href = currentPath.replace(fileName, newFileName);
}

// ── 문제 데이터 (각 HTML에서 window.SAP_QS로 주입됨) ──
const QS = window.SAP_QS || [];

// ── 상태 ───────────────────────────────────────────
let curQ = 0;
// result: null | 'ok' | 'ng' — 쿠키에서 로드한 과거 결과
let state = QS.map(() => ({ sel: [], done: false, result: null }));
let curLang = 'ko';

// ── 히스토리 (쿠키) ────────────────────────────────
function getSetNum() {
  const m = window.location.pathname.match(/SET(\d{2})/i);
  return m ? m[1] : '00';
}
const HIST_COOKIE = 'sap2_r_' + getSetNum();

function loadHistory() {
  const val = getCookie(HIST_COOKIE);
  if (!val) return;
  for (let i = 0; i < Math.min(val.length, QS.length); i++) {
    if      (val[i] === '1') state[i].result = 'ok';
    else if (val[i] === '0') state[i].result = 'ng';
  }
}

function saveHistory() {
  let val = '';
  for (let i = 0; i < QS.length; i++) {
    const r = getQuestionResult(i);
    val += r === 'ok' ? '1' : r === 'ng' ? '0' : '.';
  }
  setCookie(HIST_COOKIE, val, COOKIE_DAYS);
}

// 현재 세션 결과 또는 쿠키 히스토리 결과 반환
function getQuestionResult(i) {
  const s = state[i];
  if (s.done) {
    return arraysEqual(s.sel.slice().sort(), QS[i].answer.slice().sort()) ? 'ok' : 'ng';
  }
  return s.result; // null | 'ok' | 'ng'
}

// ── 초기화 ─────────────────────────────────────────
function init() {
  if (QS.length === 0) {
    document.getElementById('q-card').innerHTML =
      '<p style="color:var(--text-muted);text-align:center;padding:40px">문제 데이터를 불러올 수 없습니다.<br>qs_setXX.js 파일 경로를 확인하세요.</p>';
    return;
  }
  loadTheme();
  loadHistory();
  loadWideMode();
  buildSelect();
  renderQ(0);
  syncSetSelect();
  initScrollTop();
}

function syncSetSelect() {
  const fileName = window.location.pathname.split('/').pop();
  const match = fileName.match(/SET(\d{2})/i);
  if (match) document.getElementById('set-select').value = match[1];
}

function buildSelect() {
  const sel = document.getElementById('q-select');
  sel.innerHTML = '';
  QS.forEach(q => {
    const opt = document.createElement('option');
    opt.value = q.n;
    opt.textContent = `Q${String(q.n).padStart(3,'0')}`;
    sel.appendChild(opt);
  });
}

function updateSelectStatus() {
  const sel = document.getElementById('q-select');
  Array.from(sel.options).forEach((opt, i) => {
    const q = QS[i];
    const r = getQuestionResult(i);
    opt.className = '';
    if (r === 'ok') {
      opt.textContent = `Q${String(q.n).padStart(3,'0')} ✓`;
      opt.className = 'opt-correct';
    } else if (r === 'ng') {
      opt.textContent = `Q${String(q.n).padStart(3,'0')} ✗`;
      opt.className = 'opt-wrong';
    } else {
      opt.textContent = `Q${String(q.n).padStart(3,'0')}`;
    }
  });
  sel.selectedIndex = curQ;
}

// ── 렌더 ───────────────────────────────────────────
function renderQ(idx) {
  if (idx < 0 || idx >= QS.length) return;
  curQ = idx;
  const q = QS[idx];
  const s = state[idx];

  document.getElementById('progress-fill').style.width = `${((idx+1)/QS.length)*100}%`;
  document.getElementById('q-num-badge').textContent = String(q.n).padStart(3,'0');

  const tb = document.getElementById('q-type-badge');
  if (q.type === 'multi') {
    tb.textContent = `복수 선택 (${q.multiCount}개)`;
    tb.className = 'q-type-badge multi';
  } else {
    tb.textContent = '단일 선택';
    tb.className = 'q-type-badge';
  }

  document.getElementById('q-ko-text').innerHTML = q.ko;
  document.getElementById('q-en-text').innerHTML = q.en;
  document.getElementById('choices-label').textContent =
    q.type === 'multi' ? `선택지 — ${q.multiCount}개 선택` : '선택지 — 단일 선택';

  const cc = document.getElementById('choices-container');
  cc.innerHTML = '';
  q.choices.forEach(ch => {
    const div = document.createElement('div');
    let cls = 'choice';
    if (s.done) {
      cls += ' disabled';
      if (q.answer.includes(ch.k)) cls += ' correct';
      else if (s.sel.includes(ch.k)) cls += ' wrong';
    } else if (s.sel.includes(ch.k)) {
      cls += ' selected';
    }
    div.className = cls;

    let icon = '';
    if (s.done) {
      if (q.answer.includes(ch.k)) icon = '✓';
      else if (s.sel.includes(ch.k)) icon = '✗';
    }
    div.innerHTML = `
      <div class="choice-key">${ch.k}</div>
      <div class="choice-body">
        <div class="choice-text">${ch.ko}</div>
        <div class="choice-en">${ch.en}</div>
      </div>
      <div class="result-icon">${icon}</div>`;
    if (!s.done) div.onclick = () => doSelect(idx, ch.k);
    cc.appendChild(div);
  });

  applyLang(curLang);

  const reviewBtn = document.getElementById('btn-review');
  reviewBtn.disabled = !s.done && s.sel.length === 0;
  if (s.done) {
    reviewBtn.textContent = '📁 정답 접기';
    reviewBtn.classList.add('is-done');
  } else {
    reviewBtn.textContent = '📋 정답 확인';
    reviewBtn.classList.remove('is-done');
  }

  const hint = document.getElementById('hint-text');
  if (s.done) {
    const correct = arraysEqual(s.sel.slice().sort(), q.answer.slice().sort());
    hint.textContent = correct ? '🎉 정답입니다!' : `❌ 오답입니다. 정답은 ${q.answer.join(', ')} 입니다.`;
  } else if (s.sel.length > 0) {
    const remaining = q.type === 'multi' ? q.multiCount - s.sel.length : 0;
    hint.textContent = (q.type === 'multi' && remaining > 0)
      ? `${s.sel.join(', ')}번 선택됨. ${remaining}개 더 선택하세요.`
      : `${s.sel.join(', ')}번을 선택했습니다. 정답 확인 버튼을 눌러주세요.`;
  } else {
    hint.textContent = '선택지를 클릭하면 정답 확인 버튼이 활성화됩니다.';
  }

  const rp = document.getElementById('review-panel');
  if (s.done) { renderReview(q); rp.classList.add('show'); }
  else rp.classList.remove('show');

  document.getElementById('btn-prev-top').disabled = idx === 0;
  document.getElementById('btn-next-top').disabled = idx === QS.length - 1;

  document.getElementById('btn-prev').disabled  = idx === 0;
  document.getElementById('btn-next').disabled  = idx === QS.length - 1;
  document.getElementById('nav-info').textContent = `${idx+1} / ${QS.length} 문제`;
  updateSelectStatus();
}

function renderReview(q) {
  document.getElementById('review-answer-badge').textContent = '✓ ' + q.answer.join(', ');
  document.getElementById('review-vote-badge').innerHTML = `커뮤니티 투표 <span>${q.vote}</span>`;
  document.getElementById('review-explain').innerHTML = q.explain;

  const ws = document.getElementById('review-wrong');
  const wt = document.getElementById('wrong-section-title');
  if (q.wrong) { ws.innerHTML = q.wrong; ws.style.display=''; wt.style.display=''; }
  else { ws.style.display='none'; wt.style.display='none'; }

  const dl = document.getElementById('disc-list');
  dl.innerHTML = '';
  dl.classList.remove('show');
  (q.disc || []).forEach(d => {
    dl.innerHTML += `<div class="disc-item"><div class="disc-ans">${d.ans}</div>${d.txt}</div>`;
  });
}

// ── 인터랙션 ───────────────────────────────────────
function doSelect(idx, key) {
  const q = QS[idx];
  const s = state[idx];
  if (s.done) return;
  if (q.type === 'single') {
    s.sel = [key];
  } else {
    const pos = s.sel.indexOf(key);
    if (pos >= 0) s.sel.splice(pos, 1);
    else if (s.sel.length < q.multiCount) s.sel.push(key);
  }
  renderQ(idx);
}

// 정답확인 / 정답접기 토글
function toggleReview() {
  const s = state[curQ];
  const q = QS[curQ];
  const rp = document.getElementById('review-panel');
  const btn = document.getElementById('btn-review');

  if (!s.done) {
    if (s.sel.length === 0) return;
    s.done = true;
    saveHistory(); // 결과를 쿠키에 저장
    renderQ(curQ);
    state[curQ].result = getQuestionResult(curQ); // 채점 결과를 상태에 보존
    renderReview(q);
    // rp.classList.add('show');
    // btn.textContent = '📁 정답 접기';
    // btn.classList.add('is-done');
    rp.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  // 이미 채점됨 → 정답 접기: 상태 초기화하여 문제 재풀이 가능
  if (rp.classList.contains('show')) {
    rp.classList.remove('show');
    // 초기화 전에 s.done=true 상태에서 정확한 결과(ok/ng)를 계산하여 result에 보존
    const prevResult = getQuestionResult(curQ);
    state[curQ] = { sel: [], done: false, result: prevResult };
    renderQ(curQ);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    rp.classList.add('show');
    btn.textContent = '📁 정답 접기';
    btn.classList.add('is-done');
    rp.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function goQ(idx) {
  idx = parseInt(idx);
  if (isNaN(idx) || idx < 0 || idx >= QS.length) return;
  curLang = 'ko';
  const langBtn = document.getElementById('btn-lang');
  if (langBtn) { langBtn.textContent = '양국어'; langBtn.classList.remove('active'); }
  const prevResult = state[idx].result;
  state[idx] = { sel: [], done: prevResult !== null, result: prevResult };
  state[idx] = { sel: [], done: false, result: state[idx].result }; // 히스토리는 유지
  renderQ(idx);
  window.scrollTo({ top:0, behavior:'smooth' });
}

function goQWithReset(idx) {
  goQ(idx);
}

// ── 언어 토글 ──────────────────────────────────────
function toggleLang() {
  const btn = document.getElementById('btn-lang');
  if (curLang === 'ko') {
    curLang = 'both';
    btn.textContent = '한국어만';
    btn.classList.add('active');
  } else {
    curLang = 'ko';
    btn.textContent = '양국어';
    btn.classList.remove('active');
  }
  applyLang(curLang);
}

function applyLang(lang) {
  document.getElementById('q-en-text').style.display = (lang === 'both') ? 'block' : 'none';
  document.querySelectorAll('.choice-en').forEach(e => {
    e.style.display = (lang === 'both') ? 'block' : 'none';
  });
}

// ── 테마 ───────────────────────────────────────────
function loadTheme() {
  const savedTheme = getCookie('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
  }
}

function updateThemeUI(theme) {
  document.getElementById('theme-icon').textContent  = theme === 'dark' ? '☀️' : '🌙';
  document.getElementById('theme-label').textContent = theme === 'dark' ? '라이트' : '다크';
}

function toggleTheme() {
  const html = document.documentElement;
  const dark = html.getAttribute('data-theme') === 'dark';
  const newTheme = dark ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  setCookie('theme', newTheme, COOKIE_DAYS);
  updateThemeUI(newTheme);
}

// ── Wide 모드 ──────────────────────────────────────
let isWideMode = false;

function loadWideMode() {
  const val = getCookie('sap2_wide_mode');
  isWideMode = val === '1';
  applyWideMode();
}

function applyWideMode() {
  const wrap = document.querySelector('.wrap');
  const topbar = document.querySelector('.topbar');
  const btn = document.getElementById('btn-wide');
  if (!wrap || !btn) return;
  
  if (isWideMode) {
    wrap.classList.add('wide');
    if (topbar) topbar.classList.add('wide');
    btn.classList.add('active');
    btn.textContent = '📐 기본 화면';
  } else {
    wrap.classList.remove('wide');
    if (topbar) topbar.classList.remove('wide');
    btn.classList.remove('active');
    btn.textContent = '📏 넓은 화면';
  }
}

function toggleWideMode() {
  isWideMode = !isWideMode;
  setCookie('sap2_wide_mode', isWideMode ? '1' : '0', COOKIE_DAYS);
  applyWideMode();
}

// ── 스크롤 상단 버튼 ────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 200);
  }, { passive: true });
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── 유틸 ───────────────────────────────────────────
function arraysEqual(a, b) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

init();