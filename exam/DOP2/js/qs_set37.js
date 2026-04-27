window.QS_SET37 = [
{
  n: 361,
  en: `A company's DevOps team uses Node Package Manager (NPM) open source libraries to build applications. The DevOps team runs its application build process in an AWS CodeBuild project that downloads the NPM libraries from public NPM repositories. The company wants to host the NPM libraries in private NPM repositories. The company also needs to be able to run checks on new versions of the libraries before the DevOps team uses the libraries.<br>Which solution will meet these requirements with the LEAST operational effort?`,
  ko: `회사의 DevOps 팀은 Node Package Manager(NPM) 오픈 소스 라이브러리를 사용하여 애플리케이션을 빌드합니다. DevOps 팀은 공개 NPM 저장소에서 NPM 라이브러리를 다운로드하는 AWS CodeBuild 프로젝트에서 애플리케이션 빌드 프로세스를 실행합니다. 회사는 NPM 라이브러리를 비공개 NPM 저장소에 호스팅하려고 합니다. 또한 DevOps 팀이 라이브러리를 사용하기 전에 새 버전의 라이브러리에 대한 검사를 실행할 수 있어야 합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS CodeArtifact repository with an upstream repository named <code>npm-store</code>. Configure the application build process to use the CodeArtifact repository as the default source for NPM. Create an AWS CodePipeline pipeline to perform the required checks on package versions in the CodeArtifact repository. Set the package status to <code>unlisted</code> if a failure occurs.`, ko:`<code>npm-store</code>라는 업스트림 저장소를 사용하여 AWS CodeArtifact 저장소를 생성합니다. 애플리케이션 빌드 프로세스가 CodeArtifact 저장소를 NPM의 기본 소스로 사용하도록 구성합니다. CodeArtifact 저장소의 패키지 버전에 필요한 검사를 수행하는 AWS CodePipeline 파이프라인을 생성합니다. 오류가 발생하면 패키지 상태를 <code>unlisted</code>로 설정합니다.` },
    { k:'B', en:`Enable Amazon S3 caching in the CodeBuild project configuration. Add a step in the <code>buildspec.yaml</code> config file to perform the required checks on the package versions in the cache.`, ko:`CodeBuild 프로젝트 구성에서 Amazon S3 캐싱을 활성화합니다. <code>buildspec.yaml</code> 구성 파일에 캐시의 패키지 버전에 필요한 검사를 수행하는 단계를 추가합니다.` },
    { k:'C', en:`Create an AWS CodeCommit repository for each library. Clone the required NPM libraries to the appropriate CodeCommit repository. Modify the CodeBuild <code>buildspec.yaml</code> config file to use the private CodeCommit repositories. Add a step to perform the required checks on the package versions.`, ko:`각 라이브러리에 대한 AWS CodeCommit 저장소를 생성합니다. 필요한 NPM 라이브러리를 적절한 CodeCommit 저장소에 클론합니다. CodeBuild <code>buildspec.yaml</code> 구성 파일을 수정하여 비공개 CodeCommit 저장소를 사용합니다. 패키지 버전에 필요한 검사를 수행하는 단계를 추가합니다.` },
    { k:'D', en:`Create an AWS CodeCommit repository for each library. Clone the required NPM libraries to the appropriate CodeCommit repository. Modify the CodeBuild <code>buildspec.yaml</code> config file so that NPM uses the private CodeCommit repositories. Add an AWS CodePipeline pipeline that performs the required checks on the package versions for each new commit to the repositories. Configure the pipeline to revert to the most recent commit in the event of a failure.`, ko:`각 라이브러리에 대한 AWS CodeCommit 저장소를 생성합니다. 필요한 NPM 라이브러리를 적절한 CodeCommit 저장소에 클론합니다. CodeBuild <code>buildspec.yaml</code> 구성 파일을 수정하여 NPM이 비공개 CodeCommit 저장소를 사용하도록 합니다. 저장소의 각 새 커밋에 대한 패키지 버전에 필요한 검사를 수행하는 AWS CodePipeline 파이프라인을 추가합니다. 오류가 발생하면 가장 최근 커밋으로 되돌리도록 파이프라인을 구성합니다.` },
  ],
  answer: ['A'],
  vote: '85% A',
  explain: `<p><span class="mark-ok">✅ A — CodeArtifact + 업스트림 저장소 + CodePipeline</span></p><p>AWS CodeArtifact는 NPM을 포함한 여러 패키지 형식을 지원하는 완전 관리형 아티팩트 저장소입니다. <code>npm-store</code>라는 업스트림 저장소를 구성하면 공개 NPM 저장소에서 패키지를 자동으로 프록시하여 비공개 저장소에 캐싱합니다. CodeBuild 빌드 프로세스가 CodeArtifact를 기본 NPM 소스로 사용하도록 구성하면 됩니다. CodePipeline으로 새 패키지 버전 검사를 자동화하고, 실패 시 패키지를 <code>unlisted</code> 상태로 설정하면 팀이 검사를 통과하지 않은 버전을 사용하는 것을 방지합니다. 이 방식이 가장 운영 오버헤드가 낮습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — S3 캐싱은 빌드 속도를 높이지만 비공개 NPM 저장소 호스팅 요구 사항을 충족하지 않습니다.</p>
<p><span class="mark-no">❌ C, D</span> — CodeCommit은 소스 코드 저장소로, NPM 패키지 저장소로 사용하는 것은 지원되지 않으며 운영 오버헤드가 훨씬 높습니다. 각 라이브러리마다 저장소를 생성하고 수동으로 클론하는 작업이 필요합니다.</p>`,
  disc: [{ ans:'A (85%)', txt:'CodeArtifact의 업스트림 프록시 기능으로 공개 NPM 패키지를 자동 캐싱하고, CodePipeline으로 버전 검사를 자동화하는 최소 오버헤드 솔루션' }]
},
{
  n: 362,
  en: `A company uses AWS CodePipeline and AWS CodeDeploy to deploy application code to Amazon EC2 instances. The EC2 instances send application logs and CodeDeploy logs to Amazon CloudWatch. Recently, the company manually rolled back a deployment because of application errors. The company wants to automate the rollback process when application errors occur.<br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `회사는 AWS CodePipeline 및 AWS CodeDeploy를 사용하여 Amazon EC2 인스턴스에 애플리케이션 코드를 배포합니다. EC2 인스턴스는 애플리케이션 로그와 CodeDeploy 로그를 Amazon CloudWatch로 전송합니다. 최근 회사는 애플리케이션 오류로 인해 배포를 수동으로 롤백했습니다. 회사는 애플리케이션 오류가 발생할 때 롤백 프로세스를 자동화하려고 합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a CloudWatch metric based on the application logs. Create a CloudWatch alarm based on the metric that will activate when application errors occur. Change the deployment group settings to use the CloudWatch alarm configuration. Configure the deployment group to use an auto rollback configuration.`, ko:`애플리케이션 로그를 기반으로 CloudWatch 지표를 생성합니다. 애플리케이션 오류가 발생할 때 활성화되는 지표 기반 CloudWatch 경보를 생성합니다. CloudWatch 경보 구성을 사용하도록 배포 그룹 설정을 변경합니다. 자동 롤백 구성을 사용하도록 배포 그룹을 구성합니다.` },
    { k:'B', en:`Configure a CloudWatch alarm that uses a custom metric for application errors that are recorded in the CodeDeploy agent logs. Configure the current deployment to use the CloudWatch alarm for its alarm configuration.`, ko:`CodeDeploy 에이전트 로그에 기록된 애플리케이션 오류에 대한 사용자 지정 지표를 사용하는 CloudWatch 경보를 구성합니다. 현재 배포가 경보 구성에 CloudWatch 경보를 사용하도록 구성합니다.` },
    { k:'C', en:`Create an Amazon EventBridge rule that is triggered by CodeDeploy events. Configure the rule to invoke an AWS Lambda function when a deployment fails. Configure the Lambda function to call the CodeDeploy rollback API.`, ko:`CodeDeploy 이벤트에 의해 트리거되는 Amazon EventBridge 규칙을 생성합니다. 배포가 실패할 때 AWS Lambda 함수를 호출하도록 규칙을 구성합니다. CodeDeploy 롤백 API를 호출하도록 Lambda 함수를 구성합니다.` },
    { k:'D', en:`Create a CloudWatch dashboard that displays application error metrics. Create an Amazon SNS notification that is triggered when the number of application errors exceeds a threshold. Configure the SNS notification to alert an administrator to manually initiate a rollback.`, ko:`애플리케이션 오류 지표를 표시하는 CloudWatch 대시보드를 생성합니다. 애플리케이션 오류 수가 임계값을 초과할 때 트리거되는 Amazon SNS 알림을 생성합니다. 관리자가 수동으로 롤백을 시작하도록 SNS 알림을 구성합니다.` },
  ],
  answer: ['A'],
  vote: '88% A',
  explain: `<p><span class="mark-ok">✅ A — CloudWatch 경보 + CodeDeploy 자동 롤백</span></p><p>CodeDeploy는 배포 그룹 수준에서 CloudWatch 경보와 연동하는 내장 자동 롤백 기능을 제공합니다. 애플리케이션 로그에서 CloudWatch 지표 필터를 생성하고, 오류 임계값을 초과할 때 경보가 활성화되면 CodeDeploy가 자동으로 롤백을 트리거합니다. 추가 Lambda 함수나 수동 개입 없이 CodeDeploy 자체 기능만으로 구현되므로 운영 오버헤드가 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — CodeDeploy 에이전트 로그는 배포 관련 로그이지 애플리케이션 오류 로그가 아닙니다. 요구 사항은 애플리케이션 오류 감지입니다.</p>
<p><span class="mark-no">❌ C</span> — EventBridge + Lambda 조합은 CodeDeploy 내장 기능보다 운영 오버헤드가 높습니다. 배포 실패 이벤트는 이미 롤백이 필요한 상태이며, 애플리케이션 오류를 선제적으로 감지하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — 수동 개입이 필요하므로 자동화 요구 사항을 충족하지 않습니다.</p>`,
  disc: [{ ans:'A (88%)', txt:'CloudWatch 지표 필터로 앱 오류를 감지하고 CodeDeploy 배포 그룹의 내장 자동 롤백 기능과 연동하는 가장 단순한 자동화 패턴' }]
},
{
  n: 363,
  en: `A company has an application that runs on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer. The company has been experiencing issues with application availability during Auto Scaling group scale-in events. During these events, the ALB continues to route traffic to instances that are being terminated, causing errors. A DevOps engineer needs to solve this problem.<br>Which solution will meet these requirements?`,
  ko: `회사는 Application Load Balancer 뒤의 Auto Scaling 그룹에 있는 Amazon EC2 인스턴스에서 실행되는 애플리케이션을 보유하고 있습니다. 회사는 Auto Scaling 그룹 스케일-인 이벤트 중 애플리케이션 가용성 문제를 경험하고 있습니다. 이러한 이벤트 중에 ALB는 종료되고 있는 인스턴스로 계속 트래픽을 라우팅하여 오류를 발생시킵니다. DevOps 엔지니어는 이 문제를 해결해야 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Enable connection draining on the ALB target group. Set an appropriate draining timeout that allows existing connections to complete before instance termination.`, ko:`ALB 대상 그룹에서 연결 드레이닝을 활성화합니다. 인스턴스 종료 전에 기존 연결이 완료될 수 있도록 적절한 드레이닝 타임아웃을 설정합니다.` },
    { k:'B', en:`Configure an Auto Scaling lifecycle hook for the <code>EC2_INSTANCE_TERMINATING</code> transition. Use an Amazon EventBridge rule to detect the lifecycle hook event. Invoke an AWS Lambda function to deregister the instance from the ALB target group before proceeding with termination.`, ko:`<code>EC2_INSTANCE_TERMINATING</code> 전환에 대한 Auto Scaling 수명 주기 훅을 구성합니다. Amazon EventBridge 규칙을 사용하여 수명 주기 훅 이벤트를 감지합니다. AWS Lambda 함수를 호출하여 종료를 진행하기 전에 ALB 대상 그룹에서 인스턴스를 등록 취소합니다.` },
    { k:'C', en:`Create an Amazon SNS topic that is triggered when instances are terminated by Auto Scaling. Configure the SNS topic to notify developers to manually update the ALB target group.`, ko:`Auto Scaling에 의해 인스턴스가 종료될 때 트리거되는 Amazon SNS 토픽을 생성합니다. 개발자에게 ALB 대상 그룹을 수동으로 업데이트하도록 알리도록 SNS 토픽을 구성합니다.` },
    { k:'D', en:`Increase the health check grace period on the Auto Scaling group to give instances more time to complete processing before termination.`, ko:`Auto Scaling 그룹의 상태 확인 유예 기간을 늘려 인스턴스가 종료 전에 처리를 완료할 수 있는 시간을 더 많이 줍니다.` },
  ],
  answer: ['A'],
  vote: '82% A',
  explain: `<p><span class="mark-ok">✅ A — ALB 연결 드레이닝(Deregistration Delay)</span></p><p>ALB 대상 그룹의 <strong>연결 드레이닝(Deregistration Delay)</strong> 기능은 인스턴스가 대상 그룹에서 등록 취소될 때 진행 중인 기존 요청이 완료될 때까지 새 요청은 차단하고 기존 연결은 유지합니다. Auto Scaling 스케일-인 시 인스턴스는 자동으로 ALB에서 등록 취소되고, 드레이닝 타임아웃(기본 300초) 동안 기존 연결이 완료된 후 종료됩니다. 이것이 이 문제를 해결하는 가장 직접적이고 운영 오버헤드가 낮은 솔루션입니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 수명 주기 훅 + Lambda 조합은 작동하지만 ALB 드레이닝보다 복잡하고 이미 ALB가 이 기능을 내장 지원합니다.</p>
<p><span class="mark-no">❌ C</span> — 수동 개입이 필요하여 자동화 요구 사항을 충족하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 상태 확인 유예 기간은 인스턴스 시작 후 상태 확인을 지연시키는 것으로, 종료 시 연결 드레이닝과 무관합니다.</p>`,
  disc: [{ ans:'A (82%)', txt:'ALB Deregistration Delay(연결 드레이닝)는 스케일-인 시 진행 중 요청 보호를 위한 표준 설정으로 추가 인프라 없이 해결 가능' }]
},
{
  n: 364,
  en: `A company's DevOps engineer is responsible for managing infrastructure for a web application. The application runs on Amazon EC2 instances behind an Application Load Balancer. The company uses Amazon CloudWatch to monitor the application. The company wants to receive automated alerts when the application error rate exceeds acceptable thresholds and wants to automatically restart the problematic EC2 instances when errors are detected.<br>Which solution will meet these requirements with the LEAST development effort?`,
  ko: `회사의 DevOps 엔지니어는 웹 애플리케이션의 인프라를 관리할 책임이 있습니다. 애플리케이션은 Application Load Balancer 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 회사는 Amazon CloudWatch를 사용하여 애플리케이션을 모니터링합니다. 회사는 애플리케이션 오류율이 허용 임계값을 초과할 때 자동 경보를 받고 오류가 감지되면 문제가 있는 EC2 인스턴스를 자동으로 재시작하려고 합니다.<br>최소한의 개발 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a CloudWatch alarm for the ALB <code>HTTPCode_Target_5XX_Count</code> metric. Configure the alarm to send a notification to an Amazon SNS topic. Create an AWS Systems Manager Automation runbook to reboot instances. Configure the SNS topic to invoke the runbook when the alarm is triggered.`, ko:`ALB <code>HTTPCode_Target_5XX_Count</code> 지표에 대한 CloudWatch 경보를 생성합니다. 경보가 Amazon SNS 토픽에 알림을 보내도록 구성합니다. 인스턴스를 재부팅하는 AWS Systems Manager Automation 런북을 생성합니다. 경보가 트리거될 때 런북을 호출하도록 SNS 토픽을 구성합니다.` },
    { k:'B', en:`Create a CloudWatch alarm for the ALB <code>HTTPCode_Target_5XX_Count</code> metric. Add an EC2 reboot action to the alarm. Configure the alarm to send a notification to an Amazon SNS topic.`, ko:`ALB <code>HTTPCode_Target_5XX_Count</code> 지표에 대한 CloudWatch 경보를 생성합니다. 경보에 EC2 재부팅 액션을 추가합니다. 경보가 Amazon SNS 토픽에 알림을 보내도록 구성합니다.` },
    { k:'C', en:`Enable AWS Config for the account. Create an AWS Config rule that evaluates EC2 instance health. Configure automatic remediation to reboot noncompliant instances.`, ko:`계정에 대해 AWS Config를 활성화합니다. EC2 인스턴스 상태를 평가하는 AWS Config 규칙을 생성합니다. 비준수 인스턴스를 재부팅하도록 자동 수정을 구성합니다.` },
    { k:'D', en:`Create an Amazon EventBridge rule that detects ALB access log entries containing 5XX errors. Configure the rule to invoke an AWS Lambda function that reboots the problematic instances. Configure the Lambda function to send a notification to an Amazon SNS topic.`, ko:`5XX 오류가 포함된 ALB 액세스 로그 항목을 감지하는 Amazon EventBridge 규칙을 생성합니다. 문제가 있는 인스턴스를 재부팅하는 AWS Lambda 함수를 호출하도록 규칙을 구성합니다. Lambda 함수가 Amazon SNS 토픽에 알림을 보내도록 구성합니다.` },
  ],
  answer: ['B'],
  vote: '79% B',
  explain: `<p><span class="mark-ok">✅ B — CloudWatch 경보 EC2 재부팅 액션 + SNS</span></p><p>CloudWatch 경보는 EC2 인스턴스에 대한 내장 재부팅 액션을 지원합니다. ALB의 <code>HTTPCode_Target_5XX_Count</code> 지표로 애플리케이션 오류율을 모니터링하고, 임계값 초과 시 경보가 EC2 재부팅 액션을 트리거합니다. SNS 알림도 동시에 발송됩니다. 추가 Lambda 함수나 SSM 런북 없이 CloudWatch 경보 하나로 두 요구 사항을 모두 충족하므로 개발 노력이 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — SNS → SSM Automation 호출은 추가 구성이 필요하여 개발 노력이 더 많이 듭니다. CloudWatch 경보의 내장 EC2 액션이 더 간단합니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Config는 구성 준수 관리 도구로, 실시간 오류율 모니터링에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — ALB 액세스 로그는 S3에 저장되며 실시간 이벤트가 아닙니다. EventBridge + Lambda 조합은 개발 노력이 더 많이 듭니다.</p>`,
  disc: [{ ans:'B (79%)', txt:'CloudWatch 경보의 내장 EC2 재부팅 액션과 SNS 알림을 조합하면 추가 Lambda/SSM 없이 두 요구 사항을 동시에 충족' }]
},
{
  n: 365,
  en: `A company is implementing a multi-account AWS environment using AWS Organizations. The company's security team needs to ensure that all new AWS accounts created in the organization automatically have specific AWS Config rules enabled. The security team also wants to receive consolidated compliance reports across all accounts.<br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `회사는 AWS Organizations을 사용하여 멀티 계정 AWS 환경을 구현하고 있습니다. 회사의 보안 팀은 조직에서 생성된 모든 새 AWS 계정이 자동으로 특정 AWS Config 규칙을 활성화하도록 해야 합니다. 보안 팀은 또한 모든 계정에 걸쳐 통합된 규정 준수 보고서를 받기를 원합니다.<br>이 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Enable AWS Config in the management account. Create AWS Config rules in the management account. Use the rules to evaluate compliance across all member accounts.`, ko:`관리 계정에서 AWS Config를 활성화합니다. 관리 계정에서 AWS Config 규칙을 생성합니다. 규칙을 사용하여 모든 멤버 계정의 규정 준수를 평가합니다.` },
    { k:'B', en:`Create an AWS Config conformance pack. Deploy the conformance pack to the organization using AWS CloudFormation StackSets.`, ko:`AWS Config 준수 팩을 생성합니다. AWS CloudFormation StackSets를 사용하여 조직에 준수 팩을 배포합니다.` },
    { k:'C', en:`Designate a delegated administrator account for AWS Config. Enable AWS Config with organization-wide settings from the delegated administrator account. Deploy an organizational conformance pack from the delegated administrator account.`, ko:`AWS Config의 위임된 관리자 계정을 지정합니다. 위임된 관리자 계정에서 조직 전체 설정으로 AWS Config를 활성화합니다. 위임된 관리자 계정에서 조직 준수 팩을 배포합니다.` },
    { k:'D', en:`Create an AWS Service Catalog portfolio with Config rules. Share the portfolio with all member accounts using AWS Organizations. Configure each member account to automatically accept the portfolio.`, ko:`Config 규칙을 포함한 AWS Service Catalog 포트폴리오를 생성합니다. AWS Organizations를 사용하여 모든 멤버 계정과 포트폴리오를 공유합니다. 각 멤버 계정이 포트폴리오를 자동으로 수락하도록 구성합니다.` },
    { k:'E', en:`Enable AWS Security Hub in the management account. Configure AWS Security Hub to aggregate findings from all accounts. Use the aggregated findings to generate compliance reports.`, ko:`관리 계정에서 AWS Security Hub를 활성화합니다. 모든 계정의 결과를 집계하도록 AWS Security Hub를 구성합니다. 집계된 결과를 사용하여 규정 준수 보고서를 생성합니다.` },
  ],
  answer: ['B','C'],
  vote: '76% BC',
  explain: `<p><span class="mark-ok">✅ B — 준수 팩 생성 + StackSets 배포</span></p><p>AWS Config 준수 팩(Conformance Pack)은 여러 Config 규칙과 수정 작업을 하나의 패키지로 묶은 것입니다. CloudFormation StackSets를 사용하면 조직의 모든 계정과 리전에 동시에 배포할 수 있습니다.</p>
<p><span class="mark-ok">✅ C — 위임된 관리자 + 조직 준수 팩</span></p><p>위임된 관리자 계정을 통해 조직 수준의 Config 설정을 관리하고, 조직 준수 팩을 배포하면 새 계정이 자동으로 규칙을 적용받습니다. 통합 규정 준수 보고서도 중앙에서 확인 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 관리 계정의 Config 규칙은 자동으로 멤버 계정에 적용되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Service Catalog는 이 요구 사항에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — Security Hub는 보안 결과 집계에 사용되지만 Config 규칙 자동 적용은 지원하지 않습니다.</p>`,
  disc: [{ ans:'BC (76%)', txt:'조직 준수 팩과 위임된 관리자 조합이 새 계정 자동 규칙 적용 + 통합 보고를 가장 효율적으로 구현' }]
},
{
  n: 366,
  en: `A DevOps engineer is working on a data archival project that requires the migration of on-premises data to an Amazon S3 bucket. The DevOps engineer develops a script that incrementally archives on-premises data that is older than 1 month to Amazon S3. The DevOps engineer needs to verify the integrity of the transferred data. The solution must have the LEAST operational overhead.<br>Which solution will meet these requirements?`,
  ko: `DevOps 엔지니어는 온프레미스 데이터를 Amazon S3 버킷으로 마이그레이션해야 하는 데이터 보관 프로젝트를 진행하고 있습니다. DevOps 엔지니어는 1개월 이상 된 온프레미스 데이터를 Amazon S3로 점진적으로 보관하는 스크립트를 개발합니다. DevOps 엔지니어는 전송된 데이터의 무결성을 확인해야 합니다. 솔루션은 최소한의 운영 오버헤드를 가져야 합니다.<br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use the AWS CLI <code>s3 sync</code> command with the <code>--checksum-algorithm</code> option to transfer files to S3. Use the S3 ETag value to verify the integrity of the transferred files.`, ko:`<code>--checksum-algorithm</code> 옵션이 있는 AWS CLI <code>s3 sync</code> 명령을 사용하여 파일을 S3로 전송합니다. 전송된 파일의 무결성을 확인하기 위해 S3 ETag 값을 사용합니다.` },
    { k:'B', en:`Use AWS DataSync to transfer the on-premises data to Amazon S3. Configure DataSync to run data integrity checks during transfer by enabling the verification option.`, ko:`AWS DataSync를 사용하여 온프레미스 데이터를 Amazon S3로 전송합니다. 확인 옵션을 활성화하여 전송 중에 데이터 무결성 검사를 실행하도록 DataSync를 구성합니다.` },
    { k:'C', en:`Calculate MD5 checksums for all on-premises files before transfer. Upload files to S3 using a multipart upload with each part's checksum. After upload, compare the original checksums with the S3 object checksums.`, ko:`전송 전에 모든 온프레미스 파일에 대한 MD5 체크섬을 계산합니다. 각 파트의 체크섬을 사용한 멀티파트 업로드를 사용하여 파일을 S3에 업로드합니다. 업로드 후 원래 체크섬을 S3 객체 체크섬과 비교합니다.` },
    { k:'D', en:`Set up an AWS Transfer Family server to handle file transfers from on-premises to Amazon S3. Use CloudWatch Logs to monitor transfer activity and verify successful transfers.`, ko:`온프레미스에서 Amazon S3로의 파일 전송을 처리하는 AWS Transfer Family 서버를 설정합니다. CloudWatch Logs를 사용하여 전송 활동을 모니터링하고 성공적인 전송을 확인합니다.` },
  ],
  answer: ['B'],
  vote: '83% B',
  explain: `<p><span class="mark-ok">✅ B — AWS DataSync + 무결성 검사</span></p><p>AWS DataSync는 온프레미스에서 AWS 스토리지 서비스로의 데이터 이동을 위해 설계된 완전 관리형 서비스입니다. DataSync는 전송 중 및 전송 후 데이터 무결성 검사를 내장으로 수행하며, 체크섬을 자동으로 계산하고 비교합니다. 별도의 체크섬 계산 스크립트나 추가 검증 코드 없이 무결성 검증이 자동화되므로 운영 오버헤드가 가장 낮습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CLI s3 sync는 기능적으로 작동하지만 ETag는 멀티파트 업로드 시 단순 MD5가 아니어서 무결성 검증이 복잡할 수 있습니다. DataSync보다 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ C</span> — 수동 체크섬 계산과 비교는 개발 작업이 많이 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Transfer Family는 SFTP/FTP 프로토콜 기반 전송용이며 데이터 무결성 검사 기능이 DataSync만큼 강력하지 않습니다.</p>`,
  disc: [{ ans:'B (83%)', txt:'DataSync는 내장 체크섬 검증과 자동 무결성 확인으로 추가 개발 없이 완전 자동화된 안전한 데이터 마이그레이션 제공' }]
},
{
  n: 367,
  en: `A company has a fleet of Amazon EC2 instances that run in multiple AWS Regions. The company uses AWS Systems Manager to manage the fleet. The company needs to ensure that all EC2 instances are patched with the latest security updates within 24 hours of the updates becoming available. The company also needs a report that shows the patch compliance status of all instances.<br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `회사는 여러 AWS 리전에서 실행되는 Amazon EC2 인스턴스 플리트를 보유하고 있습니다. 회사는 AWS Systems Manager를 사용하여 플리트를 관리합니다. 회사는 업데이트가 제공된 후 24시간 이내에 모든 EC2 인스턴스에 최신 보안 업데이트가 패치되도록 해야 합니다. 회사는 또한 모든 인스턴스의 패치 규정 준수 상태를 보여주는 보고서가 필요합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS Systems Manager Patch Manager to create a patch baseline. Create a maintenance window that runs every 24 hours. Associate the patch baseline with the maintenance window and target all EC2 instances. Use Patch Manager compliance reporting to generate patch status reports.`, ko:`AWS Systems Manager Patch Manager를 사용하여 패치 기준을 생성합니다. 24시간마다 실행되는 유지 관리 창을 생성합니다. 패치 기준을 유지 관리 창과 연결하고 모든 EC2 인스턴스를 대상으로 지정합니다. Patch Manager 규정 준수 보고를 사용하여 패치 상태 보고서를 생성합니다.` },
    { k:'B', en:`Use AWS Lambda functions scheduled with Amazon EventBridge to run the <code>yum update</code> or <code>apt-get update</code> commands via SSH on all EC2 instances every 24 hours. Use CloudWatch Logs to track the output and generate compliance reports.`, ko:`Amazon EventBridge로 예약된 AWS Lambda 함수를 사용하여 24시간마다 모든 EC2 인스턴스에서 SSH를 통해 <code>yum update</code> 또는 <code>apt-get update</code> 명령을 실행합니다. CloudWatch Logs를 사용하여 출력을 추적하고 규정 준수 보고서를 생성합니다.` },
    { k:'C', en:`Configure AWS Config rules to check if EC2 instances have the latest patches. Set up AWS Config remediation to apply patches automatically when noncompliant instances are detected.`, ko:`EC2 인스턴스에 최신 패치가 있는지 확인하는 AWS Config 규칙을 구성합니다. 비준수 인스턴스가 감지될 때 자동으로 패치를 적용하도록 AWS Config 수정을 설정합니다.` },
    { k:'D', en:`Install a third-party patch management tool on each EC2 instance. Configure the tool to check for and apply patches every 24 hours. Generate compliance reports from the tool's dashboard.`, ko:`각 EC2 인스턴스에 타사 패치 관리 도구를 설치합니다. 도구가 24시간마다 패치를 확인하고 적용하도록 구성합니다. 도구의 대시보드에서 규정 준수 보고서를 생성합니다.` },
  ],
  answer: ['A'],
  vote: '95% A',
  explain: `<p><span class="mark-ok">✅ A — Systems Manager Patch Manager + 유지 관리 창</span></p><p>AWS Systems Manager Patch Manager는 EC2 인스턴스 패치를 자동화하는 완전 관리형 서비스입니다. 패치 기준(Patch Baseline)으로 승인된 패치를 정의하고, 유지 관리 창(Maintenance Window)으로 패치 일정을 설정합니다. 24시간 주기 유지 관리 창으로 최신 보안 업데이트를 24시간 내 적용 가능하며, Patch Manager의 규정 준수 보고 기능으로 모든 인스턴스의 패치 상태를 중앙에서 확인할 수 있습니다. 추가 도구 없이 Systems Manager만으로 구현 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — Lambda + SSH 방식은 SSH 접근성, 보안 그룹, 키 관리 등 복잡한 설정이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Config는 규정 준수 감사 도구이며 패치 관리에는 Patch Manager가 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — 타사 도구는 운영 오버헤드가 높고 AWS 네이티브 솔루션보다 비효율적입니다.</p>`,
  disc: [{ ans:'A (95%)', txt:'Systems Manager Patch Manager는 AWS 표준 패치 자동화 솔루션으로, 유지 관리 창과 규정 준수 보고를 모두 기본 제공' }]
},
{
  n: 368,
  en: `A company is running an application on a fleet of Amazon EC2 instances behind an Application Load Balancer. The company wants to implement a blue/green deployment strategy for the application. During the deployment, the company wants to be able to shift traffic gradually to the new version while maintaining the ability to quickly roll back. The company uses AWS CodeDeploy for deployments.<br>Which configuration will meet these requirements?`,
  ko: `회사는 Application Load Balancer 뒤의 Amazon EC2 인스턴스 플리트에서 애플리케이션을 실행하고 있습니다. 회사는 애플리케이션에 블루/그린 배포 전략을 구현하려고 합니다. 배포 중에 회사는 빠른 롤백 능력을 유지하면서 새 버전으로 트래픽을 점진적으로 전환할 수 있기를 원합니다. 회사는 배포에 AWS CodeDeploy를 사용합니다.<br>이 요구 사항을 충족하는 구성은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Configure a CodeDeploy deployment group with a blue/green deployment type. Set the traffic routing to <code>TimeBasedLinear</code> to gradually shift traffic. Configure the deployment group to terminate the original instances immediately after deployment.`, ko:`블루/그린 배포 유형으로 CodeDeploy 배포 그룹을 구성합니다. 트래픽을 점진적으로 전환하도록 트래픽 라우팅을 <code>TimeBasedLinear</code>로 설정합니다. 배포 후 즉시 원래 인스턴스를 종료하도록 배포 그룹을 구성합니다.` },
    { k:'B', en:`Configure a CodeDeploy deployment group with a blue/green deployment type. Set the traffic routing to <code>TimeBasedLinear</code> or <code>TimeBasedCanary</code> to gradually shift traffic. Configure the deployment group to keep the original instances running for a specified period after deployment to enable quick rollback.`, ko:`블루/그린 배포 유형으로 CodeDeploy 배포 그룹을 구성합니다. 트래픽을 점진적으로 전환하도록 트래픽 라우팅을 <code>TimeBasedLinear</code> 또는 <code>TimeBasedCanary</code>로 설정합니다. 빠른 롤백을 활성화하기 위해 배포 후 지정된 기간 동안 원래 인스턴스가 계속 실행되도록 배포 그룹을 구성합니다.` },
    { k:'C', en:`Configure a CodeDeploy deployment group with an in-place deployment type. Set the deployment configuration to <code>CodeDeployDefault.HalfAtATime</code> to gradually update instances. Use CodeDeploy rollback features to revert to the previous version.`, ko:`인플레이스 배포 유형으로 CodeDeploy 배포 그룹을 구성합니다. 인스턴스를 점진적으로 업데이트하도록 배포 구성을 <code>CodeDeployDefault.HalfAtATime</code>으로 설정합니다. 이전 버전으로 되돌리기 위해 CodeDeploy 롤백 기능을 사용합니다.` },
    { k:'D', en:`Configure a CodeDeploy deployment group with a blue/green deployment type. Set the traffic routing to <code>AllAtOnce</code> to ensure the new version receives all traffic immediately. Configure the deployment group to keep the original instances running for 1 hour after deployment.`, ko:`블루/그린 배포 유형으로 CodeDeploy 배포 그룹을 구성합니다. 새 버전이 즉시 모든 트래픽을 받도록 트래픽 라우팅을 <code>AllAtOnce</code>로 설정합니다. 배포 후 1시간 동안 원래 인스턴스가 계속 실행되도록 배포 그룹을 구성합니다.` },
  ],
  answer: ['B'],
  vote: '91% B',
  explain: `<p><span class="mark-ok">✅ B — 블루/그린 + 점진적 트래픽 전환 + 원래 인스턴스 유지</span></p><p>CodeDeploy 블루/그린 배포에서 <code>TimeBasedLinear</code>(선형 점진적 전환) 또는 <code>TimeBasedCanary</code>(카나리 방식) 트래픽 라우팅으로 새 버전(그린)으로 트래픽을 서서히 전환합니다. 배포 후 원래 인스턴스(블루)를 지정된 기간 동안 유지하면 문제 발생 시 즉시 트래픽을 블루로 되돌릴 수 있어 빠른 롤백이 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 원래 인스턴스를 즉시 종료하면 롤백이 불가능하거나 느려집니다.</p>
<p><span class="mark-no">❌ C</span> — 인플레이스 배포는 진정한 블루/그린이 아니며, 빠른 롤백 능력이 블루/그린보다 제한적입니다.</p>
<p><span class="mark-no">❌ D</span> — AllAtOnce는 점진적 트래픽 전환이 아닙니다.</p>`,
  disc: [{ ans:'B (91%)', txt:'블루/그린 배포에서 점진적 트래픽 전환 + 원래 환경 유지는 안전한 배포와 빠른 롤백의 표준 패턴' }]
},
{
  n: 369,
  en: `A company uses AWS CloudFormation to provision its infrastructure. The company has multiple environments (development, staging, production) that use different configurations. The company wants to ensure that infrastructure changes are tested in lower environments before being applied to production. The company also wants to prevent unauthorized changes to production infrastructure.<br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `회사는 AWS CloudFormation을 사용하여 인프라를 프로비저닝합니다. 회사는 서로 다른 구성을 사용하는 여러 환경(개발, 스테이징, 프로덕션)을 보유하고 있습니다. 회사는 인프라 변경 사항이 프로덕션에 적용되기 전에 하위 환경에서 테스트되도록 해야 합니다. 또한 프로덕션 인프라에 대한 무단 변경을 방지하려고 합니다.<br>이 요구 사항을 충족하는 단계 조합은 무엇입니까? (두 가지 선택)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Use a single AWS CodePipeline pipeline that deploys to development, staging, and production environments sequentially. Add manual approval actions between each environment stage. Use CloudFormation change sets to preview changes before deployment.`, ko:`개발, 스테이징, 프로덕션 환경에 순차적으로 배포하는 단일 AWS CodePipeline 파이프라인을 사용합니다. 각 환경 스테이지 사이에 수동 승인 액션을 추가합니다. CloudFormation 변경 세트를 사용하여 배포 전에 변경 사항을 미리 봅니다.` },
    { k:'B', en:`Create separate AWS accounts for each environment. Use AWS Organizations SCPs to restrict CloudFormation stack operations in the production account to only authorized IAM roles.`, ko:`각 환경에 대한 별도의 AWS 계정을 생성합니다. AWS Organizations SCP를 사용하여 프로덕션 계정의 CloudFormation 스택 작업을 권한이 있는 IAM 역할로만 제한합니다.` },
    { k:'C', en:`Enable AWS CloudTrail in the production account. Create an Amazon EventBridge rule to detect CloudFormation stack changes. Configure the rule to send alerts to the security team.`, ko:`프로덕션 계정에서 AWS CloudTrail을 활성화합니다. CloudFormation 스택 변경을 감지하는 Amazon EventBridge 규칙을 생성합니다. 규칙이 보안 팀에 경보를 보내도록 구성합니다.` },
    { k:'D', en:`Use a single AWS account for all environments with different VPCs. Apply resource-based policies to limit access to production resources.`, ko:`서로 다른 VPC가 있는 모든 환경에 단일 AWS 계정을 사용합니다. 리소스 기반 정책을 적용하여 프로덕션 리소스에 대한 액세스를 제한합니다.` },
    { k:'E', en:`Enable CloudFormation drift detection on production stacks. Set up a scheduled AWS Lambda function to check for drift daily and notify the team when drift is detected.`, ko:`프로덕션 스택에서 CloudFormation 드리프트 감지를 활성화합니다. 드리프트를 매일 확인하고 드리프트가 감지되면 팀에 알리는 예약된 AWS Lambda 함수를 설정합니다.` },
  ],
  answer: ['A','B'],
  vote: '80% AB',
  explain: `<p><span class="mark-ok">✅ A — CodePipeline 순차 배포 + 수동 승인 + 변경 세트</span></p><p>단일 파이프라인에서 개발→스테이징→프로덕션 순서로 배포하고, 각 환경 간 수동 승인을 요구하면 하위 환경 테스트 후 프로덕션 배포를 보장합니다. CloudFormation 변경 세트로 배포 전 변경 내용을 검토할 수 있습니다.</p>
<p><span class="mark-ok">✅ B — 계정 분리 + SCP로 프로덕션 보호</span></p><p>환경별 계정 분리는 강력한 격리를 제공합니다. SCP로 프로덕션 계정에서 CloudFormation 스택 작업을 특정 IAM 역할로만 제한하면 무단 변경을 방지합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ C</span> — CloudTrail + EventBridge는 변경 감지 후 알림을 보내지만 무단 변경 자체를 방지하지는 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 단일 계정 + VPC 분리는 계정 수준 격리보다 훨씬 약합니다. SCP를 적용할 수 없습니다.</p>
<p><span class="mark-no">❌ E</span> — 드리프트 감지는 현재 상태 모니터링이며 무단 변경 방지와 환경 간 순차 배포 요구 사항을 충족하지 않습니다.</p>`,
  disc: [{ ans:'AB (80%)', txt:'파이프라인 순차 배포로 하위 환경 테스트 보장, 계정 분리+SCP로 프로덕션 무단 변경 방지' }]
},
{
  n: 370,
  en: `A company uses Amazon Elastic Container Service (Amazon ECS) to run containerized applications. The company stores container images in Amazon Elastic Container Registry (Amazon ECR). A DevOps engineer needs to implement a solution that automatically scans new container images for vulnerabilities when they are pushed to ECR. The solution must alert the security team about critical vulnerabilities.<br>Which solution will meet these requirements with the LEAST operational overhead?`,
  ko: `회사는 Amazon Elastic Container Service(Amazon ECS)를 사용하여 컨테이너화된 애플리케이션을 실행합니다. 회사는 Amazon Elastic Container Registry(Amazon ECR)에 컨테이너 이미지를 저장합니다. DevOps 엔지니어는 새 컨테이너 이미지가 ECR에 푸시될 때 자동으로 취약점을 스캔하는 솔루션을 구현해야 합니다. 솔루션은 중요한 취약점에 대해 보안 팀에 경보를 보내야 합니다.<br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Enable Amazon Inspector enhanced scanning for the ECR repository. Create an Amazon EventBridge rule that detects Amazon Inspector findings with a severity of CRITICAL. Configure the rule to send notifications to an Amazon SNS topic that alerts the security team.`, ko:`ECR 저장소에 대해 Amazon Inspector 향상된 스캔을 활성화합니다. CRITICAL 심각도의 Amazon Inspector 결과를 감지하는 Amazon EventBridge 규칙을 생성합니다. 보안 팀에 경보를 보내는 Amazon SNS 토픽에 알림을 보내도록 규칙을 구성합니다.` },
    { k:'B', en:`Enable basic scanning on the ECR repository. Create an AWS Lambda function that runs after each image push to parse the scan results. Configure the Lambda function to send critical vulnerability alerts to an Amazon SNS topic.`, ko:`ECR 저장소에서 기본 스캔을 활성화합니다. 각 이미지 푸시 후 스캔 결과를 분석하는 AWS Lambda 함수를 생성합니다. Lambda 함수가 Amazon SNS 토픽에 중요 취약점 경보를 보내도록 구성합니다.` },
    { k:'C', en:`Deploy a third-party vulnerability scanning tool on an EC2 instance. Configure the tool to poll ECR for new images and scan them. Configure the tool to send alerts when critical vulnerabilities are found.`, ko:`EC2 인스턴스에 타사 취약점 스캐닝 도구를 배포합니다. ECR에서 새 이미지를 폴링하고 스캔하도록 도구를 구성합니다. 중요 취약점이 발견될 때 경보를 보내도록 도구를 구성합니다.` },
    { k:'D', en:`Create an AWS CodeBuild project that runs a vulnerability scan using open source tools as part of the CI/CD pipeline. Configure the pipeline to fail and send an SNS notification if critical vulnerabilities are found.`, ko:`CI/CD 파이프라인의 일부로 오픈 소스 도구를 사용하여 취약점 스캔을 실행하는 AWS CodeBuild 프로젝트를 생성합니다. 중요 취약점이 발견되면 파이프라인이 실패하고 SNS 알림을 보내도록 구성합니다.` },
  ],
  answer: ['A'],
  vote: '90% A',
  explain: `<p><span class="mark-ok">✅ A — Amazon Inspector 향상된 스캔 + EventBridge + SNS</span></p><p>Amazon Inspector는 ECR과 직접 통합되어 이미지가 푸시될 때 자동으로 취약점 스캔을 수행합니다. 향상된 스캔(Enhanced Scanning)은 OS 패키지와 프로그래밍 언어 패키지 취약점 모두를 스캔합니다. EventBridge 규칙으로 CRITICAL 심각도 결과를 필터링하고 SNS를 통해 보안 팀에 자동 알림을 보냅니다. 모두 AWS 관리형 서비스로 추가 인프라가 필요 없습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 기본 스캔은 OS 패키지만 스캔하며, Lambda 함수 추가 구성이 필요하여 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ C</span> — 타사 도구는 EC2 인스턴스 관리 등 높은 운영 오버헤드가 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — 파이프라인 내 스캔은 이미 빌드된 이미지가 ECR에 푸시된 후의 자동 스캔을 다루지 않습니다.</p>`,
  disc: [{ ans:'A (90%)', txt:'Inspector ECR 통합은 이미지 푸시 시 자동 스캔을 완전 관리형으로 제공, EventBridge로 결과 필터링하여 SNS 알림 전달이 최소 오버헤드 솔루션' }]
}
];
