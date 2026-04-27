window.QS_SET07 = [
{
    n: 61,
    ko: `개발팀은 <strong>AWS CloudFormation 스택</strong>을 사용하여 애플리케이션을 배포하려고 합니다. 그러나 <strong>개발자 IAM 역할</strong>에는 CloudFormation 템플릿에 지정된 리소스를 프로비저닝하는 데 필요한 권한이 없습니다. DevOps 엔지니어는 개발자가 스택을 배포할 수 있는 솔루션을 구현해야 합니다. 솔루션은 <strong>최소 권한의 원칙</strong>을 따라야 합니다.<br><br>
<strong>어떤 솔루션이 이러한 요구 사항을 충족할까요?</strong>`,
    en: `A development team wants to use <strong>AWS CloudFormation stacks</strong> to deploy an application. However, the <strong>developer IAM role</strong> does not have the required permissions to provision the resources that are specified in the AWS CloudFormation template. A DevOps engineer needs to implement a solution that allows the developers to deploy the stacks. The solution must follow the <strong>principle of least privilege</strong>.<br><br>
<strong>Which solution will meet these requirements?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`개발자가 필요한 리소스를 프로비저닝할 수 있는 <strong>IAM 정책</strong>을 만듭니다. 정책을 개발자 IAM 역할에 연결합니다.`, en:`Create an <strong>IAM policy</strong> that allows the developers to provision the required resources. Attach the policy to the developer IAM role.` },
      { k:'B', ko:`<strong>AWS CloudFormation에 대한 전체 액세스</strong>를 허용하는 IAM 정책을 만듭니다. 정책을 개발자 IAM 역할에 연결합니다.`, en:`Create an IAM policy that allows <strong>full access to AWS CloudFormation</strong>. Attach the policy to the developer IAM role.` },
      { k:'C', ko:`필요한 권한이 있는 <strong>AWS CloudFormation 서비스 역할</strong>을 만듭니다. 개발자 IAM 역할에 <strong><code>cloudformation:*</code></strong> 작업을 부여합니다. 스택 배포 중에 새 서비스 역할을 사용합니다.`, en:`Create an <strong>AWS CloudFormation service role</strong> that has the required permissions. Grant the developer IAM role a <strong><code>cloudformation:*</code></strong> action. Use the new service role during stack deployments.` },
      { k:'D', ko:`필요한 권한이 있는 <strong>AWS CloudFormation 서비스 역할</strong>을 만듭니다. 개발자 IAM 역할에 <strong><code>iam:PassRole</code></strong> 권한을 부여합니다. 스택 배포 중에 새 서비스 역할을 사용합니다.`, en:`Create an <strong>AWS CloudFormation service role</strong> that has the required permissions. Grant the developer IAM role the <strong><code>iam:PassRole</code></strong> permission. Use the new service role during stack deployments.` },
    ],
    answer: ['D'],
    vote: 'D 82%',
    explain: `<p><span class="mark-ok">✅ D — CloudFormation 서비스 역할 + iam:PassRole</span></p>
<p>최소 권한의 원칙에 가장 부합하는 솔루션입니다. 리소스 프로비저닝에 필요한 권한을 가진 <strong>CloudFormation 서비스 역할</strong>을 만들고, 개발자에게는 이 역할을 CloudFormation에 전달할 수 있는 <strong><code>iam:PassRole</code></strong> 권한만 부여합니다. 개발자는 리소스를 직접 생성하는 권한 없이도 CloudFormation을 통해 스택을 배포할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 개발자에게 직접 리소스 프로비저닝 권한을 부여하면 CloudFormation 외부에서도 해당 리소스를 생성/수정할 수 있어 최소 권한 원칙에 위배됩니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B</span> — CloudFormation 전체 액세스 권한은 과도한 권한 부여이며 최소 권한 원칙에 위배됩니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — <code>cloudformation:*</code>는 모든 CloudFormation 작업을 허용하는 과도한 권한입니다. <code>iam:PassRole</code> 없이는 서비스 역할을 전달할 수도 없습니다.</p>`,
    disc: [
      { ans: 'D (82%)', txt: 'CloudFormation 서비스 역할 사용 시 개발자는 iam:PassRole만 있으면 됩니다. 이 방식은 개발자가 CloudFormation 외부에서 해당 리소스를 직접 생성하는 것을 방지합니다.' }
    ]
  },
{
    n: 62,
    ko: `프로덕션 계정에는 <strong>수동으로 로그인한 모든 Amazon EC2 인스턴스가 24시간 이내에 종료</strong>되어야 한다는 요구 사항이 있습니다. 프로덕션 계정의 모든 애플리케이션은 <strong>Amazon CloudWatch Logs 에이전트</strong>가 구성된 Auto Scaling 그룹을 사용합니다.<br><br>
<strong>이 프로세스는 어떻게 자동화할 수 있습니까?</strong>`,
    en: `A production account has a requirement that any <strong>Amazon EC2 instance that has been logged in to manually must be terminated within 24 hours</strong>. All applications in the production account are using Auto Scaling groups with the <strong>Amazon CloudWatch Logs agent</strong> configured.<br><br>
<strong>How can this process be automated?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`<strong>AWS Step Functions</strong> 애플리케이션에 CloudWatch Logs 구독을 만듭니다. AWS Lambda 함수를 구성하여 로그인 이벤트를 생성한 EC2 인스턴스에 태그를 추가합니다. <strong>Amazon EventBridge</strong> 규칙을 만들어 하루에 한 번 두 번째 Lambda 함수를 호출하여 태그가 있는 모든 인스턴스를 종료합니다.`, en:`Create a CloudWatch Logs subscription to an <strong>AWS Step Functions</strong> application. Configure an AWS Lambda function to add a tag to the EC2 instance that produced the login event. Create an <strong>Amazon EventBridge</strong> rule to invoke a second Lambda function once a day that will terminate all instances with this tag.` },
      { k:'B', ko:`로그인 이벤트에 의해 호출되는 <strong>Amazon CloudWatch 알람</strong>을 만듭니다. 운영팀이 구독한 <strong>Amazon SNS 토픽</strong>에 알림을 보내고 24시간 이내에 EC2 인스턴스를 종료하도록 합니다.`, en:`Create an <strong>Amazon CloudWatch alarm</strong> that will be invoked by the login event. Send the notification to an <strong>Amazon SNS topic</strong> that the operations team is subscribed to, and have them terminate the EC2 instance within 24 hours.` },
      { k:'C', ko:`로그인 이벤트에 의해 호출되는 <strong>Amazon CloudWatch 알람</strong>을 만듭니다. <strong>Amazon SQS 대기열</strong>로 보내도록 알람을 구성합니다. 작업자 인스턴스 그룹을 사용하여 대기열의 메시지를 처리한 다음 <strong>Amazon EventBridge</strong> 규칙이 호출되도록 예약합니다.`, en:`Create an <strong>Amazon CloudWatch alarm</strong> that will be invoked by the login event. Configure the alarm to send to an <strong>Amazon SQS queue</strong>. Use a group of worker instances to process messages from the queue, which then schedules an <strong>Amazon EventBridge</strong> rule to be invoked.` },
      { k:'D', ko:`<strong>AWS Lambda 함수</strong>에 대한 <strong>CloudWatch Logs 구독</strong>을 만듭니다. 로그인 이벤트를 생성한 EC2 인스턴스에 <strong>태그</strong>를 추가하고 인스턴스를 폐기하도록 표시하도록 함수를 구성합니다. 태그가 있는 모든 인스턴스를 종료하는 <strong>매일 Lambda 함수</strong>를 호출하는 <strong>Amazon EventBridge 규칙</strong>을 만듭니다.`, en:`Create a <strong>CloudWatch Logs subscription</strong> to an <strong>AWS Lambda function</strong>. Configure the function to add a <strong>tag</strong> to the EC2 instance that produced the login event and mark the instance to be decommissioned. Create an <strong>Amazon EventBridge rule</strong> to invoke a <strong>daily Lambda function</strong> that terminates all instances with this tag.` },
    ],
    answer: ['D'],
    vote: 'D 100%',
    explain: `<p><span class="mark-ok">✅ D — CloudWatch Logs 구독 → Lambda(태그) + EventBridge(일별 Lambda 호출)</span></p>
<p>CloudWatch Logs 구독을 통해 로그인 이벤트가 발생하면 Lambda 함수가 즉시 해당 EC2 인스턴스에 태그를 추가합니다. 매일 실행되는 별도의 EventBridge → Lambda 로직이 태그된 인스턴스를 24시간 내에 종료하므로 요구사항을 완전히 자동화합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Step Functions 자체에 CloudWatch Logs 구독을 만들고 별도의 Lambda를 추가하는 구조는 불필요하게 복잡합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B</span> — SNS로 운영팀에게 알림을 보내고 수동으로 종료하는 방식은 자동화가 아닙니다. 24시간 보장도 불가합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — SQS 대기열과 작업자 인스턴스 그룹을 사용하는 과도하게 복잡한 구성이며, 인스턴스 종료 로직도 명확하지 않습니다.</p>`,
    disc: []
  },
{
    n: 63,
    ko: `한 회사가 <strong>AWS Organizations</strong>에서 조직의 모든 기능을 활성화했습니다. 조직에는 10개의 AWS 계정이 있으며, 내년에 500개로 늘어날 것으로 예상합니다. 회사는 조직의 각 기존 AWS 계정에서 <strong>AWS Config</strong>를 활성화했습니다. DevOps 엔지니어는 조직에서 <strong>생성되는 모든 향후 AWS 계정에 대해 AWS Config를 자동으로 활성화</strong>하는 솔루션을 구현해야 합니다.<br><br>
<strong>어떤 솔루션이 이 요구 사항을 충족할까요?</strong>`,
    en: `A company has enabled all features for its organization in <strong>AWS Organizations</strong>. The organization contains 10 AWS accounts and expects to increase to 500 accounts. The company has enabled <strong>AWS Config</strong> in each existing AWS account. A DevOps engineer must implement a solution that <strong>enables AWS Config automatically for all future AWS accounts</strong> that are created in the organization.<br><br>
<strong>Which solution will meet this requirement?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`조직의 관리 계정에서 <strong>CreateAccount API 호출</strong>에 반응하는 Amazon EventBridge 규칙을 만듭니다. 조직에 대한 AWS Config에 대한 <strong>신뢰할 수 있는 액세스</strong>를 가능하게 하는 AWS Lambda 함수를 호출하도록 규칙을 구성합니다.`, en:`In the organization's management account, create an Amazon EventBridge rule that reacts to a <strong>CreateAccount API call</strong>. Configure the rule to invoke an AWS Lambda function that enables <strong>trusted access</strong> to AWS Config for the organization.` },
      { k:'B', ko:`조직의 관리 계정에서 AWS Config를 활성화하기 위한 <strong>AWS CloudFormation 스택 세트</strong>를 만듭니다. Organizations를 통해 계정이 생성되면 <strong>스택 세트가 자동으로 배포</strong>되도록 구성합니다.`, en:`In the organization's management account, create an <strong>AWS CloudFormation stack set</strong> to enable AWS Config. Configure the stack set to <strong>deploy automatically</strong> when an account is created through Organizations.` },
      { k:'C', ko:`조직의 관리 계정에서 적절한 <strong>AWS Config API 호출을 허용</strong>하는 SCP를 만들어 AWS Config를 활성화합니다. SCP를 <strong>루트 수준 OU</strong>에 적용합니다.`, en:`In the organization's management account, create an <strong>SCP that allows</strong> the appropriate AWS Config API calls to enable AWS Config. Apply the SCP to the <strong>root-level OU</strong>.` },
      { k:'D', ko:`조직의 관리 계정에서 <strong>CreateAccount API 호출</strong>에 반응하는 Amazon EventBridge 규칙을 만듭니다. <strong>AWS Systems Manager Automation 런북</strong>을 호출하여 계정에 대한 AWS Config를 활성화하도록 규칙을 구성합니다.`, en:`In the organization's management account, create an Amazon EventBridge rule that reacts to a <strong>CreateAccount API call</strong>. Configure the rule to invoke an <strong>AWS Systems Manager Automation runbook</strong> to enable AWS Config for the account.` },
    ],
    answer: ['B'],
    vote: 'B 100%',
    explain: `<p><span class="mark-ok">✅ B — CloudFormation 스택 세트 자동 배포</span></p>
<p>AWS CloudFormation StackSets는 Organizations와 통합하여 <strong>새 계정이 생성될 때 자동으로 스택을 배포</strong>하는 기능을 지원합니다. 이를 통해 향후 생성되는 모든 계정에 AWS Config가 자동으로 활성화됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 신뢰할 수 있는 액세스(trusted access)를 활성화하는 것은 Config 자체를 새 계정에서 활성화하는 것이 아닙니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — SCP는 권한을 <strong>거부</strong>하는 데만 사용되며 서비스를 활성화하거나 허용하는 데 사용할 수 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — SSM Automation 런북은 가능하지만 CloudFormation StackSets의 자동 배포 기능보다 복잡합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'CloudFormation StackSets의 자동 배포(auto deployment) 기능은 Organizations의 새 계정에 스택을 자동으로 배포합니다. C의 SCP는 허용(Allow)이 아닌 거부(Deny)만 가능합니다.' }
    ]
  },
{
    n: 64,
    ko: `한 회사에 여러 애플리케이션이 있습니다. 회사의 여러 팀이 <strong>여러 언어와 프레임워크</strong>를 사용하여 애플리케이션을 개발했습니다. 애플리케이션은 <strong>온프레미스와 다른 운영 체제</strong>가 있는 다른 서버에서 실행됩니다. 각 팀은 자체 릴리스 프로토콜과 프로세스를 가지고 있습니다.<br><br>
회사는 <strong>소스 코드의 중앙 제어, 일관되고 자동화된 전달 파이프라인, 기본 인프라에서 가능한 한 적은 유지 관리 작업</strong>을 원합니다.<br><br>
<strong>DevOps 엔지니어는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?</strong>`,
    en: `A company has many applications. Different teams developed the applications by using <strong>multiple languages and frameworks</strong>. The applications run on premises and on different servers with <strong>different operating systems</strong>. Each team has its own release protocol and process.<br><br>
The company wants <strong>centralized control of source code, a consistent and automatic delivery pipeline, and as few maintenance tasks as possible</strong> on the underlying infrastructure.<br><br>
<strong>What should a DevOps engineer do to meet these requirements?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`모든 애플리케이션에 대해 <strong>하나의 AWS CodeCommit 리포지토리</strong>를 만듭니다. 각 애플리케이션의 코드를 다른 브랜치에 넣습니다. 브랜치를 병합하고 <strong>AWS CodeBuild</strong>를 사용하여 애플리케이션을 빌드합니다. <strong>AWS CodeDeploy</strong>를 사용하여 하나의 중앙화된 애플리케이션 서버에 배포합니다.`, en:`Create <strong>one AWS CodeCommit repository</strong> for all applications. Put each application's code in a different branch. Merge the branches, and use <strong>AWS CodeBuild</strong> to build the applications. Use <strong>AWS CodeDeploy</strong> to deploy the applications to one centralized application server.` },
      { k:'B', ko:`각 애플리케이션에 대해 <strong>AWS CodeCommit 리포지토리</strong>를 하나씩 만듭니다. <strong>AWS CodeBuild</strong>를 사용하여 한 번에 하나씩 애플리케이션을 빌드합니다. <strong>AWS CodeDeploy</strong>를 사용하여 하나의 중앙화된 애플리케이션 서버에 배포합니다.`, en:`Create one <strong>AWS CodeCommit repository</strong> for each of the applications. Use <strong>AWS CodeBuild</strong> to build the applications one at a time. Use <strong>AWS CodeDeploy</strong> to deploy the applications to one centralized application server.` },
      { k:'C', ko:`각 애플리케이션에 대해 <strong>AWS CodeCommit 리포지토리</strong>를 하나씩 만듭니다. <strong>AWS CodeBuild</strong>를 사용하여 한 번에 하나씩 애플리케이션을 빌드하고 각 서버에 대해 하나의 <strong>AMI</strong>를 만듭니다. <strong>AWS CloudFormation StackSets</strong>를 사용하여 이러한 AMI를 사용하여 Amazon EC2 플릿을 자동으로 프로비저닝하고 폐기합니다.`, en:`Create one <strong>AWS CodeCommit repository</strong> for each of the applications. Use <strong>AWS CodeBuild</strong> to build the applications one at a time and to create one <strong>AMI</strong> for each server. Use <strong>AWS CloudFormation StackSets</strong> to automatically provision and decommission Amazon EC2 fleets by using these AMIs.` },
      { k:'D', ko:`각 애플리케이션에 대해 <strong>AWS CodeCommit 리포지토리</strong>를 하나씩 만듭니다. <strong>AWS CodeBuild</strong>를 사용하여 <strong>Amazon ECR</strong>의 각 애플리케이션에 대해 <strong>Docker 이미지</strong>를 하나씩 빌드합니다. <strong>AWS CodeDeploy</strong>를 사용하여 <strong>AWS Fargate</strong>가 관리하는 인프라에서 <strong>Amazon ECS</strong>에 애플리케이션을 배포합니다.`, en:`Create one <strong>AWS CodeCommit repository</strong> for each of the applications. Use <strong>AWS CodeBuild</strong> to build one <strong>Docker image</strong> for each application in <strong>Amazon ECR</strong>. Use <strong>AWS CodeDeploy</strong> to deploy the applications to <strong>Amazon ECS</strong> on infrastructure that <strong>AWS Fargate</strong> manages.` },
    ],
    answer: ['D'],
    vote: 'D 93%',
    explain: `<p><span class="mark-ok">✅ D — CodeCommit + CodeBuild(Docker) + ECR + ECS on Fargate</span></p>
<p>컨테이너화(Docker)는 언어와 OS 의존성을 해결하며, <strong>AWS Fargate</strong>를 사용하면 서버 관리가 불필요해 인프라 유지 관리 작업이 최소화됩니다. 각 애플리케이션의 별도 리포지토리로 중앙 제어와 독립적인 CI/CD 파이프라인을 구현합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 모든 앱을 하나의 리포지토리에 브랜치로 관리하고 병합하는 것은 매우 나쁜 관행입니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B, C</span> — 컨테이너화 없이 EC2 기반 서버에 배포하면 다양한 OS/언어 환경 관리의 복잡성이 그대로 남습니다.</p>`,
    disc: []
  },
{
    n: 65,
    ko: `회사의 애플리케이션은 현재 단일 AWS 리전에 배포되어 있습니다. 최근 이 회사는 <strong>다른 대륙에 새로운 사무실</strong>을 열었고, 새로운 사무실의 사용자는 <strong>높은 지연 시간</strong>을 경험하고 있습니다. 이 회사의 애플리케이션은 <strong>Application Load Balancer(ALB)</strong> 뒤의 Amazon EC2 인스턴스에서 실행되고 <strong>Amazon DynamoDB</strong>를 데이터베이스 계층으로 사용합니다.<br><br>
<strong>지연 시간 문제를 해결하기 위해 어떤 조치 조합을 취해야 합니까? (세 가지를 선택하세요.)</strong>`,
    en: `A company's application is currently deployed to a single AWS Region. Recently, the company opened a new office on <strong>a different continent</strong>. The users in the new office are experiencing <strong>high latency</strong>. The company's application runs on Amazon EC2 instances behind an <strong>Application Load Balancer (ALB)</strong> and uses <strong>Amazon DynamoDB</strong> as the database layer.<br><br>
<strong>Which combination of actions should be taken to address the latency issues? (Choose three.)</strong>`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k:'A', ko:`<strong>리전 간 복제</strong>가 활성화된 새 리전에 새 <strong>DynamoDB 테이블</strong>을 만듭니다.`, en:`Create a new <strong>DynamoDB table</strong> in the new Region with <strong>cross-Region replication</strong> enabled.` },
      { k:'B', ko:`새로운 ALB 및 Auto Scaling 그룹 <strong>글로벌 리소스</strong>를 만들고 새 ALB가 트래픽을 새 Auto Scaling 그룹으로 전달하도록 구성합니다.`, en:`Create new ALB and Auto Scaling group <strong>global resources</strong> and configure the new ALB to direct traffic to the new Auto Scaling group.` },
      { k:'C', ko:`<strong>새 리전</strong>에 새 ALB 및 Auto Scaling 그룹 리소스를 만들고 새 ALB가 새 Auto Scaling 그룹으로 트래픽을 전달하도록 구성합니다.`, en:`Create new ALB and Auto Scaling group resources in the <strong>new Region</strong> and configure the new ALB to direct traffic to the new Auto Scaling group.` },
      { k:'D', ko:`<strong>Amazon Route 53 레코드, 상태 확인</strong> 및 <strong>지연 기반 라우팅 정책</strong>을 생성하여 ALB로 라우팅합니다.`, en:`Create <strong>Amazon Route 53 records, health checks</strong>, and <strong>latency-based routing policies</strong> to route to the ALB.` },
      { k:'E', ko:`<strong>Amazon Route 53 별칭, 상태 검사</strong> 및 <strong>장애 조치 라우팅 정책</strong>을 생성하여 ALB로 라우팅합니다.`, en:`Create <strong>Amazon Route 53 aliases, health checks</strong>, and <strong>failover routing policies</strong> to route to the ALB.` },
      { k:'F', ko:`DynamoDB 테이블을 <strong>글로벌 테이블</strong>로 변환합니다.`, en:`Convert the DynamoDB table to a <strong>global table</strong>.` },
    ],
    answer: ['C','D','F'],
    vote: 'CDF 100%',
    explain: `<p><span class="mark-ok">✅ C — 새 리전에 ALB + Auto Scaling 그룹 생성</span></p>
<p>새 리전에 애플리케이션 인프라를 구축하여 현지 사용자의 지연 시간을 줄입니다.</p>
<p><span class="mark-ok">✅ D — Route 53 지연 기반 라우팅</span></p>
<p>사용자와 ALB 사이의 지연 시간을 기반으로 가장 가까운 정상 리전으로 트래픽을 자동 라우팅합니다.</p>
<p><span class="mark-ok">✅ F — DynamoDB 글로벌 테이블 변환</span></p>
<p>글로벌 테이블은 여러 리전에서 거의 실시간으로 데이터를 복제하여 지역 사용자의 읽기/쓰기 지연 시간을 줄입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — DynamoDB 리전 간 복제는 백업 목적으로 사용되며, 글로벌 테이블처럼 활성 읽기/쓰기를 지원하지 않아 지연 시간 개선 효과가 제한적입니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B</span> — "글로벌 리소스"인 ALB와 Auto Scaling 그룹은 존재하지 않습니다. 리전별 리소스입니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ E</span> — 장애 조치 라우팅은 지연 시간 최적화가 아닌 가용성 확보를 위한 것입니다.</p>`,
    disc: []
  },
{
    n: 66,
    ko: `DevOps 엔지니어는 기존 AWS 계정 세트에 <strong>핵심 보안 제어 세트</strong>를 적용해야 합니다. 계정은 <strong>AWS Organizations</strong>의 조직에 있습니다. 개별 팀은 <strong>AdministratorAccess</strong> 관리 정책을 사용하여 개별 계정을 관리합니다.<br><br>
모든 계정에 대해 <strong>AWS CloudTrail 및 AWS Config는 사용 가능한 모든 AWS 리전에서 켜져 있어야</strong> 합니다. <strong>개별 계정 관리자는 기준 리소스를 편집하거나 삭제할 수 없어야</strong> 합니다. 단, <strong>개별 계정 관리자는 자신의 CloudTrail 트레일 및 AWS Config 규칙을 편집하거나 삭제할 수 있어야</strong> 합니다.<br><br>
<strong>어떤 솔루션이 가장 운영 효율적인 방식으로 이러한 요구 사항을 충족할까요?</strong>`,
    en: `A DevOps engineer needs to apply a <strong>core set of security controls</strong> to an existing set of AWS accounts. The accounts are in an organization in <strong>AWS Organizations</strong>. Individual teams will administer individual accounts by using the <strong>AdministratorAccess</strong> AWS managed policy.<br><br>
For all accounts, <strong>AWS CloudTrail and AWS Config must be turned on in all available AWS Regions</strong>. <strong>Individual account administrators must not be able to edit or delete any of the baseline resources</strong>. However, <strong>individual account administrators must be able to edit or delete their own CloudTrail trails and AWS Config rules</strong>.<br><br>
<strong>Which solution will meet these requirements in the MOST operationally efficient way?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`표준 계정 리소스를 정의하는 <strong>AWS CloudFormation 템플릿</strong>을 만듭니다. <strong>CloudFormation StackSets</strong>를 사용하여 조직의 관리 계정에서 모든 계정에 템플릿을 배포합니다. <strong>스택 정책</strong>을 설정하여 <code>Update:Delete</code> 작업을 거부합니다.`, en:`Create an <strong>AWS CloudFormation template</strong> that defines the standard account resources. Deploy the template to all accounts from the organization's management account by using <strong>CloudFormation StackSets</strong>. Set the <strong>stack policy</strong> to deny <code>Update:Delete</code> actions.` },
      { k:'B', ko:`<strong>AWS Control Tower</strong>를 활성화합니다. <strong>AWS Control Tower에 기존 계정을 등록</strong>합니다. 개별 계정 관리자에게 CloudTrail 및 AWS Config에 대한 액세스 권한을 부여합니다.`, en:`Enable <strong>AWS Control Tower</strong>. <strong>Enroll the existing accounts</strong> in AWS Control Tower. Grant the individual account administrators access to CloudTrail and AWS Config.` },
      { k:'C', ko:`<strong>AWS Config 관리 계정</strong>을 지정합니다. <strong>AWS CloudFormation StackSets</strong>를 사용하여 모든 계정에서 <strong>AWS Config 레코더</strong>를 만듭니다. AWS Config 관리 계정을 사용하여 조직에 <strong>AWS Config 규칙</strong>을 배포합니다. 조직의 관리 계정에서 <strong>CloudTrail 조직 트레일</strong>을 만듭니다. <strong>SCP</strong>를 사용하여 AWS Config 레코더의 수정 또는 삭제를 거부합니다.`, en:`Designate an <strong>AWS Config management account</strong>. Create <strong>AWS Config recorders</strong> in all accounts by using <strong>AWS CloudFormation StackSets</strong>. Deploy <strong>AWS Config rules</strong> to the organization by using the AWS Config management account. Create a <strong>CloudTrail organization trail</strong> in the organization's management account. Deny modification or deletion of the <strong>AWS Config recorders</strong> by using an <strong>SCP</strong>.` },
      { k:'D', ko:`표준 계정 리소스를 정의하는 <strong>AWS CloudFormation 템플릿</strong>을 만듭니다. <strong>CloudFormation StackSets</strong>를 사용하여 조직의 관리 계정에서 모든 계정에 템플릿을 배포합니다. 주체가 조직의 관리 계정의 관리자가 아닌 한 <strong>CloudTrail 리소스 또는 AWS Config 리소스에 대한 업데이트 또는 삭제를 방지</strong>하는 <strong>SCP</strong>를 만듭니다.`, en:`Create an <strong>AWS CloudFormation template</strong> that defines the standard account resources. Deploy the template to all accounts from the organization's management account by using <strong>CloudFormation StackSets</strong>. Create an <strong>SCP</strong> that prevents updates or deletions to <strong>CloudTrail resources or AWS Config resources</strong> unless the principal is an administrator of the organization's management account.` },
    ],
    answer: ['D'],
    vote: 'D 48% / C 43%',
    explain: `<p><span class="mark-ok">✅ D — CloudFormation StackSets + 조건부 SCP</span></p>
<p>CloudFormation StackSets로 모든 계정에 CloudTrail과 AWS Config를 배포하고, SCP로 관리 계정 관리자를 제외한 나머지가 기준 리소스를 수정/삭제하지 못하도록 보호합니다. 개별 계정 관리자는 자신이 직접 만든 CloudTrail 트레일이나 Config 규칙은 계속 관리할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — AWS Config 레코더에 대해서만 SCP를 적용하여 CloudTrail 보호가 누락됩니다. 또한 조직 트레일은 관리 계정에서만 편집 가능하여 개별 계정 관리자의 자체 트레일 관리 요구사항과 충돌할 수 있습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ A</span> — 스택 정책은 CloudFormation 스택 자체의 업데이트를 제한하지만, SCP처럼 IAM 레벨에서 서비스 액세스를 차단하지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B</span> — AWS Control Tower는 기존 계정 등록이 복잡하며, 가장 운영 효율적인 방법으로 보기 어렵습니다.</p>`,
    disc: [
      { ans: 'D 48% / C 43% (논쟁)', txt: '이 문제는 커뮤니티에서 논쟁이 있습니다. SCP에서 principal 조건은 기술적으로 지원되지 않는다는 의견(C 지지)과, D가 CloudTrail과 Config 모두를 포괄하며 더 완전한 솔루션이라는 의견(D 지지)이 있습니다. 제안된 정답은 D입니다.' }
    ]
  },
{
    n: 67,
    ko: `한 회사가 AWS Organizations의 조직에 AWS 계정을 가지고 있습니다. <strong>AWS Config</strong>는 각 AWS 계정에서 수동으로 구성됩니다. 회사는 조직의 모든 계정에 대해 <strong>AWS Config를 중앙에서 구성</strong>하는 솔루션을 구현해야 합니다. 솔루션은 또한 <strong>중앙 계정에 대한 리소스 변경 사항을 기록</strong>해야 합니다.<br><br>
<strong>DevOps 엔지니어는 이러한 요구 사항을 충족하기 위해 어떤 작업 조합을 수행해야 합니까? (두 가지를 선택하십시오.)</strong>`,
    en: `A company has its AWS accounts in an organization in AWS Organizations. <strong>AWS Config</strong> is manually configured in each AWS account. The company needs to implement a solution to <strong>centrally configure AWS Config</strong> for all accounts in the organization. The solution also must <strong>record resource changes to a central account</strong>.<br><br>
<strong>Which combination of actions should a DevOps engineer perform to meet these requirements? (Choose two.)</strong>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k:'A', ko:`AWS Config에 대한 <strong>위임된 관리자 계정</strong>을 구성합니다. 조직에서 AWS Config에 대한 <strong>신뢰할 수 있는 액세스</strong>를 활성화합니다.`, en:`Configure a <strong>delegated administrator account</strong> for AWS Config. Enable <strong>trusted access</strong> for AWS Config in the organization.` },
      { k:'B', ko:`AWS Config에 대한 <strong>위임된 관리자 계정</strong>을 구성합니다. 조직의 관리 계정에서 AWS Config에 대한 <strong>서비스 연결 역할</strong>을 만듭니다.`, en:`Configure a <strong>delegated administrator account</strong> for AWS Config. Create a <strong>service-linked role</strong> for AWS Config in the organization's management account.` },
      { k:'C', ko:`<strong>AWS Config 애그리게이터</strong>를 생성하기 위해 <strong>AWS CloudFormation 템플릿</strong>을 만듭니다. 조직의 모든 계정에 템플릿을 배포하도록 <strong>CloudFormation 스택 세트</strong>를 구성합니다.`, en:`Create an <strong>AWS CloudFormation template</strong> to create an <strong>AWS Config aggregator</strong>. Configure a <strong>CloudFormation stack set</strong> to deploy the template to all accounts in the organization.` },
      { k:'D', ko:`조직의 <strong>관리 계정</strong>에서 <strong>AWS Config 조직 집계기</strong>를 만듭니다. 조직의 모든 AWS 계정과 모든 AWS 리전에서 데이터 수집을 구성합니다.`, en:`Create an <strong>AWS Config organization aggregator</strong> in the organization's <strong>management account</strong>. Configure data collection from all AWS accounts in the organization and from all AWS Regions.` },
      { k:'E', ko:`<strong>위임된 관리자 계정</strong>에서 <strong>AWS Config 조직 집계기</strong>를 만듭니다. 조직의 모든 AWS 계정과 모든 AWS 리전에서 데이터 수집을 구성합니다.`, en:`Create an <strong>AWS Config organization aggregator</strong> in the <strong>delegated administrator account</strong>. Configure data collection from all AWS accounts in the organization and from all AWS Regions.` },
    ],
    answer: ['A','E'],
    vote: 'AE 85% / BD 15%',
    explain: `<p><span class="mark-ok">✅ A — 위임된 관리자 계정 구성 + 신뢰할 수 있는 액세스 활성화</span></p>
<p>신뢰할 수 있는 액세스(trusted access)를 활성화하면 서비스 연결 역할이 자동으로 생성되며, 위임된 관리자 계정이 조직 전체의 AWS Config를 관리할 수 있게 됩니다.</p>
<p><span class="mark-ok">✅ E — 위임된 관리자 계정에서 조직 집계기 생성</span></p>
<p>위임된 관리자 계정에서 조직 집계기를 만들어야 모든 멤버 계정의 Config 데이터를 중앙에서 수집할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 신뢰할 수 있는 액세스를 활성화하면 서비스 연결 역할이 자동으로 생성되므로 별도로 만들 필요가 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — AWS Config가 이미 각 계정에 구성되어 있으므로 CloudFormation으로 다시 배포할 필요가 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — 조직 집계기는 위임된 관리자 계정에 만들어야 하며, 관리 계정에 만드는 것은 모범 사례가 아닙니다.</p>`,
    disc: [
      { ans: 'AE (85%)', txt: '신뢰할 수 있는 액세스를 활성화하면 서비스 연결 역할이 자동으로 생성됩니다. 조직 집계기는 반드시 위임된 관리자 계정에 생성해야 합니다.' }
    ]
  },
{
    n: 68,
    ko: `한 회사가 Amazon EC2에 호스팅된 콘텐츠 공유 웹 애플리케이션을 <strong>서버리스 아키텍처</strong>로 마이그레이션하려고 합니다. 회사는 새로운 서버리스 애플리케이션을 위해 <strong>Amazon API Gateway와 AWS Lambda</strong>를 사용할 계획입니다. 또한 전체 사용자 기반에 기능을 출시하기 전에 <strong>소수의 사용자에게 새로운 기능을 테스트</strong>할 수 있는 기능을 유지해야 합니다.<br><br>
<strong>어떤 배포 전략이 이러한 요구 사항을 충족할까요?</strong>`,
    en: `A company wants to migrate its content sharing web application hosted on Amazon EC2 to a <strong>serverless architecture</strong>. The company is planning to use <strong>Amazon API Gateway and AWS Lambda</strong> for its new serverless application. It will also need to retain the ability to <strong>test new features on a small number of users</strong> before rolling the features out to the entire user base.<br><br>
<strong>Which deployment strategy will meet these requirements?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`<strong>AWS CDK</strong>를 사용하여 API Gateway 및 Lambda 함수를 배포합니다. CloudFormation 스택을 업데이트하고 새 버전의 API 및 Lambda 함수를 배포합니다. 카나리아 릴리스 전략에 <strong>Route 53 장애 조치 라우팅 정책</strong>을 사용합니다.`, en:`Use <strong>AWS CDK</strong> to deploy API Gateway and Lambda functions. Update the AWS CloudFormation stack and deploy the new version of the APIs and Lambda functions. Use a <strong>Route 53 failover routing policy</strong> for the canary release strategy.` },
      { k:'B', ko:`<strong>AWS CloudFormation</strong>을 사용하여 <strong>Lambda 함수 버전</strong>을 사용하여 API Gateway 및 Lambda 함수를 배포합니다. CloudFormation 스택을 새 Lambda 코드로 업데이트하고 <strong>카나리아 릴리스 전략</strong>을 사용하여 API 버전을 업데이트합니다. 테스트가 완료되면 새 버전을 홍보합니다.`, en:`Use <strong>AWS CloudFormation</strong> to deploy API Gateway and Lambda functions using <strong>Lambda function versions</strong>. Update the CloudFormation stack with the new Lambda code and update the API versions using a <strong>canary release strategy</strong>. Promote the new version when testing is complete.` },
      { k:'C', ko:`<strong>AWS Elastic Beanstalk</strong>를 사용하여 API Gateway 및 Lambda 함수를 배포합니다. <strong>Elastic Beanstalk 블루/그린 배포</strong>를 사용하여 트래픽을 점진적으로 이동합니다.`, en:`Use <strong>AWS Elastic Beanstalk</strong> to deploy API Gateway and Lambda functions. Shift traffic gradually using an <strong>Elastic Beanstalk blue/green deployment</strong>.` },
      { k:'D', ko:`<strong>AWS OpsWorks</strong>를 사용하여 서비스 계층에 API Gateway를 배포하고 사용자 지정 계층에 Lambda 함수를 배포합니다. OpsWorks를 사용하여 <strong>블루/그린 배포</strong>를 수행하고 트래픽을 점진적으로 이동합니다.`, en:`Use <strong>AWS OpsWorks</strong> to deploy API Gateway in the service layer and Lambda functions in a custom layer. Use OpsWorks to perform a <strong>blue/green deployment</strong> and shift traffic gradually.` },
    ],
    answer: ['B'],
    vote: 'B 100%',
    explain: `<p><span class="mark-ok">✅ B — CloudFormation + Lambda 버전 + API Gateway 카나리아 릴리스</span></p>
<p>API Gateway는 <strong>카나리아 릴리스 배포</strong>를 기본 지원합니다. Lambda 함수 버전과 결합하면 소수의 사용자에게 새 기능을 테스트하고 완료 후 전체 배포로 전환할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Route 53 장애 조치 라우팅은 카나리아 릴리스가 아닌 고가용성을 위한 기능입니다. 카나리아 릴리스에는 가중 라우팅이 필요합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — Elastic Beanstalk는 서버리스 배포 플랫폼이 아닙니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — OpsWorks는 구성 관리 플랫폼으로, API Gateway와 Lambda 배포에 적합하지 않습니다.</p>`,
    disc: []
  },
{
    n: 69,
    ko: `개발팀은 <strong>AWS CodeCommit, AWS CodePipeline, AWS CodeBuild</strong>를 사용하여 애플리케이션을 개발하고 배포합니다. 코드 변경 사항은 <strong>풀 리퀘스트</strong>를 통해 제출됩니다. 시간이 지남에 따라 풀 리퀘스트 수가 증가했고 파이프라인은 테스트 실패로 자주 차단됩니다. 개발팀은 <strong>풀 리퀘스트가 병합되기 전에 각 풀 리퀘스트에서 단위 및 통합 테스트를 실행</strong>하려고 합니다.<br><br>
<strong>어떤 솔루션이 이러한 요구 사항을 충족할까요?</strong>`,
    en: `A development team uses <strong>AWS CodeCommit, AWS CodePipeline, and AWS CodeBuild</strong> to develop and deploy an application. Changes to the code are submitted by <strong>pull requests</strong>. The pipeline is frequently blocked because of failing tests. The development team wants to <strong>run the unit and integration tests on each pull request before it is merged</strong>.<br><br>
<strong>Which solution will meet these requirements?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`단위 및 통합 테스트를 실행하기 위한 CodeBuild 프로젝트를 만듭니다. <strong>CodeCommit 승인 규칙 템플릿</strong>을 만듭니다. <strong>CodeBuild 프로젝트의 성공적인 호출을 요구</strong>하도록 템플릿을 구성합니다. 프로젝트의 CodeCommit 리포지토리에 승인 규칙을 첨부합니다.`, en:`Create a CodeBuild project to run the unit and integration tests. Create a <strong>CodeCommit approval rule template</strong>. Configure the template to require the <strong>successful invocation of the CodeBuild project</strong>. Attach the approval rule to the project's CodeCommit repository.` },
      { k:'B', ko:`CodeCommit에서 <strong>pullRequestCreated</strong> 이벤트를 일치시키는 <strong>Amazon EventBridge 규칙</strong>을 만듭니다. 단위 및 통합 테스트를 실행하기 위해 CodeBuild 프로젝트를 만듭니다. CodeBuild 프로젝트를 이벤트의 CodeCommit 저장소 및 브랜치 정보가 있는 사용자 지정 이벤트 페이로드를 포함하는 EventBridge 규칙의 <strong>대상</strong>으로 구성합니다.`, en:`Create an <strong>Amazon EventBridge rule</strong> to match <strong>pullRequestCreated</strong> events from CodeCommit. Create a CodeBuild project to run the unit and integration tests. Configure the CodeBuild project as a <strong>target</strong> of the EventBridge rule that includes a custom event payload with the CodeCommit repository and branch information from the event.` },
      { k:'C', ko:`CodeCommit에서 <strong>pullRequestCreated</strong> 이벤트를 일치시키는 <strong>Amazon EventBridge 규칙</strong>을 만듭니다. 빌드가 풀 리퀘스트에서 시작되는 경우 <strong>배포 단계를 실행하지 않도록</strong> 기존 CodePipeline 파이프라인을 수정합니다.`, en:`Create an <strong>Amazon EventBridge rule</strong> to match <strong>pullRequestCreated</strong> events from CodeCommit. Modify the existing <strong>CodePipeline pipeline</strong> to not run the deploy steps if the build is started from a pull request.` },
      { k:'D', ko:`단위 및 통합 테스트를 실행하기 위한 CodeBuild 프로젝트를 만듭니다. 풀 리퀘스트가 생성되거나 업데이트될 때 일치하는 <strong>CodeCommit 알림 규칙</strong>을 만듭니다. CodeBuild 프로젝트를 호출하도록 알림 규칙을 구성합니다.`, en:`Create a CodeBuild project to run the unit and integration tests. Create a <strong>CodeCommit notification rule</strong> that matches when a pull request is created or updated. Configure the notification rule to invoke the CodeBuild project.` },
    ],
    answer: ['B'],
    vote: 'B 70% / D 15%',
    explain: `<p><span class="mark-ok">✅ B — EventBridge(pullRequestCreated) → CodeBuild</span></p>
<p>풀 리퀘스트가 생성될 때 EventBridge 규칙이 트리거되어 CodeBuild 프로젝트를 자동으로 실행합니다. CodeCommit 저장소와 브랜치 정보를 사용자 지정 페이로드로 전달하여 정확한 소스를 테스트할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CodeCommit 승인 규칙 템플릿은 CodeBuild 프로젝트의 성공적인 호출을 직접 요구하는 기능을 지원하지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — 기존 파이프라인을 수정하는 것은 복잡하며, 풀 리퀘스트 자동 테스트와 다릅니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — CodeCommit 알림 규칙은 SNS 토픽이나 AWS Chatbot을 대상으로 하며, CodeBuild 프로젝트를 직접 호출할 수 없습니다.</p>`,
    disc: [
      { ans: 'B (70%)', txt: 'CodeCommit 알림 규칙(D)은 SNS/Chatbot만 대상으로 가능하여 CodeBuild를 직접 호출할 수 없습니다. EventBridge(B)는 CodeBuild를 직접 대상으로 설정 가능합니다.' }
    ]
  },
{
    n: 70,
    ko: `한 회사에 Amazon EC2 인스턴스 플릿에서 실행되는 애플리케이션이 있습니다. 이 애플리케이션은 자주 재시작해야 합니다. 재시작이 필요할 때 애플리케이션 로그에 오류 메시지가 포함됩니다. 애플리케이션 로그는 <strong>Amazon CloudWatch Logs</strong>의 로그 그룹에 게시됩니다.<br><br>
현재 CloudWatch 알람은 로그에 재시작 관련 오류 메시지가 많이 포함된 경우 <strong>Amazon SNS 토픽</strong>을 통해 애플리케이션 엔지니어에게 알리고, 엔지니어가 수동으로 애플리케이션을 재시작합니다.<br><br>
DevOps 엔지니어는 <strong>인스턴스를 재시작하지 않고 인스턴스에서 애플리케이션 재시작을 자동화</strong>하는 솔루션을 구현해야 합니다.<br><br>
<strong>어떤 솔루션이 이러한 요구 사항을 가장 운영 효율적인 방식으로 충족할까요?</strong>`,
    en: `A company has an application that runs on a fleet of Amazon EC2 instances. The application requires frequent restarts. The application logs are published to a log group in <strong>Amazon CloudWatch Logs</strong>.<br><br>
An Amazon CloudWatch alarm notifies an application engineer through an <strong>Amazon SNS topic</strong> when the logs contain a large number of restart-related error messages. The application engineer manually restarts the application on the instances after receiving a notification.<br><br>
A DevOps engineer needs to implement a solution to <strong>automate the application restart on the instances without restarting the instances</strong>.<br><br>
<strong>Which solution will meet these requirements in the MOST operationally efficient manner?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`인스턴스에서 애플리케이션을 다시 시작하는 스크립트를 실행하는 <strong>AWS Systems Manager Automation 런북</strong>을 구성합니다. <strong>SNS 토픽</strong>을 구성하여 런북을 호출합니다.`, en:`Configure an <strong>AWS Systems Manager Automation runbook</strong> that runs a script to restart the application on the instances. Configure the <strong>SNS topic</strong> to invoke the runbook.` },
      { k:'B', ko:`인스턴스에서 애플리케이션을 다시 시작하는 <strong>AWS Lambda 함수</strong>를 만듭니다. Lambda 함수를 <strong>SNS 토픽의 이벤트 대상</strong>으로 구성합니다.`, en:`Create an <strong>AWS Lambda function</strong> that restarts the application on the instances. Configure the Lambda function as an <strong>event destination of the SNS topic</strong>.` },
      { k:'C', ko:`인스턴스에서 애플리케이션을 다시 시작하는 스크립트를 실행하는 <strong>AWS Systems Manager Automation 런북</strong>을 구성합니다. 런북을 호출하는 <strong>AWS Lambda 함수</strong>를 만듭니다. Lambda 함수를 <strong>SNS 토픽의 이벤트 대상</strong>으로 구성합니다.`, en:`Configure an <strong>AWS Systems Manager Automation runbook</strong> that runs a script to restart the application on the instances. Create an <strong>AWS Lambda function</strong> to invoke the runbook. Configure the Lambda function as an <strong>event destination of the SNS topic</strong>.` },
      { k:'D', ko:`인스턴스에서 애플리케이션을 다시 시작하는 스크립트를 실행하는 <strong>AWS Systems Manager Automation 런북</strong>을 구성합니다. <strong>CloudWatch 알람이 ALARM 상태로 전환</strong>될 때 반응하는 <strong>Amazon EventBridge 규칙</strong>을 구성합니다. 규칙의 <strong>대상으로 런북</strong>을 지정합니다.`, en:`Configure an <strong>AWS Systems Manager Automation runbook</strong> that runs a script to restart the application on the instances. Configure an <strong>Amazon EventBridge rule</strong> that reacts when the <strong>CloudWatch alarm enters ALARM state</strong>. Specify the <strong>runbook as a target</strong> of the rule.` },
    ],
    answer: ['D'],
    vote: 'D 70% / C 16%',
    explain: `<p><span class="mark-ok">✅ D — SSM Automation 런북 + EventBridge(CloudWatch 알람 → ALARM) → 런북</span></p>
<p>CloudWatch → EventBridge → SSM Automation 런북 구조로 코드 없이 가장 간결하게 자동화를 구현합니다. EventBridge는 CloudWatch 알람이 ALARM 상태로 전환될 때 SSM 런북을 직접 대상으로 지정할 수 있어 Lambda 중간 계층이 불필요합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SNS 토픽은 SSM Automation 런북을 직접 호출할 수 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B</span> — Lambda로 EC2 인스턴스 내부의 프로세스를 재시작하려면 SSM Run Command를 별도로 호출해야 하며, SSM Automation 런북보다 복잡합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — C도 동작하지만 SNS → Lambda → SSM Automation (4단계) 구조로 D의 CloudWatch → EventBridge → SSM (3단계)보다 구성 요소가 많아 운영 효율성이 낮습니다.</p>`,
    disc: [
      { ans: 'D (70%)', txt: 'EventBridge는 CloudWatch 알람을 직접 SSM Automation 런북으로 라우팅할 수 있어 Lambda 없이도 자동화가 가능합니다. C는 동작하지만 불필요한 Lambda 계층이 추가됩니다.' }
    ]
  }
];
