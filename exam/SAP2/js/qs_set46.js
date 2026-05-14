window.QS_SET46 = [
  {
    n: 451,
    en: `<p>A company is designing an AWS environment for a manufacturing application. The application has been successful with customers, and the application's user base has increased. The company has connected the AWS environment to the company's on-premises data center through a 1 Gbps AWS Direct Connect connection. The company has configured BGP for the connection.</p>
<p>The company must update the existing network connectivity solution to ensure that the solution is highly available, fault tolerant, and secure.</p>
<p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>한 회사가 제조 애플리케이션을 위한 AWS 환경을 설계하고 있습니다. 애플리케이션은 고객에게 성공적이었으며 사용자 기반이 증가했습니다. 회사는 1Gbps AWS Direct Connect 연결을 통해 AWS 환경을 온프레미스 데이터 센터에 연결했으며 BGP를 구성했습니다.</p>
<p>회사는 고가용성, 내결함성, 보안을 보장하기 위해 기존 네트워크 연결 솔루션을 업데이트해야 합니다.</p>
<p>가장 비용 효율적으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Add a dynamic private IP AWS Site-to-Site VPN as a secondary path to secure data in transit and provide resilience for the Direct Connect connection. Configure MACsec to encrypt traffic inside the Direct Connect connection.', ko: '전송 중 데이터 보안과 Direct Connect 연결 복원력을 위해 동적 프라이빗 IP AWS Site-to-Site VPN을 보조 경로로 추가합니다. Direct Connect 연결 내부 트래픽을 암호화하도록 MACsec을 구성합니다.' },
      { k: 'B', en: 'Provision another Direct Connect connection between the company\'s on-premises data center and AWS to increase the transfer speed and provide resilience. Configure MACsec to encrypt traffic inside the Direct Connect connection.', ko: '전송 속도 향상과 복원력을 위해 온프레미스 데이터 센터와 AWS 간에 또 다른 Direct Connect 연결을 프로비저닝합니다. Direct Connect 연결 내부 트래픽을 암호화하도록 MACsec을 구성합니다.' },
      { k: 'C', en: 'Configure multiple private VIFs. Load balance data across the VIFs between the on-premises data center and AWS to provide resilience.', ko: '여러 프라이빗 VIF를 구성합니다. 복원력을 제공하기 위해 온프레미스 데이터 센터와 AWS 사이의 VIF에 걸쳐 데이터 로드 밸런싱을 수행합니다.' },
      { k: 'D', en: 'Add a static AWS Site-to-Site VPN as a secondary path to secure data in transit and to provide resilience for the Direct Connect connection.', ko: '전송 중 데이터 보안과 Direct Connect 연결 복원력을 위해 정적 AWS Site-to-Site VPN을 보조 경로로 추가합니다.' },
    ],
    answer: ['D'],
    vote: '76% D / 24% A',
    explain: `<p><span class="mark-ok">✅ D — 정적 Site-to-Site VPN을 보조 경로로 추가</span></p>
<p>핵심 포인트: 현재 연결은 <strong>1 Gbps Direct Connect</strong>입니다.</p>
<ul>
<li><strong>MACsec</strong>은 10Gbps 및 100Gbps Direct Connect 전용 암호화 기능입니다. 1Gbps 연결에서는 지원되지 않으므로 A와 B는 부적절합니다.</li>
<li>1Gbps DX에서 전송 중 데이터를 암호화하려면 <strong>Site-to-Site VPN</strong>을 DX 위에 구성해야 합니다.</li>
<li>VPN 자체가 IPsec으로 암호화되어 보안 요구사항 충족</li>
<li>DX 장애 시 VPN이 백업 경로 역할 → 고가용성 및 내결함성 제공</li>
</ul>
<p><a href="https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-site-to-site-vpn.html" target="_blank">AWS 공식 문서: DX + Site-to-Site VPN</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — MACsec는 1Gbps에서 지원되지 않습니다. 또한 동적 VPN이 DX 연결에 의존하면 DX 장애 시 복원력이 없습니다.</p>
<p><span class="mark-no">❌ B</span> — 두 번째 DX 연결은 복원력을 제공하지만 비용이 크게 증가합니다. 또한 MACsec은 1Gbps 미지원입니다.</p>
<p><span class="mark-no">❌ C</span> — 여러 VIF는 대역폭을 증가시키지만 물리적 DX 연결 장애에 대한 복원력은 없습니다.</p>`,
    disc: [
      { ans: 'D (76%)', txt: 'MACsec은 10/100Gbps 전용. 1Gbps DX에서 보안+복원력은 VPN(IPsec) 보조 경로가 정답.' },
      { ans: 'A (24%)', txt: '동적 라우팅이 복원력에 더 좋다는 주장. 그러나 MACsec 미지원으로 부적절.' },
    ],
  },
  {
    n: 452,
    en: `<p>A company needs to modernize an application and migrate the application to AWS. The application stores user profile data as text in a single table in an on-premises MySQL database.</p>
<p>After the modernization, users will use the application to upload video files that are up to 4 GB in size. Other users must be able to download the video files from the application. The company needs a video storage solution that provides rapid scaling. The solution must not affect application performance.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 애플리케이션을 현대화하여 AWS로 마이그레이션해야 합니다. 애플리케이션은 온프레미스 MySQL 데이터베이스의 단일 테이블에 사용자 프로필 데이터를 텍스트로 저장합니다.</p>
<p>현대화 후 사용자는 최대 4GB 크기의 비디오 파일을 업로드합니다. 다른 사용자는 비디오 파일을 다운로드할 수 있어야 합니다. 회사는 신속한 확장을 제공하는 비디오 스토리지 솔루션이 필요하며 애플리케이션 성능에 영향을 주어서는 안 됩니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Migrate the database to Amazon Aurora PostgreSQL by using AWS DMS. Store the videos as base64-encoded strings in a TEXT column in the database.', ko: 'AWS DMS를 사용하여 데이터베이스를 Amazon Aurora PostgreSQL로 마이그레이션합니다. 비디오를 데이터베이스의 TEXT 열에 base64로 인코딩된 문자열로 저장합니다.' },
      { k: 'B', en: 'Migrate the database to Amazon DynamoDB by using AWS DMS with the AWS SCT. Store the videos as objects in Amazon S3. Store the S3 key in the corresponding DynamoDB item.', ko: 'AWS DMS와 AWS SCT를 사용하여 데이터베이스를 Amazon DynamoDB로 마이그레이션합니다. 비디오를 Amazon S3에 객체로 저장합니다. 해당 DynamoDB 항목에 S3 키를 저장합니다.' },
      { k: 'C', en: 'Migrate the database to Amazon Keyspaces (for Apache Cassandra) by using AWS DMS with the AWS SCT. Store the videos as objects in Amazon S3. Store the S3 object identifier in the corresponding Amazon Keyspaces entry.', ko: 'AWS DMS와 AWS SCT를 사용하여 데이터베이스를 Amazon Keyspaces로 마이그레이션합니다. 비디오를 Amazon S3에 객체로 저장합니다. 해당 Keyspaces 항목에 S3 객체 식별자를 저장합니다.' },
      { k: 'D', en: 'Migrate the database to Amazon DynamoDB by using AWS DMS with the AWS SCT. Store the videos as base64-encoded strings in the corresponding DynamoDB item.', ko: 'AWS DMS와 AWS SCT를 사용하여 데이터베이스를 Amazon DynamoDB로 마이그레이션합니다. 해당 DynamoDB 항목에 비디오를 base64로 인코딩된 문자열로 저장합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — DynamoDB + S3 분리 저장 패턴</span></p>
<p>대용량 미디어 파일 저장의 모범 사례입니다:</p>
<ul>
<li><strong>Amazon S3</strong>: 최대 5TB 객체 저장 가능, 대용량 파일(4GB)에 최적화. 빠른 확장 및 높은 내구성 제공</li>
<li><strong>DynamoDB</strong>: 사용자 프로필 데이터와 S3 키(메타데이터)를 저장하여 빠른 조회 지원</li>
<li>데이터베이스에 직접 대용량 파일을 저장하면 성능 저하 발생 → S3 분리 패턴으로 해결</li>
</ul>
<p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-use-s3-too.html" target="_blank">AWS 공식 문서: DynamoDB에서 S3 활용 모범 사례</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 4GB 비디오를 base64 인코딩하면 크기가 약 33% 증가하고 DB 성능에 심각한 영향을 줍니다. 관계형 DB는 대용량 바이너리 저장에 부적합합니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon Keyspaces는 Cassandra 호환 서비스로 MySQL 단일 테이블 마이그레이션에 과도합니다.</p>
<p><span class="mark-no">❌ D</span> — DynamoDB 항목 최대 크기는 400KB입니다. 4GB 비디오를 base64로 저장하는 것은 완전히 불가능합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'S3에 비디오 객체 저장 + DynamoDB에 S3 키 저장이 대용량 미디어 처리의 표준 패턴.' },
    ],
  },
  {
    n: 453,
    en: `<p>A company stores and manages documents in an Amazon Elastic File System (Amazon EFS) file system. The file system is encrypted with an AWS Key Management Service (AWS KMS) key. The file system is mounted to an Amazon EC2 instance that runs proprietary software.</p>
<p>The company has enabled automatic backups for the file system. The automatic backups use the AWS Backup default backup plan.</p>
<p>A solutions architect must ensure that deleted documents can be recovered within an RPO of 100 minutes.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 Amazon EFS 파일 시스템에 문서를 저장하고 관리합니다. 파일 시스템은 AWS KMS 키로 암호화됩니다. 회사는 파일 시스템에 대한 자동 백업을 활성화했으며, 자동 백업은 AWS Backup 기본 백업 계획을 사용합니다.</p>
<p>솔루션 아키텍트는 삭제된 문서를 RPO 100분 이내에 복구할 수 있도록 해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a new IAM role. Create a new backup plan. Use the new IAM role to create backups. Update the KMS key policy to allow the new IAM role to use the key. Implement an hourly backup schedule for the file system.', ko: '새 IAM 역할을 생성합니다. 새 백업 계획을 만들고 새 IAM 역할로 백업을 생성합니다. KMS 키 정책을 업데이트하여 새 IAM 역할이 키를 사용할 수 있도록 합니다. 파일 시스템에 대해 시간별 백업 일정을 구현합니다.' },
      { k: 'B', en: 'Create a new backup plan. Update the KMS key policy to allow the AWSServiceRoleForBackup IAM role to use the key. Implement a custom cron expression to run a backup of the file system every 30 minutes.', ko: '새 백업 계획을 만들고 KMS 키 정책을 업데이트하여 AWSServiceRoleForBackup IAM 역할이 키를 사용할 수 있도록 합니다. 파일 시스템 백업을 30분마다 실행하려면 사용자 정의 cron 표현식을 구현합니다.' },
      { k: 'C', en: 'Create a new IAM role. Use the existing backup plan. Update the KMS key policy to allow the new IAM role to use the key. Enable continuous backups for point-in-time recovery.', ko: '새 IAM 역할을 생성합니다. 기존 백업 계획을 사용하고 KMS 키 정책을 업데이트합니다. 특정 시점 복구를 위해 지속적인 백업을 활성화합니다.' },
      { k: 'D', en: 'Use the existing backup plan. Update the KMS key policy to allow the AWSServiceRoleForBackup IAM role to use the key. Enable Cross-Region Replication for the file system.', ko: '기존 백업 계획을 사용합니다. KMS 키 정책을 업데이트합니다. 파일 시스템에 대해 교차 리전 복제를 활성화합니다.' },
    ],
    answer: ['A'],
    vote: '73% A / 18% B',
    explain: `<p><span class="mark-ok">✅ A — 새 IAM 역할 + 새 백업 계획 + 시간별 백업</span></p>
<p>요구사항 분석: RPO 100분 = 최대 100분 이내 데이터 손실 허용.</p>
<ul>
<li><strong>기존 기본 백업 계획</strong>은 1일 1회 백업 → RPO 100분 불충족 (C, D 제외)</li>
<li><strong>시간별(60분) 백업</strong>으로 최악의 경우 60분 데이터 손실 → RPO 100분 충족</li>
<li><strong>새 IAM 역할 필요</strong>: KMS 암호화된 EFS를 백업하려면 KMS 키를 사용할 수 있는 역할이 필요</li>
<li>B의 30분 백업은 가능하지만 EFS의 cron 최소 단위는 1시간이므로 30분 불가</li>
</ul>
<p><a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html" target="_blank">AWS 공식 문서: AWS Backup 기능 가용성</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS Backup에서 EFS 백업의 최소 빈도는 1시간입니다. 30분 cron은 지원되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — EFS는 AWS Backup의 지속적 백업(PITR) 기능을 지원하지 않습니다. 또한 기존 기본 백업 계획(일별)은 RPO를 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — 교차 리전 복제는 DR 목적이며 삭제된 파일 복구와는 무관합니다. 기본 백업 계획은 RPO 불충족.</p>`,
    disc: [
      { ans: 'A (73%)', txt: '시간별 백업(60분) = RPO 100분 충족. EFS는 PITR 미지원, cron 최소 1시간. A가 유일하게 적합.' },
      { ans: 'B (18%)', txt: '30분 백업이 더 안전하다고 주장. 그러나 EFS cron 최소 단위 1시간으로 구현 불가.' },
    ],
  },
  {
    n: 454,
    en: `<p>A solutions architect must provide a secure way for a team of cloud engineers to use the AWS CLI to upload objects into an Amazon S3 bucket. Each cloud engineer has an IAM user, IAM access keys, and a virtual multi-factor authentication (MFA) device. The IAM users for the cloud engineers are in a group that is named S3-access. The cloud engineers must use MFA to perform any actions in Amazon S3.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>솔루션 아키텍트는 클라우드 엔지니어 팀이 AWS CLI를 사용하여 Amazon S3 버킷에 객체를 업로드할 수 있는 안전한 방법을 제공해야 합니다. 각 클라우드 엔지니어는 IAM 사용자, IAM 액세스 키, 가상 MFA 디바이스를 보유합니다. IAM 사용자는 S3-access 그룹에 있으며, 클라우드 엔지니어는 Amazon S3에서 작업을 수행할 때 MFA를 사용해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Attach a policy to the S3 bucket to prompt the IAM user for an MFA code when the IAM user performs actions on the S3 bucket. Use IAM access keys with the AWS CLI to call Amazon S3.', ko: 'IAM 사용자가 S3 버킷에서 작업을 수행할 때 MFA 코드를 묻는 정책을 S3 버킷에 연결합니다. AWS CLI와 함께 IAM 액세스 키를 사용하여 Amazon S3를 호출합니다.' },
      { k: 'B', en: 'Update the trust policy for the S3-access group to require principals to use MFA when principals assume the group. Use IAM access keys with the AWS CLI to call Amazon S3.', ko: '주체가 그룹을 맡을 때 MFA를 사용하도록 S3-access 그룹의 신뢰 정책을 업데이트합니다. AWS CLI와 함께 IAM 액세스 키를 사용하여 Amazon S3를 호출합니다.' },
      { k: 'C', en: 'Attach a policy to the S3-access group to deny all S3 actions unless MFA is present. Use IAM access keys with the AWS CLI to call Amazon S3.', ko: 'MFA가 존재하지 않는 한 모든 S3 작업을 거부하도록 S3-access 그룹에 정책을 연결합니다. AWS CLI와 함께 IAM 액세스 키를 사용하여 Amazon S3를 호출합니다.' },
      { k: 'D', en: 'Attach a policy to the S3-access group to deny all S3 actions unless MFA is present. Request temporary credentials from AWS Security Token Service (AWS STS). Attach the temporary credentials in a profile that Amazon S3 will reference when the user performs actions in Amazon S3.', ko: 'MFA가 없으면 모든 S3 작업을 거부하도록 S3-access 그룹에 정책을 연결합니다. AWS STS에서 임시 자격 증명을 요청합니다. 사용자가 S3에서 작업할 때 참조할 프로필에 임시 자격 증명을 연결합니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — MFA 거부 정책 + STS 임시 자격 증명</span></p>
<p>AWS CLI에서 MFA를 강제하려면 두 단계가 필요합니다:</p>
<ol>
<li><strong>MFA 조건부 거부 정책</strong>: <code>aws:MultiFactorAuthPresent: false</code>일 때 S3 작업 거부</li>
<li><strong>STS 임시 자격 증명</strong>: <code>aws sts get-session-token --serial-number &lt;MFA ARN&gt; --token-code &lt;MFA 코드&gt;</code>로 MFA가 포함된 임시 자격 증명 발급</li>
</ol>
<p>IAM 액세스 키만으로는 <code>MultiFactorAuthPresent</code>가 <code>false</code>로 설정되어 MFA 조건을 통과할 수 없습니다.</p>
<p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_configure-api-require.html" target="_blank">AWS 공식 문서: AWS CLI에서 MFA 강제</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, B, C</span> — AWS CLI에서 IAM 액세스 키만 사용하면 MFA 토큰이 인증 컨텍스트에 포함되지 않습니다. 따라서 <code>aws:MultiFactorAuthPresent</code> 조건이 <code>false</code>로 평가되어 MFA 정책이 항상 거부로 작동합니다. STS를 통해 MFA로 임시 자격 증명을 발급받아야만 MFA 조건을 통과할 수 있습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'IAM 액세스 키는 MFA 컨텍스트를 전달하지 않음. STS get-session-token으로 MFA 포함 임시 자격 증명 필수.' },
    ],
  },
  {
    n: 455,
    en: `<p>A company needs to migrate 60 on-premises legacy applications to AWS. The applications are based on the NET Framework and run on Windows.</p>
<p>The company needs a solution that minimizes migration time and requires no application code changes. The company also does not want to manage the infrastructure.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 60개의 온프레미스 레거시 애플리케이션을 AWS로 마이그레이션해야 합니다. 애플리케이션은 .NET Framework를 기반으로 하며 Windows에서 실행됩니다.</p>
<p>회사는 마이그레이션 시간을 최소화하고 애플리케이션 코드 변경이 필요하지 않은 솔루션이 필요합니다. 또한 인프라를 관리하지 않으려 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Refactor the applications and containerize them by using AWS Toolkit for NET Refactoring. Use Amazon ECS with the Fargate launch type to host the containerized applications.', ko: 'AWS Toolkit for .NET Refactoring을 사용하여 애플리케이션을 리팩터링하고 컨테이너화합니다. Fargate 시작 유형과 함께 Amazon ECS를 사용합니다.' },
      { k: 'B', en: 'Use the Windows Web Application Migration Assistant to migrate the applications to AWS Elastic Beanstalk. Use Elastic Beanstalk to deploy and manage the applications.', ko: 'Windows Web Application Migration Assistant를 사용하여 애플리케이션을 AWS Elastic Beanstalk로 마이그레이션합니다. Elastic Beanstalk를 사용하여 애플리케이션을 배포하고 관리합니다.' },
      { k: 'C', en: 'Use the Windows Web Application Migration Assistant to migrate the applications to Amazon EC2 instances. Use the EC2 instances to deploy and manage the applications.', ko: 'Windows Web Application Migration Assistant를 사용하여 애플리케이션을 Amazon EC2 인스턴스로 마이그레이션합니다. EC2 인스턴스를 사용하여 배포하고 관리합니다.' },
      { k: 'D', en: 'Refactor the applications and containerize them by using AWS Toolkit for NET Refactoring. Use Amazon EKS with the Fargate launch type to host the containerized applications.', ko: 'AWS Toolkit for .NET Refactoring을 사용하여 애플리케이션을 리팩터링하고 컨테이너화합니다. Fargate 시작 유형과 함께 Amazon EKS를 사용합니다.' },
    ],
    answer: ['B'],
    vote: '67% B / 33% A',
    explain: `<p><span class="mark-ok">✅ B — Windows Web Application Migration Assistant + Elastic Beanstalk</span></p>
<p>두 가지 핵심 요구사항: ① 코드 변경 없음, ② 인프라 관리 없음.</p>
<ul>
<li><strong>Windows Web Application Migration Assistant</strong>: 코드 변경 없이 Windows .NET 앱을 Elastic Beanstalk로 마이그레이션하는 AWS 도구</li>
<li><strong>Elastic Beanstalk</strong>: 기본 인프라 프로비저닝 및 관리를 자동화. 개발자가 인프라 걱정 없이 앱 배포 가능</li>
<li>A, D의 AWS Toolkit for .NET Refactoring은 이름 그대로 "리팩터링"이 포함되어 코드 변경이 발생할 수 있음</li>
</ul>
<p><a href="https://github.com/awslabs/windows-web-app-migration-assistant" target="_blank">Windows Web Application Migration Assistant 공식 저장소</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, D</span> — AWS Toolkit for .NET Refactoring은 코드 리팩터링 및 컨테이너화를 포함합니다. 코드 변경 없음 요구사항과 충돌합니다.</p>
<p><span class="mark-no">❌ C</span> — EC2 인스턴스는 인프라를 직접 관리해야 합니다(패치, 스케일링, OS 관리 등). 인프라 관리 불원 요구사항과 충돌합니다.</p>`,
    disc: [
      { ans: 'B (67%)', txt: 'Windows Migration Assistant + Beanstalk로 코드 변경 없이 마이그레이션 + 인프라 자동 관리.' },
      { ans: 'A (33%)', txt: 'ECS Fargate가 인프라 관리를 제거한다고 주장. 그러나 컨테이너화 과정에서 코드 변경 발생.' },
    ],
  },
  {
    n: 456,
    en: `<p>A company needs to run large batch-processing jobs on data that is stored in an Amazon S3 bucket. The jobs perform simulations. The results of the jobs are not time sensitive, and the process can withstand interruptions.</p>
<p>Each job must process 15-20 GB of data when the data is stored in the S3 bucket. The company will store the output from the jobs in a different Amazon S3 bucket for further analysis.</p>
<p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>한 회사가 Amazon S3 버킷에 저장된 데이터에 대해 대규모 일괄 처리 작업을 실행해야 합니다. 작업은 시뮬레이션을 수행하며, 결과는 시간에 민감하지 않고 중단을 견딜 수 있습니다.</p>
<p>각 작업은 S3 버킷에 저장된 15~20GB의 데이터를 처리해야 하며, 출력은 다른 Amazon S3 버킷에 저장됩니다.</p>
<p>가장 비용 효율적으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a serverless data pipeline. Use AWS Step Functions for orchestration. Use AWS Lambda functions with provisioned capacity to process the data.', ko: '서버리스 데이터 파이프라인을 생성합니다. 오케스트레이션을 위해 AWS Step Functions를 사용합니다. 프로비저닝된 용량과 함께 AWS Lambda 함수를 사용합니다.' },
      { k: 'B', en: 'Create an AWS Batch compute environment that includes Amazon EC2 Spot Instances. Specify the SPOT_CAPACITY_OPTIMIZED allocation strategy.', ko: 'Amazon EC2 스팟 인스턴스가 포함된 AWS Batch 컴퓨팅 환경을 생성합니다. SPOT_CAPACITY_OPTIMIZED 할당 전략을 지정합니다.' },
      { k: 'C', en: 'Create an AWS Batch compute environment that includes Amazon EC2 On-Demand Instances and Spot Instances. Specify the SPOT_CAPACITY_OPTIMIZED allocation strategy for the Spot Instances.', ko: 'Amazon EC2 온디맨드 인스턴스와 스팟 인스턴스가 포함된 AWS Batch 컴퓨팅 환경을 생성합니다. 스팟 인스턴스에 대한 SPOT_CAPACITY_OPTIMIZED 할당 전략을 지정합니다.' },
      { k: 'D', en: 'Use Amazon EKS to run the processing jobs. Use managed node groups that contain a combination of Amazon EC2 On-Demand Instances and Spot Instances.', ko: 'Amazon EKS를 사용하여 처리 작업을 실행합니다. 온디맨드 인스턴스와 스팟 인스턴스 조합이 포함된 관리형 노드 그룹을 사용합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Batch + EC2 스팟 인스턴스 + SPOT_CAPACITY_OPTIMIZED</span></p>
<p>"대규모 배치 처리 + 시간에 민감하지 않음 + 중단 허용"은 AWS Batch + 스팟의 교과서적 사용 사례입니다:</p>
<ul>
<li><strong>AWS Batch</strong>: 배치 컴퓨팅 전용 관리형 서비스. 작업 큐, 컴퓨팅 환경, 작업 정의를 자동 관리</li>
<li><strong>EC2 스팟 인스턴스</strong>: 온디맨드 대비 최대 90% 저렴. 중단 허용이므로 적합</li>
<li><strong>SPOT_CAPACITY_OPTIMIZED</strong>: 중단 가능성이 가장 낮은 스팟 풀에서 인스턴스 선택</li>
<li>C의 혼합 환경은 스팟만으로도 충분한 상황에서 불필요한 온디맨드 비용 발생</li>
</ul>
<p><a href="https://docs.aws.amazon.com/batch/latest/userguide/allocation-strategies.html" target="_blank">AWS 공식 문서: AWS Batch 할당 전략</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda는 최대 실행 시간 15분, 처리 데이터 한계가 있어 15~20GB 배치 처리에 부적합합니다.</p>
<p><span class="mark-no">❌ C</span> — 온디맨드 + 스팟 혼합은 중단 허용 워크로드에서 온디맨드 비용이 불필요합니다. SPOT_CAPACITY_OPTIMIZED는 스팟 전용 전략입니다.</p>
<p><span class="mark-no">❌ D</span> — EKS는 배치 처리보다 장기 실행 컨테이너 워크로드에 적합하며, 배치 전용 서비스인 AWS Batch보다 운영 오버헤드가 큽니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '"배치 + 중단 허용 + 비용 최적화" = AWS Batch + Spot + SPOT_CAPACITY_OPTIMIZED 조합이 정답.' },
    ],
  },
  {
    n: 457,
    en: `<p>A company has an application that analyzes and stores image data on premises. The application receives millions of new image files every day. Files are an average of 1 MB in size. The files are analyzed in batches of 1 GB. When the application analyzes a batch, the application zips the images together. The application then archives the images as a single file in an on-premises NFS server for long-term storage.</p>
<p>The company has a Microsoft Hyper-V environment on premises and has compute capacity available. The company does not have storage capacity and wants to archive the images on AWS. The company needs the ability to retrieve archived data within 1 week of a request.</p>
<p>The company has a 10 Gbps AWS Direct Connect connection between its on-premises data center and AWS. The company needs to set bandwidth limits and schedule archived images to be copied to AWS during non-business hours.</p>
<p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>한 회사가 온프레미스에서 이미지 데이터를 분석하고 저장하는 애플리케이션을 보유하고 있습니다. 매일 수백만 개의 새 이미지 파일(평균 1MB)을 수신하며 1GB 단위로 분석합니다. 분석 후 이미지를 압축하여 온프레미스 NFS 서버에 단일 파일로 장기 보관합니다.</p>
<p>회사는 온프레미스에 Hyper-V 환경과 컴퓨팅 용량이 있지만 스토리지 용량이 없어 AWS에 이미지를 보관하려 합니다. 요청 후 1주일 이내에 보관 데이터를 검색할 수 있어야 합니다.</p>
<p>10Gbps Direct Connect 연결이 있으며, 업무 시간 외에 대역폭 제한을 설정하고 복사를 예약해야 합니다.</p>
<p>가장 비용 효율적으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Deploy an AWS DataSync agent on a new GPU-based Amazon EC2 instance. Configure the DataSync agent to copy the batch of files from the NFS on-premises server to Amazon S3 Glacier Instant Retrieval. After the successful copy, delete the data from the on-premises storage.', ko: '새 GPU 기반 EC2 인스턴스에 AWS DataSync 에이전트를 배포합니다. NFS 서버에서 Amazon S3 Glacier Instant Retrieval로 파일 배치를 복사하도록 구성합니다. 복사 후 온프레미스 스토리지에서 데이터를 삭제합니다.' },
      { k: 'B', en: 'Deploy an AWS DataSync agent as a Hyper-V VM on premises. Configure the DataSync agent to copy the batch of files from the NFS on-premises server to Amazon S3 Glacier Deep Archive. After the successful copy, delete the data from the on-premises storage.', ko: 'AWS DataSync 에이전트를 온프레미스에 Hyper-V VM으로 배포합니다. NFS 서버에서 Amazon S3 Glacier Deep Archive로 파일 배치를 복사하도록 구성합니다. 복사 후 온프레미스 스토리지에서 데이터를 삭제합니다.' },
      { k: 'C', en: 'Deploy an AWS DataSync agent on a new general purpose Amazon EC2 instance. Configure to copy files to Amazon S3 Standard. Create an S3 Lifecycle rule to transition objects to S3 Glacier Deep Archive after 1 day.', ko: '새 범용 EC2 인스턴스에 DataSync 에이전트를 배포합니다. S3 Standard로 복사하도록 구성하고 1일 후 S3 Glacier Deep Archive로 전환하는 수명 주기 규칙을 생성합니다.' },
      { k: 'D', en: 'Deploy an AWS Storage Gateway Tape Gateway on premises in the Hyper-V environment. Connect the Tape Gateway to AWS. Use automatic tape creation. Specify an Amazon S3 Glacier Deep Archive pool. Eject the tape after the batch of images is copied.', ko: 'Hyper-V 환경에 AWS Storage Gateway 테이프 게이트웨이를 배포합니다. 테이프 게이트웨이를 AWS에 연결하고 자동 테이프 생성을 사용합니다. S3 Glacier Deep Archive 풀을 지정하고 배치 복사 후 테이프를 꺼냅니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — DataSync Hyper-V VM 에이전트 + S3 Glacier Deep Archive</span></p>
<p>세 가지 요구사항 충족:</p>
<ul>
<li><strong>Hyper-V VM에 DataSync 에이전트 배포</strong>: 기존 온프레미스 컴퓨팅 활용, 새 EC2 비용 없음</li>
<li><strong>S3 Glacier Deep Archive</strong>: 장기 보관 최저 비용 스토리지. 1주일 이내 검색 요구사항 충족 (표준 복구 12~48시간)</li>
<li><strong>DataSync 대역폭 제한 및 예약</strong>: 업무 시간 외 복사 예약 기능 내장</li>
</ul>
<p><a href="https://docs.aws.amazon.com/datasync/latest/userguide/configure-task-scheduling.html" target="_blank">AWS 공식 문서: DataSync 작업 예약</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3 Glacier Instant Retrieval은 Glacier보다 비싸며 장기 보관 최적화가 아닙니다. GPU 기반 EC2는 불필요한 비용입니다.</p>
<p><span class="mark-no">❌ C</span> — 새 EC2 인스턴스 비용이 추가되며, S3 Standard → Glacier Deep Archive 전환 전 1일간 불필요한 S3 Standard 요금이 발생합니다.</p>
<p><span class="mark-no">❌ D</span> — 테이프 게이트웨이는 레거시 테이프 백업 워크플로에 최적화되어 있습니다. 테이프 꺼내기/삽입 워크플로가 직접 Glacier 아카이브보다 복잡하고 비효율적입니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '기존 Hyper-V VM 활용으로 EC2 비용 절감 + Glacier Deep Archive의 최저 스토리지 비용 + DataSync 예약 기능.' },
    ],
  },
  {
    n: 458,
    en: `<p>A company wants to record key performance indicators (KPIs) from its application as part of a strategy to convert to a user-based licensing schema. The application is a multi-tier application with a web-based UI. The company saves all log files to Amazon CloudWatch by using the CloudWatch agent. All logins to the application are saved in a log file.</p>
<p>As part of the new license schema, the company needs to find out how many unique users each client has on a daily basis, weekly basis, and monthly basis.</p>
<p>Which solution will provide this information with the LEAST change to the application?</p>`,
    ko: `<p>한 회사가 사용자 기반 라이선스 스키마로 전환하기 위해 애플리케이션의 KPI를 기록하려고 합니다. 애플리케이션은 다중 계층 웹 기반 UI를 갖추고 있습니다. CloudWatch 에이전트를 사용하여 모든 로그 파일을 Amazon CloudWatch에 저장하며, 모든 로그인 정보는 로그 파일에 저장됩니다.</p>
<p>회사는 각 클라이언트의 일일, 주간, 월간 고유 사용자 수를 파악해야 합니다.</p>
<p>애플리케이션을 최소한으로 변경하면서 이 정보를 제공하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Configure an Amazon CloudWatch Logs metric filter that saves each successful login as a metric. Configure the user name and client name as dimensions for the metric.', ko: '성공한 각 로그인을 지표로 저장하는 Amazon CloudWatch Logs 지표 필터를 구성합니다. 사용자 이름과 클라이언트 이름을 지표의 차원으로 구성합니다.' },
      { k: 'B', en: 'Change the application logic to make each successful login generate a call to the AWS SDK to increment a custom metric that records user name and client name dimensions in CloudWatch.', ko: '로그인이 성공할 때마다 AWS SDK를 호출하여 CloudWatch에서 사용자 이름과 클라이언트 이름 차원을 기록하는 사용자 지정 지표를 증가시키도록 애플리케이션 로직을 변경합니다.' },
      { k: 'C', en: 'Configure the CloudWatch agent to extract successful login metrics from the logs. Additionally, configure the CloudWatch agent to save the successful login metrics as a custom metric that uses the user name and client name as dimensions for the metric.', ko: '로그에서 성공적인 로그인 지표를 추출하도록 CloudWatch 에이전트를 구성합니다. 사용자 이름과 클라이언트 이름을 차원으로 사용하여 지표를 저장하도록 구성합니다.' },
      { k: 'D', en: 'Configure an AWS Lambda function to consume an Amazon CloudWatch Logs stream of the application logs. Additionally, configure the Lambda function to increment a custom metric in CloudWatch that uses the user name and client name as dimensions.', ko: '애플리케이션 로그의 CloudWatch Logs 스트림을 사용하도록 Lambda 함수를 구성합니다. 사용자 이름과 클라이언트 이름을 차원으로 사용하는 CloudWatch 사용자 지정 지표를 증가시키도록 Lambda 함수를 구성합니다.' },
    ],
    answer: ['A'],
    vote: '83% A / 17% C',
    explain: `<p><span class="mark-ok">✅ A — CloudWatch Logs 지표 필터</span></p>
<p>애플리케이션 변경 없이 기존 로그에서 KPI를 추출하는 가장 간단한 방법입니다:</p>
<ul>
<li>이미 CloudWatch Logs에 저장된 로그를 활용</li>
<li><strong>지표 필터</strong>: 로그 이벤트 패턴을 정의하고 일치 시 CloudWatch 지표로 변환</li>
<li>사용자 이름, 클라이언트 이름을 차원으로 설정하여 일별/주별/월별 집계 가능</li>
<li>애플리케이션 코드 변경 없음</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/MonitoringLogData.html" target="_blank">AWS 공식 문서: CloudWatch Logs 지표 필터</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 애플리케이션 로직을 직접 변경해야 하므로 "최소 변경" 요구사항과 충돌합니다.</p>
<p><span class="mark-no">❌ C</span> — CloudWatch 에이전트는 지표 필터 기능을 갖추고 있지 않습니다. 로그 수집 및 전송이 주 기능입니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda 함수 구성이 추가적인 인프라와 운영 오버헤드를 만들어냅니다. A보다 복잡합니다.</p>`,
    disc: [
      { ans: 'A (83%)', txt: 'CloudWatch Logs 지표 필터로 기존 로그에서 직접 지표 생성. 앱 변경 없이 가장 간단.' },
      { ans: 'C (17%)', txt: 'CW 에이전트로 추출 가능하다고 주장. 그러나 에이전트는 지표 필터 기능 없음.' },
    ],
  },
  {
    n: 459,
    en: `<p>A company is using GitHub Actions to run a CI/CD pipeline that accesses resources on AWS. The company has an IAM user that uses a secret key in the pipeline to authenticate to AWS. An existing IAM role with an attached policy grants the required permissions to deploy resources.</p>
<p>The company's security team implements a new requirement that pipelines can no longer use long-lived secret keys. A solutions architect must replace the secret key with a short-lived solution.</p>
<p>Which solution will meet these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 GitHub Actions를 사용하여 AWS 리소스에 접근하는 CI/CD 파이프라인을 운영하고 있습니다. IAM 사용자가 파이프라인에서 시크릿 키를 사용하여 AWS에 인증합니다. 기존 IAM 역할과 정책이 리소스 배포에 필요한 권한을 부여합니다.</p>
<p>보안 팀은 파이프라인이 더 이상 장기 시크릿 키를 사용할 수 없다는 새로운 요구사항을 구현합니다. 솔루션 아키텍트는 시크릿 키를 단기 솔루션으로 교체해야 합니다.</p>
<p>최소한의 운영 오버헤드로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an IAM SAML 2.0 identity provider (IdP) in IAM. Create a new IAM role with the appropriate trust policy that allows the sts:AssumeRole API call. Attach the existing IAM policy to the new IAM role. Update GitHub to use SAML authentication for the pipeline.', ko: 'IAM에서 IAM SAML 2.0 자격 증명 공급자(IdP)를 생성합니다. sts:AssumeRole API 호출을 허용하는 적절한 신뢰 정책으로 새 IAM 역할을 생성합니다. 파이프라인에 SAML 인증을 사용하도록 GitHub를 업데이트합니다.' },
      { k: 'B', en: 'Create an IAM OpenID Connect (OIDC) identity provider (IdP) in IAM. Create a new IAM role with the appropriate trust policy that allows the sts:AssumeRoleWithWebIdentity API call from the GitHub OIDC IdP. Update GitHub to assume the role for the pipeline.', ko: 'IAM에서 IAM OIDC 자격 증명 공급자(IdP)를 생성합니다. GitHub OIDC IdP의 sts:AssumeRoleWithWebIdentity API 호출을 허용하는 신뢰 정책으로 새 IAM 역할을 생성합니다. 파이프라인에 대한 역할을 맡도록 GitHub를 업데이트합니다.' },
      { k: 'C', en: 'Create an Amazon Cognito identity pool. Configure the authentication provider to use GitHub. Create a new IAM role with the appropriate trust policy. Configure the pipeline to use Cognito as its authentication provider.', ko: 'Amazon Cognito 자격 증명 풀을 생성합니다. GitHub를 사용하도록 인증 공급자를 구성합니다. 새 IAM 역할을 생성하고 파이프라인을 Cognito를 인증 공급자로 사용하도록 구성합니다.' },
      { k: 'D', en: 'Create a trust anchor to AWS Private Certificate Authority. Generate a client certificate to use with AWS IAM Roles Anywhere. Create a new IAM role with the appropriate trust policy. Configure the pipeline to use the credential helper tool to assume the new IAM role.', ko: 'AWS Private CA에 대한 신뢰 앵커를 생성합니다. AWS IAM Roles Anywhere에 사용할 클라이언트 인증서를 생성합니다. 새 IAM 역할을 생성하고 자격 증명 도우미 도구를 사용하도록 파이프라인을 구성합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — IAM OIDC IdP + sts:AssumeRoleWithWebIdentity</span></p>
<p>GitHub Actions와 AWS의 공식 통합 방법입니다:</p>
<ul>
<li><strong>GitHub OIDC</strong>: GitHub Actions가 OIDC 토큰을 발급. 각 워크플로 실행마다 단기 토큰 생성</li>
<li><strong>IAM OIDC IdP</strong>: GitHub의 OIDC 토큰을 신뢰하여 IAM 역할로 교환</li>
<li><strong>sts:AssumeRoleWithWebIdentity</strong>: OIDC 토큰을 AWS 임시 자격 증명으로 교환</li>
<li>장기 시크릿 키 완전 제거, 완전 자동화로 운영 오버헤드 없음</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/security/use-iam-roles-to-connect-github-actions-to-actions-in-aws/" target="_blank">AWS 보안 블로그: GitHub Actions + IAM OIDC</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — GitHub는 SAML 2.0 IdP 기능을 지원하지 않습니다. SAML은 깃허브 인증에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon Cognito는 웹/모바일 앱의 사용자 인증용입니다. CI/CD 파이프라인에 Cognito를 사용하는 것은 과도하게 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — IAM Roles Anywhere는 온프레미스 서버나 비 AWS 환경을 위한 솔루션입니다. Private CA 인증서 관리가 필요하여 운영 오버헤드가 큽니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'GitHub Actions + AWS IAM OIDC 통합이 장기 시크릿 없이 단기 자격 증명을 제공하는 최소 오버헤드 표준 방법.' },
    ],
  },
  {
    n: 460,
    en: `<p>A company is running a web-crawling process on a list of target URLs to obtain training documents for machine learning training algorithms. A fleet of Amazon EC2 t2.micro instances pulls the target URLs from an Amazon SQS queue. The instances then write the result of the crawling algorithm as a .csv file to an Amazon Elastic File System (Amazon EFS) volume. The EFS volume is mounted on all instances of the fleet.</p>
<p>A separate system adds the URLs to the SQS queue at infrequent rates. The instances crawl each URL in 10 seconds or less.</p>
<p>Metrics indicate that some instances are idle when no URLs are in the SQS queue. A solutions architect needs to redesign the architecture to optimize costs.</p>
<p>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)</p>`,
    ko: `<p>한 회사가 머신 러닝 훈련 문서를 얻기 위해 대상 URL 목록에서 웹 크롤링 프로세스를 실행하고 있습니다. Amazon EC2 t2.micro 인스턴스 집합이 SQS 대기열에서 URL을 가져와 크롤링 결과를 Amazon EFS 볼륨에 .csv 파일로 씁니다.</p>
<p>URL이 SQS 대기열에 드물게 추가되며, 인스턴스는 각 URL을 10초 이내에 크롤링합니다. 지표는 SQS 대기열에 URL이 없을 때 일부 인스턴스가 유휴 상태임을 나타냅니다.</p>
<p>비용 최적화를 위해 가장 비용 효율적인 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Use m5.8xlarge instances instead of t2.micro instances for the web-crawling process. Reduce the number of instances in the fleet by 50%.', ko: '웹 크롤링 프로세스에 t2.micro 인스턴스 대신 m5.8xlarge 인스턴스를 사용합니다. 플릿의 인스턴스 수를 50% 줄입니다.' },
      { k: 'B', en: 'Convert the web-crawling process into an AWS Lambda function. Configure the Lambda function to pull URLs from the SQS queue.', ko: '웹 크롤링 프로세스를 AWS Lambda 함수로 변환합니다. SQS 대기열에서 URL을 가져오도록 Lambda 함수를 구성합니다.' },
      { k: 'C', en: 'Modify the web-crawling process to store results in Amazon Neptune.', ko: '결과를 Amazon Neptune에 저장하도록 웹 크롤링 프로세스를 수정합니다.' },
      { k: 'D', en: 'Modify the web-crawling process to store results in an Amazon Aurora Serverless MySQL instance.', ko: '결과를 Amazon Aurora Serverless MySQL 인스턴스에 저장하도록 웹 크롤링 프로세스를 수정합니다.' },
      { k: 'E', en: 'Modify the web-crawling process to store results in Amazon S3.', ko: '결과를 Amazon S3에 저장하도록 웹 크롤링 프로세스를 수정합니다.' },
    ],
    answer: ['B', 'E'],
    vote: '100% BE',
    explain: `<p><span class="mark-ok">✅ B — Lambda로 전환</span></p>
<p>드물게 발생하는 URL 처리(10초 이내)는 Lambda의 이벤트 기반 모델에 완벽하게 적합합니다:</p>
<ul>
<li>SQS 이벤트 소스 매핑으로 URL 도착 시 자동 트리거</li>
<li>유휴 시간 0원 — EC2 플릿의 유휴 비용 완전 제거</li>
<li>처리량에 따라 자동 확장</li>
</ul>
<p><span class="mark-ok">✅ E — S3로 결과 저장</span></p>
<p>EFS는 공유 파일 시스템으로 EC2 마운트가 필요합니다. Lambda에서는 EFS를 연결할 수 있지만 S3가 더 간단하고 비용 효율적입니다:</p>
<ul>
<li>Lambda 함수에서 S3에 직접 .csv 파일 업로드</li>
<li>EFS 대비 훨씬 저렴한 스토리지 비용</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 더 큰 인스턴스로 전환해도 유휴 시간 비용 문제는 해결되지 않습니다. 오히려 비용이 증가합니다.</p>
<p><span class="mark-no">❌ C</span> — Neptune은 그래프 데이터베이스로 .csv 결과 저장에 부적합하며 비용이 높습니다.</p>
<p><span class="mark-no">❌ D</span> — Aurora Serverless는 불필요하게 복잡하며 단순 .csv 파일 저장에 DB가 필요하지 않습니다.</p>`,
    disc: [
      { ans: 'BE (100%)', txt: 'Lambda(서버리스 + SQS 트리거)로 유휴 EC2 비용 제거 + S3(저렴한 스토리지)로 EFS 대체.' },
    ],
  },
];