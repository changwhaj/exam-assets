window.QS_SET19 = [
  {
    n: 181,
    en: `A company is designing its network configuration in the AWS Cloud. The company uses AWS Organizations to manage a multi-account setup. The company has three OUs. Each OU contains more than 100 AWS accounts. Each account has a single VPC, and all the VPCs in each OU are in the same AWS Region.<br><br>The CIDR ranges for all the AWS accounts do not overlap. The company needs to implement a solution in which VPCs in the same OU can communicate with each other but cannot communicate with VPCs in other OUs.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사가 AWS 클라우드에서 네트워크 구성을 설계하고 있습니다. 회사는 AWS Organizations를 사용하여 다중 계정 설정을 관리합니다. 회사에는 3개의 OU가 있습니다. 각 OU에는 100개 이상의 AWS 계정이 포함되어 있습니다. 각 계정에는 단일 VPC가 있으며 각 OU의 모든 VPC는 동일한 AWS 리전에 있습니다.<br><br>모든 AWS 계정의 CIDR 범위는 겹치지 않습니다. 회사는 동일한 OU에 있는 VPC가 서로 통신할 수 있지만 다른 OU에 있는 VPC와는 통신할 수 없는 솔루션을 구현해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an AWS CloudFormation stack set that establishes VPC peering between accounts in each OU. Provision the stack set in each OU.`, ko:`각 OU의 계정 간에 VPC 피어링을 설정하는 AWS CloudFormation 스택 세트를 생성합니다. 각 OU에 스택 세트를 프로비저닝합니다.` },
      { k:'B', en:`In each OU, create a dedicated networking account that has a single VPC. Share this VPC with all the other accounts in the OU by using AWS Resource Access Manager (AWS RAM). Create a VPC peering connection between the networking account and each account in the OU.`, ko:`각 OU에서 단일 VPC가 있는 전용 네트워킹 계정을 생성합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 이 VPC를 OU의 다른 모든 계정과 공유합니다. 네트워킹 계정과 OU의 각 계정 간에 VPC 피어링 연결을 생성합니다.` },
      { k:'C', en:`Provision a transit gateway in an account in each OU. Share the transit gateway across the organization by using AWS Resource Access Manager (AWS RAM). Create transit gateway VPC attachments for each VPC.`, ko:`각 OU의 계정에 전송 게이트웨이를 프로비저닝합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 조직 전체에서 전송 게이트웨이를 공유합니다. 각 VPC에 대해 Transit Gateway VPC 연결을 생성합니다.` },
      { k:'D', en:`In each OU, create a dedicated networking account that has a single VPC. Establish a VPN connection between the networking account and the other accounts in the OU. Use third-party routing software to route transitive traffic between the VPCs.`, ko:`각 OU에서 단일 VPC가 있는 전용 네트워킹 계정을 생성합니다. 네트워킹 계정과 OU의 다른 계정 간에 VPN 연결을 설정합니다. 타사 라우팅 소프트웨어를 사용하여 VPC 간에 전이적 트래픽을 라우팅합니다.` },
    ],
    answer: ['C'],
    vote: '72% C',
    explain: `<p><span class="mark-ok">✅ C — OU별 Transit Gateway + RAM 공유 + 라우팅 테이블로 OU 간 격리</span></p>
<p>각 OU에 전용 Transit Gateway를 프로비저닝하고, AWS RAM을 통해 해당 OU 내 계정들과 공유합니다. 각 VPC를 해당 OU의 TGW에 연결(Attachment)합니다. TGW 라우팅 테이블을 구성하여 동일 OU 내 VPC 간 통신은 허용하고 다른 OU와는 격리합니다. VPC 피어링(최대 125개 제한)보다 수백 개 계정 연결에 적합하며 운영 오버헤드도 낮습니다.</p>
<p><a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-isolated.html" target="_blank">AWS 공식 문서: Transit Gateway 격리 VPC</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — VPC 피어링은 VPC당 활성 피어링 연결이 최대 125개로 제한됩니다. 각 OU에 100개 이상의 계정이 있으면 풀 메시 구성 시 이 한도를 초과합니다.</p>
<p><span class="mark-no">❌ B</span> — VPC 피어링의 125개 제한 동일 문제 발생. 또한 허브-스포크 방식이어도 각 계정마다 피어링을 수동으로 관리해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — 타사 라우팅 소프트웨어 사용은 높은 운영 오버헤드를 유발하며 AWS 네이티브 서비스로 해결 가능한 문제입니다.</p>`,
    disc: [
      { ans:'C (72%)', txt:'VPC 피어링 125개 한도로 A/B 탈락. 타사 라우팅 소프트웨어로 D 탈락. OU별 TGW를 RAM으로 공유하고 라우팅 테이블로 OU 간 격리 구현' },
    ]
  },
  {
    n: 182,
    en: `A company is migrating an application to AWS. It wants to use fully managed services as much as possible during the migration. The company needs to store large important documents within the application with the following requirements:<br><br>1. The data must be highly durable and available<br>2. The data must always be encrypted at rest and in transit<br>3. The encryption key must be managed by the company and rotated periodically<br><br>Which of the following solutions should the solutions architect recommend?`,
    ko: `한 회사가 애플리케이션을 AWS로 마이그레이션하고 있습니다. 마이그레이션 중에 완전 관리형 서비스를 최대한 많이 사용하려고 합니다. 회사는 다음 요구 사항에 따라 대용량 중요 문서를 애플리케이션 내에 저장해야 합니다.<br><br>1. 데이터의 내구성과 가용성이 높아야 합니다<br>2. 데이터는 저장 및 전송 중에 항상 암호화되어야 합니다<br>3. 암호화 키는 회사에서 관리해야 합니다. 주기적으로 교체됩니다.<br><br>솔루션 설계자가 권장해야 하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Deploy the storage gateway to AWS in file gateway mode. Use Amazon EBS volume encryption using an AWS KMS key to encrypt the storage gateway volumes.`, ko:`파일 게이트웨이 모드로 스토리지 게이트웨이를 AWS에 배포합니다. AWS KMS 키를 사용하여 Amazon EBS 볼륨 암호화를 사용하여 스토리지 게이트웨이 볼륨을 암호화합니다.` },
      { k:'B', en:`Use Amazon S3 with a bucket policy to enforce HTTPS for connections to the bucket and to enforce server-side encryption and AWS KMS for object encryption.`, ko:`버킷 정책과 함께 Amazon S3를 사용하여 버킷 연결에 HTTPS를 적용하고 객체 암호화를 위해 서버 측 암호화 및 AWS KMS를 적용합니다.` },
      { k:'C', en:`Use Amazon DynamoDB with SSL to connect to DynamoDB. Use an AWS KMS key to encrypt DynamoDB objects at rest.`, ko:`SSL과 함께 Amazon DynamoDB를 사용하여 DynamoDB에 연결합니다. AWS KMS 키를 사용하여 저장 중인 DynamoDB 객체를 암호화합니다.` },
      { k:'D', en:`Deploy instances with Amazon EBS volumes attached to store this data. Use EBS volume encryption using an AWS KMS key to encrypt the data.`, ko:`이 데이터를 저장하기 위해 Amazon EBS 볼륨이 연결된 인스턴스를 배포합니다. AWS KMS 키를 사용하여 EBS 볼륨 암호화를 사용하여 데이터를 암호화합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Amazon S3 + 버킷 정책(HTTPS 강제) + SSE-KMS</span></p>
<p>모든 3가지 요구사항을 완전 관리형 서비스로 충족합니다. S3는 99.999999999%(11 9s)의 내구성과 고가용성을 제공합니다(요건 1). 버킷 정책으로 HTTPS만 허용(전송 중 암호화, 요건 2)하고 SSE-KMS(서버 측 암호화 + AWS KMS)로 저장 시 암호화(요건 2)를 구성합니다. AWS KMS 고객 관리형 키(CMK)를 사용하면 회사가 키를 직접 관리하고 주기적으로 교체할 수 있습니다(요건 3). DynamoDB는 대용량 문서 저장에 부적합(아이템 크기 400KB 제한)합니다. EBS는 완전 관리형이 아닙니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Storage Gateway는 하이브리드 환경을 위한 서비스로 완전 관리형이 아닙니다. EBS 암호화는 Storage Gateway 볼륨에 적용되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — DynamoDB는 아이템 크기가 최대 400KB로 제한되어 "대용량 중요 문서" 저장에 부적합합니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 인스턴스 + EBS는 완전 관리형이 아닙니다. 인스턴스 관리, 패치, 운영 오버헤드가 발생합니다.</p>`,
    disc: [
      { ans:'B (100%)', txt:'S3=11 9s 내구성+고가용성. 버킷 정책으로 HTTPS 강제. SSE-KMS로 저장 암호화. KMS CMK로 키 직접 관리 및 교체. DynamoDB는 400KB 제한으로 대용량 문서 부적합' },
    ]
  },
  {
    n: 183,
    en: `A company's public API runs as tasks on Amazon Elastic Container Service (Amazon ECS). The tasks run on AWS Fargate behind an Application Load Balancer (ALB) and are configured with Service Auto Scaling for the tasks based on CPU utilization. This service has been running well for several months.<br><br>Recently, API performance slowed down and made the application unusable. The company discovered that a significant number of SQL injection attacks had occurred against the API and that the API service had scaled to its maximum amount.<br><br>A solutions architect needs to implement a solution that prevents SQL injection attacks from reaching the ECS API service. The solution must allow legitimate traffic through and must maximize operational efficiency.<br><br>Which solution meets these requirements?`,
    ko: `회사의 공개 API는 Amazon Elastic Container Service(Amazon ECS)에서 작업으로 실행됩니다. 작업은 ALB(Application Load Balancer) 뒤의 AWS Fargate에서 실행되며 CPU 사용률을 기반으로 작업을 위해 서비스 자동 조정으로 구성됩니다. 이 서비스는 몇 달 동안 잘 운영되어 왔습니다.<br><br>최근 API 성능이 저하되어 애플리케이션을 사용할 수 없게 되었습니다. 회사는 API에 대해 상당수의 SQL 주입 공격이 발생했으며 API 서비스가 최대 수준으로 확장되었음을 발견했습니다.<br><br>솔루션 설계자는 SQL 주입 공격이 ECS API 서비스에 도달하는 것을 방지하는 솔루션을 구현해야 합니다. 솔루션은 합법적인 트래픽을 허용해야 하며 운영 효율성을 극대화해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a new AWS WAF web ACL to monitor the HTTP requests and HTTPS requests that are forwarded to the ALB in front of the ECS tasks.`, ko:`새로운 AWS WAF 웹 ACL을 생성하여 ECS 작업 이전에 ALB로 전달되는 HTTP 요청 및 HTTPS 요청을 모니터링합니다.` },
      { k:'B', en:`Create a new AWS WAF Bot Control implementation. Add a rule in the AWS WAF Bot Control managed rule group to monitor traffic and allow only legitimate traffic to the ALB in front of the ECS tasks.`, ko:`새로운 AWS WAF 봇 제어 구현을 생성합니다. AWS WAF Bot Control 관리형 규칙 그룹에 규칙을 추가하여 트래픽을 모니터링하고 ECS 작업 이전에 ALB에 대한 합법적인 트래픽만 허용합니다.` },
      { k:'C', en:`Create a new AWS WAF web ACL. Add a new rule that blocks requests that match the SQL database rule group. Set the web ACL to allow all other traffic that does not match those rules. Attach the web ACL to the ALB in front of the ECS tasks.`, ko:`새로운 AWS WAF 웹 ACL을 생성합니다. SQL 데이터베이스 규칙 그룹과 일치하는 요청을 차단하는 새 규칙을 추가합니다. 해당 규칙과 일치하지 않는 다른 모든 트래픽을 허용하도록 웹 ACL을 설정합니다. ECS 작업 앞의 ALB에 웹 ACL을 연결합니다.` },
      { k:'D', en:`Create a new AWS WAF web ACL. Create a new empty IP set in AWS WAF. Add a new rule to the web ACL to block requests that originate from IP addresses in the new IP set. Create an AWS Lambda function that scrapes the API logs for IP addresses that send SQL injection attacks, and add those IP addresses to the IP set. Attach the web ACL to the ALB in front of the ECS tasks.`, ko:`새로운 AWS WAF 웹 ACL을 생성합니다. AWS WAF에서 새로운 빈 IP 세트를 생성합니다. 새 IP 세트의 IP 주소에서 시작되는 요청을 차단하려면 웹 ACL에 새 규칙을 추가합니다. SQL 주입 공격을 보내는 IP 주소에 대한 API 로그를 스크랩하고 해당 IP 주소를 IP 세트에 추가하는 AWS Lambda 함수를 생성합니다. ECS 작업 앞의 ALB에 웹 ACL을 연결합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — AWS WAF SQL 데이터베이스 규칙 그룹으로 SQLi 차단</span></p>
<p>AWS WAF의 <strong>SQL 데이터베이스 관리형 규칙 그룹</strong>은 SQL 주입과 같은 SQL 데이터베이스 악용 패턴을 포함하는 요청을 자동으로 차단합니다. 이 규칙 그룹을 사용하는 웹 ACL을 생성하고, SQLi 패턴과 일치하는 요청은 차단하되 나머지 합법적인 트래픽은 허용합니다. ALB에 웹 ACL을 연결하면 ECS 서비스에 공격이 도달하기 전에 차단됩니다. AWS 관리형 규칙 그룹을 사용하므로 추가 관리 없이도 최신 위협 패턴이 자동 업데이트됩니다.</p>
<p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-use-case.html" target="_blank">AWS 공식 문서: AWS 관리형 WAF 규칙 그룹 - 사용 사례</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 단순히 "모니터링"만 하는 웹 ACL은 공격을 차단하지 않습니다. SQL 주입이 ECS에 계속 도달합니다.</p>
<p><span class="mark-no">❌ B</span> — AWS WAF Bot Control은 스크래퍼, 스캐너, 크롤러 등 봇 트래픽을 제어하는 서비스입니다. SQL 주입 공격 패턴 감지에 최적화되지 않았습니다.</p>
<p><span class="mark-no">❌ D</span> — IP 기반 차단은 사후 대응적(Reactive) 방식으로 공격 발생 후에만 IP를 추가할 수 있습니다. 새로운 IP 주소에서 오는 공격은 초기에 차단되지 않습니다. 운영 효율성도 낮습니다.</p>`,
    disc: [
      { ans:'C (100%)', txt:'SQL 데이터베이스 관리형 규칙 그룹이 SQLi 패턴을 선제적으로 차단. Bot Control은 봇 제어 목적. IP 차단(D)은 사후 대응적이어서 초기 공격 미차단' },
    ]
  },
  {
    n: 184,
    en: `An environmental company is deploying sensors in major cities throughout a country to measure air quality. The sensors connect to AWS IoT Core to ingest timeseries data readings. The company stores the data in Amazon DynamoDB.<br><br>For business continuity, the company must have the ability to ingest and store data in two AWS Regions.<br><br>Which solution will meet these requirements?`,
    ko: `한 환경 회사가 공기 질을 측정하기 위해 전국 주요 도시에 센서를 배치하고 있습니다. 센서는 AWS IoT Core에 연결하여 시계열 데이터 판독값을 수집합니다. 회사는 Amazon DynamoDB에 데이터를 저장합니다.<br><br>비즈니스 연속성을 위해 회사는 두 개의 AWS 리전에서 데이터를 수집하고 저장할 수 있어야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an Amazon Route 53 alias failover routing policy with values for AWS IoT Core data endpoints in both Regions. Migrate data to Amazon Aurora global tables.`, ko:`두 리전의 AWS IoT Core 데이터 엔드포인트에 대한 값을 사용하여 Amazon Route 53 별칭 장애 조치 라우팅 정책을 생성합니다. 데이터를 Amazon Aurora 글로벌 테이블로 마이그레이션합니다.` },
      { k:'B', en:`Create a domain configuration for AWS IoT Core in each Region. Create an Amazon Route 53 latency-based routing policy. Use AWS IoT Core data endpoints in both Regions as values. Migrate the data to Amazon MemoryDB for Redis and configure cross-Region replication.`, ko:`각 리전에서 AWS IoT Core에 대한 도메인 구성을 생성합니다. Amazon Route 53 지연 시간 기반 라우팅 정책을 생성합니다. 두 리전 모두에서 AWS IoT Core 데이터 엔드포인트를 값으로 사용합니다. 데이터를 Redis용 Amazon MemoryDB로 마이그레이션하고 리전 간 복제를 구성합니다.` },
      { k:'C', en:`Create a domain configuration for AWS IoT Core in each Region. Create an Amazon Route 53 health check that evaluates domain configuration health. Create a failover routing policy with values for the domain name from the AWS IoT Core domain configurations. Update the DynamoDB table to a global table.`, ko:`각 리전에서 AWS IoT Core에 대한 도메인 구성을 생성합니다. 도메인 구성 상태를 평가하는 Amazon Route 53 상태 확인을 생성합니다. AWS IoT Core 도메인 구성의 도메인 이름 값을 사용하여 장애 조치 라우팅 정책을 생성합니다. DynamoDB 테이블을 전역 테이블로 업데이트합니다.` },
      { k:'D', en:`Create an Amazon Route 53 latency-based routing policy. Use AWS IoT Core data endpoints in both Regions as values. Configure DynamoDB streams and cross-Region data replication.`, ko:`Amazon Route 53 지연 시간 기반 라우팅 정책을 생성합니다. 두 리전 모두에서 AWS IoT Core 데이터 엔드포인트를 값으로 사용합니다. DynamoDB 스트림과 리전 간 데이터 복제를 구성합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — IoT Core 도메인 구성 + Route 53 장애 조치 + DynamoDB 글로벌 테이블</span></p>
<p>비즈니스 연속성을 위해 두 리전에서 데이터를 수집/저장하는 완전한 DR 솔루션입니다. 각 리전에 <strong>IoT Core 도메인 구성</strong>을 생성하면 사용자 지정 엔드포인트를 사용할 수 있습니다. Route 53 <strong>장애 조치 라우팅 정책</strong>과 상태 확인을 통해 기본 리전 장애 시 자동으로 보조 리전으로 전환됩니다. <strong>DynamoDB 글로벌 테이블</strong>은 두 리전 간 실시간 복제를 제공하여 데이터 일관성을 보장합니다. IoT Core 기본 데이터 엔드포인트는 Route 53 별칭 레코드를 지원하지 않아 도메인 구성이 필요합니다.</p>
<p><a href="https://aws.amazon.com/solutions/implementations/disaster-recovery-for-aws-iot/" target="_blank">AWS 공식 문서: AWS IoT 재해 복구 솔루션</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS IoT Core 기본 데이터 엔드포인트는 Route 53 별칭 레코드와 함께 직접 사용할 수 없습니다. DynamoDB를 Aurora로 교체할 이유가 없습니다.</p>
<p><span class="mark-no">❌ B</span> — 지연 시간 기반 라우팅은 비즈니스 연속성(장애 조치)이 아닌 성능 최적화에 사용됩니다. DynamoDB를 MemoryDB(Redis)로 교체할 필요가 없습니다.</p>
<p><span class="mark-no">❌ D</span> — DynamoDB 스트림 기반 교차 리전 복제는 수동 구현이 필요하여 운영 오버헤드가 높습니다. 글로벌 테이블이 이미 내장된 복제를 제공합니다.</p>`,
    disc: [
      { ans:'C (100%)', txt:'IoT Core 도메인 구성으로 커스텀 엔드포인트 생성 → Route 53 장애 조치 라우팅 가능. DynamoDB 글로벌 테이블로 리전 간 실시간 복제. A/B는 DB 교체 불필요, D는 수동 복제로 오버헤드' },
    ]
  },
  {
    n: 185,
    en: `A company uses AWS Organizations for a multi-account setup in the AWS Cloud. The company's finance team has a data processing application that uses AWS Lambda and Amazon DynamoDB. The company's marketing team wants to access the data that is stored in the DynamoDB table.<br><br>The DynamoDB table contains confidential data. The marketing team can have access to only specific attributes of data in the DynamoDB table. The finance team and the marketing team have separate AWS accounts.<br><br>What should a solutions architect do to provide the marketing team with the appropriate access to the DynamoDB table?`,
    ko: `회사는 AWS 클라우드에서 다중 계정 설정을 위해 AWS Organizations를 사용합니다. 회사의 재무팀에는 AWS Lambda 및 Amazon DynamoDB를 사용하는 데이터 처리 애플리케이션이 있습니다. 회사의 마케팅 팀은 DynamoDB 테이블에 저장된 데이터에 액세스하려고 합니다.<br><br>DynamoDB 테이블에는 기밀 데이터가 포함되어 있습니다. 마케팅 팀은 DynamoDB 테이블에 있는 데이터의 특정 속성에만 액세스할 수 있습니다. 재무팀과 마케팅팀은 별도의 AWS 계정을 가지고 있습니다.<br><br>마케팅 팀에 DynamoDB 테이블에 대한 적절한 액세스 권한을 제공하려면 솔루션 아키텍트가 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an SCP to grant the marketing team's AWS account access to the specific attributes of the DynamoDB table. Attach the SCP to the OU of the finance team.`, ko:`마케팅 팀의 AWS 계정에 DynamoDB 테이블의 특정 속성에 대한 액세스 권한을 부여하려면 SCP를 생성하십시오. 재무팀의 OU에 SCP를 연결합니다.` },
      { k:'B', en:`Create an IAM role in the finance team's account by using IAM policy conditions for specific DynamoDB attributes (fine-grained access control). Establish trust with the marketing team's account. In the marketing team's account, create an IAM role that has permissions to assume the IAM role in the finance team's account.`, ko:`특정 DynamoDB 속성(세분화된 액세스 제어)에 대한 IAM 정책 조건을 사용하여 재무팀의 계정에 IAM 역할을 생성합니다. 마케팅팀의 계정에 대한 신뢰를 구축하세요. 마케팅팀 계정에서 재무팀 계정의 IAM 역할을 맡을 수 있는 권한이 있는 IAM 역할을 생성합니다.` },
      { k:'C', en:`Create a resource-based IAM policy that includes conditions for specific DynamoDB attributes (fine-grained access control). Attach the policy to the DynamoDB table. In the marketing team's account, create an IAM role that has permissions to access the DynamoDB table in the finance team's account.`, ko:`특정 DynamoDB 속성(세분화된 액세스 제어)에 대한 조건을 포함하는 리소스 기반 IAM 정책을 생성합니다. DynamoDB 테이블에 정책을 연결합니다. 마케팅 팀 계정에서 재무 팀 계정의 DynamoDB 테이블에 액세스할 수 있는 권한이 있는 IAM 역할을 생성합니다.` },
      { k:'D', en:`Create an IAM role in the finance team's account to access the DynamoDB table. Use an IAM permissions boundary to limit the access to the specific attributes. In the marketing team's account, create an IAM role that has permissions to assume the IAM role in the finance team's account.`, ko:`재무팀의 계정에 IAM 역할을 생성하여 DynamoDB 테이블에 액세스합니다. IAM 권한 경계를 사용하여 특정 속성에 대한 액세스를 제한합니다. 마케팅팀 계정에서 재무팀 계정의 IAM 역할을 맡을 수 있는 권한이 있는 IAM 역할을 생성합니다.` },
    ],
    answer: ['B'],
    vote: '90% B',
    explain: `<p><span class="mark-ok">✅ B — 교차 계정 IAM 역할 + DynamoDB 세분화된 액세스 제어(FGAC)</span></p>
<p>DynamoDB의 <strong>세분화된 액세스 제어(Fine-Grained Access Control)</strong>는 IAM 정책 조건을 사용하여 특정 속성(항목의 특정 열)에만 접근을 제한합니다. 재무팀 계정에서 IAM 역할을 생성하고 마케팅팀 계정을 신뢰하는 신뢰 정책을 설정합니다. 마케팅팀은 이 역할을 Assume하여 허용된 속성에만 접근합니다. 이것이 교차 계정 DynamoDB 접근 제어의 AWS 표준 패턴입니다.</p>
<p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_dynamodb_attributes.html" target="_blank">AWS 공식 문서: DynamoDB 속성 수준 접근 제어</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SCP(서비스 제어 정책)는 권한을 부여하지 않고 제한하는 데 사용됩니다. 다른 계정에 DynamoDB 속성 수준 접근 권한을 부여하는 용도가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 2024년 3월부터 DynamoDB가 리소스 기반 정책을 지원하기 시작했지만, 이 문제 출제 시점에는 지원되지 않았습니다. 시험 답안으로는 B가 정확합니다.</p>
<p><span class="mark-no">❌ D</span> — IAM 권한 경계(Permissions Boundary)는 특정 속성 수준의 접근 제한에 사용되지 않습니다. 권한 경계는 IAM 엔티티가 가질 수 있는 최대 권한을 설정하는 데 사용됩니다.</p>`,
    disc: [
      { ans:'B (90%)', txt:'DynamoDB FGAC는 IAM 정책 조건(dynamodb:Attributes)으로 속성 수준 접근 제어 구현. 교차 계정 접근은 IAM 역할 신뢰 관계로 구성. SCP는 권한 부여 불가' },
    ]
  },
  {
    n: 186,
    en: `A solutions architect is creating an application that stores objects in an Amazon S3 bucket. The solutions architect must deploy the application in two AWS Regions that will be used simultaneously. The objects in the two S3 buckets must remain synchronized with each other.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose three.)`,
    ko: `솔루션 아키텍트는 Amazon S3 버킷에 객체를 저장하는 애플리케이션을 생성하고 있습니다. 솔루션 아키텍트는 동시에 사용될 두 개의 AWS 지역에 애플리케이션을 배포해야 합니다. 두 S3 버킷의 객체는 서로 동기화된 상태를 유지해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Create an S3 Multi-Region Access Point. Change the application to refer to the Multi-Region Access Point.`, ko:`S3 다중 지역 액세스 포인트 생성. 다중 지역 액세스 포인트를 참조하도록 애플리케이션 변경.` },
      { k:'B', en:`Configure two-way S3 Cross-Region Replication (CRR) between the two S3 buckets.`, ko:`두 S3 버킷 간에 양방향 S3 교차 리전 복제(CRR) 구성.` },
      { k:'C', en:`Modify the application to store objects in each S3 bucket.`, ko:`각 S3 버킷에 객체를 저장하도록 애플리케이션을 수정합니다.` },
      { k:'D', en:`Create an S3 Lifecycle rule for each S3 bucket to copy objects from one S3 bucket to the other S3 bucket.`, ko:`각 S3 버킷에 대해 S3 수명 주기 규칙을 생성하여 한 S3 버킷에서 다른 S3 버킷으로 객체를 복사합니다.` },
      { k:'E', en:`Enable S3 Versioning for each S3 bucket.`, ko:`각 S3 버킷에 대해 S3 버전 관리를 활성화합니다.` },
      { k:'F', en:`Configure an event notification for each S3 bucket to invoke an AWS Lambda function to copy objects from one S3 bucket to the other S3 bucket.`, ko:`한 S3 버킷에서 다른 S3 버킷으로 객체를 복사하는 AWS Lambda 함수를 호출하도록 각 S3 버킷에 대한 이벤트 알림을 구성합니다.` },
    ],
    answer: ['A','B','E'],
    vote: '100% ABE',
    explain: `<p><span class="mark-ok">✅ A — S3 다중 지역 액세스 포인트(Multi-Region Access Point)</span></p>
<p>두 리전의 S3 버킷에 대한 단일 글로벌 엔드포인트를 제공합니다. 애플리케이션은 리전을 의식할 필요 없이 단일 엔드포인트를 사용합니다.</p>
<p><span class="mark-ok">✅ B — 양방향 S3 교차 리전 복제(Two-way CRR)</span></p>
<p>양방향 복제로 두 버킷 간 객체 동기화를 자동으로 유지합니다. 어느 쪽에 쓰더라도 다른 쪽에 자동 복제됩니다.</p>
<p><span class="mark-ok">✅ E — S3 버전 관리 활성화</span></p>
<p>S3 교차 리전 복제(CRR)의 필수 선행 조건입니다. 원본과 대상 버킷 모두 버전 관리가 활성화되어야 합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — 애플리케이션을 각 버킷에 직접 쓰도록 수정하면 애플리케이션 로직 변경이 필요하고 운영 오버헤드가 증가합니다.</p>
<p><span class="mark-no">❌ D</span> — S3 수명 주기 규칙은 객체를 다른 버킷으로 복사하는 기능이 없습니다. 스토리지 클래스 전환이나 만료에 사용됩니다.</p>
<p><span class="mark-no">❌ F</span> — Lambda를 사용한 수동 복사는 CRR에 비해 운영 오버헤드가 높고 실시간 동기화가 보장되지 않습니다.</p>`,
    disc: [
      { ans:'ABE (100%)', txt:'S3 CRR은 버전 관리 필수 요건(E). 다중 지역 액세스 포인트(A)는 단일 엔드포인트로 두 리전 버킷에 접근. 양방향 CRR(B)으로 자동 동기화' },
    ]
  },
  {
    n: 187,
    en: `A company has an IoT platform that runs in an on-premises environment. The platform consists of a server that connects to IoT devices by using the MQTT protocol. The platform collects telemetry data from the devices at least once every 5 minutes. The platform also stores device metadata in a MongoDB cluster.<br><br>An application that is installed on an on-premises machine runs periodic jobs to aggregate and transform the telemetry and device metadata. The application creates reports that users view by using another web application that runs on the same on-premises machine. The periodic jobs take 120-600 seconds to run. However, the web application is always running.<br><br>The company is moving the platform to AWS and must reduce the operational overhead of the stack.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose three.)`,
    ko: `회사에는 온프레미스 환경에서 실행되는 IoT 플랫폼이 있습니다. 플랫폼은 MQTT 프로토콜을 사용하여 IoT 장치에 연결하는 서버로 구성됩니다. 플랫폼은 적어도 5분마다 한 번씩 장치로부터 원격 측정 데이터를 수집합니다. 플랫폼은 또한 MongoDB 클러스터에 장치 메타데이터를 저장합니다.<br><br>온프레미스 머신에 설치된 애플리케이션은 정기적인 작업을 실행하여 원격 분석 및 장치 메타데이터를 집계하고 변환합니다. 애플리케이션은 동일한 온프레미스 컴퓨터에서 실행되는 다른 웹 애플리케이션을 사용하여 사용자가 볼 수 있는 보고서를 생성합니다. 정기 작업을 실행하는 데 120~600초가 걸립니다. 그러나 웹 애플리케이션은 항상 실행 중입니다.<br><br>회사는 플랫폼을 AWS로 이전하고 있으며 스택의 운영 오버헤드를 줄여야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Use AWS Lambda functions to connect to the IoT devices.`, ko:`AWS Lambda 함수를 사용하여 IoT 장치에 연결.` },
      { k:'B', en:`Configure the IoT devices to publish to AWS IoT Core.`, ko:`AWS IoT Core에 게시할 IoT 장치를 구성합니다.` },
      { k:'C', en:`Write the metadata to a self-managed MongoDB database on an Amazon EC2 instance.`, ko:`Amazon EC2 인스턴스의 자체 관리형 MongoDB 데이터베이스에 메타데이터 쓰기.` },
      { k:'D', en:`Write the metadata to Amazon DocumentDB (with MongoDB compatibility).`, ko:`Amazon DocumentDB에 메타데이터 쓰기(MongoDB 호환).` },
      { k:'E', en:`Use AWS Step Functions state machines with AWS Lambda tasks to prepare the reports and to write the reports to Amazon S3. Use Amazon CloudFront with an S3 origin to serve the reports.`, ko:`AWS Lambda 작업과 함께 AWS Step Functions 상태 시스템을 사용하여 보고서를 준비하고 Amazon S3에 보고서를 작성합니다. S3 오리진과 함께 Amazon CloudFront를 사용하여 보고서 제공.` },
      { k:'F', en:`Use an Amazon Elastic Kubernetes Service (Amazon EKS) cluster with Amazon EC2 instances to prepare the reports. Use an ingress controller in the EKS cluster to serve the reports.`, ko:`Amazon EC2 인스턴스와 함께 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 사용하여 보고서를 준비합니다. EKS 클러스터의 수신 컨트롤러를 사용하여 보고서 제공.` },
    ],
    answer: ['B','D','E'],
    vote: '100% BDE',
    explain: `<p><span class="mark-ok">✅ B — IoT 장치를 AWS IoT Core에 직접 게시하도록 구성</span></p>
<p>MQTT 프로토콜을 지원하는 AWS IoT Core가 온프레미스 MQTT 서버를 대체합니다. 완전 관리형 서비스로 운영 오버헤드 최소화.</p>
<p><span class="mark-ok">✅ D — Amazon DocumentDB(MongoDB 호환)에 메타데이터 저장</span></p>
<p>기존 MongoDB 클러스터를 완전 관리형 DocumentDB로 대체합니다. MongoDB 호환 API로 마이그레이션 용이.</p>
<p><span class="mark-ok">✅ E — Step Functions + Lambda(최대 15분) + S3 + CloudFront</span></p>
<p>주기적 작업(120-600초)은 Lambda 최대 실행 시간(15분) 이내입니다. Step Functions으로 워크플로 오케스트레이션. S3+CloudFront로 보고서를 서버리스 방식으로 제공.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda를 IoT 장치에 직접 연결하는 것은 MQTT 연결 유지에 적합하지 않습니다. IoT Core가 이를 담당합니다.</p>
<p><span class="mark-no">❌ C</span> — EC2에 자체 관리형 MongoDB를 운영하면 패치, 백업, 스케일링 등 높은 운영 오버헤드가 발생합니다.</p>
<p><span class="mark-no">❌ F</span> — EC2 기반 EKS 클러스터 구성 및 관리는 복잡하여 운영 오버헤드가 높습니다. Step Functions+Lambda+S3+CloudFront보다 과도한 구성입니다.</p>`,
    disc: [
      { ans:'BDE (100%)', txt:'IoT Core=완전 관리형 MQTT 서버 대체. DocumentDB=MongoDB 호환 완전 관리형. Lambda 최대 15분이므로 600초 작업 처리 가능. EC2 기반 솔루션(C/F)은 운영 오버헤드 높음' },
    ]
  },
  {
    n: 188,
    en: `A global manufacturing company plans to migrate the majority of its applications to AWS. However, the company is concerned about applications that need to remain within a specific country or in the company's central on-premises data center because of data regulatory requirements or requirements for latency of single-digit milliseconds. The company also is concerned about the applications that it hosts in some of its factory sites, where limited network infrastructure exists.<br><br>The company wants a consistent developer experience so that its developers can build applications once and deploy on premises, in the cloud, or in a hybrid architecture. The developers must be able to use the same tools, APIs, and services that are familiar to them.<br><br>Which solution will provide a consistent hybrid experience to meet these requirements?`,
    ko: `한 글로벌 제조 회사는 대부분의 애플리케이션을 AWS로 마이그레이션할 계획입니다. 그러나 회사에서는 데이터 규제 요구 사항이나 1000분의 1초의 대기 시간 요구 사항으로 인해 특정 국가 또는 회사의 중앙 온프레미스 데이터 센터에 남아 있어야 하는 애플리케이션에 대해 우려하고 있습니다. 또한 회사는 제한된 네트워크 인프라가 존재하는 일부 공장 현장에서 호스팅하는 애플리케이션에 대해서도 우려하고 있습니다.<br><br>회사는 개발자가 애플리케이션을 한 번 구축하고 온프레미스, 클라우드 또는 하이브리드 아키텍처에 배포할 수 있도록 일관된 개발자 환경을 원합니다. 개발자는 자신에게 익숙한 동일한 도구, API 및 서비스를 사용할 수 있어야 합니다.<br><br>이러한 요구 사항을 충족하기 위해 일관된 하이브리드 환경을 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Migrate all applications to the closest AWS Region that is compliant. Set up an AWS Direct Connect connection between the central on-premises data center and AWS. Deploy a Direct Connect gateway.`, ko:`모든 애플리케이션을 규정을 준수하는 가장 가까운 AWS 리전으로 마이그레이션하십시오. 중앙 온프레미스 데이터 센터와 AWS 간에 AWS Direct Connect 연결을 설정합니다. Direct Connect 게이트웨이를 배포합니다.` },
      { k:'B', en:`Use AWS Snowball Edge Storage Optimized devices for the applications that have data regulatory requirements or requirements for latency of single-digit milliseconds. Retain the devices on premises. Deploy AWS Wavelength to host the workloads in the factory sites.`, ko:`데이터 규제 요구 사항이나 한 자릿수 밀리초의 지연 시간 요구 사항이 있는 애플리케이션에는 AWS Snowball Edge Storage Optimized 디바이스를 사용하십시오. 장치를 온프레미스에 보관하세요. AWS Wavelength를 배포하여 공장 현장에서 워크로드를 호스팅합니다.` },
      { k:'C', en:`Install AWS Outposts for the applications that have data regulatory requirements or requirements for latency of single-digit milliseconds. Use AWS Snowball Edge Compute Optimized devices to host the workloads in the factory sites.`, ko:`데이터 규제 요구 사항이나 한 자릿수 밀리초의 지연 시간 요구 사항이 있는 애플리케이션을 위해 AWS Outpost를 설치합니다. AWS Snowball Edge Compute Optimized 디바이스를 사용하여 공장 현장에서 워크로드를 호스팅합니다.` },
      { k:'D', en:`Migrate the applications that have data regulatory requirements or requirements for latency of single-digit milliseconds to an AWS Local Zone. Deploy AWS Wavelength to host the workloads in the factory sites.`, ko:`데이터 규제 요구 사항 또는 한 자릿수 밀리초의 지연 시간 요구 사항이 있는 애플리케이션을 AWS 로컬 영역으로 마이그레이션합니다. AWS Wavelength를 배포하여 공장 현장에서 워크로드를 호스팅합니다.` },
    ],
    answer: ['C'],
    vote: '87% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Outposts(데이터 주권/저지연) + Snowball Edge Compute Optimized(제한된 네트워크 공장)</span></p>
<p><strong>AWS Outposts</strong>는 AWS 인프라/서비스/API/도구를 온프레미스나 특정 국가 내 데이터 센터에 물리적으로 설치합니다. 데이터 주권 요건 충족과 밀리초 이하 지연 시간을 제공하며 AWS와 동일한 개발자 경험을 보장합니다. <strong>Snowball Edge Compute Optimized</strong>는 네트워크 인프라가 제한된 공장 환경에서 로컬 컴퓨팅 및 스토리지를 제공하며 Lambda 및 EC2 인스턴스를 로컬에서 실행할 수 있습니다.</p>
<p><a href="https://aws.amazon.com/blogs/compute/aws-local-zones-and-aws-outposts-choosing-the-right-technology-for-your-edge-workload/" target="_blank">AWS 공식 블로그: AWS Local Zones vs Outposts</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS 리전으로 마이그레이션하면 데이터 주권 요건(특정 국가 내 보존)을 충족하지 못할 수 있습니다. 밀리초 수준 지연 시간도 보장되지 않습니다.</p>
<p><span class="mark-no">❌ B/D</span> — AWS Wavelength는 통신사 모바일 네트워크 엣지에 배포되는 서비스로, 모든 국가에 존재하지 않습니다. 제한된 네트워크의 공장 사이트에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS 로컬 영역은 모든 국가에 존재하지 않아 데이터 주권 요건을 보편적으로 충족하지 못합니다.</p>`,
    disc: [
      { ans:'C (87%)', txt:'Wavelength는 통신사 엣지 서비스로 모든 국가/공장 미지원. Local Zone도 모든 국가 미지원. Outposts=온프레미스에 AWS 인프라 설치로 데이터 주권+저지연 충족. Snowball Edge Compute=제한된 네트워크 환경 로컬 컴퓨팅' },
    ]
  },
  {
    n: 189,
    en: `A company is updating an application that customers use to make online orders. The number of attacks on the application by bad actors has increased recently.<br><br>The company will host the updated application on an Amazon Elastic Container Service (Amazon ECS) cluster. The company will use Amazon DynamoDB to store application data. A public Application Load Balancer (ALB) will provide end users with access to the application. The company must prevent attacks and ensure business continuity with minimal service interruptions during an ongoing attack.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)`,
    ko: `한 회사에서 고객이 온라인 주문에 사용하는 애플리케이션을 업데이트하고 있습니다. 최근 악의적인 행위자에 의한 애플리케이션 공격이 증가했습니다.<br><br>회사는 Amazon Elastic Container Service(Amazon ECS) 클러스터에서 업데이트된 애플리케이션을 호스팅할 예정입니다. 회사는 Amazon DynamoDB를 사용하여 애플리케이션 데이터를 저장할 것입니다. 공용 ALB(Application Load Balancer)는 최종 사용자에게 애플리케이션에 대한 액세스를 제공합니다. 회사는 공격이 진행되는 동안 서비스 중단을 최소화하여 공격을 방지하고 비즈니스 연속성을 보장해야 합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Create an Amazon CloudFront distribution with the ALB as the origin. Add a custom header and random value on the CloudFront domain. Configure the ALB to conditionally forward traffic if the header and value match.`, ko:`ALB를 오리진으로 사용하여 Amazon CloudFront 배포판을 생성합니다. CloudFront 도메인에 사용자 지정 헤더와 임의의 값을 추가합니다. 헤더와 값이 일치하는 경우 조건부로 트래픽을 전달하도록 ALB를 구성합니다.` },
      { k:'B', en:`Deploy the application in two AWS Regions. Configure Amazon Route 53 to route to both Regions with equal weight.`, ko:`두 개의 AWS 지역에 애플리케이션을 배포합니다. 동일한 가중치를 갖는 두 지역으로 라우팅하도록 Amazon Route 53을 구성합니다.` },
      { k:'C', en:`Configure auto scaling for Amazon ECS tasks. Create a DynamoDB Accelerator (DAX) cluster.`, ko:`Amazon ECS 작업에 대한 자동 조정 구성. DynamoDB Accelerator(DAX) 클러스터를 생성합니다.` },
      { k:'D', en:`Configure Amazon ElastiCache to reduce overhead on DynamoDB.`, ko:`DynamoDB의 오버헤드를 줄이도록 Amazon ElastiCache를 구성합니다.` },
      { k:'E', en:`Deploy an AWS WAF web ACL that includes an appropriate rule group. Associate the web ACL with the Amazon CloudFront distribution.`, ko:`적절한 규칙 그룹을 포함하는 AWS WAF 웹 ACL을 배포합니다. 웹 ACL을 Amazon CloudFront 배포와 연결합니다.` },
    ],
    answer: ['A','E'],
    vote: '93% AE',
    explain: `<p><span class="mark-ok">✅ A — CloudFront + 사용자 지정 헤더로 ALB 직접 접근 차단</span></p>
<p>CloudFront를 ALB 앞에 배치하고 사용자 지정 헤더/값을 CloudFront에서만 추가하도록 설정합니다. ALB는 이 헤더가 있는 요청만 처리하여 CloudFront를 우회한 직접 공격을 차단합니다. CloudFront의 글로벌 엣지 네트워크가 DDoS 공격 트래픽을 분산/흡수하여 비즈니스 연속성을 보장합니다.</p>
<p><span class="mark-ok">✅ E — AWS WAF 웹 ACL + CloudFront 연결</span></p>
<p>WAF 규칙 그룹으로 SQL 주입, XSS, 알려진 공격 패턴을 차단합니다. CloudFront와 연결하면 엣지에서 공격을 차단하므로 오리진(ECS)에 도달하기 전에 필터링됩니다. E는 A에 의존하여 CloudFront 배포가 필요합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 다중 리전 배포는 비용이 높아 "비용 효율적" 요건에 맞지 않습니다. 공격 방지가 아닌 가용성 향상에 초점이 맞춰져 있습니다.</p>
<p><span class="mark-no">❌ C</span> — ECS 자동 조정 + DAX는 공격 방지가 아닌 성능 향상 솔루션입니다. 공격 트래픽을 차단하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — ElastiCache는 데이터베이스 성능 개선 서비스이며 공격 방지와 무관합니다.</p>`,
    disc: [
      { ans:'AE (93%)', txt:'CloudFront(A)=글로벌 DDoS 완화+ALB 직접접근 차단. WAF(E)=공격 패턴 필터링(E는 A의 CloudFront 배포에 의존). B/C/D는 공격 방지 아닌 성능/가용성 향상' },
    ]
  },
  {
    n: 190,
    en: `A company runs a web application on AWS. The web application delivers static content from an Amazon S3 bucket that is behind an Amazon CloudFront distribution. The application serves dynamic content by using an Application Load Balancer (ALB) that distributes requests to a fleet of Amazon EC2 instances in Auto Scaling groups. The application uses a domain name setup in Amazon Route 53.<br><br>Some users reported occasional issues when the users attempted to access the website during peak hours. An operations team found that the ALB sometimes returned HTTP 503 Service Unavailable errors. The company wants to display a custom error message page when these errors occur. The page should be displayed immediately for this error code.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사가 AWS에서 웹 애플리케이션을 실행하고 있습니다. 웹 애플리케이션은 Amazon CloudFront 배포 뒤에 있는 Amazon S3 버킷에서 정적 콘텐츠를 제공합니다. 애플리케이션은 Auto Scaling 그룹의 Amazon EC2 인스턴스 집합에 요청을 배포하는 ALB(Application Load Balancer)를 사용하여 동적 콘텐츠를 제공합니다. 애플리케이션은 Amazon Route 53의 도메인 이름 설정을 사용합니다.<br><br>일부 사용자는 피크 시간대에 웹 사이트에 액세스하려고 할 때 가끔 문제가 발생한다고 보고했습니다. 운영팀은 ALB가 때때로 HTTP 503 서비스를 사용할 수 없음 오류를 반환한다는 사실을 발견했습니다. 회사에서는 이러한 오류가 발생할 때 사용자 정의 오류 메시지 페이지를 표시하려고 합니다. 이 오류 코드에 대해 페이지가 즉시 표시되어야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Set up a Route 53 failover routing policy. Configure a health check to determine the status of the ALB endpoint and to fail over to the failover S3 bucket endpoint.`, ko:`Route 53 장애 조치 라우팅 정책을 설정하십시오. ALB 엔드포인트의 상태를 확인하고 장애 조치 S3 버킷 엔드포인트로 장애 조치하도록 상태 확인을 구성합니다.` },
      { k:'B', en:`Create a second CloudFront distribution and an S3 static website to host the custom error page. Set up a Route 53 failover routing policy. Use an active-passive configuration between the two distributions.`, ko:`두 번째 CloudFront 배포판과 S3 정적 웹 사이트를 생성하여 사용자 지정 오류 페이지를 호스팅합니다. Route 53 장애 조치 라우팅 정책을 설정합니다. 두 배포판 간에 활성-수동 구성을 사용합니다.` },
      { k:'C', en:`Create a CloudFront origin group that has two origins. Set the ALB endpoint as the primary origin. For the secondary origin, set an S3 bucket that is configured to host a static website. Set up origin failover for the CloudFront distribution. Update the S3 static website to incorporate the custom error page.`, ko:`두 개의 오리진이 있는 CloudFront 오리진 그룹을 생성합니다. ALB 엔드포인트를 기본 원본으로 설정합니다. 보조 오리진의 경우 정적 웹 사이트를 호스팅하도록 구성된 S3 버킷을 설정합니다. CloudFront 배포에 대한 오리진 장애 조치를 설정합니다. 사용자 정의 오류 페이지를 통합하도록 S3 정적 웹 사이트를 업데이트합니다.` },
      { k:'D', en:`Create a CloudFront function that validates each HTTP response code that the ALB returns. Create an S3 static website in an S3 bucket. Upload the custom error page to the S3 bucket as a failover. Update the function to read the S3 bucket and to serve the error page to the end users.`, ko:`ALB가 반환하는 각 HTTP 응답 코드를 검증하는 CloudFront 함수를 생성합니다. S3 버킷에 S3 정적 웹 사이트를 생성합니다. 사용자 정의 오류 페이지를 S3 버킷에 장애 조치로 업로드합니다. S3 버킷을 읽고 최종 사용자에게 오류 페이지를 제공하도록 함수를 업데이트합니다.` },
    ],
    answer: ['C'],
    vote: '65% C',
    explain: `<p><span class="mark-ok">✅ C — CloudFront 오리진 그룹 + 오리진 장애 조치</span></p>
<p>CloudFront <strong>오리진 그룹</strong>은 기본 오리진(ALB)과 보조 오리진(S3 정적 웹사이트)을 설정하고, 기본 오리진이 특정 HTTP 상태 코드(503 포함)로 실패할 때 즉시 보조 오리진으로 장애 조치합니다. Route 53 기반 장애 조치보다 빠른 즉각적인 전환이 가능합니다. CloudFront는 실패한 각 요청에 대해 바로 보조 오리진을 시도하므로 산발적 503 오류에 효과적입니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html" target="_blank">AWS 공식 문서: CloudFront 오리진 장애 조치</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Route 53 장애 조치는 상태 확인 실패 후 DNS TTL 전파 시간이 필요하여 즉각적이지 않습니다. 산발적 503 오류에는 상태 확인이 실패를 등록하지 않을 수 있습니다.</p>
<p><span class="mark-no">❌ B</span> — 두 번째 CloudFront 배포 + Route 53 장애 조치는 불필요하게 복잡하고 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudFront 함수에서 S3를 직접 읽어 오류 페이지를 제공하는 구현은 복잡하고 오버헤드가 높습니다. CloudFront 함수는 요청/응답을 조작하지만 S3를 직접 읽는 아키텍처는 표준적이지 않습니다.</p>`,
    disc: [
      { ans:'C (65%) vs D (35%)', txt:'Route 53 장애 조치는 DNS TTL 지연으로 즉각적이지 않아 A/B 탈락. CloudFront 오리진 그룹(C)은 각 요청 실패 시 즉시 보조 오리진으로 전환. CloudFront 함수(D)는 구현 복잡도 높음' },
    ]
  },
];