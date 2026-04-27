window.QS_SET20 = [
{
  n: 191,
  en: `A company uses AWS WAF to protect its cloud infrastructure. A DevOps engineer needs to give an operations team the ability to analyze log messages from AWS WAF. The operations team needs to be able to create alarms for specific patterns in the log output.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `한 회사가 AWS WAF를 사용하여 클라우드 인프라를 보호합니다. DevOps 엔지니어는 운영 팀에 AWS WAF의 로그 메시지를 분석할 수 있는 기능을 제공해야 합니다. 운영 팀은 로그 출력의 특정 패턴에 대한 알람을 생성할 수 있어야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an Amazon CloudWatch Logs log group. Configure the appropriate AWS WAF web ACL to send log messages to the log group. Instruct the operations team to create CloudWatch metric filters.`, ko:`Amazon CloudWatch Logs 로그 그룹을 생성합니다. 적절한 AWS WAF 웹 ACL을 구성하여 로그 메시지를 로그 그룹으로 보냅니다. 운영 팀에 CloudWatch 메트릭 필터를 생성하도록 지시합니다.` },
    { k:'B', en:`Create an Amazon OpenSearch Service cluster and appropriate indexes. Configure an Amazon Kinesis Data Firehose delivery stream to stream log data to the indexes. Use OpenSearch Dashboards to create filters and widgets.`, ko:`Amazon OpenSearch Service 클러스터와 적절한 인덱스를 생성합니다. Amazon Kinesis Data Firehose 전달 스트림을 구성하여 로그 데이터를 인덱스로 스트리밍합니다. OpenSearch 대시보드를 사용하여 필터와 위젯을 생성합니다.` },
    { k:'C', en:`Create an Amazon S3 bucket for the log output. Configure AWS WAF to send log outputs to the S3 bucket. Instruct the operations team to create AWS Lambda functions that detect each desired log message pattern. Configure the Lambda functions to publish to an Amazon Simple Notification Service (Amazon SNS) topic.`, ko:`로그 출력을 위한 Amazon S3 버킷을 생성합니다. AWS WAF를 구성하여 로그 출력을 S3 버킷으로 보냅니다. 운영 팀에 원하는 각 로그 메시지 패턴을 감지하는 AWS Lambda 함수를 생성하도록 지시합니다. Lambda 함수를 구성하여 Amazon SNS 토픽에 게시합니다.` },
    { k:'D', en:`Create an Amazon S3 bucket for the log output. Configure AWS WAF to send log outputs to the S3 bucket. Use Amazon Athena to create an external table definition that fits the log message pattern. Instruct the operations team to write SQL queries and to create Amazon CloudWatch metric filters for the Athena queries.`, ko:`로그 출력을 위한 Amazon S3 버킷을 생성합니다. AWS WAF를 구성하여 로그 출력을 S3 버킷으로 보냅니다. Amazon Athena를 사용하여 로그 메시지 패턴에 맞는 외부 테이블 정의를 생성합니다. 운영 팀에 SQL 쿼리를 작성하고 Athena 쿼리에 대한 Amazon CloudWatch 메트릭 필터를 생성하도록 지시합니다.` },
  ],
  answer: ['A'],
  vote: '89% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>AWS WAF는 <strong>CloudWatch Logs 로그 그룹</strong>으로 직접 로그를 전송하도록 구성할 수 있습니다. CloudWatch Logs Insights로 로그를 분석하고 <strong>메트릭 필터</strong>를 생성하여 특정 패턴에 대한 알람을 만들 수 있습니다. 모두 CloudWatch 생태계 내에서 완결되어 추가 서비스 없이 최소 운영 오버헤드를 달성합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — OpenSearch + Kinesis Firehose는 고가의 추가 서비스를 필요로 합니다.</p>
<p><span class="mark-no">❌ C</span> — 각 패턴마다 Lambda 함수를 작성하는 것은 높은 운영 오버헤드를 요구합니다.</p>
<p><span class="mark-no">❌ D</span> — Athena에 대한 CloudWatch 메트릭 필터는 지원되지 않는 방식입니다.</p>`,
  disc: [{ ans:'A (89%)', txt:'WAF 로그 → CloudWatch Logs → 메트릭 필터 → 알람. 단일 서비스 생태계에서 최소 오버헤드.' }]
},
{
  n: 192,
  en: `A software team is using AWS CodePipeline to automate its Java application release pipeline. The pipeline consists of a source stage, then a build stage, and then a deploy stage. Each stage contains a single action that has a runOrder value of 1.<br><br>The team wants to integrate unit tests into the existing release pipeline. The team needs a solution that deploys only the code changes that pass all unit tests.<br><br>Which solution will meet these requirements?`,
  ko: `소프트웨어 팀이 AWS CodePipeline을 사용하여 Java 애플리케이션 릴리스 파이프라인을 자동화하고 있습니다. 파이프라인은 소스 단계, 빌드 단계, 배포 단계로 구성됩니다. 각 단계에는 runOrder 값이 1인 단일 작업이 포함됩니다.<br><br>팀은 기존 릴리스 파이프라인에 단위 테스트를 통합하려고 합니다. 팀은 모든 단위 테스트를 통과하는 코드 변경 사항만 배포하는 솔루션이 필요합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Modify the build stage. Add a test action that has a runOrder value of 1. Use AWS CodeDeploy as the action provider to run unit tests.`, ko:`빌드 단계를 수정합니다. runOrder 값이 1인 테스트 작업을 추가합니다. AWS CodeDeploy를 작업 공급자로 사용하여 단위 테스트를 실행합니다.` },
    { k:'B', en:`Modify the build stage. Add a test action that has a runOrder value of 2. Use AWS CodeBuild as the action provider to run unit tests.`, ko:`빌드 단계를 수정합니다. runOrder 값이 2인 테스트 작업을 추가합니다. AWS CodeBuild를 작업 공급자로 사용하여 단위 테스트를 실행합니다.` },
    { k:'C', en:`Modify the deploy stage. Add a test action that has a runOrder value of 1. Use AWS CodeDeploy as the action provider to run unit tests.`, ko:`배포 단계를 수정합니다. runOrder 값이 1인 테스트 작업을 추가합니다. AWS CodeDeploy를 작업 공급자로 사용하여 단위 테스트를 실행합니다.` },
    { k:'D', en:`Modify the deploy stage. Add a test action that has a runOrder value of 2. Use AWS CodeBuild as the action provider to run unit tests.`, ko:`배포 단계를 수정합니다. runOrder 값이 2인 테스트 작업을 추가합니다. AWS CodeBuild를 작업 공급자로 사용하여 단위 테스트를 실행합니다.` },
  ],
  answer: ['B'],
  vote: '95% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p><strong>빌드 단계</strong>에 테스트를 추가해야 빌드 아티팩트 생성 후 테스트가 실행됩니다. <strong>runOrder 값 2</strong>는 기존 빌드 작업(runOrder 1) 이후에 순차 실행됨을 의미합니다. <strong>AWS CodeBuild</strong>는 단위 테스트 실행에 적합한 서비스입니다. 테스트 실패 시 배포 단계로 진행하지 않습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — runOrder 1은 기존 빌드 작업과 병렬로 실행되므로 빌드 완료 전에 테스트가 실행될 수 있습니다.</p>
<p><span class="mark-no">❌ C, D</span> — 배포 단계에서 테스트하면 이미 배포가 시작된 후 테스트가 실행됩니다.</p>`,
  disc: [{ ans:'B (95%)', txt:'빌드 단계 + runOrder 2(순차 실행) + CodeBuild가 빌드 후 테스트 → 테스트 통과 시에만 배포.' }]
},
{
  n: 193,
  en: `A company uses an organization in AWS Organizations to manage several AWS accounts that the company's developers use. The company requires all data to be encrypted in transit.<br><br>Multiple Amazon S3 buckets that were created in developer accounts allow unencrypted connections. A DevOps engineer must enforce encryption of data in transit for all existing S3 buckets that are created in accounts in the organization.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 AWS Organizations에서 조직을 사용하여 회사 개발자가 사용하는 여러 AWS 계정을 관리합니다. 회사는 모든 데이터가 전송 중 암호화되도록 요구합니다.<br><br>개발자 계정에서 생성된 여러 Amazon S3 버킷이 암호화되지 않은 연결을 허용합니다. DevOps 엔지니어는 조직의 계정에서 생성된 모든 기존 S3 버킷에 대해 전송 중 데이터 암호화를 적용해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS CloudFormation StackSets to deploy an AWS Network Firewall firewall to each account. Route all outbound requests from the AWS environment through the firewall. Deploy a policy to block access to all outbound requests on port 80.`, ko:`AWS CloudFormation StackSets를 사용하여 각 계정에 AWS Network Firewall 방화벽을 배포합니다. AWS 환경에서 모든 아웃바운드 요청을 방화벽을 통해 라우팅합니다. 포트 80에서 모든 아웃바운드 요청에 대한 액세스를 차단하는 정책을 배포합니다.` },
    { k:'B', en:`Use AWS CloudFormation StackSets to deploy an AWS Network Firewall firewall to each account. Route all inbound requests to the AWS environment through the firewall. Deploy a policy to block access to all inbound requests on port 80.`, ko:`AWS CloudFormation StackSets를 사용하여 각 계정에 AWS Network Firewall 방화벽을 배포합니다. AWS 환경으로 들어오는 모든 요청을 방화벽을 통해 라우팅합니다. 포트 80에서 들어오는 모든 요청에 대한 액세스를 차단하는 정책을 배포합니다.` },
    { k:'C', en:`Turn on AWS Config for the organization. Deploy a conformance pack that uses the s3-bucket-ssl-requests-only managed rule and an AWS Systems Manager Automation runbook. Use a runbook that adds a bucket policy statement to deny access to an S3 bucket when the value of the aws:SecureTransport condition key is false.`, ko:`조직에 대한 AWS Config를 켭니다. s3-bucket-ssl-requests-only 관리형 규칙과 AWS Systems Manager Automation 런북을 사용하는 준수 팩을 배포합니다. aws:SecureTransport 조건 키 값이 false일 때 S3 버킷에 대한 액세스를 거부하는 버킷 정책 문을 추가하는 런북을 사용합니다.` },
    { k:'D', en:`Turn on AWS Config for the organization. Deploy a conformance pack that uses the s3-bucket-ssl-requests-only managed rule and an AWS Systems Manager Automation runbook. Use a runbook that adds a bucket policy statement to deny access to an S3 bucket when the value of the s3:x-amz-server-side-encryption-aws-kms-key-id condition key is null.`, ko:`조직에 대한 AWS Config를 켭니다. s3-bucket-ssl-requests-only 관리형 규칙과 AWS Systems Manager Automation 런북을 사용하는 준수 팩을 배포합니다. s3:x-amz-server-side-encryption-aws-kms-key-id 조건 키의 값이 null일 때 S3 버킷에 대한 액세스를 거부하는 버킷 정책 문을 추가하는 런북을 사용합니다.` },
  ],
  answer: ['C'],
  vote: '96% C',
  explain: `<p><span class="mark-ok">✅ C — 핵심 이유</span></p>
<p><strong>전송 중 암호화(encryption in transit)</strong>는 HTTPS/TLS를 의미합니다. <code>aws:SecureTransport</code> 조건 키가 <code>false</code>일 때(HTTP 요청 시) 액세스를 거부하면 S3 버킷에 HTTPS 연결만 허용됩니다. AWS Config의 <code>s3-bucket-ssl-requests-only</code> 관리형 규칙으로 규정 준수를 감지하고 SSM Automation 런북으로 자동 수정합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A, B</span> — Network Firewall은 S3 버킷 정책 수준의 제어가 아니며 기존 모든 버킷에 적용하기 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — <code>s3:x-amz-server-side-encryption-aws-kms-key-id</code>는 저장 데이터(at-rest) 암호화를 위한 키이며, 전송 중 암호화와 무관합니다.</p>`,
  disc: [{ ans:'C (96%)', txt:'전송 중 암호화 = aws:SecureTransport. Config + 준수 팩 + SSM Automation으로 자동 감지 및 수정.' }]
},
{
  n: 194,
  en: `A company is reviewing its IAM policies. One policy written by the DevOps engineer has been flagged as too permissive. The policy is used by an AWS Lambda function that issues a stop command to Amazon EC2 instances tagged with Environment: NonProduction over the weekend. The current policy has "Action": "ec2:*" and "Resource": "*" with no conditions.<br><br>What changes should the engineer make to achieve a policy of least permission? (Choose three.)`,
  ko: `한 회사가 IAM 정책을 검토하고 있습니다. DevOps 엔지니어가 작성한 정책 중 하나가 너무 관대한 것으로 표시되었습니다. 이 정책은 주말에 Environment: NonProduction 태그가 지정된 Amazon EC2 인스턴스에 중지 명령을 내리는 AWS Lambda 함수에서 사용됩니다. 현재 정책은 "Action": "ec2:*", "Resource": "*"이며 조건이 없습니다.<br><br>최소 권한 정책을 달성하기 위해 엔지니어는 어떤 변경을 해야 합니까? (세 가지를 선택하세요.)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Add a condition that limits the principal to the specific Lambda function ARN (aws:PrincipalArn).`, ko:`주체를 특정 Lambda 함수 ARN으로 제한하는 조건(aws:PrincipalArn)을 추가합니다.` },
    { k:'B', en:`Change "Resource": "*" to "Resource": "arn:aws:ec2:*:*:instance/*"`, ko:`"Resource": "*"를 "Resource": "arn:aws:ec2:*:*:instance/*"로 변경합니다.` },
    { k:'C', en:`Add a condition that requires the aws:ResourceTag/Environment key to equal any value (StringLike).`, ko:`aws:ResourceTag/Environment 키가 임의의 값과 같아야 하는 조건(StringLike)을 추가합니다.` },
    { k:'D', en:`Add a condition that requires the aws:ResourceTag/Environment key to equal "NonProduction".`, ko:`aws:ResourceTag/Environment 키가 "NonProduction"과 같아야 하는 조건을 추가합니다.` },
    { k:'E', en:`Change "Action": "ec2:*" to "Action": "ec2:StopInstances"`, ko:`"Action": "ec2:*"를 "Action": "ec2:StopInstances"로 변경합니다.` },
    { k:'F', en:`Add a condition that restricts actions to weekends only (aws:CurrentTime condition key).`, ko:`작업을 주말로만 제한하는 조건(aws:CurrentTime 조건 키)을 추가합니다.` },
  ],
  answer: ['B','D','E'],
  vote: '60% B+D+E',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>리소스를 EC2 인스턴스 ARN 패턴으로 제한하여 최소 권한 원칙을 적용합니다.</p>
<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p><code>aws:ResourceTag/Environment: NonProduction</code> 조건으로 NonProduction 태그가 있는 인스턴스만 대상으로 제한합니다.</p>
<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p>모든 EC2 작업 대신 <code>ec2:StopInstances</code>만 허용하여 필요한 최소 작업으로 제한합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — IAM 정책에서 Principal 조건 키는 리소스 기반 정책에 사용됩니다. IAM 자격증명 기반 정책에서는 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 임의의 값을 허용하면 NonProduction 이외 환경의 인스턴스에도 권한이 부여됩니다.</p>
<p><span class="mark-no">❌ F</span> — 주말 제한은 선택적 강화이며 필수 최소 권한이 아닙니다.</p>`,
  disc: [{ ans:'B+D+E 다수 지지', txt:'리소스를 EC2 인스턴스로 제한(B) + NonProduction 태그 조건(D) + StopInstances만 허용(E).' }]
},
{
  n: 195,
  en: `A company is developing an application that will generate log events. The log events consist of five distinct metrics every one tenth of a second and produce a large amount of data.<br><br>The company needs to configure the application to write the logs to Amazon Timestream. The company will configure a daily query against the Timestream table.<br><br>Which combination of steps will meet these requirements with the FASTEST query performance? (Choose three.)`,
  ko: `한 회사가 로그 이벤트를 생성하는 애플리케이션을 개발하고 있습니다. 로그 이벤트는 1/10초마다 5개의 고유한 메트릭으로 구성되며 많은 양의 데이터를 생성합니다.<br><br>회사는 Amazon Timestream에 로그를 쓰도록 애플리케이션을 구성해야 합니다. 회사는 Timestream 테이블에 대한 일일 쿼리를 구성합니다.<br><br>가장 빠른 쿼리 성능으로 이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (세 가지를 선택하세요.)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Use batch writes to write multiple log events in a single write operation.`, ko:`일괄 쓰기를 사용하여 단일 쓰기 작업으로 여러 로그 이벤트를 씁니다.` },
    { k:'B', en:`Write each log event as a single write operation.`, ko:`각 로그 이벤트를 단일 쓰기 작업으로 작성합니다.` },
    { k:'C', en:`Treat each log as a single-measure record.`, ko:`각 로그를 단일 측정 레코드로 처리합니다.` },
    { k:'D', en:`Treat each log as a multi-measure record.`, ko:`각 로그를 다중 측정 레코드로 처리합니다.` },
    { k:'E', en:`Configure the memory store retention period to be longer than the magnetic store retention period.`, ko:`메모리 저장소 보존 기간을 자기 저장소 보존 기간보다 길게 구성합니다.` },
    { k:'F', en:`Configure the memory store retention period to be shorter than the magnetic store retention period.`, ko:`메모리 저장소 보존 기간을 자기 저장소 보존 기간보다 짧게 구성합니다.` },
  ],
  answer: ['A','D','F'],
  vote: '67% ADF',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p><strong>일괄 쓰기(batch writes)</strong>는 네트워크 오버헤드를 줄이고 처리량을 향상시킵니다.</p>
<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p><strong>다중 측정 레코드(multi-measure record)</strong>는 단일 측정 레코드에 비해 대부분의 쿼리 유형에서 낮은 쿼리 지연 시간을 제공합니다. 5개 메트릭을 하나의 레코드로 묶어 레코드 수를 줄입니다.</p>
<p><span class="mark-ok">✅ F — 핵심 이유</span></p>
<p>메모리 저장소 보존 기간을 짧게 구성하면 자기 저장소에 데이터가 빠르게 이동합니다. 자기 저장소는 분석 쿼리에 최적화되어 있으며, 일일 쿼리는 자기 저장소에서 더 빠르게 수행됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 단일 쓰기는 높은 오버헤드를 유발합니다.</p>
<p><span class="mark-no">❌ C</span> — 단일 측정 레코드는 5개 메트릭을 5개의 레코드로 분리하여 쿼리 효율이 낮습니다.</p>
<p><span class="mark-no">❌ E</span> — 메모리 저장소에 데이터를 오래 유지하면 비용은 증가하지만 일일 쿼리 성능에는 도움이 되지 않습니다.</p>`,
  disc: [{ ans:'ADF (67%), ADE (19%)', txt:'Timestream 최적: 배치 쓰기 + 다중 측정 레코드 + 자기 저장소 중심 보존 전략.' }]
},
{
  n: 196,
  en: `A DevOps engineer has created an AWS CloudFormation template that deploys an application on Amazon EC2 instances. The EC2 instances run Amazon Linux. The application is deployed to the EC2 instances by using shell scripts that contain user data. The EC2 instances have an IAM instance profile that has an IAM role with the AmazonSSMManagedinstanceCore managed policy attached.<br><br>The DevOps engineer has modified the user data in the CloudFormation template to install a new version of the application. The engineer has also applied the stack update. However, the application was not updated on the running EC2 instances. The engineer needs to ensure that the changes to the application are installed on the running EC2 instances.<br><br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `DevOps 엔지니어가 Amazon EC2 인스턴스에 애플리케이션을 배포하는 AWS CloudFormation 템플릿을 생성했습니다. EC2 인스턴스는 Amazon Linux를 실행합니다. 애플리케이션은 사용자 데이터가 포함된 셸 스크립트를 사용하여 EC2 인스턴스에 배포됩니다. EC2 인스턴스에는 AmazonSSMManagedinstanceCore 관리형 정책이 연결된 IAM 역할이 있는 IAM 인스턴스 프로필이 있습니다.<br><br>DevOps 엔지니어는 새 버전의 애플리케이션을 설치하기 위해 CloudFormation 템플릿의 사용자 데이터를 수정했습니다. 엔지니어는 또한 스택 업데이트를 적용했습니다. 그러나 실행 중인 EC2 인스턴스에서 애플리케이션이 업데이트되지 않았습니다. 엔지니어는 애플리케이션의 변경 사항이 실행 중인 EC2 인스턴스에 설치되었는지 확인해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (두 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Configure the user data content to use the Multipurpose Internet Mail Extensions (MIME) multipart format. Set the scripts-user parameter to always in the text/cloud-config section.`, ko:`Multipurpose Internet Mail Extensions(MIME) 멀티파트 형식을 사용하도록 사용자 데이터 콘텐츠를 구성합니다. text/cloud-config 섹션에서 scripts-user 파라미터를 always로 설정합니다.` },
    { k:'B', en:`Refactor the user data commands to use the cfn-init helper script. Update the user data to install and configure the cfn-hup and cfn-init helper scripts to monitor and apply the metadata changes.`, ko:`cfn-init 헬퍼 스크립트를 사용하도록 사용자 데이터 명령을 리팩토링합니다. 사용자 데이터를 업데이트하여 cfn-hup 및 cfn-init 헬퍼 스크립트를 설치 및 구성하여 메타데이터 변경 사항을 모니터링하고 적용합니다.` },
    { k:'C', en:`Configure an EC2 launch template for the EC2 instances. Create a new EC2 Auto Scaling group. Associate the Auto Scaling group with the EC2 launch template. Use the AutoScalingScheduledAction update policy for the Auto Scaling group.`, ko:`EC2 인스턴스에 대한 EC2 시작 템플릿을 구성합니다. 새 EC2 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹을 EC2 시작 템플릿과 연결합니다. Auto Scaling 그룹에 대해 AutoScalingScheduledAction 업데이트 정책을 사용합니다.` },
    { k:'D', en:`Refactor the user data commands to use an AWS Systems Manager document (SSM document). Add an AWS CLI command in the user data to use Systems Manager Run Command to apply the SSM document to the EC2 instances.`, ko:`AWS Systems Manager 문서(SSM 문서)를 사용하도록 사용자 데이터 명령을 리팩토링합니다. 사용자 데이터에 AWS CLI 명령을 추가하여 Systems Manager Run Command를 사용하여 SSM 문서를 EC2 인스턴스에 적용합니다.` },
    { k:'E', en:`Refactor the user data command to use an AWS Systems Manager document (SSM document). Use Systems Manager State Manager to create an association between the SSM document and the EC2 instances.`, ko:`AWS Systems Manager 문서(SSM 문서)를 사용하도록 사용자 데이터 명령을 리팩토링합니다. Systems Manager State Manager를 사용하여 SSM 문서와 EC2 인스턴스 간의 연결을 생성합니다.` },
  ],
  answer: ['B','E'],
  vote: '71% BE',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p><strong>cfn-init</strong>는 CloudFormation 메타데이터 변경을 EC2 인스턴스에 적용하는 헬퍼 스크립트입니다. <strong>cfn-hup</strong>는 스택 메타데이터 변경을 감지하여 cfn-init를 자동으로 재실행합니다. 이를 통해 CloudFormation 스택 업데이트 시 실행 중인 인스턴스에도 변경이 적용됩니다.</p>
<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p><strong>SSM State Manager의 연결(Association)</strong>은 SSM 문서와 EC2 인스턴스를 지속적으로 연결하여 구성이 항상 적용되도록 합니다. 새 SSM 문서 버전 배포 시 자동으로 실행 중인 인스턴스에 적용됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — MIME 멀티파트는 초기 부팅 시에만 적용되며 실행 중 인스턴스 업데이트에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Auto Scaling 그룹 생성은 요구사항과 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — 사용자 데이터의 Run Command는 초기 시작 시에만 실행되어 실행 중 인스턴스를 업데이트하지 않습니다.</p>`,
  disc: [{ ans:'BE (71%), BD (25%)', txt:'cfn-hup+cfn-init(B)로 CloudFormation 메타데이터 변경 감지+적용, State Manager 연결(E)로 SSM 문서 지속 적용.' }]
},
{
  n: 197,
  en: `A company is refactoring applications to use AWS. The company identifies an internal web application that needs to make Amazon S3 API calls in a specific AWS account.<br><br>The company wants to use its existing identity provider (IdP) auth.company.com for authentication. The IdP supports only OpenID Connect (OIDC). A DevOps engineer needs to secure the web application's access to the AWS account.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `한 회사가 AWS를 사용하도록 애플리케이션을 리팩토링하고 있습니다. 회사는 특정 AWS 계정에서 Amazon S3 API 호출을 해야 하는 내부 웹 애플리케이션을 식별합니다.<br><br>회사는 인증에 기존 ID 공급자(IdP) auth.company.com을 사용하려고 합니다. IdP는 OpenID Connect(OIDC)만 지원합니다. DevOps 엔지니어는 AWS 계정에 대한 웹 애플리케이션의 액세스를 보호해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (세 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 3,
  choices: [
    { k:'A', en:`Configure AWS IAM Identity Center (AWS Single Sign-On). Configure an IdP. Upload the IdP metadata from the existing IdP.`, ko:`AWS IAM Identity Center(AWS Single Sign-On)를 구성합니다. IdP를 구성합니다. 기존 IdP에서 IdP 메타데이터를 업로드합니다.` },
    { k:'B', en:`Create an IAM IdP by using the provider URL, audience, and signature from the existing IdP.`, ko:`기존 IdP의 공급자 URL, 대상 및 서명을 사용하여 IAM IdP를 생성합니다.` },
    { k:'C', en:`Create an IAM role that has a policy that allows the necessary S3 actions. Configure the role's trust policy to allow the OIDC IdP to assume the role if the sts.amazon.com:aud context key is appid_from_idp.`, ko:`필요한 S3 작업을 허용하는 정책이 있는 IAM 역할을 생성합니다. sts.amazon.com:aud 컨텍스트 키가 appid_from_idp인 경우 OIDC IdP가 역할을 맡을 수 있도록 역할의 신뢰 정책을 구성합니다.` },
    { k:'D', en:`Create an IAM role that has a policy that allows the necessary S3 actions. Configure the role's trust policy to allow the OIDC IdP to assume the role if the auth.company.com:aud context key is appid_from_idp.`, ko:`필요한 S3 작업을 허용하는 정책이 있는 IAM 역할을 생성합니다. auth.company.com:aud 컨텍스트 키가 appid_from_idp인 경우 OIDC IdP가 역할을 맡을 수 있도록 역할의 신뢰 정책을 구성합니다.` },
    { k:'E', en:`Configure the web application to use the AssumeRoleWithWebIdentity API operation to retrieve temporary credentials. Use the temporary credentials to make the S3 API calls.`, ko:`AssumeRoleWithWebIdentity API 작업을 사용하여 임시 자격 증명을 검색하도록 웹 애플리케이션을 구성합니다. 임시 자격 증명을 사용하여 S3 API 호출을 수행합니다.` },
    { k:'F', en:`Configure the web application to use the GetFederationToken API operation to retrieve temporary credentials. Use the temporary credentials to make the S3 API calls.`, ko:`GetFederationToken API 작업을 사용하여 임시 자격 증명을 검색하도록 웹 애플리케이션을 구성합니다. 임시 자격 증명을 사용하여 S3 API 호출을 수행합니다.` },
  ],
  answer: ['B','D','E'],
  vote: '73% BDE',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>기존 OIDC IdP를 AWS에 등록하려면 <strong>IAM OIDC IdP</strong>를 생성해야 합니다. 공급자 URL과 대상(audience) 정보를 사용합니다.</p>
<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>OIDC 신뢰 정책의 조건 키는 <strong>IdP URL:aud</strong> 형식입니다. auth.company.com이 IdP이므로 <code>auth.company.com:aud</code>를 사용합니다.</p>
<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p><strong>AssumeRoleWithWebIdentity</strong>는 웹 기반 IdP(OIDC 포함)로 인증된 사용자를 위한 임시 자격 증명 획득 API입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — IAM Identity Center는 멀티 계정 관리와 SSO를 위한 서비스이며 이 시나리오에는 과도합니다.</p>
<p><span class="mark-no">❌ C</span> — <code>sts.amazonaws.com:aud</code>는 OIDC 조건 키 형식이 아닙니다.</p>
<p><span class="mark-no">❌ F</span> — GetFederationToken은 SAML 페더레이션에 사용되며 OIDC에 직접 사용되지 않습니다.</p>`,
  disc: [{ ans:'BDE (73%)', txt:'OIDC 패턴: IAM OIDC IdP 생성(B) + auth.company.com:aud 신뢰 정책(D) + AssumeRoleWithWebIdentity(E).' }]
},
{
  n: 198,
  en: `A company uses Amazon RDS for all databases in its AWS accounts. The company uses AWS Control Tower to build a landing zone that has an audit and logging account. All databases must be encrypted at rest for compliance reasons. The company's security engineer needs to receive notification about any noncompliant databases that are in the company's accounts.<br><br>Which solution will meet these requirements with the MOST operational efficiency?`,
  ko: `한 회사가 AWS 계정의 모든 데이터베이스에 Amazon RDS를 사용합니다. 회사는 AWS Control Tower를 사용하여 감사 및 로깅 계정이 있는 랜딩 존을 구축합니다. 모든 데이터베이스는 규정 준수를 위해 휴면 상태에서 암호화되어야 합니다. 회사의 보안 엔지니어는 회사 계정에 있는 모든 비준수 데이터베이스에 대한 알림을 받아야 합니다.<br><br>가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS Control Tower to activate the optional detective control (guardrail) to determine whether the RDS storage is encrypted. Create an Amazon Simple Notification Service (Amazon SNS) topic in the company's audit account. Create an Amazon EventBridge rule to filter noncompliant events from the AWS Control Tower control (guardrail) to notify the SNS topic. Subscribe the security engineer's email address to the SNS topic.`, ko:`AWS Control Tower를 사용하여 RDS 스토리지가 암호화되었는지 확인하기 위해 선택적 탐지 제어(가드레일)를 활성화합니다. 회사의 감사 계정에서 Amazon SNS 토픽을 생성합니다. AWS Control Tower 제어(가드레일)에서 비준수 이벤트를 필터링하여 SNS 토픽에 알리는 Amazon EventBridge 규칙을 생성합니다. 보안 엔지니어의 이메일 주소를 SNS 토픽에 구독합니다.` },
    { k:'B', en:`Use AWS CloudFormation StackSets to deploy AWS Lambda functions to every account. Write the Lambda function code to determine whether the RDS storage is encrypted in the account the function is deployed to. Send the findings as an Amazon CloudWatch metric to the management account. Create an Amazon Simple Notification Service (Amazon SNS) topic. Create a CloudWatch alarm that notifies the SNS topic when metric thresholds are met. Subscribe the security engineer's email address to the SNS topic.`, ko:`AWS CloudFormation StackSets를 사용하여 모든 계정에 AWS Lambda 함수를 배포합니다. Lambda 함수 코드를 작성하여 함수가 배포된 계정에서 RDS 스토리지가 암호화되었는지 확인합니다. 결과를 Amazon CloudWatch 메트릭으로 관리 계정에 보냅니다. Amazon SNS 토픽을 생성합니다. 메트릭 임계값에 도달하면 SNS 토픽에 알리는 CloudWatch 알람을 생성합니다. 보안 엔지니어의 이메일 주소를 SNS 토픽에 구독합니다.` },
    { k:'C', en:`Create a custom AWS Config rule in every account to determine whether the RDS storage is encrypted. Create an Amazon Simple Notification Service (Amazon SNS) topic in the audit account. Create an Amazon EventBridge rule to filter noncompliant events from the AWS Control Tower control (guardrail) to notify the SNS topic. Subscribe the security engineer's email address to the SNS topic.`, ko:`모든 계정에서 사용자 지정 AWS Config 규칙을 생성하여 RDS 스토리지가 암호화되었는지 확인합니다. 감사 계정에서 Amazon SNS 토픽을 생성합니다. AWS Control Tower 제어(가드레일)에서 비준수 이벤트를 필터링하여 SNS 토픽에 알리는 Amazon EventBridge 규칙을 생성합니다. 보안 엔지니어의 이메일 주소를 SNS 토픽에 구독합니다.` },
    { k:'D', en:`Launch an Amazon EC2 instance. Run an hourly cron job by using the AWS CLI to determine whether the RDS storage is encrypted in each AWS account. Store the results in an RDS database. Notify the security engineer by sending email messages from the EC2 instance when noncompliance is detected.`, ko:`Amazon EC2 인스턴스를 시작합니다. AWS CLI를 사용하여 매시간 cron 작업을 실행하여 각 AWS 계정에서 RDS 스토리지가 암호화되었는지 확인합니다. 결과를 RDS 데이터베이스에 저장합니다. 비준수가 감지되면 EC2 인스턴스에서 이메일 메시지를 보내 보안 엔지니어에게 알립니다.` },
  ],
  answer: ['A'],
  vote: '71% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>AWS Control Tower에는 <strong>RDS 스토리지 암호화 여부를 확인하는 내장 가드레일</strong>이 있습니다. 이를 활성화하면 모든 계정에 자동으로 적용됩니다. EventBridge + SNS로 비준수 알림을 설정하면 최소 운영 오버헤드로 요구사항을 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 각 계정에 Lambda 함수를 배포하는 것은 높은 운영 오버헤드를 요구합니다.</p>
<p><span class="mark-no">❌ C</span> — 모든 계정에서 개별 Config 규칙을 생성하는 것은 Control Tower 내장 가드레일보다 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 + cron 방식은 가장 낮은 운영 효율입니다.</p>`,
  disc: [{ ans:'A (71%), C (29%)', txt:'Control Tower 내장 RDS 암호화 가드레일(A) 활성화가 가장 효율적. C도 유효하나 모든 계정에 개별 Config 규칙 생성이 필요.' }]
},
{
  n: 199,
  en: `A company is migrating from its on-premises data center to AWS. The company currently uses a custom on-premises CI/CD pipeline solution to build and package software.<br><br>The company wants its software packages and dependent public repositories to be available in AWS CodeArtifact to facilitate the creation of application-specific pipelines.<br><br>Which combination of steps should the company take to update the CI/CD pipeline solution and to configure CodeArtifact with the LEAST operational overhead? (Choose two.)`,
  ko: `한 회사가 온프레미스 데이터 센터에서 AWS로 마이그레이션하고 있습니다. 회사는 현재 소프트웨어를 빌드하고 패키징하기 위해 맞춤형 온프레미스 CI/CD 파이프라인 솔루션을 사용하고 있습니다.<br><br>회사는 소프트웨어 패키지와 종속 퍼블릭 리포지토리를 AWS CodeArtifact에서 사용할 수 있도록 하여 애플리케이션별 파이프라인을 쉽게 만들고자 합니다.<br><br>최소한의 운영 오버헤드로 CI/CD 파이프라인 솔루션을 업데이트하고 CodeArtifact를 구성하기 위해 회사가 취해야 할 단계의 조합은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Update the CI/CD pipeline to create a VM image that contains newly packaged software. Use AWS Import/Export to make the VM image available as an Amazon EC2 AMI. Launch the AMI with an attached IAM instance profile that allows CodeArtifact actions. Use AWS CLI commands to publish the packages to a CodeArtifact repository.`, ko:`새로 패키징된 소프트웨어가 포함된 VM 이미지를 생성하도록 CI/CD 파이프라인을 업데이트합니다. AWS Import/Export를 사용하여 VM 이미지를 Amazon EC2 AMI로 제공합니다. CodeArtifact 작업을 허용하는 연결된 IAM 인스턴스 프로필로 AMI를 시작합니다. AWS CLI 명령을 사용하여 패키지를 CodeArtifact 리포지토리에 게시합니다.` },
    { k:'B', en:`Create an AWS Identity and Access Management Roles Anywhere trust anchor. Create an IAM role that allows CodeArtifact actions and that has a trust relationship on the trust anchor. Update the on-premises CI/CD pipeline to assume the new IAM role and to publish the packages to CodeArtifact.`, ko:`AWS Identity and Access Management Roles Anywhere 신뢰 앵커를 생성합니다. CodeArtifact 작업을 허용하고 신뢰 앵커에 신뢰 관계가 있는 IAM 역할을 생성합니다. 새 IAM 역할을 맡고 패키지를 CodeArtifact에 게시하도록 온프레미스 CI/CD 파이프라인을 업데이트합니다.` },
    { k:'C', en:`Create a new Amazon S3 bucket. Generate a presigned URL that allows the PutObject request. Update the on-premises CI/CD pipeline to use the presigned URL to publish the packages from the on-premises location to the S3 bucket. Create an AWS Lambda function that runs when packages are created in the bucket through a put command. Configure the Lambda function to publish the packages to CodeArtifact.`, ko:`새 Amazon S3 버킷을 생성합니다. PutObject 요청을 허용하는 미리 서명된 URL을 생성합니다. 미리 서명된 URL을 사용하여 온프레미스 위치에서 S3 버킷으로 패키지를 게시하도록 온프레미스 CI/CD 파이프라인을 업데이트합니다. put 명령을 통해 버킷에서 패키지가 생성될 때 실행되는 AWS Lambda 함수를 생성합니다. Lambda 함수를 구성하여 CodeArtifact에 패키지를 게시합니다.` },
    { k:'D', en:`For each public repository, create a CodeArtifact repository that is configured with an external connection. Configure the dependent repositories as upstream public repositories.`, ko:`각 퍼블릭 리포지토리에 대해 외부 연결로 구성된 CodeArtifact 리포지토리를 생성합니다. 종속 리포지토리를 업스트림 퍼블릭 리포지토리로 구성합니다.` },
    { k:'E', en:`Create a CodeArtifact repository that is configured with a set of external connections to the public repositories. Configure the external connections to be downstream of the repository.`, ko:`퍼블릭 리포지토리에 대한 외부 연결 세트로 구성된 CodeArtifact 리포지토리를 생성합니다. 외부 연결을 리포지토리의 다운스트림으로 구성합니다.` },
  ],
  answer: ['B','D'],
  vote: '95% BD',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p><strong>AWS IAM Roles Anywhere</strong>를 사용하면 온프레미스 서버가 X.509 인증서를 통해 IAM 역할을 수임하고 임시 AWS 자격 증명을 획득할 수 있습니다. VM이나 S3 버킷 같은 추가 인프라 없이 온프레미스 CI/CD에서 직접 CodeArtifact에 패키지를 게시할 수 있습니다.</p>
<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>CodeArtifact의 모범 사례는 <strong>공개 리포지토리마다 외부 연결이 있는 CodeArtifact 리포지토리</strong>를 생성하고, 이를 업스트림으로 구성하는 것입니다. CodeArtifact가 자동으로 미러링 및 캐싱을 처리합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — VM 이미지 생성 및 가져오기는 높은 복잡성과 운영 오버헤드를 요구합니다.</p>
<p><span class="mark-no">❌ C</span> — S3 + Lambda 중간 단계는 불필요한 복잡성을 추가합니다.</p>
<p><span class="mark-no">❌ E</span> — CodeArtifact에는 다운스트림 개념이 없습니다. 외부 연결은 항상 업스트림으로 구성합니다.</p>`,
  disc: [{ ans:'BD (95%)', txt:'온프레미스 → CodeArtifact: IAM Roles Anywhere(B). 퍼블릭 리포지토리: 외부 연결 + 업스트림(D).' }]
},
{
  n: 200,
  en: `A DevOps team uses AWS CodePipeline, AWS CodeBuild, and AWS CodeDeploy to deploy an application. The application is a REST API that uses AWS Lambda functions and Amazon API Gateway. Recent deployments have introduced errors that have affected many customers.<br><br>The DevOps team needs a solution that reverts to the most recent stable version of the application when an error is detected. The solution must affect the fewest customers possible.<br><br>Which solution will meet these requirements with the MOST operational efficiency?`,
  ko: `DevOps 팀이 AWS CodePipeline, AWS CodeBuild, AWS CodeDeploy를 사용하여 애플리케이션을 배포합니다. 이 애플리케이션은 AWS Lambda 함수와 Amazon API Gateway를 사용하는 REST API입니다. 최근 배포에서 많은 고객에게 영향을 미치는 오류가 발생했습니다.<br><br>DevOps 팀은 오류가 감지되면 가장 최신의 안정적인 버전의 애플리케이션으로 돌아가는 솔루션이 필요합니다. 솔루션은 가능한 한 적은 고객에게 영향을 미쳐야 합니다.<br><br>가장 높은 운영 효율성으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Set the deployment configuration in CodeDeploy to LambdaAllAtOnce. Configure automatic rollbacks on the deployment group. Create an Amazon CloudWatch alarm that detects HTTP Bad Gateway errors on API Gateway. Configure the deployment group to roll back when the number of alarms meets the alarm threshold.`, ko:`CodeDeploy에서 배포 구성을 LambdaAllAtOnce로 설정합니다. 배포 그룹에서 자동 롤백을 구성합니다. API Gateway에서 HTTP Bad Gateway 오류를 감지하는 Amazon CloudWatch 알람을 생성합니다. 알람 수가 알람 임계값에 도달하면 롤백하도록 배포 그룹을 구성합니다.` },
    { k:'B', en:`Set the deployment configuration in CodeDeploy to LambdaCanary10Percent10Minutes. Configure automatic rollbacks on the deployment group. Create an Amazon CloudWatch alarm that detects HTTP Bad Gateway errors on API Gateway. Configure the deployment group to roll back when the number of alarms meets the alarm threshold.`, ko:`CodeDeploy에서 배포 구성을 LambdaCanary10Percent10Minutes로 설정합니다. 배포 그룹에서 자동 롤백을 구성합니다. API Gateway에서 HTTP Bad Gateway 오류를 감지하는 Amazon CloudWatch 알람을 생성합니다. 알람 수가 알람 임계값에 도달하면 롤백하도록 배포 그룹을 구성합니다.` },
    { k:'C', en:`Set the deployment configuration in CodeDeploy to LambdaAllAtOnce. Configure manual rollbacks on the deployment group. Create an Amazon Simple Notification Service (Amazon SNS) topic to send notifications every time a deployment fails. Configure the SNS topic to invoke a new Lambda function that stops the current deployment and starts the most recent successful deployment.`, ko:`CodeDeploy에서 배포 구성을 LambdaAllAtOnce로 설정합니다. 배포 그룹에서 수동 롤백을 구성합니다. 배포가 실패할 때마다 알림을 보내도록 Amazon SNS 토픽을 생성합니다. 현재 배포를 중지하고 가장 최근에 성공한 배포를 시작하는 새 Lambda 함수를 호출하도록 SNS 토픽을 구성합니다.` },
    { k:'D', en:`Set the deployment configuration in CodeDeploy to LambdaCanary10Percent10Minutes. Configure manual rollbacks on the deployment group. Create a metric filter on an Amazon CloudWatch log group for API Gateway to monitor HTTP Bad Gateway errors. Configure the metric filter to invoke a new Lambda function that stops the current deployment and starts the most recent successful deployment.`, ko:`CodeDeploy에서 배포 구성을 LambdaCanary10Percent10Minutes로 설정합니다. 배포 그룹에서 수동 롤백을 구성합니다. API Gateway에 대한 Amazon CloudWatch 로그 그룹에 메트릭 필터를 생성하여 HTTP Bad Gateway 오류를 모니터링합니다. 현재 배포를 중지하고 가장 최근에 성공한 배포를 시작하는 새 Lambda 함수를 호출하도록 메트릭 필터를 구성합니다.` },
  ],
  answer: ['B'],
  vote: '94% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p><strong>LambdaCanary10Percent10Minutes</strong>는 처음 10분 동안 트래픽의 10%만 새 버전으로 전환합니다. 오류 발생 시 전체 고객이 아닌 10%만 영향을 받으며, CloudWatch 알람이 HTTP Bad Gateway 오류를 감지하면 <strong>자동 롤백</strong>이 트리거됩니다. 이를 통해 최소 고객 영향 + 자동 롤백 + 운영 효율을 모두 달성합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — LambdaAllAtOnce는 모든 트래픽을 한 번에 전환하여 오류 발생 시 모든 고객에게 영향을 미칩니다.</p>
<p><span class="mark-no">❌ C</span> — 수동 롤백은 자동화가 아니며, LambdaAllAtOnce는 최소 영향 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — 메트릭 필터는 Lambda를 직접 트리거할 수 없습니다. 또한 수동 롤백은 운영 효율이 낮습니다.</p>`,
  disc: [{ ans:'B (94%)', txt:'카나리 배포(10%) + CloudWatch 알람 + 자동 롤백 = 최소 고객 영향 + 자동화. LambdaAllAtOnce는 전체 영향.' }]
}
];
