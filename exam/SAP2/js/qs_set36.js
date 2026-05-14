window.QS_SET36 = [
  {
    n: 351,
    en: `A company has a project that is launching Amazon EC2 instances that are larger than required. The project's account cannot be part of the company's organization in AWS Organizations due to policy restrictions to keep this activity outside of corporate IT. The company wants to allow only the launch of t3.small EC2 instances by developers in the project's account. These EC2 instances must be restricted to the us-east-2 Region.<br><br>What should a solutions architect do to meet these requirements?`,
    ko: `한 회사에 필요한 것보다 더 큰 Amazon EC2 인스턴스를 시작하는 프로젝트가 있습니다. 이 활동을 기업 IT 외부에 유지하라는 정책 제한으로 인해 프로젝트 계정은 AWS Organizations의 회사 조직에 속할 수 없습니다. 회사는 프로젝트 계정의 개발자가 t3.small EC2 인스턴스만 시작하도록 허용하려 합니다. 이 EC2 인스턴스는 us-east-2 리전으로 제한되어야 합니다.<br><br>솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a new developer account. Move all EC2 instances, users, and assets into us-east-2. Add the account to the company's organization in AWS Organizations. Enforce a tagging policy that denotes Region affinity.`, ko: `새 개발자 계정을 만듭니다. 모든 EC2 인스턴스, 사용자 및 자산을 us-east-2로 이동합니다. AWS Organizations의 회사 조직에 계정을 추가합니다. 리전 선호도를 나타내는 태그 지정 정책을 시행합니다.` },
      { k: 'B', en: `Create an SCP that denies the launch of all EC2 instances except t3.small EC2 instances in us-east-2. Attach the SCP to the project's account.`, ko: `us-east-2에서 t3.small EC2 인스턴스를 제외한 모든 EC2 인스턴스의 시작을 거부하는 SCP를 생성합니다. SCP를 프로젝트 계정에 연결합니다.` },
      { k: 'C', en: `Create and purchase a t3.small EC2 Reserved Instance for each developer in us-east-2. Assign each developer a specific EC2 instance with their name as the tag.`, ko: `us-east-2의 각 개발자에 대해 t3.small EC2 예약 인스턴스를 생성하고 구매합니다. 각 개발자에게 이름을 태그로 사용하여 특정 EC2 인스턴스를 할당합니다.` },
      { k: 'D', en: `Create an IAM policy that allows the launch of only t3.small EC2 instances in us-east-2. Attach the policy to the roles and groups that the developers use in the project's account.`, ko: `us-east-2에서 t3.small EC2 인스턴스만 시작하도록 허용하는 IAM 정책을 생성합니다. 개발자가 프로젝트 계정에서 사용하는 역할 및 그룹에 정책을 연결합니다.` },
    ],
    answer: ['D'],
    vote: '91% D',
    explain: `<p><span class="mark-ok">✅ D — IAM 정책으로 인스턴스 유형과 리전 제한</span></p>
<p>핵심 조건: 프로젝트 계정은 AWS Organizations에 속할 수 없습니다. 따라서 <strong>SCP(서비스 제어 정책)는 사용 불가</strong>합니다. SCP는 Organizations 멤버 계정에만 적용됩니다.</p>
<p>IAM 정책에서 <code>ec2:RunInstances</code> 조건으로 <code>ec2:InstanceType</code>을 <code>t3.small</code>로, <code>aws:RequestedRegion</code>을 <code>us-east-2</code>로 제한하면 독립 계정에서도 원하는 제어를 구현할 수 있습니다.</p>
<pre><code>Condition: {
  "StringEquals": {
    "ec2:InstanceType": "t3.small",
    "aws:RequestedRegion": "us-east-2"
  }
}</code></pre>
<p>📎 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ExamplePolicies_EC2.html" target="_blank">EC2 IAM 정책 예제 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Organizations에 계정을 추가하면 정책 제한("기업 IT 외부 유지")을 위반합니다. 태그 지정 정책도 인스턴스 유형을 제한하는 메커니즘이 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — SCP는 AWS Organizations에 속한 계정에만 적용됩니다. 프로젝트 계정은 조직에 속할 수 없으므로 SCP를 연결할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 예약 인스턴스는 비용 할인 메커니즘이며 인스턴스 유형 시작을 제한하는 방법이 아닙니다. 개발자가 여전히 다른 유형의 인스턴스를 시작할 수 있습니다.</p>`,
    disc: [
      { ans: 'D (91%)', txt: '조직에 속할 수 없어 SCP 사용 불가. IAM 정책의 Condition으로 InstanceType과 RequestedRegion을 제한하는 것이 독립 계정에서 유일하게 실행 가능한 솔루션.' },
    ]
  },

  {
    n: 352,
    en: `A scientific company needs to process text and image data from an Amazon S3 bucket. The data is collected from several radar stations during a live, time-critical phase of a deep space mission. The radar stations upload the data to the source S3 bucket. The data is prefixed by radar station identification number.<br><br>The company created a destination S3 bucket in a second account. Data must be copied from the source S3 bucket to the destination S3 bucket to meet a compliance objective. This replication occurs through the use of an S3 replication rule to cover all objects in the source S3 bucket.<br><br>One specific radar station is identified as having the most accurate data. Data replication at this radar station must be monitored for completion within 30 minutes after the radar station uploads the objects to the source S3 bucket.<br><br>What should a solutions architect do to meet these requirements?`,
    ko: `한 과학 회사가 Amazon S3 버킷의 텍스트 및 이미지 데이터를 처리해야 합니다. 데이터는 심우주 임무의 시간에 민감한 실시간 단계 동안 여러 레이더 스테이션에서 수집됩니다. 레이더 스테이션은 데이터를 소스 S3 버킷에 업로드합니다. 데이터에는 레이더 스테이션 식별 번호가 접두사로 붙습니다.<br><br>회사는 두 번째 계정에 대상 S3 버킷을 생성했습니다. 규정 준수 목표를 충족하기 위해 소스 S3 버킷에서 대상 S3 버킷으로 데이터를 복사해야 합니다. 이 복제는 소스 S3 버킷의 모든 객체를 포괄하는 S3 복제 규칙을 통해 이루어집니다.<br><br>하나의 특정 레이더 스테이션이 가장 정확한 데이터를 보유한 것으로 식별됩니다. 이 레이더 스테이션의 데이터 복제는 객체 업로드 후 30분 이내에 완료되도록 모니터링해야 합니다.<br><br>솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Set up an AWS DataSync agent to replicate the prefixed data from the source S3 bucket to the destination S3 bucket. Select to use all available bandwidth on the task, and monitor the task to ensure that it is in the TRANSFERRING status. Create an Amazon EventBridge rule to initiate an alert if this status changes.`, ko: `AWS DataSync 에이전트를 설정하여 소스 S3 버킷에서 대상 S3 버킷으로 접두사가 붙은 데이터를 복제합니다. 작업에서 사용 가능한 모든 대역폭을 사용하도록 선택하고 TRANSFERRING 상태인지 모니터링합니다. 상태가 변경되면 알림을 시작하는 Amazon EventBridge 규칙을 생성합니다.` },
      { k: 'B', en: `In the second account, create another S3 bucket to receive data from the radar station with the most accurate data. Set up a new replication rule for this new S3 bucket to separate the replication from the other radar stations. Monitor the maximum replication time to the destination. Create an Amazon EventBridge rule to initiate an alert when the time exceeds the desired threshold.`, ko: `두 번째 계정에서 가장 정확한 데이터를 가진 레이더 스테이션의 데이터를 수신하기 위한 새 S3 버킷을 생성합니다. 다른 레이더 스테이션과 복제를 분리하기 위해 이 새 S3 버킷에 대한 새 복제 규칙을 설정합니다. 대상까지의 최대 복제 시간을 모니터링합니다. 시간이 원하는 임계값을 초과하면 알림을 시작하는 EventBridge 규칙을 생성합니다.` },
      { k: 'C', en: `Enable Amazon S3 Transfer Acceleration on the source S3 bucket, and configure the radar station with the most accurate data to use the new endpoint. Monitor the S3 destination bucket's TotalRequestLatency metric. Create an Amazon EventBridge rule to initiate an alert if this status changes.`, ko: `소스 S3 버킷에서 Amazon S3 전송 가속을 활성화하고 가장 정확한 데이터를 가진 레이더 스테이션이 새 엔드포인트를 사용하도록 구성합니다. S3 대상 버킷의 TotalRequestLatency 지표를 모니터링합니다. 상태가 변경되면 알림을 시작하는 EventBridge 규칙을 생성합니다.` },
      { k: 'D', en: `Create a new S3 replication rule on the source S3 bucket that filters for the keys that use the prefix of the radar station with the most accurate data. Enable S3 Replication Time Control (S3 RTC). Monitor the maximum replication time to the destination. Create an Amazon EventBridge rule to initiate an alert when the time exceeds the desired threshold.`, ko: `가장 정확한 데이터를 가진 레이더 스테이션의 접두사를 사용하는 키를 필터링하는 새로운 S3 복제 규칙을 소스 S3 버킷에 생성합니다. S3 복제 시간 제어(S3 RTC)를 활성화합니다. 대상까지의 최대 복제 시간을 모니터링합니다. 시간이 원하는 임계값을 초과하면 알림을 시작하는 EventBridge 규칙을 생성합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — S3 RTC(복제 시간 제어) + 접두사 필터 + EventBridge 알림</span></p>
<p><strong>S3 Replication Time Control(RTC):</strong> S3 RTC는 99.99%의 객체를 15분 이내에 복제하도록 보장하는 SLA를 제공합니다. 30분 이내 완료 모니터링 요구 사항을 충족합니다.</p>
<p><strong>접두사 필터:</strong> 기존 전체 복제 규칙과 별도로, 특정 레이더 스테이션의 접두사를 필터링하는 새 복제 규칙을 생성하면 해당 스테이션에만 RTC와 모니터링을 적용할 수 있습니다.</p>
<p><strong>EventBridge 알림:</strong> S3 복제 지표(ReplicationLatency)를 모니터링하고 임계값 초과 시 알림을 전송합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-time-control.html" target="_blank">S3 RTC 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — DataSync는 S3 간 복제에 별도의 에이전트 설정이 필요하여 운영 오버헤드가 큽니다. TRANSFERRING 상태 모니터링은 시간 기반 SLA 보장 방법이 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — 두 번째 계정에 별도 버킷을 생성하고 소스 측에서 데이터를 분리 전송하려면 레이더 스테이션 구성을 변경해야 하는 추가 오버헤드가 발생합니다.</p>
<p><span class="mark-no">❌ C</span> — S3 Transfer Acceleration은 업로드 속도를 높이는 기능으로 복제 완료 시간 모니터링과는 무관합니다. TotalRequestLatency도 복제 지연을 추적하는 지표가 아닙니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'S3 RTC는 접두사 기반 필터링과 결합하여 특정 레이더 스테이션의 복제 시간을 SLA 기반으로 보장하고 모니터링하는 가장 직접적인 솔루션. 추가 인프라 변경 없이 기존 복제 설정에 새 규칙을 추가하는 방식.' },
    ]
  },

  {
    n: 353,
    en: `A company wants to migrate its on-premises data center to the AWS Cloud. This includes thousands of virtualized Linux and Microsoft Windows servers, SAN storage, Java and PHP applications with MySQL, and Oracle databases. There are many dependent services hosted either in the same data center or externally. The technical documentation is incomplete and outdated. A solutions architect needs to understand the current environment and estimate the cloud resource costs after the migration.<br><br>Which tools or services should the solutions architect use to plan the cloud migration? (Choose three.)`,
    ko: `한 회사가 온프레미스 데이터 센터를 AWS 클라우드로 마이그레이션하려고 합니다. 여기에는 수천 개의 가상화된 Linux 및 Microsoft Windows 서버, SAN 스토리지, MySQL이 포함된 Java 및 PHP 애플리케이션, Oracle 데이터베이스가 포함됩니다. 동일한 데이터 센터 또는 외부에서 호스팅되는 종속 서비스가 많이 있습니다. 기술 문서가 불완전하고 오래되었습니다. 솔루션 아키텍트는 현재 환경을 이해하고 마이그레이션 후 클라우드 리소스 비용을 추정해야 합니다.<br><br>솔루션 설계자가 클라우드 마이그레이션을 계획하기 위해 사용해야 하는 도구 또는 서비스는 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `AWS Application Discovery Service`, ko: `AWS Application Discovery Service` },
      { k: 'B', en: `AWS SMS`, ko: `AWS SMS` },
      { k: 'C', en: `AWS X-Ray`, ko: `AWS X-Ray` },
      { k: 'D', en: `AWS Cloud Adoption Readiness Tool (CART)`, ko: `AWS 클라우드 채택 준비 도구(CART)` },
      { k: 'E', en: `Amazon Inspector`, ko: `Amazon Inspector` },
      { k: 'F', en: `AWS Migration Hub`, ko: `AWS Migration Hub` },
    ],
    answer: ['A', 'D', 'F'],
    vote: 'ADF 76%',
    explain: `<p><span class="mark-ok">✅ A, D, F — Application Discovery Service + CART + Migration Hub</span></p>
<p><strong>A — AWS Application Discovery Service:</strong> 온프레미스 서버의 구성, 성능, 네트워크 연결, 프로세스 정보를 자동으로 수집합니다. 불완전한 문서 환경에서 현재 인프라를 이해하는 데 필수적입니다.</p>
<p><strong>D — AWS Cloud Adoption Readiness Tool (CART):</strong> 마이그레이션 후 클라우드 리소스 비용 추정 및 조직의 클라우드 전환 준비 상태를 평가하는 설문 기반 도구입니다. 비용 추정 요구 사항을 충족합니다.</p>
<p><strong>F — AWS Migration Hub:</strong> 모든 마이그레이션 작업의 진행 상황을 단일 위치에서 추적하고 모니터링합니다. 마이그레이션 계획 및 현황 파악에 사용됩니다.</p>
<p>📎 <a href="https://aws.amazon.com/application-discovery/" target="_blank">AWS Application Discovery Service 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS SMS(Server Migration Service)는 2022년 3월 31일부로 중단되었습니다. 또한 SMS는 마이그레이션 실행 도구이며, 현재 환경 파악·비용 추정 도구가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — AWS X-Ray는 실행 중인 애플리케이션의 요청 추적 및 성능 분석 도구입니다. 온프레미스 마이그레이션 계획과는 무관합니다.</p>
<p><span class="mark-no">❌ E</span> — Amazon Inspector는 AWS 환경에서 실행 중인 EC2 인스턴스의 보안 취약점 평가 도구입니다. 온프레미스 환경에서는 직접 작동하지 않습니다.</p>`,
    disc: [
      { ans: 'ADF (76%)', txt: 'ADS는 현재 환경 파악, CART는 비용 추정 및 준비도 평가, Migration Hub는 마이그레이션 추적으로 역할이 명확히 분리됨. SMS는 2022년 종료로 제외.' },
    ]
  },

  {
    n: 354,
    en: `A solutions architect is reviewing an application's resilience before launch. The application runs on an Amazon EC2 instance that is deployed in a private subnet of a VPC. The EC2 instance is provisioned by an Auto Scaling group that has a minimum capacity of 1 and a maximum capacity of 1. The application stores data on an Amazon RDS for MySQL DB instance. The VPC has subnets configured in three Availability Zones and is configured with a single NAT gateway.<br><br>The solutions architect needs to recommend a solution to ensure that the application will operate across multiple Availability Zones.<br><br>Which solution will meet this requirement?`,
    ko: `솔루션 아키텍트가 출시 전에 애플리케이션의 복원력을 검토하고 있습니다. 애플리케이션은 VPC의 프라이빗 서브넷에 배포된 Amazon EC2 인스턴스에서 실행됩니다. EC2 인스턴스는 최소 용량 1, 최대 용량 1인 Auto Scaling 그룹에 의해 프로비저닝됩니다. 애플리케이션은 MySQL용 Amazon RDS DB 인스턴스에 데이터를 저장합니다. VPC에는 3개의 가용 영역에 구성된 서브넷이 있으며 단일 NAT 게이트웨이로 구성됩니다.<br><br>솔루션 설계자는 애플리케이션이 여러 가용 영역에서 작동하도록 보장하는 솔루션을 권장해야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy an additional NAT gateway in the other Availability Zones. Update the route tables with appropriate routes. Modify the RDS for MySQL DB instance to a Multi-AZ configuration. Configure the Auto Scaling group to launch the instances across Availability Zones. Set the minimum capacity and maximum capacity of the Auto Scaling group to 3.`, ko: `다른 가용 영역에 추가 NAT 게이트웨이를 배포합니다. 적절한 경로로 경로 테이블을 업데이트합니다. MySQL용 RDS DB 인스턴스를 다중 AZ 구성으로 수정합니다. Auto Scaling 그룹이 가용 영역 전체에서 인스턴스를 시작하도록 구성합니다. Auto Scaling 그룹의 최소 용량과 최대 용량을 3으로 설정합니다.` },
      { k: 'B', en: `Replace the NAT gateway with a virtual private gateway. Replace the RDS for MySQL DB instance with an Amazon Aurora MySQL DB cluster. Configure the Auto Scaling group to launch instances across all subnets in the VPC. Set the minimum capacity and maximum capacity of the Auto Scaling group to 3.`, ko: `NAT 게이트웨이를 가상 프라이빗 게이트웨이로 교체합니다. MySQL용 RDS DB 인스턴스를 Amazon Aurora MySQL DB 클러스터로 교체합니다. Auto Scaling 그룹이 VPC의 모든 서브넷에서 인스턴스를 시작하도록 구성합니다. Auto Scaling 그룹의 최소 및 최대 용량을 3으로 설정합니다.` },
      { k: 'C', en: `Replace the NAT gateway with a NAT instance. Migrate the RDS for MySQL DB instance to an RDS for PostgreSQL DB instance. Launch a new EC2 instance in the other Availability Zones.`, ko: `NAT 게이트웨이를 NAT 인스턴스로 교체합니다. MySQL용 RDS DB 인스턴스를 PostgreSQL용 RDS DB 인스턴스로 마이그레이션합니다. 다른 가용 영역에서 새 EC2 인스턴스를 시작합니다.` },
      { k: 'D', en: `Deploy an additional NAT gateway in the other Availability Zones. Update the route tables with appropriate routes. Modify the RDS for MySQL DB instance to turn on automatic backups and retain the backups for 7 days. Configure the Auto Scaling group to launch instances across all subnets in the VPC. Keep the minimum capacity and the maximum capacity of the Auto Scaling group at 1.`, ko: `다른 가용 영역에 추가 NAT 게이트웨이를 배포합니다. 경로 테이블을 업데이트합니다. 자동 백업을 활성화하고 백업을 7일 동안 유지하도록 RDS DB 인스턴스를 수정합니다. Auto Scaling 그룹이 VPC의 모든 서브넷에서 인스턴스를 시작하도록 구성합니다. 최소 및 최대 용량은 1로 유지합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — AZ별 NAT 게이트웨이 + RDS Multi-AZ + ASG 다중 AZ 배포</span></p>
<p><strong>AZ별 NAT 게이트웨이:</strong> 단일 NAT 게이트웨이는 단일 장애 지점(SPOF)입니다. 각 AZ에 NAT 게이트웨이를 배포하고 해당 AZ의 프라이빗 서브넷 라우팅 테이블을 업데이트해야 합니다.</p>
<p><strong>RDS Multi-AZ:</strong> 다중 AZ 구성은 기본 DB 장애 시 자동으로 스탠바이 복제본으로 페일오버하여 데이터베이스 가용성을 보장합니다.</p>
<p><strong>ASG 최소 3, 최대 3:</strong> 3개의 AZ에 각 1개씩 인스턴스를 배포하여 AZ 장애 시에도 나머지 AZ에서 애플리케이션이 계속 운영될 수 있습니다.</p>
<p>📎 <a href="https://repost.aws/knowledge-center/nat-gateway-vpc-private-subnet" target="_blank">AZ별 NAT 게이트웨이 모범 사례</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 가상 프라이빗 게이트웨이는 VPN 연결용 구성 요소로, NAT 게이트웨이를 대체하여 인터넷 아웃바운드를 제공하는 용도가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — NAT 게이트웨이를 NAT 인스턴스로 교체하면 운영 부담이 증가하고 가용성이 오히려 낮아집니다. 데이터베이스 엔진 변경도 불필요합니다.</p>
<p><span class="mark-no">❌ D</span> — 자동 백업은 복구 시간 목표(RTO)를 개선하지만 다중 AZ 가용성을 제공하지 않습니다. 또한 ASG 최소/최대 용량을 1로 유지하면 단일 AZ 장애 시 서비스 중단이 발생합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'NAT GW는 AZ당 1개 배포가 AWS 모범 사례. RDS Multi-AZ로 DB 고가용성 확보. ASG 최소/최대 3으로 각 AZ에 인스턴스 보장. 세 가지 요소가 모두 올바르게 결합된 유일한 선택지.' },
    ]
  },

  {
    n: 355,
    en: `A company is planning to migrate its on-premises transaction-processing application to AWS. The application runs inside Docker containers that are hosted on VMs in the company's data center. The Docker containers have shared storage where the application records transaction data.<br><br>The transactions are time sensitive. The volume of transactions inside the application is unpredictable. The company must implement a low-latency storage solution that will automatically scale throughput to meet increased demand. The company cannot develop the application further and cannot continue to administer the Docker hosting environment.<br><br>How should the company migrate the application to AWS to meet these requirements?`,
    ko: `한 회사가 온프레미스 트랜잭션 처리 애플리케이션을 AWS로 마이그레이션할 계획입니다. 애플리케이션은 회사 데이터 센터의 VM에서 호스팅되는 Docker 컨테이너 내에서 실행됩니다. Docker 컨테이너에는 애플리케이션이 트랜잭션 데이터를 기록하는 공유 스토리지가 있습니다.<br><br>거래는 시간에 민감합니다. 애플리케이션 내부의 거래량은 예측할 수 없습니다. 회사는 증가하는 수요에 맞춰 처리량을 자동으로 확장하는 지연 시간이 짧은 스토리지 솔루션을 구현해야 합니다. 회사는 애플리케이션을 더 이상 개발할 수 없으며 Docker 호스팅 환경을 계속 관리할 수 없습니다.<br><br>회사는 이 요구 사항을 충족하기 위해 애플리케이션을 AWS로 어떻게 마이그레이션해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Migrate the containers that run the application to Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon S3 to store the transaction data that the containers share.`, ko: `애플리케이션을 실행하는 컨테이너를 Amazon EKS로 마이그레이션합니다. 컨테이너가 공유하는 트랜잭션 데이터를 저장하기 위해 Amazon S3를 사용합니다.` },
      { k: 'B', en: `Migrate the containers that run the application to AWS Fargate for Amazon ECS. Create an Amazon Elastic File System (Amazon EFS) file system. Create a Fargate task definition. Add a volume to the task definition to point to the EFS file system.`, ko: `애플리케이션을 실행하는 컨테이너를 Amazon ECS용 AWS Fargate로 마이그레이션합니다. Amazon EFS 파일 시스템을 생성합니다. Fargate 작업 정의를 생성합니다. EFS 파일 시스템을 가리키도록 작업 정의에 볼륨을 추가합니다.` },
      { k: 'C', en: `Migrate the containers that run the application to AWS Fargate for Amazon ECS. Create an Amazon Elastic Block Store (Amazon EBS) volume. Create a Fargate task definition. Attach the EBS volume to each running task.`, ko: `애플리케이션을 실행하는 컨테이너를 Amazon ECS용 AWS Fargate로 마이그레이션합니다. Amazon EBS 볼륨을 생성합니다. Fargate 작업 정의를 생성합니다. 실행 중인 각 작업에 EBS 볼륨을 연결합니다.` },
      { k: 'D', en: `Launch Amazon EC2 instances. Install Docker on the EC2 instances. Migrate the containers to the EC2 instances. Create an Amazon Elastic File System (Amazon EFS) file system. Add a mount point to the EC2 instances for the EFS file system.`, ko: `Amazon EC2 인스턴스를 시작합니다. EC2 인스턴스에 Docker를 설치합니다. 컨테이너를 EC2 인스턴스로 마이그레이션합니다. Amazon EFS 파일 시스템을 생성합니다. EC2 인스턴스에 EFS 파일 시스템의 마운트 포인트를 추가합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — ECS Fargate + Amazon EFS</span></p>
<p><strong>Fargate:</strong> Docker 호스팅 환경을 계속 관리할 수 없다는 조건을 충족합니다. Fargate는 서버리스 컨테이너 서비스로 EC2 인스턴스 관리 없이 컨테이너를 실행합니다. 예측 불가 트래픽에 자동으로 확장됩니다.</p>
<p><strong>Amazon EFS:</strong> EFS는 여러 컨테이너/작업이 동시에 마운트하여 공유할 수 있는 완전 관리형 NFS 파일 시스템입니다. 처리량이 자동으로 확장되며 지연 시간이 짧아 트랜잭션 데이터 처리에 적합합니다. EFS Provisioned Throughput 또는 Bursting 모드를 활용할 수 있습니다.</p>
<p>📎 <a href="https://repost.aws/knowledge-center/ecs-fargate-mount-efs-containers-tasks" target="_blank">ECS Fargate + EFS 마운트 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon S3는 블록 스토리지가 아닌 객체 스토리지입니다. 시간에 민감한 트랜잭션 데이터의 파일 시스템 공유 스토리지 대체로 적합하지 않으며 지연 시간도 높습니다.</p>
<p><span class="mark-no">❌ C</span> — EBS는 단일 작업/인스턴스에 연결되는 블록 스토리지입니다. 여러 Fargate 작업이 동시에 공유하는 스토리지로는 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — EC2에 직접 Docker를 설치하면 "Docker 호스팅 환경을 관리할 수 없다"는 요구 사항을 위반합니다. 운영 오버헤드도 증가합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'Fargate는 호스팅 환경 관리 부담 제거. EFS는 다중 컨테이너 공유 스토리지 제공 + 자동 확장 + 낮은 지연 시간. 세 요구 사항(비관리형 환경, 공유 스토리지, 자동 확장)을 모두 충족.' },
    ]
  },

  {
    n: 356,
    en: `A company is planning to migrate to the AWS Cloud. The company hosts many applications on Windows servers and Linux servers. Some of the servers are physical, and some of the servers are virtual. The company uses several types of databases in its on-premises environment. The company does not have an accurate inventory of its on-premises servers and applications.<br><br>The company wants to rightsize its resources during migration. A solutions architect needs to obtain information about the network connections and the application relationships. The solutions architect must assess the company's current environment and develop a migration plan.<br><br>Which solution will provide the solutions architect with the required information to develop the migration plan?`,
    ko: `한 회사가 AWS 클라우드로 마이그레이션할 계획입니다. 회사는 Windows 서버와 Linux 서버에서 많은 애플리케이션을 호스팅합니다. 일부 서버는 물리적이고 일부는 가상입니다. 회사는 온프레미스 환경에서 여러 유형의 데이터베이스를 사용합니다. 회사는 온프레미스 서버 및 애플리케이션에 대한 정확한 인벤토리를 보유하고 있지 않습니다.<br><br>회사는 마이그레이션 중에 리소스 크기를 조정하려 합니다. 솔루션 설계자는 네트워크 연결 및 애플리케이션 관계에 대한 정보를 얻어야 합니다. 솔루션 설계자는 회사의 현재 환경을 평가하고 마이그레이션 계획을 개발해야 합니다.<br><br>마이그레이션 계획 개발에 필요한 정보를 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use Migration Evaluator to request an evaluation of the environment from AWS. Use the AWS Application Discovery Service Agentless Collector to import the details into a Migration Evaluator Quick Insights report.`, ko: `Migration Evaluator를 사용하여 AWS에 환경 평가를 요청합니다. AWS Application Discovery Service 에이전트 없는 수집기를 사용하여 Migration Evaluator Quick Insights 보고서에 세부 정보를 가져옵니다.` },
      { k: 'B', en: `Use AWS Migration Hub and install the AWS Application Discovery Agent on the servers. Deploy the Migration Hub Strategy Recommendations application data collector. Generate a report by using Migration Hub Strategy Recommendations.`, ko: `AWS Migration Hub를 사용하고 서버에 AWS Application Discovery Agent를 설치합니다. Migration Hub 전략 권장 사항 애플리케이션 데이터 수집기를 배포합니다. Migration Hub 전략 권장 사항을 사용하여 보고서를 생성합니다.` },
      { k: 'C', en: `Use AWS Migration Hub and run the AWS Application Discovery Service Agentless Collector on the servers. Group the servers and databases by using AWS Application Migration Service. Generate a report by using Migration Hub Strategy Recommendations.`, ko: `AWS Migration Hub를 사용하고 서버에서 AWS Application Discovery Service 에이전트 없는 수집기를 실행합니다. AWS Application Migration Service를 사용하여 서버와 데이터베이스를 그룹화합니다. Migration Hub 전략 권장 사항을 사용하여 보고서를 생성합니다.` },
      { k: 'D', en: `Use the AWS Migration Hub import tool to load the details of the company's on-premises environment. Generate a report by using Migration Hub Strategy Recommendations.`, ko: `AWS Migration Hub 가져오기 도구를 사용하여 회사의 온프레미스 환경에 대한 세부 정보를 로드합니다. Migration Hub 전략 권장 사항을 사용하여 보고서를 생성합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Application Discovery Agent + Migration Hub 전략 권장 사항</span></p>
<p><strong>Application Discovery Agent (에이전트 방식):</strong> 물리적 서버와 가상 서버 모두에 설치 가능합니다. 시스템 구성, 성능, 실행 중인 프로세스, <strong>시스템 간 네트워크 연결 세부 정보</strong>를 캡처합니다. 에이전트 없는 수집기(Agentless Collector)는 VMware vCenter에서만 작동하므로 물리적 서버를 포함하는 혼합 환경에는 적합하지 않습니다.</p>
<p><strong>Migration Hub 전략 권장 사항:</strong> 수집된 데이터를 바탕으로 7R 마이그레이션 전략(Rehost, Replatform 등) 권장 사항과 상세 보고서를 생성합니다.</p>
<p>📎 <a href="https://aws.amazon.com/application-discovery/faqs/" target="_blank">AWS Application Discovery Service FAQ</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 에이전트 없는 수집기는 VMware 환경에만 적용됩니다. 물리적 서버가 포함된 혼합 환경에서는 전체 인벤토리를 수집할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 에이전트 없는 수집기는 VMware에 한정됩니다. 물리적 서버에서의 네트워크 연결 정보를 캡처하기 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — 가져오기 도구는 이미 정확한 인벤토리를 보유한 경우에 사용됩니다. 회사에 정확한 인벤토리가 없으므로 이 방법은 사용 불가합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '물리적+가상 서버 혼합 환경에서는 에이전트 방식이 유일하게 모든 서버 유형을 지원. 에이전트 없는 수집기는 VMware 전용. 정확한 인벤토리가 없으므로 수동 가져오기 방식도 불가.' },
    ]
  },

  {
    n: 357,
    en: `A financial services company sells its software-as-a-service (SaaS) platform for application compliance to large global banks. The SaaS platform runs on AWS and uses multiple AWS accounts that are managed in an organization in AWS Organizations. The SaaS platform uses many AWS resources globally.<br><br>For regulatory compliance, all API calls to AWS resources must be audited, tracked for changes, and stored in a durable and secure data store.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 금융 서비스 회사가 대규모 글로벌 은행에 애플리케이션 규정 준수를 위한 SaaS 플랫폼을 판매합니다. SaaS 플랫폼은 AWS에서 실행되며 AWS Organizations의 조직에서 관리되는 여러 AWS 계정을 사용합니다. SaaS 플랫폼은 전 세계적으로 많은 AWS 리소스를 사용합니다.<br><br>규정 준수를 위해 AWS 리소스에 대한 모든 API 호출을 감사하고, 변경 사항을 추적하고, 내구성 있고 안전한 데이터 저장소에 저장해야 합니다.<br><br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a new AWS CloudTrail trail. Use an existing Amazon S3 bucket in the organization's management account to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 bucket.`, ko: `새로운 AWS CloudTrail 추적을 생성합니다. 조직의 관리 계정에 있는 기존 Amazon S3 버킷을 사용하여 로그를 저장합니다. 모든 AWS 리전에 추적을 배포합니다. S3 버킷에서 MFA 삭제 및 암호화를 활성화합니다.` },
      { k: 'B', en: `Create a new AWS CloudTrail trail in each member account of the organization. Create new Amazon S3 buckets to store the logs. Deploy the trail to all AWS Regions. Enable MFA delete and encryption on the S3 buckets.`, ko: `조직의 각 구성원 계정에 새로운 AWS CloudTrail 추적을 생성합니다. 로그를 저장할 새 Amazon S3 버킷을 생성합니다. 모든 AWS 리전에 추적을 배포합니다. S3 버킷에서 MFA 삭제 및 암호화를 활성화합니다.` },
      { k: 'C', en: `Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket with versioning turned on to store the logs. Deploy the trail for all accounts in the organization. Enable MFA delete and encryption on the S3 bucket.`, ko: `조직의 관리 계정에 새로운 AWS CloudTrail 추적을 생성합니다. 로그를 저장하기 위해 버전 관리가 활성화된 새 Amazon S3 버킷을 생성합니다. 조직의 모든 계정에 대한 추적을 배포합니다. S3 버킷에서 MFA 삭제 및 암호화를 활성화합니다.` },
      { k: 'D', en: `Create a new AWS CloudTrail trail in the organization's management account. Create a new Amazon S3 bucket to store the logs. Configure Amazon Simple Notification Service (Amazon SNS) to send log-file delivery notifications to an external management system that will track the logs. Enable MFA delete and encryption on the S3 bucket.`, ko: `조직의 관리 계정에 새로운 AWS CloudTrail 추적을 생성합니다. 로그를 저장할 새 Amazon S3 버킷을 생성합니다. 로그를 추적할 외부 관리 시스템에 로그 파일 전송 알림을 보내도록 Amazon SNS를 구성합니다. S3 버킷에서 MFA 삭제 및 암호화를 활성화합니다.` },
    ],
    answer: ['C'],
    vote: '92% C',
    explain: `<p><span class="mark-ok">✅ C — 조직 수준 CloudTrail + 새 S3 버킷(버전 관리 + MFA 삭제 + 암호화)</span></p>
<p><strong>조직 추적(Organization Trail):</strong> 관리 계정에서 생성하고 조직의 모든 계정에 배포하면, 단일 추적으로 모든 멤버 계정의 API 호출을 자동으로 기록합니다. 각 계정별로 개별 추적을 생성할 필요가 없어 운영 오버헤드가 최소화됩니다.</p>
<p><strong>CloudTrail 전용 새 S3 버킷:</strong> CloudTrail 로그는 전용 S3 버킷에 저장해야 합니다. 버전 관리 + MFA 삭제 + 서버 측 암호화를 통해 로그의 내구성과 무결성을 보장합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-trail-organization.html" target="_blank">조직 수준 CloudTrail 추적 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 기존 S3 버킷을 재사용하면 CloudTrail 로그와 다른 데이터가 혼재될 수 있으며, 보안·규정 준수 감사 목적으로 전용 버킷 사용이 권장됩니다.</p>
<p><span class="mark-no">❌ B</span> — 각 멤버 계정마다 개별 추적을 생성하는 방식은 계정 수에 비례하여 운영 오버헤드가 크게 증가합니다. 조직 추적 대비 비효율적입니다.</p>
<p><span class="mark-no">❌ D</span> — SNS를 통해 외부 시스템에 알림을 보내는 방식은 외부 의존성을 추가하여 오버헤드가 증가합니다. 로그 자체는 S3에 안전하게 저장되므로 추가적인 추적 시스템이 필요 없습니다.</p>`,
    disc: [
      { ans: 'C (92%)', txt: '조직 수준 추적은 모든 멤버 계정에 자동 적용되어 운영 오버헤드 최소화. "모든 계정에 배포"는 각 계정에 별도 생성이 아니라 조직 추적이 해당 계정의 이벤트를 캡처하도록 구성됨.' },
    ]
  },

  {
    n: 358,
    en: `A company is deploying a distributed in-memory database on a fleet of Amazon EC2 instances. The fleet consists of a primary node and eight worker nodes. The primary node is responsible for monitoring cluster health, accepting user requests, distributing user requests to worker nodes, and sending an aggregate response back to a client. Worker nodes communicate with each other to replicate data partitions.<br><br>The company requires the lowest possible networking latency to achieve maximum performance.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사가 Amazon EC2 인스턴스 집합에 분산된 인메모리 데이터베이스를 배포하고 있습니다. 플릿은 기본 노드 1개와 작업자 노드 8개로 구성됩니다. 기본 노드는 클러스터 상태 모니터링, 사용자 요청 수락, 작업자 노드에 요청 배포, 집계 응답을 클라이언트에 다시 전송하는 역할을 합니다. 작업자 노드는 서로 통신하여 데이터 파티션을 복제합니다.<br><br>회사는 최대 성능을 달성하기 위해 가능한 가장 낮은 네트워킹 지연 시간을 요구합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Launch memory optimized EC2 instances in a partition placement group.`, ko: `파티션 배치 그룹에서 메모리 최적화 EC2 인스턴스를 시작합니다.` },
      { k: 'B', en: `Launch compute optimized EC2 instances in a partition placement group.`, ko: `파티션 배치 그룹에서 컴퓨팅 최적화 EC2 인스턴스를 시작합니다.` },
      { k: 'C', en: `Launch memory optimized EC2 instances in a cluster placement group.`, ko: `클러스터 배치 그룹에서 메모리 최적화 EC2 인스턴스를 시작합니다.` },
      { k: 'D', en: `Launch compute optimized EC2 instances in a spread placement group.`, ko: `분산 배치 그룹에서 컴퓨팅 최적화 EC2 인스턴스를 시작합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — 클러스터 배치 그룹 + 메모리 최적화 인스턴스</span></p>
<p><strong>클러스터 배치 그룹(Cluster Placement Group):</strong> 동일한 가용 영역 내에서 인스턴스들을 물리적으로 근접하게 배치하여 <strong>10Gbps Enhanced Networking</strong>과 함께 가장 낮은 네트워크 지연 시간과 가장 높은 네트워크 처리량을 제공합니다. 노드 간 데이터 복제가 빈번한 분산 인메모리 데이터베이스에 최적입니다.</p>
<p><strong>메모리 최적화 인스턴스:</strong> 인메모리 데이터베이스는 대량의 RAM을 필요로 합니다. R 시리즈(r5, r6i 등) 같은 메모리 최적화 인스턴스가 적합합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-cluster" target="_blank">클러스터 배치 그룹 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — 파티션 배치 그룹은 하드웨어 장애 격리를 위한 배치 방식으로, 인스턴스가 서로 다른 파티션(물리 랙)에 분산됩니다. 지연 시간 최소화가 목적이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — 분산 배치 그룹은 서로 다른 하드웨어에 인스턴스를 배치하여 단일 장애 영향을 최소화합니다. AZ당 최대 7개의 인스턴스만 지원하며, 최저 지연 시간 제공이 목표가 아닙니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: '최저 네트워크 지연 = 클러스터 배치 그룹. 인메모리 DB = 메모리 최적화 인스턴스. 9개 노드 클러스터가 같은 물리 호스트 군에서 고속 내부 통신 가능.' },
    ]
  },

  {
    n: 359,
    en: `A company maintains information on premises in approximately 1 million .csv files that are hosted on a VM. The data initially is 10 TB in size and grows at a rate of 1 TB each week. The company needs to automate backups of the data to the AWS Cloud.<br><br>Backups of the data must occur daily. The company needs a solution that applies custom filters to back up only a subset of the data that is located in designated source directories. The company has set up an AWS Direct Connect connection.<br><br>Which solution will meet the backup requirements with the LEAST operational overhead?`,
    ko: `한 회사는 VM에서 호스팅되는 약 100만 개의 .csv 파일로 온프레미스에 정보를 유지 관리합니다. 데이터 크기는 처음에 10TB이며 매주 1TB씩 증가합니다. 회사는 데이터 백업을 AWS 클라우드로 자동화해야 합니다.<br><br>데이터 백업은 매일 이루어져야 합니다. 회사는 지정된 소스 디렉터리에 있는 데이터의 하위 집합만 백업하기 위해 사용자 지정 필터를 적용하는 솔루션이 필요합니다. 회사는 AWS Direct Connect 연결을 설정했습니다.<br><br>최소한의 운영 오버헤드로 백업 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use the Amazon S3 CopyObject API operation with multipart upload to copy the existing data to Amazon S3. Use the CopyObject API operation to replicate new data to Amazon S3 daily.`, ko: `멀티파트 업로드와 함께 Amazon S3 CopyObject API 작업을 사용하여 기존 데이터를 Amazon S3에 복사합니다. CopyObject API 작업을 사용하여 매일 새 데이터를 Amazon S3에 복제합니다.` },
      { k: 'B', en: `Create a backup plan in AWS Backup to back up the data to Amazon S3. Schedule the backup plan to run daily.`, ko: `AWS Backup에서 백업 계획을 생성하여 Amazon S3에 데이터를 백업합니다. 매일 실행되도록 백업 계획을 예약합니다.` },
      { k: 'C', en: `Install the AWS DataSync agent as a VM that runs on the on-premises hypervisor. Configure a DataSync task to replicate the data to Amazon S3 daily.`, ko: `AWS DataSync 에이전트를 온프레미스 하이퍼바이저에서 실행되는 VM으로 설치합니다. 매일 Amazon S3에 데이터를 복제하도록 DataSync 작업을 구성합니다.` },
      { k: 'D', en: `Use an AWS Snowball Edge device for the initial backup. Use AWS DataSync for incremental backups to Amazon S3 daily.`, ko: `초기 백업에는 AWS Snowball Edge 디바이스를 사용합니다. 매일 Amazon S3에 대한 증분 백업을 위해 AWS DataSync를 사용합니다.` },
    ],
    answer: ['C'],
    vote: '86% C',
    explain: `<p><span class="mark-ok">✅ C — DataSync 에이전트(온프레미스 VM) + S3 복제 작업</span></p>
<p><strong>사용자 지정 필터:</strong> AWS DataSync는 파일 포함/제외 필터를 지원하여 지정된 소스 디렉터리의 데이터 하위 집합만 선택적으로 복제할 수 있습니다. 이것이 이 문제의 핵심 요구 사항입니다.</p>
<p><strong>VM 기반 에이전트:</strong> DataSync 에이전트를 온프레미스 하이퍼바이저의 VM으로 배포하면 물리 서버에 별도 소프트웨어를 설치하지 않고 데이터를 전송할 수 있습니다.</p>
<p><strong>Direct Connect 활용:</strong> DataSync는 Direct Connect를 통해 안정적이고 빠른 전송을 지원합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-s3-location.html" target="_blank">DataSync S3 위치 설정 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3 CopyObject는 S3 버킷 간 복사에 사용되며, 온프레미스 VM 파일 시스템에서 직접 작동하지 않습니다. 사용자 지정 필터 기능도 없습니다.</p>
<p><span class="mark-no">❌ B</span> — AWS Backup은 온프레미스 데이터를 S3에 직접 백업하는 것을 기본 지원하지 않습니다. Storage Gateway 볼륨 또는 VMware VM만 온프레미스 지원 대상입니다.</p>
<p><span class="mark-no">❌ D</span> — Direct Connect가 이미 설정되어 있으므로 초기 전송에 Snowball Edge를 사용할 필요가 없습니다. 불필요한 복잡성과 오버헤드가 추가됩니다.</p>`,
    disc: [
      { ans: 'C (86%)', txt: '"사용자 지정 필터"가 핵심 키워드. DataSync만이 필터 기반 선택적 복제를 네이티브로 지원. AWS Backup은 S3 직접 백업 미지원. Direct Connect가 이미 있어 Snowball 불필요.' },
    ]
  },

  {
    n: 360,
    en: `A financial services company has an asset management product that thousands of customers use around the world. The customers provide feedback about the product through surveys. The company is building a new analytical solution that runs on Amazon EMR to analyze the data from these surveys. The following user personas need to access the analytical solution to perform different actions:<br><br>• Administrator: Provisions the EMR cluster for the analytics team based on the team's requirements<br>• Data engineer: Runs ETL scripts to process, transform, and enrich the datasets<br>• Data analyst: Runs SQL and Hive queries on the data<br><br>A solutions architect must ensure that all the user personas have least privilege access to only the resources that they need. The user personas must be able to launch only applications that are approved and authorized. The solution also must ensure tagging for all resources that the user personas create.<br><br>Which solution will meet these requirements?`,
    ko: `한 금융 서비스 회사에는 전 세계 수천 명의 고객이 사용하는 자산 관리 제품이 있습니다. 고객은 설문조사를 통해 제품에 대한 피드백을 제공합니다. 회사는 이러한 설문조사의 데이터를 분석하기 위해 Amazon EMR에서 실행되는 새로운 분석 솔루션을 구축하고 있습니다. 다음 사용자 페르소나는 다양한 작업을 수행하기 위해 분석 솔루션에 액세스해야 합니다.<br><br>• 관리자: 팀의 요구 사항에 따라 분석 팀을 위한 EMR 클러스터를 프로비저닝합니다.<br>• 데이터 엔지니어: ETL 스크립트를 실행하여 데이터 세트를 처리, 변환 및 강화합니다.<br>• 데이터 분석가: 데이터에 대해 SQL 및 Hive 쿼리를 실행합니다.<br><br>솔루션 설계자는 모든 사용자 페르소나가 필요한 리소스에만 최소한의 액세스 권한을 갖도록 해야 합니다. 사용자 페르소나는 승인되고 권한이 부여된 애플리케이션만 시작할 수 있어야 합니다. 또한 솔루션은 사용자 페르소나가 생성하는 모든 리소스에 대한 태그 지정을 보장해야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create IAM roles for each user persona. Attach identity-based policies to define which actions the user who assumes the role can perform. Create an AWS Config rule to check for noncompliant resources. Configure the rule to notify the administrator to remediate the noncompliant resources.`, ko: `각 사용자 페르소나에 대한 IAM 역할을 생성합니다. 자격 증명 기반 정책을 연결하여 역할을 맡은 사용자가 수행할 수 있는 작업을 정의합니다. 비준수 리소스를 확인하는 AWS Config 규칙을 생성합니다. 비준수 리소스를 수정하도록 관리자에게 알리도록 규칙을 구성합니다.` },
      { k: 'B', en: `Set up Kerberos-based authentication for EMR clusters upon launch. Specify a Kerberos security configuration along with cluster-specific Kerberos options.`, ko: `시작 시 EMR 클러스터에 대한 Kerberos 기반 인증을 설정합니다. 클러스터별 Kerberos 옵션과 함께 Kerberos 보안 구성을 지정합니다.` },
      { k: 'C', en: `Use AWS Service Catalog to control the Amazon EMR versions available for deployment, the cluster configuration, and the permissions for each user persona.`, ko: `AWS Service Catalog를 사용하여 배포에 사용할 수 있는 Amazon EMR 버전, 클러스터 구성 및 각 사용자 페르소나에 대한 권한을 제어합니다.` },
      { k: 'D', en: `Launch the EMR cluster by using AWS CloudFormation. Attach resource-based policies to the EMR cluster during cluster creation. Create an AWS Config rule to check for noncompliant clusters and noncompliant Amazon S3 buckets. Configure the rule to notify the administrator to remediate the noncompliant resources.`, ko: `AWS CloudFormation을 사용하여 EMR 클러스터를 시작합니다. 클러스터 생성 중에 EMR 클러스터에 리소스 기반 정책을 연결합니다. 비준수 클러스터 및 비준수 S3 버킷을 확인하는 AWS Config 규칙을 생성합니다. 비준수 리소스를 수정하도록 관리자에게 알리도록 규칙을 구성합니다.` },
    ],
    answer: ['C'],
    vote: '79% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Service Catalog</span></p>
<p>AWS Service Catalog는 세 가지 핵심 요구 사항을 모두 충족하는 유일한 서비스입니다:</p>
<p><strong>① 최소 권한 + 승인된 애플리케이션만 시작:</strong> 각 사용자 페르소나별로 포트폴리오와 제품을 구성하고, 해당 페르소나가 시작할 수 있는 EMR 버전·구성을 사전에 승인된 것으로만 제한합니다.</p>
<p><strong>② 태그 지정 보장:</strong> Service Catalog는 프로비저닝된 리소스에 자동 태그 지정(AutoTag)을 강제할 수 있습니다. <code>aws:servicecatalog:provisioningPrincipalArn</code> 태그를 통해 프로비저닝한 사용자를 자동으로 기록합니다.</p>
<p><strong>③ 중앙 집중식 제어:</strong> AWS Config는 규정 준수를 사후에 감지하지만 사전에 보장하지는 않습니다. Service Catalog는 프로비저닝 시점부터 제어합니다.</p>
<p>📎 <a href="https://aws.amazon.com/blogs/big-data/build-a-self-service-environment-for-each-line-of-business-using-amazon-emr-and-aws-service-catalog/" target="_blank">Service Catalog + EMR 사용 사례 AWS 블로그</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — IAM 역할은 권한 제어에 사용되지만, 승인된 EMR 버전·구성으로만 제한하거나 태그 지정을 사전에 보장하는 기능이 없습니다. AWS Config는 사후 감지만 가능합니다.</p>
<p><span class="mark-no">❌ B</span> — Kerberos 인증은 EMR 클러스터 내부의 인증 메커니즘입니다. 승인된 애플리케이션 제한, 태그 지정, 최소 권한 EMR 클러스터 프로비저닝 요구 사항을 충족하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudFormation + AWS Config 조합은 태그 지정을 사전에 보장하지 않으며, 승인된 EMR 구성만 허용하는 자기서비스 거버넌스 기능도 부족합니다.</p>`,
    disc: [
      { ans: 'C (79%)', txt: '"승인된 애플리케이션만 시작"과 "태그 지정 보장"이 핵심 키워드. Config 규칙은 사후 감지, Catalog는 사전 제어. Catalog만이 두 요건을 프로비저닝 시점부터 모두 충족.' },
      { ans: 'A (21%)', txt: 'IAM 역할+Config 조합으로 충분하다는 의견도 있으나, 태그 지정 사전 보장 및 승인 제품 제한 기능에서 Catalog에 비해 부족.' },
    ]
  },
];