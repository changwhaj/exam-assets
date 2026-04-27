window.QS_SET06 = [
  {
    n: 51,
    en: `A health insurance company stores personally identifiable information (PII) in an Amazon S3 bucket. The company uses server-side encryption with S3 managed encryption keys (SSE-S3) to encrypt the objects. According to a new requirement, all current and future objects in the S3 bucket must be encrypted by keys that the company's security team manages. The S3 bucket does not have versioning enabled.<br/><br/>Which solution will meet these requirements?`,
    ko: `건강 보험 회사가 PII(개인 식별 정보)를 Amazon S3 버킷에 저장합니다. 현재 S3 관리형 암호화 키(SSE-S3)로 객체를 암호화합니다. 새 요구 사항에 따라 버킷의 모든 현재·미래 객체는 회사 보안 팀이 관리하는 키로 암호화해야 합니다. S3 버킷에는 버전 관리가 활성화되어 있지 않습니다.<br/><br/>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`In the S3 bucket properties, change the default encryption to SSE-S3 with a customer managed key. Use the AWS CLI to re-upload all objects in the S3 bucket. Set an S3 bucket policy to deny unencrypted PutObject requests.`, ko:`S3 버킷 속성에서 기본 암호화를 고객 관리형 키를 사용하는 SSE-S3으로 변경합니다. AWS CLI를 사용하여 버킷의 모든 객체를 다시 업로드합니다. 암호화되지 않은 PutObject 요청을 거부하는 버킷 정책을 설정합니다.` },
      { k:'B', en:`In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to deny unencrypted PutObject requests. Use the AWS CLI to re-upload all objects in the S3 bucket.`, ko:`S3 버킷 속성에서 기본 암호화를 AWS KMS 관리형 암호화 키(SSE-KMS)를 사용하는 서버 측 암호화로 변경합니다. 암호화되지 않은 PutObject 요청을 거부하는 버킷 정책을 설정합니다. AWS CLI를 사용하여 버킷의 모든 객체를 다시 업로드합니다.` },
      { k:'C', en:`In the S3 bucket properties, change the default encryption to server-side encryption with AWS KMS managed encryption keys (SSE-KMS). Set an S3 bucket policy to automatically encrypt objects on GetObject and PutObject requests.`, ko:`S3 버킷 속성에서 기본 암호화를 SSE-KMS로 변경합니다. GetObject 및 PutObject 요청 시 객체를 자동으로 암호화하도록 버킷 정책을 설정합니다.` },
      { k:'D', en:`In the S3 bucket properties, change the default encryption to AES-256 with a customer managed key. Attach a policy to deny unencrypted PutObject requests to any entities that access the S3 bucket. Use the AWS CLI to re-upload all objects in the S3 bucket.`, ko:`S3 버킷 속성에서 기본 암호화를 고객 관리형 키를 사용하는 AES-256으로 변경합니다. 버킷에 액세스하는 모든 엔터티의 암호화되지 않은 PutObject 요청을 거부하는 정책을 연결합니다. AWS CLI를 사용하여 모든 객체를 다시 업로드합니다.` },
    ],
    answer: ['B'],
    vote: '61% B, 38% D',
    explain: `<p><span class="mark-ok">✅ B — SSE-KMS(고객 관리형 CMK) + 버킷 정책 + CLI 재업로드</span></p>
<p>요구 사항의 핵심은 <strong>보안 팀이 직접 관리하는 키</strong>로 암호화하는 것입니다. SSE-KMS는 AWS KMS에서 고객 관리형 키(CMK)를 생성하고 키 정책·회전·감사 로그를 보안 팀이 완전히 제어할 수 있습니다.</p>
<ul>
  <li>버킷 기본 암호화를 SSE-KMS(CMK)로 변경 → 이후 신규 객체는 자동 암호화</li>
  <li>버킷 정책에 <code>aws:SecureTransport</code> + <code>s3:x-amz-server-side-encryption: aws:kms</code> 조건으로 비암호화 PutObject 거부 → 강제 적용</li>
  <li>기존 객체는 기본 암호화 변경만으로 재암호화되지 않으므로 AWS CLI <code>aws s3 cp --sse aws:kms</code> 로 재업로드하여 모든 기존 객체를 SSE-KMS로 전환</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SSE-S3은 S3 서비스가 자체 관리하는 키를 사용합니다. "고객 관리형 키를 사용하는 SSE-S3"은 존재하지 않는 옵션입니다. SSE-S3에서는 키 정책·감사·회전을 보안 팀이 제어할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — S3 버킷 정책으로 GetObject 시 자동 암호화를 강제하는 것은 불가능합니다. 버킷 정책의 Deny 조건은 쓰기(PutObject)에 적용되며, 읽기(GetObject)는 이미 저장된 객체의 암호화 상태를 변경하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — S3 콘솔의 기본 암호화 옵션에서 "AES-256"은 SSE-S3을 의미하며, 고객 관리형 키를 지원하지 않습니다. 보안 팀이 키를 관리할 수 없어 요구 사항 불충족입니다.</p>`,
    disc: [
      { ans:'B', txt:'SSE-KMS를 사용하면 KMS CMK를 통해 키 정책, 자동 회전, CloudTrail 감사를 보안 팀이 직접 제어할 수 있다. 기존 객체 재암호화는 CLI re-upload가 유일한 방법(버전 관리 없는 경우 S3 Batch Operations copy도 가능).' },
      { ans:'B', txt:'AES-256 옵션은 SSE-S3과 동일하며 CMK를 지원하지 않는다. D는 오류다.' },
    ]
  },
  {
    n: 52,
    en: `A company is running a web application in the AWS Cloud. The application consists of dynamic content that is created on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group that is configured as a target group for an Application Load Balancer (ALB).<br/><br/>The company is using an Amazon CloudFront distribution to distribute the application globally. The CloudFront distribution uses the ALB as an origin. The company uses Amazon Route 53 for DNS and has created an A record of www.example.com for the CloudFront distribution.<br/><br/>A solutions architect must configure the application so that it is highly available and fault tolerant.<br/><br/>Which solution meets these requirements?`,
    ko: `회사가 AWS 클라우드에서 웹 애플리케이션을 운영합니다. 애플리케이션은 Auto Scaling 그룹의 EC2 인스턴스에서 동적 콘텐츠를 생성하고, ALB가 이를 프론트합니다. Amazon CloudFront가 ALB를 오리진으로 사용하여 전 세계에 배포합니다. Route 53에서 www.example.com A 레코드가 CloudFront를 가리킵니다.<br/><br/>고가용성과 내결함성을 갖추도록 애플리케이션을 구성하려면 어떻게 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Provision a full, secondary application deployment in a different AWS Region. Update the Route 53 A record to be a failover record. Add both of the CloudFront distributions as values. Create Route 53 health checks.`, ko:`다른 AWS 리전에 보조 애플리케이션 배포 전체를 프로비저닝합니다. Route 53 A 레코드를 장애 조치 레코드로 업데이트합니다. 두 CloudFront 배포를 값으로 추가하고 Route 53 상태 확인을 생성합니다.` },
      { k:'B', en:`Provision an ALB, an Auto Scaling group, and EC2 instances in a different AWS Region. Update the CloudFront distribution, and create a second origin for the new ALB. Create an origin group for the two origins. Configure one origin as primary and one origin as secondary.`, ko:`다른 AWS 리전에 ALB, Auto Scaling 그룹, EC2 인스턴스를 프로비저닝합니다. CloudFront 배포를 업데이트하여 새 ALB에 대한 두 번째 오리진을 추가합니다. 두 오리진에 대한 오리진 그룹을 생성합니다. 하나를 기본, 다른 하나를 보조 오리진으로 구성합니다.` },
      { k:'C', en:`Provision an Auto Scaling group and EC2 instances in a different AWS Region. Create a second target for the new Auto Scaling group in the ALB. Set up the failover routing algorithm on the ALB.`, ko:`다른 AWS 리전에 Auto Scaling 그룹과 EC2 인스턴스를 프로비저닝합니다. ALB에서 새 Auto Scaling 그룹에 대한 두 번째 대상을 생성합니다. ALB에서 장애 조치 라우팅 알고리즘을 설정합니다.` },
      { k:'D', en:`Provision a full, secondary application deployment in a different AWS Region. Create a second CloudFront distribution, and add the new application setup as an origin. Create an AWS Global Accelerator accelerator. Add both of the CloudFront distributions as endpoints.`, ko:`다른 AWS 리전에 보조 애플리케이션 배포 전체를 프로비저닝합니다. 두 번째 CloudFront 배포를 생성하고 새 설정을 오리진으로 추가합니다. AWS Global Accelerator를 생성하고 두 CloudFront 배포를 엔드포인트로 추가합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — CloudFront 오리진 그룹(Origin Group)으로 다중 리전 장애 조치</span></p>
<p>CloudFront <strong>Origin Group</strong>은 기본 오리진 장애 시 자동으로 보조 오리진으로 트래픽을 전환합니다. 다른 리전에 ALB + Auto Scaling 그룹을 구성하면 리전 전체 장애에도 대응할 수 있습니다.</p>
<ul>
  <li>단일 CloudFront 배포를 유지하므로 DNS 전파 지연 없이 즉시 장애 조치</li>
  <li>CloudFront 자체가 글로벌 분산 서비스이므로 추가 글로벌 레이어 불필요</li>
  <li>오리진 그룹의 장애 조치 기준은 HTTP 상태 코드(4xx/5xx) 또는 연결 오류로 설정 가능</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Route 53 장애 조치 레코드는 A 레코드 값으로 IP 또는 Alias 대상을 요구합니다. CloudFront 배포는 Alias 레코드로만 참조할 수 있으며, 두 CloudFront 배포를 하나의 장애 조치 레코드 쌍으로 구성하는 것은 DNS 전파 지연(TTL)이 발생해 신속한 장애 조치에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — ALB는 단일 리전 서비스입니다. 다른 리전의 Auto Scaling 그룹을 동일한 ALB의 대상 그룹으로 추가할 수 없으며, ALB에는 "장애 조치 라우팅 알고리즘" 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Global Accelerator는 CloudFront 배포를 엔드포인트로 지원하지 않습니다. GA의 엔드포인트는 ALB, NLB, EC2 인스턴스, Elastic IP입니다. 또한 두 개의 CloudFront 배포를 운영하면 캐시가 분산되고 관리 복잡성이 증가합니다.</p>`,
    disc: [
      { ans:'B', txt:'CloudFront Origin Group이 핵심: 기본 오리진 실패 시 자동으로 보조 오리진으로 전환, DNS TTL 없이 즉각 장애 조치 가능.' },
      { ans:'B', txt:'A는 CloudFront 배포를 Route 53 장애 조치 레코드에 넣을 수 없어서 틀림. D는 Global Accelerator가 CloudFront를 엔드포인트로 지원하지 않아 틀림.' },
    ]
  },
  {
    n: 53,
    en: `A company has an organization in AWS Organizations that has a large number of AWS accounts. One of the AWS accounts is designated as a transit account and has a transit gateway that is shared with all of the other AWS accounts. AWS Site-to-Site VPN connections are configured between all of the company's global offices and the transit account. The company has AWS Config enabled on all of its accounts.<br/><br/>The company's networking team needs to centrally manage a list of internal IP address ranges that belong to the global offices. Developers will reference this list to gain access to their applications securely.<br/><br/>Which solution meets these requirements with the LEAST amount of operational overhead?`,
    ko: `회사의 AWS Organizations에는 많은 AWS 계정이 있습니다. 한 계정이 Transit 계정으로 지정되고 모든 다른 계정과 공유된 Transit Gateway를 보유합니다. Site-to-Site VPN 연결이 회사의 모든 글로벌 사무소와 Transit 계정 사이에 구성됩니다. 모든 계정에 AWS Config가 활성화되어 있습니다.<br/><br/>네트워킹 팀은 글로벌 사무소의 내부 IP 주소 범위 목록을 중앙에서 관리해야 합니다. 개발자들은 이 목록을 참조하여 애플리케이션에 안전하게 접근합니다.<br/><br/>가장 적은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a JSON file that is hosted in Amazon S3 and that lists all of the internal IP address ranges. Configure an Amazon Simple Notification Service (Amazon SNS) topic in each of the accounts that can be invoked when the JSON file is updated. Subscribe an AWS Lambda function to the SNS topic to update all relevant security group rules with the updated IP address ranges.`, ko:`모든 내부 IP 주소 범위를 나열하는 JSON 파일을 Amazon S3에 호스팅합니다. JSON 파일이 업데이트될 때 호출할 수 있는 SNS 주제를 각 계정에 구성합니다. SNS 주제에 Lambda 함수를 구독하여 업데이트된 IP 범위로 보안 그룹 규칙을 업데이트합니다.` },
      { k:'B', en:`Create a new AWS Config managed rule that contains all of the internal IP address ranges. Use the rule to check the security groups in each of the accounts to ensure compliance with the list of IP address ranges. Configure the rule to automatically remediate any noncompliant security group that is detected.`, ko:`모든 내부 IP 주소 범위를 포함하는 새로운 AWS Config 관리형 규칙을 생성합니다. 규칙을 사용하여 각 계정의 보안 그룹이 IP 주소 범위 목록을 준수하는지 확인합니다. 감지된 비준수 보안 그룹을 자동으로 교정하도록 규칙을 구성합니다.` },
      { k:'C', en:`In the transit account, create a VPC prefix list with all of the internal IP address ranges. Use AWS Resource Access Manager to share the prefix list with all of the other accounts. Use the shared prefix list to configure security group rules in the other accounts.`, ko:`Transit 계정에서 모든 내부 IP 주소 범위가 포함된 VPC 접두사 목록을 생성합니다. AWS Resource Access Manager를 사용하여 이 접두사 목록을 다른 모든 계정과 공유합니다. 공유된 접두사 목록을 사용하여 다른 계정의 보안 그룹 규칙을 구성합니다.` },
      { k:'D', en:`In the transit account, create a security group with all of the internal IP address ranges. Configure the security groups in the other accounts to reference the transit account's security group by using a nested security group reference of "<transit-account-id>/sg-1a2b3c4d".`, ko:`Transit 계정에서 모든 내부 IP 주소 범위를 포함하는 보안 그룹을 생성합니다. 다른 계정의 보안 그룹이 "&lt;transit-account-id&gt;/sg-1a2b3c4d" 형식의 중첩 보안 그룹 참조를 사용하여 Transit 계정의 보안 그룹을 참조하도록 구성합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — VPC 접두사 목록(Prefix List) + RAM 공유</span></p>
<p><strong>VPC 관리형 접두사 목록</strong>은 CIDR 블록의 집합을 하나의 논리 객체로 관리합니다. Transit 계정에서 목록을 한 번만 업데이트하면 이를 참조하는 모든 보안 그룹 규칙이 자동으로 반영됩니다.</p>
<ul>
  <li>AWS RAM으로 Organizations 전체 또는 특정 OU/계정에 접두사 목록 공유 가능</li>
  <li>보안 그룹 규칙에서 CIDR 대신 접두사 목록 ID(pl-xxxxxxxx)를 참조 → 중앙 업데이트 즉시 반영</li>
  <li>S3, Lambda, SNS, Config 등 추가 인프라 불필요 → 가장 낮은 운영 오버헤드</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3 JSON 파일 + 계정별 SNS 주제 + Lambda 함수를 각 계정마다 배포·관리해야 합니다. IP 범위가 변경될 때마다 Lambda가 모든 보안 그룹을 수정해야 하며, 오류 처리·모니터링 등 운영 오버헤드가 매우 높습니다.</p>
<p><span class="mark-no">❌ B</span> — AWS Config 관리형 규칙 중 보안 그룹 인바운드 IP 범위를 특정 CIDR 목록으로 강제하는 규칙은 존재하지 않습니다. 커스텀 Config 규칙을 Lambda로 구현해야 하며, 이것도 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ D</span> — 보안 그룹 간 cross-account 참조(<code>&lt;account-id&gt;/sg-id</code>)는 <strong>동일 리전 내 VPC 피어링</strong> 관계에서만 동작합니다. Transit Gateway로 연결된 여러 리전의 VPC에서는 작동하지 않습니다.</p>`,
    disc: [
      { ans:'C', txt:'VPC Prefix List는 여러 CIDR을 하나의 관리 객체로 추상화하고, RAM으로 공유하면 모든 계정의 SG 규칙이 단일 소스를 참조한다. 업데이트 시 자동 전파되어 운영 오버헤드 최소.' },
    ]
  },
  {
    n: 54,
    en: `A company runs a new application as a static website in Amazon S3. The company has deployed the application to a production AWS account and uses Amazon CloudFront to deliver the website. The website calls an Amazon API Gateway REST API. An AWS Lambda function backs each API method.<br/><br/>The company wants to create a CSV report every 2 weeks to show each API Lambda function's recommended configured memory, recommended cost, and the price difference between current configurations and the recommendations. The company will store the reports in an S3 bucket.<br/><br/>Which solution will meet these requirements with the LEAST development time?`,
    ko: `회사가 S3에서 정적 웹사이트로 애플리케이션을 운영합니다. CloudFront로 배포하고 API Gateway REST API를 호출하며, 각 API 메서드는 Lambda 함수로 구현됩니다.<br/><br/>회사는 2주마다 각 API Lambda 함수의 권장 메모리 구성, 권장 비용, 현재 구성과 권장 사항의 가격 차이를 보여주는 CSV 보고서를 생성하여 S3 버킷에 저장하려 합니다.<br/><br/>가장 짧은 개발 시간으로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a Lambda function that extracts metrics data for each API Lambda function from Amazon CloudWatch Logs for the 2-week period. Collate the data into tabular format. Store the data as a .csv file in an S3 bucket. Create an Amazon EventBridge rule to schedule the Lambda function to run every 2 weeks.`, ko:`2주 기간 동안 Amazon CloudWatch Logs에서 각 API Lambda 함수의 지표 데이터를 추출하는 Lambda 함수를 생성합니다. 데이터를 표 형식으로 정리하여 S3 버킷에 .csv 파일로 저장합니다. EventBridge 규칙을 생성하여 Lambda 함수가 2주마다 실행되도록 예약합니다.` },
      { k:'B', en:`Opt in to AWS Compute Optimizer. Create a Lambda function that calls the ExportLambdaFunctionRecommendations operation. Export the .csv file to an S3 bucket. Create an Amazon EventBridge rule to schedule the Lambda function to run every 2 weeks.`, ko:`AWS Compute Optimizer를 활성화합니다. ExportLambdaFunctionRecommendations 작업을 호출하는 Lambda 함수를 생성합니다. .csv 파일을 S3 버킷으로 내보냅니다. EventBridge 규칙을 생성하여 Lambda 함수가 2주마다 실행되도록 예약합니다.` },
      { k:'C', en:`Opt in to AWS Compute Optimizer. Set up enhanced infrastructure metrics. Within the Compute Optimizer console, schedule a job to export the Lambda recommendations to a .csv file. Store the file in an S3 bucket every 2 weeks.`, ko:`AWS Compute Optimizer를 활성화합니다. 향상된 인프라 지표를 설정합니다. Compute Optimizer 콘솔에서 Lambda 권장 사항을 .csv 파일로 내보내는 작업을 예약합니다. 2주마다 S3 버킷에 파일을 저장합니다.` },
      { k:'D', en:`Purchase the AWS Business Support plan for the production account. Opt in to AWS Compute Optimizer for AWS Trusted Advisor checks. In the Trusted Advisor console, schedule a job to export the cost optimization checks to a .csv file. Store the file in an S3 bucket every 2 weeks.`, ko:`프로덕션 계정에 AWS Business Support 플랜을 구매합니다. AWS Trusted Advisor 점검을 위해 AWS Compute Optimizer를 활성화합니다. Trusted Advisor 콘솔에서 비용 최적화 점검을 .csv 파일로 내보내는 작업을 예약합니다. 2주마다 S3 버킷에 파일을 저장합니다.` },
    ],
    answer: ['B'],
    vote: '81% B, 12% D, 8% C',
    explain: `<p><span class="mark-ok">✅ B — AWS Compute Optimizer ExportLambdaFunctionRecommendations API</span></p>
<p>AWS Compute Optimizer는 Lambda 함수의 실제 사용 패턴을 분석하여 <strong>권장 메모리 크기, 예상 비용 절감액, 현재 설정과의 차이</strong>를 제공합니다. <code>ExportLambdaFunctionRecommendations</code> API를 호출하면 결과를 S3 버킷에 CSV 형식으로 직접 저장합니다.</p>
<ul>
  <li>CloudWatch Logs 파싱·집계 로직을 직접 개발할 필요 없음 → 개발 시간 최소</li>
  <li>EventBridge 규칙으로 2주마다 Lambda 트리거하여 자동화</li>
  <li>권장 메모리·비용·가격 차이가 모두 API 응답에 포함됨</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudWatch Logs에서 메모리 사용률 추출 → 집계 → 비용 계산 → CSV 생성까지 모든 로직을 직접 구현해야 합니다. Compute Optimizer API 한 번 호출에 비해 개발 시간이 훨씬 더 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — Compute Optimizer 콘솔에는 정기 내보내기 예약 기능이 없습니다. 콘솔에서 수동으로 내보내야 하므로 2주마다 자동화할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Trusted Advisor의 비용 최적화 항목은 Lambda 함수별 권장 메모리와 구체적인 가격 차이를 제공하지 않습니다. 또한 Business Support 플랜 구매 비용이 추가되며 콘솔 내 2주 자동 내보내기 예약도 지원하지 않습니다.</p>`,
    disc: [
      { ans:'B', txt:'Compute Optimizer ExportLambdaFunctionRecommendations는 메모리 권장값·비용 차이를 CSV로 직접 S3에 저장. 개발 필요 최소, EventBridge로 2주 주기 자동화 가능.' },
      { ans:'C', txt:'C는 Compute Optimizer 콘솔에 스케줄 내보내기 기능이 없어서 오답. B가 API 자동화 관점에서 최소 개발 시간.' },
    ]
  },
  {
    n: 55,
    en: `A company's factory and automation applications are running in a single VPC. More than 20 applications run on a combination of Amazon EC2, Amazon Elastic Container Service (Amazon ECS), and Amazon RDS.<br/><br/>The company has software engineers spread across three teams. One of the three teams owns each application, and each team is responsible for the cost and performance of all of its applications. Team resources have tags that represent their application and team. The teams use IAM access for daily activities.<br/><br/>The company needs to determine which costs on the monthly AWS bill are attributable to each application or team. The company also must be able to create reports to compare costs from the last 12 months and to help forecast costs for the next 12 months. A solutions architect must recommend an AWS Billing and Cost Management solution that provides these cost reports.<br/><br/>Which combination of actions will meet these requirements? (Choose three.)`,
    ko: `회사의 공장 및 자동화 애플리케이션들이 단일 VPC에서 실행됩니다. EC2, ECS, RDS 조합으로 20개 이상의 애플리케이션이 실행됩니다. 세 팀이 각 애플리케이션을 소유하고 비용과 성능을 책임집니다. 팀 리소스에는 애플리케이션과 팀을 나타내는 태그가 있습니다.<br/><br/>회사는 월별 AWS 청구서에서 각 애플리케이션·팀에 귀속된 비용을 확인해야 합니다. 지난 12개월 비용 비교와 향후 12개월 예측도 가능해야 합니다.<br/><br/>이 요구 사항을 충족하는 작업 조합은 무엇입니까? (3개 선택)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Activate the user-define cost allocation tags that represent the application and the team.`, ko:`애플리케이션과 팀을 나타내는 사용자 정의 비용 할당 태그를 활성화합니다.` },
      { k:'B', en:`Activate the AWS generated cost allocation tags that represent the application and the team.`, ko:`애플리케이션과 팀을 나타내는 AWS 생성 비용 할당 태그를 활성화합니다.` },
      { k:'C', en:`Create a cost category for each application in Billing and Cost Management.`, ko:`Billing and Cost Management에서 각 애플리케이션에 대한 비용 범주를 생성합니다.` },
      { k:'D', en:`Activate IAM access to Billing and Cost Management.`, ko:`Billing and Cost Management에 대한 IAM 액세스를 활성화합니다.` },
      { k:'E', en:`Create a cost budget.`, ko:`비용 예산을 생성합니다.` },
      { k:'F', en:`Enable Cost Explorer.`, ko:`Cost Explorer를 활성화합니다.` },
    ],
    answer: ['A', 'C', 'F'],
    vote: '52% ACF, 48% ADF',
    explain: `<p><span class="mark-ok">✅ A — 사용자 정의 비용 할당 태그 활성화</span></p>
<p>리소스에 이미 팀·애플리케이션 태그가 존재하므로 Billing 콘솔에서 해당 태그를 비용 할당 태그로 <strong>활성화</strong>하면 Cost Explorer와 Cost Categories에서 태그 기준 비용 분류가 가능합니다.</p>
<p><span class="mark-ok">✅ C — 비용 범주(Cost Categories) 생성</span></p>
<p>Cost Categories는 태그·계정·서비스 등을 규칙으로 조합하여 비용을 사용자 정의 그룹으로 매핑합니다. 여러 태그나 리소스 유형을 묶어 애플리케이션 단위 비용을 논리적으로 집계할 수 있습니다.</p>
<p><span class="mark-ok">✅ F — Cost Explorer 활성화</span></p>
<p>Cost Explorer는 최대 12개월 과거 비용 데이터 조회, 비용 비교, 향후 12개월 예측 기능을 모두 제공합니다. 태그·Cost Category 기준 필터링으로 팀·애플리케이션별 분석이 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS 생성 비용 할당 태그(예: <code>aws:createdBy</code>)는 AWS 서비스가 자동으로 생성하는 태그이며, 팀이나 애플리케이션 이름을 나타내지 않습니다. 팀이 직접 부착한 사용자 정의 태그(A)를 사용해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — IAM 액세스 활성화는 IAM 사용자가 Billing 콘솔에 접근할 수 있도록 루트 계정에서 허용하는 설정입니다. 비용 보고서를 생성하거나 데이터를 분류하는 기능이 아닙니다.</p>
<p><span class="mark-no">❌ E</span> — Cost Budget은 지출 한도 초과 시 알림을 보내는 도구입니다. 과거 12개월 비용 비교나 미래 예측 보고서를 제공하지 않습니다.</p>`,
    disc: [
      { ans:'A, C, F', txt:'A: 태그를 비용 할당 태그로 활성화해야 Cost Explorer에서 필터 가능. C: Cost Categories로 여러 태그/서비스를 묶어 앱 단위 비용 집계. F: 12개월 히스토리·예측 모두 Cost Explorer 기능.' },
      { ans:'A, D, F', txt:'D 지지: IAM 액세스 활성화 없이 팀원이 Billing 대시보드를 볼 수 없어 필요하다는 주장. 그러나 IAM 액세스는 보고서 생성이 아닌 접근 허용이므로 요구 사항의 "비용 보고서" 에 해당하지 않음.' },
    ]
  },
  {
    n: 56,
    en: `An AWS customer has a web application that runs on premises. The web application fetches data from a third-party API that is behind a firewall. The third party accepts only one public CIDR block in each client's allow list.<br/><br/>The customer wants to migrate their web application to the AWS Cloud. The application will be hosted on a set of Amazon EC2 instances behind an Application Load Balancer (ALB) in a VPC. The ALB is located in public subnets. The EC2 instances are located in private subnets. NAT gateways provide internet access to the private subnets.<br/><br/>How should a solutions architect ensure that the web application can continue to call the third-party API after the migration?`,
    ko: `AWS 고객이 온프레미스에서 웹 애플리케이션을 운영합니다. 이 애플리케이션은 방화벽 뒤에 있는 서드파티 API에서 데이터를 가져옵니다. 서드파티는 각 클라이언트 허용 목록에서 공개 CIDR 블록 하나만 허용합니다.<br/><br/>고객이 웹 애플리케이션을 AWS 클라우드로 마이그레이션하려 합니다. 애플리케이션은 VPC의 ALB 뒤 EC2 인스턴스에 호스팅됩니다. ALB는 퍼블릭 서브넷에, EC2는 프라이빗 서브넷에 있으며 NAT 게이트웨이가 인터넷 접근을 제공합니다.<br/><br/>마이그레이션 후에도 웹 애플리케이션이 서드파티 API를 계속 호출할 수 있도록 하려면 어떻게 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Associate a block of customer-owned public IP addresses to the VPC. Enable public IP addressing for public subnets in the VPC.`, ko:`고객 소유의 퍼블릭 IP 주소 블록을 VPC에 연결합니다. VPC의 퍼블릭 서브넷에 퍼블릭 IP 주소 지정을 활성화합니다.` },
      { k:'B', en:`Register a block of customer-owned public IP addresses in the AWS account. Create Elastic IP addresses from the address block and assign them to the NAT gateways in the VPC.`, ko:`AWS 계정에 고객 소유의 퍼블릭 IP 주소 블록을 등록합니다. 주소 블록에서 Elastic IP를 생성하고 VPC의 NAT 게이트웨이에 할당합니다.` },
      { k:'C', en:`Create Elastic IP addresses from the block of customer-owned IP addresses. Assign the static Elastic IP addresses to the ALB.`, ko:`고객 소유 IP 주소 블록에서 Elastic IP를 생성합니다. 정적 Elastic IP를 ALB에 할당합니다.` },
      { k:'D', en:`Register a block of customer-owned public IP addresses in the AWS account. Set up AWS Global Accelerator to use Elastic IP addresses from the address block. Set the ALB as the accelerator endpoint.`, ko:`AWS 계정에 고객 소유의 퍼블릭 IP 주소 블록을 등록합니다. 주소 블록의 Elastic IP를 사용하도록 AWS Global Accelerator를 설정합니다. ALB를 액셀러레이터 엔드포인트로 설정합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — BYOIP(Bring Your Own IP) + NAT 게이트웨이 Elastic IP</span></p>
<p>프라이빗 서브넷의 EC2 인스턴스가 외부 API를 호출할 때 아웃바운드 트래픽은 <strong>NAT 게이트웨이의 Elastic IP</strong>로 출발합니다. 서드파티는 이 IP를 허용 목록에 등록합니다.</p>
<ul>
  <li>AWS에 고객 소유 IP 블록(BYOIP)을 등록하면 기존 온프레미스에서 사용하던 IP를 AWS로 이전 가능</li>
  <li>해당 블록에서 Elastic IP를 생성하여 NAT 게이트웨이에 할당 → 아웃바운드 IP가 기존과 동일하게 유지</li>
  <li>서드파티 허용 목록 변경 불필요</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 퍼블릭 서브넷에 퍼블릭 IP를 활성화해도 EC2는 <strong>프라이빗 서브넷</strong>에 있습니다. 프라이빗 서브넷의 아웃바운드 트래픽은 NAT 게이트웨이를 거치므로, 퍼블릭 서브넷 IP 설정은 아웃바운드 소스 IP에 영향을 주지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — ALB는 <strong>인바운드</strong> 트래픽을 수신하는 엔드포인트입니다. EC2→서드파티 API의 아웃바운드 트래픽과 무관합니다. 또한 ALB에 Elastic IP를 직접 할당하는 기능은 존재하지 않습니다(NLB는 가능).</p>
<p><span class="mark-no">❌ D</span> — Global Accelerator는 인바운드 트래픽 가속에 사용됩니다. EC2에서 서드파티로 나가는 아웃바운드 소스 IP를 제어하지 않으며, BYOIP EIP를 GA 자체에 할당해도 EC2 아웃바운드 IP가 변경되지 않습니다.</p>`,
    disc: [
      { ans:'B', txt:'EC2(프라이빗 서브넷) → NAT GW → 인터넷. 서드파티 API는 NAT GW EIP를 봄. BYOIP로 기존 IP 블록을 AWS에 가져와 NAT GW EIP로 할당하면 서드파티 허용 목록 변경 불필요.' },
    ]
  },
  {
    n: 57,
    en: `A company with several AWS accounts is using AWS Organizations and service control policies (SCPs). An administrator created the following SCP and has attached it to an organizational unit (OU) that contains AWS account 1111-1111-1111:<br/><br/><img src="https://img.examtopics.com/aws-certified-solutions-architect-professional-sap-c02/image6.png"/><br/><br/>Developers working in account 1111-1111-1111 complain that they cannot create Amazon S3 buckets. How should the administrator address this problem?`,
    ko: `여러 AWS 계정을 보유한 회사가 AWS Organizations와 서비스 제어 정책(SCP)을 사용합니다. 관리자가 SCP를 생성하여 AWS 계정 1111-1111-1111이 포함된 OU에 연결했습니다.<br/><br/><img src="https://img.examtopics.com/aws-certified-solutions-architect-professional-sap-c02/image6.png"/><br/><br/>계정 1111-1111-1111의 개발자들이 Amazon S3 버킷을 생성할 수 없다고 불평합니다. 관리자는 이 문제를 어떻게 해결해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Add s3:CreateBucket with "Allow" effect to the SCP.`, ko:`SCP에 "허용" 효과의 s3:CreateBucket을 추가합니다.` },
      { k:'B', en:`Remove the account from the OU, and attach the SCP directly to account 1111-1111-1111.`, ko:`OU에서 계정을 제거하고 SCP를 계정 1111-1111-1111에 직접 연결합니다.` },
      { k:'C', en:`Instruct the developers to add Amazon S3 permissions to their IAM entities.`, ko:`개발자에게 IAM 엔터티에 Amazon S3 권한을 추가하도록 지시합니다.` },
      { k:'D', en:`Remove the SCP from account 1111-1111-1111.`, ko:`계정 1111-1111-1111에서 SCP를 제거합니다.` },
    ],
    answer: ['C'],
    vote: '88% C, 12% A',
    explain: `<p><span class="mark-ok">✅ C — IAM 엔터티에 S3 권한 추가</span></p>
<p>SCP의 핵심 원칙: <strong>SCP는 권한을 부여하지 않습니다.</strong> SCP는 계정 내 IAM 엔터티(사용자·역할)가 최대로 가질 수 있는 권한의 상한선(guardrail)을 정의합니다.</p>
<ul>
  <li>SCP가 <code>s3:CreateBucket</code>을 허용하더라도, 해당 IAM 사용자/역할에 <code>s3:CreateBucket</code>을 부여하는 IAM 정책이 없으면 작업 불가</li>
  <li>이미지의 SCP는 S3 작업을 명시적으로 Deny하지 않거나, 다른 서비스를 제한하는 용도로 보입니다. 개발자에게 S3 IAM 권한이 없는 것이 실제 원인</li>
  <li>실제 접근 제어는 SCP × IAM 정책의 교집합으로 결정됨</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SCP에 Allow를 추가해도 IAM 엔터티에 권한이 없으면 여전히 불가능합니다. SCP Allow는 "IAM 정책으로 이 이상까지 허용할 수 있다"는 상한이지, 자체적으로 권한을 부여하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — 계정을 OU에서 제거해도 IAM 엔터티에 S3 권한이 없는 근본 원인이 해결되지 않습니다. 또한 SCP를 계정에 직접 연결해도 동일한 제약이 적용됩니다.</p>
<p><span class="mark-no">❌ D</span> — SCP 제거는 조직 거버넌스 정책을 우회하는 방법으로, 보안 위험을 초래합니다. SCP를 제거해도 IAM 권한이 없으면 여전히 S3 버킷을 생성할 수 없습니다.</p>`,
    disc: [
      { ans:'C', txt:'SCP는 guardrail(상한)이지 권한 부여 도구가 아님. IAM 엔터티에 s3:CreateBucket이 포함된 정책이 없으면 SCP 상태와 무관하게 작업 불가.' },
    ]
  },
  {
    n: 58,
    en: `A company has a monolithic application that is critical to the company's business. The company hosts the application on an Amazon EC2 instance that runs Amazon Linux 2. The company's application team receives a directive from the legal department to back up the data from the instance's encrypted Amazon Elastic Block Store (Amazon EBS) volume to an Amazon S3 bucket. The application team does not have the administrative SSH key pair for the instance. The application must continue to serve the users.<br/><br/>Which solution will meet these requirements?`,
    ko: `회사에 비즈니스에 중요한 모놀리식 애플리케이션이 있습니다. Amazon Linux 2를 실행하는 EC2 인스턴스에서 호스팅됩니다. 법무 부서의 지시에 따라 인스턴스의 암호화된 EBS 볼륨 데이터를 S3 버킷에 백업해야 합니다. 애플리케이션 팀에는 인스턴스의 관리 SSH 키 페어가 없습니다. 애플리케이션은 계속 사용자에게 서비스를 제공해야 합니다.<br/><br/>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Attach a role to the instance with permission to write to Amazon S3. Use the AWS Systems Manager Session Manager option to gain access to the instance and run commands to copy data into Amazon S3.`, ko:`Amazon S3에 쓸 수 있는 권한이 있는 역할을 인스턴스에 연결합니다. AWS Systems Manager Session Manager를 사용하여 인스턴스에 액세스하고 명령을 실행하여 데이터를 Amazon S3로 복사합니다.` },
      { k:'B', en:`Create an image of the instance with the reboot option turned on. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.`, ko:`재부팅 옵션을 켠 상태로 인스턴스의 이미지를 생성합니다. 이미지에서 새 EC2 인스턴스를 시작합니다. Amazon S3에 쓸 수 있는 권한이 있는 역할을 새 인스턴스에 연결합니다. Amazon S3에 데이터를 복사하는 명령을 실행합니다.` },
      { k:'C', en:`Take a snapshot of the EBS volume by using Amazon Data Lifecycle Manager (Amazon DLM). Copy the data to Amazon S3.`, ko:`Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 EBS 볼륨의 스냅샷을 만듭니다. 데이터를 Amazon S3에 복사합니다.` },
      { k:'D', en:`Create an image of the instance. Launch a new EC2 instance from the image. Attach a role to the new instance with permission to write to Amazon S3. Run a command to copy data into Amazon S3.`, ko:`인스턴스의 이미지를 생성합니다. 이미지에서 새 EC2 인스턴스를 시작합니다. Amazon S3에 쓸 수 있는 권한이 있는 역할을 새 인스턴스에 연결합니다. Amazon S3에 데이터를 복사하는 명령을 실행합니다.` },
    ],
    answer: ['A'],
    vote: '56% A, 43% C',
    explain: `<p><span class="mark-ok">✅ A — IAM 역할 연결 + SSM Session Manager + S3 직접 복사</span></p>
<p>요구 사항: ① SSH 키 없이 접근, ② 애플리케이션 중단 없음, ③ 데이터를 <strong>S3 버킷</strong>에 직접 저장.</p>
<ul>
  <li><strong>SSM Session Manager</strong>는 SSH 키 없이 IAM 권한만으로 EC2 인스턴스에 브라우저 또는 CLI로 접속 가능</li>
  <li>인스턴스에 S3 쓰기 IAM 역할을 연결하고 <code>aws s3 cp</code> 명령으로 파일 시스템 데이터를 S3 버킷에 직접 복사</li>
  <li>인스턴스를 재시작하거나 중지하지 않으므로 애플리케이션 서비스 유지</li>
  <li>암호화된 EBS 볼륨이라도 인스턴스가 실행 중이면 OS 레벨에서 데이터에 접근 가능</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AMI 생성 시 <code>재부팅 옵션</code>을 켜면 인스턴스가 재부팅됩니다. 비즈니스 크리티컬 애플리케이션의 중단을 초래하므로 "애플리케이션이 계속 서비스해야 한다"는 요구 사항 위반입니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon DLM은 EBS 스냅샷을 생성하지만, 스냅샷은 EBS 스냅샷 서비스에 저장되며 <strong>S3 버킷에 직접 저장되지 않습니다</strong>. 법무 부서가 요구하는 "S3 버킷에 백업"을 충족하지 못합니다. (EBS 스냅샷을 S3로 내보내려면 별도의 Export Snapshot 작업이 필요)</p>
<p><span class="mark-no">❌ D</span> — AMI 생성 없이 기본 옵션으로 이미지를 생성하면 인스턴스가 중지되거나 일관성 없는 상태로 이미지가 생성될 수 있습니다. 또한 새 인스턴스 시작→복사는 불필요한 단계이며 원본 인스턴스 서비스 중단 가능성이 있습니다.</p>`,
    disc: [
      { ans:'A', txt:'SSM Session Manager: SSH 키 불필요, IAM 역할로 인스턴스 접근 가능. S3 직접 복사로 "S3 버킷 백업" 요구 충족. DLM(C)은 스냅샷이 S3로 가지 않아 요구 사항 불충족.' },
      { ans:'C', txt:'DLM이 스냅샷을 S3로 내보낼 수 있다고 생각한 의견이나, DLM은 EBS 스냅샷만 관리하며 S3 직접 저장은 별도 Export 작업 필요.' },
    ]
  },
  {
    n: 59,
    en: `A solutions architect needs to copy data from an Amazon S3 bucket in an AWS account to a new S3 bucket in a new AWS account. The solutions architect must implement a solution that uses the AWS CLI.<br/><br/>Which combination of steps will successfully copy the data? (Choose three.)`,
    ko: `솔루션 아키텍트가 한 AWS 계정의 S3 버킷에서 새 AWS 계정의 새 S3 버킷으로 데이터를 복사해야 합니다. AWS CLI를 사용하는 솔루션을 구현해야 합니다.<br/><br/>데이터를 성공적으로 복사하려면 어떤 단계 조합을 사용해야 합니까? (3개 선택)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Create a bucket policy to allow the source bucket to list its contents and to put objects and set object ACLs in the destination bucket. Attach the bucket policy to the destination bucket.`, ko:`원본 버킷이 콘텐츠를 나열하고, 대상 버킷에 객체를 배치하며 객체 ACL을 설정할 수 있도록 허용하는 버킷 정책을 생성합니다. 버킷 정책을 대상 버킷에 연결합니다.` },
      { k:'B', en:`Create a bucket policy to allow a user in the destination account to list the source bucket's contents and read the source bucket's objects. Attach the bucket policy to the source bucket.`, ko:`대상 계정의 사용자가 원본 버킷의 콘텐츠를 나열하고 객체를 읽을 수 있도록 허용하는 버킷 정책을 생성합니다. 버킷 정책을 원본 버킷에 연결합니다.` },
      { k:'C', en:`Create an IAM policy in the source account. Configure the policy to allow a user in the source account to list contents and get objects in the source bucket, and to list contents, put objects, and set object ACLs in the destination bucket. Attach the policy to the user.`, ko:`원본 계정에서 IAM 정책을 생성합니다. 원본 계정의 사용자가 원본 버킷에서 콘텐츠를 나열하고 객체를 가져오고, 대상 버킷에서 콘텐츠를 나열하고 객체를 배치하며 ACL을 설정할 수 있도록 정책을 구성합니다. 정책을 사용자에게 연결합니다.` },
      { k:'D', en:`Create an IAM policy in the destination account. Configure the policy to allow a user in the destination account to list contents and get objects in the source bucket, and to list contents, put objects, and set object ACLs in the destination bucket. Attach the policy to the user.`, ko:`대상 계정에서 IAM 정책을 생성합니다. 대상 계정의 사용자가 원본 버킷에서 콘텐츠를 나열하고 객체를 가져오고, 대상 버킷에서 콘텐츠를 나열하고 객체를 배치하며 ACL을 설정할 수 있도록 정책을 구성합니다. 정책을 사용자에게 연결합니다.` },
      { k:'E', en:`Run the aws s3 sync command as a user in the source account. Specify the source and destination buckets to copy the data.`, ko:`원본 계정의 사용자로 aws s3 sync 명령을 실행합니다. 데이터를 복사할 원본 및 대상 버킷을 지정합니다.` },
      { k:'F', en:`Run the aws s3 sync command as a user in the destination account. Specify the source and destination buckets to copy the data.`, ko:`대상 계정의 사용자로 aws s3 sync 명령을 실행합니다. 데이터를 복사할 원본 및 대상 버킷을 지정합니다.` },
    ],
    answer: ['B', 'D', 'F'],
    vote: '95% BDF',
    explain: `<p><span class="mark-ok">✅ B — 원본 버킷에 대상 계정 사용자의 읽기 허용 버킷 정책</span></p>
<p>원본 버킷은 다른 계정 소유이므로 기본적으로 접근이 차단됩니다. 원본 버킷 정책에 대상 계정 사용자를 명시하여 <code>s3:ListBucket</code>, <code>s3:GetObject</code>를 허용해야 합니다.</p>
<p><span class="mark-ok">✅ D — 대상 계정 IAM 정책: 원본 버킷 읽기 + 대상 버킷 쓰기</span></p>
<p>대상 계정 사용자의 IAM 정책에 원본 버킷 읽기 권한과 대상 버킷 쓰기 권한을 모두 부여합니다. Cross-account 접근을 위해 양쪽 정책(버킷 정책 + IAM 정책)이 모두 필요합니다.</p>
<p><span class="mark-ok">✅ F — 대상 계정 사용자로 aws s3 sync 실행</span></p>
<p><strong>대상 계정 자격 증명으로 실행해야</strong> 복사된 객체의 소유권이 대상 계정에 귀속됩니다. 원본 계정 자격 증명으로 실행하면 대상 버킷에 복사된 객체가 원본 계정 소유로 남아 대상 계정 사용자가 접근할 수 없습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 원본 버킷이 자신의 콘텐츠를 나열하고 대상에 쓰는 권한을 대상 버킷 정책으로 부여하는 방식은 올바르지 않습니다. 버킷 자체는 IAM 주체가 아니므로, 대상 버킷 정책에서 원본 버킷을 주체로 허용할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 원본 계정 IAM 정책으로 대상 버킷에 쓰기 권한을 부여하려 해도, 대상 버킷이 원본 계정 사용자를 신뢰하지 않으면 접근이 불가능합니다(양방향 신뢰 필요). 또한 원본 계정 자격 증명으로 sync하면 복사된 객체 소유권이 원본 계정에 남습니다.</p>
<p><span class="mark-no">❌ E</span> — 원본 계정 자격 증명으로 aws s3 sync를 실행하면 대상 버킷에 복사된 객체의 소유자가 원본 계정이 됩니다. 대상 계정 사용자는 자신의 버킷에 있는 객체에 접근할 수 없게 됩니다.</p>`,
    disc: [
      { ans:'B, D, F', txt:'Cross-account S3 copy 핵심: ① 원본 버킷 정책에서 대상 계정 사용자 허용(B), ② 대상 계정 IAM 정책에서 양쪽 버킷 권한 부여(D), ③ 대상 계정 자격 증명으로 sync 실행하여 객체 소유권을 대상 계정으로 이전(F).' },
    ]
  },
  {
    n: 60,
    en: `A company built an application based on AWS Lambda deployed in an AWS CloudFormation stack. The last production release of the web application introduced an issue that resulted in an outage lasting several minutes. A solutions architect must adjust the deployment process to support a canary release.<br/><br/>Which solution will meet these requirements?`,
    ko: `회사가 AWS CloudFormation 스택에 배포된 AWS Lambda 기반 애플리케이션을 구축했습니다. 마지막 프로덕션 릴리스에서 몇 분간 중단을 초래한 문제가 발생했습니다. 솔루션 아키텍트가 카나리아 릴리스를 지원하도록 배포 프로세스를 조정해야 합니다.<br/><br/>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an alias for every new deployed version of the Lambda function. Use the AWS CLI update-alias command with the routing-config parameter to distribute the load.`, ko:`새로 배포된 모든 버전의 Lambda 함수에 대한 별칭을 생성합니다. AWS CLI update-alias 명령을 routing-config 파라미터와 함께 사용하여 부하를 분산합니다.` },
      { k:'B', en:`Deploy the application into a new CloudFormation stack. Use an Amazon Route 53 weighted routing policy to distribute the load.`, ko:`애플리케이션을 새 CloudFormation 스택에 배포합니다. 부하를 분산하려면 Amazon Route 53 가중치 기반 라우팅 정책을 사용합니다.` },
      { k:'C', en:`Create a version for every new deployed Lambda function. Use the AWS CLI update-function-configuration command with the routing-config parameter to distribute the load.`, ko:`새로 배포된 모든 Lambda 함수에 대한 버전을 생성합니다. AWS CLI update-function-configuration 명령을 routing-config 파라미터와 함께 사용하여 부하를 분산합니다.` },
      { k:'D', en:`Configure AWS CodeDeploy and use CodeDeployDefault.OneAtATime in the Deployment configuration to distribute the load.`, ko:`AWS CodeDeploy를 구성하고 배포 구성에서 CodeDeployDefault.OneAtATime을 사용하여 부하를 분산합니다.` },
    ],
    answer: ['A'],
    vote: '98% A',
    explain: `<p><span class="mark-ok">✅ A — Lambda 별칭(Alias) + routing-config로 트래픽 가중치 분배</span></p>
<p>Lambda <strong>별칭 트래픽 시프팅</strong>이 카나리아 릴리스의 네이티브 메커니즘입니다.</p>
<ul>
  <li>새 버전 배포 후 별칭(예: <code>production</code>)을 생성하고, <code>update-alias --routing-config AdditionalVersionWeights={"2":"0.05"}</code>로 신규 버전에 5% 트래픽만 라우팅</li>
  <li>문제 발생 시 즉시 가중치를 0으로 되돌려 롤백 가능</li>
  <li>단일 CloudFormation 스택 내에서 처리되므로 인프라 변경 최소화</li>
  <li>AWS CodeDeploy Lambda 배포 타입(<code>Canary10Percent5Minutes</code> 등)도 내부적으로 이 메커니즘을 사용</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Route 53 가중치 기반 라우팅을 사용하려면 Lambda 함수 URL이나 API Gateway 엔드포인트를 두 세트 유지해야 합니다. 새 CloudFormation 스택 배포는 복잡성을 크게 높이며, Lambda 별칭으로 간단히 해결 가능한 것을 과도 설계한 것입니다.</p>
<p><span class="mark-no">❌ C</span> — <code>update-function-configuration</code> 명령에는 <code>routing-config</code> 파라미터가 없습니다. <code>routing-config</code>는 <code>update-alias</code> 명령에서만 지원됩니다. Lambda 버전 자체는 트래픽 분할을 지원하지 않으며, 반드시 별칭을 통해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — <code>CodeDeployDefault.OneAtATime</code>은 EC2/온프레미스 배포에서 인스턴스를 하나씩 순차 업데이트하는 방식입니다. Lambda 카나리아 배포에는 <code>LambdaCanary10Percent5Minutes</code> 등 Lambda 전용 배포 설정을 사용해야 합니다.</p>`,
    disc: [
      { ans:'A', txt:'Lambda 별칭 트래픽 시프팅: update-alias --routing-config로 신규 버전 비율 지정. C는 update-function-configuration에 routing-config 파라미터가 없어서 오답.' },
    ]
  },
];
