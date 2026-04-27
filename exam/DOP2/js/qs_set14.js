window.QS_SET14 = [
{
  n: 131,
  en: `A company builds a container image in an AWS CodeBuild project by running Docker commands. After the container image is built, the CodeBuild project uploads the container image to an Amazon S3 bucket. The CodeBuild project has an IAM service role that has permissions to access the S3 bucket.<br><br>A DevOps engineer needs to replace the S3 bucket with an Amazon Elastic Container Registry (Amazon ECR) repository to store the container images. The DevOps engineer creates an ECR private image repository in the same AWS Region of the CodeBuild project. The DevOps engineer adjusts the IAM service role with the permissions that are necessary to work with the new ECR repository. The DevOps engineer also places new repository information into the docker build command and the docker push command that are used in the buildspec.yml file.<br><br>When the CodeBuild project runs a build job, the job fails when the job tries to access the ECR repository.<br><br>Which solution will resolve the issue of failed access to the ECR repository?`,
  ko: `한 회사가 AWS CodeBuild 프로젝트에서 Docker 명령을 실행하여 컨테이너 이미지를 빌드합니다. 컨테이너 이미지가 빌드된 후 CodeBuild 프로젝트는 컨테이너 이미지를 Amazon S3 버킷에 업로드합니다. CodeBuild 프로젝트에는 S3 버킷에 액세스할 수 있는 권한이 있는 IAM 서비스 역할이 있습니다.<br><br>DevOps 엔지니어는 컨테이너 이미지를 저장하기 위해 S3 버킷을 Amazon ECR 리포지토리로 바꿔야 합니다. DevOps 엔지니어는 CodeBuild 프로젝트와 동일한 AWS 리전에 ECR 프라이빗 이미지 리포지토리를 만들고, IAM 서비스 역할을 조정하고, buildspec.yml 파일에 새 리포지토리 정보를 넣었습니다.<br><br>CodeBuild 빌드 작업이 ECR 리포지토리에 액세스하려 할 때 실패합니다. ECR 리포지토리 액세스 실패 문제를 해결하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Update the buildspec.yml file to log in to the ECR repository by using the aws ecr get-login-password AWS CLI command to obtain an authentication token. Update the docker login command to use the authentication token to access the ECR repository.`, ko:`buildspec.yml 파일을 업데이트하여 aws ecr get-login-password AWS CLI 명령을 사용하여 인증 토큰을 얻어 ECR 리포지토리에 로그인합니다. 인증 토큰을 사용하여 ECR 리포지토리에 액세스하도록 docker login 명령을 업데이트합니다.` },
    { k:'B', en:`Add an environment variable of type SECRETS_MANAGER to the CodeBuild project. In the environment variable, include the ARN of the CodeBuild project's IAM service role. Update the buildspec.yml file to use the new environment variable to log in with the docker login command to access the ECR repository.`, ko:`CodeBuild 프로젝트에 SECRETS_MANAGER 유형의 환경 변수를 추가합니다. 환경 변수에 CodeBuild 프로젝트의 IAM 서비스 역할의 ARN을 포함합니다. 새 환경 변수를 사용하여 docker login 명령으로 ECR 리포지토리에 액세스하도록 buildspec.yml 파일을 업데이트합니다.` },
    { k:'C', en:`Update the ECR repository to be a public image repository. Add an ECR repository policy that allows the IAM service role to have access.`, ko:`ECR 리포지토리를 공개 이미지 리포지토리로 업데이트합니다. IAM 서비스 역할이 액세스할 수 있도록 허용하는 ECR 리포지토리 정책을 추가합니다.` },
    { k:'D', en:`Update the buildspec.yml file to use the AWS CLI to assume the IAM service role for ECR operations. Add an ECR repository policy that allows the IAM service role to have access.`, ko:`AWS CLI를 사용하여 ECR 작업을 위한 IAM 서비스 역할을 맡도록 buildspec.yml 파일을 업데이트합니다. IAM 서비스 역할이 액세스할 수 있도록 허용하는 ECR 리포지토리 정책을 추가합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — ECR 인증 토큰 획득 후 docker login</span></p><p>Amazon ECR은 Docker Hub와 달리 사용 전 반드시 인증이 필요합니다. <code>aws ecr get-login-password</code> 명령으로 인증 토큰을 얻고, <code>docker login</code>에 해당 토큰을 전달하면 ECR 레지스트리에 인증됩니다. IAM 권한을 아무리 잘 설정해도 이 인증 단계 없이는 docker push/pull이 실패합니다. buildspec.yml의 pre_build 단계에 이 명령을 추가하면 됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — Secrets Manager를 통해 IAM 역할 ARN을 환경 변수로 전달해도 ECR 인증 문제가 해결되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 공개 리포지토리로 변경하는 것은 보안 위험이며, 인증 방식을 변경하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 이미 역할을 사용하고 있으므로 다시 assume할 필요가 없습니다. 핵심은 ECR 인증 토큰 획득입니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'ECR 접근 필수 단계: aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <ecr-uri>. IAM 권한과 별개로 ECR 전용 인증 필요.' }]
},
{
  n: 132,
  en: `A company manually provisions IAM access for its employees. The company wants to replace the manual process with an automated process. The company has an existing Active Directory system configured with an external SAML 2.0 identity provider (IdP).<br><br>The company wants employees to use their existing corporate credentials to access AWS. The groups from the existing Active Directory system must be available for permission management in AWS Identity and Access Management (IAM). A DevOps engineer has completed the initial configuration of AWS IAM Identity Center (AWS Single Sign-On) in the company's AWS account.<br><br>What should the DevOps engineer do next to meet the requirements?`,
  ko: `회사에서 직원의 IAM 액세스를 수동으로 프로비저닝합니다. 회사에서는 수동 프로세스를 자동화된 프로세스로 대체하려고 합니다. 회사에는 외부 SAML 2.0 ID 공급자(IdP)로 구성된 기존 Active Directory 시스템이 있습니다.<br><br>회사에서는 직원이 기존 회사 자격 증명을 사용하여 AWS에 액세스하기를 원합니다. 기존 Active Directory 시스템의 그룹은 AWS IAM에서 권한 관리를 위해 사용할 수 있어야 합니다. DevOps 엔지니어가 회사의 AWS 계정에서 AWS IAM Identity Center(AWS Single Sign-On)의 초기 구성을 완료했습니다.<br><br>DevOps 엔지니어는 요구 사항을 충족하기 위해 다음에 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure an external IdP as an identity source. Configure automatic provisioning of users and groups by using the SCIM protocol.`, ko:`외부 IdP를 ID 소스로 구성합니다. SCIM 프로토콜을 사용하여 사용자 및 그룹의 자동 프로비저닝을 구성합니다.` },
    { k:'B', en:`Configure AWS Directory Service as an identity source. Configure automatic provisioning of users and groups by using the SAML protocol.`, ko:`AWS Directory Service를 ID 소스로 구성합니다. SAML 프로토콜을 사용하여 사용자 및 그룹의 자동 프로비저닝을 구성합니다.` },
    { k:'C', en:`Configure an AD Connector as an identity source. Configure automatic provisioning of users and groups by using the SCIM protocol.`, ko:`AD 커넥터를 ID 소스로 구성합니다. SCIM 프로토콜을 사용하여 사용자 및 그룹의 자동 프로비저닝을 구성합니다.` },
    { k:'D', en:`Configure an external IdP as an identity source. Configure automatic provisioning of users and groups by using the SAML protocol.`, ko:`외부 IdP를 ID 소스로 구성합니다. SAML 프로토콜을 사용하여 사용자 및 그룹의 자동 프로비저닝을 구성합니다.` },
  ],
  answer: ['A'],
  vote: '92% A',
  explain: `<p><span class="mark-ok">✅ A — 외부 IdP + SCIM 프로토콜</span></p><p>회사가 기존 SAML 2.0 IdP(Active Directory)를 가지고 있으므로, IAM Identity Center의 ID 소스로 외부 IdP를 구성합니다. SAML은 인증(SSO 로그인)에 사용되는 프로토콜이며, SCIM(System for Cross-domain Identity Management)은 IdP에서 IAM Identity Center로 사용자와 그룹을 자동으로 동기화(프로비저닝/디프로비저닝)하는 프로토콜입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — AWS Directory Service는 기존 외부 SAML IdP를 사용하는 시나리오에 맞지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — AD Connector는 온프레미스 AD와 AWS AD를 연결하는 서비스이며, 이 시나리오와 다릅니다.</p>
<p><span class="mark-no">❌ D</span> — SAML은 인증 프로토콜이지 사용자 프로비저닝 프로토콜이 아닙니다. 사용자/그룹 자동 동기화에는 SCIM이 필요합니다.</p>`,
  disc: [{ ans:'A (92%)', txt:'핵심 구분: SAML = 인증(로그인), SCIM = 프로비저닝(계정 생성/삭제/동기화). 외부 IdP(AD + SAML) → Identity Center 연동 시 사용자/그룹 동기화는 SCIM 필수.' }]
},
{
  n: 133,
  en: `A company is using AWS to run digital workloads. Each application team in the company has its own AWS account for application hosting. The accounts are consolidated in an organization in AWS Organizations.<br><br>The company wants to enforce security standards across the entire organization. To avoid noncompliance because of security misconfiguration, the company has enforced the use of AWS CloudFormation. A production support team can modify resources in the production environment by using the AWS Management Console to troubleshoot and resolve application-related issues.<br><br>A DevOps engineer must implement a solution to identify in near real time any AWS service misconfiguration that results in noncompliance. The solution must automatically remediate the issue within 15 minutes of identification. The solution also must track noncompliant resources and events in a centralized dashboard with accurate timestamps.<br><br>Which solution will meet these requirements with the LEAST development overhead?`,
  ko: `한 회사가 AWS를 사용하여 디지털 워크로드를 실행하고 있습니다. 각 애플리케이션 팀은 자체 AWS 계정을 가지고 있으며 AWS Organizations에 통합되어 있습니다.<br><br>이 회사는 전체 조직에서 보안 표준을 시행하고 CloudFormation 사용을 강제합니다. 프로덕션 지원 팀은 콘솔을 통해 리소스를 수정할 수 있습니다.<br><br>DevOps 엔지니어는 보안 오류 구성을 거의 실시간으로 식별하고 15분 이내에 자동 수정하며 중앙 대시보드에서 추적하는 솔루션을 구현해야 합니다. 가장 적은 개발 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use CloudFormation drift detection to identify noncompliant resources. Use drift detection events from CloudFormation to invoke an AWS Lambda function for remediation. Configure the Lambda function to publish logs to an Amazon CloudWatch Logs log group. Configure an Amazon CloudWatch dashboard to use the log group for tracking.`, ko:`CloudFormation 드리프트 감지를 사용하여 비준수 리소스를 식별합니다. CloudFormation의 드리프트 감지 이벤트를 사용하여 수정을 위해 Lambda 함수를 호출합니다. Lambda 함수를 구성하여 CloudWatch Logs 로그 그룹에 로그를 게시합니다. CloudWatch 대시보드를 구성하여 추적합니다.` },
    { k:'B', en:`Turn on AWS CloudTrail in the AWS accounts. Analyze CloudTrail logs by using Amazon Athena to identify noncompliant resources. Use AWS Step Functions to track query results on Athena for drift detection and to invoke an AWS Lambda function for remediation. For tracking, set up an Amazon QuickSight dashboard that uses Athena as the data source.`, ko:`AWS 계정에서 AWS CloudTrail을 켭니다. Amazon Athena를 사용하여 CloudTrail 로그를 분석하여 비준수 리소스를 식별합니다. AWS Step Functions를 사용하여 Athena에서 드리프트 감지를 위한 쿼리 결과를 추적하고 Lambda 함수를 호출하여 수정합니다. 추적을 위해 Athena를 데이터 소스로 사용하는 Amazon QuickSight 대시보드를 설정합니다.` },
    { k:'C', en:`Turn on the configuration recorder in AWS Config in all the AWS accounts to identify noncompliant resources. Enable AWS Security Hub with the --no-enable-default-standards option in all the AWS accounts. Set up AWS Config managed rules and custom rules. Set up automatic remediation by using AWS Config conformance packs. For tracking, set up a dashboard on Security Hub in a designated Security Hub administrator account.`, ko:`모든 AWS 계정에서 AWS Config의 구성 레코더를 켜서 비준수 리소스를 식별합니다. 모든 AWS 계정에서 --no-enable-default-standards 옵션으로 AWS Security Hub를 활성화합니다. AWS Config 관리 규칙과 사용자 지정 규칙을 설정합니다. AWS Config 적합성 팩을 사용하여 자동 수정을 설정합니다. 추적을 위해 지정된 Security Hub 관리자 계정에서 Security Hub에 대시보드를 설정합니다.` },
    { k:'D', en:`Turn on AWS CloudTrail in the AWS accounts. Analyze CloudTrail logs by using Amazon CloudWatch Logs to identify noncompliant resources. Use CloudWatch Logs filters for drift detection. Use Amazon EventBridge to invoke the Lambda function for remediation. Stream filtered CloudWatch logs to Amazon OpenSearch Service. Set up a dashboard on OpenSearch Service for tracking.`, ko:`AWS 계정에서 AWS CloudTrail을 켭니다. CloudWatch Logs를 사용하여 CloudTrail 로그를 분석하여 규정을 준수하지 않는 리소스를 식별합니다. CloudWatch Logs 필터를 사용하여 드리프트를 감지합니다. Amazon EventBridge를 사용하여 수정을 위해 Lambda 함수를 호출합니다. 필터링된 CloudWatch 로그를 Amazon OpenSearch Service로 스트리밍합니다. 추적을 위해 OpenSearch Service에 대시보드를 설정합니다.` },
  ],
  answer: ['C'],
  vote: '89% C',
  explain: `<p><span class="mark-ok">✅ C — AWS Config + Security Hub + 자동 수정</span></p><p>AWS Config는 리소스 구성을 지속적으로 평가하는 관리형 서비스입니다. 관리형 규칙과 사용자 지정 규칙으로 보안 오류 구성을 거의 실시간으로 감지하고, 적합성 팩(Conformance Pack)을 통해 자동 수정을 설정할 수 있습니다. Security Hub는 모든 계정의 발견 사항을 중앙 대시보드에서 타임스탬프와 함께 추적합니다. 이 모든 것이 최소한의 개발 오버헤드로 AWS 네이티브 서비스를 활용합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudFormation 드리프트 감지는 스케줄 기반이며 근실시간이 아닙니다. Lambda 개발도 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — CloudTrail + Athena + Step Functions + QuickSight는 매우 복잡하고 개발 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudTrail + CloudWatch + OpenSearch도 복잡한 구성이 필요합니다.</p>`,
  disc: [{ ans:'C (89%)', txt:'규정 준수 + 자동 수정 + 중앙 대시보드 = Config + Security Hub. 최소 개발 오버헤드: 관리형 서비스만 사용, 커스텀 Lambda 코드 최소화. Config 적합성 팩으로 SSM Automation 자동 수정 트리거.' }]
},
{
  n: 134,
  en: `A company uses AWS Organizations to manage its AWS accounts. The organization root has an OU that is named Environments. The Environments OU has two child OUs that are named Development and Production, respectively.<br><br>The Environments OU and the child OUs have the default FullAWSAccess policy in place. A DevOps engineer plans to remove the FullAWSAccess policy from the Development OU and replace the policy with a policy that allows all actions on Amazon EC2 resources.<br><br>What will be the outcome of this policy replacement?`,
  ko: `한 회사에서 AWS Organizations를 사용하여 AWS 계정을 관리합니다. 조직 루트에는 Environments라는 OU가 있습니다. Environments OU에는 각각 Development와 Production이라는 두 개의 자식 OU가 있습니다.<br><br>Environments OU와 자식 OU에는 기본 FullAWSAccess 정책이 있습니다. DevOps 엔지니어는 Development OU에서 FullAWSAccess 정책을 제거하고 Amazon EC2 리소스에서 모든 작업을 허용하는 정책으로 대체할 계획입니다.<br><br>이 정책 대체의 결과는 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`All users in the Development OU will be allowed all API actions on all resources.`, ko:`개발 OU의 모든 사용자는 모든 리소스에 대한 모든 API 작업이 허용됩니다.` },
    { k:'B', en:`All users in the Development OU will be allowed all API actions on EC2 resources. All other API actions will be denied.`, ko:`개발 OU의 모든 사용자는 EC2 리소스에서 모든 API 작업이 허용됩니다. 다른 모든 API 작업은 거부됩니다.` },
    { k:'C', en:`All users in the Development OU will be denied all API actions on all resources.`, ko:`개발 OU의 모든 사용자는 모든 리소스에 대한 모든 API 작업이 거부됩니다.` },
    { k:'D', en:`All users in the Development OU will be denied all API actions on EC2 resources. All other API actions will be allowed.`, ko:`개발 OU의 모든 사용자는 EC2 리소스에서 모든 API 작업이 거부됩니다. 다른 모든 API 작업은 허용됩니다.` },
  ],
  answer: ['B'],
  vote: '80% B',
  explain: `<p><span class="mark-ok">✅ B — EC2만 허용, 나머지 거부</span></p><p>SCP 허용 목록(Allow-list) 전략에서 핵심: 특정 OU에 허용 정책을 적용하면, 해당 OU는 부모 OU의 허용 정책을 상속받지 않고 자체 허용 정책만 적용됩니다. Development OU에 EC2만 허용하는 SCP를 적용하면, Environments OU의 FullAWSAccess는 Development OU에 더 이상 적용되지 않습니다. 결과적으로 EC2 작업만 허용되고 다른 모든 작업은 암묵적으로 거부됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 자식 OU에 새로운 허용 정책을 설정하면, 부모의 FullAWSAccess가 상속되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — EC2 허용 정책이 있으므로 EC2 작업은 허용됩니다.</p>
<p><span class="mark-no">❌ D</span> — 정책에 EC2를 허용한다고 명시되어 있으므로 EC2가 거부되지 않습니다.</p>`,
  disc: [{ ans:'B (80%) vs A (20%)', txt:'SCP 허용 목록 상속 규칙: 자식 OU에 허용 정책이 있으면 부모의 허용 정책이 자동 상속되지 않음. 개발자가 직접 테스트로 확인 — EC2 제외 모든 API 거부됨.' }]
},
{
  n: 135,
  en: `A company is examining its disaster recovery capability and wants the ability to switch over its daily operations to a secondary AWS Region. The company uses AWS CodeCommit as a source control tool in the primary Region.<br><br>A DevOps engineer must provide the capability for the company to develop code in the secondary Region. If the company needs to use the secondary Region, developers can add an additional remote URL to their local Git configuration.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 재해 복구 기능을 검토하고 있으며 일상적인 운영을 보조 AWS 리전으로 전환할 수 있는 기능을 원합니다. 이 회사는 기본 리전에서 AWS CodeCommit을 소스 제어 도구로 사용합니다.<br><br>DevOps 엔지니어는 회사가 보조 리전에서 코드를 개발할 수 있는 기능을 제공해야 합니다. 회사가 보조 리전을 사용해야 하는 경우 개발자는 로컬 Git 구성에 추가 원격 URL을 추가할 수 있습니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a CodeCommit repository in the secondary Region. Create an AWS CodeBuild project to perform a Git mirror operation of the primary Region's CodeCommit repository to the secondary Region's CodeCommit repository. Create an AWS Lambda function that invokes the CodeBuild project. Create an Amazon EventBridge rule that reacts to merge events in the primary Region's CodeCommit repository. Configure the EventBridge rule to invoke the Lambda function.`, ko:`보조 리전에 CodeCommit 리포지토리를 만듭니다. AWS CodeBuild 프로젝트를 만들어 기본 리전의 CodeCommit 리포지토리를 보조 리전의 CodeCommit 리포지토리로 Git 미러링 작업을 수행합니다. CodeBuild 프로젝트를 호출하는 AWS Lambda 함수를 만듭니다. 기본 리전의 CodeCommit 리포지토리에서 병합 이벤트에 반응하는 Amazon EventBridge 규칙을 만듭니다. Lambda 함수를 호출하도록 EventBridge 규칙을 구성합니다.` },
    { k:'B', en:`Create an Amazon S3 bucket in the secondary Region. Create an AWS Fargate task to perform a Git mirror operation of the primary Region's CodeCommit repository and copy the result to the S3 bucket. Create an AWS Lambda function that initiates the Fargate task. Create an Amazon EventBridge rule that reacts to merge events in the CodeCommit repository. Configure the EventBridge rule to invoke the Lambda function.`, ko:`보조 리전에 Amazon S3 버킷을 만듭니다. AWS Fargate 작업을 만들어 기본 리전의 CodeCommit 리포지토리의 Git 미러 작업을 수행하고 결과를 S3 버킷에 복사합니다. Fargate 작업을 시작하는 Lambda 함수를 만듭니다. CodeCommit 리포지토리의 병합 이벤트에 반응하는 EventBridge 규칙을 만듭니다.` },
    { k:'C', en:`Create an AWS CodeArtifact repository in the secondary Region. Create an AWS CodePipeline pipeline that uses the primary Region's CodeCommit repository for the source action. Create a cross-Region stage in the pipeline that packages the CodeCommit repository contents and stores the contents in the CodeArtifact repository when a pull request is merged into the CodeCommit repository.`, ko:`보조 리전에 AWS CodeArtifact 리포지토리를 만듭니다. 기본 리전의 CodeCommit 리포지토리를 소스 작업으로 사용하는 AWS CodePipeline 파이프라인을 만듭니다. 풀 요청이 CodeCommit 리포지토리에 병합될 때 CodeCommit 리포지토리 콘텐츠를 패키징하고 CodeArtifact 리포지토리에 저장하는 크로스 리전 단계를 만듭니다.` },
    { k:'D', en:`Create an AWS Cloud9 environment and a CodeCommit repository in the secondary Region. Configure the primary Region's CodeCommit repository as a remote repository in the AWS Cloud9 environment. Connect the secondary Region's CodeCommit repository to the AWS Cloud9 environment.`, ko:`AWS Cloud9 환경과 보조 리전에 CodeCommit 리포지토리를 만듭니다. AWS Cloud9 환경에서 기본 리전의 CodeCommit 리포지토리를 원격 리포지토리로 구성합니다. 보조 리전의 CodeCommit 리포지토리를 AWS Cloud9 환경에 연결합니다.` },
  ],
  answer: ['A'],
  vote: '87% A',
  explain: `<p><span class="mark-ok">✅ A — 보조 리전 CodeCommit + CodeBuild Git 미러링 + EventBridge</span></p><p>개발자가 보조 리전의 CodeCommit 리포지토리를 Git remote로 추가하려면 보조 리전에 완전한 Git 리포지토리가 있어야 합니다. CodeBuild를 사용한 Git 미러링으로 기본 리전 리포지토리를 보조 리전 CodeCommit에 동기화합니다. EventBridge가 병합 이벤트를 감지하여 자동으로 동기화를 트리거합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — S3 버킷은 Git 원격 URL로 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — CodeArtifact는 패키지 저장소이며 소스 코드 개발 리포지토리가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — Cloud9는 개발 환경(IDE)이며 리포지토리 미러링 솔루션이 아닙니다.</p>`,
  disc: [{ ans:'A (87%)', txt:'DR용 CodeCommit 복제: CodeBuild git mirror + EventBridge 트리거가 표준 패턴. S3는 Git remote 불가.' }]
},
{
  n: 136,
  en: `A DevOps team is merging code revisions for an application that uses an Amazon RDS Multi-AZ DB cluster for its production database. The DevOps team uses continuous integration to periodically verify that the application works. The DevOps team needs to test the changes before the changes are deployed to the production database.<br><br>Which solution will meet these requirements?`,
  ko: `DevOps 팀은 프로덕션 데이터베이스에 Amazon RDS Multi-AZ DB 클러스터를 사용하는 애플리케이션의 코드 개정을 병합하고 있습니다. DevOps 팀은 지속적인 통합을 사용하여 애플리케이션이 작동하는지 주기적으로 확인합니다. DevOps 팀은 프로덕션 데이터베이스에 변경 사항을 배포하기 전에 변경 사항을 테스트해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use a buildspec file in AWS CodeBuild to restore the DB cluster from a snapshot of the production database, run integration tests, and drop the restored database after verification.`, ko:`AWS CodeBuild의 buildspec 파일을 사용하여 프로덕션 데이터베이스의 스냅샷에서 DB 클러스터를 복원하고 통합 테스트를 실행한 후 확인 후 복원된 데이터베이스를 삭제합니다.` },
    { k:'B', en:`Deploy the application to production. Configure an audit log of data control language (DCL) operations to capture database activities to perform if verification fails.`, ko:`애플리케이션을 프로덕션에 배포합니다. 검증이 실패할 경우 수행할 데이터베이스 활동을 캡처하기 위해 DCL 작업의 감사 로그를 구성합니다.` },
    { k:'C', en:`Create a snapshot of the DB cluster before deploying the application. Use the Update requires:Replacement property on the DB instance in AWS CloudFormation to deploy the application and apply the changes.`, ko:`애플리케이션을 배포하기 전에 DB 클러스터의 스냅샷을 만듭니다. AWS CloudFormation의 DB 인스턴스에서 Update requires:Replacement 속성을 사용하여 애플리케이션을 배포하고 변경 사항을 적용합니다.` },
    { k:'D', en:`Ensure that the DB cluster is a Multi-AZ deployment. Deploy the application with the updates. Fail over to the standby instance if verification fails.`, ko:`DB 클러스터가 Multi-AZ 배포인지 확인합니다. 업데이트와 함께 애플리케이션을 배포합니다. 검증이 실패하면 대기 인스턴스로 페일오버합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — CodeBuild buildspec에서 스냅샷 복원 → 테스트 → 삭제</span></p><p>프로덕션 DB 변경 전에 테스트하려면 프로덕션 DB 스냅샷에서 임시 복제본을 생성하고 해당 복제본에서 통합 테스트를 실행한 후 삭제하는 것이 가장 안전한 방법입니다. AWS 블로그에서 이 패턴(CodeBuild + RDS snapshot CI)을 공식 권장합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B, C, D</span> — 모두 프로덕션에 먼저 배포한 후 문제를 처리하는 방식으로, 배포 전 테스트라는 요구사항을 충족하지 못합니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'DB 변경 CI 패턴: 스냅샷 복원 → 테스트 → 삭제. AWS 공식 블로그 권장 패턴.' }]
},
{
  n: 137,
  en: `A company manages a multi-tenant environment in its VPC and has configured Amazon GuardDuty for the corresponding AWS account. The company sends all GuardDuty findings to AWS Security Hub.<br><br>Traffic from suspicious sources is generating a large number of findings. A DevOps engineer needs to implement a solution to automatically deny traffic across the entire VPC when GuardDuty discovers a new suspicious source.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 VPC에서 멀티 테넌트 환경을 관리하고 해당 AWS 계정에 대해 Amazon GuardDuty를 구성했습니다. 이 회사는 모든 GuardDuty 결과를 AWS Security Hub로 보냅니다.<br><br>의심스러운 출처의 트래픽이 많은 수의 결과를 생성합니다. DevOps 엔지니어는 GuardDuty가 새로운 의심스러운 출처를 발견하면 전체 VPC에서 트래픽을 자동으로 거부하는 솔루션을 구현해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a GuardDuty threat list. Configure GuardDuty to reference the list. Create an AWS Lambda function that will update the threat list. Configure the Lambda function to run in response to new Security Hub findings that come from GuardDuty.`, ko:`GuardDuty 위협 목록을 만듭니다. GuardDuty가 목록을 참조하도록 구성합니다. 위협 목록을 업데이트하는 Lambda 함수를 만듭니다. GuardDuty에서 나오는 새로운 Security Hub 결과에 응답하여 실행되도록 Lambda 함수를 구성합니다.` },
    { k:'B', en:`Configure an AWS WAF web ACL that includes a custom rule group. Create an AWS Lambda function that will create a block rule in the custom rule group. Configure the Lambda function to run in response to new Security Hub findings that come from GuardDuty.`, ko:`사용자 지정 규칙 그룹을 포함하는 AWS WAF 웹 ACL을 구성합니다. 사용자 지정 규칙 그룹에서 차단 규칙을 만드는 Lambda 함수를 만듭니다. GuardDuty에서 나오는 새로운 Security Hub 결과에 응답하여 실행되도록 Lambda 함수를 구성합니다.` },
    { k:'C', en:`Configure a firewall in AWS Network Firewall. Create an AWS Lambda function that will create a Drop action rule in the firewall policy. Configure the Lambda function to run in response to new Security Hub findings that come from GuardDuty.`, ko:`AWS Network Firewall에서 방화벽을 구성합니다. 방화벽 정책에서 Drop 작업 규칙을 만드는 Lambda 함수를 만듭니다. GuardDuty에서 나오는 새로운 Security Hub 결과에 응답하여 실행되도록 Lambda 함수를 구성합니다.` },
    { k:'D', en:`Create an AWS Lambda function that will create a GuardDuty suppression rule. Configure the Lambda function to run in response to new Security Hub findings that come from GuardDuty.`, ko:`GuardDuty 억제 규칙을 생성하는 Lambda 함수를 만듭니다. GuardDuty에서 나오는 새로운 Security Hub 결과에 대한 응답으로 실행되도록 Lambda 함수를 구성합니다.` },
  ],
  answer: ['C'],
  vote: '92% C',
  explain: `<p><span class="mark-ok">✅ C — AWS Network Firewall + Drop 규칙 + Lambda</span></p><p>"전체 VPC에서 트래픽 거부"는 네트워크 계층 차단을 의미합니다. AWS Network Firewall은 VPC 수준에서 stateful/stateless 트래픽을 필터링하는 관리형 서비스입니다. GuardDuty에서 Security Hub 결과가 발생하면 Lambda 함수가 자동으로 방화벽 정책에 Drop 규칙을 추가합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 위협 목록을 업데이트해도 트래픽이 자동으로 차단되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — AWS WAF는 HTTP/HTTPS 웹 트래픽만 처리하며, 전체 VPC 트래픽 차단에는 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 억제 규칙은 결과 알림을 숨기는 것이며, 트래픽을 차단하지 않습니다.</p>`,
  disc: [{ ans:'C (92%)', txt:'VPC 전체 트래픽 차단 = Network Firewall(네트워크 계층). WAF = HTTP만 처리. AWS 블로그에서 GuardDuty + Network Firewall 자동 차단 패턴 공식 소개.' }]
},
{
  n: 138,
  en: `A company uses AWS Secrets Manager to store a set of sensitive API keys that an AWS Lambda function uses. When the Lambda function is invoked the Lambda function retrieves the API keys and makes an API call to an external service. The Secrets Manager secret is encrypted with the default AWS Key Management Service (AWS KMS) key.<br><br>A DevOps engineer needs to update the infrastructure to ensure that only the Lambda function's execution role can access the values in Secrets Manager. The solution must apply the principle of least privilege.<br><br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `한 회사에서 AWS Secrets Manager를 사용하여 AWS Lambda 함수가 사용하는 민감한 API 키 세트를 저장합니다. Lambda 함수가 호출되면 API 키를 검색하고 외부 서비스에 API 호출을 합니다. Secrets Manager 비밀은 기본 AWS KMS 키로 암호화됩니다.<br><br>DevOps 엔지니어는 Lambda 함수의 실행 역할만 Secrets Manager의 값에 액세스할 수 있도록 인프라를 업데이트해야 합니다. 솔루션은 최소 권한의 원칙을 적용해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Update the default KMS key for Secrets Manager to allow only the Lambda function's execution role to decrypt.`, ko:`Secrets Manager의 기본 KMS 키를 업데이트하여 Lambda 함수의 실행 역할만 암호를 해독할 수 있도록 합니다.` },
    { k:'B', en:`Create a KMS customer managed key that trusts Secrets Manager and allows the Lambda function's execution role to decrypt. Update Secrets Manager to use the new customer managed key.`, ko:`Secrets Manager를 신뢰하고 Lambda 함수의 실행 역할이 암호를 해독할 수 있도록 하는 KMS 고객 관리 키를 만듭니다. Secrets Manager를 업데이트하여 새 고객 관리 키를 사용합니다.` },
    { k:'C', en:`Create a KMS customer managed key that trusts Secrets Manager and allows the account's root principal to decrypt. Update Secrets Manager to use the new customer managed key.`, ko:`Secrets Manager를 신뢰하고 계정의 루트 주체가 암호를 해독할 수 있도록 하는 KMS 고객 관리 키를 만듭니다. Secrets Manager를 업데이트하여 새 고객 관리 키를 사용합니다.` },
    { k:'D', en:`Ensure that the Lambda function's execution role has the KMS permissions scoped on the resource level. Configure the permissions so that the KMS key can encrypt the Secrets Manager secret.`, ko:`Lambda 함수의 실행 역할에 리소스 수준에서 범위가 지정된 KMS 권한이 있는지 확인합니다. KMS 키가 Secrets Manager 비밀을 암호화할 수 있도록 권한을 구성합니다.` },
    { k:'E', en:`Remove all KMS permissions from the Lambda function's execution role.`, ko:`Lambda 함수 실행 역할에서 모든 KMS 권한을 제거합니다.` },
  ],
  answer: ['B','D'],
  vote: '95% BD',
  explain: `<p><span class="mark-ok">✅ B — 고객 관리 KMS 키 생성 + Lambda 역할에 복호화 권한</span></p><p>기본 KMS 키(AWS 관리 키)는 수정할 수 없습니다. 고객 관리 키(CMK)를 생성하면 키 정책을 통해 Lambda 실행 역할만 복호화할 수 있도록 세밀한 제어가 가능합니다.</p>
<p><span class="mark-ok">✅ D — Lambda 실행 역할에 리소스 수준 KMS 권한 부여</span></p><p>Lambda 실행 역할에 특정 KMS 키 ARN을 대상으로 하는 kms:Decrypt 권한을 추가하면 최소 권한 원칙을 준수하면서 비밀에 접근할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 기본 KMS 키(AWS 관리 키)는 키 정책을 수정할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 루트 주체에게 복호화 권한을 부여하는 것은 최소 권한 원칙에 위배됩니다.</p>
<p><span class="mark-no">❌ E</span> — KMS 권한을 완전히 제거하면 Lambda 함수가 비밀을 복호화할 수 없습니다.</p>`,
  disc: [{ ans:'BD (95%)', txt:'AWS 관리 키 = 수정 불가. CMK = 키 정책으로 세밀한 접근 제어. Lambda 역할에 특정 KMS 키에 대한 kms:Decrypt만 부여 = 최소 권한.' }]
},
{
  n: 139,
  en: `A company's DevOps engineer is creating an AWS Lambda function to process notifications from an Amazon Simple Notification Service (Amazon SNS) topic. The Lambda function will process the notification messages and will write the contents of the notification messages to an Amazon RDS Multi-AZ DB instance.<br><br>During testing, a database administrator accidentally shut down the DB instance. While the database was down the company lost several of the SNS notification messages that were delivered during that time.<br><br>The DevOps engineer needs to prevent the loss of notification messages in the future.<br><br>Which solutions will meet this requirement? (Choose two.)`,
  ko: `한 회사의 DevOps 엔지니어가 Amazon SNS 주제의 알림을 처리하는 AWS Lambda 함수를 만들고 있습니다. Lambda 함수는 알림 메시지를 처리하고 Amazon RDS Multi-AZ DB 인스턴스에 씁니다.<br><br>테스트 중에 데이터베이스 관리자가 실수로 DB 인스턴스를 종료했습니다. 데이터베이스가 다운된 동안 회사는 그 시간 동안 전달된 여러 SNS 알림 메시지를 잃었습니다.<br><br>DevOps 엔지니어는 앞으로 알림 메시지가 손실되는 것을 방지해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Replace the RDS Multi-AZ DB instance with an Amazon DynamoDB table.`, ko:`RDS Multi-AZ DB 인스턴스를 Amazon DynamoDB 테이블로 바꿉니다.` },
    { k:'B', en:`Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination of the Lambda function.`, ko:`Lambda 함수의 대상으로 Amazon SQS 대기열을 구성합니다.` },
    { k:'C', en:`Configure an Amazon Simple Queue Service (Amazon SQS) dead-letter queue for the SNS topic.`, ko:`SNS 주제에 대한 Amazon SQS 배달 못한 편지 대기열을 구성합니다.` },
    { k:'D', en:`Subscribe an Amazon Simple Queue Service (Amazon SQS) queue to the SNS topic. Configure the Lambda function to process messages from the SQS queue.`, ko:`Amazon SQS 대기열을 SNS 주제에 구독합니다. Lambda 함수를 구성하여 SQS 대기열의 메시지를 처리합니다.` },
    { k:'E', en:`Replace the SNS topic with an Amazon EventBridge event bus. Configure an EventBridge rule on the new event bus to invoke the Lambda function for each event.`, ko:`SNS 주제를 Amazon EventBridge 이벤트 버스로 바꿉니다. 각 이벤트에 대해 Lambda 함수를 호출하도록 새 이벤트 버스에서 EventBridge 규칙을 구성합니다.` },
  ],
  answer: ['C','D'],
  vote: '87% CD',
  explain: `<p><span class="mark-ok">✅ C — SNS 주제에 SQS DLQ 구성</span></p><p>SNS 주제에 SQS 배달 못한 편지 대기열(DLQ)을 구성하면 전달 실패 메시지를 보존할 수 있습니다.</p>
<p><span class="mark-ok">✅ D — SQS 대기열을 SNS에 구독 + Lambda가 SQS에서 처리</span></p><p>SNS → SQS → Lambda 패턴을 사용하면 DB가 다운된 동안 메시지가 SQS에 보존됩니다. Lambda 실행이 실패해도 메시지는 SQS에 유지됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — DynamoDB로 교체해도 SNS 메시지 버퍼링 아키텍처 문제는 해결되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Lambda 실패 대상(on-failure destination)으로 SQS를 설정하는 것만으로는 SNS → Lambda 직접 경로에서 메시지 보존이 완전하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — EventBridge로 교체해도 DB 다운 시 메시지 버퍼링 문제가 해결되지 않습니다.</p>`,
  disc: [{ ans:'CD (87%)', txt:'메시지 손실 방지: SNS → SQS(버퍼) → Lambda 패턴(D). SQS DLQ로 전달 실패 메시지 보존(C). SNS → Lambda 직접 연결은 메시지 버퍼링 없음.' }]
},
{
  n: 140,
  en: `A company has an application that runs on Amazon EC2 instances. The company uses an AWS CodePipeline pipeline to deploy the application into multiple AWS Regions. The pipeline is configured with a stage for each Region. Each stage contains an AWS CloudFormation action for each Region.<br><br>When the pipeline deploys the application to a Region, the company wants to confirm that the application is in a healthy state before the pipeline moves on to the next Region. Amazon Route 53 record sets are configured for the application in each Region. A DevOps engineer creates a Route 53 health check that is based on an Amazon CloudWatch alarm for each Region where the application is deployed.<br><br>What should the DevOps engineer do next to meet the requirements?`,
  ko: `한 회사에 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 이 회사는 AWS CodePipeline 파이프라인을 사용하여 애플리케이션을 여러 AWS 리전에 배포합니다. 파이프라인은 각 리전에 대한 스테이지로 구성됩니다. 각 스테이지에는 각 리전에 대한 CloudFormation 작업이 포함됩니다.<br><br>파이프라인이 리전에 배포할 때, 다음 리전으로 이동하기 전에 애플리케이션이 정상 상태인지 확인하려고 합니다. Amazon Route 53 레코드 세트는 각 리전의 애플리케이션에 대해 구성됩니다. DevOps 엔지니어는 각 리전에 대한 CloudWatch 알람을 기반으로 하는 Route 53 상태 확인을 만들었습니다.<br><br>요구 사항을 충족하기 위해 DevOps 엔지니어는 다음에 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS Step Functions workflow to check the state of the CloudWatch alarm. Configure the Step Functions workflow to exit with an error if the alarm is in the ALARM state. Create a new stage in the pipeline between each Region deployment stage. In each new stage, include an action to invoke the Step Functions workflow.`, ko:`CloudWatch 알람의 상태를 확인하기 위해 AWS Step Functions 워크플로를 만듭니다. 알람이 ALARM 상태인 경우 오류와 함께 종료되도록 Step Functions 워크플로를 구성합니다. 각 리전 배포 단계 사이의 파이프라인에 새 단계를 만듭니다. 각 새 단계에서 Step Functions 워크플로를 호출하는 작업을 포함합니다.` },
    { k:'B', en:`Configure an AWS CodeDeploy application to deploy a CloudFormation template with automatic rollback. Configure the CloudWatch alarm as the instance health check for the CodeDeploy application. Remove the CloudFormation actions from the pipeline. Create a CodeDeploy action in the pipeline stage for each Region.`, ko:`자동 롤백을 사용하여 CloudFormation 템플릿을 배포하도록 AWS CodeDeploy 애플리케이션을 구성합니다. CloudWatch 알람을 CodeDeploy 애플리케이션의 인스턴스 상태 검사로 구성합니다. 파이프라인에서 CloudFormation 작업을 제거합니다. 각 리전의 파이프라인 단계에서 CodeDeploy 작업을 만듭니다.` },
    { k:'C', en:`Create a new pipeline stage for each Region where the application is deployed. Configure a CloudWatch alarm action for the new stage to check the state of the CloudWatch alarm and to exit with an error if the alarm is in the ALARM state.`, ko:`애플리케이션이 배포된 각 리전에 대해 새 파이프라인 단계를 만듭니다. 새 단계에 대해 CloudWatch 알람 작업을 구성하여 CloudWatch 알람 상태를 확인하고 알람이 ALARM 상태인 경우 오류와 함께 종료합니다.` },
    { k:'D', en:`Configure the CloudWatch agent on the EC2 instances to report the application status to the Route 53 health check. Create a new pipeline stage for each Region where the application is deployed. Configure a CloudWatch alarm action to exit with an error if the CloudWatch alarm is in the ALARM state.`, ko:`EC2 인스턴스에서 CloudWatch 에이전트를 구성하여 Route 53 상태 검사에 애플리케이션 상태를 보고합니다. 애플리케이션이 배포된 각 리전에 대해 새 파이프라인 단계를 만듭니다. CloudWatch 알람이 ALARM 상태인 경우 오류와 함께 종료되도록 CloudWatch 알람 작업을 구성합니다.` },
  ],
  answer: ['A'],
  vote: '94% A',
  explain: `<p><span class="mark-ok">✅ A — Step Functions 워크플로 + 각 리전 배포 단계 사이 검사 단계</span></p><p>CodePipeline에는 "CloudWatch 알람 작업"이라는 내장 기능이 없습니다. 대신 Step Functions 워크플로를 CodePipeline 단계에서 호출하고, Step Functions에서 CloudWatch 알람 상태를 확인하여 ALARM 상태이면 오류로 종료(실패)하면 파이프라인이 중단되어 다음 리전으로 진행하지 않습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — CloudFormation 작업을 제거하고 CodeDeploy로 교체하는 것은 과도한 변경입니다.</p>
<p><span class="mark-no">❌ C, D</span> — CodePipeline에 "CloudWatch 알람 작업(CloudWatch alarm action)"은 존재하지 않습니다. Step Functions 또는 Lambda가 필요합니다.</p>`,
  disc: [{ ans:'A (94%)', txt:'CodePipeline에 CloudWatch alarm action 없음. Step Functions 작업이 FAILED 종료 시 파이프라인 단계 실패. CW 알람 → Route 53 헬스체크 이미 설정됨 → Step Functions로 상태 확인.' }]
}
];
