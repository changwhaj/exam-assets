AWS SAP2 Q201~Q300 요청

🚀 AWS SAP-C02 한글 학습 HTML용 qs_setXX.js 생성 프로젝트

📌 프로젝트 개요
GitHub의 영문 AWS SAP-C02 시험 문제를 수집하여
한글 번역 + 정답 해설 + 인터랙티브 학습 HTML로 변환

소스 URL 패턴:
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q{NNNN}.html

✅ 작업 범위
예: Q201~Q300 수집 → qs_set21.js~qs_set30.js 생성 (10문제씩)
맨 아래 문제 URL을 제공하면 해당 범위로 작업

📋 qs_setXX.js 파일 데이터 형식 (반드시 준수)

각 파일은 window.QS_SET{NN} 전역 변수로 할당

`javascript
window.QS_SET01 = [
  {
    n: 1, // 문제 번호

    en: `영문 원문 HTML`,           // 오탈자만 수정  
    ko: `한국어 번역 HTML`,  

    type: 'single',                // 단일 선택
    // type: 'multi', multiCount: 2,  // 복수 선택 시  

    choices: [  
      { k:'A', en:`영문`, ko:`한글` },  
      { k:'B', en:`영문`, ko:`한글` },  
      { k:'C', en:`영문`, ko:`한글` },  
      { k:'D', en:`영문`, ko:`한글` },  
    ],  

    answer: ['A'],  // 복수 시 ['A','C']  
    vote: '87% A',  // 커뮤니티 투표 요약  

    explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p><p>기술 해설</p>`,  
    wrong: `<p><span class="mark-no">❌ B</span> — 오답 이유</p>`,  

    disc: [  
      { ans:'A (87%)', txt:'토론 요약' }  
    ]  
  },
];
`

⚠️ 작업 규칙
- en: 원문 유지 (오탈자만 수정, 문장 변경 금지)
- ko: 자연스러운 한국어 번역
- HTML 태그 유지 (<strong>, <code>, <br>)
- 복수 선택: type: 'multi', multiCount: N
- 정답 기준:
  correct-answer + 커뮤니티 투표
  AWS 공식 문서로 최종 검증 — 커뮤니티 답안 오류 있을 수 있음

✅ 작성 기준
1. explain (정답 해설)
- <span class="mark-ok">✅ X — 핵심 이유</span> 로 시작
- 기술적 근거 중심 설명
- AWS 공식 문서 링크 포함 (<a href="..." target="_blank">)
- 커뮤니티 직접 인용 금지 - 기술 설명으로 대체
2. wrong (오답 해설)
- <span class="mark-no">❌ X</span> 로 시작
- 왜 틀렸는지 구체적으로 설명
- 순환 설명 금지
3. disc (토론 요약)
- 핵심 논거만 요약
- 중복/단순 동의 제거
- ans: 지지 답안 (예: 'A, C')

⚙️ 작업 순서
- URL 10개씩 web_fetch 수집
- 문제 / 정답 / 토론 분석
- en / ko / choices / answer / vote 생성
- explain / wrong / disc 작성 (AWS 문서 기반 검증)
- 10문제 단위로 qs_setXX.js 생성 제공 후 반복

아래 URL을 붙여넣으면 바로 작업 시작해줘.

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0421.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0422.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0423.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0424.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0425.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0426.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0427.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0428.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0429.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0430.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0431.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0432.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0433.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0434.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0435.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0436.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0437.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0438.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0439.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0440.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0441.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0442.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0443.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0444.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0445.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0446.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0447.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0448.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0449.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0450.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0451.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0452.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0453.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0454.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0455.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0456.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0457.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0458.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0459.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0460.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0461.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0462.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0463.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0464.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0465.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0466.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0467.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0468.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0469.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0470.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0471.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0472.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0473.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0474.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0475.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0476.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0477.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0478.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0479.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0480.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0481.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0482.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0483.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0484.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0485.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0486.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0487.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0488.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0489.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0490.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0491.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0492.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0493.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0494.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0495.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0496.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0497.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0498.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0499.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0500.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0501.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0502.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0503.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0504.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0505.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0506.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0507.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0508.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0509.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0510.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0511.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0512.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0513.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0514.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0515.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0516.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0517.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0518.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0519.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0520.html

https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0521.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0522.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0523.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0524.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0525.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0526.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0527.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0528.html
https://changwhaj.github.io/exam-assets/exam/aws/SAP_C02/SAP2-Q0529.html
