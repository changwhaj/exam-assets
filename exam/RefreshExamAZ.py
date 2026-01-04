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

from ExamLibrary import refresh_exam_file, set_chrome_driver

def read_discuss_list(fname):
    df = pd.read_csv(fname, delimiter='\t', encoding='utf-8', header=None, 
                    names=['ExamType', 'ExamNo', 'DiscussNo', 'DataID', 'PostDate', 'DiscussURL'], 
                    index_col=False)
    
    df['ExamType'] = df['ExamType'].str.strip()
    df['ExamNo'] = df['ExamNo'].astype(int)
    df['DiscussNo'] = df['DiscussNo'].astype(int)
    df['DataID'] = df['DataID'].astype(int)
    df['PostDate'] = pd.to_datetime(df['PostDate'], format='%Y-%m-%d %H:%M')
    df['DiscussURL'] = df['DiscussURL'].str.strip()

    df.drop_duplicates(inplace=True)
    return df.sort_values(by=['PostDate', 'DiscussNo'], ascending=[False, False])

def write_discuss_list(df, fname):
    df['PostDate'] = df.groupby(['ExamType', 'ExamNo', 'DiscussNo'])['PostDate'].transform('max')
    df.drop_duplicates(subset=['ExamType', 'ExamNo', 'DiscussNo'], keep='last', inplace=True)
    df['MaxDataID'] = df.groupby(['ExamType', 'ExamNo'])['DataID'].transform('max')
    df['Chk'] = df.apply(lambda row: 1 if row['DataID'] == row['MaxDataID'] else 0, axis=1)
    df = df.sort_values(['Chk', 'PostDate', 'DiscussNo'], ascending=[False, False, False]).drop(columns=['MaxDataID', 'Chk'])
    df.to_csv(fname, sep='\t', header=False, index=False)

def open_forum(driver, forum_name, pageno):
    # forum: { isaca | amazon }
    forum_url = 'https://www.examtopics.com/discussions/' + forum_name + '/' + str(pageno) + '/'
    driver.get(forum_url)
    # sleep_random_sec(1)
    return

def get_new_discuss_list(driver, forum_name, prev_last_post):
    new_df = pd.DataFrame(columns=['ExamType', 'ExamNo', 'DiscussNo', 'DataID', 'PostDate', 'DiscussURL'])
    
    found = False
    for p in range(1000)[:]:
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
            postdate = parser.parse(str(span[i*2+1]["title"]).replace("midnight", "12:00 a.m.").replace("noon", "12:00 p.m."))
            if (postdate <= prev_last_post): 
                found = True
                break

            split_text = str(a[i].text.strip()).split()

            qtitle = ' '.join(split_text[:len(split_text)-3])
            qid = int(split_text[-2])
            url = str(a[i]["href"])
            did = int(url.split('/')[4].split('-')[0])

            new_row = { 'ExamType': qtitle, 'ExamNo': qid, 'DiscussNo': did, 'DataID': 0, 'PostDate': postdate, 'DiscussURL': url }
            new_df = pd.concat([new_df, pd.DataFrame([new_row])], ignore_index=True) 

    return new_df

def make_filename(qtitle, qid, dataid, tid=0):
    fname = ""

    if qtitle.startswith("Exam AZ-104"):
        az104_df = read_AZ_Exam_list('AZ104_Exam.csv')
        az104_df = az104_df.sort_values(by=['DataNo'], ascending=[True])
        if (dataid > 0):
            idx = az104_df.index.get_loc(az104_df[(az104_df['DataNo'] == dataid) & 
                                                (az104_df['ExamNo'] == qid)].index[0])
        elif (tid > 0):
            idx = az104_df.index.get_loc(az104_df[(az104_df['Topic'] == tid) & 
                                                (az104_df['ExamNo'] == qid)].index[0])
        else:
            return fname
        fname = 'ms/AZ104/AZ104-Q' + format(int(idx+1), '04') + '.html'
    elif qtitle.startswith("Exam AZ-305"):
        az305_df = read_AZ_Exam_list('AZ305_Exam.csv')
        az305_df = az305_df.sort_values(by=['DataNo'], ascending=[True])
        if (dataid > 0):
            idx = az305_df.index.get_loc(az305_df[(az305_df['DataNo'] == dataid) & 
                                                (az305_df['ExamNo'] == qid)].index[0])
        elif (tid > 0):
            idx = az305_df.index.get_loc(az305_df[(az305_df['Topic'] == tid) & 
                                                (az305_df['ExamNo'] == qid)].index[0])
        else:
            return fname
        fname = 'ms/AZ305/AZ305-Q' + format(int(idx+1), '04') + '.html'
    elif qtitle.startswith("Exam AZ-900"):
        az900_df = read_AZ_Exam_list('AZ900_Exam.csv')
        #az900_df = az900_df.sort_values(by=['DataNo'], ascending=[True])
        if (dataid > 0):
            idx = az900_df.index.get_loc(az900_df[(az900_df['DataNo'] == dataid) & 
                                                (az900_df['ExamNo'] == qid)].index[0])
        elif (tid > 0):
            idx = az900_df.index.get_loc(az900_df[(az900_df['Topic'] == tid) & 
                                                (az900_df['ExamNo'] == qid)].index[0])
        else:
            return fname
        fname = 'ms/AZ900/AZ900-Q' + format(int(idx+1), '04') + '.html'
        
    return fname

def refresh_from_forum(discuss_list, forum_name, last_page):

    df = read_discuss_list(discuss_list)
    refresh = False
    driver = set_chrome_driver()
    driver.set_window_position(1600,10)

    new_df = get_new_discuss_list(driver, forum_name, df['PostDate'][0])

    for index in range(len(new_df)-1, -1, -1):
        row = new_df.iloc[index]
        qtitle = row['ExamType']
        qid = row['ExamNo']
        did = row['DiscussNo']
        url = row['DiscussURL']
        newpost = row['PostDate']
        print(qtitle+"\t"+str(qid)+"\t"+str(did)+"\t"+str(newpost), end=' ', flush=True)

        replace = False    
        data_id = 0
        if ((refresh != True) & len(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]) > 0):
            print(f"Same question\t", end=' ')

            data_id = int(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]['DataID'].iloc[0])
            oldpost = parser.parse(str(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]['PostDate'].iloc[0]))
            if (data_id > 0) & (oldpost == newpost):
                print('Same discussion post, continue!!! PostDate: ' + str(oldpost))
                continue

            # Old post found. Skip this.
            if oldpost > newpost: continue

            # Recent discussion post found. Remove old discussion list and add new discussion
            if (data_id == 0) | (oldpost < newpost):
                replace = True
        else:
            print("New question found !!!")

        # fname = make_filename(qtitle, qid, data_id)
        # fname = ""
        # if (len(fname) <= 0): 
        #     print(f'fname={fname}, qtitle={qtitle}, qid={qid}, data_id={data_id}')
        #     continue
        # else:
        #     new_data_id = refresh_exam_file(driver, url, fname, did, data_id, newpost, '2024-04-01 0:00')
        #     if new_data_id <= 0: break
        new_data_id = data_id
        if (replace == True):    
            data_id = int(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]['DataID'].iloc[0])
            if (oldpost < newpost):
                print('Recent discussion post : ' + str(oldpost) + ' ==> ' + str(newpost))
                df = df.drop(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)].index)

        new_row = [{ 'ExamType': qtitle, 'ExamNo': qid, 'DiscussNo': did, 'DataID': new_data_id, 'PostDate': newpost, 'DiscussURL': url }]
        df = pd.concat([df, pd.DataFrame(new_row)], ignore_index=True)
        if index % 100 == 0:
            write_discuss_list(df, discuss_list)
            print(f'Write Discuss List {index} / {len(new_df)}')

    driver.close()
    driver.quit()

    write_discuss_list(df, discuss_list)

def read_AZ_Exam_list(fname):
    df = pd.read_csv(fname, delimiter='\t', encoding='utf-8', header=None,
                    names=['Topic', 'ExamNo', 'DiscussNo', 'DataNo', 'PostDate', 'DiscussURL'],
                    index_col=False)

    return df

def refresh_AZ_exam(exam_list_file, qtitle, begin=0):
    start_time = time.time()
    df = read_AZ_Exam_list(exam_list_file)

    driver = set_chrome_driver()
    driver.set_window_position(1600,10)

    for i in range(len(df))[begin:]:
        tid = int(df.at[i, 'Topic'])
        qid = int(df.at[i, 'ExamNo'])
        did = int(df.at[i, 'DiscussNo'])
        data_id = int(df.at[i, 'DataNo'])
        if did == 0:
            continue

        postdate = str(df.at[i, 'PostDate'])
        url = str(df.at[i, 'DiscussURL'])
        print(f"{qtitle}\t{tid}\t{qid:4d} / {len(df)}", flush=True)
        try:
            fname = make_filename(qtitle, qid, data_id, tid)
            if (len(fname) <= 0): 
                print(f'fname={fname}, qtitle={qtitle}, qid={qid}, data_id={data_id}')
                continue
            else:
                new_data_id = refresh_exam_file(driver, url, fname, did, data_id, postdate, '2024-04-01 0:00')
                if new_data_id <= 0: break

        except Exception as e:
            print("Error:", str(e))
            print(f"*** Make question error !!! {e}")
            break
        
    end_time = time.time()
    duration = end_time - start_time
    formatted_duration = timedelta(seconds=duration)

    print(f"Function duration: {formatted_duration}")

    driver.close()
    driver.quit()

if __name__ == "__main__":
    DISCUSS = 'AzureDiscuss.txt'
    FORUM_NAME = 'microsoft'
    refresh_from_forum(DISCUSS, FORUM_NAME, 1)

    # AZ305 = 'Exam AZ-305'
    # refresh_AZ_exam('AZ305_Exam.csv', AZ305)

    # AZ104 = 'Exam AZ-104'
    # refresh_AZ_exam('AZ104_Exam.csv', AZ104)

    # AZ900 = 'Exam AZ-900'
    # refresh_AZ_exam('AZ900_Exam.csv', AZ900)
