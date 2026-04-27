window.QS_SET26 = [
{
  n: 251,
  en: `A DevOps engineer needs to implement a solution to install antivirus software on all the Amazon EC2 instances in an AWS account. The EC2 instances run the most recent version of Amazon Linux.<br><br>The solution must detect all instances and must use an AWS Systems Manager document to install the software if the software is not present.<br><br>Which solution will meet these requirements?`,
  ko: `DevOps 엔지니어는 AWS 계정의 모든 Amazon EC2 인스턴스에 바이러스 백신 소프트웨어를 설치하는 솔루션을 구현해야 합니다. EC2 인스턴스는 최신 버전의 Amazon Linux를 실행합니다.<br><br>솔루션은 모든 인스턴스를 감지해야 하며, 소프트웨어가 없는 경우 AWS Systems Manager 문서를 사용하여 소프트웨어를 설치해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an association in Systems Manager State Manager. Target all the managed nodes. Include the software in the association. Configure the association to use the Systems Manager document.`, ko:`Systems Manager State Manager에서 연결(Association)을 만듭니다. 모든 관리 노드를 대상으로 합니다. 소프트웨어를 연결에 포함합니다. Systems Manager 문서를 사용하도록 연결을 구성합니다.` },
    { k:'B', en:`Set up AWS Config to record all the resources in the account. Create an AWS Config custom rule to determine if the software is installed on all the EC2 instances. Configure an automatic remediation action that uses the Systems Manager document for noncompliant EC2 instances.`, ko:`AWS Config를 설정하여 계정의 모든 리소스를 기록합니다. AWS Config 사용자 지정 규칙을 만들어 소프트웨어가 모든 EC2 인스턴스에 설치되어 있는지 확인합니다. 비준수 EC2 인스턴스에 대해 Systems Manager 문서를 사용하는 자동 수정 작업을 구성합니다.` },
    { k:'C', en:`Activate Amazon EC2 scanning on Amazon Inspector to determine if the software is installed on all the EC2 instances. Associate the findings with the Systems Manager document.`, ko:`Amazon Inspector에서 Amazon EC2 스캐닝을 활성화하여 소프트웨어가 모든 EC2 인스턴스에 설치되어 있는지 확인합니다. 결과를 Systems Manager 문서와 연결합니다.` },
    { k:'D', en:`Create an Amazon EventBridge rule that uses AWS CloudTrail to detect the RunInstances API call. Configure inventory collection in Systems Manager Inventory to determine if the software is installed on the EC2 instances. Associate the Systems Manager inventory with the Systems Manager document.`, ko:`AWS CloudTrail을 사용하여 RunInstances API 호출을 감지하는 Amazon EventBridge 규칙을 만듭니다. Systems Manager Inventory에서 인벤토리 수집을 구성하여 소프트웨어가 EC2 인스턴스에 설치되어 있는지 확인합니다. Systems Manager 인벤토리를 Systems Manager 문서와 연결합니다.` },
  ],
  answer: ['A'],
  vote: '80% A',
  explain: `<p><span class="mark-ok">✅ A — Systems Manager State Manager 연결(Association) 사용</span></p>
<p>State Manager 연결은 AWS 리소스에 원하는 상태를 지속적으로 적용합니다. 모든 관리 노드를 대상으로 연결을 생성하고 SSM 문서를 지정하면, 소프트웨어가 없는 인스턴스에 자동 설치되며 주기적으로 규정 준수 상태를 확인합니다. "모든 인스턴스 감지 + SSM 문서 사용" 요구 사항을 가장 직접적으로 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — AWS Config 커스텀 규칙으로 소프트웨어 설치 여부를 감지하는 것은 가능하지만, Config는 인스턴스 내부 소프트웨어 인벤토리를 직접 확인하기 어렵고 설정이 복잡합니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon Inspector는 보안 취약성 평가 도구로, 특정 소프트웨어 설치 여부를 확인하고 직접 설치를 지시하는 용도가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — RunInstances 이벤트 기반 접근은 기존 인스턴스를 놓칠 수 있으며, Systems Manager Inventory를 SSM 문서와 직접 연결하는 기능은 지원되지 않습니다.</p>`,
  disc: [{ ans:'A (80%)', txt:'State Manager 연결은 "모든 관리 노드 대상 + SSM 문서를 통한 소프트웨어 설치" 요구 사항을 직접 충족하는 정석적인 솔루션입니다.' }]
},
{
  n: 252,
  en: `A company needs to increase the security of the container images that run in its production environment. The company wants to integrate operating system scanning and programming language package vulnerability scanning for the containers in its CI/CD pipeline. The CI/CD pipeline is an AWS CodePipeline pipeline that includes an AWS CodeBuild build project, AWS CodeDeploy actions, and an Amazon Elastic Container Registry (Amazon ECR) repository.<br><br>A DevOps engineer needs to add an image scan to the CI/CD pipeline. The CI/CD pipeline must deploy only images without CRITICAL and HIGH findings into production.<br><br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `회사는 프로덕션 환경에서 실행되는 컨테이너 이미지의 보안을 강화해야 합니다. 이 회사는 CI/CD 파이프라인의 컨테이너에 대한 운영 체제 스캐닝과 프로그래밍 언어 패키지 취약성 스캐닝을 통합하려고 합니다. CI/CD 파이프라인은 AWS CodeBuild 빌드 프로젝트, AWS CodeDeploy 작업 및 Amazon Elastic Container Registry(Amazon ECR) 리포지토리를 포함하는 AWS CodePipeline 파이프라인입니다.<br><br>DevOps 엔지니어는 CI/CD 파이프라인에 이미지 스캔을 추가해야 합니다. CI/CD 파이프라인은 CRITICAL 및 HIGH 결과가 없는 이미지만 프로덕션에 배포해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi', multiCount: 2,
  choices: [
    { k:'A', en:`Use Amazon ECR basic scanning.`, ko:`Amazon ECR 기본 스캐닝을 사용합니다.` },
    { k:'B', en:`Use Amazon ECR enhanced scanning.`, ko:`Amazon ECR 강화된 스캐닝을 사용합니다.` },
    { k:'C', en:`Configure Amazon ECR to submit a Rejected status to the CI/CD pipeline when the image scan returns CRITICAL or HIGH findings.`, ko:`이미지 검사 결과가 CRITICAL 또는 HIGH로 반환되면 CI/CD 파이프라인에 거부됨(Rejected) 상태를 제출하도록 Amazon ECR을 구성합니다.` },
    { k:'D', en:`Configure an Amazon EventBridge rule to invoke an AWS Lambda function when the image scan is completed. Configure the Lambda function to consume the Amazon Inspector scan status and to submit an Approved or Rejected status to the CI/CD pipeline.`, ko:`이미지 스캔이 완료되면 AWS Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 구성합니다. Lambda 함수를 구성하여 Amazon Inspector 스캔 상태를 사용하고 CI/CD 파이프라인에 승인됨(Approved) 또는 거부됨(Rejected) 상태를 제출합니다.` },
    { k:'E', en:`Configure an Amazon EventBridge rule to invoke an AWS Lambda function when the image scan is completed. Configure the Lambda function to consume the Clair scan status and to submit an Approved or Rejected status to the CI/CD pipeline.`, ko:`이미지 스캔이 완료되면 AWS Lambda 함수를 호출하도록 Amazon EventBridge 규칙을 구성합니다. Lambda 함수를 구성하여 Clair 스캔 상태를 사용하고 CI/CD 파이프라인에 승인됨(Approved) 또는 거부됨(Rejected) 상태를 제출합니다.` },
  ],
  answer: ['B','D'],
  vote: '100% BD',
  explain: `<p><span class="mark-ok">✅ B — Amazon ECR 강화된 스캐닝(Enhanced Scanning)</span></p>
<p>강화된 스캐닝은 Amazon Inspector와 통합되어 OS 취약성과 프로그래밍 언어 패키지 취약성을 모두 스캔합니다. 기본 스캐닝은 오픈소스 Clair 프로젝트 기반으로 OS 취약성만 검사하며 언어 패키지 스캔은 지원하지 않습니다.</p>
<p><span class="mark-ok">✅ D — EventBridge + Lambda로 Inspector 스캔 결과를 파이프라인에 전달</span></p>
<p>강화된 스캐닝 완료 시 EventBridge로 Lambda를 호출하고, Lambda가 Inspector 스캔 결과(CRITICAL/HIGH 여부)를 평가하여 CodePipeline에 승인/거부 상태를 전달합니다. 이를 통해 취약한 이미지의 프로덕션 배포를 자동 차단합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 기본 스캐닝은 Clair 기반으로 OS 취약성만 검사하며, 언어 패키지 취약성 스캔을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — ECR이 직접 파이프라인에 Rejected 상태를 전달하는 기능은 없습니다. Lambda를 통해 처리해야 합니다.</p>
<p><span class="mark-no">❌ E</span> — 강화된 스캐닝은 Amazon Inspector를 사용하며, Clair는 기본 스캐닝에서 사용됩니다. Inspector의 스캔 상태를 소비해야 합니다.</p>`,
  disc: [{ ans:'BD (100%)', txt:'ECR 강화된 스캐닝(Inspector 통합)으로 OS+언어 패키지 취약성을 모두 검사하고, EventBridge+Lambda로 파이프라인 게이팅을 구현하는 조합입니다.' }]
},
{
  n: 253,
  en: `A company's DevOps team manages a set of AWS accounts that are in an organization in AWS Organizations.<br><br>The company needs a solution that ensures that all Amazon EC2 instances use approved AMIs that the DevOps team manages. The solution also must remediate the usage of AMIs that are not approved. The individual account administrators must not be able to remove the restriction to use approved AMIs.<br><br>Which solution will meet these requirements?`,
  ko: `회사의 DevOps 팀은 AWS Organizations의 조직에 있는 일련의 AWS 계정을 관리합니다.<br><br>이 회사에는 모든 Amazon EC2 인스턴스가 DevOps 팀이 관리하는 승인된 AMI를 사용하도록 보장하는 솔루션이 필요합니다. 솔루션은 또한 승인되지 않은 AMI의 사용을 수정해야 합니다. 개별 계정 관리자는 승인된 AMI를 사용하는 제한을 제거할 수 없어야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS CloudFormation StackSets to deploy an Amazon EventBridge rule to each account. Configure the rule to react to AWS CloudTrail events for Amazon EC2 and to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the DevOps team to the SNS topic.`, ko:`AWS CloudFormation StackSets를 사용하여 각 계정에 Amazon EventBridge 규칙을 배포합니다. Amazon EC2에 대한 AWS CloudTrail 이벤트에 반응하고 Amazon SNS 토픽에 알림을 보내도록 규칙을 구성합니다. DevOps 팀을 SNS 토픽에 구독합니다.` },
    { k:'B', en:`Use AWS CloudFormation StackSets to deploy the approved-amis-by-id AWS Config managed rule to each account. Configure the rule with the list of approved AMIs. Configure the rule to run the AWS-StopEC2Instance AWS Systems Manager Automation runbook for the noncompliant EC2 instances.`, ko:`AWS CloudFormation StackSets를 사용하여 approved-amis-by-id AWS Config 관리형 규칙을 각 계정에 배포합니다. 승인된 AMI 목록으로 규칙을 구성합니다. 비준수 EC2 인스턴스에 대해 AWS-StopEC2Instance AWS Systems Manager Automation 런북을 실행하도록 규칙을 구성합니다.` },
    { k:'C', en:`Create an AWS Lambda function that processes AWS CloudTrail events for Amazon EC2. Configure the Lambda function to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the DevOps team to the SNS topic. Deploy the Lambda function in each account in the organization. Create an Amazon EventBridge rule in each account. Configure the EventBridge rules to react to AWS CloudTrail events for Amazon EC2 and to invoke the Lambda function.`, ko:`Amazon EC2에 대한 AWS CloudTrail 이벤트를 처리하는 AWS Lambda 함수를 만듭니다. Lambda 함수를 구성하여 Amazon SNS 토픽에 알림을 보냅니다. DevOps 팀을 SNS 토픽에 구독합니다. 조직의 각 계정에 Lambda 함수를 배포합니다. 각 계정에 Amazon EventBridge 규칙을 만듭니다. Amazon EC2에 대한 AWS CloudTrail 이벤트에 반응하고 Lambda 함수를 호출하도록 EventBridge 규칙을 구성합니다.` },
    { k:'D', en:`Enable AWS Config across the organization. Create a conformance pack that uses the approved-amis-by-id AWS Config managed rule with the list of approved AMIs. Deploy the conformance pack across the organization. Configure the rule to run the AWS-StopEC2Instance AWS Systems Manager Automation runbook for the noncompliant EC2 instances.`, ko:`조직 전체에서 AWS Config를 활성화합니다. 승인된 AMI 목록과 함께 approved-amis-by-id AWS Config 관리형 규칙을 사용하는 적합성 팩(Conformance Pack)을 만듭니다. 조직 전체에 적합성 팩을 배포합니다. 비준수 EC2 인스턴스에 대해 AWS-StopEC2Instance AWS Systems Manager Automation 런북을 실행하도록 규칙을 구성합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — AWS Config 적합성 팩(Conformance Pack)을 조직 전체에 배포</span></p>
<p>조직 수준의 적합성 팩은 관리 계정에서 배포되며, 개별 멤버 계정 관리자가 규칙을 수정하거나 삭제할 수 없습니다. approved-amis-by-id 규칙으로 비승인 AMI를 감지하고, AWS-StopEC2Instance 런북으로 자동 수정합니다. 이 솔루션은 "개별 계정 관리자가 제한을 제거할 수 없어야 한다"는 요구 사항을 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, C</span> — 경고(알림)만 제공하며 비준수 인스턴스를 자동으로 수정하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — CloudFormation StackSets로 배포된 규칙은 개별 계정 관리자가 수정하거나 삭제할 수 있어, "제한 제거 불가" 요구 사항을 충족하지 못합니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'조직 수준 적합성 팩은 개별 계정 관리자가 변경할 수 없으며, 자동 수정 기능도 포함하므로 모든 요구 사항을 충족합니다.' }]
},
{
  n: 254,
  en: `A company gives its employees limited rights to AWS. DevOps engineers have the ability to assume an administrator role. For tracking purposes, the security team wants to receive a near-real-time notification when the administrator role is assumed.<br><br>How should this be accomplished?`,
  ko: `한 회사가 직원들에게 AWS에 대한 제한적인 권한을 부여했습니다. DevOps 엔지니어는 관리자 역할을 맡을(assume) 수 있습니다. 추적 목적으로 보안 팀은 관리자 역할이 맡아질 때 거의 실시간으로 알림을 받고 싶어합니다.<br><br>이를 어떻게 달성해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure AWS Config to publish logs to an Amazon S3 bucket. Use Amazon Athena to query the logs and send a notification to the security team when the administrator role is assumed.`, ko:`AWS Config를 구성하여 Amazon S3 버킷에 로그를 게시합니다. Amazon Athena를 사용하여 로그를 쿼리하고 관리자 역할이 수임되면 보안 팀에 알림을 보냅니다.` },
    { k:'B', en:`Configure Amazon GuardDuty to monitor when the administrator role is assumed and send a notification to the security team.`, ko:`Amazon GuardDuty를 구성하여 관리자 역할이 수임될 때 모니터링하고 보안 팀에 알림을 보냅니다.` },
    { k:'C', en:`Create an Amazon EventBridge event rule using an AWS Management Console sign-in events event pattern that publishes a message to an Amazon SNS topic if the administrator role is assumed.`, ko:`AWS Management Console 로그인 이벤트 패턴을 사용하여 관리자 역할이 수임된 경우 Amazon SNS 토픽에 메시지를 게시하는 Amazon EventBridge 이벤트 규칙을 생성합니다.` },
    { k:'D', en:`Create an Amazon EventBridge events rule using an AWS API call that uses an AWS CloudTrail event pattern to invoke an AWS Lambda function that publishes a message to an Amazon SNS topic if the administrator role is assumed.`, ko:`AWS CloudTrail 이벤트 패턴을 사용하는 AWS API 호출을 이용하여 관리자 역할이 수임된 경우 Amazon SNS 토픽에 메시지를 게시하는 AWS Lambda 함수를 호출하는 Amazon EventBridge 이벤트 규칙을 생성합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — CloudTrail 이벤트 패턴 기반 EventBridge 규칙 + Lambda + SNS</span></p>
<p>AssumeRole API 호출은 AWS CloudTrail에 기록됩니다. EventBridge는 CloudTrail의 AssumeRole 이벤트를 거의 실시간으로 감지하여 Lambda를 호출하고, Lambda가 SNS 토픽에 알림을 발송합니다. 이 방식은 콘솔, CLI, SDK 등 모든 방법으로 수행된 역할 수임을 감지합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Athena를 통한 로그 쿼리는 거의 실시간이 아니며, 수동 쿼리가 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — GuardDuty는 위협 탐지용으로, 특정 역할 수임 이벤트를 모니터링하는 용도가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 콘솔 로그인 이벤트 패턴은 AssumeRole API 호출과 다릅니다. CLI나 SDK를 통한 역할 수임은 감지하지 못합니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'CloudTrail AssumeRole 이벤트를 EventBridge로 감지하고 Lambda+SNS로 거의 실시간 알림을 구현하는 표준 패턴입니다.' }]
},
{
  n: 255,
  en: `A company needs a strategy for failover and disaster recovery of its data and application. The application uses a MySQL database and Amazon EC2 instances. The company requires a maximum RPO of 2 hours and a maximum RTO of 10 minutes for its data and application at all times.<br><br>Which combination of deployment strategies will meet these requirements? (Choose two.)`,
  ko: `어떤 회사에서는 데이터와 애플리케이션의 장애 조치 및 재해 복구를 위한 전략이 필요합니다. 이 애플리케이션은 MySQL 데이터베이스와 Amazon EC2 인스턴스를 사용합니다. 이 회사는 데이터와 애플리케이션에 대해 항상 최대 RPO 2시간, 최대 RTO 10분이 필요합니다.<br><br>이러한 요구 사항을 충족하는 배포 전략 조합은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi', multiCount: 2,
  choices: [
    { k:'A', en:`Create an Amazon Aurora Single-AZ cluster in multiple AWS Regions as the data store. Use Aurora's automatic recovery capabilities in the event of a disaster.`, ko:`여러 AWS 리전에 Amazon Aurora Single-AZ 클러스터를 데이터 저장소로 만듭니다. 재해 발생 시 Aurora의 자동 복구 기능을 사용합니다.` },
    { k:'B', en:`Create an Amazon Aurora global database in two AWS Regions as the data store. In the event of a failure, promote the secondary Region to the primary for the application. Update the application to use the Aurora cluster endpoint in the secondary Region.`, ko:`두 개의 AWS 리전에 Amazon Aurora 글로벌 데이터베이스를 데이터 저장소로 만듭니다. 장애가 발생하면 보조 리전을 애플리케이션의 기본 리전으로 승격합니다. 보조 리전에서 Aurora 클러스터 엔드포인트를 사용하도록 애플리케이션을 업데이트합니다.` },
    { k:'C', en:`Create an Amazon Aurora cluster in multiple AWS Regions as the data store. Use a Network Load Balancer to balance the database traffic in different Regions.`, ko:`여러 AWS 리전에 Amazon Aurora 클러스터를 데이터 저장소로 만듭니다. Network Load Balancer를 사용하여 다른 리전의 데이터베이스 트래픽을 균형 있게 조정합니다.` },
    { k:'D', en:`Set up the application in two AWS Regions. Use Amazon Route 53 failover routing that points to Application Load Balancers in both Regions. Use health checks and Auto Scaling groups in each Region.`, ko:`두 AWS 리전에 애플리케이션을 설정합니다. 두 리전 모두에서 애플리케이션 로드 밸런서를 가리키는 Amazon Route 53 장애 조치 라우팅을 사용합니다. 각 리전에서 상태 확인 및 Auto Scaling 그룹을 사용합니다.` },
    { k:'E', en:`Set up the application in two AWS Regions. Configure AWS Global Accelerator to point to Application Load Balancers (ALBs) in both Regions. Add both ALBs to a single endpoint group. Use health checks and Auto Scaling groups in each Region.`, ko:`두 AWS 리전에서 애플리케이션을 설정합니다. AWS Global Accelerator를 두 리전의 Application Load Balancer(ALB)를 가리키도록 구성합니다. 두 ALB를 단일 엔드포인트 그룹에 추가합니다. 각 리전에서 상태 확인 및 Auto Scaling 그룹을 사용합니다.` },
  ],
  answer: ['B','D'],
  vote: '90% BD',
  explain: `<p><span class="mark-ok">✅ B — Aurora 글로벌 데이터베이스</span></p>
<p>Aurora 글로벌 데이터베이스는 리전 간 자동 복제로 RPO를 1초 미만으로 유지하며(2시간 RPO 요구 충족), 보조 리전 승격 시간이 1분 미만이어서 10분 RTO도 충족합니다.</p>
<p><span class="mark-ok">✅ D — Route 53 장애 조치 라우팅 + ALB + Auto Scaling</span></p>
<p>Route 53 장애 조치 라우팅은 기본 리전 장애 감지 시 보조 리전으로 자동 전환하여 10분 RTO를 충족합니다. Auto Scaling으로 EC2 인스턴스도 자동 복구됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Single-AZ Aurora를 여러 리전에 별도로 만드는 것은 리전 간 데이터 복제가 없어 RPO를 보장할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — NLB는 데이터베이스 트래픽 로드 밸런싱에 적합하지 않으며, 리전 간 데이터 복제 메커니즘이 없습니다.</p>
<p><span class="mark-no">❌ E</span> — Global Accelerator는 네트워크 수준 장애 조치를 지원하지만, Route 53 장애 조치와 기능이 중복되며 이 경우 D가 더 표준적인 솔루션입니다.</p>`,
  disc: [{ ans:'BD (90%)', txt:'Aurora 글로벌 데이터베이스로 낮은 RPO를 보장하고, Route 53 장애 조치로 빠른 RTO를 달성하는 조합입니다.' }]
},
{
  n: 256,
  en: `A developer is using the AWS Serverless Application Model (AWS SAM) to create a prototype for an AWS Lambda function. The AWS SAM template contains an AWS::Serverless::Function resource that has the CodeUri property that points to an Amazon S3 location. The developer wants to identify the correct commands for deployment before creating a CI/CD pipeline.<br><br>The developer creates an archive of the Lambda function code named package.zip. The developer uploads the .zip file archive to the S3 location specified in the CodeUri property. The developer runs the sam deploy command and deploys the Lambda function. The developer updates the Lambda function code and uses the same steps to deploy the new version of the Lambda function. The sam deploy command fails and returns an error of no changes to deploy.<br><br>Which solutions will deploy the new version? (Choose two.)`,
  ko: `개발자는 AWS Serverless Application Model(AWS SAM)을 사용하여 AWS Lambda 함수의 프로토타입을 만들고 있습니다. AWS SAM 템플릿에는 Amazon S3 위치를 가리키는 CodeUri 속성이 있는 AWS::Serverless::Function 리소스가 포함되어 있습니다. 개발자는 CI/CD 파이프라인을 만들기 전에 배포에 대한 올바른 명령을 식별하려고 합니다.<br><br>개발자는 package.zip이라는 이름의 Lambda 함수 코드 아카이브를 만듭니다. 개발자는 CodeUri 속성에 지정된 S3 위치에 .zip 파일 아카이브를 업로드합니다. 개발자는 sam deploy 명령을 실행하고 Lambda 함수를 배포합니다. 개발자는 Lambda 함수 코드를 업데이트하고 동일한 단계를 사용하여 새 버전의 Lambda 함수를 배포합니다. sam deploy 명령이 실패하고 배포할 변경 사항이 없다는 오류를 반환합니다.<br><br>새 버전을 배포할 솔루션은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi', multiCount: 2,
  choices: [
    { k:'A', en:`Use the aws cloudformation update-stack command instead of the sam deploy command.`, ko:`sam deploy 명령 대신 aws cloudformation update-stack 명령을 사용합니다.` },
    { k:'B', en:`Use the aws cloudformation update-stack-instances command instead of the sam deploy command.`, ko:`sam deploy 명령 대신 aws cloudformation update-stack-instances 명령을 사용합니다.` },
    { k:'C', en:`Update the CodeUri property to reference the local application code folder. Use the sam deploy command.`, ko:`로컬 애플리케이션 코드 폴더를 참조하도록 CodeUri 속성을 업데이트합니다. sam deploy 명령을 사용합니다.` },
    { k:'D', en:`Update the CodeUri property to reference the local application code folder. Use the aws cloudformation create-change-set command and the aws cloudformation execute-change-set command.`, ko:`로컬 애플리케이션 코드 폴더를 참조하도록 CodeUri 속성을 업데이트합니다. aws cloudformation create-change-set 명령과 aws cloudformation execute-change-set 명령을 사용합니다.` },
    { k:'E', en:`Update the CodeUri property to reference the local application code folder. Use the aws cloudformation package command and the aws cloudformation deploy command.`, ko:`CodeUri 속성을 업데이트하여 로컬 애플리케이션 코드 폴더를 참조합니다. aws cloudformation package 명령과 aws cloudformation deploy 명령을 사용합니다.` },
  ],
  answer: ['C','E'],
  vote: '85% CE',
  explain: `<p><span class="mark-ok">✅ C — CodeUri를 로컬 폴더로 변경 후 sam deploy</span></p>
<p>CodeUri를 로컬 폴더로 지정하면 sam deploy 실행 시 SAM이 자동으로 코드를 패키징하여 S3에 업로드하고 새 S3 URI로 템플릿을 갱신합니다. 코드 변경이 항상 감지되어 "변경 없음" 오류가 발생하지 않습니다.</p>
<p><span class="mark-ok">✅ E — aws cloudformation package + aws cloudformation deploy</span></p>
<p><code>aws cloudformation package</code>는 로컬 코드를 S3에 업로드하고 새 S3 URI로 템플릿을 갱신합니다. <code>aws cloudformation deploy</code>는 갱신된 템플릿을 배포합니다. C와 동일한 효과를 CloudFormation CLI로 구현합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — <code>aws cloudformation update-stack</code>은 패키징 단계가 없어 S3의 동일한 파일을 참조하므로 코드 변경을 감지하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — <code>update-stack-instances</code>는 StackSets 전용 명령으로 단일 Lambda 함수 배포에는 사용하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 로컬 코드를 S3에 업로드하는 패키징 단계 없이 create-change-set만 사용하면 변경 사항이 올바르게 감지되지 않습니다.</p>`,
  disc: [{ ans:'CE (85%)', txt:'핵심은 CodeUri를 로컬 경로로 변경하여 SAM/CloudFormation이 매번 코드를 패키징하도록 하는 것입니다.' }]
},
{
  n: 257,
  en: `A company runs its container workloads in AWS App Runner. A DevOps engineer manages the company's container repository in Amazon Elastic Container Registry (Amazon ECR).<br><br>The DevOps engineer must implement a solution that continuously monitors the container repository. The solution must create a new container image when the solution detects an operating system vulnerability or language package vulnerability.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 AWS App Runner에서 컨테이너 워크로드를 실행합니다. DevOps 엔지니어가 Amazon Elastic Container Registry(Amazon ECR)에서 회사의 컨테이너 리포지토리를 관리합니다.<br><br>DevOps 엔지니어는 컨테이너 리포지토리를 지속적으로 모니터링하는 솔루션을 구현해야 합니다. 솔루션은 운영 체제 취약성이나 언어 패키지 취약성을 감지하면 새 컨테이너 이미지를 생성해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use EC2 Image Builder to create a container image pipeline. Use Amazon ECR as the target repository. Turn on enhanced scanning on the ECR repository. Create an Amazon EventBridge rule to capture an Inspector finding event. Use the event to invoke the image pipeline. Re-upload the container to the repository.`, ko:`EC2 Image Builder를 사용하여 컨테이너 이미지 파이프라인을 만듭니다. Amazon ECR을 대상 저장소로 사용합니다. ECR 저장소에서 강화된 스캐닝을 켭니다. Inspector 결과 이벤트를 캡처하기 위한 Amazon EventBridge 규칙을 만듭니다. 이벤트를 사용하여 이미지 파이프라인을 호출합니다. 컨테이너를 저장소에 다시 업로드합니다.` },
    { k:'B', en:`Use EC2 Image Builder to create a container image pipeline. Use Amazon ECR as the target repository. Enable Amazon GuardDuty Malware Protection on the container workload. Create an Amazon EventBridge rule to capture a GuardDuty finding event. Use the event to invoke the image pipeline.`, ko:`EC2 Image Builder를 사용하여 컨테이너 이미지 파이프라인을 만듭니다. Amazon ECR을 대상 리포지토리로 사용합니다. 컨테이너 워크로드에서 Amazon GuardDuty Malware Protection을 활성화합니다. GuardDuty 결과 이벤트를 캡처하기 위한 Amazon EventBridge 규칙을 만듭니다. 이벤트를 사용하여 이미지 파이프라인을 호출합니다.` },
    { k:'C', en:`Create an AWS CodeBuild project to create a container image. Use Amazon ECR as the target repository. Turn on basic scanning on the repository. Create an Amazon EventBridge rule to capture an ECR image action event. Use the event to invoke the CodeBuild project. Re-upload the container to the repository.`, ko:`컨테이너 이미지를 생성하기 위해 AWS CodeBuild 프로젝트를 만듭니다. Amazon ECR을 대상 리포지토리로 사용합니다. 리포지토리에서 기본 스캐닝을 켭니다. ECR 이미지 작업 이벤트를 캡처하기 위해 Amazon EventBridge 규칙을 만듭니다. 이벤트를 사용하여 CodeBuild 프로젝트를 호출합니다. 컨테이너를 리포지토리에 다시 업로드합니다.` },
    { k:'D', en:`Create an AWS CodeBuild project to create a container image. Use Amazon ECR as the target repository. Configure AWS Systems Manager Compliance to scan all managed nodes. Create an Amazon EventBridge rule to capture a configuration compliance state change event. Use the event to invoke the CodeBuild project.`, ko:`컨테이너 이미지를 생성하기 위해 AWS CodeBuild 프로젝트를 만듭니다. Amazon ECR을 대상 리포지토리로 사용합니다. 모든 관리 노드를 스캔하도록 AWS Systems Manager Compliance를 구성합니다. 구성 준수 상태 변경 이벤트를 캡처하기 위해 Amazon EventBridge 규칙을 만듭니다. 이벤트를 사용하여 CodeBuild 프로젝트를 호출합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — ECR 강화된 스캐닝 + Inspector 이벤트 + EC2 Image Builder 파이프라인</span></p>
<p>ECR 강화된 스캐닝(Amazon Inspector 통합)은 OS 취약성과 언어 패키지 취약성을 지속적으로 모니터링합니다. 취약성 발견 시 Inspector 이벤트가 EventBridge에 전달되고, EventBridge 규칙이 EC2 Image Builder 파이프라인을 트리거하여 새로운 컨테이너 이미지를 빌드합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — GuardDuty Malware Protection은 악성 코드 탐지용으로, OS/언어 패키지 취약성 스캔을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 기본 스캐닝은 언어 패키지 취약성을 지원하지 않습니다. ECR 이미지 작업 이벤트는 취약성 발견이 아닌 이미지 푸시/풀 이벤트입니다.</p>
<p><span class="mark-no">❌ D</span> — SSM Compliance는 EC2 인스턴스의 상태를 검사하는 것으로, ECR 컨테이너 이미지 취약성 스캔과 무관합니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'ECR 강화된 스캐닝(Inspector) → EventBridge → EC2 Image Builder 파이프라인의 자동화 흐름이 요구 사항을 정확히 충족합니다.' }]
},
{
  n: 258,
  en: `A company wants to use AWS Systems Manager documents to bootstrap physical laptops for developers. The bootstrap code is stored in GitHub. A DevOps engineer has already created a Systems Manager activation, installed the Systems Manager agent with the registration code, and installed an activation ID on all the laptops.<br><br>Which set of steps should be taken next?`,
  ko: `한 회사에서는 개발자를 위해 실제 노트북을 부트스트랩하기 위해 AWS Systems Manager 문서를 사용하고자 합니다. 부트스트랩 코드는 GitHub에 저장됩니다. DevOps 엔지니어는 이미 Systems Manager 활성화를 생성하고, 등록 코드로 Systems Manager 에이전트를 설치하고, 모든 노트북에 활성화 ID를 설치했습니다.<br><br>다음에 어떤 단계를 수행해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure the Systems Manager document to use the AWS-RunShellScript command to copy the files from GitHub to Amazon S3, then use the aws-downloadContent plugin with a sourceType of S3.`, ko:`AWS-RunShellScript 명령을 사용하여 GitHub에서 Amazon S3로 파일을 복사하도록 Systems Manager 문서를 구성한 다음, sourceType을 S3로 지정하여 aws-downloadContent 플러그인을 사용합니다.` },
    { k:'B', en:`Configure the Systems Manager document to use the aws-configurePackage plugin with an install action and point to the Git repository.`, ko:`설치 작업과 함께 aws-configurePackage 플러그인을 사용하고 Git 저장소를 가리키도록 Systems Manager 문서를 구성합니다.` },
    { k:'C', en:`Configure the Systems Manager document to use the aws-downloadContent plugin with a sourceType of GitHub and sourceInfo with the repository details.`, ko:`GitHub의 sourceType과 저장소 세부 정보가 있는 sourceInfo를 사용하여 aws-downloadContent 플러그인을 사용하도록 Systems Manager 문서를 구성합니다.` },
    { k:'D', en:`Configure the Systems Manager document to use the aws:softwareInventory plugin and run the script from the Git repository.`, ko:`aws:softwareInventory 플러그인을 사용하여 Systems Manager 문서를 구성하고 Git 저장소에서 스크립트를 실행합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — aws-downloadContent 플러그인 (sourceType: GitHub)</span></p>
<p>SSM 문서의 <code>aws:downloadContent</code> 플러그인은 GitHub, S3 등 다양한 원격 소스에서 콘텐츠를 직접 다운로드할 수 있습니다. <code>sourceType</code>을 GitHub로 설정하고 <code>sourceInfo</code>에 리포지토리 정보를 제공하면 S3 중간 단계 없이 GitHub에서 직접 부트스트랩 코드를 다운로드합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — GitHub → S3 → 다운로드의 불필요한 중간 단계가 필요합니다. aws-downloadContent가 GitHub를 직접 지원하므로 복잡한 접근입니다.</p>
<p><span class="mark-no">❌ B</span> — aws-configurePackage는 SSM Distributor 패키지를 설치하는 플러그인으로, 일반 Git 리포지토리 코드 실행에는 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — aws:softwareInventory는 설치된 소프트웨어 목록을 수집하는 인벤토리 플러그인으로, 스크립트 실행 용도가 아닙니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'aws:downloadContent 플러그인은 GitHub를 직접 sourceType으로 지원하는 표준 SSM 플러그인입니다.' }]
},
{
  n: 259,
  en: `A company's development team uses AWS CloudFormation to deploy its application resources. The team must use CloudFormation for all changes to the environment. The team cannot use the AWS Management Console or the AWS CLI to make manual changes directly.<br><br>The team uses a developer IAM role to access the environment. The role is configured with the AdministratorAccess managed IAM policy. The company has created a new CloudFormationDeployment IAM role that has the following policy attached:<br><br>[Image showing a policy that grants broad permissions for resource management]<br><br>The company wants to ensure that only CloudFormation can use the new role. The development team cannot make any manual changes to the deployed resources.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `회사의 개발팀은 AWS CloudFormation을 사용하여 애플리케이션 리소스를 배포합니다. 팀은 환경에 대한 모든 변경 사항에 대해 CloudFormation을 사용해야 합니다. 팀은 AWS Management Console 또는 AWS CLI를 사용하여 직접 수동으로 변경할 수 없습니다.<br><br>팀은 개발자 IAM 역할을 사용하여 환경에 액세스합니다. 역할은 AdministratorAccess 관리형 IAM 정책으로 구성됩니다. 회사는 다음 정책이 첨부된 새 CloudFormationDeployment IAM 역할을 만들었습니다.<br><br>[광범위한 리소스 관리 권한을 부여하는 정책 이미지]<br><br>회사는 CloudFormation만 새 역할을 사용할 수 있도록 하려고 합니다. 개발팀은 배포된 리소스를 수동으로 변경할 수 없습니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Remove the AdministratorAccess policy. Assign the ReadOnlyAccess managed IAM policy to the developer role. Instruct the developers to use the CloudFormationDeployment role as a CloudFormation service role when the developers deploy new stacks.`, ko:`AdministratorAccess 정책을 제거합니다. ReadOnlyAccess 관리형 IAM 정책을 개발자 역할에 할당합니다. 개발자가 새 스택을 배포할 때 CloudFormationDeployment 역할을 CloudFormation 서비스 역할로 사용하도록 개발자에게 지시합니다.` },
    { k:'B', en:`Update the trust policy of the CloudFormationDeployment role to allow the developer IAM role to assume the CloudFormationDeployment role.`, ko:`CloudFormationDeployment 역할의 신뢰 정책을 업데이트하여 개발자 IAM 역할이 CloudFormationDeployment 역할을 수임할 수 있도록 허용합니다.` },
    { k:'C', en:`Configure the developer IAM role to be able to get and pass the CloudFormationDeployment role if iam:PassedToService equals cloudformation.amazonaws.com. Configure the CloudFormationDeployment role to allow all cloudformation actions for all resources.`, ko:`iam:PassedToService가 cloudformation.amazonaws.com이면 CloudFormationDeployment 역할을 가져오고 전달할 수 있도록 개발자 IAM 역할을 구성합니다. 모든 리소스에 대한 모든 cloudformation 작업을 허용하도록 CloudFormationDeployment 역할을 구성합니다.` },
    { k:'D', en:`Update the trust policy of the CloudFormationDeployment role to allow the cloudformation.amazonaws.com AWS principal to perform the sts:AssumeRole action.`, ko:`CloudFormationDeployment 역할의 신뢰 정책을 업데이트하여 cloudformation.amazonaws.com AWS 주체가 sts:AssumeRole 작업을 수행할 수 있도록 허용합니다.` },
    { k:'E', en:`Remove the AdministratorAccess policy. Assign the ReadOnlyAccess managed IAM policy to the developer role. Instruct the developers to assume the CloudFormationDeployment role when the developers deploy new stacks.`, ko:`AdministratorAccess 정책을 제거합니다. ReadOnlyAccess 관리형 IAM 정책을 개발자 역할에 할당합니다. 개발자가 새 스택을 배포할 때 CloudFormationDeployment 역할을 수임하도록 개발자에게 지시합니다.` },
    { k:'F', en:`Add an IAM policy to the CloudFormationDeployment role to allow cloudformation:* on all resources. Add a policy that allows the iam:PassRole action for the ARN of the CloudFormationDeployment role if iam:PassedToService equals cloudformation.amazonaws.com.`, ko:`CloudFormationDeployment 역할에 IAM 정책을 추가하여 모든 리소스에서 cloudformation:*를 허용합니다. iam:PassedToService가 cloudformation.amazonaws.com과 같은 경우 CloudFormationDeployment 역할의 ARN에 대한 iam:PassRole 작업을 허용하는 정책을 추가합니다.` },
  ],
  answer: ['A','D','F'],
  vote: '83% ADF',
  explain: `<p><span class="mark-ok">✅ A</span> — 개발자 역할에서 AdministratorAccess를 제거하고 ReadOnlyAccess로 교체하여 수동 변경을 방지합니다. 개발자는 스택 배포 시 CloudFormationDeployment 역할을 <strong>서비스 역할</strong>로 지정합니다(직접 수임하는 것이 아님).</p>
<p><span class="mark-ok">✅ D</span> — CloudFormationDeployment 역할의 신뢰 정책에 <code>cloudformation.amazonaws.com</code>을 허용하면 CloudFormation 서비스만 해당 역할을 수임할 수 있습니다. 개발자가 직접 수임하는 것을 방지합니다.</p>
<p><span class="mark-ok">✅ F</span> — 개발자 역할에 iam:PassRole 권한을 추가하되, <code>iam:PassedToService=cloudformation.amazonaws.com</code> 조건을 걸어 CloudFormation에만 역할을 전달할 수 있도록 제한합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 개발자 IAM 역할이 CloudFormationDeployment 역할을 직접 수임할 수 있으면, 개발자가 해당 역할로 수동 변경을 할 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — CloudFormationDeployment 역할에 cloudformation:* 권한을 부여하면 스택 삭제 등 의도치 않은 작업이 가능합니다.</p>
<p><span class="mark-no">❌ E</span> — 개발자가 CloudFormationDeployment 역할을 직접 수임하면 수동 변경을 방지할 수 없습니다.</p>`,
  disc: [{ ans:'ADF (83%)', txt:'개발자를 ReadOnly로 제한하고(A), CloudFormation 서비스만 역할을 수임하도록 신뢰 정책 설정(D), iam:PassRole 조건부 허용(F)의 세 단계 조합입니다.' }]
},
{
  n: 260,
  en: `A company is developing a web application's infrastructure using AWS CloudFormation. The database engineering team maintains the database resources in a CloudFormation template, and the software development team maintains the web application resources in a separate CloudFormation template. As the scope of the application grows, the software development team needs to use resources maintained by the database engineering team. However, both teams have their own review and lifecycle management processes that they want to keep. Both teams also require resource-level change-set reviews. The software development team would like to deploy changes to this template using their CI/CD pipeline.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 AWS CloudFormation을 사용하여 웹 애플리케이션의 인프라를 개발하고 있습니다. 데이터베이스 엔지니어링 팀은 CloudFormation 템플릿에서 데이터베이스 리소스를 유지 관리하고 소프트웨어 개발 팀은 별도의 CloudFormation 템플릿에서 웹 애플리케이션 리소스를 유지 관리합니다. 애플리케이션의 범위가 커짐에 따라 소프트웨어 개발 팀은 데이터베이스 엔지니어링 팀이 유지 관리하는 리소스를 사용해야 합니다. 그러나 두 팀 모두 유지하려는 자체 검토 및 수명 주기 관리 프로세스가 있습니다. 두 팀 모두 리소스 수준 변경 세트 검토도 필요합니다. 소프트웨어 개발 팀은 CI/CD 파이프라인을 사용하여 이 템플릿에 변경 사항을 배포하려고 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a stack export from the database CloudFormation template and import those references into the web application CloudFormation template.`, ko:`데이터베이스 CloudFormation 템플릿에서 스택 내보내기를 만들고 해당 참조를 웹 애플리케이션 CloudFormation 템플릿으로 가져옵니다.` },
    { k:'B', en:`Create a CloudFormation nested stack to make cross-stack resource references and parameters available in both stacks.`, ko:`CloudFormation 중첩 스택을 생성하여 두 스택 모두에서 크로스 스택 리소스 참조 및 매개변수를 사용할 수 있도록 합니다.` },
    { k:'C', en:`Create a CloudFormation stack set to make cross-stack resource references and parameters available in both stacks.`, ko:`두 스택 모두에서 크로스 스택 리소스 참조 및 매개변수를 사용할 수 있도록 CloudFormation 스택 세트를 생성합니다.` },
    { k:'D', en:`Create input parameters in the web application CloudFormation template and pass resource names and IDs from the database stack.`, ko:`웹 애플리케이션 CloudFormation 템플릿에서 입력 매개변수를 만들고 데이터베이스 스택에서 리소스 이름과 ID를 전달합니다.` },
  ],
  answer: ['A'],
  vote: '93% A',
  explain: `<p><span class="mark-ok">✅ A — CloudFormation 스택 내보내기(Export) + Fn::ImportValue</span></p>
<p>데이터베이스 스택에서 <code>Outputs</code> 섹션에 Export를 추가하고, 웹 애플리케이션 스택에서 <code>Fn::ImportValue</code>로 가져옵니다. 두 스택은 완전히 독립적으로 관리되며 각 팀의 수명 주기 및 검토 프로세스가 유지됩니다. 변경 세트 검토도 스택별로 가능하며 CI/CD 파이프라인과 호환됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 중첩 스택은 모든 스택을 하나의 부모 스택으로 통합하므로 각 팀의 독립적인 수명 주기 관리가 어렵습니다.</p>
<p><span class="mark-no">❌ C</span> — 스택 세트는 여러 AWS 계정 및 리전에 동일한 스택을 배포하는 용도이며, 크로스 스택 참조 메커니즘이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — 입력 매개변수 수동 전달은 데이터베이스 스택 변경 시마다 수동으로 값을 업데이트해야 하며 자동화와 추적성이 부족합니다.</p>`,
  disc: [{ ans:'A (93%)', txt:'스택 Export/Import는 독립적인 스택 수명 주기를 유지하면서 리소스를 참조하는 표준 CloudFormation 크로스 스택 참조 방법입니다.' }]
}
];
