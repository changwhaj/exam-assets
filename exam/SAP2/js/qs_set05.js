window.QS_SET05 = [
  {
    n: 41,
    en: `A company recently deployed an application on AWS. The application uses Amazon DynamoDB. The company measured the application load and configured the RCUs and WCUs on the DynamoDB table to match the expected peak load. The peak load occurs once a week for a 4-hour period and is double the average load. The application load is close to the average load for the rest of the week. The access pattern includes many more writes to the table than reads of the table. A solutions architect needs to implement a solution to minimize the cost of the table. Which solution will meet these requirements?`,
    ko: `한 회사가 최근 AWS에 애플리케이션을 배포했습니다. 애플리케이션은 Amazon DynamoDB를 사용합니다. 회사는 애플리케이션 부하를 측정하고 예상 피크 부하와 일치하도록 DynamoDB 테이블의 RCU 및 WCU를 구성했습니다. 피크 부하는 일주일에 한 번 4시간 동안 발생하며 평균 부하의 두 배입니다. 나머지 시간의 애플리케이션 부하는 평균 부하에 가깝습니다. 액세스 패턴에는 읽기보다 쓰기가 훨씬 많습니다. 솔루션 설계자는 테이블 비용을 최소화하는 솔루션을 구현해야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use AWS Application Auto Scaling to increase capacity during the peak period. Purchase reserved RCUs and WCUs to match the average load.`, ko:`AWS Application Auto Scaling을 사용하여 피크 기간 동안 용량을 늘립니다. 평균 부하에 맞게 예약된 RCU 및 WCU를 구매합니다.` },
      { k:'B', en:`Configure on-demand capacity mode for the table.`, ko:`테이블에 온디맨드 용량 모드를 구성합니다.` },
      { k:'C', en:`Configure DynamoDB Accelerator (DAX) in front of the table. Reduce the provisioned read capacity to match the new peak load on the table.`, ko:`테이블 앞에 DynamoDB Accelerator(DAX)를 구성합니다. 테이블의 새 피크 부하에 맞게 프로비저닝된 읽기 용량을 줄입니다.` },
      { k:'D', en:`Configure DynamoDB Accelerator (DAX) in front of the table. Configure on-demand capacity mode for the table.`, ko:`테이블 앞에 DynamoDB Accelerator(DAX)를 구성합니다. 테이블에 온디맨드 용량 모드를 구성합니다.` },
    ],
    answer: ['A'],
    vote: '76% A',
    explain: `<p><span class="mark-ok">✅ A — Auto Scaling + Reserved Capacity (평균 부하 기준)</span></p>
<p>평균 부하에 맞게 Reserved RCU/WCU를 구매하면 기본 용량에 대한 비용을 절감할 수 있습니다(온디맨드 대비 최대 77% 절감). 피크 기간(주 1회 4시간)에는 Application Auto Scaling이 자동으로 용량을 두 배로 확장합니다. 쓰기가 읽기보다 훨씬 많으므로 WCU 최적화가 특히 비용 절감에 효과적입니다. 피크 이후 Auto Scaling이 다시 평균 수준으로 축소하여 유휴 용량 비용이 최소화됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 온디맨드 모드는 예측 불가능한 트래픽에 유연하지만, 피크가 규칙적(주 1회 4시간)이고 예측 가능한 경우 프로비저닝 모드 + Reserved Capacity가 온디맨드보다 비용이 낮습니다. 온디맨드는 프로비저닝 모드 대비 단위 요청 비용이 높습니다.</p>
<p><span class="mark-no">❌ C</span> — DAX는 읽기 캐시이므로 쓰기가 많은 테이블에는 효과가 제한됩니다. 또한 DAX 클러스터 자체 비용이 추가됩니다.</p>
<p><span class="mark-no">❌ D</span> — DAX + 온디맨드 조합은 DAX 클러스터 비용과 높은 온디맨드 요금이 모두 발생하여 비용이 가장 높습니다. 쓰기가 많은 패턴에서 DAX의 이점도 제한됩니다.</p>`,
    disc: [{ ans:'A', txt:'Reserved RCU/WCU at average load provides the lowest steady-state cost. Auto Scaling handles the predictable weekly peak (4-hr, 2x average) dynamically. Write-heavy patterns make DAX less effective, ruling out C and D.' }]
  },
  {
    n: 42,
    en: `A solutions architect needs to advise a company on how to migrate its on-premises data processing application to the AWS Cloud. Currently, users upload input files through a web portal. The web server then stores the uploaded files on NAS and messages the processing server over a message queue. Each media file can take up to 1 hour to process. The company has determined that the number of media files awaiting processing is significantly higher during business hours, with the number of files rapidly declining after business hours. What is the MOST cost-effective migration recommendation?`,
    ko: `솔루션 설계자는 온프레미스 데이터 처리 애플리케이션을 AWS 클라우드로 마이그레이션하는 방법에 대해 회사에 조언해야 합니다. 현재 사용자는 웹 포털을 통해 입력 파일을 업로드합니다. 웹 서버는 업로드된 파일을 NAS에 저장하고 메시지 큐를 통해 처리 서버에 메시지를 보냅니다. 각 미디어 파일을 처리하는 데 최대 1시간이 걸릴 수 있습니다. 회사는 업무 시간 동안 처리를 기다리는 미디어 파일 수가 훨씬 많으며, 업무 시간 이후에는 파일 수가 빠르게 감소한다는 것을 확인했습니다. 가장 비용 효율적인 마이그레이션 권고 사항은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in an Amazon S3 bucket.`, ko:`Amazon SQS를 사용하여 큐를 생성합니다. 새 큐에 게시하도록 기존 웹 서버를 구성합니다. 큐에 메시지가 있을 때 AWS Lambda 함수를 호출하여 큐에서 요청을 가져와 파일을 처리합니다. 처리된 파일을 Amazon S3 버킷에 저장합니다.` },
      { k:'B', en:`Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, create a new Amazon EC2 instance to pull requests from the queue and process the files. Store the processed files in Amazon EFS. Shut down the EC2 instance after the task is complete.`, ko:`Amazon MQ를 사용하여 큐를 생성합니다. 새 큐에 게시하도록 기존 웹 서버를 구성합니다. 큐에 메시지가 있을 때 새 Amazon EC2 인스턴스를 만들어 큐에서 요청을 가져와 파일을 처리합니다. 처리된 파일을 Amazon EFS에 저장합니다. 작업이 완료되면 EC2 인스턴스를 종료합니다.` },
      { k:'C', en:`Create a queue using Amazon MQ. Configure the existing web server to publish to the new queue. When there are messages in the queue, invoke an AWS Lambda function to pull requests from the queue and process the files. Store the processed files in Amazon EFS.`, ko:`Amazon MQ를 사용하여 큐를 생성합니다. 새 큐에 게시하도록 기존 웹 서버를 구성합니다. 큐에 메시지가 있을 때 AWS Lambda 함수를 호출하여 큐에서 요청을 가져와 파일을 처리합니다. 처리된 파일을 Amazon EFS에 저장합니다.` },
      { k:'D', en:`Create a queue using Amazon SQS. Configure the existing web server to publish to the new queue. Use Amazon EC2 instances in an EC2 Auto Scaling group to pull requests from the queue and process the files. Scale the EC2 instances based on the SQS queue length. Store the processed files in an Amazon S3 bucket.`, ko:`Amazon SQS를 사용하여 큐를 생성합니다. 새 큐에 게시하도록 기존 웹 서버를 구성합니다. EC2 Auto Scaling 그룹의 Amazon EC2 인스턴스를 사용하여 큐에서 요청을 가져와 파일을 처리합니다. SQS 큐 길이에 따라 EC2 인스턴스를 확장합니다. 처리된 파일을 Amazon S3 버킷에 저장합니다.` },
    ],
    answer: ['D'],
    vote: '84% D',
    explain: `<p><span class="mark-ok">✅ D — SQS + EC2 Auto Scaling (큐 길이 기반) + S3</span></p>
<p>Lambda의 최대 실행 시간은 15분이므로 최대 1시간이 걸리는 파일 처리에는 사용할 수 없습니다. EC2 Auto Scaling 그룹을 SQS 큐 길이(ApproximateNumberOfMessagesVisible)에 따라 확장하면 업무 시간의 높은 부하에는 인스턴스를 늘리고, 업무 시간 이후 큐가 비워지면 인스턴스를 줄여 비용을 절감합니다. S3는 처리된 파일 저장에 가장 비용 효율적인 옵션입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda는 최대 15분 실행 제한이 있어 최대 1시간이 걸리는 미디어 파일 처리에 사용할 수 없습니다. 처리 중에 타임아웃이 발생합니다.</p>
<p><span class="mark-no">❌ B</span> — Amazon MQ는 온프레미스 메시지 브로커(ActiveMQ, RabbitMQ) 마이그레이션을 위한 서비스로, 새로 설계할 때는 SQS가 더 간단하고 비용 효율적입니다. EC2 인스턴스를 메시지마다 생성하고 종료하는 방식은 인스턴스 시작 지연이 크고 비효율적입니다. EFS도 S3보다 비용이 높습니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon MQ + Lambda 조합은 Lambda 15분 시간 제한 문제가 있습니다. 또한 MQ는 SQS 대비 관리 복잡성이 높습니다.</p>`,
    disc: [{ ans:'D', txt:'Lambda 15-min limit rules out A and C for up-to-1-hour processing jobs. SQS+EC2 ASG scaled by queue depth is the classic pattern for variable-load, long-running batch processing. Scale out during business hours, scale in overnight — cost follows demand.' }]
  },
  {
    n: 43,
    en: `A company is using Amazon OpenSearch Service to analyze data. The company loads data into an OpenSearch Service cluster with 10 data nodes from an Amazon S3 bucket that uses S3 Standard storage. The data resides in the cluster for 1 month for read-only analysis. After 1 month, the company deletes the index that contains the data from the cluster. For compliance purposes, the company must retain a copy of all input data. The company is concerned about ongoing costs and asks a solutions architect to recommend a new solution. Which solution will meet these requirements MOST cost-effectively?`,
    ko: `한 회사가 데이터 분석을 위해 Amazon OpenSearch Service를 사용하고 있습니다. 회사는 S3 Standard 스토리지를 사용하는 Amazon S3 버킷에서 10개의 데이터 노드가 있는 OpenSearch Service 클러스터로 데이터를 로드합니다. 데이터는 읽기 전용 분석을 위해 1개월 동안 클러스터에 있습니다. 1개월 후 회사는 클러스터에서 데이터가 포함된 인덱스를 삭제합니다. 컴플라이언스 목적으로 회사는 모든 입력 데이터의 사본을 보관해야 합니다. 회사는 지속적인 비용에 대해 우려하며 솔루션 설계자에게 새로운 솔루션을 권고하도록 요청합니다. 이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Replace all the data nodes with UltraWarm nodes to handle the expected capacity. Transition the input data from S3 Standard to S3 Glacier Deep Archive when the company loads the data into the cluster.`, ko:`예상 용량을 처리하기 위해 모든 데이터 노드를 UltraWarm 노드로 교체합니다. 회사가 데이터를 클러스터에 로드할 때 입력 데이터를 S3 Standard에서 S3 Glacier Deep Archive로 전환합니다.` },
      { k:'B', en:`Reduce the number of data nodes in the cluster to 2. Add UltraWarm nodes to handle the expected capacity. Configure the indexes to transition to UltraWarm when OpenSearch Service ingests the data. Transition the input data to S3 Glacier Deep Archive after 1 month by using an S3 Lifecycle policy.`, ko:`클러스터의 데이터 노드 수를 2개로 줄입니다. 예상 용량을 처리하기 위해 UltraWarm 노드를 추가합니다. OpenSearch Service가 데이터를 수집할 때 인덱스를 UltraWarm으로 전환하도록 구성합니다. S3 수명 주기 정책을 사용하여 1개월 후 입력 데이터를 S3 Glacier Deep Archive로 전환합니다.` },
      { k:'C', en:`Reduce the number of data nodes in the cluster to 2. Add UltraWarm nodes to handle the expected capacity. Configure the indexes to transition to UltraWarm when OpenSearch Service ingests the data. Add cold storage nodes to the cluster. Transition the indexes from UltraWarm to cold storage. Delete the input data from the S3 bucket after 1 month by using an S3 Lifecycle policy.`, ko:`클러스터의 데이터 노드 수를 2개로 줄입니다. 예상 용량을 처리하기 위해 UltraWarm 노드를 추가합니다. OpenSearch Service가 데이터를 수집할 때 인덱스를 UltraWarm으로 전환하도록 구성합니다. 클러스터에 콜드 스토리지 노드를 추가합니다. UltraWarm에서 콜드 스토리지로 인덱스를 전환합니다. S3 수명 주기 정책을 사용하여 1개월 후 S3 버킷에서 입력 데이터를 삭제합니다.` },
      { k:'D', en:`Reduce the number of data nodes in the cluster to 2. Add instance-backed data nodes to handle the expected capacity. Transition the input data from S3 Standard to S3 Glacier Deep Archive when the company loads the data into the cluster.`, ko:`클러스터의 데이터 노드 수를 2개로 줄입니다. 예상 용량을 처리하기 위해 인스턴스 지원 데이터 노드를 추가합니다. 회사가 데이터를 클러스터에 로드할 때 입력 데이터를 S3 Standard에서 S3 Glacier Deep Archive로 전환합니다.` },
    ],
    answer: ['B'],
    vote: '79% B',
    explain: `<p><span class="mark-ok">✅ B — 데이터 노드 2개 + UltraWarm + S3 Glacier Deep Archive (1개월 후)</span></p>
<p>데이터 노드를 2개(최소 HA 구성)로 줄이고 UltraWarm 노드를 사용하면 데이터 노드 비용을 크게 절감할 수 있습니다(UltraWarm은 데이터 노드 대비 90% 저렴). 인덱스를 즉시 UltraWarm으로 전환하면 1개월 읽기 전용 분석 기간 동안 저비용으로 쿼리를 지원합니다. S3 Lifecycle 정책으로 1개월 후 S3 Standard 데이터를 Glacier Deep Archive로 자동 전환하면 컴플라이언스 보관 요건을 충족하면서 스토리지 비용을 최소화합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 데이터 로드 시점에 바로 S3 Glacier Deep Archive로 전환하면 OpenSearch가 S3에서 데이터를 다시 로드해야 할 때 Glacier 복원에 12-48시간이 걸립니다. 분석 완료 후 1개월 후에 전환해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — 콜드 스토리지로 전환 후 입력 데이터를 S3에서 삭제하면 컴플라이언스 데이터 보관 요건을 위반합니다. 컴플라이언스를 위해 원본 S3 데이터를 보관해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — 인스턴스 기반 데이터 노드 추가는 UltraWarm 대비 비용이 높습니다. UltraWarm은 S3를 백엔드로 사용하는 저비용 쿼리 계층입니다.</p>`,
    disc: [{ ans:'B', txt:'UltraWarm is ~90% cheaper than hot data nodes for read-only analytics. Minimum 2 data nodes maintains HA. S3 Lifecycle to Glacier Deep Archive after 1 month satisfies compliance retention at minimal cost. C fails compliance by deleting the S3 source data.' }]
  },
  {
    n: 44,
    en: `A company has 10 accounts that are part of an organization in AWS Organizations. AWS Config is configured in each account. All accounts belong to either the Prod OU or the NonProd OU. The company has set up an Amazon EventBridge rule in each AWS account to notify an Amazon Simple Notification Service (Amazon SNS) topic when an Amazon EC2 security group inbound rule is created with 0.0.0.0/0 as the source. The company's security team is subscribed to the SNS topic. For all accounts in the NonProd OU, the security team needs to remove the ability to create a security group inbound rule that includes 0.0.0.0/0 as the source. Which solution will meet this requirement with the LEAST operational overhead?`,
    ko: `한 회사는 AWS Organizations의 조직에 속한 10개의 계정을 보유하고 있습니다. AWS Config는 각 계정에 구성되어 있습니다. 모든 계정은 Prod OU 또는 NonProd OU에 속합니다. 회사는 소스로 0.0.0.0/0을 사용하여 Amazon EC2 보안 그룹 인바운드 규칙이 생성될 때 Amazon SNS 토픽에 알리도록 각 AWS 계정에 Amazon EventBridge 규칙을 설정했습니다. 회사의 보안 팀은 SNS 토픽을 구독하고 있습니다. NonProd OU의 모든 계정에 대해 보안 팀은 0.0.0.0/0을 소스로 포함하는 보안 그룹 인바운드 규칙을 생성하는 기능을 제거해야 합니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Modify the EventBridge rule to invoke an AWS Lambda function to remove the security group inbound rule and to publish to the SNS topic. Deploy the updated rule to the NonProd OU.`, ko:`EventBridge 규칙을 수정하여 AWS Lambda 함수를 호출하여 보안 그룹 인바운드 규칙을 제거하고 SNS 토픽에 게시합니다. 업데이트된 규칙을 NonProd OU에 배포합니다.` },
      { k:'B', en:`Add the vpc-sg-open-only-to-authorized-ports AWS Config managed rule to the NonProd OU.`, ko:`NonProd OU에 vpc-sg-open-only-to-authorized-ports AWS Config 관리형 규칙을 추가합니다.` },
      { k:'C', en:`Configure an SCP to allow the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is not 0.0.0.0/0. Apply the SCP to the NonProd OU.`, ko:`aws:SourceIp 조건 키의 값이 0.0.0.0/0이 아닐 때 ec2:AuthorizeSecurityGroupIngress 작업을 허용하는 SCP를 구성합니다. SCP를 NonProd OU에 적용합니다.` },
      { k:'D', en:`Configure an SCP to deny the ec2:AuthorizeSecurityGroupIngress action when the value of the aws:SourceIp condition key is 0.0.0.0/0. Apply the SCP to the NonProd OU.`, ko:`aws:SourceIp 조건 키의 값이 0.0.0.0/0일 때 ec2:AuthorizeSecurityGroupIngress 작업을 거부하는 SCP를 구성합니다. SCP를 NonProd OU에 적용합니다.` },
    ],
    answer: ['D'],
    vote: '83% D',
    explain: `<p><span class="mark-ok">✅ D — SCP deny ec2:AuthorizeSecurityGroupIngress when aws:SourceIp = 0.0.0.0/0</span></p>
<p>SCP(서비스 제어 정책)는 Organizations 수준에서 작동하며, NonProd OU에 적용하면 해당 OU의 모든 계정에서 0.0.0.0/0을 소스로 하는 보안 그룹 인바운드 규칙 생성을 예방적으로 차단합니다. 단일 SCP로 10개 계정 모두에 적용되며, 새 계정이 NonProd OU에 추가되면 자동으로 적용됩니다. 감지 후 수정(A)이 아닌 예방적 접근 방식으로 운영 오버헤드가 최소화됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EventBridge + Lambda로 규칙을 사후 수정하는 방식은 규칙이 일시적으로 생성된 후 제거되므로 완전한 예방이 아닙니다. 또한 Lambda 함수 관리 및 오류 처리가 필요하여 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ B</span> — Config 관리형 규칙 vpc-sg-open-only-to-authorized-ports는 보안 그룹이 승인된 포트에만 열려 있는지 확인하는 규칙으로, 0.0.0.0/0 인바운드 규칙 생성을 막지는 않습니다. 또한 자동 수정을 활성화하지 않으면 탐지만 합니다.</p>
<p><span class="mark-no">❌ C</span> — SCP에서 Allow는 올바른 방식이 아닙니다. SCP는 기본적으로 Allow All(FullAWSAccess)이 상위에서 적용되므로, 조건부 Allow SCP를 추가해도 FullAWSAccess SCP의 허용이 여전히 작동합니다. Deny만이 SCP에서 효과적으로 작동합니다.</p>`,
    disc: [{ ans:'D', txt:'SCP with Deny + aws:SourceIp condition is the preventive control: it stops the action before it occurs across all NonProd accounts with a single policy. Reactive Lambda remediation (A) allows brief rule creation window and has higher ops overhead.' }]
  },
  {
    n: 45,
    en: `A company hosts a Git repository in an on-premises data center. The company uses webhooks to invoke functionality that runs in the AWS Cloud. The company hosts the webhook logic on a set of Amazon EC2 instances in an Auto Scaling group that the company set as a target for an Application Load Balancer (ALB). The Git server calls the ALB for the configured webhooks. The company wants to move the solution to a serverless architecture. Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사가 온프레미스 데이터 센터에서 Git 저장소를 호스팅합니다. 회사는 웹훅을 사용하여 AWS 클라우드에서 실행되는 기능을 호출합니다. 회사는 회사가 ALB(Application Load Balancer)의 대상으로 설정한 Auto Scaling 그룹의 Amazon EC2 인스턴스 세트에서 웹훅 로직을 호스팅합니다. Git 서버는 구성된 웹훅에 대해 ALB를 호출합니다. 회사는 솔루션을 서버리스 아키텍처로 이전하려고 합니다. 최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`For each webhook, create and configure an AWS Lambda function URL. Update the Git servers to call the individual Lambda function URLs.`, ko:`각 웹훅에 대해 AWS Lambda 함수 URL을 생성하고 구성합니다. Git 서버가 개별 Lambda 함수 URL을 호출하도록 업데이트합니다.` },
      { k:'B', en:`Create an Amazon API Gateway HTTP API. Implement each webhook logic in a separate AWS Lambda function. Update the Git servers to call the API Gateway endpoint.`, ko:`Amazon API Gateway HTTP API를 생성합니다. 각 웹훅 로직을 별도의 AWS Lambda 함수로 구현합니다. Git 서버가 API Gateway 엔드포인트를 호출하도록 업데이트합니다.` },
      { k:'C', en:`Deploy the webhook logic to AWS App Runner. Create an ALB, and set App Runner as the target. Update the Git servers to call the ALB endpoint.`, ko:`웹훅 로직을 AWS App Runner에 배포합니다. ALB를 생성하고 App Runner를 대상으로 설정합니다. Git 서버가 ALB 엔드포인트를 호출하도록 업데이트합니다.` },
      { k:'D', en:`Containerize the webhook logic. Create an Amazon Elastic Container Service (Amazon ECS) cluster, and run the webhook logic in AWS Fargate. Create an Amazon API Gateway REST API, and set Fargate as the target. Update the Git servers to call the API Gateway endpoint.`, ko:`웹훅 로직을 컨테이너화합니다. Amazon ECS 클러스터를 생성하고 AWS Fargate에서 웹훅 로직을 실행합니다. Amazon API Gateway REST API를 생성하고 Fargate를 대상으로 설정합니다. Git 서버가 API Gateway 엔드포인트를 호출하도록 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '81% B',
    explain: `<p><span class="mark-ok">✅ B — API Gateway HTTP API + Lambda 함수</span></p>
<p>API Gateway HTTP API는 단일 엔드포인트를 제공하며, 경로별 라우팅으로 여러 웹훅을 하나의 API 엔드포인트로 처리할 수 있습니다. 각 웹훅 로직을 별도의 Lambda 함수로 구현하면 서버리스 아키텍처가 완성됩니다. Git 서버는 단일 엔드포인트만 업데이트하면 되며, Lambda는 EC2 Auto Scaling 그룹 대비 서버 관리가 전혀 필요 없습니다. HTTP API는 REST API보다 저렴하고 낮은 지연 시간을 제공합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 각 웹훅마다 별도의 Lambda 함수 URL을 생성하면 Git 서버에서 웹훅별로 다른 URL을 관리해야 합니다. 단일 API Gateway 엔드포인트 대비 관리가 복잡하며, 인증·모니터링 등 공통 기능을 각 함수 URL에 개별적으로 설정해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — App Runner는 컨테이너 기반 서비스로 서버리스이지만 EC2 Auto Scaling 그룹과 유사하게 컨테이너를 관리합니다. Lambda + API Gateway보다 운영 오버헤드가 높고, ALB를 추가로 사용하는 것도 불필요합니다.</p>
<p><span class="mark-no">❌ D</span> — ECS + Fargate는 컨테이너 오케스트레이션이 필요하며, API Gateway REST API를 Fargate 직접 타겟으로 설정하는 구성이 복잡합니다. Lambda 기반 솔루션 대비 운영 오버헤드가 높습니다.</p>`,
    disc: [{ ans:'B', txt:'API Gateway HTTP API + Lambda is the standard serverless webhook pattern: single endpoint for Git servers to call, path-based routing to individual Lambda functions per webhook, no server management, and auto-scaling built in.' }]
  },
  {
    n: 46,
    en: `A company is planning to migrate 1,000 on-premises servers to AWS. The servers run on several VMware clusters in the company's data center. As part of the migration plan, the company wants to gather server metrics such as CPU details, RAM usage, operating system information, and running processes. The company then wants to query and analyze the data. Which solution will meet these requirements?`,
    ko: `한 회사가 1,000개의 온프레미스 서버를 AWS로 마이그레이션할 계획입니다. 서버는 회사의 데이터 센터에 있는 여러 VMware 클러스터에서 실행됩니다. 마이그레이션 계획의 일환으로 회사는 CPU 세부 정보, RAM 사용량, 운영 체제 정보, 실행 중인 프로세스와 같은 서버 메트릭을 수집하려고 합니다. 그런 다음 회사는 데이터를 쿼리하고 분석하려고 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Deploy and configure the AWS Agentless Discovery Connector virtual appliance on the on-premises hosts. Configure Data Exploration in AWS Migration Hub. Use AWS Glue to perform an ETL job against the data. Query the data by using Amazon S3 Select.`, ko:`온프레미스 호스트에 AWS Agentless Discovery Connector 가상 어플라이언스를 배포하고 구성합니다. AWS Migration Hub에서 데이터 탐색을 구성합니다. AWS Glue를 사용하여 데이터에 대한 ETL 작업을 수행합니다. Amazon S3 Select를 사용하여 데이터를 쿼리합니다.` },
      { k:'B', en:`Export only the VM performance information from the on-premises hosts. Directly import the required data into AWS Migration Hub. Update any missing information in Migration Hub. Query the data by using Amazon QuickSight.`, ko:`온프레미스 호스트에서 VM 성능 정보만 내보냅니다. 필요한 데이터를 직접 AWS Migration Hub로 가져옵니다. Migration Hub에서 누락된 정보를 업데이트합니다. Amazon QuickSight를 사용하여 데이터를 쿼리합니다.` },
      { k:'C', en:`Create a script to automatically gather the server information from the on-premises hosts. Use the AWS CLI to run the put-resource-attributes command to store the detailed server data in AWS Migration Hub. Query the data directly in the Migration Hub console.`, ko:`온프레미스 호스트에서 서버 정보를 자동으로 수집하는 스크립트를 생성합니다. AWS CLI를 사용하여 put-resource-attributes 명령을 실행하여 자세한 서버 데이터를 AWS Migration Hub에 저장합니다. Migration Hub 콘솔에서 직접 데이터를 쿼리합니다.` },
      { k:'D', en:`Deploy the AWS Application Discovery Agent to each on-premises server. Configure Data Exploration in AWS Migration Hub. Use Amazon Athena to run predefined queries against the data in Amazon S3.`, ko:`각 온프레미스 서버에 AWS Application Discovery Agent를 배포합니다. AWS Migration Hub에서 데이터 탐색을 구성합니다. Amazon Athena를 사용하여 Amazon S3의 데이터에 대해 사전 정의된 쿼리를 실행합니다.` },
    ],
    answer: ['D'],
    vote: '85% D',
    explain: `<p><span class="mark-ok">✅ D — Application Discovery Agent + Migration Hub Data Exploration + Athena</span></p>
<p>AWS Application Discovery Agent는 각 서버에 설치되어 CPU, RAM, OS 정보, 실행 중인 프로세스, 네트워크 연결 등 상세한 서버 메트릭을 수집합니다. Migration Hub의 Data Exploration 기능은 수집된 데이터를 Amazon S3에 저장하고 Amazon Athena 쿼리를 통해 분석할 수 있도록 합니다. Athena는 서버리스 SQL 쿼리를 지원하여 1,000개 서버 데이터를 유연하게 분석할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Agentless Discovery Connector는 VMware vCenter를 통해 기본 메트릭만 수집하며, 실행 중인 프로세스 상세 정보는 수집할 수 없습니다. S3 Select는 단일 파일 내 데이터 필터링 도구로 복잡한 분석 쿼리에는 Athena가 더 적합합니다.</p>
<p><span class="mark-no">❌ B</span> — VM 성능 정보만 수동으로 내보내고 Migration Hub에 직접 가져오는 방식은 1,000개 서버에 대해 수동 작업이 방대합니다. QuickSight는 시각화 도구이며 직접 쿼리에는 부적합합니다.</p>
<p><span class="mark-no">❌ C</span> — 사용자 정의 스크립트 + AWS CLI put-resource-attributes 방식은 개발 및 유지 관리 오버헤드가 높습니다. Migration Hub 콘솔은 임시 쿼리(ad-hoc query)를 위한 도구가 아닙니다.</p>`,
    disc: [{ ans:'D', txt:'Application Discovery Agent collects detailed per-server metrics (CPU, RAM, OS, processes, network). Migration Hub Data Exploration routes data to S3, and Athena provides SQL querying against the collected data for analysis — the recommended AWS migration assessment pattern.' }]
  },
  {
    n: 47,
    en: `A company is building a serverless application that runs on an AWS Lambda function that is attached to a VPC. The company needs to integrate the application with a new service from an external provider. The external provider supports only requests that come from public IPv4 addresses that are in an allow list. The company must provide a single public IP address to the external provider before the application can start using the new service. Which solution will give the application the ability to access the new service?`,
    ko: `한 회사가 VPC에 연결된 AWS Lambda 함수에서 실행되는 서버리스 애플리케이션을 구축하고 있습니다. 회사는 외부 공급자의 새 서비스와 애플리케이션을 통합해야 합니다. 외부 공급자는 허용 목록에 있는 공개 IPv4 주소에서 오는 요청만 지원합니다. 회사는 애플리케이션이 새 서비스 사용을 시작하기 전에 외부 공급자에게 단일 공개 IP 주소를 제공해야 합니다. 애플리케이션에 새 서비스에 액세스하는 기능을 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Deploy a NAT gateway. Associate an Elastic IP address with the NAT gateway. Configure the VPC to use the NAT gateway.`, ko:`NAT 게이트웨이를 배포합니다. NAT 게이트웨이에 탄력적 IP 주소를 연결합니다. NAT 게이트웨이를 사용하도록 VPC를 구성합니다.` },
      { k:'B', en:`Deploy an egress-only internet gateway. Associate an Elastic IP address with the egress-only internet gateway. Configure the elastic network interface on the Lambda function to use the egress-only internet gateway.`, ko:`이그레스 전용 인터넷 게이트웨이를 배포합니다. 이그레스 전용 인터넷 게이트웨이에 탄력적 IP 주소를 연결합니다. Lambda 함수의 탄력적 네트워크 인터페이스가 이그레스 전용 인터넷 게이트웨이를 사용하도록 구성합니다.` },
      { k:'C', en:`Deploy an internet gateway. Associate an Elastic IP address with the internet gateway. Configure the Lambda function to use the internet gateway.`, ko:`인터넷 게이트웨이를 배포합니다. 인터넷 게이트웨이에 탄력적 IP 주소를 연결합니다. 인터넷 게이트웨이를 사용하도록 Lambda 함수를 구성합니다.` },
      { k:'D', en:`Deploy an internet gateway. Associate an Elastic IP address with the internet gateway. Configure the default route in the public VPC route table to use the internet gateway.`, ko:`인터넷 게이트웨이를 배포합니다. 인터넷 게이트웨이에 탄력적 IP 주소를 연결합니다. 퍼블릭 VPC 라우트 테이블의 기본 라우트가 인터넷 게이트웨이를 사용하도록 구성합니다.` },
    ],
    answer: ['A'],
    vote: '89% A',
    explain: `<p><span class="mark-ok">✅ A — NAT 게이트웨이 + Elastic IP</span></p>
<p>VPC에 연결된 Lambda 함수는 프라이빗 서브넷에서 실행됩니다. NAT 게이트웨이에 Elastic IP를 연결하면 Lambda 함수의 아웃바운드 인터넷 트래픽이 NAT 게이트웨이를 통해 나가며, 외부에는 NAT 게이트웨이의 고정 Elastic IP가 소스 IP로 표시됩니다. 단일 공개 IPv4 주소(Elastic IP)를 외부 공급자의 허용 목록에 추가하면 Lambda 함수가 새 서비스에 액세스할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 이그레스 전용 인터넷 게이트웨이(Egress-only Internet Gateway)는 IPv6 트래픽 전용입니다. 외부 공급자가 공개 IPv4 주소만 지원하므로 이 솔루션은 요구 사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — 인터넷 게이트웨이에는 Elastic IP를 직접 연결할 수 없습니다. Elastic IP는 EC2 인스턴스, NAT 게이트웨이, 또는 NLB에 연결됩니다.</p>
<p><span class="mark-no">❌ D</span> — 인터넷 게이트웨이 자체에 Elastic IP를 연결하는 것은 불가능합니다. 또한 퍼블릭 서브넷의 라우트 테이블을 구성해도 VPC Lambda는 기본적으로 프라이빗 서브넷에서 실행되므로 고정 아웃바운드 IP를 보장하지 않습니다.</p>`,
    disc: [{ ans:'A', txt:'NAT gateway with Elastic IP provides a single static public IPv4 for all outbound traffic from VPC-attached Lambda. The Elastic IP is the fixed address given to the external provider allowlist. Egress-only IG is IPv6 only (eliminates B); internet GW cannot have EIP directly attached (eliminates C, D).' }]
  },
  {
    n: 48,
    en: `A solutions architect has developed a web application that uses an Amazon API Gateway Regional endpoint and an AWS Lambda function. The consumers of the web application are all close to the AWS Region where the application will be deployed. The Lambda function only queries an Amazon Aurora MySQL database. The solutions architect has configured the database to have three read replicas. During testing, the application does not meet performance requirements. Under high load, the application opens a large number of database connections. The solutions architect must improve the application's performance. Which actions should the solutions architect take to meet these requirements? (Choose two.)`,
    ko: `솔루션 설계자가 Amazon API Gateway 리전 엔드포인트와 AWS Lambda 함수를 사용하는 웹 애플리케이션을 개발했습니다. 웹 애플리케이션의 소비자는 모두 애플리케이션이 배포될 AWS 리전 근처에 있습니다. Lambda 함수는 Amazon Aurora MySQL 데이터베이스만 쿼리합니다. 솔루션 설계자는 세 개의 읽기 복제본을 갖도록 데이터베이스를 구성했습니다. 테스트 중에 애플리케이션이 성능 요구 사항을 충족하지 못합니다. 높은 부하에서 애플리케이션은 많은 수의 데이터베이스 연결을 엽니다. 솔루션 설계자는 애플리케이션의 성능을 개선해야 합니다. 솔루션 설계자가 이 요구 사항을 충족하기 위해 취해야 할 조치는 무엇입니까? (두 가지를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Use the cluster endpoint of the Aurora database.`, ko:`Aurora 데이터베이스의 클러스터 엔드포인트를 사용합니다.` },
      { k:'B', en:`Use RDS Proxy to set up a connection pool to the reader endpoint of the Aurora database.`, ko:`RDS Proxy를 사용하여 Aurora 데이터베이스의 리더 엔드포인트에 대한 연결 풀을 설정합니다.` },
      { k:'C', en:`Use the Lambda Provisioned Concurrency feature.`, ko:`Lambda 프로비저닝된 동시성 기능을 사용합니다.` },
      { k:'D', en:`Move the code for opening the database connection in the Lambda function outside of the event handler.`, ko:`Lambda 함수에서 데이터베이스 연결을 여는 코드를 이벤트 핸들러 외부로 이동합니다.` },
      { k:'E', en:`Change the API Gateway endpoint to an edge-optimized endpoint.`, ko:`API Gateway 엔드포인트를 엣지 최적화 엔드포인트로 변경합니다.` },
    ],
    answer: ['B','D'],
    vote: '85% BD',
    explain: `<p><span class="mark-ok">✅ B — RDS Proxy를 통한 연결 풀링</span></p>
<p>RDS Proxy는 Lambda 함수와 Aurora 데이터베이스 사이에서 데이터베이스 연결을 풀링하고 공유합니다. Lambda는 새 호출마다 새로운 DB 연결을 열 수 있는데, 고부하 시 수천 개의 동시 연결이 Aurora를 압도할 수 있습니다. RDS Proxy는 이런 연결을 재사용하여 Aurora에 대한 실제 연결 수를 대폭 줄입니다. 리더 엔드포인트를 사용하면 읽기 복제본으로 쿼리를 분산시킵니다.</p>
<p><span class="mark-ok">✅ D — DB 연결 코드를 이벤트 핸들러 외부로 이동</span></p>
<p>Lambda 실행 환경은 재사용됩니다. 데이터베이스 연결 코드를 이벤트 핸들러 외부(모듈 수준)에 배치하면 동일한 실행 환경이 재사용될 때 기존 연결을 재사용할 수 있습니다. 이를 통해 연결 생성 오버헤드와 DB 연결 수를 줄일 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 클러스터 엔드포인트는 기본 쓰기 인스턴스를 가리킵니다. 읽기 전용 워크로드를 클러스터 엔드포인트로 보내면 읽기 복제본을 활용하지 못합니다. 읽기 부하 분산을 위해서는 리더 엔드포인트를 사용해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — Lambda 프로비저닝된 동시성(Provisioned Concurrency)은 콜드 스타트를 줄이지만, DB 연결 수 문제를 해결하지 않습니다. 오히려 항상 실행 준비 상태인 Lambda 인스턴스가 증가하면 DB 연결 수가 더 증가할 수 있습니다.</p>
<p><span class="mark-no">❌ E</span> — 엣지 최적화 엔드포인트는 지리적으로 분산된 사용자에게 유리하지만, 문제에서 모든 소비자가 리전 근처에 있다고 명시되어 있습니다. DB 연결 수 문제를 해결하지도 않습니다.</p>`,
    disc: [
      { ans:'B', txt:'RDS Proxy pools and multiplexes Lambda DB connections, preventing connection exhaustion under high concurrency. Routes to reader endpoint to utilize read replicas.' },
      { ans:'D', txt:'Lambda execution contexts are reused: initializing the DB connection outside the handler means warm invocations reuse the existing connection instead of opening a new one each time.' }
    ]
  },
  {
    n: 49,
    en: `A company is planning to host a web application on AWS and wants to load balance the traffic across a group of Amazon EC2 instances. One of the security requirements is to enable end-to-end encryption in transit between the client and the web server. Which solution will meet this requirement?`,
    ko: `한 회사가 AWS에서 웹 애플리케이션을 호스팅할 계획이며 Amazon EC2 인스턴스 그룹 전반에 걸쳐 트래픽을 로드 밸런싱하려고 합니다. 보안 요구 사항 중 하나는 클라이언트와 웹 서버 간에 전송 중 종단간 암호화를 활성화하는 것입니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Place the EC2 instances behind an Application Load Balancer (ALB). Provision an SSL certificate using AWS Certificate Manager (ACM), and associate the SSL certificate with the ALB. Export the SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.`, ko:`Application Load Balancer(ALB) 뒤에 EC2 인스턴스를 배치합니다. AWS Certificate Manager(ACM)를 사용하여 SSL 인증서를 프로비저닝하고 SSL 인증서를 ALB와 연결합니다. SSL 인증서를 내보내고 각 EC2 인스턴스에 설치합니다. 포트 443에서 수신하고 인스턴스의 포트 443으로 트래픽을 전달하도록 ALB를 구성합니다.` },
      { k:'B', en:`Associate the EC2 instances with a target group. Provision an SSL certificate using AWS Certificate Manager (ACM). Create an Amazon CloudFront distribution and configure it to use the SSL certificate. Set CloudFront to use the target group as the origin server.`, ko:`대상 그룹과 EC2 인스턴스를 연결합니다. AWS Certificate Manager(ACM)를 사용하여 SSL 인증서를 프로비저닝합니다. Amazon CloudFront 배포를 생성하고 SSL 인증서를 사용하도록 구성합니다. CloudFront가 대상 그룹을 오리진 서버로 사용하도록 설정합니다.` },
      { k:'C', en:`Place the EC2 instances behind an Application Load Balancer (ALB). Provision an SSL certificate using AWS Certificate Manager (ACM), and associate the SSL certificate with the ALB. Provision a third-party SSL certificate and install it on each EC2 instance. Configure the ALB to listen on port 443 and to forward traffic to port 443 on the instances.`, ko:`Application Load Balancer(ALB) 뒤에 EC2 인스턴스를 배치합니다. AWS Certificate Manager(ACM)를 사용하여 SSL 인증서를 프로비저닝하고 SSL 인증서를 ALB와 연결합니다. 타사 SSL 인증서를 프로비저닝하고 각 EC2 인스턴스에 설치합니다. 포트 443에서 수신하고 인스턴스의 포트 443으로 트래픽을 전달하도록 ALB를 구성합니다.` },
      { k:'D', en:`Place the EC2 instances behind a Network Load Balancer (NLB). Provision a third-party SSL certificate and install it on the NLB and on each EC2 instance. Configure the NLB to listen on port 443 and to forward traffic to port 443 on the instances.`, ko:`Network Load Balancer(NLB) 뒤에 EC2 인스턴스를 배치합니다. 타사 SSL 인증서를 프로비저닝하고 NLB와 각 EC2 인스턴스에 설치합니다. 포트 443에서 수신하고 인스턴스의 포트 443으로 트래픽을 전달하도록 NLB를 구성합니다.` },
    ],
    answer: ['C'],
    vote: '72% C',
    explain: `<p><span class="mark-ok">✅ C — ALB + ACM 인증서 + EC2 서드파티 인증서 (종단간 암호화)</span></p>
<p>종단간(end-to-end) 암호화는 클라이언트 → ALB와 ALB → EC2 인스턴스 구간 모두 HTTPS로 암호화되어야 함을 의미합니다. ALB에 ACM 인증서를 연결하면 클라이언트와 ALB 사이의 HTTPS가 처리됩니다. EC2 인스턴스에 별도 인증서(ACM 인증서는 ALB에서만 사용 가능하므로 서드파티 인증서를 사용)를 설치하면 ALB와 EC2 인스턴스 사이도 HTTPS 443으로 암호화됩니다. 두 구간 모두 암호화되어 진정한 종단간 암호화가 완성됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ACM 인증서는 ALB, CloudFront 등 AWS 서비스에서만 사용 가능하며 EC2 인스턴스에 내보내거나 설치할 수 없습니다. ACM은 인증서 내보내기를 지원하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — CloudFront는 EC2 인스턴스를 직접 오리진으로 사용할 수 없습니다(ALB나 IP 주소를 통해 가능). 또한 CloudFront와 오리진 사이의 암호화가 보장되지 않아 종단간 암호화가 완성되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — NLB는 레이어 4 로드 밸런서로 TLS 패스스루(TLS passthrough)를 지원합니다. NLB에 TLS 터미네이션을 설정하고 EC2에도 인증서를 설치하는 방식은 기술적으로 가능하지만, 문제에서 NLB에 인증서를 직접 설치한다는 것은 NLB TLS 터미네이션을 의미합니다. 그러나 NLB는 ACM을 지원하므로 서드파티 인증서는 불필요합니다.</p>`,
    disc: [{ ans:'C', txt:'End-to-end encryption requires HTTPS on both legs: client→ALB (ACM cert on ALB) and ALB→EC2 (third-party cert on EC2, since ACM certs cannot be exported/installed on EC2). ALB forwards port 443 traffic to EC2 port 443 encrypted.' }]
  },
  {
    n: 50,
    en: `A company wants to migrate its data analytics environment from on premises to AWS. The environment consists of two simple Node.js applications. One of the applications collects sensor data and loads it into a MySQL database. The other application aggregates the data into reports. When the aggregation jobs run, some of the load jobs fail to run correctly. The company must resolve the data loading issue. The company also needs the migration to occur without interruptions or changes for the company's customers. What should a solutions architect do to meet these requirements?`,
    ko: `한 회사가 데이터 분석 환경을 온프레미스에서 AWS로 마이그레이션하려고 합니다. 환경은 두 개의 간단한 Node.js 애플리케이션으로 구성됩니다. 하나의 애플리케이션은 센서 데이터를 수집하고 MySQL 데이터베이스에 로드합니다. 다른 애플리케이션은 데이터를 보고서로 집계합니다. 집계 작업이 실행될 때 일부 로드 작업이 올바르게 실행되지 않습니다. 회사는 데이터 로드 문제를 해결해야 합니다. 또한 회사의 고객에게 중단이나 변경 없이 마이그레이션이 발생해야 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Set up an Amazon Aurora MySQL database as a replication target for the on-premises database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind a Network Load Balancer (NLB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the NLB.`, ko:`온프레미스 데이터베이스의 복제 대상으로 Amazon Aurora MySQL 데이터베이스를 설정합니다. Aurora MySQL 데이터베이스에 대한 Aurora 복제본을 생성하고 Aurora 복제본에 대해 집계 작업을 실행하도록 이동합니다. Network Load Balancer(NLB) 뒤에 있는 AWS Lambda 함수로 수집 엔드포인트를 설정하고 Amazon RDS Proxy를 사용하여 Aurora MySQL 데이터베이스에 씁니다. 데이터베이스가 동기화되면 복제 작업을 비활성화하고 Aurora 복제본을 기본 인스턴스로 다시 시작합니다. 수집기 DNS 레코드를 NLB로 지정합니다.` },
      { k:'B', en:`Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Move the aggregation jobs to run against the Aurora MySQL database. Set up collection endpoints behind an Application Load Balancer (ALB) as Amazon EC2 instances in an Auto Scaling group. When the databases are synced, point the collector DNS record to the ALB. Disable the AWS DMS sync task after the cutover from on premises to AWS.`, ko:`Amazon Aurora MySQL 데이터베이스를 설정합니다. AWS Database Migration Service(AWS DMS)를 사용하여 온프레미스 데이터베이스에서 Aurora로 지속적인 데이터 복제를 수행합니다. Aurora MySQL 데이터베이스에 대해 집계 작업을 실행하도록 이동합니다. Auto Scaling 그룹의 Amazon EC2 인스턴스로 Application Load Balancer(ALB) 뒤에 수집 엔드포인트를 설정합니다. 데이터베이스가 동기화되면 수집기 DNS 레코드를 ALB로 지정합니다. 온프레미스에서 AWS로 전환 후 AWS DMS 동기화 작업을 비활성화합니다.` },
      { k:'C', en:`Set up an Amazon Aurora MySQL database. Use AWS Database Migration Service (AWS DMS) to perform continuous data replication from the on-premises database to Aurora. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as AWS Lambda functions behind an Application Load Balancer (ALB), and use Amazon RDS Proxy to write to the Aurora MySQL database. When the databases are synced, point the collector DNS record to the ALB. Disable the AWS DMS sync task after the cutover from on premises to AWS.`, ko:`Amazon Aurora MySQL 데이터베이스를 설정합니다. AWS DMS를 사용하여 온프레미스 데이터베이스에서 Aurora로 지속적인 데이터 복제를 수행합니다. Aurora MySQL 데이터베이스에 대한 Aurora 복제본을 생성하고, 집계 작업이 Aurora 복제본에 대해 실행되도록 이동합니다. ALB 뒤에 AWS Lambda 함수로 수집 엔드포인트를 설정하고 Amazon RDS Proxy를 사용하여 Aurora MySQL 데이터베이스에 씁니다. 데이터베이스가 동기화되면 수집기 DNS 레코드를 ALB로 지정합니다. 온프레미스에서 AWS로 전환 후 AWS DMS 동기화 작업을 비활성화합니다.` },
      { k:'D', en:`Set up an Amazon Aurora MySQL database. Create an Aurora Replica for the Aurora MySQL database, and move the aggregation jobs to run against the Aurora Replica. Set up collection endpoints as an Amazon Kinesis data stream. Use Amazon Kinesis Data Firehose to replicate the data to the Aurora MySQL database. When the databases are synced, disable the replication job and restart the Aurora Replica as the primary instance. Point the collector DNS record to the Kinesis data stream.`, ko:`Amazon Aurora MySQL 데이터베이스를 설정합니다. Aurora MySQL 데이터베이스에 대한 Aurora 복제본을 생성하고 Aurora 복제본에 대해 집계 작업을 실행하도록 이동합니다. 수집 엔드포인트를 Amazon Kinesis 데이터 스트림으로 설정합니다. Amazon Kinesis Data Firehose를 사용하여 Aurora MySQL 데이터베이스로 데이터를 복제합니다. 데이터베이스가 동기화되면 복제 작업을 비활성화하고 Aurora 복제본을 기본 인스턴스로 다시 시작합니다. 수집기 DNS 레코드를 Kinesis 데이터 스트림으로 지정합니다.` },
    ],
    answer: ['C'],
    vote: '76% C',
    explain: `<p><span class="mark-ok">✅ C — Aurora MySQL + AWS DMS + Aurora Replica + Lambda + RDS Proxy + ALB</span></p>
<p>각 구성 요소가 특정 문제를 해결합니다: <strong>AWS DMS</strong>는 온프레미스 MySQL에서 Aurora로의 중단 없는 지속적 복제를 담당합니다. <strong>Aurora Replica</strong>는 집계 작업을 기본 인스턴스에서 분리하여 집계 쿼리가 수집 작업을 방해하지 않도록 합니다(데이터 로드 실패 문제 해결). <strong>RDS Proxy</strong>는 Lambda의 다수 동시 연결을 풀링하여 Aurora에 대한 연결 과부하를 방지합니다. <strong>ALB</strong>는 HTTP 기반 Lambda 수집 엔드포인트를 외부에 노출합니다. DNS 전환으로 고객에게 중단 없는 마이그레이션이 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — NLB는 HTTP 기반 Lambda 함수를 대상으로 설정하는 데 부적합합니다(ALB가 Lambda와 HTTP 통합에 적합). DMS 없이 온프레미스 복제를 설정하는 것도 복잡합니다.</p>
<p><span class="mark-no">❌ B</span> — EC2 인스턴스 기반 수집 엔드포인트는 서버리스 Lambda보다 관리 오버헤드가 높습니다. 또한 집계 작업을 기본 Aurora 인스턴스에서 실행하면 집계와 수집 간의 자원 경합이 계속 발생하여 데이터 로드 실패 문제가 해결되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Kinesis Data Firehose는 MySQL INSERT 형식의 트랜잭션 데이터를 Aurora에 직접 쓸 수 없습니다. Firehose는 주로 S3, Redshift, OpenSearch로 데이터를 전달합니다.</p>`,
    disc: [{ ans:'C', txt:'DMS continuous replication enables zero-downtime migration. Aurora Replica for aggregation jobs isolates aggregation load from collection writes (fixes load job failures). RDS Proxy handles Lambda connection pooling. DNS cutover to ALB is transparent to customers.' }]
  },
];
