window.QS_SET26 = [
  {
    n: 251,
    en: `A company is creating a REST API to share information with six of its partners based in the United States. The company has created an Amazon API Gateway Regional endpoint. Each of the six partners will access the API once per day to post daily sales figures.<br><br>After initial deployment, the company observes 1,000 requests per second originating from 500 different IP addresses around the world. The company believes this traffic is originating from a botnet and wants to secure its API while minimizing cost.<br><br>Which approach should the company take to secure its API?`,
    ko: `한 회사가 미국에 있는 6개 파트너와 정보를 공유하기 위해 REST API를 만들고 있습니다. 회사는 Amazon API Gateway 지역 엔드포인트를 생성했습니다. 6개 파트너는 각각 하루에 한 번씩 API에 액세스하여 일일 판매 수치를 게시합니다.<br><br>초기 배포 후 회사는 전 세계 500개의 서로 다른 IP 주소에서 발생하는 초당 1,000개의 요청을 관찰합니다. 회사는 이 트래픽이 봇넷에서 발생한다고 믿고 비용을 최소화하면서 API를 보호하기를 원합니다.<br><br>API를 보호하기 위해 회사는 어떤 접근 방식을 취해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an Amazon CloudFront distribution with the API as the origin. Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Configure CloudFront with an origin access identity (OAI) and associate it with the distribution. Configure API Gateway to ensure only the OAI can run the POST method.`, ko: `API를 원본으로 사용하여 Amazon CloudFront 배포를 생성합니다. 하루에 5개 이상의 요청을 제출하는 클라이언트를 차단하는 규칙을 사용하여 AWS WAF 웹 ACL을 생성합니다. 웹 ACL을 CloudFront 배포와 연결합니다. OAI로 CloudFront를 구성하고 배포와 연결합니다. OAI만 POST 메서드를 실행할 수 있도록 API 게이트웨이를 구성합니다.` },
      { k: 'B', en: `Create an Amazon CloudFront distribution with the API as the origin. Create an AWS WAF web ACL with a rule to block clients that submit more than five requests per day. Associate the web ACL with the CloudFront distribution. Add a custom header to the CloudFront distribution populated with an API key. Configure the API to require an API key on the POST method.`, ko: `API를 원본으로 사용하여 Amazon CloudFront 배포판을 생성합니다. 하루에 5개 이상의 요청을 제출하는 클라이언트를 차단하는 규칙을 사용하여 AWS WAF 웹 ACL을 생성합니다. 웹 ACL을 CloudFront 배포와 연결합니다. API 키로 채워진 CloudFront 배포에 사용자 지정 헤더를 추가합니다. POST 메서드에 API 키가 필요하도록 API를 구성합니다.` },
      { k: 'C', en: `Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a resource policy with a request limit and associate it with the API. Configure the API to require an API key on the POST method.`, ko: `6개 파트너가 사용하는 IP 주소에 대한 액세스를 허용하는 규칙을 사용하여 AWS WAF 웹 ACL을 생성합니다. 웹 ACL을 API와 연결합니다. 요청 제한이 있는 리소스 정책을 생성하고 이를 API와 연결합니다. POST 메서드에 API 키가 필요하도록 API를 구성합니다.` },
      { k: 'D', en: `Create an AWS WAF web ACL with a rule to allow access to the IP addresses used by the six partners. Associate the web ACL with the API. Create a usage plan with a request limit and associate it with the API. Create an API key and add it to the usage plan.`, ko: `6개 파트너가 사용하는 IP 주소에 대한 액세스를 허용하는 규칙을 사용하여 AWS WAF 웹 ACL을 생성합니다. 웹 ACL을 API와 연결합니다. 요청 제한이 있는 사용량 계획을 생성하고 이를 API와 연결합니다. API 키를 생성하여 사용량 계획에 추가하세요.` },
    ],
    answer: ['D'],
    vote: '94% D',
    explain: `<p><span class="mark-ok">✅ D — WAF IP 허용 + 사용량 계획 + API 키</span></p>
<p><strong>IP 필터링:</strong> 6개 파트너의 IP만 허용하는 WAF 웹 ACL로 봇넷 IP를 차단합니다. WAF를 API Gateway 리전 엔드포인트에 직접 연결할 수 있습니다.</p>
<p><strong>사용량 계획(Usage Plan):</strong> API Gateway 사용량 계획은 요청 속도 제한(throttle)과 일일/월간 할당량(quota)을 설정합니다. API 키를 사용량 계획에 연결하여 파트너별 접근을 제어합니다.</p>
<p>C와의 차이: API Gateway 리소스 정책은 요청 제한 기능을 직접 지원하지 않습니다. 사용량 계획이 속도 제한의 올바른 도구입니다.</p>
<p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-aws-waf.html" target="_blank">AWS 공식 문서 - API Gateway + WAF</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFront OAI는 S3 오리진에 사용하는 개념이며, API Gateway 오리진에는 적용되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — CloudFront를 통해 API Gateway를 프록시하면 추가 비용이 발생하고 불필요한 복잡성을 추가합니다. 또한 WAF에서 "하루 5개 이상 요청 차단" 규칙은 기본 제공 규칙이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — API Gateway 리소스 정책은 IP 기반 접근 제어에 사용할 수 있지만 <strong>요청 속도 제한 기능을 제공하지 않습니다.</strong> 속도 제한은 사용량 계획을 통해 설정합니다.</p>`,
    disc: [
      { ans: 'D (94%)', txt: 'WAF = 파트너 IP만 허용(봇넷 차단). 사용량 계획 = 요청 속도/할당량 제한. API 키 = 파트너 식별 및 접근 제어. C는 리소스 정책에 속도 제한 기능 없어 탈락.' }
    ]
  },
  {
    n: 252,
    en: `A company uses an Amazon Aurora PostgreSQL DB cluster for applications in a single AWS Region. The company's database team must monitor all data activity on all the databases.<br><br>Which solution will achieve this goal?`,
    ko: `회사는 단일 AWS 리전의 애플리케이션에 Amazon Aurora PostgreSQL DB 클러스터를 사용합니다. 회사의 데이터베이스 팀은 모든 데이터베이스의 모든 데이터 활동을 모니터링해야 합니다.<br><br>이 목표를 달성할 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Set up an AWS Database Migration Service (AWS DMS) change data capture (CDC) task. Specify the Aurora DB cluster as the source. Specify Amazon Kinesis Data Firehose as the target. Use Kinesis Data Firehose to upload the data into an Amazon OpenSearch Service cluster for further analysis.`, ko: `AWS DMS CDC 작업을 설정합니다. Aurora DB 클러스터를 소스로 지정합니다. Amazon Kinesis Data Firehose를 대상으로 지정합니다. 추가 분석을 위해 Kinesis Data Firehose를 사용하여 Amazon OpenSearch Service 클러스터에 데이터를 업로드합니다.` },
      { k: 'B', en: `Start a database activity stream on the Aurora DB cluster to capture the activity stream in Amazon EventBridge. Define an AWS Lambda function as a target for EventBridge. Program the Lambda function to decrypt the messages from EventBridge and to publish all database activity to Amazon S3 for further analysis.`, ko: `Amazon EventBridge에서 활동 스트림을 캡처하려면 Aurora DB 클러스터에서 데이터베이스 활동 스트림을 시작하십시오. EventBridge의 대상으로 AWS Lambda 함수를 정의합니다. EventBridge의 메시지를 해독하고 추가 분석을 위해 모든 데이터베이스 활동을 Amazon S3에 게시하도록 Lambda 함수를 프로그래밍합니다.` },
      { k: 'C', en: `Start a database activity stream on the Aurora DB cluster to push the activity stream to an Amazon Kinesis data stream. Configure Amazon Kinesis Data Firehose to consume the Kinesis data stream and to deliver the data to Amazon S3 for further analysis.`, ko: `Aurora DB 클러스터에서 데이터베이스 활동 스트림을 시작하여 활동 스트림을 Amazon Kinesis 데이터 스트림으로 푸시합니다. Kinesis 데이터 스트림을 사용하고 추가 분석을 위해 Amazon S3에 데이터를 전송하도록 Amazon Kinesis Data Firehose를 구성합니다.` },
      { k: 'D', en: `Set up an AWS Database Migration Service (AWS DMS) change data capture (CDC) task. Specify the Aurora DB cluster as the source. Specify Amazon Kinesis Data Firehose as the target. Use Kinesis Data Firehose to upload the data into an Amazon Redshift cluster. Run queries on the Amazon Redshift data to determine database activities on the Aurora database.`, ko: `AWS DMS CDC 작업을 설정합니다. Aurora DB 클러스터를 소스로 지정합니다. Amazon Kinesis Data Firehose를 대상으로 지정합니다. Kinesis Data Firehose를 사용하여 Amazon Redshift 클러스터에 데이터를 업로드합니다. Amazon Redshift 데이터에 대한 쿼리를 실행하여 Aurora 데이터베이스의 데이터베이스 활동을 확인합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — Aurora 데이터베이스 활동 스트림 → Kinesis Data Streams → Firehose → S3</span></p>
<p>Aurora <strong>데이터베이스 활동 스트림(Database Activity Streams)</strong>은 Aurora에서 발생하는 모든 데이터베이스 작업(SQL 쿼리, DML, DDL 등)을 실시간으로 스트리밍하는 기능입니다. 활동 스트림은 Amazon Kinesis 데이터 스트림으로 직접 전송되도록 구성됩니다.</p>
<p>Kinesis Data Firehose가 Kinesis 데이터 스트림을 소비하여 S3로 전달하면 추가 분석을 위한 데이터가 저장됩니다. AWS 공식 문서에서 이 패턴을 권장합니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/DBActivityStreams.Monitoring.html" target="_blank">AWS 공식 문서 - Aurora 데이터베이스 활동 스트림 모니터링</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, D</span> — AWS DMS CDC는 데이터 변경사항을 복제하는 도구로 데이터베이스 사용자 활동(누가 무슨 쿼리를 실행했는지) 전체를 감사하는 데는 부적합합니다.</p>
<p><span class="mark-no">❌ B</span> — Aurora 데이터베이스 활동 스트림은 EventBridge가 아닌 <strong>Kinesis 데이터 스트림</strong>으로 직접 전달됩니다. EventBridge 통합은 지원되지 않습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'Aurora 데이터베이스 활동 스트림은 Kinesis 데이터 스트림으로만 전송 가능(EventBridge 미지원). Kinesis → Firehose → S3가 AWS 공식 아키텍처. DMS CDC는 데이터 복제 도구로 감사 활동 스트림에 부적합.' }
    ]
  },
  {
    n: 253,
    en: `An entertainment company recently launched a new game. To ensure a good experience for players during the launch period, the company deployed a static quantity of 12 r6g.16xlarge (memory optimized) Amazon EC2 instances behind a Network Load Balancer. The company's operations team used the Amazon CloudWatch agent and a custom metric to include memory utilization in its monitoring strategy.<br><br>Analysis of the CloudWatch metrics from the launch period showed consumption at about one quarter of the CPU and memory that the company expected. Initial demand for the game has subsided and has become more variable. The company decides to use an Auto Scaling group that monitors the CPU and memory consumption to dynamically scale the instance fleet. A solutions architect needs to configure the Auto Scaling group to meet demand in the most cost-effective way.<br><br>Which solution will meet these requirements?`,
    ko: `최근 한 엔터테인먼트 회사에서 새로운 게임을 출시했습니다. 회사는 출시 기간 동안 Network Load Balancer 뒤에 12개의 r6g.16xlarge(메모리 최적화) Amazon EC2 인스턴스를 정적으로 배포했습니다. 회사는 CloudWatch 에이전트와 사용자 지정 지표를 사용하여 메모리 사용률을 포함시켰습니다.<br><br>분석 결과 예상 CPU 및 메모리의 약 4분의 1 정도의 소비가 나타났습니다. 수요가 줄어들고 변동성이 더욱 커졌습니다. 회사는 CPU 및 메모리 소비를 모니터링하는 Auto Scaling 그룹을 사용하기로 결정했습니다. 가장 비용 효율적인 방법으로 수요를 충족하도록 Auto Scaling 그룹을 구성해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Configure the Auto Scaling group to deploy c6g.4xlarge (compute optimized) instances. Configure a minimum capacity of 3, a desired capacity of 3, and a maximum capacity of 12.`, ko: `c6g.4xlarge(컴퓨팅 최적화) 인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 최소 용량 3, 원하는 용량 3, 최대 용량 12를 구성합니다.` },
      { k: 'B', en: `Configure the Auto Scaling group to deploy m6g.4xlarge (general purpose) instances. Configure a minimum capacity of 3, a desired capacity of 3, and a maximum capacity of 12.`, ko: `m6g.4xlarge(범용) 인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 최소 용량 3, 원하는 용량 3, 최대 용량 12를 구성합니다.` },
      { k: 'C', en: `Configure the Auto Scaling group to deploy r6g.4xlarge (memory optimized) instances. Configure a minimum capacity of 3, a desired capacity of 3, and a maximum capacity of 12.`, ko: `r6g.4xlarge(메모리 최적화) 인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 최소 용량 3, 원하는 용량 3, 최대 용량 12를 구성합니다.` },
      { k: 'D', en: `Configure the Auto Scaling group to deploy r6g.8xlarge (memory optimized) instances. Configure a minimum capacity of 2, a desired capacity of 2, and a maximum capacity of 6.`, ko: `r6g.8xlarge(메모리 최적화) 인스턴스를 배포하도록 Auto Scaling 그룹을 구성합니다. 최소 용량 2, 원하는 용량 2, 최대 용량 6을 구성합니다.` },
    ],
    answer: ['C'],
    vote: '95% C',
    explain: `<p><span class="mark-ok">✅ C — r6g.4xlarge, 최소 3 / 원하는 3 / 최대 12</span></p>
<p>실측 소비량이 예상의 1/4이었으므로, 인스턴스 크기도 1/4로 줄이는 것이 비용 최적화의 핵심입니다. r6g.16xlarge의 1/4이 r6g.4xlarge입니다(16xlarge = 64vCPU/512GiB, 4xlarge = 16vCPU/128GiB).</p>
<p>동일한 피크 용량(12 × 1/4 = 3대로 동일 성능)을 유지하면서, 비피크 시간에는 3대만 운영하여 비용을 절감합니다.</p>
<p>D(r6g.8xlarge, 최소 2)와 비용 비교: 피크 시 C는 12 × $0.8064 = $9.68/h, D는 6 × $1.6128 = $9.68/h로 동일하지만, 비피크 시 C는 3 × $0.8064 = $2.42/h로 D(2 × $1.6128 = $3.23/h)보다 저렴합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 컴퓨팅 최적화(c6g) 인스턴스는 CPU 집약적 워크로드에 적합합니다. 이 게임은 메모리 최적화 인스턴스(r6g)를 사용하고 있어 메모리 집약적 특성이 있습니다. 인스턴스 패밀리를 변경하는 것은 위험할 수 있습니다.</p>
<p><span class="mark-no">❌ B</span> — 범용(m6g) 인스턴스는 메모리 최적화(r6g)보다 메모리가 적어 게임의 메모리 요구 사항을 충족하지 못할 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — 비피크 시간에 최소 인스턴스 비용이 C보다 높아 비용 효율성이 낮습니다.</p>`,
    disc: [
      { ans: 'C (95%)', txt: '1/4 사용량 → 1/4 크기 인스턴스(r6g.16xlarge → r6g.4xlarge). 최소 3대 비용: C $2.42/h < D $3.23/h. 피크 시 동일 성능, 비피크 시 C가 저렴. 인스턴스 패밀리(r6g 유지)가 중요.' }
    ]
  },
  {
    n: 254,
    en: `A financial services company loaded millions of historical stock trades into an Amazon DynamoDB table. The table uses on-demand capacity mode. Once each day at midnight, a few million new records are loaded into the table. Application read activity against the table happens in bursts throughout the day, and a limited set of keys are repeatedly looked up. The company needs to reduce costs associated with DynamoDB.<br><br>Which strategy should a solutions architect recommend to meet this requirement?`,
    ko: `금융 서비스 회사는 수백만 건의 과거 주식 거래를 Amazon DynamoDB 테이블에 로드했습니다. 테이블은 주문형 용량 모드를 사용합니다. 매일 자정에 한 번씩 수백만 개의 새로운 레코드가 테이블에 로드됩니다. 테이블에 대한 애플리케이션 읽기 활동은 하루 종일 폭발적으로 발생합니다. 제한된 키 세트가 반복적으로 조회됩니다. 회사는 DynamoDB와 관련된 비용을 절감해야 합니다.<br><br>이 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 전략을 권장해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy an Amazon ElastiCache cluster in front of the DynamoDB table.`, ko: `DynamoDB 테이블 앞에 Amazon ElastiCache 클러스터 배포.` },
      { k: 'B', en: `Deploy DynamoDB Accelerator (DAX). Configure DynamoDB auto scaling. Purchase Savings Plans in Cost Explorer.`, ko: `DynamoDB Accelerator(DAX)를 배포합니다. DynamoDB Auto Scaling을 구성합니다. Cost Explorer에서 Savings Plan을 구매하세요.` },
      { k: 'C', en: `Use provisioned capacity mode. Purchase Savings Plans in Cost Explorer.`, ko: `프로비저닝된 용량 모드를 사용합니다. Cost Explorer에서 Savings Plan을 구매하세요.` },
      { k: 'D', en: `Deploy DynamoDB Accelerator (DAX). Use provisioned capacity mode. Configure DynamoDB auto scaling.`, ko: `DynamoDB Accelerator(DAX)를 배포합니다. 프로비저닝된 용량 모드를 사용합니다. DynamoDB Auto Scaling을 구성합니다.` },
    ],
    answer: ['D'],
    vote: '83% D',
    explain: `<p><span class="mark-ok">✅ D — DAX + 프로비저닝 용량 모드 + Auto Scaling</span></p>
<p><strong>DAX:</strong> "제한된 키 세트가 반복적으로 조회"된다는 것은 읽기 캐싱의 최적 사례입니다. DAX는 DynamoDB 읽기 요청을 캐싱하여 읽기 RCU 소비를 크게 줄입니다.</p>
<p><strong>프로비저닝 용량 + Auto Scaling:</strong> 일일 자정 쓰기 배치(예측 가능한 피크)와 하루 종일 버스트 읽기가 있어 프로비저닝 용량 모드가 온디맨드보다 비용 효율적입니다. Auto Scaling이 실제 사용량에 맞게 용량을 자동 조정합니다.</p>
<p>B와 D의 차이: Savings Plan은 DynamoDB에 적용되지 않습니다(EC2, Fargate, Lambda 전용).</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ElastiCache는 DynamoDB와 별도 클라이언트 코드 수정이 필요합니다. DAX는 DynamoDB 호환 API를 제공하여 최소한의 코드 변경으로 사용할 수 있어 더 적합합니다.</p>
<p><span class="mark-no">❌ B</span> — Savings Plan은 <strong>DynamoDB에 적용되지 않습니다.</strong> EC2, Fargate, Lambda 비용만 절감합니다.</p>
<p><span class="mark-no">❌ C</span> — 프로비저닝 용량 + Savings Plan은 DynamoDB Savings Plan이 존재하지 않으므로 잘못된 접근입니다. 또한 반복 조회의 캐싱 이점을 놓칩니다.</p>`,
    disc: [
      { ans: 'D (83%)', txt: '반복 조회 → DAX로 RCU 절감. 예측 가능한 패턴 → 프로비저닝 모드(온디맨드보다 저렴). Auto Scaling으로 용량 최적화. Savings Plan은 DynamoDB 미적용이라 B/C 탈락.' }
    ]
  },
  {
    n: 255,
    en: `A company is creating a centralized logging service running on Amazon EC2 that will receive and analyze logs from hundreds of AWS accounts. AWS PrivateLink is being used to provide connectivity between the client services and the logging service.<br><br>In each AWS account with a client, an interface endpoint has been created for the logging service and is available. The logging service running on EC2 instances with a Network Load Balancer (NLB) are deployed in different subnets. The clients are unable to submit logs using the VPC endpoint.<br><br>Which combination of steps should a solutions architect take to resolve this issue? (Choose two.)`,
    ko: `회사는 수백 개의 AWS 계정에서 로그를 수신하고 분석하는 Amazon EC2에서 실행되는 중앙 집중식 로깅 서비스를 만들고 있습니다. AWS PrivateLink는 클라이언트 서비스와 로깅 서비스 간의 연결을 제공하는 데 사용됩니다.<br><br>클라이언트가 있는 각 AWS 계정에는 로깅 서비스를 위한 인터페이스 엔드포인트가 생성되어 사용할 수 있습니다. NLB를 사용하여 EC2 인스턴스에서 실행되는 로깅 서비스는 다른 서브넷에 배포됩니다. 클라이언트는 VPC 엔드포인트를 사용하여 로그를 제출할 수 없습니다.<br><br>이 문제를 해결하기 위해 솔루션 아키텍트가 수행해야 하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Check that the NACL is attached to the logging service subnet to allow communications to and from the NLB subnets. Check that the NACL is attached to the NLB subnet to allow communications to and from the logging service subnets running on EC2 instances.`, ko: `NLB 서브넷과의 통신을 허용하려면 NACL이 로깅 서비스 서브넷에 연결되어 있는지 확인하십시오. EC2 인스턴스에서 실행되는 로깅 서비스 서브넷과의 통신을 허용하려면 NACL이 NLB 서브넷에 연결되어 있는지 확인하십시오.` },
      { k: 'B', en: `Check that the NACL is attached to the logging service subnets to allow communications to and from the interface endpoint subnets. Check that the NACL is attached to the interface endpoint subnet to allow communications to and from the logging service subnets running on EC2 instances.`, ko: `NACL이 로깅 서비스 서브넷에 연결되어 인터페이스 엔드포인트 서브넷과의 통신을 허용하는지 확인합니다. EC2 인스턴스에서 실행되는 로깅 서비스 서브넷과의 통신을 허용하려면 인터페이스 엔드포인트 서브넷에 NACL이 연결되어 있는지 확인하세요.` },
      { k: 'C', en: `Check the security group for the logging service running on the EC2 instances to ensure it allows ingress from the NLB subnets.`, ko: `EC2 인스턴스에서 실행 중인 로깅 서비스에 대한 보안 그룹을 확인하여 NLB 서브넷으로부터의 수신을 허용하는지 확인합니다.` },
      { k: 'D', en: `Check the security group for the logging service running on EC2 instances to ensure it allows ingress from the clients.`, ko: `EC2 인스턴스에서 실행되는 로깅 서비스의 보안 그룹을 확인하여 클라이언트로부터의 수신을 허용하는지 확인하세요.` },
      { k: 'E', en: `Check the security group for the NLB to ensure it allows ingress from the interface endpoint subnets.`, ko: `NLB의 보안 그룹을 확인하여 인터페이스 엔드포인트 서브넷으로부터의 수신을 허용하는지 확인하십시오.` },
    ],
    answer: ['A', 'C'],
    vote: 'AC (63%) BD (24%) 논란',
    explain: `<p><span class="mark-ok">✅ A — NACL: NLB 서브넷 ↔ 로깅 서비스(EC2) 서브넷 간 통신 허용</span></p>
<p>PrivateLink 엔드포인트 서비스에서 클라이언트 요청은 NLB 노드를 통해 EC2 로깅 인스턴스로 전달됩니다. 이때 EC2 인스턴스로 전달되는 트래픽의 <strong>소스 IP는 클라이언트 IP가 아닌 NLB 노드의 프라이빗 IP</strong>입니다. 따라서 EC2 서브넷의 NACL과 NLB 서브넷의 NACL이 서로 간 통신을 허용해야 합니다.</p>
<p><span class="mark-ok">✅ C — EC2 보안 그룹: NLB 서브넷에서의 수신 허용</span></p>
<p>같은 이유로 EC2 인스턴스의 보안 그룹도 NLB 노드의 IP(NLB 서브넷 CIDR)에서의 인바운드를 허용해야 합니다.</p>
<p><a href="https://repost.aws/knowledge-center/security-network-acl-vpc-endpoint" target="_blank">AWS Knowledge Center - VPC 엔드포인트 보안 설정</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — PrivateLink를 통한 트래픽은 인터페이스 엔드포인트 서브넷에서 NLB로 전달됩니다. 그러나 실제로 EC2에 도달하는 트래픽의 소스는 NLB입니다. 인터페이스 엔드포인트 서브넷과 EC2 서브넷 간 직접 NACL 규칙보다 NLB와 EC2 서브넷 간 NACL이 더 중요합니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 보안 그룹이 클라이언트 IP를 직접 허용할 필요가 없습니다. PrivateLink 아키텍처에서 EC2 관점에서의 소스는 클라이언트가 아닌 NLB입니다.</p>
<p><span class="mark-no">❌ E</span> — NLB는 현재 보안 그룹을 지원하지 않았으나(2023년 8월부터 지원 추가), 기본 NLB 설계는 EC2 소스 IP를 NLB 노드 IP로 변환하므로 C가 더 직접적인 해결책입니다.</p>`,
    disc: [
      { ans: 'AC (63%) vs BD (24%)', txt: 'PrivateLink에서 EC2가 받는 소스 IP = NLB 노드 IP(클라이언트 IP 아님). 따라서 NACL(A)과 SG(C) 모두 NLB 서브넷 기준으로 설정. AWS 공식 Knowledge Center에서 AC 패턴 확인.' }
    ]
  },
  {
    n: 256,
    en: `A company has millions of objects in an Amazon S3 bucket. The objects are in the S3 Standard storage class. All the S3 objects are accessed frequently. The number of users and applications that access the objects is increasing rapidly. The objects are encrypted with server-side encryption with AWS KMS keys (SSE-KMS).<br><br>A solutions architect reviews the company's monthly AWS invoice and notices that AWS KMS costs are increasing because of the high number of requests from Amazon S3. The solutions architect needs to optimize costs with minimal changes to the application.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사의 Amazon S3 버킷에 수백만 개의 객체가 있습니다. 객체는 S3 Standard 스토리지 클래스에 있으며 모두 자주 액세스됩니다. 객체는 AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화로 암호화됩니다.<br><br>솔루션 아키텍트는 월별 AWS 송장을 검토한 후 Amazon S3의 요청 수가 많아 AWS KMS 비용이 증가하고 있음을 확인했습니다. 애플리케이션 변경을 최소화하면서 비용을 최적화해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a new S3 bucket that has server-side encryption with customer-provided keys (SSE-C) as the encryption type. Copy the existing objects to the new S3 bucket. Specify SSE-C.`, ko: `고객 제공 키(SSE-C)를 암호화 유형으로 사용하여 서버 측 암호화를 사용하는 새 S3 버킷을 생성합니다. 기존 객체를 새 S3 버킷에 복사합니다. SSE-C를 지정합니다.` },
      { k: 'B', en: `Create a new S3 bucket that has server-side encryption with Amazon S3 managed keys (SSE-S3) as the encryption type. Use S3 Batch Operations to copy the existing objects to the new S3 bucket. Specify SSE-S3.`, ko: `Amazon S3 관리형 키(SSE-S3)를 암호화 유형으로 사용하여 서버 측 암호화를 사용하는 새 S3 버킷을 생성합니다. S3 배치 작업을 사용하여 기존 객체를 새 S3 버킷에 복사합니다. SSE-S3을 지정합니다.` },
      { k: 'C', en: `Use AWS CloudHSM to store the encryption keys. Create a new S3 bucket. Use S3 Batch Operations to copy the existing objects to the new S3 bucket. Encrypt the objects by using the keys from CloudHSM.`, ko: `AWS CloudHSM을 사용하여 암호화 키를 저장합니다. 새 S3 버킷을 생성합니다. S3 배치 작업을 사용하여 기존 객체를 새 S3 버킷에 복사합니다. CloudHSM의 키를 사용하여 객체를 암호화합니다.` },
      { k: 'D', en: `Use the S3 Intelligent-Tiering storage class for the S3 bucket. Create an S3 Intelligent-Tiering archive configuration to transition objects that are not accessed for 90 days to S3 Glacier Deep Archive.`, ko: `S3 버킷에는 S3 Intelligent-Tiering 스토리지 클래스를 사용하십시오. 90일 동안 액세스하지 않은 객체를 S3 Glacier Deep Archive로 전환하려면 S3 Intelligent-Tiering 아카이브 구성을 생성하세요.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — SSE-S3로 전환 + S3 Batch Operations</span></p>
<p>KMS 비용 증가의 원인은 S3 객체 읽기마다 KMS API 호출이 발생하기 때문입니다. <strong>SSE-S3</strong>는 S3가 자체적으로 키를 관리하는 방식으로 KMS API 호출이 없어 추가 비용이 발생하지 않습니다.</p>
<p>S3 Batch Operations으로 기존 수백만 객체를 새 버킷으로 SSE-S3 암호화로 일괄 복사하여 운영 오버헤드를 최소화합니다. 애플리케이션은 동일한 S3 API를 사용하므로 코드 변경이 거의 없습니다.</p>
<p>참고: 이상적으로는 S3 버킷 키(Bucket Keys)를 사용하는 것이 더 나은 해결책이지만 이 선택지에는 없습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SSE-C는 고객이 직접 키를 관리해야 하며, 모든 요청 시 키를 전달해야 하므로 애플리케이션 변경이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — CloudHSM은 높은 비용의 전용 HSM 서비스로 S3와 직접 통합되지 않습니다. 운영 오버헤드가 매우 높습니다.</p>
<p><span class="mark-no">❌ D</span> — 스토리지 티어링은 KMS 비용 문제를 해결하지 못합니다. 모든 객체가 자주 액세스되므로 Intelligent-Tiering의 이점도 없습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'SSE-KMS → SSE-S3로 전환하면 KMS API 호출 제거(요청당 비용 없음). S3 Batch Operations으로 수백만 객체 일괄 복사. S3 버킷 키가 더 나은 해결책이나 선택지에 없어 B가 정답.' }
    ]
  },
  {
    n: 257,
    en: `A media storage application uploads user photos to Amazon S3 for processing by AWS Lambda functions. Application state is stored in Amazon DynamoDB tables. Users are reporting that some uploaded photos are not being processed properly. The application developers trace the logs and find that Lambda is experiencing photo processing issues when thousands of users upload photos simultaneously. The issues are the result of Lambda concurrency limits and the performance of DynamoDB when data is saved.<br><br>Which combination of actions should a solutions architect take to increase the performance and reliability of the application? (Choose two.)`,
    ko: `미디어 스토리지 애플리케이션은 AWS Lambda 함수에서 처리할 수 있도록 사용자 사진을 Amazon S3에 업로드합니다. 애플리케이션 상태는 Amazon DynamoDB 테이블에 저장됩니다. 업로드된 일부 사진이 제대로 처리되지 않는다는 사용자들의 신고가 접수되었습니다. 개발자는 수천 명이 동시에 업로드할 때 Lambda 동시성 제한과 데이터 저장 시 DynamoDB의 성능 문제가 발생하고 있음을 발견했습니다.<br><br>애플리케이션의 성능과 안정성을 높이기 위해 솔루션 아키텍트가 수행해야 하는 조치 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Evaluate and adjust the RCUs for the DynamoDB tables.`, ko: `DynamoDB 테이블의 RCU를 평가하고 조정합니다.` },
      { k: 'B', en: `Evaluate and adjust the WCUs for the DynamoDB tables.`, ko: `DynamoDB 테이블의 WCU를 평가하고 조정합니다.` },
      { k: 'C', en: `Add an Amazon ElastiCache layer to increase the performance of Lambda functions.`, ko: `Amazon ElastiCache 계층을 추가하여 Lambda 함수의 성능을 높입니다.` },
      { k: 'D', en: `Add an Amazon Simple Queue Service (Amazon SQS) queue and reprocessing logic between Amazon S3 and the Lambda functions.`, ko: `Amazon S3와 Lambda 함수 사이에 Amazon SQS 대기열 및 재처리 로직을 추가합니다.` },
      { k: 'E', en: `Use S3 Transfer Acceleration to provide lower latency to users.`, ko: `S3 Transfer Acceleration을 사용하여 사용자에게 더 짧은 지연 시간을 제공합니다.` },
    ],
    answer: ['B', 'D'],
    vote: '100% BD',
    explain: `<p><span class="mark-ok">✅ B — DynamoDB WCU 조정 (쓰기 성능)</span></p>
<p>"데이터 저장 시 DynamoDB 성능"이 문제이므로 이는 쓰기(Write) 성능 이슈입니다. WCU(Write Capacity Units)를 평가하고 증가시키면 자정 배치 로딩과 사진 처리 상태 저장의 성능이 향상됩니다.</p>
<p><span class="mark-ok">✅ D — S3와 Lambda 사이에 SQS 대기열 추가</span></p>
<p>SQS를 S3 이벤트와 Lambda 함수 사이에 삽입하면, 수천 개의 동시 업로드가 들어와도 SQS 버퍼가 메시지를 보관하고 Lambda가 처리 가능한 속도로 메시지를 가져갑니다. Lambda 동시성 제한으로 인한 처리 실패를 방지하고, 재처리 로직으로 누락 없이 모든 사진을 처리합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — RCU는 읽기 용량입니다. 문제는 데이터 저장(쓰기) 시 성능이므로 WCU를 조정해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — ElastiCache는 읽기 캐싱에 적합합니다. Lambda 동시성 제한과 DynamoDB 쓰기 성능 문제와는 무관합니다.</p>
<p><span class="mark-no">❌ E</span> — S3 Transfer Acceleration은 업로드 지연 시간을 줄이지만 Lambda 동시성 제한이나 DynamoDB 쓰기 성능 문제를 해결하지 않습니다.</p>`,
    disc: [
      { ans: 'BD (100%)', txt: 'Lambda 동시성 문제 → SQS로 버퍼링 및 재처리(D). DynamoDB 저장 성능 → 쓰기(WCU) 조정(B). A는 읽기(RCU) 오답. C는 읽기 캐싱으로 무관. E는 업로드 지연 개선으로 무관.' }
    ]
  },
  {
    n: 258,
    en: `A company runs an application in an on-premises data center. The application gives users the ability to upload media files. The files persist in a file server. The web application has many users. The application server is overutilized, which causes data uploads to fail occasionally. The company frequently adds new storage to the file server. The company wants to resolve these challenges by migrating the application to AWS.<br><br>Users from across the United States and Canada access the application. Only authenticated users should have the ability to access the application to upload files. The company will consider a solution that refactors the application, and the company needs to accelerate application development.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사는 온프레미스 데이터 센터에서 애플리케이션을 실행합니다. 이 애플리케이션은 사용자에게 미디어 파일을 업로드할 수 있는 기능을 제공합니다. 파일은 파일 서버에 유지됩니다. 웹 애플리케이션에는 많은 사용자가 있습니다. 애플리케이션 서버가 과도하게 사용되어 가끔 데이터 업로드가 실패합니다. 회사에서는 파일 서버에 새로운 스토리지를 자주 추가합니다.<br><br>미국과 캐나다 전역의 사용자가 애플리케이션에 액세스합니다. 인증된 사용자만 파일을 업로드할 수 있어야 합니다. 회사는 애플리케이션을 리팩터링하는 솔루션을 고려하며 개발을 가속화해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS Application Migration Service to migrate the application server to Amazon EC2 instances. Create an Auto Scaling group for the EC2 instances. Use an Application Load Balancer to distribute the requests. Modify the application to use Amazon S3 to persist the files. Use Amazon Cognito to authenticate users.`, ko: `AWS Application Migration Service를 사용하여 애플리케이션 서버를 Amazon EC2 인스턴스로 마이그레이션합니다. EC2 인스턴스에 대한 Auto Scaling 그룹을 생성합니다. Application Load Balancer를 사용하여 요청을 분산합니다. Amazon S3를 사용하여 파일을 유지하도록 애플리케이션을 수정합니다. Amazon Cognito를 사용하여 사용자를 인증합니다.` },
      { k: 'B', en: `Use AWS Application Migration Service to migrate the application server to Amazon EC2 instances. Create an Auto Scaling group for the EC2 instances. Use an Application Load Balancer to distribute the requests. Set up AWS IAM Identity Center (AWS Single Sign-On) to give users the ability to sign in to the application. Modify the application to use Amazon S3 to persist the files.`, ko: `AWS Application Migration Service를 사용하여 애플리케이션 서버를 Amazon EC2 인스턴스로 마이그레이션합니다. EC2 인스턴스에 대한 Auto Scaling 그룹을 생성합니다. Application Load Balancer를 사용하여 요청을 분산합니다. AWS IAM Identity Center를 설정합니다. Amazon S3를 사용하여 파일을 유지하도록 애플리케이션을 수정합니다.` },
      { k: 'C', en: `Create a static website for uploads of media files. Store the static assets in Amazon S3. Use AWS AppSync to create an API. Use AWS Lambda resolvers to upload the media files to Amazon S3. Use Amazon Cognito to authenticate users.`, ko: `미디어 파일 업로드를 위한 정적 웹사이트를 만듭니다. Amazon S3에 정적 자산을 저장합니다. AWS AppSync를 사용하여 API를 생성합니다. AWS Lambda 해석기를 사용하여 미디어 파일을 Amazon S3에 업로드합니다. Amazon Cognito를 사용하여 사용자를 인증합니다.` },
      { k: 'D', en: `Use AWS Amplify to create a static website for uploads of media files. Use Amplify Hosting to serve the website through Amazon CloudFront. Use Amazon S3 to store the uploaded media files. Use Amazon Cognito to authenticate users.`, ko: `AWS Amplify를 사용하여 미디어 파일 업로드를 위한 정적 웹사이트를 생성합니다. Amplify Hosting을 사용하여 Amazon CloudFront를 통해 웹 사이트를 제공하십시오. Amazon S3를 사용하여 업로드된 미디어 파일을 저장합니다. Amazon Cognito를 사용하여 사용자를 인증합니다.` },
    ],
    answer: ['D'],
    vote: '89% D',
    explain: `<p><span class="mark-ok">✅ D — AWS Amplify + CloudFront + S3 + Cognito</span></p>
<p><strong>개발 가속화:</strong> AWS Amplify는 풀 스택 애플리케이션 개발을 위한 개발 플랫폼으로, S3, Cognito, CloudFront 등 AWS 서비스와의 통합을 자동화합니다. 애플리케이션 개발 가속화라는 요구 사항에 가장 적합합니다.</p>
<p><strong>운영 오버헤드 최소화:</strong> 서버리스 아키텍처로 EC2 인스턴스 관리가 없습니다. Amplify Hosting은 CloudFront를 통해 미국·캐나다 사용자에게 짧은 지연 시간을 제공합니다. Cognito로 인증을 처리합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — EC2 기반 마이그레이션은 "리팩터링" 보다 "리호스팅"에 가깝습니다. 개발 가속화 요건을 충족하지 못합니다. 서버 관리 운영 오버헤드가 발생합니다.</p>
<p><span class="mark-no">❌ C</span> — AppSync는 GraphQL API 서비스입니다. 간단한 파일 업로드 애플리케이션에 AppSync를 추가하는 것은 불필요하게 복잡합니다. Amplify(D)가 더 통합적이고 간편합니다.</p>`,
    disc: [
      { ans: 'D (89%)', txt: '"개발 가속화" 키워드 → AWS Amplify. Amplify는 S3, Cognito, CloudFront 통합을 자동화하여 최소 코드로 완전한 서버리스 앱 구축. A/B는 EC2 관리 오버헤드, C는 AppSync가 불필요하게 복잡.' }
    ]
  },
  {
    n: 259,
    en: `A company has an application that is deployed on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are part of an Auto Scaling group. The application has unpredictable workloads and frequently scales out and in. The company's development team wants to analyze application logs to find ways to improve the application's performance. However, the logs are no longer available after instances scale in.<br><br>Which solution will give the development team the ability to view the application logs after a scale-in event?`,
    ko: `회사에는 ALB 뒤의 Amazon EC2 인스턴스에 배포된 애플리케이션이 있습니다. 인스턴스는 Auto Scaling 그룹의 일부입니다. 애플리케이션에는 예측할 수 없는 워크로드가 있고 확장 및 축소가 자주 발생합니다. 개발 팀은 애플리케이션 로그를 분석하여 성능을 향상시킬 수 있는 방법을 찾으려고 합니다. 그러나 인스턴스 축소 후에는 더 이상 로그를 사용할 수 없습니다.<br><br>축소 이벤트 후 개발 팀이 애플리케이션 로그를 볼 수 있는 기능을 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Enable access logs for the ALB. Store the logs in an Amazon S3 bucket.`, ko: `ALB에 대한 액세스 로그를 활성화합니다. Amazon S3 버킷에 로그를 저장합니다.` },
      { k: 'B', en: `Configure the EC2 instances to publish logs to Amazon CloudWatch Logs by using the unified CloudWatch agent.`, ko: `통합 CloudWatch 에이전트를 사용하여 Amazon CloudWatch Logs에 로그를 게시하도록 EC2 인스턴스를 구성합니다.` },
      { k: 'C', en: `Modify the Auto Scaling group to use a step scaling policy.`, ko: `단계 조정 정책을 사용하도록 Auto Scaling 그룹을 수정합니다.` },
      { k: 'D', en: `Instrument the application with AWS X-Ray tracing.`, ko: `AWS X-Ray 추적을 사용하여 애플리케이션을 계측합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — CloudWatch 에이전트로 로그를 CloudWatch Logs에 실시간 게시</span></p>
<p>EC2 인스턴스에 <strong>통합 CloudWatch 에이전트</strong>를 설치하면 애플리케이션 로그가 인스턴스 로컬 스토리지가 아닌 Amazon CloudWatch Logs 로그 그룹으로 실시간 스트리밍됩니다. 인스턴스가 축소(종료)되더라도 CloudWatch Logs에 로그가 영구 보존되어 개발팀이 언제든지 분석할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html" target="_blank">AWS 공식 문서 - CloudWatch 에이전트 설치</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ALB 액세스 로그는 로드 밸런서로 들어오는 요청(IP, URL, 상태 코드 등)을 기록합니다. <strong>애플리케이션 내부 로그는 포함되지 않습니다.</strong></p>
<p><span class="mark-no">❌ C</span> — 단계 조정 정책은 스케일링 동작 방식을 변경하지만 로그가 사라지는 문제를 해결하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS X-Ray는 요청 추적(분산 추적)을 위한 서비스로 애플리케이션의 출력 로그를 저장하지 않습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'EC2 인스턴스 종료 후 로그 보존 → CloudWatch Logs 실시간 스트리밍. ALB 로그(A)는 L7 요청 로그만 포함(앱 로그 아님). X-Ray(D)는 분산 추적 도구. 단계 조정(C)은 스케일링 방식 변경.' }
    ]
  },
  {
    n: 260,
    en: `A company runs an unauthenticated static website (www.example.com) that includes a registration form for users. The website uses Amazon S3 for hosting and uses Amazon CloudFront as the content delivery network with AWS WAF configured. When the registration form is submitted, the website calls an Amazon API Gateway API endpoint that invokes an AWS Lambda function to process the payload and forward the payload to an external API call.<br><br>During testing, a solutions architect encounters a cross-origin resource sharing (CORS) error. The solutions architect confirms that the CloudFront distribution origin has the Access-Control-Allow-Origin header set to www.example.com.<br><br>What should the solutions architect do to resolve the error?`,
    ko: `한 회사에서 사용자 등록 양식이 포함된 인증되지 않은 정적 웹사이트(www.example.com)를 운영하고 있습니다. 웹 사이트는 호스팅에 Amazon S3를 사용하고 AWS WAF가 구성된 콘텐츠 전송 네트워크로 Amazon CloudFront를 사용합니다. 등록 양식이 제출되면 웹 사이트는 Amazon API Gateway API 엔드포인트를 호출하여 AWS Lambda 함수를 호출합니다.<br><br>테스트 중에 솔루션 설계자에게 CORS 오류가 발생했습니다. CloudFront 배포 오리진에 www.example.com으로 설정된 Access-Control-Allow-Origin 헤더가 있는지 확인합니다.<br><br>솔루션 설계자는 오류를 해결하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Change the CORS configuration on the S3 bucket. Add rules for CORS to the AllowedOrigin element for www.example.com.`, ko: `S3 버킷의 CORS 구성을 변경합니다. www.example.com의 AllowedOrigin 요소에 CORS에 대한 규칙을 추가합니다.` },
      { k: 'B', en: `Enable the CORS setting in AWS WAF. Create a web ACL rule in which the Access-Control-Allow-Origin header is set to www.example.com.`, ko: `AWS WAF에서 CORS 설정을 활성화합니다. Access-Control-Allow-Origin 헤더가 www.example.com으로 설정된 웹 ACL 규칙을 생성합니다.` },
      { k: 'C', en: `Enable the CORS setting on the API Gateway API endpoint. Ensure that the API endpoint is configured to return all responses that have the Access-Control-Allow-Origin header set to www.example.com.`, ko: `API 게이트웨이 API 엔드포인트에서 CORS 설정을 활성화합니다. Access-Control-Allow-Origin 헤더가 www.example.com으로 설정된 모든 응답을 반환하도록 API 엔드포인트가 구성되어 있는지 확인하세요.` },
      { k: 'D', en: `Enable the CORS setting on the Lambda function. Ensure that the return code of the function has the Access-Control-Allow-Origin header set to www.example.com.`, ko: `Lambda 함수에서 CORS 설정을 활성화합니다. 함수의 반환 코드에 Access-Control-Allow-Origin 헤더가 www.example.com으로 설정되어 있는지 확인하세요.` },
    ],
    answer: ['C'],
    vote: '93% C',
    explain: `<p><span class="mark-ok">✅ C — API Gateway에서 CORS 설정 활성화</span></p>
<p>CORS 오류는 브라우저가 www.example.com에서 로드된 페이지의 스크립트가 <strong>다른 도메인(API Gateway 엔드포인트)</strong>으로 요청을 보낼 때 발생합니다. 서버(API Gateway)가 응답에 <code>Access-Control-Allow-Origin: www.example.com</code> 헤더를 포함해야 브라우저가 응답을 허용합니다.</p>
<p>CloudFront 배포의 헤더 설정은 클라이언트→CloudFront 구간의 CORS를 처리하지만, www.example.com→API Gateway 간의 교차 출처 요청에 대한 응답 헤더는 API Gateway에서 설정해야 합니다.</p>
<p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html" target="_blank">AWS 공식 문서 - API Gateway CORS 활성화</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3의 CORS 구성은 S3 버킷 자체에 대한 직접 요청에 적용됩니다. 등록 양식이 API Gateway를 호출하는 것이 문제이므로 S3 CORS 설정은 이 오류를 해결하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — AWS WAF는 웹 애플리케이션 방화벽으로 CORS 헤더를 설정하는 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda 자체에는 CORS 설정 인터페이스가 없습니다. API Gateway가 앞에서 CORS를 처리하는 것이 올바른 접근입니다. Lambda 응답에 헤더를 포함시킬 수 있지만 API Gateway의 CORS 활성화가 표준 방법입니다.</p>`,
    disc: [
      { ans: 'C (93%)', txt: 'CORS 오류 = 브라우저가 다른 도메인(API GW) 응답 거부. API GW에서 CORS 활성화로 Access-Control-Allow-Origin 응답 헤더 추가. S3 CORS(A)는 S3 직접 요청에만 적용. WAF(B)는 CORS 헤더 설정 불가.' }
    ]
  },
];