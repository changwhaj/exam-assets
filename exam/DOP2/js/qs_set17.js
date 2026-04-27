window.QS_SET17 = [
{
  n: 161,
  en: `A company hired a penetration tester to simulate an internal security breach. The tester performed port scans on the company's Amazon EC2 instances. The company's security measures did not detect the port scans.<br><br>The company needs a solution that automatically provides notification when port scans are performed on EC2 instances. The company creates and subscribes to an Amazon Simple Notification Service (Amazon SNS) topic.<br><br>What should the company do next to meet the requirement?`,
  ko: `한 회사가 내부 보안 침해를 시뮬레이션하기 위해 침투 테스터를 고용했습니다. 테스터가 회사의 Amazon EC2 인스턴스에서 포트 스캔을 수행했습니다. 회사의 보안 조치는 포트 스캔을 감지하지 못했습니다.<br><br>회사는 EC2 인스턴스에서 포트 스캔이 수행될 때 자동으로 알림을 제공하는 솔루션이 필요합니다. 회사는 Amazon SNS 토픽을 생성하고 구독합니다.<br><br>요구 사항을 충족하기 위해 회사는 다음에 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Ensure that Amazon GuardDuty is enabled. Create an Amazon CloudWatch alarm for detected EC2 and port scan findings. Connect the alarm to the SNS topic.`, ko:`Amazon GuardDuty가 활성화되어 있는지 확인합니다. 감지된 EC2 및 포트 스캔 결과에 대한 Amazon CloudWatch 알람을 생성합니다. 알람을 SNS 토픽에 연결합니다.` },
    { k:'B', en:`Ensure that Amazon Inspector is enabled. Create an Amazon EventBridge event for detected network reachability findings that indicate port scans. Connect the event to the SNS topic.`, ko:`Amazon Inspector가 활성화되어 있는지 확인합니다. 포트 스캔을 나타내는 감지된 네트워크 도달 가능성 결과에 대한 Amazon EventBridge 이벤트를 생성합니다. 이벤트를 SNS 토픽에 연결합니다.` },
    { k:'C', en:`Ensure that Amazon Inspector is enabled. Create an Amazon EventBridge event for detected CVEs that cause open port vulnerabilities. Connect the event to the SNS topic.`, ko:`Amazon Inspector가 활성화되어 있는지 확인합니다. 오픈 포트 취약성을 유발하는 감지된 CVE에 대한 Amazon EventBridge 이벤트를 생성합니다. 이벤트를 SNS 토픽에 연결합니다.` },
    { k:'D', en:`Ensure that AWS CloudTrail is enabled. Create an AWS Lambda function to analyze the CloudTrail logs for unusual amounts of traffic from an IP address range. Connect the Lambda function to the SNS topic.`, ko:`AWS CloudTrail이 활성화되어 있는지 확인합니다. IP 주소 범위에서 비정상적인 양의 트래픽에 대해 CloudTrail 로그를 분석하는 AWS Lambda 함수를 생성합니다. Lambda 함수를 SNS 토픽에 연결합니다.` },
  ],
  answer: ['A'],
  vote: '93% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p><strong>Amazon GuardDuty</strong>는 VPC 흐름 로그, DNS 로그, CloudTrail 이벤트를 분석하여 실시간으로 포트 스캔 같은 위협 활동을 탐지합니다. GuardDuty의 발견 항목(findings)은 CloudWatch Events/EventBridge를 통해 SNS 토픽으로 알림을 보낼 수 있습니다. Inspector는 취약점 평가 도구로 포트 스캔을 수행하는 주체(공격자)를 감지하지 못합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B, C</span> — Amazon Inspector는 EC2 인스턴스의 취약점(열린 포트, CVE)을 스캔하는 도구이지, 외부 포트 스캔 공격을 탐지하는 도구가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — CloudTrail은 API 호출 로그이며 네트워크 수준 포트 스캔을 기록하지 않습니다.</p>`,
  disc: [{ ans:'A (93%)', txt:'포트 스캔 탐지 = GuardDuty. Inspector는 취약점 스캔 도구, GuardDuty는 위협 탐지 도구.' }]
},
{
  n: 162,
  en: `A company runs applications in an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster uses an Application Load Balancer to route traffic to the applications that run in the cluster.<br><br>A new application that was migrated to the EKS cluster is performing poorly. All the other applications in the EKS cluster maintain appropriate operation. The new application scales out horizontally to the preconfigured maximum number of pods immediately upon deployment, before any user traffic routes to the web application.<br><br>Which solution will resolve the scaling behavior of the web application in the EKS cluster?`,
  ko: `한 회사가 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에서 애플리케이션을 실행합니다. EKS 클러스터는 Application Load Balancer를 사용하여 클러스터에서 실행되는 애플리케이션으로 트래픽을 라우팅합니다.<br><br>EKS 클러스터로 마이그레이션된 새 애플리케이션의 성능이 좋지 않습니다. EKS 클러스터의 다른 모든 애플리케이션은 정상적으로 작동합니다. 새 애플리케이션은 배포 즉시 사용자 트래픽이 웹 애플리케이션으로 라우팅되기 전에 사전 구성된 최대 포드 수로 수평적으로 확장됩니다.<br><br>EKS 클러스터에서 웹 애플리케이션의 확장 동작을 해결할 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Implement the Horizontal Pod Autoscaler in the EKS cluster.`, ko:`EKS 클러스터에 Horizontal Pod Autoscaler를 구현합니다.` },
    { k:'B', en:`Implement the Vertical Pod Autoscaler in the EKS cluster.`, ko:`EKS 클러스터에 Vertical Pod Autoscaler를 구현합니다.` },
    { k:'C', en:`Implement the Cluster Autoscaler.`, ko:`클러스터 오토스케일러를 구현합니다.` },
    { k:'D', en:`Implement the AWS Load Balancer Controller in the EKS cluster.`, ko:`EKS 클러스터에 AWS 로드 밸런서 컨트롤러를 구현합니다.` },
  ],
  answer: ['B'],
  vote: '61% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>트래픽이 없는데도 배포 즉시 최대 포드 수까지 확장된다는 것은 각 포드에 할당된 리소스(CPU/메모리)가 부족하여 리소스 요청 임계값을 초과하기 때문입니다. <strong>Vertical Pod Autoscaler(VPA)</strong>는 각 포드에 적절한 CPU/메모리 리소스를 자동으로 권장하고 할당하여 "적절한 크기(right-sizing)"를 달성합니다. 이를 통해 불필요한 수평 확장을 방지할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Horizontal Pod Autoscaler(HPA)는 트래픽/메트릭 기반으로 포드 수를 조정합니다. 트래픽 없이 최대로 확장되는 문제는 리소스 할당 문제이므로 HPA로는 해결할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — Cluster Autoscaler는 노드 수를 조정하며 포드 리소스 문제와 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — 로드 밸런서 컨트롤러는 트래픽 라우팅 관련 도구입니다.</p>`,
  disc: [{ ans:'B (61%)', txt:'커뮤니티 의견 분분. 트래픽 없이 최대 확장 → 리소스 부족으로 인한 확장 → VPA(B)로 적절한 리소스 할당. 일부는 정적 복제본 설정 문제로 HPA(A)를 선택.' }]
},
{
  n: 163,
  en: `A company has an AWS Control Tower landing zone that manages its organization in AWS Organizations. The company created an OU structure that is based on the company's requirements. The company's DevOps team has established the core accounts for the solution and an account for all centralized AWS CloudFormation and AWS Service Catalog solutions.<br><br>The company wants to offer a series of customizations that an account can request through AWS Control Tower.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `한 회사에 AWS Organizations에서 조직을 관리하는 AWS Control Tower 랜딩 존이 있습니다. 회사는 회사의 요구 사항에 따라 OU 구조를 만들었습니다. 회사의 DevOps 팀은 솔루션의 핵심 계정과 모든 중앙 집중식 AWS CloudFormation 및 AWS Service Catalog 솔루션에 대한 계정을 설정했습니다.<br><br>회사는 AWS Control Tower를 통해 계정이 요청할 수 있는 일련의 사용자 지정을 제공하려고 합니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (세 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Enable trusted access for CloudFormation with Organizations by using service-managed permissions.`, ko:`서비스 관리 권한을 사용하여 Organizations에서 CloudFormation에 대한 신뢰할 수 있는 액세스를 활성화합니다.` },
    { k:'B', en:`Create an IAM role that is named AWSControlTowerBlueprintAccess. Configure the role with a trust policy that allows the AWSControlTowerAdmin role in the management account to assume the role. Attach the AWSServiceCatalogAdminFullAccess IAM policy to the AWSControlTowerBlueprintAccess role.`, ko:`AWSControlTowerBlueprintAccess라는 이름의 IAM 역할을 생성합니다. 관리 계정의 AWSControlTowerAdmin 역할이 역할을 맡을 수 있도록 하는 신뢰 정책으로 역할을 구성합니다. AWSServiceCatalogAdminFullAccess IAM 정책을 AWSControlTowerBlueprintAccess 역할에 연결합니다.` },
    { k:'C', en:`Create a Service Catalog product for each CloudFormation template.`, ko:`각 CloudFormation 템플릿에 대한 Service Catalog 제품을 생성합니다.` },
    { k:'D', en:`Create a CloudFormation stack set for each CloudFormation template. Enable automatic deployment for each stack set. Create a CloudFormation stack instance that targets specific OUs.`, ko:`각 CloudFormation 템플릿에 대해 CloudFormation 스택 세트를 생성합니다. 각 스택 세트에 대해 자동 배포를 활성화합니다. 특정 OU를 대상으로 하는 CloudFormation 스택 인스턴스를 생성합니다.` },
    { k:'E', en:`Deploy the Customizations for AWS Control Tower (CfCT) CloudFormation stack.`, ko:`AWS Control Tower용 사용자 지정(CfCT) CloudFormation 스택을 배포합니다.` },
    { k:'F', en:`Create a CloudFormation template that contains the resources for each customization.`, ko:`각 사용자 지정에 대한 리소스가 포함된 CloudFormation 템플릿을 생성합니다.` },
  ],
  answer: ['B','C','F'],
  vote: '76% BCF',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>AWS Control Tower Account Factory 사용자 지정을 위해 <strong>AWSControlTowerBlueprintAccess</strong> IAM 역할이 필요합니다. 이 역할은 관리 계정의 AWSControlTowerAdmin이 수임할 수 있어야 하며, AWSServiceCatalogAdminFullAccess 정책이 연결되어야 합니다(AWS 공식 문서 기준).</p>
<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p>각 사용자 지정은 <strong>Service Catalog 제품</strong>으로 래핑되어야 합니다. Control Tower의 Account Factory는 Service Catalog를 통해 제품을 제공합니다.</p>
<p><span class="mark-ok">✅ F — 핵심 이유</span></p>
<p>각 사용자 지정의 실제 리소스를 정의하는 <strong>CloudFormation 템플릿</strong>이 필요합니다. 이 템플릿이 Service Catalog 제품의 기반이 됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 신뢰할 수 있는 액세스는 StackSets 사용 시 필요하지만 이 시나리오에서는 요구되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — StackSets는 자동 배포를 위한 것이며 사용자 지정 요청 시나리오와 다릅니다.</p>
<p><span class="mark-no">❌ E</span> — CfCT는 모범 사례 적용 자동화를 위한 것이며 이 시나리오의 요구사항이 아닙니다.</p>`,
  disc: [{ ans:'BCF (76%)', txt:'AWS 공식 문서(afc-setup-steps.html) 기준: IAM 역할(B) + Service Catalog 제품(C) + CloudFormation 템플릿(F).' }]
},
{
  n: 164,
  en: `A company runs a workload on Amazon EC2 instances. The company needs a control that requires the use of Instance Metadata Service Version 2 (IMDSv2) on all EC2 instances in the AWS account. If an EC2 instance does not prevent the use of Instance Metadata Service Version 1 (IMDSv1), the EC2 instance must be terminated.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 Amazon EC2 인스턴스에서 워크로드를 실행합니다. 회사는 AWS 계정의 모든 EC2 인스턴스에서 Instance Metadata Service Version 2(IMDSv2) 사용을 요구하는 제어가 필요합니다. EC2 인스턴스가 Instance Metadata Service Version 1(IMDSv1) 사용을 방지하지 않으면 해당 EC2 인스턴스를 종료해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Set up AWS Config in the account. Use a managed rule to check EC2 instances. Configure the rule to remediate the findings by using AWS Systems Manager Automation to terminate the instance.`, ko:`계정에서 AWS Config를 설정합니다. 관리형 규칙을 사용하여 EC2 인스턴스를 확인합니다. AWS Systems Manager Automation을 사용하여 인스턴스를 종료하여 결과를 수정하도록 규칙을 구성합니다.` },
    { k:'B', en:`Create a permissions boundary that prevents the ec2:RunInstance action if the ec2:MetadataHttpTokens condition key is not set to a value of required. Attach the permissions boundary to the IAM role that was used to launch the instance.`, ko:`ec2:MetadataHttpTokens 조건 키가 required 값으로 설정되지 않은 경우 ec2:RunInstances 작업을 방지하는 권한 경계를 생성합니다. 인스턴스를 시작하는 데 사용된 IAM 역할에 권한 경계를 연결합니다.` },
    { k:'C', en:`Set up Amazon Inspector in the account. Configure Amazon Inspector to activate deep inspection for EC2 instances. Create an Amazon EventBridge rule for an Inspector2 finding. Set an AWS Lambda function as the target to terminate the instance.`, ko:`계정에서 Amazon Inspector를 설정합니다. EC2 인스턴스에 대한 심층 검사를 활성화하도록 Amazon Inspector를 구성합니다. Inspector2 결과에 대한 Amazon EventBridge 규칙을 생성합니다. 인스턴스를 종료하기 위한 대상으로 AWS Lambda 함수를 설정합니다.` },
    { k:'D', en:`Create an Amazon EventBridge rule for the EC2 instance launch successful event. Send the event to an AWS Lambda function to inspect the EC2 metadata and to terminate the instance.`, ko:`EC2 인스턴스 시작 성공 이벤트에 대한 Amazon EventBridge 규칙을 생성합니다. 이벤트를 AWS Lambda 함수로 보내 EC2 메타데이터를 검사하고 인스턴스를 종료합니다.` },
  ],
  answer: ['A'],
  vote: '94% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>AWS Config에는 <strong><code>ec2-imdsv2-check</code></strong> 관리형 규칙이 있어 EC2 인스턴스에서 IMDSv2가 적용되어 있는지 자동으로 평가합니다. 규정 미준수 인스턴스 발견 시 <strong>AWS Systems Manager Automation</strong>을 자동 수정 작업으로 설정하여 해당 인스턴스를 종료할 수 있습니다. 이는 탐지 + 자동 수정의 완전한 솔루션입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 권한 경계는 새 인스턴스 시작을 방지할 수 있지만, 이미 실행 중인 비준수 인스턴스를 감지하고 종료하는 기능이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon Inspector는 소프트웨어 취약점 스캐닝 도구이며 IMDS 설정을 확인하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 시작 이벤트만으로는 인스턴스의 IMDS 구성 정보를 충분히 파악하기 어렵습니다.</p>`,
  disc: [{ ans:'A (94%)', txt:'AWS Config ec2-imdsv2-check 관리형 규칙 + SSM Automation 자동 수정(종료)이 요구사항을 정확히 충족.' }]
},
{
  n: 165,
  en: `A company builds an application that uses an Application Load Balancer in front of Amazon EC2 instances that are in an Auto Scaling group. The application is stateless. The Auto Scaling group uses a custom AMI that is fully prebuilt. The EC2 instances do not have a custom bootstrapping process.<br><br>The AMI that the Auto Scaling group uses was recently deleted. The Auto Scaling group's scaling activities show failures because the AMI ID does not exist.<br><br>Which combination of steps should a DevOps engineer take to meet these requirements? (Choose three.)`,
  ko: `한 회사가 Auto Scaling 그룹의 Amazon EC2 인스턴스 앞에 Application Load Balancer를 사용하는 애플리케이션을 구축합니다. 애플리케이션은 상태 비저장(stateless)입니다. Auto Scaling 그룹은 완전히 사전 빌드된 사용자 지정 AMI를 사용합니다. EC2 인스턴스에는 사용자 지정 부트스트래핑 프로세스가 없습니다.<br><br>Auto Scaling 그룹이 사용하는 AMI가 최근 삭제되었습니다. AMI ID가 존재하지 않아 Auto Scaling 그룹의 확장 활동이 실패로 표시됩니다.<br><br>DevOps 엔지니어가 이러한 요구 사항을 충족하기 위해 취해야 하는 단계의 조합은 무엇입니까? (세 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Create a new launch template that uses the new AMI.`, ko:`새 AMI를 사용하는 새로운 시작 템플릿을 생성합니다.` },
    { k:'B', en:`Update the Auto Scaling group to use the new launch template.`, ko:`새 시작 템플릿을 사용하도록 Auto Scaling 그룹을 업데이트합니다.` },
    { k:'C', en:`Reduce the Auto Scaling group's desired capacity to 0.`, ko:`Auto Scaling 그룹의 원하는 용량을 0으로 줄입니다.` },
    { k:'D', en:`Increase the Auto Scaling group's desired capacity by 1.`, ko:`Auto Scaling 그룹의 원하는 용량을 1만큼 늘립니다.` },
    { k:'E', en:`Create a new AMI from a running EC2 instance in the Auto Scaling group.`, ko:`Auto Scaling 그룹에서 실행 중인 EC2 인스턴스에서 새 AMI를 생성합니다.` },
    { k:'F', en:`Create a new AMI by copying the most recent public AMI of the operating system that the EC2 instances use.`, ko:`EC2 인스턴스가 사용하는 운영 체제의 최신 공개 AMI를 복사하여 새 AMI를 생성합니다.` },
  ],
  answer: ['A','B','E'],
  vote: '100% ABE',
  explain: `<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p>애플리케이션이 상태 비저장(stateless)이므로 현재 실행 중인 EC2 인스턴스에서 새 AMI를 생성할 수 있습니다.</p>
<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>새로 생성한 AMI를 사용하는 새 시작 템플릿(또는 기존 시작 템플릿의 새 버전)을 생성합니다.</p>
<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>Auto Scaling 그룹이 새 시작 템플릿을 사용하도록 업데이트합니다. 이후 스케일 아웃이 새 AMI로 정상 동작합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ C, D</span> — 원하는 용량 변경은 근본 문제(AMI 없음)를 해결하지 못합니다.</p>
<p><span class="mark-no">❌ F</span> — 공개 AMI는 회사의 사전 빌드된 애플리케이션 환경을 반영하지 않습니다.</p>`,
  disc: [{ ans:'ABE (100%)', txt:'실행 중 인스턴스에서 AMI 생성(E) → 새 시작 템플릿(A) → ASG 업데이트(B). 상태 비저장이므로 현재 인스턴스에서 AMI 생성 가능.' }]
},
{
  n: 166,
  en: `A company deploys a web application on Amazon EC2 instances that are behind an Application Load Balancer (ALB). The company stores the application code in an AWS CodeCommit repository. When code is merged to the main branch, an AWS Lambda function invokes an AWS CodeBuild project. The CodeBuild project packages the code, stores the packaged code in AWS CodeArtifact, and invokes AWS Systems Manager Run Command to deploy the packaged code to the EC2 instances.<br><br>Previous deployments have resulted in defects, EC2 instances that are not running the latest version of the packaged code, and inconsistencies between instances.<br><br>Which combination of actions should a DevOps engineer take to implement a more reliable deployment solution? (Choose two.)`,
  ko: `한 회사가 Application Load Balancer(ALB) 뒤에 있는 Amazon EC2 인스턴스에 웹 애플리케이션을 배포합니다. 회사는 AWS CodeCommit 리포지토리에 애플리케이션 코드를 저장합니다. 코드가 main 브랜치에 병합되면 AWS Lambda 함수가 AWS CodeBuild 프로젝트를 호출합니다. CodeBuild 프로젝트는 코드를 패키징하고, 패키징된 코드를 AWS CodeArtifact에 저장하고, AWS Systems Manager Run Command를 호출하여 패키징된 코드를 EC2 인스턴스에 배포합니다.<br><br>이전 배포에서 결함, 최신 버전 패키징된 코드를 실행하지 않는 EC2 인스턴스, 인스턴스 간 불일치가 발생했습니다.<br><br>DevOps 엔지니어가 보다 안정적인 배포 솔루션을 구현하기 위해 취해야 할 조치의 조합은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Create a pipeline in AWS CodePipeline that uses the CodeCommit repository as a source provider. Configure pipeline stages that run the CodeBuild project in parallel to build and test the application. In the pipeline, pass the CodeBuild project output artifact to an AWS CodeDeploy action.`, ko:`CodeCommit 리포지토리를 소스 공급자로 사용하는 AWS CodePipeline에서 파이프라인을 생성합니다. 애플리케이션을 빌드하고 테스트하기 위해 CodeBuild 프로젝트를 병렬로 실행하는 파이프라인 단계를 구성합니다. 파이프라인에서 CodeBuild 프로젝트 출력 아티팩트를 AWS CodeDeploy 작업에 전달합니다.` },
    { k:'B', en:`Create a pipeline in AWS CodePipeline that uses the CodeCommit repository as a source provider. Create separate pipeline stages that run a CodeBuild project to build and then test the application. In the pipeline, pass the CodeBuild project output artifact to an AWS CodeDeploy action.`, ko:`CodeCommit 리포지토리를 소스 공급자로 사용하는 AWS CodePipeline에서 파이프라인을 생성합니다. CodeBuild 프로젝트를 실행하여 애플리케이션을 빌드한 다음 테스트하는 별도의 파이프라인 단계를 생성합니다. 파이프라인에서 CodeBuild 프로젝트 출력 아티팩트를 AWS CodeDeploy 작업에 전달합니다.` },
    { k:'C', en:`Create an AWS CodeDeploy application and a deployment group to deploy the packaged code to the EC2 instances. Configure the ALB for the deployment group.`, ko:`패키징된 코드를 EC2 인스턴스에 배포하기 위해 AWS CodeDeploy 애플리케이션과 배포 그룹을 생성합니다. 배포 그룹에 대한 ALB를 구성합니다.` },
    { k:'D', en:`Create individual Lambda functions that use AWS CodeDeploy instead of Systems Manager to run build, test, and deploy actions.`, ko:`Systems Manager 대신 AWS CodeDeploy를 사용하여 빌드, 테스트 및 배포 작업을 실행하는 개별 Lambda 함수를 생성합니다.` },
    { k:'E', en:`Create an Amazon S3 bucket. Modify the CodeBuild project to store the packages in the S3 bucket instead of in CodeArtifact. Use deploy actions in CodeDeploy to deploy the artifact to the EC2 instances.`, ko:`Amazon S3 버킷을 생성합니다. CodeBuild 프로젝트를 수정하여 CodeArtifact 대신 S3 버킷에 패키지를 저장합니다. CodeDeploy의 배포 작업을 사용하여 아티팩트를 EC2 인스턴스에 배포합니다.` },
  ],
  answer: ['B','C'],
  vote: '100% BC',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p><strong>빌드 → 테스트</strong> 순서로 분리된 파이프라인 단계를 구성하면 테스트 실패 시 배포가 중단됩니다. 병렬(A) 방식은 테스트가 빌드 출력에 의존하기 때문에 부적절합니다.</p>
<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p><strong>AWS CodeDeploy</strong>는 EC2 인스턴스에 대한 안정적이고 일관된 배포를 보장합니다. ALB와 통합하면 롤링 배포, 블루/그린 배포가 가능하여 인스턴스 간 불일치 문제를 해결합니다. 기존의 SSM Run Command 방식보다 훨씬 신뢰성이 높습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 빌드와 테스트를 병렬 실행하면 테스트가 완료되지 않은 아티팩트로 배포될 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda로 배포 작업을 구현하는 것은 불필요한 복잡성을 추가합니다.</p>
<p><span class="mark-no">❌ E</span> — CodeArtifact에서 S3로 변경하는 것은 문제 해결에 도움이 되지 않습니다.</p>`,
  disc: [{ ans:'BC (100%)', txt:'순차적 파이프라인(B) + CodeDeploy + ALB(C)가 결함, 버전 불일치, 인스턴스 간 불일치 문제를 모두 해결.' }]
},
{
  n: 167,
  en: `A company uses an organization in AWS Organizations to manage its AWS accounts. The company's automation account contains a CI/CD pipeline that creates and configures new AWS accounts.<br><br>The company has a group of internal service teams that provide services to accounts in the organization. The service teams operate out of a set of services accounts. The service teams want to receive an AWS CloudTrail event in their services accounts when the CreateAccount API call creates a new account.<br><br>How should the company share this CloudTrail event with the service accounts?`,
  ko: `한 회사가 AWS Organizations에서 조직을 사용하여 AWS 계정을 관리합니다. 회사의 자동화 계정에는 새 AWS 계정을 생성하고 구성하는 CI/CD 파이프라인이 포함되어 있습니다.<br><br>회사에는 조직의 계정에 서비스를 제공하는 내부 서비스 팀 그룹이 있습니다. 서비스 팀은 일련의 서비스 계정에서 운영됩니다. 서비스 팀은 CreateAccount API 호출이 새 계정을 생성할 때 서비스 계정에서 AWS CloudTrail 이벤트를 수신하려고 합니다.<br><br>회사는 이 CloudTrail 이벤트를 서비스 계정과 어떻게 공유해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon EventBridge rule in the automation account to send account creation events to the default event bus in the services accounts. Update the default event bus in the services accounts to allow events from the automation account.`, ko:`자동화 계정에서 Amazon EventBridge 규칙을 생성하여 서비스 계정의 기본 이벤트 버스로 계정 생성 이벤트를 보냅니다. 자동화 계정의 이벤트를 허용하도록 서비스 계정의 기본 이벤트 버스를 업데이트합니다.` },
    { k:'B', en:`Create a custom Amazon EventBridge event bus in the services accounts. Update the custom event bus to allow events from the automation account. Create an EventBridge rule in the services account that directly listens to CloudTrail events from the automation account.`, ko:`서비스 계정에서 사용자 지정 Amazon EventBridge 이벤트 버스를 생성합니다. 자동화 계정의 이벤트를 허용하도록 사용자 지정 이벤트 버스를 업데이트합니다. 자동화 계정의 CloudTrail 이벤트를 직접 수신하는 EventBridge 규칙을 서비스 계정에 생성합니다.` },
    { k:'C', en:`Create a custom Amazon EventBridge event bus in the automation account and the services accounts. Create an EventBridge rule and policy that connects the custom event buses that are in the automation account and the services accounts.`, ko:`자동화 계정과 서비스 계정에서 사용자 지정 Amazon EventBridge 이벤트 버스를 생성합니다. 자동화 계정과 서비스 계정에 있는 사용자 지정 이벤트 버스를 연결하는 EventBridge 규칙과 정책을 생성합니다.` },
    { k:'D', en:`Create a custom Amazon EventBridge event bus in the automation account. Create an EventBridge rule and policy that connects the custom event bus to the default event buses in the services accounts.`, ko:`자동화 계정에서 사용자 지정 Amazon EventBridge 이벤트 버스를 생성합니다. 사용자 지정 이벤트 버스를 서비스 계정의 기본 이벤트 버스에 연결하는 EventBridge 규칙과 정책을 생성합니다.` },
  ],
  answer: ['A'],
  vote: '84% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>교차 계정 이벤트 전달의 표준 패턴입니다: ① 소스 계정(자동화 계정)에 <strong>EventBridge 규칙</strong>을 생성하여 특정 이벤트(계정 생성)를 대상 이벤트 버스로 전송하고, ② 대상 계정(서비스 계정)의 기본 이벤트 버스에 소스 계정으로부터의 이벤트를 허용하는 리소스 정책을 업데이트합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 서비스 계정의 규칙이 자동화 계정의 CloudTrail 이벤트를 "직접" 수신하는 것은 불가능합니다. 이벤트는 자동화 계정에서 푸시해야 합니다.</p>
<p><span class="mark-no">❌ C, D</span> — 사용자 지정 이벤트 버스는 필요하지 않으며, C와 D는 계정 생성 이벤트만 필터링하지 않고 모든 이벤트를 전달합니다.</p>`,
  disc: [{ ans:'A (84%)', txt:'교차 계정 이벤트: 소스 계정(자동화)에서 규칙 생성 → 대상 계정(서비스) 기본 버스로 전송 + 버스 정책 허용.' }]
},
{
  n: 168,
  en: `A DevOps engineer is building a solution that uses Amazon Simple Queue Service (Amazon SQS) standard queues. The solution also includes an AWS Lambda function and an Amazon DynamoDB table. The Lambda function pulls content from an SQS queue event source and writes the content to the DynamoDB table.<br><br>The solution must maximize the scalability of Lambda and must prevent successfully processed SQS messages from being processed multiple times.<br><br>Which solution will meet these requirements?`,
  ko: `DevOps 엔지니어가 Amazon Simple Queue Service(Amazon SQS) 표준 대기열을 사용하는 솔루션을 구축하고 있습니다. 솔루션에는 AWS Lambda 함수와 Amazon DynamoDB 테이블도 포함됩니다. Lambda 함수는 SQS 대기열 이벤트 소스에서 콘텐츠를 가져와 DynamoDB 테이블에 씁니다.<br><br>솔루션은 Lambda의 확장성을 극대화하고 성공적으로 처리된 SQS 메시지가 여러 번 처리되는 것을 방지해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Decrease the batch window to 1 second when configuring the Lambda function's event source mapping.`, ko:`Lambda 함수의 이벤트 소스 매핑을 구성할 때 배치 창을 1초로 줄입니다.` },
    { k:'B', en:`Decrease the batch size to 1 when configuring the Lambda function's event source mapping.`, ko:`Lambda 함수의 이벤트 소스 매핑을 구성할 때 배치 크기를 1로 줄입니다.` },
    { k:'C', en:`Include the ReportBatchItemFailures value in the FunctionResponseTypes list in the Lambda function's event source mapping.`, ko:`Lambda 함수의 이벤트 소스 매핑에서 FunctionResponseTypes 목록에 ReportBatchItemFailures 값을 포함합니다.` },
    { k:'D', en:`Set the queue visibility timeout on the Lambda function's event source mapping to account for invocation throttling of the Lambda function.`, ko:`Lambda 함수의 호출 제한을 고려하기 위해 Lambda 함수의 이벤트 소스 매핑에서 대기열 가시성 시간 초과를 설정합니다.` },
  ],
  answer: ['C'],
  vote: '86% C',
  explain: `<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p>Lambda가 SQS 배치를 처리할 때 일부 메시지만 실패하면 전체 배치가 대기열로 반환되어 성공한 메시지도 다시 처리됩니다. <strong><code>ReportBatchItemFailures</code></strong>를 FunctionResponseTypes에 포함하면 <strong>부분 배치 응답(Partial Batch Response)</strong>이 활성화되어, 실패한 메시지만 대기열에 다시 표시됩니다. 이를 통해 성공 메시지 중복 처리를 방지하면서도 큰 배치 크기로 Lambda 확장성을 극대화할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 배치 창(batch window)은 메시지 집계 시간 간격이며 중복 처리와 무관합니다.</p>
<p><span class="mark-no">❌ B</span> — 배치 크기 1은 중복 처리를 방지하지만 Lambda 확장성이 저하됩니다(처리량 감소). 확장성 극대화 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — 가시성 타임아웃은 메시지 재처리 방지와 관련 있지만, 이미 성공한 메시지의 중복 처리는 해결하지 못합니다.</p>`,
  disc: [{ ans:'C (86%)', txt:'ReportBatchItemFailures = 부분 배치 응답. 실패 메시지만 재처리 → 성공 메시지 중복 방지 + 큰 배치 크기 유지(확장성 극대화).' }]
},
{
  n: 169,
  en: `A company has a new AWS account that teams will use to deploy various applications. The teams will create many Amazon S3 buckets for application-specific purposes and to store AWS CloudTrail logs. The company has enabled Amazon Macie for the account.<br><br>A DevOps engineer needs to optimize the Macie costs for the account without compromising the account's functionality.<br><br>Which solutions will meet these requirements? (Choose two.)`,
  ko: `한 회사에 팀이 다양한 애플리케이션을 배포하는 데 사용할 새로운 AWS 계정이 있습니다. 팀은 애플리케이션별 목적과 AWS CloudTrail 로그 저장을 위해 많은 Amazon S3 버킷을 생성합니다. 회사는 계정에 Amazon Macie를 활성화했습니다.<br><br>DevOps 엔지니어는 계정의 기능을 손상시키지 않으면서 Macie 비용을 최적화해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Exclude S3 buckets that contain CloudTrail logs from automated discovery.`, ko:`CloudTrail 로그가 포함된 S3 버킷을 자동 검색에서 제외합니다.` },
    { k:'B', en:`Exclude S3 buckets that have public read access from automated discovery.`, ko:`공개 읽기 액세스 권한이 있는 S3 버킷을 자동 검색에서 제외합니다.` },
    { k:'C', en:`Configure scheduled daily discovery jobs for all S3 buckets in the account.`, ko:`계정의 모든 S3 버킷에 대해 예약된 일일 검색 작업을 구성합니다.` },
    { k:'D', en:`Configure discovery jobs to include S3 objects based on the last modified criterion.`, ko:`마지막으로 수정된 기준에 따라 S3 객체를 포함하도록 검색 작업을 구성합니다.` },
    { k:'E', en:`Configure discovery jobs to include S3 objects that are tagged as production only.`, ko:`프로덕션으로만 태그가 지정된 S3 객체를 포함하도록 검색 작업을 구성합니다.` },
  ],
  answer: ['A','D'],
  vote: '84% AD',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>CloudTrail 로그는 민감한 데이터가 아닌 인프라 로그이므로 Macie 자동 검색에서 제외하면 불필요한 스캔 비용을 절감할 수 있습니다. AWS 공식 블로그에서도 CloudTrail 로그 버킷 제외를 비용 최적화 방법으로 권장합니다.</p>
<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p><strong>"마지막 수정" 기준</strong>으로 객체를 필터링하면 새로 추가되거나 변경된 객체만 스캔하여 중복 스캔 비용을 줄일 수 있습니다. AWS 공식 비용 최적화 가이드에서 권장하는 방법입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 공개 읽기 버킷을 제외하면 오히려 민감한 데이터 노출 위험이 높은 버킷을 스캔하지 않게 되어 보안 기능이 저하됩니다.</p>
<p><span class="mark-no">❌ C</span> — 모든 버킷에 대한 일일 예약 작업은 비용을 증가시킵니다.</p>
<p><span class="mark-no">❌ E</span> — 모든 버킷이 실질적으로 프로덕션 용도이므로 태그 필터링 효과가 없습니다.</p>`,
  disc: [{ ans:'AD (84%)', txt:'CloudTrail 로그 제외(A) + 마지막 수정 기준 필터링(D). AWS 공식 비용 최적화 가이드 기준.' }]
},
{
  n: 170,
  en: `A company uses an organization in AWS Organizations to manage its AWS accounts. The company recently acquired another company that has standalone AWS accounts. The acquiring company's DevOps team needs to consolidate the administration of the AWS accounts for both companies and retain full administrative control of the accounts. The DevOps team also needs to collect and group findings across all the accounts to implement and maintain a security posture.<br><br>Which combination of steps should the DevOps team take to meet these requirements? (Choose two.)`,
  ko: `한 회사가 AWS Organizations에서 조직을 사용하여 AWS 계정을 관리합니다. 이 회사는 최근 독립형 AWS 계정이 있는 다른 회사를 인수했습니다. 인수한 회사의 DevOps 팀은 두 회사의 AWS 계정 관리를 통합하고 계정에 대한 전체 관리 제어권을 유지해야 합니다. DevOps 팀은 또한 보안 태세를 구현하고 유지하기 위해 모든 계정에서 결과를 수집하고 그룹화해야 합니다.<br><br>DevOps 팀이 이러한 요구 사항을 충족하기 위해 취해야 하는 단계의 조합은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Invite the acquired company's AWS accounts to join the organization. Create an SCP that has full administrative privileges. Attach the SCP to the management account.`, ko:`인수한 회사의 AWS 계정을 조직에 가입하도록 초대합니다. 전체 관리자 권한이 있는 SCP를 생성합니다. SCP를 관리 계정에 연결합니다.` },
    { k:'B', en:`Invite the acquired company's AWS accounts to join the organization. Create the OrganizationAccountAccessRole IAM role in the invited accounts. Grant permission to the management account to assume the role.`, ko:`인수한 회사의 AWS 계정을 조직에 가입하도록 초대합니다. 초대된 계정에서 OrganizationAccountAccessRole IAM 역할을 생성합니다. 관리 계정이 역할을 맡을 수 있는 권한을 부여합니다.` },
    { k:'C', en:`Use AWS Security Hub to collect and group findings across all accounts. Use Security Hub to automatically detect new accounts as the accounts are added to the organization.`, ko:`AWS Security Hub를 사용하여 모든 계정에서 결과를 수집하고 그룹화합니다. 계정이 조직에 추가될 때 Security Hub를 사용하여 자동으로 새 계정을 감지합니다.` },
    { k:'D', en:`Use AWS Firewall Manager to collect and group findings across all accounts. Enable all features for the organization. Designate an account in the organization as the delegated administrator account for Firewall Manager.`, ko:`AWS Firewall Manager를 사용하여 모든 계정에서 결과를 수집하고 그룹화합니다. 조직의 모든 기능을 활성화합니다. 조직의 계정을 Firewall Manager의 위임된 관리자 계정으로 지정합니다.` },
    { k:'E', en:`Use Amazon Inspector to collect and group findings across all accounts. Designate an account in the organization as the delegated administrator account for Amazon Inspector.`, ko:`Amazon Inspector를 사용하여 모든 계정에서 결과를 수집하고 그룹화합니다. 조직의 계정을 Amazon Inspector의 위임된 관리자 계정으로 지정합니다.` },
  ],
  answer: ['B','C'],
  vote: '100% BC',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>독립형 계정을 Organizations에 초대한 후, <strong>OrganizationAccountAccessRole</strong> IAM 역할을 생성하면 관리 계정이 해당 역할을 수임하여 인수된 계정에 대한 전체 관리 제어권을 가질 수 있습니다. Organizations에서 직접 생성한 계정에는 이 역할이 자동 생성되지만, 초대된 계정에는 수동으로 생성해야 합니다.</p>
<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p><strong>AWS Security Hub</strong>는 여러 계정의 보안 결과를 수집, 집계, 그룹화하는 데 최적화된 서비스입니다. Organizations와 통합하여 새 계정이 추가될 때 자동으로 감지하고 관리합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — SCP를 관리 계정에 연결하는 것은 무의미합니다. SCP는 관리 계정에 적용되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Firewall Manager는 방화벽 정책 중앙 관리 도구이며 보안 결과 수집/그룹화에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — Amazon Inspector는 취약점 스캐닝 도구이며 일반 보안 태세 결과 수집/그룹화에는 Security Hub가 더 적합합니다.</p>`,
  disc: [{ ans:'BC (100%)', txt:'계정 통합 + 전체 관리(B) + Security Hub로 보안 결과 수집/그룹화(C). Inspector는 취약점 스캔, Firewall Manager는 FW 정책 관리.' }]
}
];
