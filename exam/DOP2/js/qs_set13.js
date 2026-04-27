window.QS_SET13 = [
{
  n: 121,
  en: `A company is building a new pipeline by using AWS CodePipeline and AWS CodeBuild in a build account. The pipeline consists of two stages. The first stage is a CodeBuild job to build and package an AWS Lambda function. The second stage consists of deployment actions that operate on two different AWS accounts: a development environment account and a production environment account. The deployment stages use the AWS CloudFormation action that CodePipeline invokes to deploy the infrastructure that the Lambda function requires.<br><br>A DevOps engineer creates the CodePipeline pipeline and configures the pipeline to encrypt build artifacts by using the AWS Key Management Service (AWS KMS) AWS managed key for Amazon S3 (the aws/s3 key). The artifacts are stored in an S3 bucket. When the pipeline runs, the CloudFormation actions fail with an access denied error.<br><br>Which combination of actions must the DevOps engineer perform to resolve this error? (Choose two.)`,
  ko: `한 회사가 빌드 계정에서 AWS CodePipeline과 AWS CodeBuild를 사용하여 새로운 파이프라인을 빌드하고 있습니다. 파이프라인은 두 단계로 구성되어 있습니다. 첫 번째 단계는 AWS Lambda 함수를 빌드하고 패키징하는 CodeBuild 작업입니다. 두 번째 단계는 개발 환경 계정과 프로덕션 환경 계정이라는 두 개의 다른 AWS 계정에서 작동하는 배포 작업으로 구성됩니다. 배포 단계에서는 CodePipeline이 호출하는 AWS CloudFormation 작업을 사용하여 Lambda 함수에 필요한 인프라를 배포합니다.<br><br>DevOps 엔지니어가 CodePipeline 파이프라인을 만들고 Amazon S3에 대한 AWS KMS AWS 관리 키(aws/s3 키)를 사용하여 빌드 아티팩트를 암호화하도록 파이프라인을 구성합니다. 아티팩트는 S3 버킷에 저장됩니다. 파이프라인이 실행되면 CloudFormation 작업이 액세스 거부 오류와 함께 실패합니다.<br><br>DevOps 엔지니어가 이 오류를 해결하기 위해 수행해야 하는 작업 조합은 무엇입니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Create an S3 bucket in each AWS account for the artifacts. Allow the pipeline to write to the S3 buckets. Create a CodePipeline S3 action to copy the artifacts to the S3 bucket in each AWS account. Update the CloudFormation actions to reference the artifacts S3 bucket in the production account.`, ko:`아티팩트에 대한 각 AWS 계정에서 S3 버킷을 만듭니다. 파이프라인이 S3 버킷에 쓸 수 있도록 합니다. CodePipeline S3 작업을 만들어 각 AWS 계정의 S3 버킷에 아티팩트를 복사합니다. CloudFormation 작업을 업데이트하여 프로덕션 계정의 아티팩트 S3 버킷을 참조합니다.` },
    { k:'B', en:`Create a customer managed KMS key. Configure the KMS key policy to allow the IAM roles used by the CloudFormation action to perform decrypt operations. Modify the pipeline to use the customer managed KMS key to encrypt artifacts.`, ko:`고객 관리 KMS 키를 만듭니다. CloudFormation 작업에서 사용하는 IAM 역할이 암호 해독 작업을 수행할 수 있도록 KMS 키 정책을 구성합니다. 고객 관리 KMS 키를 사용하여 아티팩트를 암호화하도록 파이프라인을 수정합니다.` },
    { k:'C', en:`Create an AWS managed KMS key. Configure the KMS key policy to allow the development account and the production account to perform decrypt operations. Modify the pipeline to use the KMS key to encrypt artifacts.`, ko:`AWS 관리형 KMS 키를 만듭니다. 개발 계정과 프로덕션 계정이 암호 해독 작업을 수행할 수 있도록 KMS 키 정책을 구성합니다. 파이프라인을 수정하여 KMS 키를 사용하여 아티팩트를 암호화합니다.` },
    { k:'D', en:`In the development account and in the production account, create an IAM role for CodePipeline. Configure the roles with permissions to perform CloudFormation operations and with permissions to retrieve and decrypt objects from the artifacts S3 bucket. In the CodePipeline account, configure the CodePipeline CloudFormation action to use the roles.`, ko:`개발 계정과 프로덕션 계정에서 CodePipeline에 대한 IAM 역할을 만듭니다. CloudFormation 작업을 수행할 수 있는 권한과 아티팩트 S3 버킷에서 객체를 검색하고 복호화할 수 있는 권한이 있는 역할을 구성합니다. CodePipeline 계정에서 역할을 사용하도록 CodePipeline CloudFormation 작업을 구성합니다.` },
    { k:'E', en:`In the development account and in the production account, create an IAM role for CodePipeline. Configure the roles with permissions to perform CloudFormation operations and with permissions to retrieve and decrypt objects from the artifacts S3 bucket. In the CodePipeline account, modify the artifacts S3 bucket policy to allow the roles access. Configure the CodePipeline CloudFormation action to use the roles.`, ko:`개발 계정과 프로덕션 계정에서 CodePipeline에 대한 IAM 역할을 만듭니다. CloudFormation 작업을 수행할 수 있는 권한과 아티팩트 S3 버킷에서 객체를 검색하고 복호화할 수 있는 권한이 있는 역할을 구성합니다. CodePipeline 계정에서 역할 액세스를 허용하도록 아티팩트 S3 버킷 정책을 수정합니다. 역할을 사용하도록 CodePipeline CloudFormation 작업을 구성합니다.` },
  ],
  answer: ['B','E'],
  vote: '80% BE',
  explain: `<p><span class="mark-ok">✅ B — 고객 관리 KMS 키 생성 및 교차 계정 복호화 권한 부여</span></p><p>AWS 관리 KMS 키(aws/s3)는 교차 계정 사용을 위한 키 정책 수정이 불가능합니다. 교차 계정 접근에는 반드시 고객 관리 KMS 키(CMK)를 사용해야 합니다. CMK 키 정책에 개발/프로덕션 계정의 CloudFormation 역할에 복호화 권한을 부여합니다.</p>
<p><span class="mark-ok">✅ E — 교차 계정 IAM 역할 + S3 버킷 정책 수정</span></p><p>교차 계정에서 S3 버킷에 접근할 때는 IAM 역할 권한만으로는 부족하고 S3 버킷 정책에서도 해당 역할의 접근을 명시적으로 허용해야 합니다. D는 버킷 정책 수정이 누락되어 교차 계정 접근이 실패할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 각 계정에 S3 버킷을 만드는 것은 불필요한 복잡성을 추가합니다.</p>
<p><span class="mark-no">❌ C</span> — AWS 관리형 KMS 키는 생성하거나 키 정책을 수정할 수 없습니다. 읽기 전용입니다.</p>
<p><span class="mark-no">❌ D</span> — IAM 역할 권한은 설정하지만, 교차 계정 S3 접근에 필요한 버킷 정책 수정이 누락되었습니다.</p>`,
  disc: [{ ans:'BE (80%)', txt:'핵심: AWS 관리형 KMS 키 = 수정 불가 = 교차 계정 불가. 교차 계정 CodePipeline 공식 가이드: 고객 관리 KMS 키 + S3 버킷 정책 + 교차 계정 IAM 역할 3가지 모두 필요.' }]
},
{
  n: 122,
  en: `A company is using an organization in AWS Organizations to manage multiple AWS accounts. The company's development team wants to use AWS Lambda functions to meet resiliency requirements and is rewriting all applications to work with Lambda functions that are deployed in a VPC. The development team is using Amazon Elastic File System (Amazon EFS) as shared storage in Account A in the organization.<br><br>The company wants to continue to use Amazon EFS with Lambda. Company policy requires all serverless projects to be deployed in Account B.<br><br>A DevOps engineer needs to reconfigure an existing EFS file system to allow Lambda functions to access the data through an existing EFS access point.<br><br>Which combination of steps should the DevOps engineer take to meet these requirements? (Choose three.)`,
  ko: `한 회사가 AWS Organizations의 조직을 사용하여 여러 AWS 계정을 관리하고 있습니다. 개발 팀은 복원성 요구 사항을 충족하기 위해 AWS Lambda 함수를 사용하려 하며 VPC에 배포된 Lambda 함수와 함께 작동하도록 모든 애플리케이션을 다시 작성하고 있습니다. 개발 팀은 조직의 계정 A에서 공유 스토리지로 Amazon EFS를 사용하고 있습니다.<br><br>이 회사는 Lambda와 함께 Amazon EFS를 계속 사용하려고 합니다. 회사 정책에 따라 모든 서버리스 프로젝트는 계정 B에 배포해야 합니다.<br><br>DevOps 엔지니어는 기존 EFS 파일 시스템을 재구성하여 Lambda 함수가 기존 EFS 액세스 포인트를 통해 데이터에 액세스할 수 있도록 해야 합니다.<br><br>DevOps 엔지니어는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 취해야 합니까? (세 가지 선택)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Update the EFS file system policy to provide Account B with access to mount and write to the EFS file system in Account A.`, ko:`EFS 파일 시스템 정책을 업데이트하여 계정 B가 계정 A의 EFS 파일 시스템을 마운트하고 쓸 수 있는 액세스 권한을 부여합니다.` },
    { k:'B', en:`Create SCPs to set permission guardrails with fine-grained control for Amazon EFS.`, ko:`Amazon EFS에 대한 세부적인 제어를 통해 권한 보호 장치를 설정하기 위해 SCP를 만듭니다.` },
    { k:'C', en:`Create a new EFS file system in Account B. Use AWS Database Migration Service (AWS DMS) to keep data from Account A and Account B synchronized.`, ko:`계정 B에 새 EFS 파일 시스템을 만듭니다. AWS Database Migration Service(AWS DMS)를 사용하여 계정 A와 계정 B의 데이터를 동기화합니다.` },
    { k:'D', en:`Update the Lambda execution roles with permission to access the VPC and the EFS file system.`, ko:`VPC 및 EFS 파일 시스템에 액세스할 수 있는 권한으로 Lambda 실행 역할을 업데이트합니다.` },
    { k:'E', en:`Create a VPC peering connection to connect Account A to Account B.`, ko:`계정 A를 계정 B에 연결하기 위해 VPC 피어링 연결을 생성합니다.` },
    { k:'F', en:`Configure the Lambda functions in Account B to assume an existing IAM role in Account A.`, ko:`계정 B에서 Lambda 함수를 구성하여 계정 A의 기존 IAM 역할을 맡습니다.` },
  ],
  answer: ['A','D','E'],
  vote: '75% ADE',
  explain: `<p><span class="mark-ok">✅ A — EFS 파일 시스템 정책 업데이트</span></p><p>계정 A의 EFS 파일 시스템 정책을 업데이트하여 계정 B가 마운트하고 쓸 수 있도록 허용합니다. 이것이 교차 계정 EFS 접근의 핵심입니다.</p>
<p><span class="mark-ok">✅ D — Lambda 실행 역할에 VPC 및 EFS 권한 추가</span></p><p>계정 B의 Lambda 실행 역할에 VPC 네트워크 인터페이스 생성 권한(<code>ec2:CreateNetworkInterface</code> 등)과 EFS 마운트 권한(<code>elasticfilesystem:ClientMount</code> 등)이 필요합니다.</p>
<p><span class="mark-ok">✅ E — VPC 피어링 연결</span></p><p>EFS는 네트워크를 통해 접근하므로, 계정 A(EFS가 있는 VPC)와 계정 B(Lambda가 있는 VPC) 간에 VPC 피어링이 필요합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — SCP는 권한을 거부하는 데 사용되며, 교차 계정 EFS 접근 설정과 무관합니다.</p>
<p><span class="mark-no">❌ C</span> — 기존 EFS 파일 시스템을 재구성하는 것이 목적이므로, 새 EFS 생성과 DMS 동기화는 불필요합니다.</p>
<p><span class="mark-no">❌ F</span> — Lambda 함수가 계정 A의 IAM 역할을 맡을 필요가 없습니다. D(Lambda 실행 역할에 직접 권한 부여)로 충분합니다.</p>`,
  disc: [{ ans:'ADE (75%) vs AEF (19%)', txt:'AWS 공식 문서: Lambda에서 교차 계정 EFS 사용 시 VPC 피어링 + EFS 파일 시스템 정책 + Lambda 실행 역할 권한(VPC+EFS)이 필요. F(역할 가정)보다 D(직접 권한)가 더 간단하고 AWS 권장 방식.' }]
},
{
  n: 123,
  en: `A media company has several thousand Amazon EC2 instances in an AWS account. The company is using Slack and a shared email inbox for team communications and important updates. A DevOps engineer needs to send all AWS-scheduled EC2 maintenance notifications to the Slack channel and the shared inbox. The solution must include the instances' Name and Owner tags.<br><br>Which solution will meet these requirements?`,
  ko: `미디어 회사가 AWS 계정에 수천 개의 Amazon EC2 인스턴스를 보유하고 있습니다. 이 회사는 Slack과 공유 이메일 받은 편지함을 사용하여 팀 커뮤니케이션과 중요한 업데이트를 진행합니다. DevOps 엔지니어는 모든 AWS 예약 EC2 유지 관리 알림을 Slack 채널과 공유 받은 편지함으로 보내야 합니다. 솔루션에는 인스턴스의 Name 및 Owner 태그가 포함되어야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Integrate AWS Trusted Advisor with AWS Config. Configure a custom AWS Config rule to invoke an AWS Lambda function to publish notifications to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe a Slack channel endpoint and the shared inbox to the topic.`, ko:`AWS Trusted Advisor를 AWS Config와 통합합니다. Amazon SNS 주제에 알림을 게시하기 위해 AWS Lambda 함수를 호출하는 사용자 지정 AWS Config 규칙을 구성합니다. Slack 채널 엔드포인트와 공유된 받은 편지함을 주제에 구독합니다.` },
    { k:'B', en:`Use Amazon EventBridge to monitor for AWS Health events. Configure the maintenance events to target an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe an AWS Lambda function to the SNS topic to send notifications to the Slack channel and the shared inbox.`, ko:`Amazon EventBridge를 사용하여 AWS Health 이벤트를 모니터링합니다. 유지 관리 이벤트를 구성하여 Amazon SNS 주제를 대상으로 합니다. AWS Lambda 함수를 SNS 주제에 구독하여 Slack 채널과 공유 받은 편지함에 알림을 보냅니다.` },
    { k:'C', en:`Create an AWS Lambda function that sends EC2 maintenance notifications to the Slack channel and the shared inbox. Monitor EC2 health events by using Amazon CloudWatch metrics. Configure a CloudWatch alarm that invokes the Lambda function when a maintenance notification is received.`, ko:`Slack 채널과 공유된 받은 편지함에 EC2 유지 관리 알림을 보내는 AWS Lambda 함수를 만듭니다. Amazon CloudWatch 메트릭을 사용하여 EC2 상태 이벤트를 모니터링합니다. 유지 관리 알림을 받으면 Lambda 함수를 호출하는 CloudWatch 알람을 구성합니다.` },
    { k:'D', en:`Configure AWS Support integration with AWS CloudTrail. Create a CloudTrail lookup event to invoke an AWS Lambda function to pass EC2 maintenance notifications to Amazon Simple Notification Service (Amazon SNS). Configure Amazon SNS to target the Slack channel and the shared inbox.`, ko:`AWS CloudTrail과 AWS Support 통합을 구성합니다. CloudTrail 조회 이벤트를 생성하여 AWS Lambda 함수를 호출하여 EC2 유지 관리 알림을 Amazon SNS로 전달합니다. Amazon SNS를 구성하여 Slack 채널과 공유 받은 편지함을 타겟팅합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — EventBridge + AWS Health + SNS + Lambda</span></p><p>AWS 예약 EC2 유지 관리 이벤트는 AWS Health 서비스를 통해 발생하며 Amazon EventBridge로 캡처할 수 있습니다. AWS Health 이벤트에는 영향받는 인스턴스 정보가 포함되어 있으며, Lambda 함수가 EC2 태그(Name, Owner)를 추가로 조회하여 Slack과 이메일로 풍부한 알림을 전송할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Trusted Advisor는 EC2 예약 유지 관리 이벤트 알림과 관련이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — CloudWatch 메트릭으로는 AWS Health 유지 관리 이벤트를 직접 감지할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Support와 CloudTrail 통합으로는 EC2 유지 관리 알림을 처리할 수 없습니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'AWS 예약 유지 관리 = AWS Health 이벤트 → EventBridge로 캡처. Lambda로 EC2 태그(Name/Owner) 조회 후 Slack + 이메일로 알림 전송. 표준 AWS 패턴.' }]
},
{
  n: 124,
  en: `An AWS CodePipeline pipeline has implemented a code release process. The pipeline is integrated with AWS CodeDeploy to deploy versions of an application to multiple Amazon EC2 instances for each CodePipeline stage.<br><br>During a recent deployment, the pipeline failed due to a CodeDeploy issue. The DevOps team wants to improve monitoring and notifications during deployment to decrease resolution times.<br><br>What should the DevOps engineer do to create notifications when issues are discovered?`,
  ko: `AWS CodePipeline 파이프라인은 코드 릴리스 프로세스를 구현했습니다. 파이프라인은 AWS CodeDeploy와 통합되어 각 CodePipeline 단계에 대해 여러 Amazon EC2 인스턴스에 애플리케이션 버전을 배포합니다.<br><br>최근 배포 중에 파이프라인이 CodeDeploy 문제로 인해 실패했습니다. DevOps 팀은 배포 중 모니터링 및 알림을 개선하여 해결 시간을 단축하고자 합니다.<br><br>문제가 발견될 때 알림을 생성하기 위해 DevOps 엔지니어는 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Implement Amazon CloudWatch Logs for CodePipeline and CodeDeploy, create an AWS Config rule to evaluate code deployment issues, and create an Amazon Simple Notification Service (Amazon SNS) topic to notify stakeholders of deployment issues.`, ko:`CodePipeline 및 CodeDeploy에 대한 Amazon CloudWatch Logs를 구현하고, 코드 배포 문제를 평가하기 위한 AWS Config 규칙을 생성하고, 배포 문제를 이해 관계자에게 알리기 위한 Amazon SNS 주제를 생성합니다.` },
    { k:'B', en:`Implement Amazon EventBridge for CodePipeline and CodeDeploy, create an AWS Lambda function to evaluate code deployment issues, and create an Amazon Simple Notification Service (Amazon SNS) topic to notify stakeholders of deployment issues.`, ko:`CodePipeline 및 CodeDeploy에 대해 Amazon EventBridge를 구현하고, 코드 배포 문제를 평가하는 AWS Lambda 함수를 생성하고, 배포 문제를 이해 관계자에게 알리는 Amazon SNS 주제를 생성합니다.` },
    { k:'C', en:`Implement AWS CloudTrail to record CodePipeline and CodeDeploy API call information, create an AWS Lambda function to evaluate code deployment issues, and create an Amazon Simple Notification Service (Amazon SNS) topic to notify stakeholders of deployment issues.`, ko:`CodePipeline 및 CodeDeploy API 호출 정보를 기록하는 AWS CloudTrail을 구현하고, 코드 배포 문제를 평가하는 AWS Lambda 함수를 생성하고, 배포 문제를 이해 관계자에게 알리는 Amazon SNS 주제를 생성합니다.` },
    { k:'D', en:`Implement Amazon EventBridge for CodePipeline and CodeDeploy, create an Amazon Inspector assessment target to evaluate code deployment issues, and create an Amazon Simple Notification Service (Amazon SNS) topic to notify stakeholders of deployment issues.`, ko:`CodePipeline 및 CodeDeploy에 대해 Amazon EventBridge를 구현하고, 코드 배포 문제를 평가하기 위한 Amazon Inspector 평가 대상을 생성하고, 배포 문제를 이해 관계자에게 알리기 위한 Amazon SNS 주제를 생성합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — EventBridge + Lambda + SNS</span></p><p>CodePipeline과 CodeDeploy는 모두 Amazon EventBridge와 통합되어 파이프라인 상태 변경, 배포 실패 등의 이벤트를 실시간으로 발행합니다. EventBridge 규칙으로 이벤트를 캡처하고 Lambda로 분석 후 SNS로 이해 관계자에게 알림을 보내는 것이 표준 패턴입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — AWS Config는 리소스 구성 변경을 평가하는 서비스로, 배포 중 실시간 이벤트 알림에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — CloudTrail은 API 호출을 5분 지연으로 기록하므로 배포 중 실시간 모니터링에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon Inspector는 취약성 평가 서비스이며, 배포 문제 평가와 무관합니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'배포 중 실시간 모니터링 = EventBridge(근실시간 이벤트). CodePipeline/CodeDeploy 상태 변경 이벤트 → Lambda 분석 → SNS 알림이 표준 패턴.' }]
},
{
  n: 125,
  en: `A global company manages multiple AWS accounts by using AWS Control Tower. The company hosts internal applications and public applications.<br><br>Each application team in the company has its own AWS account for application hosting. The accounts are consolidated in an organization in AWS Organizations. One of the AWS Control Tower member accounts serves as a centralized DevOps account with CI/CD pipelines that application teams use to deploy applications to their respective target AWS accounts. An IAM role for deployment exists in the centralized DevOps account.<br><br>An application team is attempting to deploy its application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster in an application AWS account. An IAM role for deployment exists in the application AWS account. The deployment is through an AWS CodeBuild project that is set up in the centralized DevOps account. The CodeBuild project uses an IAM service role for CodeBuild. The deployment is failing with an Unauthorized error during attempts to connect to the cross-account EKS cluster from CodeBuild.<br><br>Which solution will resolve this error?`,
  ko: `글로벌 회사가 AWS Control Tower를 사용하여 여러 AWS 계정을 관리합니다. 이 회사는 내부 애플리케이션과 퍼블릭 애플리케이션을 호스팅합니다.<br><br>회사의 각 애플리케이션 팀은 애플리케이션 호스팅을 위한 자체 AWS 계정을 가지고 있습니다. 계정은 AWS Organizations의 조직에 통합됩니다. AWS Control Tower 멤버 계정 중 하나는 애플리케이션 팀이 해당 대상 AWS 계정에 애플리케이션을 배포하는 데 사용하는 CI/CD 파이프라인이 있는 중앙 집중식 DevOps 계정 역할을 합니다. 중앙 집중식 DevOps 계정에 배포를 위한 IAM 역할이 있습니다.<br><br>애플리케이션 팀은 애플리케이션 AWS 계정의 Amazon EKS 클러스터에 애플리케이션을 배포하려고 합니다. 애플리케이션 AWS 계정에 배포를 위한 IAM 역할이 있습니다. 배포는 중앙 집중식 DevOps 계정에 설정된 AWS CodeBuild 프로젝트를 통해 이루어집니다. CodeBuild가 교차 계정 EKS 클러스터에 연결을 시도하는 동안 배포가 권한 없음 오류로 실패합니다.<br><br>이 오류를 해결하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure the application account's deployment IAM role to have a trust relationship with the centralized DevOps account. Configure the trust relationship to allow the sts:AssumeRole action. Configure the application account's deployment IAM role to have the required access to the EKS cluster. Configure the EKS cluster aws-auth ConfigMap to map the role to the appropriate system permissions.`, ko:`중앙화된 DevOps 계정과 신뢰 관계를 갖도록 애플리케이션 계정의 배포 IAM 역할을 구성합니다. sts:AssumeRole 작업을 허용하도록 신뢰 관계를 구성합니다. EKS 클러스터에 필요한 액세스 권한을 갖도록 애플리케이션 계정의 배포 IAM 역할을 구성합니다. EKS 클러스터 aws-auth ConfigMap을 구성하여 역할을 적절한 시스템 권한에 매핑합니다.` },
    { k:'B', en:`Configure the centralized DevOps account's deployment IAM role to have a trust relationship with the application account. Configure the trust relationship to allow the sts:AssumeRole action. Configure the centralized DevOps account's deployment IAM role to allow the required access to CodeBuild.`, ko:`중앙화된 DevOps 계정의 배포 IAM 역할을 구성하여 애플리케이션 계정과 신뢰 관계를 맺습니다. sts:AssumeRole 작업을 허용하도록 신뢰 관계를 구성합니다. 중앙화된 DevOps 계정의 배포 IAM 역할을 구성하여 CodeBuild에 필요한 액세스를 허용합니다.` },
    { k:'C', en:`Configure the centralized DevOps account's deployment IAM role to have a trust relationship with the application account. Configure the trust relationship to allow the sts:AssumeRoleWithSAML action. Configure the centralized DevOps account's deployment IAM role to allow the required access to CodeBuild.`, ko:`중앙화된 DevOps 계정의 배포 IAM 역할을 구성하여 애플리케이션 계정과 신뢰 관계를 갖도록 합니다. sts:AssumeRoleWithSAML 작업을 허용하도록 신뢰 관계를 구성합니다. 중앙화된 DevOps 계정의 배포 IAM 역할을 구성하여 CodeBuild에 필요한 액세스를 허용합니다.` },
    { k:'D', en:`Configure the application account's deployment IAM role to have a trust relationship with the AWS Control Tower management account. Configure the trust relationship to allow the sts:AssumeRole action. Configure the application account's deployment IAM role to have the required access to the EKS cluster. Configure the EKS cluster aws-auth ConfigMap to map the role to the appropriate system permissions.`, ko:`애플리케이션 계정의 배포 IAM 역할을 AWS Control Tower 관리 계정과 신뢰 관계를 갖도록 구성합니다. sts:AssumeRole 작업을 허용하도록 신뢰 관계를 구성합니다. 애플리케이션 계정의 배포 IAM 역할을 구성하여 EKS 클러스터에 필요한 액세스 권한을 갖도록 구성합니다. EKS 클러스터 aws-auth ConfigMap을 구성하여 역할을 적절한 시스템 권한에 매핑합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 애플리케이션 계정 IAM 역할에 신뢰 관계 설정 + EKS aws-auth ConfigMap</span></p><p>교차 계정 EKS 접근의 올바른 패턴: ① 리소스(EKS)가 있는 계정(애플리케이션 계정)의 IAM 역할에 중앙 DevOps 계정에 대한 신뢰 정책 설정 → ② CodeBuild가 해당 역할을 AssumeRole → ③ EKS aws-auth ConfigMap에 해당 역할을 매핑. 신뢰 관계는 항상 리소스가 있는 계정에서 설정합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B, C</span> — 신뢰 관계 방향이 반대입니다. 중앙 DevOps 계정의 역할이 애플리케이션 계정을 신뢰하는 것이 아니라, 애플리케이션 계정의 역할이 중앙 DevOps 계정을 신뢰해야 합니다.</p>
<p><span class="mark-no">❌ C 추가</span> — sts:AssumeRoleWithSAML은 SAML 2.0 페더레이션에 사용되며, 이 시나리오와 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — Control Tower 관리 계정이 아닌 중앙 DevOps 계정과 신뢰 관계를 맺어야 합니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'교차 계정 역할 가정 원칙: 리소스가 있는 쪽에서 호출자를 신뢰. EKS 추가 요소: aws-auth ConfigMap에 역할 매핑 필수. CodeBuild → AssumeRole → 앱 계정 역할 → EKS 접근.' }]
},
{
  n: 126,
  en: `A highly regulated company has a policy that DevOps engineers should not log in to their Amazon EC2 instances except in emergencies. If a DevOps engineer does log in, the security team must be notified within 15 minutes of the occurrence.<br><br>Which solution will meet these requirements?`,
  ko: `엄격하게 규제되는 한 회사에서는 DevOps 엔지니어가 비상 시를 제외하고는 Amazon EC2 인스턴스에 로그인해서는 안 된다는 정책을 가지고 있습니다. DevOps 엔지니어가 로그인하는 경우 보안 팀은 발생 후 15분 이내에 알림을 받아야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Install the Amazon Inspector agent on each EC2 instance. Subscribe to Amazon EventBridge notifications. Invoke an AWS Lambda function to check if a message is about user logins. If it is, send a notification to the security team using Amazon SNS.`, ko:`각 EC2 인스턴스에 Amazon Inspector 에이전트를 설치합니다. Amazon EventBridge 알림을 구독합니다. AWS Lambda 함수를 호출하여 메시지가 사용자 로그인에 대한 것인지 확인합니다. 그렇다면 Amazon SNS를 사용하여 보안 팀에 알림을 보냅니다.` },
    { k:'B', en:`Install the Amazon CloudWatch agent on each EC2 instance. Configure the agent to push all logs to Amazon CloudWatch Logs and set up a CloudWatch metric filter that searches for user logins. If a login is found, send a notification to the security team using Amazon SNS.`, ko:`각 EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다. 에이전트를 구성하여 모든 로그를 Amazon CloudWatch Logs에 푸시하고 사용자 로그인을 검색하는 CloudWatch 메트릭 필터를 설정합니다. 로그인이 발견되면 Amazon SNS를 사용하여 보안 팀에 알림을 보냅니다.` },
    { k:'C', en:`Set up AWS CloudTrail with Amazon CloudWatch Logs. Subscribe CloudWatch Logs to Amazon Kinesis. Attach AWS Lambda to Kinesis to parse and determine if a log contains a user login. If it does, send a notification to the security team using Amazon SNS.`, ko:`Amazon CloudWatch Logs로 AWS CloudTrail을 설정합니다. CloudWatch Logs를 Amazon Kinesis에 구독합니다. AWS Lambda를 Kinesis에 연결하여 로그에 사용자 로그인이 포함되어 있는지 구문 분석하고 확인합니다. 포함되어 있으면 Amazon SNS를 사용하여 보안 팀에 알림을 보냅니다.` },
    { k:'D', en:`Set up a script on each Amazon EC2 instance to push all logs to Amazon S3. Set up an S3 event to invoke an AWS Lambda function, which invokes an Amazon Athena query to run. The Athena query checks for logins and sends the output to the security team using Amazon SNS.`, ko:`각 Amazon EC2 인스턴스에 스크립트를 설정하여 모든 로그를 Amazon S3에 푸시합니다. AWS Lambda 함수를 호출하는 S3 이벤트를 설정하여 Amazon Athena 쿼리를 호출하여 실행합니다. Athena 쿼리는 로그인을 확인하고 Amazon SNS를 사용하여 보안 팀에 출력을 보냅니다.` },
  ],
  answer: ['B'],
  vote: '95% B',
  explain: `<p><span class="mark-ok">✅ B — CloudWatch 에이전트 + CloudWatch Logs 메트릭 필터 + SNS</span></p><p>EC2 인스턴스에 CloudWatch 에이전트를 설치하면 /var/log/secure(Linux SSH 로그인) 또는 Windows 이벤트 로그를 CloudWatch Logs로 스트리밍할 수 있습니다. 메트릭 필터로 로그인 패턴을 감지하고 CloudWatch 알람을 통해 SNS로 알림을 보냅니다. CloudTrail(C)은 AWS API 호출을 추적하지만 EC2 OS 수준의 SSH/RDP 로그인은 캡처하지 않습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Amazon Inspector는 취약성 스캐닝 도구이며, EC2 로그인 모니터링과 관련이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — CloudTrail은 AWS API 호출을 기록하며, EC2 인스턴스 내부의 SSH/RDP 로그인을 캡처하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 수동 스크립트 + S3 + Athena 방식은 복잡하고 15분 이내 알림을 보장하기 어렵습니다.</p>`,
  disc: [{ ans:'B (95%)', txt:'OS 수준 로그인(SSH/RDP) = CloudWatch 에이전트로 시스템 로그 수집. CloudTrail은 AWS API만 추적. CW 메트릭 필터 → 알람 → SNS로 15분 내 알림 가능.' }]
},
{
  n: 127,
  en: `A company updated the AWS CloudFormation template for a critical business application. The stack update process failed due to an error in the updated template, and AWS CloudFormation automatically began the stack rollback process. Later, a DevOps engineer discovered that the application was still unavailable and that the stack was in the UPDATE_ROLLBACK_FAILED state.<br><br>Which combination of actions should the DevOps engineer perform so that the stack rollback can complete successfully? (Choose two.)`,
  ko: `한 회사가 중요한 비즈니스 애플리케이션에 대한 AWS CloudFormation 템플릿을 업데이트했습니다. 업데이트된 템플릿의 오류로 인해 스택 업데이트 프로세스가 실패했고, AWS CloudFormation이 자동으로 스택 롤백 프로세스를 시작했습니다. 나중에 DevOps 엔지니어가 애플리케이션을 여전히 사용할 수 없고 스택이 UPDATE_ROLLBACK_FAILED 상태임을 발견했습니다.<br><br>스택 롤백을 성공적으로 완료하려면 DevOps 엔지니어가 어떤 작업 조합을 수행해야 합니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Attach the AWSCloudFormationFullAccess IAM policy to the AWS CloudFormation role.`, ko:`AWSCloudFormationFullAccess IAM 정책을 AWS CloudFormation 역할에 연결합니다.` },
    { k:'B', en:`Automatically recover the stack resources by using AWS CloudFormation drift detection.`, ko:`AWS CloudFormation 드리프트 감지를 사용하여 스택 리소스를 자동으로 복구합니다.` },
    { k:'C', en:`Issue a ContinueUpdateRollback command from the AWS CloudFormation console or the AWS CLI.`, ko:`AWS CloudFormation 콘솔이나 AWS CLI에서 ContinueUpdateRollback 명령을 실행합니다.` },
    { k:'D', en:`Manually adjust the resources to match the expectations of the stack.`, ko:`스택의 기대치에 맞춰 리소스를 수동으로 조정합니다.` },
    { k:'E', en:`Update the existing AWS CloudFormation stack by using the original template.`, ko:`원래 템플릿을 사용하여 기존 AWS CloudFormation 스택을 업데이트합니다.` },
  ],
  answer: ['C','D'],
  vote: '100% CD',
  explain: `<p><span class="mark-ok">✅ C — ContinueUpdateRollback 명령 실행</span></p><p>UPDATE_ROLLBACK_FAILED 상태에서는 ContinueUpdateRollback 명령을 사용하여 중단된 롤백 프로세스를 재개할 수 있습니다. 이 명령은 롤백이 중단된 지점부터 계속 진행합니다.</p>
<p><span class="mark-ok">✅ D — 리소스를 수동으로 스택 예상 상태에 맞게 조정</span></p><p>롤백이 실패한 근본 원인(예: 다른 프로세스가 리소스를 잠금, 리소스가 스택 기대 상태와 다름)을 수동으로 수정해야 ContinueUpdateRollback이 성공할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — IAM 정책 부족이 원인이 아닙니다. UPDATE_ROLLBACK_FAILED는 리소스 상태 불일치가 주요 원인입니다.</p>
<p><span class="mark-no">❌ B</span> — 드리프트 감지는 스택과 실제 리소스 간의 차이를 확인하는 도구이며, 자동 복구 기능이 없습니다.</p>
<p><span class="mark-no">❌ E</span> — 원래 템플릿으로 업데이트해도 리소스가 스택 예상 상태와 불일치한 근본 원인이 해결되지 않습니다.</p>`,
  disc: [{ ans:'CD (100%)', txt:'UPDATE_ROLLBACK_FAILED 해결 절차: ① 리소스를 수동으로 스택 기대 상태에 맞게 수정(D) → ② ContinueUpdateRollback 명령으로 롤백 재개(C). AWS 공식 문서에서 권장하는 표준 절차.' }]
},
{
  n: 128,
  en: `A development team manually builds an artifact locally and then places it in an Amazon S3 bucket. The application has a local cache that must be cleared when a deployment occurs. The team runs a command to do this, downloads the artifact from Amazon S3, and unzips the artifact to complete the deployment.<br><br>A DevOps team wants to migrate to a CI/CD process and build in checks to stop and roll back the deployment when a failure occurs. This requires the team to track the progression of the deployment.<br><br>Which combination of actions will accomplish this? (Choose three.)`,
  ko: `개발 팀은 로컬에서 아티팩트를 수동으로 빌드한 다음 Amazon S3 버킷에 넣습니다. 애플리케이션에는 배포가 발생할 때 지워야 하는 로컬 캐시가 있습니다. 팀은 이를 위해 명령을 실행하고 Amazon S3에서 아티팩트를 다운로드한 다음 아티팩트의 압축을 풀어 배포를 완료합니다.<br><br>DevOps 팀은 CI/CD 프로세스로 마이그레이션하고 오류가 발생할 때 배포를 중지하고 롤백하는 검사를 빌드하려고 합니다. 이를 위해 팀은 배포 진행 상황을 추적해야 합니다.<br><br>이를 달성하는 작업 조합은 무엇입니까? (세 가지 선택)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Allow developers to check the code into a code repository. Using Amazon EventBridge, on every pull into the main branch, invoke an AWS Lambda function to build the artifact and store it in Amazon S3.`, ko:`개발자가 코드를 코드 저장소에 체크인할 수 있도록 합니다. Amazon EventBridge를 사용하여 메인 브랜치로의 모든 풀에서 AWS Lambda 함수를 호출하여 아티팩트를 빌드하고 Amazon S3에 저장합니다.` },
    { k:'B', en:`Create a custom script to clear the cache. Specify the script in the BeforeInstall lifecycle hook in the AppSpec file.`, ko:`캐시를 지우기 위한 사용자 지정 스크립트를 만듭니다. AppSpec 파일의 BeforeInstall 라이프사이클 후크에 스크립트를 지정합니다.` },
    { k:'C', en:`Create user data for each Amazon EC2 instance that contains the clear cache script. Once deployed, test the application. If it is not successful, deploy it again.`, ko:`캐시 지우기 스크립트가 포함된 각 Amazon EC2 인스턴스에 대한 사용자 데이터를 만듭니다. 배포되면 애플리케이션을 테스트합니다. 성공하지 못하면 다시 배포합니다.` },
    { k:'D', en:`Set up AWS CodePipeline to deploy the application. Allow developers to check the code into a code repository as a source for the pipeline.`, ko:`AWS CodePipeline을 설정하여 애플리케이션을 배포합니다. 개발자가 파이프라인의 소스로 코드 저장소에 코드를 체크인할 수 있도록 허용합니다.` },
    { k:'E', en:`Use AWS CodeBuild to build the artifact and place it in Amazon S3. Use AWS CodeDeploy to deploy the artifact to Amazon EC2 instances.`, ko:`AWS CodeBuild를 사용하여 아티팩트를 빌드하고 Amazon S3에 배치합니다. AWS CodeDeploy를 사용하여 아티팩트를 Amazon EC2 인스턴스에 배포합니다.` },
    { k:'F', en:`Use AWS Systems Manager to fetch the artifact from Amazon S3 and deploy it to all the instances.`, ko:`AWS Systems Manager를 사용하여 Amazon S3에서 아티팩트를 가져와 모든 인스턴스에 배포합니다.` },
  ],
  answer: ['B','D','E'],
  vote: '100% BDE',
  explain: `<p><span class="mark-ok">✅ B — AppSpec BeforeInstall 후크로 캐시 지우기</span></p><p>CodeDeploy의 AppSpec 파일에서 BeforeInstall 라이프사이클 후크에 캐시 지우기 스크립트를 지정하면 새 버전 설치 전에 자동으로 캐시가 지워집니다.</p>
<p><span class="mark-ok">✅ D — AWS CodePipeline 설정</span></p><p>CodePipeline은 배포 진행 상황 추적, 오류 시 중지, 롤백 기능을 제공합니다. 코드 저장소를 소스로 사용하여 CI/CD를 자동화합니다.</p>
<p><span class="mark-ok">✅ E — CodeBuild + CodeDeploy</span></p><p>CodeBuild로 아티팩트 빌드를 자동화하고, CodeDeploy로 EC2 인스턴스에 배포합니다. 이 조합이 CI/CD 파이프라인의 핵심입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — EventBridge + Lambda로 빌드하는 것은 CodeBuild/CodePipeline의 표준 패턴을 사용하지 않아 추적 및 롤백 기능이 제한적입니다.</p>
<p><span class="mark-no">❌ C</span> — 사용자 데이터는 인스턴스 시작 시 실행되며, 배포마다 캐시를 지우는 데 적합하지 않습니다. 또한 실패 시 "다시 배포"는 자동화된 롤백이 아닙니다.</p>
<p><span class="mark-no">❌ F</span> — Systems Manager로 배포하면 CodeDeploy의 라이프사이클 후크, 배포 추적, 롤백 기능을 활용할 수 없습니다.</p>`,
  disc: [{ ans:'BDE (100%)', txt:'CI/CD 마이그레이션 = CodePipeline(D) + CodeBuild(E) + CodeDeploy(E). 캐시 지우기 = AppSpec BeforeInstall 후크(B). 배포 추적 + 실패 시 롤백은 CodePipeline+CodeDeploy가 내장 지원.' }]
},
{
  n: 129,
  en: `A DevOps engineer is working on a project that is hosted on Amazon Linux and has failed a security review. The DevOps manager has been asked to review the company buildspec.yaml file for an AWS CodeBuild project and provide recommendations. The buildspec.yaml file is configured as follows:<br><br><img src="https://img.examtopics.com/aws-certified-devops-engineer-professional-dop-c02/image8.png" alt="buildspec.yaml" /><br><br>What changes should be recommended to comply with AWS security best practices? (Choose three.)`,
  ko: `DevOps 엔지니어가 Amazon Linux에서 호스팅되는 프로젝트를 진행 중이며 보안 검토에 실패했습니다. DevOps 관리자는 AWS CodeBuild 프로젝트에 대한 회사 buildspec.yaml 파일을 검토하고 권장 사항을 제공하라는 요청을 받았습니다. buildspec.yaml 파일은 다음과 같이 구성되어 있습니다:<br><br><img src="https://img.examtopics.com/aws-certified-devops-engineer-professional-dop-c02/image8.png" alt="buildspec.yaml" /><br><br>AWS 보안 모범 사례를 준수하기 위해 어떤 변경 사항을 권장해야 합니까? (세 가지 선택)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Add a post-build command to remove the temporary files from the container before termination to ensure they cannot be seen by other CodeBuild users.`, ko:`다른 CodeBuild 사용자가 해당 파일을 볼 수 없도록 종료 전에 컨테이너에서 임시 파일을 제거하는 빌드 후 명령을 추가합니다.` },
    { k:'B', en:`Update the CodeBuild project role with the necessary permissions and then remove the AWS credentials from the environment variable.`, ko:`필요한 권한으로 CodeBuild 프로젝트 역할을 업데이트한 다음 환경 변수에서 AWS 자격 증명을 제거합니다.` },
    { k:'C', en:`Store the DB_PASSWORD as a SecureString value in AWS Systems Manager Parameter Store and then remove the DB_PASSWORD from the environment variables.`, ko:`AWS Systems Manager Parameter Store에 DB_PASSWORD를 SecureString 값으로 저장한 다음 환경 변수에서 DB_PASSWORD를 제거합니다.` },
    { k:'D', en:`Move the environment variables to the 'db-deploy-bucket' Amazon S3 bucket, add a prebuild stage to download, then export the variables.`, ko:`환경 변수를 'db-deploy-bucket' Amazon S3 버킷으로 이동하고, 다운로드할 사전 빌드 단계를 추가한 다음 변수를 내보냅니다.` },
    { k:'E', en:`Use AWS Systems Manager run command versus scp and ssh commands directly to the instance.`, ko:`인스턴스에 직접 scp 및 ssh 명령을 사용하는 대신 AWS Systems Manager Run Command를 사용합니다.` },
    { k:'F', en:`Scramble the environment variables using XOR followed by Base64, add a section to install, and then run XOR and Base64 to the build phase.`, ko:`XOR을 사용한 후 Base64를 사용하여 환경 변수를 섞고 설치할 섹션을 추가한 다음 XOR과 Base64를 빌드 단계에 실행합니다.` },
  ],
  answer: ['B','C','E'],
  vote: '81% BCE',
  explain: `<p><span class="mark-ok">✅ B — IAM 역할 사용, 액세스 키 제거</span></p><p>환경 변수에 AWS_ACCESS_KEY_ID와 AWS_SECRET_ACCESS_KEY를 하드코딩하는 것은 보안 위험입니다. CodeBuild 프로젝트 서비스 역할(IAM Role)에 필요한 권한을 부여하면 자격 증명 없이 AWS 서비스에 접근할 수 있습니다.</p>
<p><span class="mark-ok">✅ C — DB 비밀번호를 SSM Parameter Store SecureString으로 관리</span></p><p>평문 DB_PASSWORD를 환경 변수에 저장하는 것은 위험합니다. SSM Parameter Store의 SecureString으로 저장하고 빌드 시 동적으로 참조하면 보안이 강화됩니다.</p>
<p><span class="mark-ok">✅ E — SSM Run Command 사용 (scp/ssh 대신)</span></p><p>scp와 ssh를 직접 사용하면 SSH 키 관리 및 포트 22 개방이 필요합니다. AWS Systems Manager Run Command를 사용하면 SSH 없이 안전하게 인스턴스에 명령을 실행할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CodeBuild는 관리형 서비스로, 빌드가 완료되면 컨테이너가 자동으로 삭제됩니다. 다른 사용자가 컨테이너 내부 파일을 볼 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — S3에 환경 변수를 저장하는 것은 SSM Parameter Store/Secrets Manager보다 보안이 약합니다.</p>
<p><span class="mark-no">❌ F</span> — XOR + Base64는 암호화가 아니며 보안을 제공하지 않습니다. 진정한 보안 솔루션이 아닙니다.</p>`,
  disc: [{ ans:'BCE (81%) vs ABC (19%)', txt:'보안 모범 사례: ①하드코딩 자격증명 제거 → IAM 역할(B), ②평문 비밀번호 제거 → SSM SecureString(C), ③SSH 제거 → SSM Run Command(E). A는 CodeBuild가 관리형이라 불필요.' }]
},
{
  n: 130,
  en: `A company has a legacy application. A DevOps engineer needs to automate the process of building the deployable artifact for the legacy application. The solution must store the deployable artifact in an existing Amazon S3 bucket for future deployments to reference.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?`,
  ko: `회사에 레거시 애플리케이션이 있습니다. DevOps 엔지니어는 레거시 애플리케이션의 배포 가능한 아티팩트를 빌드하는 프로세스를 자동화해야 합니다. 솔루션은 향후 배포에서 참조할 수 있도록 배포 가능한 아티팩트를 기존 Amazon S3 버킷에 저장해야 합니다.<br><br>가장 운영적으로 효율적인 방식으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a custom Docker image that contains all the dependencies for the legacy application. Store the custom Docker image in a new Amazon Elastic Container Registry (Amazon ECR) repository. Configure a new AWS CodeBuild project to use the custom Docker image to build the deployable artifact and to save the artifact to the S3 bucket.`, ko:`레거시 애플리케이션의 모든 종속성을 포함하는 사용자 지정 Docker 이미지를 만듭니다. 사용자 지정 Docker 이미지를 새 Amazon ECR 리포지토리에 저장합니다. 사용자 지정 Docker 이미지를 사용하여 배포 가능한 아티팩트를 빌드하고 아티팩트를 S3 버킷에 저장하도록 새 AWS CodeBuild 프로젝트를 구성합니다.` },
    { k:'B', en:`Launch a new Amazon EC2 instance. Install all the dependencies for the legacy application on the EC2 instance. Use the EC2 instance to build the deployable artifact and to save the artifact to the S3 bucket.`, ko:`새 Amazon EC2 인스턴스를 시작합니다. EC2 인스턴스에 레거시 애플리케이션의 모든 종속성을 설치합니다. EC2 인스턴스를 사용하여 배포 가능한 아티팩트를 빌드하고 아티팩트를 S3 버킷에 저장합니다.` },
    { k:'C', en:`Create a custom EC2 Image Builder image. Install all the dependencies for the legacy application on the image. Launch a new Amazon EC2 instance from the image. Use the new EC2 instance to build the deployable artifact and to save the artifact to the S3 bucket.`, ko:`사용자 지정 EC2 Image Builder 이미지를 만듭니다. 이미지에 레거시 애플리케이션의 모든 종속성을 설치합니다. 이미지에서 새 Amazon EC2 인스턴스를 시작합니다. 새 EC2 인스턴스를 사용하여 배포 가능한 아티팩트를 빌드하고 아티팩트를 S3 버킷에 저장합니다.` },
    { k:'D', en:`Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster with an AWS Fargate profile that runs in multiple Availability Zones. Create a custom Docker image that contains all the dependencies for the legacy application. Store the custom Docker image in a new Amazon Elastic Container Registry (Amazon ECR) repository. Use the custom Docker image inside the EKS cluster to build the deployable artifact and to save the artifact to the S3 bucket.`, ko:`여러 가용성 영역에서 실행되는 AWS Fargate 프로필이 있는 Amazon EKS 클러스터를 만듭니다. 레거시 애플리케이션의 모든 종속성을 포함하는 사용자 지정 Docker 이미지를 만듭니다. 사용자 지정 Docker 이미지를 새 Amazon ECR 리포지토리에 저장합니다. EKS 클러스터 내부의 사용자 지정 Docker 이미지를 사용하여 배포 가능한 아티팩트를 빌드하고 아티팩트를 S3 버킷에 저장합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 사용자 지정 Docker 이미지 + ECR + CodeBuild</span></p><p>레거시 애플리케이션의 모든 종속성을 Docker 이미지에 패키징하면 일관된 빌드 환경이 보장됩니다. AWS CodeBuild는 완전 관리형 빌드 서비스로 서버 관리 없이 자동화된 빌드를 수행하고 결과물을 S3에 저장합니다. 이것이 운영 효율성이 가장 높은 방법입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — EC2 인스턴스를 직접 관리하는 것은 운영 오버헤드가 높습니다. 인스턴스 유지보수, 패치 등이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — EC2 Image Builder + EC2 인스턴스 방식도 서버 관리 오버헤드가 있습니다. CodeBuild보다 운영 효율성이 낮습니다.</p>
<p><span class="mark-no">❌ D</span> — EKS + Fargate는 단순 빌드 작업에 지나치게 복잡하고 비용이 높습니다. 빌드 자동화에는 CodeBuild가 적합합니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'아티팩트 빌드 자동화 = CodeBuild(완전 관리형, 서버리스). 레거시 종속성 = 사용자 지정 Docker 이미지(ECR에 저장). 운영 효율성 = 서버 관리 불필요 + 자동 확장.' }]
}
];
