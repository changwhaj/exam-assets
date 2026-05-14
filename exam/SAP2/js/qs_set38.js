window.QS_SET38 = [
  {
    n: 371,
    en: `A company hosts an intranet web application on Amazon EC2 instances behind an Application Load Balancer (ALB). Currently, users authenticate to the application against an internal user database.<br><br>The company needs to authenticate users to the application by using an existing AWS Directory Service for Microsoft Active Directory directory. All users with accounts in the directory must have access to the application.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사가 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스에서 인트라넷 웹 애플리케이션을 호스팅합니다. 현재 사용자는 내부 사용자 데이터베이스에 대해 애플리케이션을 인증합니다.<br><br>회사는 기존 Microsoft Active Directory용 AWS Directory Service 디렉터리를 사용하여 애플리케이션에 대해 사용자를 인증해야 합니다. 디렉터리에 계정이 있는 모든 사용자는 애플리케이션에 액세스할 수 있어야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a new app client in the directory. Create a listener rule for the ALB. Specify the authenticate-oidc action for the listener rule. Configure the listener rule with the appropriate issuer, client ID and secret, and endpoint details for the Active Directory service. Configure the new app client with the callback URL that the ALB provides.`, ko: `디렉터리에 새 앱 클라이언트를 생성합니다. ALB에 대한 리스너 규칙을 생성합니다. 리스너 규칙에 대한 authenticate-oidc 작업을 지정합니다. 적절한 발급자, 클라이언트 ID 및 암호, Active Directory 서비스의 엔드포인트 세부 정보로 리스너 규칙을 구성합니다. ALB가 제공하는 콜백 URL로 새 앱 클라이언트를 구성합니다.` },
      { k: 'B', en: `Configure an Amazon Cognito user pool. Configure the user pool with a federated identity provider (IdP) that has metadata from the directory. Create an app client. Associate the app client with the user pool. Create a listener rule for the ALB. Specify the authenticate-cognito action for the listener rule. Configure the listener rule to use the user pool and app client.`, ko: `Amazon Cognito 사용자 풀을 구성합니다. 디렉터리의 메타데이터가 있는 연합 ID 공급자(IdP)로 사용자 풀을 구성합니다. 앱 클라이언트를 생성합니다. 앱 클라이언트를 사용자 풀과 연결합니다. ALB에 대한 리스너 규칙을 생성하고 authenticate-cognito 작업을 지정합니다. 사용자 풀과 앱 클라이언트를 사용하도록 리스너 규칙을 구성합니다.` },
      { k: 'C', en: `Add the directory as a new IAM identity provider (IdP). Create a new IAM role that has an entity type of SAML 2.0 federation. Configure a role policy that allows access to the ALB. Configure the new role as the default authenticated user role for the IdP. Create a listener rule for the ALB. Specify the authenticate-oidc action for the listener rule.`, ko: `디렉터리를 새로운 IAM 자격 증명 공급자(IdP)로 추가합니다. SAML 2.0 연동 엔터티 유형을 가진 새 IAM 역할을 생성합니다. ALB에 대한 액세스를 허용하는 역할 정책을 구성합니다. 새 역할을 IdP의 기본 인증 사용자 역할로 구성합니다. ALB에 대한 리스너 규칙을 생성하고 authenticate-oidc 작업을 지정합니다.` },
      { k: 'D', en: `Enable AWS IAM Identity Center (AWS Single Sign-On). Configure the directory as an external identity provider (IdP) that uses SAML. Use the automatic provisioning method. Create a new IAM role that has an entity type of SAML 2.0 federation. Configure a role policy that allows access to the ALB. Attach the new role to all groups. Create a listener rule for the ALB. Specify the authenticate-cognito action for the listener rule.`, ko: `AWS IAM Identity Center(AWS Single Sign-On)를 활성화합니다. SAML을 사용하는 외부 ID 공급자(IdP)로 디렉터리를 구성합니다. 자동 프로비저닝 방법을 사용합니다. SAML 2.0 연동 엔터티 유형을 가진 새 IAM 역할을 생성합니다. ALB에 대한 액세스를 허용하는 역할 정책을 구성합니다. 모든 그룹에 새 역할을 연결합니다. ALB에 대한 리스너 규칙을 생성하고 authenticate-cognito 작업을 지정합니다.` },
    ],
    answer: ['B'],
    vote: 'B 51% / D 40%',
    explain: `<p><span class="mark-ok">✅ B — Cognito 사용자 풀 + AD 연동 IdP + ALB authenticate-cognito</span></p>
<p>ALB의 인증 기능은 두 가지 방식을 지원합니다: <strong>authenticate-oidc</strong>(OIDC 호환 IdP)와 <strong>authenticate-cognito</strong>(Amazon Cognito 사용자 풀). Microsoft Active Directory는 OIDC를 직접 지원하지 않습니다. 따라서 Amazon Cognito 사용자 풀을 중간 계층으로 사용하고, Cognito의 연합 IdP 기능으로 AD를 SAML을 통해 연결하면 AD 사용자를 ALB 인증으로 연결할 수 있습니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html" target="_blank">ALB 사용자 인증 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Microsoft Active Directory는 OIDC를 직접 지원하지 않습니다. OIDC를 OIDC 토큰으로 변환하는 중간 서비스 없이 authenticate-oidc 작업만으로는 AD 인증이 불가합니다.</p>
<p><span class="mark-no">❌ C</span> — IAM은 AD를 직접 IdP로 인터페이스하지 않으며, ALB 인증 흐름과 IAM 역할을 이런 방식으로 연결하는 것은 올바른 패턴이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — IAM Identity Center를 설정하는 과정이 복잡하고, authenticate-cognito 작업은 Cognito 사용자 풀이 아닌 IAM Identity Center와는 직접 연동되지 않습니다. "모든 그룹에 역할 연결"도 비현실적입니다.</p>`,
    disc: [
      { ans: 'B (51%)', txt: 'Cognito 사용자 풀은 AD 연동 IdP를 지원하며 ALB authenticate-cognito와 네이티브 통합. Microsoft AD는 OIDC 미지원으로 A는 불가.' },
      { ans: 'D (40%)', txt: '인트라넷 애플리케이션에는 IAM Identity Center가 더 적합하다는 의견도 있으나, authenticate-cognito 작업은 IAM Identity Center가 아닌 Cognito 사용자 풀과 연동됨.' },
    ]
  },

  {
    n: 372,
    en: `A company has a website that serves many visitors. The company deploys a backend service for the website in a primary AWS Region and a disaster recovery (DR) Region.<br><br>A single Amazon CloudFront distribution is deployed for the website. The company creates an Amazon Route 53 record set with health checks and a failover routing policy for the primary Region's backend service. The company configures the Route 53 record set as an origin for the CloudFront distribution. The company configures another record set that points to the backend service's endpoint in the DR Region as a secondary failover record type. The TTL for both record sets is 60 seconds.<br><br>Currently, failover takes more than 1 minute. A solutions architect must design a solution that will provide the fastest failover time.<br><br>Which solution will achieve this goal?`,
    ko: `한 회사에 많은 방문자에게 서비스를 제공하는 웹사이트가 있습니다. 회사는 기본 AWS 리전과 재해 복구(DR) 리전에 웹 사이트용 백엔드 서비스를 배포합니다.<br><br>단일 Amazon CloudFront 배포가 웹 사이트에 배포됩니다. 회사는 기본 리전의 백엔드 서비스에 대한 상태 확인 및 장애 조치 라우팅 정책이 포함된 Amazon Route 53 레코드 세트를 생성합니다. 회사는 Route 53 레코드 세트를 CloudFront 배포의 오리진으로 구성합니다. 두 레코드 세트 모두의 TTL은 60초입니다.<br><br>현재 장애 조치에는 1분 이상 소요됩니다. 솔루션 설계자는 가장 빠른 장애 조치 시간을 제공하는 솔루션을 설계해야 합니다.<br><br>이 목표를 달성할 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy an additional CloudFront distribution. Create a new Route 53 failover record set with health checks for both CloudFront distributions.`, ko: `추가 CloudFront 배포를 배포합니다. 두 CloudFront 배포 모두에 대한 상태 확인이 포함된 새로운 Route 53 장애 조치 레코드 세트를 생성합니다.` },
      { k: 'B', en: `Set the TTL to 4 seconds for the existing Route 53 record sets that are used for the backend service in each Region.`, ko: `각 리전의 백엔드 서비스에 사용되는 기존 Route 53 레코드 세트에 대해 TTL을 4초로 설정합니다.` },
      { k: 'C', en: `Create new record sets for the backend services by using a latency routing policy. Use the record sets as an origin in the CloudFront distribution.`, ko: `대기 시간 라우팅 정책을 사용하여 백엔드 서비스에 대한 새 레코드 세트를 생성합니다. CloudFront 배포에서 레코드 세트를 오리진으로 사용합니다.` },
      { k: 'D', en: `Create a CloudFront origin group that includes two origins, one for each backend service Region. Configure origin failover as a cache behavior for the CloudFront distribution.`, ko: `각 백엔드 서비스 리전에 하나씩, 두 개의 오리진을 포함하는 CloudFront 오리진 그룹을 생성합니다. CloudFront 배포에 대한 캐시 동작으로 오리진 장애 조치를 구성합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — CloudFront 오리진 그룹 + 오리진 장애 조치</span></p>
<p>CloudFront 오리진 장애 조치는 오리진에서 오류가 감지되면 <strong>즉시</strong> 보조 오리진으로 전환합니다. Route 53 기반 DNS 장애 조치는 TTL 만료 시간(현재 60초)에 종속되므로 항상 1분 이상 소요됩니다. TTL을 낮추면(옵션 B) DNS 캐시 문제를 완화할 수 있지만 DNS 부하가 증가하며 CloudFront 오리진 장애 조치만큼 빠르지 않습니다.</p>
<p>CloudFront 오리진 그룹에 기본(primary)과 보조(secondary) 오리진을 설정하고 오리진 장애 조치를 구성하면 DNS TTL과 무관하게 HTTP 오류 코드를 감지하는 즉시 전환합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html" target="_blank">CloudFront 오리진 장애 조치 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 추가 CloudFront 배포와 Route 53 장애 조치 조합은 여전히 DNS TTL에 종속되어 빠른 장애 조치를 달성할 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — TTL을 낮추면 도움이 되지만 DNS 과부하가 발생하며, CloudFront 오리진 장애 조치보다 여전히 느립니다.</p>
<p><span class="mark-no">❌ C</span> — 대기 시간 라우팅은 성능 최적화용이며, 장애 조치를 위한 솔루션이 아닙니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'CloudFront 오리진 장애 조치는 DNS TTL과 무관하게 HTTP 오류 감지 즉시 전환. Route 53 DNS 장애 조치는 TTL 만료 대기 필요. 가장 빠른 장애 조치 = CloudFront 오리진 그룹.' },
    ]
  },

  {
    n: 373,
    en: `A company is using multiple AWS accounts and has multiple DevOps teams running production and non-production workloads in these accounts. The company would like to centrally-restrict access to some of the AWS services that the DevOps teams do not use. The company decided to use AWS Organizations and successfully invited all AWS accounts into the Organization. They would like to allow access to services that are currently in-use and deny a few specific services. Also they would like to administer multiple accounts together as a single unit.<br><br>What combination of steps should the solutions architect take to satisfy these requirements? (Choose three.)`,
    ko: `한 회사가 여러 AWS 계정을 사용하고 있으며 여러 DevOps 팀이 프로덕션 및 비프로덕션 워크로드를 실행합니다. 회사는 DevOps 팀이 사용하지 않는 일부 AWS 서비스에 대한 액세스를 중앙에서 제한하려고 합니다. 회사는 AWS Organizations를 사용하기로 결정하고 모든 AWS 계정을 조직에 성공적으로 초대했습니다. 현재 사용 중인 서비스에 대한 액세스를 허용하고 몇 가지 특정 서비스를 거부하려고 합니다. 또한 여러 계정을 하나의 단위로 함께 관리하려고 합니다.<br><br>이 요구 사항을 충족하기 위한 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Use a Deny list strategy.`, ko: `거부 목록 전략을 사용합니다.` },
      { k: 'B', en: `Review the Access Advisor in AWS IAM to determine services recently used.`, ko: `AWS IAM의 Access Advisor를 검토하여 최근에 사용된 서비스를 확인합니다.` },
      { k: 'C', en: `Review the AWS Trusted Advisor report to determine services recently used.`, ko: `AWS Trusted Advisor 보고서를 검토하여 최근에 사용한 서비스를 확인합니다.` },
      { k: 'D', en: `Remove the default FullAWSAccess SCP.`, ko: `기본 FullAWSAccess SCP를 제거합니다.` },
      { k: 'E', en: `Define organizational units (OUs) and place the member accounts in the OUs.`, ko: `조직 단위(OU)를 정의하고 OU에 멤버 계정을 배치합니다.` },
      { k: 'F', en: `Remove the default DenyAWSAccess SCP.`, ko: `기본 DenyAWSAccess SCP를 제거합니다.` },
    ],
    answer: ['A', 'B', 'E'],
    vote: '92% ABE',
    explain: `<p><span class="mark-ok">✅ A, B, E — 거부 목록 전략 + IAM Access Advisor + OU 정의</span></p>
<p><strong>A — 거부 목록 전략:</strong> Organizations의 기본 FullAWSAccess SCP를 유지한 상태에서 제한할 특정 서비스에 대한 거부 SCP를 추가합니다. 이 방식은 현재 사용 중인 서비스를 모두 허용하면서 특정 서비스만 선택적으로 차단합니다.</p>
<p><strong>B — IAM Access Advisor:</strong> 각 계정의 IAM 사용자/역할이 실제로 사용한 서비스와 마지막 접근 시간을 보여줍니다. 어떤 서비스가 현재 사용 중인지 파악하여 거부 목록을 작성하는 데 필요한 정보를 제공합니다.</p>
<p><strong>E — OU 정의:</strong> 조직 단위를 사용하면 유사한 계정을 그룹화하여 단일 단위로 관리하고, OU 수준에서 SCP를 적용할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — AWS Trusted Advisor는 비용, 보안, 성능 모범 사례를 보고하지만 서비스별 최근 사용 내역을 상세히 제공하지 않습니다. IAM Access Advisor가 이 목적에 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — FullAWSAccess SCP를 제거하면 모든 접근이 차단됩니다. 거부 목록 전략에서는 FullAWSAccess를 유지하고 특정 서비스만 거부하는 SCP를 추가합니다.</p>
<p><span class="mark-no">❌ F</span> — DenyAWSAccess SCP는 Organizations에서 기본적으로 생성되지 않습니다. 존재하지 않는 SCP입니다.</p>`,
    disc: [
      { ans: 'ABE (92%)', txt: '거부 목록 전략: 기본 FullAWSAccess 유지 + 특정 서비스 거부 SCP 추가. Access Advisor로 현재 사용 서비스 파악. OU로 다중 계정 단일 단위 관리.' },
    ]
  },

  {
    n: 374,
    en: `A live-events company is designing a scaling solution for its ticket application on AWS. The application has high peaks of utilization during sale events. Each sale event is a one-time event that is scheduled. The application runs on Amazon EC2 instances that are in an Auto Scaling group. The application uses PostgreSQL for the database layer.<br><br>The company needs a scaling solution to maximize availability during the sale events.<br><br>Which solution will meet these requirements?`,
    ko: `한 라이브 이벤트 회사가 AWS에서 티켓 신청을 위한 확장 솔루션을 설계하고 있습니다. 이 애플리케이션은 세일 이벤트 기간 동안 활용도가 가장 높습니다. 각 판매 이벤트는 예정된 일회성 이벤트입니다. 애플리케이션은 Auto Scaling 그룹에 있는 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 데이터베이스 계층으로 PostgreSQL을 사용합니다.<br><br>회사는 세일 이벤트 중 가용성을 최대화하기 위해 확장 솔루션이 필요합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use a predictive scaling policy for the EC2 instances. Host the database on an Amazon Aurora PostgreSQL Serverless v2 Multi-AZ DB instance with automatically scaling read replicas. Create an AWS Step Functions state machine to run parallel AWS Lambda functions to pre-warm the database before a sale event. Create an Amazon EventBridge rule to invoke the state machine.`, ko: `EC2 인스턴스에 예측 확장 정책을 사용합니다. 읽기 전용 복제본을 자동으로 확장하여 Aurora PostgreSQL Serverless v2 다중 AZ DB 인스턴스에서 데이터베이스를 호스팅합니다. Step Functions 상태 머신을 생성하여 판매 이벤트 전에 데이터베이스를 미리 예열합니다. 상태 머신을 호출하는 EventBridge 규칙을 생성합니다.` },
      { k: 'B', en: `Use a scheduled scaling policy for the EC2 instances. Host the database on an Amazon RDS for PostgreSQL Multi-AZ DB instance with automatically scaling read replicas. Create an Amazon EventBridge rule that invokes an AWS Lambda function to create a larger read replica before a sale event. Fail over to the larger read replica. Create another EventBridge rule that invokes another Lambda function to scale down the read replica after the sale event.`, ko: `EC2 인스턴스에 예약된 확장 정책을 사용합니다. 읽기 전용 복제본을 자동으로 확장하여 RDS for PostgreSQL 다중 AZ DB 인스턴스에서 데이터베이스를 호스팅합니다. 판매 이벤트 전에 더 큰 읽기 전용 복제본을 생성하는 Lambda를 호출하는 EventBridge 규칙을 생성합니다. 더 큰 읽기 전용 복제본으로 장애 조치하고, 이벤트 후 축소합니다.` },
      { k: 'C', en: `Use a predictive scaling policy for the EC2 instances. Host the database on an Amazon RDS for PostgreSQL Multi-AZ DB instance with automatically scaling read replicas. Create an AWS Step Functions state machine to run parallel AWS Lambda functions to pre-warm the database before a sale event. Create an Amazon EventBridge rule to invoke the state machine.`, ko: `EC2 인스턴스에 예측 확장 정책을 사용합니다. 읽기 전용 복제본을 자동으로 확장하여 RDS for PostgreSQL 다중 AZ DB 인스턴스에서 데이터베이스를 호스팅합니다. Step Functions 상태 머신을 생성하여 판매 이벤트 전에 데이터베이스를 미리 예열합니다.` },
      { k: 'D', en: `Use a scheduled scaling policy for the EC2 instances. Host the database on an Amazon Aurora PostgreSQL Multi-AZ DB cluster. Create an Amazon EventBridge rule that invokes an AWS Lambda function to create a larger Aurora Replica before a sale event. Fail over to the larger Aurora Replica. Create another EventBridge rule that invokes another Lambda function to scale down the Aurora Replica after the sale event.`, ko: `EC2 인스턴스에 예약된 확장 정책을 사용합니다. Amazon Aurora PostgreSQL 다중 AZ DB 클러스터에서 데이터베이스를 호스팅합니다. 판매 이벤트 전에 더 큰 Aurora 복제본을 생성하는 Lambda를 호출하는 EventBridge 규칙을 생성합니다. 더 큰 Aurora 복제본으로 장애 조치하고, 이벤트 후 Aurora 복제본을 축소합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — 예약된 확장 정책 + Aurora PostgreSQL + 이벤트 전 사전 확장</span></p>
<p><strong>예약된 확장 정책:</strong> 판매 이벤트는 미리 예정된 일회성 이벤트입니다. 예측 확장 정책은 반복되는 과거 패턴에서 학습하는 방식이므로 적합하지 않습니다. 예약된 확장은 정해진 시간에 정확히 확장할 수 있습니다.</p>
<p><strong>Aurora PostgreSQL:</strong> Aurora는 RDS보다 향상된 가용성, 자동 장애 조치, 더 빠른 복제를 제공합니다. 특히 가용성 최대화 요구 사항에 적합합니다.</p>
<p><strong>사전 대형 복제본 생성 + 장애 조치:</strong> 이벤트 전에 더 큰 인스턴스의 Aurora 복제본을 미리 생성하고 장애 조치하면 트래픽 급증 시 데이터베이스 병목을 방지합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — 예측 확장 정책은 반복적인 과거 패턴을 기반으로 하므로 일회성 예정 이벤트에는 부적합합니다.</p>
<p><span class="mark-no">❌ B</span> — RDS for PostgreSQL의 읽기 복제본은 Aurora 복제본보다 장애 조치 시간이 더 깁니다. Aurora가 더 높은 가용성을 제공합니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: '예약된 확장은 일회성 예정 이벤트에 최적. Aurora PostgreSQL은 높은 가용성 제공. 이벤트 전 사전 대형 복제본 생성 후 장애 조치로 DB 병목 방지.' },
    ]
  },

  {
    n: 375,
    en: `A company runs an intranet application on premises. The company wants to configure a cloud backup of the application. The company has selected AWS Elastic Disaster Recovery for this solution.<br><br>The company requires that replication traffic does not travel through the public internet. The application also must not be accessible from the internet. The company does not want this solution to consume all available network bandwidth because other applications require bandwidth.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
    ko: `한 회사가 온프레미스에서 인트라넷 애플리케이션을 실행합니다. 회사는 애플리케이션의 클라우드 백업을 구성하려고 합니다. 회사는 이 솔루션을 위해 AWS Elastic Disaster Recovery를 선택했습니다.<br><br>회사에서는 복제 트래픽이 공용 인터넷을 통해 이동하지 않도록 요구합니다. 또한 인터넷에서 애플리케이션에 액세스할 수 없어야 합니다. 다른 응용 프로그램에는 대역폭이 필요하기 때문에 회사는 이 솔루션이 사용 가능한 모든 네트워크 대역폭을 소비하는 것을 원하지 않습니다.<br><br>이 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Create a VPC that has at least two private subnets, two NAT gateways, and a virtual private gateway.`, ko: `최소 2개의 프라이빗 서브넷, 2개의 NAT 게이트웨이 및 1개의 가상 프라이빗 게이트웨이가 있는 VPC를 생성합니다.` },
      { k: 'B', en: `Create a VPC that has at least two public subnets, a virtual private gateway, and an internet gateway.`, ko: `2개 이상의 퍼블릭 서브넷, 가상 프라이빗 게이트웨이 및 인터넷 게이트웨이가 있는 VPC를 생성합니다.` },
      { k: 'C', en: `Create an AWS Site-to-Site VPN connection between the on-premises network and the target AWS network.`, ko: `온프레미스 네트워크와 대상 AWS 네트워크 간에 AWS Site-to-Site VPN 연결을 생성합니다.` },
      { k: 'D', en: `Create an AWS Direct Connect connection and a Direct Connect gateway between the on-premises network and the target AWS network.`, ko: `온프레미스 네트워크와 대상 AWS 네트워크 사이에 AWS Direct Connect 연결과 Direct Connect 게이트웨이를 생성합니다.` },
      { k: 'E', en: `During configuration of the replication servers, select the option to use private IP addresses for data replication.`, ko: `복제 서버 구성 시 데이터 복제를 위해 개인 IP 주소를 사용하는 옵션을 선택합니다.` },
      { k: 'F', en: `During configuration of the launch settings for the target servers, select the option to ensure that the Recovery instance's private IP address matches the source server's private IP address.`, ko: `대상 서버의 시작 설정을 구성하는 동안 복구 인스턴스의 개인 IP 주소가 원본 서버의 개인 IP 주소와 일치하는지 확인하는 옵션을 선택합니다.` },
    ],
    answer: ['A', 'D', 'E'],
    vote: '73% ADE',
    explain: `<p><span class="mark-ok">✅ A, D, E — 프라이빗 서브넷 VPC + Direct Connect + 프라이빗 IP 복제</span></p>
<p><strong>A — 프라이빗 서브넷 VPC:</strong> 프라이빗 서브넷과 가상 프라이빗 게이트웨이를 포함하여 인터넷에서 접근 불가하도록 합니다. NAT 게이트웨이는 프라이빗 인스턴스에서 아웃바운드 통신을 위해 필요합니다.</p>
<p><strong>D — Direct Connect:</strong> VPN은 기존 인터넷 대역폭을 공유하므로 "다른 애플리케이션의 대역폭을 소비하지 않을 것"이라는 요구 사항을 충족하지 못합니다. Direct Connect는 전용 네트워크 연결을 제공하여 복제 트래픽을 분리합니다.</p>
<p><strong>E — 프라이빗 IP 복제:</strong> AWS Elastic Disaster Recovery에서 프라이빗 IP를 사용하도록 선택하면 복제 트래픽이 공용 인터넷을 통하지 않습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 퍼블릭 서브넷과 인터넷 게이트웨이를 사용하면 인터넷에서 애플리케이션에 액세스할 수 있어 요구 사항 위반입니다.</p>
<p><span class="mark-no">❌ C</span> — Site-to-Site VPN은 기존 인터넷 대역폭을 사용합니다. 복제 트래픽이 다른 애플리케이션의 대역폭을 소비하게 됩니다.</p>
<p><span class="mark-no">❌ F</span> — 프라이빗 IP 일치 설정은 복구 후 투명한 네트워크 연결에 유용하지만, 복제 중 인터넷 비통과 요구 사항과는 직접 관련이 없습니다.</p>`,
    disc: [
      { ans: 'ADE (73%)', txt: 'Direct Connect는 전용 회선으로 다른 앱 대역폭 영향 없음. 프라이빗 IP 복제 옵션으로 인터넷 비통과 보장. VPN은 인터넷 대역폭 공유로 요구 사항 미충족.' },
    ]
  },

  {
    n: 376,
    en: `A company that provides image storage services wants to deploy a customer-facing solution to AWS. Millions of individual customers will use the solution. The solution will receive batches of large image files, resize the files, and store the files in an Amazon S3 bucket for up to 6 months.<br><br>The solution must handle significant variance in demand. The solution must also be reliable at enterprise scale and have the ability to rerun processing jobs in the event of failure.<br><br>Which solution will meet these requirements MOST cost-effectively?`,
    ko: `이미지 스토리지 서비스를 제공하는 회사가 고객용 솔루션을 AWS에 배포하려고 합니다. 수백만 명의 개인 고객이 이 솔루션을 사용할 것입니다. 이 솔루션은 대용량 이미지 파일 배치를 수신하고, 파일 크기를 조정하고, 최대 6개월 동안 Amazon S3 버킷에 파일을 저장합니다.<br><br>솔루션은 수요의 상당한 변화를 처리해야 합니다. 또한 솔루션은 기업 규모에서 안정적이어야 하며 오류 발생 시 처리 작업을 다시 실행할 수 있는 기능도 갖추고 있어야 합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS Step Functions to process the S3 event that occurs when a user stores an image. Run an AWS Lambda function that resizes the image in place and replaces the original file in the S3 bucket. Create an S3 Lifecycle expiration policy to expire all stored images after 6 months.`, ko: `AWS Step Functions를 사용하여 사용자가 이미지를 저장할 때 발생하는 S3 이벤트를 처리합니다. 이미지의 크기를 조정하고 S3 버킷의 원본 파일을 바꾸는 AWS Lambda 함수를 실행합니다. 6개월 후에 저장된 모든 이미지가 만료되도록 S3 수명 주기 만료 정책을 생성합니다.` },
      { k: 'B', en: `Use Amazon EventBridge to process the S3 event that occurs when a user uploads an image. Run an AWS Lambda function that resizes the image in place and replaces the original file in the S3 bucket. Create an S3 Lifecycle expiration policy to expire all stored images after 6 months.`, ko: `Amazon EventBridge를 사용하여 사용자가 이미지를 업로드할 때 발생하는 S3 이벤트를 처리합니다. 이미지의 크기를 조정하고 S3 버킷의 원본 파일을 바꾸는 AWS Lambda 함수를 실행합니다. 6개월 후에 저장된 모든 이미지가 만료되도록 S3 수명 주기 만료 정책을 생성합니다.` },
      { k: 'C', en: `Use S3 Event Notifications to invoke an AWS Lambda function when a user stores an image. Use the Lambda function to resize the image in place and to store the original file in the S3 bucket. Create an S3 Lifecycle policy to move all stored images to S3 Standard-Infrequent Access (S3 Standard-IA) after 6 months.`, ko: `사용자가 이미지를 저장할 때 S3 이벤트 알림을 사용하여 AWS Lambda 함수를 호출합니다. Lambda 함수를 사용하여 이미지 크기를 조정하고 S3 버킷에 원본 파일을 저장합니다. 6개월 후에 저장된 모든 이미지를 S3 Standard-IA로 이동하는 S3 수명 주기 정책을 생성합니다.` },
      { k: 'D', en: `Use Amazon Simple Queue Service (Amazon SQS) to process the S3 event that occurs when a user stores an image. Run an AWS Lambda function that resizes the image and stores the resized file in an S3 bucket that uses S3 Standard-Infrequent Access (S3 Standard-IA). Create an S3 Lifecycle policy to move all stored images to S3 Glacier Deep Archive after 6 months.`, ko: `Amazon SQS를 사용하여 사용자가 이미지를 저장할 때 발생하는 S3 이벤트를 처리합니다. 이미지 크기를 조정하고 S3 Standard-IA를 사용하는 S3 버킷에 크기 조정된 파일을 저장하는 Lambda 함수를 실행합니다. 6개월 후에 저장된 모든 이미지를 S3 Glacier Deep Archive로 이동하는 S3 수명 주기 정책을 생성합니다.` },
    ],
    answer: ['B'],
    vote: 'B 43% / A 27% / D 24%',
    explain: `<p><span class="mark-ok">✅ B — EventBridge + Lambda + S3 수명 주기 만료 정책</span></p>
<p><strong>C, D 제외 이유:</strong> 요구 사항은 "최대 6개월 저장"입니다. C와 D는 6개월 이후에도 데이터를 보관(Standard-IA 이동, Glacier 이전)하는데, 이는 불필요한 비용입니다. 수명 주기 만료(삭제) 정책이 적합합니다.</p>
<p><strong>B vs A:</strong> A의 Step Functions는 S3 이벤트 알림의 직접 대상 목록(SNS, SQS, Lambda, EventBridge)에 포함되지 않습니다. EventBridge는 S3 이벤트를 처리하고 Lambda를 호출할 수 있으며, 기본적으로 최대 185회 재시도(24시간) 및 DLQ 구성을 통해 실패 처리가 가능합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html" target="_blank">S3 이벤트 알림 대상 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Step Functions는 S3 이벤트 알림의 직접 대상이 아닙니다. EventBridge를 거쳐야 하므로 A보다 B가 더 단순합니다.</p>
<p><span class="mark-no">❌ C</span> — 6개월 후 Standard-IA로 이동은 데이터를 계속 보관하는 것으로, "최대 6개월 저장" 요구 사항에 맞지 않으며 불필요한 비용이 발생합니다.</p>
<p><span class="mark-no">❌ D</span> — S3 Standard-IA + Glacier Deep Archive 이전은 6개월 이후에도 데이터를 계속 보관하는 방식으로 비용 효율적이지 않습니다.</p>`,
    disc: [
      { ans: 'B (43%)', txt: 'S3 이벤트 알림 직접 대상 목록: SNS, SQS, Lambda, EventBridge(Step Functions 미포함). C·D는 6개월 초과 보관으로 비용 낭비. EventBridge + Lambda + 만료 정책이 최적.' },
      { ans: 'A (27%)', txt: 'Step Functions의 내장 재시도 기능이 "실패 시 재실행" 요구를 더 잘 충족한다는 의견. 단, S3→EventBridge→Step Functions 경로가 필요하여 복잡성 증가.' },
      { ans: 'D (24%)', txt: 'SQS + Lambda가 재시도를 더 잘 지원한다는 의견이 있으나 6개월 초과 보관 문제로 비용 효율적이지 않음.' },
    ]
  },

  {
    n: 377,
    en: `A company has an organization in AWS Organizations that includes a separate AWS account for each of the company's departments. Application teams from different departments develop and deploy solutions independently.<br><br>The company wants to reduce compute costs and manage costs appropriately across departments. The company also wants to improve visibility into billing for individual departments. The company does not want to lose operational flexibility when the company selects compute resources.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사가 AWS Organizations의 조직을 이용하여 다수의 AWS 계정을 관리하고 있습니다. 다양한 부서의 애플리케이션 팀이 독립적으로 솔루션을 개발하고 배포합니다.<br><br>회사는 컴퓨팅 비용을 줄이고 부서 전체에서 비용을 적절하게 관리하기를 원합니다. 또한 회사는 개별 부서의 청구에 대한 가시성을 향상하고자 합니다. 회사는 컴퓨팅 리소스를 선택할 때 운영 유연성을 잃고 싶지 않습니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS Budgets for each department. Use Tag Editor to apply tags to appropriate resources. Purchase EC2 Instance Savings Plans.`, ko: `각 부서에 AWS 예산을 사용합니다. 태그 편집기를 사용하여 적절한 리소스에 태그를 적용합니다. EC2 Instance Savings Plan을 구매합니다.` },
      { k: 'B', en: `Configure AWS Organizations to use consolidated billing. Implement a tagging strategy that identifies departments. Use SCPs to apply tags to appropriate resources. Purchase EC2 Instance Savings Plans.`, ko: `통합 결제를 사용하도록 AWS Organizations를 구성합니다. 부서를 식별하는 태그 지정 전략을 구현합니다. SCP를 사용하여 적절한 리소스에 태그를 적용합니다. EC2 Instance Savings Plan을 구매합니다.` },
      { k: 'C', en: `Configure AWS Organizations to use consolidated billing. Implement a tagging strategy that identifies departments. Use Tag Editor to apply tags to appropriate resources. Purchase Compute Savings Plans.`, ko: `통합 결제를 사용하도록 AWS Organizations를 구성합니다. 부서를 식별하는 태그 지정 전략을 구현합니다. 태그 편집기를 사용하여 적절한 리소스에 태그를 적용합니다. Compute Savings Plan을 구매합니다.` },
      { k: 'D', en: `Use AWS Budgets for each department. Use SCPs to apply tags to appropriate resources. Purchase Compute Savings Plans.`, ko: `각 부서에 AWS 예산을 사용합니다. SCP를 사용하여 적절한 리소스에 태그를 적용합니다. Compute Savings Plan을 구매합니다.` },
    ],
    answer: ['C'],
    vote: '82% C',
    explain: `<p><span class="mark-ok">✅ C — 통합 결제 + Tag Editor + Compute Savings Plan</span></p>
<p><strong>통합 결제(Consolidated Billing):</strong> 여러 계정의 사용량을 합산하여 볼륨 할인을 최대화하고 부서별 청구 가시성을 제공합니다.</p>
<p><strong>Tag Editor:</strong> 기존 리소스에 태그를 일괄 적용할 수 있는 도구입니다. SCP는 주로 권한 제어 용도로, 태그 적용 도구가 아닙니다.</p>
<p><strong>Compute Savings Plan:</strong> EC2 인스턴스 유형·리전·OS에 관계없이 EC2, Lambda, Fargate에 적용됩니다. EC2 Instance Savings Plan보다 적용 범위가 넓어 <strong>운영 유연성을 유지</strong>하면서 비용을 절감합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — EC2 Instance Savings Plan은 특정 인스턴스 패밀리와 리전에 고정됩니다. 운영 유연성을 잃을 수 있습니다.</p>
<p><span class="mark-no">❌ B, D</span> — SCP는 주로 서비스 접근 제어를 위한 것으로, 리소스에 태그를 적용하는 도구가 아닙니다.</p>
<p><span class="mark-no">❌ A, D</span> — AWS Budgets는 비용 알림 도구이지 청구 통합 관리 도구가 아닙니다. 통합 결제가 부서별 비용 추적에 더 적합합니다.</p>`,
    disc: [
      { ans: 'C (82%)', txt: 'Compute Savings Plan은 EC2·Lambda·Fargate 모두 포함 = 운영 유연성 최대화. Tag Editor로 기존 리소스 태그 적용. 통합 결제로 부서별 비용 가시성 확보.' },
    ]
  },

  {
    n: 378,
    en: `A company has a web application that securely uploads pictures and videos to an Amazon S3 bucket. The company requires that only authenticated users are allowed to post content. The application generates a presigned URL that is used to upload objects through a browser interface. Most users are reporting slow upload times for objects larger than 100 MB.<br><br>What can a solutions architect do to improve the performance of these uploads while ensuring only authenticated users are allowed to post content?`,
    ko: `한 회사에 사진과 비디오를 Amazon S3 버킷에 안전하게 업로드하는 웹 애플리케이션이 있습니다. 회사는 인증된 사용자만이 콘텐츠를 게시할 수 있도록 요구하고 있습니다. 애플리케이션은 브라우저 인터페이스를 통해 객체를 업로드하는 데 사용되는 미리 서명된 URL을 생성합니다. 대부분의 사용자는 100MB보다 큰 개체의 업로드 시간이 느리다고 보고합니다.<br><br>인증된 사용자만 콘텐츠를 게시할 수 있도록 허용하면서 이러한 업로드 성능을 향상시키기 위해 솔루션 설계자는 무엇을 할 수 있습니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Set up an Amazon API Gateway with an edge-optimized API endpoint that has a resource as an S3 service proxy. Configure the PUT method for this resource to expose the S3 PutObject operation. Secure the API Gateway using a COGNITO_USER_POOLS authorizer. Have the browser interface use API Gateway instead of the presigned URL to upload objects.`, ko: `S3 서비스 프록시로 리소스가 있는 엣지 최적화 API 엔드포인트를 사용하여 Amazon API Gateway를 설정합니다. S3 PutObject 작업을 노출하려면 이 리소스에 대한 PUT 메서드를 구성합니다. COGNITO_USER_POOLS 권한 부여자를 사용하여 API Gateway를 보호합니다. 브라우저 인터페이스에서 미리 서명된 URL 대신 API Gateway를 사용하여 객체를 업로드하도록 합니다.` },
      { k: 'B', en: `Set up an Amazon API Gateway with a regional API endpoint that has a resource as an S3 service proxy. Configure the PUT method for this resource to expose the S3 PutObject operation. Secure the API Gateway using an AWS Lambda authorizer. Have the browser interface use API Gateway instead of the presigned URL to upload objects.`, ko: `S3 서비스 프록시로 리소스가 있는 지역 API 엔드포인트를 사용하여 Amazon API Gateway를 설정합니다. S3 PutObject 작업을 노출하려면 PUT 메서드를 구성합니다. AWS Lambda 권한 부여자를 사용하여 API Gateway를 보호합니다. 브라우저 인터페이스에서 미리 서명된 URL 대신 API Gateway를 사용하도록 합니다.` },
      { k: 'C', en: `Enable an S3 Transfer Acceleration endpoint on the S3 bucket. Use the endpoint when generating the presigned URL. Have the browser interface upload the objects to this URL using the S3 multipart upload API.`, ko: `S3 버킷에서 S3 Transfer Acceleration 엔드포인트를 활성화합니다. 미리 서명된 URL을 생성할 때 엔드포인트를 사용하세요. 브라우저 인터페이스가 S3 멀티파트 업로드 API를 사용하여 객체를 이 URL에 업로드하도록 합니다.` },
      { k: 'D', en: `Configure an Amazon CloudFront distribution for the destination S3 bucket. Enable PUT and POST methods for the CloudFront cache behavior. Update the CloudFront origin to use an origin access identity (OAI). Give the OAI user S3:PutObject permissions in the bucket policy. Have the browser interface upload objects using the CloudFront distribution.`, ko: `대상 S3 버킷에 대한 Amazon CloudFront 배포를 구성합니다. CloudFront 캐시 동작에 대해 PUT 및 POST 메서드를 활성화합니다. OAI(원본 액세스 ID)를 사용하도록 CloudFront 오리진을 업데이트합니다. 버킷 정책에서 OAI 사용자에게 S3:PutObject 권한을 부여합니다. CloudFront 배포를 사용하여 브라우저 인터페이스에서 객체를 업로드하도록 합니다.` },
    ],
    answer: ['C'],
    vote: '71% C',
    explain: `<p><span class="mark-ok">✅ C — S3 Transfer Acceleration + 멀티파트 업로드 + 미리 서명된 URL</span></p>
<p><strong>S3 Transfer Acceleration:</strong> CloudFront의 엣지 로케이션을 활용하여 클라이언트와 S3 사이의 데이터 전송 속도를 높입니다. 특히 원거리 사용자의 대용량 파일 업로드에 효과적입니다.</p>
<p><strong>멀티파트 업로드:</strong> 100MB 이상의 파일을 여러 파트로 나누어 병렬 업로드하므로 TCP 속도 제한을 극복하고 전반적인 업로드 성능을 향상시킵니다.</p>
<p><strong>인증 유지:</strong> 미리 서명된 URL 자체가 인증 메커니즘입니다. URL 생성 시 AWS 자격 증명이 필요하므로 인증된 사용자만 콘텐츠를 업로드할 수 있습니다. S3 Transfer Acceleration은 미리 서명된 URL과 완벽하게 호환됩니다.</p>
<p>📎 <a href="https://aws.amazon.com/blogs/compute/uploading-large-objects-to-amazon-s3-using-multipart-upload-and-transfer-acceleration/" target="_blank">S3 멀티파트 업로드 + Transfer Acceleration 블로그</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — API Gateway의 페이로드 크기 제한은 10MB입니다. 100MB 이상 파일 업로드에는 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudFront는 캐싱 목적의 서비스로 S3 업로드 가속화에 적합하지 않습니다. CloudFront를 통해 S3에 업로드하면 오히려 성능이 저하될 수 있습니다.</p>`,
    disc: [
      { ans: 'C (71%)', txt: 'S3 Transfer Acceleration + 멀티파트 업로드 = 대용량 파일 업로드 최적 조합. API Gateway 10MB 페이로드 제한으로 A·B 제외. 미리 서명된 URL이 인증 메커니즘 역할 유지.' },
    ]
  },

  {
    n: 379,
    en: `A large company is migrating its entire IT portfolio to AWS. Each business unit in the company has a standalone AWS account that supports both development and test environments. New accounts to support production workloads will be needed soon.<br><br>The finance department requires a centralized method for payment but must maintain visibility into each group's spending to allocate costs.<br><br>The security team requires a centralized mechanism to control IAM usage in all the company's accounts.<br><br>What combination of the following options meets the company's needs with the LEAST effort? (Choose two.)`,
    ko: `한 대기업이 전체 IT 포트폴리오를 AWS로 마이그레이션하고 있습니다. 회사의 각 사업부에는 개발 및 테스트 환경을 모두 지원하는 독립형 AWS 계정이 있습니다. 프로덕션 워크로드를 지원하기 위한 새로운 계정이 곧 필요할 것입니다.<br><br>재무 부서에는 중앙 집중식 결제 방법이 필요하지만 비용을 할당하기 위해 각 그룹의 지출에 대한 가시성을 유지해야 합니다.<br><br>보안 팀에는 회사의 모든 계정에서 IAM 사용을 제어하기 위한 중앙 집중식 메커니즘이 필요합니다.<br><br>최소한의 노력으로 이 요구 사항을 충족하는 옵션 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Use a collection of parameterized AWS CloudFormation templates defining common IAM permissions that are launched into each account. Require all new and existing accounts to launch the appropriate stacks to enforce the least privilege model.`, ko: `각 계정으로 시작되는 공통 IAM 권한을 정의하는 매개변수화된 AWS CloudFormation 템플릿 모음을 사용합니다. 최소 권한 모델을 시행하려면 모든 신규 및 기존 계정에서 적절한 스택을 시작해야 합니다.` },
      { k: 'B', en: `Use AWS Organizations to create a new organization from a chosen payer account and define an organizational unit hierarchy. Invite the existing accounts to join the organization and create new accounts using Organizations.`, ko: `AWS Organizations를 사용하여 선택한 지불자 계정에서 새 조직을 생성하고 조직 단위 계층 구조를 정의합니다. 기존 계정을 조직에 초대하고 조직을 사용하여 새 계정을 만듭니다.` },
      { k: 'C', en: `Require each business unit to use its own AWS accounts. Tag each AWS account appropriately and enable Cost Explorer to administer chargebacks.`, ko: `각 사업부가 자체 AWS 계정을 사용하도록 요구합니다. 각 AWS 계정에 적절하게 태그를 지정하고 비용 탐색기를 활성화하여 지불 거절을 관리합니다.` },
      { k: 'D', en: `Enable all features of AWS Organizations and establish appropriate service control policies that filter IAM permissions for sub-accounts.`, ko: `AWS Organizations의 모든 기능을 활성화하고 하위 계정에 대한 IAM 권한을 필터링하는 적절한 서비스 제어 정책을 설정합니다.` },
      { k: 'E', en: `Consolidate all of the company's AWS accounts into a single AWS account. Use tags for billing purposes and the IAM's Access Advisor feature to enforce the least privilege model.`, ko: `회사의 모든 AWS 계정을 단일 AWS 계정으로 통합합니다. 청구 목적으로 태그를 사용하고 IAM의 액세스 관리자 기능을 사용하여 최소 권한 모델을 시행합니다.` },
    ],
    answer: ['B', 'D'],
    vote: 'BD 65% / BC 35%',
    explain: `<p><span class="mark-ok">✅ B, D — AWS Organizations + SCP</span></p>
<p><strong>B — AWS Organizations:</strong> 선택한 지불자 계정에서 조직을 생성하면 <strong>중앙 집중식 결제(Consolidated Billing)</strong>가 자동으로 활성화됩니다. OU 계층 구조를 통해 부서별 비용 가시성도 제공합니다. 기존 계정 초대와 새 계정 생성을 모두 지원합니다.</p>
<p><strong>D — Organizations 모든 기능 활성화 + SCP:</strong> Organizations의 모든 기능을 활성화하면 SCP를 사용할 수 있습니다. SCP는 모든 하위 계정의 IAM 권한에 가드레일을 적용하여 보안 팀의 중앙 집중식 IAM 제어 요구를 충족합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFormation 템플릿을 모든 계정에 수동 배포하는 것은 최소 노력이 아니며, IAM의 중앙 집중식 제어를 보장하기 어렵습니다.</p>
<p><span class="mark-no">❌ C</span> — 각 계정에 개별 태그를 지정하는 것은 중앙 결제 관리(Consolidated Billing)를 제공하지 않습니다. Organizations 없이는 중앙 집중식 관리가 불가합니다.</p>
<p><span class="mark-no">❌ E</span> — 모든 계정을 단일 계정으로 통합하는 것은 현실적으로 불가능하며, 각 사업부의 독립성을 완전히 제거합니다.</p>`,
    disc: [
      { ans: 'BD (65%)', txt: 'B로 통합 결제 + OU 계층(재무 요구), D로 SCP 활성화(보안 팀 요구). 두 가지가 완전히 다른 요구 사항을 각각 충족.' },
      { ans: 'BC (35%)', txt: 'Cost Explorer + 태그 지정이 비용 할당 가시성 요구를 충족한다는 의견이 있으나, D의 SCP가 보안 팀 IAM 제어 요구를 더 직접적으로 충족.' },
    ]
  },

  {
    n: 380,
    en: `A company has a solution that analyzes weather data from thousands of weather stations. The weather stations send the data over an Amazon API Gateway REST API that has an AWS Lambda function integration. The Lambda function calls a third-party service for data pre-processing. The third-party service gets overloaded and fails the pre-processing, causing a loss of data.<br><br>A solutions architect must improve the resiliency of the solution. The solutions architect must ensure that no data is lost and that data can be processed later if failures occur.<br><br>What should the solutions architect do to meet these requirements?`,
    ko: `한 회사에 수천 개의 기상 관측소에서 수집된 기상 데이터를 분석하는 솔루션이 있습니다. 기상 관측소는 AWS Lambda 함수 통합이 있는 Amazon API Gateway REST API를 통해 데이터를 보냅니다. Lambda 함수는 데이터 사전 처리를 위해 타사 서비스를 호출합니다. 타사 서비스가 과부하되어 전처리에 실패하여 데이터가 손실됩니다.<br><br>솔루션 설계자는 솔루션의 탄력성을 향상해야 합니다. 데이터가 손실되지 않도록 하고 오류가 발생하면 나중에 데이터를 처리할 수 있도록 해야 합니다.<br><br>솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the queue as the dead-letter queue for the API.`, ko: `Amazon SQS 대기열을 생성합니다. 대기열을 API에 대한 배달 못한 편지 대기열로 구성합니다.` },
      { k: 'B', en: `Create two Amazon Simple Queue Service (Amazon SQS) queues: a primary queue and a secondary queue. Configure the secondary queue as the dead-letter queue for the primary queue. Update the API to use a new integration to the primary queue. Configure the Lambda function as the invocation target for the primary queue.`, ko: `두 개의 Amazon SQS 대기열(기본 대기열과 보조 대기열)을 생성합니다. 보조 대기열을 기본 대기열의 배달 못한 편지 대기열로 구성합니다. 기본 대기열에 대한 새로운 통합을 사용하도록 API를 업데이트합니다. Lambda 함수를 기본 대기열의 호출 대상으로 구성합니다.` },
      { k: 'C', en: `Create two Amazon EventBridge event buses: a primary event bus and a secondary event bus. Update the API to use a new integration to the primary event bus. Configure an EventBridge rule to react to all events on the primary event bus. Specify the Lambda function as the target of the rule. Configure the secondary event bus as the failure destination for the Lambda function.`, ko: `두 개의 Amazon EventBridge 이벤트 버스(기본 이벤트 버스와 보조 이벤트 버스)를 생성합니다. 기본 이벤트 버스에 대한 새로운 통합을 사용하도록 API를 업데이트합니다. 기본 이벤트 버스의 모든 이벤트에 반응하도록 EventBridge 규칙을 구성합니다. Lambda 함수를 규칙의 대상으로 지정합니다. Lambda 함수의 실패 대상으로 보조 이벤트 버스를 구성합니다.` },
      { k: 'D', en: `Create a custom Amazon EventBridge event bus. Configure the event bus as the failure destination for the Lambda function.`, ko: `사용자 지정 Amazon EventBridge 이벤트 버스를 생성합니다. 이벤트 버스를 Lambda 함수의 실패 대상으로 구성합니다.` },
    ],
    answer: ['B'],
    vote: '92% B',
    explain: `<p><span class="mark-ok">✅ B — 기본 SQS + DLQ(보조 SQS) + Lambda 트리거</span></p>
<p><strong>데이터 손실 방지:</strong> API Gateway를 SQS 직접 통합으로 구성하면 Lambda 처리가 실패해도 메시지가 SQS 대기열에 보존됩니다. 기존 Lambda→API Gateway 방식에서는 Lambda 실패 시 데이터가 사라집니다.</p>
<p><strong>나중에 처리 가능:</strong> 처리 실패가 반복되면 메시지가 DLQ(보조 SQS)로 이동합니다. 타사 서비스가 복구된 후 DLQ의 메시지를 다시 처리할 수 있습니다.</p>
<p><strong>SQS vs EventBridge:</strong> SQS는 API Gateway와 네이티브로 직접 통합(Direct Integration)되어 Lambda 없이도 메시지를 수신합니다. EventBridge는 이벤트 라우팅에 적합하지만 API Gateway와의 대량 이벤트 처리에서는 SQS가 더 적합합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — API에 대한 DLQ 설정만으로는 Lambda 처리 실패 시 데이터를 보존하지 못합니다. 처리 파이프라인 자체에 내구성이 필요합니다.</p>
<p><span class="mark-no">❌ C, D</span> — EventBridge 이벤트 버스는 API Gateway와 통합 시 처리량 제한이 있으며, 대용량 기상 데이터 수집에는 SQS가 더 확장성이 있고 적합합니다.</p>`,
    disc: [
      { ans: 'B (92%)', txt: 'API Gateway → SQS 직접 통합으로 Lambda 실패와 무관하게 데이터 보존. DLQ(보조 SQS)로 나중에 재처리 가능. SQS가 EventBridge보다 대량 데이터 버퍼링에 적합.' },
    ]
  },
];