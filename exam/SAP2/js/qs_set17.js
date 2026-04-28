window.QS_SET17 = [
  {
    n: 161,
    en: `A telecommunications company is running an application on AWS. The company has set up an AWS Direct Connect connection between the company's on-premises data center and AWS. The company deployed the application on Amazon EC2 instances in multiple Availability Zones behind an internal Application Load Balancer (ALB). The company's clients connect from the on-premises network by using HTTPS. The TLS terminates in the ALB. The company has multiple target groups and uses path-based routing to forward requests based on the URL path.<br><br>The company is planning to deploy an on-premises firewall appliance with an allow list that is based on IP address. A solutions architect must develop a solution to allow traffic flow to AWS from the on-premises network so that the clients can continue to access the application.<br><br>Which solution will meet these requirements?`,
    ko: `한 통신회사가 AWS에서 애플리케이션을 실행하고 있습니다. 회사는 온프레미스 데이터 센터와 AWS 간에 AWS Direct Connect 연결을 설정했습니다. 이 회사는 내부 ALB(Application Load Balancer) 뒤의 여러 가용 영역에 있는 Amazon EC2 인스턴스에 애플리케이션을 배포했습니다. 회사의 클라이언트는 HTTPS를 사용하여 온프레미스 네트워크에서 연결합니다. TLS는 ALB에서 종료됩니다. 회사에는 여러 대상 그룹이 있으며 경로 기반 라우팅을 사용하여 URL 경로를 기반으로 요청을 전달합니다.<br><br>회사는 IP 주소를 기반으로 하는 허용 목록을 사용하여 온프레미스 방화벽 어플라이언스를 배포할 계획입니다. 솔루션 아키텍트는 클라이언트가 애플리케이션에 계속 액세스할 수 있도록 온프레미스 네트워크에서 AWS로의 트래픽 흐름을 허용하는 솔루션을 개발해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure the existing ALB to use static IP addresses. Assign IP addresses in multiple Availability Zones to the ALB. Add the ALB IP addresses to the firewall appliance.`, ko:`고정 IP 주소를 사용하도록 기존 ALB를 구성합니다. 여러 가용 영역의 IP 주소를 ALB에 할당합니다. ALB IP 주소를 방화벽 어플라이언스에 추가합니다.` },
      { k:'B', en:`Create a Network Load Balancer (NLB). Associate the NLB with one static IP address in multiple Availability Zones. Create an ALB-type target group for the NLB and add the existing ALB. Add the NLB IP addresses to the firewall appliance. Update the clients to connect to the NLB.`, ko:`네트워크 로드 밸런서(NLB)를 생성합니다. NLB를 여러 가용 영역에 있는 하나의 고정 IP 주소와 연결합니다. NLB에 대한 ALB 유형 대상 그룹을 생성하고 기존 ALB를 추가합니다. 방화벽 어플라이언스에 NLB IP 주소를 추가합니다. NLB에 연결하도록 클라이언트를 업데이트합니다.` },
      { k:'C', en:`Create a Network Load Balancer (NLB). Associate the NLB with one static IP address in multiple Availability Zones. Add the existing target groups to the NLB. Update the clients to connect to the NLB. Delete the ALB. Add the NLB IP addresses to the firewall appliance.`, ko:`네트워크 로드 밸런서(NLB)를 생성합니다. NLB를 여러 가용 영역에 있는 하나의 고정 IP 주소와 연결합니다. NLB에 기존 대상 그룹을 추가합니다. NLB에 연결하도록 클라이언트를 업데이트합니다. ALB를 삭제합니다. 방화벽 어플라이언스에 NLB IP 주소를 추가합니다.` },
      { k:'D', en:`Create a Gateway Load Balancer (GWLB). Assign static IP addresses to the GWLB in multiple Availability Zones. Create an ALB-type target group for the GWLB and add the existing ALB. Add the GWLB IP addresses to the firewall appliance. Update the clients to connect to the GWLB.`, ko:`게이트웨이 로드 밸런서(GWLB)를 생성합니다. 여러 가용 영역의 GWLB에 고정 IP 주소를 할당합니다. GWLB에 대한 ALB 유형 대상 그룹을 생성하고 기존 ALB를 추가합니다. 방화벽 어플라이언스에 GWLB IP 주소를 추가합니다. GWLB에 연결하도록 클라이언트를 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '90% B',
    explain: `<p><span class="mark-ok">✅ B — NLB(고정 IP) → ALB(경로 기반 라우팅) 계층 구조</span></p>
<p>ALB는 설계상 고정 IP를 지원하지 않습니다. 방화벽 허용 목록에 등록할 고정 IP를 확보하려면 NLB를 ALB 앞단에 배치해야 합니다. NLB는 가용 영역당 탄력적 IP를 할당받아 고정 IP를 제공하고, NLB의 ALB 유형 대상 그룹을 통해 기존 ALB(경로 기반 라우팅 유지)로 트래픽을 전달합니다. 이 아키텍처는 WAF 및 L7 기능(경로 기반 라우팅)을 그대로 유지하면서 고정 IP를 제공합니다.</p>
<p><a href="https://aws.amazon.com/blogs/networking-and-content-delivery/application-load-balancer-type-target-group-for-network-load-balancer/" target="_blank">AWS 공식 문서: NLB의 ALB 유형 대상 그룹</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ALB는 고정 IP를 지원하지 않습니다. ALB의 IP는 AWS가 제어하며 언제든지 변경될 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — ALB를 삭제하면 경로 기반 라우팅(URL 경로 기반 포워딩)을 사용할 수 없습니다. NLB는 L4 장치로 URL 경로를 인식하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — Gateway Load Balancer(GWLB)는 가상 네트워크 어플라이언스(예: 방화벽, IDS/IPS) 배포에 사용되며 고정 IP 제공 + ALB 대체 용도로 설계되지 않았습니다. GWLB는 인스턴스/IP 대상만 지원합니다.</p>`,
    disc: [
      { ans:'B', txt:'ALB는 고정 IP를 가질 수 없으므로 NLB를 앞단에 놓아야 함. C는 ALB 삭제 시 경로 기반 라우팅이 불가하여 탈락. D는 GWLB가 ALB 유형 대상 그룹을 지원하지 않음' },
    ]
  },
  {
    n: 162,
    en: `A company runs an application on a fleet of Amazon EC2 instances that are in private subnets behind an internet-facing Application Load Balancer (ALB). The ALB is the origin for an Amazon CloudFront distribution. An AWS WAF web ACL that contains various AWS managed rules is associated with the CloudFront distribution.<br><br>The company needs a solution that will prevent internet traffic from directly accessing the ALB.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사는 인터넷 연결 ALB(Application Load Balancer) 뒤의 프라이빗 서브넷에 있는 Amazon EC2 인스턴스 집합에서 애플리케이션을 실행합니다. ALB는 Amazon CloudFront 배포의 오리진입니다. 다양한 AWS 관리형 규칙을 포함하는 AWS WAF 웹 ACL은 CloudFront 배포와 연결됩니다.<br><br>회사에는 인터넷 트래픽이 ALB에 직접 액세스하는 것을 방지하는 솔루션이 필요합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a new web ACL that contains the same rules that the existing web ACL contains. Associate the new web ACL with the ALB.`, ko:`기존 웹 ACL에 포함된 것과 동일한 규칙을 포함하는 새 웹 ACL을 생성합니다. 새 웹 ACL을 ALB와 연결합니다.` },
      { k:'B', en:`Associate the existing web ACL with the ALB.`, ko:`기존 웹 ACL을 ALB와 연결합니다.` },
      { k:'C', en:`Add a security group rule to the ALB to allow traffic from the AWS managed prefix list for CloudFront only.`, ko:`CloudFront에 대해서만 AWS 관리형 접두사 목록의 트래픽을 허용하도록 ALB에 보안 그룹 규칙을 추가합니다.` },
      { k:'D', en:`Add a security group rule to the ALB to allow only the various CloudFront IP address ranges.`, ko:`다양한 CloudFront IP 주소 범위만 허용하도록 ALB에 보안 그룹 규칙을 추가합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — CloudFront 관리형 접두사 목록을 사용한 ALB 보안 그룹 규칙</span></p>
<p>AWS는 CloudFront 오리진 지향 서버의 IP 범위를 자동으로 관리하는 <strong>AWS 관리형 접두사 목록(com.amazonaws.global.cloudfront.origin-facing)</strong>을 제공합니다. ALB 보안 그룹에 이 접두사 목록의 트래픽만 허용하는 인바운드 규칙을 추가하면 CloudFront를 통하지 않는 직접 인터넷 트래픽을 자동으로 차단할 수 있습니다. IP 목록은 AWS가 자동 관리하므로 운영 오버헤드가 최소화됩니다.</p>
<p><a href="https://aws.amazon.com/blogs/networking-and-content-delivery/limit-access-to-your-origins-using-the-aws-managed-prefix-list-for-amazon-cloudfront/" target="_blank">AWS 공식 블로그: CloudFront 관리형 접두사 목록으로 오리진 접근 제한</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — WAF 웹 ACL은 HTTP/HTTPS 요청을 검사하는 계층이며, 직접 IP 기반 차단보다 복잡하고 비용이 더 발생합니다. 중복 웹 ACL 생성은 불필요한 오버헤드입니다.</p>
<p><span class="mark-no">❌ B</span> — 기존 WAF 웹 ACL은 CloudFront에 연결되어 있어 ALB와 연결하면 규칙 충돌 및 비용 증가가 발생합니다. 또한 IP 기반 직접 접근 차단 효과가 없습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudFront IP 범위를 수동으로 관리하면 IP가 변경될 때마다 보안 그룹을 수동 업데이트해야 하는 높은 운영 오버헤드가 발생합니다. 관리형 접두사 목록이 자동으로 처리해줍니다.</p>`,
    disc: [
      { ans:'C', txt:'AWS 관리형 CloudFront 접두사 목록을 ALB 보안 그룹에 적용하면 IP 목록 자동 관리로 운영 오버헤드 최소화. D는 IP 수동 관리 필요' },
    ]
  },
  {
    n: 163,
    en: `A company is running an application that uses an Amazon ElastiCache for Redis cluster as a caching layer. A recent security audit revealed that the company has configured encryption at rest for ElastiCache. However, the company did not configure ElastiCache to use encryption in transit. Additionally, users can access the cache without authentication.<br><br>A solutions architect must make changes to require user authentication and to ensure that the company is using end-to-end encryption.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사에서 Redis용 Amazon ElastiCache 클러스터를 캐싱 계층으로 사용하는 애플리케이션을 실행하고 있습니다. 최근 보안 감사에서 회사가 ElastiCache에 대해 저장 암호화를 구성한 것으로 나타났습니다. 그러나 회사에서는 전송 중 암호화를 사용하도록 ElastiCache를 구성하지 않았습니다. 또한 사용자는 인증 없이 캐시에 액세스할 수 있습니다.<br><br>솔루션 설계자는 사용자 인증을 요구하고 회사가 종단 간 암호화를 사용하도록 변경해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an AUTH token. Store the token in AWS System Manager Parameter Store, as an encrypted parameter. Create a new cluster with AUTH, and configure encryption in transit. Update the application to retrieve the AUTH token from Parameter Store when necessary and to use the AUTH token for authentication.`, ko:`AUTH 토큰을 생성합니다. AWS Systems Manager Parameter Store에 토큰을 암호화된 파라미터로 저장합니다. AUTH를 사용하여 새 클러스터를 생성하고 전송 중 암호화를 구성합니다. 필요한 경우 Parameter Store에서 AUTH 토큰을 검색하고 인증에 AUTH 토큰을 사용하도록 애플리케이션을 업데이트합니다.` },
      { k:'B', en:`Create an AUTH token. Store the token in AWS Secrets Manager. Configure the existing cluster to use the AUTH token, and configure encryption in transit. Update the application to retrieve the AUTH token from Secrets Manager when necessary and to use the AUTH token for authentication.`, ko:`AUTH 토큰을 생성합니다. AWS Secrets Manager에 토큰을 저장합니다. AUTH 토큰을 사용하도록 기존 클러스터를 구성하고 전송 중 암호화를 구성합니다. 필요한 경우 Secrets Manager에서 AUTH 토큰을 검색하고 인증에 AUTH 토큰을 사용하도록 애플리케이션을 업데이트합니다.` },
      { k:'C', en:`Create an SSL certificate. Store the certificate in AWS Secrets Manager. Create a new cluster, and configure encryption in transit. Update the application to retrieve the SSL certificate from Secrets Manager when necessary and to use the certificate for authentication.`, ko:`SSL 인증서를 생성합니다. AWS Secrets Manager에 인증서를 저장합니다. 새 클러스터를 생성하고 전송 중 암호화를 구성합니다. 필요한 경우 Secrets Manager에서 SSL 인증서를 검색하고 인증에 인증서를 사용하도록 애플리케이션을 업데이트합니다.` },
      { k:'D', en:`Create an SSL certificate. Store the certificate in AWS Systems Manager Parameter Store, as an encrypted advanced parameter. Update the existing cluster to configure encryption in transit. Update the application to retrieve the SSL certificate from Parameter Store when necessary and to use the certificate for authentication.`, ko:`SSL 인증서를 생성합니다. 암호화된 고급 파라미터로 AWS Systems Manager Parameter Store에 인증서를 저장합니다. 전송 중 암호화를 구성하려면 기존 클러스터를 업데이트합니다. 필요한 경우 Parameter Store에서 SSL 인증서를 검색하고 인증에 인증서를 사용하도록 애플리케이션을 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '93% B',
    explain: `<p><span class="mark-ok">✅ B — 기존 클러스터에 AUTH 토큰 추가 + 전송 중 암호화 활성화</span></p>
<p>ElastiCache for Redis는 <code>ModifyReplicationGroup</code> API의 <code>--auth-token</code> 및 <code>--auth-token-update-strategy ROTATE</code> 파라미터를 통해 기존 클러스터에 AUTH 토큰을 추가할 수 있습니다. 전송 중 암호화(TLS)도 기존 클러스터에서 활성화할 수 있습니다. AUTH 토큰을 Secrets Manager에 저장하면 자동 교체(rotation) 기능을 활용할 수 있어 보안 모범 사례를 따릅니다. 새 클러스터를 생성할 필요가 없어 마이그레이션 비용이 없습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/auth.html" target="_blank">AWS 공식 문서: ElastiCache AUTH 토큰</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 새 클러스터 생성이 필요하여 데이터 마이그레이션 작업이 발생합니다. Parameter Store도 암호 보안을 제공하지만 Secrets Manager의 자동 교체 기능이 없습니다. 또한 기존 클러스터에서도 AUTH를 활성화할 수 있으므로 새 클러스터 생성은 불필요합니다.</p>
<p><span class="mark-no">❌ C</span> — ElastiCache 인증은 SSL 인증서 기반이 아닌 AUTH 토큰(비밀번호) 기반입니다. SSL 인증서로 ElastiCache 사용자 인증을 구현할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — C와 동일하게 SSL 인증서로 ElastiCache 인증을 구현하는 것은 불가능합니다. ElastiCache는 AUTH 명령을 사용하는 Redis AUTH 프로토콜을 사용합니다.</p>`,
    disc: [
      { ans:'B', txt:'기존 클러스터에서 ModifyReplicationGroup으로 AUTH 토큰 추가 및 TLS 활성화 가능. Secrets Manager는 자동 교체 지원으로 보안 모범 사례에 적합' },
    ]
  },
  {
    n: 164,
    en: `A company is running a compute workload by using Amazon EC2 Spot Instances that are in an Auto Scaling group. The launch template uses two placement groups and a single instance type.<br><br>Recently, a monitoring system reported Auto Scaling instance launch failures that correlated with longer wait times for system users. The company needs to improve the overall reliability of the workload.<br><br>Which solution will meet this requirement?`,
    ko: `회사는 Auto Scaling 그룹에 속한 Amazon EC2 스팟 인스턴스를 사용하여 컴퓨팅 워크로드를 실행하고 있습니다. 시작 템플릿은 두 개의 배치 그룹과 단일 인스턴스 유형을 사용합니다.<br><br>최근 모니터링 시스템에서는 시스템 사용자의 대기 시간이 길어지는 것과 관련된 Auto Scaling 인스턴스 시작 실패를 보고했습니다. 회사는 워크로드의 전반적인 안정성을 개선해야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Replace the launch template with a launch configuration to use an Auto Scaling group that uses attribute-based instance type selection.`, ko:`속성 기반 인스턴스 유형 선택을 사용하는 Auto Scaling 그룹을 사용하려면 시작 템플릿을 시작 구성으로 바꾸십시오.` },
      { k:'B', en:`Create a new launch template version that uses attribute-based instance type selection. Configure the Auto Scaling group to use the new launch template version.`, ko:`속성 기반 인스턴스 유형 선택을 사용하는 새로운 시작 템플릿 버전을 생성합니다. 새로운 시작 템플릿 버전을 사용하도록 Auto Scaling 그룹을 구성합니다.` },
      { k:'C', en:`Update the launch template Auto Scaling group to increase the number of placement groups.`, ko:`시작 템플릿 Auto Scaling 그룹을 업데이트하여 배치 그룹 수를 늘립니다.` },
      { k:'D', en:`Update the launch template to use a larger instance type.`, ko:`더 큰 인스턴스 유형을 사용하도록 시작 템플릿을 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 속성 기반 인스턴스 유형 선택(ABIS)으로 스팟 인스턴스 안정성 향상</span></p>
<p>스팟 인스턴스 시작 실패의 주요 원인은 특정 인스턴스 유형/AZ에서 스팟 용량이 부족한 경우입니다. <strong>속성 기반 인스턴스 유형 선택(Attribute-Based Instance Type Selection, ABIS)</strong>을 사용하면 단일 인스턴스 유형 대신 vCPU, 메모리 등의 속성을 지정하여 조건을 충족하는 여러 인스턴스 유형 중 가용 스팟 용량이 있는 유형을 자동 선택합니다. 이를 통해 스팟 인스턴스 다양화가 이루어져 시작 실패율이 크게 감소합니다. 새 시작 템플릿 버전을 생성하는 것이 올바른 방법이며 기존 시작 구성으로 전환하면 안 됩니다(시작 구성은 deprecated됨).</p>
<p><a href="https://aws.amazon.com/blogs/aws/new-attribute-based-instance-type-selection-for-ec2-auto-scaling-and-ec2-fleet/" target="_blank">AWS 공식 블로그: 속성 기반 인스턴스 유형 선택</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 시작 구성(Launch Configuration)은 더 이상 권장되지 않으며(deprecated) 시작 템플릿보다 기능이 제한적입니다. ABIS는 시작 템플릿에서만 지원됩니다.</p>
<p><span class="mark-no">❌ C</span> — 배치 그룹 수를 늘리면 인스턴스 분배가 개선될 수 있지만 스팟 인스턴스 유형이 단일로 제한되어 있는 근본 원인(용량 부족)을 해결하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — 더 큰 인스턴스 유형으로 변경해도 여전히 단일 유형에 의존하므로 용량 부족 문제는 동일하게 발생합니다. 또한 시작 템플릿은 불변이라 업데이트하려면 새 버전을 만들어야 합니다.</p>`,
    disc: [
      { ans:'B', txt:'스팟 인스턴스 모범 사례는 인스턴스 유형 다양화. ABIS를 통해 여러 유형을 자동 선택하여 용량 부족으로 인한 시작 실패 감소. 시작 구성은 deprecated라 A 탈락' },
    ]
  },
  {
    n: 165,
    en: `A company is migrating a document processing workload to AWS. The company has updated many applications to natively use the Amazon S3 API to store, retrieve, and modify documents that a processing server generates at a rate of approximately 5 documents every second. After the document processing is finished, customers can download the documents directly from Amazon S3.<br><br>During the migration, the company discovered that it could not immediately update the processing server that generates many documents to support the S3 API. The server runs on Linux and requires fast local access to the files that the server generates and modifies. When the server finishes processing, the files must be available to the public for download within 30 minutes.<br><br>Which solution will meet these requirements with the LEAST amount of effort?`,
    ko: `한 회사가 문서 처리 워크로드를 AWS로 마이그레이션하고 있습니다. 이 회사는 기본적으로 Amazon S3 API를 사용하여 처리 서버가 초당 약 5개의 문서를 생성하는 문서를 저장, 검색 및 수정하도록 많은 애플리케이션을 업데이트했습니다. 문서 처리가 완료된 후 고객은 Amazon S3에서 직접 문서를 다운로드할 수 있습니다.<br><br>마이그레이션 중에 회사는 S3 API를 지원하기 위해 많은 문서를 생성하는 처리 서버를 즉시 업데이트할 수 없다는 사실을 발견했습니다. 서버는 Linux에서 실행되며 서버가 생성하고 수정하는 파일에 대한 빠른 로컬 액세스가 필요합니다. 서버가 처리를 마치면 30분 이내에 파일을 대중이 다운로드할 수 있어야 합니다.<br><br>최소한의 노력으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Migrate the application to an AWS Lambda function. Use the AWS SDK for Java to generate, modify, and access the files that the company stores directly in Amazon S3.`, ko:`애플리케이션을 AWS Lambda 함수로 마이그레이션합니다. Java용 AWS SDK를 사용하면 회사가 Amazon S3에 직접 저장하는 파일을 생성, 수정 및 액세스할 수 있습니다.` },
      { k:'B', en:`Set up an Amazon S3 File Gateway and configure a file share that is linked to the document store. Mount the file share on an Amazon EC2 instance by using NFS. When changes occur in Amazon S3, initiate a RefreshCache API call to update the S3 File Gateway.`, ko:`Amazon S3 파일 게이트웨이를 설정하고 문서 저장소에 연결된 파일 공유를 구성합니다. NFS를 사용하여 Amazon EC2 인스턴스에 파일 공유를 탑재합니다. Amazon S3에서 변경 사항이 발생하면 RefreshCache API 호출을 시작하여 S3 파일 게이트웨이를 업데이트합니다.` },
      { k:'C', en:`Configure Amazon FSx for Lustre with an import and export policy. Link the new file system to an S3 bucket. Install the Lustre client and mount the document store to an Amazon EC2 instance by using NFS.`, ko:`가져오기 및 내보내기 정책을 사용하여 Lustre용 Amazon FSx를 구성합니다. 새 파일 시스템을 S3 버킷에 연결합니다. Lustre 클라이언트를 설치하고 NFS를 사용하여 Amazon EC2 인스턴스에 문서 저장소를 탑재합니다.` },
      { k:'D', en:`Configure AWS DataSync to connect to an Amazon EC2 instance. Configure a task to synchronize the generated files to and from Amazon S3.`, ko:`Amazon EC2 인스턴스에 연결하도록 AWS DataSync를 구성합니다. 생성된 파일을 Amazon S3와 동기화하는 작업을 구성합니다.` },
    ],
    answer: ['B'],
    vote: '62% B',
    explain: `<p><span class="mark-ok">✅ B — Amazon S3 File Gateway + NFS 마운트</span></p>
<p>처리 서버는 Linux에서 실행되며 S3 API를 지원하지 않고 빠른 로컬 파일 접근이 필요합니다. Amazon S3 File Gateway는 NFS/SMB 파일 공유를 통해 로컬 파일 시스템처럼 S3에 파일을 읽고 쓸 수 있게 해줍니다. 파일을 로컬에 쓰면 자동으로 S3에 업로드되어 30분 이내 다운로드 요건을 충족합니다. 처리 서버의 코드 변경이 최소화되어 "최소한의 노력" 조건에 부합합니다.</p>
<p>※ FSx for Lustre(옵션 C)는 NFS가 아닌 Lustre 전용 프로토콜로 마운트해야 하므로 선택지에 "NFS 사용"이라고 기재된 C는 기술적으로 잘못된 설명입니다.</p>
<p><a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/CreatingAnNFSFileShare.html" target="_blank">AWS 공식 문서: S3 File Gateway NFS 파일 공유</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda로 마이그레이션하면 처리 서버 전체를 재작성해야 하므로 "최소한의 노력"에 위배됩니다. Lambda는 빠른 로컬 파일 액세스를 제공하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — FSx for Lustre는 NFS 프로토콜을 지원하지 않습니다. Lustre 전용 마운트 명령(<code>mount -t lustre</code>)을 사용해야 합니다. 선택지에 "NFS 사용"이라고 명시되어 있어 기술적으로 오류입니다.</p>
<p><span class="mark-no">❌ D</span> — AWS DataSync 작업은 최소 1시간 간격으로만 예약할 수 있어 30분 이내 가용성 요건을 충족하지 못합니다.</p>`,
    disc: [
      { ans:'B (62%)', txt:'FSx for Lustre가 NFS를 지원하지 않는다는 점이 핵심. C는 기술적 오류(NFS 불가)로 탈락. DataSync는 최소 1시간 간격 제약으로 30분 요건 불충족' },
    ]
  },
  {
    n: 166,
    en: `A delivery company is running a serverless solution in the AWS Cloud. The solution manages user data, delivery information, and past purchase details. The solution consists of several microservices. The central user service stores sensitive data in an Amazon DynamoDB table. Several of the other microservices store a copy of parts of the sensitive data in different storage services.<br><br>The company needs the ability to delete user information upon request. As soon as the central user service deletes a user, every other microservice must also delete its copy of the data immediately.<br><br>Which solution will meet these requirements?`,
    ko: `배송 회사가 AWS 클라우드에서 서버리스 솔루션을 실행하고 있습니다. 솔루션은 사용자 데이터, 배송 정보, 과거 구매 내역 등을 관리합니다. 솔루션은 여러 마이크로서비스로 구성됩니다. 중앙 사용자 서비스는 중요한 데이터를 Amazon DynamoDB 테이블에 저장합니다. 다른 마이크로서비스 중 일부는 민감한 데이터의 일부 복사본을 다른 스토리지 서비스에 저장합니다.<br><br>회사는 요청 시 사용자 정보를 삭제할 수 있는 권한이 필요합니다. 중앙 사용자 서비스가 사용자를 삭제하자마자 다른 모든 마이크로서비스도 해당 데이터 사본을 즉시 삭제해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Activate DynamoDB Streams on the DynamoDB table. Create an AWS Lambda trigger for the DynamoDB stream that will post events about user deletion in an Amazon Simple Queue Service (Amazon SQS) queue. Configure each microservice to poll the queue and delete the user from the DynamoDB table.`, ko:`DynamoDB 테이블에서 DynamoDB 스트림을 활성화합니다. Amazon Simple Queue Service(Amazon SQS) 대기열의 사용자 삭제에 대한 이벤트를 게시하는 DynamoDB 스트림에 대한 AWS Lambda 트리거를 생성합니다. 대기열을 폴링하고 DynamoDB 테이블에서 사용자를 삭제하도록 각 마이크로서비스를 구성합니다.` },
      { k:'B', en:`Set up DynamoDB event notifications on the DynamoDB table. Create an Amazon Simple Notification Service (Amazon SNS) topic as a target for the DynamoDB event notification. Configure each microservice to subscribe to the SNS topic and to delete the user from the DynamoDB table.`, ko:`DynamoDB 테이블에 DynamoDB 이벤트 알림을 설정합니다. DynamoDB 이벤트 알림의 대상으로 Amazon Simple 알림 서비스(Amazon SNS) 주제를 생성합니다. SNS 주제를 구독하고 DynamoDB 테이블에서 사용자를 삭제하도록 각 마이크로서비스를 구성합니다.` },
      { k:'C', en:`Configure the central user service to post an event on a custom Amazon EventBridge event bus when the company deletes a user. Create an EventBridge rule for each microservice to match the user deletion event pattern and invoke logic in the microservice to delete the user from the DynamoDB table.`, ko:`회사가 사용자를 삭제할 때 사용자 지정 Amazon EventBridge 이벤트 버스에 이벤트를 게시하도록 중앙 사용자 서비스를 구성합니다. 사용자 삭제 이벤트 패턴과 일치하도록 각 마이크로서비스에 대한 EventBridge 규칙을 생성하고 마이크로서비스에서 로직을 호출하여 DynamoDB 테이블에서 사용자를 삭제합니다.` },
      { k:'D', en:`Configure the central user service to post a message on an Amazon Simple Queue Service (Amazon SQS) queue when the company deletes a user. Configure each microservice to create an event filter on the SQS queue and to delete the user from the DynamoDB table.`, ko:`회사가 사용자를 삭제할 때 Amazon Simple Queue Service(Amazon SQS) 대기열에 메시지를 게시하도록 중앙 사용자 서비스를 구성합니다. SQS 대기열에 이벤트 필터를 생성하고 DynamoDB 테이블에서 사용자를 삭제하도록 각 마이크로서비스를 구성합니다.` },
    ],
    answer: ['C'],
    vote: '70% C',
    explain: `<p><span class="mark-ok">✅ C — Amazon EventBridge 커스텀 이벤트 버스를 이용한 팬아웃(Fan-out)</span></p>
<p>여러 마이크로서비스가 동일한 삭제 이벤트를 수신해야 하는 팬아웃(Fan-out) 패턴이 필요합니다. Amazon EventBridge는 단일 이벤트를 여러 규칙/대상에 동시에 전달할 수 있어 이 요구사항에 적합합니다. 각 마이크로서비스에 대해 EventBridge 규칙을 생성하여 사용자 삭제 이벤트를 매칭하고 해당 마이크로서비스의 로직을 즉시 호출합니다. SQS는 메시지를 단 하나의 소비자에게만 전달하므로 여러 마이크로서비스에 동시 전달이 필요한 이 시나리오에 부적합합니다.</p>
<p><a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus.html" target="_blank">AWS 공식 문서: Amazon EventBridge 이벤트 버스</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SQS는 단일 소비자(하나의 마이크로서비스)에게만 메시지를 전달합니다. 여러 마이크로서비스가 동일한 삭제 이벤트를 받으려면 각각 별도의 SQS 대기열이 필요하며, 단일 대기열로는 팬아웃이 불가능합니다.</p>
<p><span class="mark-no">❌ B</span> — "DynamoDB 이벤트 알림"이라는 기능은 존재하지 않습니다. DynamoDB는 변경 사항을 캡처하기 위해 DynamoDB Streams를 제공하지만, SNS 직접 연동은 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — A와 동일하게 SQS는 단일 소비자에게만 메시지를 전달합니다. 여러 마이크로서비스에 팬아웃 전달이 불가능합니다.</p>`,
    disc: [
      { ans:'C (70%)', txt:'SQS는 단일 소비자에게만 메시지 전달 → 팬아웃 불가. EventBridge는 단일 이벤트를 다수 규칙에 동시 전달 가능. "DynamoDB 이벤트 알림"은 존재하지 않으므로 B도 탈락' },
    ]
  },
  {
    n: 167,
    en: `A company is running a web application in a VPC. The web application runs on a group of Amazon EC2 instances behind an Application Load Balancer (ALB). The ALB is using AWS WAF.<br><br>An external customer needs to connect to the web application. The company must provide IP addresses to all external customers.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사가 VPC에서 웹 애플리케이션을 실행하고 있습니다. 웹 애플리케이션은 ALB(Application Load Balancer) 뒤의 Amazon EC2 인스턴스 그룹에서 실행됩니다. ALB는 AWS WAF를 사용하고 있습니다.<br><br>외부 고객이 웹 애플리케이션에 연결해야 합니다. 회사는 모든 외부 고객에게 IP 주소를 제공해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Replace the ALB with a Network Load Balancer (NLB). Assign an Elastic IP address to the NLB.`, ko:`ALB를 NLB(Network Load Balancer)로 교체합니다. NLB에 탄력적 IP 주소를 할당합니다.` },
      { k:'B', en:`Allocate an Elastic IP address. Assign the Elastic IP address to the ALB. Provide the Elastic IP address to the customer.`, ko:`탄력적 IP 주소를 할당합니다. 탄력적 IP 주소를 ALB에 할당합니다. 탄력적 IP 주소를 고객에게 제공합니다.` },
      { k:'C', en:`Create an AWS Global Accelerator standard accelerator. Specify the ALB as the accelerator's endpoint. Provide the accelerator's IP addresses to the customer.`, ko:`AWS Global Accelerator 표준 액셀러레이터를 생성합니다. ALB를 가속기의 엔드포인트로 지정합니다. 고객에게 가속기의 IP 주소를 제공합니다.` },
      { k:'D', en:`Configure an Amazon CloudFront distribution. Set the ALB as the origin. Ping the distribution's DNS name to determine the distribution's public IP address. Provide the IP address to the customer.`, ko:`Amazon CloudFront 배포를 구성합니다. ALB를 원점으로 설정합니다. 배포의 공용 IP 주소를 확인하려면 배포의 DNS 이름을 핑합니다. 고객에게 IP 주소를 제공합니다.` },
    ],
    answer: ['C'],
    vote: '90% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Global Accelerator로 고정 IP 제공</span></p>
<p>AWS Global Accelerator는 2개의 고정 Anycast IP 주소를 제공하여 ALB를 엔드포인트로 지정할 수 있습니다. ALB에는 탄력적 IP를 직접 할당할 수 없으므로, 고정 IP가 필요한 경우 Global Accelerator가 가장 적합한 솔루션입니다. 또한 WAF는 ALB에 계속 연결된 상태로 유지되므로 WAF 기능이 그대로 유지됩니다. Global Accelerator는 AWS 글로벌 네트워크를 통해 지연 시간도 개선합니다.</p>
<p><a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-accelerators.alb-accelerator.html" target="_blank">AWS 공식 문서: ALB를 엔드포인트로 사용하는 Global Accelerator</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ALB를 NLB로 교체하면 AWS WAF 기능이 제거됩니다. AWS WAF는 NLB와 통합되지 않고 ALB, CloudFront, API Gateway 등에서만 동작합니다. 또한 ALB 교체는 상당한 운영 오버헤드가 필요합니다.</p>
<p><span class="mark-no">❌ B</span> — ALB는 탄력적 IP 주소를 직접 할당할 수 없습니다. ALB의 IP는 AWS가 관리하며 변경될 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudFront 배포는 수천 개의 엣지 로케이션에서 응답하므로 단일 고정 IP가 없습니다. DNS 핑으로 얻은 IP는 언제든지 변경될 수 있어 고정 IP 제공이 불가능합니다.</p>`,
    disc: [
      { ans:'C (90%)', txt:'ALB는 탄력적 IP 할당 불가. WAF는 NLB와 통합 불가. Global Accelerator가 고정 IP + ALB 유지 + WAF 유지의 최적 조합' },
    ]
  },
  {
    n: 168,
    en: `A company has a few AWS accounts for development and wants to move its production application to AWS. The company needs to enforce Amazon Elastic Block Store (Amazon EBS) encryption at rest current production accounts and future production accounts only. The company needs a solution that includes built-in blueprints and guardrails.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
    ko: `회사에는 개발용 AWS 계정이 몇 개 있고 프로덕션 애플리케이션을 AWS로 이전하려고 합니다. 회사는 미사용 중인 현재 프로덕션 계정과 향후 프로덕션 계정에만 Amazon Elastic Block Store(Amazon EBS) 암호화를 적용해야 합니다. 회사에는 기본 제공 청사진과 가드레일이 포함된 솔루션이 필요합니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Use AWS CloudFormation StackSets to deploy AWS Config rules on production accounts.`, ko:`AWS CloudFormation StackSets를 사용하여 프로덕션 계정에 AWS Config 규칙을 배포하십시오.` },
      { k:'B', en:`Create a new AWS Control Tower landing zone in an existing developer account. Create OUs for accounts. Add production and development accounts to production and development OUs, respectively.`, ko:`기존 개발자 계정에 새로운 AWS Control Tower 랜딩 존을 생성합니다. 계정에 대한 OU를 만듭니다. 프로덕션 및 개발 OU에 각각 프로덕션 및 개발 계정을 추가합니다.` },
      { k:'C', en:`Create a new AWS Control Tower landing zone in the company's management account. Add production and development accounts to production and development OUs, respectively.`, ko:`회사의 마스터 계정에 새로운 AWS Control Tower 랜딩 존을 생성합니다. 프로덕션 및 개발 OU에 프로덕션 및 개발 계정을 각각 추가합니다.` },
      { k:'D', en:`Invite existing accounts to join the organization in AWS Organizations. Create SCPs to ensure compliance.`, ko:`기존 계정을 초대하여 AWS Organizations의 조직에 가입합니다. 규정 준수를 보장하기 위해 SCP를 생성합니다.` },
      { k:'E', en:`Create a guardrail from the management account to detect EBS encryption.`, ko:`EBS 암호화를 탐지하기 위해 마스터 계정에서 가드레일을 생성합니다.` },
      { k:'F', en:`Create a guardrail for the production OU to detect EBS encryption.`, ko:`EBS 암호화를 감지하기 위해 프로덕션 OU에 대한 가드레일을 생성합니다.` },
    ],
    answer: ['C','D','F'],
    vote: '74% CDF',
    explain: `<p><span class="mark-ok">✅ C — 관리(Management) 계정에 Control Tower 랜딩 존 생성</span></p>
<p>AWS Control Tower 랜딩 존은 반드시 관리 계정(Management Account)에 생성해야 합니다. 개발자 계정이 아닌 관리 계정이 OU 구조와 거버넌스의 루트입니다. "기본 제공 청사진과 가드레일"이라는 요구사항은 Control Tower를 지칭합니다.</p>
<p><span class="mark-ok">✅ D — 기존 계정을 Organizations에 초대</span></p>
<p>Control Tower 설정 후 기존 개발 계정 및 프로덕션 계정을 AWS Organizations에 초대하여 관리 범위에 포함시켜야 합니다. 이 단계 없이는 OU에 계정을 배치할 수 없습니다.</p>
<p><span class="mark-ok">✅ F — 프로덕션 OU에 EBS 암호화 감지 가드레일 생성</span></p>
<p>가드레일(Controls)은 OU 수준에서 적용됩니다. EBS 암호화를 <strong>프로덕션 OU에만</strong> 감지하는 가드레일을 생성하면 현재 및 향후 프로덕션 계정에만 적용됩니다. 관리 계정(E)에 가드레일을 생성하면 모든 OU에 적용되어 요구사항(프로덕션만 적용)을 초과합니다.</p>
<p><a href="https://docs.aws.amazon.com/controltower/latest/userguide/strongly-recommended-controls.html#ebs-enable-encryption" target="_blank">AWS 공식 문서: EBS 암호화 Control Tower 가드레일</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFormation StackSets는 Config 규칙 배포에 사용할 수 있지만 Control Tower의 내장 청사진/가드레일 기능을 사용하지 않아 요구사항의 "기본 제공 청사진과 가드레일" 조건에 맞지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Control Tower 랜딩 존은 관리 계정에 생성해야 하며 개발자 계정에 생성하면 안 됩니다.</p>
<p><span class="mark-no">❌ E</span> — 관리 계정 수준의 가드레일은 모든 OU에 적용되므로 개발 계정에도 EBS 암호화가 적용됩니다. 요구사항은 프로덕션 계정에만 적용입니다.</p>`,
    disc: [
      { ans:'CDF (74%)', txt:'Control Tower는 관리 계정에 생성. 기존 계정은 Organizations로 초대하여 OU에 배치. 가드레일은 프로덕션 OU에만 적용하여 개발 계정 제외' },
    ]
  },
  {
    n: 169,
    en: `A company is running a critical stateful web application on two Linux Amazon EC2 instances behind an Application Load Balancer (ALB) with an Amazon RDS for MySQL database. The company hosts the DNS records for the application in Amazon Route 53. A solutions architect must recommend a solution to improve the resiliency of the application.<br><br>The solution must meet the following objectives:<br><br>• Application tier: RPO of 2 minutes. RTO of 30 minutes<br>• Database tier: RPO of 5 minutes. RTO of 30 minutes<br><br>The company does not want to make significant changes to the existing application architecture. The company must ensure optimal latency after a failover.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사는 MySQL용 Amazon RDS 데이터베이스가 있는 ALB(Application Load Balancer) 뒤에 있는 두 개의 Linux Amazon EC2 인스턴스에서 중요한 상태 저장 웹 애플리케이션을 실행하고 있습니다. 회사는 Amazon Route 53에서 애플리케이션에 대한 DNS 레코드를 호스팅합니다. 솔루션 설계자는 애플리케이션의 복원력을 향상시키기 위한 솔루션을 권장해야 합니다.<br><br>솔루션은 다음 목표를 충족해야 합니다.<br><br>• 애플리케이션 계층: RPO 2분, RTO 30분<br>• 데이터베이스 계층: RPO 5분, RTO 30분<br><br>회사는 기존 애플리케이션 아키텍처를 크게 변경하고 싶지 않습니다. 회사는 장애 조치 후 최적의 대기 시간을 보장해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure the EC2 instances to use AWS Elastic Disaster Recovery. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.`, ko:`AWS Elastic Disaster Recovery를 사용하도록 EC2 인스턴스를 구성합니다. RDS DB 인스턴스에 대한 리전 간 읽기 전용 복제본을 생성합니다. 두 번째 AWS 지역에 ALB를 생성합니다. AWS Global Accelerator 엔드포인트를 생성하고 엔드포인트를 ALB와 연결합니다. Global Accelerator 엔드포인트를 가리키도록 DNS 레코드를 업데이트합니다.` },
      { k:'B', en:`Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Configure RDS automated backups. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs. Update DNS records to point to the Global Accelerator endpoint.`, ko:`Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 EBS 볼륨의 스냅샷을 찍도록 EC2 인스턴스를 구성합니다. RDS 자동 백업을 구성합니다. 두 번째 AWS 리전에 대한 백업 복제를 구성합니다. 두 번째 리전에 ALB를 생성합니다. AWS Global Accelerator 엔드포인트를 생성하고 엔드포인트를 ALB와 연결합니다. Global Accelerator 엔드포인트를 가리키도록 DNS 레코드를 업데이트합니다.` },
      { k:'C', en:`Create a backup plan in AWS Backup for the EC2 instances and RDS DB instance. Configure backup replication to a second AWS Region. Create an ALB in the second Region. Configure an Amazon CloudFront distribution in front of the ALB. Update DNS records to point to CloudFront.`, ko:`AWS Backup에서 EC2 인스턴스 및 RDS DB 인스턴스에 대한 백업 계획을 생성합니다. 두 번째 AWS 리전에 대한 백업 복제를 구성합니다. 두 번째 리전에 ALB를 생성합니다. ALB 앞에 Amazon CloudFront 배포를 구성합니다. CloudFront를 가리키도록 DNS 레코드를 업데이트합니다.` },
      { k:'D', en:`Configure the EC2 instances to use Amazon Data Lifecycle Manager (Amazon DLM) to take snapshots of the EBS volumes. Create a cross-Region read replica for the RDS DB instance. Create an ALB in a second AWS Region. Create an AWS Global Accelerator endpoint, and associate the endpoint with the ALBs.`, ko:`Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 EBS 볼륨의 스냅샷을 생성하도록 EC2 인스턴스를 구성합니다. RDS DB 인스턴스에 대한 리전 간 읽기 전용 복제본을 생성합니다. 두 번째 AWS 지역에 ALB를 생성합니다. AWS Global Accelerator 엔드포인트를 생성하고 엔드포인트를 ALB와 연결합니다.` },
    ],
    answer: ['A'],
    vote: '95% A',
    explain: `<p><span class="mark-ok">✅ A — AWS Elastic Disaster Recovery(DRS) + RDS 교차 리전 읽기 복제본 + Global Accelerator</span></p>
<p>RPO 2분/RTO 30분이라는 엄격한 목표를 달성하려면 실시간에 가까운 복제가 필요합니다. <strong>AWS Elastic Disaster Recovery(DRS)</strong>는 소스 서버에 복제 에이전트를 설치하고 블록 스토리지 수준의 연속 복제를 수행하여 RPO를 수 초~수 분 이내로 유지합니다. DLM 스냅샷이나 AWS Backup보다 훨씬 짧은 RPO를 제공합니다. <strong>RDS 교차 리전 읽기 복제본</strong>은 거의 실시간 복제(RPO 수 분)를 제공합니다. Global Accelerator는 장애 조치 후 최적의 라우팅과 빠른 DNS 전파 없는 트래픽 전환을 가능하게 합니다.</p>
<p><a href="https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html" target="_blank">AWS 공식 문서: AWS Elastic Disaster Recovery</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — DLM 스냅샷 기반 복구는 스냅샷 간격에 따라 RPO가 결정됩니다. 새 인스턴스 시작 후 스냅샷 복원까지 30분 RTO를 보장하기 어렵습니다. RDS 백업 복제도 교차 리전 읽기 복제본보다 RPO가 길어질 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Backup은 백업/복원 기반이어서 RTO/RPO 목표를 충족하기 어렵습니다. CloudFront는 동적 웹 애플리케이션의 장애 조치보다 정적 콘텐츠 캐싱에 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — D는 DNS 레코드 업데이트가 누락되어 장애 조치 후 클라이언트가 새 리전으로 라우팅되지 않습니다. 또한 DLM 스냅샷은 RPO 2분 달성이 어렵습니다.</p>`,
    disc: [
      { ans:'A (95%)', txt:'DRS는 블록 레벨 연속 복제로 RPO 수분 이내 보장. DLM 스냅샷은 RPO 2분 달성 어렵고 복원 시간도 30분 RTO 초과 위험. D는 DNS 업데이트 누락으로 장애 조치 불완전' },
    ]
  },
  {
    n: 170,
    en: `A solutions architect wants to cost-optimize and appropriately size Amazon EC2 instances in a single AWS account. The solutions architect wants to ensure that the instances are optimized based on CPU, memory, and network metrics.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)`,
    ko: `솔루션 아키텍트는 단일 AWS 계정에서 Amazon EC2 인스턴스의 비용을 최적화하고 적절하게 크기를 조정하려고 합니다. 솔루션 설계자는 인스턴스가 CPU, 메모리 및 네트워크 지표를 기반으로 최적화되기를 원합니다.<br><br>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Purchase AWS Business Support or AWS Enterprise Support for the account.`, ko:`해당 계정에 대해 AWS Business Support 또는 AWS Enterprise Support를 구매하십시오.` },
      { k:'B', en:`Turn on AWS Trusted Advisor and review any "Low Utilization Amazon EC2 Instances" recommendations.`, ko:`AWS Trusted Advisor를 켜고 "낮은 활용도 Amazon EC2 인스턴스" 권장 사항을 검토합니다.` },
      { k:'C', en:`Install the Amazon CloudWatch agent and configure memory metric collection on the EC2 instances.`, ko:`Amazon CloudWatch 에이전트를 설치하고 EC2 인스턴스에 메모리 지표 수집을 구성합니다.` },
      { k:'D', en:`Configure AWS Compute Optimizer in the AWS account to receive findings and optimization recommendations.`, ko:`결과 및 최적화 권장 사항을 수신하려면 AWS 계정에서 AWS Compute Optimizer를 구성하십시오.` },
      { k:'E', en:`Create an EC2 Instance Savings Plan for the AWS Regions, instance families, and operating systems of interest.`, ko:`관심 있는 AWS 지역, 인스턴스 패밀리 및 운영 체제에 대한 EC2 인스턴스 절감 계획을 생성합니다.` },
    ],
    answer: ['C','D'],
    vote: '91% CD',
    explain: `<p><span class="mark-ok">✅ C — CloudWatch 에이전트 설치로 메모리 지표 수집</span></p>
<p>EC2 인스턴스의 메모리 지표는 기본 CloudWatch 지표에 포함되지 않습니다. <strong>Amazon CloudWatch 에이전트</strong>를 설치하면 메모리, 디스크 사용량 등 OS 레벨 지표를 수집할 수 있습니다. Compute Optimizer가 메모리 사용률을 분석하여 더 정확한 권장 사항을 제공하려면 CloudWatch 에이전트가 필요합니다.</p>
<p><span class="mark-ok">✅ D — AWS Compute Optimizer로 최적화 권장 사항 수신</span></p>
<p><strong>AWS Compute Optimizer</strong>는 머신 러닝을 사용하여 CPU, 메모리, 네트워크 지표를 포함한 과거 사용률 데이터를 분석하고 최적의 인스턴스 크기/유형을 권장합니다. CloudWatch 에이전트로 메모리 지표를 수집하면 Compute Optimizer의 권장 사항 정확도가 향상됩니다.</p>
<p><a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/metrics.html" target="_blank">AWS 공식 문서: Compute Optimizer가 분석하는 지표</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Business/Enterprise 지원 구매는 Trusted Advisor 전체 기능에 접근하기 위한 것이지만 불필요한 비용이 발생합니다. 또한 Trusted Advisor는 메모리 지표를 기반으로 권장 사항을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Trusted Advisor의 "낮은 활용도 EC2 인스턴스" 점검은 CPU 사용률만 기반으로 하며 메모리 지표는 고려하지 않습니다. 또한 전체 기능에 접근하려면 Business/Enterprise 지원이 필요합니다.</p>
<p><span class="mark-no">❌ E</span> — Savings Plan은 비용 절감을 위한 약정 구매 상품이며 인스턴스 적절한 크기 조정(right-sizing)과는 무관합니다.</p>`,
    disc: [
      { ans:'CD (91%)', txt:'Compute Optimizer는 메모리 지표 분석을 위해 CloudWatch 에이전트 필요. Trusted Advisor는 메모리 지표 미포함. Savings Plan은 right-sizing과 무관' },
    ]
  },
];