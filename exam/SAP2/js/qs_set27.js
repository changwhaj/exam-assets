window.QS_SET27 = [
  {
    n: 261,
    en: `A company has many separate AWS accounts and uses no central billing or management. Each AWS account hosts services for different departments in the company. The company has a Microsoft Azure Active Directory that is deployed.<br><br>A solutions architect needs to centralize billing and management of the company's AWS accounts. The company wants to start using identity federation instead of manual user management. The company also wants to use temporary credentials instead of long-lived access keys.<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
    ko: `회사에는 별도의 AWS 계정이 많이 있으며 중앙 청구 또는 관리를 사용하지 않습니다. 각 AWS 계정은 회사의 다양한 부서를 위한 서비스를 호스팅합니다. 회사에는 Microsoft Azure Active Directory가 배포되어 있습니다.<br><br>솔루션 아키텍트는 회사의 AWS 계정에 대한 청구 및 관리를 중앙 집중화해야 합니다. 회사는 수동 사용자 관리 대신 ID 페더레이션을 사용하기를 원합니다. 또한 회사는 수명이 긴 액세스 키 대신 임시 자격 증명을 사용하려고 합니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Create a new AWS account to serve as a management account. Deploy an organization in AWS Organizations. Invite each existing AWS account to join the organization. Ensure that each account accepts the invitation.`, ko: `마스터 계정 역할을 할 새 AWS 계정을 생성합니다. AWS Organizations에 조직을 배포합니다. 각 기존 AWS 계정을 초대하여 조직에 가입하십시오. 각 계정이 초대를 수락하는지 확인하세요.` },
      { k: 'B', en: `Configure each AWS account's email address to be aws+@example.com so that account management email messages and invoices are sent to the same place.`, ko: `각 AWS 계정의 이메일 주소를 aws+@example.com으로 구성합니다.` },
      { k: 'C', en: `Deploy AWS IAM Identity Center (AWS Single Sign-On) in the management account. Connect IAM Identity Center to the Azure Active Directory. Configure IAM Identity Center for automatic synchronization of users and groups.`, ko: `마스터 계정에 AWS IAM Identity Center(AWS Single Sign-On)를 배포합니다. IAM ID 센터를 Azure Active Directory에 연결합니다. 사용자 및 그룹의 자동 동기화를 위해 IAM ID 센터를 구성합니다.` },
      { k: 'D', en: `Deploy an AWS Managed Microsoft AD directory in the management account. Share the directory with all other accounts in the organization by using AWS Resource Access Manager (AWS RAM).`, ko: `마스터 계정에 AWS Managed Microsoft AD 디렉터리를 배포합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 조직의 다른 모든 계정과 디렉터리를 공유합니다.` },
      { k: 'E', en: `Create AWS IAM Identity Center (AWS Single Sign-On) permission sets. Attach the permission sets to the appropriate IAM Identity Center groups and AWS accounts.`, ko: `AWS IAM Identity Center(AWS Single Sign-On) 권한 세트를 생성합니다. 적절한 IAM Identity Center 그룹 및 AWS 계정에 권한 세트를 연결합니다.` },
      { k: 'F', en: `Configure AWS Identity and Access Management (IAM) in each AWS account to use AWS Managed Microsoft AD for authentication and authorization.`, ko: `인증 및 승인을 위해 AWS Managed Microsoft AD를 사용하도록 각 AWS 계정에서 AWS IAM을 구성합니다.` },
    ],
    answer: ['A', 'C', 'E'],
    vote: '100% ACE',
    explain: `<p><span class="mark-ok">✅ A — 관리 계정 생성 + AWS Organizations 조직 배포</span></p>
<p>중앙 청구 및 관리를 위해 관리 계정을 새로 생성하고 Organizations 조직을 만들어 기존 계정들을 초대합니다. 통합 결제(Consolidated Billing)가 자동으로 활성화됩니다.</p>
<p><span class="mark-ok">✅ C — IAM Identity Center + Azure AD 연결 (ID 페더레이션)</span></p>
<p>IAM Identity Center(AWS SSO)를 Azure Active Directory와 연결하면 SCIM 프로토콜을 통해 사용자/그룹이 자동 동기화됩니다. Azure AD 자격 증명으로 AWS에 로그인하여 임시 자격 증명을 발급받을 수 있습니다.</p>
<p><span class="mark-ok">✅ E — IAM Identity Center 권한 세트 생성 및 연결</span></p>
<p>권한 세트로 각 그룹이 각 AWS 계정에서 가질 수 있는 권한을 정의합니다. 최소 권한 원칙을 따르며 임시 자격 증명 기반 액세스를 제공합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 이메일 주소 구성은 청구 중앙화와 무관합니다. AWS Organizations의 통합 결제가 올바른 해결책입니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Managed Microsoft AD를 별도로 배포하는 것은 Azure AD가 이미 있는 환경에서 불필요합니다. IAM Identity Center로 Azure AD를 직접 연결하는 것(C)이 더 간단합니다.</p>
<p><span class="mark-no">❌ F</span> — 각 계정에서 개별적으로 IAM을 Managed AD와 통합하는 것은 운영 오버헤드가 크고 중앙 집중식 관리에 맞지 않습니다.</p>`,
    disc: [
      { ans: 'ACE (100%)', txt: 'A=Organizations으로 청구 중앙화, C=Azure AD + IAM Identity Center로 ID 페더레이션(임시 자격 증명), E=권한 세트로 최소 권한 적용. D는 Azure AD가 이미 있어 불필요. F는 계정별 개별 구성으로 비효율.' }
    ]
  },
  {
    n: 262,
    en: `A company wants to manage the costs associated with a group of 20 applications that are infrequently used, but are still business-critical, by migrating to AWS. The applications are a mix of Java and Node.js spread across different instance clusters. The company wants to minimize costs while standardizing by using a single deployment methodology.<br><br>Most of the applications are part of month-end processing routines with a small number of concurrent users, but they are occasionally run at other times. Average application memory consumption is less than 1 GB, though some applications use as much as 2.5 GB of memory during peak processing. The most important application in the group is a billing report written in Java that accesses multiple data sources and often runs for several hours.<br><br>Which is the MOST cost-effective solution?`,
    ko: `회사는 비즈니스 크리티컬하지만 자주 사용되지 않는 20개의 애플리케이션 그룹과 관련된 비용을 AWS로 마이그레이션하여 관리하려고 합니다. 애플리케이션은 다양한 인스턴스 클러스터에 분산된 Java와 Node.js가 혼합되어 있습니다. 회사는 단일 배포 방법을 사용하여 표준화하는 동시에 비용을 최소화하려고 합니다.<br><br>대부분의 애플리케이션은 동시 사용자 수가 적은 월말 처리 루틴의 일부이지만 가끔 다른 시간에 실행됩니다. 평균 애플리케이션 메모리 소비량은 1GB 미만입니다. 일부 응용 프로그램은 최대 처리 중에 최대 2.5GB의 메모리를 사용합니다. 가장 중요한 애플리케이션은 여러 데이터 소스에 액세스하고 종종 몇 시간 동안 실행되는 Java로 작성된 청구 보고서입니다.<br><br>가장 비용 효율적인 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy a separate AWS Lambda function for each application. Use AWS CloudTrail logs and Amazon CloudWatch alarms to verify completion of critical jobs.`, ko: `각 애플리케이션에 대해 별도의 AWS Lambda 함수를 배포합니다. AWS CloudTrail 로그와 Amazon CloudWatch 경보를 사용하여 중요한 작업의 완료를 확인하세요.` },
      { k: 'B', en: `Deploy Amazon ECS containers on Amazon EC2 with Auto Scaling configured for memory utilization of 75%. Deploy an ECS task for each application being migrated with ECS task scaling. Monitor services and hosts by using Amazon CloudWatch.`, ko: `75%의 메모리 사용률로 구성된 Auto Scaling을 사용하여 Amazon EC2에 Amazon ECS 컨테이너를 배포합니다. ECS 작업 확장을 통해 마이그레이션되는 각 애플리케이션에 대해 ECS 작업을 배포합니다. Amazon CloudWatch를 사용하여 서비스와 호스트를 모니터링합니다.` },
      { k: 'C', en: `Deploy AWS Elastic Beanstalk for each application with Auto Scaling to ensure that all requests have sufficient resources. Monitor each AWS Elastic Beanstalk deployment by using CloudWatch alarms.`, ko: `Auto Scaling을 사용하여 각 애플리케이션에 대해 AWS Elastic Beanstalk를 배포하여 모든 요청에 충분한 리소스가 있는지 확인합니다. CloudWatch 경보를 사용하여 각 AWS Elastic Beanstalk 배포를 모니터링합니다.` },
      { k: 'D', en: `Deploy a new Amazon EC2 instance cluster that co-hosts all applications by using EC2 Auto Scaling and Application Load Balancers. Scale cluster size based on a custom metric set on instance memory utilization. Purchase 3-year Reserved Instance reservations equal to the GroupMaxSize parameter of the Auto Scaling group.`, ko: `EC2 Auto Scaling 및 Application Load Balancer를 사용하여 모든 애플리케이션을 공동 호스팅하는 새로운 Amazon EC2 인스턴스 클러스터를 배포합니다. 인스턴스 메모리 사용률에 설정된 사용자 지정 지표를 기반으로 클러스터 크기를 확장합니다. Auto Scaling 그룹의 GroupMaxSize 파라미터와 동일한 3년 예약 인스턴스 예약을 구매합니다.` },
    ],
    answer: ['B'],
    vote: '90% B',
    explain: `<p><span class="mark-ok">✅ B — Amazon ECS on EC2 + Auto Scaling</span></p>
<p><strong>Lambda 탈락(A):</strong> 청구 보고서가 "몇 시간 동안 실행"된다고 명시되어 있습니다. Lambda의 최대 실행 시간은 15분이므로 불가능합니다.</p>
<p><strong>ECS 선택 이유:</strong> Java와 Node.js 앱을 컨테이너로 패키징하면 단일 배포 방법론(Docker)으로 표준화할 수 있습니다. 각 ECS 태스크에 필요한 메모리(1GB 또는 2.5GB)를 개별 지정하여 EC2 인스턴스를 효율적으로 공유합니다. 메모리 75% 임계값으로 Auto Scaling하여 비사용 시간에 인스턴스를 축소합니다.</p>
<p><strong>Elastic Beanstalk 대비 장점:</strong> Beanstalk는 앱당 별도 EC2를 가질 수 있어 20개 앱에 더 많은 비용이 발생하지만, ECS는 여러 컨테이너가 동일 EC2 인스턴스를 공유합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda 최대 실행 시간 15분 제한으로 "몇 시간 동안 실행"되는 청구 보고서 처리 불가능합니다.</p>
<p><span class="mark-no">❌ C</span> — Elastic Beanstalk는 각 애플리케이션에 독립적인 EC2 환경을 제공하여 20개 앱에 더 높은 비용이 발생합니다. ECS는 여러 컨테이너가 인스턴스를 공유하므로 더 비용 효율적입니다.</p>
<p><span class="mark-no">❌ D</span> — 최대 인스턴스 수 기준 3년 RI를 구매하면 실제 사용량(비피크 시 적은 인스턴스)보다 과잉 구매가 됩니다. 모든 앱을 단일 클러스터에 공동 호스팅하면 자원 경합 문제가 발생합니다.</p>`,
    disc: [
      { ans: 'B (90%)', txt: 'A는 Lambda 15분 제한으로 청구 보고서 실행 불가. D는 최대 RI 구매로 과잉 지출. B의 ECS on EC2는 단일 배포 방법론 + 여러 컨테이너 인스턴스 공유 + 메모리 기반 Auto Scaling으로 비용 최적화.' }
    ]
  },
  {
    n: 263,
    en: `A solutions architect needs to review the design of an Amazon EMR cluster that is using the EMR File System (EMRFS). The cluster performs tasks that are critical to business needs. The cluster is running Amazon EC2 On-Demand Instances at all times for all task, primary, and core nodes. The EMR tasks run each morning, starting at 1:00 AM. and take 6 hours to finish running. The amount of time to complete the processing is not a priority because the data is not referenced until late in the day.<br><br>The solutions architect must review the architecture and suggest a solution to minimize the compute costs.<br><br>Which solution should the solutions architect recommend to meet these requirements?`,
    ko: `솔루션 아키텍트는 EMRFS(EMR 파일 시스템)를 사용하는 Amazon EMR 클러스터의 설계를 검토해야 합니다. 클러스터는 비즈니스 요구에 중요한 작업을 수행합니다. 모든 작업, 기본 및 코어 노드에 대해 항상 Amazon EC2 온디맨드 인스턴스를 실행하고 있습니다. EMR 작업은 매일 아침 오전 1시부터 실행되며 완료하는 데 6시간이 걸립니다. 데이터가 하루 늦게까지 참조되지 않기 때문에 처리를 완료하는 데 걸리는 시간은 우선순위가 아닙니다.<br><br>솔루션 설계자는 아키텍처를 검토하고 컴퓨팅 비용을 최소화할 수 있는 솔루션을 제안해야 합니다.<br><br>이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 솔루션을 권장해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Launch all task, primary, and core nodes on Spot Instances in an instance fleet. Terminate the cluster, including all instances, when the processing is completed.`, ko: `인스턴스 집합의 스팟 인스턴스에서 모든 작업, 기본 및 코어 노드를 시작합니다. 처리가 완료되면 모든 인스턴스를 포함하여 클러스터를 종료합니다.` },
      { k: 'B', en: `Launch the primary and core nodes on On-Demand Instances. Launch the task nodes on Spot Instances in an instance fleet. Terminate the cluster, including all instances, when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.`, ko: `온디맨드 인스턴스에서 기본 및 핵심 노드를 시작합니다. 인스턴스 집합의 스팟 인스턴스에서 작업 노드를 시작합니다. 처리가 완료되면 모든 인스턴스를 포함하여 클러스터를 종료합니다. 온디맨드 인스턴스 사용량을 충당하려면 Compute Savings Plan을 구매하세요.` },
      { k: 'C', en: `Continue to launch all nodes on On-Demand Instances. Terminate the cluster, including all instances, when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.`, ko: `온디맨드 인스턴스에서 모든 노드를 계속 시작합니다. 처리가 완료되면 모든 인스턴스를 포함하여 클러스터를 종료합니다. 온디맨드 인스턴스 사용량을 충당하려면 Compute Savings Plan을 구매하세요.` },
      { k: 'D', en: `Launch the primary and core nodes on On-Demand Instances. Launch the task nodes on Spot Instances in an instance fleet. Terminate only the task node instances when the processing is completed. Purchase Compute Savings Plans to cover the On-Demand Instance usage.`, ko: `온디맨드 인스턴스에서 기본 및 핵심 노드를 시작합니다. 인스턴스 집합의 스팟 인스턴스에서 작업 노드를 시작합니다. 처리가 완료되면 작업 노드 인스턴스만 종료합니다. 온디맨드 인스턴스 사용량을 충당하려면 Compute Savings Plan을 구매하세요.` },
    ],
    answer: ['D'],
    vote: 'D (62%) B (38%) 논란 — 제시 정답 D',
    explain: `<p><span class="mark-ok">✅ D — 기본/코어 노드 온디맨드 유지 + 작업 노드만 종료 + Compute Savings Plan</span></p>
<p>"데이터가 하루 늦게까지 참조되지 않는다" → 오전 7시 처리 완료 후에도 <strong>같은 날 늦게 클러스터를 통해 데이터에 접근해야 합니다.</strong> 기본/코어 노드를 유지해야 합니다.</p>
<p>작업 노드는 처리 완료 후 불필요하므로 스팟 인스턴스로 실행하고 완료 후 종료합니다. Compute Savings Plan으로 기본/코어 온디맨드 비용을 절감합니다.</p>
<p>B 지지 의견: EMRFS는 데이터를 S3에 저장하므로 클러스터 종료 후에도 S3 API로 데이터에 직접 액세스할 수 있다는 주장도 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 기본 및 코어 노드를 스팟 인스턴스로 실행하면 중요 비즈니스 작업에서 스팟 중단 위험이 있습니다. 기본/코어 노드는 온디맨드로 유지해야 합니다.</p>
<p><span class="mark-no">❌ B</span> — 처리 완료 후 전체 클러스터를 종료하면 같은 날 늦게 데이터 참조 시 클러스터를 재시작해야 하며 지연이 발생합니다. 또한 Savings Plan 약정을 사고도 인스턴스를 종료하면 약정 금액이 낭비됩니다.</p>
<p><span class="mark-no">❌ C</span> — 작업 노드까지 모두 온디맨드로 유지하면 비용이 최적화되지 않습니다. 작업 노드는 스팟으로 교체 가능합니다.</p>`,
    disc: [
      { ans: 'D (62%) vs B (38%)', txt: 'D 지지: "하루 늦게 데이터 참조" → 클러스터 유지 필요, 작업 노드만 종료로 비용 절감. B 지지: EMRFS는 S3에 저장하므로 클러스터 없어도 S3 API 직접 접근 가능. AWS 제시 정답은 D.' }
    ]
  },
  {
    n: 264,
    en: `A company has migrated a legacy application to the AWS Cloud. The application runs on three Amazon EC2 instances that are spread across three Availability Zones. One EC2 instance is in each Availability Zone. The EC2 instances are running in three private subnets of the VPC and are set up as targets for an Application Load Balancer (ALB) that is associated with three public subnets.<br><br>The application needs to communicate with on-premises systems. Only traffic from IP addresses in the company's IP address range are allowed to access the on-premises systems. The company's security team is bringing only one IP address from its internal IP address range to the cloud. The company has added this IP address to the allow list for the company firewall. The company also has created an Elastic IP address for this IP address.<br><br>A solutions architect needs to create a solution that gives the application the ability to communicate with the on-premises systems. The solution also must be able to mitigate failures automatically.<br><br>Which solution will meet these requirements?`,
    ko: `회사가 레거시 애플리케이션을 AWS 클라우드로 마이그레이션했습니다. 애플리케이션은 3개의 가용 영역에 분산된 3개의 Amazon EC2 인스턴스에서 실행됩니다. EC2 인스턴스는 VPC의 프라이빗 서브넷 3개에서 실행 중이며 퍼블릭 서브넷 3개와 연결된 ALB의 대상으로 설정됩니다.<br><br>애플리케이션은 온프레미스 시스템과 통신해야 합니다. 회사의 IP 주소 범위에 있는 IP 주소의 트래픽만 온프레미스 시스템에 액세스할 수 있습니다. 보안팀은 내부 IP 주소 범위에서 IP 주소 하나만 클라우드로 가져오고 있습니다. 회사는 이 IP 주소를 방화벽 허용 목록에 추가했고 탄력적 IP 주소를 생성했습니다.<br><br>솔루션 설계자는 애플리케이션이 온프레미스 시스템과 통신할 수 있는 기능을 제공하는 솔루션을 만들어야 합니다. 또한 솔루션은 오류를 자동으로 완화할 수 있어야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy three NAT gateways, one in each public subnet. Assign the Elastic IP address to the NAT gateways. Turn on health checks for the NAT gateways. If a NAT gateway fails a health check, recreate the NAT gateway and assign the Elastic IP address to the new NAT gateway.`, ko: `각 퍼블릭 서브넷에 하나씩 세 개의 NAT 게이트웨이를 배포합니다. NAT 게이트웨이에 탄력적 IP 주소를 할당합니다. NAT 게이트웨이에 대한 상태 확인을 활성화합니다. NAT 게이트웨이가 상태 확인에 실패하면 NAT 게이트웨이를 다시 생성하고 탄력적 IP 주소를 새 NAT 게이트웨이에 할당합니다.` },
      { k: 'B', en: `Replace the ALB with a Network Load Balancer (NLB). Assign the Elastic IP address to the NLB. Turn on health checks for the NLB. In the case of a failed health check, redeploy the NLB in different subnets.`, ko: `ALB를 NLB로 교체합니다. NLB에 탄력적 IP 주소를 할당합니다. NLB에 대한 상태 확인을 활성화합니다. 상태 확인이 실패한 경우 NLB를 다른 서브넷에 다시 배포합니다.` },
      { k: 'C', en: `Deploy a single NAT gateway in a public subnet. Assign the Elastic IP address to the NAT gateway. Use Amazon CloudWatch with a custom metric to monitor the NAT gateway. If the NAT gateway is unhealthy, invoke an AWS Lambda function to create a new NAT gateway in a different subnet. Assign the Elastic IP address to the new NAT gateway.`, ko: `퍼블릭 서브넷에 단일 NAT 게이트웨이를 배포합니다. NAT 게이트웨이에 탄력적 IP 주소를 할당합니다. 사용자 지정 지표와 함께 Amazon CloudWatch를 사용하여 NAT 게이트웨이를 모니터링합니다. NAT 게이트웨이가 비정상인 경우 AWS Lambda 함수를 호출하여 다른 서브넷에 새 NAT 게이트웨이를 생성합니다. 새 NAT 게이트웨이에 탄력적 IP 주소를 할당합니다.` },
      { k: 'D', en: `Assign the Elastic IP address to the ALB. Create an Amazon Route 53 simple record with the Elastic IP address as the value. Create a Route 53 health check. In the case of a failed health check, recreate the ALB in different subnets.`, ko: `탄력적 IP 주소를 ALB에 할당합니다. 탄력적 IP 주소를 값으로 사용하여 Amazon Route 53 단순 레코드를 생성합니다. Route 53 상태 확인을 생성합니다. 상태 확인에 실패한 경우 다른 서브넷에 ALB를 다시 생성합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — 단일 NAT 게이트웨이 + Elastic IP + CloudWatch + Lambda 자동 복구</span></p>
<p>탄력적 IP 주소가 하나뿐이므로 NAT 게이트웨이도 하나만 사용해야 합니다. 단일 NAT 게이트웨이에 탄력적 IP를 할당하면 온프레미스 방화벽 허용 목록의 IP로 아웃바운드 트래픽이 나갑니다.</p>
<p>CloudWatch 사용자 지정 지표로 NAT 게이트웨이를 모니터링하고 장애 시 Lambda 함수가 다른 서브넷에 새 NAT 게이트웨이를 생성하고 Elastic IP를 재할당하여 <strong>자동 장애 완화</strong>를 제공합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 탄력적 IP가 하나뿐인데 3개의 NAT 게이트웨이를 배포하는 것은 불가능합니다(각 NAT 게이트웨이에 별도 EIP 필요).</p>
<p><span class="mark-no">❌ B</span> — 이 시나리오는 인바운드 트래픽이 아닌 <strong>아웃바운드 트래픽</strong>(EC2→온프레미스)을 다루므로 ALB/NLB보다 NAT 게이트웨이가 적합합니다. ALB에는 EIP를 직접 할당할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — ALB에는 탄력적 IP를 직접 할당할 수 없습니다. Route 53 단순 라우팅은 상태 확인 기반 자동 장애 조치를 지원하지 않습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'EIP 1개 → NAT GW 1개만 가능(A 탈락). 아웃바운드 트래픽 문제 → NAT GW가 올바른 도구(B/D 탈락). CloudWatch + Lambda로 자동 장애 복구. D의 ALB에 EIP 할당 불가.' }
    ]
  },
  {
    n: 265,
    en: `A company uses AWS Organizations to manage more than 1,000 AWS accounts. The company has created a new developer organization. There are 540 developer member accounts that must be moved to the new developer organization. All accounts are set up with all the required information so that each account can be operated as a standalone account.<br><br>Which combination of steps should a solutions architect take to move all of the developer accounts to the new developer organization? (Choose three.)`,
    ko: `회사는 AWS Organizations를 사용하여 1,000개가 넘는 AWS 계정을 관리합니다. 회사는 새로운 개발자 조직을 만들었습니다. 새로운 개발자 조직으로 이동해야 하는 개발자 회원 계정은 540개입니다. 모든 계정은 각 계정이 독립형 계정으로 운영될 수 있도록 필요한 모든 정보로 설정됩니다.<br><br>모든 개발자 계정을 새로운 개발자 조직으로 이동하려면 솔루션 설계자가 수행해야 하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Call the MoveAccount operation in the Organizations API from the old organization's management account to migrate the developer accounts to the new developer organization.`, ko: `이전 조직의 마스터 계정에서 Organizations API의 MoveAccount 작업을 호출하여 개발자 계정을 새 개발자 조직으로 마이그레이션합니다.` },
      { k: 'B', en: `From the management account, remove each developer account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.`, ko: `마스터 계정에서 조직 API의 RemoveAccountFromOrganization 작업을 사용하여 이전 조직에서 각 개발자 계정을 제거합니다.` },
      { k: 'C', en: `From each developer account, remove the account from the old organization using the RemoveAccountFromOrganization operation in the Organizations API.`, ko: `각 개발자 계정에서 Organizations API의 RemoveAccountFromOrganization 작업을 사용하여 이전 조직에서 계정을 제거합니다.` },
      { k: 'D', en: `Sign in to the new developer organization's management account and create a placeholder member account that acts as a target for the developer account migration.`, ko: `새로운 개발자 조직의 마스터 계정에 로그인하고 개발자 계정 마이그레이션의 대상 역할을 하는 자리 표시자 회원 계정을 생성합니다.` },
      { k: 'E', en: `Call the InviteAccountToOrganization operation in the Organizations API from the new developer organization's management account to send invitations to the developer accounts.`, ko: `새로운 개발자 조직의 마스터 계정에서 Organizations API의 InviteAccountToOrganization 작업을 호출하여 개발자 계정에 초대를 보냅니다.` },
      { k: 'F', en: `Have each developer sign in to their account and confirm to join the new developer organization.`, ko: `각 개발자가 자신의 계정에 로그인하고 새 개발자 조직에 가입했는지 확인하도록 합니다.` },
    ],
    answer: ['B', 'E', 'F'],
    vote: '82% BEF',
    explain: `<p><span class="mark-ok">✅ B — 관리 계정에서 기존 조직에서 각 계정 제거</span></p>
<p>계정을 조직에서 제거하는 작업은 <strong>관리(마스터) 계정</strong>에서 RemoveAccountFromOrganization API를 호출해야 합니다. 개별 계정에서 스스로 조직을 탈퇴할 수 없습니다.</p>
<p><span class="mark-ok">✅ E — 새 조직의 관리 계정에서 초대 전송</span></p>
<p>계정이 독립형(standalone)이 된 후 새 개발자 조직의 관리 계정이 InviteAccountToOrganization으로 초대를 보냅니다.</p>
<p><span class="mark-ok">✅ F — 각 개발자가 초대 수락</span></p>
<p>초대를 받은 계정 소유자(개발자)가 직접 로그인하여 조직 가입을 확인(수락)합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — MoveAccount 작업은 <strong>동일 조직 내</strong>에서 OU 간에 계정을 이동할 때 사용합니다. 서로 다른 조직 간 계정 이동에는 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — RemoveAccountFromOrganization은 관리 계정에서 호출해야 합니다. 개별 계정에서 스스로 조직을 탈퇴하는 것은 지원되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 자리 표시자 계정 생성은 이 프로세스에 필요하지 않습니다. 실제 계정을 직접 초대합니다.</p>`,
    disc: [
      { ans: 'BEF (82%)', txt: '조직 간 이동 3단계: B=관리 계정에서 기존 조직 제거(독립 계정 전환) → E=새 조직 관리 계정이 초대 전송 → F=개발자가 초대 수락. A의 MoveAccount는 동일 조직 내 OU 이동 전용. C는 개별 계정 탈퇴 불가.' }
    ]
  },
  {
    n: 266,
    en: `A company's interactive web application uses an Amazon CloudFront distribution to serve images from an Amazon S3 bucket. Occasionally, third-party tools ingest corrupted images into the S3 bucket. This image corruption causes a poor user experience in the application later. The company has successfully implemented and tested Python logic to detect corrupt images.<br><br>A solutions architect must recommend a solution to integrate the detection logic with minimal latency between the ingestion and serving.<br><br>Which solution will meet these requirements?`,
    ko: `회사의 대화형 웹 애플리케이션은 Amazon CloudFront 배포를 사용하여 Amazon S3 버킷의 이미지를 제공합니다. 때때로 타사 도구가 손상된 이미지를 S3 버킷으로 수집합니다. 이러한 이미지 손상으로 인해 나중에 애플리케이션에서 사용자 경험이 저하됩니다. 회사는 손상된 이미지를 감지하기 위해 Python 논리를 성공적으로 구현하고 테스트했습니다.<br><br>솔루션 설계자는 수집과 제공 사이의 대기 시간을 최소화하면서 감지 논리를 통합하는 솔루션을 권장해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use a Lambda@Edge function that is invoked by a viewer-response event.`, ko: `최종 사용자 응답 이벤트에 의해 호출되는 Lambda@Edge 함수를 사용하십시오.` },
      { k: 'B', en: `Use a Lambda@Edge function that is invoked by an origin-response event.`, ko: `오리진-응답 이벤트에 의해 호출되는 Lambda@Edge 함수를 사용하십시오.` },
      { k: 'C', en: `Use an S3 event notification that invokes an AWS Lambda function.`, ko: `AWS Lambda 함수를 호출하는 S3 이벤트 알림을 사용하십시오.` },
      { k: 'D', en: `Use an S3 event notification that invokes an AWS Step Functions state machine.`, ko: `AWS Step Functions 상태 시스템을 호출하는 S3 이벤트 알림을 사용하십시오.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — S3 이벤트 알림 → Lambda 함수 (수집 시점 즉시 감지)</span></p>
<p>"수집과 제공 사이의 대기 시간 최소화"가 핵심 요구 사항입니다. S3 이벤트 알림을 사용하면 이미지가 S3 버킷에 업로드되는 즉시 Lambda 함수가 트리거되어 Python 감지 로직을 실행합니다. 손상된 이미지는 CloudFront를 통해 사용자에게 제공되기 전에 감지·처리됩니다.</p>
<p>Lambda@Edge(A, B)는 CloudFront가 콘텐츠를 이미 요청하는 시점에 실행되어 이미 손상된 이미지가 일부 사용자에게 노출될 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 뷰어-응답(viewer-response)은 CloudFront가 사용자에게 응답을 반환하기 직전에 실행됩니다. 이미 손상된 이미지가 전송되는 과정에서 실행되어 너무 늦습니다.</p>
<p><span class="mark-no">❌ B</span> — 오리진-응답(origin-response)은 S3(오리진)에서 CloudFront로 응답이 돌아올 때 실행됩니다. 수집 시점이 아닌 제공 시점에 감지하므로 대기 시간이 길어집니다.</p>
<p><span class="mark-no">❌ D</span> — Step Functions는 여러 단계의 복잡한 워크플로에 적합합니다. 단순한 이미지 검증에는 Lambda 직접 호출(C)이 더 간단하고 빠릅니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: '"수집 시점에 감지" = S3 이벤트 알림 → Lambda. Lambda@Edge는 제공 시점(CloudFront)에 실행되어 늦음. D의 Step Functions는 단순 감지에 과잉 구성.' }
    ]
  },
  {
    n: 267,
    en: `A company has an application that runs on Amazon EC2 instances in an Amazon EC2 Auto Scaling group. The company uses AWS CodePipeline to deploy the application. The instances that run in the Auto Scaling group are constantly changing because of scaling events.<br><br>When the company deploys new application code versions, the company installs the AWS CodeDeploy agent on any new target EC2 instances and associates the instances with the CodeDeploy deployment group. The application is set to go live within the next 24 hours.<br><br>What should a solutions architect recommend to automate the application deployment process with the LEAST amount of operational overhead?`,
    ko: `회사에는 Amazon EC2 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 회사는 AWS CodePipeline을 사용하여 애플리케이션을 배포합니다. Auto Scaling 그룹에서 실행되는 인스턴스는 조정 이벤트로 인해 지속적으로 변경됩니다.<br><br>회사가 새 애플리케이션 코드 버전을 배포할 때 회사는 새 대상 EC2 인스턴스에 AWS CodeDeploy 에이전트를 설치하고 인스턴스를 CodeDeploy 배포 그룹과 연결합니다. 애플리케이션은 앞으로 24시간 이내에 게시되도록 설정되어 있습니다.<br><br>최소한의 운영 오버헤드로 애플리케이션 배포 프로세스를 자동화하기 위해 솔루션 설계자가 권장해야 하는 것은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Configure Amazon EventBridge to invoke an AWS Lambda function when a new EC2 instance is launched into the Auto Scaling group. Code the Lambda function to associate the EC2 instances with the CodeDeploy deployment group.`, ko: `새로운 EC2 인스턴스가 Auto Scaling 그룹으로 시작될 때 AWS Lambda 함수를 호출하도록 Amazon EventBridge를 구성합니다. EC2 인스턴스를 CodeDeploy 배포 그룹과 연결하도록 Lambda 함수를 코딩합니다.` },
      { k: 'B', en: `Write a script to suspend Amazon EC2 Auto Scaling operations before the deployment of new code. When the deployment is complete, create a new AMI and configure the Auto Scaling group's launch template to use the new AMI for new launches. Resume Amazon EC2 Auto Scaling operations.`, ko: `새 코드를 배포하기 전에 Amazon EC2 Auto Scaling 작업을 일시 중지하는 스크립트를 작성합니다. 배포가 완료되면 새 AMI를 생성하고 새 시작에 새 AMI를 사용하도록 Auto Scaling 그룹의 시작 템플릿을 구성합니다. Amazon EC2 Auto Scaling 작업을 재개합니다.` },
      { k: 'C', en: `Create a new AWS CodeBuild project that creates a new AMI that contains the new code. Configure CodeBuild to update the Auto Scaling group's launch template to the new AMI. Run an Amazon EC2 Auto Scaling instance refresh operation.`, ko: `새 코드가 포함된 새 AMI를 생성하는 새 AWS CodeBuild 프로젝트를 생성합니다. Auto Scaling 그룹의 시작 템플릿을 새 AMI로 업데이트하도록 CodeBuild를 구성합니다. Amazon EC2 Auto Scaling 인스턴스 새로 고침 작업을 실행합니다.` },
      { k: 'D', en: `Create a new AMI that has the CodeDeploy agent installed. Configure the Auto Scaling group's launch template to use the new AMI. Associate the CodeDeploy deployment group with the Auto Scaling group instead of the EC2 instances.`, ko: `CodeDeploy 에이전트가 설치된 새 AMI를 생성합니다. 새 AMI를 사용하도록 Auto Scaling 그룹의 시작 템플릿을 구성합니다. CodeDeploy 배포 그룹을 EC2 인스턴스 대신 Auto Scaling 그룹과 연결합니다.` },
    ],
    answer: ['D'],
    vote: '94% D',
    explain: `<p><span class="mark-ok">✅ D — CodeDeploy 에이전트 사전 설치 AMI + ASG와 배포 그룹 연결</span></p>
<p>CodeDeploy 에이전트가 사전 설치된 AMI를 사용하면 ASG에서 새 인스턴스를 시작할 때 에이전트가 자동으로 실행됩니다. <strong>CodeDeploy 배포 그룹을 개별 EC2 인스턴스가 아닌 Auto Scaling 그룹과 연결</strong>하면 ASG에 새 인스턴스가 추가될 때 CodeDeploy가 자동으로 배포 그룹에 포함시킵니다.</p>
<p>이를 통해 스케일 아웃 시마다 수동으로 에이전트를 설치하고 배포 그룹에 추가하는 작업이 완전히 자동화됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EventBridge + Lambda로 배포 그룹 연결을 자동화할 수 있지만 에이전트 설치 문제는 해결되지 않습니다. D보다 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ B</span> — Auto Scaling을 일시 중지하는 것은 운영 오버헤드가 매우 크고 서비스 가용성에 영향을 줍니다.</p>
<p><span class="mark-no">❌ C</span> — CodeBuild로 AMI를 생성하는 것은 복잡하고 시간이 걸리며, 인스턴스 새로고침 중 가동 중지 시간이 발생할 수 있습니다.</p>`,
    disc: [
      { ans: 'D (94%)', txt: 'CodeDeploy 에이전트를 AMI에 사전 설치하고 배포 그룹을 ASG와 연결하면 스케일링 시 자동으로 새 인스턴스가 배포에 포함됩니다. 운영 오버헤드 최소화의 표준 패턴.' }
    ]
  },
  {
    n: 268,
    en: `A company has a website that runs on four Amazon EC2 instances that are behind an Application Load Balancer (ALB). When the ALB detects that an EC2 instance is no longer available, an Amazon CloudWatch alarm enters the ALARM state. A member of the company's operations team then manually adds a new EC2 instance behind the ALB.<br><br>A solutions architect needs to design a highly available solution that automatically handles the replacement of EC2 instances. The company needs to minimize downtime during the switch to the new solution.<br><br>Which set of steps should the solutions architect take to meet these requirements?`,
    ko: `회사에는 ALB 뒤의 4개의 Amazon EC2 인스턴스에서 실행되는 웹 사이트가 있습니다. ALB가 EC2 인스턴스를 더 이상 사용할 수 없음을 감지하면 Amazon CloudWatch 경보가 ALARM 상태로 전환됩니다. 회사 운영 팀의 구성원이 ALB 뒤에 새 EC2 인스턴스를 수동으로 추가합니다.<br><br>솔루션 아키텍트는 EC2 인스턴스 교체를 자동으로 처리하는 고가용성 솔루션을 설계해야 합니다. 회사는 새로운 솔루션으로 전환하는 동안 가동 중지 시간을 최소화해야 합니다.<br><br>솔루션 설계자는 이러한 요구 사항을 충족하기 위해 어떤 단계를 수행해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Delete the existing ALB. Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Create a new ALB. Attach the Auto Scaling group to the new ALB. Attach the existing EC2 instances to the Auto Scaling group.`, ko: `기존 ALB를 삭제합니다. 웹 애플리케이션 트래픽을 처리하도록 구성된 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹에 새 시작 템플릿을 연결합니다. 새 ALB를 생성합니다. Auto Scaling 그룹을 새 ALB에 연결합니다. 기존 EC2 인스턴스를 Auto Scaling 그룹에 연결합니다.` },
      { k: 'B', en: `Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Attach the Auto Scaling group to the existing ALB. Attach the existing EC2 instances to the Auto Scaling group.`, ko: `웹 애플리케이션 트래픽을 처리하도록 구성된 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹에 새 시작 템플릿을 연결합니다. Auto Scaling 그룹을 기존 ALB에 연결합니다. 기존 EC2 인스턴스를 Auto Scaling 그룹에 연결합니다.` },
      { k: 'C', en: `Delete the existing ALB and the EC2 instances. Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Create a new ALB. Attach the Auto Scaling group to the new ALB. Wait for the Auto Scaling group to launch the minimum number of EC2 instances.`, ko: `기존 ALB 및 EC2 인스턴스를 삭제합니다. 웹 애플리케이션 트래픽을 처리하도록 구성된 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹에 새 시작 템플릿을 연결합니다. 새 ALB를 생성합니다. Auto Scaling 그룹을 새 ALB에 연결합니다. Auto Scaling 그룹이 최소 수의 EC2 인스턴스를 시작할 때까지 기다립니다.` },
      { k: 'D', en: `Create an Auto Scaling group that is configured to handle the web application traffic. Attach a new launch template to the Auto Scaling group. Attach the Auto Scaling group to the existing ALB. Wait for the existing ALB to register the existing EC2 instances with the Auto Scaling group.`, ko: `웹 애플리케이션 트래픽을 처리하도록 구성된 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹에 새 시작 템플릿을 연결합니다. 기존 ALB에 Auto Scaling 그룹을 연결합니다. 기존 ALB가 기존 EC2 인스턴스를 Auto Scaling 그룹에 등록할 때까지 기다립니다.` },
    ],
    answer: ['B'],
    vote: '94% B',
    explain: `<p><span class="mark-ok">✅ B — 기존 ALB 유지 + ASG 생성 + 기존 EC2 인스턴스 ASG에 연결</span></p>
<p>가동 중지 시간 최소화를 위해 <strong>기존 ALB를 삭제하지 않습니다.</strong> 새 ASG를 생성하고 기존 ALB에 연결하면 트래픽 처리가 지속됩니다. 기존 EC2 인스턴스를 ASG에 연결하면 현재 인스턴스도 ASG의 관리 하에 들어가며, ASG의 상태 확인으로 장애 인스턴스를 자동으로 교체합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — 기존 ALB를 삭제하면 새 ALB 프로비저닝 및 DNS 전파 시간 동안 가동 중지 시간이 발생합니다. "가동 중지 시간 최소화" 요구 사항에 위배됩니다.</p>
<p><span class="mark-no">❌ D</span> — ALB는 자동으로 기존 EC2 인스턴스를 ASG에 등록하지 않습니다. 기존 인스턴스를 ASG에 수동으로 연결(attach)해야 합니다. D의 "기다린다"는 실제로 일어나지 않습니다.</p>`,
    disc: [
      { ans: 'B (94%)', txt: 'ALB 삭제는 가동 중지 발생(A/C 탈락). D는 ALB가 EC2를 ASG에 자동 등록하지 않아 오류. B만이 기존 ALB 유지 + ASG 생성 + 기존 EC2 연결로 무중단 전환.' }
    ]
  },
  {
    n: 269,
    en: `A company wants to optimize AWS data-transfer costs and compute costs across developer accounts within the company's organization in AWS Organizations. Developers can configure VPCs and launch Amazon EC2 instances in a single AWS Region. The EC2 instances retrieve approximately 1 TB of data each day from Amazon S3.<br><br>The developer activity leads to excessive monthly data-transfer charges and NAT gateway processing charges between EC2 instances and S3 buckets, along with high compute costs. The company wants to proactively enforce approved architectural patterns for any EC2 instance and VPC infrastructure that developers deploy within the AWS accounts. The company does not want this enforcement to negatively affect the speed at which the developers can perform their tasks.<br><br>Which solution will meet these requirements MOST cost-effectively?`,
    ko: `회사는 AWS Organizations 내 개발자 계정 전체에서 AWS 데이터 전송 비용과 컴퓨팅 비용을 최적화하려고 합니다. 개발자는 단일 AWS 리전에서 VPC를 구성하고 Amazon EC2 인스턴스를 시작할 수 있습니다. EC2 인스턴스는 Amazon S3에서 매일 약 1TB의 데이터를 검색합니다.<br><br>개발자 활동으로 인해 EC2 인스턴스와 S3 버킷 간의 과도한 월별 데이터 전송 요금과 NAT 게이트웨이 처리 요금이 발생하고 컴퓨팅 비용도 높아집니다. 회사는 개발자가 AWS 계정 내에 배포하는 모든 EC2 인스턴스 및 VPC 인프라에 대해 승인된 아키텍처 패턴을 사전에 적용하기를 원합니다. 회사는 이러한 시행이 개발자가 작업을 수행할 수 있는 속도에 부정적인 영향을 미치는 것을 원하지 않습니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create SCPs to prevent developers from launching unapproved EC2 instance types. Provide the developers with an AWS CloudFormation template to deploy an approved VPC configuration with S3 interface endpoints. Scope the developers' IAM permissions so that the developers can launch VPC resources only with CloudFormation.`, ko: `개발자가 승인되지 않은 EC2 인스턴스 유형을 시작하지 못하도록 SCP를 생성합니다. 개발자에게 S3 인터페이스 엔드포인트와 함께 승인된 VPC 구성을 배포하는 AWS CloudFormation 템플릿을 제공합니다. 개발자가 CloudFormation을 통해서만 VPC 리소스를 시작할 수 있도록 IAM 권한 범위를 지정합니다.` },
      { k: 'B', en: `Create a daily forecasted budget with AWS Budgets to monitor EC2 compute costs and S3 data-transfer costs across the developer accounts. When the forecasted cost is 75% of the actual budget cost, send an alert to the developer teams. If the actual budget cost is 100%, create a budget action to terminate the developers' EC2 instances and VPC infrastructure.`, ko: `AWS Budgets를 사용하여 일일 예측 예산을 생성하여 개발자 계정 전체의 EC2 컴퓨팅 비용과 S3 데이터 전송 비용을 모니터링합니다. 예상 비용이 실제 예산 비용의 75%이면 개발자팀에 알림을 보냅니다. 실제 예산 비용이 100%인 경우 개발자의 EC2 인스턴스 및 VPC 인프라를 종료하는 예산 작업을 생성합니다.` },
      { k: 'C', en: `Create an AWS Service Catalog portfolio that users can use to create an approved VPC configuration with S3 gateway endpoints and approved EC2 instances. Share the portfolio with the developer accounts. Configure an AWS Service Catalog launch constraint to use an approved IAM role. Scope the developers' IAM permissions to allow access only to AWS Service Catalog.`, ko: `사용자가 S3 게이트웨이 엔드포인트 및 승인된 EC2 인스턴스로 승인된 VPC 구성을 생성하는 데 사용할 수 있는 AWS Service Catalog 포트폴리오를 생성합니다. 개발자 계정과 포트폴리오를 공유하세요. 승인된 IAM 역할을 사용하도록 AWS Service Catalog 시작 제약 조건을 구성합니다. AWS Service Catalog에 대한 액세스만 허용하도록 개발자의 IAM 권한 범위를 지정합니다.` },
      { k: 'D', en: `Create and deploy AWS Config rules to monitor the compliance of EC2 and VPC resources in the developer AWS accounts. If developers launch unapproved EC2 instances or if developers create VPCs without S3 gateway endpoints, perform a remediation action to terminate the unapproved resources.`, ko: `개발자 AWS 계정에서 EC2 및 VPC 리소스의 규정 준수를 모니터링하기 위해 AWS Config 규칙을 생성하고 배포합니다. 개발자가 승인되지 않은 EC2 인스턴스를 시작하거나 S3 게이트웨이 엔드포인트 없이 VPC를 생성하는 경우 수정 작업을 수행하여 승인되지 않은 리소스를 종료합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Service Catalog + S3 게이트웨이 엔드포인트</span></p>
<p><strong>비용 절감:</strong> S3 게이트웨이 엔드포인트를 사용하면 EC2↔S3 트래픽이 인터넷이나 NAT 게이트웨이를 통하지 않아 데이터 전송 비용과 NAT 게이트웨이 처리 비용이 0이 됩니다. 게이트웨이 엔드포인트는 추가 비용이 없습니다.</p>
<p><strong>사전 적용 + 개발자 속도 유지:</strong> Service Catalog 포트폴리오에 승인된 패턴을 포함하면 개발자가 승인된 구성을 셀프 서비스로 빠르게 배포할 수 있어 작업 속도에 영향을 주지 않습니다. 시작 제약 조건으로 승인된 IAM 역할이 프로비저닝을 수행합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFormation을 통해서만 리소스 생성을 허용하면 개발자의 자율성이 크게 제한됩니다. 또한 SCP만으로는 VPC 구성(S3 게이트웨이 엔드포인트 포함)을 강제할 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — AWS Budgets는 사후 모니터링 및 알림이므로 비용이 이미 발생한 후 조치합니다. 사전 적용(proactively enforce) 요구 사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Config는 생성 후 규정 준수를 감지합니다. 이미 생성된 리소스를 종료하는 것은 개발자 작업 속도에 부정적 영향을 줍니다. 사전 적용이 아닙니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'Service Catalog = 승인된 패턴 사전 적용 + 개발자 셀프 서비스(속도 유지). S3 게이트웨이 엔드포인트로 EC2↔S3 비용 제거. B/D는 사후 조치로 사전 적용 불가. A는 개발자 속도 저하.' }
    ]
  },
  {
    n: 270,
    en: `A company is expanding. The company plans to separate its resources into hundreds of different AWS accounts in multiple AWS Regions. A solutions architect must recommend a solution that denies access to any operations outside of specifically designated Regions.<br><br>Which solution will meet these requirements?`,
    ko: `회사가 확장되고 있습니다. 이 회사는 리소스를 여러 AWS 리전에 있는 수백 개의 서로 다른 AWS 계정으로 분리할 계획입니다. 솔루션 설계자는 특별히 지정된 지역 외부의 모든 작업에 대한 액세스를 거부하는 솔루션을 권장해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create IAM roles for each account. Create IAM policies with conditional allow permissions that include only approved Regions for the accounts.`, ko: `각 계정에 대한 IAM 역할을 생성합니다. 계정에 대해 승인된 리전만 포함하는 조건부 허용 권한이 있는 IAM 정책을 생성합니다.` },
      { k: 'B', en: `Create an organization in AWS Organizations. Create IAM users for each account. Attach a policy to each user to block access to Regions where an account cannot deploy infrastructure.`, ko: `AWS Organizations에서 조직을 생성합니다. 각 계정에 대해 IAM 사용자를 생성합니다. 계정이 인프라를 배포할 수 없는 지역에 대한 액세스를 차단하려면 각 사용자에게 정책을 연결하세요.` },
      { k: 'C', en: `Launch an AWS Control Tower landing zone. Create OUs and attach SCPs that deny access to run services outside of the approved Regions.`, ko: `AWS Control Tower 랜딩 존을 시작합니다. OU를 생성하고 승인된 지역 외부의 서비스 실행에 대한 액세스를 거부하는 SCP를 연결합니다.` },
      { k: 'D', en: `Enable AWS Security Hub in each account. Create controls to specify the Regions where an account can deploy infrastructure.`, ko: `각 계정에서 AWS Security Hub를 활성화합니다. 계정이 인프라를 배포할 수 있는 지역을 지정하는 컨트롤을 만듭니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Control Tower + SCP로 특정 리전 외 접근 거부</span></p>
<p>수백 개의 AWS 계정을 관리할 때 <strong>AWS Control Tower</strong>는 랜딩 존을 통해 다중 계정 환경을 일관되게 설정합니다. OU를 생성하고 특정 리전 외부에서의 서비스 실행을 Deny하는 SCP를 연결하면 조직의 모든 계정에 일관적으로 적용됩니다.</p>
<p>SCP는 IAM 정책보다 상위에 적용되어 루트(root) 사용자를 포함한 모든 주체에 강제됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 각 계정마다 IAM 역할과 정책을 수동으로 생성하는 것은 수백 개 계정에서 극히 비효율적이고 일관성 유지가 어렵습니다.</p>
<p><span class="mark-no">❌ B</span> — 각 사용자에게 개별 정책을 연결하는 것은 수백 개 계정의 수많은 사용자에게 반복적인 작업이 필요합니다. 또한 루트 사용자는 IAM 사용자 정책의 영향을 받지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Security Hub는 보안 발견 사항 집계 및 모니터링 서비스입니다. 리전 액세스를 사전에 차단하는 기능이 없습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'Control Tower = 다중 계정 거버넌스 표준. SCP Deny로 특정 리전 외 서비스 실행 차단. A/B는 계정/사용자별 개별 설정으로 수백 계정에 비효율. D의 Security Hub는 모니터링 전용.' }
    ]
  },
];