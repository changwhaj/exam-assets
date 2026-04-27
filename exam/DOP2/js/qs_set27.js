window.QS_SET27 = [
{
  n: 261,
  en: `A company has an organization in AWS Organizations. A DevOps engineer needs to maintain multiple AWS accounts that belong to different OUs in the organization. All resources, including IAM policies and Amazon S3 policies within an account, are deployed through AWS CloudFormation. All templates and code are maintained in an AWS CodeCommit repository. Recently, some developers have not been able to access an S3 bucket from some accounts in the organization.<br><br>The following policy is attached to the S3 bucket:<br><br>[Image showing an S3 bucket policy with organization-level conditions]<br><br>What should the DevOps engineer do to resolve this access issue?`,
  ko: `회사에 AWS Organizations에 조직이 있습니다. DevOps 엔지니어는 조직의 여러 OU에 속하는 여러 AWS 계정을 유지 관리해야 합니다. 계정 내의 IAM 정책 및 Amazon S3 정책을 포함한 모든 리소스는 AWS CloudFormation을 통해 배포됩니다. 모든 템플릿과 코드는 AWS CodeCommit 리포지토리에서 유지 관리됩니다. 최근 일부 개발자는 조직의 일부 계정에서 S3 버킷에 액세스할 수 없었습니다.<br><br>다음 정책이 S3 버킷에 첨부되었습니다:<br><br>[조직 수준 조건이 포함된 S3 버킷 정책 이미지]<br><br>DevOps 엔지니어는 이 액세스 문제를 해결하기 위해 무엇을 해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Modify the S3 bucket policy. Turn off the S3 Block Public Access setting on the S3 bucket. In the S3 policy, add the aws:SourceAccount condition. Add the AWS account IDs of all developers who are experiencing the issue.`, ko:`S3 버킷 정책을 수정합니다. S3 버킷에서 S3 Block Public Access 설정을 끕니다. S3 정책에서 aws:SourceAccount 조건을 추가합니다. 문제를 겪고 있는 모든 개발자의 AWS 계정 ID를 추가합니다.` },
    { k:'B', en:`Verify that no IAM permissions boundaries are denying developers access to the S3 bucket. Make the necessary changes to IAM permissions boundaries. Use an AWS Config recorder in the individual developer accounts that are experiencing the issue to revert any changes that are blocking access. Commit the fix back into the CodeCommit repository. Invoke deployment through CloudFormation to apply the changes.`, ko:`개발자가 S3 버킷에 액세스하는 것을 거부하는 IAM 권한 경계가 없는지 확인합니다. IAM 권한 경계에 필요한 변경을 합니다. 문제가 발생한 개별 개발자 계정에서 AWS Config 레코더를 사용하여 액세스를 차단하는 모든 변경 사항을 되돌립니다. 수정 사항을 CodeCommit 리포지토리에 다시 커밋합니다. CloudFormation을 통해 배포를 호출하여 변경 사항을 적용합니다.` },
    { k:'C', en:`Configure an SCP that stops anyone from modifying IAM resources in developer OUs. In the S3 policy, add the aws:SourceAccount condition. Add the AWS account IDs of all developers who are experiencing the issue. Commit the fix back into the CodeCommit repository. Invoke deployment through CloudFormation to apply the changes.`, ko:`개발자 OU에서 IAM 리소스를 수정하는 것을 막는 SCP를 구성합니다. S3 정책에서 aws:SourceAccount 조건을 추가합니다. 문제가 발생한 모든 개발자의 AWS 계정 ID를 추가합니다. 수정 사항을 CodeCommit 리포지토리에 다시 커밋합니다. CloudFormation을 통해 배포를 호출하여 변경 사항을 적용합니다.` },
    { k:'D', en:`Ensure that no SCP is blocking access for developers to the S3 bucket. Ensure that no IAM policy permissions boundaries are denying access to developer IAM users. Make the necessary changes to the SCP and IAM policy permissions boundaries in the CodeCommit repository. Invoke deployment through CloudFormation to apply the changes.`, ko:`SCP가 개발자의 S3 버킷 액세스를 차단하지 않는지 확인합니다. IAM 정책 권한 경계가 개발자 IAM 사용자의 액세스를 거부하지 않는지 확인합니다. CodeCommit 리포지토리에서 SCP 및 IAM 정책 권한 경계를 필요에 따라 변경합니다. CloudFormation을 통해 배포를 호출하여 변경 사항을 적용합니다.` },
  ],
  answer: ['D'],
  vote: '91% D',
  explain: `<p><span class="mark-ok">✅ D — SCP 및 IAM 권한 경계 점검 후 CodeCommit → CloudFormation 배포</span></p>
<p>다중 계정 환경에서 일부 계정에서만 S3 액세스 문제가 발생할 경우, OU별로 적용된 SCP 또는 IAM 권한 경계가 원인일 수 있습니다. SCP와 권한 경계를 모두 확인하고, 모든 변경을 CodeCommit에 커밋 후 CloudFormation으로 배포하는 것이 "모든 리소스는 CloudFormation으로 관리"라는 회사 정책에 부합합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Block Public Access 해제는 보안 위험이 있으며, S3 정책의 문제가 아닌 SCP/권한 경계 문제입니다.</p>
<p><span class="mark-no">❌ B</span> — Config 레코더로 변경을 되돌리는 방식은 "CloudFormation으로만 변경" 정책에 위배됩니다.</p>
<p><span class="mark-no">❌ C</span> — SCP로 IAM 수정을 막는 것은 문제 해결이 아닌 추가 제한이며, SourceAccount 조건 추가는 근본 원인 해결이 아닙니다.</p>`,
  disc: [{ ans:'D (91%)', txt:'SCP와 IAM 권한 경계를 점검하고 CloudFormation으로 수정을 적용하는 표준 다중 계정 트러블슈팅 접근입니다.' }]
},
{
  n: 262,
  en: `A company has an organization in AWS Organizations for its multi-account environment. A DevOps engineer is developing an AWS CodeArtifact based strategy for application package management across the organization. Each application team at the company has its own account in the organization. Each application team also has limited access to a centralized shared services account.<br><br>Each application team needs full access to download, publish, and grant access to its own packages. Some common library packages that the application teams use must also be shared with the entire organization.<br><br>Which combination of steps will meet these requirements with the LEAST administrative overhead? (Choose three.)`,
  ko: `한 회사가 다중 계정 환경을 위해 AWS Organizations에 조직을 두고 있습니다. DevOps 엔지니어가 조직 전체에서 애플리케이션 패키지 관리를 위한 AWS CodeArtifact 기반 전략을 개발하고 있습니다. 회사의 각 애플리케이션 팀은 조직 내에 자체 계정을 가지고 있습니다. 각 애플리케이션 팀은 또한 중앙 집중화된 공유 서비스 계정에 대한 제한된 액세스 권한을 가지고 있습니다.<br><br>각 애플리케이션 팀은 자체 패키지를 다운로드, 게시 및 액세스 권한을 부여하기 위한 전체 액세스 권한이 필요합니다. 애플리케이션 팀이 사용하는 일부 공통 라이브러리 패키지도 전체 조직과 공유해야 합니다.<br><br>최소한의 관리 오버헤드로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Create a domain in each application team's account. Grant each application team's account full read access and write access to the application team's domain.`, ko:`각 애플리케이션 팀의 계정에 도메인을 만듭니다. 각 애플리케이션 팀의 계정에 애플리케이션 팀의 도메인에 대한 전체 읽기 액세스 및 쓰기 액세스 권한을 부여합니다.` },
    { k:'B', en:`Create a domain in the shared services account. Grant the organization read access and CreateRepository access.`, ko:`공유 서비스 계정에서 도메인을 만듭니다. 조직에 읽기 액세스 권한과 CreateRepository 액세스 권한을 부여합니다.` },
    { k:'C', en:`Create a repository in each application team's account. Grant each application team's account full read access and write access to its own repository.`, ko:`각 애플리케이션 팀의 계정에 저장소를 만듭니다. 각 애플리케이션 팀의 계정에 자체 저장소에 대한 전체 읽기 액세스 및 쓰기 액세스 권한을 부여합니다.` },
    { k:'D', en:`Create a repository in the shared services account. Grant the organization read access to the repository in the shared services account. Set the repository as the upstream repository in each application team's repository.`, ko:`공유 서비스 계정에서 리포지토리를 만듭니다. 조직에 공유 서비스 계정의 리포지토리에 대한 읽기 액세스 권한을 부여합니다. 각 애플리케이션 팀의 리포지토리에서 해당 리포지토리를 업스트림 리포지토리로 설정합니다.` },
    { k:'E', en:`For teams that require shared packages, create resource-based policies that allow read access to the repository from other application teams' accounts.`, ko:`공유 패키지가 필요한 팀의 경우 다른 애플리케이션 팀의 계정에서 저장소에 대한 읽기 액세스를 허용하는 리소스 기반 정책을 만듭니다.` },
    { k:'F', en:`Set the other application teams' repositories as upstream repositories.`, ko:`다른 애플리케이션 팀의 저장소를 업스트림 저장소로 설정합니다.` },
  ],
  answer: ['B','C','D'],
  vote: '76% BCD',
  explain: `<p><span class="mark-ok">✅ B — 공유 서비스 계정에 중앙 도메인 생성, 조직에 읽기+CreateRepository 권한 부여</span></p>
<p>공통 패키지 관리를 위한 중앙 집중식 도메인을 공유 서비스 계정에 생성합니다. 조직 전체에 CreateRepository 권한을 부여하면 각 팀이 이 도메인 안에서 자체 저장소를 생성할 수 있습니다.</p>
<p><span class="mark-ok">✅ C — 각 팀 계정에 저장소 생성 + 전체 읽기/쓰기 권한</span></p>
<p>각 팀이 자체 패키지에 대한 완전한 제어권을 갖도록 합니다.</p>
<p><span class="mark-ok">✅ D — 공유 서비스 계정에 공통 라이브러리 저장소 + 업스트림 설정</span></p>
<p>공통 라이브러리를 조직 전체에 공유하고, 각 팀의 저장소에서 업스트림으로 연결합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 각 팀 계정에 개별 도메인을 만드는 것은 관리 오버헤드가 증가합니다. 공유 서비스 계정의 중앙 도메인이 더 효율적입니다.</p>
<p><span class="mark-no">❌ E</span> — 리소스 기반 정책을 팀마다 생성하는 것은 관리 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ F</span> — 다른 팀의 저장소를 업스트림으로 설정하면 복잡한 종속성이 발생합니다.</p>`,
  disc: [{ ans:'BCD (76%)', txt:'공유 서비스 계정에 중앙 도메인과 공통 라이브러리 저장소를 두고, 각 팀이 자체 저장소를 관리하며 업스트림으로 연결하는 구조입니다.' }]
},
{
  n: 263,
  en: `A company deploys an application to Amazon EC2 instances. The application runs Amazon Linux 2 and uses AWS CodeDeploy. The application has the following file structure for its code repository:<br><br>[Image showing file structure: /config/config.txt and /application/web/ files]<br><br>The appspec.yml file has the following contents in the files section:<br><br>[Image showing two file mappings: (1) source: config/config.txt → destination: /usr/local/src and (2) source: / → destination: /var/www/html]<br><br>What will the result be for the deployment of the config.txt file?`,
  ko: `한 회사가 Amazon EC2 인스턴스에 애플리케이션을 배포합니다. 이 애플리케이션은 Amazon Linux 2를 실행하고 AWS CodeDeploy를 사용합니다. 이 애플리케이션은 코드 저장소에 대해 다음과 같은 파일 구조를 갖습니다:<br><br>[파일 구조 이미지: /config/config.txt 및 /application/web/ 파일들]<br><br>appspec.yml 파일의 파일 섹션에는 다음과 같은 내용이 있습니다:<br><br>[두 개의 파일 매핑 이미지: (1) source: config/config.txt → destination: /usr/local/src, (2) source: / → destination: /var/www/html]<br><br>config.txt 파일을 배포하면 어떤 결과가 나옵니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`The config.txt file will be deployed to only /var/www/html/config/config.txt.`, ko:`config.txt 파일은 /var/www/html/config/config.txt에만 배포됩니다.` },
    { k:'B', en:`The config.txt file will be deployed to /usr/local/src/config.txt and to /var/www/html/config/config.txt.`, ko:`config.txt 파일은 /usr/local/src/config.txt와 /var/www/html/config/config.txt에 배포됩니다.` },
    { k:'C', en:`The config.txt file will be deployed to only /usr/local/src/config.txt.`, ko:`config.txt 파일은 /usr/local/src/config.txt에만 배포됩니다.` },
    { k:'D', en:`The config.txt file will be deployed to /usr/local/src/config.txt and to /var/www/html/application/web/config.txt.`, ko:`config.txt 파일은 /usr/local/src/config.txt와 /var/www/html/application/web/config.txt에 배포됩니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 두 곳에 배포됨</span></p>
<p>appspec.yml의 files 섹션에 두 개의 매핑이 있습니다.<br>
① <code>source: config/config.txt</code> → <code>destination: /usr/local/src</code>: config.txt가 <strong>/usr/local/src/config.txt</strong>에 복사됩니다.<br>
② <code>source: /</code> → <code>destination: /var/www/html</code>: 저장소 루트 전체가 /var/www/html로 복사되므로, config/config.txt도 <strong>/var/www/html/config/config.txt</strong>에 복사됩니다.<br>
두 규칙이 모두 적용되므로 config.txt는 두 위치에 배포됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 첫 번째 매핑(/usr/local/src)도 적용되므로 하나의 위치만 배포되는 것은 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 두 번째 매핑(루트 → /var/www/html)도 적용되므로 /var/www/html/config/config.txt에도 배포됩니다.</p>
<p><span class="mark-no">❌ D</span> — 두 번째 매핑은 루트(/)를 /var/www/html로 매핑하므로, config.txt는 /var/www/html/config/config.txt에 위치합니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'CodeDeploy appspec.yml의 여러 파일 매핑은 모두 독립적으로 적용되며, 동일한 파일이 여러 목적지에 배포될 수 있습니다.' }]
},
{
  n: 264,
  en: `A company has set up AWS CodeArtifact repositories with public upstream repositories. The company's development team consumes open source dependencies from the repositories in the company's internal network.<br><br>The company's security team recently discovered a critical vulnerability in the most recent version of a package that the development team consumes. The security team has produced a patched version to fix the vulnerability. The company needs to prevent the vulnerable version from being downloaded. The company also needs to allow the security team to publish the patched version.<br><br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `한 회사가 퍼블릭 업스트림 리포지토리와 함께 AWS CodeArtifact 리포지토리를 설정했습니다. 회사의 개발팀은 회사 내부 네트워크의 리포지토리에서 오픈 소스 종속성을 사용합니다.<br><br>회사의 보안팀은 최근 개발팀이 사용하는 패키지의 최신 버전에서 심각한 취약성을 발견했습니다. 보안팀은 취약성을 수정하기 위해 패치 버전을 만들었습니다. 회사는 취약한 버전이 다운로드되는 것을 방지해야 합니다. 또한 회사는 보안팀이 패치 버전을 게시할 수 있도록 허용해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi', multiCount: 2,
  choices: [
    { k:'A', en:`Update the status of the affected CodeArtifact package version to unlisted.`, ko:`영향을 받는 CodeArtifact 패키지 버전의 상태를 목록에서 제거됨(unlisted)으로 업데이트합니다.` },
    { k:'B', en:`Update the status of the affected CodeArtifact package version to deleted.`, ko:`영향을 받은 CodeArtifact 패키지 버전의 상태를 삭제됨(deleted)으로 업데이트합니다.` },
    { k:'C', en:`Update the status of the affected CodeArtifact package version to archived.`, ko:`영향을 받은 CodeArtifact 패키지 버전의 상태를 보관됨(archived)으로 업데이트합니다.` },
    { k:'D', en:`Update the CodeArtifact package origin control settings to allow direct publishing and to block upstream operations.`, ko:`CodeArtifact 패키지 원본 제어 설정을 업데이트하여 직접 게시를 허용하고 업스트림 작업을 차단합니다.` },
    { k:'E', en:`Update the CodeArtifact package origin control settings to block direct publishing and to allow upstream operations.`, ko:`CodeArtifact 패키지 원본 제어 설정을 업데이트하여 직접 게시를 차단하고 업스트림 작업을 허용합니다.` },
  ],
  answer: ['C','D'],
  vote: '65% CD',
  explain: `<p><span class="mark-ok">✅ C — 패키지 버전 상태를 archived(보관됨)으로 변경</span></p>
<p>CodeArtifact의 패키지 버전 상태는 Published, Unfinished, Unlisted, Archived 4가지입니다(<strong>Deleted는 유효한 상태가 아님</strong>). Archived 상태로 변경하면 해당 버전의 다운로드가 차단되지만 메타데이터는 유지됩니다.</p>
<p><span class="mark-ok">✅ D — 원본 제어를 "직접 게시 허용 + 업스트림 차단"으로 설정</span></p>
<p>직접 게시를 허용하면 보안팀이 패치 버전을 저장소에 직접 게시할 수 있습니다. 업스트림 작업을 차단하면 취약한 버전이 퍼블릭 업스트림에서 다시 가져와지는 것을 방지합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Unlisted 상태는 목록 검색에서만 제외되며 다운로드는 여전히 가능합니다.</p>
<p><span class="mark-no">❌ B</span> — "Deleted"는 CodeArtifact 패키지 버전의 유효한 상태가 아닙니다. AWS 공식 문서 참조.</p>
<p><span class="mark-no">❌ E</span> — 직접 게시를 차단하면 보안팀이 패치 버전을 게시할 수 없게 됩니다.</p>`,
  disc: [{ ans:'CD (65%)', txt:'CodeArtifact 패키지 버전 상태: Published, Unfinished, Unlisted, Archived(다운로드 차단). "Deleted"는 유효한 상태가 아닙니다. 업스트림 차단으로 취약 버전 재다운로드를 방지합니다.' }]
},
{
  n: 265,
  en: `A company is running a custom-built application that processes records. All the components run on Amazon EC2 instances that run in an Auto Scaling group. Each record's processing is a multistep sequential action that is compute-intensive. Each step is always completed in 5 minutes or less.<br><br>A limitation of the current system is that if any steps fail, the application has to reprocess the record from the beginning. The company wants to update the architecture so that the application must reprocess only the failed steps.<br><br>What is the MOST operationally efficient solution that meets these requirements?`,
  ko: `한 회사에서 레코드를 처리하는 맞춤형 애플리케이션을 실행하고 있습니다. 모든 구성 요소는 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스에서 실행됩니다. 각 레코드의 처리 과정은 컴퓨팅 집약적인 다단계 순차적 작업입니다. 각 단계는 항상 5분 이내에 완료됩니다.<br><br>현재 시스템의 한계는 단계가 실패하면 애플리케이션이 처음부터 레코드를 다시 처리해야 한다는 것입니다. 이 회사는 애플리케이션이 실패한 단계만 다시 처리하도록 아키텍처를 업데이트하려고 합니다.<br><br>이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a web application to write records to Amazon S3. Use S3 Event Notifications to publish to an Amazon Simple Notification Service (Amazon SNS) topic. Use an EC2 instance to poll Amazon SNS and start processing. Save intermediate results to Amazon S3 to pass on to the next step.`, ko:`Amazon S3에 레코드를 쓸 웹 애플리케이션을 만듭니다. S3 Event Notifications를 사용하여 Amazon SNS 토픽에 게시합니다. EC2 인스턴스를 사용하여 Amazon SNS를 폴링하고 처리를 시작합니다. 중간 결과를 Amazon S3에 저장하여 다음 단계로 전달합니다.` },
    { k:'B', en:`Perform the processing steps by using logic in the application. Convert the application code to run in a container. Use AWS Fargate to manage the container instances. Configure the container to invoke itself to pass the state from one step to the next.`, ko:`애플리케이션의 로직을 사용하여 처리 단계를 수행합니다. 애플리케이션 코드를 컨테이너에서 실행되도록 변환합니다. AWS Fargate를 사용하여 컨테이너 인스턴스를 관리합니다. 컨테이너가 자체를 호출하여 상태를 한 단계에서 다음 단계로 전달하도록 구성합니다.` },
    { k:'C', en:`Create a web application to pass records to an Amazon Kinesis data stream. Decouple the processing by using the Kinesis data stream and AWS Lambda functions.`, ko:`Amazon Kinesis 데이터 스트림에 레코드를 전달하는 웹 애플리케이션을 만듭니다. Kinesis 데이터 스트림과 AWS Lambda 함수를 사용하여 처리를 분리합니다.` },
    { k:'D', en:`Create a web application to pass records to AWS Step Functions. Decouple the processing into Step Functions tasks and AWS Lambda functions.`, ko:`AWS Step Functions에 레코드를 전달하는 웹 애플리케이션을 만듭니다. 처리를 Step Functions 작업과 AWS Lambda 함수로 분리합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — AWS Step Functions + Lambda</span></p>
<p>Step Functions는 다단계 워크플로의 상태를 관리하며, 특정 단계 실패 시 해당 단계만 재시도하는 재시도 정책과 오류 처리를 기본으로 지원합니다. 처음부터 재처리하는 현재 한계를 해결하는 가장 운영 효율적인 솔루션입니다. 각 단계는 5분 이내 완료(Lambda 최대 15분 내)이므로 Lambda로 구현 가능합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — S3+SNS+EC2 폴링 방식은 단계별 실패 처리 및 상태 관리가 복잡하고 운영 효율이 낮습니다.</p>
<p><span class="mark-no">❌ B</span> — 컨테이너가 자신을 호출하는 패턴은 복잡하며 실패한 단계만 재시도하는 기능이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — Kinesis+Lambda 조합은 스트리밍 데이터 처리에 적합하지만, 다단계 순차 처리의 개별 단계 재시도를 기본 지원하지 않습니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'Step Functions의 재시도 정책(Retry)과 오류 캐처(Catch)로 실패한 단계만 재처리하는 기능을 간단하게 구현할 수 있습니다.' }]
},
{
  n: 266,
  en: `A company is migrating its on-premises Windows applications and Linux applications to AWS. The company will use automation to launch Amazon EC2 instances to mirror the on-premises configurations. The migrated applications require access to shared storage that uses SMB for Windows and NFS for Linux.<br><br>The company is also creating a pilot light disaster recovery (DR) environment in another AWS Region. The company will use automation to launch and configure the EC2 instances in the DR Region. The company needs to replicate the storage to the DR Region.<br><br>Which storage solution will meet these requirements?`,
  ko: `한 회사가 온프레미스 Windows 애플리케이션과 Linux 애플리케이션을 AWS로 마이그레이션하고 있습니다. 이 회사는 자동화를 사용하여 Amazon EC2 인스턴스를 시작하여 온프레미스 구성을 미러링합니다. 마이그레이션된 애플리케이션은 Windows의 경우 SMB를 사용하고 Linux의 경우 NFS를 사용하는 공유 스토리지에 액세스해야 합니다.<br><br>이 회사는 또한 다른 AWS 리전에서 파일럿 라이트 재해 복구(DR) 환경을 만들고 있습니다. 이 회사는 자동화를 사용하여 DR 리전에서 EC2 인스턴스를 시작하고 구성합니다. 이 회사는 스토리지를 DR 리전에 복제해야 합니다.<br><br>어떤 스토리지 솔루션이 이러한 요구 사항을 충족합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use Amazon S3 for the application storage. Create an S3 bucket in the primary Region and an S3 bucket in the DR Region. Configure S3 Cross-Region Replication (CRR) from the primary Region to the DR Region.`, ko:`애플리케이션 스토리지에 Amazon S3를 사용합니다. 기본 리전에 S3 버킷을 만들고 DR 리전에 S3 버킷을 만듭니다. 기본 리전에서 DR 리전으로 S3 크로스 리전 복제(CRR)를 구성합니다.` },
    { k:'B', en:`Use Amazon Elastic Block Store (Amazon EBS) for the application storage. Create a backup plan in AWS Backup that creates snapshots of the EBS volumes that are in the primary Region and replicates the snapshots to the DR Region.`, ko:`애플리케이션 스토리지에 Amazon Elastic Block Store(Amazon EBS)를 사용합니다. AWS Backup에서 기본 리전에 있는 EBS 볼륨의 스냅샷을 생성하고 스냅샷을 DR 리전에 복제하는 백업 계획을 만듭니다.` },
    { k:'C', en:`Use a Volume Gateway in AWS Storage Gateway for the application storage. Configure Cross-Region Replication (CRR) of the Volume Gateway from the primary Region to the DR Region.`, ko:`애플리케이션 스토리지를 위해 AWS Storage Gateway에서 Volume Gateway를 사용합니다. 기본 리전에서 DR 리전으로 Volume Gateway의 크로스 리전 복제(CRR)를 구성합니다.` },
    { k:'D', en:`Use Amazon FSx for NetApp ONTAP for the application storage. Create an FSx for ONTAP instance in the DR Region. Configure NetApp SnapMirror replication from the primary Region to the DR Region.`, ko:`애플리케이션 스토리지에 Amazon FSx for NetApp ONTAP을 사용합니다. DR 리전에서 FSx for ONTAP 인스턴스를 만듭니다. 기본 리전에서 DR 리전으로 NetApp SnapMirror 복제를 구성합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — Amazon FSx for NetApp ONTAP + SnapMirror</span></p>
<p>Amazon FSx for NetApp ONTAP은 NFS(Linux용)와 SMB(Windows용)를 모두 지원하는 유일한 AWS 완전 관리형 스토리지 서비스입니다. NetApp SnapMirror 기술을 통해 리전 간 데이터 복제를 지원하여 DR 요구 사항도 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — S3는 객체 스토리지로 SMB/NFS 파일 시스템 프로토콜을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — EBS는 단일 EC2 인스턴스에 연결되는 블록 스토리지로, SMB/NFS 공유 스토리지에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Volume Gateway는 iSCSI 블록 스토리지를 제공하며 SMB/NFS를 직접 지원하지 않습니다. 또한 Volume Gateway의 CRR은 지원되지 않습니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'FSx for NetApp ONTAP은 NFS+SMB 멀티 프로토콜 지원과 SnapMirror 리전 간 복제를 동시에 제공하는 유일한 솔루션입니다.' }]
},
{
  n: 267,
  en: `A company's application uses a fleet of Amazon EC2 On-Demand Instances to analyze and process data. The EC2 instances are in an Auto Scaling group. The Auto Scaling group is a target group for an Application Load Balancer (ALB). The application analyzes critical data that cannot tolerate interruption. The application also analyzes noncritical data that can withstand interruption.<br><br>The critical data analysis requires quick scalability in response to real-time application demand. The noncritical data analysis involves memory consumption. A DevOps engineer must implement a solution that reduces scale-out latency for the critical data. The solution also must process the noncritical data.<br><br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `회사의 애플리케이션은 Amazon EC2 온디맨드 인스턴스의 플릿을 사용하여 데이터를 분석하고 처리합니다. EC2 인스턴스는 Auto Scaling 그룹에 있습니다. Auto Scaling 그룹은 Application Load Balancer(ALB)의 대상 그룹입니다. 애플리케이션은 중단을 허용할 수 없는 중요한 데이터를 분석합니다. 또한 애플리케이션은 중단을 견딜 수 있는 비중요한 데이터를 분석합니다.<br><br>중요한 데이터 분석에는 실시간 애플리케이션 수요에 대응하여 빠른 확장성이 필요합니다. 비중요한 데이터 분석에는 메모리 소비가 포함됩니다. DevOps 엔지니어는 중요한 데이터의 확장 지연 시간을 줄이는 솔루션을 구현해야 합니다. 솔루션은 또한 비중요한 데이터를 처리해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (두 가지를 선택하세요.)`,
  type: 'multi', multiCount: 2,
  choices: [
    { k:'A', en:`For the critical data, modify the existing Auto Scaling group. Create a warm pool instance in the stopped state. Define the warm pool size. Create a new version of the launch template that has detailed monitoring enabled. Use Spot Instances.`, ko:`중요 데이터의 경우 기존 Auto Scaling 그룹을 수정합니다. 중지된 상태에서 웜 풀 인스턴스를 만듭니다. 웜 풀 크기를 정의합니다. 자세한 모니터링이 활성화된 새 버전의 시작 템플릿을 만듭니다. 스팟 인스턴스를 사용합니다.` },
    { k:'B', en:`For the critical data, modify the existing Auto Scaling group. Create a warm pool instance in the stopped state. Define the warm pool size. Create a new version of the launch template that has detailed monitoring enabled. Use On-Demand Instances.`, ko:`중요 데이터의 경우 기존 Auto Scaling 그룹을 수정합니다. 중지된 상태에서 웜 풀 인스턴스를 만듭니다. 웜 풀 크기를 정의합니다. 자세한 모니터링이 활성화된 새 버전의 시작 템플릿을 만듭니다. 온디맨드 인스턴스를 사용합니다.` },
    { k:'C', en:`For the critical data, modify the existing Auto Scaling group. Create a lifecycle hook to ensure that bootstrap scripts are completed successfully. Ensure that the application on the instances is ready to accept traffic before the instances are registered. Create a new version of the launch template that has detailed monitoring enabled.`, ko:`중요 데이터의 경우 기존 Auto Scaling 그룹을 수정합니다. 부트스트랩 스크립트가 성공적으로 완료되도록 라이프사이클 후크를 만듭니다. 인스턴스가 등록되기 전에 인스턴스의 애플리케이션이 트래픽을 허용할 준비가 되었는지 확인합니다. 자세한 모니터링이 활성화된 새 버전의 시작 템플릿을 만듭니다.` },
    { k:'D', en:`For the noncritical data, create a second Auto Scaling group that uses a launch template. Configure the launch template to install the unified Amazon CloudWatch agent and to configure the CloudWatch agent with a custom memory utilization metric. Use Spot Instances. Add the new Auto Scaling group as the target group for the ALB. Modify the application to use two target groups for critical data and noncritical data.`, ko:`비중요 데이터의 경우, 시작 템플릿을 사용하는 두 번째 Auto Scaling 그룹을 만듭니다. 시작 템플릿을 구성하여 통합 Amazon CloudWatch 에이전트를 설치하고 사용자 지정 메모리 사용률 메트릭으로 CloudWatch 에이전트를 구성합니다. 스팟 인스턴스를 사용합니다. 새 Auto Scaling 그룹을 ALB의 대상 그룹으로 추가합니다. 애플리케이션을 수정하여 중요 데이터와 비중요 데이터에 대해 두 개의 대상 그룹을 사용합니다.` },
    { k:'E', en:`For the noncritical data, create a second Auto Scaling group. Choose the predefined memory utilization metric type for the target tracking scaling policy. Use Spot Instances. Add the new Auto Scaling group as the target group for the ALB. Modify the application to use two target groups for critical data and noncritical data.`, ko:`비중요 데이터의 경우 두 번째 Auto Scaling 그룹을 만듭니다. 대상 추적 확장 정책에 대해 미리 정의된 메모리 사용률 메트릭 유형을 선택합니다. 스팟 인스턴스를 사용합니다. ALB의 대상 그룹으로 새 Auto Scaling 그룹을 추가합니다. 중요 데이터와 비중요 데이터에 대해 두 개의 대상 그룹을 사용하도록 애플리케이션을 수정합니다.` },
  ],
  answer: ['B','D'],
  vote: '87% BD',
  explain: `<p><span class="mark-ok">✅ B — 중요 데이터: 웜 풀(온디맨드) + 상세 모니터링</span></p>
<p>웜 풀(Warm Pool)은 미리 초기화된 인스턴스를 대기시켜 확장 지연 시간을 크게 줄입니다. 중단을 허용할 수 없는 중요 데이터에는 스팟이 아닌 온디맨드 인스턴스를 사용합니다.</p>
<p><span class="mark-ok">✅ D — 비중요 데이터: 두 번째 ASG + CloudWatch 에이전트 + 사용자 정의 메모리 메트릭 + 스팟</span></p>
<p>AWS Auto Scaling은 메모리 사용률 사전 정의 메트릭을 제공하지 않으므로, CloudWatch 에이전트로 사용자 정의 메모리 메트릭을 수집해야 합니다. 비중요 데이터에는 비용 효율적인 스팟 인스턴스를 사용합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 중요 데이터에 스팟 인스턴스 사용은 부적절합니다. 스팟은 중단될 수 있어 "중단 불가" 요구 사항에 위배됩니다.</p>
<p><span class="mark-no">❌ C</span> — 라이프사이클 후크는 확장 지연을 줄이지 않으며, 오히려 부트스트랩 완료를 기다리므로 지연이 증가합니다.</p>
<p><span class="mark-no">❌ E</span> — AWS Auto Scaling은 사전 정의된 메모리 사용률 메트릭 유형을 제공하지 않습니다. CloudWatch 에이전트로 커스텀 메트릭을 직접 수집해야 합니다.</p>`,
  disc: [{ ans:'BD (87%)', txt:'웜 풀로 중요 데이터 확장 지연 감소, CloudWatch 커스텀 메모리 메트릭 + 스팟으로 비중요 데이터를 비용 효율적으로 처리합니다.' }]
},
{
  n: 268,
  en: `A company recently migrated its application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that uses Amazon EC2 instances. The company configured the application to automatically scale based on CPU utilization.<br><br>The application produces memory errors when it experiences heavy loads. The application also does not scale out enough to handle the increased load. The company needs to collect and analyze memory metrics for the application over time.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `한 회사가 최근 Amazon EC2 인스턴스를 사용하는 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터로 애플리케이션을 마이그레이션했습니다. 이 회사는 CPU 사용률에 따라 자동으로 확장되도록 애플리케이션을 구성했습니다.<br><br>이 애플리케이션은 부하가 많을 때 메모리 오류를 생성합니다. 또한 애플리케이션은 증가된 부하를 처리할 만큼 충분히 확장되지 않습니다. 이 회사는 시간이 지남에 따라 애플리케이션의 메모리 메트릭을 수집하고 분석해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Attach the CloudWatchAgentServerPolicy managed IAM policy to the IAM instance profile that the cluster uses.`, ko:`CloudWatchAgentServerPolicy 관리형 IAM 정책을 클러스터가 사용하는 IAM 인스턴스 프로필에 연결합니다.` },
    { k:'B', en:`Attach the CloudWatchAgentServerPolicy managed IAM policy to a service account role for the cluster.`, ko:`CloudWatchAgentServerPolicy 관리형 IAM 정책을 클러스터의 서비스 계정 역할에 연결합니다.` },
    { k:'C', en:`Collect performance metrics by deploying the unified Amazon CloudWatch agent to the existing EC2 instances in the cluster. Add the agent to the AMI for any new EC2 instances that are added to the cluster.`, ko:`클러스터의 기존 EC2 인스턴스에 통합 Amazon CloudWatch 에이전트를 배포하여 성능 지표를 수집합니다. 클러스터에 추가된 모든 새 EC2 인스턴스에 대해 AMI에 에이전트를 추가합니다.` },
    { k:'D', en:`Collect performance logs by deploying the AWS Distro for OpenTelemetry collector as a DaemonSet.`, ko:`AWS Distro for OpenTelemetry 수집기를 DaemonSet으로 배포하여 성능 로그를 수집합니다.` },
    { k:'E', en:`Analyze the pod_memory_utilization Amazon CloudWatch metric in the ContainerInsights namespace by using the Service dimension.`, ko:`Service 차원을 사용하여 ContainerInsights 네임스페이스의 pod_memory_utilization Amazon CloudWatch 메트릭을 분석합니다.` },
    { k:'F', en:`Analyze the node_memory_utilization Amazon CloudWatch metric in the ContainerInsights namespace by using the ClusterName dimension.`, ko:`ClusterName 차원을 사용하여 ContainerInsights 네임스페이스의 node_memory_utilization Amazon CloudWatch 메트릭을 분석합니다.` },
  ],
  answer: ['A','C','E'],
  vote: '85% ACE',
  explain: `<p><span class="mark-ok">✅ A — CloudWatchAgentServerPolicy를 IAM 인스턴스 프로필에 연결</span></p>
<p>CloudWatch 에이전트가 EC2 인스턴스에서 메트릭을 수집하고 CloudWatch로 게시하려면 EC2 인스턴스 프로필에 해당 정책이 있어야 합니다.</p>
<p><span class="mark-ok">✅ C — 통합 CloudWatch 에이전트 배포 + AMI에 포함</span></p>
<p>통합 CloudWatch 에이전트는 CPU 외에 메모리 사용률도 수집합니다. AMI에 포함하면 새로 추가되는 인스턴스에도 자동 배포됩니다.</p>
<p><span class="mark-ok">✅ E — pod_memory_utilization 메트릭 분석 (Service 차원)</span></p>
<p>ContainerInsights의 pod_memory_utilization 메트릭으로 파드 수준 메모리 사용량을 분석하고, Service 차원으로 특정 서비스의 메모리 문제를 진단합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — CloudWatch 에이전트는 EC2 인스턴스 수준에서 동작하므로 서비스 계정 역할이 아닌 인스턴스 프로필에 정책을 연결해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Distro for OpenTelemetry는 주로 애플리케이션 수준 추적과 사용자 정의 메트릭에 사용됩니다. EC2 노드 수준 메모리 메트릭 수집에는 CloudWatch 에이전트가 더 적합합니다.</p>
<p><span class="mark-no">❌ F</span> — node_memory_utilization은 노드 전체 메모리를 보여주며, 파드 수준 메모리 문제를 진단하는 세부 정보를 제공하지 않습니다.</p>`,
  disc: [{ ans:'ACE (85%)', txt:'CloudWatch 에이전트(인스턴스 프로필 권한)로 메모리 메트릭 수집, ContainerInsights의 pod_memory_utilization으로 파드 수준 분석하는 조합입니다.' }]
},
{
  n: 269,
  en: `A company's video streaming platform usage has increased from 10,000 users each day to 50,000 users each day in multiple countries. The company deploys the streaming platform on Amazon Elastic Kubernetes Service (Amazon EKS). The EKS workload scales up to thousands of nodes during peak viewing time.<br><br>The company's users report occurrences of unauthorized logins. Users also report sudden interruptions and logouts from the platform.<br><br>The company wants additional security measures for the entire platform. The company also needs a summarized view of the resource behaviors and interactions across the company's entire AWS environment. The summarized view must show login attempts, API calls, and network traffic. The solution must permit network traffic analysis while minimizing the overhead of managing logs. The solution must also quickly investigate any potential malicious behavior that is associated with the EKS workload.<br><br>Which solution will meet these requirements?`,
  ko: `회사의 비디오 스트리밍 플랫폼 사용량이 여러 국가에서 매일 10,000명에서 매일 50,000명으로 증가했습니다. 이 회사는 Amazon Elastic Kubernetes Service(Amazon EKS)에 스트리밍 플랫폼을 배포합니다. EKS 워크로드는 최대 시청 시간 동안 수천 개의 노드로 확장됩니다.<br><br>이 회사의 사용자는 무단 로그인 발생을 보고합니다. 사용자는 또한 플랫폼에서 갑작스러운 중단 및 로그아웃을 보고합니다.<br><br>이 회사는 전체 플랫폼에 대한 추가 보안 조치를 원합니다. 이 회사는 또한 회사의 전체 AWS 환경에서 리소스 동작 및 상호 작용에 대한 요약된 보기가 필요합니다. 요약된 보기에는 로그인 시도, API 호출 및 네트워크 트래픽이 표시되어야 합니다. 솔루션은 로그 관리 오버헤드를 최소화하면서 네트워크 트래픽 분석을 허용해야 합니다. 솔루션은 또한 EKS 워크로드와 관련된 잠재적인 악의적 동작을 신속하게 조사해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Enable Amazon GuardDuty for EKS Audit Log Monitoring. Enable AWS CloudTrail logs. Store the EKS audit logs and CloudTrail log files in an Amazon S3 bucket. Use Amazon Athena to create an external table. Use Amazon QuickSight to create a dashboard.`, ko:`EKS 감사 로그 모니터링을 위해 Amazon GuardDuty를 활성화합니다. AWS CloudTrail 로그를 활성화합니다. EKS 감사 로그와 CloudTrail 로그 파일을 Amazon S3 버킷에 저장합니다. Amazon Athena를 사용하여 외부 테이블을 만듭니다. Amazon QuickSight를 사용하여 대시보드를 만듭니다.` },
    { k:'B', en:`Enable Amazon GuardDuty for EKS Audit Log Monitoring. Enable Amazon Detective in the company's AWS account. Enable EKS audit logs from optional source packages in Detective.`, ko:`EKS 감사 로그 모니터링을 위해 Amazon GuardDuty를 활성화합니다. 회사의 AWS 계정에서 Amazon Detective를 활성화합니다. Detective에서 선택적 소스 패키지의 EKS 감사 로그를 활성화합니다.` },
    { k:'C', en:`Enable Amazon CloudWatch Container Insights. Enable AWS CloudTrail logs. Store the EKS audit logs and CloudTrail log files in an Amazon S3 bucket. Use Amazon Athena to create an external table. Use Amazon QuickSight to create a dashboard.`, ko:`Amazon CloudWatch Container Insights를 활성화합니다. AWS CloudTrail 로그를 활성화합니다. EKS 감사 로그와 CloudTrail 로그 파일을 Amazon S3 버킷에 저장합니다. Amazon Athena를 사용하여 외부 테이블을 만듭니다. Amazon QuickSight를 사용하여 대시보드를 만듭니다.` },
    { k:'D', en:`Enable Amazon GuardDuty for EKS Audit Log Monitoring. Enable Amazon CloudWatch Container Insights and VPC Flow Logs. Enable AWS CloudTrail logs.`, ko:`EKS 감사 로그 모니터링을 위해 Amazon GuardDuty를 활성화합니다. Amazon CloudWatch Container Insights 및 VPC Flow Logs를 활성화합니다. AWS CloudTrail 로그를 활성화합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — GuardDuty(EKS 감사 로그) + Amazon Detective</span></p>
<p>Amazon Detective는 GuardDuty 결과를 기반으로 로그인 시도, API 호출, 네트워크 트래픽의 요약된 보기를 자동으로 생성합니다. Detective의 선택적 소스 패키지로 EKS 감사 로그를 활성화하면 EKS 워크로드의 악의적 동작을 빠르게 조사할 수 있습니다. 로그를 별도로 관리하거나 Athena/QuickSight를 구성할 필요가 없어 관리 오버헤드가 최소화됩니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — S3+Athena+QuickSight 파이프라인은 로그 관리 오버헤드가 높고 실시간 조사에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Container Insights는 성능 모니터링용이며, 보안 이벤트 조사나 요약된 보안 보기를 제공하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — GuardDuty와 여러 로그를 활성화하지만, 요약된 보기와 악의적 동작 빠른 조사를 위한 Detective가 없습니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'Detective는 GuardDuty 결과를 기반으로 리소스 동작의 요약 보기를 자동 생성하며, EKS 감사 로그 소스 패키지로 K8s 보안 조사를 지원합니다.' }]
},
{
  n: 270,
  en: `A company uses AWS Organizations to manage hundreds of AWS accounts. The company has a team that is responsible for AWS Identity and Access Management (IAM).<br><br>The IAM team wants to implement AWS IAM Identity Center (AWS Single Sign-On). The IAM team must have only the minimum needed permissions to manage IAM Identity Center. The IAM team must not be able to gain unneeded access to the Organizations management account. The IAM team must be able to provision new IAM Identity Center permission sets and assignments for existing and new member accounts.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
  ko: `한 회사가 AWS Organizations를 사용하여 수백 개의 AWS 계정을 관리합니다. 이 회사에는 AWS Identity and Access Management(IAM)를 담당하는 팀이 있습니다.<br><br>IAM 팀은 AWS IAM Identity Center(AWS Single Sign-On)를 구현하려고 합니다. IAM 팀은 IAM Identity Center를 관리하는 데 필요한 최소한의 권한만 있어야 합니다. IAM 팀은 Organizations 관리 계정에 대한 불필요한 액세스 권한을 얻을 수 없어야 합니다. IAM 팀은 기존 및 새 멤버 계정에 대한 새 IAM Identity Center 권한 집합과 할당을 프로비저닝할 수 있어야 합니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (세 가지를 선택하세요.)`,
  type: 'multi', multiCount: 3,
  choices: [
    { k:'A', en:`Create a new AWS account for the IAM team. In the new account, enable IAM Identity Center. In the Organizations management account, register the new account as a delegated administrator for IAM Identity Center.`, ko:`IAM 팀을 위한 새 AWS 계정을 만듭니다. 새 계정에서 IAM Identity Center를 활성화합니다. Organizations 관리 계정에서 새 계정을 IAM Identity Center의 위임된 관리자로 등록합니다.` },
    { k:'B', en:`Create a new AWS account for the IAM team. In the Organizations management account, enable IAM Identity Center. In the Organizations management account, register the new account as a delegated administrator for IAM Identity Center.`, ko:`IAM 팀을 위한 새 AWS 계정을 만듭니다. Organizations 관리 계정에서 IAM Identity Center를 활성화합니다. Organizations 관리 계정에서 새 계정을 IAM Identity Center의 위임된 관리자로 등록합니다.` },
    { k:'C', en:`In IAM Identity Center, create users and a group for the IAM team. Add the users to the group. Create a new permission set. Attach the AWSSSODirectoryAdministrator managed IAM policy to the group.`, ko:`IAM Identity Center에서 IAM 팀의 사용자와 그룹을 만듭니다. 사용자를 그룹에 추가합니다. 새 권한 집합을 만듭니다. AWSSSODirectoryAdministrator 관리형 IAM 정책을 그룹에 연결합니다.` },
    { k:'D', en:`In IAM Identity Center, create users and a group for the IAM team. Add the users to the group. Create a new permission set. Attach the AWSSSOMemberAccountAdministrator managed IAM policy to the group.`, ko:`IAM Identity Center에서 IAM 팀의 사용자와 그룹을 만듭니다. 사용자를 그룹에 추가합니다. 새 권한 집합을 만듭니다. AWSSSOMemberAccountAdministrator 관리형 IAM 정책을 그룹에 연결합니다.` },
    { k:'E', en:`Assign the permission set to the Organizations management account. Allow the IAM team group to use the permission set.`, ko:`조직 관리 계정에 권한 집합을 할당합니다. IAM 팀 그룹이 권한 집합을 사용하도록 허용합니다.` },
    { k:'F', en:`Assign the permission set to the new AWS account. Allow the IAM team group to use the permission set.`, ko:`새로운 AWS 계정에 권한 집합을 할당합니다. IAM 팀 그룹이 권한 집합을 사용하도록 허용합니다.` },
  ],
  answer: ['B','D','F'],
  vote: '42% BDF',
  explain: `<p><span class="mark-ok">✅ B — 관리 계정에서 IAM Identity Center 활성화 후 위임</span></p>
<p>IAM Identity Center는 반드시 Organizations 관리 계정에서 먼저 활성화해야 합니다. 이후 IAM 팀의 새 계정을 위임된 관리자로 등록하면 IAM 팀이 관리 계정에 직접 액세스하지 않아도 됩니다.</p>
<p><span class="mark-ok">✅ D — AWSSSOMemberAccountAdministrator 정책 사용</span></p>
<p>이 정책은 멤버 계정의 권한 집합과 할당을 관리하는 데 필요한 권한을 제공합니다. AWSSSODirectoryAdministrator는 사용자/그룹 디렉토리 관리 권한으로, 권한 집합 관리 권한이 없습니다.</p>
<p><span class="mark-ok">✅ F — 새 계정에 권한 집합 할당</span></p>
<p>IAM 팀이 관리 계정이 아닌 위임된 계정 내에서 작업하도록 새 계정에 권한 집합을 할당합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — IAM Identity Center는 새 계정이 아닌 Organizations 관리 계정에서 먼저 활성화해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — AWSSSODirectoryAdministrator는 사용자/그룹 디렉토리 관리 권한이며 권한 집합(Permission Set) 관리 권한을 포함하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — 관리 계정에 권한 집합을 할당하면 IAM 팀이 관리 계정에 불필요하게 액세스할 수 있어 요구 사항에 위배됩니다.</p>`,
  disc: [{ ans:'BDF (42%) vs ADF (40%)', txt:'핵심 논쟁: IAM Identity Center 활성화 위치(A: 새 계정 vs B: 관리 계정). AWS 공식 문서에 따르면 IAM Identity Center는 Organizations 관리 계정에서 활성화해야 하므로 B가 정확합니다. AWSSSOMemberAccountAdministrator가 권한 집합 관리 권한을 포함하므로 D가 정확합니다.' }]
}
];
