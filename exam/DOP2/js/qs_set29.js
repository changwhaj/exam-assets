window.QS_SET29 = [
{
  n: 281,
  en: `A company manages AWS accounts in AWS Organizations. The company needs a solution to send Amazon CloudWatch Logs data to an Amazon S3 bucket in a dedicated AWS account. The solution must support all existing and future CloudWatch Logs log groups.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 AWS Organizations에서 AWS 계정을 관리합니다. 이 회사는 전용 AWS 계정의 Amazon S3 버킷으로 Amazon CloudWatch Logs 데이터를 보내는 솔루션이 필요합니다. 이 솔루션은 모든 기존 및 미래 CloudWatch Logs 로그 그룹을 지원해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Enable Organizations backup policies to back up all log groups to a dedicated S3 bucket. Add an S3 bucket policy that allows access from all accounts that belong to the company.`, ko:`조직 백업 정책을 활성화하여 모든 로그 그룹을 전용 S3 버킷에 백업합니다. 회사에 속한 모든 계정에서 액세스할 수 있는 S3 버킷 정책을 추가합니다.` },
    { k:'B', en:`Create a backup plan in AWS Backup. Specify a dedicated S3 bucket as a backup vault. Assign all CloudWatch Logs log group resources to the backup plan. Create resource assignments in the backup plan for all accounts that belong to the company.`, ko:`AWS Backup에서 백업 계획을 만듭니다. 전용 S3 버킷을 백업 볼트로 지정합니다. 모든 CloudWatch Logs 로그 그룹 리소스를 백업 계획에 할당합니다. 회사에 속한 모든 계정에 대한 백업 계획에서 리소스 할당을 만듭니다.` },
    { k:'C', en:`Create a backup plan in AWS Backup. Specify a dedicated S3 bucket as a backup vault. Assign all existing log groups to the backup plan. Create resource assignments in the backup plan for all accounts that belong to the company. Create an AWS Systems Manager Automation runbook to assign log groups to a backup plan. Create an AWS Config rule that has an automatic remediation action for all noncompliant log groups. Specify the runbook as the rule's target.`, ko:`AWS Backup에서 백업 계획을 만듭니다. 전용 S3 버킷을 백업 볼트로 지정합니다. 모든 기존 로그 그룹을 백업 계획에 할당합니다. 회사에 속한 모든 계정에 대한 백업 계획에서 리소스 할당을 만듭니다. AWS Systems Manager Automation 런북을 만들어 로그 그룹을 백업 계획에 할당합니다. 모든 비준수 로그 그룹에 대한 자동 수정 작업이 있는 AWS Config 규칙을 만듭니다. 런북을 규칙의 대상으로 지정합니다.` },
    { k:'D', en:`Create a CloudWatch Logs destination and an Amazon Kinesis Data Firehose delivery stream in the dedicated AWS account. Specify the S3 bucket as the destination of the delivery stream. Create subscription filters for all existing log groups in all accounts. Create an AWS Lambda function to call the CloudWatch Logs PutSubscriptionFilter API operation. Create an Amazon EventBridge rule to invoke the Lambda function when a CreateLogGroup event occurs.`, ko:`전용 AWS 계정에서 CloudWatch Logs 대상과 Amazon Kinesis Data Firehose 전송 스트림을 만듭니다. 전송 스트림의 대상으로 S3 버킷을 지정합니다. 모든 계정의 모든 기존 로그 그룹에 대한 구독 필터를 만듭니다. CloudWatch Logs PutSubscriptionFilter API 작업을 호출하는 AWS Lambda 함수를 만듭니다. CreateLogGroup 이벤트가 발생할 때 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 만듭니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — CloudWatch Logs 대상 + Firehose → S3 + Lambda(구독 필터 자동 등록)</span></p>
<p>전용 계정에 CloudWatch Logs 대상(Kinesis Data Firehose)을 만들고 기존 로그 그룹에는 구독 필터를 생성합니다. 새로운 로그 그룹이 생성될 때는 EventBridge가 CreateLogGroup 이벤트를 감지하여 Lambda를 호출하고, Lambda가 자동으로 PutSubscriptionFilter를 적용합니다. 이로써 미래 로그 그룹도 자동으로 처리됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, B, C</span> — AWS Backup은 CloudWatch Logs 로그 그룹을 백업하는 서비스가 아닙니다. CloudWatch Logs의 데이터를 S3로 전송하는 표준 방법은 구독 필터(Subscription Filter) + Kinesis Data Firehose입니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'기존 로그 그룹: 구독 필터 직접 생성. 미래 로그 그룹: EventBridge(CreateLogGroup) → Lambda → PutSubscriptionFilter 자동화.' }]
},
{
  n: 282,
  en: `A DevOps engineer manages a Java-based application that runs in an Amazon Elastic Container Service (Amazon ECS) cluster on AWS Fargate. Auto scaling has not been configured for the application.<br><br>The DevOps engineer has determined that the Java Virtual Machine (JVM) thread count is a good indicator of when to scale the application. The application serves customer traffic on port 8080 and makes JVM metrics available on port 9404.<br><br>Application use has recently increased. The DevOps engineer needs to configure auto scaling for the application.<br><br>Which solution will meet these requirements with the LEAST operational overhead? (Choose two.)`,
  ko: `DevOps 엔지니어가 AWS Fargate의 Amazon Elastic Container Service(Amazon ECS) 클러스터에서 실행되는 Java 기반 애플리케이션을 관리합니다. 애플리케이션에 대한 자동 스케일링이 구성되지 않았습니다.<br><br>DevOps 엔지니어는 Java Virtual Machine(JVM) 스레드 수가 애플리케이션을 스케일링할 시기를 나타내는 좋은 지표라고 판단했습니다. 애플리케이션은 포트 8080에서 고객 트래픽을 처리하고 포트 9404에서 JVM 메트릭을 제공합니다.<br><br>애플리케이션 사용이 최근 증가했습니다. DevOps 엔지니어는 애플리케이션에 대한 자동 스케일링을 구성해야 합니다.<br><br>운영 오버헤드를 최소화하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi', multiCount: 2,
  choices: [
    { k:'A', en:`Deploy the Amazon CloudWatch agent as a container sidecar. Configure the CloudWatch agent to retrieve JVM metrics from port 9404. Create CloudWatch alarms on the JVM thread count metric to scale the application. Add a step scaling policy in Fargate to scale up and scale down based on the CloudWatch alarms.`, ko:`Amazon CloudWatch 에이전트를 컨테이너 사이드카로 배포합니다. CloudWatch 에이전트를 구성하여 포트 9404에서 JVM 메트릭을 검색합니다. JVM 스레드 수 메트릭에 CloudWatch 알람을 생성하여 애플리케이션을 확장합니다. Fargate에 단계적 확장 정책을 추가하여 CloudWatch 알람에 따라 확장 및 축소합니다.` },
    { k:'B', en:`Deploy the Amazon CloudWatch agent as a container sidecar. Configure a metric filter for the JVM thread count metric on the CloudWatch log group for the CloudWatch agent. Add a target tracking policy in Fargate. Select the metric from the metric filter as a scale target.`, ko:`Amazon CloudWatch 에이전트를 컨테이너 사이드카로 배포합니다. CloudWatch 에이전트의 CloudWatch 로그 그룹에서 JVM 스레드 수 메트릭에 대한 메트릭 필터를 구성합니다. Fargate에서 대상 추적 정책을 추가합니다. 메트릭 필터에서 메트릭을 스케일 대상으로 선택합니다.` },
    { k:'C', en:`Create an Amazon Managed Service for Prometheus workspace. Deploy AWS Distro for OpenTelemetry as a container sidecar to publish the JVM metrics from port 9404 to the Prometheus workspace. Configure rules for the workspace to use the JVM thread count metric to scale the application. Add a step scaling policy in Fargate. Select the Prometheus rules to scale up and scale down.`, ko:`Prometheus 작업 공간을 위한 Amazon Managed Service를 만듭니다. AWS Distro for OpenTelemetry를 컨테이너 사이드카로 배포하여 포트 9404에서 Prometheus 작업 공간으로 JVM 메트릭을 게시합니다. 작업 공간이 JVM 스레드 수 메트릭을 사용하여 애플리케이션을 확장하도록 규칙을 구성합니다. Fargate에서 단계적 확장 정책을 추가합니다. 확장 및 축소할 Prometheus 규칙을 선택합니다.` },
    { k:'D', en:`Create an Amazon Managed Service for Prometheus workspace. Deploy AWS Distro for OpenTelemetry as a container sidecar to retrieve JVM metrics from port 9404 and to publish the JVM metrics to the Prometheus workspace. Add a target tracking policy in Fargate. Select the Prometheus metric as a scale target.`, ko:`Prometheus 작업 공간을 위한 Amazon Managed Service를 만듭니다. AWS Distro for OpenTelemetry를 컨테이너 사이드카로 배포하여 포트 9404에서 JVM 메트릭을 검색하여 Prometheus 작업 공간에 JVM 메트릭을 게시합니다. Fargate에서 대상 추적 정책을 추가합니다. Prometheus 메트릭을 스케일 대상으로 선택합니다.` },
  ],
  answer: ['A','D'],
  vote: '100% AD',
  explain: `<p><span class="mark-ok">✅ A — CloudWatch 에이전트 사이드카 + 단계적 확장 정책</span></p>
<p>CloudWatch 에이전트를 사이드카로 배포하여 포트 9404에서 JVM 스레드 수를 수집하고 CloudWatch에 게시합니다. CloudWatch 알람을 기반으로 단계적 확장 정책으로 ECS Fargate를 자동 스케일링합니다.</p>
<p><span class="mark-ok">✅ D — Amazon Managed Service for Prometheus + ADOT + 대상 추적 정책</span></p>
<p>ADOT(AWS Distro for OpenTelemetry) 사이드카로 JVM 메트릭을 AMP(Amazon Managed Prometheus)에 게시하고, Fargate의 대상 추적 정책으로 Prometheus 메트릭을 스케일 대상으로 사용합니다. 대상 추적은 단계적 정책보다 관리 오버헤드가 적습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 메트릭 필터는 로그 데이터에서 메트릭을 추출하는 용도로, JVM 메트릭을 직접 스케일 대상으로 사용하는 최적 방법이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — Prometheus 규칙으로 확장을 제어하는 것은 표준 ECS 자동 스케일링 방식이 아닙니다.</p>`,
  disc: [{ ans:'AD (100%)', txt:'CloudWatch 에이전트(단계적 확장) 또는 ADOT+AMP(대상 추적 확장) 두 가지 방식 모두 JVM 사용자 정의 메트릭 기반 ECS Fargate 자동 스케일링에 유효합니다.' }]
},
{
  n: 283,
  en: `A company has an application that runs in a single AWS Region. The application runs on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster and connects to an Amazon Aurora MySQL cluster. The application is built in an AWS CodeBuild project. The container images are published to Amazon Elastic Container Registry (Amazon ECR).<br><br>The company needs to replicate the state of the application for the container images and the database to a second Region.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?`,
  ko: `한 회사에 단일 AWS 리전에서 실행되는 애플리케이션이 있습니다. 이 애플리케이션은 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에서 실행되고 Amazon Aurora MySQL 클러스터에 연결됩니다. 이 애플리케이션은 AWS CodeBuild 프로젝트에서 빌드됩니다. 컨테이너 이미지는 Amazon Elastic Container Registry(Amazon ECR)에 게시됩니다.<br><br>이 회사는 컨테이너 이미지와 데이터베이스의 애플리케이션 상태를 두 번째 리전에 복제해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 가장 운영 효율적인 방식으로 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Turn on Amazon S3 Cross-Region Replication (CRR) on the bucket that holds the ECR container images. Deploy the application to an EKS cluster in the second Region by referencing the new S3 bucket object URL for the container image in a Kubernetes deployment file. Configure a cross-Region Aurora Replica in the second Region. Configure the new application deployment to use the endpoints for the cross-Region Aurora Replica.`, ko:`ECR 컨테이너 이미지를 보관하는 버킷에서 Amazon S3 Cross-Region Replication(CRR)을 켭니다. Kubernetes 배포 파일에서 컨테이너 이미지에 대한 새 S3 버킷 객체 URL을 참조하여 두 번째 리전의 EKS 클러스터에 애플리케이션을 배포합니다. 두 번째 리전에서 크로스 리전 Aurora Replica를 구성합니다. 크로스 리전 Aurora Replica에 대한 엔드포인트를 사용하도록 새 애플리케이션 배포를 구성합니다.` },
    { k:'B', en:`Create an Amazon EventBridge rule that reacts to image pushes to the ECR repository. Configure the EventBridge rule to invoke an AWS Lambda function to replicate the image to a new ECR repository in the second Region. Deploy the application to an EKS cluster in the second Region by referencing the new ECR repository in a Kubernetes deployment file. Configure a cross-Region Aurora Replica in the second Region. Configure the new application deployment to use the endpoints for the cross-Region Aurora Replica.`, ko:`ECR 저장소에 대한 이미지 푸시에 반응하는 Amazon EventBridge 규칙을 만듭니다. AWS Lambda 함수를 호출하여 이미지를 두 번째 리전의 새 ECR 저장소에 복제하도록 EventBridge 규칙을 구성합니다. Kubernetes 배포 파일에서 새 ECR 저장소를 참조하여 두 번째 리전의 EKS 클러스터에 애플리케이션을 배포합니다. 두 번째 리전에서 크로스 리전 Aurora 복제본을 구성합니다. 크로스 리전 Aurora 복제본에 대한 엔드포인트를 사용하도록 새 애플리케이션 배포를 구성합니다.` },
    { k:'C', en:`Turn on Cross-Region Replication to replicate the ECR repository to the second Region. Deploy the application to an EKS cluster in the second Region by referencing the new ECR repository in a Kubernetes deployment file. Configure an Aurora global database with clusters in the initial Region and the second Region. Configure the new application deployment to use the endpoints for the second Region's cluster in the Aurora global database.`, ko:`Cross-Region Replication을 켜서 ECR 저장소를 두 번째 리전에 복제합니다. Kubernetes 배포 파일에서 새 ECR 저장소를 참조하여 두 번째 리전의 EKS 클러스터에 애플리케이션을 배포합니다. 초기 리전과 두 번째 리전의 클러스터로 Aurora 글로벌 데이터베이스를 구성합니다. Aurora 글로벌 데이터베이스에서 두 번째 리전의 클러스터에 대한 엔드포인트를 사용하도록 새 애플리케이션 배포를 구성합니다.` },
    { k:'D', en:`Configure the CodeBuild project to also push the container image to an ECR repository in the second Region. Deploy the application to an EKS cluster in the second Region by referencing the new ECR repository in a Kubernetes deployment file. Configure an Aurora MySQL cluster in the second Region as the target for binary log replication from the Aurora MySQL cluster in the initial Region. Configure the new application deployment to use the endpoints for the second Region's cluster.`, ko:`CodeBuild 프로젝트를 구성하여 컨테이너 이미지를 두 번째 리전의 ECR 저장소에 푸시합니다. Kubernetes 배포 파일에서 새 ECR 저장소를 참조하여 두 번째 리전의 EKS 클러스터에 애플리케이션을 배포합니다. 두 번째 리전의 Aurora MySQL 클러스터를 초기 리전의 Aurora MySQL 클러스터에서 바이너리 로그 복제의 대상으로 구성합니다. 두 번째 리전의 클러스터에 대한 엔드포인트를 사용하도록 새 애플리케이션 배포를 구성합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — ECR 크로스 리전 복제 + Aurora 글로벌 데이터베이스</span></p>
<p>ECR은 네이티브 크로스 리전 복제 기능을 지원하여 이미지 푸시 시 자동으로 두 번째 리전에 복제합니다. Aurora 글로벌 데이터베이스는 완전 관리형으로 리전 간 낮은 지연 복제를 제공합니다. 두 서비스 모두 AWS가 복제를 관리하므로 운영 오버헤드가 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — ECR 이미지를 S3 URL로 참조하는 것은 지원되지 않는 방식입니다. ECR 이미지는 ECR URI로 참조해야 합니다.</p>
<p><span class="mark-no">❌ B</span> — EventBridge+Lambda로 직접 복제하는 것은 ECR 네이티브 복제보다 관리 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ D</span> — 바이너리 로그 복제는 수동 구성이 필요하며 Aurora 글로벌 데이터베이스보다 관리 복잡성이 높습니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'ECR 네이티브 크로스 리전 복제와 Aurora 글로벌 데이터베이스를 조합하여 최소 오버헤드로 멀티 리전 복제를 구현합니다.' }]
},
{
  n: 284,
  en: `A company is building a serverless application that uses AWS Lambda functions to process data.<br><br>A BeginResponse Lambda function initializes data in response to specific application events. The company needs to ensure that a large number of Lambda functions are invoked after the BeginResponse Lambda function runs. Each Lambda function must be invoked in parallel and depends on only the outputs of the BeginResponse Lambda function. Each Lambda function has retry logic for invocation and must be able to fine-tune concurrency without losing data.<br><br>Which solution will meet these requirements with the MOST operational efficiency?`,
  ko: `한 회사가 AWS Lambda 함수를 사용하여 데이터를 처리하는 서버리스 애플리케이션을 구축하고 있습니다.<br><br>BeginResponse Lambda 함수는 특정 애플리케이션 이벤트에 대한 응답으로 데이터를 초기화합니다. 이 회사는 BeginResponse Lambda 함수가 실행된 후 많은 수의 Lambda 함수가 호출되도록 해야 합니다. 각 Lambda 함수는 병렬로 호출되어야 하며 BeginResponse Lambda 함수의 출력에만 의존합니다. 각 Lambda 함수는 호출을 위한 재시도 논리를 가지고 있으며 데이터 손실 없이 동시성을 미세 조정할 수 있어야 합니다.<br><br>가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon Simple Notification Service (Amazon SNS) topic. Modify the BeginResponse Lambda function to publish to the SNS topic before the BeginResponse Lambda function finishes running. Subscribe all Lambda functions that need to invoke after the BeginResponse Lambda function runs to the SNS topic. Subscribe any new Lambda functions to the SNS topic.`, ko:`Amazon Simple Notification Service(Amazon SNS) 토픽을 만듭니다. BeginResponse Lambda 함수가 실행을 마치기 전에 SNS 토픽에 게시하도록 BeginResponse Lambda 함수를 수정합니다. BeginResponse Lambda 함수가 실행된 후에 호출해야 하는 모든 Lambda 함수를 SNS 토픽에 구독합니다. 모든 새로운 Lambda 함수를 SNS 토픽에 구독합니다.` },
    { k:'B', en:`Create an Amazon Simple Queue Service (Amazon SQS) queue for each Lambda function that needs to run after the BeginResponse Lambda function runs. Subscribe each Lambda function to its own SQS queue. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe each SQS queue to the SNS topic. Modify the BeginResponse function to publish to the SNS topic when it finishes running.`, ko:`BeginResponse Lambda 함수가 실행된 후 실행해야 하는 각 Lambda 함수에 대해 Amazon Simple Queue Service(Amazon SQS) 대기열을 만듭니다. 각 Lambda 함수를 자체 SQS 대기열에 구독합니다. Amazon Simple Notification Service(Amazon SNS) 토픽을 만듭니다. 각 SQS 대기열을 SNS 토픽에 구독합니다. BeginResponse 함수가 실행을 마치면 SNS 토픽에 게시하도록 수정합니다.` },
    { k:'C', en:`Create an Amazon Simple Queue Service (Amazon SQS) queue for each Lambda function that needs to run after the BeginResponse Lambda function runs. Subscribe the Lambda function to the SQS queue. Create an Amazon Simple Notification Service (Amazon SNS) topic for each SQS queue. Subscribe the SQS queues to the SNS topics. Modify the BeginResponse function to publish to the SNS topics when the function finishes running.`, ko:`BeginResponse Lambda 함수가 실행된 후 실행해야 하는 각 Lambda 함수에 대해 Amazon Simple Queue Service(Amazon SQS) 대기열을 만듭니다. Lambda 함수를 SQS 대기열에 구독합니다. 각 SQS 대기열에 대해 Amazon Simple Notification Service(Amazon SNS) 토픽을 만듭니다. SQS 대기열을 SNS 토픽에 구독합니다. BeginResponse 함수를 수정하여 함수 실행이 완료되면 SNS 토픽에 게시합니다.` },
    { k:'D', en:`Create an AWS Step Functions Standard Workflow. Configure states in the workflow to invoke the Lambda functions sequentially. Create an Amazon Simple Notification Service (Amazon SNS) topic. Modify the BeginResponse Lambda function to publish to the SNS topic before the Lambda function finishes running. Create a new Lambda function that is subscribed to the SNS topic and that invokes the Step Functions workflow.`, ko:`AWS Step Functions Standard Workflow를 만듭니다. Lambda 함수를 순차적으로 호출하도록 워크플로에서 상태를 구성합니다. Amazon Simple Notification Service(Amazon SNS) 토픽을 만듭니다. Lambda 함수가 실행을 마치기 전에 SNS 토픽에 게시하도록 BeginResponse Lambda 함수를 수정합니다. SNS 토픽을 구독하고 Step Functions 워크플로를 호출하는 새 Lambda 함수를 만듭니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — SNS 팬아웃 + 각 Lambda마다 SQS 대기열</span></p>
<p>SNS 팬아웃 패턴: BeginResponse 완료 시 SNS에 게시 → SNS가 모든 SQS 대기열에 동시에 메시지 전달(병렬 호출). 각 Lambda 함수는 자체 SQS 대기열에서 메시지를 수신하므로:</p>
<ul style="margin-left:1.5em">
<li>SQS 가시성 타임아웃으로 재시도 로직 기본 지원</li>
<li>SQS 배치 크기(BatchSize) 조정으로 Lambda 동시성 미세 조정</li>
<li>SQS DLQ(Dead Letter Queue)로 데이터 손실 방지</li>
</ul>`,
  wrong: `<p><span class="mark-no">❌ A</span> — SNS에서 Lambda를 직접 구독하면 재시도와 동시성 미세 조정이 어렵습니다. Lambda 재시도는 있지만 SQS처럼 세밀하게 조정할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 각 SQS마다 별도 SNS 토픽을 만드는 것은 불필요하게 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — Step Functions의 순차적 실행은 "병렬 호출" 요구 사항과 맞지 않습니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'SNS → SQS 팬아웃은 병렬 호출, 재시도, 동시성 조정, 데이터 손실 방지를 모두 충족하는 표준 패턴입니다.' }]
},
{
  n: 285,
  en: `A company operates a globally deployed product out of multiple AWS Regions. The company's DevOps team needs to use Amazon API Gateway to deploy an API to support the product.<br><br>The API must be deployed redundantly. The deployment must provide independent availability from each company location. The deployment also must respond to a custom domain URL and must optimize performance for the API user requests.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 여러 AWS 리전에서 글로벌하게 배포된 제품을 운영합니다. 회사의 DevOps 팀은 Amazon API Gateway를 사용하여 제품을 지원하는 API를 배포해야 합니다.<br><br>API는 중복으로 배포해야 합니다. 배포는 각 회사 위치에서 독립적인 가용성을 제공해야 합니다. 또한 배포는 사용자 지정 도메인 URL에 응답해야 하며 API 사용자 요청에 대한 성능을 최적화해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Deploy an API Gateway edge-optimized API endpoint in the us-east-1 Region. Create an API Gateway custom domain for the API. Create an Amazon Route 53 record set with a geoproximity routing policy for the API's custom domain. Increase the geographic bias to the maximum allowed value.`, ko:`us-east-1 리전에 API Gateway 에지 최적화 API 엔드포인트를 배포합니다. API에 대한 API Gateway 사용자 지정 도메인을 만듭니다. API의 사용자 지정 도메인에 대한 지리적 근접성 라우팅 정책이 있는 Amazon Route 53 레코드 세트를 만듭니다. 지리적 편향을 최대 허용 값으로 늘립니다.` },
    { k:'B', en:`Deploy an API Gateway regional API endpoint in the us-east-1 Region. Integrate the API Gateway API with a public Application Load Balancer (ALB). Create an AWS Global Accelerator standard accelerator. Associate the endpoint with the ALB. Create an Amazon Route 53 alias record set that points the custom domain name to the DNS name that is assigned to the accelerator.`, ko:`us-east-1 리전에 API Gateway 리전 API 엔드포인트를 배포합니다. API Gateway API를 퍼블릭 Application Load Balancer(ALB)와 통합합니다. AWS Global Accelerator 표준 가속기를 만듭니다. 엔드포인트를 ALB와 연결합니다. 사용자 지정 도메인 이름을 가속기에 할당된 DNS 이름으로 가리키는 Amazon Route 53 별칭 레코드 세트를 만듭니다.` },
    { k:'C', en:`Deploy an API Gateway regional API endpoint in every AWS Region where the company's product is deployed. Create an API Gateway custom domain in each Region for the deployed API Gateway API. Create an Amazon Route 53 record set that has a latency routing policy for every deployed API Gateway custom domain.`, ko:`회사의 제품이 배포된 모든 AWS 리전에 API Gateway 리전 API 엔드포인트를 배포합니다. 배포된 API Gateway API에 대해 각 리전에 API Gateway 사용자 지정 도메인을 만듭니다. 배포된 모든 API Gateway 사용자 지정 도메인에 대한 지연 라우팅 정책이 있는 Amazon Route 53 레코드 세트를 만듭니다.` },
    { k:'D', en:`Deploy an API Gateway edge-optimized API endpoint in the us-east-1 Region. Create an Amazon CloudFront distribution. Configure the CloudFront distribution with an alternate domain name. Specify the API Gateway Invoke URL as the origin domain. Create an Amazon Route 53 alias record set with a simple routing policy. Point the routing policy to the CloudFront distribution domain name.`, ko:`us-east-1 리전에 API Gateway 에지 최적화 API 엔드포인트를 배포합니다. Amazon CloudFront 배포를 만듭니다. 대체 도메인 이름으로 CloudFront 배포를 구성합니다. API Gateway Invoke URL을 원본 도메인으로 지정합니다. 간단한 라우팅 정책으로 Amazon Route 53 별칭 레코드 세트를 만듭니다. 라우팅 정책을 CloudFront 배포 도메인 이름으로 지정합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 각 리전에 리전 API 엔드포인트 + 각 리전에 사용자 지정 도메인 + Route 53 지연 라우팅</span></p>
<p>모든 리전에 리전 API 엔드포인트를 배포하면 리전별 독립 가용성이 보장됩니다(중복 배포). 각 리전에 사용자 지정 도메인을 설정하고, Route 53 지연 라우팅(Latency Routing)으로 사용자를 가장 가까운 리전으로 라우팅하여 성능을 최적화합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 단일 리전에만 배포하면 중복 및 독립 가용성 요구 사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — 단일 리전 + Global Accelerator는 중복 배포와 독립 가용성을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 단일 리전에만 배포하면 요구 사항을 충족하지 못합니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'멀티 리전 리전 API + Route 53 지연 라우팅은 중복, 독립 가용성, 성능 최적화, 사용자 지정 도메인을 모두 충족합니다.' }]
},
{
  n: 286,
  en: `A DevOps engineer uses AWS CodeBuild to frequently produce software packages. The CodeBuild project builds large Docker images that the DevOps engineer can use across multiple builds.<br><br>The DevOps engineer wants to improve build performance and minimize costs.<br><br>Which solution will meet these requirements?`,
  ko: `DevOps 엔지니어는 AWS CodeBuild를 사용하여 소프트웨어 패키지를 자주 생산합니다. CodeBuild 프로젝트는 DevOps 엔지니어가 여러 빌드에서 사용할 수 있는 대용량 Docker 이미지를 빌드합니다.<br><br>DevOps 엔지니어는 빌드 성능을 개선하고 비용을 최소화하고자 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Store the Docker images in an Amazon Elastic Container Registry (Amazon ECR) repository. Implement a local Docker layer cache for CodeBuild.`, ko:`Docker 이미지를 Amazon Elastic Container Registry(Amazon ECR) 저장소에 저장합니다. CodeBuild에 대한 로컬 Docker 계층 캐시를 구현합니다.` },
    { k:'B', en:`Cache the Docker images in an Amazon S3 bucket that is available across multiple build hosts. Expire the cache by using an S3 Lifecycle policy.`, ko:`여러 빌드 호스트에서 사용 가능한 Amazon S3 버킷에 Docker 이미지를 캐시합니다. S3 Lifecycle 정책을 사용하여 캐시를 만료합니다.` },
    { k:'C', en:`Store the Docker images in an Amazon Elastic Container Registry (Amazon ECR) repository. Modify the CodeBuild project runtime configuration to always use the most recent image version.`, ko:`Docker 이미지를 Amazon Elastic Container Registry(Amazon ECR) 저장소에 저장합니다. CodeBuild 프로젝트 런타임 구성을 수정하여 항상 최신 이미지 버전을 사용합니다.` },
    { k:'D', en:`Create custom AMIs that contain the cached Docker images. In the CodeBuild build, launch Amazon EC2 instances from the custom AMIs.`, ko:`캐시된 Docker 이미지를 포함하는 사용자 지정 AMI를 만듭니다. CodeBuild 빌드에서 사용자 지정 AMI에서 Amazon EC2 인스턴스를 시작합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — ECR 저장소 + CodeBuild 로컬 Docker 계층 캐시</span></p>
<p>ECR에 Docker 이미지를 저장하면 빌드 간 이미지를 재사용할 수 있습니다. CodeBuild의 <code>LOCAL_DOCKER_LAYER_CACHE</code> 설정을 활성화하면 변경되지 않은 Docker 레이어를 로컬에 캐시하여 매 빌드마다 전체 이미지를 다운로드하지 않아도 됩니다. 이는 빌드 시간과 비용을 모두 절감합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — S3에 Docker 이미지를 캐시하는 것은 Docker 계층 캐시가 아닌 일반 파일 캐시로, Docker 빌드 성능 향상에 효과적이지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 항상 최신 이미지를 사용하도록 설정하는 것은 캐시와 관련이 없으며 성능 개선에 도움되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 사용자 지정 AMI를 사용하는 것은 관리 오버헤드가 높고 비용 절감에 효과적이지 않습니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'ECR + CodeBuild LOCAL_DOCKER_LAYER_CACHE는 대형 Docker 이미지 빌드 성능과 비용을 동시에 최적화합니다.' }]
},
{
  n: 287,
  en: `A large company recently acquired a small company. The large company invited the small company to join the large company's existing organization in AWS Organizations as a new OU.<br><br>A DevOps engineer determines that the small company needs to launch t3.small Amazon EC2 instance types for the company's application workloads. The small company needs to deploy the instances only within US-based AWS Regions.<br><br>The DevOps engineer needs to use an SCP in the small company's new OU to ensure that the small company can launch only the required instance types.<br><br>Which solution will meet these requirements?`,
  ko: `대기업이 최근에 소기업을 인수했습니다. 이 대기업은 소기업을 초대하여 AWS Organizations에서 대기업의 기존 조직에 새로운 OU로 가입하도록 했습니다.<br><br>DevOps 엔지니어는 소기업이 회사의 애플리케이션 워크로드에 대해 t3.small Amazon EC2 인스턴스 유형을 시작해야 한다고 판단합니다. 소기업은 미국 기반 AWS 리전 내에서만 인스턴스를 배포해야 합니다.<br><br>DevOps 엔지니어는 소기업의 새로운 OU에서 SCP를 사용하여 소기업이 필요한 인스턴스 유형만 시작할 수 있도록 해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure a statement to deny the ec2:RunInstances action for all EC2 instance resources when the ec2:InstanceType condition is not equal to t3.small.<br>Configure another statement to deny the ec2:RunInstances action for all EC2 instance resources when the aws:RequestedRegion condition is not equal to us-*.`, ko:`ec2:InstanceType 조건이 t3.small과 같지 않을 때 모든 EC2 인스턴스 리소스에 대한 ec2:RunInstances 작업을 거부하는 명령문을 구성합니다.<br>aws:RequestedRegion 조건이 us-*와 같지 않을 때 모든 EC2 인스턴스 리소스에 대한 ec2:RunInstances 작업을 거부하는 또 다른 명령문을 구성합니다.` },
    { k:'B', en:`Configure a statement to allow the ec2:RunInstances action for all EC2 instance resources when the ec2:InstanceType condition is not equal to t3.small.<br>Configure another statement to allow the ec2:RunInstances action for all EC2 instance resources when the aws:RequestedRegion condition is not equal to us-*.`, ko:`ec2:InstanceType 조건이 t3.small과 같지 않을 때 모든 EC2 인스턴스 리소스에 대해 ec2:RunInstances 작업을 허용하는 명령문을 구성합니다.<br>aws:RequestedRegion 조건이 us-*와 같지 않을 때 모든 EC2 인스턴스 리소스에 대해 ec2:RunInstances 작업을 허용하는 또 다른 명령문을 구성합니다.` },
    { k:'C', en:`Configure a statement to deny the ec2:RunInstances action for all EC2 instance resources when the ec2:InstanceType condition is equal to t3.small.<br>Configure another statement to deny the ec2:RunInstances action for all EC2 instance resources when the aws:RequestedRegion condition is equal to us-*.`, ko:`ec2:InstanceType 조건이 t3.small과 같을 때 모든 EC2 인스턴스 리소스에 대한 ec2:RunInstances 작업을 거부하는 명령문을 구성합니다.<br>aws:RequestedRegion 조건이 us-*와 같을 때 모든 EC2 인스턴스 리소스에 대한 ec2:RunInstances 작업을 거부하는 또 다른 명령문을 구성합니다.` },
    { k:'D', en:`Configure a statement to allow the ec2:RunInstances action for all EC2 instance resources when the ec2:InstanceType condition is equal to t3.small.<br>Configure another statement to allow the ec2:RunInstances action for all EC2 instance resources when the aws:RequestedRegion condition is equal to us-*.`, ko:`ec2:InstanceType 조건이 t3.small과 같을 때 모든 EC2 인스턴스 리소스에 대해 ec2:RunInstances 작업을 허용하는 문장을 구성합니다.<br>aws:RequestedRegion 조건이 us-*와 같을 때 모든 EC2 인스턴스 리소스에 대해 ec2:RunInstances 작업을 허용하는 또 다른 문장을 구성합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 조건부 Deny 문 두 개 사용</span></p>
<p>SCP에서 특정 값 이외를 차단하려면 <strong>Deny + StringNotEquals(또는 NotIn)</strong> 패턴을 사용합니다.<br>
① <code>ec2:InstanceType</code>이 t3.small이 아닐 때 RunInstances 거부 → t3.small만 허용<br>
② <code>aws:RequestedRegion</code>이 us-*가 아닐 때 RunInstances 거부 → 미국 리전만 허용</p>
<p><strong>SCP의 중요한 제한 사항:</strong> SCP의 Allow 문은 <code>Condition</code> 요소를 가질 수 없습니다. 따라서 조건부 허용(B, D)은 SCP에서 유효하지 않으며, Deny 문에서만 조건을 사용해야 합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B, D</span> — SCP의 Allow 문은 Condition 요소를 가질 수 없습니다. 따라서 B와 D는 유효하지 않은 SCP 구문입니다.</p>
<p><span class="mark-no">❌ C</span> — t3.small일 때 거부하고 us-*일 때 거부하면 허용하려는 조건을 정반대로 차단합니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'SCP Deny + 부정 조건(NotEquals): t3.small이 아닌 경우 거부, us-*가 아닌 경우 거부. SCP Allow는 Condition을 지원하지 않으므로 Deny 문 사용이 필수입니다.' }]
},
{
  n: 288,
  en: `A DevOps team manages infrastructure for an application. The application uses long-running processes to process items from an Amazon Simple Queue Service (Amazon SQS) queue. The application is deployed to an Auto Scaling group.<br><br>The application recently experienced an issue where items were taking significantly longer to process. The queue exceeded the expected size, which prevented various business processes from functioning properly. The application records all logs to a third-party tool.<br><br>The team is currently subscribed to an Amazon Simple Notification Service (Amazon SNS) topic that the team uses for alerts. The team needs to be alerted if the queue exceeds the expected size.<br><br>Which solution will meet these requirements with the MOST operational efficiency?`,
  ko: `DevOps 팀은 애플리케이션의 인프라를 관리합니다. 이 애플리케이션은 장기 실행 프로세스를 사용하여 Amazon Simple Queue Service(Amazon SQS) 대기열의 항목을 처리합니다. 이 애플리케이션은 Auto Scaling 그룹에 배포됩니다.<br><br>이 애플리케이션은 최근 항목을 처리하는 데 상당히 더 오래 걸리는 문제를 경험했습니다. 대기열이 예상 크기를 초과하여 다양한 비즈니스 프로세스가 제대로 작동하지 못했습니다. 이 애플리케이션은 모든 로그를 타사 도구에 기록합니다.<br><br>이 팀은 현재 알림에 사용하는 Amazon Simple Notification Service(Amazon SNS) 토픽을 구독하고 있습니다. 대기열이 예상 크기를 초과하면 팀에 알림을 보내야 합니다.<br><br>가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon CloudWatch metric alarm with a period of 1 hour and a static threshold to alarm if the average of the ApproximateNumberOfMessagesDelayed metric is greater than the expected value. Configure the alarm to notify the SNS topic.`, ko:`ApproximateNumberOfMessagesDelayed 메트릭의 평균이 예상 값보다 큰 경우 경보를 울리도록 1시간의 기간과 정적 임계값을 사용하여 Amazon CloudWatch 메트릭 경보를 만듭니다. SNS 토픽에 알리도록 경보를 구성합니다.` },
    { k:'B', en:`Create an Amazon CloudWatch metric alarm with a period of 1 hour and a static threshold to alarm if the sum of the ApproximateNumberOfMessagesVisible metric is greater than the expected value. Configure the alarm to notify the SNS topic.`, ko:`ApproximateNumberOfMessagesVisible 메트릭의 합계가 예상 값보다 큰 경우 경보를 울리도록 1시간의 기간과 정적 임계값을 사용하여 Amazon CloudWatch 메트릭 경보를 만듭니다. SNS 토픽에 알리도록 경보를 구성합니다.` },
    { k:'C', en:`Create an AWS Lambda function that retrieves the ApproximateNumberOfMessages SQS queue attribute value and publishes the value as a new CloudWatch custom metric. Create an Amazon EventBridge rule that is scheduled to run every 5 minutes and that invokes the Lambda function. Configure a CloudWatch metrics alarm with a period of 1 hour and a static threshold to alarm if the sum of the new custom metric is greater than the expected value.`, ko:`ApproximateNumberOfMessages SQS 대기열 속성 값을 검색하고 값을 새 CloudWatch 사용자 지정 메트릭으로 게시하는 AWS Lambda 함수를 만듭니다. 5분마다 실행되도록 예약되고 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 만듭니다. 1시간의 기간과 새 사용자 지정 메트릭의 합계가 예상 값보다 큰 경우 경보를 울리도록 정적 임계값을 사용하여 CloudWatch 메트릭 경보를 구성합니다.` },
    { k:'D', en:`Create an AWS Lambda function that checks the ApproximateNumberOfMessagesDelayed SQS queue attribute and compares the value to a defined expected size in the function. Create an Amazon EventBridge rule that is scheduled to run every 5 minutes and that invokes the Lambda function. When the ApproximateNumberOfMessagesDelayed SQS queue attribute exceeds the expected size, send a notification to the SNS topic.`, ko:`ApproximateNumberOfMessagesDelayed SQS 대기열 속성을 확인하고 값을 함수에서 정의된 예상 크기와 비교하는 AWS Lambda 함수를 만듭니다. 5분마다 실행되도록 예약되고 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 만듭니다. ApproximateNumberOfMessagesDelayed SQS 대기열 속성이 예상 크기를 초과하면 SNS 토픽에 알림을 보냅니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — ApproximateNumberOfMessagesVisible + CloudWatch 알람 + SNS 토픽</span></p>
<p><code>ApproximateNumberOfMessagesVisible</code>은 대기열에서 처리를 기다리는 메시지 수(큐 크기)를 나타내는 핵심 메트릭입니다. CloudWatch 메트릭 알람은 SQS 메트릭을 기본으로 지원하므로 별도 Lambda 없이 직접 SNS에 알림을 보낼 수 있어 운영 효율성이 가장 높습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — <code>ApproximateNumberOfMessagesDelayed</code>는 배달 지연 메시지 수로, 큐가 처리할 수 없어서 쌓인 메시지 수와 다릅니다.</p>
<p><span class="mark-no">❌ C, D</span> — Lambda + EventBridge로 직접 메트릭을 폴링하는 방식은 CloudWatch 기본 메트릭 알람보다 운영 오버헤드가 높습니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'ApproximateNumberOfMessagesVisible은 큐 크기를 직접 나타내며, CloudWatch 알람으로 SNS에 알림을 보내는 것이 가장 간단하고 운영 효율적입니다.' }]
},
{
  n: 289,
  en: `A large company runs critical workloads in multiple AWS accounts. The AWS accounts are managed under AWS Organizations with all features enabled. The company stores confidential customer data in an Amazon S3 bucket. Access to the S3 bucket requires multiple levels of approval.<br><br>The company wants to monitor when the S3 bucket is accessed by using the AWS CLI. The company also wants insights into the various activities performed by other users on all other S3 buckets in the AWS accounts to detect any issues.<br><br>Which solution will meet these requirements?`,
  ko: `대규모 회사가 여러 AWS 계정에서 중요한 워크로드를 실행합니다. AWS 계정은 모든 기능이 활성화된 AWS Organizations에서 관리됩니다. 이 회사는 Amazon S3 버킷에 기밀 고객 데이터를 저장합니다. S3 버킷에 액세스하려면 여러 단계의 승인이 필요합니다.<br><br>이 회사는 AWS CLI를 사용하여 S3 버킷에 액세스하는 시점을 모니터링하려고 합니다. 또한 이 회사는 AWS 계정의 다른 모든 S3 버킷에서 다른 사용자가 수행하는 다양한 활동에 대한 통찰력을 얻어 문제를 감지하려고 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS CloudTrail trail that is delivered to Amazon CloudWatch in each AWS account. Enable data events logs for all S3 buckets. Use Amazon GuardDuty for anomaly detection in all the AWS accounts. Use Amazon Athena to perform SQL queries on the custom metrics created from the CloudTrail logs.`, ko:`각 AWS 계정에서 Amazon CloudWatch에 전달되는 AWS CloudTrail 트레일을 만듭니다. 모든 S3 버킷에 대한 데이터 이벤트 로그를 활성화합니다. 모든 AWS 계정에서 Amazon GuardDuty를 사용하여 이상 탐지를 수행합니다. Amazon Athena를 사용하여 CloudTrail 로그에서 생성된 사용자 지정 메트릭에 대한 SQL 쿼리를 수행합니다.` },
    { k:'B', en:`Create an AWS CloudTrail organization trail that is delivered to Amazon CloudWatch in the Organizations management account. Enable data events logs for all S3 buckets. Use Amazon CloudWatch anomaly detection in all the AWS accounts. Use Amazon Athena to perform SQL queries on the custom metrics created from the CloudTrail logs.`, ko:`Organizations 관리 계정에서 Amazon CloudWatch에 전달되는 AWS CloudTrail 조직 트레일을 만듭니다. 모든 S3 버킷에 대한 데이터 이벤트 로그를 활성화합니다. 모든 AWS 계정에서 Amazon CloudWatch 이상 감지를 사용합니다. Amazon Athena를 사용하여 CloudTrail 로그에서 생성된 사용자 지정 메트릭에 대한 SQL 쿼리를 수행합니다.` },
    { k:'C', en:`Create an AWS CloudTrail organization trail that is delivered to Amazon CloudWatch in the Organizations management account. Enable data events logs for all S3 buckets. Use Amazon CloudWatch anomaly detection in all the AWS accounts. Use Amazon CloudWatch Metrics Insights to perform SQL queries on the custom metrics created from the CloudTrail logs.`, ko:`Organizations 관리 계정에서 Amazon CloudWatch에 전달되는 AWS CloudTrail 조직 트레일을 만듭니다. 모든 S3 버킷에 대한 데이터 이벤트 로그를 활성화합니다. 모든 AWS 계정에서 Amazon CloudWatch 이상 감지를 사용합니다. Amazon CloudWatch Metrics Insights를 사용하여 CloudTrail 로그에서 생성된 사용자 지정 메트릭에 대한 SQL 쿼리를 수행합니다.` },
    { k:'D', en:`Create an AWS CloudTrail trail that is delivered to Amazon CloudWatch in each AWS account. Enable data events logs for all S3 buckets. Use a custom solution for anomaly detection in all the AWS accounts. Use Amazon CloudWatch Metrics Insights to perform SQL queries on the custom metrics created from the CloudTrail logs.`, ko:`각 AWS 계정에서 Amazon CloudWatch에 전달되는 AWS CloudTrail 트레일을 만듭니다. 모든 S3 버킷에 대한 데이터 이벤트 로그를 활성화합니다. 모든 AWS 계정에서 이상 탐지를 위한 사용자 지정 솔루션을 사용합니다. Amazon CloudWatch Metrics Insights를 사용하여 CloudTrail 로그에서 생성된 사용자 지정 메트릭에 대한 SQL 쿼리를 수행합니다.` },
  ],
  answer: ['C'],
  vote: '75% C',
  explain: `<p><span class="mark-ok">✅ C — 조직 CloudTrail + CloudWatch 이상 감지 + CloudWatch Metrics Insights</span></p>
<p>조직 트레일을 사용하면 모든 계정의 로그를 중앙에서 관리합니다. CloudWatch 이상 감지(Anomaly Detection)는 자동으로 이상 패턴을 감지합니다. <strong>Amazon Athena는 S3 버킷 데이터만 쿼리할 수 있으며, CloudWatch 메트릭에는 SQL 쿼리를 수행할 수 없습니다.</strong> CloudWatch 메트릭에 SQL 쿼리를 수행하려면 CloudWatch Metrics Insights를 사용해야 합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 각 계정에 별도 트레일 생성은 관리 오버헤드가 높고, Athena는 CloudWatch 메트릭을 직접 쿼리할 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — B와 C의 차이: Athena는 CloudWatch 메트릭이 아닌 S3에 저장된 데이터만 쿼리합니다. CloudWatch 메트릭 쿼리에는 Metrics Insights를 사용해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — 각 계정에 별도 트레일과 사용자 정의 이상 탐지는 관리 오버헤드가 높습니다.</p>`,
  disc: [{ ans:'C (75%)', txt:'핵심: Athena는 CloudWatch 메트릭 쿼리 불가. CloudWatch 메트릭 SQL 쿼리는 Metrics Insights가 필요합니다.' }]
},
{
  n: 290,
  en: `A DevOps team is deploying microservices for an application on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The cluster uses managed node groups. The DevOps team wants to enable auto scaling for the microservice Pods based on a specific CPU utilization percentage. The DevOps team has already installed the Kubernetes Metrics Server on the cluster.<br><br>Which solution will meet these requirements in the MOST operationally efficient way?`,
  ko: `DevOps 팀은 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터에서 애플리케이션에 대한 마이크로서비스를 배포하고 있습니다. 클러스터는 관리형 노드 그룹을 사용합니다. DevOps 팀은 특정 CPU 사용률 백분율에 따라 마이크로서비스 Pod에 대한 자동 스케일링을 활성화하려고 합니다. DevOps 팀은 이미 클러스터에 Kubernetes Metrics Server를 설치했습니다.<br><br>어떤 솔루션이 가장 운영적으로 효율적인 방식으로 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Edit the Auto Scaling group that is associated with the worker nodes of the EKS cluster. Configure the Auto Scaling group to use a target tracking scaling policy to scale when the average CPU utilization of the Auto Scaling group reaches a specific percentage.`, ko:`EKS 클러스터의 워커 노드와 연관된 자동 확장 그룹을 편집합니다. 자동 확장 그룹의 평균 CPU 사용률이 특정 백분율에 도달하면 확장되도록 대상 추적 확장 정책을 사용하도록 자동 확장 그룹을 구성합니다.` },
    { k:'B', en:`Deploy the Kubernetes Horizontal Pod Autoscaler (HPA) and the Kubernetes Vertical Pod Autoscaler (VPA) in the cluster. Configure the HPA to scale based on the target CPU utilization percentage. Configure the VPA to use the recommender mode setting.`, ko:`클러스터에 Kubernetes Horizontal Pod Autoscaler(HPA)와 Kubernetes Vertical Pod Autoscaler(VPA)를 배포합니다. HPA를 구성하여 대상 CPU 사용률 백분율에 따라 확장합니다. VPA를 구성하여 추천자 모드 설정을 사용합니다.` },
    { k:'C', en:`Run the AWS Systems Manager AWS-UpdateEKSManagedNodeGroup Automation document. Modify the values for NodeGroupDesiredSize, NodeGroupMaxSize, and NodeGroupMinSize to be based on an estimate for the required node size.`, ko:`AWS Systems Manager AWS-UpdateEKSManagedNodeGroup Automation 문서를 실행합니다. NodeGroupDesiredSize, NodeGroupMaxSize 및 NodeGroupMinSize의 값을 필요한 노드 크기에 대한 추정치를 기반으로 수정합니다.` },
    { k:'D', en:`Deploy the Kubernetes Horizontal Pod Autoscaler (HPA) and the Kubernetes Cluster Autoscaler in the cluster. Configure the HPA to scale based on the target CPU utilization percentage. Configure the Cluster Autoscaler to use the auto-discovery setting.`, ko:`클러스터에 Kubernetes Horizontal Pod Autoscaler(HPA)와 Kubernetes Cluster Autoscaler를 배포합니다. HPA를 구성하여 대상 CPU 사용률 백분율에 따라 확장합니다. Cluster Autoscaler를 구성하여 자동 검색 설정을 사용합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — HPA + Cluster Autoscaler(자동 검색)</span></p>
<p>Kubernetes HPA(Horizontal Pod Autoscaler)는 CPU 사용률 기반으로 Pod 수를 자동 조정합니다. Kubernetes Metrics Server가 이미 설치되어 있으므로 HPA가 바로 사용 가능합니다. Kubernetes Cluster Autoscaler(자동 검색 모드)는 Pod 수가 증가할 때 필요한 노드를 자동으로 EKS 관리형 노드 그룹에 추가합니다. 두 컴포넌트가 협력하여 Pod 수준과 노드 수준 자동 스케일링을 모두 처리합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — ASG의 CPU 기반 확장은 노드(EC2) 수를 늘리지만 Pod 수를 조정하지 않습니다. 마이크로서비스 Pod 자동 스케일링에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — VPA(Vertical Pod Autoscaler)는 Pod의 CPU/메모리 리소스 요청을 조정하지 Pod 수를 늘리지 않습니다. 수평 스케일링과 용도가 다릅니다.</p>
<p><span class="mark-no">❌ C</span> — SSM 자동화 문서로 수동으로 노드 그룹 크기를 조정하는 것은 자동 스케일링이 아닙니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'HPA(Pod 수평 확장) + Cluster Autoscaler(노드 자동 추가) 조합이 EKS 마이크로서비스 CPU 기반 자동 스케일링의 표준 솔루션입니다.' }]
}
];
