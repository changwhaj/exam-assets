window.QS_SET48 = [
  {
    n: 471,
    en: `<p>A company uses AWS Organizations. The company runs two firewall appliances in a centralized networking account. Each firewall appliance runs on a manually configured highly available Amazon EC2 instance. A transit gateway connects the VPC from the centralized networking account to VPCs of member accounts. Each firewall appliance uses a static private IP address that is then used to route traffic from the member accounts to the internet.</p>
<p>During a recent incident, a badly configured script initiated the termination of both firewall appliances. During the rebuild of the firewall appliances, the company wrote a new script to configure the firewall appliances at startup.</p>
<p>The company wants to modernize the deployment of the firewall appliances. The firewall appliances need the ability to scale horizontally to handle increased traffic when the network expands. The company must continue to use the firewall appliances to comply with company policy. The provider of the firewall appliances has confirmed that the latest version of the firewall code will work with all AWS services.</p>
<p>Which combination of steps should the solutions architect recommend to meet these requirements MOST cost-effectively? (Choose three.)</p>`,
    ko: `<p>한 회사가 AWS Organizations를 사용합니다. 중앙 네트워킹 계정에서 두 개의 방화벽 어플라이언스를 실행합니다. 각 방화벽 어플라이언스는 수동으로 구성된 고가용성 Amazon EC2 인스턴스에서 실행됩니다. Transit Gateway는 중앙 집중식 네트워킹 계정의 VPC를 멤버 계정의 VPC에 연결합니다.</p>
<p>최근 사건에서 잘못 구성된 스크립트로 두 방화벽 장비가 모두 종료되었습니다. 재구축 중에 시작 시 방화벽 어플라이언스를 구성하는 새 스크립트를 작성했습니다.</p>
<p>회사는 방화벽 어플라이언스 배포를 현대화하려 합니다. 네트워크 확장 시 증가된 트래픽을 처리하기 위해 수평 확장이 필요합니다. 회사 정책 준수를 위해 방화벽 어플라이언스를 계속 사용해야 합니다.</p>
<p>가장 비용 효율적으로 이러한 요구사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: 'Deploy a Gateway Load Balancer in the centralized networking account. Set up an endpoint service that uses AWS PrivateLink.', ko: '중앙 네트워킹 계정에 Gateway Load Balancer를 배포합니다. AWS PrivateLink를 사용하는 엔드포인트 서비스를 설정합니다.' },
      { k: 'B', en: 'Deploy a Network Load Balancer in the centralized networking account. Set up an endpoint service that uses AWS PrivateLink.', ko: '중앙 네트워킹 계정에 Network Load Balancer를 배포합니다. AWS PrivateLink를 사용하는 엔드포인트 서비스를 설정합니다.' },
      { k: 'C', en: 'Create an Auto Scaling group and a launch template that uses the new script as user data to configure the firewall appliances. Create a target group that uses the instance target type.', ko: 'Auto Scaling 그룹과 새 스크립트를 사용자 데이터로 사용하는 시작 템플릿을 생성합니다. 인스턴스 대상 유형을 사용하는 대상 그룹을 생성합니다.' },
      { k: 'D', en: 'Create an Auto Scaling group. Configure an AWS Launch Wizard deployment that uses the new script as user data. Create a target group that uses the IP target type.', ko: 'Auto Scaling 그룹을 생성합니다. 새 스크립트를 사용자 데이터로 사용하는 AWS Launch Wizard 배포를 구성합니다. IP 대상 유형을 사용하는 대상 그룹을 생성합니다.' },
      { k: 'E', en: 'Create VPC endpoints in each member account. Update the route tables to point to the VPC endpoints.', ko: '각 멤버 계정에 VPC 엔드포인트를 생성합니다. VPC 엔드포인트를 가리키도록 라우팅 테이블을 업데이트합니다.' },
      { k: 'F', en: 'Create VPC endpoints in the centralized networking account. Update the route tables in each member account to point to the VPC endpoints.', ko: '중앙 네트워킹 계정에 VPC 엔드포인트를 생성합니다. 각 멤버 계정의 라우팅 테이블을 업데이트합니다.' },
    ],
    answer: ['A', 'C', 'F'],
    vote: '50% ACF / 38% ACE',
    explain: `<p><span class="mark-ok">✅ A — Gateway Load Balancer(GWLB) + PrivateLink 엔드포인트 서비스</span></p>
<p>방화벽 어플라이언스(네트워크 보안 장비) 배포의 AWS 모범 사례입니다. GWLB는 GENEVE 프로토콜로 트래픽 검사 장비에 투명하게 전달하며 수평 확장을 지원합니다.</p>
<p><span class="mark-ok">✅ C — Auto Scaling + 시작 템플릿(사용자 데이터) + 인스턴스 대상 그룹</span></p>
<p>ASG로 방화벽 어플라이언스의 자동 복구 및 수평 확장. 사용자 데이터로 새 스크립트를 적용하여 시작 시 자동 구성.</p>
<p><span class="mark-ok">✅ F — 중앙 네트워킹 계정에 VPC 엔드포인트 생성</span></p>
<p>TGW를 통해 멤버 계정 트래픽이 중앙 계정으로 이미 라우팅됩니다. 중앙 계정에 GWLB 엔드포인트를 한 번만 생성하면 비용 효율적입니다(E는 각 멤버 계정마다 VPCE 생성 → 비용 증가).</p>
<p><a href="https://aws.amazon.com/blogs/networking-and-content-delivery/centralized-inspection-architecture-with-aws-gateway-load-balancer-and-aws-transit-gateway/" target="_blank">AWS 블로그: GWLB + TGW 중앙 집중식 검사 아키텍처</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — NLB는 GENEVE 프로토콜을 지원하지 않습니다. 네트워크 트래픽 검사 장비에는 GWLB가 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Launch Wizard는 ASG와 통합되지 않습니다. EC2+EBS 배포 도구입니다.</p>
<p><span class="mark-no">❌ E</span> — 각 멤버 계정에 VPC 엔드포인트를 생성하면 AZ당 시간당 비용이 발생하여 멤버 계정 수 × AZ 수만큼 비용이 증가합니다. TGW가 있으므로 F(중앙 계정 VPCE)가 비용 효율적입니다.</p>`,
    disc: [
      { ans: 'ACF (50%)', txt: 'TGW 환경에서 중앙 계정 VPCE 1개 설치가 각 멤버 계정 VPCE(E)보다 비용 효율적.' },
      { ans: 'ACE (38%)', txt: 'GWLB 엔드포인트가 스포크 VPC에 있어야 한다는 아키텍처 참조 주장. 그러나 TGW+GWLB 중앙화 아키텍처에서는 F가 올바름.' },
    ],
  },
  {
    n: 472,
    en: `<p>A solutions architect must implement a multi-Region architecture for an Amazon RDS for PostgreSQL database that supports a web application. The database launches from an AWS CloudFormation template that includes AWS services and features that are present in both the primary and secondary Regions.</p>
<p>The database is configured for automated backups, and it has an RTO of 15 minutes and an RPO of 2 hours. The web application is configured to use an Amazon Route 53 record to route traffic to the database.</p>
<p>Which combination of steps will result in a highly available architecture that meets all the requirements? (Choose two.)</p>`,
    ko: `<p>솔루션 아키텍트는 웹 애플리케이션을 지원하는 Amazon RDS for PostgreSQL 데이터베이스에 대한 다중 리전 아키텍처를 구현해야 합니다. 데이터베이스는 기본 및 보조 리전에 모두 존재하는 CloudFormation 템플릿에서 시작됩니다.</p>
<p>자동 백업이 구성되어 있으며 RTO는 15분, RPO는 2시간입니다. 웹 애플리케이션은 Route 53 레코드를 사용하여 데이터베이스로 트래픽을 라우팅합니다.</p>
<p>모든 요구사항을 충족하는 고가용성 아키텍처를 구현하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Create a cross-Region read replica of the database in the secondary Region. Configure an AWS Lambda function in the secondary Region to promote the read replica during a failover event.', ko: '보조 리전에 교차 리전 읽기 전용 복제본을 생성합니다. 장애 조치 이벤트 중에 읽기 전용 복제본을 승격하도록 Lambda 함수를 구성합니다.' },
      { k: 'B', en: 'In the primary Region, create a health check on the database that will invoke an AWS Lambda function when a failure is detected. Program the Lambda function to recreate the database from the latest snapshot in the secondary Region and update Route 53 records.', ko: '기본 리전에서 장애 감지 시 Lambda 함수를 호출하는 상태 확인을 생성합니다. 보조 리전의 최신 스냅샷에서 DB를 재생성하고 Route 53 레코드를 업데이트하도록 Lambda를 구성합니다.' },
      { k: 'C', en: 'Create an AWS Lambda function to copy the latest automated backup to the secondary Region every 2 hours.', ko: '최신 자동 백업을 2시간마다 보조 리전에 복사하는 Lambda 함수를 생성합니다.' },
      { k: 'D', en: 'Create a failover routing policy in Route 53 for the database DNS record. Set the primary and secondary endpoints to the endpoints in each Region.', ko: 'Route 53에서 데이터베이스 DNS 레코드에 대한 장애 조치 라우팅 정책을 생성합니다. 기본 및 보조 엔드포인트를 각 리전의 엔드포인트로 설정합니다.' },
      { k: 'E', en: 'Create a hot standby database in the secondary Region. Use an AWS Lambda function to restore the secondary database to the latest RDS automatic backup in the event of a primary failure.', ko: '보조 리전에 상시 대기 데이터베이스를 생성합니다. 기본 DB 장애 시 최신 RDS 자동 백업으로 보조 DB를 복원하는 Lambda 함수를 사용합니다.' },
    ],
    answer: ['A', 'D'],
    vote: '100% AD',
    explain: `<p><span class="mark-ok">✅ A — 교차 리전 읽기 전용 복제본 + Lambda 승격</span></p>
<p>RDS 교차 리전 읽기 복제본은 RPO 2시간을 충족합니다(비동기 복제로 거의 실시간). Lambda 함수가 장애 조치 이벤트 발생 시 복제본을 독립형 DB로 승격하여 RTO 15분을 충족합니다.</p>
<p><span class="mark-ok">✅ D — Route 53 장애 조치 라우팅 정책</span></p>
<p>기본 리전 DB 장애 시 Route 53이 자동으로 보조 리전의 승격된 DB로 트래픽을 전환합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 스냅샷에서 DB를 새로 생성하는 데는 15분 RTO를 초과할 가능성이 높습니다. 또한 Lambda가 Route 53 레코드를 업데이트하는 구현이 복잡합니다.</p>
<p><span class="mark-no">❌ C</span> — 대기 DB 인스턴스 없이 백업만 복사하면 장애 시 스냅샷 복원이 필요하여 RTO 15분을 충족하기 어렵습니다.</p>
<p><span class="mark-no">❌ E</span> — 최신 자동 백업으로 복원하면 RPO 2시간은 충족할 수 있으나, 복원 시간이 RTO 15분을 초과할 수 있습니다.</p>`,
    disc: [
      { ans: 'AD (100%)', txt: '교차 리전 읽기 복제본(RPO 충족) + Lambda 승격(RTO 충족) + Route 53 장애 조치(자동 전환).' },
    ],
  },
  {
    n: 473,
    en: `<p>An ecommerce company runs an application on AWS. The application has an Amazon API Gateway API that invokes an AWS Lambda function. The data is stored in an Amazon RDS for PostgreSQL DB instance.</p>
<p>During the company's most recent flash sale, a sudden increase in API calls negatively affected the application's performance. A solutions architect reviewed the Amazon CloudWatch metrics during that time and noticed a significant increase in Lambda invocations and database connections. The CPU utilization also was high on the DB instance.</p>
<p>What should the solutions architect recommend to optimize the application's performance?</p>`,
    ko: `<p>한 전자상거래 회사가 AWS에서 애플리케이션을 운영합니다. 애플리케이션은 Lambda 함수를 호출하는 API Gateway API를 갖추고 있으며 데이터는 RDS for PostgreSQL에 저장됩니다.</p>
<p>최근 플래시 세일 중 API 호출이 갑자기 증가하여 성능에 부정적인 영향을 미쳤습니다. Lambda 호출과 데이터베이스 연결이 크게 증가했으며 DB 인스턴스의 CPU 사용률도 높았습니다.</p>
<p>솔루션 아키텍트는 애플리케이션 성능을 최적화하기 위해 무엇을 권장해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Increase the memory of the Lambda function. Modify the Lambda function to close the database connections when the data is retrieved.', ko: 'Lambda 함수의 메모리를 늘립니다. 데이터가 검색될 때 데이터베이스 연결을 닫도록 Lambda 함수를 수정합니다.' },
      { k: 'B', en: 'Add an Amazon ElastiCache for Redis cluster to store the frequently accessed data from the RDS database.', ko: 'Redis용 Amazon ElastiCache 클러스터를 추가하여 자주 액세스하는 데이터를 저장합니다.' },
      { k: 'C', en: 'Create an RDS proxy by using the Lambda console. Modify the Lambda function to use the proxy endpoint.', ko: 'Lambda 콘솔을 사용하여 RDS 프록시를 생성합니다. 프록시 엔드포인트를 사용하도록 Lambda 함수를 수정합니다.' },
      { k: 'D', en: 'Modify the Lambda function to connect to the database outside of the function\'s handler. Check for an existing database connection before creating a new connection.', ko: '함수 핸들러 외부에서 데이터베이스에 연결하도록 Lambda 함수를 수정합니다. 새 연결을 만들기 전에 기존 데이터베이스 연결을 확인합니다.' },
    ],
    answer: ['C'],
    vote: '73% C / 27% D',
    explain: `<p><span class="mark-ok">✅ C — RDS Proxy + Lambda 콘솔 연결</span></p>
<p>Lambda의 대규모 동시 호출로 인한 DB 연결 폭증 문제의 최적 해결책입니다:</p>
<ul>
<li><strong>Amazon RDS Proxy</strong>: Lambda 함수들의 수천 개 DB 연결을 소수의 연결로 풀링</li>
<li>Lambda 콘솔에서도 RDS Proxy 생성 가능 (Configuration → RDS databases → Add Proxy)</li>
<li>DB 연결 관리 자동화로 운영 오버헤드 없음</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/compute/using-amazon-rds-proxy-with-aws-lambda/" target="_blank">AWS 블로그: Lambda + RDS Proxy</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 메모리 증가는 Lambda 성능을 향상시키지만 DB 연결 수 폭증 문제는 해결하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — ElastiCache는 읽기 캐싱에 효과적이지만 DB 연결 수 문제의 직접적인 해결책이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — 핸들러 외부 연결 재사용은 단일 인스턴스 내에서만 효과가 있고, 수천 개의 Lambda 인스턴스가 동시 실행될 때는 여전히 대량의 연결이 생성됩니다.</p>`,
    disc: [
      { ans: 'C (73%)', txt: 'RDS Proxy가 Lambda 연결 폭증 문제의 전용 해결책. Lambda 콘솔에서도 생성 가능 확인됨.' },
      { ans: 'D (27%)', txt: '핸들러 외부 연결이 재사용을 개선한다고 주장. 그러나 대규모 동시 실행에는 Proxy가 더 효과적.' },
    ],
  },
  {
    n: 474,
    en: `<p>A retail company wants to improve its application architecture. The company's applications register new orders, handle returns of merchandise, and provide analytics. The applications store retail data in a MySQL database and an Oracle OLAP analytics database. All the applications and databases are hosted on Amazon EC2 instances.</p>
<p>Each application consists of several components that handle different parts of the order process. These components use incoming data from different sources. A separate ETL job runs every week and copies data from each application to the analytics database.</p>
<p>A solutions architect must redesign the architecture into an event-driven solution that uses serverless services. The solution must provide updated analytics in near real time.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 소매 회사가 애플리케이션 아키텍처를 개선하려고 합니다. 애플리케이션은 새로운 주문을 등록하고 상품 반품을 처리하며 분석을 제공합니다. MySQL 데이터베이스와 Oracle OLAP 분석 데이터베이스에 소매 데이터를 저장하며 모두 EC2에서 호스팅됩니다.</p>
<p>별도의 ETL 작업이 매주 실행되어 각 애플리케이션의 데이터를 분석 데이터베이스에 복사합니다.</p>
<p>솔루션 아키텍트는 서버리스 서비스를 사용하는 이벤트 기반 솔루션으로 아키텍처를 재설계해야 하며, 거의 실시간으로 업데이트된 분석을 제공해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Migrate the individual applications as microservices to Amazon ECS containers using AWS Fargate. Keep the retail MySQL database on Amazon EC2. Move the analytics database to Amazon Neptune. Use Amazon SQS to send all the incoming data to the microservices and the analytics database.', ko: 'ECS Fargate로 마이크로서비스 마이그레이션, MySQL은 EC2에 유지, 분석 DB는 Neptune으로 이동, SQS로 데이터 전송.' },
      { k: 'B', en: 'Create an Auto Scaling group for each application. Migrate the retail MySQL database and the analytics database to Amazon Aurora MySQL. Use Amazon SNS to send all the incoming data to the correct EC2 instances and the analytics database.', ko: '각 애플리케이션에 Auto Scaling 그룹을 생성하고 Aurora MySQL로 마이그레이션, SNS로 데이터 전송.' },
      { k: 'C', en: 'Migrate the individual applications as microservices to Amazon EKS containers using AWS Fargate. Migrate the retail MySQL database to Amazon Aurora Serverless MySQL. Migrate the analytics database to Amazon Redshift Serverless. Use Amazon EventBridge to send all the incoming data to the microservices and the analytics database.', ko: 'EKS Fargate로 마이크로서비스 마이그레이션, Aurora Serverless MySQL, Redshift Serverless, EventBridge로 데이터 전송.' },
      { k: 'D', en: 'Migrate the individual applications as microservices to Amazon AppStream 2.0. Migrate the retail MySQL database to Amazon Aurora MySQL. Migrate the analytics database to Amazon Redshift Serverless. Use AWS IoT Core to send all the incoming data to the microservices and the analytics database.', ko: 'AppStream 2.0으로 마이크로서비스 마이그레이션, Aurora MySQL, Redshift Serverless, IoT Core로 데이터 전송.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — EKS Fargate + Aurora Serverless + Redshift Serverless + EventBridge</span></p>
<p>"서버리스 + 이벤트 기반 + 거의 실시간 분석"을 모두 충족합니다:</p>
<ul>
<li><strong>EKS Fargate</strong>: 서버리스 컨테이너 오케스트레이션</li>
<li><strong>Aurora Serverless MySQL</strong>: 서버리스 관계형 DB</li>
<li><strong>Redshift Serverless</strong>: 서버리스 데이터 웨어하우스 (Oracle OLAP 대체)</li>
<li><strong>EventBridge</strong>: 이벤트 기반 라우팅으로 거의 실시간 분석 지원</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2에 MySQL이 있어 서버리스가 아닙니다. SQS는 거의 실시간이 아닌 큐 기반입니다. Neptune은 그래프 DB로 OLAP 분석에 부적합합니다.</p>
<p><span class="mark-no">❌ B</span> — EC2 기반 Auto Scaling 그룹은 서버리스가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — AppStream 2.0은 데스크톱 앱 스트리밍 서비스입니다. IoT Core는 IoT 장치용으로 마이크로서비스 라우팅에 부적합합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: '완전 서버리스(EKS Fargate + Aurora Serverless + Redshift Serverless) + EventBridge 이벤트 기반 아키텍처.' },
    ],
  },
  {
    n: 475,
    en: `<p>A company is planning a migration from an on-premises data center to the AWS Cloud. The company plans to use multiple AWS accounts that are managed in an organization in AWS Organizations. The company will create a small number of accounts initially and will add accounts as needed. A solutions architect must design a solution that turns on AWS CloudTrail in all AWS accounts.</p>
<p>What is the MOST operationally efficient solution that meets these requirements?</p>`,
    ko: `<p>한 회사가 온프레미스 데이터 센터에서 AWS 클라우드로 마이그레이션을 계획하고 있습니다. AWS Organizations의 조직에서 관리되는 여러 AWS 계정을 사용할 예정입니다. 처음에는 소수의 계정을 생성하고 필요에 따라 계정을 추가합니다. 솔루션 아키텍트는 모든 AWS 계정에서 CloudTrail을 활성화하는 솔루션을 설계해야 합니다.</p>
<p>이러한 요구사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an AWS Lambda function that creates a new CloudTrail trail in all AWS accounts in the organization. Invoke the Lambda function daily by using a scheduled action in Amazon EventBridge.', ko: '조직의 모든 AWS 계정에 새로운 CloudTrail 추적을 생성하는 Lambda 함수를 생성합니다. EventBridge로 매일 Lambda 함수를 호출합니다.' },
      { k: 'B', en: 'Create a new CloudTrail trail in the organization\'s management account. Configure the trail to log all events for all AWS accounts in the organization.', ko: '조직의 관리 계정에 새 CloudTrail 추적을 생성합니다. 조직의 모든 AWS 계정의 모든 이벤트를 기록하도록 추적을 구성합니다.' },
      { k: 'C', en: 'Create a new CloudTrail trail in all AWS accounts in the organization. Create new trails whenever a new account is created. Define an SCP that prevents deletion or modification of trails. Apply the SCP to the root OU.', ko: '조직의 모든 AWS 계정에 새로운 CloudTrail 추적을 생성합니다. 새 계정 생성 시마다 새 추적을 생성합니다. 추적 삭제/수정을 방지하는 SCP를 정의하고 루트 OU에 적용합니다.' },
      { k: 'D', en: 'Create an AWS Systems Manager Automation runbook that creates a CloudTrail trail in all AWS accounts in the organization. Invoke the automation by using Systems Manager State Manager.', ko: '조직의 모든 AWS 계정에서 CloudTrail 추적을 생성하는 Systems Manager Automation Runbook을 생성합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 관리 계정에서 조직 수준 CloudTrail 추적 생성</span></p>
<p>AWS Organizations의 CloudTrail 조직 추적 기능을 활용합니다:</p>
<ul>
<li>관리 계정에서 한 번만 설정하면 <strong>조직의 모든 현재 및 미래 계정에 자동 적용</strong></li>
<li>새 계정 추가 시 별도 설정 없이 자동으로 CloudTrail 활성화</li>
<li>운영 오버헤드 최소화</li>
</ul>
<p><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html" target="_blank">AWS 공식 문서: 조직 수준 CloudTrail 추적</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda로 일별 생성하는 것은 이미 존재하는 추적에 대한 중복 작업이 발생하고 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ C</span> — 새 계정마다 수동으로 추적을 생성하는 것은 운영 효율적이지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Systems Manager Automation은 B보다 복잡하며 조직 추적의 자동화 기능을 활용하지 않습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '조직 수준 CloudTrail 추적은 현재 및 미래 모든 계정에 자동 적용. 운영 오버헤드 최소.' },
    ],
  },
  {
    n: 476,
    en: `<p>A software development company has multiple engineers who are working remotely. The company is running Active Directory Domain Services (AD DS) on an Amazon EC2 instance. The company's security policy states that all internal, nonpublic services that are deployed in a VPC must be accessible through a VPN. Multi-factor authentication (MFA) must be used for access to a VPN.</p>
<p>What should a solutions architect do to meet these requirements?</p>`,
    ko: `<p>소프트웨어 개발 회사에 원격으로 작업하는 여러 엔지니어가 있습니다. Amazon EC2 인스턴스에서 AD DS(Active Directory Domain Services)를 실행하고 있습니다. 보안 정책에 따라 VPC에 배포된 모든 내부 비공개 서비스는 VPN을 통해 접근 가능해야 하며, VPN 접근에는 MFA가 사용되어야 합니다.</p>
<p>솔루션 아키텍트는 이러한 요구사항을 충족하기 위해 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an AWS Site-to-Site VPN connection. Configure integration between a VPN and AD DS. Use an Amazon WorkSpaces client with MFA support enabled to establish a VPN connection.', ko: 'AWS Site-to-Site VPN 연결을 생성합니다. VPN과 AD DS 간의 통합을 구성합니다. MFA 지원이 활성화된 Amazon WorkSpaces 클라이언트를 사용합니다.' },
      { k: 'B', en: 'Create an AWS Client VPN endpoint. Create an AD Connector directory for integration with AD DS. Enable MFA for AD Connector. Use AWS Client VPN to establish a VPN connection.', ko: 'AWS 클라이언트 VPN 엔드포인트를 생성합니다. AD DS 통합을 위한 AD 커넥터 디렉터리를 만듭니다. AD 커넥터에 대해 MFA를 활성화합니다.' },
      { k: 'C', en: 'Create multiple AWS Site-to-Site VPN connections by using AWS VPN CloudHub. Configure integration between AWS VPN CloudHub and AD DS. Use AWS Copilot to establish a VPN connection.', ko: 'AWS VPN CloudHub를 사용하여 여러 Site-to-Site VPN 연결을 생성합니다. AWS Copilot을 사용합니다.' },
      { k: 'D', en: 'Create an Amazon WorkLink endpoint. Configure integration between Amazon WorkLink and AD DS. Enable MFA in Amazon WorkLink. Use AWS Client VPN to establish a VPN connection.', ko: 'Amazon WorkLink 엔드포인트를 생성합니다. WorkLink와 AD DS 통합을 구성하고 MFA를 활성화합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Client VPN + AD Connector + MFA</span></p>
<p>원격 사용자를 위한 VPN + MFA + AD DS 통합의 표준 솔루션입니다:</p>
<ul>
<li><strong>AWS Client VPN</strong>: 원격 사용자가 VPC 리소스에 접근하는 관리형 VPN 서비스</li>
<li><strong>AD Connector</strong>: 기존 온프레미스 AD DS와 연동하는 디렉터리 서비스</li>
<li><strong>MFA 지원</strong>: AD Connector에서 MFA를 활성화하면 Client VPN 인증 시 MFA 적용</li>
</ul>
<p><a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/ad.html" target="_blank">AWS 공식 문서: Client VPN + Active Directory MFA</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Site-to-Site VPN은 네트워크 간 연결용이며 개별 사용자 VPN 접근에 적합하지 않습니다. WorkSpaces는 VPN이 아닌 가상 데스크톱 서비스입니다.</p>
<p><span class="mark-no">❌ C</span> — VPN CloudHub는 여러 온프레미스 사무소 연결용입니다. AWS Copilot은 컨테이너 배포 도구로 VPN과 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — WorkLink는 모바일 장치에서 내부 웹사이트 접근용이며 VPN 서비스가 아닙니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'Client VPN + AD Connector + MFA가 원격 사용자 VPN + AD 인증 + MFA의 표준 솔루션.' },
    ],
  },
  {
    n: 477,
    en: `<p>A company is running a three-tier web application in an on-premises data center. The frontend is served by an Apache web server, the middle tier is a monolithic Java application, and the storage tier is a PostgreSQL database.</p>
<p>During a recent marketing promotion, customers could not place orders because the application crashed. All three tiers were overloaded. The database reached its capacity limit because of read operations. The company already has several similar promotions scheduled in the near future.</p>
<p>A solutions architect must develop a plan for migration to AWS to resolve these issues. The solution must maximize scalability and must minimize operational effort.</p>
<p>Which combination of steps will meet these requirements? (Choose three.)</p>`,
    ko: `<p>한 회사가 온프레미스에서 3계층 웹 애플리케이션을 운영합니다. 프론트엔드는 Apache 웹 서버, 중간 계층은 모놀리식 Java 애플리케이션, 스토리지는 PostgreSQL 데이터베이스입니다.</p>
<p>최근 마케팅 프로모션 중 세 계층 모두 과부하가 발생하여 애플리케이션이 다운되었습니다. 데이터베이스는 읽기 작업으로 인해 용량 한계에 도달했습니다. 회사는 가까운 시일 내에 유사한 프로모션을 여러 개 계획하고 있습니다.</p>
<p>확장성을 극대화하고 운영 노력을 최소화하는 단계 조합은 무엇입니까? (3개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: 'Refactor the frontend so that static assets can be hosted on Amazon S3. Use Amazon CloudFront to serve the frontend to customers. Connect the frontend to the Java application.', ko: '정적 자산이 S3에서 호스팅될 수 있도록 프론트엔드를 리팩터링합니다. CloudFront를 사용하여 프론트엔드를 제공합니다.' },
      { k: 'B', en: 'Rehost the Apache web server of the frontend on Amazon EC2 instances in an Auto Scaling group. Use a load balancer. Use Amazon EFS to host the static assets.', ko: 'Auto Scaling 그룹의 EC2 인스턴스에서 Apache 웹 서버를 다시 호스팅합니다. 로드 밸런서와 EFS를 사용합니다.' },
      { k: 'C', en: 'Rehost the Java application in an AWS Elastic Beanstalk environment that includes auto scaling.', ko: 'Auto Scaling이 포함된 AWS Elastic Beanstalk 환경에서 Java 애플리케이션을 다시 호스팅합니다.' },
      { k: 'D', en: 'Refactor the Java application, develop a Docker container to run the Java application. Use AWS Fargate to host the container.', ko: 'Java 애플리케이션을 리팩터링하여 Docker 컨테이너로 개발합니다. AWS Fargate를 사용합니다.' },
      { k: 'E', en: 'Use AWS DMS to replatform the PostgreSQL database to an Amazon Aurora PostgreSQL database. Use Aurora Auto Scaling for read replicas.', ko: 'AWS DMS를 사용하여 PostgreSQL 데이터베이스를 Amazon Aurora PostgreSQL로 플랫폼을 변경합니다. 읽기 복제본에는 Aurora Auto Scaling을 사용합니다.' },
      { k: 'F', en: 'Rehost the PostgreSQL database on an Amazon EC2 instance that has twice as much memory as the on-premises server.', ko: '온프레미스 서버보다 메모리가 두 배 많은 EC2 인스턴스에 PostgreSQL 데이터베이스를 다시 호스팅합니다.' },
    ],
    answer: ['A', 'C', 'E'],
    vote: '78% ACE',
    explain: `<p><span class="mark-ok">✅ A — S3 + CloudFront 프론트엔드</span></p>
<p>정적 자산을 S3/CloudFront로 이동하면 웹 서버 부하를 크게 줄이고 글로벌 엣지 캐싱으로 성능 향상.</p>
<p><span class="mark-ok">✅ C — Elastic Beanstalk (Auto Scaling 포함)</span></p>
<p>코드 변경 최소화로 Java 앱을 관리형 환경에 배포. 자동 확장, 로드 밸런싱, 상태 모니터링 포함. 운영 오버헤드 최소화.</p>
<p><span class="mark-ok">✅ E — Aurora PostgreSQL + Aurora Auto Scaling(읽기 복제본)</span></p>
<p>읽기 과부하 해결의 핵심. Aurora Auto Scaling이 읽기 복제본을 자동으로 추가/제거하여 읽기 용량 확장.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — EC2 기반 Apache 서버는 S3/CloudFront보다 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ D</span> — Fargate 컨테이너화는 코드 리팩터링이 필요하며, Beanstalk보다 운영 노력이 더 큽니다. 또한 서비스 자동 확장이 명시되지 않았습니다.</p>
<p><span class="mark-no">❌ F</span> — EC2에 PostgreSQL 직접 설치는 읽기 확장이 불가능하고 운영 오버헤드가 큽니다.</p>`,
    disc: [
      { ans: 'ACE (78%)', txt: 'S3/CF로 프론트엔드 확장 + Beanstalk로 앱 계층 관리 + Aurora+Aurora AS로 DB 읽기 확장. 운영 최소화.' },
    ],
  },
  {
    n: 478,
    en: `<p>A company is deploying a new application on AWS. The application consists of an Amazon Elastic Kubernetes Service (Amazon EKS) cluster and an Amazon Elastic Container Registry (Amazon ECR) repository. The EKS cluster has an AWS managed node group.</p>
<p>The company's security guidelines state that all resources on AWS must be continuously scanned for security vulnerabilities.</p>
<p>Which solution will meet this requirement with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 AWS에 새로운 애플리케이션을 배포하고 있습니다. 애플리케이션은 Amazon EKS 클러스터와 Amazon ECR 저장소로 구성됩니다. EKS 클러스터에는 AWS 관리형 노드 그룹이 있습니다.</p>
<p>보안 지침에는 AWS의 모든 리소스에 보안 취약성이 있는지 지속적으로 검사해야 한다고 명시되어 있습니다.</p>
<p>최소한의 운영 오버헤드로 이 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Activate AWS Security Hub. Configure Security Hub to scan the EKS nodes and the ECR repository.', ko: 'AWS 보안 허브를 활성화합니다. EKS 노드와 ECR 저장소를 스캔하도록 Security Hub를 구성합니다.' },
      { k: 'B', en: 'Activate Amazon Inspector to scan the EKS nodes and the ECR repository.', ko: 'Amazon Inspector를 활성화하여 EKS 노드와 ECR 저장소를 스캔합니다.' },
      { k: 'C', en: 'Launch a new Amazon EC2 instance and install a vulnerability scanning tool from AWS Marketplace. Configure the EC2 instance to scan the EKS nodes. Configure Amazon ECR to perform a basic scan on push.', ko: '새 EC2 인스턴스를 시작하고 취약점 검색 도구를 설치합니다. EC2 인스턴스를 구성하고 ECR을 푸시 시 기본 스캔을 수행하도록 구성합니다.' },
      { k: 'D', en: 'Install the Amazon CloudWatch agent on the EKS nodes. Configure the CloudWatch agent to scan continuously. Configure Amazon ECR to perform a basic scan on push.', ko: 'EKS 노드에 CloudWatch 에이전트를 설치하고 지속적으로 검색하도록 구성합니다. ECR을 푸시 시 기본 스캔을 수행하도록 구성합니다.' },
    ],
    answer: ['B'],
    vote: '85% B / 15% A',
    explain: `<p><span class="mark-ok">✅ B — Amazon Inspector 활성화</span></p>
<p>Amazon Inspector는 EKS 노드(EC2 인스턴스)와 ECR 컨테이너 이미지를 지속적으로 자동 스캔합니다:</p>
<ul>
<li><strong>EKS 노드(EC2)</strong>: 의도하지 않은 네트워크 접근성 및 소프트웨어 취약성 스캔</li>
<li><strong>ECR 저장소</strong>: 컨테이너 이미지 취약성 지속적 스캔</li>
<li>활성화만 하면 자동으로 스캔 → 운영 오버헤드 최소</li>
</ul>
<p><a href="https://docs.aws.amazon.com/eks/latest/userguide/configuration-vulnerability-analysis.html" target="_blank">AWS 공식 문서: EKS Inspector 취약성 분석</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Security Hub는 다른 서비스(Inspector, Config, Macie 등)의 검색 결과를 집계하는 서비스로, 직접 스캔하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 별도 EC2에 도구 설치는 운영 오버헤드가 큽니다. ECR 기본 스캔은 더 이상 사용되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudWatch 에이전트는 메트릭/로그 수집 도구로 취약성 스캔 기능이 없습니다.</p>`,
    disc: [
      { ans: 'B (85%)', txt: 'Amazon Inspector가 EC2(EKS 노드) + ECR 자동 지속 스캔. 활성화만으로 운영 오버헤드 없음.' },
      { ans: 'A (15%)', txt: 'Security Hub가 EKS를 직접 스캔할 수 있다고 주장. 그러나 Security Hub는 집계자임.' },
    ],
  },
  {
    n: 479,
    en: `<p>A company needs to improve the reliability of its ticketing application. The application runs on an Amazon Elastic Container Service (Amazon ECS) cluster. The company uses Amazon CloudFront to serve the application. A single ECS service of the ECS cluster is the CloudFront distribution's origin.</p>
<p>The application allows only a specific number of active users to enter a ticket purchasing flow. These users are identified by an encrypted attribute in their JSON Web Token (JWT). All other users are redirected to a waiting room module until there is available capacity for purchasing.</p>
<p>The application is experiencing high loads. The waiting room module is working as designed, but load on the waiting room is disrupting the application's availability. This disruption is negatively affecting the application's ticket sale transactions.</p>
<p>Which solution will provide the MOST reliability for ticket sale transactions during periods of high load?</p>`,
    ko: `<p>한 회사가 티켓팅 애플리케이션의 신뢰성을 향상시켜야 합니다. 애플리케이션은 ECS 클러스터에서 실행되며 CloudFront를 통해 제공됩니다. 단일 ECS 서비스가 CloudFront 배포의 오리진입니다.</p>
<p>특정 수의 활성 사용자만 티켓 구매 흐름에 참여할 수 있으며, JWT의 암호화된 속성으로 식별됩니다. 다른 사용자는 대기실 모듈로 리디렉션됩니다.</p>
<p>높은 부하 중 대기실 부하로 인해 애플리케이션 가용성이 저하되어 티켓 판매에 부정적 영향을 미치고 있습니다.</p>
<p>높은 부하 기간 동안 티켓 판매 거래에 가장 높은 신뢰성을 제공하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a separate service in the ECS cluster for the waiting room. Use a separate scaling configuration. Ensure that the ticketing service uses the JWT information and appropriately forwards requests to the waiting room service.', ko: 'ECS 클러스터에 대기실용으로 별도의 서비스를 생성합니다. 별도의 확장 구성을 사용합니다. 티켓 서비스가 JWT 정보를 사용하고 요청을 대기실 서비스에 적절하게 전달하도록 합니다.' },
      { k: 'B', en: 'Move the application to an Amazon EKS cluster. Split the waiting room module into a pod separate from the ticketing pod. Make the ticketing pod part of a StatefulSet. Ensure that the ticketing pod uses the JWT information.', ko: 'EKS 클러스터로 이동합니다. 대기실을 별도의 포드로 분리합니다. 티켓팅 포드를 StatefulSet으로 만듭니다.' },
      { k: 'C', en: 'Create a separate service in the ECS cluster for the waiting room. Use a separate scaling configuration. Create a CloudFront function that inspects the JWT information and appropriately forwards requests to the ticketing service or the waiting room service.', ko: 'ECS 클러스터에 대기실용으로 별도의 서비스를 생성합니다. 별도의 확장 구성을 사용합니다. JWT 정보를 검사하고 티켓 서비스 또는 대기실 서비스에 요청을 전달하는 CloudFront 함수를 생성합니다.' },
      { k: 'D', en: 'Move the application to an Amazon EKS cluster. Split the waiting room module into a separate pod. Use AWS App Mesh with mTLS authentication for communication between pods. Ensure that the ticketing pod uses JWT information.', ko: 'EKS 클러스터로 이동합니다. 대기실 모듈을 별도의 포드로 분리합니다. mTLS 인증 및 서비스 간 인증을 위해 AWS App Mesh를 사용합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — ECS 대기실 분리 서비스 + CloudFront 함수(JWT 검사)</span></p>
<p>핵심 문제: 단일 ECS 서비스에서 대기실 부하가 티켓팅 서비스까지 영향을 미침.</p>
<ul>
<li><strong>대기실 분리 ECS 서비스</strong>: 독립적인 확장 구성으로 대기실 부하가 티켓팅 서비스에 영향을 미치지 않도록 격리</li>
<li><strong>CloudFront 함수</strong>: JWT 토큰 검사 후 오리진 레벨에서 요청을 라우팅. CloudFront 엣지에서 분기하므로 티켓팅 서비스에 불필요한 요청이 전혀 도달하지 않음</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html" target="_blank">AWS 공식 문서: CloudFront Functions - JWT 검증</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 대기실을 분리하는 것은 맞지만, 티켓 서비스가 여전히 모든 요청을 받아 JWT를 검사한 후 대기실로 전달합니다. CloudFront 레벨에서 분기(C)보다 신뢰성이 낮습니다.</p>
<p><span class="mark-no">❌ B, D</span> — EKS로 이전은 큰 아키텍처 변경이며 요구사항 해결에 과도합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'CloudFront 함수로 JWT 검사 + 오리진 수준 라우팅으로 티켓팅 서비스를 대기실 부하로부터 완전히 격리.' },
    ],
  },
  {
    n: 480,
    en: `<p>A solutions architect is creating an AWS CloudFormation template from an existing manually created non-production AWS environment. The CloudFormation template can be destroyed and recreated as needed. The environment contains an Amazon EC2 instance. The EC2 instance has an instance profile that the EC2 instance uses to assume a role in a parent account.</p>
<p>The solutions architect recreates the role in a CloudFormation template and uses the same role name. When the CloudFormation template is launched in the child account, the EC2 instance can no longer assume the role in the parent account because of insufficient permissions.</p>
<p>What should the solutions architect do to resolve this issue?</p>`,
    ko: `<p>솔루션 아키텍트가 수동으로 생성된 기존 비운영 AWS 환경에서 CloudFormation 템플릿을 만들고 있습니다. EC2 인스턴스에는 EC2 인스턴스가 상위 계정에서 역할을 맡는 데 사용하는 인스턴스 프로필이 있습니다.</p>
<p>솔루션 아키텍트는 CloudFormation 템플릿에서 동일한 역할 이름으로 역할을 재생성합니다. 하위 계정에서 CloudFormation 템플릿이 시작되면 EC2 인스턴스는 권한이 부족하여 상위 계정에서 역할을 더 이상 맡을 수 없습니다.</p>
<p>이 문제를 해결하기 위해 솔루션 아키텍트는 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'In the parent account, edit the trust policy for the role that the EC2 instance needs to assume. Ensure that the target role ARN in the existing statement that allows the sts:AssumeRole action is correct. Save the trust policy.', ko: '상위 계정에서 EC2 인스턴스가 맡아야 하는 역할에 대한 신뢰 정책을 편집합니다. sts:AssumeRole 작업을 허용하는 기존 명령문의 대상 역할 ARN이 올바른지 확인합니다. 신뢰 정책을 저장합니다.' },
      { k: 'B', en: 'In the parent account, edit the trust policy for the role that the EC2 instance needs to assume. Add a statement that allows the sts:AssumeRole action for the root principal of the child account. Save the trust policy.', ko: '상위 계정에서 EC2 인스턴스가 맡아야 하는 역할에 대한 신뢰 정책을 편집합니다. 하위 계정의 루트 주체에 대해 sts:AssumeRole 작업을 허용하는 명령문을 추가합니다.' },
      { k: 'C', en: 'Update the CloudFormation stack again. Specify only the CAPABILITY_NAMED_IAM capability.', ko: 'CloudFormation 스택을 다시 업데이트합니다. CAPABILITY_NAMED_IAM 기능만 지정합니다.' },
      { k: 'D', en: 'Update the CloudFormation stack again. Specify the CAPABILITY_IAM capability and the CAPABILITY_NAMED_IAM capability.', ko: 'CloudFormation 스택을 다시 업데이트합니다. CAPABILITY_IAM 기능과 CAPABILITY_NAMED_IAM 기능을 지정합니다.' },
    ],
    answer: ['A'],
    vote: '64% A / 29% B',
    explain: `<p><span class="mark-ok">✅ A — 상위 계정의 신뢰 정책에서 대상 역할 ARN 수정</span></p>
<p>핵심 원인: CloudFormation으로 역할을 재생성하면 <strong>역할 ARN이 변경됩니다</strong>. 이름이 같아도 ARN의 일부(예: unique ID)가 달라집니다.</p>
<p>상위 계정의 신뢰 정책에서 <code>sts:AssumeRole</code>을 허용하는 Principal이 구 ARN을 참조하고 있다면, 새 ARN으로 업데이트해야 합니다.</p>
<p><strong>B가 아닌 이유:</strong> 루트 주체(<code>arn:aws:iam::account-id:root</code>)를 추가하면 하위 계정의 모든 주체가 역할을 맡을 수 있게 되어 보안 위험이 발생합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 루트 주체를 신뢰 정책에 추가하면 하위 계정의 모든 IAM 사용자/역할이 역할을 맡을 수 있게 되어 최소 권한 원칙에 위배됩니다.</p>
<p><span class="mark-no">❌ C, D</span> — CAPABILITY_NAMED_IAM/CAPABILITY_IAM은 사용자 정의 이름의 IAM 리소스를 생성할 때 필요한 CloudFormation 기능 플래그입니다. 교차 계정 역할 신뢰 문제와는 무관합니다.</p>`,
    disc: [
      { ans: 'A (64%)', txt: 'CloudFormation 역할 재생성 시 ARN 변경 → 상위 계정 신뢰 정책의 ARN 업데이트 필요.' },
      { ans: 'B (29%)', txt: '루트 주체 추가로 하위 계정 전체 접근 허용. 그러나 보안 위험으로 A가 올바른 접근.' },
    ],
  },
];