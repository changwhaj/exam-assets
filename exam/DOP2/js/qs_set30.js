window.QS_SET30 = [
{
  n: 291,
  en: `A company has multiple AWS accounts. The company uses AWS IAM Identity Center that is integrated with a third-party SAML 2.0 identity provider (IdP).<br><br>The attributes for access control feature is enabled in IAM Identity Center. The attribute mapping list maps the department key from the IdP to the <code>${'{'}path:enterprise.department{'}'}</code> attribute. All existing Amazon EC2 instances have a d1, d2, d3 department tag that corresponds to three company's departments.<br><br>A DevOps engineer must create policies based on the matching attributes. The policies must grant each user access to only the EC2 instances that are tagged with the user's respective department name.<br><br>Which condition key should the DevOps engineer include in the custom permissions policies to meet these requirements?`,
  ko: `회사에 여러 개의 AWS 계정이 있습니다. 이 회사는 타사 SAML 2.0 ID 공급자(IdP)와 통합된 AWS IAM Identity Center를 사용합니다.<br><br>액세스 제어 기능의 속성은 IAM Identity Center에서 활성화됩니다. 속성 매핑 목록은 IdP의 부서 키를 <code>${'{'}path:enterprise.department{'}'}</code> 속성에 매핑합니다. 모든 기존 Amazon EC2 인스턴스에는 회사의 세 부서에 해당하는 d1, d2, d3 부서 태그가 있습니다.<br><br>DevOps 엔지니어는 일치하는 속성을 기반으로 정책을 만들어야 합니다. 정책은 각 사용자에게 사용자의 해당 부서 이름으로 태그가 지정된 EC2 인스턴스에만 액세스 권한을 부여해야 합니다.<br><br>DevOps 엔지니어는 이러한 요구 사항을 충족하기 위해 사용자 지정 권한 정책에 어떤 조건 키를 포함해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Condition using aws:ResourceTag/department equals the static value "d1"`, ko:`aws:ResourceTag/department가 정적 값 "d1"과 같을 때 허용하는 조건` },
    { k:'B', en:`Condition using aws:RequestTag/department equals ${'{'}aws:PrincipalTag/department{'}'}`, ko:`aws:RequestTag/department가 <code>${'{'}aws:PrincipalTag/department{'}'}</code>와 같을 때 허용하는 조건` },
    { k:'C', en:`Condition using ec2:ResourceTag/department equals ${'{'}aws:PrincipalTag/department{'}'}`, ko:`ec2:ResourceTag/department가 <code>${'{'}aws:PrincipalTag/department{'}'}</code>와 같을 때 허용하는 조건` },
    { k:'D', en:`Condition using aws:PrincipalTag/department equals the static value "d1"`, ko:`aws:PrincipalTag/department가 정적 값 "d1"과 같을 때 허용하는 조건` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — ec2:ResourceTag/department = ${'{'}aws:PrincipalTag/department{'}'}</span></p>
<p>IAM Identity Center의 속성 기반 액세스 제어(ABAC)에서는 사용자 속성(PrincipalTag)과 리소스 태그(ResourceTag)를 비교하는 조건을 사용합니다.</p>
<ul style="margin-left:1.5em">
<li><code>ec2:ResourceTag/department</code>: EC2 인스턴스에 태그된 부서 값</li>
<li><code>${'{'}aws:PrincipalTag/department{'}'}</code>: IAM Identity Center를 통해 로그인한 사용자의 부서 속성(IdP에서 매핑된 값)</li>
</ul>
<p>두 값이 일치할 때만 EC2 인스턴스에 액세스를 허용합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, D</span> — 정적 값을 사용하면 모든 부서에 적용되는 단일 정책을 만들 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — <code>aws:RequestTag</code>는 리소스 생성 시 태그를 제어하는 조건으로, 기존 리소스 접근 제어에는 적합하지 않습니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'ABAC 패턴: ec2:ResourceTag/{키} = ${aws:PrincipalTag/{키}}로 사용자 속성과 리소스 태그를 동적으로 비교합니다.' }]
},
{
  n: 292,
  en: `A security team wants to use AWS CloudTrail to monitor all actions and API calls in multiple accounts that are in the same organization in AWS Organizations. The security team needs to ensure that account users cannot turn off CloudTrail in the accounts.<br><br>Which solution will meet this requirement?`,
  ko: `보안팀은 AWS CloudTrail을 사용하여 AWS Organizations에서 동일한 조직에 있는 여러 계정의 모든 작업과 API 호출을 모니터링하려고 합니다. 보안팀은 계정 사용자가 계정에서 CloudTrail을 끌 수 없도록 해야 합니다.<br><br>어떤 솔루션이 이 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Apply an SCP to all OUs to deny the cloudtrail:StopLogging action and the cloudtrail:DeleteTrail action.`, ko:`모든 OU에 SCP를 적용하여 cloudtrail:StopLogging 작업과 cloudtrail:DeleteTrail 작업을 거부합니다.` },
    { k:'B', en:`Create IAM policies in each account to deny the cloudtrail:StopLogging action and the cloudtrail:DeleteTrail action.`, ko:`각 계정에서 IAM 정책을 생성하여 cloudtrail:StopLogging 작업과 cloudtrail:DeleteTrail 작업을 거부합니다.` },
    { k:'C', en:`Set up Amazon CloudWatch alarms to notify the security team when a user disables CloudTrail in an account.`, ko:`사용자가 계정에서 CloudTrail을 비활성화하면 보안 팀에 알리기 위해 Amazon CloudWatch 알람을 설정합니다.` },
    { k:'D', en:`Use AWS Config to automatically re-enable CloudTrail if a user disables CloudTrail in an account.`, ko:`사용자가 계정에서 CloudTrail을 비활성화한 경우 AWS Config를 사용하여 CloudTrail을 자동으로 다시 활성화합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 모든 OU에 SCP 적용하여 StopLogging/DeleteTrail 거부</span></p>
<p>SCP(서비스 제어 정책)는 Organizations의 OU 또는 계정에 적용되며, 계정의 관리자 또는 IAM 관리자 역할을 가진 사용자도 제한할 수 있습니다. SCP로 cloudtrail:StopLogging과 cloudtrail:DeleteTrail을 Deny하면 계정 내 모든 사용자가 CloudTrail을 비활성화할 수 없습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — IAM 정책은 계정 내 사용자에게 적용되지만, 관리자가 해당 IAM 정책을 수정하거나 삭제할 수 있습니다. 관리자를 제한하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — 알람은 사전 예방적 제한이 아닌 사후 알림입니다.</p>
<p><span class="mark-no">❌ D</span> — Config는 비활성화를 감지한 후 수정하지만, 잠시 동안 CloudTrail이 꺼진 상태가 됩니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'SCP는 계정 관리자도 제한할 수 있는 강제 가드레일로, CloudTrail 비활성화를 사전에 방지하는 가장 효과적인 방법입니다.' }]
},
{
  n: 293,
  en: `A DevOps engineer needs to configure a blue/green deployment for an existing three-tier application. The application runs on Amazon EC2 instances and uses an Amazon RDS database. The EC2 instances run behind an Application Load Balancer (ALB) and are in an Auto Scaling group.<br><br>The DevOps engineer has created launch templates, Auto Scaling groups, and ALB target groups for the blue environment and the green environment. Each target group specifies which application version, blue or green, will be loaded on the EC2 instances. An Amazon Route 53 record for www.example.com points to the ALB.<br><br>The deployment must shift traffic all at once from the blue environment to the green environment.<br><br>Which solution will meet these requirements?`,
  ko: `DevOps 엔지니어는 기존 3계층 애플리케이션에 대한 블루/그린 배포를 구성해야 합니다. 애플리케이션은 Amazon EC2 인스턴스에서 실행되고 Amazon RDS 데이터베이스를 사용합니다. EC2 인스턴스는 ALB(Application Load Balancer) 뒤에서 실행되고 자동 확장 그룹에 있습니다.<br><br>DevOps 엔지니어는 블루 환경과 그린 환경에 대한 시작 템플릿, 자동 확장 그룹 및 ALB 대상 그룹을 만들었습니다. 각 대상 그룹은 EC2 인스턴스에 로드될 애플리케이션 버전(블루 또는 그린)을 지정합니다. www.example.com에 대한 Amazon Route 53 레코드는 ALB를 가리킵니다.<br><br>배포는 트래픽을 모두 블루 환경에서 그린 환경으로 한 번에 전환해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Start a rolling restart of the Auto Scaling group for the green environment to deploy the new application version to the green environment's EC2 instances. When the rolling restart is complete, use an AWS CLI command to update the ALB to send traffic to the green environment's target group.`, ko:`그린 환경의 자동 스케일링 그룹의 롤링 재시작을 시작하여 그린 환경의 EC2 인스턴스에 새 애플리케이션 버전을 배포합니다. 롤링 재시작이 완료되면 AWS CLI 명령을 사용하여 ALB를 업데이트하여 그린 환경의 대상 그룹으로 트래픽을 보냅니다.` },
    { k:'B', en:`Use an AWS CLI command to update the ALB to send traffic to the green environment's target group. Start a rolling restart of the Auto Scaling group for the green environment to deploy the new application version to the green environment's EC2 instances.`, ko:`AWS CLI 명령을 사용하여 ALB를 업데이트하여 트래픽을 그린 환경 대상 그룹으로 보냅니다. 그린 환경의 자동 확장 그룹의 롤링 재시작을 시작하여 그린 환경의 EC2 인스턴스에 새 애플리케이션 버전을 배포합니다.` },
    { k:'C', en:`Update the launch template to deploy the green environment's application version to the blue environment's EC2 instances. Do not change the target groups or the Auto Scaling groups in either environment. Perform a rolling restart of the blue environment's EC2 instances.`, ko:`시작 템플릿을 업데이트하여 그린 환경의 애플리케이션 버전을 블루 환경의 EC2 인스턴스에 배포합니다. 두 환경 모두에서 대상 그룹이나 자동 확장 그룹을 변경하지 마십시오. 블루 환경 EC2 인스턴스의 롤링 재시작을 수행합니다.` },
    { k:'D', en:`Start a rolling restart of the Auto Scaling group for the green environment to deploy the new application version to the green environment's EC2 instances. When the rolling restart is complete, update Route 53 to point to the green environment's endpoint on the ALB.`, ko:`그린 환경의 자동 확장 그룹의 롤링 재시작을 시작하여 그린 환경의 EC2 인스턴스에 새 애플리케이션 버전을 배포합니다. 롤링 재시작이 완료되면 Route 53을 업데이트하여 ALB에서 그린 환경의 엔드포인트를 가리킵니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 그린 환경 롤링 재시작 후 ALB 대상 그룹 전환</span></p>
<p>올바른 블루/그린 배포 순서:<br>
① 그린 환경의 ASG 롤링 재시작으로 새 버전 배포(그린 인스턴스가 준비됨)<br>
② 완료 후 ALB를 업데이트하여 트래픽을 그린 대상 그룹으로 일괄 전환<br>
이 순서로 그린 환경이 준비된 상태에서 트래픽을 한 번에 전환할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 그린 환경이 아직 새 버전으로 업데이트되기 전에 트래픽을 전환하면 사용자가 구 버전에 연결됩니다.</p>
<p><span class="mark-no">❌ C</span> — 블루/그린 배포의 장점을 활용하지 못하고 블루 환경을 직접 수정합니다.</p>
<p><span class="mark-no">❌ D</span> — Route 53 업데이트는 DNS TTL 문제로 즉각적인 트래픽 전환이 보장되지 않습니다. ALB 대상 그룹 전환이 더 빠르고 일관됩니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'블루/그린 배포: 그린 환경 준비 → ALB 대상 그룹 전환으로 한 번에 트래픽을 이동합니다.' }]
},
{
  n: 294,
  en: `A company has an application that runs on Amazon EC2 instances in an Auto Scaling group. The application processes a high volume of messages from an Amazon Simple Queue Service (Amazon SQS) queue.<br><br>A DevOps engineer noticed that the application took several hours to process a group of messages from the SQS queue. The average CPU utilization of the Auto Scaling group did not cross the threshold of a target tracking scaling policy when processing the messages. The application that processes the SQS queue publishes logs to Amazon CloudWatch Logs.<br><br>The DevOps engineer needs to ensure that the queue is processed quickly.<br><br>Which solution meets these requirements with the LEAST operational overhead?`,
  ko: `한 회사에는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 이 애플리케이션은 Amazon Simple Queue Service(Amazon SQS) 대기열에서 대량의 메시지를 처리합니다.<br><br>DevOps 엔지니어는 애플리케이션이 SQS 대기열에서 메시지 그룹을 처리하는 데 몇 시간이 걸린다는 것을 알아챘습니다. 메시지를 처리할 때 Auto Scaling 그룹의 평균 CPU 사용률이 대상 추적 확장 정책의 임계값을 넘지 않았습니다. SQS 대기열을 처리하는 애플리케이션은 Amazon CloudWatch Logs에 로그를 게시합니다.<br><br>DevOps 엔지니어는 대기열이 빠르게 처리되도록 해야 합니다.<br><br>운영 오버헤드를 최소화하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS Lambda function. Configure the Lambda function to publish a custom metric by using the ApproximateNumberOfMessagesVisible SQS queue attribute and the GroupInServiceInstances Auto Scaling group attribute to publish the queue messages for each instance. Schedule an Amazon EventBridge rule to run the Lambda function every hour. Create a target tracking scaling policy for the Auto Scaling group that uses the custom metric to scale in and out.`, ko:`AWS Lambda 함수를 만듭니다. ApproximateNumberOfMessagesVisible SQS 대기열 속성과 GroupInServiceInstances 자동 확장 그룹 속성을 사용하여 각 인스턴스에 대한 대기열 메시지를 게시하여 사용자 지정 메트릭을 게시하도록 Lambda 함수를 구성합니다. 매 시간 Lambda 함수를 실행하도록 Amazon EventBridge 규칙을 예약합니다. 사용자 지정 메트릭을 사용하여 확장 및 축소하는 자동 확장 그룹에 대한 대상 추적 확장 정책을 만듭니다.` },
    { k:'B', en:`Create an AWS Lambda function. Configure the Lambda function to publish a custom metric by using the ApproximateNumberOfMessagesVisible SQS queue attribute and the GroupInServiceInstances Auto Scaling group attribute to publish the queue messages for each instance. Create a CloudWatch subscription filter for the application logs with the Lambda function as the target. Create a target tracking scaling policy for the Auto Scaling group that uses the custom metric to scale in and out.`, ko:`AWS Lambda 함수를 만듭니다. ApproximateNumberOfMessagesVisible SQS 대기열 속성과 GroupInServiceInstances 자동 확장 그룹 속성을 사용하여 각 인스턴스에 대한 대기열 메시지를 게시하여 사용자 지정 메트릭을 게시하도록 Lambda 함수를 구성합니다. Lambda 함수를 대상으로 애플리케이션 로그에 대한 CloudWatch 구독 필터를 만듭니다. 사용자 지정 메트릭을 사용하여 확장 및 축소하는 자동 확장 그룹에 대한 대상 추적 확장 정책을 만듭니다.` },
    { k:'C', en:`Create a target tracking scaling policy for the Auto Scaling group. In the target tracking policy, use the ApproximateNumberOfMessagesVisible SQS queue attribute and the GroupInServiceInstances Auto Scaling group attribute to calculate how many messages are in the queue for each number of instances by using metric math. Use the calculated attribute to scale in and out.`, ko:`자동 확장 그룹에 대한 대상 추적 확장 정책을 만듭니다. 대상 추적 정책에서 ApproximateNumberOfMessagesVisible SQS 대기열 속성과 GroupInServiceInstances 자동 확장 그룹 속성을 사용하여 메트릭 수학을 사용하여 각 인스턴스 수에 대해 대기열에 있는 메시지 수를 계산합니다. 계산된 속성을 사용하여 확장 및 축소합니다.` },
    { k:'D', en:`Create an AWS Lambda function that logs the ApproximateNumberOfMessagesVisible attribute of the SQS queue to a CloudWatch Logs log group. Schedule an Amazon EventBridge rule to run the Lambda function every 5 minutes. Create a metric filter to count the number of log events from a CloudWatch logs group. Create a target tracking scaling policy for the Auto Scaling group that uses the custom metric to scale in and out.`, ko:`SQS 대기열의 ApproximateNumberOfMessagesVisible 속성을 CloudWatch Logs 로그 그룹에 로깅하는 AWS Lambda 함수를 만듭니다. 5분마다 Lambda 함수를 실행하도록 Amazon EventBridge 규칙을 예약합니다. CloudWatch 로그 그룹의 로그 이벤트 수를 계산하는 메트릭 필터를 만듭니다. 사용자 지정 메트릭을 사용하여 확장 및 축소하는 Auto Scaling 그룹에 대한 대상 추적 확장 정책을 만듭니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 대상 추적 정책 + 메트릭 수학 (Lambda 불필요)</span></p>
<p>AWS Auto Scaling은 기본적으로 CloudWatch Metrics Insights의 메트릭 수학(Metric Math)을 지원합니다. <code>ApproximateNumberOfMessagesVisible</code>(SQS 기본 메트릭)와 <code>GroupInServiceInstances</code>(ASG 기본 메트릭)를 메트릭 수학으로 나누어 인스턴스당 메시지 수를 계산하고, 이를 대상 추적 정책의 스케일 대상으로 사용합니다. Lambda나 EventBridge 없이 구현 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Lambda + 1시간 스케줄은 대기열 처리가 느린 문제를 해결하기에 너무 느립니다.</p>
<p><span class="mark-no">❌ B</span> — 구독 필터 트리거는 SQS 메시지 수와 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — 로그를 통해 메트릭을 계산하는 것은 불필요하게 복잡합니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'SQS+ASG 기본 CloudWatch 메트릭을 메트릭 수학으로 조합하여 대상 추적 정책에 직접 사용하는 가장 간단한 솔루션입니다.' }]
},
{
  n: 295,
  en: `A company has a single AWS account that runs hundreds of Amazon EC2 instances in a single AWS Region. The company launches and terminates new EC2 instances every hour. The account includes existing EC2 instances that have been running for longer than a week.<br><br>The company's security policy requires all running EC2 instances to have an EC2 instance profile attached. The company has created a default EC2 instance profile. The default EC2 instance profile must be attached to any EC2 instances that do not have a profile attached.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사에는 단일 AWS 리전에서 수백 개의 Amazon EC2 인스턴스를 실행하는 단일 AWS 계정이 있습니다. 이 회사는 매시간 새로운 EC2 인스턴스를 시작하고 종료합니다. 이 계정에는 일주일 이상 실행된 기존 EC2 인스턴스가 포함됩니다.<br><br>이 회사의 보안 정책에 따라 실행 중인 모든 EC2 인스턴스에 EC2 인스턴스 프로필을 연결해야 합니다. 이 회사는 기본 EC2 인스턴스 프로필을 만들었습니다. 기본 EC2 인스턴스 프로필은 프로필이 연결되지 않은 모든 EC2 인스턴스에 연결해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure an Amazon EventBridge rule that matches the Amazon EC2 RunInstances API calls. Configure the rule to invoke an AWS Lambda function to attach the default instance profile to the EC2 instances.`, ko:`Amazon EC2 RunInstances API 호출과 일치하는 Amazon EventBridge 규칙을 구성합니다. AWS Lambda 함수를 호출하여 기본 인스턴스 프로필을 EC2 인스턴스에 연결하도록 규칙을 구성합니다.` },
    { k:'B', en:`Configure AWS Config. Deploy an AWS Config ec2-instance-profile-attached managed rule. Configure an automatic remediation action that invokes an AWS Systems Manager Automation runbook to attach the default instance profile to the EC2 instances.`, ko:`AWS Config를 구성합니다. AWS Config ec2-instance-profile-attached 관리 규칙을 배포합니다. 기본 인스턴스 프로필을 EC2 인스턴스에 연결하기 위해 AWS Systems Manager Automation 런북을 호출하는 자동 수정 작업을 구성합니다.` },
    { k:'C', en:`Configure an Amazon EventBridge rule that matches the Amazon EC2 StartInstances API calls. Configure the rule to invoke an AWS Systems Manager Automation runbook to attach the default instance profile to the EC2 instances.`, ko:`Amazon EC2 StartInstances API 호출과 일치하는 Amazon EventBridge 규칙을 구성합니다. AWS Systems Manager Automation 런북을 호출하여 기본 인스턴스 프로필을 EC2 인스턴스에 연결하도록 규칙을 구성합니다.` },
    { k:'D', en:`Configure AWS Config. Deploy an AWS Config iam-role-managed-policy-check managed rule. Configure an automatic remediation action that invokes an AWS Lambda function to attach the default instance profile to the EC2 instances.`, ko:`AWS Config를 구성합니다. AWS Config iam-role-managed-policy-check 관리 규칙을 배포합니다. 기본 인스턴스 프로필을 EC2 인스턴스에 연결하기 위해 AWS Lambda 함수를 호출하는 자동 수정 작업을 구성합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — AWS Config ec2-instance-profile-attached 규칙 + SSM Automation 자동 수정</span></p>
<p>AWS Config의 <code>ec2-instance-profile-attached</code> 관리형 규칙은 인스턴스 프로필이 없는 EC2 인스턴스를 감지합니다. 자동 수정 액션으로 SSM Automation 런북을 실행하여 기본 프로필을 연결합니다. 이 솔루션은 신규 인스턴스(매시간 시작)뿐만 아니라 이미 실행 중인 기존 인스턴스(일주일 이상 실행)도 처리합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — RunInstances 이벤트 기반은 신규 인스턴스만 처리하고, 이미 실행 중인 기존 인스턴스를 처리하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — StartInstances는 중지된 인스턴스를 재시작할 때의 이벤트로, 새로 시작되는 인스턴스를 모두 커버하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — iam-role-managed-policy-check는 IAM 역할의 정책을 확인하는 규칙으로, EC2 인스턴스 프로필 연결 여부와 무관합니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'AWS Config ec2-instance-profile-attached는 기존 인스턴스도 포함하여 모든 EC2 인스턴스를 지속적으로 모니터링하고 자동 수정합니다.' }]
},
{
  n: 296,
  en: `A company uses AWS Organizations to manage hundreds of AWS accounts. The company has a team that is responsible for AWS Identity and Access Management (IAM).<br><br>The IAM team wants to implement AWS IAM Identity Center. The IAM team must have only the minimum required permissions to manage IAM Identity Center. The IAM team must not be able to gain unnecessary access to the Organizations management account. The IAM team must be able to provision new IAM Identity Center permission sets and assignments for new and existing member accounts.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `한 회사가 AWS Organizations를 사용하여 수백 개의 AWS 계정을 관리합니다. 이 회사에는 AWS Identity and Access Management(IAM)를 담당하는 팀이 있습니다.<br><br>IAM 팀은 AWS IAM Identity Center를 구현하려고 합니다. IAM 팀은 IAM Identity Center를 관리하는 데 필요한 최소한의 권한만 있어야 합니다. IAM 팀은 Organizations 관리 계정에 불필요하게 액세스할 수 없어야 합니다. IAM 팀은 새 멤버 계정과 기존 멤버 계정에 대한 새 IAM Identity Center 권한 집합과 할당을 프로비저닝할 수 있어야 합니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Create a new AWS account for the IAM team. Enable IAM Identity Center in the new account. In the Organizations management account, register the new account as a delegated administrator for IAM Identity Center.`, ko:`IAM 팀을 위한 새 AWS 계정을 만듭니다. 새 계정에서 IAM Identity Center를 활성화합니다. Organizations 관리 계정에서 새 계정을 IAM Identity Center의 위임된 관리자로 등록합니다.` },
    { k:'B', en:`Create a new AWS account for the IAM team. Enable IAM Identity Center in the Organizations management account. In the Organizations management account, register the new account as a delegated administrator for IAM Identity Center.`, ko:`IAM 팀을 위한 새 AWS 계정을 만듭니다. Organizations 관리 계정에서 IAM Identity Center를 활성화합니다. Organizations 관리 계정에서 새 계정을 IAM Identity Center의 위임된 관리자로 등록합니다.` },
    { k:'C', en:`Create an SCP in Organizations. Create a new OU for the Organizations management account, and link the new SCP to the OU. Configure the SCP to deny all access to IAM Identity Center.`, ko:`Organizations에서 SCP를 만듭니다. Organizations 관리 계정에 대한 새 OU를 만들고 새 SCP를 OU에 연결합니다. SCP를 구성하여 IAM Identity Center에 대한 모든 액세스를 거부합니다.` },
    { k:'D', en:`Create IAM users and an IAM group for the IAM team in IAM Identity Center. Add the users to the group. Create a new permission set. Attach the AWSSSOMemberAccountAdministrator managed IAM policy to the group.`, ko:`IAM Identity Center에서 IAM 팀에 대한 IAM 사용자와 IAM 그룹을 만듭니다. 사용자를 그룹에 추가합니다. 새 권한 집합을 만듭니다. AWSSSOMemberAccountAdministrator 관리형 IAM 정책을 그룹에 연결합니다.` },
    { k:'E', en:`Assign the new permission set to the Organizations management account. Allow the IAM team's group to use the permission set.`, ko:`조직 관리 계정에 새 권한 집합을 할당합니다. IAM 팀의 그룹이 권한 집합을 사용하도록 허용합니다.` },
    { k:'F', en:`Assign the new permission set to the new AWS account. Allow the IAM team's group to use the permission set.`, ko:`새 AWS 계정에 새 권한 집합을 할당합니다. IAM 팀의 그룹이 권한 집합을 사용하도록 허용합니다.` },
  ],
  answer: ['B','D','F'],
  vote: '91% BDF',
  explain: `<p><span class="mark-ok">✅ B</span> — IAM Identity Center는 Organizations <strong>관리 계정에서 먼저 활성화</strong>해야 합니다. 그 후 IAM 팀의 새 계정을 위임된 관리자로 등록합니다.</p>
<p><span class="mark-ok">✅ D</span> — AWSSSOMemberAccountAdministrator 정책은 멤버 계정의 권한 집합과 할당을 관리하는 데 필요한 최소 권한을 제공합니다.</p>
<p><span class="mark-ok">✅ F</span> — 관리 계정이 아닌 <strong>IAM 팀의 새 계정</strong>에 권한 집합을 할당하여 관리 계정에 대한 불필요한 액세스를 방지합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — IAM Identity Center는 새 계정이 아닌 관리 계정에서 활성화해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — Organizations 관리 계정은 OU로 이동할 수 없습니다.</p>
<p><span class="mark-no">❌ E</span> — 관리 계정에 권한 집합을 할당하면 불필요한 액세스 위험이 있습니다.</p>`,
  disc: [{ ans:'BDF (91%)', txt:'Q270과 동일 유형. 핵심: 관리 계정에서 IAM IDC 활성화(B) + AWSSSOMemberAccountAdministrator(D) + 새 계정에 할당(F).' }]
},
{
  n: 297,
  en: `A company uses an Amazon Aurora PostgreSQL global database that has two secondary AWS Regions. A DevOps engineer has configured the database parameter group to guarantee an RPO of 60 seconds. Write operations on the primary cluster are occasionally blocked because of the RPO setting.<br><br>The DevOps engineer needs to reduce the frequency of blocked write operations.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사에서는 두 개의 보조 AWS 리전이 있는 Amazon Aurora PostgreSQL 글로벌 데이터베이스를 사용합니다. DevOps 엔지니어가 데이터베이스 매개변수 그룹을 구성하여 RPO를 60초로 보장했습니다. 기본 클러스터의 쓰기 작업은 RPO 설정으로 인해 가끔 차단됩니다.<br><br>DevOps 엔지니어는 차단된 쓰기 작업의 빈도를 줄여야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Add an additional secondary cluster to the global database.`, ko:`글로벌 데이터베이스에 보조 클러스터를 추가합니다.` },
    { k:'B', en:`Enable write forwarding for the global database.`, ko:`글로벌 데이터베이스에 대한 쓰기 전달을 활성화합니다.` },
    { k:'C', en:`Remove one of the secondary clusters from the global database.`, ko:`글로벌 데이터베이스에서 보조 클러스터 중 하나를 제거합니다.` },
    { k:'D', en:`Configure synchronous replication for the global database.`, ko:`글로벌 데이터베이스에 대한 동기 복제를 구성합니다.` },
  ],
  answer: ['C'],
  vote: '54% C',
  explain: `<p><span class="mark-ok">✅ C — 보조 클러스터 하나 제거</span></p>
<p>RPO 60초 설정은 기본 클러스터에서 보조 클러스터로의 복제 지연이 60초를 초과하면 쓰기를 차단합니다. 보조 클러스터가 많을수록 모든 클러스터에 복제해야 하므로 복제 오버헤드가 증가합니다. 보조 클러스터 하나를 제거하면 복제 대상이 줄어들어 복제 지연이 감소하고, 쓰기 차단 빈도가 줄어듭니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 보조 클러스터를 추가하면 복제 오버헤드가 더 증가하여 차단이 더 빈번해집니다.</p>
<p><span class="mark-no">❌ B</span> — 쓰기 전달(Write Forwarding)은 보조 클러스터에서 기본 클러스터로 쓰기를 전달하는 기능으로, 기본 클러스터의 쓰기 차단과 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — 동기 복제는 모든 클러스터가 동기화될 때까지 쓰기를 차단하므로 차단 빈도가 오히려 증가합니다.</p>`,
  disc: [{ ans:'C (54%) vs B (31%)', txt:'핵심: RPO로 인한 쓰기 차단은 복제 지연 때문입니다. 보조 클러스터를 줄이면 복제 오버헤드가 감소하여 차단 빈도가 줄어듭니다.' }]
},
{
  n: 298,
  en: `A company has a web application that is hosted on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster runs on AWS Fargate that is available through an internet-facing Application Load Balancer.<br><br>The application is experiencing stability issues that lead to longer response times. A DevOps engineer needs to configure observability in Amazon CloudWatch to troubleshoot the issue. The solution must provide only the minimum necessary permissions.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `한 회사에 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에 호스팅된 웹 애플리케이션이 있습니다. EKS 클러스터는 인터넷 연결 애플리케이션 로드 밸런서를 통해 제공되는 AWS Fargate에서 실행됩니다.<br><br>애플리케이션에서 안정성 문제가 발생하여 응답 시간이 길어졌습니다. DevOps 엔지니어는 Amazon CloudWatch에서 관찰 가능성을 구성하여 문제를 해결해야 합니다. 솔루션은 최소한 필요한 권한만 제공해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Deploy the CloudWatch agent as a Kubernetes StatefulSet to the EKS cluster.`, ko:`CloudWatch 에이전트를 Kubernetes StatefulSet으로 EKS 클러스터에 배포합니다.` },
    { k:'B', en:`Deploy the AWS Distro for OpenTelemetry Collector as a Kubernetes DaemonSet to the EKS cluster.`, ko:`Kubernetes DaemonSet으로 AWS Distro for OpenTelemetry Collector를 EKS 클러스터에 배포합니다.` },
    { k:'C', en:`Associate a Kubernetes service account with an IAM role by using IAM roles for service accounts in Amazon EKS. Use the CloudWatchAgentServerPolicy AWS managed policy.`, ko:`Amazon EKS의 서비스 계정에 대한 IAM 역할을 사용하여 Kubernetes 서비스 계정을 IAM 역할과 연결합니다. CloudWatchAgentServerPolicy AWS 관리 정책을 사용합니다.` },
    { k:'D', en:`Associate a Kubernetes service account with an IAM role by using IAM roles for service accounts in Amazon EKS. Use the CloudWatchAgentAdminPolicy AWS managed policy.`, ko:`Amazon EKS의 서비스 계정에 대한 IAM 역할을 사용하여 Kubernetes 서비스 계정을 IAM 역할과 연결합니다. CloudWatchAgentAdminPolicy AWS 관리 정책을 사용합니다.` },
    { k:'E', en:`Configure an IAM OpenID Connect (OIDC) provider for the EKS cluster.`, ko:`EKS 클러스터에 대한 IAM OpenID Connect(OIDC) 공급자를 구성합니다.` },
    { k:'F', en:`Enable EKS control plane logging for the EKS cluster.`, ko:`EKS 클러스터에 대해 EKS 제어 평면 로깅을 활성화합니다.` },
  ],
  answer: ['A','C','F'],
  vote: '55% ACF',
  explain: `<p><span class="mark-ok">✅ A — CloudWatch 에이전트를 StatefulSet으로 배포</span></p>
<p>AWS Fargate에서는 <strong>DaemonSet을 지원하지 않습니다</strong>. Fargate EKS에서 CloudWatch 에이전트를 배포하려면 StatefulSet 방식을 사용해야 합니다.</p>
<p><span class="mark-ok">✅ C — IRSA(서비스 계정에 대한 IAM 역할) + CloudWatchAgentServerPolicy</span></p>
<p>최소 권한 원칙에 따라 CloudWatchAgentServerPolicy(읽기/쓰기)를 사용합니다. CloudWatchAgentAdminPolicy는 더 넓은 권한을 부여하므로 최소 권한 원칙에 위배됩니다.</p>
<p><span class="mark-ok">✅ F — EKS 제어 평면 로깅 활성화</span></p>
<p>EKS 제어 평면 로그는 API 서버, 감사, 컨트롤러 관리자 등의 로그를 CloudWatch Logs에 전송하여 안정성 문제 트러블슈팅에 도움이 됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — DaemonSet은 Fargate에서 지원되지 않습니다. AWS Fargate 노드에는 DaemonSet Pod를 스케줄링할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudWatchAgentAdminPolicy는 필요 이상의 권한(관리자 수준)을 부여하여 최소 권한 원칙에 위배됩니다.</p>
<p><span class="mark-no">❌ E</span> — IRSA를 사용하려면 OIDC 공급자가 필요하지만, Fargate EKS 클러스터는 기본적으로 OIDC 공급자를 구성해야 합니다. 다만 이것만으로는 관찰성 설정이 완료되지 않습니다.</p>`,
  disc: [{ ans:'ACF (55%)', txt:'Fargate EKS에서는 DaemonSet 대신 StatefulSet을 사용. 최소 권한은 CloudWatchAgentServerPolicy. 제어 평면 로깅으로 안정성 문제 진단.' }]
},
{
  n: 299,
  en: `A company stores its Python-based application code in AWS CodeCommit. The company uses AWS CodePipeline to deploy the application. The CodeCommit repository and the CodePipeline pipeline are deployed to the same AWS account.<br><br>The company's security team requires all code to be scanned for vulnerabilities before the code is deployed to production. If any vulnerabilities are found, the deployment must stop.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 Python 기반 애플리케이션 코드를 AWS CodeCommit에 저장합니다. 이 회사는 AWS CodePipeline을 사용하여 애플리케이션을 배포합니다. CodeCommit 리포지토리와 CodePipeline 파이프라인은 동일한 AWS 계정에 배포됩니다.<br><br>이 회사의 보안 팀은 모든 코드를 프로덕션에 배포하기 전에 취약점을 검사하도록 요구합니다. 취약점이 발견되면 배포를 중지해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a new CodeBuild project. Configure the project to run a security scan on the code by using Amazon CodeGuru Security. Configure the CodeBuild project to raise an error if CodeGuru Security finds vulnerabilities. Create a new IAM role that has sufficient permissions to run CodeGuru Security scans. Assign the role to the CodeBuild project. In the CodePipeline pipeline, add a new stage before the deployment stage. Select AWS CodeBuild as the action provider for the new stage. Use the source artifact from the CodeCommit repository. Configure the action to use the CodeBuild project.`, ko:`새 CodeBuild 프로젝트를 만듭니다. Amazon CodeGuru Security를 사용하여 코드에서 보안 검사를 실행하도록 프로젝트를 구성합니다. CodeGuru Security에서 취약점을 찾으면 오류를 발생하도록 CodeBuild 프로젝트를 구성합니다. CodeGuru Security 검사를 실행할 수 있는 충분한 권한이 있는 새 IAM 역할을 만듭니다. CodeBuild 프로젝트에 역할을 할당합니다. CodePipeline 파이프라인에서 배포 단계 전에 새 단계를 추가합니다. 새 단계에 대한 작업 공급자로 AWS CodeBuild를 선택합니다. CodeCommit 리포지토리의 소스 아티팩트를 사용합니다. CodeBuild 프로젝트를 사용하도록 작업을 구성합니다.` },
    { k:'B', en:`Create a new CodeBuild project. Configure the project to run a security scan on the code by using Amazon Inspector. Configure the CodeBuild project to raise an error if Amazon Inspector finds vulnerabilities. Create a new IAM role that has sufficient permissions to run Amazon Inspector scans. Assign the role to the CodeBuild project. In the CodePipeline pipeline, add a new stage before the deployment stage. Select AWS CodeBuild as the action provider for the new stage. Use the source artifact from the CodeCommit repository. Configure the action to use the CodeBuild project.`, ko:`새 CodeBuild 프로젝트를 만듭니다. Amazon Inspector를 사용하여 코드에서 보안 검사를 실행하도록 프로젝트를 구성합니다. Amazon Inspector에서 취약점을 찾으면 오류를 발생하도록 CodeBuild 프로젝트를 구성합니다. Amazon Inspector 검사를 실행할 수 있는 충분한 권한이 있는 새 IAM 역할을 만듭니다. CodeBuild 프로젝트에 역할을 할당합니다. CodePipeline 파이프라인에서 배포 단계 전에 새 단계를 추가합니다. 새 단계에 대한 작업 공급자로 AWS CodeBuild를 선택합니다. CodeCommit 리포지토리의 소스 아티팩트를 사용합니다. CodeBuild 프로젝트를 사용하도록 작업을 구성합니다.` },
    { k:'C', en:`Update the IAM role that is attached to CodePipeline to include sufficient permissions to invoke Amazon DevOps Guru. In the CodePipeline pipeline, add a new stage before the deployment stage. Select DevOps Guru as the action provider for the new stage. Use the source artifact from the CodeCommit repository.`, ko:`CodePipeline에 연결된 IAM 역할을 업데이트하여 Amazon DevOps Guru를 호출할 수 있는 충분한 권한을 포함합니다. CodePipeline 파이프라인에서 배포 단계 전에 새 단계를 추가합니다. 새 단계에 대한 작업 공급자로 DevOps Guru를 선택합니다. CodeCommit 리포지토리의 소스 아티팩트를 사용합니다.` },
    { k:'D', en:`Update the IAM role that is attached to CodePipeline to include sufficient permissions to invoke Amazon DevOps Guru. In the CodePipeline pipeline, add a new stage before the deployment stage. Select CodeGuru Security as the action provider for the new stage. Use the source artifact from the CodeCommit repository.`, ko:`CodePipeline에 연결된 IAM 역할을 업데이트하여 Amazon DevOps Guru를 호출할 수 있는 충분한 권한을 포함합니다. CodePipeline 파이프라인에서 배포 단계 전에 새 단계를 추가합니다. 새 단계에 대한 작업 공급자로 CodeGuru Security를 선택합니다. CodeCommit 리포지토리의 소스 아티팩트를 사용합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — CodeBuild + Amazon CodeGuru Security + 오류 발생 설정 + CodePipeline 통합</span></p>
<p>Amazon CodeGuru Security는 정적 코드 분석(SAST) 도구로 Python 코드의 보안 취약점을 검사합니다. CodeBuild 프로젝트에서 CodeGuru Security를 실행하고 취약점 발견 시 오류(exit code ≠ 0)를 반환하도록 설정하면 CodePipeline이 실패로 처리하여 배포를 자동으로 중단합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — Amazon Inspector는 실행 중인 EC2 인스턴스, 컨테이너 이미지의 취약성을 검사하는 서비스이지 소스 코드 정적 분석 도구가 아닙니다.</p>
<p><span class="mark-no">❌ C, D</span> — Amazon DevOps Guru는 운영 이상 탐지 서비스로, 코드 보안 취약성 검사 도구가 아닙니다. CodePipeline 액션 공급자로 DevOps Guru는 지원되지 않습니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'소스 코드 보안 취약성 검사에는 Amazon CodeGuru Security(정적 분석)를 사용합니다. Inspector는 런타임 환경, DevOps Guru는 운영 이상 탐지용입니다.' }]
},
{
  n: 300,
  en: `A DevOps engineer deploys an application to a fleet of Amazon Linux EC2 instances. The DevOps engineer needs to monitor system metrics across the fleet. The DevOps engineer wants to monitor the relationship between network traffic and memory utilization for the application code. The DevOps engineer wants to track the data on a 60 second interval.<br><br>Which solution will meet these requirements?`,
  ko: `DevOps 엔지니어가 Amazon Linux EC2 인스턴스 플릿에 애플리케이션을 배포합니다. DevOps 엔지니어는 플릿 전체에서 시스템 메트릭을 모니터링해야 합니다. DevOps 엔지니어는 애플리케이션 코드에 대한 네트워크 트래픽과 메모리 사용률 간의 관계를 모니터링하려고 합니다. DevOps 엔지니어는 60초 간격으로 데이터를 추적하려고 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use Amazon CloudWatch basic monitoring to collect the NetworkIn metric and the MemoryBytesUsed metric. Graph the metrics in CloudWatch.`, ko:`Amazon CloudWatch 기본 모니터링을 사용하여 NetworkIn 메트릭과 MemoryBytesUsed 메트릭을 수집합니다. CloudWatch에서 메트릭을 그래프로 표시합니다.` },
    { k:'B', en:`Use Amazon CloudWatch detailed monitoring to collect the NetworkIn metric and the MemoryBytesUsed metric. Graph the metrics in CloudWatch.`, ko:`Amazon CloudWatch 상세 모니터링을 사용하여 NetworkIn 메트릭과 MemoryBytesUsed 메트릭을 수집합니다. CloudWatch에서 메트릭을 그래프로 표시합니다.` },
    { k:'C', en:`Use Amazon CloudWatch detailed monitoring to collect the NetworkIn metric. Install the CloudWatch agent on the EC2 instances to collect the mem_used metric. Graph the metrics in CloudWatch.`, ko:`Amazon CloudWatch 상세 모니터링을 사용하여 NetworkIn 메트릭을 수집합니다. EC2 인스턴스에 CloudWatch 에이전트를 설치하여 mem_used 메트릭을 수집합니다. CloudWatch에서 메트릭을 그래프로 표시합니다.` },
    { k:'D', en:`Use Amazon CloudWatch basic monitoring to collect the built-in NetworkIn metric. Install the CloudWatch agent on the EC2 instances to collect the mem_used metric. Graph the metrics in CloudWatch.`, ko:`Amazon CloudWatch 기본 모니터링을 사용하여 내장 NetworkIn 메트릭을 수집합니다. EC2 인스턴스에 CloudWatch 에이전트를 설치하여 mem_used 메트릭을 수집합니다. CloudWatch에서 메트릭을 그래프로 표시합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 상세 모니터링(NetworkIn, 1분) + CloudWatch 에이전트(mem_used)</span></p>
<p>두 가지 핵심 요구 사항을 충족합니다:</p>
<ul style="margin-left:1.5em">
<li><strong>60초 간격:</strong> CloudWatch 기본 모니터링은 5분 간격입니다. <strong>상세 모니터링</strong>을 활성화해야 1분(60초) 단위 데이터를 수집할 수 있습니다.</li>
<li><strong>메모리 메트릭:</strong> EC2는 기본적으로 메모리 메트릭을 CloudWatch에 제공하지 않습니다. <strong>CloudWatch 에이전트</strong>를 설치하여 <code>mem_used</code>를 사용자 정의 메트릭으로 수집해야 합니다.</li>
</ul>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 기본 모니터링은 5분 간격으로 60초 요구 사항을 충족하지 못합니다. MemoryBytesUsed는 EC2 기본 메트릭이 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — MemoryBytesUsed는 EC2 기본 메트릭이 아닙니다. CloudWatch 에이전트로만 수집 가능합니다.</p>
<p><span class="mark-no">❌ D</span> — 기본 모니터링은 5분 간격으로 60초 요구 사항을 충족하지 못합니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'60초 NetworkIn → 상세 모니터링. 메모리 → CloudWatch 에이전트(mem_used). EC2 기본 메트릭에는 메모리가 없습니다.' }]
}
];
