window.QS_SET12 = [
  {
    n: 111,
    en: `A solutions architect is auditing the security setup or an AWS Lambda function for a company. The Lambda function retrieves, the latest changes from an Amazon Aurora database. The Lambda function and the database run in the same VPC. Lambda environment variables are providing the database credentials to the Lambda function.<br/><br/>The Lambda function aggregates data and makes the data available in an Amazon S3 bucket that is configured for server-side encryption with AWS KMS managed encryption keys (SSE-KMS). The data must not travel across the Internet. If any database credentials become compromised, the company needs a solution that minimizes the impact of the compromise.<br/><br/>What should the solutions architect recommend to meet these requirements?`,
    ko: `솔루션 아키텍트는 회사의 AWS Lambda 함수 보안 설정을 감사하고 있습니다. Lambda 함수는 Amazon Aurora 데이터베이스에서 최신 변경 사항을 검색합니다. Lambda 함수와 데이터베이스는 동일한 VPC에서 실행됩니다. Lambda 환경 변수는 Lambda 함수에 데이터베이스 자격 증명을 제공합니다. <br/><br/>Lambda 함수는 데이터를 집계하고 AWS KMS 관리형 암호화 키(SSE-KMS)를 사용한 서버 측 암호화로 구성된 Amazon S3 버킷에 데이터를 제공합니다. 데이터는 인터넷을 통해 이동해서는 안 됩니다. 데이터베이스 자격 증명이 손상될 경우 회사는 손상의 영향을 최소화하는 솔루션이 필요합니다. <br/><br/>이러한 요구 사항을 충족하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Deploy a gateway VPC endpoint for Amazon S3 in the VPC.`, ko:`Aurora DB 클러스터에서 IAM 데이터베이스 인증을 활성화합니다. IAM 데이터베이스 인증을 사용하여 함수가 데이터베이스에 액세스할 수 있도록 Lambda 함수에 대한 IAM 역할을 변경합니다. VPC에 Amazon S3용 게이트웨이 VPC 엔드포인트를 배포합니다.` },
      { k:'B', en:`Enable IAM database authentication on the Aurora DB cluster. Change the IAM role for the Lambda function to allow the function to access the database by using IAM database authentication. Enforce HTTPS on the connection to Amazon S3 during data transfers.`, ko:`Aurora DB 클러스터에서 IAM 데이터베이스 인증을 활성화합니다. IAM 데이터베이스 인증을 사용하여 함수가 데이터베이스에 액세스할 수 있도록 Lambda 함수에 대한 IAM 역할을 변경합니다. 데이터 전송 중 Amazon S3 연결에 HTTPS를 적용합니다.` },
      { k:'C', en:`Save the database credentials in AWS Systems Manager Parameter Store. Set up password rotation on the credentials in Parameter Store. Change the IAM role for the Lambda function to allow the function to access Parameter Store. Modify the Lambda function to retrieve the credentials from Parameter Store. Deploy a gateway VPC endpoint for Amazon S3 in the VPC.`, ko:`AWS Systems Manager Parameter Store에 데이터베이스 자격 증명을 저장합니다. Parameter Store의 자격 증명에 대한 암호 교체를 설정합니다. 함수가 Parameter Store에 액세스할 수 있도록 Lambda 함수의 IAM 역할을 변경합니다. Parameter Store에서 자격 증명을 검색하도록 Lambda 함수를 수정합니다. VPC에 Amazon S3용 게이트웨이 VPC 엔드포인트를 배포합니다.` },
      { k:'D', en:`Save the database credentials in AWS Secrets Manager. Set up password rotation on the credentials in Secrets Manager. Change the IAM role for the Lambda function to allow the function to access Secrets Manager. Modify the Lambda function to retrieve the credentials from Secrets Manager. Enforce HTTPS on the connection to Amazon S3 during data transfers.`, ko:`AWS Secrets Manager에 데이터베이스 자격 증명을 저장합니다. Secrets Manager에서 자격 증명에 대한 비밀번호 교체를 설정합니다. 함수가 Secrets Manager에 액세스할 수 있도록 Lambda 함수의 IAM 역할을 변경합니다. Secrets Manager에서 자격 증명을 검색하도록 Lambda 함수를 수정합니다. 데이터 전송 중 Amazon S3 연결에 HTTPS를 적용합니다.` },
    ],
    answer: ['A'],
    vote: '85% A, 15% D',
    explain: `<p><span class="mark-ok">✅ A — IAM 데이터베이스 인증 + S3 게이트웨이 VPC 엔드포인트</span></p>
<p>두 가지 요구사항을 동시에 충족합니다.</p>
<ul>
<li><strong>자격 증명 손상 영향 최소화</strong>: Aurora IAM 데이터베이스 인증을 사용하면 정적 비밀번호가 완전히 사라집니다. Lambda는 IAM 역할 기반의 단기 토큰(15분 유효)으로 Aurora에 접속하므로 "자격 증명"이 존재하지 않아 손상 자체가 불가능합니다.</li>
<li><strong>인터넷 미경유</strong>: S3 게이트웨이 VPC 엔드포인트는 VPC 내에서 Amazon S3로의 트래픽을 AWS 내부 네트워크로 라우팅하여 인터넷을 우회합니다. 게이트웨이 엔드포인트는 S3, DynamoDB에 대해 무료로 제공됩니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html" target="_blank">Aurora IAM DB 인증 공식 문서</a> | <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-s3.html" target="_blank">S3 VPC 게이트웨이 엔드포인트 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — IAM DB 인증은 올바르지만, HTTPS 연결은 인터넷을 경유할 수 있습니다. "데이터는 인터넷을 통해 이동해서는 안 됩니다" 요구사항을 충족하지 못합니다. S3 VPC 게이트웨이 엔드포인트가 없으면 S3 트래픽은 인터넷 게이트웨이 또는 NAT 게이트웨이를 통해 라우팅됩니다.</p>
<p><span class="mark-no">❌ C</span> — Parameter Store는 S3 VPC 엔드포인트로 인터넷 비경유 요건을 충족하지만, 자격 증명 손상 영향 최소화 측면에서 부족합니다. Parameter Store의 자동 패스워드 로테이션은 Secrets Manager처럼 Aurora와 직접 통합되지 않으며, DB 자격 증명(사용자명/비밀번호)이 여전히 존재합니다. IAM DB 인증은 정적 자격 증명 자체를 제거하므로 더 효과적입니다.</p>
<p><span class="mark-no">❌ D</span> — Secrets Manager의 자동 로테이션은 유용하지만, HTTPS를 통한 S3 접근은 인터넷 경유 가능성이 있어 "인터넷 미경유" 요구사항을 충족하지 못합니다. 또한 IAM DB 인증과 달리 정적 자격 증명이 여전히 존재합니다.</p>`,
    disc: [{ ans:'A', txt:'핵심은 두 조건의 동시 충족입니다. ① 인터넷 비경유 → S3 게이트웨이 VPC 엔드포인트 필요 (B, D 탈락). ② 자격 증명 손상 영향 최소화 → IAM DB 인증으로 정적 자격 증명 완전 제거 (C는 여전히 DB 비밀번호 존재). A만이 두 조건을 모두 충족합니다.' }]
  },
  {
    n: 112,
    en: `A large mobile gaming company has successfully migrated all of its on-premises infrastructure to the AWS Cloud. A solutions architect is reviewing the environment to ensure that it was built according to the design and that it is running in alignment with the Well-Architected Framework.<br/><br/>While reviewing previous monthly costs in Cost Explorer, the solutions architect notices that the creation and subsequent termination of several large instance types account for a high proportion of the costs. The solutions architect finds out that the company's developers are launching new Amazon EC2 instances as part of their testing and that the developers are not using the appropriate instance types.<br/><br/>The solutions architect must implement a control mechanism to limit the instance types that only the developers can launch.<br/><br/>Which solution will meet these requirements?`,
    ko: `한 대규모 모바일 게임 회사는 모든 온프레미스 인프라를 AWS 클라우드로 성공적으로 마이그레이션했습니다. 솔루션 설계자는 환경이 설계에 따라 구축되었는지, Well-Architected 프레임워크에 맞춰 실행되는지 확인하기 위해 환경을 검토하고 있습니다. <br/><br/>비용 탐색기에서 이전 월별 비용을 검토하는 동안 솔루션 설계자는 여러 대규모 인스턴스 유형의 생성 및 후속 종료가 비용의 높은 부분을 차지한다는 사실을 발견했습니다. 솔루션 설계자는 회사 개발자가 테스트의 일부로 새로운 Amazon EC2 인스턴스를 시작하고 있으며 개발자가 적절한 인스턴스 유형을 사용하고 있지 않다는 사실을 발견했습니다. <br/><br/>솔루션 설계자는 개발자만 시작할 수 있는 인스턴스 유형을 제한하는 제어 메커니즘을 구현해야 합니다. <br/><br/>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a desired-instance-type managed rule in AWS Config. Configure the rule with the instance types that are allowed. Attach the rule to an event to run each time a new EC2 instance is launched.`, ko:`AWS Config에서 원하는 인스턴스 유형 관리형 규칙을 생성합니다. 허용되는 인스턴스 유형으로 규칙을 구성합니다. 새 EC2 인스턴스가 시작될 때마다 실행되도록 이벤트에 규칙을 연결합니다.` },
      { k:'B', en:`In the EC2 console, create a launch template that specifies the instance types that are allowed. Assign the launch template to the developers' IAM accounts.`, ko:`EC2 콘솔에서 허용되는 인스턴스 유형을 지정하는 시작 템플릿을 생성합니다. 개발자의 IAM 계정에 시작 템플릿을 할당합니다.` },
      { k:'C', en:`Create a new IAM policy. Specify the instance types that are allowed. Attach the policy to an IAM group that contains the IAM accounts for the developers`, ko:`새로운 IAM 정책을 생성합니다. 허용되는 인스턴스 유형을 지정합니다. 개발자용 IAM 계정이 포함된 IAM 그룹에 정책을 연결합니다.` },
      { k:'D', en:`Use EC2 Image Builder to create an image pipeline for the developers and assist them in the creation of a golden image.`, ko:`EC2 이미지 빌더를 사용하여 개발자를 위한 이미지 파이프라인을 생성하고 골든 이미지 생성을 지원합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — IAM 정책 + 인스턴스 유형 조건 + 개발자 그룹</span></p>
<p>IAM 정책에서 <code>ec2:RunInstances</code> 액션에 <code>ec2:InstanceType</code> 조건 키를 사용하면 허용된 인스턴스 유형 외의 실행을 거부할 수 있습니다.</p>
<pre><code>{
  "Effect": "Deny",
  "Action": "ec2:RunInstances",
  "Resource": "arn:aws:ec2:*:*:instance/*",
  "Condition": {
    "ForAnyValue:StringNotLike": {
      "ec2:InstanceType": ["t3.micro", "t3.small", "t3.medium"]
    }
  }
}</code></pre>
<ul>
<li>이 정책을 개발자 IAM 그룹에 연결하면 개발자만 지정된 인스턴스 유형으로 제한됩니다.</li>
<li>다른 팀(프로덕션 등)은 이 정책의 영향을 받지 않습니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-policies-ec2-console.html" target="_blank">EC2 IAM 조건 키 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Config는 사후 감지(Detective Control) 도구입니다. 인스턴스가 이미 실행된 후 비준수를 감지하고 알리거나 자동 수정을 트리거할 수 있지만, 인스턴스 시작 자체를 사전에 차단(Preventive Control)하지는 않습니다. IAM 정책이 사전 차단에 적합합니다.</p>
<p><span class="mark-no">❌ B</span> — 시작 템플릿은 인스턴스 구성의 기본값을 제공하지만, 개발자가 시작 템플릿을 우회하여 다른 인스턴스 유형으로 직접 실행하는 것을 막을 수 없습니다. 시작 템플릿은 편의성 도구이지 강제 제어 메커니즘이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 Image Builder는 AMI(머신 이미지)를 생성하는 도구입니다. 인스턴스 유형과는 무관하며, 개발자의 인스턴스 유형 선택을 제한하지 않습니다.</p>`,
    disc: [{ ans:'C', txt:'IAM 조건 키 ec2:InstanceType을 활용한 Deny 정책이 가장 효과적인 예방적 제어입니다. 개발자 IAM 그룹에 적용하면 해당 그룹 구성원만 지정된 인스턴스 유형으로 제한되며, 다른 팀의 권한에는 영향을 주지 않습니다.' }]
  },
  {
    n: 113,
    en: `A company is developing and hosting several projects in the AWS Cloud. The projects are developed across multiple AWS accounts under the same organization in AWS Organizations. The company requires the cost for cloud infrastructure to be allocated to the owning project. The team responsible for all of the AWS accounts has discovered that several Amazon EC2 instances are lacking the Project tag used for cost allocation.<br/><br/>Which actions should a solutions architect lake to resolve the problem and prevent it from happening in the future? (Choose three.)`,
    ko: `한 회사가 AWS 클라우드에서 여러 프로젝트를 개발하고 호스팅하고 있습니다. 프로젝트는 AWS Organizations의 동일한 조직에 속한 여러 AWS 계정에 걸쳐 개발됩니다. 회사는 클라우드 인프라 비용을 소유 프로젝트에 할당해야 합니다. 모든 AWS 계정을 담당하는 팀은 여러 Amazon EC2 인스턴스에 비용 할당에 사용되는 Project 태그가 누락되어 있다는 사실을 발견했습니다. <br/><br/>문제를 해결하고 향후 이러한 문제가 발생하지 않도록 방지하기 위해 솔루션 설계자는 어떤 조치를 취해야 합니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Create an AWS Config rule in each account to find resources with missing tags.`, ko:`각 계정에 AWS Config 규칙을 생성하여 태그가 누락된 리소스를 찾으십시오.` },
      { k:'B', en:`Create an SCP in the organization with a deny action for ec2:RunInstances if the Project tag is missing.`, ko:`Project 태그가 누락된 경우 ec2:RunInstances에 대한 거부 작업을 사용하여 조직에 SCP를 생성합니다.` },
      { k:'C', en:`Use Amazon Inspector in the organization to find resources with missing tags.`, ko:`조직에서 Amazon Inspector를 사용하여 태그가 누락된 리소스를 찾습니다.` },
      { k:'D', en:`Create an IAM policy in each account with a deny action for ec2:RunInstances if the Project tag is missing.`, ko:`Project 태그가 누락된 경우 ec2:RunInstances에 대한 거부 작업을 사용하여 각 계정에 IAM 정책을 생성합니다.` },
      { k:'E', en:`Create an AWS Config aggregator for the organization to collect a list of EC2 instances with the missing Project tag.`, ko:`조직이 Project 태그가 누락된 EC2 인스턴스 목록을 수집할 수 있도록 AWS Config 집계기를 생성합니다.` },
      { k:'F', en:`Use AWS Security Hub to aggregate a list of EC2 instances with the missing Project tag.`, ko:`AWS Security Hub를 사용하여 Project 태그가 누락된 EC2 인스턴스 목록을 집계합니다.` },
    ],
    answer: ['A', 'B', 'E'],
    vote: '80% ABE, 9% BDE',
    explain: `<p><span class="mark-ok">✅ A, B, E — 현재 문제 해결 + 미래 예방 + 조직 전체 가시성</span></p>
<ul>
<li><strong>A — 각 계정에 AWS Config 규칙 생성</strong>: <code>required-tags</code> 관리형 규칙을 사용하여 Project 태그가 누락된 기존 EC2 인스턴스를 각 계정에서 탐지합니다. 현재 문제(이미 실행 중인 태그 미적용 인스턴스)를 해결합니다.</li>
<li><strong>B — 조직 SCP로 태그 없는 인스턴스 시작 차단</strong>: SCP에서 <code>ec2:RunInstances</code>를 Deny하되 Condition으로 <code>aws:RequestTag/Project</code> 키 미포함 시에만 적용합니다. 조직 전체에 한 번만 적용하면 모든 계정에 일괄 적용되어 향후 재발을 방지합니다.</li>
<li><strong>E — AWS Config 집계기(Aggregator) 생성</strong>: 조직 수준의 Config 집계기는 모든 멤버 계정의 Config 규칙 결과를 중앙에서 수집합니다. 관리팀이 단일 뷰에서 전체 조직의 태그 미준수 리소스를 파악할 수 있습니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/config/latest/developerguide/aggregate-data.html" target="_blank">AWS Config 집계기 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — Amazon Inspector는 EC2 인스턴스의 소프트웨어 취약점 및 네트워크 노출을 분석하는 보안 도구입니다. 태그 누락 여부를 탐지하는 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 각 계정에 IAM 정책을 개별 생성하는 방식은 B(조직 SCP)와 기능은 동일하지만, 계정이 추가될 때마다 수동으로 정책을 배포해야 하므로 운영 오버헤드가 훨씬 높습니다. SCP는 조직 단위로 한 번만 적용하면 됩니다.</p>
<p><span class="mark-no">❌ F</span> — AWS Security Hub는 보안 표준 준수 여부(CIS Benchmarks, PCI DSS 등) 및 위협 탐지 결과를 집계하는 서비스입니다. 태그 규정 준수 확인은 지원하지 않습니다.</p>`,
    disc: [{ ans:'A, B, E', txt:'세 역할 분담: A(계정별 탐지) → E(조직 전체 중앙 집계) → B(SCP로 재발 방지). Config 규칙(A)이 각 계정에 있어야 Config 집계기(E)가 결과를 수집할 수 있습니다. SCP(B)는 조직 전체에 한 번 적용으로 모든 계정의 향후 태그 미적용 인스턴스 생성을 차단합니다.' }]
  },
  {
    n: 114,
    en: `A company has an on-premises monitoring solution using a PostgreSQL database for persistence of events. The database is unable to scale due to heavy ingestion and it frequently runs out of storage.<br/><br/>The company wants to create a hybrid solution and has already set up a VPN connection between its network and AWS. The solution should include the following attributes:<br/>•	Managed AWS services to minimize operational complexity.<br/>•	A buffer that automatically scales to match the throughput of data and requires no ongoing administration.<br/>•	A visualization tool to create dashboards to observe events in near-real time.<br/>•	Support for semi-structured JSON data and dynamic schemas.<br/><br/>Which combination of components will enable the company to create a monitoring solution that will satisfy these requirements? (Choose two.)`,
    ko: `회사에는 이벤트 지속성을 위해 PostgreSQL 데이터베이스를 사용하는 온프레미스 모니터링 솔루션이 있습니다. 과도한 수집으로 인해 데이터베이스를 확장할 수 없으며 스토리지가 부족해지는 경우가 많습니다. <br/><br/>회사는 하이브리드 솔루션을 만들고 싶어하며 이미 네트워크와 AWS 간에 VPN 연결을 설정했습니다. 솔루션에는 다음 속성이 포함되어야 합니다. <br/>• 운영 복잡성을 최소화하는 관리형 AWS 서비스. <br/>• 데이터 처리량에 맞춰 자동으로 확장되며 지속적인 관리가 필요 없는 버퍼. <br/>• 거의 실시간으로 이벤트를 관찰하기 위한 대시보드를 생성하는 시각화 도구. <br/>• 반구조화된 JSON 데이터 및 동적 스키마 지원. <br/><br/>회사에서 이러한 요구 사항을 충족하는 모니터링 솔루션을 만들 수 있는 구성 요소 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Use Amazon Kinesis Data Firehose to buffer events. Create an AWS Lambda function to process and transform events.`, ko:`Amazon Kinesis Data Firehose를 사용하여 이벤트를 버퍼링하세요. 이벤트를 처리하고 변환하는 AWS Lambda 함수를 생성합니다.` },
      { k:'B', en:`Create an Amazon Kinesis data stream to buffer events. Create an AWS Lambda function to process and transform events.`, ko:`이벤트를 버퍼링하기 위해 Amazon Kinesis 데이터 스트림을 생성합니다. 이벤트를 처리하고 변환하는 AWS Lambda 함수를 생성합니다.` },
      { k:'C', en:`Configure an Amazon Aurora PostgreSQL DB cluster to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.`, ko:`이벤트를 수신하도록 Amazon Aurora PostgreSQL DB 클러스터를 구성합니다. Amazon QuickSight를 사용하여 데이터베이스에서 읽고 거의 실시간 시각화 및 대시보드를 생성합니다.` },
      { k:'D', en:`Configure Amazon Elasticsearch Service (Amazon ES) to receive events. Use the Kibana endpoint deployed with Amazon ES to create near-real-time visualizations and dashboards.`, ko:`이벤트를 수신하도록 Amazon Elasticsearch Service(Amazon ES)를 구성합니다. Amazon ES와 함께 배포된 Kibana 엔드포인트를 사용하여 거의 실시간 시각화 및 대시보드를 생성합니다.` },
      { k:'E', en:`Configure an Amazon Neptune DB instance to receive events. Use Amazon QuickSight to read from the database and create near-real-time visualizations and dashboards.`, ko:`이벤트를 수신하도록 Amazon Neptune DB 인스턴스를 구성합니다. Amazon QuickSight를 사용하여 데이터베이스에서 읽고 거의 실시간 시각화 및 대시보드를 생성합니다.` },
    ],
    answer: ['A', 'D'],
    vote: '92% AD, 5% BD',
    explain: `<p><span class="mark-ok">✅ A, D — Kinesis Data Firehose + Amazon OpenSearch(Elasticsearch) + Kibana</span></p>
<ul>
<li><strong>A — Kinesis Data Firehose (버퍼)</strong>: 완전관리형 서비스로 샤드 관리나 용량 계획이 불필요하며, 데이터 처리량에 맞춰 자동으로 확장됩니다. OpenSearch Service, S3, Redshift 등을 직접 대상으로 지원합니다. Lambda를 통한 변환도 통합 제공합니다.</li>
<li><strong>D — Amazon OpenSearch Service (구 Elasticsearch) + Kibana</strong>: 반구조화된 JSON 데이터와 동적 스키마를 기본 지원합니다. 내장된 Kibana 대시보드를 통해 수집 즉시 거의 실시간 시각화가 가능합니다. Firehose가 OpenSearch로 직접 스트리밍하면 전체 파이프라인이 완성됩니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html" target="_blank">Kinesis Data Firehose 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Kinesis Data Stream은 강력한 스트리밍 서비스이지만 샤드(Shard) 수를 수동으로 관리해야 하므로 "지속적인 관리가 필요 없는" 요구사항에 맞지 않습니다. Firehose는 완전 자동 확장을 지원합니다.</p>
<p><span class="mark-no">❌ C</span> — Aurora PostgreSQL은 관계형 데이터베이스로, 동적 스키마와 반구조화된 JSON을 네이티브로 지원하지 않습니다. 또한 QuickSight는 실시간 스트리밍 시각화보다 BI 분석에 적합합니다.</p>
<p><span class="mark-no">❌ E</span> — Amazon Neptune은 그래프 데이터베이스(Property Graph, RDF)로, 모니터링 이벤트 수집 및 JSON 동적 스키마에 적합하지 않습니다.</p>`,
    disc: [{ ans:'A, D', txt:'Firehose→OpenSearch(Elasticsearch) 파이프라인은 AWS 모니터링/로깅 아키텍처의 표준 패턴입니다. Firehose가 자동 확장 버퍼, OpenSearch가 JSON 저장 및 실시간 검색, Kibana가 시각화를 담당합니다. 세 요구사항(자동 확장 버퍼, 실시간 시각화, JSON 동적 스키마)을 모두 충족합니다.' }]
  },
  {
    n: 115,
    en: `A team collects and routes behavioral data for an entire company. The company runs a Multi-AZ VPC environment with public subnets, private subnets, and in internet gateway. Each public subnet also contains a NAT gateway. Most of the company's applications read from and write to Amazon Kinesis Data Streams. Most of the workloads run in private subnets.<br/><br/>A solutions architect must review the infrastructure. The solution architect needs to reduce costs and maintain the function of the applications. The solutions architect uses Cost Explorer and notices that the cost in the EC2-Other category is consistently high. A further review shows that NatGateway-Bytes charges are increasing the cost in the EC2-Other category.<br/><br/>What should the solutions architect do to meet these requirements?`,
    ko: `팀은 회사 전체의 행동 데이터를 수집하고 전달합니다. 이 회사는 퍼블릭 서브넷, 프라이빗 서브넷 및 인터넷 게이트웨이를 갖춘 다중 AZ VPC 환경을 실행합니다. 각 퍼블릭 서브넷에는 NAT 게이트웨이도 포함되어 있습니다. 대부분의 회사 애플리케이션은 Amazon Kinesis Data Streams에서 읽고 씁니다. 대부분의 워크로드는 프라이빗 서브넷에서 실행됩니다. <br/><br/>솔루션 설계자는 인프라를 검토해야 합니다. 솔루션 설계자는 비용을 절감하고 애플리케이션의 기능을 유지해야 합니다. 솔루션 설계자는 Cost Explorer를 사용하여 EC2-기타 범주의 비용이 지속적으로 높다는 사실을 확인합니다. 추가 검토에 따르면 NatGateway-Bytes 요금으로 인해 EC2-기타 범주의 비용이 증가하는 것으로 나타났습니다. <br/><br/>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Enable VPC Flow Logs. Use Amazon Athena to analyze the logs for traffic that can be removed. Ensure that security groups are blocking traffic that is responsible for high costs.`, ko:`VPC 흐름 로그를 활성화합니다. Amazon Athena를 사용하여 제거할 수 있는 트래픽에 대한 로그를 분석합니다. 보안 그룹이 높은 비용을 초래하는 트래픽을 차단하고 있는지 확인하십시오.` },
      { k:'B', en:`Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that applications have the correct IAM permissions to use the interface VPC endpoint.`, ko:`Kinesis Data Streams용 인터페이스 VPC 엔드포인트를 VPC에 추가합니다. 애플리케이션에 인터페이스 VPC 엔드포인트를 사용할 수 있는 올바른 IAM 권한이 있는지 확인하십시오.` },
      { k:'C', en:`Enable VPC Flow Logs and Amazon Detective. Review Detective findings for traffic that is not related to Kinesis Data Streams. Configure security groups to block that traffic.`, ko:`VPC 흐름 로그 및 Amazon Detective를 활성화합니다. Kinesis Data Streams와 관련되지 않은 트래픽에 대한 탐지 결과를 검토합니다. 해당 트래픽을 차단하도록 보안 그룹을 구성하십시오.` },
      { k:'D', en:`Add an interface VPC endpoint for Kinesis Data Streams to the VPC. Ensure that the VPC endpoint policy allows traffic from the applications.`, ko:`Kinesis Data Streams용 인터페이스 VPC 엔드포인트를 VPC에 추가합니다. VPC 엔드포인트 정책이 애플리케이션의 트래픽을 허용하는지 확인하십시오.` },
    ],
    answer: ['D'],
    vote: '92% D, 8% B',
    explain: `<p><span class="mark-ok">✅ D — Kinesis Data Streams용 인터페이스 VPC 엔드포인트 + 엔드포인트 정책</span></p>
<p>프라이빗 서브넷의 워크로드가 Kinesis Data Streams에 접근할 때 VPC 엔드포인트가 없으면 NAT 게이트웨이를 통해 인터넷으로 나갔다가 다시 들어옵니다. 이 경로의 NatGateway-Bytes 처리 비용(GB당 $0.045)이 누적되어 높은 비용을 발생시킵니다.</p>
<ul>
<li><strong>인터페이스 VPC 엔드포인트</strong> (AWS PrivateLink): Kinesis Data Streams 전용 엔드포인트를 VPC 내에 생성하면 트래픽이 AWS 내부 네트워크를 통해 NAT 게이트웨이를 우회합니다.</li>
<li><strong>VPC 엔드포인트 정책</strong>: 어떤 principal이 어떤 Kinesis 리소스에 접근할 수 있는지 제어합니다. IAM 권한이 아닌 엔드포인트 정책으로 접근을 제어하는 것이 올바른 방식입니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/streams/latest/dev/vpc.html" target="_blank">Kinesis Data Streams VPC 엔드포인트 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — VPC Flow Logs + Athena 분석은 원인 파악에는 유용하지만, 근본 원인(NAT 게이트웨이를 경유하는 Kinesis 트래픽)이 이미 확인된 상황에서 추가 분석은 불필요합니다. 보안 그룹으로 Kinesis 트래픽 자체를 차단하면 애플리케이션 기능이 중단됩니다.</p>
<p><span class="mark-no">❌ B</span> — B와 D 모두 인터페이스 VPC 엔드포인트를 추가하지만, B는 "IAM 권한"을 통한 접근 제어를 언급합니다. VPC 엔드포인트 사용에는 별도의 IAM 권한이 필요하지 않습니다. 엔드포인트 라우팅과 엔드포인트 정책으로 접근을 제어하는 D가 더 정확합니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon Detective는 보안 위협 조사 도구입니다. 비용 최적화와 무관하며, 보안 그룹으로 Kinesis 트래픽을 차단하면 애플리케이션이 중단됩니다.</p>`,
    disc: [{ ans:'D', txt:'프라이빗 서브넷 → NAT 게이트웨이 → 인터넷 → Kinesis 경로를 프라이빗 서브넷 → VPC 엔드포인트 → Kinesis(AWS 내부망)로 변경하면 NatGateway-Bytes 비용이 크게 감소합니다. VPC 엔드포인트 사용 자체에는 IAM 권한이 아닌 엔드포인트 정책으로 접근을 제어합니다.' }]
  },
  {
    n: 116,
    en: `A retail company has an on-premises data center in Europe. The company also has a multi-Region AWS presence that includes the eu-west-1 and us-east-1 Regions. The company wants to be able to route network traffic from its on-premises infrastructure into VPCs in either of those Regions. The company also needs to support traffic that is routed directly between VPCs in those Regions. No single points of failure can exist on the network.<br/><br/>The company already has created two 1 Gbps AWS Direct Connect connections from its on-premises data center. Each connection goes into a separate Direct Connect location in Europe for high availability. These two locations are named DX-A and DX-B, respectively. Each Region has a single AWS Transit Gateway that is configured to route all inter-VPC traffic within that Region.<br/><br/>Which solution will meet these requirements?`,
    ko: `한 소매 회사가 유럽에 온프레미스 데이터 센터를 보유하고 있습니다. 또한 이 회사는 eu-west-1 및 us-east-1 지역을 포함하는 다중 지역 AWS를 보유하고 있습니다. 회사는 온프레미스 인프라에서 해당 지역 중 하나의 VPC로 네트워크 트래픽을 라우팅할 수 있기를 원합니다. 또한 회사는 해당 지역의 VPC 간에 직접 라우팅되는 트래픽을 지원해야 합니다. 네트워크에는 단일 실패 지점이 존재할 수 없습니다. <br/><br/>이 회사는 이미 온프레미스 데이터 센터에서 2개의 1Gbps AWS Direct Connect 연결을 생성했습니다. 고가용성을 위해 각 연결은 유럽의 별도 Direct Connect 위치로 이동됩니다. 이 두 위치의 이름은 각각 DX-A 및 DX-B입니다. 각 리전에는 해당 리전 내의 모든 VPC 간 트래픽을 라우팅하도록 구성된 단일 AWS Transit Gateway가 있습니다. <br/><br/>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a private VIF from the DX-A connection into a Direct Connect gateway. Create a private VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with the Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.`, ko:`DX-A 연결에서 Direct Connect 게이트웨이로 프라이빗 VIF를 생성합니다. 고가용성을 위해 DX-B 연결에서 동일한 Direct Connect 게이트웨이로 프라이빗 VIF를 생성합니다. eu-west-1 및 us-east-1 전송 게이트웨이를 모두 Direct Connect 게이트웨이와 연결합니다. 지역 간 라우팅을 지원하려면 전송 게이트웨이를 서로 피어링하세요.` },
      { k:'B', en:`Create a transit VIF from the DX-A connection into a Direct Connect gateway. Associate the eu-west-1 transit gateway with this Direct Connect gateway. Create a transit VIF from the DX-8 connection into a separate Direct Connect gateway. Associate the us-east-1 transit gateway with this separate Direct Connect gateway. Peer the Direct Connect gateways with each other to support high availability and cross-Region routing.`, ko:`DX-A 연결에서 Direct Connect 게이트웨이로의 전송 VIF를 생성합니다. eu-west-1 전송 게이트웨이를 이 Direct Connect 게이트웨이와 연결합니다. DX-B 연결에서 별도의 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. us-east-1 전송 게이트웨이를 이 별도의 Direct Connect 게이트웨이와 연결합니다. 고가용성 및 지역 간 라우팅을 지원하려면 Direct Connect 게이트웨이를 서로 피어링하세요.` },
      { k:'C', en:`Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Configure the Direct Connect gateway to route traffic between the transit gateways.`, ko:`DX-A 연결에서 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. 고가용성을 위해 DX-B 연결에서 동일한 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. eu-west-1 및 us-east-1 전송 게이트웨이를 모두 이 Direct Connect 게이트웨이와 연결합니다. 전송 게이트웨이 간에 트래픽을 라우팅하도록 Direct Connect 게이트웨이를 구성합니다.` },
      { k:'D', en:`Create a transit VIF from the DX-A connection into a Direct Connect gateway. Create a transit VIF from the DX-B connection into the same Direct Connect gateway for high availability. Associate both the eu-west-1 and us-east-1 transit gateways with this Direct Connect gateway. Peer the transit gateways with each other to support cross-Region routing.`, ko:`DX-A 연결에서 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. 고가용성을 위해 DX-B 연결에서 동일한 Direct Connect 게이트웨이로 전송 VIF를 생성합니다. eu-west-1 및 us-east-1 전송 게이트웨이를 모두 이 Direct Connect 게이트웨이와 연결합니다. 지역 간 라우팅을 지원하려면 전송 게이트웨이를 서로 피어링하세요.` },
    ],
    answer: ['D'],
    vote: '95% D',
    explain: `<p><span class="mark-ok">✅ D — Transit VIF + 단일 DX 게이트웨이 + 두 TGW 연결 + TGW 피어링</span></p>
<ul>
<li><strong>Transit VIF (가상 인터페이스)</strong>: Transit Gateway에 연결하려면 반드시 Transit VIF를 사용해야 합니다. Private VIF는 개별 VGW(Virtual Private Gateway)에만 연결되며 Transit Gateway를 지원하지 않습니다.</li>
<li><strong>단일 DX 게이트웨이에 DX-A, DX-B 연결</strong>: 두 개의 별도 DX 위치에서 동일한 DX 게이트웨이로 Transit VIF를 생성하면 고가용성(단일 실패 지점 제거)이 확보됩니다.</li>
<li><strong>두 TGW를 동일 DX 게이트웨이에 연결</strong>: eu-west-1, us-east-1 TGW를 모두 같은 DX 게이트웨이에 연결하여 온프레미스→두 리전 라우팅을 지원합니다.</li>
<li><strong>TGW 피어링</strong>: 두 리전 TGW 간 직접 피어링으로 리전 간 VPC 라우팅을 지원합니다. DX 게이트웨이는 TGW 간 트래픽 라우팅을 직접 수행할 수 없습니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/whitepapers/latest/hybrid-connectivity/aws-dx-dxgw-with-aws-transit-gateway-multi-regions-and-aws-public-peering.html" target="_blank">DX + TGW 멀티 리전 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Private VIF는 Transit Gateway와 연결할 수 없습니다. Transit Gateway에는 반드시 Transit VIF가 필요합니다. Private VIF는 개별 VPC의 VGW에 연결하는 구식 방식입니다.</p>
<p><span class="mark-no">❌ B</span> — DX 게이트웨이 간에는 피어링이 지원되지 않습니다. 두 개의 별도 DX 게이트웨이를 서로 피어링하는 것은 불가능합니다. 또한 단일 DX 게이트웨이에 두 개의 DX 연결(DX-A, DX-B)을 연결하는 것이 고가용성의 올바른 방법입니다.</p>
<p><span class="mark-no">❌ C</span> — DX 게이트웨이 자체는 연결된 TGW 간에 트래픽을 라우팅하는 기능이 없습니다. 리전 간 VPC 라우팅은 TGW 피어링을 통해 구현해야 합니다. DX 게이트웨이는 온프레미스 ↔ TGW 연결을 위한 것입니다.</p>`,
    disc: [{ ans:'D', txt:'Transit VIF → DX Gateway(단일, HA) → 두 리전 TGW 연결 → TGW 간 피어링. 이 구조가 ① 온프레미스→양 리전 라우팅, ② 리전 간 VPC 라우팅, ③ 단일 실패 지점 제거를 모두 충족합니다. DX 게이트웨이는 온프레미스 연결만 관리하고, 리전 간 라우팅은 TGW 피어링이 담당합니다.' }]
  },
  {
    n: 117,
    en: `A company is running an application in the AWS Cloud. The company's security team must approve the creation of all new IAM users. When a new IAM user is created, all access for the user must be removed automatically. The security team must then receive a notification to approve the user. The company has a multi-Region AWS CloudTrail trail in the AWS account.<br/><br/>Which combination of steps will meet these requirements? (Choose three.)`,
    ko: `한 회사가 AWS 클라우드에서 애플리케이션을 실행하고 있습니다. 회사의 보안 팀은 모든 신규 IAM 사용자 생성을 승인해야 합니다. 새로운 IAM 사용자가 생성되면 해당 사용자에 대한 모든 액세스 권한이 자동으로 제거되어야 합니다. 그런 다음 보안 팀은 사용자를 승인하라는 알림을 받아야 합니다. 회사는 AWS 계정에 다중 리전 AWS CloudTrail 추적을 보유하고 있습니다. <br/><br/>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Create an Amazon EventBridge (Amazon CloudWatch Events) rule. Define a pattern with the detail-type value set to AWS API Call via CloudTrail and an eventName of CreateUser.`, ko:`Amazon EventBridge(Amazon CloudWatch Events) 규칙을 생성합니다. CloudTrail을 통한 AWS API 호출로 설정된 세부 유형 값과 CreateUser의 eventName을 사용하여 패턴을 정의합니다.` },
      { k:'B', en:`Configure CloudTrail to send a notification for the CreateUser event to an Amazon Simple Notification Service (Amazon SNS) topic.`, ko:`CreateUser 이벤트에 대한 알림을 Amazon SNS(Amazon SNS) 주제로 보내도록 CloudTrail을 구성합니다.` },
      { k:'C', en:`Invoke a container that runs in Amazon Elastic Container Service (Amazon ECS) with AWS Fargate technology to remove access.`, ko:`AWS Fargate 기술을 사용하여 Amazon Elastic Container Service(Amazon ECS)에서 실행되는 컨테이너를 호출하여 액세스를 제거합니다.` },
      { k:'D', en:`Invoke an AWS Step Functions state machine to remove access.`, ko:`AWS Step Functions 상태 시스템을 호출하여 액세스를 제거합니다.` },
      { k:'E', en:`Use Amazon Simple Notification Service (Amazon SNS) to notify the security team.`, ko:`Amazon Simple 알림 서비스(Amazon SNS)를 사용하여 보안팀에 알립니다.` },
      { k:'F', en:`Use Amazon Pinpoint to notify the security team.`, ko:`Amazon Pinpoint를 사용하여 보안 팀에 알립니다.` },
    ],
    answer: ['A', 'D', 'E'],
    vote: '74% ADE, 11% ACE, 7% ABE',
    explain: `<p><span class="mark-ok">✅ A, D, E — EventBridge 감지 + Step Functions 자동 제거 + SNS 알림</span></p>
<p>이벤트 기반 자동화 워크플로우의 3단계 구성입니다.</p>
<ol>
<li><strong>A — EventBridge 규칙</strong>: CloudTrail이 <code>CreateUser</code> API 이벤트를 기록하면 EventBridge가 이를 감지합니다. 규칙 패턴: <code>detail-type: "AWS API Call via CloudTrail"</code>, <code>detail.eventName: "CreateUser"</code></li>
<li><strong>D — Step Functions 상태 머신</strong>: EventBridge가 Step Functions를 트리거하여 ① 모든 정책 분리(DetachUserPolicy), ② 액세스 키 비활성화(UpdateAccessKey), ③ 로그인 프로파일 삭제(DeleteLoginProfile) 등 다단계 액세스 제거 작업을 순서대로 실행합니다.</li>
<li><strong>E — SNS 알림</strong>: Step Functions 완료 후 SNS를 통해 보안 팀에 이메일/SMS로 사용자 승인 요청 알림을 전송합니다.</li>
</ol>
<p><a href="https://docs.aws.amazon.com/step-functions/latest/dg/use-cases-security-automation.html" target="_blank">Step Functions 보안 자동화 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — CloudTrail은 SNS로 S3 버킷에 로그가 저장될 때 알림을 보낼 수 있지만, 특정 API 이벤트(CreateUser)를 실시간으로 감지하여 자동화 워크플로우를 트리거하는 데는 EventBridge가 적합합니다. 또한 B만으로는 액세스 자동 제거 기능이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — ECS Fargate 컨테이너 시작은 IAM 액세스 제거라는 단순한 작업에 비해 과도하게 복잡하고 시작 시간이 오래 걸립니다. Lambda 또는 Step Functions이 훨씬 빠르고 적합합니다.</p>
<p><span class="mark-no">❌ F</span> — Amazon Pinpoint는 마케팅 커뮤니케이션(이메일, SMS, 푸시 알림) 플랫폼으로 대규모 고객 캠페인에 사용됩니다. 내부 보안 팀 알림에는 SNS가 적합합니다.</p>`,
    disc: [{ ans:'A, D, E', txt:'자동화 흐름: CreateUser 이벤트 → EventBridge → Step Functions(액세스 제거 다단계 실행: 정책 분리, 키 비활성화 등) → SNS(보안팀 승인 요청 알림). Step Functions는 다단계 작업의 순서 보장과 오류 처리를 제공하여 단순 Lambda보다 복잡한 액세스 제거 워크플로에 적합합니다.' }]
  },
  {
    n: 118,
    en: `A company wants to migrate to AWS. The company wants to use a multi-account structure with centrally managed access to all accounts and applications. The company also wants to keep the traffic on a private network. Multi-factor authentication (MFA) is required at login, and specific roles are assigned to user groups.<br/><br/>The company must create separate accounts for development. staging, production, and shared network. The production account and the shared network account must have connectivity to all accounts. The development account and the staging account must have access only to each other.<br/><br/>Which combination of steps should a solutions architect take 10 meet these requirements? (Choose three.)`,
    ko: `회사에서 AWS로 마이그레이션하려고 합니다. 회사는 모든 계정과 애플리케이션에 대한 액세스를 중앙에서 관리하는 다중 계정 구조를 사용하려고 합니다. 또한 회사는 트래픽을 프라이빗 네트워크에 유지하려고 합니다. 로그인 시 MFA(Multi-Factor Authentication)가 필요하며, 사용자 그룹에는 특정 역할이 할당됩니다. <br/><br/>회사는 개발, 스테이징, 프로덕션 및 공유 네트워크를 위한 별도의 계정을 만들어야 합니다. 프로덕션 계정과 공유 네트워크 계정은 모든 계정에 연결되어 있어야 합니다. 개발 계정과 스테이징 계정은 서로에게만 액세스할 수 있어야 합니다. <br/><br/>솔루션 설계자가 이러한 요구 사항을 충족하려면 어떤 단계 조합을 거쳐야 합니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Deploy a landing zone environment by using AWS Control Tower. Enroll accounts and invite existing accounts into the resulting organization in AWS Organizations.`, ko:`AWS Control Tower를 사용하여 랜딩 존 환경을 배포합니다. 계정을 등록하고 기존 계정을 AWS Organizations의 결과 조직에 초대합니다.` },
      { k:'B', en:`Enable AWS Security Hub in all accounts to manage cross-account access. Collect findings through AWS CloudTrail to force MFA login.`, ko:`모든 계정에서 AWS Security Hub를 활성화하여 교차 계정 액세스를 관리합니다. AWS CloudTrail을 통해 결과를 수집하여 MFA 로그인을 강제합니다.` },
      { k:'C', en:`Create transit gateways and transit gateway VPC attachments in each account. Configure appropriate route tables.`, ko:`각 계정에 전송 게이트웨이 및 전송 게이트웨이 VPC 연결을 생성합니다. 적절한 라우팅 테이블을 구성합니다.` },
      { k:'D', en:`Set up and enable AWS IAM Identity Center (AWS Single Sign-On). Create appropriate permission sets with required MFA for existing accounts.`, ko:`AWS IAM Identity Center(AWS Single Sign-On)를 설정하고 활성화합니다. 기존 계정에 필요한 MFA를 사용하여 적절한 권한 집합을 만듭니다.` },
      { k:'E', en:`Enable AWS Control Tower in all accounts to manage routing between accounts. Collect findings through AWS CloudTrail to force MFA login.`, ko:`모든 계정에서 AWS Control Tower를 활성화하여 계정 간 라우팅을 관리합니다. AWS CloudTrail을 통해 결과를 수집하여 MFA 로그인을 강제합니다.` },
      { k:'F', en:`Create IAM users and groups. Configure MFA for all users. Set up Amazon Cognoto user pools and Identity pools to manage access to accounts and between accounts.`, ko:`IAM 사용자 및 그룹을 생성합니다. 모든 사용자에 대해 MFA를 구성합니다. Amazon Cognito 사용자 풀과 자격 증명 풀을 설정하여 계정에 대한 액세스 및 계정 간 액세스를 관리합니다.` },
    ],
    answer: ['A', 'C', 'D'],
    vote: '100% ACD',
    explain: `<p><span class="mark-ok">✅ A, C, D — Control Tower + Transit Gateway + IAM Identity Center</span></p>
<ul>
<li><strong>A — AWS Control Tower 랜딩 존</strong>: 다중 계정 환경의 기반을 자동으로 설정합니다. Organizations 구조, SCP, CloudTrail, Config 등을 자동 구성하며 계정 등록(Enroll)을 통해 기존 계정도 관리할 수 있습니다. 개발/스테이징/프로덕션/공유 네트워크 계정을 올바른 OU에 배치합니다.</li>
<li><strong>C — Transit Gateway + VPC 연결</strong>: 프라이빗 네트워크 트래픽 요구사항을 충족합니다. 공유 네트워크 계정의 TGW를 허브로 설정하고, 라우팅 테이블을 구성하여 프로덕션/공유 네트워크는 모든 계정과 연결하고, 개발/스테이징은 서로만 연결되도록 제어합니다.</li>
<li><strong>D — IAM Identity Center (SSO) + MFA 권한 세트</strong>: 중앙에서 모든 계정의 접근을 관리하는 SSO를 설정합니다. 사용자 그룹별 역할 매핑과 MFA 필수 설정을 권한 세트(Permission Set)로 구성합니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html" target="_blank">AWS Control Tower 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Security Hub는 보안 표준 준수 모니터링 및 위협 탐지 결과 집계 도구입니다. 교차 계정 접근 관리나 MFA 강제 기능이 없습니다.</p>
<p><span class="mark-no">❌ E</span> — Control Tower는 계정 간 네트워크 라우팅을 관리하는 도구가 아닙니다. 라우팅은 Transit Gateway로 처리해야 합니다. 또한 CloudTrail 결과로 MFA를 강제하는 것은 Control Tower의 기능이 아닙니다.</p>
<p><span class="mark-no">❌ F</span> — Amazon Cognito는 모바일/웹 애플리케이션의 사용자 인증에 사용하는 서비스로, AWS 계정 간 접근 관리에 적합하지 않습니다. 다중 계정 접근 관리는 IAM Identity Center가 담당합니다.</p>`,
    disc: [{ ans:'A, C, D', txt:'세 역할 분담: A(다중 계정 구조/거버넌스) + C(프라이빗 네트워크 연결, 라우팅 격리) + D(중앙 집중식 SSO + MFA). TGW 라우팅 테이블로 개발↔스테이징 격리, 프로덕션/공유 네트워크→전체 연결을 세밀하게 제어할 수 있습니다.' }]
  },
  {
    n: 119,
    en: `A company runs its application in the eu-west-1 Region and has one account for each of its environments: development, testing, and production. All the environments are running 24 hours a day, 7 days a week by using stateful Amazon EC2 instances and Amazon RDS for MySQL databases. The databases are between 500 GB and 800 GB in size.<br/><br/>The development team and testing team work on business days during business hours, but the production environment operates 24 hours a day, 7 days a week. The company wants to reduce costs. All resources are tagged with an environment tag with either development, testing, or production as the key.<br/><br/>What should a solutions architect do to reduce costs with the LEAST operational effort?`,
    ko: `회사는 eu-west-1 지역에서 애플리케이션을 실행하고 개발, 테스트, 프로덕션 등 각 환경에 대해 하나의 계정을 갖습니다. 모든 환경은 상태 저장 Amazon EC2 인스턴스와 MySQL용 Amazon RDS 데이터베이스를 사용하여 연중무휴 24시간 실행됩니다. 데이터베이스 크기는 500GB에서 800GB 사이입니다. <br/><br/>개발팀과 테스트팀은 업무시간 중 영업일에 근무하지만, 프로덕션 환경은 연중무휴 24시간 운영됩니다. 회사는 비용을 절감하고 싶어합니다. 모든 리소스에는 개발, 테스트 또는 프로덕션을 값으로 하는 환경 태그가 지정됩니다. <br/><br/>최소한의 운영 노력으로 비용을 절감하려면 솔루션 설계자가 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an Amazon EventBridge rule that runs once every day. Configure the rule to invoke one AWS Lambda function that starts or stops instances based on the tag, day, and time.`, ko:`매일 한 번 실행되는 Amazon EventBridge 규칙을 만듭니다. 태그, 요일, 시간에 따라 인스턴스를 시작하거나 중지하는 AWS Lambda 함수 하나를 호출하도록 규칙을 구성합니다.` },
      { k:'B', en:`Create an Amazon EventBridge rule that runs every business day in the evening. Configure the rule to invoke an AWS Lambda function that stops instances based on the tag. Create a second EventBridge rule that runs every business day in the morning. Configure the second rule lo invoke another Lambda function that starts instances based on the tag.`, ko:`매일 저녁에 실행되는 Amazon EventBridge 규칙을 만듭니다. 태그를 기반으로 인스턴스를 중지하는 AWS Lambda 함수를 호출하도록 규칙을 구성합니다. 매일 아침에 실행되는 두 번째 EventBridge 규칙을 생성합니다. 두 번째 규칙을 구성하여 태그를 기반으로 인스턴스를 시작하는 다른 Lambda 함수를 호출합니다.` },
      { k:'C', en:`Create an Amazon EventBridge rule that runs every business day in the evening, Configure the rule to invoke an AWS Lambda function that terminates, instances based on the lag. Create a second EventBridge rule that runs every business day in the morning. Configure the second rule lo invoke another Lambda function that restores the instances from their last backup based on the tag.`, ko:`매일 저녁에 실행되는 Amazon EventBridge 규칙을 생성하고, 태그를 기반으로 인스턴스를 종료하는 AWS Lambda 함수를 호출하도록 규칙을 구성합니다. 매일 아침에 실행되는 두 번째 EventBridge 규칙을 생성합니다. 두 번째 규칙을 구성하면 태그를 기반으로 마지막 백업에서 인스턴스를 복원하는 다른 Lambda 함수를 호출합니다.` },
      { k:'D', en:`Create an Amazon EventBridge rule that runs every hour. Configure the rule to invoke one AWS Lambda function that terminates or restores instances from their last backup based on the tag. day, and time.`, ko:`매시간 실행되는 Amazon EventBridge 규칙을 생성합니다. 태그를 기반으로 마지막 백업에서 인스턴스를 종료하거나 복원하는 하나의 AWS Lambda 함수를 호출하도록 규칙을 구성합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 아침 시작 + 저녁 중지 두 EventBridge 규칙 + Lambda(태그 기반)</span></p>
<p>개발/테스트 환경은 영업일 업무 시간에만 사용하므로, 퇴근 후 중지하고 출근 전 시작하면 약 65~70%의 EC2/RDS 비용을 절감할 수 있습니다.</p>
<ul>
<li><strong>저녁 EventBridge 규칙</strong>: Cron 표현식으로 영업일 저녁(예: <code>cron(0 18 ? * MON-FRI *)</code>)에 Lambda를 트리거하여 <code>environment=development</code> 또는 <code>environment=testing</code> 태그가 있는 EC2/RDS를 중지합니다.</li>
<li><strong>아침 EventBridge 규칙</strong>: 영업일 아침(예: <code>cron(0 8 ? * MON-FRI *)</code>)에 Lambda를 트리거하여 동일 태그의 인스턴스를 시작합니다.</li>
<li><strong>상태 저장(Stateful) 인스턴스</strong>: 중지(Stop)/시작(Start)은 인스턴스의 상태와 데이터를 보존합니다. 종료(Terminate)와 달리 EBS 볼륨과 설정이 유지됩니다.</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 하루에 한 번 실행하는 단일 규칙은 중지와 시작을 동시에 처리할 수 없습니다. 인스턴스를 올바른 시간에 시작하고 다른 시간에 중지하려면 별도의 두 규칙이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — 인스턴스 종료(Terminate)는 EBS 볼륨과 상태를 삭제합니다. 문제에서 "상태 저장(stateful) EC2 인스턴스"와 "500~800GB RDS 데이터베이스"를 사용한다고 명시되어 있습니다. 매일 백업에서 복원하면 복원 시간이 오래 걸리고 운영 복잡성이 극도로 높아집니다.</p>
<p><span class="mark-no">❌ D</span> — C와 동일하게 종료/복원 방식은 상태 저장 인스턴스에 부적합합니다. 매시간 실행하는 것도 불필요하며 운영 오버헤드가 높습니다.</p>`,
    disc: [{ ans:'B', txt:'핵심 키워드: "stateful instances" → 중지(Stop)/시작(Start) 사용, 종료(Terminate)/복원 금지. 영업일 기준으로 두 개의 Cron EventBridge 규칙(아침 시작, 저녁 중지)을 설정하고 Lambda에서 environment 태그(development, testing)로 필터링하면 프로덕션에는 영향 없이 비용을 절감할 수 있습니다.' }]
  },
  {
    n: 120,
    en: `A company is building a software-as-a-service (SaaS) solution on AWS. The company has deployed an Amazon API Gateway REST API with AWS Lambda integration in multiple AWS Regions and in the same production account.<br/><br/>The company offers tiered pricing that gives customers the ability to pay for the capacity to make a certain number of API calls per second. The premium tier offers up to 3,000 calls per second, and customers are identified by a unique API key. Several premium tier customers in various Regions report that they receive error responses of 429 Too Many Requests from multiple API methods during peak usage hours. Logs indicate that the Lambda function is never invoked.<br/><br/>What could be the cause of the error messages for these customers?`,
    ko: `한 회사가 AWS에서 SaaS(Software-as-a-Service) 솔루션을 구축하고 있습니다. 이 회사는 여러 AWS 리전과 동일한 프로덕션 계정에 AWS Lambda 통합을 통해 Amazon API Gateway REST API를 배포했습니다. <br/><br/>이 회사는 고객이 초당 특정 수의 API 호출을 수행할 수 있는 용량에 대해 비용을 지불할 수 있는 계층화된 가격을 제공합니다. 프리미엄 계층은 초당 최대 3,000개의 호출을 제공하며 고객은 고유한 API 키로 식별됩니다. 다양한 리전의 몇몇 프리미엄 등급 고객은 사용량이 가장 많은 시간 동안 여러 API 메서드로부터 429 요청이 너무 많다는 오류 응답을 받았다고 보고합니다. 로그에는 Lambda 함수가 호출되지 않았음을 나타냅니다. <br/><br/>이러한 고객에게 나타나는 오류 메시지의 원인은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`The Lambda function reached its concurrency limit.`, ko:`Lambda 함수가 동시성 제한에 도달했습니다.` },
      { k:'B', en:`The Lambda function its Region limit for concurrency.`, ko:`Lambda 함수의 동시성 리전 제한.` },
      { k:'C', en:`The company reached its API Gateway account limit for calls per second.`, ko:`회사가 API Gateway 계정의 초당 호출 한도에 도달했습니다.` },
      { k:'D', en:`The company reached its API Gateway default per-method limit for calls per second.`, ko:`회사는 초당 호출에 대한 API 게이트웨이 기본 메서드별 제한에 도달했습니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — API Gateway 계정 수준 초당 요청 한도 초과</span></p>
<p>Amazon API Gateway는 <strong>계정당, 리전당</strong> 기본 10,000 RPS(Requests Per Second) 한도가 있습니다. 이 한도는 해당 계정의 모든 API, 모든 스테이지, 모든 메서드의 요청을 합산합니다.</p>
<ul>
<li>프리미엄 고객이 각각 최대 3,000 RPS를 사용하고, 여러 리전에서 동일한 프로덕션 계정을 사용하므로 계정 전체 합산 요청이 10,000 RPS를 초과할 수 있습니다.</li>
<li><strong>Lambda가 호출되지 않는 이유</strong>: API Gateway가 요청을 Lambda로 전달하기 전에 계정 수준 스로틀링을 적용하여 429를 반환합니다. Lambda 레벨까지 도달하지 못합니다.</li>
<li><strong>해결 방법</strong>: AWS Support를 통해 API Gateway 계정 한도 증가를 요청하거나, 계정을 분리합니다.</li>
</ul>
<p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html" target="_blank">API Gateway 할당량 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda 함수 동시성 한도에 도달하면 Lambda가 실행을 시도했다가 throttle되며, 이 경우 Lambda 호출 로그에 스로틀링 오류가 기록됩니다. 그러나 문제에서 "Lambda 함수가 전혀 호출되지 않았다"고 명시하므로 Lambda 레벨의 문제가 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — 마찬가지로 Lambda 리전 동시성 한도 초과도 Lambda가 호출된 이후의 문제입니다. Lambda가 전혀 호출되지 않는 원인이 될 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — API Gateway 메서드별 한도(기본 5,000 RPS)도 가능한 원인이지만, 문제에서 "여러 API 메서드에서" 오류가 발생한다고 명시합니다. 여러 메서드 모두에서 동시에 오류가 발생하는 것은 메서드별 한도보다 계정 수준 한도 초과 가능성이 더 높습니다.</p>`,
    disc: [{ ans:'C', txt:'API Gateway 할당량: 계정/리전당 10,000 RPS(기본값, 증가 요청 가능). 동일 프로덕션 계정에서 여러 리전에 API를 배포했으므로 리전별로 각각 한도가 적용됩니다. 여러 프리미엄 고객(각 최대 3,000 RPS)이 동시에 접근하면 단일 리전 계정 한도를 초과할 수 있습니다. Lambda 미호출 = API GW 단에서 차단. 해결: 한도 증가 요청 또는 계정 분리.' }]
  },
];
