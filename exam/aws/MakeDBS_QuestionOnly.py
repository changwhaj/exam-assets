import time

from selenium import webdriver
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains
from selenium.webdriver.common.action_chains import ActionChains

from bs4 import BeautifulSoup

from random import *
from pathlib import Path

from ArrayDBS import ArrayDBS

def set_chrome_driver():
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])
    driver = webdriver.Chrome('c:/temp/chromedriver.exe', options=chrome_options)
    # driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    return driver

def sleepsec(maxsec):
    sec = randint(1, maxsec)
    for i in range(sec):
        print("%3d\r\r\r" % (sec-i), end='')
        time.sleep(1)
        # time.sleep(randint(1, 10))
    print("")    

def open_exam_cache(driver, examno, did):
    exam_url = 'http://webcache.googleusercontent.com/search?q=cache:https://www.examtopics.com/discussions/amazon/view/' + \
                str(did) + '-exam-aws-certified-database-specialty-topic-1-question-'+str(examno)+'/'
    # discuss_url = 'https://www.examtopics.com/ajax/discussion/load-complete/?discussion-id=35981'
    page = driver.get(exam_url)
    sleepsec(10)

    bs = BeautifulSoup(driver.page_source, 'html.parser')
    div_discuss = bs.find_all("div", {"class": "container outer-discussion-container"})
    while (len(div_discuss) <= 0):
        print("Waiting...")
        sleepsec(5)
        bs = BeautifulSoup(driver.page_source, 'html.parser')
        div_discuss = bs.find_all("div", {"class": "container outer-discussion-container"})
        if (driver.title == 'Error 404 (Not Found)!!!'):
            break
    
    return

def open_exam_site(driver, examno, did):
    exam_url = 'https://www.examtopics.com/discussions/amazon/view/' + \
                str(did) + '-exam-aws-certified-database-specialty-topic-1-question-'+str(examno)+'/'
    # discuss_url = 'https://www.examtopics.com/ajax/discussion/load-complete/?discussion-id=35981'
    page = driver.get(exam_url)
    sleepsec(10)

    bs = BeautifulSoup(driver.page_source, 'html.parser')
    div_discuss = bs.find_all("div", {"class": "container outer-discussion-container"})
    while (len(div_discuss) <= 0):
        print("Waiting...")
        sleepsec(5)
        bs = BeautifulSoup(driver.page_source, 'html.parser')
        div_discuss = bs.find_all("div", {"class": "container outer-discussion-container"})
        if (driver.title == 'Error 404 (Not Found)!!!'):
            break
    
    return

def open_local_exam(qid):
    exam_url = "file:///C:/Users/Changwha/GitHub/crawl-assets/DBS/DBS-Q" + str(qid) + ".html"
    page = driver.get(exam_url)

    return

def open_exam_page(driver, exam_id):
    page_id = int((exam_id - 1) / 10) + 1
    div_idx = ((exam_id-1)%10)
    exam_url = '' + \
                'http://webcache.googleusercontent.com/search?q=cache:' + \
                'https://www.examtopics.com/exams/amazon/aws-certified-database-specialty/view/' + str(page_id) + '/'
    driver.execute_script("window.open()");
    driver.switch_to.window(driver.window_handles[1]);
    page = driver.get(exam_url)

    bs = BeautifulSoup(driver.page_source, 'html.parser')
    div_card = bs.find_all("div", {"class": "card-body question-body"})
    while (len(div_card) <= 0):
        print("Waiting...")
        sleepsec(5)
        bs = BeautifulSoup(driver.page_source, 'html.parser')
        div_card = bs.find_all("div", {"class": "card-body question-body"})
        if (driver.title == 'Error 404 (Not Found)!!1'):
            break    

    html = driver.page_source
    bs = BeautifulSoup(html, 'html.parser')
    
    driver.close();
    driver.switch_to.window(driver.window_handles[0]);

    divs = bs.find_all('div', attrs={'class': 'card-body question-body'})
    
    return divs[div_idx]

def recover_exam(driver, exam_id):
    bs = BeautifulSoup(driver.page_source, 'html.parser')
    div_exam = bs.find_all("div", {"class": "question-body mt-3 pt-3 border-top"})[0]
    div_recover_exam = open_exam_page(driver, exam_id)
    if ((len(div_exam) > 0) & (len(div_recover_exam) > 0)):
        div_exam.clear()
        div_exam.append(div_recover_exam)

    return bs

def remove_exam_element(driver):
    driver.execute_script("""
        function getElementByXpath(path) {
            return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }
        function removeElement(element) {
            if (element !== undefined && element !== null) {
                element.remove();
            }
        }
        function removeElemAttr(element, attr) {
            if (element !== undefined && element !== null) {
                element.removeAttribute(attr);
            }
        }
        removeElement(document.getElementsByClassName('action-row-container mb-4')[0]);
        removeElement(document.getElementsByClassName('all-questions-link')[0]);
        removeElement(document.getElementsByClassName('disclaimer-box mt-2')[0]);
        removeElemAttr(document.getElementsByClassName('discussion-link')[0], "href");
        removeElemAttr(document.getElementsByClassName('title-username')[0], "href");
        return;
    """)

def remove_discuss_comment_section(driver):
    # remove all discuss comments section
    driver.execute_script("""
        function getElementByXpath(path) {
            return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }
        function removeElement(element) {
            if (element !== undefined && element !== null) {
                element.remove();
            }
        }
        function removeElemAttr(element, attr) {
            if (element !== undefined && element !== null) {
                element.removeAttribute(attr);
            }
        }
        removeElement(document.getElementsByClassName('discussion-page-comments-section')[0]);
    """)

def remove_discuss_element(driver):
    # remove create new comment area
    driver.execute_script("""
        function removeElement(element) {
            if (element !== undefined && element !== null) {
                element.remove();
            }
        }
        function removeElemAttr(element, attr) {
            if (element !== undefined && element !== null) {
                element.removeAttribute(attr);
            }
        }
        removeElement(document.getElementsByClassName('create-comment-base d-print-none')[0]);
        removeElemAttr(document.getElementsByClassName('title-username')[0], "href");
    """)
    
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
    if (len(discuss_id) <= 0):
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

    div = bs.find('div', attrs={'class': 'container outer-discussion-container'})
    
    return div

def replace_duscuss(driver, discuss_id):
    bs = BeautifulSoup(driver.page_source, 'html.parser')
    loadfull = bs.find_all("a", {"class": "load-full-discussion-button ml-3"})
    if (len(loadfull) > 0):
        div_discuss = bs.find_all("div", {"class": "container outer-discussion-container"})[0]
        div_full_discuss = open_discuss(driver, discuss_id)
        if ((len(div_discuss) > 0) & (len(div_full_discuss) > 0)):
            div_discuss.clear()
            div_discuss.append(div_full_discuss)
    else:
        remove_discuss_element(driver)
        bs = BeautifulSoup(driver.page_source, 'html.parser')

    return bs

def open_template():
    fname = 'DBS/DBS-Q000.html'

    with open(fname, "r", encoding='utf-8') as file:
        html = file.read()
        file.close()
            
    bs_template = BeautifulSoup(html, 'html.parser')
    return bs_template

def save_html(driver, fname):
    html = driver.page_source
    bs = BeautifulSoup(html, 'html.parser')
    with open(fname, "w", encoding='utf-8') as file:
        file.write('<!DOCTYPE html>\n' + str(bs))

if __name__ == "__main__":
    bs_template = open_template()

    driver = set_chrome_driver()

    for i in range(len(ArrayDBS))[185:]:
        qDBS = ArrayDBS[i]
        qid = qDBS.get('QID')
        did = qDBS.get('DID')
        fname = 'DBS/DBS-NQ' + qid + '.html'
        print(fname)

        if (len(did) <= 0):
            continue

        my_file = Path(fname)
        if my_file.is_file():
            # file exists
            continue
        
        if (i%2 == 0):
            open_exam_cache(driver, i+1, did)
        else:
            open_exam_site(driver, i+1, did)

        driver.switch_to.window(driver.window_handles[0])
        if (driver.title == 'Error 404 (Not Found)!!1'):
            open_exam_site(driver, i+1, did)
            driver.switch_to.window(driver.window_handles[0])

        print(driver.title)
        if (driver.title == 'Error 404 (Not Found)!!1'):
            with open(fname, "w", encoding='utf-8') as file:
                file.write('Error 404 (Not Found)')

            continue

        if (len(driver.title) < 20):
            continue

        remove_exam_element(driver)
        # bs = replace_duscuss(driver, did)
        remove_discuss_comment_section(driver)
        bs = BeautifulSoup(driver.page_source, 'html.parser')

        title = bs_template.find('title')
        title.string = str(bs.find('title').string)

        div_template = bs_template.find("div", {"class": "sec-spacer pt-50"})
        div_exam = bs.find("div", {"class": "sec-spacer pt-50"}).find("div", {"class": "container"})
        if ((len(div_template) > 0) & (len(div_exam) > 0)):
            div_template.clear()
            div_template.append(div_exam)

        with open(fname, "w", encoding='utf-8') as file:
            file.write(str(bs_template))

        if (i%20 == 0):
            sleepsec(60)

    driver.quit()
