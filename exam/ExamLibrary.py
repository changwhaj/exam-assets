import time
import re
import os
import platform
import pandas as pd
from datetime import datetime, timedelta

import pyautogui

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager    # 크롬 드라이버 자동 업데이트

from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver import ActionChains

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from bs4 import BeautifulSoup

from random import *
from pathlib import Path
from dateutil import parser

def sleep_random_sec(sec):
    for t in reversed(range(randint(1, sec))):
    #    print(str(t), end='', flush=True)
        time.sleep(1)
    # print('\r', end='')

def set_chrome_driver():
    #if platform.system() == "Darwin":
    #    service = Service(executable_path=r'./chromedriver')
    #elif platform.system() == "Windows":
    #    service = Service(executable_path=r'c:/temp/chromedriver.exe')
    
    # Setup options
    options = webdriver.ChromeOptions()
    options.add_argument("disable-infobars")    # 정보 표시줄 사용 안함
    options.add_argument("disable-extensions")    # 확장 사용 안함
    options.add_argument("disable-gpu")    # GPU 사용 안함
    # options.add_argument('headless') # 해드리스 사용
    # options.add_argument('start-maximized') # 시작시 전체 화면
    options.add_argument('--no-sandbox')
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--lang=kr')  # set your language here
    userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)s Chrome/92.0.4515.131 Safari/537.36"
    options.add_argument(f"user-agent={userAgent}")

    options.add_experimental_option('excludeSwitches', ['enable-logging'])  # 불필요한 에러 메시지 제거
    options.add_experimental_option("detach", True)     # 브라우저 꺼짐 방지 코드
    
    # Selenium 4.0 -- load webdriver
    try:
        # service = Service(ChromeDriverManager().install())    # CDM 설치 및 사용
        # driver = webdriver.Chrome(service=service, options=options)
        driver_path = ChromeDriverManager().install()
        correct_driver_path = os.path.join(os.path.dirname(driver_path), "chromedriver.exe")
        driver = webdriver.Chrome(service=Service(executable_path=correct_driver_path), options=options)
    except Exception as e:
        print(e)
        return
    
    driver.set_window_size(1500, driver.get_window_rect()["height"])
    # driver.set_window_size(1400, 1040)
    
    return driver

def send_key_to_background_window(window_title, key):
    import ctypes

    # Define constants
    WM_KEYDOWN = 0x0100
    WM_KEYUP = 0x0101

    # Find the window by title
    target_window = ctypes.windll.user32.FindWindowW(None, window_title + " - Chrome")

    if target_window == 0:
        print(f"Window '{window_title}' not found")
        return

    # Send key press without activating the window
    vk_code = ord(key)
    ctypes.windll.user32.PostMessageW(target_window, WM_KEYDOWN, vk_code, 0)
    ctypes.windll.user32.PostMessageW(target_window, WM_KEYUP, vk_code, 0)

def set_translate_to_kr(driver):
    while True:
        actionChains = ActionChains(driver)
        actionChains.context_click().perform()
        
        time.sleep(1)
        send_key_to_background_window(driver.title, "T")
        # pyautogui.hotkey('T')
        time.sleep(1)

        bs = BeautifulSoup(driver.page_source, 'html.parser')

        pattern = r'>답변 숨기기<'
        match = re.search(pattern, str(bs))
        if match:
            pyautogui.hotkey('ESC')
            return
        
        pattern = r'>댓글</font'
        match = re.search(pattern, str(bs))
        if match:
            pyautogui.hotkey('ESC')
            return
        # print(bs)
        if platform.system() == "Windows":
            import winsound
            winsound.PlaySound("SystemExclamation", winsound.SND_ALIAS)
        ###time.sleep(1)
        
        # try:
        #     driver.switch_to.window(driver.window_handles[1])
        #     driver.close()
        # except Exception as e:
        #     pass

def scroll_page(driver):
    # Set the interval between scrolls in seconds
    scroll_interval = 1

    current_scroll_position = driver.execute_script("return window.scrollY;")

    while True:
        # Send the down arrow key to scroll down the page
        driver.find_element(By.TAG_NAME, "body").send_keys(Keys.PAGE_DOWN)
        
        # Wait for the specified interval
        time.sleep(scroll_interval)
        prev_scroll_position = current_scroll_position
        current_scroll_position = driver.execute_script("return window.scrollY;")

        if current_scroll_position == prev_scroll_position:
            break
        
def set_headless_mode(driver, headless):
    driver.quit()
    service = Service(executable_path=r'c:/temp/chromedriver.exe')
    options = Options()
    if headless:
        options.add_argument("--headless=new")
    else:
        # Copy the existing arguments except for the "--headless" argument
        for arg in driver.options.arguments:
            if arg != "--headless=new":
                options.add_argument(arg)
    return webdriver.Chrome(service=service, options=options)

def open_exam(driver, discuss_url):
    # exam_url = 'http://webcache.googleusercontent.com/search?q=cache:' + \
    #            'https://www.examtopics.com/discussions/isaca/view/' + str(did) + \
    #            '-exam-cisa-topic-1-question-' + str(int(qid)) + '-discussion/'
    # exam_url = 'https://www.examtopics.com/discussions/isaca/view/' + str(did) + \
    #            '-exam-cisa-topic-1-question-' + str(int(qid)) + '-discussion/'

    exam_url = 'https://www.examtopics.com' + discuss_url

    driver.get(exam_url)
    sleep_random_sec(1)

    bs = BeautifulSoup(driver.page_source, 'html.parser')
    div_discuss = bs.find_all("div", {"class": "container outer-discussion-container"})
    while (len(div_discuss) <= 0):
        print("Waiting...")
        bs = BeautifulSoup(driver.page_source, 'html.parser')
        div_discuss = bs.find_all("div", {"class": "container outer-discussion-container"})
        if (driver.title == 'Error 404 (Not Found)!!1'):
            break

        if platform.system() == "Windows":
            import winsound
            winsound.PlaySound("SystemExclamation", winsound.SND_ALIAS)
        time.sleep(1)
    
    return

def open_template_exam(postdate):
    template = "./TEMPLATE.html"
    with open(template, 'r', encoding='utf-8') as file:
        html_content = file.read()
        
    bs = BeautifulSoup(html_content, 'html.parser')
    # meta 태그 찾기
    meta = bs.find("meta", attrs={"name": "refresh_date"})
    if meta:
        meta["content"] = postdate
    else:
        new_meta = bs.new_tag(
            "meta",
            attrs={"name": "refresh_date", "content": postdate}
        )
        bs.head.append(new_meta)

    return bs

def remove_exam_element(driver):
    try:
        driver.execute_script("arguments[0].remove();", driver.find_element(By.ID, 'bN015htcoyT__google-cache-hdr'))
    except Exception as e:
        pass

    try:
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'div.disclaimer-box.mt-2'));
    except Exception as e:
        pass
    try:
        driver.execute_script("arguments[0].remove();", driver.find_element(By.XPATH, '/html/head/style'))
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'div.full-width-header'))
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, '#rs-footer'))
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'div.contrib__ulimited'));
        #driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'div.row'));
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'div.action-row-container.mb-4'))
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CLASS_NAME, 'all-questions-link'));
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CLASS_NAME, 'discussion-meta-data'));
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CLASS_NAME, 'vote-answer-button'));     
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'div.popup-content'))
        driver.execute_script("""
            var popup = document.getElementById('notRemoverPopup');
            if (popup) {
                // 바로 위의 <style> 요소 제거
                const prev = popup.previousElementSibling;
                if (prev && prev.tagName.toLowerCase() === 'style') {
                    prev.remove();
                }

                // 바로 아래의 <script> 요소 제거
                const next = popup.nextElementSibling;
                if (next && next.tagName.toLowerCase() === 'script') {
                    next.remove();
                }
            }
        """)
        driver.execute_script("arguments[0].removeAttribute('class');", driver.find_element(By.TAG_NAME, 'html'))
        driver.execute_script("arguments[0].removeAttribute('href');", driver.find_element(By.CLASS_NAME, 'discussion-link'))
        driver.execute_script("arguments[0].removeAttribute('href');", driver.find_element(By.CLASS_NAME, 'title-username'))
    except Exception as e:
        # print(f"*** Error remove_exam_element !!! {e}")
        pass

def remove_discuss_element(driver):
    try:
        # remove create new comment area
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CLASS_NAME, 'create-comment-base'));
        driver.execute_script("arguments[0].removeAttribute('href');", driver.find_element(By.CLASS_NAME, 'title-username'))
    except Exception as e:
        pass

    driver.execute_script("""
        var divs = document.getElementsByClassName('comment-head');
        var scripts = document.querySelectorAll('script');
        
        for (var i=0; i < divs.length; i++) {
            divs[i].querySelectorAll("a")[0].removeAttribute("href");
        }
        var spans = document.getElementsByClassName('comment-control-buttons');

        for (var i=0; i < spans.length; i++) {
            alinks = spans[i].querySelectorAll("a");
            for (var j=0; j < alinks.length; j++) {
                alinks[j].removeAttribute("href");
            }
        }
        scripts.forEach(script => script.remove());
    """)
    
def open_discuss(driver, discuss_id):
    if (len(str(discuss_id)) <= 0):
        return ""

    discuss_url = 'https://www.examtopics.com/ajax/discussion/load-complete/?discussion-id=' + str(discuss_id)

    driver.execute_script("window.open()");
    driver.switch_to.window(driver.window_handles[1]);
    driver.get(discuss_url)
    time.sleep(1)
    
    remove_discuss_element(driver)

    bs = BeautifulSoup(driver.page_source, 'html.parser')
    
    # 모든 <script> 태그 제거
    for script in bs.find_all("script"):
        script.extract()

    driver.close();
    driver.switch_to.window(driver.window_handles[0]);

    comment_spans = bs.find_all('span', class_='comment-date')
    for comment_span in comment_spans:
        title = comment_span.get('title')
        if title:
            kst_time = parser.parse(str(title).replace("midnight", "12:00 a.m.").replace("noon", "12:00 p.m.")) + timedelta(hours=9)
            comment_span.string = kst_time.strftime("%Y-%m-%d %H:%M")
            comment_span["title"] = comment_span.string

    div = bs.find('div', attrs={'class': 'container outer-discussion-container'})
    
    return div

def replace_duscuss(driver, discuss_id):
    bs = BeautifulSoup(driver.page_source, 'html.parser')
    loadfull = bs.find_all("a", {"class": "load-full-discussion-button ml-3"})
    if (len(loadfull) > 0):
        div_discuss = bs.find_all("div", {"class": "container outer-discussion-container"})[0]
        div_full_discuss = open_discuss(driver, discuss_id)
        if ((len(div_discuss) > 0) & (len(div_full_discuss) > 0)):
            div_discuss.contents = [BeautifulSoup(div_full_discuss.decode_contents(), 'html.parser')]
    else:
        remove_discuss_element(driver)
        bs = BeautifulSoup(driver.page_source, 'html.parser')
        comment_spans = bs.find_all('span', class_='comment-date')
        for comment_span in comment_spans:
            title = comment_span.get('title')
            if title:
                kst_time = parser.parse(str(title).replace("midnight", "12:00 a.m.").replace("noon", "12:00 p.m.")) + timedelta(hours=9)
                comment_span.string = kst_time.strftime("%Y-%m-%d %H:%M")
                comment_span["title"] = comment_span.string

    return bs

def open_new_discussion(driver, discuss_id):
    if (len(str(discuss_id)) <= 0):
        return ""

    discuss_url = f"https://www.examtopics.com/ajax/discussion/load-complete/?discussion-id={discuss_id}"

    driver.execute_script("window.open()");
    driver.switch_to.window(driver.window_handles[1]);
    driver.get(discuss_url)
    time.sleep(1)
    
    remove_discuss_element(driver)

    bs = BeautifulSoup(driver.page_source, 'html.parser')
    
    comment_spans = bs.find_all('span', class_='comment-date')
    for comment_span in comment_spans:
        title = comment_span.get('title')
        if title:
            kst_time = parser.parse(str(title).replace("midnight", "12:00 a.m.").replace("noon", "12:00 p.m.")) + timedelta(hours=9)
            comment_span.string = kst_time.strftime("%Y-%m-%d %H:%M")
            comment_span["title"] = comment_span.string

    # 모든 <script> 태그 제거
    for script in bs.find_all("script"):
        script.extract()

    div_discuss = bs.find_all("div", {"class": "container outer-discussion-container"})[0]

    div = bs.find('div', attrs={'class': 'container outer-discussion-container'})

    div_discuss.contents = [BeautifulSoup(div.decode_contents(), 'html.parser')]
    discussion_en = div.decode_contents()

    new_html = f"""
<!DOCTYPE html><html lang="ko">
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>

    <title>Exam Topics Discussion</title>
</head>
<body>
    <div>Comments</div>
    {str(bs)}
</body>
</html>
"""
    driver.execute_script("document.documentElement.innerHTML = arguments[0];", new_html)

    set_translate_to_kr(driver)
    scroll_page(driver)

    html = driver.page_source
    bs = BeautifulSoup(html, 'html.parser')

    pattern = r'</*font[^<]*>'
    discussion_kr = bs.find("div", {"class": "container outer-discussion-container"}).decode_contents()
    discussion_kr = re.sub(pattern, '', discussion_kr)

    driver.close();
    driver.switch_to.window(driver.window_handles[0]);

    return (discussion_en, discussion_kr)

def get_question_postdate(fname):
    my_file = Path(fname)

    # file does not exists. Okay to overwrite
    if not my_file.is_file(): return None
    
    with open(fname, "r", encoding="utf-8") as file:
        bs = BeautifulSoup(file, "html.parser")

        meta = bs.find("meta", attrs={"name": "refresh_date"})
        refresh_date = meta["content"] if meta else None
        return(refresh_date)
    
    return None

def set_question_postdate(fname, postdate):
    my_file = Path(fname)

    if my_file.is_file():
        with open(fname, "r", encoding="utf-8") as file:
            bs = BeautifulSoup(file, "html.parser")

            # meta 태그 찾기
            meta = bs.find("meta", attrs={"name": "refresh_date"})
            if meta:
                meta["content"] = postdate
            else:
                new_meta = bs.new_tag(
                    "meta",
                    attrs={"name": "refresh_date", "content": postdate}
                )
                bs.head.append(new_meta)

        with open(fname, "w", encoding='utf-8') as file:
            file.write(str(bs))    

def get_question_data_id(fname):
    pattern = r'<div class="question-body mt-3 pt-3 border-top" data-id="([0-9]+)">'

    my_file = Path(fname)

    # file does not exists. Okay to overwrite
    if not my_file.is_file(): return 0

    with open(fname, 'r', encoding='utf-8') as file:
        line = file.read()

        match = re.search(pattern, line)
        if match:
            return int(match.group(1))

    return 0
        
def check_for_overwrite(fname, data_id):
    search_string = '<div class="question-body mt-3 pt-3 border-top" data-id="' + str(data_id) + '">'

    found = False
    my_file = Path(fname)

    # file does not exists. Okay to overwrite
    if not my_file.is_file(): return True

    with open(fname, "r", encoding='utf-8') as file:
        for line in file:
            if search_string in line:
                found = True
                break

    return found
        
def save_html(driver, did, postdate, fname):
    bs = replace_duscuss(driver, did)

    page_title = driver.title.split(' - ')[0]
    question_data_id = int(bs.find("div", {"class": "question-body mt-3 pt-3 border-top"})["data-id"])
    file_data_id = get_question_data_id(fname)
    if (file_data_id > 0) & (question_data_id > file_data_id):
        new_fname = fname[:-5] + '-1.html'
        try:
            os.rename(fname, new_fname)
        except FileNotFoundError:
            print("The current file does not exist.")
        except OSError as e:
            print(f"An error occurred while renaming the file: {e}")
    elif question_data_id < file_data_id:
        fname = fname[:-5] + '-1.html'
        
#    while not check_for_overwrite(fname, question_data_id):
#        fname = fname[:-5] + '-1.html'

    header_contents = bs.find("div", {"class": "discussion-list-header"}).decode_contents()
    container_contents = bs.find("div", {"class": "discussion-header-container"}).decode_contents()
    discussion = bs.find("div", {"class": "discussion-page-comments-section"})
    # 모든 <script> 태그 제거
    for script in discussion.find_all("script"):
        script.extract()
    discussion_contents = discussion.decode_contents()

    bs = open_template_exam(postdate)

    # title = bs.find("title")
    # title.contents = [BeautifulSoup(page_title, 'html.parser')]

    # header = bs.find("div", {"class": "discussion-list-header"})
    # header.contents = [BeautifulSoup(header_contents, 'html.parser')]
    # header = bs.find("div", {"class": "discussion-list-header-en"})
    # header.contents = [BeautifulSoup(header_contents, 'html.parser')]

    # container = bs.find("div", {"class": "discussion-header-container"})
    # container.contents = [BeautifulSoup(container_contents, 'html.parser')]
    # container = bs.find("div", {"class": "discussion-header-container-en"})
    # container.contents = [BeautifulSoup(container_contents, 'html.parser')]

    # discussion = bs.find("div", {"class": "discussion-page-comments-section"})
    # discussion.contents = [BeautifulSoup(discussion_contents, 'html.parser')]
    # discussion["data-discussion-question-id"] = did
    # discussion = bs.find("div", {"class": "discussion-page-comments-section-en"})
    # discussion.contents = [BeautifulSoup(discussion_contents, 'html.parser')]
    # discussion["data-discussion-question-id"] = did

    # title
    title = bs.find("title")
    title.clear()
    title.append(page_title)

    # header KR
    header = bs.find("div", {"class": "discussion-list-header"})
    header.clear()
    header.append(BeautifulSoup(header_contents, 'html.parser'))

    # header EN
    header_en = bs.find("div", {"class": "discussion-list-header-en"})
    header_en.clear()
    header_en.append(BeautifulSoup(header_contents, 'html.parser'))

    # container KR
    container = bs.find("div", {"class": "discussion-header-container"})
    container.clear()
    container.append(BeautifulSoup(container_contents, 'html.parser'))

    # container EN
    container_en = bs.find("div", {"class": "discussion-header-container-en"})
    container_en.clear()
    container_en.append(BeautifulSoup(container_contents, 'html.parser'))

    # discussion KR
    discussion = bs.find("div", {"class": "discussion-page-comments-section"})
    discussion.clear()
    discussion.append(BeautifulSoup(discussion_contents, 'html.parser'))
    discussion["data-discussion-question-id"] = did

    # discussion EN
    discussion_en = bs.find("div", {"class": "discussion-page-comments-section-en"})
    discussion_en.clear()
    discussion_en.append(BeautifulSoup(discussion_contents, 'html.parser'))
    discussion_en["data-discussion-question-id"] = did

    dir = os.path.dirname(fname)
    if not os.path.exists(dir):
        # Create the directory
        os.makedirs(dir)

    # print(f'save_html(driver, f{did}, f{fname}')

    with open(fname, "w", encoding='utf-8') as file:
        file.write(str(bs))
        # file.write('<!DOCTYPE html>\n' + str(bs))
        # file.write(bs.prettify())
    
    return question_data_id

def make_filename(qtitle, qid, dataid, tid=0):
    fname = ""

    exams = [
        { 
            "qtitle": "Exam CKA topic 1",
            "prefname": "cncf/CKA/CKA-Q",
            "qlength": 23,
            "first_id": 830058,
        },
        # {
        #     "qtitle": "Exam AWS Certified Advanced Networking - Specialty ANS-C01 topic 1",
        #     "prefname": "aws/ANS_C01/ANS-Q",
        #     "qlength": 189,
        #     "first_id": 875171,
        # },
        {
            "qtitle": "Exam AWS Certified AI Practitioner AIF-C01 topic 1",
            "prefname": "aws/AIF_C01/AIF-Q",
            "qlength": 334,
            "first_id": 933824,
        },
        {
            "qtitle": "Exam AWS Certified Cloud Practitioner CLF-C02 topic 1",
            "prefname": "aws/CLF_C02/CLF2-Q",
            "qlength": 719,
            "first_id": 898791,
        },
        {
            "qtitle": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1",
            "prefname": "aws/SAA_C03/SAA3-Q",
            "qlength": 1019,
            "first_id": 839758,
        },
        {
            "qtitle": "Exam AWS Certified Machine Learning Engineer - Associate MLA-C01 topic 1",
            "prefname": "aws/MLA_C01/MLA-Q",
            "qlength": 145,
            "first_id": 839758,
        },
        {
            "qtitle": "Exam AWS Certified Developer - Associate DVA-C02 topic 1",
            "prefname": "aws/DVA_C02/DVA2-Q",
            "qlength": 557,
            "first_id": 874573,
        },
        {
            "qtitle": "Exam AWS Certified Data Engineer - Associate DEA-C01 topic 1",
            "prefname": "aws/DEA_C01/DEA-Q",
            "qlength": 261,
            "first_id": 908898,
        },
        {
            "qtitle": "Exam AWS Certified SysOps Administrator - Associate topic 1",
            "prefname": "aws/SOA_C02/SOA2-Q",
            "qlength": 478,
            "first_id": 809742,
        },
        {
            "qtitle": "Exam AWS Certified CloudOps Engineer - Associate SOA-C03 topic 1",
            "prefname": "aws/SOA_C03/SOA3-Q",
            "qlength": 65,
            "first_id": 975094,
        },
        {
            "qtitle": "Exam AWS Certified DevOps Engineer - Professional DOP-C02 topic 1",
            "prefname": "aws/DOP_C02/DOP2-Q",
            "qlength": 390,
            "first_id": 879465,
        },
        {
            "qtitle": "Exam AWS Certified Solutions Architect - Professional SAP-C02 topic 1",
            "prefname": "aws/SAP_C02/SAP2-Q",
            "qlength": 529,
            "first_id": 856116,
        },
        {
            "qtitle": "Exam AWS Certified Machine Learning - Specialty topic 1",
            "prefname": "aws/MLS_C01/MLS-Q",
            "qlength": 369,
            "first_id": 781931,
        },
        {
            "qtitle": "Exam AWS Certified Security - Specialty SCS-C02 topic 1",
            "prefname": "aws/SCS_C02/SCS2-Q",
            "qlength": 173,
            "first_id": 897420,
        },
        {
            "qtitle": "Exam AWS Certified Advanced Networking - Specialty ANS-C01 topic 1",
            "prefname": "aws/ANS_C01/ANS-Q",
            "qlength": 272,
            "first_id": 875171,
        },
    ]

    findexam = next((exam for exam in exams if exam["qtitle"] == qtitle), None)

    if findexam:
        if (dataid > 0) & (dataid < findexam["first_id"]):
            return fname
        fname = findexam["prefname"] + format(int(qid), '04') + '.html'
    # else:
        # elif qtitle == 'Exam AWS Certified Developer Associate topic 1':
        #     fname = 'aws/DVA/DVA-Q' + format(int(qid), '04') + '.html'
        # elif qtitle == "Exam AWS Certified Solutions Architect - Associate SAA-C02 topic 2":
        #     fname = 'aws/SAA_C02_t2/SAA-Q' + format(int(qid), '04') + '.html'
        # elif qtitle == "Exam AWS Certified Solutions Architect - Associate topic 1":
        #     fname = 'aws/SAA/SAA-Q' + format(int(qid), '04') + '.html'
        # elif qtitle == "Exam AWS Certified Solutions Architect - Associate topic 2":
        #     fname = 'aws/SAA2/SAA-Q' + format(int(qid), '04') + '.html'
        # elif qtitle == "Exam AWS Certified Solutions Architect - Associate SAA-C02 topic 1":
        #     fname = 'aws/SAA_C02/SAA2-Q' + format(int(qid), '04') + '.html'
        # elif qtitle == "Exam AWS Certified Solutions Architect - Professional topic 1":
        #     fname = 'aws/SAP/SAP-Q' + format(int(qid), '04') + '.html'
        # elif qtitle == "Exam AWS Certified Solutions Architect - Professional topic 2":
        #     fname = 'aws/SAP2/SAP-Q' + format(int(qid), '04') + '.html'
        
    return fname

def make_question_file(driver, fname, url, did, postdate):
    open_exam(driver, url)

    driver.switch_to.window(driver.window_handles[0])
    # print(driver.title)
    if (driver.title == 'Error 404 (Not Found)!!1'): return 0
    if (len(driver.title) < 20): return 0

    remove_exam_element(driver)

    data_id = save_html(driver, did, postdate, fname)

    return data_id

def translate_discuss_to_kr(driver, fname, discuss_id):
    if platform.system() == "Windows":
        url = f'file:///E:/MyProjects/ExamTopics/exam-assets/exam/{fname}'
    elif platform.system() == "Darwin":
        url = f'file:///Users/changwhaj/MyProjects/ExamTopics/exam-assets/exam/{fname}'
    # url = f'http://127.0.0.1:5500/exam-assets/exam/{fname}'
    driver.get(url)
    driver.switch_to.window(driver.window_handles[0])

    div_full_discuss = open_discuss(driver, discuss_id)

    driver.find_element(By.CSS_SELECTOR, 'a.btn.btn-primary.reveal-solution').click()
    driver.find_element(By.CSS_SELECTOR, 'a.badge.reveal-comment').click()
    set_translate_to_kr(driver)
    driver.find_element(By.CSS_SELECTOR, 'a.btn.btn-primary.hide-solution').click()
    scroll_page(driver)
    try:
        driver.find_element(By.CSS_SELECTOR, '#scrollUp').click()
    except Exception as e:
        pass
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, 'a.badge.hide-comment').click()

    try:
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, '#goog-gt-tt'))
    except Exception as e:
        pass
    try:
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'head > link'))
        driver.execute_script("arguments[0].removeAttribute('class');", driver.find_element(By.TAG_NAME, 'html'))
    except Exception as e:
        print(f"*** Error translate_discuss_to_kr !!!")
        pass

def save_new_discuss(driver, fname, did, postdate, progress):

    bs = BeautifulSoup(driver.page_source, 'html.parser')
    pattern = r'</*font[^<]*>'
    header_contents = bs.find("div", {"class": "discussion-list-header"}).decode_contents()
    header_contents = re.sub(pattern, '', header_contents)
    container_contents = bs.find("div", {"class": "discussion-header-container"}).decode_contents()
    container_contents = re.sub(pattern, '', container_contents)
    discussion_contents = bs.find("div", {"class": "discussion-page-comments-section"}).decode_contents()
    discussion_contents = re.sub(pattern, '', discussion_contents)
    # pattern = r'<!-- Additional optional vote button: <a href=.+</a>-->'
    # container_contents = re.sub(pattern, '', container_contents)

    (d_en, d_kr) = open_new_discussion(driver, did)

    with open(fname, "r", encoding='utf-8') as file:
        html = file.read()
        file.close()
            
    #print(html)
    bs = BeautifulSoup(html, 'html.parser')
    # meta 태그 찾기
    meta = bs.find("meta", attrs={"name": "refresh_date"})
    if meta:
        meta["content"] = postdate
    else:
        new_meta = bs.new_tag(
            "meta",
            attrs={"name": "refresh_date", "content": postdate}
        )
        bs.head.append(new_meta)

    container = bs.find("div", {"class": "discussion-header-container"})
    progress_el = container.find("div", {"class": "progress"})
    if progress_el: progress_el.contents = [BeautifulSoup(progress, 'html.parser')] 

    container = bs.find("div", {"class": "discussion-header-container-en"})
    progress_el = container.find("div", {"class": "progress"})
    if progress_el: progress_el.contents = [BeautifulSoup(progress, 'html.parser')] 
    #progress_el.contents = [BeautifulSoup(progress, 'html.parser')] if progress_el else None

    discussion = bs.find("div", {"class": "discussion-page-comments-section"})
    diss_con = discussion.find("div", {"class": "container outer-discussion-container"})
    diss_con.contents = [BeautifulSoup(d_kr, 'html.parser')]

    discussion = bs.find("div", {"class": "discussion-page-comments-section-en"})
    diss_con = discussion.find("div", {"class": "container outer-discussion-container"})
    diss_con.contents = [BeautifulSoup(d_en, 'html.parser')]

    with open(fname, "w", encoding='utf-8') as file:
        file.write(str(bs))

def translate_page_to_kr(driver, fname):
    if platform.system() == "Windows":
        url = f'file:///E:/MyProjects/ExamTopics/exam-assets/exam/{fname}'
    elif platform.system() == "Darwin":
        url = f'file:///Users/changwhaj/MyProjects/ExamTopics/exam-assets/exam/{fname}'
    # url = f'http://127.0.0.1:5500/exam-assets/exam/{fname}'
    driver.get(url)
    driver.switch_to.window(driver.window_handles[0])

    driver.find_element(By.CSS_SELECTOR, 'a.btn.btn-primary.reveal-solution').click()
    driver.find_element(By.CSS_SELECTOR, 'a.badge.reveal-comment').click()
    set_translate_to_kr(driver)
    driver.find_element(By.CSS_SELECTOR, 'a.btn.btn-primary.hide-solution').click()
    scroll_page(driver)
    try:
        driver.find_element(By.CSS_SELECTOR, '#scrollUp').click()
    except Exception as e:
        pass
    time.sleep(1)
    driver.find_element(By.CSS_SELECTOR, 'a.badge.hide-comment').click()

    try:
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, '#goog-gt-tt'))
    except Exception as e:
        pass
    try:
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'head > link'))
        driver.execute_script("arguments[0].removeAttribute('class');", driver.find_element(By.TAG_NAME, 'html'))
    except Exception as e:
        print(f"*** Error translate_page_to_kr !!!")
        pass

def save_kr(driver, fname):
    bs = BeautifulSoup(driver.page_source, 'html.parser')
    pattern = r'</*font[^<]*>'
    header_contents = bs.find("div", {"class": "discussion-list-header"}).decode_contents()
    header_contents = re.sub(pattern, '', header_contents)
    container_contents = bs.find("div", {"class": "discussion-header-container"}).decode_contents()
    container_contents = re.sub(pattern, '', container_contents)
    discussion_contents = bs.find("div", {"class": "discussion-page-comments-section"}).decode_contents()
    discussion_contents = re.sub(pattern, '', discussion_contents)
    # pattern = r'<!-- Additional optional vote button: <a href=.+</a>-->'
    # container_contents = re.sub(pattern, '', container_contents)

    with open(fname, "r", encoding='utf-8') as file:
        html = file.read()
        file.close()
            
    #print(html)
    bs_en = BeautifulSoup(html, 'html.parser')

    # header = bs_en.find("div", {"class": "discussion-list-header"})
    # header.contents = [BeautifulSoup(header_contents, 'html.parser')]

    # header KR
    header = bs_en.find("div", {"class": "discussion-list-header"})
    header.clear()
    header.append(BeautifulSoup(header_contents, 'html.parser'))

    # ===== discussion-header-container =====
    container = bs_en.find("div", {"class": "discussion-header-container"})
    progress_element = container.find("div", {"class": "progress"})
    progress_contents = progress_element.decode_contents() if progress_element else None
 
    # container_contents (KR 버전) → 새로운 soup 객체
    container_kr = BeautifulSoup(container_contents, 'html.parser')

    # progress 복원
    progress = container_kr.find("div", {"class": "progress"})
    if progress and progress_contents is not None:
        progress.clear()
        progress.append(BeautifulSoup(progress_contents, 'html.parser'))
        # progress_fragment = BeautifulSoup(progress_contents, 'html.parser')
        # for child in progress_fragment.contents:
        #     progress.append(child)

    # 기존 container 내부 제거 후 새 내용 삽입
    container.clear()
    container.append(BeautifulSoup(container_kr.decode_contents(), 'html.parser'))
    # for child in container_kr.contents:
    #     container.append(child)

    # progress = container_kr.find("div", {"class": "progress"})
    # if progress and progress_contents is not None:
    #     progress.contents = [BeautifulSoup(progress_contents, 'html.parser')]
    # container.contents = [BeautifulSoup(container_kr.decode_contents(), 'html.parser')]

    # ===== discussion EN 영역 =====
    discussion_contents_en = bs_en.find("div", {"class": "discussion-page-comments-section"}).decode_contents()
    discussion_en = bs_en.find("div", {"class": "discussion-page-comments-section-en"})
    discussion_en.clear()
    discussion_en.append(BeautifulSoup(discussion_contents_en, 'html.parser'))
    # discussion_en_fragment = BeautifulSoup(discussion_contents_en, 'html.parser')
    # for child in discussion_en_fragment.contents:
    #     discussion_en.append(child)

    # discussion_contents_en = bs_en.find("div", {"class": "discussion-page-comments-section"}).decode_contents()
    # discussion = bs_en.find("div", {"class": "discussion-page-comments-section-en"})
    # discussion.contents = [BeautifulSoup(discussion_contents_en, 'html.parser')]

    # ===== discussion KR 영역 =====
    discussion = bs_en.find("div", {"class": "discussion-page-comments-section"})
    discussion.clear()
    discussion.append(BeautifulSoup(discussion_contents, 'html.parser'))
    # discussion_fragment = BeautifulSoup(discussion_contents, 'html.parser')
    # for child in discussion_fragment.contents:
    #     discussion.append(child)

    # discussion = bs_en.find("div", {"class": "discussion-page-comments-section"})
    # discussion.contents = [BeautifulSoup(discussion_contents, 'html.parser')]

    fname_kr = fname[:-5] + '-KR.html'
    fname_kr = '/'.join(fname_kr.split('/')[:-1]) + '/kr/' + fname_kr.split('/')[-1]
    with open(fname, "w", encoding='utf-8') as file:
        file.write(str(bs_en))

def refresh_exam_file(driver, url, fname, did, data_id, postdate, basedate):
    new_data_id = data_id
    file_data_id = get_question_data_id(fname)
    if file_data_id == 0:   # New Exam
        new_data_id = make_question_file(driver, fname, url, did, postdate)
        print(f'\tdata_id={data_id}, new_data_id={new_data_id}, fname={fname}')
        if (data_id > 0 ) & (data_id != new_data_id):
            return 0
        translate_page_to_kr(driver, fname)
        save_kr(driver, fname)
    else:                   # Refresh Discussion
        if get_question_postdate(fname) == postdate:
            print('\tNot changed')
            return new_data_id

        if postdate < basedate:
            set_question_postdate(fname, postdate)
            print('\tExam too old')
            return new_data_id

        print('\tRefresh exam')
        new_data_id = file_data_id
        open_exam(driver, url)
        driver.switch_to.window(driver.window_handles[0])
        if (driver.title != '404 - Page not found') & (len(driver.title) > 20):
            remove_exam_element(driver)

            bs = BeautifulSoup(driver.page_source, 'html.parser')
            container = bs.find("div", {"class": "discussion-header-container"})
            progress_element = container.find("div", {"class": "progress"})
            progress = progress_element.decode_contents() if progress_element else None

        save_new_discuss(driver, fname, did, postdate, progress)

    return new_data_id

def read_Exam_list(fname):
    df = pd.read_csv(fname, delimiter='\t', encoding='utf-8', header=None,
                    names=['ExamNo', 'DiscussNo', 'DataNo', 'PostDate', 'DiscussURL'],
                    index_col=False)

    return df

def read_AZ_Exam_list(fname):

    df = pd.read_csv(fname, delimiter='\t', encoding='utf-8', header=None,
                    names=['Topic', 'ExamNo', 'DiscussNo', 'DataNo', 'DiscussURL'],
                    index_col=False)

    return df

def refresh_AZ_exam(exam_list_file, qtitle):
    start_time = time.time()
    df = read_AZ_Exam_list(exam_list_file)

    driver = set_chrome_driver()
    # driver.set_window_position(1800,10)

    for i in range(len(df))[:]:
        tid = int(df.at[i, 'Topic'])
        qid = int(df.at[i, 'ExamNo'])
        did = int(df.at[i, 'DiscussNo'])
        dataid = int(df.at[i, 'DataNo'])
        if did == 0:
            continue

        url = str(df.at[i, 'DiscussURL'])
        print(qtitle+"\t"+str(tid)+"\t"+str(qid)+"\t"+url, flush=True)
        try:
            fname = make_filename(qtitle, qid, dataid, tid)
            if (len(fname) <= 0): 
                new_data_id = 0
            else:
                new_data_id = make_question_file(driver, fname, url, did)
                translate_page_to_kr(driver, fname)
                save_kr(driver, fname)

        except Exception as e:
            print("Error:", str(e))
            print(f"*** Make question error !!! {e}")
            err = True
            break
        
    end_time = time.time()
    duration = end_time - start_time
    formatted_duration = timedelta(seconds=duration)

    print(f"Function duration: {formatted_duration}")

    driver.close()
    driver.quit()

def get_answer_description(text):
    # 정답 추출 (예: "정답: A", "정답: B, AC")
    answer_match = re.search(r"정답:\s*([\w, ]+)", text)
    answer = answer_match.group(1).strip() if answer_match else ""

    # 설명 추출 (정답 이후 모든 텍스트)
    description_match = re.search(r"설명:\s*(.+)", text, re.DOTALL)
    description = description_match.group(1).strip() if description_match else ""

    return answer, description

def find_exam_no(text):
    # 정답 패턴 찾기 (예: "정답: A", "정답: B", "정답: AC")
    exam_match = re.search(r".+/DOP_C02/DOP2-Q([0-9]+).html", text)

    if exam_match:
        exam_no = int(exam_match.group(1).strip())
        
    return exam_no
def read_Exam_answer(fname):

    df = pd.read_csv(fname, delimiter=',', encoding='euc-kr', header=None,
                    names=['Exam', 'Answer'],
                    index_col=False)
    
    for i in range(len(df)):
        examno = find_exam_no(df.at[i, 'Exam'])
        answer, description = get_answer_description(df.at[i, 'Answer'])
        df.at[i, 'Exam'] = examno
        df.at[i, 'Answer'] = answer
        df.at[i, 'Description'] = description.replace("\n", "<br>\n")
        #print(f"Q {examno} : {answer}")

    return df

def refresh_all_exam_answer(exam_list_file, exam_answer_file, qtitle):
    start_time = time.time()
    df = read_Exam_list(exam_list_file)
    df_answer = read_Exam_answer(exam_answer_file)

    for i in range(len(df))[352:]:
        qid = int(df.at[i, 'ExamNo'])
        did = int(df.at[i, 'DiscussNo'])
        dataid = int(df.at[i, 'DataNo'])
        if did == 0:
            continue

        try:
            fname = make_filename(qtitle, qid, dataid)
            if (len(fname) <= 0): 
                continue

            with open(fname, "r", encoding='utf-8') as file:
                html = file.read()
                file.close()
                    
            bs = BeautifulSoup(html, 'html.parser')

            container = bs.find("div", {"class": "discussion-header-container"})
            match = re.match(r"^([A-Za-z]+)", container.find("div", {"class": "vote-bar"}).string)
            vote = match.group(1) if match else ""
            answer = container.find("span", {"class": "correct-answer"})
            description = container.find("span", {"class": "answer-description"})

            if answer:
                if answer.string != df_answer.at[qid-1, 'Answer']:
                    answer.string = f"{answer.string} ==> {df_answer.at[qid-1, 'Answer']}"
                elif answer.string != vote:
                    answer.string = f"{answer.string} @@@ {vote}"
                else:
                    answer.string = f"{answer.string} (OK)"

            if description:
                # description.string = '<div class="col-12 pt-2 pb-2">' + df_answer.at[qid-1, 'Description'] + '</div>'
                description.contents = [BeautifulSoup('<div class="col-12 pt-2 pb-2">' + df_answer.at[qid-1, 'Description'] + '</div>', 'html.parser')]

            with open("my"+fname, "w", encoding='utf-8') as file:
                file.write(str(bs))
            print(fname, flush=True)


        except Exception as e:
            print("Error:", str(e))
            print(f"*** Make question error !!! {e}")
            err = True
            break
        
    end_time = time.time()
    duration = end_time - start_time
    formatted_duration = timedelta(seconds=duration)

    print(f"Function duration: {formatted_duration}")

if __name__ == "__main__":
    # SAA_C03 = 'Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1'
    # refresh_all_exam('SAA3_Exam_imsi.csv', SAA_C03)    # OK 583
    # exit()
    # SAP_C02 = 'Exam AWS Certified Solutions Architect - Professional SAP-C02 topic 1'
    # refresh_all_exam('SAP2_Exam.csv', SAP_C02)    # OK 298

    # DBS = 'Exam AWS Certified Database - Specialty topic 1'
    # refresh_all_exam('DBS_Exam.csv', DBS)         # OK 327

    # ANS = "Exam AWS Certified Advanced Networking - Specialty ANS-C01 topic 1"
    # refresh_all_exam('ANS_Exam.csv', ANS)         # OK 167
     
    # DAS = "Exam AWS Certified Data Analytics - Specialty topic 1"
    # refresh_all_exam('DAS_Exam.csv', DAS)         # OK 164
    
    # DOP2 = "Exam AWS Certified DevOps Engineer - Professional DOP-C02 topic 1"
    # refresh_all_exam('DOP2_Exam.csv', DOP2)       # OK 134
    # refresh_all_exam_answer('DOP2_Exam.csv', 'DOP2_Answer.csv', DOP2)
    
    # SCS2 = "Exam AWS Certified Security - Specialty SCS-C02 topic 1"
    # refresh_all_exam('SCS2_Exam.csv', SCS2)
    
    # CLF2 = "Exam AWS Certified Cloud Practitioner CLF-C02 topic 1"
    # refresh_all_exam('CLF2_Exam.csv', CLF2)
    
    # SOA2 = "Exam AWS Certified SysOps Administrator - Associate topic 1"
    # refresh_all_exam('SOA2_Exam.csv', SOA2)       # NOK 377 -340, -341

    # DVA2 = 'Exam AWS Certified Developer - Associate DVA-C02 topic 1'
    # refresh_all_exam('DVA2_Exam.csv', DVA2)       # OK 142

    # MLS = 'Exam AWS Certified Machine Learning - Specialty topic 1'
    # refresh_all_exam('MLS_Exam.csv', MLS)

    # CISM = 'Exam CISM topic 1'
    # refresh_all_exam('CISM_Exam.csv', CISM)
    # CISA = 'Exam CISA topic 1'
    # refresh_all_exam('CISA_Exam.csv', CISA)
    
    # DISCUSS = 'CncfDiscuss.txt'
    # FORUM_NAME = 'cncf'
    # refresh_from_forum(DISCUSS, FORUM_NAME, 1)    

    DISCUSS = 'AmazonDiscuss.txt'
    FORUM_NAME = 'amazon'
    refresh_from_forum(DISCUSS, FORUM_NAME, 1)
    
    # DISCUSS = 'IsacaDiscuss.txt'
    # FORUM_NAME = 'isaca'
    # refresh_from_forum(DISCUSS, FORUM_NAME, 1)    

    # DISCUSS = 'AzureDiscuss.txt'
    # FORUM_NAME = 'microsoft'
    # refresh_from_forum(DISCUSS, FORUM_NAME, 1)

    # AZ305 = 'Exam AZ-305'
    # refresh_AZ_exam('AZ305_Exam.csv', AZ305)

    # AZ104 = 'Exam AZ-104'
    # refresh_AZ_exam('AZ104_Exam.csv', AZ104)

    # AZ900 = 'Exam AZ-900'
    # refresh_AZ_exam('AZ900_Exam.csv', AZ900)
