window.QS_SET38 = [
{
  n: 371,
  en: `A company is implementing a CI/CD pipeline for a containerized application. The pipeline builds Docker images and pushes them to Amazon Elastic Container Registry (Amazon ECR). The company wants to ensure that only images that pass security scans are deployed to production. The company uses AWS CodePipeline for the pipeline.<br>Which solution will meet these requirements?`,
  ko: `회사는 컨테이너화된 애플리케이션을 위한 CI/CD 파이프라인을 구현하고 있습니다. 파이프라인은 Docker 이미지를 빌드하고 Amazon Elastic Container Registry(Amazon ECR)로 푸시합니다. 회사는 보안 스캔을 통과한 이미지만 프로덕션에 배포되도록 해야 합니다. 회사는 파이프라인에 AWS CodePipeline을 사용합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`After pushing the image to ECR, add a stage in the CodePipeline pipeline that invokes an AWS Lambda function to check the ECR image scan results. If critical vulnerabilities are found, configure the Lambda function to fail the pipeline. Proceed with deployment only if no critical vulnerabilities are found.`, ko:`이미지를 ECR에 푸시한 후 AWS Lambda 함수를 호출하여 ECR 이미지 스캔 결과를 확인하는 스테이지를 CodePipeline 파이프라인에 추가합니다. 중요 취약점이 발견되면 Lambda 함수가 파이프라인을 실패하도록 구성합니다. 중요 취약점이 발견되지 않은 경우에만 배포를 진행합니다.` },
    { k:'B', en:`Configure Amazon Inspector to scan ECR images. Create an Amazon EventBridge rule to detect Inspector findings. When critical findings are found, configure the rule to trigger an SNS notification but allow the deployment to continue.`, ko:`ECR 이미지를 스캔하도록 Amazon Inspector를 구성합니다. Inspector 결과를 감지하는 Amazon EventBridge 규칙을 생성합니다. 중요 결과가 발견되면 규칙이 SNS 알림을 트리거하도록 구성하지만 배포는 계속 진행합니다.` },
    { k:'C', en:`Add a manual approval stage in the CodePipeline pipeline after the ECR push. Require a security engineer to manually review ECR scan results before approving the deployment.`, ko:`ECR 푸시 후 CodePipeline 파이프라인에 수동 승인 스테이지를 추가합니다. 보안 엔지니어가 배포를 승인하기 전에 수동으로 ECR 스캔 결과를 검토하도록 요구합니다.` },
    { k:'D', en:`Configure ECR to run a scan when an image is pushed. Create an AWS Config rule to check that all ECR images have a scan status of <code>COMPLETE</code> with no critical findings before deployment.`, ko:`이미지가 푸시될 때 스캔을 실행하도록 ECR을 구성합니다. 배포 전에 모든 ECR 이미지의 스캔 상태가 중요 결과 없이 <code>COMPLETE</code>인지 확인하는 AWS Config 규칙을 생성합니다.` },
  ],
  answer: ['A'],
  vote: '87% A',
  explain: `<p><span class="mark-ok">✅ A — ECR 스캔 결과 확인 Lambda + 파이프라인 중단</span></p><p>ECR에 이미지 푸시 후 Lambda 함수로 스캔 결과를 프로그래매틱하게 확인하여 중요 취약점이 있으면 파이프라인을 실패시키는 방식이 완전 자동화된 게이트 역할을 합니다. ECR 이미지 스캔이 완료될 때까지 Lambda가 대기한 후 결과를 평가하고 CodePipeline에 성공/실패를 반환합니다. 보안 스캔을 통과한 이미지만 다음 스테이지(배포)로 진행됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — Inspector 결과에 대해 알림만 보내고 배포를 계속 허용하면 보안 스캔 통과 요구 사항을 충족하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 수동 승인은 자동화 요구 사항에 맞지 않고 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Config는 규정 준수 감사 도구로 파이프라인 게이트 역할을 하기 어렵습니다.</p>`,
  disc: [{ ans:'A (87%)', txt:'ECR 스캔 결과를 확인하는 Lambda가 파이프라인 게이트 역할을 하여 취약한 이미지의 프로덕션 배포를 자동 차단' }]
},
{
  n: 372,
  en: `A company manages a large number of AWS Lambda functions. The company wants to standardize logging across all Lambda functions to send structured logs to Amazon CloudWatch Logs. The company also wants to ensure that all new Lambda functions automatically use this logging configuration without requiring developers to add logging code to each function.<br>Which solution will meet these requirements with the LEAST development effort?`,
  ko: `회사는 많은 수의 AWS Lambda 함수를 관리합니다. 회사는 모든 Lambda 함수에서 구조화된 로그를 Amazon CloudWatch Logs로 보내도록 로깅을 표준화하려고 합니다. 또한 개발자가 각 함수에 로깅 코드를 추가할 필요 없이 모든 새 Lambda 함수가 자동으로 이 로깅 구성을 사용하도록 해야 합니다.<br>최소한의 개발 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS Lambda layer that contains a shared logging library. Attach the layer to all Lambda functions. Update all Lambda function code to import and use the shared logging library.`, ko:`공유 로깅 라이브러리가 포함된 AWS Lambda 레이어를 생성합니다. 모든 Lambda 함수에 레이어를 연결합니다. 공유 로깅 라이브러리를 가져와 사용하도록 모든 Lambda 함수 코드를 업데이트합니다.` },
    { k:'B', en:`Configure Lambda function URLs for all Lambda functions. Create an API Gateway that adds structured logging headers to all Lambda invocation requests. Configure CloudWatch Logs to parse the structured headers.`, ko:`모든 Lambda 함수에 대한 Lambda 함수 URL을 구성합니다. 모든 Lambda 호출 요청에 구조화된 로깅 헤더를 추가하는 API Gateway를 생성합니다. 구조화된 헤더를 구문 분석하도록 CloudWatch Logs를 구성합니다.` },
    { k:'C', en:`Enable AWS Lambda Advanced Logging Controls (ALC) for all Lambda functions. Configure the log format to JSON and set the log level to the desired level. Use CloudWatch Log Insights to query the structured JSON logs.`, ko:`모든 Lambda 함수에 대해 AWS Lambda 고급 로깅 컨트롤(ALC)을 활성화합니다. 로그 형식을 JSON으로 구성하고 로그 수준을 원하는 수준으로 설정합니다. 구조화된 JSON 로그를 쿼리하기 위해 CloudWatch Log Insights를 사용합니다.` },
    { k:'D', en:`Create an AWS CloudFormation template that includes logging configuration for Lambda functions. Require all developers to use this template when creating new Lambda functions. Add a pipeline validation step to verify the template is used.`, ko:`Lambda 함수에 대한 로깅 구성이 포함된 AWS CloudFormation 템플릿을 생성합니다. 모든 개발자가 새 Lambda 함수를 생성할 때 이 템플릿을 사용하도록 요구합니다. 템플릿이 사용되는지 확인하는 파이프라인 유효성 검사 단계를 추가합니다.` },
  ],
  answer: ['C'],
  vote: '84% C',
  explain: `<p><span class="mark-ok">✅ C — Lambda 고급 로깅 컨트롤(ALC)</span></p><p>AWS Lambda 고급 로깅 컨트롤(Advanced Logging Controls)은 Lambda 함수 수준에서 로그 형식(JSON/Text)과 로그 수준(DEBUG/INFO/WARN/ERROR/FATAL/TRACE)을 설정할 수 있는 기능입니다. JSON 형식으로 설정하면 코드 변경 없이 구조화된 로그가 자동으로 CloudWatch Logs로 전송됩니다. AWS Organizations 서비스 제어 정책(SCP)이나 AWS Config 규칙으로 이 설정을 강제할 수 있어 새 함수에도 자동 적용 가능합니다. 개발자가 코드를 수정할 필요가 없습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 레이어를 연결하더라도 각 함수의 코드를 수정해야 하므로 개발 노력이 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — API Gateway 접근 방식은 Lambda 함수 URL과의 조합이 복잡하고 요구 사항과 맞지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudFormation 템플릿 사용 강제는 거버넌스 측면에서 좋지만, 개발자 교육과 파이프라인 검증이 필요하여 오버헤드가 높습니다.</p>`,
  disc: [{ ans:'C (84%)', txt:'Lambda ALC는 코드 변경 없이 함수 설정만으로 구조화된 JSON 로깅을 표준화하는 가장 낮은 개발 노력 솔루션' }]
},
{
  n: 373,
  en: `A company has a multi-account AWS environment managed through AWS Organizations. The company's security team needs to audit all AWS API calls made across all accounts. The security team needs to store the audit logs centrally and ensure the logs cannot be deleted or modified by account administrators.<br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `회사는 AWS Organizations를 통해 관리되는 멀티 계정 AWS 환경을 보유하고 있습니다. 회사의 보안 팀은 모든 계정에서 수행된 모든 AWS API 호출을 감사해야 합니다. 보안 팀은 감사 로그를 중앙에 저장하고 계정 관리자가 로그를 삭제하거나 수정할 수 없도록 해야 합니다.<br>이 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Create an AWS CloudTrail organization trail in the management account. Configure the trail to log events from all accounts in the organization. Store the logs in an Amazon S3 bucket in a dedicated security account.`, ko:`관리 계정에서 AWS CloudTrail 조직 트레일을 생성합니다. 조직의 모든 계정에서 이벤트를 기록하도록 트레일을 구성합니다. 전용 보안 계정의 Amazon S3 버킷에 로그를 저장합니다.` },
    { k:'B', en:`Enable AWS Config in all member accounts. Configure Config to deliver configuration changes to a central S3 bucket. Enable multi-region recording for all accounts.`, ko:`모든 멤버 계정에서 AWS Config를 활성화합니다. 구성 변경 사항을 중앙 S3 버킷에 전달하도록 Config를 구성합니다. 모든 계정에 대해 다중 리전 기록을 활성화합니다.` },
    { k:'C', en:`Configure the S3 bucket that stores the CloudTrail logs with a bucket policy that denies <code>s3:DeleteObject</code> and <code>s3:PutObject</code> permissions to all principals except the CloudTrail service. Enable S3 Object Lock on the bucket.`, ko:`CloudTrail 로그를 저장하는 S3 버킷에 CloudTrail 서비스를 제외한 모든 보안 주체의 <code>s3:DeleteObject</code> 및 <code>s3:PutObject</code> 권한을 거부하는 버킷 정책을 구성합니다. 버킷에서 S3 객체 잠금을 활성화합니다.` },
    { k:'D', en:`Enable AWS CloudTrail log file validation for all trails. Store validation digests in a separate S3 bucket accessible only to the security team.`, ko:`모든 트레일에 대해 AWS CloudTrail 로그 파일 검증을 활성화합니다. 보안 팀만 액세스할 수 있는 별도의 S3 버킷에 검증 다이제스트를 저장합니다.` },
    { k:'E', en:`Create an AWS Config rule to detect when CloudTrail logging is disabled. Configure automatic remediation to re-enable CloudTrail when it is disabled.`, ko:`CloudTrail 로깅이 비활성화될 때 감지하는 AWS Config 규칙을 생성합니다. 비활성화될 때 CloudTrail을 다시 활성화하도록 자동 수정을 구성합니다.` },
  ],
  answer: ['A','C'],
  vote: '88% AC',
  explain: `<p><span class="mark-ok">✅ A — CloudTrail 조직 트레일 + 전용 보안 계정 S3</span></p><p>조직 트레일은 관리 계정에서 한 번만 설정하면 조직의 모든 현재 및 미래 계정의 API 호출을 자동으로 기록합니다. 로그를 전용 보안 계정의 S3 버킷에 저장하면 멤버 계정 관리자가 접근할 수 없습니다.</p>
<p><span class="mark-ok">✅ C — S3 버킷 정책 + S3 객체 잠금</span></p><p>버킷 정책으로 CloudTrail 서비스 외 모든 보안 주체의 삭제/수정을 거부하고, S3 객체 잠금(Object Lock)으로 WORM(Write Once Read Many) 정책을 적용하면 로그 불변성을 보장합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — AWS Config는 API 감사가 아닌 리소스 구성 변경 추적에 사용됩니다.</p>
<p><span class="mark-no">❌ D</span> — 로그 파일 검증은 무결성 확인에는 유용하지만 삭제/수정을 방지하지는 않습니다.</p>
<p><span class="mark-no">❌ E</span> — CloudTrail 재활성화 자동화는 보조 수단이지 로그 보호의 핵심이 아닙니다.</p>`,
  disc: [{ ans:'AC (88%)', txt:'조직 트레일로 중앙 집중 수집, 보안 계정 S3 + 버킷 정책 + 객체 잠금으로 로그 불변성 보장' }]
},
{
  n: 374,
  en: `A company has an application deployed across multiple AWS Regions. The company uses AWS Route 53 for DNS routing. The company wants to implement a disaster recovery (DR) strategy that automatically fails over to a secondary Region when the primary Region becomes unavailable. The company needs the failover to happen automatically without manual intervention and requires the RTO to be less than 5 minutes.<br>Which solution will meet these requirements?`,
  ko: `회사는 여러 AWS 리전에 걸쳐 애플리케이션을 배포했습니다. 회사는 DNS 라우팅에 AWS Route 53을 사용합니다. 회사는 기본 리전을 사용할 수 없게 될 때 자동으로 보조 리전으로 장애 조치하는 재해 복구(DR) 전략을 구현하려고 합니다. 장애 조치는 수동 개입 없이 자동으로 발생해야 하며 RTO가 5분 미만이어야 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure Route 53 health checks for the primary Region endpoints. Set up an Active-Passive failover routing policy in Route 53. Configure the health check to evaluate the primary Region's availability every 10 seconds. When the primary endpoint fails, Route 53 automatically routes traffic to the secondary Region.`, ko:`기본 리전 엔드포인트에 대한 Route 53 상태 확인을 구성합니다. Route 53에서 액티브-패시브 장애 조치 라우팅 정책을 설정합니다. 10초마다 기본 리전의 가용성을 평가하도록 상태 확인을 구성합니다. 기본 엔드포인트가 실패하면 Route 53이 자동으로 트래픽을 보조 리전으로 라우팅합니다.` },
    { k:'B', en:`Set up AWS Global Accelerator with both Regions as endpoint groups. Configure health checks on Global Accelerator to detect primary Region failures. When the primary Region fails, Global Accelerator automatically routes traffic to the secondary Region within seconds.`, ko:`두 리전을 엔드포인트 그룹으로 사용하여 AWS Global Accelerator를 설정합니다. Global Accelerator에서 기본 리전 오류를 감지하도록 상태 확인을 구성합니다. 기본 리전이 오류가 발생하면 Global Accelerator가 몇 초 내에 자동으로 트래픽을 보조 리전으로 라우팅합니다.` },
    { k:'C', en:`Create an Amazon EventBridge rule that detects CloudWatch alarms for the primary Region. Configure the rule to invoke an AWS Lambda function that updates Route 53 DNS records to point to the secondary Region when the primary fails.`, ko:`기본 리전에 대한 CloudWatch 경보를 감지하는 Amazon EventBridge 규칙을 생성합니다. 기본 리전이 오류가 발생할 때 Route 53 DNS 레코드를 보조 리전으로 업데이트하는 AWS Lambda 함수를 호출하도록 규칙을 구성합니다.` },
    { k:'D', en:`Use AWS CloudFormation StackSets to deploy the application in both Regions. Configure an AWS Systems Manager runbook to manually trigger failover when the primary Region fails. Set the RTO target in the runbook to 5 minutes.`, ko:`AWS CloudFormation StackSets를 사용하여 두 리전 모두에 애플리케이션을 배포합니다. 기본 리전이 오류가 발생할 때 수동으로 장애 조치를 트리거하는 AWS Systems Manager 런북을 구성합니다. 런북에서 RTO 목표를 5분으로 설정합니다.` },
  ],
  answer: ['A'],
  vote: '78% A',
  explain: `<p><span class="mark-ok">✅ A — Route 53 상태 확인 + 액티브-패시브 장애 조치</span></p><p>Route 53의 상태 확인(Health Check)을 10초 간격으로 구성하면 기본 리전이 사용 불가능해질 때 빠르게 감지합니다. Route 53의 장애 조치 라우팅 정책(Active-Passive)은 기본 엔드포인트 상태 확인 실패 시 자동으로 보조 리전으로 DNS를 전환합니다. Route 53의 최소 TTL 설정과 함께 5분 이내 RTO 달성이 가능합니다. 완전 자동화되어 수동 개입이 필요 없습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — AWS Global Accelerator도 유효한 솔루션이지만, Route 53 상태 확인이 이미 요구 사항(5분 RTO, 자동 장애 조치)을 충족하며 비용이 더 낮습니다.</p>
<p><span class="mark-no">❌ C</span> — EventBridge + Lambda + Route 53 업데이트 조합은 추가 구성과 Lambda 실행 지연이 있어 5분 RTO를 보장하기 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — 수동 런북은 "수동 개입 없이" 요구 사항에 위배됩니다.</p>`,
  disc: [{ ans:'A (78%)', txt:'Route 53 상태 확인 + 장애 조치 라우팅 정책은 DNS 기반 자동 장애 조치의 표준 솔루션으로 5분 이내 RTO 달성 가능' }]
},
{
  n: 375,
  en: `A company needs to migrate its on-premises Microsoft SQL Server databases to AWS. The company wants to replicate the databases to AWS with minimal downtime during the migration. The company also wants to continue running the application while the migration is in progress.<br>Which solution will meet these requirements?`,
  ko: `회사는 온프레미스 Microsoft SQL Server 데이터베이스를 AWS로 마이그레이션해야 합니다. 회사는 마이그레이션 중 최소한의 다운타임으로 데이터베이스를 AWS에 복제하려고 합니다. 또한 마이그레이션이 진행되는 동안 애플리케이션을 계속 실행하려고 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS Database Migration Service (AWS DMS) with a full load and change data capture (CDC) configuration. Create a replication instance and tasks to migrate the databases to Amazon RDS for SQL Server. Cut over to the new database when replication has caught up.`, ko:`전체 로드 및 변경 데이터 캡처(CDC) 구성으로 AWS Database Migration Service(AWS DMS)를 사용합니다. 복제 인스턴스와 태스크를 생성하여 데이터베이스를 Amazon RDS for SQL Server로 마이그레이션합니다. 복제가 따라잡으면 새 데이터베이스로 전환합니다.` },
    { k:'B', en:`Take a full backup of the on-premises SQL Server databases. Restore the backup to Amazon RDS for SQL Server. Update the application connection strings to point to the new RDS instance.`, ko:`온프레미스 SQL Server 데이터베이스의 전체 백업을 수행합니다. Amazon RDS for SQL Server에 백업을 복원합니다. 새 RDS 인스턴스를 가리키도록 애플리케이션 연결 문자열을 업데이트합니다.` },
    { k:'C', en:`Set up SQL Server log shipping from the on-premises database to Amazon RDS for SQL Server. Monitor the log shipping status and cut over when the logs are synchronized.`, ko:`온프레미스 데이터베이스에서 Amazon RDS for SQL Server로 SQL Server 로그 전달을 설정합니다. 로그 전달 상태를 모니터링하고 로그가 동기화되면 전환합니다.` },
    { k:'D', en:`Use AWS Server Migration Service (AWS SMS) to replicate the on-premises SQL Server to an Amazon EC2 instance. After replication is complete, upgrade the SQL Server edition if needed.`, ko:`AWS Server Migration Service(AWS SMS)를 사용하여 온프레미스 SQL Server를 Amazon EC2 인스턴스로 복제합니다. 복제가 완료된 후 필요한 경우 SQL Server 에디션을 업그레이드합니다.` },
  ],
  answer: ['A'],
  vote: '90% A',
  explain: `<p><span class="mark-ok">✅ A — AWS DMS 전체 로드 + CDC</span></p><p>AWS DMS(Database Migration Service)는 지속적 데이터 복제(CDC - Change Data Capture)를 지원하여 마이그레이션 중에도 소스 데이터베이스에서 발생하는 변경 사항을 실시간으로 대상으로 전달합니다. 전체 로드로 초기 데이터를 마이그레이션하고, CDC로 지속적으로 변경 사항을 동기화합니다. 애플리케이션이 계속 온프레미스 데이터베이스를 사용하면서 복제가 진행되며, 복제가 따라잡으면 짧은 다운타임으로 전환이 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 전체 백업 및 복원은 백업과 복원 사이의 데이터 변경 사항을 잃어버려 다운타임이 발생합니다.</p>
<p><span class="mark-no">❌ C</span> — SQL Server 로그 전달은 가능하지만 RDS for SQL Server에서 기본 지원이 제한적이며 DMS보다 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS SMS는 VM 기반 서버 마이그레이션용이며 데이터베이스 마이그레이션에 특화된 도구가 아닙니다.</p>`,
  disc: [{ ans:'A (90%)', txt:'DMS CDC로 마이그레이션 중 애플리케이션 지속 운영을 보장하고 최소 다운타임으로 전환하는 AWS 표준 데이터베이스 마이그레이션 방법' }]
},
{
  n: 376,
  en: `A company uses Amazon Kinesis Data Streams to ingest real-time data. An AWS Lambda function processes records from the stream and writes results to Amazon DynamoDB. The Lambda function is experiencing throttling errors because DynamoDB write capacity is insufficient. A DevOps engineer needs to resolve the throttling while minimizing cost and maintaining real-time processing.<br>Which solution will meet these requirements?`,
  ko: `회사는 Amazon Kinesis Data Streams를 사용하여 실시간 데이터를 수집합니다. AWS Lambda 함수는 스트림에서 레코드를 처리하고 결과를 Amazon DynamoDB에 씁니다. Lambda 함수는 DynamoDB 쓰기 용량이 부족하여 제한 오류를 겪고 있습니다. DevOps 엔지니어는 비용을 최소화하면서 실시간 처리를 유지하며 제한을 해결해야 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Increase the DynamoDB table's provisioned write capacity units (WCU) to handle peak loads. Monitor the consumed capacity with CloudWatch and adjust the WCU manually based on demand.`, ko:`최대 부하를 처리하기 위해 DynamoDB 테이블의 프로비저닝된 쓰기 용량 단위(WCU)를 늘립니다. CloudWatch로 소비된 용량을 모니터링하고 수요에 따라 수동으로 WCU를 조정합니다.` },
    { k:'B', en:`Switch the DynamoDB table to on-demand capacity mode. On-demand mode automatically scales to accommodate varying workload demands without throttling.`, ko:`DynamoDB 테이블을 온디맨드 용량 모드로 전환합니다. 온디맨드 모드는 제한 없이 다양한 워크로드 요구에 맞게 자동으로 확장됩니다.` },
    { k:'C', en:`Enable DynamoDB auto scaling on the table with a target utilization of 70%. Configure the auto scaling policy to scale up when write throttle events are detected.`, ko:`대상 사용률 70%로 테이블에서 DynamoDB 자동 조정을 활성화합니다. 쓰기 제한 이벤트가 감지될 때 확장하도록 자동 조정 정책을 구성합니다.` },
    { k:'D', en:`Add an Amazon SQS queue between the Lambda function and DynamoDB. Configure the Lambda function to send records to the SQS queue. Create a second Lambda function that reads from the SQS queue and writes to DynamoDB at a controlled rate.`, ko:`Lambda 함수와 DynamoDB 사이에 Amazon SQS 큐를 추가합니다. 레코드를 SQS 큐로 보내도록 Lambda 함수를 구성합니다. SQS 큐에서 읽고 제어된 속도로 DynamoDB에 쓰는 두 번째 Lambda 함수를 생성합니다.` },
  ],
  answer: ['B'],
  vote: '72% B',
  explain: `<p><span class="mark-ok">✅ B — DynamoDB 온디맨드 모드</span></p><p>DynamoDB 온디맨드 용량 모드는 트래픽 패턴에 자동으로 적응하여 제한(throttling) 없이 워크로드를 처리합니다. 프로비저닝된 용량을 수동으로 관리할 필요가 없으며, 실제 사용량에 따라 요금이 부과됩니다. 실시간 처리를 유지하면서 피크 트래픽도 제한 없이 처리 가능합니다. 비용 관점에서 항상 최고 용량을 프로비저닝하는 것보다 실제 사용량 기반 온디맨드가 더 효율적입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 수동 WCU 조정은 운영 오버헤드가 높고 과프로비저닝으로 비용이 높아질 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — Auto Scaling은 응답에 수 분이 걸려 급격한 트래픽 급증 시 여전히 제한이 발생할 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — SQS 버퍼링은 실시간 처리 요구 사항(Kinesis → Lambda → DynamoDB)에 추가 지연을 도입합니다.</p>`,
  disc: [{ ans:'B (72%)', txt:'온디맨드 모드는 자동 용량 관리로 제한을 완전 제거하고 실제 사용량 기반 과금으로 비용 효율적' }]
},
{
  n: 377,
  en: `A company wants to monitor its AWS infrastructure for security threats in real time. The company needs to detect unauthorized API calls, potentially compromised instances, and reconnaissance activities. The company wants to receive automated alerts when threats are detected.<br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `회사는 AWS 인프라에서 보안 위협을 실시간으로 모니터링하려고 합니다. 회사는 무단 API 호출, 잠재적으로 손상된 인스턴스, 정찰 활동을 감지해야 합니다. 회사는 위협이 감지될 때 자동화된 경보를 받기를 원합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Enable Amazon GuardDuty in all AWS accounts. Configure an Amazon EventBridge rule to detect GuardDuty findings. Configure the rule to send notifications to an Amazon SNS topic when high-severity findings are detected.`, ko:`모든 AWS 계정에서 Amazon GuardDuty를 활성화합니다. GuardDuty 결과를 감지하는 Amazon EventBridge 규칙을 구성합니다. 높은 심각도 결과가 감지되면 Amazon SNS 토픽에 알림을 보내도록 규칙을 구성합니다.` },
    { k:'B', en:`Enable AWS CloudTrail in all accounts. Create custom CloudWatch Logs metric filters to detect specific API call patterns. Create CloudWatch alarms based on the metric filters to alert on suspicious activity.`, ko:`모든 계정에서 AWS CloudTrail을 활성화합니다. 특정 API 호출 패턴을 감지하는 사용자 지정 CloudWatch Logs 지표 필터를 생성합니다. 의심스러운 활동에 대해 경보를 보내기 위해 지표 필터를 기반으로 CloudWatch 경보를 생성합니다.` },
    { k:'C', en:`Deploy an AWS Security Hub in all accounts. Configure Security Hub to aggregate findings from all accounts. Create custom Security Hub insights to identify security threats and send notifications.`, ko:`모든 계정에서 AWS Security Hub를 배포합니다. 모든 계정의 결과를 집계하도록 Security Hub를 구성합니다. 보안 위협을 식별하고 알림을 보내는 사용자 지정 Security Hub 인사이트를 생성합니다.` },
    { k:'D', en:`Enable Amazon Macie for all S3 buckets. Configure VPC Flow Logs for all VPCs. Create custom scripts to analyze the logs and detect security threats. Set up SNS notifications when threats are found.`, ko:`모든 S3 버킷에 대해 Amazon Macie를 활성화합니다. 모든 VPC에 대해 VPC Flow Logs를 구성합니다. 로그를 분석하고 보안 위협을 감지하는 사용자 지정 스크립트를 생성합니다. 위협이 발견되면 SNS 알림을 설정합니다.` },
  ],
  answer: ['A'],
  vote: '93% A',
  explain: `<p><span class="mark-ok">✅ A — Amazon GuardDuty + EventBridge + SNS</span></p><p>Amazon GuardDuty는 AWS 계정, 워크로드, 데이터를 지속적으로 모니터링하는 완전 관리형 위협 감지 서비스입니다. CloudTrail 이벤트, VPC Flow Logs, DNS 로그를 분석하여 무단 API 호출, 손상된 인스턴스, 정찰 활동 등을 자동으로 감지합니다. 추가 로그 수집이나 복잡한 규칙 작성 없이 활성화만으로 작동합니다. EventBridge로 결과를 필터링하고 SNS로 알림을 발송하는 완전 자동화된 솔루션입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — CloudTrail + 사용자 지정 메트릭 필터는 GuardDuty보다 복잡하고 위협 감지 능력이 제한적입니다.</p>
<p><span class="mark-no">❌ C</span> — Security Hub는 GuardDuty 등 다른 서비스의 결과를 집계하는 도구로, 자체적인 위협 감지 기능이 GuardDuty만큼 강력하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Macie는 S3 데이터 보안에 특화되어 있으며, 사용자 지정 스크립트는 운영 오버헤드가 높습니다.</p>`,
  disc: [{ ans:'A (93%)', txt:'GuardDuty는 ML 기반 위협 감지로 무단 API 호출/손상된 인스턴스/정찰 활동 모두를 자동 탐지하는 완전 관리형 솔루션' }]
},
{
  n: 378,
  en: `A company is developing a microservices-based application on AWS. The application consists of AWS Lambda functions and Amazon Elastic Container Service (Amazon ECS) services that need to be deployed frequently. A DevOps engineer needs to implement a consistent deployment solution across all components of the application. The solution must automate the deployments, minimize downtime during updates, and manage configuration data for the application.<br>Which solution will meet these requirements with the LEAST development effort?`,
  ko: `회사는 AWS에서 마이크로서비스 기반 애플리케이션을 개발하고 있습니다. 애플리케이션은 자주 배포해야 하는 AWS Lambda 함수와 Amazon Elastic Container Service(Amazon ECS) 서비스로 구성됩니다. DevOps 엔지니어는 애플리케이션의 모든 컴포넌트에 걸쳐 일관된 배포 솔루션을 구현해야 합니다. 솔루션은 배포를 자동화하고, 업데이트 중 다운타임을 최소화하며, 애플리케이션의 구성 데이터를 관리해야 합니다.<br>최소한의 개발 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS CloudFormation to define and provision the Lambda functions and ECS services. Implement stack updates with resource replacement for all components. Use AWS Secrets Manager to manage the configuration data.`, ko:`AWS CloudFormation을 사용하여 Lambda 함수와 ECS 서비스를 정의하고 프로비저닝합니다. 모든 컴포넌트에 대한 리소스 교체로 스택 업데이트를 구현합니다. 구성 데이터를 관리하기 위해 AWS Secrets Manager를 사용합니다.` },
    { k:'B', en:`Use AWS CodeDeploy to manage deployments for the Lambda functions and ECS services. Implement canary deployments for the Lambda functions. Implement blue/green deployments for the ECS services. Use AWS Systems Manager Parameter Store to manage configuration data.`, ko:`Lambda 함수와 ECS 서비스 배포를 관리하기 위해 AWS CodeDeploy를 사용합니다. Lambda 함수에 대한 카나리 배포를 구현합니다. ECS 서비스에 대한 블루/그린 배포를 구현합니다. 구성 데이터를 관리하기 위해 AWS Systems Manager Parameter Store를 사용합니다.` },
    { k:'C', en:`Use AWS Elastic Beanstalk to deploy and manage all application components. Configure rolling updates for Lambda functions and ECS services. Use Elastic Beanstalk environment variables to manage configuration data.`, ko:`모든 애플리케이션 컴포넌트를 배포하고 관리하기 위해 AWS Elastic Beanstalk를 사용합니다. Lambda 함수와 ECS 서비스에 대한 롤링 업데이트를 구성합니다. 구성 데이터를 관리하기 위해 Elastic Beanstalk 환경 변수를 사용합니다.` },
    { k:'D', en:`Use AWS Systems Manager to manage deployments for the Lambda functions and ECS services. Implement all-at-once deployments for the Lambda functions. Implement rolling updates for the ECS services. Use AWS Secrets Manager to manage the configuration data.`, ko:`Lambda 함수와 ECS 서비스 배포를 관리하기 위해 AWS Systems Manager를 사용합니다. Lambda 함수에 대한 한 번에 모두 배포를 구현합니다. ECS 서비스에 대한 롤링 업데이트를 구현합니다. 구성 데이터를 관리하기 위해 AWS Secrets Manager를 사용합니다.` },
  ],
  answer: ['B'],
  vote: '85% B',
  explain: `<p><span class="mark-ok">✅ B — AWS CodeDeploy (Lambda 카나리 + ECS 블루/그린) + Parameter Store</span></p><p>AWS CodeDeploy는 Lambda 함수와 ECS 서비스 모두에 대한 배포를 네이티브로 지원합니다. Lambda는 카나리(Canary) 또는 리니어(Linear) 배포로 점진적 트래픽 전환이 가능하며, ECS는 블루/그린 배포로 다운타임 없이 업데이트됩니다. Parameter Store는 애플리케이션 구성 데이터 관리에 적합한 완전 관리형 서비스입니다. 이 조합이 세 요구 사항(자동화, 최소 다운타임, 구성 관리)을 가장 적은 개발 노력으로 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudFormation 스택 업데이트에서 리소스 교체는 다운타임을 발생시킬 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — Elastic Beanstalk는 Lambda를 직접 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Systems Manager는 EC2 중심 도구로 Lambda/ECS 배포에 CodeDeploy만큼 특화되어 있지 않습니다. All-at-once는 다운타임 최소화 요구 사항에 맞지 않습니다.</p>`,
  disc: [{ ans:'B (85%)', txt:'CodeDeploy는 Lambda와 ECS 양쪽 배포를 네이티브 지원, 카나리/블루그린으로 무중단 배포 구현이 가장 적은 개발 노력' }]
},
{
  n: 379,
  en: `A company is implementing a CI/CD pipeline for an application by using AWS CodePipeline and AWS CodeBuild. The company needs a solution to run unit tests and automatically generate code coverage reports before any code is deployed to production. The CI/CD pipeline execution must fail if the code coverage is less than 80%.<br>Which solution will meet these requirements?`,
  ko: `회사는 AWS CodePipeline 및 AWS CodeBuild를 사용하여 애플리케이션을 위한 CI/CD 파이프라인을 구현하고 있습니다. 회사는 코드가 프로덕션에 배포되기 전에 단위 테스트를 실행하고 코드 커버리지 보고서를 자동으로 생성하는 솔루션이 필요합니다. 코드 커버리지가 80% 미만이면 CI/CD 파이프라인 실행이 실패해야 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  ko: `회사는 AWS CodePipeline 및 AWS CodeBuild를 사용하여 애플리케이션을 위한 CI/CD 파이프라인을 구현하고 있습니다. 회사는 코드가 프로덕션에 배포되기 전에 단위 테스트를 실행하고 코드 커버리지 보고서를 자동으로 생성하는 솔루션이 필요합니다. 코드 커버리지가 80% 미만이면 CI/CD 파이프라인 실행이 실패해야 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS Lambda function to run unit tests and generate code coverage reports. Add a Lambda invoke action to a stage in the CodePipeline pipeline. Create an Amazon EventBridge scheduled rule to run hourly to monitor the Lambda function's output. Configure the rule to fail the pipeline if coverage is less than 80%.`, ko:`단위 테스트를 실행하고 코드 커버리지 보고서를 생성하는 AWS Lambda 함수를 생성합니다. CodePipeline 파이프라인의 스테이지에 Lambda 호출 액션을 추가합니다. Lambda 함수의 출력을 매시간 모니터링하는 Amazon EventBridge 예약 규칙을 생성합니다. 커버리지가 80% 미만이면 파이프라인을 실패하도록 규칙을 구성합니다.` },
    { k:'B', en:`Create an AWS Step Functions workflow to run unit tests and generate code coverage reports. Add a Step Functions test action to a stage in the CodePipeline pipeline to invoke the workflow. Configure the workflow to fail the pipeline execution if coverage is less than 80%.`, ko:`단위 테스트를 실행하고 코드 커버리지 보고서를 생성하는 AWS Step Functions 워크플로우를 생성합니다. 워크플로우를 호출하기 위해 CodePipeline 파이프라인의 스테이지에 Step Functions 테스트 액션을 추가합니다. 커버리지가 80% 미만이면 파이프라인 실행을 실패하도록 워크플로우를 구성합니다.` },
    { k:'C', en:`Create a CodeBuild project with a <code>buildspec.yml</code> file that includes commands to run unit tests and generate code coverage reports. Add a CodeBuild test action to a stage in the CodePipeline pipeline. Configure the CodeBuild test action to use the source artifacts from the source action as input. Modify the <code>buildspec.yml</code> file to fail the build if coverage is less than 80%.`, ko:`단위 테스트를 실행하고 코드 커버리지 보고서를 생성하는 명령을 포함하는 <code>buildspec.yml</code> 파일로 CodeBuild 프로젝트를 생성합니다. CodePipeline 파이프라인의 스테이지에 CodeBuild 테스트 액션을 추가합니다. 소스 액션의 소스 아티팩트를 입력으로 사용하도록 CodeBuild 테스트 액션을 구성합니다. 커버리지가 80% 미만이면 빌드를 실패하도록 <code>buildspec.yml</code> 파일을 수정합니다.` },
    { k:'D', en:`Create a CodeBuild project with Jenkins installed. Configure Jenkins to run unit tests and generate code coverage reports. Add a Jenkins test action to a stage in the CodePipeline pipeline. Configure the Jenkins test action to output the coverage report as an output artifact. Configure an approval action to fail the pipeline if code coverage is less than 80%.`, ko:`Jenkins가 설치된 CodeBuild 프로젝트를 생성합니다. 단위 테스트를 실행하고 코드 커버리지 보고서를 생성하도록 Jenkins를 구성합니다. CodePipeline 파이프라인의 스테이지에 Jenkins 테스트 액션을 추가합니다. 커버리지 보고서를 출력 아티팩트로 출력하도록 Jenkins 테스트 액션을 구성합니다. 코드 커버리지가 80% 미만이면 파이프라인을 실패하도록 승인 액션을 구성합니다.` },
  ],
  answer: ['C'],
  vote: '92% C',
  explain: `<p><span class="mark-ok">✅ C — CodeBuild + buildspec.yml 커버리지 임계값 검사</span></p><p>AWS CodeBuild는 단위 테스트 실행과 코드 커버리지 보고서 생성에 최적화된 완전 관리형 빌드 서비스입니다. <code>buildspec.yml</code>에서 테스트 실행 후 커버리지 값을 확인하여 80% 미만이면 빌드를 실패(exit 1)시킵니다. CodeBuild 액션이 실패하면 CodePipeline 파이프라인도 자동으로 중단됩니다. CodeBuild는 테스트 보고서(Test Reports) 기능으로 커버리지 결과를 AWS 콘솔에서 시각화할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — EventBridge 예약 규칙으로 파이프라인 실행을 제어하는 방식은 복잡하고 실시간 파이프라인 제어에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Step Functions는 이 목적에 불필요하게 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — Jenkins는 추가 관리가 필요하며 AWS 네이티브 CodeBuild보다 오버헤드가 높습니다.</p>`,
  disc: [{ ans:'C (92%)', txt:'CodeBuild buildspec.yml에서 커버리지 임계값 검사 및 빌드 실패 처리가 CodePipeline과 완벽히 통합되는 표준 패턴' }]
},
{
  n: 380,
  en: `A company runs a web application that receives varying traffic throughout the day. The application runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The company wants to reduce costs by scaling down instances during low-traffic periods at night and scaling up before the expected morning traffic surge. The company has historical data showing traffic patterns are predictable.<br>Which solution will meet these requirements MOST cost-effectively?`,
  ko: `회사는 하루 종일 다양한 트래픽을 받는 웹 애플리케이션을 운영합니다. 애플리케이션은 Application Load Balancer 뒤의 Auto Scaling 그룹에 있는 Amazon EC2 인스턴스에서 실행됩니다. 회사는 밤 시간대 트래픽이 낮은 기간에 인스턴스를 축소하고 아침 예상 트래픽 급증 전에 확장하여 비용을 절감하려고 합니다. 회사는 트래픽 패턴이 예측 가능하다는 기록 데이터를 보유하고 있습니다.<br>이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure a target tracking scaling policy for the Auto Scaling group based on the ALB's <code>RequestCountPerTarget</code> metric. Set the target to match the expected number of requests per instance.`, ko:`ALB의 <code>RequestCountPerTarget</code> 지표를 기반으로 Auto Scaling 그룹에 대한 대상 추적 조정 정책을 구성합니다. 인스턴스당 예상 요청 수에 맞게 대상을 설정합니다.` },
    { k:'B', en:`Configure a scheduled scaling action to reduce the minimum and desired capacity at night and increase them before the morning traffic surge. Optionally combine with a dynamic scaling policy to handle unexpected traffic spikes.`, ko:`밤 시간대에 최소 및 원하는 용량을 줄이고 아침 트래픽 급증 전에 늘리는 예약 조정 액션을 구성합니다. 선택적으로 예상치 못한 트래픽 급증을 처리하기 위해 동적 조정 정책과 결합합니다.` },
    { k:'C', en:`Purchase Reserved Instances to match the expected minimum number of instances needed at all times. Use On-Demand Instances for additional capacity during peak hours.`, ko:`항상 필요한 예상 최소 인스턴스 수에 맞게 예약 인스턴스를 구매합니다. 피크 시간대에 추가 용량을 위해 온디맨드 인스턴스를 사용합니다.` },
    { k:'D', en:`Enable predictive scaling for the Auto Scaling group. Predictive scaling uses machine learning to forecast traffic patterns and proactively scale the fleet to handle demand before it arrives.`, ko:`Auto Scaling 그룹에 대한 예측 조정을 활성화합니다. 예측 조정은 머신 러닝을 사용하여 트래픽 패턴을 예측하고 수요가 도달하기 전에 플리트를 사전에 조정합니다.` },
  ],
  answer: ['D'],
  vote: '76% D',
  explain: `<p><span class="mark-ok">✅ D — 예측 조정(Predictive Scaling)</span></p><p>예측 조정(Predictive Scaling)은 기록 데이터를 기반으로 ML을 사용하여 트래픽 패턴을 예측하고 수요가 도달하기 전에 미리 인스턴스를 확장합니다. 트래픽 패턴이 예측 가능하다는 전제 조건을 정확히 활용하는 솔루션입니다. 예약 조정보다 더 정확하게 예측하며, 아침 트래픽 급증 전에 충분한 용량을 자동으로 준비하고 야간 저트래픽 시 자동으로 축소합니다. 수동 예약 설정 관리 없이 AWS가 최적 용량을 자동 결정합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 대상 추적 조정은 반응형으로 실제 트래픽이 증가한 후 확장하므로 급격한 트래픽 급증 시 지연이 발생할 수 있습니다.</p>
<p><span class="mark-no">❌ B</span> — 예약 조정은 수동으로 시간대를 정의해야 하며 예측 조정보다 덜 정밀합니다.</p>
<p><span class="mark-no">❌ C</span> — 예약 인스턴스는 장기 약정으로 비용을 절감하지만 자동 스케일링과 직접 관련이 없습니다.</p>`,
  disc: [{ ans:'D (76%)', txt:'예측 가능한 트래픽 패턴에는 예측 조정이 가장 적합 — ML로 사전 확장하여 성능과 비용 효율성 모두 최적화' }]
}
];
