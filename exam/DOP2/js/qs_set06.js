window.QS_SET06 = [
{
    n: 51,
    ko: `빠르게 성장하는 회사가 AWS 개발 환경에 대한 개발자 수요에 맞춰 확장하고자 합니다. 개발 환경은 AWS Management Console에서 수동으로 생성됩니다. 네트워킹 팀은 <strong>AWS CloudFormation</strong>을 사용하여 네트워킹 인프라를 관리하고 Amazon VPC 및 모든 서브넷에 대한 스택 출력 값을 내보냅니다. 개발 환경에는 Application Load Balancer, Amazon EC2 Auto Scaling 그룹, 보안 그룹, Amazon DynamoDB 테이블과 같은 공통 표준이 있습니다.<br><br>
수요에 부응하기 위해 DevOps 엔지니어는 개발 환경 생성을 자동화하고자 합니다. 애플리케이션을 지원하는 데 필요한 인프라가 증가할 것으로 예상되므로 배포된 인프라를 쉽게 업데이트할 수 있는 방법이 있어야 합니다. CloudFormation을 사용하여 개발 환경의 템플릿을 생성합니다.<br><br>
<strong>이러한 요구 사항을 충족하고 개발자에게 일관된 AWS 환경을 신속하게 제공하는 접근 방식은 무엇입니까?</strong>`,
    en: `A rapidly growing company wants to scale for developer demand for AWS development environments. Development environments are created manually in the AWS Management Console. The networking team uses <strong>AWS CloudFormation</strong> to manage the networking infrastructure, exporting stack output values for the Amazon VPC and all subnets. The development environments have common standards, such as Application Load Balancers, Amazon EC2 Auto Scaling groups, security groups, and Amazon DynamoDB tables.<br><br>
To keep up with demand, the DevOps engineer wants to automate the creation of development environments. Because the infrastructure required to support the application is expected to grow, there must be a way to easily update the deployed infrastructure. CloudFormation will be used to create a template for the development environments.<br><br>
<strong>Which approach will meet these requirements and quickly provide consistent AWS environments for developers?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`템플릿의 Resources 섹션에서 <strong>Fn::ImportValue</strong> 내장 함수를 사용하여 VPC 및 서브넷 값을 검색합니다. 개발 환경에 CloudFormation <strong>StackSets</strong>를 사용하고 Count 입력 매개변수로 필요한 환경 수를 나타냅니다. <strong>UpdateStackSet</strong> 명령을 사용하여 기존 개발 환경을 업데이트합니다.`, en:`Use <strong>Fn::ImportValue</strong> intrinsic functions in the Resources section of the template to retrieve VPC and subnet values. Use CloudFormation <strong>StackSets</strong> for the development environments, using the Count input parameter to indicate the number of environments needed. Use the <strong>UpdateStackSet</strong> command to update existing development environments.` },
      { k:'B', ko:`<strong>중첩 스택</strong>을 사용하여 공통 인프라 구성 요소를 정의합니다. 내보낸 값에 액세스하려면 <strong>TemplateURL</strong>을 사용하여 네트워킹 팀의 템플릿을 참조합니다. VPC 및 서브넷 값을 검색하려면 루트 템플릿의 <strong>Parameters 섹션</strong>에서 Fn::ImportValue 내장 함수를 사용합니다. <strong>CreateChangeSet 및 ExecuteChangeSet</strong> 명령을 사용하여 기존 개발 환경을 업데이트합니다.`, en:`Use <strong>nested stacks</strong> to define common infrastructure components. To access the exported values, use <strong>TemplateURL</strong> to reference the networking team's template. To retrieve VPC and subnet values, use <strong>Fn::ImportValue</strong> intrinsic functions in the <strong>Parameters section</strong> of the root template. Use the <strong>CreateChangeSet and ExecuteChangeSet</strong> commands to update existing development environments.` },
      { k:'C', ko:`<strong>중첩 스택</strong>을 사용하여 공통 인프라 구성 요소를 정의합니다. 중첩 스택의 <strong>리소스</strong>와 함께 <strong>Fn::ImportValue</strong> 내장 함수를 사용하여 VPC 및 서브넷 값을 검색합니다. <strong>CreateChangeSet 및 ExecuteChangeSet</strong> 명령을 사용하여 기존 개발 환경을 업데이트합니다.`, en:`Use <strong>nested stacks</strong> to define common infrastructure components. Use <strong>Fn::ImportValue</strong> intrinsic functions with the resources of the nested stack to retrieve VPC and subnet values. Use the <strong>CreateChangeSet and ExecuteChangeSet</strong> commands to update existing development environments.` },
      { k:'D', ko:`루트 템플릿의 <strong>Parameters 섹션</strong>에서 <strong>Fn::ImportValue</strong> 내장 함수를 사용하여 VPC 및 서브넷 값을 검색합니다. CloudFormation 중첩 스택에서 생성해야 하는 순서대로 개발 리소스를 정의합니다. <strong>CreateChangeSet 및 ExecuteChangeSet</strong> 명령을 사용하여 기존 개발 환경을 업데이트합니다.`, en:`Use <strong>Fn::ImportValue</strong> intrinsic functions in the <strong>Parameters section</strong> of the root template to retrieve VPC and subnet values. Define the development resources in the order they need to be created in the CloudFormation nested stacks. Use the <strong>CreateChangeSet and ExecuteChangeSet</strong> commands to update existing development environments.` },
    ],
    answer: ['C'],
    vote: 'C 78% / B 22%',
    explain: `<p><span class="mark-ok">✅ C — 중첩 스택 + Fn::ImportValue (리소스 섹션)</span></p>
<p>CloudFormation 내장 함수(<strong>Fn::ImportValue</strong> 등)는 <strong>Resources, Outputs, Metadata, UpdatePolicy 속성</strong>에서만 사용할 수 있습니다. Parameters 섹션에서는 사용 불가능합니다. 따라서 중첩 스택의 리소스에서 Fn::ImportValue를 사용하는 C가 정답입니다. CreateChangeSet/ExecuteChangeSet은 기존 인프라를 안전하게 업데이트하는 표준 방법입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Parameters 섹션에서 Fn::ImportValue 사용은 AWS 공식 문서에 따라 허용되지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — 마찬가지로 Parameters 섹션에서 내장 함수를 사용하므로 오답입니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ A</span> — StackSets는 다중 계정/리전 배포에 사용되며, Count 파라미터는 CloudFormation 표준 기능이 아닙니다.</p>`,
    disc: [
      { ans: 'C (78%)', txt: 'AWS 공식 문서에 따르면 내장 함수는 리소스 속성, 출력, 메타데이터 속성, 업데이트 정책 속성에서만 사용 가능합니다. Parameters 섹션에서 사용하는 B, D는 오답입니다.' }
    ]
  },
{
    n: 52,
    ko: `한 회사가 <strong>AWS Organizations</strong>를 사용하여 여러 계정을 관리합니다. 정보 보안 정책에 따라 암호화되지 않은 모든 <strong>Amazon EBS 볼륨</strong>은 비준수로 표시해야 합니다. DevOps 엔지니어는 솔루션을 자동으로 배포하고 이 규정 준수 검사가 항상 존재하도록 해야 합니다.<br><br>
<strong>어떤 솔루션이 이를 달성할까요?</strong>`,
    en: `A company uses <strong>AWS Organizations</strong> to manage multiple accounts. Information security policies require that all unencrypted <strong>Amazon EBS volumes</strong> be marked as non-compliant. A DevOps engineer needs to automatically deploy the solution and ensure that this compliance check is always present.<br><br>
<strong>Which solution will accomplish this?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`EBS 암호화 확인을 위한 <strong>AWS Inspector</strong> 규칙을 정의하는 CloudFormation 템플릿을 만듭니다. 모든 계정과 공유된 S3 버킷에 템플릿을 저장합니다. S3의 CloudFormation 템플릿을 가리키는 계정 생성 스크립트를 업데이트합니다.`, en:`Create an AWS CloudFormation template that defines an <strong>AWS Inspector</strong> rule to check whether EBS encryption is enabled. Save the template to an Amazon S3 bucket that has been shared with all accounts. Update the account creation script pointing to the CloudFormation template in Amazon S3.` },
      { k:'B', ko:`EBS 암호화 확인을 위한 <strong>AWS Config 조직 규칙</strong>을 만들고 <strong>AWS CLI</strong>를 사용하여 규칙을 배포합니다. 조직 전체에서 <strong>AWS Config를 중지하고 삭제하는 것을 금지</strong>하기 위한 <strong>SCP</strong>를 만들고 적용합니다.`, en:`Create an <strong>AWS Config organizational rule</strong> to check whether EBS encryption is enabled and deploy the rule using the <strong>AWS CLI</strong>. Create and apply an <strong>SCP</strong> to prohibit stopping and deleting <strong>AWS Config</strong> across the organization.` },
      { k:'C', ko:`Organizations에서 <strong>SCP</strong>를 만듭니다. 조건식을 사용하여 EBS 볼륨에서 암호화 없이 Amazon EC2 인스턴스를 시작하지 못하도록 정책을 설정합니다. 모든 AWS 계정에 SCP를 적용합니다. <strong>Amazon Athena</strong>를 사용하여 AWS CloudTrail 출력을 분석하여 <code>ec2:RunInstances</code> 작업을 거부하는 이벤트를 찾습니다.`, en:`Create an <strong>SCP</strong> in Organizations. Set the policy to prevent the launch of Amazon EC2 instances without encryption on the EBS volumes using a conditional expression. Apply the SCP to all AWS accounts. Use <strong>Amazon Athena</strong> to analyze the AWS CloudTrail output, looking for events that deny an <code>ec2:RunInstances</code> action.` },
      { k:'D', ko:`단일 신뢰할 수 있는 계정에서 모든 계정에 <strong>IAM 역할</strong>을 배포합니다. <strong>AWS CodePipeline</strong>으로 파이프라인을 빌드하고 <strong>AWS Lambda</strong> 스테이지에서 IAM 역할을 맡아 계정의 모든 EBS 볼륨을 나열합니다. <strong>Amazon S3</strong>에 보고서를 게시합니다.`, en:`Deploy an <strong>IAM role</strong> to all accounts from a single trusted account. Build a pipeline with <strong>AWS CodePipeline</strong> with a stage in <strong>AWS Lambda</strong> to assume the IAM role, and list all EBS volumes in the account. Publish a report to <strong>Amazon S3</strong>.` },
    ],
    answer: ['B'],
    vote: 'B 100%',
    explain: `<p><span class="mark-ok">✅ B — AWS Config 조직 규칙 + SCP</span></p>
<p><strong>규정 준수 검사 = AWS Config</strong>가 핵심 원칙입니다. Config 조직 규칙으로 모든 계정의 EBS 암호화 상태를 자동으로 점검하고, SCP로 Config 자체를 삭제하거나 중지하지 못하게 함으로써 규정 준수 검사가 항상 존재하도록 보장합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Inspector는 EC2 인스턴스의 애플리케이션 동작 분석에 사용되며, EBS 볼륨 암호화 여부 확인에는 적합하지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — SCP는 암호화 없이 인스턴스 시작을 사전 예방할 수 있지만, 기존 EBS 볼륨을 비준수로 표시하는 규정 준수 검사 기능은 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — CodePipeline과 Lambda를 이용한 수동 보고 방식으로, 자동화된 지속적 규정 준수 검사가 아닙니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '시험 팁: 규정 준수(Compliance) 키워드가 나오면 AWS Config를 먼저 떠올리세요. Config 조직 규칙은 Organizations의 모든 계정에 일괄 적용할 수 있습니다.' }
    ]
  },
{
    n: 53,
    ko: `한 회사가 여러 계정에서 모든 <strong>Amazon EC2 인스턴스</strong>에 대한 <strong>취약성 스캐닝</strong>을 수행하고 있습니다. 계정은 AWS Organizations의 조직에 있습니다. 회사는 위임된 관리자 계정에서 <strong>Amazon Inspector</strong>를 활성화하고 모든 멤버 계정에 대한 스캐닝을 활성화했습니다.<br><br>
DevOps 엔지니어는 일부 EC2 인스턴스가 Amazon Inspector의 <strong>"스캐닝 안 함"</strong> 탭에 나열되어 있음을 발견했습니다.<br><br>
<strong>DevOps 엔지니어는 이 문제를 해결하기 위해 어떤 작업 조합을 취해야 합니까? (세 가지를 선택하세요.)</strong>`,
    en: `A company is performing <strong>vulnerability scanning</strong> for all <strong>Amazon EC2 instances</strong> across many accounts. The accounts are in an organization in AWS Organizations. The company has enabled <strong>Amazon Inspector</strong> in a delegated administrator account and has enabled scanning for all member accounts.<br><br>
A DevOps engineer discovers that some EC2 instances are listed in the <strong>"not scanning"</strong> tab in Amazon Inspector.<br><br>
<strong>Which combination of actions should the DevOps engineer take to resolve this issue? (Choose three.)</strong>`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k:'A', ko:`Amazon Inspector가 스캔하지 않는 EC2 인스턴스에 <strong>AWS Systems Manager Agent(SSM Agent)</strong>가 설치되어 실행 중인지 확인합니다.`, en:`Verify that <strong>AWS Systems Manager Agent (SSM Agent)</strong> is installed and is running on the EC2 instances that Amazon Inspector is not scanning.` },
      { k:'B', ko:`<strong>AWS Systems Manager 서비스 엔드포인트</strong>로의 포트 <strong>443</strong>에서 아웃바운드 통신을 허용하는 보안 그룹과 대상 EC2 인스턴스를 연결합니다.`, en:`Associate the target EC2 instances with security groups that allow outbound communication on port <strong>443</strong> to the <strong>AWS Systems Manager service endpoint</strong>.` },
      { k:'C', ko:`DevOps 엔지니어가 사용하는 IAM 역할에 <code>inspector:StartAssessmentRun</code> 권한을 부여합니다.`, en:`Grant <code>inspector:StartAssessmentRun</code> permissions to the IAM role that the DevOps engineer is using.` },
      { k:'D', ko:`Amazon Inspector가 스캔하지 않는 EC2 인스턴스에 대해 <strong>EC2 Instance Connect</strong>를 구성합니다.`, en:`Configure <strong>EC2 Instance Connect</strong> for the EC2 instances that Amazon Inspector is not scanning.` },
      { k:'E', ko:`<strong>AWS Systems Manager</strong>와 통신할 수 있는 권한을 부여하는 <strong>인스턴스 프로필</strong>과 대상 EC2 인스턴스를 연결합니다.`, en:`Associate the target EC2 instances with <strong>instance profiles</strong> that grant permissions to communicate with <strong>AWS Systems Manager</strong>.` },
      { k:'F', ko:`<strong>관리형 인스턴스 활성화</strong>를 만듭니다. 활성화 코드와 활성화 ID를 사용하여 EC2 인스턴스를 등록합니다.`, en:`Create a <strong>managed-instance activation</strong>. Use the Activation Code and the Activation ID to register the EC2 instances.` },
    ],
    answer: ['A','B','E'],
    vote: 'ABE 100%',
    explain: `<p><span class="mark-ok">✅ A — SSM Agent 설치 및 실행 확인</span></p>
<p>Amazon Inspector는 EC2 인스턴스 스캔을 위해 <strong>AWS Systems Manager(SSM)</strong>를 사용합니다. SSM Agent가 설치되어 실행 중이어야 Inspector가 인스턴스를 스캔할 수 있습니다.</p>
<p><span class="mark-ok">✅ B — SSM 엔드포인트 포트 443 아웃바운드 허용</span></p>
<p>EC2 인스턴스가 SSM 서비스 엔드포인트와 통신하려면 포트 443의 아웃바운드 트래픽이 허용되어야 합니다.</p>
<p><span class="mark-ok">✅ E — SSM 통신 권한을 가진 인스턴스 프로필 연결</span></p>
<p>EC2 인스턴스에 SSM과 통신할 수 있는 IAM 권한(인스턴스 프로필)이 없으면 스캔이 불가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — <code>inspector:StartAssessmentRun</code>은 DevOps 엔지니어 자신의 권한이며, 인스턴스 스캔 자체와는 무관합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — EC2 Instance Connect는 SSH 접속 관련 기능으로, Inspector 스캔과 관련 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ F</span> — 관리형 인스턴스 활성화는 온프레미스 서버나 비-EC2 장치를 SSM에 등록할 때 사용하며, EC2 인스턴스에는 필요하지 않습니다.</p>`,
    disc: [
      { ans: 'ABE (100%)', txt: 'Amazon Inspector가 EC2를 스캔하려면 SSM Agent 설치(A), SSM 엔드포인트 네트워크 접근(B), SSM 통신 IAM 권한(E) 세 가지가 모두 필요합니다.' }
    ]
  },
{
    n: 54,
    ko: `개발팀은 애플리케이션의 버전 제어를 위해 <strong>AWS CodeCommit</strong>을 사용합니다. CI/CD 인프라를 위해 <strong>AWS CodePipeline, AWS CodeBuild, AWS CodeDeploy</strong>를 사용합니다. 개발팀은 최근 코드베이스에서 장기 실행 테스트를 통과하지 못한 풀 리퀘스트를 병합했고, 브랜치로 롤백해야 했습니다.<br><br>
DevOps 엔지니어는 CodeCommit에서 <strong>풀 리퀘스트 테스트를 자동화</strong>하여 검토자가 풀 리퀘스트 검토의 일부로 자동화된 테스트 결과를 더 쉽게 볼 수 있도록 해야 합니다.<br><br>
<strong>DevOps 엔지니어는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?</strong>`,
    en: `A development team uses <strong>AWS CodeCommit</strong> for version control and <strong>AWS CodePipeline, AWS CodeBuild, and AWS CodeDeploy</strong> for CI/CD infrastructure. The development team recently merged pull requests that did not pass long-running tests and needed to perform rollbacks to branches.<br><br>
A DevOps engineer must <strong>automate testing of pull requests</strong> in CodeCommit to ensure that reviewers more easily see the results of automated tests as part of the pull request review.<br><br>
<strong>What should the DevOps engineer do to meet this requirement?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`<strong>pullRequestStatusChanged</strong> 이벤트에 반응하는 Amazon EventBridge 규칙을 만듭니다. 테스트를 실행하는 CodeBuild 작업이 있는 CodePipeline 파이프라인을 호출하는 AWS Lambda 함수를 만듭니다. Lambda 함수를 프로그래밍하여 <strong>CodeBuild 배지</strong>를 풀 리퀘스트에 댓글로 게시합니다.`, en:`Create an Amazon EventBridge rule that reacts to the <strong>pullRequestStatusChanged</strong> event. Create an AWS Lambda function that invokes a CodePipeline pipeline with a CodeBuild action that runs the tests. Program the Lambda function to post the <strong>CodeBuild badge</strong> as a comment on the pull request.` },
      { k:'B', ko:`<strong>pullRequestCreated</strong> 이벤트에 반응하는 Amazon EventBridge 규칙을 만듭니다. 테스트를 실행하는 CodeBuild 작업으로 CodePipeline 파이프라인을 호출하는 AWS Lambda 함수를 만듭니다. 테스트 결과가 완료되면 <strong>CodeBuild 테스트 결과</strong>를 풀 리퀘스트에 댓글로 게시합니다.`, en:`Create an Amazon EventBridge rule that reacts to the <strong>pullRequestCreated</strong> event. Create an AWS Lambda function that invokes a CodePipeline pipeline with a CodeBuild action that runs the tests. Program the Lambda function to post the <strong>CodeBuild test results</strong> as a comment on the pull request when the test results are complete.` },
      { k:'C', ko:`<strong>pullRequestCreated</strong> 및 <strong>pullRequestSourceBranchUpdated</strong> 이벤트에 반응하는 Amazon EventBridge 규칙을 만듭니다. 테스트를 실행하는 CodeBuild 작업이 있는 CodePipeline 파이프라인을 호출하는 AWS Lambda 함수를 만듭니다. Lambda 함수를 프로그래밍하여 <strong>CodeBuild 배지</strong>를 풀 리퀘스트에 댓글로 게시합니다.`, en:`Create an Amazon EventBridge rule that reacts to <strong>pullRequestCreated</strong> and <strong>pullRequestSourceBranchUpdated</strong> events. Create an AWS Lambda function that invokes a CodePipeline pipeline with a CodeBuild action that runs the tests. Program the Lambda function to post the <strong>CodeBuild badge</strong> as a comment on the pull request.` },
      { k:'D', ko:`<strong>pullRequestStatusChanged</strong> 이벤트에 반응하는 Amazon EventBridge 규칙을 만듭니다. 테스트를 실행하는 CodeBuild 작업이 있는 CodePipeline 파이프라인을 호출하는 AWS Lambda 함수를 만듭니다. 테스트 결과가 완료되면 <strong>CodeBuild 테스트 결과</strong>를 풀 리퀘스트에 댓글로 게시합니다.`, en:`Create an Amazon EventBridge rule that reacts to the <strong>pullRequestStatusChanged</strong> event. Create an AWS Lambda function that invokes a CodePipeline pipeline with a CodeBuild action that runs the tests. Program the Lambda function to post the <strong>CodeBuild test results</strong> as a comment on the pull request when the test results are complete.` },
    ],
    answer: ['C'],
    vote: 'C 66% / B 20%',
    explain: `<p><span class="mark-ok">✅ C — pullRequestCreated + pullRequestSourceBranchUpdated</span></p>
<p>풀 리퀘스트는 두 가지 경우에 테스트를 다시 실행해야 합니다. 첫째, 풀 리퀘스트가 <strong>처음 생성</strong>될 때(<code>pullRequestCreated</code>), 둘째, 소스 브랜치에 <strong>새 커밋이 푸시</strong>될 때(<code>pullRequestSourceBranchUpdated</code>). AWS 공식 블로그에서도 이 두 이벤트를 함께 사용하도록 권장합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, D</span> — <code>pullRequestStatusChanged</code>는 PR이 열리거나 닫힐 때 트리거되며, 새 커밋이 푸시될 때는 트리거되지 않습니다. 닫힌 PR에서 테스트를 실행할 필요가 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B</span> — <code>pullRequestCreated</code>만 처리하므로 소스 브랜치 업데이트 시 테스트가 재실행되지 않습니다.</p>`,
    disc: [
      { ans: 'C (66%)', txt: 'AWS 공식 블로그("Automated Code Review on Pull Requests using AWS CodeCommit and AWS CodeBuild")에 따르면 pullRequestCreated와 pullRequestSourceBranchUpdated 두 이벤트 모두를 처리해야 합니다.' }
    ]
  },
{
    n: 55,
    ko: `한 회사가 단일 AWS 계정의 프로덕션 VPC에 애플리케이션을 배포했습니다. 보안 팀은 <strong>거부 목록(deny list)</strong>에 있는 IP 주소가 애플리케이션에 액세스하는 경우 <strong>거의 실시간</strong>으로 자동화된 알림을 받고 싶어합니다. DevOps 엔지니어는 프로덕션 VPC에 대한 <strong>VPC 흐름 로그</strong>를 만들었습니다.<br><br>
<strong>DevOps 엔지니어는 이러한 요구 사항을 가장 비용 효율적으로 충족하기 위해 어떤 추가 단계를 수행해야 합니까?</strong>`,
    en: `A company has deployed an application in a production VPC. The security team wants to receive automated notification in <strong>near real time</strong> if any IP address on a <strong>deny list</strong> accesses the application. The DevOps engineer creates a <strong>VPC flow log</strong> for the production VPC.<br><br>
<strong>Which set of additional steps should the DevOps engineer take to meet these requirements MOST cost-effectively?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`<strong>Amazon CloudWatch Logs</strong>에 로그 그룹을 만듭니다. 허용된 트래픽을 캡처하고 로그 그룹으로 데이터를 전송하도록 VPC 흐름 로그를 구성합니다. 거부 목록 IP 주소에 대한 <strong>CloudWatch 메트릭 필터</strong>를 만듭니다. 메트릭 필터를 입력으로 사용하여 <strong>CloudWatch 알람</strong>을 만듭니다. 기간을 5분, 알람 데이터 포인트를 1로 설정합니다. <strong>Amazon SNS 토픽</strong>을 사용하여 보안 팀에 알림을 보냅니다.`, en:`Create a log group in <strong>Amazon CloudWatch Logs</strong>. Configure the VPC flow log to capture accepted traffic and send the data to the log group. Create an <strong>Amazon CloudWatch metric filter</strong> for IP addresses on the deny list. Create a <strong>CloudWatch alarm</strong> with the metric filter as input. Set the period to 5 minutes and the datapoints to alarm to 1. Use an <strong>Amazon SNS topic</strong> to send alarm notices to the security team.` },
      { k:'B', ko:`로그 파일을 위한 <strong>Amazon S3 버킷</strong>을 만듭니다. 모든 트래픽을 캡처하고 S3 버킷으로 전송하도록 VPC 흐름 로그를 구성합니다. 거부 목록 IP 주소에 대해 <strong>Amazon Athena</strong>로 로그를 쿼리합니다. <strong>Amazon QuickSight</strong>를 구성하여 보안 팀이 액세스할 수 있는 대시보드로 데이터를 게시합니다.`, en:`Create an <strong>Amazon S3 bucket</strong> for log files. Configure the VPC flow log to capture all traffic and send the data to the S3 bucket. Configure <strong>Amazon Athena</strong> to return log files for IP addresses on the deny list. Configure <strong>Amazon QuickSight</strong> to accept data from Athena and publish it as a dashboard that the security team can access.` },
      { k:'C', ko:`로그 파일을 위한 <strong>Amazon S3 버킷</strong>을 만듭니다. 허용된 트래픽을 캡처하고 S3 버킷으로 전송하도록 VPC 흐름 로그를 구성합니다. <strong>Amazon OpenSearch Service</strong> 클러스터와 도메인을 구성합니다. S3 버킷에서 로그를 검색하고 OpenSearch에 로드하는 <strong>AWS Lambda</strong> 함수를 만들어 5분마다 실행합니다.`, en:`Create an <strong>Amazon S3 bucket</strong> for log files. Configure the VPC flow log to capture accepted traffic and send the data to the S3 bucket. Configure an <strong>Amazon OpenSearch Service</strong> cluster and domain for the log files. Create an <strong>AWS Lambda</strong> function to retrieve logs from S3, format, and load them into OpenSearch. Schedule the Lambda function to run every 5 minutes.` },
      { k:'D', ko:`<strong>Amazon CloudWatch Logs</strong>에 로그 그룹을 만듭니다. 모든 트래픽을 캡처하고 로그 그룹으로 전송하도록 VPC 흐름 로그를 구성합니다. <strong>Athena CloudWatch 커넥터</strong>를 AWS Lambda에 배포합니다. <strong>Amazon Athena</strong>로 거부 목록 IP의 허용된 트래픽을 주기적으로 쿼리하고 S3 버킷에 저장합니다. S3 이벤트 알림으로 SNS를 통해 보안 팀에 자동 알림을 보냅니다.`, en:`Create a log group in <strong>Amazon CloudWatch Logs</strong>. Configure the VPC flow log to capture all traffic and send the data to the log group. Deploy an <strong>Athena CloudWatch connector</strong> in AWS Lambda. Configure <strong>Amazon Athena</strong> to periodically query for accepted traffic from deny list IPs and store results in an S3 bucket. Configure an S3 event notification to automatically notify the security team through an <strong>Amazon SNS topic</strong>.` },
    ],
    answer: ['A'],
    vote: 'A 100%',
    explain: `<p><span class="mark-ok">✅ A — CloudWatch Logs + 메트릭 필터 + CloudWatch 알람 + SNS</span></p>
<p>가장 비용 효율적인 솔루션입니다. VPC 흐름 로그를 CloudWatch Logs로 전송하고, 거부 목록 IP에 대한 <strong>메트릭 필터</strong>를 만들어 CloudWatch 알람으로 <strong>거의 실시간</strong> 알림을 구현합니다. 추가 서비스나 복잡한 설정 없이 기본 AWS 서비스만으로 요구사항을 충족합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — QuickSight는 비용이 높고, Athena 쿼리는 실시간이 아닌 대화형 분석에 적합합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — OpenSearch 클러스터는 비용이 매우 높아 비용 효율성 요구 사항에 맞지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — Athena CloudWatch 커넥터와 Lambda, S3, SNS를 모두 사용하는 과도하게 복잡하고 비용이 많이 드는 솔루션입니다.</p>`,
    disc: []
  },
{
    n: 56,
    ko: `DevOps 엔지니어는 다음 단계로 <strong>AWS CodePipeline</strong>을 사용하여 웹 서비스 배포를 자동화했습니다. 1) CodeBuild로 컴파일 및 단위 테스트, 2) 스테이징 환경 배포, 3) 프로덕션 환경 배포.<br><br>
<strong>품질 보증(QA) 팀</strong>은 프로덕션 배포 전에 빌드 아티팩트를 검사하고 내부 <strong>침투 테스트 도구</strong>를 실행하려고 합니다. 이 도구는 <strong>REST API 호출</strong>에 의해 호출됩니다.<br><br>
<strong>DevOps 엔지니어는 이 요청을 이행하기 위해 어떤 작업 조합을 취해야 합니까? (두 가지를 선택하세요.)</strong>`,
    en: `A DevOps engineer has automated a web service deployment by using <strong>AWS CodePipeline</strong> with the following steps: 1) CodeBuild compiles and runs unit tests, 2) CodeDeploy deploys to staging, 3) CodeDeploy deploys to production.<br><br>
The <strong>quality assurance (QA) team</strong> requests permission to inspect the build artifact before the deployment to the production environment and wants to run an internal <strong>penetration testing tool</strong>. The tool will be invoked by a <strong>REST API call</strong>.<br><br>
<strong>Which combination of actions should the DevOps engineer take to fulfill this request? (Choose two.)</strong>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k:'A', ko:`파이프라인의 테스트 작업과 배포 작업 사이에 <strong>수동 승인 작업</strong>을 삽입합니다.`, en:`Insert a <strong>manual approval action</strong> between the test actions and deployment actions of the pipeline.` },
      { k:'B', ko:`컴파일 단계에 대한 <code>buildspec.yml</code> 파일을 수정하여 완료 전에 수동 승인이 필요하도록 합니다.`, en:`Modify the <code>buildspec.yml</code> file for the compilation stage to require manual approval before completion.` },
      { k:'C', ko:`CodeDeploy 배포 그룹을 업데이트하여 진행에 수동 승인이 필요하도록 설정합니다.`, en:`Update the CodeDeploy deployment groups so that they require manual approval to proceed.` },
      { k:'D', ko:`침투 테스트 도구에 대한 REST API를 <strong>직접 호출</strong>하도록 파이프라인을 업데이트합니다.`, en:`Update the pipeline to <strong>directly call</strong> the REST API for the penetration testing tool.` },
      { k:'E', ko:`침투 테스트 도구에 대한 REST API를 호출하는 <strong>AWS Lambda 함수</strong>를 호출하도록 파이프라인을 업데이트합니다.`, en:`Update the pipeline to invoke an <strong>AWS Lambda function</strong> that calls the REST API for the penetration testing tool.` },
    ],
    answer: ['A','E'],
    vote: 'AE 81% / AD 19%',
    explain: `<p><span class="mark-ok">✅ A — 수동 승인 작업</span></p>
<p>CodePipeline의 <strong>수동 승인 작업</strong>을 스테이징과 프로덕션 배포 사이에 삽입하면 QA 팀이 빌드 아티팩트를 검사하고 수동 테스트를 수행할 수 있습니다.</p>
<p><span class="mark-ok">✅ E — Lambda 함수로 REST API 호출</span></p>
<p>CodePipeline은 REST API를 직접 호출하는 기능이 없습니다. <strong>AWS Lambda 함수</strong>를 통해 침투 테스트 도구의 REST API를 호출해야 합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — buildspec.yml은 CodeBuild 빌드 단계에만 적용되며, 수동 승인을 지원하지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — CodeDeploy 배포 그룹은 수동 승인 기능을 직접 지원하지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — CodePipeline은 HTTP REST API를 직접 호출하는 기능이 없습니다. Lambda 함수를 통해서만 가능합니다.</p>`,
    disc: [
      { ans: 'AE (81%)', txt: 'CodePipeline에서 외부 REST API를 호출하려면 반드시 Lambda 함수를 중간에 두어야 합니다. 직접 호출(D) 옵션은 존재하지 않습니다.' }
    ]
  },
{
    n: 57,
    ko: `한 회사가 AWS 리전에서 웹 애플리케이션을 호스팅하고 있습니다. 재해 복구 요구 사항에 따르면 <strong>세션 데이터는 거의 실시간으로 리전 간에 복제</strong>되어야 하며, <strong>요청의 1%는 보조 리전으로 라우팅</strong>되어야 하고, 주 리전 장애 시 <strong>트래픽이 자동으로 보조 리전으로 라우팅</strong>되어야 합니다.<br><br>
<strong>DevOps 엔지니어는 이러한 요구 사항을 어떻게 충족해야 합니까?</strong>`,
    en: `A company is hosting a web application in an AWS Region. Disaster recovery requirements state that <strong>session data must be replicated between regions in near-real time</strong>, <strong>1% of requests should route to the secondary region</strong>, and if there is a disruption, <strong>traffic should be automatically routed to the secondary region</strong>.<br><br>
<strong>How should a DevOps engineer meet these requirements?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`두 리전 모두 <strong>AWS Elastic Beanstalk</strong>에 애플리케이션을 배포하고 세션 데이터에 <strong>Amazon DynamoDB 글로벌 테이블</strong>을 사용합니다. 상태 확인이 포함된 <strong>Amazon Route 53 가중 라우팅 정책</strong>을 사용하여 트래픽을 여러 리전에 분산합니다.`, en:`In both regions, deploy the application on <strong>AWS Elastic Beanstalk</strong> and use <strong>Amazon DynamoDB global tables</strong> for session data. Use an <strong>Amazon Route 53 weighted routing policy</strong> with health checks to distribute the traffic across the regions.` },
      { k:'B', ko:`두 리전 모두에서 Auto Scaling 그룹에서 애플리케이션을 시작하고 세션 데이터에 <strong>DynamoDB</strong>를 사용합니다. <strong>Route 53 장애 조치 라우팅 정책</strong>을 사용하여 트래픽을 분산합니다.`, en:`In both regions, launch the application in Auto Scaling groups and use <strong>DynamoDB</strong> for session data. Use a <strong>Route 53 failover routing policy</strong> with health checks to distribute the traffic across the regions.` },
      { k:'C', ko:`두 리전에서 모두 <strong>AWS Lambda</strong>(Amazon API Gateway 노출)에 애플리케이션을 배포하고, 세션 데이터에 <strong>Amazon RDS for PostgreSQL</strong>(교차 리전 복제)을 사용합니다.`, en:`In both regions, deploy the application in <strong>AWS Lambda</strong> exposed by Amazon API Gateway, and use <strong>Amazon RDS for PostgreSQL</strong> with cross-region replication for session data. Deploy the web application with client-side logic to call the API Gateway directly.` },
      { k:'D', ko:`두 리전 모두에서 Auto Scaling 그룹에서 애플리케이션을 시작하고 세션 데이터에 <strong>DynamoDB 글로벌 테이블</strong>을 사용합니다. 리전 간에 <strong>Amazon CloudFront 가중 분포</strong>를 활성화합니다. <strong>Amazon Route 53</strong> DNS 레코드를 CloudFront 분포로 지정합니다.`, en:`In both regions, launch the application in Auto Scaling groups and use <strong>DynamoDB global tables</strong> for session data. Enable an <strong>Amazon CloudFront weighted distribution</strong> across regions. Point the <strong>Amazon Route 53</strong> DNS record at the CloudFront distribution.` },
    ],
    answer: ['A'],
    vote: 'A 82% / D 18%',
    explain: `<p><span class="mark-ok">✅ A — Elastic Beanstalk + DynamoDB 글로벌 테이블 + Route 53 가중 라우팅</span></p>
<p>세 가지 요구사항을 모두 충족합니다. <strong>DynamoDB 글로벌 테이블</strong>은 리전 간 거의 실시간 복제를 제공합니다. <strong>Route 53 가중 라우팅</strong>은 1% 트래픽을 보조 리전으로 라우팅하고, 상태 확인을 통해 장애 시 자동 전환도 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — DynamoDB(글로벌 테이블 아님)는 리전 간 실시간 복제를 지원하지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — RDS 교차 리전 복제는 세션 데이터에 비효율적이며 지연 시간이 높습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — CloudFront는 가중 라우팅을 지원하지 않습니다. Origin Group을 통한 장애 조치만 가능합니다.</p>`,
    disc: []
  },
{
    n: 58,
    ko: `한 회사가 Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 개발자들이 각 EC2 인스턴스를 수동으로 업데이트하는 배포 프로세스는 오류가 발생하기 쉽고 시간이 많이 걸립니다. 회사는 <strong>최종 수동 승인 단계를 유지</strong>하면서 가능한 한 많은 배포 프로세스를 자동화하려고 합니다.<br><br>
이 회사는 이미 소스 코드를 <strong>AWS CodeCommit</strong>으로 옮겼고 <strong>AWS CodeBuild</strong> 프로젝트를 만들었습니다.<br><br>
<strong>어떤 단계 조합이 회사의 요구 사항을 충족할까요? (두 가지를 선택하세요.)</strong>`,
    en: `A company runs an application on Amazon EC2 instances. The deployment process is prone to errors and is time-consuming. The company wants to automate as much of the application deployment process as possible while retaining a <strong>final manual approval step</strong> before the modification of the application or resources.<br><br>
The company already has moved the source code to <strong>AWS CodeCommit</strong> and created an <strong>AWS CodeBuild</strong> project.<br><br>
<strong>Which combination of steps will meet the company's requirements? (Choose two.)</strong>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k:'A', ko:`<strong>AWS CodeDeploy</strong>에서 애플리케이션 그룹과 배포 그룹을 만듭니다. EC2 인스턴스에 <strong>CodeDeploy 에이전트</strong>를 설치합니다.`, en:`Create an application group and a deployment group in <strong>AWS CodeDeploy</strong>. Install the <strong>CodeDeploy agent</strong> on the EC2 instances.` },
      { k:'B', ko:`<strong>AWS CodeDeploy</strong>에서 애플리케이션 개정판과 배포 그룹을 만듭니다. CodeDeploy에서 환경을 만듭니다. EC2 인스턴스를 CodeDeploy 환경에 등록합니다.`, en:`Create an application revision and a deployment group in <strong>AWS CodeDeploy</strong>. Create an environment in CodeDeploy. Register the EC2 instances to the CodeDeploy environment.` },
      { k:'C', ko:`<strong>AWS CodePipeline</strong>을 사용하여 CodeBuild 작업을 호출하고, <strong>CloudFormation 업데이트</strong>를 실행하고, <strong>수동 승인 단계</strong>를 위해 일시 중지합니다. 승인 후 <strong>AWS CodeDeploy</strong> 배포를 시작합니다.`, en:`Use <strong>AWS CodePipeline</strong> to invoke the CodeBuild job, run the <strong>CloudFormation update</strong>, and pause for a <strong>manual approval step</strong>. After approval, start the <strong>AWS CodeDeploy</strong> deployment.` },
      { k:'D', ko:`<strong>AWS CodePipeline</strong>을 사용하여 CodeBuild 작업을 호출하고, 각 애플리케이션 스택에 대한 <strong>CloudFormation 변경 세트</strong>를 만들고, <strong>수동 승인 단계</strong>를 위해 일시 중지합니다. 승인 후 <strong>CloudFormation 변경 세트를 실행</strong>하고 <strong>AWS CodeDeploy</strong> 배포를 시작합니다.`, en:`Use <strong>AWS CodePipeline</strong> to invoke the CodeBuild job, create <strong>CloudFormation change sets</strong> for each of the application stacks, and pause for a <strong>manual approval step</strong>. After approval, <strong>run the CloudFormation change sets</strong> and start the <strong>AWS CodeDeploy</strong> deployment.` },
      { k:'E', ko:`<strong>AWS CodePipeline</strong>을 사용하여 CodeBuild 작업을 호출하고, 각 애플리케이션 스택에 대한 <strong>CloudFormation 변경 세트</strong>를 만들고, <strong>수동 승인 단계</strong>를 위해 일시 중지합니다. 승인 후 <strong>AWS CodeDeploy</strong> 배포를 시작합니다.`, en:`Use <strong>AWS CodePipeline</strong> to invoke the CodeBuild job, create <strong>CloudFormation change sets</strong> for each of the application stacks, and pause for a <strong>manual approval step</strong>. After approval, start the <strong>AWS CodeDeploy</strong> deployment.` },
    ],
    answer: ['A','D'],
    vote: 'AD 68% / BD 29%',
    explain: `<p><span class="mark-ok">✅ A — CodeDeploy 설정 + EC2에 에이전트 설치</span></p>
<p>EC2 인스턴스에서 CodeDeploy를 사용하려면 반드시 <strong>CodeDeploy 에이전트</strong>가 설치되어 있어야 합니다. CodeDeploy는 EC2 인스턴스를 태그로 필터링하므로 별도로 등록할 필요가 없습니다.</p>
<p><span class="mark-ok">✅ D — CodePipeline + CloudFormation 변경 세트 + 수동 승인 + CodeDeploy</span></p>
<p>변경 세트 생성 → 수동 승인 → 변경 세트 실행 → CodeDeploy 배포 순서로 인프라와 애플리케이션 모두에 대한 수동 승인을 유지할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — CodeDeploy는 EC2 인스턴스를 "환경에 등록"하는 개념이 없습니다. 태그 기반 필터링을 사용합니다. 에이전트 설치 언급도 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ E</span> — CloudFormation 변경 세트를 만들지만 승인 후 변경 세트를 실행하지 않고 CodeDeploy만 시작합니다. 인프라 변경이 적용되지 않습니다.</p>`,
    disc: [
      { ans: 'AD (68%)', txt: 'EC2에서 CodeDeploy를 사용하려면 에이전트가 필수입니다. CodeDeploy는 인스턴스 태그로 대상을 필터링하므로 별도 등록 불필요합니다.' }
    ]
  },
{
    n: 59,
    ko: `DevOps 엔지니어는 <strong>Application Load Balancer(ALB)</strong> 뒤의 Amazon EC2 인스턴스에서 실행되는 웹 애플리케이션을 관리합니다. 다음과 같은 배포 전략을 구현해야 합니다.<br><br>
1. 원래 플릿과 동일한 용량의 두 번째 인스턴스 플릿을 시작합니다.<br>
2. 두 번째 플릿이 시작되는 동안 원래 플릿을 변경하지 않고 유지합니다.<br>
3. 두 번째 플릿이 완전히 배포되면 트래픽을 두 번째 플릿으로 전환합니다.<br>
4. 전환 후 <strong>1시간 후에 원래 플릿을 자동으로 종료</strong>합니다.<br><br>
<strong>어떤 솔루션이 이러한 요구 사항을 충족할까요?</strong>`,
    en: `A DevOps engineer manages a web application that runs on Amazon EC2 instances behind an <strong>Application Load Balancer (ALB)</strong>. The engineer needs to implement a deployment strategy that:<br><br>
1. Launches a second fleet of instances with the same capacity as the original fleet.<br>
2. Maintains the original fleet unchanged while the second fleet is launched.<br>
3. Transitions traffic to the second fleet when the second fleet is fully deployed.<br>
4. <strong>Terminates the original fleet automatically 1 hour after transition.</strong><br><br>
<strong>Which solution will satisfy these requirements?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`ALB에 대한 보존 정책이 1시간으로 설정된 <strong>AWS CloudFormation</strong> 템플릿을 사용합니다. <strong>Amazon Route 53</strong> 레코드를 업데이트하여 새 ALB를 반영합니다.`, en:`Use an <strong>AWS CloudFormation</strong> template with a retention policy for the ALB set to 1 hour. Update the <strong>Amazon Route 53</strong> record to reflect the new ALB.` },
      { k:'B', ko:`두 개의 <strong>AWS Elastic Beanstalk</strong> 환경을 사용하여 원래 환경에서 새 환경으로 <strong>블루/그린 배포</strong>를 수행합니다. 1시간 내에 원래 환경을 종료하는 <strong>애플리케이션 버전 수명 주기 정책</strong>을 만듭니다.`, en:`Use two <strong>AWS Elastic Beanstalk</strong> environments to perform a <strong>blue/green deployment</strong> from the original environment to the new one. Create an <strong>application version lifecycle policy</strong> to terminate the original environment in 1 hour.` },
      { k:'C', ko:`<strong>블루/그린 배포 구성</strong>으로 구성된 배포 그룹과 함께 <strong>AWS CodeDeploy</strong>를 사용합니다. 대기 기간을 <strong>1시간</strong>으로 설정하여 배포 그룹의 <strong>원래 인스턴스를 종료</strong>하는 옵션을 선택합니다.`, en:`Use <strong>AWS CodeDeploy</strong> with a deployment group configured with a <strong>blue/green deployment</strong> configuration. Select the option to <strong>Terminate the original instances</strong> in the deployment group with a waiting period of <strong>1 hour</strong>.` },
      { k:'D', ko:`구성을 <strong>Immutable</strong>로 설정한 <strong>AWS Elastic Beanstalk</strong>를 사용합니다. ALB의 삭제 정책을 1시간으로 설정하는 <code>.ebextension</code>을 만들고 애플리케이션을 배포합니다.`, en:`Use <strong>AWS Elastic Beanstalk</strong> with the configuration set to <strong>Immutable</strong>. Create an <code>.ebextension</code> using the Resources key that sets the deletion policy of the ALB to 1 hour, and deploy the application.` },
    ],
    answer: ['C'],
    vote: 'C 94%',
    explain: `<p><span class="mark-ok">✅ C — AWS CodeDeploy 블루/그린 배포 + 1시간 대기 후 원래 인스턴스 종료</span></p>
<p>CodeDeploy의 블루/그린 배포는 정확히 이 요구사항을 위해 설계되었습니다. 두 번째 플릿(그린)을 시작하는 동안 원래 플릿(블루)을 유지하고, 트래픽 전환 후 설정된 대기 시간(1시간) 이후 원래 인스턴스를 자동으로 종료하는 기능을 기본 제공합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFormation 보존 정책은 1시간 타이머로 인스턴스를 자동 종료하는 기능이 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B</span> — Elastic Beanstalk 블루/그린은 별도 환경을 배포하는 것으로, 동일 Auto Scaling 그룹 내 두 번째 플릿 시작 개념과 다릅니다. 또한 수명 주기 정책은 원래 환경을 1시간 후 종료하는 기능이 아닙니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — Elastic Beanstalk Immutable 배포는 추가 인스턴스를 배포하지만, 1시간 후 자동 종료 기능을 지원하지 않습니다.</p>`,
    disc: []
  },
{
    n: 60,
    ko: `비디오 공유 회사가 <strong>Amazon S3</strong>에 비디오를 저장합니다. 이 회사는 비디오 액세스 요청이 갑자기 증가하는 것을 관찰했습니다. 이 회사는 비디오 파일에 대한 일반적인 <strong>액세스 패턴</strong>을 파악해야 합니다. 이 패턴에는 특정 날짜에 특정 파일에 액세스하는 <strong>사용자 수</strong>와 특정 파일에 대한 <strong>풀 요청 수</strong>가 포함됩니다.<br><br>
<strong>이 회사는 어떻게 하면 최소한의 노력으로 이러한 요구 사항을 충족할 수 있을까요?</strong>`,
    en: `A video-sharing company stores its videos in <strong>Amazon S3</strong>. The company has observed a sudden increase in video access requests. The company needs to identify the general <strong>access pattern</strong> for the video files. This pattern includes the <strong>number of users</strong> who access a certain file on a given day, as well as the <strong>number of pull requests</strong> for certain files.<br><br>
<strong>How can the company meet these requirements with the LEAST amount of effort?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`<strong>S3 서버 액세스 로깅</strong>을 활성화합니다. 액세스 로그를 <strong>Amazon Aurora</strong> 데이터베이스로 가져옵니다. Aurora SQL 쿼리를 사용하여 액세스 패턴을 분석합니다.`, en:`Activate <strong>S3 server access logging</strong>. Import the access logs into an <strong>Amazon Aurora</strong> database. Use an Aurora SQL query to analyze the access patterns.` },
      { k:'B', ko:`<strong>S3 서버 액세스 로깅</strong>을 활성화합니다. <strong>Amazon Athena</strong>를 사용하여 로그 파일이 있는 외부 테이블을 만듭니다. Athena를 사용하여 액세스 패턴을 분석하는 SQL 쿼리를 만듭니다.`, en:`Activate <strong>S3 server access logging</strong>. Use <strong>Amazon Athena</strong> to create an external table with the log files. Use Athena to create a SQL query to analyze the access patterns.` },
      { k:'C', ko:`모든 S3 객체 액세스 이벤트에 대해 <strong>AWS Lambda 함수</strong>를 호출합니다. Lambda 함수를 구성하여 파일 액세스 정보를 <strong>Amazon Aurora</strong> 데이터베이스에 씁니다. Aurora SQL 쿼리를 사용하여 액세스 패턴을 분석합니다.`, en:`Invoke an <strong>AWS Lambda function</strong> for every S3 object access event. Configure the Lambda function to write the file access information to an <strong>Amazon Aurora</strong> database. Use an Aurora SQL query to analyze the access patterns.` },
      { k:'D', ko:`모든 S3 객체 액세스 이벤트에 대해 <strong>Amazon CloudWatch Logs</strong> 로그 메시지를 기록합니다. 파일 액세스 정보를 <strong>Amazon Kinesis Data Analytics</strong> for SQL 애플리케이션에 씁니다. 슬라이딩 윈도우 분석을 수행합니다.`, en:`Record an <strong>Amazon CloudWatch Logs</strong> log message for every S3 object access event. Configure a CloudWatch Logs log stream to write the file access information to an <strong>Amazon Kinesis Data Analytics</strong> for SQL application. Perform a sliding window analysis.` },
    ],
    answer: ['B'],
    vote: 'B 100%',
    explain: `<p><span class="mark-ok">✅ B — S3 서버 액세스 로깅 + Amazon Athena</span></p>
<p><strong>Amazon Athena</strong>는 S3에 저장된 데이터를 표준 SQL로 분석하는 서버리스 서비스입니다. S3 서버 액세스 로그를 S3에 저장하고 Athena로 외부 테이블을 만들면 별도의 데이터 이동 없이 최소한의 노력으로 액세스 패턴을 분석할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Aurora 데이터베이스에 로그를 가져오는 작업은 복잡하고 비용이 높습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — 모든 S3 객체 액세스 이벤트마다 Lambda를 호출하면 비용이 매우 높고 복잡합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — Kinesis Data Analytics와 CloudWatch Logs를 함께 사용하는 불필요하게 복잡한 구성입니다.</p>`,
    disc: []
  }
];
