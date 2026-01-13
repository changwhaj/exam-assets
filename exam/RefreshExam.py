import time
import pandas as pd
from datetime import datetime, timedelta
from random import *

from ExamLibrary import refresh_exam_file, set_chrome_driver

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
            "qlength": 216,
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

def read_Exam_from_discuss(fname, qtitle):
    df = pd.read_csv(fname, delimiter='\t', encoding='utf-8', header=None, 
                    names=['ExamType', 'ExamNo', 'DiscussNo', 'DataNo', 'PostDate', 'DiscussURL'], 
                    index_col=False)
    
    df['ExamType'] = df['ExamType'].str.strip()
    df['ExamNo'] = df['ExamNo'].astype(int)
    df['DiscussNo'] = df['DiscussNo'].astype(int)
    df['DataNo'] = df['DataNo'].astype(int)
    df['DiscussURL'] = df['DiscussURL'].str.strip()

    exam_df = df.loc[df['ExamType'] == qtitle, ['ExamNo', 'DiscussNo', 'DataNo', 'PostDate', 'DiscussURL']]
    exam_df.drop_duplicates(inplace=True)
    df = exam_df.sort_values(by='ExamNo', ascending=True)
    return df.reset_index(drop=True)

def write_Exam_list(df, fname):
    df.to_csv(fname, sep='\t', header=False, index=False)

def read_Exam_list(fname):
    df = pd.read_csv(fname, delimiter='\t', encoding='utf-8', header=None,
                    names=['ExamNo', 'DiscussNo', 'DataNo', 'PostDate', 'DiscussURL'],
                    index_col=False)

    return df

def refresh_all_exam(discuss_file, qtitle, begin=0):
    start_time = time.time()
    # df = read_Exam_list(exam_list_file)
    df = read_Exam_from_discuss(discuss_file, qtitle)
    write_Exam_list(df, "aaa.csv")

    driver = set_chrome_driver()
    driver.set_window_position(1600,10)

    for i in range(len(df))[begin:]:
        qid = int(df.at[i, 'ExamNo'])
        did = int(df.at[i, 'DiscussNo'])
        data_id = int(df.at[i, 'DataNo'])
        if did == 0:
            continue

        postdate = str(df.at[i, 'PostDate'])
        url = str(df.at[i, 'DiscussURL'])
        print(f"{qtitle}\t{qid:4d} / {len(df)}\t {postdate}", end=' ', flush=True)
        try:
            fname = make_filename(qtitle, qid, data_id)
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
            # pass
        
    end_time = time.time()
    duration = end_time - start_time
    formatted_duration = timedelta(seconds=duration)

    print(f"Function duration: {formatted_duration}")

    driver.close()
    driver.quit()

if __name__ == "__main__":

    DISCUSS = 'AmazonDiscuss.txt'
    AIF = 'Exam AWS Certified AI Practitioner AIF-C01 topic 1'
    refresh_all_exam(DISCUSS, AIF, 334)         # OK 334

    CLF2 = "Exam AWS Certified Cloud Practitioner CLF-C02 topic 1"
    refresh_all_exam(DISCUSS, CLF2, 719)        # OK 719
    
    # SAA_C03 = 'Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1'
    # refresh_all_exam('ExamList_SAA3.csv', SAA_C03, 1019)    # OK 1019

    MLA = "Exam AWS Certified Machine Learning Engineer - Associate MLA-C01 topic 1"
    # refresh_all_exam('ExamList_MLA.csv', MLA, 0)          # OK 145
    refresh_all_exam(DISCUSS, MLA, 216)          # OK 216
     
    DVA2 = "Exam AWS Certified Developer - Associate DVA-C02 topic 1"
    refresh_all_exam(DISCUSS, DVA2, 557)       # OK 557

    DEA = 'Exam AWS Certified Data Engineer - Associate DEA-C01 topic 1'
    refresh_all_exam(DISCUSS, DEA, 261)       # OK 261

    # SOA2 = "Exam AWS Certified SysOps Administrator - Associate topic 1"
    # refresh_all_exam('ExamList_SOA2.csv', SOA2, 478)       # OK 478

    # SOA3 = "Exam AWS Certified CloudOps Engineer - Associate SOA-C03 topic 1"
    # refresh_all_exam('ExamList_SOA3.csv', SOA3, 65)       # OK 65

    # DOP2 = "Exam AWS Certified DevOps Engineer - Professional DOP-C02 topic 1"
    # refresh_all_exam('ExamList_DOP2.csv', DOP2)       # OK 390
     
    # SAP_C02 = 'Exam AWS Certified Solutions Architect - Professional SAP-C02 topic 1'
    # refresh_all_exam('ExamList_SAP2.csv', SAP_C02)    # OK 529

    MLS = 'Exam AWS Certified Machine Learning - Specialty topic 1'
    refresh_all_exam(DISCUSS, MLS, 369)         # OK 369

    # SCS2 = "Exam AWS Certified Security - Specialty SCS-C02 topic 1"
    # refresh_all_exam('ExamList_SCS2.csv', SCS2)       # OK 307
    
    ANS = "Exam AWS Certified Advanced Networking - Specialty ANS-C01 topic 1"
    refresh_all_exam(DISCUSS, ANS, 272)         # OK 272
     
