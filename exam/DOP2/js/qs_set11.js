window.QS_SET11 = [
{
  n: 101,
  en: `A company recently created a new AWS Control Tower landing zone in a new organization in AWS Organizations. The landing zone must be able to demonstrate compliance with the Center for Internet Security (CIS) Benchmarks for AWS Foundations.<br><br>The company's security team wants to use AWS Security Hub to view compliance across all accounts. Only the security team can be allowed to view aggregated Security Hub findings. In addition, specific users must be able to view findings from their own accounts within the organization. All accounts must be enrolled in Security Hub after the accounts are created.<br><br>Which combination of steps will meet these requirements in the MOST automated way? (Choose three.)`,
  ko: `한 회사가 최근 AWS Organizations의 새 조직에 새 AWS Control Tower 랜딩 존을 만들었습니다. 랜딩 존은 AWS Foundations에 대한 CIS(Center for Internet Security) 벤치마크를 준수해야 합니다.<br><br>회사의 보안 팀은 AWS Security Hub를 사용하여 모든 계정의 준수 여부를 확인하려고 합니다. 보안 팀만 집계된 Security Hub 결과를 볼 수 있어야 합니다. 또한, 특정 사용자는 조직 내 자신의 계정에서 결과를 볼 수 있어야 합니다. 모든 계정은 생성 후 Security Hub에 등록되어야 합니다.<br><br>가장 자동화된 방식으로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (세 가지 선택)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Turn on trusted access for Security Hub in the organization's management account. Create a new security account by using AWS Control Tower. Configure the new security account as the delegated administrator account for Security Hub. In the new security account, provide Security Hub with the CIS Benchmarks for AWS Foundations standards.`, ko:`조직의 관리 계정에서 Security Hub에 대한 신뢰할 수 있는 액세스를 켭니다. AWS Control Tower를 사용하여 새 보안 계정을 만듭니다. 새 보안 계정을 Security Hub의 위임된 관리자 계정으로 구성합니다. 새 보안 계정에서 Security Hub에 AWS Foundations 표준에 대한 CIS 벤치마크를 제공합니다.` },
    { k:'B', en:`Turn on trusted access for Security Hub in the organization's management account. From the management account, provide Security Hub with the CIS Benchmarks for AWS Foundations standards.`, ko:`조직의 관리 계정에서 Security Hub에 대한 신뢰할 수 있는 액세스를 켭니다. 관리 계정에서 Security Hub에 AWS Foundations 표준에 대한 CIS 벤치마크를 제공합니다.` },
    { k:'C', en:`Create an AWS IAM Identity Center (AWS Single Sign-On) permission set that includes the required permissions. Use the CreateAccountAssignment API operation to associate the security team users with the permission set and with the delegated security account.`, ko:`필요한 권한을 포함하는 AWS IAM Identity Center(AWS Single Sign-On) 권한 집합을 만듭니다. CreateAccountAssignment API 작업을 사용하여 보안 팀 사용자를 권한 집합 및 위임된 보안 계정과 연결합니다.` },
    { k:'D', en:`Create an SCP that explicitly denies any user who is not on the security team from accessing Security Hub.`, ko:`보안 팀에 속하지 않은 사용자가 Security Hub에 액세스하는 것을 명시적으로 거부하는 SCP를 만듭니다.` },
    { k:'E', en:`In Security Hub, turn on automatic enablement.`, ko:`Security Hub에서 자동 활성화를 켭니다.` },
    { k:'F', en:`In the organization's management account, create an Amazon EventBridge rule that reacts to the CreateManagedAccount event. Create an AWS Lambda function that uses the Security Hub CreateMembers API operation to add new accounts to Security Hub. Configure the EventBridge rule to invoke the Lambda function.`, ko:`조직의 관리 계정에서 CreateManagedAccount 이벤트에 반응하는 Amazon EventBridge 규칙을 만듭니다. Security Hub CreateMembers API 작업을 사용하여 새 계정을 Security Hub에 추가하는 AWS Lambda 함수를 만듭니다. Lambda 함수를 호출하도록 EventBridge 규칙을 구성합니다.` },
  ],
  answer: ['A','C','E'],
  vote: '71% ACE',
  explain: `<p><span class="mark-ok">✅ A — 위임된 관리자 계정 설정</span></p><p>관리 계정에서 trusted access를 켜고, Control Tower로 별도의 보안 계정을 생성한 뒤 Security Hub의 위임된 관리자로 지정합니다. 이렇게 하면 보안 팀만 집계 결과를 볼 수 있는 전용 계정이 만들어집니다.</p>
<p><span class="mark-ok">✅ C — IAM Identity Center 권한 집합</span></p><p>Control Tower 랜딩 존에는 IAM Identity Center(SSO)가 이미 포함되어 있습니다. CreateAccountAssignment API로 보안 팀 사용자를 위임된 보안 계정과 연결하여 접근 권한을 부여합니다.</p>
<p><span class="mark-ok">✅ E — 자동 활성화(Automatic Enablement)</span></p><p>Security Hub의 자동 활성화 기능을 켜면 조직에 새 계정이 추가될 때 자동으로 Security Hub에 등록됩니다. 이는 F(EventBridge + Lambda)보다 더 간단하고 자동화된 방법입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 관리 계정에서 직접 제공하면 위임된 관리자 계정 없이 설정되어, 보안 팀만 결과를 볼 수 있다는 요구사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — SCP는 접근을 거부하지만, 자신의 계정에서 결과를 확인해야 하는 일반 사용자의 합법적인 접근까지 차단할 수 있습니다.</p>
<p><span class="mark-no">❌ F</span> — E(자동 활성화)와 동일한 효과이지만 훨씬 복잡합니다. "가장 자동화된 방식"이라는 조건에서 E가 우선합니다.</p>`,
  disc: [{ ans:'ACE (71%)', txt:'Control Tower 랜딩 존은 IAM Identity Center를 기본 포함하며, 위임 관리자 + SSO 권한 집합 + 자동 활성화 조합이 가장 자동화된 해결책이라는 의견이 다수. D는 정상 사용자 접근을 차단할 수 있어 부적합하다는 지적.' }]
},
{
  n: 102,
  en: `A company runs applications in AWS accounts that are in an organization in AWS Organizations. The applications use Amazon EC2 instances and Amazon S3.<br><br>The company wants to detect potentially compromised EC2 instances, suspicious network activity, and unusual API activity in its existing AWS accounts and in any AWS accounts that the company creates in the future. When the company detects one of these events, the company wants to use an existing Amazon Simple Notification Service (Amazon SNS) topic to send a notification to its operational support team for investigation and remediation.<br><br>Which solution will meet these requirements in accordance with AWS best practices?`,
  ko: `한 회사가 AWS Organizations의 조직에 있는 AWS 계정에서 애플리케이션을 실행합니다. 이 애플리케이션은 Amazon EC2 인스턴스와 Amazon S3를 사용합니다.<br><br>이 회사는 기존 AWS 계정과 미래에 생성하는 모든 AWS 계정에서 잠재적으로 손상된 EC2 인스턴스, 의심스러운 네트워크 활동, 비정상적인 API 활동을 감지하려고 합니다. 이러한 이벤트가 감지되면 기존 Amazon SNS 주제를 사용하여 조사 및 수정을 위해 운영 지원 팀에 알림을 보내려고 합니다.<br><br>AWS 모범 사례에 따라 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`In the organization's management account, configure an AWS account as the Amazon GuardDuty administrator account. In the GuardDuty administrator account, add the company's existing AWS accounts to GuardDuty as members. In the GuardDuty administrator account, create an Amazon EventBridge rule with an event pattern to match GuardDuty events and to forward matching events to the SNS topic.`, ko:`조직의 관리 계정에서 AWS 계정을 Amazon GuardDuty 관리자 계정으로 구성합니다. GuardDuty 관리자 계정에서 회사의 기존 AWS 계정을 GuardDuty 멤버로 추가합니다. GuardDuty 관리자 계정에서 GuardDuty 이벤트와 일치하는 이벤트 패턴으로 Amazon EventBridge 규칙을 만들고, 일치하는 이벤트를 SNS 주제로 전달합니다.` },
    { k:'B', en:`In the organization's management account, configure Amazon GuardDuty to add newly created AWS accounts by invitation and to send invitations to the existing AWS accounts. Create an AWS CloudFormation stack set that accepts the GuardDuty invitation and creates an Amazon EventBridge rule. Configure the rule with an event pattern to match GuardDuty events and to forward matching events to the SNS topic. Configure the CloudFormation stack set to deploy into all AWS accounts in the organization.`, ko:`조직의 관리 계정에서 Amazon GuardDuty를 구성하여 초대를 통해 새로 생성된 AWS 계정을 추가하고 기존 AWS 계정에 초대를 보냅니다. GuardDuty 초대를 수락하고 Amazon EventBridge 규칙을 만드는 AWS CloudFormation 스택 세트를 만듭니다. GuardDuty 이벤트와 일치하고 일치하는 이벤트를 SNS 주제로 전달하도록 이벤트 패턴으로 규칙을 구성합니다. 조직의 모든 AWS 계정에 배포하도록 CloudFormation 스택 세트를 구성합니다.` },
    { k:'C', en:`In the organization's management account, create an AWS CloudTrail organization trail. Activate the organization trail in all AWS accounts in the organization. Create an SCP that enables VPC Flow Logs in each account in the organization. Configure AWS Security Hub for the organization. Create an Amazon EventBridge rule with an event pattern to match Security Hub events and to forward matching events to the SNS topic.`, ko:`조직의 관리 계정에서 AWS CloudTrail 조직 트레일을 만듭니다. 조직의 모든 AWS 계정에서 조직 트레일을 활성화합니다. 조직의 각 계정에서 VPC Flow Logs를 활성화하는 SCP를 만듭니다. 조직에 AWS Security Hub를 구성합니다. Security Hub 이벤트를 일치시키고 일치하는 이벤트를 SNS 주제로 전달하는 이벤트 패턴이 있는 Amazon EventBridge 규칙을 만듭니다.` },
    { k:'D', en:`In the organization's management account, configure an AWS account as the AWS CloudTrail administrator account. In the CloudTrail administrator account, create a CloudTrail organization trail. Add the company's existing AWS accounts to the organization trail. Create an SCP that enables VPC Flow Logs in each account in the organization. Configure AWS Security Hub for the organization. Create an Amazon EventBridge rule with an event pattern to match Security Hub events and to forward matching events to the SNS topic.`, ko:`조직의 관리 계정에서 AWS 계정을 AWS CloudTrail 관리자 계정으로 구성합니다. CloudTrail 관리자 계정에서 CloudTrail 조직 트레일을 만듭니다. 회사의 기존 AWS 계정을 조직 트레일에 추가합니다. 조직의 각 계정에서 VPC Flow Logs를 활성화하는 SCP를 만듭니다. 조직에 AWS Security Hub를 구성합니다. Security Hub 이벤트를 일치시키고 일치하는 이벤트를 SNS 주제로 전달하는 이벤트 패턴이 있는 Amazon EventBridge 규칙을 만듭니다.` },
  ],
  answer: ['A'],
  vote: '87% A',
  explain: `<p><span class="mark-ok">✅ A — Amazon GuardDuty 위임 관리자 사용</span></p><p>"손상된 EC2, 의심스러운 네트워크 활동, 비정상적인 API 활동" 감지는 Amazon GuardDuty의 핵심 기능입니다. AWS Organizations에서 GuardDuty 위임 관리자 계정을 지정하면 기존 및 미래의 모든 계정을 자동으로 관리할 수 있습니다. 초대 방식(B)은 조직 외부 계정에 사용되는 방식이며, GuardDuty 위임 관리자를 통한 조직 수준 설정이 AWS 모범 사례입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 조직 내 계정에 대해 초대 방식은 불필요하며, CloudFormation StackSet을 통한 수동 구성은 위임 관리자 방식보다 복잡합니다.</p>
<p><span class="mark-no">❌ C, D</span> — CloudTrail과 Security Hub는 GuardDuty가 제공하는 위협 감지 기능을 직접 대체하지 못합니다. 손상된 EC2 등의 감지에는 GuardDuty가 적합합니다.</p>`,
  disc: [{ ans:'A (87%)', txt:'조직 내 모든 계정에 GuardDuty를 적용하려면 위임 관리자(Delegated Administrator) 방식이 모범 사례이며, 초대 방식은 조직 외부 계정에만 사용된다는 점이 핵심 근거.' }]
},
{
  n: 103,
  en: `A company's DevOps engineer is working in a multi-account environment. The company uses AWS Transit Gateway to route all outbound traffic through a network operations account. In the network operations account, all account traffic passes through a firewall appliance for inspection before the traffic goes to an internet gateway.<br><br>The firewall appliance sends logs to Amazon CloudWatch Logs and includes event severities of CRITICAL, HIGH, MEDIUM, LOW, and INFO. The security team wants to receive an alert if any CRITICAL events occur.<br><br>What should the DevOps engineer do to meet these requirements?`,
  ko: `한 회사의 DevOps 엔지니어가 다중 계정 환경에서 작업하고 있습니다. 회사는 AWS Transit Gateway를 사용하여 모든 아웃바운드 트래픽을 네트워크 운영 계정을 통해 라우팅합니다. 네트워크 운영 계정에서 모든 트래픽은 인터넷 게이트웨이로 이동하기 전에 검사를 위해 방화벽 어플라이언스를 통과합니다.<br><br>방화벽 어플라이언스는 Amazon CloudWatch Logs에 로그를 전송하며, CRITICAL, HIGH, MEDIUM, LOW, INFO의 이벤트 심각도를 포함합니다. 보안 팀은 CRITICAL 이벤트가 발생하면 알림을 받고 싶어합니다.<br><br>DevOps 엔지니어는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon CloudWatch Synthetics canary to monitor the firewall state. If the firewall reaches a CRITICAL state or logs a CRITICAL event, use a CloudWatch alarm to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team's email address to the topic.`, ko:`방화벽 상태를 모니터링하기 위해 Amazon CloudWatch Synthetics 카나리아를 만듭니다. 방화벽이 CRITICAL 상태에 도달하거나 CRITICAL 이벤트를 로깅하는 경우, CloudWatch 알람을 사용하여 Amazon SNS 주제에 알림을 게시합니다. 보안 팀의 이메일 주소를 주제에 구독합니다.` },
    { k:'B', en:`Create an Amazon CloudWatch metric filter by using a search for CRITICAL events. Publish a custom metric for the finding. Use a CloudWatch alarm based on the custom metric to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team's email address to the topic.`, ko:`CRITICAL 이벤트 검색을 사용하여 Amazon CloudWatch 메트릭 필터를 만듭니다. 발견 사항에 대한 사용자 지정 메트릭을 게시합니다. 사용자 지정 메트릭을 기반으로 CloudWatch 알람을 사용하여 Amazon SNS 주제에 알림을 게시합니다. 보안 팀의 이메일 주소를 주제에 구독합니다.` },
    { k:'C', en:`Enable Amazon GuardDuty in the network operations account. Configure GuardDuty to monitor flow logs. Create an Amazon EventBridge event rule that is invoked by GuardDuty events that are CRITICAL. Define an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the security team's email address to the topic.`, ko:`네트워크 운영 계정에서 Amazon GuardDuty를 활성화합니다. GuardDuty를 구성하여 흐름 로그를 모니터링합니다. CRITICAL GuardDuty 이벤트에서 호출되는 Amazon EventBridge 이벤트 규칙을 만듭니다. Amazon SNS 주제를 대상으로 정의합니다. 보안 팀의 이메일 주소를 주제에 구독합니다.` },
    { k:'D', en:`Use AWS Firewall Manager to apply consistent policies across all accounts. Create an Amazon EventBridge event rule that is invoked by Firewall Manager events that are CRITICAL. Define an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the security team's email address to the topic.`, ko:`AWS Firewall Manager를 사용하여 모든 계정에 일관된 정책을 적용합니다. CRITICAL Firewall Manager 이벤트에 의해 호출되는 Amazon EventBridge 이벤트 규칙을 만듭니다. Amazon SNS 주제를 대상으로 정의합니다. 보안 팀의 이메일 주소를 주제에 구독합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — CloudWatch 메트릭 필터 + 알람 + SNS</span></p><p>방화벽 어플라이언스의 로그가 이미 Amazon CloudWatch Logs로 전송되고 있습니다. 따라서 CRITICAL 이벤트를 검색하는 CloudWatch 메트릭 필터를 생성하고, 해당 메트릭에 알람을 설정하여 SNS 주제로 알림을 보내는 것이 가장 직접적이고 정확한 해결책입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudWatch Synthetics는 엔드포인트를 모니터링하는 도구로, 로그 이벤트 분석에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — GuardDuty는 자체적인 위협 감지 서비스이며, 이미 CloudWatch Logs에 있는 커스텀 로그를 분석하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Firewall Manager를 사용하지 않는 환경이며, 이 옵션은 기존 CloudWatch 로그를 활용하지 않습니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'로그가 이미 CloudWatch Logs에 있으므로 메트릭 필터 → 알람 → SNS가 가장 단순하고 직접적인 접근법. GuardDuty나 Firewall Manager는 이 시나리오와 무관.' }]
},
{
  n: 104,
  en: `A company is divided into teams. Each team has an AWS account, and all the accounts are in an organization in AWS Organizations. Each team must retain full administrative rights to its AWS account. Each team also must be allowed to access only AWS services that the company approves for use. AWS services must gain approval through a request and approval process.<br><br>How should a DevOps engineer configure the accounts to meet these requirements?`,
  ko: `한 회사가 팀으로 나뉩니다. 각 팀에는 AWS 계정이 있으며, 모든 계정은 AWS Organizations의 조직에 있습니다. 각 팀은 자신의 AWS 계정에 대한 전체 관리 권한을 유지해야 합니다. 또한, 각 팀은 회사에서 사용을 승인한 AWS 서비스에만 액세스할 수 있어야 합니다. AWS 서비스는 요청 및 승인 프로세스를 통해 승인을 받아야 합니다.<br><br>DevOps 엔지니어는 이러한 요구 사항을 충족하기 위해 계정을 어떻게 구성해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS CloudFormation StackSets to provision IAM policies in each account to deny access to restricted AWS services. In each account, configure AWS Config rules that ensure that the policies are attached to IAM principals in the account.`, ko:`AWS CloudFormation StackSets를 사용하여 각 계정에서 IAM 정책을 프로비저닝하여 제한된 AWS 서비스에 대한 액세스를 거부합니다. 각 계정에서 정책이 계정의 IAM 주체에 연결되도록 하는 AWS Config 규칙을 구성합니다.` },
    { k:'B', en:`Use AWS Control Tower to provision the accounts into OUs within the organization. Configure AWS Control Tower to enable AWS IAM Identity Center (AWS Single Sign-On). Configure IAM Identity Center to provide administrative access. Include deny policies on user roles for restricted AWS services.`, ko:`AWS Control Tower를 사용하여 조직 내의 OU에 계정을 프로비저닝합니다. AWS Control Tower를 구성하여 AWS IAM Identity Center(AWS Single Sign-On)를 활성화합니다. IAM Identity Center를 구성하여 관리 액세스를 제공합니다. 제한된 AWS 서비스에 대한 사용자 역할에 거부 정책을 포함합니다.` },
    { k:'C', en:`Place all the accounts under a new top-level OU within the organization. Create an SCP that denies access to restricted AWS services. Attach the SCP to the OU.`, ko:`조직 내의 새로운 최상위 OU에 모든 계정을 배치합니다. 제한된 AWS 서비스에 대한 액세스를 거부하는 SCP를 만듭니다. SCP를 OU에 연결합니다.` },
    { k:'D', en:`Create an SCP that allows access to only approved AWS services. Attach the SCP to the root OU of the organization. Remove the FullAWSAccess SCP from the root OU of the organization.`, ko:`승인된 AWS 서비스에만 액세스할 수 있는 SCP를 만듭니다. SCP를 조직의 루트 OU에 연결합니다. 조직의 루트 OU에서 FullAWSAccess SCP를 제거합니다.` },
  ],
  answer: ['D'],
  vote: '53% D',
  explain: `<p><span class="mark-ok">✅ D — 허용 목록(Allow-list) 기반 SCP</span></p><p>AWS 서비스가 요청 및 승인 프로세스를 통해 승인되어야 한다는 요구사항은 화이트리스트(허용 목록) 전략이 필요함을 의미합니다. FullAWSAccess SCP를 제거하고 승인된 서비스만 허용하는 SCP를 루트 OU에 연결하면, 모든 팀 계정에서 승인된 서비스만 사용할 수 있게 됩니다. SCP는 관리 계정에는 영향을 미치지 않으므로, 각 팀의 관리 권한은 유지됩니다. C(거부 목록)는 새로운 AWS 서비스가 출시될 때마다 거부 목록에 추가해야 하는 유지보수 부담이 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 로컬 계정 관리자가 IAM 정책을 변경할 수 있어 제어가 불완전합니다.</p>
<p><span class="mark-no">❌ B</span> — 복잡하며, 로컬 관리자가 관리 권한을 통해 우회할 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — 거부 목록 방식은 승인되지 않은 새 서비스에 대한 묵시적 허용이 발생하여 요구사항을 위반할 수 있습니다.</p>`,
  disc: [{ ans:'D (53%) vs C (45%)', txt:'D(허용 목록)는 새 서비스 출시 시 자동 차단되는 장점이 있고, C(거부 목록)는 관리가 더 간단하다는 의견이 팽팽히 갈림. AWS 권장 사항상 D가 승인 기반 접근에 더 적합.' }]
},
{
  n: 105,
  en: `A DevOps engineer used an AWS CloudFormation custom resource to set up AD Connector. The AWS Lambda function ran and created AD Connector, but CloudFormation is not transitioning from CREATE_IN_PROGRESS to CREATE_COMPLETE.<br><br>Which action should the engineer take to resolve this issue?`,
  ko: `DevOps 엔지니어가 AWS CloudFormation 사용자 지정 리소스를 사용하여 AD 커넥터를 설정했습니다. AWS Lambda 함수가 실행되어 AD 커넥터를 생성했지만 CloudFormation이 CREATE_IN_PROGRESS에서 CREATE_COMPLETE로 전환되지 않습니다.<br><br>이 문제를 해결하기 위해 엔지니어는 어떤 조치를 취해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Ensure the Lambda function code has exited successfully.`, ko:`Lambda 함수 코드가 성공적으로 종료되었는지 확인합니다.` },
    { k:'B', en:`Ensure the Lambda function code returns a response to the pre-signed URL.`, ko:`Lambda 함수 코드가 미리 서명된 URL에 대한 응답을 반환하는지 확인합니다.` },
    { k:'C', en:`Ensure the Lambda function IAM role has cloudformation:UpdateStack permissions for the stack ARN.`, ko:`Lambda 함수 IAM 역할에 스택 ARN에 대한 cloudformation:UpdateStack 권한이 있는지 확인합니다.` },
    { k:'D', en:`Ensure the Lambda function IAM role has ds:ConnectDirectory permissions for the AWS account.`, ko:`Lambda 함수 IAM 역할에 AWS 계정에 대한 ds:ConnectDirectory 권한이 있는지 확인합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 미리 서명된 URL에 응답 반환</span></p><p>CloudFormation 사용자 지정 리소스에서 Lambda 함수는 작업 완료 후 반드시 CloudFormation이 제공한 미리 서명된 URL(ResponseURL)에 SUCCESS 또는 FAILED 응답을 보내야 합니다. 이 응답이 없으면 CloudFormation은 무한히 CREATE_IN_PROGRESS 상태로 유지되다가 결국 타임아웃됩니다. Lambda가 AD Connector를 생성하는 데 성공했더라도, CloudFormation에 완료 신호를 보내지 않으면 상태가 전환되지 않습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 함수가 성공적으로 종료되었더라도 presigned URL에 응답을 보내지 않으면 CloudFormation은 완료를 인식하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — CloudFormation 업데이트 권한이 아닌, presigned URL에 대한 응답 전송이 핵심입니다.</p>
<p><span class="mark-no">❌ D</span> — AD Connector가 이미 생성되었으므로 ds 권한 부족이 원인이 아닙니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'CloudFormation 사용자 지정 리소스의 가장 흔한 문제 패턴. Lambda가 작업을 완료해도 cfn-response 또는 직접 HTTP PUT으로 presigned URL에 응답하지 않으면 스택이 무한 대기.' }]
},
{
  n: 106,
  en: `A company uses AWS CodeCommit for source code control. Developers apply their changes to various feature branches and create pull requests to move those changes to the main branch when the changes are ready for production.<br><br>The developers should not be able to push changes directly to the main branch. The company applied the AWSCodeCommitPowerUser managed policy to the developers' IAM role, and now these developers can push changes to the main branch directly on every repository in the AWS account.<br><br>What should the company do to restrict the developers' ability to push changes to the main branch directly?`,
  ko: `한 회사에서 소스 코드 제어를 위해 AWS CodeCommit을 사용합니다. 개발자는 다양한 기능 브랜치에 변경 사항을 적용하고 변경 사항이 프로덕션에 준비되면 해당 변경 사항을 메인 브랜치로 옮기기 위한 풀 요청을 생성합니다.<br><br>개발자는 변경 사항을 메인 브랜치에 직접 푸시할 수 없어야 합니다. 이 회사는 개발자의 IAM 역할에 AWSCodeCommitPowerUser 관리형 정책을 적용했으며, 이제 이 개발자들은 AWS 계정의 모든 리포지토리에서 메인 브랜치에 직접 변경 사항을 푸시할 수 있습니다.<br><br>메인 브랜치에 직접 변경 사항을 푸시하는 기능을 제한하기 위해 회사는 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an additional policy to include a Deny rule for the GitPush and PutFile actions. Include a restriction for the specific repositories in the policy statement with a condition that references the main branch.`, ko:`GitPush 및 PutFile 작업에 대한 Deny 규칙을 포함하는 추가 정책을 만듭니다. 정책 문에 특정 리포지토리에 대한 제한을 포함하고 메인 브랜치를 참조하는 조건을 포함합니다.` },
    { k:'B', en:`Remove the IAM policy, and add an AWSCodeCommitReadOnly managed policy. Add an Allow rule for the GitPush and PutFile actions for the specific repositories in the policy statement with a condition that references the main branch.`, ko:`IAM 정책을 제거하고 AWSCodeCommitReadOnly 관리형 정책을 추가합니다. 메인 브랜치를 참조하는 조건과 함께 특정 리포지토리의 GitPush 및 PutFile 작업에 대한 허용 규칙을 정책 문에 추가합니다.` },
    { k:'C', en:`Modify the IAM policy. Include a Deny rule for the GitPush and PutFile actions for the specific repositories in the policy statement with a condition that references the main branch.`, ko:`IAM 정책을 수정합니다. 메인 브랜치를 참조하는 조건과 함께 특정 리포지토리의 GitPush 및 PutFile 작업에 대한 Deny 규칙을 정책 문에 포함합니다.` },
    { k:'D', en:`Create an additional policy to include an Allow rule for the GitPush and PutFile actions. Include a restriction for the specific repositories in the policy statement with a condition that references the feature branches.`, ko:`GitPush 및 PutFile 작업에 대한 Allow 규칙을 포함하는 추가 정책을 만듭니다. 기능 브랜치를 참조하는 조건과 함께 특정 리포지토리에 대한 제한을 정책 문에 포함합니다.` },
  ],
  answer: ['A'],
  vote: '94% A',
  explain: `<p><span class="mark-ok">✅ A — 추가 Deny 정책 생성</span></p><p>AWSCodeCommitPowerUser는 AWS에서 관리하는 정책으로 수정할 수 없습니다. 따라서 메인 브랜치에 대한 GitPush 및 PutFile 작업을 명시적으로 거부하는 별도의 추가 정책을 만들어 개발자 IAM 역할에 연결해야 합니다. IAM에서 명시적 거부(Deny)는 허용(Allow)보다 우선하므로, 이 방식으로 메인 브랜치 직접 푸시를 효과적으로 차단할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — AWSCodeCommitPowerUser는 AWS 관리형 정책이므로 제거할 수 없습니다. 또한 ReadOnly로 교체하면 기능 브랜치 푸시도 불가능해집니다.</p>
<p><span class="mark-no">❌ C</span> — AWS 관리형 정책은 수정할 수 없습니다. 고객 관리형 정책 사본을 만들어야 합니다.</p>
<p><span class="mark-no">❌ D</span> — Allow 규칙 추가로는 기존 PowerUser 정책의 메인 브랜치 접근을 차단할 수 없습니다.</p>`,
  disc: [{ ans:'A (94%)', txt:'AWS 관리형 정책은 수정 불가라는 핵심 원칙. 추가 Deny 정책 생성이 유일한 올바른 방법. codecommit:GitPush와 codecommit:PutFile에 refs/heads/main 조건 사용.' }]
},
{
  n: 107,
  en: `A company manages a web application that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run in an Auto Scaling group across multiple Availability Zones. The application uses an Amazon RDS for MySQL DB instance to store the data. The company has configured Amazon Route 53 with an alias record that points to the ALB.<br><br>A new company guideline requires a geographically isolated disaster recovery (DR) site with an RTO of 4 hours and an RPO of 15 minutes.<br><br>Which DR strategy will meet these requirements with the LEAST change to the application stack?`,
  ko: `한 회사가 Application Load Balancer(ALB) 뒤의 Amazon EC2 인스턴스에서 실행되는 웹 애플리케이션을 관리합니다. EC2 인스턴스는 여러 가용성 영역에 걸쳐 Auto Scaling 그룹에서 실행됩니다. 애플리케이션은 Amazon RDS for MySQL DB 인스턴스를 사용하여 데이터를 저장합니다. 회사는 ALB를 가리키는 별칭 레코드로 Amazon Route 53을 구성했습니다.<br><br>새로운 회사 지침은 RTO 4시간, RPO 15분의 지리적으로 고립된 재해 복구(DR) 사이트를 요구합니다.<br><br>애플리케이션 스택에 대한 변경을 최소화하면서 이러한 요구 사항을 충족하는 DR 전략은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Launch a replica environment of everything except Amazon RDS in a different Availability Zone. Create an RDS read replica in the new Availability Zone, and configure the new stack to point to the local RDS DB instance. Add the new stack to the Route 53 record set by using a health check to configure a failover routing policy.`, ko:`다른 가용성 영역에서 Amazon RDS를 제외한 모든 항목의 복제 환경을 시작합니다. 새 가용성 영역에서 RDS 읽기 복제본을 만들고 새 스택이 로컬 RDS DB 인스턴스를 가리키도록 구성합니다. 상태 확인을 사용하여 장애 조치 라우팅 정책을 구성하여 새 스택을 Route 53 레코드 세트에 추가합니다.` },
    { k:'B', en:`Launch a replica environment of everything except Amazon RDS in a different AWS Region. Create an RDS read replica in the new Region, and configure the new stack to point to the local RDS DB instance. Add the new stack to the Route 53 record set by using a health check to configure a latency routing policy.`, ko:`다른 AWS 리전에서 Amazon RDS를 제외한 모든 항목의 복제 환경을 시작합니다. 새 리전에서 RDS 읽기 복제본을 만들고 새 스택이 로컬 RDS DB 인스턴스를 가리키도록 구성합니다. 상태 확인을 사용하여 지연 시간 라우팅 정책을 구성하여 새 스택을 Route 53 레코드 세트에 추가합니다.` },
    { k:'C', en:`Launch a replica environment of everything except Amazon RDS in a different AWS Region. In the event of an outage, copy and restore the latest RDS snapshot from the primary Region to the DR Region. Adjust the Route 53 record set to point to the ALB in the DR Region.`, ko:`다른 AWS 리전에서 Amazon RDS를 제외한 모든 것의 복제 환경을 시작합니다. 중단이 발생하는 경우 기본 리전에서 DR 리전으로 최신 RDS 스냅샷을 복사하여 복원합니다. DR 리전의 ALB를 가리키도록 Route 53 레코드 세트를 조정합니다.` },
    { k:'D', en:`Launch a replica environment of everything except Amazon RDS in a different AWS Region. Create an RDS read replica in the new Region, and configure the new environment to point to the local RDS DB instance. Add the new stack to the Route 53 record set by using a health check to configure a failover routing policy. In the event of an outage, promote the read replica to primary.`, ko:`다른 AWS 리전에서 Amazon RDS를 제외한 모든 항목의 복제 환경을 시작합니다. 새 리전에서 RDS 읽기 복제본을 만들고 새 환경이 로컬 RDS DB 인스턴스를 가리키도록 구성합니다. 상태 확인을 사용하여 장애 조치 라우팅 정책을 구성하여 새 스택을 Route 53 레코드 세트에 추가합니다. 중단이 발생하면 읽기 복제본을 기본으로 승격합니다.` },
  ],
  answer: ['D'],
  vote: '90% D',
  explain: `<p><span class="mark-ok">✅ D — 다른 리전에 읽기 복제본 + 장애 조치 라우팅 + 승격</span></p><p>"지리적으로 고립된" DR 사이트는 다른 AWS 리전을 의미합니다. RDS 읽기 복제본을 DR 리전에 생성하면 RPO 15분 내의 지속적인 데이터 복제가 가능합니다. Route 53 장애 조치 라우팅과 상태 확인을 통해 자동으로 DR 리전으로 트래픽이 전환됩니다. 장애 시 읽기 복제본을 기본으로 승격하면 쓰기 작업도 가능해집니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 다른 가용성 영역은 지리적으로 고립된 DR 사이트가 아닙니다. 같은 리전 내 AZ는 동일한 지역 재해에 영향을 받을 수 있습니다.</p>
<p><span class="mark-no">❌ B</span> — 지연 시간 라우팅은 DR 장애 조치가 아닌 성능 최적화 목적입니다.</p>
<p><span class="mark-no">❌ C</span> — 스냅샷 복원은 RTO 4시간을 초과할 수 있으며, RPO 15분을 보장하지 못합니다.</p>`,
  disc: [{ ans:'D (90%)', txt:'지리적 고립 = 다른 리전. 읽기 복제본은 연속적인 복제로 RPO 보장. 장애 조치 라우팅은 C(수동 DNS 변경)보다 자동화됨. 중단 시 읽기 복제본을 승격해야 쓰기 가능.' }]
},
{
  n: 108,
  en: `A large enterprise is deploying a web application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The application stores data in an Amazon RDS for Oracle DB instance and Amazon DynamoDB. There are separate environments for development, testing, and production.<br><br>What is the MOST secure and flexible way to obtain password credentials during deployment?`,
  ko: `대기업이 AWS에 웹 애플리케이션을 배포하고 있습니다. 애플리케이션은 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 여러 가용성 영역에 걸쳐 Auto Scaling 그룹에서 실행됩니다. 애플리케이션은 Amazon RDS for Oracle DB 인스턴스와 Amazon DynamoDB에 데이터를 저장합니다. 개발, 테스트 및 프로덕션을 위한 별도의 환경이 있습니다.<br><br>배포 중에 암호 자격 증명을 얻는 가장 안전하고 유연한 방법은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Retrieve an access key from an AWS Systems Manager SecureString parameter to access AWS services. Retrieve the database credentials from a Systems Manager SecureString parameter.`, ko:`AWS Systems Manager SecureString 파라미터에서 액세스 키를 검색하여 AWS 서비스에 액세스합니다. Systems Manager SecureString 파라미터에서 데이터베이스 자격 증명을 검색합니다.` },
    { k:'B', en:`Launch the EC2 instances with an EC2 IAM role to access AWS services. Retrieve the database credentials from AWS Secrets Manager.`, ko:`EC2 IAM 역할로 EC2 인스턴스를 시작하여 AWS 서비스에 액세스합니다. AWS Secrets Manager에서 데이터베이스 자격 증명을 검색합니다.` },
    { k:'C', en:`Retrieve an access key from an AWS Systems Manager plaintext parameter to access AWS services. Retrieve the database credentials from a Systems Manager SecureString parameter.`, ko:`AWS Systems Manager 일반 텍스트 파라미터에서 액세스 키를 검색하여 AWS 서비스에 액세스합니다. Systems Manager SecureString 파라미터에서 데이터베이스 자격 증명을 검색합니다.` },
    { k:'D', en:`Launch the EC2 instances with an EC2 IAM role to access AWS services. Store the database passwords in an encrypted config file with the application artifacts.`, ko:`EC2 IAM 역할로 EC2 인스턴스를 시작하여 AWS 서비스에 액세스합니다. 애플리케이션 아티팩트와 함께 암호화된 구성 파일에 데이터베이스 비밀번호를 저장합니다.` },
  ],
  answer: ['B'],
  vote: '96% B',
  explain: `<p><span class="mark-ok">✅ B — IAM 역할 + AWS Secrets Manager</span></p><p>AWS 서비스 접근에는 액세스 키 대신 EC2 IAM 역할(인스턴스 프로파일)을 사용하는 것이 모범 사례입니다. 데이터베이스 자격 증명에는 AWS Secrets Manager가 가장 안전하고 유연한 옵션입니다. Secrets Manager는 자격 증명 자동 교체, 세밀한 접근 제어, RDS와의 네이티브 통합을 제공합니다. Systems Manager Parameter Store의 SecureString보다 비용이 높지만 보안 기능이 더 뛰어납니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — EC2에서 액세스 키를 사용하는 것은 모범 사례가 아닙니다. IAM 역할을 사용해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — 일반 텍스트 파라미터에 액세스 키를 저장하는 것은 매우 위험합니다.</p>
<p><span class="mark-no">❌ D</span> — 암호화된 구성 파일도 아티팩트에 자격 증명을 포함하는 것은 보안 위험입니다.</p>`,
  disc: [{ ans:'B (96%)', txt:'AWS 서비스 접근 = IAM 역할(액세스 키 금지), DB 자격 증명 = Secrets Manager(자동 교체 + RDS 통합). 가장 안전하고 유연한 조합.' }]
},
{
  n: 109,
  en: `The security team depends on AWS CloudTrail to detect sensitive security issues in the company's AWS account. The DevOps engineer needs a solution to auto-remediate CloudTrail being turned off in an AWS account.<br><br>What solution ensures the LEAST amount of downtime for the CloudTrail log deliveries?`,
  ko: `보안 팀은 회사의 AWS 계정에서 민감한 보안 문제를 감지하기 위해 AWS CloudTrail에 의존합니다. DevOps 엔지니어는 AWS 계정에서 CloudTrail이 꺼지는 것을 자동으로 수정하는 솔루션이 필요합니다.<br><br>CloudTrail 로그 전달에 대한 최소 다운타임을 보장하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon EventBridge rule for the CloudTrail StopLogging event. Create an AWS Lambda function that uses the AWS SDK to call StartLogging on the ARN of the resource in which StopLogging was called. Add the Lambda function ARN as a target to the EventBridge rule.`, ko:`CloudTrail StopLogging 이벤트에 대한 Amazon EventBridge 규칙을 만듭니다. AWS SDK를 사용하여 StopLogging이 호출된 리소스의 ARN에서 StartLogging을 호출하는 AWS Lambda 함수를 만듭니다. Lambda 함수 ARN을 EventBridge 규칙에 대상으로 추가합니다.` },
    { k:'B', en:`Deploy the AWS-managed CloudTrail-enabled AWS Config rule, set with a periodic interval of 1 hour. Create an Amazon EventBridge rule for AWS Config rules compliance change. Create an AWS Lambda function that uses the AWS SDK to call StartLogging on the ARN of the resource in which StopLogging was called. Add the Lambda function ARN as a target to the EventBridge rule.`, ko:`주기적 간격을 1시간으로 설정하여 AWS 관리형 CloudTrail 지원 AWS Config 규칙을 배포합니다. AWS Config 규칙 준수 변경에 대한 Amazon EventBridge 규칙을 만듭니다. AWS SDK를 사용하여 StopLogging이 호출된 리소스의 ARN에서 StartLogging을 호출하는 AWS Lambda 함수를 만듭니다. Lambda 함수 ARN을 EventBridge 규칙에 대상으로 추가합니다.` },
    { k:'C', en:`Create an Amazon EventBridge rule for a scheduled event every 5 minutes. Create an AWS Lambda function that uses the AWS SDK to call StartLogging on a CloudTrail trail in the AWS account. Add the Lambda function ARN as a target to the EventBridge rule.`, ko:`5분마다 예약된 이벤트에 대한 Amazon EventBridge 규칙을 만듭니다. AWS SDK를 사용하여 AWS 계정의 CloudTrail 트레일에서 StartLogging을 호출하는 AWS Lambda 함수를 만듭니다. Lambda 함수 ARN을 EventBridge 규칙에 대상으로 추가합니다.` },
    { k:'D', en:`Launch a t2.nano instance with a script running every 5 minutes that uses the AWS SDK to query CloudTrail in the current account. If the CloudTrail trail is disabled, have the script re-enable the trail.`, ko:`현재 계정에서 AWS SDK를 사용하여 CloudTrail을 쿼리하는 5분마다 실행되는 스크립트로 t2.nano 인스턴스를 시작합니다. CloudTrail 트레일이 비활성화된 경우 스크립트가 트레일을 다시 활성화하도록 합니다.` },
  ],
  answer: ['A'],
  vote: '93% A',
  explain: `<p><span class="mark-ok">✅ A — EventBridge + Lambda 이벤트 기반 즉각 수정</span></p><p>CloudTrail StopLogging 이벤트가 발생하는 즉시 EventBridge 규칙이 트리거되고 Lambda 함수가 StartLogging을 호출합니다. 이 이벤트 기반 방식은 거의 실시간으로 수정이 이루어지므로 다운타임이 최소화됩니다. B는 1시간 주기로 검사하여 최대 1시간의 다운타임이 발생할 수 있고, C는 5분 간격 스케줄이며, D는 EC2 인스턴스가 필요한 비효율적인 방법입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 1시간 주기적 간격으로 인해 최대 1시간의 다운타임이 발생할 수 있어 "최소 다운타임" 조건에 부합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 5분 스케줄로 최대 5분 다운타임. 또한 트레일이 꺼진 경우에만 동작하지 않고 항상 StartLogging을 호출합니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 인스턴스를 실행하는 것은 불필요하게 복잡하고 비용이 발생합니다.</p>`,
  disc: [{ ans:'A (93%)', txt:'이벤트 기반(StopLogging 발생 즉시) vs 주기적 검사(B:1시간, C:5분). 최소 다운타임 조건에서 이벤트 기반이 압도적으로 유리. AWS 블로그에서도 이 패턴을 권장.' }]
},
{
  n: 110,
  en: `A company uses AWS CodeArtifact to centrally store Python packages. The CodeArtifact repository is configured with the following repository policy:<br><br><img src="https://img.examtopics.com/aws-certified-devops-engineer-professional-dop-c02/image7.png" alt="Repository Policy" /><br><br>A development team is building a new project in an account that is in an organization in AWS Organizations. The development team wants to use a Python library that has already been stored in the CodeArtifact repository in the organization. The development team uses AWS CodePipeline and AWS CodeBuild to build the new application. The CodeBuild job that the development team uses to build the application is configured to run in a VPC. Because of compliance requirements, the VPC has no internet connectivity.<br><br>The development team creates the VPC endpoints for CodeArtifact and updates the CodeBuild buildspec.yaml file. However, the development team cannot download the Python library from the repository.<br><br>Which combination of steps should a DevOps engineer take so that the development team can use CodeArtifact? (Choose two.)`,
  ko: `한 회사에서 AWS CodeArtifact를 사용하여 Python 패키지를 중앙에서 저장합니다. CodeArtifact 리포지토리는 다음과 같은 리포지토리 정책으로 구성되어 있습니다:<br><br><img src="https://img.examtopics.com/aws-certified-devops-engineer-professional-dop-c02/image7.png" alt="리포지토리 정책" /><br><br>개발 팀이 AWS Organizations 조직에 있는 계정에서 새 프로젝트를 빌드하고 있습니다. 개발 팀은 조직의 CodeArtifact 리포지토리에 이미 저장된 Python 라이브러리를 사용하려고 합니다. 개발 팀은 AWS CodePipeline과 AWS CodeBuild를 사용하여 새 애플리케이션을 빌드합니다. 애플리케이션 빌드에 사용하는 CodeBuild 작업은 VPC에서 실행되도록 구성되어 있습니다. 규정 준수 요구 사항으로 인해 VPC에 인터넷 연결이 없습니다.<br><br>개발 팀은 CodeArtifact에 대한 VPC 엔드포인트를 만들고 CodeBuild buildspec.yaml 파일을 업데이트합니다. 그러나 개발 팀은 리포지토리에서 Python 라이브러리를 다운로드할 수 없습니다.<br><br>개발 팀이 CodeArtifact를 사용할 수 있도록 DevOps 엔지니어는 어떤 단계 조합을 수행해야 합니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Create an Amazon S3 gateway endpoint. Update the route tables for the subnets that are running the CodeBuild job.`, ko:`Amazon S3 게이트웨이 엔드포인트를 만듭니다. CodeBuild 작업을 실행 중인 서브넷에 대한 경로 테이블을 업데이트합니다.` },
    { k:'B', en:`Update the repository policy's Principal statement to include the ARN of the role that the CodeBuild project uses.`, ko:`CodeBuild 프로젝트가 사용하는 역할의 ARN을 포함하도록 리포지토리 정책의 Principal 문을 업데이트합니다.` },
    { k:'C', en:`Share the CodeArtifact repository with the organization by using AWS Resource Access Manager (AWS RAM).`, ko:`AWS Resource Access Manager(AWS RAM)를 사용하여 CodeArtifact 리포지토리를 조직과 공유합니다.` },
    { k:'D', en:`Update the role that the CodeBuild project uses so that the role has sufficient permissions to use the CodeArtifact repository.`, ko:`CodeBuild 프로젝트가 사용하는 역할을 업데이트하여 해당 역할이 CodeArtifact 리포지토리를 사용할 수 있는 충분한 권한을 갖도록 합니다.` },
    { k:'E', en:`Specify the account that hosts the repository as the delegated administrator for CodeArtifact in the organization.`, ko:`조직에서 CodeArtifact에 대한 위임된 관리자로 리포지토리를 호스팅하는 계정을 지정합니다.` },
  ],
  answer: ['A','D'],
  vote: '53% AD',
  explain: `<p><span class="mark-ok">✅ A — S3 게이트웨이 엔드포인트 생성</span></p><p>AWS CodeArtifact는 패키지 자산을 Amazon S3에 저장합니다. 인터넷 연결이 없는 VPC에서 CodeArtifact를 사용하려면 CodeArtifact VPC 엔드포인트 외에도 S3 게이트웨이 엔드포인트가 필요합니다. (참고: 현재 AWS 문서에는 Python/Swift 패키지에는 S3 엔드포인트가 불필요하다는 주석이 있으나, 시험 문제 출제 당시에는 해당 예외가 없었음)</p>
<p><span class="mark-ok">✅ D — CodeBuild 역할에 CodeArtifact 권한 추가</span></p><p>CodeBuild 프로젝트가 사용하는 IAM 역할에 CodeArtifact 리포지토리에서 패키지를 읽을 수 있는 권한(codeartifact:GetAuthorizationToken, codeartifact:ReadFromRepository 등)이 없을 경우 다운로드가 실패합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 리포지토리 정책의 Principal이 이미 <code>*</code>로 설정되어 있으며, <code>aws:PrincipalOrgID</code> 조건으로 조직 전체를 허용하고 있습니다. 특정 역할 ARN 추가는 불필요합니다.</p>
<p><span class="mark-no">❌ C</span> — CodeArtifact는 AWS RAM을 통한 공유를 지원하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — CodeArtifact 위임 관리자 지정은 이 문제와 무관합니다.</p>`,
  disc: [{ ans:'AD (53%) vs BD (39%)', txt:'논란의 핵심: Python 패키지에 S3 엔드포인트 필요 여부. 현재 AWS 문서는 Python에는 불필요하다고 명시하나, 시험 출제 당시 문서 기준으로는 AD가 정답. 리포지토리 정책 Principal이 이미 *이므로 B는 불필요.' }]
}
];
