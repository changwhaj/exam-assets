window.QS_SET02 = [
  {
    n: 11,
    en: `A company has many AWS accounts and uses AWS Organizations to manage all of them. A solutions architect must implement a solution that the company can use to share a common network across multiple accounts.<br/>The company's infrastructure team has a dedicated infrastructure account that has a VPC. The infrastructure team must use this account to manage the network. Individual accounts cannot have the ability to manage their own networks. However, individual accounts must be able to create AWS resources within subnets.<br/>Which combination of actions should the solutions architect perform to meet these requirements? (Choose two.)`,
    ko: `회사에는 많은 AWS 계정이 있으며 AWS Organizations를 사용하여 모든 계정을 관리합니다. 솔루션 설계자는 회사가 여러 계정에서 공통 네트워크를 공유하는 데 사용할 수 있는 솔루션을 구현해야 합니다.<br/>회사의 인프라 팀에는 VPC가 있는 전용 인프라 계정이 있습니다. 인프라 팀은 이 계정을 사용하여 네트워크를 관리해야 합니다. 개별 계정은 자신의 네트워크를 관리할 수 없습니다. 그러나 개별 계정은 서브넷 내에서 AWS 리소스를 생성할 수 있어야 합니다.<br/>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 작업 조합을 수행해야 합니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Create a transit gateway in the infrastructure account.`, ko:`인프라 계정에 전송 게이트웨이를 생성합니다.` },
      { k:'B', en:`Enable resource sharing from the AWS Organizations management account.`, ko:`AWS Organizations 마스터 계정에서 리소스 공유를 활성화합니다.` },
      { k:'C', en:`Create VPCs in each AWS account within the organization in AWS Organizations. Configure the VPCs to share the same CIDR range and subnets as the VPC in the infrastructure account. Peer the VPCs in each individual account with the VPC in the infrastructure account.`, ko:`AWS Organizations의 조직 내 각 AWS 계정에 VPC를 생성합니다. 인프라 계정의 VPC와 동일한 CIDR 범위 및 서브넷을 공유하도록 VPC를 구성합니다. 각 개별 계정의 VPC를 인프라 계정의 VPC와 피어링합니다.` },
      { k:'D', en:`Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each subnet to associate with the resource share.`, ko:`인프라 계정의 AWS Resource Access Manager에서 리소스 공유를 생성합니다. 공유 네트워크를 사용할 특정 AWS Organizations OU를 선택합니다. 리소스 공유와 연결할 각 서브넷을 선택합니다.` },
      { k:'E', en:`Create a resource share in AWS Resource Access Manager in the infrastructure account. Select the specific AWS Organizations OU that will use the shared network. Select each prefix list to associate with the resource share.`, ko:`인프라 계정의 AWS Resource Access Manager에서 리소스 공유를 생성합니다. 공유 네트워크를 사용할 특정 AWS Organizations OU를 선택합니다. 리소스 공유와 연결할 각 접두사 목록을 선택합니다.` },
    ],
    answer: ["B", "D"],
    vote: '87% BD, 13% BE',
    explain: `<p><span class="mark-ok">✅ B, D — AWS RAM을 이용한 VPC 서브넷 공유</span></p>
<p>AWS Resource Access Manager(RAM)으로 서브넷을 공유하려면 두 단계가 필요합니다.</p>
<p><strong>B — Organizations management account에서 리소스 공유 활성화:</strong> RAM을 통해 조직 전체에 리소스를 공유하려면 management account에서 "Enable sharing with AWS Organizations" 설정을 먼저 활성화해야 합니다. 이 설정 없이는 조직 단위(OU)를 RAM 공유 대상으로 지정할 수 없습니다.</p>
<p><strong>D — RAM에서 서브넷을 리소스 공유에 연결:</strong> 인프라 계정의 RAM에서 Resource Share를 생성하고, 대상 OU를 선택한 뒤 공유할 서브넷을 연결합니다. 멤버 계정 사용자는 공유된 서브넷 안에서 EC2, RDS 등 리소스를 생성할 수 있지만, 서브넷 자체를 수정·삭제할 수 없으므로 네트워크 관리 권한은 인프라 계정에만 남습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Transit Gateway는 VPC 간 라우팅을 위한 허브입니다. 서브넷 자체를 다른 계정에 공유하는 기능이 아니므로, 개별 계정이 공통 서브넷에서 리소스를 생성하는 요구사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — VPC 피어링은 각 계정이 자체 VPC를 보유하고 피어 연결로 통신하는 구조입니다. 이 경우 각 계정이 자체 네트워크를 관리하게 되어 "개별 계정은 자신의 네트워크를 관리할 수 없다"는 요구사항을 위반합니다. 또한 동일한 CIDR 범위를 공유하는 VPC는 피어링이 불가능합니다.</p>
<p><span class="mark-no">❌ E</span> — Prefix list는 CIDR 블록 목록으로 라우팅 테이블·보안 그룹 규칙을 단순화하는 데 사용합니다. 서브넷 자체가 아니라 경로 정보를 공유하는 것이므로, 멤버 계정이 서브넷 내에서 리소스를 직접 생성하는 요구사항을 충족하지 못합니다.</p>`,
    disc: [{ ans:'B, D', txt:'RAM VPC sharing: B enables org-level sharing in management account (prerequisite for OU targeting). D creates a resource share in infrastructure account targeting the OU and associates specific subnets. Member accounts can launch resources into shared subnets but cannot modify the subnets — network management stays with the infrastructure account.' }]
  },
  {
    n: 12,
    en: `A company wants to use a third-party software-as-a-service (SaaS) application. The third-party SaaS application is consumed through several API calls. The third-party SaaS application also runs on AWS inside a VPC.<br/>The company will consume the third-party SaaS application from inside a VPC. The company has internal security policies that mandate the use of private connectivity that does not traverse the internet. No resources that run in the company VPC are allowed to be accessed from outside the company's VPC. All permissions must conform to the principles of least privilege.<br/>Which solution meets these requirements?`,
    ko: `회사에서는 타사 SaaS(Software-as-a-Service) 애플리케이션을 사용하려고 합니다. 타사 SaaS 애플리케이션은 여러 API 호출을 통해 사용됩니다. 타사 SaaS 애플리케이션도 VPC 내부의 AWS에서 실행됩니다.<br/>회사는 VPC 내부에서 타사 SaaS 애플리케이션을 사용합니다. 회사에는 인터넷을 통과하지 않는 프라이빗 연결의 사용을 의무화하는 내부 보안 정책이 있습니다. 회사 VPC에서 실행되는 리소스는 회사 VPC 외부에서 액세스할 수 없습니다. 모든 권한은 최소 권한의 원칙을 준수해야 합니다.<br/>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an AWS PrivateLink interface VPC endpoint. Connect this endpoint to the endpoint service that the third-party SaaS application provides. Create a security group to limit the access to the endpoint. Associate the security group with the endpoint.`, ko:`AWS PrivateLink 인터페이스 VPC 엔드포인트를 생성합니다. 이 엔드포인트를 타사 SaaS 애플리케이션이 제공하는 엔드포인트 서비스에 연결합니다. 엔드포인트에 대한 액세스를 제한하려면 보안 그룹을 생성하십시오. 보안 그룹을 엔드포인트와 연결합니다.` },
      { k:'B', en:`Create an AWS Site-to-Site VPN connection between the third-party SaaS application and the company VPC. Configure network ACLs to limit access across the VPN tunnels.`, ko:`타사 SaaS 애플리케이션과 회사 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다. VPN 터널 전반에 걸쳐 액세스를 제한하도록 네트워크 ACL을 구성합니다.` },
      { k:'C', en:`Create a VPC peering connection between the third-party SaaS application and the company VPUpdate route tables by adding the needed routes for the peering connection.`, ko:`피어링 연결에 필요한 경로를 추가하여 타사 SaaS 애플리케이션과 회사 VPC 간에 VPC 피어링 연결을 생성합니다.` },
      { k:'D', en:`Create an AWS PrivateLink endpoint service. Ask the third-party SaaS provider to create an interface VPC endpoint for this endpoint service. Grant permissions for the endpoint service to the specific account of the third-party SaaS provider.`, ko:`AWS PrivateLink 엔드포인트 서비스를 생성합니다. 타사 SaaS 공급자에게 이 엔드포인트 서비스에 대한 인터페이스 VPC 엔드포인트를 생성하도록 요청하세요. 타사 SaaS 공급자의 특정 계정에 엔드포인트 서비스에 대한 권한을 부여합니다.` },
    ],
    answer: ["A"],
    vote: '93% A, 7% D',
    explain: `<p><span class="mark-ok">✅ A — PrivateLink 인터페이스 VPC 엔드포인트 (소비자 측)</span></p>
<p>AWS PrivateLink 역할 구조를 이해하는 것이 핵심입니다. <strong>공급자(provider)</strong>는 자신의 VPC에서 NLB 뒤에 서비스를 노출하고 <strong>endpoint service</strong>를 생성합니다. <strong>소비자(consumer)</strong>는 자신의 VPC에 <strong>interface VPC endpoint</strong>를 생성하고 공급자의 endpoint service에 연결합니다.</p>
<p>이 문제에서 회사는 <em>소비자</em>입니다. 타사가 이미 endpoint service를 노출하고 있으므로, 회사는 자신의 VPC에 interface endpoint를 만들어 연결합니다. 트래픽은 AWS 내부 네트워크를 통해 흐르며 인터넷을 통과하지 않습니다. 보안 그룹을 endpoint에 연결해 최소 권한 액세스 제어가 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ D</span> — D는 역할이 반대입니다. 회사가 endpoint service(공급자 역할)를 만들고 타사가 endpoint를 만드는 구조는 회사가 서비스를 <em>제공</em>할 때 사용합니다. 이 문제에서 회사는 타사 SaaS를 소비하는 쪽이므로 D는 요구사항과 역할이 반대입니다.</p>
<p><span class="mark-no">❌ B</span> — Site-to-Site VPN은 온프레미스 네트워크와 AWS 간 연결에 사용하는 솔루션입니다. 두 AWS VPC 간 서비스 연결에는 적합하지 않으며, VPN으로 연결하면 회사 VPC 내 리소스가 외부에서 접근 가능해질 수 있어 보안 요구사항에도 맞지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — VPC 피어링은 두 VPC가 양방향으로 통신하는 구조입니다. PrivateLink는 단방향(소비자→공급자)으로 최소 권한 원칙에 더 부합합니다. 또한 피어링은 CIDR이 겹치면 사용할 수 없으며, "회사 VPC의 리소스가 외부에서 접근 불가" 요구사항을 완벽하게 보장하기 어렵습니다.</p>`,
    disc: [{ ans:'A', txt:'PrivateLink model: provider exposes "endpoint service" behind NLB. Consumer creates "interface VPC endpoint" in own VPC to connect to that service. Traffic stays on AWS private network — never internet. Security groups on the endpoint enforce least-privilege access. The company is the consumer here; the SaaS provider already has an endpoint service running.' }]
  },
  {
    n: 13,
    en: `A company needs to implement a patching process for its servers. The on-premises servers and Amazon EC2 instances use a variety of tools to perform patching. Management requires a single report showing the patch status of all the servers and instances.<br/>Which set of actions should a solutions architect take to meet these requirements?`,
    ko: `회사에서는 서버에 대한 패치 프로세스를 구현해야 합니다. 온프레미스 서버와 Amazon EC2 인스턴스는 다양한 도구를 사용하여 패치를 수행합니다. 관리에는 모든 서버와 인스턴스의 패치 상태를 보여주는 단일 보고서가 필요합니다.<br/>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 조치를 취해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use AWS Systems Manager to manage patches on the on-premises servers and EC2 instances. Use Systems Manager to generate patch compliance reports.`, ko:`AWS Systems Manager를 사용하여 온프레미스 서버 및 EC2 인스턴스의 패치를 관리하십시오. Systems Manager를 사용하여 패치 규정 준수 보고서를 생성하세요.` },
      { k:'B', en:`Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use Amazon QuickSight integration with OpsWorks to generate patch compliance reports.`, ko:`AWS OpsWorks를 사용하여 온프레미스 서버 및 EC2 인스턴스의 패치를 관리합니다. OpsWorks와 Amazon QuickSight 통합을 사용하여 패치 규정 준수 보고서를 생성합니다.` },
      { k:'C', en:`Use an Amazon EventBridge rule to apply patches by scheduling an AWS Systems Manager patch remediation job. Use Amazon Inspector to generate patch compliance reports.`, ko:`Amazon EventBridge 규칙을 사용하여 AWS Systems Manager 패치 수정 작업을 예약하여 패치를 적용합니다. Amazon Inspector를 사용하여 패치 규정 준수 보고서를 생성합니다.` },
      { k:'D', en:`Use AWS OpsWorks to manage patches on the on-premises servers and EC2 instances. Use AWS X-Ray to post the patch status to AWS Systems Manager OpsCenter to generate patch compliance reports.`, ko:`AWS OpsWorks를 사용하여 온프레미스 서버 및 EC2 인스턴스의 패치를 관리합니다. AWS X-Ray를 사용하여 패치 상태를 AWS Systems Manager OpsCenter에 게시하여 패치 규정 준수 보고서를 생성합니다.` },
    ],
    answer: ["A"],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — AWS Systems Manager Patch Manager</span></p>
<p>AWS Systems Manager Patch Manager는 EC2 인스턴스와 온프레미스 서버(하이브리드 activations로 SSM Agent 설치) 모두에 대해 패치를 중앙 관리하는 서비스입니다.</p>
<p>핵심 기능:</p>
<ul>
  <li><strong>Patch Baseline</strong>: 승인/거부할 패치 규칙을 정의합니다.</li>
  <li><strong>Patch Groups</strong>: 태그 기반으로 서버를 그룹화하여 차별적 패치 적용이 가능합니다.</li>
  <li><strong>통합 패치 규정 준수 보고서</strong>: Systems Manager 콘솔에서 온프레미스 서버와 EC2 인스턴스의 패치 상태를 하나의 보고서로 확인합니다.</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — OpsWorks는 Chef/Puppet 기반 구성 관리 도구입니다. 패치 관리 전용 기능이 없으며, QuickSight는 비즈니스 인텔리전스 도구로 패치 규정 준수 보고서를 생성하는 기능을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon Inspector는 EC2 인스턴스의 취약점을 <em>평가</em>하는 도구입니다. 패치를 실제로 적용하거나 온프레미스 서버와 통합된 패치 규정 준수 보고서를 제공하는 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS X-Ray는 분산 애플리케이션 추적 도구로 패치 상태 수집과 무관합니다. OpsWorks와 X-Ray를 결합해도 통합 패치 규정 준수 보고서를 생성할 수 없습니다.</p>`,
    disc: [{ ans:'A', txt:'Systems Manager Patch Manager supports hybrid environments: install SSM Agent on on-premises servers via hybrid activations, then manage patching and generate compliance reports across EC2 + on-premises from one console. Single unified report from one service satisfies the requirement.' }]
  },
  {
    n: 14,
    en: `A company is running an application on several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The load on the application varies throughout the day, and EC2 instances are scaled in and out on a regular basis. Log files from the EC2 instances are copied to a central Amazon S3 bucket every 15 minutes. The security team discovers that log files are missing from some of the terminated EC2 instances.<br/>Which set of actions will ensure that log files are copied to the central S3 bucket from the terminated EC2 instances?`,
    ko: `한 회사가 Application Load Balancer 뒤에 있는 Auto Scaling 그룹의 여러 Amazon EC2 인스턴스에서 애플리케이션을 실행하고 있습니다. 애플리케이션의 로드는 하루 종일 다양하며 EC2 인스턴스는 정기적으로 확장 및 축소됩니다. EC2 인스턴스의 로그 파일은 15분마다 중앙 Amazon S3 버킷에 복사됩니다. 보안팀은 종료된 일부 EC2 인스턴스에서 로그 파일이 누락된 것을 발견했습니다.<br/>로그 파일이 종료된 EC2 인스턴스에서 중앙 S3 버킷으로 복사되도록 보장하는 작업 세트는 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a script to copy log files to Amazon S3, and store the script in a file on the EC2 instance. Create an Auto Scaling lifecycle hook and an Amazon EventBridge rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to send ABANDON to the Auto Scaling group to prevent termination, run the script to copy the log files, and terminate the instance using the AWS SDK.`, ko:`로그 파일을 Amazon S3에 복사하는 스크립트를 생성하고 EC2 인스턴스의 파일에 스크립트를 저장합니다. Auto Scaling 수명 주기 후크와 Amazon EventBridge 규칙을 생성하여 Auto Scaling 그룹에서 수명 주기 이벤트를 감지합니다. autoscaling:EC2_INSTANCE_TERMINATING 전환에서 Lambda 함수를 호출하여 ABANDON을 Auto Scaling 그룹에 보내 종료를 방지하고, 스크립트를 실행하여 로그 파일을 복사하고, AWS SDK를 사용하여 인스턴스를 종료합니다.` },
      { k:'B', en:`Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook and an Amazon EventBridge rule to detect lifecycle events from the Auto Scaling group. Invoke an AWS Lambda function on the autoscaling:EC2_INSTANCE_TERMINATING transition to call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send CONTINUE to the Auto Scaling group to terminate the instance.`, ko:`로그 파일을 Amazon S3에 복사하는 스크립트가 포함된 AWS Systems Manager 문서를 생성합니다. Auto Scaling 수명 주기 후크와 Amazon EventBridge 규칙을 생성하여 Auto Scaling 그룹에서 수명 주기 이벤트를 감지합니다. autoscaling:EC2_INSTANCE_TERMINATING 전환에서 Lambda 함수를 호출하여 SSM API SendCommand 작업을 호출하고 문서를 실행하여 로그 파일을 복사한 후 CONTINUE를 Auto Scaling 그룹에 보내 인스턴스를 종료합니다.` },
      { k:'C', en:`Change the log delivery rate to every 5 minutes. Create a script to copy log files to Amazon S3, and add the script to EC2 instance user data. Create an Amazon EventBridge rule to detect EC2 instance termination. Invoke an AWS Lambda function from the EventBridge rule that uses the AWS CLI to run the user-data script to copy the log files and terminate the instance.`, ko:`로그 전달 속도를 5분 간격으로 변경합니다. 로그 파일을 Amazon S3에 복사하는 스크립트를 생성하고 EC2 인스턴스 사용자 데이터에 스크립트를 추가합니다. EC2 인스턴스 종료를 감지하는 Amazon EventBridge 규칙을 생성합니다. AWS CLI를 사용하는 EventBridge 규칙에서 Lambda 함수를 호출하여 사용자 데이터 스크립트를 실행하여 로그 파일을 복사하고 인스턴스를 종료합니다.` },
      { k:'D', en:`Create an AWS Systems Manager document with a script to copy log files to Amazon S3. Create an Auto Scaling lifecycle hook that publishes a message to an Amazon Simple Notification Service (Amazon SNS) topic. From the SNS notification, call the AWS Systems Manager API SendCommand operation to run the document to copy the log files and send ABANDON to the Auto Scaling group to terminate the instance.`, ko:`로그 파일을 Amazon S3에 복사하는 스크립트를 사용하여 AWS Systems Manager 문서를 생성합니다. Amazon SNS 주제에 메시지를 게시하는 Auto Scaling 수명 주기 후크를 생성합니다. SNS 알림에서 SSM API SendCommand 작업을 호출하여 문서를 실행하여 로그 파일을 복사하고 ABANDON을 Auto Scaling 그룹에 보내 인스턴스를 종료합니다.` },
    ],
    answer: ["B"],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Lifecycle Hook + EventBridge + Lambda + SSM SendCommand + CONTINUE</span></p>
<p>Auto Scaling이 인스턴스를 종료하기 전에 로그를 S3에 복사하려면 <strong>EC2_INSTANCE_TERMINATING lifecycle hook</strong>으로 종료를 일시 중단해야 합니다.</p>
<p>정확한 흐름:</p>
<ol>
  <li>Auto Scaling에 <code>EC2_INSTANCE_TERMINATING</code> lifecycle hook 추가 → 인스턴스가 <code>Terminating:Wait</code> 상태로 전환</li>
  <li>EventBridge 규칙이 lifecycle 이벤트를 감지하고 Lambda 호출</li>
  <li>Lambda가 SSM API <code>SendCommand</code>로 SSM Document 실행 → 로그 파일을 S3로 복사</li>
  <li>복사 완료 후 Lambda가 Auto Scaling에 <strong>CONTINUE</strong> 신호 전송 → 인스턴스 종료 진행</li>
</ol>
<p>CONTINUE는 "다음 lifecycle 단계로 진행(실제 종료)"을 의미합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ABANDON 신호를 보내면 해당 lifecycle hook의 나머지 단계를 건너뛰어 인스턴스 종료를 취소하지 않습니다. 또한 인스턴스를 AWS SDK로 별도 종료하는 복잡한 절차가 필요하고, 인스턴스에 저장된 스크립트에 직접 의존하는 것은 SSM Document를 이용한 관리형 방식보다 안정성이 떨어집니다.</p>
<p><span class="mark-no">❌ C</span> — user-data 스크립트는 인스턴스 <em>시작 시</em>에만 실행됩니다. 종료 시점에 user-data를 재실행하는 것은 정상적인 AWS 메커니즘이 아닙니다. 또한 5분 주기 변경은 15분 안에 종료가 발생하는 경우를 완전히 막지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — SNS를 통해 SendCommand를 직접 호출하는 것은 비동기 처리가 복잡합니다. ABANDON 신호는 lifecycle hook 취소를 의미하여 인스턴스가 <code>Terminating:Wait</code> 상태에서 타임아웃까지 대기하게 되는 문제가 있습니다.</p>`,
    disc: [{ ans:'B', txt:'Lifecycle hook pattern: EC2_INSTANCE_TERMINATING puts instance in Terminating:Wait → EventBridge fires Lambda → Lambda calls SSM SendCommand to run document (copy logs to S3) on the instance → Lambda sends CONTINUE signal → instance terminates normally. CONTINUE means "proceed with termination", not cancel it.' }]
  },
  {
    n: 15,
    en: `A company is using multiple AWS accounts. The DNS records are stored in a private hosted zone for Amazon Route 53 in Account A. The company's applications and databases are running in Account B.<br/>A solutions architect will deploy a two-tier application in a new VPC. To simplify the configuration, the db.example.com CNAME record set for the Amazon RDS endpoint was created in a private hosted zone for Amazon Route 53.<br/>During deployment, the application failed to start. Troubleshooting revealed that db.example.com is not resolvable on the Amazon EC2 instance. The solutions architect confirmed that the record set was created correctly in Route 53.<br/>Which combination of steps should the solutions architect take to resolve this issue? (Choose two.)`,
    ko: `회사에서 여러 AWS 계정을 사용하고 있습니다. DNS 레코드는 계정 A의 Amazon Route 53에 대한 프라이빗 호스팅 영역에 저장됩니다. 회사의 애플리케이션과 데이터베이스는 계정 B에서 실행됩니다.<br/>솔루션 설계자는 새 VPC에 2계층 애플리케이션을 배포합니다. 구성을 단순화하기 위해 Amazon RDS 엔드포인트에 대한 db.example.com CNAME 레코드 세트가 Amazon Route 53의 프라이빗 호스팅 영역에 생성되었습니다.<br/>배포 중에 애플리케이션을 시작하지 못했습니다. 문제 해결 결과 Amazon EC2 인스턴스에서 db.example.com을 확인할 수 없는 것으로 나타났습니다. 솔루션 설계자는 Route 53에서 레코드 세트가 올바르게 생성되었음을 확인했습니다.<br/>이 문제를 해결하기 위해 수행해야 하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Deploy the database on a separate EC2 instance in the new VPC. Create a record set for the instance's private IP in the private hosted zone.`, ko:`새 VPC의 별도 EC2 인스턴스에 데이터베이스를 배포합니다. 프라이빗 호스팅 영역에서 인스턴스의 프라이빗 IP에 대한 레코드 세트를 생성합니다.` },
      { k:'B', en:`Use SSH to connect to the application tier EC2 instance. Add an RDS endpoint IP address to the /etc/resolv.conf file.`, ko:`SSH를 사용하여 애플리케이션 계층 EC2 인스턴스에 연결합니다. /etc/resolv.conf 파일에 RDS 엔드포인트 IP 주소를 추가합니다.` },
      { k:'C', en:`Create an authorization to associate the private hosted zone in Account A with the new VPC in Account B.`, ko:`계정 A의 프라이빗 호스팅 영역을 계정 B의 새 VPC와 연결하기 위한 권한 부여를 생성합니다.` },
      { k:'D', en:`Create a private hosted zone for the example com domain in Account B. Configure Route 53 replication between AWS accounts.`, ko:`계정 B에서 example.com 도메인에 대한 프라이빗 호스팅 영역을 생성합니다. AWS 계정 간에 Route 53 복제를 구성합니다.` },
      { k:'E', en:`Associate a new VPC in Account B with a hosted zone in Account A. Delete the association authorization in Account A.`, ko:`계정 B의 새 VPC를 계정 A의 호스팅 영역과 연결합니다. 계정 A의 연결 인증을 삭제합니다.` },
    ],
    answer: ["C", "E"],
    vote: '100% CE',
    explain: `<p><span class="mark-ok">✅ C, E — 교차 계정 Private Hosted Zone 연결 (2단계 프로세스)</span></p>
<p>Route 53 Private Hosted Zone은 연결된 VPC에서만 DNS 조회가 가능합니다. 계정 A의 hosted zone과 계정 B의 VPC가 서로 다른 계정에 있으므로 2단계 절차가 필요합니다.</p>
<p><strong>C — 연결 권한 부여 생성 (계정 A에서 수행):</strong><br/>
계정 A에서 AWS CLI <code>route53 create-vpc-association-authorization</code>을 실행하여 계정 B의 특정 VPC가 계정 A의 hosted zone에 연결할 수 있도록 권한을 부여합니다.</p>
<p><strong>E — VPC 연결 및 권한 부여 삭제 (계정 B에서 수행):</strong><br/>
계정 B에서 <code>route53 associate-vpc-with-hosted-zone</code>을 실행하여 새 VPC를 계정 A의 hosted zone에 연결합니다. 연결 완료 후 계정 A에서 권한 부여 항목을 삭제합니다(보안 모범 사례).</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — <code>/etc/resolv.conf</code>에 RDS IP를 직접 추가하는 것은 임시 수동 조치입니다. 재부팅 시 유지되지 않고, Auto Scaling 환경에서는 각 인스턴스마다 적용해야 하며, RDS Failover 시 엔드포인트 IP가 변경될 수 있어 실용적이지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Route 53에는 계정 간 hosted zone 복제(replication) 기능이 없습니다. 계정 B에 별도 hosted zone을 만들고 레코드를 수동으로 관리하는 방식은 운영 오버헤드가 크고 동기화 오류 가능성이 있습니다.</p>`,
    disc: [{ ans:'C, E', txt:'Cross-account private hosted zone association: (1) Account A: create-vpc-association-authorization allows Account B VPC to associate; (2) Account B: associate-vpc-with-hosted-zone links the new VPC to Account A hosted zone; then Account A: delete-vpc-association-authorization to clean up. After this, EC2 in Account B VPC can resolve db.example.com.' }]
  },
  {
    n: 16,
    en: `A company used Amazon EC2 instances to deploy a web fleet to host a blog site. The EC2 instances are behind an Application Load Balancer (ALB) and are configured in an Auto Scaling group. The web application stores all blog content on an Amazon EFS volume.<br/>The company recently added a feature for bloggers to add video to their posts, attracting 10 times the previous user traffic. At peak times of day, users report buffering and timeout issues while attempting to reach the site or watch videos.<br/>Which is the MOST cost-efficient and scalable deployment that will resolve the issues for users?`,
    ko: `한 회사는 Amazon EC2 인스턴스를 사용하여 블로그 사이트를 호스팅하기 위한 웹 집합을 배포했습니다. EC2 인스턴스는 ALB(Application Load Balancer) 뒤에 있으며 Auto Scaling 그룹에서 구성됩니다. 웹 애플리케이션은 모든 블로그 콘텐츠를 Amazon EFS 볼륨에 저장합니다.<br/>회사는 최근 블로거가 자신의 게시물에 동영상을 추가할 수 있는 기능을 추가하여 이전 사용자 트래픽의 10배를 유치했습니다. 하루 중 사용량이 많은 시간대에 사용자는 사이트에 접속하거나 비디오를 시청하려고 할 때 버퍼링 및 시간 초과 문제를 보고합니다.<br/>사용자의 문제를 해결하는 가장 비용 효율적이고 확장 가능한 배포는 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Reconfigure Amazon EFS to enable maximum I/O.`, ko:`최대 I/O를 활성화하도록 Amazon EFS를 재구성합니다.` },
      { k:'B', en:`Update the blog site to use instance store volumes for storage. Copy the site contents to the volumes at launch and to Amazon S3 at shutdown.`, ko:`인스턴스 스토어 볼륨을 저장용으로 사용하도록 블로그 사이트를 업데이트합니다. 사이트 콘텐츠를 시작 시 볼륨에 복사하고 종료 시 Amazon S3에 복사합니다.` },
      { k:'C', en:`Configure an Amazon CloudFront distribution. Point the distribution to an S3 bucket, and migrate the videos from EFS to Amazon S3.`, ko:`Amazon CloudFront 배포를 구성합니다. 배포를 S3 버킷으로 지정하고 비디오를 EFS에서 Amazon S3로 마이그레이션합니다.` },
      { k:'D', en:`Set up an Amazon CloudFront distribution for all site contents, and point the distribution at the ALB.`, ko:`모든 사이트 콘텐츠에 대해 Amazon CloudFront 배포를 설정하고 ALB에서 배포를 지정합니다.` },
    ],
    answer: ["C"],
    vote: '96% C',
    explain: `<p><span class="mark-ok">✅ C — CloudFront + S3 (비디오를 EFS에서 S3로 이전)</span></p>
<p>문제의 핵심은 대용량 비디오 콘텐츠를 글로벌 사용자에게 효율적으로 전달하는 것입니다.</p>
<p><strong>S3로 비디오 이전:</strong> EFS는 EC2 인스턴스에 마운트되는 공유 파일시스템으로, 수천 명이 동시에 비디오를 스트리밍하는 워크로드에 적합하지 않습니다. S3는 대규모 객체 스토리지로 설계되어 무제한 동시 요청을 처리합니다.</p>
<p><strong>CloudFront CDN:</strong> 전 세계 엣지 로케이션에 비디오를 캐시하여 사용자와 가까운 위치에서 콘텐츠를 제공합니다. EC2/ALB로 가는 트래픽을 대폭 줄여 버퍼링·타임아웃 문제를 해결합니다. S3 데이터 전송 비용이 EC2를 통한 서빙보다 저렴해 비용도 절감됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EFS 최대 I/O 모드는 처리량을 높이지만, 대용량 비디오를 전 세계 사용자에게 동시에 서빙하는 CDN 기능이 없습니다. 근본 원인(배포 방식의 비효율)을 해결하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — 인스턴스 스토어는 인스턴스 종료 시 데이터가 소실됩니다. 종료 시 S3 복사가 실패하면 데이터 손실이 발생하는 위험한 구조이며, Auto Scaling 환경에서는 운영이 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — ALB를 CloudFront 오리진으로 두면 모든 요청이 EC2까지 도달합니다. 비디오처럼 정적이고 대용량인 콘텐츠는 S3+CloudFront가 훨씬 비용 효율적입니다. EC2 인스턴스를 통한 서빙은 비용이 높고 확장성이 제한됩니다.</p>`,
    disc: [{ ans:'C', txt:'Migrating videos from EFS to S3 removes the bottleneck of EC2/EFS serving large video files. CloudFront caches videos at edge locations near users, eliminating buffering and timeouts. S3 + CloudFront is the standard AWS pattern for scalable, cost-effective static/video content delivery — far cheaper than serving TB of data through EC2.' }]
  },
  {
    n: 17,
    en: `A company with global offices has a single 1 Gbps AWS Direct Connect connection to a single AWS Region. The company's on-premises network uses the connection to communicate with the company's resources in the AWS Cloud. The connection has a single private virtual interface that connects to a single VPC.<br/>A solutions architect must implement a solution that adds a redundant Direct Connect connection in the same Region. The solution also must provide connectivity to other Regions through the same pair of Direct Connect connections as the company expands into other Regions.<br/>Which solution meets these requirements?`,
    ko: `글로벌 사무소가 있는 회사는 단일 AWS 리전에 대한 단일 1Gbps AWS Direct Connect 연결을 보유합니다. 회사의 온프레미스 네트워크는 연결을 사용하여 AWS 클라우드에 있는 회사 리소스와 통신합니다. 연결에는 단일 VPC에 연결되는 단일 프라이빗 가상 인터페이스가 있습니다.<br/>솔루션 설계자는 동일한 리전에 중복 Direct Connect 연결을 추가하는 솔루션을 구현해야 합니다. 또한 솔루션은 회사가 다른 리전으로 확장함에 따라 동일한 Direct Connect 연결 쌍을 통해 다른 리전에 대한 연결을 제공해야 합니다.<br/>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Provision a Direct Connect gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the Direct Connect gateway. Connect the Direct Connect gateway to the single VPC.`, ko:`Direct Connect 게이트웨이를 프로비저닝합니다. 기존 연결에서 기존 프라이빗 가상 인터페이스를 삭제합니다. 두 번째 Direct Connect 연결을 생성합니다. 각 연결마다 새 프라이빗 가상 인터페이스를 생성하고 두 프라이빗 가상 인터페이스를 모두 Direct Connect 게이트웨이에 연결합니다. Direct Connect 게이트웨이를 단일 VPC에 연결합니다.` },
      { k:'B', en:`Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new private virtual interface on the new connection, and connect the new private virtual interface to the single VPC.`, ko:`기존 프라이빗 가상 인터페이스를 유지합니다. 두 번째 Direct Connect 연결을 생성합니다. 새 연결에 새 프라이빗 가상 인터페이스를 생성하고 새 프라이빗 가상 인터페이스를 단일 VPC에 연결합니다.` },
      { k:'C', en:`Keep the existing private virtual interface. Create the second Direct Connect connection. Create a new public virtual interface on the new connection, and connect the new public virtual interface to the single VPC.`, ko:`기존 프라이빗 가상 인터페이스를 유지합니다. 두 번째 Direct Connect 연결을 생성합니다. 새 연결에 새 퍼블릭 가상 인터페이스를 생성하고 새 퍼블릭 가상 인터페이스를 단일 VPC에 연결합니다.` },
      { k:'D', en:`Provision a transit gateway. Delete the existing private virtual interface from the existing connection. Create the second Direct Connect connection. Create a new private virtual interface on each connection, and connect both private virtual interfaces to the transit gateway. Associate the transit gateway with the single VPC.`, ko:`전송 게이트웨이를 프로비저닝합니다. 기존 연결에서 기존 프라이빗 가상 인터페이스를 삭제합니다. 두 번째 Direct Connect 연결을 생성합니다. 각 연결마다 새 프라이빗 가상 인터페이스를 생성하고 두 프라이빗 가상 인터페이스를 모두 Transit Gateway에 연결합니다. 전송 게이트웨이를 단일 VPC와 연결합니다.` },
    ],
    answer: ["A"],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — Direct Connect Gateway (이중화 + 다중 리전 확장)</span></p>
<p><strong>Direct Connect Gateway(DXGW)</strong>는 전역(global) 리소스로, 하나의 DXGW에 여러 Direct Connect 연결의 private VIF를 연결하고, 여러 AWS 리전의 VPC를 연결할 수 있습니다.</p>
<p>두 요구사항을 모두 충족하는 이유:</p>
<ol>
  <li><strong>이중화:</strong> 두 DX 연결 각각에 private VIF를 생성하고 동일한 DXGW에 연결 → 하나의 연결이 장애나도 나머지 연결이 트래픽을 처리</li>
  <li><strong>다중 리전 확장:</strong> DXGW는 글로벌 리소스이므로 추후 다른 리전의 VPC를 동일한 DXGW에 연결 가능 → 기존 DX 연결 쌍을 재사용</li>
</ol>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 두 번째 DX 연결에 private VIF를 추가해 하나의 VPC에 직접 연결하면 이중화는 되지만, 다른 리전의 VPC로 확장하려면 각 리전마다 추가 구성이 필요합니다. DXGW처럼 글로벌 확장을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Public VIF는 AWS 퍼블릭 서비스(S3, DynamoDB 등)에 접근하기 위한 것으로, VPC 내 프라이빗 리소스에 접근하는 데 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Transit Gateway는 리전 내 VPC 간 라우팅 허브로, DX 연결과 통합 시 Transit VIF가 필요합니다. DXGW처럼 단일 리소스로 여러 리전 VPC에 글로벌하게 연결하는 기능이 없습니다. TGW 기반 DX 연결도 가능하지만 리전 간 확장에는 TGW 피어링이 추가로 필요합니다.</p>`,
    disc: [{ ans:'A', txt:'Direct Connect Gateway is a global resource — attach private VIFs from multiple DX connections to one DXGW, then associate VPCs from any Region to the same DXGW. This provides redundancy (2 DX connections) and multi-Region expansion (add VPCs in other Regions to the same DXGW without new DX connections).' }]
  },
  {
    n: 18,
    en: `A company has a web application that allows users to upload short videos. The videos are stored on Amazon EBS volumes and analyzed by custom recognition software for categorization.<br/>The website contains static content that has variable traffic with peaks in certain months. The architecture consists of Amazon EC2 instances running in an Auto Scaling group for the web application and EC2 instances running in an Auto Scaling group to process an Amazon SQS queue. The company wants to re-architect the application to reduce operational overhead using AWS managed services where possible and remove dependencies on third-party software.<br/>Which solution meets these requirements?`,
    ko: `한 회사에 사용자가 짧은 동영상을 업로드할 수 있는 웹 애플리케이션이 있습니다. 비디오는 Amazon EBS 볼륨에 저장되고 분류를 위해 사용자 정의 인식 소프트웨어로 분석됩니다.<br/>웹사이트에는 특정 달에 트래픽이 가장 많이 발생하는 가변적인 트래픽이 있는 정적 콘텐츠가 포함되어 있습니다. 아키텍처는 웹 애플리케이션용 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스와 Amazon SQS 대기열을 처리하기 위해 Auto Scaling 그룹에서 실행되는 EC2 인스턴스로 구성됩니다. 회사는 가능한 경우 AWS 관리형 서비스를 사용하여 운영 오버헤드를 줄이고 타사 소프트웨어에 대한 종속성을 제거하기 위해 애플리케이션을 재설계하려고 합니다.<br/>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use Amazon ECS containers for the web application and Spot instances for the Auto Scaling group that processes the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.`, ko:`웹 애플리케이션에는 Amazon ECS 컨테이너를 사용하고 SQS 대기열을 처리하는 Auto Scaling 그룹에는 스팟 인스턴스를 사용하십시오. 사용자 지정 소프트웨어를 Amazon Rekognition으로 교체하여 비디오를 분류합니다.` },
      { k:'B', en:`Store the uploaded videos in Amazon EFS and mount the file system to the EC2 instances for the web application. Process the SQS queue with an AWS Lambda function that calls the Amazon Rekognition API to categorize the videos.`, ko:`업로드된 비디오를 Amazon EFS에 저장하고 웹 애플리케이션용 EC2 인스턴스에 파일 시스템을 탑재합니다. Amazon Rekognition API를 호출하여 비디오를 분류하는 AWS Lambda 함수로 SQS 대기열을 처리합니다.` },
      { k:'C', en:`Host the web application in Amazon S3. Store the uploaded videos in Amazon S3. Use S3 event notification to publish events to the SQS queue. Process the SQS queue with an AWS Lambda function that calls the Amazon Rekognition API to categorize the videos.`, ko:`Amazon S3에서 웹 애플리케이션을 호스팅합니다. 업로드된 비디오를 Amazon S3에 저장합니다. S3 이벤트 알림을 사용하여 SQS 대기열에 이벤트를 게시합니다. Amazon Rekognition API를 호출하여 비디오를 분류하는 AWS Lambda 함수로 SQS 대기열을 처리합니다.` },
      { k:'D', en:`Use AWS Elastic Beanstalk to launch EC2 instances in an Auto Scaling group for the web application and launch a worker environment to process the SQS queue. Replace the custom software with Amazon Rekognition to categorize the videos.`, ko:`AWS Elastic Beanstalk를 사용하여 웹 애플리케이션용 Auto Scaling 그룹에서 EC2 인스턴스를 시작하고 SQS 대기열을 처리하기 위한 작업자 환경을 시작합니다. 사용자 지정 소프트웨어를 Amazon Rekognition으로 교체하여 비디오를 분류합니다.` },
    ],
    answer: ["C"],
    vote: '87% C, 13% D',
    explain: `<p><span class="mark-ok">✅ C — 완전 서버리스 아키텍처 (S3 + SQS + Lambda + Rekognition)</span></p>
<p>운영 오버헤드 최소화와 타사 소프트웨어 제거를 모두 달성하는 완전 서버리스 구조입니다.</p>
<ul>
  <li><strong>S3 정적 웹 호스팅:</strong> EC2·ALB 관리 불필요, 트래픽 변동에 자동 대응</li>
  <li><strong>S3에 비디오 저장:</strong> EBS 볼륨 관리 불필요, 확장성 무제한, 높은 내구성(11-nine)</li>
  <li><strong>S3 이벤트 → SQS → Lambda:</strong> 비디오 업로드 즉시 SQS 메시지 생성, Lambda가 자동 트리거되어 처리</li>
  <li><strong>Amazon Rekognition:</strong> AWS 관리형 ML 서비스로 타사 인식 소프트웨어를 대체, 유지보수 불필요</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ECS 컨테이너는 여전히 클러스터·컨테이너 관리가 필요합니다. Spot 인스턴스는 중단될 수 있어 SQS 처리 안정성에 영향을 줍니다. 운영 오버헤드가 완전히 제거되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Lambda로 SQS를 처리하고 Rekognition을 쓰는 것은 좋지만, 여전히 EC2 인스턴스와 EFS를 관리해야 하는 웹 애플리케이션 계층이 남아있습니다. 완전 서버리스가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — Elastic Beanstalk는 EC2 기반이므로 인스턴스 패치·관리 오버헤드가 발생합니다. 서버리스 대비 운영 부담이 크며, EBS 볼륨 의존성도 유지됩니다.</p>`,
    disc: [{ ans:'C', txt:'Fully serverless: S3 static hosting eliminates EC2 management for web tier. Videos stored in S3 trigger SQS via S3 event notifications. Lambda processes SQS messages and calls Rekognition API for video categorization — zero EC2/ECS instances to manage, zero third-party software dependency.' }]
  },
  {
    n: 19,
    en: `A company has a serverless application comprised of Amazon CloudFront, Amazon API Gateway, and AWS Lambda functions. The current deployment process of the application code is to create a new version number of the Lambda function and run an AWS CLI script to update. If the new function version has errors, another CLI script reverts by deploying the previous working version of the function. The company would like to decrease the time to deploy new versions of the application logic provided by the Lambda functions, and also reduce the time to detect and revert when errors are identified.<br/>How can this be accomplished?`,
    ko: `회사에는 Amazon CloudFront, Amazon API Gateway 및 AWS Lambda 기능으로 구성된 서버리스 애플리케이션이 있습니다. 애플리케이션 코드의 현재 배포 프로세스는 Lambda 함수의 새 버전 번호를 생성하고 AWS CLI 스크립트를 실행하여 업데이트하는 것입니다. 새 함수 버전에 오류가 있는 경우 다른 CLI 스크립트는 함수의 이전 작업 버전을 배포하여 되돌립니다. 회사는 Lambda 함수가 제공하는 애플리케이션 로직의 새 버전을 배포하는 시간을 줄이고, 오류가 식별될 때 감지하고 되돌리는 시간도 줄이고자 합니다.<br/>이것이 어떻게 이루어질 수 있습니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create and deploy nested AWS CloudFormation stacks with the parent stack consisting of the AWS CloudFront distribution and API Gateway, and the child stack containing the Lambda function. For changes to Lambda, create an AWS CloudFormation change set and deploy; if errors are triggered, revert the AWS CloudFormation change set to the previous version.`, ko:`AWS CloudFront 배포 및 API 게이트웨이로 구성된 상위 스택과 Lambda 함수가 포함된 하위 스택을 사용하여 중첩된 AWS CloudFormation 스택을 생성하고 배포합니다. Lambda를 변경하려면 AWS CloudFormation 변경 세트를 생성하고 배포하세요. 오류가 발생하면 AWS CloudFormation 변경 세트를 이전 버전으로 되돌립니다.` },
      { k:'B', en:`Use AWS SAM and built-in AWS CodeDeploy to deploy the new Lambda version, gradually shift traffic to the new version, and use pre-traffic and post-traffic test functions to verify code. Rollback if Amazon CloudWatch alarms are triggered.`, ko:`AWS SAM 및 내장된 AWS CodeDeploy를 사용하여 새 Lambda 버전을 배포하고, 점차적으로 트래픽을 새 버전으로 이동하고, 트래픽 전 및 트래픽 후 테스트 기능을 사용하여 코드를 확인합니다. Amazon CloudWatch 경보가 트리거되면 롤백합니다.` },
      { k:'C', en:`Refactor the AWS CLI scripts into a single script that deploys the new Lambda version. When deployment is completed, the script tests execute. If errors are detected, revert to the previous Lambda version.`, ko:`AWS CLI 스크립트를 새 Lambda 버전을 배포하는 단일 스크립트로 리팩터링합니다. 배포가 완료되면 스크립트 테스트가 실행됩니다. 오류가 감지되면 이전 Lambda 버전으로 되돌립니다.` },
      { k:'D', en:`Create and deploy an AWS CloudFormation stack that consists of a new API Gateway endpoint that references the new Lambda version. Change the CloudFront origin to the new API Gateway endpoint, monitor errors and if detected, change the AWS CloudFront origin to the previous API Gateway endpoint.`, ko:`새로운 Lambda 버전을 참조하는 새로운 API 게이트웨이 엔드포인트로 구성된 AWS CloudFormation 스택을 생성하고 배포합니다. CloudFront 오리진을 새 API 게이트웨이 엔드포인트로 변경하고, 오류를 모니터링하고, 감지되면 AWS CloudFront 오리진을 이전 API 게이트웨이 엔드포인트로 변경합니다.` },
    ],
    answer: ["B"],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS SAM + CodeDeploy Canary/Linear 배포 + CloudWatch 자동 롤백</span></p>
<p>AWS SAM의 <code>DeploymentPreference</code> 설정만으로 CodeDeploy 기반 카나리 배포를 자동화합니다.</p>
<ul>
  <li><strong>점진적 트래픽 이전:</strong> <code>Canary10Percent5Minutes</code> 등의 유형으로 처음 10%만 새 버전에 라우팅하고 5분 후 나머지를 전환 → 빠른 배포 + 위험 최소화</li>
  <li><strong>Pre/Post-traffic hooks:</strong> 배포 전후에 검증용 Lambda 함수를 자동 실행하여 테스트</li>
  <li><strong>CloudWatch 알람 연동:</strong> 에러율·지연시간 알람 트리거 시 자동으로 이전 버전으로 롤백 → 감지·복구 시간 단축</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFormation change set은 트래픽 이전 없이 즉시 전환합니다. 점진적 배포 및 자동 롤백 기능이 없어 오류 감지 시간이 길어집니다.</p>
<p><span class="mark-no">❌ C</span> — 단일 CLI 스크립트로 리팩터링해도 여전히 즉각적 전환이며 수동 테스트입니다. 자동 트래픽 이전과 CloudWatch 알람 기반 자동 롤백이 없어 현재 문제를 근본적으로 해결하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — API Gateway 엔드포인트를 새로 만들고 CloudFront 오리진을 변경하는 방식은 배포마다 새 엔드포인트를 관리해야 하며, 롤백도 수동 오리진 변경이 필요합니다. 운영 복잡도가 증가합니다.</p>`,
    disc: [{ ans:'B', txt:'AWS SAM DeploymentPreference with CodeDeploy: specify canary/linear traffic shifting, define pre/post-traffic test hooks, configure CloudWatch alarms for automatic rollback. This automates gradual rollout (reduces risk) and enables instant automated rollback (reduces detection+recovery time) — exactly what the question asks for.' }]
  },
  {
    n: 20,
    en: `A company is planning to store a large number of archived documents and make the documents available to employees through the corporate intranet. Employees will access the system by connecting through a client VPN service that is attached to a VPC. The data must not be accessible to the public.<br/>The documents that the company is storing are copies of data that is held on physical media elsewhere. The number of requests will be low. Availability and speed of retrieval are not concerns of the company.<br/>Which solution will meet these requirements at the LOWEST cost?`,
    ko: `한 회사에서는 대량의 보관 문서를 저장하고 회사 인트라넷을 통해 직원들이 해당 문서를 사용할 수 있도록 할 계획입니다. 직원은 VPC에 연결된 클라이언트 VPN 서비스를 통해 연결하여 시스템에 액세스합니다. 데이터는 대중이 접근할 수 없어야 합니다.<br/>회사가 저장하고 있는 문서는 다른 곳의 물리적 매체에 보관된 데이터의 복사본입니다. 요청 횟수가 적습니다. 가용성과 검색 속도는 회사의 관심사가 아닙니다.<br/>가장 저렴한 비용으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an Amazon S3 bucket. Configure the S3 bucket to use the S3 One Zone-Infrequent Access (S3 One Zone-IA) storage class as default. Configure the S3 bucket for website hosting. Create an S3 interface endpoint. Configure the S3 bucket to allow access only through that endpoint.`, ko:`Amazon S3 버킷을 생성합니다. S3 One Zone-IA(S3 One Zone-IA) 스토리지 클래스를 기본으로 사용하도록 S3 버킷을 구성합니다. 웹사이트 호스팅을 위해 S3 버킷을 구성합니다. S3 인터페이스 엔드포인트를 생성합니다. 해당 엔드포인트를 통해서만 액세스를 허용하도록 S3 버킷을 구성합니다.` },
      { k:'B', en:`Launch an Amazon EC2 instance that runs a web server. Attach an Amazon Elastic File System (Amazon EFS) file system to store the archived data in the EFS One Zone-Infrequent Access (EFS One Zone-IA) storage class Configure the instance security groups to allow access only from private networks.`, ko:`웹 서버를 실행하는 Amazon EC2 인스턴스를 시작합니다. Amazon EFS 파일 시스템을 연결하여 EFS One Zone-IA 스토리지 클래스에 보관된 데이터를 저장합니다. 프라이빗 네트워크에서만 액세스를 허용하도록 인스턴스 보안 그룹을 구성합니다.` },
      { k:'C', en:`Launch an Amazon EC2 instance that runs a web server Attach an Amazon Elastic Block Store (Amazon EBS) volume to store the archived data. Use the Cold HDD (sc1) volume type. Configure the instance security groups to allow access only from private networks.`, ko:`웹 서버를 실행하는 Amazon EC2 인스턴스를 시작합니다. Amazon EBS 볼륨을 연결하여 보관된 데이터를 저장합니다. Cold HDD(sc1) 볼륨 유형을 사용합니다. 프라이빗 네트워크에서만 액세스를 허용하도록 인스턴스 보안 그룹을 구성합니다.` },
      { k:'D', en:`Create an Amazon S3 bucket. Configure the S3 bucket to use the S3 Glacier Deep Archive storage class as default. Configure the S3 bucket for website hosting. Create an S3 interface endpoint. Configure the S3 bucket to allow access only through that endpoint.`, ko:`Amazon S3 버킷을 생성합니다. S3 Glacier Deep Archive 스토리지 클래스를 기본값으로 사용하도록 S3 버킷을 구성합니다. 웹사이트 호스팅을 위해 S3 버킷을 구성합니다. S3 인터페이스 엔드포인트를 생성합니다. 해당 엔드포인트를 통해서만 액세스를 허용하도록 S3 버킷을 구성합니다.` },
    ],
    answer: ["A"],
    vote: '66% A, 33% D',
    explain: `<p><span class="mark-ok">✅ A — S3 One Zone-IA + S3 인터페이스 엔드포인트</span></p>
<p><strong>왜 S3 One Zone-IA인가:</strong></p>
<ul>
  <li>문서가 "물리적 매체에도 원본이 있는 복사본"이므로, 단일 AZ 손실 시 데이터 유실을 감수할 수 있습니다.</li>
  <li>S3 Standard-IA 대비 약 20% 저렴하며, S3 One Zone-IA는 직접 접근이 가능합니다.</li>
  <li>요청이 적고 가용성·속도가 중요하지 않아 IA 클래스의 조회 요금도 문제없습니다.</li>
</ul>
<p><strong>S3 인터페이스 엔드포인트:</strong> VPN으로 VPC에 연결한 직원들이 인터넷 없이 S3에 접근하고, 버킷 정책으로 엔드포인트 경유 요청만 허용해 공개 접근을 차단합니다.</p>
<p><strong>왜 D(Glacier Deep Archive)가 아닌가:</strong> Glacier Deep Archive는 버킷의 기본 스토리지 클래스로 설정할 수 없습니다(lifecycle 정책으로만 이전 가능). 또한 객체 조회 시 12~48시간의 복원 대기 시간이 필요해 인트라넷에서 직접 다운로드하는 시나리오에는 부적합합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ D</span> — Glacier Deep Archive는 버킷 기본 스토리지 클래스로 설정 불가(수명 주기 정책으로만 이전). 조회 시 최대 12~48시간 복원 시간이 필요해 직원이 즉시 다운로드하는 시나리오에 부적합합니다.</p>
<p><span class="mark-no">❌ B, C</span> — EC2 인스턴스를 운영하면 컴퓨팅 비용(24/7)이 발생합니다. 요청이 적고 저장만 하는 아카이브 시나리오에서 EC2 기반 솔루션은 S3 대비 비용이 훨씬 높습니다. S3 + 인터페이스 엔드포인트가 가장 저렴한 옵션입니다.</p>`,
    disc: [{ ans:'A', txt:'"Copies of data held on physical media elsewhere" = single-AZ loss acceptable → One Zone-IA cheaper than Standard-IA. Glacier Deep Archive cannot be set as bucket default class and requires 12-48hr restore time, making direct employee downloads impractical. S3 interface endpoint + bucket policy restricts access to VPN-connected VPC users only.' }]
  }
];
