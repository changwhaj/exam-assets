window.QS_SET18 = [
{
  n: 171,
  en: `A company has an application and a CI/CD pipeline. The CI/CD pipeline consists of an AWS CodePipeline pipeline and an AWS CodeBuild project. The CodeBuild project runs tests against the application as part of the build process and outputs a test report. The company must keep the test reports for 90 days.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사에 애플리케이션과 CI/CD 파이프라인이 있습니다. CI/CD 파이프라인은 AWS CodePipeline 파이프라인과 AWS CodeBuild 프로젝트로 구성됩니다. CodeBuild 프로젝트는 빌드 프로세스의 일부로 애플리케이션에 대한 테스트를 실행하고 테스트 보고서를 출력합니다. 회사는 테스트 보고서를 90일 동안 보관해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Add a new stage in the CodePipeline pipeline after the stage that contains the CodeBuild project. Create an Amazon S3 bucket to store the reports. Configure an S3 deploy action type in the new CodePipeline stage with the appropriate path and format for the reports.`, ko:`CodeBuild 프로젝트가 포함된 단계 이후 CodePipeline 파이프라인에 새 단계를 추가합니다. 보고서를 저장할 Amazon S3 버킷을 생성합니다. 보고서에 적합한 경로와 형식으로 새 CodePipeline 단계에서 S3 배포 작업 유형을 구성합니다.` },
    { k:'B', en:`Add a report group in the CodeBuild project buildspec file with the appropriate path and format for the reports. Create an Amazon S3 bucket to store the reports. Configure an Amazon EventBridge rule that invokes an AWS Lambda function to copy the reports to the S3 bucket when a build is completed. Create an S3 Lifecycle rule to expire the objects after 90 days.`, ko:`CodeBuild 프로젝트 buildspec 파일에 보고서의 적절한 경로와 형식으로 보고서 그룹을 추가합니다. 보고서를 저장할 Amazon S3 버킷을 생성합니다. 빌드가 완료되면 보고서를 S3 버킷에 복사하기 위해 AWS Lambda 함수를 호출하는 Amazon EventBridge 규칙을 구성합니다. 90일 후 객체를 만료시키는 S3 수명 주기 규칙을 생성합니다.` },
    { k:'C', en:`Add a new stage in the CodePipeline pipeline. Configure a test action type with the appropriate path and format for the reports. Configure the report expiration time to be 90 days in the CodeBuild project buildspec file.`, ko:`CodePipeline 파이프라인에 새 단계를 추가합니다. 보고서에 적합한 경로와 형식으로 테스트 작업 유형을 구성합니다. CodeBuild 프로젝트 buildspec 파일에서 보고서 만료 시간을 90일로 구성합니다.` },
    { k:'D', en:`Add a report group in the CodeBuild project buildspec file with the appropriate path and format for the reports. Create an Amazon S3 bucket to store the reports. Configure the report group as an artifact in the CodeBuild project buildspec file. Configure the S3 bucket as the artifact destination. Set the object expiration to 90 days.`, ko:`CodeBuild 프로젝트 buildspec 파일에 보고서의 적절한 경로와 형식으로 보고서 그룹을 추가합니다. 보고서를 저장할 Amazon S3 버킷을 생성합니다. CodeBuild 프로젝트 buildspec 파일에서 보고서 그룹을 아티팩트로 구성합니다. S3 버킷을 아티팩트 대상으로 구성합니다. 객체 만료를 90일로 설정합니다.` },
  ],
  answer: ['B'],
  vote: '67% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>CodeBuild 테스트 보고서는 기본적으로 <strong>30일</strong>이 지나면 만료됩니다. 90일 동안 보관하려면 보고서를 S3 버킷으로 내보내야 합니다. buildspec의 <code>reports</code> 섹션에 보고서 그룹을 정의하고, EventBridge + Lambda로 빌드 완료 시 S3로 복사하며, S3 Lifecycle 규칙으로 90일 후 만료를 설정합니다. S3 Lifecycle 규칙만이 객체를 만료시킬 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CodePipeline S3 배포 작업은 보고서 그룹 개념과 무관하며 적절하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — buildspec에서 90일 만료 설정은 불가능합니다.</p>
<p><span class="mark-no">❌ D</span> — buildspec에서 보고서 그룹(<code>reports</code> 섹션)과 아티팩트(<code>artifacts</code> 섹션)는 별개입니다. 보고서 그룹을 아티팩트로 구성할 수 없습니다.</p>`,
  disc: [{ ans:'B (67%), D (33%)', txt:'커뮤니티 의견 분분. B: 보고서 그룹 + EventBridge + Lambda + S3 Lifecycle. D: 아티팩트 방식이지만 보고서 그룹은 아티팩트가 아님. B가 올바른 접근법.' }]
},
{
  n: 172,
  en: `A company uses an Amazon API Gateway regional REST API to host its application API. The REST API has a custom domain. The REST API's default endpoint is deactivated.<br><br>The company's internal teams consume the API. The company wants to use mutual TLS between the API and the internal teams as an additional layer of authentication.<br><br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `한 회사가 Amazon API Gateway 지역 REST API를 사용하여 애플리케이션 API를 호스팅합니다. REST API에는 사용자 지정 도메인이 있습니다. REST API의 기본 엔드포인트는 비활성화되어 있습니다.<br><br>회사의 내부 팀이 API를 사용합니다. 회사는 API와 내부 팀 간의 추가 인증 계층으로 상호 TLS를 사용하려고 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (두 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Use AWS Certificate Manager (ACM) to create a private certificate authority (CA). Provision a client certificate that is signed by the private CA.`, ko:`AWS Certificate Manager(ACM)를 사용하여 개인 인증 기관(CA)을 생성합니다. 개인 CA에서 서명한 클라이언트 인증서를 프로비저닝합니다.` },
    { k:'B', en:`Provision a client certificate that is signed by a public certificate authority (CA). Import the certificate into AWS Certificate Manager (ACM).`, ko:`공개 인증 기관(CA)에서 서명한 클라이언트 인증서를 프로비저닝합니다. 인증서를 AWS Certificate Manager(ACM)로 가져옵니다.` },
    { k:'C', en:`Upload the provisioned client certificate to an Amazon S3 bucket. Configure the API Gateway mutual TLS to use the client certificate that is stored in the S3 bucket as the trust store.`, ko:`프로비저닝된 클라이언트 인증서를 Amazon S3 버킷에 업로드합니다. S3 버킷에 저장된 클라이언트 인증서를 신뢰 저장소로 사용하도록 API Gateway 상호 TLS를 구성합니다.` },
    { k:'D', en:`Upload the provisioned client certificate private key to an Amazon S3 bucket. Configure the API Gateway mutual TLS to use the private key that is stored in the S3 bucket as the trust store.`, ko:`프로비저닝된 클라이언트 인증서 개인 키를 Amazon S3 버킷에 업로드합니다. S3 버킷에 저장된 개인 키를 신뢰 저장소로 사용하도록 API Gateway 상호 TLS를 구성합니다.` },
    { k:'E', en:`Upload the root private certificate authority (CA) certificate to an Amazon S3 bucket. Configure the API Gateway mutual TLS to use the private CA certificate that is stored in the S3 bucket as the trust store.`, ko:`루트 개인 인증 기관(CA) 인증서를 Amazon S3 버킷에 업로드합니다. S3 버킷에 저장된 개인 CA 인증서를 신뢰 저장소로 사용하도록 API Gateway 상호 TLS를 구성합니다.` },
  ],
  answer: ['A','E'],
  vote: '79% AE',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>내부 팀만을 위한 상호 TLS이므로 <strong>ACM Private CA</strong>를 사용하여 개인 CA를 생성하고 클라이언트 인증서를 서명하는 것이 적합합니다.</p>
<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p>API Gateway 상호 TLS의 <strong>신뢰 저장소(trust store)</strong>에는 개별 클라이언트 인증서가 아닌 <strong>루트 CA 인증서</strong>가 포함되어야 합니다. API Gateway는 CA 인증서를 사용하여 클라이언트가 제시하는 인증서를 검증합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 공개 CA는 내부 팀 전용 시나리오에 불필요합니다.</p>
<p><span class="mark-no">❌ C</span> — 신뢰 저장소에는 개별 클라이언트 인증서가 아닌 CA 인증서가 있어야 합니다.</p>
<p><span class="mark-no">❌ D</span> — 개인 키를 S3에 업로드하면 보안상 위험합니다. 신뢰 저장소에는 개인 키가 아닌 CA 인증서가 필요합니다.</p>`,
  disc: [{ ans:'AE (79%)', txt:'상호 TLS: ACM Private CA(A) + 루트 CA 인증서를 S3에 업로드하여 신뢰 저장소로 구성(E). AWS 공식 문서 기준.' }]
},
{
  n: 173,
  en: `A company uses AWS Directory Service for Microsoft Active Directory as its identity provider (IdP). The company requires all infrastructure to be defined and deployed by AWS CloudFormation.<br><br>A DevOps engineer needs to create a fleet of Windows-based Amazon EC2 instances to host an application. The DevOps engineer has created a CloudFormation template that contains an EC2 launch template, IAM role, EC2 security group, and EC2 Auto Scaling group. The DevOps engineer must implement a solution that joins all EC2 instances to the domain of the AWS Managed Microsoft AD directory.<br><br>Which solution will meet these requirements with the MOST operational efficiency?`,
  ko: `한 회사가 AWS Directory Service for Microsoft Active Directory를 ID 공급자(IdP)로 사용합니다. 회사는 모든 인프라를 AWS CloudFormation으로 정의하고 배포해야 합니다.<br><br>DevOps 엔지니어는 애플리케이션을 호스팅하기 위해 Windows 기반 Amazon EC2 인스턴스 플릿을 생성해야 합니다. DevOps 엔지니어는 EC2 시작 템플릿, IAM 역할, EC2 보안 그룹, EC2 Auto Scaling 그룹이 포함된 CloudFormation 템플릿을 생성했습니다. DevOps 엔지니어는 모든 EC2 인스턴스를 AWS Managed Microsoft AD 디렉터리의 도메인에 조인하는 솔루션을 구현해야 합니다.<br><br>가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`In the CloudFormation template, create an AWS::SSM::Document resource that joins the EC2 instance to the AWS Managed Microsoft AD domain by using the parameters for the existing directory. Update the launch template to include the SSMAssociation property to use the new SSM document. Attach the AmazonSSMManagedInstanceCore and AmazonSSMDirectoryServiceAccess AWS managed policies to the IAM role that the EC2 instances use.`, ko:`CloudFormation 템플릿에서 기존 디렉터리의 파라미터를 사용하여 EC2 인스턴스를 AWS Managed Microsoft AD 도메인에 조인하는 AWS::SSM::Document 리소스를 생성합니다. 새 SSM 문서를 사용하도록 시작 템플릿에 SSMAssociation 속성을 포함하도록 업데이트합니다. AmazonSSMManagedInstanceCore 및 AmazonSSMDirectoryServiceAccess AWS 관리형 정책을 EC2 인스턴스가 사용하는 IAM 역할에 연결합니다.` },
    { k:'B', en:`In the CloudFormation template, update the launch template to include specific tags that propagate on launch. Create an AWS::SSM::Association resource to associate the AWS-JoinDirectoryServiceDomain Automation runbook with the EC2 instances that have the specified tags. Define the required parameters to join the AWS Managed Microsoft AD directory. Attach the AmazonSSMManagedInstanceCore and AmazonSSMDirectoryServiceAccess AWS managed policies to the IAM role that the EC2 instances use.`, ko:`CloudFormation 템플릿에서 시작 시 전파되는 특정 태그를 포함하도록 시작 템플릿을 업데이트합니다. AWS-JoinDirectoryServiceDomain Automation 런북을 지정된 태그가 있는 EC2 인스턴스와 연결하는 AWS::SSM::Association 리소스를 생성합니다. AWS Managed Microsoft AD 디렉터리에 가입하는 데 필요한 파라미터를 정의합니다. AmazonSSMManagedInstanceCore 및 AmazonSSMDirectoryServiceAccess AWS 관리형 정책을 EC2 인스턴스가 사용하는 IAM 역할에 연결합니다.` },
    { k:'C', en:`Store the existing AWS Managed Microsoft AD domain connection details in AWS Secrets Manager. In the CloudFormation template, create an AWS::SSM::Association resource to associate the AWS-CreateManagedWindowsInstanceWithApproval Automation runbook with the EC2 Auto Scaling group. Pass the ARNs for the parameters from Secrets Manager to join the domain. Attach the AmazonSSMDirectoryServiceAccess and SecretsManagerReadWrite AWS managed policies to the IAM role that the EC2 instances use.`, ko:`기존 AWS Managed Microsoft AD 도메인 연결 세부 정보를 AWS Secrets Manager에 저장합니다. CloudFormation 템플릿에서 AWS-CreateManagedWindowsInstanceWithApproval Automation 런북을 EC2 Auto Scaling 그룹과 연결하는 AWS::SSM::Association 리소스를 생성합니다. 도메인에 가입하기 위해 Secrets Manager의 파라미터에 대한 ARN을 전달합니다. AmazonSSMDirectoryServiceAccess 및 SecretsManagerReadWrite AWS 관리형 정책을 EC2 인스턴스가 사용하는 IAM 역할에 연결합니다.` },
    { k:'D', en:`Store the existing AWS Managed Microsoft AD domain administrator credentials in AWS Secrets Manager. In the CloudFormation template, update the EC2 launch template to include user data. Configure the user data to pull the administrator credentials from Secrets Manager and to join the AWS Managed Microsoft AD domain. Attach the AmazonSSMManagedInstanceCore and SecretsManagerReadWrite AWS managed policies to the IAM role that the EC2 instances use.`, ko:`기존 AWS Managed Microsoft AD 도메인 관리자 자격 증명을 AWS Secrets Manager에 저장합니다. CloudFormation 템플릿에서 사용자 데이터를 포함하도록 EC2 시작 템플릿을 업데이트합니다. Secrets Manager에서 관리자 자격 증명을 가져와 AWS Managed Microsoft AD 도메인에 가입하도록 사용자 데이터를 구성합니다. AmazonSSMManagedInstanceCore 및 SecretsManagerReadWrite AWS 관리형 정책을 EC2 인스턴스가 사용하는 IAM 역할에 연결합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>EC2 인스턴스를 AWS Managed Microsoft AD에 도메인 조인하는 표준 패턴입니다. <strong>AWS-JoinDirectoryServiceDomain</strong> Automation 런북은 이 목적을 위해 설계된 AWS 제공 런북입니다. <code>AWS::SSM::Association</code>으로 태그 기반으로 인스턴스와 연결하고, 필요한 IAM 정책(AmazonSSMManagedInstanceCore + AmazonSSMDirectoryServiceAccess)을 연결합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 사용자 지정 SSM 문서를 만드는 것은 AWS-JoinDirectoryServiceDomain 런북을 사용하는 것보다 운영 효율성이 낮습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS-CreateManagedWindowsInstanceWithApproval은 도메인 조인이 아닌 Windows 인스턴스 생성을 위한 런북입니다.</p>
<p><span class="mark-no">❌ D</span> — 사용자 데이터로 도메인 가입을 처리하는 것은 SSM Automation보다 운영 효율성이 낮습니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'AWS-JoinDirectoryServiceDomain 런북 + SSM Association + 태그 기반 연결 + 올바른 IAM 정책이 표준 패턴.' }]
},
{
  n: 174,
  en: `A company uses AWS Organizations to manage its AWS accounts. The company has a root OU that has a child OU. The root OU has an SCP that allows all actions on all resources. The child OU has an SCP that allows all actions for Amazon DynamoDB and AWS Lambda, and denies all other actions.<br><br>The company has an AWS account that is named vendor-data in the child OU. A DevOps engineer has an IAM user that is attached to the Administrator Access IAM policy in the vendor-data account. The DevOps engineer attempts to launch an Amazon EC2 instance in the vendor-data account but receives an access denied error.<br><br>Which change should the DevOps engineer make to launch the EC2 instance in the vendor-data account?`,
  ko: `한 회사가 AWS Organizations를 사용하여 AWS 계정을 관리합니다. 회사에는 자식 OU가 있는 루트 OU가 있습니다. 루트 OU에는 모든 리소스에 대한 모든 작업을 허용하는 SCP가 있습니다. 자식 OU에는 Amazon DynamoDB 및 AWS Lambda에 대한 모든 작업을 허용하고 다른 모든 작업을 거부하는 SCP가 있습니다.<br><br>회사에는 자식 OU에 vendor-data라는 이름의 AWS 계정이 있습니다. DevOps 엔지니어는 vendor-data 계정의 Administrator Access IAM 정책에 연결된 IAM 사용자가 있습니다. DevOps 엔지니어가 vendor-data 계정에서 Amazon EC2 인스턴스를 시작하려고 하지만 액세스 거부 오류가 발생합니다.<br><br>DevOps 엔지니어가 vendor-data 계정에서 EC2 인스턴스를 시작하기 위해 어떤 변경을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Attach the AmazonEC2FullAccess IAM policy to the IAM user.`, ko:`AmazonEC2FullAccess IAM 정책을 IAM 사용자에게 연결합니다.` },
    { k:'B', en:`Create a new SCP that allows all actions for Amazon EC2. Attach the SCP to the vendor-data account.`, ko:`Amazon EC2에 대한 모든 작업을 허용하는 새 SCP를 생성합니다. SCP를 vendor-data 계정에 연결합니다.` },
    { k:'C', en:`Update the SCP in the child OU to allow all actions for Amazon EC2.`, ko:`Amazon EC2에 대한 모든 작업을 허용하도록 자식 OU의 SCP를 업데이트합니다.` },
    { k:'D', en:`Create a new SCP that allows all actions for Amazon EC2. Attach the SCP to the root OU.`, ko:`Amazon EC2에 대한 모든 작업을 허용하는 새 SCP를 생성합니다. SCP를 루트 OU에 연결합니다.` },
  ],
  answer: ['C'],
  vote: '74% C',
  explain: `<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p>자식 OU의 SCP가 DynamoDB와 Lambda만 허용하고 <strong>모든 다른 작업을 거부</strong>합니다. SCP의 거부는 IAM 정책의 허용보다 우선합니다. 따라서 Administrator Access IAM 정책이 있어도 SCP에 의해 EC2 작업이 차단됩니다. 해결책은 자식 OU의 SCP를 업데이트하여 EC2 작업도 허용하는 것입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — IAM 정책 수정으로는 SCP의 명시적 거부를 극복할 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — SCP는 계정에도 연결할 수 있지만, 자식 OU의 SCP가 EC2를 명시적으로 거부하므로 해당 거부가 계정 수준의 허용보다 우선합니다.</p>
<p><span class="mark-no">❌ D</span> — 루트 OU는 이미 모든 작업을 허용하는 SCP가 있으므로 변경해도 효과가 없습니다.</p>`,
  disc: [{ ans:'C (74%), B (26%)', txt:'SCP 거부는 IAM 허용보다 우선. 자식 OU SCP를 EC2 허용으로 업데이트(C)가 정답. B도 가능하나 거부 SCP가 상위에 있으면 효과 없음.' }]
},
{
  n: 175,
  en: `A company's security policies require the use of security hardened AMIs in production environments. A DevOps engineer has used EC2 Image Builder to create a pipeline that builds the AMIs on a recurring schedule.<br><br>The DevOps engineer needs to update the launch templates of the company's Auto Scaling groups. The Auto Scaling groups must use the newest AMIs during the launch of Amazon EC2 instances.<br><br>Which solution will meet these requirements with the MOST operational efficiency?`,
  ko: `회사의 보안 정책은 프로덕션 환경에서 보안 강화 AMI를 사용해야 합니다. DevOps 엔지니어가 EC2 Image Builder를 사용하여 반복 일정에 따라 AMI를 빌드하는 파이프라인을 생성했습니다.<br><br>DevOps 엔지니어는 회사의 Auto Scaling 그룹의 시작 템플릿을 업데이트해야 합니다. Auto Scaling 그룹은 Amazon EC2 인스턴스 시작 시 최신 AMI를 사용해야 합니다.<br><br>가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure an Amazon EventBridge rule to receive new AMI events from Image Builder. Target an AWS Systems Manager Run Command document that updates the launch templates of the Auto Scaling groups with the newest AMI ID.`, ko:`Amazon EventBridge 규칙을 구성하여 Image Builder에서 새 AMI 이벤트를 수신합니다. 최신 AMI ID로 Auto Scaling 그룹의 시작 템플릿을 업데이트하는 AWS Systems Manager Run Command 문서를 대상으로 합니다.` },
    { k:'B', en:`Configure an Amazon EventBridge rule to receive new AMI events from Image Builder. Target an AWS Lambda function that updates the launch templates of the Auto Scaling groups with the newest AMI ID.`, ko:`Amazon EventBridge 규칙을 구성하여 Image Builder에서 새 AMI 이벤트를 수신합니다. 최신 AMI ID로 Auto Scaling 그룹의 시작 템플릿을 업데이트하는 AWS Lambda 함수를 대상으로 합니다.` },
    { k:'C', en:`Configure the launch template to use a value from AWS Systems Manager Parameter Store for the AMI ID. Configure the Image Builder pipeline to update the Parameter Store value with the newest AMI ID.`, ko:`AMI ID에 AWS Systems Manager Parameter Store의 값을 사용하도록 시작 템플릿을 구성합니다. Image Builder 파이프라인을 구성하여 최신 AMI ID로 Parameter Store 값을 업데이트합니다.` },
    { k:'D', en:`Configure the Image Builder distribution settings to update the launch templates with the newest AMI. Configure the Auto Scaling groups to use the newest version of the launch template.`, ko:`Image Builder 배포 설정을 구성하여 최신 AMI로 시작 템플릿을 업데이트합니다. Auto Scaling 그룹이 최신 버전의 시작 템플릿을 사용하도록 구성합니다.` },
  ],
  answer: ['D'],
  vote: '60% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>EC2 Image Builder의 <strong>배포 설정(distribution settings)</strong>에는 새 AMI가 빌드될 때 시작 템플릿을 자동으로 업데이트하는 기능이 내장되어 있습니다. Auto Scaling 그룹을 "최신 버전"을 사용하도록 구성하면 새 AMI로 자동 업데이트됩니다. 추가 서비스(Lambda, EventBridge) 없이 Image Builder 기능만으로 구현되므로 운영 효율성이 가장 높습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — SSM Run Command는 EC2에서 스크립트 실행용이며 시작 템플릿 업데이트에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Lambda + EventBridge는 추가 구성 요소가 필요하여 운영 오버헤드가 증가합니다.</p>
<p><span class="mark-no">❌ C</span> — Parameter Store 방식도 유효하지만, Image Builder의 배포 설정은 Parameter Store를 직접 지원하지 않으며 추가 설정이 필요합니다.</p>`,
  disc: [{ ans:'D (60%), C (28%)', txt:'Image Builder 배포 설정의 내장 시작 템플릿 업데이트 기능(D)이 가장 운영 효율적. 공식 문서: dist-using-launch-template.html' }]
},
{
  n: 176,
  en: `A company has configured an Amazon S3 event source on an AWS Lambda function. The company needs the Lambda function to run when a new object is created or an existing object is modified in a particular S3 bucket. The Lambda function will use the S3 bucket name and the S3 object key of the incoming event to read the contents of the created or modified S3 object. The Lambda function will parse the contents and save the parsed contents to an Amazon DynamoDB table.<br><br>The Lambda function's execution role has permissions to read from the S3 bucket and to write to the DynamoDB table. During testing, a DevOps engineer discovers that the Lambda function does not run when objects are added to the S3 bucket or when existing objects are modified.<br><br>Which solution will resolve this problem?`,
  ko: `한 회사가 AWS Lambda 함수에서 Amazon S3 이벤트 소스를 구성했습니다. 회사는 특정 S3 버킷에서 새 객체가 생성되거나 기존 객체가 수정될 때 Lambda 함수가 실행되어야 합니다. Lambda 함수는 들어오는 이벤트의 S3 버킷 이름과 S3 객체 키를 사용하여 생성되거나 수정된 S3 객체의 내용을 읽습니다. Lambda 함수는 내용을 구문 분석하고 구문 분석된 내용을 Amazon DynamoDB 테이블에 저장합니다.<br><br>Lambda 함수의 실행 역할에는 S3 버킷에서 읽고 DynamoDB 테이블에 쓸 수 있는 권한이 있습니다. 테스트하는 동안 DevOps 엔지니어는 객체가 S3 버킷에 추가되거나 기존 객체가 수정될 때 Lambda 함수가 실행되지 않는다는 것을 발견했습니다.<br><br>이 문제를 해결하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Increase the memory of the Lambda function to give the function the ability to process large files from the S3 bucket.`, ko:`Lambda 함수의 메모리를 늘려서 함수가 S3 버킷에서 대용량 파일을 처리할 수 있도록 합니다.` },
    { k:'B', en:`Create a resource policy on the Lambda function to grant Amazon S3 the permission to invoke the Lambda function for the S3 bucket.`, ko:`Lambda 함수에서 리소스 정책을 생성하여 Amazon S3가 S3 버킷에 대해 Lambda 함수를 호출할 수 있는 권한을 부여합니다.` },
    { k:'C', en:`Configure an Amazon Simple Queue Service (Amazon SQS) queue as an OnFailure destination for the Lambda function.`, ko:`Lambda 함수에 대한 OnFailure 대상으로 Amazon Simple Queue Service(Amazon SQS) 대기열을 구성합니다.` },
    { k:'D', en:`Provision space in the /tmp folder of the Lambda function to give the function the ability to process large files from the S3 bucket.`, ko:`Lambda 함수의 /tmp 폴더에 공간을 프로비저닝하여 함수가 S3 버킷에서 대용량 파일을 처리할 수 있도록 합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>Lambda 함수가 실행되지 않는 이유는 <strong>권한(Permission) 문제</strong>입니다. Lambda 실행 역할(execution role)에는 S3에서 읽기 권한이 있지만, S3가 Lambda를 호출하려면 Lambda 함수의 <strong>리소스 기반 정책(resource-based policy)</strong>에서 Amazon S3 서비스가 해당 함수를 호출할 수 있도록 허용해야 합니다. 이는 실행 역할과 별개입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, D</span> — 메모리 및 /tmp 공간 문제는 함수가 실행되지 않는 원인이 아닙니다. 실행 자체가 안 되는 상황입니다.</p>
<p><span class="mark-no">❌ C</span> — OnFailure 대상은 함수 실행 실패 시의 처리이며, 함수가 트리거되지 않는 문제와 무관합니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'S3 → Lambda 호출: 실행 역할(Lambda→S3 읽기)과 리소스 정책(S3→Lambda 호출 허용)은 별개. 리소스 정책이 없으면 S3가 Lambda를 호출 불가.' }]
},
{
  n: 177,
  en: `A company has deployed a critical application in two AWS Regions. The application uses an Application Load Balancer (ALB) in both Regions. The company has Amazon Route 53 alias DNS records for both ALBs.<br><br>The company uses Amazon Route 53 Application Recovery Controller to ensure that the application can fail over between the two Regions. The Route 53 ARC configuration includes a routing control for both Regions. The company uses Route 53 ARC to perform quarterly disaster recovery (DR) tests.<br><br>During the most recent DR test, a DevOps engineer accidentally turned off both routing controls. The company needs to ensure that at least one routing control is turned on at all times.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 두 AWS 리전에 중요한 애플리케이션을 배포했습니다. 이 애플리케이션은 두 리전 모두에서 Application Load Balancer(ALB)를 사용합니다. 회사는 두 ALB에 대한 Amazon Route 53 별칭 DNS 레코드를 가지고 있습니다.<br><br>회사는 Amazon Route 53 Application Recovery Controller를 사용하여 애플리케이션이 두 리전 간에 장애 조치를 수행할 수 있도록 합니다. Route 53 ARC 구성에는 두 리전에 대한 라우팅 제어가 포함되어 있습니다. 회사는 Route 53 ARC를 사용하여 분기별 재해 복구(DR) 테스트를 수행합니다.<br><br>가장 최근의 DR 테스트 중에 DevOps 엔지니어가 실수로 두 라우팅 제어를 모두 껐습니다. 회사는 항상 최소한 하나의 라우팅 제어가 켜져 있는지 확인해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`In Route 53 ARC, create a new assertion safety rule. Apply the assertion safety rule to the two routing controls. Configure the rule with the ATLEAST type with a threshold of 1.`, ko:`Route 53 ARC에서 새로운 어설션 안전 규칙을 생성합니다. 두 개의 라우팅 제어에 어설션 안전 규칙을 적용합니다. 임계값이 1인 ATLEAST 유형으로 규칙을 구성합니다.` },
    { k:'B', en:`In Route 53 ARC, create a new gating safety rule. Apply the assertion safety rule to the two routing controls. Configure the rule with the OR type with a threshold of 1.`, ko:`Route 53 ARC에서 새로운 게이팅 안전 규칙을 생성합니다. 두 개의 라우팅 제어에 어설션 안전 규칙을 적용합니다. 임계값이 1인 OR 유형으로 규칙을 구성합니다.` },
    { k:'C', en:`In Route 53 ARC, create a new resource set. Configure the resource set with an AWS::Route53::HealthCheck resource type. Specify the ARNs of the two routing controls as the target resource. Create a new readiness check for the resource set.`, ko:`Route 53 ARC에서 새 리소스 세트를 생성합니다. AWS::Route53::HealthCheck 리소스 유형으로 리소스 세트를 구성합니다. 두 라우팅 제어의 ARN을 대상 리소스로 지정합니다. 리소스 세트에 대한 새 준비성 검사를 생성합니다.` },
    { k:'D', en:`In Route 53 ARC, create a new resource set. Configure the resource set with an AWS::Route53RecoveryReadiness::DNSTargetResource resource type. Add the domain names of the two Route 53 alias DNS records as the target resource. Create a new readiness check for the resource set.`, ko:`Route 53 ARC에서 새 리소스 세트를 생성합니다. AWS::Route53RecoveryReadiness::DNSTargetResource 리소스 유형으로 리소스 세트를 구성합니다. 두 Route 53 별칭 DNS 레코드의 도메인 이름을 대상 리소스로 추가합니다. 리소스 세트에 대한 새 준비 상태 검사를 생성합니다.` },
  ],
  answer: ['A'],
  vote: '93% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>Route 53 ARC의 <strong>어설션 안전 규칙(Assertion Safety Rule)</strong>은 사용자가 할 수 없는 작업을 정의합니다. <strong>ATLEAST 유형, 임계값 1</strong>로 구성하면 "적어도 1개의 라우팅 제어가 ON 상태여야 함"을 강제하여, 모든 라우팅 제어를 끄려는 시도를 차단합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 게이팅 안전 규칙(Gating Safety Rule)은 특정 제어가 ON일 때만 다른 제어 변경을 허용하는 "게이트" 역할이며, 이 시나리오에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C, D</span> — 리소스 세트와 준비성 검사는 DR 준비 상태 모니터링용이며 라우팅 제어 동작을 제한하지 않습니다.</p>`,
  disc: [{ ans:'A (93%)', txt:'어설션 안전 규칙(ATLEAST, 임계값 1)으로 "항상 최소 1개 ON" 강제. AWS 공식 문서: routing-control.safety-rules.html' }]
},
{
  n: 178,
  en: `A healthcare services company is concerned about the growing costs of software licensing for an application for monitoring patient wellness. The company wants to create an audit process to ensure that the application is running exclusively on Amazon EC2 Dedicated Hosts. A DevOps engineer must create a workflow to audit the application to ensure compliance.<br><br>What steps should the engineer take to meet this requirement with the LEAST administrative overhead?`,
  ko: `의료 서비스 회사가 환자 건강 모니터링 애플리케이션의 소프트웨어 라이선스 비용이 증가하는 것에 대해 우려하고 있습니다. 회사는 애플리케이션이 Amazon EC2 전용 호스트에서만 실행되도록 감사 프로세스를 만들고자 합니다. DevOps 엔지니어는 규정 준수를 보장하기 위해 애플리케이션을 감사하는 워크플로를 생성해야 합니다.<br><br>최소한의 관리 오버헤드로 이 요구 사항을 충족하기 위해 엔지니어는 어떤 단계를 거쳐야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS Systems Manager Configuration Compliance. Use calls to the put-compliance-items API action to scan and build a database of noncompliant EC2 instances based on their host placement configuration. Use an Amazon DynamoDB table to store these instance IDs for fast access. Generate a report through Systems Manager by calling the list-compliance-summaries API action.`, ko:`AWS Systems Manager Configuration Compliance를 사용합니다. put-compliance-items API 작업에 대한 호출을 사용하여 호스트 배치 구성에 따라 비준수 EC2 인스턴스의 데이터베이스를 스캔하고 빌드합니다. 빠른 액세스를 위해 Amazon DynamoDB 테이블을 사용하여 이러한 인스턴스 ID를 저장합니다. list-compliance-summaries API 작업을 호출하여 Systems Manager를 통해 보고서를 생성합니다.` },
    { k:'B', en:`Use custom Java code running on an EC2 instance. Set up EC2 Auto Scaling for the instance depending on the number of instances to be checked. Send the list of noncompliant EC2 instance IDs to an Amazon SQS queue. Set up another worker instance to process instance IDs from the SQS queue and write them to Amazon DynamoDB. Use an AWS Lambda function to terminate noncompliant instance IDs obtained from the queue, and send them to an Amazon SNS email topic for distribution.`, ko:`EC2 인스턴스에서 실행되는 사용자 지정 Java 코드를 사용합니다. 확인할 인스턴스 수에 따라 인스턴스에 대한 EC2 Auto Scaling을 설정합니다. 비준수 EC2 인스턴스 ID 목록을 Amazon SQS 대기열로 보냅니다. SQS 대기열에서 인스턴스 ID를 처리하고 Amazon DynamoDB에 쓸 다른 작업자 인스턴스를 설정합니다. AWS Lambda 함수를 사용하여 대기열에서 얻은 비준수 인스턴스 ID를 종료하고 배포를 위해 Amazon SNS 이메일 토픽으로 보냅니다.` },
    { k:'C', en:`Use AWS Config. Identify all EC2 instances to be audited by enabling Config Recording on all Amazon EC2 resources for the region. Create a custom AWS Config rule that triggers an AWS Lambda function by using the "config-rule-change-triggered" blueprint. Modify the Lambda evaluateCompliance() function to verify host placement to return a NON_COMPLIANT result if the instance is not running on an EC2 Dedicated Host. Use the AWS Config report to address noncompliant instances.`, ko:`AWS Config를 사용합니다. 해당 리전의 모든 Amazon EC2 리소스에서 Config Recording을 활성화하여 감사할 모든 EC2 인스턴스를 식별합니다. "config-rule-change-triggered" 블루프린트를 사용하여 AWS Lambda 함수를 트리거하는 사용자 지정 AWS Config 규칙을 생성합니다. 인스턴스가 EC2 전용 호스트에서 실행되지 않는 경우 NON_COMPLIANT 결과를 반환하도록 Lambda evaluateCompliance() 함수를 수정하여 호스트 배치를 확인합니다. AWS Config 보고서를 사용하여 비준수 인스턴스를 처리합니다.` },
    { k:'D', en:`Use AWS CloudTrail. Identify all EC2 instances to be audited by analyzing all calls to the EC2 RunCommand API action. Invoke an AWS Lambda function that analyzes the host placement of the instance. Store the EC2 instance ID of noncompliant resources in an Amazon RDS for MySQL DB instance. Generate a report by querying the RDS instance and exporting the query results to a CSV text file.`, ko:`AWS CloudTrail을 사용합니다. EC2 RunCommand API 작업에 대한 모든 호출을 분석하여 감사할 모든 EC2 인스턴스를 식별합니다. 인스턴스의 호스트 배치를 분석하는 AWS Lambda 함수를 호출합니다. 비준수 리소스의 EC2 인스턴스 ID를 Amazon RDS for MySQL DB 인스턴스에 저장합니다. RDS 인스턴스를 쿼리하고 쿼리 결과를 CSV 텍스트 파일로 내보내 보고서를 생성합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p><strong>AWS Config</strong>는 EC2 인스턴스의 구성을 지속적으로 모니터링하고 규정 준수를 평가하는 데 최적화된 서비스입니다. 사용자 지정 Config 규칙과 Lambda 함수를 조합하여 전용 호스트 배치 여부를 자동으로 확인하고 Config 보고서로 비준수 인스턴스를 관리할 수 있습니다. 최소 관리 오버헤드로 감사 워크플로를 구현합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — SSM Configuration Compliance는 패치 및 상태 관리용이며 DynamoDB 저장은 불필요한 복잡성을 추가합니다.</p>
<p><span class="mark-no">❌ B</span> — 사용자 지정 Java 코드 + SQS + 작업자 인스턴스는 매우 높은 관리 오버헤드를 요구합니다.</p>
<p><span class="mark-no">❌ D</span> — CloudTrail은 API 호출 감사용이며 인스턴스의 실시간 구성 상태를 모니터링하지 않습니다. RDS + CSV 내보내기도 불필요한 복잡성입니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'AWS Config + 사용자 지정 규칙(전용 호스트 확인) + Config 보고서가 최소 오버헤드로 감사 요건을 충족.' }]
},
{
  n: 179,
  en: `A DevOps engineer is planning to deploy a Ruby-based application to production. The application needs to interact with an Amazon RDS for MySQL database and should have automatic scaling and high availability. The stored data in the database is critical and should persist regardless of the state of the application stack.<br><br>The DevOps engineer needs to set up an automated deployment strategy for the application with automatic rollbacks. The solution also must alert the application team when a deployment fails.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `DevOps 엔지니어가 Ruby 기반 애플리케이션을 프로덕션에 배포하려고 계획하고 있습니다. 이 애플리케이션은 Amazon RDS for MySQL 데이터베이스와 상호 작용해야 하며 자동 확장 및 고가용성이 있어야 합니다. 데이터베이스에 저장된 데이터는 중요하며 애플리케이션 스택의 상태와 관계없이 유지되어야 합니다.<br><br>DevOps 엔지니어는 자동 롤백을 사용하여 애플리케이션에 대한 자동화된 배포 전략을 설정해야 합니다. 또한 솔루션은 배포가 실패할 때 애플리케이션 팀에 경고해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (세 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Deploy the application on AWS Elastic Beanstalk. Deploy an Amazon RDS for MySQL DB instance as part of the Elastic Beanstalk configuration.`, ko:`AWS Elastic Beanstalk에 애플리케이션을 배포합니다. Elastic Beanstalk 구성의 일부로 Amazon RDS for MySQL DB 인스턴스를 배포합니다.` },
    { k:'B', en:`Deploy the application on AWS Elastic Beanstalk. Deploy a separate Amazon RDS for MySQL DB instance outside of Elastic Beanstalk.`, ko:`AWS Elastic Beanstalk에 애플리케이션을 배포합니다. Elastic Beanstalk 외부에 별도의 Amazon RDS for MySQL DB 인스턴스를 배포합니다.` },
    { k:'C', en:`Configure a notification email address that alerts the application team in the AWS Elastic Beanstalk configuration.`, ko:`AWS Elastic Beanstalk 구성에서 애플리케이션 팀에 알림을 보내는 알림 이메일 주소를 구성합니다.` },
    { k:'D', en:`Configure an Amazon EventBridge rule to monitor AWS Health events. Use an Amazon Simple Notification Service (Amazon SNS) topic as a target to alert the application team.`, ko:`AWS Health 이벤트를 모니터링하기 위해 Amazon EventBridge 규칙을 구성합니다. 애플리케이션 팀에 경고하기 위해 Amazon Simple Notification Service(Amazon SNS) 토픽을 대상으로 사용합니다.` },
    { k:'E', en:`Use the immutable deployment method to deploy new application versions.`, ko:`새로운 애플리케이션 버전을 배포하기 위해 변경 불가능한(immutable) 배포 방법을 사용합니다.` },
    { k:'F', en:`Use the rolling deployment method to deploy new application versions.`, ko:`새로운 애플리케이션 버전을 배포하기 위해 롤링 배포 방법을 사용합니다.` },
  ],
  answer: ['B','C','E'],
  vote: '83% BCE',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>데이터가 중요하므로 RDS를 Elastic Beanstalk <strong>외부에 별도로</strong> 배포해야 합니다. Beanstalk 구성에 포함된 RDS는 환경 삭제 시 함께 삭제될 수 있습니다.</p>
<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p>Elastic Beanstalk는 SNS를 통해 알림 이메일 주소로 직접 알림을 보낼 수 있는 기능이 내장되어 있습니다.</p>
<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p><strong>Immutable 배포</strong>는 새 인스턴스가 상태 검사를 통과하지 못하면 자동으로 종료하고 원래 인스턴스를 유지하여 자동 롤백을 지원합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — RDS를 Beanstalk 구성에 포함하면 환경 재생성 시 데이터가 손실될 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Health 이벤트는 서비스 상태 모니터링용이며 배포 실패 알림에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ F</span> — 롤링 배포는 원본 인스턴스를 점진적으로 교체하므로 배포 실패 시 롤백이 복잡합니다.</p>`,
  disc: [{ ans:'BCE (83%)', txt:'RDS 외부 분리(B) + Beanstalk 알림 이메일(C) + Immutable 배포로 자동 롤백(E).' }]
},
{
  n: 180,
  en: `A company is using AWS CodePipeline to deploy an application. According to a new guideline, a member of the company's security team must sign off on any application changes before the changes are deployed into production. The approval must be recorded and retained.<br><br>Which combination of actions will meet these requirements? (Choose two.)`,
  ko: `한 회사가 AWS CodePipeline을 사용하여 애플리케이션을 배포하고 있습니다. 새로운 가이드라인에 따라 회사 보안팀 구성원은 변경 사항을 프로덕션에 배포하기 전에 모든 애플리케이션 변경 사항에 서명해야 합니다. 승인은 기록하고 보관해야 합니다.<br><br>이러한 요구 사항을 충족하는 작업의 조합은 무엇입니까? (두 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Configure CodePipeline to write actions to Amazon CloudWatch Logs.`, ko:`CodePipeline을 구성하여 Amazon CloudWatch Logs에 작업을 기록합니다.` },
    { k:'B', en:`Configure CodePipeline to write actions to an Amazon S3 bucket at the end of each pipeline stage.`, ko:`각 파이프라인 단계가 끝날 때 Amazon S3 버킷에 작업을 쓰도록 CodePipeline을 구성합니다.` },
    { k:'C', en:`Create an AWS CloudTrail trail to deliver logs to Amazon S3.`, ko:`Amazon S3에 로그를 전송하기 위한 AWS CloudTrail 트레일을 생성합니다.` },
    { k:'D', en:`Create a CodePipeline custom action to invoke an AWS Lambda function for approval. Create a policy that gives the security team access to manage CodePipeline custom actions.`, ko:`승인을 위해 AWS Lambda 함수를 호출하는 CodePipeline 사용자 지정 작업을 생성합니다. 보안 팀에 CodePipeline 사용자 지정 작업을 관리할 수 있는 액세스 권한을 부여하는 정책을 생성합니다.` },
    { k:'E', en:`Create a CodePipeline manual approval action before the deployment step. Create a policy that grants the security team access to approve manual approval stages.`, ko:`배포 단계 전에 CodePipeline 수동 승인 작업을 생성합니다. 보안 팀에 수동 승인 단계를 승인할 수 있는 액세스 권한을 부여하는 정책을 생성합니다.` },
  ],
  answer: ['C','E'],
  vote: '87% CE',
  explain: `<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p>CodePipeline의 <strong>수동 승인 작업(Manual Approval Action)</strong>은 배포 단계 전에 보안팀이 명시적으로 승인해야 파이프라인이 계속 진행되도록 합니다. IAM 정책으로 보안팀에게만 승인 권한을 부여합니다.</p>
<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p><strong>AWS CloudTrail</strong>은 CodePipeline의 모든 API 호출(수동 승인 포함)을 기록합니다. CloudTrail 트레일을 생성하여 S3 버킷에 로그를 전송하면 승인 기록을 영구적으로 보관할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudWatch Logs는 EC2 등의 AWS 리소스 로그 저장용이며 CodePipeline 승인 기록에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — CodePipeline 작업을 S3에 직접 쓰는 구성은 지원되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda를 사용한 사용자 지정 승인은 불필요한 복잡성을 추가하며, 수동 승인 작업이 이미 기본 지원됩니다.</p>`,
  disc: [{ ans:'CE (87%)', txt:'수동 승인 작업(E)으로 서명 + CloudTrail(C)로 기록/보관. CodePipeline 승인은 CloudTrail API 이벤트로 기록됨.' }]
}
];
