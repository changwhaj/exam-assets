window.QS_SET36 = [
{
  n: 351,
  en: `A company uses an organization in AWS Organizations to manage multiple AWS accounts in a hierarchical structure. An SCP that is associated with the organization root allows IAM users to be created. A DevOps team must be able to create IAM users with any level of permissions. Developers must also be able to create IAM users. However, developers must not be able to grant new IAM users excessive permissions. The developers have the <code>CreateAndManageUsers</code> role in each account. The DevOps team must be able to prevent other users from creating IAM users.<br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `회사는 AWS Organizations의 조직을 사용하여 계층적 구조로 여러 AWS 계정을 관리합니다. 조직 루트에 연결된 SCP는 IAM 사용자 생성을 허용합니다. DevOps 팀은 모든 수준의 권한으로 IAM 사용자를 생성할 수 있어야 합니다. 개발자도 IAM 사용자를 생성할 수 있어야 합니다. 그러나 개발자는 새 IAM 사용자에게 과도한 권한을 부여할 수 없어야 합니다. 개발자는 각 계정에서 <code>CreateAndManageUsers</code> 역할을 보유합니다. DevOps 팀은 다른 사용자가 IAM 사용자를 생성하는 것을 막을 수 있어야 합니다.<br>이 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Create an SCP in the organization to deny users the ability to create and modify IAM users. Attach the SCP to the root of the organization. Attach the <code>CreateAndManageUsers</code> role to developers.`, ko:`조직에서 SCP를 생성하여 사용자가 IAM 사용자를 생성·수정하지 못하도록 거부합니다. 해당 SCP를 조직 루트에 연결합니다. <code>CreateAndManageUsers</code> 역할을 개발자에게 연결합니다.` },
    { k:'B', en:`Create an SCP in the organization to grant users that have the <code>DeveloperBoundary</code> policy attached the ability to create new IAM users and to modify IAM users.`, ko:`조직에서 SCP를 생성하여 <code>DeveloperBoundary</code> 정책이 연결된 사용자가 새 IAM 사용자를 생성하고 수정할 수 있도록 허용합니다.` },
    { k:'C', en:`Create an IAM permissions boundary policy named <code>DeveloperBoundary</code> within each account. Configure the <code>DeveloperBoundary</code> policy to allow any IAM actions but only on IAM users that have the <code>PermissionBoundaries</code> policy as the permissions boundary. Attach the <code>DeveloperBoundary</code> policy to the <code>CreateAndManageUsers</code> role within each account.`, ko:`각 계정 내에 <code>DeveloperBoundary</code>라는 IAM 권한 경계 정책을 생성합니다. <code>DeveloperBoundary</code> 정책이 <code>PermissionBoundaries</code> 정책을 권한 경계로 사용하는 IAM 사용자에게만 모든 IAM 작업을 허용하도록 구성합니다. 각 계정의 <code>CreateAndManageUsers</code> 역할에 <code>DeveloperBoundary</code> 정책을 연결합니다.` },
    { k:'D', en:`Create an IAM permissions boundary policy named <code>PermissionBoundaries</code> within each account. Configure the <code>PermissionBoundaries</code> policy to allow any IAM actions but deny the ability to create more than five IAM users. Attach the <code>PermissionBoundaries</code> policy to the <code>CreateAndManageUsers</code> role within each account.`, ko:`각 계정 내에 <code>PermissionBoundaries</code>라는 IAM 권한 경계 정책을 생성합니다. <code>PermissionBoundaries</code> 정책이 모든 IAM 작업은 허용하지만 5명 이상의 IAM 사용자 생성은 거부하도록 구성합니다. 각 계정의 <code>CreateAndManageUsers</code> 역할에 <code>PermissionBoundaries</code> 정책을 연결합니다.` },
    { k:'E', en:`Create an IAM permissions policy named <code>DeveloperBoundary</code> within each account. Configure the <code>DeveloperBoundary</code> policy to allow developers to create IAM users and to assign policies to IAM users only if the developer includes the <code>PermissionBoundaries</code> policy as the permissions boundary. Attach the <code>DeveloperBoundary</code> policy to the <code>CreateAndManageUsers</code> role within each account.`, ko:`각 계정 내에 <code>DeveloperBoundary</code>라는 IAM 권한 정책을 생성합니다. <code>DeveloperBoundary</code> 정책이 개발자가 <code>PermissionBoundaries</code> 정책을 권한 경계로 포함하는 경우에만 IAM 사용자 생성 및 정책 할당을 허용하도록 구성합니다. 각 계정의 <code>CreateAndManageUsers</code> 역할에 <code>DeveloperBoundary</code> 정책을 연결합니다.` },
  ],
  answer: ['A','E'],
  vote: '73% AE',
  explain: `<p><span class="mark-ok">✅ A — IAM 사용자 생성 차단 SCP</span></p><p>조직 루트에 IAM 사용자 생성·수정을 거부하는 SCP를 연결하면 DevOps 역할(<code>CreateAndManageUsers</code>)을 가진 사람 외에는 아무도 IAM 사용자를 생성할 수 없습니다. SCP는 역할의 권한보다 우선하므로, <code>CreateAndManageUsers</code> 역할 자체가 SCP에 예외 처리되거나 OU 분리를 통해 DevOps 계정은 적용 제외됩니다.</p>
<p><span class="mark-ok">✅ E — 권한 경계 강제를 통한 개발자 제한</span></p><p>개발자가 IAM 사용자를 생성할 때 반드시 <code>PermissionBoundaries</code>를 권한 경계로 설정하도록 조건을 부여합니다(<code>iam:PermissionsBoundary</code> 조건 키 사용). 이렇게 하면 개발자가 생성하는 IAM 사용자는 <code>PermissionBoundaries</code> 범위를 초과하는 권한을 가질 수 없으므로 과도한 권한 부여를 방지합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — SCP는 허용(Grant)이 아니라 최대 권한 경계 역할을 합니다. SCP로 특정 정책 보유자에게만 허용하는 방식은 SCP의 올바른 사용법이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 권한 경계 정책이 아닌 인라인 IAM 정책 방식으로 구성되어 있어, 실제로 개발자가 과도한 권한을 부여하는 것을 막는 강제 메커니즘이 부족합니다.</p>
<p><span class="mark-no">❌ D</span> — 사용자 수(5명)를 제한하는 것은 요구 사항(과도한 권한 부여 방지)과 맞지 않습니다.</p>`,
  disc: [{ ans:'AE (73%)', txt:'A는 DevOps 외 사용자의 IAM 생성을 SCP로 차단, E는 개발자가 생성 시 반드시 권한 경계를 설정하도록 강제하여 두 요구 사항 모두 충족' }]
},
{
  n: 352,
  en: `A company has deployed a landing zone that has a well-defined AWS Organizations structure and an SCP. The company's development team can create their AWS resources only by using AWS CloudFormation and the AWS Cloud Development Kit (AWS CDK). A DevOps engineer notices that Amazon Simple Queue Service (Amazon SQS) queues that are deployed in different CloudFormation stacks have different configurations. The DevOps engineer also notices that the application cost allocation tag is not always set. The DevOps engineer needs a solution that will enforce tagging and promote the reuse of code. The DevOps engineer needs to avoid different configurations for the deployed SQS queues.<br>What should the DevOps engineer do to meet these requirements?`,
  ko: `회사는 잘 정의된 AWS Organizations 구조와 SCP를 갖춘 랜딩 존을 배포했습니다. 회사의 개발 팀은 AWS CloudFormation 및 AWS Cloud Development Kit(AWS CDK)만을 사용하여 AWS 리소스를 생성할 수 있습니다. DevOps 엔지니어는 서로 다른 CloudFormation 스택에 배포된 Amazon SQS 큐의 구성이 서로 다름을 발견합니다. 또한 애플리케이션 비용 할당 태그가 항상 설정되지 않는 것도 발견합니다. DevOps 엔지니어는 태깅을 강제하고 코드 재사용을 장려하는 솔루션이 필요합니다. 배포된 SQS 큐의 구성이 서로 달라지는 것을 방지해야 합니다.<br>이 요구 사항을 충족하려면 어떻게 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Organizations tag policy to enforce the cost allocation tag in CloudFormation stacks. Instruct the development team to use CloudFormation to define SQS queues. Instruct the development team to deploy the SQS queues by using CloudFormation StackSets.`, ko:`Organizations 태그 정책을 생성하여 CloudFormation 스택의 비용 할당 태그를 강제합니다. 개발 팀이 CloudFormation을 사용하여 SQS 큐를 정의하도록 지시합니다. 개발 팀이 CloudFormation StackSets을 사용하여 SQS 큐를 배포하도록 지시합니다.` },
    { k:'B', en:`Update the SCP to enforce the cost allocation tag in CloudFormation stacks. Instruct the development team to use CloudFormation modules to define SQS queues. Instruct the development team to deploy the SQS queues by using CloudFormation stacks.`, ko:`SCP를 업데이트하여 CloudFormation 스택의 비용 할당 태그를 강제합니다. 개발 팀이 CloudFormation 모듈을 사용하여 SQS 큐를 정의하도록 지시합니다. 개발 팀이 CloudFormation 스택을 사용하여 SQS 큐를 배포하도록 지시합니다.` },
    { k:'C', en:`Use AWS CDK tagging to enforce the cost allocation tag in CloudFormation StackSets. Instruct the development team to use the AWS CDK to define SQS queues. Instruct the development team to deploy the SQS queues by using CDK stacks.`, ko:`AWS CDK 태깅을 사용하여 CloudFormation StackSets의 비용 할당 태그를 강제합니다. 개발 팀이 AWS CDK를 사용하여 SQS 큐를 정의하도록 지시합니다. 개발 팀이 CDK 스택을 사용하여 SQS 큐를 배포하도록 지시합니다.` },
    { k:'D', en:`Use AWS CDK tagging to enforce the cost allocation tag in CloudFormation stacks. Instruct the development team to use the AWS CDK to define SQS queues. Instruct the development team to deploy the SQS queues by using CDK feature flags.`, ko:`AWS CDK 태깅을 사용하여 CloudFormation 스택의 비용 할당 태그를 강제합니다. 개발 팀이 AWS CDK를 사용하여 SQS 큐를 정의하도록 지시합니다. 개발 팀이 CDK 기능 플래그를 사용하여 SQS 큐를 배포하도록 지시합니다.` },
  ],
  answer: ['B'],
  vote: '62% B',
  explain: `<p><span class="mark-ok">✅ B — SCP + CloudFormation 모듈</span></p><p>SCP(서비스 제어 정책)는 조직 수준에서 비용 할당 태그 없이 SQS 큐를 생성하는 API 호출을 거부할 수 있어 태깅을 강제로 적용합니다. CloudFormation 모듈(Modules)은 재사용 가능한 CloudFormation 컴포넌트로, 표준 SQS 큐 구성(일관된 설정)을 모듈화하여 모든 팀이 동일한 구성을 사용하도록 강제합니다. 이 조합이 태깅 강제 + 코드 재사용 + 일관된 구성이라는 세 가지 요구 사항을 모두 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Organizations 태그 정책은 태그 값의 형식을 강제하지만 태그 미설정 시 생성을 차단하지는 않으며, CloudFormation 자체를 쓰도록 하는 것은 코드 재사용(일관된 SQS 구성)을 보장하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — CDK 태깅은 개발자가 코드에서 태그를 빠뜨리면 강제할 수 없습니다. CDK Stacks는 코드 재사용 측면에서 모듈보다 덜 구조적입니다.</p>
<p><span class="mark-no">❌ D</span> — CDK 기능 플래그(feature flags)는 CDK 동작 변경에 사용되며, 태깅 강제나 코드 재사용 목적에 적합하지 않습니다.</p>`,
  disc: [{ ans:'B (62%)', txt:'SCP로 태깅을 강제하고, CloudFormation Modules로 SQS 표준 구성을 재사용 가능한 컴포넌트화하여 일관성 확보' }]
},
{
  n: 353,
  en: `A DevOps team manages a company's AWS account. The company wants to ensure that specific AWS resource configuration changes are automatically reverted.<br>Which solution will meet this requirement?`,
  ko: `DevOps 팀은 회사의 AWS 계정을 관리합니다. 회사는 특정 AWS 리소스 구성 변경이 자동으로 되돌려지기를 원합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS Config rules to detect changes in resource configurations. Configure remediation action that uses AWS Systems Manager Automation documents to revert the configuration changes.`, ko:`AWS Config 규칙을 사용하여 리소스 구성 변경을 감지합니다. AWS Systems Manager Automation 문서를 사용하는 수정 작업을 구성하여 구성 변경을 되돌립니다.` },
    { k:'B', en:`Use Amazon CloudWatch alarms to monitor resource metrics. When an alarm is activated, use an Amazon Simple Notification Service (Amazon SNS) topic to notify an administrator to manually revert the configuration changes.`, ko:`Amazon CloudWatch 경보를 사용하여 리소스 지표를 모니터링합니다. 경보가 활성화되면 Amazon SNS 토픽을 사용하여 관리자에게 구성 변경을 수동으로 되돌리도록 알립니다.` },
    { k:'C', en:`Use AWS CloudFormation to create a stack that deploys the necessary configuration changes. Update the stack when configuration changes need to be reverted.`, ko:`AWS CloudFormation을 사용하여 필요한 구성 변경을 배포하는 스택을 생성합니다. 구성 변경을 되돌려야 할 때 스택을 업데이트합니다.` },
    { k:'D', en:`Use AWS Trusted Advisor to check for noncompliant configurations. Manually apply necessary changes based on Trusted Advisor recommendations.`, ko:`AWS Trusted Advisor를 사용하여 비준수 구성을 확인합니다. Trusted Advisor 권장 사항을 기반으로 필요한 변경 사항을 수동으로 적용합니다.` },
  ],
  answer: ['A'],
  vote: '95% A',
  explain: `<p><span class="mark-ok">✅ A — AWS Config + SSM Automation 자동 수정</span></p><p>AWS Config 규칙은 리소스 구성 변경을 실시간으로 감지하고 비준수 상태를 식별합니다. Config 규칙의 자동 수정(Auto Remediation) 기능을 사용하면 SSM Automation 문서를 트리거하여 변경된 구성을 원래 상태로 자동 되돌릴 수 있습니다. 이 조합은 감지 및 자동 수정의 전체 흐름을 완전 자동화합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — CloudWatch 경보는 메트릭 기반이며, 관리자에게 수동 수정을 알리는 방식은 자동 수정 요구 사항을 충족하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — CloudFormation 스택 업데이트는 수동 작업이 필요하며 자동으로 변경을 되돌리지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Trusted Advisor는 수동 검토 도구이며 자동 수정 기능이 없습니다.</p>`,
  disc: [{ ans:'A (95%)', txt:'AWS Config의 자동 수정 기능이 SSM Automation과 결합되면 구성 변경을 완전 자동으로 감지하고 되돌리는 유일한 솔루션' }]
},
{
  n: 354,
  en: `A company releases a new application in a new AWS account. The application includes an AWS Lambda function that processes messages from an Amazon Simple Queue Service (Amazon SQS) standard queue. The Lambda function stores the results in an Amazon S3 bucket for further downstream processing. The Lambda function needs to process the messages within a specific period of time after the messages are published. The Lambda function has a batch size of 10 messages and takes a few seconds to process a batch of messages. As load increases on the application's first day of service, messages in the queue accumulate at a greater rate than the Lambda function can process the messages. Some messages miss the required processing timelines. The logs show that many messages in the queue have data that is not valid. The company needs to meet the timeline requirements for messages that have valid data.<br>Which solution will meet these requirements?`,
  ko: `회사는 새 AWS 계정에 새 애플리케이션을 출시합니다. 애플리케이션에는 Amazon SQS 표준 큐에서 메시지를 처리하는 AWS Lambda 함수가 포함되어 있습니다. Lambda 함수는 추가 다운스트림 처리를 위해 결과를 Amazon S3 버킷에 저장합니다. Lambda 함수는 메시지가 게시된 후 특정 기간 내에 메시지를 처리해야 합니다. Lambda 함수의 배치 크기는 10개 메시지이며 메시지 배치를 처리하는 데 몇 초가 걸립니다. 서비스 첫날에 부하가 증가함에 따라 큐의 메시지가 Lambda 함수가 처리할 수 있는 속도보다 빠르게 축적됩니다. 일부 메시지는 필요한 처리 타임라인을 놓칩니다. 로그에는 큐의 많은 메시지에 유효하지 않은 데이터가 있는 것으로 나타납니다. 회사는 유효한 데이터를 가진 메시지에 대한 타임라인 요구 사항을 충족해야 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Increase the Lambda function's reserved concurrency. Configure S3 Transfer Acceleration on the S3 bucket. Configure an SQS dead-letter queue.`, ko:`Lambda 함수의 예약된 동시성을 늘립니다. S3 버킷에 S3 Transfer Acceleration을 구성합니다. SQS 데드 레터 큐를 구성합니다.` },
    { k:'B', en:`Increase the Lambda function's batch size. Decrease the Lambda function's reserved concurrency. Configure an SQS dead-letter queue.`, ko:`Lambda 함수의 배치 크기를 늘립니다. Lambda 함수의 예약된 동시성을 줄입니다. SQS 데드 레터 큐를 구성합니다.` },
    { k:'C', en:`Increase the Lambda function's batch size. Configure S3 Transfer Acceleration on the S3 bucket. Configure an SQS dead-letter queue.`, ko:`Lambda 함수의 배치 크기를 늘립니다. S3 버킷에 S3 Transfer Acceleration을 구성합니다. SQS 데드 레터 큐를 구성합니다.` },
    { k:'D', en:`Keep the Lambda function's batch size the same. Configure the Lambda function to report failed batch items. Configure an SQS dead-letter queue.`, ko:`Lambda 함수의 배치 크기를 그대로 유지합니다. Lambda 함수가 실패한 배치 항목을 보고하도록 구성합니다. SQS 데드 레터 큐를 구성합니다.` },
  ],
  answer: ['D'],
  vote: '81% D',
  explain: `<p><span class="mark-ok">✅ D — 실패 배치 항목 보고 + DLQ</span></p><p>핵심 문제는 유효하지 않은 데이터를 가진 메시지가 배치 전체를 재처리하게 만들어 유효한 메시지의 처리 타임라인을 놓치게 한다는 점입니다. <strong>배치 항목 실패 보고(ReportBatchItemFailures)</strong>를 구성하면 Lambda는 부분적으로 성공한 배치에서 실패한 항목만 SQS로 반환하고, 성공한 항목은 재처리하지 않습니다. 유효하지 않은 데이터는 <strong>데드 레터 큐(DLQ)</strong>로 이동하여 유효한 메시지 처리를 방해하지 않습니다. 배치 크기를 유지하면 처리량에 영향을 주지 않으면서 처리 효율성을 개선할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — S3 Transfer Acceleration은 S3 업로드 속도를 높이지만 메시지 처리 병목과 무관합니다. 예약된 동시성 증가만으로는 유효하지 않은 메시지로 인한 배치 재처리 문제를 해결하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — 배치 크기를 늘리면 유효하지 않은 메시지가 더 많은 유효 메시지와 함께 처리되어 실패 시 더 많은 재처리가 발생합니다. 동시성 감소는 처리량을 더욱 줄입니다.</p>
<p><span class="mark-no">❌ C</span> — 배치 크기를 늘리면 문제가 악화됩니다. S3 Transfer Acceleration은 관련이 없습니다.</p>`,
  disc: [{ ans:'D (81%)', txt:'ReportBatchItemFailures로 유효하지 않은 메시지만 격리하고 유효한 메시지는 계속 처리, DLQ로 유효하지 않은 메시지를 보관하여 타임라인 충족' }]
},
{
  n: 355,
  en: `A software team is using AWS CodePipeline to automate its Java application release pipeline. The pipeline consists of a source stage, then a build stage, and then a deploy stage. Each stage contains a single action that has a <code>runOrder</code> value of 1. The team wants to integrate unit tests into the existing release pipeline. The team needs a solution that deploys only the code changes that pass all unit tests.<br>Which solution will meet these requirements?`,
  ko: `소프트웨어 팀은 AWS CodePipeline을 사용하여 Java 애플리케이션 릴리스 파이프라인을 자동화하고 있습니다. 파이프라인은 소스 스테이지, 빌드 스테이지, 배포 스테이지로 구성됩니다. 각 스테이지에는 <code>runOrder</code> 값이 1인 단일 액션이 포함됩니다. 팀은 기존 릴리스 파이프라인에 단위 테스트를 통합하려고 합니다. 팀은 모든 단위 테스트를 통과한 코드 변경 사항만 배포하는 솔루션이 필요합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Modify the build stage. Add a test action that has a <code>runOrder</code> value of 1. Use AWS CodeDeploy as the action provider to run unit tests.`, ko:`빌드 스테이지를 수정합니다. <code>runOrder</code> 값이 1인 테스트 액션을 추가합니다. AWS CodeDeploy를 액션 공급자로 사용하여 단위 테스트를 실행합니다.` },
    { k:'B', en:`Modify the build stage. Add a test action that has a <code>runOrder</code> value of 2. Use AWS CodeBuild as the action provider to run unit tests.`, ko:`빌드 스테이지를 수정합니다. <code>runOrder</code> 값이 2인 테스트 액션을 추가합니다. AWS CodeBuild를 액션 공급자로 사용하여 단위 테스트를 실행합니다.` },
    { k:'C', en:`Modify the deploy stage. Add a test action that has a <code>runOrder</code> value of 1. Use AWS CodeDeploy as the action provider to run unit tests.`, ko:`배포 스테이지를 수정합니다. <code>runOrder</code> 값이 1인 테스트 액션을 추가합니다. AWS CodeDeploy를 액션 공급자로 사용하여 단위 테스트를 실행합니다.` },
    { k:'D', en:`Modify the deploy stage. Add a test action that has a <code>runOrder</code> value of 2. Use AWS CodeBuild as the action provider to run unit tests.`, ko:`배포 스테이지를 수정합니다. <code>runOrder</code> 값이 2인 테스트 액션을 추가합니다. AWS CodeBuild를 액션 공급자로 사용하여 단위 테스트를 실행합니다.` },
  ],
  answer: ['B'],
  vote: '92% B',
  explain: `<p><span class="mark-ok">✅ B — 빌드 스테이지에 runOrder 2로 CodeBuild 테스트 액션 추가</span></p><p>빌드 스테이지에 테스트 액션을 추가하면 빌드 완료 후 배포 전에 단위 테스트가 실행됩니다. <code>runOrder</code> 값을 2로 설정하면 기존 빌드 액션(runOrder 1) 이후에 순차적으로 실행됩니다. AWS CodeBuild는 단위 테스트 실행에 적합한 완전 관리형 빌드 서비스입니다. 테스트가 실패하면 파이프라인이 중단되어 배포 스테이지로 진행하지 않습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CodeDeploy는 배포 서비스로, 단위 테스트 실행에 적합하지 않습니다. runOrder 1은 기존 빌드 액션과 병렬로 실행됩니다.</p>
<p><span class="mark-no">❌ C, D</span> — 배포 스테이지에 테스트를 추가하면 이미 배포가 시작된 후에 테스트가 실행되므로 "테스트 통과 후 배포" 요구 사항을 충족하지 않습니다.</p>`,
  disc: [{ ans:'B (92%)', txt:'빌드 스테이지에서 빌드 후 테스트를 순차 실행(runOrder 2)하여 테스트 실패 시 배포 스테이지 진입을 차단하는 표준 패턴' }]
},
{
  n: 356,
  en: `A company uses AWS WAF to protect its cloud infrastructure. A DevOps engineer needs to give an operations team the ability to analyze log messages from AWS WAF. The operations team needs to be able to create alarms for specific patterns in the log output.<br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `회사는 AWS WAF를 사용하여 클라우드 인프라를 보호합니다. DevOps 엔지니어는 운영 팀이 AWS WAF의 로그 메시지를 분석할 수 있도록 해야 합니다. 운영 팀은 로그 출력의 특정 패턴에 대한 경보를 생성할 수 있어야 합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon CloudWatch Logs log group. Configure the appropriate AWS WAF web ACL to send log messages to the log group. Instruct the operations team to create CloudWatch metric filters.`, ko:`Amazon CloudWatch Logs 로그 그룹을 생성합니다. 적절한 AWS WAF 웹 ACL이 로그 메시지를 로그 그룹으로 보내도록 구성합니다. 운영 팀이 CloudWatch 지표 필터를 생성하도록 지시합니다.` },
    { k:'B', en:`Create an Amazon OpenSearch Service cluster and appropriate indexes. Configure an Amazon Kinesis Data Firehose delivery stream to stream log data to the indexes. Use OpenSearch Dashboards to create filters and widgets.`, ko:`Amazon OpenSearch Service 클러스터 및 적절한 인덱스를 생성합니다. Amazon Kinesis Data Firehose 전송 스트림을 구성하여 로그 데이터를 인덱스로 스트리밍합니다. OpenSearch Dashboards를 사용하여 필터와 위젯을 생성합니다.` },
    { k:'C', en:`Create an Amazon S3 bucket for the log output. Configure AWS WAF to send log outputs to the S3 bucket. Instruct the operations team to create AWS Lambda functions that detect each desired log message pattern. Configure the Lambda functions to publish to an Amazon Simple Notification Service (Amazon SNS) topic.`, ko:`로그 출력을 위한 Amazon S3 버킷을 생성합니다. AWS WAF가 로그 출력을 S3 버킷으로 보내도록 구성합니다. 운영 팀이 각 원하는 로그 메시지 패턴을 감지하는 AWS Lambda 함수를 생성하도록 지시합니다. Lambda 함수가 Amazon SNS 토픽에 게시하도록 구성합니다.` },
    { k:'D', en:`Create an Amazon S3 bucket for the log output. Configure AWS WAF to send log outputs to the S3 bucket. Use Amazon Athena to create an external table definition that fits the log message pattern. Instruct the operations team to write SQL queries and to create Amazon CloudWatch metric filters for the Athena queries.`, ko:`로그 출력을 위한 Amazon S3 버킷을 생성합니다. AWS WAF가 로그 출력을 S3 버킷으로 보내도록 구성합니다. Amazon Athena를 사용하여 로그 메시지 패턴에 맞는 외부 테이블 정의를 생성합니다. 운영 팀이 SQL 쿼리를 작성하고 Athena 쿼리에 대한 Amazon CloudWatch 지표 필터를 생성하도록 지시합니다.` },
  ],
  answer: ['A'],
  vote: '78% A',
  explain: `<p><span class="mark-ok">✅ A — CloudWatch Logs + 지표 필터</span></p><p>AWS WAF는 Amazon CloudWatch Logs로 직접 로그를 전송하도록 지원합니다. CloudWatch Logs에 저장된 WAF 로그에 대해 운영 팀은 <strong>지표 필터(Metric Filters)</strong>를 생성하여 특정 패턴을 감지하고 CloudWatch 경보를 설정할 수 있습니다. 추가 인프라(Kinesis, OpenSearch, S3 등) 없이 완전히 관리형 서비스만으로 로그 분석과 경보 생성이 가능하므로 운영 오버헤드가 가장 낮습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — OpenSearch + Kinesis Data Firehose 설정은 복잡하고 비용이 많이 들며, 경보 생성 기능이 CloudWatch만큼 직관적이지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — S3에 저장 후 Lambda 함수를 별도로 작성하는 방식은 운영 팀에게 개발 부담을 주므로 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ D</span> — S3 + Athena + CloudWatch 지표 필터 조합은 불필요하게 복잡합니다. Athena 쿼리에 대해 직접 CloudWatch 지표 필터를 생성하는 것도 기술적으로 맞지 않습니다.</p>`,
  disc: [{ ans:'A (78%)', txt:'WAF→CloudWatch Logs→지표 필터→경보로 이어지는 완전 관리형 파이프라인이 최소 오버헤드 솔루션' }]
},
{
  n: 357,
  en: `A DevOps engineer is setting up an Amazon Elastic Container Service (Amazon ECS) blue/green deployment for an application by using AWS CodeDeploy and AWS CloudFormation. During the deployment window, the application must be highly available and CodeDeploy must shift 10% of traffic to a new version of the application every minute until all traffic is shifted.<br>Which configuration should the DevOps engineer add in the CloudFormation template to meet these requirements?`,
  ko: `DevOps 엔지니어는 AWS CodeDeploy 및 AWS CloudFormation을 사용하여 애플리케이션의 Amazon ECS 블루/그린 배포를 설정하고 있습니다. 배포 창 동안 애플리케이션은 고가용성을 유지해야 하며, CodeDeploy는 모든 트래픽이 전환될 때까지 매 분마다 새 버전의 애플리케이션으로 트래픽의 10%를 전환해야 합니다.<br>이 요구 사항을 충족하기 위해 DevOps 엔지니어가 CloudFormation 템플릿에 추가해야 하는 구성은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Add an AppSpec file with the <code>CodeDeployDefault.ECSLinear10PercentEvery1Minutes</code> deployment configuration.`, ko:`<code>CodeDeployDefault.ECSLinear10PercentEvery1Minutes</code> 배포 구성으로 AppSpec 파일을 추가합니다.` },
    { k:'B', en:`Add the <code>AWS::CodeDeployBlueGreen</code> transform and the <code>AWS::CodeDeploy::BlueGreen</code> hook parameter with the <code>CodeDeployDefault.ECSLinear10PercentEvery1Minutes</code> deployment configuration.`, ko:`<code>CodeDeployDefault.ECSLinear10PercentEvery1Minutes</code> 배포 구성과 함께 <code>AWS::CodeDeployBlueGreen</code> 변환 및 <code>AWS::CodeDeploy::BlueGreen</code> 훅 파라미터를 추가합니다.` },
    { k:'C', en:`Add an AppSpec file with the <code>ECSCanary10Percent5Minutes</code> deployment configuration.`, ko:`<code>ECSCanary10Percent5Minutes</code> 배포 구성으로 AppSpec 파일을 추가합니다.` },
    { k:'D', en:`Add the <code>AWS::CodeDeployBlueGreen</code> transform and the <code>AWS::CodeDeploy::BlueGreen</code> hook parameter with the <code>ECSCanary10Percent5Minutes</code> deployment configuration.`, ko:`<code>ECSCanary10Percent5Minutes</code> 배포 구성과 함께 <code>AWS::CodeDeployBlueGreen</code> 변환 및 <code>AWS::CodeDeploy::BlueGreen</code> 훅 파라미터를 추가합니다.` },
  ],
  answer: ['B'],
  vote: '89% B',
  explain: `<p><span class="mark-ok">✅ B — CloudFormation BlueGreen 변환 + Linear10PercentEvery1Minutes</span></p><p>CloudFormation 템플릿에서 ECS 블루/그린 배포를 구성하려면 <code>AWS::CodeDeployBlueGreen</code> 변환과 <code>AWS::CodeDeploy::BlueGreen</code> 훅이 필요합니다. AppSpec 파일은 독립 배포 시 사용하지만, CloudFormation 통합에서는 이 훅을 통해 배포 구성을 지정합니다. <code>CodeDeployDefault.ECSLinear10PercentEvery1Minutes</code>는 매 분마다 10%씩 선형적으로 트래픽을 전환하는 배포 구성으로, 요구 사항(매 분 10%)에 정확히 부합합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, C</span> — CloudFormation 통합 배포에서 AppSpec 파일을 직접 지정하지 않습니다. AppSpec은 직접 CodeDeploy 배포 시 사용합니다.</p>
<p><span class="mark-no">❌ D</span> — ECSCanary10Percent5Minutes는 처음 10%를 전환하고 5분 대기 후 나머지를 전환하는 카나리 방식으로, "매 분마다 10%씩" 요구 사항과 다릅니다.</p>`,
  disc: [{ ans:'B (89%)', txt:'CloudFormation 블루/그린 배포는 AWS::CodeDeployBlueGreen 변환 필수, ECSLinear10PercentEvery1Minutes가 매분 10% 선형 전환 요건 충족' }]
},
{
  n: 358,
  en: `A company is using AWS CodePipeline to automate its release pipeline. AWS CodeDeploy is being used in the pipeline to deploy an application to Amazon Elastic Container Service (Amazon ECS) using the blue/green deployment model. The company wants to implement scripts to test the green version of the application before shifting traffic. These scripts will complete in 5 minutes or less. If errors are discovered during these tests, the application must be rolled back.<br>Which strategy will meet these requirements?`,
  ko: `회사는 AWS CodePipeline을 사용하여 릴리스 파이프라인을 자동화하고 있습니다. AWS CodeDeploy가 파이프라인에서 블루/그린 배포 모델을 사용하여 Amazon ECS에 애플리케이션을 배포하는 데 사용됩니다. 회사는 트래픽을 전환하기 전에 그린 버전의 애플리케이션을 테스트하는 스크립트를 구현하려고 합니다. 이 스크립트는 5분 이내에 완료됩니다. 테스트 중 오류가 발견되면 애플리케이션을 롤백해야 합니다.<br>이 요구 사항을 충족하는 전략은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Add a stage to the CodePipeline pipeline between the source and deploy stages. Use AWS CodeBuild to create a runtime environment and build commands in the buildspec file to invoke test scripts. If errors are found, use the <code>aws deploy stop-deployment</code> command to stop the deployment.`, ko:`소스 스테이지와 배포 스테이지 사이에 CodePipeline 파이프라인에 스테이지를 추가합니다. AWS CodeBuild를 사용하여 런타임 환경을 생성하고 buildspec 파일의 빌드 명령으로 테스트 스크립트를 호출합니다. 오류가 발견되면 <code>aws deploy stop-deployment</code> 명령을 사용하여 배포를 중지합니다.` },
    { k:'B', en:`Add a stage to the CodePipeline pipeline between the source and deploy stages. Use an AWS Lambda function to run the test scripts. If errors are found, use the <code>aws deploy stop-deployment</code> command to stop the deployment.`, ko:`소스 스테이지와 배포 스테이지 사이에 CodePipeline 파이프라인에 스테이지를 추가합니다. AWS Lambda 함수를 사용하여 테스트 스크립트를 실행합니다. 오류가 발견되면 <code>aws deploy stop-deployment</code> 명령을 사용하여 배포를 중지합니다.` },
    { k:'C', en:`Add a hooks section to the CodeDeploy AppSpec file. Use the <code>AfterAllowTestTraffic</code> lifecycle event to invoke an AWS Lambda function to run the test scripts. If errors are found, exit the Lambda function with an error to initiate rollback.`, ko:`CodeDeploy AppSpec 파일에 훅 섹션을 추가합니다. <code>AfterAllowTestTraffic</code> 수명 주기 이벤트를 사용하여 AWS Lambda 함수를 호출하여 테스트 스크립트를 실행합니다. 오류가 발견되면 Lambda 함수를 오류와 함께 종료하여 롤백을 시작합니다.` },
    { k:'D', en:`Add a hooks section to the CodeDeploy AppSpec file. Use the <code>AfterAllowTraffic</code> lifecycle event to invoke the test scripts. If errors are found, create a CloudWatch alarm to initiate a rollback.`, ko:`CodeDeploy AppSpec 파일에 훅 섹션을 추가합니다. <code>AfterAllowTraffic</code> 수명 주기 이벤트를 사용하여 테스트 스크립트를 호출합니다. 오류가 발견되면 CloudWatch 경보를 생성하여 롤백을 시작합니다.` },
  ],
  answer: ['C'],
  vote: '84% C',
  explain: `<p><span class="mark-ok">✅ C — AppSpec AfterAllowTestTraffic + Lambda 롤백</span></p><p>ECS 블루/그린 배포에서 CodeDeploy AppSpec 파일의 <code>AfterAllowTestTraffic</code> 수명 주기 훅은 테스트 트래픽이 그린(새 버전) 환경으로 허용된 후, 실제 프로덕션 트래픽이 전환되기 전에 실행됩니다. 이 시점에 Lambda 함수로 테스트 스크립트를 실행하고, 오류 발생 시 Lambda가 실패 상태로 종료하면 CodeDeploy가 자동으로 롤백을 트리거합니다. 5분 이내 완료되는 테스트에 Lambda가 적합하며, 트래픽 전환 전 테스트와 자동 롤백 요구 사항을 모두 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, B</span> — 소스/배포 스테이지 사이에 추가하는 테스트는 그린 환경이 배포되기 전에 실행되므로 실제 배포된 그린 버전을 테스트할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — <code>AfterAllowTraffic</code>은 프로덕션 트래픽이 이미 그린으로 전환된 후에 실행되므로 "트래픽 전환 전 테스트" 요구 사항을 충족하지 않습니다.</p>`,
  disc: [{ ans:'C (84%)', txt:'AfterAllowTestTraffic은 테스트 트래픽만 허용된 상태에서 검증 가능, Lambda 오류 시 CodeDeploy 자동 롤백으로 트래픽 전환 전 보호 가능' }]
},
{
  n: 359,
  en: `A company runs applications on Amazon EC2 instances that are in an Amazon EC2 Auto Scaling group. The EC2 instances are behind an Application Load Balancer (ALB). Users recently began to experience errors when traffic was directed to some of the EC2 instances. A DevOps engineer discovers that the Auto Scaling group reports the problematic instances are healthy despite the application errors. User experience returns to normal after the DevOps engineer resolves the application errors on the problematic instances. The company wants to ensure that traffic is routed only to healthy instances that are not experiencing application errors. The company also wants a support team to receive a notification if the traffic routing configuration changes.<br>Which solution will meet these requirements?`,
  ko: `회사는 Amazon EC2 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. EC2 인스턴스는 Application Load Balancer(ALB) 뒤에 있습니다. 사용자들이 일부 EC2 인스턴스로 트래픽이 라우팅될 때 오류가 발생하기 시작했습니다. DevOps 엔지니어는 Auto Scaling 그룹이 애플리케이션 오류에도 불구하고 문제가 있는 인스턴스를 정상으로 보고하는 것을 발견합니다. DevOps 엔지니어가 문제가 있는 인스턴스의 애플리케이션 오류를 해결한 후 사용자 경험이 정상으로 돌아옵니다. 회사는 애플리케이션 오류가 발생하지 않는 정상 인스턴스로만 트래픽이 라우팅되도록 보장하려고 합니다. 또한 지원 팀이 트래픽 라우팅 구성이 변경되면 알림을 받기를 원합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure the Auto Scaling group to use ELB health checks. Enable AWS Config. Create an AWS Config rule to detect changes to the Auto Scaling group health check configuration. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive Config rule compliance change notifications.`, ko:`ELB 상태 확인을 사용하도록 Auto Scaling 그룹을 구성합니다. AWS Config를 활성화합니다. Auto Scaling 그룹 상태 확인 구성 변경을 감지하는 AWS Config 규칙을 생성합니다. Config 규칙 준수 변경 알림을 받도록 Amazon SNS 토픽을 구성합니다.` },
    { k:'B', en:`Configure the Auto Scaling group to use EC2 health checks. Enable AWS CloudTrail. Create an Amazon EventBridge rule to detect changes to the Auto Scaling group health check configuration. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive EventBridge notifications.`, ko:`EC2 상태 확인을 사용하도록 Auto Scaling 그룹을 구성합니다. AWS CloudTrail을 활성화합니다. Auto Scaling 그룹 상태 확인 구성 변경을 감지하는 Amazon EventBridge 규칙을 생성합니다. EventBridge 알림을 받도록 Amazon SNS 토픽을 구성합니다.` },
    { k:'C', en:`Configure the Auto Scaling group to use ELB health checks. Enable AWS CloudTrail. Create an Amazon EventBridge rule to detect changes to the Auto Scaling group health check configuration. Configure an Amazon Simple Notification Service (Amazon SNS) topic to receive EventBridge notifications.`, ko:`ELB 상태 확인을 사용하도록 Auto Scaling 그룹을 구성합니다. AWS CloudTrail을 활성화합니다. Auto Scaling 그룹 상태 확인 구성 변경을 감지하는 Amazon EventBridge 규칙을 생성합니다. EventBridge 알림을 받도록 Amazon SNS 토픽을 구성합니다.` },
    { k:'D', en:`Configure the Auto Scaling group to use ELB health checks. Create an Amazon CloudWatch synthetic canary to monitor the application. Create a CloudWatch alarm that is triggered when the CloudWatch canary fails. Configure the alarm to notify the support team when the alarm state is in alarm.`, ko:`ELB 상태 확인을 사용하도록 Auto Scaling 그룹을 구성합니다. 애플리케이션을 모니터링하는 Amazon CloudWatch 합성 카나리를 생성합니다. CloudWatch 카나리가 실패할 때 트리거되는 CloudWatch 경보를 생성합니다. 경보 상태가 경보 상태일 때 지원 팀에게 알리도록 경보를 구성합니다.` },
  ],
  answer: ['A'],
  vote: '71% A',
  explain: `<p><span class="mark-ok">✅ A — ELB 상태 확인 + AWS Config 규칙 + SNS</span></p><p><strong>ELB 상태 확인(ELB Health Checks)</strong>으로 전환하면 ALB가 각 인스턴스의 애플리케이션 수준 상태를 직접 확인합니다. 기본 EC2 상태 확인은 인스턴스 자체(OS)가 실행 중인지만 확인하지만, ELB 상태 확인은 실제 HTTP 응답을 확인하여 애플리케이션 오류가 있는 인스턴스를 비정상으로 표시합니다. <strong>AWS Config 규칙</strong>은 Auto Scaling 그룹의 상태 확인 구성 변경을 추적하고 변경 시 SNS를 통해 지원 팀에 알립니다. Config는 구성 변경 거버넌스 및 알림에 최적화된 서비스입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — EC2 상태 확인은 인스턴스 OS 수준 상태만 확인하여 애플리케이션 오류를 감지하지 못합니다. ELB 상태 확인이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — ELB 상태 확인은 맞지만, CloudTrail + EventBridge 조합은 Config보다 구성 변경 감지에 복잡합니다. Config가 구성 거버넌스에 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — CloudWatch 합성 카나리는 애플리케이션 모니터링에는 유용하지만, 라우팅 구성 변경 알림 요구 사항을 충족하지 않습니다.</p>`,
  disc: [{ ans:'A (71%)', txt:'ELB 헬스체크로 앱 오류 감지, AWS Config로 헬스체크 설정 변경을 추적하여 거버넌스 제어 및 SNS 알림 제공' }]
},
{
  n: 360,
  en: `A company's developers use Amazon EC2 instances as remote workstations. The company is concerned that users can create or modify EC2 security groups to allow unrestricted inbound access. A DevOps engineer needs to develop a solution to detect when users create unrestricted security group rules. The solution must detect changes to security group rules in near real time, remove unrestricted rules, and send email notifications to the security team. The DevOps engineer has created an AWS Lambda function that checks for security group ID from input, removes rules that grant unrestricted access, and sends notifications through Amazon Simple Notification Service (Amazon SNS).<br>What should the DevOps engineer do next to meet the requirements?`,
  ko: `회사의 개발자들은 원격 워크스테이션으로 Amazon EC2 인스턴스를 사용합니다. 회사는 사용자들이 무제한 인바운드 액세스를 허용하는 EC2 보안 그룹을 생성하거나 수정할 수 있다는 점을 우려하고 있습니다. DevOps 엔지니어는 사용자가 무제한 보안 그룹 규칙을 생성하는 시점을 감지하는 솔루션을 개발해야 합니다. 솔루션은 보안 그룹 규칙 변경을 거의 실시간으로 감지하고, 무제한 규칙을 제거하며, 보안 팀에 이메일 알림을 보내야 합니다. DevOps 엔지니어는 입력에서 보안 그룹 ID를 확인하고, 무제한 액세스를 허용하는 규칙을 제거하고, Amazon SNS를 통해 알림을 보내는 AWS Lambda 함수를 생성했습니다.<br>요구 사항을 충족하려면 DevOps 엔지니어가 다음에 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure the Lambda function to be invoked by the SNS topic. Create an AWS CloudTrail subscription for the SNS topic.`, ko:`Lambda 함수가 SNS 토픽에 의해 호출되도록 구성합니다. SNS 토픽에 대한 AWS CloudTrail 구독을 생성합니다.` },
    { k:'B', en:`Create an AWS Config rule for the Lambda function. Configure the rule to run when security group configurations change.`, ko:`Lambda 함수에 대한 AWS Config 규칙을 생성합니다. 보안 그룹 구성이 변경될 때 규칙이 실행되도록 구성합니다.` },
    { k:'C', en:`Create an Amazon EventBridge event rule that has the default event bus as the source. Define the rule's event pattern to match EC2 security group creation and modification events. Configure the rule to invoke the Lambda function.`, ko:`기본 이벤트 버스를 소스로 사용하는 Amazon EventBridge 이벤트 규칙을 생성합니다. EC2 보안 그룹 생성 및 수정 이벤트와 일치하도록 규칙의 이벤트 패턴을 정의합니다. 규칙이 Lambda 함수를 호출하도록 구성합니다.` },
    { k:'D', en:`Create an Amazon EventBridge custom event bus that subscribes to events from all AWS services. Configure the Lambda function to be invoked by the custom event bus.`, ko:`모든 AWS 서비스의 이벤트를 구독하는 Amazon EventBridge 사용자 지정 이벤트 버스를 생성합니다. Lambda 함수가 사용자 지정 이벤트 버스에 의해 호출되도록 구성합니다.` },
  ],
  answer: ['C'],
  vote: '93% C',
  explain: `<p><span class="mark-ok">✅ C — EventBridge 기본 이벤트 버스 + EC2 보안 그룹 이벤트 패턴 + Lambda</span></p><p>Amazon EventBridge의 기본 이벤트 버스는 AWS 서비스 이벤트를 자동으로 수신합니다. EC2 보안 그룹 생성(<code>AuthorizeSecurityGroupIngress</code>) 및 수정 이벤트를 필터링하는 이벤트 패턴을 규칙에 정의하면, 보안 그룹 변경 시 거의 실시간으로 이미 생성된 Lambda 함수가 트리거됩니다. Lambda는 무제한 규칙을 제거하고 SNS를 통해 이메일 알림을 발송합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudTrail이 SNS에 직접 구독하는 방식은 지원되지 않습니다. CloudTrail 이벤트를 SNS로 직접 보내려면 EventBridge가 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — AWS Config는 구성 변경 감지에 사용할 수 있지만, Config 규칙에서 Lambda를 직접 실행하면 실시간 대응이 EventBridge보다 느립니다. Lambda 함수 자체를 Config 규칙으로 등록하면 구조가 불필요하게 복잡해집니다.</p>
<p><span class="mark-no">❌ D</span> — 사용자 지정 이벤트 버스는 외부 이벤트 소스 또는 계정 간 이벤트에 사용됩니다. AWS 서비스 이벤트는 기본 이벤트 버스에서 수신해야 합니다.</p>`,
  disc: [{ ans:'C (93%)', txt:'EC2 보안 그룹 변경 이벤트는 기본 EventBridge 이벤트 버스에서 자동 수신, 이벤트 패턴 매칭 후 Lambda 직접 호출이 가장 간단하고 빠른 솔루션' }]
}
];
