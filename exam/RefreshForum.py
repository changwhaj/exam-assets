import time
import re
import pandas as pd
from datetime import datetime, timedelta

from bs4 import BeautifulSoup

from random import *
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
        #     "qtitle": "Exam CISM topic 1",
        #     "prefname": "isaca/CISM/CISM-Q",
        #     "qlength": 1152,
        #     "first_id": 818826,
        # },
        # { 
        #     "qtitle": "Exam CISA topic 1",
        #     "prefname": "isaca/CISA/CISA-Q",
        #     "qlength": 1511,
        #     "first_id": 818026,
        # },
        # {
        #     "qtitle": "Exam AWS Certified Advanced Networking - Specialty ANS-C01 topic 1",
        #     "prefname": "aws/ANS_C01/ANS-Q",
        #     "qlength": 189,
        #     "first_id": 875171,
        # },
        # {
        #     "qtitle": "Exam AWS Certified Cloud Practitioner CLF-C02 topic 1",
        #     "prefname": "aws/CLF_C02/CLF2-Q",
        #     "qlength": 501,
        #     "first_id": 898791,
        # },
                # {
                #     "qtitle": "Exam AWS Certified Data Analytics - Specialty topic 1",
                #     "prefname": "aws/DAS-C01/DAS-Q",
                #     "qlength": 164,
                #     "first_id": 781767,
                # },
        # {
        #     "qtitle": "Exam AWS Certified Database - Specialty topic 1",
        #     "prefname": "aws/DBS/DBS-Q",
        #     "qlength": 359,
        #     "first_id": 807243,
        # },
                # {
                #     "qtitle": "Exam AWS Certified Developer - Associate DVA-C02 topic 1",
                #     "prefname": "aws/DVA_C02/DVA2-Q",
                #     "qlength": 357,
                #     "first_id": 874573,
                # },
        {
            "qtitle": "Exam AWS Certified DevOps Engineer - Professional DOP-C02 topic 1",
            "prefname": "aws/DOP_C02/DOP2-Q",
            "qlength": 382,
            "first_id": 879465,
        },
        # {
        #     "qtitle": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1",
        #     "prefname": "aws/SAA_C03/SAA3-Q",
        #     "qlength": 1019,
        #     "first_id": 839758,
        # },
        # {
        #     "qtitle": "Exam AWS Certified Machine Learning - Specialty topic 1",
        #     "prefname": "aws/MLS_C01/MLS-Q",
        #     "qlength": 332,
        #     "first_id": 781931,
        # },
        # {
        #     "qtitle": "Exam AWS Certified Security - Specialty SCS-C02 topic 1",
        #     "prefname": "aws/SCS_C02/SCS2-Q",
        #     "qlength": 173,
        #     "first_id": 897420,
        # },
        # {
        #     "qtitle": "Exam AWS Certified Solutions Architect - Professional SAP-C02 topic 1",
        #     "prefname": "aws/SAP_C02/SAP2-Q",
        #     "qlength": 529,
        #     "first_id": 856116,
        # },
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
        # aws/SES/SES-Q	Exam AWS Certified Security - Specialty topic 1
        # aws/DOP_C01/DOP-Q	Exam AWS DevOps Engineer Professional topic 1
    ]

    findexam = next((exam for exam in exams if exam["qtitle"] == qtitle), None)

    if findexam:
        if (dataid > 0) & (dataid < findexam["first_id"]):
            return fname
        fname = findexam["prefname"] + format(int(qid), '04') + '.html'
      
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

def refresh_from_forum(discuss_list, forum_name, last_page):

    df = read_discuss_list(discuss_list)
    refresh = False
    driver = set_chrome_driver()
    driver.set_window_position(1600,10)

    new_df = get_new_discuss_list(driver, forum_name, df['PostDate'][0])
    print(new_df)

    for index in range(len(new_df)-1, -1, -1):
        row = new_df.iloc[index]
        qtitle = row['ExamType']
        qid = row['ExamNo']
        did = row['DiscussNo']
        url = row['DiscussURL']
        newpost = row['PostDate']
        print(qtitle+"\t"+str(qid)+"\t"+str(did)+"\t"+str(newpost)+"\t"+url, end=' ', flush=True)

        replace = False    
        data_id = 0
        if ((refresh != True) & len(df[(df['ExamType'] == qtitle) & (df['ExamNo'] == qid) & (df['DiscussNo'] == did)]) > 0):
            print("Same question found !!!")

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

        new_data_id = refresh_exam_file(driver, url, qtitle, qid, did, data_id, newpost, '2025-06-01 0:00')
        if new_data_id <= 0: break

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

if __name__ == "__main__":
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
