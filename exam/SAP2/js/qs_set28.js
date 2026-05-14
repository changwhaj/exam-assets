window.QS_SET28 = [
  {
    n: 271,
    en: `A company wants to refactor its retail ordering web application that currently has a load-balanced Amazon EC2 instance fleet for web hosting, database API services, and business logic. The company needs to create a decoupled, scalable architecture with a mechanism for retaining failed orders while also minimizing operational costs.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사는 현재 웹 호스팅, 데이터베이스 API 서비스 및 비즈니스 로직을 위해 로드 밸런싱된 Amazon EC2 인스턴스 집합이 있는 소매 주문 웹 애플리케이션을 리팩터링하려고 합니다. 회사는 실패한 주문을 유지하는 동시에 운영 비용을 최소화하기 위한 메커니즘을 갖춘 분리되고 확장 가능한 아키텍처를 만들어야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use Amazon S3 for web hosting with Amazon API Gateway for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use Amazon Elastic Container Service (Amazon ECS) for business logic with Amazon SQS long polling for retaining failed orders.`, ko: `웹 호스팅에는 Amazon S3, 데이터베이스 API 서비스에는 Amazon API Gateway를 사용합니다. 주문 대기열에는 Amazon SQS를 사용합니다. 비즈니스 로직에는 Amazon ECS, 실패한 주문 유지에는 Amazon SQS 장기 폴링을 사용합니다.` },
      { k: 'B', en: `Use AWS Elastic Beanstalk for web hosting with Amazon API Gateway for database API services. Use Amazon MQ for order queuing. Use AWS Step Functions for business logic with Amazon S3 Glacier Deep Archive for retaining failed orders.`, ko: `웹 호스팅에는 AWS Elastic Beanstalk, 데이터베이스 API 서비스에는 Amazon API Gateway를 사용합니다. 주문 대기열에는 Amazon MQ를 사용합니다. 비즈니스 로직에는 AWS Step Functions, 실패한 주문 보관에는 Amazon S3 Glacier Deep Archive를 사용합니다.` },
      { k: 'C', en: `Use Amazon S3 for web hosting with AWS AppSync for database API services. Use Amazon Simple Queue Service (Amazon SQS) for order queuing. Use AWS Lambda for business logic with an Amazon SQS dead-letter queue for retaining failed orders.`, ko: `웹 호스팅에는 Amazon S3, 데이터베이스 API 서비스에는 AWS AppSync를 사용합니다. 주문 대기열에는 Amazon SQS를 사용합니다. 비즈니스 로직에는 AWS Lambda, 실패한 주문 유지에는 Amazon SQS 배달 못한 편지 대기열을 사용합니다.` },
      { k: 'D', en: `Use Amazon Lightsail for web hosting with AWS AppSync for database API services. Use Amazon Simple Email Service (Amazon SES) for order queuing. Use Amazon Elastic Kubernetes Service (Amazon EKS) for business logic with Amazon OpenSearch Service for retaining failed orders.`, ko: `웹 호스팅에는 Amazon Lightsail, 데이터베이스 API 서비스에는 AWS AppSync를 사용합니다. 주문 대기열에는 Amazon SES를 사용합니다. 비즈니스 로직에는 Amazon EKS, 실패한 주문 유지에는 Amazon OpenSearch Service를 사용합니다.` },
    ],
    answer: ['C'],
    vote: '88% C',
    explain: `<p><span class="mark-ok">✅ C — S3 + AppSync + SQS + Lambda + SQS DLQ</span></p>
<p><strong>분리(Decoupled):</strong> S3(정적 웹 호스팅) + AppSync(GraphQL API) + SQS(큐) + Lambda(비즈니스 로직)가 각각 독립적으로 확장되는 완전한 서버리스 아키텍처입니다.</p>
<p><strong>실패한 주문 유지:</strong> SQS <strong>배달 못한 편지 대기열(DLQ)</strong>은 처리에 반복적으로 실패한 메시지를 격리하여 나중에 분석·재처리할 수 있습니다. SQS 장기 폴링(A)은 폴링 대기 시간 설정이며 실패 메시지 유지 기능이 아닙니다.</p>
<p><strong>비용 최소화:</strong> Lambda(서버리스), S3, SQS는 사용량 기반 과금으로 EC2 기반 솔루션보다 비용 효율적입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SQS 장기 폴링은 실패한 주문을 유지하는 메커니즘이 아닙니다. DLQ가 올바른 도구입니다.</p>
<p><span class="mark-no">❌ B</span> — Amazon MQ는 기존 메시지 브로커(ActiveMQ, RabbitMQ) 마이그레이션에 사용합니다. 새 아키텍처에는 SQS가 더 적합합니다. Glacier Deep Archive는 실패 메시지 유지보다는 장기 아카이브에 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon SES는 이메일 전송 서비스로 주문 대기열에 사용할 수 없습니다. Lightsail과 EKS는 불필요한 관리 오버헤드를 추가합니다.</p>`,
    disc: [
      { ans: 'C (88%)', txt: 'S3(정적 호스팅) + AppSync(DB API) + SQS(큐) + Lambda(비즈니스 로직) + DLQ(실패 주문 유지). SQS 장기 폴링(A)은 실패 유지가 아님. SES(D)는 이메일 서비스로 큐 대체 불가.' }
    ]
  },
  {
    n: 272,
    en: `A company hosts a web application on AWS in the us-east-1 Region. The application servers are distributed across three Availability Zones behind an Application Load Balancer. The database is hosted in a MySQL database on an Amazon EC2 instance. A solutions architect needs to design a cross-Region data recovery solution using AWS services with an RTO of less than 5 minutes and an RPO of less than 1 minute. The solutions architect is deploying application servers in us-west-2, and has configured Amazon Route 53 health checks and DNS failover to us-west-2.<br><br>Which additional step should the solutions architect take?`,
    ko: `회사는 us-east-1 리전의 AWS에서 웹 애플리케이션을 호스팅합니다. 애플리케이션 서버는 ALB 뒤의 3개 가용 영역에 분산되어 있습니다. 데이터베이스는 Amazon EC2 인스턴스의 MySQL 데이터베이스에서 호스팅됩니다. 솔루션 아키텍트는 RTO 5분 미만, RPO 1분 미만의 교차 리전 데이터 복구 솔루션을 설계해야 합니다. 솔루션 아키텍트는 us-west-2에 애플리케이션 서버를 배포하고 Route 53 상태 확인 및 DNS 장애 조치를 구성했습니다.<br><br>솔루션 아키텍트는 어떤 추가 단계를 수행해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Migrate the database to an Amazon RDS for MySQL instance with a cross-Region read replica in us-west-2.`, ko: `데이터베이스를 us-west-2에 리전 간 읽기 전용 복제본이 있는 Amazon RDS for MySQL 인스턴스로 마이그레이션합니다.` },
      { k: 'B', en: `Migrate the database to an Amazon Aurora global database with the primary in us-east-1 and the secondary in us-west-2.`, ko: `기본 데이터베이스가 us-east-1에 있고 보조 데이터베이스가 us-west-2에 있는 Amazon Aurora 글로벌 데이터베이스로 데이터베이스를 마이그레이션합니다.` },
      { k: 'C', en: `Migrate the database to an Amazon RDS for MySQL instance with a Multi-AZ deployment.`, ko: `다중 AZ 배포를 통해 데이터베이스를 MySQL용 Amazon RDS 인스턴스로 마이그레이션합니다.` },
      { k: 'D', en: `Create a MySQL standby database on an Amazon EC2 instance in us-west-2.`, ko: `us-west-2의 Amazon EC2 인스턴스에 MySQL 대기 데이터베이스를 생성합니다.` },
    ],
    answer: ['B'],
    vote: '93% B',
    explain: `<p><span class="mark-ok">✅ B — Aurora 글로벌 데이터베이스 (RPO < 1분, RTO < 5분)</span></p>
<p>Amazon Aurora 글로벌 데이터베이스는 리전 간 복제 지연이 <strong>1초 미만</strong>으로 RPO 1분 요건을 충족합니다. 보조 리전 승격(RTO)은 일반적으로 <strong>1분 이내</strong>로 완료되어 RTO 5분 요건도 충족합니다.</p>
<p>A(RDS 읽기 복제본 승격)는 일반적으로 5~10분이 소요되어 RTO 5분 보장이 불확실합니다. C(Multi-AZ)는 단일 리전 내 HA로 교차 리전 DR을 제공하지 않습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html" target="_blank">AWS 공식 문서 - Aurora 글로벌 데이터베이스</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — RDS 리전 간 읽기 복제본의 승격 RTO는 5~10분으로 RTO 5분 요건 달성이 불확실합니다.</p>
<p><span class="mark-no">❌ C</span> — Multi-AZ는 동일 리전 내 고가용성을 위한 것으로 교차 리전 DR을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — EC2의 MySQL 수동 대기는 RPO와 RTO 요건을 보장할 수 없고 운영 오버헤드가 매우 높습니다.</p>`,
    disc: [
      { ans: 'B (93%)', txt: 'Aurora 글로벌 DB = 복제 지연 <1초(RPO 충족), 보조 리전 승격 <1분(RTO 충족). A(RDS 복제본 승격)는 5~10분으로 RTO 불확실. C는 단일 리전 HA, 교차 리전 DR 미지원.' }
    ]
  },
  {
    n: 273,
    en: `A company is using AWS Organizations to manage multiple accounts. Due to regulatory requirements, the company wants to restrict specific member accounts to certain AWS Regions, where they are permitted to deploy resources. The resources in the accounts must be tagged, enforced based on a group standard, and centrally managed with minimal configuration.<br><br>What should a solutions architect do to meet these requirements?`,
    ko: `한 회사가 AWS Organizations를 사용하여 여러 계정을 관리하고 있습니다. 규제 요구 사항으로 인해 회사는 특정 회원 계정을 리소스 배포가 허용되는 특정 AWS 리전으로 제한하려고 합니다. 계정의 리소스에는 태그를 지정하고 그룹 표준에 따라 적용하며 최소한의 구성으로 중앙에서 관리해야 합니다.<br><br>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS Config rule in the specific member accounts to limit Regions and apply a tag policy.`, ko: `특정 회원 계정에서 AWS Config 규칙을 생성하여 리전을 제한하고 태그 정책을 적용하십시오.` },
      { k: 'B', en: `From the AWS Billing and Cost Management console, in the management account, disable Regions for the specific member accounts and apply a tag policy on the root.`, ko: `마스터 계정의 AWS Billing and Cost Management 콘솔에서 특정 회원 계정에 대한 리전을 비활성화하고 루트에 태그 정책을 적용합니다.` },
      { k: 'C', en: `Associate the specific member accounts with the root. Apply a tag policy and an SCP using conditions to limit Regions.`, ko: `특정 회원 계정을 루트와 연결합니다. 조건을 사용하여 리전을 제한하는 태그 정책과 SCP를 적용합니다.` },
      { k: 'D', en: `Associate the specific member accounts with a new OU. Apply a tag policy and an SCP using conditions to limit Regions.`, ko: `특정 회원 계정을 새 OU와 연결합니다. 조건을 사용하여 리전을 제한하는 태그 정책과 SCP를 적용합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — 새 OU + 태그 정책 + SCP (리전 제한 조건)</span></p>
<p>특정 계정만 제한하려면 해당 계정을 <strong>별도 OU</strong>에 배치하고, 그 OU에만 SCP와 태그 정책을 적용해야 합니다. 루트(C)에 적용하면 조직 전체 계정에 영향을 미쳐 "특정 회원 계정만" 제한하는 요건에 위배됩니다.</p>
<p>SCP의 <code>aws:RequestedRegion</code> 조건으로 허용된 리전만 사용하도록 제한하고, 태그 정책으로 표준 태깅을 강제합니다. 중앙에서 OU 수준으로 관리하므로 최소 구성으로 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Config는 규정 준수 모니터링 도구로 리전 사용을 사전 차단하지 못합니다. 또한 각 계정에 개별 Config 규칙을 생성하는 것은 중앙 집중식이 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — Billing 콘솔에서 리전을 비활성화할 수 있지만 이는 모든 서비스가 아닌 일부 서비스에만 적용됩니다. 루트 수준 태그 정책은 특정 계정만 대상으로 하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 루트에 SCP를 연결하면 조직 내 모든 계정에 적용되어 일부 계정만 제한하는 요건에 맞지 않습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: '특정 계정만 → 새 OU 배치 후 OU에 SCP+태그정책 적용(D). 루트 적용(C)은 전체 계정에 영향. SCP로 aws:RequestedRegion 조건으로 리전 Deny. 태그 정책으로 표준 태깅 강제.' }
    ]
  },
  {
    n: 274,
    en: `A company has an application that generates reports and stores them in an Amazon S3 bucket. When a user accesses their report, the application generates a signed URL to allow the user to download the report. The company's security team has discovered that the files are public and that anyone can download them without authentication. The company has suspended the generation of new reports until the problem is resolved.<br><br>Which set of actions will immediately remediate the security issue without impacting the application's normal workflow?`,
    ko: `회사는 보고서를 생성하고 Amazon S3 버킷에 저장하는 애플리케이션을 보유하고 있습니다. 사용자가 보고서에 액세스하면 애플리케이션은 서명된 URL을 생성하여 사용자가 보고서를 다운로드할 수 있도록 합니다. 보안팀은 해당 파일이 공개되어 있어 누구나 인증 없이 다운로드할 수 있음을 발견했습니다. 회사는 문제가 해결될 때까지 새로운 보고서 생성을 중단했습니다.<br><br>애플리케이션의 일반적인 작업 흐름에 영향을 주지 않고 보안 문제를 즉시 해결하는 조치 세트는 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS Lambda function that applies a deny all policy for users who are not authenticated. Create a scheduled event to invoke the Lambda function.`, ko: `인증되지 않은 사용자에 대해 모두 거부 정책을 적용하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 호출하는 예약된 이벤트를 생성합니다.` },
      { k: 'B', en: `Review the AWS Trusted Advisor bucket permissions check and implement the recommended actions.`, ko: `AWS Trusted Advisor 버킷 권한 확인을 검토하고 권장 조치를 구현합니다.` },
      { k: 'C', en: `Run a script that puts a private ACL on all of the objects in the bucket.`, ko: `버킷의 모든 객체에 프라이빗 ACL을 배치하는 스크립트를 실행합니다.` },
      { k: 'D', en: `Use the Block Public Access feature in Amazon S3 to set the IgnorePublicAcIs option to TRUE on the bucket.`, ko: `Amazon S3의 공개 액세스 차단 기능을 사용하여 버킷에서 IgnorePublicAcIs 옵션을 TRUE로 설정합니다.` },
    ],
    answer: ['D'],
    vote: '80% D',
    explain: `<p><span class="mark-ok">✅ D — S3 공개 액세스 차단 + IgnorePublicAcls = TRUE</span></p>
<p><strong>즉각적:</strong> 콘솔에서 단일 설정을 변경하면 버킷의 모든 현재 및 미래 객체의 공개 ACL을 즉시 무시합니다.</p>
<p><strong>애플리케이션 워크플로 영향 없음:</strong> IgnorePublicAcls는 서명된 URL(pre-signed URL) 접근에는 영향을 주지 않습니다. 서명된 URL은 IAM 자격 증명으로 서명되므로 공개 ACL과 무관하게 유효합니다. 따라서 정상 사용자는 여전히 서명된 URL로 파일을 다운로드할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html" target="_blank">AWS 공식 문서 - S3 공개 액세스 차단</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda로 정책을 적용하는 것은 즉각적이지 않고 복잡한 구현이 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — Trusted Advisor 검토와 권장 조치 구현은 즉각적이지 않고 여러 단계가 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — 스크립트로 모든 객체에 프라이빗 ACL을 적용하는 것은 가능하지만, 시험에서 "스크립트 실행"은 AWS 관리형 솔루션보다 선호되지 않습니다. 또한 객체 수가 많으면 시간이 걸립니다.</p>`,
    disc: [
      { ans: 'D (80%)', txt: 'S3 IgnorePublicAcls=TRUE로 즉시 공개 ACL 무효화. 서명된 URL(pre-signed URL)은 영향 없음(IAM 기반). 스크립트(C)는 AWS 시험에서 선호되지 않음. Trusted Advisor(B)는 즉각적이지 않음.' }
    ]
  },
  {
    n: 275,
    en: `A company is planning to migrate an Amazon RDS for Oracle database to an RDS for PostgreSQL DB instance in another AWS account. A solutions architect needs to design a migration strategy that will require no downtime and that will minimize the amount of time necessary to complete the migration. The migration strategy must replicate all existing data and any new data that is created during the migration. The target database must be identical to the source database at completion of the migration process.<br><br>All applications currently use an Amazon Route 53 CNAME record as their endpoint for communication with the RDS for Oracle DB instance. The RDS for Oracle DB instance is in a private subnet.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)`,
    ko: `회사는 Amazon RDS for Oracle 데이터베이스를 다른 AWS 계정의 RDS for PostgreSQL DB 인스턴스로 마이그레이션할 계획입니다. 솔루션 아키텍트는 가동 중지 시간이 필요하지 않고 마이그레이션 완료 시간을 최소화하는 마이그레이션 전략을 설계해야 합니다. 마이그레이션 전략은 기존 데이터와 마이그레이션 중에 생성된 새 데이터를 모두 복제해야 합니다. 마이그레이션 완료 시 대상 데이터베이스는 소스 데이터베이스와 동일해야 합니다.<br><br>모든 애플리케이션은 Oracle DB 인스턴스용 RDS와의 통신에 Amazon Route 53 CNAME 레코드를 엔드포인트로 사용합니다. Oracle DB 인스턴스용 RDS는 프라이빗 서브넷에 있습니다.<br><br>솔루션 아키텍트는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Create a new RDS for PostgreSQL DB instance in the target account. Use the AWS Schema Conversion Tool (AWS SCT) to migrate the database schema from the source database to the target database.`, ko: `대상 계정에 새로운 RDS for PostgreSQL DB 인스턴스를 생성합니다. AWS SCT를 사용하여 소스 데이터베이스에서 대상 데이터베이스로 데이터베이스 스키마를 마이그레이션합니다.` },
      { k: 'B', en: `Use the AWS Schema Conversion Tool (AWS SCT) to create a new RDS for PostgreSQL DB instance in the target account with the schema and initial data from the source database.`, ko: `AWS SCT를 사용하여 소스 데이터베이스의 스키마 및 초기 데이터를 사용하여 대상 계정에 새 RDS for PostgreSQL DB 인스턴스를 생성합니다.` },
      { k: 'C', en: `Configure VPC peering between the VPCs in the two AWS accounts to provide connectivity to both DB instances from the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.`, ko: `두 AWS 계정의 VPC 간에 VPC 피어링을 구성하여 대상 계정에서 두 DB 인스턴스 모두에 대한 연결을 제공합니다. 대상 계정의 VPC에서 데이터베이스 포트의 트래픽을 허용하도록 각 DB 인스턴스에 연결된 보안 그룹을 구성합니다.` },
      { k: 'D', en: `Temporarily allow the source DB instance to be publicly accessible to provide connectivity from the VPC in the target account. Configure the security groups that are attached to each DB instance to allow traffic on the database port from the VPC in the target account.`, ko: `대상 계정의 VPC에서 연결을 제공하기 위해 원본 DB 인스턴스를 일시적으로 공개적으로 액세스할 수 있도록 허용합니다.` },
      { k: 'E', en: `Use AWS Database Migration Service (AWS DMS) in the target account to perform a full load plus change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint.`, ko: `대상 계정에서 AWS DMS를 사용하여 소스 데이터베이스에서 대상 데이터베이스로 전체 로드 및 CDC 마이그레이션을 수행합니다. 마이그레이션이 완료되면 대상 DB 인스턴스 엔드포인트를 가리키도록 CNAME 레코드를 변경합니다.` },
      { k: 'F', en: `Use AWS Database Migration Service (AWS DMS) in the target account to perform a change data capture (CDC) migration from the source database to the target database. When the migration is complete, change the CNAME record to point to the target DB instance endpoint.`, ko: `대상 계정에서 AWS DMS를 사용하여 소스 데이터베이스에서 대상 데이터베이스로 CDC 마이그레이션을 수행합니다. 마이그레이션이 완료되면 대상 DB 인스턴스 엔드포인트를 가리키도록 CNAME 레코드를 변경합니다.` },
    ],
    answer: ['A', 'C', 'E'],
    vote: '96% ACE',
    explain: `<p><span class="mark-ok">✅ A — 새 PostgreSQL DB 생성 + AWS SCT로 스키마 변환</span></p>
<p>AWS SCT는 스키마를 변환하지만 RDS 인스턴스를 직접 생성하지는 않습니다. 먼저 RDS for PostgreSQL을 생성한 후 SCT로 Oracle 스키마를 PostgreSQL로 변환하여 적용합니다.</p>
<p><span class="mark-ok">✅ C — VPC 피어링으로 교차 계정 DB 연결</span></p>
<p>소스(Oracle)와 대상(PostgreSQL) DB가 서로 다른 계정에 있으므로 VPC 피어링으로 DMS가 두 DB에 모두 접근할 수 있도록 연결합니다.</p>
<p><span class="mark-ok">✅ E — DMS 전체 로드 + CDC</span></p>
<p>전체 로드(Full Load)로 기존 데이터를 복사하고 CDC로 마이그레이션 중 생성된 새 데이터를 지속 복제합니다. 완료 후 CNAME을 변경하면 무중단 전환이 이루어집니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS SCT는 RDS 인스턴스를 직접 생성할 수 없습니다. 스키마 변환 도구이지 인프라 프로비저닝 도구가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — 소스 DB를 공개적으로 접근 가능하게 하는 것은 보안 정책 위반입니다. 절대 피해야 합니다.</p>
<p><span class="mark-no">❌ F</span> — CDC만으로는 초기 기존 데이터가 복제되지 않습니다. 전체 로드 + CDC(E) 조합이 필요합니다.</p>`,
    disc: [
      { ans: 'ACE (96%)', txt: 'B는 SCT가 RDS 인스턴스 생성 불가. D는 DB 공개 접근 보안 위반. F는 전체 로드 없이 CDC만으로는 초기 데이터 누락. A=인스턴스 생성+스키마 변환, C=VPC 피어링, E=전체 로드+CDC+CNAME 전환.' }
    ]
  },
  {
    n: 276,
    en: `A company has implemented an ordering system using an event-driven architecture. During initial testing, the system stopped processing orders. Further log analysis revealed that one order message in an Amazon Simple Queue Service (Amazon SQS) standard queue was causing an error on the backend and blocking all subsequent order messages. The visibility timeout of the queue is set to 30 seconds, and the backend processing timeout is set to 10 seconds. A solutions architect needs to analyze faulty order messages and ensure that the system continues to process subsequent messages.<br><br>Which step should the solutions architect take to meet these requirements?`,
    ko: `회사는 이벤트 중심 아키텍처를 사용하여 주문 시스템을 구현했습니다. 초기 테스트 중에 시스템이 주문 처리를 중단했습니다. 추가 로그 분석에 따르면 Amazon SQS 표준 대기열의 한 주문 메시지가 백엔드에 오류를 일으키고 모든 후속 주문 메시지를 차단하고 있습니다. 대기열의 표시 제한 시간은 30초, 백엔드 처리 시간 제한은 10초로 설정됩니다. 솔루션 아키텍트는 잘못된 주문 메시지를 분석하고 시스템이 후속 메시지를 계속 처리하는지 확인해야 합니다.<br><br>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계를 수행해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Increase the backend processing timeout to 30 seconds to match the visibility timeout.`, ko: `가시성 시간 초과와 일치하도록 백엔드 처리 시간 초과를 30초로 늘립니다.` },
      { k: 'B', en: `Reduce the visibility timeout of the queue to automatically remove the faulty message.`, ko: `대기열의 표시 시간 제한을 줄여 잘못된 메시지를 자동으로 제거합니다.` },
      { k: 'C', en: `Configure a new SQS FIFO queue as a dead-letter queue to isolate the faulty messages.`, ko: `새로운 SQS FIFO 대기열을 배달 못한 편지 대기열로 구성하여 잘못된 메시지를 격리합니다.` },
      { k: 'D', en: `Configure a new SQS standard queue as a dead-letter queue to isolate the faulty messages.`, ko: `새로운 SQS 표준 대기열을 배달 못한 편지 대기열로 구성하여 잘못된 메시지를 격리합니다.` },
    ],
    answer: ['D'],
    vote: '81% D',
    explain: `<p><span class="mark-ok">✅ D — SQS 표준 대기열을 DLQ로 구성</span></p>
<p>SQS DLQ(배달 못한 편지 대기열)는 반복적으로 처리에 실패한 메시지를 격리하여 나중에 분석할 수 있게 합니다. DLQ에 격리된 후 원본 대기열은 후속 메시지를 정상적으로 처리합니다.</p>
<p><strong>표준 DLQ여야 하는 이유:</strong> AWS 공식 문서에 따르면 <strong>"표준 대기열의 DLQ는 표준 대기열이어야 하고, FIFO 대기열의 DLQ는 FIFO 대기열이어야 합니다."</strong> 원본이 표준 대기열이므로 DLQ도 표준 대기열(D)이어야 하며, FIFO 대기열(C)은 사용할 수 없습니다.</p>
<p><a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html" target="_blank">AWS 공식 문서 - SQS 배달 못한 편지 대기열</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 처리 시간 초과를 늘려도 근본적인 오류를 해결하지 못하고 오히려 잘못된 메시지가 더 오래 대기열을 차단합니다.</p>
<p><span class="mark-no">❌ B</span> — 표시 제한 시간을 줄이면 메시지가 자동으로 제거되지 않습니다. 단지 더 빠르게 재시도되어 문제가 반복됩니다.</p>
<p><span class="mark-no">❌ C</span> — 원본이 SQS 표준 대기열이므로 DLQ도 표준 대기열이어야 합니다. FIFO 대기열을 DLQ로 사용하면 SQS 요건을 위반합니다.</p>`,
    disc: [
      { ans: 'D (81%)', txt: '"표준 대기열의 DLQ는 표준 대기열이어야 함" → C(FIFO DLQ) 탈락, D(표준 DLQ) 정답. DLQ로 잘못된 메시지 격리 후 후속 메시지 정상 처리. 가시성 시간 조정(A/B)은 근본 문제 미해결.' }
    ]
  },
  {
    n: 277,
    en: `A company has automated the nightly retraining of its machine learning models by using AWS Step Functions. The workflow consists of multiple steps that use AWS Lambda. Each step can fail for various reasons, and any failure causes a failure of the overall workflow.<br><br>A review reveals that the retraining has failed multiple nights in a row without the company noticing the failure. A solutions architect needs to improve the workflow so that notifications are sent for all types of failures in the retraining process.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)`,
    ko: `회사는 AWS Step Functions를 사용하여 기계 학습 모델의 야간 재교육을 자동화했습니다. 워크플로는 AWS Lambda를 사용하는 여러 단계로 구성됩니다. 각 단계는 다양한 이유로 실패할 수 있으며, 실패하면 전체 워크플로가 실패하게 됩니다.<br><br>검토 결과 회사가 인지하지 못한 채 여러 밤 연속으로 재교육이 실패한 것으로 나타났습니다. 솔루션 아키텍트는 재교육 프로세스의 모든 유형의 실패에 대해 알림이 전송되도록 워크플로를 개선해야 합니다.<br><br>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Create an Amazon Simple Notification Service (Amazon SNS) topic with a subscription of type "Email" that targets the team's mailing list.`, ko: `팀의 메일링 목록을 대상으로 하는 "이메일" 유형의 구독을 사용하여 Amazon SNS 주제를 생성합니다.` },
      { k: 'B', en: `Create a task named "Email" that forwards the input arguments to the SNS topic.`, ko: `입력 인수를 SNS 주제에 전달하는 "이메일"이라는 작업을 생성합니다.` },
      { k: 'C', en: `Add a Catch field to all Task, Map, and Parallel states that have a statement of "ErrorEquals": [ "States.ALL" ] and "Next": "Email".`, ko: `"ErrorEquals": [ "States.ALL" ] 및 "Next": "Email" 문이 있는 모든 작업, 맵 및 병렬 상태에 Catch 필드를 추가합니다.` },
      { k: 'D', en: `Add a new email address to Amazon Simple Email Service (Amazon SES). Verify the email address.`, ko: `Amazon Simple Email Service(Amazon SES)에 새 이메일 주소를 추가합니다. 이메일 주소를 확인하세요.` },
      { k: 'E', en: `Create a task named "Email" that forwards the input arguments to the SES email address.`, ko: `입력 인수를 SES 이메일 주소로 전달하는 "Email"이라는 작업을 만듭니다.` },
      { k: 'F', en: `Add a Catch field to all Task, Map, and Parallel states that have a statement of "ErrorEquals": [ "States.Runtime" ] and "Next": "Email".`, ko: `"ErrorEquals": [ "States.Runtime" ] 및 "Next": "Email" 문이 있는 모든 작업, 맵 및 병렬 상태에 Catch 필드를 추가합니다.` },
    ],
    answer: ['A', 'B', 'C'],
    vote: '86% ABC',
    explain: `<p><span class="mark-ok">✅ A — SNS 주제 + 이메일 구독 (알림 인프라)</span></p>
<p>팀의 메일링 목록을 구독자로 SNS 주제를 생성하면 알림 발송 인프라가 완성됩니다.</p>
<p><span class="mark-ok">✅ B — "Email" 태스크 (SNS 주제로 전달)</span></p>
<p>Step Functions에서 SNS 주제에 메시지를 발행하는 "Email" 태스크를 생성합니다.</p>
<p><span class="mark-ok">✅ C — 모든 상태에 Catch 필드 + States.ALL</span></p>
<p><code>States.ALL</code>은 모든 종류의 오류를 캡처합니다. 이를 통해 "모든 유형의 실패"에 대한 알림 요건을 충족합니다. <code>States.Runtime</code>(F)은 States.ALL과 달리 런타임 오류만 캡처하며, States.ALL이 States.Runtime을 포함합니다.</p>
<p><a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html" target="_blank">AWS 공식 문서 - Step Functions 오류 처리</a></p>`,
    wrong: `<p><span class="mark-no">❌ D, E</span> — Amazon SES는 대량 마케팅·트랜잭션 이메일 발송 서비스입니다. 운영 알림에는 SNS(A)가 표준입니다. Step Functions에서 SES를 직접 대상으로 사용하는 것은 복잡합니다.</p>
<p><span class="mark-no">❌ F</span> — <code>States.Runtime</code>은 특정 런타임 오류만 캡처하며 모든 유형의 실패를 포착하지 못합니다. "모든 유형의 실패" 요건에는 <code>States.ALL</code>이 필요합니다.</p>`,
    disc: [
      { ans: 'ABC (86%)', txt: 'A=SNS 알림 인프라, B=Step Functions "Email" 태스크(SNS 전달), C=States.ALL로 모든 오류 캡처. SES(D/E)는 운영 알림에 부적합. States.Runtime(F)은 모든 오류 미포함.' }
    ]
  },
  {
    n: 278,
    en: `A company plans to deploy a new private intranet service on Amazon EC2 instances inside a VPC. An AWS Site-to-Site VPN connects the VPC to the company's on-premises network. The new service must communicate with existing on-premises services. The on-premises services are accessible through the use of hostnames that reside in the company.example DNS zone. This DNS zone is wholly hosted on premises and is available only on the company's private network.<br><br>A solutions architect must ensure that the new service can resolve hostnames on the company.example domain to integrate with existing services.<br><br>Which solution meets these requirements?`,
    ko: `회사는 VPC 내부의 Amazon EC2 인스턴스에 새로운 프라이빗 인트라넷 서비스를 배포할 계획입니다. AWS Site-to-Site VPN은 VPC를 회사의 온프레미스 네트워크에 연결합니다. 새 서비스는 기존 온프레미스 서비스와 통신해야 합니다. 온프레미스 서비스는 company.example DNS 영역에 있는 호스트 이름을 사용하여 액세스할 수 있습니다. 이 DNS 영역은 전적으로 온프레미스에서 호스팅되며 회사의 개인 네트워크에서만 사용할 수 있습니다.<br><br>솔루션 아키텍트는 새 서비스가 company.example 도메인의 호스트 이름을 확인하여 기존 서비스와 통합할 수 있는지 확인해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an empty private zone in Amazon Route 53 for company.example. Add an additional NS record to the company's on-premises company.example zone that points to the authoritative name servers for the new private zone in Route 53.`, ko: `Amazon Route 53에서 company.example에 대해 빈 프라이빗 영역을 생성합니다. Route 53의 새로운 프라이빗 영역에 대한 권한 있는 이름 서버를 가리키는 NS 레코드를 온프레미스 영역에 추가합니다.` },
      { k: 'B', en: `Turn on DNS hostnames for the VPC. Configure a new outbound endpoint with Amazon Route 53 Resolver. Create a Resolver rule to forward requests for company.example to the on-premises name servers.`, ko: `VPC에 대한 DNS 호스트 이름을 활성화합니다. Amazon Route 53 Resolver를 사용하여 새로운 아웃바운드 엔드포인트를 구성합니다. company.example에 대한 요청을 온프레미스 이름 서버로 전달하는 확인자 규칙을 만듭니다.` },
      { k: 'C', en: `Turn on DNS hostnames for the VPC. Configure a new inbound resolver endpoint with Amazon Route 53 Resolver. Configure the on-premises DNS server to forward requests for company.example to the new resolver.`, ko: `VPC에 대한 DNS 호스트 이름을 켭니다. Amazon Route 53 Resolver를 사용하여 새로운 인바운드 확인자 엔드포인트를 구성합니다. company.example에 대한 요청을 새 확인자로 전달하도록 온프레미스 DNS 서버를 구성합니다.` },
      { k: 'D', en: `Use AWS Systems Manager to configure a run document that will install a hosts file that contains any required hostnames. Use an Amazon EventBridge rule to run the document when an instance is entering the running state.`, ko: `AWS Systems Manager를 사용하여 필수 호스트 이름이 포함된 호스트 파일을 설치할 실행 문서를 구성합니다. 인스턴스가 실행 상태로 전환될 때 Amazon EventBridge 규칙을 사용하여 문서를 실행합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Route 53 Resolver 아웃바운드 엔드포인트 + 포워딩 규칙</span></p>
<p>VPC 내 EC2 인스턴스(AWS)에서 온프레미스 DNS 이름을 조회해야 하는 시나리오입니다. 이 방향의 흐름은 <strong>아웃바운드 엔드포인트</strong>가 담당합니다.</p>
<p>Route 53 Resolver 아웃바운드 엔드포인트를 생성하고 company.example 도메인에 대한 포워딩 규칙을 설정하면, VPC 내 DNS 쿼리가 온프레미스 이름 서버로 전달됩니다. VPN 연결로 이미 네트워크 연결이 있으므로 온프레미스 DNS 서버에 접근할 수 있습니다.</p>
<ul><li>아웃바운드 엔드포인트: AWS → 온프레미스 DNS 쿼리</li><li>인바운드 엔드포인트: 온프레미스 → AWS DNS 쿼리</li></ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Route 53에 빈 프라이빗 영역을 만들어도 실제 온프레미스 레코드가 없으므로 DNS 해석이 되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 인바운드 엔드포인트는 <strong>온프레미스 → VPC</strong> 방향의 DNS 쿼리를 처리합니다. EC2에서 온프레미스 도메인을 조회하는 이 시나리오는 <strong>아웃바운드</strong>가 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — 호스트 파일은 동적 업데이트가 어렵고 온프레미스 서비스가 추가/변경될 때마다 수동 업데이트가 필요합니다. 운영 오버헤드가 매우 높습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'AWS→온프레미스 DNS 쿼리 = 아웃바운드 엔드포인트. 인바운드(C)는 온프레미스→AWS 방향. company.example 포워딩 규칙으로 VPC 쿼리를 온프레미스 이름 서버로 전달.' }
    ]
  },
  {
    n: 279,
    en: `A company uses AWS CloudFormation to deploy applications within multiple VPCs that are all attached to a transit gateway. Each VPC that sends traffic to the public internet must send the traffic through a shared services VPC. Each subnet within a VPC uses the default VPC route table, and the traffic is routed to the transit gateway. The transit gateway uses its default route table for any VPC attachment.<br><br>A security audit reveals that an Amazon EC2 instance that is deployed within a VPC can communicate with an EC2 instance that is deployed in any of the company's other VPCs. A solutions architect needs to limit the traffic between the VPCs. Each VPC must be able to communicate only with a predefined, limited set of authorized VPCs.<br><br>What should the solutions architect do to meet these requirements?`,
    ko: `회사는 AWS CloudFormation을 사용하여 전송 게이트웨이에 모두 연결된 여러 VPC 내에 애플리케이션을 배포합니다. 공용 인터넷으로 트래픽을 전송하는 각 VPC는 ​​공유 서비스 VPC를 통해 트래픽을 전송해야 합니다. VPC 내의 각 서브넷은 기본 VPC 라우팅 테이블을 사용하고 트래픽은 전송 게이트웨이로 라우팅됩니다. Transit Gateway는 모든 VPC 연결에 대해 기본 라우팅 테이블을 사용합니다.<br><br>보안 감사 결과, VPC 내에 배포된 Amazon EC2 인스턴스가 회사의 다른 VPC에 배포된 EC2 인스턴스와 통신할 수 있는 것으로 나타났습니다. 솔루션 아키텍트는 VPC 간의 트래픽을 제한해야 합니다. 각 VPC는 ​​사전 정의되고 제한된 승인된 VPC 집합과만 통신할 수 있어야 합니다.<br><br>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Update the network ACL of each subnet within a VPC to allow outbound traffic only to the authorized VPCs. Remove all deny rules except the default deny rule.`, ko: `승인된 VPC로만 아웃바운드 트래픽을 허용하도록 VPC 내 각 서브넷의 네트워크 ACL을 업데이트합니다. 기본 거부 규칙을 제외한 모든 거부 규칙을 제거합니다.` },
      { k: 'B', en: `Update all the security groups that are used within a VPC to deny outbound traffic to security groups that are used within the unauthorized VPCs.`, ko: `승인되지 않은 VPC 내에서 사용되는 보안 그룹에 대한 아웃바운드 트래픽을 거부하려면 VPC 내에서 사용되는 모든 보안 그룹을 업데이트하십시오.` },
      { k: 'C', en: `Create a dedicated transit gateway route table for each VPC attachment. Route traffic only to the authorized VPCs.`, ko: `각 VPC 연결에 대한 전용 전송 게이트웨이 라우팅 테이블을 생성합니다. 승인된 VPC로만 트래픽을 라우팅합니다.` },
      { k: 'D', en: `Update the main route table of each VPC to route traffic only to the authorized VPCs through the transit gateway.`, ko: `Transit Gateway를 통해 승인된 VPC로만 트래픽을 라우팅하도록 각 VPC의 기본 라우팅 테이블을 업데이트합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — VPC 연결별 전용 Transit Gateway 라우팅 테이블</span></p>
<p>현재 문제는 Transit Gateway가 단일 기본 라우팅 테이블을 사용하여 모든 VPC 간 트래픽을 허용한다는 것입니다. 각 VPC 연결에 대한 <strong>전용 TGW 라우팅 테이블</strong>을 생성하고 승인된 VPC로 향하는 경로만 포함하면 VPC 간 트래픽을 세밀하게 제어할 수 있습니다.</p>
<p>이 방법은 Transit Gateway 레벨에서 중앙 집중식으로 라우팅을 제어하여 각 VPC 또는 서브넷을 개별 수정하는 것보다 효율적입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — NACL은 서브넷 수준에서 적용되며 대상 IP를 기반으로만 필터링합니다. 각 서브넷의 NACL을 수동으로 업데이트하는 것은 VPC가 많을 경우 매우 번거롭습니다.</p>
<p><span class="mark-no">❌ B</span> — 보안 그룹 간 교차 계정 참조는 복잡하고, 모든 보안 그룹을 수동으로 업데이트하는 것은 운영 부담이 큽니다.</p>
<p><span class="mark-no">❌ D</span> — VPC의 기본 라우팅 테이블을 업데이트하는 것은 가능하지만, TGW 라우팅 테이블 수준에서 제어하는 것(C)이 더 중앙 집중식이고 효율적입니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: '현재 TGW 기본 라우팅 테이블이 모든 VPC 간 통신 허용. VPC 연결별 전용 TGW 라우팅 테이블 생성 후 승인된 VPC만 경로 포함. TGW 중앙 집중식 제어가 NACL(A)/SG(B)/VPC 라우팅(D) 수정보다 효율적.' }
    ]
  },
  {
    n: 280,
    en: `A company has a Windows-based desktop application that is packaged and deployed to the users' Windows machines. The company recently acquired another company that has employees who primarily use machines with a Linux operating system. The acquiring company has decided to migrate and rehost the Windows-based desktop application to AWS.<br><br>All employees must be authenticated before they use the application. The acquiring company uses Active Directory on premises but wants a simplified way to manage access to the application on AWS for all the employees.<br><br>Which solution will rehost the application on AWS with the LEAST development effort?`,
    ko: `회사에는 Windows 기반 데스크톱 애플리케이션이 있습니다. 회사는 최근 주로 Linux 운영 체제를 사용하는 직원이 있는 회사를 인수했습니다. 인수 회사는 Windows 기반 데스크톱 애플리케이션을 AWS로 마이그레이션하고 다시 호스팅하기로 결정했습니다.<br><br>모든 직원은 애플리케이션을 사용하기 전에 인증을 받아야 합니다. 인수 회사는 온프레미스에서 Active Directory를 사용하지만 모든 직원의 AWS 애플리케이션에 대한 액세스를 관리하는 단순화된 방법을 원합니다.<br><br>최소한의 개발 노력으로 AWS에서 애플리케이션을 다시 호스팅할 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Set up and provision an Amazon Workspaces virtual desktop for every employee. Implement authentication by using Amazon Cognito identity pools. Instruct employees to run the application from their provisioned Workspaces virtual desktops.`, ko: `모든 직원을 위해 Amazon Workspaces 가상 데스크톱을 설정하고 프로비저닝합니다. Amazon Cognito 자격 증명 풀을 사용하여 인증을 구현합니다. 직원들에게 프로비저닝된 Workspaces 가상 데스크탑에서 애플리케이션을 실행하도록 지시합니다.` },
      { k: 'B', en: `Create an Auto Scaling group of Windows-based Amazon EC2 instances. Join each EC2 instance to the company's Active Directory domain. Implement authentication by using the Active Directory that is running on premises. Instruct employees to run the application by using a Windows remote desktop.`, ko: `Windows 기반 Amazon EC2 인스턴스의 Auto Scaling 그룹을 생성합니다. 각 EC2 인스턴스를 회사의 Active Directory 도메인에 가입시킵니다. 온프레미스에서 실행되는 Active Directory를 사용하여 인증을 구현합니다. 직원들에게 Windows 원격 데스크톱을 사용하여 애플리케이션을 실행하도록 지시합니다.` },
      { k: 'C', en: `Use an Amazon AppStream 2.0 image builder to create an image that includes the application and the required configurations. Provision an AppStream 2.0 On-Demand fleet with dynamic Fleet Auto Scaling policies for running the image. Implement authentication by using AppStream 2.0 user pools. Instruct the employees to access the application by starting browser-based AppStream 2.0 streaming sessions.`, ko: `Amazon AppStream 2.0 이미지 빌더를 사용하여 애플리케이션과 필수 구성이 포함된 이미지를 생성합니다. 동적 플릿 Auto Scaling 정책을 사용하여 AppStream 2.0 온디맨드 플릿을 프로비저닝합니다. AppStream 2.0 사용자 풀을 사용하여 인증을 구현합니다. 직원들에게 브라우저 기반 AppStream 2.0 스트리밍 세션을 시작하여 애플리케이션에 액세스하도록 지시합니다.` },
      { k: 'D', en: `Refactor and containerize the application to run as a web-based application. Run the application in Amazon Elastic Container Service (Amazon ECS) on AWS Fargate with step scaling policies. Implement authentication by using Amazon Cognito user pools. Instruct the employees to run the application from their browsers.`, ko: `웹 기반 애플리케이션으로 실행되도록 애플리케이션을 리팩터링하고 컨테이너화합니다. 단계 조정 정책을 사용하여 AWS Fargate의 Amazon ECS에서 애플리케이션을 실행합니다. Amazon Cognito 사용자 풀을 사용하여 인증을 구현합니다. 직원들에게 브라우저에서 애플리케이션을 실행하도록 지시합니다.` },
    ],
    answer: ['C'],
    vote: '92% C',
    explain: `<p><span class="mark-ok">✅ C — Amazon AppStream 2.0</span></p>
<p>Amazon AppStream 2.0은 Windows 데스크톱 애플리케이션을 <strong>코드 수정 없이</strong> 브라우저로 스트리밍하는 완전 관리형 서비스입니다. Linux 사용자도 브라우저만 있으면 Windows 애플리케이션을 사용할 수 있습니다.</p>
<p>AppStream 2.0은 내장 사용자 풀 인증을 지원하고, 온디맨드 플릿으로 사용량에 따라 비용이 발생합니다. 개발 노력 없이 기존 Windows 애플리케이션을 그대로 패키징하여 이미지로 만들면 됩니다.</p>
<p><a href="https://aws.amazon.com/appstream2/" target="_blank">AWS 공식 문서 - Amazon AppStream 2.0</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon Workspaces는 직원별 전용 가상 데스크톱을 프로비저닝하여 비용이 높습니다. Cognito 자격 증명 풀은 Active Directory와의 통합이 복잡합니다.</p>
<p><span class="mark-no">❌ B</span> — EC2 ASG + RDP는 Linux 사용자가 Windows RDP 클라이언트를 설치해야 하는 문제가 있습니다. EC2 관리 오버헤드도 높습니다.</p>
<p><span class="mark-no">❌ D</span> — 애플리케이션을 리팩터링하고 컨테이너화하는 것은 <strong>대규모 개발 노력</strong>이 필요합니다. "최소 개발 노력" 요건에 위배됩니다.</p>`,
    disc: [
      { ans: 'C (92%)', txt: 'AppStream 2.0 = 코드 변경 없이 Windows 앱 브라우저 스트리밍. Linux 사용자도 브라우저로 접근. D는 전면 리팩터링 필요로 개발 노력 과다. A는 사용자별 Workspaces 비용 과다. B는 RDP 클라이언트 필요.' }
    ]
  },
];