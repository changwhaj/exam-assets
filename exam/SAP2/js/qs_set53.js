window.QS_SET53 = [
  {
    n: 521,
    en: `<p>A company is changing the way that it handles patching of Amazon EC2 instances in its application account. The company currently patches instances over the internet by using a NAT gateway in a VPC in the application account.</p>
<p>The company has EC2 instances set up as a patch source repository in a dedicated private VPC in a core account. The company wants to use AWS Systems Manager Patch Manager and the patch source repository in the core account to patch the EC2 instances in the application account. The company must prevent all EC2 instances in the application account from accessing the internet.</p>
<p>The EC2 instances in the application account need to access Amazon S3, where the application data is stored. These EC2 instances need connectivity to Systems Manager and to the patch source repository in the private VPC in the core account.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 애플리케이션 계정에서 EC2 인스턴스의 패치 방식을 변경하고 있습니다. 현재 NAT 게이트웨이를 통해 인터넷으로 패치를 적용하고 있습니다.</p>
<p>코어 계정의 전용 프라이빗 VPC에 EC2 인스턴스가 패치 소스 리포지토리로 설정되어 있습니다. 회사는 AWS Systems Manager Patch Manager와 코어 계정의 패치 소스 리포지토리를 사용하여 애플리케이션 계정 EC2 인스턴스에 패치를 적용하려 합니다. 애플리케이션 계정의 모든 EC2 인스턴스가 인터넷에 접근하지 못하도록 해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a network ACL that blocks outbound traffic on port 80. Associate the network ACL with all subnets in the application account. In the application account and the core account, deploy one EC2 instance that runs a custom VPN server. Create a VPN tunnel to access the private VPC. Update the route table in the application account.', ko: '포트 80 아웃바운드 트래픽을 차단하는 네트워크 ACL을 만들고 모든 서브넷에 연결합니다. 두 계정에 VPN 서버를 실행하는 EC2를 배포하고 VPN 터널을 만들어 라우팅 테이블을 업데이트합니다.' },
      { k: 'B', en: 'Create private VIFs for Systems Manager and Amazon S3. Delete the NAT gateway from the VPC in the application account. Create a transit gateway to access the patch source repository EC2 instances in the core account. Update the route table in the core account.', ko: 'Systems Manager와 Amazon S3에 대한 프라이빗 VIF를 만듭니다. 애플리케이션 계정 VPC에서 NAT 게이트웨이를 삭제합니다. 코어 계정의 패치 소스 리포지토리 EC2 인스턴스에 접근하기 위한 Transit Gateway를 만듭니다.' },
      { k: 'C', en: 'Create VPC endpoints for Systems Manager and Amazon S3. Delete the NAT gateway from the VPC in the application account. Create a VPC peering connection to access the patch source repository EC2 instances in the core account. Update the route tables in both accounts.', ko: 'Systems Manager와 Amazon S3에 대한 VPC 엔드포인트를 만듭니다. 애플리케이션 계정 VPC에서 NAT 게이트웨이를 삭제합니다. 코어 계정의 패치 소스 리포지토리 EC2 인스턴스에 접근하기 위한 VPC 피어링 연결을 만듭니다. 두 계정의 라우팅 테이블을 업데이트합니다.' },
      { k: 'D', en: 'Create a network ACL that blocks inbound traffic on port 80. Associate the network ACL with all subnets in the application account. Create a transit gateway to access the patch source repository EC2 instances in the core account. Update the route tables in both accounts.', ko: '포트 80 인바운드 트래픽을 차단하는 네트워크 ACL을 만들고 모든 서브넷에 연결합니다. 코어 계정 패치 소스 리포지토리에 접근하기 위한 Transit Gateway를 만들고 두 계정의 라우팅 테이블을 업데이트합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — VPC 엔드포인트(SSM, S3) + NAT 게이트웨이 삭제 + VPC 피어링</span></p>
<p>세 가지 요구사항을 해결합니다:</p>
<ul>
<li><strong>인터넷 차단</strong>: NAT 게이트웨이 삭제</li>
<li><strong>Systems Manager + S3 접근</strong>: VPC 엔드포인트(프라이빗 연결)로 인터넷 없이 AWS 서비스 접근</li>
<li><strong>코어 계정 패치 리포지토리 접근</strong>: VPC 피어링으로 두 계정의 VPC 연결</li>
</ul>
<p><strong>B가 아닌 이유:</strong> 프라이빗 VIF는 AWS Direct Connect 전용으로 두 VPC 간 연결이 아닙니다. 또한 코어 계정 라우팅 테이블만 업데이트하면 양방향 통신이 안 됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 포트 80만 차단해도 포트 443(HTTPS) 등을 통한 인터넷 접근이 가능합니다. 인터넷 완전 차단에 부적합합니다.</p>
<p><span class="mark-no">❌ B</span> — 프라이빗 VIF는 Direct Connect 구성 요소입니다. VPC 간 연결 방법이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — 인바운드 포트 80 차단은 인터넷 접근 방지에 불충분합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'VPC 엔드포인트로 인터넷 없이 SSM+S3 접근 + NAT GW 삭제로 인터넷 차단 + VPC 피어링으로 코어 계정 연결.' },
    ],
  },
  {
    n: 522,
    en: `<p>A company in the United States (US) has acquired a company in Europe. Both companies use the AWS Cloud. The US company has built a new application with a microservices architecture. The US company is hosting the application across five VPCs in the us-east-2 Region. The application must be able to access resources in one VPC in the eu-west-1 Region.</p>
<p>However, the application must not be able to access any other VPCs.</p>
<p>The VPCs in both Regions have no overlapping CIDR ranges. All accounts are already consolidated in one organization in AWS Organizations.</p>
<p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>미국 회사가 유럽 회사를 인수했습니다. 두 회사 모두 AWS를 사용합니다. 미국 회사는 us-east-2 리전의 5개 VPC에서 마이크로서비스 아키텍처 애플리케이션을 호스팅합니다. 애플리케이션은 eu-west-1 리전의 한 VPC에 있는 리소스에 접근해야 하지만 다른 VPC에는 접근하면 안 됩니다.</p>
<p>두 리전의 VPC에는 겹치는 CIDR 범위가 없으며 모든 계정은 이미 AWS Organizations에 통합되어 있습니다.</p>
<p>가장 비용 효율적으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create one transit gateway in eu-west-1. Attach the VPCs in us-east-2 and the VPC in eu-west-1 to the transit gateway. Create the necessary route entries in each VPC so that the traffic is routed through the transit gateway.', ko: 'eu-west-1에 Transit Gateway를 만듭니다. us-east-2의 VPC와 eu-west-1의 VPC를 연결합니다. 각 VPC에 라우팅 항목을 만들어 Transit Gateway를 통해 라우팅합니다.' },
      { k: 'B', en: 'Create one transit gateway in each Region. Attach the involved subnets to the regional transit gateway. Create the necessary route entries in the associated route tables. Peer the two transit gateways.', ko: '각 리전에 Transit Gateway를 만들고 관련 서브넷을 연결합니다. 두 Transit Gateway를 피어링합니다.' },
      { k: 'C', en: 'Create a full mesh VPC peering connection configuration between all the VPCs. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.', ko: '모든 VPC 간에 풀 메시 VPC 피어링 연결을 만듭니다. 각 VPC에 라우팅 항목을 만듭니다.' },
      { k: 'D', en: 'Create one VPC peering connection for each VPC in us-east-2 to the VPC in eu-west-1. Create the necessary route entries in each VPC so that the traffic is routed through the VPC peering connection.', ko: 'us-east-2의 각 VPC에서 eu-west-1의 VPC로 VPC 피어링 연결을 만듭니다. 각 VPC에 라우팅 항목을 만들어 VPC 피어링 연결을 통해 라우팅합니다.' },
    ],
    answer: ['D'],
    vote: '83% D / 17% A',
    explain: `<p><span class="mark-ok">✅ D — VPC 피어링 5개 (us-east-2 각 VPC → eu-west-1 VPC)</span></p>
<p>요구사항 분석:</p>
<ul>
<li><strong>5개 VPC → 1개 VPC</strong>만 접근 가능</li>
<li><strong>다른 VPC 접근 금지</strong></li>
<li><strong>비용 효율성 극대화</strong></li>
</ul>
<p>VPC 피어링은 두 VPC 간 직접 연결로 비전이적(non-transitive)입니다. 5개의 피어링 연결로 us-east-2 각 VPC가 eu-west-1 VPC에만 접근 가능하며 다른 VPC 접근 불가.</p>
<p>Transit Gateway(A, B)보다 VPC 피어링이 더 저렴합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 단일 리전(eu-west-1)에 TGW를 만들어 다른 리전(us-east-2) VPC를 연결할 수 없습니다. TGW는 리전 서비스입니다.</p>
<p><span class="mark-no">❌ B</span> — TGW 2개 + 피어링은 가능하지만 TGW 비용이 추가됩니다. 비용 효율성이 낮습니다.</p>
<p><span class="mark-no">❌ C</span> — 풀 메시는 모든 VPC가 서로 접근 가능하게 합니다. 다른 VPC 접근 금지 요구사항에 위배됩니다.</p>`,
    disc: [
      { ans: 'D (83%)', txt: '5개 리전 간 VPC 피어링 = 특정 VPC에만 접근 + TGW보다 저렴. 비전이적 특성으로 다른 VPC 접근 차단.' },
      { ans: 'A (17%)', txt: 'TGW가 더 관리하기 쉽다는 주장. 그러나 단일 리전 TGW로는 교차 리전 연결 불가.' },
    ],
  },
  {
    n: 523,
    en: `<p>A travel company built a web application that uses Amazon Simple Email Service (Amazon SES) to send email notifications to users. The company needs to enable logging to help troubleshoot email delivery issues. The company also needs the ability to do searches that are based on recipient, subject, and time sent.</p>
<p>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)</p>`,
    ko: `<p>한 여행사가 Amazon SES를 사용하여 사용자에게 이메일 알림을 보내는 웹 애플리케이션을 만들었습니다. 회사는 이메일 배달 문제를 해결하는 데 도움이 되는 로깅을 활성화해야 하며, 수신자, 제목, 전송 시간을 기준으로 검색할 수 있어야 합니다.</p>
<p>이러한 요구사항을 충족하기 위한 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Create an Amazon SES configuration set with Amazon Data Firehose as the destination. Choose to send logs to an Amazon S3 bucket.', ko: 'Amazon Data Firehose를 대상으로 하는 Amazon SES 구성 세트를 만듭니다. 로그를 Amazon S3 버킷으로 보내도록 선택합니다.' },
      { k: 'B', en: 'Enable AWS CloudTrail logging. Specify an Amazon S3 bucket as the destination for the logs.', ko: 'AWS CloudTrail 로깅을 활성화합니다. Amazon S3 버킷을 로그 대상으로 지정합니다.' },
      { k: 'C', en: 'Use Amazon Athena to query the logs in the Amazon S3 bucket for recipient, subject, and time sent.', ko: 'Amazon Athena를 사용하여 Amazon S3 버킷의 로그에서 수신자, 제목, 전송 시간을 쿼리합니다.' },
      { k: 'D', en: 'Create an Amazon CloudWatch log group. Configure Amazon SES to send logs to the log group.', ko: 'Amazon CloudWatch 로그 그룹을 만듭니다. Amazon SES가 로그 그룹으로 로그를 보내도록 구성합니다.' },
      { k: 'E', en: 'Use Amazon Athena to query the logs in Amazon CloudWatch for recipient, subject, and time sent.', ko: 'Amazon Athena를 사용하여 Amazon CloudWatch의 로그에서 수신자, 제목, 전송 시간을 쿼리합니다.' },
    ],
    answer: ['A', 'C'],
    vote: '40% AC / 40% DE',
    explain: `<p><span class="mark-ok">✅ A — SES 구성 세트 + Firehose → S3</span></p>
<p>SES 이벤트 데이터를 수신자, 제목, 타임스탬프를 포함한 상세 형식으로 S3에 저장합니다. SES 구성 세트의 Firehose 연동은 이메일 이벤트(전송, 반송, 클릭 등)의 상세 정보를 포함합니다.</p>
<p><span class="mark-ok">✅ C — Amazon Athena로 S3 로그 쿼리</span></p>
<p>S3에 저장된 SES 로그를 Athena SQL 쿼리로 수신자, 제목, 전송 시간 기준 검색 가능합니다.</p>
<p><strong>D+E가 아닌 이유:</strong> CloudWatch SES 이벤트는 수신자, 메일 헤더, 타임스탬프와 같은 상세 정보를 포함하지 않습니다. Firehose→S3→Athena 조합이 더 풍부한 이메일 메타데이터를 제공합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — CloudTrail은 SES API 호출을 로깅하지만 개별 이메일의 수신자, 제목과 같은 메타데이터는 포함하지 않습니다.</p>
<p><span class="mark-no">❌ D, E</span> — CloudWatch SES 이벤트는 수신자, 제목 등의 이메일 헤더 정보를 포함하지 않습니다. Athena는 CloudWatch 로그를 직접 쿼리하는 데 최적화되어 있지 않습니다.</p>`,
    disc: [
      { ans: 'AC (40%)', txt: 'SES 구성 세트 → Firehose → S3가 수신자/제목/시간 포함. Athena로 SQL 쿼리.' },
      { ans: 'DE (40%)', txt: 'CloudWatch가 더 간단하다는 의견. 그러나 CW SES 이벤트는 이메일 헤더 미포함.' },
    ],
  },
  {
    n: 524,
    en: `<p>A company migrated to AWS and uses AWS Business Support. The company wants to monitor the cost-effectiveness of Amazon EC2 instances across AWS accounts. The EC2 instances have tags for department, business unit, and environment. Development EC2 instances have high cost but low utilization.</p>
<p>The company needs to detect and stop any underutilized development EC2 instances. Instances are underutilized if they had 10% or less average daily CPU utilization and 5 MB or less network I/O for at least 4 of the past 14 days.</p>
<p>Which solution will meet these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 AWS로 마이그레이션하여 AWS Business Support를 사용합니다. 개발 EC2 인스턴스의 비용이 높지만 사용률이 낮습니다.</p>
<p>회사는 사용률이 낮은 개발 EC2 인스턴스를 감지하여 중지해야 합니다. 인스턴스는 지난 14일 중 최소 4일 동안 평균 일일 CPU 사용률이 10% 이하이고 네트워크 I/O가 5MB 이하인 경우 사용률이 낮은 것입니다.</p>
<p>최소한의 운영 오버헤드로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Configure Amazon CloudWatch dashboards to monitor EC2 instance utilization based on tags for department, business unit, and environment. Create an Amazon EventBridge rule that invokes an AWS Lambda function to stop underutilized development EC2 instances.', ko: 'CloudWatch 대시보드를 구성하여 태그 기반으로 EC2 사용률을 모니터링합니다. EventBridge 규칙으로 Lambda를 호출하여 사용률이 낮은 개발 EC2를 중지합니다.' },
      { k: 'B', en: 'Configure AWS Systems Manager to track EC2 instance utilization and report underutilized instances to Amazon CloudWatch. Filter the CloudWatch data by tags. Create an Amazon EventBridge rule that invokes an AWS Lambda function to stop underutilized development EC2 instances.', ko: 'AWS Systems Manager를 구성하여 EC2 사용률을 추적하고 CloudWatch에 보고합니다. 태그로 필터링하고 EventBridge 규칙으로 Lambda를 호출하여 인스턴스를 중지합니다.' },
      { k: 'C', en: 'Create an Amazon EventBridge rule to detect low utilization of EC2 instances reported by AWS Trusted Advisor. Configure the rule to invoke an AWS Lambda function that filters the data by tags for department, business unit, and environment and stops underutilized development EC2 instances.', ko: 'AWS Trusted Advisor가 보고하는 EC2 인스턴스의 낮은 사용률을 감지하는 EventBridge 규칙을 만듭니다. 태그로 데이터를 필터링하여 사용률이 낮은 개발 EC2를 중지하는 Lambda 함수를 호출하도록 구성합니다.' },
      { k: 'D', en: 'Create an AWS Lambda function to run daily to retrieve utilization data for all EC2 instances. Save the data to an Amazon DynamoDB table. Create an Amazon QuickSight dashboard that uses the DynamoDB table as a data source to identify and stop underutilized development EC2 instances.', ko: '모든 EC2 사용률 데이터를 매일 조회하는 Lambda 함수를 만들고 DynamoDB에 저장합니다. DynamoDB를 데이터 소스로 사용하는 QuickSight 대시보드를 만들어 식별하고 중지합니다.' },
    ],
    answer: ['C'],
    vote: '67% C / 33% A',
    explain: `<p><span class="mark-ok">✅ C — AWS Trusted Advisor + EventBridge + Lambda</span></p>
<p>AWS Trusted Advisor의 "Low Utilization Amazon EC2 Instances" 체크는 정확히 이 기준을 사용합니다: 지난 14일 중 최소 4일 동안 평균 CPU 사용률 10% 이하 + 네트워크 I/O 5MB 이하.</p>
<ul>
<li>Trusted Advisor가 자동으로 조건 평가 → 운영 오버헤드 최소화</li>
<li>EventBridge로 Trusted Advisor 결과 수신 → Lambda로 태그 필터링 후 중지</li>
<li>AWS Business Support 구독 시 Trusted Advisor 전체 체크 사용 가능</li>
</ul>
<p><a href="https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html#low-utilization-amazon-ec2-instances" target="_blank">AWS 공식 문서: Trusted Advisor 낮은 EC2 사용률 체크</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudWatch 대시보드는 시각화 도구이며 14일 동안의 복합 조건을 자동으로 평가하는 기능이 없습니다. 별도의 알람 설정이 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — Systems Manager는 EC2 사용률 집계 및 복합 조건 평가 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda + DynamoDB + QuickSight는 가장 복잡하고 운영 오버헤드가 큽니다.</p>`,
    disc: [
      { ans: 'C (67%)', txt: 'Trusted Advisor가 정확히 동일한 기준(14일 중 4일, CPU 10%, 네트워크 5MB)으로 자동 평가. 최소 운영 오버헤드.' },
      { ans: 'A (33%)', txt: 'CloudWatch 알람으로도 구현 가능하지만 복합 조건 설정이 복잡하고 운영 오버헤드가 더 큼.' },
    ],
  },
  {
    n: 525,
    en: `<p>A company is hosting an application on AWS for a project that will run for the next 3 years. The application consists of 20 Amazon EC2 On-Demand Instances that are registered in a target group for a Network Load Balancer (NLB). The instances are spread across two Availability Zones. The application is stateless and runs 24 hours a day, 7 days a week.</p>
<p>The company receives reports from users who are experiencing slow responses from the application. Performance metrics show that the instances are at 10% CPU utilization during normal application use. However, the CPU utilization increases to 100% at busy times, which typically last for a few hours.</p>
<p>The company needs a new architecture to resolve the problem of slow responses from the application.</p>
<p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>한 회사가 향후 3년간 운영될 프로젝트를 위해 AWS에서 애플리케이션을 호스팅합니다. NLB 대상 그룹에 등록된 20개의 EC2 온디맨드 인스턴스로 구성되어 있으며 상태 비저장으로 24/7 운영됩니다.</p>
<p>일반 사용 시 CPU 사용률은 10%이지만 몇 시간 동안 지속되는 바쁜 시간에는 100%로 증가합니다.</p>
<p>가장 비용 효율적으로 느린 응답 문제를 해결하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an Auto Scaling group. Attach the Auto Scaling group to the target group of the NLB. Set the minimum capacity to 20 and the desired capacity to 28. Purchase Reserved Instances for 20 instances.', ko: 'Auto Scaling 그룹을 만들고 NLB 대상 그룹에 연결합니다. 최소 용량 20, 원하는 용량 28로 설정합니다. 20개 인스턴스에 대한 예약 인스턴스를 구매합니다.' },
      { k: 'B', en: 'Create a Spot Fleet that has a request type of request. Set the TotalTargetCapacity parameter to 20. Set the DefaultTargetCapacityType parameter to On-Demand. Specify the NLB when creating the Spot Fleet.', ko: '요청 유형이 request인 Spot Fleet을 만들고 TotalTargetCapacity를 20으로 설정합니다. DefaultTargetCapacityType을 On-Demand로 설정합니다.' },
      { k: 'C', en: 'Create a Spot Fleet that has a request type of maintain. Set the TotalTargetCapacity parameter to 20. Set the DefaultTargetCapacityType parameter to Spot. Replace the NLB with an Application Load Balancer.', ko: '유지 관리 유형의 Spot Fleet을 만들고 TotalTargetCapacity를 20으로 설정합니다. DefaultTargetCapacityType을 Spot으로 설정합니다. NLB를 ALB로 교체합니다.' },
      { k: 'D', en: 'Create an Auto Scaling group. Attach the Auto Scaling group to the target group of the NLB. Set the minimum capacity to 4 and the maximum capacity to 28. Purchase Reserved Instances for four instances.', ko: 'Auto Scaling 그룹을 만들고 NLB 대상 그룹에 연결합니다. 최소 용량 4, 최대 용량 28로 설정합니다. 4개 인스턴스에 대한 예약 인스턴스를 구매합니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — Auto Scaling(min 4, max 28) + 4개 예약 인스턴스</span></p>
<p>비용 효율성 분석:</p>
<ul>
<li><strong>일반 시간(10% CPU)</strong>: 20개 인스턴스 중 실제 필요한 것은 2개(20×10%=2). 최소 4개로 여유를 두어도 절약 가능</li>
<li><strong>피크 시간(100% CPU)</strong>: 최대 28개까지 자동 확장으로 대응</li>
<li><strong>예약 인스턴스 4개</strong>: 베이스라인 부하만 커버하여 24/7 비용 절감</li>
<li>A(min 20 + RI 20)보다 훨씬 저렴. 일반 시간에 20개 유지는 낭비</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 최소 20개를 항상 유지하면 10% 사용률 시간에 18개가 낭비됩니다. 비용 비효율적입니다.</p>
<p><span class="mark-no">❌ B, C</span> — Spot Fleet은 인스턴스 종료 가능성이 있어 가용성 감소 우려가 있습니다. 상태 비저장이라도 피크 시간에 인스턴스 부족 위험이 있습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: '10% CPU = 20개 중 2개 필요 → min 4로 충분. RI 4개로 베이스라인 절약. 피크는 max 28까지 확장.' },
    ],
  },
  {
    n: 526,
    en: `<p>A company is building an application to collect and transmit sensor data from a factory. The application will use AWS IoT Core to send data from hundreds of devices to an Amazon S3 data lake. The company must enrich the data before loading the data into Amazon S3.</p>
<p>The application will transmit the sensor data every 5 seconds. New sensor data must be available in Amazon S3 less than 30 minutes after the application collects the data. No other applications are processing the sensor data from AWS IoT Core.</p>
<p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>한 회사가 공장에서 센서 데이터를 수집하고 전송하는 애플리케이션을 구축하고 있습니다. 애플리케이션은 AWS IoT Core를 사용하여 수백 대의 기기에서 Amazon S3 데이터 레이크로 데이터를 전송합니다. Amazon S3에 로드하기 전에 데이터를 보강해야 합니다.</p>
<p>애플리케이션은 5초마다 센서 데이터를 전송하며, 수집 후 30분 이내에 S3에서 새 센서 데이터를 사용할 수 있어야 합니다. 다른 애플리케이션은 IoT Core에서 센서 데이터를 처리하지 않습니다.</p>
<p>가장 비용 효율적으로 이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a topic in AWS IoT Core to ingest the sensor data. Create an AWS Lambda function to enrich the data and to write the data to Amazon S3. Configure an AWS IoT rule action to invoke the Lambda function.', ko: 'AWS IoT Core에서 센서 데이터를 수집하기 위한 토픽을 만듭니다. 데이터를 보강하고 Amazon S3에 쓰는 AWS Lambda 함수를 만듭니다. Lambda 함수를 호출하도록 AWS IoT 규칙 작업을 구성합니다.' },
      { k: 'B', en: 'Use AWS IoT Core Basic Ingest to ingest the sensor data. Configure an AWS IoT rule action to write the data to Amazon Kinesis Data Firehose. Set the Kinesis Data Firehose buffering interval to 900 seconds. Use Kinesis Data Firehose to invoke an AWS Lambda function to enrich the data. Configure Kinesis Data Firehose to deliver the data to Amazon S3.', ko: 'AWS IoT Core Basic Ingest로 센서 데이터를 수집합니다. IoT 규칙으로 Kinesis Data Firehose에 씁니다. 버퍼링 간격을 900초로 설정합니다. Lambda로 데이터를 보강하고 Firehose로 S3에 전달합니다.' },
      { k: 'C', en: 'Create a topic in AWS IoT Core to ingest the sensor data. Configure an AWS IoT rule action to send the data to an Amazon Timestream table. Create an AWS Lambda function to read the data from Timestream. Configure the Lambda function to enrich the data and to write the data to Amazon S3.', ko: 'IoT Core에서 토픽을 만들고 데이터를 Timestream 테이블로 보냅니다. Lambda 함수로 Timestream에서 데이터를 읽어 보강하고 S3에 씁니다.' },
      { k: 'D', en: 'Use AWS IoT Core Basic Ingest to ingest the sensor data. Configure an AWS IoT rule action to write the data to Amazon Kinesis Data Streams. Create a consumer AWS Lambda function to process the data from Kinesis Data Streams and to enrich the data. Call the S3 PutObject API operation from the Lambda function to write the data to Amazon S3.', ko: 'AWS IoT Core Basic Ingest로 센서 데이터를 수집합니다. IoT 규칙으로 Kinesis Data Streams에 씁니다. 소비자 Lambda 함수로 데이터를 처리하고 보강합니다. S3 PutObject API를 호출하여 S3에 씁니다.' },
    ],
    answer: ['B'],
    vote: '46% B / 46% A',
    explain: `<p><span class="mark-ok">✅ B — IoT Core Basic Ingest + Firehose(900초 버퍼) + Lambda 보강 + S3</span></p>
<p>비용 효율성과 요구사항을 모두 충족합니다:</p>
<ul>
<li><strong>IoT Core Basic Ingest</strong>: 메시지 브로커 비용 없이 직접 IoT 규칙으로 데이터 전송 → 비용 절감</li>
<li><strong>Kinesis Data Firehose 900초 버퍼</strong>: 30분(1800초) 요구사항 내 S3 전달 보장. 배치 처리로 Lambda 호출 횟수 감소</li>
<li><strong>Firehose Lambda 변환</strong>: 배치 단위 데이터 보강으로 개별 Lambda 호출보다 비용 효율적</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/iot/ingesting-enriched-iot-data-into-amazon-s3-using-amazon-kinesis-data-firehose/" target="_blank">AWS 블로그: IoT + Firehose + Lambda + S3</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — IoT 규칙에서 Lambda를 직접 호출하면 5초마다 수백 개 기기에서 대량의 Lambda 호출이 발생합니다. 비용이 높아집니다.</p>
<p><span class="mark-no">❌ C</span> — Timestream은 시계열 데이터베이스로 추가 비용이 발생합니다. 단순 전달 파이프라인에 과도합니다.</p>
<p><span class="mark-no">❌ D</span> — Kinesis Data Streams + Lambda 소비자는 Firehose보다 관리 복잡도가 높습니다. 샤드 관리, 소비자 관리 등 운영 오버헤드가 증가합니다.</p>`,
    disc: [
      { ans: 'B (46%)', txt: 'Basic Ingest(비용 절감) + Firehose 배치(Lambda 호출 감소) + 900초 버퍼(30분 요건 충족).' },
      { ans: 'A (46%)', txt: '가장 단순한 아키텍처. 그러나 대량 Lambda 직접 호출 비용이 높을 수 있음.' },
    ],
  },
  {
    n: 527,
    en: `<p>A company is collecting data from a large set of IoT devices. The data is stored in an Amazon S3 data lake. Data scientists perform analytics on Amazon EC2 instances that run in two public subnets in a VPC in a separate AWS account.</p>
<p>The data scientists need access to the data lake from the EC2 instances. The EC2 instances already have an assigned role with permissions to access Amazon S3.</p>
<p>According to company policies, only authorized networks are allowed to have access to the IoT data.</p>
<p>Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)</p>`,
    ko: `<p>한 회사가 대규모 IoT 기기에서 데이터를 수집합니다. 데이터는 Amazon S3 데이터 레이크에 저장됩니다. 데이터 과학자들은 별도 AWS 계정의 VPC에 있는 퍼블릭 서브넷의 EC2 인스턴스에서 분석을 수행합니다.</p>
<p>회사 정책에 따라 승인된 네트워크만 IoT 데이터에 접근할 수 있습니다.</p>
<p>이러한 요구사항을 충족하기 위한 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Create a gateway VPC endpoint for Amazon S3 in the data scientists\' VPC.', ko: '데이터 과학자의 VPC에 Amazon S3에 대한 게이트웨이 VPC 엔드포인트를 만듭니다.' },
      { k: 'B', en: 'Create an S3 access point in the data scientists\' AWS account for the data lake.', ko: '데이터 과학자의 AWS 계정에서 데이터 레이크에 대한 S3 액세스 포인트를 만듭니다.' },
      { k: 'C', en: 'Update the EC2 instance role. Add a policy with a condition that allows the s3:GetObject action when the value for the s3:DataAccessPointArn condition key is a valid access point ARN.', ko: 'EC2 인스턴스 역할을 업데이트합니다. s3:DataAccessPointArn 조건 키의 값이 유효한 ARN일 때 s3:GetObject를 허용하는 조건이 있는 정책을 추가합니다.' },
      { k: 'D', en: 'Update the VPC route table to route S3 traffic to an S3 access point.', ko: 'S3 액세스 포인트로 S3 트래픽을 라우팅하도록 VPC 라우팅 테이블을 업데이트합니다.' },
      { k: 'E', en: 'Add an S3 bucket policy with a condition that allows the s3:GetObject action when the value for the s3:DataAccessPointArn condition key is a valid access point ARN.', ko: 's3:DataAccessPointArn 조건 키의 값이 유효한 ARN인 경우 s3:GetObject를 허용하는 조건이 포함된 S3 버킷 정책을 추가합니다.' },
    ],
    answer: ['B', 'E'],
    vote: '54% AE / 46% BE',
    explain: `<p><span class="mark-ok">✅ B — 데이터 과학자 계정에 S3 액세스 포인트 생성</span></p>
<p>S3 액세스 포인트는 교차 계정 접근을 세밀하게 제어하는 데 사용됩니다. 특정 네트워크나 계정에서만 접근 가능하도록 정책을 설정할 수 있습니다.</p>
<p><span class="mark-ok">✅ E — S3 버킷 정책 + DataAccessPointArn 조건</span></p>
<p>버킷 정책에서 <code>s3:DataAccessPointArn</code> 조건을 사용하면 특정 액세스 포인트를 통한 접근만 허용합니다. "승인된 네트워크만 접근" 요구사항을 버킷 정책 수준에서 강제합니다.</p>
<p><strong>A가 아닌 이유:</strong> 게이트웨이 VPC 엔드포인트는 교차 계정 연결을 지원하지 않습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 게이트웨이 VPC 엔드포인트는 동일 계정/리전 내에서만 작동합니다. 다른 AWS 계정의 S3 버킷에는 직접 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — EC2 역할에 DataAccessPointArn 조건을 추가하면 역할에서는 작동하지만 버킷 측 접근 제어가 없어 보안이 불완전합니다.</p>
<p><span class="mark-no">❌ D</span> — 라우팅 테이블은 S3 액세스 포인트를 대상으로 구성할 수 없습니다.</p>`,
    disc: [
      { ans: 'AE (54%)', txt: 'A(게이트웨이 엔드포인트)가 네트워크 제어에 도움이 된다는 주장. 그러나 교차 계정 미지원으로 BE가 더 정확.' },
      { ans: 'BE (46%)', txt: 'B로 교차 계정 액세스 포인트 생성 + E로 버킷 정책 제한.' },
    ],
  },
  {
    n: 528,
    en: `<p>A company wants to migrate its website to AWS. The website uses containers that are deployed in an on-premises, self-managed Kubernetes cluster. All data for the website is stored in an on-premises PostgreSQL database.</p>
<p>The company has decided to migrate the on-premises Kubernetes cluster to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster will use EKS managed node groups with a static number of nodes. The company will also migrate the on-premises database to an Amazon RDS for PostgreSQL database.</p>
<p>A solutions architect needs to estimate the total cost of ownership (TCO) for this workload before the migration.</p>
<p>Which solution will provide the required TCO information?</p>`,
    ko: `<p>한 회사가 온프레미스 자체 관리형 Kubernetes 클러스터에 배포된 컨테이너를 사용하는 웹사이트를 AWS로 마이그레이션하려고 합니다. 회사는 온프레미스 Kubernetes 클러스터를 Amazon EKS 클러스터로 마이그레이션하고, 온프레미스 데이터베이스를 Amazon RDS for PostgreSQL로 마이그레이션하기로 결정했습니다.</p>
<p>솔루션 아키텍트는 마이그레이션 전에 이 워크로드의 TCO를 추정해야 합니다.</p>
<p>필요한 TCO 정보를 제공하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Request access to Migration Evaluator. Run the Migration Evaluator Collector and import the data. Configure a scenario. Export a Quick Insights report from Migration Evaluator.', ko: 'Migration Evaluator에 대한 액세스를 요청합니다. Migration Evaluator Collector를 실행하고 데이터를 가져옵니다. 시나리오를 구성하고 Quick Insights 보고서를 내보냅니다.' },
      { k: 'B', en: 'Launch AWS Database Migration Service (AWS DMS) for the on-premises database. Generate an assessment report. Create an estimate in AWS Pricing Calculator for the costs of the EKS migration.', ko: '온프레미스 데이터베이스에 대한 AWS DMS를 시작합니다. 평가 보고서를 생성합니다. AWS 가격 계산기에서 EKS 마이그레이션 비용에 대한 추정치를 만듭니다.' },
      { k: 'C', en: 'Initialize AWS Application Migration Service. Add the on-premises servers as source servers. Launch a test instance. Output a TCO report from Application Migration Service.', ko: 'AWS Application Migration Service를 초기화합니다. 온프레미스 서버를 소스 서버로 추가합니다. 테스트 인스턴스를 시작합니다. TCO 보고서를 출력합니다.' },
      { k: 'D', en: 'Access the AWS Cloud Economics Center webpage to assess the AWS Cloud Value Framework. Create an AWS Cost and Usage report from the Cloud Value Framework.', ko: 'AWS Cloud Economics Center 웹페이지에 액세스하여 AWS Cloud Value Framework를 평가합니다. Cost and Usage Report를 만듭니다.' },
    ],
    answer: ['A'],
    vote: '80% A / 20% B',
    explain: `<p><span class="mark-ok">✅ A — Migration Evaluator + Quick Insights 보고서</span></p>
<p>마이그레이션 TCO 추정의 전용 AWS 도구입니다:</p>
<ul>
<li><strong>Migration Evaluator Collector</strong>: 온프레미스 환경에서 데이터 수집</li>
<li><strong>시나리오 구성</strong>: EKS(컨테이너), RDS(DB) 마이그레이션 시나리오 설정</li>
<li><strong>Quick Insights 보고서</strong>: 상세 TCO 분석 및 비용 절감 추정치 제공</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS DMS는 데이터베이스 마이그레이션 도구이며 TCO 추정 도구가 아닙니다. AWS Pricing Calculator는 기존 환경을 분석하지 않고 수동 입력에 의존합니다.</p>
<p><span class="mark-no">❌ C</span> — Application Migration Service는 서버를 마이그레이션하는 도구이며 TCO 보고서를 출력하는 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Cloud Economics Center는 일반적인 클라우드 경제성 정보를 제공하며 특정 환경에 대한 TCO 분석이 아닙니다.</p>`,
    disc: [
      { ans: 'A (80%)', txt: 'Migration Evaluator가 온프레미스 데이터를 수집하여 정확한 TCO 분석 제공. 마이그레이션 TCO 전용 도구.' },
      { ans: 'B (20%)', txt: 'DMS + Pricing Calculator 조합이 더 정확하다는 주장. 그러나 DMS는 마이그레이션 도구이지 TCO 도구가 아님.' },
    ],
  },
  {
    n: 529,
    en: `<p>An events company runs a ticketing platform on AWS. The company's customers configure and schedule their events on the platform. The events result in large increases of traffic to the platform. The company knows the date and time of each customer's events.</p>
<p>The company runs the platform on an Amazon Elastic Container Service (Amazon ECS) cluster. The ECS cluster consists of Amazon EC2 On-Demand Instances that are in an Auto Scaling group. The Auto Scaling group uses a predictive scaling policy.</p>
<p>The ECS cluster makes frequent requests to an Amazon S3 bucket to download ticket assets. The ECS cluster and the S3 bucket are in the same AWS Region and the same AWS account. Traffic between the ECS cluster and the S3 bucket flows across a NAT gateway.</p>
<p>The company needs to optimize the cost of the platform without decreasing the platform's availability.</p>
<p>Which combination of steps will meet these requirements? (Choose two.)</p>`,
    ko: `<p>이벤트 회사가 AWS에서 티켓팅 플랫폼을 운영합니다. 회사는 각 고객의 이벤트 날짜와 시간을 알고 있습니다.</p>
<p>ECS 클러스터는 Auto Scaling 그룹의 EC2 온디맨드 인스턴스로 구성되며 예측적 확장 정책을 사용합니다. ECS 클러스터와 S3 버킷 간의 트래픽은 NAT 게이트웨이를 통해 흐릅니다.</p>
<p>플랫폼의 가용성을 저하시키지 않고 비용을 최적화해야 합니다.</p>
<p>이러한 요구사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Create a gateway VPC endpoint for the S3 bucket.', ko: 'S3 버킷에 대한 게이트웨이 VPC 엔드포인트를 만듭니다.' },
      { k: 'B', en: 'Add another ECS capacity provider that uses an Auto Scaling group of Spot Instances. Configure the new capacity provider strategy to have the same weight as the existing capacity provider strategy.', ko: 'Spot 인스턴스의 Auto Scaling 그룹을 사용하는 다른 ECS 용량 공급자를 추가합니다. 새 용량 공급자 전략이 기존 전략과 동일한 가중치를 갖도록 구성합니다.' },
      { k: 'C', en: 'Create On-Demand Capacity Reservations for the applicable instance type for the time period of the scheduled scaling policies.', ko: '예약된 스케일링 정책의 기간 동안 해당 인스턴스 유형에 대한 온디맨드 용량 예약을 만듭니다.' },
      { k: 'D', en: 'Enable S3 Transfer Acceleration on the S3 bucket.', ko: 'S3 버킷에서 S3 전송 가속을 활성화합니다.' },
      { k: 'E', en: 'Replace the predictive scaling policy with scheduled scaling policies for the scheduled events.', ko: '예정된 이벤트에 대한 예측적 확장 정책을 예약된 확장 정책으로 교체합니다.' },
    ],
    answer: ['A', 'E'],
    vote: '100% AE',
    explain: `<p><span class="mark-ok">✅ A — S3 게이트웨이 VPC 엔드포인트</span></p>
<p>동일 리전/계정의 ECS 클러스터와 S3 버킷 간 트래픽이 현재 NAT 게이트웨이를 통해 흐릅니다. 게이트웨이 VPC 엔드포인트는 무료로 제공되며 NAT 게이트웨이 데이터 처리 비용을 제거합니다.</p>
<p><span class="mark-ok">✅ E — 예측적 확장 → 예약된 확장 정책으로 교체</span></p>
<p>회사는 이미 각 고객 이벤트의 날짜와 시간을 알고 있습니다. 예측적 스케일링보다 예약된 스케일링이 더 정확하고 비용 효율적입니다. 불필요하게 일찍 확장하지 않아 온디맨드 인스턴스 비용을 절감합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Spot 인스턴스는 가용성을 감소시킬 수 있습니다. "가용성을 저하시키지 않고" 요구사항과 충돌합니다.</p>
<p><span class="mark-no">❌ C</span> — 온디맨드 용량 예약은 사용 여부와 관계없이 요금이 부과되어 비용이 증가할 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — S3 Transfer Acceleration은 업로드 속도 향상용이며 추가 비용이 발생합니다. 동일 리전 트래픽에는 효과가 없습니다.</p>`,
    disc: [
      { ans: 'AE (100%)', txt: 'A: NAT GW → S3 게이트웨이 엔드포인트 무료. E: 알려진 이벤트 일정 → 예약 스케일링이 예측 스케일링보다 정확하고 저렴.' },
    ],
  },
];