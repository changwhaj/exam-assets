window.QS_SET15 = [
{
  n: 141,
  en: `A company plans to use Amazon CloudWatch to monitor its Amazon EC2 instances. The company needs to stop EC2 instances when the average of the NetworkPacketsIn metric is less than 5 for at least 3 hours in a 12-hour time window. The company must evaluate the metric every hour. The EC2 instances must continue to run if there is missing data for the NetworkPacketsIn metric during the evaluation period.<br><br>A DevOps engineer creates a CloudWatch alarm for the NetworkPacketsIn metric. The DevOps engineer configures a threshold value of 5 and an evaluation period of 1 hour.<br><br>Which set of additional actions should the DevOps engineer take to meet these requirements?`,
  ko: `한 회사가 Amazon CloudWatch를 사용하여 Amazon EC2 인스턴스를 모니터링하려고 합니다. 이 회사는 12시간 동안 NetworkPacketsIn 메트릭의 평균이 최소 3시간 동안 5 미만이면 EC2 인스턴스를 중지해야 합니다. 이 회사는 매시간 메트릭을 평가해야 합니다. 평가 기간 동안 NetworkPacketsIn 메트릭에 대한 데이터가 누락된 경우 EC2 인스턴스는 계속 실행되어야 합니다.<br><br>DevOps 엔지니어가 NetworkPacketsIn 메트릭에 대한 CloudWatch 알람을 생성합니다. DevOps 엔지니어는 임계값을 5로 구성하고 평가 기간을 1시간으로 구성합니다.<br><br>DevOps 엔지니어는 이러한 요구 사항을 충족하기 위해 어떤 추가 작업을 수행해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure the Datapoints to Alarm value to be 3 out of 12. Configure the alarm to treat missing data as breaching the threshold. Add an AWS Systems Manager action to stop the instance when the alarm enters the ALARM state.`, ko:`Datapoints to Alarm 값을 12개 중 3개로 구성합니다. 알람이 누락된 데이터를 임계값 위반으로 처리하도록 구성합니다. 알람이 ALARM 상태로 전환되면 인스턴스를 중지하는 AWS Systems Manager 작업을 추가합니다.` },
    { k:'B', en:`Configure the Datapoints to Alarm value to be 3 out of 12. Configure the alarm to treat missing data as not breaching the threshold. Add an EC2 action to stop the instance when the alarm enters the ALARM state.`, ko:`Datapoints to Alarm 값을 12개 중 3개로 구성합니다. 알람이 누락된 데이터를 임계값을 위반하지 않는 것으로 처리하도록 구성합니다. 알람이 ALARM 상태로 전환되면 인스턴스를 중지하는 EC2 작업을 추가합니다.` },
    { k:'C', en:`Configure the Datapoints to Alarm value to be 9 out of 12. Configure the alarm to treat missing data as breaching the threshold. Add an EC2 action to stop the instance when the alarm enters the ALARM state.`, ko:`Datapoints to Alarm 값을 12개 중 9개로 구성합니다. 알람이 누락된 데이터를 임계값 위반으로 처리하도록 구성합니다. 알람이 ALARM 상태로 전환되면 인스턴스를 중지하는 EC2 작업을 추가합니다.` },
    { k:'D', en:`Configure the Datapoints to Alarm value to be 9 out of 12. Configure the alarm to treat missing data as not breaching the threshold. Add an AWS Systems Manager action to stop the instance when the alarm enters the ALARM state.`, ko:`Datapoints to Alarm 값을 12개 중 9개로 구성합니다. 알람이 누락된 데이터를 임계값을 위반하지 않는 것으로 처리하도록 구성합니다. 알람이 ALARM 상태로 전환되면 인스턴스를 중지하는 AWS Systems Manager 작업을 추가합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — Datapoints to Alarm: 12개 중 3개 + 누락 데이터 비위반 처리 + EC2 중지 작업</span></p><p>1시간 기간 × 12 = 12개 데이터 포인트 평가 기간. "최소 3시간 동안" = Datapoints to Alarm: 12 중 3. "누락 데이터 시 인스턴스 계속 실행" = 누락 데이터를 임계값 위반 없음으로 처리. EC2 인스턴스 중지는 CloudWatch 알람의 EC2 작업으로 직접 가능합니다(Systems Manager 불필요).</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 누락 데이터를 위반으로 처리하면, 데이터 없을 때 인스턴스가 중지됩니다. 요구사항 위반.</p>
<p><span class="mark-no">❌ C</span> — 9 out of 12는 "최소 9시간 동안" 조건을 의미하며, 요구사항(3시간)과 다릅니다.</p>
<p><span class="mark-no">❌ D</span> — 9 out of 12 + Systems Manager는 두 가지 모두 잘못되었습니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'CloudWatch M of N 알람: 12시간 창 × 1시간 기간 = 12 데이터포인트. 3시간 = 3/12. 누락 데이터 = notBreaching(인스턴스 계속 실행). EC2 action으로 직접 중지 가능.' }]
},
{
  n: 142,
  en: `A company manages 500 AWS accounts that are in an organization in AWS Organizations. The company discovers many unattached Amazon Elastic Block Store (Amazon EBS) volumes in all the accounts. The company wants to automatically tag the unattached EBS volumes for investigation.<br><br>A DevOps engineer needs to deploy an AWS Lambda function to all the AWS accounts. The Lambda function must run every 30 minutes to tag all the EBS volumes that have been unattached for a period of 7 days or more.<br><br>Which solution will meet these requirements in the MOST operationally efficient manner?`,
  ko: `한 회사가 AWS Organizations의 조직에 있는 500개의 AWS 계정을 관리합니다. 이 회사는 모든 계정에서 연결되지 않은 Amazon EBS 볼륨을 많이 발견했습니다. 이 회사는 조사를 위해 연결되지 않은 EBS 볼륨에 자동으로 태그를 지정하려고 합니다.<br><br>DevOps 엔지니어는 모든 AWS 계정에 AWS Lambda 함수를 배포해야 합니다. Lambda 함수는 30분마다 실행되어 7일 이상 연결되지 않은 모든 EBS 볼륨에 태그를 지정해야 합니다.<br><br>가장 운영적으로 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure a delegated administrator account for the organization. Create an AWS CloudFormation template that contains the Lambda function. Use CloudFormation StackSets to deploy the CloudFormation template from the delegated administrator account to all the member accounts in the organization. Create an Amazon EventBridge event bus in the delegated administrator account to invoke the Lambda function in each member account every 30 minutes.`, ko:`조직에 대한 위임된 관리자 계정을 구성합니다. Lambda 함수가 포함된 AWS CloudFormation 템플릿을 만듭니다. CloudFormation StackSets를 사용하여 위임된 관리자 계정에서 조직의 모든 멤버 계정으로 CloudFormation 템플릿을 배포합니다. 위임된 관리자 계정에서 Amazon EventBridge 이벤트 버스를 만들어 30분마다 각 멤버 계정에서 Lambda 함수를 호출합니다.` },
    { k:'B', en:`Create a cross-account IAM role in the organization's member accounts. Attach the AWSLambda_FullAccess policy and the AWSCloudFormationFullAccess policy to the role. Create an AWS CloudFormation template that contains the Lambda function and an Amazon EventBridge scheduled rule to invoke the Lambda function every 30 minutes. Create a custom script in the organization's management account that assumes the role and deploys the CloudFormation template to the member accounts.`, ko:`조직의 멤버 계정에서 교차 계정 IAM 역할을 만듭니다. AWSLambda_FullAccess 정책과 AWSCloudFormationFullAccess 정책을 역할에 연결합니다. Lambda 함수와 Amazon EventBridge 예약 규칙을 포함하는 CloudFormation 템플릿을 만들어 30분마다 Lambda 함수를 호출합니다. 조직의 관리 계정에서 역할을 가정하고 CloudFormation 템플릿을 멤버 계정에 배포하는 사용자 지정 스크립트를 만듭니다.` },
    { k:'C', en:`Configure a delegated administrator account for the organization. Create an AWS CloudFormation template that contains the Lambda function and an Amazon EventBridge scheduled rule to invoke the Lambda function every 30 minutes. Use CloudFormation StackSets to deploy the CloudFormation template from the delegated administrator account to all the member accounts in the organization.`, ko:`조직에 대한 위임된 관리자 계정을 구성합니다. Lambda 함수와 Amazon EventBridge 예약된 규칙을 포함하는 AWS CloudFormation 템플릿을 만들어 30분마다 Lambda 함수를 호출합니다. CloudFormation StackSets를 사용하여 위임된 관리자 계정에서 조직의 모든 멤버 계정으로 CloudFormation 템플릿을 배포합니다.` },
    { k:'D', en:`Create a cross-account IAM role in the organization's member accounts. Attach the AmazonS3FullAccess policy and the AWSCodeDeployDeployerAccess policy to the role. Use AWS CodeDeploy to assume the role to deploy the Lambda function from the organization's management account. Configure an Amazon EventBridge scheduled rule in the member accounts to invoke the Lambda function every 30 minutes.`, ko:`조직의 멤버 계정에서 교차 계정 IAM 역할을 만듭니다. 역할에 AmazonS3FullAccess 정책과 AWSCodeDeployDeployerAccess 정책을 연결합니다. AWS CodeDeploy를 사용하여 조직의 관리 계정에서 Lambda 함수를 배포하는 역할을 맡습니다. 멤버 계정에서 Amazon EventBridge 예약 규칙을 구성하여 30분마다 Lambda 함수를 호출합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 위임된 관리자 + CloudFormation StackSets + EventBridge 예약 규칙 포함</span></p><p>가장 운영 효율적인 방법: 위임된 관리자 계정에서 StackSets로 Lambda 함수와 EventBridge 예약 규칙을 단일 CloudFormation 템플릿에 함께 포함하여 모든 500개 계정에 자동 배포합니다. EventBridge 예약 규칙이 각 계정에 배포되므로 중앙 계정에서 별도로 트리거할 필요가 없습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 위임된 관리자 계정의 EventBridge 이벤트 버스로 각 멤버 계정의 Lambda를 호출하는 것은 복잡하고 비효율적입니다. EventBridge를 CloudFormation 템플릿에 포함(C)하는 것이 더 간단합니다.</p>
<p><span class="mark-no">❌ B, D</span> — 각 멤버 계정에 교차 계정 IAM 역할을 수동으로 만들거나 사용자 지정 스크립트를 사용하는 것은 운영 효율성이 낮습니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'500개 계정에 Lambda + EventBridge 배포: StackSets가 가장 효율적. Lambda와 EventBridge 예약 규칙을 같은 CFn 템플릿에 포함 → 각 계정에서 자율 실행.' }]
},
{
  n: 143,
  en: `A company's production environment uses an AWS CodeDeploy blue/green deployment to deploy an application. The deployment includes Amazon EC2 Auto Scaling groups that launch instances that run Amazon Linux 2.<br><br>A working appspec.yml file exists in the code repository and contains the following text:<br><br><img src="https://img.examtopics.com/aws-certified-devops-engineer-professional-dop-c02/image9.png" alt="appspec.yml" /><br><br>A DevOps engineer needs to ensure that a script downloads and installs a license file onto the instances before the replacement instances start to handle request traffic. The DevOps engineer adds a hooks section to the appspec.yml file.<br><br>Which hook should the DevOps engineer use to run the script that downloads and installs the license file?`,
  ko: `회사의 프로덕션 환경에서는 AWS CodeDeploy 블루/그린 배포를 사용하여 애플리케이션을 배포합니다. 배포에는 Amazon Linux 2를 실행하는 인스턴스를 시작하는 Amazon EC2 Auto Scaling 그룹이 포함됩니다.<br><br>코드 리포지토리에 작동하는 appspec.yml 파일이 있으며 다음 텍스트가 포함되어 있습니다:<br><br><img src="https://img.examtopics.com/aws-certified-devops-engineer-professional-dop-c02/image9.png" alt="appspec.yml" /><br><br>DevOps 엔지니어는 대체 인스턴스가 요청 트래픽을 처리하기 시작하기 전에 스크립트가 인스턴스에 라이선스 파일을 다운로드하여 설치하도록 해야 합니다. DevOps 엔지니어는 appspec.yml 파일에 후크 섹션을 추가합니다.<br><br>DevOps 엔지니어는 라이선스 파일을 다운로드하여 설치하는 스크립트를 실행하기 위해 어떤 후크를 사용해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`AfterBlockTraffic`, ko:`AfterBlockTraffic` },
    { k:'B', en:`BeforeBlockTraffic`, ko:`BeforeBlockTraffic` },
    { k:'C', en:`BeforeInstall`, ko:`BeforeInstall` },
    { k:'D', en:`DownloadBundle`, ko:`DownloadBundle` },
  ],
  answer: ['C'],
  vote: '95% C',
  explain: `<p><span class="mark-ok">✅ C — BeforeInstall</span></p><p>블루/그린 배포에서 대체 인스턴스의 라이프사이클 순서: ApplicationStop → DownloadBundle → BeforeInstall → Install → AfterInstall → ApplicationStart → ValidateService → <b>BeforeAllowTraffic</b> → AllowTraffic → AfterAllowTraffic. BeforeInstall은 대체 인스턴스에서 애플리케이션이 설치되기 전에 실행되며, 트래픽 처리 시작 전입니다. AfterBlockTraffic과 BeforeBlockTraffic은 원본(블루) 인스턴스에만 적용됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, B</span> — AfterBlockTraffic과 BeforeBlockTraffic은 대체 인스턴스에서 사용할 수 없는 후크입니다. 원본(블루) 인스턴스에만 적용됩니다.</p>
<p><span class="mark-no">❌ D</span> — DownloadBundle은 CodeDeploy가 예약한 내부 작업으로, 사용자 스크립트를 실행할 수 없습니다.</p>`,
  disc: [{ ans:'C (95%)', txt:'블루/그린 대체 인스턴스 후크: BeforeInstall은 앱 설치 전 + 트래픽 처리 전. A/B는 원본 인스턴스 전용. D는 CodeDeploy 예약 작업으로 스크립트 실행 불가.' }]
},
{
  n: 144,
  en: `A company has an application that includes AWS Lambda functions. The Lambda functions run Python code that is stored in an AWS CodeCommit repository. The company has recently experienced failures in the production environment because of an error in the Python code. An engineer has written unit tests for the Lambda functions to help avoid releasing any future defects into the production environment.<br><br>The company's DevOps team needs to implement a solution to integrate the unit tests into an existing AWS CodePipeline pipeline. The solution must produce reports about the unit tests for the company to view.<br><br>Which solution will meet these requirements?`,
  ko: `회사에 AWS Lambda 함수가 포함된 애플리케이션이 있습니다. Lambda 함수는 AWS CodeCommit 리포지토리에 저장된 Python 코드를 실행합니다. 이 회사는 최근 Python 코드의 오류로 인해 프로덕션 환경에서 장애를 경험했습니다. 엔지니어는 Lambda 함수에 대한 단위 테스트를 작성하여 향후 프로덕션 환경에 결함이 발생하는 것을 방지했습니다.<br><br>이 회사의 DevOps 팀은 단위 테스트를 기존 AWS CodePipeline 파이프라인에 통합하는 솔루션을 구현해야 합니다. 이 솔루션은 회사에서 볼 수 있도록 단위 테스트에 대한 보고서를 생성해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Associate the CodeCommit repository with Amazon CodeGuru Reviewer. Create a new AWS CodeBuild project. In the CodePipeline pipeline, configure a test stage that uses the new CodeBuild project. Create a buildspec.yml file in the CodeCommit repository. In the buildspec yml file, define the actions to run a CodeGuru review.`, ko:`CodeCommit 리포지토리를 Amazon CodeGuru Reviewer와 연결합니다. 새 AWS CodeBuild 프로젝트를 만듭니다. CodePipeline 파이프라인에서 새 CodeBuild 프로젝트를 사용하는 테스트 단계를 구성합니다. CodeCommit 리포지토리에 buildspec.yml 파일을 만듭니다. buildspec.yml 파일에서 CodeGuru 검토를 실행하는 작업을 정의합니다.` },
    { k:'B', en:`Create a new AWS CodeBuild project. In the CodePipeline pipeline, configure a test stage that uses the new CodeBuild project. Create a CodeBuild report group. Create a buildspec.yml file in the CodeCommit repository. In the buildspec.yml file, define the actions to run the unit tests with an output of JUNITXML in the build phase section. Configure the test reports to be uploaded to the new CodeBuild report group.`, ko:`새 AWS CodeBuild 프로젝트를 만듭니다. CodePipeline 파이프라인에서 새 CodeBuild 프로젝트를 사용하는 테스트 단계를 구성합니다. CodeBuild 보고서 그룹을 만듭니다. CodeCommit 리포지토리에 buildspec.yml 파일을 만듭니다. buildspec.yml 파일에서 빌드 단계 섹션에 JUNITXML 출력으로 단위 테스트를 실행하는 작업을 정의합니다. 새 CodeBuild 보고서 그룹에 업로드할 테스트 보고서를 구성합니다.` },
    { k:'C', en:`Create a new AWS CodeArtifact repository. Create a new AWS CodeBuild project. In the CodePipeline pipeline, configure a test stage that uses the new CodeBuild project. Create an appspec.yml file in the original CodeCommit repository. In the appspec.yml file, define the actions to run the unit tests with an output of CUCUMBERJSON in the build phase section. Configure the tests reports to be sent to the new CodeArtifact repository.`, ko:`새 AWS CodeArtifact 리포지토리를 만듭니다. 새 AWS CodeBuild 프로젝트를 만듭니다. CodePipeline 파이프라인에서 새 CodeBuild 프로젝트를 사용하는 테스트 단계를 구성합니다. 원래 CodeCommit 리포지토리에 appspec.yml 파일을 만듭니다. appspec.yml 파일에서 빌드 단계 섹션에 CUCUMBERJSON 출력으로 단위 테스트를 실행하는 작업을 정의합니다. 새 CodeArtifact 리포지토리로 보낼 테스트 보고서를 구성합니다.` },
    { k:'D', en:`Create a new AWS CodeBuild project. In the CodePipeline pipeline, configure a test stage that uses the new CodeBuild project. Create a new Amazon S3 bucket. Create a buildspec.yml file in the CodeCommit repository. In the buildspec yml file, define the actions to run the unit tests with an output of HTML in the phases section. In the reports section, upload the test reports to the S3 bucket.`, ko:`새 AWS CodeBuild 프로젝트를 만듭니다. CodePipeline 파이프라인에서 새 CodeBuild 프로젝트를 사용하는 테스트 단계를 구성합니다. 새 Amazon S3 버킷을 만듭니다. CodeCommit 리포지토리에 buildspec.yml 파일을 만듭니다. buildspec.yml 파일에서 phases 섹션에 HTML 출력으로 단위 테스트를 실행하는 작업을 정의합니다. 보고서 섹션에서 테스트 보고서를 S3 버킷에 업로드합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — CodeBuild + 보고서 그룹 + JUNITXML</span></p><p>단위 테스트 통합의 표준 패턴: CodeBuild 프로젝트에서 테스트를 실행하고, JUNITXML 형식으로 결과를 출력하면 CodeBuild 보고서 그룹에 시각적인 테스트 보고서가 생성됩니다. CodePipeline에서 테스트 단계로 구성하면 파이프라인 실행 중 테스트가 자동으로 실행됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CodeGuru Reviewer는 코드 품질 분석(코드 리뷰) 서비스이며 단위 테스트 실행이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — CodeArtifact는 패키지 저장소이며 테스트 보고서 저장에 적합하지 않습니다. appspec.yml은 CodeDeploy 파일입니다.</p>
<p><span class="mark-no">❌ D</span> — CodeBuild 보고서 그룹은 테스트 결과를 시각화하는 내장 기능입니다. S3에 HTML로 저장하는 것보다 CodeBuild 보고서 그룹을 사용하는 것이 더 적합합니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'CodeBuild 테스트 보고서: buildspec.yml에서 JUNITXML 출력 → CodeBuild 보고서 그룹에 자동 업로드 → 콘솔에서 테스트 결과 시각화. 공식 AWS 문서 권장 패턴.' }]
},
{
  n: 145,
  en: `A company manages multiple AWS accounts in AWS Organizations. The company's security policy states that AWS account root user credentials for member accounts must not be used. The company monitors access to the root user credentials.<br><br>A recent alert shows that the root user in a member account launched an Amazon EC2 instance. A DevOps engineer must create an SCP at the organization's root level that will prevent the root user in member accounts from making any AWS service API calls.<br><br>Which SCP will meet these requirements?`,
  ko: `한 회사가 AWS Organizations에서 여러 AWS 계정을 관리합니다. 회사의 보안 정책에 따르면 멤버 계정의 AWS 계정 루트 사용자 자격 증명은 사용해서는 안 됩니다. 회사는 루트 사용자 자격 증명에 대한 액세스를 모니터링합니다.<br><br>최근 알림에 따르면 멤버 계정의 루트 사용자가 Amazon EC2 인스턴스를 시작했습니다. DevOps 엔지니어는 멤버 계정의 루트 사용자가 AWS 서비스 API 호출을 하지 못하도록 조직의 루트 수준에서 SCP를 만들어야 합니다.<br><br>이러한 요구 사항을 충족하는 SCP는 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`(Image A - Allow policy)`, ko:`(이미지 A - 허용 정책)` },
    { k:'B', en:`(Image B - Policy with Principal element)`, ko:`(이미지 B - Principal 요소가 있는 정책)` },
    { k:'C', en:`(Image C - Deny all actions with aws:PrincipalType = Root condition)`, ko:`(이미지 C - aws:PrincipalType = Root 조건을 사용하여 모든 작업 거부)` },
    { k:'D', en:`(Image D - Allow policy with conditions)`, ko:`(이미지 D - 조건이 있는 허용 정책)` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 루트 사용자 차단 SCP (aws:PrincipalType = Root 조건)</span></p><p>멤버 계정 루트 사용자의 모든 API 호출을 차단하는 SCP는 다음과 같은 구조입니다:<br><code>{"Effect": "Deny", "Action": "*", "Resource": "*", "Condition": {"StringLike": {"aws:PrincipalArn": "arn:aws:iam::*:root"}}}</code><br>이 SCP는 모든 멤버 계정의 루트 사용자가 모든 AWS 서비스 API를 호출하지 못하도록 차단합니다. SCP는 관리 계정에는 영향을 미치지 않습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, D</span> — Allow 정책은 차단이 아닌 허용을 정의합니다. 루트 사용자 API 호출을 차단하려면 Deny가 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — SCP에는 Principal 요소가 없습니다. 조건(Condition)으로 주체를 필터링합니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'멤버 계정 루트 사용자 차단 SCP: Deny + Action: * + Condition: aws:PrincipalArn = *:root. AWS Organizations 모범 사례 및 Control Tower 강력 권고 컨트롤.' }]
},
{
  n: 146,
  en: `A company uses AWS and has a VPC that contains critical compute infrastructure with predictable traffic patterns. The company has configured VPC flow logs that are published to a log group in Amazon CloudWatch Logs.<br><br>The company's DevOps team needs to configure a monitoring solution for the VPC flow logs to identify anomalies in network traffic to the VPC over time. If the monitoring solution detects an anomaly, the company needs the ability to initiate a response to the anomaly.<br><br>How should the DevOps team configure the monitoring solution to meet these requirements?`,
  ko: `한 회사가 AWS를 사용하고 예측 가능한 트래픽 패턴이 있는 중요한 컴퓨팅 인프라가 포함된 VPC를 보유하고 있습니다. 이 회사는 Amazon CloudWatch Logs의 로그 그룹에 게시되는 VPC 흐름 로그를 구성했습니다.<br><br>이 회사의 DevOps 팀은 VPC 흐름 로그에 대한 모니터링 솔루션을 구성하여 시간이 지남에 따라 VPC로의 네트워크 트래픽에서 이상을 식별해야 합니다. 모니터링 솔루션이 이상을 감지하면 이 회사는 이상에 대한 대응을 시작할 수 있어야 합니다.<br><br>DevOps 팀은 이러한 요구 사항을 충족하기 위해 모니터링 솔루션을 어떻게 구성해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon Kinesis data stream. Subscribe the log group to the data stream. Configure Amazon Kinesis Data Analytics to detect log anomalies in the data stream. Create an AWS Lambda function to use as the output of the data stream. Configure the Lambda function to write to the default Amazon EventBridge event bus in the event of an anomaly finding.`, ko:`Amazon Kinesis 데이터 스트림을 만듭니다. 로그 그룹을 데이터 스트림에 구독합니다. Amazon Kinesis Data Analytics를 구성하여 데이터 스트림에서 로그 이상을 감지합니다. AWS Lambda 함수를 만들어 데이터 스트림의 출력으로 사용합니다. 이상 발견 시 기본 Amazon EventBridge 이벤트 버스에 쓰도록 Lambda 함수를 구성합니다.` },
    { k:'B', en:`Create an Amazon Kinesis Data Firehose delivery stream that delivers events to an Amazon S3 bucket. Subscribe the log group to the delivery stream. Configure Amazon Lookout for Metrics to monitor the data in the S3 bucket for anomalies. Create an AWS Lambda function to run in response to Lookout for Metrics anomaly findings. Configure the Lambda function to publish to the default Amazon EventBridge event bus.`, ko:`Amazon S3 버킷에 이벤트를 전달하는 Amazon Kinesis Data Firehose 전달 스트림을 만듭니다. 전달 스트림에 로그 그룹을 구독합니다. Amazon Lookout for Metrics를 구성하여 S3 버킷의 데이터에서 이상 징후를 모니터링합니다. Lookout for Metrics 이상 징후 발견에 대한 응답으로 실행할 AWS Lambda 함수를 만듭니다. Lambda 함수를 구성하여 기본 Amazon EventBridge 이벤트 버스에 게시합니다.` },
    { k:'C', en:`Create an AWS Lambda function to detect anomalies. Configure the Lambda function to publish an event to the default Amazon EventBridge event bus if the Lambda function detects an anomaly. Subscribe the Lambda function to the log group.`, ko:`AWS Lambda 함수를 만들어 이상을 감지합니다. Lambda 함수가 이상을 감지하면 기본 Amazon EventBridge 이벤트 버스에 이벤트를 게시하도록 Lambda 함수를 구성합니다. Lambda 함수를 로그 그룹에 구독합니다.` },
    { k:'D', en:`Create an Amazon Kinesis data stream. Subscribe the log group to the data stream. Create an AWS Lambda function to detect log anomalies. Configure the Lambda function to write to the default Amazon EventBridge event bus if the Lambda function detects an anomaly. Set the Lambda function as the processor for the data stream.`, ko:`Amazon Kinesis 데이터 스트림을 만듭니다. 로그 그룹을 데이터 스트림에 구독합니다. 로그 이상을 감지하는 AWS Lambda 함수를 만듭니다. Lambda 함수가 이상을 감지하면 기본 Amazon EventBridge 이벤트 버스에 쓰도록 Lambda 함수를 구성합니다. Lambda 함수를 데이터 스트림의 프로세서로 설정합니다.` },
  ],
  answer: ['B'],
  vote: '71% B',
  explain: `<p><span class="mark-ok">✅ B — Kinesis Data Firehose + S3 + Lookout for Metrics + Lambda + EventBridge</span></p><p>"시간이 지남에 따라(over time)" 이상 감지는 과거 데이터와 현재 데이터를 비교하는 ML 기반 이상 감지를 의미합니다. Amazon Lookout for Metrics는 완전 관리형 ML 서비스로 비즈니스/운영 데이터의 이상을 자동 감지합니다. S3에 데이터를 축적하고 Lookout for Metrics가 시간 기반 패턴을 분석합니다. 예측 가능한 트래픽 패턴 → 기준선 학습 후 이상 탐지.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Kinesis Data Analytics의 RANDOM_CUT_FOREST는 실시간 스트림 이상 감지에 적합하지만, "시간 경과에 따른" 이상 감지에는 기록 데이터 저장이 필요합니다. 또한 Kinesis Data Analytics 출력을 Lambda로 직접 전송할 수 없습니다.</p>
<p><span class="mark-no">❌ C, D</span> — 자체 Lambda로 이상 감지를 구현하면 ML 모델 개발 및 유지 관리 오버헤드가 발생합니다.</p>`,
  disc: [{ ans:'B (71%) vs A (29%)', txt:'"over time" = ML 기반 이상 감지. Lookout for Metrics: 완전 관리형 서비스, S3 데이터 분석, 예측 패턴 학습. A는 실시간이나 역사적 비교 부족. 논란 있음 — 실시간이 필요하면 A가 더 적합.' }]
},
{
  n: 147,
  en: `AnyCompany is using AWS Organizations to create and manage multiple AWS accounts. AnyCompany recently acquired a smaller company, Example Corp. During the acquisition process, Example Corp's single AWS account joined AnyCompany's management account through an Organizations invitation. AnyCompany moved the new member account under an OU that is dedicated to Example Corp.<br><br>AnyCompany's DevOps engineer has an IAM user that assumes a role that is named OrganizationAccountAccessRole to access member accounts. This role is configured with a full access policy. When the DevOps engineer tries to use the AWS Management Console to assume the role in Example Corp's new member account, the DevOps engineer receives the following error message: "Invalid information in one or more fields. Check your information or contact your administrator."<br><br>Which solution will give the DevOps engineer access to the new member account?`,
  ko: `AnyCompany는 AWS Organizations를 사용하여 여러 AWS 계정을 만들고 관리합니다. AnyCompany는 최근 소규모 회사인 Example Corp를 인수했습니다. 인수 과정에서 Example Corp의 단일 AWS 계정이 Organizations 초대를 통해 AnyCompany의 관리 계정에 가입했습니다. AnyCompany는 새 멤버 계정을 Example Corp에 전담된 OU로 옮겼습니다.<br><br>AnyCompany의 DevOps 엔지니어는 멤버 계정에 액세스하기 위해 OrganizationAccountAccessRole이라는 역할을 맡는 IAM 사용자가 있습니다. 이 역할은 전체 액세스 정책으로 구성되어 있습니다. DevOps 엔지니어가 AWS Management Console을 사용하여 Example Corp의 새 멤버 계정에서 역할을 맡으려고 하면 "하나 이상의 필드에 잘못된 정보가 있습니다. 정보를 확인하거나 관리자에게 문의하십시오."라는 오류 메시지를 받습니다.<br><br>DevOps 엔지니어가 새 멤버 계정에 액세스할 수 있게 하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`In the management account, grant the DevOps engineer's IAM user permission to assume the OrganizationAccountAccessRole IAM role in the new member account.`, ko:`관리 계정에서 DevOps 엔지니어의 IAM 사용자에게 새 멤버 계정에서 OrganizationAccountAccessRole IAM 역할을 맡을 수 있는 권한을 부여합니다.` },
    { k:'B', en:`In the management account, create a new SCP. In the SCP, grant the DevOps engineer's IAM user full access to all resources in the new member account. Attach the SCP to the OU that contains the new member account.`, ko:`관리 계정에서 새 SCP를 만듭니다. SCP에서 DevOps 엔지니어의 IAM 사용자에게 새 멤버 계정의 모든 리소스에 대한 전체 액세스 권한을 부여합니다. 새 멤버 계정이 포함된 OU에 SCP를 연결합니다.` },
    { k:'C', en:`In the new member account, create a new IAM role that is named OrganizationAccountAccessRole. Attach the AdministratorAccess AWS managed policy to the role. In the role's trust policy, grant the management account permission to assume the role.`, ko:`새 멤버 계정에서 OrganizationAccountAccessRole이라는 이름의 새 IAM 역할을 만듭니다. AdministratorAccess AWS 관리 정책을 역할에 연결합니다. 역할의 신뢰 정책에서 관리 계정에 역할을 맡을 수 있는 권한을 부여합니다.` },
    { k:'D', en:`In the new member account, edit the trust policy for the OrganizationAccountAccessRole IAM role. Grant the management account permission to assume the role.`, ko:`새 멤버 계정에서 OrganizationAccountAccessRole IAM 역할에 대한 신뢰 정책을 편집합니다. 관리 계정에 역할을 맡을 수 있는 권한을 부여합니다.` },
  ],
  answer: ['C'],
  vote: '63% C',
  explain: `<p><span class="mark-ok">✅ C — 새 멤버 계정에 OrganizationAccountAccessRole 수동 생성</span></p><p>AWS Organizations에서 계정이 생성(새로 만들기)되면 OrganizationAccountAccessRole이 자동으로 생성됩니다. 그러나 <b>초대를 통해 가입한 계정</b>(Example Corp의 기존 계정)에는 이 역할이 자동으로 생성되지 않습니다. AWS 공식 문서에 따르면, 초대된 멤버 계정에는 역할을 수동으로 생성해야 합니다. AdministratorAccess 정책과 관리 계정에 신뢰 관계를 설정하면 됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 역할이 없으면 assume 권한을 부여해도 역할을 맡을 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — SCP는 권한을 부여하지 않으며, IAM 역할 가정 방식과 다릅니다.</p>
<p><span class="mark-no">❌ D</span> — 역할이 존재하지 않으므로 신뢰 정책을 편집할 수 없습니다. 역할 자체를 새로 만들어야 합니다.</p>`,
  disc: [{ ans:'C (63%) vs D (35%)', txt:'핵심: 초대된 계정은 OrganizationAccountAccessRole이 자동 생성되지 않음. AWS 공식 문서: "invited member accounts, you must manually create the role." 역할이 없으므로 D(편집)는 불가.' }]
},
{
  n: 148,
  en: `A DevOps engineer is designing an application that integrates with a legacy REST API. The application has an AWS Lambda function that reads records from an Amazon Kinesis data stream. The Lambda function sends the records to the legacy REST API.<br><br>Approximately 10% of the records that the Lambda function sends from the Kinesis data stream have data errors and must be processed manually. The Lambda function event source configuration has an Amazon Simple Queue Service (Amazon SQS) dead-letter queue as an on-failure destination. The DevOps engineer has configured the Lambda function to process records in batches and has implemented retries in case of failure.<br><br>During testing, the DevOps engineer notices that the dead-letter queue contains many records that have no data errors and that already have been processed by the legacy REST API. The DevOps engineer needs to configure the Lambda function's event source options to reduce the number of errorless records that are sent to the dead-letter queue.<br><br>Which solution will meet these requirements?`,
  ko: `DevOps 엔지니어가 레거시 REST API와 통합되는 애플리케이션을 설계하고 있습니다. 이 애플리케이션에는 Amazon Kinesis 데이터 스트림에서 레코드를 읽는 AWS Lambda 함수가 있습니다. Lambda 함수는 레코드를 레거시 REST API로 전송합니다.<br><br>Lambda 함수가 Kinesis 데이터 스트림에서 전송하는 레코드의 약 10%에 데이터 오류가 있으며 수동으로 처리해야 합니다. Lambda 함수 이벤트 소스 구성에는 실패 시 대상으로 Amazon SQS 배달 못한 편지 대기열이 있습니다. DevOps 엔지니어는 Lambda 함수를 구성하여 레코드를 일괄 처리하고 실패 시 재시도를 구현했습니다.<br><br>테스트 중에 배달 못한 편지 대기열에 데이터 오류가 없고 이미 레거시 REST API에서 처리한 레코드가 많이 포함되어 있음을 알아챘습니다. DevOps 엔지니어는 배달 못한 편지 대기열로 전송되는 오류 없는 레코드 수를 줄이기 위해 Lambda 함수의 이벤트 소스 옵션을 구성해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Increase the retry attempts.`, ko:`재시도 횟수를 늘리세요.` },
    { k:'B', en:`Configure the setting to split the batch when an error occurs.`, ko:`오류가 발생할 때 배치를 분할하도록 설정을 구성합니다.` },
    { k:'C', en:`Increase the concurrent batches per shard.`, ko:`샤드당 동시 배치 수를 늘립니다.` },
    { k:'D', en:`Decrease the maximum age of record.`, ko:`기록의 최대 연령을 낮춥니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 오류 발생 시 배치 분할(BisectBatchOnFunctionError)</span></p><p>현재 문제: 일괄 처리 중 하나의 레코드에 오류가 있으면 전체 배치가 재시도되고, 결국 전체 배치(오류 없는 레코드 포함)가 DLQ로 전송됩니다. BisectBatchOnFunctionError(배치 분할) 설정을 활성화하면, 오류 발생 시 배치를 반으로 분할하여 오류가 있는 레코드만 격리하고 DLQ로 보낼 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 재시도 횟수를 늘리면 오류 없는 레코드가 더 많이 DLQ로 전송될 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — 동시 배치 수를 늘려도 배치 내 오류 처리 방식이 변경되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 최대 연령 감소는 오래된 레코드를 버리는 것으로, 오류 없는 레코드가 DLQ에 가는 문제를 해결하지 않습니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'Kinesis + Lambda 배치 처리: BisectBatchOnFunctionError=true → 오류 시 배치 이진 분할 → 오류 레코드 격리 → DLQ에 오류 레코드만 전송. 정상 레코드는 처리 완료.' }]
},
{
  n: 149,
  en: `A company has microservices running in AWS Lambda that read data from Amazon DynamoDB. The Lambda code is manually deployed by developers after successful testing. The company now needs the tests and deployments be automated and run in the cloud. Additionally, traffic to the new versions of each microservice should be incrementally shifted over time after deployment.<br><br>What solution meets all the requirements, ensuring the MOST developer velocity?`,
  ko: `한 회사에서는 Amazon DynamoDB에서 데이터를 읽는 AWS Lambda에서 실행되는 마이크로서비스를 보유하고 있습니다. Lambda 코드는 성공적인 테스트 후 개발자가 수동으로 배포합니다. 이제 회사는 테스트와 배포를 자동화하고 클라우드에서 실행해야 합니다. 또한 각 마이크로서비스의 새 버전으로의 트래픽은 배포 후 시간이 지남에 따라 점진적으로 이동해야 합니다.<br><br>모든 요구 사항을 충족하고 가장 빠른 개발자 속도를 보장하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS CodePipeline configuration and set up a post-commit hook to trigger the pipeline after tests have passed. Use AWS CodeDeploy and create a Canary deployment configuration that specifies the percentage of traffic and interval.`, ko:`AWS CodePipeline 구성을 만들고 테스트가 통과한 후 파이프라인을 트리거하기 위한 post-commit 후크를 설정합니다. AWS CodeDeploy를 사용하고 트래픽 비율과 간격을 지정하는 Canary 배포 구성을 만듭니다.` },
    { k:'B', en:`Create an AWS CodeBuild configuration that triggers when the test code is pushed. Use AWS CloudFormation to trigger an AWS CodePipeline configuration that deploys the new Lambda versions and specifies the traffic shift percentage and interval.`, ko:`테스트 코드가 푸시될 때 트리거되는 AWS CodeBuild 구성을 만듭니다. AWS CloudFormation을 사용하여 새로운 Lambda 버전을 배포하고 트래픽 이동 비율과 간격을 지정하는 AWS CodePipeline 구성을 트리거합니다.` },
    { k:'C', en:`Create an AWS CodePipeline configuration and set up the source code step to trigger when code is pushed. Set up the build step to use AWS CodeBuild to run the tests. Set up an AWS CodeDeploy configuration to deploy, then select the CodeDeployDefault.LambdaLinear10PercentEvery3Minutes option.`, ko:`AWS CodePipeline 구성을 만들고 코드가 푸시될 때 트리거되도록 소스 코드 단계를 설정합니다. AWS CodeBuild를 사용하여 테스트를 실행하도록 빌드 단계를 설정합니다. 배포할 AWS CodeDeploy 구성을 설정한 다음 CodeDeployDefault.LambdaLinear10PercentEvery3Minutes 옵션을 선택합니다.` },
    { k:'D', en:`Use the AWS CLI to set up a post-commit hook that uploads the code to an Amazon S3 bucket after tests have passed. Set up an S3 event trigger that runs a Lambda function that deploys the new version. Use an interval in the Lambda function to deploy the code over time at the required percentage.`, ko:`AWS CLI를 사용하여 테스트가 통과한 후 Amazon S3 버킷에 코드를 업로드하는 post-commit 후크를 설정합니다. 새 버전을 배포하는 Lambda 함수를 실행하는 S3 이벤트 트리거를 설정합니다. Lambda 함수에서 간격을 사용하여 필요한 백분율로 시간 경과에 따라 코드를 배포합니다.` },
  ],
  answer: ['C'],
  vote: '97% C',
  explain: `<p><span class="mark-ok">✅ C — CodePipeline + CodeBuild(테스트) + CodeDeploy LambdaLinear10PercentEvery3Minutes</span></p><p>모든 요구사항 충족: ① 코드 푸시 시 자동 트리거(소스 단계), ② CodeBuild로 자동화된 클라우드 테스트, ③ CodeDeploy의 LambdaLinear10Percent 옵션으로 3분마다 10%씩 점진적 트래픽 이동(Linear 전략). Linear 전략은 시간 경과에 따라 지속적으로 트래픽을 이동하므로 "점진적으로 이동" 요구사항에 적합합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 카나리(Canary) 배포는 지정된 비율로 전환 후 일정 시간 대기하다가 한번에 100%로 전환합니다. "시간이 지남에 따라 점진적" 조건에 Linear가 더 적합합니다.</p>
<p><span class="mark-no">❌ B</span> — 테스트 코드가 푸시될 때 파이프라인을 트리거하는 것은 잘못된 설계입니다.</p>
<p><span class="mark-no">❌ D</span> — S3 + Lambda 수동 구현은 개발자 속도를 저하시킵니다.</p>`,
  disc: [{ ans:'C (97%)', txt:'Lambda 점진적 트래픽 이동: Linear(매 N분마다 X% 증가) vs Canary(X%로 시작 후 전체 전환). "점진적으로 이동" = Linear. CodePipeline + CodeBuild + CodeDeploy = 완전 자동화 CI/CD.' }]
},
{
  n: 150,
  en: `A company is building a web and mobile application that uses a serverless architecture powered by AWS Lambda and Amazon API Gateway. The company wants to fully automate the backend Lambda deployment based on code that is pushed to the appropriate environment branch in an AWS CodeCommit repository.<br><br>The deployment must have the following:<br><br>• Separate environment pipelines for testing and production<br>• Automatic deployment that occurs for test environments only<br><br>Which steps should be taken to meet these requirements?`,
  ko: `한 회사가 AWS Lambda와 Amazon API Gateway로 구동되는 서버리스 아키텍처를 사용하는 웹 및 모바일 애플리케이션을 구축하고 있습니다. 이 회사는 AWS CodeCommit 리포지토리의 적절한 환경 브랜치에 푸시된 코드를 기반으로 백엔드 Lambda 배포를 완전히 자동화하려고 합니다.<br><br>배포에는 다음이 있어야 합니다:<br><br>• 테스트 및 프로덕션을 위한 별도의 환경 파이프라인<br>• 테스트 환경에서만 발생하는 자동 배포<br><br>이러한 요구 사항을 충족하기 위해 어떤 단계를 거쳐야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure a new AWS CodePipeline service. Create a CodeCommit repository for each environment. Set up CodePipeline to retrieve the source code from the appropriate repository. Set up the deployment step to deploy the Lambda functions with AWS CloudFormation.`, ko:`새로운 AWS CodePipeline 서비스를 구성합니다. 각 환경에 대한 CodeCommit 리포지토리를 만듭니다. CodePipeline을 설정하여 적절한 리포지토리에서 소스 코드를 검색합니다. AWS CloudFormation으로 Lambda 함수를 배포하기 위한 배포 단계를 설정합니다.` },
    { k:'B', en:`Create two AWS CodePipeline configurations for test and production environments. Configure the production pipeline to have a manual approval step. Create a CodeCommit repository for each environment. Set up each CodePipeline to retrieve the source code from the appropriate repository. Set up the deployment step to deploy the Lambda functions with AWS CloudFormation.`, ko:`테스트 및 프로덕션 환경에 대한 두 개의 AWS CodePipeline 구성을 만듭니다. 프로덕션 파이프라인을 구성하여 수동 승인 단계를 갖도록 합니다. 각 환경에 대한 CodeCommit 리포지토리를 만듭니다. 각 CodePipeline을 설정하여 적절한 리포지토리에서 소스 코드를 검색합니다. AWS CloudFormation으로 Lambda 함수를 배포하도록 배포 단계를 설정합니다.` },
    { k:'C', en:`Create two AWS CodePipeline configurations for test and production environments. Configure the production pipeline to have a manual approval step. Create one CodeCommit repository with a branch for each environment. Set up each CodePipeline to retrieve the source code from the appropriate branch in the repository. Set up the deployment step to deploy the Lambda functions with AWS CloudFormation.`, ko:`테스트 및 프로덕션 환경에 대한 두 개의 AWS CodePipeline 구성을 만듭니다. 프로덕션 파이프라인을 구성하여 수동 승인 단계를 갖도록 합니다. 각 환경에 대한 브랜치가 있는 CodeCommit 리포지토리를 하나 만듭니다. 리포지토리의 적절한 브랜치에서 소스 코드를 검색하도록 각 CodePipeline을 설정합니다. AWS CloudFormation으로 Lambda 함수를 배포하도록 배포 단계를 설정합니다.` },
    { k:'D', en:`Create an AWS CodeBuild configuration for test and production environments. Configure the production pipeline to have a manual approval step. Create one CodeCommit repository with a branch for each environment. Push the Lambda function code to an Amazon S3 bucket. Set up the deployment step to deploy the Lambda functions from the S3 bucket.`, ko:`테스트 및 프로덕션 환경에 대한 AWS CodeBuild 구성을 만듭니다. 프로덕션 파이프라인을 구성하여 수동 승인 단계를 갖도록 합니다. 각 환경에 대한 브랜치가 있는 CodeCommit 리포지토리를 하나 만듭니다. Lambda 함수 코드를 Amazon S3 버킷으로 푸시합니다. S3 버킷에서 Lambda 함수를 배포하도록 배포 단계를 설정합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 두 개의 파이프라인 + 단일 리포지토리 브랜치 전략 + 프로덕션 수동 승인</span></p><p>모범 사례: 환경별로 별도 리포지토리가 아닌 단일 리포지토리에 브랜치로 관리합니다. 두 개의 CodePipeline: 테스트 파이프라인(자동 배포)과 프로덕션 파이프라인(수동 승인 후 배포). 각 파이프라인이 해당 환경 브랜치를 소스로 사용합니다. CloudFormation으로 Lambda 서버리스 인프라를 배포합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 파이프라인이 하나이고 프로덕션/테스트 분리가 없습니다.</p>
<p><span class="mark-no">❌ B</span> — 환경별로 별도 리포지토리를 만드는 것은 모범 사례가 아닙니다. 같은 코드를 두 리포지토리에서 관리하면 비효율적입니다.</p>
<p><span class="mark-no">❌ D</span> — CodePipeline이 없으며, S3 기반 배포는 CloudFormation보다 서버리스 배포에 덜 적합합니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'모범 사례: 단일 리포지토리 + 환경별 브랜치. 두 CodePipeline: 테스트(자동) + 프로덕션(수동 승인). CloudFormation으로 Lambda 배포. B는 환경별 별도 리포지토리 = 안티패턴.' }]
}
];
