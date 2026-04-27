window.QS_SET08 = [
{
    n: 71,
    ko: `한 회사의 DevOps 엔지니어가 모든 사용자가 <strong>AWS IAM Identity Center(SSO)</strong>를 사용하는 AWS 환경을 지원하고 있습니다. 이 회사는 <strong>모든 새 IAM 사용자의 자격 증명을 즉시 비활성화</strong>하고 <strong>보안 팀에 알림</strong>을 보내고 싶어합니다.<br><br>
<strong>DevOps 엔지니어가 이러한 요구 사항을 충족하기 위해 취해야 할 단계의 조합은 무엇입니까? (세 가지를 선택하세요.)</strong>`,
    en: `A DevOps engineer at a company is supporting an AWS environment in which all users use <strong>AWS IAM Identity Center (AWS Single Sign-On)</strong>. The company wants to <strong>immediately disable credentials of any new IAM user</strong> and wants the <strong>security team to receive a notification</strong>.<br><br>
<strong>Which combination of steps should the DevOps engineer take to meet these requirements? (Choose three.)</strong>`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k:'A', ko:`AWS CloudTrail에서 <strong>IAM CreateUser API 호출</strong>에 반응하는 <strong>Amazon EventBridge 규칙</strong>을 생성합니다.`, en:`Create an <strong>Amazon EventBridge rule</strong> that reacts to an <strong>IAM CreateUser API call</strong> in AWS CloudTrail.` },
      { k:'B', ko:`AWS CloudTrail에서 <strong>IAM GetLoginProfile API 호출</strong>에 반응하는 Amazon EventBridge 규칙을 만듭니다.`, en:`Create an Amazon EventBridge rule that reacts to an <strong>IAM GetLoginProfile API call</strong> in AWS CloudTrail.` },
      { k:'C', ko:`EventBridge 규칙의 대상인 <strong>AWS Lambda 함수</strong>를 만듭니다. Lambda 함수를 구성하여 <strong>모든 액세스 키를 비활성화하고 IAM 사용자와 연결된 로그인 프로필을 삭제</strong>합니다.`, en:`Create an <strong>AWS Lambda function</strong> that is a target of the EventBridge rule. Configure the Lambda function to <strong>disable any access keys and delete the login profiles</strong> that are associated with the IAM user.` },
      { k:'D', ko:`EventBridge 규칙의 대상인 <strong>AWS Lambda 함수</strong>를 만듭니다. IAM 사용자와 연결된 <strong>로그인 프로필만 삭제</strong>하도록 Lambda 함수를 구성합니다.`, en:`Create an <strong>AWS Lambda function</strong> that is a target of the EventBridge rule. Configure the Lambda function to <strong>delete the login profiles</strong> that are associated with the IAM user.` },
      { k:'E', ko:`EventBridge 규칙의 대상인 <strong>Amazon SNS 토픽</strong>을 만듭니다. 보안 팀의 그룹 이메일 주소를 토픽에 구독합니다.`, en:`Create an <strong>Amazon SNS topic</strong> that is a target of the EventBridge rule. Subscribe the security team's group email address to the topic.` },
      { k:'F', ko:`Lambda 함수의 대상인 <strong>Amazon SQS 대기열</strong>을 만듭니다. 보안 팀의 그룹 이메일 주소를 대기열에 구독합니다.`, en:`Create an <strong>Amazon SQS queue</strong> that is a target of the Lambda function. Subscribe the security team's group email address to the queue.` },
    ],
    answer: ['A','C','E'],
    vote: 'ACE 100%',
    explain: `<p><span class="mark-ok">✅ A — EventBridge 규칙: IAM CreateUser API 호출 감지</span></p>
<p>새 IAM 사용자가 생성될 때 CloudTrail에 기록되는 <code>CreateUser</code> API 호출을 EventBridge로 감지합니다.</p>
<p><span class="mark-ok">✅ C — Lambda: 액세스 키 비활성화 + 로그인 프로필 삭제</span></p>
<p>새 사용자의 모든 자격 증명(액세스 키 및 콘솔 로그인 프로필)을 완전히 비활성화합니다.</p>
<p><span class="mark-ok">✅ E — SNS 토픽으로 보안 팀에 알림</span></p>
<p>SNS 토픽을 EventBridge 규칙의 대상으로 설정하여 이메일 구독을 통해 보안 팀에 즉시 알립니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — <code>GetLoginProfile</code>은 새 사용자 생성이 아닌 기존 사용자의 로그인 프로필 조회 API입니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — 로그인 프로필만 삭제하면 액세스 키가 활성화된 채로 남을 수 있어 불완전합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ F</span> — SQS는 이메일 구독을 지원하지 않습니다. 이메일 알림에는 SNS가 필요합니다.</p>`,
    disc: []
  },
{
    n: 72,
    ko: `어떤 회사가 <strong>지속적인 배포 파이프라인</strong>을 설정하려고 합니다. 이 회사는 애플리케이션 코드를 <strong>비공개 GitHub 저장소</strong>에 저장합니다. 이 회사는 애플리케이션 구성 요소를 <strong>Amazon ECS, Amazon EC2, AWS Lambda</strong>에 배포해야 합니다. 파이프라인은 <strong>수동 승인 작업</strong>을 지원해야 합니다.<br><br>
<strong>어떤 솔루션이 이러한 요구 사항을 충족할까요?</strong>`,
    en: `A company wants to set up a <strong>continuous delivery pipeline</strong>. The company stores application code in a <strong>private GitHub repository</strong>. The company needs to deploy the application components to <strong>Amazon ECS, Amazon EC2, and AWS Lambda</strong>. The pipeline must support <strong>manual approval actions</strong>.<br><br>
<strong>Which solution will meet these requirements?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`<strong>Amazon ECS, Amazon EC2, Lambda</strong>를 배포 공급자로 사용하여 <strong>AWS CodePipeline</strong>을 사용합니다.`, en:`Use <strong>AWS CodePipeline</strong> with <strong>Amazon ECS, Amazon EC2, and Lambda</strong> as deploy providers.` },
      { k:'B', ko:`<strong>AWS CodeDeploy</strong>를 배포 공급자로 사용하여 <strong>AWS CodePipeline</strong>을 사용합니다.`, en:`Use <strong>AWS CodePipeline</strong> with <strong>AWS CodeDeploy</strong> as the deploy provider.` },
      { k:'C', ko:`<strong>AWS Elastic Beanstalk</strong>를 배포 공급자로 사용하여 <strong>AWS CodePipeline</strong>을 사용합니다.`, en:`Use <strong>AWS CodePipeline</strong> with <strong>AWS Elastic Beanstalk</strong> as the deploy provider.` },
      { k:'D', ko:`GitHub와 통합된 <strong>AWS CodeDeploy</strong>를 사용하여 애플리케이션을 배포합니다.`, en:`Use <strong>AWS CodeDeploy</strong> with GitHub integration to deploy the application.` },
    ],
    answer: ['B'],
    vote: 'B 81%',
    explain: `<p><span class="mark-ok">✅ B — CodePipeline + CodeDeploy</span></p>
<p><strong>AWS CodeDeploy</strong>는 Amazon EC2, AWS Lambda, Amazon ECS 모두에 배포를 지원하는 통합 배포 서비스입니다. CodePipeline은 GitHub 연동, 수동 승인 작업을 기본 지원합니다. CodeDeploy를 배포 공급자로 사용하면 세 가지 대상 플랫폼 모두에 배포할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CodePipeline에서 Lambda는 "배포 공급자"가 아닌 "호출(Invoke)" 작업으로만 사용됩니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — Elastic Beanstalk는 ECS, Lambda에 직접 배포를 지원하지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — CodeDeploy 단독으로는 수동 승인 작업을 지원하지 않습니다. 파이프라인(CodePipeline)이 필요합니다.</p>`,
    disc: [
      { ans: 'B (81%)', txt: 'AWS CodeDeploy는 EC2, Lambda, ECS 모두를 지원합니다. CodePipeline의 수동 승인 작업은 파이프라인 레벨에서 구현됩니다.' }
    ]
  },
{
    n: 73,
    ko: `한 회사에 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 애플리케이션이 시작되면 요청을 처리하기 전에 <strong>Amazon S3 버킷에서 데이터를 처리</strong>해야 합니다. S3 버킷에 저장된 데이터의 크기가 커지고 있어, 이제 데이터를 다운로드하고 처리하는 데 <strong>몇 분</strong>이 걸립니다. 회사는 새 EC2 인스턴스가 요청을 처리할 준비가 되기까지 걸리는 <strong>시간을 줄여야</strong> 합니다.<br><br>
<strong>애플리케이션 시작 시간을 줄이는 가장 비용 효율적인 방법은 무엇입니까?</strong>`,
    en: `A company has an application that runs on Amazon EC2 instances in an Auto Scaling group. When the application starts up, the application needs to <strong>process data from an Amazon S3 bucket</strong> before the application can start to serve requests. The data size is growing and now takes <strong>several minutes</strong> to download and process. The company must <strong>reduce the time</strong> that elapses before new EC2 instances are ready to serve requests.<br><br>
<strong>Which solution is the MOST cost-effective way to reduce the application startup time?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`<strong>Stopped 상태</strong>의 워밍된 EC2 인스턴스가 있는 Auto Scaling 그룹에 대한 <strong>워밍 풀</strong>을 구성합니다. Auto Scaling 그룹에서 <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> <strong>라이프사이클 후크</strong>를 구성합니다. 애플리케이션이 요청을 처리할 준비가 되면 라이프사이클 후크를 완료하도록 애플리케이션을 수정합니다.`, en:`Configure a <strong>warm pool</strong> for the Auto Scaling group with warmed EC2 instances in the <strong>Stopped state</strong>. Configure an <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> <strong>lifecycle hook</strong> on the Auto Scaling group. Modify the application to complete the lifecycle hook when the application is ready to serve requests.` },
      { k:'B', ko:`Auto Scaling 그룹의 <strong>최대 인스턴스 수를 늘립니다</strong>. Auto Scaling 그룹에서 <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> 라이프사이클 후크를 구성합니다. 애플리케이션이 요청을 처리할 준비가 되면 라이프사이클 후크를 완료하도록 애플리케이션을 수정합니다.`, en:`<strong>Increase the maximum instance count</strong> of the Auto Scaling group. Configure an <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> lifecycle hook on the Auto Scaling group. Modify the application to complete the lifecycle hook when the application is ready to serve requests.` },
      { k:'C', ko:`<strong>Running 상태</strong>의 워밍된 EC2 인스턴스가 있는 Auto Scaling 그룹에 대한 <strong>워밍 풀</strong>을 구성합니다. Auto Scaling 그룹에서 <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> 라이프사이클 후크를 구성합니다. 애플리케이션이 요청을 처리할 준비가 되면 라이프사이클 후크를 완료하도록 애플리케이션을 수정합니다.`, en:`Configure a <strong>warm pool</strong> for the Auto Scaling group with warmed EC2 instances in the <strong>Running state</strong>. Configure an <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> lifecycle hook on the Auto Scaling group. Modify the application to complete the lifecycle hook when the application is ready to serve requests.` },
      { k:'D', ko:`Auto Scaling 그룹의 <strong>최대 인스턴스 수를 늘립니다</strong>. Auto Scaling 그룹에서 라이프사이클 후크를 구성합니다. 애플리케이션을 수정하여 라이프사이클 후크를 완료하고 애플리케이션이 준비되면 새 인스턴스를 <strong>대기(Standby) 상태</strong>로 전환합니다.`, en:`<strong>Increase the maximum instance count</strong> of the Auto Scaling group. Configure an <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> lifecycle hook on the Auto Scaling group. Modify the application to complete the lifecycle hook and to place the new instance in the <strong>Standby state</strong> when the application is ready to serve requests.` },
    ],
    answer: ['A'],
    vote: 'A 88%',
    explain: `<p><span class="mark-ok">✅ A — 워밍 풀 (Stopped 상태) + 라이프사이클 후크</span></p>
<p><strong>EC2 Auto Scaling 워밍 풀</strong>은 백그라운드에서 인스턴스를 미리 시작하여 S3 데이터 처리 등의 초기화 작업을 수행한 후 <strong>Stopped 상태</strong>로 유지합니다. 필요 시 즉시 시작할 수 있어 시작 시간이 대폭 단축됩니다. Stopped 상태는 Running 상태보다 비용이 훨씬 저렴하여 가장 비용 효율적입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B, D</span> — 최대 인스턴스 수를 늘리는 것은 가용 인스턴스를 늘릴 뿐, 각 인스턴스의 시작 시간을 줄이지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — Running 상태의 워밍 풀은 시작 시간은 더 빠르지만, 사용하지 않는 인스턴스가 계속 실행 중이어서 비용이 훨씬 높습니다.</p>`,
    disc: [
      { ans: 'A (88%)', txt: '워밍 풀 Stopped 상태는 EBS 볼륨 비용만 발생하므로 Running 상태보다 훨씬 비용 효율적입니다. 인스턴스 시작 시 S3 델타만 동기화하면 되어 전체 처리 시간이 크게 줄어듭니다.' }
    ]
  },
{
    n: 74,
    ko: `한 회사에서 <strong>AWS CodeBuild</strong> 프로젝트를 사용하여 애플리케이션을 빌드하고 패키징하고 있습니다. 패키지는 여러 AWS 계정에 배포되기 전에 <strong>공유 Amazon S3 버킷</strong>에 복사됩니다.<br><br>
<code>buildspec.yml</code> 파일에는 <code>aws s3 cp artifact.zip s3://bucket/ --acl authenticated-read</code>가 포함되어 있습니다.<br><br>
DevOps 엔지니어는 <strong>AWS 계정이 있는 사람은 누구나 아티팩트를 다운로드할 수 있다</strong>는 것을 알아챘습니다.<br><br>
<strong>DevOps 엔지니어는 이를 막기 위해 어떤 조치를 취해야 합니까?</strong>`,
    en: `A company is using an <strong>AWS CodeBuild</strong> project to build and package an application. The packages are copied to a <strong>shared Amazon S3 bucket</strong> before being deployed across multiple AWS accounts.<br><br>
The <code>buildspec.yml</code> file contains: <code>aws s3 cp artifact.zip s3://bucket/ --acl authenticated-read</code><br><br>
The DevOps engineer has noticed that <strong>anybody with an AWS account is able to download the artifacts</strong>.<br><br>
<strong>What steps should the DevOps engineer take to stop this?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`post_build 명령을 수정하여 <code>--acl public-read</code>를 사용하고 관련 AWS 계정에만 읽기 액세스 권한을 부여하는 <strong>버킷 정책</strong>을 구성합니다.`, en:`Modify the post_build command to use <code>--acl public-read</code> and configure a <strong>bucket policy</strong> that grants read access to the relevant AWS accounts only.` },
      { k:'B', ko:`S3 버킷에 대한 기본 ACL을 구성하여 인증된 사용자 집합을 관련 AWS 계정으로만 정의하고 읽기 전용 액세스 권한을 부여합니다.`, en:`Configure a default ACL for the S3 bucket that defines the set of authenticated users as the relevant AWS accounts only and grants read-only access.` },
      { k:'C', ko:`관련 AWS 계정에 대한 읽기 액세스 권한을 부여하고 주체 <code>"*"</code>에 대한 읽기 액세스 권한을 거부하는 <strong>S3 버킷 정책</strong>을 만듭니다.`, en:`Create an <strong>S3 bucket policy</strong> that grants read access to the relevant AWS accounts and denies read access to the principal <code>"*"</code>.` },
      { k:'D', ko:`post_build 명령을 수정하여 <code>--acl authenticated-read</code>를 <strong>제거</strong>하고 관련 AWS 계정에만 읽기 액세스를 허용하는 <strong>버킷 정책</strong>을 구성합니다.`, en:`Modify the post_build command to <strong>remove</strong> <code>--acl authenticated-read</code> and configure a <strong>bucket policy</strong> that allows read access to the relevant AWS accounts only.` },
    ],
    answer: ['D'],
    vote: 'D 81% / A 19%',
    explain: `<p><span class="mark-ok">✅ D — --acl authenticated-read 제거 + 버킷 정책으로 특정 계정만 허용</span></p>
<p>문제의 원인은 <code>--acl authenticated-read</code>입니다. 이 ACL은 <strong>모든 AWS 인증 사용자</strong>(모든 계정 포함)에게 읽기 권한을 부여합니다. 이를 제거하고 버킷 정책으로 관련 AWS 계정만 명시적으로 허용해야 합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — <code>--acl public-read</code>는 인증 없이 누구나 읽을 수 있어 더 큰 보안 문제를 일으킵니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B</span> — 기본 ACL 설정만으로는 기존의 <code>--acl authenticated-read</code> 문제가 해결되지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — 버킷 정책에서 주체 <code>"*"</code>를 거부하는 것은 의도하지 않은 결과를 초래할 수 있으며, <code>--acl authenticated-read</code>가 여전히 적용됩니다.</p>`,
    disc: []
  },
{
    n: 75,
    ko: `한 회사가 AWS에서 호스팅되는 서버리스 웹 애플리케이션을 개발했습니다. 애플리케이션은 Amazon S3, Amazon API Gateway, 여러 AWS Lambda 함수, Amazon RDS for MySQL로 구성됩니다. 회사는 <strong>AWS CodeCommit</strong>을 사용하여 소스 코드를 저장합니다. 소스 코드는 <strong>AWS SAM 템플릿과 Python 코드</strong>의 조합입니다.<br><br>
보안 감사 결과 <strong>데이터베이스 인증 자격 증명이 CodeCommit 저장소에 하드코딩</strong>되어 있음이 밝혀졌습니다. DevOps 엔지니어는 <strong>하드코딩된 비밀을 자동으로 감지하고 방지</strong>하는 솔루션을 구현해야 합니다.<br><br>
<strong>이러한 요구 사항을 충족하는 가장 안전한 솔루션은 무엇입니까?</strong>`,
    en: `A company has developed a serverless web application hosted on AWS. The application consists of Amazon S3, Amazon API Gateway, several AWS Lambda functions, and an Amazon RDS for MySQL database. The company is using <strong>AWS CodeCommit</strong> to store the source code, which is a combination of <strong>AWS SAM templates and Python code</strong>.<br><br>
A security audit reveals that <strong>database credentials are hardcoded within CodeCommit repositories</strong>. A DevOps engineer must implement a solution to <strong>automatically detect and prevent hardcoded secrets</strong>.<br><br>
<strong>What is the MOST secure solution that meets these requirements?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`<strong>Amazon CodeGuru Profiler</strong>를 활성화합니다. <code>@with_lambda_profiler()</code>로 핸들러 함수를 장식합니다. 권장 사항 보고서를 수동으로 검토합니다. <strong>AWS Systems Manager Parameter Store</strong>에 보안 문자열로 비밀을 씁니다. SAM 템플릿과 Python 코드를 업데이트하여 Parameter Store에서 비밀을 가져옵니다.`, en:`Enable <strong>Amazon CodeGuru Profiler</strong>. Decorate the handler function with <code>@with_lambda_profiler()</code>. Manually review the recommendation report. Write the secret to <strong>AWS Systems Manager Parameter Store</strong> as a secure string. Update the SAM templates and the Python code to pull the secret from Parameter Store.` },
      { k:'B', ko:`CodeCommit 리포지토리를 <strong>Amazon CodeGuru Reviewer</strong>와 연결합니다. 코드 검토를 수동으로 확인하여 권장 사항을 확인합니다. 비밀을 보호하는 옵션을 선택합니다. SAM 템플릿과 Python 코드를 업데이트하여 <strong>AWS Secrets Manager</strong>에서 비밀을 가져옵니다.`, en:`Associate the CodeCommit repository with <strong>Amazon CodeGuru Reviewer</strong>. Manually check the code review for any recommendations. Choose the option to protect the secret. Update the SAM templates and the Python code to pull the secret from <strong>AWS Secrets Manager</strong>.` },
      { k:'C', ko:`<strong>Amazon CodeGuru Profiler</strong>를 활성화합니다. <code>@with_lambda_profiler()</code>로 핸들러 함수를 장식합니다. 권장 사항 보고서를 수동으로 검토합니다. 비밀을 보호하는 옵션을 선택합니다. SAM 템플릿과 Python 코드를 업데이트하여 <strong>AWS Secrets Manager</strong>에서 비밀을 가져옵니다.`, en:`Enable <strong>Amazon CodeGuru Profiler</strong>. Decorate the handler function with <code>@with_lambda_profiler()</code>. Manually review the recommendation report. Choose the option to protect the secret. Update the SAM templates and the Python code to pull the secret from <strong>AWS Secrets Manager</strong>.` },
      { k:'D', ko:`CodeCommit 리포지토리를 <strong>Amazon CodeGuru Reviewer</strong>와 연결합니다. 코드 검토를 수동으로 확인하여 권장 사항을 확인합니다. <strong>AWS Systems Manager Parameter Store</strong>에 문자열로 비밀을 씁니다. SAM 템플릿과 Python 코드를 업데이트하여 Parameter Store에서 비밀을 가져옵니다.`, en:`Associate the CodeCommit repository with <strong>Amazon CodeGuru Reviewer</strong>. Manually check the code review for any recommendations. Write the secret to <strong>AWS Systems Manager Parameter Store</strong> as a string. Update the SAM templates and the Python code to pull the secret from Parameter Store.` },
    ],
    answer: ['B'],
    vote: 'B 96%',
    explain: `<p><span class="mark-ok">✅ B — Amazon CodeGuru Reviewer + AWS Secrets Manager</span></p>
<p><strong>Amazon CodeGuru Reviewer</strong>는 정적 코드 분석 도구로 하드코딩된 비밀, 보안 취약성을 자동으로 감지합니다(CodeCommit 연동 지원). 발견된 비밀은 <strong>AWS Secrets Manager</strong>에 안전하게 저장하여 최고 수준의 보안을 제공합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — <strong>CodeGuru Profiler</strong>는 성능 분석 도구이며, 하드코딩된 비밀 감지에는 적합하지 않습니다. 보안 취약성 탐지에는 <strong>CodeGuru Reviewer</strong>를 사용해야 합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — Parameter Store에 일반 문자열(비암호화)로 저장하는 것은 가장 안전하지 않습니다. Secrets Manager가 더 안전합니다.</p>`,
    disc: [
      { ans: 'B (96%)', txt: 'CodeGuru Reviewer = 보안/코드 품질 검토. CodeGuru Profiler = 성능 분석. 이 구분이 핵심입니다. Secrets Manager는 Parameter Store보다 비용은 높지만 보안 기능이 더 강력합니다.' }
    ]
  },
{
    n: 76,
    ko: `한 회사가 <strong>Amazon S3 버킷</strong>을 사용하여 중요한 문서를 저장하고 있습니다. 일부 S3 버킷이 암호화되지 않았으며, 현재 IAM 사용자는 암호화 없이 새 S3 버킷을 만들 수 있습니다. 이 회사는 모든 S3 버킷을 암호화해야 한다는 새로운 요구 사항을 구현하고 있습니다.<br><br>
DevOps 엔지니어는 <strong>모든 기존 S3 버킷과 모든 새 S3 버킷에서 서버 측 암호화가 활성화</strong>되도록 해야 합니다. <strong>새 S3 버킷이 생성되는 즉시</strong> 암호화를 활성화해야 합니다. 기본 암호화 유형은 <strong>AES-256</strong>이어야 합니다.<br><br>
<strong>어떤 솔루션이 이러한 요구 사항을 충족할까요?</strong>`,
    en: `A company is using <strong>Amazon S3 buckets</strong> to store important documents. Some S3 buckets are not encrypted, and currently IAM users can create new S3 buckets without encryption. The company is implementing a new requirement that all S3 buckets must be encrypted.<br><br>
A DevOps engineer must ensure that <strong>server-side encryption is enabled on all existing S3 buckets and all new S3 buckets</strong>. The encryption must be enabled on <strong>new S3 buckets as soon as the S3 buckets are created</strong>. The default encryption type must be <strong>AES-256</strong>.<br><br>
<strong>Which solution will meet these requirements?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`Amazon EventBridge <strong>예약 규칙</strong>에 의해 주기적으로 호출되는 <strong>AWS Lambda 함수</strong>를 만듭니다. Lambda 함수를 프로그래밍하여 모든 현재 S3 버킷의 암호화 상태를 검사하고 암호화 구성이 없는 S3 버킷에 대해 <strong>AES-256</strong>을 기본 암호화로 설정합니다.`, en:`Create an <strong>AWS Lambda function</strong> that is invoked periodically by an Amazon EventBridge <strong>scheduled rule</strong>. Program the Lambda function to scan all current S3 buckets for encryption status and to set <strong>AES-256</strong> as the default encryption for any S3 bucket that does not have an encryption configuration.` },
      { k:'B', ko:`<code>s3-bucket-server-side-encryption-enabled</code> <strong>AWS Config 관리 규칙</strong>을 설정하고 활성화합니다. <strong>AWS-EnableS3BucketEncryption AWS Systems Manager Automation 런북</strong>을 수정 작업으로 사용하도록 규칙을 구성합니다. 기존 S3 버킷이 규정을 준수하는지 확인하기 위해 <strong>재평가 프로세스를 수동으로 실행</strong>합니다.`, en:`Set up and activate the <code>s3-bucket-server-side-encryption-enabled</code> <strong>AWS Config managed rule</strong>. Configure the rule to use the <strong>AWS-EnableS3BucketEncryption AWS Systems Manager Automation runbook</strong> as the remediation action. <strong>Manually run the re-evaluation process</strong> to ensure that existing S3 buckets are compliant.` },
      { k:'C', ko:`Amazon EventBridge <strong>이벤트 규칙</strong>에 의해 호출되는 <strong>AWS Lambda 함수</strong>를 만듭니다. <strong>새 S3 버킷 생성</strong>과 일치하는 이벤트 패턴으로 규칙을 정의합니다. Lambda 함수를 프로그래밍하여 EventBridge 이벤트를 구문 분석하고 기본 암호화로 <strong>AES-256</strong>을 설정합니다.`, en:`Create an <strong>AWS Lambda function</strong> that is invoked by an Amazon EventBridge <strong>event rule</strong>. Define the rule with an event pattern that matches the <strong>creation of new S3 buckets</strong>. Program the Lambda function to parse the EventBridge event, check the S3 bucket configuration, and set <strong>AES-256</strong> as the default encryption.` },
      { k:'D', ko:`<code>s3:x-amz-server-side-encryption</code> 조건 키에 AES-256이 아닌 값이 있는 경우 <code>s3:CreateBucket</code> 작업을 거부하는 <strong>IAM 정책</strong>을 구성합니다. 회사의 모든 IAM 사용자에 대한 IAM 그룹을 만들고 IAM 정책을 IAM 그룹과 연결합니다.`, en:`Configure an <strong>IAM policy</strong> that denies the <code>s3:CreateBucket</code> action if the <code>s3:x-amz-server-side-encryption</code> condition key has a value that is not AES-256. Create an IAM group for all the company's IAM users. Associate the IAM policy with the IAM group.` },
    ],
    answer: ['B'],
    vote: 'B 88%',
    explain: `<p><span class="mark-ok">✅ B — AWS Config 관리 규칙 + SSM Automation 수정 + 수동 재평가</span></p>
<p><code>s3-bucket-server-side-encryption-enabled</code> Config 규칙은 기존 및 새 버킷 모두를 지속적으로 모니터링합니다. <strong>AWS-EnableS3BucketEncryption</strong> SSM Automation 런북을 수정 작업으로 설정하면 비준수 버킷이 자동으로 AES-256으로 암호화됩니다. 기존 버킷은 수동 재평가로 즉시 수정합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 예약 규칙으로 주기적으로 실행하면 새 버킷 생성 즉시 암호화를 보장할 수 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — EventBridge 이벤트 규칙으로 새 버킷만 처리하고 기존 버킷은 처리하지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — IAM 정책은 암호화 없는 버킷 생성을 차단할 수 있지만, 기존 암호화되지 않은 버킷을 수정하지 않습니다.</p>`,
    disc: [
      { ans: 'B (88%)', txt: 'AWS Config는 기존 버킷과 새 버킷 모두를 처리할 수 있습니다. 수동 재평가로 기존 버킷을 즉시 수정하고, Config 규칙이 지속적으로 새 버킷을 모니터링합니다.' }
    ]
  },
{
    n: 77,
    ko: `DevOps 엔지니어는 회사의 <strong>SaaS 웹 애플리케이션</strong>에 대한 지속적인 개발 전략을 설계하고 있습니다. 사용자는 <strong>여러 ALB</strong>에 분산되어 있으며, 각각에는 <strong>전용 Auto Scaling 그룹</strong>과 EC2 인스턴스 플릿이 있습니다. 애플리케이션에는 빌드 단계가 필요하지 않으며, CodeCommit에 커밋되면 <strong>모든 ALB, Auto Scaling 그룹 및 EC2 플릿에 대한 동시 배포</strong>를 트리거해야 합니다.<br><br>
<strong>어떤 아키텍처가 최소한의 구성으로 이러한 요구 사항을 충족할까요?</strong>`,
    en: `A DevOps engineer is architecting a continuous development strategy for a company's <strong>SaaS web application</strong>. Users are distributed across <strong>multiple ALBs</strong>, each with a <strong>dedicated Auto Scaling group</strong> and fleet of Amazon EC2 instances. The application does not require a build stage, and when committed to AWS CodeCommit, the application must trigger a <strong>simultaneous deployment to all ALBs, Auto Scaling groups, and EC2 fleets</strong>.<br><br>
<strong>Which architecture will meet these requirements with the LEAST amount of configuration?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`<strong>각 ALB-Auto Scaling 그룹 쌍에 대해 고유한 AWS CodeDeploy 애플리케이션과 배포 그룹</strong>을 사용하여 애플리케이션을 <strong>병렬로 배포</strong>하는 단일 AWS CodePipeline 파이프라인을 생성합니다.`, en:`Create a single AWS CodePipeline pipeline that deploys the application in <strong>parallel</strong> using <strong>unique AWS CodeDeploy applications and deployment groups</strong> created for each ALB-Auto Scaling group pair.` },
      { k:'B', ko:`<strong>단일 AWS CodeDeploy 애플리케이션과 단일 배포 그룹</strong>을 사용하여 애플리케이션을 배포하는 단일 AWS CodePipeline 파이프라인을 생성합니다.`, en:`Create a single AWS CodePipeline pipeline that deploys the application using a <strong>single AWS CodeDeploy application and single deployment group</strong>.` },
      { k:'C', ko:`<strong>단일 AWS CodeDeploy 애플리케이션</strong>과 <strong>각 ALB-Auto Scaling 그룹 쌍에 대한 고유한 배포 그룹</strong>을 사용하여 애플리케이션을 <strong>병렬로 배포</strong>하는 단일 AWS CodePipeline 파이프라인을 생성합니다.`, en:`Create a single AWS CodePipeline pipeline that deploys the application in <strong>parallel</strong> using a <strong>single AWS CodeDeploy application</strong> and <strong>unique deployment group for each ALB-Auto Scaling group pair</strong>.` },
      { k:'D', ko:`동일한 ALB-Auto Scaling 그룹 쌍에 대해 생성된 <strong>AWS CodeDeploy 애플리케이션과 배포 그룹</strong>을 사용하여 애플리케이션을 배포하는 <strong>각 ALB-Auto Scaling 그룹 쌍에 대해 별도의 AWS CodePipeline 파이프라인</strong>을 생성합니다.`, en:`Create an <strong>AWS CodePipeline pipeline for each ALB-Auto Scaling group pair</strong> that deploys the application using an <strong>AWS CodeDeploy application and deployment group</strong> created for the same ALB-Auto Scaling group pair.` },
    ],
    answer: ['C'],
    vote: 'C 77% / B 19%',
    explain: `<p><span class="mark-ok">✅ C — 단일 CodePipeline + 단일 CodeDeploy 앱 + ALB-ASG 쌍별 고유 배포 그룹 (병렬)</span></p>
<p>단일 CodeDeploy 애플리케이션 아래에 각 ALB-Auto Scaling 그룹 쌍별로 별도의 <strong>배포 그룹</strong>을 만들고 CodePipeline에서 <strong>병렬 배포</strong>를 설정합니다. 이 구조가 최소 구성으로 동시 배포를 달성하는 방법입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 각 쌍마다 별도의 CodeDeploy 애플리케이션을 만드는 것은 불필요한 중복으로 구성이 더 많아집니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — 각 쌍마다 별도의 CodePipeline 파이프라인을 만드는 것은 가장 많은 구성이 필요하며 관리가 복잡합니다.</p>`,
    disc: [
      { ans: 'C (77%)', txt: '하나의 CodeDeploy 애플리케이션에 여러 배포 그룹을 만드는 것이 최소 구성입니다. CodePipeline에서 여러 배포 그룹에 병렬 배포를 트리거할 수 있습니다.' }
    ]
  },
{
    n: 78,
    ko: `한 회사가 <strong>Amazon S3 버킷</strong>에서 정적 웹사이트를 호스팅하고 있습니다. 이 웹사이트는 <strong>example.com</strong>에서 제공되며, TTL이 <strong>1일</strong>인 Amazon Route 53 가중치 라우팅 정책을 사용합니다. 회사는 기존 정적 웹사이트를 <strong>ALB 뒤의 동적 웹 애플리케이션</strong>으로 교체하기로 결정했습니다.<br><br>
출시 당일, 회사는 가중치가 <strong>255</strong>이고 TTL이 <strong>1시간</strong>인 ALB를 가리키는 추가 Route 53 가중치 DNS 레코드 항목을 만들었습니다. 이틀 후, DevOps 엔지니어는 고객이 example.com으로 이동할 때 <strong>이전 정적 웹사이트가 가끔 표시</strong>된다는 것을 알아챘습니다.<br><br>
<strong>DevOps 엔지니어는 회사가 example.com에 대한 동적 콘텐츠만 제공하도록 어떻게 할 수 있을까요?</strong>`,
    en: `A company is hosting a static website from an <strong>Amazon S3 bucket</strong> available at <strong>example.com</strong>, using an Amazon Route 53 weighted routing policy with a TTL of <strong>1 day</strong>. The company has decided to replace the existing static website with a <strong>dynamic web application</strong> behind an ALB.<br><br>
On the day of production launch, the company creates an additional Route 53 weighted DNS record entry pointing to the ALB with a weight of <strong>255</strong> and a TTL of <strong>1 hour</strong>. Two days later, a DevOps engineer notices that the <strong>previous static website is displayed sometimes</strong> when customers navigate to example.com.<br><br>
<strong>How can the DevOps engineer ensure that the company serves only dynamic content for example.com?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`정적 웹사이트 콘텐츠가 들어 있는 <strong>S3 버킷에서 모든 객체를 삭제</strong>합니다.`, en:`<strong>Delete all objects</strong>, including previous versions, from the S3 bucket that contains the static website content.` },
      { k:'B', ko:`S3 버킷을 가리키는 가중 DNS 레코드 항목을 업데이트합니다. <strong>가중치 0</strong>을 적용합니다. 변경 사항을 즉시 전파하기 위해 도메인 재설정 옵션을 지정합니다.`, en:`Update the weighted DNS record entry that points to the S3 bucket. Apply a <strong>weight of 0</strong>. Specify the domain reset option to propagate changes immediately.` },
      { k:'C', ko:`ALB로 리디렉션하는 호스트 이름으로 <strong>S3 버킷에서 웹 페이지 리디렉션 요청</strong>을 구성합니다.`, en:`Configure <strong>webpage redirect requests on the S3 bucket</strong> with a hostname that redirects to the ALB.` },
      { k:'D', ko:`example.com 호스팅 영역에서 <strong>S3 버킷을 가리키는 가중 DNS 레코드 항목을 제거</strong>합니다. DNS 전파가 완료될 때까지 기다립니다.`, en:`<strong>Remove the weighted DNS record entry</strong> that points to the S3 bucket from the example.com hosted zone. <strong>Wait for DNS propagation</strong> to become complete.` },
    ],
    answer: ['D'],
    vote: 'D 80% / B 20%',
    explain: `<p><span class="mark-ok">✅ D — S3 가중 DNS 레코드 제거 + DNS 전파 대기</span></p>
<p>가중치를 0으로 설정하는 것(B)은 불완전합니다. Route 53은 가중치 0보다 큰 레코드가 모두 비정상일 때만 가중치 0 레코드를 고려하기 때문입니다. 또한 "도메인 재설정 옵션"은 Route 53에 존재하지 않는 기능입니다. S3 버킷을 가리키는 DNS 레코드를 <strong>완전히 제거</strong>하고 기존 TTL(1일)이 만료될 때까지 기다리는 것이 올바른 해결책입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3 버킷에서 객체를 삭제해도 DNS 라우팅 설정에는 영향이 없습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ B</span> — 가중치 0 설정은 완전한 차단이 아닙니다. 가중치 0인 레코드는 다른 레코드가 모두 비정상일 때 사용될 수 있습니다. 또한 "도메인 재설정 옵션"은 존재하지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — S3에서 ALB로의 리디렉션을 구성하는 것은 불필요하게 복잡한 방법입니다.</p>`,
    disc: [
      { ans: 'D (80%)', txt: 'Route 53 가중치 0은 완전한 트래픽 차단이 아닙니다. 가중치가 0보다 큰 레코드가 모두 불량일 때 가중치 0 레코드를 고려합니다. 레코드를 삭제하는 것이 확실한 해결책입니다.' }
    ]
  },
{
    n: 79,
    ko: `한 회사가 테스트 프로세스를 자동화하기 위해 <strong>AWS CodePipeline</strong>을 구현하고 있습니다. 이 회사는 실행 상태가 실패할 때 알림을 받고 싶어하며 Amazon EventBridge에서 다음과 같은 사용자 지정 이벤트 패턴을 사용했습니다.<br><br>
<code>{ "source": ["aws.codepipeline"], "detail-type": ["CodePipeline Action Execution State Change"], "detail": { "state": ["FAILED"], "type": { "category": ["Approval"] } } }</code><br><br>
<strong>어떤 유형의 이벤트가 이 이벤트 패턴과 일치할까요?</strong>`,
    en: `A company is implementing <strong>AWS CodePipeline</strong> to automate its testing process. The company wants to be notified when the execution state fails and used the following custom event pattern in Amazon EventBridge:<br><br>
<code>{ "source": ["aws.codepipeline"], "detail-type": ["CodePipeline Action Execution State Change"], "detail": { "state": ["FAILED"], "type": { "category": ["Approval"] } } }</code><br><br>
<strong>Which type of events will match this event pattern?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`모든 파이프라인에서 <strong>배포 및 빌드 작업이 실패</strong>했습니다.`, en:`<strong>Failed deploy and build actions</strong> across all the pipelines.` },
      { k:'B', ko:`모든 파이프라인에서 <strong>거부되거나 실패한 모든 승인 작업</strong>.`, en:`<strong>All rejected or failed approval actions</strong> across all the pipelines.` },
      { k:'C', ko:`모든 파이프라인의 <strong>모든 이벤트</strong>.`, en:`<strong>All the events</strong> across all pipelines.` },
      { k:'D', ko:`모든 파이프라인에 대한 <strong>승인 작업</strong>.`, en:`<strong>Approval actions</strong> across all the pipelines.` },
    ],
    answer: ['B'],
    vote: 'B 100%',
    explain: `<p><span class="mark-ok">✅ B — 모든 파이프라인에서 거부되거나 실패한 승인 작업</span></p>
<p>이벤트 패턴에서 <code>"state": ["FAILED"]</code>와 <code>"category": ["Approval"]</code>의 조합은 <strong>승인(Approval) 작업이 실패하거나 거부된 경우</strong>만 일치합니다. 배포/빌드 작업의 실패는 category가 "Deploy"/"Build"이므로 일치하지 않습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — category가 "Approval"이므로 배포 및 빌드 작업은 해당되지 않습니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ C</span> — state와 category 필터가 있으므로 모든 이벤트가 아닌 특정 이벤트만 해당됩니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ D</span> — state가 "FAILED"이므로 모든 승인 작업이 아닌 실패/거부된 승인 작업만 해당됩니다.</p>`,
    disc: []
  },
{
    n: 80,
    ko: `Auto Scaling 그룹의 Amazon EC2 인스턴스 집합에서 실행되는 애플리케이션은 작동하기 위해 <strong>구성 파일</strong>이 필요합니다. 인스턴스는 <strong>AWS CloudFormation</strong>으로 생성 및 유지 관리됩니다. DevOps 엔지니어는 인스턴스가 시작될 때 <strong>최신 구성 파일</strong>을 갖기를 원하며, <strong>CloudFormation 템플릿이 업데이트될 때 구성 파일의 변경 사항이 최소한의 지연으로 모든 인스턴스에 반영</strong>되기를 원합니다. 회사 정책에 따라 애플리케이션 구성 파일은 <strong>소스 제어에서 AWS 인프라 구성 파일과 함께 유지 관리</strong>되어야 합니다.<br><br>
<strong>어떤 솔루션이 이를 달성할까요?</strong>`,
    en: `An application running on a set of Amazon EC2 instances in an Auto Scaling group requires a <strong>configuration file</strong> to operate. The instances are created and maintained with <strong>AWS CloudFormation</strong>. A DevOps engineer wants the instances to have the <strong>latest configuration file when launched</strong>, and wants changes to the configuration file to be <strong>reflected on all the instances with a minimal delay when the CloudFormation template is updated</strong>. Company policy requires that application configuration files be <strong>maintained along with AWS infrastructure configuration files in source control</strong>.<br><br>
<strong>Which solution will accomplish this?</strong>`,
    type: 'single',
    choices: [
      { k:'A', ko:`CloudFormation 템플릿에서 <strong>AWS Config 규칙</strong>을 추가합니다. 구성 파일 내용을 규칙의 <code>InputParameters</code> 속성에 넣고 <code>Scope</code> 속성을 EC2 Auto Scaling 그룹으로 설정합니다. <strong>AWS Systems Manager Resource Data Sync</strong> 리소스를 템플릿에 추가하여 구성 업데이트를 폴링합니다.`, en:`In the CloudFormation template, add an <strong>AWS Config rule</strong>. Place the configuration file content in the rule's <code>InputParameters</code> property, and set the <code>Scope</code> property to the EC2 Auto Scaling group. Add an <strong>AWS Systems Manager Resource Data Sync</strong> resource to the template to poll for updates to the configuration.` },
      { k:'B', ko:`CloudFormation 템플릿에서 <strong>EC2 시작 템플릿</strong> 리소스를 추가합니다. 구성 파일 내용을 시작 템플릿에 넣습니다. 인스턴스가 시작될 때 실행되도록 <strong>cfn-init</strong> 스크립트를 구성하고 구성에 대한 업데이트를 폴링하도록 <strong>cfn-hup</strong> 스크립트를 구성합니다.`, en:`In the CloudFormation template, add an <strong>EC2 launch template</strong> resource. Place the configuration file content in the launch template. Configure the <strong>cfn-init</strong> script to run when the instance is launched, and configure the <strong>cfn-hup</strong> script to poll for updates to the configuration.` },
      { k:'C', ko:`CloudFormation 템플릿에서 <strong>EC2 시작 템플릿</strong> 리소스를 추가합니다. 구성 파일 콘텐츠를 시작 템플릿에 넣습니다. <strong>AWS Systems Manager Resource Data Sync</strong> 리소스를 템플릿에 추가하여 구성 업데이트를 폴링합니다.`, en:`In the CloudFormation template, add an <strong>EC2 launch template</strong> resource. Place the configuration file content in the launch template. Add an <strong>AWS Systems Manager Resource Data Sync</strong> resource to the template to poll for updates to the configuration.` },
      { k:'D', ko:`CloudFormation 템플릿에서 <strong>CloudFormation init 메타데이터(AWS::CloudFormation::Init)</strong>를 추가합니다. 구성 파일 내용을 메타데이터에 넣습니다. 인스턴스가 시작될 때 실행되도록 <strong>cfn-init</strong> 스크립트를 구성하고 구성에 대한 업데이트를 폴링하도록 <strong>cfn-hup</strong> 스크립트를 구성합니다.`, en:`In the CloudFormation template, add <strong>CloudFormation init metadata (AWS::CloudFormation::Init)</strong>. Place the configuration file content in the metadata. Configure the <strong>cfn-init</strong> script to run when the instance is launched, and configure the <strong>cfn-hup</strong> script to poll for updates to the configuration.` },
    ],
    answer: ['D'],
    vote: 'D 81% / B 19%',
    explain: `<p><span class="mark-ok">✅ D — AWS::CloudFormation::Init 메타데이터 + cfn-init + cfn-hup</span></p>
<p><strong>cfn-init</strong>은 인스턴스 시작 시 <code>AWS::CloudFormation::Init</code> 메타데이터에서 구성을 읽어 초기화합니다. <strong>cfn-hup</strong>은 데몬으로 CloudFormation 메타데이터의 변경 사항을 지속적으로 폴링하여 변경 시 자동으로 인스턴스를 업데이트합니다. 구성이 CloudFormation 템플릿(소스 제어) 내에 포함되므로 회사 정책도 충족합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — EC2 시작 템플릿에 구성을 넣으면 cfn-hup이 시작 템플릿의 내용을 폴링할 수 없습니다. cfn-hup은 <code>AWS::CloudFormation::Init</code> 메타데이터만 폴링합니다.</p>
<p style="margin-top:8px;"><span class="mark-no">❌ A, C</span> — AWS Config 규칙이나 SSM Resource Data Sync는 EC2 인스턴스 구성 파일 동기화에 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'D (81%)', txt: 'cfn-hup는 AWS::CloudFormation::Init 메타데이터를 폴링합니다. EC2 Launch Template에 구성을 넣으면 cfn-hup이 폴링할 수 없어 B는 오답입니다.' }
    ]
  }
];
