window.QS_SET18 = [
  {
    n: 171,
    en: `A company uses an AWS CodeCommit repository. The company must store a backup copy of the data that is in the repository in a second AWS Region.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 AWS CodeCommit 리포지토리를 사용합니다. 회사는 두 번째 AWS 지역의 리포지토리에 있는 데이터의 백업 복사본을 저장해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure AWS Elastic Disaster Recovery to replicate the CodeCommit repository data to the second Region.`, ko:`CodeCommit 리포지토리 데이터를 두 번째 리전에 복제하도록 AWS Elastic Disaster Recovery를 구성합니다.` },
      { k:'B', en:`Use AWS Backup to back up the CodeCommit repository on an hourly schedule. Create a cross-Region copy in the second Region.`, ko:`AWS Backup을 사용하여 시간별 일정에 따라 CodeCommit 리포지토리를 백업합니다. 두 번째 리전에 교차 리전 복사본을 생성합니다.` },
      { k:'C', en:`Create an Amazon EventBridge rule to invoke AWS CodeBuild when the company pushes code to the repository. Use CodeBuild to clone the repository. Create a .zip file of the content. Copy the file to an S3 bucket in the second Region.`, ko:`회사가 리포지토리에 코드를 푸시할 때 AWS CodeBuild를 호출하는 Amazon EventBridge 규칙을 생성합니다. CodeBuild를 사용하여 리포지토리를 복제합니다. 콘텐츠의 .zip 파일을 만듭니다. 두 번째 리전의 S3 버킷에 파일을 복사합니다.` },
      { k:'D', en:`Create an AWS Step Functions workflow on an hourly schedule to take a snapshot of the CodeCommit repository. Configure the workflow to copy the snapshot to an S3 bucket in the second Region.`, ko:`CodeCommit 리포지토리의 스냅샷을 찍기 위해 매 시간마다 AWS Step Functions 워크플로를 생성합니다. 두 번째 리전의 S3 버킷에 스냅샷을 복사하도록 워크플로를 구성합니다.` },
    ],
    answer: ['C'],
    vote: '95% C',
    explain: `<p><span class="mark-ok">✅ C — EventBridge + CodeBuild로 CodeCommit 백업 자동화</span></p>
<p>AWS Backup은 CodeCommit 리포지토리를 소스로 지원하지 않습니다. CodeCommit 백업을 자동화하는 AWS 공식 권장 패턴은 코드 푸시 이벤트를 EventBridge로 감지하고 CodeBuild를 사용하여 리포지토리를 복제한 후 .zip으로 압축하여 다른 리전의 S3 버킷에 저장하는 방식입니다. 이 패턴은 AWS Prescriptive Guidance에 공식 문서화되어 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/automate-event-driven-backups-from-codecommit-to-amazon-s3-using-codebuild-and-cloudwatch-events.html" target="_blank">AWS 공식 문서: CodeCommit에서 S3로 이벤트 기반 백업 자동화</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Elastic Disaster Recovery는 물리적/가상 서버를 AWS로 복제하기 위한 서비스이며 CodeCommit 리포지토리 복제를 지원하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — AWS Backup은 CodeCommit을 지원되는 백업 소스로 포함하지 않습니다. CodeCommit은 EFS, DynamoDB, RDS 등과 달리 AWS Backup의 대상이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — CodeCommit은 스냅샷 기능을 제공하지 않습니다. Step Functions을 사용해 CodeCommit 스냅샷을 찍는 방법은 존재하지 않습니다.</p>`,
    disc: [
      { ans:'C (95%)', txt:'AWS Backup은 CodeCommit 미지원. 이벤트 기반으로 CodeBuild가 리포지토리를 clone→zip→S3 복사하는 패턴이 AWS 공식 권장 방식' },
    ]
  },
  {
    n: 172,
    en: `A company has multiple business units that each have separate accounts on AWS. Each business unit manages its own network with several VPCs that have CIDR ranges that overlap. The company's marketing team has created a new internal application and wants to make the application accessible to all the other business units. The solution must use private IP addresses only.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사에는 각각 별도의 AWS 계정이 있는 여러 사업부가 있습니다. 각 사업부는 CIDR 범위가 겹치는 여러 VPC로 자체 네트워크를 관리합니다. 회사의 마케팅 팀은 새로운 내부 애플리케이션을 생성했으며 다른 모든 사업부에서 이 애플리케이션에 액세스할 수 있도록 하려고 합니다. 솔루션은 개인 IP 주소만 사용해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Instruct each business unit to add a unique secondary CIDR range to the business unit's VPC. Peer the VPCs and use a private NAT gateway in the secondary range to route traffic to the marketing team.`, ko:`각 사업부에 고유한 보조 CIDR 범위를 사업부의 VPC에 추가하도록 지시합니다. VPC를 피어링하고 보조 범위의 개인 NAT 게이트웨이를 사용하여 트래픽을 마케팅 팀으로 라우팅합니다.` },
      { k:'B', en:`Create an Amazon EC2 instance to serve as a virtual appliance in the marketing account's VPC. Create an AWS Site-to-Site VPN connection between the marketing team and each business unit's VPC. Perform NAT where necessary.`, ko:`마케팅 계정의 VPC에서 가상 어플라이언스 역할을 할 Amazon EC2 인스턴스를 생성합니다. 마케팅 팀과 각 사업부의 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다. 필요한 경우 NAT를 수행합니다.` },
      { k:'C', en:`Create an AWS PrivateLink endpoint service to share the marketing application. Grant permission to specific AWS accounts to connect to the service. Create interface VPC endpoints in other accounts to access the application by using private IP addresses.`, ko:`마케팅 애플리케이션을 공유하기 위해 AWS PrivateLink 엔드포인트 서비스를 생성합니다. 특정 AWS 계정에 서비스에 연결할 수 있는 권한을 부여합니다. 프라이빗 IP 주소를 사용하여 애플리케이션에 액세스하려면 다른 계정에 인터페이스 VPC 엔드포인트를 생성합니다.` },
      { k:'D', en:`Create a Network Load Balancer (NLB) in front of the marketing application in a private subnet. Create an API Gateway API. Use the Amazon API Gateway private integration to connect the API to the NLB. Activate IAM authorization for the API. Grant access to the accounts of the other business units.`, ko:`프라이빗 서브넷의 마케팅 애플리케이션 앞에 NLB(Network Load Balancer)를 생성합니다. API 게이트웨이 API를 생성합니다. Amazon API Gateway 프라이빗 통합을 사용하여 API를 NLB에 연결합니다. API에 대한 IAM 승인을 활성화합니다. 다른 사업부의 계정에 대한 액세스 권한을 부여합니다.` },
    ],
    answer: ['C'],
    vote: '94% C',
    explain: `<p><span class="mark-ok">✅ C — AWS PrivateLink 엔드포인트 서비스로 CIDR 겹침 문제 해결</span></p>
<p><strong>AWS PrivateLink</strong>는 CIDR 범위가 겹치는 VPC 간에도 프라이빗 IP 주소만을 사용하여 서비스를 공유할 수 있게 해주는 서비스입니다. 서비스 제공자(마케팅 팀)는 NLB 뒤에 엔드포인트 서비스를 생성하고, 서비스 소비자(다른 사업부)는 인터페이스 VPC 엔드포인트를 생성하여 접근합니다. VPC 피어링과 달리 CIDR 겹침에 영향을 받지 않으며, 특정 AWS 계정에만 권한을 부여할 수 있어 보안도 우수합니다.</p>
<p><a href="https://aws.amazon.com/blogs/networking-and-content-delivery/connecting-networks-with-overlapping-ip-ranges/" target="_blank">AWS 공식 블로그: 겹치는 IP 범위를 가진 네트워크 연결</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — VPC 피어링은 CIDR 범위가 겹치는 경우 동작하지 않습니다. 보조 CIDR 추가 및 NAT 게이트웨이 설정은 복잡한 운영 오버헤드를 요구합니다.</p>
<p><span class="mark-no">❌ B</span> — Site-to-Site VPN 연결을 각 사업부마다 설정해야 하므로 수십 개의 연결 관리가 필요합니다. 운영 오버헤드가 매우 높습니다.</p>
<p><span class="mark-no">❌ D</span> — API Gateway + NLB 조합은 구성이 복잡하고 불필요한 서비스 계층이 추가됩니다. PrivateLink에 비해 운영 오버헤드가 높습니다.</p>`,
    disc: [
      { ans:'C (94%)', txt:'CIDR 겹침 문제를 해결하는 핵심은 PrivateLink. VPC 피어링은 CIDR 겹침 시 불가. PrivateLink는 계정 간 프라이빗 접근을 최소 설정으로 제공' },
    ]
  },
  {
    n: 173,
    en: `A company needs to audit the security posture of a newly acquired AWS account. The company's data security team requires a notification only when an Amazon S3 bucket becomes publicly exposed. The company has already established an Amazon Simple Notification Service (Amazon SNS) topic that has the data security team's email address subscribed.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 새로 취득한 AWS 계정의 보안 상태를 감사해야 합니다. 회사의 데이터 보안 팀은 Amazon S3 버킷이 공개적으로 노출되는 경우에만 알림을 요구합니다. 회사는 이미 데이터 보안 팀의 이메일 주소를 구독하는 Amazon Simple 알림 서비스(Amazon SNS) 주제를 설정했습니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an S3 event notification on all S3 buckets for the isPublic event. Select the SNS topic as the target for the event notifications.`, ko:`isPublic 이벤트에 대해 모든 S3 버킷에 S3 이벤트 알림을 생성합니다. 이벤트 알림 대상으로 SNS 주제를 선택합니다.` },
      { k:'B', en:`Create an analyzer in AWS Identity and Access Management Access Analyzer. Create an Amazon EventBridge rule for the event type "Access Analyzer Finding" with a filter for "isPublic: true." Select the SNS topic as the EventBridge rule target.`, ko:`AWS Identity and Access Management Access Analyser에서 분석기를 생성합니다. "isPublic: true"에 대한 필터를 사용하여 이벤트 유형 "액세스 분석기 찾기"에 대한 Amazon EventBridge 규칙을 생성합니다. EventBridge 규칙 대상으로 SNS 주제를 선택합니다.` },
      { k:'C', en:`Create an Amazon EventBridge rule for the event type "Bucket-Level API Call via CloudTrail" with a filter for "PutBucketPolicy." Select the SNS topic as the EventBridge rule target.`, ko:`"PutBucketPolicy"에 대한 필터를 사용하여 "CloudTrail을 통한 버킷 수준 API 호출" 이벤트 유형에 대한 Amazon EventBridge 규칙을 생성합니다. EventBridge 규칙 대상으로 SNS 주제를 선택합니다.` },
      { k:'D', en:`Activate AWS Config and add the cloudtrail-s3-dataevents-enabled rule. Create an Amazon EventBridge rule for the event type "Config Rules Re-evaluation Status" with a filter for "NON_COMPLIANT." Select the SNS topic as the EventBridge rule target.`, ko:`AWS Config를 활성화하고 cloudtrail-s3-dataevents-enabled 규칙을 추가합니다. "NON_COMPLIANT" 필터를 사용하여 이벤트 유형 "구성 규칙 재평가 상태"에 대한 Amazon EventBridge 규칙을 생성합니다. EventBridge 규칙 대상으로 SNS 주제를 선택합니다.` },
    ],
    answer: ['B'],
    vote: '94% B',
    explain: `<p><span class="mark-ok">✅ B — IAM Access Analyzer + EventBridge로 S3 공개 노출 감지</span></p>
<p><strong>IAM Access Analyzer for S3</strong>는 S3 버킷이 인터넷 또는 다른 AWS 계정의 모든 사용자에게 액세스를 허용하도록 구성될 때 자동으로 탐지하고 결과(Finding)를 생성합니다. Amazon EventBridge를 사용하여 "Access Analyzer Finding" 이벤트 타입에 <code>isPublic: true</code> 필터를 적용하면 공개 노출 시에만 SNS 알림을 보낼 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-analyzer.html" target="_blank">AWS 공식 문서: Amazon S3용 IAM Access Analyzer</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon S3 이벤트 알림은 <code>isPublic</code> 이벤트를 지원하지 않습니다. S3 이벤트 알림은 객체 생성/삭제/복원 등의 이벤트만 지원합니다.</p>
<p><span class="mark-no">❌ C</span> — PutBucketPolicy API 호출은 버킷 정책이 변경될 때마다 알림을 보내지만 버킷이 실제로 공개적으로 노출되었는지 여부는 판단하지 않습니다. 비공개 정책 변경도 알림이 발생합니다.</p>
<p><span class="mark-no">❌ D</span> — cloudtrail-s3-dataevents-enabled Config 규칙은 CloudTrail이 S3 데이터 이벤트를 로깅하는지 여부를 확인하는 규칙입니다. 버킷의 공개 노출과는 무관합니다.</p>`,
    disc: [
      { ans:'B (94%)', txt:'S3 이벤트 알림은 isPublic 이벤트 미지원. PutBucketPolicy는 실제 공개 노출 여부 판단 불가. Access Analyzer만이 정확히 공개 노출을 감지하고 EventBridge로 알림 가능' },
    ]
  },
  {
    n: 174,
    en: `A solutions architect needs to assess a newly acquired company's portfolio of applications and databases. The solutions architect must create a business case to migrate the portfolio to AWS. The newly acquired company runs applications in an on-premises data center. The data center is not well documented. The solutions architect cannot immediately determine how many applications and databases exist. Traffic for the applications is variable. Some applications are batch processes that run at the end of each month.<br><br>The solutions architect must gain a better understanding of the portfolio before a migration to AWS can begin.<br><br>Which solution will meet these requirements?`,
    ko: `솔루션 설계자는 새로 인수한 회사의 애플리케이션 및 데이터베이스 포트폴리오를 평가해야 합니다. 솔루션 아키텍트는 포트폴리오를 AWS로 마이그레이션하기 위한 비즈니스 사례를 생성해야 합니다. 새로 인수된 회사는 온프레미스 데이터 센터에서 애플리케이션을 실행합니다. 데이터 센터에 대한 문서화가 잘 되어 있지 않습니다. 솔루션 설계자는 얼마나 많은 애플리케이션과 데이터베이스가 존재하는지 즉시 확인할 수 없습니다. 애플리케이션의 트래픽은 가변적입니다. 일부 애플리케이션은 매월 말에 실행되는 일괄 프로세스입니다.<br><br>솔루션 아키텍트는 AWS로의 마이그레이션을 시작하기 전에 포트폴리오를 더 잘 이해해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use AWS Server Migration Service (AWS SMS) and AWS Database Migration Service (AWS DMS) to evaluate migration. Use AWS Service Catalog to understand application and database dependencies.`, ko:`AWS Server Migration Service(AWS SMS) 및 AWS Database Migration Service(AWS DMS)를 사용하여 마이그레이션을 평가합니다. AWS Service Catalog를 사용하여 애플리케이션 및 데이터베이스 종속성을 이해합니다.` },
      { k:'B', en:`Use AWS Application Migration Service. Run agents on the on-premises infrastructure. Manage the agents by using AWS Migration Hub. Use AWS Storage Gateway to assess local storage needs and database dependencies.`, ko:`AWS 애플리케이션 마이그레이션 서비스를 사용하십시오. 온프레미스 인프라에서 에이전트를 실행합니다. AWS Migration Hub를 사용하여 에이전트를 관리합니다. AWS Storage Gateway를 사용하여 로컬 스토리지 요구 사항과 데이터베이스 종속성을 평가합니다.` },
      { k:'C', en:`Use Migration Evaluator to generate a list of servers. Build a report for a business case. Use AWS Migration Hub to view the portfolio. Use AWS Application Discovery Service to gain an understanding of application dependencies.`, ko:`마이그레이션 평가기를 사용하여 서버 목록을 생성합니다. 비즈니스 사례에 대한 보고서를 작성합니다. AWS Migration Hub를 사용하여 포트폴리오를 확인합니다. AWS Application Discovery Service를 사용하여 애플리케이션 종속성을 이해합니다.` },
      { k:'D', en:`Use AWS Control Tower in the destination account to generate an application portfolio. Use AWS Server Migration Service (AWS SMS) to generate deeper reports and a business case. Use a landing zone for core accounts and resources.`, ko:`대상 계정에서 AWS Control Tower를 사용하여 애플리케이션 포트폴리오를 생성합니다. AWS Server Migration Service(AWS SMS)를 사용하여 심층적인 보고서와 비즈니스 사례를 생성하십시오. 핵심 계정 및 리소스에 대한 랜딩 존을 사용하십시오.` },
    ],
    answer: ['C'],
    vote: '96% C',
    explain: `<p><span class="mark-ok">✅ C — Migration Evaluator + Migration Hub + Application Discovery Service</span></p>
<p>마이그레이션 이전에 포트폴리오를 이해하는 단계(평가 단계)에 적합한 도구 조합입니다. <strong>Migration Evaluator</strong>는 온프레미스 서버를 자동으로 스캔하여 목록화하고 AWS 비용 비교 기반의 비즈니스 사례 보고서를 생성합니다. <strong>AWS Migration Hub</strong>는 모든 마이그레이션 활동을 중앙에서 추적합니다. <strong>AWS Application Discovery Service</strong>는 서버 간 종속성과 실행 중인 프로세스를 발견하여 애플리케이션 종속성을 매핑합니다. 문서화가 부족한 환경에서 마이그레이션 계획 수립에 최적화된 조합입니다.</p>
<p><a href="https://aws.amazon.com/migration-evaluator/" target="_blank">AWS Migration Evaluator 공식 페이지</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SMS와 DMS는 마이그레이션 실행 도구이지 사전 평가 도구가 아닙니다. Service Catalog는 IT 서비스 카탈로그 관리용이며 애플리케이션 종속성 발견에 사용하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Application Migration Service는 마이그레이션 실행 단계용이며 평가 단계에 부적합합니다. Storage Gateway는 스토리지 요구사항 평가가 아닌 하이브리드 스토리지 솔루션입니다.</p>
<p><span class="mark-no">❌ D</span> — Control Tower는 AWS 계정 거버넌스 도구이며 포트폴리오 발견 및 평가에 사용하지 않습니다. SMS는 마이그레이션 실행 도구입니다.</p>`,
    disc: [
      { ans:'C (96%)', txt:'평가(Assessment) 단계에는 Migration Evaluator(서버 목록 및 비즈니스 사례) + Application Discovery Service(종속성 분석) + Migration Hub(중앙 추적)가 최적 조합' },
    ]
  },
  {
    n: 175,
    en: `A company has an application that runs as a ReplicaSet of multiple pods in an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster has nodes in multiple Availability Zones. The application generates many small files that must be accessible across all running instances of the application. The company needs to back up the files and retain the backups for 1 year.<br><br>Which solution will meet these requirements while providing the FASTEST storage performance?`,
    ko: `회사에는 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에서 여러 포드의 ReplicaSet으로 실행되는 애플리케이션이 있습니다. EKS 클러스터에는 여러 가용 영역에 노드가 있습니다. 애플리케이션은 실행 중인 모든 애플리케이션 인스턴스에서 액세스할 수 있어야 하는 많은 작은 파일을 생성합니다. 회사는 해당 파일을 백업하고, 백업본을 1년간 보관해야 합니다.<br><br>가장 빠른 스토리지 성능을 제공하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an Amazon Elastic File System (Amazon EFS) file system and a mount target for each subnet that contains nodes in the EKS cluster. Configure the ReplicaSet to mount the file system. Direct the application to store files in the file system. Configure AWS Backup to back up and retain copies of the data for 1 year.`, ko:`EKS 클러스터의 노드가 포함된 각 서브넷에 대해 Amazon Elastic File System(Amazon EFS) 파일 시스템과 탑재 대상을 생성합니다. 파일 시스템을 마운트하도록 ReplicaSet를 구성합니다. 파일 시스템에 파일을 저장하도록 애플리케이션에 지시합니다. 1년 동안 데이터 복사본을 백업하고 보관하도록 AWS Backup을 구성합니다.` },
      { k:'B', en:`Create an Amazon Elastic Block Store (Amazon EBS) volume. Enable the EBS Multi-Attach feature. Configure the ReplicaSet to mount the EBS volume. Direct the application to store files in the EBS volume. Configure AWS Backup to back up and retain copies of the data for 1 year.`, ko:`Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다. EBS 다중 연결 기능을 활성화합니다. EBS 볼륨을 마운트하도록 ReplicaSet를 구성합니다. EBS 볼륨에 파일을 저장하도록 애플리케이션에 지시합니다. 1년 동안 데이터 복사본을 백업하고 보관하도록 AWS Backup을 구성합니다.` },
      { k:'C', en:`Create an Amazon S3 bucket. Configure the ReplicaSet to mount the S3 bucket. Direct the application to store files in the S3 bucket. Configure S3 Versioning to retain copies of the data. Configure an S3 Lifecycle policy to delete objects after 1 year.`, ko:`Amazon S3 버킷을 생성합니다. S3 버킷을 마운트하도록 ReplicaSet를 구성합니다. 애플리케이션이 S3 버킷에 파일을 저장하도록 지시합니다. 데이터 복사본을 유지하도록 S3 버전 관리를 구성합니다. 1년 후에 객체를 삭제하도록 S3 수명 주기 정책을 구성합니다.` },
      { k:'D', en:`Configure the ReplicaSet to use the storage available on each of the running application pods to store the files locally. Use a third-party tool to back up the EKS cluster for 1 year.`, ko:`실행 중인 각 애플리케이션 포드에서 사용 가능한 스토리지를 사용하여 파일을 로컬에 저장하도록 ReplicaSet를 구성합니다. 타사 도구를 사용하여 EKS 클러스터를 1년 동안 백업합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — Amazon EFS + AWS Backup으로 다중 AZ 공유 스토리지 구성</span></p>
<p>여러 AZ에 걸쳐 있는 EKS 클러스터의 모든 포드에서 공유 파일 접근이 필요합니다. <strong>Amazon EFS(Elastic File System)</strong>는 표준 스토리지 클래스에서 여러 가용 영역에 걸쳐 데이터를 자동 복제하며 여러 인스턴스에서 동시에 마운트할 수 있습니다. 각 AZ의 서브넷에 마운트 대상을 생성하면 모든 노드가 저지연으로 접근할 수 있습니다. AWS Backup은 EFS를 지원하므로 1년 보관 정책 구성이 간단합니다.</p>
<p><a href="https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/run-stateful-workloads-with-persistent-data-storage-by-using-amazon-efs-on-amazon-eks-with-aws-fargate.html" target="_blank">AWS 공식 문서: EKS에서 EFS를 사용한 상태 저장 워크로드 실행</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — EBS 다중 연결(Multi-Attach)은 동일 가용 영역 내의 인스턴스에서만 지원됩니다. 여러 AZ에 있는 노드에는 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — S3는 파일 공유 시나리오에서 성능이 EFS보다 낮습니다. 수백만 개의 작은 파일에 대한 고성능 액세스에는 EFS가 S3보다 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — 포드 로컬 스토리지에 파일을 저장하면 포드 간 파일 공유가 불가능합니다. 타사 백업 도구 사용은 불필요한 복잡성을 추가합니다.</p>`,
    disc: [
      { ans:'A (100%)', txt:'EBS 다중 연결은 단일 AZ 내에서만 가능하여 다중 AZ 요건 불충족. EFS는 표준 클래스에서 다중 AZ 복제 및 다중 마운트 지원. S3는 성능에서 EFS 미달' },
    ]
  },
  {
    n: 176,
    en: `A company runs a customer service center that accepts calls and automatically sends all customers a managed, interactive, two-way experience survey by text message. The applications that support the customer service center run on machines that the company hosts in an on-premises data center. The hardware that the company uses is old, and the company is experiencing downtime with the system. The company wants to migrate the system to AWS to improve reliability.<br><br>Which solution will meet these requirements with the LEAST ongoing operational overhead?`,
    ko: `한 회사는 전화를 받고 모든 고객에게 문자 메시지를 통해 관리되는 대화형 양방향 경험 설문조사를 자동으로 보내는 고객 서비스 센터를 운영하고 있습니다. 고객 서비스 센터를 지원하는 애플리케이션은 회사가 온프레미스 데이터 센터에서 호스팅하는 시스템에서 실행됩니다. 회사에서 사용하는 하드웨어가 오래되어 회사 시스템에 다운타임이 발생하고 있습니다. 회사는 안정성을 향상하기 위해 시스템을 AWS로 마이그레이션하려고 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use Amazon Connect to replace the old call center hardware. Use Amazon Pinpoint to send text message surveys to customers.`, ko:`Amazon Connect를 사용하여 기존 콜센터 하드웨어를 교체하십시오. Amazon Pinpoint를 사용하여 고객에게 문자 메시지 설문조사를 보냅니다.` },
      { k:'B', en:`Use Amazon Connect to replace the old call center hardware. Use Amazon Simple Notification Service (Amazon SNS) to send text message surveys to customers.`, ko:`Amazon Connect를 사용하여 기존 콜센터 하드웨어를 교체하십시오. Amazon Simple 알림 서비스(Amazon SNS)를 사용하여 고객에게 문자 메시지 설문조사를 보냅니다.` },
      { k:'C', en:`Migrate the call center software to Amazon EC2 instances that are in an Auto Scaling group. Use the EC2 instances to send text message surveys to customers.`, ko:`콜센터 소프트웨어를 Auto Scaling 그룹에 있는 Amazon EC2 인스턴스로 마이그레이션합니다. EC2 인스턴스를 사용하여 고객에게 문자 메시지 설문조사를 보냅니다.` },
      { k:'D', en:`Use Amazon Pinpoint to replace the old call center hardware and to send text message surveys to customers.`, ko:`Amazon Pinpoint를 사용하여 기존 콜센터 하드웨어를 교체하고 고객에게 문자 메시지 설문조사를 보냅니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — Amazon Connect(콜센터) + Amazon Pinpoint(양방향 SMS 설문)</span></p>
<p><strong>Amazon Connect</strong>는 완전 관리형 클라우드 기반 콜센터 서비스로 기존 하드웨어를 대체합니다. <strong>Amazon Pinpoint</strong>는 이메일, SMS, 음성 등 다양한 채널을 통한 커뮤니케이션을 지원하며 특히 양방향 SMS(Two-way SMS) 기능을 제공하여 고객 응답을 수신할 수 있습니다. "관리형, 대화형, 양방향" 설문 요건에 정확히 부합합니다. 두 서비스 모두 완전 관리형(Fully Managed)이어서 운영 오버헤드가 최소화됩니다.</p>
<p><a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-two-way.html" target="_blank">AWS 공식 문서: Amazon Pinpoint 양방향 SMS</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Amazon SNS는 단방향 SMS 푸시 알림에 사용됩니다. 양방향(고객 응답 수신) 설문 기능을 지원하지 않습니다. Pinpoint가 양방향 SMS를 지원합니다.</p>
<p><span class="mark-no">❌ C</span> — EC2 Auto Scaling 그룹에 콜센터 소프트웨어를 마이그레이션하면 하드웨어 문제는 해결되지만 인프라 관리 오버헤드(패치, 업그레이드, 용량 관리)가 계속 남습니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon Pinpoint는 SMS 및 마케팅 커뮤니케이션 서비스이지 콜센터(음성 통화 수신/관리) 기능을 대체하지 않습니다.</p>`,
    disc: [
      { ans:'A (100%)', txt:'Amazon Connect = 완전 관리형 클라우드 콜센터. Amazon Pinpoint = 양방향 SMS 지원. SNS는 단방향 알림만 가능하여 B 탈락. Pinpoint만으로는 콜센터 기능 대체 불가하여 D 탈락' },
    ]
  },
  {
    n: 177,
    en: `A company is building a call center by using Amazon Connect. The company's operations team is defining a disaster recovery (DR) strategy across AWS Regions. The contact center has dozens of contact flows, hundreds of users, and dozens of claimed phone numbers.<br><br>Which solution will provide DR with the LOWEST RTO?`,
    ko: `한 회사에서 Amazon Connect를 사용하여 콜센터를 구축하고 있습니다. 회사의 운영 팀은 AWS 지역 전반에 걸쳐 재해 복구(DR) 전략을 정의하고 있습니다. 연락 센터에는 수십 개의 연락 흐름, 수백 명의 사용자, 수십 개의 청구된 전화 번호가 있습니다.<br><br>DR에 가장 낮은 RTO를 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an AWS Lambda function to check the availability of the Amazon Connect instance and to send a notification to the operations team in case of unavailability. Create an Amazon EventBridge rule to invoke the Lambda function every 5 minutes. After notification, instruct the operations team to use the AWS Management Console to provision a new Amazon Connect instance in a second Region. Deploy the contact flows, users, and claimed phone numbers by using an AWS CloudFormation template.`, ko:`Amazon Connect 인스턴스의 가용성을 확인하고 사용할 수 없는 경우 운영 팀에 알림을 보내는 AWS Lambda 함수를 생성하십시오. 5분마다 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 생성합니다. 알림을 받은 후 운영 팀에 AWS Management Console을 사용하여 두 번째 지역에 새 Amazon Connect 인스턴스를 프로비저닝하도록 지시하십시오. AWS CloudFormation 템플릿을 사용하여 고객 응대 흐름, 사용자 및 청구된 전화번호를 배포합니다.` },
      { k:'B', en:`Provision a new Amazon Connect instance with all existing users in a second Region. Create an AWS Lambda function to check the availability of the Amazon Connect instance. Create an Amazon EventBridge rule to invoke the Lambda function every 5 minutes. In the event of an issue, configure the Lambda function to deploy an AWS CloudFormation template that provisions contact flows and claimed numbers in the second Region.`, ko:`두 번째 지역의 모든 기존 사용자와 함께 새로운 Amazon Connect 인스턴스를 프로비저닝합니다. Amazon Connect 인스턴스의 가용성을 확인하는 AWS Lambda 함수를 생성합니다. 5분마다 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 생성합니다. 문제가 발생하는 경우 두 번째 지역에서 고객 응대 흐름 및 청구 번호를 프로비저닝하는 AWS CloudFormation 템플릿을 배포하도록 Lambda 함수를 구성합니다.` },
      { k:'C', en:`Provision a new Amazon Connect instance with all existing contact flows and claimed phone numbers in a second Region. Create an Amazon Route 53 health check for the URL of the Amazon Connect instance. Create an Amazon CloudWatch alarm for failed health checks. Create an AWS Lambda function to deploy an AWS CloudFormation template that provisions all users. Configure the alarm to invoke the Lambda function.`, ko:`두 번째 지역에서 모든 기존 고객 응대 흐름과 청구된 전화번호를 사용하여 새로운 Amazon Connect 인스턴스를 프로비저닝합니다. Amazon Connect 인스턴스의 URL에 대한 Amazon Route 53 상태 확인을 생성합니다. 상태 확인 실패에 대한 Amazon CloudWatch 경보를 생성합니다. 모든 사용자를 프로비저닝하는 AWS CloudFormation 템플릿을 배포하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 호출하도록 경보를 구성합니다.` },
      { k:'D', en:`Provision a new Amazon Connect instance with all existing users and contact flows in a second Region. Create an Amazon Route 53 health check for the URL of the Amazon Connect instance. Create an Amazon CloudWatch alarm for failed health checks. Create an AWS Lambda function to deploy an AWS CloudFormation template that provisions claimed phone numbers. Configure the alarm to invoke the Lambda function.`, ko:`두 번째 지역의 모든 기존 사용자 및 고객 응대 흐름을 사용하여 새로운 Amazon Connect 인스턴스를 프로비저닝합니다. Amazon Connect 인스턴스의 URL에 대한 Amazon Route 53 상태 확인을 생성합니다. 상태 확인 실패에 대한 Amazon CloudWatch 경보를 생성합니다. 청구된 전화번호를 프로비저닝하는 AWS CloudFormation 템플릿을 배포하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 호출하도록 경보를 구성합니다.` },
    ],
    answer: ['D'],
    vote: '85% D',
    explain: `<p><span class="mark-ok">✅ D — 사용자+연락 흐름 사전 프로비저닝 + 자동 전화번호 프로비저닝으로 최저 RTO</span></p>
<p>가장 낮은 RTO를 달성하려면 장애 발생 시 배포해야 하는 항목이 최소화되어야 합니다. 옵션 D에서는 <strong>사용자(Users)와 연락 흐름(Contact Flows)</strong>을 두 번째 리전에 미리 프로비저닝합니다. 장애 발생 시에는 CloudFormation을 통해 <strong>청구된 전화번호(Claimed Phone Numbers)</strong>만 자동 프로비저닝하면 됩니다. Route 53 상태 확인 + CloudWatch 경보 + Lambda로 자동화하여 운영팀 개입 없이 장애 조치가 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 장애 발생 후 수동으로 Console에서 새 인스턴스를 프로비저닝하고 모든 구성을 배포해야 하므로 RTO가 가장 깁니다.</p>
<p><span class="mark-no">❌ B</span> — 사용자만 사전 프로비저닝되어 있고 연락 흐름과 전화번호는 장애 발생 시 배포해야 합니다. D보다 더 많은 항목을 배포해야 하므로 RTO가 더 깁니다.</p>
<p><span class="mark-no">❌ C</span> — 연락 흐름과 전화번호는 사전 프로비저닝되어 있지만 수백 명의 사용자를 장애 발생 시 배포해야 합니다. 사용자 수가 많아 D보다 RTO가 길 수 있습니다.</p>`,
    disc: [
      { ans:'D (85%)', txt:'RTO 최소화를 위해 사용자+연락흐름을 사전 프로비저닝. 장애 시 전화번호만 자동 추가. Route 53+CloudWatch+Lambda로 완전 자동화' },
    ]
  },
  {
    n: 178,
    en: `A company runs an application on AWS. The company curates data from several different sources. The company uses proprietary algorithms to perform data transformations and aggregations. After the company performs ETL processes, the company stores the results in Amazon Redshift tables. The company sells this data to other companies. The company downloads the data as files from the Amazon Redshift tables and transmits the files to several data customers by using FTP. The number of data customers has grown significantly. Management of the data customers has become difficult.<br><br>The company will use AWS Data Exchange to create a data product that the company can use to share data with customers. The company wants to confirm the identities of the customers before the company shares data. The customers also need access to the most recent data when the company publishes the data.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사가 AWS에서 애플리케이션을 실행하고 있습니다. 회사는 다양한 소스로부터 데이터를 선별합니다. 회사는 독점 알고리즘을 사용하여 데이터 변환 및 집계를 수행합니다. 회사는 ETL 프로세스를 수행한 후 결과를 Amazon Redshift 테이블에 저장합니다. 회사는 이 데이터를 다른 회사에 판매합니다. 회사는 Amazon Redshift 테이블에서 데이터를 파일로 다운로드하고 FTP를 사용하여 여러 데이터 고객에게 파일을 전송합니다. 데이터 고객 수가 크게 늘어났습니다. 데이터 고객 관리가 어려워졌습니다.<br><br>회사는 AWS Data Exchange를 사용하여 회사가 고객과 데이터를 공유하는 데 사용할 수 있는 데이터 제품을 만들 것입니다. 회사는 데이터를 공유하기 전에 고객의 신원을 확인하기를 원합니다. 또한 고객은 회사가 데이터를 게시할 때 최신 데이터에 액세스해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use AWS Data Exchange for APIs to share data with customers. Configure subscription verification. In the AWS account of the company that produces the data, create an Amazon API Gateway Data API service integration with Amazon Redshift. Require the data customers to subscribe to the data product.`, ko:`API용 AWS Data Exchange를 사용하여 고객과 데이터를 공유하십시오. 구독 확인을 구성합니다. 데이터를 생산하는 회사의 AWS 계정에서 Amazon Redshift와 Amazon API Gateway 데이터 API 서비스 통합을 생성합니다. 데이터 고객에게 데이터 제품을 구독하도록 요구합니다.` },
      { k:'B', en:`In the AWS account of the company that produces the data, create an AWS Data Exchange datashare by connecting AWS Data Exchange to the Redshift cluster. Configure subscription verification. Require the data customers to subscribe to the data product.`, ko:`데이터를 생산하는 회사의 AWS 계정에서 AWS Data Exchange를 Redshift 클러스터에 연결하여 AWS Data Exchange 데이터 공유를 생성합니다. 구독 확인을 구성합니다. 데이터 고객에게 데이터 제품을 구독하도록 요구합니다.` },
      { k:'C', en:`Download the data from the Amazon Redshift tables to an Amazon S3 bucket periodically. Use AWS Data Exchange for S3 to share data with customers. Configure subscription verification. Require the data customers to subscribe to the data product.`, ko:`Amazon Redshift 테이블의 데이터를 주기적으로 Amazon S3 버킷으로 다운로드합니다. S3용 AWS Data Exchange를 사용하여 고객과 데이터를 공유하십시오. 구독 확인을 구성합니다. 데이터 고객에게 데이터 제품을 구독하도록 요구합니다.` },
      { k:'D', en:`Publish the Amazon Redshift data to an Open Data on AWS Data Exchange. Require the customers to subscribe to the data product in AWS Data Exchange. In the AWS account of the company that produces the data, attach IAM resource-based policies to the Amazon Redshift tables to allow access only to verified AWS accounts.`, ko:`Amazon Redshift 데이터를 AWS Data Exchange의 개방형 데이터에 게시합니다. 고객에게 AWS Data Exchange의 데이터 제품을 구독하도록 요구합니다. 데이터를 생산하는 회사의 AWS 계정에서 IAM 리소스 기반 정책을 Amazon Redshift 테이블에 연결하여 확인된 AWS 계정에만 액세스를 허용합니다.` },
    ],
    answer: ['B'],
    vote: '83% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Data Exchange Datashare로 Redshift 데이터 직접 공유</span></p>
<p><strong>AWS Data Exchange for Amazon Redshift</strong>는 Redshift 클러스터에 연결된 데이터 공유(Datashare)를 생성하여 고객이 ETL 없이 Redshift에서 직접 데이터를 쿼리할 수 있게 합니다. 구독 확인(Subscription Verification) 기능을 통해 데이터 공유 전 고객 신원을 확인할 수 있습니다. 데이터가 게시될 때 고객은 항상 최신 Redshift 데이터에 즉시 접근할 수 있습니다. FTP 파일 전송을 완전히 제거하여 운영 오버헤드가 크게 감소합니다.</p>
<p><a href="https://docs.aws.amazon.com/redshift/latest/dg/adx-getting-started.html" target="_blank">AWS 공식 문서: AWS Data Exchange for Amazon Redshift</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — API Gateway와 Redshift 데이터 API 통합은 구성이 복잡하고 높은 운영 오버헤드가 필요합니다. Datashare 방식보다 더 많은 구성 요소가 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — Redshift에서 S3로 주기적으로 다운로드하는 단계가 추가되어 운영 오버헤드가 증가하고 데이터 지연이 발생합니다. 최신 데이터 접근에 불리합니다.</p>
<p><span class="mark-no">❌ D</span> — Open Data는 구독 확인을 지원하지 않아 고객 신원 확인 요건을 충족할 수 없습니다. 누구나 데이터에 접근할 수 있게 됩니다.</p>`,
    disc: [
      { ans:'B (83%)', txt:'Data Exchange Datashare = Redshift 직접 쿼리 + 구독 확인 + 최신 데이터 즉시 접근. C는 주기적 다운로드로 지연 발생. D는 신원 확인 불가' },
    ]
  },
  {
    n: 179,
    en: `A solutions architect is designing a solution to process events. The solution must have the ability to scale in and out based on the number of events that the solution receives. If a processing error occurs, the event must move into a separate queue for review.<br><br>Which solution will meet these requirements?`,
    ko: `솔루션 설계자는 이벤트를 처리하기 위한 솔루션을 설계하고 있습니다. 솔루션에는 솔루션이 수신하는 이벤트 수에 따라 규모를 확대 및 축소할 수 있는 기능이 있어야 합니다. 처리 오류가 발생하는 경우 이벤트는 검토를 위해 별도의 대기열로 이동해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Send event details to an Amazon Simple Notification Service (Amazon SNS) topic. Configure an AWS Lambda function as a subscriber to the SNS topic to process the events. Add an on-failure destination to the function. Set an Amazon Simple Queue Service (Amazon SQS) queue as the target.`, ko:`Amazon SNS(Amazon SNS) 주제로 이벤트 세부 정보를 보냅니다. 이벤트를 처리하려면 AWS Lambda 함수를 SNS 주제의 구독자로 구성하세요. 실패 시 대상을 함수에 추가합니다. Amazon Simple Queue Service(Amazon SQS) 대기열을 대상으로 설정합니다.` },
      { k:'B', en:`Publish events to an Amazon Simple Queue Service (Amazon SQS) queue. Create an Amazon EC2 Auto Scaling group. Configure the Auto Scaling group to scale in and out based on the ApproximateAgeOfOldestMessage metric of the queue. Configure the application to write failed messages to a dead-letter queue.`, ko:`Amazon Simple Queue Service(Amazon SQS) 대기열에 이벤트를 게시합니다. Amazon EC2 Auto Scaling 그룹을 생성합니다. 대기열의 ApproximateAgeOfOldestMessage 지표를 기반으로 확장 및 축소하도록 Auto Scaling 그룹을 구성합니다. 실패한 메시지를 배달 못한 편지 대기열에 쓰도록 애플리케이션을 구성합니다.` },
      { k:'C', en:`Write events to an Amazon DynamoDB table. Configure a DynamoDB stream for the table. Configure the stream to invoke an AWS Lambda function. Configure the Lambda function to process the events.`, ko:`Amazon DynamoDB 테이블에 이벤트를 씁니다. 테이블에 대한 DynamoDB 스트림을 구성합니다. AWS Lambda 함수를 호출하도록 스트림을 구성합니다. 이벤트를 처리하도록 Lambda 함수를 구성합니다.` },
      { k:'D', en:`Publish events to an Amazon EventBridge event bus. Create and run an application on an Amazon EC2 instance with an Auto Scaling group that is behind an Application Load Balancer (ALB). Set the ALB as the event bus target. Configure the event bus to retry events. Write messages to a dead-letter queue if the application cannot process the messages.`, ko:`Amazon EventBridge 이벤트 버스에 이벤트를 게시합니다. Application Load Balancer(ALB) 뒤에 있는 Auto Scaling 그룹을 사용하여 Amazon EC2 인스턴스에서 애플리케이션을 생성하고 실행합니다. ALB를 이벤트 버스 대상으로 설정합니다. 이벤트를 재시도하도록 이벤트 버스를 구성합니다. 애플리케이션이 메시지를 처리할 수 없는 경우 배달 못한 편지 대기열에 메시지를 씁니다.` },
    ],
    answer: ['A'],
    vote: '58% A',
    explain: `<p><span class="mark-ok">✅ A — SNS → Lambda(이벤트 수 기반 자동 스케일) + 실패 시 SQS 대상</span></p>
<p>AWS Lambda는 SNS 주제의 메시지 수에 따라 자동으로 스케일 인/아웃합니다. "이벤트 수를 기반으로 스케일"이라는 요건에 부합합니다. <strong>Lambda 대상(Destinations)</strong> 기능의 실패 시(on-failure) 대상에 SQS 대기열을 설정하면 처리 실패한 이벤트가 자동으로 SQS 대기열로 이동합니다. 이 패턴은 서버리스로 운영 오버헤드도 낮습니다.</p>
<p>옵션 B의 <code>ApproximateAgeOfOldestMessage</code>는 메시지 수가 아닌 가장 오래된 메시지의 경과 시간 기반 지표로, 요건("이벤트 수 기반 스케일")과 정확히 일치하지 않습니다.</p>
<p><a href="https://aws.amazon.com/blogs/compute/introducing-aws-lambda-destinations/" target="_blank">AWS 공식 블로그: Lambda 대상(Destinations) 소개</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — <code>ApproximateAgeOfOldestMessage</code>는 메시지 수가 아닌 가장 오래된 메시지의 경과 시간 기반으로 스케일링합니다. 트래픽 폭증 시 메시지 수 증가에 비해 경과 시간 증가가 선형적이어서 충분히 빠른 스케일아웃이 어렵습니다. 또한 EC2 기반이어서 서버리스 Lambda보다 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ C</span> — DynamoDB 스트림 → Lambda 패턴은 처리 오류 시 별도 대기열로 이동하는 메커니즘이 명시되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — ALB는 현재 EventBridge 대상으로 지원되지 않습니다. EC2 + Auto Scaling 구성은 서버리스 대안보다 복잡합니다.</p>`,
    disc: [
      { ans:'A (58%) vs B (42%)', txt:'논쟁의 핵심은 스케일링 지표. A는 Lambda가 이벤트 수 기준 자동 스케일. B의 ApproximateAgeOfOldestMessage는 시간 기반으로 이벤트 수 기반 스케일 요건과 불일치. ALB는 EventBridge 대상 미지원으로 D 탈락' },
    ]
  },
  {
    n: 180,
    en: `A company runs a processing engine in the AWS Cloud. The engine processes environmental data from logistics centers to calculate a sustainability index. The company has millions of devices in logistics centers that are spread across Europe. The devices send information to the processing engine through a RESTful API.<br><br>The API experiences unpredictable bursts of traffic. The company must implement a solution to process all data that the devices send to the processing engine. Data loss is unacceptable.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 AWS 클라우드에서 처리 엔진을 실행합니다. 엔진은 물류센터의 환경 데이터를 처리하여 지속가능성 지수를 계산합니다. 이 회사는 유럽 전역에 분산된 물류 센터에 수백만 대의 장치를 보유하고 있습니다. 장치는 RESTful API를 통해 처리 엔진에 정보를 보냅니다.<br><br>API에서 예측할 수 없는 트래픽 급증이 발생합니다. 회사는 장치가 처리 엔진으로 보내는 모든 데이터를 처리하는 솔루션을 구현해야 합니다. 데이터 손실은 용납될 수 없습니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an Application Load Balancer (ALB) for the RESTful API. Create an Amazon Simple Queue Service (Amazon SQS) queue. Create a listener and a target group for the ALB. Add the SQS queue as the target. Use a container that runs in Amazon Elastic Container Service (Amazon ECS) with the Fargate launch type to process messages in the queue.`, ko:`RESTful API용 ALB(Application Load Balancer)를 생성합니다. Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. ALB에 대한 리스너 및 대상 그룹을 생성합니다. SQS 대기열을 대상으로 추가합니다. Fargate 시작 유형과 함께 Amazon Elastic Container Service(Amazon ECS)에서 실행되는 컨테이너를 사용하여 대기열의 메시지를 처리합니다.` },
      { k:'B', en:`Create an Amazon API Gateway HTTP API that implements the RESTful API. Create an Amazon Simple Queue Service (Amazon SQS) queue. Create an API Gateway service integration with the SQS queue. Create an AWS Lambda function to process messages in the SQS queue.`, ko:`RESTful API를 구현하는 Amazon API Gateway HTTP API를 생성합니다. Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. SQS 대기열과 API Gateway 서비스 통합을 생성합니다. SQS 대기열의 메시지를 처리하는 AWS Lambda 함수를 생성합니다.` },
      { k:'C', en:`Create an Amazon API Gateway REST API that implements the RESTful API. Create a fleet of Amazon EC2 instances in an Auto Scaling group. Create an API Gateway Auto Scaling group proxy integration. Use the EC2 instances to process incoming data.`, ko:`RESTful API를 구현하는 Amazon API Gateway REST API를 생성합니다. Auto Scaling 그룹에 Amazon EC2 인스턴스 플릿을 생성합니다. API Gateway Auto Scaling 그룹 프록시 통합을 생성합니다. EC2 인스턴스를 사용하여 수신 데이터를 처리합니다.` },
      { k:'D', en:`Create an Amazon CloudFront distribution for the RESTful API. Create a data stream in Amazon Kinesis Data Streams. Set the data stream as the origin for the distribution. Create an AWS Lambda function to consume and process data in the data stream.`, ko:`RESTful API용 Amazon CloudFront 배포판을 생성합니다. Amazon Kinesis Data Streams에서 데이터 스트림을 생성합니다. 데이터 스트림을 배포 원본으로 설정합니다. 데이터 스트림의 데이터를 소비하고 처리하는 AWS Lambda 함수를 생성합니다.` },
    ],
    answer: ['B'],
    vote: '89% B',
    explain: `<p><span class="mark-ok">✅ B — API Gateway HTTP API → SQS 서비스 통합 → Lambda 처리</span></p>
<p>예측 불가능한 트래픽 급증과 데이터 손실 방지를 위한 최적 패턴입니다. <strong>API Gateway HTTP API</strong>가 RESTful 엔드포인트를 제공하고, SQS와의 서비스 통합을 통해 수신된 모든 요청을 즉시 <strong>SQS 대기열</strong>에 저장합니다. SQS 표준 대기열은 무제한 처리량을 지원하므로 트래픽 급증 시에도 데이터 손실이 없습니다. Lambda는 SQS를 폴링하여 비동기적으로 메시지를 처리합니다. 이벤트 수집(API GW)과 처리(Lambda)가 분리되어 트래픽 급증을 효과적으로 흡수합니다.</p>
<p><a href="https://aws.amazon.com/blogs/architecture/things-to-consider-when-you-build-rest-apis-with-amazon-api-gateway/" target="_blank">AWS 공식 블로그: API Gateway로 REST API 구축 시 고려사항</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ALB는 SQS 대기열을 대상 그룹의 대상으로 직접 지원하지 않습니다. ALB의 지원 대상 유형은 인스턴스, IP, Lambda 함수입니다.</p>
<p><span class="mark-no">❌ C</span> — EC2 Auto Scaling 그룹은 예측 불가능한 버스트에 충분히 빠르게 스케일아웃하지 못할 수 있습니다. 스케일아웃 중 데이터 손실이 발생할 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — Kinesis Data Streams는 CloudFront의 오리진으로 설정할 수 없습니다. CloudFront는 CDN으로 RESTful API 수집에 적합하지 않습니다.</p>`,
    disc: [
      { ans:'B (89%)', txt:'ALB는 SQS 대상 미지원으로 A 탈락. Kinesis는 CloudFront 오리진 불가로 D 탈락. API GW → SQS 서비스 통합은 트래픽 버스트 흡수 + 데이터 손실 방지의 최적 조합' },
    ]
  },
];