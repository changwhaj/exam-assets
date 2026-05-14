window.QS_SET49 = [
  {
    n: 481,
    en: `<p>A company's web application has reliability issues. The application serves customers globally. The application runs on a single Amazon EC2 instance and performs read-intensive operations on an Amazon RDS for MySQL database.</p>
<p>During high load, the application becomes unresponsive and requires a manual restart of the EC2 instance. A solutions architect must improve the application's reliability.</p>
<p>Which solution will meet this requirement with the LEAST development effort?</p>`,
    ko: `<p>한 회사의 웹 애플리케이션에 안정성 문제가 있습니다. 애플리케이션은 전 세계 고객에게 서비스하며 단일 Amazon EC2 인스턴스에서 실행되고 Amazon RDS for MySQL 데이터베이스에서 읽기 집약적 작업을 수행합니다.</p>
<p>높은 부하에서 애플리케이션이 응답하지 않고 EC2 인스턴스를 수동으로 다시 시작해야 합니다. 솔루션 아키텍트는 애플리케이션의 안정성을 개선해야 합니다.</p>
<p>최소한의 개발 노력으로 이 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an Amazon CloudFront distribution. Specify the EC2 instance as the distribution\'s origin. Configure a Multi-AZ deployment for the RDS for MySQL database. Use the standby DB instance for the read-intensive operations.', ko: 'CloudFront 배포를 생성합니다. EC2를 오리진으로 지정합니다. RDS for MySQL에 Multi-AZ 배포를 구성합니다. 대기 DB 인스턴스를 읽기 집약적 작업에 사용합니다.' },
      { k: 'B', en: 'Run the application on EC2 instances that are in an Auto Scaling group. Place the EC2 instances behind an Elastic Load Balancing (ELB) load balancer. Replace the database service with Amazon Aurora. Use Aurora Replicas for the read-intensive operations.', ko: 'Auto Scaling 그룹의 EC2 인스턴스에서 애플리케이션을 실행합니다. ELB 로드 밸런서 뒤에 배치합니다. 데이터베이스 서비스를 Amazon Aurora로 교체합니다. 읽기 집약적 작업에 Aurora Replicas를 사용합니다.' },
      { k: 'C', en: 'Deploy AWS Global Accelerator. Configure a Multi-AZ deployment for the RDS for MySQL database. Use the standby DB instance for the read-intensive operations.', ko: 'AWS Global Accelerator를 배포합니다. RDS for MySQL에 Multi-AZ 배포를 구성합니다. 대기 DB 인스턴스를 읽기에 사용합니다.' },
      { k: 'D', en: 'Migrate the application to AWS Lambda functions. Create read replicas for the RDS for MySQL database. Use the read replicas for the read-intensive operations.', ko: '애플리케이션을 Lambda 함수로 마이그레이션합니다. RDS for MySQL에 읽기 복제본을 생성합니다. 읽기 집약적 작업에 사용합니다.' },
    ],
    answer: ['B'],
    vote: '77% B',
    explain: `<p><span class="mark-ok">✅ B — Auto Scaling + ELB + Aurora + Aurora Replicas</span></p>
<p>두 가지 핵심 문제를 동시에 해결합니다:</p>
<ul>
<li><strong>응답 불능 + 수동 재시작</strong>: Auto Scaling 그룹이 비정상 인스턴스를 자동으로 교체</li>
<li><strong>읽기 집약적 DB 과부하</strong>: Aurora Replicas로 읽기 쿼리 분산</li>
</ul>
<p><strong>A, C가 아닌 이유:</strong> RDS Multi-AZ의 대기(Standby) 인스턴스는 읽기에 사용할 수 없습니다. 읽기용은 별도의 읽기 복제본(Read Replica)이 필요합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — RDS Multi-AZ 대기 인스턴스는 읽기 불가입니다. EC2가 여전히 단일 인스턴스입니다.</p>
<p><span class="mark-no">❌ C</span> — Global Accelerator는 글로벌 라우팅용이며 EC2 안정성을 높이지 않습니다. 대기 인스턴스는 읽기 불가입니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda로 마이그레이션은 개발 노력이 큽니다.</p>`,
    disc: [
      { ans: 'B (77%)', txt: 'ASG로 EC2 자동 복구, Aurora Replicas로 읽기 확장. Multi-AZ 대기 인스턴스는 읽기 불가 함정.' },
    ],
  },
  {
    n: 482,
    en: `<p>A company needs to use an AWS Transfer Family SFTP-enabled server with an Amazon S3 bucket to receive updates from a third-party data supplier. The data is encrypted with Pretty Good Privacy (PGP) encryption. The company needs a solution that will automatically decrypt the data after the company receives the data.</p>
<p>A solutions architect will use a Transfer Family managed workflow. The company has created an IAM service role by using an IAM policy that allows access to AWS Secrets Manager and the S3 bucket. The role's trust relationship allows the transfer.amazonaws.com service to assume the role.</p>
<p>What should the solutions architect do next to complete the solution for automatic decryption?</p>`,
    ko: `<p>한 회사가 AWS Transfer Family SFTP 지원 서버와 Amazon S3 버킷을 사용하여 타사 데이터 공급업체로부터 업데이트를 받아야 합니다. 데이터는 PGP(Pretty Good Privacy) 암호화로 암호화됩니다. 회사는 데이터를 수신한 후 자동으로 복호화하는 솔루션이 필요합니다.</p>
<p>솔루션 아키텍트는 Transfer Family 관리 워크플로를 사용합니다. IAM 서비스 역할이 생성되었으며 신뢰 관계를 통해 transfer.amazonaws.com 서비스가 역할을 맡을 수 있습니다.</p>
<p>자동 복호화 솔루션을 완료하기 위해 다음에 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Store the PGP public key in Secrets Manager. Add a nominal step in the Transfer Family managed workflow to decrypt files. Configure PGP encryption parameters in the nominal step. Associate the workflow with the Transfer Family server.', ko: 'PGP 공개 키를 Secrets Manager에 저장합니다. Transfer Family 관리 워크플로에 명목 단계를 추가하여 파일을 복호화합니다. 명목 단계에서 PGP 암호화 매개변수를 구성합니다. 워크플로를 Transfer Family 서버와 연결합니다.' },
      { k: 'B', en: 'Store the PGP private key in Secrets Manager. Add an exception-handling step in the Transfer Family managed workflow to decrypt files. Configure PGP encryption parameters in the exception handler. Associate the workflow with the SFTP user.', ko: 'PGP 개인 키를 Secrets Manager에 저장합니다. 예외 처리 단계를 추가합니다. 예외 처리기에서 PGP 암호화 매개변수를 구성합니다. 워크플로를 SFTP 사용자와 연결합니다.' },
      { k: 'C', en: 'Store the PGP private key in Secrets Manager. Add a nominal step in the Transfer Family managed workflow to decrypt files. Configure PGP decryption parameters in the nominal step. Associate the workflow with the Transfer Family server.', ko: 'PGP 개인 키를 Secrets Manager에 저장합니다. Transfer Family 관리 워크플로에 명목 단계를 추가하여 파일을 복호화합니다. 명목 단계에서 PGP 복호화 매개변수를 구성합니다. 워크플로를 Transfer Family 서버와 연결합니다.' },
      { k: 'D', en: 'Store the PGP public key in Secrets Manager. Add an exception-handling step in the Transfer Family managed workflow to decrypt files. Configure PGP decryption parameters in the exception handler. Associate the workflow with the SFTP user.', ko: 'PGP 공개 키를 Secrets Manager에 저장합니다. 예외 처리 단계를 추가합니다. 예외 처리기에서 PGP 복호화 매개변수를 구성합니다. 워크플로를 SFTP 사용자와 연결합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — PGP 개인 키 Secrets Manager 저장 + 명목 단계 + 복호화 매개변수 + 서버 연결</span></p>
<p>PGP 암호화 원리를 이해해야 합니다:</p>
<ul>
<li><strong>개인 키(Private Key)</strong>: 복호화(Decryption)에 사용. 수신자가 보관</li>
<li><strong>공개 키(Public Key)</strong>: 암호화(Encryption)에 사용. 발신자에게 배포</li>
<li><strong>명목 단계(Nominal Step)</strong>: 정상 처리 흐름의 단계 (예외 처리 단계와 구분)</li>
<li><strong>워크플로를 서버에 연결</strong>: 모든 업로드에 자동 적용</li>
</ul>
<p><a href="https://docs.aws.amazon.com/transfer/latest/userguide/decrypt-files-workflowstep.html" target="_blank">AWS 공식 문서: Transfer Family PGP 복호화 워크플로</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, D</span> — 공개 키는 암호화에 사용합니다. 복호화에는 개인 키가 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — 예외 처리 단계는 워크플로 오류 처리용입니다. 정상 복호화는 명목 단계에서 수행해야 합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: '복호화 = 개인 키. 정상 처리 = 명목 단계. 서버 연결로 모든 업로드에 자동 적용.' },
    ],
  },
  {
    n: 483,
    en: `<p>A company is migrating infrastructure for its massive multiplayer game to AWS. The game's application features a leaderboard where players can see rankings in real time. The leaderboard requires microsecond reads and single-digit-millisecond write latencies. The datasets are single-digit terabytes in size and must be available to accept writes in less than a minute if a primary node failure occurs.</p>
<p>The company needs a solution in which data can persist for further analytical processing through a data pipeline.</p>
<p>Which solution will meet these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 대규모 멀티플레이어 게임의 인프라를 AWS로 이전하고 있습니다. 게임에는 플레이어가 실시간으로 순위를 볼 수 있는 리더보드가 있습니다. 리더보드는 마이크로초 단위의 읽기와 한 자리 밀리초 단위의 쓰기 지연 시간이 필요합니다. 데이터 세트는 한 자리 테라바이트 크기이며 기본 노드 장애 시 1분 이내에 쓰기를 허용해야 합니다.</p>
<p>회사는 데이터 파이프라인을 통해 추가 분석 처리를 위해 데이터를 유지할 수 있는 솔루션이 필요합니다.</p>
<p>최소한의 운영 오버헤드로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an Amazon DynamoDB table with on-demand capacity. Use DynamoDB Streams to persist data for analytics.', ko: 'Amazon DynamoDB 테이블을 온디맨드 용량으로 생성합니다. DynamoDB Streams를 사용하여 분석을 위한 데이터를 유지합니다.' },
      { k: 'B', en: 'Create an Amazon RDS database with a read replica. Configure the application to point writes to the writer endpoint. Configure the application to point reads to the reader endpoint.', ko: '읽기 복제본이 있는 Amazon RDS 데이터베이스를 생성합니다. 쓰기를 작성자 엔드포인트로, 읽기를 리더 엔드포인트로 지정하도록 애플리케이션을 구성합니다.' },
      { k: 'C', en: 'Create an Amazon MemoryDB for Redis cluster in Multi-AZ mode. Configure the application to interact with the primary node.', ko: 'Multi-AZ 모드에서 Redis용 Amazon MemoryDB 클러스터를 생성합니다. 애플리케이션이 기본 노드와 상호 작용하도록 구성합니다.' },
      { k: 'D', en: 'Create multiple Redis nodes on Amazon EC2 instances that are spread across multiple Availability Zones. Configure backups to Amazon S3.', ko: '여러 가용 영역에 분산된 Amazon EC2 인스턴스에 여러 Redis 노드를 생성합니다. Amazon S3에 대한 백업을 구성합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — Amazon MemoryDB for Redis (Multi-AZ 모드)</span></p>
<p>게임 리더보드의 극단적인 지연 시간 요구사항에 최적화된 서비스입니다:</p>
<ul>
<li><strong>마이크로초 읽기 / 밀리초 쓰기</strong>: 인메모리 Redis 기반으로 달성</li>
<li><strong>1분 이내 쓰기 허용</strong>: Multi-AZ 모드의 자동 장애 조치로 충족</li>
<li><strong>데이터 지속성(Persistence)</strong>: MemoryDB는 Redis와 달리 모든 데이터를 지속적으로 저장하여 분석 파이프라인 지원</li>
<li>ElastiCache for Redis(지속성 없음)와 달리 완전한 데이터 내구성 제공</li>
</ul>
<p><a href="https://aws.amazon.com/memorydb/" target="_blank">AWS 공식 문서: Amazon MemoryDB for Redis</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — DynamoDB는 마이크로초 읽기를 기본으로 제공하지 않습니다(DAX 필요). 게임 리더보드의 순위 집계에는 sorted set 등 Redis 자료구조가 더 적합합니다.</p>
<p><span class="mark-no">❌ B</span> — RDS는 마이크로초 읽기 지연 시간을 달성할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — EC2에 Redis 직접 설치는 운영 오버헤드가 크고 데이터 지속성 보장이 어렵습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'MemoryDB = 마이크로초 읽기 + 밀리초 쓰기 + 데이터 지속성 + Multi-AZ 자동 장애 조치. 게임 리더보드 최적 솔루션.' },
    ],
  },
  {
    n: 484,
    en: `<p>A company is running several applications in the AWS Cloud. The applications are specific to separate business units in the company. The company is running the components of the applications in several AWS accounts that are in an organization in AWS Organizations.</p>
<p>Every cloud resource in the company's organization has a tag that is named BusinessUnit. Every tag already has the appropriate value of the business unit name.</p>
<p>The company needs to allocate its cloud costs to different business units. The company also needs to visualize the cloud costs for each business unit.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS 클라우드에서 여러 애플리케이션을 실행하고 있습니다. 애플리케이션은 회사의 별도 사업 부문에 특화되어 있습니다. 회사 조직의 모든 클라우드 리소스에는 BusinessUnit이라는 태그가 있으며 이미 적절한 값이 설정되어 있습니다.</p>
<p>회사는 클라우드 비용을 여러 사업 부문에 할당하고 각 사업 부문의 클라우드 비용을 시각화해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'In the organization\'s management account, create a cost allocation tag named BusinessUnit. Also in the management account, create an Amazon S3 bucket and an AWS Cost and Usage Report (AWS CUR). Configure the S3 bucket as the destination for the AWS CUR. From the management account, query the AWS CUR data by using Amazon Athena. Use Amazon QuickSight for visualization.', ko: '관리 계정에서 BusinessUnit이라는 비용 할당 태그를 생성합니다. 관리 계정에 S3 버킷과 AWS CUR을 생성하고 S3 버킷을 CUR 대상으로 구성합니다. Amazon Athena로 CUR 데이터를 쿼리하고 Amazon QuickSight로 시각화합니다.' },
      { k: 'B', en: 'In each member account, create a cost allocation tag named BusinessUnit. In the organization\'s management account, create an Amazon S3 bucket and an AWS Cost and Usage Report. Configure the S3 bucket as the destination. Create an Amazon CloudWatch dashboard for visualization.', ko: '각 멤버 계정에서 BusinessUnit 비용 할당 태그를 생성합니다. 관리 계정에 S3 버킷과 CUR을 생성합니다. Amazon CloudWatch 대시보드로 시각화합니다.' },
      { k: 'C', en: 'In the organization\'s management account, create a cost allocation tag named BusinessUnit. In each member account, create an Amazon S3 bucket and an AWS Cost and Usage Report. Configure each S3 bucket as the destination. In the management account, create an Amazon CloudWatch dashboard for visualization.', ko: '관리 계정에서 BusinessUnit 비용 할당 태그를 생성합니다. 각 멤버 계정에 S3 버킷과 CUR을 생성합니다. 관리 계정에서 CloudWatch 대시보드로 시각화합니다.' },
      { k: 'D', en: 'In each member account, create a cost allocation tag named BusinessUnit. Also in each member account, create an Amazon S3 bucket and an AWS Cost and Usage Report. Query the AWS CUR data from the management account using Amazon Athena. Use Amazon QuickSight for visualization.', ko: '각 멤버 계정에서 비용 할당 태그, S3 버킷, CUR을 생성합니다. 관리 계정에서 Athena로 CUR 데이터를 쿼리하고 QuickSight로 시각화합니다.' },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — 관리 계정에서 비용 할당 태그 + 중앙 CUR + Athena + QuickSight</span></p>
<p>두 가지 핵심 포인트:</p>
<ul>
<li><strong>비용 할당 태그</strong>: 관리 계정에서 활성화하면 조직 전체 계정에 적용됩니다. 멤버 계정에서 개별 활성화 필요 없음</li>
<li><strong>CUR + Athena + QuickSight</strong>: AWS 비용 시각화의 표준 파이프라인. CloudWatch 대시보드는 운영 지표용으로 비용 시각화에 부적합</li>
<li>관리 계정에 중앙 CUR 생성으로 조직 전체 비용 단일 보고서 제공</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B, D</span> — 비용 할당 태그는 멤버 계정이 아닌 관리 계정에서 활성화해야 조직 전체에 적용됩니다. 또한 CloudWatch는 비용 시각화 도구가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 각 멤버 계정에 별도 CUR을 생성하면 통합 보기가 불가능하고 관리 복잡도가 증가합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: '관리 계정 비용 할당 태그 활성화 + 중앙 CUR + Athena + QuickSight = 표준 비용 시각화 파이프라인.' },
    ],
  },
  {
    n: 485,
    en: `<p>A utility company wants to collect usage data every 5 minutes from its smart meters to facilitate time-of-use metering. When a meter sends data to AWS, the data is sent to Amazon API Gateway, processed by an AWS Lambda function, and stored in an Amazon DynamoDB table. During the pilot phase, the Lambda functions took from 3 to 5 seconds to complete.</p>
<p>As more smart meters are deployed, the engineers notice the Lambda functions are taking from 1 to 2 minutes to complete. The functions are also increasing in duration as new types of metrics are collected from the devices. There are many ProvisionedThroughputExceededException errors while performing PUT operations on DynamoDB, and there are also many TooManyRequestsException errors from Lambda.</p>
<p>Which combination of changes will resolve these issues? (Choose two.)</p>`,
    ko: `<p>한 유틸리티 회사가 스마트 미터에서 5분마다 사용 데이터를 수집하려고 합니다. 데이터는 API Gateway → Lambda → DynamoDB 파이프라인으로 처리됩니다. 파일럿 단계에서 Lambda 함수는 3~5초가 걸렸습니다.</p>
<p>더 많은 스마트 미터가 배포되자 Lambda 함수가 1~2분이 걸리고 DynamoDB PUT 작업에서 ProvisionedThroughputExceededException 오류와 Lambda에서 TooManyRequestsException 오류가 많이 발생하고 있습니다.</p>
<p>이러한 문제를 해결하는 변경 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Increase the write capacity units to the DynamoDB table.', ko: 'DynamoDB 테이블에 대한 쓰기 용량 단위를 늘립니다.' },
      { k: 'B', en: 'Increase the memory available to the Lambda functions.', ko: 'Lambda 함수에 사용할 수 있는 메모리를 늘립니다.' },
      { k: 'C', en: 'Increase the payload size from the smart meters to send more data.', ko: '더 많은 데이터를 전송하기 위해 스마트 미터의 페이로드 크기를 늘립니다.' },
      { k: 'D', en: 'Stream the data into an Amazon Kinesis data stream from API Gateway and process the data in batches.', ko: 'API Gateway에서 Amazon Kinesis 데이터 스트림으로 데이터를 스트리밍하고 일괄 처리하여 데이터를 처리합니다.' },
      { k: 'E', en: 'Collect data in an Amazon SQS FIFO queue, which triggers a Lambda function to process each message.', ko: 'Amazon SQS FIFO 대기열에서 데이터를 수집하여 각 메시지를 처리하기 위한 Lambda 함수를 트리거합니다.' },
    ],
    answer: ['A', 'D'],
    vote: '100% AD',
    explain: `<p><span class="mark-ok">✅ A — DynamoDB 쓰기 용량 단위 증가</span></p>
<p><code>ProvisionedThroughputExceededException</code>은 프로비저닝된 WCU를 초과하는 직접적 신호입니다. WCU를 늘리거나 온디맨드 모드로 전환하여 해결합니다.</p>
<p><span class="mark-ok">✅ D — API Gateway → Kinesis 스트리밍 + 배치 처리</span></p>
<p><code>TooManyRequestsException</code>은 Lambda 동시성 한계를 초과하는 신호입니다. Kinesis를 중간에 배치하면:</p>
<ul>
<li>Lambda가 배치로 레코드를 처리하여 호출 횟수 대폭 감소</li>
<li>Kinesis가 버퍼 역할로 트래픽 스파이크 흡수</li>
<li>함수 실행 시간도 자연스럽게 감소</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Lambda 메모리 증가는 CPU 성능을 향상시키지만 Lambda 동시성 한계(TooManyRequestsException)를 해결하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — 페이로드 크기 증가는 문제를 악화시킵니다.</p>
<p><span class="mark-no">❌ E</span> — SQS FIFO는 메시지당 Lambda 트리거로 호출 횟수를 줄이지 않습니다. Kinesis의 배치 처리보다 효과가 낮습니다.</p>`,
    disc: [
      { ans: 'AD (100%)', txt: 'DynamoDB WCU 증가로 쓰기 오류 해결 + Kinesis 배치 처리로 Lambda 동시성 문제 해결.' },
    ],
  },
  {
    n: 486,
    en: `<p>A company recently completed a successful proof of concept of Amazon WorkSpaces. A solutions architect needs to make the solution highly available across two AWS Regions. Amazon WorkSpaces is deployed in a failover Region, and a hosted zone is deployed in Amazon Route 53.</p>
<p>What should the solutions architect do to configure high availability for the solution?</p>`,
    ko: `<p>한 회사가 Amazon WorkSpaces의 성공적인 개념 증명을 완료했습니다. 솔루션 아키텍트는 두 AWS 리전에서 솔루션을 고가용성으로 만들어야 합니다. Amazon WorkSpaces는 장애 조치 리전에 배포되고 호스팅 영역은 Amazon Route 53에 배포됩니다.</p>
<p>솔루션에 대한 고가용성을 구성하기 위해 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a connection alias in the primary Region and in the failover Region. Associate the connection aliases with a directory in each Region. Create a Route 53 failover routing policy. Set Evaluate Target Health to Yes.', ko: '기본 리전과 장애 조치 리전에 연결 별칭을 생성합니다. 연결 별칭을 각 리전의 디렉터리와 연결합니다. Route 53 장애 조치 라우팅 정책을 생성합니다. Evaluate Target Health를 예로 설정합니다.' },
      { k: 'B', en: 'Create a connection alias in the primary Region and in the failover Region. Associate the connection aliases with a directory in the primary Region. Create a Route 53 multivalue answer routing policy.', ko: '기본 및 장애 조치 리전에 연결 별칭을 생성합니다. 연결 별칭을 기본 리전의 디렉터리와 연결합니다. Route 53 다중값 응답 라우팅 정책을 생성합니다.' },
      { k: 'C', en: 'Create a connection alias in the primary Region. Associate the connection alias with a directory in the primary Region. Create a Route 53 weighted routing policy.', ko: '기본 리전에서 연결 별칭을 생성합니다. 연결 별칭을 기본 리전의 디렉터리와 연결합니다. Route 53 가중 라우팅 정책을 생성합니다.' },
      { k: 'D', en: 'Create a connection alias in the primary Region. Associate the connection alias with a directory in the failover Region. Create a Route 53 failover routing policy. Set Evaluate Target Health to Yes.', ko: '기본 리전에서 연결 별칭을 생성합니다. 연결 별칭을 장애 조치 리전의 디렉터리와 연결합니다. Route 53 장애 조치 라우팅 정책을 생성합니다.' },
    ],
    answer: ['A'],
    vote: '68% A / 32% D',
    explain: `<p><span class="mark-ok">✅ A — 각 리전에 연결 별칭 + 각 디렉터리 연결 + Route 53 장애 조치 라우팅</span></p>
<p>Amazon WorkSpaces 교차 리전 리디렉션의 올바른 구성 방법입니다:</p>
<ul>
<li><strong>양쪽 리전에 연결 별칭 생성</strong>: 각 리전의 WorkSpaces 디렉터리와 연결 별칭을 각각 연결</li>
<li><strong>Route 53 장애 조치</strong>: 기본 리전 장애 시 자동으로 장애 조치 리전으로 전환</li>
<li><strong>Evaluate Target Health</strong>: 실제 엔드포인트 상태를 기반으로 장애 조치 결정</li>
</ul>
<p><a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html" target="_blank">AWS 공식 문서: WorkSpaces 교차 리전 리디렉션</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 연결 별칭을 기본 리전의 디렉터리에만 연결하면 장애 조치 리전이 독립적으로 작동할 수 없습니다. 다중값 응답은 장애 조치 정책이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 단일 리전 연결 별칭은 고가용성을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 연결 별칭은 각 리전에서 해당 리전의 디렉터리와 연결해야 합니다. 기본 리전의 별칭을 장애 조치 리전 디렉터리에 연결하는 것은 올바르지 않습니다.</p>`,
    disc: [
      { ans: 'A (68%)', txt: '각 리전에 독립적인 연결 별칭 + 디렉터리 연결 + Route 53 장애 조치로 완전한 교차 리전 HA 구현.' },
      { ans: 'D (32%)', txt: '기본 리전 별칭 하나만으로도 장애 조치 리전을 지정할 수 있다는 주장. 그러나 각 리전에 별칭이 필요.' },
    ],
  },
  {
    n: 487,
    en: `<p>A company plans to migrate many VMs from an on-premises environment to AWS. The company requires an initial assessment of the on-premises environment before the migration, a visualization of the dependencies between applications that run on the VMs, and a report that provides an assessment of the on-premises environment.</p>
<p>To get this information, the company has initiated a Migration Evaluator assessment request. The company has the ability to install collector software in its on-premises environment without any constraints.</p>
<p>Which solution will provide the company with the required information with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 온프레미스 환경에서 AWS로 많은 VM을 마이그레이션할 계획입니다. 마이그레이션 전에 온프레미스 환경에 대한 초기 평가, VM에서 실행되는 애플리케이션 간의 종속성 시각화, 평가 보고서가 필요합니다.</p>
<p>회사는 Migration Evaluator 평가 요청을 시작했으며 제약 없이 온프레미스 환경에 수집기 소프트웨어를 설치할 수 있습니다.</p>
<p>최소한의 운영 오버헤드로 필요한 정보를 제공하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Install the AWS Application Discovery Agent on each on-premises VM. After the data collection period ends, use AWS Migration Hub to view the application dependencies. Download the Quick Insights assessment report from Migration Hub.', ko: '온프레미스 VM마다 AWS Application Discovery Agent를 설치합니다. 데이터 수집 기간이 끝나면 AWS Migration Hub를 사용하여 애플리케이션 종속성을 확인합니다. Migration Hub에서 Quick Insights 평가 보고서를 다운로드합니다.' },
      { k: 'B', en: 'Install the Migration Evaluator Collector on each on-premises VM. After data collection, use Migration Evaluator to view dependencies. Download the discovered server list. Upload the list to Amazon QuickSight. Download the Quick Insights assessment report.', ko: '온프레미스 VM마다 Migration Evaluator Collector를 설치합니다. 데이터 수집 후 애플리케이션 종속성을 확인합니다. 발견된 서버 목록을 내보내 Amazon QuickSight에 업로드합니다. Quick Insights 평가 보고서를 다운로드합니다.' },
      { k: 'C', en: 'Set up the AWS Application Discovery Service Agentless Collector in the on-premises environment. After data collection, use AWS Migration Hub to view application dependencies. Export the discovered server list from Application Discovery Service. Upload the list to Migration Evaluator. When the report is generated, download the Quick Insights assessment.', ko: '온프레미스 환경에서 AWS Application Discovery Service Agentless Collector를 설정합니다. 데이터 수집 후 Migration Hub로 애플리케이션 종속성을 확인합니다. 발견된 서버 목록을 내보내 Migration Evaluator에 업로드합니다. 보고서가 생성되면 Quick Insights 평가를 다운로드합니다.' },
      { k: 'D', en: 'Set up the Migration Evaluator Collector in the on-premises environment. Install the AWS Application Discovery Agent on each VM. After data collection, use AWS Migration Hub to view dependencies. Download the Quick Insights assessment report from Migration Evaluator.', ko: '온프레미스 환경에서 Migration Evaluator Collector를 설정합니다. 각 VM에 AWS Application Discovery Agent를 설치합니다. 데이터 수집 후 Migration Hub로 종속성을 확인합니다. Migration Evaluator에서 Quick Insights 평가 보고서를 다운로드합니다.' },
    ],
    answer: ['C'],
    vote: '56% C / 44% A',
    explain: `<p><span class="mark-ok">✅ C — Application Discovery Service Agentless Collector + Migration Hub + Migration Evaluator</span></p>
<p>VMware 환경에서 VM 마이그레이션 평가의 권장 방법입니다:</p>
<ul>
<li><strong>Agentless Collector</strong>: VM마다 에이전트 설치 없이 VM 하이퍼바이저 수준에서 데이터 수집 → 운영 오버헤드 최소화</li>
<li><strong>Migration Hub</strong>: 애플리케이션 종속성 시각화</li>
<li><strong>Migration Evaluator</strong>: TCO 및 마이그레이션 평가 보고서 생성 (Quick Insights)</li>
</ul>
<p><a href="https://aws.amazon.com/migration-evaluator/" target="_blank">AWS Migration Evaluator</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — VM마다 에이전트를 설치하는 것은 Agentless Collector보다 운영 오버헤드가 큽니다. 또한 Migration Hub Quick Insights 보고서는 Migration Evaluator 보고서가 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — VM마다 Migration Evaluator Collector를 설치하는 것은 에이전트 없는 방식보다 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ D</span> — Evaluator Collector + Discovery Agent 두 가지를 모두 설치하는 것은 불필요한 중복입니다.</p>`,
    disc: [
      { ans: 'C (56%)', txt: 'Agentless Collector로 에이전트 설치 없이 VM 데이터 수집. Migration Evaluator Quick Insights 보고서 생성.' },
      { ans: 'A (44%)', txt: 'Discovery Agent가 더 상세한 종속성 데이터를 제공한다고 주장. 그러나 VM에 에이전트 설치는 오버헤드 증가.' },
    ],
  },
  {
    n: 488,
    en: `<p>A company hosts its primary API on AWS by using an Amazon API Gateway API and AWS Lambda functions that contain the logic for the API methods. The company's internal applications use the API for core functionality and business logic. The company's customers use the API to access data from their accounts. Several customers also have access to a legacy API that is running on a single standalone Amazon EC2 instance.</p>
<p>The company wants to increase the security for these APIs to better prevent denial of service (DoS) attacks, check for vulnerabilities, and guard against common exploits.</p>
<p>What should a solutions architect do to meet these requirements?</p>`,
    ko: `<p>한 회사가 Amazon API Gateway API와 AWS Lambda 함수를 사용하여 AWS에서 기본 API를 호스팅합니다. 여러 고객이 단일 독립형 Amazon EC2 인스턴스에서 실행되는 레거시 API에도 접근할 수 있습니다.</p>
<p>회사는 이러한 API의 보안을 강화하여 DoS 공격을 방지하고, 취약성을 확인하고, 일반적인 악용에 대비하고자 합니다.</p>
<p>솔루션 아키텍트는 이러한 요구사항을 충족하기 위해 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Use AWS WAF to protect both APIs. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.', ko: 'AWS WAF를 사용하여 두 API를 모두 보호합니다. Amazon Inspector를 구성하여 레거시 API를 분석합니다. Amazon GuardDuty를 구성하여 API에 대한 악의적인 액세스 시도를 모니터링합니다.' },
      { k: 'B', en: 'Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze both APIs. Configure Amazon GuardDuty to block malicious attempts to access the APIs.', ko: 'AWS WAF를 사용하여 API Gateway API를 보호합니다. Amazon Inspector를 구성하여 두 API를 모두 분석합니다. Amazon GuardDuty를 구성하여 API에 대한 악의적인 액세스 시도를 차단합니다.' },
      { k: 'C', en: 'Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to analyze the legacy API. Configure Amazon GuardDuty to monitor for malicious attempts to access the APIs.', ko: 'AWS WAF를 사용하여 API Gateway API를 보호합니다. Amazon Inspector를 구성하여 레거시 API를 분석합니다. Amazon GuardDuty를 구성하여 API에 액세스하려는 악의적인 시도를 모니터링합니다.' },
      { k: 'D', en: 'Use AWS WAF to protect the API Gateway API. Configure Amazon Inspector to protect the legacy API. Configure Amazon GuardDuty to block malicious attempts to access the APIs.', ko: 'AWS WAF를 사용하여 API Gateway API를 보호합니다. Amazon Inspector를 구성하여 레거시 API를 보호합니다. Amazon GuardDuty를 구성하여 악의적인 시도를 차단합니다.' },
    ],
    answer: ['C'],
    vote: '80% C / 20% A',
    explain: `<p><span class="mark-ok">✅ C — AWS WAF(API Gateway) + Inspector(EC2 레거시) + GuardDuty(모니터링)</span></p>
<p>세 가지 서비스의 올바른 역할:</p>
<ul>
<li><strong>AWS WAF</strong>: API Gateway, ALB, CloudFront에만 연결 가능. EC2에 직접 연결 불가 → API Gateway API만 보호</li>
<li><strong>Amazon Inspector</strong>: EC2 취약성 스캔 → 레거시 API가 실행되는 EC2 인스턴스 분석</li>
<li><strong>Amazon GuardDuty</strong>: 위협 탐지 및 모니터링 서비스. 직접 차단하지 않음 → 모니터링이 올바른 설명</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — WAF를 EC2에 직접 연결할 수 없습니다. ALB나 CloudFront 없이 독립형 EC2의 레거시 API는 WAF로 보호 불가입니다.</p>
<p><span class="mark-no">❌ B, D</span> — GuardDuty는 위협 탐지 서비스로 직접 차단(block) 기능이 없습니다. 경고만 발생시킵니다.</p>`,
    disc: [
      { ans: 'C (80%)', txt: 'WAF는 API Gateway만. Inspector는 EC2 취약성 스캔. GuardDuty는 모니터링(차단 아님).' },
      { ans: 'A (20%)', txt: 'EC2에도 WAF 보호가 필요하다고 주장. 그러나 WAF는 EC2에 직접 연결 불가.' },
    ],
  },
  {
    n: 489,
    en: `<p>A company is running a serverless ecommerce application on AWS. The application uses Amazon API Gateway to invoke AWS Lambda Java functions. The Lambda functions connect to an Amazon RDS for MySQL database to store data.</p>
<p>During a recent sale event, a sudden increase in web traffic resulted in poor API performance and database connection failures. The company needs to implement a solution to minimize the latency for the Lambda functions and to support bursts in traffic.</p>
<p>Which solution will meet these requirements with the LEAST amount of change to the application?</p>`,
    ko: `<p>한 회사가 AWS에서 서버리스 전자상거래 애플리케이션을 실행하고 있습니다. 애플리케이션은 API Gateway를 사용하여 AWS Lambda Java 함수를 호출하고 함수는 Amazon RDS for MySQL 데이터베이스에 연결하여 데이터를 저장합니다.</p>
<p>최근 세일 이벤트 중 트래픽이 급증하여 API 성능이 저하되고 데이터베이스 연결에 오류가 발생했습니다. Lambda 함수의 지연 시간을 최소화하고 트래픽 급증을 지원하는 솔루션이 필요합니다.</p>
<p>애플리케이션을 최소한으로 변경하면서 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Update the code of the Lambda functions so that they open the database connection outside of the function handler. Increase the provisioned concurrency for the Lambda functions.', ko: 'Lambda 함수의 코드를 업데이트하여 함수 핸들러 외부에서 데이터베이스 연결을 열도록 합니다. Lambda 함수에 대한 프로비저닝된 동시성을 늘립니다.' },
      { k: 'B', en: 'Create an RDS Proxy endpoint for the database. Store database secrets in AWS Secrets Manager. Set up the required IAM permissions. Update the Lambda functions to connect to the RDS Proxy endpoint. Increase the provisioned concurrency for the Lambda functions.', ko: '데이터베이스에 대한 RDS 프록시 엔드포인트를 생성합니다. AWS Secrets Manager에 데이터베이스 시크릿을 저장합니다. 필요한 IAM 권한을 설정합니다. Lambda 함수를 업데이트하여 RDS Proxy 엔드포인트에 연결합니다. Lambda 함수에 대한 프로비저닝된 동시성을 늘립니다.' },
      { k: 'C', en: 'Create a custom parameter group. Increase the value of the max_connections parameter. Associate the custom parameter group with the RDS DB instance and schedule a reboot. Increase the reserved concurrency for the Lambda functions.', ko: '사용자 지정 매개변수 그룹을 생성합니다. max_connections 매개변수 값을 늘립니다. RDS DB 인스턴스에 연결하고 재부팅을 예약합니다. Lambda 함수에 대한 예약된 동시성을 늘립니다.' },
      { k: 'D', en: 'Create an RDS Proxy endpoint for the database. Store database secrets in AWS Secrets Manager. Set up the required IAM permissions. Update the Lambda functions to connect to the RDS Proxy endpoint. Increase the reserved concurrency for the Lambda functions.', ko: '데이터베이스에 대한 RDS 프록시 엔드포인트를 생성합니다. Secrets Manager에 시크릿을 저장합니다. 필요한 IAM 권한을 설정합니다. Lambda 함수를 업데이트하여 RDS Proxy 엔드포인트에 연결합니다. Lambda 함수에 대한 예약된 동시성을 늘립니다.' },
    ],
    answer: ['B'],
    vote: '54% B / 31% D',
    explain: `<p><span class="mark-ok">✅ B — RDS Proxy + Secrets Manager + 프로비저닝된 동시성</span></p>
<p>두 가지 문제를 해결합니다:</p>
<ul>
<li><strong>DB 연결 실패</strong>: RDS Proxy가 연결 풀링으로 Lambda 동시 호출의 DB 연결 폭증 방지</li>
<li><strong>Lambda 지연 시간</strong>: <strong>프로비저닝된 동시성(Provisioned Concurrency)</strong>이 콜드 스타트를 제거하여 지연 시간 최소화</li>
</ul>
<p><strong>예약된 동시성(Reserved Concurrency)과 차이:</strong> 예약된 동시성은 최대 동시 실행 수를 제한하는 것으로 지연 시간 개선 효과가 없습니다. 프로비저닝된 동시성은 인스턴스를 미리 워밍하여 지연 시간을 줄입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 핸들러 외부 연결이 개선에 도움이 되지만, RDS Proxy 없이는 대규모 동시 연결 폭증을 처리할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — max_connections 증가만으로는 Lambda 동시성에 따른 연결 급증을 따라갈 수 없습니다. 예약된 동시성은 지연 시간을 줄이지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — RDS Proxy 구성은 맞지만 예약된 동시성은 지연 시간 최소화에 기여하지 않습니다. 프로비저닝된 동시성이 필요합니다.</p>`,
    disc: [
      { ans: 'B (54%)', txt: 'RDS Proxy로 연결 관리 + 프로비저닝된 동시성으로 콜드 스타트 제거 = 지연 시간 최소화 + 트래픽 버스트 지원.' },
      { ans: 'D (31%)', txt: '예약된 동시성이 비용 효율적이라는 주장. 그러나 지연 시간 최소화에는 프로비저닝된 동시성이 필요.' },
    ],
  },
  {
    n: 490,
    en: `<p>A company requires that all internal application connectivity use private IP addresses. To facilitate this policy, a solutions architect has created interface endpoints to connect to AWS Public services. Upon testing, the solutions architect notices that the service names are resolving to public IP addresses, and that internal services cannot connect to the interface endpoints.</p>
<p>Which step should the solutions architect take to resolve this issue?</p>`,
    ko: `<p>한 회사가 모든 내부 애플리케이션 연결에 프라이빗 IP 주소를 사용하도록 요구합니다. 이 정책을 위해 솔루션 아키텍트가 AWS 퍼블릭 서비스에 연결하는 인터페이스 엔드포인트를 생성했습니다. 테스트 결과, 서비스 이름이 퍼블릭 IP 주소로 확인되고 내부 서비스가 인터페이스 엔드포인트에 연결할 수 없습니다.</p>
<p>이 문제를 해결하기 위해 솔루션 아키텍트는 어떤 단계를 거쳐야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Update the subnet route table with a route to the interface endpoint.', ko: '인터페이스 엔드포인트에 대한 경로로 서브넷 경로 테이블을 업데이트합니다.' },
      { k: 'B', en: 'Enable the private DNS option on the VPC attributes.', ko: 'VPC 속성에서 프라이빗 DNS 옵션을 활성화합니다.' },
      { k: 'C', en: 'Configure the security group on the interface endpoint to allow connectivity to the AWS services.', ko: '인터페이스 엔드포인트의 보안 그룹을 구성하여 AWS 서비스에 대한 연결을 허용합니다.' },
      { k: 'D', en: 'Configure an Amazon Route 53 private hosted zone with a conditional forwarder for the internal application.', ko: '내부 애플리케이션에 대한 조건부 포워더를 사용하여 Amazon Route 53 프라이빗 호스팅 영역을 구성합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — VPC 속성에서 프라이빗 DNS 활성화</span></p>
<p>문제의 원인: 서비스 이름이 퍼블릭 IP로 확인됩니다. 이는 VPC에서 프라이빗 DNS가 활성화되지 않아 인터페이스 엔드포인트의 프라이빗 DNS 이름이 동작하지 않는 것입니다.</p>
<p>인터페이스 엔드포인트(PrivateLink)의 프라이빗 DNS를 사용하려면 VPC에 두 가지가 활성화되어야 합니다:</p>
<ul>
<li><strong>DNS 호스트 이름(enableDnsHostnames)</strong>: VPC의 퍼블릭 DNS 호스트 이름 활성화</li>
<li><strong>DNS 확인(enableDnsSupport)</strong>: VPC의 DNS 확인 지원 활성화</li>
</ul>
<p><a href="https://docs.aws.amazon.com/vpc/latest/privatelink/create-interface-endpoint.html" target="_blank">AWS 공식 문서: 인터페이스 엔드포인트 사전 조건</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 인터페이스 엔드포인트는 게이트웨이 엔드포인트(S3, DynamoDB)와 달리 라우팅 테이블 변경이 필요 없습니다. ENI를 통해 직접 접근합니다.</p>
<p><span class="mark-no">❌ C</span> — 보안 그룹은 연결 허용 제어에 사용되지만, 서비스 이름이 퍼블릭 IP로 확인되는 DNS 문제의 원인이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — Route 53 프라이빗 호스팅 영역은 더 복잡한 구성이 필요하며, VPC 속성 활성화(B)로 간단히 해결됩니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '인터페이스 엔드포인트 프라이빗 DNS 사용의 전제 조건 = VPC DNS 호스트 이름 + DNS 확인 활성화.' },
    ],
  },
];