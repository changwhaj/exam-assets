window.QS_SET50 = [
  {
    n: 491,
    en: `<p>A company is developing a latency-sensitive application. Part of the application includes several AWS Lambda functions that need to initialize as quickly as possible. The Lambda functions are written in Java and contain initialization code outside the handlers to load libraries, initialize classes, and generate unique IDs.</p>
<p>Which solution will meet the startup performance requirement MOST cost-effectively?</p>`,
    ko: `<p>한 회사가 지연에 민감한 애플리케이션을 개발하고 있습니다. 애플리케이션의 일부에는 가능한 한 빨리 초기화해야 하는 여러 AWS Lambda 함수가 포함되어 있습니다. Lambda 함수는 Java로 작성되었으며 라이브러리를 로드하고, 클래스를 초기화하고, 고유 ID를 생성하기 위한 핸들러 외부의 초기화 코드가 포함되어 있습니다.</p>
<p>가장 비용 효율적으로 시작 성능 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Move all the initialization code to the handlers for each Lambda function. Activate Lambda SnapStart for each Lambda function. Configure SnapStart to reference the $LATEST version of each Lambda function.', ko: '모든 초기화 코드를 각 Lambda 함수의 핸들러로 옮깁니다. 각 Lambda 함수에 대해 Lambda SnapStart를 활성화합니다. $LATEST 버전을 참조하도록 구성합니다.' },
      { k: 'B', en: 'Publish a version of each Lambda function. Create an alias for each Lambda function. Configure each alias to point to its corresponding version. Set up a provisioned concurrency configuration for each Lambda function to point to the corresponding alias.', ko: '각 Lambda 함수의 버전을 게시합니다. 각 Lambda 함수에 대한 별칭을 만듭니다. 각 별칭이 해당 버전을 가리키도록 구성합니다. 해당 별칭을 가리키는 프로비저닝된 동시성 구성을 설정합니다.' },
      { k: 'C', en: 'Publish a version of each Lambda function. Set up a provisioned concurrency configuration for each Lambda function to point to the corresponding version. Activate Lambda SnapStart for the published versions of the Lambda functions.', ko: '각 Lambda 함수의 버전을 게시합니다. 해당 버전을 가리키는 프로비저닝된 동시성 구성을 설정합니다. 게시된 버전에 대해 Lambda SnapStart를 활성화합니다.' },
      { k: 'D', en: 'Update the Lambda functions to add a pre-snapshot hook. Move the code that generates unique IDs into the handlers. Publish a version of each Lambda function. Activate Lambda SnapStart for the published versions of the Lambda functions.', ko: 'Lambda 함수에 사전 스냅샷 후크를 추가합니다. 고유 ID를 생성하는 코드를 핸들러로 이동합니다. 각 Lambda 함수의 버전을 게시합니다. 게시된 버전에 대해 Lambda SnapStart를 활성화합니다.' },
    ],
    answer: ['D'],
    vote: '62% D / 38% C',
    explain: `<p><span class="mark-ok">✅ D — pre-snapshot 후크 + 고유 ID 핸들러 이동 + SnapStart</span></p>
<p>Lambda SnapStart는 초기화 코드를 한 번 실행한 후 스냅샷을 찍어 콜드 스타트를 제거합니다. 단, <strong>고유 ID 생성 코드는 스냅샷에 포함되면 안 됩니다</strong>(모든 인스턴스가 동일한 ID를 가지게 됨):</p>
<ul>
<li><strong>pre-snapshot 후크</strong>: 스냅샷 전에 실행할 초기화 코드 지정</li>
<li><strong>고유 ID 생성 코드를 핸들러로 이동</strong>: 각 요청마다 새로운 ID 생성</li>
<li>프로비저닝된 동시성(B, C)보다 SnapStart가 비용 효율적</li>
</ul>
<p><a href="https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html" target="_blank">AWS 공식 문서: Lambda SnapStart</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SnapStart는 $LATEST 버전에서 지원되지 않습니다. 게시된 버전에서만 사용 가능합니다.</p>
<p><span class="mark-no">❌ B</span> — 프로비저닝된 동시성은 SnapStart보다 비용이 높습니다(지속적으로 인스턴스를 워밍 유지).</p>
<p><span class="mark-no">❌ C</span> — 프로비저닝된 동시성 + SnapStart를 함께 사용하는 것은 중복적이며 불필요하게 비쌉니다. 또한 고유 ID 문제를 해결하지 않습니다.</p>`,
    disc: [
      { ans: 'D (62%)', txt: 'SnapStart로 비용 효율적 콜드 스타트 제거 + 고유 ID는 핸들러로 이동하여 스냅샷 공유 문제 해결.' },
      { ans: 'C (38%)', txt: '프로비저닝된 동시성 + SnapStart 조합이 성능에 더 좋다고 주장. 그러나 중복이고 비용 비효율적.' },
    ],
  },
  {
    n: 492,
    en: `<p>A solutions architect is importing a VM from an on-premises environment by using the Amazon EC2 VM Import feature of AWS Import/Export. The solutions architect has created an AMI and has provisioned an Amazon EC2 instance that is based on that AMI. The EC2 instance runs inside a public subnet in a VPC and has a public IP address assigned.</p>
<p>The EC2 instance does not appear as a managed instance in the AWS Systems Manager console.</p>
<p>Which combination of steps should the solutions architect take to troubleshoot this issue? (Choose two.)</p>`,
    ko: `<p>솔루션 아키텍트가 AWS Import/Export의 Amazon EC2 VM Import 기능을 사용하여 온프레미스 환경에서 VM을 가져오고 있습니다. AMI를 생성하고 해당 AMI를 기반으로 하는 Amazon EC2 인스턴스를 프로비저닝했습니다. EC2 인스턴스는 VPC의 퍼블릭 서브넷 내부에서 실행되며 퍼블릭 IP 주소가 할당됩니다.</p>
<p>EC2 인스턴스는 AWS Systems Manager 콘솔에서 관리형 인스턴스로 나타나지 않습니다.</p>
<p>이 문제를 해결하기 위해 어떤 단계 조합을 취해야 합니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Verify that Systems Manager Agent is installed on the instance and is running.', ko: '인스턴스에 Systems Manager Agent가 설치되어 실행 중인지 확인합니다.' },
      { k: 'B', en: 'Verify that the instance is assigned an appropriate IAM role for Systems Manager.', ko: '인스턴스에 Systems Manager에 대한 적절한 IAM 역할이 할당되었는지 확인합니다.' },
      { k: 'C', en: 'Verify the existence of a VPC endpoint on the VPC.', ko: 'VPC에 VPC 엔드포인트가 있는지 확인합니다.' },
      { k: 'D', en: 'Verify that the AWS Application Discovery Agent is configured.', ko: 'AWS Application Discovery Agent가 구성되었는지 확인합니다.' },
      { k: 'E', en: 'Verify the correct configuration of service-linked roles for Systems Manager.', ko: 'Systems Manager에 대한 서비스 연결 역할의 올바른 구성을 확인합니다.' },
    ],
    answer: ['A', 'B'],
    vote: '100% AB',
    explain: `<p><span class="mark-ok">✅ A — SSM Agent 설치 및 실행 확인</span></p>
<p>VM Import로 생성된 AMI는 AWS 제공 AMI와 달리 SSM Agent가 기본으로 설치되지 않을 수 있습니다. SSM Agent 없이는 Systems Manager가 인스턴스와 통신할 수 없습니다.</p>
<p><span class="mark-ok">✅ B — 적절한 IAM 역할 할당 확인</span></p>
<p>EC2 인스턴스가 Systems Manager와 상호 작용하려면 <code>AmazonSSMManagedInstanceCore</code> 정책이 포함된 IAM 역할이 연결되어야 합니다.</p>
<p><a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/managed_instances.html" target="_blank">AWS 공식 문서: SSM 관리형 인스턴스 요구사항</a></p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — 인스턴스에 퍼블릭 IP가 있으므로 VPC 엔드포인트 없이도 인터넷을 통해 SSM에 연결 가능합니다.</p>
<p><span class="mark-no">❌ D</span> — Application Discovery Agent는 마이그레이션 발견 도구로 SSM 관리형 인스턴스와 무관합니다.</p>
<p><span class="mark-no">❌ E</span> — 서비스 연결 역할은 SSM이 자동으로 생성하며, 인스턴스가 관리형으로 표시되지 않는 문제의 원인이 아닙니다.</p>`,
    disc: [
      { ans: 'AB (100%)', txt: 'VM Import AMI는 SSM Agent 미설치 가능. IAM 역할 없으면 SSM 통신 불가. 두 가지 모두 확인 필수.' },
    ],
  },
  {
    n: 493,
    en: `<p>A company is using AWS CloudFormation as its deployment tool for all applications. It stages all application binaries and templates within Amazon S3 buckets with versioning enabled. Developers have access to an Amazon EC2 instance that hosts the integrated development environment (IDE). The developers download the application binaries from Amazon S3 to the EC2 instance, make changes, and upload the binaries to an S3 bucket after running the unit tests locally. The developers want to improve the existing deployment mechanism and implement CI/CD using AWS CodePipeline.</p>
<p>The developers have the following requirements:</p>
<ul>
<li>Use AWS CodeCommit for source control.</li>
<li>Automate unit testing and security scanning.</li>
<li>Alert the developers when unit tests fail.</li>
<li>Turn application features on and off, and customize deployment dynamically as part of CI/CD.</li>
<li>Have the lead developer provide approval before deploying an application.</li>
</ul>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 모든 애플리케이션의 배포 도구로 AWS CloudFormation을 사용하고 있습니다. 개발자는 Amazon EC2 인스턴스에서 IDE에 접근하며, 개발자들은 기존 배포 메커니즘을 개선하고 AWS CodePipeline을 사용하여 CI/CD를 구현하려고 합니다.</p>
<p>개발자 요구사항: CodeCommit 소스 제어 / 단위 테스트 및 보안 스캐닝 자동화 / 단위 테스트 실패 시 알림 / 애플리케이션 기능 동적 제어 / 배포 전 수석 개발자 승인</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Use AWS CodeBuild to run unit tests and security scans. Use an Amazon EventBridge rule to send Amazon SNS alerts to the developers when unit tests fail. Write AWS Cloud Development Kit (AWS CDK) constructs for different solution features, and use a manifest file to turn features on and off in the AWS CDK application. Use a manual approval stage in the pipeline to allow the lead developer to approve applications.', ko: 'AWS CodeBuild를 사용하여 단위 테스트와 보안 스캔을 실행합니다. EventBridge 규칙을 사용하여 실패 시 SNS 알림을 보냅니다. AWS CDK 구문을 작성하고 매니페스트 파일로 기능을 켜고 끕니다. 파이프라인에서 수동 승인 단계를 사용합니다.' },
      { k: 'B', en: 'Use AWS Lambda to run unit tests and security scans. Use Lambda in a subsequent stage to send Amazon SNS alerts when unit tests fail. Write AWS Amplify plugins for different solution features and utilize user prompts to turn features on and off. Use Amazon SES in the pipeline for lead developer approval.', ko: 'Lambda를 사용하여 단위 테스트와 보안 스캔을 실행합니다. Lambda로 SNS 알림을 보냅니다. Amplify 플러그인을 작성하고 사용자 프롬프트로 기능을 켜고 끕니다. SES로 수석 개발자 승인을 처리합니다.' },
      { k: 'C', en: 'Use Jenkins to run unit tests and security scans. Use an Amazon EventBridge rule to send Amazon SES alerts when unit tests fail. Use AWS CloudFormation nested stacks for different solution features and parameters to turn features on and off. Use AWS Lambda for lead developer approval.', ko: 'Jenkins를 사용하여 단위 테스트와 보안 스캔을 실행합니다. SES 알림을 보냅니다. CloudFormation 중첩 스택으로 기능을 켜고 끕니다. Lambda로 수석 개발자 승인을 처리합니다.' },
      { k: 'D', en: 'Use AWS CodeDeploy to run unit tests and security scans. Use an Amazon CloudWatch alarm to send Amazon SNS alerts when unit tests fail. Use Docker images for different solution features and the AWS CLI to turn features on and off. Use a manual approval stage for lead developer approval.', ko: 'CodeDeploy를 사용하여 단위 테스트와 보안 스캔을 실행합니다. CloudWatch 경보로 SNS 알림을 보냅니다. Docker 이미지와 AWS CLI로 기능을 켜고 끕니다. 수동 승인 단계를 사용합니다.' },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — CodeBuild + EventBridge/SNS + AWS CDK + 수동 승인</span></p>
<ul>
<li><strong>CodeBuild</strong>: 단위 테스트 및 보안 스캔 자동화에 최적화된 AWS 관리형 빌드 서비스</li>
<li><strong>EventBridge + SNS</strong>: CodeBuild 실패 이벤트 시 개발자에게 알림</li>
<li><strong>AWS CDK + 매니페스트 파일</strong>: 기능 플래그 방식으로 배포 동적 제어</li>
<li><strong>수동 승인 단계</strong>: CodePipeline의 기본 기능으로 수석 개발자 승인 구현</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Lambda는 단위 테스트 실행에 최적화되지 않았습니다. SES는 승인 워크플로 도구가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — Jenkins는 AWS 네이티브 서비스가 아니라 별도 관리가 필요합니다. Lambda로 승인을 처리하는 것은 CodePipeline 수동 승인 기능보다 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — CodeDeploy는 배포 도구이지 테스트 실행 도구가 아닙니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'CodeBuild로 테스트 + CDK 기능 플래그 + 수동 승인 단계가 모든 요구사항을 AWS 네이티브 방식으로 충족.' },
    ],
  },
  {
    n: 494,
    en: `<p>A global ecommerce company has many data centers around the world. With the growth of its stored data, the company needs to set up a solution to provide scalable storage for legacy on-premises file applications. The company must be able to take point-in-time copies of volumes by using AWS Backup and must retain low-latency access to frequently accessed data. The company also needs to have storage volumes that can be mounted as Internet Small Computer System Interface (iSCSI) devices from the company's on-premises application servers.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>글로벌 전자상거래 회사가 온프레미스 파일 애플리케이션에 확장 가능한 스토리지를 제공해야 합니다. AWS Backup으로 볼륨의 시점 복사본을 가져와야 하고, 자주 접근하는 데이터에 저지연 액세스를 유지해야 합니다. 또한 온프레미스 애플리케이션 서버에서 iSCSI 장치로 마운트할 수 있는 스토리지 볼륨이 필요합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Provision an AWS Storage Gateway tape gateway. Configure the tape gateway to store data in an Amazon S3 bucket. Deploy AWS Backup to take point-in-time copies of the volumes.', ko: 'AWS Storage Gateway 테이프 게이트웨이를 프로비저닝합니다. S3 버킷에 데이터를 저장하고 AWS Backup으로 시점 복사본을 가져옵니다.' },
      { k: 'B', en: 'Provision an Amazon FSx File Gateway and an Amazon S3 File Gateway. Deploy AWS Backup to take point-in-time copies of the data.', ko: 'Amazon FSx 파일 게이트웨이와 Amazon S3 파일 게이트웨이를 프로비저닝합니다. AWS Backup으로 시점 복사본을 가져옵니다.' },
      { k: 'C', en: 'Provision an AWS Storage Gateway volume gateway in cache mode. Back up the on-premises Storage Gateway volumes with AWS Backup.', ko: '캐시 모드에서 AWS Storage Gateway 볼륨 게이트웨이를 프로비저닝합니다. AWS Backup으로 온프레미스 Storage Gateway 볼륨을 백업합니다.' },
      { k: 'D', en: 'Provision an AWS Storage Gateway file gateway in cache mode. Deploy AWS Backup to take point-in-time copies of the volumes.', ko: '캐시 모드에서 AWS Storage Gateway 파일 게이트웨이를 프로비저닝합니다. AWS Backup으로 시점 복사본을 가져옵니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — Storage Gateway 볼륨 게이트웨이(캐시 모드) + AWS Backup</span></p>
<p>세 가지 요구사항을 모두 충족합니다:</p>
<ul>
<li><strong>iSCSI 마운트</strong>: 볼륨 게이트웨이만 iSCSI 프로토콜을 지원합니다(파일/테이프 게이트웨이는 미지원)</li>
<li><strong>저지연 접근</strong>: 캐시 모드는 자주 접근하는 데이터를 로컬에 캐시</li>
<li><strong>AWS Backup</strong>: Storage Gateway 볼륨의 시점 복사본 지원</li>
</ul>
<p><a href="https://docs.aws.amazon.com/storagegateway/latest/vgw/WhatIsStorageGateway.html" target="_blank">AWS 공식 문서: Storage Gateway 볼륨 게이트웨이</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 테이프 게이트웨이는 iSCSI를 지원하지 않으며 백업/아카이브 테이프 워크플로용입니다.</p>
<p><span class="mark-no">❌ B</span> — FSx 파일 게이트웨이와 S3 파일 게이트웨이는 iSCSI를 지원하지 않습니다(NFS/SMB 지원).</p>
<p><span class="mark-no">❌ D</span> — 파일 게이트웨이는 iSCSI를 지원하지 않습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'iSCSI = 볼륨 게이트웨이만 지원. 캐시 모드 = 저지연. AWS Backup 통합 지원. 세 요구사항 완전 충족.' },
    ],
  },
  {
    n: 495,
    en: `<p>A company has an application that uses AWS Key Management Service (AWS KMS) to encrypt and decrypt data. The application stores data in an Amazon S3 bucket in an AWS Region. Company security policies require the data to be encrypted before the data is placed into the S3 bucket. The application must decrypt the data when the application reads files from the S3 bucket.</p>
<p>The company replicates the S3 bucket to other Regions. A solutions architect must design a solution so that the application can encrypt and decrypt data across Regions. The application must use the same key to decrypt the data in each Region.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS KMS를 사용하여 데이터를 암호화하고 복호화하는 애플리케이션을 보유합니다. 회사는 S3 버킷을 다른 리전에 복제하며, 애플리케이션이 여러 리전에서 동일한 키로 데이터를 복호화할 수 있도록 설계해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a KMS multi-Region primary key. Use the KMS multi-Region primary key to create a KMS multi-Region replica key in each additional Region where the application is running. Update the application code to use the specific replica key in each Region.', ko: 'KMS 다중 리전 기본 키를 만듭니다. 다중 리전 기본 키를 사용하여 애플리케이션이 실행 중인 각 추가 리전에 KMS 다중 리전 복제 키를 만듭니다. 각 리전에서 특정 복제 키를 사용하도록 애플리케이션 코드를 업데이트합니다.' },
      { k: 'B', en: 'Create a new customer managed KMS key in each additional Region where the application is running. Update the application code to use the specific KMS key in each Region.', ko: '애플리케이션이 실행 중인 각 추가 리전에서 새로운 고객 관리 KMS 키를 만듭니다. 각 리전에서 특정 KMS 키를 사용하도록 코드를 업데이트합니다.' },
      { k: 'C', en: 'Use AWS Private Certificate Authority to create a new certificate authority (CA) in the primary Region. Issue a new private certificate from the CA for the application\'s website URL. Share the CA with the additional Regions by using AWS Resource Access Manager (AWS RAM).', ko: 'AWS Private CA를 사용하여 기본 리전에 새 CA를 만들고 RAM으로 추가 리전과 CA를 공유합니다.' },
      { k: 'D', en: 'Use AWS Systems Manager Parameter Store to create a parameter in each additional Region. Export the key material from the KMS key in the primary Region. Store the key material in the parameter in each Region.', ko: '각 추가 리전의 Parameter Store에 매개변수를 만들고 기본 리전의 KMS 키에서 키 자료를 내보내 저장합니다.' },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — KMS 다중 리전 기본 키 + 복제 키</span></p>
<p>"동일한 키로 여러 리전에서 복호화" 요구사항에 정확히 부합하는 기능입니다:</p>
<ul>
<li><strong>KMS 다중 리전 키</strong>: 기본 키와 복제 키는 동일한 키 자료를 공유</li>
<li>한 리전에서 암호화한 데이터를 다른 리전의 복제 키로 복호화 가능</li>
<li>각 키는 해당 리전에서 독립적으로 관리됨</li>
</ul>
<p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html" target="_blank">AWS 공식 문서: KMS 다중 리전 키</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 각 리전에 별도 키를 생성하면 키 자료가 다릅니다. 한 리전에서 암호화한 데이터를 다른 리전 키로 복호화할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Private CA는 TLS 인증서 발급용으로 데이터 암호화/복호화와 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — KMS 키 자료를 내보내 Parameter Store에 저장하는 것은 보안상 권장되지 않으며 KMS 다중 리전 키보다 복잡합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'KMS 다중 리전 키 = 동일 키 자료 공유 → 여러 리전에서 동일 키로 암복호화 가능.' },
    ],
  },
  {
    n: 496,
    en: `<p>A company hosts an application that uses several Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). During the initial startup of the EC2 instances, the EC2 instances run user data scripts to download critical content for the application from an Amazon S3 bucket.</p>
<p>The EC2 instances are launching correctly. However, after a period of time, the EC2 instances are terminated with the following error message: "An instance was taken out of service in response to an ELB system health check failure." EC2 instances continue to launch and be terminated because of Auto Scaling events in an endless loop.</p>
<p>The only recent change to the deployment is that the company added a large amount of critical content to the S3 bucket. The company does not want to alter the user data scripts in production.</p>
<p>What should a solutions architect do so that the production environment can deploy successfully?</p>`,
    ko: `<p>한 회사가 ALB 뒤의 Auto Scaling 그룹에서 여러 Amazon EC2 인스턴스를 사용하는 애플리케이션을 호스팅합니다. EC2 인스턴스 초기 시작 중에 사용자 데이터 스크립트가 S3 버킷에서 중요한 콘텐츠를 다운로드합니다.</p>
<p>EC2 인스턴스는 올바르게 시작되지만 일정 시간 후 "ELB 시스템 상태 검사 실패에 대한 응답으로 인스턴스가 서비스에서 제외됨" 오류로 종료됩니다. 최근 S3 버킷에 많은 콘텐츠가 추가되었으며 회사는 프로덕션에서 사용자 데이터 스크립트를 변경하고 싶지 않습니다.</p>
<p>솔루션 아키텍트는 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Increase the size of the EC2 instances.', ko: 'EC2 인스턴스의 크기를 늘립니다.' },
      { k: 'B', en: 'Increase the health check timeout for the ALB.', ko: 'ALB에 대한 상태 점검 시간 제한을 늘립니다.' },
      { k: 'C', en: 'Change the health check path for the ALB.', ko: 'ALB에 대한 상태 검사 경로를 변경합니다.' },
      { k: 'D', en: 'Increase the health check grace period for the Auto Scaling group.', ko: '자동 크기 조정 그룹의 상태 검사 유예 기간을 늘립니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — Auto Scaling 그룹의 상태 검사 유예 기간 연장</span></p>
<p>원인 분석: S3에서 더 많은 콘텐츠를 다운로드하게 되어 시작 시간이 길어졌습니다. ALB 상태 검사가 다운로드가 완료되기 전에 실행되어 인스턴스가 비정상으로 판단됩니다.</p>
<ul>
<li><strong>상태 검사 유예 기간(Health Check Grace Period)</strong>: Auto Scaling이 EC2 인스턴스를 시작한 후 상태 검사를 시작하기 전까지 대기하는 시간</li>
<li>유예 기간을 늘리면 S3 다운로드가 완료된 후 상태 검사가 실행됨</li>
<li>사용자 데이터 스크립트 변경 없음</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 인스턴스 크기를 늘리면 다운로드 속도가 약간 향상될 수 있지만 근본 원인(상태 검사 타이밍)을 해결하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — ALB 상태 검사 시간 제한은 단일 요청의 응답 대기 시간입니다. 시작 지연 문제와 무관합니다.</p>
<p><span class="mark-no">❌ C</span> — 경로 변경은 다운로드 완료 전 검사 타이밍 문제를 해결하지 않습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'S3 콘텐츠 증가 → 시작 시간 증가 → 상태 검사 유예 기간 연장으로 해결. 스크립트 변경 불필요.' },
    ],
  },
  {
    n: 497,
    en: `<p>A company needs to move some on-premises Oracle databases to AWS. The company has chosen to keep some of the databases on premises for business compliance reasons.</p>
<p>The on-premises databases contain spatial data and run cron jobs for maintenance. The company needs to connect to the on-premises systems directly from AWS to query data as a foreign table.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 온프레미스 Oracle 데이터베이스 일부를 AWS로 이전해야 합니다. 일부는 비즈니스 규정 준수를 위해 온프레미스에 유지합니다.</p>
<p>온프레미스 데이터베이스에는 공간 데이터가 포함되어 있으며 유지 관리를 위해 크론 작업이 실행됩니다. 회사는 AWS에서 온프레미스 시스템에 직접 연결하여 데이터를 외래 테이블로 쿼리해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create Amazon DynamoDB global tables with auto scaling enabled. Use the AWS SCT and AWS DMS to move the data. Use Amazon EventBridge to schedule jobs. Use Amazon API Gateway for foreign table support.', ko: 'DynamoDB 글로벌 테이블을 생성하고 SCT/DMS로 데이터를 이동합니다. EventBridge로 작업을 예약합니다. API Gateway로 외래 테이블 지원을 수행합니다.' },
      { k: 'B', en: 'Create an Amazon RDS for Microsoft SQL Server DB instance. Use native replication to move the data. Use the AWS SCT to modify the SQL Server schema. Move the spatial data to Amazon Redshift. Use stored procedures for system maintenance. Create AWS Glue crawlers to connect to the on-premises Oracle databases for foreign table support.', ko: 'RDS SQL Server로 마이그레이션하고 Glue 크롤러로 외래 테이블 지원을 구현합니다.' },
      { k: 'C', en: 'Launch Amazon EC2 instances to host the Oracle databases. Use AWS Application Migration Service to move the data. Create an internet gateway for foreign table support.', ko: 'EC2에 Oracle을 호스팅하고 Application Migration Service로 데이터를 이동합니다. 인터넷 게이트웨이로 외래 테이블 지원을 구현합니다.' },
      { k: 'D', en: 'Create an Amazon RDS for PostgreSQL DB instance. Use the AWS SCT and AWS DMS to move the data. Use PostgreSQL native spatial data support. Run cron jobs on the DB instance for maintenance. Use AWS Direct Connect to connect the DB instance to the on-premises environment for foreign table support.', ko: 'Amazon RDS for PostgreSQL DB 인스턴스를 만듭니다. AWS SCT와 AWS DMS를 사용하여 데이터를 이동합니다. PostgreSQL 네이티브 공간 데이터 지원을 사용합니다. 유지 관리를 위해 DB 인스턴스에서 cron 작업을 실행합니다. AWS Direct Connect를 사용하여 외래 테이블 지원을 제공합니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — RDS for PostgreSQL + SCT/DMS + PostgreSQL 공간 데이터 + cron + Direct Connect</span></p>
<p>모든 요구사항을 충족합니다:</p>
<ul>
<li><strong>공간 데이터</strong>: PostgreSQL은 PostGIS 확장을 통해 공간 데이터를 네이티브 지원</li>
<li><strong>cron 작업</strong>: RDS PostgreSQL의 pg_cron 확장으로 DB 내에서 cron 실행 가능</li>
<li><strong>외래 테이블(Foreign Table)</strong>: PostgreSQL의 Foreign Data Wrapper(FDW)를 통해 온프레미스 Oracle에 직접 연결하여 외래 테이블 쿼리 가능</li>
<li><strong>Direct Connect</strong>: 인터넷 우회하여 안전한 온프레미스 연결 제공</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — DynamoDB는 공간 데이터를 네이티브로 지원하지 않으며 외래 테이블 기능이 없습니다.</p>
<p><span class="mark-no">❌ B</span> — Glue 크롤러는 외래 테이블 쿼리 기능이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 인터넷 게이트웨이는 외래 테이블 지원 기능이 없으며 보안 연결을 제공하지 않습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'PostgreSQL FDW로 외래 테이블 지원 + PostGIS로 공간 데이터 + pg_cron으로 유지보수 + DX로 안전한 온프레미스 연결.' },
    ],
  },
  {
    n: 498,
    en: `<p>A company runs an application on Amazon EC2 and AWS Lambda. The application stores temporary data in Amazon S3. The S3 objects are deleted after 24 hours.</p>
<p>The company deploys new versions of the application by launching AWS CloudFormation stacks. The stacks create the required resources. After validating a new version, the company deletes the old stack. The deletion of an old development stack recently failed. A solutions architect needs to resolve this issue without major architecture changes.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 Amazon EC2와 AWS Lambda에서 애플리케이션을 실행합니다. 애플리케이션은 임시 데이터를 Amazon S3에 저장하며 S3 객체는 24시간 후에 삭제됩니다.</p>
<p>회사는 CloudFormation 스택을 사용하여 새 버전을 배포합니다. 새 버전 검증 후 이전 스택을 삭제하는데, 이전 개발 스택 삭제가 실패했습니다. 주요 아키텍처 변경 없이 이 문제를 해결해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a Lambda function to delete objects from an S3 bucket. Add the Lambda function as a custom resource in the CloudFormation stack with a DependsOn attribute that points to the S3 bucket resource.', ko: 'S3 버킷에서 객체를 삭제하는 Lambda 함수를 만듭니다. S3 버킷 리소스를 가리키는 DependsOn 속성이 있는 CloudFormation 스택에 Lambda 함수를 사용자 지정 리소스로 추가합니다.' },
      { k: 'B', en: 'Modify the CloudFormation stack to attach a DeletionPolicy attribute with a value of Delete to the S3 bucket.', ko: 'S3 버킷에 Delete 값이 있는 DeletionPolicy 속성을 연결하도록 CloudFormation 스택을 수정합니다.' },
      { k: 'C', en: 'Update the CloudFormation stack to add a DeletionPolicy attribute with a value of Snapshot for the S3 bucket resource.', ko: 'S3 버킷 리소스에 대한 Snapshot 값을 갖는 DeletionPolicy 속성을 추가하도록 CloudFormation 스택을 업데이트합니다.' },
      { k: 'D', en: 'Update the CloudFormation template to create an Amazon Elastic File System (Amazon EFS) file system to store temporary files instead of Amazon S3. Configure the Lambda functions to run in the same VPC as the EFS file system.', ko: 'Amazon S3 대신 임시 파일을 저장하는 Amazon EFS 파일 시스템을 생성하도록 CloudFormation 템플릿을 업데이트합니다.' },
    ],
    answer: ['A'],
    vote: '70% A / 20% B',
    explain: `<p><span class="mark-ok">✅ A — Lambda 사용자 지정 리소스 + DependsOn</span></p>
<p>CloudFormation이 비어 있지 않은 S3 버킷을 삭제하지 못하는 것이 문제의 원인입니다. <code>DeletionPolicy: Delete</code>를 사용해도 CloudFormation은 객체가 있는 S3 버킷을 삭제할 수 없습니다.</p>
<p>해결책: Lambda 사용자 지정 리소스가 스택 삭제 시 버킷을 비운 후 CloudFormation이 버킷을 삭제합니다.</p>
<ul>
<li><code>DependsOn</code>: S3 버킷이 삭제되기 전에 Lambda가 먼저 실행되도록 보장</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/infrastructure-and-automation/delete-aws-cloudformation-stacks-containing-non-empty-amazon-s3-buckets/" target="_blank">AWS 블로그: 비어 있지 않은 S3 버킷이 포함된 CloudFormation 스택 삭제</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — <code>DeletionPolicy: Delete</code>는 CloudFormation에 "버킷을 삭제하라"고 지시하지만, 버킷에 객체가 있으면 여전히 실패합니다. S3는 비어 있지 않으면 삭제가 불가능합니다.</p>
<p><span class="mark-no">❌ C</span> — S3는 Snapshot DeletionPolicy를 지원하지 않습니다(RDS/EBS 전용).</p>
<p><span class="mark-no">❌ D</span> — EFS로 변경하는 것은 주요 아키텍처 변경입니다.</p>`,
    disc: [
      { ans: 'A (70%)', txt: 'DeletionPolicy: Delete는 객체 있는 S3 버킷 삭제 불가. Lambda 커스텀 리소스로 버킷 비운 후 삭제.' },
      { ans: 'B (20%)', txt: 'DeletionPolicy: Delete가 내용물까지 삭제한다고 오해. 실제로는 비어있지 않으면 실패.' },
    ],
  },
  {
    n: 499,
    en: `<p>A company has an application that stores user-uploaded videos in an Amazon S3 bucket that uses S3 Standard storage. Users access the videos frequently in the first 180 days after the videos are uploaded. Access after 180 days is rare. Named users and anonymous users access the videos.</p>
<p>Most of the videos are more than 100 MB in size. Users often have poor internet connectivity when they upload videos, resulting in failed uploads. The company uses multipart uploads for the videos.</p>
<p>A solutions architect needs to optimize the S3 costs of the application.</p>
<p>Which combination of actions will meet these requirements? (Choose two.)</p>`,
    ko: `<p>한 회사가 사용자가 업로드한 비디오를 Amazon S3 Standard 스토리지를 사용하는 S3 버킷에 저장합니다. 사용자는 업로드 후 처음 180일 동안 자주 비디오에 접근하며, 180일 후에는 드물게 접근합니다. 기명 사용자와 익명 사용자 모두 접근합니다.</p>
<p>대부분의 비디오는 100MB 이상이며 사용자들이 인터넷 연결 불량으로 업로드가 실패하는 경우가 많습니다. 회사는 멀티파트 업로드를 사용합니다.</p>
<p>S3 비용을 최적화하는 작업 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Configure the S3 bucket to be a Requester Pays bucket.', ko: 'S3 버킷을 요청자 지불 버킷으로 구성합니다.' },
      { k: 'B', en: 'Use S3 Transfer Acceleration to upload the videos to the S3 bucket.', ko: 'S3 전송 가속을 사용하여 비디오를 S3 버킷에 업로드합니다.' },
      { k: 'C', en: 'Create an S3 Lifecycle configuration to expire incomplete multipart uploads 7 days after initiation.', ko: '불완전한 멀티파트 업로드를 시작한 후 7일이 지나면 업로드가 만료되도록 S3 수명 주기 구성을 생성합니다.' },
      { k: 'D', en: 'Create an S3 Lifecycle configuration to transition objects to S3 Glacier Instant Retrieval after 1 day.', ko: '1일 후 객체를 S3 Glacier Instant Retrieval로 전환하기 위한 S3 수명 주기 구성을 생성합니다.' },
      { k: 'E', en: 'Create an S3 Lifecycle configuration to transition objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 180 days.', ko: '180일 후에 객체를 S3 Standard-Infrequent Access(S3 Standard-IA)로 전환하기 위한 S3 수명 주기 구성을 생성합니다.' },
    ],
    answer: ['C', 'E'],
    vote: '90% CE',
    explain: `<p><span class="mark-ok">✅ C — 불완전한 멀티파트 업로드 7일 후 만료</span></p>
<p>업로드 실패로 인한 불완전한 멀티파트 업로드는 S3에 계속 저장되어 비용이 발생합니다. 수명 주기 규칙으로 7일 후 자동 삭제하여 스토리지 비용 절감.</p>
<p><span class="mark-ok">✅ E — 180일 후 S3 Standard-IA로 전환</span></p>
<p>180일 이후 드물게 접근하는 비디오를 S3 Standard-IA로 전환하면 스토리지 비용이 절감됩니다. 익명 사용자도 접근하므로 S3 Intelligent-Tiering보다 직관적.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 요청자 지불은 비용을 사용자에게 전가하는 것이지 회사의 S3 비용 최적화가 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — S3 Transfer Acceleration은 업로드 속도 향상용으로 추가 비용이 발생합니다. 비용 최적화와 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — 1일 후 Glacier로 전환하면 사용자가 처음 180일 동안 자주 접근할 때 높은 검색 비용이 발생합니다.</p>`,
    disc: [
      { ans: 'CE (90%)', txt: 'C: 실패 업로드 불완전 파트 삭제로 스토리지 절감. E: 접근 빈도에 맞는 스토리지 클래스 전환.' },
    ],
  },
  {
    n: 500,
    en: `<p>A company runs an ecommerce web application on AWS. The web application is hosted as a static website on Amazon S3 with Amazon CloudFront for content delivery. An Amazon API Gateway API invokes AWS Lambda functions to handle user requests and order processing for the web application. The Lambda functions store data in an Amazon RDS for MySQL DB cluster that uses On-Demand instances. The DB cluster usage has been consistent in the past 12 months.</p>
<p>Recently, the website has experienced SQL injection and web exploit attempts. Customers also report that order processing time has increased during periods of peak usage. During these periods, the Lambda functions often have cold starts. As the company grows, the company needs to ensure scalability and low-latency access during traffic peaks. The company also must optimize the database costs and add protection against the SQL injection and web exploit attempts.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS에서 전자상거래 웹 애플리케이션을 운영합니다. 최근 웹사이트에서 SQL 주입 및 웹 악용 시도가 발생했습니다. 피크 사용 기간에 Lambda 함수의 콜드 스타트로 주문 처리 시간이 증가했습니다. 12개월 동안 DB 클러스터 사용이 일관적입니다.</p>
<p>확장성, 저지연 액세스, 데이터베이스 비용 최적화, SQL 주입 보호가 필요합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Configure the Lambda functions to have an increased timeout value during peak periods. Use RDS Reserved Instances for the database. Use CloudFront and subscribe to AWS Shield Advanced to protect against the SQL injection and web exploit attempts.', ko: 'Lambda 함수 시간 초과 값을 늘립니다. 데이터베이스에 RDS 예약 인스턴스를 사용합니다. AWS Shield Advanced에 가입합니다.' },
      { k: 'B', en: 'Increase the memory of the Lambda functions. Transition to Amazon Redshift for the database. Integrate Amazon Inspector with CloudFront to protect against the SQL injection and web exploit attempts.', ko: 'Lambda 메모리를 늘리고, Amazon Redshift로 전환합니다. Amazon Inspector를 CloudFront와 통합합니다.' },
      { k: 'C', en: 'Use Lambda functions with provisioned concurrency for compute during peak periods. Transition to Amazon Aurora Serverless for the database. Use CloudFront and subscribe to AWS Shield Advanced to protect against the SQL injection and web exploit attempts.', ko: '프로비저닝된 동시성을 갖춘 Lambda 함수를 사용합니다. Aurora Serverless로 전환합니다. AWS Shield Advanced에 가입합니다.' },
      { k: 'D', en: 'Use Lambda functions with provisioned concurrency for compute during peak periods. Use RDS Reserved Instances for the database. Integrate AWS WAF with CloudFront to protect against the SQL injection and web exploit attempts.', ko: '피크 기간 동안 프로비저닝된 동시성을 갖춘 Lambda 함수를 사용합니다. 데이터베이스에는 RDS 예약 인스턴스를 사용합니다. SQL 주입 및 웹 악용 시도로부터 보호하기 위해 AWS WAF를 CloudFront와 통합합니다.' },
    ],
    answer: ['D'],
    vote: '70% D / 30% C',
    explain: `<p><span class="mark-ok">✅ D — 프로비저닝된 동시성 + RDS 예약 인스턴스 + AWS WAF</span></p>
<p>세 가지 요구사항 분석:</p>
<ul>
<li><strong>콜드 스타트 / 저지연</strong>: 프로비저닝된 동시성으로 Lambda 인스턴스 워밍</li>
<li><strong>DB 비용 최적화</strong>: 12개월 동안 일관된 사용 = 예약 인스턴스가 온디맨드보다 최대 72% 저렴. Aurora Serverless는 불규칙한 사용에 적합</li>
<li><strong>SQL 주입 보호</strong>: AWS WAF가 적절. Shield Advanced는 DDoS 방어용으로 SQL 주입과 무관</li>
</ul>
<p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-baseline.html" target="_blank">AWS 공식 문서: WAF SQL 인젝션 규칙</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Shield Advanced는 DDoS 방어용이며 SQL 주입과 무관합니다. Lambda 타임아웃 증가는 콜드 스타트를 해결하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Redshift는 OLAP용이고 Inspector는 취약성 스캔 서비스입니다. SQL 주입 방어가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — Shield Advanced는 SQL 주입 방어가 아닙니다. Aurora Serverless는 변동이 심한 워크로드에 적합하지만, 12개월 일관 사용에서는 예약 인스턴스가 더 비용 효율적입니다.</p>`,
    disc: [
      { ans: 'D (70%)', txt: '일관된 DB 사용 = 예약 인스턴스. SQL 주입 = WAF(Shield Advanced 아님). 콜드 스타트 = 프로비저닝된 동시성.' },
      { ans: 'C (30%)', txt: 'Aurora Serverless가 확장성에 더 좋다고 주장. 그러나 일관된 사용에서는 예약 인스턴스가 비용 효율적.' },
    ],
  },
];