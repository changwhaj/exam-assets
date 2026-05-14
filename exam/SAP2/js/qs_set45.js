window.QS_SET45 = [
  {
    n: 441,
    en: `<p>A company has multiple lines of business (LOBs) that roll up to the parent company. The company has asked its solutions architect to develop a solution with the following requirements:</p>
<ul>
<li>Produce a single AWS invoice for all of the AWS accounts used by its LOBs.</li>
<li>The costs for each LOB account should be broken out on the invoice.</li>
<li>Provide the ability to restrict services and features in the LOB accounts, as defined by the company's governance policy.</li>
<li>Each LOB account should be delegated full administrator permissions, regardless of the governance policy.</li>
</ul>
<p>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)</p>`,
    ko: `<p>한 회사에 여러 사업 부문(LOB)이 있으며 모회사에 귀속됩니다. 회사는 솔루션 아키텍트에게 다음 요구사항으로 솔루션을 개발하도록 요청했습니다:</p>
<ul>
<li>LOB에서 사용하는 모든 AWS 계정에 대해 단일 AWS 청구서를 생성합니다.</li>
<li>각 LOB 계정의 비용은 청구서에서 구분되어야 합니다.</li>
<li>회사의 거버넌스 정책에 정의된 대로 LOB 계정의 서비스 및 기능을 제한하는 기능을 제공합니다.</li>
<li>각 LOB 계정은 거버넌스 정책에 관계없이 전체 관리자 권한을 위임받아야 합니다.</li>
</ul>
<p>이러한 요구사항을 충족하기 위해 솔루션 아키텍트는 어떤 단계 조합을 수행해야 합니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Use AWS Organizations to create an organization in the parent account for each LOB. Then invite each LOB account to the appropriate organization.', ko: 'AWS Organizations를 사용하여 각 LOB의 상위 계정에 조직을 생성합니다. 그런 다음 각 LOB 계정을 해당 조직에 초대합니다.' },
      { k: 'B', en: 'Use AWS Organizations to create a single organization in the parent account. Then, invite each LOB\'s AWS account to join the organization.', ko: 'AWS Organizations를 사용하여 상위 계정에 단일 조직을 생성합니다. 그런 다음 각 LOB의 AWS 계정을 조직에 가입하도록 초대합니다.' },
      { k: 'C', en: 'Implement service quotas to define the services and features that are permitted and apply the quotas to each LOB as appropriate.', ko: '서비스 할당량을 구현하여 허용되는 서비스와 기능을 정의하고 각 LOB에 적절히 할당량을 적용합니다.' },
      { k: 'D', en: 'Create an SCP that allows only approved services and features, then apply the policy to the LOB accounts.', ko: '승인된 서비스 및 기능만 허용하는 SCP를 생성한 다음 LOB 계정에 정책을 적용합니다.' },
      { k: 'E', en: 'Enable consolidated billing in the parent account\'s billing console and link the LOB accounts.', ko: '상위 계정의 결제 콘솔에서 통합 결제를 활성화하고 LOB 계정을 연결합니다.' },
    ],
    answer: ['B', 'E'],
    vote: '48% BE / 44% BD',
    explain: `<p><span class="mark-ok">✅ B — AWS Organizations 단일 조직 생성 + 계정 초대</span></p>
<p>단일 AWS 청구서를 생성하고 비용을 계정별로 구분하려면 AWS Organizations가 필요합니다. 상위 계정에 단일 조직을 생성하고 모든 LOB 계정을 초대합니다.</p>
<p><span class="mark-ok">✅ E — 통합 결제 활성화</span></p>
<p>통합 결제(Consolidated Billing)를 통해 단일 청구서에서 각 LOB 계정의 비용을 구분하여 확인할 수 있습니다.</p>
<p><strong>D가 아닌 이유:</strong> 마지막 요구사항인 "거버넌스 정책에 관계없이 전체 관리자 권한 위임"과 SCP 적용이 충돌할 수 있습니다. SCP는 계정의 루트 사용자를 포함한 모든 사용자의 권한을 제한하므로, 거버넌스 정책과 무관하게 전체 관리자 권한을 부여하는 것과 상충됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — LOB별로 별도의 조직을 생성하면 단일 청구서 요구사항을 충족할 수 없습니다. 단일 조직(B)이 올바른 접근입니다.</p>
<p><span class="mark-no">❌ C</span> — 서비스 할당량은 요청 수 등을 제한하는 것으로, 서비스/기능을 거버넌스 정책에 따라 제한하는 SCP와 달리 거버넌스 도구로 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — SCP는 "거버넌스 정책에 관계없이 전체 관리자 권한 위임"이라는 마지막 요구사항과 충돌합니다. SCP는 관리자 권한도 제한할 수 있습니다.</p>`,
    disc: [
      { ans: 'BE (48%)', txt: 'D의 SCP가 마지막 요구사항(거버넌스 무관 전체 관리자 권한)과 충돌. B+E로 단일 청구서 + 비용 구분 달성.' },
      { ans: 'BD (44%)', txt: 'SCP에서 관리자 계정 예외를 허용 가능. B로 조직 구성, D로 거버넌스 구현 주장.' },
    ],
  },
  {
    n: 442,
    en: `<p>A solutions architect has deployed a web application that serves users across two AWS Regions under a custom domain. The application uses Amazon Route 53 latency-based routing. The solutions architect has associated weighted record sets with a pair of web servers in separate Availability Zones for each Region.</p>
<p>The solutions architect runs a disaster recovery scenario. When all the web servers in one Region are stopped, Route 53 does not automatically redirect users to the other Region.</p>
<p>Which of the following are possible root causes of this issue? (Choose two.)</p>`,
    ko: `<p>솔루션 아키텍트가 사용자 정의 도메인으로 두 AWS 리전에서 사용자에게 서비스하는 웹 애플리케이션을 배포했습니다. 애플리케이션은 Amazon Route 53 지연 시간 기반 라우팅을 사용합니다. 솔루션 아키텍트는 각 리전의 별도 가용 영역에 있는 웹 서버 쌍과 가중치 기반 레코드 세트를 연결했습니다.</p>
<p>솔루션 아키텍트가 재해 복구 시나리오를 실행합니다. 한 리전의 모든 웹 서버가 중지되면 Route 53이 자동으로 사용자를 다른 리전으로 리디렉션하지 않습니다.</p>
<p>다음 중 이 문제의 가능한 근본 원인은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'The weight for the Region where the web servers were stopped is higher than the weight for the other Region.', ko: '웹 서버가 중지된 리전의 가중치가 다른 리전의 가중치보다 높습니다.' },
      { k: 'B', en: 'One of the web servers in the secondary Region did not pass its HTTP health check.', ko: '보조 리전의 웹 서버 중 하나가 HTTP 상태 확인을 통과하지 못했습니다.' },
      { k: 'C', en: 'Latency resource record sets cannot be used in combination with weighted resource record sets.', ko: '지연 시간 리소스 레코드 세트는 가중치 기반 리소스 레코드 세트와 함께 사용할 수 없습니다.' },
      { k: 'D', en: 'The setting to evaluate target health is not turned on for the latency alias resource record set that is associated with the domain in the Region where the web servers were stopped.', ko: '웹 서버가 중지된 리전에서 도메인과 연결된 지연 시간 별칭 리소스 레코드 세트에 대해 대상 상태 평가 설정이 켜져 있지 않습니다.' },
      { k: 'E', en: 'An HTTP health check has not been set up for one or more of the weighted resource record sets associated with the stopped web servers.', ko: '중지된 웹 서버와 연결된 하나 이상의 가중치 기반 리소스 레코드 세트에 대해 HTTP 상태 확인이 설정되지 않았습니다.' },
    ],
    answer: ['D', 'E'],
    vote: '100% DE',
    explain: `<p><span class="mark-ok">✅ D — 지연 시간 별칭 레코드의 대상 상태 평가 미설정</span></p>
<p>Route 53 별칭 레코드(Alias Record)에서 "Evaluate Target Health"가 비활성화되면, 별칭이 가리키는 가중치 레코드들이 모두 비정상이어도 Route 53이 이를 무시하고 계속 해당 리전으로 트래픽을 보냅니다.</p>
<p><span class="mark-ok">✅ E — 가중치 기반 레코드에 상태 확인 미설정</span></p>
<p>가중치 기반 레코드 세트에 상태 확인이 연결되지 않으면, 서버가 중지되어도 Route 53은 해당 레코드를 계속 정상으로 간주하고 트래픽을 라우팅합니다.</p>
<p><a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html" target="_blank">AWS 공식 문서: Route 53 복잡한 장애 조치 구성</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 가중치의 상대적 크기는 트래픽 비율을 결정하지만, 자동 장애 조치 여부와는 무관합니다.</p>
<p><span class="mark-no">❌ B</span> — 보조 리전의 상태 확인 실패는 트래픽이 증가하는 방향의 문제가 아닙니다. 문제는 중지된 리전으로 계속 트래픽이 전달되는 것입니다.</p>
<p><span class="mark-no">❌ C</span> — Route 53에서 지연 시간 기반 라우팅과 가중치 기반 라우팅을 함께 사용하는 것은 완전히 지원됩니다.</p>`,
    disc: [
      { ans: 'DE (100%)', txt: '별칭 레코드의 "Evaluate Target Health" 미설정 + 가중치 레코드 상태 확인 미설정이 자동 장애 조치 실패의 두 가지 근본 원인.' },
    ],
  },
  {
    n: 443,
    en: `<p>A flood monitoring agency has deployed more than 10,000 water-level monitoring sensors. Sensors send continuous data updates, and each update is less than 1 MB in size. The agency has a fleet of on-premises application servers. These servers receive updates from the sensors, convert the raw data into a human readable format, and write the results to an on-premises relational database server. Data analysts then use simple SQL queries to monitor the data.</p>
<p>The agency wants to increase overall application availability and reduce the effort that is required to perform maintenance tasks. These maintenance tasks, which include updates and patches to the application servers, cause downtime. While an application server is down, data is lost from sensors because the remaining servers cannot handle the entire workload.</p>
<p>The agency wants a solution that optimizes operational overhead and costs. A solutions architect recommends the use of AWS IoT Core to collect the sensor data.</p>
<p>What else should the solutions architect recommend to meet these requirements?</p>`,
    ko: `<p>홍수 모니터링 기관이 10,000개 이상의 수위 모니터링 센서를 배치했습니다. 센서는 지속적인 데이터 업데이트를 보내며 각 업데이트 크기는 1MB 미만입니다. 기관은 온프레미스 애플리케이션 서버를 보유하고 있습니다. 이 서버들은 센서에서 업데이트를 수신하고, 원시 데이터를 사람이 읽을 수 있는 형식으로 변환하여 온프레미스 관계형 데이터베이스 서버에 결과를 씁니다. 데이터 분석가들은 간단한 SQL 쿼리를 사용하여 데이터를 모니터링합니다.</p>
<p>기관은 전반적인 애플리케이션 가용성을 높이고 유지 관리 작업에 필요한 노력을 줄이고자 합니다. 이러한 유지 관리 작업은 가동 중지 시간을 야기합니다. 애플리케이션 서버가 다운되면 나머지 서버가 전체 워크로드를 처리할 수 없어 데이터가 손실됩니다.</p>
<p>기관은 운영 오버헤드와 비용을 최적화하는 솔루션을 원합니다. 솔루션 아키텍트는 AWS IoT Core를 사용하여 센서 데이터를 수집할 것을 권장합니다.</p>
<p>이러한 요구사항을 충족하기 위해 솔루션 아키텍트는 또 무엇을 권장해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Send the sensor data to Amazon Kinesis Data Firehose. Use an AWS Lambda function to read the Kinesis Data Firehose data, convert it to .csv format, and insert it into an Amazon Aurora MySQL DB instance. Instruct the data analysts to query the data directly from the DB instance.', ko: '센서 데이터를 Amazon Kinesis Data Firehose로 보냅니다. AWS Lambda 함수를 사용하여 Kinesis Data Firehose 데이터를 읽고 .csv 형식으로 변환한 후 Amazon Aurora MySQL DB 인스턴스에 삽입합니다. 데이터 분석가에게 DB 인스턴스에서 직접 데이터를 쿼리하도록 지시합니다.' },
      { k: 'B', en: 'Send the sensor data to Amazon Kinesis Data Firehose. Use an AWS Lambda function to read the Kinesis Data Firehose data, convert it to Apache Parquet format, and save it to an Amazon S3 bucket. Instruct the data analysts to query the data by using Amazon Athena.', ko: '센서 데이터를 Amazon Kinesis Data Firehose로 보냅니다. AWS Lambda 함수를 사용하여 Kinesis Data Firehose 데이터를 읽고 Apache Parquet 형식으로 변환한 후 Amazon S3 버킷에 저장합니다. 데이터 분석가에게 Amazon Athena를 사용하여 데이터를 쿼리하도록 지시합니다.' },
      { k: 'C', en: 'Send the sensor data to an Amazon Managed Service for Apache Flink application to convert the data to .csv format and store it in an Amazon S3 bucket. Import the data into an Amazon Aurora MySQL DB instance. Instruct the data analysts to query the data directly from the DB instance.', ko: '센서 데이터를 Amazon Managed Service for Apache Flink 애플리케이션으로 보내 데이터를 .csv 형식으로 변환하고 Amazon S3 버킷에 저장합니다. 데이터를 Amazon Aurora MySQL DB 인스턴스로 가져옵니다. 데이터 분석가에게 DB 인스턴스에서 직접 데이터를 쿼리하도록 지시합니다.' },
      { k: 'D', en: 'Send the sensor data to an Amazon Managed Service for Apache Flink application to convert the data to Apache Parquet format and store it in an Amazon S3 bucket. Instruct the data analysts to query the data by using Amazon Athena.', ko: '센서 데이터를 Amazon Managed Service for Apache Flink 애플리케이션으로 보내 데이터를 Apache Parquet 형식으로 변환하고 Amazon S3 버킷에 저장합니다. 데이터 분석가에게 Amazon Athena를 사용하여 데이터를 쿼리하도록 지시합니다.' },
    ],
    answer: ['B'],
    vote: '73% B',
    explain: `<p><span class="mark-ok">✅ B — Kinesis Data Firehose + Lambda(Parquet 변환) + S3 + Athena</span></p>
<p>운영 오버헤드 최소화와 비용 최적화를 모두 달성합니다:</p>
<ul>
<li><strong>Kinesis Data Firehose</strong>: IoT Core에서 센서 데이터를 스트리밍으로 수집, 서버리스로 완전 관리</li>
<li><strong>Lambda</strong>: Firehose의 변환 기능과 통합하여 데이터를 Parquet 형식으로 변환 (데이터 분석에 최적화된 열 기반 형식)</li>
<li><strong>S3 + Athena</strong>: 서버리스 SQL 쿼리 서비스로 관계형 DB 없이 데이터 분석 가능. 기존 SQL 워크플로 유지</li>
</ul>
<p><a href="https://aws.amazon.com/firehose/" target="_blank">AWS 공식 문서: Amazon Kinesis Data Firehose</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Parquet 대신 CSV를 사용하면 Athena 쿼리 성능이 저하되고 스토리지 비용이 증가합니다. Aurora는 서버리스가 아니라 관리 오버헤드가 있습니다.</p>
<p><span class="mark-no">❌ C, D</span> — Apache Flink는 실시간 스트리밍 분석에는 강력하지만, 단순한 데이터 포맷 변환과 S3 저장에는 Kinesis Data Firehose + Lambda보다 복잡하며 비용이 더 높을 수 있습니다.</p>`,
    disc: [
      { ans: 'B (73%)', txt: 'Firehose + Lambda의 Parquet 변환 + S3/Athena가 서버리스로 운영 오버헤드 최소화. SQL 분석 계속 가능.' },
    ],
  },
  {
    n: 444,
    en: `<p>A public retail web application uses an Application Load Balancer (ALB) in front of Amazon EC2 instances running across multiple Availability Zones (AZs) in a Region backed by an Amazon RDS MySQL Multi-AZ deployment. Target group health checks are configured to use HTTP and pointed at the product catalog page. Auto Scaling is configured to maintain the web fleet size based on the ALB health check.</p>
<p>Recently, the application experienced an outage. Auto Scaling continuously replaced the instances during the outage. A subsequent investigation determined that the web server metrics were within the normal range, but the database tier was experiencing high load, resulting in severely elevated query response times.</p>
<p>Which of the following changes together would remediate these issues while improving monitoring capabilities for the availability and functionality of the entire application stack for future growth? (Choose two.)</p>`,
    ko: `<p>퍼블릭 소매 웹 애플리케이션이 Amazon RDS MySQL 다중 AZ 배포가 지원되는 리전의 여러 가용 영역에서 실행되는 Amazon EC2 인스턴스 앞에 ALB를 사용합니다. 대상 그룹 상태 확인은 HTTP를 사용하도록 구성되고 제품 카탈로그 페이지를 가리킵니다. Auto Scaling은 ALB 상태 확인을 기반으로 웹 플릿 크기를 유지하도록 구성됩니다.</p>
<p>최근 애플리케이션이 중단되었습니다. Auto Scaling이 중단 중에 인스턴스를 지속적으로 교체했습니다. 후속 조사에서 웹 서버 지표는 정상 범위였지만 데이터베이스 계층에 높은 로드가 발생하여 쿼리 응답 시간이 심각하게 증가한 것으로 확인되었습니다.</p>
<p>다음 중 향후 성장을 위해 전체 애플리케이션 스택의 가용성 및 기능에 대한 모니터링을 개선하면서 이러한 문제를 해결하는 변경 사항은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Configure read replicas for Amazon RDS MySQL and use the single reader endpoint in the web application to reduce the load on the backend database tier.', ko: 'Amazon RDS MySQL에 대한 읽기 전용 복제본을 구성하고 웹 애플리케이션에서 단일 리더 엔드포인트를 사용하여 백엔드 데이터베이스 계층의 로드를 줄입니다.' },
      { k: 'B', en: 'Configure the target group health check to point at a simple HTML page instead of a product catalog page and the Amazon Route 53 health check against the product page to evaluate full application functionality. Configure Amazon CloudWatch alarms to notify administrators when the site fails.', ko: '제품 카탈로그 페이지 대신 간단한 HTML 페이지를 가리키도록 대상 그룹 상태 확인을 구성하고 제품 페이지에 대한 Amazon Route 53 상태 확인을 구성하여 전체 애플리케이션 기능을 평가합니다. 사이트에 장애가 발생하면 관리자에게 알리도록 Amazon CloudWatch 경보를 구성합니다.' },
      { k: 'C', en: 'Configure the target group health check to use a TCP check of the Amazon EC2 web server and the Amazon Route 53 health check against the product page to evaluate full application functionality. Configure Amazon CloudWatch alarms to notify administrators when the site fails.', ko: 'Amazon EC2 웹 서버의 TCP 확인과 제품 페이지에 대한 Amazon Route 53 상태 확인을 사용하여 전체 애플리케이션 기능을 평가하도록 대상 그룹 상태 확인을 구성합니다. 사이트에 장애가 발생하면 관리자에게 알리도록 Amazon CloudWatch 경보를 구성합니다.' },
      { k: 'D', en: 'Configure an Amazon CloudWatch alarm for Amazon RDS with an action to recover a high-load, impaired RDS instance in the database tier.', ko: 'DB 계층에서 로드가 높고 손상된 RDS 인스턴스를 복구하는 작업으로 Amazon RDS에 대한 Amazon CloudWatch 경보를 구성합니다.' },
      { k: 'E', en: 'Configure an Amazon ElastiCache cluster and place it between the web application and RDS MySQL instances to reduce the load on the backend database tier.', ko: 'Amazon ElastiCache 클러스터를 구성하고 이를 웹 애플리케이션과 RDS MySQL 인스턴스 사이에 배치하여 백엔드 데이터베이스 계층의 로드를 줄입니다.' },
    ],
    answer: ['B', 'E'],
    vote: '50% BE / 27% AB',
    explain: `<p><span class="mark-ok">✅ B — 상태 확인을 간단한 HTML 페이지로 변경 + Route 53 상태 확인</span></p>
<p>문제의 근본 원인: DB 고부하로 제품 카탈로그 페이지가 느려지자 ALB 상태 확인이 실패하여 멀쩡한 EC2 인스턴스를 교체했습니다. DB가 아닌 웹 서버 문제로 오진한 것입니다.</p>
<ul>
<li>간단한 HTML 페이지로 ALB 상태 확인 → EC2 인스턴스 자체 상태만 확인, DB 부하와 무관</li>
<li>Route 53 + CloudWatch → 전체 애플리케이션 기능 모니터링 및 알림</li>
</ul>
<p><span class="mark-ok">✅ E — ElastiCache로 DB 부하 감소</span></p>
<p>ElastiCache를 읽기 캐시로 사용하면 DB 읽기 쿼리 부하를 크게 줄일 수 있습니다. 미래 성장에 대비한 확장성 있는 솔루션입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 읽기 복제본은 로드 분산에 도움이 되지만, 문제의 즉각적인 원인인 "상태 확인이 잘못된 인스턴스를 교체하는 현상"을 해결하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — TCP 확인은 너무 거칠어 애플리케이션 계층의 문제를 감지하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — RDS 인스턴스 복구 작업은 고부하 상황에서 자동으로 효과적이지 않으며, 예방적 접근이 아닙니다.</p>`,
    disc: [
      { ans: 'BE (50%)', txt: 'B로 잘못된 ALB 상태 확인 수정(DB 부하에 의한 오진 방지), E로 DB 캐싱으로 미래 성장 대비.' },
      { ans: 'AB (27%)', txt: 'A(읽기 복제본)도 DB 부하 감소에 유효하나 ElastiCache(E)만큼 확장성이 없음.' },
    ],
  },
  {
    n: 445,
    en: `<p>A company has an on-premises data center and is using Kubernetes to develop a new solution on AWS. The company uses Amazon Elastic Kubernetes Service (Amazon EKS) clusters for its development and test environments.</p>
<p>The EKS control plane and data plane for production workloads must reside on premises. The company needs an AWS managed solution for Kubernetes management.</p>
<p>Which solution will meet these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 온프레미스 데이터 센터를 보유하고 있으며 AWS에서 Kubernetes를 사용하여 새로운 솔루션을 개발하고 있습니다. 회사는 개발 및 테스트 환경에 Amazon EKS 클러스터를 사용합니다.</p>
<p>프로덕션 워크로드를 위한 EKS 제어 플레인과 데이터 플레인은 온프레미스에 있어야 합니다. 회사는 Kubernetes 관리를 위한 AWS 관리형 솔루션이 필요합니다.</p>
<p>최소한의 운영 오버헤드로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Install an AWS Outposts server in the on-premises data center. Deploy Amazon EKS by using a local cluster configuration on the Outposts server for the production workloads.', ko: '온프레미스 데이터 센터에 AWS Outposts 서버를 설치합니다. 프로덕션 워크로드를 위해 Outposts 서버에서 로컬 클러스터 구성을 사용하여 Amazon EKS를 배포합니다.' },
      { k: 'B', en: 'Install Amazon EKS Anywhere on the company\'s hardware in the on-premises data center. Deploy the production workloads on an EKS Anywhere cluster.', ko: '온프레미스 데이터 센터에 있는 회사 하드웨어에 Amazon EKS Anywhere를 설치합니다. EKS Anywhere 클러스터에 프로덕션 워크로드를 배포합니다.' },
      { k: 'C', en: 'Install an AWS Outposts server in the on-premises data center. Deploy Amazon EKS by using an extended cluster configuration on the Outposts server for the production workloads.', ko: '온프레미스 데이터 센터에 AWS Outposts 서버를 설치합니다. 프로덕션 워크로드를 위해 Outposts 서버에서 확장 클러스터 구성을 사용하여 Amazon EKS를 배포합니다.' },
      { k: 'D', en: 'Install an AWS Outposts server in the on-premises data center. Install Amazon EKS Anywhere on the Outposts server. Deploy the production workloads on an EKS Anywhere cluster.', ko: '온프레미스 데이터 센터에 AWS Outposts 서버를 설치합니다. Outposts 서버에 Amazon EKS Anywhere를 설치합니다. EKS Anywhere 클러스터에 프로덕션 워크로드를 배포합니다.' },
    ],
    answer: ['A'],
    vote: '65% A',
    explain: `<p><span class="mark-ok">✅ A — AWS Outposts + EKS 로컬 클러스터 구성</span></p>
<p>세 가지 요구사항: ① 제어 플레인 온프레미스, ② 데이터 플레인 온프레미스, ③ AWS 관리형 솔루션</p>
<ul>
<li><strong>AWS Outposts 로컬 클러스터</strong>: 제어 플레인과 데이터 플레인 모두 Outposts 서버(온프레미스)에서 실행</li>
<li>AWS가 Outposts 하드웨어와 소프트웨어를 관리하므로 <strong>AWS 관리형 솔루션</strong> 요구사항 충족</li>
<li>C(확장 클러스터)는 제어 플레인이 AWS 리전에 있고 노드만 Outposts에 있어 요구사항 불충족</li>
</ul>
<p><a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts.html" target="_blank">AWS 공식 문서: EKS on Outposts</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — EKS Anywhere는 고객 관리형 제품입니다. AWS에서 클러스터 수명주기 운영 및 유지 관리를 담당하지 않으므로 "AWS 관리형 솔루션" 요구사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — Outposts 확장 클러스터는 제어 플레인이 AWS 리전에서 실행됩니다. 제어 플레인도 온프레미스에 있어야 한다는 요구사항에 위배됩니다.</p>
<p><span class="mark-no">❌ D</span> — Outposts에 EKS Anywhere를 설치하는 조합은 불필요한 복잡성을 더하며, EKS Anywhere는 여전히 고객 관리형입니다.</p>`,
    disc: [
      { ans: 'A (65%)', txt: 'Outposts 로컬 클러스터: 제어 플레인 + 데이터 플레인 온프레미스 + AWS 관리형. 세 요구사항 모두 충족.' },
      { ans: 'B (24%)', txt: 'EKS Anywhere가 온프레미스에서 동작하나 고객 관리형이라 AWS 관리형 요구사항 불충족.' },
    ],
  },
  {
    n: 446,
    en: `<p>A company uses AWS Organizations to manage its development environment. Each development team at the company has its own AWS account. Each account has a single VPC and CIDR blocks that do not overlap.</p>
<p>The company has an Amazon Aurora DB cluster in a shared services account. All the development teams need to work with live data from the DB cluster.</p>
<p>Which solution will provide the required connectivity to the DB cluster with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 AWS Organizations를 사용하여 개발 환경을 관리합니다. 회사의 각 개발 팀은 자체 AWS 계정을 보유합니다. 각 계정에는 겹치지 않는 단일 VPC와 CIDR 블록이 있습니다.</p>
<p>회사는 공유 서비스 계정에 Amazon Aurora DB 클러스터를 보유하고 있습니다. 모든 개발 팀은 DB 클러스터의 실시간 데이터로 작업해야 합니다.</p>
<p>최소한의 운영 오버헤드로 DB 클러스터에 필요한 연결을 제공하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an AWS Resource Access Manager (AWS RAM) resource share for the DB cluster. Share the DB cluster with all the development accounts.', ko: 'DB 클러스터에 대한 AWS RAM 리소스 공유를 생성합니다. 모든 개발 계정과 DB 클러스터를 공유합니다.' },
      { k: 'B', en: 'Create a transit gateway in the shared services account. Create an AWS Resource Access Manager (AWS RAM) resource share for the transit gateway. Share the transit gateway with all the development accounts. Instruct the developers to accept the resource share. Configure networking.', ko: '공유 서비스 계정에 Transit Gateway를 생성합니다. Transit Gateway에 대한 AWS RAM 리소스 공유를 생성합니다. 모든 개발 계정과 Transit Gateway를 공유합니다. 개발자에게 리소스 공유를 수락하도록 지시합니다. 네트워킹을 구성합니다.' },
      { k: 'C', en: 'Create an Application Load Balancer (ALB) that points to the IP address of the DB cluster. Create an AWS PrivateLink endpoint service that uses the ALB. Add permissions to allow each development account to connect to the endpoint service.', ko: 'DB 클러스터의 IP 주소를 가리키는 ALB를 생성합니다. ALB를 사용하는 AWS PrivateLink 엔드포인트 서비스를 생성합니다. 각 개발 계정이 엔드포인트 서비스에 연결할 수 있도록 권한을 추가합니다.' },
      { k: 'D', en: 'Create an AWS Site-to-Site VPN connection in the shared services account. Configure networking. Use AWS Marketplace VPN software in each development account to connect to the Site-to-Site VPN connection.', ko: '공유 서비스 계정에서 AWS Site-to-Site VPN 연결을 생성합니다. 네트워킹을 구성합니다. 각 개발 계정에서 AWS Marketplace VPN 소프트웨어를 사용하여 Site-to-Site VPN 연결에 연결합니다.' },
    ],
    answer: ['B'],
    vote: '67% B / 29% A',
    explain: `<p><span class="mark-ok">✅ B — Transit Gateway + AWS RAM 공유</span></p>
<p>CIDR이 겹치지 않고 실시간 DB 데이터 접근이 필요하므로 VPC 간 네트워크 연결이 가장 적합합니다.</p>
<ul>
<li><strong>Transit Gateway + RAM 공유</strong>: 공유 서비스 계정의 TGW를 여러 개발 계정과 공유하여 중앙 집중식 네트워크 허브 구성</li>
<li>CIDR 중복이 없으므로 TGW 사용 가능</li>
<li>새 개발 계정 추가 시 TGW에 VPC만 연결하면 되어 확장성 우수</li>
</ul>
<p><strong>A가 아닌 이유:</strong> AWS RAM으로 Aurora DB 클러스터를 공유하면 DB를 <em>복제(클론)</em>할 수 있지만, 실시간 데이터 접근(라이브 연결)은 제공하지 않습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS RAM으로 Aurora DB 클러스터를 공유하면 데이터베이스를 클론할 수 있지만, 원본 DB 클러스터에 대한 실시간 네트워크 연결은 제공하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS PrivateLink는 NLB(Network Load Balancer)가 필요하며 ALB는 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Site-to-Site VPN은 온프레미스 연결용이며, VPC 간 연결에는 불필요하게 복잡합니다.</p>`,
    disc: [
      { ans: 'B (67%)', txt: 'TGW + RAM으로 실시간 DB 연결 제공. RAM으로 Aurora 공유는 클론이지 라이브 접속이 아님.' },
      { ans: 'A (29%)', txt: 'RAM Aurora 공유가 실시간 접근을 제공한다고 오해. 실제로는 클론 기능.' },
    ],
  },
  {
    n: 447,
    en: `<p>A company used AWS CloudFormation to create all new infrastructure in its AWS member accounts. The resources rarely change and are properly sized for the expected load. The monthly AWS bill is consistent.</p>
<p>Occasionally, a developer creates a new resource for testing and forgets to remove the resource when the test is complete. Most of these tests last a few days before the resources are no longer needed.</p>
<p>The company wants to automate the process of finding unused resources. A solutions architect needs to design a solution that determines whether the cost in the AWS bill is increasing. The solution must help identify resources that cause an increase in cost and must automatically notify the company's operations team.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS CloudFormation을 사용하여 AWS 멤버 계정에 모든 새 인프라를 생성했습니다. 리소스는 거의 변경되지 않으며 예상 로드에 맞게 크기가 적절합니다. 월별 AWS 청구서는 일관됩니다.</p>
<p>가끔 개발자가 테스트를 위해 새 리소스를 생성하고 테스트가 완료되면 리소스를 제거하는 것을 잊어버립니다. 이러한 테스트 대부분은 리소스가 더 이상 필요하지 않을 때까지 며칠 동안 지속됩니다.</p>
<p>회사는 사용되지 않은 리소스를 찾는 프로세스를 자동화하려고 합니다. 솔루션 아키텍트는 AWS 청구서 비용이 증가하는지 여부를 결정하는 솔루션을 설계해야 합니다. 솔루션은 비용 증가를 유발하는 리소스를 식별하는 데 도움이 되고 운영 팀에 자동으로 알려야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Turn on billing alerts. Use AWS Cost Explorer to determine the costs for the past month. Create an Amazon CloudWatch alarm for total estimated charges. Specify a cost threshold that is higher than the costs that Cost Explorer determined. Add a notification to alert the operations team if the alarm threshold is breached.', ko: '청구 알림을 켭니다. AWS Cost Explorer를 사용하여 지난달 비용을 확인합니다. 총 예상 요금에 대한 Amazon CloudWatch 경보를 생성합니다. Cost Explorer에서 결정한 비용보다 높은 비용 임계값을 지정합니다. 경보 임계값이 위반되면 운영 팀에 알리는 알림을 추가합니다.' },
      { k: 'B', en: 'Turn on billing alerts. Use AWS Cost Explorer to determine the average monthly costs for the past 3 months. Create an Amazon CloudWatch alarm for total estimated charges. Specify a cost threshold that is higher than the costs that Cost Explorer determined. Add a notification to alert the operations team if the alarm threshold is breached.', ko: '청구 알림을 켭니다. AWS Cost Explorer를 사용하여 지난 3개월의 월 평균 비용을 확인합니다. 총 예상 요금에 대한 Amazon CloudWatch 경보를 생성합니다. Cost Explorer에서 결정한 비용보다 높은 비용 임계값을 지정합니다. 경보 임계값이 위반되면 운영 팀에 알리는 알림을 추가합니다.' },
      { k: 'C', en: 'Use AWS Cost Anomaly Detection to create a cost monitor that has a monitor type of Linked account. Create a subscription to send daily AWS cost summaries to the operations team. Specify a threshold for cost variance.', ko: 'AWS 비용 이상 탐지를 사용하여 연결된 계정 모니터 유형의 비용 모니터를 생성합니다. 일일 AWS 비용 요약을 운영 팀에 보내는 구독을 생성합니다. 비용 차이에 대한 임계값을 지정합니다.' },
      { k: 'D', en: 'Use AWS Cost Anomaly Detection to create a cost monitor that has a monitor type of AWS services. Create a subscription to send daily AWS cost summaries to the operations team. Specify a threshold for cost variance.', ko: 'AWS 비용 이상 탐지를 사용하여 AWS 서비스 모니터 유형의 비용 모니터를 생성합니다. 일일 AWS 비용 요약을 운영 팀에 보내는 구독을 생성합니다. 비용 차이에 대한 임계값을 지정합니다.' },
    ],
    answer: ['D'],
    vote: '72% D',
    explain: `<p><span class="mark-ok">✅ D — AWS Cost Anomaly Detection (AWS 서비스 모니터 유형)</span></p>
<p>이상 탐지 요구사항에 가장 최적화된 솔루션입니다:</p>
<ul>
<li><strong>Cost Anomaly Detection</strong>: ML 기반으로 비용 패턴을 학습하여 이상 지출을 자동으로 감지</li>
<li><strong>AWS 서비스 모니터 유형</strong>: 계정 내 각 서비스별 지출을 개별 모니터링. 예: EC2가 급증하고 S3가 감소해도 순 중립적으로 보이는 Linked Account 모니터와 달리, 서비스별로 각각 이상을 감지</li>
<li>구독으로 일일 비용 요약을 운영 팀에 자동 발송</li>
</ul>
<p><a href="https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/faqs/" target="_blank">AWS 공식 문서: Cost Anomaly Detection FAQ</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — CloudWatch 청구 경보는 고정 임계값을 초과할 때만 알림을 보냅니다. 비용 패턴의 이상을 지능적으로 감지하지 못하며, 어떤 리소스가 비용 증가를 유발하는지 식별할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — Linked Account 모니터는 계정 전체의 집계 지출을 추적합니다. 한 서비스가 급증하고 다른 서비스가 감소하면 순 중립으로 이상이 감지되지 않아 서비스 수준의 이상 탐지가 불가능합니다.</p>`,
    disc: [
      { ans: 'D (72%)', txt: 'AWS 서비스 모니터는 서비스별 개별 이상 탐지로 어떤 리소스가 비용 급증을 유발하는지 정확히 식별 가능.' },
      { ans: 'C (28%)', txt: 'Linked Account 모니터가 계정 수준 이상을 탐지하지만 서비스 간 상쇄(net neutral)를 감지 못하는 한계.' },
    ],
  },
  {
    n: 448,
    en: `<p>A company is deploying a new web-based application and needs a storage solution for the Linux application servers. The company wants to create a single location for updates to application data for all instances. The active dataset will be up to 100 GB in size. A solutions architect has determined that peak operations will occur for 3 hours daily and will require a total of 225 MiBps of read throughput.</p>
<p>The solutions architect must design a Multi-AZ solution that makes a copy of the data available in another AWS Region for disaster recovery (DR). The DR copy has an RPO of less than 1 hour.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 새로운 웹 기반 애플리케이션을 배포하고 있으며 Linux 애플리케이션 서버를 위한 스토리지 솔루션이 필요합니다. 회사는 모든 인스턴스에 대한 애플리케이션 데이터 업데이트의 단일 위치를 생성하려고 합니다. 활성 데이터 세트의 크기는 최대 100GB입니다. 솔루션 아키텍트는 매일 3시간 동안 최대 작업이 발생하며 총 225MiBps의 읽기 처리량이 필요하다고 결정했습니다.</p>
<p>솔루션 아키텍트는 재해 복구(DR)를 위해 다른 AWS 리전에서 데이터 복사본을 사용할 수 있도록 하는 다중 AZ 솔루션을 설계해야 합니다. DR 복사본의 RPO는 1시간 미만입니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Deploy a new Amazon Elastic File System (Amazon EFS) Multi-AZ file system. Configure the file system for 75 MiBps of provisioned throughput. Implement replication to a file system in the DR Region.', ko: '새 Amazon EFS 다중 AZ 파일 시스템을 배포합니다. 75MiBps의 프로비저닝된 처리량을 위해 파일 시스템을 구성합니다. DR 리전의 파일 시스템에 대한 복제를 구현합니다.' },
      { k: 'B', en: 'Deploy a new Amazon FSx for Lustre file system. Configure Bursting Throughput mode for the file system. Use AWS Backup to back up the file system to the DR Region.', ko: '새 Amazon FSx for Lustre 파일 시스템을 배포합니다. 파일 시스템에 대한 버스팅 처리량 모드를 구성합니다. AWS Backup을 사용하여 파일 시스템을 DR 리전에 백업합니다.' },
      { k: 'C', en: 'Deploy a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume with 225 MiBps of throughput. Enable Multi-Attach for the EBS volume. Use AWS Elastic Disaster Recovery to replicate the EBS volume to the DR Region.', ko: '225MiBps 처리량의 범용 SSD(gp3) Amazon EBS 볼륨을 배포합니다. EBS 볼륨에 다중 연결을 활성화합니다. AWS Elastic Disaster Recovery를 사용하여 EBS 볼륨을 DR 리전에 복제합니다.' },
      { k: 'D', en: 'Deploy an Amazon FSx for OpenZFS file system in both the production Region and the DR Region. Create an AWS DataSync scheduled task to replicate the data from the production file system to the DR file system every 10 minutes.', ko: '프로덕션 리전과 DR 리전 모두에 Amazon FSx for OpenZFS 파일 시스템을 배포합니다. 프로덕션 파일 시스템에서 DR 파일 시스템으로 10분마다 데이터를 복제하는 AWS DataSync 예약 작업을 생성합니다.' },
    ],
    answer: ['D'],
    vote: '75% D',
    explain: `<p><span class="mark-ok">✅ D — FSx for OpenZFS + DataSync 10분 복제</span></p>
<p>요구사항 분석:</p>
<ul>
<li><strong>단일 위치 + 다중 AZ</strong>: FSx for OpenZFS는 다중 AZ 지원</li>
<li><strong>225MiBps 읽기 처리량</strong>: FSx for OpenZFS는 최대 12.5GB/s 이상의 처리량 지원</li>
<li><strong>RPO &lt; 1시간</strong>: DataSync를 10분마다 실행하여 충족</li>
<li><strong>Linux 호환</strong>: NFS 프로토콜 지원</li>
</ul>
<p><a href="https://docs.aws.amazon.com/fsx/latest/OpenZFSGuide/migrate-files-to-fsx-datasync.html" target="_blank">AWS 공식 문서: FSx for OpenZFS + DataSync</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EFS 프로비저닝 처리량 75MiBps는 요구되는 225MiBps에 크게 부족합니다. EFS의 버스팅 처리량은 활성 데이터 세트 크기(100GB)에 비례하는데, 이 경우 충분하지 않을 수 있습니다.</p>
<p><span class="mark-no">❌ B</span> — AWS Backup은 최소 1시간 간격으로만 백업 가능하여 RPO &lt; 1시간을 충족할 수 없습니다. 또한 FSx for Lustre에는 "버스팅 처리량 모드"가 없습니다(이는 EFS의 기능).</p>
<p><span class="mark-no">❌ C</span> — EBS gp3는 Multi-Attach를 지원하지 않습니다(Multi-Attach는 io1/io2 전용).</p>`,
    disc: [
      { ans: 'D (75%)', txt: 'FSx for OpenZFS의 높은 처리량 + DataSync 10분 복제로 RPO 충족. B는 백업 최소 간격 1시간으로 RPO 불충족.' },
      { ans: 'A (25%)', txt: 'EFS가 더 단순하다고 주장하나 75MiBps 프로비저닝으로는 225MiBps 요구사항 불충족.' },
    ],
  },
  {
    n: 449,
    en: `<p>A company needs to gather data from an experiment in a remote location that does not have internet connectivity. During the experiment, sensors that are connected to a local network will generate 6 TB of data in a proprietary format over the course of 1 week. The sensors can be configured to upload their data files to an FTP server periodically, but the sensors do not have their own FTP server. The sensors also do not support other protocols. The company needs to collect the data centrally and move the data to object storage in the AWS Cloud as soon as possible after the experiment.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 인터넷 연결이 없는 원격 위치에서 실험 데이터를 수집해야 합니다. 실험 중에 로컬 네트워크에 연결된 센서들은 1주일에 걸쳐 독점 형식으로 6TB의 데이터를 생성합니다. 센서는 주기적으로 FTP 서버에 데이터 파일을 업로드하도록 구성할 수 있지만 자체 FTP 서버가 없습니다. 센서는 다른 프로토콜도 지원하지 않습니다. 회사는 실험 후 가능한 한 빨리 데이터를 중앙에서 수집하고 AWS 클라우드의 객체 스토리지로 이동해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Order an AWS Snowball Edge Compute Optimized device. Connect the device to the local network. Configure AWS DataSync with a target bucket name, and unload the data over NFS to the device. After the experiment, return the device to AWS so that the data can be loaded into Amazon S3.', ko: 'AWS Snowball Edge Compute Optimized 디바이스를 주문합니다. 디바이스를 로컬 네트워크에 연결합니다. 대상 버킷 이름으로 AWS DataSync를 구성하고 NFS를 통해 디바이스로 데이터를 언로드합니다. 실험 후 데이터가 Amazon S3에 로드될 수 있도록 디바이스를 AWS로 반환합니다.' },
      { k: 'B', en: 'Order an AWS Snowcone device, including an Amazon Linux 2 AMI. Connect the device to the local network. Launch an Amazon EC2 instance on the device. Create a shell script that periodically downloads data from each sensor. After the experiment, return the device to AWS so that the data can be loaded as an Amazon Elastic Block Store (Amazon EBS) volume.', ko: 'Amazon Linux 2 AMI를 포함한 AWS Snowcone 디바이스를 주문합니다. 디바이스를 로컬 네트워크에 연결합니다. 디바이스에서 Amazon EC2 인스턴스를 시작합니다. 각 센서에서 주기적으로 데이터를 다운로드하는 셸 스크립트를 생성합니다. 실험 후 데이터를 Amazon EBS 볼륨으로 로드할 수 있도록 디바이스를 AWS로 반환합니다.' },
      { k: 'C', en: 'Order an AWS Snowcone device, including an Amazon Linux 2 AMI. Connect the device to the local network. Launch an Amazon EC2 instance on the device. Install and configure an FTP server on the EC2 instance. Configure the sensors to upload data to the EC2 instance. After the experiment, return the device to AWS so that the data can be loaded into Amazon S3.', ko: 'Amazon Linux 2 AMI를 포함한 AWS Snowcone 디바이스를 주문합니다. 디바이스를 로컬 네트워크에 연결합니다. 디바이스에서 Amazon EC2 인스턴스를 시작합니다. EC2 인스턴스에 FTP 서버를 설치하고 구성합니다. EC2 인스턴스에 데이터를 업로드하도록 센서를 구성합니다. 실험 후 데이터가 Amazon S3에 로드될 수 있도록 디바이스를 AWS로 반환합니다.' },
      { k: 'D', en: 'Order an AWS Snowcone device. Connect the device to the local network. Configure the device to use Amazon FSx. Configure the sensors to upload data to the device. Configure AWS DataSync on the device to synchronize the uploaded data with an Amazon S3 bucket. Return the device to AWS so that the data can be loaded as an Amazon Elastic Block Store (Amazon EBS) volume.', ko: 'AWS Snowcone 디바이스를 주문합니다. 디바이스를 로컬 네트워크에 연결합니다. Amazon FSx를 사용하도록 디바이스를 구성합니다. 디바이스에 데이터를 업로드하도록 센서를 구성합니다. 업로드된 데이터를 Amazon S3 버킷과 동기화하도록 디바이스에서 AWS DataSync를 구성합니다. 데이터를 EBS 볼륨으로 로드할 수 있도록 디바이스를 AWS로 반환합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — Snowcone + EC2 + FTP 서버 + S3</span></p>
<p>핵심 제약: 센서는 <strong>FTP 프로토콜만 지원</strong>하며 자체 FTP 서버가 없습니다.</p>
<ul>
<li><strong>AWS Snowcone</strong>: 엣지 컴퓨팅 기능을 갖춘 소형 오프라인 데이터 수집 디바이스. 인터넷 없이 사용 가능</li>
<li><strong>EC2 인스턴스 + FTP 서버</strong>: Snowcone에서 EC2를 실행하고 FTP 서버를 설치하여 센서의 FTP 업로드를 수신</li>
<li><strong>Amazon S3 반환</strong>: 실험 후 Snowcone을 AWS로 반환하면 데이터가 S3에 로드됨</li>
</ul>
<p>6TB 데이터는 Snowcone(최대 8TB)에 적합합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Snowball Edge는 NFS를 통한 데이터 수신이 가능하지만, 센서는 FTP만 지원하므로 NFS를 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — 셸 스크립트로 센서에서 데이터를 다운로드하려면 센서가 FTP 클라이언트가 아닌 서버 역할을 해야 하며, 이는 센서 구성과 다릅니다. 또한 EBS로 로드하는 것은 S3(객체 스토리지) 요구사항과 다릅니다.</p>
<p><span class="mark-no">❌ D</span> — Snowcone에서 Amazon FSx를 사용하는 것은 지원되지 않으며, EBS 볼륨으로 로드하는 것은 S3 요구사항을 충족하지 않습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'FTP만 지원하는 센서에 맞게 Snowcone의 EC2에 FTP 서버 설치. 실험 후 S3로 데이터 전송.' },
    ],
  },
  {
    n: 450,
    en: `<p>A company that has multiple business units is using AWS Organizations with all features enabled. The company has implemented an account structure in which each business unit has its own AWS account. Administrators in each AWS account need to view detailed cost and utilization data for their account by using Amazon Athena.</p>
<p>Each business unit can have access to only its own cost and utilization data. The IAM policies that govern the ability to set up AWS Cost and Usage Reports are in place. A central Cost and Usage Report that contains all data for the organization is already available in an Amazon S3 bucket.</p>
<p>Which solution will meet these requirements with the LEAST operational complexity?</p>`,
    ko: `<p>여러 사업 부문을 보유한 회사가 모든 기능이 활성화된 AWS Organizations를 사용하고 있습니다. 회사는 각 사업 부문이 자체 AWS 계정을 갖는 계정 구조를 구현했습니다. 각 AWS 계정의 관리자는 Amazon Athena를 사용하여 해당 계정의 상세 비용 및 사용률 데이터를 확인해야 합니다.</p>
<p>각 사업 부문은 자체 비용 및 활용 데이터에만 접근할 수 있습니다. AWS Cost and Usage Reports 설정을 관리하는 IAM 정책이 마련되어 있습니다. 조직의 모든 데이터를 포함하는 중앙 비용 및 사용 보고서가 이미 Amazon S3 버킷에서 사용 가능합니다.</p>
<p>운영 복잡성을 최소화하면서 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'In the organization\'s management account, use AWS Resource Access Manager (AWS RAM) to share the Cost and Usage Report data with each member account.', ko: '조직의 관리 계정에서 AWS RAM을 사용하여 비용 및 사용 보고서 데이터를 각 멤버 계정과 공유합니다.' },
      { k: 'B', en: 'In the organization\'s management account, configure an S3 event to invoke an AWS Lambda function each time a new file arrives in the S3 bucket that contains the central Cost and Usage Report. Configure the Lambda function to extract each member account\'s data and to place the data in Amazon S3 under a separate prefix. Modify the S3 bucket policy to allow each member account to access its own prefix.', ko: '조직의 관리 계정에서 중앙 비용 및 사용 보고서가 포함된 S3 버킷에 새 파일이 도착할 때마다 AWS Lambda 함수를 호출하는 S3 이벤트를 구성합니다. 각 멤버 계정의 데이터를 추출하고 별도의 접두사 아래에 배치하도록 Lambda 함수를 구성합니다. 각 멤버 계정이 자체 접두사에 접근할 수 있도록 S3 버킷 정책을 수정합니다.' },
      { k: 'C', en: 'In each member account, access AWS Cost Explorer. Create a new report that contains relevant cost information for the account. Save the report in Cost Explorer. Provide instructions that the account administrators can use to access the saved report.', ko: '각 멤버 계정에서 AWS Cost Explorer에 접근합니다. 계정에 대한 관련 비용 정보가 포함된 새 보고서를 생성합니다. Cost Explorer에 보고서를 저장합니다. 계정 관리자가 저장된 보고서에 접근하는 데 사용할 수 있는 지침을 제공합니다.' },
      { k: 'D', en: 'In each member account, create a new S3 bucket to store Cost and Usage Report data. Set up a Cost and Usage Report to deliver the data to the new S3 bucket.', ko: '각 멤버 계정에서 비용 및 사용 보고서 데이터를 저장할 새 S3 버킷을 생성합니다. 데이터를 새 S3 버킷으로 전달하는 비용 및 사용 보고서를 설정합니다.' },
    ],
    answer: ['B'],
    vote: '71% B',
    explain: `<p><span class="mark-ok">✅ B — Lambda로 계정별 데이터 분리 + S3 접두사별 접근 제어</span></p>
<p>이미 존재하는 중앙 보고서를 기반으로 자동화된 솔루션을 구축합니다:</p>
<ul>
<li><strong>S3 이벤트 + Lambda</strong>: 새 보고서 파일 도착 시 자동으로 계정별 데이터 분리</li>
<li><strong>S3 접두사 기반 접근 제어</strong>: 각 멤버 계정이 자체 데이터 접두사만 접근 가능</li>
<li>초기 설정 후 완전 자동화 → 지속적인 운영 복잡성 없음</li>
<li>각 계정에서 Athena로 자체 접두사의 데이터 쿼리 가능</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS RAM은 Cost and Usage Report 데이터를 계정 간에 공유하는 기능을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Cost Explorer는 계정 수준 비용을 확인할 수 있지만 Athena를 통한 상세 쿼리를 지원하지 않습니다. 또한 관리자마다 수동으로 보고서를 생성해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — 각 멤버 계정에서 별도의 Cost and Usage Report를 설정하면 중앙 보고서가 이미 있는 상황에서 중복이 발생하고 운영 복잡성이 증가합니다.</p>`,
    disc: [
      { ans: 'B (71%)', txt: '중앙 보고서를 Lambda로 계정별 분리 후 S3 정책으로 접근 제어. 초기 설정 후 완전 자동화.' },
      { ans: 'D (29%)', txt: '각 계정별 독립 설정이 더 간단하다는 의견. 그러나 중앙화된 접근보다 운영 복잡성 높음.' },
    ],
  },
];