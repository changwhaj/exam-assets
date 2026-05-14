window.QS_SET33 = [
  {
    n: 321,
    en: `<p>A research company is running daily simulations in the AWS Cloud to meet high demand. The simulations run on several hundred Amazon EC2 instances that are based on Amazon Linux 2. Occasionally, a simulation gets stuck and requires a cloud operations engineer to solve the problem by connecting to an EC2 instance through SSH.</p><p>Company policy states that no EC2 instance can use the same SSH key and that all connections must be logged in AWS CloudTrail.</p><p>How can a solutions architect meet these requirements?</p>`,
    ko: `<p>한 연구 회사가 높은 수요를 충족하기 위해 AWS 클라우드에서 매일 시뮬레이션을 실행하고 있습니다. 시뮬레이션은 Amazon Linux 2를 기반으로 하는 수백 개의 Amazon EC2 인스턴스에서 실행됩니다. 때때로 시뮬레이션이 중단되고 클라우드 운영 엔지니어가 SSH를 통해 EC2 인스턴스에 연결하여 문제를 해결해야 합니다.</p><p>회사 정책에 따르면 EC2 인스턴스는 동일한 SSH 키를 사용할 수 없으며 모든 연결은 AWS CloudTrail에 기록되어야 합니다.</p><p>솔루션 설계자는 이러한 요구 사항을 어떻게 충족할 수 있습니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Launch new EC2 instances, and generate an individual SSH key for each instance. Store the SSH key in AWS Secrets Manager. Create a new IAM policy, and attach it to the engineers' IAM role with an Allow statement for the GetSecretValue action. Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.`, ko: `새로운 EC2 인스턴스를 시작하고 각 인스턴스에 대해 개별 SSH 키를 생성합니다. AWS Secrets Manager에 SSH 키를 저장합니다. 새 IAM 정책을 생성하고 GetSecretValue 작업에 대한 허용 구문을 사용하여 엔지니어의 IAM 역할에 연결합니다. SSH 클라이언트를 통해 연결할 때 Secrets Manager에서 SSH 키를 가져오도록 엔지니어에게 지시합니다.` },
      { k: 'B', en: `Create an AWS Systems Manager document to run commands on EC2 instances to set a new unique SSH key. Create a new IAM policy, and attach it to the engineers' IAM role with an Allow statement to run Systems Manager documents. Instruct the engineers to run the document to set an SSH key and to connect through any SSH client.`, ko: `EC2 인스턴스에서 명령을 실행하여 새로운 고유 SSH 키를 설정하는 AWS Systems Manager 문서를 생성합니다. 새 IAM 정책을 생성하고 Systems Manager 문서를 실행하도록 허용하는 구문을 사용하여 엔지니어의 IAM 역할에 연결합니다. 엔지니어에게 문서를 실행하여 SSH 키를 설정하고 SSH 클라이언트를 통해 연결하도록 지시합니다.` },
      { k: 'C', en: `Launch new EC2 instances without setting up any SSH key for the instances. Set up EC2 Instance Connect on each instance. Create a new IAM policy, and attach it to the engineers' IAM role with an Allow statement for the SendSSHPublicKey action. Instruct the engineers to connect to the instance by using a browser-based SSH client from the EC2 console.`, ko: `인스턴스에 대한 SSH 키를 설정하지 않고 새 EC2 인스턴스를 시작합니다. 각 인스턴스에 EC2 Instance Connect를 설정합니다. 새 IAM 정책을 생성하고 SendSSHPublicKey 작업에 대한 허용 구문을 사용하여 엔지니어의 IAM 역할에 연결합니다. EC2 콘솔에서 브라우저 기반 SSH 클라이언트를 사용하여 인스턴스에 연결하도록 엔지니어에게 지시합니다.` },
      { k: 'D', en: `Set up AWS Secrets Manager to store the EC2 SSH key. Create a new AWS Lambda function to create a new SSH key and to call AWS Systems Manager Session Manager to set the SSH key on the EC2 instance. Configure Secrets Manager to use the Lambda function for automatic rotation once daily. Instruct the engineers to fetch the SSH key from Secrets Manager when they connect through any SSH client.`, ko: `EC2 SSH 키를 저장하도록 AWS Secrets Manager를 설정합니다. 새 SSH 키를 생성하고 AWS Systems Manager Session Manager를 호출하여 EC2 인스턴스에 SSH 키를 설정하는 새 Lambda 함수를 생성합니다. 매일 한 번씩 자동 교체를 위해 Lambda 함수를 사용하도록 Secrets Manager를 구성합니다. SSH 클라이언트를 통해 연결할 때 Secrets Manager에서 SSH 키를 가져오도록 엔지니어에게 지시합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — EC2 Instance Connect + SendSSHPublicKey IAM 권한</span></p>
<p><strong>EC2 Instance Connect</strong>는 연결 시마다 <strong>일회성 임시 SSH 공개 키</strong>를 인스턴스에 60초간만 전송합니다. 따라서 인스턴스마다 동일한 키를 사용할 수 없다는 요구 사항이 자동으로 충족됩니다. 또한 EC2 Instance Connect를 통한 모든 연결(SendSSHPublicKey API 호출)은 <strong>AWS CloudTrail에 자동으로 기록</strong>됩니다. EC2 콘솔의 브라우저 기반 SSH 클라이언트를 사용하면 별도의 SSH 키 관리도 불필요합니다.</p>
<p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-eic.html" target="_blank">AWS 공식 문서: EC2 Instance Connect</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Secrets Manager에 인스턴스별 SSH 키를 저장하는 방식은 수백 개의 인스턴스에 대해 키를 개별 생성하고 관리해야 하므로 운영 오버헤드가 큽니다. 또한 엔지니어가 직접 Secrets Manager에서 키를 내려받아 사용하는 방식은 CloudTrail 로깅이 연결 이벤트를 직접 기록하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — SSM 문서를 통해 새 SSH 키를 설정하는 방식은 매 연결 전마다 문서를 실행해야 하는 번거로움이 있고, 엔지니어가 SSH 키를 직접 관리해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — 하루 1회 키 교체는 "동일한 키 재사용 금지" 요구 사항을 충분히 충족하지 못합니다. 같은 날 여러 엔지니어가 동일한 키를 사용할 수 있습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'EC2 Instance Connect는 연결 시마다 일회용 임시 키 사용 → 동일 키 재사용 불가. SendSSHPublicKey 호출이 CloudTrail에 자동 기록 → 두 요구 사항 모두 충족.' },
    ]
  },
  {
    n: 322,
    en: `<p>A company is migrating mobile banking applications to run on Amazon EC2 instances in a VPC. Backend service applications run in an on-premises data center. The data center has an AWS Direct Connect connection into AWS. The applications that run in the VPC need to resolve DNS requests to an on-premises Active Directory domain that runs in the data center.</p><p>Which solution will meet these requirements with the LEAST administrative overhead?</p>`,
    ko: `<p>한 회사가 VPC의 Amazon EC2 인스턴스에서 실행되도록 모바일 뱅킹 애플리케이션을 마이그레이션하고 있습니다. 백엔드 서비스 애플리케이션은 온프레미스 데이터 센터에서 실행됩니다. 데이터 센터에는 AWS에 대한 AWS Direct Connect 연결이 있습니다. VPC에서 실행되는 애플리케이션은 데이터 센터에서 실행되는 온프레미스 Active Directory 도메인에 대한 DNS 요청을 확인해야 합니다.</p><p>최소한의 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Provision a set of EC2 instances across two Availability Zones in the VPC as caching DNS servers to resolve DNS queries from the application servers within the VPC.`, ko: `VPC 내 애플리케이션 서버의 DNS 쿼리를 해결하기 위해 캐싱 DNS 서버로 VPC의 두 가용 영역에 걸쳐 EC2 인스턴스 세트를 프로비저닝합니다.` },
      { k: 'B', en: `Provision an Amazon Route 53 private hosted zone. Configure NS records that point to on-premises DNS servers.`, ko: `Amazon Route 53 프라이빗 호스팅 영역을 프로비저닝합니다. 온프레미스 DNS 서버를 가리키는 NS 레코드를 구성합니다.` },
      { k: 'C', en: `Create DNS endpoints by using Amazon Route 53 Resolver. Add conditional forwarding rules to resolve DNS namespaces between the on-premises data center and the VPC.`, ko: `Amazon Route 53 Resolver를 사용하여 DNS 엔드포인트를 생성합니다. 온프레미스 데이터 센터와 VPC 간의 DNS 네임스페이스를 확인하기 위한 조건부 전달 규칙을 추가합니다.` },
      { k: 'D', en: `Provision a new Active Directory domain controller in the VPC with a bidirectional trust between this new domain and the on-premises Active Directory domain.`, ko: `이 새 도메인과 온프레미스 Active Directory 도메인 간의 양방향 신뢰를 통해 VPC에 새 Active Directory 도메인 컨트롤러를 프로비저닝합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — Route 53 Resolver + 아웃바운드 엔드포인트 + 조건부 전달 규칙</span></p>
<p><strong>Amazon Route 53 Resolver</strong>는 완전 관리형 서비스로, <strong>아웃바운드 엔드포인트</strong>를 생성하고 온프레미스 AD 도메인에 대한 <strong>조건부 전달 규칙(Conditional Forwarding Rule)</strong>을 구성하면 VPC의 DNS 쿼리가 Direct Connect를 통해 온프레미스 DNS 서버로 전달됩니다. EC2 인스턴스나 AD 도메인 컨트롤러를 별도로 관리할 필요가 없어 관리 오버헤드가 최소화됩니다.</p>
<p><a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver-forwarding-outbound-queries.html" target="_blank">AWS 공식 문서: Route 53 Resolver 아웃바운드 쿼리 전달</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2 캐싱 DNS 서버를 직접 관리하는 방식은 패치, 고가용성, 스케일링을 모두 수동으로 처리해야 하므로 관리 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ B</span> — Route 53 프라이빗 호스팅 영역에서 NS 레코드로 온프레미스 DNS 서버를 가리키는 방식은 AWS Route 53의 표준 동작 방식이 아니며, 프라이빗 호스팅 영역은 AWS 내 레코드를 정의하는 용도입니다.</p>
<p><span class="mark-no">❌ D</span> — VPC에 별도의 AD 도메인 컨트롤러를 배포하고 양방향 신뢰를 구성하는 것은 관리 오버헤드가 가장 높은 방식입니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'Route 53 Resolver 아웃바운드 엔드포인트 + 조건부 전달이 표준 온프레미스-VPC DNS 통합 패턴. EC2 DNS 서버(A) 대비 완전 관리형으로 오버헤드 최소.' },
    ]
  },
  {
    n: 323,
    en: `<p>A company processes environmental data. The company has set up sensors to provide a continuous stream of data from different areas in a city. The data is available in JSON format.</p><p>The company wants to use an AWS solution to send the data to a database that does not require fixed schemas for storage. The data must be sent in real time.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>회사에서 환경 데이터를 처리합니다. 회사는 도시의 다양한 영역에서 지속적인 데이터 스트림을 제공하기 위해 센서를 설치했습니다. 데이터는 JSON 형식으로 제공됩니다.</p><p>회사는 AWS 솔루션을 사용하여 저장을 위해 고정된 스키마가 필요하지 않은 데이터베이스에 데이터를 전송하려고 합니다. 데이터는 실시간으로 전송되어야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use Amazon Kinesis Data Firehose to send the data to Amazon Redshift.`, ko: `Amazon Kinesis Data Firehose를 사용하여 Amazon Redshift로 데이터를 보냅니다.` },
      { k: 'B', en: `Use Amazon Kinesis Data Streams to send the data to Amazon DynamoDB.`, ko: `Amazon Kinesis Data Streams를 사용하여 Amazon DynamoDB로 데이터를 보냅니다.` },
      { k: 'C', en: `Use Amazon Managed Streaming for Apache Kafka (Amazon MSK) to send the data to Amazon Aurora.`, ko: `Amazon Managed Streaming for Apache Kafka(Amazon MSK)를 사용하여 데이터를 Amazon Aurora로 보냅니다.` },
      { k: 'D', en: `Use Amazon Kinesis Data Firehose to send the data to Amazon Keyspaces (for Apache Cassandra).`, ko: `Amazon Kinesis Data Firehose를 사용하여 Amazon Keyspaces(Apache Cassandra용)로 데이터를 보냅니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Kinesis Data Streams → Amazon DynamoDB</span></p>
<p>두 가지 핵심 요구 사항을 분석하면:<br>① <strong>실시간 전송</strong>: <strong>Amazon Kinesis Data Streams</strong>는 진정한 실시간(밀리초 지연) 데이터 스트리밍을 지원합니다. Kinesis Data Firehose는 "근사 실시간(near real-time)"으로 수십 초~수 분의 버퍼링이 발생합니다.<br>② <strong>고정 스키마 불필요</strong>: <strong>Amazon DynamoDB</strong>는 NoSQL 키-값/문서 데이터베이스로 고정된 스키마 없이 JSON 데이터를 유연하게 저장할 수 있습니다. Redshift와 Aurora는 관계형 DB로 고정 스키마가 필요합니다.</p>
<p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html" target="_blank">AWS 공식 문서: Amazon DynamoDB</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Kinesis Data Firehose는 근사 실시간(버퍼링 60초~900초)이며, Amazon Redshift는 관계형 DB로 고정 스키마가 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon Aurora는 관계형 DB로 고정 스키마가 필요합니다. 스키마 유연성 요구 사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon Kinesis Data Firehose는 Amazon Keyspaces를 지원하는 대상이 아닙니다(S3, Redshift, OpenSearch, Splunk, HTTP 엔드포인트 등만 지원).</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'Kinesis Data Streams(실시간) vs Firehose(근사 실시간) 구분이 핵심. DynamoDB는 NoSQL로 고정 스키마 불필요. Firehose는 Keyspaces 대상 미지원.' },
    ]
  },
  {
    n: 324,
    en: `<p>A company is migrating a legacy application from an on-premises data center to AWS. The application uses MongoDB as a key-value database. According to the company's technical guidelines, all Amazon EC2 instances must be hosted in a private subnet without an internet connection. In addition, all connectivity between applications and databases must be encrypted. The database must be able to scale based on demand.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>회사는 온프레미스 데이터 센터의 레거시 애플리케이션을 AWS로 마이그레이션하고 있습니다. 애플리케이션은 MongoDB를 키-값 데이터베이스로 사용합니다. 회사의 기술 지침에 따라 모든 Amazon EC2 인스턴스는 인터넷 연결 없이 프라이빗 서브넷에서 호스팅되어야 합니다. 또한 애플리케이션과 데이터베이스 간의 모든 연결은 암호화되어야 합니다. 데이터베이스는 수요에 따라 확장할 수 있어야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create new Amazon DocumentDB (with MongoDB compatibility) tables for the application with Provisioned IOPS volumes. Use the instance endpoint to connect to Amazon DocumentDB.`, ko: `프로비저닝된 IOPS 볼륨이 있는 애플리케이션을 위한 새로운 Amazon DocumentDB(MongoDB 호환) 테이블을 생성합니다. 인스턴스 엔드포인트를 사용하여 Amazon DocumentDB에 연결합니다.` },
      { k: 'B', en: `Create new Amazon DynamoDB tables for the application with on-demand capacity. Use a gateway VPC endpoint for DynamoDB to connect to the DynamoDB tables.`, ko: `온디맨드 용량을 갖춘 애플리케이션을 위한 새로운 Amazon DynamoDB 테이블을 생성합니다. DynamoDB용 게이트웨이 VPC 엔드포인트를 사용하여 DynamoDB 테이블에 연결합니다.` },
      { k: 'C', en: `Create new Amazon DynamoDB tables for the application with on-demand capacity. Use an interface VPC endpoint for DynamoDB to connect to the DynamoDB tables.`, ko: `온디맨드 용량을 갖춘 애플리케이션을 위한 새로운 Amazon DynamoDB 테이블을 생성합니다. DynamoDB용 인터페이스 VPC 엔드포인트를 사용하여 DynamoDB 테이블에 연결합니다.` },
      { k: 'D', en: `Create new Amazon DocumentDB (with MongoDB compatibility) tables for the application with Provisioned IOPS volumes. Use the cluster endpoint to connect to Amazon DocumentDB.`, ko: `프로비저닝된 IOPS 볼륨이 있는 애플리케이션을 위한 새로운 Amazon DocumentDB(MongoDB 호환) 테이블을 생성합니다. 클러스터 엔드포인트를 사용하여 Amazon DocumentDB에 연결합니다.` },
    ],
    answer: ['B'],
    vote: '53% B / 37% D',
    explain: `<p><span class="mark-ok">✅ B — DynamoDB 온디맨드 + 게이트웨이 VPC 엔드포인트</span></p>
<p>세 가지 요구 사항을 분석하면:<br>① <strong>수요 기반 확장</strong>: DynamoDB <strong>온디맨드 용량</strong>은 트래픽에 따라 자동으로 확장/축소됩니다. DocumentDB의 프로비저닝된 IOPS는 미리 할당된 용량에 제한이 있어 급격한 수요 증가 시 스로틀링이 발생합니다.<br>② <strong>프라이빗 서브넷 + 인터넷 없이 접근</strong>: DynamoDB용 <strong>게이트웨이 VPC 엔드포인트</strong>는 인터넷 게이트웨이 없이 VPC 내에서 DynamoDB에 직접 접근할 수 있게 합니다.<br>③ <strong>암호화 연결</strong>: DynamoDB의 모든 트래픽은 HTTPS(TLS)로 암호화됩니다.</p>
<p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html" target="_blank">AWS 공식 문서: DynamoDB VPC 엔드포인트</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, D</span> — DocumentDB의 <strong>프로비저닝된 IOPS 볼륨</strong>은 사전 설정된 용량 한도 내에서만 동작하므로 수요 기반 자동 확장이 어렵습니다. DocumentDB는 스토리지 자동 증가는 지원하나 프로비저닝된 IOPS 처리량 자체는 수동 조정이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — DynamoDB용 <strong>인터페이스 VPC 엔드포인트</strong>는 기술적으로 가능하지만 추가 비용이 발생하며, DynamoDB는 기본적으로 <strong>게이트웨이 VPC 엔드포인트(무료)</strong>를 표준 방식으로 지원합니다.</p>`,
    disc: [
      { ans: 'B (53%)', txt: '"수요 기반 확장" = 온디맨드 용량. Provisioned IOPS DocumentDB는 확장에 제약. DynamoDB 게이트웨이 VPC 엔드포인트로 프라이빗 서브넷에서 인터넷 없이 접근 가능.' },
      { ans: 'D (37%)', txt: 'MongoDB 호환성을 중시하며 레거시 애플리케이션 코드 변경을 최소화하려는 관점. 하지만 프로비저닝된 IOPS의 확장 제약이 치명적 단점.' },
    ]
  },
  {
    n: 325,
    en: `<p>A company is running an application on Amazon EC2 instances in the AWS Cloud. The application is using a MongoDB database with a replica set as its data tier. The MongoDB database is installed on systems in the company's on-premises data center and is accessible through an AWS Direct Connect connection to the data center environment.</p><p>A solutions architect must migrate the on-premises MongoDB database to Amazon DocumentDB (with MongoDB compatibility).</p><p>Which strategy should the solutions architect choose to perform this migration?</p>`,
    ko: `<p>한 회사가 AWS 클라우드의 Amazon EC2 인스턴스에서 애플리케이션을 실행하고 있습니다. 애플리케이션은 복제본 세트를 데이터 계층으로 사용하는 MongoDB 데이터베이스를 사용하고 있습니다. MongoDB 데이터베이스는 회사의 온프레미스 데이터 센터 시스템에 설치되며 데이터 센터 환경에 대한 AWS Direct Connect 연결을 통해 액세스할 수 있습니다.</p><p>솔루션 설계자는 온프레미스 MongoDB 데이터베이스를 Amazon DocumentDB(MongoDB와 호환 가능)로 마이그레이션해야 합니다.</p><p>솔루션 설계자는 이 마이그레이션을 수행하기 위해 어떤 전략을 선택해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a fleet of EC2 instances. Install MongoDB Community Edition on the EC2 instances, and create a database. Configure continuous synchronous replication with the database that is running in the on-premises data center.`, ko: `EC2 인스턴스 집합을 생성합니다. EC2 인스턴스에 MongoDB Community Edition을 설치하고 데이터베이스를 생성합니다. 온프레미스 데이터 센터에서 실행 중인 데이터베이스를 사용하여 연속 동기 복제를 구성합니다.` },
      { k: 'B', en: `Create an AWS Database Migration Service (AWS DMS) replication instance. Create a source endpoint for the on-premises MongoDB database by using change data capture (CDC). Create a target endpoint for the Amazon DocumentDB database. Create and run a DMS migration task.`, ko: `AWS Database Migration Service(AWS DMS) 복제 인스턴스를 생성합니다. 변경 데이터 캡처(CDC)를 사용하여 온프레미스 MongoDB 데이터베이스에 대한 소스 엔드포인트를 만듭니다. Amazon DocumentDB 데이터베이스에 대한 대상 엔드포인트를 생성합니다. DMS 마이그레이션 작업을 생성하고 실행합니다.` },
      { k: 'C', en: `Create a data migration pipeline by using AWS Data Pipeline. Define data nodes for the on-premises MongoDB database and the Amazon DocumentDB database. Create a scheduled task to run the data pipeline.`, ko: `AWS Data Pipeline을 사용하여 데이터 마이그레이션 파이프라인을 생성합니다. 온프레미스 MongoDB 데이터베이스 및 Amazon DocumentDB 데이터베이스에 대한 데이터 노드를 정의합니다. 데이터 파이프라인을 실행하기 위한 예약된 작업을 만듭니다.` },
      { k: 'D', en: `Create a source endpoint for the on-premises MongoDB database by using AWS Glue crawlers. Configure continuous asynchronous replication between the MongoDB database and the Amazon DocumentDB database.`, ko: `AWS Glue 크롤러를 사용하여 온프레미스 MongoDB 데이터베이스에 대한 소스 엔드포인트를 생성합니다. MongoDB 데이터베이스와 Amazon DocumentDB 데이터베이스 간의 연속 비동기 복제를 구성합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS DMS + CDC 소스 엔드포인트 + DocumentDB 대상 엔드포인트</span></p>
<p><strong>AWS Database Migration Service(DMS)</strong>는 MongoDB를 소스로, Amazon DocumentDB를 대상으로 하는 마이그레이션을 공식 지원합니다. <strong>변경 데이터 캡처(CDC)</strong>를 활성화하면 초기 전체 로드 후 온프레미스에서 계속 발생하는 변경 사항도 실시간으로 DocumentDB에 동기화됩니다. 마이그레이션 완료 후 애플리케이션을 DocumentDB로 전환하면 되므로 다운타임을 최소화할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/docdb-migration.html" target="_blank">AWS 공식 문서: DocumentDB 마이그레이션 가이드</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2에 MongoDB를 설치하여 중간 단계를 거치는 방식은 불필요한 복잡성을 추가하며, AWS 관리형 마이그레이션 도구(DMS)보다 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Data Pipeline은 배치 데이터 이동에 사용되며, 실시간 CDC 복제를 지원하지 않습니다. MongoDB에서 DocumentDB로의 마이그레이션에도 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Glue 크롤러는 데이터 카탈로그를 구축하는 도구이며, MongoDB 소스 엔드포인트 생성이나 지속적인 DB 복제에는 사용되지 않습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'AWS DMS는 MongoDB → DocumentDB 마이그레이션을 공식 지원. CDC로 초기 로드 후 실시간 변경 동기화 → 최소 다운타임 마이그레이션 가능.' },
    ]
  },
  {
    n: 326,
    en: `<p>A company is rearchitecting its applications to run on AWS. The company's infrastructure includes multiple Amazon EC2 instances. The company's development team needs different levels of access. The company wants to implement a policy that requires all Windows EC2 instances to be joined to an Active Directory domain on AWS. The company also wants to implement enhanced security processes such as multi-factor authentication (MFA). The company wants to use managed AWS services wherever possible.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS에서 실행되도록 애플리케이션을 재설계하고 있습니다. 회사의 인프라에는 여러 Amazon EC2 인스턴스가 포함되어 있습니다. 회사의 개발팀에는 다양한 수준의 액세스가 필요합니다. 회사는 모든 Windows EC2 인스턴스를 AWS의 Active Directory 도메인에 조인하도록 요구하는 정책을 구현하려고 합니다. 또한 회사는 다중 요소 인증(MFA)과 같은 향상된 보안 프로세스를 구현하려고 합니다. 회사는 가능한 한 관리형 AWS 서비스를 사용하기를 원합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS Directory Service for Microsoft Active Directory implementation. Launch an Amazon Workspace. Connect to and use the Workspace for domain security configuration tasks.`, ko: `Microsoft Active Directory 구현을 위한 AWS 디렉터리 서비스를 생성합니다. Amazon Workspace를 시작합니다. 도메인 보안 구성 작업을 위해 Workspace에 연결하고 사용합니다.` },
      { k: 'B', en: `Create an AWS Directory Service for Microsoft Active Directory implementation. Launch an EC2 instance. Connect to and use the EC2 instance for domain security configuration tasks.`, ko: `Microsoft Active Directory 구현을 위한 AWS 디렉터리 서비스를 생성합니다. EC2 인스턴스를 시작합니다. 도메인 보안 구성 작업을 위해 EC2 인스턴스에 연결하고 사용합니다.` },
      { k: 'C', en: `Create an AWS Directory Service Simple AD implementation. Launch an EC2 instance. Connect to and use the EC2 instance for domain security configuration tasks.`, ko: `AWS Directory Service Simple AD 구현을 생성합니다. EC2 인스턴스를 시작합니다. 도메인 보안 구성 작업을 위해 EC2 인스턴스에 연결하고 사용합니다.` },
      { k: 'D', en: `Create an AWS Directory Service Simple AD implementation. Launch an Amazon Workspace. Connect to and use the Workspace for domain security configuration tasks.`, ko: `AWS Directory Service Simple AD 구현을 생성합니다. Amazon Workspace를 시작합니다. 도메인 보안 구성 작업을 위해 Workspace에 연결하고 사용합니다.` },
    ],
    answer: ['B'],
    vote: '59% B / 41% A',
    explain: `<p><span class="mark-ok">✅ B — AWS Directory Service for Microsoft AD + EC2 인스턴스</span></p>
<p>두 가지를 고려해야 합니다:<br>① <strong>AWS Directory Service for Microsoft Active Directory</strong>(관리형 AD)는 MFA, 그룹 정책, EC2 도메인 조인 등 엔터프라이즈 AD 기능을 완전 지원합니다. Simple AD는 MFA를 지원하지 않습니다.<br>② 도메인 보안 구성 작업(그룹 정책 편집, ADUC 관리 등)에는 도메인에 조인된 <strong>Windows EC2 인스턴스</strong>를 관리 워크스테이션으로 사용하는 것이 AWS 공식 권장 방식입니다. Amazon WorkSpaces는 최종 사용자 데스크톱 용도로 적합하며, 도메인 관리 도구 실행에는 EC2가 더 적합합니다.</p>
<p><a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/directory_administration.html" target="_blank">AWS 공식 문서: WorkSpaces 디렉터리 관리</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon WorkSpaces는 관리형 서비스이지만 도메인 보안 구성 작업(Active Directory Users and Computers, Group Policy Management 등)에는 기능 제약이 있습니다. AWS 공식 문서에서도 디렉터리 관리 작업에 EC2를 권장합니다.</p>
<p><span class="mark-no">❌ C, D</span> — <strong>Simple AD</strong>는 MFA를 지원하지 않습니다. MFA 요구 사항을 충족하려면 반드시 AWS Directory Service for Microsoft Active Directory(Managed AD)를 사용해야 합니다.</p>`,
    disc: [
      { ans: 'B (59%)', txt: 'Simple AD는 MFA 미지원 → C, D 제외. 도메인 관리 작업에 EC2가 WorkSpaces보다 적합(AWS 공식 권장). MFA는 Managed Microsoft AD에서 지원.' },
      { ans: 'A (41%)', txt: '"관리형 AWS 서비스 우선" 원칙에서 WorkSpaces가 EC2보다 더 관리형이라는 주장. 그러나 도메인 보안 구성 작업 수행 가능성 측면에서 B가 우세.' },
    ]
  },
  {
    n: 327,
    en: `<p>A company wants to migrate its on-premises application to AWS. The database for the application stores structured product data and temporary user session data. The company needs to decouple the product data from the user session data. The company also needs to implement replication in another AWS Region for disaster recovery.</p><p>Which solution will meet these requirements with the HIGHEST performance?</p>`,
    ko: `<p>회사에서 온프레미스 애플리케이션을 AWS로 마이그레이션하려고 합니다. 애플리케이션용 데이터베이스는 구조화된 제품 데이터와 임시 사용자 세션 데이터를 저장합니다. 회사는 사용자 세션 데이터에서 제품 데이터를 분리해야 합니다. 또한 회사는 재해 복구를 위해 다른 AWS 리전에 복제를 구현해야 합니다.</p><p>최고의 성능으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an Amazon RDS DB instance with separate schemas to host the product data and the user session data. Configure a read replica for the DB instance in another Region.`, ko: `제품 데이터와 사용자 세션 데이터를 호스팅하기 위해 별도의 스키마를 사용하여 Amazon RDS DB 인스턴스를 생성합니다. 다른 리전의 DB 인스턴스에 대한 읽기 전용 복제본을 구성합니다.` },
      { k: 'B', en: `Create an Amazon RDS DB instance to host the product data. Configure a read replica for the DB instance in another Region. Create a global datastore in Amazon ElastiCache for Memcached to host the user session data.`, ko: `제품 데이터를 호스팅할 Amazon RDS DB 인스턴스를 생성합니다. 다른 리전의 DB 인스턴스에 대한 읽기 전용 복제본을 구성합니다. 사용자 세션 데이터를 호스팅하기 위해 Amazon ElastiCache for Memcached에 글로벌 데이터 스토어를 생성합니다.` },
      { k: 'C', en: `Create two Amazon DynamoDB global tables. Use one global table to host the product data. Use the other global table to host the user session data. Use DynamoDB Accelerator (DAX) for caching.`, ko: `두 개의 Amazon DynamoDB 글로벌 테이블을 생성합니다. 하나의 글로벌 테이블을 사용하여 제품 데이터를 호스팅합니다. 다른 전역 테이블을 사용하여 사용자 세션 데이터를 호스팅합니다. 캐싱에는 DynamoDB Accelerator(DAX)를 사용합니다.` },
      { k: 'D', en: `Create an Amazon RDS DB instance to host the product data. Configure a read replica for the DB instance in another Region. Create an Amazon DynamoDB global table to host the user session data.`, ko: `제품 데이터를 호스팅할 Amazon RDS DB 인스턴스를 생성합니다. 다른 리전의 DB 인스턴스에 대한 읽기 전용 복제본을 구성합니다. 사용자 세션 데이터를 호스팅할 Amazon DynamoDB 전역 테이블을 생성합니다.` },
    ],
    answer: ['D'],
    vote: '53% D / 31% C',
    explain: `<p><span class="mark-ok">✅ D — RDS(구조화된 제품 데이터 + 리전 간 읽기 복제본) + DynamoDB 글로벌 테이블(세션 데이터)</span></p>
<p>요구 사항별 분석:<br>① <strong>구조화된 제품 데이터</strong>: RDS는 구조화된 관계형 데이터를 위한 표준 선택입니다.<br>② <strong>DR을 위한 리전 간 복제</strong>: RDS 리전 간 읽기 전용 복제본으로 제품 데이터 복제, DynamoDB 글로벌 테이블로 세션 데이터 복제가 모두 충족됩니다.<br>③ <strong>데이터 분리</strong>: RDS와 DynamoDB를 별도로 사용하여 제품 데이터와 세션 데이터를 분리합니다.<br>B는 ElastiCache for Memcached를 사용하는데, <strong>Memcached는 글로벌 데이터 스토어를 지원하지 않습니다</strong>(Redis만 지원). A는 데이터를 분리하지 않습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/GlobalDataStore.html" target="_blank">AWS 공식 문서: ElastiCache 글로벌 데이터 스토어(Redis 전용)</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 동일 RDS 인스턴스 내 별도 스키마는 데이터를 물리적으로 분리하지 않아 데이터 격리 및 독립적 확장이 어렵습니다.</p>
<p><span class="mark-no">❌ B</span> — <strong>ElastiCache for Memcached는 글로벌 데이터 스토어를 지원하지 않습니다.</strong> 리전 간 복제가 필요한 경우 Redis를 사용해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — 구조화된 제품 데이터에 DynamoDB를 사용하는 것은 가능하나, 복잡한 관계형 쿼리가 필요한 제품 카탈로그에는 RDS가 더 적합합니다. DAX 캐싱이 성능상 이점이 있으나, 구조화된 데이터에 RDS를 사용하는 것이 더 일반적이고 안정적입니다.</p>`,
    disc: [
      { ans: 'D (53%)', txt: '구조화된 데이터 = RDS. Memcached 글로벌 데이터 스토어 미지원으로 B 제외. DynamoDB 글로벌 테이블로 세션 데이터 DR 충족.' },
      { ans: 'C (31%)', txt: 'DynamoDB도 구조화된 데이터 처리 가능 + DAX로 최고 성능. 하지만 "구조화된 제품 데이터"는 RDS가 더 적합하다는 의견이 우세.' },
    ]
  },
  {
    n: 328,
    en: `<p>A company orchestrates a multi-account structure on AWS by using AWS Control Tower. The company is using AWS Organizations, AWS Config, and AWS Trusted Advisor. The company has a specific OU for development accounts that developers use to experiment on AWS. The company has hundreds of developers, and each developer has an individual development account.</p><p>The company wants to optimize costs in these development accounts. Amazon EC2 instances and Amazon RDS instances in these accounts must be burstable. The company wants to disallow the use of other services that are not relevant.</p><p>What should a solutions architect recommend to meet these requirements?</p>`,
    ko: `<p>회사는 AWS Control Tower를 사용하여 AWS에서 다중 계정 구조를 조정합니다. 회사는 AWS Organizations, AWS Config 및 AWS Trusted Advisor를 사용하고 있습니다. 회사에는 개발자가 AWS에서 실험하는 데 사용하는 개발 계정에 대한 특정 OU가 있습니다. 회사에는 수백 명의 개발자가 있으며 각 개발자는 개별 개발 계정을 가지고 있습니다.</p><p>회사는 이러한 개발 계정의 비용을 최적화하려고 합니다. 이러한 계정의 Amazon EC2 인스턴스와 Amazon RDS 인스턴스는 버스트 가능해야 합니다. 회사는 관련성이 없는 기타 서비스의 이용을 거부하고자 합니다.</p><p>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 권장해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a custom SCP in AWS Organizations to allow the deployment of only burstable instances and to disallow services that are not relevant. Apply the SCP to the development OU.`, ko: `AWS Organizations에서 사용자 지정 SCP를 생성하여 버스트 가능한 인스턴스의 배포만 허용하고 관련 없는 서비스는 허용하지 않습니다. 개발 OU에 SCP를 적용합니다.` },
      { k: 'B', en: `Create a custom detective control (guardrail) in AWS Control Tower. Configure the control (guardrail) to allow the deployment of only burstable instances and to disallow services that are not relevant. Apply the control (guardrail) to the development OU.`, ko: `AWS Control Tower에서 사용자 지정 탐지 제어(가드레일)를 생성합니다. 버스트 가능한 인스턴스의 배포만 허용하고 관련 없는 서비스는 허용하지 않도록 제어(가드레일)를 구성합니다. 개발 OU에 제어(가드레일)를 적용합니다.` },
      { k: 'C', en: `Create a custom preventive control (guardrail) in AWS Control Tower. Configure the control (guardrail) to allow the deployment of only burstable instances and to disallow services that are not relevant. Apply the control (guardrail) to the development OU.`, ko: `AWS Control Tower에서 사용자 지정 예방 제어(가드레일)를 생성합니다. 버스트 가능한 인스턴스의 배포만 허용하고 관련 없는 서비스는 허용하지 않도록 제어(가드레일)를 구성합니다. 개발 OU에 제어(가드레일)를 적용합니다.` },
      { k: 'D', en: `Create an AWS Config rule in the AWS Control Tower account. Configure the AWS Config rule to allow the deployment of only burstable instances and to disallow services that are not relevant. Deploy the AWS Config rule to the development OU by using AWS CloudFormation StackSets.`, ko: `AWS Control Tower 계정에서 AWS Config 규칙을 생성합니다. 버스트 가능한 인스턴스의 배포만 허용하고 관련 없는 서비스는 허용하지 않도록 AWS Config 규칙을 구성합니다. AWS CloudFormation StackSets를 사용하여 개발 OU에 AWS Config 규칙을 배포합니다.` },
    ],
    answer: ['C'],
    vote: '57% C / 43% A',
    explain: `<p><span class="mark-ok">✅ C — AWS Control Tower 사용자 지정 예방 제어(가드레일)</span></p>
<p>이미 <strong>AWS Control Tower</strong>를 사용하는 환경에서는 Control Tower의 <strong>예방 제어(Preventive Control/Guardrail)</strong>를 통해 OU에 SCP 기반 제한을 적용하는 것이 권장 방식입니다. Control Tower가 관리하는 OU의 SCP를 AWS Organizations에서 직접 수정하면 <strong>거버넌스 드리프트(Governance Drift)</strong>가 발생하여 랜딩 존을 복구해야 하는 상황이 발생할 수 있습니다. Control Tower의 예방 제어는 내부적으로 SCP를 사용하므로 A와 동일한 효과를 안전하게 달성합니다.</p>
<p><a href="https://docs.aws.amazon.com/controltower/latest/userguide/controls.html" target="_blank">AWS 공식 문서: Control Tower 제어(가드레일)</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 기술적으로 가능하지만, Control Tower가 관리하는 OU에 직접 Organizations SCP를 추가/수정하면 Control Tower의 드리프트 감지가 트리거되어 랜딩 존 복구가 필요할 수 있습니다. Control Tower 환경에서는 C가 더 안전합니다.</p>
<p><span class="mark-no">❌ B</span> — <strong>탐지 제어(Detective Control)</strong>는 위반 사항을 감지하고 알림을 보낼 뿐이며 실제 배포를 막지 않습니다. 비용 최적화를 위한 예방 목적에는 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Config 규칙은 구성 규정 준수를 평가하는 도구이며, 서비스 사용 자체를 사전 차단하는 기능이 없습니다. 위반 후 알림만 가능합니다.</p>`,
    disc: [
      { ans: 'C (57%)', txt: 'Control Tower 환경에서 Organizations SCP 직접 수정은 드리프트 유발 위험. Control Tower 예방 제어(가드레일)가 내부적으로 SCP 사용 → 안전하고 동일한 효과.' },
      { ans: 'A (43%)', txt: 'SCP를 직접 적용하는 것이 더 간단하고 Control Tower와 공존 가능하다는 의견. 단, 드리프트 위험 때문에 C가 권장됨.' },
    ]
  },
  {
    n: 329,
    en: `<p>A financial services company runs a complex, multi-tier application on Amazon EC2 instances and AWS Lambda functions. The application stores temporary data in Amazon S3. The S3 objects are valid for only 45 minutes and are deleted after 24 hours.</p><p>The company deploys each version of the application by launching an AWS CloudFormation stack. The stack creates all resources that are required to run the application. When the company deploys and validates a new application version, the company deletes the CloudFormation stack of the old version.</p><p>The company recently tried to delete the CloudFormation stack of an old application version, but the operation failed. An analysis shows that CloudFormation failed to delete an existing S3 bucket. A solutions architect needs to resolve this issue without making major changes to the application's architecture.</p><p>Which solution meets these requirements?</p>`,
    ko: `<p>금융 서비스 회사는 Amazon EC2 인스턴스 및 AWS Lambda 함수에서 복잡한 다중 계층 애플리케이션을 실행합니다. 애플리케이션은 Amazon S3에 임시 데이터를 저장합니다. S3 객체는 45분 동안만 유효하며 24시간 후에 삭제됩니다.</p><p>회사는 AWS CloudFormation 스택을 시작하여 애플리케이션의 각 버전을 배포합니다. 스택은 애플리케이션을 실행하는 데 필요한 모든 리소스를 생성합니다. 회사가 새 애플리케이션 버전을 배포하고 검증할 때 회사는 이전 버전의 CloudFormation 스택을 삭제합니다.</p><p>회사는 최근 이전 애플리케이션 버전의 CloudFormation 스택을 삭제하려고 시도했지만 작업이 실패했습니다. 분석에 따르면 CloudFormation이 기존 S3 버킷을 삭제하지 못한 것으로 나타났습니다. 솔루션 설계자는 애플리케이션 아키텍처를 크게 변경하지 않고 이 문제를 해결해야 합니다.</p><p>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Implement a Lambda function that deletes all files from a given S3 bucket. Integrate this Lambda function as a custom resource into the CloudFormation stack. Ensure that the custom resource has a DependsOn attribute that points to the S3 bucket's resource.`, ko: `특정 S3 버킷에서 모든 파일을 삭제하는 Lambda 함수를 구현합니다. 이 Lambda 함수를 CloudFormation 스택에 사용자 지정 리소스로 통합합니다. 사용자 지정 리소스에 S3 버킷의 리소스를 가리키는 DependsOn 속성이 있는지 확인합니다.` },
      { k: 'B', en: `Modify the CloudFormation template to provision an Amazon Elastic File System (Amazon EFS) file system to store the temporary files there instead of in Amazon S3. Configure the Lambda functions to run in the same VPC as the file system. Mount the file system to the EC2 instances and Lambda functions.`, ko: `Amazon Elastic File System(Amazon EFS) 파일 시스템을 프로비저닝하여 Amazon S3 대신 임시 파일을 저장하도록 CloudFormation 템플릿을 수정합니다. 파일 시스템과 동일한 VPC에서 실행되도록 Lambda 함수를 구성합니다. 파일 시스템을 EC2 인스턴스 및 Lambda 함수에 마운트합니다.` },
      { k: 'C', en: `Modify the CloudFormation stack to create an S3 Lifecycle rule that expires all objects 45 minutes after creation. Add a DependsOn attribute that points to the S3 bucket's resource.`, ko: `생성 후 45분 후에 모든 객체가 만료되는 S3 수명 주기 규칙을 생성하도록 CloudFormation 스택을 수정합니다. S3 버킷의 리소스를 가리키는 DependsOn 속성을 추가합니다.` },
      { k: 'D', en: `Modify the CloudFormation stack to attach a DeletionPolicy attribute with a value of Delete to the S3 bucket.`, ko: `CloudFormation 스택을 수정하여 값이 Delete인 DeletionPolicy 속성을 S3 버킷에 연결합니다.` },
    ],
    answer: ['A'],
    vote: '92% A',
    explain: `<p><span class="mark-ok">✅ A — Lambda 커스텀 리소스로 S3 버킷 비우기 + DependsOn</span></p>
<p>CloudFormation이 S3 버킷 삭제에 실패하는 근본 원인은 <strong>버킷이 비어 있지 않기 때문</strong>입니다(AWS 정책상 비어 있지 않은 S3 버킷은 삭제 불가). 이를 해결하는 표준 방법은 스택 삭제 시 버킷을 먼저 비우는 <strong>Lambda 기반 CloudFormation 커스텀 리소스</strong>를 추가하는 것입니다. <code>DependsOn</code> 속성으로 커스텀 리소스가 S3 버킷보다 먼저 삭제(버킷 내용 정리)되도록 보장합니다.</p>
<p><a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html" target="_blank">AWS 공식 문서: CloudFormation DeletionPolicy</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — S3를 EFS로 교체하는 것은 "애플리케이션 아키텍처를 크게 변경하지 않는다"는 요구 사항을 위반합니다. Lambda의 VPC 구성, EFS 마운트 등 대규모 변경이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — 수명 주기 규칙으로 45분 후 객체를 만료시켜도, 스택 삭제 시 버킷 안에 아직 삭제되지 않은 객체가 남아 있을 수 있습니다. 또한 수명 주기 만료는 즉각적이지 않아 버킷이 비어 있을 것을 보장하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — <code>DeletionPolicy: Delete</code>는 버킷을 삭제하도록 시도하지만, 버킷이 비어 있지 않으면 여전히 실패합니다. 근본 원인(비어 있지 않은 버킷)을 해결하지 못합니다.</p>`,
    disc: [
      { ans: 'A (92%)', txt: 'S3 버킷 삭제 실패 = 버킷이 비어 있지 않기 때문. Lambda 커스텀 리소스로 삭제 전 버킷을 비움. DependsOn으로 실행 순서(먼저 비우기 → 그 다음 버킷 삭제) 보장.' },
    ]
  },
  {
    n: 330,
    en: `<p>A company has developed a mobile game. The backend for the game runs on several virtual machines located in an on-premises data center. The business logic is exposed using a REST API with multiple functions. Player session data is stored in central file storage. Backend services use different API keys for throttling and to distinguish between live and test traffic.</p><p>The load on the game backend varies throughout the day. During peak hours, the server capacity is not sufficient. There are also latency issues when fetching player session data. Management has asked a solutions architect to present a cloud architecture that can handle the game's varying load and provide low-latency data access. The API model should not be changed.</p><p>Which solution meets these requirements?</p>`,
    ko: `<p>한 회사에서 모바일 게임을 개발했습니다. 게임의 백엔드는 온프레미스 데이터 센터에 있는 여러 가상 머신에서 실행됩니다. 비즈니스 로직은 여러 기능이 포함된 REST API를 사용하여 노출됩니다. 플레이어 세션 데이터는 중앙 파일 저장소에 저장됩니다. 백엔드 서비스는 조절을 위해 그리고 라이브 트래픽과 테스트 트래픽을 구별하기 위해 다양한 API 키를 사용합니다.</p><p>게임 백엔드의 부하는 하루 종일 달라집니다. 피크 시간대에는 서버 용량이 충분하지 않습니다. 플레이어 세션 데이터를 가져올 때 지연 시간 문제도 있습니다. 경영진은 솔루션 설계자에게 게임의 다양한 로드를 처리하고 대기 시간이 짧은 데이터 액세스를 제공할 수 있는 클라우드 아키텍처를 제시하도록 요청했습니다. API 모델은 변경되어서는 안 됩니다.</p><p>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Implement the REST API using a Network Load Balancer (NLB). Run the business logic on an Amazon EC2 instance behind the NLB. Store player session data in Amazon Aurora Serverless.`, ko: `NLB(Network Load Balancer)를 사용하여 REST API를 구현합니다. NLB 뒤의 Amazon EC2 인스턴스에서 비즈니스 로직을 실행합니다. Amazon Aurora Serverless에 플레이어 세션 데이터를 저장합니다.` },
      { k: 'B', en: `Implement the REST API using an Application Load Balancer (ALB). Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on-demand capacity.`, ko: `ALB(Application Load Balancer)를 사용하여 REST API를 구현합니다. AWS Lambda에서 비즈니스 로직을 실행합니다. 온디맨드 용량으로 Amazon DynamoDB에 플레이어 세션 데이터를 저장합니다.` },
      { k: 'C', en: `Implement the REST API using Amazon API Gateway. Run the business logic in AWS Lambda. Store player session data in Amazon DynamoDB with on-demand capacity.`, ko: `Amazon API Gateway를 사용하여 REST API를 구현합니다. AWS Lambda에서 비즈니스 로직을 실행합니다. 온디맨드 용량으로 Amazon DynamoDB에 플레이어 세션 데이터를 저장합니다.` },
      { k: 'D', en: `Implement the REST API using AWS AppSync. Run the business logic in AWS Lambda. Store player session data in Amazon Aurora Serverless.`, ko: `AWS AppSync를 사용하여 REST API를 구현합니다. AWS Lambda에서 비즈니스 로직을 실행합니다. Amazon Aurora Serverless에 플레이어 세션 데이터를 저장합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — Amazon API Gateway + AWS Lambda + DynamoDB 온디맨드</span></p>
<p>세 가지 핵심 요구 사항을 모두 충족합니다:<br>① <strong>API 모델 유지(REST API)</strong>: <strong>Amazon API Gateway</strong>는 REST API를 기본으로 지원하며, API 키 기반 조절(Throttling), 라이브/테스트 스테이지 구분, 사용 계획(Usage Plan) 기능을 내장합니다.<br>② <strong>가변 부하 처리</strong>: API Gateway + <strong>Lambda</strong> 조합은 트래픽에 따라 완전 자동 확장되어 피크 시간대에도 서버 용량 문제가 없습니다.<br>③ <strong>저지연 세션 데이터 접근</strong>: <strong>DynamoDB 온디맨드</strong>는 밀리초 수준의 저지연 읽기/쓰기를 제공하며 수요에 따라 자동 확장됩니다.</p>
<p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html" target="_blank">AWS 공식 문서: API Gateway 사용 계획 및 API 키</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — NLB는 L4 로드 밸런서로 REST API(HTTP/S) 기능(API 키, 스테이지, 조절 등)을 지원하지 않습니다. EC2 고정 인스턴스는 자동 확장에 추가 구성이 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — ALB는 HTTP/S를 지원하지만, API 키 기반 조절이나 스테이지 구분 같은 API 관리 기능이 없습니다. API Gateway가 이런 기능을 내장하여 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS AppSync는 GraphQL API 전용 서비스로 REST API를 지원하지 않습니다. "API 모델 변경 불가" 요구 사항을 위반합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'API Gateway: REST API 유지 + API 키/조절/스테이지 내장. Lambda: 자동 확장으로 가변 부하 처리. DynamoDB: 밀리초 저지연 + 온디맨드 자동 확장. AppSync(D)는 GraphQL 전용으로 REST 불가.' },
    ]
  },
];