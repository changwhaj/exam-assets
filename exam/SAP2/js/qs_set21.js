window.QS_SET21 = [
  {
    n: 201,
    en: `A solutions architect needs to improve an application that is hosted in the AWS Cloud. The application uses an Amazon Aurora MySQL DB instance that is experiencing overloaded connections. Most of the application's operations insert records into the database. The application currently stores credentials in a text-based configuration file.<br><br>The solutions architect needs to implement a solution so that the application can handle the current connection load. The solution must keep the credentials secure and must provide the ability to rotate the credentials automatically on a regular basis.<br><br>Which solution will meet these requirements?`,
    ko: `솔루션 아키텍트는 AWS 클라우드에 호스팅된 애플리케이션을 개선해야 합니다. 이 애플리케이션은 연결 과부하가 발생하는 Amazon Aurora MySQL DB 인스턴스를 사용합니다. 대부분의 애플리케이션 작업은 데이터베이스에 레코드를 삽입합니다. 애플리케이션은 현재 텍스트 기반 구성 파일에 자격 증명을 저장합니다.<br><br>솔루션 아키텍트는 애플리케이션이 현재 연결 부하를 처리할 수 있도록 솔루션을 구현해야 합니다. 솔루션은 자격 증명을 안전하게 유지하고 정기적으로 자동 교체하는 기능을 제공해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy an Amazon RDS Proxy layer in front of the DB instance. Store the connection credentials as a secret in AWS Secrets Manager.`, ko: `DB 인스턴스 앞에 Amazon RDS 프록시 계층을 배포합니다. 연결 자격 증명을 AWS Secrets Manager에 비밀로 저장합니다.` },
      { k: 'B', en: `Deploy an Amazon RDS Proxy layer in front of the DB instance. Store the connection credentials in AWS Systems Manager Parameter Store.`, ko: `DB 인스턴스 앞에 Amazon RDS 프록시 계층을 배포합니다. 연결 자격 증명을 AWS Systems Manager Parameter Store에 저장합니다.` },
      { k: 'C', en: `Create an Aurora Replica. Store the connection credentials as a secret in AWS Secrets Manager.`, ko: `Aurora 복제본을 생성합니다. 연결 자격 증명을 AWS Secrets Manager에 비밀로 저장합니다.` },
      { k: 'D', en: `Create an Aurora Replica. Store the connection credentials in AWS Systems Manager Parameter Store.`, ko: `Aurora 복제본을 생성합니다. 연결 자격 증명을 AWS Systems Manager Parameter Store에 저장합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — RDS Proxy + Secrets Manager</span></p>
<p>Amazon RDS Proxy는 데이터베이스 연결 풀을 관리하여 연결 과부하 문제를 직접 해결합니다. 프록시는 애플리케이션으로부터 들어오는 수많은 연결 요청을 풀링하여 실제 DB 인스턴스로 전달하는 연결 수를 제어합니다. 이를 통해 매번 새 DB 연결을 여는 메모리·CPU 오버헤드를 방지하고 연결 초과 구독(oversubscription)을 방지합니다.</p>
<p>AWS Secrets Manager는 자격 증명의 안전한 저장뿐 아니라 <strong>자동 교체(rotation)</strong> 기능을 기본 제공합니다. Lambda 함수를 통해 일정에 따라 자격 증명을 자동으로 갱신하고 Aurora와 통합됩니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html" target="_blank">AWS 공식 문서 - RDS Proxy</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Systems Manager Parameter Store는 SecureString 파라미터로 자격 증명 저장은 가능하지만, <strong>자동 교체(rotation) 기능을 기본 제공하지 않습니다.</strong> 교체를 직접 구현해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — Aurora 복제본은 읽기 스케일 아웃에 사용됩니다. 이 시나리오의 주요 작업은 쓰기(INSERT)이므로 읽기 복제본은 연결 과부하 문제를 해결하지 못합니다. 또한 Secrets Manager 사용 자체는 올바르나 연결 풀링 부재로 불완전합니다.</p>
<p><span class="mark-no">❌ D</span> — C의 문제에 더해 Parameter Store는 자동 교체를 지원하지 않아 두 요구 사항을 모두 충족하지 못합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'RDS Proxy는 연결 풀링으로 과부하 문제 해결, Secrets Manager는 자동 교체 기능 제공. C·D는 쓰기 위주 워크로드에서 읽기 복제본이 무의미하고, B는 Parameter Store에 자동 교체 기능이 없어 탈락.' }
    ]
  },
  {
    n: 202,
    en: `A company needs to build a disaster recovery (DR) solution for its ecommerce website. The web application is hosted on a fleet of t3.large Amazon EC2 instances and uses an Amazon RDS for MySQL DB instance. The EC2 instances are in an Auto Scaling group that extends across multiple Availability Zones.<br><br>In the event of a disaster, the web application must fail over to the secondary environment with an RPO of 30 seconds and an RTO of 10 minutes.<br><br>Which solution will meet these requirements MOST cost-effectively?`,
    ko: `회사는 전자상거래 웹사이트를 위한 재해 복구(DR) 솔루션을 구축해야 합니다. 웹 애플리케이션은 t3.large Amazon EC2 인스턴스 집합에서 호스팅되며 MySQL DB 인스턴스용 Amazon RDS를 사용합니다. EC2 인스턴스는 여러 가용 영역에 걸쳐 확장되는 Auto Scaling 그룹에 있습니다.<br><br>재해가 발생하는 경우 웹 애플리케이션은 RPO 30초, RTO 10분으로 보조 환경으로 장애 조치해야 합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Create a cross-Region read replica for the DB instance. Set up a backup plan in AWS Backup to create cross-Region backups for the EC2 instances and the DB instance. Create a cron expression to back up the EC2 instances and the DB instance every 30 seconds to the DR Region. Recover the EC2 instances from the latest EC2 backup. Use an Amazon Route 53 geolocation routing policy to automatically fail over to the DR Region in the event of a disaster.`, ko: `IaC를 사용하여 DR 리전에 새 인프라를 프로비저닝합니다. DB 인스턴스에 대한 리전 간 읽기 전용 복제본을 생성합니다. AWS Backup에서 EC2 및 DB 인스턴스에 대한 리전 간 백업 계획을 설정하고, 30초마다 DR 리전에 백업하는 cron 표현식을 생성합니다. 최신 EC2 백업에서 인스턴스를 복구합니다. Amazon Route 53 지리적 위치 라우팅 정책으로 자동 장애 조치합니다.` },
      { k: 'B', en: `Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Create a cross-Region read replica for the DB instance. Set up AWS Elastic Disaster Recovery to continuously replicate the EC2 instances to the DR Region. Run the EC2 instances at the minimum capacity in the DR Region. Use an Amazon Route 53 failover routing policy to automatically fail over to the DR Region in the event of a disaster. Increase the desired capacity of the Auto Scaling group.`, ko: `IaC를 사용하여 DR 리전에 새 인프라를 프로비저닝합니다. DB 인스턴스에 대한 리전 간 읽기 전용 복제본을 생성합니다. AWS Elastic Disaster Recovery를 설정하여 EC2 인스턴스를 DR 리전으로 지속적으로 복제합니다. DR 리전에서 EC2 인스턴스를 최소 용량으로 실행합니다. Amazon Route 53 장애 조치 라우팅 정책으로 자동 장애 조치하고, Auto Scaling 그룹의 원하는 용량을 늘립니다.` },
      { k: 'C', en: `Set up a backup plan in AWS Backup to create cross-Region backups for the EC2 instances and the DB instance. Create a cron expression to back up the EC2 instances and the DB instance every 30 seconds to the DR Region. Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Manually restore the backed-up data on new instances. Use an Amazon Route 53 simple routing policy to automatically fail over to the DR Region in the event of a disaster.`, ko: `AWS Backup에서 EC2 및 DB 인스턴스에 대한 리전 간 백업 계획을 설정합니다. 30초마다 DR 리전에 백업하는 cron 표현식을 생성합니다. IaC로 DR 리전에 새 인프라를 프로비저닝하고 새 인스턴스에 백업 데이터를 수동으로 복원합니다. Amazon Route 53 단순 라우팅 정책으로 자동 장애 조치합니다.` },
      { k: 'D', en: `Use infrastructure as code (IaC) to provision the new infrastructure in the DR Region. Create an Amazon Aurora global database. Set up AWS Elastic Disaster Recovery to continuously replicate the EC2 instances to the DR Region. Run the Auto Scaling group of EC2 instances at full capacity in the DR Region. Use an Amazon Route 53 failover routing policy to automatically fail over to the DR Region in the event of a disaster.`, ko: `IaC를 사용하여 DR 리전에 새 인프라를 프로비저닝합니다. Amazon Aurora 글로벌 데이터베이스를 생성합니다. AWS Elastic Disaster Recovery를 설정하여 EC2 인스턴스를 DR 리전으로 지속적으로 복제합니다. DR 리전에서 EC2 인스턴스 Auto Scaling 그룹을 전체 용량으로 실행합니다. Amazon Route 53 장애 조치 라우팅 정책으로 자동 장애 조치합니다.` },
    ],
    answer: ['B'],
    vote: '89% B',
    explain: `<p><span class="mark-ok">✅ B — Elastic Disaster Recovery + RDS 리전 간 읽기 복제본 + 최소 용량 웜 스탠바이</span></p>
<p>AWS Elastic Disaster Recovery(EDR)는 EC2 인스턴스를 DR 리전으로 <strong>지속적으로(연속적으로) 복제</strong>하므로 RPO 30초를 달성할 수 있습니다. RDS 리전 간 읽기 복제본은 일반적으로 수백 밀리초 지연으로 복제되어 RPO 30초 요건을 충족합니다.</p>
<p>DR 리전의 EC2를 <strong>최소 용량(warm standby)</strong>으로만 유지하므로 전체 용량 실행(D) 대비 비용이 절감됩니다. 장애 시 Auto Scaling 그룹의 desired capacity를 증가시켜 10분 RTO 이내에 확장할 수 있습니다. Route 53 장애 조치 라우팅으로 자동 전환합니다.</p>
<p><a href="https://aws.amazon.com/disaster-recovery/" target="_blank">AWS 공식 문서 - Disaster Recovery</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Backup의 cron 표현식으로는 30초 단위 백업이 실질적으로 불가능합니다(최소 단위는 1시간). 또한 백업 복구 방식은 RTO 10분 달성이 어렵고, 지리적 위치 라우팅은 장애 감지 기반의 자동 장애 조치에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 수동 복원(manually restore)은 RTO 10분 내에 완료하기 어렵고, 단순 라우팅(simple routing)은 상태 확인 기반 장애 조치를 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — DR 리전에서 EC2를 <strong>전체 용량(full capacity)</strong>으로 상시 실행하는 것은 비용 비효율적입니다. Aurora 글로벌 데이터베이스는 RDS for MySQL보다 고가이며, 질문의 DB는 Aurora가 아닌 RDS MySQL입니다.</p>`,
    disc: [
      { ans: 'B (89%)', txt: 'EDR로 EC2 연속 복제(RPO 30초), RDS 읽기 복제본 승격(RPO 충족), 최소 용량 웜스탠바이로 비용 절감(RTO 10분 내 ASG 확장). D는 전체 용량 상시 실행으로 비용 과다.' }
    ]
  },
  {
    n: 203,
    en: `A company is planning a one-time migration of an on-premises MySQL database to Amazon Aurora MySQL in the us-east-1 Region. The company's current internet connection has limited bandwidth. The on-premises MySQL database is 60 TB in size. The company estimates that it will take a month to transfer the data to AWS over the current internet connection. The company needs a migration solution that will migrate the database more quickly.<br><br>Which solution will migrate the database in the LEAST amount of time?`,
    ko: `회사는 온프레미스 MySQL 데이터베이스를 us-east-1 리전의 Amazon Aurora MySQL로 일회적으로 마이그레이션할 계획입니다. 회사의 현재 인터넷 연결에는 대역폭이 제한되어 있습니다. 온프레미스 MySQL 데이터베이스의 크기는 60TB입니다. 회사에서는 현재 인터넷 연결을 통해 데이터를 AWS로 전송하는 데 한 달이 걸릴 것으로 추정합니다. 회사에는 데이터베이스를 더 빠르게 마이그레이션할 솔루션이 필요합니다.<br><br>가장 짧은 시간 내에 데이터베이스를 마이그레이션하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Request a 1 Gbps AWS Direct Connect connection between the on-premises data center and AWS. Use AWS Database Migration Service (AWS DMS) to migrate the on-premises MySQL database to Aurora MySQL.`, ko: `온프레미스 데이터 센터와 AWS 간에 1Gbps AWS Direct Connect 연결을 요청합니다. AWS DMS를 사용하여 온프레미스 MySQL 데이터베이스를 Aurora MySQL로 마이그레이션합니다.` },
      { k: 'B', en: `Use AWS DataSync with the current internet connection to accelerate the data transfer between the on-premises data center and AWS. Use AWS Application Migration Service to migrate the on-premises MySQL database to Aurora MySQL.`, ko: `현재 인터넷 연결과 함께 AWS DataSync를 사용하여 온프레미스 데이터 센터와 AWS 간의 데이터 전송을 가속화합니다. AWS Application Migration Service를 사용하여 온프레미스 MySQL 데이터베이스를 Aurora MySQL로 마이그레이션합니다.` },
      { k: 'C', en: `Order an AWS Snowball Edge device. Load the data into an Amazon S3 bucket by using the S3 interface. Use AWS Database Migration Service (AWS DMS) to migrate the data from Amazon S3 to Aurora MySQL.`, ko: `AWS Snowball Edge 디바이스를 주문합니다. S3 인터페이스를 사용하여 Amazon S3 버킷에 데이터를 로드합니다. AWS DMS를 사용하여 Amazon S3에서 Aurora MySQL로 데이터를 마이그레이션합니다.` },
      { k: 'D', en: `Order an AWS Snowball device. Load the data into an Amazon S3 bucket by using the S3 Adapter for Snowball. Use AWS Application Migration Service to migrate the data from Amazon S3 to Aurora MySQL.`, ko: `AWS Snowball 디바이스를 주문합니다. Snowball용 S3 어댑터를 사용하여 Amazon S3 버킷에 데이터를 로드합니다. AWS Application Migration Service를 사용하여 Amazon S3에서 Aurora MySQL로 데이터를 마이그레이션합니다.` },
    ],
    answer: ['C'],
    vote: '96% C',
    explain: `<p><span class="mark-ok">✅ C — Snowball Edge + DMS</span></p>
<p>대역폭이 제한된 환경에서 60TB 데이터를 가장 빠르게 이동하려면 물리적 전송 장치가 필요합니다. <strong>AWS Snowball Edge</strong>는 최대 80TB(사용 가능 용량 기준)를 지원하므로 60TB 데이터를 한 번에 수용할 수 있습니다.</p>
<p>S3에 적재된 데이터를 <strong>AWS DMS</strong>를 통해 Aurora MySQL로 마이그레이션하는 것이 데이터베이스 마이그레이션의 표준 경로입니다. Application Migration Service(MGN)는 서버/애플리케이션 마이그레이션용으로 데이터베이스 마이그레이션에는 적합하지 않습니다.</p>
<p><a href="https://aws.amazon.com/blogs/storage/enable-large-scale-database-migrations-with-aws-dms-and-aws-snowball/" target="_blank">AWS 공식 블로그 - DMS + Snowball 대규모 DB 마이그레이션</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Direct Connect 1Gbps 회선은 프로비저닝까지 수개월이 소요될 수 있어 일회성 마이그레이션에 비효율적입니다. 또한 1Gbps로도 60TB 전송에 수일이 걸립니다.</p>
<p><span class="mark-no">❌ B</span> — DataSync는 대역폭을 최대한 활용하지만 현재 인터넷 연결이 제한적이어서 속도 향상에 한계가 있습니다. 또한 AWS Application Migration Service는 데이터베이스가 아닌 서버/애플리케이션 마이그레이션 전용입니다.</p>
<p><span class="mark-no">❌ D</span> — 구형 Snowball 디바이스는 최대 80TB를 제공하나 Snowball Edge보다 기능이 제한적입니다. 더 중요한 문제는 Application Migration Service가 DB 마이그레이션을 지원하지 않는다는 점입니다.</p>`,
    disc: [
      { ans: 'C (96%)', txt: 'Snowball Edge는 60TB를 수용하는 물리적 전송으로 인터넷 대역폭 제약 우회. DMS는 S3→Aurora MySQL 데이터베이스 마이그레이션의 표준 도구. D는 Application Migration Service가 DB 마이그레이션에 부적합.' }
    ]
  },
  {
    n: 204,
    en: `A company has an application in the AWS Cloud. The application runs on a fleet of 20 Amazon EC2 instances. The EC2 instances are persistent and store data on multiple attached Amazon Elastic Block Store (Amazon EBS) volumes.<br><br>The company must maintain backups in a separate AWS Region. The company must be able to recover the EC2 instances and their configuration within 1 business day, with loss of no more than 1 day's worth of data. The company has limited staff and needs a backup solution that optimizes operational efficiency and cost. The company already has created an AWS CloudFormation template that can deploy the required network configuration in a secondary Region.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 AWS 클라우드에 애플리케이션을 보유하고 있습니다. 이 애플리케이션은 20개의 Amazon EC2 인스턴스 집합에서 실행됩니다. EC2 인스턴스는 지속적이며 연결된 여러 Amazon EBS 볼륨에 데이터를 저장합니다.<br><br>회사는 별도의 AWS 리전에서 백업을 유지해야 합니다. 회사는 영업일 기준 1일 이내에 EC2 인스턴스와 해당 구성을 복구할 수 있어야 하며, 최대 1일치의 데이터 손실만 허용합니다. 회사는 직원이 제한적이며 운영 효율성과 비용을 최적화하는 백업 솔루션이 필요합니다. 회사는 이미 보조 리전에 필요한 네트워크 구성을 배포할 수 있는 AWS CloudFormation 템플릿을 생성했습니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a second CloudFormation template that can recreate the EC2 instances in the secondary Region. Run daily multivolume snapshots by using AWS Systems Manager Automation runbooks. Copy the snapshots to the secondary Region. In the event of a failure, launch the CloudFormation templates, restore the EBS volumes from snapshots, and transfer usage to the secondary Region.`, ko: `보조 리전에서 EC2 인스턴스를 재생성할 수 있는 두 번째 CloudFormation 템플릿을 생성합니다. AWS Systems Manager Automation Runbook을 사용하여 매일 다중 볼륨 스냅샷을 실행합니다. 스냅샷을 보조 리전에 복사합니다. 장애 시 CloudFormation 템플릿을 실행하고 스냅샷에서 EBS 볼륨을 복원하여 사용량을 보조 리전으로 전환합니다.` },
      { k: 'B', en: `Use Amazon Data Lifecycle Manager (Amazon DLM) to create daily multivolume snapshots of the EBS volumes. In the event of a failure, launch the CloudFormation template and use Amazon DLM to restore the EBS volumes and transfer usage to the secondary Region.`, ko: `Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 EBS 볼륨의 일일 다중 볼륨 스냅샷을 생성합니다. 장애 시 CloudFormation 템플릿을 시작하고 Amazon DLM을 사용하여 EBS 볼륨을 복원하고 사용량을 보조 리전으로 전환합니다.` },
      { k: 'C', en: `Use AWS Backup to create a scheduled daily backup plan for the EC2 instances. Configure the backup task to copy the backups to a vault in the secondary Region. In the event of a failure, launch the CloudFormation template, restore the instance volumes and configurations from the backup vault, and transfer usage to the secondary Region.`, ko: `AWS Backup을 사용하여 EC2 인스턴스에 대한 예약된 일일 백업 계획을 생성합니다. 백업 작업이 보조 리전의 볼트에 백업을 복사하도록 구성합니다. 장애 시 CloudFormation 템플릿을 시작하고 백업 볼트에서 인스턴스 볼륨과 구성을 복원한 다음 사용량을 보조 리전으로 이전합니다.` },
      { k: 'D', en: `Deploy EC2 instances of the same size and configuration to the secondary Region. Configure AWS DataSync daily to copy data from the primary Region to the secondary Region. In the event of a failure, launch the CloudFormation template and transfer usage to the secondary Region.`, ko: `동일한 크기와 구성의 EC2 인스턴스를 보조 리전에 배포합니다. 기본 리전에서 보조 리전으로 데이터를 복사하도록 AWS DataSync를 매일 구성합니다. 장애 시 CloudFormation 템플릿을 시작하고 사용량을 보조 리전으로 이전합니다.` },
    ],
    answer: ['C'],
    vote: '77% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Backup (EC2 인스턴스 전체 + 리전 간 복사)</span></p>
<p>AWS Backup은 EC2 인스턴스 전체(EBS 볼륨 + <strong>인스턴스 구성 정보</strong> 포함)를 백업하고 보조 리전 볼트로 자동 복사하는 중앙 집중식 관리 솔루션입니다. 백업 계획과 정책을 코드 없이 콘솔에서 설정할 수 있어 소수 인원도 운영 효율적으로 관리할 수 있습니다.</p>
<p>장애 시 이미 있는 CloudFormation 템플릿으로 네트워크를 배포하고, AWS Backup에서 인스턴스와 볼륨을 복원하면 영업일 기준 1일 RTO와 1일 RPO를 충족합니다.</p>
<p><a href="https://aws.amazon.com/getting-started/hands-on/amazon-ec2-backup-and-restore-using-aws-backup/" target="_blank">AWS 공식 문서 - EC2 Backup and Restore</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Systems Manager Automation Runbook으로 스냅샷을 관리하는 것은 추가 구성·운영 부담이 크고 인스턴스 구성 복원이 별도 CloudFormation 템플릿에 의존합니다. 직원이 제한적인 환경에서 운영 효율성이 떨어집니다.</p>
<p><span class="mark-no">❌ B</span> — Amazon DLM은 EBS 스냅샷 생명 주기 관리에 특화되어 있으나 <strong>인스턴스 구성(AMI 수준 정보) 백업 및 통합 복원 기능이 없습니다.</strong> DLM에서 직접 볼륨을 '복원'하는 기능도 없어 스냅샷을 수동으로 활용해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — 보조 리전에 EC2를 상시 배포하면 비용이 크게 증가합니다. DataSync는 파일 기반 데이터 동기화 도구로 EC2 인스턴스 구성 복원에는 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'C (77%)', txt: 'AWS Backup이 EBS + 인스턴스 구성 모두 백업하여 C가 정답. DLM은 EBS 스냅샷만 관리하고 복원 기능 없음. B를 지지하는 일부 의견도 있었으나 인스턴스 구성 백업 여부가 핵심 차이.' }
    ]
  },
  {
    n: 205,
    en: `A company is designing a new website that hosts static content. The website will give users the ability to upload and download large files. According to company requirements, all data must be encrypted in transit and at rest. A solutions architect is building the solution by using Amazon S3 and Amazon CloudFront.<br><br>Which combination of steps will meet the encryption requirements? (Choose three.)`,
    ko: `한 회사가 정적 콘텐츠를 호스팅하는 새로운 웹사이트를 설계하고 있습니다. 이 웹사이트는 사용자에게 대용량 파일을 업로드하고 다운로드하는 기능을 제공합니다. 회사 요구 사항에 따라 모든 데이터는 전송 중 및 저장 중 암호화되어야 합니다. 솔루션 아키텍트는 Amazon S3 및 Amazon CloudFront를 사용하여 솔루션을 구축하고 있습니다.<br><br>암호화 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Turn on S3 server-side encryption for the S3 bucket that the web application uses.`, ko: `웹 애플리케이션이 사용하는 S3 버킷에 대해 S3 서버 측 암호화를 활성화합니다.` },
      { k: 'B', en: `Add a policy attribute of "aws:SecureTransport": "true" for read and write operations in the S3 ACLs.`, ko: `S3 ACL의 읽기 및 쓰기 작업에 대해 "aws:SecureTransport": "true" 정책 속성을 추가합니다.` },
      { k: 'C', en: `Create a bucket policy that denies any unencrypted operations in the S3 bucket that the web application uses.`, ko: `웹 애플리케이션이 사용하는 S3 버킷에서 암호화되지 않은 작업을 거부하는 버킷 정책을 생성합니다.` },
      { k: 'D', en: `Configure encryption at rest on CloudFront by using server-side encryption with AWS KMS keys (SSE-KMS).`, ko: `AWS KMS 키(SSE-KMS)를 사용한 서버 측 암호화를 사용하여 CloudFront에서 저장 중 암호화를 구성합니다.` },
      { k: 'E', en: `Configure redirection of HTTP requests to HTTPS requests in CloudFront.`, ko: `CloudFront에서 HTTP 요청을 HTTPS 요청으로 리디렉션하도록 구성합니다.` },
      { k: 'F', en: `Use the RequireSSL option in the creation of presigned URLs for the S3 bucket that the web application uses.`, ko: `웹 애플리케이션이 사용하는 S3 버킷에 대해 미리 서명된 URL을 생성할 때 RequireSSL 옵션을 사용합니다.` },
    ],
    answer: ['A', 'C', 'E'],
    vote: '92% ACE',
    explain: `<p><span class="mark-ok">✅ A — S3 서버 측 암호화 (저장 중 암호화)</span></p>
<p>S3 서버 측 암호화(SSE-S3)를 활성화하면 S3에 저장되는 모든 객체가 자동으로 암호화됩니다. 저장 중(at rest) 암호화 요구 사항을 충족합니다.</p>
<p><span class="mark-ok">✅ C — 암호화되지 않은 작업을 거부하는 S3 버킷 정책 (전송 중 암호화 강제)</span></p>
<p>버킷 정책에서 <code>aws:SecureTransport: false</code> 조건으로 HTTP 요청을 거부하면 HTTPS(TLS)를 통한 암호화된 전송만 허용됩니다. 이는 업로드 및 다운로드 모두에 적용됩니다.</p>
<p><span class="mark-ok">✅ E — CloudFront HTTP→HTTPS 리디렉션 (전송 중 암호화)</span></p>
<p>CloudFront 배포에서 HTTP를 HTTPS로 리디렉션하면 클라이언트와 CloudFront 간 통신이 TLS로 암호화되어 전송 중 암호화 요건을 충족합니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html" target="_blank">AWS 공식 문서 - S3 보안 모범 사례</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — <code>aws:SecureTransport</code> 조건은 S3 ACL이 아닌 <strong>S3 버킷 정책</strong>에 추가해야 합니다. ACL에는 이 조건을 적용할 수 없습니다. C가 동일한 목적을 올바른 방법으로 달성합니다.</p>
<p><span class="mark-no">❌ D</span> — CloudFront는 콘텐츠를 캐싱하는 CDN으로 자체적인 "저장 중 SSE-KMS 암호화" 설정이 없습니다. 저장 중 암호화는 S3(오리진)에서 적용합니다.</p>
<p><span class="mark-no">❌ F</span> — RequireSSL 옵션은 미리 서명된 URL(presigned URL)에만 적용됩니다. 이 시나리오에서 presigned URL 사용에 대한 언급이 없으며, E가 더 광범위하게 전송 중 암호화를 적용합니다.</p>`,
    disc: [
      { ans: 'ACE (92%)', txt: 'A=S3 저장 중 암호화, C=버킷 정책으로 HTTPS 강제(전송 중), E=CloudFront HTTP→HTTPS 리디렉션(전송 중). B는 ACL이 아닌 버킷 정책에 넣어야 하므로 오답. D는 CloudFront에 저장 중 암호화 설정 불가.' }
    ]
  },
  {
    n: 206,
    en: `A company is implementing a serverless architecture by using AWS Lambda functions that need to access a Microsoft SQL Server DB instance on Amazon RDS. The company has separate environments for development and production, including a clone of the database system.<br><br>The company's developers are allowed to access the credentials for the development database. However, the credentials for the production database must be encrypted with a key that only members of the IT security team's IAM user group can access. This key must be rotated on a regular basis.<br><br>What should a solutions architect do in the production environment to meet these requirements?`,
    ko: `회사는 Amazon RDS의 Microsoft SQL Server DB 인스턴스에 액세스해야 하는 AWS Lambda 함수를 사용하여 서버리스 아키텍처를 구현하고 있습니다. 회사는 개발 및 프로덕션을 위한 별도의 환경을 보유하고 있으며, 데이터베이스 시스템의 클론도 포함됩니다.<br><br>회사의 개발자는 개발 데이터베이스에 대한 자격 증명에 액세스할 수 있습니다. 그러나 프로덕션 데이터베이스에 대한 자격 증명은 IT 보안 팀의 IAM 사용자 그룹 구성원만 액세스할 수 있는 키로 암호화되어야 합니다. 이 키는 정기적으로 교체되어야 합니다.<br><br>솔루션 아키텍트가 프로덕션 환경에서 이러한 요구 사항을 충족하려면 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Store the database credentials in AWS Systems Manager Parameter Store by using a SecureString parameter that is encrypted by an AWS Key Management Service (AWS KMS) customer managed key. Attach a role to each Lambda function to provide access to the SecureString parameter. Restrict access to the SecureString parameter and the customer managed key so that only the IT security team can access the parameter and the key.`, ko: `AWS KMS 고객 관리형 키로 암호화된 SecureString 파라미터를 사용하여 AWS Systems Manager Parameter Store에 데이터베이스 자격 증명을 저장합니다. SecureString 파라미터에 대한 액세스를 제공하려면 각 Lambda 함수에 역할을 연결합니다. IT 보안 팀만 파라미터와 키에 액세스할 수 있도록 액세스를 제한합니다.` },
      { k: 'B', en: `Encrypt the database credentials by using the AWS Key Management Service (AWS KMS) default Lambda key. Store the credentials in the environment variables of each Lambda function. Load the credentials from the environment variables in the Lambda code. Restrict access to the KMS key so that only the IT security team can access the key.`, ko: `AWS KMS 기본 Lambda 키를 사용하여 데이터베이스 자격 증명을 암호화합니다. 각 Lambda 함수의 환경 변수에 자격 증명을 저장합니다. Lambda 코드의 환경 변수에서 자격 증명을 로드합니다. IT 보안 팀만 키에 액세스할 수 있도록 KMS 키 액세스를 제한합니다.` },
      { k: 'C', en: `Store the database credentials in the environment variables of each Lambda function. Encrypt the environment variables by using an AWS Key Management Service (AWS KMS) customer managed key. Restrict access to the customer managed key so that only the IT security team can access the key.`, ko: `각 Lambda 함수의 환경 변수에 데이터베이스 자격 증명을 저장합니다. AWS KMS 고객 관리형 키를 사용하여 환경 변수를 암호화합니다. IT 보안 팀만 키에 액세스할 수 있도록 고객 관리형 키 액세스를 제한합니다.` },
      { k: 'D', en: `Store the database credentials in AWS Secrets Manager as a secret that is associated with an AWS Key Management Service (AWS KMS) customer managed key. Attach a role to each Lambda function to provide access to the secret. Restrict access to the secret and the customer managed key so that only the IT security team can access the secret and the key.`, ko: `데이터베이스 자격 증명을 AWS KMS 고객 관리형 키와 연결된 비밀로 AWS Secrets Manager에 저장합니다. 비밀에 대한 액세스를 제공하려면 각 Lambda 함수에 역할을 연결합니다. IT 보안 팀만 비밀과 키에 액세스할 수 있도록 액세스를 제한합니다.` },
    ],
    answer: ['D'],
    vote: '76% D',
    explain: `<p><span class="mark-ok">✅ D — AWS Secrets Manager + KMS 고객 관리형 키</span></p>
<p>AWS Secrets Manager는 자격 증명의 안전한 저장과 함께 <strong>KMS 고객 관리형 키(CMK)를 사용한 정기 자동 교체(rotation)</strong> 기능을 기본 제공합니다. 비밀과 CMK 모두에 IAM 정책으로 IT 보안 팀의 접근만 허용하도록 제한할 수 있습니다. 각 Lambda 함수에는 Secrets Manager 비밀에만 접근할 수 있는 IAM 역할을 부여합니다.</p>
<p>Secrets Manager의 자동 교체는 RDS와 통합되어 Lambda 로테이션 함수를 통해 키와 DB 자격 증명을 자동으로 갱신합니다.</p>
<p><a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html" target="_blank">AWS 공식 문서 - Secrets Manager 자격 증명 교체</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Parameter Store의 SecureString은 KMS 암호화를 지원하지만, <strong>자격 증명 자동 교체(rotation) 기능이 없습니다.</strong> 교체를 직접 구현해야 합니다.</p>
<p><span class="mark-no">❌ B</span> — Lambda 기본 KMS 키는 AWS 관리형 키로 IT 보안 팀만 독점 접근하도록 제한할 수 없습니다. 또한 환경 변수에 저장하면 교체 시 함수를 재배포해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — 환경 변수를 CMK로 암호화할 수 있지만, 자격 증명 교체 시마다 Lambda 함수를 업데이트해야 합니다. 자동 교체를 지원하지 않습니다.</p>`,
    disc: [
      { ans: 'D (76%)', txt: '핵심은 "정기적 자동 교체". Secrets Manager만이 RDS 자격 증명의 자동 교체를 기본 지원. Parameter Store는 교체 불가. A 지지 의견도 있었으나 자동 교체 미지원으로 D가 정답.' }
    ]
  },
  {
    n: 207,
    en: `An online retail company is migrating its legacy on-premises .NET application to AWS. The application runs on load-balanced frontend web servers, load-balanced application servers, and a Microsoft SQL Server database.<br><br>The company wants to use AWS managed services where possible and does not want to rewrite the application. A solutions architect needs to implement a solution to resolve scaling issues and minimize licensing costs as the application scales.<br><br>Which solution will meet these requirements MOST cost-effectively?`,
    ko: `한 온라인 소매 회사가 기존 온프레미스 .NET 애플리케이션을 AWS로 마이그레이션하고 있습니다. 애플리케이션은 부하 분산된 프런트엔드 웹 서버, 부하 분산된 애플리케이션 서버 및 Microsoft SQL Server 데이터베이스에서 실행됩니다.<br><br>회사는 가능한 경우 AWS 관리형 서비스를 사용하기를 원하며 애플리케이션을 다시 작성하고 싶지 않습니다. 솔루션 아키텍트는 확장 문제를 해결하고 애플리케이션 확장에 따른 라이선스 비용을 최소화하기 위한 솔루션을 구현해야 합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer for the web tier and for the application tier. Use Amazon Aurora PostgreSQL with Babelfish turned on to replatform the SQL Server database.`, ko: `웹 계층과 애플리케이션 계층을 위해 Application Load Balancer 뒤의 Auto Scaling 그룹에 Amazon EC2 인스턴스를 배포합니다. SQL Server 데이터베이스를 재플랫폼화하려면 Babelfish가 활성화된 Amazon Aurora PostgreSQL을 사용합니다.` },
      { k: 'B', en: `Create images of all the servers by using AWS Database Migration Service (AWS DMS). Deploy Amazon EC2 instances that are based on the on-premises imports. Deploy the instances in an Auto Scaling group behind a Network Load Balancer for the web tier and for the application tier. Use Amazon DynamoDB as the database tier.`, ko: `AWS DMS를 사용하여 모든 서버의 이미지를 생성합니다. 온프레미스 가져오기를 기반으로 Amazon EC2 인스턴스를 배포합니다. 웹 계층과 애플리케이션 계층에 대해 Network Load Balancer 뒤의 Auto Scaling 그룹에 인스턴스를 배포합니다. Amazon DynamoDB를 데이터베이스 계층으로 사용합니다.` },
      { k: 'C', en: `Containerize the web frontend tier and the application tier. Provision an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. Create an Auto Scaling group behind a Network Load Balancer for the web tier and for the application tier. Use Amazon RDS for SQL Server to host the database.`, ko: `웹 프런트엔드 계층과 애플리케이션 계층을 컨테이너화합니다. Amazon EKS 클러스터를 프로비저닝합니다. 웹 계층과 애플리케이션 계층에 대해 Network Load Balancer 뒤에 Auto Scaling 그룹을 생성합니다. Amazon RDS for SQL Server를 사용하여 데이터베이스를 호스팅합니다.` },
      { k: 'D', en: `Separate the application functions into AWS Lambda functions. Use Amazon API Gateway for the web frontend tier and the application tier. Migrate the data to Amazon S3. Use Amazon Athena to query the data.`, ko: `애플리케이션 기능을 AWS Lambda 함수로 분리합니다. 웹 프런트엔드 계층과 애플리케이션 계층에 Amazon API Gateway를 사용합니다. 데이터를 Amazon S3로 마이그레이션합니다. Amazon Athena를 사용하여 데이터를 쿼리합니다.` },
    ],
    answer: ['A'],
    vote: '86% A',
    explain: `<p><span class="mark-ok">✅ A — Aurora PostgreSQL + Babelfish (SQL Server 재플랫폼)</span></p>
<p>Babelfish for Aurora PostgreSQL은 Aurora PostgreSQL이 Microsoft SQL Server의 T-SQL 언어와 TDS 프로토콜을 이해할 수 있게 해주는 기능입니다. 애플리케이션 코드를 재작성하지 않고도 SQL Server에서 Aurora PostgreSQL로 마이그레이션할 수 있어 라이선스 비용을 절감합니다.</p>
<p>웹·애플리케이션 계층은 HTTP(S) 트래픽을 처리하므로 ALB가 적합합니다. Auto Scaling으로 확장 문제를 해결합니다.</p>
<p><a href="https://aws.amazon.com/rds/aurora/babelfish/" target="_blank">AWS 공식 문서 - Babelfish for Aurora PostgreSQL</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — DynamoDB는 NoSQL 데이터베이스로 관계형 SQL Server 애플리케이션의 데이터 액세스 코드를 전면 재작성해야 합니다("애플리케이션을 다시 작성하고 싶지 않다"는 요구 사항 위반). 또한 NLB는 HTTP/HTTPS 웹 트래픽에 ALB보다 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 컨테이너화는 애플리케이션 재작성 없이 불가능합니다. RDS for SQL Server는 SQL Server 라이선스 비용을 유지하므로 라이선스 최소화 요구 사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda와 API Gateway로의 전환은 애플리케이션 전면 재작성을 요구합니다. S3/Athena는 트랜잭셔널 SQL 워크로드에 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'A (86%)', txt: 'Babelfish로 코드 변경 없이 SQL Server T-SQL을 Aurora PostgreSQL에서 실행하여 라이선스 절감. B와 D는 애플리케이션 재작성 필요. C는 SQL Server 라이선스 유지. NLB는 웹 계층에 부적합.' }
    ]
  },
  {
    n: 208,
    en: `A software-as-a-service (SaaS) provider exposes APIs through an Application Load Balancer (ALB). The ALB connects to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that is deployed in the us-east-1 Region. The exposed APIs contain usage of a few non-standard REST methods: LINK, UNLINK, LOCK, and UNLOCK.<br><br>Users outside the United States are reporting long and inconsistent response times for these APIs. A solutions architect needs to resolve this problem with a solution that minimizes operational overhead.<br><br>Which solution meets these requirements?`,
    ko: `SaaS(Software-as-a-Service) 공급자가 ALB(Application Load Balancer)를 통해 API를 노출합니다. ALB는 us-east-1 리전에 배포된 Amazon EKS 클러스터에 연결됩니다. 노출된 API에는 LINK, UNLINK, LOCK 및 UNLOCK과 같은 비표준 REST 메서드가 포함됩니다.<br><br>미국 이외의 사용자는 이러한 API에 대해 응답 시간이 길고 일관성이 없다고 보고하고 있습니다. 솔루션 아키텍트는 운영 오버헤드를 최소화하는 솔루션으로 이 문제를 해결해야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Add an Amazon CloudFront distribution. Configure the ALB as the origin.`, ko: `Amazon CloudFront 배포를 추가합니다. ALB를 오리진으로 구성합니다.` },
      { k: 'B', en: `Add an Amazon API Gateway edge-optimized API endpoint to expose the APIs. Configure the ALB as the target.`, ko: `Amazon API Gateway 엣지 최적화 API 엔드포인트를 추가하여 API를 노출합니다. ALB를 대상으로 구성합니다.` },
      { k: 'C', en: `Add an accelerator in AWS Global Accelerator. Configure the ALB as the origin.`, ko: `AWS Global Accelerator에 액셀러레이터를 추가합니다. ALB를 오리진(엔드포인트)으로 구성합니다.` },
      { k: 'D', en: `Deploy the APIs to two additional AWS Regions: eu-west-1 and ap-southeast-2. Add latency-based routing records in Amazon Route 53.`, ko: `두 개의 추가 AWS 리전인 eu-west-1 및 ap-southeast-2에 API를 배포합니다. Amazon Route 53에 지연 시간 기반 라우팅 레코드를 추가합니다.` },
    ],
    answer: ['C'],
    vote: '72% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Global Accelerator + ALB 엔드포인트</span></p>
<p>AWS Global Accelerator는 ALB, NLB, EC2 인스턴스, Elastic IP를 엔드포인트로 지원합니다. 전 세계 사용자의 트래픽이 가장 가까운 AWS 엣지 로케이션으로 진입한 후 AWS 글로벌 백본 네트워크를 통해 us-east-1의 ALB로 전달됩니다. 이를 통해 인터넷 구간의 홉(hop)을 줄이고 일관된 낮은 지연 시간을 제공합니다.</p>
<p>비표준 HTTP 메서드(LINK, UNLINK, LOCK, UNLOCK)는 Layer 4 수준에서 투명하게 전달되므로 Global Accelerator가 이를 차단하지 않습니다. 운영 오버헤드도 최소화됩니다.</p>
<p><a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-components.html" target="_blank">AWS 공식 문서 - Global Accelerator 구성 요소</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon CloudFront는 GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH와 같은 표준 HTTP 메서드만 지원하며, <strong>LINK, UNLINK, LOCK, UNLOCK 등 비표준 메서드를 지원하지 않습니다.</strong></p>
<p><span class="mark-no">❌ B</span> — Amazon API Gateway(REST API)에서 지원하는 HTTP 메서드는 GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH, ANY입니다. LINK, UNLINK, LOCK, UNLOCK 같은 <strong>비표준 메서드는 지원하지 않습니다.</strong></p>
<p><span class="mark-no">❌ D</span> — 두 개의 추가 리전에 전체 인프라를 배포하는 것은 운영 오버헤드가 매우 큽니다. "운영 오버헤드 최소화" 요구 사항에 위배됩니다.</p>`,
    disc: [
      { ans: 'C (72%)', txt: 'CloudFront(A)와 API Gateway(B)는 비표준 HTTP 메서드(LINK/UNLINK/LOCK/UNLOCK) 미지원으로 탈락. D는 운영 오버헤드 과다. GA는 ALB를 엔드포인트로 지원하며 Layer 4 수준에서 비표준 메서드 투명 전달.' }
    ]
  },
  {
    n: 209,
    en: `A company runs an IoT application in the AWS Cloud. The company has millions of sensors that collect data from houses in the United States. The sensors use the MQTT protocol to connect and send data to a custom MQTT broker. The MQTT broker stores the data on a single Amazon EC2 instance. The sensors connect to the broker through the domain named iot.example.com. The company uses Amazon Route 53 as its DNS service. The company stores the data in Amazon DynamoDB.<br><br>On several occasions, the amount of data has overloaded the MQTT broker and has resulted in lost sensor data. The company must improve the reliability of the solution.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 AWS 클라우드에서 IoT 애플리케이션을 실행하고 있습니다. 이 회사는 미국 내 주택에서 데이터를 수집하는 수백만 개의 센서를 보유하고 있습니다. 센서는 MQTT 프로토콜을 사용하여 사용자 정의 MQTT 브로커에 연결하고 데이터를 보냅니다. MQTT 브로커는 단일 Amazon EC2 인스턴스에 데이터를 저장합니다. 센서는 iot.example.com 도메인을 통해 브로커에 연결됩니다. 이 회사는 DNS 서비스로 Amazon Route 53을 사용합니다. 회사는 Amazon DynamoDB에 데이터를 저장합니다.<br><br>여러 차례 데이터 양으로 인해 MQTT 브로커가 과부하되어 센서 데이터가 손실되었습니다. 회사는 솔루션의 신뢰성을 향상시켜야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an Application Load Balancer (ALB) and an Auto Scaling group for the MQTT broker. Use the Auto Scaling group as the target for the ALB. Update the DNS record in Route 53 to an alias record. Point the alias record to the ALB. Use the MQTT broker to store the data.`, ko: `ALB와 MQTT 브로커용 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹을 ALB의 대상으로 사용합니다. Route 53의 DNS 레코드를 별칭 레코드로 업데이트하고 ALB를 가리키도록 합니다. MQTT 브로커를 사용하여 데이터를 저장합니다.` },
      { k: 'B', en: `Set up AWS IoT Core to receive the sensor data. Create and configure a custom domain to connect to AWS IoT Core. Update the DNS record in Route 53 to point to the AWS IoT Core Data-ATS endpoint. Configure an AWS IoT rule to store the data.`, ko: `센서 데이터를 수신하도록 AWS IoT Core를 설정합니다. AWS IoT Core에 연결할 사용자 지정 도메인을 생성하고 구성합니다. Route 53의 DNS 레코드를 AWS IoT Core Data-ATS 엔드포인트를 가리키도록 업데이트합니다. 데이터를 저장하도록 AWS IoT 규칙을 구성합니다.` },
      { k: 'C', en: `Create a Network Load Balancer (NLB). Set the MQTT broker as the target. Create an AWS Global Accelerator accelerator. Set the NLB as the endpoint for the accelerator. Update the DNS record in Route 53 to a multivalue answer record. Set the Global Accelerator IP addresses as values. Use the MQTT broker to store the data.`, ko: `NLB를 생성합니다. MQTT 브로커를 대상으로 설정합니다. AWS Global Accelerator 액셀러레이터를 생성합니다. NLB를 가속기의 엔드포인트로 설정합니다. Route 53의 DNS 레코드를 다중값 응답 레코드로 업데이트하고 Global Accelerator IP 주소를 값으로 설정합니다. MQTT 브로커를 사용하여 데이터를 저장합니다.` },
      { k: 'D', en: `Set up AWS IoT Greengrass to receive the sensor data. Update the DNS record in Route 53 to point to the AWS IoT Greengrass endpoint. Configure an AWS IoT rule to invoke an AWS Lambda function to store the data.`, ko: `센서 데이터를 수신하도록 AWS IoT Greengrass를 설정합니다. Route 53의 DNS 레코드를 AWS IoT Greengrass 엔드포인트를 가리키도록 업데이트합니다. 데이터를 저장하기 위해 AWS Lambda 함수를 호출하도록 AWS IoT 규칙을 구성합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS IoT Core</span></p>
<p>AWS IoT Core는 수십억 개의 IoT 디바이스로부터 MQTT 연결을 완전 관리형으로 처리하는 서비스입니다. 단일 EC2 인스턴스의 커스텀 MQTT 브로커가 겪는 과부하와 단일 장애 지점(SPOF) 문제를 근본적으로 해결합니다.</p>
<p>사용자 지정 도메인(iot.example.com)을 AWS IoT Core의 Data-ATS 엔드포인트에 연결하여 기존 센서 설정 변경을 최소화합니다. IoT 규칙 엔진으로 수신 데이터를 DynamoDB 등 다양한 AWS 서비스로 라우팅할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/iot/latest/developerguide/custom-endpoints.html" target="_blank">AWS 공식 문서 - IoT Core 사용자 지정 도메인</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ALB와 Auto Scaling으로 수평 확장을 시도하지만, 여전히 커스텀 MQTT 브로커를 직접 관리해야 하며 운영 복잡성이 높습니다. IoT Core와 달리 완전 관리형이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — NLB + Global Accelerator 조합은 지역 분산에 유용하지만, 여전히 자체 MQTT 브로커를 운영해야 합니다. 자동 확장과 관리를 제공하지 않아 근본적인 신뢰성 문제를 해결하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS IoT Greengrass는 <strong>엣지 컴퓨팅</strong> 시나리오(디바이스에서 로컬 처리)에 사용됩니다. 클라우드 기반의 대규모 MQTT 연결 수신에는 IoT Core가 적합합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'IoT Core는 수백만 디바이스의 MQTT 연결을 완전 관리형으로 처리하여 과부하 문제 근본 해결. A는 여전히 커스텀 브로커 운영 필요. D의 Greengrass는 엣지 컴퓨팅 전용.' }
    ]
  },
  {
    n: 210,
    en: `A company has Linux-based Amazon EC2 instances. Users must access the instances by using SSH with EC2 SSH key pairs. Each machine requires a unique EC2 key pair.<br><br>The company wants to implement a key rotation policy that will, upon request, automatically rotate all the EC2 key pairs and keep the keys in a securely encrypted place. The company will accept less than 1 minute of downtime during key rotation.<br><br>Which solution will meet these requirements?`,
    ko: `회사에 Linux 기반 Amazon EC2 인스턴스가 있습니다. 사용자는 EC2 SSH 키 페어와 함께 SSH를 사용하여 인스턴스에 액세스해야 합니다. 각 머신에는 고유한 EC2 키 쌍이 필요합니다.<br><br>회사는 요청 시 모든 EC2 키 쌍을 자동으로 교체하고 키를 안전하게 암호화된 장소에 보관하는 키 교체 정책을 구현하려고 합니다. 회사는 키 교체 중에 1분 미만의 가동 중지 시간을 허용합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Store all the keys in AWS Secrets Manager. Define a Secrets Manager rotation schedule to invoke an AWS Lambda function to generate new key pairs. Replace public keys on EC2 instances. Update the private keys in Secrets Manager.`, ko: `AWS Secrets Manager에 모든 키를 저장합니다. AWS Lambda 함수를 호출하여 새 키 쌍을 생성하도록 Secrets Manager 교체 일정을 정의합니다. EC2 인스턴스의 공개 키를 교체합니다. Secrets Manager에서 개인 키를 업데이트합니다.` },
      { k: 'B', en: `Store all the keys in Parameter Store, a capability of AWS Systems Manager, as a string. Define a Systems Manager maintenance window to invoke an AWS Lambda function to generate new key pairs. Replace public keys on EC2 instances. Update the private keys in Parameter Store.`, ko: `AWS Systems Manager의 기능인 Parameter Store에 모든 키를 문자열로 저장합니다. AWS Lambda 함수를 호출하여 새 키 쌍을 생성하도록 Systems Manager 유지 관리 기간을 정의합니다. EC2 인스턴스의 공개 키를 교체합니다. Parameter Store에서 개인 키를 업데이트합니다.` },
      { k: 'C', en: `Import the EC2 key pairs into AWS Key Management Service (AWS KMS). Configure automatic key rotation for these key pairs. Create an Amazon EventBridge scheduled rule to invoke an AWS Lambda function to initiate the key rotation in AWS KMS.`, ko: `EC2 키 쌍을 AWS Key Management Service(AWS KMS)로 가져옵니다. 이러한 키 쌍에 대해 자동 키 교체를 구성합니다. AWS KMS에서 키 교체를 시작하기 위해 AWS Lambda 함수를 호출하는 Amazon EventBridge 예약 규칙을 생성합니다.` },
      { k: 'D', en: `Add all the EC2 instances to Fleet Manager, a capability of AWS Systems Manager. Define a Systems Manager maintenance window to issue a Systems Manager Run Command document to generate new key pairs and to rotate public keys to all the instances in Fleet Manager.`, ko: `AWS Systems Manager의 기능인 Fleet Manager에 모든 EC2 인스턴스를 추가합니다. Systems Manager 유지 관리 기간을 정의하여 Systems Manager Run Command 문서를 발행하여 새로운 키 쌍을 생성하고 Fleet Manager의 모든 인스턴스에 대한 공개 키를 교체합니다.` },
    ],
    answer: ['A'],
    vote: '78% A',
    explain: `<p><span class="mark-ok">✅ A — AWS Secrets Manager + Lambda 교체</span></p>
<p>AWS Secrets Manager는 SSH 키 쌍을 비밀로 저장하고, 교체 일정(on-demand 포함)에 따라 Lambda 함수를 호출하여 자동 교체를 지원합니다. 각 EC2 인스턴스에 고유한 키 쌍을 별도 비밀로 저장하고 개별 교체가 가능합니다.</p>
<p>교체 프로세스: Lambda가 새 키 쌍 생성 → EC2 인스턴스의 <code>~/.ssh/authorized_keys</code>에 새 공개 키 추가(기존 키도 잠시 유지) → Secrets Manager에 새 개인 키 저장 → 기존 공개 키 제거. 이 절차로 1분 미만 가동 중지 시간을 달성할 수 있습니다.</p>
<p><a href="https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-manager-securely-store-rotate-ssh-key-pairs/" target="_blank">AWS 공식 블로그 - Secrets Manager로 SSH 키 쌍 교체</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Parameter Store는 키 문자열을 저장할 수 있지만, <strong>비밀 교체 자동화를 위한 기본 제공 교체 일정이 없습니다.</strong> 또한 키를 평문 String이 아닌 SecureString으로 저장해야 보안 요건을 충족합니다. Systems Manager 유지 관리 기간은 최소 1시간이 필요할 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS KMS는 <strong>암호화 키 관리</strong>에 사용되며, SSH 키 쌍 저장 및 EC2 인스턴스의 authorized_keys 교체를 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Fleet Manager의 Run Command로 키를 생성·교체할 수 있지만, 생성된 <strong>개인 키를 안전하게 암호화된 장소에 보관</strong>하는 메커니즘이 없습니다. Secrets Manager처럼 암호화 스토리지를 제공하지 않습니다.</p>`,
    disc: [
      { ans: 'A (78%)', txt: 'Secrets Manager는 SSH 키를 안전하게 저장하고 Lambda 기반 자동 교체를 지원하는 AWS 모범 사례. D는 키를 안전하게 보관할 수단 없음. C는 KMS가 SSH 키 쌍 관리에 부적합.' }
    ]
  },
];