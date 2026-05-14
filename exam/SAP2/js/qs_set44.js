window.QS_SET44 = [
  {
    n: 431,
    en: `<p>A company provides a centralized Amazon EC2 application hosted in a single shared VPC. The centralized application must be accessible from client applications running in the VPCs of other business units. The centralized application front end is configured with a Network Load Balancer (NLB) for scalability.</p>
<p>Up to 10 business unit VPCs will need to be connected to the shared VPC. Some of the business unit VPC CIDR blocks overlap with the shared VPC, and some overlap with each other. Network connectivity to the centralized application in the shared VPC should be allowed from authorized business unit VPCs only.</p>
<p>Which network configuration should a solutions architect use to provide connectivity from the client applications in the business unit VPCs to the centralized application in the shared VPC?</p>`,
    ko: `<p>한 회사가 단일 공유 VPC에 호스팅된 중앙 집중식 Amazon EC2 애플리케이션을 제공합니다. 중앙 애플리케이션은 다른 사업부의 VPC에서 실행되는 클라이언트 애플리케이션에서 접근 가능해야 합니다. 중앙 애플리케이션 프론트엔드는 확장성을 위해 NLB(Network Load Balancer)로 구성됩니다.</p>
<p>최대 10개의 사업부 VPC가 공유 VPC에 연결되어야 합니다. 일부 사업부 VPC CIDR 블록은 공유 VPC와 겹치고, 일부는 서로 겹칩니다. 공유 VPC의 중앙 애플리케이션에 대한 네트워크 연결은 승인된 사업부 VPC에서만 허용되어야 합니다.</p>
<p>사업부 VPC의 클라이언트 애플리케이션에서 공유 VPC의 중앙 애플리케이션으로의 연결을 제공하기 위해 솔루션 아키텍트는 어떤 네트워크 구성을 사용해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an AWS Transit Gateway. Attach the shared VPC and the authorized business unit VPCs to the transit gateway. Create a single transit gateway route table and associate it with all of the attached VPCs. Allow automatic propagation of routes from the attachments into the route table. Configure VPC routing tables to send traffic to the transit gateway.', ko: 'AWS Transit Gateway를 생성합니다. 공유 VPC와 승인된 사업부 VPC를 Transit Gateway에 연결합니다. 단일 Transit Gateway 라우팅 테이블을 생성하고 연결된 모든 VPC와 연결합니다. 첨부 파일의 경로가 라우팅 테이블로 자동 전파되도록 허용합니다. Transit Gateway로 트래픽을 보내도록 VPC 라우팅 테이블을 구성합니다.' },
      { k: 'B', en: 'Create a VPC endpoint service using the centralized application NLB and enable the option to require endpoint acceptance. Create a VPC endpoint in each of the business unit VPCs using the service name of the endpoint service. Accept authorized endpoint requests from the endpoint service console.', ko: '중앙 애플리케이션 NLB를 사용하여 VPC 엔드포인트 서비스를 생성하고 엔드포인트 승인 요구 옵션을 활성화합니다. 엔드포인트 서비스의 서비스 이름을 사용하여 각 사업부 VPC에 VPC 엔드포인트를 생성합니다. 엔드포인트 서비스 콘솔에서 승인된 엔드포인트 요청을 수락합니다.' },
      { k: 'C', en: 'Create a VPC peering connection from each business unit VPC to the shared VPC. Accept the VPC peering connections from the shared VPC console. Configure VPC routing tables to send traffic to the VPC peering connection.', ko: '각 사업부 VPC에서 공유 VPC로 VPC 피어링 연결을 생성합니다. 공유 VPC 콘솔에서 VPC 피어링 연결을 수락합니다. VPC 피어링 연결로 트래픽을 보내도록 VPC 라우팅 테이블을 구성합니다.' },
      { k: 'D', en: 'Configure a virtual private gateway for the shared VPC and create customer gateways for each of the authorized business unit VPCs. Establish a Site-to-Site VPN connection from the business unit VPCs to the shared VPC. Configure VPC routing tables to send traffic to the VPN connection.', ko: '공유 VPC에 대한 가상 프라이빗 게이트웨이를 구성하고 승인된 각 사업부 VPC에 대한 고객 게이트웨이를 생성합니다. 사업부 VPC에서 공유 VPC로 Site-to-Site VPN 연결을 설정합니다. VPN 연결로 트래픽을 보내도록 VPC 라우팅 테이블을 구성합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — VPC 엔드포인트 서비스(PrivateLink) + NLB</span></p>
<p>핵심 제약은 <strong>CIDR 블록 겹침</strong>입니다. Transit Gateway와 VPC 피어링은 모두 CIDR 중복 환경을 지원하지 않습니다. AWS PrivateLink를 통한 VPC 엔드포인트 서비스는 이 문제를 해결합니다:</p>
<ul>
<li>CIDR 충돌에 무관하게 서비스 이름 기반으로 연결</li>
<li>NLB 기반 엔드포인트 서비스로 확장성 확보</li>
<li>엔드포인트 승인 요구 옵션으로 승인된 VPC만 접근 허용</li>
<li>단방향 연결(서비스 소비자 → 공급자)로 보안 유지</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/networking-and-content-delivery/connecting-networks-with-overlapping-ip-ranges/" target="_blank">AWS 블로그: 중복 IP 범위 네트워크 연결</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Transit Gateway는 CIDR이 중복되는 VPC를 지원하지 않습니다. 라우팅 테이블에서 동일한 대상 CIDR에 대해 충돌이 발생합니다.</p>
<p><span class="mark-no">❌ C</span> — VPC 피어링도 CIDR 중복을 허용하지 않습니다. 또한 피어링은 전이적(transitive) 라우팅을 지원하지 않아 VPC간 직접 피어링 필요 시 관리가 복잡해집니다.</p>
<p><span class="mark-no">❌ D</span> — Site-to-Site VPN은 데이터 센터와 AWS 간 연결용으로 VPC 간 연결에는 과도하게 복잡하며 CIDR 중복 문제도 해결하지 못합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'CIDR 중복 환경에서는 VPC 피어링/TGW 불가. PrivateLink(엔드포인트 서비스)만이 CIDR 무관하게 서비스 접근을 제공.' },
    ],
  },
  {
    n: 432,
    en: `<p>A company wants to migrate its website to AWS. The website uses microservices and runs on containers that are deployed in an on-premises, self-managed Kubernetes cluster. All the manifests that define the deployments for the containers in the Kubernetes deployment are in source control.</p>
<p>All data for the website is stored in a PostgreSQL database. An open source container image repository runs alongside the on-premises environment.</p>
<p>A solutions architect needs to determine the architecture that the company will use for the website on AWS.</p>
<p>Which solution will meet these requirements with the LEAST effort to migrate?</p>`,
    ko: `<p>한 회사가 웹사이트를 AWS로 마이그레이션하려고 합니다. 웹사이트는 마이크로서비스를 사용하며 온프레미스의 자체 관리형 Kubernetes 클러스터에 배포된 컨테이너에서 실행됩니다. Kubernetes 배포의 컨테이너 배포를 정의하는 모든 매니페스트는 소스 컨트롤에 있습니다.</p>
<p>웹사이트의 모든 데이터는 PostgreSQL 데이터베이스에 저장됩니다. 오픈 소스 컨테이너 이미지 저장소가 온프레미스 환경과 함께 운영됩니다.</p>
<p>솔루션 아키텍트는 AWS에서 사용할 웹사이트 아키텍처를 결정해야 합니다.</p>
<p>마이그레이션 노력을 최소화하면서 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an AWS App Runner service. Connect the App Runner service to the open source container image repository. Deploy the manifests from on premises to the App Runner service. Create an Amazon RDS for PostgreSQL database.', ko: 'AWS App Runner 서비스를 생성합니다. App Runner 서비스를 오픈 소스 컨테이너 이미지 저장소에 연결합니다. 온프레미스에서 App Runner 서비스로 매니페스트를 배포합니다. Amazon RDS for PostgreSQL 데이터베이스를 생성합니다.' },
      { k: 'B', en: 'Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that has managed node groups. Copy the application containers to a new Amazon Elastic Container Registry (Amazon ECR) repository. Deploy the manifests from on premises to the EKS cluster. Create an Amazon Aurora PostgreSQL DB cluster.', ko: '관리형 노드 그룹을 갖는 Amazon EKS 클러스터를 생성합니다. 애플리케이션 컨테이너를 새 Amazon ECR 저장소에 복사합니다. 온프레미스에서 EKS 클러스터로 매니페스트를 배포합니다. Amazon Aurora PostgreSQL DB 클러스터를 생성합니다.' },
      { k: 'C', en: 'Create an Amazon Elastic Container Service (Amazon ECS) cluster that has an Amazon EC2 capacity pool. Copy the application containers to a new Amazon Elastic Container Registry (Amazon ECR) repository. Register each container image as a new task definition. Configure ECS services for each task definition to match the original Kubernetes deployments. Create an Amazon Aurora PostgreSQL DB cluster.', ko: 'Amazon EC2 용량 풀을 갖는 Amazon ECS 클러스터를 생성합니다. 애플리케이션 컨테이너를 새 Amazon ECR 저장소에 복사합니다. 각 컨테이너 이미지를 새 작업 정의로 등록합니다. 원본 Kubernetes 배포와 일치하도록 각 작업 정의에 대한 ECS 서비스를 구성합니다. Amazon Aurora PostgreSQL DB 클러스터를 생성합니다.' },
      { k: 'D', en: 'Rebuild the on-premises Kubernetes cluster by hosting the cluster on Amazon EC2 instances. Migrate the open source container image repository to the EC2 instances. Deploy the manifests from on premises to the new cluster on AWS. Deploy an open source PostgreSQL database on the new cluster.', ko: 'Amazon EC2 인스턴스에서 클러스터를 호스팅하여 온프레미스 Kubernetes 클러스터를 재구축합니다. 오픈 소스 컨테이너 이미지 저장소를 EC2 인스턴스로 마이그레이션합니다. 온프레미스에서 AWS의 새 클러스터로 매니페스트를 배포합니다. 새 클러스터에 오픈 소스 PostgreSQL 데이터베이스를 배포합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Amazon EKS + ECR + Aurora PostgreSQL</span></p>
<p>기존 Kubernetes 매니페스트를 그대로 재사용할 수 있는 유일한 옵션입니다:</p>
<ul>
<li><strong>Amazon EKS</strong>: 관리형 Kubernetes 서비스로 기존 매니페스트를 최소 변경으로 배포 가능</li>
<li><strong>Amazon ECR</strong>: 컨테이너 이미지를 AWS 관리형 저장소로 이전 (기존 오픈소스 저장소 대체)</li>
<li><strong>Aurora PostgreSQL</strong>: 관리형 PostgreSQL 호환 DB로 데이터베이스 관리 오버헤드 제거</li>
<li>기존 kubectl 워크플로와 Kubernetes 지식을 그대로 활용</li>
</ul>
<p><a href="https://aws.amazon.com/blogs/architecture/field-notes-migrating-a-self-managed-kubernetes-cluster-on-ec2-to-amazon-eks/" target="_blank">AWS 블로그: 자체 관리 Kubernetes → EKS 마이그레이션</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — App Runner는 단일 컨테이너 서비스로 Kubernetes 매니페스트를 직접 사용하지 않습니다. 각 마이크로서비스별로 별도 설정이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — ECS는 Kubernetes 매니페스트와 호환되지 않습니다. 각 마이크로서비스를 ECS 작업 정의로 변환해야 하므로 마이그레이션 노력이 큽니다.</p>
<p><span class="mark-no">❌ D</span> — EC2에서 Kubernetes를 자체 관리하는 것은 패치, 업그레이드, 고가용성 구성 등 운영 오버헤드가 가장 큽니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'EKS가 기존 Kubernetes 매니페스트를 그대로 활용 가능. ECS/App Runner는 재작성 필요, 자체 K8s는 관리 오버헤드 과다.' },
    ],
  },
  {
    n: 433,
    en: `<p>A company uses a mobile app on AWS to run online contests. The company selects a winner at random at the end of each contest. The contests run for variable lengths of time. The company does not need to retain any data from a contest after the contest is finished.</p>
<p>The company uses custom code that is hosted on Amazon EC2 instances to process the contest data and select a winner. The EC2 instances run behind an Application Load Balancer and store contest entries on Amazon RDS DB instances. The company must design a new architecture to reduce the cost of running the contests.</p>
<p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>한 회사가 AWS에서 모바일 앱을 사용하여 온라인 콘테스트를 운영합니다. 각 콘테스트 종료 시 무작위로 우승자를 선택합니다. 콘테스트는 다양한 기간 동안 진행됩니다. 회사는 콘테스트가 종료된 후 해당 데이터를 보관할 필요가 없습니다.</p>
<p>회사는 Amazon EC2 인스턴스에서 호스팅되는 사용자 지정 코드를 사용하여 콘테스트 데이터를 처리하고 우승자를 선택합니다. EC2 인스턴스는 ALB 뒤에서 실행되며 Amazon RDS DB 인스턴스에 콘테스트 항목을 저장합니다. 회사는 콘테스트 운영 비용을 줄이기 위해 새 아키텍처를 설계해야 합니다.</p>
<p>가장 비용 효율적으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Migrate storage of the contest entries to Amazon DynamoDB. Create a DynamoDB Accelerator (DAX) cluster. Rewrite the code to run as Amazon Elastic Container Service (Amazon ECS) containers that use the Fargate launch type. At the end of the contest, delete the DynamoDB table.', ko: '콘테스트 참가작의 스토리지를 Amazon DynamoDB로 마이그레이션합니다. DynamoDB Accelerator(DAX) 클러스터를 생성합니다. Fargate 시작 유형을 사용하는 Amazon ECS 컨테이너로 실행되도록 코드를 다시 작성합니다. 콘테스트 종료 시 DynamoDB 테이블을 삭제합니다.' },
      { k: 'B', en: 'Migrate the storage of the contest entries to Amazon Redshift. Rewrite the code as AWS Lambda functions. At the end of the contest, delete the Redshift cluster.', ko: '콘테스트 참가작의 스토리지를 Amazon Redshift로 마이그레이션합니다. 코드를 AWS Lambda 함수로 다시 작성합니다. 콘테스트 종료 시 Redshift 클러스터를 삭제합니다.' },
      { k: 'C', en: 'Add an Amazon ElastiCache for Redis cluster in front of the RDS DB instances to cache the contest entries. Rewrite the code to run as Amazon Elastic Container Service (Amazon ECS) containers that use the Fargate launch type. Set the ElastiCache TTL attribute on each entry to expire each entry at the end of the contest.', ko: 'RDS DB 인스턴스 앞에 Redis용 Amazon ElastiCache 클러스터를 추가하여 콘테스트 항목을 캐시합니다. Fargate 시작 유형을 사용하는 Amazon ECS 컨테이너로 실행되도록 코드를 다시 작성합니다. 각 항목의 ElastiCache TTL 속성을 설정하여 콘테스트 종료 시 만료되도록 합니다.' },
      { k: 'D', en: 'Migrate the storage of the contest entries to Amazon DynamoDB. Rewrite the code as AWS Lambda functions. Set the DynamoDB TTL attribute on each entry to expire each entry at the end of the contest.', ko: '콘테스트 참가작의 스토리지를 Amazon DynamoDB로 마이그레이션합니다. 코드를 AWS Lambda 함수로 다시 작성합니다. 각 항목의 DynamoDB TTL 속성을 설정하여 콘테스트 종료 시 만료되도록 합니다.' },
    ],
    answer: ['D'],
    vote: '55% D / 45% A',
    explain: `<p><span class="mark-ok">✅ D — DynamoDB + Lambda + DynamoDB TTL</span></p>
<p>가장 비용 효율적인 서버리스 아키텍처입니다:</p>
<ul>
<li><strong>DynamoDB</strong>: 서버리스 NoSQL로 사용량에 따른 온디맨드 과금, EC2+RDS 대비 저렴</li>
<li><strong>Lambda</strong>: 이벤트 기반 실행으로 유휴 시간 비용 없음. 우승자 선택은 단발성 실행이므로 Lambda에 최적화</li>
<li><strong>DynamoDB TTL</strong>: 콘테스트 종료 시점을 TTL로 설정하면 자동으로 항목이 만료되어 삭제 처리 불필요. 쓰기 처리량 소모 없이 무료로 정리</li>
</ul>
<p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html" target="_blank">AWS 공식 문서: DynamoDB TTL</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — DAX는 읽기 집약적 워크로드를 위한 인메모리 캐시로 추가 비용이 발생합니다. 콘테스트 항목 처리에는 불필요합니다. ECS/Fargate도 Lambda보다 비용이 높습니다.</p>
<p><span class="mark-no">❌ B</span> — Amazon Redshift는 OLAP/데이터 웨어하우스용으로 단순 콘테스트 항목 저장에는 과도하게 비쌉니다.</p>
<p><span class="mark-no">❌ C</span> — RDS를 유지하면서 ElastiCache까지 추가하는 것은 비용 절감이 아닌 비용 증가입니다.</p>`,
    disc: [
      { ans: 'D (55%)', txt: 'Lambda + DynamoDB + TTL 조합이 최소 비용 서버리스 아키텍처. TTL로 자동 정리.' },
      { ans: 'A (45%)', txt: '콘테스트 기간 가변적이라 TTL 설정이 어렵다는 의견. 그러나 콘테스트 시작 시 종료 시간을 알면 TTL 설정 가능.' },
    ],
  },
  {
    n: 434,
    en: `<p>A company has implemented a new security requirement. According to the new requirement, the company must scan all traffic from corporate AWS instances in the company's VPC for violations of the company's security policies. As a result of these scans, the company can block access to and from specific IP addresses.</p>
<p>To meet the new requirement, the company deploys a set of Amazon EC2 instances in private subnets to serve as transparent proxies. The company installs approved proxy server software on these EC2 instances. The company modifies the route tables on all subnets to use the corresponding EC2 instances with proxy software as the default route. The company also creates security groups that are compliant with the security policies and assigns these security groups to the EC2 instances.</p>
<p>Despite these configurations, the traffic of the EC2 instances in their private subnets is not being properly forwarded to the internet.</p>
<p>What should a solutions architect do to resolve this issue?</p>`,
    ko: `<p>한 회사가 새로운 보안 요구사항을 구현했습니다. 새 요구사항에 따라 회사는 회사 VPC의 AWS 인스턴스에서 나오는 모든 트래픽을 검사해야 합니다. 이 검사 결과로 특정 IP 주소에 대한 접근을 차단할 수 있습니다.</p>
<p>새 요구사항을 충족하기 위해 회사는 투명한 프록시 역할을 하는 EC2 인스턴스 세트를 프라이빗 서브넷에 배포합니다. 프록시 서버 소프트웨어를 설치하고, 모든 서브넷의 라우팅 테이블을 수정하여 해당 EC2 인스턴스를 기본 경로로 사용합니다. 보안 정책을 준수하는 보안 그룹을 생성하고 EC2 인스턴스에 할당합니다.</p>
<p>이러한 구성에도 불구하고 프라이빗 서브넷의 EC2 인스턴스 트래픽이 인터넷으로 제대로 전달되지 않습니다.</p>
<p>이 문제를 해결하기 위해 솔루션 아키텍트는 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Disable source/destination checks on the EC2 instances that run the proxy software.', ko: '프록시 소프트웨어를 실행하는 EC2 인스턴스에서 소스/대상 확인을 비활성화합니다.' },
      { k: 'B', en: 'Add a rule to the security group that is assigned to the proxy EC2 instances to allow all traffic between instances that have this security group. Assign this security group to all EC2 instances in the VPC.', ko: '프록시 EC2 인스턴스에 할당된 보안 그룹에 동일 보안 그룹을 가진 인스턴스 간의 모든 트래픽을 허용하는 규칙을 추가합니다. 이 보안 그룹을 VPC의 모든 EC2 인스턴스에 할당합니다.' },
      { k: 'C', en: "Change the VPC's DHCP options set. Set the DNS server options to point to the addresses of the proxy EC2 instances.", ko: 'VPC DHCP 옵션 세트를 변경합니다. DNS 서버 옵션을 프록시 EC2 인스턴스의 주소를 가리키도록 설정합니다.' },
      { k: 'D', en: 'Assign one additional elastic network interface to each proxy EC2 instance. Ensure that one of these network interfaces has a route to the private subnets. Ensure that the other network interface has a route to the internet.', ko: '각 프록시 EC2 인스턴스에 추가 탄력적 네트워크 인터페이스를 할당합니다. 네트워크 인터페이스 중 하나는 프라이빗 서브넷으로의 경로를 갖도록 합니다. 나머지 인터페이스는 인터넷으로의 경로를 갖도록 합니다.' },
    ],
    answer: ['A'],
    vote: '89% A',
    explain: `<p><span class="mark-ok">✅ A — 소스/대상 확인(Source/Destination Check) 비활성화</span></p>
<p>기본적으로 AWS EC2 인스턴스는 자신이 소스 또는 대상인 트래픽만 처리합니다. 프록시/NAT 인스턴스처럼 다른 인스턴스의 트래픽을 <strong>중계(포워딩)</strong>하는 역할을 하려면, 자신이 소스/대상이 아닌 트래픽도 수신해야 합니다.</p>
<p>이를 위해 <strong>소스/대상 확인을 비활성화</strong>해야 합니다. 이는 NAT 인스턴스 설정의 필수 단계와 동일한 원리입니다.</p>
<p><a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#EIP_Disable_SrcDestCheck" target="_blank">AWS 공식 문서: NAT 인스턴스 소스/대상 확인 비활성화</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 보안 그룹 규칙 추가는 인스턴스 간 트래픽 허용에는 도움이 되지만, 트래픽 포워딩이 안 되는 근본 원인(소스/대상 확인)을 해결하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — DNS 서버 변경은 이름 해석(Name Resolution) 관련 문제를 해결하며, 트래픽 포워딩과는 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — 추가 ENI를 붙이는 것은 복잡성을 높일 뿐, 소스/대상 확인이 비활성화되지 않으면 포워딩이 여전히 동작하지 않습니다.</p>`,
    disc: [
      { ans: 'A (89%)', txt: '프록시/NAT 역할 인스턴스는 반드시 소스/대상 확인을 비활성화해야 타 인스턴스의 트래픽을 중계 가능.' },
    ],
  },
  {
    n: 435,
    en: `<p>A company is running its solution on AWS in a manually created VPC. The company is using AWS CloudFormation to provision other parts of the infrastructure. According to a new requirement, the company must manage all infrastructure in an automatic way.</p>
<p>What should the company do to meet this new requirement with the LEAST effort?</p>`,
    ko: `<p>한 회사가 수동으로 생성된 VPC에서 AWS의 솔루션을 운영하고 있습니다. 회사는 인프라의 다른 부분을 프로비저닝하는 데 AWS CloudFormation을 사용하고 있습니다. 새로운 요구사항에 따라 회사는 모든 인프라를 자동으로 관리해야 합니다.</p>
<p>최소한의 노력으로 이 새로운 요구사항을 충족하려면 회사는 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create a new AWS Cloud Development Kit (AWS CDK) stack that strictly provisions the existing VPC resources and configuration. Use AWS CDK to import the VPC into the stack and to manage the VPC.', ko: '기존 VPC 리소스 및 구성을 엄격하게 프로비저닝하는 새 AWS CDK 스택을 생성합니다. AWS CDK를 사용하여 VPC를 스택으로 가져오고 VPC를 관리합니다.' },
      { k: 'B', en: 'Create a CloudFormation stack set that creates the VPC. Use the stack set to import the VPC into the stack.', ko: 'VPC를 생성하는 CloudFormation 스택 세트를 생성합니다. 스택 세트를 사용하여 VPC를 스택으로 가져옵니다.' },
      { k: 'C', en: 'Create a new CloudFormation template that strictly provisions the existing VPC resources and configuration. From the CloudFormation console, create a new stack by importing the existing resources.', ko: '기존 VPC 리소스 및 구성을 엄격하게 프로비저닝하는 새 CloudFormation 템플릿을 생성합니다. CloudFormation 콘솔에서 기존 리소스를 가져와 새 스택을 생성합니다.' },
      { k: 'D', en: 'Create a new CloudFormation template that creates the VPC. Use the AWS Serverless Application Model (AWS SAM) CLI to import the VPC.', ko: 'VPC를 생성하는 새 CloudFormation 템플릿을 생성합니다. AWS SAM CLI를 사용하여 VPC를 가져옵니다.' },
    ],
    answer: ['C'],
    vote: '73% C',
    explain: `<p><span class="mark-ok">✅ C — CloudFormation 기존 리소스 가져오기(Import existing resources)</span></p>
<p>회사는 이미 CloudFormation을 사용하고 있으므로 동일한 도구를 활용하는 것이 가장 적은 노력입니다. AWS CloudFormation의 <strong>기존 리소스 가져오기(Resource Import)</strong> 기능을 사용하면 수동으로 생성된 VPC를 CloudFormation 스택으로 가져와 IaC로 관리할 수 있습니다. 이때 기존 리소스와 정확히 일치하는 CloudFormation 템플릿이 필요합니다.</p>
<p><a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import.html" target="_blank">AWS 공식 문서: CloudFormation 리소스 가져오기</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS CDK는 내부적으로 CloudFormation을 사용하지만, 전체 인프라 스택을 CDK로 전환해야 하므로 추가 노력이 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — CloudFormation 스택 세트(StackSets)는 여러 계정/리전에 스택을 배포하기 위한 기능으로, 단일 VPC 리소스를 가져오는 데 과도합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS SAM CLI는 서버리스 애플리케이션 배포용으로 CloudFormation 리소스 가져오기에 사용할 수 없습니다.</p>`,
    disc: [
      { ans: 'C (73%)', txt: 'CloudFormation 기존 리소스 가져오기 기능으로 수동 VPC를 IaC로 관리 가능. 기존 CF 도구 그대로 활용.' },
      { ans: 'B (23%)', txt: 'StackSets를 리소스 가져오기에 사용하려는 혼동. StackSets는 가져오기 기능이 없음.' },
    ],
  },
  {
    n: 436,
    en: `<p>A company has developed a new release of a popular video game and wants to make it available for public download. The new release package is approximately 5 GB in size. The company provides downloads for existing releases from a Linux-based, publicly facing FTP site hosted in an on-premises data center. The company expects the new release will be downloaded by users worldwide. The company wants a solution that provides improved download performance and low transfer costs, regardless of a user's location.</p>
<p>Which solution meets these requirements?</p>`,
    ko: `<p>한 회사가 인기 비디오 게임의 새 릴리스를 개발하여 공개 다운로드할 수 있도록 하려고 합니다. 새 릴리스 패키지 크기는 약 5GB입니다. 회사는 온프레미스 데이터 센터에 호스팅된 Linux 기반 공개 FTP 사이트에서 기존 릴리스 다운로드를 제공합니다. 전 세계 사용자가 새 릴리스를 다운로드할 것으로 예상됩니다. 회사는 사용자 위치에 관계없이 향상된 다운로드 성능과 낮은 전송 비용을 제공하는 솔루션을 원합니다.</p>
<p>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Store the game files on Amazon EBS volumes mounted on Amazon EC2 instances within an Auto Scaling group. Configure an FTP service on the EC2 instances. Use an Application Load Balancer in front of the Auto Scaling group. Publish the game download URL for users to download the package.', ko: 'Auto Scaling 그룹 내 Amazon EC2 인스턴스에 탑재된 Amazon EBS 볼륨에 게임 파일을 저장합니다. EC2 인스턴스에 FTP 서비스를 구성합니다. Auto Scaling 그룹 앞에 Application Load Balancer를 사용합니다. 사용자가 패키지를 다운로드할 수 있도록 게임 다운로드 URL을 게시합니다.' },
      { k: 'B', en: 'Store the game files on Amazon EFS volumes that are attached to Amazon EC2 instances within an Auto Scaling group. Configure an FTP service on each of the EC2 instances. Use an Application Load Balancer in front of the Auto Scaling group. Publish the game download URL for users to download the package.', ko: 'Auto Scaling 그룹 내 Amazon EC2 인스턴스에 연결된 Amazon EFS 볼륨에 게임 파일을 저장합니다. 각 EC2 인스턴스에 FTP 서비스를 구성합니다. Auto Scaling 그룹 앞에 Application Load Balancer를 사용합니다.' },
      { k: 'C', en: 'Configure Amazon Route 53 and an Amazon S3 bucket for website hosting. Upload the game files to the S3 bucket. Use Amazon CloudFront for the website. Publish the game download URL for users to download the package.', ko: '웹사이트 호스팅을 위해 Amazon Route 53과 Amazon S3 버킷을 구성합니다. 게임 파일을 S3 버킷에 업로드합니다. 웹사이트에 Amazon CloudFront를 사용합니다. 사용자가 패키지를 다운로드할 수 있도록 게임 다운로드 URL을 게시합니다.' },
      { k: 'D', en: 'Configure Amazon Route 53 and an Amazon S3 bucket for website hosting. Upload the game files to the S3 bucket. Set Requester Pays for the S3 bucket. Publish the game download URL for users to download the package.', ko: '웹사이트 호스팅을 위해 Amazon Route 53과 Amazon S3 버킷을 구성합니다. 게임 파일을 S3 버킷에 업로드합니다. S3 버킷에 요청자 지불을 설정합니다. 사용자가 패키지를 다운로드할 수 있도록 게임 다운로드 URL을 게시합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — S3 + CloudFront</span></p>
<p>전 세계 사용자 대상 대용량 파일 배포의 최적 솔루션입니다:</p>
<ul>
<li><strong>Amazon S3</strong>: 5GB 파일의 내구성 높은 스토리지, 서버 관리 불필요</li>
<li><strong>Amazon CloudFront</strong>: 전 세계 엣지 로케이션에서 콘텐츠를 캐시하여 지연 시간 최소화. 첫 다운로드 후 엣지에 캐시되어 이후 요청은 오리진 트래픽 없이 빠르게 제공</li>
<li>CloudFront의 데이터 전송 비용이 S3에서 직접 제공하는 것보다 저렴</li>
</ul>
<p><a href="https://aws.amazon.com/cloudfront/pricing/" target="_blank">AWS CloudFront 요금</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — EC2 기반 FTP 서비스는 서버 관리가 필요하고 글로벌 성능 개선이 없습니다. 온프레미스 FTP 사이트와 동일한 단일 지점 배포 방식입니다.</p>
<p><span class="mark-no">❌ D</span> — S3 요청자 지불은 다운로드 비용을 사용자에게 전가하는 기능입니다. 성능 향상과는 무관하며 일반 공개 다운로드에 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'S3 + CloudFront는 글로벌 엣지 캐싱으로 다운로드 성능 향상 + 낮은 전송 비용 + 서버리스 관리 제공.' },
    ],
  },
  {
    n: 437,
    en: `<p>A company runs an application in the cloud that consists of a database and a website. Users can post data to the website, have the data processed, and have the data sent back to them in an email. Data is stored in a MySQL database running on an Amazon EC2 instance. The database is running in a VPC with two private subnets. The website is running on Apache Tomcat in a single EC2 instance in a different VPC with one public subnet. There is a single VPC peering connection between the database and website VPC.</p>
<p>The website has suffered several outages during the last month due to high traffic.</p>
<p>Which actions should a solutions architect take to increase the reliability of the application? (Choose three.)</p>`,
    ko: `<p>한 회사가 데이터베이스와 웹사이트로 구성된 애플리케이션을 클라우드에서 운영합니다. 사용자는 웹사이트에 데이터를 게시하고, 데이터를 처리하여 이메일로 받을 수 있습니다. 데이터는 Amazon EC2 인스턴스에서 실행되는 MySQL 데이터베이스에 저장됩니다. 데이터베이스는 2개의 프라이빗 서브넷이 있는 VPC에서 실행됩니다. 웹사이트는 1개의 퍼블릭 서브넷이 있는 다른 VPC의 단일 EC2 인스턴스에서 Apache Tomcat으로 실행됩니다. 데이터베이스 VPC와 웹사이트 VPC 간에 단일 VPC 피어링 연결이 있습니다.</p>
<p>지난 한 달 동안 높은 트래픽으로 인해 웹사이트가 여러 번 중단되었습니다.</p>
<p>애플리케이션의 신뢰성을 높이기 위해 솔루션 아키텍트는 어떤 조치를 취해야 합니까? (3개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: 'Place the Tomcat server in an Auto Scaling group with multiple EC2 instances behind an Application Load Balancer.', ko: 'Tomcat 서버를 Application Load Balancer 뒤에 여러 EC2 인스턴스가 있는 Auto Scaling 그룹에 배치합니다.' },
      { k: 'B', en: 'Provision an additional VPC peering connection.', ko: '추가 VPC 피어링 연결을 프로비저닝합니다.' },
      { k: 'C', en: 'Migrate the MySQL database to Amazon Aurora with one Aurora Replica.', ko: '하나의 Aurora 복제본을 사용하여 MySQL 데이터베이스를 Amazon Aurora로 마이그레이션합니다.' },
      { k: 'D', en: 'Provision two NAT gateways in the database VPC.', ko: '데이터베이스 VPC에 두 개의 NAT 게이트웨이를 프로비저닝합니다.' },
      { k: 'E', en: 'Move the Tomcat server to the database VPC.', ko: 'Tomcat 서버를 데이터베이스 VPC로 이동합니다.' },
      { k: 'F', en: 'Create an additional public subnet in a different Availability Zone in the website VPC.', ko: '웹사이트 VPC의 다른 가용 영역에 추가 퍼블릭 서브넷을 생성합니다.' },
    ],
    answer: ['A', 'C', 'F'],
    vote: '100% ACF',
    explain: `<p><span class="mark-ok">✅ A — Auto Scaling + ALB</span></p>
<p>단일 EC2 인스턴스의 높은 트래픽 문제를 해결합니다. Auto Scaling으로 수요에 따라 인스턴스 수를 자동 조정하고, ALB로 트래픽을 분산하여 웹사이트 가용성을 높입니다.</p>
<p><span class="mark-ok">✅ C — Aurora 마이그레이션 + Aurora Replica</span></p>
<p>EC2에서 MySQL을 직접 운영하는 것은 가용성이 낮습니다. Amazon Aurora는 다중 AZ 고가용성 아키텍처를 기본으로 제공하며, Aurora Replica로 읽기 확장 및 빠른 장애 조치(자동 페일오버)가 가능합니다.</p>
<p><span class="mark-ok">✅ F — 다른 AZ에 추가 퍼블릭 서브넷</span></p>
<p>현재 웹사이트 VPC는 단일 AZ(퍼블릭 서브넷 1개)로 단일 장애점이 있습니다. 다른 AZ에 추가 퍼블릭 서브넷을 생성하면 ALB가 여러 AZ에 배포되어 고가용성을 확보합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 추가 VPC 피어링 연결은 현재 단일 피어링이 있는 상황에서 중복성을 제공하지 않으며, 신뢰성 향상에 직접적인 효과가 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 데이터베이스 VPC에 NAT 게이트웨이를 추가해도 웹사이트의 트래픽 처리 능력이나 데이터베이스 고가용성에 도움이 되지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — Tomcat 서버를 다른 VPC로 이동하는 것은 피어링 연결만으로는 불가능하며, 데이터베이스 VPC에는 퍼블릭 서브넷이 없어 웹사이트 접근이 불가능해집니다.</p>`,
    disc: [
      { ans: 'ACF (100%)', txt: 'A: 웹 계층 확장, C: DB 고가용성, F: 다중 AZ 퍼블릭 서브넷으로 ALB 배포 가능. 세 가지가 신뢰성 향상의 핵심.' },
    ],
  },
  {
    n: 438,
    en: `<p>A retail company is operating its ecommerce application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The company uses an Amazon RDS DB instance as the database backend. Amazon CloudFront is configured with one origin that points to the ALB. Static content is cached. Amazon Route 53 is used to host all public zones.</p>
<p>After an update of the application, the ALB occasionally returns a 502 status code (Bad Gateway) error. The root cause is malformed HTTP headers that are returned to the ALB. The webpage returns successfully when a solutions architect reloads the webpage immediately after the error occurs.</p>
<p>While the company is working on the problem, the solutions architect needs to provide a custom error page instead of the standard ALB error page to visitors.</p>
<p>Which combination of steps will meet this requirement with the LEAST amount of operational overhead? (Choose two.)</p>`,
    ko: `<p>한 소매 회사가 AWS에서 전자상거래 애플리케이션을 운영합니다. 애플리케이션은 ALB 뒤의 Amazon EC2 인스턴스에서 실행됩니다. Amazon RDS DB 인스턴스를 데이터베이스 백엔드로 사용합니다. Amazon CloudFront는 ALB를 가리키는 하나의 오리진으로 구성되어 정적 콘텐츠를 캐시합니다. Amazon Route 53이 모든 퍼블릭 영역을 호스팅합니다.</p>
<p>애플리케이션 업데이트 후 ALB가 가끔 502 상태 코드(Bad Gateway) 오류를 반환합니다. 근본 원인은 ALB로 반환되는 잘못된 HTTP 헤더입니다. 오류 직후 페이지를 다시 로드하면 성공적으로 반환됩니다.</p>
<p>회사가 문제를 해결하는 동안 솔루션 아키텍트는 방문자에게 표준 ALB 오류 페이지 대신 사용자 정의 오류 페이지를 제공해야 합니다.</p>
<p>최소한의 운영 오버헤드로 이 요구사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Create an Amazon S3 bucket. Configure the S3 bucket to host a static webpage. Upload the custom error pages to Amazon S3.', ko: 'Amazon S3 버킷을 생성합니다. 정적 웹페이지를 호스팅하도록 S3 버킷을 구성합니다. 사용자 정의 오류 페이지를 Amazon S3에 업로드합니다.' },
      { k: 'B', en: 'Create an Amazon CloudWatch alarm to invoke an AWS Lambda function if the ALB health check response Target.FailedHealthChecks is greater than 0. Configure the Lambda function to modify the forwarding rule at the ALB to point to a publicly accessible web server.', ko: 'ALB 상태 확인 응답 Target.FailedHealthChecks가 0보다 크면 AWS Lambda 함수를 호출하는 Amazon CloudWatch 경보를 생성합니다. 공개적으로 접근 가능한 웹 서버를 가리키도록 ALB의 전달 규칙을 수정하는 Lambda 함수를 구성합니다.' },
      { k: 'C', en: 'Modify the existing Amazon Route 53 records by adding health checks. Configure a fallback target if the health check fails. Modify DNS records to point to a publicly accessible webpage.', ko: '상태 확인을 추가하여 기존 Amazon Route 53 레코드를 수정합니다. 상태 확인 실패 시 대체 대상을 구성합니다. 공개적으로 접근 가능한 웹페이지를 가리키도록 DNS 레코드를 수정합니다.' },
      { k: 'D', en: 'Create an Amazon CloudWatch alarm to invoke an AWS Lambda function if the ALB health check response Elb.InternalError is greater than 0. Configure the Lambda function to modify the forwarding rule at the ALB to point to a publicly accessible web server.', ko: 'ALB 상태 확인 응답 Elb.InternalError가 0보다 크면 AWS Lambda 함수를 호출하는 Amazon CloudWatch 경보를 생성합니다. 공개적으로 접근 가능한 웹 서버를 가리키도록 ALB의 전달 규칙을 수정하는 Lambda 함수를 구성합니다.' },
      { k: 'E', en: 'Add a custom error response by configuring a CloudFront custom error page. Modify DNS records to point to a publicly accessible web page.', ko: 'CloudFront 사용자 정의 오류 페이지를 구성하여 사용자 정의 오류 응답을 추가합니다. 공개적으로 접근 가능한 웹 페이지를 가리키도록 DNS 레코드를 수정합니다.' },
    ],
    answer: ['A', 'E'],
    vote: '100% AE',
    explain: `<p><span class="mark-ok">✅ A — S3 정적 오류 페이지 호스팅</span></p>
<p>사용자 정의 오류 페이지를 S3에 정적 파일로 호스팅합니다. 간단하고 관리 오버헤드가 없습니다.</p>
<p><span class="mark-ok">✅ E — CloudFront 사용자 정의 오류 응답</span></p>
<p>CloudFront의 사용자 정의 오류 페이지 기능을 사용하면, 오리진(ALB)에서 502 오류를 반환할 때 CloudFront가 대신 S3의 사용자 정의 오류 페이지를 반환합니다. 오류는 일시적(재시도하면 성공)이므로 이 방식이 최소 오버헤드로 최적의 사용자 경험을 제공합니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GeneratingCustomErrorResponses.html" target="_blank">AWS 공식 문서: CloudFront 사용자 정의 오류 응답</a></p>`,
    wrong: `<p><span class="mark-no">❌ B, D</span> — CloudWatch 경보 + Lambda로 ALB 규칙을 수정하는 것은 복잡하며, 간헐적인 오류에 실시간으로 반응하기 어렵습니다. 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ C</span> — Route 53 상태 확인은 DNS TTL 때문에 전환에 시간이 걸립니다. 간헐적이고 일시적인 502 오류에는 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'AE (100%)', txt: 'S3에 정적 오류 페이지 호스팅 + CloudFront 사용자 정의 오류 응답 구성이 최소 오버헤드로 오류 페이지 제공.' },
    ],
  },
  {
    n: 439,
    en: `<p>A company wants to migrate an Amazon Aurora MySQL DB cluster from an existing AWS account to a new AWS account in the same AWS Region. Both accounts are members of the same organization in AWS Organizations.</p>
<p>The company must minimize database service interruption before the company performs DNS cutover to the new database.</p>
<p>Which migration strategy will meet this requirement? (Choose two.)</p>`,
    ko: `<p>한 회사가 Amazon Aurora MySQL DB 클러스터를 기존 AWS 계정에서 동일한 AWS 리전의 새 AWS 계정으로 마이그레이션하려고 합니다. 두 계정 모두 AWS Organizations의 동일한 조직 멤버입니다.</p>
<p>회사는 새 데이터베이스로 DNS 컷오버를 수행하기 전에 데이터베이스 서비스 중단을 최소화해야 합니다.</p>
<p>이 요구사항을 충족하는 마이그레이션 전략은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Take a snapshot of the existing Aurora database. Share the snapshot with the new AWS account. Create an Aurora DB cluster in the new account from the snapshot.', ko: '기존 Aurora 데이터베이스의 스냅샷을 찍습니다. 스냅샷을 새 AWS 계정과 공유합니다. 스냅샷으로 새 계정에 Aurora DB 클러스터를 생성합니다.' },
      { k: 'B', en: 'Create an Aurora DB cluster in the new AWS account. Use AWS Database Migration Service (AWS DMS) to migrate data between the two Aurora DB clusters.', ko: '새 AWS 계정에 Aurora DB 클러스터를 생성합니다. AWS DMS를 사용하여 두 Aurora DB 클러스터 간에 데이터를 마이그레이션합니다.' },
      { k: 'C', en: 'Use AWS Backup to share an Aurora database backup from the existing AWS account to the new AWS account. Create an Aurora DB cluster in the new AWS account from the snapshot.', ko: 'AWS Backup을 사용하여 기존 AWS 계정의 Aurora 데이터베이스 백업을 새 AWS 계정과 공유합니다. 스냅샷으로 새 AWS 계정에 Aurora DB 클러스터를 생성합니다.' },
      { k: 'D', en: 'Create an Aurora DB cluster in the new AWS account. Use AWS Application Migration Service to migrate data between the two Aurora DB clusters.', ko: '새 AWS 계정에 Aurora DB 클러스터를 생성합니다. AWS Application Migration Service를 사용하여 두 Aurora DB 클러스터 간에 데이터를 마이그레이션합니다.' },
    ],
    answer: ['A', 'B'],
    vote: '88% AB',
    explain: `<p><span class="mark-ok">✅ A — 스냅샷 공유 + 복원</span></p>
<p>Aurora 스냅샷은 계정 간 공유가 가능합니다. 특정 시점의 스냅샷에서 새 계정에 DB 클러스터를 생성하는 빠른 방법입니다. 단, 스냅샷 이후의 변경 사항은 반영되지 않으므로 중단 시간이 최소화되지 않을 수 있습니다.</p>
<p><span class="mark-ok">✅ B — AWS DMS 지속적 복제</span></p>
<p>AWS DMS를 사용하면 기존 Aurora에서 새 Aurora로 지속적인 복제(CDC)가 가능합니다. DNS 컷오버 시점까지 두 DB를 동기화하여 서비스 중단을 최소화합니다.</p>
<p><a href="https://aws.amazon.com/blogs/database/cross-account-amazon-aurora-postgresql-and-amazon-rds-for-postgresql-migration-with-reduced-downtime-using-aws-dms/" target="_blank">AWS 블로그: 교차 계정 Aurora 마이그레이션 with DMS</a></p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — AWS Backup은 계정 간 백업 공유를 지원하지만, 이는 A(스냅샷 공유)와 기능적으로 동일하며 추가적인 복잡성을 더합니다. A가 더 직접적입니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Application Migration Service(MGN)는 서버/VM 마이그레이션 도구로 데이터베이스 간 데이터 마이그레이션에 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'AB (88%)', txt: 'A와 B는 각각 독립적인 유효한 전략. B(DMS)는 지속적 복제로 중단 최소화에 우월. A(스냅샷)는 간단한 대안.' },
    ],
  },
  {
    n: 440,
    en: `<p>A software as a service (SaaS) company provides a media software solution to customers. The solution is hosted on 50 VPCs across various AWS Regions and AWS accounts. One of the VPCs is designated as a management VPC. The compute resources in the VPCs work independently.</p>
<p>The company has developed a new feature that requires all 50 VPCs to be able to communicate with each other. The new feature also requires one-way access from each customer's VPC to the company's management VPC. The management VPC hosts a compute resource that validates licenses for the media software solution.</p>
<p>The number of VPCs that the company will use to host the solution will continue to increase as the solution grows.</p>
<p>Which combination of steps will provide the required VPC connectivity with the LEAST operational overhead? (Choose two.)</p>`,
    ko: `<p>한 SaaS 회사가 고객에게 미디어 소프트웨어 솔루션을 제공합니다. 이 솔루션은 다양한 AWS 리전 및 AWS 계정에 걸쳐 50개의 VPC에서 호스팅됩니다. VPC 중 하나가 관리 VPC로 지정됩니다. VPC의 컴퓨팅 리소스는 독립적으로 작동합니다.</p>
<p>회사는 50개 VPC 모두가 서로 통신할 수 있어야 하는 새 기능을 개발했습니다. 또한 각 고객 VPC에서 관리 VPC로의 단방향 접근이 필요합니다. 관리 VPC는 미디어 소프트웨어 솔루션의 라이선스를 검증하는 컴퓨팅 리소스를 호스팅합니다.</p>
<p>솔루션 성장에 따라 VPC 수는 계속 증가할 것입니다.</p>
<p>최소한의 운영 오버헤드로 필요한 VPC 연결을 제공하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Create a transit gateway. Attach all the company\'s VPCs and relevant subnets to the transit gateway.', ko: 'Transit Gateway를 생성합니다. 회사의 모든 VPC와 관련 서브넷을 Transit Gateway에 연결합니다.' },
      { k: 'B', en: 'Create VPC peering connections between all the company\'s VPCs.', ko: '회사의 모든 VPC 간에 VPC 피어링 연결을 생성합니다.' },
      { k: 'C', en: 'Create a Network Load Balancer (NLB) that points to the compute resource for license validation. Create an AWS PrivateLink endpoint service that is available to each customer\'s VPC. Associate the endpoint service with the NLB.', ko: '라이선스 검증을 위한 컴퓨팅 리소스를 가리키는 NLB(Network Load Balancer)를 생성합니다. 각 고객 VPC에서 사용할 수 있는 AWS PrivateLink 엔드포인트 서비스를 생성합니다. 엔드포인트 서비스를 NLB와 연결합니다.' },
      { k: 'D', en: 'Create a VPN appliance in each customer\'s VPC. Connect the company\'s management VPC to each customer\'s VPC by using AWS Site-to-Site VPN.', ko: '각 고객 VPC에 VPN 어플라이언스를 생성합니다. AWS Site-to-Site VPN을 사용하여 관리 VPC를 각 고객 VPC에 연결합니다.' },
      { k: 'E', en: 'Create a VPC peering connection between the company\'s management VPC and each customer\'s VPC.', ko: '회사의 관리 VPC와 각 고객 VPC 간에 VPC 피어링 연결을 생성합니다.' },
    ],
    answer: ['A', 'C'],
    vote: '56% AC / 33% BC',
    explain: `<p><span class="mark-ok">✅ A — Transit Gateway</span></p>
<p>50개 VPC 간의 전체 연결(any-to-any)을 위해 Transit Gateway가 가장 확장 가능하고 관리하기 쉬운 솔루션입니다. VPC 피어링(N*(N-1)/2 연결)과 달리 허브 앤 스포크 구조로 중앙에서 관리하며, VPC 수 증가에도 쉽게 확장됩니다. (다중 리전의 경우 리전별 TGW 생성 후 TGW 피어링 필요)</p>
<p><span class="mark-ok">✅ C — PrivateLink(NLB 기반 엔드포인트 서비스)</span></p>
<p>관리 VPC의 라이선스 검증 서비스에 대한 <strong>단방향 접근</strong>을 제공합니다. PrivateLink는 VPC CIDR 중복에 무관하게 작동하며, 고객 VPC에서 관리 VPC로만 접근 가능한 단방향 보안을 제공합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — VPC 피어링은 N*(N-1)/2개의 연결이 필요합니다(50개 VPC = 1,225개). 관리가 매우 복잡하고 VPC 수 증가 시 확장성이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Site-to-Site VPN은 온프레미스 연결용으로 VPC 간 연결에는 과도하게 복잡합니다.</p>
<p><span class="mark-no">❌ E</span> — 관리 VPC와 각 고객 VPC 간의 피어링은 고객 VPC 간 통신을 제공하지 않습니다.</p>`,
    disc: [
      { ans: 'AC (56%)', txt: 'TGW로 50개 VPC 간 전체 통신, PrivateLink로 관리 VPC에 단방향 접근. 두 요구사항을 각각 최적으로 해결.' },
      { ans: 'BC (33%)', txt: 'VPC는 다중 리전/계정에 걸쳐 있어 단일 TGW 연결 불가 주장. 그러나 TGW 피어링으로 해결 가능하므로 A가 우월.' },
    ],
  },
];