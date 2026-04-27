window.QS_SET04 = [
  {
    n: 31,
    en: `An enterprise company wants to allow its developers to purchase third-party software through AWS Marketplace. The company uses an AWS Organizations account structure with full features enabled, and has a shared services account in each organizational unit (OU) that will be used by procurement managers. The procurement team's policy indicates that developers should be able to obtain third-party software from an approved list only and use Private Marketplace in AWS Marketplace to achieve this requirement. The procurement team wants administration of Private Marketplace to be restricted to a role named procurement-manager-role, which could be assumed by procurement managers. Other IAM users, groups, roles, and account administrators in the company should be denied Private Marketplace administrative access. What is the MOST efficient way to design an architecture to meet these requirements?`,
    ko: `한 엔터프라이즈 회사는 개발자들이 AWS Marketplace를 통해 타사 소프트웨어를 구매할 수 있도록 허용하려고 합니다. 회사는 전체 기능이 활성화된 AWS Organizations 계정 구조를 사용하며, 조달 관리자가 사용할 각 OU에 공유 서비스 계정이 있습니다. 조달 팀의 정책은 개발자가 승인된 목록에서만 소프트웨어를 구매할 수 있어야 하며, AWS Marketplace의 Private Marketplace를 사용하도록 합니다. 조달 팀은 Private Marketplace 관리를 procurement-manager-role 역할로만 제한하고, 다른 모든 IAM 사용자·그룹·역할·계정 관리자는 관리 액세스가 거부되어야 합니다. 이 요구 사항을 충족하는 가장 효율적인 아키텍처 설계 방법은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the PowerUserAccess managed policy to the role. Apply an inline policy to all IAM users and roles in every AWS account to deny permissions on the AWSPrivateMarketplaceAdminFullAccess managed policy.`, ko:`조직의 모든 AWS 계정에 procurement-manager-role이라는 IAM 역할을 생성합니다. PowerUserAccess 관리형 정책을 역할에 추가합니다. 모든 AWS 계정의 모든 IAM 사용자 및 역할에 인라인 정책을 적용하여 AWSPrivateMarketplaceAdminFullAccess 관리형 정책에 대한 권한을 거부합니다.` },
      { k:'B', en:`Create an IAM role named procurement-manager-role in all AWS accounts in the organization. Add the AdministratorAccess managed policy to the role. Define a permissions boundary with the AWSPrivateMarketplaceAdminFullAccess managed policy and attach it to all the developer roles.`, ko:`조직의 모든 AWS 계정에 procurement-manager-role이라는 IAM 역할을 생성합니다. 역할에 AdministratorAccess 관리형 정책을 추가합니다. AWSPrivateMarketplaceAdminFullAccess 관리형 정책으로 권한 경계를 정의하고 모든 개발자 역할에 연결합니다.` },
      { k:'C', en:`Create an IAM role named procurement-manager-role in all the shared services accounts in the organization. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an organization root-level SCP to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Create another organization root-level SCP to deny permissions to create an IAM role named procurement-manager-role to everyone in the organization.`, ko:`조직의 모든 공유 서비스 계정에 procurement-manager-role이라는 IAM 역할을 생성합니다. 역할에 AWSPrivateMarketplaceAdminFullAccess 관리형 정책을 추가합니다. procurement-manager-role 역할을 제외한 모든 사람에게 Private Marketplace 관리 권한을 거부하는 조직 루트 수준 SCP를 생성합니다. 조직의 모든 사람이 procurement-manager-role이라는 IAM 역할을 생성하지 못하도록 거부하는 또 다른 조직 루트 수준 SCP를 생성합니다.` },
      { k:'D', en:`Create an IAM role named procurement-manager-role in all AWS accounts that will be used by developers. Add the AWSPrivateMarketplaceAdminFullAccess managed policy to the role. Create an SCP in Organizations to deny permissions to administer Private Marketplace to everyone except the role named procurement-manager-role. Apply the SCP to all the shared services accounts in the organization.`, ko:`개발자가 사용하는 모든 AWS 계정에 procurement-manager-role이라는 IAM 역할을 생성합니다. 역할에 AWSPrivateMarketplaceAdminFullAccess 관리형 정책을 추가합니다. procurement-manager-role 역할을 제외한 모든 사람에게 Private Marketplace 관리 권한을 거부하는 SCP를 생성합니다. 조직의 모든 공유 서비스 계정에 SCP를 적용합니다.` },
    ],
    answer: ['C'],
    vote: '77% C',
    explain: `<p><span class="mark-ok">✅ C — 공유 서비스 계정에 역할 생성 + 루트 SCP 이중 보호</span></p>
<p>공유 서비스 계정에만 procurement-manager-role을 생성하고 AWSPrivateMarketplaceAdminFullAccess 정책을 연결합니다. 두 개의 루트 수준 SCP가 핵심입니다: (1) procurement-manager-role을 제외한 모든 주체에 대해 Private Marketplace 관리 작업을 거부하는 SCP, (2) 조직 내 누군가가 해당 역할 이름을 다른 계정에서 재생성하지 못하도록 procurement-manager-role 생성을 거부하는 SCP. 이 조합으로 역할 이름을 이용한 SCP 우회를 방지합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 모든 계정에 역할을 생성하고 모든 사용자에게 인라인 정책으로 거부하는 방식은 계정마다 개별 적용이 필요해 운영 오버헤드가 매우 높습니다. 중앙 SCP 방식보다 비효율적입니다.</p>
<p><span class="mark-no">❌ B</span> — 개발자 역할에 권한 경계를 설정하는 방식은 계정 관리자(AdminAccess)에게는 적용되지 않습니다. 권한 경계는 IAM 엔티티가 가질 수 있는 최대 권한을 제한하지만, 계정 루트나 관리자 권한은 제한하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — 역할을 개발자 계정에 생성하는 것은 잘못된 위치입니다. SCP를 공유 서비스 계정에만 적용하면 개발자 계정의 권한 관리가 안 됩니다. 또한 두 번째 보호(역할 재생성 방지) SCP가 없어 우회 가능합니다.</p>`,
    disc: [{ ans:'C', txt:'Two root SCPs provide defense-in-depth: one denies Private Marketplace admin to everyone except the named role, the other prevents re-creation of the role in other accounts to bypass the first SCP. Role exists only in shared services accounts where procurement managers operate.' }]
  },
  {
    n: 32,
    en: `A company is in the process of implementing AWS Organizations to constrain its developers to use only Amazon EC2, Amazon S3, and Amazon DynamoDB. The developers account resides in a dedicated organizational unit (OU). The solutions architect has implemented the following SCP on the developers account: When this policy is deployed, IAM users in the developers account are still able to use AWS services that are not listed in the policy. What should the solutions architect do to eliminate the developers' ability to use services outside the scope of this policy?`,
    ko: `한 회사가 개발자들이 Amazon EC2, Amazon S3, Amazon DynamoDB만 사용하도록 제한하기 위해 AWS Organizations를 구현 중입니다. 개발자 계정은 전용 OU에 있습니다. 솔루션 설계자는 개발자 계정에 다음 SCP를 구현했습니다: 이 정책이 배포되면 개발자 계정의 IAM 사용자는 여전히 정책에 나열되지 않은 AWS 서비스를 사용할 수 있습니다. 솔루션 설계자는 이 정책 범위 밖의 서비스를 사용하는 개발자의 능력을 제거하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an explicit deny statement for each AWS service that should be constrained.`, ko:`제한해야 하는 각 AWS 서비스에 대한 명시적 거부 문을 생성합니다.` },
      { k:'B', en:`Remove the FullAWSAccess SCP from the developers account's OU.`, ko:`개발자 계정의 OU에서 FullAWSAccess SCP를 제거합니다.` },
      { k:'C', en:`Modify the FullAWSAccess SCP to explicitly deny all services.`, ko:`FullAWSAccess SCP를 수정하여 모든 서비스를 명시적으로 거부합니다.` },
      { k:'D', en:`Add an explicit deny statement using a wildcard to the end of the SCP.`, ko:`SCP 끝에 와일드카드를 사용하는 명시적 거부 문을 추가합니다.` },
    ],
    answer: ['B'],
    vote: '91% B',
    explain: `<p><span class="mark-ok">✅ B — FullAWSAccess SCP 제거</span></p>
<p>AWS Organizations에서 모든 새 계정과 OU에는 기본적으로 <code>FullAWSAccess</code> SCP가 연결되어 있습니다. 이 SCP는 모든 서비스에 대한 허용(Allow)을 부여합니다. SCP는 Allow 정책이 있어야만 액세스가 허용되는 가드레일이므로, FullAWSAccess SCP가 있으면 추가로 작성한 Allow SCP와 관계없이 다른 모든 서비스에 대한 액세스도 허용됩니다. FullAWSAccess SCP를 제거하면 명시적으로 허용된 서비스(EC2, S3, DynamoDB)만 사용 가능하게 됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 제한할 모든 AWS 서비스에 명시적 거부 문을 작성하는 것은 수백 개의 AWS 서비스가 있어 비실용적이며, 새로운 서비스가 추가될 때마다 업데이트가 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — FullAWSAccess SCP는 AWS에서 관리하는 기본 정책으로 수정할 수 없습니다. 이 SCP는 읽기 전용입니다.</p>
<p><span class="mark-no">❌ D</span> — 현재 SCP에 와일드카드 거부를 추가하면 허용된 EC2, S3, DynamoDB까지 거부될 수 있습니다. SCP에서 Deny는 Allow보다 우선하므로 올바른 Allow 문의 효과를 무력화합니다.</p>`,
    disc: [{ ans:'B', txt:'AWS Organizations attaches FullAWSAccess SCP by default, which allows all services regardless of custom SCPs. Removing it means only explicitly-allowed services (EC2/S3/DynamoDB in the custom SCP) are accessible — the simplest one-step fix.' }]
  },
  {
    n: 33,
    en: `A company is hosting a monolithic REST-based API for a mobile app on five Amazon EC2 instances in public subnets of a VPC. Mobile clients connect to the API by using a domain name that is hosted on Amazon Route 53. The company has created a Route 53 multivalue answer routing policy with the IP addresses of all the EC2 instances. Recently, the app has been overwhelmed by large and sudden increases to traffic. The app has not been able to keep up with the traffic. A solutions architect needs to implement a solution so that the app can handle the new and varying load. Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사가 VPC의 퍼블릭 서브넷에 있는 다섯 개의 Amazon EC2 인스턴스에서 모바일 앱을 위한 단일 REST 기반 API를 호스팅하고 있습니다. 모바일 클라이언트는 Amazon Route 53에서 호스팅되는 도메인 이름을 사용하여 API에 연결합니다. 회사는 모든 EC2 인스턴스의 IP 주소를 사용하여 Route 53 다중값 응답 라우팅 정책을 만들었습니다. 최근 앱이 갑작스럽고 큰 트래픽 급증으로 압도되었습니다. 앱이 트래픽을 따라가지 못하고 있습니다. 솔루션 설계자는 앱이 새롭고 변화하는 부하를 처리할 수 있도록 솔루션을 구현해야 합니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Separate the API into individual AWS Lambda functions. Configure an Amazon API Gateway REST API with Lambda integration for the backend. Update the Route 53 record to point to the API Gateway API.`, ko:`API를 개별 AWS Lambda 함수로 분리합니다. Lambda 통합을 사용하여 백엔드용 Amazon API Gateway REST API를 구성합니다. Route 53 레코드를 API Gateway API로 가리키도록 업데이트합니다.` },
      { k:'B', en:`Containerize the API logic. Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Run the containers in the cluster by using Amazon EC2. Create a Kubernetes ingress. Update the Route 53 record to point to the Kubernetes ingress.`, ko:`API 로직을 컨테이너화합니다. Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 생성합니다. Amazon EC2를 사용하여 클러스터에서 컨테이너를 실행합니다. Kubernetes 인그레스를 생성합니다. Route 53 레코드를 Kubernetes 인그레스로 가리키도록 업데이트합니다.` },
      { k:'C', en:`Create an Auto Scaling group. Place all the EC2 instances in the Auto Scaling group. Configure the Auto Scaling group to perform scaling actions that are based on CPU utilization. Create an AWS Lambda function that reacts to Auto Scaling group changes and updates the Route 53 record.`, ko:`Auto Scaling 그룹을 생성합니다. 모든 EC2 인스턴스를 Auto Scaling 그룹에 배치합니다. CPU 사용률을 기반으로 스케일링 작업을 수행하도록 Auto Scaling 그룹을 구성합니다. Auto Scaling 그룹 변경에 반응하고 Route 53 레코드를 업데이트하는 AWS Lambda 함수를 생성합니다.` },
      { k:'D', en:`Create an Application Load Balancer (ALB) in front of the API. Move the EC2 instances to private subnets in the VPC. Add the EC2 instances as targets for the ALB. Update the Route 53 record to point to the ALB.`, ko:`API 앞에 Application Load Balancer(ALB)를 생성합니다. EC2 인스턴스를 VPC의 프라이빗 서브넷으로 이동합니다. EC2 인스턴스를 ALB의 대상으로 추가합니다. Route 53 레코드를 ALB로 가리키도록 업데이트합니다.` },
    ],
    answer: ['A'],
    vote: '73% A',
    explain: `<p><span class="mark-ok">✅ A — Lambda + API Gateway REST API (서버리스 전환)</span></p>
<p>모놀리식 REST API를 개별 Lambda 함수로 분리하고 API Gateway를 프론트엔드로 사용하면 트래픽 급증을 자동으로 처리합니다. API Gateway와 Lambda는 모두 자동 확장되며 운영자가 서버를 관리할 필요가 없습니다. EC2 기반 솔루션과 달리 용량 계획 없이 수백만 건의 요청도 처리할 수 있어 운영 오버헤드가 가장 낮습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — EKS는 Kubernetes 클러스터 관리, 노드 그룹, ingress 컨트롤러 등 복잡한 운영 요소가 필요합니다. Lambda + API Gateway 대비 운영 오버헤드가 훨씬 높습니다.</p>
<p><span class="mark-no">❌ C</span> — EC2 Auto Scaling + Lambda로 Route 53을 업데이트하는 방식은 DNS TTL로 인한 지연이 발생하며, 스케일 아웃 후 실제 트래픽 분산까지 시간이 걸립니다. 또한 Route 53 동기화를 위한 별도 Lambda 관리가 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — ALB + EC2 조합은 트래픽 급증을 처리하려면 별도의 Auto Scaling 그룹 설정이 필요합니다. EC2 인스턴스 자체는 자동 확장되지 않으므로 추가 구성이 필요합니다.</p>`,
    disc: [{ ans:'A', txt:'API Gateway + Lambda is fully serverless and scales automatically to any request volume without capacity planning. Least operational overhead vs EKS (cluster ops), EC2 ASG (instance management), or ALB+EC2 (still need ASG for elastic scaling).' }]
  },
  {
    n: 34,
    en: `A company has created an OU in AWS Organizations for each of its engineering teams. Each OU owns multiple AWS accounts. The organization has hundreds of AWS accounts. A solutions architect must design a solution so that each OU can view a breakdown of usage costs across its AWS accounts. Which solution meets these requirements?`,
    ko: `한 회사가 각 엔지니어링 팀을 위해 AWS Organizations에 OU를 만들었습니다. 각 OU는 여러 AWS 계정을 소유합니다. 조직에는 수백 개의 AWS 계정이 있습니다. 솔루션 설계자는 각 OU가 AWS 계정 전반의 사용 비용 내역을 볼 수 있도록 솔루션을 설계해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an AWS Cost and Usage Report (CUR) for each OU by using AWS Resource Access Manager. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.`, ko:`AWS Resource Access Manager를 사용하여 각 OU에 대한 AWS Cost and Usage Report(CUR)를 생성합니다. 각 팀이 Amazon QuickSight 대시보드를 통해 CUR을 시각화할 수 있도록 합니다.` },
      { k:'B', en:`Create an AWS Cost and Usage Report (CUR) from the AWS Organizations management account. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.`, ko:`AWS Organizations 관리 계정에서 AWS Cost and Usage Report(CUR)를 생성합니다. 각 팀이 Amazon QuickSight 대시보드를 통해 CUR을 시각화할 수 있도록 합니다.` },
      { k:'C', en:`Create an AWS Cost and Usage Report (CUR) in each AWS Organizations member account. Allow each team to visualize the CUR through an Amazon QuickSight dashboard.`, ko:`각 AWS Organizations 멤버 계정에서 AWS Cost and Usage Report(CUR)를 생성합니다. 각 팀이 Amazon QuickSight 대시보드를 통해 CUR을 시각화할 수 있도록 합니다.` },
      { k:'D', en:`Create an AWS Cost and Usage Report (CUR) by using AWS Systems Manager. Allow each team to visualize the CUR through Systems Manager OpsCenter dashboards.`, ko:`AWS Systems Manager를 사용하여 AWS Cost and Usage Report(CUR)를 생성합니다. 각 팀이 Systems Manager OpsCenter 대시보드를 통해 CUR을 시각화할 수 있도록 합니다.` },
    ],
    answer: ['B'],
    vote: '89% B',
    explain: `<p><span class="mark-ok">✅ B — 관리 계정에서 CUR 생성 + QuickSight 시각화</span></p>
<p>AWS Organizations 관리 계정에서 생성된 CUR은 조직 내 모든 멤버 계정의 비용 데이터를 단일 보고서에 포함합니다. CUR 데이터를 S3에 저장하고 AWS Glue를 통해 Amazon Athena로 쿼리하거나 QuickSight로 시각화하면 각 OU 팀이 자신의 AWS 계정 비용 내역을 확인할 수 있습니다. 관리 계정의 단일 CUR에서 OU 태그 또는 계정 ID 필터를 사용하면 각 팀별 뷰를 제공할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Resource Access Manager(RAM)는 리소스 공유 서비스이며 CUR 생성 기능이 없습니다. RAM으로 OU별 CUR을 생성하는 것은 불가능합니다.</p>
<p><span class="mark-no">❌ C</span> — 각 멤버 계정에서 개별 CUR을 생성하면 수백 개의 보고서를 개별적으로 관리해야 합니다. OU 전체 비용 집계를 위한 중앙화된 뷰를 제공하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — Systems Manager는 운영 관리 도구이며 CUR 생성이나 청구 보고서 기능이 없습니다. OpsCenter는 운영 이슈 추적을 위한 대시보드입니다.</p>`,
    disc: [{ ans:'B', txt:'Management account CUR includes all org member account costs in one report. QuickSight with Athena queries can filter by OU-linked account IDs, giving each team a breakdown of their spending across accounts without per-account CUR management.' }]
  },
  {
    n: 35,
    en: `A company is storing data on premises on a Windows file server. The company produces 5 GB of new data daily. The company migrated part of its Windows-based workload to AWS and needs the data to be available on a file system in the cloud. The company already has established an AWS Direct Connect connection between the on-premises network and AWS. Which data migration strategy should the company use?`,
    ko: `한 회사가 Windows 파일 서버의 온프레미스에 데이터를 저장하고 있습니다. 회사는 매일 5GB의 새로운 데이터를 생성합니다. 회사는 Windows 기반 워크로드 일부를 AWS로 마이그레이션했으며 클라우드의 파일 시스템에서 데이터를 사용할 수 있어야 합니다. 회사는 이미 온프레미스 네트워크와 AWS 사이에 AWS Direct Connect 연결을 설정했습니다. 회사가 사용해야 하는 데이터 마이그레이션 전략은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use the file gateway option in AWS Storage Gateway to replace the existing Windows file server, and point the existing file share to the new file gateway.`, ko:`AWS Storage Gateway의 파일 게이트웨이 옵션을 사용하여 기존 Windows 파일 서버를 교체하고, 기존 파일 공유를 새 파일 게이트웨이로 가리킵니다.` },
      { k:'B', en:`Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon FSx.`, ko:`AWS DataSync를 사용하여 온프레미스 Windows 파일 서버와 Amazon FSx 간에 데이터를 복제하는 일별 작업을 예약합니다.` },
      { k:'C', en:`Use AWS Data Pipeline to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).`, ko:`AWS Data Pipeline을 사용하여 온프레미스 Windows 파일 서버와 Amazon EFS(Elastic File System) 간에 데이터를 복제하는 일별 작업을 예약합니다.` },
      { k:'D', en:`Use AWS DataSync to schedule a daily task to replicate data between the on-premises Windows file server and Amazon Elastic File System (Amazon EFS).`, ko:`AWS DataSync를 사용하여 온프레미스 Windows 파일 서버와 Amazon EFS(Elastic File System) 간에 데이터를 복제하는 일별 작업을 예약합니다.` },
    ],
    answer: ['B'],
    vote: '87% B',
    explain: `<p><span class="mark-ok">✅ B — DataSync + Amazon FSx (Windows File Server)</span></p>
<p>Amazon FSx for Windows File Server는 완전 관리형 Windows 네이티브 파일 시스템으로 SMB 프로토콜, NTFS, Active Directory 통합을 지원합니다. Windows 기반 워크로드에 최적화되어 있으며, AWS DataSync는 Direct Connect를 통해 온프레미스 Windows 파일 서버와 FSx 간의 일별 데이터 복제를 자동화할 수 있습니다. 매일 5GB의 증분 데이터를 전송하는 데 적합합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Storage Gateway 파일 게이트웨이는 S3를 백엔드로 사용하는 파일 캐시 솔루션입니다. 기존 파일 서버를 교체하는 방식은 온프레미스에 게이트웨이 어플라이언스를 배포해야 하며, 클라우드 네이티브 Windows 파일 시스템이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon EFS는 Linux 기반 NFS 프로토콜을 사용하며 Windows SMB를 지원하지 않습니다. Windows 기반 워크로드에는 FSx for Windows File Server가 올바른 선택입니다.</p>
<p><span class="mark-no">❌ D</span> — DataSync + EFS 조합은 DataSync 도구는 올바르지만 대상 파일 시스템이 잘못되었습니다. EFS는 Windows 워크로드가 아닌 Linux/POSIX 워크로드용입니다.</p>`,
    disc: [{ ans:'B', txt:'DataSync automates scheduled replication over Direct Connect with bandwidth throttling and data integrity verification. FSx for Windows File Server provides native SMB/NTFS support for Windows workloads migrated to AWS — the correct target for Windows file shares.' }]
  },
  {
    n: 36,
    en: `A company's solutions architect is reviewing a web application that runs on AWS. The application references static assets in an Amazon S3 bucket in the us-east-1 Region. The company needs resiliency across multiple AWS Regions. The company already has created an S3 bucket in a second Region. Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사의 솔루션 설계자가 AWS에서 실행되는 웹 애플리케이션을 검토하고 있습니다. 애플리케이션은 us-east-1 리전의 Amazon S3 버킷에서 정적 자산을 참조합니다. 회사는 여러 AWS 리전에 걸쳐 복원력이 필요합니다. 회사는 이미 두 번째 리전에 S3 버킷을 만들었습니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure the application to write each object to both S3 buckets. Set up an Amazon Route 53 public hosted zone with a record set by using a weighted routing policy for each S3 bucket. Configure the application to reference the objects by using the Route 53 DNS name.`, ko:`각 객체를 두 S3 버킷에 모두 쓰도록 애플리케이션을 구성합니다. 각 S3 버킷에 대해 가중 라우팅 정책을 사용하는 레코드 세트와 함께 Amazon Route 53 퍼블릭 호스팅 영역을 설정합니다. Route 53 DNS 이름을 사용하여 객체를 참조하도록 애플리케이션을 구성합니다.` },
      { k:'B', en:`Create an AWS Lambda function to copy objects from the S3 bucket in us-east-1 to the S3 bucket in the second Region. Invoke the Lambda function each time an object is written to the S3 bucket in us-east-1. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.`, ko:`Lambda 함수를 생성하여 us-east-1의 S3 버킷에서 두 번째 리전의 S3 버킷으로 객체를 복사합니다. us-east-1의 S3 버킷에 객체가 기록될 때마다 Lambda 함수를 호출합니다. 두 S3 버킷을 오리진으로 포함하는 오리진 그룹과 함께 Amazon CloudFront 배포를 설정합니다.` },
      { k:'C', en:`Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. Set up an Amazon CloudFront distribution with an origin group that contains the two S3 buckets as origins.`, ko:`us-east-1의 S3 버킷에서 두 번째 리전의 S3 버킷으로 객체를 복제하도록 복제를 구성합니다. 두 S3 버킷을 오리진으로 포함하는 오리진 그룹과 함께 Amazon CloudFront 배포를 설정합니다.` },
      { k:'D', en:`Configure replication on the S3 bucket in us-east-1 to replicate objects to the S3 bucket in the second Region. If failover is required, update the application code to load S3 objects from the S3 bucket in the second Region.`, ko:`us-east-1의 S3 버킷에서 두 번째 리전의 S3 버킷으로 객체를 복제하도록 복제를 구성합니다. 장애 조치가 필요한 경우 두 번째 리전의 S3 버킷에서 S3 객체를 로드하도록 애플리케이션 코드를 업데이트합니다.` },
    ],
    answer: ['C'],
    vote: '85% C',
    explain: `<p><span class="mark-ok">✅ C — S3 교차 리전 복제 + CloudFront 오리진 그룹</span></p>
<p>S3 교차 리전 복제(CRR)는 us-east-1 버킷의 객체를 두 번째 리전 버킷으로 자동 복제합니다. 별도의 Lambda 함수 없이 S3 기본 기능으로 처리됩니다. CloudFront 오리진 그룹을 사용하면 기본 오리진(us-east-1)이 실패할 경우 자동으로 두 번째 리전 버킷으로 장애 조치됩니다. 이 조합은 코드 변경 없이 자동 페일오버를 제공하는 최소 운영 오버헤드 솔루션입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 애플리케이션 코드에서 두 버킷에 동시 쓰기를 구현하고 Route 53 가중 라우팅을 설정하는 방식은 애플리케이션 코드 변경과 복잡한 DNS 구성이 필요합니다. 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ B</span> — Lambda로 복제하는 방식은 S3 CRR 대비 추가 Lambda 함수 관리가 필요합니다. S3 내장 CRR 기능이 더 적은 운영 오버헤드로 동일한 결과를 제공합니다.</p>
<p><span class="mark-no">❌ D</span> — 수동으로 애플리케이션 코드를 업데이트하여 장애 조치를 처리하는 방식은 자동화가 아닙니다. 장애 감지와 코드 배포에 시간이 걸려 가용성이 저하됩니다.</p>`,
    disc: [{ ans:'C', txt:'S3 CRR handles replication automatically without Lambda. CloudFront origin group provides automatic failover to the secondary S3 bucket when the primary is unavailable — no code changes or manual intervention required.' }]
  },
  {
    n: 37,
    en: `A company is hosting a three-tier web application in an on-premises environment. Due to a recent surge in traffic that resulted in downtime and a significant financial impact, company management has ordered that the application be moved to AWS. The application is written in .NET and has a dependency on a MySQL database. A solutions architect must design a scalable and highly available solution to meet the demand of 200,000 daily users. Which steps should the solutions architect take to design an appropriate solution?`,
    ko: `한 회사가 온프레미스 환경에서 3계층 웹 애플리케이션을 호스팅하고 있습니다. 최근 다운타임과 상당한 재정적 영향을 초래한 트래픽 급증으로 인해 회사 경영진은 애플리케이션을 AWS로 이전하도록 지시했습니다. 애플리케이션은 .NET으로 작성되었으며 MySQL 데이터베이스에 종속성이 있습니다. 솔루션 설계자는 20만 명의 일일 사용자 수요를 충족하기 위해 확장 가능하고 가용성이 높은 솔루션을 설계해야 합니다. 솔루션 설계자는 적절한 솔루션을 설계하기 위해 어떤 단계를 취해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use AWS Elastic Beanstalk to create a new application with a web server environment and an Amazon RDS MySQL Multi-AZ DB instance. The environment should launch a Network Load Balancer (NLB) in front of an Amazon EC2 Auto Scaling group in multiple Availability Zones. Use an Amazon Route 53 alias record to route traffic from the company's domain to the NLB.`, ko:`AWS Elastic Beanstalk를 사용하여 웹 서버 환경과 Amazon RDS MySQL Multi-AZ DB 인스턴스를 사용하는 새 애플리케이션을 만듭니다. 환경은 여러 가용 영역의 Amazon EC2 Auto Scaling 그룹 앞에 Network Load Balancer(NLB)를 시작해야 합니다. Amazon Route 53 별칭 레코드를 사용하여 회사의 도메인에서 NLB로 트래픽을 라우팅합니다.` },
      { k:'B', en:`Use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon EC2 Auto Scaling group spanning three Availability Zones. The stack should launch a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a Retain deletion policy. Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB.`, ko:`AWS CloudFormation을 사용하여 세 가용 영역에 걸친 Amazon EC2 Auto Scaling 그룹 앞에 Application Load Balancer(ALB)를 포함하는 스택을 시작합니다. 스택은 보존 삭제 정책을 사용하여 Amazon Aurora MySQL DB 클러스터의 Multi-AZ 배포를 시작해야 합니다. Amazon Route 53 별칭 레코드를 사용하여 회사의 도메인에서 ALB로 트래픽을 라우팅합니다.` },
      { k:'C', en:`Use AWS Elastic Beanstalk to create an automatically scaling web server environment that spans two separate Regions with an Application Load Balancer (ALB) in each Region. Create a Multi-AZ deployment of an Amazon Aurora MySQL DB cluster with a cross-Region read replica. Use Amazon Route 53 with a geoproximity routing policy to route traffic between the two Regions.`, ko:`AWS Elastic Beanstalk를 사용하여 각 리전에 Application Load Balancer(ALB)가 있는 두 개의 별도 리전에 걸쳐 자동 확장되는 웹 서버 환경을 만듭니다. 교차 리전 읽기 복제본과 함께 Amazon Aurora MySQL DB 클러스터의 Multi-AZ 배포를 생성합니다. Amazon Route 53와 지리적 근접성 라우팅 정책을 사용하여 두 리전 간에 트래픽을 라우팅합니다.` },
      { k:'D', en:`Use AWS CloudFormation to launch a stack containing an Application Load Balancer (ALB) in front of an Amazon ECS cluster of Spot instances spanning three Availability Zones. The stack should launch an Amazon RDS MySQL DB instance with a Snapshot deletion policy. Use an Amazon Route 53 alias record to route traffic from the company's domain to the ALB.`, ko:`AWS CloudFormation을 사용하여 세 가용 영역에 걸친 Spot 인스턴스의 Amazon ECS 클러스터 앞에 Application Load Balancer(ALB)를 포함하는 스택을 시작합니다. 스택은 스냅샷 삭제 정책을 사용하여 Amazon RDS MySQL DB 인스턴스를 시작해야 합니다. Amazon Route 53 별칭 레코드를 사용하여 회사의 도메인에서 ALB로 트래픽을 라우팅합니다.` },
    ],
    answer: ['B'],
    vote: '80% B',
    explain: `<p><span class="mark-ok">✅ B — CloudFormation + ALB + EC2 Auto Scaling (3 AZ) + Aurora MySQL Multi-AZ + Retain 정책</span></p>
<p>ALB는 HTTP/HTTPS 웹 트래픽에 최적화되어 있으며 경로 기반 라우팅을 지원합니다. EC2 Auto Scaling 그룹을 3개 AZ에 분산하면 고가용성과 자동 확장이 보장됩니다. Amazon Aurora MySQL은 RDS MySQL 대비 최대 5배 빠른 성능을 제공하며 Multi-AZ 구성으로 자동 장애 조치를 지원합니다. CloudFormation Retain 삭제 정책은 스택 삭제 시에도 DB 클러스터를 보존하여 데이터 손실을 방지합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Elastic Beanstalk는 .NET을 지원하지만 NLB는 HTTP 레이어 7 기능(경로 기반 라우팅, 헤더 기반 라우팅 등)이 없는 레이어 4 로드 밸런서입니다. 웹 애플리케이션에는 ALB가 더 적합합니다.</p>
<p><span class="mark-no">❌ C</span> — 두 개의 리전에 Elastic Beanstalk 환경을 구성하고 교차 리전 Aurora 복제본을 설정하는 것은 문제에서 요구하는 수준보다 훨씬 복잡합니다. 단순한 트래픽 급증 대응에 과도한 복잡성입니다.</p>
<p><span class="mark-no">❌ D</span> — ECS Spot 인스턴스는 언제든지 중단될 수 있어 고가용성이 보장되지 않습니다. 또한 RDS MySQL의 Snapshot 삭제 정책은 스택 삭제 시 DB가 삭제되고 스냅샷만 남으므로 자동 복구가 되지 않습니다.</p>`,
    disc: [{ ans:'B', txt:'CloudFormation IaC + ALB (HTTP/HTTPS routing) + EC2 ASG across 3 AZs provides elastic scaling and HA. Aurora MySQL gives better performance than RDS MySQL. Retain deletion policy protects the database cluster from accidental deletion via CloudFormation.' }]
  },
  {
    n: 38,
    en: `A company is using AWS Organizations to manage multiple AWS accounts. For security purposes, the company requires the creation of an Amazon Simple Notification Service (Amazon SNS) topic that enables integration with a third-party alerting system in all the Organizations member accounts. A solutions architect used an AWS CloudFormation template to create the SNS topic and stack sets to automate the deployment of CloudFormation stacks. Trusted access has been enabled in Organizations. What should the solutions architect do to deploy the CloudFormation StackSets in all AWS accounts?`,
    ko: `한 회사가 AWS Organizations를 사용하여 여러 AWS 계정을 관리하고 있습니다. 보안을 위해 회사는 모든 Organizations 멤버 계정에서 타사 경보 시스템과의 통합을 가능하게 하는 Amazon SNS 토픽 생성을 요구합니다. 솔루션 설계자는 SNS 토픽을 생성하고 CloudFormation 스택의 배포를 자동화하기 위해 스택 세트를 사용하는 AWS CloudFormation 템플릿을 사용했습니다. Organizations에서 신뢰할 수 있는 액세스가 활성화되었습니다. 솔루션 설계자는 모든 AWS 계정에 CloudFormation StackSets를 배포하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a stack set in the Organizations member accounts. Use service-managed permissions. Set deployment options to deploy to an organization. Use CloudFormation StackSets drift detection.`, ko:`Organizations 멤버 계정에 스택 세트를 생성합니다. 서비스 관리 권한을 사용합니다. 조직에 배포하도록 배포 옵션을 설정합니다. CloudFormation StackSets 드리프트 감지를 사용합니다.` },
      { k:'B', en:`Create stacks in the Organizations member accounts. Use self-service permissions. Set deployment options to deploy to an organization. Enable the CloudFormation StackSets automatic deployment.`, ko:`Organizations 멤버 계정에 스택을 생성합니다. 셀프 서비스 권한을 사용합니다. 조직에 배포하도록 배포 옵션을 설정합니다. CloudFormation StackSets 자동 배포를 활성화합니다.` },
      { k:'C', en:`Create a stack set in the Organizations management account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets automatic deployment.`, ko:`Organizations 관리 계정에 스택 세트를 생성합니다. 서비스 관리 권한을 사용합니다. 조직에 배포하도록 배포 옵션을 설정합니다. CloudFormation StackSets 자동 배포를 활성화합니다.` },
      { k:'D', en:`Create stacks in the Organizations management account. Use service-managed permissions. Set deployment options to deploy to the organization. Enable CloudFormation StackSets drift detection.`, ko:`Organizations 관리 계정에 스택을 생성합니다. 서비스 관리 권한을 사용합니다. 조직에 배포하도록 배포 옵션을 설정합니다. CloudFormation StackSets 드리프트 감지를 활성화합니다.` },
    ],
    answer: ['C'],
    vote: '88% C',
    explain: `<p><span class="mark-ok">✅ C — 관리 계정에서 StackSet 생성 + 서비스 관리 권한 + 자동 배포</span></p>
<p>Organizations에서 Trusted Access가 활성화된 경우, CloudFormation StackSets는 관리 계정에서 서비스 관리 권한(service-managed permissions)을 사용하여 조직 전체 또는 특정 OU에 스택을 자동으로 배포할 수 있습니다. 자동 배포(automatic deployment)를 활성화하면 새 멤버 계정이 조직에 추가될 때 자동으로 스택이 배포됩니다. 이는 관리 계정에서만 가능한 작업입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 멤버 계정에서 스택 세트를 생성할 수 없습니다. StackSets는 관리 계정 또는 위임된 관리자 계정에서만 생성할 수 있습니다.</p>
<p><span class="mark-no">❌ B</span> — 멤버 계정에서 스택을 생성하는 것은 스택 세트가 아닙니다. 개별 스택은 조직 전체 배포 자동화가 안 됩니다. 또한 셀프 서비스 권한은 StackSet 관리자 역할이 필요한 복잡한 IAM 설정이 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — 스택(Stacks)과 스택 세트(Stack Sets)는 다릅니다. 관리 계정에서 개별 스택을 생성하는 것은 멤버 계정에 자동 배포하는 기능이 없습니다. 드리프트 감지(drift detection)는 자동 배포가 아닌 구성 변경 감지 기능입니다.</p>`,
    disc: [{ ans:'C', txt:'StackSets with service-managed permissions require creation in the management account (with trusted access enabled). Automatic deployment ensures the SNS topic is deployed to all current and future member accounts when they join the organization.' }]
  },
  {
    n: 39,
    en: `A company wants to migrate its workloads from on premises to AWS. The workloads run on Linux and Windows. The company has a large on-premises infrastructure that consists of physical machines and VMs that host numerous applications. The company must capture details about the system configuration, system performance, running processes, and network connections of its on-premises workloads. The company also must divide the on-premises applications into groups for AWS migrations. The company needs recommendations for Amazon EC2 instance types so that the company can run its workloads on AWS in the most cost-effective manner. Which combination of steps should a solutions architect take to meet these requirements? (Choose three.)`,
    ko: `한 회사가 온프레미스에서 AWS로 워크로드를 마이그레이션하려고 합니다. 워크로드는 Linux와 Windows에서 실행됩니다. 회사는 수많은 애플리케이션을 호스팅하는 물리적 머신과 VM으로 구성된 대규모 온프레미스 인프라를 보유하고 있습니다. 회사는 온프레미스 워크로드의 시스템 구성, 시스템 성능, 실행 프로세스, 네트워크 연결에 대한 세부 정보를 캡처해야 합니다. 회사는 또한 AWS 마이그레이션을 위해 온프레미스 애플리케이션을 그룹으로 나누어야 합니다. 회사는 가장 비용 효율적인 방식으로 AWS에서 워크로드를 실행할 수 있도록 Amazon EC2 인스턴스 유형에 대한 권고 사항이 필요합니다. 솔루션 설계자가 이 요구 사항을 충족하기 위해 취해야 할 단계의 조합은 무엇입니까? (세 가지를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Assess the existing applications by installing AWS Application Discovery Agent on the physical machines and VMs.`, ko:`물리적 머신 및 VM에 AWS Application Discovery Agent를 설치하여 기존 애플리케이션을 평가합니다.` },
      { k:'B', en:`Assess the existing applications by installing AWS Systems Manager Agent on the physical machines and VMs.`, ko:`물리적 머신 및 VM에 AWS Systems Manager Agent를 설치하여 기존 애플리케이션을 평가합니다.` },
      { k:'C', en:`Group servers into applications for migration by using AWS Systems Manager Application Manager.`, ko:`AWS Systems Manager Application Manager를 사용하여 마이그레이션을 위해 서버를 애플리케이션으로 그룹화합니다.` },
      { k:'D', en:`Group servers into applications for migration by using AWS Migration Hub.`, ko:`AWS Migration Hub를 사용하여 마이그레이션을 위해 서버를 애플리케이션으로 그룹화합니다.` },
      { k:'E', en:`Generate recommended instance types and associated costs by using AWS Migration Hub.`, ko:`AWS Migration Hub를 사용하여 권장 인스턴스 유형 및 관련 비용을 생성합니다.` },
      { k:'F', en:`Import data about server sizes into AWS Trusted Advisor. Follow the recommendations for cost optimization.`, ko:`서버 크기에 대한 데이터를 AWS Trusted Advisor로 가져옵니다. 비용 최적화를 위한 권고 사항을 따릅니다.` },
    ],
    answer: ['A','D','E'],
    vote: '82% ADE',
    explain: `<p><span class="mark-ok">✅ A — Application Discovery Agent 설치</span></p>
<p>AWS Application Discovery Agent는 물리적 서버와 VM에 설치되어 시스템 구성, 성능 메트릭, 실행 프로세스, 네트워크 연결 데이터를 수집합니다. Linux와 Windows를 모두 지원합니다.</p>
<p><span class="mark-ok">✅ D — Migration Hub로 서버 그룹화</span></p>
<p>AWS Migration Hub는 Discovery Agent가 수집한 데이터를 기반으로 서버들을 논리적 애플리케이션 그룹으로 구성할 수 있는 기능을 제공합니다. 마이그레이션 진행 상황을 중앙에서 추적합니다.</p>
<p><span class="mark-ok">✅ E — Migration Hub로 인스턴스 유형 권고 및 비용 생성</span></p>
<p>Migration Hub는 Discovery Agent가 수집한 성능 데이터를 분석하여 최적의 EC2 인스턴스 유형과 관련 비용을 권고합니다. 이를 통해 비용 효율적인 마이그레이션 계획을 수립할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Systems Manager Agent는 EC2 인스턴스 관리를 위한 도구입니다. 온프레미스 마이그레이션 사전 평가(성능 데이터 수집, 애플리케이션 종속성 매핑)를 위한 도구가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — Systems Manager Application Manager는 AWS에서 실행 중인 애플리케이션을 관리하기 위한 도구입니다. 온프레미스 서버를 마이그레이션 그룹으로 나누는 기능이 없습니다.</p>
<p><span class="mark-no">❌ F</span> — Trusted Advisor는 AWS 계정 내 기존 리소스에 대한 최적화 권고를 제공합니다. 온프레미스 서버 데이터를 가져와 마이그레이션 권고를 제공하는 기능이 없습니다.</p>`,
    disc: [{ ans:'A, D, E', txt:'Application Discovery Agent collects detailed on-prem metrics (performance, processes, network connections). Migration Hub groups discovered servers into application migration groups and generates EC2 instance type recommendations with cost estimates based on collected performance data.' }]
  },
  {
    n: 40,
    en: `A company is hosting an image-processing service on AWS in a VPC. The VPC extends across two Availability Zones. Each Availability Zone contains one public subnet and one private subnet. The service runs on Amazon EC2 instances in the private subnets. An Application Load Balancer in the public subnets is in front of the service. The service needs to communicate with the internet and does so through two NAT gateways. The service uses Amazon S3 for image storage. The EC2 instances retrieve approximately 1 TB of data from an S3 bucket each day. The company has promoted the service as highly secure. A solutions architect must reduce cloud expenditures as much as possible without compromising the service's security posture or increasing the time spent on ongoing operations. Which solution will meet these requirements?`,
    ko: `한 회사가 VPC의 AWS에서 이미지 처리 서비스를 호스팅하고 있습니다. VPC는 두 가용 영역에 걸쳐 있습니다. 각 가용 영역에는 퍼블릭 서브넷과 프라이빗 서브넷이 하나씩 있습니다. 서비스는 프라이빗 서브넷의 Amazon EC2 인스턴스에서 실행됩니다. 퍼블릭 서브넷의 Application Load Balancer가 서비스 앞에 있습니다. 서비스는 인터넷과 통신해야 하며 두 개의 NAT 게이트웨이를 통해 이를 수행합니다. 서비스는 이미지 스토리지를 위해 Amazon S3를 사용합니다. EC2 인스턴스는 매일 S3 버킷에서 약 1TB의 데이터를 검색합니다. 회사는 서비스를 매우 안전하다고 홍보했습니다. 솔루션 설계자는 서비스의 보안 태세를 손상시키거나 지속적인 운영에 소요되는 시간을 늘리지 않고 클라우드 지출을 최대한 줄여야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Replace the NAT gateways with NAT instances. In the VPC route table, create a route from the private subnets to the NAT instances.`, ko:`NAT 게이트웨이를 NAT 인스턴스로 교체합니다. VPC 라우트 테이블에서 프라이빗 서브넷에서 NAT 인스턴스로 라우트를 생성합니다.` },
      { k:'B', en:`Move the EC2 instances to the public subnets. Remove the NAT gateways.`, ko:`EC2 인스턴스를 퍼블릭 서브넷으로 이동합니다. NAT 게이트웨이를 제거합니다.` },
      { k:'C', en:`Set up an S3 gateway VPC endpoint in the VPC. Attach an endpoint policy to the endpoint to allow the required actions on the S3 bucket.`, ko:`VPC에 S3 게이트웨이 VPC 엔드포인트를 설정합니다. S3 버킷에 필요한 작업을 허용하도록 엔드포인트에 엔드포인트 정책을 연결합니다.` },
      { k:'D', en:`Attach an Amazon Elastic File System (Amazon EFS) volume to the EC2 instances. Host the images on the EFS volume.`, ko:`Amazon EC2 인스턴스에 Amazon EFS 볼륨을 연결합니다. EFS 볼륨에 이미지를 호스팅합니다.` },
    ],
    answer: ['C'],
    vote: '92% C',
    explain: `<p><span class="mark-ok">✅ C — S3 게이트웨이 VPC 엔드포인트</span></p>
<p>S3 게이트웨이 VPC 엔드포인트는 무료이며, EC2 인스턴스의 S3 트래픽을 인터넷을 통하지 않고 AWS 내부 네트워크를 통해 직접 라우팅합니다. 매일 1TB의 S3 데이터를 검색할 때 NAT 게이트웨이를 통한 데이터 처리 비용($0.045/GB)이 크게 발생합니다. S3 게이트웨이 엔드포인트를 사용하면 NAT 게이트웨이 데이터 처리 비용이 제거됩니다. 또한 트래픽이 인터넷을 통하지 않아 보안 태세가 강화됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — NAT 인스턴스로 교체하면 EC2 인스턴스 관리(패치, 모니터링, 장애 조치)가 필요하여 운영 시간이 증가합니다. 또한 고가용성을 위한 이중화 설정이 복잡합니다.</p>
<p><span class="mark-no">❌ B</span> — EC2 인스턴스를 퍼블릭 서브넷으로 이동하면 직접 인터넷에 노출되어 보안 태세가 크게 저하됩니다. 회사가 서비스를 "매우 안전"하다고 홍보했으므로 이는 요구 사항을 위반합니다.</p>
<p><span class="mark-no">❌ D</span> — EFS는 공유 파일 시스템으로 S3를 대체하는 솔루션이 아닙니다. S3 사용을 EFS로 변경하면 기존 아키텍처의 큰 변경이 필요하며 비용도 S3보다 높습니다.</p>`,
    disc: [{ ans:'C', txt:'S3 Gateway VPC endpoints are free and route S3 traffic over the AWS backbone instead of through NAT gateways. With 1TB/day, NAT gateway data processing fees (~$45/day) are substantial. Gateway endpoint eliminates this cost while keeping traffic private — improving both cost and security.' }]
  },
];
