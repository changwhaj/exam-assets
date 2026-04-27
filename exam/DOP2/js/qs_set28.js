window.QS_SET28 = [
{
  n: 271,
  en: `A company uses an organization in AWS Organizations that has all features enabled. The company uses AWS Backup in a primary account and uses an AWS Key Management Service (AWS KMS) key to encrypt the backups.<br><br>The company needs to automate a cross-account backup of the resources that AWS Backup backs up in the primary account. The company configures cross-account backup in the Organizations management account. The company creates a new AWS account in the organization and configures an AWS Backup backup vault in the new account. The company creates a KMS key in the new account to encrypt the backups. Finally, the company configures a new backup plan in the primary account. The destination for the new backup plan is the backup vault in the new account.<br><br>When the AWS Backup job in the primary account is invoked, the job creates backups in the primary account. However, the backups are not copied to the new account's backup vault.<br><br>Which combination of steps must the company take so that backups can be copied to the new account's backup vault? (Choose two.)`,
  ko: `한 회사에서 모든 기능이 활성화된 AWS Organizations의 조직을 사용합니다. 이 회사는 기본 계정에서 AWS Backup을 사용하고 AWS Key Management Service(AWS KMS) 키를 사용하여 백업을 암호화합니다.<br><br>이 회사는 AWS Backup이 기본 계정에서 백업하는 리소스의 교차 계정 백업을 자동화해야 합니다. 이 회사는 Organizations 관리 계정에서 교차 계정 백업을 구성합니다. 이 회사는 조직에서 새 AWS 계정을 만들고 새 계정에 AWS Backup 백업 볼트를 구성합니다. 이 회사는 새 계정에 KMS 키를 만들어 백업을 암호화합니다. 마지막으로 이 회사는 기본 계정에서 새 백업 계획을 구성합니다. 새 백업 계획의 대상은 새 계정의 백업 볼트입니다.<br><br>기본 계정에서 AWS Backup 작업이 호출되면 해당 작업이 기본 계정에 백업을 만듭니다. 그러나 백업은 새 계정의 백업 볼트에 복사되지 않습니다.<br><br>백업을 새 계정의 백업 볼트에 복사할 수 있도록 이 회사는 어떤 단계 조합을 수행해야 합니까? (두 가지를 선택하세요.)`,
  type: 'multi', multiCount: 2,
  choices: [
    { k:'A', en:`Edit the backup vault access policy in the new account to allow access to the primary account.`, ko:`새 계정의 백업 볼트 액세스 정책을 편집하여 기본 계정에 대한 액세스를 허용합니다.` },
    { k:'B', en:`Edit the backup vault access policy in the primary account to allow access to the new account.`, ko:`기본 계정의 백업 볼트 액세스 정책을 편집하여 새 계정에 대한 액세스를 허용합니다.` },
    { k:'C', en:`Edit the backup vault access policy in the primary account to allow access to the KMS key in the new account.`, ko:`기본 계정의 백업 볼트 액세스 정책을 편집하여 새 계정에서 KMS 키에 대한 액세스를 허용합니다.` },
    { k:'D', en:`Edit the key policy of the KMS key in the primary account to share the key with the new account.`, ko:`기본 계정의 KMS 키에 대한 키 정책을 편집하여 새 계정과 키를 공유합니다.` },
    { k:'E', en:`Edit the key policy of the KMS key in the new account to share the key with the primary account.`, ko:`새 계정의 KMS 키에 대한 키 정책을 편집하여 기본 계정과 키를 공유합니다.` },
  ],
  answer: ['A','D'],
  vote: '72% AD',
  explain: `<p><span class="mark-ok">✅ A — 새 계정(대상)의 백업 볼트 액세스 정책에 기본 계정 허용</span></p>
<p>AWS Backup 교차 계정 복사 시, 대상 계정의 백업 볼트는 소스 계정이 복사 작업을 수행할 수 있도록 리소스 기반 액세스 정책을 설정해야 합니다.</p>
<p><span class="mark-ok">✅ D — 기본 계정(소스)의 KMS 키 정책에 대상 계정 허용</span></p>
<p>AWS 공식 문서에 따르면, 소스 계정의 리소스가 고객 관리형 KMS 키로 암호화된 경우, 소스 계정의 KMS 키 정책에서 대상 계정을 허용해야 교차 계정 복사 중 복호화/재암호화가 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 기본 계정의 볼트 정책을 수정하는 것은 대상 볼트 접근과 무관합니다.</p>
<p><span class="mark-no">❌ C</span> — 볼트 액세스 정책에서 KMS 키 접근을 허용하는 것은 올바른 메커니즘이 아닙니다.</p>
<p><span class="mark-no">❌ E</span> — 새 계정의 KMS 키는 새 계정의 백업 암호화에 사용되지만, 교차 계정 복사 시 필요한 것은 소스(기본) 계정의 KMS 키 공유입니다.</p>`,
  disc: [{ ans:'AD (72%) vs AE (28%)', txt:'AWS 공식 문서: 소스 계정에서 고객 관리형 키로 암호화된 경우, 소스 KMS 키 정책이 대상 계정을 허용해야 합니다. D가 정확합니다.' }]
},
{
  n: 272,
  en: `A company runs an application that uses an Amazon S3 bucket to store images. A DevOps engineer needs to implement a multi-Region strategy for the objects that are stored in the S3 bucket. The company needs to be able to fail over to an S3 bucket in another AWS Region. When an image is added to either S3 bucket, the image must be replicated to the other S3 bucket within 15 minutes.<br><br>The DevOps engineer enables two-way replication between the S3 buckets.<br><br>Which combination of steps should the DevOps engineer take next to meet the requirements? (Choose three.)`,
  ko: `한 회사가 Amazon S3 버킷을 사용하여 이미지를 저장하는 애플리케이션을 실행합니다. DevOps 엔지니어는 S3 버킷에 저장된 객체에 대한 다중 리전 전략을 구현해야 합니다. 회사는 다른 AWS 리전의 S3 버킷으로 장애 조치할 수 있어야 합니다. 이미지가 두 S3 버킷 중 하나에 추가되면 15분 이내에 다른 S3 버킷으로 이미지를 복제해야 합니다.<br><br>DevOps 엔지니어는 S3 버킷 간에 양방향 복제를 활성화합니다.<br><br>DevOps 엔지니어는 요구 사항을 충족하기 위해 다음에 어떤 단계 조합을 수행해야 합니까? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Enable S3 Replication Time Control (S3 RTC) on each replication rule.`, ko:`각 복제 규칙에서 S3 복제 시간 제어(S3 RTC)를 활성화합니다.` },
    { k:'B', en:`Create an S3 Multi-Region Access Point in an active-passive configuration.`, ko:`액티브-패시브 구성으로 S3 다중 리전 액세스 포인트를 생성합니다.` },
    { k:'C', en:`Call the SubmitMultiRegionAccessPointRoutes operation in the AWS API when the company needs to fail over to the S3 bucket in the other Region.`, ko:`회사에서 다른 리전의 S3 버킷으로 장애 조치(failover)해야 하는 경우 AWS API에서 SubmitMultiRegionAccessPointRoutes 작업을 호출합니다.` },
    { k:'D', en:`Enable S3 Transfer Acceleration on both S3 buckets.`, ko:`두 S3 버킷 모두에서 S3 전송 가속을 활성화합니다.` },
    { k:'E', en:`Configure a routing control in Amazon Route 53 Recovery Controller. Add the S3 buckets in an active-passive configuration.`, ko:`Amazon Route 53 Recovery Controller에서 라우팅 제어를 구성합니다. 액티브-패시브 구성으로 S3 버킷을 추가합니다.` },
    { k:'F', en:`Call the UpdateRoutingControlStates operation in the AWS API when the company needs to fail over to the S3 bucket in the other Region.`, ko:`회사에서 다른 리전의 S3 버킷으로 장애 조치(failover)해야 하는 경우 AWS API에서 UpdateRoutingControlStates 작업을 호출합니다.` },
  ],
  answer: ['A','B','C'],
  vote: '100% ABC',
  explain: `<p><span class="mark-ok">✅ A — S3 RTC (복제 시간 제어)</span></p>
<p>S3 RTC를 활성화하면 99.99%의 객체가 15분 이내에 복제됩니다. 15분 복제 요구 사항을 충족하는 유일한 옵션입니다.</p>
<p><span class="mark-ok">✅ B — S3 다중 리전 액세스 포인트(액티브-패시브)</span></p>
<p>S3 Multi-Region Access Point를 사용하면 단일 엔드포인트로 여러 리전의 S3 버킷에 접근할 수 있으며, 액티브-패시브 구성으로 장애 조치를 지원합니다.</p>
<p><span class="mark-ok">✅ C — SubmitMultiRegionAccessPointRoutes API 호출</span></p>
<p>S3 Multi-Region Access Point의 라우팅을 변경하여 트래픽을 다른 리전 버킷으로 전환합니다. 이것이 S3 MRAP의 장애 조치 메커니즘입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ D</span> — Transfer Acceleration은 업로드 속도를 향상시키지만 복제 시간을 보장하지 않습니다.</p>
<p><span class="mark-no">❌ E, F</span> — UpdateRoutingControlStates는 Route 53 Recovery Controller용 API로 S3 버킷 장애 조치에 사용하지 않습니다. S3 MRAP은 자체 라우팅 API(SubmitMultiRegionAccessPointRoutes)를 사용합니다.</p>`,
  disc: [{ ans:'ABC (100%)', txt:'S3 RTC(15분 복제 보장) + S3 MRAP 액티브-패시브 구성 + SubmitMultiRegionAccessPointRoutes API 장애 조치의 3단계 조합입니다.' }]
},
{
  n: 273,
  en: `A company uses the AWS Cloud Development Kit (AWS CDK) to define its application. The company uses a pipeline that consists of AWS CodePipeline and AWS CodeBuild to deploy the CDK application.<br><br>The company wants to introduce unit tests to the pipeline to test various infrastructure components. The company wants to ensure that a deployment proceeds if no unit tests result in a failure.<br><br>Which combination of steps will enforce the testing requirement in the pipeline? (Choose two.)`,
  ko: `한 회사에서 AWS Cloud Development Kit(AWS CDK)를 사용하여 애플리케이션을 정의합니다. 이 회사는 AWS CodePipeline과 AWS CodeBuild로 구성된 파이프라인을 사용하여 CDK 애플리케이션을 배포합니다.<br><br>이 회사는 다양한 인프라 구성 요소를 테스트하기 위해 파이프라인에 단위 테스트를 도입하려고 합니다. 이 회사는 단위 테스트에서 실패가 발생하지 않으면 배포가 진행되도록 하려고 합니다.<br><br>파이프라인에서 테스트 요구 사항을 강제할 단계 조합은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi', multiCount: 2,
  choices: [
    { k:'A', en:`Update the CodeBuild build phase commands to run the tests then to deploy the application. Set the OnFailure phase property to ABORT.`, ko:`CodeBuild 빌드 단계 명령을 업데이트하여 테스트를 실행한 다음 애플리케이션을 배포합니다. OnFailure 단계 속성을 ABORT로 설정합니다.` },
    { k:'B', en:`Update the CodeBuild build phase commands to run the tests then to deploy the application. Add the --rollback true flag to the cdk deploy command.`, ko:`CodeBuild 빌드 단계 명령을 업데이트하여 테스트를 실행한 다음 애플리케이션을 배포합니다. cdk deploy 명령에 --rollback true 플래그를 추가합니다.` },
    { k:'C', en:`Update the CodeBuild build phase commands to run the tests then to deploy the application. Add the --require-approval any-change flag to the cdk deploy command.`, ko:`CodeBuild 빌드 단계 명령을 업데이트하여 테스트를 실행한 다음 애플리케이션을 배포합니다. cdk deploy 명령에 --require-approval any-change 플래그를 추가합니다.` },
    { k:'D', en:`Create a test that uses the AWS CDK assertions module. Use the template.hasResourceProperties assertion to test that resources have the expected properties.`, ko:`AWS CDK 어설션 모듈을 사용하는 테스트를 만듭니다. template.hasResourceProperties 어설션을 사용하여 리소스에 예상 속성이 있는지 테스트합니다.` },
    { k:'E', en:`Create a test that uses the cdk diff command. Configure the test to fail if any resources have changed.`, ko:`cdk diff 명령을 사용하는 테스트를 만듭니다. 리소스가 변경되면 테스트가 실패하도록 구성합니다.` },
  ],
  answer: ['A','D'],
  vote: '100% AD',
  explain: `<p><span class="mark-ok">✅ A — CodeBuild 빌드 단계에서 테스트 실행 + OnFailure: ABORT</span></p>
<p>CodeBuild buildspec.yml의 phases에 테스트 명령을 추가하고 <code>on-failure: ABORT</code>를 설정하면 테스트 실패 시 빌드가 즉시 중단되어 배포가 진행되지 않습니다.</p>
<p><span class="mark-ok">✅ D — AWS CDK 어설션 모듈 + template.hasResourceProperties</span></p>
<p>CDK 어설션 모듈은 CloudFormation 템플릿이 예상한 리소스와 속성을 가지고 있는지 검증하는 단위 테스트를 작성할 수 있게 합니다. 인프라 코드의 논리적 정확성을 배포 전에 확인합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — <code>--rollback true</code>는 배포 실패 시 롤백을 활성화하지만, 테스트 실패를 기반으로 배포를 막는 기능이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — <code>--require-approval any-change</code>는 변경 사항에 대한 수동 승인을 요청하는 플래그로, 자동화된 테스트 강제와 무관합니다.</p>
<p><span class="mark-no">❌ E</span> — <code>cdk diff</code>는 변경 사항을 확인하는 명령이지, 리소스 속성의 정확성을 검증하는 단위 테스트가 아닙니다.</p>`,
  disc: [{ ans:'AD (100%)', txt:'CodeBuild OnFailure ABORT로 테스트 실패 시 파이프라인 중단, CDK 어설션으로 인프라 속성 검증하는 조합입니다.' }]
},
{
  n: 274,
  en: `A company has an application that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances are in multiple Availability Zones. The application was misconfigured in a single Availability Zone, which caused a partial outage of the application.<br><br>A DevOps engineer made changes to ensure that the unhealthy EC2 instances in one Availability Zone do not affect the healthy EC2 instances in the other Availability Zones. The DevOps engineer needs to test the application's failover and shift where the ALB sends traffic. During failover, the ALB must avoid sending traffic to the Availability Zone where the failure has occurred.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사에는 애플리케이션 로드 밸런서(ALB) 뒤의 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. EC2 인스턴스는 여러 가용 영역에 있습니다. 애플리케이션이 단일 가용 영역에서 잘못 구성되어 애플리케이션이 부분적으로 중단되었습니다.<br><br>DevOps 엔지니어는 한 가용 영역의 비정상 EC2 인스턴스가 다른 가용 영역의 정상 EC2 인스턴스에 영향을 미치지 않도록 변경했습니다. DevOps 엔지니어는 애플리케이션의 장애 조치를 테스트하고 ALB가 트래픽을 보내는 위치를 변경해야 합니다. 장애 조치 중에 ALB는 장애가 발생한 가용 영역으로 트래픽을 보내지 않아야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Turn off cross-zone load balancing on the ALB. Use Amazon Route 53 Application Recovery Controller to start a zonal shift away from the Availability Zone.`, ko:`ALB에서 크로스 존 로드 밸런싱을 끕니다. Amazon Route 53 Application Recovery Controller를 사용하여 가용성 영역에서 벗어나 존 이동을 시작합니다.` },
    { k:'B', en:`Turn off cross-zone load balancing on the ALB's target group. Use Amazon Route 53 Application Recovery Controller to start a zonal shift away from the Availability Zone.`, ko:`ALB의 대상 그룹에서 크로스 존 로드 밸런싱을 끕니다. Amazon Route 53 Application Recovery Controller를 사용하여 가용성 영역에서 벗어나 존 이동을 시작합니다.` },
    { k:'C', en:`Create an Amazon Route 53 Application Recovery Controller resource set that uses the DNS hostname of the ALB. Start a zonal shift for the resource set away from the Availability Zone.`, ko:`ALB의 DNS 호스트 이름을 사용하는 Amazon Route 53 Application Recovery Controller 리소스 세트를 만듭니다. 가용성 영역에서 리소스 세트에 대한 영역 이동을 시작합니다.` },
    { k:'D', en:`Create an Amazon Route 53 Application Recovery Controller resource set that uses the ARN of the ALB's target group. Create a readiness check that uses the ElbV2TargetGroupsCanServeTraffic rule.`, ko:`ALB 대상 그룹의 ARN을 사용하는 Amazon Route 53 Application Recovery Controller 리소스 세트를 만듭니다. ElbV2TargetGroupsCanServeTraffic 규칙을 사용하는 준비 상태 확인을 만듭니다.` },
  ],
  answer: ['B'],
  vote: '41% B',
  explain: `<p><span class="mark-ok">✅ B — ALB 대상 그룹에서 크로스 존 로드 밸런싱 비활성화 + 영역 이동(Zonal Shift)</span></p>
<p>ALB는 로드 밸런서 수준에서 크로스 존 로드 밸런싱을 직접 끌 수 없지만, 대상 그룹 수준에서 명시적으로 비활성화할 수 있습니다. Route 53 ARC의 영역 이동(Zonal Shift) 기능을 사용하면 장애가 발생한 AZ로의 트래픽을 신속하게 전환할 수 있습니다. Route 53 ARC의 영역 이동은 크로스 존 로드 밸런싱이 비활성화된 ALB를 지원합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — ALB 수준에서 크로스 존 로드 밸런싱을 직접 끌 수 없습니다. 대상 그룹 수준에서만 비활성화 가능합니다.</p>
<p><span class="mark-no">❌ C</span> — DNS 호스트 이름 기반 리소스 세트는 영역 이동에 사용되지 않습니다. 영역 이동은 ALB 리소스에 직접 적용됩니다.</p>
<p><span class="mark-no">❌ D</span> — 준비 상태 확인(Readiness Check)은 장애 조치 준비 여부를 평가하지만, 트래픽을 직접 전환하지는 않습니다.</p>`,
  disc: [{ ans:'B (41%) vs A (48%)', txt:'논쟁점: ALB 크로스 존 로드 밸런싱 비활성화 위치. AWS 공식 문서에 따르면 ALB 수준에서는 끌 수 없고 대상 그룹 수준에서만 가능하므로 B가 정확합니다.' }]
},
{
  n: 275,
  en: `A company sends its AWS Network Firewall flow logs to an Amazon S3 bucket. The company then analyzes the flow logs by using Amazon Athena.<br><br>The company needs to transform the flow logs and add additional data before the flow logs are delivered to the existing S3 bucket.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 AWS 네트워크 방화벽 플로우 로그를 Amazon S3 버킷으로 보냅니다. 그런 다음 회사는 Amazon Athena를 사용하여 플로우 로그를 분석합니다.<br><br>회사는 플로우 로그를 변환하고 추가 데이터를 추가한 후에 플로우 로그를 기존 S3 버킷에 전달해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS Lambda function to transform the data and to write a new object to the existing S3 bucket. Configure the Lambda function with an S3 trigger for the existing S3 bucket. Specify all object create events for the event type. Acknowledge the recursive invocation.`, ko:`AWS Lambda 함수를 만들어 데이터를 변환하고 기존 S3 버킷에 새 객체를 씁니다. 기존 S3 버킷에 대한 S3 트리거로 Lambda 함수를 구성합니다. 이벤트 유형에 대한 모든 객체 생성 이벤트를 지정합니다. 재귀적 호출을 확인합니다.` },
    { k:'B', en:`Enable Amazon EventBridge notifications on the existing S3 bucket. Create a custom EventBridge event bus. Create an EventBridge rule that is associated with the custom event bus. Configure the rule to react to all object create events for the existing S3 bucket and to invoke an AWS Step Functions workflow. Configure a Step Functions task to transform the data and to write the data into a new S3 bucket.`, ko:`기존 S3 버킷에서 Amazon EventBridge 알림을 활성화합니다. 사용자 지정 EventBridge 이벤트 버스를 만듭니다. 사용자 지정 이벤트 버스와 연결된 EventBridge 규칙을 만듭니다. 기존 S3 버킷의 모든 객체 생성 이벤트에 반응하고 AWS Step Functions 워크플로를 호출하도록 규칙을 구성합니다. 데이터를 변환하고 새 S3 버킷에 데이터를 쓰도록 Step Functions 작업을 구성합니다.` },
    { k:'C', en:`Create an Amazon EventBridge rule that is associated with the default EventBridge event bus. Configure the rule to react to all object create events for the existing S3 bucket. Define a new S3 bucket as the target for the rule. Create an EventBridge input transformation to customize the event before passing the event to the rule target.`, ko:`기본 EventBridge 이벤트 버스와 연결된 Amazon EventBridge 규칙을 만듭니다. 기존 S3 버킷에 대한 모든 객체 생성 이벤트에 반응하도록 규칙을 구성합니다. 규칙의 대상으로 새 S3 버킷을 정의합니다. 이벤트를 규칙 대상으로 전달하기 전에 이벤트를 사용자 지정하기 위해 EventBridge 입력 변환을 만듭니다.` },
    { k:'D', en:`Create an Amazon Kinesis Data Firehose delivery stream that is configured with an AWS Lambda transformer. Specify the existing S3 bucket as the destination. Change the Network Firewall logging destination from Amazon S3 to Kinesis Data Firehose.`, ko:`AWS Lambda 변환기로 구성된 Amazon Kinesis Data Firehose 전송 스트림을 만듭니다. 기존 S3 버킷을 대상으로 지정합니다. 네트워크 방화벽 로깅 대상을 Amazon S3에서 Kinesis Data Firehose로 변경합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — Kinesis Data Firehose + Lambda 변환기</span></p>
<p>Kinesis Data Firehose는 스트리밍 데이터를 수집하면서 Lambda 변환기로 데이터를 변환하고 추가 데이터를 붙인 후 기존 S3 버킷에 직접 전달하는 기능을 기본으로 지원합니다. AWS Network Firewall은 Kinesis Data Firehose를 로깅 대상으로 지원합니다. 가장 간단하고 직접적인 솔루션입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — S3 트리거로 Lambda를 호출하면 재귀 호출(변환된 객체가 다시 트리거) 위험이 있으며, S3에 이미 도착한 후 변환하므로 "전달 전 변환" 요구 사항과 맞지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — 불필요하게 복잡하며, 데이터를 새 S3 버킷으로 쓰는 것은 기존 버킷 사용 요구 사항과 다릅니다.</p>
<p><span class="mark-no">❌ C</span> — EventBridge 입력 변환은 이벤트 메타데이터를 변환하는 것이지 실제 로그 데이터를 변환하는 기능이 아닙니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'Firehose는 Network Firewall 로그를 수신하면서 Lambda로 변환 후 S3에 전달하는 가장 간단한 파이프라인입니다.' }]
},
{
  n: 276,
  en: `A DevOps engineer needs to implement integration tests into an existing AWS CodePipeline CI/CD workflow for an Amazon Elastic Container Service (Amazon ECS) service. The CI/CD workflow retrieves new application code from an AWS CodeCommit repository and builds a container image. The Cl/CD workflow then uploads the container image to Amazon Elastic Container Registry (Amazon ECR) with a new image tag version.<br><br>The integration tests must ensure that new versions of the service endpoint are reachable and that various API methods return successful response data. The DevOps engineer has already created an ECS cluster to test the service.<br><br>Which combination of steps will meet these requirements with the LEAST management overhead? (Choose three.)`,
  ko: `DevOps 엔지니어는 Amazon Elastic Container Service(Amazon ECS) 서비스에 대한 기존 AWS CodePipeline CI/CD 워크플로에 통합 테스트를 구현해야 합니다. CI/CD 워크플로는 AWS CodeCommit 리포지토리에서 새 애플리케이션 코드를 검색하고 컨테이너 이미지를 빌드합니다. 그런 다음 CI/CD 워크플로는 컨테이너 이미지를 새 이미지 태그 버전과 함께 Amazon Elastic Container Registry(Amazon ECR)에 업로드합니다.<br><br>통합 테스트는 새 버전의 서비스 엔드포인트에 도달할 수 있고 다양한 API 메서드가 성공적인 응답 데이터를 반환하는지 확인해야 합니다. DevOps 엔지니어는 이미 서비스를 테스트하기 위해 ECS 클러스터를 만들었습니다.<br><br>이러한 요구 사항을 가장 적은 관리 오버헤드로 충족하는 단계 조합은 무엇입니까? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Add a deploy stage to the pipeline. Configure Amazon ECS as the action provider.`, ko:`파이프라인에 배포 단계를 추가합니다. Amazon ECS를 작업 공급자로 구성합니다.` },
    { k:'B', en:`Add a deploy stage to the pipeline. Configure AWS CodeDeploy as the action provider.`, ko:`파이프라인에 배포 단계를 추가합니다. AWS CodeDeploy를 작업 공급자로 구성합니다.` },
    { k:'C', en:`Add an appspec.yml file to the CodeCommit repository.`, ko:`CodeCommit 저장소에 appspec.yml 파일을 추가합니다.` },
    { k:'D', en:`Update the image build pipeline stage to output an imagedefinitions.json file that references the new image tag.`, ko:`이미지 빌드 파이프라인 단계를 업데이트하여 새 이미지 태그를 참조하는 imagedefinitions.json 파일을 출력합니다.` },
    { k:'E', en:`Create an AWS Lambda function that runs connectivity checks and API calls against the service. Integrate the Lambda function with CodePipeline by using a Lambda action stage.`, ko:`서비스에 대한 연결 확인 및 API 호출을 실행하는 AWS Lambda 함수를 만듭니다. Lambda 액션 단계를 사용하여 Lambda 함수를 CodePipeline과 통합합니다.` },
    { k:'F', en:`Write a script that runs integration tests against the service. Upload the script to an Amazon S3 bucket. Integrate the script in the S3 bucket with CodePipeline by using an S3 action stage.`, ko:`서비스에 대한 통합 테스트를 실행하는 스크립트를 작성합니다. 스크립트를 Amazon S3 버킷에 업로드합니다. S3 작업 단계를 사용하여 S3 버킷의 스크립트를 CodePipeline과 통합합니다.` },
  ],
  answer: ['A','D','E'],
  vote: '100% ADE',
  explain: `<p><span class="mark-ok">✅ A — ECS 배포 단계 추가</span></p>
<p>CodePipeline에 ECS 작업 공급자로 배포 단계를 추가하면 새 컨테이너 이미지를 테스트 ECS 클러스터에 배포합니다. 최소 관리 오버헤드로 직접 ECS 배포를 지원합니다.</p>
<p><span class="mark-ok">✅ D — imagedefinitions.json 파일 출력</span></p>
<p>ECS 배포 단계가 올바른 이미지 태그를 인식하려면 빌드 단계에서 새 이미지 태그를 참조하는 imagedefinitions.json 파일을 아티팩트로 출력해야 합니다.</p>
<p><span class="mark-ok">✅ E — Lambda 함수로 통합 테스트</span></p>
<p>서버리스 Lambda 함수로 엔드포인트 연결 확인 및 API 호출을 수행하고, CodePipeline Lambda 액션 단계로 통합합니다. 관리 오버헤드가 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — CodeDeploy는 ECS 블루/그린 배포에 사용되지만, 단순 ECS 배포보다 설정이 복잡합니다.</p>
<p><span class="mark-no">❌ C</span> — appspec.yml은 CodeDeploy 배포에 필요하며, ECS 직접 배포에는 필요하지 않습니다.</p>
<p><span class="mark-no">❌ F</span> — S3 액션 스테이지로 스크립트를 실행하는 것은 Lambda 액션보다 관리 오버헤드가 높습니다.</p>`,
  disc: [{ ans:'ADE (100%)', txt:'ECS 직접 배포(A) + imagedefinitions.json(D) + Lambda 통합 테스트(E)의 최소 오버헤드 조합입니다.' }]
},
{
  n: 277,
  en: `A company runs applications on Windows and Linux Amazon EC2 instances. The instances run across multiple Availability Zones in an AWS Region. The company uses Auto Scaling groups for each application.<br><br>The company needs a durable storage solution for the instances. The solution must use SMB for Windows and must use NFS for Linux. The solution must also have sub-millisecond latencies. All instances will read and write the data.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `한 회사가 Windows 및 Linux Amazon EC2 인스턴스에서 애플리케이션을 실행합니다. 인스턴스는 AWS 리전의 여러 가용성 영역에서 실행됩니다. 이 회사는 각 애플리케이션에 대해 Auto Scaling 그룹을 사용합니다.<br><br>이 회사는 인스턴스에 대한 내구성 있는 스토리지 솔루션이 필요합니다. 이 솔루션은 Windows의 경우 SMB를 사용하고 Linux의 경우 NFS를 사용해야 합니다. 이 솔루션은 또한 밀리초 미만의 대기 시간을 가져야 합니다. 모든 인스턴스는 데이터를 읽고 씁니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Create an Amazon Elastic File System (Amazon EFS) file system that has targets in multiple Availability Zones.`, ko:`여러 가용 영역에 대상이 있는 Amazon Elastic File System(Amazon EFS) 파일 시스템을 만듭니다.` },
    { k:'B', en:`Create an Amazon FSx for NetApp ONTAP Multi-AZ file system.`, ko:`Amazon FSx for NetApp ONTAP Multi-AZ 파일 시스템을 만듭니다.` },
    { k:'C', en:`Create a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume to use for shared storage.`, ko:`공유 스토리지로 사용할 범용 SSD(gp3) Amazon Elastic Block Store(Amazon EBS) 볼륨을 생성합니다.` },
    { k:'D', en:`Update the user data for each application's launch template to mount the file system.`, ko:`각 애플리케이션의 실행 템플릿에 대한 사용자 데이터를 업데이트하여 파일 시스템을 마운트합니다.` },
    { k:'E', en:`Perform an instance refresh on each Auto Scaling group.`, ko:`각 Auto Scaling 그룹에서 인스턴스 새로 고침을 수행합니다.` },
    { k:'F', en:`Update the EC2 instances for each application to mount the file system when new instances are launched.`, ko:`새 인스턴스가 시작될 때 파일 시스템을 마운트하도록 각 애플리케이션의 EC2 인스턴스를 업데이트합니다.` },
  ],
  answer: ['B','D','E'],
  vote: '75% BDE',
  explain: `<p><span class="mark-ok">✅ B — FSx for NetApp ONTAP Multi-AZ</span></p>
<p>SMB(Windows)와 NFS(Linux)를 모두 지원하며 밀리초 미만 대기 시간을 제공하는 유일한 AWS 스토리지 서비스입니다. Multi-AZ 구성으로 내구성도 보장됩니다.</p>
<p><span class="mark-ok">✅ D — 시작 템플릿 사용자 데이터 업데이트</span></p>
<p>시작 템플릿의 사용자 데이터를 업데이트하여 새로 시작되는 모든 인스턴스가 자동으로 파일 시스템을 마운트하도록 합니다.</p>
<p><span class="mark-ok">✅ E — 각 ASG에서 인스턴스 새로 고침</span></p>
<p>시작 템플릿을 업데이트했으므로, 인스턴스 새로 고침(Instance Refresh)을 수행하여 기존에 실행 중인 인스턴스들도 새 구성(파일 시스템 마운트 포함)으로 교체합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — EFS는 NFS만 지원하며 SMB(Windows)를 지원하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — EBS는 개별 EC2 인스턴스에 연결되는 블록 스토리지로, 여러 인스턴스 간 공유 스토리지에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ F</span> — D와 중복됩니다. D에서 시작 템플릿을 업데이트하면 새 인스턴스에 자동 적용되며, E의 인스턴스 새로 고침으로 기존 인스턴스도 처리됩니다.</p>`,
  disc: [{ ans:'BDE (75%)', txt:'FSx ONTAP(SMB+NFS), 시작 템플릿 사용자 데이터 업데이트, 인스턴스 새로 고침으로 기존 인스턴스까지 모두 적용하는 조합입니다.' }]
},
{
  n: 278,
  en: `A company uses an organization in AWS Organizations that a security team and a DevOps team manage. Both teams access the accounts by using AWS IAM Identity Center.<br><br>A dedicated group has been created for each team. The DevOps team's group has been assigned a permission set named DevOps. The permission set has the AdministratorAccess managed IAM policy attached. The permission set has been applied to all accounts in the organization.<br><br>The security team wants to ensure that the DevOps team does not have access to IAM Identity Center in the organization's management account. The security team has attached the following SCP to the organization root:<br><br>[Image showing an SCP that denies sso:* and sso-directory:* actions]<br><br>After implementing the policy, the security team discovers that the DevOps team can still access IAM Identity Center.<br><br>Which solution will fix the problem?`,
  ko: `한 회사에서 보안 팀과 DevOps 팀이 관리하는 AWS Organizations의 조직을 사용합니다. 두 팀 모두 AWS IAM Identity Center를 사용하여 계정에 액세스합니다.<br><br>각 팀에 대한 전담 그룹이 생성되었습니다. DevOps 팀의 그룹에는 DevOps라는 권한 집합이 할당되었습니다. 권한 집합에는 AdministratorAccess 관리형 IAM 정책이 첨부되었습니다. 권한 집합은 조직의 모든 계정에 적용되었습니다.<br><br>보안 팀은 DevOps 팀이 조직의 관리 계정에서 IAM Identity Center에 액세스할 수 없도록 하려고 합니다. 보안 팀은 다음 SCP를 조직 루트에 첨부했습니다:<br><br>[sso:* 및 sso-directory:* 작업을 거부하는 SCP 이미지]<br><br>정책을 구현한 후 보안 팀은 DevOps 팀이 여전히 IAM Identity Center에 액세스할 수 있음을 발견했습니다.<br><br>어떤 솔루션이 문제를 해결합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`In the organization's management account, create a new OU. Move the organization's management account to the new OU. Detach the SCP from the organization root. Attach the SCP to the new OU.`, ko:`조직의 관리 계정에서 새 OU를 만듭니다. 조직의 관리 계정을 새 OU로 이동합니다. 조직 루트에서 SCP를 분리합니다. SCP를 새 OU에 연결합니다.` },
    { k:'B', en:`In the organization's management account, update the SCP condition reference to the ARN of the DevOps team's group role to include the AWS account ID of the organization's management account.`, ko:`조직의 관리 계정에서 SCP 조건 참조를 DevOps 팀의 그룹 역할의 ARN으로 업데이트하여 조직의 관리 계정의 AWS 계정 ID를 포함합니다.` },
    { k:'C', en:`In IAM Identity Center, create a new permission set. Ensure that the assigned policy has full access but explicitly denies permission for the sso:* action and the sso-directory:* action. Update the assigned permission set for the DevOps team's group role in the organization's management account. Delete the SCP.`, ko:`IAM Identity Center에서 새 권한 집합을 만듭니다. 할당된 정책에 전체 액세스 권한이 있지만 sso:* 작업과 sso-directory:* 작업에 대한 권한을 명시적으로 거부하는지 확인합니다. 조직의 관리 계정에서 DevOps 팀의 그룹 역할에 대한 할당된 권한 집합을 업데이트합니다. SCP를 삭제합니다.` },
    { k:'D', en:`In IAM Identity Center, update the DevOps permission set. Ensure that the assigned policy has full access but explicitly denies permission for the sso:* action and the sso-directory:* action. In the Deny statement, add a StringEquals condition that compares the aws:SourceAccount global condition context key with the organization's management account ID. Delete the SCP.`, ko:`IAM Identity Center에서 DevOps 권한 집합을 업데이트합니다. 할당된 정책에 전체 액세스 권한이 있지만 sso:* 작업과 sso-directory:* 작업에 대한 권한을 명시적으로 거부하는지 확인합니다. Deny 문에서 aws:SourceAccount 글로벌 조건 컨텍스트 키를 조직의 관리 계정 ID와 비교하는 StringEquals 조건을 추가합니다. SCP를 삭제합니다.` },
  ],
  answer: ['D'],
  vote: '56% D',
  explain: `<p><span class="mark-ok">✅ D — DevOps 권한 집합 업데이트 + 관리 계정 조건부 Deny</span></p>
<p>SCP는 Organizations <strong>관리 계정에는 적용되지 않습니다</strong>. 따라서 루트에 SCP를 붙여도 관리 계정 사용자에게는 효과가 없습니다. 해결책은 IAM Identity Center의 DevOps 권한 집합에 인라인 정책을 추가하여 관리 계정(aws:SourceAccount)에서는 sso:* 및 sso-directory:* 작업을 명시적으로 거부하는 것입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Organizations 관리 계정은 OU로 이동할 수 없습니다. 관리 계정은 항상 루트에 존재합니다.</p>
<p><span class="mark-no">❌ B</span> — SCP는 관리 계정에 적용되지 않으므로, SCP 조건을 수정해도 문제가 해결되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — C와 D의 차이: D는 기존 DevOps 권한 집합을 업데이트하고 조건을 추가하여 관리 계정에만 적용합니다. C는 새 권한 집합을 만들지만 조건 없이 모든 계정에서 SSO를 차단할 수 있습니다.</p>`,
  disc: [{ ans:'D (56%)', txt:'SCP는 Organizations 관리 계정에 적용되지 않습니다. 권한 집합(Permission Set)에 조건부 거부를 추가하여 관리 계정에서만 SSO 액세스를 차단해야 합니다.' }]
},
{
  n: 279,
  en: `An Amazon EC2 Auto Scaling group manages EC2 instances that were created from an AMI. The AMI has the AWS Systems Manager Agent installed. When an EC2 instance is launched into the Auto Scaling group, tags are applied to the EC2 instance.<br><br>EC2 instances that are launched by the Auto Scaling group must have the correct operating system configuration.<br><br>Which solution will meet these requirements?`,
  ko: `Amazon EC2 Auto Scaling 그룹은 AMI에서 생성된 EC2 인스턴스를 관리합니다. AMI에는 AWS Systems Manager Agent가 설치되어 있습니다. EC2 인스턴스가 Auto Scaling 그룹에서 시작되면 태그가 EC2 인스턴스에 적용됩니다.<br><br>Auto Scaling 그룹에서 시작하는 EC2 인스턴스는 올바른 운영 체제 구성을 가져야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a Systems Manager Run Command document that configures the desired instance configuration. Set up Systems Manager Compliance to invoke the Run Command document when the EC2 instances are not in compliance with the most recent patches.`, ko:`원하는 인스턴스 구성을 구성하는 Systems Manager Run Command 문서를 만듭니다. EC2 인스턴스가 최신 패치를 준수하지 않을 때 Run Command 문서를 호출하도록 Systems Manager Compliance를 설정합니다.` },
    { k:'B', en:`Create a Systems Manager State Manager association that links to the Systems Manager command document. Create a tag query that runs immediately.`, ko:`Systems Manager 명령 문서에 연결되는 Systems Manager State Manager 연결을 만듭니다. 즉시 실행되는 태그 쿼리를 만듭니다.` },
    { k:'C', en:`Create a Systems Manager Run Command task that specifies the desired instance configuration. Create a maintenance window in Systems Manager Maintenance Windows that runs daily. Register the Run Command task against the maintenance window. Designate the targets.`, ko:`원하는 인스턴스 구성을 지정하는 Systems Manager Run Command 작업을 만듭니다. Systems Manager Maintenance Windows에서 매일 실행되는 유지 관리 창을 만듭니다. Run Command 작업을 유지 관리 창에 등록합니다. 대상을 지정합니다.` },
    { k:'D', en:`Create a Systems Manager Patch Manager patch baseline and a patch group that use the same tags that the Auto Scaling group applies. Register the patch group with the patch baseline. Define a Systems Manager command document to patch the instances. Invoke the document by using Systems Manager Run Command.`, ko:`Systems Manager Patch Manager 패치 기준선과 Auto Scaling 그룹이 적용하는 것과 동일한 태그를 사용하는 패치 그룹을 만듭니다. 패치 그룹을 패치 기준선에 등록합니다. 인스턴스를 패치하기 위한 Systems Manager 명령 문서를 정의합니다. Systems Manager Run Command를 사용하여 문서를 호출합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — State Manager 연결 + 태그 쿼리(즉시 실행)</span></p>
<p>Systems Manager State Manager 연결은 원하는 상태(OS 구성)를 정의하고 지속적으로 적용합니다. 태그 쿼리를 즉시 실행으로 설정하면 Auto Scaling 그룹에서 새 인스턴스가 시작되어 태그가 적용되는 즉시 올바른 OS 구성이 자동으로 적용됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — SSM Compliance는 규정 준수 상태를 확인하지만, 인스턴스 시작 시 즉시 구성을 적용하는 데 사용하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 유지 관리 창은 정해진 스케줄에 따라 실행됩니다. 새 인스턴스 시작 즉시 구성을 적용하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Patch Manager는 패치 관리에 특화되어 있으며, 전반적인 OS 구성 관리에는 State Manager가 더 적합합니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'State Manager 연결은 인스턴스 시작 즉시 태그 기반으로 OS 구성을 적용하는 가장 적합한 솔루션입니다.' }]
},
{
  n: 280,
  en: `A company uses AWS Organizations to manage its AWS accounts. The organization root has a child OU that is named Department. The Department OU has a child OU that is named Engineering. The default FullAWSAccess policy is attached to the root, the Department OU, and the Engineering OU.<br><br>The company has many AWS accounts in the Engineering OU. Each account has an administrative IAM role with the AdministratorAccess IAM policy attached. The default FullAWSAccessPolicy is also attached to each account.<br><br>A DevOps engineer plans to remove the FullAWSAccess policy from the Department OU. The DevOps engineer will replace the policy with a policy that contains an Allow statement for all Amazon EC2 API operations.<br><br>What will happen to the permissions of the administrative IAM roles as a result of this change?`,
  ko: `한 회사에서 AWS Organizations를 사용하여 AWS 계정을 관리합니다. 조직 루트에는 Department라는 이름의 자식 OU가 있습니다. Department OU에는 Engineering이라는 이름의 자식 OU가 있습니다. 기본 FullAWSAccess 정책은 루트, Department OU 및 Engineering OU에 연결됩니다.<br><br>이 회사는 Engineering OU에 많은 AWS 계정을 가지고 있습니다. 각 계정에는 AdministratorAccess IAM 정책이 연결된 관리 IAM 역할이 있습니다. 기본 FullAWSAccessPolicy도 각 계정에 연결됩니다.<br><br>DevOps 엔지니어는 Department OU에서 FullAWSAccess 정책을 제거할 계획입니다. DevOps 엔지니어는 모든 Amazon EC2 API 작업에 대한 Allow 문이 포함된 정책으로 정책을 대체합니다.<br><br>이 변경으로 인해 관리 IAM 역할의 권한은 어떻게 됩니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`All API actions on all resources will be allowed.`, ko:`모든 리소스에 대한 모든 API 작업이 허용됩니다.` },
    { k:'B', en:`All API actions on EC2 resources will be allowed. All other API actions will be denied.`, ko:`EC2 리소스에 대한 모든 API 작업이 허용됩니다. 다른 모든 API 작업은 거부됩니다.` },
    { k:'C', en:`All API actions on all resources will be denied.`, ko:`모든 리소스에 대한 모든 API 작업이 거부됩니다.` },
    { k:'D', en:`All API actions on EC2 resources will be denied. All other API actions will be allowed.`, ko:`EC2 리소스에 대한 모든 API 작업은 거부됩니다. 다른 모든 API 작업은 허용됩니다.` },
  ],
  answer: ['B'],
  vote: '71% B',
  explain: `<p><span class="mark-ok">✅ B — EC2 API만 허용, 나머지 거부</span></p>
<p>SCP는 <strong>Allow-list 방식</strong>으로 작동합니다. 계층 구조를 따라 모든 상위 SCP의 교집합만 허용됩니다.<br>
• 루트: FullAWSAccess (모든 서비스 Allow)<br>
• Department OU: EC2만 Allow (FullAWSAccess 제거)<br>
• Engineering OU: FullAWSAccess<br>
• 계정: FullAWSAccess<br><br>
계정의 유효 권한 = 루트 ∩ Department OU ∩ Engineering OU ∩ 계정 SCP = EC2만 허용<br>
Department OU에서 EC2만 허용하도록 변경되면, 그 아래 모든 계정은 EC2 작업만 수행 가능합니다. Engineering OU와 계정에 FullAWSAccess가 있어도 상위의 Department OU 제한을 초과할 수 없습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Department OU에서 EC2만 허용하도록 변경되었으므로 전체 액세스가 허용되지 않습니다. Engineering OU와 계정에 FullAWSAccess가 있어도 상위 SCP보다 넓을 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — SCP에 EC2 허용 문이 있으므로 EC2 작업은 허용됩니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 작업을 명시적으로 허용하는 문이 있으므로 EC2 작업은 허용됩니다.</p>`,
  disc: [{ ans:'B (71%)', txt:'SCP는 교집합(가장 좁은 범위)으로 작동합니다. Department OU의 EC2-only 정책이 하위 계정의 FullAWSAccess를 제한하므로 결과적으로 EC2만 허용됩니다.' }]
}
];
