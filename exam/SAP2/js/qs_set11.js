window.QS_SET11 = [
  {
    n: 101,
    en: `A company is running applications on AWS in a multi-account environment. The company's sales team and marketing team use separate AWS accounts in AWS Organizations.<br/><br/>The sales team stores petabytes of data in an Amazon S3 bucket. The marketing team uses Amazon QuickSight for data visualizations. The marketing team needs access to data that the sates team stores in the S3 bucket. The company has encrypted the S3 bucket with an AWS Key Management Service (AWS KMS) key. The marketing team has already created the IAM service role for QuickSight to provide QuickSight access in the marketing AWS account. The company needs a solution that will provide secure access to the data in the S3 bucket across AWS accounts.<br/><br/>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사가 다중 계정 환경의 AWS에서 애플리케이션을 실행하고 있습니다. 회사의 영업팀과 마케팅팀은 AWS Organizations에서 별도의 AWS 계정을 사용합니다. <br/><br/>영업팀은 Amazon S3 버킷에 페타바이트 규모의 데이터를 저장합니다. 마케팅 팀은 데이터 시각화를 위해 Amazon QuickSight를 사용합니다. 마케팅 팀은 영업 팀이 S3 버킷에 저장하는 데이터에 액세스해야 합니다. 회사는 AWS KMS(AWS Key Management Service) 키를 사용하여 S3 버킷을 암호화했습니다. 마케팅 팀은 마케팅 AWS 계정에 QuickSight 액세스를 제공하기 위해 QuickSight에 대한 IAM 서비스 역할을 이미 생성했습니다. 회사에는 AWS 계정 전체에서 S3 버킷의 데이터에 대한 보안 액세스를 제공하는 솔루션이 필요합니다. <br/><br/>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a new S3 bucket in the marketing account. Create an S3 replication rule in the sales account to copy the objects to the new S3 bucket in the marketing account. Update the QuickSight permissions in the marketing account to grant access to the new S3 bucket.`, ko:`마케팅 계정에 새 S3 버킷을 생성합니다. 판매 계정에서 S3 복제 규칙을 생성하여 마케팅 계정의 새 S3 버킷에 객체를 복사합니다. 새 S3 버킷에 대한 액세스 권한을 부여하려면 마케팅 계정의 QuickSight 권한을 업데이트하세요.` },
      { k:'B', en:`Create an SCP to grant access to the S3 bucket to the marketing account. Use AWS Resource Access Manager (AWS RAM) to share the KMS key from the sates account with the marketing account. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.`, ko:`SCP를 생성하여 마케팅 계정에 S3 버킷에 대한 액세스 권한을 부여합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 영업 계정의 KMS 키를 마케팅 계정과 공유합니다. S3 버킷에 대한 액세스 권한을 부여하려면 마케팅 계정의 QuickSight 권한을 업데이트하세요.` },
      { k:'C', en:`Update the S3 bucket policy in the marketing account to grant access to the QuickSight role. Create a KMS grant for the encryption key that is used in the S3 bucket. Grant decrypt access to the QuickSight role. Update the QuickSight permissions in the marketing account to grant access to the S3 bucket.`, ko:`마케팅 계정의 S3 버킷 정책을 업데이트하여 QuickSight 역할에 대한 액세스 권한을 부여합니다. S3 버킷에 사용되는 암호화 키에 대한 KMS 권한을 생성합니다. QuickSight 역할에 암호 해독 액세스 권한을 부여합니다. S3 버킷에 대한 액세스 권한을 부여하려면 마케팅 계정의 QuickSight 권한을 업데이트하세요.` },
      { k:'D', en:`Create an IAM role in the sales account and grant access to the S3 bucket. From the marketing account, assume the IAM role in the sales account to access the S3 bucket. Update the QuickSight rote, to create a trust relationship with the new IAM role in the sales account.`, ko:`판매 계정에 IAM 역할을 생성하고 S3 버킷에 대한 액세스 권한을 부여합니다. 마케팅 계정에서 판매 계정의 IAM 역할을 맡아 S3 버킷에 액세스합니다. QuickSight 역할을 업데이트하여 영업 계정의 새 IAM 역할과 신뢰 관계를 생성합니다.` },
    ],
    answer: ['D'],
    vote: '67% D, 22% C, 9% A',
    explain: `<p><span class="mark-ok">✅ D — 교차 계정 IAM 역할 위임(Assume Role)</span></p>
<p>판매 계정에 IAM 역할을 생성하고 S3 버킷 및 해당 KMS 키에 대한 접근 권한을 부여한 뒤, 마케팅 계정의 QuickSight IAM 서비스 역할이 이 판매 계정 역할을 Assume(위임)하도록 신뢰 정책을 구성합니다.</p>
<ul>
<li>판매 계정의 IAM 역할은 동일 계정 내 S3 버킷과 KMS 키에 자연스럽게 접근하므로 별도의 교차 계정 KMS 정책 없이 동작합니다.</li>
<li>데이터를 복사하거나 복제할 필요가 없어 페타바이트 규모의 중복 저장 비용이 발생하지 않습니다.</li>
<li>QuickSight는 관리형 AWS 서비스로 교차 계정 역할 위임을 기본 지원합니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/quicksight/latest/user/cross-account-access.html" target="_blank">AWS QuickSight 교차 계정 접근 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3 교차 계정 복제를 사용하면 페타바이트 규모의 데이터를 마케팅 계정에 중복 저장하게 되어 스토리지 비용이 두 배가 됩니다. 복제 지연으로 인한 데이터 일관성 문제도 발생하며 운영 오버헤드가 가장 높습니다.</p>
<p><span class="mark-no">❌ B</span> — SCP(Service Control Policy)는 계정이 수행할 수 있는 최대 권한 범위를 제한하는 정책으로, 리소스에 접근을 허용하는 수단이 아닙니다. AWS RAM은 KMS 키를 공유할 수 없으며(KMS 키는 키 정책으로 교차 계정 접근을 제어), S3 버킷 접근 권한 자체는 별도로 처리해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — 옵션 C는 "마케팅 계정의 S3 버킷 정책을 업데이트"한다고 명시하지만, S3 버킷은 판매 계정에 존재합니다. 버킷 정책은 버킷이 위치한 판매 계정에서만 수정 가능합니다. 계정을 잘못 기술한 오류가 있어 실제로 작동하지 않습니다.</p>`,
    disc: [{ ans:'D', txt:'교차 계정 S3+KMS 접근의 핵심은 버킷이 위치한 계정(판매)에서 IAM 역할을 생성하고, 소비 계정(마케팅)의 QuickSight 역할이 이를 Assume하는 것입니다. 같은 계정 내의 역할은 동일 계정의 KMS 키에도 자동으로 접근 가능하여 별도의 KMS 교차 계정 설정이 불필요합니다.' }, { ans:'C', txt:'일부 의견에서는 옵션 C가 "마케팅 계정"이라고 표기된 것이 "판매 계정"의 오타라면 C도 유효한 접근이라고 봅니다. 그러나 문제 기술상 오류가 있으므로 D가 명확한 정답입니다.' }]
  },
  {
    n: 102,
    en: `A company is planning to migrate its business-critical applications from an on-premises data center to AWS. The company has an on-premises installation of a Microsoft SQL Server Always On cluster. The company wants to migrate to an AWS managed database service. A solutions architect must design a heterogeneous database migration on AWS.<br/><br/>Which solution will meet these requirements?`,
    ko: `한 회사가 비즈니스에 중요한 애플리케이션을 온프레미스 데이터 센터에서 AWS로 마이그레이션할 계획입니다. 회사에는 Microsoft SQL Server Always On 클러스터가 온프레미스에 설치되어 있습니다. 회사는 AWS 관리형 데이터베이스 서비스로 마이그레이션하려고 합니다. 솔루션 아키텍트는 AWS에서 이기종 데이터베이스 마이그레이션을 설계해야 합니다. <br/><br/>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Migrate the SQL Server databases to Amazon RDS for MySQL by using backup and restore utilities.`, ko:`백업 및 복원 유틸리티를 사용하여 SQL Server 데이터베이스를 MySQL용 Amazon RDS로 마이그레이션합니다.` },
      { k:'B', en:`Use an AWS Snowball Edge Storage Optimized device to transfer data to Amazon S3. Set up Amazon RDS for MySQL. Use S3 integration with SQL Server features, such as BULK INSERT.`, ko:`AWS Snowball Edge Storage Optimized 디바이스를 사용하여 Amazon S3로 데이터를 전송합니다. MySQL용 Amazon RDS를 설정합니다. BULK INSERT와 같은 SQL Server 기능과 S3 통합을 사용합니다.` },
      { k:'C', en:`Use the AWS Schema Conversion Tool to translate the database schema to Amazon RDS for MySQL. Then use AWS Database Migration Service (AWS DMS) to migrate the data from on-premises databases to Amazon RDS.`, ko:`AWS Schema Conversion Tool을 사용하여 데이터베이스 스키마를 MySQL용 Amazon RDS로 변환합니다. 그런 다음 AWS Database Migration Service(AWS DMS)를 사용하여 온프레미스 데이터베이스의 데이터를 Amazon RDS로 마이그레이션합니다.` },
      { k:'D', en:`Use AWS DataSync to migrate data over the network between on-premises storage and Amazon S3. Set up Amazon RDS for MySQL. Use S3 integration with SQL Server features, such as BULK INSERT.`, ko:`AWS DataSync를 사용하여 온프레미스 스토리지와 Amazon S3 간에 네트워크를 통해 데이터를 마이그레이션합니다. MySQL용 Amazon RDS를 설정합니다. BULK INSERT와 같은 SQL Server 기능과 S3 통합을 사용합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — AWS SCT + AWS DMS 이기종 데이터베이스 마이그레이션</span></p>
<p>이기종(Heterogeneous) 마이그레이션이란 소스와 대상의 데이터베이스 엔진이 다른 경우(SQL Server → MySQL)를 말하며, AWS에서는 2단계 접근을 권장합니다.</p>
<ol>
<li><strong>AWS Schema Conversion Tool(SCT)</strong>: SQL Server의 테이블 정의, 저장 프로시저, 뷰, 함수 등 스키마를 MySQL 호환 형식으로 자동 변환합니다. 데이터 타입 매핑 및 코드 변환 리포트를 제공하여 수동 작업을 최소화합니다.</li>
<li><strong>AWS Database Migration Service(DMS)</strong>: 스키마 변환 후 온프레미스 SQL Server에서 Amazon RDS for MySQL로 데이터를 마이그레이션합니다. 일회성 전체 로드(Full Load) 또는 지속적인 변경 데이터 복제(CDC) 모두 지원합니다.</li>
</ol>
<p><a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.html" target="_blank">AWS DMS 공식 문서</a> | <a href="https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html" target="_blank">AWS SCT 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SQL Server의 백업 파일(.bak)은 SQL Server 전용 포맷으로, MySQL에서 직접 복원할 수 없습니다. 백업/복원 방식은 동일 엔진 간(SQL Server → RDS for SQL Server) 동종 마이그레이션에서만 유효합니다.</p>
<p><span class="mark-no">❌ B</span> — Snowball Edge는 대용량 파일/오브젝트 데이터 전송 도구이며, 관계형 데이터베이스 마이그레이션에 적합하지 않습니다. BULK INSERT는 SQL Server 전용 T-SQL 명령으로 RDS for MySQL에서 사용 불가합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS DataSync는 파일 시스템(NFS, SMB) 및 오브젝트 스토리지 간 데이터 동기화 도구입니다. 데이터베이스 레코드 마이그레이션을 위한 도구가 아니며, B와 동일하게 BULK INSERT는 MySQL에서 사용 불가합니다.</p>`,
    disc: [{ ans:'C', txt:'이기종 DB 마이그레이션(SQL Server → MySQL)의 표준 AWS 절차는 1단계 SCT로 스키마 변환, 2단계 DMS로 데이터 이동입니다. Always On 클러스터는 DMS의 CDC(Change Data Capture) 기능을 활용하면 최소 다운타임으로 마이그레이션 가능합니다.' }]
  },
  {
    n: 103,
    en: `A publishing company's design team updates the icons and other static assets that an ecommerce web application uses. The company serves the icons and assets from an Amazon S3 bucket that is hosted in the company's production account. The company also uses a development account that members of the design team can access.<br/><br/>After the design team tests the static assets in the development account, the design team needs to load the assets into the S3 bucket in the production account. A solutions architect must provide the design team with access to the production account without exposing other parts of the web application to the risk of unwanted changes.<br/><br/>Which combination of steps will meet these requirements? (Choose three.)`,
    ko: `출판사의 디자인 팀은 전자상거래 웹 애플리케이션에서 사용하는 아이콘과 기타 정적 자산을 업데이트합니다. 회사는 회사의 프로덕션 계정에서 호스팅되는 Amazon S3 버킷의 아이콘과 자산을 제공합니다. 회사에서는 디자인 팀 구성원이 액세스할 수 있는 개발 계정도 사용합니다. <br/><br/>디자인 팀이 개발 계정의 정적 자산을 테스트한 후 디자인 팀은 프로덕션 계정의 S3 버킷에 자산을 로드해야 합니다. 솔루션 설계자는 원치 않는 변경 위험에 웹 애플리케이션의 다른 부분을 노출시키지 않고 디자인 팀에게 프로덕션 계정에 대한 액세스 권한을 제공해야 합니다. <br/><br/>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`In the production account, create a new IAM policy that allows read and write access to the S3 bucket.`, ko:`프로덕션 계정에서 S3 버킷에 대한 읽기 및 쓰기 액세스를 허용하는 새로운 IAM 정책을 생성하십시오.` },
      { k:'B', en:`In the development account, create a new IAM policy that allows read and write access to the S3 bucket.`, ko:`개발 계정에서 S3 버킷에 대한 읽기 및 쓰기 액세스를 허용하는 새로운 IAM 정책을 생성합니다.` },
      { k:'C', en:`In the production account, create a role Attach the new policy to the role. Define the development account as a trusted entity.`, ko:`프로덕션 계정에서 역할을 생성하고 새 정책을 역할에 연결합니다. 개발 계정을 신뢰할 수 있는 엔터티로 정의합니다.` },
      { k:'D', en:`In the development account, create a role. Attach the new policy to the role Define the production account as a trusted entity.`, ko:`개발 계정에서 역할을 생성합니다. 역할에 새 정책을 연결합니다. 프로덕션 계정을 신뢰할 수 있는 엔터티로 정의합니다.` },
      { k:'E', en:`In the development account, create a group that contains all the IAM users of the design team Attach a different IAM policy to the group to allow the sts:AssumeRole action on the role In the production account.`, ko:`개발 계정에서 디자인 팀의 모든 IAM 사용자를 포함하는 그룹을 생성합니다. 프로덕션 계정의 역할에 대한 sts:AssumeRole 작업을 허용하도록 그룹에 다른 IAM 정책을 연결합니다.` },
      { k:'F', en:`In the development account, create a group that contains all the IAM users of the design team Attach a different IAM policy to the group to allow the sts:AssumeRole action on the role in the development account.`, ko:`개발 계정에서 디자인 팀의 모든 IAM 사용자를 포함하는 그룹을 생성합니다. 개발 계정의 역할에 대해 sts:AssumeRole 작업을 허용하도록 그룹에 다른 IAM 정책을 연결합니다.` },
    ],
    answer: ['A', 'C', 'E'],
    vote: '95% ACE, 5% ADE',
    explain: `<p><span class="mark-ok">✅ A, C, E — 교차 계정 IAM 역할 위임 3단계 구성</span></p>
<p>AWS 교차 계정 접근의 표준 패턴은 다음 3단계로 구성됩니다.</p>
<ol>
<li><strong>A — 프로덕션 계정에 IAM 정책 생성</strong>: S3 버킷에 대한 읽기/쓰기(PutObject, GetObject 등) 권한을 정의합니다. 정책은 특정 S3 버킷 ARN으로 범위를 제한하여 다른 프로덕션 리소스를 보호합니다.</li>
<li><strong>C — 프로덕션 계정에 IAM 역할 생성</strong>: 위 정책을 역할에 연결하고, 신뢰 정책(Trust Policy)에 개발 계정 ID를 지정합니다. 개발 계정의 자격증명이 이 역할을 Assume할 수 있습니다.</li>
<li><strong>E — 개발 계정에서 그룹에 AssumeRole 정책 부여</strong>: 디자인 팀 IAM 사용자를 그룹에 추가하고, 그룹에 <code>sts:AssumeRole</code> 액션을 허용하는 정책(프로덕션 역할 ARN 지정)을 연결합니다.</li>
</ol>
<p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html" target="_blank">AWS 교차 계정 역할 튜토리얼</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 개발 계정에서 생성된 IAM 정책은 개발 계정의 리소스에만 적용됩니다. 다른 계정(프로덕션)의 S3 버킷에 대한 접근 권한을 개발 계정 정책만으로 부여할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 역할의 신뢰 정책은 "누가 이 역할을 Assume할 수 있는가"를 정의합니다. 개발 계정에 역할을 만들고 프로덕션 계정을 신뢰 엔티티로 설정하는 것은 반대 방향의 설정입니다. 프로덕션 S3 버킷에 접근하려면 역할이 프로덕션 계정에 있어야 합니다.</p>
<p><span class="mark-no">❌ F</span> — 개발 계정 역할을 Assume하는 것은 개발 계정 내 리소스에만 접근할 수 있게 합니다. 프로덕션 계정의 S3 버킷에 접근하려면 <em>프로덕션 계정의 역할</em>을 Assume해야 합니다.</p>`,
    disc: [{ ans:'A, C, E', txt:'표준 교차 계정 접근 패턴: ① 리소스 계정(프로덕션)에 정책+역할 생성, 개발 계정을 신뢰 → ② 접근 계정(개발)에서 그룹에 sts:AssumeRole 허용. 이 패턴은 최소 권한 원칙을 준수하며 프로덕션의 S3 버킷만 접근 가능하게 제한합니다.' }]
  },
  {
    n: 104,
    en: `A company developed a pilot application by using AWS Elastic Beanstalk and Java. To save costs during development, the company's development team deployed the application into a single-instance environment. Recent tests indicate that the application consumes more CPU than expected. CPU utilization is regularly greater than 85%, which causes some performance bottlenecks.<br/><br/>A solutions architect must mitigate the performance issues before the company launches the application to production.<br/><br/>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사에서 AWS Elastic Beanstalk 및 Java를 사용하여 파일럿 애플리케이션을 개발했습니다. 개발 중 비용을 절감하기 위해 회사의 개발 팀은 애플리케이션을 단일 인스턴스 환경에 배포했습니다. 최근 테스트에 따르면 애플리케이션이 예상보다 더 많은 CPU를 소비하는 것으로 나타났습니다. CPU 사용률은 정기적으로 85%를 초과하므로 일부 성능 병목 현상이 발생합니다. <br/><br/>솔루션 설계자는 회사가 애플리케이션을 프로덕션에 출시하기 전에 성능 문제를 완화해야 합니다. <br/><br/>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a new Elastic Beanstalk application. Select a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the maximum CPU utilization is over 85% for 5 minutes.`, ko:`새로운 Elastic Beanstalk 애플리케이션을 생성합니다. 로드 밸런싱된 환경 유형을 선택합니다. 모든 가용 영역을 선택합니다. 최대 CPU 사용률이 5분 동안 85%를 초과하는 경우 실행되는 확장 규칙을 추가합니다.` },
      { k:'B', en:`Create a second Elastic Beanstalk environment. Apply the traffic-splitting deployment policy. Specify a percentage of incoming traffic to direct to the new environment in the average CPU utilization is over 85% for 5 minutes.`, ko:`두 번째 Elastic Beanstalk 환경을 생성합니다. 트래픽 분할 배포 정책을 적용합니다. 평균 CPU 사용률이 5분 동안 85%를 초과하는 경우 새 환경으로 전달할 수신 트래픽의 비율을 지정합니다.` },
      { k:'C', en:`Modify the existing environment's capacity configuration to use a load-balanced environment type. Select all Availability Zones. Add a scale-out rule that will run if the average CPU utilization is over 85% for 5 minutes.`, ko:`로드 밸런싱된 환경 유형을 사용하도록 기존 환경의 용량 구성을 수정합니다. 모든 가용 영역을 선택합니다. 평균 CPU 사용률이 5분 동안 85%를 초과하는 경우 실행되는 확장 규칙을 추가합니다.` },
      { k:'D', en:`Select the Rebuild environment action with the load balancing option. Select an Availability Zones. Add a scale-out rule that will run if the sum CPU utilization is over 85% for 5 minutes.`, ko:`로드 밸런싱 옵션을 사용하여 환경 재구축 작업을 선택합니다. 가용성 영역을 선택합니다. 총 CPU 사용률이 5분 동안 85%를 초과하는 경우 실행되는 확장 규칙을 추가합니다.` },
    ],
    answer: ['C'],
    vote: '95% C, 5% A',
    explain: `<p><span class="mark-ok">✅ C — 기존 환경의 용량 구성 변경</span></p>
<p>AWS Elastic Beanstalk는 환경 유형을 <strong>단일 인스턴스(Single-instance)</strong>에서 <strong>로드 밸런싱+Auto Scaling</strong>으로 변경하는 것을 콘솔의 용량(Capacity) 구성 수정만으로 지원합니다. 새 애플리케이션이나 환경을 생성할 필요가 없습니다.</p>
<ul>
<li>기존 환경 → 구성(Configuration) → 용량(Capacity) → 환경 유형: Load balanced 선택</li>
<li>모든 가용 영역 선택으로 고가용성 확보</li>
<li>Auto Scaling 트리거: 평균 CPU > 85% (5분) → 스케일 아웃</li>
</ul>
<p>이 방법은 기존 애플리케이션 버전과 환경 설정을 유지하면서 최소 운영 오버헤드로 성능 문제를 해결합니다.</p>
<p><a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-types.html" target="_blank">Elastic Beanstalk 환경 유형 변경 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 새로운 Elastic Beanstalk 애플리케이션을 생성하면 애플리케이션 코드 재배포, 환경 변수 재설정, 도메인 변경 등 추가 작업이 필요합니다. "LEAST operational overhead" 조건에 위배됩니다.</p>
<p><span class="mark-no">❌ B</span> — 트래픽 분할(Traffic-splitting) 배포 정책은 새 버전 배포 시 카나리아 방식으로 트래픽을 분배하는 기능입니다. CPU 과부하 문제를 해결하는 Auto Scaling 설정과 무관하며, 두 번째 환경 생성으로 운영 복잡성이 증가합니다.</p>
<p><span class="mark-no">❌ D</span> — "환경 재구축(Rebuild environment)"은 환경을 완전히 삭제 후 재생성하는 파괴적 작업입니다. 또한 "sum CPU(총 CPU)"는 Auto Scaling 트리거로 부적합합니다. 인스턴스 수에 따라 총합이 달라지므로 "average CPU(평균 CPU)"가 올바른 스케일링 지표입니다.</p>`,
    disc: [{ ans:'C', txt:'Elastic Beanstalk의 환경 유형은 환경을 삭제하지 않고도 단일 인스턴스→로드밸런싱으로 변경 가능합니다. 이 기능은 "개발 시 단일 인스턴스로 비용 절감, 프로덕션 전환 시 로드밸런싱으로 전환"하는 시나리오를 위해 설계되었습니다.' }]
  },
  {
    n: 105,
    en: `A finance company is running its business-critical application on current-generation Linux EC2 instances. The application includes a self-managed MySQL database performing heavy I/O operations. The application is working fine to handle a moderate amount of traffic during the month. However, it slows down during the final three days of each month due to month-end reporting, even though the company is using Elastic Load Balancers and Auto Scaling within its infrastructure to meet the increased demand.<br/><br/>Which of the following actions would allow the database to handle the month-end load with the LEAST impact on performance?`,
    ko: `한 금융 회사가 현재 세대의 Linux EC2 인스턴스에서 비즈니스 크리티컬 애플리케이션을 실행하고 있습니다. 이 애플리케이션에는 과도한 I/O 작업을 수행하는 자체 관리형 MySQL 데이터베이스가 포함되어 있습니다. 해당 애플리케이션은 해당 달 동안 적당한 양의 트래픽을 처리하기 위해 잘 작동하고 있습니다. 그러나 회사가 증가된 수요를 충족하기 위해 인프라 내에서 Elastic Load Balancer 및 Auto Scaling을 사용하고 있음에도 불구하고 월말 보고로 인해 매월 마지막 3일 동안 속도가 느려집니다. <br/><br/>다음 중 데이터베이스가 성능에 가장 적은 영향을 미치면서 월말 로드를 처리할 수 있도록 하는 작업은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Pre-warming Elastic Load Balancers, using a bigger instance type, changing all Amazon EBS volumes to GP2 volumes.`, ko:`더 큰 인스턴스 유형을 사용하여 Elastic Load Balancer를 예열하고 모든 Amazon EBS 볼륨을 GP2 볼륨으로 변경합니다.` },
      { k:'B', en:`Performing a one-time migration of the database cluster to Amazon RDS, and creating several additional read replicas to handle the load during end of month.`, ko:`데이터베이스 클러스터를 Amazon RDS로 일회성 마이그레이션을 수행하고, 월말 동안 로드를 처리하기 위해 여러 개의 추가 읽기 전용 복제본을 생성합니다.` },
      { k:'C', en:`Using Amazon CloudWatch with AWS Lambda to change the type, size, or IOPS of Amazon EBS volumes in the cluster based on a specific CloudWatch metric.`, ko:`AWS Lambda와 함께 Amazon CloudWatch를 사용하여 특정 CloudWatch 지표를 기반으로 클러스터에 있는 Amazon EBS 볼륨의 유형, 크기 또는 IOPS를 변경합니다.` },
      { k:'D', en:`Replacing all existing Amazon EBS volumes with new PIOPS volumes that have the maximum available storage size and I/O per second by taking snapshots before the end of the month and reverting back afterwards.`, ko:`월말 전에 스냅샷을 찍고 나중에 되돌려 기존의 모든 Amazon EBS 볼륨을 사용 가능한 최대 스토리지 크기와 초당 I/O를 갖춘 새로운 PIOPS 볼륨으로 교체합니다.` },
    ],
    answer: ['B'],
    vote: '93% B, 7% D',
    explain: `<p><span class="mark-ok">✅ B — Amazon RDS로 마이그레이션 + 읽기 복제본(Read Replicas)</span></p>
<p>월말 보고 작업은 대부분 SELECT 쿼리 집중적인 <strong>읽기 부하(Read-heavy workload)</strong>입니다. Amazon RDS 읽기 복제본은 이 패턴에 정확히 대응합니다.</p>
<ul>
<li><strong>RDS 읽기 복제본</strong>: 기본 RDS 인스턴스의 데이터를 비동기 복제하여 읽기 쿼리를 분산 처리합니다. 월말 보고 직전에 복제본을 추가하고, 이후 삭제하여 비용 최적화가 가능합니다.</li>
<li><strong>관리형 서비스 이점</strong>: EC2 자체 관리형 MySQL과 달리 RDS는 자동 백업, 패치, 모니터링, 다중 AZ 장애 조치를 관리하여 운영 부담을 줄입니다.</li>
<li>ELB + Auto Scaling은 웹 계층 부하에 효과적이지만, 데이터베이스 계층의 I/O 병목은 별도 해결이 필요합니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html" target="_blank">Amazon RDS 읽기 복제본 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ELB 예열과 인스턴스 타입 변경은 웹/앱 계층의 트래픽 처리를 돕지만, 데이터베이스 I/O 병목을 직접 해결하지 않습니다. GP2 볼륨 변경도 실행 중인 DB 인스턴스에 대한 작업이 필요하며 근본적인 읽기 부하 분산 효과가 없습니다.</p>
<p><span class="mark-no">❌ C</span> — EBS 볼륨의 유형/크기/IOPS 변경은 온라인 상태에서 가능하지만, 변경 완료까지 수 시간이 소요되고 성능이 일시적으로 저하될 수 있습니다. 또한 IOPS 증가만으로는 쿼리 병렬 처리 능력이 향상되지 않아 근본적인 해결책이 되지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — 최대 PIOPS 볼륨은 매우 고비용이며, 매달 볼륨 교체와 스냅샷 복원을 반복하는 것은 운영 오버헤드가 극도로 높습니다. 데이터베이스 중지/재시작 과정에서 성능 영향이 발생하고, 스냅샷 복원 시 데이터 손실 위험도 있습니다.</p>`,
    disc: [{ ans:'B', txt:'월말 보고는 읽기 집중 워크로드입니다. RDS 읽기 복제본을 월말 전에 추가로 프로비저닝하고 애플리케이션의 읽기 엔드포인트를 복제본으로 향하게 하면 기본 DB의 부하를 크게 줄일 수 있습니다. 자체 관리형 MySQL에서 RDS로의 마이그레이션은 관리 오버헤드를 줄이는 장기적 이점도 제공합니다.' }]
  },
  {
    n: 106,
    en: `A company runs a Java application that has complex dependencies on VMs that are in the company's data center. The application is stable. but the company wants to modernize the technology stack. The company wants to migrate the application to AWS and minimize the administrative overhead to maintain the servers.<br/><br/>Which solution will meet these requirements with the LEAST code changes?`,
    ko: `회사는 회사 데이터 센터에 있는 VM에 대해 복잡한 종속성을 갖는 Java 애플리케이션을 실행합니다. 응용 프로그램이 안정적입니다. 하지만 회사는 기술 스택을 현대화하고 싶어합니다. 회사는 애플리케이션을 AWS로 마이그레이션하고 서버 유지 관리에 드는 관리 오버헤드를 최소화하려고 합니다. <br/><br/>최소한의 코드 변경으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Migrate the application to Amazon Elastic Container Service (Amazon ECS) on AWS Fargate by using AWS App2Container. Store container images in Amazon Elastic Container Registry (Amazon ECR). Grant the ECS task execution role permission to access the ECR image repository. Configure Amazon ECS to use an Application Load Balancer (ALB). Use the ALB to interact with the application.`, ko:`AWS App2Container를 사용하여 애플리케이션을 AWS Fargate의 Amazon Elastic Container Service(Amazon ECS)로 마이그레이션합니다. 컨테이너 이미지를 Amazon Elastic Container Registry(Amazon ECR)에 저장합니다. ECS 작업 실행 역할에 ECR 이미지 리포지토리에 액세스할 수 있는 권한을 부여합니다. Amazon ECS를 구성하여 Application Load Balancer(ALB)를 사용합니다. ALB를 사용하여 애플리케이션과 상호 작용합니다.` },
      { k:'B', en:`Migrate the application code to a container that runs in AWS Lambda. Build an Amazon API Gateway REST API with Lambda integration. Use API Gateway to interact with the application.`, ko:`애플리케이션 코드를 AWS Lambda에서 실행되는 컨테이너로 마이그레이션합니다. Lambda 통합을 통해 Amazon API Gateway REST API를 구축하세요. API 게이트웨이를 사용하여 애플리케이션과 상호 작용합니다.` },
      { k:'C', en:`Migrate the application to Amazon Elastic Kubernetes Service (Amazon EKS) on EKS managed node groups by using AWS App2Container. Store container images in Amazon Elastic Container Registry (Amazon ECR). Give the EKS nodes permission to access the ECR image repository. Use Amazon API Gateway to interact with the application.`, ko:`AWS App2Container를 사용하여 EKS 관리형 노드 그룹의 Amazon Elastic Kubernetes Service(Amazon EKS)로 애플리케이션을 마이그레이션합니다. Amazon Elastic Container Registry(Amazon ECR)에 컨테이너 이미지를 저장합니다. ECR 이미지 저장소에 액세스할 수 있는 권한을 EKS 노드에 부여하십시오. Amazon API Gateway를 사용하여 애플리케이션과 상호 작용합니다.` },
      { k:'D', en:`Migrate the application code to a container that runs in AWS Lambda. Configure Lambda to use an Application Load Balancer (ALB). Use the ALB to interact with the application.`, ko:`애플리케이션 코드를 AWS Lambda에서 실행되는 컨테이너로 마이그레이션합니다. Application Load Balancer(ALB)를 사용하도록 Lambda를 구성합니다. ALB를 사용하여 애플리케이션과 상호작용합니다.` },
    ],
    answer: ['A'],
    vote: '92% A, 8% B',
    explain: `<p><span class="mark-ok">✅ A — AWS App2Container + Amazon ECS on Fargate</span></p>
<p><strong>AWS App2Container(A2C)</strong>는 VM에서 실행 중인 Java/.NET 애플리케이션을 분석하여 <strong>코드 변경 없이</strong> 컨테이너 이미지로 자동 변환하는 CLI 도구입니다.</p>
<ul>
<li><strong>코드 변경 최소화</strong>: A2C가 실행 중인 Java 프로세스의 의존성과 런타임 환경을 자동 감지하여 Dockerfile 및 ECS 배포 아티팩트를 생성합니다.</li>
<li><strong>AWS Fargate</strong>: 서버리스 컨테이너 실행 환경으로 EC2 워커 노드 관리가 불필요하여 관리 오버헤드를 최소화합니다.</li>
<li><strong>ECR + ALB</strong>: 이미지를 ECR에 저장하고 ALB를 통해 트래픽을 처리하는 표준 ECS Fargate 아키텍처입니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/app2container/latest/UserGuide/what-is-a2c.html" target="_blank">AWS App2Container 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Lambda 컨테이너는 최대 실행 시간 15분 제한이 있고, VM에서 오래 실행되는 Java 애플리케이션(복잡한 의존성, 장시간 실행 프로세스)에는 적합하지 않습니다. Lambda 실행 모델에 맞게 핸들러 함수 형식으로 코드를 재작성해야 하므로 코드 변경이 상당합니다.</p>
<p><span class="mark-no">❌ C</span> — EKS 관리형 노드 그룹은 A2C를 통해 컨테이너화할 수 있지만, Kubernetes 클러스터 관리, 노드 그룹 업그레이드, 네트워킹 설정 등 Fargate 대비 운영 오버헤드가 높습니다. "관리 오버헤드 최소화" 조건에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — B와 동일한 Lambda 실행 모델의 제약이 있습니다. VM 기반 Java 애플리케이션을 코드 변경 없이 Lambda로 이전하는 것은 현실적으로 불가능합니다.</p>`,
    disc: [{ ans:'A', txt:'App2Container는 "Lift-and-Shift to Container"의 핵심 도구입니다. 온프레미스 VM에서 실행 중인 Java 앱을 분석하고 컨테이너화하여 ECS Fargate에 배포하면 코드 수정 없이 서버 관리 부담을 제거할 수 있습니다.' }]
  },
  {
    n: 107,
    en: `A company has an asynchronous HTTP application that is hosted as an AWS Lambda function. A public Amazon API Gateway endpoint invokes the Lambda function. The Lambda function and the API Gateway endpoint reside in the us-east-1 Region. A solutions architect needs to redesign the application to support failover to another AWS Region.<br/><br/>Which solution will meet these requirements?`,
    ko: `회사에는 AWS Lambda 함수로 호스팅되는 비동기 HTTP 애플리케이션이 있습니다. 퍼블릭 Amazon API Gateway 엔드포인트는 Lambda 함수를 호출합니다. Lambda 함수와 API 게이트웨이 엔드포인트는 us-east-1 리전에 있습니다. 솔루션 아키텍트는 다른 AWS 리전으로의 장애 조치를 지원하도록 애플리케이션을 재설계해야 합니다. <br/><br/>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an API Gateway endpoint in the us-west-2 Region to direct traffic to the Lambda function in us-east-1. Configure Amazon Route 53 to use a failover routing policy to route traffic for the two API Gateway endpoints.`, ko:`us-west-2 지역에 API 게이트웨이 엔드포인트를 생성하여 us-east-1의 Lambda 함수로 트래픽을 보냅니다. 장애 조치 라우팅 정책을 사용하여 두 개의 API 게이트웨이 엔드포인트에 대한 트래픽을 라우팅하도록 Amazon Route 53을 구성합니다.` },
      { k:'B', en:`Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure API Gateway to direct traffic to the SQS queue instead of to the Lambda function. Configure the Lambda function to pull messages from the queue for processing.`, ko:`Amazon Simple Queue Service(Amazon SQS) 대기열을 생성합니다. Lambda 함수 대신 SQS 대기열로 트래픽을 전달하도록 API 게이트웨이를 구성합니다. 처리를 위해 대기열에서 메시지를 가져오도록 Lambda 함수를 구성합니다.` },
      { k:'C', en:`Deploy the Lambda function to the us-west-2 Region. Create an API Gateway endpoint in us-west-2 10 direct traffic to the Lambda function in us-west-2. Configure AWS Global Accelerator and an Application Load Balancer to manage traffic across the two API Gateway endpoints.`, ko:`us-west-2 지역에 Lambda 함수를 배포합니다. us-west-2에서 API 게이트웨이 엔드포인트를 생성합니다. us-west-2의 Lambda 함수에 대한 직접 트래픽입니다. 두 개의 API 게이트웨이 엔드포인트에서 트래픽을 관리하도록 AWS Global Accelerator와 Application Load Balancer를 구성합니다.` },
      { k:'D', en:`Deploy the Lambda function and an API Gateway endpoint to the us-west-2 Region. Configure Amazon Route 53 to use a failover routing policy to route traffic for the two API Gateway endpoints.`, ko:`us-west-2 지역에 Lambda 함수와 API 게이트웨이 엔드포인트를 배포합니다. 장애 조치 라우팅 정책을 사용하여 두 개의 API 게이트웨이 엔드포인트에 대한 트래픽을 라우팅하도록 Amazon Route 53을 구성합니다.` },
    ],
    answer: ['D'],
    vote: '94% D, 6% A',
    explain: `<p><span class="mark-ok">✅ D — 보조 리전에 Lambda + API GW 완전 배포 + Route 53 장애 조치</span></p>
<p>진정한 리전 장애 조치(Regional Failover)를 구현하려면 모든 컴포넌트가 보조 리전에 독립적으로 존재해야 합니다.</p>
<ul>
<li><strong>Lambda 함수 us-west-2 배포</strong>: us-east-1이 완전히 다운되어도 us-west-2의 Lambda가 독립적으로 요청을 처리합니다.</li>
<li><strong>API Gateway 엔드포인트 us-west-2 생성</strong>: 사용자 정의 도메인 이름(Custom Domain Name)을 각 리전 API GW에 연결합니다.</li>
<li><strong>Route 53 장애 조치 라우팅</strong>: Primary(us-east-1 API GW), Secondary(us-west-2 API GW)에 헬스 체크를 구성하여 Primary 장애 시 자동으로 Secondary로 DNS 전환합니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/disaster-recovery-resiliency.html" target="_blank">API Gateway 재해 복구 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — us-west-2의 API GW가 us-east-1의 Lambda를 호출하도록 구성하면, us-east-1 리전 장애 시 Lambda도 함께 사용 불가능합니다. Secondary 리전의 API GW가 Primary 리전의 Lambda를 의존하는 구조는 진정한 장애 조치가 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — SQS 큐를 API GW 뒤에 놓는 것은 비동기 처리 패턴을 강화하지만, SQS 자체가 리전별 서비스이므로 us-east-1 SQS 장애 시 여전히 서비스 중단이 발생합니다. 또한 이 방식은 장애 조치 아키텍처가 아니라 단순히 처리 방식을 변경하는 것입니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Global Accelerator는 TCP/UDP 레벨에서 작동하며 ALB, EC2, Elastic IP를 엔드포인트로 지원합니다. API Gateway HTTP 엔드포인트를 Global Accelerator의 직접 엔드포인트로 사용하는 것은 지원되지 않으며, ALB와 API GW 조합은 불필요한 복잡성을 추가합니다.</p>`,
    disc: [{ ans:'D', txt:'API Gateway 리전 장애 조치의 핵심: API GW 엔드포인트 타입을 "Regional"로 설정하고, Route 53 헬스 체크를 각 리전 엔드포인트에 연결합니다. Primary 리전 헬스 체크 실패 시 Route 53이 자동으로 DNS를 Secondary로 전환합니다. Lambda와 API GW 모두 보조 리전에 배포해야 완전한 장애 조치가 가능합니다.' }]
  },
  {
    n: 108,
    en: `A retail company has structured its AWS accounts to be part of an organization in AWS Organizations. The company has set up consolidated billing and has mapped its departments to the following OUs: Finance, Sales, Human Resources (HR), Marketing, and Operations. Each OU has multiple AWS accounts, one for each environment within a department. These environments are development, test, pre-production, and production.<br/><br/>The HR department is releasing a new system that will launch in 3 months. In preparation, the HR department has purchased several Reserved Instances (RIs) in its production AWS account. The HR department will install the new application on this account. The HR department wants to make sure that other departments cannot share the RI discounts.<br/><br/>Which solution will meet these requirements?`,
    ko: `한 소매 회사가 AWS 계정을 AWS Organizations 조직의 일부로 구성했습니다. 회사는 통합 청구를 설정하고 부서를 재무, 영업, 인사(HR), 마케팅 및 운영 OU에 매핑했습니다. 각 OU에는 부서 내 환경마다 하나씩 여러 개의 AWS 계정이 있습니다. 이러한 환경은 개발, 테스트, 사전 프로덕션 및 프로덕션입니다. <br/><br/>HR 부서에서는 3개월 후에 출시될 새로운 시스템을 출시할 예정입니다. 준비 과정에서 HR 부서는 프로덕션 AWS 계정에서 여러 예약 인스턴스(RI)를 구입했습니다. HR 부서에서는 이 계정에 새 애플리케이션을 설치합니다. HR 부서에서는 다른 부서가 RI 할인을 공유할 수 없도록 하려고 합니다. <br/><br/>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`In the AWS Billing and Cost Management console for the HR department's production account turn off RI sharing.`, ko:`HR 부서 프로덕션 계정의 AWS Billing and Cost Management 콘솔에서 RI 공유를 끕니다.` },
      { k:'B', en:`Remove the HR department's production AWS account from the organization. Add the account to the consolidating billing configuration only.`, ko:`조직에서 HR 부서의 프로덕션 AWS 계정을 제거합니다. 통합 청구 구성에만 계정을 추가합니다.` },
      { k:'C', en:`In the AWS Billing and Cost Management console. use the organization's management account to turn off RI Sharing for the HR departments production AWS account.`, ko:`AWS Billing and Cost Management 콘솔에서 조직의 관리 계정을 사용하여 HR 부서 프로덕션 AWS 계정에 대한 RI 공유를 끕니다.` },
      { k:'D', en:`Create an SCP in the organization to restrict access to the RIs. Apply the SCP to the OUs of the other departments.`, ko:`조직 내에 SCP를 생성하여 RI에 대한 접근을 제한합니다. SCP를 다른 부서의 OU에 적용합니다.` },
    ],
    answer: ['C'],
    vote: '79% C, 10% A, 10% D',
    explain: `<p><span class="mark-ok">✅ C — 관리 계정에서 특정 계정의 RI 공유 비활성화</span></p>
<p>AWS Organizations에서 통합 청구(Consolidated Billing) 사용 시 RI(Reserved Instance) 및 Savings Plans 할인은 기본적으로 조직 내 모든 계정에 공유됩니다. 이 공유 설정은 <strong>관리(페이어) 계정</strong>에서만 제어할 수 있습니다.</p>
<ul>
<li>경로: 관리 계정 → AWS Billing and Cost Management → Billing Preferences → Reserved Instances and Savings Plans discount sharing</li>
<li>특정 멤버 계정(HR 프로덕션)의 RI 공유를 개별적으로 비활성화할 수 있습니다.</li>
<li>이렇게 하면 해당 계정에서 구매한 RI 할인이 해당 계정 내에서만 적용되고 다른 계정으로 공유되지 않습니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html" target="_blank">RI 공유 비활성화 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 멤버 계정은 자신의 Billing and Cost Management 콘솔에서 RI 공유를 직접 끌 수 없습니다. RI 공유 설정은 반드시 <strong>관리(페이어) 계정</strong>에서만 변경 가능합니다. 멤버 계정에는 해당 설정 옵션 자체가 표시되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — 계정을 Organizations에서 제거하면 SCP, AWS Config Rules 집계, CloudTrail 조직 추적, SCPs 등 모든 조직 이점을 잃게 됩니다. "통합 청구 전용" 구성은 현재 AWS에서 레거시 방식으로, 새로 구성할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — SCP(Service Control Policy)는 IAM 액션을 제어하는 정책으로, 청구 및 RI 할인 공유 동작을 제어하지 않습니다. RI 할인 공유는 IAM 권한이 아니라 청구 시스템 설정이므로 SCP로 제어할 수 없습니다.</p>`,
    disc: [{ ans:'C', txt:'RI 공유는 조직의 관리 계정 Billing Preferences에서 멤버 계정별로 개별 설정할 수 있습니다. 멤버 계정 자신이나 SCP로는 이 동작을 제어할 수 없습니다. 관리 계정에서만 특정 멤버 계정의 RI/Savings Plans 공유를 켜고 끌 수 있습니다.' }]
  },
  {
    n: 109,
    en: `A large company is running a popular web application. The application runs on several Amazon EC2 Linux instances in an Auto Scaling group in a private subnet. An Application Load Balancer is targeting the instances in the Auto Scaling group in the private subnet. AWS Systems Manager Session Manager is configured, and AWS Systems Manager Agent is running on all the EC2 instances.<br/><br/>The company recently released a new version of the application. Some EC2 instances are now being marked as unhealthy and are being terminated. As a result, the application is running at reduced capacity. A solutions architect tries to determine the root cause by analyzing Amazon CloudWatch logs that are collected from the application, but the logs are inconclusive.<br/><br/>How should the solutions architect gain access to an EC2 instance to troubleshoot the issue?`,
    ko: `한 대기업에서 인기 있는 웹 애플리케이션을 실행하고 있습니다. 애플리케이션은 프라이빗 서브넷의 Auto Scaling 그룹에 있는 여러 Amazon EC2 Linux 인스턴스에서 실행됩니다. Application Load Balancer는 프라이빗 서브넷의 Auto Scaling 그룹에 있는 인스턴스를 대상으로 합니다. AWS Systems Manager Session Manager가 구성되었으며 AWS Systems Manager 에이전트가 모든 EC2 인스턴스에서 실행되고 있습니다. <br/><br/>회사는 최근 새로운 버전의 애플리케이션을 출시했습니다. 일부 EC2 인스턴스가 현재 비정상으로 표시되어 종료되고 있습니다. 결과적으로 애플리케이션은 감소된 용량으로 실행됩니다. 솔루션 설계자는 애플리케이션에서 수집된 Amazon CloudWatch 로그를 분석하여 근본 원인을 파악하려고 시도하지만 로그로는 결론을 내리지 못합니다. <br/><br/>문제를 해결하려면 솔루션 설계자가 EC2 인스턴스에 어떻게 액세스해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Suspend the Auto Scaling group's HealthCheck scaling process. Use Session Manager to log in to an instance that is marked as unhealthy.`, ko:`Auto Scaling 그룹의 HealthCheck 조정 프로세스를 일시 중단합니다. 비정상으로 표시된 인스턴스에 로그인하려면 세션 관리자를 사용하십시오.` },
      { k:'B', en:`Enable EC2 instance termination protection. Use Session Manager to log in to an instance that is marked as unhealthy.`, ko:`EC2 인스턴스 종료 보호를 활성화합니다. 비정상으로 표시된 인스턴스에 로그인하려면 세션 관리자를 사용하십시오.` },
      { k:'C', en:`Set the termination policy to OldestInstance on the Auto Scaling group. Use Session Manager to log in to an instance that is marked an unhealthy.`, ko:`Auto Scaling 그룹의 종료 정책을 OldestInstance로 설정합니다. 비정상으로 표시된 인스턴스에 로그인하려면 세션 관리자를 사용하십시오.` },
      { k:'D', en:`Suspend the Auto Scaling group's Terminate process. Use Session Manager to log in to an instance that is marked as unhealthy.`, ko:`Auto Scaling 그룹의 종료 프로세스를 일시 중단합니다. 비정상으로 표시된 인스턴스에 로그인하려면 세션 관리자를 사용하십시오.` },
    ],
    answer: ['D'],
    vote: '93% D, 7% A',
    explain: `<p><span class="mark-ok">✅ D — ASG의 Terminate 프로세스 일시 중단 + Session Manager 접속</span></p>
<p>Auto Scaling 그룹은 여러 독립적인 스케일링 프로세스를 갖습니다: Launch, Terminate, HealthCheck, ReplaceUnhealthy, AZRebalance 등. 이 프로세스들은 개별적으로 일시 중단할 수 있습니다.</p>
<ul>
<li><strong>Terminate 프로세스 일시 중단</strong>: ASG가 비정상 인스턴스를 종료하는 것을 방지하여, 인스턴스가 종료되기 전에 조사할 시간을 확보합니다.</li>
<li><strong>Session Manager</strong>: 프라이빗 서브넷 인스턴스에 SSH 키나 인바운드 보안 그룹 규칙 없이 안전하게 브라우저 또는 CLI로 접속 가능합니다. SSM Agent가 이미 설치되어 있으므로 즉시 사용 가능합니다.</li>
</ul>
<p>조사 완료 후 반드시 Terminate 프로세스를 재개해야 합니다.</p>
<p><a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html" target="_blank">ASG 프로세스 일시 중단 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — HealthCheck 프로세스를 중단하면 새로운 상태 확인 평가가 중지됩니다. 그러나 이미 "비정상(Unhealthy)" 상태로 표시된 인스턴스의 종료는 <strong>Terminate 프로세스</strong>가 담당하며, HealthCheck 중단만으로는 이미 표시된 비정상 인스턴스의 종료를 막을 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — EC2 인스턴스 종료 보호(Termination Protection)는 콘솔/API/CLI에서의 수동 종료를 막습니다. 그러나 <strong>Auto Scaling 그룹의 자동 종료 메커니즘은 종료 보호를 우회</strong>하여 인스턴스를 종료할 수 있습니다. EC2 Termination Protection과 ASG의 인스턴스 종료는 별개입니다.</p>
<p><span class="mark-no">❌ C</span> — OldestInstance 종료 정책은 ASG가 스케일 인 시 어느 인스턴스를 먼저 종료할지 결정하는 기준이지, 종료 자체를 막는 설정이 아닙니다. 비정상 인스턴스는 이 설정과 관계없이 종료됩니다.</p>`,
    disc: [{ ans:'D', txt:'ASG 프로세스의 구분이 중요합니다: HealthCheck(상태 평가)와 Terminate(종료 실행)는 별개의 프로세스입니다. 비정상 인스턴스를 살려두고 접속하려면 Terminate 프로세스를 일시 중단해야 합니다. 조사 완료 후 반드시 Terminate 프로세스를 재개해야 합니다.' }]
  },
  {
    n: 110,
    en: `A company wants to deploy an AWS WAF solution to manage AWS WAF rules across multiple AWS accounts. The accounts are managed under different OUs in AWS Organizations.<br/><br/>Administrators must be able to add or remove accounts or OUs from managed AWS WAF rule sets as needed. Administrators also must have the ability to automatically update and remediate noncompliant AWS WAF rules in all accounts.<br/><br/>Which solution meets these requirements with the LEAST amount of operational overhead?`,
    ko: `한 회사에서 여러 AWS 계정에 걸쳐 AWS WAF 규칙을 관리하기 위해 AWS WAF 솔루션을 배포하려고 합니다. 계정은 AWS Organizations의 다양한 OU에서 관리됩니다. <br/><br/>관리자는 필요에 따라 관리형 AWS WAF 규칙 세트에서 계정이나 OU를 추가하거나 제거할 수 있어야 합니다. 또한 관리자는 모든 계정에서 규정을 준수하지 않는 AWS WAF 규칙을 자동으로 업데이트하고 해결할 수 있는 능력도 있어야 합니다. <br/><br/>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use AWS Firewall Manager to manage AWS WAF rules across accounts in the organization. Use an AWS Systems Manager Parameter Store parameter to store account numbers and OUs to manage. Update the parameter as needed to add or remove accounts or OUs. Use an Amazon EventBridge rule to identify any changes to the parameter and to invoke an AWS Lambda function to update the security policy in the Firewall Manager administrative account.`, ko:`AWS Firewall Manager를 사용하여 조직 내 계정 전체에서 AWS WAF 규칙을 관리하십시오. AWS Systems Manager Parameter Store 매개변수를 사용하여 관리할 계정 번호와 OU를 저장합니다. 계정이나 OU를 추가하거나 제거하려면 필요에 따라 매개변수를 업데이트하세요. Amazon EventBridge 규칙을 사용하여 매개변수에 대한 변경 사항을 식별하고 AWS Lambda 함수를 호출하여 Firewall Manager 관리 계정의 보안 정책을 업데이트합니다.` },
      { k:'B', en:`Deploy an organization-wide AWS Config rule that requires all resources in the selected OUs to associate the AWS WAF rules. Deploy automated remediation actions by using AWS Lambda to fix noncompliant resources. Deploy AWS WAF rules by using an AWS CloudFormation stack set to target the same OUs where the AWS Config rule is applied.`, ko:`선택한 OU의 모든 리소스가 AWS WAF 규칙을 연결하도록 요구하는 조직 전체에 AWS Config 규칙을 배포합니다. AWS Lambda를 사용하여 자동화된 수정 작업을 배포하여 규정을 준수하지 않는 리소스를 수정합니다. AWS Config 규칙이 적용되는 동일한 OU를 대상으로 하는 AWS CloudFormation 스택 세트를 사용하여 AWS WAF 규칙을 배포합니다.` },
      { k:'C', en:`Create AWS WAF rules in the management account of the organization. Use AWS Lambda environment variables to store account numbers and OUs to manage. Update environment variables as needed to add or remove accounts or OUs. Create cross-account IAM roles in member accounts. Assume the roles by using AWS Security Token Service (AWS STS) in the Lambda function to create and update AWS WAF rules in the member accounts.`, ko:`조직의 마스터 계정에 AWS WAF 규칙을 생성합니다. AWS Lambda 환경 변수를 사용하여 관리할 계정 번호와 OU를 저장합니다. 계정이나 OU를 추가하거나 제거하려면 필요에 따라 환경 변수를 업데이트하세요. 회원 계정에서 교차 계정 IAM 역할을 생성합니다. Lambda 함수에서 AWS Security Token Service(AWS STS)를 사용하여 역할을 맡아 멤버 계정에서 AWS WAF 규칙을 생성하고 업데이트합니다.` },
      { k:'D', en:`Use AWS Control Tower to manage AWS WAF rules across accounts in the organization. Use AWS Key Management Service (AWS KMS) to store account numbers and OUs to manage. Update AWS KMS as needed to add or remove accounts or OUs. Create IAM users in member accounts. Allow AWS Control Tower in the management account to use the access key and secret access key to create and update AWS WAF rules in the member accounts.`, ko:`AWS Control Tower를 사용하여 조직 내 계정 전체에서 AWS WAF 규칙을 관리합니다. AWS Key Management Service(AWS KMS)를 사용하여 관리할 계정 번호와 OU를 저장합니다. 계정이나 OU를 추가하거나 제거하려면 필요에 따라 AWS KMS를 업데이트하세요. 회원 계정에 IAM 사용자를 생성합니다. 허용 AWS Control Tower 마스터 계정 액세스 키 및 보안 액세스 키를 사용하여 회원 계정에서 AWS WAF 규칙을 생성하고 업데이트합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — AWS Firewall Manager + Parameter Store + EventBridge + Lambda</span></p>
<p><strong>AWS Firewall Manager</strong>는 AWS Organizations 전체에서 WAF 규칙, Security Groups, Shield Advanced 보호를 중앙에서 관리하기 위한 전용 서비스입니다.</p>
<ul>
<li><strong>자동 적용</strong>: Firewall Manager 정책에 지정된 계정/OU에 새로운 리소스가 생성되면 자동으로 WAF 규칙이 적용됩니다.</li>
<li><strong>자동 수정(Auto-remediation)</strong>: 규정 미준수 리소스를 자동으로 감지하고 수정합니다.</li>
<li><strong>Parameter Store + EventBridge + Lambda</strong>: 관리 대상 계정/OU 변경을 자동화하여 Firewall Manager 정책 범위를 동적으로 업데이트합니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html" target="_blank">AWS Firewall Manager 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS Config + Lambda + CloudFormation StackSets 조합은 WAF 규정 준수를 확인하고 수정할 수 있지만, 세 가지 서비스를 조율해야 하는 운영 복잡성이 높습니다. Firewall Manager는 이 기능을 단일 서비스로 제공합니다.</p>
<p><span class="mark-no">❌ C</span> — 모든 멤버 계정에 교차 계정 IAM 역할을 수동으로 생성하고 Lambda + STS로 직접 WAF 규칙을 업데이트하는 방식은 계정 수가 늘어날수록 운영 부담이 기하급수적으로 증가하며, 자동 수정 기능도 직접 구현해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS KMS는 암호화 키 관리 서비스로 계정 목록 저장에 적합하지 않습니다. 멤버 계정에 IAM 사용자를 생성하고 액세스 키/시크릿 키를 사용하는 방식은 AWS 보안 모범 사례(장기 자격증명 사용 금지)에 위배됩니다. Control Tower는 WAF 규칙 관리 도구가 아닙니다.</p>`,
    disc: [{ ans:'A', txt:'AWS Firewall Manager는 Organizations와 통합되어 WAF 정책을 OU 또는 특정 계정 범위로 자동 배포하고 수정합니다. Parameter Store + EventBridge + Lambda를 통해 정책 범위를 동적으로 관리할 수 있어 계정 추가/제거 시 자동화가 가능합니다.' }]
  },
];
