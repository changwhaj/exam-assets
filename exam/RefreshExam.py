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
        {
            "qtitle": "Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1",
            "prefname": "aws/SAA_C03/SAA3-Q",
            "qlength": 1019,
            "first_id": 839758,
        },
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

def read_Exam_list(fname):
    df = pd.read_csv(fname, delimiter='\t', encoding='utf-8', header=None,
                    names=['ExamNo', 'DiscussNo', 'DataNo', 'PostDate', 'DiscussURL'],
                    index_col=False)

    return df

def refresh_all_exam(exam_list_file, qtitle, begin=0):
    start_time = time.time()
    df = read_Exam_list(exam_list_file)

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
        print(qtitle+"\t"+str(qid)+"\t"+url, flush=True)
        # try:
        new_data_id = refresh_exam_file(driver, url, qtitle, qid, did, data_id, postdate, '2024-04-01 0:00')
        if new_data_id <= 0: break
    
        # except Exception as e:
        #     print("Error:", str(e))
        #     print(f"*** Make question error !!! {e}")
        #     break
        #     # pass
        
    end_time = time.time()
    duration = end_time - start_time
    formatted_duration = timedelta(seconds=duration)

    print(f"Function duration: {formatted_duration}")

    driver.close()
    driver.quit()

if __name__ == "__main__":

    AIF = 'Exam AWS Certified AI Practitioner AIF-C01 topic 1'
    refresh_all_exam('AIF_Exam.csv', AIF)         # OK 334

    # CLF2 = "Exam AWS Certified Cloud Practitioner CLF-C02 topic 1"
    # refresh_all_exam('CLF2_Exam.csv', CLF2)
    
    # SAA_C03 = 'Exam AWS Certified Solutions Architect - Associate SAA-C03 topic 1'
    # refresh_all_exam('SAA3_Exam.csv', SAA_C03)    # OK 1019

    MLA = "Exam AWS Certified Machine Learning Engineer - Associate MLA-C01 topic 1"
    refresh_all_exam('MLA_Exam.csv', MLA)         # OK 145
     
    # DVA2 = 'Exam AWS Certified Developer - Associate DVA-C02 topic 1'
    # refresh_all_exam('DVA2_Exam.csv', DVA2)       # OK 557

    # DEA = 'Exam AWS Certified Data Engineer - Associate DEA-C01 topic 1'
    # refresh_all_exam('DEA_Exam.csv', DEA)       # OK 261

    # SOA2 = "Exam AWS Certified SysOps Administrator - Associate topic 1"
    # refresh_all_exam('SOA2_Exam.csv', SOA2)       # OK 478

    # SOA3 = "Exam AWS Certified CloudOps Engineer - Associate SOA-C03 topic 1"
    # refresh_all_exam('SOA3_Exam.csv', SOA3)       # OK 65

    # DOP2 = "Exam AWS Certified DevOps Engineer - Professional DOP-C02 topic 1"
    # refresh_all_exam('DOP2_Exam.csv', DOP2)       # OK 390
     
    # SAP_C02 = 'Exam AWS Certified Solutions Architect - Professional SAP-C02 topic 1'
    # refresh_all_exam('SAP2_Exam.csv', SAP_C02)    # OK 529

    # MLS = 'Exam AWS Certified Machine Learning - Specialty topic 1'
    # refresh_all_exam('MLS_Exam.csv', MLS)         # OK 369

    # SCS2 = "Exam AWS Certified Security - Specialty SCS-C02 topic 1"
    # refresh_all_exam('SCS2_Exam.csv', SCS2)       # OK 307
    
    # ANS = "Exam AWS Certified Advanced Networking - Specialty ANS-C01 topic 1"
    # refresh_all_exam('ANS_Exam.csv', ANS)         # OK 272
     
