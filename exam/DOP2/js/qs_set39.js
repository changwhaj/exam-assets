window.QS_SET39 = [
{
  n: 381,
  en: `A company has multiple AWS accounts managed through AWS Organizations. The company wants to implement a solution to automatically remediate non-compliant resources across all accounts. When an AWS Config rule detects a non-compliant resource in any member account, the company wants to automatically fix it using a standardized runbook stored in the central security account.<br>Which solution will meet these requirements?`,
  ko: `회사는 AWS Organizations를 통해 관리되는 여러 AWS 계정을 보유하고 있습니다. 회사는 모든 계정에 걸쳐 비준수 리소스를 자동으로 수정하는 솔루션을 구현하려고 합니다. AWS Config 규칙이 멤버 계정에서 비준수 리소스를 감지하면 중앙 보안 계정에 저장된 표준 런북을 사용하여 자동으로 수정하려고 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`In each member account, create AWS Config rules with automatic remediation actions that point to AWS Systems Manager Automation documents stored in that account. Maintain separate copies of the runbook in each account.`, ko:`각 멤버 계정에서 해당 계정에 저장된 AWS Systems Manager Automation 문서를 가리키는 자동 수정 액션이 있는 AWS Config 규칙을 생성합니다. 각 계정에서 런북의 별도 복사본을 유지합니다.` },
    { k:'B', en:`Create an AWS Config organization conformance pack from the management account. Configure the conformance pack with Config rules that have automatic remediation using AWS Systems Manager Automation documents stored in the central security account. Configure cross-account IAM roles to allow the remediation to run in member accounts.`, ko:`관리 계정에서 AWS Config 조직 준수 팩을 생성합니다. 중앙 보안 계정에 저장된 AWS Systems Manager Automation 문서를 사용하여 자동 수정이 있는 Config 규칙으로 준수 팩을 구성합니다. 수정이 멤버 계정에서 실행될 수 있도록 교차 계정 IAM 역할을 구성합니다.` },
    { k:'C', en:`Enable Amazon EventBridge event bus sharing across all accounts. Create EventBridge rules in member accounts to forward Config compliance change events to the central security account's event bus. Create an EventBridge rule in the security account to invoke a Lambda function that runs the remediation.`, ko:`모든 계정에서 Amazon EventBridge 이벤트 버스 공유를 활성화합니다. 멤버 계정에 EventBridge 규칙을 생성하여 Config 규정 준수 변경 이벤트를 중앙 보안 계정의 이벤트 버스로 전달합니다. 보안 계정에서 수정을 실행하는 Lambda 함수를 호출하는 EventBridge 규칙을 생성합니다.` },
    { k:'D', en:`Use AWS Systems Manager Explorer to view compliance status across all accounts. Create a Systems Manager runbook that scans all accounts for non-compliant resources and remediates them. Schedule the runbook to run every hour.`, ko:`AWS Systems Manager Explorer를 사용하여 모든 계정의 규정 준수 상태를 확인합니다. 모든 계정에서 비준수 리소스를 스캔하고 수정하는 Systems Manager 런북을 생성합니다. 런북을 매시간 실행하도록 예약합니다.` },
  ],
  answer: ['B'],
  vote: '80% B',
  explain: `<p><span class="mark-ok">✅ B — 조직 준수 팩 + 중앙 SSM 자동화 문서 + 교차 계정 IAM</span></p><p>AWS Config 조직 준수 팩을 관리 계정에서 배포하면 모든 멤버 계정에 일관된 Config 규칙이 적용됩니다. 중앙 보안 계정의 SSM Automation 문서를 수정 액션으로 지정하고, 교차 계정 IAM 역할로 멤버 계정에서 수정을 실행할 수 있습니다. 표준 런북을 한 곳에서 관리하면서 모든 계정의 비준수 리소스를 자동 수정하는 요구 사항을 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 각 계정에 런북 복사본을 유지하면 중앙화된 표준 런북 요구 사항에 위배되고 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ C</span> — EventBridge 전달 + Lambda 조합은 작동하지만 Config 준수 팩의 내장 수정 기능보다 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — 시간별 예약 스캔은 실시간 수정이 아니며 운영 오버헤드가 높습니다.</p>`,
  disc: [{ ans:'B (80%)', txt:'조직 준수 팩으로 중앙 Config 규칙을 배포하고 중앙 SSM 문서로 표준화된 수정을 교차 계정으로 실행하는 최적 솔루션' }]
},
{
  n: 382,
  en: `A company is implementing a CI/CD pipeline for an application by using AWS CodePipeline and AWS CodeBuild. The company needs a solution to run unit tests and automatically generate code coverage reports before any code is deployed to production. The CI/CD pipeline execution must fail if the code coverage is less than 80%.<br>A DevOps engineer has already configured a CodeBuild project that runs the tests. The engineer now needs to enforce the 80% coverage threshold in the pipeline.<br>Which solution will meet these requirements with the LEAST development effort?`,
  ko: `회사는 AWS CodePipeline 및 AWS CodeBuild를 사용하여 애플리케이션을 위한 CI/CD 파이프라인을 구현하고 있습니다. DevOps 엔지니어는 이미 테스트를 실행하는 CodeBuild 프로젝트를 구성했습니다. 엔지니어는 이제 파이프라인에서 80% 커버리지 임계값을 시행해야 합니다.<br>최소한의 개발 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Update the <code>buildspec.yml</code> file in the CodeBuild project to add a post_build phase command that reads the coverage report, checks the coverage percentage, and exits with a non-zero status code if the coverage is less than 80%.`, ko:`CodeBuild 프로젝트의 <code>buildspec.yml</code> 파일을 업데이트하여 커버리지 보고서를 읽고 커버리지 비율을 확인하며 커버리지가 80% 미만이면 0이 아닌 상태 코드로 종료하는 post_build 단계 명령을 추가합니다.` },
    { k:'B', en:`Create an AWS Lambda function that reads CodeBuild test reports, checks the coverage percentage, and fails the pipeline if the coverage is less than 80%. Add an invoke Lambda action after the CodeBuild test action in CodePipeline.`, ko:`CodeBuild 테스트 보고서를 읽고 커버리지 비율을 확인하며 커버리지가 80% 미만이면 파이프라인을 실패시키는 AWS Lambda 함수를 생성합니다. CodePipeline의 CodeBuild 테스트 액션 이후에 Lambda 호출 액션을 추가합니다.` },
    { k:'C', en:`Enable CodeBuild Test Reporting. Configure a coverage threshold of 80% in the CodeBuild project's test reporting settings. CodeBuild will automatically fail the build if coverage falls below the threshold.`, ko:`CodeBuild 테스트 보고를 활성화합니다. CodeBuild 프로젝트의 테스트 보고 설정에서 80% 커버리지 임계값을 구성합니다. CodeBuild는 커버리지가 임계값 아래로 떨어지면 자동으로 빌드를 실패시킵니다.` },
    { k:'D', en:`Create an Amazon EventBridge rule that triggers after each CodeBuild build. Configure the rule to invoke an AWS Lambda function that reads the CodeBuild logs, extracts the coverage percentage, and calls the CodePipeline API to stop the pipeline if coverage is less than 80%.`, ko:`각 CodeBuild 빌드 후에 트리거되는 Amazon EventBridge 규칙을 생성합니다. CodeBuild 로그를 읽고 커버리지 비율을 추출하며 커버리지가 80% 미만이면 파이프라인을 중지하기 위해 CodePipeline API를 호출하는 AWS Lambda 함수를 호출하도록 규칙을 구성합니다.` },
  ],
  answer: ['A'],
  vote: '83% A',
  explain: `<p><span class="mark-ok">✅ A — buildspec.yml post_build에서 커버리지 검사 후 비정상 종료</span></p><p>이미 구성된 CodeBuild 프로젝트의 <code>buildspec.yml</code>에 post_build 단계를 추가하는 것이 가장 적은 개발 노력입니다. 커버리지 보고서(예: coverage.xml, lcov.info)에서 커버리지 값을 읽어 80% 미만이면 <code>exit 1</code>로 빌드를 실패시킵니다. CodeBuild 빌드가 실패하면 CodePipeline도 자동으로 중단됩니다. 새 서비스나 함수를 추가할 필요 없이 기존 buildspec.yml 수정만으로 구현 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — Lambda 함수 추가는 개발 노력이 더 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — CodeBuild Test Reporting의 커버리지 임계값 자동 실패 기능은 현재 직접 지원되지 않습니다. buildspec.yml에서 수동으로 처리해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — EventBridge + Lambda 조합은 복잡하고 빌드 완료 후 파이프라인을 사후 중지하는 방식이라 더 복잡합니다.</p>`,
  disc: [{ ans:'A (83%)', txt:'기존 buildspec.yml에 post_build 커버리지 체크를 추가하는 것이 가장 적은 노력으로 CodeBuild 빌드 실패 → 파이프라인 중단을 구현' }]
},
{
  n: 383,
  en: `A company has an application that uses Amazon DynamoDB as the primary database. The company recently experienced a data corruption incident and needs to implement point-in-time recovery to restore the database to a specific point before the corruption occurred. The company also needs to ensure that this capability is always enabled going forward.<br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `회사는 Amazon DynamoDB를 기본 데이터베이스로 사용하는 애플리케이션을 보유하고 있습니다. 회사는 최근 데이터 손상 사고를 경험했으며 손상이 발생하기 전 특정 시점으로 데이터베이스를 복원하기 위해 특정 시점 복구를 구현해야 합니다. 또한 앞으로도 이 기능이 항상 활성화되도록 해야 합니다.<br>이 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Enable point-in-time recovery (PITR) on the DynamoDB table. Restore the table to a specific point in time using the AWS Management Console or AWS CLI.`, ko:`DynamoDB 테이블에서 특정 시점 복구(PITR)를 활성화합니다. AWS Management Console 또는 AWS CLI를 사용하여 테이블을 특정 시점으로 복원합니다.` },
    { k:'B', en:`Create an AWS Config rule using the managed rule <code>dynamodb-pitr-enabled</code> to detect DynamoDB tables without PITR enabled. Configure automatic remediation to enable PITR on non-compliant tables.`, ko:`관리형 규칙 <code>dynamodb-pitr-enabled</code>를 사용하여 PITR이 활성화되지 않은 DynamoDB 테이블을 감지하는 AWS Config 규칙을 생성합니다. 비준수 테이블에서 PITR을 활성화하도록 자동 수정을 구성합니다.` },
    { k:'C', en:`Create AWS Backup plans to back up the DynamoDB table hourly to an Amazon S3 bucket. Restore the data from S3 when needed.`, ko:`DynamoDB 테이블을 매시간 Amazon S3 버킷에 백업하는 AWS Backup 계획을 생성합니다. 필요할 때 S3에서 데이터를 복원합니다.` },
    { k:'D', en:`Enable DynamoDB Streams on the table. Create an AWS Lambda function that archives all changes to Amazon S3. Use the S3 data to replay changes to a specific point in time.`, ko:`테이블에서 DynamoDB 스트림을 활성화합니다. 모든 변경 사항을 Amazon S3에 보관하는 AWS Lambda 함수를 생성합니다. S3 데이터를 사용하여 특정 시점까지 변경 사항을 재생합니다.` },
    { k:'E', en:`Create an Amazon EventBridge rule that detects DynamoDB table creation events. Configure the rule to invoke an AWS Lambda function that automatically enables PITR on newly created DynamoDB tables.`, ko:`DynamoDB 테이블 생성 이벤트를 감지하는 Amazon EventBridge 규칙을 생성합니다. 새로 생성된 DynamoDB 테이블에서 PITR을 자동으로 활성화하는 AWS Lambda 함수를 호출하도록 규칙을 구성합니다.` },
  ],
  answer: ['A','B'],
  vote: '87% AB',
  explain: `<p><span class="mark-ok">✅ A — PITR 활성화 및 복원</span></p><p>DynamoDB PITR(Point-In-Time Recovery)을 활성화하면 최근 35일 이내 임의의 시점으로 테이블을 복원할 수 있습니다. 데이터 손상 발생 전 특정 시점으로 복원하여 즉각적인 요구 사항을 해결합니다.</p>
<p><span class="mark-ok">✅ B — AWS Config 관리형 규칙으로 PITR 강제 적용</span></p><p><code>dynamodb-pitr-enabled</code> Config 관리형 규칙은 PITR이 비활성화된 테이블을 지속적으로 감지합니다. 자동 수정으로 비준수 테이블에 PITR을 자동 활성화하여 앞으로도 PITR이 항상 활성화되도록 보장합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ C</span> — S3 백업은 PITR의 세밀한 시점 복구(초 단위)보다 복구 정밀도가 낮습니다.</p>
<p><span class="mark-no">❌ D</span> — 스트림 기반 변경 재생은 복잡한 사용자 구현이 필요합니다.</p>
<p><span class="mark-no">❌ E</span> — 신규 테이블만 감지하며 기존 테이블의 PITR을 보장하지 못합니다. Config 자동 수정이 더 포괄적입니다.</p>`,
  disc: [{ ans:'AB (87%)', txt:'PITR로 즉각 복원, Config 관리형 규칙+자동 수정으로 지속적 PITR 강제 활성화 보장' }]
},
{
  n: 384,
  en: `A company has an AWS environment with multiple VPCs across different regions. The company needs to enable communication between resources in different VPCs and wants to centralize network management. The company also wants to apply consistent security policies across all VPCs. The company's network team should be the only team that can make changes to the network configuration.<br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `회사는 여러 리전에 걸쳐 여러 VPC가 있는 AWS 환경을 보유하고 있습니다. 회사는 서로 다른 VPC의 리소스 간 통신을 활성화하고 네트워크 관리를 중앙화하려고 합니다. 또한 모든 VPC에 걸쳐 일관된 보안 정책을 적용하려고 합니다. 회사의 네트워크 팀만 네트워크 구성을 변경할 수 있어야 합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use VPC peering connections between all VPCs to enable communication. Create route tables in each VPC to route traffic through the peering connections. Apply security groups and NACLs consistently across all VPCs.`, ko:`모든 VPC 간에 VPC 피어링 연결을 사용하여 통신을 활성화합니다. 각 VPC에 라우트 테이블을 생성하여 피어링 연결을 통해 트래픽을 라우팅합니다. 모든 VPC에 걸쳐 보안 그룹과 NACL을 일관되게 적용합니다.` },
    { k:'B', en:`Deploy AWS Transit Gateway to connect all VPCs. Use Transit Gateway route tables to control routing between VPCs. Use AWS Firewall Manager to apply consistent AWS Network Firewall policies across all VPCs. Use AWS Organizations SCPs to restrict network changes to the network team's IAM role.`, ko:`AWS Transit Gateway를 배포하여 모든 VPC를 연결합니다. Transit Gateway 라우트 테이블을 사용하여 VPC 간 라우팅을 제어합니다. AWS Firewall Manager를 사용하여 모든 VPC에 걸쳐 일관된 AWS Network Firewall 정책을 적용합니다. AWS Organizations SCP를 사용하여 네트워크 변경을 네트워크 팀의 IAM 역할로 제한합니다.` },
    { k:'C', en:`Create a shared VPC using AWS Resource Access Manager (RAM). Share the VPC subnets with all other accounts. Route all traffic through the shared VPC for centralized management.`, ko:`AWS Resource Access Manager(RAM)를 사용하여 공유 VPC를 생성합니다. VPC 서브넷을 다른 모든 계정과 공유합니다. 중앙 집중 관리를 위해 모든 트래픽을 공유 VPC를 통해 라우팅합니다.` },
    { k:'D', en:`Deploy a third-party software-defined networking (SDN) solution on EC2 instances to manage connectivity between VPCs. Implement access controls within the SDN solution to restrict network changes.`, ko:`EC2 인스턴스에 타사 소프트웨어 정의 네트워킹(SDN) 솔루션을 배포하여 VPC 간 연결을 관리합니다. SDN 솔루션 내에서 액세스 제어를 구현하여 네트워크 변경을 제한합니다.` },
  ],
  answer: ['B'],
  vote: '88% B',
  explain: `<p><span class="mark-ok">✅ B — Transit Gateway + Firewall Manager + SCP</span></p><p>AWS Transit Gateway는 허브-스포크 모델로 여러 VPC와 온프레미스 네트워크를 중앙에서 연결하는 완전 관리형 서비스입니다. VPC 피어링의 메시 구성 복잡성을 제거합니다. AWS Firewall Manager는 조직 전체에 Network Firewall 정책을 일관되게 적용합니다. SCP로 네트워크 팀만 네트워크 변경을 할 수 있도록 제한하여 거버넌스를 강화합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — VPC 피어링은 VPC 수가 많아질수록 연결 수가 기하급수적으로 증가하여 관리가 복잡합니다(전이적 라우팅 불가).</p>
<p><span class="mark-no">❌ C</span> — 공유 VPC는 계정 간 리소스 공유에 유용하지만 완전한 네트워크 중앙화 관리 솔루션이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — 타사 SDN은 EC2 인스턴스 관리 등 높은 운영 오버헤드가 필요합니다.</p>`,
  disc: [{ ans:'B (88%)', txt:'Transit Gateway로 중앙 연결 허브 구성, Firewall Manager로 일관된 보안 정책, SCP로 네트워크 팀 전용 변경 권한 부여' }]
},
{
  n: 385,
  en: `A company uses AWS CodeCommit to store its application source code. The company's security policy requires that all code changes undergo a security review before being merged to the main branch. The review process must be enforced automatically and cannot be bypassed by developers.<br>Which solution will meet these requirements?`,
  ko: `회사는 AWS CodeCommit을 사용하여 애플리케이션 소스 코드를 저장합니다. 회사의 보안 정책에는 모든 코드 변경 사항이 메인 브랜치에 병합되기 전에 보안 검토를 거쳐야 합니다. 검토 프로세스는 자동으로 시행되어야 하며 개발자가 우회할 수 없어야 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create branch protection rules in CodeCommit that require pull request reviews. Configure the rules to require at least one approval from a security team member before merging.`, ko:`풀 리퀘스트 검토를 요구하는 CodeCommit 브랜치 보호 규칙을 생성합니다. 병합 전에 보안 팀 구성원의 승인이 최소 1개 필요하도록 규칙을 구성합니다.` },
    { k:'B', en:`Create an approval rule template in CodeCommit. Configure the template to require approval from the security team for all pull requests to the main branch. Associate the template with the repository.`, ko:`CodeCommit에서 승인 규칙 템플릿을 생성합니다. 메인 브랜치에 대한 모든 풀 리퀘스트에 보안 팀의 승인이 필요하도록 템플릿을 구성합니다. 저장소에 템플릿을 연결합니다.` },
    { k:'C', en:`Use AWS IAM policies to restrict direct pushes to the main branch. Require all developers to create feature branches and submit pull requests. Conduct security reviews manually.`, ko:`AWS IAM 정책을 사용하여 메인 브랜치로의 직접 푸시를 제한합니다. 모든 개발자가 기능 브랜치를 만들고 풀 리퀘스트를 제출하도록 요구합니다. 보안 검토를 수동으로 수행합니다.` },
    { k:'D', en:`Create an Amazon EventBridge rule that triggers when code is pushed to CodeCommit. Configure the rule to invoke an AWS Lambda function that runs security checks and sends notifications to the security team. Allow merges only after the security team acknowledges the notification.`, ko:`코드가 CodeCommit에 푸시될 때 트리거되는 Amazon EventBridge 규칙을 생성합니다. 보안 검사를 실행하고 보안 팀에 알림을 보내는 AWS Lambda 함수를 호출하도록 규칙을 구성합니다. 보안 팀이 알림을 확인한 후에만 병합을 허용합니다.` },
  ],
  answer: ['B'],
  vote: '85% B',
  explain: `<p><span class="mark-ok">✅ B — CodeCommit 승인 규칙 템플릿</span></p><p>CodeCommit의 승인 규칙 템플릿(Approval Rule Template)은 저장소의 풀 리퀘스트에 자동으로 적용되는 승인 요구 사항을 정의합니다. 메인 브랜치 대상 모든 PR에 보안 팀 승인을 요구하도록 설정하면 코드 검토 프로세스가 자동으로 강제됩니다. 풀 리퀘스트 방식으로만 병합이 가능하며 승인 없이는 병합할 수 없으므로 개발자가 우회할 수 없습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CodeCommit에는 GitHub과 같은 브랜치 보호 규칙 기능이 없습니다. 승인 규칙 템플릿이 CodeCommit의 올바른 기능입니다.</p>
<p><span class="mark-no">❌ C</span> — IAM 정책으로 직접 푸시를 제한할 수 있지만, 수동 검토만으로는 자동 시행 요구 사항을 충족하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — EventBridge + Lambda는 자동화되지만 보안 팀의 수동 확인 과정이 있어 구현이 복잡합니다. 승인 규칙 템플릿이 더 직접적입니다.</p>`,
  disc: [{ ans:'B (85%)', txt:'CodeCommit 승인 규칙 템플릿은 저장소에 연결하면 모든 PR에 자동 적용되어 보안 검토를 우회 불가능하게 강제하는 네이티브 기능' }]
},
{
  n: 386,
  en: `A company wants to implement a solution to automatically rotate database credentials for its Amazon RDS instances. The company wants to minimize the risk of credential exposure and ensure that the application can always access the database using the latest credentials. The solution must require minimal code changes to the application.<br>Which solution will meet these requirements?`,
  ko: `회사는 Amazon RDS 인스턴스의 데이터베이스 자격 증명을 자동으로 교체하는 솔루션을 구현하려고 합니다. 회사는 자격 증명 노출 위험을 최소화하고 애플리케이션이 항상 최신 자격 증명을 사용하여 데이터베이스에 액세스할 수 있도록 해야 합니다. 솔루션은 애플리케이션의 코드 변경을 최소화해야 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Store database credentials in AWS Systems Manager Parameter Store as secure strings. Create an AWS Lambda function to rotate the credentials on a schedule and update the Parameter Store values. Update the application to fetch credentials from Parameter Store on each database connection.`, ko:`데이터베이스 자격 증명을 보안 문자열로 AWS Systems Manager Parameter Store에 저장합니다. 예약된 일정에 따라 자격 증명을 교체하고 Parameter Store 값을 업데이트하는 AWS Lambda 함수를 생성합니다. 각 데이터베이스 연결 시 Parameter Store에서 자격 증명을 가져오도록 애플리케이션을 업데이트합니다.` },
    { k:'B', en:`Store database credentials in AWS Secrets Manager. Enable automatic rotation for the secret with a rotation schedule. Update the application to retrieve credentials from Secrets Manager using the AWS SDK. Secrets Manager handles the rotation without additional Lambda functions.`, ko:`데이터베이스 자격 증명을 AWS Secrets Manager에 저장합니다. 교체 일정을 사용하여 시크릿에 대한 자동 교체를 활성화합니다. AWS SDK를 사용하여 Secrets Manager에서 자격 증명을 검색하도록 애플리케이션을 업데이트합니다. Secrets Manager는 추가 Lambda 함수 없이 교체를 처리합니다.` },
    { k:'C', en:`Use IAM database authentication for the RDS instance. Configure the application to use IAM roles to generate temporary database tokens instead of username/password credentials. Rotate the IAM role credentials using AWS STS.`, ko:`RDS 인스턴스에 IAM 데이터베이스 인증을 사용합니다. 애플리케이션이 사용자 이름/비밀번호 자격 증명 대신 IAM 역할을 사용하여 임시 데이터베이스 토큰을 생성하도록 구성합니다. AWS STS를 사용하여 IAM 역할 자격 증명을 교체합니다.` },
    { k:'D', en:`Create a custom Lambda function that generates new database credentials and updates them in the RDS instance. Store the new credentials in an encrypted Amazon S3 bucket. Update the application to download and use credentials from the S3 bucket.`, ko:`새 데이터베이스 자격 증명을 생성하고 RDS 인스턴스에서 업데이트하는 사용자 지정 Lambda 함수를 생성합니다. 새 자격 증명을 암호화된 Amazon S3 버킷에 저장합니다. S3 버킷에서 자격 증명을 다운로드하고 사용하도록 애플리케이션을 업데이트합니다.` },
  ],
  answer: ['B'],
  vote: '92% B',
  explain: `<p><span class="mark-ok">✅ B — AWS Secrets Manager 자동 교체</span></p><p>AWS Secrets Manager는 RDS 데이터베이스 자격 증명의 자동 교체를 기본으로 지원합니다. 교체 일정을 설정하면 Secrets Manager가 내장 Lambda 함수를 사용하여 RDS 인스턴스의 비밀번호를 자동으로 교체하고 시크릿 값을 업데이트합니다. 애플리케이션은 SDK로 Secrets Manager를 호출하여 항상 최신 자격 증명을 가져옵니다. 비밀번호가 코드나 설정 파일에 노출되지 않으며 최소한의 코드 변경(Secrets Manager 호출 추가)만 필요합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Parameter Store는 자동 교체 기능이 없어 사용자 정의 Lambda를 만들어야 합니다.</p>
<p><span class="mark-no">❌ C</span> — IAM 데이터베이스 인증은 좋은 방법이지만 RDS 지원 엔진이 제한적이고 애플리케이션 코드 변경이 더 많이 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — S3에 자격 증명을 저장하는 것은 보안적으로 바람직하지 않으며 사용자 지정 Lambda 개발이 필요합니다.</p>`,
  disc: [{ ans:'B (92%)', txt:'Secrets Manager는 RDS 자동 교체를 내장 지원하여 추가 Lambda 없이 안전한 자격 증명 관리와 자동 교체를 가장 간단하게 구현' }]
},
{
  n: 387,
  en: `A company runs a stateless web application on Amazon EC2 instances in an Auto Scaling group. The company stores session state in Amazon ElastiCache for Redis. The company needs to ensure high availability for the application and cache tier. The company must also minimize data loss if a cache node fails.<br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `회사는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 상태 비저장 웹 애플리케이션을 실행합니다. 회사는 세션 상태를 Amazon ElastiCache for Redis에 저장합니다. 회사는 애플리케이션 및 캐시 계층의 고가용성을 보장해야 합니다. 또한 캐시 노드가 실패할 경우 데이터 손실을 최소화해야 합니다.<br>이 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Configure the Auto Scaling group to span at least two Availability Zones. Set the minimum capacity to ensure the application remains available even if one AZ fails.`, ko:`Auto Scaling 그룹이 최소 두 개의 가용 영역에 걸쳐 있도록 구성합니다. 하나의 AZ가 실패해도 애플리케이션이 계속 사용 가능하도록 최소 용량을 설정합니다.` },
    { k:'B', en:`Deploy ElastiCache for Redis in cluster mode with multi-AZ enabled. Configure automatic failover so that a read replica is promoted if the primary node fails.`, ko:`다중 AZ가 활성화된 클러스터 모드로 ElastiCache for Redis를 배포합니다. 기본 노드가 실패하면 읽기 복제본이 승격되도록 자동 장애 조치를 구성합니다.` },
    { k:'C', en:`Enable ElastiCache for Redis backup to Amazon S3. Configure daily snapshots and retain them for 7 days to enable point-in-time recovery.`, ko:`Amazon S3에 대한 ElastiCache for Redis 백업을 활성화합니다. 특정 시점 복구를 활성화하기 위해 일일 스냅샷을 구성하고 7일 동안 보존합니다.` },
    { k:'D', en:`Configure the ElastiCache Redis cluster with Multi-AZ and enable automatic backups. Use Redis persistence (AOF) to minimize data loss on node failure.`, ko:`다중 AZ로 ElastiCache Redis 클러스터를 구성하고 자동 백업을 활성화합니다. 노드 장애 시 데이터 손실을 최소화하기 위해 Redis 지속성(AOF)을 사용합니다.` },
    { k:'E', en:`Deploy a single-node ElastiCache Redis cluster in the primary Availability Zone. Configure the application to gracefully handle cache misses by falling back to the database.`, ko:`기본 가용 영역에 단일 노드 ElastiCache Redis 클러스터를 배포합니다. 데이터베이스로 폴백하여 캐시 미스를 적절하게 처리하도록 애플리케이션을 구성합니다.` },
  ],
  answer: ['A','B'],
  vote: '81% AB',
  explain: `<p><span class="mark-ok">✅ A — Auto Scaling 그룹 다중 AZ 구성</span></p><p>Auto Scaling 그룹을 최소 2개 AZ에 걸쳐 구성하면 한 AZ 장애 시에도 애플리케이션이 계속 서비스됩니다. 웹 계층의 고가용성을 보장합니다.</p>
<p><span class="mark-ok">✅ B — ElastiCache Redis 다중 AZ + 자동 장애 조치</span></p><p>ElastiCache for Redis의 다중 AZ 모드와 자동 장애 조치(Auto Failover)를 활성화하면 기본 노드 실패 시 자동으로 읽기 복제본이 기본 노드로 승격됩니다. 복제본 데이터가 유지되어 데이터 손실이 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ C</span> — 일일 스냅샷은 데이터 손실 최소화에 충분하지 않습니다(최대 24시간 데이터 손실 가능). 자동 장애 조치가 더 효과적입니다.</p>
<p><span class="mark-no">❌ D</span> — AOF는 Redis 독립형 배포에서는 유용하지만 ElastiCache의 Multi-AZ 자동 장애 조치와 조합하면 중복됩니다. 주요 요구 사항은 고가용성입니다.</p>
<p><span class="mark-no">❌ E</span> — 단일 노드는 고가용성을 제공하지 않습니다.</p>`,
  disc: [{ ans:'AB (81%)', txt:'웹 계층은 Auto Scaling 다중 AZ로, 캐시 계층은 ElastiCache 다중 AZ + 자동 장애 조치로 각각 고가용성과 데이터 손실 최소화 달성' }]
},
{
  n: 388,
  en: `A company uses AWS CodePipeline to deploy applications. The company wants to implement automated rollback when a deployment to production fails. The company also wants to receive notifications about deployment status changes.<br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `회사는 AWS CodePipeline을 사용하여 애플리케이션을 배포합니다. 회사는 프로덕션 배포가 실패할 때 자동 롤백을 구현하려고 합니다. 또한 배포 상태 변경에 대한 알림을 받으려고 합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure AWS CodeDeploy deployment groups with automatic rollback enabled. Set the rollback trigger to activate on deployment failure. Create an Amazon EventBridge rule that detects CodePipeline stage execution state changes. Configure the rule to send notifications to an Amazon SNS topic.`, ko:`자동 롤백이 활성화된 AWS CodeDeploy 배포 그룹을 구성합니다. 배포 실패 시 롤백 트리거가 활성화되도록 설정합니다. CodePipeline 스테이지 실행 상태 변경을 감지하는 Amazon EventBridge 규칙을 생성합니다. Amazon SNS 토픽에 알림을 보내도록 규칙을 구성합니다.` },
    { k:'B', en:`Create an AWS Lambda function that monitors CodePipeline execution status. When a failure is detected, the Lambda function triggers a new pipeline run with the previous version. Configure the Lambda function to send SNS notifications on failure.`, ko:`CodePipeline 실행 상태를 모니터링하는 AWS Lambda 함수를 생성합니다. 오류가 감지되면 Lambda 함수가 이전 버전으로 새 파이프라인 실행을 트리거합니다. 오류 시 SNS 알림을 보내도록 Lambda 함수를 구성합니다.` },
    { k:'C', en:`Enable CodePipeline notifications using Amazon CodeStar Notifications. Configure notifications for pipeline execution state changes. Implement rollback by adding a manual approval stage and rerunning the pipeline with the previous artifact.`, ko:`Amazon CodeStar Notifications를 사용하여 CodePipeline 알림을 활성화합니다. 파이프라인 실행 상태 변경에 대한 알림을 구성합니다. 수동 승인 스테이지를 추가하고 이전 아티팩트로 파이프라인을 재실행하여 롤백을 구현합니다.` },
    { k:'D', en:`Configure AWS CodeDeploy with automatic rollback on alarm. Create CloudWatch alarms based on application metrics. Set up Amazon SNS to receive notifications when the alarms trigger.`, ko:`경보 시 자동 롤백으로 AWS CodeDeploy를 구성합니다. 애플리케이션 지표를 기반으로 CloudWatch 경보를 생성합니다. 경보가 트리거될 때 알림을 받도록 Amazon SNS를 설정합니다.` },
  ],
  answer: ['A'],
  vote: '84% A',
  explain: `<p><span class="mark-ok">✅ A — CodeDeploy 자동 롤백 + EventBridge + SNS</span></p><p>CodeDeploy 배포 그룹의 자동 롤백 설정은 배포 실패 시 자동으로 이전 버전으로 롤백합니다. EventBridge를 사용하여 CodePipeline 스테이지 실행 상태 변경(성공, 실패, 중단)을 감지하고 SNS 토픽으로 알림을 발송합니다. 추가 Lambda 함수나 복잡한 로직 없이 AWS 기본 제공 기능만으로 두 요구 사항을 모두 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — Lambda 모니터링과 수동 파이프라인 재실행은 복잡하고 오류가 발생하기 쉽습니다.</p>
<p><span class="mark-no">❌ C</span> — 수동 승인을 통한 롤백은 자동화 요구 사항에 맞지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 경보 기반 자동 롤백은 유용하지만 배포 실패 자체가 아닌 메트릭 임계값에 의존하므로 배포 실패 시 즉각 롤백이 A보다 덜 직접적입니다.</p>`,
  disc: [{ ans:'A (84%)', txt:'CodeDeploy 내장 자동 롤백 + EventBridge/SNS 알림이 추가 서비스 없이 두 요구 사항을 가장 간단하게 충족' }]
},
{
  n: 389,
  en: `A company uses Amazon Elastic Kubernetes Service (Amazon EKS) to run its containerized workloads. The company wants to implement a GitOps workflow where changes to Kubernetes manifests in a Git repository automatically trigger deployments to the EKS cluster. The solution must support automatic rollback if a deployment causes issues.<br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `회사는 Amazon Elastic Kubernetes Service(Amazon EKS)를 사용하여 컨테이너화된 워크로드를 실행합니다. 회사는 Git 저장소의 Kubernetes 매니페스트 변경 사항이 자동으로 EKS 클러스터에 배포를 트리거하는 GitOps 워크플로우를 구현하려고 합니다. 솔루션은 배포가 문제를 일으킬 경우 자동 롤백을 지원해야 합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Set up an AWS CodePipeline pipeline that is triggered by CodeCommit repository changes. Use a CodeBuild project to apply Kubernetes manifests to the EKS cluster using <code>kubectl apply</code>. Configure CodeDeploy to handle rollbacks.`, ko:`CodeCommit 저장소 변경에 의해 트리거되는 AWS CodePipeline 파이프라인을 설정합니다. CodeBuild 프로젝트를 사용하여 <code>kubectl apply</code>를 사용하여 EKS 클러스터에 Kubernetes 매니페스트를 적용합니다. 롤백을 처리하도록 CodeDeploy를 구성합니다.` },
    { k:'B', en:`Install Argo CD on the EKS cluster. Configure Argo CD to watch a Git repository for changes to Kubernetes manifests. Argo CD automatically syncs changes to the cluster and supports rollback through its built-in history and rollback features.`, ko:`EKS 클러스터에 Argo CD를 설치합니다. Kubernetes 매니페스트의 변경 사항에 대한 Git 저장소를 감시하도록 Argo CD를 구성합니다. Argo CD는 자동으로 변경 사항을 클러스터에 동기화하고 내장 기록 및 롤백 기능을 통해 롤백을 지원합니다.` },
    { k:'C', en:`Create an Amazon EventBridge rule that monitors CodeCommit for pushes. Configure the rule to invoke a Lambda function that applies the Kubernetes manifests using the EKS API. Implement rollback logic in the Lambda function.`, ko:`푸시를 위해 CodeCommit을 모니터링하는 Amazon EventBridge 규칙을 생성합니다. EKS API를 사용하여 Kubernetes 매니페스트를 적용하는 Lambda 함수를 호출하도록 규칙을 구성합니다. Lambda 함수에서 롤백 로직을 구현합니다.` },
    { k:'D', en:`Use AWS Proton to define and manage the EKS service templates. Integrate Proton with CodeCommit to automatically deploy template updates when changes are detected.`, ko:`AWS Proton을 사용하여 EKS 서비스 템플릿을 정의하고 관리합니다. 변경 사항이 감지되면 템플릿 업데이트를 자동으로 배포하기 위해 Proton을 CodeCommit과 통합합니다.` },
  ],
  answer: ['B'],
  vote: '88% B',
  explain: `<p><span class="mark-ok">✅ B — Argo CD (GitOps 도구)</span></p><p>Argo CD는 Kubernetes용 선언적 GitOps 지속적 배포 도구입니다. Git 저장소를 진실의 원천(Source of Truth)으로 사용하여 매니페스트 변경을 자동으로 클러스터에 동기화합니다. 내장된 롤백 기능으로 이전 배포 상태로 한 번의 클릭이나 명령으로 롤백 가능합니다. AWS CodePipeline 기반 접근보다 Kubernetes 네이티브 GitOps 워크플로우를 더 적은 구성으로 구현합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CodePipeline + kubectl apply는 GitOps가 아닌 기존 CI/CD 방식으로, 클러스터 상태와 Git이 동기화되지 않을 수 있습니다. CodeDeploy는 ECS/Lambda용이며 EKS 롤백에 직접 적용하기 어렵습니다.</p>
<p><span class="mark-no">❌ C</span> — Lambda 기반 배포는 Argo CD의 상태 동기화, 자동 수정, 롤백 기능을 직접 구현해야 하므로 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Proton은 인프라 템플릿 관리 도구로 Kubernetes GitOps 워크플로우에 적합하지 않습니다.</p>`,
  disc: [{ ans:'B (88%)', txt:'Argo CD는 EKS GitOps 워크플로우의 사실상 표준 도구로, Git 기반 자동 동기화와 내장 롤백으로 최소 오버헤드 구현' }]
},
{
  n: 390,
  en: `A company uses AWS CloudFormation to manage its infrastructure. The company has noticed that developers are sometimes making manual changes to resources that are managed by CloudFormation stacks. These changes cause configuration drift and lead to unexpected behavior. The company wants to detect and remediate drift automatically.<br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `회사는 AWS CloudFormation을 사용하여 인프라를 관리합니다. 회사는 개발자들이 때때로 CloudFormation 스택이 관리하는 리소스를 수동으로 변경한다는 것을 발견했습니다. 이러한 변경 사항은 구성 드리프트를 유발하고 예상치 못한 동작으로 이어집니다. 회사는 드리프트를 자동으로 감지하고 수정하려고 합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Schedule AWS Lambda functions using Amazon EventBridge to run CloudFormation drift detection on all stacks daily. If drift is detected, the Lambda function sends an SNS notification and automatically triggers a CloudFormation stack update to remediate the drift.`, ko:`Amazon EventBridge를 사용하여 AWS Lambda 함수를 예약하여 매일 모든 스택에서 CloudFormation 드리프트 감지를 실행합니다. 드리프트가 감지되면 Lambda 함수가 SNS 알림을 보내고 자동으로 CloudFormation 스택 업데이트를 트리거하여 드리프트를 수정합니다.` },
    { k:'B', en:`Enable AWS Config with the <code>cloudformation-stack-drift-detection-check</code> managed rule. Configure automatic remediation to run the CloudFormation DetectStackDrift API when non-compliant stacks are detected. Set up SNS notifications for compliance state changes.`, ko:`<code>cloudformation-stack-drift-detection-check</code> 관리형 규칙과 함께 AWS Config를 활성화합니다. 비준수 스택이 감지될 때 CloudFormation DetectStackDrift API를 실행하도록 자동 수정을 구성합니다. 규정 준수 상태 변경에 대한 SNS 알림을 설정합니다.` },
    { k:'C', en:`Use AWS CloudTrail to track API calls that modify CloudFormation-managed resources. Create EventBridge rules to detect direct resource modifications. Invoke a Lambda function that identifies the affected CloudFormation stack and runs a stack update to remediate drift.`, ko:`AWS CloudTrail을 사용하여 CloudFormation 관리 리소스를 수정하는 API 호출을 추적합니다. 직접 리소스 수정을 감지하는 EventBridge 규칙을 생성합니다. 영향 받은 CloudFormation 스택을 식별하고 드리프트를 수정하기 위해 스택 업데이트를 실행하는 Lambda 함수를 호출합니다.` },
    { k:'D', en:`Implement an AWS Service Control Policy (SCP) that prevents developers from modifying resources that are tagged with a CloudFormation stack tag. This prevents drift from occurring in the first place.`, ko:`CloudFormation 스택 태그로 태그된 리소스를 수정하는 것을 방지하는 AWS 서비스 제어 정책(SCP)을 구현합니다. 이렇게 하면 처음부터 드리프트가 발생하는 것을 방지합니다.` },
  ],
  answer: ['B'],
  vote: '77% B',
  explain: `<p><span class="mark-ok">✅ B — AWS Config 관리형 규칙 + 드리프트 감지 자동 수정</span></p><p>AWS Config의 <code>cloudformation-stack-drift-detection-check</code> 관리형 규칙은 CloudFormation 스택의 드리프트 상태를 지속적으로 모니터링합니다. 비준수 스택 감지 시 자동 수정으로 <code>DetectStackDrift</code> API를 호출하여 드리프트를 확인하고, SNS 알림으로 팀에 통보합니다. 추가 Lambda 함수나 복잡한 EventBridge 규칙 없이 Config 기본 기능으로 구현 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 스택 업데이트로 드리프트를 "수정"하는 것은 위험합니다. 드리프트 수정은 스택을 원래 템플릿 상태로 되돌려 의도적인 변경도 되돌릴 수 있습니다. 알림과 감지가 더 안전합니다.</p>
<p><span class="mark-no">❌ C</span> — CloudTrail API 추적 + Lambda 조합은 Config보다 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — SCP는 드리프트 방지에 도움되지만 자동 감지 및 수정 요구 사항을 충족하지 않습니다. 또한 합법적인 운영 작업도 차단할 수 있습니다.</p>`,
  disc: [{ ans:'B (77%)', txt:'Config 관리형 규칙으로 지속적 드리프트 모니터링, 자동 수정으로 DetectStackDrift 호출, SNS로 알림 — 최소 오버헤드 솔루션' }]
}
];
