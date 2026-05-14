window.QS_SET39 = [
  {
    n: 381,
    en: `A company built an ecommerce website on AWS using a three-tier web architecture. The application is Java-based and composed of an Amazon CloudFront distribution, an Apache web server layer of Amazon EC2 instances in an Auto Scaling group, and a backend Amazon Aurora MySQL database.<br><br>Last month, during a promotional sales event, users reported errors and timeouts while adding items to their shopping carts. The operations team recovered the logs created by the web servers and reviewed Aurora DB cluster performance metrics. Some of the web servers were terminated before logs could be collected and the Aurora metrics were not sufficient for query performance analysis.<br><br>Which combination of steps must the solutions architect take to improve application performance visibility during peak traffic events? (Choose three.)`,
    ko: `한 회사가 3계층 웹 아키텍처를 사용하여 AWS에 전자상거래 웹사이트를 구축했습니다. 애플리케이션은 Java 기반이며 Amazon CloudFront 배포, Auto Scaling 그룹에 있는 Amazon EC2 인스턴스의 Apache 웹 서버 계층, 백엔드 Amazon Aurora MySQL 데이터베이스로 구성됩니다.<br><br>지난 달 프로모션 판매 이벤트 중에 사용자가 장바구니에 항목을 추가하는 동안 오류 및 시간 초과가 발생했습니다. 운영팀은 웹 서버에서 생성된 로그를 복구하고 Aurora DB 클러스터 성능 지표를 검토했습니다. 로그가 수집되기 전에 일부 웹 서버가 종료되었으며 Aurora 지표가 쿼리 성능 분석에 충분하지 않았습니다.<br><br>피크 트래픽 이벤트 중에 애플리케이션 성능 가시성을 개선하기 위해 솔루션 설계자가 수행해야 하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Configure the Aurora MySQL DB cluster to publish slow query and error logs to Amazon CloudWatch Logs.`, ko: `Amazon CloudWatch Logs에 느린 쿼리 및 오류 로그를 게시하도록 Aurora MySQL DB 클러스터를 구성합니다.` },
      { k: 'B', en: `Implement the AWS X-Ray SDK to trace incoming HTTP requests on the EC2 instances and implement tracing of SQL queries with the X-Ray SDK for Java.`, ko: `AWS X-Ray SDK를 구현하여 EC2 인스턴스에서 들어오는 HTTP 요청을 추적하고 Java용 X-Ray SDK를 사용하여 SQL 쿼리 추적을 구현합니다.` },
      { k: 'C', en: `Configure the Aurora MySQL DB cluster to stream slow query and error logs to Amazon Kinesis.`, ko: `느린 쿼리 및 오류 로그를 Amazon Kinesis로 스트리밍하도록 Aurora MySQL DB 클러스터를 구성합니다.` },
      { k: 'D', en: `Install and configure an Amazon CloudWatch Logs agent on the EC2 instances to send the Apache logs to CloudWatch Logs.`, ko: `EC2 인스턴스에 Amazon CloudWatch Logs 에이전트를 설치하고 구성하여 Apache 로그를 CloudWatch Logs로 보냅니다.` },
      { k: 'E', en: `Enable and configure AWS CloudTrail to collect and analyze application activity from Amazon EC2 and Aurora.`, ko: `Amazon EC2 및 Aurora에서 애플리케이션 활동을 수집하고 분석하도록 AWS CloudTrail을 활성화하고 구성합니다.` },
      { k: 'F', en: `Enable Aurora MySQL DB cluster performance benchmarking and publish the stream to AWS X-Ray.`, ko: `Aurora MySQL DB 클러스터 성능 벤치마킹을 활성화하고 스트림을 AWS X-Ray에 게시합니다.` },
    ],
    answer: ['A', 'B', 'D'],
    vote: '100% ABD',
    explain: `<p><span class="mark-ok">✅ A, B, D — Aurora 슬로우 쿼리 로그 + X-Ray SDK + CloudWatch Logs 에이전트</span></p>
<p><strong>A — Aurora 슬로우 쿼리·오류 로그 → CloudWatch Logs:</strong> Aurora MySQL에서 느린 쿼리 및 오류 로그를 CloudWatch Logs로 게시하면 Aurora 지표가 충분하지 않았던 문제를 해결합니다. 지속적인 쿼리 성능 분석이 가능해집니다.</p>
<p><strong>B — AWS X-Ray SDK:</strong> EC2 인스턴스에서 수신 HTTP 요청을 추적하고, Java용 X-Ray SDK로 SQL 쿼리를 추적합니다. 엔드투엔드 요청 분석과 서비스 맵으로 성능 병목 위치를 정확하게 파악할 수 있습니다.</p>
<p><strong>D — CloudWatch Logs 에이전트:</strong> 인스턴스가 종료되기 전에 로그가 사라지는 문제를 해결합니다. Apache 로그를 실시간으로 CloudWatch Logs로 전송하면 Auto Scaling으로 인스턴스가 종료되어도 로그가 보존됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — Aurora는 Kinesis로 직접 슬로우 쿼리 로그를 스트리밍하는 기능을 지원하지 않습니다. CloudWatch Logs가 올바른 대상입니다.</p>
<p><span class="mark-no">❌ E</span> — AWS CloudTrail은 AWS API 호출을 기록하는 감사 서비스입니다. 애플리케이션 레벨의 성능 데이터(쿼리 성능, HTTP 응답 시간 등)를 수집하지 않습니다.</p>
<p><span class="mark-no">❌ F</span> — Aurora 성능 벤치마킹 데이터를 X-Ray로 게시하는 기능은 AWS에서 지원하지 않는 구성입니다.</p>`,
    disc: [
      { ans: 'ABD (100%)', txt: 'A로 DB 쿼리 로그 지속 저장, B로 엔드투엔드 요청·SQL 추적, D로 인스턴스 종료 전 Apache 로그 실시간 보존. 세 가지가 각 문제점을 정확히 해결.' },
    ]
  },

  {
    n: 382,
    en: `A company that provisions job boards for a seasonal workforce is seeing an increase in traffic and usage. The backend services run on a pair of Amazon EC2 instances behind an Application Load Balancer with Amazon DynamoDB as the datastore. Application read and write traffic is slow during peak seasons.<br><br>Which option provides a scalable application architecture to handle peak seasons with the LEAST development effort?`,
    ko: `계절별 인력을 위한 채용 게시판을 제공하는 회사에서는 트래픽과 사용량이 증가하고 있습니다. 백엔드 서비스는 Amazon DynamoDB를 데이터 스토어로 사용하는 Application Load Balancer 뒤의 Amazon EC2 인스턴스 쌍에서 실행됩니다. 성수기에는 애플리케이션 읽기 및 쓰기 트래픽이 느립니다.<br><br>최소한의 개발 노력으로 성수기를 처리할 수 있는 확장 가능한 애플리케이션 아키텍처를 제공하는 옵션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Migrate the backend services to AWS Lambda. Increase the read and write capacity of DynamoDB.`, ko: `백엔드 서비스를 AWS Lambda로 마이그레이션합니다. DynamoDB의 읽기 및 쓰기 용량을 늘립니다.` },
      { k: 'B', en: `Migrate the backend services to AWS Lambda. Configure DynamoDB to use global tables.`, ko: `백엔드 서비스를 AWS Lambda로 마이그레이션합니다. 전역 테이블을 사용하도록 DynamoDB를 구성합니다.` },
      { k: 'C', en: `Use Auto Scaling groups for the backend services. Use DynamoDB auto scaling.`, ko: `백엔드 서비스에 Auto Scaling 그룹을 사용합니다. DynamoDB Auto Scaling을 사용합니다.` },
      { k: 'D', en: `Use Auto Scaling groups for the backend services. Use Amazon Simple Queue Service (Amazon SQS) and an AWS Lambda function to write to DynamoDB.`, ko: `백엔드 서비스에 Auto Scaling 그룹을 사용합니다. Amazon SQS 및 AWS Lambda 함수를 사용하여 DynamoDB에 씁니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — EC2 Auto Scaling 그룹 + DynamoDB Auto Scaling</span></p>
<p>핵심 조건은 <strong>"최소한의 개발 노력"</strong>입니다. 기존 EC2 기반 아키텍처를 Lambda로 재작성하는 것(A, B)은 상당한 개발 노력이 필요합니다.</p>
<p><strong>EC2 Auto Scaling:</strong> 기존 EC2 인스턴스에 Auto Scaling 그룹을 추가하면 코드 변경 없이 피크 트래픽에 자동으로 확장됩니다.</p>
<p><strong>DynamoDB Auto Scaling:</strong> DynamoDB의 읽기/쓰기 용량 단위를 자동으로 조정하여 성수기의 읽기·쓰기 트래픽 증가에 대응합니다. 관리 콘솔에서 설정만으로 활성화 가능합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html" target="_blank">DynamoDB Auto Scaling 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — 백엔드 서비스를 Lambda로 마이그레이션하면 코드 재작성 및 아키텍처 변경이 필요하여 개발 노력이 상당히 증가합니다.</p>
<p><span class="mark-no">❌ D</span> — SQS + Lambda를 DynamoDB 쓰기에 추가하면 비동기 처리 파이프라인 구현이 필요하여 개발 노력이 증가합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: '"최소 개발 노력" = 기존 아키텍처 유지하면서 Auto Scaling만 추가. Lambda 마이그레이션은 코드 재작성 필요. EC2 ASG + DynamoDB Auto Scaling이 코드 변경 없이 확장 가능.' },
    ]
  },

  {
    n: 383,
    en: `A company is migrating to the cloud. It wants to evaluate the configurations of virtual machines in its existing data center environment to ensure that it can size new Amazon EC2 instances accurately. The company wants to collect metrics, such as CPU, memory, and disk utilization, and it needs an inventory of what processes are running on each instance. The company would also like to monitor network connections to map communications between servers.<br><br>Which would enable the collection of this data MOST cost effectively?`,
    ko: `한 회사가 클라우드로 마이그레이션하고 있습니다. 기존 데이터 센터 환경의 가상 머신 구성을 평가하여 새로운 Amazon EC2 인스턴스의 크기를 정확하게 조정할 수 있는지 확인하려고 합니다. 회사는 CPU, 메모리, 디스크 사용률과 같은 지표를 수집하려고 하며 각 인스턴스에서 실행 중인 프로세스에 대한 인벤토리가 필요합니다. 또한 회사는 네트워크 연결을 모니터링하여 서버 간의 통신을 매핑하려고 합니다.<br><br>이 데이터를 가장 비용 효율적으로 수집할 수 있는 방법은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS Application Discovery Service and deploy the data collection agent to each virtual machine in the data center.`, ko: `AWS Application Discovery Service를 사용하고 데이터 센터의 각 가상 머신에 데이터 수집 에이전트를 배포합니다.` },
      { k: 'B', en: `Configure the Amazon CloudWatch agent on all servers within the local environment and publish metrics to Amazon CloudWatch Logs.`, ko: `로컬 환경 내의 모든 서버에서 Amazon CloudWatch 에이전트를 구성하고 Amazon CloudWatch Logs에 지표를 게시합니다.` },
      { k: 'C', en: `Use AWS Application Discovery Service and enable agentless discovery in the existing virtualization environment.`, ko: `AWS Application Discovery Service를 사용하고 기존 가상화 환경에서 에이전트 없는 검색을 활성화합니다.` },
      { k: 'D', en: `Enable AWS Application Discovery Service in the AWS Management Console and configure the corporate firewall to allow scans over a VPN.`, ko: `AWS Management Console에서 AWS Application Discovery Service를 활성화하고 VPN을 통한 검색을 허용하도록 회사 방화벽을 구성합니다.` },
    ],
    answer: ['A'],
    vote: '90% A',
    explain: `<p><span class="mark-ok">✅ A — Application Discovery Service 에이전트 기반 검색</span></p>
<p>AWS Application Discovery Service는 두 가지 검색 방법을 제공합니다. 이 문제에서는 <strong>에이전트 기반 검색</strong>이 필요한 이유가 명확합니다:</p>
<p><strong>에이전트 기반만 지원하는 기능:</strong> 실행 중인 프로세스 인벤토리, 네트워크 인바운드/아웃바운드 연결 정보(서버 간 통신 매핑). 이 두 가지는 문제에서 명시적으로 요구하는 항목입니다.</p>
<p><strong>에이전트 없는 검색(C)의 한계:</strong> VMware 환경에서만 작동하며, 실행 중인 프로세스와 네트워크 연결 세부 정보를 수집하지 못합니다. 문제에 VMware가 명시되지 않았으므로 에이전트 없는 검색은 적합하지 않습니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html#compare-tools" target="_blank">Application Discovery Service 도구 비교 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — CloudWatch 에이전트는 AWS 환경에서 EC2 지표 수집에 최적화되어 있으며, 온프레미스 가상 머신의 프로세스 인벤토리 및 서버 간 네트워크 통신 매핑을 위한 마이그레이션 평가 도구가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 에이전트 없는 검색은 VMware vCenter 환경에서만 작동합니다. 또한 네트워크 연결 및 실행 중인 프로세스 데이터를 수집하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Application Discovery Service는 원격 스캔 방식을 지원하지 않습니다. 에이전트 또는 에이전트 없는 수집기를 사용해야 합니다.</p>`,
    disc: [
      { ans: 'A (90%)', txt: '네트워크 연결 및 실행 중인 프로세스 인벤토리는 에이전트 기반만 지원. 에이전트 없는 검색은 VMware 전용이며 해당 기능 미지원. A가 모든 요구 사항을 충족하는 유일한 선택지.' },
    ]
  },

  {
    n: 384,
    en: `A company provides a software as a service (SaaS) application that runs in the AWS Cloud. The application runs on Amazon EC2 instances behind a Network Load Balancer (NLB). The instances are in an Auto Scaling group and are distributed across three Availability Zones in a single AWS Region.<br><br>The company is deploying the application into additional Regions. The company must provide static IP addresses for the application to customers so that the customers can add the IP addresses to allow lists. The solution must automatically route customers to the Region that is geographically closest to them.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사가 AWS 클라우드에서 실행되는 SaaS 애플리케이션을 제공합니다. 애플리케이션은 NLB 뒤의 Amazon EC2 인스턴스에서 실행됩니다. 인스턴스는 Auto Scaling 그룹에 속하며 단일 AWS 리전의 3개 AZ에 분산됩니다.<br><br>회사는 추가 리전에 애플리케이션을 배포하고 있습니다. 회사는 고객이 IP 주소를 허용 목록에 추가할 수 있도록 고정 IP 주소를 제공해야 합니다. 솔루션은 고객을 지리적으로 가장 가까운 리전으로 자동 라우팅해야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an Amazon CloudFront distribution. Create a CloudFront origin group. Add the NLB for each additional Region to the origin group. Provide customers with the IP address ranges of the distribution's edge locations.`, ko: `Amazon CloudFront 배포를 생성합니다. CloudFront 오리진 그룹을 생성합니다. 각 추가 리전에 대한 NLB를 오리진 그룹에 추가합니다. 고객에게 배포 엣지 위치의 IP 주소 범위를 제공합니다.` },
      { k: 'B', en: `Create an AWS Global Accelerator standard accelerator. Create a standard accelerator endpoint for the NLB in each additional Region. Provide customers with the Global Accelerator IP address.`, ko: `AWS Global Accelerator 표준 액셀러레이터를 생성합니다. 각 추가 리전에서 NLB에 대한 표준 가속기 엔드포인트를 생성합니다. 고객에게 Global Accelerator IP 주소를 제공합니다.` },
      { k: 'C', en: `Create an Amazon CloudFront distribution. Create a custom origin for the NLB in each additional Region. Provide customers with the IP address ranges of the distribution's edge locations.`, ko: `Amazon CloudFront 배포를 생성합니다. 각 추가 리전에서 NLB에 대한 사용자 지정 오리진을 만듭니다. 고객에게 배포 엣지 위치의 IP 주소 범위를 제공합니다.` },
      { k: 'D', en: `Create an AWS Global Accelerator custom routing accelerator. Create a listener for the custom routing accelerator. Add the IP address and ports for the NLB in each additional Region. Provide customers with the Global Accelerator IP address.`, ko: `AWS Global Accelerator 사용자 지정 라우팅 액셀러레이터를 생성합니다. 사용자 정의 라우팅 가속기에 대한 수신기를 만듭니다. 각 추가 리전에 NLB에 대한 IP 주소와 포트를 추가합니다. 고객에게 Global Accelerator IP 주소를 제공합니다.` },
    ],
    answer: ['B'],
    vote: '89% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Global Accelerator 표준 액셀러레이터 + NLB 엔드포인트</span></p>
<p><strong>고정 IP 주소:</strong> AWS Global Accelerator는 Anycast 고정 IP 주소 2개를 제공합니다. 이 IP 주소는 변경되지 않으므로 고객 허용 목록에 추가하기 적합합니다.</p>
<p><strong>지리적 최근접 라우팅:</strong> 표준 액셀러레이터는 사용자를 가장 가까운 정상적인 엔드포인트로 자동으로 라우팅합니다.</p>
<p><strong>NLB 지원:</strong> 표준 액셀러레이터는 NLB, ALB, EC2 인스턴스, 탄력적 IP를 엔드포인트로 지원합니다. 반면 사용자 지정 라우팅 액셀러레이터(D)는 VPC 서브넷만 지원하며 지리적 근접성 라우팅을 제공하지 않습니다.</p>
<p>📎 <a href="https://aws.amazon.com/global-accelerator/faqs/" target="_blank">AWS Global Accelerator FAQ</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — CloudFront 엣지 로케이션의 IP 주소 범위는 계속 변경됩니다. 고객 허용 목록에 추가하기 위한 고정 IP를 제공할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 사용자 지정 라우팅 액셀러레이터는 트래픽을 특정 EC2 인스턴스로 결정론적으로 라우팅하는 용도입니다. 지리적 근접성 기반 자동 라우팅을 제공하지 않으며 NLB를 엔드포인트로 지원하지 않습니다.</p>`,
    disc: [
      { ans: 'B (89%)', txt: 'Global Accelerator 표준 액셀러레이터: 고정 IP 2개 + 최근접 리전 자동 라우팅 + NLB 엔드포인트 지원. CloudFront IP는 가변적. 사용자 지정 라우팅 GA는 근접성 라우팅 미지원.' },
    ]
  },

  {
    n: 385,
    en: `A company is running multiple workloads in the AWS Cloud. The company has separate units for software development. The company uses AWS Organizations and federation with SAML to give permissions to developers to manage resources in their AWS accounts. The development units each deploy their production workloads into a common production account.<br><br>Recently, an incident occurred in the production account in which members of a development unit terminated an EC2 instance that belonged to a different development unit. A solutions architect must create a solution that prevents a similar incident from happening in the future. The solution also must allow developers the possibility to manage the instances used for their workloads.<br><br>Which strategy will meet these requirements?`,
    ko: `한 회사가 AWS 클라우드에서 여러 워크로드를 실행하고 있습니다. 회사에는 소프트웨어 개발을 위한 별도의 부서가 있습니다. 회사는 AWS Organizations 및 SAML과의 연동을 사용하여 개발자에게 AWS 계정의 리소스를 관리할 수 있는 권한을 부여합니다. 각 개발 단위는 프로덕션 워크로드를 공통 프로덕션 계정에 배포합니다.<br><br>최근 프로덕션 계정에서 개발 단위 구성원이 다른 개발 단위에 속한 EC2 인스턴스를 종료하는 사건이 발생했습니다. 솔루션 설계자는 향후 유사한 사고가 발생하지 않도록 방지하는 솔루션을 만들어야 합니다. 또한 솔루션을 통해 개발자는 워크로드에 사용되는 인스턴스를 관리할 수 있어야 합니다.<br><br>이 요구 사항을 충족하는 전략은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create separate OUs in AWS Organizations for each development unit. Assign the created OUs to the company AWS accounts. Create separate SCPs with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag that matches the development unit name. Assign the SCP to the corresponding OU.`, ko: `각 개발 단위에 대해 AWS Organizations에서 별도의 OU를 생성합니다. 생성된 OU를 회사 AWS 계정에 할당합니다. 개발 단위 이름과 일치하는 DevelopmentUnit 리소스 태그에 대한 거부 작업 및 StringNotEquals 조건을 사용하여 별도의 SCP를 생성합니다. 해당 OU에 SCP를 할당합니다.` },
      { k: 'B', en: `Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Update the IAM policy for the developers' assumed IAM role with a deny action and a StringNotEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit.`, ko: `SAML 연동 중에 DevelopmentUnit의 속성을 AWS STS 세션 태그로 전달합니다. DevelopmentUnit 리소스 태그 및 aws:PrincipalTag/DevelopmentUnit에 대한 거부 작업 및 StringNotEquals 조건을 사용하여 개발자가 맡은 IAM 역할에 대한 IAM 정책을 업데이트합니다.` },
      { k: 'C', en: `Pass an attribute for DevelopmentUnit as an AWS Security Token Service (AWS STS) session tag during SAML federation. Create an SCP with an allow action and a StringEquals condition for the DevelopmentUnit resource tag and aws:PrincipalTag/DevelopmentUnit. Assign the SCP to the root OU.`, ko: `SAML 연동 중에 DevelopmentUnit의 속성을 AWS STS 세션 태그로 전달합니다. DevelopmentUnit 리소스 태그 및 aws:PrincipalTag/DevelopmentUnit에 대한 허용 작업과 StringEquals 조건을 사용하여 SCP를 생성합니다. SCP를 루트 OU에 할당합니다.` },
      { k: 'D', en: `Create separate IAM policies for each development unit. For every IAM policy, add an allow action and a StringEquals condition for the DevelopmentUnit resource tag and the development unit name. During SAML federation, use AWS Security Token Service (AWS STS) to assign the IAM policy and match the development unit name to the assumed IAM role.`, ko: `각 개발 단위에 대해 별도의 IAM 정책을 만듭니다. 모든 IAM 정책에 대해 DevelopmentUnit 리소스 태그와 개발 단위 이름에 대한 허용 작업과 StringEquals 조건을 추가합니다. SAML 연동 중에 AWS STS를 사용하여 IAM 정책을 할당하고 개발 단위 이름을 가정된 IAM 역할과 일치시킵니다.` },
    ],
    answer: ['B'],
    vote: '73% B',
    explain: `<p><span class="mark-ok">✅ B — STS 세션 태그 + IAM 정책 StringNotEquals 조건</span></p>
<p><strong>핵심 시나리오:</strong> 여러 개발 단위가 <em>단일 공통 프로덕션 계정</em>을 공유합니다. SCP는 계정 수준에서 작동하지만, 같은 계정 내 개발 단위 간 격리는 IAM 정책 수준에서 처리해야 합니다.</p>
<p><strong>STS 세션 태그:</strong> SAML 연동 시 사용자의 DevelopmentUnit 속성을 세션 태그로 전달합니다. 이 태그는 <code>aws:PrincipalTag/DevelopmentUnit</code>로 IAM 정책 조건에서 참조 가능합니다.</p>
<p><strong>IAM 정책 Deny + StringNotEquals:</strong> 리소스의 <code>DevelopmentUnit</code> 태그가 현재 사용자의 <code>aws:PrincipalTag/DevelopmentUnit</code>와 다른 경우 작업을 거부합니다. 이를 통해 각 개발자는 자신의 개발 단위 리소스만 관리할 수 있습니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_session-tags.html" target="_blank">IAM 세션 태그 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SCP는 계정 수준에서 작동합니다. 모든 개발 단위가 공통 프로덕션 계정을 사용하므로, 계정을 OU로 분리하는 방식으로는 같은 계정 내 개발 단위 간 격리가 불가능합니다.</p>
<p><span class="mark-no">❌ C</span> — SCP는 공통 프로덕션 계정에서 개발 단위 간 세분화된 리소스 격리를 제공하지 않습니다. 또한 허용 작업(allow)만으로는 다른 개발 단위의 리소스 접근을 막을 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 개발 단위별 별도 IAM 정책을 관리하면 운영 부담이 증가합니다. SAML 연동 중 IAM 정책을 동적으로 할당하는 방식은 STS 세션 태그 기반보다 복잡합니다.</p>`,
    disc: [
      { ans: 'B (73%)', txt: '공통 계정에서 단위 간 격리 = SCP 불가, IAM 정책 필요. STS 세션 태그로 개발자 DevelopmentUnit 전달 → IAM 정책 Deny+StringNotEquals로 타 단위 리소스 조작 차단.' },
      { ans: 'A (27%)', txt: 'OU+SCP 방식은 각 계정이 분리된 경우 유효하나, 공통 프로덕션 계정 환경에서는 적용 불가. A를 선택하는 의견도 있으나 근본적인 제약 존재.' },
    ]
  },

  {
    n: 386,
    en: `An enterprise company is building an infrastructure services platform for its users. The company has the following requirements:<br><br>• Provide least privilege access to users when launching AWS infrastructure so users cannot provision unapproved services.<br>• Use a central account to manage the creation of infrastructure services.<br>• Provide the ability to distribute infrastructure services to multiple accounts in AWS Organizations.<br>• Provide the ability to enforce tags on any infrastructure that is started by users.<br><br>Which combination of actions using AWS services will meet these requirements? (Choose three.)`,
    ko: `한 엔터프라이즈 회사가 사용자를 위한 인프라 서비스 플랫폼을 구축하고 있습니다. 회사에는 다음과 같은 요구 사항이 있습니다:<br><br>• 사용자가 승인되지 않은 서비스를 프로비저닝할 수 없도록 최소 권한 액세스를 제공합니다.<br>• 중앙 계정을 사용하여 인프라 서비스 생성을 관리합니다.<br>• AWS Organizations의 여러 계정에 인프라 서비스를 배포하는 기능을 제공합니다.<br>• 사용자가 시작한 모든 인프라에 태그를 적용하는 기능을 제공합니다.<br><br>이 요구 사항을 충족하는 AWS 서비스 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Develop infrastructure services using AWS CloudFormation templates. Add the templates to a central Amazon S3 bucket and add the IAM roles or users that require access to the S3 bucket policy.`, ko: `AWS CloudFormation 템플릿을 사용하여 인프라 서비스를 개발합니다. 중앙 Amazon S3 버킷에 템플릿을 추가하고 S3 버킷 정책에 액세스해야 하는 IAM 역할 또는 사용자를 추가합니다.` },
      { k: 'B', en: `Develop infrastructure services using AWS CloudFormation templates. Upload each template as an AWS Service Catalog product to portfolios created in a central AWS account. Share these portfolios with the Organizations structure created for the company.`, ko: `AWS CloudFormation 템플릿을 사용하여 인프라 서비스를 개발합니다. 중앙 AWS 계정에서 생성된 포트폴리오에 각 템플릿을 AWS Service Catalog 제품으로 업로드합니다. 이러한 포트폴리오를 회사를 위해 생성된 조직 구조와 공유합니다.` },
      { k: 'C', en: `Allow user IAM roles to have AWSCloudFormationFullAccess and AmazonS3ReadOnlyAccess permissions. Add an Organizations SCP at the AWS account root user level to deny all services except AWS CloudFormation and Amazon S3.`, ko: `사용자 IAM 역할이 AWSCloudFormationFullAccess 및 AmazonS3ReadOnlyAccess 권한을 갖도록 허용합니다. AWS 계정 루트 사용자 수준에서 조직 SCP를 추가하여 AWS CloudFormation 및 Amazon S3를 제외한 모든 서비스를 거부합니다.` },
      { k: 'D', en: `Allow user IAM roles to have ServiceCatalogEndUserAccess permissions only. Use an automation script to import the central portfolios to local AWS accounts, copy the TagOption, assign users access, and apply launch constraints.`, ko: `사용자 IAM 역할이 ServiceCatalogEndUserAccess 권한만 갖도록 허용합니다. 자동화 스크립트를 사용하여 중앙 포트폴리오를 로컬 AWS 계정으로 가져오고, TagOption을 복사하고, 사용자 액세스를 할당하고, 시작 제약 조건을 적용합니다.` },
      { k: 'E', en: `Use the AWS Service Catalog TagOption Library to maintain a list of tags required by the company. Apply the TagOption to AWS Service Catalog products or portfolios.`, ko: `AWS Service Catalog TagOption 라이브러리를 사용하여 회사에서 요구하는 태그 목록을 유지 관리합니다. AWS Service Catalog 제품 또는 포트폴리오에 TagOption을 적용합니다.` },
      { k: 'F', en: `Use the AWS CloudFormation Resource Tags property to enforce the application of tags to any CloudFormation templates that will be created for users.`, ko: `AWS CloudFormation 리소스 태그 속성을 사용하여 사용자를 위해 생성될 모든 CloudFormation 템플릿에 태그 적용을 적용합니다.` },
    ],
    answer: ['B', 'D', 'E'],
    vote: '93% BDE',
    explain: `<p><span class="mark-ok">✅ B, D, E — Service Catalog 제품·포트폴리오 + EndUserAccess + TagOption</span></p>
<p><strong>B — CloudFormation → Service Catalog 제품·포트폴리오:</strong> CloudFormation 템플릿을 Service Catalog 제품으로 등록하고 중앙 계정의 포트폴리오에 추가합니다. 포트폴리오를 Organizations 구조와 공유하면 여러 계정에 배포 가능합니다. 승인된 제품만 제공하므로 비승인 서비스 프로비저닝 방지도 충족합니다.</p>
<p><strong>D — ServiceCatalogEndUserAccess + 자동화 스크립트:</strong> 사용자에게 최소 권한(ServiceCatalogEndUserAccess)만 부여합니다. 자동화 스크립트로 포트폴리오 가져오기, TagOption 복사, 사용자 접근 설정, 시작 제약 조건 적용을 처리합니다.</p>
<p><strong>E — Service Catalog TagOption 라이브러리:</strong> 회사가 요구하는 태그 목록을 TagOption으로 정의하고 제품/포트폴리오에 적용하면 사용자가 시작하는 모든 인프라에 태그가 강제 적용됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3 버킷에 CloudFormation 템플릿을 저장하는 방식은 승인된 서비스 제한, 여러 계정 배포, 태그 강제 적용 기능을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — AWSCloudFormationFullAccess는 최소 권한이 아닙니다. SCP로 서비스를 제한하는 방식도 승인된 인프라 서비스 카탈로그 관리와는 다른 접근법입니다.</p>
<p><span class="mark-no">❌ F</span> — CloudFormation 리소스 태그 속성은 템플릿 내 리소스에 태그를 추가하지만, 프로비저닝 시점에 사용자가 지정한 모든 인프라에 태그를 강제 적용하는 TagOption만큼 포괄적이지 않습니다.</p>`,
    disc: [
      { ans: 'BDE (93%)', txt: '승인된 인프라 = Service Catalog 제품(B). 최소 권한 = ServiceCatalogEndUserAccess(D). 태그 강제 = TagOption 라이브러리(E). 세 요구 사항이 각각 B, D, E에 정확히 매핑됨.' },
    ]
  },

  {
    n: 387,
    en: `A company deploys a new web application. As part of the setup, the company configures AWS WAF to log to Amazon S3 through Amazon Kinesis Data Firehose. The company develops an Amazon Athena query that runs once daily to return AWS WAF log data from the previous 24 hours. The volume of daily logs is constant. However, over time, the same query is taking more time to run.<br><br>A solutions architect needs to design a solution to prevent the query time from continuing to increase. The solution must minimize operational overhead.<br><br>Which solution will meet these requirements?`,
    ko: `회사가 새로운 웹 애플리케이션을 배포합니다. 설정의 일부로 회사는 Amazon Kinesis Data Firehose를 통해 Amazon S3에 로그인하도록 AWS WAF를 구성합니다. 이 회사는 매일 한 번 실행되어 지난 24시간 동안의 AWS WAF 로그 데이터를 반환하는 Amazon Athena 쿼리를 개발합니다. 일일 로그의 양은 일정합니다. 그러나 시간이 지남에 따라 동일한 쿼리를 실행하는 데 더 많은 시간이 걸립니다.<br><br>솔루션 설계자는 쿼리 시간이 계속해서 증가하지 않도록 솔루션을 설계해야 합니다. 솔루션은 운영 오버헤드를 최소화해야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS Lambda function that consolidates each day's AWS WAF logs into one log file.`, ko: `매일의 AWS WAF 로그를 하나의 로그 파일로 통합하는 AWS Lambda 함수를 생성합니다.` },
      { k: 'B', en: `Reduce the amount of data scanned by configuring AWS WAF to send logs to a different S3 bucket each day.`, ko: `매일 다른 S3 버킷으로 로그를 보내도록 AWS WAF를 구성하여 스캔되는 데이터의 양을 줄입니다.` },
      { k: 'C', en: `Update the Kinesis Data Firehose configuration to partition the data in Amazon S3 by date and time. Create external tables for Amazon Redshift. Configure Amazon Redshift Spectrum to query the data source.`, ko: `날짜 및 시간별로 데이터를 분할하도록 Kinesis Data Firehose 구성을 업데이트합니다. Amazon Redshift용 외부 테이블을 생성합니다. 데이터 소스를 쿼리하도록 Amazon Redshift Spectrum을 구성합니다.` },
      { k: 'D', en: `Modify the Kinesis Data Firehose configuration and Athena table definition to partition the data by date and time. Change the Athena query to view the relevant partitions.`, ko: `날짜 및 시간별로 데이터를 분할하도록 Kinesis Data Firehose 구성 및 Athena 테이블 정의를 수정합니다. 관련 파티션을 보려면 Athena 쿼리를 변경합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — Firehose 파티셔닝 + Athena 테이블 파티션 정의 + 쿼리 수정</span></p>
<p><strong>문제 원인:</strong> 일일 로그 양은 일정하지만, 시간이 지남에 따라 누적 데이터가 증가합니다. Athena 쿼리가 전체 S3 버킷을 스캔하므로 데이터가 쌓일수록 쿼리 시간이 길어집니다.</p>
<p><strong>파티셔닝 솔루션:</strong> Kinesis Data Firehose의 동적 파티셔닝을 활성화하여 S3에 날짜/시간별 접두사(예: <code>year=2024/month=01/day=15/</code>)로 데이터를 저장합니다. Athena 테이블 정의에 파티션을 추가하고 쿼리에서 특정 파티션만 참조하면 매일 해당 날짜의 데이터만 스캔합니다. 데이터가 아무리 쌓여도 스캔 범위가 24시간으로 고정됩니다.</p>
<p>📎 <a href="https://aws.amazon.com/blogs/big-data/kinesis-data-firehose-now-supports-dynamic-partitioning-to-amazon-s3/" target="_blank">Kinesis Data Firehose 동적 파티셔닝 블로그</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 로그를 하나의 파일로 통합해도 Athena가 스캔해야 하는 총 데이터량이 줄지 않습니다. 파티셔닝 없이는 시간이 지날수록 스캔 범위가 계속 증가합니다.</p>
<p><span class="mark-no">❌ B</span> — 매일 다른 S3 버킷으로 전송하면 관리 오버헤드가 크게 증가하며, Athena 테이블 구성도 복잡해집니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon Redshift Spectrum은 S3 데이터를 쿼리하는 기능이지만, 새 서비스 프로비저닝과 운영 오버헤드가 증가합니다. 기존 Athena 파티셔닝으로 충분히 해결 가능합니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: '파티셔닝이 Athena 쿼리 성능·비용 최적화의 핵심. Firehose 동적 파티셔닝 + Athena 테이블 파티션 정의 + 쿼리 파티션 필터로 일일 24시간 데이터만 스캔. 누적 데이터와 무관하게 쿼리 시간 일정 유지.' },
    ]
  },

  {
    n: 388,
    en: `A company is developing a web application that runs on Amazon EC2 instances in an Auto Scaling group behind a public-facing Application Load Balancer (ALB). Only users from a specific country are allowed to access the application. The company needs the ability to log the access requests that have been blocked. The solution should require the least possible maintenance.<br><br>Which solution meets these requirements?`,
    ko: `한 회사는 공용 ALB(Application Load Balancer) 뒤에 있는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행되는 웹 애플리케이션을 개발하고 있습니다. 특정 국가의 사용자만 애플리케이션에 액세스할 수 있습니다. 회사에는 차단된 액세스 요청을 기록하는 기능이 필요합니다. 솔루션에는 최소한의 유지 관리만 필요합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an IPSet containing a list of IP ranges that belong to the specified country. Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from an IP range in the IPSet. Associate the rule with the web ACL. Associate the web ACL with the ALB.`, ko: `지정된 국가에 속하는 IP 범위 목록을 포함하는 IPSet을 생성합니다. AWS WAF 웹 ACL을 생성합니다. IPSet의 IP 범위에서 발생하지 않는 요청을 차단하는 규칙을 구성합니다. 규칙을 웹 ACL과 연결합니다. 웹 ACL을 ALB와 연결합니다.` },
      { k: 'B', en: `Create an AWS WAF web ACL. Configure a rule to block any requests that do not originate from the specified country. Associate the rule with the web ACL. Associate the web ACL with the ALB.`, ko: `AWS WAF 웹 ACL을 생성합니다. 지정된 국가에서 발생하지 않는 요청을 차단하는 규칙을 구성합니다. 규칙을 웹 ACL과 연결합니다. 웹 ACL을 ALB와 연결합니다.` },
      { k: 'C', en: `Configure AWS Shield to block any requests that do not originate from the specified country. Associate AWS Shield with the ALB.`, ko: `지정된 국가에서 발생하지 않는 요청을 차단하도록 AWS Shield를 구성합니다. AWS Shield를 ALB와 연결합니다.` },
      { k: 'D', en: `Create a security group rule that allows ports 80 and 443 from IP ranges that belong to the specified country. Associate the security group with the ALB.`, ko: `지정된 국가에 속한 IP 범위에서 포트 80 및 443을 허용하는 보안 그룹 규칙을 생성합니다. 보안 그룹을 ALB와 연결합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS WAF 지역(Geo) 일치 규칙 + ALB 연결</span></p>
<p><strong>AWS WAF 지역 일치:</strong> AWS WAF는 요청 출처 국가를 기준으로 트래픽을 허용/차단하는 <strong>지역 일치(Geo match) 규칙</strong>을 네이티브로 지원합니다. IP 주소 범위를 수동으로 관리할 필요 없이 국가 코드만 지정하면 됩니다. AWS가 IP-국가 매핑을 자동으로 최신 상태로 유지하므로 유지 관리가 최소화됩니다.</p>
<p><strong>차단 로그:</strong> AWS WAF 로그를 활성화하면 허용·차단된 모든 요청이 기록됩니다. 차단된 요청도 로그에 포함됩니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html" target="_blank">AWS WAF 지역 일치 규칙 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — IP 범위 기반 IPSet은 국가별 IP 범위가 변경될 때마다 수동으로 업데이트해야 합니다. 유지 관리 부담이 크며, B의 WAF 지역 일치 규칙이 이를 자동으로 처리합니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Shield는 DDoS 공격 방어 서비스입니다. 국가별 접근 제어나 차단 로그 기능을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 보안 그룹은 IP 주소 기반 제어이며, 국가별 IP 범위를 수동으로 관리해야 합니다. 차단된 요청에 대한 로그도 지원하지 않습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'WAF Geo match 규칙은 국가 코드만 지정하면 AWS가 IP-국가 매핑을 자동 유지. 유지 관리 최소. WAF 로그로 차단 요청 기록. IP 범위 수동 관리(A, D) 대비 관리 부담 없음.' },
    ]
  },

  {
    n: 389,
    en: `A company is migrating an application from on-premises infrastructure to the AWS Cloud. During migration design meetings, the company expressed concerns about the availability and recovery options for its legacy Windows file server. The file server contains sensitive business-critical data that cannot be recreated in the event of data corruption or data loss. According to compliance requirements, the data must not travel across the public internet. The company wants to move to AWS managed services where possible.<br><br>The company decides to store the data in an Amazon FSx for Windows File Server file system. A solutions architect must design a solution that copies the data to another AWS Region for disaster recovery (DR) purposes.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사가 온프레미스 인프라에서 AWS 클라우드로 애플리케이션을 마이그레이션하고 있습니다. 파일 서버에는 데이터 손상이나 데이터 손실 시 다시 생성할 수 없는 중요한 비즈니스 크리티컬 데이터가 포함되어 있습니다. 규정 준수 요구 사항에 따라 데이터는 공용 인터넷을 통해 이동해서는 안 됩니다.<br><br>회사는 Amazon FSx for Windows File Server 파일 시스템에 데이터를 저장하기로 결정했습니다. 솔루션 설계자는 재해 복구(DR) 목적으로 데이터를 다른 AWS 리전에 복사하는 솔루션을 설계해야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a destination Amazon S3 bucket in the DR Region. Establish connectivity between the FSx for Windows File Server file system in the primary Region and the S3 bucket in the DR Region by using Amazon FSx File Gateway. Configure the S3 bucket as a continuous backup source in FSx File Gateway.`, ko: `DR 리전에 대상 Amazon S3 버킷을 생성합니다. Amazon FSx 파일 게이트웨이를 사용하여 기본 리전의 FSx for Windows File Server 파일 시스템과 DR 리전의 S3 버킷 간에 연결을 설정합니다. FSx 파일 게이트웨이에서 S3 버킷을 연속 백업 소스로 구성합니다.` },
      { k: 'B', en: `Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using AWS Site-to-Site VPN. Configure AWS DataSync to communicate by using VPN endpoints.`, ko: `DR 리전에 FSx for Windows File Server 파일 시스템을 생성합니다. AWS Site-to-Site VPN을 사용하여 기본 리전의 VPC와 DR 리전의 VPC 간에 연결을 설정합니다. VPN 엔드포인트를 사용하여 통신하도록 AWS DataSync를 구성합니다.` },
      { k: 'C', en: `Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using VPC peering. Configure AWS DataSync to communicate by using interface VPC endpoints with AWS PrivateLink.`, ko: `DR 리전에 FSx for Windows File Server 파일 시스템을 생성합니다. VPC 피어링을 사용하여 기본 리전의 VPC와 DR 리전의 VPC 간의 연결을 설정합니다. AWS PrivateLink와 인터페이스 VPC 엔드포인트를 사용하여 통신하도록 AWS DataSync를 구성합니다.` },
      { k: 'D', en: `Create an FSx for Windows File Server file system in the DR Region. Establish connectivity between the VPC in the primary Region and the VPC in the DR Region by using AWS Transit Gateway in each Region. Use AWS Transfer Family to copy files between the FSx for Windows File Server file system in the primary Region and the FSx for Windows File Server file system in the DR Region over the private AWS backbone network.`, ko: `DR 리전에 FSx for Windows File Server 파일 시스템을 생성합니다. 각 리전의 AWS Transit Gateway를 사용하여 기본 리전의 VPC와 DR 리전의 VPC 간의 연결을 설정합니다. AWS Transfer Family를 사용하여 기본 리전의 FSx와 DR 리전의 FSx 간에 파일을 복사합니다.` },
    ],
    answer: ['C'],
    vote: '88% C',
    explain: `<p><span class="mark-ok">✅ C — VPC 피어링 + DataSync + PrivateLink 인터페이스 엔드포인트</span></p>
<p><strong>VPC 피어링:</strong> 두 AWS 리전 간의 VPC를 연결합니다. 피어링 트래픽은 AWS 내부 네트워크를 통해 이동하므로 공용 인터넷을 통하지 않습니다. 두 VPC 간 연결에는 VPC 피어링이 Transit Gateway보다 비용 효율적입니다.</p>
<p><strong>AWS DataSync:</strong> FSx for Windows File Server 간 데이터 복제에 최적화된 완전 관리형 서비스입니다. 증분 복제, 스케줄링, 데이터 무결성 검증을 지원합니다.</p>
<p><strong>PrivateLink 인터페이스 엔드포인트:</strong> DataSync가 AWS 내부 네트워크를 통해 통신하도록 하여 데이터가 공용 인터넷을 통하지 않음을 보장합니다.</p>
<p>📎 <a href="https://aws.amazon.com/blogs/storage/how-to-replicate-amazon-fsx-file-server-data-across-aws-regions/" target="_blank">FSx 리전 간 복제 AWS 블로그</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon FSx 파일 게이트웨이는 온프레미스에서 S3로의 파일 스토리지 게이트웨이입니다. FSx to S3 구성은 공용 인터넷 통과 여부가 명시되지 않았으며, FSx → FSx 복제 목적에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Site-to-Site VPN은 온프레미스와 AWS 간의 연결 도구입니다. 두 AWS 리전 간 VPC 연결에는 VPC 피어링이나 Transit Gateway가 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — Transit Gateway는 여러 VPC를 허브로 연결하는 서비스로, 두 VPC만 연결하는 경우 VPC 피어링이 더 단순하고 비용 효율적입니다. AWS Transfer Family도 FSx 간 파일 복제에 최적화된 도구가 아닙니다.</p>`,
    disc: [
      { ans: 'C (88%)', txt: 'VPC 피어링으로 리전 간 AWS 내부 네트워크 연결(공용 인터넷 미통과). DataSync가 FSx 간 관리형 복제 제공. PrivateLink 엔드포인트로 DataSync 트래픽도 프라이빗 유지.' },
    ]
  },

  {
    n: 390,
    en: `A company is currently in the design phase of an application that will need an RPO of less than 5 minutes and an RTO of less than 10 minutes. The solutions architecture team is forecasting that the database will store approximately 10 TB of data. As part of the design, they are looking for a database solution that will provide the company with the ability to fail over to a secondary Region.<br><br>Which solution will meet these business requirements at the LOWEST cost?`,
    ko: `한 회사는 현재 5분 미만의 RPO와 10분 미만의 RTO가 필요한 애플리케이션의 설계 단계에 있습니다. 솔루션 아키텍처 팀은 데이터베이스가 약 10TB의 데이터를 저장할 것으로 예상하고 있습니다. 설계의 일환으로 그들은 회사에 보조 리전으로 장애 조치할 수 있는 기능을 제공할 데이터베이스 솔루션을 찾고 있습니다.<br><br>이 비즈니스 요구 사항을 가장 낮은 비용으로 충족할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy an Amazon Aurora DB cluster and take snapshots of the cluster every 5 minutes. Once a snapshot is complete, copy the snapshot to a secondary Region to serve as a backup in the event of a failure.`, ko: `Amazon Aurora DB 클러스터를 배포하고 5분마다 클러스터의 스냅샷을 찍습니다. 스냅샷이 완료되면 스냅샷을 보조 리전에 복사하여 장애 발생 시 백업으로 사용합니다.` },
      { k: 'B', en: `Deploy an Amazon RDS instance with a cross-Region read replica in a secondary Region. In the event of a failure, promote the read replica to become the primary.`, ko: `보조 리전에 리전 간 읽기 전용 복제본이 있는 Amazon RDS 인스턴스를 배포합니다. 오류가 발생하면 읽기 전용 복제본을 기본 복제본으로 승격합니다.` },
      { k: 'C', en: `Deploy an Amazon Aurora DB cluster in the primary Region and another in a secondary Region. Use AWS DMS to keep the secondary Region in sync.`, ko: `기본 리전에 Amazon Aurora DB 클러스터를 배포하고 보조 리전에 또 다른 클러스터를 배포합니다. AWS DMS를 사용하여 보조 리전을 동기화 상태로 유지합니다.` },
      { k: 'D', en: `Deploy an Amazon RDS instance with a read replica in the same Region. In the event of a failure, promote the read replica to become the primary.`, ko: `동일한 리전에 읽기 전용 복제본이 있는 Amazon RDS 인스턴스를 배포합니다. 오류가 발생하면 읽기 전용 복제본을 기본 복제본으로 승격합니다.` },
    ],
    answer: ['B'],
    vote: '83% B',
    explain: `<p><span class="mark-ok">✅ B — Amazon RDS 리전 간 읽기 전용 복제본 + 승격</span></p>
<p><strong>RPO &lt; 5분:</strong> RDS 리전 간 읽기 전용 복제본은 비동기 복제를 사용하며, 일반적으로 수 초~수 분의 복제 지연이 있습니다. 5분 미만의 RPO를 충족합니다.</p>
<p><strong>RTO &lt; 10분:</strong> 장애 발생 시 읽기 전용 복제본을 기본 인스턴스로 승격하는 작업은 일반적으로 몇 분 이내에 완료됩니다.</p>
<p><strong>보조 리전 장애 조치:</strong> 리전 간 읽기 전용 복제본은 다른 AWS 리전에 배포되므로 리전 수준 장애에 대응합니다.</p>
<p><strong>최저 비용:</strong> C(두 개의 Aurora 클러스터 + DMS)는 올바른 솔루션이지만 비용이 더 높습니다. B는 단일 RDS 인스턴스 + 읽기 전용 복제본으로 더 저렴합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 스냅샷은 완성되는 데 시간이 걸리고, 보조 리전으로 복사하는 데도 추가 시간이 필요합니다. RPO 5분 보장이 불확실하며, 복구 시 스냅샷에서 새 인스턴스를 시작해야 하므로 RTO 10분 충족도 어렵습니다.</p>
<p><span class="mark-no">❌ C</span> — Aurora 두 클러스터 + DMS는 강력한 솔루션이지만 비용이 가장 높습니다. Aurora는 자체 리전 간 복제를 지원하므로 DMS도 불필요합니다.</p>
<p><span class="mark-no">❌ D</span> — 동일 리전 읽기 전용 복제본은 리전 장애 시 장애 조치를 제공하지 않습니다. "보조 리전으로 장애 조치" 요구 사항을 충족하지 못합니다.</p>`,
    disc: [
      { ans: 'B (83%)', txt: 'RDS 리전 간 읽기 전용 복제본: RPO &lt; 5분(비동기 복제), RTO &lt; 10분(승격), 보조 리전 장애 조치 모두 충족. C는 올바르지만 비용이 더 높음. D는 리전 장애 조치 미지원.' },
      { ans: 'C (17%)', txt: 'Aurora 두 클러스터가 더 낮은 복제 지연(RPO)과 자동 장애 조치를 제공한다는 의견이 있으나, 비용이 더 높아 "최저 비용" 요건 미충족.' },
    ]
  },
];