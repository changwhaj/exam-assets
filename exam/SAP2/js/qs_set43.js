window.QS_SET43 = [
  {
    n: 421,
    en: `<p>A company has a web application that uses Amazon API Gateway, AWS Lambda, and Amazon DynamoDB. A recent marketing campaign has increased demand. Monitoring software reports that many requests have significantly longer response times than before the marketing campaign.</p>
<p>A solutions architect enabled Amazon CloudWatch Logs for API Gateway and noticed that errors are occurring on 20% of the requests. In CloudWatch, the Lambda function Throttles metric represents 1% of the requests and the Errors metric represents 10% of the requests. Application logs indicate that, when errors occur, there is a call to DynamoDB.</p>
<p>What change should the solutions architect make to improve the current response times as the web application becomes more popular?</p>`,
    ko: `<p>한 회사가 Amazon API Gateway, AWS Lambda, Amazon DynamoDB를 사용하는 웹 애플리케이션을 보유하고 있습니다. 최근 마케팅 캠페인으로 수요가 증가했습니다. 모니터링 소프트웨어는 많은 요청의 응답 시간이 캠페인 이전보다 상당히 길어졌다고 보고합니다.</p>
<p>솔루션 아키텍트가 API Gateway에 대한 Amazon CloudWatch Logs를 활성화한 결과, 요청의 20%에서 오류가 발생하고 있음을 발견했습니다. CloudWatch에서 Lambda 함수 Throttles 지표는 요청의 1%, Errors 지표는 10%를 나타냅니다. 애플리케이션 로그에는 오류 발생 시 DynamoDB가 호출된다고 나와 있습니다.</p>
<p>웹 애플리케이션이 더욱 인기를 얻어감에 따라 현재 응답 시간을 개선하기 위해 솔루션 아키텍트는 어떤 변경을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Increase the concurrency limit of the Lambda function.', ko: 'Lambda 함수의 동시성 한도를 높입니다.' },
      { k: 'B', en: 'Implement DynamoDB auto scaling on the table.', ko: '테이블에 DynamoDB 자동 조정(Auto Scaling)을 구현합니다.' },
      { k: 'C', en: 'Increase the API Gateway throttle limit.', ko: 'API Gateway 제한(Throttle) 한도를 높입니다.' },
      { k: 'D', en: 'Re-create the DynamoDB table with a better-partitioned primary index.', ko: '더 잘 분할된 기본 인덱스를 사용하여 DynamoDB 테이블을 다시 생성합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — DynamoDB Auto Scaling 구현</span></p>
<p>오류의 핵심 원인은 DynamoDB에 있습니다. 애플리케이션 로그에서 오류 발생 시 DynamoDB가 호출된다고 명시하고 있으며, Lambda Throttle(1%)보다 Errors(10%)가 훨씬 높다는 점은 DynamoDB의 프로비저닝 처리량이 한계에 도달하여 <code>ProvisionedThroughputExceededException</code>이 발생하고 있음을 시사합니다.</p>
<p>DynamoDB Auto Scaling은 실제 트래픽 패턴에 따라 읽기/쓰기 용량 단위를 자동으로 조정하여 처리량 초과 오류를 방지합니다.</p>
<p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html" target="_blank">AWS 공식 문서: DynamoDB Auto Scaling</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda Throttles 지표는 1%에 불과해 Lambda 동시성이 병목 원인이 아닙니다. 동시성 한도를 높여도 DynamoDB 오류는 해결되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — API Gateway 제한 한도를 높이면 더 많은 요청이 Lambda와 DynamoDB로 전달되어 오히려 DynamoDB 오류가 악화될 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — 파티션 키 설계 변경은 핫 파티션 문제를 해결할 수 있지만, 테이블 재생성은 다운타임이 필요하고 운영 오버헤드가 크며, 근본 원인이 처리량 부족임을 고려하면 Auto Scaling이 더 적절합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '오류가 DynamoDB 호출 시 발생하며 Lambda Throttle은 미미함 → DynamoDB 처리량 초과가 원인. Auto Scaling으로 해결.' },
    ],
  },
  {
    n: 422,
    en: `<p>A company has an application that has a web frontend. The application runs in the company's on-premises data center and requires access to file storage for critical data. The application runs on three Linux VMs for redundancy. The architecture includes a load balancer with HTTP request-based routing.</p>
<p>The company needs to migrate the application to AWS as quickly as possible. The architecture on AWS must be highly available.</p>
<p>Which solution will meet these requirements with the FEWEST changes to the architecture?</p>`,
    ko: `<p>한 회사가 웹 프론트엔드를 갖춘 애플리케이션을 보유하고 있습니다. 이 애플리케이션은 온프레미스 데이터 센터에서 실행되며 중요 데이터를 위한 파일 스토리지 접근이 필요합니다. 중복성을 위해 3개의 Linux VM에서 실행되며, 아키텍처에는 HTTP 요청 기반 라우팅을 갖춘 로드 밸런서가 포함되어 있습니다.</p>
<p>회사는 가능한 한 빨리 애플리케이션을 AWS로 마이그레이션해야 합니다. AWS의 아키텍처는 고가용성을 갖춰야 합니다.</p>
<p>아키텍처 변경을 최소화하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Migrate the application to Amazon Elastic Container Service (Amazon ECS) containers that use the Fargate launch type in three Availability Zones. Use Amazon S3 to provide file storage for all three containers. Use a Network Load Balancer to direct traffic to the containers.', ko: '3개의 가용 영역에서 Fargate 시작 유형을 사용하는 Amazon ECS 컨테이너로 마이그레이션합니다. 세 컨테이너 모두에 파일 스토리지로 Amazon S3를 사용하고, Network Load Balancer로 트래픽을 전달합니다.' },
      { k: 'B', en: 'Migrate the application to Amazon EC2 instances in three Availability Zones. Use Amazon Elastic File System (Amazon EFS) for file storage. Mount the file storage on all three EC2 instances. Use an Application Load Balancer to direct traffic to the EC2 instances.', ko: '3개의 가용 영역에 있는 Amazon EC2 인스턴스로 마이그레이션합니다. 파일 스토리지에 Amazon EFS를 사용하고 3개 인스턴스 모두에 마운트합니다. Application Load Balancer로 트래픽을 전달합니다.' },
      { k: 'C', en: 'Migrate the application to Amazon Elastic Kubernetes Service (Amazon EKS) containers that use the Fargate launch type in three Availability Zones. Use Amazon FSx for Lustre to provide file storage for all three containers. Use a Network Load Balancer to direct traffic to the containers.', ko: '3개의 가용 영역에서 Fargate 시작 유형을 사용하는 Amazon EKS 컨테이너로 마이그레이션합니다. 세 컨테이너 모두에 FSx for Lustre를 사용하고, Network Load Balancer로 트래픽을 전달합니다.' },
      { k: 'D', en: 'Migrate the application to Amazon EC2 instances in three AWS Regions. Use Amazon Elastic Block Store (Amazon EBS) for file storage. Enable Cross-Region Replication (CRR) for all three EC2 instances. Use an Application Load Balancer to direct traffic to the EC2 instances.', ko: '3개의 AWS 리전에 있는 Amazon EC2 인스턴스로 마이그레이션합니다. 파일 스토리지에 Amazon EBS를 사용하고 3개 인스턴스 모두에 교차 리전 복제를 활성화합니다. Application Load Balancer로 트래픽을 전달합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — EC2 + EFS + ALB</span></p>
<p>온프레미스 아키텍처(Linux VM + 공유 파일 스토리지 + HTTP 기반 로드밸런서)를 AWS에서 가장 유사하게 재현하는 방법입니다.</p>
<ul>
<li><strong>EC2</strong>: Linux VM을 그대로 리프트앤시프트</li>
<li><strong>Amazon EFS</strong>: 여러 EC2 인스턴스가 동시에 마운트할 수 있는 공유 NFS 파일 시스템으로, 온프레미스 공유 파일 스토리지를 직접 대체</li>
<li><strong>ALB</strong>: HTTP/HTTPS 요청 기반 라우팅 지원 (온프레미스 LB와 동일 기능)</li>
<li>3개 AZ 배포로 고가용성 확보</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEFS.html" target="_blank">AWS 공식 문서: Amazon EFS with EC2</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 컨테이너(ECS/Fargate)로 전환하는 것은 아키텍처 변경이 큽니다. 또한 S3는 NFS 방식의 파일 시스템이 아니라 객체 스토리지로, 기존 파일 스토리지 접근 방식과 다릅니다.</p>
<p><span class="mark-no">❌ C</span> — EKS + FSx for Lustre는 HPC 워크로드에 최적화된 고급 솔루션으로, 단순 마이그레이션에 비해 과도하게 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — EBS는 단일 EC2에만 연결 가능(Multi-Attach 예외 제외)하므로 공유 파일 스토리지로 부적합하며, 리전 간 배포는 요구사항 이상입니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'Linux VM → EC2, 공유 파일스토리지 → EFS, HTTP 로드밸런서 → ALB로 1:1 매핑. 아키텍처 변경 최소화.' },
    ],
  },
  {
    n: 423,
    en: `<p>A company is planning to migrate an on-premises data center to AWS. The company currently hosts the data center on Linux-based VMware VMs. A solutions architect must collect information about network dependencies between the VMs. The information must be in the form of a diagram that details host IP addresses, hostnames, and network connection information.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 온프레미스 데이터 센터를 AWS로 마이그레이션할 계획입니다. 현재 Linux 기반 VMware VM에서 데이터 센터를 호스팅하고 있습니다. 솔루션 아키텍트는 VM 간의 네트워크 종속성 정보를 수집해야 합니다. 정보는 호스트 IP 주소, 호스트 이름, 네트워크 연결 정보를 상세히 나타내는 다이어그램 형식이어야 합니다.</p>
<p>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Use AWS Application Discovery Service. Select an AWS Migration Hub home AWS Region. Install the AWS Application Discovery Agent on the on-premises servers for data collection. Grant permissions to Application Discovery Service to use the Migration Hub network diagrams.', ko: 'AWS Application Discovery Service를 사용합니다. AWS Migration Hub 홈 리전을 선택합니다. 온프레미스 서버에 AWS Application Discovery Agent를 설치하여 데이터를 수집합니다. Application Discovery Service가 Migration Hub 네트워크 다이어그램을 사용할 수 있도록 권한을 부여합니다.' },
      { k: 'B', en: 'Use the AWS Application Discovery Service Agentless Collector for server data collection. Export the network diagrams from the AWS Migration Hub in .png format.', ko: 'AWS Application Discovery Service Agentless Collector를 사용하여 서버 데이터를 수집합니다. AWS Migration Hub에서 네트워크 다이어그램을 .png 형식으로 내보냅니다.' },
      { k: 'C', en: 'Install the AWS Application Migration Service agent on the on-premises servers for data collection. Use AWS Migration Hub data in Workload Discovery on AWS to generate network diagrams.', ko: '온프레미스 서버에 AWS Application Migration Service 에이전트를 설치하여 데이터를 수집합니다. AWS Migration Hub 데이터를 AWS Workload Discovery에서 사용하여 네트워크 다이어그램을 생성합니다.' },
      { k: 'D', en: 'Install the AWS Application Migration Service agent on the on-premises servers for data collection. Export data from AWS Migration Hub in .csv format into an Amazon CloudWatch dashboard to generate network diagrams.', ko: '온프레미스 서버에 AWS Application Migration Service 에이전트를 설치하여 데이터를 수집합니다. AWS Migration Hub 데이터를 .csv 형식으로 Amazon CloudWatch 대시보드에 내보내 네트워크 다이어그램을 생성합니다.' },
    ],
    answer: ['A'],
    vote: '89% A',
    explain: `<p><span class="mark-ok">✅ A — Application Discovery Service + Discovery Agent + Migration Hub 네트워크 다이어그램</span></p>
<p>Migration Hub 네트워크 다이어그램 기능을 사용하려면 <strong>AWS Application Discovery Service Discovery Agent</strong>가 다이어그램에 매핑하려는 모든 온프레미스 서버에서 실행되어야 합니다. Agentless Collector는 VMware vSphere 환경에서 기본 서버 정보는 수집할 수 있지만, 네트워크 연결/종속성 다이어그램 생성에는 Agent가 필요합니다.</p>
<p><a href="https://docs.aws.amazon.com/migrationhub/latest/ug/network-diagram-prerequisites.html" target="_blank">AWS 공식 문서: Migration Hub 네트워크 다이어그램 사전 조건</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Agentless Collector는 VMware 환경에서 기본 인벤토리 데이터는 수집하지만, Migration Hub 네트워크 다이어그램 생성을 위해서는 Discovery Agent 설치가 필수입니다. 또한 Migration Hub는 .png 내보내기를 지원하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Application Migration Service(MGN) 에이전트는 서버 복제(마이그레이션)용이지 네트워크 종속성 데이터 수집용이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — MGN 에이전트는 네트워크 다이어그램 데이터 수집 도구가 아니며, CloudWatch 대시보드는 네트워크 다이어그램을 생성하는 기능이 없습니다.</p>`,
    disc: [
      { ans: 'A (89%)', txt: '네트워크 다이어그램 생성에는 Discovery Agent 설치가 필수. Agentless Collector로는 불가.' },
      { ans: 'B (11%)', txt: 'VMware 환경 = Agentless라는 논리를 주장하나, 네트워크 다이어그램 요구사항 충족 불가.' },
    ],
  },
  {
    n: 424,
    en: `<p>A company runs a software-as-a-service (SaaS) application on AWS. The application consists of AWS Lambda functions and an Amazon RDS for MySQL Multi-AZ database. During market events, the application has a much higher workload than normal. Users notice slow response times during the peak periods because of many database connections. The company needs to improve the scalable performance and availability of the database.</p>
<p>Which solution meets these requirements?</p>`,
    ko: `<p>한 회사가 AWS에서 SaaS(Software-as-a-Service) 애플리케이션을 운영합니다. 이 애플리케이션은 AWS Lambda 함수와 Amazon RDS for MySQL 다중 AZ 데이터베이스로 구성됩니다. 시장 이벤트 중에는 평소보다 훨씬 높은 워크로드가 발생합니다. 사용자들은 많은 데이터베이스 연결로 인해 피크 시간대에 응답 시간이 느려지는 것을 경험합니다. 회사는 데이터베이스의 확장 가능한 성능과 가용성을 개선해야 합니다.</p>
<p>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an Amazon CloudWatch alarm action that triggers a Lambda function to add an Amazon RDS for MySQL read replica when resource utilization hits a threshold.', ko: '리소스 사용률이 임계값에 도달할 때 Lambda 함수를 트리거하여 Amazon RDS for MySQL 읽기 전용 복제본을 추가하는 Amazon CloudWatch 경보 작업을 생성합니다.' },
      { k: 'B', en: 'Migrate the database to Amazon Aurora, and add a read replica. Add a database connection pool outside of the Lambda handler function.', ko: '데이터베이스를 Amazon Aurora로 마이그레이션하고 읽기 전용 복제본을 추가합니다. Lambda 핸들러 함수 외부에 데이터베이스 연결 풀을 추가합니다.' },
      { k: 'C', en: 'Migrate the database to Amazon Aurora, and add a read replica. Use Amazon Route 53 weighted records.', ko: '데이터베이스를 Amazon Aurora로 마이그레이션하고 읽기 전용 복제본을 추가합니다. Amazon Route 53 가중치 기반 레코드를 사용합니다.' },
      { k: 'D', en: 'Migrate the database to Amazon Aurora, and add an Aurora Replica. Configure Amazon RDS Proxy to manage database connection pools.', ko: '데이터베이스를 Amazon Aurora로 마이그레이션하고 Aurora 복제본을 추가합니다. 데이터베이스 연결 풀을 관리하도록 Amazon RDS Proxy를 구성합니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — Aurora 마이그레이션 + Aurora Replica + RDS Proxy</span></p>
<p>Lambda 함수는 요청마다 새 데이터베이스 연결을 생성하는 특성이 있어 피크 시 연결 수 폭증이 발생합니다. <strong>Amazon RDS Proxy</strong>는 이를 해결하는 전용 서비스입니다:</p>
<ul>
<li>연결 풀링으로 Lambda의 수천 개 동시 연결을 소수의 DB 연결로 다중화</li>
<li>데이터베이스 부하 및 장애 조치 시간 단축</li>
<li>Aurora Replica는 읽기 쿼리 분산 및 고가용성 제공</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/" target="_blank">AWS 블로그: RDS Proxy with Lambda</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — RDS 읽기 복제본을 CloudWatch 경보로 동적 추가하는 것은 프로비저닝에 수 분이 소요되어 즉각적인 피크 대응이 불가능합니다.</p>
<p><span class="mark-no">❌ B</span> — Lambda 핸들러 외부에 연결 풀을 두는 것은 동일 실행 환경 재사용 시에만 효과가 있으며, RDS Proxy의 체계적인 연결 관리보다 신뢰성이 낮습니다.</p>
<p><span class="mark-no">❌ C</span> — Route 53 가중치 기반 레코드는 트래픽을 읽기 복제본으로 분산할 수 있지만, 연결 수 자체의 폭증 문제는 해결하지 못합니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'Lambda의 연결 폭증 문제는 RDS Proxy 연결 풀링으로 해결. Aurora Replica로 읽기 확장 및 고가용성 추가.' },
    ],
  },
  {
    n: 425,
    en: `<p>A company is planning to migrate an application from on premises to the AWS Cloud. The company will begin the migration by moving the application's underlying data storage to AWS. The application data is stored on a shared file system on premises, and the application servers connect to the shared file system through SMB.</p>
<p>A solutions architect must implement a solution that uses an Amazon S3 bucket for shared storage. Until the application is fully migrated and code is rewritten to use native Amazon S3 APIs, the application must continue to have access to the data through SMB. The solutions architect must migrate the application data to AWS to its new location while still allowing the on-premises application to access the data.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 온프레미스 애플리케이션을 AWS 클라우드로 마이그레이션할 계획입니다. 회사는 애플리케이션의 기반 데이터 스토리지를 AWS로 이동하는 것부터 시작합니다. 애플리케이션 데이터는 온프레미스 공유 파일 시스템에 저장되어 있으며, 애플리케이션 서버는 SMB를 통해 공유 파일 시스템에 연결합니다.</p>
<p>솔루션 아키텍트는 공유 스토리지에 Amazon S3 버킷을 사용하는 솔루션을 구현해야 합니다. 애플리케이션이 완전히 마이그레이션되고 네이티브 Amazon S3 API를 사용하도록 코드가 재작성될 때까지, 애플리케이션은 SMB를 통해 데이터에 계속 접근할 수 있어야 합니다. 솔루션 아키텍트는 온프레미스 애플리케이션이 데이터에 접근할 수 있도록 허용하면서 데이터를 AWS의 새로운 위치로 마이그레이션해야 합니다.</p>
<p>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a new Amazon FSx for Windows File Server file system. Configure AWS DataSync with one location for the on-premises file share and one location for the new Amazon FSx file system. Create a new DataSync task to copy the data from the on-premises file share location to the Amazon FSx file system.', ko: '새 Amazon FSx for Windows File Server 파일 시스템을 생성합니다. 온프레미스 파일 공유와 Amazon FSx 파일 시스템 각각에 대해 위치를 설정하여 AWS DataSync를 구성합니다. 온프레미스 파일 공유에서 Amazon FSx 파일 시스템으로 데이터를 복사하는 새 DataSync 작업을 생성합니다.' },
      { k: 'B', en: 'Create an S3 bucket for the application. Copy the data from the on-premises storage to the S3 bucket.', ko: '애플리케이션용 S3 버킷을 생성합니다. 온프레미스 스토리지의 데이터를 S3 버킷에 복사합니다.' },
      { k: 'C', en: 'Deploy an AWS Server Migration Service (AWS SMS) VM to the on-premises environment. Use AWS SMS to migrate the file storage server from on premises to an Amazon EC2 instance.', ko: 'AWS Server Migration Service(SMS) VM을 온프레미스 환경에 배포합니다. AWS SMS를 사용하여 파일 스토리지 서버를 온프레미스에서 Amazon EC2 인스턴스로 마이그레이션합니다.' },
      { k: 'D', en: 'Create an S3 bucket for the application. Deploy a new AWS Storage Gateway file gateway on an on-premises VM. Create a new file share that stores data in the S3 bucket and is associated with the file gateway. Copy the data from the on-premises storage to the new file gateway endpoint.', ko: '애플리케이션용 S3 버킷을 생성합니다. 온프레미스 VM에 새 AWS Storage Gateway 파일 게이트웨이를 배포합니다. S3 버킷에 데이터를 저장하고 파일 게이트웨이와 연결된 새 파일 공유를 생성합니다. 온프레미스 스토리지의 데이터를 새 파일 게이트웨이 엔드포인트에 복사합니다.' },
    ],
    answer: ['D'],
    vote: '92% D',
    explain: `<p><span class="mark-ok">✅ D — S3 버킷 + Storage Gateway 파일 게이트웨이</span></p>
<p>핵심 요구사항은 두 가지입니다: ① S3를 최종 스토리지로 사용, ② 마이그레이션 기간 동안 SMB를 통한 접근 유지.</p>
<p><strong>AWS Storage Gateway 파일 게이트웨이</strong>는 이 두 요구사항을 동시에 충족합니다:</p>
<ul>
<li>온프레미스에 게이트웨이 VM을 배포하여 SMB/NFS 인터페이스 제공</li>
<li>백엔드로 S3 버킷에 데이터를 저장 (S3가 실제 스토리지)</li>
<li>애플리케이션은 기존 SMB 방식으로 계속 접근 가능</li>
</ul>
<p><a href="https://aws.amazon.com/storagegateway/file/" target="_blank">AWS 공식 문서: Storage Gateway File Gateway</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — FSx for Windows는 S3 버킷을 스토리지로 사용하지 않습니다. 요구사항은 S3 버킷을 공유 스토리지로 사용해야 합니다.</p>
<p><span class="mark-no">❌ B</span> — S3로 단순 복사 시 SMB 접근이 불가능해집니다. 마이그레이션 기간 중 SMB 접근 유지 요구사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — AWS SMS는 서버 마이그레이션 도구이며, 최종 스토리지를 S3로 사용하는 요구사항을 충족하지 못합니다.</p>`,
    disc: [
      { ans: 'D (92%)', txt: 'Storage Gateway 파일 게이트웨이가 SMB 접근 유지와 S3 백엔드 저장이라는 두 요구사항을 동시에 충족.' },
    ],
  },
  {
    n: 426,
    en: `<p>A global company has a mobile app that displays ticket barcodes. Customers use the tickets on the mobile app to attend live events. Event scanners read the ticket barcodes and call a backend API to validate the barcode data against data in a database. After the barcode is scanned, the backend logic writes to the database's single table to mark the barcode as used.</p>
<p>The company needs to deploy the app on AWS with a DNS name of api.example.com. The company will host the database in three AWS Regions around the world.</p>
<p>Which solution will meet these requirements with the LOWEST latency?</p>`,
    ko: `<p>한 글로벌 기업이 티켓 바코드를 표시하는 모바일 앱을 보유하고 있습니다. 고객은 모바일 앱의 티켓으로 라이브 이벤트에 참석합니다. 이벤트 스캐너가 티켓 바코드를 읽고 백엔드 API를 호출하여 데이터베이스의 데이터와 비교해 바코드 데이터를 검증합니다. 바코드 스캔 후 백엔드 로직은 데이터베이스의 단일 테이블에 바코드를 사용됨으로 표시하는 쓰기를 수행합니다.</p>
<p>회사는 api.example.com이라는 DNS 이름으로 AWS에 앱을 배포해야 합니다. 전 세계 3개 AWS 리전에서 데이터베이스를 호스팅할 예정입니다.</p>
<p>가장 낮은 지연 시간으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Host the database on Amazon Aurora global database clusters. Host the backend on three Amazon Elastic Container Service (Amazon ECS) clusters that are in the same Regions as the database. Create an accelerator in AWS Global Accelerator to route requests to the nearest ECS cluster. Create an Amazon Route 53 record that maps api.example.com to the accelerator endpoint.', ko: 'Amazon Aurora 글로벌 데이터베이스 클러스터에 데이터베이스를 호스팅합니다. 데이터베이스와 동일한 리전의 3개 Amazon ECS 클러스터에 백엔드를 호스팅합니다. AWS Global Accelerator에서 가속기를 생성하여 가장 가까운 ECS 클러스터로 요청을 라우팅합니다. api.example.com을 가속기 엔드포인트에 매핑하는 Route 53 레코드를 생성합니다.' },
      { k: 'B', en: 'Host the database on Amazon Aurora global database clusters. Host the backend on three Amazon Elastic Kubernetes Service (Amazon EKS) clusters that are in the same Regions as the database. Create an Amazon CloudFront distribution with the three clusters as origins. Route requests to the nearest EKS cluster. Create an Amazon Route 53 record that maps api.example.com to the CloudFront distribution.', ko: 'Amazon Aurora 글로벌 데이터베이스 클러스터에 데이터베이스를 호스팅합니다. 3개 Amazon EKS 클러스터에 백엔드를 호스팅합니다. 세 클러스터를 오리진으로 사용하는 Amazon CloudFront 배포를 생성합니다. api.example.com을 CloudFront 배포에 매핑하는 Route 53 레코드를 생성합니다.' },
      { k: 'C', en: 'Host the database on Amazon DynamoDB global tables. Create an Amazon CloudFront distribution. Associate the CloudFront distribution with a CloudFront function that contains the backend logic to validate the barcodes. Create an Amazon Route 53 record that maps api.example.com to the CloudFront distribution.', ko: 'Amazon DynamoDB 글로벌 테이블에 데이터베이스를 호스팅합니다. Amazon CloudFront 배포를 생성합니다. 바코드 검증 백엔드 로직이 포함된 CloudFront 함수와 배포를 연결합니다. api.example.com을 CloudFront 배포에 매핑하는 Route 53 레코드를 생성합니다.' },
      { k: 'D', en: 'Host the database on Amazon DynamoDB global tables. Create an Amazon CloudFront distribution. Associate the CloudFront distribution with a Lambda@Edge function that contains the backend logic to validate the barcodes. Create an Amazon Route 53 record that maps api.example.com to the CloudFront distribution.', ko: 'Amazon DynamoDB 글로벌 테이블에 데이터베이스를 호스팅합니다. Amazon CloudFront 배포를 생성합니다. 바코드 검증 백엔드 로직이 포함된 Lambda@Edge 함수와 배포를 연결합니다. api.example.com을 CloudFront 배포에 매핑하는 Route 53 레코드를 생성합니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — DynamoDB 글로벌 테이블 + CloudFront + Lambda@Edge</span></p>
<p>최저 지연 시간을 위한 최적 조합입니다:</p>
<ul>
<li><strong>DynamoDB 글로벌 테이블</strong>: 단일 테이블에 대한 다중 리전 복제 및 로컬 읽기/쓰기 지원</li>
<li><strong>CloudFront</strong>: 전 세계 엣지 로케이션에서 요청 수신</li>
<li><strong>Lambda@Edge</strong>: CloudFront 엣지에서 실행되어 DynamoDB 조회/쓰기 등 실제 백엔드 로직 수행 가능. CloudFront 함수와 달리 외부 서비스(DynamoDB) 호출이 가능</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/networking-and-content-delivery/leveraging-external-data-in-lambdaedge/" target="_blank">AWS 블로그: Lambda@Edge에서 외부 데이터 활용</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Aurora 글로벌 DB와 ECS는 서버 프로비저닝/관리 오버헤드가 있으며, ECS 클러스터 수준의 지연이 Lambda@Edge 엣지 실행보다 높습니다.</p>
<p><span class="mark-no">❌ B</span> — EKS + CloudFront 조합은 CloudFront가 동적 API 요청을 캐싱하지 않아 실질적인 이점이 없으며, EKS 클러스터 관리 복잡도가 높습니다.</p>
<p><span class="mark-no">❌ C</span> — CloudFront 함수는 매우 경량으로 HTTP 헤더 조작 등에만 적합합니다. DynamoDB와 같은 외부 서비스를 호출하는 백엔드 로직은 실행할 수 없습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'CloudFront 함수는 외부 서비스 호출 불가. Lambda@Edge는 DynamoDB 조회/쓰기 가능하며 엣지에서 최저 지연 실현.' },
    ],
  },
  {
    n: 427,
    en: `<p>A medical company is running a REST API on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group behind an Application Load Balancer (ALB). The ALB runs in three public subnets, and the EC2 instances run in three private subnets. The company has deployed an Amazon CloudFront distribution that has the ALB as the only origin.</p>
<p>Which solution should a solutions architect recommend to enhance the origin security?</p>`,
    ko: `<p>한 의료 회사가 Amazon EC2 인스턴스 세트에서 REST API를 운영하고 있습니다. EC2 인스턴스는 ALB(Application Load Balancer) 뒤의 Auto Scaling 그룹에서 실행됩니다. ALB는 3개의 퍼블릭 서브넷에서, EC2 인스턴스는 3개의 프라이빗 서브넷에서 실행됩니다. 회사는 ALB를 유일한 오리진으로 사용하는 Amazon CloudFront 배포를 배포했습니다.</p>
<p>오리진 보안을 강화하기 위해 솔루션 아키텍트는 어떤 솔루션을 권장해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Store a random string in AWS Secrets Manager. Create an AWS Lambda function for automatic secret rotation. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Create an AWS WAF web ACL rule with a string match rule for the custom header. Associate the web ACL with the ALB.', ko: 'AWS Secrets Manager에 임의의 문자열을 저장합니다. 자동 시크릿 교체를 위한 Lambda 함수를 생성합니다. CloudFront가 오리진 요청에 임의 문자열을 커스텀 HTTP 헤더로 삽입하도록 구성합니다. 커스텀 헤더에 대한 문자열 일치 규칙을 갖는 AWS WAF 웹 ACL 규칙을 생성합니다. 웹 ACL을 ALB와 연결합니다.' },
      { k: 'B', en: 'Create an AWS WAF web ACL rule with an IP match condition of the CloudFront service IP address ranges. Associate the web ACL with the ALB. Move the ALB into the three private subnets.', ko: 'CloudFront 서비스 IP 주소 범위의 IP 일치 조건을 사용하는 AWS WAF 웹 ACL 규칙을 생성합니다. 웹 ACL을 ALB와 연결하고 ALB를 3개의 프라이빗 서브넷으로 이동합니다.' },
      { k: 'C', en: 'Store a random string in AWS Systems Manager Parameter Store. Configure Parameter Store automatic rotation for the string. Configure CloudFront to inject the random string as a custom HTTP header for the origin request. Inspect the value of the custom HTTP header, and block access in the ALB.', ko: 'AWS Systems Manager Parameter Store에 임의의 문자열을 저장합니다. Parameter Store 자동 교체를 구성합니다. CloudFront가 오리진 요청에 임의 문자열을 커스텀 HTTP 헤더로 삽입하도록 구성합니다. 커스텀 HTTP 헤더 값을 검사하여 ALB에서 접근을 차단합니다.' },
      { k: 'D', en: 'Configure AWS Shield Advanced. Create a security group policy to allow connections from CloudFront service IP address ranges. Add the policy to AWS Shield Advanced, and attach the policy to the ALB.', ko: 'AWS Shield Advanced를 구성합니다. CloudFront 서비스 IP 주소 범위에서의 연결을 허용하는 보안 그룹 정책을 생성합니다. 정책을 AWS Shield Advanced에 추가하고 ALB에 연결합니다.' },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — Secrets Manager + CloudFront 커스텀 헤더 + WAF</span></p>
<p>CloudFront 오리진 보안 강화의 모범 사례입니다. CloudFront에서만 알고 있는 시크릿 값을 커스텀 HTTP 헤더로 삽입하고, ALB 앞의 WAF가 해당 헤더를 검증하여 CloudFront를 거치지 않는 직접 접근을 차단합니다.</p>
<ul>
<li>Secrets Manager의 자동 교체로 시크릿 값이 주기적으로 갱신되어 보안 강화</li>
<li>WAF 문자열 일치 규칙으로 헤더 없는 요청 차단</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/security/how-to-enhance-amazon-cloudfront-origin-security-with-aws-waf-and-aws-secrets-manager/" target="_blank">AWS 보안 블로그: CloudFront 오리진 보안 강화</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — CloudFront IP 범위는 공개되어 있고 자주 변경되므로, IP 기반 허용 목록은 관리가 어렵고 CloudFront IP 범위를 아는 공격자가 우회할 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — Parameter Store는 자동 교체 기능이 없습니다(Secrets Manager의 기능). 또한 ALB 자체에서 HTTP 헤더 기반 접근 차단 규칙을 설정하는 것은 WAF 없이는 구현하기 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Shield Advanced는 DDoS 방어 서비스로 오리진 직접 접근 차단 목적에는 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'Secrets Manager 시크릿을 CloudFront 커스텀 헤더로 삽입 + WAF 검증이 오리진 보안 강화의 AWS 모범 사례.' },
    ],
  },
  {
    n: 428,
    en: `<p>To abide by industry regulations, a solutions architect must design a solution that will store a company's critical data in multiple public AWS Regions, including in the United States, where the company's headquarters is located. The solutions architect is required to provide access to the data stored in AWS to the company's global WAN network. The security team mandates that no traffic accessing this data should traverse the public internet.</p>
<p>How should the solutions architect design a highly available solution that meets the requirements and is cost-effective?</p>`,
    ko: `<p>업계 규정을 준수하기 위해 솔루션 아키텍트는 회사 본사가 위치한 미국을 포함하여 여러 퍼블릭 AWS 리전에 회사의 중요 데이터를 저장하는 솔루션을 설계해야 합니다. 솔루션 아키텍트는 AWS에 저장된 데이터에 대한 접근을 회사의 글로벌 WAN 네트워크에 제공해야 합니다. 보안 팀은 이 데이터에 접근하는 트래픽이 공용 인터넷을 통과해서는 안 된다고 규정합니다.</p>
<p>솔루션 아키텍트는 요구 사항을 충족하고 비용 효율적인 고가용성 솔루션을 어떻게 설계해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Establish AWS Direct Connect connections from the company headquarters to all AWS Regions in use. Use the company WAN to send traffic over to the headquarters and then to the respective DX connection to access the data.', ko: '회사 본사에서 사용 중인 모든 AWS 리전으로 AWS Direct Connect 연결을 설정합니다. 회사 WAN을 사용하여 트래픽을 본사로 보낸 다음 각 DX 연결로 보내 데이터에 접근합니다.' },
      { k: 'B', en: 'Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use inter-region VPC peering to access the data in other AWS Regions.', ko: '회사 본사에서 AWS 리전까지 두 개의 AWS Direct Connect 연결을 설정합니다. 회사 WAN을 사용하여 DX 연결을 통해 트래픽을 보냅니다. 다른 AWS 리전의 데이터에 접근하기 위해 리전 간 VPC 피어링을 사용합니다.' },
      { k: 'C', en: 'Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use an AWS transit VPC solution to access data in other AWS Regions.', ko: '회사 본사에서 AWS 리전까지 두 개의 AWS Direct Connect 연결을 설정합니다. 회사 WAN을 사용하여 DX 연결을 통해 트래픽을 보냅니다. AWS Transit VPC 솔루션을 사용하여 다른 AWS 리전의 데이터에 접근합니다.' },
      { k: 'D', en: 'Establish two AWS Direct Connect connections from the company headquarters to an AWS Region. Use the company WAN to send traffic over a DX connection. Use Direct Connect Gateway to access data in other AWS Regions.', ko: '회사 본사에서 AWS 리전까지 두 개의 AWS Direct Connect 연결을 설정합니다. 회사 WAN을 사용하여 DX 연결을 통해 트래픽을 보냅니다. Direct Connect Gateway를 사용하여 다른 AWS 리전의 데이터에 접근합니다.' },
    ],
    answer: ['D'],
    vote: '80% D',
    explain: `<p><span class="mark-ok">✅ D — 2개의 Direct Connect + Direct Connect Gateway</span></p>
<p>요구사항: 공용 인터넷 미사용, 고가용성, 비용 효율성, 다중 리전 접근.</p>
<ul>
<li><strong>2개의 DX 연결</strong>: 고가용성(중복성) 확보. 단일 DX는 단일 장애점</li>
<li><strong>Direct Connect Gateway</strong>: 단일 DX 연결에서 여러 AWS 리전의 VPC에 접근 가능. 리전별로 별도 DX를 설정하는 A보다 비용 효율적</li>
<li>Transit Gateway는 리전 서비스이므로 다중 리전 접근에는 Direct Connect Gateway가 적합</li>
</ul>
<p><a href="https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/direct-connect.html" target="_blank">AWS 백서: 확장 가능한 다중 VPC 네트워크</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 사용 중인 모든 리전에 DX를 별도로 설정하면 비용이 크게 증가하여 비용 효율적이지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — 리전 간 VPC 피어링은 다수의 VPC가 있을 때 관리 복잡도가 급증하고(N*(N-1)/2 피어링 관계), 전이적 라우팅을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Transit VPC는 레거시 솔루션으로, EC2에서 VPN 어플라이언스를 운영해야 하며 Transit Gateway 대비 관리 오버헤드가 높고 추가 비용이 발생합니다.</p>`,
    disc: [
      { ans: 'D (80%)', txt: 'DX Gateway는 단일 DX로 여러 리전 접근 가능. Transit Gateway는 리전 서비스라 다중 리전에는 DX Gateway가 적합.' },
      { ans: 'C (20%)', txt: 'Transit VPC도 다중 리전 접근 가능하나 EC2 기반 레거시 솔루션으로 관리 오버헤드가 높아 D가 우월.' },
    ],
  },
  {
    n: 429,
    en: `<p>A company has developed an application that is running Windows Server on VMware vSphere VMs that the company hosts on premises. The application data is stored in a proprietary format that must be read through the application. The company manually provisioned the servers and the application.</p>
<p>As part of its disaster recovery plan, the company wants the ability to host its application on AWS temporarily if the company's on-premises environment becomes unavailable. The company wants the application to return to on-premises hosting after a disaster recovery event is complete. The RPO is 5 minutes.</p>
<p>Which solution meets these requirements with the LEAST amount of operational overhead?</p>`,
    ko: `<p>한 회사가 온프레미스에서 호스팅하는 VMware vSphere VM의 Windows Server에서 실행되는 애플리케이션을 개발했습니다. 애플리케이션 데이터는 애플리케이션을 통해서만 읽어야 하는 독점 형식으로 저장됩니다. 회사는 서버와 애플리케이션을 수동으로 프로비저닝했습니다.</p>
<p>재해 복구 계획의 일환으로, 회사는 온프레미스 환경을 사용할 수 없게 될 경우 AWS에서 애플리케이션을 임시로 호스팅할 수 있는 기능을 원합니다. 재해 복구 이벤트 완료 후에는 애플리케이션이 온프레미스 호스팅으로 돌아가길 원합니다. RPO는 5분입니다.</p>
<p>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Configure AWS DataSync. Replicate the data to Amazon Elastic Block Store (Amazon EBS) volumes. When the on-premises environment is unavailable, use AWS CloudFormation templates to provision Amazon EC2 instances and attach the EBS volumes.', ko: 'AWS DataSync를 구성합니다. 데이터를 Amazon EBS 볼륨에 복제합니다. 온프레미스 환경을 사용할 수 없을 때 AWS CloudFormation 템플릿을 사용하여 EC2 인스턴스를 프로비저닝하고 EBS 볼륨을 연결합니다.' },
      { k: 'B', en: 'Configure AWS Elastic Disaster Recovery. Replicate the data to replication Amazon EC2 instances that are attached to Amazon Elastic Block Store (Amazon EBS) volumes. When the on-premises environment is unavailable, use Elastic Disaster Recovery to launch EC2 instances that use the replicated volumes.', ko: 'AWS Elastic Disaster Recovery를 구성합니다. 데이터를 Amazon EBS 볼륨에 연결된 복제 Amazon EC2 인스턴스에 복제합니다. 온프레미스 환경을 사용할 수 없을 때 Elastic Disaster Recovery를 사용하여 복제된 볼륨을 사용하는 EC2 인스턴스를 시작합니다.' },
      { k: 'C', en: 'Provision an AWS Storage Gateway file gateway. Replicate the data to an Amazon S3 bucket. When the on-premises environment is unavailable, use AWS Backup to restore the data to Amazon Elastic Block Store (Amazon EBS) volumes and launch Amazon EC2 instances from these EBS volumes.', ko: 'AWS Storage Gateway 파일 게이트웨이를 프로비저닝합니다. 데이터를 Amazon S3 버킷에 복제합니다. 온프레미스 환경을 사용할 수 없을 때 AWS Backup을 사용하여 데이터를 EBS 볼륨으로 복원하고 이 EBS 볼륨에서 EC2 인스턴스를 시작합니다.' },
      { k: 'D', en: 'Provision an Amazon FSx for Windows File Server file system on AWS. Replicate the data to the file system. When the on-premises environment is unavailable, use AWS CloudFormation templates to provision Amazon EC2 instances and use AWS::CloudFormation::Init commands to mount the Amazon FSx file shares.', ko: 'AWS에 Amazon FSx for Windows File Server 파일 시스템을 프로비저닝합니다. 데이터를 파일 시스템에 복제합니다. 온프레미스 환경을 사용할 수 없을 때 CloudFormation 템플릿으로 EC2 인스턴스를 프로비저닝하고 AWS::CloudFormation::Init 명령으로 FSx 파일 공유를 마운트합니다.' },
    ],
    answer: ['B'],
    vote: '89% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Elastic Disaster Recovery(DRS)</span></p>
<p>AWS Elastic Disaster Recovery는 VMware 포함 온프레미스 서버의 DR을 위해 설계된 전용 서비스입니다:</p>
<ul>
<li>에이전트를 설치하면 지속적인 블록 레벨 복제로 <strong>RPO 수 초~수 분</strong> 달성 (5분 RPO 충족)</li>
<li>장애 발생 시 원클릭 페일오버로 AWS에서 즉시 기동</li>
<li>DR 이벤트 완료 후 <strong>페일백(Failback)</strong> 기능으로 온프레미스 복귀 지원</li>
<li>인프라 프로비저닝/관리를 자동화하여 운영 오버헤드 최소화</li>
</ul>
<p><a href="https://aws.amazon.com/disaster-recovery/" target="_blank">AWS 공식 문서: Elastic Disaster Recovery</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — DataSync는 파일 데이터 전송 도구로 EBS 볼륨에 직접 복제하지 않습니다. CloudFormation으로 EC2를 수동 프로비저닝하는 것은 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ C</span> — S3 → EBS 복원 후 EC2 기동하는 과정은 복잡하고 시간이 오래 걸려 5분 RPO를 달성하기 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — FSx로 데이터를 복제하는 구체적인 방법이 없으며, CloudFormation으로 수동 프로비저닝하는 것은 DR 자동화 수준이 낮습니다.</p>`,
    disc: [
      { ans: 'B (89%)', txt: 'Elastic DRS는 지속적 복제, 자동 페일오버, 페일백을 모두 지원하며 운영 오버헤드 최소화. 5분 RPO 충족.' },
    ],
  },
  {
    n: 430,
    en: `<p>A company runs a highly available data collection application on Amazon EC2 in the eu-north-1 Region. The application collects data from end-user devices and writes records to an Amazon Kinesis data stream and a set of AWS Lambda functions that process the records. The company persists the output of the record processing to an Amazon S3 bucket in eu-north-1. The company uses the data in the S3 bucket as a data source for Amazon Athena.</p>
<p>The company wants to increase its global presence. A solutions architect must launch the data collection capabilities in the sa-east-1 and ap-northeast-1 Regions. The solutions architect deploys the application, the Kinesis data stream, and the Lambda functions in the two new Regions. The solutions architect keeps the S3 bucket in eu-north-1 to meet a requirement to centralize the data analysis.</p>
<p>During testing of the new setup, the solutions architect notices a significant lag on the arrival of data from the new Regions to the S3 bucket.</p>
<p>Which solution will improve this lag time the MOST?</p>`,
    ko: `<p>한 회사가 eu-north-1 리전의 Amazon EC2에서 고가용성 데이터 수집 애플리케이션을 운영합니다. 애플리케이션은 최종 사용자 기기에서 데이터를 수집하여 Amazon Kinesis 데이터 스트림과 레코드를 처리하는 AWS Lambda 함수 세트에 레코드를 씁니다. 회사는 레코드 처리 결과를 eu-north-1의 Amazon S3 버킷에 저장합니다. S3 버킷의 데이터를 Amazon Athena의 데이터 소스로 사용합니다.</p>
<p>회사는 글로벌 입지를 확대하고자 합니다. 솔루션 아키텍트는 sa-east-1 및 ap-northeast-1 리전에 데이터 수집 기능을 시작해야 합니다. 솔루션 아키텍트는 두 새 리전에 애플리케이션, Kinesis 데이터 스트림, Lambda 함수를 배포합니다. 데이터 분석을 중앙 집중화해야 하는 요구사항을 충족하기 위해 S3 버킷은 eu-north-1에 유지합니다.</p>
<p>새 설정을 테스트하는 동안 솔루션 아키텍트는 새 리전에서 S3 버킷으로의 데이터 도착에 상당한 지연이 있음을 발견했습니다.</p>
<p>이 지연 시간을 가장 많이 개선할 수 있는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'In each of the two new Regions, set up the Lambda functions to run in a VPC. Set up an S3 gateway endpoint in that VPC.', ko: '두 새 리전 각각에서 Lambda 함수가 VPC에서 실행되도록 설정합니다. 해당 VPC에 S3 게이트웨이 엔드포인트를 설정합니다.' },
      { k: 'B', en: 'Turn on S3 Transfer Acceleration on the S3 bucket in eu-north-1. Change the application to use the new S3 accelerated endpoint when the application uploads data to the S3 bucket.', ko: 'eu-north-1의 S3 버킷에서 S3 Transfer Acceleration을 켭니다. 애플리케이션이 S3 버킷에 데이터를 업로드할 때 새 S3 가속 엔드포인트를 사용하도록 변경합니다.' },
      { k: 'C', en: 'Create an S3 bucket in each of the two new Regions. Set the application in each new Region to upload to its respective S3 bucket. Set up S3 Cross-Region Replication to replicate data to the S3 bucket in eu-north-1.', ko: '두 새 리전 각각에 S3 버킷을 생성합니다. 각 새 리전의 애플리케이션이 해당 S3 버킷에 업로드하도록 설정합니다. eu-north-1의 S3 버킷으로 데이터를 복제하도록 S3 교차 리전 복제를 설정합니다.' },
      { k: 'D', en: 'Increase the memory requirements of the Lambda functions to ensure that they have multiple cores available. Use the multipart upload feature when the application uploads data to Amazon S3 from Lambda.', ko: 'Lambda 함수의 메모리 요구사항을 늘려 여러 코어를 사용할 수 있도록 합니다. Lambda에서 Amazon S3로 데이터를 업로드할 때 멀티파트 업로드 기능을 사용합니다.' },
    ],
    answer: ['C'],
    vote: '68% C / 32% B',
    explain: `<p><span class="mark-ok">✅ C — 로컬 S3 버킷 + S3 교차 리전 복제(CRR)</span></p>
<p><strong>핵심 이유: S3 Transfer Acceleration이 eu-north-1(스톡홀름) 리전에서 지원되지 않습니다.</strong></p>
<p>B 옵션처럼 보이지만, AWS 공식 문서에 따르면 eu-north-1은 S3 Transfer Acceleration 지원 리전 목록에 없습니다.</p>
<p>C는 지연 시간 개선의 핵심 원리를 따릅니다:</p>
<ul>
<li>sa-east-1, ap-northeast-1의 Lambda가 <strong>같은 리전</strong> S3 버킷에 업로드 → 리전 내 지연 최소화</li>
<li>S3 CRR이 비동기적으로 eu-north-1에 복제 → 업로드 지연 분리</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html" target="_blank">AWS 공식 문서: S3 Transfer Acceleration 지원 리전 확인</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — S3 Transfer Acceleration은 eu-north-1 리전에서 지원되지 않아 적용 불가합니다. 또한 Lambda에서 S3로의 업로드는 이미 AWS 내부 네트워크를 사용하므로 Transfer Acceleration의 효과가 제한적입니다.</p>
<p><span class="mark-no">❌ A</span> — S3 게이트웨이 엔드포인트는 같은 리전 내 S3 접근에만 사용 가능하며, 다른 리전의 S3 버킷 접근에는 효과가 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda 메모리 증가와 멀티파트 업로드는 대용량 파일 전송 최적화에는 도움이 되지만, 지리적 거리로 인한 네트워크 지연 근본 원인을 해결하지 못합니다.</p>`,
    disc: [
      { ans: 'C (68%)', txt: 'eu-north-1에서 S3 Transfer Acceleration 미지원. 로컬 버킷 업로드 후 CRR 복제가 지연 개선에 가장 효과적.' },
      { ans: 'B (32%)', txt: 'Transfer Acceleration이 직관적으로 맞아 보이나 eu-north-1 미지원으로 적용 불가. 시험 트릭 문제.' },
    ],
  },
];