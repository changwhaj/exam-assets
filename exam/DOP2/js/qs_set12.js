window.QS_SET12 = [
{
  n: 111,
  en: `A company uses a series of individual Amazon CloudFormation templates to deploy its multi-Region applications. These templates must be deployed in a specific order. The company is making more changes to the templates than previously expected and wants to deploy new templates more efficiently. Additionally, the data engineering team must be notified of all changes to the templates.<br><br>What should the company do to accomplish these goals?`,
  ko: `한 회사는 다중 리전 애플리케이션을 배포하기 위해 일련의 개별 Amazon CloudFormation 템플릿을 사용합니다. 이러한 템플릿은 특정 순서로 배포해야 합니다. 회사는 예상보다 더 많은 템플릿 변경 작업을 하고 있으며 새로운 템플릿을 보다 효율적으로 배포하려고 합니다. 또한 데이터 엔지니어링 팀에 템플릿의 모든 변경 사항을 알려야 합니다.<br><br>이러한 목표를 달성하기 위해 회사는 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS Lambda function to deploy the CloudFormation templates in the required order. Use stack policies to alert the data engineering team.`, ko:`필요한 순서대로 CloudFormation 템플릿을 배포하기 위한 AWS Lambda 함수를 만듭니다. 스택 정책을 사용하여 데이터 엔지니어링 팀에 경고합니다.` },
    { k:'B', en:`Host the CloudFormation templates in Amazon S3. Use Amazon S3 events to directly trigger CloudFormation updates and Amazon SNS notifications.`, ko:`Amazon S3에서 CloudFormation 템플릿을 호스팅합니다. Amazon S3 이벤트를 사용하여 CloudFormation 업데이트 및 Amazon SNS 알림을 직접 트리거합니다.` },
    { k:'C', en:`Implement CloudFormation StackSets and use drift detection to trigger update alerts to the data engineering team.`, ko:`CloudFormation StackSets를 구현하고 드리프트 감지를 사용하여 데이터 엔지니어링 팀에 업데이트 알림을 트리거합니다.` },
    { k:'D', en:`Leverage CloudFormation nested stacks and stack sets for deployments. Use Amazon SNS to notify the data engineering team.`, ko:`배포를 위해 CloudFormation 중첩 스택과 스택 세트를 활용합니다. Amazon SNS를 사용하여 데이터 엔지니어링 팀에 알립니다.` },
  ],
  answer: ['D'],
  vote: '94% D',
  explain: `<p><span class="mark-ok">✅ D — CloudFormation 중첩 스택 + StackSets + SNS</span></p><p>중첩 스택(Nested Stacks)은 여러 상호 종속 템플릿을 올바른 순서로 관리하고 배포하는 것을 단순화합니다. StackSets는 단일 작업으로 여러 리전에 스택을 생성·업데이트·삭제할 수 있어 다중 리전 배포를 효율화합니다. Amazon SNS를 통해 CloudFormation 스택 변경 사항을 데이터 엔지니어링 팀에 자동으로 알릴 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 스택 정책(Stack Policy)은 리소스 업데이트를 보호하는 용도이며, 알림을 보내는 기능이 없습니다.</p>
<p><span class="mark-no">❌ B</span> — S3 이벤트로 CloudFormation 업데이트를 직접 트리거할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 드리프트 감지(Drift Detection)는 배포된 리소스와 템플릿 간의 차이를 감지하는 것으로, 템플릿 변경 알림을 보내는 내장 솔루션이 없습니다. 또한 특정 배포 순서를 보장하지 않습니다.</p>`,
  disc: [{ ans:'D (94%)', txt:'중첩 스택으로 배포 순서 보장, StackSets로 다중 리전 효율화, SNS로 알림. C의 드리프트 감지는 배포된 스택의 구성 변경을 감지하는 것이지 템플릿 자체 변경 알림이 아님.' }]
},
{
  n: 112,
  en: `A DevOps engineer has implemented a CI/CD pipeline to deploy an AWS CloudFormation template that provisions a web application. The web application consists of an Application Load Balancer (ALB), a target group, a launch template that uses an Amazon Linux 2 AMI, an Auto Scaling group of Amazon EC2 instances, a security group, and an Amazon RDS for MySQL database. The launch template includes user data that specifies a script to install and start the application.<br><br>The initial deployment of the application was successful. The DevOps engineer made changes to update the version of the application with the user data. The CI/CD pipeline has deployed a new version of the template. However, the health checks on the ALB are now failing. The health checks have marked all targets as unhealthy.<br><br>During investigation, the DevOps engineer notices that the CloudFormation stack has a status of UPDATE_COMPLETE. However, when the DevOps engineer connects to one of the EC2 instances and checks /var/log/messages, the DevOps engineer notices that the Apache web server failed to start successfully because of a configuration error.<br><br>How can the DevOps engineer ensure that the CloudFormation deployment will fail if the user data fails to successfully finish running?`,
  ko: `DevOps 엔지니어가 웹 애플리케이션을 프로비저닝하는 AWS CloudFormation 템플릿을 배포하기 위한 CI/CD 파이프라인을 구현했습니다. 웹 애플리케이션은 ALB(Application Load Balancer), 대상 그룹, Amazon Linux 2 AMI를 사용하는 시작 템플릿, Amazon EC2 인스턴스의 Auto Scaling 그룹, 보안 그룹, MySQL 데이터베이스용 Amazon RDS로 구성됩니다. 시작 템플릿에는 애플리케이션을 설치하고 시작하는 스크립트를 지정하는 사용자 데이터가 포함됩니다.<br><br>애플리케이션의 초기 배포는 성공적이었습니다. DevOps 엔지니어는 사용자 데이터로 애플리케이션 버전을 업데이트하기 위해 변경했습니다. CI/CD 파이프라인은 템플릿의 새 버전을 배포했습니다. 그러나 ALB의 상태 검사가 이제 실패하고 있습니다. 상태 검사에서 모든 대상이 비정상으로 표시되었습니다.<br><br>조사 중에 DevOps 엔지니어는 CloudFormation 스택의 상태가 UPDATE_COMPLETE임을 알아챘습니다. 하지만 EC2 인스턴스 중 하나에 연결하여 /var/log/messages를 확인하면 구성 오류로 인해 Apache 웹 서버가 성공적으로 시작되지 않았다는 것을 알게 됩니다.<br><br>DevOps 엔지니어는 사용자 데이터가 성공적으로 실행을 완료하지 못하면 CloudFormation 배포가 실패하도록 어떻게 보장할 수 있습니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use the cfn-signal helper script to signal success or failure to CloudFormation. Use the WaitOnResourceSignals update policy within the CloudFormation template. Set an appropriate timeout for the update policy.`, ko:`cfn-signal 헬퍼 스크립트를 사용하여 CloudFormation에 성공 또는 실패를 알립니다. CloudFormation 템플릿 내에서 WaitOnResourceSignals 업데이트 정책을 사용합니다. 업데이트 정책에 대한 적절한 시간 초과를 설정합니다.` },
    { k:'B', en:`Create an Amazon CloudWatch alarm for the UnhealthyHostCount metric. Include an appropriate alarm threshold for the target group. Create an Amazon Simple Notification Service (Amazon SNS) topic as the target to signal success or failure to CloudFormation.`, ko:`UnhealthyHostCount 메트릭에 대한 Amazon CloudWatch 알람을 만듭니다. 대상 그룹에 대한 적절한 알람 임계값을 포함합니다. Amazon SNS 주제를 대상으로 만들어 CloudFormation에 성공 또는 실패를 알립니다.` },
    { k:'C', en:`Create a lifecycle hook on the Auto Scaling group by using the AWS::AutoScaling::LifecycleHook resource. Create an Amazon Simple Notification Service (Amazon SNS) topic as the target to signal success or failure to CloudFormation. Set an appropriate timeout on the lifecycle hook.`, ko:`AWS::AutoScaling::LifecycleHook 리소스를 사용하여 Auto Scaling 그룹에 라이프사이클 후크를 만듭니다. Amazon SNS 주제를 대상으로 만들어 CloudFormation에 성공 또는 실패를 알립니다. 라이프사이클 후크에 적절한 시간 초과를 설정합니다.` },
    { k:'D', en:`Use the Amazon CloudWatch agent to stream the cloud-init logs. Create a subscription filter that includes an AWS Lambda function with an appropriate invocation timeout. Configure the Lambda function to use the SignalResource API operation to signal success or failure to CloudFormation.`, ko:`Amazon CloudWatch 에이전트를 사용하여 cloud-init 로그를 스트리밍합니다. 적절한 호출 시간 제한이 있는 AWS Lambda 함수를 포함하는 구독 필터를 만듭니다. Lambda 함수를 구성하여 SignalResource API 작업을 사용하여 CloudFormation에 성공 또는 실패를 알립니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — cfn-signal + WaitOnResourceSignals 정책</span></p><p>cfn-signal 헬퍼 스크립트는 사용자 데이터 스크립트 실행 결과를 CloudFormation에 알리는 공식 메커니즘입니다. Auto Scaling 그룹에 WaitOnResourceSignals 업데이트 정책을 설정하면 CloudFormation은 지정된 수의 성공 신호를 받을 때까지 업데이트 완료로 간주하지 않습니다. 사용자 데이터 스크립트 마지막에 <code>cfn-signal -e $? ...</code>를 추가하면 스크립트 실패 시 CloudFormation 배포가 실패하고 롤백됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — CloudWatch 알람은 배포 후 모니터링에 사용되지만, 배포 중 실패를 CloudFormation에 신호로 보내는 공식 메커니즘이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 라이프사이클 후크는 인스턴스 시작/종료 중 작업을 수행하는 데 사용되지만, 사용자 데이터 실패를 CloudFormation에 직접 신호로 보내지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 복잡한 솔루션이며, A의 cfn-signal이 이미 이 목적을 위해 설계된 표준 방법입니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'cfn-signal은 CloudFormation 사용자 데이터 통합의 표준 패턴. 스크립트 끝에 cfn-signal -e $?를 추가하고 WaitOnResourceSignals를 활성화하면 실패 시 자동 롤백.' }]
},
{
  n: 113,
  en: `A company has a data ingestion application that runs across multiple AWS accounts. The accounts are in an organization in AWS Organizations. The company needs to monitor the application and consolidate access to the application. Currently, the company is running the application on Amazon EC2 instances from several Auto Scaling groups. The EC2 instances have no access to the internet because the data is sensitive. Engineers have deployed the necessary VPC endpoints. The EC2 instances run a custom AMI that is built specifically for the application.<br><br>To maintain and troubleshoot the application, system administrators need the ability to log in to the EC2 instances. This access must be automated and controlled centrally. The company's security team must receive a notification whenever the instances are accessed.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사에 여러 AWS 계정에서 실행되는 데이터 수집 애플리케이션이 있습니다. 계정은 AWS Organizations의 조직에 있습니다. 이 회사는 애플리케이션을 모니터링하고 애플리케이션에 대한 액세스를 통합해야 합니다. 현재 이 회사는 여러 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 애플리케이션을 실행하고 있습니다. 데이터가 민감하기 때문에 EC2 인스턴스는 인터넷에 액세스할 수 없습니다. 엔지니어는 필요한 VPC 엔드포인트를 배포했습니다. EC2 인스턴스는 애플리케이션을 위해 특별히 구축된 사용자 지정 AMI를 실행합니다.<br><br>애플리케이션을 유지 관리하고 문제를 해결하려면 시스템 관리자가 EC2 인스턴스에 로그인할 수 있어야 합니다. 이 액세스는 자동화되어야 하며 중앙에서 제어되어야 합니다. 인스턴스에 액세스할 때마다 회사의 보안 팀은 알림을 받아야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon EventBridge rule to send notifications to the security team whenever a user logs in to an EC2 instance. Use EC2 Instance Connect to log in to the instances. Deploy Auto Scaling groups by using AWS CloudFormation. Use the cfn-init helper script to deploy appropriate VPC routes for external access. Rebuild the custom AMI so that the custom AMI includes AWS Systems Manager Agent.`, ko:`사용자가 EC2 인스턴스에 로그인할 때마다 보안 팀에 알림을 보내는 Amazon EventBridge 규칙을 만듭니다. EC2 Instance Connect를 사용하여 인스턴스에 로그인합니다. AWS CloudFormation을 사용하여 Auto Scaling 그룹을 배포합니다. cfn-init 헬퍼 스크립트를 사용하여 외부 액세스를 위한 적절한 VPC 경로를 배포합니다. 사용자 지정 AMI에 AWS Systems Manager Agent가 포함되도록 사용자 지정 AMI를 다시 빌드합니다.` },
    { k:'B', en:`Deploy a NAT gateway and a bastion host that has internet access. Create a security group that allows incoming traffic on all the EC2 instances from the bastion host. Install AWS Systems Manager Agent on all the EC2 instances. Use Auto Scaling group lifecycle hooks for monitoring and auditing access. Use Systems Manager Session Manager to log in to the instances. Send logs to a log group in Amazon CloudWatch Logs. Export data to Amazon S3 for auditing. Send notifications to the security team by using S3 event notifications.`, ko:`인터넷에 액세스할 수 있는 NAT 게이트웨이와 베스천 호스트를 배포합니다. 베스천 호스트에서 모든 EC2 인스턴스로 들어오는 트래픽을 허용하는 보안 그룹을 만듭니다. 모든 EC2 인스턴스에 AWS Systems Manager Agent를 설치합니다. Auto Scaling 그룹 라이프사이클 후크를 사용하여 액세스를 모니터링하고 감사합니다. Systems Manager Session Manager를 사용하여 인스턴스에 로그인합니다. Amazon CloudWatch Logs의 로그 그룹으로 로그를 보냅니다. 감사를 위해 Amazon S3로 데이터를 내보냅니다. S3 이벤트 알림을 사용하여 보안 팀에 알림을 보냅니다.` },
    { k:'C', en:`Use EC2 Image Builder to rebuild the custom AMI. Include the most recent version of AWS Systems Manager Agent in the image. Configure the Auto Scaling group to attach the AmazonSSMManagedInstanceCore role to all the EC2 instances. Use Systems Manager Session Manager to log in to the instances. Enable logging of session details to Amazon S3. Create an S3 event notification for new file uploads to send a message to the security team through an Amazon Simple Notification Service (Amazon SNS) topic.`, ko:`EC2 Image Builder를 사용하여 사용자 지정 AMI를 다시 빌드합니다. 이미지에 최신 버전의 AWS Systems Manager Agent를 포함합니다. 모든 EC2 인스턴스에 AmazonSSMManagedInstanceCore 역할을 연결하도록 Auto Scaling 그룹을 구성합니다. Systems Manager Session Manager를 사용하여 인스턴스에 로그인합니다. Amazon S3에 세션 세부 정보 로깅을 활성화합니다. 새 파일 업로드에 대한 S3 이벤트 알림을 만들어 Amazon SNS 주제를 통해 보안 팀에 메시지를 보냅니다.` },
    { k:'D', en:`Use AWS Systems Manager Automation to build Systems Manager Agent into the custom AMI. Configure AWS Config to attach an SCP to the root organization account to allow the EC2 instances to connect to Systems Manager. Use Systems Manager Session Manager to log in to the instances. Enable logging of session details to Amazon S3. Create an S3 event notification for new file uploads to send a message to the security team through an Amazon Simple Notification Service (Amazon SNS) topic.`, ko:`AWS Systems Manager Automation을 사용하여 Systems Manager Agent를 사용자 지정 AMI에 빌드합니다. AWS Config를 구성하여 EC2 인스턴스가 Systems Manager에 연결할 수 있도록 루트 조직 계정에 SCP를 연결합니다. Systems Manager Session Manager를 사용하여 인스턴스에 로그인합니다. Amazon S3에 세션 세부 정보 로깅을 활성화합니다. 새 파일 업로드에 대한 S3 이벤트 알림을 만들어 Amazon SNS 주제를 통해 보안 팀에 메시지를 보냅니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — EC2 Image Builder + SSM Session Manager + S3 로깅 + SNS</span></p><p>EC2 인터넷 연결이 없으므로 베스천 호스트나 EC2 Instance Connect는 사용 불가합니다. EC2 Image Builder로 SSM Agent가 포함된 AMI를 재빌드하고, AmazonSSMManagedInstanceCore 역할을 Auto Scaling 그룹에 연결하면 VPC 엔드포인트를 통해 Session Manager로 인스턴스에 접근할 수 있습니다. S3에 세션 로그를 저장하고 S3 이벤트 알림으로 SNS를 통해 보안 팀에 알림을 보내면 모든 요구사항이 충족됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — EC2 Instance Connect는 인터넷 연결이 없는 환경에서 작동하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — NAT 게이트웨이와 베스천 호스트를 추가하면 인터넷 연결이 없다는 보안 요구사항을 위반합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Config는 SCP를 연결하는 데 사용할 수 없습니다. 또한 SCP는 권한을 허용하는 것이 아니라 거부하는 데 사용됩니다. EC2 Image Builder 대신 SSM Automation으로 AMI를 빌드하는 것도 적절하지 않습니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'인터넷 없는 환경 = SSM Session Manager(VPC 엔드포인트 이미 배포됨). EC2 Image Builder로 SSM Agent 포함 AMI 재빌드, IAM 역할 연결, S3 세션 로그 + SNS 알림이 완전한 솔루션.' }]
},
{
  n: 114,
  en: `A company uses Amazon S3 to store proprietary information. The development team creates buckets for new projects on a daily basis. The security team wants to ensure that all existing and future buckets have encryption, logging, and versioning enabled. Additionally, no buckets should ever be publicly read or write accessible.<br><br>What should a DevOps engineer do to meet these requirements?`,
  ko: `한 회사가 Amazon S3를 사용하여 독점 정보를 저장합니다. 개발 팀은 매일 새로운 프로젝트를 위한 버킷을 만듭니다. 보안 팀은 모든 기존 및 미래 버킷에 암호화, 로깅 및 버전 관리가 활성화되어 있는지 확인하려고 합니다. 또한 어떤 버킷도 공개적으로 읽거나 쓸 수 있는 권한이 없어야 합니다.<br><br>DevOps 엔지니어는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Enable AWS CloudTrail and configure automatic remediation using AWS Lambda.`, ko:`AWS CloudTrail을 활성화하고 AWS Lambda를 사용하여 자동 수정을 구성합니다.` },
    { k:'B', en:`Enable AWS Config rules and configure automatic remediation using AWS Systems Manager documents.`, ko:`AWS Config 규칙을 활성화하고 AWS Systems Manager 문서를 사용하여 자동 수정을 구성합니다.` },
    { k:'C', en:`Enable AWS Trusted Advisor and configure automatic remediation using Amazon EventBridge.`, ko:`AWS Trusted Advisor를 활성화하고 Amazon EventBridge를 사용하여 자동 수정을 구성합니다.` },
    { k:'D', en:`Enable AWS Systems Manager and configure automatic remediation using Systems Manager documents.`, ko:`AWS Systems Manager를 활성화하고 Systems Manager 문서를 사용하여 자동 수정을 구성합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — AWS Config 규칙 + Systems Manager 자동 수정</span></p><p>AWS Config는 리소스 구성을 평가하는 규칙을 지원합니다. S3 버킷에 대한 관리형 규칙(s3-bucket-server-side-encryption-enabled, s3-bucket-logging-enabled, s3-bucket-versioning-enabled, s3-bucket-public-read-prohibited 등)을 활성화하면 기존 및 신규 버킷을 지속적으로 모니터링할 수 있습니다. 비준수 리소스는 AWS Systems Manager Automation 문서를 사용하여 자동으로 수정할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudTrail은 API 호출 로깅 서비스이며, 리소스 구성 규정 준수 평가 기능이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — Trusted Advisor는 권장 사항을 제공하지만 실시간 규정 준수 모니터링과 자동 수정 기능이 Config보다 제한적입니다.</p>
<p><span class="mark-no">❌ D</span> — Systems Manager만으로는 S3 구성을 지속적으로 평가하는 규칙 기반 모니터링을 제공하지 않습니다. Config의 규칙 평가 엔진이 핵심입니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'AWS Config 관리형 규칙으로 S3 암호화/로깅/버전관리/공개접근 차단을 지속 모니터링. 비준수 시 SSM Automation Document로 자동 수정 — 이것이 Config 자동 수정의 표준 패턴.' }]
},
{
  n: 115,
  en: `A DevOps engineer is researching the least expensive way to implement an image batch processing cluster on AWS. The application cannot run in Docker containers and must run on Amazon EC2. The batch job stores checkpoint data on an NFS volume and can tolerate interruptions. Configuring the cluster software from a generic EC2 Linux image takes 30 minutes.<br><br>What is the MOST cost-effective solution?`,
  ko: `DevOps 엔지니어가 AWS에서 이미지 일괄 처리 클러스터를 구현하는 가장 저렴한 방법을 연구하고 있습니다. 이 애플리케이션은 Docker 컨테이너에서 실행할 수 없으며 Amazon EC2에서 실행해야 합니다. 일괄 작업은 NFS 볼륨에 체크포인트 데이터를 저장하며 중단을 허용할 수 있습니다. 일반 EC2 Linux 이미지에서 클러스터 소프트웨어를 구성하는 데 30분이 걸립니다.<br><br>가장 비용 효율적인 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use Amazon EFS for checkpoint data. To complete the job, use an EC2 Auto Scaling group and an On-Demand pricing model to provision EC2 instances temporarily.`, ko:`체크포인트 데이터에 Amazon EFS를 사용합니다. 작업을 완료하려면 EC2 Auto Scaling 그룹과 On-Demand 가격 책정 모델을 사용하여 EC2 인스턴스를 임시로 프로비저닝합니다.` },
    { k:'B', en:`Use GlusterFS on EC2 instances for checkpoint data. To run the batch job, configure EC2 instances manually. When the job completes, shut down the instances manually.`, ko:`체크포인트 데이터에 대해 EC2 인스턴스에서 GlusterFS를 사용합니다. 일괄 작업을 실행하려면 EC2 인스턴스를 수동으로 구성합니다. 작업이 완료되면 인스턴스를 수동으로 종료합니다.` },
    { k:'C', en:`Use Amazon EFS for checkpoint data. Use EC2 Fleet to launch EC2 Spot Instances, and utilize user data to configure the EC2 Linux instance on startup.`, ko:`체크포인트 데이터에 Amazon EFS를 사용합니다. EC2 Fleet를 사용하여 EC2 Spot 인스턴스를 시작하고, 사용자 데이터를 활용하여 시작 시 EC2 Linux 인스턴스를 구성합니다.` },
    { k:'D', en:`Use Amazon EFS for checkpoint data. Use EC2 Fleet to launch EC2 Spot Instances. Create a custom AMI for the cluster and use the latest AMI when creating instances.`, ko:`체크포인트 데이터에 Amazon EFS를 사용합니다. EC2 Fleet를 사용하여 EC2 Spot 인스턴스를 시작합니다. 클러스터에 대한 사용자 지정 AMI를 만들고 인스턴스를 만들 때 최신 AMI를 사용합니다.` },
  ],
  answer: ['D'],
  vote: '81% D',
  explain: `<p><span class="mark-ok">✅ D — EFS + EC2 Fleet Spot 인스턴스 + 사용자 지정 AMI</span></p><p>"중단을 허용할 수 있다"는 것은 Spot 인스턴스 사용이 적합함을 의미합니다. 사용자 지정 AMI에 클러스터 소프트웨어를 미리 포함하면 인스턴스 시작 시 30분 구성 시간을 제거할 수 있어 비용이 절감됩니다. 여러 번의 스케일링 이벤트가 발생하면 각 인스턴스마다 30분의 비용이 낭비되므로, 미리 구성된 AMI가 장기적으로 더 비용 효율적입니다. Amazon EFS는 NFS 볼륨 역할을 하여 체크포인트 데이터를 저장합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — On-Demand 가격은 Spot 인스턴스보다 비용이 높습니다.</p>
<p><span class="mark-no">❌ B</span> — 수동 구성과 종료는 비효율적이며 비용 최적화가 없습니다.</p>
<p><span class="mark-no">❌ C</span> — Spot 인스턴스는 올바르지만, 사용자 데이터로 매 시작마다 30분 구성이 필요해 비용이 더 발생합니다. 사용자 지정 AMI(D)가 더 비용 효율적입니다.</p>`,
  disc: [{ ans:'D (81%) vs C', txt:'핵심: 30분 부트스트래핑 × 스케일 횟수 = 낭비 비용. 사용자 지정 AMI로 구성 시간 제거가 장기적으로 더 경제적. C는 Spot 사용은 좋지만 매번 30분 구성 비용 발생.' }]
},
{
  n: 116,
  en: `A company recently migrated its legacy application from on-premises to AWS. The application is hosted on Amazon EC2 instances behind an Application Load Balancer, which is behind Amazon API Gateway. The company wants to ensure users experience minimal disruptions during any deployment of a new version of the application. The company also wants to ensure it can quickly roll back updates if there is an issue.<br><br>Which solution will meet these requirements with MINIMAL changes to the application?`,
  ko: `한 회사가 최근 온프레미스에서 AWS로 레거시 애플리케이션을 마이그레이션했습니다. 이 애플리케이션은 Amazon API Gateway 뒤에 있는 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 호스팅됩니다. 이 회사는 새 버전의 애플리케이션을 배포하는 동안 사용자가 최소한의 중단을 경험하도록 하려고 합니다. 또한 문제가 있는 경우 업데이트를 신속하게 롤백할 수 있도록 하려고 합니다.<br><br>애플리케이션에 대한 최소한의 변경으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Introduce changes as a separate environment parallel to the existing one. Configure API Gateway to use a canary release deployment to send a small subset of user traffic to the new environment.`, ko:`기존 환경과 병행되는 별도의 환경으로 변경 사항을 도입합니다. API Gateway를 구성하여 카나리 릴리스 배포를 사용해 사용자 트래픽의 작은 하위 집합을 새 환경으로 보냅니다.` },
    { k:'B', en:`Introduce changes as a separate environment parallel to the existing one. Update the application's DNS alias records to point to the new environment.`, ko:`기존 환경과 병행되는 별도의 환경으로 변경 사항을 도입합니다. 새 환경을 가리키도록 애플리케이션의 DNS 별칭 레코드를 업데이트합니다.` },
    { k:'C', en:`Introduce changes as a separate target group behind the existing Application Load Balancer. Configure API Gateway to route user traffic to the new target group in steps.`, ko:`기존 Application Load Balancer 뒤에 별도의 대상 그룹으로 변경 사항을 도입합니다. API Gateway를 구성하여 사용자 트래픽을 새 대상 그룹으로 단계적으로 라우팅합니다.` },
    { k:'D', en:`Introduce changes as a separate target group behind the existing Application Load Balancer. Configure API Gateway to route all traffic to the Application Load Balancer, which then sends the traffic to the new target group.`, ko:`기존 Application Load Balancer 뒤에 별도의 대상 그룹으로 변경 사항을 도입합니다. 모든 트래픽을 Application Load Balancer로 라우팅하도록 API Gateway를 구성한 다음, 트래픽을 새 대상 그룹으로 보냅니다.` },
  ],
  answer: ['A'],
  vote: '79% A',
  explain: `<p><span class="mark-ok">✅ A — 병렬 환경 + API Gateway 카나리 릴리스</span></p><p>API Gateway는 카나리 릴리스 배포를 기본 지원합니다. 기존 환경과 병렬로 새 환경을 구축하고, API Gateway에서 카나리 설정으로 소량의 트래픽을 새 환경으로 라우팅합니다. 이 방식은 최소한의 중단으로 점진적 롤아웃이 가능하며, 문제 발생 시 카나리 트래픽을 즉시 0%로 설정하여 신속한 롤백이 가능합니다. 애플리케이션 자체 변경 없이 API Gateway 설정만으로 구현됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — DNS 별칭 레코드 업데이트는 TTL 캐시로 인해 즉각적인 롤백이 어렵습니다.</p>
<p><span class="mark-no">❌ C</span> — API Gateway는 단순히 ALB로 트래픽을 전달하며, ALB 내 대상 그룹 간 단계적 트래픽 분배를 API Gateway가 직접 제어하는 기능은 제한적입니다.</p>
<p><span class="mark-no">❌ D</span> — 모든 트래픽을 한 번에 새 대상 그룹으로 전환하는 것은 "최소한의 중단" 요구사항에 부합하지 않습니다.</p>`,
  disc: [{ ans:'A (79%)', txt:'API Gateway 카나리 배포는 별도 단계를 생성하고 % 트래픽을 조절하는 기능을 제공. 병렬 환경 + 트래픽 분할 + 즉각 롤백 가능 = 최소 중단 + 최소 변경 조건 충족.' }]
},
{
  n: 117,
  en: `A company is storing 100 GB of log data in .csv format in an Amazon S3 bucket. SQL developers want to query this data and generate graphs to visualize it. The SQL developers also need an efficient, automated way to store metadata from the .csv file.<br><br>Which combination of steps will meet these requirements with the LEAST amount of effort? (Choose three.)`,
  ko: `한 회사가 Amazon S3 버킷에 .csv 형식으로 100GB의 로그 데이터를 저장하고 있습니다. SQL 개발자는 이 데이터를 쿼리하고 그래프를 생성하여 시각화하려고 합니다. SQL 개발자는 또한 .csv 파일의 메타데이터를 저장하는 효율적이고 자동화된 방법이 필요합니다.<br><br>최소한의 노력으로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (세 가지 선택)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Filter the data through AWS X-Ray to visualize the data.`, ko:`AWS X-Ray를 통해 데이터를 필터링하여 데이터를 시각화합니다.` },
    { k:'B', en:`Filter the data through Amazon QuickSight to visualize the data.`, ko:`Amazon QuickSight를 통해 데이터를 필터링하여 데이터를 시각화합니다.` },
    { k:'C', en:`Query the data with Amazon Athena.`, ko:`Amazon Athena를 사용하여 데이터를 쿼리합니다.` },
    { k:'D', en:`Query the data with Amazon Redshift.`, ko:`Amazon Redshift로 데이터를 쿼리합니다.` },
    { k:'E', en:`Use the AWS Glue Data Catalog as the persistent metadata store.`, ko:`AWS Glue 데이터 카탈로그를 영구 메타데이터 저장소로 사용합니다.` },
    { k:'F', en:`Use Amazon DynamoDB as the persistent metadata store.`, ko:`Amazon DynamoDB를 영구 메타데이터 저장소로 사용합니다.` },
  ],
  answer: ['B','C','E'],
  vote: '100% BCE',
  explain: `<p><span class="mark-ok">✅ B — Amazon QuickSight로 시각화</span></p><p>QuickSight는 Athena와 직접 통합되어 SQL 쿼리 결과를 그래프와 대시보드로 시각화합니다.</p>
<p><span class="mark-ok">✅ C — Amazon Athena로 S3 데이터 쿼리</span></p><p>Athena는 서버리스 SQL 쿼리 서비스로, S3에 저장된 .csv 파일을 별도의 데이터 로딩 없이 직접 쿼리할 수 있습니다. 최소 노력으로 구현 가능합니다.</p>
<p><span class="mark-ok">✅ E — AWS Glue 데이터 카탈로그로 메타데이터 관리</span></p><p>Glue 데이터 카탈로그는 S3 버킷을 크롤링하여 .csv 파일의 스키마와 메타데이터를 자동으로 저장합니다. Athena는 Glue 데이터 카탈로그를 직접 참조합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — AWS X-Ray는 분산 추적 서비스이며 데이터 시각화 도구가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon Redshift는 데이터 웨어하우스로 데이터를 로드해야 하며, S3 직접 쿼리에 비해 더 많은 비용과 설정이 필요합니다.</p>
<p><span class="mark-no">❌ F</span> — DynamoDB는 NoSQL 데이터베이스로 .csv 파일 메타데이터 저장에 최적화되어 있지 않습니다. Athena는 DynamoDB를 직접 참조하지 않습니다.</p>`,
  disc: [{ ans:'BCE (100%)', txt:'S3 CSV 데이터 분석의 표준 서버리스 아키텍처: Glue 크롤러로 메타데이터 자동 수집 → Athena로 SQL 쿼리 → QuickSight로 시각화. 최소 설정, 서버리스, 비용 효율적.' }]
},
{
  n: 118,
  en: `A company deploys its corporate infrastructure on AWS across multiple AWS Regions and Availability Zones. The infrastructure is deployed on Amazon EC2 instances and connects with AWS IoT Greengrass devices. The company deploys additional resources on on-premises servers that are located in the corporate headquarters.<br><br>The company wants to reduce the overhead involved in maintaining and updating its resources. The company's DevOps team plans to use AWS Systems Manager to implement automated management and application of patches. The DevOps team confirms that Systems Manager is available in the Regions that the resources are deployed in. Systems Manager also is available in a Region near the corporate headquarters.<br><br>Which combination of steps must the DevOps team take to implement automated patch and configuration management across the company's EC2 instances, IoT devices, and on-premises infrastructure? (Choose three.)`,
  ko: `한 회사가 여러 AWS 리전 및 가용성 영역에 걸쳐 AWS에서 기업 인프라를 배포합니다. 인프라는 Amazon EC2 인스턴스에 배포되고 AWS IoT Greengrass 기기와 연결됩니다. 이 회사는 본사에 있는 온프레미스 서버에 추가 리소스를 배포합니다.<br><br>이 회사는 리소스 유지 관리 및 업데이트에 관련된 오버헤드를 줄이고자 합니다. DevOps 팀은 AWS Systems Manager를 사용하여 패치의 자동화된 관리 및 적용을 구현할 계획입니다. DevOps 팀은 리소스가 배포된 리전에서 Systems Manager를 사용할 수 있는지 확인합니다. Systems Manager는 본사 근처 리전에서도 사용할 수 있습니다.<br><br>회사의 EC2 인스턴스, IoT 기기 및 온프레미스 인프라에서 자동화된 패치 및 구성 관리를 구현하기 위해 DevOps 팀은 어떤 단계 조합을 취해야 합니까? (세 가지 선택)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Apply tags to all the EC2 instances, AWS IoT Greengrass devices, and on-premises servers. Use Systems Manager Session Manager to push patches to all the tagged devices.`, ko:`모든 EC2 인스턴스, AWS IoT Greengrass 디바이스 및 온프레미스 서버에 태그를 적용합니다. Systems Manager Session Manager를 사용하여 태그가 지정된 모든 디바이스에 패치를 푸시합니다.` },
    { k:'B', en:`Use Systems Manager Run Command to schedule patching for the EC2 instances, AWS IoT Greengrass devices, and on-premises servers.`, ko:`Systems Manager Run Command를 사용하여 EC2 인스턴스, AWS IoT Greengrass 디바이스 및 온프레미스 서버에 대한 패치를 예약합니다.` },
    { k:'C', en:`Use Systems Manager Patch Manager to schedule patching for the EC2 instances, AWS IoT Greengrass devices, and on-premises servers as a Systems Manager maintenance window task.`, ko:`Systems Manager Patch Manager를 사용하여 EC2 인스턴스, AWS IoT Greengrass 디바이스 및 온프레미스 서버에 대한 패치를 Systems Manager 유지 관리 창 작업으로 예약합니다.` },
    { k:'D', en:`Configure Amazon EventBridge to monitor Systems Manager Patch Manager for updates to patch baselines. Associate Systems Manager Run Command with the event to initiate a patch action for all EC2 instances, AWS IoT Greengrass devices, and on-premises servers.`, ko:`Amazon EventBridge를 구성하여 Systems Manager Patch Manager에서 패치 기준선 업데이트를 모니터링합니다. Systems Manager Run Command를 이벤트와 연결하여 모든 EC2 인스턴스, AWS IoT Greengrass 디바이스 및 온프레미스 서버에 대한 패치 작업을 시작합니다.` },
    { k:'E', en:`Create an IAM instance profile for Systems Manager. Attach the instance profile to all the EC2 instances in the AWS account. For the AWS IoT Greengrass devices and on-premises servers, create an IAM service role for Systems Manager.`, ko:`Systems Manager에 대한 IAM 인스턴스 프로필을 만듭니다. 인스턴스 프로필을 AWS 계정의 모든 EC2 인스턴스에 연결합니다. AWS IoT Greengrass 디바이스와 온프레미스 서버의 경우 Systems Manager에 대한 IAM 서비스 역할을 만듭니다.` },
    { k:'F', en:`Generate a managed-instance activation. Use the Activation Code and Activation ID to install Systems Manager Agent (SSM Agent) on each server in the on-premises environment. Update the AWS IoT Greengrass IAM token exchange role. Use the role to deploy SSM Agent on all the IoT devices.`, ko:`관리형 인스턴스 활성화를 생성합니다. 활성화 코드와 활성화 ID를 사용하여 온프레미스 환경의 각 서버에 Systems Manager Agent(SSM Agent)를 설치합니다. AWS IoT Greengrass IAM 토큰 교환 역할을 업데이트합니다. 이 역할을 사용하여 모든 IoT 디바이스에 SSM Agent를 배포합니다.` },
  ],
  answer: ['C','E','F'],
  vote: '100% CEF',
  explain: `<p><span class="mark-ok">✅ C — Patch Manager + 유지 관리 창 작업</span></p><p>Systems Manager Patch Manager는 패치 기준선 정의 및 예약 패치 적용을 지원합니다. 유지 관리 창(Maintenance Window) 작업으로 설정하면 정해진 일정에 자동으로 패치가 적용됩니다.</p>
<p><span class="mark-ok">✅ E — EC2용 IAM 인스턴스 프로필, IoT/온프레미스용 IAM 서비스 역할</span></p><p>EC2에는 IAM 인스턴스 프로필, 비 EC2 리소스(IoT Greengrass, 온프레미스)에는 IAM 서비스 역할이 필요합니다.</p>
<p><span class="mark-ok">✅ F — 관리형 인스턴스 활성화 + SSM Agent 설치</span></p><p>온프레미스 서버에 SSM Agent를 설치하려면 관리형 인스턴스 활성화(Activation Code/ID)가 필요합니다. IoT Greengrass 디바이스에는 IAM 토큰 교환 역할을 통해 SSM Agent를 배포합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Session Manager는 대화형 셸 세션용이며, 패치 예약에 사용되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Run Command는 일회성 명령 실행에 사용되며, C(Patch Manager + 유지 관리 창)가 패치 예약에 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — EventBridge + Run Command로 패치 예약하는 것은 C보다 복잡하며, C에 이미 유지 관리 창이 포함됩니다.</p>`,
  disc: [{ ans:'CEF (100%)', txt:'SSM으로 이기종 환경(EC2+IoT+온프레미스) 패치 관리: EC2=인스턴스 프로필, 온프레미스=활성화 코드+SSM Agent, IoT=토큰 교환 역할. 패치 예약=Patch Manager+유지 관리 창.' }]
},
{
  n: 119,
  en: `A company is testing a web application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company uses a blue/green deployment process with immutable instances when deploying new software.<br><br>During testing, users are being automatically logged out of the application at random times. Testers also report that, when a new version of the application is deployed, all users are logged out. The development team needs a solution to ensure users remain logged in across scaling events and application deployments.<br><br>What is the MOST operationally efficient way to ensure users remain logged in?`,
  ko: `한 회사가 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 실행되는 웹 애플리케이션을 테스트하고 있습니다. 인스턴스는 여러 가용성 영역에 걸쳐 Auto Scaling 그룹에서 실행됩니다. 이 회사는 새 소프트웨어를 배포할 때 변경 불가능한 인스턴스가 있는 블루/그린 배포 프로세스를 사용합니다.<br><br>테스트 중에 사용자가 무작위 시간에 애플리케이션에서 자동으로 로그아웃됩니다. 테스터는 또한 애플리케이션의 새 버전이 배포될 때 모든 사용자가 로그아웃된다고 보고합니다. 개발 팀은 확장 이벤트와 애플리케이션 배포에서 사용자가 로그인 상태를 유지하도록 하는 솔루션이 필요합니다.<br><br>사용자가 로그인 상태를 유지하도록 하는 가장 운영 효율적인 방법은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Enable smart sessions on the load balancer and modify the application to check for an existing session.`, ko:`로드 밸런서에서 스마트 세션을 활성화하고 기존 세션을 확인하도록 애플리케이션을 수정합니다.` },
    { k:'B', en:`Enable session sharing on the load balancer and modify the application to read from the session store.`, ko:`로드 밸런서에서 세션 공유를 활성화하고 세션 저장소에서 읽도록 애플리케이션을 수정합니다.` },
    { k:'C', en:`Store user session information in an Amazon S3 bucket and modify the application to read session information from the bucket.`, ko:`Amazon S3 버킷에 사용자 세션 정보를 저장하고 버킷에서 세션 정보를 읽도록 애플리케이션을 수정합니다.` },
    { k:'D', en:`Modify the application to store user session information in an Amazon ElastiCache cluster.`, ko:`Amazon ElastiCache 클러스터에 사용자 세션 정보를 저장하도록 애플리케이션을 수정합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — Amazon ElastiCache를 세션 저장소로 사용</span></p><p>블루/그린 배포 시 인스턴스가 교체되고 스케일링 이벤트 시 인스턴스가 추가/제거되면 로컬 인스턴스에 저장된 세션이 소실됩니다. Amazon ElastiCache(Redis/Memcached)를 중앙 세션 저장소로 사용하면 어떤 인스턴스도 세션 데이터에 접근할 수 있습니다. 많은 웹 프레임워크가 Redis/Memcached 세션 저장소를 기본 지원합니다. S3(C)보다 지연 시간이 낮아 운영 효율성이 높습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — ALB에는 "스마트 세션" 기능이 없습니다. 스티키 세션(Sticky Session)은 있지만, 이는 특정 인스턴스에 세션을 고정하는 것으로 블루/그린 배포 시 여전히 로그아웃됩니다.</p>
<p><span class="mark-no">❌ B</span> — 로드 밸런서는 세션 데이터를 저장하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — S3는 높은 읽기 지연 시간과 비용으로 인해 세션 저장소로 적합하지 않습니다. ElastiCache가 더 운영 효율적입니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'분산 세션 관리의 표준: 외부 캐시(ElastiCache Redis/Memcached)에 세션 저장. 인스턴스 교체(블루/그린, 스케일링)와 무관하게 세션 유지. S3는 레이턴시 문제로 세션 저장에 부적합.' }]
},
{
  n: 120,
  en: `A DevOps engineer needs to configure a blue/green deployment for an existing three-tier application. The application runs on Amazon EC2 instances and uses an Amazon RDS database. The EC2 instances run behind an Application Load Balancer (ALB) and are in an Auto Scaling group.<br><br>The DevOps engineer has created a launch template and an Auto Scaling group for the blue environment. The DevOps engineer also has created a launch template and an Auto Scaling group for the green environment. Each Auto Scaling group deploys to a matching blue or green target group. The target group also specifies which software, blue or green, gets loaded on the EC2 instances. The ALB can be configured to send traffic to the blue environment's target group or the green environment's target group. An Amazon Route 53 record for www.example.com points to the ALB.<br><br>The deployment must move traffic all at once between the software on the blue environment's EC2 instances to the newly deployed software on the green environment's EC2 instances.<br><br>What should the DevOps engineer do to meet these requirements?`,
  ko: `DevOps 엔지니어는 기존 3계층 애플리케이션에 대한 블루/그린 배포를 구성해야 합니다. 애플리케이션은 Amazon EC2 인스턴스에서 실행되고 Amazon RDS 데이터베이스를 사용합니다. EC2 인스턴스는 ALB(Application Load Balancer) 뒤에서 실행되고 Auto Scaling 그룹에 있습니다.<br><br>DevOps 엔지니어는 블루 환경에 대한 시작 템플릿과 Auto Scaling 그룹을 만들었습니다. DevOps 엔지니어는 또한 그린 환경에 대한 시작 템플릿과 Auto Scaling 그룹을 만들었습니다. 각 Auto Scaling 그룹은 일치하는 블루 또는 그린 대상 그룹에 배포됩니다. 대상 그룹은 또한 EC2 인스턴스에 로드되는 블루 또는 그린 소프트웨어를 지정합니다. ALB는 트래픽을 블루 환경의 대상 그룹 또는 그린 환경의 대상 그룹으로 보내도록 구성할 수 있습니다. www.example.com의 Amazon Route 53 레코드는 ALB를 가리킵니다.<br><br>배포는 블루 환경의 EC2 인스턴스에 있는 소프트웨어와 그린 환경의 EC2 인스턴스에 새로 배포된 소프트웨어 간에 트래픽을 한 번에 모두 이동해야 합니다.<br><br>DevOps 엔지니어는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Start a rolling restart of the Auto Scaling group for the green environment to deploy the new software on the green environment's EC2 instances. When the rolling restart is complete, use an AWS CLI command to update the ALB to send traffic to the green environment's target group.`, ko:`그린 환경의 Auto Scaling 그룹의 롤링 재시작을 시작하여 그린 환경의 EC2 인스턴스에 새 소프트웨어를 배포합니다. 롤링 재시작이 완료되면 AWS CLI 명령을 사용하여 ALB를 업데이트하여 그린 환경의 대상 그룹으로 트래픽을 보냅니다.` },
    { k:'B', en:`Use an AWS CLI command to update the ALB to send traffic to the green environment's target group. Then start a rolling restart of the Auto Scaling group for the green environment to deploy the new software on the green environment's EC2 instances.`, ko:`AWS CLI 명령을 사용하여 ALB를 업데이트하여 트래픽을 그린 환경의 대상 그룹으로 보냅니다. 그런 다음 그린 환경의 Auto Scaling 그룹의 롤링 재시작을 시작하여 그린 환경의 EC2 인스턴스에 새 소프트웨어를 배포합니다.` },
    { k:'C', en:`Update the launch template to deploy the green environment's software on the blue environment's EC2 instances. Keep the target groups and Auto Scaling groups unchanged in both environments. Perform a rolling restart of the blue environment's EC2 instances.`, ko:`시작 템플릿을 업데이트하여 그린 환경의 소프트웨어를 블루 환경의 EC2 인스턴스에 배포합니다. 두 환경 모두에서 대상 그룹과 Auto Scaling 그룹을 변경하지 않습니다. 블루 환경의 EC2 인스턴스를 롤링 재시작합니다.` },
    { k:'D', en:`Start a rolling restart of the Auto Scaling group for the green environment to deploy the new software on the green environment's EC2 instances. When the rolling restart is complete, update the Route 53 DNS to point to the green environment's endpoint on the ALB.`, ko:`그린 환경의 Auto Scaling 그룹의 롤링 재시작을 시작하여 그린 환경의 EC2 인스턴스에 새 소프트웨어를 배포합니다. 롤링 재시작이 완료되면 Route 53 DNS를 업데이트하여 ALB에서 그린 환경의 엔드포인트를 가리킵니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 그린 환경 롤링 재시작 후 ALB 대상 그룹 전환</span></p><p>올바른 순서: ① 그린 환경의 ASG 롤링 재시작으로 새 소프트웨어를 그린 인스턴스에 배포 → ② 새 소프트웨어 배포 완료 후 ALB의 리스너 규칙을 수정하여 트래픽을 그린 대상 그룹으로 한 번에 전환. Route 53에는 단일 ALB를 가리키는 레코드 하나만 있으므로 DNS를 변경할 필요가 없습니다. ALB 대상 그룹 전환이 DNS 변경보다 즉각적으로 트래픽을 이동할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 소프트웨어가 아직 배포되지 않은 그린 인스턴스로 먼저 트래픽을 전환하면 사용자가 이전 버전 또는 잘못된 환경으로 라우팅될 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — 블루/그린 배포의 핵심은 두 환경을 분리하여 유지하는 것입니다. 블루 환경에 그린 소프트웨어를 배포하는 것은 블루/그린 패턴이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — Route 53은 단일 ALB를 가리키고 있으며, ALB 내에서 대상 그룹 전환으로 트래픽을 제어합니다. Route 53 DNS를 변경해도 동일한 ALB를 가리키므로 효과가 없습니다. 또한 DNS 변경은 TTL 캐시로 인해 즉각적이지 않습니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'단일 ALB에 블루/그린 대상 그룹 2개. Route 53 → ALB → 대상 그룹. 트래픽 전환은 ALB 리스너 규칙 수정으로. 순서: 그린 배포 완료 후 ALB 전환. D는 잘못된 이해(ALB가 하나뿐).' }]
}
];
