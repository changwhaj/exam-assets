window.QS_SET40 = [
  {
    n: 391,

    en: `<p>A financial company needs to create a separate AWS account for a new digital wallet application. The company uses AWS Organizations to manage its accounts. A solutions architect uses the IAM user Support1 from the management account to create a new member account with finance1@example.com as the email address.</p><p>What should the solutions architect do to create IAM users in the new member account?</p>`,
    ko: `<p>금융 회사는 새로운 디지털 지갑 애플리케이션을 위해 별도의 AWS 계정을 생성해야 합니다. 회사는 AWS Organizations를 사용하여 계정을 관리합니다. 솔루션 아키텍트는 관리 계정의 IAM 사용자 Support1을 사용하여 이메일 주소가 finance1@example.com인 새 멤버 계정을 생성합니다.</p><p>새 멤버 계정에 IAM 사용자를 생성하려면 솔루션 아키텍트가 무엇을 해야 합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Sign in to the AWS Management Console with AWS account root user credentials by using the 64-character password from the initial AWS Organizations email sent to finance1@example.com. Set up the IAM users as required.`, ko:`finance1@example.com으로 전송된 초기 AWS Organizations 이메일의 64자 암호를 사용하여 AWS 계정 루트 사용자 자격 증명으로 AWS Management Console에 로그인합니다. 필요에 따라 IAM 사용자를 설정합니다.` },
      { k:'B', en:`From the management account, switch roles to assume the OrganizationAccountAccessRole role with the account ID of the new member account. Set up the IAM users as required.`, ko:`관리 계정에서 역할을 전환하여 새 멤버 계정의 계정 ID로 OrganizationAccountAccessRole 역할을 수임합니다. 필요에 따라 IAM 사용자를 설정합니다.` },
      { k:'C', en:`Go to the AWS Management Console sign-in page. Choose "Sign in using root account credentials." Sign in by using the email address finance1@example.com and the management account's root password. Set up the IAM users as required.`, ko:`AWS Management Console 로그인 페이지로 이동합니다. "루트 계정 자격 증명을 사용하여 로그인"을 선택합니다. 이메일 주소 finance1@example.com과 관리 계정의 루트 비밀번호를 사용하여 로그인합니다. 필요에 따라 IAM 사용자를 설정합니다.` },
      { k:'D', en:`Go to the AWS Management Console sign-in page. Sign in by using the account ID of the new member account and the Support1 IAM credentials. Set up the IAM users as required.`, ko:`AWS Management Console 로그인 페이지로 이동합니다. 새 멤버 계정의 계정 ID와 Support1 IAM 자격 증명을 사용하여 로그인합니다. 필요에 따라 IAM 사용자를 설정합니다.` }
    ],

    answer: ['B'],
    vote: '73% B',

    explain: `<p><span class="mark-ok">✅ B — OrganizationAccountAccessRole을 수임하여 새 멤버 계정 접근</span></p>
<p>AWS Organizations를 통해 멤버 계정을 생성하면 AWS는 해당 계정에 <strong>OrganizationAccountAccessRole</strong>이라는 IAM 역할을 자동으로 생성합니다. 이 역할은 멤버 계정에 대한 전체 관리 권한을 가집니다. 관리 계정에서 이 역할을 수임(Switch Role)함으로써 루트 자격 증명을 공유하지 않고도 멤버 계정에 안전하게 접근할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html" target="_blank">AWS 공식 문서 - Organizations 멤버 계정 접근</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — 64자 임시 비밀번호는 실제로 Organizations가 멤버 계정 생성 시 발송하지 않는 방식이며, 루트 사용자 로그인은 보안 모범 사례에 어긋납니다.</p>
<p><span class="mark-no">❌ C</span> — management 계정의 루트 비밀번호로 멤버 계정에 로그인하는 것은 불가능합니다. 계정마다 독립된 루트 자격 증명이 있습니다.</p>
<p><span class="mark-no">❌ D</span> — Support1 IAM 사용자는 관리 계정에만 존재하며 멤버 계정의 계정 ID로 직접 로그인하는 방식은 지원되지 않습니다. IAM 사용자는 자동으로 교차 계정 권한이 부여되지 않습니다.</p>`,

    disc: [
      { ans:'B (73%)', txt:'OrganizationAccountAccessRole은 Organizations를 통해 생성된 멤버 계정에 자동으로 생성되며, 관리 계정에서 이 역할을 수임하는 것이 올바른 접근 방식입니다.' },
      { ans:'D (27%)', txt:'일부는 Support1이 자동으로 멤버 계정 관리자가 된다고 오해했으나, IAM 사용자는 자동으로 생성되지 않으며 OrganizationAccountAccessRole을 통해서만 접근 가능합니다.' }
    ]
  },

  {
    n: 392,

    en: `<p>A car rental company has built a serverless REST API to provide data to its mobile app. The app consists of an Amazon API Gateway API with a Regional endpoint, AWS Lambda functions, and an Amazon Aurora MySQL Serverless DB cluster. The company recently opened the API to mobile apps of partners. A significant increase in the number of requests resulted, causing sporadic database memory errors.</p><p>Analysis of the API traffic indicates that clients are making multiple HTTP GET requests for the same queries in a short period of time. Traffic is concentrated during business hours, with spikes around holidays and other events.</p><p>The company needs to improve its ability to support the additional usage while minimizing the increase in costs associated with the solution.</p><p>Which strategy meets these requirements?</p>`,
    ko: `<p>자동차 렌탈 회사는 모바일 앱에 데이터를 제공하기 위해 서버리스 REST API를 구축했습니다. 이 앱은 지역 엔드포인트가 있는 Amazon API Gateway API, AWS Lambda 함수, Amazon Aurora MySQL 서버리스 DB 클러스터로 구성됩니다. 회사는 최근 파트너사의 모바일 앱에 API를 개방했습니다. 요청 수가 크게 증가하여 산발적인 데이터베이스 메모리 오류가 발생했습니다.</p><p>API 트래픽 분석에 따르면 클라이언트는 짧은 시간 내에 동일한 쿼리에 대해 여러 HTTP GET 요청을 하고 있는 것으로 나타났습니다. 업무 시간 동안 트래픽이 집중되며 휴일 및 기타 행사 기간에는 트래픽이 급증합니다.</p><p>회사는 솔루션과 관련된 비용 증가를 최소화하면서 추가 사용량을 지원하는 능력을 향상시켜야 합니다.</p><p>이러한 요구 사항을 충족하는 전략은 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Convert the API Gateway Regional endpoint to an edge-optimized endpoint. Enable caching in the production stage.`, ko:`API Gateway 지역 엔드포인트를 엣지 최적화 엔드포인트로 변환합니다. 프로덕션 단계에서 캐싱을 활성화합니다.` },
      { k:'B', en:`Implement an Amazon ElastiCache for Redis cache to store the results of the database calls. Modify the Lambda functions to use the cache.`, ko:`Redis 캐시용 Amazon ElastiCache를 구현하여 데이터베이스 호출 결과를 저장합니다. 캐시를 사용하도록 Lambda 함수를 수정합니다.` },
      { k:'C', en:`Modify the Aurora Serverless DB cluster configuration to increase the maximum amount of available memory.`, ko:`Aurora Serverless DB 클러스터 구성을 수정하여 사용 가능한 최대 메모리 양을 늘립니다.` },
      { k:'D', en:`Enable throttling in the API Gateway production stage. Set the rate and burst values to limit the incoming calls.`, ko:`API Gateway 프로덕션 단계에서 제한(throttling)을 활성화합니다. 수신 호출을 제한하려면 속도와 버스트 값을 설정합니다.` }
    ],

    answer: ['A'],
    vote: '54% A',

    explain: `<p><span class="mark-ok">✅ A — API Gateway 엣지 최적화 엔드포인트로 전환 후 캐싱 활성화</span></p>
<p>클라이언트가 동일한 쿼리에 대해 반복적으로 GET 요청을 보내는 상황에서 API Gateway 레벨의 캐싱은 Lambda와 Aurora에 도달하는 요청 수를 직접 줄입니다. 엣지 최적화 엔드포인트는 CloudFront 엣지 로케이션에서 응답을 캐시하여 데이터베이스 부하를 경감시킵니다. ElastiCache for Redis(B)에 비해 추가 인프라 없이 API Gateway 기능 자체를 활용하므로 비용 증가가 최소화됩니다.</p>
<p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html" target="_blank">AWS 공식 문서 - API Gateway 캐싱</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — ElastiCache for Redis는 효과적인 캐싱 솔루션이지만, 항상 실행 중인 노드에 대한 비용이 발생하며 낮은 트래픽 시간대에도 비용이 부과됩니다. "비용 증가 최소화" 요건에 부합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 메모리를 늘리는 것은 근본 원인(반복 요청)을 해결하지 않으며 비용도 증가합니다.</p>
<p><span class="mark-no">❌ D</span> — 제한(throttling)은 요청을 거부하여 사용자 경험을 저하시키고 추가 사용량을 지원하는 것이 아니라 차단하는 방식입니다.</p>`,

    disc: [
      { ans:'A (54%)', txt:'API Gateway 캐싱은 추가 인프라 없이 동일 쿼리 반복 요청을 처리하므로 비용 효율적입니다. 엣지 최적화는 CloudFront 엣지에서 캐시하여 백엔드 부하를 줄입니다.' },
      { ans:'B (46%)', txt:'ElastiCache for Redis는 데이터베이스 레이어의 캐싱에 효과적이나 상시 실행 비용이 발생하여 비용 최소화 요건에는 A가 더 적합합니다.' }
    ]
  },

  {
    n: 393,

    en: `<p>A company is migrating an on-premises application and a MySQL database to AWS. The application processes highly sensitive data, and new data is constantly updated in the database. The data must not be transferred over the internet. The company also must encrypt the data in transit and at rest.</p><p>The database is 5 TB in size. The company already has created the database schema in an Amazon RDS for MySQL DB instance. The company has set up a 1 Gbps AWS Direct Connect connection to AWS. The company also has set up a public VIF and a private VIF. A solutions architect needs to design a solution that will migrate the data to AWS with the least possible downtime.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 온프레미스 애플리케이션과 MySQL 데이터베이스를 AWS로 마이그레이션하고 있습니다. 애플리케이션은 매우 민감한 데이터를 처리하며 데이터베이스에 새로운 데이터가 지속적으로 업데이트됩니다. 데이터는 인터넷을 통해 전송되어서는 안 됩니다. 또한 회사는 전송 중인 데이터와 저장 중인 데이터를 암호화해야 합니다.</p><p>데이터베이스 크기는 5TB입니다. 회사는 이미 MySQL DB 인스턴스용 Amazon RDS에 데이터베이스 스키마를 생성했습니다. 회사는 AWS에 1Gbps AWS Direct Connect 연결을 설정했습니다. 회사는 또한 퍼블릭 VIF와 프라이빗 VIF를 설정했습니다. 솔루션 아키텍트는 가동 중지 시간을 최소화하면서 데이터를 AWS로 마이그레이션하는 솔루션을 설계해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Perform a database backup. Copy the backup files to an AWS Snowball Edge Storage Optimized device. Import the backup to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.`, ko:`데이터베이스 백업을 수행합니다. 백업 파일을 AWS Snowball Edge Storage Optimized 디바이스에 복사합니다. 백업을 Amazon S3로 가져옵니다. 유휴 암호화에는 Amazon S3 관리형 암호화 키(SSE-S3)를 사용한 서버 측 암호화를 사용합니다. 전송 중 암호화에는 TLS를 사용합니다. Amazon S3에서 DB 인스턴스로 데이터를 가져옵니다.` },
      { k:'B', en:`Use AWS Database Migration Service (AWS DMS) to migrate the data to AWS. Create a DMS replication instance in a private subnet. Create VPC endpoints for AWS DMS. Configure a DMS task to copy data from the on-premises database to the DB instance by using full load plus change data capture (CDC). Use the AWS Key Management Service (AWS KMS) default key for encryption at rest. Use TLS for encryption in transit.`, ko:`AWS Database Migration Service(AWS DMS)를 사용하여 데이터를 AWS로 마이그레이션합니다. 프라이빗 서브넷에 DMS 복제 인스턴스를 생성합니다. AWS DMS용 VPC 엔드포인트를 생성합니다. 전체 로드와 변경 데이터 캡처(CDC)를 사용하여 온프레미스 데이터베이스에서 DB 인스턴스로 데이터를 복사하도록 DMS 작업을 구성합니다. 유휴 암호화에는 AWS Key Management Service(AWS KMS) 기본 키를 사용합니다. 전송 중 암호화에는 TLS를 사용합니다.` },
      { k:'C', en:`Perform a database backup. Use AWS DataSync to transfer the backup files to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.`, ko:`데이터베이스 백업을 수행합니다. AWS DataSync를 사용하여 백업 파일을 Amazon S3로 전송합니다. 유휴 암호화에는 Amazon S3 관리형 암호화 키(SSE-S3)를 사용한 서버 측 암호화를 사용합니다. 전송 중 암호화에는 TLS를 사용합니다. Amazon S3에서 DB 인스턴스로 데이터를 가져옵니다.` },
      { k:'D', en:`Use Amazon S3 File Gateway. Set up a private connection to Amazon S3 by using AWS PrivateLink. Perform a database backup. Copy the backup files to Amazon S3. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3) for encryption at rest. Use TLS for encryption in transit. Import the data from Amazon S3 to the DB instance.`, ko:`Amazon S3 파일 게이트웨이를 사용합니다. AWS PrivateLink를 사용하여 Amazon S3에 대한 프라이빗 연결을 설정합니다. 데이터베이스 백업을 수행합니다. 백업 파일을 Amazon S3에 복사합니다. 유휴 암호화에는 Amazon S3 관리형 암호화 키(SSE-S3)를 사용한 서버 측 암호화를 사용합니다. 전송 중 암호화에는 TLS를 사용합니다. Amazon S3에서 DB 인스턴스로 데이터를 가져옵니다.` }
    ],

    answer: ['B'],
    vote: '100% B',

    explain: `<p><span class="mark-ok">✅ B — AWS DMS + CDC로 최소 다운타임 마이그레이션</span></p>
<p>AWS DMS의 <strong>전체 로드 + CDC(Change Data Capture)</strong> 조합은 마이그레이션 중에도 온프레미스 데이터베이스가 계속 운영되면서 변경사항을 실시간으로 동기화할 수 있어 다운타임을 최소화합니다. Direct Connect의 프라이빗 VIF를 통해 인터넷을 경유하지 않고 데이터를 전송하며, TLS로 전송 중 암호화, KMS로 저장 중 암호화를 제공합니다.</p>
<p><a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_BestPractices.html" target="_blank">AWS 공식 문서 - AWS DMS 모범 사례</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — Snowball Edge는 인터넷이 없는 환경의 대용량 데이터 이전에 적합하지만, 물리적 장치 배송에 시간이 걸리고 CDC를 지원하지 않아 다운타임이 발생합니다.</p>
<p><span class="mark-no">❌ C</span> — DataSync는 파일 데이터 전송 도구로 데이터베이스 마이그레이션에 적합하지 않으며, S3 경유 후 RDS 임포트 방식은 CDC를 지원하지 않아 다운타임이 발생합니다.</p>
<p><span class="mark-no">❌ D</span> — S3 File Gateway를 통한 백업 복사 후 임포트 방식은 CDC를 지원하지 않으며, 5TB 데이터를 S3 경유로 이동하면 마이그레이션 시간이 길어집니다.</p>`,

    disc: [
      { ans:'B (100%)', txt:'스키마가 이미 생성된 상태에서 DMS + CDC를 사용하면 전체 로드 후 증분 변경사항을 지속 동기화하여 다운타임 없이 마이그레이션이 가능합니다. Direct Connect 프라이빗 VIF를 통해 인터넷 미경유 요건도 충족합니다.' }
    ]
  },

  {
    n: 394,

    en: `<p>A company is deploying a new cluster for big data analytics on AWS. The cluster will run across many Linux Amazon EC2 instances that are spread across multiple Availability Zones.</p><p>All of the nodes in the cluster must have read and write access to common underlying file storage. The file storage must be highly available, must be resilient, must be compatible with the Portable Operating System Interface (POSIX), and must accommodate high levels of throughput.</p><p>Which storage solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS에서 빅 데이터 분석을 위한 새로운 클러스터를 배포하고 있습니다. 클러스터는 여러 가용 영역에 분산되어 있는 여러 Linux Amazon EC2 인스턴스에서 실행됩니다.</p><p>클러스터의 모든 노드에는 공통 기본 파일 스토리지에 대한 읽기 및 쓰기 액세스 권한이 있어야 합니다. 파일 스토리지는 가용성이 높고 복원력이 있어야 하며 POSIX(이동식 운영 체제 인터페이스)와 호환되어야 하며 높은 수준의 처리량을 수용해야 합니다.</p><p>이러한 요구 사항을 충족하는 스토리지 솔루션은 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Provision an AWS Storage Gateway file gateway NFS file share that is attached to an Amazon S3 bucket. Mount the NFS file share on each EC2 instance in the cluster.`, ko:`Amazon S3 버킷에 연결된 AWS Storage Gateway 파일 게이트웨이 NFS 파일 공유를 프로비저닝합니다. 클러스터의 각 EC2 인스턴스에 NFS 파일 공유를 탑재합니다.` },
      { k:'B', en:`Provision a new Amazon Elastic File System (Amazon EFS) file system that uses General Purpose performance mode. Mount the EFS file system on each EC2 instance in the cluster.`, ko:`범용 성능 모드를 사용하는 새로운 Amazon Elastic File System(Amazon EFS) 파일 시스템을 프로비저닝합니다. 클러스터의 각 EC2 인스턴스에 EFS 파일 시스템을 탑재합니다.` },
      { k:'C', en:`Provision a new Amazon Elastic Block Store (Amazon EBS) volume that uses the io2 volume type. Attach the EBS volume to all of the EC2 instances in the cluster.`, ko:`io2 볼륨 유형을 사용하는 새로운 Amazon Elastic Block Store(Amazon EBS) 볼륨을 프로비저닝합니다. 클러스터의 모든 EC2 인스턴스에 EBS 볼륨을 연결합니다.` },
      { k:'D', en:`Provision a new Amazon Elastic File System (Amazon EFS) file system that uses Max I/O performance mode. Mount the EFS file system on each EC2 instance in the cluster.`, ko:`최대 I/O 성능 모드를 사용하는 새로운 Amazon Elastic File System(Amazon EFS) 파일 시스템을 프로비저닝합니다. 클러스터의 각 EC2 인스턴스에 EFS 파일 시스템을 탑재합니다.` }
    ],

    answer: ['D'],
    vote: '68% D',

    explain: `<p><span class="mark-ok">✅ D — EFS Max I/O 성능 모드</span></p>
<p>빅 데이터 분석은 수백~수천 개의 EC2 인스턴스가 병렬로 파일 시스템에 접근하는 고도로 병렬화된 워크로드입니다. EFS의 <strong>Max I/O 성능 모드</strong>는 이러한 워크로드를 위해 설계되었으며, 데이터 분석, 미디어 처리, 머신러닝 등 높은 집계 처리량과 IOPS가 필요한 경우에 적합합니다. EFS는 다중 AZ에 걸쳐 고가용성과 복원력을 제공하며 POSIX 호환입니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/storage-efs.html" target="_blank">AWS 공식 문서 - EFS 스토리지 성능</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — Storage Gateway는 S3에 대한 NFS 액세스를 제공하지만 빅 데이터 분석의 높은 처리량 요구에 최적화되어 있지 않으며 지연 시간이 더 높습니다.</p>
<p><span class="mark-no">❌ B</span> — EFS 범용 모드는 대기 시간에 민감한 워크로드에 적합하며 AWS는 일반적으로 권장하지만, 수천 개의 인스턴스가 병렬 접근하는 빅 데이터 분석에서는 Max I/O가 더 높은 집계 처리량을 제공합니다.</p>
<p><span class="mark-no">❌ C</span> — EBS io2 볼륨은 한 번에 단일 EC2 인스턴스(또는 Multi-Attach 시 동일 AZ의 일부 인스턴스)에만 연결 가능하므로 다중 AZ에 걸친 공유 스토리지로 사용할 수 없습니다.</p>`,

    disc: [
      { ans:'D (68%)', txt:'데이터 분석 워크로드에서 수백~수천 개의 EC2가 병렬 접근할 때 Max I/O 모드가 더 높은 집계 처리량을 제공합니다. AWS ECS 모범 사례 가이드도 데이터 분석에 Max I/O를 권장합니다.' },
      { ans:'B (30%)', txt:'AWS 공식 문서에서 Max I/O의 작업별 지연 시간이 높기 때문에 범용 모드를 권장한다는 의견도 있으나, 빅 데이터 분석의 처리량 우선 요건에는 D가 더 적합합니다.' }
    ]
  },

  {
    n: 395,

    en: `<p>A company hosts a software as a service (SaaS) solution on AWS. The solution has an Amazon API Gateway API that serves an HTTPS endpoint. The API uses AWS Lambda functions for compute. The Lambda functions store data in an Amazon Aurora Serverless v1 database.</p><p>The company used the AWS Serverless Application Model (AWS SAM) to deploy the solution. The solution extends across multiple Availability Zones and has no disaster recovery (DR) plan.</p><p>A solutions architect must design a DR strategy that can recover the solution in another AWS Region. The solution has an RTO of 5 minutes and an RPO of 1 minute.</p><p>What should the solutions architect do to meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS에서 SaaS(Software as a Service) 솔루션을 호스팅합니다. 솔루션에는 HTTPS 엔드포인트를 제공하는 Amazon API Gateway API가 있습니다. API는 컴퓨팅을 위해 AWS Lambda 함수를 사용합니다. Lambda 함수는 Amazon Aurora Serverless v1 데이터베이스에 데이터를 저장합니다.</p><p>이 회사는 AWS Serverless Application Model(AWS SAM)을 사용하여 솔루션을 배포했습니다. 이 솔루션은 여러 가용 영역에 걸쳐 확장되며 재해 복구(DR) 계획이 없습니다.</p><p>솔루션 아키텍트는 다른 AWS 리전에서 솔루션을 복구할 수 있는 DR 전략을 설계해야 합니다. 이 솔루션의 RTO는 5분, RPO는 1분입니다.</p><p>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Create a read replica of the Aurora Serverless v1 database in the target Region. Use AWS SAM to create a runbook to deploy the solution to the target Region. Promote the read replica to primary in case of disaster.`, ko:`대상 리전에 Aurora Serverless v1 데이터베이스의 읽기 전용 복제본을 생성합니다. AWS SAM을 사용하여 Runbook을 생성하여 대상 리전에 솔루션을 배포합니다. 재해 발생 시 읽기 전용 복제본을 기본 복제본으로 승격합니다.` },
      { k:'B', en:`Change the Aurora Serverless v1 database to a standard Aurora MySQL global database that extends across the source Region and the target Region. Use AWS SAM to create a runbook to deploy the solution to the target Region.`, ko:`Aurora Serverless v1 데이터베이스를 원본 지역과 대상 지역에 걸쳐 확장되는 표준 Aurora MySQL 글로벌 데이터베이스로 변경합니다. AWS SAM을 사용하여 Runbook을 생성하여 대상 리전에 솔루션을 배포합니다.` },
      { k:'C', en:`Create an Aurora Serverless v1 DB cluster that has multiple writer instances in the target Region. Launch the solution in the target Region. Configure the two Regional solutions to work in an active-passive configuration.`, ko:`대상 리전에 여러 라이터 인스턴스가 있는 Aurora Serverless v1 DB 클러스터를 생성합니다. 대상 지역에서 솔루션을 시작합니다. 활성-수동 구성에서 작동하도록 두 지역 솔루션을 구성합니다.` },
      { k:'D', en:`Change the Aurora Serverless v1 database to a standard Aurora MySQL global database that extends across the source Region and the target Region. Launch the solution in the target Region. Configure the two Regional solutions to work in an active-passive configuration.`, ko:`Aurora Serverless v1 데이터베이스를 원본 지역과 대상 지역에 걸쳐 확장되는 표준 Aurora MySQL 글로벌 데이터베이스로 변경합니다. 대상 지역에서 솔루션을 시작합니다. 활성-수동 구성에서 작동하도록 두 지역 솔루션을 구성합니다.` }
    ],

    answer: ['D'],
    vote: '90% D',

    explain: `<p><span class="mark-ok">✅ D — Aurora Global Database + 액티브-패시브 구성</span></p>
<p><strong>Aurora Serverless v1</strong>은 읽기 복제본, 리전 간 복제본, 글로벌 데이터베이스를 지원하지 않습니다. 따라서 먼저 표준 Aurora MySQL로 마이그레이션해야 합니다. Aurora Global Database는 1초 미만의 RPO와 1분 미만의 RTO를 제공하여 RPO 1분, RTO 5분 요건을 충족합니다. 대상 리전에 솔루션을 미리 배포하여 액티브-패시브 구성을 유지하면 재해 시 신속한 복구가 가능합니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html" target="_blank">AWS 공식 문서 - Aurora Global Database</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — Aurora Serverless v1은 읽기 복제본을 지원하지 않습니다. 이 옵션은 기술적으로 불가능합니다.</p>
<p><span class="mark-no">❌ B</span> — Aurora Global Database로의 전환은 올바르지만, SAM Runbook으로 대상 리전에 배포하는 방식은 재해 시 배포 시간이 추가되어 RTO 5분을 초과할 수 있습니다. 대상 리전에 미리 솔루션이 실행 중이어야 합니다.</p>
<p><span class="mark-no">❌ C</span> — Aurora Serverless v1은 다중 라이터 인스턴스를 지원하지 않으며 리전 간 복제도 지원하지 않습니다.</p>`,

    disc: [
      { ans:'D (90%)', txt:'Aurora Serverless v1의 핵심 제약(읽기 복제본 미지원, 글로벌 DB 미지원)을 인식하고 표준 Aurora MySQL Global DB로 전환해야 합니다. 대상 리전에 솔루션을 미리 배포하여 액티브-패시브로 운영해야 RTO 5분을 충족할 수 있습니다.' }
    ]
  },

  {
    n: 396,

    en: `<p>A company owns a chain of travel agencies and is running an application in the AWS Cloud. Company employees use the application to search for information about travel destinations. Destination content is updated four times each year.</p><p>Two fixed Amazon EC2 instances serve the application. The company uses an Amazon Route 53 public hosted zone with a multivalue record of travel.example.com that returns the Elastic IP addresses for the EC2 instances. The application uses Amazon DynamoDB as its primary data store. The company uses a self-hosted Redis instance as a caching solution.</p><p>During content updates, the load on the EC2 instances and the caching solution increases drastically. This increased load has led to downtime on several occasions. A solutions architect must update the application so that the application is highly available and can handle the load that is generated by the content updates.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 여행사 체인을 소유하고 있으며 AWS 클라우드에서 애플리케이션을 실행하고 있습니다. 회사 직원들은 여행지에 대한 정보를 검색하기 위해 애플리케이션을 사용합니다. 목적지 콘텐츠는 매년 4회 업데이트됩니다.</p><p>두 개의 고정 Amazon EC2 인스턴스가 애플리케이션을 제공합니다. 이 회사는 EC2 인스턴스에 대한 탄력적 IP 주소를 반환하는 travel.example.com의 다중 값 레코드가 있는 Amazon Route 53 공용 호스팅 영역을 사용합니다. 애플리케이션은 Amazon DynamoDB를 기본 데이터 스토어로 사용합니다. 회사는 캐싱 솔루션으로 자체 호스팅 Redis 인스턴스를 사용합니다.</p><p>콘텐츠를 업데이트하는 동안 EC2 인스턴스 및 캐싱 솔루션의 로드가 급격히 증가합니다. 이러한 부하 증가로 인해 여러 차례 가동 중지 시간이 발생했습니다. 솔루션 설계자는 애플리케이션의 가용성이 높고 콘텐츠 업데이트로 생성되는 로드를 처리할 수 있도록 애플리케이션을 업데이트해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB. Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the EC2 instances before the content updates.`, ko:`DynamoDB Accelerator(DAX)를 인 메모리 캐시로 설정합니다. DAX를 사용하도록 애플리케이션을 업데이트합니다. EC2 인스턴스에 대한 Auto Scaling 그룹을 생성합니다. ALB(Application Load Balancer)를 생성합니다. Auto Scaling 그룹을 ALB의 대상으로 설정합니다. ALB의 DNS 별칭을 대상으로 하는 단순 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 콘텐츠가 업데이트되기 전에 EC2 인스턴스에 대한 예약된 조정을 구성합니다.` },
      { k:'B', en:`Set up Amazon ElastiCache for Redis. Update the application to use ElastiCache. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution's DNS alias. Manually scale up EC2 instances before the content updates.`, ko:`Redis용 Amazon ElastiCache를 설정합니다. ElastiCache를 사용하도록 애플리케이션을 업데이트합니다. EC2 인스턴스에 대한 Auto Scaling 그룹을 생성합니다. Amazon CloudFront 배포를 생성하고 Auto Scaling 그룹을 배포의 원본으로 설정합니다. CloudFront 배포의 DNS 별칭을 대상으로 하는 단순 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 콘텐츠가 업데이트되기 전에 EC2 인스턴스를 수동으로 확장합니다.` },
      { k:'C', en:`Set up Amazon ElastiCache for Memcached. Update the application to use ElastiCache. Create an Auto Scaling group for the EC2 instances. Create an Application Load Balancer (ALB). Set the Auto Scaling group as a target for the ALB. Update the Route 53 record to use a simple routing policy that targets the ALB's DNS alias. Configure scheduled scaling for the application before the content updates.`, ko:`Memcached용 Amazon ElastiCache를 설정합니다. ElastiCache를 사용하도록 애플리케이션을 업데이트합니다. EC2 인스턴스에 대한 Auto Scaling 그룹을 생성합니다. ALB(Application Load Balancer)를 생성합니다. Auto Scaling 그룹을 ALB의 대상으로 설정합니다. ALB의 DNS 별칭을 대상으로 하는 단순 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 콘텐츠가 업데이트되기 전에 애플리케이션에 대한 예약된 크기 조정을 구성합니다.` },
      { k:'D', en:`Set up DynamoDB Accelerator (DAX) as in-memory cache. Update the application to use DAX. Create an Auto Scaling group for the EC2 instances. Create an Amazon CloudFront distribution, and set the Auto Scaling group as an origin for the distribution. Update the Route 53 record to use a simple routing policy that targets the CloudFront distribution's DNS alias. Manually scale up EC2 instances before the content updates.`, ko:`DynamoDB Accelerator(DAX)를 인 메모리 캐시로 설정합니다. DAX를 사용하도록 애플리케이션을 업데이트합니다. EC2 인스턴스에 대한 Auto Scaling 그룹을 생성합니다. Amazon CloudFront 배포를 생성하고 Auto Scaling 그룹을 배포의 원본으로 설정합니다. CloudFront 배포의 DNS 별칭을 대상으로 하는 단순 라우팅 정책을 사용하도록 Route 53 레코드를 업데이트합니다. 콘텐츠가 업데이트되기 전에 EC2 인스턴스를 수동으로 확장합니다.` }
    ],

    answer: ['A'],
    vote: '97% A',

    explain: `<p><span class="mark-ok">✅ A — DAX + Auto Scaling + ALB + 예약 조정</span></p>
<p>애플리케이션이 DynamoDB를 사용하므로 <strong>DAX(DynamoDB Accelerator)</strong>는 DynamoDB에 특화된 인메모리 캐시로 자체 호스팅 Redis를 대체하기에 가장 적합합니다. Auto Scaling 그룹과 ALB 조합으로 EC2 계층의 고가용성을 확보하고, 콘텐츠 업데이트 전 예약 조정(Scheduled Scaling)으로 부하 급증에 사전 대응합니다. 수동 확장(B, D)보다 예약 조정이 자동화되어 운영 오버헤드가 적습니다.</p>
<p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.html" target="_blank">AWS 공식 문서 - DynamoDB Accelerator(DAX)</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — 수동 확장은 자동화되지 않아 운영 부담이 크고 실수 가능성이 있습니다. CloudFront는 동적 콘텐츠 로드 처리에 최적이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — Memcached는 DynamoDB에 특화된 캐싱이 아니며 DAX에 비해 DynamoDB 통합이 부족합니다.</p>
<p><span class="mark-no">❌ D</span> — DAX를 사용하는 점은 옳지만 수동 확장과 CloudFront 오리진으로 Auto Scaling 그룹을 직접 사용하는 구성은 동적 콘텐츠에 적합하지 않습니다.</p>`,

    disc: [
      { ans:'A (97%)', txt:'DynamoDB 기반 앱에는 DAX가 최적 캐시입니다. ALB + Auto Scaling으로 고가용성을 확보하고, 예약 조정으로 분기별 콘텐츠 업데이트 부하를 사전에 대응하는 완전한 솔루션입니다.' }
    ]
  },

  {
    n: 397,

    en: `<p>A company needs to store and process image data that will be uploaded from mobile devices using a custom mobile app. Usage peaks between 8 AM and 5 PM on weekdays, with thousands of uploads per minute. The app is rarely used at any other time. A user is notified when image processing is complete.</p><p>Which combination of actions should a solutions architect take to ensure image processing can scale to handle the load? (Choose three.)</p>`,
    ko: `<p>회사는 맞춤형 모바일 앱을 사용하여 모바일 장치에서 업로드할 이미지 데이터를 저장하고 처리해야 합니다. 주중 오전 8시부터 오후 5시 사이에 사용량이 가장 많아 분당 수천 건의 업로드가 발생합니다. 그 외에는 앱을 거의 사용하지 않습니다. 이미지 처리가 완료되면 사용자에게 알림이 전송됩니다.</p><p>로드를 처리할 수 있도록 이미지 처리를 확장할 수 있도록 솔루션 설계자는 어떤 작업 조합을 취해야 합니까? (3개를 선택하세요.)</p>`,

    type: 'multi', multiCount: 3,

    choices: [
      { k:'A', en:`Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon MQ queue.`, ko:`모바일 소프트웨어의 파일을 Amazon S3에 직접 업로드합니다. S3 이벤트 알림을 사용하여 Amazon MQ 대기열에 메시지를 생성합니다.` },
      { k:'B', en:`Upload files from the mobile software directly to Amazon S3. Use S3 event notifications to create a message in an Amazon Simple Queue Service (Amazon SQS) standard queue.`, ko:`모바일 소프트웨어의 파일을 Amazon S3에 직접 업로드합니다. S3 이벤트 알림을 사용하여 Amazon Simple Queue Service(Amazon SQS) 표준 대기열에 메시지를 생성합니다.` },
      { k:'C', en:`Invoke an AWS Lambda function to perform image processing when a message is available in the queue.`, ko:`대기열에서 메시지를 사용할 수 있을 때 이미지 처리를 수행하도록 AWS Lambda 함수를 호출합니다.` },
      { k:'D', en:`Invoke an S3 Batch Operations job to perform image processing when a message is available in the queue.`, ko:`S3 배치 작업 작업을 호출하여 대기열에서 메시지를 사용할 수 있을 때 이미지 처리를 수행합니다.` },
      { k:'E', en:`Send a push notification to the mobile app by using Amazon Simple Notification Service (Amazon SNS) when processing is complete.`, ko:`처리가 완료되면 Amazon Simple 알림 서비스(Amazon SNS)를 사용하여 모바일 앱에 푸시 알림을 보냅니다.` },
      { k:'F', en:`Send a push notification to the mobile app by using Amazon Simple Email Service (Amazon SES) when processing is complete.`, ko:`처리가 완료되면 Amazon Simple Email Service(Amazon SES)를 사용하여 모바일 앱에 푸시 알림을 보냅니다.` }
    ],

    answer: ['B','C','E'],
    vote: '100% BCE',

    explain: `<p><span class="mark-ok">✅ B — S3 + SQS 표준 대기열로 업로드 이벤트 처리</span></p>
<p>S3에 직접 업로드 후 S3 이벤트 알림을 사용하여 SQS 표준 대기열에 메시지를 생성하면 버퍼링 역할을 하여 피크 시간대의 수천 건 업로드를 안정적으로 처리합니다.</p>
<p><span class="mark-ok">✅ C — Lambda로 대기열 기반 이미지 처리</span></p>
<p>SQS 대기열의 메시지를 트리거로 Lambda 함수를 호출하면 서버리스 자동 확장으로 피크 부하를 처리할 수 있습니다.</p>
<p><span class="mark-ok">✅ E — SNS로 모바일 앱 푸시 알림</span></p>
<p>Amazon SNS는 모바일 푸시 알림(APNs, FCM 등)을 지원하는 전용 서비스입니다.</p>
<p><a href="https://docs.aws.amazon.com/sns/latest/dg/sns-mobile-application-as-subscriber.html" target="_blank">AWS 공식 문서 - SNS 모바일 푸시 알림</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — Amazon MQ는 내구성 있는 메시징에 적합하지만 이 사용 사례에서 SQS에 비해 확장성과 비용 효율성이 낮습니다.</p>
<p><span class="mark-no">❌ D</span> — S3 Batch Operations는 대규모 데이터셋의 배치 처리용이며 개별 이미지 업로드의 실시간 처리에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ F</span> — Amazon SES는 이메일 전송 서비스로 모바일 앱 푸시 알림을 지원하지 않습니다.</p>`,

    disc: [
      { ans:'BCE (100%)', txt:'S3 직접 업로드 → SQS 버퍼링 → Lambda 처리 → SNS 푸시 알림의 표준 서버리스 이미지 처리 패턴입니다. 피크 시간대 확장성과 비용 효율성을 모두 충족합니다.' }
    ]
  },

  {
    n: 398,

    en: `<p>A company is building an application on AWS. The application sends logs to an Amazon OpenSearch Service cluster for analysis. All data must be stored within a VPC.</p><p>Some of the company's developers work from home. Other developers work from three different company office locations. The developers need to access OpenSearch Service to analyze and visualize logs directly from their local development machines.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS에서 애플리케이션을 구축하고 있습니다. 애플리케이션은 분석을 위해 Amazon OpenSearch Service 클러스터에 로그를 보냅니다. 모든 데이터는 VPC 내에 저장되어야 합니다.</p><p>회사의 개발자 중 일부는 집에서 일합니다. 다른 개발자들은 세 곳의 회사 사무실에서 근무합니다. 개발자는 OpenSearch 서비스에 액세스하여 로컬 개발 컴퓨터에서 직접 로그를 분석하고 시각화해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Configure and set up an AWS Client VPN endpoint. Associate the Client VPN endpoint with a subnet in the VPC. Configure a Client VPN self-service portal. Instruct the developers to connect by using the client for Client VPN.`, ko:`AWS 클라이언트 VPN 엔드포인트를 구성하고 설정합니다. 클라이언트 VPN 엔드포인트를 VPC의 서브넷과 연결합니다. 클라이언트 VPN 셀프 서비스 포털을 구성합니다. 개발자에게 클라이언트 VPN용 클라이언트를 사용하여 연결하도록 지시합니다.` },
      { k:'B', en:`Create a transit gateway, and connect it to the VPC. Create an AWS Site-to-Site VPN. Create an attachment to the transit gateway. Instruct the developers to connect by using an OpenVPN client.`, ko:`전송 게이트웨이를 생성하고 이를 VPC에 연결합니다. AWS 사이트 간 VPN을 생성합니다. Transit Gateway에 대한 연결을 생성합니다. 개발자에게 OpenVPN 클라이언트를 사용하여 연결하도록 지시합니다.` },
      { k:'C', en:`Create a transit gateway, and connect it to the VPC via an AWS Direct Connect connection. Set up a public VIF on the Direct Connect connection. Associate the public VIF with the transit gateway. Instruct the developers to connect to the Direct Connect connection.`, ko:`전송 게이트웨이를 생성하고 이를 AWS Direct Connect 연결을 통해 VPC에 연결합니다. Direct Connect 연결에 퍼블릭 VIF를 설정합니다. 퍼블릭 VIF를 전송 게이트웨이와 연결합니다. 개발자에게 Direct Connect 연결에 연결하도록 지시합니다.` },
      { k:'D', en:`Create and configure a bastion host in a public subnet of the VPC. Configure the bastion host security group to allow SSH access from the company CIDR ranges. Instruct the developers to connect by using SSH.`, ko:`VPC의 퍼블릭 서브넷에 배스천 호스트를 생성하고 구성합니다. 회사 CIDR 범위에서 SSH 액세스를 허용하도록 배스천 호스트 보안 그룹을 구성합니다. 개발자에게 SSH를 사용하여 연결하도록 지시합니다.` }
    ],

    answer: ['A'],
    vote: '100% A',

    explain: `<p><span class="mark-ok">✅ A — AWS Client VPN 엔드포인트</span></p>
<p><strong>AWS Client VPN</strong>은 개별 장치에서 VPC로의 원격 액세스(클라이언트-사이트 VPN)를 제공합니다. 재택 근무자와 사무실 근무자 모두 개인 컴퓨터에서 VPN 클라이언트를 사용하여 VPC 내의 OpenSearch Service에 안전하게 접근할 수 있습니다. 셀프 서비스 포털을 통해 인증서 배포도 간편합니다.</p>
<p><a href="https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/cvpn-working-endpoints.html" target="_blank">AWS 공식 문서 - Client VPN 엔드포인트</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — Site-to-Site VPN은 네트워크 간 연결(사무실-AWS)을 위한 것으로 개별 장치 연결에 적합하지 않으며, 재택 근무자는 회사 네트워크를 통하지 않으면 연결이 불가능합니다.</p>
<p><span class="mark-no">❌ C</span> — Direct Connect는 온프레미스 네트워크와 AWS 간 전용 회선으로 개별 개발자 장치 접근에 적합하지 않습니다. 재택 근무자는 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 배스천 호스트는 회사 CIDR 범위에서만 SSH 접근을 허용하므로 재택 근무자는 접근이 불가능합니다. 또한 퍼블릭 호스트 노출로 보안 위험이 증가합니다.</p>`,

    disc: [
      { ans:'A (100%)', txt:'재택 근무자와 사무실 근무자 모두를 개별 장치에서 VPC에 연결해야 하므로, 클라이언트-사이트 VPN 방식인 AWS Client VPN이 유일한 완전한 솔루션입니다.' }
    ]
  },

  {
    n: 399,

    en: `<p>A company wants to migrate its website from an on-premises data center onto AWS. At the same time, it wants to migrate the website to a containerized microservice-based architecture to improve the availability and cost efficiency. The company's security policy states that privileges and network permissions must be configured according to best practice, using least privilege.</p><p>A solutions architect must create a containerized architecture that meets the security requirements and has deployed the application to an Amazon ECS cluster.</p><p>What steps are required after the deployment to meet the requirements? (Choose two.)</p>`,
    ko: `<p>한 회사에서 웹 사이트를 온프레미스 데이터 센터에서 AWS로 마이그레이션하려고 합니다. 동시에 가용성과 비용 효율성을 개선하기 위해 웹사이트를 컨테이너화된 마이크로서비스 기반 아키텍처로 마이그레이션하려고 합니다. 회사의 보안 정책에는 권한과 네트워크 권한이 모범 사례에 따라 최소 권한을 사용하여 구성되어야 한다고 명시되어 있습니다.</p><p>솔루션 아키텍트는 보안 요구 사항을 충족하고 Amazon ECS 클러스터에 애플리케이션을 배포한 컨테이너화된 아키텍처를 생성해야 합니다.</p><p>요구 사항을 충족하려면 배포 후 어떤 단계가 필요합니까? (2개를 선택하세요.)</p>`,

    type: 'multi', multiCount: 2,

    choices: [
      { k:'A', en:`Create tasks using the bridge network mode.`, ko:`브리지 네트워크 모드를 사용하여 작업을 생성합니다.` },
      { k:'B', en:`Create tasks using the awsvpc network mode.`, ko:`awsvpc 네트워크 모드를 사용하여 작업을 생성합니다.` },
      { k:'C', en:`Apply security groups to Amazon EC2 instances, and use IAM roles for EC2 instances to access other resources.`, ko:`Amazon EC2 인스턴스에 보안 그룹을 적용하고 EC2 인스턴스에 대한 IAM 역할을 사용하여 다른 리소스에 액세스합니다.` },
      { k:'D', en:`Apply security groups to the tasks, and pass IAM credentials into the container at launch time to access other resources.`, ko:`작업에 보안 그룹을 적용하고 시작 시 IAM 자격 증명을 컨테이너에 전달하여 다른 리소스에 액세스합니다.` },
      { k:'E', en:`Apply security groups to the tasks, and use IAM roles for tasks to access other resources.`, ko:`작업에 보안 그룹을 적용하고 작업에 IAM 역할을 사용하여 다른 리소스에 액세스합니다.` }
    ],

    answer: ['B','E'],
    vote: '100% BE',

    explain: `<p><span class="mark-ok">✅ B — awsvpc 네트워크 모드</span></p>
<p><strong>awsvpc 모드</strong>는 각 ECS 작업에 전용 ENI(Elastic Network Interface)를 부여하여 작업 수준에서 보안 그룹을 적용할 수 있습니다. 이는 네트워크 최소 권한 원칙을 작업 단위로 적용할 수 있는 유일한 모드입니다.</p>
<p><span class="mark-ok">✅ E — 작업에 보안 그룹 + IAM 역할 적용</span></p>
<p>awsvpc 모드에서 각 작업에 보안 그룹을 적용하여 네트워크 최소 권한을 구현하고, IAM 역할을 작업에 할당하여 AWS 리소스 접근 권한을 최소 권한으로 제어합니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html" target="_blank">AWS 공식 문서 - ECS 작업 IAM 역할</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — 브리지 모드는 EC2 인스턴스의 네트워크를 공유하므로 개별 작업 수준의 보안 그룹 적용이 불가능합니다.</p>
<p><span class="mark-no">❌ C</span> — EC2 인스턴스 수준의 보안 그룹과 IAM 역할은 컨테이너 단위의 최소 권한을 구현하지 못합니다. 동일 인스턴스의 모든 컨테이너가 같은 권한을 갖게 됩니다.</p>
<p><span class="mark-no">❌ D</span> — 시작 시 IAM 자격 증명을 컨테이너에 하드코딩/전달하는 방식은 보안 모범 사례에 반하며, 자격 증명 노출 위험이 있습니다.</p>`,

    disc: [
      { ans:'BE (100%)', txt:'awsvpc 모드는 각 작업에 ENI를 부여하여 보안 그룹을 작업 수준에서 적용 가능하게 합니다. IAM 역할을 작업에 직접 할당하면 컨테이너 단위의 최소 권한 접근 제어가 가능합니다.' }
    ]
  },

  {
    n: 400,

    en: `<p>A company is running a serverless application that consists of several AWS Lambda functions and Amazon DynamoDB tables. The company has created new functionality that requires the Lambda functions to access an Amazon Neptune DB cluster. The Neptune DB cluster is located in three subnets in a VPC.</p><p>Which of the possible solutions will allow the Lambda functions to access the Neptune DB cluster and DynamoDB tables? (Choose two.)</p>`,
    ko: `<p>한 회사가 여러 AWS Lambda 함수와 Amazon DynamoDB 테이블로 구성된 서버리스 애플리케이션을 실행하고 있습니다. 이 회사는 Amazon Neptune DB 클러스터에 액세스하기 위해 Lambda 함수가 필요한 새로운 기능을 만들었습니다. Neptune DB 클러스터는 VPC의 서브넷 3개에 위치합니다.</p><p>다음 중 Lambda 함수가 Neptune DB 클러스터 및 DynamoDB 테이블에 액세스하도록 허용하는 솔루션은 무엇입니까? (2개를 선택하세요.)</p>`,

    type: 'multi', multiCount: 2,

    choices: [
      { k:'A', en:`Create three public subnets in the Neptune VPC, and route traffic through an internet gateway. Host the Lambda functions in the three new public subnets.`, ko:`Neptune VPC에 3개의 퍼블릭 서브넷을 생성하고 인터넷 게이트웨이를 통해 트래픽을 라우팅합니다. 세 개의 새로운 퍼블릭 서브넷에서 Lambda 함수를 호스팅합니다.` },
      { k:'B', en:`Create three private subnets in the Neptune VPC, and route internet traffic through a NAT gateway. Host the Lambda functions in the three new private subnets.`, ko:`Neptune VPC에 3개의 프라이빗 서브넷을 생성하고 NAT 게이트웨이를 통해 인터넷 트래픽을 라우팅합니다. 세 개의 새로운 프라이빗 서브넷에서 Lambda 함수를 호스팅합니다.` },
      { k:'C', en:`Host the Lambda functions outside the VPC. Update the Neptune security group to allow access from the IP ranges of the Lambda functions.`, ko:`VPC 외부에서 Lambda 함수를 호스팅합니다. Lambda 함수의 IP 범위에서의 액세스를 허용하도록 Neptune 보안 그룹을 업데이트합니다.` },
      { k:'D', en:`Host the Lambda functions outside the VPC. Create a VPC endpoint for the Neptune database, and have the Lambda functions access Neptune over the VPC endpoint.`, ko:`VPC 외부에서 Lambda 함수를 호스팅합니다. Neptune 데이터베이스에 대한 VPC 엔드포인트를 생성하고 Lambda 함수가 VPC 엔드포인트를 통해 Neptune에 액세스하도록 합니다.` },
      { k:'E', en:`Create three private subnets in the Neptune VPC. Host the Lambda functions in the three new isolated subnets. Create a VPC endpoint for DynamoDB, and route DynamoDB traffic to the VPC endpoint.`, ko:`Neptune VPC에 3개의 프라이빗 서브넷을 생성합니다. 세 개의 새로운 격리된 서브넷에서 Lambda 함수를 호스팅합니다. DynamoDB용 VPC 엔드포인트를 생성하고 DynamoDB 트래픽을 VPC 엔드포인트로 라우팅합니다.` }
    ],

    answer: ['B','E'],
    vote: '88% BE',

    explain: `<p><span class="mark-ok">✅ B — VPC 내 프라이빗 서브넷 + NAT 게이트웨이</span></p>
<p>Neptune은 동일 VPC 내의 클라이언트 연결만 허용합니다. Lambda 함수를 Neptune VPC의 프라이빗 서브넷에 배치하면 Neptune에 직접 접근 가능하고, NAT 게이트웨이를 통해 DynamoDB(퍼블릭 엔드포인트)에도 접근할 수 있습니다.</p>
<p><span class="mark-ok">✅ E — VPC 내 격리된 서브넷 + DynamoDB VPC 엔드포인트</span></p>
<p>Lambda를 Neptune VPC의 프라이빗 서브넷에 배치하고 DynamoDB용 VPC 엔드포인트(Gateway 타입)를 생성하면 인터넷을 경유하지 않고 DynamoDB에 접근 가능합니다. 이 방식이 NAT 게이트웨이보다 비용 효율적입니다.</p>
<p><a href="https://docs.aws.amazon.com/neptune/latest/userguide/security-vpc.html" target="_blank">AWS 공식 문서 - Neptune VPC 보안</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — 퍼블릭 서브넷에 Lambda를 배치하면 Neptune 접근은 가능하지만, Neptune의 엔드포인트는 VPC 내부에서만 접근 가능하므로 실제로는 프라이빗 서브넷과 동일하게 동작합니다. 보안 관점에서도 퍼블릭 서브넷은 권장되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Neptune은 동일 VPC 내의 연결만 허용하므로 VPC 외부의 Lambda IP에서는 접근이 불가능합니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon Neptune은 VPC 엔드포인트를 지원하지 않으므로 VPC 외부의 Lambda가 VPC 엔드포인트를 통해 Neptune에 접근하는 것은 불가능합니다.</p>`,

    disc: [
      { ans:'BE (88%)', txt:'Neptune은 VPC 내부 연결만 허용하므로 Lambda를 반드시 동일 VPC 내 서브넷에 배치해야 합니다. B는 NAT 게이트웨이로, E는 DynamoDB VPC 엔드포인트로 DynamoDB에 접근하는 두 가지 독립적인 완전한 솔루션입니다.' }
    ]
  }
];