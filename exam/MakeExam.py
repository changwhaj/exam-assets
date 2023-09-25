import time
import re
import os
import platform
import pandas as pd
from datetime import datetime, timedelta

import pyautogui

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains
from selenium.webdriver.chrome.options import Options

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from bs4 import BeautifulSoup

from random import *
from pathlib import Path
from dateutil import parser

def sleep_random_sec(sec):
    for t in reversed(range(randint(1, sec))):
        print(str(t), end='', flush=True)
        time.sleep(1)
    print('\r', end='')

def set_chrome_driver():
    if platform.system() == "Darwin":
        service = Service(executable_path=r'./chromedriver')
    elif platform.system() == "Windows":
        service = Service(executable_path=r'c:/temp/chromedriver.exe')
    userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)s Chrome/92.0.4515.131 Safari/537.36"
    options = webdriver.ChromeOptions()
    options.add_argument(f"user-agent={userAgent}")
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    options.add_argument('--no-sandbox')
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--lang=kr')  # set your language here
    driver = webdriver.Chrome(service=service, options=options)

    # driver.set_window_size(1400, 1040)
    
    return driver

def set_translate_to_kr(driver):
    actionChains = ActionChains(driver)
    actionChains.context_click().perform()

    if platform.system() == "Darwin":
        pyautogui.moveTo(x=150, y=350, duration=1)
    elif platform.system() == "Windows":
        for i in range(3):
            pyautogui.press('up')

        pyautogui.press('enter')
        # pyautogui.sleep(1)
        
        # pyautogui.moveTo(x=150, y=345, duration=1)
        # pyautogui.moveTo(x=150, y=365, duration=1)
        # pyautogui.click()
    time.sleep(1)

def scroll_page(driver):
    # Set the interval between scrolls in seconds
    scroll_interval = 1

    # Get the initial height of the page
    last_height = driver.execute_script("return document.body.scrollHeight")

    while True:
        # Send the down arrow key to scroll down the page
        driver.find_element(By.TAG_NAME, "body").send_keys(Keys.PAGE_DOWN)
        
        # Wait for the specified interval
        time.sleep(scroll_interval)
        
        # Calculate the new height of the page after scrolling
        new_height = driver.execute_script("return document.body.scrollHeight")
        
        # Check if the page has reached the end
        if new_height == last_height:
            break
        
        # Update the previous height
        last_height = new_height

def save_page(driver, fname):
    bs = BeautifulSoup(driver.page_source, 'html.parser')

    dir = os.path.dirname(fname)
    if not os.path.exists(dir):
        # Create the directory
        os.makedirs(dir)

    with open(fname, "w", encoding='utf-8') as file:
        file.write('<!DOCTYPE html>' + str(bs))
    
def set_headless_mode(driver, headless):
    driver.quit()
    service = Service(executable_path=r'c:/temp/chromedriver.exe')
    options = Options()
    if headless:
        options.add_argument("--headless")
    else:
        # Copy the existing arguments except for the "--headless" argument
        for arg in driver.options.arguments:
            if arg != "--headless":
                options.add_argument(arg)
    return webdriver.Chrome(service=service, options=options)

def read_discuss_list(fname):
    df = pd.read_csv(fname, delimiter='\t', encoding='utf-8', header=None, 
                    names=['ExamType', 'ExamNo', 'DiscussNo', 'DataID', 'LastPost', 'DiscussURL'], 
                    index_col=False)
    
    df['ExamType'] = df['ExamType'].str.strip()
    df['ExamNo'] = df['ExamNo'].astype(int)
    df['DiscussNo'] = df['DiscussNo'].astype(int)
    df['DataID'] = df['DataID'].astype(int)
    df['LastPost'] = pd.to_datetime(df['LastPost'], format='%Y-%m-%d %H:%M')
    df['DiscussURL'] = df['DiscussURL'].str.strip()

    df.drop_duplicates(inplace=True)
    return df.sort_values(by=['LastPost', 'DiscussNo'], ascending=[False, False])

def write_discuss_list(df, fname):
    df['LastPost'] = df.groupby(['ExamType', 'ExamNo', 'DiscussNo'])['LastPost'].transform('max')
    df.drop_duplicates(subset=['ExamType', 'ExamNo', 'DiscussNo'], keep='last', inplace=True)
    df['MaxDataID'] = df.groupby(['ExamType', 'ExamNo'])['DataID'].transform('max')
    df['Chk'] = df.apply(lambda row: 1 if row['DataID'] == row['MaxDataID'] else 0, axis=1)
    df = df.sort_values(['Chk', 'LastPost', 'DiscussNo'], ascending=[False, False, False]).drop(columns=['MaxDataID', 'Chk'])
    df.to_csv(fname, sep='\t', header=False, index=False)

def open_forum(driver, forum_name, pageno):
    # forum: { isaca | amazon }
    forum_url = 'https://www.examtopics.com/discussions/' + forum_name + '/' + str(pageno) + '/'
    driver.get(forum_url)
    sleep_random_sec(2)
    return

def open_exam(driver, discuss_url):
    # exam_url = 'http://webcache.googleusercontent.com/search?q=cache:' + \
    #            'https://www.examtopics.com/discussions/isaca/view/' + str(did) + \
    #            '-exam-cisa-topic-1-question-' + str(int(qid)) + '-discussion/'
    # exam_url = 'https://www.examtopics.com/discussions/isaca/view/' + str(did) + \
    #            '-exam-cisa-topic-1-question-' + str(int(qid)) + '-discussion/'

    exam_url = 'https://www.examtopics.com' + discuss_url

    driver.get(exam_url)
    sleep_random_sec(2)

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
        time.sleep(3)
    
    return

def open_template_exam():
    template = "./TEMPLATE.html"
    with open(template, 'r', encoding='utf-8') as file:
        html_content = file.read()
        
    bs = BeautifulSoup(html_content, 'html.parser')
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
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'div.row'));
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'div.row'));
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CSS_SELECTOR, 'div.action-row-container.mb-4'))
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CLASS_NAME, 'all-questions-link'));
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CLASS_NAME, 'discussion-meta-data'));
        driver.execute_script("arguments[0].remove();", driver.find_element(By.CLASS_NAME, 'vote-answer-button'));        
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

    # driver.execute_script("""
    #     function removeElement(element) {
    #         if (element !== undefined && element !== null) {
    #             element.remove();
    #         }
    #     }
    #     function removeElemAttr(element, attr) {
    #         if (element !== undefined && element !== null) {
    #             element.removeAttribute(attr);
    #         }
    #     }
    #     removeElement(document.getElementsByClassName('create-comment-base d-print-none')[0]);
    #     removeElemAttr(document.getElementsByClassName('title-username')[0], "href");
    # """)
    
    # remove user a link
    driver.execute_script("""
        var divs = document.getElementsByClassName('comment-head');

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
    """)
    
def open_discuss(driver, discuss_id):
    if (len(str(discuss_id)) <= 0):
        return ""

    discuss_url = 'https://www.examtopics.com/ajax/discussion/load-complete/?discussion-id=' + str(discuss_id)

    driver.execute_script("window.open()");
    driver.switch_to.window(driver.window_handles[1]);
    page = driver.get(discuss_url)
    time.sleep(1)
    
    remove_discuss_element(driver)

    html = driver.page_source
    bs = BeautifulSoup(html, 'html.parser')
    
    driver.close();
    driver.switch_to.window(driver.window_handles[0]);

    comment_spans = bs.find_all('span', class_='comment-date')
    for comment_span in comment_spans:
        title = comment_span.get('title')
        if title:
            kst_time = parser.parse(str(title).replace("midnight", "12:00 a.m.").replace("noon", "12:00 p.m.")) + timedelta(hours=9)
            comment_span.string = kst_time.strftime("%Y-%m-%d %H:%M")

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

    return bs

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
        
def save_html(driver, did, fname):
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
    discussion_contents = bs.find("div", {"class": "discussion-page-comments-section"}).decode_contents()

    bs = open_template_exam()

    title = bs.find("title")
    title.contents = [BeautifulSoup(page_title, 'html.parser')]

    header = bs.find("div", {"class": "discussion-list-header"})
    header.contents = [BeautifulSoup(header_contents, 'html.parser')]
    header = bs.find("div", {"class": "discussion-list-header-en"})
    header.contents = [BeautifulSoup(header_contents, 'html.parser')]

    container = bs.find("div", {"class": "discussion-header-container"})
    container.contents = [BeautifulSoup(container_contents, 'html.parser')]
    container = bs.find("div", {"class": "discussion-header-container-en"})
    container.contents = [BeautifulSoup(container_contents, 'html.parser')]

    discussion = bs.find("div", {"class": "discussion-page-comments-section"})
    discussion.contents = [BeautifulSoup(discussion_contents, 'html.parser')]
    discussion["data-discussion-question-id"] = did
    discussion = bs.find("div", {"class": "discussion-page-comments-section-en"})
    discussion.contents = [BeautifulSoup(discussion_contents, 'html.parser')]
    discussion["data-discussion-question-id"] = did

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

def make_filename(qtitle, qid, dataid):
    fname = ""

    exams = [
        { 
            "qtitle": "Exam CISM topic 1",
            "prefname": "isaca/CISM/CISM-Q",
            "qlength": 920,
            "first_id": 818826,
        },
        { 
            "qtitle": "Exam CISA topic 1",
            "prefname": "isaca/CISA/CISA-Q",
            "qlength": 1195,
            "first_id": 818026,
        },
        {
            "qtitle": "Exam AWS Certified Advanced Networking - Specialty ANS-C01 topic 1",
            "prefname": "aws/ANS_C01/ANS-Q",
            "qlength": 167,
            "first_id": 875171,
        },
        {
            "qtitle": "Exam AWS Certified Data Analytics - Specialty topic 1",
            "prefname": "aws/DAS-C01/DAS-Q",
            "qlength": 164,
            "first_id": 781767,
        },
        {
            "qtitle": "Exam AWS Certified Database - Specialty topic 1",
            "prefname": "aws/DBS/DBS-Q",
            "qlength": 327,
            "first_id": 807243,
        },
        {
            "qtitle": "Exam AWS Certified Developer Associate topic 1",
            "prefname": "aws/DVA/DVA-Q",
            "qlength": 443,
            "first_id": 807501,
        },
        {
            "qtitle": "Exam AWS Certified Developer - Associate DVA-C02 topic 1",
            "prefname": "aws/DVA_C02/DVA2-Q",
            "qlength": 142,
            "first_id": 874573,
        },
        {
            "qtitle": "Exam AWS Certified DevOps Engineer - Professional DOP-C02 topic 1",
            "prefname": "aws/DOP_C02/DOP2-Q",
            "qlength": 137,
            "first_id": 879465,
        },
        {
            "qtitle": "Exam AWS Certified Solutions Architect - Associate SAA-C02 topic 1",
            "prefname": "aws/SAA_C02/SAA2-Q",
            "qlength": 822,
            "first_id": 807974,
        },
        {
            "qtitle": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1",
            "prefname": "aws/SAA_C03/SAA3-Q",
            "qlength": 599,
            "first_id": 839758,
        },
        {
            "qtitle": "Exam AWS Certified Solutions Architect - Professional topic 1",
            "prefname": "aws/SAP/SAP-Q",
            "qlength": 1019,
            "first_id": 808796,
        },
        {
            "qtitle": "Exam AWS Certified Solutions Architect - Professional SAP-C02 topic 1",
            "prefname": "aws/SAP_C02/SAP2-Q",
            "qlength": 298,
            "first_id": 856116,
        },
        {
            "qtitle": "Exam AWS Certified SysOps Administrator - Associate topic 1",
            "prefname": "aws/SOA_C02/SOA2-Q",
            "qlength": 379,
            "first_id": 809742,
        },
        # aws/MLS_C01/MLS-Q	Exam AWS Certified Machine Learning - Specialty topic 1
        # aws/SES/SES-Q	Exam AWS Certified Security - Specialty topic 1
        # aws/DOP_C01/DOP-Q	Exam AWS DevOps Engineer Professional topic 1
    ]

    findexam = next((exam for exam in exams if exam["qtitle"] == qtitle), None)

    if findexam:
        if (dataid > 0) & (dataid < findexam["first_id"]):
            return fname
        fname = findexam["prefname"] + format(int(qid), '04') + '.html'
    else:
        if qtitle == "Exam CISM topic 1":
            fname = 'isaca/CISM/CISM-Q'  + format(int(qid), '04') + '.html'
        elif qtitle == "Exam CISM topic 2":
            fname = 'isaca/CISM2/CISM-Q' + format(int(qid), '04') + '.html'
        elif qtitle == "Exam CISA topic 1":
            fname = 'isaca/CISA/CISA-Q'  + format(int(qid), '04') + '.html'
        elif qtitle == "Exam CISA topic 2":
            fname = 'isaca/CISA2/CISA-Q' + format(int(qid), '04') + '.html'
        
        # elif qtitle == "Exam AWS Certified Solutions Architect - Associate topic 1":
        #     fname = 'aws/SAA/SAA-Q' + format(int(qid), '04') + '.html'
        # elif qtitle == "Exam AWS Certified Solutions Architect - Associate topic 2":
        #     fname = 'aws/SAA2/SAA-Q' + format(int(qid), '04') + '.html'
        elif qtitle == "Exam AWS Certified Solutions Architect - Associate SAA-C02 topic 1":
            fname = 'aws/SAA_C02/SAA2-Q' + format(int(qid), '04') + '.html'
        # elif qtitle == "Exam AWS Certified Solutions Architect - Associate SAA-C02 topic 2":
        #     fname = 'aws/SAA_C02_t2/SAA-Q' + format(int(qid), '04') + '.html'
        elif qtitle == "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1":
            fname = 'aws/SAA_C03/SAA3-Q' + format(int(qid), '04') + '.html'
        elif qtitle == "Exam AWS Certified Solutions Architect - Professional topic 1":
            fname = 'aws/SAP/SAP-Q' + format(int(qid), '04') + '.html'
        # elif qtitle == "Exam AWS Certified Solutions Architect - Professional topic 2":
        #     fname = 'aws/SAP2/SAP-Q' + format(int(qid), '04') + '.html'
        elif qtitle == "Exam AWS Certified Solutions Architect - Professional SAP-C02 topic 1":
            fname = 'aws/SAP_C02/SAP2-Q' + format(int(qid), '04') + '.html'
        elif qtitle == "Exam AWS Certified Database - Specialty topic 1":
            fname = 'aws/DBS/DBS-Q' + format(int(qid), '04') + '.html'
        elif qtitle == 'Exam AWS Certified Developer - Associate DVA-C02 topic 1':
            fname = 'aws/DVA_C02/DVA2-Q' + format(int(qid), '04') + '.html'
        elif qtitle == 'Exam AWS Certified Developer Associate topic 1':
            fname = 'aws/DVA/DVA-Q' + format(int(qid), '04') + '.html'

    return fname

def make_question_file(driver, fname, url, did):
    open_exam(driver, url)

    driver.switch_to.window(driver.window_handles[0])
    # print(driver.title)
    if (driver.title == 'Error 404 (Not Found)!!1'): return 0
    if (len(driver.title) < 20): return 0

    remove_exam_element(driver)

    data_id = save_html(driver, did, fname)

    return data_id

def translate_page_to_kr(driver, fname):
    if platform.system() == "Windows":
        url = f'file:///E:/MyProjects/ExamTopics/assets/exam/{fname}'
    elif platform.system() == "Darwin":
        url = f'file:///Users/changwhaj/MyProjects/ExamTopics/assets/exam/{fname}'
    # url = f'http://127.0.0.1:5500/assets/exam/{fname}'
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

    header = bs_en.find("div", {"class": "discussion-list-header"})
    header.contents = [BeautifulSoup(header_contents, 'html.parser')]

    container = bs_en.find("div", {"class": "discussion-header-container"})
    container.contents = [BeautifulSoup(container_contents, 'html.parser')]

    discussion_contents_en = bs_en.find("div", {"class": "discussion-page-comments-section"}).decode_contents()
    discussion = bs_en.find("div", {"class": "discussion-page-comments-section-en"})
    discussion.contents = [BeautifulSoup(discussion_contents_en, 'html.parser')]

    discussion = bs_en.find("div", {"class": "discussion-page-comments-section"})
    discussion.contents = [BeautifulSoup(discussion_contents, 'html.parser')]

    fname_kr = fname[:-5] + '-KR.html'
    fname_kr = '/'.join(fname_kr.split('/')[:-1]) + '/kr/' + fname_kr.split('/')[-1]
    with open(fname, "w", encoding='utf-8') as file:
        file.write(str(bs_en))

def refresh_from_forum(discuss_list, forum_name, forumIdx):

    df = read_discuss_list(discuss_list)
    refresh = False
    driver = set_chrome_driver()
    # driver.set_window_position(1800,10)

    found = False
    for p in range(1000)[forumIdx:]:
        if found == True: break
        pageno = p + 1

        open_forum(driver, forum_name, pageno)

        driver.switch_to.window(driver.window_handles[0])

        print(driver.title + "-" + str(pageno))
        if (driver.title == '404 - Page not found'): break

        bs = BeautifulSoup(driver.page_source, 'html.parser')
        a = bs.find_all("a", {"class": "discussion-link"})
        span = bs.find_all("span", {"class": "recent-post-time"})
    
        for i in range(len(a)):
            if found == True: break
            
            last_post = parser.parse(str(span[i*2+1]["title"]).replace("midnight", "12:00 a.m.").replace("noon", "12:00 p.m."))

            split_text = str(a[i].text.strip()).split()

            qtitle = ' '.join(split_text[:len(split_text)-3])
            qid = int(split_text[-2])
            url = str(a[i]["href"])
            did = int(url.split('/')[4].split('-')[0])
            replace = False    
            print(qtitle+"\t"+str(qid)+"\t"+str(did)+"\t"+str(last_post)+"\t"+url, end=' ', flush=True)
            data_id = 0
            if ((refresh != True) & len(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]) > 0):
                print("Same question found !!!")

                data_id = int(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]['DataID'].iloc[0])
                LastPost = parser.parse(str(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]['LastPost'].iloc[0]))
                if LastPost == last_post:
                    print('Same discussion post, exit!!! LastPost: ' + str(LastPost))
                    found = True
                    break

                # Old post found. Skip this.
                if LastPost > last_post: continue

                # Recent discussion post found. Remove old discussion list and add new discussion
                if LastPost < last_post:
                    replace = True
                    # print('Recent discussion post : ' + str(LastPost) + ' ==> ' + str(last_post))
                    # df = df.drop(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)].index)
            else:
                print("New question found !!!")

            # try:
            fname = make_filename(qtitle, qid, data_id)
            if (len(fname) <= 0): 
                new_data_id = 0
            else:
                new_data_id = make_question_file(driver, fname, url, did)
                print(f'data_id={data_id}, new_data_id={new_data_id}, fname={fname}')
                if (data_id > 0 ) & (data_id != new_data_id):
                    found = True
                    break
                translate_page_to_kr(driver, fname)
                # fname_kr = fname[:-5] + '-KR.html'
                # fname_kr = '/'.join(fname_kr.split('/')[:-1]) + '/kr/' + fname_kr.split('/')[-1]
                # save_page(driver, fname_kr)
                save_kr(driver, fname)

            # except Exception as e:
            #     print("Error:", str(e))
            #     print(f"*** Make question error !!! {e}")
            #     pass

            # finally:
            if (replace == True):    
                data_id = int(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]['DataID'].iloc[0])
                if (LastPost < last_post):
                    print('Recent discussion post : ' + str(LastPost) + ' ==> ' + str(last_post))
                    df = df.drop(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)].index)

            new_row = [{ 'ExamType': qtitle, 'ExamNo': qid, 'DiscussNo': did, 'DataID': new_data_id, 'LastPost': last_post, 'DiscussURL': url }]
            df = pd.concat([df, pd.DataFrame(new_row)], ignore_index=True)            

    # with open(fn, 'w') as file:
    #     # Write data rows
    #     file.write(str(p) + '\n')

    driver.close()
    time.sleep(1)
    driver.quit()
    time.sleep(1)

    write_discuss_list(df, discuss_list)

def refresh_forum_list(discuss_list, forum_name):

    df = read_discuss_list(discuss_list)
    refresh = False
    driver = set_chrome_driver()
    # driver.set_window_position(1800,10)

    fn = "forum.txt"
    idx_from = 0
    with open(fn, "r") as file:
        idx_from = int(file.read())
    found = False
    try:
        for p in range(1000)[idx_from:600]:
            my_file = Path(fn)
            # file does not exists. Okay to overwrite
            if not my_file.is_file(): found = True

            if found == True: break
            pageno = p + 1

            open_forum(driver, forum_name, pageno)

            driver.switch_to.window(driver.window_handles[0])

            print(driver.title + "-" + str(pageno))
            if (driver.title == '404 - Page not found'): break

            bs = BeautifulSoup(driver.page_source, 'html.parser')
            a = bs.find_all("a", {"class": "discussion-link"})
            span = bs.find_all("span", {"class": "recent-post-time"})
        
            for i in range(len(a)):
                if found == True: break
                
                last_post = parser.parse(str(span[i*2+1]["title"]).replace("midnight", "12:00 a.m.").replace("noon", "12:00 p.m."))

                split_text = str(a[i].text.strip()).split()

                qtitle = ' '.join(split_text[:len(split_text)-3])
                qid = int(split_text[-2])
                url = str(a[i]["href"])
                did = int(url.split('/')[4].split('-')[0])
                replace = False    
                print(qtitle+"\t"+str(qid)+"\t"+str(did)+"\t"+str(last_post)+"\t"+url, end=' ', flush=True)
                if ((refresh != True) & len(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]) > 0):
                    print("Same question found !!!")

                    LastPost = parser.parse(str(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]['LastPost'].iloc[0]))
                    if LastPost == last_post:
                        print('Same discussion post, exit!!! LastPost: ' + str(LastPost))

                    # Old post found. Skip this.
                    if LastPost > last_post: continue

                    # Recent discussion post found. Remove old discussion list and add new discussion
                    if LastPost < last_post:
                        replace = True
                        # print('Recent discussion post : ' + str(LastPost) + ' ==> ' + str(last_post))
                        # df = df.drop(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)].index)
                else:
                    print("New question found !!!")

                if (replace == True):    
                    data_id = int(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]['DataID'].iloc[0])
                    if (LastPost < last_post):
                        print('Recent discussion post : ' + str(LastPost) + ' ==> ' + str(last_post))
                        df = df.drop(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)].index)

                new_row = [{ 'ExamType': qtitle, 'ExamNo': qid, 'DiscussNo': did, 'DataID': 0, 'LastPost': last_post, 'DiscussURL': url }]
                df = pd.concat([df, pd.DataFrame(new_row)], ignore_index=True)            
    except Exception as e:
        print("Error:", str(e))
        print(f"*** Make question error !!! {e}")
        pass

    finally:
        write_discuss_list(df, discuss_list)

    with open(fn, 'w') as file:
        # Write data rows
        file.write(str(p) + '\n')

    driver.quit()


def read_Exam_list(fname):

    df = pd.read_csv(fname, delimiter='\t', encoding='utf-8', header=None,
                    names=['ExamNo', 'DiscussNo', 'DataNo', 'DiscussURL'],
                    index_col=False)
    print(df)

    return df

def refresh_all_exam(exam_list_file, qtitle):
    start_time = time.time()
    df = read_Exam_list(exam_list_file)

    driver = set_chrome_driver()
    # driver.set_window_position(1800,10)

    fn = "exam.txt"
    idx_from = 0
    with open(fn, "r") as file:
        idx_from = int(file.read())
    err = False

    for i in range(len(df))[idx_from:]:
        qid = int(df.at[i, 'ExamNo'])
        did = int(df.at[i, 'DiscussNo'])
        dataid = int(df.at[i, 'DataNo'])
        if did == 0:
            continue
        url = str(df.at[i, 'DiscussURL'])
        print(qtitle+"\t"+str(qid)+"\t"+url, flush=True)
        try:
            fname = make_filename(qtitle, qid, dataid)
            if (len(fname) <= 0): 
                new_data_id = 0
            else:

                new_data_id = make_question_file(driver, fname, url, did)
                translate_page_to_kr(driver, fname)
                save_kr(driver, fname)

                with open(fn, 'w') as file:
                    # Write data rows
                    file.write(str(i) + '\n')

        except Exception as e:
            print("Error:", str(e))
            print(f"*** Make question error !!! {e}")
            err = True
            break
            # pass
        
    if not err:
        with open(fn, 'w') as file:
            file.write('0\n')

    end_time = time.time()
    duration = end_time - start_time
    formatted_duration = timedelta(seconds=duration)

    print(f"Function duration: {formatted_duration}")

    driver.close()
    driver.quit()

if __name__ == "__main__":
    # SAA_C03 = 'Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1'
    # refresh_all_exam('SAA3_Exam.csv', SAA_C03)    # OK 583

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
    
    # SAA2 = "Exam AWS Certified Solutions Architect - Associate SAA-C02 topic 1"
    # refresh_all_exam('SAA2_Exam.csv', SAA2)
    
    # SAP = "Exam AWS Certified Solutions Architect - Professional topic 1"
    # refresh_all_exam('SAP_Exam.csv', SAP)
    
    # SOA2 = "Exam AWS Certified SysOps Administrator - Associate topic 1"
    # refresh_all_exam('SOA2_Exam.csv', SOA2)       # NOK 377 -340, -341

    # DVA2 = 'Exam AWS Certified Developer - Associate DVA-C02 topic 1'
    # refresh_all_exam('DVA2_Exam.csv', DVA2)       # OK 142

    # DVA = 'Exam AWS Certified Developer Associate topic 1'
    # refresh_all_exam('DVA_Exam.csv', DVA)         # OK 443

    # CISM = 'Exam CISM topic 1'
    # refresh_all_exam('CISM_Exam.csv', CISM)
    # CISA = 'Exam CISA topic 1'
    # refresh_all_exam('CISA_Exam.csv', CISA)
    
    DISCUSS = 'AmazonDiscuss.txt'
    FORUM_NAME = 'amazon'
    # DISCUSS = 'IsacaDiscuss.txt'
    # FORUM_NAME = 'isaca'
    
    fn = "forum.txt"
    idx_from = 0
    with open(fn, "r") as file:
        idx_from = int(file.read())

    for i in reversed(range(idx_from)):
        my_file = Path(fn)
        # file does not exists. Stop
        if not my_file.is_file(): break

        refresh_from_forum(DISCUSS, FORUM_NAME, i)

    # ISACA_DISCUSS = 'IsacaDiscuss.txt'
    # FORUM_NAME = 'isaca'
    # refresh_from_forum(ISACA_DISCUSS, FORUM_NAME)
    DISCUSS = 'IsacaDiscuss.txt'
    FORUM_NAME = 'isaca'
    
    # fn = "forum.txt"
    # idx_from = 0
    # with open(fn, "r") as file:
    #     idx_from = int(file.read())
    idx_from = 10
    for i in reversed(range(idx_from)):
        my_file = Path(fn)
        # file does not exists. Stop
        if not my_file.is_file(): break

        refresh_from_forum(DISCUSS, FORUM_NAME, i)    
    # df = read_discuss_list(AMAZON_DISCUSS)
    # write_discuss_list(df, AMAZON_DISCUSS)
    # refresh_forum_list('AmazonDiscussNew.txt', 'amazon')
