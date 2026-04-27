window.QS_SET43 = [
{
  n: 421,
  en: `A global company uses Amazon S3 to host its product catalog website in the us-east-1 Region. The company must improve website performance for users across different geographical regions and must reduce the load on the origin server. The company must implement a highly available cross-Region solution that uses Amazon CloudFront.<br><br>Which solution will meet these requirements with the LEAST operational effort?`,
  ko: `한 글로벌 기업이 Amazon S3를 사용하여 미국 동부 1 리전에 제품 카탈로그 웹사이트를 호스팅하고 있습니다. 이 기업은 지리적으로 다른 지역에 있는 사용자들을 위해 웹사이트 성능을 개선하고 원본 서버의 부하를 줄여야 합니다. 이를 위해 Amazon CloudFront를 활용한 고가용성 크로스 리전 솔루션을 구현해야 합니다.<br><br>이러한 요구 사항을 충족하면서 운영 노력이 가장 적은 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Set up multiple CloudFront distributions. Point each distribution to another S3 bucket in a different Region. Use Amazon Route 53 latency-based routing to direct users to the nearest distribution. Enable S3 replication between the S3 bucket in us-east-1 and the S3 bucket in the different Region.`, ko:`여러 개의 CloudFront 배포를 설정합니다. 각 배포가 다른 리전의 S3 버킷을 가리키도록 설정합니다. Amazon Route 53의 지연 시간 기반 라우팅을 사용하여 사용자를 가장 가까운 배포로 연결합니다. us-east-1 리전의 S3 버킷과 다른 리전의 S3 버킷 간에 S3 복제를 활성화합니다.` },
    { k:'B', en:`Enable CloudFront with Origin Shield in us-east-1. Configure global edge locations. Set up cache behaviors with optimal TTLs for static content and dynamic content. Configure origin failover to an S3 bucket in a different Region. Enable S3 replication between the S3 bucket in us-east-1 and the S3 bucket in the different Region.`, ko:`us-east-1 리전에서 Origin Shield를 사용하여 CloudFront를 활성화합니다. 글로벌 에지 로케이션을 구성합니다. 정적 콘텐츠와 동적 콘텐츠에 대해 최적의 TTL을 설정하여 캐시 동작을 구성합니다. 다른 리전의 S3 버킷으로 오리진 페일오버를 구성합니다. us-east-1 리전의 S3 버킷과 다른 리전의 S3 버킷 간의 S3 복제를 활성화합니다.` },
    { k:'C', en:`Enable CloudFront with Origin Shield in us-east-1. Configure Amazon ElastiCache clusters in multiple Regions to serve as a distributed caching layer between CloudFront and the S3 origin. Set up a replication script to synchronize the S3 bucket in us-east-1 to an S3 bucket in a different Region. Use Amazon EventBridge to schedule the script to run once a day.`, ko:`us-east-1 리전에서 Origin Shield를 사용하여 CloudFront를 활성화합니다. CloudFront와 S3 오리진 간의 분산 캐싱 계층 역할을 하도록 여러 리전에 Amazon ElastiCache 클러스터를 구성합니다. us-east-1 리전의 S3 버킷을 다른 리전의 S3 버킷과 동기화하는 복제 스크립트를 설정합니다. Amazon EventBridge를 사용하여 스크립트가 하루에 한 번 실행되도록 예약합니다.` },
    { k:'D', en:`Enable CloudFront with Origin Shield in the eu-west-1 Region. Configure Regional edge caches. Implement AWS Global Accelerator to route requests to the nearest Regional edge location. Enable S3 replication between the S3 bucket in us-east-1 and an S3 bucket in a different Region.`, ko:`eu-west-1 리전에서 Origin Shield를 사용하여 CloudFront를 활성화합니다. 리전 에지 캐시를 구성합니다. AWS Global Accelerator를 구현하여 요청을 가장 가까운 리전 에지 위치로 라우팅합니다. us-east-1 리전의 S3 버킷과 다른 리전의 S3 버킷 간에 S3 복제를 활성화합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p><strong>Origin Shield</strong>는 CloudFront와 오리진 사이의 추가 캐싱 계층으로 오리진 부하를 최소화합니다. 단일 CloudFront 배포로 글로벌 에지 로케이션을 통해 성능을 개선하고, 오리진 페일오버(S3 복제 포함)로 고가용성을 확보합니다. 여러 배포나 별도 라우팅 설정 없이 단일 구성으로 모든 요건을 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 여러 CloudFront 배포 + Route 53 라우팅은 관리 복잡성이 증가하며, CloudFront 자체가 이미 글로벌 에지 캐싱을 제공하므로 중복입니다.</p>
<p><span class="mark-no">❌ C</span> — ElastiCache는 S3 정적 콘텐츠 캐싱에 불필요하며, 하루 1회 복제 스크립트는 데이터 최신성을 보장하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — Origin Shield는 오리진(us-east-1)과 가장 가까운 리전에 배치해야 효과적입니다. eu-west-1 설정은 비효율적입니다.</p>`,
  disc: []
},
{
  n: 422,
  en: `A company is using AWS CodeDeploy to deploy applications to a fleet of Amazon EC2 instances. During a recent deployment, several EC2 instances failed to update successfully.<br><br>A DevOps engineer must investigate the root cause of the failures and must determine which specific deployment lifecycle events encountered errors.<br><br>What is the MOST operationally efficient way to access and analyze the detailed deployment logs for troubleshooting?`,
  ko: `한 회사가 AWS CodeDeploy를 사용하여 Amazon EC2 인스턴스에 애플리케이션을 배포하고 있습니다. 최근 배포 과정에서 여러 EC2 인스턴스가 업데이트에 실패했습니다.<br><br>DevOps 엔지니어는 실패 원인을 조사하고 오류가 발생한 특정 배포 라이프사이클 이벤트를 파악해야 합니다.<br><br>문제 해결을 위해 상세 배포 로그에 접근하고 분석하는 가장 효율적인 방법은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use SSH to connect to each EC2 instance that failed to update successfully. Read the logs from the CodeDeploy agent.`, ko:`SSH를 사용하여 업데이트에 실패한 각 EC2 인스턴스에 연결합니다. CodeDeploy 에이전트에서 로그를 확인합니다.` },
    { k:'B', en:`Use AWS Systems Manager Session Manager to connect to each EC2 instance that failed to update successfully. Read the logs from the CodeDeploy agent.`, ko:`AWS Systems Manager 세션 관리자를 사용하여 업데이트에 실패한 각 EC2 인스턴스에 연결합니다. CodeDeploy 에이전트에서 로그를 확인합니다.` },
    { k:'C', en:`Create an Amazon S3 bucket to store CodeDeploy logs. Update the appspec.yml file to copy logs to the S3 bucket. Query the S3 bucket by using Amazon Athena.`, ko:`CodeDeploy 로그를 저장할 Amazon S3 버킷을 생성합니다. appspec.yml 파일을 수정하여 로그를 S3 버킷으로 복사하도록 합니다. Amazon Athena를 사용하여 S3 버킷을 조회합니다.` },
    { k:'D', en:`Send CodeDeploy agent logs to Amazon CloudWatch Logs by using the CloudWatch agent. Analyze the logs by using CloudWatch Logs Insights.`, ko:`CloudWatch 에이전트를 사용하여 CodeDeploy 에이전트 로그를 Amazon CloudWatch Logs로 전송합니다. CloudWatch Logs Insights를 사용하여 로그를 분석합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>CloudWatch 에이전트로 CodeDeploy 에이전트 로그를 CloudWatch Logs로 중앙 수집하면, 여러 인스턴스의 로그를 CloudWatch Logs Insights에서 단일 쿼리로 동시에 분석할 수 있습니다. 인스턴스별 접속 없이 배포 라이프사이클 이벤트 오류를 신속하게 파악하는 가장 효율적인 방법입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A/B</span> — 인스턴스별 개별 접속은 인스턴스가 많을수록 시간이 오래 걸리며 운영 효율이 낮습니다.</p>
<p><span class="mark-no">❌ C</span> — appspec.yml 수정 후 S3+Athena 구성은 사전 설정이 필요하며 이미 실패한 배포에는 소급 적용이 어렵습니다.</p>`,
  disc: []
},
{
  n: 423,
  en: `A company built its serverless infrastructure on AWS. The infrastructure consists of an Amazon API Gateway REST API, multiple AWS Lambda functions, and Amazon EventBridge.<br><br>The company wants to be aware of any new supply chain attacks that the company's CI/CD pipelines do not catch. The company needs a solution to detect malicious activity in the deployed application.<br><br>Which solution meets these requirements?`,
  ko: `한 회사가 AWS에 서버리스 인프라를 구축했습니다. 이 인프라는 Amazon API Gateway REST API, 여러 AWS Lambda 함수, 그리고 Amazon EventBridge로 구성됩니다.<br><br>이 회사는 CI/CD 파이프라인에서 감지하지 못하는 새로운 공급망 공격을 파악하고자 합니다. 배포된 애플리케이션에서 악성 활동을 탐지할 수 있는 솔루션이 필요합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Enable AWS WAF for the API Gateway REST API. Configure an AWS WAF ACL. Add the known bad inputs managed rule group.`, ko:`API Gateway REST API에 대해 AWS WAF를 활성화합니다. AWS WAF ACL을 구성합니다. 알려진 잘못된 입력 관리형 규칙 그룹을 추가합니다.` },
    { k:'B', en:`Enable Amazon GuardDuty. Enable Lambda Protection. Use EventBridge for event notifications.`, ko:`Amazon GuardDuty를 활성화합니다. Lambda Protection을 활성화합니다. 이벤트 알림을 위해 EventBridge를 사용합니다.` },
    { k:'C', en:`Deploy AWS CloudFormation Guard in the CI/CD pipelines. Write rules to catch the supply chain attacks.`, ko:`CI/CD 파이프라인에 AWS CloudFormation Guard를 배포합니다. 공급망 공격을 탐지하는 규칙을 작성합니다.` },
    { k:'D', en:`Create a firewall in AWS Network Firewall. Configure a policy. Add the managed rule for the Emerging Threats rule group.`, ko:`AWS 네트워크 방화벽에서 방화벽을 생성합니다. 정책을 구성합니다. 신흥 위협 규칙 그룹에 대한 관리형 규칙을 추가합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>Amazon GuardDuty의 <strong>Lambda Protection</strong>은 Lambda 함수 실행 시 런타임 동작을 모니터링하여 공급망 공격으로 인한 악성 코드 실행, 의심스러운 네트워크 통신 등을 실시간으로 탐지합니다. EventBridge를 통해 탐지 결과를 즉시 알림으로 전송합니다. CI/CD 파이프라인을 우회한 배포 후 공격도 감지 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — AWS WAF는 웹 요청 필터링(입력 검증)용으로, 배포된 Lambda 코드 내 악성 활동은 탐지하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — CloudFormation Guard는 IaC 템플릿 정적 분석 도구로 런타임 공격 탐지에 부적합합니다.</p>
<p><span class="mark-no">❌ D</span> — Network Firewall은 VPC 트래픽 기반 방화벽으로, 서버리스 Lambda 함수의 런타임 동작 탐지에는 적합하지 않습니다.</p>`,
  disc: []
},
{
  n: 424,
  en: `A company has a stateless web application that is deployed on Amazon EC2 instances. The EC2 instances are in a target group behind an Application Load Balancer (ALB). Amazon Route 53 manages the application domain.<br><br>The company updates the application UI and develops a beta version of the application. The company wants to test the beta version on 10% of its traffic.<br><br>Which solution will meet these requirements with the LEAST number of configuration changes?`,
  ko: `한 회사가 Amazon EC2 인스턴스에 배포된 상태 비저장 웹 애플리케이션을 보유하고 있습니다. 해당 EC2 인스턴스는 애플리케이션 로드 밸런서(ALB) 뒤의 타겟 그룹에 속해 있습니다. Amazon Route 53이 애플리케이션 도메인을 관리합니다.<br><br>회사는 애플리케이션 UI를 업데이트하고 베타 버전을 개발했습니다. 회사는 전체 트래픽의 10%를 대상으로 베타 버전을 테스트하고자 합니다.<br><br>이러한 요구 사항을 충족하면서 구성 변경 횟수를 최소화할 수 있는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Deploy the beta version to new EC2 instances in a new target group. Associate the new target group with a new ALB. Update the existing Route 53 record to use a weighted routing policy. Add a new Route 53 record that points to the new ALB with the same routing policy. Assign a weight of 90 to the existing record. Assign a weight of 10 to the new record.`, ko:`베타 버전을 새 대상 그룹의 새 EC2 인스턴스에 배포합니다. 새 대상 그룹을 새 ALB와 연결합니다. 기존 Route 53 레코드를 가중치 기반 라우팅 정책을 사용하도록 업데이트합니다. 동일한 라우팅 정책을 사용하여 새 ALB를 가리키는 새 Route 53 레코드를 추가합니다. 기존 레코드에 가중치 90을 할당하고, 새 레코드에 가중치 10을 할당합니다.` },
    { k:'B', en:`Deploy the beta version to new EC2 instances in a new target group. Associate the new target group with the same ALB listener rule. Assign a weight of 90 to the existing target group. Assign a weight of 10 to the new target group.`, ko:`새 대상 그룹의 새 EC2 인스턴스에 베타 버전을 배포합니다. 새 대상 그룹을 동일한 ALB 리스너 규칙에 연결합니다. 기존 대상 그룹에는 가중치 90을, 새 대상 그룹에는 가중치 10을 할당합니다.` },
    { k:'C', en:`Refactor the application to implement a feature flag for the beta version by using AWS AppConfig. Use the feature flag to enable the beta version for 10% of the EC2 instances.`, ko:`AWS AppConfig를 사용하여 베타 버전용 기능 플래그를 구현하도록 애플리케이션을 리팩토링합니다. 해당 기능 플래그를 사용하여 EC2 인스턴스의 10%에 대해 베타 버전을 활성화합니다.` },
    { k:'D', en:`Containerize and deploy the application on Amazon Elastic Container Service (Amazon ECS). Use AWS CodeDeploy to deploy the beta version by using the <code>CodeDeployDefault.ECSCanary10Percent15Minutes</code> deployment configuration.`, ko:`애플리케이션을 컨테이너화하고 Amazon Elastic Container Service(Amazon ECS)에 배포합니다. AWS CodeDeploy를 사용하여 <code>CodeDeployDefault.ECSCanary10Percent15Minutes</code> 배포 구성을 이용해 베타 버전을 배포합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>ALB 리스너 규칙의 <strong>가중치 기반 대상 그룹(Weighted Target Groups)</strong> 기능을 사용하면 기존 ALB에 새 대상 그룹만 추가하고 가중치(90/10)를 설정하면 됩니다. 새 ALB나 Route 53 변경 없이 최소 구성 변경으로 카나리 배포가 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 새 ALB 생성 + Route 53 가중치 라우팅 변경은 불필요한 인프라 추가와 구성 변경이 많습니다.</p>
<p><span class="mark-no">❌ C</span> — AppConfig 기능 플래그 구현은 애플리케이션 코드 리팩토링이 필요하며 큰 변경입니다.</p>
<p><span class="mark-no">❌ D</span> — ECS 컨테이너화는 전면적인 아키텍처 변경을 요구합니다.</p>`,
  disc: []
},
{
  n: 425,
  en: `A company frequently creates Docker images of an application. The company stores the images in Amazon Elastic Container Registry (Amazon ECR). The company creates both tagged images and untagged images.<br><br>The company wants to implement a solution to automatically delete images that have not been updated for a long time and are not frequently used. The solution must retain at least a specified number of images.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `한 회사가 애플리케이션의 Docker 이미지를 자주 생성합니다. 이 회사는 생성된 이미지를 Amazon Elastic Container Registry(Amazon ECR)에 저장합니다. 태그가 지정된 이미지와 태그가 지정되지 않은 이미지를 모두 생성합니다.<br><br>이 회사는 오랫동안 업데이트되지 않았거나 사용 빈도가 낮은 이미지를 자동으로 삭제하는 솔루션을 구현하고자 합니다. 단, 최소한 지정된 개수의 이미지는 유지해야 합니다.<br><br>이러한 요구 사항을 충족하면서 운영 오버헤드를 최소화하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use Amazon S3 Lifecycle policies on the ECR repository to automatically delete images based on image age or the absence of tags on the image.`, ko:`ECR 저장소에서 Amazon S3 수명 주기 정책을 사용하여 이미지 생성 시점 또는 이미지에 태그가 없는 경우를 기준으로 이미지를 자동으로 삭제합니다.` },
    { k:'B', en:`Use Amazon ECR lifecycle policies to delete images based on age or the number of images that need to be retained in the repository.`, ko:`Amazon ECR 수명 주기 정책을 사용하여 이미지 생성 시점 또는 저장소에 보존해야 하는 이미지 수에 따라 이미지를 삭제합니다.` },
    { k:'C', en:`Configure an AWS Lambda function to run a schedule to delete images based on age or the number of images that need to be retained in the repository.`, ko:`AWS Lambda 함수를 구성하여 이미지 생성 시점 또는 저장소에 보존해야 하는 이미지 수에 따라 이미지를 삭제하는 스케줄을 실행합니다.` },
    { k:'D', en:`Use AWS Systems Manager to run a script by using the <code>aws:executeScript</code> action to automatically delete images based on image age or the absence of tags on the image.`, ko:`AWS Systems Manager를 사용하여 <code>aws:executeScript</code> 액션을 실행하여 이미지 생성 시점 또는 이미지에 태그가 없는 경우를 기준으로 이미지를 자동으로 삭제하는 스크립트를 실행합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>Amazon ECR 수명 주기 정책은 이미지 개수(<code>countType: imageCountMoreThan</code>) 또는 이미지 생성일(<code>countType: sinceImagePushed</code>)을 기준으로 태그된/태그 없는 이미지를 자동 삭제하는 완전 관리형 기능입니다. 별도 Lambda나 스크립트 없이 ECR 콘솔/CLI에서 정책만 정의하면 됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — ECR은 S3 수명 주기 정책을 사용하지 않습니다. ECR 전용 수명 주기 정책이 있습니다.</p>
<p><span class="mark-no">❌ C</span> — Lambda 함수 구현/유지보수는 ECR 수명 주기 정책 대비 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ D</span> — Systems Manager 스크립트 실행도 불필요한 추가 구성이 필요합니다.</p>`,
  disc: []
},
{
  n: 426,
  en: `A company is developing a web application that runs on Amazon EC2 Linux instances. The application requires monitoring of custom performance metrics. The company must collect metrics for API response times and database query latency across multiple instances.<br><br>Which solution will generate the custom metrics with the LEAST operational overhead?`,
  ko: `한 회사가 Amazon EC2 Linux 인스턴스에서 실행되는 웹 애플리케이션을 개발 중입니다. 이 애플리케이션은 사용자 지정 성능 지표 모니터링이 필요합니다. 회사는 여러 인스턴스에 걸쳐 API 응답 시간과 데이터베이스 쿼리 지연 시간에 대한 지표를 수집해야 합니다.<br><br>어떤 솔루션이 운영 오버헤드를 최소화하면서 사용자 지정 지표를 생성할 수 있을까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Install the Amazon CloudWatch agent on the instances. Configure the agent to collect the custom metrics. Instrument the application to send the metrics to the agent.`, ko:`인스턴스에 Amazon CloudWatch 에이전트를 설치합니다. 에이전트가 사용자 지정 메트릭을 수집하도록 구성합니다. 애플리케이션에 계측 기능을 추가하여 메트릭을 에이전트로 전송하도록 합니다.` },
    { k:'B', en:`Use Amazon Managed Service for Prometheus to scrape the custom metrics from the application. Use the Amazon CloudWatch agent to forward the metrics to CloudWatch.`, ko:`Amazon Managed Service for Prometheus를 사용하여 애플리케이션에서 사용자 지정 메트릭을 수집합니다. Amazon CloudWatch 에이전트를 사용하여 해당 메트릭을 CloudWatch로 전달합니다.` },
    { k:'C', en:`Create a custom AWS Lambda function that polls the application endpoints and database at regular intervals. Program the Lambda function to calculate the custom metrics and to send the metrics to Amazon CloudWatch by using PutMetricData API calls.`, ko:`애플리케이션 엔드포인트와 데이터베이스를 정기적으로 폴링하는 사용자 지정 AWS Lambda 함수를 생성합니다. Lambda 함수가 사용자 지정 메트릭을 계산하고 PutMetricData API 호출을 사용하여 해당 메트릭을 Amazon CloudWatch로 전송하도록 프로그래밍합니다.` },
    { k:'D', en:`Implement custom logging in the application code to record the custom metrics. Use Amazon CloudWatch Logs Insights to extract and analyze the metrics.`, ko:`사용자 지정 메트릭을 기록하기 위해 애플리케이션 코드에 사용자 지정 로깅을 구현합니다. Amazon CloudWatch Logs Insights를 사용하여 메트릭을 추출하고 분석합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>CloudWatch 에이전트는 EC2 인스턴스에 설치한 후 <strong>StatsD</strong> 또는 <strong>collectd</strong> 프로토콜을 통해 애플리케이션에서 전송한 사용자 지정 지표(API 응답 시간, DB 쿼리 지연 시간)를 수집하고 CloudWatch로 전송합니다. Systems Manager로 여러 인스턴스에 일괄 배포/구성 가능하여 운영 오버헤드가 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — Prometheus는 컨테이너/쿠버네티스 환경에 더 적합하며, EC2에서의 추가 구성이 A보다 복잡합니다.</p>
<p><span class="mark-no">❌ C</span> — Lambda 폴링 방식은 실시간성이 낮고, 애플리케이션 내부 지표 수집에 한계가 있습니다.</p>
<p><span class="mark-no">❌ D</span> — 로그 기반 지표 추출은 Logs Insights 쿼리 비용이 발생하고 실시간 알람 설정이 어렵습니다.</p>`,
  disc: []
},
{
  n: 427,
  en: `A company uses AWS Lambda functions in the primary operating AWS Region of its AWS account. The company manually created the Lambda functions.<br><br>The company needs to use a Python-based AWS Cloud Development Kit (AWS CDK) application to manage the Lambda functions.<br><br>Which solution meets these requirements with the LEAST implementation effort?`,
  ko: `한 회사가 AWS 계정의 기본 운영 리전에서 AWS Lambda 함수를 사용하고 있습니다. 이 회사는 Lambda 함수를 수동으로 생성했습니다.<br><br>이제 이 Lambda 함수를 관리하기 위해 Python 기반 AWS 클라우드 개발 키트(AWS CDK) 애플리케이션을 사용해야 합니다.<br><br>이러한 요구 사항을 충족하면서 구현 노력이 가장 적은 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Start a partial scan by using the AWS CloudFormation infrastructure as code (IaC) generator. Filter by the Lambda resource type. Create an AWS CDK application from the scanned resources. Download the AWS CDK application. For each Lambda function, set the <code>from_asset</code> parameter for the Lambda handler code object.`, ko:`AWS CloudFormation IaC(Infrastructure as Code) 생성기를 사용하여 부분 스캔을 시작합니다. Lambda 리소스 유형으로 필터링합니다. 스캔된 리소스에서 AWS CDK 애플리케이션을 생성합니다. AWS CDK 애플리케이션을 다운로드합니다. 각 Lambda 함수에 대해 Lambda 핸들러 코드 객체의 <code>from_asset</code> 매개변수를 설정합니다.` },
    { k:'B', en:`Start a partial scan by using the AWS CloudFormation IaC generator. Filter by the Lambda resource type. Create a CloudFormation template from the scanned resources. Download the CloudFormation template. For each Lambda function, replace the <code>Code/S3Bucket</code> property and the <code>Code/S3Key</code> property with the <code>Code/ZipFile</code> property. Convert the CloudFormation template to an AWS CDK application.`, ko:`AWS CloudFormation IaC(인프라 코드) 생성기를 사용하여 부분 스캔을 시작합니다. Lambda 리소스 유형으로 필터링합니다. 스캔된 리소스에서 CloudFormation 템플릿을 생성합니다. CloudFormation 템플릿을 다운로드합니다. 각 Lambda 함수에 대해 <code>Code/S3Bucket</code> 속성과 <code>Code/S3Key</code> 속성을 <code>Code/ZipFile</code> 속성으로 바꿉니다. CloudFormation 템플릿을 AWS CDK 애플리케이션으로 변환합니다.` },
    { k:'C', en:`Start a partial scan by using the AWS CloudFormation IaC generator. Filter by the Lambda resource type. Create a CloudFormation template from the scanned resources. Download the CloudFormation template. For each Lambda function, replace the <code>Code/S3Bucket</code> property and the <code>Code/S3Key</code> property with the <code>Code/ImageUri</code> property. Convert the CloudFormation template to an AWS CDK application.`, ko:`AWS CloudFormation IaC(Infrastructure as Code) 생성기를 사용하여 부분 스캔을 시작합니다. Lambda 리소스 유형으로 필터링합니다. 스캔된 리소스에서 CloudFormation 템플릿을 생성합니다. CloudFormation 템플릿을 다운로드합니다. 각 Lambda 함수에 대해 <code>Code/S3Bucket</code> 속성과 <code>Code/S3Key</code> 속성을 <code>Code/ImageUri</code> 속성으로 바꿉니다. CloudFormation 템플릿을 AWS CDK 애플리케이션으로 변환합니다.` },
    { k:'D', en:`Create a resource inventory by using AWS Config. Filter by the Lambda resource type. Export the inventory to a .csv file. Write an AWS CDK application that references the Lambda functions from the .csv file. For each Lambda function, set the <code>from_asset</code> parameter for the Lambda handler code object.`, ko:`AWS Config를 사용하여 리소스 인벤토리를 생성합니다. Lambda 리소스 유형으로 필터링합니다. 인벤토리를 .csv 파일로 내보냅니다. .csv 파일의 Lambda 함수를 참조하는 AWS CDK 애플리케이션을 작성합니다. 각 Lambda 함수에 대해 Lambda 핸들러 코드 객체의 <code>from_asset</code> 매개변수를 설정합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>AWS CloudFormation IaC 생성기는 기존 AWS 리소스를 스캔하여 직접 <strong>CDK 애플리케이션</strong>을 생성하는 기능을 제공합니다. Lambda 리소스 유형으로 필터링 후 CDK 앱을 생성하면 코드 스캐폴딩이 자동화됩니다. <code>from_asset</code>으로 로컬 코드를 참조하도록 설정하면 구현이 완료됩니다. CloudFormation 템플릿을 거치는 단계를 생략하여 구현 노력이 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B/C</span> — CloudFormation 템플릿을 생성한 후 다시 CDK로 변환하는 단계가 추가되어 구현 노력이 증가합니다. <code>ZipFile</code>은 인라인 코드(4KB 제한)용이며, <code>ImageUri</code>는 컨테이너 이미지용으로 일반 Lambda에 부적합합니다.</p>
<p><span class="mark-no">❌ D</span> — Config CSV 기반 CDK 작성은 자동화 없이 수동 코딩이 필요합니다.</p>`,
  disc: []
},
{
  n: 428,
  en: `A company uses Amazon Elastic Kubernetes Services (Amazon EKS) to host containerized applications that are available in Amazon Elastic Container Registry (Amazon ECR).<br><br>The company currently launches EKS clusters in the company's development environment by using the AWS CLI <code>aws eks create-cluster</code> command. The company uses the <code>aws eks create-addon</code> command to install required add-ons. All installed add-ons are currently version compatible with the version of Kubernetes that the company uses. All clusters exclusively use managed node groups for compute capacity.<br><br>Some of the EKS clusters require a version upgrade. A DevOps engineer must ensure that upgrades continuously occur within the AWS standard support schedule.<br><br>Which solution will meet this requirement with the LEAST operational overhead?`,
  ko: `한 회사가 Amazon Elastic Kubernetes Services(Amazon EKS)를 사용하여 Amazon Elastic Container Registry(Amazon ECR)에서 사용 가능한 컨테이너화된 애플리케이션을 호스팅하고 있습니다.<br><br>현재 이 회사는 AWS CLI의 <code>aws eks create-cluster</code> 명령어를 사용하여 개발 환경에 EKS 클러스터를 생성하고 있습니다. 필요한 애드온은 <code>aws eks create-addon</code> 명령어를 사용하여 설치합니다. 설치된 모든 애드온은 현재 회사에서 사용하는 Kubernetes 버전과 호환됩니다. 모든 클러스터는 컴퓨팅 용량으로 관리형 노드 그룹만 사용합니다.<br><br>일부 EKS 클러스터는 버전 업그레이드가 필요합니다. DevOps 엔지니어는 AWS 표준 지원 일정에 따라 업그레이드가 지속적으로 이루어지도록 해야 합니다.<br><br>운영 오버헤드를 최소화하면서 이 요구 사항을 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Run the <code>aws eks update-cluster-version</code> command. Providing appropriate arguments such as cluster name and version number.`, ko:`<code>aws eks update-cluster-version</code> 명령을 실행합니다. 클러스터 이름과 버전 번호 등의 적절한 인수를 제공하십시오.` },
    { k:'B', en:`Enable EKS Auto Mode on all EKS clusters. Remove all existing managed node groups.`, ko:`모든 EKS 클러스터에서 EKS 자동 모드를 활성화합니다. 기존의 관리형 노드 그룹을 모두 제거합니다.` },
    { k:'C', en:`Run the <code>eksctl</code> command to upgrade the EKS clusters. Provide appropriate arguments such as cluster name and version number.`, ko:`<code>eksctl</code> 명령을 실행하여 EKS 클러스터를 업그레이드합니다. 클러스터 이름과 버전 번호 등의 적절한 인수를 제공하십시오.` },
    { k:'D', en:`Refactor the environment to create EKS clusters by using infrastructure as code (IaC). Upgrade the clusters by using code changes.`, ko:`인프라스트럭처 코드(IaC)를 사용하여 EKS 클러스터를 생성하도록 환경을 재구성합니다. 코드 변경을 통해 클러스터를 업그레이드합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>회사가 이미 AWS CLI를 사용하여 클러스터를 관리하고 있으므로, <code>aws eks update-cluster-version</code> 명령은 기존 워크플로와 일관성이 있으며 추가 도구 설치나 아키텍처 변경 없이 클러스터 버전을 업그레이드할 수 있습니다. 관리형 노드 그룹은 업그레이드 시 자동으로 노드를 롤링 업데이트합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — EKS Auto Mode는 노드 관리를 자동화하지만, 기존 관리형 노드 그룹을 모두 제거하는 것은 아키텍처 변경으로 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ C</span> — eksctl은 추가 도구 설치와 학습이 필요하며, 기존 AWS CLI 워크플로와 일관성이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — IaC로 전환하는 것은 장기적으로 좋지만, 현재 CLI 기반 환경에서 전환하는 데 상당한 구현 노력이 필요합니다.</p>`,
  disc: []
},
{
  n: 429,
  en: `A company produces builds for an open source project every day. The company hosts the open source project in a public code repository that the company supports. The company manually invokes a pipeline in AWS CodePipeline to build artifacts for the project. The company wants to make the build artifacts publicly available on a website that the company hosts in an Amazon S3 bucket.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `한 회사가 매일 오픈 소스 프로젝트의 빌드를 생성합니다. 이 회사는 자사가 지원하는 공개 코드 저장소에 오픈 소스 프로젝트를 호스팅하고 있습니다. 회사는 AWS CodePipeline에서 파이프라인을 수동으로 실행하여 프로젝트 빌드 아티팩트를 생성합니다. 회사는 생성된 빌드 아티팩트를 Amazon S3 버킷에 호스팅된 웹사이트에 공개적으로 게시하고자 합니다.<br><br>이러한 요구 사항을 충족하면서 운영 오버헤드를 최소화하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS CodeBuild project. Set the public repository as the source. Use a webhook to rebuild when the company pushes a code change. Configure the artifacts section of the project to use the S3 bucket as the destination. Set up an appropriate path to store build outputs in the bucket. Disable artifact encryption.`, ko:`AWS CodeBuild 프로젝트를 생성합니다. 소스 저장소로 공개 저장소를 설정합니다. 회사에서 코드 변경 사항을 푸시할 때 빌드를 다시 생성하도록 웹훅을 사용합니다. 프로젝트의 아티팩트 섹션에서 대상으로 S3 버킷을 사용하도록 구성합니다. 버킷에 빌드 결과물을 저장할 적절한 경로를 설정합니다. 아티팩트 암호화를 비활성화합니다.` },
    { k:'B', en:`Create an AWS CodeBuild project. Set the public repository as the source. Configure the artifacts section of the project to use the S3 bucket as the destination. Ensure that artifact encryption is enabled in the artifacts configuration. Configure an Amazon EventBridge rule to initiate the CodeBuild project on a daily schedule.`, ko:`AWS CodeBuild 프로젝트를 생성합니다. 소스로 공개 리포지토리를 설정합니다. 프로젝트의 아티팩트 섹션에서 대상으로 S3 버킷을 사용하도록 구성합니다. 아티팩트 구성에서 아티팩트 암호화가 활성화되어 있는지 확인합니다. Amazon EventBridge 규칙을 구성하여 CodeBuild 프로젝트를 매일 실행하도록 합니다.` },
    { k:'C', en:`Add a new stage to the end of the pipeline. Configure the stage to include an action to publish artifacts to the S3 bucket. Update the pipeline to run in response to pull requests to the public repository.`, ko:`파이프라인 끝에 새 단계를 추가합니다. 해당 단계에 S3 버킷에 아티팩트를 게시하는 작업을 포함하도록 구성합니다. 공개 저장소에 대한 풀 요청에 응답하여 파이프라인이 실행되도록 업데이트합니다.` },
    { k:'D', en:`Add a new stage to the end of the pipeline. Configure the stage to include an action to publish artifacts to the S3 bucket. Create an Amazon EventBridge rule to initiate the pipeline on a daily schedule.`, ko:`파이프라인 끝에 새 단계를 추가합니다. 해당 단계에 S3 버킷에 아티팩트를 게시하는 작업을 포함하도록 구성합니다. Amazon EventBridge 규칙을 생성하여 파이프라인을 매일 실행하도록 설정합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>공개 저장소와 CodeBuild를 웹훅으로 연결하면 코드 푸시 시 자동으로 빌드가 트리거됩니다. 아티팩트를 S3에 직접 저장하고 <strong>암호화를 비활성화</strong>하면 S3 정적 웹사이트에서 공개적으로 접근 가능합니다(암호화된 객체는 공개 웹사이트에서 직접 제공 불가). 기존 CodePipeline을 수정하지 않고 새 CodeBuild 프로젝트만 추가하므로 운영 오버헤드가 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 암호화 활성화 상태에서는 S3 정적 웹사이트에서 공개 접근이 불가합니다. 또한 EventBridge 일일 스케줄은 코드 변경 즉시 빌드가 불가합니다.</p>
<p><span class="mark-no">❌ C/D</span> — 기존 CodePipeline에 단계를 추가하는 방식은 파이프라인 구조 변경이 필요하며, 공개 저장소 트리거 설정이 복잡합니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'공개 S3 웹사이트 배포 시 암호화 비활성화 필수 — 웹훅 자동화 + CodeBuild 직접 S3 출력이 최소 오버헤드 정답입니다.' }]
}
];
