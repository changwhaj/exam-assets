window.QS_SET25 = [
  {
    n: 241,
    en: `A company manufactures smart vehicles. The company uses a custom application to collect vehicle data. The vehicles use the MQTT protocol to connect to the application. The company processes the data in 5-minute intervals. The company then copies vehicle telematics data to on-premises storage. Custom applications analyze this data to detect anomalies.<br><br>The number of vehicles that send data grows constantly. Newer vehicles generate high volumes of data. The on-premises storage solution is not able to scale for peak traffic, which results in data loss. The company must modernize the solution and migrate the solution to AWS to resolve the scaling challenges.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `스마트 자동차를 제조하는 회사입니다. 회사는 맞춤형 애플리케이션을 사용하여 차량 데이터를 수집합니다. 차량은 MQTT 프로토콜을 사용하여 애플리케이션에 연결합니다. 회사는 5분 간격으로 데이터를 처리합니다. 그런 다음 회사는 차량 텔레매틱스 데이터를 온프레미스 스토리지에 복사합니다. 맞춤형 애플리케이션은 이 데이터를 분석하여 이상 징후를 탐지합니다.<br><br>데이터를 전송하는 차량의 수는 지속적으로 증가하고 있습니다. 최신 차량은 대량의 데이터를 생성합니다. 온프레미스 스토리지 솔루션은 최대 트래픽에 맞게 확장할 수 없으므로 데이터 손실이 발생합니다. 회사는 확장 문제를 해결하기 위해 솔루션을 현대화하고 AWS로 마이그레이션해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS IoT Greengrass to send the vehicle data to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Create an Apache Kafka application to store the data in Amazon S3. Use a pretrained model in Amazon SageMaker to detect anomalies.`, ko: `AWS IoT Greengrass를 사용하여 차량 데이터를 Amazon MSK로 보냅니다. Apache Kafka 애플리케이션을 생성하여 Amazon S3에 데이터를 저장합니다. Amazon SageMaker에서 사전 훈련된 모델을 사용하여 이상 징후를 탐지합니다.` },
      { k: 'B', en: `Use AWS IoT Core to receive the vehicle data. Configure rules to route data to an Amazon Kinesis Data Firehose delivery stream that stores the data in Amazon S3. Create an Amazon Kinesis Data Analytics application that reads from the delivery stream to detect anomalies.`, ko: `AWS IoT Core를 사용하여 차량 데이터를 수신합니다. Amazon S3에 데이터를 저장하는 Amazon Kinesis Data Firehose 전송 스트림으로 데이터를 라우팅하는 규칙을 구성합니다. 이상을 탐지하기 위해 전송 스트림에서 읽는 Amazon Kinesis Data Analytics 애플리케이션을 생성합니다.` },
      { k: 'C', en: `Use AWS IoT FleetWise to collect the vehicle data. Send the data to an Amazon Kinesis data stream. Use an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Use the built-in machine learning transforms in AWS Glue to detect anomalies.`, ko: `AWS IoT FleetWise를 사용하여 차량 데이터를 수집합니다. Amazon Kinesis 데이터 스트림으로 데이터를 보냅니다. Amazon Kinesis Data Firehose 전송 스트림을 사용하여 Amazon S3에 데이터를 저장합니다. AWS Glue에 내장된 기계 학습 변환을 사용하여 이상 현상을 탐지합니다.` },
      { k: 'D', en: `Use Amazon MQ for RabbitMQ to collect the vehicle data. Send the data to an Amazon Kinesis Data Firehose delivery stream to store the data in Amazon S3. Use Amazon Lookout for Metrics to detect anomalies.`, ko: `RabbitMQ용 Amazon MQ를 사용하여 차량 데이터를 수집합니다. Amazon Kinesis Data Firehose 전송 스트림으로 데이터를 전송하여 Amazon S3에 데이터를 저장합니다. Amazon Lookout for Metrics를 사용하여 이상 징후를 탐지합니다.` },
    ],
    answer: ['B'],
    vote: '82% B',
    explain: `<p><span class="mark-ok">✅ B — IoT Core + Kinesis Firehose + Kinesis Data Analytics</span></p>
<p><strong>MQTT + 완전 관리형:</strong> AWS IoT Core는 MQTT 프로토콜을 네이티브로 지원하며, IoT 규칙 엔진으로 수신 데이터를 Kinesis Data Firehose로 즉시 라우팅합니다. 별도의 엣지 에이전트 설치가 불필요합니다.</p>
<p><strong>이상 탐지:</strong> Amazon Kinesis Data Analytics는 Random Cut Forest 등 내장 이상 탐지 알고리즘을 SQL로 간편하게 구성할 수 있어 운영 오버헤드가 최소화됩니다.</p>
<p>C(FleetWise)는 차량 데이터 수집에 엣지 에이전트(엣지 디바이스 소프트웨어)가 필요하고, Kinesis 직접 연동이 제한적이며, Glue는 이상 탐지보다 ETL에 적합합니다.</p>
<p><a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/app-anomaly-detection.html" target="_blank">AWS 공식 문서 - Kinesis Data Analytics 이상 탐지</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — IoT Greengrass는 엣지 컴퓨팅(디바이스에서 로컬 처리)에 특화됩니다. MSK + Kafka 애플리케이션을 직접 관리하는 것은 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ C</span> — IoT FleetWise는 엣지 에이전트 소프트웨어 배포가 필요하여 기존 커스텀 애플리케이션 변경이 필요합니다. AWS Glue 기계 학습 변환은 이상 탐지보다 ETL에 특화되어 있습니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon MQ는 MQTT 브로커이지만 IoT Core보다 확장성이 제한적이며 완전 관리형 MQTT IoT 연결에 최적화되어 있지 않습니다.</p>`,
    disc: [
      { ans: 'B (82%)', txt: 'IoT Core = MQTT 완전 관리형 수신 + Firehose = S3 자동 저장 + KDA = 내장 이상 탐지. FleetWise(C)는 엣지 에이전트 필요로 오버헤드 증가. Glue는 ETL 전용, SageMaker는 훈련 모델 관리 부담.' }
    ]
  },
  {
    n: 242,
    en: `During an audit, a security team discovered that a development team was putting IAM user secret access keys in their code and then committing it to an AWS CodeCommit repository. The security team wants to automatically find and remediate instances of this security vulnerability.<br><br>Which solution will ensure that the credentials are appropriately secured automatically?`,
    ko: `감사 중에 보안 팀은 개발 팀이 IAM 사용자 보안 액세스 키를 코드에 넣은 다음 이를 AWS CodeCommit 리포지토리에 커밋하고 있음을 발견했습니다. 보안 팀은 이 보안 취약점의 인스턴스를 자동으로 찾아서 해결하려고 합니다.<br><br>자격 증명이 자동으로 적절하게 보호되도록 보장하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Run a script nightly using AWS Systems Manager Run Command to search for credentials on the development instances. If found, use AWS Secrets Manager to rotate the credentials.`, ko: `AWS Systems Manager Run Command를 사용하여 야간에 스크립트를 실행하여 개발 인스턴스에서 자격 증명을 검색합니다. 찾은 경우 AWS Secrets Manager를 사용하여 자격 증명을 교체하세요.` },
      { k: 'B', en: `Use a scheduled AWS Lambda function to download and scan the application code from CodeCommit. If credentials are found, generate new credentials and store them in AWS KMS.`, ko: `예약된 AWS Lambda 함수를 사용하여 CodeCommit에서 애플리케이션 코드를 다운로드하고 스캔합니다. 자격 증명이 발견되면 새 자격 증명을 생성하여 AWS KMS에 저장합니다.` },
      { k: 'C', en: `Configure Amazon Macie to scan for credentials in CodeCommit repositories. If credentials are found, trigger an AWS Lambda function to disable the credentials and notify the user.`, ko: `CodeCommit 리포지토리에서 자격 증명을 검색하도록 Amazon Macie를 구성합니다. 자격 증명이 발견되면 AWS Lambda 함수를 트리거하여 자격 증명을 비활성화하고 사용자에게 알립니다.` },
      { k: 'D', en: `Configure a CodeCommit trigger to invoke an AWS Lambda function to scan new code submissions for credentials. If credentials are found, disable them in AWS IAM and notify the user.`, ko: `새로운 코드 제출에서 자격 증명을 검색하기 위해 AWS Lambda 함수를 호출하도록 CodeCommit 트리거를 구성합니다. 자격 증명이 발견되면 AWS IAM에서 자격 증명을 비활성화하고 사용자에게 알립니다.` },
    ],
    answer: ['D'],
    vote: '88% D',
    explain: `<p><span class="mark-ok">✅ D — CodeCommit 트리거 + Lambda 스캔 + IAM 자격 증명 비활성화</span></p>
<p>CodeCommit 트리거를 설정하면 새 코드가 커밋될 때 <strong>즉시</strong> Lambda 함수가 호출됩니다. Lambda가 코드에서 IAM 액세스 키를 탐지하면 IAM API를 통해 해당 키를 즉시 비활성화하고 알림을 전송합니다.</p>
<p>AWS 공식 블로그에서 이 패턴(CodeCommit 트리거 + Lambda로 민감 데이터 탐지)을 권장합니다.</p>
<p><a href="https://aws.amazon.com/blogs/compute/discovering-sensitive-data-in-aws-codecommit-with-aws-lambda-2/" target="_blank">AWS 공식 블로그 - Lambda로 CodeCommit의 민감 데이터 탐지</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 야간 스크립트는 코드 커밋 후 최대 24시간 동안 유출된 자격 증명을 감지하지 못합니다. 또한 Secrets Manager는 코드에 포함된 자격 증명을 교체하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — KMS는 비밀 저장 도구가 아니라 암호화 키 관리 서비스입니다. 자격 증명은 Secrets Manager에 저장해야 합니다. 또한 예약 스캔은 즉각적인 탐지가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon Macie는 <strong>Amazon S3 버킷만 스캔</strong>합니다. CodeCommit 리포지토리를 직접 스캔하는 기능이 없습니다.</p>`,
    disc: [
      { ans: 'D (88%)', txt: 'Macie(C)는 S3 전용으로 CodeCommit 스캔 불가. KMS(B)는 비밀 저장소 아님. A는 야간 스캔으로 지연 탐지. D의 CodeCommit 트리거 → Lambda가 커밋 즉시 스캔하는 유일한 실시간 해결책.' }
    ]
  },
  {
    n: 243,
    en: `A company has a data lake in Amazon S3 that needs to be accessed by hundreds of applications across many AWS accounts. The company's information security policy states that the S3 bucket must not be accessed over the public internet and that each application should have the minimum permissions necessary to function.<br><br>To meet these requirements, a solutions architect plans to use an S3 access point that is restricted to specific VPCs for each application.<br><br>Which combination of steps should the solutions architect take to implement this solution? (Choose two.)`,
    ko: `한 회사의 Amazon S3에 여러 AWS 계정에 걸쳐 수백 개의 애플리케이션이 액세스해야 하는 데이터 레이크가 있습니다. 회사의 정보 보안 정책에는 S3 버킷이 공용 인터넷을 통해 액세스되어서는 안 되며 각 애플리케이션이 작동하는 데 필요한 최소한의 권한이 있어야 한다고 명시되어 있습니다.<br><br>이러한 요구 사항을 충족하기 위해 솔루션 아키텍트는 각 애플리케이션에 대해 특정 VPC로 제한된 S3 액세스 포인트를 사용할 계획입니다.<br><br>솔루션 아키텍트는 이 솔루션을 구현하기 위해 어떤 단계 조합을 수행해야 합니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Create an S3 access point for each application in the AWS account that owns the S3 bucket. Configure each access point to be accessible only from the application's VPC. Update the bucket policy to require access from an access point.`, ko: `S3 버킷을 소유한 AWS 계정의 각 애플리케이션에 대해 S3 액세스 포인트를 생성합니다. 애플리케이션의 VPC에서만 액세스할 수 있도록 각 액세스 포인트를 구성합니다. 액세스 포인트에서 액세스를 요구하도록 버킷 정책을 업데이트합니다.` },
      { k: 'B', en: `Create an interface endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Create a VPC gateway attachment for the S3 endpoint.`, ko: `각 애플리케이션의 VPC에서 Amazon S3에 대한 인터페이스 엔드포인트를 생성합니다. S3 액세스 포인트에 대한 액세스를 허용하도록 엔드포인트 정책을 구성합니다. S3 엔드포인트에 대한 VPC 게이트웨이 연결을 생성합니다.` },
      { k: 'C', en: `Create a gateway endpoint for Amazon S3 in each application's VPC. Configure the endpoint policy to allow access to an S3 access point. Specify the route table that is used to access the access point.`, ko: `각 애플리케이션의 VPC에서 Amazon S3에 대한 게이트웨이 엔드포인트를 생성합니다. S3 액세스 포인트에 대한 액세스를 허용하도록 엔드포인트 정책을 구성합니다. 액세스 포인트에 액세스하는 데 사용되는 라우팅 테이블을 지정합니다.` },
      { k: 'D', en: `Create an S3 access point for each application in each AWS account and attach the access points to the S3 bucket. Configure each access point to be accessible only from the application's VPC. Update the bucket policy to require access from an access point.`, ko: `각 AWS 계정의 각 애플리케이션에 대한 S3 액세스 포인트를 생성하고 액세스 포인트를 S3 버킷에 연결합니다. 애플리케이션의 VPC에서만 액세스할 수 있도록 각 액세스 포인트를 구성합니다. 액세스 포인트에서 액세스를 요구하도록 버킷 정책을 업데이트합니다.` },
      { k: 'E', en: `Create a gateway endpoint for Amazon S3 in the data lake's VPC. Attach an endpoint policy to allow access to the S3 bucket. Specify the route table that is used to access the bucket.`, ko: `데이터 레이크의 VPC에 Amazon S3용 게이트웨이 엔드포인트를 생성합니다. S3 버킷에 대한 액세스를 허용하려면 엔드포인트 정책을 연결하세요. 버킷에 액세스하는 데 사용되는 라우팅 테이블을 지정합니다.` },
    ],
    answer: ['A', 'C'],
    vote: 'AC (66%) AB (21%) 논란',
    explain: `<p><span class="mark-ok">✅ A — S3 버킷 소유 계정에 액세스 포인트 생성</span></p>
<p>S3 액세스 포인트는 <strong>버킷을 소유한 계정(데이터 레이크 계정)</strong>에서 생성하고 각 애플리케이션 VPC에서만 접근 가능하도록 구성합니다. 버킷 정책에서 액세스 포인트를 통한 접근만 허용하면 최소 권한과 인터넷 차단 요건을 동시에 충족합니다. D와의 차이는 "버킷 소유 계정(A)"과 "각 애플리케이션 계정(D)"입니다.</p>
<p><span class="mark-ok">✅ C — 각 애플리케이션 VPC에 S3 게이트웨이 엔드포인트</span></p>
<p>S3 게이트웨이 엔드포인트는 VPC에서 Amazon S3로의 트래픽이 인터넷을 거치지 않고 AWS 내부 네트워크를 통해 전달되도록 합니다. 엔드포인트 정책으로 특정 S3 액세스 포인트에만 접근을 허용합니다.</p>
<p><a href="https://repost.aws/knowledge-center/s3-access-bucket-restricted-to-vpc" target="_blank">AWS Knowledge Center - VPC로 제한된 S3 버킷 액세스</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 인터페이스 엔드포인트(PrivateLink)는 S3보다 EC2, ECS, SNS 등 서비스에 주로 사용됩니다. S3는 게이트웨이 엔드포인트가 표준입니다. 또한 "VPC 게이트웨이 연결"은 실제로 존재하지 않는 구성입니다.</p>
<p><span class="mark-no">❌ D</span> — 액세스 포인트는 <strong>S3 버킷을 소유한 계정</strong>에서 생성해야 합니다. 각 애플리케이션 계정에서 생성하는 것은 올바른 방법이 아닙니다.</p>
<p><span class="mark-no">❌ E</span> — 데이터 레이크 VPC에 게이트웨이 엔드포인트를 생성하면 데이터 레이크 VPC의 리소스만 S3에 접근 가능합니다. 다른 계정/VPC의 애플리케이션 접근을 해결하지 못합니다.</p>`,
    disc: [
      { ans: 'AC (66%) vs AB (21%)', txt: 'AWS 블로그에서 AC 패턴 권장(버킷 계정 액세스 포인트 + 앱 계정 게이트웨이 엔드포인트). D는 버킷 소유 계정이 아닌 곳에 액세스 포인트 생성으로 오류. B는 인터페이스 엔드포인트가 S3에 표준 아님(게이트웨이가 표준).' }
    ]
  },
  {
    n: 244,
    en: `A company has developed a hybrid solution between its data center and AWS. The company uses Amazon VPC and Amazon EC2 instances that send application logs to Amazon CloudWatch. The EC2 instances read data from multiple relational databases that are hosted on premises.<br><br>The company wants to monitor which EC2 instances are connected to the databases in near-real time. The company already has a monitoring solution that uses Splunk on premises. A solutions architect needs to determine how to send networking traffic to Splunk.<br><br>How should the solutions architect meet these requirements?`,
    ko: `한 회사가 데이터 센터와 AWS 간의 하이브리드 솔루션을 개발했습니다. 이 회사는 애플리케이션 로그를 Amazon CloudWatch로 보내는 Amazon VPC 및 Amazon EC2 인스턴스를 사용합니다. EC2 인스턴스는 온프레미스에서 호스팅되는 여러 관계형 데이터베이스에서 데이터를 읽습니다.<br><br>회사는 데이터베이스에 연결된 EC2 인스턴스를 거의 실시간으로 모니터링하려고 합니다. 이 회사는 이미 온프레미스에서 Splunk를 사용하는 모니터링 솔루션을 보유하고 있습니다. 솔루션 아키텍트는 네트워킹 트래픽을 Splunk로 보내는 방법을 결정해야 합니다.<br><br>솔루션 설계자는 이러한 요구 사항을 어떻게 충족해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Enable VPC flows logs, and send them to CloudWatch. Create an AWS Lambda function to periodically export the CloudWatch logs to an Amazon S3 bucket by using the pre-defined export function. Generate ACCESS_KEY and SECRET_KEY AWS credentials. Configure Splunk to pull the logs from the S3 bucket by using those credentials.`, ko: `VPC 흐름 로그를 활성화하고 CloudWatch로 보냅니다. 사전 정의된 내보내기 기능을 사용하여 CloudWatch 로그를 Amazon S3 버킷으로 주기적으로 내보내는 AWS Lambda 함수를 생성합니다. ACCESS_KEY 및 SECRET_KEY AWS 자격 증명을 생성합니다. 해당 자격 증명을 사용하여 S3 버킷에서 로그를 가져오도록 Splunk를 구성합니다.` },
      { k: 'B', en: `Create an Amazon Kinesis Data Firehose delivery stream with Splunk as the destination. Configure a pre-processing AWS Lambda function with a Kinesis Data Firehose stream processor that extracts individual log events from records sent by CloudWatch Logs subscription filters. Enable VPC flows logs, and send them to CloudWatch. Create a CloudWatch Logs subscription that sends log events to the Kinesis Data Firehose delivery stream.`, ko: `Splunk를 대상으로 하여 Amazon Kinesis Data Firehose 전송 스트림을 생성합니다. CloudWatch Logs 구독 필터가 전송한 레코드에서 개별 로그 이벤트를 추출하는 Kinesis Data Firehose 스트림 프로세서를 사용하여 사전 처리 AWS Lambda 함수를 구성합니다. VPC 흐름 로그를 활성화하고 CloudWatch로 보냅니다. Kinesis Data Firehose 전송 스트림으로 로그 이벤트를 보내는 CloudWatch Logs 구독을 생성합니다.` },
      { k: 'C', en: `Ask the company to log every request that is made to the databases along with the EC2 instance IP address. Export the CloudWatch logs to an Amazon S3 bucket. Use Amazon Athena to query the logs grouped by database name. Export Athena results to another S3 bucket. Invoke an AWS Lambda function to automatically send any new file that is put in the S3 bucket to Splunk.`, ko: `EC2 인스턴스 IP 주소와 함께 데이터베이스에 대한 모든 요청을 기록하도록 회사에 요청하십시오. CloudWatch 로그를 Amazon S3 버킷으로 내보냅니다. Amazon Athena를 사용하여 데이터베이스 이름별로 그룹화된 로그를 쿼리합니다. Athena 결과를 다른 S3 버킷으로 내보냅니다. AWS Lambda 함수를 호출하여 S3 버킷에 있는 새 파일을 Splunk에 자동으로 보냅니다.` },
      { k: 'D', en: `Send the CloudWatch logs to an Amazon Kinesis data stream with Amazon Kinesis Data Analytics for SQL Applications. Configure a 1-minute sliding window to collect the events. Create a SQL query that uses the anomaly detection template to monitor any networking traffic anomalies in near-real time. Send the result to an Amazon Kinesis Data Firehose delivery stream with Splunk as the destination.`, ko: `SQL 애플리케이션용 Amazon Kinesis Data Analytics를 사용하여 CloudWatch 로그를 Amazon Kinesis 데이터 스트림으로 보냅니다. 이벤트를 수집하기 위해 1분 슬라이딩 기간을 구성합니다. 이상 탐지 템플릿을 사용하여 거의 실시간으로 네트워킹 트래픽 이상을 모니터링하는 SQL 쿼리를 만듭니다. Splunk를 대상으로 하여 Amazon Kinesis Data Firehose 전송 스트림으로 결과를 보냅니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — VPC 흐름 로그 → CloudWatch → Kinesis Firehose(Splunk) + Lambda 전처리</span></p>
<p>Kinesis Data Firehose는 Splunk를 기본 전송 대상으로 지원합니다. CloudWatch Logs 구독 필터로 VPC 흐름 로그를 Firehose 스트림에 실시간으로 전달하면 거의 실시간(near-real-time) 분석이 가능합니다.</p>
<p>Lambda 전처리 함수가 CloudWatch Logs 구독 필터가 보낸 압축·Base64 인코딩된 레코드를 개별 로그 이벤트로 변환하여 Splunk에서 올바르게 수신할 수 있도록 합니다.</p>
<p><a href="https://docs.aws.amazon.com/firehose/latest/dev/vpc-splunk-tutorial.html" target="_blank">AWS 공식 문서 - Firehose로 VPC 로그를 Splunk로 전송</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ACCESS_KEY/SECRET_KEY를 생성하고 Splunk가 S3에서 풀(pull)하는 방식은 보안상 권장되지 않으며 주기적 내보내기로 거의 실시간 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — 로그를 S3→Athena→S3→Lambda→Splunk로 전달하는 다단계 파이프라인은 불필요하게 복잡하고 실시간성이 떨어집니다.</p>
<p><span class="mark-no">❌ D</span> — Kinesis Data Analytics로 이상 탐지 쿼리를 구성하는 것은 Splunk로의 단순 로그 전달보다 과잉 구성입니다. Splunk가 이미 이상 탐지 기능을 내장하고 있습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '거의 실시간 → Firehose. Firehose는 Splunk 기본 대상 지원. VPC 흐름 로그 → CW Logs 구독 → Firehose(Lambda 전처리) → Splunk가 최단 경로. A는 보안 취약 + 비실시간, C/D는 과잉 복잡.' }
    ]
  },
  {
    n: 245,
    en: `A company has five development teams that have each created five AWS accounts to develop and host applications. To track spending, the development teams log in to each account every month, record the current cost from the AWS Billing and Cost Management console, and provide the information to the company's finance team.<br><br>The company has strict compliance requirements and needs to ensure that resources are created only in AWS Regions in the United States. However, some resources have been created in other Regions.<br><br>A solutions architect needs to implement a solution that gives the finance team the ability to track and consolidate expenditures for all the accounts. The solution also must ensure that the company can create resources only in Regions in the United States.<br><br>Which combination of steps will meet these requirements in the MOST operationally efficient way? (Choose three.)`,
    ko: `회사에는 애플리케이션을 개발하고 호스팅하기 위해 각각 5개의 AWS 계정을 생성한 5개의 개발 팀이 있습니다. 지출을 추적하기 위해 개발 팀은 매달 각 계정에 로그인하고 AWS Billing and Cost Management 콘솔에서 현재 비용을 기록한 다음 해당 정보를 회사의 재무 팀에 제공합니다.<br><br>회사는 엄격한 규정 준수 요구 사항을 갖고 있으며 리소스가 미국의 AWS 리전에서만 생성되도록 해야 합니다. 그러나 일부 리소스는 다른 리전에서 생성되었습니다.<br><br>솔루션 설계자는 재무팀이 모든 계정에 대한 지출을 추적하고 통합할 수 있는 기능을 제공하는 솔루션을 구현해야 합니다. 또한 솔루션은 회사가 미국 지역에서만 리소스를 생성할 수 있도록 보장해야 합니다.<br><br>가장 운영상 효율적인 방식으로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Create a new account to serve as a management account. Create an Amazon S3 bucket for the finance team. Use AWS Cost and Usage Reports to create monthly reports and to store the data in the finance team's S3 bucket.`, ko: `마스터 계정으로 사용할 새 계정을 생성합니다. 재무팀을 위한 Amazon S3 버킷을 생성합니다. AWS 비용 및 사용 보고서를 사용하여 월별 보고서를 생성하고 재무팀의 S3 버킷에 데이터를 저장합니다.` },
      { k: 'B', en: `Create a new account to serve as a management account. Deploy an organization in AWS Organizations with all features enabled. Invite all the existing accounts to the organization. Ensure that each account accepts the invitation.`, ko: `마스터 계정으로 사용할 새 계정을 생성합니다. 모든 기능이 활성화된 AWS Organizations에 조직을 배포합니다. 기존 계정을 모두 조직에 초대합니다. 각 계정이 초대를 수락하는지 확인하세요.` },
      { k: 'C', en: `Create an OU that includes all the development teams. Create an SCP that allows the creation of resources only in Regions that are in the United States. Apply the SCP to the OU.`, ko: `모든 개발팀을 포함하는 OU를 생성합니다. 미국에 있는 리전에서만 리소스 생성을 허용하는 SCP를 생성합니다. SCP를 OU에 적용합니다.` },
      { k: 'D', en: `Create an OU that includes all the development teams. Create an SCP that denies the creation of resources in Regions that are outside the United States. Apply the SCP to the OU.`, ko: `모든 개발팀을 포함하는 OU를 만듭니다. 미국 이외 지역의 리소스 생성을 거부하는 SCP를 생성합니다. SCP를 OU에 적용합니다.` },
      { k: 'E', en: `Create an IAM role in the management account. Attach a policy that includes permissions to view the Billing and Cost Management console. Allow the finance team users to assume the role. Use AWS Cost Explorer and the Billing and Cost Management console to analyze cost.`, ko: `마스터 계정에서 IAM 역할을 생성합니다. Billing and Cost Management 콘솔을 볼 수 있는 권한이 포함된 정책을 연결합니다. 재무팀 사용자가 역할을 맡도록 허용합니다. AWS Cost Explorer와 Billing and Cost Management 콘솔을 사용하여 비용을 분석하세요.` },
      { k: 'F', en: `Create an IAM role in each AWS account. Attach a policy that includes permissions to view the Billing and Cost Management console. Allow the finance team users to assume the role.`, ko: `각 AWS 계정에 IAM 역할을 생성합니다. Billing and Cost Management 콘솔을 볼 수 있는 권한이 포함된 정책을 연결합니다. 재무팀 사용자가 역할을 맡도록 허용합니다.` },
    ],
    answer: ['B', 'D', 'E'],
    vote: '87% BDE',
    explain: `<p><span class="mark-ok">✅ B — AWS Organizations 조직 배포 + 모든 계정 초대</span></p>
<p>통합 결제(Consolidated Billing)와 SCP 적용을 위해 AWS Organizations 조직을 만들고 모든 개발 계정을 초대합니다. 모든 기능(All features) 활성화가 필수입니다.</p>
<p><span class="mark-ok">✅ D — 미국 외 리전 리소스 생성 Deny SCP</span></p>
<p>SCP의 <strong>명시적 Deny</strong>가 가장 확실한 제어입니다. C(Allow 방식)는 각 멤버 계정이 자체 IAM 정책으로 다른 리전 접근을 허용할 수 있어 충분하지 않습니다. SCP는 조건부 Allow보다 명시적 Deny가 더 안전합니다.</p>
<p><span class="mark-ok">✅ E — 관리 계정 IAM 역할로 비용 통합 조회</span></p>
<p>Organizations 관리 계정에서 Cost Explorer로 전체 조직 비용을 한 곳에서 조회합니다. 각 계정 개별 로그인(F) 대신 관리 계정 역할을 통해 효율적으로 비용을 추적합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Cost and Usage Reports + S3는 비용 추적에 사용할 수 있지만, Cost Explorer가 이미 관리 계정에서 통합 비용 조회를 제공하므로 S3 버킷 생성은 불필요한 추가 구성입니다.</p>
<p><span class="mark-no">❌ C</span> — SCP의 Allow 문은 <code>Resource: "*"</code>만 허용하고 Condition을 지원하지 않아 리전 제한 Allow 구성이 기술적으로 제한됩니다. 또한 기본 FullAWSAccess SCP가 있으면 멤버 계정의 IAM 정책으로 우회 가능합니다.</p>
<p><span class="mark-no">❌ F</span> — 각 계정에 개별 역할을 생성하면 25개 계정 모두에 반복 작업이 필요합니다. 관리 계정 단일 역할(E)이 더 운영 효율적입니다.</p>`,
    disc: [
      { ans: 'BDE (87%)', txt: 'D가 C보다 강력: 명시적 Deny SCP는 멤버 계정 IAM 정책으로 우회 불가. E는 관리 계정에서 조직 전체 비용 통합 조회. F는 25개 계정 개별 역할 생성으로 비효율. A의 S3 보고서는 Cost Explorer로 대체 가능.' }
    ]
  },
  {
    n: 246,
    en: `A company needs to create and manage multiple AWS accounts for a number of departments from a central location. The security team requires read-only access to all accounts from its own AWS account. The company is using AWS Organizations and created an account for the security team.<br><br>How should a solutions architect meet these requirements?`,
    ko: `회사는 중앙 위치에서 여러 부서에 대한 여러 AWS 계정을 생성하고 관리해야 합니다. 보안 팀에는 자체 AWS 계정에서 모든 계정에 대한 읽기 전용 액세스 권한이 필요합니다. 회사는 AWS Organizations를 사용하고 있으며 보안팀용 계정을 만들었습니다.<br><br>솔루션 아키텍트는 이러한 요구 사항을 어떻게 충족해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use the OrganizationAccountAccessRole IAM role to create a new IAM policy with read-only access in each member account. Establish a trust relationship between the IAM policy in each member account and the security account. Ask the security team to use the IAM policy to gain access.`, ko: `OrganizationAccountAccessRole IAM 역할을 사용하여 각 회원 계정에 읽기 전용 액세스 권한이 있는 새 IAM 정책을 생성합니다. 각 회원 계정의 IAM 정책과 보안 계정 간의 신뢰 관계를 설정합니다. 보안팀에 IAM 정책을 사용하여 액세스 권한을 부여해 달라고 요청하세요.` },
      { k: 'B', en: `Use the OrganizationAccountAccessRole IAM role to create a new IAM role with read-only access in each member account. Establish a trust relationship between the IAM role in each member account and the security account. Ask the security team to use the IAM role to gain access.`, ko: `OrganizationAccountAccessRole IAM 역할을 사용하여 각 회원 계정에 읽기 전용 액세스 권한이 있는 새 IAM 역할을 생성합니다. 각 구성원 계정의 IAM 역할과 보안 계정 간에 신뢰 관계를 설정합니다. 보안팀에 IAM 역할을 사용하여 액세스 권한을 얻으라고 요청하세요.` },
      { k: 'C', en: `Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the management account from the security account. Use the generated temporary credentials to gain access.`, ko: `보안 팀에 AWS STS를 사용하여 보안 계정의 마스터 계정에서 OrganizationAccountAccessRole IAM 역할에 대한 AssumeRole API를 호출하도록 요청하십시오. 생성된 임시 자격 증명을 사용하여 액세스하세요.` },
      { k: 'D', en: `Ask the security team to use AWS Security Token Service (AWS STS) to call the AssumeRole API for the OrganizationAccountAccessRole IAM role in the member account from the security account. Use the generated temporary credentials to gain access.`, ko: `보안 팀에 AWS STS를 사용하여 보안 계정에서 멤버 계정의 OrganizationAccountAccessRole IAM 역할에 대한 AssumeRole API를 호출하도록 요청하세요. 생성된 임시 자격 증명을 사용하여 액세스하세요.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 각 멤버 계정에 읽기 전용 IAM 역할 + 보안 계정과 신뢰 관계</span></p>
<p>OrganizationAccountAccessRole을 통해(관리 계정 권한 사용) 각 멤버 계정에 <strong>읽기 전용 권한의 새 IAM 역할</strong>을 생성합니다. 이 역할의 신뢰 정책에서 보안 계정을 신뢰 주체로 설정하면, 보안팀은 AssumeRole로 각 멤버 계정에 읽기 전용으로 접근할 수 있습니다.</p>
<p>OrganizationAccountAccessRole은 기본적으로 AdministratorAccess 권한을 가지므로 보안팀에 직접 사용하게 하면 최소 권한 원칙에 위배됩니다. 별도 읽기 전용 역할이 필요합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — IAM 정책과 계정 간에 신뢰 관계를 설정하는 것은 불가능합니다. 신뢰 관계는 <strong>IAM 역할</strong>에만 설정할 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — OrganizationAccountAccessRole은 관리 계정이 아닌 <strong>멤버 계정</strong>에 있습니다. 또한 이 역할은 AdministratorAccess 권한을 가지므로 읽기 전용 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — OrganizationAccountAccessRole을 직접 수임하면 AdministratorAccess 권한이 부여됩니다. 읽기 전용 접근이라는 요구 사항을 충족하지 못합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'OrganizationAccountAccessRole = AdministratorAccess로 직접 사용 불가. 이를 통해 멤버 계정에 읽기 전용 역할 생성 + 보안 계정 신뢰 관계 설정(B). IAM 정책에는 신뢰 관계 설정 불가(A 탈락).' }
    ]
  },
  {
    n: 247,
    en: `A large company runs workloads in VPCs that are deployed across hundreds of AWS accounts. Each VPC consists of public subnets and private subnets that span across multiple Availability Zones. NAT gateways are deployed in the public subnets and allow outbound connectivity to the internet from the private subnets.<br><br>A solutions architect is working on a hub-and-spoke design. All private subnets in the spoke VPCs must route traffic to the internet through an egress VPC. The solutions architect already has deployed a NAT gateway in an egress VPC in a central AWS account.<br><br>Which set of additional steps should the solutions architect take to meet these requirements?`,
    ko: `대기업은 수백 개의 AWS 계정에 배포된 VPC에서 워크로드를 실행합니다. 각 VPC는 여러 가용 영역에 걸쳐 있는 퍼블릭 서브넷과 프라이빗 서브넷으로 구성됩니다. NAT 게이트웨이는 퍼블릭 서브넷에 배포되며 프라이빗 서브넷에서 인터넷으로의 아웃바운드 연결을 허용합니다.<br><br>솔루션 설계자는 허브 앤 스포크 설계를 진행 중입니다. 스포크 VPC의 모든 프라이빗 서브넷은 송신 VPC를 통해 트래픽을 인터넷으로 라우팅해야 합니다. 솔루션 아키텍트는 이미 중앙 AWS 계정의 송신 VPC에 NAT 게이트웨이를 배포했습니다.<br><br>이러한 요구 사항을 충족하기 위해 솔루션 설계자가 수행해야 하는 추가 단계는 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create peering connections between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet.`, ko: `송신 VPC와 스포크 VPC 간에 피어링 연결을 생성합니다. 인터넷 액세스를 허용하도록 필요한 라우팅을 구성합니다.` },
      { k: 'B', en: `Create a transit gateway, and share it with the existing AWS accounts. Attach existing VPCs to the transit gateway. Configure the required routing to allow access to the internet.`, ko: `전송 게이트웨이를 생성하고 이를 기존 AWS 계정과 공유합니다. 기존 VPC를 Transit Gateway에 연결합니다. 인터넷 액세스를 허용하도록 필요한 라우팅을 구성합니다.` },
      { k: 'C', en: `Create a transit gateway in every account. Attach the NAT gateway to the transit gateways. Configure the required routing to allow access to the internet.`, ko: `모든 계정에 전송 게이트웨이를 생성합니다. NAT 게이트웨이를 전송 게이트웨이에 연결합니다. 인터넷 액세스를 허용하도록 필요한 라우팅을 구성합니다.` },
      { k: 'D', en: `Create an AWS PrivateLink connection between the egress VPC and the spoke VPCs. Configure the required routing to allow access to the internet.`, ko: `송신 VPC와 스포크 VPC 사이에 AWS PrivateLink 연결을 생성합니다. 인터넷 액세스를 허용하도록 필요한 라우팅을 구성합니다.` },
    ],
    answer: ['B'],
    vote: '94% B',
    explain: `<p><span class="mark-ok">✅ B — Transit Gateway 생성 + RAM으로 계정 공유 + VPC 연결</span></p>
<p>허브 앤 스포크(Hub-and-Spoke) 아키텍처에서 수백 개 VPC를 연결하는 표준 솔루션은 <strong>AWS Transit Gateway</strong>입니다. Resource Access Manager(RAM)를 통해 기존 계정과 Transit Gateway를 공유하고, 각 스포크 VPC를 연결합니다.</p>
<p>스포크 VPC 프라이빗 서브넷의 기본 경로(0.0.0.0/0)를 Transit Gateway로 지정하면 트래픽이 중앙 송신 VPC의 NAT 게이트웨이를 통해 인터넷으로 나갑니다.</p>
<p><a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-peering.html" target="_blank">AWS 공식 문서 - Transit Gateway</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — VPC 피어링은 전이적 라우팅을 지원하지 않습니다. 스포크 VPC가 피어링을 통해 이그레스 VPC를 경유하여 인터넷에 접근할 수 없습니다. 또한 수백 개 VPC 간 피어링은 기본 할당량(50개) 초과 문제가 발생합니다.</p>
<p><span class="mark-no">❌ C</span> — 모든 계정에 Transit Gateway를 개별 생성하면 중앙 집중식 이그레스 아키텍처를 달성할 수 없습니다. 단일 TGW에 모든 VPC를 연결해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS PrivateLink는 특정 서비스 엔드포인트에 프라이빗으로 접근하는 용도입니다. 일반적인 인터넷 아웃바운드 트래픽 라우팅에는 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'B (94%)', txt: '허브 앤 스포크 = Transit Gateway. RAM으로 계정 간 공유 → VPC 연결 → 라우팅 구성. VPC 피어링(A)은 전이적 라우팅 불가 + 수백 VPC 할당량 초과. C는 중앙화 불가. D는 인터넷 라우팅에 부적합.' }
    ]
  },
  {
    n: 248,
    en: `An education company is running a web application used by college students around the world. The application runs in an Amazon Elastic Container Service (Amazon ECS) cluster in an Auto Scaling group behind an Application Load Balancer (ALB). A system administrator detects a weekly spike in the number of failed login attempts, which overwhelm the application's authentication service. All the failed login attempts originate from about 500 different IP addresses that change each week. A solutions architect must prevent the failed login attempts from overwhelming the authentication service.<br><br>Which solution meets these requirements with the MOST operational efficiency?`,
    ko: `한 교육회사에서 전 세계 대학생들이 사용하는 웹 애플리케이션을 운영하고 있습니다. 애플리케이션은 ALB 뒤의 Auto Scaling 그룹에 있는 Amazon ECS 클러스터에서 실행됩니다. 시스템 관리자는 애플리케이션의 인증 서비스를 압도하는 로그인 시도 실패 횟수가 매주 급증하는 것을 감지했습니다. 실패한 모든 로그인 시도는 매주 변경되는 약 500개의 서로 다른 IP 주소에서 발생합니다. 솔루션 설계자는 로그인 시도 실패로 인해 인증 서비스가 과부하되는 것을 방지해야 합니다.<br><br>가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS Firewall Manager to create a security group and security group policy to deny access from the IP addresses.`, ko: `AWS Firewall Manager를 사용하여 IP 주소의 액세스를 거부하는 보안 그룹 및 보안 그룹 정책을 생성하십시오.` },
      { k: 'B', en: `Create an AWS WAF web ACL with a rate-based rule, and set the rule action to Block. Connect the web ACL to the ALB.`, ko: `비율 기반 규칙을 사용하여 AWS WAF 웹 ACL을 생성하고 규칙 작업을 차단으로 설정합니다. 웹 ACL을 ALB에 연결합니다.` },
      { k: 'C', en: `Use AWS Firewall Manager to create a security group and security group policy to allow access only to specific CIDR ranges.`, ko: `AWS Firewall Manager를 사용하여 특정 CIDR 범위에만 액세스를 허용하는 보안 그룹 및 보안 그룹 정책을 생성합니다.` },
      { k: 'D', en: `Create an AWS WAF web ACL with an IP set match rule, and set the rule action to Block. Connect the web ACL to the ALB.`, ko: `IP 세트 일치 규칙을 사용하여 AWS WAF 웹 ACL을 생성하고 규칙 작업을 차단으로 설정합니다. 웹 ACL을 ALB에 연결합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS WAF 속도 기반(Rate-based) 규칙 + ALB 연결</span></p>
<p>속도 기반 규칙은 5분 내 특정 IP에서 설정 임계값 이상의 요청이 오면 <strong>자동으로 차단</strong>합니다. IP 주소가 매주 변경되어도 요청 속도를 기준으로 동적으로 차단하므로 수동 IP 목록 관리가 불필요합니다.</p>
<p>ALB와 WAF를 통합하면 트래픽이 애플리케이션 서버에 도달하기 전에 필터링됩니다.</p>
<p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html" target="_blank">AWS 공식 문서 - WAF 속도 기반 규칙</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — Firewall Manager 보안 그룹 정책은 정적 IP 또는 CIDR 기반 제어입니다. 매주 변경되는 500개 IP를 자동으로 추적하고 차단할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — IP 세트 매치(IP set match) 규칙은 미리 정의된 IP 목록을 기반으로 차단합니다. IP 주소가 매주 변경되므로 매주 IP 세트를 수동으로 업데이트해야 하여 운영 효율이 낮습니다. 속도 기반 규칙(B)이 동적으로 대응합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '"매주 변경되는 IP" → 정적 IP 기반(A/C/D) 차단은 운영 비효율. 속도 기반 규칙(B)은 자동으로 과다 요청 IP 탐지·차단으로 관리 불필요. WAF+ALB 연결로 애플리케이션 도달 전 차단.' }
    ]
  },
  {
    n: 249,
    en: `A company operates an on-premises software-as-a-service (SaaS) solution that ingests several files daily. The company provides multiple public SFTP endpoints to its customers to facilitate the file transfers. The customers add the SFTP endpoint IP addresses to their firewall allow list for outbound traffic. Changes to the SFTP endpoint IP addresses are not permitted.<br><br>The company wants to migrate the SaaS solution to AWS and decrease the operational overhead of the file transfer service.<br><br>Which solution meets these requirements?`,
    ko: `회사는 매일 여러 파일을 수집하는 온프레미스 SaaS 솔루션을 운영합니다. 회사는 파일 전송을 용이하게 하기 위해 고객에게 여러 공용 SFTP 엔드포인트를 제공합니다. 고객은 아웃바운드 트래픽에 대한 방화벽 허용 목록에 SFTP 끝점 IP 주소를 추가합니다. SFTP 엔드포인트 IP 주소에 대한 변경은 허용되지 않습니다.<br><br>회사는 SaaS 솔루션을 AWS로 마이그레이션하고 파일 전송 서비스의 운영 오버헤드를 줄이고 싶어합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Register the customer-owned block of IP addresses in the company's AWS account. Create Elastic IP addresses from the address pool and assign them to an AWS Transfer for SFTP endpoint. Use AWS Transfer to store the files in Amazon S3.`, ko: `회사의 AWS 계정에 고객이 소유한 IP 주소 블록을 등록합니다. 주소 풀에서 탄력적 IP 주소를 생성하고 SFTP용 AWS 전송 엔드포인트에 할당합니다. AWS Transfer를 사용하여 Amazon S3에 파일을 저장합니다.` },
      { k: 'B', en: `Add a subnet containing the customer-owned block of IP addresses to a VPC. Create Elastic IP addresses from the address pool and assign them to an Application Load Balancer (ALB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the ALB. Store the files in attached Amazon Elastic Block Store (Amazon EBS) volumes.`, ko: `고객 소유의 IP 주소 블록을 포함하는 서브넷을 VPC에 추가합니다. 주소 풀에서 탄력적 IP 주소를 생성하고 이를 ALB에 할당합니다. ALB 뒤의 Auto Scaling 그룹에서 FTP 서비스를 호스팅하는 EC2 인스턴스를 시작합니다. 연결된 Amazon EBS 볼륨에 파일을 저장합니다.` },
      { k: 'C', en: `Register the customer-owned block of IP addresses with Amazon Route 53. Create alias records in Route 53 that point to a Network Load Balancer (NLB). Launch EC2 instances hosting FTP services in an Auto Scaling group behind the NLB. Store the files in Amazon S3.`, ko: `고객 소유 IP 주소 블록을 Amazon Route 53에 등록합니다. Route 53에서 NLB를 가리키는 별칭 레코드를 생성합니다. NLB 뒤에 있는 Auto Scaling 그룹에서 FTP 서비스를 호스팅하는 EC2 인스턴스를 시작합니다. Amazon S3에 파일을 저장합니다.` },
      { k: 'D', en: `Register the customer-owned block of IP addresses in the company's AWS account. Create Elastic IP addresses from the address pool and assign them to an Amazon S3 VPC endpoint. Enable SFTP support on the S3 bucket.`, ko: `회사의 AWS 계정에 고객 소유 IP 주소 블록을 등록합니다. 주소 풀에서 탄력적 IP 주소를 생성하고 이를 Amazon S3 VPC 엔드포인트에 할당합니다. S3 버킷에서 SFTP 지원을 활성화합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — BYOIP + AWS Transfer Family(SFTP) + S3</span></p>
<p>AWS는 <strong>BYOIP(Bring Your Own IP)</strong>를 통해 고객 소유 IP 주소 블록을 AWS 계정에 등록하고 Elastic IP를 생성할 수 있습니다. 이 Elastic IP를 AWS Transfer Family(SFTP) 엔드포인트에 할당하면 기존 IP 주소를 유지하면서 마이그레이션 가능합니다.</p>
<p>AWS Transfer Family는 완전 관리형 SFTP 서비스로 S3에 파일을 직접 저장합니다. 운영 오버헤드가 최소화됩니다.</p>
<p><a href="https://aws.amazon.com/blogs/storage/use-ip-whitelisting-to-secure-your-aws-transfer-for-sftp-servers/" target="_blank">AWS 공식 블로그 - AWS Transfer SFTP IP 화이트리스팅</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — ALB에 Elastic IP를 직접 할당할 수 없습니다. ALB는 고정 IP를 지원하지 않습니다(NLB는 지원). 또한 EC2에서 FTP를 직접 운영하면 운영 오버헤드가 증가합니다.</p>
<p><span class="mark-no">❌ C</span> — Route 53은 IP 주소 블록 등록 서비스가 아닙니다(BYOIP는 AWS 계정 수준 기능). FTP(B, C)는 SFTP가 아니며 보안성이 낮습니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon S3는 SFTP 프로토콜을 직접 지원하지 않습니다. S3 VPC 엔드포인트에 Elastic IP를 할당하는 것도 불가능합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'BYOIP로 기존 IP 유지 + AWS Transfer Family(SFTP)로 완전 관리형 마이그레이션 + S3 저장. D는 S3 SFTP 미지원. B/C는 FTP(비보안) + EC2 운영 오버헤드. B는 ALB 고정 IP 불가.' }
    ]
  },
  {
    n: 250,
    en: `A company has a new application that needs to run on five Amazon EC2 instances in a single AWS Region. The application requires high-throughput, low-latency network connections between all of the EC2 instances where the application will run. There is no requirement for the application to be fault tolerant.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사에 단일 AWS 리전의 5개 Amazon EC2 인스턴스에서 실행해야 하는 새로운 애플리케이션이 있습니다. 애플리케이션에는 애플리케이션이 실행될 모든 EC2 인스턴스 간에 처리량이 높고 지연 시간이 짧은 네트워크 연결이 필요합니다. 애플리케이션이 내결함성이 있어야 한다는 요구 사항은 없습니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Launch five new EC2 instances into a cluster placement group. Ensure that the EC2 instance type supports enhanced networking.`, ko: `5개의 새로운 EC2 인스턴스를 클러스터 배치 그룹으로 시작합니다. EC2 인스턴스 유형이 향상된 네트워킹을 지원하는지 확인하세요.` },
      { k: 'B', en: `Launch five new EC2 instances into an Auto Scaling group in the same Availability Zone. Attach an extra elastic network interface to each EC2 instance.`, ko: `동일한 가용 영역에 있는 Auto Scaling 그룹에 5개의 새로운 EC2 인스턴스를 시작합니다. 각 EC2 인스턴스에 추가 탄력적 네트워크 인터페이스를 연결합니다.` },
      { k: 'C', en: `Launch five new EC2 instances into a partition placement group. Ensure that the EC2 instance type supports enhanced networking.`, ko: `5개의 새로운 EC2 인스턴스를 파티션 배치 그룹으로 시작합니다. EC2 인스턴스 유형이 향상된 네트워킹을 지원하는지 확인하세요.` },
      { k: 'D', en: `Launch five new EC2 instances into a spread placement group. Attach an extra elastic network interface to each EC2 instance.`, ko: `5개의 새로운 EC2 인스턴스를 분산 배치 그룹으로 시작합니다. 각 EC2 인스턴스에 추가 탄력적 네트워크 인터페이스를 연결합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — 클러스터 배치 그룹 + 향상된 네트워킹</span></p>
<p><strong>클러스터 배치 그룹(Cluster Placement Group)</strong>은 인스턴스를 단일 가용 영역 내의 동일한 물리적 랙 또는 인접한 랙에 배치하여 인스턴스 간 <strong>최저 지연 시간과 최고 네트워크 처리량</strong>을 제공합니다. HPC, 긴밀히 결합된 워크로드에 최적입니다.</p>
<p>내결함성이 불필요하다는 조건이 단일 AZ 클러스터 배치를 허용합니다. 향상된 네트워킹(Enhanced Networking)은 SR-IOV를 통해 더 높은 패킷 처리량과 낮은 지연 시간을 추가로 제공합니다.</p>
<p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html" target="_blank">AWS 공식 문서 - EC2 배치 그룹</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 추가 ENI를 연결해도 인스턴스 간 네트워크 처리량이나 지연 시간이 개선되지 않습니다. Auto Scaling 그룹은 배치를 보장하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 파티션 배치 그룹은 Hadoop, Kafka, Cassandra 같은 분산 워크로드에서 하드웨어 장애를 격리하기 위해 사용합니다. 인스턴스를 물리적으로 분리하므로 클러스터 배치보다 지연 시간이 높습니다.</p>
<p><span class="mark-no">❌ D</span> — 분산 배치 그룹(Spread)은 인스턴스를 서로 다른 랙에 배치하여 고가용성을 위한 것으로, 고처리량·저지연 네트워킹을 제공하지 않습니다. 또한 AZ당 최대 7개 인스턴스 제한이 있습니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: '클러스터 배치 그룹 = 고처리량 저지연(HPC 전용). 내결함성 불필요 → 단일 AZ 클러스터 사용 가능. 파티션(C)은 분산 워크로드용. 분산(D)은 고가용성용. ENI 추가(B/D)는 성능 향상 없음.' }
    ]
  },
];