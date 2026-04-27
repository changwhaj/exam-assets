window.QS_SET42 = [
{
  n: 411,
  en: `A DevOps engineer needs to configure an AWS CodePipeline pipeline that publishes container images to an Amazon Elastic Container Registry (Amazon ECR) repository. The pipeline must wait for the previous run to finish and must run when new Git tags are pushed to a Git repository that is connected to AWS CodeConnections. An existing deployment pipeline needs to run in response to the publication of new container images.<br><br>Which solution will meet these requirements?`,
  ko: `DevOps 엔지니어는 컨테이너 이미지를 Amazon Elastic Container Registry(Amazon ECR) 리포지토리에 게시하는 AWS CodePipeline 파이프라인을 구성해야 합니다. 이 파이프라인은 이전 실행이 완료될 때까지 기다려야 하며, AWS CodeConnections에 연결된 Git 리포지토리에 새 Git 태그가 푸시될 때 실행되어야 합니다. 기존 배포 파이프라인은 새 컨테이너 이미지 게시 시 실행되어야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure a CodePipeline V2 type pipeline that uses QUEUED mode. Add a trigger filter to the pipeline definition that includes all tags. Configure an Amazon EventBridge rule that matches container image pushes to start the existing deployment pipeline.`, ko:`QUEUED 모드를 사용하는 CodePipeline V2 유형 파이프라인을 구성합니다. 모든 태그를 포함하는 트리거 필터를 파이프라인 정의에 추가합니다. 컨테이너 이미지 푸시와 일치하는 Amazon EventBridge 규칙을 구성하여 기존 배포 파이프라인을 시작합니다.` },
    { k:'B', en:`Configure a CodePipeline V2 type pipeline that uses SUPERSEDED mode. Add a trigger filter to the pipeline definition that includes all branches. Configure an Amazon EventBridge rule that matches container image pushes to start the existing deployment pipeline.`, ko:`SUPERSEDED 모드를 사용하는 CodePipeline V2 유형 파이프라인을 구성합니다. 모든 브랜치를 포함하는 트리거 필터를 파이프라인 정의에 추가합니다. 컨테이너 이미지 푸시와 일치하는 Amazon EventBridge 규칙을 구성하여 기존 배포 파이프라인을 시작합니다.` },
    { k:'C', en:`Configure a CodePipeline V1 type pipeline that uses SUPERSEDED mode. Add a trigger filter to the pipeline definition that includes all tags. Add a stage at the end of the pipeline to invoke the existing deployment pipeline.`, ko:`SUPERSEDED 모드를 사용하는 CodePipeline V1 유형 파이프라인을 구성합니다. 모든 태그를 포함하는 트리거 필터를 파이프라인 정의에 추가합니다. 기존 배포 파이프라인을 호출하는 단계를 파이프라인 끝에 추가합니다.` },
    { k:'D', en:`Configure a CodePipeline V1 type pipeline that uses QUEUED mode. Add a trigger filter to the pipeline definition that includes all branches. Add a stage at the end of the pipeline to invoke the existing deployment pipeline.`, ko:`QUEUED 모드를 사용하는 CodePipeline V1 유형의 파이프라인을 구성합니다. 모든 브랜치를 포함하는 트리거 필터를 파이프라인 정의에 추가합니다. 기존 배포 파이프라인을 호출하는 단계를 파이프라인 끝에 추가합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>세 가지 요구사항을 모두 충족합니다.</p>
<ul>
<li><strong>V2 + QUEUED 모드</strong>: 이전 실행이 완료될 때까지 다음 실행이 대기합니다.</li>
<li><strong>태그 트리거 필터</strong>: V2 파이프라인은 Git 태그 기반 트리거 필터를 지원합니다(V1은 미지원).</li>
<li><strong>EventBridge 규칙</strong>: ECR 이미지 푸시 이벤트를 감지하여 기존 배포 파이프라인을 자동 시작합니다.</li>
</ul>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 브랜치 필터가 아닌 태그 필터가 필요하며, SUPERSEDED는 이전 실행을 취소하므로 "대기" 요건 위반입니다.</p>
<p><span class="mark-no">❌ C/D</span> — CodePipeline V1은 태그 기반 트리거 필터를 지원하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 파이프라인 끝에 배포 파이프라인 호출 단계를 추가하면 이미지 빌드 파이프라인과 배포 파이프라인이 결합되어 독립성이 떨어집니다.</p>`,
  disc: []
},
{
  n: 412,
  en: `A company is running an application on Amazon Elastic Kubernetes Service (Amazon EKS). The company needs to implement comprehensive logging for the control plane and the nodes. The company must analyze API requests to the Kubernetes control plane and must monitor container performance on the nodes.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `한 회사가 Amazon Elastic Kubernetes Service(Amazon EKS)에서 애플리케이션을 실행하고 있습니다. 이 회사는 컨트롤 플레인과 노드에 대한 포괄적인 로깅을 구현해야 합니다. Kubernetes 컨트롤 플레인에 대한 API 요청을 분석하고 노드에서 컨테이너 성능을 모니터링해야 합니다.<br><br>이러한 요구 사항을 충족하면서 운영 오버헤드를 최소화하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Enable AWS CloudTrail for control plane logging. Deploy Logstash as a ReplicaSet on the nodes to collect logs from the nodes. Use Amazon OpenSearch Service to store and analyze the logs for the control plane and the nodes.`, ko:`컨트롤 플레인 로깅을 위해 AWS CloudTrail을 활성화합니다. 노드에서 로그를 수집하기 위해 Logstash를 ReplicaSet으로 노드에 배포합니다. Amazon OpenSearch Service를 사용하여 컨트롤 플레인 및 노드의 로그를 저장하고 분석합니다.` },
    { k:'B', en:`Enable control plane logging for the EKS cluster. Send the logs to Amazon CloudWatch. Use CloudWatch Container Insights to collect logs for the nodes and the containers. Use CloudWatch Logs Insights to query and analyze the logs for the control plane and the nodes.`, ko:`EKS 클러스터에 대한 컨트롤 플레인 로깅을 활성화합니다. 로그를 Amazon CloudWatch로 전송합니다. CloudWatch Container Insights를 사용하여 노드 및 컨테이너에 대한 로그를 수집합니다. CloudWatch Logs Insights를 사용하여 컨트롤 플레인 및 노드에 대한 로그를 쿼리하고 분석합니다.` },
    { k:'C', en:`Enable API server control plane logging for the EKS cluster. Send the logs to Amazon S3. Deploy Kubernetes Event Exporter to the nodes to collect logs from the nodes. Send the logs to Amazon S3. Use Amazon Athena to query logs for the control plane and the nodes. Use Amazon QuickSight for visualization.`, ko:`EKS 클러스터에 대한 API 서버 제어 플레인 로깅을 활성화합니다. 로그를 Amazon S3로 전송합니다. 노드에 Kubernetes Event Exporter를 배포하여 노드에서 로그를 수집합니다. 수집된 로그를 Amazon S3로 전송합니다. Amazon Athena를 사용하여 제어 플레인 및 노드의 로그를 쿼리합니다. Amazon QuickSight를 사용하여 시각화합니다.` },
    { k:'D', en:`Use AWS Distro for OpenTelemetry to collect logs for the control plane and the nodes. Stream all the logs to Amazon Data Firehose. Use Amazon Redshift to analyze the aggregated log data for the control plane and the nodes.`, ko:`AWS Distro for OpenTelemetry를 사용하여 컨트롤 플레인과 노드의 로그를 수집합니다. 모든 로그를 Amazon Data Firehose로 스트리밍합니다. Amazon Redshift를 사용하여 컨트롤 플레인과 노드의 집계된 로그 데이터를 분석합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>EKS 컨트롤 플레인 로깅은 CloudWatch로 직접 전송 가능하며, CloudWatch Container Insights는 EKS 노드/컨테이너 성능 지표와 로그를 자동 수집합니다. CloudWatch Logs Insights로 두 소스의 로그를 단일 환경에서 분석할 수 있어 추가 인프라 없이 최소 운영 오버헤드로 요구사항을 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudTrail은 EKS 컨트롤 플레인 로그 전용이 아니며, Logstash + OpenSearch 구성은 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ C</span> — S3 + Athena + QuickSight 파이프라인은 구성이 복잡하고 실시간 분석이 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — OpenTelemetry + Firehose + Redshift는 로그 분석보다 대용량 데이터 웨어하우징에 적합하며 불필요하게 복잡합니다.</p>`,
  disc: []
},
{
  n: 413,
  en: `A company wants to improve its security practices by enforcing least privilege across all projects. Developers must be able to access Amazon EC2 resources but not Amazon RDS resources. Database administrators must have access only to Amazon RDS resources.<br><br>Every employee has a unique IAM user. There are already pre-existing IAM policies for developer and database administrator job functions. All AWS resources are already tagged with appropriate project tags. All the IAM users are tagged with the appropriate project and job function.<br><br>The company must ensure that each employee can access only the project that the employee is working on.<br><br>Which solution will meet these requirements? (Choose three.)`,
  ko: `한 회사가 모든 프로젝트에 걸쳐 최소 권한 원칙을 적용하여 보안을 강화하고자 합니다. 개발자는 Amazon EC2 리소스에는 접근할 수 있어야 하지만 Amazon RDS 리소스에는 접근할 수 없어야 합니다. 데이터베이스 관리자는 Amazon RDS 리소스에만 접근할 수 있어야 합니다.<br><br>모든 직원은 고유한 IAM 사용자를 가지고 있습니다. 개발자와 데이터베이스 관리자 직무에 대한 기존 IAM 정책이 이미 마련되어 있습니다. 모든 AWS 리소스에는 적절한 프로젝트 태그가 지정되어 있습니다. 모든 IAM 사용자에게는 적절한 프로젝트 및 직무 태그가 지정되어 있습니다.<br><br>회사는 각 직원이 자신이 담당하는 프로젝트에만 접근할 수 있도록 보장해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (세 가지를 선택하십시오.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`For each project, create one IAM role for developers and one IAM role for database administrators. Tag the IAM roles with the corresponding projects and job functions.`, ko:`각 프로젝트에 대해 개발자용 IAM 역할 하나와 데이터베이스 관리자용 IAM 역할 하나를 생성합니다. 해당 IAM 역할에 프로젝트 및 직무 기능을 태그로 지정합니다.` },
    { k:'B', en:`Modify the pre-existing IAM policies to include a StringEquals ResourceTag condition for projects that match the PrincipalTag value. Attach the modified policies to the IAM roles for each job function.`, ko:`기존 IAM 정책을 수정하여 PrincipalTag 값과 일치하는 프로젝트에 대해 StringEquals ResourceTag 조건을 추가합니다. 수정된 정책을 각 직무의 IAM 역할에 연결합니다.` },
    { k:'C', en:`Create an IAM policy that allows users to assume a role when the ResourceTag value matches the PrincipalTag value for project tags and job title tags. Attach the new policy to all IAM users.`, ko:`프로젝트 태그 및 직책 태그의 경우, ResourceTag 값이 PrincipalTag 값과 일치할 때 사용자가 역할을 수임할 수 있도록 하는 IAM 정책을 생성합니다. 새 정책을 모든 IAM 사용자에게 적용합니다.` },
    { k:'D', en:`Create an IAM policy that allows users to assume a role when the ResourceTag value matches the PrincipalTag value for project tags and job title tags. Attach the new policy to the IAM roles for each job function.`, ko:`프로젝트 태그 및 직책 태그의 경우, ResourceTag 값이 PrincipalTag 값과 일치할 때 사용자가 역할을 수임할 수 있도록 하는 IAM 정책을 생성합니다. 새 정책을 각 직무에 대한 IAM 역할에 연결합니다.` },
    { k:'E', en:`Tag the pre-existing IAM policies with the appropriate projects and job functions. Attach the modified policies to IAM roles for each job function.`, ko:`기존 IAM 정책에 적절한 프로젝트 및 직무 기능을 태그합니다. 수정된 정책을 각 직무 기능에 대한 IAM 역할에 연결합니다.` },
    { k:'F', en:`For each project, create one IAM group for developers and one IAM group for database administrators. Add the appropriate users to each group so the users can assume their respective IAM roles.`, ko:`각 프로젝트에 대해 개발자용 IAM 그룹 하나와 데이터베이스 관리자용 IAM 그룹 하나를 생성합니다. 각 그룹에 적절한 사용자를 추가하여 사용자가 해당 IAM 역할을 수행할 수 있도록 합니다.` },
  ],
  answer: ['A','B','C'],
  vote: '100% ABC',
  explain: `<p><span class="mark-ok">✅ A+B+C — 핵심 이유</span></p>
<p><strong>A</strong>: 프로젝트별 + 직무별 IAM 역할을 생성하고 태그를 지정하면, 태그 기반 조건부 역할 수임이 가능해집니다.</p>
<p><strong>B</strong>: 기존 정책에 <code>StringEquals aws:ResourceTag/project</code>와 <code>aws:PrincipalTag/project</code>가 일치할 때만 허용하는 조건을 추가하면, 사용자는 자신의 프로젝트 리소스에만 접근합니다.</p>
<p><strong>C</strong>: 사용자의 프로젝트/직무 태그와 역할 태그가 일치할 때만 역할 수임을 허용하는 정책을 모든 IAM 사용자에 연결하면, 올바른 역할만 수임 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ D</span> — 역할 수임 허용 정책을 역할에 연결하면 자기 자신이 자신을 수임하는 구조가 되어 논리적으로 부적합합니다. 사용자(principal)에 연결해야 합니다.</p>
<p><span class="mark-no">❌ E</span> — IAM 정책 자체에 태그를 지정해도 조건부 접근 제어에는 영향을 미치지 않습니다.</p>
<p><span class="mark-no">❌ F</span> — IAM 그룹은 태그 기반 조건부 역할 수임과 무관하며, 불필요한 그룹 관리 오버헤드를 추가합니다.</p>`,
  disc: []
},
{
  n: 414,
  en: `A company runs a development environment website and database on an Amazon EC2 instance that uses Amazon Elastic Block Store (Amazon EBS) storage. The company wants to make the instance more resilient to underlying hardware issues. The company wants to automatically recover the EC2 instance if AWS determines the instance has lost network connectivity.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 Amazon EBS(Amazon Elastic Block Store) 스토리지를 사용하는 Amazon EC2 인스턴스에서 개발 환경 웹사이트와 데이터베이스를 운영하고 있습니다. 이 회사는 하드웨어 문제에 대한 인스턴스의 복원력을 높이고자 합니다. 또한 AWS에서 인스턴스의 네트워크 연결이 끊어졌다고 판단할 경우 EC2 인스턴스를 자동으로 복구하기를 원합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Add the EC2 instance to an Auto Scaling group. Set the minimum, maximum, and desired capacity to 1.`, ko:`EC2 인스턴스를 자동 스케일링 그룹에 추가합니다. 최소, 최대 및 원하는 용량을 모두 1로 설정합니다.` },
    { k:'B', en:`Add the EC2 instance to an Auto Scaling group. Configure a lifecycle hook to detach the EBS volume if the EC2 instance shuts down or terminates.`, ko:`EC2 인스턴스를 자동 스케일링 그룹에 추가합니다. EC2 인스턴스가 종료되거나 종료될 경우 EBS 볼륨을 분리하도록 수명 주기 후크를 구성합니다.` },
    { k:'C', en:`Create an Amazon CloudWatch alarm for the <code>StatusCheckFailed_System</code> metric. Add an EC2 action to recover the instance when the alarm state is in ALARM.`, ko:`<code>StatusCheckFailed_System</code> 메트릭에 대한 Amazon CloudWatch 알람을 생성합니다. 알람 상태가 ALARM일 때 인스턴스를 복구하는 EC2 액션을 추가합니다.` },
    { k:'D', en:`Create an Amazon CloudWatch alarm for the <code>NetworkOut</code> metric. Add an EC2 action to recover the instance when the alarm state is in INSUFFICIENT_DATA.`, ko:`<code>NetworkOut</code> 메트릭에 대한 Amazon CloudWatch 알람을 생성합니다. 알람 상태가 INSUFFICIENT_DATA일 때 인스턴스를 복구하는 EC2 액션을 추가합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p><code>StatusCheckFailed_System</code> 메트릭은 AWS가 인스턴스의 하드웨어 문제(네트워크 연결 손실 포함)를 감지할 때 트리거됩니다. CloudWatch 알람에 EC2 복구 액션을 추가하면 동일한 인스턴스 ID, EBS 볼륨, Elastic IP를 유지하면서 자동으로 인스턴스를 복구합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Auto Scaling 그룹은 인스턴스를 새로 교체하므로 EBS 볼륨, IP, 데이터가 보존되지 않을 수 있습니다.</p>
<p><span class="mark-no">❌ B</span> — EBS 분리 수명 주기 후크는 복구 기능을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — NetworkOut 메트릭과 INSUFFICIENT_DATA 상태는 네트워크 연결 손실 감지에 부적합합니다.</p>`,
  disc: []
},
{
  n: 415,
  en: `A company operates a fleet of Amazon EC2 instances that host critical applications and handle sensitive data. The EC2 instances must have up-to-date security patches to protect against vulnerabilities and ensure compliance with industry standards and regulations. The company needs an automated solution to monitor and enforce security patch compliance across the EC2 fleet.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 핵심 애플리케이션을 호스팅하고 민감한 데이터를 처리하는 Amazon EC2 인스턴스를 운영하고 있습니다. 이러한 EC2 인스턴스는 취약점으로부터 보호하고 업계 표준 및 규정을 준수하기 위해 최신 보안 패치가 적용되어야 합니다. 회사는 EC2 인스턴스 전체에 걸쳐 보안 패치 준수 여부를 모니터링하고 강제할 수 있는 자동화된 솔루션이 필요합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure AWS Systems Manager Patch Manager and AWS Config with defined patch baselines and compliance rules that run Systems Manager Automation documents.`, ko:`AWS Systems Manager Patch Manager 및 AWS Config를 구성하여 Systems Manager 자동화 문서를 실행하는 패치 기준선 및 규정 준수 규칙을 정의합니다.` },
    { k:'B', en:`Access each EC2 instance by using SSH keys. Check for and apply security updates by using package managers. Verify the installations.`, ko:`SSH 키를 사용하여 각 EC2 인스턴스에 접속합니다. 패키지 관리자를 사용하여 보안 업데이트를 확인하고 적용합니다. 설치가 제대로 되었는지 확인합니다.` },
    { k:'C', en:`Configure Auto Scaling groups that have scaling policies based on Amazon CloudWatch metrics. Configure Auto Scaling launch templates that launch new instances by using the latest AMIs that contain new security patches.`, ko:`Amazon CloudWatch 메트릭을 기반으로 하는 스케일링 정책이 있는 Auto Scaling 그룹을 구성합니다. 최신 보안 패치가 포함된 최신 AMI를 사용하여 새 인스턴스를 시작하는 Auto Scaling 시작 템플릿을 구성합니다.` },
    { k:'D', en:`Use AWS CloudFormation to recreate EC2 instances with the latest AMI every time a new patch becomes available. Use AWS CloudTrail logs to monitor patch compliance and to send alerts for non-compliant instances.`, ko:`새 패치가 제공될 때마다 AWS CloudFormation을 사용하여 최신 AMI로 EC2 인스턴스를 다시 생성합니다. AWS CloudTrail 로그를 사용하여 패치 준수 여부를 모니터링하고, 규정을 준수하지 않는 인스턴스에 대한 알림을 보냅니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>AWS Systems Manager Patch Manager는 EC2 인스턴스의 패치 기준선 정의, 자동 패치 적용, 준수 여부 보고를 통합 관리합니다. AWS Config 규칙과 연동하면 비준수 인스턴스를 자동 탐지하고 Systems Manager Automation 문서로 자동 교정까지 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — SSH 수동 접속은 자동화가 아니며 대규모 플릿 관리에 부적합합니다.</p>
<p><span class="mark-no">❌ C</span> — 새 인스턴스를 최신 AMI로 시작하는 방식은 기존 실행 중인 인스턴스의 패치 준수 여부를 보장하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudFormation으로 인스턴스 재생성은 운영 중단을 유발하며, CloudTrail은 패치 준수 모니터링 전용 도구가 아닙니다.</p>`,
  disc: []
},
{
  n: 416,
  en: `A company has implemented a new microservices-based application on an Amazon Elastic Container Service (Amazon ECS) cluster. After each deployment, the company wants to validate the critical user journeys and API endpoints before routing traffic to the new application version.<br><br>The company must implement an automated solution to detect issues in the new deployment and to initiate a rollback if necessary.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `한 회사가 Amazon Elastic Container Service(Amazon ECS) 클러스터에 새로운 마이크로서비스 기반 애플리케이션을 구축했습니다. 회사는 배포 후 매번 핵심 사용자 여정과 API 엔드포인트를 검증한 다음 트래픽을 새 애플리케이션 버전으로 라우팅하려고 합니다.<br><br>새 배포에서 문제를 감지하고 필요한 경우 롤백을 시작하는 자동화된 솔루션을 구현해야 합니다.<br><br>이러한 요구 사항을 충족하면서 운영 오버헤드를 최소화하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Set up Amazon CloudWatch Application Insights for the ECS cluster. Create an Amazon EventBridge rule to invoke an AWS Lambda function to analyze the task states. Program the Lambda function to use the ECS UpdateService API call to initiate a rollback if a specific percentage of tasks fail.`, ko:`ECS 클러스터에 Amazon CloudWatch Application Insights를 설정합니다. 작업 상태를 분석하는 AWS Lambda 함수를 호출하는 Amazon EventBridge 규칙을 생성합니다. 특정 비율의 작업이 실패할 경우 롤백을 시작하도록 Lambda 함수를 ECS UpdateService API 호출을 사용하도록 프로그래밍합니다.` },
    { k:'B', en:`Set up Amazon CloudWatch Application Insights for the ECS cluster. Configure Application Insights to monitor key performance indicators of the microservices in the critical user journeys and API calls. Create CloudWatch alarms based on the insights. Use Amazon EventBridge to invoke an AWS Step Functions workflow to evaluate the alarms. Configure the workflow to initiate a rollback if necessary by using the alarms' built-in integration with Amazon ECS.`, ko:`ECS 클러스터에 Amazon CloudWatch Application Insights를 설정합니다. Application Insights를 구성하여 주요 사용자 여정 및 API 호출에서 마이크로서비스의 핵심 성능 지표를 모니터링합니다. 인사이트를 기반으로 CloudWatch 알람을 생성합니다. Amazon EventBridge를 사용하여 AWS Step Functions 워크플로를 실행하고 알람을 평가합니다. Amazon ECS와의 내장 통합 기능을 활용하여 필요한 경우 롤백을 시작하도록 워크플로를 구성합니다.` },
    { k:'C', en:`Create CloudWatch Synthetics canaries that simulate critical user journeys and API calls. Implement AWS X-Ray tracing for all the microservices. Configure X-Ray to send traces to CloudWatch. Create CloudWatch alarms based on error rates and latency metrics. Create an AWS Lambda function to analyze the traces and to initiate a rollback if necessary by using the alarms' built-in integration with Amazon ECS.`, ko:`핵심 사용자 여정과 API 호출을 시뮬레이션하는 CloudWatch Synthetics 카나리를 생성합니다. 모든 마이크로서비스에 대해 AWS X-Ray 트레이싱을 구현하고, X-Ray가 CloudWatch로 트레이스를 전송하도록 구성합니다. 오류율 및 지연 시간 지표를 기반으로 CloudWatch 알람을 생성합니다. Amazon ECS와의 내장 통합 기능을 활용하여 트레이스를 분석하고 필요한 경우 롤백을 시작하는 AWS Lambda 함수를 생성합니다.` },
    { k:'D', en:`Create CloudWatch Synthetics canaries that simulate critical user journeys and API calls. Configure the canaries to run against the new deployment. Create CloudWatch alarms that are invoked when canaries fail. Use the alarms' built-in integration with Amazon ECS to initiate a rollback if the alarms are invoked before traffic is routed to the new deployment.`, ko:`중요한 사용자 여정과 API 호출을 시뮬레이션하는 CloudWatch Synthetics 카나리를 생성합니다. 새 배포 환경에서 실행되도록 카나리를 구성합니다. 카나리 실행 실패 시 호출되는 CloudWatch 알람을 생성합니다. 알람이 새 배포 환경으로 트래픽이 라우팅되기 전에 호출될 경우, Amazon ECS와의 내장 통합 기능을 사용하여 롤백을 시작합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>CloudWatch Synthetics 카나리는 실제 사용자 여정과 API를 자동으로 시뮬레이션합니다. 새 배포에 대해 카나리를 실행하고, 실패 시 CloudWatch 알람이 ECS와의 내장 통합을 통해 자동 롤백을 시작합니다. 이 흐름은 추가 Lambda나 Step Functions 없이 관리형 서비스만으로 완결되어 운영 오버헤드가 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Lambda 함수를 직접 프로그래밍하여 ECS API를 호출하는 방식은 추가 개발 및 유지보수가 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — Step Functions 워크플로 구성은 불필요하게 복잡합니다.</p>
<p><span class="mark-no">❌ C</span> — X-Ray 트레이싱은 사용자 여정 시뮬레이션(Synthetics)을 대체할 수 없으며, Lambda 분석 코드 작성이 추가로 필요합니다.</p>`,
  disc: []
},
{
  n: 417,
  en: `A company's applications run on Amazon EC2 instances and use AWS Lambda functions in multiple AWS accounts. All EC2 instances have the Amazon CloudWatch agent installed. All accounts belong to the same organization in AWS Organizations. The company has created a dedicated central log account.<br><br>All logs that the applications produce must be sent to a central location. The logs must be encrypted with keys that the company manages.<br><br>Which solution meets these requirements with the LEAST operational overhead?`,
  ko: `이 회사의 애플리케이션은 여러 AWS 계정의 Amazon EC2 인스턴스와 AWS Lambda 함수에서 실행됩니다. 모든 EC2 인스턴스에는 Amazon CloudWatch 에이전트가 설치되어 있습니다. 모든 계정은 AWS Organizations에서 동일한 조직에 속해 있습니다. 회사는 전용 중앙 로그 계정을 생성했습니다.<br><br>애플리케이션에서 생성되는 모든 로그는 이 중앙 위치로 전송되어야 합니다. 또한, 로그는 회사가 관리하는 키로 암호화되어야 합니다.<br><br>이러한 요구 사항을 충족하면서 운영 오버헤드를 최소화하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`In the central log account, enable logs as the data source in CloudWatch. Add the organization ID to the source account list. Create a CloudFormation StackSet by using the template provided by CloudWatch to enable central monitoring in all the organization's accounts.`, ko:`중앙 로그 계정에서 CloudWatch의 데이터 소스로 로그를 활성화합니다. 소스 계정 목록에 조직 ID를 추가합니다. CloudWatch에서 제공하는 템플릿을 사용하여 CloudFormation StackSet을 생성하면 조직의 모든 계정에서 중앙 모니터링이 활성화됩니다.` },
    { k:'B', en:`Create an Amazon S3 bucket in the central log account. Create an Amazon Data Firehose stream in the central log account. Set the S3 bucket as the destination of the Firehose stream. Create a log subscription in the central log account. Set the Firehose stream as a target of the subscription. Store the subscription log ARN in AWS Systems Manager Parameter Store for each project to use to send logs to the S3 bucket.`, ko:`중앙 로그 계정에 Amazon S3 버킷을 생성합니다. 중앙 로그 계정에 Amazon Data Firehose 스트림을 생성합니다. S3 버킷을 Firehose 스트림의 대상으로 설정합니다. 중앙 로그 계정에 로그 구독을 생성합니다. Firehose 스트림을 구독의 대상으로 설정합니다. 각 프로젝트의 구독 로그 ARN을 AWS Systems Manager 파라미터 스토어에 저장하여 S3 버킷으로 로그를 전송하는 데 사용합니다.` },
    { k:'C', en:`Create an Amazon S3 bucket in each account. Create an Amazon OpenSearch Service cluster in the central log account. Create an Amazon Simple Queue Service (Amazon SQS) queue in the central log account. Create an S3 trigger that sends events to the SQS queue each time a new file is uploaded to the S3 bucket. Create a Lambda function that processes each file and sends each file to the OpenSearch Service cluster.`, ko:`각 계정에 Amazon S3 버킷을 생성합니다. 중앙 로그 계정에 Amazon OpenSearch Service 클러스터를 생성합니다. 중앙 로그 계정에 Amazon Simple Queue Service(Amazon SQS) 큐를 생성합니다. 새 파일이 S3 버킷에 업로드될 때마다 SQS 큐로 이벤트를 전송하는 S3 트리거를 생성합니다. 각 파일을 처리하고 OpenSearch Service 클러스터로 전송하는 Lambda 함수를 생성합니다.` },
    { k:'D', en:`Create an Amazon S3 bucket in the central log account. Create an Amazon Data Firehose stream in each account. Set the S3 bucket as the destination of the Firehose streams. Create a log subscription in each account with the Firehose streams as a target.`, ko:`중앙 로그 계정에 Amazon S3 버킷을 생성합니다. 각 계정에 Amazon Data Firehose 스트림을 생성합니다. S3 버킷을 Firehose 스트림의 대상으로 설정합니다. 각 계정에 Firehose 스트림을 대상으로 하는 로그 구독을 생성합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>CloudWatch의 <strong>교차 계정 관찰성(Cross-Account Observability)</strong> 기능은 중앙 계정에서 조직 ID를 소스로 추가하고 CloudFormation StackSet으로 모든 계정에 자동 배포하면, 각 계정의 로그가 중앙으로 수집됩니다. 고객 관리형 KMS 키로 CloudWatch Logs 암호화를 구성하여 키 관리 요건도 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ D</span> — 각 계정에 Firehose 스트림을 개별 생성하는 방식은 계정 수에 비례하여 운영 오버헤드가 증가합니다.</p>
<p><span class="mark-no">❌ B</span> — 중앙 계정에만 구독을 생성하는 방식은 소스 계정 로그를 직접 중앙으로 전송하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — 계정별 S3 + OpenSearch + SQS + Lambda 구조는 과도하게 복잡합니다.</p>`,
  disc: []
},
{
  n: 418,
  en: `A DevOps engineer needs to implement a CI/CD pipeline in an AWS account. The pipeline must consume sensitive database credentials that are stored in an AWS Systems Manager Parameter Store parameter. The Parameter Store parameter is in a separate central account. The DevOps engineer needs to create and integrate the parameter with the CI/CD account.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `DevOps 엔지니어가 AWS 계정에 CI/CD 파이프라인을 구현해야 합니다. 이 파이프라인은 AWS Systems Manager 파라미터 스토어에 저장된 민감한 데이터베이스 자격 증명을 사용해야 합니다. 파라미터 스토어 파라미터는 별도의 중앙 계정에 있습니다. DevOps 엔지니어는 해당 파라미터를 생성하고 CI/CD 계정과 통합해야 합니다.<br><br>다음 단계 중 어떤 조합이 이러한 요구 사항을 충족할까요? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Use an advanced tier Parameter Store parameter to store the database credentials in the central AWS account.`, ko:`고급 계층 파라미터 스토어 파라미터를 사용하여 데이터베이스 자격 증명을 중앙 AWS 계정에 저장합니다.` },
    { k:'B', en:`Create an IAM role in the AWS account that hosts the CI/CD pipeline. Add the full ARN of the parameter to the IAM policy that is associated with the IAM role.`, ko:`CI/CD 파이프라인을 호스팅하는 AWS 계정에 IAM 역할을 생성합니다. 해당 IAM 역할과 연결된 IAM 정책에 파라미터의 전체 ARN을 추가합니다.` },
    { k:'C', en:`Use a standard tier Parameter Store parameter to store the database credentials in the central AWS account.`, ko:`표준 계층 파라미터 스토어 파라미터를 사용하여 데이터베이스 자격 증명을 중앙 AWS 계정에 저장합니다.` },
    { k:'D', en:`Use an AWS KMS managed key to encrypt the parameter. Grant decrypt permissions for the KMS key to the AWS account that hosts the CI/CD pipeline.`, ko:`AWS KMS 관리형 키를 사용하여 파라미터를 암호화합니다. CI/CD 파이프라인을 호스팅하는 AWS 계정에 KMS 키에 대한 복호화 권한을 부여합니다.` },
    { k:'E', en:`Use a customer managed AWS KMS key to encrypt the parameter. Grant decrypt permissions for the customer managed key to the AWS account that hosts the CI/CD pipeline.`, ko:`고객 관리형 AWS KMS 키를 사용하여 파라미터를 암호화합니다. CI/CD 파이프라인을 호스팅하는 AWS 계정에 고객 관리형 키에 대한 복호화 권한을 부여합니다.` },
    { k:'F', en:`Create an AWS Resource Access Manager (AWS RAM) resource share in the central AWS account. Share the parameter with the account that hosts the CI/CD pipeline.`, ko:`중앙 AWS 계정에 AWS Resource Access Manager(AWS RAM) 리소스 공유를 생성합니다. CI/CD 파이프라인을 호스팅하는 계정과 파라미터를 공유합니다.` },
  ],
  answer: ['A','E','F'],
  vote: '100% AEF',
  explain: `<p><span class="mark-ok">✅ A+E+F — 핵심 이유</span></p>
<p><strong>A</strong>: 교차 계정 공유는 <strong>고급 계층(Advanced tier)</strong> 파라미터에서만 지원됩니다. 표준 계층은 AWS RAM 공유 불가.</p>
<p><strong>E</strong>: 교차 계정 암호화/복호화에는 <strong>고객 관리형 KMS 키(CMK)</strong>가 필요합니다. AWS 관리형 키는 동일 계정에서만 사용 가능하므로 교차 계정 권한 부여 불가.</p>
<p><strong>F</strong>: AWS RAM을 통해 파라미터를 CI/CD 계정과 공유하면, 해당 계정에서 직접 파라미터 값을 읽을 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ C</span> — 표준 계층 파라미터는 AWS RAM 공유를 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS 관리형 키(aws/ssm)는 교차 계정 권한 부여가 불가능합니다.</p>
<p><span class="mark-no">❌ B</span> — CI/CD 계정 IAM 역할에 다른 계정 파라미터 ARN을 추가해도 RAM 공유 없이는 접근이 불가합니다.</p>`,
  disc: []
},
{
  n: 419,
  en: `A company is using the AWS Cloud Development Kit (AWS CDK) to develop a microservices-based application. The company needs to create reusable infrastructure components for three environments: development, staging, and production. The components must include networking resources, database resources, and serverless compute resources.<br><br>The company must implement a solution that provides consistent infrastructure across environments while offering the option for environment-specific customizations. The solution also must minimize code duplication.<br><br>Which solution will meet these requirements with the LEAST development overhead?`,
  ko: `한 회사가 AWS 클라우드 개발 키트(AWS CDK)를 사용하여 마이크로서비스 기반 애플리케이션을 개발하고 있습니다. 이 회사는 개발, 스테이징, 프로덕션의 세 가지 환경에서 재사용 가능한 인프라 구성 요소를 구축해야 합니다. 이러한 구성 요소에는 네트워킹 리소스, 데이터베이스 리소스, 서버리스 컴퓨팅 리소스가 포함되어야 합니다.<br><br>회사는 환경별 맞춤 설정 옵션을 제공하면서 환경 전반에 걸쳐 일관된 인프라를 제공하는 솔루션을 구현해야 합니다. 또한 코드 중복을 최소화해야 합니다.<br><br>이러한 요구 사항을 충족하면서 개발 오버헤드를 최소화하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create custom Level 1 (L1) constructs out of Level 2 (L2) constructs where repeatable patterns exist. Create a single set of deployment stacks that takes the environment name as an argument upon instantiation. Deploy CDK applications for each environment.`, ko:`반복 가능한 패턴이 있는 경우 레벨 2(L2) 구조체를 기반으로 사용자 지정 레벨 1(L1) 구조체를 생성합니다. 인스턴스화 시 환경 이름을 인수로 받는 단일 배포 스택 세트를 생성합니다. 각 환경에 대해 CDK 애플리케이션을 배포합니다.` },
    { k:'B', en:`Create custom Level 1 (L1) constructs out of Level 2 (L2) constructs where repeatable patterns exist. Create separate deployment stacks for each environment. Use the CDK context command to determine which stacks to run when deploying to each environment.`, ko:`반복 가능한 패턴이 있는 경우 레벨 2(L2) 구성 요소를 기반으로 사용자 지정 레벨 1(L1) 구성 요소를 생성합니다. 각 환경에 대해 별도의 배포 스택을 생성합니다. CDK 컨텍스트 명령을 사용하여 각 환경에 배포할 때 실행할 스택을 결정합니다.` },
    { k:'C', en:`Create custom Level 3 (L3) constructs out of Level 2 (L2) constructs where repeatable patterns exist. Create a single set of deployment stacks that takes the environment name as an argument upon instantiation. Deploy CDK applications for each environment.`, ko:`반복 가능한 패턴이 있는 경우 레벨 2(L2) 구조체를 기반으로 사용자 지정 레벨 3(L3) 구조체를 생성합니다. 인스턴스화 시 환경 이름을 인수로 받는 단일 배포 스택 세트를 생성합니다. 각 환경에 대해 CDK 애플리케이션을 배포합니다.` },
    { k:'D', en:`Create custom Level 3 (L3) constructs out of Level 2 (L2) constructs where repeatable patterns exist. Create separate deployment stacks for each environment. Use the CDK context command to determine which stacks to run when deploying to each environment.`, ko:`반복 가능한 패턴이 있는 경우 레벨 2(L2) 구성 요소를 기반으로 사용자 지정 레벨 3(L3) 구성 요소를 생성합니다. 각 환경에 대해 별도의 배포 스택을 생성합니다. CDK 컨텍스트 명령을 사용하여 각 환경에 배포할 때 실행할 스택을 결정합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p><strong>L3(Level 3) Construct</strong>는 여러 L2 구성 요소를 묶어 완전한 아키텍처 패턴(예: VPC + RDS + Lambda 세트)을 재사용 가능한 단위로 캡슐화합니다. 환경 이름을 인수로 받는 단일 스택 세트를 사용하면 환경별 맞춤 설정이 가능하면서 코드 중복을 최소화합니다.</p>
<p>L1은 CloudFormation 리소스에 직접 매핑되는 저수준 Construct로 재사용성이 낮습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A/B</span> — L2 기반 L1 Construct 생성은 역방향 추상화로 CDK 설계 원칙에 반하며 코드 중복이 증가합니다.</p>
<p><span class="mark-no">❌ D</span> — 환경별 별도 스택 생성은 코드 중복을 유발합니다. 단일 스택 + 환경 인수 방식(C)이 더 효율적입니다.</p>`,
  disc: []
},
{
  n: 420,
  en: `A company runs an application on an Amazon Elastic Container Service (Amazon ECS) service by using the AWS Fargate launch type. The application consumes messages from an Amazon Simple Queue Service (Amazon SQS) queue. The application can take several minutes to process each message from the queue. When the application processes a message, the application reads a file from an Amazon S3 bucket and processes the data in the file. The application writes the processed output to a second S3 bucket. The company uses Amazon CloudWatch Logs to monitor processing errors and to ensure that the application processes messages successfully.<br><br>The SQS queue typically receives a low volume of messages. However, occasionally the queue receives higher volumes of messages. A DevOps engineer needs to implement a solution to reduce the processing time of message bursts.<br><br>Which solution will meet this requirement in the MOST cost-effective way?`,
  ko: `한 회사가 AWS Fargate 시작 유형을 사용하여 Amazon Elastic Container Service(Amazon ECS) 서비스에서 애플리케이션을 실행합니다. 이 애플리케이션은 Amazon Simple Queue Service(Amazon SQS) 큐에서 메시지를 수신합니다. 애플리케이션은 큐에서 메시지를 하나 처리하는 데 몇 분이 소요될 수 있습니다. 메시지를 처리할 때 애플리케이션은 Amazon S3 버킷에서 파일을 읽어 파일의 데이터를 처리합니다. 처리된 출력은 다른 S3 버킷에 저장됩니다. 이 회사는 Amazon CloudWatch Logs를 사용하여 처리 오류를 모니터링하고 애플리케이션이 메시지를 성공적으로 처리하는지 확인합니다.<br><br>SQS 큐는 일반적으로 적은 양의 메시지를 수신하지만, 때때로 많은 양의 메시지가 수신되는 경우가 있습니다. DevOps 엔지니어는 메시지 폭주 시 처리 시간을 단축하는 솔루션을 구현해야 합니다.<br><br>이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Register the ECS service as a scalable target in AWS Application Auto Scaling. Configure a target tracking scaling policy to scale the service in response to the queue size.`, ko:`ECS 서비스를 AWS Application Auto Scaling의 확장 가능한 대상으로 등록합니다. 큐 크기에 따라 서비스가 확장되도록 대상 추적 확장 정책을 구성합니다.` },
    { k:'B', en:`Increase the maximum number of messages that Amazon SQS requests to batch messages together. Use long polling to minimize the number of API calls to Amazon SQS during periods of low traffic.`, ko:`Amazon SQS에서 메시지를 일괄 처리할 수 있도록 메시지 요청 최대 개수를 늘립니다. 트래픽이 적은 시간대에는 장기 폴링을 사용하여 Amazon SQS API 호출 횟수를 최소화합니다.` },
    { k:'C', en:`Send messages to an Amazon EventBridge event bus instead of the SQS queue. Replace the ECS service with an EventBridge rule that launches ECS tasks in response to matching events.`, ko:`SQS 큐 대신 Amazon EventBridge 이벤트 버스로 메시지를 보냅니다. ECS 서비스를 일치하는 이벤트에 대한 응답으로 ECS 작업을 시작하는 EventBridge 규칙으로 대체합니다.` },
    { k:'D', en:`Create an Auto Scaling group of EC2 instances. Create a capacity provider in the ECS cluster by using the Auto Scaling group. Change the ECS service to use the EC2 launch type.`, ko:`EC2 인스턴스로 구성된 자동 스케일링 그룹을 생성합니다. 자동 스케일링 그룹을 사용하여 ECS 클러스터에 용량 공급자를 생성합니다. ECS 서비스의 시작 유형을 EC2 인스턴스로 변경합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>Fargate 기반 ECS 서비스를 Application Auto Scaling의 확장 대상으로 등록하고, SQS 대기열 크기(<code>ApproximateNumberOfMessagesVisible</code>)를 기반으로 대상 추적 정책을 설정하면, 메시지 폭주 시 자동으로 태스크가 확장되어 처리 시간을 단축합니다. 평소에는 최소 태스크만 유지하므로 비용 효율적입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 배치 처리와 장기 폴링은 처리 속도를 높이지 않으며 메시지 폭주 문제를 해결하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — EventBridge로 전환하면 기존 SQS 아키텍처를 전면 변경해야 하며 메시지 처리 시간 보장이 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 시작 유형으로 변경하면 인스턴스 관리 오버헤드가 증가하고 Fargate 대비 비용 효율성이 낮아집니다.</p>`,
  disc: []
}
];
