window.QS_SET47 = [
  {
    n: 461,
    en: `<p>A company needs to migrate its website from an on-premises data center to AWS. The website consists of a load balancer, a content management system (CMS) that runs on a Linux operating system, and a MySQL database.</p>
<p>The CMS requires persistent NFS-compatible storage for a file system. The new solution on AWS must be able to scale from 2 Amazon EC2 instances to 30 EC2 instances in response to unpredictable traffic increases. The new solution also must require no changes to the website and must prevent data loss.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 웹사이트를 온프레미스 데이터 센터에서 AWS로 마이그레이션해야 합니다. 웹사이트는 로드 밸런서, Linux에서 실행되는 CMS, MySQL 데이터베이스로 구성됩니다.</p>
<p>CMS는 파일 시스템을 위한 영구 NFS 호환 스토리지가 필요합니다. AWS의 새 솔루션은 예측할 수 없는 트래픽 증가에 따라 EC2 인스턴스 2개에서 30개로 확장할 수 있어야 하고, 웹사이트 변경 없이 데이터 손실을 방지해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an Amazon EFS file system. Deploy the CMS to AWS Elastic Beanstalk with an Application Load Balancer and an Auto Scaling group. Use .ebextensions to mount the EFS file system to the EC2 instances. Create an Amazon Aurora MySQL database that is separate from the Elastic Beanstalk environment.', ko: 'Amazon EFS 파일 시스템을 생성합니다. ALB와 Auto Scaling 그룹으로 CMS를 Elastic Beanstalk에 배포합니다. .ebextensions를 사용하여 EFS를 EC2 인스턴스에 마운트합니다. Beanstalk 환경과 별도로 Amazon Aurora MySQL 데이터베이스를 생성합니다.' },
      { k: 'B', en: 'Create an Amazon EBS Multi-Attach volume. Deploy the CMS to AWS Elastic Beanstalk with a Network Load Balancer and an Auto Scaling group. Use .ebextensions to mount the EBS volume to the EC2 instances. Create an Amazon RDS for MySQL database in the Elastic Beanstalk environment.', ko: 'Amazon EBS 다중 연결 볼륨을 생성합니다. NLB와 Auto Scaling 그룹으로 CMS를 Elastic Beanstalk에 배포합니다. .ebextensions를 사용하여 EBS 볼륨을 마운트합니다. RDS for MySQL 데이터베이스를 생성합니다.' },
      { k: 'C', en: 'Create an Amazon EFS file system. Create a launch template and an Auto Scaling group to launch EC2 instances. Create a Network Load Balancer to distribute traffic. Create an Amazon Aurora MySQL database. Use an EC2 Auto Scaling scale-in lifecycle hook to mount the EFS file system to the EC2 instances.', ko: 'Amazon EFS 파일 시스템을 생성합니다. 시작 템플릿과 Auto Scaling 그룹을 생성합니다. NLB를 생성하고 Aurora MySQL 데이터베이스를 생성합니다. EC2 Auto Scaling 축소 수명 주기 후크를 사용하여 EFS를 마운트합니다.' },
      { k: 'D', en: 'Create an Amazon EBS Multi-Attach volume. Create a launch template and an Auto Scaling group. Create an Application Load Balancer. Create an Amazon ElastiCache for Redis cluster to support the MySQL database. Use EC2 user data to attach the EBS volume.', ko: 'EBS 다중 연결 볼륨을 생성합니다. 시작 템플릿과 Auto Scaling 그룹, ALB를 생성합니다. MySQL 데이터베이스를 지원하기 위해 Redis용 ElastiCache 클러스터를 생성합니다. EC2 사용자 데이터로 EBS 볼륨을 연결합니다.' },
    ],
    answer: ['A'],
    vote: '89% A',
    explain: `<p><span class="mark-ok">✅ A — EFS + Elastic Beanstalk + ALB + Aurora MySQL</span></p>
<p>요구사항 분석:</p>
<ul>
<li><strong>NFS 호환 영구 스토리지</strong>: Amazon EFS(NFS 프로토콜 지원). EBS는 NFS 비호환</li>
<li><strong>웹사이트 변경 없음</strong>: Elastic Beanstalk에 기존 앱 배포</li>
<li><strong>2→30 인스턴스 확장</strong>: ALB + Auto Scaling 그룹</li>
<li><strong>데이터 손실 방지</strong>: EFS(다중 AZ 공유)와 Aurora MySQL</li>
</ul>
<p><a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create-deploy-python-flask.html" target="_blank">AWS 공식 문서: Elastic Beanstalk .ebextensions</a></p>`,
    wrong: `<p><span class="mark-no">❌ B, D</span> — EBS Multi-Attach는 NFS 호환이 아닙니다. 또한 단일 AZ 내 최대 16개 인스턴스만 지원합니다.</p>
<p><span class="mark-no">❌ C</span> — 축소(Scale-in) 수명 주기 후크는 인스턴스 종료 시 트리거됩니다. EFS 마운트는 인스턴스 시작(Scale-out) 시 수행되어야 합니다.</p>`,
    disc: [
      { ans: 'A (89%)', txt: 'EFS(NFS 호환) + Beanstalk(변경 최소) + ALB + Aurora MySQL. 모든 요구사항을 충족.' },
    ],
  },
  {
    n: 462,
    en: `<p>A company needs to implement disaster recovery for a critical application that runs in a single AWS Region. The application's users interact with a web frontend that is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The application writes to an Amazon RDS for MySQL DB instance. The application also outputs processed documents that are stored in an Amazon S3 bucket.</p>
<p>The company's finance team directly queries the database to run reports. During busy periods, these queries consume resources and negatively affect application performance.</p>
<p>A solutions architect must design a solution that will provide resiliency during a disaster. The solution must minimize data loss and must resolve the performance problems that result from the finance team's queries.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 단일 AWS 리전에서 실행되는 중요 애플리케이션에 대한 재해 복구를 구현해야 합니다. 애플리케이션은 ALB 뒤의 EC2 인스턴스에서 호스팅되는 웹 프론트엔드와 상호 작용하며 RDS for MySQL DB에 씁니다. 처리된 문서는 S3 버킷에 저장됩니다.</p>
<p>재무팀이 직접 DB를 쿼리하여 보고서를 실행하는데, 바쁜 기간에는 애플리케이션 성능에 부정적인 영향을 미칩니다.</p>
<p>재해 시 복원력 제공, 데이터 손실 최소화, 재무팀 쿼리 성능 문제를 해결하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Migrate the database to Amazon DynamoDB and use DynamoDB global tables. Instruct the finance team to query a global table in a separate Region. Create an AWS Lambda function to periodically synchronize the original S3 bucket to a new S3 bucket in the separate Region. Launch EC2 instances and create an ALB in the separate Region.', ko: 'DynamoDB 글로벌 테이블로 DB를 마이그레이션합니다. 재무팀에 별도 리전의 글로벌 테이블을 쿼리하도록 지시합니다. Lambda 함수로 S3 버킷을 주기적으로 동기화합니다. 별도 리전에 EC2와 ALB를 생성합니다.' },
      { k: 'B', en: 'Launch additional EC2 instances in a separate Region and add them to the existing ALB. Create a read replica of the RDS DB instance in the separate Region. Instruct the finance team to run queries against the read replica. Use S3 CRR to a new S3 bucket in the separate Region. During a disaster, promote the read replica and configure the application.', ko: '별도 리전에 추가 EC2 인스턴스를 시작하고 기존 ALB에 추가합니다. 별도 리전에 RDS 읽기 전용 복제본을 생성합니다. S3 CRR을 사용합니다. 재해 시 읽기 전용 복제본을 승격하고 애플리케이션을 구성합니다.' },
      { k: 'C', en: 'Create a read replica of the RDS DB instance in a separate Region. Instruct the finance team to run queries against the read replica. Create AMIs of the EC2 instances that host the application frontend. Copy the AMIs to the separate Region. Use S3 CRR to a new S3 bucket in the separate Region. During a disaster, promote the read replica to a standalone DB instance. Launch EC2 instances from the AMIs and create an ALB.', ko: '별도 리전에 RDS 읽기 전용 복제본을 생성합니다. 재무팀에 읽기 전용 복제본에 대해 쿼리를 실행하도록 지시합니다. EC2 인스턴스의 AMI를 생성하여 복사합니다. S3 CRR을 사용합니다. 재해 시 읽기 전용 복제본을 독립형 DB로 승격하고 AMI에서 EC2와 ALB를 생성합니다.' },
      { k: 'D', en: 'Create hourly snapshots of the RDS DB instance. Copy the snapshots to a separate Region. Add an Amazon ElastiCache cluster in front of the existing RDS database. Create AMIs of the EC2 instances. Copy the AMIs to the separate Region. Use S3 CRR. During a disaster, restore the database from the latest RDS snapshot and launch EC2 instances from the AMIs.', ko: 'RDS DB의 시간별 스냅샷을 생성하고 별도 리전에 복사합니다. 기존 DB 앞에 ElastiCache 클러스터를 추가합니다. EC2 인스턴스의 AMI를 생성하고 복사합니다. S3 CRR을 사용합니다. 재해 시 최신 스냅샷에서 DB를 복원하고 AMI에서 EC2를 시작합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — RDS 읽기 전용 복제본(별도 리전) + AMI 복사 + S3 CRR</span></p>
<p>두 가지 문제를 동시에 해결합니다:</p>
<ul>
<li><strong>재무팀 성능 문제</strong>: 별도 리전의 읽기 전용 복제본으로 쿼리 분리 → 운영 DB 부하 제거</li>
<li><strong>재해 복구</strong>: AMI → EC2 빠른 복구, S3 CRR → S3 데이터 자동 복제, 읽기 복제본 → 독립형 DB 승격</li>
<li>데이터 손실 최소화: 읽기 복제본은 비동기 복제이지만 스냅샷보다 최신 데이터 유지</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 관계형 DB에서 DynamoDB로 마이그레이션은 대규모 변경이 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — ALB는 단일 리전 서비스입니다. 다른 리전의 EC2를 기존 ALB에 추가할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 시간별 스냅샷은 최대 1시간의 데이터 손실 가능성이 있어 데이터 손실 최소화 요구사항에 부적합합니다. ElastiCache는 불필요합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: '읽기 복제본으로 재무팀 쿼리 분리 + AMI/CRR로 DR 구성. 데이터 손실 최소화와 성능 문제를 모두 해결.' },
    ],
  },
  {
    n: 463,
    en: `<p>A company has many services running in its on-premises data center. The data center is connected to AWS using AWS Direct Connect (DX) and an IPSec VPN. The service data is sensitive and connectivity cannot traverse the internet. The company wants to expand into a new market segment and begin offering its services to other companies that are using AWS.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 온프레미스 데이터 센터에서 많은 서비스를 운영하고 있습니다. 데이터 센터는 AWS Direct Connect와 IPSec VPN을 사용하여 AWS에 연결됩니다. 서비스 데이터는 민감하며 연결이 인터넷을 통과할 수 없습니다. 회사는 AWS를 사용하는 다른 회사에 서비스를 제공하고자 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a VPC Endpoint Service that accepts TCP traffic, host it behind a Network Load Balancer, and make the service available over DX.', ko: 'TCP 트래픽을 허용하는 VPC 엔드포인트 서비스를 생성하고 NLB 뒤에 호스팅하여 DX를 통해 서비스를 제공합니다.' },
      { k: 'B', en: 'Create a VPC Endpoint Service that accepts HTTP or HTTPS traffic, host it behind an Application Load Balancer, and make the service available over DX.', ko: 'HTTP 또는 HTTPS 트래픽을 허용하는 VPC 엔드포인트 서비스를 생성하고 ALB 뒤에 호스팅하여 DX를 통해 서비스를 제공합니다.' },
      { k: 'C', en: 'Attach an internet gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.', ko: '인터넷 게이트웨이를 VPC에 연결하고 네트워크 ACL과 보안 그룹 규칙이 관련 트래픽을 허용하도록 합니다.' },
      { k: 'D', en: 'Attach a NAT gateway to the VPC, and ensure that network access control and security group rules allow the relevant inbound and outbound traffic.', ko: 'NAT 게이트웨이를 VPC에 연결하고 네트워크 ACL과 보안 그룹 규칙이 관련 트래픽을 허용하도록 합니다.' },
    ],
    answer: ['A'],
    vote: '82% A / 18% B',
    explain: `<p><span class="mark-ok">✅ A — VPC 엔드포인트 서비스(PrivateLink) + NLB + DX</span></p>
<p>인터넷 비경유 + 다른 AWS 계정에 서비스 제공 = AWS PrivateLink의 교과서적 사용 사례:</p>
<ul>
<li><strong>VPC 엔드포인트 서비스(PrivateLink)</strong>: 인터넷을 통하지 않고 다른 VPC/계정에 서비스 비공개 노출</li>
<li><strong>NLB 필수</strong>: PrivateLink 엔드포인트 서비스는 NLB(또는 GWLB)만 지원. ALB는 직접 지원 불가</li>
<li><strong>DX를 통한 접근</strong>: 온프레미스에서 AWS PrivateLink를 DX로 활용 가능</li>
<li>TCP 수준 지원으로 다양한 서비스 프로토콜 커버 가능</li>
</ul>
<p><a href="https://docs.aws.amazon.com/vpc/latest/privatelink/create-endpoint-service.html" target="_blank">AWS 공식 문서: VPC 엔드포인트 서비스 생성</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS PrivateLink 엔드포인트 서비스는 ALB를 직접 지원하지 않습니다. NLB만 엔드포인트 서비스의 로드 밸런서로 사용할 수 있습니다.</p>
<p><span class="mark-no">❌ C, D</span> — 인터넷 게이트웨이/NAT 게이트웨이는 인터넷을 통한 트래픽을 처리합니다. 연결이 인터넷을 통과할 수 없다는 요구사항에 위배됩니다.</p>`,
    disc: [
      { ans: 'A (82%)', txt: 'PrivateLink = NLB 전용. 인터넷 우회 + 다른 AWS 계정 서비스 제공에 최적.' },
      { ans: 'B (18%)', txt: 'ALB도 PrivateLink와 연동 가능하다는 주장. 그러나 직접 지원은 NLB뿐.' },
    ],
  },
  {
    n: 464,
    en: `<p>A company uses AWS Organizations to manage its AWS accounts. A solutions architect must design a solution in which only administrator roles are allowed to use IAM actions. However, the solutions architect does not have access to all the AWS accounts throughout the company.</p>
<p>Which solution meets these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 AWS Organizations를 사용하여 AWS 계정을 관리합니다. 솔루션 아키텍트는 관리자 역할만 IAM 작업을 사용할 수 있도록 허용하는 솔루션을 설계해야 합니다. 그러나 솔루션 아키텍트는 회사 전체의 모든 AWS 계정에 액세스할 수 없습니다.</p>
<p>최소한의 운영 오버헤드로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an SCP that applies to all the AWS accounts to allow IAM actions only for administrator roles. Apply the SCP to the root OU.', ko: '관리자 역할에 대해서만 IAM 작업을 허용하는 SCP를 생성합니다. 루트 OU에 SCP를 적용합니다.' },
      { k: 'B', en: 'Configure AWS CloudTrail to invoke an AWS Lambda function for each event that is related to IAM actions. Configure the function to deny the action if the user who invoked the action is not an administrator.', ko: 'IAM 작업과 관련된 각 이벤트에 대해 Lambda 함수를 호출하도록 CloudTrail을 구성합니다. 관리자가 아닌 경우 작업을 거부하도록 함수를 구성합니다.' },
      { k: 'C', en: 'Create an SCP that applies to all the AWS accounts to deny IAM actions for all users except for those with administrator roles. Apply the SCP to the root OU.', ko: '관리자 역할이 있는 사용자를 제외한 모든 사용자에 대한 IAM 작업을 거부하는 SCP를 생성합니다. 루트 OU에 SCP를 적용합니다.' },
      { k: 'D', en: 'Set an IAM permissions boundary that allows IAM actions. Attach the permissions boundary to every administrator role across all the AWS accounts.', ko: 'IAM 작업을 허용하는 IAM 권한 경계를 설정합니다. 모든 AWS 계정의 모든 관리자 역할에 권한 경계를 연결합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — 거부 SCP를 루트 OU에 적용</span></p>
<p>SCP와 IAM의 핵심 원칙을 이해해야 합니다:</p>
<ul>
<li><strong>SCP는 허용(Allow)이 아닌 경계(Boundary) 역할</strong>: SCP의 Allow는 실제 권한을 부여하지 않습니다. SCP는 Deny로 최대 권한을 제한합니다.</li>
<li>C는 관리자 역할 외 모든 사용자의 IAM 작업을 거부(Deny)하는 올바른 방식</li>
<li><strong>루트 OU 적용</strong>: 모든 계정에 자동 적용. 개별 계정 접근 불필요</li>
</ul>
<p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html" target="_blank">AWS 공식 문서: SCP</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SCP는 Allow로 실제 IAM 권한을 부여하지 않습니다. SCP의 Allow는 IAM 정책의 추가 허용이 있을 때만 의미가 있습니다.</p>
<p><span class="mark-no">❌ B</span> — CloudTrail + Lambda는 사후 반응적 접근으로 예방적이지 않습니다. IAM 작업이 이미 실행된 후에야 차단합니다.</p>
<p><span class="mark-no">❌ D</span> — 권한 경계는 최대 권한을 설정하는 도구로, 실제 권한을 부여하지 않습니다. 모든 계정의 모든 역할에 연결하는 것도 운영 오버헤드가 큽니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'SCP Deny는 예방적. 루트 OU에 적용 시 전체 계정에 자동 적용. 개별 계정 접근 불필요.' },
    ],
  },
  {
    n: 465,
    en: `<p>A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company hosts some applications in a VPC in the company's shared services account.</p>
<p>The company has attached a transit gateway to the VPC in the shared services account.</p>
<p>The company is developing a new capability and has created a development environment that requires access to the applications that are in the shared services account. The company intends to delete and recreate resources frequently in the development account. The company also wants to give a development team the ability to recreate the team's connection to the shared services account as required.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS Organizations를 사용하여 여러 AWS 계정을 관리합니다. 공유 서비스 계정의 VPC에 일부 애플리케이션을 호스팅하며, 해당 VPC에 Transit Gateway가 연결되어 있습니다.</p>
<p>회사는 새 기능을 개발 중이며 공유 서비스 계정의 애플리케이션에 액세스해야 하는 개발 환경을 만들었습니다. 개발 계정의 리소스를 자주 삭제하고 다시 생성할 예정이며, 개발 팀이 필요에 따라 공유 서비스 계정에 대한 연결을 다시 생성할 수 있길 원합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a transit gateway in the development account. Create a transit gateway peering request to the shared services account. Configure the shared services transit gateway to automatically accept peering connections.', ko: '개발 계정에 Transit Gateway를 생성합니다. 공유 서비스 계정에 대한 Transit Gateway 피어링 요청을 생성합니다. 공유 서비스 Transit Gateway가 피어링 연결을 자동으로 수락하도록 구성합니다.' },
      { k: 'B', en: 'Turn on automatic acceptance for the transit gateway in the shared services account. Use AWS RAM to share the transit gateway resource in the shared services account with the development account. Accept the resource in the development account. Create a transit gateway attachment in the development account.', ko: '공유 서비스 계정의 Transit Gateway에 대해 자동 수락을 켭니다. AWS RAM을 사용하여 Transit Gateway 리소스를 개발 계정과 공유합니다. 개발 계정에서 리소스를 수락하고 Transit Gateway 연결을 생성합니다.' },
      { k: 'C', en: 'Turn on automatic acceptance for the transit gateway in the shared services account. Create a VPC endpoint. Use the endpoint policy to grant permissions on the VPC endpoint for the development account. Configure the endpoint service to automatically accept connection requests.', ko: '공유 서비스 계정의 Transit Gateway에 대해 자동 수락을 켭니다. VPC 엔드포인트를 생성합니다. 엔드포인트 정책으로 개발 계정에 권한을 부여하고 연결 요청을 자동 수락하도록 구성합니다.' },
      { k: 'D', en: 'Create an Amazon EventBridge rule to invoke an AWS Lambda function that accepts the transit gateway attachment when the development account makes a request. Use AWS Network Manager to share the transit gateway with the development account.', ko: '개발 계정이 연결 요청을 할 때 Lambda 함수를 호출하는 EventBridge 규칙을 생성합니다. AWS Network Manager를 사용하여 공유 서비스 계정의 Transit Gateway를 개발 계정과 공유합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — TGW 자동 수락 + AWS RAM 공유 + 개발 계정에서 TGW 연결 생성</span></p>
<p>요구사항: 개발 팀이 필요에 따라 연결을 직접 재생성 가능.</p>
<ul>
<li><strong>AWS RAM으로 TGW 공유</strong>: 공유 서비스 계정의 TGW를 개발 계정에서 사용 가능하게 함</li>
<li><strong>자동 수락 설정</strong>: 개발 팀이 연결 요청 시 공유 서비스 팀의 수동 승인 없이 즉시 연결</li>
<li><strong>개발 계정에서 TGW 연결 생성</strong>: 개발 팀이 자율적으로 연결 생성/삭제 가능</li>
</ul>
<p><a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html" target="_blank">AWS 공식 문서: Transit Gateway 자동 수락</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — TGW 피어링은 계정 간이 아니라 리전 간 연결에 사용합니다. 동일 리전의 계정 간 연결에는 RAM 공유가 올바른 방법입니다.</p>
<p><span class="mark-no">❌ C</span> — VPC 엔드포인트 서비스는 NLB가 필요합니다. 또한 TGW와 VPC 엔드포인트를 함께 사용하는 것은 잘못된 조합입니다.</p>
<p><span class="mark-no">❌ D</span> — EventBridge + Lambda 조합은 과도하게 복잡합니다. AWS Network Manager는 TGW 공유 도구가 아닙니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'RAM으로 TGW 공유 + 자동 수락으로 개발팀 자율 연결 재생성 가능.' },
    ],
  },
  {
    n: 466,
    en: `<p>A company wants to migrate virtual Microsoft workloads from an on-premises data center to AWS. The company has successfully tested a few sample workloads on AWS. The company also has created an AWS Site-to-Site VPN connection to a VPC. A solutions architect needs to generate a total cost of ownership (TCO) report for the migration of all the workloads from the data center.</p>
<p>Simple Network Management Protocol (SNMP) has been enabled on each VM in the data center. The company cannot add more VMs in the data center and cannot install additional software on the VMs. The discovery data must be automatically imported into AWS Migration Hub.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 온프레미스 데이터 센터의 가상 Microsoft 워크로드를 AWS로 마이그레이션하려고 합니다. AWS Site-to-Site VPN 연결이 생성되어 있으며, 모든 워크로드 마이그레이션의 총 소유 비용(TCO) 보고서를 생성해야 합니다.</p>
<p>각 VM에서 SNMP가 활성화되어 있으며, 추가 VM을 배포하거나 소프트웨어를 설치할 수 없습니다. 검색 데이터는 자동으로 AWS Migration Hub로 가져와야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Use the AWS Application Migration Service agentless service and the AWS Migration Hub Strategy Recommendations to generate the TCO report.', ko: 'AWS Application Migration Service 에이전트 없는 서비스와 AWS Migration Hub Strategy Recommendations를 사용하여 TCO 보고서를 생성합니다.' },
      { k: 'B', en: 'Launch a Windows Amazon EC2 instance. Install the Migration Evaluator agentless collector on the EC2 instance. Configure Migration Evaluator to generate the TCO report.', ko: 'Windows Amazon EC2 인스턴스를 시작합니다. EC2 인스턴스에 Migration Evaluator 에이전트 없는 수집기를 설치합니다. TCO 보고서를 생성하도록 Migration Evaluator를 구성합니다.' },
      { k: 'C', en: 'Launch a Windows Amazon EC2 instance. Install the Migration Evaluator agentless collector on the EC2 instance. Configure Migration Hub to generate the TCO report.', ko: 'Windows Amazon EC2 인스턴스를 시작합니다. EC2 인스턴스에 Migration Evaluator 에이전트 없는 수집기를 설치합니다. TCO 보고서를 생성하도록 Migration Hub를 구성합니다.' },
      { k: 'D', en: 'Use the AWS Migration Readiness Assessment tool inside the VPC. Configure Migration Evaluator to generate the TCO report.', ko: 'VPC 내부에서 AWS Migration Readiness Assessment 도구를 사용합니다. TCO 보고서를 생성하도록 Migration Evaluator를 구성합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — EC2에 Migration Evaluator 에이전트 없는 수집기 설치 + Migration Evaluator TCO 보고서</span></p>
<p>세 가지 요구사항 충족:</p>
<ul>
<li><strong>SNMP 기반 데이터 수집</strong>: Migration Evaluator 에이전트 없는 수집기는 SNMP를 사용하여 VM에 소프트웨어 설치 없이 데이터를 수집</li>
<li><strong>TCO 보고서</strong>: Migration Evaluator의 핵심 기능. 마이그레이션 전후 비용 비교 제공</li>
<li><strong>Migration Hub 자동 가져오기</strong>: Migration Evaluator 수집 데이터가 Migration Hub에 자동 통합</li>
<li>EC2 인스턴스에 수집기를 설치하므로 VM에 추가 소프트웨어 설치 불필요</li>
</ul>
<p><a href="https://d1.awsstatic.com/migration-evaluator-resources/agentless_collector_overview.pdf" target="_blank">AWS: Migration Evaluator 에이전트 없는 수집기 개요</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Application Migration Service는 마이그레이션 실행 도구이며 TCO 보고서를 생성하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — TCO 보고서는 Migration Hub가 아닌 Migration Evaluator가 생성합니다. Migration Hub는 마이그레이션 진행 상황 추적 도구입니다.</p>
<p><span class="mark-no">❌ D</span> — Migration Readiness Assessment는 마이그레이션 준비 상태를 평가하는 도구로 TCO 보고서를 생성하지 않습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'SNMP 에이전트 없는 수집 + Migration Evaluator TCO 보고서가 요구사항 완전 충족.' },
    ],
  },
  {
    n: 467,
    en: `<p>A company that is developing a mobile game is making game assets available in two AWS Regions. Game assets are served from a set of Amazon EC2 instances behind an Application Load Balancer (ALB) in each Region. The company requires game assets to be fetched from the closest Region. If game assets become unavailable in the closest Region, they should be fetched from the other Region.</p>
<p>What should a solutions architect do to meet these requirements?</p>`,
    ko: `<p>한 모바일 게임 개발 회사가 두 개의 AWS 리전에서 게임 자산을 제공하고 있습니다. 각 리전에서 ALB 뒤의 EC2 인스턴스 세트가 게임 자산을 제공합니다. 가장 가까운 리전에서 게임 자산을 가져와야 하며, 가장 가까운 리전에서 사용할 수 없게 되면 다른 리전에서 가져와야 합니다.</p>
<p>솔루션 아키텍트는 이러한 요구사항을 충족하기 위해 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an Amazon CloudFront distribution. Create an origin group with one origin for each ALB. Set one of the origins as primary.', ko: 'Amazon CloudFront 배포를 생성합니다. 각 ALB에 대해 하나의 원본이 있는 원본 그룹을 만들고 원본 중 하나를 기본으로 설정합니다.' },
      { k: 'B', en: 'Create an Amazon Route 53 health check for each ALB. Create a Route 53 failover routing record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.', ko: '각 ALB에 대한 Route 53 상태 확인을 생성합니다. 두 ALB를 가리키는 Route 53 장애 조치 라우팅 레코드를 생성하고 대상 상태 평가를 예로 설정합니다.' },
      { k: 'C', en: 'Create two Amazon CloudFront distributions, each with one ALB as the origin. Create an Amazon Route 53 failover routing record pointing to the two CloudFront distributions. Set the Evaluate Target Health value to Yes.', ko: '각각 하나의 ALB를 오리진으로 사용하는 두 개의 CloudFront 배포를 생성합니다. 두 CloudFront 배포를 가리키는 Route 53 장애 조치 라우팅 레코드를 생성합니다.' },
      { k: 'D', en: 'Create an Amazon Route 53 health check for each ALB. Create a Route 53 latency alias record pointing to the two ALBs. Set the Evaluate Target Health value to Yes.', ko: '각 ALB에 대한 Route 53 상태 확인을 생성합니다. 두 ALB를 가리키는 Route 53 지연 시간 별칭 레코드를 생성하고 대상 상태 평가를 예로 설정합니다.' },
    ],
    answer: ['D'],
    vote: '71% D / 24% A',
    explain: `<p><span class="mark-ok">✅ D — Route 53 지연 시간 별칭 레코드 + 대상 상태 평가</span></p>
<p>두 가지 요구사항: ① 가장 가까운 리전에서 제공, ② 장애 시 다른 리전으로 자동 전환.</p>
<ul>
<li><strong>Route 53 지연 시간 기반 라우팅</strong>: 사용자와의 지연 시간이 가장 낮은 리전으로 라우팅 → "가장 가까운" 리전 달성</li>
<li><strong>대상 상태 평가(Evaluate Target Health)</strong>: ALB 비정상 시 자동으로 다른 리전으로 장애 조치</li>
</ul>
<p><strong>A가 아닌 이유:</strong> CloudFront 원본 그룹에서 기본 원본이 설정되면 항상 기본 원본에서 가져옵니다. 지연 시간(거리) 기반으로 리전을 자동 선택하지 않습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFront 원본 그룹은 기본 → 보조 장애 조치 방식. 항상 기본 오리진에서 가져오므로 "가장 가까운 리전" 요구사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — Route 53 장애 조치 라우팅은 기본/보조 구조로 항상 기본 리전에서 서비스합니다. 지연 시간 기반 선택이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 두 CloudFront 배포 + 장애 조치는 A와 같은 문제. 항상 기본 리전만 사용합니다.</p>`,
    disc: [
      { ans: 'D (71%)', txt: 'Route 53 지연 시간 기반 라우팅 = 가장 가까운 리전 선택. Evaluate Target Health = 장애 시 자동 전환.' },
      { ans: 'A (24%)', txt: 'CloudFront가 지리적 근접성을 활용한다고 주장. 그러나 원본 그룹은 항상 기본 원본 우선.' },
    ],
  },
  {
    n: 468,
    en: `<p>A company deploys workloads in multiple AWS accounts. Each account has a VPC with VPC flow logs published in text log format to a centralized Amazon S3 bucket. Each log file is compressed with gzip compression. The company must retain the log files indefinitely.</p>
<p>A security engineer occasionally analyzes the logs by using Amazon Athena to query the VPC flow logs. The query performance is degrading over time as the number of ingested logs is growing. A solutions architect must improve the performance of the log analysis and reduce the storage space that the VPC flow logs use.</p>
<p>Which solution will meet these requirements with the LARGEST performance improvement?</p>`,
    ko: `<p>한 회사가 여러 AWS 계정에 워크로드를 배포합니다. 각 계정에는 텍스트 로그 형식으로 중앙 집중식 S3 버킷에 게시된 VPC 흐름 로그가 있는 VPC가 있습니다. 각 로그 파일은 gzip으로 압축됩니다. 회사는 로그 파일을 무기한 보관해야 합니다.</p>
<p>보안 엔지니어가 Athena를 사용하여 VPC 흐름 로그를 쿼리하는데, 로그 수가 증가함에 따라 쿼리 성능이 저하됩니다. 로그 분석 성능을 향상하고 스토리지 공간을 줄여야 합니다.</p>
<p>가장 큰 성능 향상으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an AWS Lambda function to decompress the gzip files and to compress the files with bzip2 compression. Subscribe the Lambda function to an s3:ObjectCreated:Put S3 event notification for the S3 bucket.', ko: 'Lambda 함수를 생성하여 gzip 파일의 압축을 풀고 bzip2 압축으로 다시 압축합니다. S3 버킷의 ObjectCreated:Put 이벤트 알림에 Lambda 함수를 구독합니다.' },
      { k: 'B', en: 'Enable S3 Transfer Acceleration for the S3 bucket. Create an S3 Lifecycle configuration to move files to the S3 Intelligent-Tiering storage class as soon as the files are uploaded.', ko: 'S3 버킷에 대해 S3 Transfer Acceleration을 활성화합니다. 파일이 업로드되는 즉시 S3 Intelligent-Tiering 스토리지 클래스로 이동하는 S3 수명 주기 구성을 만듭니다.' },
      { k: 'C', en: 'Update the VPC flow log configuration to store the files in Apache Parquet format. Specify hourly partitions for the log files.', ko: '파일을 Apache Parquet 형식으로 저장하도록 VPC 흐름 로그 구성을 업데이트합니다. 로그 파일의 시간별 파티션을 지정합니다.' },
      { k: 'D', en: 'Create a new Athena workgroup without data usage control limits. Use Athena engine version 2.', ko: '데이터 사용량 제어 제한 없이 새로운 Athena 작업 그룹을 생성합니다. Athena 엔진 버전 2를 사용합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — VPC 흐름 로그를 Apache Parquet 형식 + 시간별 파티션</span></p>
<p>Athena 쿼리 성능 최적화의 두 가지 황금 원칙:</p>
<ul>
<li><strong>Apache Parquet 형식</strong>: 열 기반(Columnar) 스토리지 형식. Athena가 쿼리에 필요한 열만 선택적으로 읽어 I/O 대폭 감소. 내장 압축으로 스토리지 공간도 절감</li>
<li><strong>시간별 파티션</strong>: Athena가 특정 시간대만 스캔하여 불필요한 데이터 스캔 방지</li>
<li>VPC 흐름 로그는 기본적으로 Parquet 형식 선택 가능</li>
</ul>
<p><a href="https://aws.amazon.com/about-aws/whats-new/2021/10/amazon-vpc-flow-logs-parquet-hive-prefixes-partitioned-files/" target="_blank">AWS 발표: VPC 흐름 로그 Parquet 지원</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — bzip2 압축은 스토리지를 줄이지만 열 형식이 아니라 Athena 쿼리 성능 향상은 미미합니다.</p>
<p><span class="mark-no">❌ B</span> — Transfer Acceleration은 업로드 속도용이고, Intelligent-Tiering은 스토리지 비용 최적화용입니다. 쿼리 성능과 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — 작업 그룹과 엔진 버전 변경은 약간의 성능 개선이 있지만 Parquet + 파티션의 근본적인 개선에 비할 수 없습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'Parquet(열 기반 형식) + 시간별 파티션으로 Athena 스캔량 대폭 감소. 성능 + 스토리지 동시 개선.' },
    ],
  },
  {
    n: 469,
    en: `<p>A company wants to establish a dedicated connection between its on-premises infrastructure and AWS. The company is setting up a 1 Gbps AWS Direct Connect connection to its account VPC. The architecture includes a transit gateway and a Direct Connect gateway to connect multiple VPCs and the on-premises infrastructure.</p>
<p>The company must connect to VPC resources over a transit VIF by using the Direct Connect connection.</p>
<p>Which combination of steps will meet these requirements? (Choose two.)</p>`,
    ko: `<p>한 회사가 온프레미스 인프라와 AWS 간에 전용 연결을 설정하려고 합니다. 1Gbps AWS Direct Connect 연결을 설정 중이며 여러 VPC와 온프레미스 인프라를 연결하기 위한 Transit Gateway와 Direct Connect 게이트웨이가 포함됩니다.</p>
<p>회사는 Direct Connect 연결을 사용하여 Transit VIF를 통해 VPC 리소스에 연결해야 합니다.</p>
<p>이러한 요구사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Update the 1 Gbps Direct Connect connection to 10 Gbps.', ko: '1Gbps Direct Connect 연결을 10Gbps로 업데이트합니다.' },
      { k: 'B', en: 'Advertise the on-premises network prefixes over the transit VIF.', ko: 'Transit VIF를 통해 온프레미스 네트워크 접두사를 광고합니다.' },
      { k: 'C', en: 'Advertise the VPC prefixes from the Direct Connect gateway to the on-premises network over the transit VIF.', ko: 'Transit VIF를 통해 Direct Connect 게이트웨이의 VPC 접두사를 온프레미스 네트워크에 광고합니다.' },
      { k: 'D', en: 'Update the Direct Connect connection\'s MACsec encryption mode attribute to must_encrypt.', ko: 'Direct Connect 연결의 MACsec 암호화 모드 속성을 must_encrypt로 업데이트합니다.' },
      { k: 'E', en: 'Associate a MACsec Connection Key Name/Connectivity Association Key (CKN/CAK) pair with the Direct Connect connection.', ko: 'MACsec CKN/CAK 쌍을 Direct Connect 연결과 연결합니다.' },
    ],
    answer: ['B', 'C'],
    vote: '100% BC',
    explain: `<p><span class="mark-ok">✅ B — 온프레미스 네트워크 접두사를 Transit VIF로 광고</span></p>
<p>온프레미스에서 AWS로의 라우팅: BGP를 통해 온프레미스 네트워크 접두사를 Transit VIF로 광고해야 AWS가 온프레미스 네트워크로 트래픽을 보낼 수 있습니다.</p>
<p><span class="mark-ok">✅ C — DX 게이트웨이의 VPC 접두사를 온프레미스로 광고</span></p>
<p>AWS에서 온프레미스로의 라우팅: DX 게이트웨이가 연결된 VPC들의 CIDR을 온프레미스로 광고하여 온프레미스에서 AWS VPC 리소스에 접근 가능합니다.</p>
<p><a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-transit-gateways.html" target="_blank">AWS 공식 문서: DX + Transit Gateway</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 연결 속도 업그레이드는 필요하지 않습니다. Transit VIF는 1Gbps에서도 작동합니다.</p>
<p><span class="mark-no">❌ D, E</span> — MACsec은 10Gbps 및 100Gbps Direct Connect 전용입니다. 1Gbps 연결에서는 지원되지 않으며 라우팅 요구사항과 무관합니다.</p>`,
    disc: [
      { ans: 'BC (100%)', txt: '양방향 BGP 라우팅이 필요. B: 온프레미스→AWS, C: AWS→온프레미스 접두사 광고.' },
    ],
  },
  {
    n: 470,
    en: `<p>A company wants to use Amazon WorkSpaces in combination with thin client devices to replace aging desktops. Employees use the desktops to access applications that work with clinical trial data. Corporate security policy states that access to the applications must be restricted to only company branch office locations. The company is considering adding an additional branch office in the next 6 months.</p>
<p>Which solution meets these requirements with the MOST operational efficiency?</p>`,
    ko: `<p>한 회사가 Amazon WorkSpaces와 씬 클라이언트 디바이스를 사용하여 노후된 데스크톱을 교체하려고 합니다. 직원들은 임상 시험 데이터를 다루는 애플리케이션에 접근합니다. 보안 정책에 따라 애플리케이션 접근은 회사 지점으로만 제한되어야 하며, 회사는 향후 6개월 내에 지점을 추가로 추가할 예정입니다.</p>
<p>가장 높은 운영 효율성으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an IP access control group rule with the list of public addresses from the branch offices. Associate the IP access control group with the WorkSpaces directory.', ko: '지점의 공용 주소 목록을 사용하여 IP 액세스 제어 그룹 규칙을 만듭니다. IP 액세스 제어 그룹을 WorkSpaces 디렉터리와 연결합니다.' },
      { k: 'B', en: 'Use AWS Firewall Manager to create a web ACL rule with an IPSet with the list of public addresses from the branch office locations. Associate the web ACL with the WorkSpaces directory.', ko: 'AWS Firewall Manager를 사용하여 지점 위치의 공용 주소 목록이 포함된 IPSet로 웹 ACL 규칙을 생성합니다. 웹 ACL을 WorkSpaces 디렉터리와 연결합니다.' },
      { k: 'C', en: 'Use AWS Certificate Manager (ACM) to issue trusted device certificates to the machines deployed in the branch office locations. Enable restricted access on the WorkSpaces directory.', ko: 'ACM을 사용하여 지점 위치에 배포된 시스템에 신뢰할 수 있는 디바이스 인증서를 발급합니다. WorkSpaces 디렉터리에 대해 제한된 접근을 활성화합니다.' },
      { k: 'D', en: 'Create a custom WorkSpace image with Windows Firewall configured to restrict access to the public addresses of the branch offices. Use the image to deploy the WorkSpaces.', ko: '지점의 공용 주소에 대한 접근을 제한하도록 Windows 방화벽이 구성된 사용자 지정 WorkSpace 이미지를 생성합니다. 이미지를 사용하여 WorkSpaces를 배포합니다.' },
    ],
    answer: ['A'],
    vote: '75% A / 25% B',
    explain: `<p><span class="mark-ok">✅ A — IP 액세스 제어 그룹</span></p>
<p>Amazon WorkSpaces의 기본 제공 IP 접근 제어 기능을 활용하는 가장 간단한 방법입니다:</p>
<ul>
<li><strong>IP 액세스 제어 그룹</strong>: WorkSpaces 전용 기능으로 허용된 IP에서만 WorkSpaces 접근 가능</li>
<li>WorkSpaces 디렉터리와 직접 연결하여 구성 간단</li>
<li>새 지점 추가 시 IP만 추가하면 됨 → 운영 효율성 높음</li>
</ul>
<p><a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-ip-access-control-groups.html" target="_blank">AWS 공식 문서: WorkSpaces IP 액세스 제어 그룹</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS Firewall Manager는 여러 계정/리소스에 걸친 방화벽 규칙 관리용입니다. WorkSpaces IP 접근 제어에는 과도하게 복잡합니다.</p>
<p><span class="mark-no">❌ C</span> — 디바이스 인증서는 IP 위치 기반이 아닌 디바이스 기반 인증입니다. 지점 위치 제한 요구사항과 다릅니다.</p>
<p><span class="mark-no">❌ D</span> — 사용자 지정 이미지의 Windows 방화벽은 클라이언트 측에서 관리되어 중앙 집중식 제어가 어렵고 우회 가능성이 있습니다.</p>`,
    disc: [
      { ans: 'A (75%)', txt: 'WorkSpaces 전용 IP 접근 제어 그룹이 가장 직접적이고 운영 효율적인 솔루션.' },
      { ans: 'B (25%)', txt: 'Firewall Manager가 중앙 관리에 더 좋다고 주장. 그러나 단일 계정에는 과도함.' },
    ],
  },
];