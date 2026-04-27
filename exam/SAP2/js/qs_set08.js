window.QS_SET08 = [
  {
    n: 71,
    en: `A video streaming company recently launched a mobile app for video sharing. The app uploads various files to an Amazon S3 bucket in the us-east-1 Region. The files range in size from 1 GB to 10 GB. Users who access the app from Australia have experienced uploads that take long periods of time. Sometimes the files fail to completely upload for these users. A solutions architect must improve the application's upload performance.<br/><br/>Which combination of solutions will accomplish this? (Choose two.)`,
    ko: `비디오 스트리밍 회사가 비디오 공유를 위한 모바일 앱을 출시했습니다. 앱은 us-east-1 리전의 S3 버킷에 1GB~10GB 크기의 파일을 업로드합니다. 호주 사용자들이 업로드에 오랜 시간이 걸리고 때로는 업로드가 실패하는 문제를 경험합니다.<br/><br/>어떤 솔루션 조합이 업로드 성능을 향상시킵니까? (2개 선택)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Enable S3 Transfer Acceleration on the S3 bucket. Configure the app to use the Transfer Acceleration endpoint for uploads.`, ko:`S3 버킷에서 S3 Transfer Acceleration을 활성화합니다. 업로드에 Transfer Acceleration 엔드포인트를 사용하도록 앱을 구성합니다.` },
      { k:'B', en:`Configure an S3 bucket in each Region to receive the uploads. Use S3 Cross-Region Replication to copy the files to the distribution S3 bucket.`, ko:`각 리전에 업로드를 받을 S3 버킷을 구성합니다. S3 교차 리전 복제를 사용하여 파일을 배포 S3 버킷에 복사합니다.` },
      { k:'C', en:`Set up Amazon Route 53 with latency-based routing to route the uploads to the nearest S3 bucket Region.`, ko:`Amazon Route 53을 지연 시간 기반 라우팅으로 설정하여 업로드를 가장 가까운 S3 버킷 리전으로 라우팅합니다.` },
      { k:'D', en:`Configure the app to break the video files into chunks. Use a multipart upload to transfer files to Amazon S3.`, ko:`비디오 파일을 청크로 분할하도록 앱을 구성합니다. Amazon S3로 파일을 전송하려면 멀티파트 업로드를 사용합니다.` },
      { k:'E', en:`Modify the app to add random prefixes to the files before uploading.`, ko:`업로드 전에 파일에 무작위 접두사를 추가하도록 앱을 수정합니다.` },
    ],
    answer: ['A', 'D'],
    vote: '90% AD',
    explain: `<p><span class="mark-ok">✅ A — S3 Transfer Acceleration</span></p>
<p>S3 Transfer Acceleration은 CloudFront 엣지 로케이션을 통해 데이터를 AWS 백본 네트워크로 빠르게 라우팅합니다. 호주의 사용자가 시드니 엣지 로케이션에 업로드하면, 내부 최적화된 경로로 us-east-1까지 전송됩니다. 장거리 대용량 파일 업로드에서 최대 500% 성능 향상이 가능합니다.</p>
<p><span class="mark-ok">✅ D — 멀티파트 업로드(Multipart Upload)</span></p>
<p>S3는 100MB 이상 파일에 멀티파트 업로드를 권장합니다. 파일을 청크로 분할하여 병렬 업로드하므로 전체 속도가 향상되고, 네트워크 오류 시 실패한 청크만 재전송하므로 업로드 실패 문제가 해결됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — S3 CRR은 업로드 완료 후 다른 리전으로 복제하는 기능입니다. 초기 업로드 속도 자체를 개선하지 않습니다. 각 리전에 버킷을 두어도 호주 사용자의 us-east-1 업로드 속도는 변하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Route 53 지연 시간 기반 라우팅은 여러 리전의 S3 버킷 중 가장 가까운 곳으로 라우팅합니다. 하지만 최종 데이터는 단일 us-east-1 버킷이 필요하므로 추가적인 동기화 메커니즘이 필요합니다. Transfer Acceleration(A)이 더 단순합니다.</p>
<p><span class="mark-no">❌ E</span> — 무작위 접두사는 S3 파티셔닝 성능을 위한 기법으로, S3가 요청을 여러 파티션에 분산할 때 사용합니다. 현재 S3는 자동으로 파티셔닝을 처리하므로 이 방법은 더 이상 필요하지 않으며 업로드 속도에 영향을 주지 않습니다.</p>`,
    disc: [
      { ans:'A, D', txt:'A: Transfer Acceleration으로 CloudFront 엣지 → 백본 네트워크 경로로 장거리 업로드 가속. D: Multipart Upload로 대용량 파일 병렬 업로드 + 실패 시 청크 단위 재전송으로 안정성 향상.' },
    ]
  },
  {
    n: 72,
    en: `An application is using an Amazon RDS for MySQL Multi-AZ DB instance in the us-east-1 Region. After a failover test, the application lost the connections to the database and could not re-establish the connections. After a restart of the application, the application re-established the connections. A solutions architect must implement a solution so that the application can re-establish connections to the database without requiring a restart.<br/><br/>Which solution will meet this requirement?`,
    ko: `애플리케이션이 us-east-1 리전의 Amazon RDS for MySQL Multi-AZ DB 인스턴스를 사용합니다. 장애 조치 테스트 후 애플리케이션이 데이터베이스 연결을 잃고 재연결할 수 없었습니다. 애플리케이션을 재시작한 후에야 연결이 다시 설정되었습니다. 재시작 없이 데이터베이스에 다시 연결할 수 있는 솔루션을 구현해야 합니다.<br/><br/>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an Amazon Aurora MySQL Serverless v1 DB instance. Migrate the RDS DB instance to the Aurora Serverless v1 DB instance. Update the connection settings in the application to point to the Aurora Serverless v1 endpoint.`, ko:`Amazon Aurora MySQL Serverless v1 DB 인스턴스를 생성합니다. RDS DB 인스턴스를 Aurora Serverless v1 DB 인스턴스로 마이그레이션합니다. 애플리케이션의 연결 설정을 Aurora Serverless v1 엔드포인트를 가리키도록 업데이트합니다.` },
      { k:'B', en:`Create an RDS proxy. Configure the existing RDS endpoint as a target. Update the connection settings in the application to point to the RDS proxy endpoint.`, ko:`RDS 프록시를 생성합니다. 기존 RDS 엔드포인트를 대상으로 구성합니다. 애플리케이션의 연결 설정을 RDS 프록시 엔드포인트를 가리키도록 업데이트합니다.` },
      { k:'C', en:`Create a two-node Amazon Aurora MySQL DB cluster. Migrate the RDS DB instance to the Aurora DB cluster. Create an RDS proxy. Configure the existing RDS endpoint as a target. Update the connection settings in the application to point to the RDS proxy endpoint.`, ko:`두 노드 Amazon Aurora MySQL DB 클러스터를 생성합니다. RDS DB 인스턴스를 Aurora DB 클러스터로 마이그레이션합니다. RDS 프록시를 생성합니다. 기존 RDS 엔드포인트를 대상으로 구성합니다. 애플리케이션의 연결 설정을 RDS 프록시 엔드포인트를 가리키도록 업데이트합니다.` },
      { k:'D', en:`Create an Amazon S3 bucket. Export the database to Amazon S3 by using AWS Database Migration Service (AWS DMS). Configure Amazon Athena to use the S3 bucket as a data source. Update the connection settings in the application to point to the Athena endpoint.`, ko:`Amazon S3 버킷을 생성합니다. AWS DMS를 사용하여 데이터베이스를 Amazon S3로 내보냅니다. S3 버킷을 데이터 소스로 사용하도록 Amazon Athena를 구성합니다. 애플리케이션의 연결 설정을 Athena 엔드포인트를 가리키도록 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '95% B',
    explain: `<p><span class="mark-ok">✅ B — Amazon RDS Proxy</span></p>
<p>RDS Proxy는 애플리케이션과 RDS 사이에 위치하여 <strong>연결 풀링과 장애 조치 처리</strong>를 자동화합니다.</p>
<ul>
  <li>Multi-AZ 장애 조치 시 RDS DNS 엔드포인트가 새 인스턴스를 가리키기까지 수십 초가 소요됩니다. RDS Proxy는 이 전환을 애플리케이션에 투명하게 처리합니다</li>
  <li>애플리케이션은 Proxy 엔드포인트에 연결하며, Proxy가 내부적으로 실제 RDS 엔드포인트 전환을 처리합니다</li>
  <li>기존 RDS 인스턴스를 그대로 유지하면서 Proxy만 추가하면 되므로 마이그레이션 불필요</li>
  <li>연결 풀링으로 Lambda 등 고동시성 환경에서도 "Too Many Connections" 오류 방지</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Aurora Serverless v1으로 마이그레이션하는 것은 과도한 작업이며, Serverless v1은 일시 중지 후 재시작 시 지연이 발생합니다. 현재 Multi-AZ RDS 장애 조치 연결 문제를 해결하기 위해 전체 DB 마이그레이션은 불필요합니다.</p>
<p><span class="mark-no">❌ C</span> — Aurora 마이그레이션 + RDS Proxy 조합도 동작하지만, 이미 RDS MySQL Multi-AZ가 있는 환경에서 Aurora로의 전체 마이그레이션은 불필요한 운영 오버헤드입니다. B(Proxy만 추가)가 최소 변경입니다.</p>
<p><span class="mark-no">❌ D</span> — S3 + DMS + Athena는 분석용 데이터 레이크 아키텍처입니다. 트랜잭션 MySQL 데이터베이스를 Athena로 대체할 수 없으며, Athena는 SQL DML(INSERT/UPDATE/DELETE)을 지원하지 않습니다.</p>`,
    disc: [
      { ans:'B', txt:'RDS Proxy가 Multi-AZ 장애 조치 시 연결 유지의 표준 솔루션. Proxy 엔드포인트는 장애 조치 중에도 유효하게 유지되어 애플리케이션 재시작 없이 자동 재연결.' },
    ]
  },
  {
    n: 73,
    en: `A company is building a solution in the AWS Cloud. Thousands of devices will connect to the solution and send data. Each device needs to be able to send and receive data in real time over the MQTT protocol. Each device must authenticate by using a unique X.509 certificate.<br/><br/>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사가 AWS 클라우드에서 솔루션을 구축합니다. 수천 개의 디바이스가 솔루션에 연결하여 데이터를 전송합니다. 각 디바이스는 MQTT 프로토콜로 실시간으로 데이터를 송수신해야 합니다. 각 디바이스는 고유한 X.509 인증서로 인증해야 합니다.<br/><br/>가장 낮은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Set up AWS IoT Core. For each device, create a corresponding Amazon MQ queue and provision a certificate. Connect each device to Amazon MQ.`, ko:`AWS IoT Core를 설정합니다. 각 디바이스에 대해 해당하는 Amazon MQ 대기열을 생성하고 인증서를 프로비저닝합니다. 각 디바이스를 Amazon MQ에 연결합니다.` },
      { k:'B', en:`Create a Network Load Balancer (NLB) and configure it with an AWS Lambda authorizer. Run an MQTT broker on Amazon EC2 instances in an Auto Scaling group. Set up an NLB target group for the EC2 instances.`, ko:`NLB를 생성하고 AWS Lambda 인증자로 구성합니다. Auto Scaling 그룹의 EC2 인스턴스에서 MQTT 브로커를 실행합니다. EC2 인스턴스에 대한 NLB 대상 그룹을 설정합니다.` },
      { k:'C', en:`Set up AWS IoT Core. For each device, create a corresponding AWS IoT thing and provision a certificate. Connect each device to AWS IoT Core.`, ko:`AWS IoT Core를 설정합니다. 각 디바이스에 대해 해당하는 AWS IoT thing을 생성하고 인증서를 프로비저닝합니다. 각 디바이스를 AWS IoT Core에 연결합니다.` },
      { k:'D', en:`Set up an Amazon API Gateway HTTP API and a Network Load Balancer (NLB). Create integration between API Gateway and the NLB. Configure a mutual TLS certificate authentication for the API.`, ko:`Amazon API Gateway HTTP API와 NLB를 설정합니다. API Gateway와 NLB 간의 통합을 생성합니다. API에 대한 상호 TLS 인증서 인증을 구성합니다.` },
    ],
    answer: ['C'],
    vote: '96% C',
    explain: `<p><span class="mark-ok">✅ C — AWS IoT Core + IoT Thing + X.509 인증서</span></p>
<p>AWS IoT Core는 수백만 개의 디바이스를 위한 <strong>완전 관리형 MQTT 브로커</strong>입니다.</p>
<ul>
  <li>MQTT 프로토콜을 네이티브 지원(포트 8883, TLS)</li>
  <li>각 디바이스에 IoT Thing을 생성하고 고유 X.509 인증서를 연결 → 디바이스별 인증 자동 처리</li>
  <li>IoT 정책으로 각 디바이스가 접근할 수 있는 MQTT 토픽 제어</li>
  <li>브로커 인프라 관리 불필요, 수천~수백만 동시 연결 자동 확장</li>
  <li>IoT Rules Engine으로 수신 데이터를 Lambda, Kinesis, DynamoDB 등으로 라우팅 가능</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon MQ는 Apache ActiveMQ/RabbitMQ 기반 메시지 브로커입니다. MQTT를 지원하지만 IoT Core와 달리 브로커 인스턴스를 직접 관리해야 하며, 수천 개 디바이스 연결을 위한 확장성이 IoT Core보다 낮습니다. 또한 "MQ queue" 개념은 MQTT 구조에 부적합합니다.</p>
<p><span class="mark-no">❌ B</span> — EC2에서 MQTT 브로커를 직접 운영하는 것은 높은 운영 오버헤드(패치, 확장, 고가용성, 인증서 관리)를 수반합니다. 완전 관리형 IoT Core에 비해 훨씬 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — API Gateway는 HTTP/WebSocket 프로토콜을 지원하지만 MQTT를 지원하지 않습니다. MQTT는 경량 IoT 프로토콜로 HTTP와 다른 특성을 가집니다.</p>`,
    disc: [
      { ans:'C', txt:'AWS IoT Core: 완전 관리형 MQTT 브로커, X.509 인증서 기반 디바이스 인증, 자동 확장. IoT Thing + Certificate + Policy 조합으로 디바이스별 인증 및 접근 제어 구현.' },
    ]
  },
  {
    n: 74,
    en: `A company is running several workloads in a single AWS account. A new company policy states that engineers can provision only approved resources and that engineers must use AWS CloudFormation to provision these resources. A solutions architect needs to create a solution to enforce the new restriction on the IAM role that the engineers use for access.<br/><br/>What should the solutions architect do to create the MOST operationally efficient solution?`,
    ko: `회사가 단일 AWS 계정에서 여러 워크로드를 실행합니다. 새 정책에 따라 엔지니어는 승인된 리소스만 프로비저닝할 수 있으며 AWS CloudFormation을 통해서만 프로비저닝해야 합니다. 엔지니어가 접근에 사용하는 IAM 역할에 이 제한을 시행하는 솔루션을 만들어야 합니다.<br/><br/>가장 운영 효율적인 솔루션을 만들기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Upload AWS CloudFormation templates that contain approved resources to an Amazon S3 bucket. Update the IAM policy for the engineers' IAM role to only allow access to the S3 bucket and AWS CloudFormation.`, ko:`승인된 리소스가 포함된 AWS CloudFormation 템플릿을 Amazon S3 버킷에 업로드합니다. 엔지니어 IAM 역할의 IAM 정책을 S3 버킷과 AWS CloudFormation에만 액세스할 수 있도록 업데이트합니다.` },
      { k:'B', en:`Update the IAM policy for the engineers' IAM role with permissions to only allow provisioning of approved resources and AWS CloudFormation. Use AWS CloudFormation to create templates that contain only the approved resources.`, ko:`엔지니어 IAM 역할의 IAM 정책을 승인된 리소스와 AWS CloudFormation 프로비저닝만 허용하도록 업데이트합니다. AWS CloudFormation을 사용하여 승인된 리소스만 포함하는 템플릿을 생성합니다.` },
      { k:'C', en:`Update the IAM policy for the engineers' IAM role with permissions to only allow AWS CloudFormation actions. Create a new IAM policy with permission to provision the approved resources and attach the policy to a new IAM service role. Configure CloudFormation to use the new IAM service role.`, ko:`엔지니어 IAM 역할의 IAM 정책을 AWS CloudFormation 작업만 허용하도록 업데이트합니다. 승인된 리소스를 프로비저닝할 수 있는 권한이 있는 새 IAM 정책을 생성하고 새 IAM 서비스 역할에 연결합니다. 새 IAM 서비스 역할을 사용하도록 CloudFormation을 구성합니다.` },
      { k:'D', en:`Provision resources in AWS CloudFormation stacks. Update the IAM policy for the engineers' IAM role to only allow access to their own AWS CloudFormation stacks.`, ko:`AWS CloudFormation 스택에서 리소스를 프로비저닝합니다. 엔지니어 IAM 역할의 IAM 정책을 자신의 AWS CloudFormation 스택에만 액세스할 수 있도록 업데이트합니다.` },
    ],
    answer: ['C'],
    vote: '88% C',
    explain: `<p><span class="mark-ok">✅ C — 엔지니어 역할: CloudFormation 작업만 / CloudFormation 서비스 역할: 승인된 리소스 프로비저닝</span></p>
<p>이 패턴은 <strong>권한 분리(separation of privileges)</strong>를 구현합니다.</p>
<ul>
  <li>엔지니어 IAM 역할: <code>cloudformation:*</code>만 허용 → 직접 EC2, S3 등 생성 불가</li>
  <li>CloudFormation IAM 서비스 역할(iam:PassRole로 전달): 승인된 리소스 프로비저닝 권한 보유</li>
  <li>엔지니어는 CloudFormation을 통해서만 리소스를 만들 수 있고, CloudFormation이 서비스 역할을 사용하여 승인된 리소스만 생성</li>
  <li>새 승인 리소스 추가 시 서비스 역할 정책만 수정하면 되어 운영 효율적</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3에 템플릿을 업로드하고 S3 + CloudFormation 접근만 허용해도, 엔지니어가 콘솔 또는 CLI에서 직접 API 호출로 S3에 접근하여 리소스를 만드는 것을 막지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — 엔지니어 IAM 역할에 승인된 리소스 프로비저닝 권한을 직접 부여하면, 엔지니어가 CloudFormation 없이 콘솔이나 CLI로 직접 해당 리소스를 생성할 수 있습니다. "CloudFormation을 통해서만"이라는 요구 사항이 시행되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 자신의 CloudFormation 스택에만 접근을 허용해도 엔지니어가 스택에서 어떤 리소스든 생성할 수 있는 권한이 있다면 승인되지 않은 리소스 생성을 막을 수 없습니다.</p>`,
    disc: [
      { ans:'C', txt:'핵심: 엔지니어 역할은 cloudformation:* 만 허용 → 직접 리소스 생성 불가. CloudFormation 서비스 역할이 승인된 리소스만 프로비저닝. iam:PassRole로 서비스 역할 전달.' },
    ]
  },
  {
    n: 75,
    en: `A solutions architect is designing the data storage and retrieval architecture for a new application that a company will be launching soon. The application is designed to ingest millions of small records per minute from devices all around the world. Each record is less than 4 KB in size and needs to be stored in a durable location where it can be retrieved with low latency. The data is ephemeral and the company only needs to retain the data for 24 hours.<br/><br/>Which solution will meet these requirements in the MOST cost-effective way?`,
    ko: `솔루션 아키텍트가 새 애플리케이션을 위한 데이터 스토리지 및 검색 아키텍처를 설계합니다. 애플리케이션은 전 세계 디바이스에서 분당 수백만 개의 소규모 레코드를 수집합니다. 각 레코드는 4KB 미만이며 낮은 지연 시간으로 검색할 수 있는 내구성 있는 위치에 저장해야 합니다. 데이터는 임시적이며 회사는 24시간만 데이터를 보유해야 합니다.<br/><br/>가장 비용 효율적인 방법으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Design the application to store each incoming record as a single .csv file in an Amazon S3 bucket to allow for indexed retrieval. Configure a lifecycle policy to expire the records after 24 hours.`, ko:`들어오는 각 레코드를 Amazon S3 버킷의 단일 .csv 파일로 저장하여 인덱싱된 검색을 허용하도록 애플리케이션을 설계합니다. 24시간 후에 레코드가 만료되도록 수명 주기 정책을 구성합니다.` },
      { k:'B', en:`Design the application to store each incoming record in an Amazon DynamoDB table properly configured for the scale. Configure the DynamoDB Time to Live (TTL) feature to expire records after 24 hours.`, ko:`들어오는 각 레코드를 적절히 확장에 맞게 구성된 Amazon DynamoDB 테이블에 저장하도록 애플리케이션을 설계합니다. DynamoDB TTL(Time to Live) 기능을 구성하여 24시간 후에 레코드가 만료되도록 합니다.` },
      { k:'C', en:`Design the application to store each incoming record in a single table in an Amazon RDS MySQL database. Run a nightly cron job that runs a query to delete any data older than 24 hours.`, ko:`들어오는 각 레코드를 Amazon RDS MySQL 데이터베이스의 단일 테이블에 저장하도록 애플리케이션을 설계합니다. 24시간보다 오래된 데이터를 삭제하는 쿼리를 실행하는 야간 cron 작업을 실행합니다.` },
      { k:'D', en:`Design the application to batch incoming records before writing them to an Amazon S3 bucket. Update the metadata for the object to contain the list of record IDs included in each batch. Configure a lifecycle policy to expire the data after 24 hours.`, ko:`들어오는 레코드를 배치 처리한 후 Amazon S3 버킷에 쓰도록 애플리케이션을 설계합니다. 각 배치에 포함된 레코드 ID 목록을 포함하도록 객체 메타데이터를 업데이트합니다. 24시간 후 데이터가 만료되도록 수명 주기 정책을 구성합니다.` },
    ],
    answer: ['B'],
    vote: '93% B',
    explain: `<p><span class="mark-ok">✅ B — DynamoDB + TTL(Time to Live)</span></p>
<p>분당 수백만 건의 소규모(4KB 이하) 레코드 저장에 DynamoDB가 최적입니다.</p>
<ul>
  <li><strong>고처리량 쓰기</strong>: DynamoDB는 수백만 건/분의 쓰기를 On-Demand 또는 프로비저닝 용량으로 처리</li>
  <li><strong>낮은 읽기 지연</strong>: 단일 자릿수 밀리초 응답 시간</li>
  <li><strong>TTL</strong>: Unix 타임스탬프 속성에 TTL 설정 → 24시간 후 자동 삭제, 별도 작업 불필요, 비용도 무료</li>
  <li>4KB 이하 레코드는 DynamoDB 항목 크기 제한(400KB)에 여유</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 분당 수백만 개의 개별 파일을 S3에 저장하면 S3 API 요청 비용이 엄청납니다. 또한 S3는 키-값 조회에 최적화되어 있지 않아 레코드 단위 낮은 지연 검색에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — RDS MySQL은 분당 수백만 건의 쓰기 처리량을 제공하기 어렵습니다. 수직 확장에 의존하므로 비용이 높고, 야간 cron으로 삭제하면 불필요한 데이터가 24시간 이상 남을 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — 배치로 S3에 저장하면 A의 문제(요청 수)를 줄이지만, 특정 레코드 ID로 빠른 검색이 어렵습니다. S3 메타데이터에서 레코드를 찾으려면 추가 인덱싱 레이어가 필요합니다.</p>`,
    disc: [
      { ans:'B', txt:'DynamoDB TTL: 24시간 후 자동 삭제, 비용 없음. 수백만 건/분 고처리량 쓰기 + 단일 자릿수 밀리초 읽기. S3 개별 파일(A)은 API 비용이 매우 높음.' },
    ]
  },
  {
    n: 76,
    en: `A retail company is hosting an ecommerce website on AWS across multiple AWS Regions. The company wants the website to be operational at all times for online purchases. The website stores data in an Amazon RDS for MySQL DB instance. Which solution will provide the HIGHEST availability for the database?`,
    ko: `소매 회사가 여러 AWS 리전에 걸쳐 AWS에서 이커머스 웹사이트를 호스팅합니다. 회사는 온라인 구매를 위해 웹사이트가 항상 운영되기를 원합니다. 웹사이트는 Amazon RDS for MySQL DB 인스턴스에 데이터를 저장합니다.<br/><br/>데이터베이스에 가장 높은 가용성을 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure automated backups on Amazon RDS. In the case of disruption, promote an automated backup to be a standalone DB instance. Direct database traffic to the promoted DB instance.`, ko:`Amazon RDS에서 자동화된 백업을 구성합니다. 중단 시 자동화된 백업을 독립 실행형 DB 인스턴스로 승격합니다. 데이터베이스 트래픽을 승격된 DB 인스턴스로 전달합니다.` },
      { k:'B', en:`Configure global tables and read replicas on Amazon RDS. Activate the cross-Region scope. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.`, ko:`Amazon RDS에서 글로벌 테이블과 읽기 복제본을 구성합니다. 교차 리전 범위를 활성화합니다. 중단 시 AWS Lambda를 사용하여 한 리전에서 다른 리전으로 읽기 복제본을 복사합니다.` },
      { k:'C', en:`Configure global tables and automated backups on Amazon RDS. In the case of disruption, use AWS Lambda to copy the read replicas from one Region to another Region.`, ko:`Amazon RDS에서 글로벌 테이블과 자동 백업을 구성합니다. 중단 시 AWS Lambda를 사용하여 한 리전에서 다른 리전으로 읽기 복제본을 복사합니다.` },
      { k:'D', en:`Configure read replicas on Amazon RDS. In the case of disruption, promote a cross-Region read replica to be a standalone DB instance. Direct database traffic to the promoted DB instance.`, ko:`Amazon RDS에서 읽기 복제본을 구성합니다. 중단 시 교차 리전 읽기 복제본을 독립 실행형 DB 인스턴스로 승격합니다. 데이터베이스 트래픽을 승격된 DB 인스턴스로 전달합니다.` },
    ],
    answer: ['D'],
    vote: '93% D',
    explain: `<p><span class="mark-ok">✅ D — RDS 교차 리전 읽기 복제본 + 장애 시 승격</span></p>
<p>다중 리전 가용성을 위한 RDS for MySQL의 표준 패턴입니다.</p>
<ul>
  <li>다른 리전에 <strong>교차 리전 읽기 복제본</strong>을 생성하여 데이터를 비동기 복제</li>
  <li>기본 리전 장애 발생 시 읽기 복제본을 <strong>독립 실행형 기본 인스턴스로 승격</strong>(몇 분 내 완료)</li>
  <li>DNS/Route 53 장애 조치로 트래픽을 승격된 인스턴스로 전환</li>
  <li>비동기 복제이므로 일부 데이터 손실(RPO > 0) 가능성 있음 — 그러나 선택지 중 가장 높은 가용성</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 자동 백업은 특정 시점 복원(PITR)을 위한 것입니다. 백업에서 새 인스턴스를 생성하는 데 상당한 시간이 걸리고(높은 RTO), 마지막 백업 이후의 데이터가 손실됩니다(높은 RPO). 최고 가용성에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ B, C</span> — "Global tables"는 Amazon DynamoDB의 기능입니다. Amazon RDS for MySQL에는 글로벌 테이블 기능이 없습니다. 이 옵션들은 존재하지 않는 RDS 기능을 설명합니다.</p>`,
    disc: [
      { ans:'D', txt:'RDS Cross-Region Read Replica: 다른 리전에 비동기 복제본 유지 → 장애 시 승격. "Global tables"는 DynamoDB 기능(B, C 오답). 자동 백업 복원(A)은 RTO가 높아 최고 가용성에 부적합.' },
    ]
  },
  {
    n: 77,
    en: `Example Corp. has an on-premises data center and a VPC named VPC A in the Example Corp. AWS account. The on-premises network connects to VPC A through an AWS Site-to-Site VPN. The on-premises servers can properly access VPC A. Example Corp. just acquired AnyCompany, which has a VPC named VPC B. There is no IP address overlap among these networks. Example Corp. has peered VPC A and VPC B. Example Corp. now wants to connect the on-premises data center with VPC B.<br/><br/>What should a solutions architect do to accomplish this goal?`,
    ko: `Example Corp.는 온프레미스 데이터 센터와 AWS 계정의 VPC A를 보유합니다. 온프레미스 네트워크는 Site-to-Site VPN을 통해 VPC A에 연결됩니다. 온프레미스 서버는 VPC A에 정상적으로 접근할 수 있습니다. AnyCompany를 인수하여 VPC B를 보유합니다. 네트워크 간 IP 주소 중복은 없습니다. VPC A와 VPC B는 피어링되어 있습니다. 이제 온프레미스 데이터 센터와 VPC B를 연결하려 합니다.<br/><br/>이 목표를 달성하려면 어떻게 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a transit gateway. Attach the Site-to-Site VPN, VPC A, and VPC B to the transit gateway. Update the transit gateway route tables for all networks to allow the appropriate traffic.`, ko:`Transit Gateway를 생성합니다. Site-to-Site VPN, VPC A, VPC B를 Transit Gateway에 연결합니다. 모든 네트워크에 대한 Transit Gateway 라우팅 테이블을 업데이트하여 적절한 트래픽을 허용합니다.` },
      { k:'B', en:`Create a transit gateway. Create a Site-to-Site VPN connection between the on-premises network and VPC B, and connect the VPN connection to the transit gateway. Update the route tables for VPC B to route traffic to the transit gateway.`, ko:`Transit Gateway를 생성합니다. 온프레미스 네트워크와 VPC B 간의 Site-to-Site VPN 연결을 생성하고 VPN 연결을 Transit Gateway에 연결합니다. 트래픽을 Transit Gateway로 라우팅하도록 VPC B의 라우팅 테이블을 업데이트합니다.` },
      { k:'C', en:`Update the route tables for the Site-to-Site VPN and both VPCs for all three networks. Configure BGP propagation for all three networks. Wait for up to 5 minutes for the routes to be propagated.`, ko:`세 네트워크 모두에 대해 Site-to-Site VPN과 두 VPC의 라우팅 테이블을 업데이트합니다. 세 네트워크 모두에 대해 BGP 전파를 구성합니다. 경로가 전파되기까지 최대 5분을 기다립니다.` },
      { k:'D', en:`Modify the Site-to-Site VPN's virtual private gateway definition to include VPC A and VPC B. Split the two routers of the virtual private gateway between VPC A and VPC B.`, ko:`VPC A와 VPC B를 포함하도록 Site-to-Site VPN의 가상 프라이빗 게이트웨이 정의를 수정합니다. 가상 프라이빗 게이트웨이의 두 라우터를 VPC A와 VPC B 사이에 분할합니다.` },
    ],
    answer: ['A'],
    vote: '97% A',
    explain: `<p><span class="mark-ok">✅ A — Transit Gateway로 모든 네트워크 허브 연결</span></p>
<p>VPC 피어링은 <strong>전이적 라우팅(transitive routing)을 지원하지 않습니다.</strong> 온프레미스 → VPC A → (피어링) → VPC B 경로는 작동하지 않습니다.</p>
<p>Transit Gateway는 허브-앤-스포크 모델로 모든 네트워크를 연결합니다:</p>
<ul>
  <li>기존 VGW를 Transit Gateway VPN 어태치먼트로 교체</li>
  <li>VPC A, VPC B를 TGW에 각각 연결 → 온프레미스 ↔ VPC B 직접 통신 가능</li>
  <li>TGW 라우팅 테이블에서 각 연결의 경로를 명시적으로 설정</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 온프레미스 → VPC B 간 별도 VPN 연결을 생성하면 온프레미스 라우터에 두 VPN 터널을 관리해야 하는 운영 복잡성이 있습니다. A(TGW 단일 허브)가 더 단순합니다.</p>
<p><span class="mark-no">❌ C</span> — VPN + VPC 피어링 조합에서 BGP 경로 전파를 설정해도 VPC 피어링의 전이적 라우팅 제한은 해결되지 않습니다. 온프레미스에서 VPC A를 통해 VPC B로 라우팅할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — VGW(Virtual Private Gateway)는 단일 VPC에만 연결됩니다. VGW를 여러 VPC에 분할하는 것은 지원되지 않는 개념입니다.</p>`,
    disc: [
      { ans:'A', txt:'VPC 피어링은 non-transitive: 온프레미스 → VPC A → VPC B 불가. Transit Gateway는 허브로 VPN + VPC A + VPC B를 연결하여 전이적 라우팅 지원.' },
    ]
  },
  {
    n: 78,
    en: `A company recently completed the migration from an on-premises data center to the AWS Cloud by using a replatforming strategy. One of the migrated servers is running a legacy Simple Mail Transfer Protocol (SMTP) service that a critical application relies upon. The application sends outbound email messages to the company's customers. The legacy SMTP server does not support TLS encryption and uses TCP port 25. The company wants to decommission the SMTP server and send email by using Amazon Simple Email Service (Amazon SES). All communications must be encrypted in transit.<br/><br/>Which solution will meet these requirements with the LEAST development effort?`,
    ko: `회사가 리플랫폼 전략을 사용하여 온프레미스 데이터 센터에서 AWS 클라우드로 마이그레이션을 완료했습니다. 마이그레이션된 서버 중 하나가 중요한 애플리케이션이 의존하는 레거시 SMTP 서비스를 실행합니다. 애플리케이션은 고객에게 아웃바운드 이메일을 보냅니다. 레거시 SMTP 서버는 TLS 암호화를 지원하지 않으며 TCP 포트 25를 사용합니다. 회사는 SMTP 서버를 폐기하고 Amazon SES를 사용하여 이메일을 보내려 합니다. 모든 통신은 전송 중에 암호화되어야 합니다.<br/><br/>가장 적은 개발 노력으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure the application to connect to Amazon SES by using TLS Wrapper. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Attach the role to the EC2 instance that runs the application.`, ko:`TLS Wrapper를 사용하여 Amazon SES에 연결하도록 애플리케이션을 구성합니다. ses:SendEmail 및 ses:SendRawEmail 권한이 있는 IAM 역할을 생성합니다. 애플리케이션을 실행하는 EC2 인스턴스에 역할을 연결합니다.` },
      { k:'B', en:`Configure the application to connect to Amazon SES by using STARTTLS. Obtain Amazon SES SMTP credentials. Use the credentials to authenticate with Amazon SES.`, ko:`STARTTLS를 사용하여 Amazon SES에 연결하도록 애플리케이션을 구성합니다. Amazon SES SMTP 자격 증명을 얻습니다. 자격 증명을 사용하여 Amazon SES로 인증합니다.` },
      { k:'C', en:`Configure the application to use the SES API to send email messages. Create an IAM role that has ses:SendEmail and ses:SendRawEmail permissions. Use the IAM role with the application's AWS credentials to authenticate.`, ko:`SES API를 사용하여 이메일 메시지를 보내도록 애플리케이션을 구성합니다. ses:SendEmail 및 ses:SendRawEmail 권한이 있는 IAM 역할을 생성합니다. IAM 역할을 애플리케이션의 AWS 자격 증명과 함께 사용하여 인증합니다.` },
      { k:'D', en:`Configure the application to use AWS SDKs to send email messages. Create an IAM user for Amazon SES. Generate API access keys. Use the access keys to authenticate with Amazon SES.`, ko:`AWS SDK를 사용하여 이메일 메시지를 보내도록 애플리케이션을 구성합니다. Amazon SES용 IAM 사용자를 생성합니다. API 액세스 키를 생성합니다. 액세스 키를 사용하여 Amazon SES로 인증합니다.` },
    ],
    answer: ['B'],
    vote: '87% B',
    explain: `<p><span class="mark-ok">✅ B — STARTTLS + SES SMTP 자격 증명</span></p>
<p>Amazon SES SMTP 인터페이스는 SMTP 프로토콜을 그대로 지원하므로 레거시 애플리케이션의 코드 변경을 최소화할 수 있습니다.</p>
<ul>
  <li><strong>STARTTLS</strong>: 포트 587에서 초기 평문 연결 후 TLS로 업그레이드 → 전송 중 암호화 충족</li>
  <li>애플리케이션에서 SMTP 서버 주소를 <code>email-smtp.&lt;region&gt;.amazonaws.com</code>, 포트 587로 변경</li>
  <li>SES SMTP 자격 증명(IAM 사용자 기반으로 생성)으로 인증</li>
  <li>API 호출이나 SDK 통합 없이 SMTP 엔드포인트만 변경하면 되므로 <strong>가장 적은 개발 노력</strong></li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — TLS Wrapper(포트 465)는 처음부터 TLS 연결을 요구합니다. 레거시 애플리케이션이 TLS를 지원하지 않으므로, 애플리케이션을 TLS를 지원하도록 수정해야 합니다. 또한 SMTP 연결에 IAM 역할을 직접 사용하지 않습니다(IAM 역할은 SES API 호출에 사용).</p>
<p><span class="mark-no">❌ C</span> — SES API(HTTPS)를 사용하면 코드를 API 호출 방식으로 완전히 재작성해야 합니다. 레거시 SMTP 방식에서 API 방식으로의 전환은 상당한 개발 노력이 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — C와 마찬가지로 AWS SDK를 사용하면 전체 이메일 발송 로직을 재작성해야 합니다. 또한 IAM 사용자 액세스 키를 사용하는 것은 IAM 역할보다 보안 모범 사례에 어긋납니다.</p>`,
    disc: [
      { ans:'B', txt:'SES SMTP 인터페이스: 포트 587 STARTTLS 지원. 애플리케이션에서 SMTP 서버 주소만 변경하면 되어 최소 개발 노력. TLS Wrapper(A)는 레거시 앱이 TLS 미지원이므로 불가.' },
    ]
  },
  {
    n: 79,
    en: `A company recently acquired several other companies. Each company has a separate AWS account with a different billing and reporting method. The acquiring company has consolidated all the accounts into one organization in AWS Organizations. However, the acquiring company has found it difficult to generate a cost report that contains meaningful groups for all the teams. The acquiring company's finance team needs a solution that provides a single report that contains cost information that is grouped by company-defined attributes, which include the acquired company's name and the business unit.<br/><br/>Which solution will meet these requirements?`,
    ko: `회사가 여러 다른 회사를 인수했습니다. 각 회사는 서로 다른 청구 및 보고 방법을 가진 별도의 AWS 계정을 보유합니다. 인수 회사는 모든 계정을 AWS Organizations의 한 조직으로 통합했습니다. 그러나 모든 팀에 의미 있는 그룹이 포함된 비용 보고서를 생성하기 어렵습니다. 재무 팀은 인수된 회사 이름과 사업부를 포함한 회사 정의 속성별로 그룹화된 비용 정보가 포함된 단일 보고서가 필요합니다.<br/><br/>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an AWS Cost and Usage Report for the organization. Define tags and cost categories in the report. Create a table in Amazon Athena. Create an Amazon QuickSight dataset that uses the Athena table as the data source. Share the QuickSight dataset with the finance team.`, ko:`조직에 대한 AWS 비용 및 사용 보고서를 생성합니다. 보고서에 태그와 비용 범주를 정의합니다. Amazon Athena에서 테이블을 생성합니다. Athena 테이블을 데이터 소스로 사용하는 Amazon QuickSight 데이터 세트를 생성합니다. QuickSight 데이터 세트를 재무 팀과 공유합니다.` },
      { k:'B', en:`Create an AWS Cost and Usage Report for the organization. Define tags and cost categories in the report. Create a specialized template in AWS Cost Explorer to provide the appropriate report.`, ko:`조직에 대한 AWS 비용 및 사용 보고서를 생성합니다. 보고서에 태그와 비용 범주를 정의합니다. AWS Cost Explorer에서 전문화된 템플릿을 생성하여 적절한 보고서를 제공합니다.` },
      { k:'C', en:`Create an Amazon QuickSight dataset that receives spending information from the AWS Price List Query API. Share the dataset with the finance team.`, ko:`AWS Price List Query API에서 지출 정보를 받는 Amazon QuickSight 데이터 세트를 생성합니다. 데이터 세트를 재무 팀과 공유합니다.` },
      { k:'D', en:`Use the AWS Price List Query API to collect account spending information. Create a specialized template in AWS Cost Explorer that the finance department will use to access the cost report.`, ko:`AWS Price List Query API를 사용하여 계정 지출 정보를 수집합니다. 재무 부서가 비용 보고서에 액세스하는 데 사용할 AWS Cost Explorer에서 전문화된 템플릿을 생성합니다.` },
    ],
    answer: ['A'],
    vote: '86% A',
    explain: `<p><span class="mark-ok">✅ A — CUR + 태그/비용 범주 + Athena + QuickSight</span></p>
<p>이 조합이 완전히 커스터마이징 가능한 비용 보고서를 위한 표준 아키텍처입니다.</p>
<ul>
  <li><strong>CUR(Cost and Usage Report)</strong>: 조직 전체의 가장 상세한 비용/사용량 데이터를 S3에 저장</li>
  <li><strong>태그 + 비용 범주</strong>: 인수된 회사 이름, 사업부 등 사용자 정의 속성으로 비용 분류</li>
  <li><strong>Athena</strong>: S3의 CUR 데이터를 SQL로 쿼리하여 원하는 그룹화와 집계</li>
  <li><strong>QuickSight</strong>: Athena를 데이터 소스로 연결하여 인터랙티브 대시보드와 보고서 생성, 재무팀과 공유</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Cost Explorer는 사전 정의된 시각화와 제한된 필터링을 제공합니다. "회사 정의 속성별 그룹화"처럼 고도로 커스터마이징된 보고서를 만들기에는 QuickSight + Athena 조합보다 유연성이 낮습니다.</p>
<p><span class="mark-no">❌ C, D</span> — AWS Price List Query API는 서비스의 <strong>가격 정보(pricing)</strong>를 반환합니다. 실제 계정의 지출 데이터(usage/spending)가 아닙니다. 비용 보고서에 사용할 수 없습니다.</p>`,
    disc: [
      { ans:'A', txt:'CUR → S3 → Athena(SQL 쿼리) → QuickSight(시각화)가 완전 커스텀 비용 보고서의 표준 아키텍처. Price List API(C, D)는 가격 데이터이지 실제 지출 데이터가 아님.' },
    ]
  },
  {
    n: 80,
    en: `A company runs an IoT platform on AWS. IoT sensors in various locations send data to the company's Node.js API servers on Amazon EC2 instances running behind an Application Load Balancer. The data is stored in an Amazon RDS MySQL DB instance that uses a 4 TB General Purpose SSD volume. The number of sensors the company has deployed in the field has increased over time, and is expected to grow significantly. Data analysis has shown that the volume of data coming in exceeds the current capacity of the infrastructure, and that the data needs to be better organized to improve query performance.<br/><br/>Which combination of changes should a solutions architect make to improve scalability? (Choose two.)`,
    ko: `회사가 AWS에서 IoT 플랫폼을 운영합니다. 여러 위치의 IoT 센서가 ALB 뒤의 EC2 인스턴스에서 실행되는 Node.js API 서버로 데이터를 보냅니다. 데이터는 4TB GP SSD 볼륨을 사용하는 RDS MySQL DB 인스턴스에 저장됩니다. 배포된 센서 수가 증가해왔으며 크게 성장할 것으로 예상됩니다. 데이터 양이 현재 인프라 용량을 초과하고 있으며 쿼리 성능 향상을 위해 데이터를 더 잘 구성해야 합니다.<br/><br/>확장성을 향상하기 위해 어떤 변경 조합을 해야 합니까? (2개 선택)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Resize the MySQL General Purpose SSD storage to 6 TB to improve the volume's IOPS.`, ko:`볼륨의 IOPS를 향상하려면 MySQL General Purpose SSD 스토리지 크기를 6TB로 조정합니다.` },
      { k:'B', en:`Re-architect the database tier to use Amazon Aurora instead of an RDS MySQL DB instance and add read replicas.`, ko:`RDS MySQL DB 인스턴스 대신 Amazon Aurora를 사용하고 읽기 복제본을 추가하도록 데이터베이스 계층을 재설계합니다.` },
      { k:'C', en:`Leverage Amazon Kinesis Data Streams and AWS Lambda to ingest and process the raw data.`, ko:`Amazon Kinesis Data Streams와 AWS Lambda를 활용하여 원시 데이터를 수집하고 처리합니다.` },
      { k:'D', en:`Use AWS X-Ray to analyze and debug application issues and add more API servers to match the load.`, ko:`AWS X-Ray를 사용하여 애플리케이션 문제를 분석 및 디버그하고 부하에 맞게 더 많은 API 서버를 추가합니다.` },
      { k:'E', en:`Re-architect the database tier to use Amazon DynamoDB instead of an RDS MySQL DB instance.`, ko:`RDS MySQL DB 인스턴스 대신 Amazon DynamoDB를 사용하도록 데이터베이스 계층을 재설계합니다.` },
    ],
    answer: ['C', 'E'],
    vote: '88% CE',
    explain: `<p><span class="mark-ok">✅ C — Kinesis Data Streams + Lambda로 수집 계층 확장</span></p>
<p>EC2 API 서버가 직접 RDS에 쓰는 구조는 확장 한계가 있습니다. Kinesis Data Streams로 수집을 분리하면:</p>
<ul>
  <li>IoT 센서 데이터를 Kinesis로 버퍼링 → Lambda가 비동기로 처리 → 백엔드 부하 분산</li>
  <li>수백만 건/초 수집 가능, EC2 API 서버 병목 해소</li>
</ul>
<p><span class="mark-ok">✅ E — DynamoDB로 데이터베이스 재설계</span></p>
<p>IoT 센서 데이터는 시계열, 고쓰기 처리량, 키-값 패턴에 적합합니다:</p>
<ul>
  <li>DynamoDB: 자동 확장, 무제한 처리량, 단일 자릿수 밀리초 읽기</li>
  <li>파티션 키를 센서 ID, 정렬 키를 타임스탬프로 설계하면 쿼리 성능 향상</li>
  <li>RDS MySQL은 수직 확장 한계가 있으며 IoT 고쓰기 워크로드에 적합하지 않음</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — GP2 SSD를 6TB로 늘리면 기준 IOPS(3 IOPS/GB)가 약간 증가하지만, 근본적인 확장성 문제(MySQL 단일 인스턴스 한계)가 해결되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Aurora는 MySQL 호환이며 읽기 확장(읽기 복제본)에 유용하지만, IoT 고쓰기 처리량 확장에는 DynamoDB가 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — X-Ray는 성능 분석/디버깅 도구입니다. 더 많은 EC2 API 서버를 추가하면 API 계층은 확장되지만, 데이터베이스 병목이 해결되지 않습니다.</p>`,
    disc: [
      { ans:'C, E', txt:'IoT 고쓰기 워크로드: Kinesis로 수집 계층 분리(C) + DynamoDB로 DB 재설계(E). RDS MySQL은 IoT 쓰기 확장에 적합하지 않음. Aurora(B)는 읽기 확장이지 쓰기 확장이 아님.' },
    ]
  },
];
