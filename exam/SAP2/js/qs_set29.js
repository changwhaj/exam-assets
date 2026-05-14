window.QS_SET29 = [
  {
    n: 281,
    en: `A company is collecting a large amount of data from a fleet of IoT devices. Data is stored as Optimized Row Columnar (ORC) files in the Hadoop Distributed File System (HDFS) on a persistent Amazon EMR cluster. The company's data analytics team queries the data by using SQL in Apache Presto deployed on the same EMR cluster. Queries scan large amounts of data, always run for less than 15 minutes, and run only between 5 PM and 10 PM.<br><br>The company is concerned about the high cost associated with the current solution. A solutions architect must propose the most cost-effective solution that will allow SQL data queries.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 IoT 디바이스 집합에서 대량의 데이터를 수집하고 있습니다. 데이터는 영구 Amazon EMR 클러스터의 HDFS에 ORC 파일로 저장됩니다. 회사의 데이터 분석 팀은 동일한 EMR 클러스터에 배포된 Apache Presto의 SQL을 사용하여 데이터를 쿼리합니다. 쿼리는 대량의 데이터를 검색하고 항상 15분 미만 동안 실행되며 오후 5시에서 오후 10시 사이에만 실행됩니다.<br><br>회사는 현재 솔루션과 관련된 높은 비용을 우려하고 있습니다. 솔루션 설계자는 SQL 데이터 쿼리를 허용하는 가장 비용 효율적인 솔루션을 제안해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Store data in Amazon S3. Use Amazon Redshift Spectrum to query data.`, ko: `Amazon S3에 데이터를 저장합니다. Amazon Redshift Spectrum을 사용하여 데이터를 쿼리합니다.` },
      { k: 'B', en: `Store data in Amazon S3. Use the AWS Glue Data Catalog and Amazon Athena to query data.`, ko: `Amazon S3에 데이터를 저장합니다. AWS Glue 데이터 카탈로그와 Amazon Athena를 사용하여 데이터를 쿼리합니다.` },
      { k: 'C', en: `Store data in EMR File System (EMRFS). Use Presto in Amazon EMR to query data.`, ko: `EMRFS에 데이터를 저장합니다. Amazon EMR에서 Presto를 사용하여 데이터를 쿼리합니다.` },
      { k: 'D', en: `Store data in Amazon Redshift. Use Amazon Redshift to query data.`, ko: `Amazon Redshift에 데이터를 저장합니다. Amazon Redshift를 사용하여 데이터를 쿼리합니다.` },
    ],
    answer: ['B'],
    vote: '94% B',
    explain: `<p><span class="mark-ok">✅ B — S3 + AWS Glue 데이터 카탈로그 + Amazon Athena</span></p>
<p>하루 5시간만 쿼리를 실행하는 워크로드에서 <strong>영구 EMR 클러스터</strong>를 24시간 유지하는 것은 비용 낭비입니다. S3에 ORC 파일을 저장하면 스토리지 비용이 대폭 절감됩니다.</p>
<p>Amazon Athena는 완전 서버리스 SQL 쿼리 서비스로 인프라 비용이 없고 <strong>스캔한 데이터 양에 따라 과금</strong>됩니다. AWS Glue 데이터 카탈로그가 ORC 파일 메타데이터를 관리합니다. 영구 클러스터 없이 필요할 때만 쿼리합니다.</p>
<p><a href="https://docs.aws.amazon.com/athena/latest/ug/data-sources-glue.html" target="_blank">AWS 공식 문서 - Athena + Glue Data Catalog</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Redshift Spectrum은 S3의 데이터를 직접 쿼리하지만 Redshift 클러스터를 상시 운영해야 합니다. Athena(B)보다 비용이 높습니다.</p>
<p><span class="mark-no">❌ C</span> — EMRFS + 영구 EMR 클러스터 유지는 현재 솔루션과 동일한 과금 구조입니다. 비용 절감 효과가 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Redshift는 데이터 웨어하우스로 S3 직접 스토리지보다 스토리지 비용이 훨씬 높습니다.</p>`,
    disc: [
      { ans: 'B (94%)', txt: '5시간/일만 쿼리 → 영구 클러스터 비용 낭비. S3(저렴한 스토리지) + Athena(서버리스, 쿼리당 과금) + Glue(메타데이터)가 최저 비용. Redshift Spectrum(A)도 S3 쿼리 가능하나 클러스터 비용 발생.' }
    ]
  },
  {
    n: 282,
    en: `A large company recently experienced an unexpected increase in Amazon RDS and Amazon DynamoDB costs. The company needs to increase visibility into details of AWS Billing and Cost Management. There are various accounts associated with AWS Organizations, including many development and production accounts. There is no consistent tagging strategy across the organization, but there are guidelines in place that require all infrastructure to be deployed using AWS CloudFormation with consistent tagging. Management requires cost center numbers and project ID numbers for all existing and future DynamoDB tables and RDS instances.<br><br>Which strategy should the solutions architect provide to meet these requirements?`,
    ko: `대기업은 최근 Amazon RDS 및 Amazon DynamoDB 비용이 예기치 않게 증가하는 것을 경험했습니다. 회사는 AWS Billing and Cost Management의 세부 정보에 대한 가시성을 높여야 합니다. AWS Organizations와 연결된 다양한 계정이 있습니다. 조직 전체에 일관된 태그 지정 전략은 없지만 일관된 태그 지정과 함께 AWS CloudFormation을 사용하여 모든 인프라를 배포하도록 요구하는 지침이 있습니다. 관리에는 기존 및 향후의 모든 DynamoDB 테이블과 RDS 인스턴스에 대해 비용 센터 번호와 프로젝트 ID 번호가 필요합니다.<br><br>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 전략을 제공해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources.`, ko: `Tag Editor를 사용하여 기존 리소스에 태그를 지정합니다. 비용 할당 태그를 생성하여 비용 센터와 프로젝트 ID를 정의하고 태그가 기존 리소스에 전파되는 데 24시간을 허용합니다.` },
      { k: 'B', en: `Use an AWS Config rule to alert the finance team of untagged resources. Create a centralized AWS Lambda based solution to tag untagged RDS databases and DynamoDB resources every hour using a cross-account role.`, ko: `AWS Config 규칙을 사용하여 태그가 지정되지 않은 리소스를 재무팀에 알립니다. 교차 계정 역할을 사용하여 매시간 태그가 지정되지 않은 RDS 및 DynamoDB 리소스에 태그를 지정하는 Lambda 기반 솔루션을 만듭니다.` },
      { k: 'C', en: `Use Tag Editor to tag existing resources. Create cost allocation tags to define the cost center and project ID. Use SCPs to restrict resource creation that do not have the cost center and project ID on the resource.`, ko: `Tag Editor를 사용하여 기존 리소스에 태그를 지정합니다. 비용 할당 태그를 생성하여 비용 센터 및 프로젝트 ID를 정의합니다. SCP를 사용하여 비용 센터 및 프로젝트 ID가 없는 리소스 생성을 제한합니다.` },
      { k: 'D', en: `Create cost allocation tags to define the cost center and project ID and allow 24 hours for tags to propagate to existing resources. Update existing federated roles to restrict privileges to provision resources that do not include the cost center and project ID on the resource.`, ko: `비용 할당 태그를 생성하여 비용 센터와 프로젝트 ID를 정의하고 태그가 기존 리소스에 전파되는 데 24시간을 허용합니다. 기존 연합 역할을 업데이트하여 비용 센터 및 프로젝트 ID가 포함되지 않은 리소스를 프로비저닝하는 권한을 제한합니다.` },
    ],
    answer: ['C'],
    vote: '88% C',
    explain: `<p><span class="mark-ok">✅ C — Tag Editor(기존 리소스 태깅) + 비용 할당 태그 + SCP(향후 리소스 강제)</span></p>
<p><strong>기존 리소스:</strong> Tag Editor를 사용하면 조직 전체 계정에서 RDS, DynamoDB 리소스를 검색하고 일괄 태깅할 수 있습니다. 비용 할당 태그로 비용 센터·프로젝트 ID를 정의하면 Cost Explorer에서 비용 가시성이 확보됩니다.</p>
<p><strong>향후 리소스:</strong> SCP에서 태그 조건(<code>aws:RequestedTag</code>)을 사용하여 비용 센터·프로젝트 ID 태그 없이 리소스를 생성하는 API 호출을 Deny합니다. 이로써 CloudFormation 배포 시에도 태그 적용이 강제됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 기존 리소스 태깅은 해결하지만 향후 리소스에 대한 태그 강제 메커니즘이 없습니다.</p>
<p><span class="mark-no">❌ B</span> — Config + Lambda로 태그를 소급 적용하는 것은 복잡하고 리소스가 이미 생성된 후에 태그가 붙습니다. SCP가 더 선제적입니다.</p>
<p><span class="mark-no">❌ D</span> — 연합 역할을 개별 업데이트하는 것은 운영 부담이 크고 SCP처럼 루트 수준에서 전체 적용이 안 됩니다.</p>`,
    disc: [
      { ans: 'C (88%)', txt: 'Tag Editor로 기존 리소스 태깅 + SCP로 향후 태그 없는 리소스 생성 차단. A는 미래 방지 없음. B는 사후 대응으로 복잡. SCP가 조직 전체에 선제적으로 태그 정책 강제.' }
    ]
  },
  {
    n: 283,
    en: `A company wants to send data from its on-premises systems to Amazon S3 buckets. The company created the S3 buckets in three different accounts. The company must send the data privately without the data traveling across the internet. The company has no existing dedicated connectivity to AWS.<br><br>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)`,
    ko: `회사는 온프레미스 시스템에서 Amazon S3 버킷으로 데이터를 전송하려고 합니다. 회사는 세 가지 다른 계정에 S3 버킷을 생성했습니다. 회사는 데이터가 인터넷을 통해 이동하지 않고 비공개로 데이터를 전송해야 합니다. 회사에는 AWS에 대한 기존 전용 연결이 없습니다.<br><br>이러한 요구 사항을 충족하려면 솔루션 설계자가 수행해야 하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a private VIF between the on-premises environment and the private VPC.`, ko: `AWS 클라우드에 네트워킹 계정을 설정합니다. 네트워킹 계정에 프라이빗 VPC를 생성합니다. 온프레미스 환경과 프라이빗 VPC 간에 프라이빗 VIF를 사용하여 AWS Direct Connect 연결을 설정합니다.` },
      { k: 'B', en: `Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Set up an AWS Direct Connect connection with a public VIF between the on-premises environment and the private VPC.`, ko: `AWS 클라우드에 네트워킹 계정을 설정합니다. 네트워킹 계정에 프라이빗 VPC를 생성합니다. 온프레미스 환경과 프라이빗 VPC 간에 퍼블릭 VIF를 사용하여 AWS Direct Connect 연결을 설정합니다.` },
      { k: 'C', en: `Create an Amazon S3 interface endpoint in the networking account.`, ko: `네트워킹 계정에 Amazon S3 인터페이스 엔드포인트를 생성합니다.` },
      { k: 'D', en: `Create an Amazon S3 gateway endpoint in the networking account.`, ko: `네트워킹 계정에 Amazon S3 게이트웨이 엔드포인트를 생성합니다.` },
      { k: 'E', en: `Establish a networking account in the AWS Cloud. Create a private VPC in the networking account. Peer VPCs from the accounts that host the S3 buckets with the VPC in the network account.`, ko: `AWS 클라우드에 네트워킹 계정을 설정합니다. 네트워킹 계정에 프라이빗 VPC를 생성합니다. 네트워크 계정의 VPC를 사용하여 S3 버킷을 호스팅하는 계정의 VPC를 피어링합니다.` },
    ],
    answer: ['A', 'C'],
    vote: '76% AC',
    explain: `<p><span class="mark-ok">✅ A — Direct Connect + 프라이빗 VIF (온프레미스 → VPC)</span></p>
<p>기존 전용 연결이 없으므로 Direct Connect를 새로 설정합니다. <strong>프라이빗 VIF</strong>로 온프레미스와 VPC 간 비공개 연결을 수립합니다.</p>
<p><span class="mark-ok">✅ C — S3 인터페이스 엔드포인트 (VPC → S3, 온프레미스 접근 지원)</span></p>
<p>S3 인터페이스 엔드포인트(AWS PrivateLink)는 VPC 내 ENI를 통해 S3에 접근합니다. <strong>온프레미스에서 Direct Connect를 통해 인터페이스 엔드포인트에 접근 가능</strong>하므로 세 계정의 S3 버킷에 프라이빗으로 접근할 수 있습니다.</p>
<p>게이트웨이 엔드포인트(D)는 VPC 라우팅 테이블 기반으로 온프레미스에서 직접 접근할 수 없습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 퍼블릭 VIF는 S3의 퍼블릭 IP를 통해 접근하지만, 이는 AWS 내부 백본을 사용하더라도 인터넷을 통하지 않는다고 볼 수 있습니다. 그러나 VPC와 연결되지 않으며 인터페이스 엔드포인트 정책 적용이 불가합니다. 보안상 A+C가 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — S3 게이트웨이 엔드포인트는 <strong>온프레미스 네트워크에서 직접 접근 불가</strong>합니다. VPC 내부 리소스 전용입니다.</p>
<p><span class="mark-no">❌ E</span> — S3는 고객 VPC에 상주하지 않으므로 VPC 피어링으로 S3 버킷에 직접 접근할 수 없습니다.</p>`,
    disc: [
      { ans: 'AC (76%)', txt: '인터페이스 엔드포인트(C) = 온프레미스에서 Direct Connect 통해 S3 프라이빗 접근 가능. 게이트웨이 엔드포인트(D) = VPC 내부 전용, 온프레미스 접근 불가. 프라이빗 VIF(A) = 온프레미스↔VPC 비공개 연결.' }
    ]
  },
  {
    n: 284,
    en: `A company operates quick-service restaurants. The restaurants follow a predictable model with high sales traffic for 4 hours daily. Sales traffic is lower outside of those peak hours.<br><br>The point of sale and management platform is deployed in the AWS Cloud and has a backend that is based on Amazon DynamoDB. The database table uses provisioned throughput mode with 100,000 RCUs and 80,000 WCUs to match known peak resource consumption.<br><br>The company wants to reduce its DynamoDB cost and minimize the operational overhead for the IT staff.<br><br>Which solution meets these requirements MOST cost-effectively?`,
    ko: `회사는 퀵서비스 레스토랑을 운영하고 있습니다. 레스토랑은 매일 4시간 동안 판매 트래픽이 높은 예측 가능한 모델을 따릅니다. 피크 시간대 외에는 판매 트래픽이 더 낮습니다.<br><br>POS 및 관리 플랫폼은 AWS 클라우드에 배포되며 Amazon DynamoDB를 기반으로 하는 백엔드를 갖추고 있습니다. 데이터베이스 테이블은 알려진 최대 리소스 소비량과 일치하도록 100,000개의 RCU 및 80,000개의 WCU가 있는 프로비저닝된 처리량 모드를 사용합니다.<br><br>회사는 DynamoDB 비용을 줄이고 IT 직원의 운영 오버헤드를 최소화하려고 합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Reduce the provisioned RCUs and WCUs.`, ko: `프로비저닝된 RCU 및 WCU를 줄입니다.` },
      { k: 'B', en: `Change the DynamoDB table to use on-demand capacity.`, ko: `온디맨드 용량을 사용하도록 DynamoDB 테이블을 변경합니다.` },
      { k: 'C', en: `Enable DynamoDB auto scaling for the table.`, ko: `테이블에 대해 DynamoDB Auto Scaling을 활성화합니다.` },
      { k: 'D', en: `Purchase 1-year reserved capacity that is sufficient to cover the peak load for 4 hours each day.`, ko: `매일 4시간 동안 최대 부하를 처리하기에 충분한 1년 예약 용량을 구매합니다.` },
    ],
    answer: ['C'],
    vote: '61% C',
    explain: `<p><span class="mark-ok">✅ C — DynamoDB Auto Scaling</span></p>
<p>트래픽이 <strong>예측 가능한(predictable)</strong> 패턴을 따를 때 DynamoDB Auto Scaling이 최적입니다. Auto Scaling은 실제 사용량에 따라 RCU/WCU를 자동으로 조정하여 피크 시간(4시간)에는 최대 용량을 제공하고 비피크 시간에는 용량을 줄여 비용을 절감합니다.</p>
<p>AWS 공식 문서에서도 예측 가능한 트래픽에는 프로비저닝 모드 + Auto Scaling을, 예측 불가능한 트래픽에는 온디맨드를 권장합니다.</p>
<p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html" target="_blank">AWS 공식 문서 - DynamoDB Auto Scaling</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — RCU/WCU를 수동으로 줄이면 피크 시간의 처리 능력이 부족해질 수 있어 IT 직원의 수동 조정 작업이 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — 온디맨드는 예측 불가능한 트래픽에 적합합니다. 예측 가능한 패턴에서는 프로비저닝 + Auto Scaling이 더 비용 효율적입니다.</p>
<p><span class="mark-no">❌ D</span> — 예약 용량을 피크 부하 기준으로 구매하면 하루 4시간만 해당 용량을 사용하고 20시간은 과잉 예약됩니다. 비용 효율이 낮습니다.</p>`,
    disc: [
      { ans: 'C (61%)', txt: '"예측 가능한 패턴" → Auto Scaling(프로비저닝 모드). B(온디맨드)는 예측 불가능 트래픽에 적합. D(예약 용량)는 피크 기준 구매 시 20시간/일 낭비. Auto Scaling이 비피크 시간 비용 자동 절감.' }
    ]
  },
  {
    n: 285,
    en: `A company hosts a blog post application on AWS using Amazon API Gateway, Amazon DynamoDB, and AWS Lambda. The application currently does not use API keys to authorize requests. The API model is as follows:<br><br>GET /posts/{postId}: to get post details<br>GET /users/{userId}: to get user details<br>GET /comments/{commentId}: to get comments details<br><br>The company has noticed users are actively discussing topics in the comments section, and the company wants to increase user engagement by making the comments appear in real time.<br><br>Which design should be used to reduce comment latency and improve user experience?`,
    ko: `회사는 Amazon API Gateway, Amazon DynamoDB 및 AWS Lambda를 사용하여 AWS에서 블로그 게시물 애플리케이션을 호스팅합니다. 애플리케이션은 현재 요청을 승인하기 위해 API 키를 사용하지 않습니다. API 모델은 다음과 같습니다:<br><br>GET /posts/{postId}: 게시물 세부 정보 가져오기<br>GET /users/{userId}: 사용자 세부 정보 가져오기<br>GET /comments/{commentId}: 댓글 세부 정보 가져오기<br><br>회사는 사용자가 적극적으로 댓글 섹션에서 토론하고 있으며 댓글이 실시간으로 표시되도록 하여 사용자 참여를 늘리기를 원합니다.<br><br>댓글 대기 시간을 줄이고 사용자 경험을 개선하려면 어떤 디자인을 사용해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use edge-optimized API with Amazon CloudFront to cache API responses.`, ko: `Amazon CloudFront와 함께 엣지 최적화 API를 사용하여 API 응답을 캐시합니다.` },
      { k: 'B', en: `Modify the blog application code to request GET/comments/{commentId} every 10 seconds.`, ko: `10초마다 GET/comments/{commentId}를 요청하도록 블로그 애플리케이션 코드를 수정합니다.` },
      { k: 'C', en: `Use AWS AppSync and leverage WebSockets to deliver comments.`, ko: `AWS AppSync를 사용하고 WebSocket을 활용하여 댓글을 전달합니다.` },
      { k: 'D', en: `Change the concurrency limit of the Lambda functions to lower the API response time.`, ko: `API 응답 시간을 낮추기 위해 Lambda 함수의 동시성 제한을 변경합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — AWS AppSync + WebSocket (실시간 댓글)</span></p>
<p>AWS AppSync는 GraphQL과 <strong>WebSocket 기반 실시간 구독(Subscriptions)</strong>을 지원합니다. 새 댓글이 작성되면 서버가 구독 중인 모든 클라이언트에 실시간으로 푸시합니다. 클라이언트가 폴링하지 않아도 되어 지연 시간이 없고 서버 부하도 줄어듭니다.</p>
<p><a href="https://docs.aws.amazon.com/appsync/latest/devguide/aws-appsync-real-time-data.html" target="_blank">AWS 공식 문서 - AppSync 실시간 데이터</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFront 캐싱은 정적 응답을 빠르게 제공하지만 실시간 댓글에는 적합하지 않습니다. 캐시된 오래된 데이터가 반환될 수 있습니다.</p>
<p><span class="mark-no">❌ B</span> — 10초 폴링은 실시간이 아니며(최대 10초 지연) 불필요한 API 호출로 서버 부하와 비용을 증가시킵니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda 동시성 제한 변경은 처리량 조절에 관한 것으로 실시간 업데이트 전달 방식과 무관합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'AppSync WebSocket 구독 = 실시간 푸시. 폴링(B)은 최대 10초 지연. CloudFront 캐싱(A)은 오래된 데이터 반환 가능. Lambda 동시성(D)은 응답 속도 개선이나 실시간 전달 방식과 무관.' }
    ]
  },
  {
    n: 286,
    en: `A company manages hundreds of AWS accounts centrally in an organization in AWS Organizations. The company recently started to allow product teams to create and manage their own S3 access points in their accounts. The S3 access points can be accessed only within VPCs, not on the internet.<br><br>What is the MOST operationally efficient way to enforce this requirement?`,
    ko: `회사는 AWS Organizations 내 조직의 중앙에서 수백 개의 AWS 계정을 관리합니다. 회사는 최근 제품 팀이 자신의 계정에서 자체 S3 액세스 포인트를 생성하고 관리할 수 있도록 허용하기 시작했습니다. S3 액세스 포인트는 인터넷이 아닌 VPC 내에서만 액세스할 수 있습니다.<br><br>이 요구 사항을 시행하는 가장 운영상 효율적인 방법은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Set the S3 access point resource policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.`, ko: `s3:AccessPointNetworkOrigin 조건 키가 VPC로 평가되지 않는 한 s3:CreateAccessPoint 작업을 거부하도록 S3 액세스 포인트 리소스 정책을 설정합니다.` },
      { k: 'B', en: `Create an SCP at the root level in the organization to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.`, ko: `s3:AccessPointNetworkOrigin 조건 키가 VPC로 평가되지 않는 한 s3:CreateAccessPoint 작업을 거부하도록 조직의 루트 수준에서 SCP를 생성합니다.` },
      { k: 'C', en: `Use AWS CloudFormation StackSets to create a new IAM policy in each AWS account that allows the s3:CreateAccessPoint action only if the s3:AccessPointNetworkOrigin condition key evaluates to VPC.`, ko: `s3:AccessPointNetworkOrigin 조건 키가 VPC로 평가되는 경우에만 s3:CreateAccessPoint 작업을 허용하는 각 AWS 계정에 새 IAM 정책을 생성합니다.` },
      { k: 'D', en: `Set the S3 bucket policy to deny the s3:CreateAccessPoint action unless the s3:AccessPointNetworkOrigin condition key evaluates to VPC.`, ko: `s3:AccessPointNetworkOrigin 조건 키가 VPC로 평가되지 않는 한 s3:CreateAccessPoint 작업을 거부하도록 S3 버킷 정책을 설정합니다.` },
    ],
    answer: ['B'],
    vote: '93% B',
    explain: `<p><span class="mark-ok">✅ B — 루트 수준 SCP + s3:AccessPointNetworkOrigin 조건</span></p>
<p>수백 개 계정에 일관되게 요구 사항을 적용하는 가장 운영 효율적인 방법은 <strong>루트 수준 SCP</strong>입니다. 단일 SCP를 생성하고 조건 키 <code>s3:AccessPointNetworkOrigin</code>이 VPC가 아닐 때 <code>s3:CreateAccessPoint</code>를 Deny하면 모든 계정에 자동 적용됩니다.</p>
<p>각 계정의 버킷 정책이나 리소스 정책을 개별 수정(A, D)하거나 StackSets로 IAM 정책을 배포(C)하는 것보다 훨씬 간단합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — "S3 액세스 포인트 리소스 정책"은 이미 생성된 액세스 포인트의 접근 제어에 사용됩니다. 액세스 포인트 생성 자체를 차단하려면 더 상위 레벨(SCP)의 정책이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — CloudFormation StackSets로 IAM 정책을 각 계정에 배포하는 것은 SCP 단일 정책보다 복잡하고 시간이 걸립니다.</p>
<p><span class="mark-no">❌ D</span> — S3 버킷 정책은 각 버킷에 개별 적용해야 합니다. 수백 개 계정의 모든 버킷에 적용하는 것은 비현실적입니다.</p>`,
    disc: [
      { ans: 'B (93%)', txt: '수백 개 계정 → 루트 SCP 단일 정책이 가장 운영 효율적. s3:AccessPointNetworkOrigin 조건으로 VPC 외 액세스 포인트 생성 차단. 개별 버킷/리소스 정책(A/D) 또는 StackSets(C)는 과잉 복잡.' }
    ]
  },
  {
    n: 287,
    en: `A solutions architect must update an application environment within AWS Elastic Beanstalk using a blue/green deployment methodology. The solutions architect creates an environment that is identical to the existing application environment and deploys the application to the new environment.<br><br>What should be done next to complete the update?`,
    ko: `솔루션 아키텍트는 블루/그린 배포 방법을 사용하여 AWS Elastic Beanstalk 내의 애플리케이션 환경을 업데이트해야 합니다. 솔루션 아키텍트는 기존 애플리케이션 환경과 동일한 환경을 생성하고 애플리케이션을 새 환경에 배포합니다.<br><br>업데이트를 완료하려면 다음에 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Redirect to the new environment using Amazon Route 53.`, ko: `Amazon Route 53을 사용하여 새로운 환경으로 리디렉션합니다.` },
      { k: 'B', en: `Select the Swap Environment URLs option.`, ko: `환경 URL 교환 옵션을 선택합니다.` },
      { k: 'C', en: `Replace the Auto Scaling launch configuration.`, ko: `Auto Scaling 시작 구성을 교체합니다.` },
      { k: 'D', en: `Update the DNS records to point to the green environment.`, ko: `녹색 환경을 가리키도록 DNS 레코드를 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 환경 URL 교환(Swap Environment URLs)</span></p>
<p>AWS Elastic Beanstalk의 <strong>Swap Environment URLs</strong> 기능은 두 환경의 CNAME 레코드를 교환하여 트래픽을 파란색 환경(기존)에서 녹색 환경(새로운)으로 즉시 전환합니다. DNS 전파로 인한 지연(TTL)이 최소화되며 Elastic Beanstalk 콘솔에서 단일 클릭으로 완료됩니다.</p>
<p>문제가 발생할 경우 다시 URL을 교환하면 롤백이 가능합니다.</p>
<p><a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html" target="_blank">AWS 공식 문서 - Elastic Beanstalk CNAME 교환</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, D</span> — Route 53 레코드를 수동으로 변경하거나 DNS를 업데이트하는 것은 Elastic Beanstalk의 내장 기능인 URL 교환보다 복잡하고 DNS TTL 지연이 더 클 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — 시작 구성 교체는 Auto Scaling 그룹이 새 인스턴스를 시작할 때 사용할 AMI/설정을 변경하는 것으로 블루/그린 환경 전환과 무관합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'Elastic Beanstalk URL 교환 = 두 환경의 CNAME 즉시 교환, 단일 클릭으로 블루/그린 전환 완료. Route 53 수동 변경(A/D)보다 빠르고 간단. 롤백도 재교환으로 즉시 가능.' }
    ]
  },
  {
    n: 288,
    en: `A company is building an image service on the web that will allow users to upload and search random photos. At peak usage, up to 10,000 users worldwide will upload their images. The will then overlay text on the uploaded images, which will then be published on the company website.<br><br>Which design should a solutions architect implement?`,
    ko: `회사는 사용자가 임의의 사진을 업로드하고 검색할 수 있는 이미지 서비스를 웹에 구축하고 있습니다. 사용량이 가장 많을 때는 전 세계적으로 최대 10,000명의 사용자가 이미지를 업로드합니다. 그러면 업로드된 이미지에 텍스트가 오버레이되어 회사 웹사이트에 게시됩니다.<br><br>솔루션 아키텍트는 어떤 디자인을 구현해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Store the uploaded images in Amazon Elastic File System (Amazon EFS). Send application log information about each image to Amazon CloudWatch Logs. Create a fleet of Amazon EC2 instances that use CloudWatch Logs to determine which images need to be processed. Place processed images in another directory in Amazon EFS. Enable Amazon CloudFront and configure the origin to be the one of the EC2 instances in the fleet.`, ko: `업로드된 이미지를 Amazon EFS에 저장합니다. 각 이미지에 대한 애플리케이션 로그 정보를 Amazon CloudWatch Logs로 보냅니다. CloudWatch Logs를 사용하여 처리해야 할 이미지를 결정하는 Amazon EC2 인스턴스 집합을 생성합니다. 처리된 이미지를 Amazon EFS의 다른 디렉터리에 배치합니다. Amazon CloudFront를 활성화하고 플릿의 EC2 인스턴스 중 하나를 오리진으로 구성합니다.` },
      { k: 'B', en: `Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to Amazon Simple Notification Service (Amazon SNS). Create a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB) to pull messages from Amazon SNS to process the images and place them in Amazon Elastic File System (Amazon EFS). Use Amazon CloudWatch metrics for the SNS message volume to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the ALB in front of the EC2 instances.`, ko: `업로드된 이미지를 Amazon S3 버킷에 저장하고 Amazon SNS에 메시지를 보내도록 S3 버킷 이벤트 알림을 구성합니다. ALB 뒤에 Amazon EC2 인스턴스 집합을 생성하여 Amazon SNS에서 메시지를 가져와 이미지를 처리하고 Amazon EFS에 배치합니다. SNS 메시지 볼륨에 대한 CloudWatch 지표를 사용하여 EC2 인스턴스를 확장합니다. Amazon CloudFront를 활성화하고 ALB를 오리진으로 구성합니다.` },
      { k: 'C', en: `Store the uploaded images in an Amazon S3 bucket and configure an S3 bucket event notification to send a message to the Amazon Simple Queue Service (Amazon SQS) queue. Create a fleet of Amazon EC2 instances to pull messages from the SQS queue to process the images and place them in another S3 bucket. Use Amazon CloudWatch metrics for queue depth to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to be the S3 bucket that contains the processed images.`, ko: `업로드된 이미지를 Amazon S3 버킷에 저장하고 Amazon SQS 대기열에 메시지를 보내도록 S3 버킷 이벤트 알림을 구성합니다. Amazon EC2 인스턴스 집합을 생성하여 SQS 대기열에서 메시지를 가져와 이미지를 처리하고 다른 S3 버킷에 배치합니다. 대기열 깊이에 대한 CloudWatch 지표를 사용하여 EC2 인스턴스를 확장합니다. Amazon CloudFront를 활성화하고 처리된 이미지가 포함된 S3 버킷을 오리진으로 구성합니다.` },
      { k: 'D', en: `Store the uploaded images on a shared Amazon Elastic Block Store (Amazon EBS) volume mounted to a fleet of Amazon EC2 Spot instances. Create an Amazon DynamoDB table that contains information about each uploaded image and whether it has been processed. Use an Amazon EventBridge rule to scale out EC2 instances. Enable Amazon CloudFront and configure the origin to reference an Elastic Load Balancer in front of the fleet of EC2 instances.`, ko: `업로드된 이미지를 Amazon EC2 스팟 인스턴스 집합에 탑재된 공유 Amazon EBS 볼륨에 저장합니다. 각 업로드된 이미지에 대한 정보와 처리 여부를 포함하는 DynamoDB 테이블을 생성합니다. Amazon EventBridge 규칙을 사용하여 EC2 인스턴스를 확장합니다. Amazon CloudFront를 활성화하고 EC2 인스턴스 집합 앞에서 ELB를 참조하도록 오리진을 구성합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — S3(업로드) + SQS(이벤트 분리) + EC2(처리) + S3(출력) + CloudFront(배포)</span></p>
<p><strong>S3 → SQS:</strong> 이미지 업로드 이벤트를 SQS 대기열로 전달하여 업로드와 처리를 분리(decouple)합니다. 10,000명이 동시에 업로드해도 SQS가 버퍼 역할을 합니다.</p>
<p><strong>SQS 대기열 깊이 기반 Auto Scaling:</strong> 대기열 깊이가 증가하면 EC2 인스턴스를 확장하여 처리 속도를 높입니다.</p>
<p><strong>CloudFront + S3 오리진:</strong> 처리된 이미지를 S3에 저장하고 CloudFront가 글로벌 CDN으로 빠르게 제공합니다. EC2 인스턴스가 CloudFront 오리진이 되지 않아 확장성이 높습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudWatch Logs로 이미지 처리 순서를 관리하는 것은 비효율적이며, EC2가 CloudFront 오리진이 되면 확장성 문제가 발생합니다. EFS보다 S3가 이미지 저장에 적합합니다.</p>
<p><span class="mark-no">❌ B</span> — ALB가 CloudFront 오리진이 되면 EC2 직접 노출. SNS는 다수 구독자에게 팬아웃하는 용도로 단순 대기열보다 복잡합니다. EFS보다 S3가 이미지 저장에 더 비용 효율적입니다.</p>
<p><span class="mark-no">❌ D</span> — EBS Multi-Attach는 단일 AZ 제한이 있어 고가용성에 부적합합니다. Spot 인스턴스는 중단될 수 있어 처리 안정성이 낮습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'S3(업로드/출력) + SQS(이벤트 분리 버퍼) + SQS 대기열 깊이 기반 EC2 Auto Scaling + CloudFront+S3 오리진(글로벌 배포). EFS/EBS(A/D)는 이미지 호스팅에 과잉, ALB 오리진(B)은 확장성 제한.' }
    ]
  },
  {
    n: 289,
    en: `A company has deployed its database on an Amazon RDS for MySQL DB instance in the us-east-1 Region. The company needs to make its data available to customers in Europe. The customers in Europe must have access to the same data as customers in the United States (US) and will not tolerate high application latency or stale data. The customers in Europe and the customers in the US need to write to the database. Both groups of customers need to see updates from the other group in real time.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 us-east-1 리전의 Amazon RDS for MySQL DB 인스턴스에 데이터베이스를 배포했습니다. 회사는 유럽 고객에게 데이터를 제공해야 합니다. 유럽 고객은 미국 고객과 동일한 데이터에 액세스할 수 있어야 하며 높은 애플리케이션 대기 시간이나 오래된 데이터를 용납하지 않습니다. 유럽 및 미국 고객 모두 데이터베이스에 기록해야 하며, 양쪽 모두 다른 그룹의 업데이트를 실시간으로 확인해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an Amazon Aurora MySQL replica of the RDS for MySQL DB instance. Pause application writes to the RDS DB instance. Promote the Aurora Replica to a standalone DB cluster. Reconfigure the application to use the Aurora database and resume writes. Add eu-west-1 as a secondary Region to the DB cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu-west-1.`, ko: `RDS for MySQL DB 인스턴스의 Amazon Aurora MySQL 복제본을 생성합니다. RDS DB 인스턴스에 대한 애플리케이션 쓰기를 일시 중지합니다. Aurora 복제본을 독립형 DB 클러스터로 승격합니다. Aurora 데이터베이스를 사용하고 쓰기를 재개하도록 애플리케이션을 재구성합니다. eu-west-1을 DB 클러스터에 보조 리전으로 추가합니다. DB 클러스터에서 쓰기 전달을 활성화합니다. eu-west-1에 애플리케이션을 배포합니다.` },
      { k: 'B', en: `Add a cross-Region replica in eu-west-1 for the RDS for MySQL DB instance. Configure the replica to replicate write queries back to the primary DB instance. Deploy the application in eu-west-1. Configure the application to use the RDS for MySQL endpoint in eu-west-1.`, ko: `RDS for MySQL DB 인스턴스에 대해 eu-west-1에 리전 간 복제본을 추가합니다. 기본 DB 인스턴스에 쓰기 쿼리를 다시 복제하도록 복제본을 구성합니다. eu-west-1에 애플리케이션을 배포합니다.` },
      { k: 'C', en: `Copy the most recent snapshot from the RDS for MySQL DB instance to eu-west-1. Create a new RDS for MySQL DB instance in eu-west-1 from the snapshot. Configure MySQL logical replication from us-east-1 to eu-west-1. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1.`, ko: `RDS for MySQL DB 인스턴스의 최신 스냅샷을 eu-west-1로 복사합니다. 스냅샷에서 eu-west-1에 새로운 RDS for MySQL DB 인스턴스를 생성합니다. us-east-1에서 eu-west-1로 MySQL 논리적 복제를 구성합니다.` },
      { k: 'D', en: `Convert the RDS for MySQL DB instance to an Amazon Aurora MySQL DB cluster. Add eu-west-1 as a secondary Region to the DB cluster. Enable write forwarding on the DB cluster. Deploy the application in eu-west-1. Configure the application to use the Aurora MySQL endpoint in eu-west-1.`, ko: `RDS for MySQL DB 인스턴스를 Amazon Aurora MySQL DB 클러스터로 변환합니다. eu-west-1을 DB 클러스터에 보조 리전으로 추가합니다. DB 클러스터에서 쓰기 전달을 활성화합니다. eu-west-1에 애플리케이션을 배포합니다.` },
    ],
    answer: ['A'],
    vote: 'A(72%) D(28%) 논란',
    explain: `<p><span class="mark-ok">✅ A — Aurora MySQL 복제본 생성 → 승격 → 글로벌 DB + 쓰기 전달</span></p>
<p>RDS for MySQL을 Aurora MySQL로 직접 "변환"하는 방법은 공식적으로 없습니다. AWS 공식 문서와 가이드에 따르면 올바른 마이그레이션 방법은 <strong>Aurora 읽기 복제본을 생성한 후 독립형 Aurora 클러스터로 승격</strong>하는 것입니다.</p>
<p>D의 "변환(Convert)"은 AWS 공식 기능이 아니며 시험 문제에서 정확한 절차가 아닙니다. A는 정확한 단계를 기술합니다. 승격 후 eu-west-1을 보조 리전으로 추가하고 쓰기 전달을 활성화하면 유럽 고객이 낮은 지연 시간으로 읽기·쓰기를 수행하고 실시간으로 미국 데이터를 볼 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — RDS for MySQL 리전 간 복제본은 읽기 전용입니다. 복제본이 쓰기를 다시 주 인스턴스로 복제하는 기능은 지원되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — RDS for MySQL DB에 "쓰기 전달" 기능이 없습니다. 쓰기 전달은 Aurora 글로벌 데이터베이스의 기능입니다.</p>
<p><span class="mark-no">❌ D</span> — RDS for MySQL을 Aurora MySQL로 직접 "변환"하는 것은 AWS에서 공식 지원하지 않습니다. A의 복제본 생성 및 승격 절차가 필요합니다.</p>`,
    disc: [
      { ans: 'A(72%) vs D(28%)', txt: '"Convert"(D) = AWS 공식 기능 아님. A의 Aurora 복제본 생성→독립 클러스터 승격이 공식 RDS MySQL→Aurora 마이그레이션 경로. 이후 글로벌 DB + 쓰기 전달로 양방향 실시간 업데이트.' }
    ]
  },
  {
    n: 290,
    en: `A company is serving files to its customers through an SFTP server that is accessible over the internet. The SFTP server is running on a single Amazon EC2 instance with an Elastic IP address attached. Customers connect to the SFTP server through its Elastic IP address and use SSH for authentication. The EC2 instance also has an attached security group that allows access from all customer IP addresses.<br><br>A solutions architect must implement a solution to improve availability, minimize the complexity of infrastructure management, and minimize the disruption to customers who access files. The solution must not change the way customers connect.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 인터넷을 통해 액세스할 수 있는 SFTP 서버를 통해 고객에게 파일을 제공하고 있습니다. SFTP 서버는 탄력적 IP 주소가 연결된 단일 Amazon EC2 인스턴스에서 실행됩니다. 고객은 탄력적 IP 주소를 통해 SFTP 서버에 연결하고 SSH를 사용하여 인증합니다. EC2 인스턴스에는 모든 고객 IP 주소의 액세스를 허용하는 보안 그룹도 있습니다.<br><br>솔루션 설계자는 가용성을 향상시키고, 인프라 관리의 복잡성을 최소화하며, 파일에 액세스하는 고객의 업무 중단을 최소화하는 솔루션을 구현해야 합니다. 솔루션은 고객이 연결하는 방식을 변경해서는 안 됩니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a publicly accessible endpoint. Associate the SFTP Elastic IP address with the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.`, ko: `EC2 인스턴스에서 탄력적 IP 주소의 연결을 해제합니다. SFTP 파일 호스팅에 사용할 Amazon S3 버킷을 생성합니다. AWS Transfer Family 서버를 생성합니다. 공개적으로 액세스 가능한 엔드포인트로 Transfer Family 서버를 구성합니다. SFTP 탄력적 IP 주소를 새 엔드포인트와 연결합니다. Transfer Family 서버를 S3 버킷으로 지정합니다. SFTP 서버의 모든 파일을 S3 버킷으로 동기화합니다.` },
      { k: 'B', en: `Disassociate the Elastic IP address from the EC2 instance. Create an Amazon S3 bucket to be used for SFTP file hosting. Create an AWS Transfer Family server. Configure the Transfer Family server with a VPC-hosted, internet-facing endpoint. Associate the SFTP Elastic IP address with the new endpoint. Attach the security group with customer IP addresses to the new endpoint. Point the Transfer Family server to the S3 bucket. Sync all files from the SFTP server to the S3 bucket.`, ko: `EC2 인스턴스에서 탄력적 IP 주소의 연결을 해제합니다. SFTP 파일 호스팅에 사용할 Amazon S3 버킷을 생성합니다. AWS Transfer Family 서버를 생성합니다. VPC 호스팅, 인터넷 연결 엔드포인트로 Transfer Family 서버를 구성합니다. SFTP 탄력적 IP 주소를 새 엔드포인트와 연결합니다. 고객 IP 주소가 포함된 보안 그룹을 새 엔드포인트에 연결합니다. Transfer Family 서버를 S3 버킷으로 지정합니다. 파일을 S3 버킷으로 동기화합니다.` },
      { k: 'C', en: `Disassociate the Elastic IP address from the EC2 instance. Create a new Amazon Elastic File System (Amazon EFS) file system to be used for SFTP file hosting. Create an AWS Fargate task definition to run an SFTP server. Specify the EFS file system as a mount in the task definition. Create a Fargate service and place a Network Load Balancer (NLB) in front of the service. Attach the security group with customer IP addresses to the tasks. Associate the Elastic IP address with the NLB. Sync all files from the SFTP server to the S3 bucket.`, ko: `EC2 인스턴스에서 탄력적 IP 주소의 연결을 해제합니다. SFTP 파일 호스팅을 위한 새로운 Amazon EFS 파일 시스템을 생성합니다. AWS Fargate 작업 정의를 생성하여 SFTP 서버를 실행합니다. 작업 정의에서 EFS 파일 시스템을 탑재로 지정합니다. Fargate 서비스를 생성하고 서비스 앞에 NLB를 배치합니다.` },
      { k: 'D', en: `Disassociate the Elastic IP address from the EC2 instance. Create a multi-attach Amazon Elastic Block Store (Amazon EBS) volume to be used for SFTP file hosting. Create a Network Load Balancer (NLB) with the Elastic IP address attached. Create an Auto Scaling group with EC2 instances that run an SFTP server. Configure the Auto Scaling group to automatically add instances behind the NLB. Configure the Auto Scaling group to use the security group that allows customer IP addresses. Sync all files from the SFTP server to the new multi-attach EBS volume.`, ko: `EC2 인스턴스에서 탄력적 IP 주소의 연결을 해제합니다. SFTP 파일 호스팅에 사용할 다중 연결 EBS 볼륨을 생성합니다. 탄력적 IP 주소가 연결된 NLB를 생성합니다. SFTP 서버를 실행하는 EC2 인스턴스로 Auto Scaling 그룹을 생성합니다.` },
    ],
    answer: ['B'],
    vote: '89% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Transfer Family + VPC 호스팅 인터넷 연결 엔드포인트 + 기존 Elastic IP + 보안 그룹</span></p>
<p><strong>고가용성 + 관리 복잡성 최소화:</strong> AWS Transfer Family는 완전 관리형 SFTP 서비스로 EC2 인스턴스를 직접 관리할 필요가 없습니다.</p>
<p><strong>기존 연결 방식 유지(Elastic IP):</strong> VPC 호스팅 인터넷 연결 엔드포인트 유형은 <strong>Elastic IP를 엔드포인트에 연결</strong>할 수 있습니다. 고객은 동일한 IP 주소로 계속 연결합니다.</p>
<p><strong>보안 그룹:</strong> 기존 EC2의 고객 IP 허용 보안 그룹을 Transfer Family 엔드포인트에 연결하여 IP 화이트리스팅을 유지합니다. 공개 엔드포인트(A)는 보안 그룹을 연결할 수 없습니다.</p>
<p><a href="https://aws.amazon.com/blogs/storage/use-ip-whitelisting-to-secure-your-aws-transfer-for-sftp-servers/" target="_blank">AWS 공식 블로그 - Transfer Family IP 화이트리스팅</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 공개(Publicly Accessible) 엔드포인트 유형은 <strong>Elastic IP를 연결하거나 보안 그룹을 연결할 수 없습니다.</strong> 이 두 기능은 VPC 호스팅 엔드포인트에서만 지원됩니다.</p>
<p><span class="mark-no">❌ C</span> — Fargate + EFS로 SFTP 서버를 직접 운영하는 것은 인프라 관리 복잡성이 높습니다. Transfer Family(B)가 완전 관리형으로 더 간단합니다.</p>
<p><span class="mark-no">❌ D</span> — EBS Multi-Attach는 단일 AZ 제한이 있어 고가용성에 부적합합니다. EC2 ASG + SFTP 직접 운영도 관리 복잡성이 높습니다.</p>`,
    disc: [
      { ans: 'B (89%)', txt: 'Transfer Family VPC 호스팅 엔드포인트만 Elastic IP 연결 + 보안 그룹 지원. 공개 엔드포인트(A)는 EIP/SG 불가. 완전 관리형으로 고가용성 달성, 기존 IP+SSH 연결 방식 유지.' }
    ]
  },
];