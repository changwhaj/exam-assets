window.QS_SET13 = [
  {
    n: 121,
    en: `A financial company is planning to migrate its web application from on premises to AWS. The company uses a third-party security tool to monitor the inbound traffic to the application. The company has used the security tool for the last 15 years, and the tool has no cloud solutions available from its vendor. The company's security team is concerned about how to integrate the security tool with AWS technology.<br/><br/>The company plans to deploy the application migration to AWS on Amazon EC2 instances. The EC2 instances will run in an Auto Scaling group in a dedicated VPC. The company needs to use the security tool to inspect all packets that come in and out of the VPC. This inspection must occur in real time and must not affect the application's performance. A solutions architect must design a target architecture on AWS that is highly available within an AWS Region.<br/><br/>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)`,
    ko: `한 금융 회사가 웹 애플리케이션을 온프레미스에서 AWS로 마이그레이션할 계획입니다. 회사는 타사 보안 도구를 사용하여 애플리케이션에 대한 인바운드 트래픽을 모니터링합니다. 회사는 지난 15년 동안 보안 도구를 사용해 왔으며 이 도구에는 해당 공급업체에서 제공하는 클라우드 솔루션이 없습니다. 회사의 보안팀은 보안 도구를 AWS 기술과 통합하는 방법에 대해 고민하고 있습니다. <br/><br/>회사는 Amazon EC2 인스턴스를 통해 AWS로 애플리케이션 마이그레이션을 배포할 계획입니다. EC2 인스턴스는 전용 VPC의 Auto Scaling 그룹에서 실행됩니다. 회사는 보안 도구를 사용하여 VPC에 들어오고 나가는 모든 패킷을 검사해야 합니다. 이 검사는 실시간으로 이루어져야 하며 애플리케이션 성능에 영향을 주어서는 안 됩니다. 솔루션 아키텍트는 AWS 리전 내에서 가용성이 높은 AWS 대상 아키텍처를 설계해야 합니다. <br/><br/>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Deploy the security tool on EC2 instances m a new Auto Scaling group in the existing VPC`, ko:`기존 VPC의 새로운 Auto Scaling 그룹에 EC2 인스턴스에 보안 도구를 배포합니다.` },
      { k:'B', en:`Deploy the web application behind a Network Load Balancer`, ko:`Network Load Balancer 뒤에 웹 애플리케이션 배포` },
      { k:'C', en:`Deploy an Application Load Balancer in front of the security tool instances`, ko:`보안 도구 인스턴스 앞에 Application Load Balancer를 배포합니다.` },
      { k:'D', en:`Provision a Gateway Load Balancer for each Availability Zone to redirect the traffic to the security tool`, ko:`각 가용 영역에 대해 게이트웨이 로드 밸런서를 프로비저닝하여 트래픽을 보안 도구로 리디렉션합니다.` },
      { k:'E', en:`Provision a transit gateway to facilitate communication between VPCs.`, ko:`VPC 간 통신을 용이하게 하기 위해 전송 게이트웨이를 프로비저닝합니다.` },
    ],
    answer: ['A','D'],
    vote: '50% DE, 48% AD',
    explain: `<p><span class="mark-ok">✅ A — 보안 어플라이언스 EC2 Auto Scaling 그룹 배포</span></p>
<p>타사 보안 도구(클라우드 네이티브 솔루션 없음)를 EC2 인스턴스에서 실행해야 합니다. 동일 VPC 내 새 Auto Scaling 그룹에 배포하면 수요에 따라 어플라이언스 용량을 자동 확장할 수 있어 고가용성과 성능을 동시에 확보합니다.</p>
<p><span class="mark-ok">✅ D — 가용 영역별 Gateway Load Balancer 프로비저닝</span></p>
<p>AWS Gateway Load Balancer(GWLB)는 타사 가상 어플라이언스(방화벽, IDS/IPS, 심층 패킷 검사 도구)를 투명하게 인라인으로 배치하도록 설계된 전용 로드 밸런서입니다. GENEVE 프로토콜(포트 6081)로 원본 패킷을 캡슐화하여 어플라이언스로 전달하므로 애플리케이션 트래픽 경로에 영향 없이 실시간 전패킷 검사가 가능합니다. AZ별 GWLB를 두면 단일 AZ 장애 시에도 검사가 중단되지 않아 고가용성 요건을 충족합니다. 라우팅 테이블에 GWLB 엔드포인트를 넥스트 홉으로 설정하면 VPC 인바운드/아웃바운드 트래픽을 모두 투명하게 검사할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html" target="_blank">AWS 공식 문서 — Gateway Load Balancer</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Network Load Balancer는 Layer 4 로드 밸런싱 도구로, 트래픽 검사 기능이 없습니다. NLB를 웹 앱 앞에 배치해도 타사 보안 도구와 통합되지 않으며 패킷 검사와 무관합니다.</p>
<p><span class="mark-no">❌ C</span> — Application Load Balancer는 Layer 7(HTTP/HTTPS) 로드 밸런싱 도구입니다. 보안 어플라이언스 앞단에 ALB를 두면 ALB가 HTTP 헤더 기준으로 라우팅하므로 GWLB의 GENEVE 캡슐화 방식과 호환되지 않습니다. GWLB가 이미 어플라이언스로의 트래픽 분산을 처리하므로 ALB는 불필요합니다.</p>
<p><span class="mark-no">❌ E</span> — Transit Gateway는 여러 VPC 또는 온프레미스 네트워크 간 라우팅을 위한 허브입니다. 단일 VPC 내 인라인 패킷 검사 시나리오에서는 TGW가 필요하지 않습니다. GWLB는 VPC 엔드포인트(PrivateLink 기반)를 통해 어플라이언스 VPC와 통신하므로 TGW 없이도 cross-VPC 검사가 가능합니다.</p>`,
    disc: [{ ans:'A, D', txt:'GWLB는 타사 가상 어플라이언스를 투명하게 인라인 배치하는 전용 로드 밸런서입니다. EC2 Auto Scaling 그룹(A)에 보안 도구를 배포하고 AZ별 GWLB(D)로 트래픽을 리디렉션하는 것이 정석 패턴입니다. GENEVE 캡슐화로 패킷을 보안 어플라이언스에 전달한 후 원본 목적지로 반환합니다. TGW(E)는 단일 VPC 인라인 검사에 불필요합니다.' }, { ans:'D, E', txt:'별도의 보안 검사 VPC를 두고 TGW로 라우팅하는 아키텍처도 가능하지만, GWLB는 VPC 피어링 또는 PrivateLink 엔드포인트로 cross-VPC 연결을 처리하므로 TGW가 필수는 아닙니다. GWLB의 표준 배포 모델은 A+D 조합이 더 직접적입니다.' }]
  },
  {
    n: 122,
    en: `A company has purchased appliances from different vendors. The appliances all have IoT sensors. The sensors send status information in the vendors' proprietary formats to a legacy application that parses the information into JSON. The parsing is simple, but each vendor has a unique format. Once daily, the application parses all the JSON records and stores the records in a relational database for analysis.<br/><br/>The company needs to design a new data analysis solution that can deliver faster and optimize costs.<br/><br/>Which solution will meet these requirements?`,
    ko: `한 회사가 여러 공급업체로부터 가전제품을 구입했습니다. 가전제품에는 모두 IoT 센서가 있습니다. 센서는 정보를 JSON으로 구문 분석하는 레거시 애플리케이션에 공급업체의 독점 형식으로 된 상태 정보를 보냅니다. 구문 분석은 간단하지만 각 공급업체마다 고유한 형식이 있습니다. 매일 한 번씩 애플리케이션은 모든 JSON 레코드를 구문 분석하고 분석을 위해 관계형 데이터베이스에 레코드를 저장합니다. <br/><br/>회사는 더 빠르게 제공하고 비용을 최적화할 수 있는 새로운 데이터 분석 솔루션을 설계해야 합니다. <br/><br/>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Connect the IoT sensors to AWS IoT Core. Set a rule to invoke an AWS Lambda function to parse the information and save a .csv file to Amazon. S3 Use AWS Glue to catalog the files. Use Amazon Athena and Amazon QuickSight for analysis.`, ko:`IoT 센서를 AWS IoT Core에 연결합니다. AWS Lambda 함수를 호출하여 정보를 구문 분석하고 .csv 파일을 Amazon에 저장하는 규칙을 설정합니다. S3 AWS Glue를 사용하여 파일을 카탈로그화합니다. 분석에는 Amazon Athena 및 Amazon QuickSight를 사용하십시오.` },
      { k:'B', en:`Migrate the application server to AWS Fargate, which will receive the information from IoT sensors and parse the information into a relational format. Save the parsed information to Amazon Redshlft for analysis.`, ko:`IoT 센서로부터 정보를 수신하고 정보를 관계형 형식으로 구문 분석하는 AWS Fargate로 애플리케이션 서버를 마이그레이션합니다. 분석을 위해 구문 분석된 정보를 Amazon Redshlft에 저장합니다.` },
      { k:'C', en:`Create an AWS Transfer for SFTP server. Update the IoT sensor code to send the information as a .csv file through SFTP to the server. Use AWS Glue to catalog the files. Use Amazon Athena for analysis.`, ko:`SFTP용 AWS 전송 서버를 생성합니다. IoT 센서 코드를 업데이트하여 정보를 SFTP를 통해 .csv 파일로 서버에 보냅니다. AWS Glue를 사용하여 파일을 카탈로그화합니다. 분석에는 Amazon Athena를 사용하세요.` },
      { k:'D', en:`Use AWS Snowball Edge to collect data from the IoT sensors directly to perform local analysis. Periodically collect the data into Amazon Redshift to perform global analysis.`, ko:`AWS Snowball Edge를 사용하여 IoT 센서에서 직접 데이터를 수집하여 로컬 분석을 수행합니다. 정기적으로 데이터를 Amazon Redshift로 수집하여 글로벌 분석을 수행합니다.` },
    ],
    answer: ['A'],
    vote: '85% A, 15% B',
    explain: `<p><span class="mark-ok">✅ A — IoT Core → Lambda → S3 → Glue/Athena/QuickSight 서버리스 파이프라인</span></p>
<p>AWS IoT Core는 IoT 장치와의 통신 프로토콜로 MQTT, HTTPS, MQTT over WSS, LoRaWAN을 지원합니다. IoT Core 규칙 엔진을 사용하면 수신된 센서 데이터를 실시간으로 Lambda로 라우팅할 수 있고, Lambda에서 공급업체별 독점 형식을 JSON/CSV로 파싱한 뒤 S3에 저장합니다. AWS Glue가 S3 데이터를 크롤링하여 데이터 카탈로그를 자동 구성하고, Amazon Athena가 표준 SQL로 S3 데이터를 직접 쿼리(서버리스)하며 QuickSight로 시각화합니다. 기존 일 1회 배치보다 빠르고, 서버리스 아키텍처로 비용이 최적화됩니다.</p>
<p><a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-rules.html" target="_blank">AWS 공식 문서 — IoT Core 규칙 엔진</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Fargate에서 애플리케이션 서버를 실행하면 컨테이너 실행 비용이 지속적으로 발생합니다. Redshift는 대규모 DW 분석 서비스로 소규모 IoT 데이터 분석에는 과다 비용입니다. 또한 Fargate가 직접 IoT 프로토콜(MQTT 등)을 수신 대기하는 구조는 복잡하고 비용이 높습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS IoT Core는 SFTP를 지원하지 않습니다. IoT 센서가 SFTP로 데이터를 전송하도록 코드를 수정하는 것은 IoT 장치의 일반적인 통신 방식이 아니며, 저전력 센서에서 SFTP 클라이언트를 실행하는 것은 현실적이지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Snowball Edge는 오프라인 환경(인터넷 연결 없음)이나 대용량 데이터 마이그레이션을 위한 엣지 컴퓨팅 장치입니다. IoT 센서의 실시간 상태 모니터링과 빠른 분석이 목표인 이 시나리오와 맞지 않으며, 비용과 복잡성도 높습니다.</p>`,
    disc: [{ ans:'A', txt:'IoT Core는 MQTT/HTTPS/LoRaWAN을 지원하고(SFTP는 미지원), 규칙 엔진으로 Lambda 트리거가 가능합니다. Glue + Athena + QuickSight 조합은 서버리스로 비용 최적화되며 기존 일 1회 배치 처리보다 훨씬 빠른 분석을 제공합니다. B의 Fargate + Redshift는 과도한 비용이 발생합니다.' }]
  },
  {
    n: 123,
    en: `A company is migrating some of its applications to AWS. The company wants to migrate and modernize the applications quickly after it finalizes networking and security strategies. The company has set up an AWS Direct Connect connection in a central network account.<br/><br/>The company expects to have hundreds of AWS accounts and VPCs in the near future. The corporate network must be able to access the resources on AWS seamlessly and also must be able to communicate with all the VPCs. The company also wants to route its cloud resources to the internet through its on-premises data center.<br/><br/>Which combination of steps will meet these requirements? (Choose three.)`,
    ko: `한 회사가 일부 애플리케이션을 AWS로 마이그레이션하고 있습니다. 회사는 네트워킹 및 보안 전략을 확정한 후 신속하게 애플리케이션을 마이그레이션하고 현대화하기를 원합니다. 회사는 중앙 네트워크 계정에 AWS Direct Connect 연결을 설정했습니다. <br/><br/>회사는 가까운 시일 내에 수백 개의 AWS 계정과 VPC를 보유할 것으로 예상합니다. 기업 네트워크는 AWS의 리소스에 원활하게 액세스할 수 있어야 하며 모든 VPC와 통신할 수도 있어야 합니다. 또한 회사는 온프레미스 데이터 센터를 통해 클라우드 리소스를 인터넷으로 라우팅하려고 합니다. <br/><br/>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Create a Direct Connect gateway in the central account. In each of the accounts, create an association proposal by using the Direct Connect gateway and the account ID for every virtual private gateway.`, ko:`중앙 계정에 Direct Connect 게이트웨이를 생성합니다. 각 계정에서 Direct Connect 게이트웨이와 모든 가상 프라이빗 게이트웨이의 계정 ID를 사용하여 연결 제안을 생성합니다.` },
      { k:'B', en:`Create a Direct Connect gateway and a transit gateway in the central network account. Attach the transit gateway to the Direct Connect gateway by using a transit VIF.`, ko:`중앙 네트워크 계정에 Direct Connect 게이트웨이와 전송 게이트웨이를 생성합니다. 전송 VIF를 사용하여 전송 게이트웨이를 Direct Connect 게이트웨이에 연결합니다.` },
      { k:'C', en:`Provision an internet gateway. Attach the internet gateway to subnets. Allow internet traffic through the gateway.`, ko:`인터넷 게이트웨이를 프로비저닝합니다. 인터넷 게이트웨이를 서브넷에 연결합니다. 게이트웨이를 통한 인터넷 트래픽을 허용합니다.` },
      { k:'D', en:`Share the transit gateway with other accounts. Attach VPCs to the transit gateway.`, ko:`Transit Gateway를 다른 계정과 공유합니다. Transit Gateway에 VPC를 연결합니다.` },
      { k:'E', en:`Provision VPC peering as necessary.`, ko:`필요에 따라 VPC 피어링을 프로비저닝합니다.` },
      { k:'F', en:`Provision only private subnets. Open the necessary route on the transit gateway and customer gateway to allow outbound internet traffic from AWS to flow through NAT services that run in the data center.`, ko:`프라이빗 서브넷만 프로비저닝합니다. AWS의 아웃바운드 인터넷 트래픽이 데이터 센터에서 실행되는 NAT 서비스를 통해 흐를 수 있도록 전송 게이트웨이 및 고객 게이트웨이에서 필요한 경로를 엽니다.` },
    ],
    answer: ['B','D','F'],
    vote: '100% BDF',
    explain: `<p><span class="mark-ok">✅ B — 중앙 계정에 DX 게이트웨이 + Transit Gateway 생성, Transit VIF로 연결</span></p>
<p>수백 개의 VPC로 확장하는 시나리오에서는 VGW(Virtual Private Gateway) 방식(옵션 A)이 아닌 Transit Gateway(TGW)를 사용해야 합니다. Transit VIF(가상 인터페이스)는 Direct Connect를 통해 온프레미스와 TGW를 직접 연결하는 방식으로, 단일 DX 연결로 최대 5,000개 VPC까지 연결할 수 있습니다.</p>
<p><span class="mark-ok">✅ D — AWS RAM으로 TGW를 다른 계정에 공유, 각 VPC를 TGW에 연결</span></p>
<p>AWS Resource Access Manager(RAM)를 통해 중앙 계정의 TGW를 다른 AWS 계정(수백 개)과 공유합니다. 각 계정의 VPC는 TGW 연결(Attachment)로 허브-앤-스포크 구조로 연결됩니다. TGW 라우팅 테이블에서 VPC 간, 온프레미스 간 경로를 중앙 집중 관리합니다.</p>
<p><span class="mark-ok">✅ F — 프라이빗 서브넷만 사용, 온프레미스 NAT를 통한 인터넷 라우팅</span></p>
<p>회사는 클라우드 리소스의 인터넷 트래픽을 온프레미스 데이터센터를 통해 라우팅하기를 원합니다. 이는 "인터넷 브레이크아웃" 정책으로, AWS VPC에서 0.0.0.0/0 경로를 TGW → DX → 온프레미스 NAT로 향하게 설정합니다. 프라이빗 서브넷만 사용하면 인터넷 게이트웨이(IGW)가 없으므로 모든 인터넷 트래픽이 반드시 온프레미스를 경유합니다.</p>
<p><a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-transit-gateways.html" target="_blank">AWS 공식 문서 — Direct Connect with Transit Gateway</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — VGW(Virtual Private Gateway)를 각 계정마다 개별 생성하고 DX 게이트웨이와 연결하는 방식은 최대 10개 VGW까지만 연결 가능합니다. 수백 개의 VPC 규모로 확장하는 이 시나리오에서는 사용할 수 없습니다. TGW가 훨씬 확장성이 높습니다.</p>
<p><span class="mark-no">❌ C</span> — 인터넷 게이트웨이(IGW)를 VPC에 직접 연결하면 인터넷 트래픽이 AWS에서 직접 나갑니다. 요구사항은 인터넷 트래픽을 온프레미스 데이터센터를 통해 라우팅하는 것(F)이므로 IGW는 이 요구사항에 위배됩니다.</p>
<p><span class="mark-no">❌ E</span> — VPC 피어링은 수백 개의 VPC 환경에서 확장성이 없습니다. VPC 피어링은 전이적 라우팅을 지원하지 않으므로 N개 VPC를 모두 연결하려면 N(N-1)/2개의 피어링이 필요하고, 경로 관리가 극도로 복잡해집니다. TGW가 이 문제를 해결합니다.</p>`,
    disc: [{ ans:'B, D, F', txt:'B: Transit VIF로 DX ↔ TGW 연결. D: RAM으로 TGW 다계정 공유 → 수백 VPC 허브-앤-스포크. F: 프라이빗 서브넷 + 온프레미스 NAT 경유 인터넷 라우팅. A는 VGW 방식으로 수백 VPC에 확장 불가, C는 직접 IGW 허용으로 인터넷 우회 불가, E는 VPC 피어링이 전이적 라우팅 미지원으로 수백 VPC에 부적합.' }]
  },
  {
    n: 124,
    en: `A company has hundreds of AWS accounts. The company recently implemented a centralized internal process for purchasing new Reserved Instances and modifying existing Reserved Instances. This process requires all business units that want to purchase or modify Reserved Instances to submit requests to a dedicated team for procurement. Previously, business units directly purchased or modified Reserved Instances in their own respective AWS accounts autonomously.<br/><br/>A solutions architect needs to enforce the new process in the most secure way possible.<br/><br/>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)`,
    ko: `회사에는 수백 개의 AWS 계정이 있습니다. 회사는 최근 새로운 예약 인스턴스를 구매하고 기존 예약 인스턴스를 수정하기 위한 중앙 집중식 내부 프로세스를 구현했습니다. 이 프로세스에서는 예약 인스턴스를 구매하거나 수정하려는 모든 사업 단위가 조달을 위해 전담 팀에 요청을 제출해야 합니다. 이전에는 사업부가 각자의 AWS 계정에서 예약 인스턴스를 자율적으로 직접 구매하거나 수정했습니다. <br/><br/>솔루션 설계자는 가능한 가장 안전한 방식으로 새로운 프로세스를 시행해야 합니다. <br/><br/>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Ensure that all AWS accounts are part of an organization in AWS Organizations with all features enabled.`, ko:`모든 AWS 계정이 모든 기능이 활성화된 AWS Organizations의 조직에 속해 있는지 확인하십시오.` },
      { k:'B', en:`Use AWS Config to report on the attachment of an IAM policy that denies access to the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.`, ko:`AWS Config를 사용하여 ec2:PurchaseReservedInstancesOffering 작업 및 ec2:ModifyReservedInstances 작업에 대한 액세스를 거부하는 IAM 정책 첨부를 보고합니다.` },
      { k:'C', en:`In each AWS account, create an IAM policy that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action.`, ko:`각 AWS 계정에서 ec2:PurchaseReservedInstancesOffering 작업과 ec2:ModifyReservedInstances 작업을 거부하는 IAM 정책을 생성합니다.` },
      { k:'D', en:`Create an SCP that denies the ec2:PurchaseReservedInstancesOffering action and the ec2:ModifyReservedInstances action. Attach the SCP to each OU of the organization.`, ko:`ec2:PurchaseReservedInstancesOffering 작업 및 ec2:ModifyReservedInstances 작업을 거부하는 SCP를 생성합니다. SCP를 조직의 각 OU에 연결합니다.` },
      { k:'E', en:`Ensure that all AWS accounts are part of an organization in AWS Organizations that uses the consolidated billing feature.`, ko:`모든 AWS 계정이 통합 결제 기능을 사용하는 AWS Organizations 조직의 일부인지 확인하십시오.` },
    ],
    answer: ['A','D'],
    vote: '100% AD',
    explain: `<p><span class="mark-ok">✅ A — AWS Organizations의 모든 기능(All features) 활성화</span></p>
<p>SCP(서비스 제어 정책)를 사용하려면 AWS Organizations가 "모든 기능"(All features) 모드로 활성화되어 있어야 합니다. "통합 결제 전용"(Consolidated billing only) 모드에서는 SCP를 사용할 수 없습니다. 모든 기능 활성화는 SCP, 태그 정책, AI 서비스 옵트아웃 정책, 백업 정책 등 고급 거버넌스 도구의 전제 조건입니다.</p>
<p><span class="mark-ok">✅ D — ec2:PurchaseReservedInstancesOffering 및 ec2:ModifyReservedInstances를 거부하는 SCP 생성 후 OU에 연결</span></p>
<p>SCP는 Organization의 멤버 계정에서 사용할 수 있는 최대 권한을 제한하는 가드레일입니다. SCP Deny는 계정 내 루트 사용자를 포함한 모든 IAM 엔티티의 권한을 재정의합니다. 각 OU에 SCP를 연결하면 수백 개 계정에 일괄 적용되며, 개별 계정 관리자가 IAM 정책으로 이를 우회할 수 없어 "가장 안전한" 방식입니다.</p>
<p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html" target="_blank">AWS 공식 문서 — 서비스 제어 정책(SCP)</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS Config는 리소스 구성 변경을 감지하고 보고하는 도구로, 정책 적용이 아닌 모니터링/감사 도구입니다. RI 구매 작업을 사전에 차단(Deny)하지 못하고 사후 보고만 합니다.</p>
<p><span class="mark-no">❌ C</span> — 각 AWS 계정에 개별적으로 IAM 정책을 생성하는 방식은 수백 개 계정에 일관성 있게 적용하기 어렵습니다. 또한 계정 내 IAM 관리자가 해당 정책을 삭제하거나 수정할 수 있으므로 SCP 대비 보안성이 낮습니다. SCP는 계정 관리자도 재정의할 수 없습니다.</p>
<p><span class="mark-no">❌ E</span> — 통합 결제(Consolidated billing) 전용 모드에서는 SCP를 사용할 수 없습니다. "모든 기능" 활성화(A)가 SCP 사용의 필수 전제 조건이므로 E는 이 요구사항을 충족하지 못합니다.</p>`,
    disc: [{ ans:'A, D', txt:'SCP 사용에는 Organizations의 "All features" 모드(A)가 필수입니다. "Consolidated billing only" 모드(E)에서는 SCP를 사용할 수 없습니다. SCP Deny(D)는 계정 루트 사용자도 우회 불가하여 가장 강력한 제어 수단입니다. 각 계정의 IAM 정책(C)은 계정 관리자가 삭제 가능하므로 보안 수준이 낮습니다.' }]
  },
  {
    n: 125,
    en: `A company is running a critical application that uses an Amazon RDS for MySQL database to store data. The RDS DB instance is deployed in Multi-AZ mode.<br/><br/>A recent RDS database failover test caused a 40-second outage to the application. A solutions architect needs to design a solution to reduce the outage time to less than 20 seconds.<br/><br/>Which combination of steps should the solutions architect take to meet these requirements? (Choose three.)`,
    ko: `한 회사에서 Amazon RDS for MySQL 데이터베이스를 사용하여 데이터를 저장하는 중요한 애플리케이션을 실행하고 있습니다. RDS DB 인스턴스는 다중 AZ 모드로 배포됩니다. <br/><br/>최근 RDS 데이터베이스 장애 조치 테스트로 인해 애플리케이션이 40초 동안 중단되었습니다. 솔루션 설계자는 중단 시간을 20초 미만으로 줄이는 솔루션을 설계해야 합니다. <br/><br/>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Use Amazon ElastiCache for Memcached in front of the database`, ko:`데이터베이스 앞에 Memcached용 Amazon ElastiCache를 사용합니다.` },
      { k:'B', en:`Use Amazon ElastiCache for Redis in front of the database`, ko:`데이터베이스 앞에 Redis용 Amazon ElastiCache 사용` },
      { k:'C', en:`Use RDS Proxy in front of the database.`, ko:`데이터베이스 앞에 RDS Proxy를 사용하십시오.` },
      { k:'D', en:`Migrate the database to Amazon Aurora MySQL.`, ko:`데이터베이스를 Amazon Aurora MySQL로 마이그레이션합니다.` },
      { k:'E', en:`Create an Amazon Aurora Replica.`, ko:`Amazon Aurora 복제본을 생성합니다.` },
      { k:'F', en:`Create an RDS for MySQL read replica`, ko:`MySQL용 RDS 읽기 전용 복제본 생성` },
    ],
    answer: ['C','D','E'],
    vote: '92% CDE, 8% BCF',
    explain: `<p><span class="mark-ok">✅ C — RDS Proxy로 연결 풀링 및 장애 조치 가속화</span></p>
<p>RDS Proxy는 애플리케이션과 데이터베이스 사이에서 연결 풀을 유지합니다. 장애 조치 발생 시 애플리케이션은 RDS Proxy 엔드포인트에 그대로 연결된 상태에서 Proxy가 새로운 Primary 인스턴스로 투명하게 재연결합니다. AWS 공식 블로그에 따르면 RDS Proxy는 Aurora의 장애 조치 시간을 최대 79%까지 단축합니다.</p>
<p><span class="mark-ok">✅ D — Amazon Aurora MySQL로 마이그레이션</span></p>
<p>RDS for MySQL Multi-AZ의 장애 조치는 일반적으로 35~45초 소요됩니다. Amazon Aurora MySQL은 분산 스토리지 아키텍처로 인해 장애 조치가 훨씬 빠릅니다(Aurora Read Replica가 있을 때 일반적으로 30초 이내). Aurora는 스토리지 레이어를 6개 복사본으로 3개 AZ에 분산하여 데이터 손실 없이 빠른 프라이머리 전환이 가능합니다.</p>
<p><span class="mark-ok">✅ E — Aurora Read Replica 생성</span></p>
<p>Aurora Read Replica는 Aurora 장애 조치의 타겟이 됩니다. Aurora Read Replica가 없으면 Aurora도 새 Primary를 처음부터 생성해야 하므로 오래 걸립니다. Aurora Read Replica가 있을 때 장애 조치는 해당 Replica를 Primary로 승격시키는 방식으로 즉시(수 초 내) 이루어집니다. C(RDS Proxy) + D(Aurora) + E(Aurora Replica)의 조합은 20초 미만 장애 조치를 현실적으로 달성합니다.</p>
<p><a href="https://aws.amazon.com/blogs/database/improving-application-availability-with-amazon-rds-proxy/" target="_blank">AWS 공식 블로그 — RDS Proxy로 가용성 개선</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ElastiCache for Memcached는 인메모리 캐시로, 캐시 히트 시 DB 쿼리를 줄여주지만 DB 장애 조치 시간 자체를 단축하지 않습니다. 또한 Memcached는 클러스터 재시작 시 데이터가 소실되어 장애 조치 상황에서 캐시 콜드 스타트가 발생합니다.</p>
<p><span class="mark-no">❌ B</span> — ElastiCache for Redis도 마찬가지로 DB 장애 조치 시간을 직접 단축하지 않습니다. 캐싱으로 DB 부하를 줄일 수 있지만, RDS MySQL Multi-AZ 장애 조치 자체는 여전히 40초 정도 소요됩니다. AWS 공식 문서에서 RDS for MySQL 자동 장애 조치는 약 35초로, 캐시 추가만으로는 20초 미만을 달성할 수 없습니다.</p>
<p><span class="mark-no">❌ F</span> — RDS for MySQL Read Replica는 장애 조치 타겟이 아닙니다. Read Replica를 Primary로 승격하려면 수동 작업이 필요하고 수 분이 소요됩니다. Aurora Read Replica(E)와 달리 RDS Read Replica는 자동 장애 조치를 지원하지 않습니다.</p>`,
    disc: [{ ans:'C, D, E', txt:'RDS MySQL Multi-AZ 장애 조치는 일반적으로 35~45초 소요됩니다. Aurora로 마이그레이션(D) + Aurora Replica 생성(E)으로 Aurora 자동 장애 조치 타임을 대폭 단축하고, RDS Proxy(C)가 연결을 유지하여 추가로 20초 미만을 달성합니다. RDS Proxy는 Aurora 장애 조치 시간을 79% 단축 가능합니다. RDS Read Replica(F)는 자동 장애 조치 타겟이 아니므로 부적합합니다.' }]
  },
  {
    n: 126,
    en: `An AWS partner company is building a service in AWS Organizations using its organization named org1. This service requires the partner company to have access to AWS resources in a customer account, which is in a separate organization named org2. The company must establish least privilege security access using an API or command line tool to the customer account.<br/><br/>What is the MOST secure way to allow org1 to access resources in org2?`,
    ko: `AWS 파트너 회사는 org1이라는 조직을 사용하여 AWS Organizations에 서비스를 구축하고 있습니다. 이 서비스를 이용하려면 파트너 회사가 org2라는 별도의 조직에 있는 고객 계정의 AWS 리소스에 액세스할 수 있어야 합니다. 회사는 API 또는 명령줄 도구를 사용하여 고객 계정에 대한 최소 권한 보안 액세스를 설정해야 합니다. <br/><br/>org1이 org2의 리소스에 액세스하도록 허용하는 가장 안전한 방법은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`The customer should provide the partner company with their AWS account access keys to log in and perform the required tasks.`, ko:`고객은 로그인하고 필요한 작업을 수행하기 위해 파트너사에 AWS 계정 액세스 키를 제공해야 합니다.` },
      { k:'B', en:`The customer should create an IAM user and assign the required permissions to the IAM user. The customer should then provide the credentials to the partner company to log in and perform the required tasks.`, ko:`고객은 IAM 사용자를 생성하고 IAM 사용자에게 필요한 권한을 할당해야 합니다. 그러면 고객은 로그인하고 필요한 작업을 수행할 수 있도록 파트너 회사에 자격 ​​증명을 제공해야 합니다.` },
      { k:'C', en:`The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN) when requesting access to perform the required tasks.`, ko:`고객은 IAM 역할을 생성하고 IAM 역할에 필요한 권한을 할당해야 합니다. 그런 다음 파트너 회사는 필요한 작업을 수행하기 위해 액세스를 요청할 때 IAM 역할의 Amazon 리소스 이름(ARN)을 사용해야 합니다.` },
      { k:'D', en:`The customer should create an IAM role and assign the required permissions to the IAM role. The partner company should then use the IAM role's Amazon Resource Name (ARN), including the external ID in the IAM role's trust policy, when requesting access to perform the required tasks.`, ko:`고객은 IAM 역할을 생성하고 IAM 역할에 필요한 권한을 할당해야 합니다. 그런 다음 파트너 회사는 필요한 작업을 수행하기 위해 액세스를 요청할 때 IAM 역할의 신뢰 정책에 있는 외부 ID를 포함하여 IAM 역할의 Amazon 리소스 이름(ARN)을 사용해야 합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — IAM 역할 + External ID를 신뢰 정책에 포함</span></p>
<p>타사(파트너) 접근에는 IAM 역할 위임(AssumeRole)이 표준입니다. 여기서 핵심은 <strong>External ID</strong>입니다. External ID는 "혼동된 대리자(Confused Deputy)" 공격을 방지합니다. 이 공격은 악의적인 제3자가 파트너 회사의 AWS 계정 ID를 알고 있을 때 파트너사인 척 역할을 수임하는 공격입니다. External ID를 신뢰 정책의 조건(Condition)으로 추가하면 파트너 회사와 고객이 사전에 공유한 비밀 값을 제공해야만 역할을 수임할 수 있으므로 무단 접근이 차단됩니다.</p>
<p>STS AssumeRole 호출 시: <code>--role-arn arn:aws:iam::ACCOUNT_ID:role/ROLE --external-id EXTERNAL_SECRET</code></p>
<p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html" target="_blank">AWS 공식 문서 — External ID를 사용한 혼동된 대리자 방지</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 루트 계정 액세스 키를 타사에 제공하는 것은 심각한 보안 위반입니다. 루트 사용자 액세스 키는 계정의 모든 리소스에 무제한 접근을 허용하므로 최소 권한 원칙에 위배되며 AWS 보안 모범 사례에도 어긋납니다.</p>
<p><span class="mark-no">❌ B</span> — IAM 사용자 자격 증명(액세스 키/비밀 키)을 공유하면 장기 자격 증명이 외부에 노출됩니다. 자격 증명이 유출될 경우 즉시 감지하기 어렵고, 사용자가 필요 없어진 후에도 자격 증명이 계속 유효한 상태로 남을 위험이 있습니다. 역할 위임(AssumeRole)은 임시 자격 증명을 사용합니다.</p>
<p><span class="mark-no">❌ C</span> — IAM 역할 ARN만으로 AssumeRole을 허용하면 혼동된 대리자(Confused Deputy) 공격에 취약합니다. 파트너 회사의 계정 ID를 아는 제3자가 파트너인 척 역할을 수임할 수 있습니다. External ID(D)가 없으면 추가 검증 수단이 없습니다.</p>`,
    disc: [{ ans:'D', txt:'타사 접근에서 External ID는 "Confused Deputy(혼동된 대리자)" 공격 방지를 위한 표준 보안 메커니즘입니다. 파트너(org1)와 고객(org2)이 사전에 공유한 External ID를 역할 신뢰 정책의 Condition에 추가하면, 파트너 계정 ID를 아는 제3자가 역할을 무단 수임하는 것을 방지합니다. 역할 위임은 임시 자격 증명을 사용하므로 IAM 사용자 키 공유보다 안전합니다.' }]
  },
  {
    n: 127,
    en: `A delivery company needs to migrate its third-party route planning application to AWS. The third party supplies a supported Docker image from a public registry. The image can run in as many containers as required to generate the route map.<br/><br/>The company has divided the delivery area into sections with supply hubs so that delivery drivers travel the shortest distance possible from the hubs to the customers. To reduce the time necessary to generate route maps, each section uses its own set of Docker containers with a custom configuration that processes orders only in the section's area.<br/><br/>The company needs the ability to allocate resources cost-effectively based on the number of running containers.<br/><br/>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `배송 회사는 타사 경로 계획 애플리케이션을 AWS로 마이그레이션해야 합니다. 타사는 공개 레지스트리에서 지원되는 Docker 이미지를 제공합니다. 이미지는 경로 맵을 생성하는 데 필요한 만큼 많은 컨테이너에서 실행될 수 있습니다. <br/><br/>회사는 배송 지역을 공급 허브로 구분해 배송 기사가 허브에서 고객까지 최단 거리를 이동할 수 있도록 했다. 경로 맵을 생성하는 데 필요한 시간을 줄이기 위해 각 섹션에서는 섹션 영역에서만 주문을 처리하는 사용자 지정 구성이 포함된 자체 Docker 컨테이너 세트를 사용합니다. <br/><br/>회사는 실행 중인 컨테이너 수에 따라 비용 효율적으로 리소스를 할당할 수 있는 능력이 필요합니다. <br/><br/>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on Amazon EC2. Use the Amazon EKS CLI to launch the planning application in pods by using the --tags option to assign a custom tag to the pod.`, ko:`Amazon EC2에 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 생성합니다. Amazon EKS CLI를 사용하면 --tags 옵션을 사용하여 포드에 사용자 지정 태그를 할당함으로써 포드에서 계획 애플리케이션을 시작할 수 있습니다.` },
      { k:'B', en:`Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster on AWS Fargate. Use the Amazon EKS CLI to launch the planning application. Use the AWS CLI tag-resource API call to assign a custom tag to the pod.`, ko:`AWS Fargate에 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터를 생성합니다. Amazon EKS CLI를 사용하여 계획 애플리케이션을 시작합니다. AWS CLI 태그 리소스 API 호출을 사용하여 포드에 사용자 지정 태그를 할당합니다.` },
      { k:'C', en:`Create an Amazon Elastic Container Service (Amazon ECS) cluster on Amazon EC2. Use the AWS CLI with run-tasks set to true to launch the planning application by using the --tags option to assign a custom tag to the task.`, ko:`Amazon EC2에 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다. run-tasks가 true로 설정된 AWS CLI를 사용하면 --tags 옵션을 사용하여 작업에 사용자 지정 태그를 할당함으로써 계획 애플리케이션을 시작할 수 있습니다.` },
      { k:'D', en:`Create an Amazon Elastic Container Service (Amazon ECS) cluster on AWS Fargate. Use the AWS CLI run-task command and set enableECSManagedTags to true to launch the planning application. Use the --tags option to assign a custom tag to the task.`, ko:`AWS Fargate에 Amazon Elastic Container Service(Amazon ECS) 클러스터를 생성합니다. AWS CLI run-task 명령을 사용하고 활성화ECSManagedTags를 true로 설정하여 계획 애플리케이션을 시작합니다. --tags 옵션을 사용하여 작업에 사용자 정의 태그를 할당합니다.` },
    ],
    answer: ['D'],
    vote: '81% D, 19% B',
    explain: `<p><span class="mark-ok">✅ D — ECS on Fargate + enableECSManagedTags=true + --tags 옵션</span></p>
<p>핵심 요구사항: (1) Docker 컨테이너 기반, (2) 실행 컨테이너 수 기반 비용 효율 할당, (3) 최소 운영 오버헤드.</p>
<p><strong>ECS Fargate</strong>는 EC2 인스턴스 관리 없이 컨테이너당 사용한 vCPU/메모리만 과금하므로 "실행 중인 컨테이너 수 기반 비용 효율 할당" 요건에 정확히 부합합니다. EKS(A, B)는 Kubernetes 클러스터 관리 복잡성이 높아 운영 오버헤드가 큽니다.</p>
<p><strong>enableECSManagedTags=true</strong>를 설정하면 ECS가 자동으로 aws:ecs:clusterName, aws:ecs:serviceName 등의 태그를 태스크에 부여합니다. 여기에 <code>--tags</code> 옵션으로 구역별 커스텀 태그를 추가하면 Cost Allocation Tags로 구역별 비용을 분리 집계할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html" target="_blank">AWS 공식 문서 — ECS 태그 사용</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EKS on EC2는 EC2 워커 노드와 Kubernetes 컨트롤 플레인 관리가 필요합니다. 운영 오버헤드가 가장 높으며, "컨테이너 수 기반 비용 효율 할당"이 아닌 EC2 인스턴스 단위 비용이 발생합니다. 또한 EKS CLI의 --tags 옵션은 Pod 태그에 직접 사용하는 방식이 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — EKS on Fargate는 Kubernetes의 복잡성(Namespace, RBAC, Ingress 등)이 남아 있어 ECS보다 운영 오버헤드가 높습니다. 단순 Docker 컨테이너 실행에 Kubernetes가 불필요합니다. 또한 AWS CLI tag-resource API로 EKS Pod에 태그를 직접 부여하는 것은 표준 방식이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — ECS on EC2는 EC2 인스턴스 관리(패치, 스케일링, 용량 계획)가 필요합니다. Fargate(D)와 달리 컨테이너가 없는 시간에도 EC2 비용이 발생합니다. "실행 중인 컨테이너 수 기반 비용 효율 할당" 요건에 맞지 않습니다. run-tasks는 유효한 파라미터가 아닙니다(run-task가 올바른 명령어).</p>`,
    disc: [{ ans:'D', txt:'ECS Fargate는 컨테이너당 vCPU/메모리만 과금하여 실행 중 컨테이너 수 기반 비용 할당에 최적입니다. enableECSManagedTags=true로 ECS 관리 태그 자동 부여 + --tags로 커스텀 태그 추가하면 구역별 비용 추적이 가능합니다. EKS(A, B)는 Kubernetes 운영 오버헤드, EC2 기반(A, C)은 인스턴스 단위 비용으로 부적합합니다.' }]
  },
  {
    n: 128,
    en: `A software company hosts an application on AWS with resources in multiple AWS accounts and Regions. The application runs on a group of Amazon EC2 instances in an application VPC located in the us-east-1 Region with an IPv4 CIDR block of 10.10.0.0/16. In a different AWS account, a shared services VPC is located in the us-east-2 Region with an IPv4 CIDR block of 10.10.10.0/24. When a cloud engineer uses AWS CloudFormation to attempt to peer the application VPC with the shared services VPC, an error message indicates a peering failure.<br/><br/>Which factors could cause this error? (Choose two.)`,
    ko: `소프트웨어 회사는 여러 AWS 계정 및 리전의 리소스를 사용하여 AWS에서 애플리케이션을 호스팅합니다. 애플리케이션은 IPv4 CIDR 블록이 10.10.0.0/16인 us-east-1 리전에 위치한 애플리케이션 VPC의 Amazon EC2 인스턴스 그룹에서 실행됩니다. 다른 AWS 계정에서 공유 서비스 VPC는 ​​IPv4 CIDR 블록이 10.10.10.0/24인 us-east-2 리전에 있습니다. 클라우드 엔지니어가 AWS CloudFormation을 사용하여 애플리케이션 VPC를 공유 서비스 VPC와 피어링하려고 시도하면 피어링 실패를 나타내는 오류 메시지가 나타납니다. <br/><br/>어떤 요인으로 인해 이 오류가 발생할 수 있나요? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`The IPv4 CIDR ranges of the two VPCs overlap`, ko:`두 VPC의 IPv4 CIDR 범위가 겹칩니다.` },
      { k:'B', en:`The VPCs are not in the same Region`, ko:`VPC가 동일한 리전에 있지 않습니다.` },
      { k:'C', en:`One or both accounts do not have access to an Internet gateway`, ko:`하나 또는 두 계정 모두 인터넷 게이트웨이에 액세스할 수 없습니다.` },
      { k:'D', en:`One of the VPCs was not shared through AWS Resource Access Manager`, ko:`VPC 중 하나가 AWS Resource Access Manager를 통해 공유되지 않았습니다.` },
      { k:'E', en:`The IAM role in the peer accepter account does not have the correct permissions`, ko:`피어 수락자 계정의 IAM 역할에 올바른 권한이 없습니다.` },
    ],
    answer: ['A','E'],
    vote: '86% AE, 14% BE',
    explain: `<p><span class="mark-ok">✅ A — IPv4 CIDR 범위 중첩</span></p>
<p>VPC 피어링은 두 VPC의 CIDR 블록이 겹치면 생성할 수 없습니다. 10.10.10.0/24는 10.10.0.0/16의 서브넷이므로 두 CIDR 블록이 완전히 중첩됩니다(10.10.10.0/24 ⊂ 10.10.0.0/16). 이는 VPC 피어링 실패의 가장 흔한 원인 중 하나입니다.</p>
<p><span class="mark-ok">✅ E — 피어 수락자 계정의 IAM 역할 권한 부족</span></p>
<p>AWS CloudFormation으로 교차 계정 VPC 피어링을 생성할 때, 수락자(accepter) 계정에 피어링 요청을 수락할 수 있는 IAM 역할이 있어야 하고 해당 역할에 <code>ec2:AcceptVpcPeeringConnection</code> 권한이 있어야 합니다. CloudFormation에서 PeerRoleArn을 올바르게 전달해야 하며, 역할에 올바른 권한이 없으면 피어링이 실패합니다.</p>
<p><a href="https://docs.aws.amazon.com/vpc/latest/peering/create-vpc-peering-connection.html" target="_blank">AWS 공식 문서 — VPC 피어링 연결 생성</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — VPC 피어링은 서로 다른 리전에 있는 VPC 간에도 지원됩니다(인터-리전 VPC 피어링). us-east-1과 us-east-2 간의 피어링은 기술적으로 가능합니다. 따라서 다른 리전에 있다는 것 자체는 피어링 실패 원인이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 인터넷 게이트웨이 유무는 VPC 피어링과 무관합니다. VPC 피어링은 프라이빗 IP 주소 기반으로 VPC 간 직접 통신하며, 인터넷 게이트웨이를 거치지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Resource Access Manager(RAM)는 서브넷, Transit Gateway 등의 리소스를 계정 간에 공유할 때 사용합니다. VPC 피어링은 RAM을 통한 공유가 필요하지 않습니다. VPC 피어링은 두 계정의 VPC 간 직접 피어링 연결을 설정하는 방식입니다.</p>`,
    disc: [{ ans:'A, E', txt:'CIDR 중첩(A): 10.10.10.0/24는 10.10.0.0/16의 서브넷이므로 중첩됩니다. VPC 피어링은 CIDR 중첩 시 생성 불가합니다. IAM 권한(E): CloudFormation 교차 계정 피어링 시 수락자 계정의 IAM 역할에 ec2:AcceptVpcPeeringConnection 권한이 필요합니다. 다른 리전(B)은 피어링 실패 원인이 아닙니다(인터-리전 VPC 피어링 지원).' }]
  },
  {
    n: 129,
    en: `An external audit of a company's serverless application reveals IAM policies that grant too many permissions. These policies are attached to the company's AWS Lambda execution roles. Hundreds of the company's Lambda functions have broad access permissions such as full access to Amazon S3 buckets and Amazon DynamoDB tables. The company wants each function to have only the minimum permissions that the function needs to complete its task.<br/><br/>A solutions architect must determine which permissions each Lambda function needs.<br/><br/>What should the solutions architect do to meet this requirement with the LEAST amount of effort?`,
    ko: `한 회사의 서버리스 애플리케이션에 대한 외부 감사 결과 너무 많은 권한을 부여하는 IAM 정책이 드러났습니다. 이러한 정책은 회사의 AWS Lambda 실행 역할에 연결됩니다. 수백 개의 회사 Lambda 함수에는 Amazon S3 버킷 및 Amazon DynamoDB 테이블에 대한 전체 액세스와 같은 광범위한 액세스 권한이 있습니다. 회사는 각 기능이 해당 작업을 완료하는 데 필요한 최소한의 권한만 갖기를 원합니다. <br/><br/>솔루션 아키텍트는 각 Lambda 함수에 필요한 권한을 결정해야 합니다. <br/><br/>최소한의 노력으로 이 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Set up Amazon CodeGuru to profile the Lambda functions and search for AWS API calls. Create an inventory of the required API calls and resources for each Lambda function. Create new IAM access policies for each Lambda function. Review the new policies to ensure that they meet the company's business requirements.`, ko:`Amazon CodeGuru를 설정하여 Lambda 함수를 프로파일링하고 AWS API 호출을 검색하십시오. 각 Lambda 함수에 필요한 API 호출 및 리소스의 인벤토리를 생성합니다. 각 Lambda 함수에 대해 새로운 IAM 액세스 정책을 생성합니다. 새 정책을 검토하여 회사의 비즈니스 요구 사항을 충족하는지 확인하세요.` },
      { k:'B', en:`Turn on AWS CloudTrail logging for the AWS account. Use AWS Identity and Access Management Access Analyzer to generate IAM access policies based on the activity recorded in the CloudTrail log. Review the generated policies to ensure that they meet the company's business requirements.`, ko:`AWS 계정에 대해 AWS CloudTrail 로깅을 활성화합니다. AWS Identity and Access Management 액세스 분석기를 사용하여 CloudTrail 로그에 기록된 활동을 기반으로 IAM 액세스 정책을 생성합니다. 생성된 정책을 검토하여 회사의 비즈니스 요구 사항을 충족하는지 확인하세요.` },
      { k:'C', en:`Turn on AWS CloudTrail logging for the AWS account. Create a script to parse the CloudTrail log, search for AWS API calls by Lambda execution role, and create a summary report. Review the report. Create IAM access policies that provide more restrictive permissions for each Lambda function.`, ko:`AWS 계정에 대해 AWS CloudTrail 로깅을 활성화합니다. CloudTrail 로그를 구문 분석하고, Lambda 실행 역할별로 AWS API 호출을 검색하고, 요약 보고서를 생성하는 스크립트를 생성합니다. 보고서를 검토하세요. 각 Lambda 함수에 대해 더 제한적인 권한을 제공하는 IAM 액세스 정책을 생성합니다.` },
      { k:'D', en:`Turn on AWS CloudTrail logging for the AWS account. Export the CloudTrail logs to Amazon S3. Use Amazon EMR to process the CloudTrail logs in Amazon S3 and produce a report of API calls and resources used by each execution role. Create a new IAM access policy for each role. Export the generated roles to an S3 bucket. Review the generated policies to ensure that they meet the company's business requirements.`, ko:`AWS 계정에 대해 AWS CloudTrail 로깅을 활성화합니다. CloudTrail 로그를 Amazon S3로 내보냅니다. Amazon EMR을 사용하여 Amazon S3에서 CloudTrail 로그를 처리하고 각 실행 역할에서 사용하는 API 호출 및 리소스에 대한 보고서를 생성합니다. 각 역할에 대해 새로운 IAM 액세스 정책을 생성합니다. 생성된 역할을 S3 버킷으로 내보냅니다. 생성된 정책을 검토하여 회사의 비즈니스 요구 사항을 충족하는지 확인하세요.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — CloudTrail + IAM Access Analyzer로 실제 사용 기반 IAM 정책 자동 생성</span></p>
<p>AWS IAM Access Analyzer의 "정책 생성(Generate policy)" 기능은 CloudTrail 로그에 기록된 실제 API 호출 이력을 분석하여 각 IAM 역할에 필요한 최소 권한 정책을 자동으로 생성합니다. 수백 개의 Lambda 함수에 대해 개별적으로 정책을 작성할 필요 없이, CloudTrail 활성화 후 IAM Access Analyzer가 실제 사용된 API와 리소스만 포함한 정책을 자동 생성하므로 작업량이 최소화됩니다.</p>
<p>작업 흐름: CloudTrail 활성화 → 충분한 기간 동안 Lambda 함수 실행 → Access Analyzer에서 역할별 정책 생성 → 검토 후 적용.</p>
<p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-policy-generation.html" target="_blank">AWS 공식 문서 — IAM Access Analyzer 정책 생성</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon CodeGuru는 코드 품질 분석과 애플리케이션 성능 프로파일링 도구입니다. Lambda 함수 코드의 버그나 성능 문제를 찾는 데 사용되며, 실행된 AWS API 호출을 추적하여 IAM 정책을 자동 생성하는 기능은 없습니다. IAM 정책 최소화는 Access Analyzer의 역할입니다.</p>
<p><span class="mark-no">❌ C</span> — CloudTrail 로그를 파싱하는 커스텀 스크립트를 작성하는 것은 많은 개발 작업이 필요합니다. 수백 개의 Lambda 함수에 대해 스크립트를 작성하고, 각 실행 역할별 API 호출을 정리하고, 이를 IAM 정책으로 변환하는 작업은 B(Access Analyzer 자동 생성)보다 훨씬 많은 노력이 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — CloudTrail 로그를 S3로 내보내고 Amazon EMR 클러스터를 구성하여 처리하는 것은 극도로 복잡하고 비용이 높은 방식입니다. EMR은 대규모 빅데이터 처리용 서비스로 IAM 정책 분석에 과도한 솔루션입니다. Access Analyzer(B)가 이 전체 과정을 자동으로 처리합니다.</p>`,
    disc: [{ ans:'B', txt:'IAM Access Analyzer의 정책 생성 기능은 CloudTrail 로그의 실제 API 호출을 기반으로 최소 권한 IAM 정책을 자동 생성합니다. 수백 개의 Lambda 함수에 대한 정책을 수동으로 작성하는 C, D보다 훨씬 적은 노력이 필요합니다. CodeGuru(A)는 IAM 정책 생성 기능이 없습니다.' }]
  },
  {
    n: 130,
    en: `A solutions architect must analyze a company's Amazon EC2 instances and Amazon Elastic Block Store (Amazon EBS) volumes to determine whether the company is using resources efficiently. The company is running several large, high-memory EC2 instances to host database clusters that are deployed in active/passive configurations. The utilization of these EC2 instances varies by the applications that use the databases, and the company has not identified a pattern.<br/><br/>The solutions architect must analyze the environment and take action based on the findings.<br/><br/>Which solution meets these requirements MOST cost-effectively?`,
    ko: `솔루션 아키텍트는 회사의 Amazon EC2 인스턴스와 Amazon Elastic Block Store(Amazon EBS) 볼륨을 분석하여 회사가 리소스를 효율적으로 사용하고 있는지 확인해야 합니다. 이 회사는 활성/수동 구성으로 배포되는 데이터베이스 클러스터를 호스팅하기 위해 여러 개의 대규모 고용량 EC2 인스턴스를 실행하고 있습니다. 이러한 EC2 인스턴스의 활용도는 데이터베이스를 사용하는 애플리케이션에 따라 다르며 회사에서는 패턴을 식별하지 못했습니다. <br/><br/>솔루션 설계자는 환경을 분석하고 결과에 따라 조치를 취해야 합니다. <br/><br/>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a dashboard by using AWS Systems Manager OpsCenter. Configure visualizations for Amazon CloudWatch metrics that are associated with the EC2 instances and their EBS volumes. Review the dashboard periodically, and identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.`, ko:`AWS Systems Manager OpsCenter를 사용하여 대시보드를 생성하십시오. EC2 인스턴스 및 해당 EBS 볼륨과 연결된 Amazon CloudWatch 지표에 대한 시각화를 구성합니다. 대시보드를 주기적으로 검토하고 사용 패턴을 파악하세요. 지표의 최고치를 기준으로 EC2 인스턴스의 크기를 조정합니다.` },
      { k:'B', en:`Turn on Amazon CloudWatch detailed monitoring for the EC2 instances and their EBS volumes. Create and review a dashboard that is based on the metrics. Identify usage patterns. Rightsize the EC2 instances based on the peaks in the metrics.`, ko:`EC2 인스턴스 및 해당 EBS 볼륨에 대한 Amazon CloudWatch 세부 모니터링을 활성화합니다. 측정항목을 기반으로 대시보드를 만들고 검토하세요. 사용 패턴을 식별합니다. 지표의 최고치를 기준으로 EC2 인스턴스의 크기를 조정합니다.` },
      { k:'C', en:`Install the Amazon CloudWatch agent on each of the EC2 instances. Turn on AWS Compute Optimizer, and let it run for at least 12 hours. Review the recommendations from Compute Optimizer, and rightsize the EC2 instances as directed.`, ko:`각 EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다. AWS Compute Optimizer를 켜고 최소 12시간 동안 실행해 보세요. Compute Optimizer의 권장 사항을 검토하고 지시에 따라 EC2 인스턴스 크기를 조정합니다.` },
      { k:'D', en:`Sign up for the AWS Enterprise Support plan. Turn on AWS Trusted Advisor. Wait 12 hours. Review the recommendations from Trusted Advisor, and rightsize the EC2 instances as directed.`, ko:`AWS Enterprise Support 플랜에 가입하세요. AWS Trusted Advisor를 활성화합니다. 12시간을 기다리세요. Trusted Advisor의 권장 사항을 검토하고 지시에 따라 EC2 인스턴스 크기를 조정합니다.` },
    ],
    answer: ['C'],
    vote: '96% C',
    explain: `<p><span class="mark-ok">✅ C — CloudWatch 에이전트 설치 + AWS Compute Optimizer 활성화</span></p>
<p><strong>CloudWatch 에이전트</strong>가 필요한 이유: 기본 EC2 CloudWatch 지표에는 CPU, 네트워크, 디스크 I/O가 포함되지만 <strong>메모리 사용률은 포함되지 않습니다.</strong> 문제에서 "고메모리 EC2 인스턴스"를 강조하므로 메모리 지표 수집을 위해 CloudWatch 에이전트 설치가 필수입니다.</p>
<p><strong>AWS Compute Optimizer</strong>는 EC2 인스턴스, Auto Scaling 그룹, EBS 볼륨, Lambda 함수의 실제 사용률 지표를 머신 러닝으로 분석하여 최적 인스턴스 타입과 크기를 자동 추천합니다. "패턴을 식별하지 못했다"는 문제 상황에서 ML 기반 자동 분석이 수동 대시보드 검토(A, B)보다 훨씬 효과적입니다. 추가 비용 없이 사용 가능하며(Compute Optimizer 자체는 무료), Enterprise Support 가입(D)처럼 높은 추가 비용이 없습니다.</p>
<p><a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html" target="_blank">AWS 공식 문서 — AWS Compute Optimizer</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Systems Manager OpsCenter는 IT 운영 이벤트를 관리하는 도구로, 리소스 최적화 대시보드 생성에 적합하지 않습니다. OpsCenter는 운영 인시던트 추적 도구이지 리소스 사이징 분석 도구가 아닙니다. 또한 메모리 지표 없이 피크 기반으로만 사이징하면 오버프로비저닝이 됩니다.</p>
<p><span class="mark-no">❌ B</span> — CloudWatch 상세 모니터링(1분 간격 지표)은 추가 비용이 발생합니다. 또한 표준 CloudWatch 지표에는 메모리 사용률이 포함되지 않으므로 고메모리 인스턴스 분석에 불완전합니다. 대시보드를 수동으로 검토하여 패턴을 찾는 것은 ML 기반 Compute Optimizer보다 훨씬 비효율적입니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Enterprise Support 플랜은 월 최소 수천 달러의 추가 비용이 발생합니다. Trusted Advisor의 EC2 최적화 권장 사항은 메모리 지표를 분석하지 않으며 Compute Optimizer보다 덜 정교합니다. "가장 비용 효율적" 요건에 Enterprise Support 가입은 부적합합니다.</p>`,
    disc: [{ ans:'C', txt:'고메모리 EC2 인스턴스 분석에는 메모리 지표가 필수이며, 기본 CloudWatch 지표에는 메모리가 없으므로 CloudWatch 에이전트 설치(C)가 필요합니다. Compute Optimizer는 ML로 사용 패턴을 자동 분석하여 최적 인스턴스 타입을 추천합니다. 수동 대시보드 검토(A, B)보다 효과적이며, Enterprise Support(D)보다 비용이 낮습니다.' }]
  },
];
