window.QS_SET35 = [
  {
    n: 341,
    en: `A company needs to optimize the cost of its application on AWS. The application uses AWS Lambda functions and Amazon Elastic Container Service (Amazon ECS) containers that run on AWS Fargate. The application is write-heavy and stores data in an Amazon Aurora MySQL database.<br><br>The load on the application is not consistent. The application experiences long periods of no usage, followed by sudden and significant increases and decreases in traffic. The database runs on a memory optimized DB instance that cannot handle the load.<br><br>A solutions architect must design a solution that can scale to handle the changes in traffic.<br><br>Which solution will meet these requirements MOST cost-effectively?`,
    ko: `한 회사는 AWS에서 애플리케이션 비용을 최적화해야 합니다. 이 애플리케이션은 AWS Lambda 함수와 AWS Fargate에서 실행되는 Amazon ECS 컨테이너를 사용합니다. 애플리케이션은 쓰기 집약적이며 Amazon Aurora MySQL 데이터베이스에 데이터를 저장합니다.<br><br>애플리케이션의 부하는 일정하지 않습니다. 오랜 기간 사용되지 않다가 갑자기 트래픽이 크게 증가하거나 감소합니다. 데이터베이스는 부하를 처리할 수 없는 메모리 최적화 DB 인스턴스에서 실행됩니다.<br><br>솔루션 설계자는 트래픽 변화를 처리할 수 있도록 확장 가능한 솔루션을 설계해야 합니다.<br><br>이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Add additional read replicas to the database. Purchase Instance Savings Plans and RDS Reserved Instances.`, ko: `데이터베이스에 추가 읽기 전용 복제본을 추가합니다. 인스턴스 Savings Plan과 RDS 예약 인스턴스를 구매합니다.` },
      { k: 'B', en: `Migrate the database to an Aurora DB cluster that has multiple writer instances. Purchase Instance Savings Plans.`, ko: `여러 쓰기 인스턴스가 있는 Aurora DB 클러스터로 데이터베이스를 마이그레이션합니다. 인스턴스 Savings Plan을 구매합니다.` },
      { k: 'C', en: `Migrate the database to an Aurora global database. Purchase Compute Savings Plans and RDS Reserved Instances.`, ko: `데이터베이스를 Aurora 글로벌 데이터베이스로 마이그레이션합니다. Compute Savings Plan 및 RDS 예약 인스턴스를 구매합니다.` },
      { k: 'D', en: `Migrate the database to Aurora Serverless v1. Purchase Compute Savings Plans.`, ko: `데이터베이스를 Aurora Serverless v1으로 마이그레이션합니다. Compute Savings Plan을 구매합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — Aurora Serverless v1 + Compute Savings Plan</span></p>
<p>Aurora Serverless v1은 간헐적이고 예측 불가능한 워크로드에 최적화된 온디맨드 자동 확장 구성입니다. 사용하지 않는 기간에는 <strong>용량을 0으로 축소(일시 중지)</strong>하고 트래픽 급증 시 자동으로 확장하므로, 유휴 시간에 비용이 발생하지 않습니다.</p>
<p>Lambda와 Fargate는 이미 서버리스·온디맨드 과금 모델이므로, DB도 서버리스로 전환하면 전체 스택을 일관되게 비용 최적화할 수 있습니다.</p>
<p>Compute Savings Plan은 Lambda·Fargate 등 컴퓨팅 서비스에 폭넓게 적용되어 추가 비용 절감 효과를 제공합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html" target="_blank">Aurora Serverless v1 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 읽기 전용 복제본 추가는 쓰기 집약적 워크로드에는 도움이 되지 않습니다. 또한 예약 인스턴스는 장기 고정 용량을 가정하므로 예측 불가 트래픽에는 비용 낭비입니다.</p>
<p><span class="mark-no">❌ B</span> — 다중 쓰기 Aurora 클러스터는 고가용성과 쓰기 처리량 향상에는 유효하지만, 유휴 시간에도 인스턴스 비용이 지속 발생하여 비용 효율적이지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Aurora 글로벌 데이터베이스는 리전 간 저지연 읽기와 재해 복구를 위한 솔루션이며, 단순 예측 불가 워크로드 처리와는 무관합니다. RDS 예약 인스턴스 구매는 가변 트래픽 환경에서 오히려 비용 증가 요인입니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'Aurora Serverless v1은 예측 불가한 버스트 쓰기 워크로드에 적합하며 유휴 시간에는 비용이 발생하지 않음. Compute Savings Plan은 Lambda·Fargate에 모두 적용 가능하여 전체 비용 최적화 달성.' },
    ]
  },

  {
    n: 342,
    en: `A company migrated an application to the AWS Cloud. The application runs on two Amazon EC2 instances behind an Application Load Balancer (ALB). Application data is stored in a MySQL database that runs on an additional EC2 instance. The application's use of the database is read-heavy.<br><br>The application loads static content from Amazon Elastic Block Store (Amazon EBS) volumes that are attached to each EC2 instance. The static content is updated frequently and must be copied to each EBS volume.<br><br>The load on the application changes throughout the day. During peak hours, the application cannot handle all the incoming requests. Trace data shows that the database cannot handle the read load during peak hours.<br><br>Which solution will improve the reliability of the application?`,
    ko: `한 회사가 애플리케이션을 AWS 클라우드로 마이그레이션했습니다. 애플리케이션은 ALB(Application Load Balancer) 뒤에 있는 두 개의 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션 데이터는 추가 EC2 인스턴스에서 실행되는 MySQL 데이터베이스에 저장됩니다. 데이터베이스 사용은 읽기 중심입니다.<br><br>애플리케이션은 각 EC2 인스턴스에 연결된 EBS 볼륨에서 정적 콘텐츠를 로드합니다. 정적 콘텐츠는 자주 업데이트되므로 각 EBS 볼륨에 복사해야 합니다.<br><br>애플리케이션 부하는 하루 종일 변동됩니다. 피크 시간에는 모든 요청을 처리할 수 없으며, 데이터베이스도 피크 시간의 읽기 부하를 처리할 수 없습니다.<br><br>애플리케이션의 안정성을 향상시키는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Migrate the application to a set of AWS Lambda functions. Set the Lambda functions as targets for the ALB. Create a new single EBS volume for the static content. Configure the Lambda functions to read from the new EBS volume. Migrate the database to an Amazon RDS for MySQL Multi-AZ DB cluster.`, ko: `애플리케이션을 AWS Lambda 함수 세트로 마이그레이션합니다. Lambda 함수를 ALB의 대상으로 설정합니다. 정적 콘텐츠용 단일 EBS 볼륨을 생성합니다. Lambda가 해당 EBS 볼륨에서 읽도록 구성합니다. 데이터베이스를 Amazon RDS for MySQL 다중 AZ DB 클러스터로 마이그레이션합니다.` },
      { k: 'B', en: `Migrate the application to a set of AWS Step Functions state machines. Set the state machines as targets for the ALB. Create an Amazon Elastic File System (Amazon EFS) file system for the static content. Configure the state machines to read from the EFS file system. Migrate the database to Amazon Aurora MySQL Serverless v2 with a reader DB instance.`, ko: `애플리케이션을 AWS Step Functions 상태 머신 세트로 마이그레이션합니다. 상태 머신을 ALB 대상으로 설정합니다. 정적 콘텐츠용 Amazon EFS 파일 시스템을 생성합니다. 상태 머신이 EFS에서 읽도록 구성합니다. 데이터베이스를 리더 DB 인스턴스가 있는 Amazon Aurora MySQL Serverless v2로 마이그레이션합니다.` },
      { k: 'C', en: `Containerize the application. Migrate the application to an Amazon ECS cluster. Use the AWS Fargate launch type for the tasks that host the application. Create a new single EBS volume for the static content. Mount the new EBS volume on the ECS cluster. Configure AWS Application Auto Scaling on the ECS cluster. Set the ECS service as a target for the ALB. Migrate the database to an Amazon RDS for MySQL Multi-AZ DB cluster.`, ko: `애플리케이션을 컨테이너화합니다. Amazon ECS 클러스터로 마이그레이션하고 Fargate 시작 유형을 사용합니다. 정적 콘텐츠용 단일 EBS 볼륨을 생성하고 ECS 클러스터에 마운트합니다. ECS에 Application Auto Scaling을 구성합니다. ECS 서비스를 ALB 대상으로 설정합니다. 데이터베이스를 RDS for MySQL 다중 AZ 클러스터로 마이그레이션합니다.` },
      { k: 'D', en: `Containerize the application. Migrate the application to an Amazon ECS cluster. Use the AWS Fargate launch type for the tasks that host the application. Create an Amazon Elastic File System (Amazon EFS) file system for the static content. Mount the EFS file system to each container. Configure AWS Application Auto Scaling on the ECS cluster. Set the ECS service as a target for the ALB. Migrate the database to Amazon Aurora MySQL Serverless v2 with a reader DB instance.`, ko: `애플리케이션을 컨테이너화합니다. Amazon ECS 클러스터로 마이그레이션하고 Fargate 시작 유형을 사용합니다. 정적 콘텐츠용 Amazon EFS 파일 시스템을 생성하고 각 컨테이너에 마운트합니다. ECS에 Application Auto Scaling을 구성합니다. ECS 서비스를 ALB 대상으로 설정합니다. 데이터베이스를 리더 DB 인스턴스가 있는 Aurora MySQL Serverless v2로 마이그레이션합니다.` },
    ],
    answer: ['D'],
    vote: '87% D',
    explain: `<p><span class="mark-ok">✅ D — ECS Fargate + EFS + Aurora MySQL Serverless v2 (Reader)</span></p>
<p><strong>정적 콘텐츠:</strong> Amazon EFS는 여러 컨테이너가 동시에 마운트하여 읽고 쓸 수 있는 공유 파일 시스템입니다. 기존에 EBS별 복사가 필요했던 문제를 해결하며, 컨테이너가 자동 확장되어도 동일한 파일에 접근할 수 있습니다.</p>
<p><strong>데이터베이스:</strong> Aurora MySQL Serverless v2는 자동 확장을 지원하며, <strong>리더 DB 인스턴스</strong>를 추가하면 읽기 부하를 분산할 수 있어 읽기 집약적 워크로드에 최적입니다.</p>
<p><strong>컴퓨팅:</strong> ECS + Fargate + Application Auto Scaling은 피크 트래픽에 자동으로 대응하여 안정성을 높입니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html" target="_blank">ECS + EFS 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda 함수는 EBS 볼륨을 마운트할 수 없습니다. Lambda의 스토리지 접근은 제한적이며, 단일 EBS로는 다중 Lambda 인스턴스에서 공유 접근이 불가합니다.</p>
<p><span class="mark-no">❌ B</span> — Step Functions 상태 머신은 API 워크플로 오케스트레이션 용도이며, ALB의 HTTP 트래픽 직접 처리에는 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — EBS 볼륨은 단일 AZ에 종속되며 여러 컨테이너가 동시에 쓰기 공유를 할 수 없습니다(Multi-Attach는 제한적). 컨테이너 자동 확장 시 정적 콘텐츠 동기화 문제가 재발합니다.</p>`,
    disc: [
      { ans: 'D (87%)', txt: 'EFS는 다중 컨테이너 공유 마운트를 지원하여 정적 콘텐츠 동기화 문제 해결. Aurora Serverless v2 + Reader는 읽기 집약적 DB의 피크 부하 대응에 최적.' },
    ]
  },

  {
    n: 343,
    en: `A solutions architect wants to make sure that only AWS users or roles with suitable permissions can access a new Amazon API Gateway endpoint. The solutions architect wants an end-to-end view of each request to analyze the latency of the request and create service maps.<br><br>How can the solutions architect design the API Gateway access control and perform request inspections?`,
    ko: `솔루션 아키텍트는 적절한 권한을 가진 AWS 사용자 또는 역할만 새로운 Amazon API Gateway 엔드포인트에 액세스할 수 있도록 하려 합니다. 솔루션 설계자는 요청의 지연 시간을 분석하고 서비스 맵을 생성하기 위해 각 요청에 대한 엔드투엔드 뷰가 필요합니다.<br><br>솔루션 설계자는 API Gateway 액세스 제어를 어떻게 설계하고 요청 검사를 수행할 수 있습니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `For the API Gateway method, set the authorization to AWS_IAM. Then, give the IAM user or role execute-api:Invoke permission on the REST API resource. Enable the API caller to sign requests with AWS Signature when accessing the endpoint. Use AWS X-Ray to trace and analyze user requests to API Gateway.`, ko: `API Gateway 메서드의 인증을 AWS_IAM으로 설정합니다. IAM 사용자 또는 역할에 REST API 리소스에 대한 execute-api:Invoke 권한을 부여합니다. API 호출자가 엔드포인트 접근 시 AWS 서명으로 요청에 서명하도록 활성화합니다. AWS X-Ray를 사용하여 API Gateway에 대한 사용자 요청을 추적·분석합니다.` },
      { k: 'B', en: `For the API Gateway resource, set CORS to enabled and only return the company's domain in Access-Control-Allow-Origin headers. Then, give the IAM user or role execute-api:Invoke permission on the REST API resource. Use Amazon CloudWatch to trace and analyze user requests to API Gateway.`, ko: `API Gateway 리소스에서 CORS를 활성화하고 Access-Control-Allow-Origin 헤더에 회사 도메인만 반환합니다. IAM 사용자 또는 역할에 execute-api:Invoke 권한을 부여합니다. Amazon CloudWatch를 사용하여 요청을 추적·분석합니다.` },
      { k: 'C', en: `Create an AWS Lambda function as the custom authorizer, ask the API client to pass the key and secret when making the call, and then use Lambda to validate the key/secret pair against the IAM system. Use AWS X-Ray to trace and analyze user requests to API Gateway.`, ko: `AWS Lambda 함수를 사용자 지정 인증자로 생성하고, API 클라이언트에 호출 시 키와 비밀을 전달하도록 요청한 후 Lambda를 사용하여 IAM 시스템에 대해 키/비밀 쌍을 검증합니다. AWS X-Ray를 사용하여 요청을 추적·분석합니다.` },
      { k: 'D', en: `Create a client certificate for API Gateway. Distribute the certificate to the AWS users and roles that need to access the endpoint. Enable the API caller to pass the client certificate when accessing the endpoint. Use Amazon CloudWatch to trace and analyze user requests to API Gateway.`, ko: `API Gateway용 클라이언트 인증서를 생성합니다. 엔드포인트에 접근해야 하는 AWS 사용자 및 역할에 인증서를 배포합니다. API 호출자가 클라이언트 인증서를 전달하도록 활성화합니다. Amazon CloudWatch를 사용하여 요청을 추적·분석합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — AWS_IAM 인증 + AWS X-Ray</span></p>
<p><strong>접근 제어:</strong> API Gateway 메서드 인증을 <code>AWS_IAM</code>으로 설정하면 SigV4(AWS Signature Version 4) 서명을 통해 IAM 자격 증명을 가진 사용자·역할만 접근할 수 있습니다. IAM 정책에서 <code>execute-api:Invoke</code>를 허용해야 API를 호출할 수 있어 세밀한 권한 제어가 가능합니다.</p>
<p><strong>요청 검사:</strong> AWS X-Ray는 API Gateway와 네이티브로 통합되어 각 요청의 <strong>엔드투엔드 추적</strong>, 지연 시간 분석, 서비스 맵 생성을 지원합니다. CloudWatch는 메트릭·로그 수집에 특화되어 있어 서비스 맵 생성 기능이 없습니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html" target="_blank">API Gateway X-Ray 통합 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — CORS는 브라우저 기반의 교차 출처 요청 제어 메커니즘으로, AWS 사용자/역할의 IAM 기반 접근 제어와는 무관합니다. CloudWatch는 서비스 맵을 생성하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 커스텀 Lambda 인증자는 토큰(JWT, OAuth 등) 기반 인증에 적합합니다. IAM 사용자/역할의 권한을 직접 활용하려면 AWS_IAM 인증이 더 적합하며 구현도 단순합니다.</p>
<p><span class="mark-no">❌ D</span> — API Gateway 클라이언트 인증서는 API Gateway→백엔드 간 mTLS 인증용입니다. 클라이언트(호출자)를 인증하는 용도가 아니며, CloudWatch로는 서비스 맵을 생성할 수 없습니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'AWS_IAM 인증은 IAM 정책과 연계되어 AWS 사용자/역할 전용 접근 제어를 구현. X-Ray는 API Gateway 네이티브 통합으로 엔드투엔드 추적과 서비스 맵 생성을 모두 지원.' },
    ]
  },

  {
    n: 344,
    en: `A company is using AWS CodePipeline for the CI/CD of an application to an Amazon EC2 Auto Scaling group. All AWS resources are defined in AWS CloudFormation templates. The application artifacts are stored in an Amazon S3 bucket and deployed to the Auto Scaling group using instance user data scripts. As the application has become more complex, recent resource changes in the CloudFormation templates have caused unplanned downtime.<br><br>How should a solutions architect improve the CI/CD pipeline to reduce the likelihood that changes in the templates will cause downtime?`,
    ko: `한 회사가 Amazon EC2 Auto Scaling 그룹에 대한 애플리케이션 CI/CD에 AWS CodePipeline을 사용하고 있습니다. 모든 AWS 리소스는 AWS CloudFormation 템플릿에 정의됩니다. 애플리케이션 아티팩트는 Amazon S3 버킷에 저장되고 인스턴스 사용자 데이터 스크립트를 사용하여 Auto Scaling 그룹에 배포됩니다. 애플리케이션이 더욱 복잡해짐에 따라 CloudFormation 템플릿의 최근 리소스 변경으로 인해 계획되지 않은 가동 중지 시간이 발생했습니다.<br><br>솔루션 설계자는 템플릿 변경으로 인한 가동 중지 시간 발생 가능성을 줄이기 위해 CI/CD 파이프라인을 어떻게 개선해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Adapt the deployment scripts to detect and report CloudFormation error conditions when performing deployments. Write test plans for a testing team to run in a non-production environment before approving the change for production.`, ko: `배포 시 CloudFormation 오류 조건을 감지·보고하도록 배포 스크립트를 수정합니다. 프로덕션 변경 승인 전에 테스트 팀이 비프로덕션 환경에서 실행할 테스트 계획을 작성합니다.` },
      { k: 'B', en: `Implement automated testing using AWS CodeBuild in a test environment. Use CloudFormation change sets to evaluate changes before deployment. Use AWS CodeDeploy to leverage blue/green deployment patterns to allow evaluations and the ability to revert changes, if needed.`, ko: `테스트 환경에서 AWS CodeBuild를 사용한 자동화 테스트를 구현합니다. CloudFormation 변경 세트를 사용하여 배포 전에 변경 사항을 평가합니다. AWS CodeDeploy를 사용하여 블루/그린 배포 패턴을 활용하고 필요 시 변경 사항을 되돌릴 수 있도록 합니다.` },
      { k: 'C', en: `Use plugins for the integrated development environment (IDE) to check the templates for errors, and use the AWS CLI to validate that the templates are correct. Adapt the deployment code to check for error conditions and generate notifications on errors. Deploy to a test environment and run a manual test plan before approving the change for production.`, ko: `IDE 플러그인을 사용하여 템플릿 오류를 확인하고, AWS CLI로 템플릿 유효성을 검증합니다. 오류 조건을 확인하고 알림을 생성하도록 배포 코드를 수정합니다. 프로덕션 변경 승인 전 테스트 환경에 배포하고 수동 테스트 계획을 실행합니다.` },
      { k: 'D', en: `Use AWS CodeDeploy and a blue/green deployment pattern with CloudFormation to replace the user data deployment scripts. Have the operators log in to running instances and go through a manual test plan to verify the application is running as expected.`, ko: `AWS CodeDeploy 및 CloudFormation의 블루/그린 배포 패턴을 사용하여 사용자 데이터 배포 스크립트를 대체합니다. 운영자가 실행 중인 인스턴스에 로그인하여 수동 테스트 계획을 실행하고 애플리케이션이 정상 작동하는지 확인합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — CodeBuild 자동화 테스트 + CloudFormation 변경 세트 + CodeDeploy 블루/그린</span></p>
<p><strong>자동화 테스트 (CodeBuild):</strong> 파이프라인에 자동화 테스트를 포함하면 변경 사항으로 인한 문제를 배포 전에 감지할 수 있습니다.</p>
<p><strong>CloudFormation 변경 세트:</strong> 실제 리소스에 적용하기 전에 변경 사항이 인프라에 미치는 영향을 미리 확인하여 예상치 못한 중단을 방지합니다.</p>
<p><strong>CodeDeploy 블루/그린:</strong> 새 버전(그린)을 별도 배포한 후 트래픽을 점진적으로 전환하며, 문제 발생 시 즉시 이전 버전(블루)으로 롤백할 수 있어 무중단 배포를 실현합니다.</p>
<p>이 세 가지를 조합하면 자동화·사전 예방·빠른 롤백이라는 CI/CD 모범 사례를 모두 충족합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-create-console-blue-green.html" target="_blank">CodeDeploy 블루/그린 배포 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 배포 스크립트에서 오류를 감지하는 것은 사후 대응이며, 수동 테스트 계획은 자동화 수준이 낮아 인적 오류 위험이 있습니다.</p>
<p><span class="mark-no">❌ C</span> — IDE 플러그인과 AWS CLI를 통한 정적 검증은 구문 오류를 잡을 수 있지만, 런타임 동작이나 리소스 변경의 영향을 예측하기 어렵습니다. 수동 테스트도 자동화보다 신뢰성이 낮습니다.</p>
<p><span class="mark-no">❌ D</span> — 블루/그린 배포는 올바른 방향이지만, 운영자가 수동으로 인스턴스에 로그인하여 검증하는 것은 자동화의 이점을 저해하고 일관성 없는 결과를 초래할 수 있습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'CodeBuild 자동화 테스트, CloudFormation 변경 세트, CodeDeploy 블루/그린이라는 세 요소의 조합이 완전한 자동화·사전 검증·빠른 롤백을 모두 달성하는 모범 사례로 일치.</p>' },
    ]
  },

  {
    n: 345,
    en: `A North American company with headquarters on the East Coast is deploying a new web application running on Amazon EC2 in the us-east-1 Region. The application should dynamically scale to meet user demand and maintain resiliency. Additionally, the application must have disaster recovery capabilities in an active-passive configuration with the us-west-1 Region.<br><br>Which steps should a solutions architect take after creating a VPC in the us-east-1 Region?`,
    ko: `동부 해안에 본사를 둔 북미 회사가 us-east-1 리전의 Amazon EC2에서 실행되는 새로운 웹 애플리케이션을 배포하고 있습니다. 애플리케이션은 사용자 수요에 맞게 동적으로 확장되어야 하며 탄력성을 유지해야 합니다. 또한 애플리케이션은 us-west-1 리전과의 액티브-패시브 구성에서 재해 복구 기능을 갖춰야 합니다.<br><br>us-east-1 리전에서 VPC를 생성한 후 솔루션 아키텍트가 수행해야 하는 단계는 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a VPC in the us-west-1 Region. Use inter-Region VPC peering to connect both VPCs. Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs in each Region as part of an Auto Scaling group spanning both VPCs and served by the ALB.`, ko: `us-west-1 리전에 VPC를 생성합니다. 리전 간 VPC 피어링으로 두 VPC를 연결합니다. us-east-1 VPC에 다중 AZ에 걸친 ALB를 배포합니다. 두 VPC에 걸치는 Auto Scaling 그룹의 일부로 각 리전의 여러 AZ에 EC2 인스턴스를 배포합니다.` },
      { k: 'B', en: `Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs as part of an Auto Scaling group served by the ALB. Deploy the same solution to the us-west-1 Region. Create an Amazon Route 53 record set with a failover routing policy and health checks enabled to provide high availability across both Regions.`, ko: `us-east-1 VPC에 다중 AZ에 걸친 ALB를 배포합니다. ALB가 제공하는 Auto Scaling 그룹의 일부로 여러 AZ에 EC2 인스턴스를 배포합니다. 동일한 솔루션을 us-west-1 리전에도 배포합니다. 장애 조치 라우팅 정책과 상태 확인이 활성화된 Amazon Route 53 레코드 세트를 생성하여 두 리전에 걸친 고가용성을 제공합니다.` },
      { k: 'C', en: `Create a VPC in the us-west-1 Region. Use inter-Region VPC peering to connect both VPCs. Deploy an Application Load Balancer (ALB) that spans both VPCs. Deploy EC2 instances across multiple Availability Zones as part of an Auto Scaling group in each VPC served by the ALB. Create an Amazon Route 53 record that points to the ALB.`, ko: `us-west-1 리전에 VPC를 생성합니다. 리전 간 VPC 피어링으로 두 VPC를 연결합니다. 두 VPC에 걸치는 ALB를 배포합니다. ALB가 제공하는 각 VPC에서 Auto Scaling 그룹의 일부로 여러 AZ에 EC2 인스턴스를 배포합니다. ALB를 가리키는 Route 53 레코드를 생성합니다.` },
      { k: 'D', en: `Deploy an Application Load Balancer (ALB) spanning multiple Availability Zones (AZs) to the VPC in the us-east-1 Region. Deploy EC2 instances across multiple AZs as part of an Auto Scaling group served by the ALB. Deploy the same solution to the us-west-1 Region. Create separate Amazon Route 53 records in each Region that point to the ALB in the Region. Use Route 53 health checks to provide high availability across both Regions.`, ko: `us-east-1 VPC에 다중 AZ ALB를 배포합니다. ALB가 제공하는 Auto Scaling 그룹의 일부로 여러 AZ에 EC2 인스턴스를 배포합니다. 동일한 솔루션을 us-west-1에도 배포합니다. 각 리전의 ALB를 가리키는 별도의 Route 53 레코드를 생성합니다. Route 53 상태 확인을 사용하여 고가용성을 제공합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 독립적 ALB + Auto Scaling + Route 53 장애 조치 라우팅</span></p>
<p><strong>액티브-패시브 DR 구현:</strong> Route 53 장애 조치(Failover) 라우팅 정책은 액티브-패시브 구성을 직접적으로 지원합니다. us-east-1을 Primary, us-west-1을 Secondary로 설정하고 상태 확인을 활성화하면, 프라이머리 장애 시 Route 53이 자동으로 트래픽을 세컨더리로 전환합니다.</p>
<p><strong>독립적 확장:</strong> 각 리전에 독립적인 ALB + Auto Scaling 그룹을 배포하면 리전별로 트래픽 변화에 맞게 독립적으로 확장됩니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html" target="_blank">Route 53 장애 조치 라우팅 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ALB는 리전 범위 서비스이므로 여러 리전에 걸친 VPC를 대상으로 할 수 없습니다. 단일 Auto Scaling 그룹도 여러 리전에 걸칠 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — ALB는 리전 서비스이므로 서로 다른 리전의 VPC 두 개에 동시에 걸쳐 배포하는 것이 불가능합니다.</p>
<p><span class="mark-no">❌ D</span> — 각 리전에 별도 레코드를 생성하는 방식으로는 장애 조치(Failover) 라우팅 정책이 적용되지 않습니다. 액티브-패시브 DR을 위해서는 명시적인 Failover 라우팅 정책이 필요합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'ALB는 리전 서비스이므로 리전 간 VPC 피어링 기반 공유 ALB는 불가. Route 53 Failover 라우팅 정책이 액티브-패시브 DR을 구현하는 유일한 올바른 방법.' },
    ]
  },

  {
    n: 346,
    en: `A company has a legacy application that runs on multiple .NET Framework components. The components share the same Microsoft SQL Server database and communicate with each other asynchronously by using Microsoft Message Queuing (MSMQ).<br><br>The company is starting a migration to containerized .NET Core components and wants to refactor the application to run on AWS. The .NET Core components require complex orchestration. The company must have full control over networking and host configuration. The application's database model is strongly relational.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사에 여러 .NET Framework 구성 요소에서 실행되는 레거시 애플리케이션이 있습니다. 구성 요소들은 동일한 Microsoft SQL Server 데이터베이스를 공유하고 MSMQ(Microsoft Message Queuing)를 사용하여 비동기적으로 통신합니다.<br><br>회사는 컨테이너화된 .NET Core 구성 요소로의 마이그레이션을 시작하고 있으며 AWS에서 실행되도록 애플리케이션을 리팩터링하려 합니다. .NET Core 구성 요소는 복잡한 오케스트레이션이 필요합니다. 회사는 네트워킹 및 호스트 구성을 완전히 제어할 수 있어야 합니다. 애플리케이션의 데이터베이스 모델은 강력한 관계형입니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Host the .NET Core components on AWS App Runner. Host the database on Amazon RDS for SQL Server. Use Amazon EventBridge for asynchronous messaging.`, ko: `.NET Core 구성 요소를 AWS App Runner에서 호스팅합니다. 데이터베이스를 Amazon RDS for SQL Server에서 호스팅합니다. 비동기 메시징에는 Amazon EventBridge를 사용합니다.` },
      { k: 'B', en: `Host the .NET Core components on Amazon Elastic Container Service (Amazon ECS) with the AWS Fargate launch type. Host the database on Amazon DynamoDB. Use Amazon Simple Notification Service (Amazon SNS) for asynchronous messaging.`, ko: `.NET Core 구성 요소를 AWS Fargate 시작 유형의 Amazon ECS에서 호스팅합니다. 데이터베이스를 Amazon DynamoDB에서 호스팅합니다. 비동기 메시징에는 Amazon SNS를 사용합니다.` },
      { k: 'C', en: `Host the .NET Core components on AWS Elastic Beanstalk. Host the database on Amazon Aurora PostgreSQL Serverless v2. Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) for asynchronous messaging.`, ko: `.NET Core 구성 요소를 AWS Elastic Beanstalk에서 호스팅합니다. 데이터베이스를 Amazon Aurora PostgreSQL Serverless v2에서 호스팅합니다. 비동기 메시징에는 Amazon MSK를 사용합니다.` },
      { k: 'D', en: `Host the .NET Core components on Amazon Elastic Container Service (Amazon ECS) with the Amazon EC2 launch type. Host the database on Amazon Aurora MySQL Serverless v2. Use Amazon Simple Queue Service (Amazon SQS) for asynchronous messaging.`, ko: `.NET Core 구성 요소를 Amazon EC2 시작 유형의 Amazon ECS에서 호스팅합니다. 데이터베이스를 Amazon Aurora MySQL Serverless v2에서 호스팅합니다. 비동기 메시징에는 Amazon SQS를 사용합니다.` },
    ],
    answer: ['D'],
    vote: '96% D',
    explain: `<p><span class="mark-ok">✅ D — ECS(EC2 시작 유형) + Aurora MySQL Serverless v2 + SQS</span></p>
<p><strong>복잡한 오케스트레이션 + 완전한 네트워킹/호스트 제어:</strong> ECS의 <strong>EC2 시작 유형</strong>은 기반 EC2 인스턴스에 대한 완전한 제어권(네트워크 인터페이스, 보안 그룹, 인스턴스 유형 등)을 제공합니다. Fargate는 호스트 제어가 제한됩니다.</p>
<p><strong>관계형 DB:</strong> Aurora MySQL Serverless v2는 완전 관리형 관계형 데이터베이스로, SQL Server의 관계형 스키마와 트랜잭션을 지원합니다.</p>
<p><strong>비동기 메시징 (MSMQ → SQS):</strong> Amazon SQS는 MSMQ의 메시지 큐 패턴을 AWS 네이티브로 대체하며, 가장 유사한 비동기 큐 아키텍처를 제공합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html" target="_blank">ECS 시작 유형 비교 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — App Runner는 호스트 및 네트워크 구성에 대한 제어가 제한적이며, 복잡한 오케스트레이션보다 단순 웹 앱·API에 적합합니다. EventBridge는 이벤트 라우팅 목적이며 메시지 큐 대체에는 적합하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — DynamoDB는 NoSQL 데이터베이스로, 강력한 관계형 모델을 갖는 애플리케이션에는 적합하지 않습니다. Fargate는 호스트 수준 제어가 불가합니다.</p>
<p><span class="mark-no">❌ C</span> — Elastic Beanstalk는 호스트 구성 커스터마이징이 제한적입니다. Amazon Aurora PostgreSQL Serverless v2는 현재 AWS에서 공식 지원하는 서비스가 아닙니다.</p>`,
    disc: [
      { ans: 'D (96%)', txt: 'EC2 시작 유형 ECS만이 네트워킹·호스트 완전 제어를 충족. DynamoDB(비관계형) 및 Fargate(호스트 제어 불가)를 제거하면 D가 유일한 정답. SQS는 MSMQ 대체에 가장 적합한 AWS 네이티브 큐 서비스.' },
    ]
  },

  {
    n: 347,
    en: `A solutions architect has launched multiple Amazon EC2 instances in a placement group within a single Availability Zone. Because of additional load on the system, the solutions architect attempts to add new instances to the placement group. However, the solutions architect receives an insufficient capacity error.<br><br>What should the solutions architect do to troubleshoot this issue?`,
    ko: `솔루션 아키텍트가 단일 가용 영역 내의 배치 그룹에서 여러 Amazon EC2 인스턴스를 시작했습니다. 시스템에 추가 부하가 생겨 배치 그룹에 새 인스턴스를 추가하려고 시도했지만 용량 부족(insufficient capacity) 오류가 발생했습니다.<br><br>이 문제를 해결하기 위해 솔루션 설계자는 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use a spread placement group. Set a minimum of eight instances for each Availability Zone.`, ko: `스프레드 배치 그룹을 사용합니다. 각 가용 영역에 최소 8개의 인스턴스를 설정합니다.` },
      { k: 'B', en: `Stop and start all the instances in the placement group. Try the launch again.`, ko: `배치 그룹의 모든 인스턴스를 중지하고 시작합니다. 다시 시작을 시도합니다.` },
      { k: 'C', en: `Create a new placement group. Merge the new placement group with the original placement group.`, ko: `새 배치 그룹을 생성합니다. 새 배치 그룹을 원래 배치 그룹과 병합합니다.` },
      { k: 'D', en: `Launch the additional instances as Dedicated Hosts in the placement groups.`, ko: `배치 그룹에서 추가 인스턴스를 전용 호스트(Dedicated Host)로 시작합니다.` },
    ],
    answer: ['B'],
    vote: '85% B',
    explain: `<p><span class="mark-ok">✅ B — 배치 그룹 내 모든 인스턴스 중지 후 재시작</span></p>
<p>클러스터 배치 그룹에서 이미 실행 중인 인스턴스가 있을 때 새 인스턴스 추가 시 용량 부족 오류가 발생하면, AWS 공식 문서에서는 다음을 권장합니다:</p>
<blockquote><em>"배치 그룹의 모든 인스턴스를 중지했다가 시작한 후 다시 시작하십시오. 인스턴스를 시작하면 요청된 모든 인스턴스를 수용할 수 있는 용량이 있는 하드웨어로 인스턴스가 마이그레이션될 수 있습니다."</em></blockquote>
<p>인스턴스를 중지 후 시작하면 AWS가 해당 인스턴스들을 충분한 용량이 있는 다른 물리 호스트로 이전(migrate)할 수 있어 문제가 해결될 수 있습니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html" target="_blank">EC2 배치 그룹 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 스프레드 배치 그룹으로 전환하면 기존 클러스터 배치 그룹의 낮은 네트워크 레이턴시 이점이 사라지며, 문제의 근본 원인인 용량 부족을 직접 해결하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — 배치 그룹은 병합(merge)할 수 없습니다. AWS에서 지원하지 않는 기능입니다.</p>
<p><span class="mark-no">❌ D</span> — 전용 호스트(Dedicated Host)는 배치 그룹과 함께 사용할 수 없습니다. 또한 비용이 크게 증가하며, 이 문제의 해결 방법이 아닙니다.</p>`,
    disc: [
      { ans: 'B (85%)', txt: 'AWS 공식 문서에서 배치 그룹 용량 부족 해결 방법으로 "모든 인스턴스 중지 후 시작"을 명시적으로 권장. 중지-시작이 인스턴스를 충분한 용량의 하드웨어로 마이그레이션할 수 있는 기회를 제공.' },
      { ans: 'D (15%)', txt: '용량 문제가 지속적이고 중요한 경우 전용 호스트 사용을 고려할 수 있다는 의견이 일부 있었으나, 배치 그룹과 전용 호스트 혼용은 지원되지 않아 오답.' },
    ]
  },

  {
    n: 348,
    en: `A company has used infrastructure as code (IaC) to provision a set of two Amazon EC2 instances. The instances have remained the same for several years.<br><br>The company's business has grown rapidly in the past few months. In response, the company's operations team has implemented an Auto Scaling group to manage the sudden increases in traffic. Company policy requires a monthly installation of security updates on all operating systems that are running.<br><br>The most recent security update required a reboot. As a result, the Auto Scaling group terminated the instances and replaced them with new, unpatched instances.<br><br>Which combination of steps should a solutions architect recommend to avoid a recurrence of this issue? (Choose two.)`,
    ko: `한 회사는 IaC(Infrastructure as Code)를 사용하여 두 개의 Amazon EC2 인스턴스 세트를 프로비저닝했습니다. 이 인스턴스들은 몇 년간 동일하게 유지되었습니다.<br><br>회사의 사업이 지난 몇 달 동안 급속히 성장했고, 운영 팀은 갑작스러운 트래픽 증가를 관리하기 위해 Auto Scaling 그룹을 구현했습니다. 회사 정책에 따라 실행 중인 모든 운영 체제에 보안 업데이트를 매월 설치해야 합니다.<br><br>최신 보안 업데이트에 재부팅이 필요했고, 그 결과 Auto Scaling 그룹이 인스턴스를 종료하고 패치가 적용되지 않은 새 인스턴스로 교체했습니다.<br><br>이 문제의 재발을 방지하기 위해 솔루션 설계자가 권장해야 하는 단계의 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Modify the Auto Scaling group by setting the Update policy to target the oldest launch configuration for replacement.`, ko: `교체 대상으로 가장 오래된 시작 구성을 지정하도록 Auto Scaling 그룹의 업데이트 정책을 수정합니다.` },
      { k: 'B', en: `Create a new Auto Scaling group before the next patch maintenance. During the maintenance window, patch both groups and reboot the instances.`, ko: `다음 패치 유지 관리 전에 새로운 Auto Scaling 그룹을 생성합니다. 유지 관리 기간 동안 두 그룹을 모두 패치하고 인스턴스를 재부팅합니다.` },
      { k: 'C', en: `Create an Elastic Load Balancer in front of the Auto Scaling group. Configure monitoring to ensure that target group health checks return healthy after the Auto Scaling group replaces the terminated instances.`, ko: `Auto Scaling 그룹 앞에 Elastic Load Balancer를 생성합니다. Auto Scaling 그룹이 종료된 인스턴스를 교체한 후 대상 그룹 상태 확인이 정상을 반환하도록 모니터링을 구성합니다.` },
      { k: 'D', en: `Create automation scripts to patch an AMI, update the launch configuration, and invoke an Auto Scaling instance refresh.`, ko: `AMI를 패치하고, 시작 구성을 업데이트하고, Auto Scaling 인스턴스 새로 고침을 호출하는 자동화 스크립트를 생성합니다.` },
      { k: 'E', en: `Create an Elastic Load Balancer in front of the Auto Scaling group. Configure termination protection on the instances.`, ko: `Auto Scaling 그룹 앞에 Elastic Load Balancer를 생성합니다. 인스턴스에 종료 방지(termination protection) 기능을 구성합니다.` },
    ],
    answer: ['C', 'D'],
    vote: 'CD 48% / AD 26% / AC 23%',
    explain: `<p><span class="mark-ok">✅ C, D — ELB 상태 확인 모니터링 + AMI 패치 자동화</span></p>
<p><strong>D — AMI 패치 자동화 + 시작 구성 업데이트 + 인스턴스 새로 고침:</strong> 문제의 근본 원인은 ASG가 재부팅 중인 인스턴스를 비정상으로 판단하고 <strong>패치되지 않은 구 AMI</strong>로 교체한다는 점입니다. 패치가 적용된 새 AMI를 구워(bake) 시작 구성(또는 시작 템플릿)을 업데이트하고 인스턴스 새로 고침(Instance Refresh)을 호출하면, 이후 ASG가 시작하는 모든 인스턴스가 이미 패치된 상태가 됩니다. (문항에서 "launch config 업데이트"는 "새 launch config/template 생성"의 의미로 해석)</p>
<p><strong>C — ELB + 상태 확인 모니터링:</strong> ELB를 배치하고 교체 후 상태 확인을 모니터링하면, 새 인스턴스가 정상 상태임을 확인하는 검증 레이어를 추가합니다. 이는 대체 후 패치 적용 여부를 간접적으로 확인하는 안전망 역할을 합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh.html" target="_blank">Auto Scaling 인스턴스 새로 고침 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — "가장 오래된 시작 구성 대상 지정"은 기본 종료 정책의 동작과 유사하며, 패치되지 않은 AMI 교체 문제를 근본적으로 해결하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — 새 Auto Scaling 그룹을 매번 생성하는 방식은 운영 부담이 크고, 동일 문제(재부팅 시 ASG가 인스턴스 종료)가 반복됩니다.</p>
<p><span class="mark-no">❌ E</span> — 종료 방지(Termination Protection)를 설정하면 ASG가 비정상 인스턴스를 교체하지 못해 ASG 자체의 목적을 훼손합니다.</p>`,
    disc: [
      { ans: 'CD (48%)', txt: 'D로 패치된 AMI 기반 새 시작 구성을 만들어 근본 원인을 해결하고, C로 교체 후 정상 상태를 모니터링하는 것이 가장 일관된 조합.' },
      { ans: 'AD (26%)', txt: '"시작 구성을 업데이트할 수 없다"는 기술적 지적과 함께 A는 무해하지만 D가 핵심 해결책이라는 분석 하에 AD를 선택하는 의견.' },
      { ans: 'AC (23%)', txt: '"launch config은 업데이트 불가"를 이유로 D를 제외하고 A+C를 선택하는 의견도 있으나, D의 의도(새 AMI + 새 구성 생성 + 인스턴스 새로 고침)를 고려하면 CD가 더 적합.' },
    ]
  },

  {
    n: 349,
    en: `A team of data scientists is using Amazon SageMaker instances and SageMaker APIs to train machine learning (ML) models. The SageMaker instances are deployed in a VPC that does not have access to or from the internet. Datasets for ML model training are stored in an Amazon S3 bucket. Interface VPC endpoints provide access to Amazon S3 and the SageMaker APIs.<br><br>Occasionally, the data scientists require access to the Python Package Index (PyPI) repository to update Python packages that they use as part of their workflow. A solutions architect must provide access to the PyPI repository while ensuring that the SageMaker instances remain isolated from the internet.<br><br>Which solution will meet these requirements?`,
    ko: `데이터 과학자 팀이 Amazon SageMaker 인스턴스와 SageMaker API를 사용하여 기계 학습(ML) 모델을 훈련하고 있습니다. SageMaker 인스턴스는 인터넷에 대한 액세스 권한이 없는 VPC에 배포됩니다. ML 모델 훈련용 데이터 세트는 Amazon S3 버킷에 저장됩니다. 인터페이스 VPC 엔드포인트가 Amazon S3 및 SageMaker API에 대한 액세스를 제공합니다.<br><br>경우에 따라 데이터 과학자는 워크플로에서 사용하는 Python 패키지를 업데이트하기 위해 PyPI(Python Package Index) 리포지토리에 액세스해야 합니다. 솔루션 설계자는 SageMaker 인스턴스가 인터넷에서 격리된 상태를 유지하도록 하면서 PyPI 리포지토리에 대한 액세스를 제공해야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS CodeCommit repository for each package that the data scientists need to access. Configure code synchronization between the PyPI repository and the CodeCommit repository. Create a VPC endpoint for CodeCommit.`, ko: `데이터 과학자가 액세스해야 하는 각 패키지에 대해 AWS CodeCommit 리포지토리를 생성합니다. PyPI 리포지토리와 CodeCommit 리포지토리 간의 코드 동기화를 구성합니다. CodeCommit에 대한 VPC 엔드포인트를 생성합니다.` },
      { k: 'B', en: `Create a NAT gateway in the VPC. Configure VPC routes to allow access to the internet with a network ACL that allows access to only the PyPI repository endpoint.`, ko: `VPC에 NAT 게이트웨이를 생성합니다. PyPI 리포지토리 엔드포인트에만 액세스를 허용하는 네트워크 ACL을 사용하여 인터넷 액세스를 허용하도록 VPC 경로를 구성합니다.` },
      { k: 'C', en: `Create a NAT instance in the VPC. Configure VPC routes to allow access to the internet. Configure SageMaker notebook instance firewall rules that allow access to only the PyPI repository endpoint.`, ko: `VPC에 NAT 인스턴스를 생성합니다. 인터넷 액세스를 허용하도록 VPC 경로를 구성합니다. PyPI 리포지토리 엔드포인트에만 액세스를 허용하는 SageMaker 노트북 인스턴스 방화벽 규칙을 구성합니다.` },
      { k: 'D', en: `Create an AWS CodeArtifact domain and repository. Add an external connection for public:pypi to the CodeArtifact repository. Configure the Python client to use the CodeArtifact repository. Create a VPC endpoint for CodeArtifact.`, ko: `AWS CodeArtifact 도메인 및 리포지토리를 생성합니다. CodeArtifact 리포지토리에 public:pypi에 대한 외부 연결을 추가합니다. CodeArtifact 리포지토리를 사용하도록 Python 클라이언트를 구성합니다. CodeArtifact에 대한 VPC 엔드포인트를 생성합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — AWS CodeArtifact + VPC 엔드포인트</span></p>
<p>AWS CodeArtifact는 소프트웨어 패키지를 저장하고 공유하기 위한 완전 관리형 아티팩트 리포지토리 서비스입니다. <code>public:pypi</code>에 대한 외부 연결을 추가하면, CodeArtifact가 PyPI를 프록시(캐시)하여 SageMaker 인스턴스가 인터넷에 직접 연결하지 않고도 PyPI 패키지를 설치할 수 있습니다.</p>
<p>VPC 엔드포인트를 통해 CodeArtifact에 접근하면 SageMaker 인스턴스는 인터넷과 완전히 격리된 상태를 유지할 수 있습니다. <code>pip</code>, <code>twine</code> 등 Python 표준 도구와 네이티브로 통합됩니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/external-connection.html" target="_blank">CodeArtifact 외부 연결 공식 문서</a></p>
<p>📎 <a href="https://aws.amazon.com/blogs/machine-learning/private-package-installation-in-amazon-sagemaker-running-in-internet-free-mode/" target="_blank">인터넷 없는 SageMaker에서 패키지 설치 AWS 블로그</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CodeCommit은 소스 코드 버전 관리 서비스이며 PyPI 같은 패키지 리포지토리와 직접 동기화할 수 없습니다. 각 패키지마다 별도 리포지토리를 생성하는 것은 관리 오버헤드가 매우 큽니다.</p>
<p><span class="mark-no">❌ B</span> — NAT 게이트웨이를 배치하면 SageMaker 인스턴스가 인터넷에 접근할 수 있게 되어 "인터넷 격리" 요구 사항을 위반합니다. 네트워크 ACL은 IP 주소 기반이므로 특정 서비스만 허용하는 데 한계가 있습니다.</p>
<p><span class="mark-no">❌ C</span> — NAT 인스턴스도 인터넷 접근을 허용하므로 격리 요구 사항을 위반합니다. SageMaker 노트북에 직접 방화벽 규칙을 구성하는 것도 관리 복잡성이 높습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'CodeArtifact는 PyPI 프록시 기능(public:pypi 외부 연결)과 VPC 엔드포인트를 통해 인터넷 격리를 유지하면서 Python 패키지 설치를 가능하게 하는 AWS 공식 권장 솔루션.' },
    ]
  },

  {
    n: 350,
    en: `A solutions architect works for a government agency that has strict disaster recovery requirements. All Amazon Elastic Block Store (Amazon EBS) snapshots are required to be saved in at least two additional AWS Regions. The agency also is required to maintain the lowest possible operational overhead.<br><br>Which solution meets these requirements?`,
    ko: `솔루션 설계자는 재해 복구 요구 사항이 엄격한 정부 기관에서 근무합니다. 모든 Amazon EBS 스냅샷은 2개 이상의 추가 AWS 리전에 저장되어야 합니다. 기관은 또한 가능한 가장 낮은 운영 오버헤드를 유지해야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Configure a policy in Amazon Data Lifecycle Manager (Amazon DLM) to run once daily to copy the EBS snapshots to the additional Regions.`, ko: `Amazon Data Lifecycle Manager(DLM)에서 매일 한 번 실행되어 EBS 스냅샷을 추가 리전에 복사하는 정책을 구성합니다.` },
      { k: 'B', en: `Use Amazon EventBridge to schedule an AWS Lambda function to copy the EBS snapshots to the additional Regions.`, ko: `Amazon EventBridge를 사용하여 AWS Lambda 함수를 예약하고 EBS 스냅샷을 추가 리전에 복사합니다.` },
      { k: 'C', en: `Set up AWS Backup to create the EBS snapshots. Configure Amazon S3 Cross-Region Replication to copy the EBS snapshots to the additional Regions.`, ko: `AWS Backup을 설정하여 EBS 스냅샷을 생성합니다. Amazon S3 교차 리전 복제를 구성하여 EBS 스냅샷을 추가 리전에 복사합니다.` },
      { k: 'D', en: `Schedule Amazon EC2 Image Builder to run once daily to create an AMI and copy the AMI to the additional Regions.`, ko: `Amazon EC2 Image Builder를 매일 한 번 실행하도록 예약하여 AMI를 생성하고 추가 리전에 복사합니다.` },
    ],
    answer: ['A'],
    vote: '86% A',
    explain: `<p><span class="mark-ok">✅ A — Amazon Data Lifecycle Manager (DLM) 정책</span></p>
<p>Amazon DLM은 EBS 스냅샷 및 EBS 지원 AMI의 생성, 유지, 삭제를 자동화하는 완전 관리형 서비스입니다. 2019년부터 <strong>리전 간 스냅샷 복사(Cross-Region Copy)</strong>를 정책에 포함할 수 있으며, 단일 정책에서 최대 3개 리전으로의 복사를 구성할 수 있습니다.</p>
<p>Lambda 코드 작성이나 EventBridge 규칙 조합 없이 AWS 콘솔에서 정책 설정만으로 모든 것이 자동화되므로 <strong>운영 오버헤드가 가장 낮습니다.</strong></p>
<p>📎 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html" target="_blank">Amazon DLM 공식 문서</a></p>
<p>📎 <a href="https://aws.amazon.com/about-aws/whats-new/2019/12/amazon-data-lifecycle-manager-enables-automation-snapshot-copy-via-policies/" target="_blank">DLM 리전 간 복사 기능 발표</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — EventBridge + Lambda 조합은 작동하지만, Lambda 함수 코드 작성·유지 관리·오류 처리 등 운영 오버헤드가 DLM보다 높습니다.</p>
<p><span class="mark-no">❌ C</span> — EBS 스냅샷은 S3에 저장되지만 사용자가 직접 접근할 수 없는 내부 버킷에 저장됩니다. Amazon S3 콘솔이나 S3 교차 리전 복제 기능으로는 EBS 스냅샷을 직접 제어할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 Image Builder는 AMI를 생성하고 배포하는 서비스로, 기존 EBS 볼륨의 스냅샷을 여러 리전에 복사하는 요구 사항과 맞지 않습니다. AMI와 EBS 스냅샷은 다른 개체입니다.</p>`,
    disc: [
      { ans: 'A (86%)', txt: 'DLM은 2019년부터 리전 간 스냅샷 자동 복사를 네이티브로 지원. 정책 구성만으로 운영되므로 오버헤드 최소화. EBS 스냅샷은 S3 교차 리전 복제 대상이 아니므로 C는 오답.' },
    ]
  },
];