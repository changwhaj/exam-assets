window.QS_SET19 = [
{
  n: 181,
  en: `A company requires its internal business teams to launch resources through pre-approved AWS CloudFormation templates only. The security team requires automated monitoring when resources drift from their expected state.<br><br>Which strategy should be used to meet these requirements?`,
  ko: `한 회사에서 내부 사업팀이 사전 승인된 AWS CloudFormation 템플릿을 통해서만 리소스를 시작하도록 요구합니다. 보안팀은 리소스가 예상 상태에서 벗어나는 경우 자동화된 모니터링을 요구합니다.<br><br>이러한 요구 사항을 충족하기 위해 어떤 전략을 사용해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Allow users to deploy CloudFormation stacks using a CloudFormation service role only. Use CloudFormation drift detection to detect when resources have drifted from their expected state.`, ko:`사용자가 CloudFormation 서비스 역할만 사용하여 CloudFormation 스택을 배포하도록 허용합니다. CloudFormation 드리프트 감지를 사용하여 리소스가 예상 상태에서 벗어나는 경우를 감지합니다.` },
    { k:'B', en:`Allow users to deploy CloudFormation stacks using a CloudFormation service role only. Use AWS Config rules to detect when resources have drifted from their expected state.`, ko:`사용자가 CloudFormation 서비스 역할만 사용하여 CloudFormation 스택을 배포하도록 허용합니다. AWS Config 규칙을 사용하여 리소스가 예상 상태에서 벗어난 경우를 감지합니다.` },
    { k:'C', en:`Allow users to deploy CloudFormation stacks using AWS Service Catalog only. Enforce the use of a launch constraint. Use AWS Config rules to detect when resources have drifted from their expected state.`, ko:`사용자가 AWS Service Catalog만 사용하여 CloudFormation 스택을 배포하도록 허용합니다. 시작 제약 조건의 사용을 강제합니다. AWS Config 규칙을 사용하여 리소스가 예상 상태에서 벗어난 경우를 감지합니다.` },
    { k:'D', en:`Allow users to deploy CloudFormation stacks using AWS Service Catalog only. Enforce the use of a template constraint. Use Amazon EventBridge notifications to detect when resources have drifted from their expected state.`, ko:`사용자가 AWS Service Catalog만 사용하여 CloudFormation 스택을 배포하도록 허용합니다. 템플릿 제약 조건의 사용을 강제합니다. Amazon EventBridge 알림을 사용하여 리소스가 예상 상태에서 벗어나는 경우를 감지합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p><strong>AWS Service Catalog</strong>는 사전 승인된 CloudFormation 템플릿(제품)만 배포할 수 있도록 강제하는 가장 적합한 서비스입니다. 시작 제약 조건(Launch Constraint)으로 배포 권한을 제어합니다. <strong>AWS Config</strong>의 <code>cloudformation-stack-drift-detection-check</code> 관리형 규칙은 스택 드리프트를 자동으로 모니터링합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, B</span> — CloudFormation 서비스 역할만으로는 사전 승인된 템플릿만 사용하도록 강제할 수 없습니다.</p>
<p><span class="mark-no">❌ A</span> — CloudFormation 드리프트 감지는 수동 실행이 필요하며 자동 모니터링이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — EventBridge 알림만으로는 드리프트를 감지할 수 없습니다.</p>`,
  disc: [{ ans:'C (100%)', txt:'Service Catalog(사전 승인 템플릿 강제) + AWS Config(자동 드리프트 모니터링)의 조합.' }]
},
{
  n: 182,
  en: `A company has multiple development groups working in a single shared AWS account. The senior manager of the groups wants to be alerted via a third-party API call when the creation of resources approaches the service limits for the account.<br><br>Which solution will accomplish this with the LEAST amount of development effort?`,
  ko: `한 회사에는 단일 공유 AWS 계정에서 작업하는 여러 개발 그룹이 있습니다. 그룹의 상급 관리자는 리소스 생성이 계정의 서비스 한도에 도달하면 타사 API 호출을 통해 알림을 받고 싶어합니다.<br><br>최소한의 개발 노력으로 이를 달성하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon EventBridge rule that runs periodically and targets an AWS Lambda function. Within the Lambda function, evaluate the current state of the AWS environment and compare deployed resource values to resource limits on the account. Notify the senior manager if the account is approaching a service limit.`, ko:`주기적으로 실행되고 AWS Lambda 함수를 대상으로 하는 Amazon EventBridge 규칙을 생성합니다. Lambda 함수 내에서 AWS 환경의 현재 상태를 평가하고 배포된 리소스 값을 계정의 리소스 제한과 비교합니다. 계정이 서비스 한도에 접근하는 경우 상급 관리자에게 알립니다.` },
    { k:'B', en:`Deploy an AWS Lambda function that refreshes AWS Trusted Advisor checks, and configure an Amazon EventBridge rule to run the Lambda function periodically. Create another EventBridge rule with an event pattern matching Trusted Advisor events and a target Lambda function. In the target Lambda function, notify the senior manager.`, ko:`AWS Trusted Advisor 검사를 새로 고치는 AWS Lambda 함수를 배포하고 Lambda 함수를 주기적으로 실행하도록 Amazon EventBridge 규칙을 구성합니다. Trusted Advisor 이벤트와 대상 Lambda 함수가 일치하는 이벤트 패턴으로 다른 EventBridge 규칙을 생성합니다. 대상 Lambda 함수에서 상급 관리자에게 알립니다.` },
    { k:'C', en:`Deploy an AWS Lambda function that refreshes AWS Health Dashboard checks, and configure an Amazon EventBridge rule to run the Lambda function periodically. Create another EventBridge rule with an event pattern matching Health Dashboard events and a target Lambda function. In the target Lambda function, notify the senior manager.`, ko:`AWS Health Dashboard 검사를 새로 고치는 AWS Lambda 함수를 배포하고 Lambda 함수를 주기적으로 실행하도록 Amazon EventBridge 규칙을 구성합니다. Health Dashboard 이벤트와 대상 Lambda 함수가 일치하는 이벤트 패턴으로 다른 EventBridge 규칙을 생성합니다. 대상 Lambda 함수에서 상급 관리자에게 알립니다.` },
    { k:'D', en:`Add an AWS Config custom rule that runs periodically, checks the AWS service limit status, and streams notifications to an Amazon Simple Notification Service (Amazon SNS) topic. Deploy an AWS Lambda function that notifies the senior manager, and subscribe the Lambda function to the SNS topic.`, ko:`주기적으로 실행되고 AWS 서비스 한도 상태를 확인하고 Amazon Simple Notification Service(Amazon SNS) 토픽으로 알림을 스트리밍하는 AWS Config 사용자 지정 규칙을 추가합니다. 상급 관리자에게 알리는 AWS Lambda 함수를 배포하고 Lambda 함수를 SNS 토픽에 구독합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p><strong>AWS Trusted Advisor</strong>는 서비스 한도 모니터링 기능을 내장하고 있으며 현재 10개 서비스에 걸쳐 39개 한도를 추적합니다. Lambda로 Trusted Advisor 검사를 새로 고치고, EventBridge 규칙으로 Trusted Advisor 이벤트를 감지하여 타사 API를 호출하는 Lambda를 트리거하면 최소 개발 노력으로 요구사항을 충족할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 직접 API를 통해 서비스 한도를 비교하는 Lambda 함수를 작성하는 것은 개발 노력이 더 큽니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Health Dashboard는 서비스 상태 이벤트를 위한 것이며 서비스 한도 모니터링이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — Config 사용자 지정 규칙 개발은 Trusted Advisor를 활용하는 것보다 개발 노력이 큽니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'서비스 한도 = Trusted Advisor. 내장 기능 활용이 가장 적은 개발 노력.' }]
},
{
  n: 183,
  en: `A DevOps engineer is setting up a container-based architecture. The engineer has decided to use AWS CloudFormation to automatically provision an Amazon ECS cluster and an Amazon EC2 Auto Scaling group to launch the EC2 container instances. After successfully creating the CloudFormation stack, the engineer noticed that, even though the ECS cluster and the EC2 instances were created successfully and the stack finished the creation, the EC2 instances were associating with a different cluster.<br><br>How should the DevOps engineer update the CloudFormation template to resolve this issue?`,
  ko: `DevOps 엔지니어가 컨테이너 기반 아키텍처를 설정하고 있습니다. 엔지니어는 AWS CloudFormation을 사용하여 Amazon ECS 클러스터와 Amazon EC2 Auto Scaling 그룹을 자동으로 프로비저닝하여 EC2 컨테이너 인스턴스를 시작하기로 결정했습니다. CloudFormation 스택을 성공적으로 생성한 후, 엔지니어는 ECS 클러스터와 EC2 인스턴스가 성공적으로 생성되었고 스택이 생성을 완료했지만 EC2 인스턴스가 다른 클러스터와 연결되어 있다는 것을 알게 되었습니다.<br><br>DevOps 엔지니어는 이 문제를 해결하기 위해 CloudFormation 템플릿을 어떻게 업데이트해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Reference the EC2 instances in the AWS::ECS::Cluster resource and reference the ECS cluster in the AWS::ECS::Service resource.`, ko:`AWS::ECS::Cluster 리소스에서 EC2 인스턴스를 참조하고 AWS::ECS::Service 리소스에서 ECS 클러스터를 참조합니다.` },
    { k:'B', en:`Reference the ECS cluster in the AWS::AutoScaling::LaunchConfiguration resource of the UserData property.`, ko:`UserData 속성의 AWS::AutoScaling::LaunchConfiguration 리소스에서 ECS 클러스터를 참조합니다.` },
    { k:'C', en:`Reference the ECS cluster in the AWS::EC2::Instance resource of the UserData property.`, ko:`UserData 속성의 AWS::EC2::Instance 리소스에서 ECS 클러스터를 참조합니다.` },
    { k:'D', en:`Reference the ECS cluster in the AWS::CloudFormation::CustomResource resource to trigger an AWS Lambda function that registers the EC2 instances with the appropriate ECS cluster.`, ko:`AWS::CloudFormation::CustomResource 리소스에서 ECS 클러스터를 참조하여 EC2 인스턴스를 적절한 ECS 클러스터에 등록하는 AWS Lambda 함수를 트리거합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>EC2 컨테이너 인스턴스를 특정 ECS 클러스터에 연결하려면 <strong>Auto Scaling LaunchConfiguration의 UserData</strong>에 ECS 클러스터 이름을 지정해야 합니다. 구체적으로 <code>/etc/ecs/ecs.config</code> 파일에 <code>ECS_CLUSTER=클러스터이름</code>을 설정합니다. 이 설정이 없으면 인스턴스는 기본 클러스터에 연결됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — AWS::ECS::Cluster는 클러스터를 생성하지만 EC2를 클러스터에 연결하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Auto Scaling 그룹을 사용할 때는 LaunchConfiguration의 UserData를 사용해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda를 사용하는 것은 불필요한 복잡성을 추가합니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'ECS 클러스터 연결: LaunchConfiguration UserData에 ECS_CLUSTER 환경 변수 설정. AWS 공식 예제에 명시됨.' }]
},
{
  n: 184,
  en: `A DevOps engineer is implementing governance controls for a company that requires its infrastructure to be housed within the United States. The engineer must restrict which AWS Regions can be used, and ensure an alert is sent as soon as possible if any activity outside the governance policy takes place. The controls should be automatically enabled on any new Region outside the United States (US).<br><br>Which combination of actions will meet these requirements? (Choose two.)`,
  ko: `DevOps 엔지니어가 인프라를 미국 내에 두어야 하는 회사에 대한 거버넌스 제어를 구현하고 있습니다. 엔지니어는 사용할 수 있는 AWS 리전을 제한해야 하며 거버넌스 정책 외부의 활동이 발생하면 가능한 한 빨리 알림을 보내야 합니다. 미국(US) 외부의 모든 새 리전에서 제어를 자동으로 활성화해야 합니다.<br><br>이러한 요구 사항을 충족하는 작업의 조합은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Create an AWS Organizations SCP that denies access to all non-global services in non-US Regions. Attach the policy to the root of the organization.`, ko:`미국 외 리전의 모든 비 글로벌 서비스에 대한 액세스를 거부하는 AWS Organizations SCP를 생성합니다. 정책을 조직의 루트에 연결합니다.` },
    { k:'B', en:`Configure AWS CloudTrail to send logs to Amazon CloudWatch Logs and enable it for all Regions. Use a CloudWatch Logs metric filter to send an alert on any service activity in non-US Regions.`, ko:`AWS CloudTrail을 구성하여 Amazon CloudWatch Logs에 로그를 보내고 모든 리전에 대해 활성화합니다. CloudWatch Logs 메트릭 필터를 사용하여 미국 이외 리전의 모든 서비스 활동에 대한 알림을 보냅니다.` },
    { k:'C', en:`Use an AWS Lambda function that checks for AWS service activity and deploy it to all Regions. Write an Amazon EventBridge rule that runs the Lambda function every hour, sending an alert if activity is found in a non-US Region.`, ko:`AWS 서비스 활동을 확인하는 AWS Lambda 함수를 사용하여 모든 리전에 배포합니다. 매 시간 Lambda 함수를 실행하고 미국 이외 리전에서 활동이 발견되면 알림을 보내는 Amazon EventBridge 규칙을 작성합니다.` },
    { k:'D', en:`Use an AWS Lambda function to query Amazon Inspector to look for service activity in non-US Regions and send alerts if any activity is found.`, ko:`AWS Lambda 함수를 사용하여 Amazon Inspector에 쿼리를 보내 미국 이외 리전의 서비스 활동을 확인하고 활동이 발견되면 알림을 보냅니다.` },
    { k:'E', en:`Write an SCP using the aws:RequestedRegion condition key limiting access to US Regions. Apply the policy to all users, groups, and roles.`, ko:`aws:RequestedRegion 조건 키를 사용하여 미국 리전으로 액세스를 제한하는 SCP를 작성합니다. 모든 사용자, 그룹 및 역할에 정책을 적용합니다.` },
  ],
  answer: ['A','B'],
  vote: '91% AB',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>조직 루트에 SCP를 연결하면 새로 추가되는 리전에도 자동으로 적용됩니다. 미국 외 리전의 비 글로벌 서비스를 거부하는 SCP로 리전을 제한합니다.</p>
<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>CloudTrail을 모든 리전에 활성화하고 CloudWatch Logs 메트릭 필터로 미국 외 리전 활동을 탐지하면 실시간 알림이 가능합니다. 새 리전에서도 자동으로 작동합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ C</span> — 매 시간 실행으로는 "가능한 한 빨리" 알림 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon Inspector는 취약점 스캐닝용이며 서비스 활동 모니터링이 아닙니다.</p>
<p><span class="mark-no">❌ E</span> — SCP는 사용자/그룹/역할이 아닌 OU나 계정에 연결합니다.</p>`,
  disc: [{ ans:'AB (91%)', txt:'SCP 루트 연결(A)로 미국 외 리전 차단 + CloudTrail + CloudWatch 메트릭 필터(B)로 실시간 알림.' }]
},
{
  n: 185,
  en: `A company sells products through an ecommerce web application. The company wants a dashboard that shows a pie chart of product transaction details. The company wants to integrate the dashboard with the company's existing Amazon CloudWatch dashboards.<br><br>Which solution will meet these requirements with the MOST operational efficiency?`,
  ko: `한 회사가 전자상거래 웹 애플리케이션을 통해 제품을 판매합니다. 회사는 제품 거래 세부 정보의 파이 차트를 보여주는 대시보드를 원합니다. 회사는 대시보드를 회사의 기존 Amazon CloudWatch 대시보드와 통합하려고 합니다.<br><br>가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Update the ecommerce application to emit a JSON object to a CloudWatch log group for each processed transaction. Use CloudWatch Logs Insights to query the log group and to visualize the results in a pie chart format. Attach the results to the desired CloudWatch dashboard.`, ko:`처리된 각 거래에 대해 CloudWatch 로그 그룹에 JSON 객체를 방출하도록 전자상거래 애플리케이션을 업데이트합니다. CloudWatch Logs Insights를 사용하여 로그 그룹을 쿼리하고 파이 차트 형식으로 결과를 시각화합니다. 결과를 원하는 CloudWatch 대시보드에 연결합니다.` },
    { k:'B', en:`Update the ecommerce application to emit a JSON object to an Amazon S3 bucket for each processed transaction. Use Amazon Athena to query the S3 bucket and to visualize the results in a pie chart format. Export the results from Athena. Attach the results to the desired CloudWatch dashboard.`, ko:`처리된 각 거래에 대해 Amazon S3 버킷에 JSON 객체를 내보내도록 전자상거래 애플리케이션을 업데이트합니다. Amazon Athena를 사용하여 S3 버킷을 쿼리하고 파이 차트 형식으로 결과를 시각화합니다. Athena에서 결과를 내보냅니다. 결과를 원하는 CloudWatch 대시보드에 첨부합니다.` },
    { k:'C', en:`Update the ecommerce application to use AWS X-Ray for instrumentation. Create a new X-Ray subsegment. Add an annotation for each processed transaction. Use X-Ray traces to query the data and to visualize the results in a pie chart format. Attach the results to the desired CloudWatch dashboard.`, ko:`AWS X-Ray를 계측에 사용하도록 전자상거래 애플리케이션을 업데이트합니다. 새로운 X-Ray 하위 세그먼트를 생성합니다. 처리된 각 거래에 대한 주석을 추가합니다. X-Ray 추적을 사용하여 데이터를 쿼리하고 파이 차트 형식으로 결과를 시각화합니다. 결과를 원하는 CloudWatch 대시보드에 연결합니다.` },
    { k:'D', en:`Update the ecommerce application to emit a JSON object to a CloudWatch log group for each processed transaction. Create an AWS Lambda function to aggregate and write the results to Amazon DynamoDB. Create a Lambda subscription filter for the log file. Attach the results to the desired CloudWatch dashboard.`, ko:`처리된 각 거래에 대해 CloudWatch 로그 그룹에 JSON 객체를 내보내도록 전자상거래 애플리케이션을 업데이트합니다. 결과를 집계하여 Amazon DynamoDB에 쓰는 AWS Lambda 함수를 생성합니다. 로그 파일에 대한 Lambda 구독 필터를 생성합니다. 결과를 원하는 CloudWatch 대시보드에 첨부합니다.` },
  ],
  answer: ['A'],
  vote: '92% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p><strong>CloudWatch Logs Insights</strong>는 로그를 쿼리하고 파이 차트를 포함한 다양한 시각화를 지원합니다. 쿼리 결과를 CloudWatch 대시보드에 직접 위젯으로 추가할 수 있어 기존 대시보드와의 통합이 가장 쉽습니다. 추가 서비스 없이 CloudWatch 생태계 내에서 완결됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — S3 + Athena는 CloudWatch 대시보드와의 통합이 복잡하고 추가 서비스가 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — X-Ray는 분산 추적 도구로 장기 비즈니스 모니터링에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda + DynamoDB는 불필요한 복잡성을 추가합니다. CloudWatch 대시보드에 DynamoDB를 직접 연결할 수 없습니다.</p>`,
  disc: [{ ans:'A (92%)', txt:'CloudWatch Logs Insights로 로그 쿼리 + 파이 차트 시각화 + CloudWatch 대시보드 위젯으로 추가. 단일 서비스 내에서 완결.' }]
},
{
  n: 186,
  en: `A company is launching an application. The application must use only approved AWS services. The account that runs the application was created less than 1 year ago and is assigned to an AWS Organizations OU.<br><br>The company needs to create a new Organizations account structure. The account structure must have an appropriate SCP that supports the use of only services that are currently active in the AWS account. The company will use AWS Identity and Access Management (IAM) Access Analyzer in the solution.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 애플리케이션을 시작합니다. 애플리케이션은 승인된 AWS 서비스만 사용해야 합니다. 애플리케이션을 실행하는 계정은 1년 이내에 생성되었으며 AWS Organizations OU에 할당되었습니다.<br><br>회사는 새 Organizations 계정 구조를 생성해야 합니다. 계정 구조에는 현재 AWS 계정에서 활성화된 서비스만 사용할 수 있는 적절한 SCP가 있어야 합니다. 회사는 솔루션에서 AWS Identity and Access Management(IAM) Access Analyzer를 사용합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an SCP that allows the services that IAM Access Analyzer identifies. Create an OU for the account. Move the account into the new OU. Attach the new SCP to the new OU. Detach the default FullAWSAccess SCP from the new OU.`, ko:`IAM Access Analyzer가 식별하는 서비스를 허용하는 SCP를 생성합니다. 계정에 대한 OU를 생성합니다. 계정을 새 OU로 이동합니다. 새 SCP를 새 OU에 연결합니다. 새 OU에서 기본 FullAWSAccess SCP를 분리합니다.` },
    { k:'B', en:`Create an SCP that denies the services that IAM Access Analyzer identifies. Create an OU for the account. Move the account into the new OU. Attach the new SCP to the new OU.`, ko:`IAM Access Analyzer가 식별하는 서비스를 거부하는 SCP를 생성합니다. 계정에 대한 OU를 생성합니다. 계정을 새 OU로 이동합니다. 새 SCP를 새 OU에 연결합니다.` },
    { k:'C', en:`Create an SCP that allows the services that IAM Access Analyzer identifies. Attach the new SCP to the organization's root.`, ko:`IAM Access Analyzer가 식별하는 서비스를 허용하는 SCP를 생성합니다. 새 SCP를 조직의 루트에 연결합니다.` },
    { k:'D', en:`Create an SCP that allows the services that IAM Access Analyzer identifies. Create an OU for the account. Move the account into the new OU. Attach the new SCP to the management account. Detach the default FullAWSAccess SCP from the new OU.`, ko:`IAM Access Analyzer가 식별하는 서비스를 허용하는 SCP를 생성합니다. 계정에 대한 OU를 생성합니다. 계정을 새 OU로 이동합니다. 새 SCP를 관리 계정에 연결합니다. 새 OU에서 기본 FullAWSAccess SCP를 분리합니다.` },
  ],
  answer: ['A'],
  vote: '88% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>IAM Access Analyzer는 계정에서 실제로 사용된 서비스를 식별합니다. 이를 기반으로 <strong>허용 SCP</strong>를 생성하는 것이 최소 권한 원칙에 부합합니다. 새 OU를 생성하고 허용 SCP를 연결한 후 <strong>기본 FullAWSAccess SCP를 제거</strong>해야만 허용 SCP가 효과적으로 동작합니다. OU에 SCP를 연결해야 해당 OU의 모든 계정에 적용됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 최소 권한은 "일부 허용, 나머지 거부"이며 사용된 서비스를 거부하는 것은 반대 방향입니다.</p>
<p><span class="mark-no">❌ C</span> — 루트에는 이미 FullAWSAccess가 있어 허용 SCP 추가만으로는 제한이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — SCP는 관리 계정이 아닌 OU에 연결해야 합니다.</p>`,
  disc: [{ ans:'A (88%)', txt:'IAM Access Analyzer로 사용 서비스 식별 → 허용 SCP 생성 → 새 OU + SCP 연결 + FullAWSAccess 제거.' }]
},
{
  n: 187,
  en: `A company has multiple development teams in different business units that work in a shared single AWS account. All Amazon EC2 resources that are created in the account must include tags that specify who created the resources. The tagging must occur within the first hour of resource creation.<br><br>A DevOps engineer needs to add tags to the created resources that include the user ID that created the resource and the cost center ID. The DevOps engineer configures an AWS Lambda function with the cost center mappings to tag the resources. The DevOps engineer also sets up AWS CloudTrail in the AWS account. An Amazon S3 bucket stores the CloudTrail event logs.<br><br>Which solution will meet the tagging requirements?`,
  ko: `한 회사에는 공유된 단일 AWS 계정에서 작업하는 여러 사업부에 여러 개발 팀이 있습니다. 계정에서 생성된 모든 Amazon EC2 리소스에는 리소스를 생성한 사람을 지정하는 태그가 포함되어야 합니다. 태그 지정은 리소스 생성 후 첫 시간 내에 이루어져야 합니다.<br><br>DevOps 엔지니어는 리소스를 생성한 사용자 ID와 비용 센터 ID를 포함하는 태그를 생성된 리소스에 추가해야 합니다. DevOps 엔지니어는 비용 센터 매핑을 사용하여 리소스에 태그를 지정하기 위해 AWS Lambda 함수를 구성합니다. DevOps 엔지니어는 또한 AWS 계정에서 AWS CloudTrail을 설정합니다. Amazon S3 버킷은 CloudTrail 이벤트 로그를 저장합니다.<br><br>태그 지정 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an S3 event notification on the S3 bucket to invoke the Lambda function for s3:ObjectTagging:Put events. Enable bucket versioning on the S3 bucket.`, ko:`S3 버킷에서 S3 이벤트 알림을 생성하여 s3:ObjectTagging:Put 이벤트에 대한 Lambda 함수를 호출합니다. S3 버킷에서 버킷 버전 관리를 활성화합니다.` },
    { k:'B', en:`Enable server access logging on the S3 bucket. Create an S3 event notification on the S3 bucket for s3:ObjectTagging:* events.`, ko:`S3 버킷에서 서버 액세스 로깅을 활성화합니다. s3:ObjectTagging:* 이벤트에 대한 S3 버킷에서 S3 이벤트 알림을 생성합니다.` },
    { k:'C', en:`Create a recurring hourly Amazon EventBridge scheduled rule that invokes the Lambda function. Modify the Lambda function to read the logs from the S3 bucket.`, ko:`Lambda 함수를 호출하는 반복되는 시간별 Amazon EventBridge 예약 규칙을 생성합니다. S3 버킷에서 로그를 읽도록 Lambda 함수를 수정합니다.` },
    { k:'D', en:`Create an Amazon EventBridge rule that uses Amazon EC2 as the event source. Configure the rule to match events delivered by CloudTrail. Configure the rule to target the Lambda function.`, ko:`Amazon EC2를 이벤트 소스로 사용하는 Amazon EventBridge 규칙을 생성합니다. CloudTrail에서 전달한 이벤트와 일치하도록 규칙을 구성합니다. Lambda 함수를 대상으로 하도록 규칙을 구성합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p><strong>Amazon EventBridge + CloudTrail</strong> 조합이 EC2 리소스 생성 이벤트를 실시간으로 감지하는 가장 효율적인 방법입니다. EC2 RunInstances API 호출이 CloudTrail에 의해 캡처되고 EventBridge 규칙이 이를 감지하여 즉시 Lambda 함수를 트리거합니다. 이를 통해 1시간 이내 태그 지정 요건을 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, B</span> — S3 이벤트는 CloudTrail 로그 파일 업로드를 감지하지만 EC2 생성과 무관하며 즉각적인 응답이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 매 시간 실행은 S3 로그 파싱에 시간이 걸려 1시간 요건을 충족하지 못할 수 있습니다. Lambda 15분 제한도 문제가 됩니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'EC2 생성 이벤트(CloudTrail) → EventBridge 규칙 → Lambda 태그 추가. 실시간 트리거로 1시간 요건 충족.' }]
},
{
  n: 188,
  en: `A company runs an application for multiple environments in a single AWS account. An AWS CodePipeline pipeline uses a development Amazon Elastic Container Service (Amazon ECS) cluster to test an image for the application from an Amazon Elastic Container Registry (Amazon ECR) repository. The pipeline promotes the image to a production ECS cluster.<br><br>The company needs to move the production cluster into a separate AWS account in the same AWS Region. The production cluster must be able to download the images over a private connection.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 단일 AWS 계정에서 여러 환경에 대한 애플리케이션을 실행합니다. AWS CodePipeline 파이프라인은 개발 Amazon ECS 클러스터를 사용하여 Amazon ECR 리포지토리에서 애플리케이션 이미지를 테스트합니다. 파이프라인은 이미지를 프로덕션 ECS 클러스터로 승격합니다.<br><br>회사는 프로덕션 클러스터를 동일한 AWS 리전의 별도 AWS 계정으로 이동해야 합니다. 프로덕션 클러스터는 개인 연결을 통해 이미지를 다운로드할 수 있어야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use Amazon ECR VPC endpoints and an Amazon S3 gateway endpoint. In the separate AWS account, create an ECR repository. Set the repository policy to allow the production ECS tasks to pull images from the main AWS account. Configure the production ECS task execution role to have permission to download the image from the ECR repository.`, ko:`Amazon ECR VPC 엔드포인트와 Amazon S3 게이트웨이 엔드포인트를 사용합니다. 별도의 AWS 계정에서 ECR 리포지토리를 생성합니다. 프로덕션 ECS 작업이 기본 AWS 계정에서 이미지를 가져올 수 있도록 리포지토리 정책을 설정합니다. 프로덕션 ECS 작업 실행 역할을 구성하여 ECR 리포지토리에서 이미지를 다운로드할 수 있는 권한을 갖도록 합니다.` },
    { k:'B', en:`Set a repository policy on the production ECR repository in the main AWS account. Configure the repository policy to allow the production ECS tasks in the separate AWS account to pull images from the main account. Configure the production ECS task execution role to have permission to download the image from the ECR repository.`, ko:`기본 AWS 계정의 프로덕션 ECR 리포지토리에 리포지토리 정책을 설정합니다. 리포지토리 정책을 구성하여 별도의 AWS 계정에서 프로덕션 ECS 작업이 기본 계정에서 이미지를 가져올 수 있도록 합니다. 프로덕션 ECS 작업 실행 역할에 ECR 리포지토리에서 이미지를 다운로드할 수 있는 권한을 부여합니다.` },
    { k:'C', en:`Configure ECR private image replication in the main AWS account. Activate cross-account replication. Define the destination account ID of the separate AWS account.`, ko:`기본 AWS 계정에서 ECR 개인 이미지 복제를 구성합니다. 계정 간 복제를 활성화합니다. 별도의 AWS 계정의 대상 계정 ID를 정의합니다.` },
    { k:'D', en:`Use Amazon ECR VPC endpoints and an Amazon S3 gateway endpoint. Set a repository policy on the production ECR repository in the main AWS account. Configure the repository policy to allow the production ECS tasks in the separate AWS account to pull images from the main account. Configure the production ECS task execution role to have permission to download the image from the ECR repository.`, ko:`Amazon ECR VPC 엔드포인트와 Amazon S3 게이트웨이 엔드포인트를 사용합니다. 기본 AWS 계정의 프로덕션 ECR 리포지토리에 리포지토리 정책을 설정합니다. 리포지토리 정책을 구성하여 별도의 AWS 계정에서 프로덕션 ECS 작업이 기본 계정에서 이미지를 가져올 수 있도록 합니다. 프로덕션 ECS 작업 실행 역할을 구성하여 ECR 리포지토리에서 이미지를 다운로드할 수 있는 권한을 갖도록 합니다.` },
  ],
  answer: ['D'],
  vote: '78% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p><strong>개인 연결(private connection)</strong> 요건을 충족하려면 <strong>Amazon ECR VPC 엔드포인트</strong>와 <strong>Amazon S3 게이트웨이 엔드포인트</strong>가 필요합니다(ECR이 이미지 레이어를 S3에 저장하기 때문). 기본 계정의 ECR 리포지토리에 계정 간 접근을 허용하는 리포지토리 정책을 설정하고, 프로덕션 ECS 태스크 실행 역할에 다운로드 권한을 부여합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 별도 계정에 ECR 리포지토리를 새로 생성하는 것은 불필요합니다.</p>
<p><span class="mark-no">❌ B</span> — VPC 엔드포인트가 없어 개인 연결 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — ECR 이미지 복제는 가능하지만 개인 연결 요건(VPC 엔드포인트)을 명시하지 않습니다.</p>`,
  disc: [{ ans:'D (78%)', txt:'개인 연결 = ECR VPC 엔드포인트 + S3 게이트웨이 엔드포인트 필수. + 계정 간 리포지토리 정책.' }]
},
{
  n: 189,
  en: `A company needs to ensure that flow logs remain configured for all existing and new VPCs in its AWS account. The company uses an AWS CloudFormation stack to manage its VPCs. The company needs a solution that will work for any VPCs that any IAM user creates.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 AWS 계정의 모든 기존 및 새 VPC에 대해 플로우 로그가 구성된 상태로 유지되도록 해야 합니다. 회사는 AWS CloudFormation 스택을 사용하여 VPC를 관리합니다. 회사는 모든 IAM 사용자가 생성한 모든 VPC에 적합한 솔루션이 필요합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Add the AWS::EC2::FlowLog resource to the CloudFormation stack that creates the VPCs.`, ko:`VPC를 생성하는 CloudFormation 스택에 AWS::EC2::FlowLog 리소스를 추가합니다.` },
    { k:'B', en:`Create an organization in AWS Organizations. Add the company's AWS account to the organization. Create an SCP to prevent users from modifying VPC flow logs.`, ko:`AWS Organizations에서 조직을 생성합니다. 회사의 AWS 계정을 조직에 추가합니다. 사용자가 VPC 플로우 로그를 수정하지 못하도록 SCP를 생성합니다.` },
    { k:'C', en:`Turn on AWS Config. Create an AWS Config rule to check whether VPC flow logs are turned on. Configure automatic remediation to turn on VPC flow logs.`, ko:`AWS Config를 켭니다. VPC 플로우 로그가 켜져 있는지 확인하기 위한 AWS Config 규칙을 생성합니다. VPC 플로우 로그를 켜기 위한 자동 수정을 구성합니다.` },
    { k:'D', en:`Create an IAM policy to deny the use of API calls for VPC flow logs. Attach the IAM policy to all IAM users.`, ko:`VPC 플로우 로그에 대한 API 호출 사용을 거부하는 IAM 정책을 생성합니다. 모든 IAM 사용자에게 IAM 정책을 연결합니다.` },
  ],
  answer: ['C'],
  vote: '94% C',
  explain: `<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p><strong>AWS Config</strong>는 모든 기존 및 새로 생성되는 VPC를 지속적으로 모니터링하고 플로우 로그가 없는 경우 자동 수정을 트리거합니다. CloudFormation 스택 외부에서 생성된 VPC도 포함하며, 어떤 IAM 사용자가 생성하든 모두 적용됩니다. AWS 공식 블로그에서도 이 패턴을 권장합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudFormation 스택 이외의 방법으로 생성된 VPC는 처리하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — SCP는 플로우 로그 삭제 방지는 할 수 있지만, 플로우 로그가 켜져 있음을 보장하거나 자동으로 활성화하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — API 호출 거부는 플로우 로그를 비활성화하는 것이므로 요구사항과 반대됩니다.</p>`,
  disc: [{ ans:'C (94%)', txt:'AWS Config + 자동 수정으로 모든 VPC(기존+신규, 모든 IAM 사용자 생성)에 플로우 로그 자동 활성화.' }]
},
{
  n: 190,
  en: `A company's application teams use AWS CodeCommit repositories for their applications. The application teams have repositories in multiple AWS accounts. All accounts are in an organization in AWS Organizations.<br><br>Each application team uses AWS IAM Identity Center (AWS Single Sign-On) configured with an external IdP to assume a developer IAM role. The developer role allows the application teams to use Git to work with the code in the repositories.<br><br>A security audit reveals that the application teams can modify the main branch in any repository. A DevOps engineer must implement a solution that allows the application teams to modify the main branch of only the repositories that they manage.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `회사의 애플리케이션 팀은 애플리케이션에 AWS CodeCommit 리포지토리를 사용합니다. 애플리케이션 팀은 여러 AWS 계정에 리포지토리를 가지고 있습니다. 모든 계정은 AWS Organizations의 조직에 있습니다.<br><br>각 애플리케이션 팀은 외부 IdP로 구성된 AWS IAM Identity Center(AWS Single Sign-On)를 사용하여 개발자 IAM 역할을 맡습니다. 개발자 역할을 통해 애플리케이션 팀은 Git을 사용하여 리포지토리의 코드로 작업할 수 있습니다.<br><br>보안 감사 결과 애플리케이션 팀은 모든 리포지토리의 메인 브랜치를 수정할 수 있음이 밝혀졌습니다. DevOps 엔지니어는 애플리케이션 팀이 관리하는 리포지토리의 메인 브랜치만 수정할 수 있는 솔루션을 구현해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (세 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Update the SAML assertion to pass the user's team name. Update the IAM role's trust policy to add an access-team session tag that has the team name.`, ko:`SAML 어설션을 업데이트하여 사용자의 팀 이름을 전달합니다. IAM 역할의 신뢰 정책을 업데이트하여 팀 이름이 있는 access-team 세션 태그를 추가합니다.` },
    { k:'B', en:`Create an approval rule template for each team in the Organizations management account. Associate the template with all the repositories. Add the developer role ARN as an approver.`, ko:`조직 관리 계정에서 각 팀에 대한 승인 규칙 템플릿을 생성합니다. 템플릿을 모든 리포지토리와 연결합니다. 개발자 역할 ARN을 승인자로 추가합니다.` },
    { k:'C', en:`Create an approval rule template for each account. Associate the template with all repositories. Add the "aws:ResourceTag/access-team": "\${aws:PrincipalTag/access-team}" condition to the approval rule template.`, ko:`각 계정에 대한 승인 규칙 템플릿을 생성합니다. 템플릿을 모든 리포지토리와 연결합니다. 승인 규칙 템플릿에 "aws:ResourceTag/access-team": "\${aws:PrincipalTag/access-team}" 조건을 추가합니다.` },
    { k:'D', en:`For each CodeCommit repository, add an access-team tag that has the value set to the name of the associated team.`, ko:`각 CodeCommit 리포지토리에 대해 연관된 팀의 이름으로 설정된 값을 갖는 access-team 태그를 추가합니다.` },
    { k:'E', en:`Attach an SCP to the accounts. Include a statement that denies codecommit:GitPush, codecommit:PutFile, and codecommit:MergeBranchesByFastForward actions if aws:ResourceTag/access-team does not match aws:PrincipalTag/access-team.`, ko:`계정에 SCP를 연결합니다. aws:ResourceTag/access-team이 aws:PrincipalTag/access-team과 일치하지 않을 경우 codecommit:GitPush, codecommit:PutFile 및 codecommit:MergeBranchesByFastForward 작업을 거부하는 문을 포함합니다.` },
    { k:'F', en:`Create an IAM permissions boundary in each account. Include a statement that allows codecommit:GitPush, codecommit:PutFile, and codecommit:MergeBranchesByFastForward actions if aws:ResourceTag/access-team matches aws:PrincipalTag/access-team.`, ko:`각 계정에서 IAM 권한 경계를 생성합니다. aws:ResourceTag/access-team이 aws:PrincipalTag/access-team과 일치하는 경우 codecommit:GitPush, codecommit:PutFile 및 codecommit:MergeBranchesByFastForward 작업을 허용하는 문을 포함합니다.` },
  ],
  answer: ['A','D','E'],
  vote: '71% ADE',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>외부 IdP의 SAML 어설션에 팀 이름을 포함하고 IAM 역할 신뢰 정책에서 이를 <strong>access-team 세션 태그</strong>로 설정합니다. 이를 통해 Principal의 팀 정보를 조건으로 사용할 수 있습니다.</p>
<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>각 CodeCommit 리포지토리에 <strong>access-team 태그</strong>를 추가하여 어떤 팀이 소유하는지 표시합니다. 이를 통해 리소스 태그와 Principal 태그를 비교할 수 있습니다.</p>
<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p>SCP로 <code>aws:ResourceTag/access-team != aws:PrincipalTag/access-team</code>인 경우 GitPush 등을 거부합니다. 이를 통해 팀이 자신의 리포지토리만 수정할 수 있도록 제한합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B, C</span> — 승인 규칙 템플릿은 풀 리퀘스트 관리용이며 직접 푸시 제어에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ F</span> — 권한 경계는 허용 정책이며 SCP처럼 조직 전체에 일괄 적용하기 어렵고 각 역할마다 설정해야 합니다.</p>`,
  disc: [{ ans:'ADE (71%), ADF (17%)', txt:'ABAC 패턴: SAML 세션 태그(A) + 리소스 태그(D) + SCP 거부(E). 팀 태그 불일치 시 main 브랜치 수정 차단.' }]
}
];
