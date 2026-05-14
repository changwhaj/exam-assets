window.QS_SET51 = [
  {
    n: 501,
    en: `<p>A company runs a web application on a single Amazon EC2 instance. End users experience slow application performance during times of peak usage, when CPU utilization is consistently more than 95%.</p>
<p>A user data script installs required custom packages on the EC2 instance. The process of launching the instance takes several minutes.</p>
<p>The company is creating an Auto Scaling group that has mixed instance groups, varied CPUs, and a maximum capacity limit. The Auto Scaling group will use a launch template for various configuration options. The company needs to decrease application latency when new instances are launched during auto scaling.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 단일 Amazon EC2 인스턴스에서 웹 애플리케이션을 실행합니다. 피크 사용 시간에 CPU 사용률이 95%를 초과하며 성능이 느려집니다.</p>
<p>사용자 데이터 스크립트가 필요한 사용자 지정 패키지를 설치하며 인스턴스 시작에 몇 분이 걸립니다.</p>
<p>회사는 혼합 인스턴스 그룹, 다양한 CPU, 최대 용량 제한이 있는 Auto Scaling 그룹을 만들고 있습니다. 자동 확장 중 새 인스턴스 시작 시 애플리케이션 대기 시간을 줄여야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Use a predictive scaling policy. Use an instance maintenance policy to run the user data script. Set the default instance warmup time to 0 seconds.', ko: '예측적 스케일링 정책을 사용합니다. 인스턴스 유지 관리 정책을 사용하여 사용자 데이터 스크립트를 실행합니다. 기본 인스턴스 워밍업 시간을 0초로 설정합니다.' },
      { k: 'B', en: 'Use a dynamic scaling policy. Use lifecycle hooks to run the user data script. Set the default instance warmup time to 0 seconds.', ko: '동적 스케일링 정책을 사용합니다. 라이프사이클 후크를 사용하여 사용자 데이터 스크립트를 실행합니다. 기본 인스턴스 워밍업 시간을 0초로 설정합니다.' },
      { k: 'C', en: 'Use a predictive scaling policy. Enable warm pools for the Auto Scaling group. Use an instance maintenance policy to run the user data script.', ko: '예측적 스케일링 정책을 사용합니다. Auto Scaling 그룹에 대한 웜 풀을 활성화합니다. 인스턴스 유지 관리 정책을 사용하여 사용자 데이터 스크립트를 실행합니다.' },
      { k: 'D', en: 'Use a dynamic scaling policy. Enable warm pools for the Auto Scaling group. Use lifecycle hooks to run the user data script.', ko: '동적 스케일링 정책을 사용합니다. Auto Scaling 그룹에 대한 웜 풀을 활성화합니다. 라이프사이클 후크를 사용하여 사용자 데이터 스크립트를 실행합니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — 동적 스케일링 + 웜 풀 + 라이프사이클 후크</span></p>
<p>인스턴스 시작에 "몇 분"이 걸리는 것이 핵심 문제입니다. 대기 시간을 줄이는 최적 솔루션:</p>
<ul>
<li><strong>웜 풀(Warm Pools)</strong>: 미리 초기화된 EC2 인스턴스를 대기 상태로 유지. 실제 스케일 아웃 시 즉시 사용 가능 → 시작 지연 제거</li>
<li><strong>라이프사이클 후크</strong>: 인스턴스가 웜 풀에 들어갈 때 사용자 데이터 스크립트 실행하여 패키지 미리 설치</li>
<li><strong>동적 스케일링</strong>: CPU 95% 초과 시 실시간 반응 (예측적 스케일링보다 현재 부하 기반에 적합)</li>
</ul>
<p><a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html" target="_blank">AWS 공식 문서: Auto Scaling 웜 풀</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — 인스턴스 유지 관리 정책은 기존 인스턴스 교체 정책이지 사용자 데이터 스크립트 실행 메커니즘이 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — 워밍업 시간을 0초로 설정하면 스케일링 지표는 더 빠르게 반응하지만 인스턴스 시작 지연(패키지 설치 시간) 자체는 해결되지 않습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: '웜 풀로 미리 초기화된 인스턴스 대기 + 라이프사이클 후크로 패키지 사전 설치 = 스케일 아웃 지연 최소화.' },
    ],
  },
  {
    n: 502,
    en: `<p>A company needs to migrate its on-premises database fleet to Amazon RDS. The company is currently using a mixture of Microsoft SQL Server, MySQL, and Oracle databases. Some of the databases have custom schemas and stored procedures.</p>
<p>Which combination of steps should the company take for the migration? (Choose two.)</p>`,
    ko: `<p>한 회사가 온프레미스 데이터베이스 플릿을 Amazon RDS로 마이그레이션해야 합니다. 현재 Microsoft SQL Server, MySQL, Oracle 데이터베이스를 혼합하여 사용하고 있으며 일부는 사용자 지정 스키마와 저장 프로시저가 있습니다.</p>
<p>마이그레이션을 위해 어떤 단계 조합을 취해야 합니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Use Migration Evaluator Quick Insights to analyze the source databases and to identify the stored procedures that need to be migrated.', ko: 'Migration Evaluator Quick Insights를 사용하여 소스 데이터베이스를 분석하고 마이그레이션이 필요한 저장 프로시저를 식별합니다.' },
      { k: 'B', en: 'Use AWS Application Migration Service to analyze the source databases and to identify the stored procedures that need to be migrated.', ko: 'AWS Application Migration Service를 사용하여 소스 데이터베이스를 분석하고 저장 프로시저를 식별합니다.' },
      { k: 'C', en: 'Use the AWS Schema Conversion Tool (AWS SCT) to analyze the source databases for changes that are required.', ko: 'AWS SCT를 사용하여 필요한 변경 사항을 위해 소스 데이터베이스를 분석합니다.' },
      { k: 'D', en: 'Use AWS Database Migration Service (AWS DMS) to migrate the source databases to Amazon RDS.', ko: 'AWS DMS를 사용하여 소스 데이터베이스를 Amazon RDS로 마이그레이션합니다.' },
      { k: 'E', en: 'Use AWS DataSync to migrate the data from the source databases to Amazon RDS.', ko: 'AWS DataSync를 사용하여 소스 데이터베이스의 데이터를 Amazon RDS로 마이그레이션합니다.' },
    ],
    answer: ['C', 'D'],
    vote: '100% CD',
    explain: `<p><span class="mark-ok">✅ C — AWS SCT(스키마 변환 도구)</span></p>
<p>이기종 데이터베이스(Oracle, SQL Server → RDS) 마이그레이션 시 스키마와 저장 프로시저를 분석하고 변환합니다. 사용자 지정 스키마와 저장 프로시저가 있을 때 필수 단계입니다.</p>
<p><span class="mark-ok">✅ D — AWS DMS(데이터베이스 마이그레이션 서비스)</span></p>
<p>실제 데이터를 소스에서 RDS 대상으로 마이그레이션합니다. 동종/이기종 마이그레이션 모두 지원하며 운영 중 지속적 복제(CDC)도 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Migration Evaluator는 TCO 분석 및 평가 보고서 도구입니다. 스키마/저장 프로시저 분석 도구가 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — AWS Application Migration Service(MGN)는 서버 마이그레이션 서비스로 데이터베이스 스키마 분석 기능이 없습니다.</p>
<p><span class="mark-no">❌ E</span> — AWS DataSync는 파일/오브젝트 스토리지 데이터 전송 도구로, 데이터베이스 마이그레이션에는 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'CD (100%)', txt: 'SCT로 스키마/저장 프로시저 변환 분석 + DMS로 실제 데이터 마이그레이션. 이기종 DB 마이그레이션 표준 조합.' },
    ],
  },
  {
    n: 503,
    en: `<p>A company is migrating its blog platform to AWS. The company's on-premises servers connect to AWS through an AWS Site-to-Site VPN connection. The blog content is updated several times a day by multiple authors and is served from a file share on a network-attached storage (NAS) server.</p>
<p>The company needs to migrate the blog platform without delaying the content updates. The company has deployed Amazon EC2 instances across multiple Availability Zones to run the blog platform behind an Application Load Balancer. The company also needs to move 200 TB of archival data from its on-premises servers to Amazon S3 as soon as possible.</p>
<p>Which combination of steps will meet these requirements? (Choose two.)</p>`,
    ko: `<p>한 회사가 블로그 플랫폼을 AWS로 마이그레이션하고 있습니다. 블로그 콘텐츠는 여러 작성자가 하루에 여러 번 업데이트하며 NAS 서버의 파일 공유에서 제공됩니다.</p>
<p>콘텐츠 업데이트를 지연시키지 않고 마이그레이션해야 하며, 200TB의 보관 데이터를 가능한 한 빨리 Amazon S3로 이동해야 합니다.</p>
<p>이러한 요구사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Create a weekly cron job in Amazon EventBridge. Use the cron job to invoke an AWS Lambda function to update the EC2 instances from the NAS server.', ko: 'Amazon EventBridge에서 주간 cron 작업을 만듭니다. Lambda 함수를 호출하여 NAS 서버에서 EC2 인스턴스를 업데이트합니다.' },
      { k: 'B', en: 'Configure an Amazon Elastic Block Store (Amazon EBS) Multi-Attach volume for the EC2 instances to share for content access. Write code to synchronize the EBS volume with the NAS server weekly.', ko: 'Amazon EBS Multi-Attach 볼륨을 구성하여 EC2 인스턴스가 콘텐츠에 접근하도록 공유합니다. EBS 볼륨을 NAS 서버와 매주 동기화하는 코드를 작성합니다.' },
      { k: 'C', en: 'Mount an Amazon Elastic File System (Amazon EFS) file system to the on-premises servers to act as the NAS server. Copy the blog data to the EFS file system. Mount the EFS file system to the EC2 instances to serve the content.', ko: '온프레미스 서버에 Amazon EFS 파일 시스템을 마운트하여 NAS 서버로 작동시킵니다. 블로그 데이터를 EFS에 복사합니다. EFS를 EC2 인스턴스에 마운트하여 콘텐츠를 제공합니다.' },
      { k: 'D', en: 'Order an AWS Snowball Edge Storage Optimized device. Copy the static data artifacts to the device. Ship the device to AWS.', ko: 'AWS Snowball Edge Storage Optimized 장치를 주문합니다. 정적 데이터 아티팩트를 장치에 복사합니다. 장치를 AWS로 배송합니다.' },
      { k: 'E', en: 'Order an AWS Snowcone SSD device. Copy the static data artifacts to the device. Ship the device to AWS.', ko: 'AWS Snowcone SSD 장치를 주문합니다. 정적 데이터 아티팩트를 장치에 복사합니다. 장치를 AWS로 배송합니다.' },
    ],
    answer: ['C', 'D'],
    vote: '100% CD',
    explain: `<p><span class="mark-ok">✅ C — EFS를 온프레미스에 마운트하여 NAS 대체</span></p>
<p>Amazon EFS는 VPN을 통해 온프레미스 서버에 마운트 가능합니다. 여러 작성자가 업데이트하는 블로그 콘텐츠를 EFS에 직접 저장하면 EC2 인스턴스들이 즉시 동일한 최신 콘텐츠에 접근할 수 있습니다. 콘텐츠 업데이트 지연 없음.</p>
<p><span class="mark-ok">✅ D — Snowball Edge Storage Optimized (최대 210TB)</span></p>
<p>200TB 보관 데이터를 가능한 한 빨리 S3로 이동. VPN 대역폭으로는 200TB 전송에 너무 오래 걸립니다. Snowball Edge는 최대 210TB NVMe를 지원하여 한 번에 이전 가능.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 주간 cron으로 업데이트하면 콘텐츠 업데이트 지연이 발생합니다.</p>
<p><span class="mark-no">❌ B</span> — EBS Multi-Attach는 제한된 AZ 내 인스턴스에만 가능하며 주간 동기화는 지연 문제를 해결하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — Snowcone은 최대 약 14TB로 200TB 이전에 부족합니다.</p>`,
    disc: [
      { ans: 'CD (100%)', txt: 'EFS로 실시간 콘텐츠 공유(지연 없음) + Snowball Edge로 200TB 대용량 데이터 빠른 이전.' },
    ],
  },
  {
    n: 504,
    en: `<p>A company plans to migrate a legacy on-premises application to AWS. The application is a Java web application that runs on Apache Tomcat with a PostgreSQL database.</p>
<p>The company does not have access to the source code but can deploy the application Java Archive (JAR) files. The application has increased traffic at the end of each month.</p>
<p>Which solution will meet these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 레거시 온프레미스 애플리케이션을 AWS로 마이그레이션할 계획입니다. 애플리케이션은 Apache Tomcat에서 PostgreSQL 데이터베이스와 함께 실행되는 Java 웹 애플리케이션입니다.</p>
<p>회사는 소스 코드에 접근할 수 없지만 애플리케이션 JAR 파일을 배포할 수 있습니다. 매월 말에 트래픽이 증가합니다.</p>
<p>최소한의 운영 오버헤드로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Launch Amazon EC2 instances in multiple Availability Zones. Deploy Tomcat and PostgreSQL to all the instances by using Amazon EFS mount points. Use AWS Step Functions to deploy additional EC2 instances to scale for increased traffic.', ko: '여러 AZ에서 EC2를 시작합니다. EFS 마운트 포인트로 Tomcat과 PostgreSQL을 배포합니다. Step Functions으로 추가 EC2를 배포하여 확장합니다.' },
      { k: 'B', en: 'Provision Amazon EKS in an Auto Scaling group across multiple AWS Regions. Deploy Tomcat and PostgreSQL in container images. Use a Network Load Balancer to scale for increased traffic.', ko: '여러 리전에 EKS를 프로비저닝합니다. 컨테이너 이미지에 Tomcat과 PostgreSQL을 배포합니다. NLB로 확장합니다.' },
      { k: 'C', en: 'Refactor the Java application into Python-based containers. Use AWS Lambda functions for the application logic. Store application data in Amazon DynamoDB global tables. Use AWS Storage Gateway and Lambda concurrency to scale for increased traffic.', ko: 'Java 애플리케이션을 Python 기반 컨테이너로 리팩터링합니다. Lambda로 애플리케이션 로직을 처리합니다. DynamoDB에 데이터를 저장합니다.' },
      { k: 'D', en: 'Use AWS Elastic Beanstalk to deploy the Tomcat servers with auto scaling in multiple Availability Zones. Store application data in an Amazon RDS for PostgreSQL database. Deploy Amazon CloudFront and an Application Load Balancer to scale for increased traffic.', ko: 'AWS Elastic Beanstalk를 사용하여 여러 AZ에 자동 확장이 있는 Tomcat 서버를 배포합니다. Amazon RDS for PostgreSQL에 데이터를 저장합니다. CloudFront와 ALB를 배포합니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — AWS Elastic Beanstalk + RDS for PostgreSQL + CloudFront + ALB</span></p>
<p>소스 코드 없이 JAR 파일만 있는 경우 Elastic Beanstalk는 최적의 솔루션입니다:</p>
<ul>
<li><strong>Elastic Beanstalk Tomcat 플랫폼</strong>: JAR/WAR 파일을 직접 업로드하여 배포. Apache Tomcat 환경 자동 구성</li>
<li><strong>자동 확장</strong>: 월말 트래픽 급증에 자동 대응</li>
<li><strong>관리형 서비스</strong>: 서버, OS 패치, 로드 밸런싱 자동 관리</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2에 직접 배포 + Step Functions 확장은 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ B</span> — EKS 멀티 리전은 과도하게 복잡합니다. DB를 컨테이너에 포함하는 것도 Best Practice에 반합니다.</p>
<p><span class="mark-no">❌ C</span> — Python으로 리팩터링은 소스 코드가 없는 상황에서 불가능합니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'Elastic Beanstalk Tomcat 플랫폼에 JAR 업로드 → 소스 코드 불필요. 자동 확장, 관리형 환경으로 운영 오버헤드 최소.' },
    ],
  },
  {
    n: 505,
    en: `<p>A company is migrating its on-premises IoT platform to AWS. The platform consists of the following components:</p>
<ul>
<li>A MongoDB cluster as a data store for all collected and processed IoT data.</li>
<li>An application that uses MQTT to connect to IoT devices every 5 minutes to collect data.</li>
<li>An application that runs jobs periodically to generate reports from the IoT data. The jobs take 120-600 seconds to finish running.</li>
<li>A web application that runs on a web server. End users use the web application to generate reports that are accessible to the general public.</li>
</ul>
<p>The company needs to migrate the platform to AWS to reduce operational overhead while maintaining performance.</p>
<p>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose three.)</p>`,
    ko: `<p>한 회사가 온프레미스 IoT 플랫폼을 AWS로 마이그레이션하고 있습니다. 플랫폼은 MongoDB 클러스터(데이터 저장소), MQTT로 5분마다 IoT 기기에서 데이터를 수집하는 애플리케이션, 120~600초가 걸리는 보고서 생성 작업, 최종 사용자를 위한 웹 애플리케이션으로 구성됩니다.</p>
<p>성능을 유지하면서 운영 오버헤드를 줄이기 위해 AWS로 마이그레이션해야 합니다.</p>
<p>최소한의 운영 오버헤드로 이러한 요구사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: 'Create AWS Step Functions state machines with Lambda tasks to prepare the reports and to write the reports to Amazon S3. Configure an Amazon CloudFront distribution that has an S3 origin to serve the reports.', ko: 'Lambda 작업으로 AWS Step Functions 상태 머신을 만들어 보고서를 준비하고 Amazon S3에 작성합니다. S3 오리진이 있는 CloudFront 배포를 구성하여 보고서를 제공합니다.' },
      { k: 'B', en: 'Create an AWS Lambda function. Program the Lambda function to connect to the IoT devices, process the data, and write the data to the data store. Configure a Lambda layer to temporarily store messages for processing.', ko: 'Lambda 함수를 만들어 IoT 기기에 연결하고 데이터를 처리하여 데이터 저장소에 씁니다. Lambda 계층을 처리를 위한 임시 메시지 저장소로 구성합니다.' },
      { k: 'C', en: 'Configure an Amazon EKS cluster with EC2 instances to prepare the reports. Create an ingress controller on the EKS cluster to serve the reports.', ko: 'EC2 인스턴스로 EKS 클러스터를 구성하여 보고서를 준비합니다. EKS 클러스터에 인그레스 컨트롤러를 생성하여 보고서를 제공합니다.' },
      { k: 'D', en: 'Connect the IoT devices to AWS IoT Core to publish messages. Create an AWS IoT rule that runs when a message is received. Configure the rule to call an AWS Lambda function. Program the Lambda function to parse, transform, and store device message data to the data store.', ko: 'IoT 기기를 AWS IoT Core에 연결하여 메시지를 게시합니다. 메시지 수신 시 실행되는 IoT 규칙을 만들고 Lambda 함수를 호출하도록 구성합니다. Lambda로 데이터를 파싱, 변환하여 저장합니다.' },
      { k: 'E', en: 'Migrate the MongoDB cluster to Amazon DocumentDB (with MongoDB compatibility).', ko: 'MongoDB 클러스터를 Amazon DocumentDB(MongoDB 호환)로 마이그레이션합니다.' },
      { k: 'F', en: 'Migrate the MongoDB cluster to Amazon EC2 instances.', ko: 'MongoDB 클러스터를 Amazon EC2 인스턴스로 마이그레이션합니다.' },
    ],
    answer: ['A', 'D', 'E'],
    vote: '100% ADE',
    explain: `<p><span class="mark-ok">✅ A — Step Functions + Lambda + S3 + CloudFront</span></p>
<p>120~600초 보고서 작업에 Lambda 단독 사용 불가(최대 15분). Step Functions로 워크플로 오케스트레이션 + S3에 저장 + CloudFront로 공개 배포.</p>
<p><span class="mark-ok">✅ D — AWS IoT Core + IoT 규칙 + Lambda</span></p>
<p>MQTT 기반 IoT 데이터 수집의 AWS 관리형 표준 솔루션. IoT Core가 MQTT를 처리하여 Lambda로 전달.</p>
<p><span class="mark-ok">✅ E — Amazon DocumentDB</span></p>
<p>MongoDB 호환 관리형 서비스. EC2에 MongoDB를 자체 운영(F)보다 운영 오버헤드 대폭 감소.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Lambda가 IoT 기기에 직접 연결(폴링)하는 것은 IoT Core를 통한 구독 방식보다 비효율적입니다. Lambda 계층은 임시 메시지 저장에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — EKS 클러스터는 운영 오버헤드가 크며 보고서 제공에 과도합니다.</p>
<p><span class="mark-no">❌ F</span> — EC2에 MongoDB 자체 운영은 운영 오버헤드가 큽니다.</p>`,
    disc: [
      { ans: 'ADE (100%)', txt: 'A: SF+Lambda+S3+CF로 보고서 워크플로. D: IoT Core+Lambda로 MQTT 수집. E: DocumentDB로 MongoDB 관리 오버헤드 제거.' },
    ],
  },
  {
    n: 506,
    en: `<p>A company creates an Amazon API Gateway API and shares the API with an external development team. The API uses AWS Lambda functions and is deployed to a stage that is named Production.</p>
<p>The external development team is the sole consumer of the API. The API experiences sudden increases of usage at specific times, leading to concerns about increased costs. The company needs to limit cost and usage without reworking the Lambda functions.</p>
<p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>한 회사가 Amazon API Gateway API를 만들고 외부 개발 팀과 공유합니다. API는 AWS Lambda 함수를 사용하고 Production 단계에 배포됩니다.</p>
<p>특정 시간에 사용량이 갑자기 증가하여 비용 우려가 발생합니다. Lambda 함수를 다시 작업하지 않고 비용과 사용량을 제한해야 합니다.</p>
<p>가장 비용 효율적으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Configure the API to send requests to Amazon SQS queues instead of directly to the Lambda functions. Update the Lambda functions to consume messages from the queues.', ko: 'Lambda 함수 대신 SQS 대기열에 요청을 보내도록 API를 구성합니다. 대기열에서 메시지를 소비하도록 Lambda 함수를 업데이트합니다.' },
      { k: 'B', en: 'Configure provisioned concurrency for each Lambda function. Use AWS Application Auto Scaling to register the Lambda functions as targets. Set up scaling schedules.', ko: '각 Lambda 함수에 프로비저닝된 동시성을 구성합니다. Application Auto Scaling을 사용하고 확장 일정을 설정합니다.' },
      { k: 'C', en: 'Create an API Gateway API key and an AWS WAF Regional web ACL. Associate the web ACL with the Production stage. Add a rate-based rule to the web ACL. Specify the rate limit and a custom request aggregation that uses the X-API-Key header.', ko: 'API Gateway API 키와 AWS WAF 웹 ACL을 만듭니다. 웹 ACL을 Production 단계에 연결합니다. 요율 기반 규칙을 추가합니다.' },
      { k: 'D', en: 'Create an API Gateway API Key and usage plan. Define throttling limits and quotas in the usage plan. Associate the usage plan with the Production stage and the API key. Share the API key with the external development team.', ko: 'API Gateway API 키와 사용 계획을 만듭니다. 사용 계획에서 제한 및 할당량을 정의합니다. 사용 계획을 Production 단계 및 API 키와 연결합니다. API 키를 외부 개발 팀과 공유합니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — API Gateway API 키 + 사용 계획(Usage Plan)</span></p>
<p>Lambda 함수 변경 없이 API 사용량을 제한하는 가장 직접적인 방법입니다:</p>
<ul>
<li><strong>사용 계획</strong>: 초당 요청 수(Throttling)와 일/월별 총 요청 수(Quota)를 정의</li>
<li><strong>API 키</strong>: 외부 팀에 배포하여 해당 팀에만 제한 적용</li>
<li>Lambda 함수 변경 불필요</li>
<li>WAF보다 저렴 (WAF 웹 ACL 사용은 추가 비용 발생)</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SQS 추가는 Lambda 함수 변경이 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — 프로비저닝된 동시성은 지연 시간 개선용이며 비용 제한 효과가 없습니다. 오히려 비용이 증가합니다.</p>
<p><span class="mark-no">❌ C</span> — AWS WAF는 추가 비용이 발생하며 API Gateway 사용 계획보다 비용 효율이 낮습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'API Gateway 사용 계획이 Lambda 변경 없이 제한+할당량 설정 가능한 가장 비용 효율적 방법.' },
    ],
  },
  {
    n: 507,
    en: `<p>An entertainment company hosts a ticketing service on a fleet of Linux Amazon EC2 instances that are in an Auto Scaling group. The ticketing service uses a pricing file. The pricing file is stored in an Amazon S3 bucket that has S3 Standard storage. A central pricing solution hosted by a third party updates the pricing file.</p>
<p>The pricing file is updated every 1-15 minutes and has several thousand line items. The pricing file is downloaded to each EC2 instance when the instance launches.</p>
<p>The EC2 instances occasionally use outdated pricing information that can result in incorrect charges for customers.</p>
<p>Which solution will resolve this problem MOST cost-effectively?</p>`,
    ko: `<p>한 엔터테인먼트 회사가 Auto Scaling 그룹의 Linux EC2 인스턴스에서 티켓팅 서비스를 호스팅합니다. 티켓팅 서비스는 S3 버킷에 저장된 가격 파일을 사용합니다. 타사 중앙 가격 솔루션이 가격 파일을 1~15분마다 업데이트합니다.</p>
<p>가격 파일은 인스턴스 시작 시 다운로드되어 EC2 인스턴스가 가끔 오래된 가격을 사용합니다.</p>
<p>가장 비용 효율적으로 이 문제를 해결하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an AWS Lambda function to update an Amazon DynamoDB table with new prices each time the pricing file is updated. Update the ticketing service to use DynamoDB to look up pricing.', ko: '가격 파일이 업데이트될 때마다 Lambda 함수로 DynamoDB 테이블을 새 가격으로 업데이트합니다. DynamoDB를 사용하여 가격을 조회하도록 티켓팅 서비스를 업데이트합니다.' },
      { k: 'B', en: 'Create an AWS Lambda function to update an Amazon EFS file share with the pricing file each time the file is updated. Update the ticketing service to use Amazon EFS to access the pricing file.', ko: '파일이 업데이트될 때마다 Lambda 함수로 EFS 파일 공유를 업데이트합니다. EFS를 사용하도록 티켓팅 서비스를 업데이트합니다.' },
      { k: 'C', en: 'Load Mountpoint for Amazon S3 onto the AMI of the EC2 instances. Configure Mountpoint for Amazon S3 to mount the S3 bucket that contains the pricing file. Update the ticketing service to point to the mount point and path to access the S3 object.', ko: 'EC2 인스턴스의 AMI에 Amazon S3용 Mountpoint를 로드합니다. 가격 파일이 포함된 S3 버킷을 마운트하도록 구성합니다. 마운트 포인트를 가리키도록 티켓팅 서비스를 업데이트합니다.' },
      { k: 'D', en: 'Create an Amazon EBS volume. Use EBS Multi-Attach to attach the volume to every EC2 instance. When a new EC2 instance launches, configure the new instance to update the pricing file on the EBS volume.', ko: 'EBS 볼륨을 만들고 Multi-Attach로 모든 EC2 인스턴스에 연결합니다. 새 인스턴스 시작 시 EBS 볼륨의 가격 파일을 업데이트하도록 구성합니다.' },
    ],
    answer: ['C'],
    vote: '67% C / 33% A',
    explain: `<p><span class="mark-ok">✅ C — Amazon S3용 Mountpoint</span></p>
<p>핵심 문제: 인스턴스 시작 시 S3에서 파일을 다운로드하면 업데이트 후 새 인스턴스가 시작되기 전까지 오래된 정보를 사용합니다.</p>
<p>Amazon S3용 Mountpoint를 사용하면:</p>
<ul>
<li>S3 버킷을 로컬 파일 시스템처럼 마운트</li>
<li>파일을 읽을 때마다 S3에서 직접 최신 버전 조회</li>
<li>추가 인프라(Lambda, DynamoDB, EFS) 없이 기존 S3 버킷 활용 → 비용 효율적</li>
</ul>
<p><a href="https://aws.amazon.com/s3/features/mountpoint/" target="_blank">AWS Mountpoint for Amazon S3</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda + DynamoDB 조합은 추가 서비스 비용이 발생하고 애플리케이션 코드 변경도 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — EFS는 EC2에서 파일을 읽을 때 항상 최신 파일에 접근 가능하지만, EFS 비용이 S3 Mountpoint보다 높습니다.</p>
<p><span class="mark-no">❌ D</span> — EBS Multi-Attach는 최대 16개 인스턴스에만 지원되며, 새 인스턴스마다 파일 업데이트 로직이 필요합니다.</p>`,
    disc: [
      { ans: 'C (67%)', txt: 'S3 Mountpoint로 항상 최신 파일 직접 접근. 추가 인프라 불필요 → 가장 비용 효율적.' },
      { ans: 'A (33%)', txt: 'DynamoDB가 더 빠른 조회를 제공한다는 주장. 그러나 추가 서비스 비용과 코드 변경 필요.' },
    ],
  },
  {
    n: 508,
    en: `<p>A company has an application that uses Amazon EC2 instances in an Auto Scaling group. The quality assurance (QA) department needs to launch a large number of short-lived environments to test the application. The application environments are currently launched by the manager of the department using an AWS CloudFormation template. To launch the stack, the manager uses a role with permission to use CloudFormation, EC2, and Auto Scaling APIs. The manager wants to allow testers to launch their own environments, but does not want to grant broad permissions to each user.</p>
<p>Which set up would achieve these goals?</p>`,
    ko: `<p>한 회사가 Auto Scaling 그룹의 EC2 인스턴스를 사용하는 애플리케이션을 보유합니다. QA 부서가 테스트를 위해 많은 단기 환경을 시작해야 합니다. 현재 부서 관리자가 CloudFormation 템플릿으로 환경을 시작합니다. 관리자는 테스터가 자신의 환경을 시작하도록 허용하고 싶지만 각 사용자에게 광범위한 권한을 부여하고 싶지 않습니다.</p>
<p>이 목표를 달성하는 설정은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Upload the AWS CloudFormation template to Amazon S3. Give users in the QA department permission to assume the manager\'s role and add a policy that restricts the permissions to the template and the resources it creates.', ko: 'CloudFormation 템플릿을 S3에 업로드합니다. QA 부서 사용자에게 관리자 역할을 맡을 수 있는 권한을 부여하고 템플릿과 리소스에 대한 권한을 제한하는 정책을 추가합니다.' },
      { k: 'B', en: 'Create an AWS Service Catalog product from the environment template. Add a launch constraint to the product with the existing role. Give users in the QA department permission to use AWS Service Catalog APIs only. Train users to launch the template from the AWS Service Catalog console.', ko: '환경 템플릿에서 AWS Service Catalog 제품을 만듭니다. 기존 역할로 시작 제약 조건을 추가합니다. QA 부서 사용자에게 AWS Service Catalog API만 사용할 수 있는 권한을 부여합니다. Service Catalog 콘솔에서 시작하도록 교육합니다.' },
      { k: 'C', en: 'Upload the AWS CloudFormation template to Amazon S3. Give users in the QA department permission to use CloudFormation and S3 APIs, with conditions that restrict the permissions to the template and the resources it creates.', ko: 'CloudFormation 템플릿을 S3에 업로드합니다. QA 부서 사용자에게 CloudFormation과 S3 API를 사용할 수 있는 권한을 부여하고 조건으로 제한합니다.' },
      { k: 'D', en: 'Create an AWS Elastic Beanstalk application from the environment template. Give users in the QA department permission to use Elastic Beanstalk permissions only. Train users to launch Elastic Beanstalk environments with the Elastic Beanstalk CLI.', ko: '환경 템플릿에서 Elastic Beanstalk 애플리케이션을 만듭니다. QA 부서 사용자에게 Elastic Beanstalk 권한만 부여합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Service Catalog + 시작 제약 조건(Launch Constraint)</span></p>
<p>광범위한 권한 없이 표준화된 환경 배포를 가능하게 하는 AWS Service Catalog의 핵심 기능:</p>
<ul>
<li><strong>시작 제약 조건</strong>: 제품 시작 시 관리자의 역할(CF/EC2/ASG 권한 보유)을 자동으로 사용</li>
<li><strong>사용자 권한 최소화</strong>: 테스터는 Service Catalog API만 사용 가능</li>
<li>A는 관리자 역할을 직접 맡는 것으로 너무 광범위한 권한 부여 위험</li>
</ul>
<p><a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/constraints-launch.html" target="_blank">AWS 공식 문서: Service Catalog 시작 제약 조건</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 관리자 역할 위임은 여전히 광범위한 권한을 제공할 수 있으며 최소 권한 원칙에 위배됩니다.</p>
<p><span class="mark-no">❌ C</span> — CloudFormation + S3 권한을 직접 부여하면 사용자가 다른 스택을 시작하거나 리소스를 수정할 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — Elastic Beanstalk는 EC2+ASG 기반 CF 템플릿과 직접 호환되지 않습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'Service Catalog 시작 제약 조건으로 관리자 역할을 간접 사용. 테스터는 SC API만 필요. 최소 권한 원칙 준수.' },
    ],
  },
  {
    n: 509,
    en: `<p>A company is using a single AWS Region for its ecommerce website. The website includes a web application that runs on several Amazon EC2 instances behind an Application Load Balancer (ALB). The website also includes an Amazon DynamoDB table. A custom domain name in Amazon Route 53 is linked to the ALB.</p>
<p>The company wants to replicate its entire application stack in a second Region to provide disaster recovery, plan for future growth, and provide improved access time to users. A solutions architect needs to implement a solution that achieves these goals and minimizes administrative overhead.</p>
<p>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)</p>`,
    ko: `<p>한 회사가 전자상거래 웹사이트에 단일 AWS 리전을 사용하고 있습니다. ALB 뒤의 EC2 인스턴스에서 실행되는 웹 애플리케이션과 DynamoDB 테이블이 있습니다.</p>
<p>재해 복구, 미래 성장, 개선된 접근 시간을 위해 두 번째 리전에 전체 애플리케이션 스택을 복제하고자 합니다. 관리 오버헤드를 최소화해야 합니다.</p>
<p>이러한 요구사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: 'Create an AWS CloudFormation template for the current infrastructure design. Use parameters for important system values, including Region. Use the CloudFormation template to create the new infrastructure in the second Region.', ko: '현재 인프라 설계에 대한 CloudFormation 템플릿을 만듭니다. 리전을 포함한 중요한 시스템 값에 대한 매개변수를 사용합니다. CloudFormation 템플릿으로 두 번째 리전에 새 인프라를 만듭니다.' },
      { k: 'B', en: 'Use the AWS Management Console to document the existing infrastructure design in the first Region and to create the new infrastructure in the second Region.', ko: 'AWS 관리 콘솔을 사용하여 첫 번째 리전의 기존 인프라 설계를 문서화하고 두 번째 리전에 새 인프라를 만듭니다.' },
      { k: 'C', en: 'Update the Route 53 hosted zone record for the application to use weighted routing. Send 50% of the traffic to the ALB in each Region.', ko: '가중치 라우팅을 사용하도록 Route 53 호스팅 영역 레코드를 업데이트합니다. 각 리전의 ALB로 트래픽의 50%를 보냅니다.' },
      { k: 'D', en: 'Update the Route 53 hosted zone record for the application to use latency-based routing. Send traffic to the ALB in each Region.', ko: '지연 시간 기반 라우팅을 사용하도록 Route 53 호스팅 영역 레코드를 업데이트합니다. 각 리전의 ALB로 트래픽을 보냅니다.' },
      { k: 'E', en: 'Update the configuration of the existing DynamoDB table by enabling DynamoDB Streams. Add the second Region to create a global table.', ko: 'DynamoDB Streams를 활성화하여 기존 DynamoDB 테이블의 구성을 업데이트합니다. 두 번째 리전을 추가하여 글로벌 테이블을 만듭니다.' },
      { k: 'F', en: 'Create a new DynamoDB table. Enable DynamoDB Streams for the new table. Add the second Region to create a global table. Copy the data from the existing DynamoDB table to the new table as a one-time operation.', ko: '새 DynamoDB 테이블을 만들고 DynamoDB Streams를 활성화합니다. 두 번째 리전을 추가하여 글로벌 테이블을 만듭니다. 기존 테이블의 데이터를 새 테이블로 일회성으로 복사합니다.' },
    ],
    answer: ['A', 'D', 'E'],
    vote: '100% ADE',
    explain: `<p><span class="mark-ok">✅ A — CloudFormation 템플릿으로 두 번째 리전 인프라 생성</span></p>
<p>IaC(CloudFormation)로 인프라를 코드화하면 두 번째 리전에 동일한 스택을 빠르고 일관되게 배포 가능. 관리 오버헤드 최소화.</p>
<p><span class="mark-ok">✅ D — Route 53 지연 시간 기반 라우팅</span></p>
<p>"사용자에게 개선된 접근 시간 제공" 요구사항 충족. 사용자와 가장 가까운 리전으로 자동 라우팅.</p>
<p><span class="mark-ok">✅ E — DynamoDB Streams + 글로벌 테이블</span></p>
<p>기존 테이블에 Streams를 활성화하고 두 번째 리전을 추가하면 글로벌 테이블 생성 가능. 데이터 재생성 불필요.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 수동 콘솔 작업은 오류 가능성이 높고 관리 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ C</span> — 가중치 50/50 라우팅은 특정 리전 사용자의 접근 시간을 개선하지 않습니다. 지연 시간 기반(D)이 올바릅니다.</p>
<p><span class="mark-no">❌ F</span> — 새 테이블을 만들고 데이터를 복사하는 것은 불필요한 작업입니다. E처럼 기존 테이블에서 직접 글로벌 테이블 생성이 가능합니다.</p>`,
    disc: [
      { ans: 'ADE (100%)', txt: 'A: CF로 인프라 복제. D: 지연 시간 라우팅으로 접근 시간 개선. E: 기존 테이블에서 글로벌 테이블 생성.' },
    ],
  },
  {
    n: 510,
    en: `<p>A company wants to create a single Amazon S3 bucket for its data scientists to store work-related documents. The company uses AWS IAM Identity Center to authenticate all users. A group for the data scientists was created.</p>
<p>The company wants to give the data scientists access to only their own work. The company also wants to create monthly reports that show which documents each user accessed.</p>
<p>Which combination of steps will meet these requirements? (Choose two.)</p>`,
    ko: `<p>한 회사가 데이터 과학자가 업무 관련 문서를 저장할 단일 Amazon S3 버킷을 만들고자 합니다. AWS IAM Identity Center를 사용하여 모든 사용자를 인증하며 데이터 과학자 그룹이 생성되었습니다.</p>
<p>데이터 과학자에게 자신의 작업에만 접근하도록 하며, 각 사용자가 접근한 문서를 보여주는 월별 보고서를 만들려 합니다.</p>
<p>이러한 요구사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Create a custom IAM Identity Center permission set to grant the data scientists access to an S3 bucket prefix that matches their username tag. Use a policy to limit access to paths with the ${aws:PrincipalTag/userName}/* condition.', ko: 'IAM Identity Center 권한 세트를 만들어 사용자 이름 태그와 일치하는 S3 버킷 접두사에 대한 접근 권한을 부여합니다. <code>${aws:PrincipalTag/userName}/*</code> 조건으로 경로 접근을 제한합니다.' },
      { k: 'B', en: 'Create an IAM Identity Center role for the data scientists group that has Amazon S3 read access and write access. Add an S3 bucket policy that allows access to the IAM Identity Center role.', ko: 'S3 읽기/쓰기 접근 권한이 있는 데이터 과학자 그룹에 대한 IAM Identity Center 역할을 만듭니다. IAM Identity Center 역할에 대한 접근을 허용하는 S3 버킷 정책을 추가합니다.' },
      { k: 'C', en: 'Configure AWS CloudTrail to log S3 data events and deliver the logs to an S3 bucket. Use Amazon Athena to run queries on the CloudTrail logs in Amazon S3 and generate reports.', ko: 'AWS CloudTrail을 구성하여 S3 데이터 이벤트를 로깅하고 S3 버킷에 전달합니다. Amazon Athena를 사용하여 CloudTrail 로그에 대한 쿼리를 실행하고 보고서를 생성합니다.' },
      { k: 'D', en: 'Configure AWS CloudTrail to log S3 management events to CloudWatch. Use Amazon Athena\'s CloudWatch connector to query the logs and generate reports.', ko: 'S3 관리 이벤트를 CloudWatch에 기록하도록 CloudTrail을 구성합니다. Amazon Athena의 CloudWatch 커넥터로 로그를 쿼리하고 보고서를 생성합니다.' },
      { k: 'E', en: 'Enable S3 access logging to EMR File System (EMRFS). Use Amazon S3 Select to query logs and generate reports.', ko: 'EMRFS에 대한 S3 접근 로깅을 활성화합니다. Amazon S3 Select로 로그를 쿼리하고 보고서를 생성합니다.' },
    ],
    answer: ['A', 'C'],
    vote: '100% AC',
    explain: `<p><span class="mark-ok">✅ A — IAM Identity Center 권한 세트 + PrincipalTag 조건</span></p>
<p>IAM Identity Center는 사용자 속성(태그)을 정책 조건으로 전달합니다. <code>${"{aws:PrincipalTag/userName}/*"}</code> 조건으로 각 사용자가 자신의 접두사 경로에만 접근 가능합니다. 예: user1은 <code>user1/*</code>에만 접근.</p>
<p><span class="mark-ok">✅ C — CloudTrail S3 데이터 이벤트 + Athena</span></p>
<p>S3 데이터 이벤트(GetObject, PutObject 등)를 CloudTrail로 로깅하면 누가 어떤 객체에 접근했는지 추적 가능. Athena로 SQL 쿼리하여 월별 보고서 생성.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — S3 읽기/쓰기 전체 접근을 부여하면 모든 사용자가 버킷 전체에 접근하게 됩니다. 개별 사용자 격리가 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 관리 이벤트는 S3 버킷 생성/삭제 등의 API 호출입니다. 개별 파일 접근 추적에는 데이터 이벤트가 필요합니다.</p>
<p><span class="mark-no">❌ E</span> — EMRFS는 Amazon EMR 전용 파일 시스템 인터페이스입니다. 일반 S3 접근 로깅에 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'AC (100%)', txt: 'A: PrincipalTag로 사용자별 접두사 격리. C: CloudTrail 데이터 이벤트 + Athena로 접근 보고서 생성.' },
    ],
  },
];