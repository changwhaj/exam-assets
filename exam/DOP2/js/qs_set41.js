window.QS_SET41 = [
{
  n: 401,
  en: `A company has deployed a microservices-based application on Amazon Elastic Container Service (Amazon ECS). The application is experiencing performance issues. The company needs to identify which microservices are causing the issues.<br><br>Which solution will provide this information?`,
  ko: `한 회사가 아마존 엘라스틱 컨테이너 서비스(Amazon ECS)에 마이크로서비스 기반 애플리케이션을 배포했습니다. 해당 애플리케이션에서 성능 문제가 발생하고 있으며, 회사는 어떤 마이크로서비스가 문제의 원인인지 파악해야 합니다.<br><br>어떤 솔루션이 이러한 정보를 제공할 수 있을까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure AWS X-Ray for each ECS task. Create an X-Ray group for each microservice. Implement custom X-Ray subsegments in each microservice to capture detailed timing information. Use an X-Ray service map to visualize and identify slow microservices and requests.`, ko:`각 ECS 작업에 대해 AWS X-Ray를 구성합니다. 각 마이크로서비스에 대해 X-Ray 그룹을 생성합니다. 각 마이크로서비스에 사용자 지정 X-Ray 서브세그먼트를 구현하여 자세한 타이밍 정보를 수집합니다. X-Ray 서비스 맵을 사용하여 속도가 느린 마이크로서비스와 요청을 시각화하고 식별합니다.` },
    { k:'B', en:`Configure AWS X-Ray for each ECS task. Use an X-Ray service map to visualize the application's architecture and request flow. Filter the X-Ray traces by response time and error rate. Identify the microservices that have high latency or high error rates. Analyze individual traces to identify slow microservices and requests.`, ko:`각 ECS 작업에 대해 AWS X-Ray를 구성합니다. X-Ray 서비스 맵을 사용하여 애플리케이션 아키텍처와 요청 흐름을 시각화합니다. 응답 시간과 오류율별로 X-Ray 추적 결과를 필터링합니다. 지연 시간이 길거나 오류율이 높은 마이크로서비스를 식별합니다. 개별 추적 결과를 분석하여 속도가 느린 마이크로서비스와 요청을 파악합니다.` },
    { k:'C', en:`Configure Amazon CloudWatch Container Insights for each ECS task. Analyze Container Insights metrics to identify slow microservices. Use CloudWatch Logs Insights to filter the Container Insights log data by response time and error rate. Analyze the log data to identify slow requests.`, ko:`각 ECS 작업에 대해 Amazon CloudWatch Container Insights를 구성합니다. Container Insights 지표를 분석하여 속도가 느린 마이크로서비스를 식별합니다. CloudWatch Logs Insights를 사용하여 응답 시간 및 오류율별로 Container Insights 로그 데이터를 필터링합니다. 로그 데이터를 분석하여 속도가 느린 요청을 식별합니다.` },
    { k:'D', en:`Configure Amazon CloudWatch Container Insights for each ECS task. Use the CloudWatch automatic dashboard for Amazon ECS to identify slow microservices. Use CloudWatch Logs Insights to analyze the Container Insights performance logs for each ECS task to identify slow requests.`, ko:`각 ECS 작업에 대해 Amazon CloudWatch Container Insights를 구성합니다. Amazon ECS용 CloudWatch 자동 대시보드를 사용하여 속도가 느린 마이크로서비스를 식별합니다. CloudWatch Logs Insights를 사용하여 각 ECS 작업의 Container Insights 성능 로그를 분석하여 속도가 느린 요청을 식별합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>AWS X-Ray는 분산 추적(distributed tracing) 도구로, 마이크로서비스 간 요청 흐름을 서비스 맵으로 시각화하고 각 서비스의 지연 시간·오류율을 추적합니다. B는 X-Ray 서비스 맵 → 응답 시간/오류율 필터링 → 개별 추적 분석의 단계적 접근으로 문제 마이크로서비스를 정확히 식별합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 커스텀 서브세그먼트 구현은 추가 개발 작업이 필요하며, 기본 X-Ray 서비스 맵만으로도 충분히 문제를 파악할 수 있습니다.</p>
<p><span class="mark-no">❌ C/D</span> — Container Insights는 CPU/메모리 등 인프라 지표 중심이며, 마이크로서비스 간 요청 흐름의 분산 추적은 지원하지 않습니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'X-Ray 서비스 맵 + 응답시간/오류율 필터 + 개별 추적 분석 — 마이크로서비스 성능 문제 진단의 표준 접근법입니다.' }]
},
{
  n: 402,
  en: `A company uses AWS Organizations, AWS Control Tower, AWS Config, and Terraform to manage its AWS accounts and resources. The company must ensure that users deploy only AWS Lambda functions that are connected to a VPC in member AWS accounts.<br><br>Which solution will meet these requirements with the LEAST operational effort?`,
  ko: `한 회사가 AWS Organizations, AWS Control Tower, AWS Config 및 Terraform을 사용하여 AWS 계정과 리소스를 관리합니다. 이 회사는 사용자가 멤버 AWS 계정의 VPC에 연결된 AWS Lambda 함수만 배포하도록 해야 합니다.<br><br>이러한 요구 사항을 최소한의 운영 노력으로 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure AWS Control Tower to use proactive controls (guardrails). Enable the optional controls (guardrails) implemented with AWS CloudFormation hooks for Lambda on all OUs.`, ko:`AWS Control Tower를 구성하여 사전 예방적 제어(가드레일)를 사용하도록 설정합니다. 모든 OU에서 Lambda용 AWS CloudFormation 후크를 통해 구현된 선택적 제어(가드레일)를 활성화합니다.` },
    { k:'B', en:`Create a new SCP. Include a conditional statement that uses a StringEquals condition operator to check the lambda:VpcIds condition key against a list of VPC IDs. Configure the SCP to allow the lambda CreateFunction action and the lambda UpdateFunctionConfiguration action if the value of the condition key matches one of the VPC IDs.`, ko:`새 SCP를 생성합니다. 조건문에 StringEquals 연산자를 사용하여 lambda:VpcIds 조건 키를 VPC ID 목록과 비교하는 조건을 추가합니다. 조건 키 값이 VPC ID 중 하나와 일치하는 경우 Lambda CreateFunction 액션과 Lambda UpdateFunctionConfiguration 액션을 허용하도록 SCP를 구성합니다.` },
    { k:'C', en:`Create a custom rule in AWS Config to detect Lambda functions that are not connected to a VPC when any Lambda function is created or updated.`, ko:`AWS Config에서 사용자 지정 규칙을 생성하여 Lambda 함수가 생성되거나 업데이트될 때 VPC에 연결되지 않은 Lambda 함수를 감지합니다.` },
    { k:'D', en:`Create a new SCP. Include a conditional statement that uses a Null condition operator to determine whether the lambda:VpcIds condition key is absent. Configure the SCP to deny the lambda CreateFunction action and the lambda UpdateFunctionConfiguration action if the condition key is absent.`, ko:`새 SCP를 생성합니다. Null 조건 연산자를 사용하여 lambda:VpcIds 조건 키가 없는지 확인하는 조건문을 포함합니다. 조건 키가 없는 경우 lambda CreateFunction 액션과 lambda UpdateFunctionConfiguration 액션을 거부하도록 SCP를 구성합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>SCP에서 <code>Null</code> 조건 연산자를 사용하여 <code>lambda:VpcIds</code> 키가 없는 경우(즉 VPC 없이 배포하려는 경우) <code>CreateFunction</code>과 <code>UpdateFunctionConfiguration</code>을 Deny하면, 모든 멤버 계정에서 VPC 미연결 Lambda 배포를 예방적으로 차단할 수 있습니다. SCP는 전체 조직에 한 번만 설정하면 되므로 운영 노력이 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudFormation Hook 기반 Control Tower 제어는 CloudFormation 배포에만 적용되며, Terraform 또는 CLI 배포에는 적용되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — StringEquals로 특정 VPC ID를 허용하는 방식은 VPC ID 목록을 항상 최신 상태로 유지해야 하므로 운영 부담이 큽니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Config 규칙은 탐지(detective) 방식으로, 이미 배포된 비준수 Lambda를 감지하지만 사전 차단(preventive)은 불가합니다.</p>`,
  disc: []
},
{
  n: 403,
  en: `A DevOps engineer is planning to use the AWS Cloud Development Kit (AWS CDK) to manage infrastructure as code (IaC) for a microservices-based application. The DevOps engineer must create reusable components for common infrastructure patterns and must apply the same cost allocation tags across different microservices.<br><br>Which solution will meet these requirements?`,
  ko: `DevOps 엔지니어가 마이크로서비스 기반 애플리케이션의 인프라를 코드로 관리(IaC)하기 위해 AWS 클라우드 개발 키트(AWS CDK)를 사용할 계획입니다. 이 엔지니어는 공통적인 인프라 패턴에 재사용 가능한 구성 요소를 생성해야 하며, 여러 마이크로서비스에 동일한 비용 할당 태그를 적용해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a custom CDK construct library that includes common infrastructure patterns. Create a CDK app. Use the TagManager class to add cost allocation tags to the whole app. Use the custom CDK construct library to write a higher-level construct that contains all the microservices. Deploy the microservices as a single CDK stack with environment-specific configurations.`, ko:`일반적인 인프라 패턴을 포함하는 사용자 지정 CDK 구성 라이브러리를 생성합니다. CDK 애플리케이션을 생성합니다. TagManager 클래스를 사용하여 전체 애플리케이션에 비용 할당 태그를 추가합니다. 사용자 지정 CDK 구성 라이브러리를 사용하여 모든 마이크로서비스를 포함하는 상위 수준 구성을 작성합니다. 환경별 구성을 적용하여 마이크로서비스를 단일 CDK 스택으로 배포합니다.` },
    { k:'B', en:`Create a custom CDK construct library that includes common infrastructure patterns. Create a CDK app. Use the Tags class to add cost allocation tags to the whole app. Use the custom CDK construct library to write higher-level constructs for each microservice. Deploy the microservices as separate CDK stacks with environment-specific configurations.`, ko:`일반적인 인프라 패턴을 포함하는 사용자 지정 CDK 구성 라이브러리를 생성합니다. CDK 애플리케이션을 생성합니다. Tags 클래스를 사용하여 전체 애플리케이션에 비용 할당 태그를 추가합니다. 사용자 지정 CDK 구성 라이브러리를 사용하여 각 마이크로서비스에 대한 상위 수준 구성을 작성합니다. 환경별 구성을 사용하여 마이크로서비스를 별도의 CDK 스택으로 배포합니다.` },
    { k:'C', en:`Create AWS Service Catalog products that contain common infrastructure components. Create a CDK app. Use the TagManager class to add cost allocation tags to the whole app. Use the Service Catalog products to write a higher-level construct that contains all the microservices. Deploy the microservices as a single CDK stack with environment-specific configurations.`, ko:`공통 인프라 구성 요소를 포함하는 AWS 서비스 카탈로그 제품을 생성합니다. CDK 앱을 생성합니다. TagManager 클래스를 사용하여 전체 앱에 비용 할당 태그를 추가합니다. 서비스 카탈로그 제품을 사용하여 모든 마이크로서비스를 포함하는 상위 수준 구조를 작성합니다. 환경별 구성을 사용하여 마이크로서비스를 단일 CDK 스택으로 배포합니다.` },
    { k:'D', en:`Create AWS Service Catalog products that contain common infrastructure components. Create a CDK app. Use the Tags class to add cost allocation tags to the whole app. Use the Service Catalog products to write higher-level constructs for each microservice. Deploy the microservices as separate CDK stacks with environment-specific configurations.`, ko:`공통 인프라 구성 요소를 포함하는 AWS 서비스 카탈로그 제품을 생성합니다. CDK 앱을 생성합니다. Tags 클래스를 사용하여 전체 앱에 비용 할당 태그를 추가합니다. 서비스 카탈로그 제품을 사용하여 각 마이크로서비스에 대한 상위 수준 구성 요소를 작성합니다. 환경별 구성을 사용하여 마이크로서비스를 별도의 CDK 스택으로 배포합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>CDK에서 재사용 가능한 구성 요소는 <strong>사용자 지정 Construct 라이브러리</strong>로 구현합니다. 전체 앱에 비용 할당 태그를 일괄 적용하려면 <code>Tags</code> 클래스(앱/스택/구성 요소 수준에 태그 전파)를 사용해야 합니다. <code>TagManager</code>는 Construct 내부 구현용이며 직접 사용하지 않습니다. 마이크로서비스는 독립 배포를 위해 별도 스택으로 분리합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A/C</span> — <code>TagManager</code>는 CDK 내부 클래스로 직접 사용하지 않으며, 단일 스택은 마이크로서비스 독립 배포에 부적합합니다.</p>
<p><span class="mark-no">❌ C/D</span> — AWS Service Catalog는 CDK 외부 서비스로, CDK 앱 내에서 재사용 가능한 Construct 라이브러리를 대체할 수 없습니다.</p>`,
  disc: []
},
{
  n: 404,
  en: `A company runs an application that uses an Amazon S3 bucket to store images. A DevOps engineer needs to implement a multi-Region disaster recovery (DR) strategy for the S3 objects. The DevOps engineer enables two-way replication between the S3 buckets.<br><br>The company must be able to fail over to a second S3 bucket that is in a second AWS Region. When an image is added to either S3 bucket, the image must be replicated to the other S3 bucket within 15 minutes.<br><br>Which combination of steps will meet these requirements in the MOST operationally efficient way? (Choose three.)`,
  ko: `한 회사가 Amazon S3 버킷에 이미지를 저장하는 애플리케이션을 운영하고 있습니다. DevOps 엔지니어는 S3 객체에 대한 다중 리전 재해 복구(DR) 전략을 구현해야 합니다. DevOps 엔지니어는 S3 버킷 간 양방향 복제를 활성화합니다.<br><br>회사는 두 번째 AWS 리전에 있는 두 번째 S3 버킷으로 장애 조치를 수행할 수 있어야 합니다. 이미지가 어느 한 S3 버킷에 추가되면 15분 이내에 다른 S3 버킷으로 복제되어야 합니다.<br><br>이러한 요구 사항을 가장 운영 효율적인 방식으로 충족하는 단계 조합은 무엇입니까? (세 가지를 선택하십시오.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Enable S3 Replication Time Control (S3 RTC) for each replication rule used in the configuration.`, ko:`구성에 사용되는 각 복제 규칙에 대해 S3 복제 시간 제어(S3 RTC)를 활성화합니다.` },
    { k:'B', en:`Create an S3 Multi-Region Access Point in an active-passive configuration.`, ko:`액티브-패시브 구성으로 S3 멀티 리전 액세스 포인트를 생성합니다.` },
    { k:'C', en:`Call the SubmitMultiRegionAccessPointRoutes operation in the Amazon S3 API when the company needs to fail over to the S3 bucket in the second Region.`, ko:`회사가 두 번째 리전의 S3 버킷으로 장애 조치를 해야 할 경우 Amazon S3 API에서 SubmitMultiRegionAccessPointRoutes 작업을 호출합니다.` },
    { k:'D', en:`Enable S3 Transfer Acceleration on both S3 buckets.`, ko:`두 S3 버킷 모두에서 S3 전송 가속을 활성화합니다.` },
    { k:'E', en:`Configure a routing control in Amazon Route 53 Application Recovery Controller. Add both S3 buckets in an active-passive configuration.`, ko:`Amazon Route 53 Application Recovery Controller에서 라우팅 제어를 구성합니다. 두 S3 버킷을 액티브-패시브 구성으로 추가합니다.` },
    { k:'F', en:`Use an Amazon Route 53 Application Recovery Controller to shift traffic from the primary bucket to the failover bucket in the second Region.`, ko:`Amazon Route 53 Application Recovery Controller를 사용하여 기본 버킷에서 두 번째 리전의 장애 조치 버킷으로 트래픽을 이동합니다.` },
  ],
  answer: ['A','B','C'],
  vote: '100% ABC',
  explain: `<p><span class="mark-ok">✅ A+B+C — 핵심 이유</span></p>
<p><strong>A</strong>: S3 RTC(Replication Time Control)는 15분 SLA 내 복제를 보장합니다 — 15분 이내 복제 요건의 핵심입니다.</p>
<p><strong>B</strong>: S3 멀티 리전 액세스 포인트를 액티브-패시브로 생성하면 단일 엔드포인트로 장애 조치를 관리할 수 있습니다.</p>
<p><strong>C</strong>: <code>SubmitMultiRegionAccessPointRoutes</code> API로 트래픽 라우팅을 두 번째 리전으로 전환하여 장애 조치를 완료합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ D</span> — S3 Transfer Acceleration은 업로드 속도를 높이는 기능으로, 복제 시간 보장과는 무관합니다.</p>
<p><span class="mark-no">❌ E/F</span> — Route 53 Application Recovery Controller는 DNS/로드밸런서 기반 장애 조치 도구로, S3 버킷 직접 라우팅에는 적합하지 않습니다. S3 멀티 리전 액세스 포인트의 라우팅 API(C)가 더 적합합니다.</p>`,
  disc: []
},
{
  n: 405,
  en: `A company is developing a mobile app that requires extensive automated testing across multiple device types. The company is using AWS CodePipeline for its CI/CD pipeline.<br><br>The company must implement a scalable testing solution that can handle increased test loads as the app grows.<br><br>Which solution will meet these requirements with the LEAST management overhead?`,
  ko: `한 회사가 다양한 기기 유형에 걸쳐 광범위한 자동화 테스트가 필요한 모바일 앱을 개발 중입니다. 이 회사는 CI/CD 파이프라인에 AWS CodePipeline을 사용하고 있습니다.<br><br>앱 규모가 커짐에 따라 테스트 부하 증가를 처리할 수 있는 확장 가능한 테스트 솔루션을 구현해야 합니다.<br><br>이러한 요구 사항을 충족하면서 관리 오버헤드가 가장 적은 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Integrate AWS Device Farm with the pipeline to run the tests and scale as needed.`, ko:`AWS Device Farm을 파이프라인에 통합하여 테스트를 실행하고 필요에 따라 확장합니다.` },
    { k:'B', en:`Deploy a fleet of Amazon EC2 instances with various mobile device emulators and auto scaling to run the tests. Create a custom AWS Lambda function to invoke EC2 test runs.`, ko:`다양한 모바일 장치 에뮬레이터와 자동 스케일링을 사용하여 Amazon EC2 인스턴스를 배포하고 테스트를 실행합니다. EC2 테스트 실행을 호출하는 사용자 지정 AWS Lambda 함수를 생성합니다.` },
    { k:'C', en:`Implement a containerized testing solution that uses Amazon Elastic Container Service (Amazon ECS) with auto scaling. Configure the pipeline to invoke an AWS Lambda function to start the test runs on the ECS cluster.`, ko:`자동 스케일링 기능을 갖춘 Amazon Elastic Container Service(Amazon ECS)를 사용하는 컨테이너 기반 테스트 솔루션을 구현합니다. 파이프라인이 AWS Lambda 함수를 호출하여 ECS 클러스터에서 테스트 실행을 시작하도록 구성합니다.` },
    { k:'D', en:`Use AWS Lambda functions with custom runtime emulators to run the tests. Integrate the Lambda functions with the pipeline.`, ko:`사용자 지정 런타임 에뮬레이터를 사용하는 AWS Lambda 함수를 이용하여 테스트를 실행합니다. Lambda 함수를 파이프라인에 통합합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>AWS Device Farm은 실제 물리 기기 및 에뮬레이터에서 모바일 앱을 테스트할 수 있는 완전 관리형 서비스입니다. CodePipeline과 직접 통합되며, 테스트 부하에 따라 자동으로 확장됩니다. 인프라 관리가 필요 없어 관리 오버헤드가 가장 적습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — EC2 + 에뮬레이터 + Lambda 조합은 인프라 프로비저닝/관리 오버헤드가 매우 큽니다.</p>
<p><span class="mark-no">❌ C</span> — ECS 컨테이너는 실제 모바일 디바이스 환경 재현에 한계가 있으며 관리 복잡성도 높습니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda의 런타임 제한(15분, 메모리)으로 모바일 앱 테스트에는 부적합합니다.</p>`,
  disc: []
},
{
  n: 406,
  en: `A company has an application that streams logs to an Amazon CloudWatch Logs log group. The logs must be available for the team to search in CloudWatch for at least 30 days. Logs must be accessible with low latency for at least 90 days. After 180 days, log retrieval is rare and latency is not important.<br><br>A DevOps engineer creates an Amazon S3 bucket to store the logs. Log availability metrics and data protection are important to the company.<br><br>Which solution will meet these requirements in the MOST cost-effective way?`,
  ko: `한 회사의 애플리케이션은 Amazon CloudWatch Logs 로그 그룹으로 로그를 스트리밍합니다. 팀에서 CloudWatch에서 로그를 검색할 수 있도록 최소 30일 동안 로그를 이용할 수 있어야 합니다. 또한 최소 90일 동안은 낮은 지연 시간으로 로그에 접근할 수 있어야 합니다. 180일 이후에는 로그 검색 빈도가 낮아 지연 시간은 중요하지 않습니다.<br><br>DevOps 엔지니어는 로그 저장을 위해 Amazon S3 버킷을 생성합니다. 로그 가용성 지표와 데이터 보호는 회사에 매우 중요합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure the log group to have a retention period of 30 days and to use the infrequent access log class. Create a CloudWatch metric stream that uses Amazon Kinesis Data Streams to send log events to the S3 bucket. Create an S3 Lifecycle policy to move objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days and to Amazon Glacier Flexible Retrieval after 180 days.`, ko:`로그 그룹의 보존 기간을 30일로 설정하고, '간헐적 액세스' 로그 클래스를 사용하도록 구성합니다. Amazon Kinesis Data Streams를 사용하여 로그 이벤트를 S3 버킷으로 전송하는 CloudWatch 메트릭 스트림을 생성합니다. 90일 후에는 객체를 Amazon S3 Standard-IA(간헐적 액세스)로, 180일 후에는 Amazon Glacier Flexible Retrieval로 이동하는 S3 수명 주기 정책을 생성합니다.` },
    { k:'B', en:`Configure the log group to have a retention period of 30 days and to use the infrequent access log class. Create a CloudWatch metric stream that uses Amazon Data Firehose to send log events to the S3 bucket. Create an S3 Lifecycle policy to move objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 90 days and to Amazon S3 Glacier Flexible Retrieval after 180 days.`, ko:`로그 그룹의 보존 기간을 30일로 설정하고, '간헐적 액세스' 로그 클래스를 사용하도록 구성합니다. Amazon Data Firehose를 사용하여 로그 이벤트를 S3 버킷으로 전송하는 CloudWatch 메트릭 스트림을 생성합니다. 90일 후에는 객체를 Amazon S3 One Zone-Infrequent Access(S3 One Zone-IA)로, 180일 후에는 Amazon S3 Glacier Flexible Retrieval로 이동하는 S3 수명 주기 정책을 생성합니다.` },
    { k:'C', en:`Configure the log groups to have a retention period of 30 days. Create a CloudWatch subscription filter that uses Amazon Kinesis Data Streams to send log events to the S3 bucket by writing files. Create an S3 Lifecycle policy to move objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days and to Amazon S3 Glacier Instant Retrieval after 180 days.`, ko:`로그 그룹의 보존 기간을 30일로 구성합니다. Amazon Kinesis Data Streams를 사용하여 로그 이벤트를 파일에 기록하는 CloudWatch 구독 필터를 생성합니다. 90일 후에는 객체를 Amazon S3 Standard-IA(S3 Standard-Infrequent Access)로, 180일 후에는 Amazon S3 Glacier Instant Retrieval로 이동하는 S3 수명 주기 정책을 생성합니다.` },
    { k:'D', en:`Configure the log groups to have a retention period of 30 days. Create a CloudWatch subscription filter that uses Amazon Data Firehose to send log events to the S3 bucket. Create an S3 Lifecycle policy to move objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 90 days and to Amazon S3 Glacier Deep Archive after 180 days.`, ko:`로그 그룹의 보존 기간을 30일로 구성합니다. Amazon Data Firehose를 사용하여 로그 이벤트를 S3 버킷으로 전송하는 CloudWatch 구독 필터를 생성합니다. 90일 후 객체를 Amazon S3 Standard-IA(S3 Standard-Infrequent Access)로, 180일 후 Amazon S3 Glacier Deep Archive로 이동하는 S3 수명 주기 정책을 생성합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>CloudWatch <strong>구독 필터</strong> + <strong>Data Firehose</strong>가 로그를 S3로 전송하는 표준 패턴입니다(메트릭 스트림은 지표용). S3 Standard-IA는 90일 이상 저빈도 접근에 비용 효율적이며, 180일 이후 검색 빈도가 낮고 지연 허용 시 <strong>Glacier Deep Archive</strong>가 가장 저렴합니다. S3는 데이터 보호(가용성 99.999999999%)를 기본 제공합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A/B</span> — CloudWatch <strong>메트릭 스트림</strong>은 지표(metrics) 전송용이며 로그 이벤트 전송에는 부적합합니다. 구독 필터를 사용해야 합니다.</p>
<p><span class="mark-no">❌ B</span> — S3 One Zone-IA는 단일 AZ에만 저장되어 데이터 보호 요건 위반 가능성이 있습니다.</p>
<p><span class="mark-no">❌ C</span> — Glacier Instant Retrieval은 180일 이후 저빈도 접근에 Deep Archive보다 비용이 높습니다.</p>`,
  disc: []
},
{
  n: 407,
  en: `A company has an organization in AWS Organizations. The organization has all features enabled and has AWS CloudTrail trusted access configured for the management account. An Amazon Simple Notification Service (Amazon SNS) topic is configured for notifications.<br><br>The company needs all AWS events in all AWS Regions in the organization to be recorded and retained in an audit account. The company needs near real-time notifications of any failed login attempts.<br><br>A DevOps engineer has created an organization trail in the management account to log events for all Regions.<br><br>Which solution will meet these requirements with the LEAST operational effort?`,
  ko: `한 회사가 AWS Organizations에 조직을 보유하고 있습니다. 해당 조직은 모든 기능이 활성화되어 있으며 관리 계정에 AWS CloudTrail 신뢰 액세스가 구성되어 있습니다. 알림을 위해 Amazon Simple Notification Service(Amazon SNS) 토픽도 설정되어 있습니다.<br><br>이 회사는 조직 내 모든 AWS 리전에서 발생하는 모든 AWS 이벤트를 기록하고 감사 계정에 보관해야 합니다. 또한 로그인 시도 실패에 대한 거의 실시간 알림이 필요합니다.<br><br>DevOps 엔지니어는 모든 리전의 이벤트를 기록하기 위해 관리 계정에 조직 트레일을 생성했습니다.<br><br>이러한 요구 사항을 최소한의 운영 노력으로 충족할 수 있는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure the trail to publish logs to a new Amazon S3 bucket in the audit account. In the audit account, create an Amazon EventBridge rule that reacts to failed login events in CloudTrail. Configure the EventBridge rule to notify the SNS topic.`, ko:`CloudTrail이 감사 계정의 새 Amazon S3 버킷에 로그를 게시하도록 구성합니다. 감사 계정에서 CloudTrail의 로그인 실패 이벤트에 반응하는 Amazon EventBridge 규칙을 생성합니다. EventBridge 규칙이 SNS 토픽에 알림을 보내도록 구성합니다.` },
    { k:'B', en:`Configure the trail to publish logs to a new Amazon S3 bucket in the management account. Configure an Amazon Athena table to read from the new S3 bucket. Create an AWS Lambda function that queries the Athena table for failed login events and publishes the findings to the SNS topic. Create an Amazon EventBridge scheduled rule to invoke the Lambda function every 5 minutes.`, ko:`트레일이 관리 계정의 새 Amazon S3 버킷에 로그를 게시하도록 구성합니다. 새 S3 버킷에서 데이터를 읽도록 Amazon Athena 테이블을 구성합니다. 로그인 실패 이벤트를 Athena 테이블에서 쿼리하고 결과를 SNS 토픽에 게시하는 AWS Lambda 함수를 생성합니다. 5분마다 Lambda 함수를 실행하도록 Amazon EventBridge 예약 규칙을 생성합니다.` },
    { k:'C', en:`Configure the trail to publish logs to a new Amazon S3 bucket in the audit account and a new Amazon CloudWatch log group in the management account. Create a CloudWatch Logs metric filter on the log group to create a custom metric for failed logins. Configure a CloudWatch alarm that uses the custom metric and notifies the SNS topic.`, ko:`감사 계정의 새 Amazon S3 버킷과 관리 계정의 새 Amazon CloudWatch 로그 그룹에 로그를 게시하도록 트레일을 구성합니다. 로그 그룹에 CloudWatch Logs 메트릭 필터를 생성하여 로그인 실패에 대한 사용자 지정 메트릭을 만듭니다. 사용자 지정 메트릭을 사용하고 SNS 토픽에 알림을 보내는 CloudWatch 알람을 구성합니다.` },
    { k:'D', en:`Configure the trail to publish logs to a new Amazon CloudWatch log group in the audit account. Create an Amazon Kinesis data stream in the audit account. Configure a subscription filter on the log group to send the logs to the data stream. Use Amazon Managed Service for Apache Flink to filter the data stream for failed logins. Publish the results to the SNS topic.`, ko:`감사 계정의 새 Amazon CloudWatch 로그 그룹에 로그를 게시하도록 트레일을 구성합니다. 감사 계정에 Amazon Kinesis 데이터 스트림을 생성합니다. 로그 그룹에 구독 필터를 구성하여 로그를 데이터 스트림으로 전송합니다. Amazon Managed Service for Apache Flink를 사용하여 데이터 스트림에서 로그인 실패를 필터링합니다. 결과를 SNS 토픽에 게시합니다.` },
  ],
  answer: ['C'],
  vote: '100% C',
  explain: `<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p>두 요구사항을 동시에 충족합니다. ① S3(감사 계정)에 로그 보관 → 감사 요건 충족. ② CloudWatch 로그 그룹 + 메트릭 필터(로그인 실패 패턴 감지) + CloudWatch 알람 + SNS → 거의 실시간 알림. CloudWatch 메트릭 필터 방식은 추가 인프라 없이 간단히 구현 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — EventBridge는 CloudTrail 이벤트를 실시간으로 수신하지만, S3에 저장된 로그를 직접 스캔하지는 않아 로그인 실패 감지가 지연될 수 있습니다.</p>
<p><span class="mark-no">❌ B</span> — S3+Athena+Lambda 방식은 5분 주기 폴링으로 실시간 알림이 불가하고 운영 복잡성이 높습니다.</p>
<p><span class="mark-no">❌ D</span> — Kinesis + Flink 조합은 과도하게 복잡하며 운영 오버헤드가 큽니다.</p>`,
  disc: []
},
{
  n: 408,
  en: `A company runs a microservices application on Amazon Elastic Kubernetes Service (Amazon EKS). Users recently reported significant delays while accessing an account summary feature, particularly during peak business hours.<br><br>A DevOps engineer used Amazon CloudWatch metrics and logs to troubleshoot the issue. The logs indicated normal CPU and memory utilization on the EKS nodes. The DevOps engineer was not able to identify where the delays occurred within the microservices architecture.<br><br>The DevOps engineer needs to increase the observability of the application to pinpoint where the delays are occurring.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 Amazon Elastic Kubernetes Service(Amazon EKS)에서 마이크로서비스 애플리케이션을 운영하고 있습니다. 최근 사용자들이 계정 요약 기능에 접속할 때, 특히 업무량이 많은 시간대에 상당한 지연이 발생한다고 보고했습니다.<br><br>DevOps 엔지니어는 Amazon CloudWatch 메트릭과 로그를 사용하여 문제를 해결하려고 시도했습니다. 로그에는 EKS 노드의 CPU 및 메모리 사용률이 정상으로 나타났습니다. 하지만 DevOps 엔지니어는 마이크로서비스 아키텍처 내에서 지연이 발생하는 지점을 정확히 파악할 수 없었습니다.<br><br>DevOps 엔지니어는 지연 발생 지점을 정확히 찾아내기 위해 애플리케이션의 가시성을 높여야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Deploy the AWS X-Ray daemon as a DaemonSet in the EKS cluster. Use the X-Ray SDK to instrument the application code. Redeploy the application.`, ko:`AWS X-Ray 데몬을 EKS 클러스터에 DaemonSet으로 배포합니다. X-Ray SDK를 사용하여 애플리케이션 코드를 계측합니다. 애플리케이션을 다시 배포합니다.` },
    { k:'B', en:`Enable CloudWatch Container Insights for the EKS cluster. Use the Container Insights data to diagnose the delays.`, ko:`EKS 클러스터에 대해 CloudWatch Container Insights를 활성화합니다. Container Insights 데이터를 사용하여 지연 원인을 진단합니다.` },
    { k:'C', en:`Create alarms based on the existing CloudWatch metrics. Set up an Amazon Simple Notification Service (Amazon SNS) topic to send email alerts.`, ko:`기존 CloudWatch 지표를 기반으로 알람을 생성합니다. 이메일 알림을 보내도록 Amazon Simple Notification Service(Amazon SNS) 토픽을 설정합니다.` },
    { k:'D', en:`Increase the timeout settings in the application code for network operations to allow more time for operations to finish.`, ko:`네트워크 작업에 대한 애플리케이션 코드의 타임아웃 설정을 늘려 작업 완료에 더 많은 시간을 확보하십시오.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>CPU/메모리가 정상이고 CloudWatch 로그로도 지연 지점을 특정할 수 없는 상황에서, 필요한 것은 <strong>분산 추적(distributed tracing)</strong>입니다. X-Ray 데몬을 DaemonSet으로 배포하고 SDK로 코드를 계측하면 각 마이크로서비스 간 요청 흐름과 지연 시간을 서비스 맵으로 시각화하여 병목 지점을 정확히 파악할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — Container Insights는 이미 확인된 CPU/메모리 수준의 인프라 지표만 제공하며, 서비스 간 요청 추적은 불가합니다.</p>
<p><span class="mark-no">❌ C</span> — 기존 지표 기반 알람은 이미 문제가 발생한 후 알리는 것이며, 지연 원인 파악에 도움이 되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 타임아웃 증가는 근본 원인을 해결하지 않고 증상만 임시 완화합니다.</p>`,
  disc: []
},
{
  n: 409,
  en: `A company uses a pipeline in AWS CodePipeline to upload AWS CloudFormation templates to an Amazon S3 bucket. The pipeline uses the templates to deploy CloudFormation stacks that match the names of the templates.<br><br>The company has experienced issues when it tries to revert templates to a previous version. To prevent these issues, the company must have the ability to review template modifications before the modifications are deployed to production.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `한 회사가 AWS CodePipeline 파이프라인을 사용하여 AWS CloudFormation 템플릿을 Amazon S3 버킷에 업로드합니다. 이 파이프라인은 업로드된 템플릿을 사용하여 템플릿 이름과 일치하는 CloudFormation 스택을 배포합니다.<br><br>이 회사는 템플릿을 이전 버전으로 되돌리려고 할 때 문제가 발생하는 것을 경험했습니다. 이러한 문제를 방지하기 위해 회사는 수정된 템플릿이 프로덕션 환경에 배포되기 전에 수정 사항을 검토할 수 있어야 합니다.<br><br>이러한 요구 사항을 충족하면서 운영 오버헤드를 최소화하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure a connection in AWS CodeConnections to a Git repository. Store the templates in the Git repository. Configure a pull request workflow to review template modifications. Configure AWS CloudFormation Git sync for the stacks.`, ko:`AWS CodeConnections에서 Git 리포지토리에 대한 연결을 구성합니다. 템플릿을 Git 리포지토리에 저장합니다. 템플릿 수정 사항을 검토하는 풀 리퀘스트 워크플로를 구성합니다. 스택에 대한 AWS CloudFormation Git 동기화를 구성합니다.` },
    { k:'B', en:`Add a manual review action in the pipeline to review modifications to the template code before the stack deployments.`, ko:`스택 배포 전에 템플릿 코드 수정 사항을 검토하는 수동 검토 작업을 파이프라인에 추가합니다.` },
    { k:'C', en:`Update the pipeline to invoke an AWS Lambda function to check the template modifications before the stack deployments.`, ko:`스택 배포 전에 템플릿 수정 사항을 확인하기 위해 AWS Lambda 함수를 호출하도록 파이프라인을 업데이트합니다.` },
    { k:'D', en:`Configure a connection in AWS CodeConnections to a Git repository. Store the templates in the Git repository. Configure the pipeline to include a source action that uses the connection. Add a manual review action to the pipeline to review template modifications before the stack deployments.`, ko:`AWS CodeConnections에서 Git 리포지토리에 대한 연결을 구성합니다. 템플릿을 Git 리포지토리에 저장합니다. 파이프라인에 해당 연결을 사용하는 소스 작업을 포함하도록 구성합니다. 스택 배포 전에 템플릿 수정 사항을 검토하기 위해 파이프라인에 수동 검토 작업을 추가합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>AWS CloudFormation Git 동기화(Git sync)는 Git 리포지토리의 템플릿 변경을 자동으로 스택에 반영하는 기능입니다. PR 워크플로로 변경 사항을 검토(버전 관리 + 롤백 용이)하고, Git sync로 배포를 자동화하면 별도 파이프라인 수정 없이 최소 운영 오버헤드로 요구사항을 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 수동 검토 액션 추가만으로는 버전 관리와 롤백 문제가 해결되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Lambda 함수로 템플릿 검증은 가능하지만 PR 기반 검토 워크플로와 버전 관리 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Git 저장 + 파이프라인 소스 액션 + 수동 검토는 A보다 구성이 복잡하며 Git sync의 자동화 이점이 없습니다.</p>`,
  disc: []
},
{
  n: 410,
  en: `A company uses a trunk-based development branching strategy. The company has two AWS CodePipeline pipelines that are integrated with a Git provider. The <code>pull_request</code> pipeline has a branch filter that matches the feature branches. The <code>main_branch</code> pipeline has a branch filter that matches the main branch.<br><br>When pull requests are merged into the main branch, the pull requests are deployed by using the <code>main_branch</code> pipeline.<br><br>The company's developers need test results for all submitted pull requests as quickly as possible from the <code>pull_request</code> pipeline. The company wants to ensure that the <code>main_branch</code> pipeline's test results finish and that each deployment is complete before the next pipeline execution.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 트렁크 기반 개발 브랜칭 전략을 사용하고 있습니다. 이 회사는 Git 프로바이더와 통합된 두 개의 AWS CodePipeline 파이프라인을 보유하고 있습니다. <code>pull_request</code> 파이프라인에는 기능 브랜치와 일치하는 브랜치 필터가 설정되어 있고, <code>main_branch</code> 파이프라인에는 메인 브랜치와 일치하는 브랜치 필터가 설정되어 있습니다.<br><br>풀 리퀘스트가 메인 브랜치에 병합되면 <code>main_branch</code> 파이프라인을 사용하여 배포가 진행됩니다.<br><br>이 회사의 개발자들은 제출된 모든 풀 리퀘스트에 대한 테스트 결과를 <code>pull_request</code> 파이프라인에서 최대한 빠르게 받아야 합니다. 또한, 다음 파이프라인 실행 전에 <code>main_branch</code> 파이프라인의 테스트 결과가 완료되고 각 배포가 완료되도록 해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇일까요?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure the <code>pull_request</code> pipeline to use PARALLEL mode. Configure the <code>main_branch</code> pipeline to use QUEUED mode.`, ko:`<code>pull_request</code> 파이프라인을 PARALLEL 모드로 구성하고, <code>main_branch</code> 파이프라인을 QUEUED 모드로 구성합니다.` },
    { k:'B', en:`Configure the <code>pull_request</code> pipeline to use SUPERSEDED mode. Configure the <code>main_branch</code> pipeline to use QUEUED mode.`, ko:`<code>pull_request</code> 파이프라인을 SUPERSEDED 모드로 구성하고, <code>main_branch</code> 파이프라인을 QUEUED 모드로 구성합니다.` },
    { k:'C', en:`Configure the <code>pull_request</code> pipeline to use PARALLEL mode. Configure the <code>main_branch</code> pipeline to use SUPERSEDED mode.`, ko:`<code>pull_request</code> 파이프라인을 PARALLEL 모드로 구성하고, <code>main_branch</code> 파이프라인을 SUPERSEDED 모드로 구성합니다.` },
    { k:'D', en:`Configure the <code>pull_request</code> pipeline to use QUEUED mode. Configure the <code>main_branch</code> pipeline to use SUPERSEDED mode.`, ko:`<code>pull_request</code> 파이프라인을 QUEUED 모드로 구성하고, <code>main_branch</code> 파이프라인을 SUPERSEDED 모드로 구성합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p><strong>PARALLEL 모드</strong>: 여러 PR 실행이 동시에(병렬로) 실행됩니다. 모든 PR에 대해 최대한 빠르게 테스트 결과를 받아야 하는 <code>pull_request</code> 파이프라인에 적합합니다.</p>
<p><strong>QUEUED 모드</strong>: 현재 실행이 완료될 때까지 다음 실행이 대기열에서 기다립니다. 각 배포가 완전히 완료된 후에만 다음 실행이 시작되어야 하는 <code>main_branch</code> 파이프라인에 적합합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — SUPERSEDED 모드는 새 실행이 시작되면 이전 실행을 중단하므로, PR 테스트 결과가 일부 누락될 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — main_branch에 SUPERSEDED 모드를 사용하면 이전 배포가 중단될 수 있어 불완전한 배포 상태가 발생할 위험이 있습니다.</p>
<p><span class="mark-no">❌ D</span> — pull_request에 QUEUED 모드를 사용하면 PR이 순차적으로 처리되어 빠른 테스트 결과 수신이 불가합니다.</p>`,
  disc: []
}
];
