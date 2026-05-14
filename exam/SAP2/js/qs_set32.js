window.QS_SET32 = [
  {
    n: 311,
    en: `<p>A company runs its application on Amazon EC2 instances and AWS Lambda functions. The EC2 instances experience a continuous and stable load. The Lambda functions experience a varied and unpredictable load. The application includes a caching layer that uses an Amazon MemoryDB for Redis cluster.</p><p>A solutions architect must recommend a solution to minimize the company's overall monthly costs.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 Amazon EC2 인스턴스와 AWS Lambda 함수에서 애플리케이션을 실행합니다. EC2 인스턴스는 지속적이고 안정적인 로드를 경험합니다. Lambda 함수는 다양하고 예측할 수 없는 로드를 경험합니다. 애플리케이션에는 Amazon MemoryDB for Redis 클러스터를 사용하는 캐싱 계층이 포함되어 있습니다.</p><p>솔루션 설계자는 회사의 전체 월별 비용을 최소화할 수 있는 솔루션을 권장해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Purchase an EC2 instance Savings Plan to cover the EC2 instances. Purchase a Compute Savings Plan for Lambda to cover the minimum expected consumption of the Lambda functions. Purchase reserved nodes to cover the MemoryDB cache nodes.`, ko: `EC2 인스턴스를 보장하려면 EC2 인스턴스 Savings Plan을 구매합니다. Lambda 함수의 최소 예상 소비량을 충당하려면 Lambda용 Compute Savings Plan을 구매합니다. MemoryDB 캐시 노드를 포함하려면 예약 노드를 구매합니다.` },
      { k: 'B', en: `Purchase a Compute Savings Plan to cover the EC2 instances. Purchase Lambda reserved concurrency to cover the expected Lambda usage. Purchase reserved nodes to cover the MemoryDB cache nodes.`, ko: `EC2 인스턴스를 포함하는 Compute Savings Plan을 구매합니다. 예상되는 Lambda 사용량을 처리하려면 Lambda 예약 동시성을 구매합니다. MemoryDB 캐시 노드를 포함하려면 예약 노드를 구매합니다.` },
      { k: 'C', en: `Purchase a Compute Savings Plan to cover the entire expected cost of the EC2 instances, Lambda functions, and MemoryDB cache nodes.`, ko: `EC2 인스턴스, Lambda 함수 및 MemoryDB 캐시 노드의 전체 예상 비용을 충당하려면 Compute Savings Plan을 구매합니다.` },
      { k: 'D', en: `Purchase a Compute Savings Plan to cover the EC2 instances and the MemoryDB cache nodes. Purchase Lambda reserved concurrency to cover the expected Lambda usage.`, ko: `EC2 인스턴스와 MemoryDB 캐시 노드를 포함하는 Compute Savings Plan을 구매합니다. 예상되는 Lambda 사용량을 처리하려면 Lambda 예약 동시성을 구매합니다.` },
    ],
    answer: ['A'],
    vote: '77% A',
    explain: `<p><span class="mark-ok">✅ A — EC2 Instance Savings Plan + Lambda Compute Savings Plan + MemoryDB 예약 노드</span></p>
<p>각 서비스에 최적화된 비용 절감 도구를 사용하는 것이 핵심입니다.</p>
<p>① <strong>EC2 Instance Savings Plan</strong>: 지속적이고 안정적인 EC2 워크로드에 가장 높은 할인율(최대 72%)을 제공합니다.<br>② <strong>Lambda용 Compute Savings Plan</strong>: 예측 불가능한 Lambda 로드에서 최소 예상 사용량에 대해 비용을 절감합니다. Lambda는 Compute Savings Plan의 적용을 받습니다.<br>③ <strong>MemoryDB 예약 노드</strong>: Amazon MemoryDB for Redis는 Compute Savings Plan의 적용 대상이 아니므로, 예약 노드를 별도 구매해야 합니다.</p>
<p><a href="https://aws.amazon.com/about-aws/whats-new/2020/02/aws-lambda-participates-in-compute-savings-plans/" target="_blank">AWS 공식 문서: Lambda Compute Savings Plans</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — <strong>Lambda 예약 동시성(Reserved Concurrency)</strong>은 동시 실행 횟수를 제한하여 다른 함수의 리소스를 보호하기 위한 기능이며, 비용 절감 도구가 아닙니다. 예약 동시성을 구매해도 Lambda 요금이 줄어들지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Compute Savings Plan은 MemoryDB for Redis를 적용 대상으로 지원하지 않습니다. 따라서 MemoryDB 비용은 예약 노드로 별도 커버해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — B와 동일하게 Lambda 예약 동시성은 비용 절감과 무관합니다. 또한 Compute Savings Plan은 MemoryDB를 포함하지 않습니다.</p>`,
    disc: [
      { ans: 'A (77%)', txt: 'Lambda 예약 동시성은 비용 절감 도구가 아님. Compute Savings Plan은 MemoryDB 미적용. EC2는 Instance SP, Lambda는 Compute SP, MemoryDB는 예약 노드로 각각 최적화.' },
      { ans: 'B (23%)', txt: 'MemoryDB 예약 노드를 포함한 부분은 맞으나, Lambda 예약 동시성이 비용 절감에 도움이 된다는 오해에서 비롯된 선택.' },
    ]
  },
  {
    n: 312,
    en: `<p>A company is launching a new online game on Amazon EC2 instances. The game must be available globally. The company plans to run the game in three AWS Regions: us-east-1, eu-west-1, and ap-southeast-1. The game's leaderboards, player inventory, and event status must be available across Regions.</p><p>A solutions architect must design a solution that will give any Region the ability to scale to handle the load of all Regions. Additionally, users must automatically connect to the Region that provides the least latency.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 Amazon EC2 인스턴스에서 새로운 온라인 게임을 출시하고 있습니다. 게임은 전 세계적으로 이용 가능해야 합니다. 회사는 us-east-1, eu-west-1, ap-southeast-1의 3개 AWS 리전에서 게임을 실행할 계획입니다. 게임의 순위표, 플레이어 인벤토리 및 이벤트 상태는 여러 리전에서 사용할 수 있어야 합니다.</p><p>솔루션 설계자는 모든 리전의 로드를 처리할 수 있도록 모든 리전에 확장 기능을 제공하는 솔루션을 설계해야 합니다. 또한 사용자는 지연 시간이 가장 짧은 리전에 자동으로 연결해야 합니다.</p><p>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an EC2 Spot Fleet. Attach the Spot Fleet to a Network Load Balancer (NLB) in each Region. Create an AWS Global Accelerator IP address that points to the NLB. Create an Amazon Route 53 latency-based routing entry for the Global Accelerator IP address. Save the game metadata to an Amazon RDS for MySQL DB instance in each Region. Set up a read replica in the other Regions.`, ko: `EC2 스팟 집합을 생성합니다. 각 리전의 NLB(Network Load Balancer)에 스팟 집합을 연결합니다. NLB를 가리키는 AWS Global Accelerator IP 주소를 생성합니다. Global Accelerator IP 주소에 대한 Amazon Route 53 지연 시간 기반 라우팅 항목을 생성합니다. 각 리전의 Amazon RDS for MySQL DB 인스턴스에 게임 메타데이터를 저장합니다. 다른 리전에 읽기 전용 복제본을 설정합니다.` },
      { k: 'B', en: `Create an Auto Scaling group for the EC2 instances. Attach the Auto Scaling group to a Network Load Balancer (NLB) in each Region. For each Region, create an Amazon Route 53 entry that uses geoproximity routing and points to the NLB in that Region. Save the game metadata to MySQL databases on EC2 instances in each Region. Set up replication between the database EC2 instances in each Region.`, ko: `EC2 인스턴스용 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹을 각 리전의 NLB(Network Load Balancer)에 연결합니다. 각 리전에 대해 지리 근접 라우팅을 사용하고 해당 리전의 NLB를 가리키는 Amazon Route 53 항목을 생성합니다. 각 리전의 EC2 인스턴스에 있는 MySQL 데이터베이스에 게임 메타데이터를 저장합니다. 각 리전의 데이터베이스 EC2 인스턴스 간 복제를 설정합니다.` },
      { k: 'C', en: `Create an Auto Scaling group for the EC2 instances. Attach the Auto Scaling group to a Network Load Balancer (NLB) in each Region. For each Region, create an Amazon Route 53 entry that uses latency-based routing and points to the NLB in that Region. Save the game metadata to an Amazon DynamoDB global table.`, ko: `EC2 인스턴스에 대한 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹을 각 리전의 NLB(Network Load Balancer)에 연결합니다. 각 리전에 대해 지연 시간 기반 라우팅을 사용하고 해당 리전의 NLB를 가리키는 Amazon Route 53 항목을 생성합니다. 게임 메타데이터를 Amazon DynamoDB 글로벌 테이블에 저장합니다.` },
      { k: 'D', en: `Use EC2 Global View. Deploy the EC2 instances to each Region. Attach the instances to a Network Load Balancer (NLB). Deploy a DNS server on an EC2 instance in each Region. Set up custom logic on each DNS server to redirect the user to the Region that provides the lowest latency. Save the game metadata to an Amazon Aurora global database.`, ko: `EC2 글로벌 뷰를 사용합니다. 각 리전에 EC2 인스턴스를 배포합니다. 인스턴스를 NLB(Network Load Balancer)에 연결합니다. 각 리전의 EC2 인스턴스에 DNS 서버를 배포합니다. 각 DNS 서버에 사용자 지정 로직을 설정하여 사용자를 가장 짧은 지연 시간을 제공하는 리전으로 리디렉션합니다. 게임 메타데이터를 Amazon Aurora 글로벌 데이터베이스에 저장합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — Auto Scaling + NLB + Route 53 지연 시간 기반 라우팅 + DynamoDB 글로벌 테이블</span></p>
<p>두 가지 핵심 요구 사항을 분석하면:<br>① <strong>최소 지연 시간 라우팅</strong>: Route 53 <strong>지연 시간 기반 라우팅(Latency-based routing)</strong>은 실제 네트워크 지연을 측정하여 가장 빠른 리전으로 사용자를 자동 연결합니다. 지리 근접 라우팅(Geoproximity)은 물리적 거리 기반이므로 실제 지연과 차이가 있을 수 있습니다.<br>② <strong>리전 간 데이터 공유</strong>: <strong>DynamoDB 글로벌 테이블</strong>은 여러 리전에 완전 복제된 멀티-마스터 구성을 제공하여 순위표, 인벤토리, 이벤트 상태를 모든 리전에서 일관되게 유지합니다. Auto Scaling으로 부하 급증에도 대응 가능합니다.</p>
<p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html" target="_blank">AWS 공식 문서: DynamoDB 글로벌 테이블</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 스팟 집합(Spot Fleet)은 중단될 수 있어 게임 서버처럼 고가용성이 필요한 워크로드에 적합하지 않습니다. Global Accelerator + Route 53 지연 시간 라우팅 조합도 불필요하게 복잡합니다.</p>
<p><span class="mark-no">❌ B</span> — 지리 근접 라우팅은 물리적 거리를 기준으로 하여 실제 네트워크 지연을 최소화하지 못할 수 있습니다. EC2 기반 MySQL 복제 관리도 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ D</span> — EC2에 커스텀 DNS 서버를 직접 배포하고 지연 시간 로직을 구현하는 것은 Route 53의 내장 기능으로 해결할 수 있는 것을 불필요하게 복잡하게 만듭니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: '지연 시간 기반 라우팅이 지리 근접 라우팅보다 정확한 네트워크 지연 최소화. DynamoDB 글로벌 테이블이 멀티-리전 쓰기를 기본 지원하여 운영 오버헤드 최소화.' },
    ]
  },
  {
    n: 313,
    en: `<p>A company is deploying a third-party firewall appliance solution from AWS Marketplace to monitor and protect traffic that leaves the company's AWS environments. The company wants to deploy this appliance into a shared services VPC and route all outbound internet-bound traffic through the appliances.</p><p>A solutions architect needs to recommend a deployment method that prioritizes reliability and minimizes failover time between firewall appliances within a single AWS Region. The company has set up routing from the shared services VPC to other VPCs.</p><p>Which steps should the solutions architect recommend to meet these requirements? (Choose three.)</p>`,
    ko: `<p>한 회사가 AWS Marketplace의 타사 방화벽 어플라이언스 솔루션을 배포하여 회사의 AWS 환경에서 나가는 트래픽을 모니터링하고 보호하려고 합니다. 회사는 이 어플라이언스를 공유 서비스 VPC에 배포하고 모든 아웃바운드 인터넷 바인딩 트래픽을 어플라이언스를 통해 라우팅하려고 합니다.</p><p>솔루션 설계자는 안정성을 우선시하고 단일 AWS 리전 내 방화벽 어플라이언스 간의 장애 조치 시간을 최소화하는 배포 방법을 권장해야 합니다. 회사는 공유 서비스 VPC에서 다른 VPC로의 라우팅을 설정했습니다.</p><p>이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계를 권장해야 합니까? (3개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 3,
    choices: [
      { k: 'A', en: `Deploy two firewall appliances into the shared services VPC, each in a separate Availability Zone.`, ko: `두 개의 방화벽 어플라이언스를 각각 별도의 가용 영역에 있는 공유 서비스 VPC에 배포합니다.` },
      { k: 'B', en: `Create a new Network Load Balancer in the shared services VPC. Create a new target group, and attach it to the new Network Load Balancer. Add each of the firewall appliance instances to the target group.`, ko: `공유 서비스 VPC에 새 Network Load Balancer를 생성합니다. 새 대상 그룹을 생성하고 이를 새 Network Load Balancer에 연결합니다. 각 방화벽 어플라이언스 인스턴스를 대상 그룹에 추가합니다.` },
      { k: 'C', en: `Create a new Gateway Load Balancer in the shared services VPC. Create a new target group, and attach it to the new Gateway Load Balancer. Add each of the firewall appliance instances to the target group.`, ko: `공유 서비스 VPC에서 새 게이트웨이 로드 밸런서를 생성합니다. 새 대상 그룹을 생성하고 이를 새 게이트웨이 로드 밸런서에 연결합니다. 각 방화벽 어플라이언스 인스턴스를 대상 그룹에 추가합니다.` },
      { k: 'D', en: `Create a VPC interface endpoint. Add a route to the route table in the shared services VPC. Designate the new endpoint as the next hop for traffic that enters the shared services VPC from other VPCs.`, ko: `VPC 인터페이스 엔드포인트를 생성합니다. 공유 서비스 VPC의 라우팅 테이블에 경로를 추가합니다. 다른 VPC에서 공유 서비스 VPC로 들어오는 트래픽에 대한 다음 홉으로 새 엔드포인트를 지정합니다.` },
      { k: 'E', en: `Deploy two firewall appliances into the shared services VPC, each in the same Availability Zone.`, ko: `각각 동일한 가용 영역에 있는 두 개의 방화벽 어플라이언스를 공유 서비스 VPC에 배포합니다.` },
      { k: 'F', en: `Create a VPC Gateway Load Balancer endpoint. Add a route to the route table in the shared services VPC. Designate the new endpoint as the next hop for traffic that enters the shared services VPC from other VPCs.`, ko: `VPC 게이트웨이 로드 밸런서 엔드포인트를 생성합니다. 공유 서비스 VPC의 라우팅 테이블에 경로를 추가합니다. 다른 VPC에서 공유 서비스 VPC로 들어오는 트래픽에 대한 다음 홉으로 새 엔드포인트를 지정합니다.` },
    ],
    answer: ['A', 'C', 'F'],
    vote: '87% ACF',
    explain: `<p><span class="mark-ok">✅ A — 별도 가용 영역에 어플라이언스 배포</span></p>
<p>두 방화벽 어플라이언스를 서로 다른 AZ에 배치하면 AZ 장애 시에도 서비스가 지속됩니다.</p>
<p><span class="mark-ok">✅ C — Gateway Load Balancer(GWLB) 생성 및 대상 그룹 연결</span></p>
<p><strong>AWS Gateway Load Balancer</strong>는 타사 네트워크 가상 어플라이언스(방화벽, IDS/IPS 등)를 투명하게 삽입하기 위해 설계된 로드 밸런서입니다. GENEVE 프로토콜을 사용하여 L3 트래픽을 어플라이언스에 전달하고 응답을 원래 경로로 반환합니다. 어플라이언스 장애 시 자동으로 다른 어플라이언스로 장애 조치가 이루어집니다.</p>
<p><span class="mark-ok">✅ F — Gateway Load Balancer 엔드포인트 생성 + 라우팅 설정</span></p>
<p>다른 VPC에서 공유 서비스 VPC로 들어오는 트래픽이 GWLB 엔드포인트를 거쳐 방화벽 어플라이언스로 라우팅됩니다.</p>
<p><a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/getting-started.html" target="_blank">AWS 공식 문서: Gateway Load Balancer 시작하기</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Network Load Balancer는 L4 로드 밸런싱에 사용되지만, 타사 네트워크 어플라이언스를 투명하게 삽입하는 데는 Gateway Load Balancer가 표준 아키텍처입니다. NLB는 패킷의 소스/목적지 IP를 보존하지 않아 방화벽 기능에 부적합할 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — VPC 인터페이스 엔드포인트는 AWS PrivateLink를 통한 서비스 접근에 사용되며, 네트워크 트래픽을 방화벽 어플라이언스로 투명하게 라우팅하는 데 적합하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — 같은 AZ에 어플라이언스 두 개를 배치하면 해당 AZ 장애 시 둘 다 중단되어 고가용성이 확보되지 않습니다.</p>`,
    disc: [
      { ans: 'ACF (87%)', txt: 'GWLB는 타사 방화벽/IDS 어플라이언스에 최적화된 로드 밸런서. GWLB 엔드포인트로 다른 VPC 트래픽을 투명하게 어플라이언스로 유도. AZ 분산으로 고가용성 확보.' },
    ]
  },
  {
    n: 314,
    en: `<p>A solutions architect needs to migrate an on-premises legacy application to AWS. The application runs on two servers behind a load balancer. The application requires a license file that is associated with the MAC address of the server's network adapter. It takes the software vendor 12 hours to send new license files. The application also uses configuration files with a static IP address to access a database server; host names are not supported.</p><p>Given these requirements, which combination of steps should be taken to implement a highly available architecture for the application servers in AWS? (Choose two.)</p>`,
    ko: `<p>솔루션 설계자가 온프레미스 레거시 애플리케이션을 AWS로 마이그레이션해야 합니다. 애플리케이션은 로드 밸런서 뒤의 두 서버에서 실행됩니다. 애플리케이션에는 서버 네트워크 어댑터의 MAC 주소와 연결된 라이선스 파일이 필요합니다. 소프트웨어 공급업체에서 새 라이선스 파일을 보내는 데 12시간이 걸립니다. 또한 애플리케이션은 고정 IP 주소가 포함된 구성 파일을 사용하여 데이터베이스 서버에 액세스하며 호스트 이름은 지원되지 않습니다.</p><p>이러한 요구 사항을 고려할 때 AWS의 애플리케이션 서버에 대한 고가용성 아키텍처를 구현하려면 어떤 단계 조합을 수행해야 합니까? (2개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 2,
    choices: [
      { k: 'A', en: `Create a pool of ENIs. Request license files from the vendor for the pool, and store the license files in Amazon S3. Create a bootstrap automation script to download a license file and attach the corresponding ENI to an Amazon EC2 instance.`, ko: `ENI 풀을 생성합니다. 풀에 대한 라이선스 파일을 공급업체에 요청하고 라이선스 파일을 Amazon S3에 저장합니다. 라이선스 파일을 다운로드하고 해당 ENI를 Amazon EC2 인스턴스에 연결하는 부트스트랩 자동화 스크립트를 생성합니다.` },
      { k: 'B', en: `Create a pool of ENIs. Request license files from the vendor for the pool, and store the license files on an Amazon EC2 instance. Create an AMI from the instance and use this AMI for all future EC2 instances.`, ko: `ENI 풀을 생성합니다. 풀에 대한 라이선스 파일을 공급업체에 요청하고 Amazon EC2 인스턴스에 라이선스 파일을 저장합니다. 인스턴스에서 AMI를 생성하고 향후 모든 EC2 인스턴스에 이 AMI를 사용합니다.` },
      { k: 'C', en: `Create a bootstrap automation script to request a new license file from the vendor. When the response is received, apply the license file to an Amazon EC2 instance.`, ko: `공급업체에 새 라이선스 파일을 요청하는 부트스트랩 자동화 스크립트를 생성합니다. 응답을 받으면 라이선스 파일을 Amazon EC2 인스턴스에 적용합니다.` },
      { k: 'D', en: `Edit the bootstrap automation script to read the database server IP address from the AWS Systems Manager Parameter Store, and inject the value into the local configuration files.`, ko: `부트스트랩 자동화 스크립트를 편집하여 AWS Systems Manager Parameter Store에서 데이터베이스 서버 IP 주소를 읽고 해당 값을 로컬 구성 파일에 삽입합니다.` },
      { k: 'E', en: `Edit an Amazon EC2 instance to include the database server IP address in the configuration files, and re-create the AMI to use for all future EC2 instances.`, ko: `구성 파일에 데이터베이스 서버 IP 주소를 포함하도록 Amazon EC2 인스턴스를 편집하고 향후 모든 EC2 인스턴스에 사용할 AMI를 다시 생성합니다.` },
    ],
    answer: ['A', 'D'],
    vote: '100% AD',
    explain: `<p><span class="mark-ok">✅ A — ENI 풀 + S3에 라이선스 저장 + 부트스트랩 스크립트로 ENI 연결</span></p>
<p>MAC 주소 기반 라이선스 문제를 해결하는 핵심은 <strong>ENI(Elastic Network Interface)의 MAC 주소가 고정</strong>된다는 점입니다. 사전에 ENI 풀을 생성하고 해당 MAC 주소로 라이선스를 발급받아 S3에 저장한 뒤, 인스턴스 부트스트랩 시 ENI를 연결하면 12시간 대기 없이 즉시 라이선스를 활용할 수 있습니다.</p>
<p><span class="mark-ok">✅ D — SSM Parameter Store에서 DB IP 주소 동적 주입</span></p>
<p>고정 IP 주소가 AMI에 하드코딩되어 있으면 유연성이 없습니다. <strong>AWS Systems Manager Parameter Store</strong>에 DB 서버 IP 주소를 저장하고 부트스트랩 스크립트에서 동적으로 읽어 구성 파일에 주입하면, DB 서버 IP 변경 시에도 AMI 재생성 없이 대응할 수 있습니다.</p>
<p><a href="https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/" target="_blank">AWS 공식 문서: Elastic Network Interfaces</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 라이선스 파일을 AMI에 포함시키면 인스턴스가 종료되고 새 인스턴스가 시작될 때 기존 ENI를 다시 연결하지 않는 한 MAC 주소가 바뀌어 라이선스가 무효화됩니다.</p>
<p><span class="mark-no">❌ C</span> — 새 인스턴스 시작 시마다 공급업체에 새 라이선스를 요청하면 12시간 대기로 인해 고가용성 요구 사항을 충족할 수 없습니다.</p>
<p><span class="mark-no">❌ E</span> — DB IP를 AMI에 하드코딩하면 IP 변경 시 AMI를 다시 만들어야 하며, 유연성이 없고 운영 오버헤드가 증가합니다.</p>`,
    disc: [
      { ans: 'AD (100%)', txt: 'ENI의 MAC 주소는 고정됨 → 풀 생성 후 사전 라이선스 발급. Parameter Store로 DB IP를 동적 주입하여 구성 파일 하드코딩 문제 해결.' },
    ]
  },
  {
    n: 315,
    en: `<p>A company runs its sales reporting application in an AWS Region in the United States. The application uses an Amazon API Gateway Regional API and AWS Lambda functions to generate on-demand reports from data in an Amazon RDS for MySQL database. The frontend of the application is hosted on Amazon S3 and is accessed by users through an Amazon CloudFront distribution. The company is using Amazon Route 53 as the DNS service for the domain. Route 53 is configured with a simple routing policy to route traffic to the API Gateway API.</p><p>In the next 6 months, the company plans to expand operations to Europe. More than 90% of the database traffic is read-only traffic. The company has already deployed an API Gateway API and Lambda functions in the new Region.</p><p>A solutions architect must design a solution that minimizes latency for users who download reports.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 미국 AWS 리전에서 판매 보고 애플리케이션을 실행하고 있습니다. 애플리케이션은 Amazon API Gateway 지역 API 및 AWS Lambda 함수를 사용하여 Amazon RDS for MySQL 데이터베이스의 데이터에서 온디맨드 보고서를 생성합니다. 애플리케이션의 프런트엔드는 Amazon S3에 호스팅되며 Amazon CloudFront 배포를 통해 사용자가 액세스합니다. 회사는 도메인의 DNS 서비스로 Amazon Route 53을 사용하고 있습니다. Route 53은 트래픽을 API Gateway API로 라우팅하기 위한 단순 라우팅 정책으로 구성됩니다.</p><p>향후 6개월 내에 회사는 유럽으로 사업을 확장할 계획입니다. 데이터베이스 트래픽의 90% 이상이 읽기 전용 트래픽입니다. 회사는 이미 새 리전에 API Gateway API 및 Lambda 함수를 배포했습니다.</p><p>솔루션 설계자는 보고서를 다운로드하는 사용자의 지연 시간을 최소화하는 솔루션을 설계해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use an AWS Database Migration Service (AWS DMS) task with full load to replicate the primary database in the original Region to the database in the new Region. Change the Route 53 record to latency-based routing to connect to the API Gateway API.`, ko: `전체 로드가 포함된 AWS Database Migration Service(AWS DMS) 작업을 사용하여 원래 리전의 기본 데이터베이스를 새 리전의 데이터베이스로 복제합니다. API Gateway API에 연결하려면 Route 53 레코드를 지연 시간 기반 라우팅으로 변경합니다.` },
      { k: 'B', en: `Use an AWS Database Migration Service (AWS DMS) task with full load plus change data capture (CDC) to replicate the primary database in the original Region to the database in the new Region. Change the Route 53 record to geolocation routing to connect to the API Gateway API.`, ko: `전체 로드와 변경 데이터 캡처(CDC)가 포함된 AWS DMS 작업을 사용하여 원래 리전의 기본 데이터베이스를 새 리전의 데이터베이스로 복제합니다. API Gateway API에 연결하려면 Route 53 레코드를 지리적 위치 라우팅으로 변경합니다.` },
      { k: 'C', en: `Configure a cross-Region read replica for the RDS database in the new Region. Change the Route 53 record to latency-based routing to connect to the API Gateway API.`, ko: `새 리전에서 RDS 데이터베이스에 대한 리전 간 읽기 전용 복제본을 구성합니다. Route 53 레코드를 지연 시간 기반 라우팅으로 변경하여 API Gateway API에 연결합니다.` },
      { k: 'D', en: `Configure a cross-Region read replica for the RDS database in the new Region. Change the Route 53 record to geolocation routing to connect to the API Gateway API.`, ko: `새 리전의 RDS 데이터베이스에 대한 리전 간 읽기 전용 복제본을 구성합니다. API Gateway API에 연결하려면 Route 53 레코드를 지리적 위치 라우팅으로 변경합니다.` },
    ],
    answer: ['C'],
    vote: '96% C',
    explain: `<p><span class="mark-ok">✅ C — RDS 리전 간 읽기 전용 복제본 + Route 53 지연 시간 기반 라우팅</span></p>
<p>두 가지 요소가 핵심입니다:<br>① <strong>RDS 리전 간 읽기 전용 복제본</strong>: 트래픽의 90% 이상이 읽기 전용이므로, 유럽 리전에 읽기 전용 복제본을 만들면 유럽 사용자가 로컬 DB에서 데이터를 조회하여 지연을 크게 줄일 수 있습니다. DMS를 사용하는 것보다 설정이 간단하고 지속적인 복제가 자동화됩니다.<br>② <strong>Route 53 지연 시간 기반 라우팅</strong>: 사용자를 실제 네트워크 지연이 가장 낮은 API Gateway 리전으로 자동 라우팅합니다. 지리적 위치 라우팅은 물리적 위치 기반이어서 실제 지연 최소화를 보장하지 않습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.XRgn.html" target="_blank">AWS 공식 문서: RDS 리전 간 읽기 전용 복제본</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — DMS 전체 로드는 일회성 마이그레이션에 사용되며, 지속적인 변경 사항을 복제하지 않아 DB 동기화가 유지되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — DMS + CDC로 지속 복제는 가능하지만, RDS 네이티브 읽기 전용 복제본보다 설정이 복잡하고 비용이 높습니다. 또한 지리적 위치 라우팅은 지연 최소화에 최적이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — 읽기 전용 복제본은 적합하나, 지리적 위치 라우팅은 지연 시간 최소화 목표와 불일치합니다. 예를 들어 동유럽 사용자가 지리상 미국에 더 가깝다면 실제로 더 먼 리전으로 라우팅될 수 있습니다.</p>`,
    disc: [
      { ans: 'C (96%)', txt: '지연 최소화 → 지연 시간 기반 라우팅이 지리적 위치보다 정확. 90%가 읽기 → RDS 읽기 전용 복제본으로 충분. DMS보다 네이티브 복제가 관리 용이.' },
    ]
  },
  {
    n: 316,
    en: `<p>A software company needs to create short-lived test environments to test pull requests as part of its development process. Each test environment consists of a single Amazon EC2 instance that is in an Auto Scaling group.</p><p>The test environments must be able to communicate with a central server to report test results. The central server is located in an on-premises data center. A solutions architect must implement a solution so that the company can create and delete test environments without any manual intervention. The company has created a transit gateway with a VPN attachment to the on-premises network.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>한 소프트웨어 회사가 개발 프로세스의 일부로 풀 요청을 테스트하기 위해 단기 테스트 환경을 만들어야 합니다. 각 테스트 환경은 Auto Scaling 그룹에 있는 단일 Amazon EC2 인스턴스로 구성됩니다.</p><p>테스트 환경은 테스트 결과를 보고하기 위해 중앙 서버와 통신할 수 있어야 합니다. 중앙 서버는 온프레미스 데이터 센터에 있습니다. 솔루션 설계자는 수동 개입 없이 테스트 환경을 생성하고 삭제할 수 있도록 솔루션을 구현해야 합니다. 회사는 온프레미스 네트워크에 대한 VPN 연결을 사용하여 Transit Gateway를 만들었습니다.</p><p>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS CloudFormation template that contains a transit gateway attachment and related routing configurations. Create a CloudFormation stack set that includes this template. Use CloudFormation StackSets to deploy a new stack for each VPC in the account. Deploy a new VPC for each test environment.`, ko: `전송 게이트웨이 연결 및 관련 라우팅 구성이 포함된 AWS CloudFormation 템플릿을 생성합니다. 이 템플릿을 포함하는 CloudFormation 스택 세트를 생성합니다. CloudFormation StackSets를 사용하여 계정의 각 VPC에 대해 새 스택을 배포합니다. 각 테스트 환경에 대해 새 VPC를 배포합니다.` },
      { k: 'B', en: `Create a single VPC for the test environments. Include a transit gateway attachment and related routing configurations. Use AWS CloudFormation to deploy all test environments into the VPC.`, ko: `테스트 환경을 위한 단일 VPC를 생성합니다. Transit Gateway 연결 및 관련 라우팅 구성을 포함합니다. AWS CloudFormation을 사용하여 모든 테스트 환경을 VPC에 배포합니다.` },
      { k: 'C', en: `Create a new OU in AWS Organizations for testing. Create an AWS CloudFormation template that contains a VPC, necessary networking resources, a transit gateway attachment, and related routing configurations. Create a CloudFormation stack set that includes this template. Use CloudFormation StackSets for deployments into each account under the testing OU. Create a new account for each test environment.`, ko: `테스트를 위해 AWS Organizations에 새 OU를 생성합니다. VPC, 필요한 네트워킹 리소스, Transit Gateway 연결 및 관련 라우팅 구성이 포함된 AWS CloudFormation 템플릿을 생성합니다. 이 템플릿을 포함하는 CloudFormation 스택 세트를 생성합니다. 테스트 OU의 각 계정에 배포하려면 CloudFormation StackSets를 사용합니다. 각 테스트 환경에 대해 새 계정을 만듭니다.` },
      { k: 'D', en: `Convert the test environment EC2 instances into Docker images. Use AWS CloudFormation to configure an Amazon Elastic Kubernetes Service (Amazon EKS) cluster in a new VPC, create a transit gateway attachment, and create related routing configurations. Use Kubernetes to manage the deployment and lifecycle of the test environments.`, ko: `테스트 환경 EC2 인스턴스를 Docker 이미지로 변환합니다. AWS CloudFormation을 사용하여 새 VPC에서 Amazon EKS 클러스터를 구성하고, Transit Gateway 연결을 생성하고, 관련 라우팅 구성을 생성합니다. Kubernetes를 사용하여 테스트 환경의 배포 및 수명 주기를 관리합니다.` },
    ],
    answer: ['B'],
    vote: '90% B',
    explain: `<p><span class="mark-ok">✅ B — 단일 VPC + CloudFormation으로 테스트 환경 배포</span></p>
<p>이미 Transit Gateway와 VPN 연결이 구성되어 있으므로, 단일 VPC를 생성하고 해당 VPC를 Transit Gateway에 연결하기만 하면 됩니다. 이후 각 테스트 환경(EC2 Auto Scaling 그룹)은 CloudFormation으로 동일한 VPC 내에 배포하고 삭제할 수 있습니다. 테스트마다 새 VPC나 새 계정을 생성하는 것은 불필요한 복잡성과 오버헤드를 유발합니다.</p>
<p><a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html" target="_blank">AWS 공식 문서: AWS CloudFormation</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 각 테스트 환경마다 새 VPC를 생성하고 Transit Gateway에 연결하는 것은 불필요하게 복잡합니다. VPC 수가 늘어날수록 Transit Gateway 연결 관리 오버헤드도 증가합니다.</p>
<p><span class="mark-no">❌ C</span> — 각 테스트마다 새 AWS 계정을 생성하는 것은 단기 테스트 환경에는 극도로 과잉 설계된 방식입니다. 계정 생성과 OU 관리에 상당한 시간과 오버헤드가 소요됩니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 기반 애플리케이션을 Docker 이미지로 변환하고 EKS 클러스터를 구성하는 것은 근본적인 아키텍처 변경을 요구하며, 운영 오버헤드가 가장 높습니다.</p>`,
    disc: [
      { ans: 'B (90%)', txt: '단일 VPC + TGW 연결 한 번 설정 후 CloudFormation으로 테스트 환경 반복 배포/삭제 — 가장 단순하고 오버헤드 최소. 각 테스트마다 VPC/계정 생성은 과잉 설계.' },
    ]
  },
  {
    n: 317,
    en: `<p>A company is deploying a new API to AWS. The API uses Amazon API Gateway with a Regional API endpoint and an AWS Lambda function for hosting. The API retrieves data from an external vendor API, stores data in an Amazon DynamoDB global table, and retrieves data from the DynamoDB global table. The API key for the vendor's API is stored in AWS Secrets Manager and is encrypted with a customer managed key in AWS Key Management Service (AWS KMS). The company has deployed its own API into a single AWS Region.</p><p>A solutions architect needs to change the API components of the company's API to ensure that the components can run across multiple Regions in an active-active configuration.</p><p>Which combination of changes will meet this requirement with the LEAST operational overhead? (Choose three.)</p>`,
    ko: `<p>한 회사가 AWS에 새로운 API를 배포하고 있습니다. API는 지역 API 엔드포인트 및 AWS Lambda 함수와 함께 Amazon API Gateway를 사용합니다. API는 외부 공급업체 API에서 데이터를 검색하고, Amazon DynamoDB 글로벌 테이블에 데이터를 저장하고, DynamoDB 글로벌 테이블에서 데이터를 검색합니다. 공급업체 API의 API 키는 AWS Secrets Manager에 저장되고 AWS KMS의 고객 관리형 키로 암호화됩니다. 회사는 단일 AWS 리전에 자체 API를 배포했습니다.</p><p>솔루션 설계자는 회사 API의 구성 요소가 활성-활성 구성의 여러 리전에서 실행될 수 있도록 API 구성 요소를 변경해야 합니다.</p><p>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 변경 사항 조합은 무엇입니까? (3개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 3,
    choices: [
      { k: 'A', en: `Deploy the API to multiple Regions. Configure Amazon Route 53 with custom domain names that route traffic to each Regional API endpoint. Implement a Route 53 multivalue answer routing policy.`, ko: `API를 여러 리전에 배포합니다. 각 지역 API 엔드포인트로 트래픽을 라우팅하는 사용자 지정 도메인 이름으로 Amazon Route 53을 구성합니다. Route 53 다중 응답 라우팅 정책을 구현합니다.` },
      { k: 'B', en: `Create a new KMS multi-Region customer managed key. Create a new KMS customer managed replica key in each in-scope Region.`, ko: `새로운 KMS 다중 리전 고객 관리형 키를 생성합니다. 각 범위 내 리전에서 새 KMS 고객 관리형 복제본 키를 생성합니다.` },
      { k: 'C', en: `Replicate the existing Secrets Manager secret to other Regions. For each in-scope Region's replicated secret, select the appropriate KMS key.`, ko: `기존 Secrets Manager 비밀을 다른 리전에 복제합니다. 각 범위 내 리전의 복제된 비밀에 대해 적절한 KMS 키를 선택합니다.` },
      { k: 'D', en: `Create a new AWS managed KMS key in each in-scope Region. Convert an existing key to a multiRegion key. Use the multi-Region key in other Regions.`, ko: `각 범위 내 리전에서 새로운 AWS 관리형 KMS 키를 생성합니다. 기존 키를 다중 리전 키로 변환합니다. 다른 리전에서는 다중 리전 키를 사용합니다.` },
      { k: 'E', en: `Create a new Secrets Manager secret in each in-scope Region. Copy the secret value from the existing Region to the new secret in each in-scope Region.`, ko: `각 범위 내 리전에서 새로운 Secrets Manager 비밀을 생성합니다. 기존 리전의 비밀 값을 각 범위 내 리전의 새 비밀로 복사합니다.` },
      { k: 'F', en: `Modify the deployment process for the Lambda function to repeat the deployment across in-scope Regions. Turn on the multi-Region option for the existing API. Select the Lambda function that is deployed in each Region as the backend for the multi-Region API.`, ko: `범위 내 리전 전체에 걸쳐 배포를 반복하도록 Lambda 함수의 배포 프로세스를 수정합니다. 기존 API에 대해 다중 리전 옵션을 활성화합니다. 다중 리전 API의 백엔드로 각 리전에 배포되는 Lambda 함수를 선택합니다.` },
    ],
    answer: ['A', 'B', 'C'],
    vote: '75% ABC',
    explain: `<p><span class="mark-ok">✅ A — API를 여러 리전에 배포 + Route 53 다중 응답 라우팅</span></p>
<p>활성-활성 구성에서는 각 리전의 API Gateway와 Lambda를 독립적으로 배포하고, Route 53으로 여러 리전 엔드포인트에 트래픽을 분산합니다.</p>
<p><span class="mark-ok">✅ B — KMS 다중 리전 키 생성 + 각 리전에 복제본 키 생성</span></p>
<p>기존 단일 리전 KMS 키는 다중 리전 키로 변환이 불가능합니다. 새로운 <strong>KMS 다중 리전 키</strong>를 생성하고 각 리전에 복제본 키를 배포해야 합니다. 복제본 키는 동일한 키 자료를 공유하여 어떤 리전에서도 암호화/복호화가 가능합니다.</p>
<p><span class="mark-ok">✅ C — Secrets Manager 비밀 다른 리전으로 복제</span></p>
<p>Secrets Manager는 비밀을 다른 리전으로 복제하는 기능을 기본 지원합니다. 각 리전의 복제된 비밀에 해당 리전의 KMS 복제본 키를 연결하면 각 리전에서 독립적으로 비밀에 접근할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-create.html" target="_blank">AWS 공식 문서: KMS 다중 리전 키</a></p>`,
    wrong: `<p><span class="mark-no">❌ D</span> — 기존 단일 리전 KMS 키는 다중 리전 키로 변환할 수 없습니다. 또한 AWS 관리형 키는 고객이 직접 다중 리전 구성을 할 수 없습니다.</p>
<p><span class="mark-no">❌ E</span> — 각 리전에서 수동으로 새 Secrets Manager 비밀을 생성하고 값을 복사하는 방식은 C의 복제 기능보다 운영 오버헤드가 높고, 비밀 업데이트 시 모든 리전을 별도로 갱신해야 합니다.</p>
<p><span class="mark-no">❌ F</span> — API Gateway에는 단순히 "다중 리전 옵션"이라는 단일 설정이 없습니다. 각 리전에 별도로 배포하는 것이 맞으며, 이는 A에서 이미 처리됩니다.</p>`,
    disc: [
      { ans: 'ABC (75%)', txt: '단일 리전 KMS 키는 다중 리전으로 변환 불가 → 새 KMS 다중 리전 키 생성(B). Secrets Manager 기본 복제 기능 활용(C). API 다중 리전 배포 + Route 53 라우팅(A).' },
      { ans: 'BCF (25%)', txt: 'API Gateway 다중 리전 옵션을 활용하자는 의견이나, 해당 기능은 A처럼 각 리전 독립 배포 + Route 53으로 구현하는 것이 표준.' },
    ]
  },
  {
    n: 318,
    en: `<p>An online retail company hosts its stateful web-based application and MySQL database in an on-premises data center on a single server. The company wants to increase its customer base by conducting more marketing campaigns and promotions. In preparation, the company wants to migrate its application and database to AWS to increase the reliability of its architecture.</p><p>Which solution should provide the HIGHEST level of reliability?</p>`,
    ko: `<p>온라인 소매 회사가 단일 서버의 온프레미스 데이터 센터에서 상태 저장 웹 기반 애플리케이션과 MySQL 데이터베이스를 호스팅합니다. 회사는 더 많은 마케팅 캠페인과 프로모션을 실시하여 고객 기반을 확대하려고 합니다. 준비 과정에서 회사는 아키텍처의 안정성을 높이기 위해 애플리케이션과 데이터베이스를 AWS로 마이그레이션하려고 합니다.</p><p>가장 높은 수준의 안정성을 제공해야 하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Migrate the database to an Amazon RDS MySQL Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon Neptune.`, ko: `데이터베이스를 Amazon RDS MySQL 다중 AZ DB 인스턴스로 마이그레이션합니다. Application Load Balancer 뒤에 있는 Amazon EC2 인스턴스의 Auto Scaling 그룹에 애플리케이션을 배포합니다. Amazon Neptune에 세션을 저장합니다.` },
      { k: 'B', en: `Migrate the database to Amazon Aurora MySQL. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in an Amazon ElastiCache for Redis replication group.`, ko: `데이터베이스를 Amazon Aurora MySQL로 마이그레이션합니다. Application Load Balancer 뒤에 있는 Amazon EC2 인스턴스의 Auto Scaling 그룹에 애플리케이션을 배포합니다. Redis용 Amazon ElastiCache 복제 그룹에 세션을 저장합니다.` },
      { k: 'C', en: `Migrate the database to Amazon DocumentDB (with MongoDB compatibility). Deploy the application in an Auto Scaling group on Amazon EC2 instances behind a Network Load Balancer. Store sessions in Amazon Kinesis Data Firehose.`, ko: `데이터베이스를 Amazon DocumentDB(MongoDB와 호환)로 마이그레이션합니다. Network Load Balancer 뒤에 있는 Amazon EC2 인스턴스의 Auto Scaling 그룹에 애플리케이션을 배포합니다. Amazon Kinesis Data Firehose에 세션을 저장합니다.` },
      { k: 'D', en: `Migrate the database to an Amazon RDS MariaDB Multi-AZ DB instance. Deploy the application in an Auto Scaling group on Amazon EC2 instances behind an Application Load Balancer. Store sessions in Amazon ElastiCache for Memcached.`, ko: `데이터베이스를 Amazon RDS MariaDB 다중 AZ DB 인스턴스로 마이그레이션합니다. Application Load Balancer 뒤에 있는 Amazon EC2 인스턴스의 Auto Scaling 그룹에 애플리케이션을 배포합니다. Memcached용 Amazon ElastiCache에 세션을 저장합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Aurora MySQL + ALB + Auto Scaling + ElastiCache for Redis 복제 그룹</span></p>
<p>가장 높은 안정성을 제공하는 조합입니다:<br>① <strong>Amazon Aurora MySQL</strong>: 기본적으로 3개 AZ에 6개의 복제본을 유지하며, 자동 장애 조치, 지속적 백업, 스토리지 자동 복구 기능을 갖춘 MySQL 호환 고가용성 데이터베이스입니다.<br>② <strong>ALB + Auto Scaling</strong>: 상태 저장 애플리케이션을 여러 AZ의 EC2 인스턴스에 분산하고 자동으로 확장/축소합니다.<br>③ <strong>ElastiCache for Redis 복제 그룹</strong>: Redis는 Primary-Replica 복제를 지원하여 장애 시 자동 페일오버가 가능합니다. Memcached는 복제를 지원하지 않아 노드 장애 시 세션이 손실됩니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html" target="_blank">AWS 공식 문서: Amazon Aurora 개요</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon Neptune은 그래프 데이터베이스로, 세션 저장에 적합하지 않습니다. 세션은 Redis나 DynamoDB와 같은 고속 키-값 스토어에 저장해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon DocumentDB는 MySQL 호환이 아니므로 데이터베이스 마이그레이션에 추가 작업이 필요합니다. Kinesis Data Firehose는 실시간 스트리밍 데이터 적재 서비스로 세션 저장에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — MySQL에서 MariaDB로의 마이그레이션은 완전히 호환되지 않을 수 있습니다. ElastiCache for Memcached는 복제를 지원하지 않아 노드 장애 시 세션 데이터가 소실되어 안정성이 떨어집니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'Neptune/Kinesis Firehose는 세션 저장에 부적합. Memcached는 복제 미지원으로 세션 손실 위험. Aurora MySQL + Redis 복제 그룹이 최고 안정성 제공.' },
    ]
  },
  {
    n: 319,
    en: `<p>A company's solutions architect needs to provide secure Remote Desktop connectivity to users for Amazon EC2 Windows instances that are hosted in a VPC. The solution must integrate centralized user management with the company's on-premises Active Directory. Connectivity to the VPC is through the internet. The company has hardware that can be used to establish an AWS Site-to-Site VPN connection.</p><p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>회사의 솔루션 설계자가 VPC에서 호스팅되는 Amazon EC2 Windows 인스턴스에 대해 사용자에게 안전한 원격 데스크톱 연결을 제공해야 합니다. 솔루션은 중앙 집중식 사용자 관리를 회사의 온프레미스 Active Directory와 통합해야 합니다. VPC에 대한 연결은 인터넷을 통해 이루어집니다. 회사에는 AWS Site-to-Site VPN 연결을 설정하는 데 사용할 수 있는 하드웨어가 있습니다.</p><p>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy a managed Active Directory by using AWS Directory Service for Microsoft Active Directory. Establish a trust with the on-premises Active Directory. Deploy an EC2 instance as a bastion host in the VPC. Ensure that the EC2 instance is joined to the domain. Use the bastion host to access the target instances through RDP.`, ko: `Microsoft Active Directory용 AWS Directory Service를 사용하여 관리형 Active Directory를 배포합니다. 온프레미스 Active Directory와 신뢰를 설정합니다. VPC의 배스천 호스트로 EC2 인스턴스를 배포합니다. EC2 인스턴스가 도메인에 가입되어 있는지 확인합니다. 배스천 호스트를 사용하여 RDP를 통해 대상 인스턴스에 액세스합니다.` },
      { k: 'B', en: `Configure AWS IAM Identity Center (AWS Single Sign-On) to integrate with the on-premises Active Directory by using the AWS Directory Service for Microsoft Active Directory AD Connector. Configure permission sets against user groups for access to AWS Systems Manager. Use Systems Manager Fleet Manager to access the target instances through RDP.`, ko: `Microsoft Active Directory AD Connector용 AWS Directory Service를 사용하여 온프레미스 Active Directory와 통합하도록 AWS IAM Identity Center(AWS Single Sign-On)를 구성합니다. AWS Systems Manager에 액세스하기 위해 사용자 그룹에 대한 권한 세트를 구성합니다. RDP를 통해 대상 인스턴스에 액세스하려면 Systems Manager Fleet Manager를 사용합니다.` },
      { k: 'C', en: `Implement a VPN between the on-premises environment and the target VPC. Ensure that the target instances are joined to the on-premises Active Directory domain over the VPN connection. Configure RDP access through the VPN. Connect from the company's network to the target instances.`, ko: `온프레미스 환경과 대상 VPC 간에 VPN을 구현합니다. 대상 인스턴스가 VPN 연결을 통해 온프레미스 Active Directory 도메인에 연결되어 있는지 확인합니다. VPN을 통해 RDP 액세스를 구성합니다. 회사 네트워크에서 대상 인스턴스로 연결합니다.` },
      { k: 'D', en: `Deploy a managed Active Directory by using AWS Directory Service for Microsoft Active Directory. Establish a trust with the on-premises Active Directory. Deploy a Remote Desktop Gateway on AWS by using an AWS Quick Start. Ensure that the Remote Desktop Gateway is joined to the domain. Use the Remote Desktop Gateway to access the target instances through RDP.`, ko: `Microsoft Active Directory용 AWS Directory Service를 사용하여 관리형 Active Directory를 배포합니다. 온프레미스 Active Directory와 신뢰를 설정합니다. AWS Quick Start를 사용하여 AWS에 원격 데스크톱 게이트웨이를 배포합니다. 원격 데스크톱 게이트웨이가 도메인에 가입되어 있는지 확인합니다. 원격 데스크톱 게이트웨이를 사용하여 RDP를 통해 대상 인스턴스에 액세스합니다.` },
    ],
    answer: ['C'],
    vote: '48% C / 48% B',
    explain: `<p><span class="mark-ok">✅ C — Site-to-Site VPN + EC2를 온프레미스 AD에 도메인 조인 + VPN을 통한 RDP</span></p>
<p>회사에는 이미 <strong>VPN을 설정할 수 있는 하드웨어</strong>가 있습니다. Site-to-Site VPN을 설정하면 VPC와 온프레미스 네트워크가 프라이빗 연결로 연결됩니다. VPC DHCP 옵션 세트에서 온프레미스 AD를 DNS 서버로 지정하면 EC2 인스턴스가 VPN을 통해 온프레미스 AD에 도메인 조인할 수 있습니다. 이 방식은 AWS Directory Service(관리형 AD 또는 AD Connector) 비용이 추가로 발생하지 않아 가장 비용 효율적입니다.<br>Site-to-Site VPN 비용(~$36/월) vs AD Connector 비용(~$36.50/월)으로 C가 약간 더 저렴합니다.</p>
<p><a href="https://aws.amazon.com/vpn/pricing/" target="_blank">AWS 공식 문서: Site-to-Site VPN 요금</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 관리형 Active Directory 배포 비용(~$92/월)과 배스천 호스트 EC2 비용이 추가로 발생합니다. 가장 비용이 높은 옵션 중 하나입니다.</p>
<p><span class="mark-no">❌ B</span> — AD Connector(~$36.50/월) + IAM Identity Center 설정 비용이 발생합니다. 기능적으로는 우수하나 이미 VPN 하드웨어가 있는 상황에서는 C보다 비용이 더 높습니다.</p>
<p><span class="mark-no">❌ D</span> — 관리형 AD 배포 비용(~$92/월) + Remote Desktop Gateway EC2 인스턴스 비용이 추가로 발생하여 비용이 가장 높습니다.</p>`,
    disc: [
      { ans: 'C (48%)', txt: '기존 VPN 하드웨어 활용 시 추가 Directory Service 비용 없음. VPN 통해 직접 온프레미스 AD 도메인 조인 가능. S2S VPN($36/월) < AD Connector($36.50/월).' },
      { ans: 'B (48%)', txt: 'SSM Fleet Manager를 통한 RDP는 인바운드 포트 불필요로 보안성 높음. AD Connector로 온프레미스 AD 직접 연동. 그러나 VPN 하드웨어가 있어 C가 더 저렴하다는 반론 팽팽.' },
    ]
  },
  {
    n: 320,
    en: `<p>A company's compliance audit reveals that some Amazon Elastic Block Store (Amazon EBS) volumes that were created in an AWS account were not encrypted. A solutions architect must implement a solution to encrypt all new EBS volumes at rest.</p><p>Which solution will meet this requirement with the LEAST effort?</p>`,
    ko: `<p>한 회사의 규정 준수 감사 결과 AWS 계정에서 생성된 일부 Amazon EBS 볼륨이 암호화되지 않은 것으로 나타났습니다. 솔루션 설계자는 저장 중인 모든 새로운 EBS 볼륨을 암호화하는 솔루션을 구현해야 합니다.</p><p>최소한의 노력으로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an Amazon EventBridge rule to detect the creation of unencrypted EBS volumes. Invoke an AWS Lambda function to delete noncompliant volumes.`, ko: `암호화되지 않은 EBS 볼륨 생성을 감지하는 Amazon EventBridge 규칙을 생성합니다. AWS Lambda 함수를 호출하여 비준수 볼륨을 삭제합니다.` },
      { k: 'B', en: `Use AWS Audit Manager with data encryption.`, ko: `데이터 암호화와 함께 AWS Audit Manager를 사용합니다.` },
      { k: 'C', en: `Create an AWS Config rule to detect the creation of a new EBS volume. Encrypt the volume by using AWS Systems Manager Automation.`, ko: `새로운 EBS 볼륨 생성을 감지하는 AWS Config 규칙을 생성합니다. AWS Systems Manager Automation을 사용하여 볼륨을 암호화합니다.` },
      { k: 'D', en: `Turn on EBS encryption by default in all AWS Regions.`, ko: `모든 AWS 리전에서 기본적으로 EBS 암호화를 활성화합니다.` },
    ],
    answer: ['D'],
    vote: '86% D',
    explain: `<p><span class="mark-ok">✅ D — 모든 리전에서 EBS 기본 암호화 활성화</span></p>
<p>AWS에서는 계정 및 리전 수준에서 <strong>EBS 기본 암호화(Encryption by default)</strong>를 활성화할 수 있습니다. 이 설정을 켜면 해당 리전에서 생성되는 모든 새 EBS 볼륨과 스냅샷이 자동으로 암호화됩니다. 별도의 람다, Config 규칙, Automation 없이 몇 번의 클릭으로 설정 가능하여 최소한의 노력으로 요구 사항을 충족합니다.</p>
<p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default" target="_blank">AWS 공식 문서: EBS 기본 암호화</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 비암호화 볼륨이 생성된 후 감지하여 삭제하는 방식은 이미 생성된 볼륨에 데이터가 쓰여진 후 삭제될 수 있어 데이터 손실 위험이 있습니다. 또한 구현 복잡도가 높습니다.</p>
<p><span class="mark-no">❌ B</span> — AWS Audit Manager는 규정 준수 상태를 감사하고 보고하는 도구이지, EBS 볼륨 암호화를 강제로 적용하는 도구가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — Config 규칙으로 감지 후 SSM Automation으로 암호화하는 방법은 기술적으로 가능하지만, 기존 EBS 볼륨을 직접 암호화할 수 없어(스냅샷 생성 → 암호화된 복사본 생성 → 교체 필요) 구현 노력이 매우 큽니다.</p>`,
    disc: [
      { ans: 'D (86%)', txt: '"모든 새 EBS 볼륨" 암호화 요구 → 기본 암호화 활성화가 최소 노력 솔루션. 기존 볼륨에는 적용 안 되지만 문제 범위는 신규 볼륨에 한정.' },
    ]
  },
];