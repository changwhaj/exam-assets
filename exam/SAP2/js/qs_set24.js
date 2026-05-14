window.QS_SET24 = [
  {
    n: 231,
    en: `A company has an on-premises Microsoft SQL Server database that writes a nightly 200 GB export to a local drive. The company wants to move the backups to more robust cloud storage on Amazon S3. The company has set up a 10 Gbps AWS Direct Connect connection between the on-premises data center and AWS.<br><br>Which solution meets these requirements MOST cost-effectively?`,
    ko: `회사에는 야간에 로컬 드라이브에 200GB 내보내기를 쓰는 온프레미스 Microsoft SQL Server 데이터베이스가 있습니다. 회사는 백업을 Amazon S3의 더욱 강력한 클라우드 스토리지로 옮기기를 원합니다. 회사는 온프레미스 데이터 센터와 AWS 간에 10Gbps AWS Direct Connect 연결을 설정했습니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a new S3 bucket. Deploy an AWS Storage Gateway file gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share.`, ko: `새 S3 버킷을 생성합니다. Direct Connect 연결에 연결된 VPC 내에 AWS Storage Gateway 파일 게이트웨이를 배포합니다. 새 SMB 파일 공유를 만듭니다. 야간 데이터베이스 내보내기를 새 SMB 파일 공유에 기록합니다.` },
      { k: 'B', en: `Create an Amazon FSx for Windows File Server Single-AZ file system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable nightly backups.`, ko: `Direct Connect 연결에 연결된 VPC 내에 Windows 파일 서버 단일 AZ 파일 시스템용 Amazon FSx를 생성합니다. 새 SMB 파일 공유를 만듭니다. Amazon FSx 파일 시스템의 SMB 파일 공유에 야간 데이터베이스 내보내기를 기록합니다. 야간 백업을 활성화합니다.` },
      { k: 'C', en: `Create an Amazon FSx for Windows File Server Multi-AZ file system within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to an SMB file share on the Amazon FSx file system. Enable nightly backups.`, ko: `Direct Connect 연결에 연결된 VPC 내에서 Windows 파일 서버 다중 AZ 파일 시스템용 Amazon FSx를 생성합니다. 새 SMB 파일 공유를 만듭니다. Amazon FSx 파일 시스템의 SMB 파일 공유에 야간 데이터베이스 내보내기를 기록합니다. 야간 백업을 활성화합니다.` },
      { k: 'D', en: `Create a new S3 bucket. Deploy an AWS Storage Gateway volume gateway within the VPC that is connected to the Direct Connect connection. Create a new SMB file share. Write nightly database exports to the new SMB file share on the volume gateway, and automate copies of this data to an S3 bucket.`, ko: `새 S3 버킷을 생성합니다. Direct Connect 연결에 연결된 VPC 내에 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다. 새 SMB 파일 공유를 만듭니다. 볼륨 게이트웨이의 새 SMB 파일 공유에 야간 데이터베이스 내보내기를 작성하고 이 데이터를 S3 버킷에 자동으로 복사합니다.` },
    ],
    answer: ['A'],
    vote: '93% A',
    explain: `<p><span class="mark-ok">✅ A — Storage Gateway 파일 게이트웨이 + S3</span></p>
<p>AWS Storage Gateway <strong>파일 게이트웨이</strong>는 SMB(및 NFS) 파일 공유를 Amazon S3에 직접 매핑합니다. 온프레미스 SQL Server가 SMB 공유에 파일을 쓰면 데이터가 Direct Connect를 통해 S3 객체로 자동 저장됩니다. AWS 공식 문서에서도 SQL Server 및 Oracle 데이터베이스 백업을 S3로 옮기는 데 S3 파일 게이트웨이를 권장합니다.</p>
<p>백엔드가 S3이므로 FSx보다 스토리지 비용이 저렴하고, 볼륨 게이트웨이(D)보다 구성이 단순합니다.</p>
<p><a href="https://aws.amazon.com/storagegateway/features/#Gateway_Types" target="_blank">AWS 공식 문서 - Storage Gateway 유형</a></p>`,
    wrong: `<p><span class="mark-no">❌ B, C</span> — Amazon FSx for Windows File Server는 완전 관리형 Windows 파일 시스템으로 SQL Server 백업 저장소로는 과잉 사양이며, S3보다 비용이 높습니다. 단순히 백업 파일을 클라우드에 보관하는 목적에는 S3가 더 비용 효율적입니다.</p>
<p><span class="mark-no">❌ D</span> — 볼륨 게이트웨이는 <strong>iSCSI 블록 스토리지</strong> 인터페이스를 제공하며 SMB 파일 공유를 직접 생성하지 않습니다. 파일 게이트웨이가 SMB 공유를 S3에 직접 매핑하는 올바른 도구입니다.</p>`,
    disc: [
      { ans: 'A (93%)', txt: '파일 게이트웨이 = SMB/NFS → S3 직접 매핑. 볼륨 게이트웨이 = iSCSI 블록 스토리지. AWS 공식 문서에서 SQL Server 백업 → S3에 파일 게이트웨이를 권장. FSx는 비용 과다.' }
    ]
  },
  {
    n: 232,
    en: `A company needs to establish a connection from its on-premises data center to AWS. The company needs to connect all of its VPCs that are located in different AWS Regions with transitive routing capabilities between VPC networks. The company also must reduce network outbound traffic costs, increase bandwidth throughput, and provide a consistent network experience for end users.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 온프레미스 데이터 센터에서 AWS로 연결을 설정해야 합니다. 회사는 VPC 네트워크 간의 전이적 라우팅 기능을 사용하여 다양한 AWS 리전에 있는 모든 VPC를 연결해야 합니다. 또한 회사는 네트워크 아웃바운드 트래픽 비용을 줄이고, 대역폭 처리량을 늘리며, 최종 사용자에게 일관된 네트워크 경험을 제공해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS Site-to-Site VPN connection between the on-premises data center and a new central VPC. Create VPC peering connections that initiate from the central VPC to all other VPCs.`, ko: `온프레미스 데이터 센터와 새로운 중앙 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다. 중앙 VPC에서 다른 모든 VPC로 시작되는 VPC 피어링 연결을 생성합니다.` },
      { k: 'B', en: `Create an AWS Direct Connect connection between the on-premises data center and AWS. Provision a transit VIF, and connect it to a Direct Connect gateway. Connect the Direct Connect gateway to all the other VPCs by using a transit gateway in each Region.`, ko: `온프레미스 데이터 센터와 AWS 간에 AWS Direct Connect 연결을 생성합니다. 전송 VIF를 프로비저닝하고 이를 Direct Connect 게이트웨이에 연결합니다. 각 리전의 전송 게이트웨이를 사용하여 Direct Connect 게이트웨이를 다른 모든 VPC에 연결합니다.` },
      { k: 'C', en: `Create an AWS Site-to-Site VPN connection between the on-premises data center and a new central VPC. Use a transit gateway with dynamic routing. Connect the transit gateway to all other VPCs.`, ko: `온프레미스 데이터 센터와 새로운 중앙 VPC 간에 AWS Site-to-Site VPN 연결을 생성합니다. 동적 라우팅이 포함된 전송 게이트웨이를 사용합니다. Transit Gateway를 다른 모든 VPC에 연결합니다.` },
      { k: 'D', en: `Create an AWS Direct Connect connection between the on-premises data center and AWS. Establish an AWS Site-to-Site VPN connection between all VPCs in each Region. Create VPC peering connections that initiate from the central VPC to all other VPCs.`, ko: `온프레미스 데이터 센터와 AWS 간에 AWS Direct Connect 연결을 생성합니다. 각 리전의 모든 VPC 간에 AWS Site-to-Site VPN 연결을 설정합니다. 중앙 VPC에서 다른 모든 VPC로 시작되는 VPC 피어링 연결을 생성합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Direct Connect + Transit VIF + Direct Connect Gateway + Transit Gateway</span></p>
<p><strong>대역폭 처리량 증가·일관된 네트워크 경험:</strong> Direct Connect는 전용 회선으로 최대 100Gbps까지 지원하며 인터넷 변동성 없이 일관된 지연 시간을 제공합니다. Site-to-Site VPN은 최대 1.25Gbps 제한이 있어 이 요건을 충족하지 못합니다.</p>
<p><strong>전이적 라우팅:</strong> Transit VIF → Direct Connect Gateway → 각 리전의 Transit Gateway → VPC 구조로 여러 리전의 VPC 간 전이적 라우팅을 제공합니다. VPC 피어링은 전이적 라우팅을 지원하지 않습니다.</p>
<p><a href="https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-aws-transit-gateway.html" target="_blank">AWS 공식 문서 - Direct Connect + Transit Gateway</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — VPC 피어링은 전이적 라우팅을 지원하지 않습니다(A→B→C 경로에서 A와 C는 직접 통신 불가). Site-to-Site VPN은 대역폭 처리량 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — Transit Gateway는 VPC 간 전이적 라우팅을 지원하지만, Site-to-Site VPN의 대역폭 제한(1.25Gbps) 때문에 대역폭·일관성 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — VPC 간 Site-to-Site VPN + VPC 피어링을 혼합하는 것은 불필요하게 복잡하며, VPC 피어링의 전이적 라우팅 미지원 문제를 해결하지 못합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'Direct Connect = 대역폭·일관성 충족. Transit VIF → DX GW → TGW 구조로 멀티 리전 VPC 전이적 라우팅. VPN은 1.25Gbps 제한으로 처리량 요건 미충족. VPC 피어링은 전이적 라우팅 불가.' }
    ]
  },
  {
    n: 233,
    en: `A company is migrating its development and production workloads to a new organization in AWS Organizations. The company has created a separate member account for development and a separate member account for production. Consolidated billing is linked to the management account. In the management account, a solutions architect needs to create an IAM user that can stop or terminate resources in both member accounts.<br><br>Which solution will meet this requirement?`,
    ko: `회사는 개발 및 생산 워크로드를 AWS Organizations의 새로운 조직으로 마이그레이션하고 있습니다. 회사는 개발용 회원 계정과 제작용 회원 계정을 별도로 개설하였습니다. 통합 결제는 마스터 계정에 연결됩니다. 마스터 계정에서 솔루션 아키텍트는 두 멤버 계정 모두에서 리소스를 중지하거나 종료할 수 있는 IAM 사용자를 생성해야 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an IAM user and a cross-account role in the management account. Configure the cross-account role with least privilege access to the member accounts.`, ko: `마스터 계정에서 IAM 사용자 및 교차 계정 역할을 생성합니다. 멤버 계정에 대한 최소 권한 액세스로 교차 계정 역할을 구성합니다.` },
      { k: 'B', en: `Create an IAM user in each member account. In the management account, create a cross-account role that has least privilege access. Grant the IAM users access to the cross-account role by using a trust policy.`, ko: `각 멤버 계정에 IAM 사용자를 생성합니다. 마스터 계정에서 최소 액세스 권한이 있는 교차 계정 역할을 생성합니다. 신뢰 정책을 사용하여 IAM 사용자에게 교차 계정 역할에 대한 액세스 권한을 부여합니다.` },
      { k: 'C', en: `Create an IAM user in the management account. In the member accounts, create an IAM group that has least privilege access. Add the IAM user from the management account to each IAM group in the member accounts.`, ko: `마스터 계정에서 IAM 사용자를 생성합니다. 멤버 계정에서 최소 액세스 권한이 있는 IAM 그룹을 생성합니다. 마스터 계정의 IAM 사용자를 멤버 계정의 각 IAM 그룹에 추가합니다.` },
      { k: 'D', en: `Create an IAM user in the management account. In the member accounts, create cross-account roles that have least privilege access. Grant the IAM user access to the roles by using a trust policy.`, ko: `마스터 계정에서 IAM 사용자를 생성합니다. 멤버 계정에서 최소 액세스 권한이 있는 교차 계정 역할을 생성합니다. 신뢰 정책을 사용하여 IAM 사용자에게 역할에 대한 액세스 권한을 부여합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — 관리 계정 IAM 사용자 + 멤버 계정 교차 계정 역할 + 신뢰 정책</span></p>
<p>교차 계정 액세스의 올바른 패턴은 다음과 같습니다. <strong>교차 계정 역할은 대상(멤버) 계정에 생성</strong>되고, 역할의 신뢰 정책에서 소스(관리) 계정의 IAM 사용자가 역할을 수임(AssumeRole)할 수 있도록 허용합니다. 관리 계정의 IAM 사용자는 sts:AssumeRole 권한으로 각 멤버 계정의 역할을 전환하여 리소스를 중지·종료합니다.</p>
<p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html" target="_blank">AWS 공식 문서 - 교차 계정 역할 튜토리얼</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 교차 계정 역할을 관리 계정에 생성하는 것은 잘못된 방향입니다. 역할은 접근하려는 <strong>대상 계정(멤버 계정)</strong>에 있어야 하며, 소스 계정(관리 계정)의 주체가 역할을 수임합니다.</p>
<p><span class="mark-no">❌ B</span> — 각 멤버 계정에 별도 IAM 사용자를 생성하면 단일 사용자 요구 사항에 맞지 않습니다. 또한 관리 계정의 역할을 멤버 계정 사용자에게 부여하는 방향도 올바르지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — IAM 그룹은 동일 계정의 사용자를 묶는 기능입니다. <strong>다른 계정의 IAM 사용자를 IAM 그룹에 추가할 수 없습니다.</strong> 이는 AWS IAM의 기본 제약입니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: '교차 계정 역할은 대상(멤버) 계정에 생성, 신뢰 정책으로 관리 계정 사용자가 수임. C는 다른 계정 사용자를 IAM 그룹에 추가 불가. A는 역할 위치 오류.' }
    ]
  },
  {
    n: 234,
    en: `A company wants to use AWS for disaster recovery for an on-premises application. The company has hundreds of Windows-based servers that run the application. All the servers mount a common share.<br><br>The company has an RTO of 15 minutes and an RPO of 5 minutes. The solution must support native failover and fallback capabilities.<br><br>Which solution will meet these requirements MOST cost-effectively?`,
    ko: `회사는 온프레미스 애플리케이션의 재해 복구를 위해 AWS를 사용하려고 합니다. 이 회사는 애플리케이션을 실행하는 수백 대의 Windows 기반 서버를 보유하고 있습니다. 모든 서버는 공통 공유를 마운트합니다.<br><br>이 회사의 RTO는 15분, RPO는 5분입니다. 솔루션은 기본 장애 조치 및 대체 기능을 지원해야 합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS Storage Gateway File Gateway. Schedule daily Windows server backups. Save the data to Amazon S3. During a disaster, recover the on-premises servers from the backup. During tailback, run the on-premises servers on Amazon EC2 instances.`, ko: `AWS Storage Gateway 파일 게이트웨이를 생성합니다. 매일 Windows 서버 백업을 예약합니다. 데이터를 Amazon S3에 저장합니다. 재해 발생 시 백업에서 온프레미스 서버를 복구합니다. 테일백 중에 Amazon EC2 인스턴스에서 온프레미스 서버를 실행합니다.` },
      { k: 'B', en: `Create a set of AWS CloudFormation templates to create infrastructure. Replicate all data to Amazon Elastic File System (Amazon EFS) by using AWS DataSync. During a disaster, use AWS CodePipeline to deploy the templates to restore the on-premises servers. Fail back the data by using DataSync.`, ko: `AWS CloudFormation 템플릿 세트를 생성하여 인프라를 생성합니다. AWS DataSync를 사용하여 모든 데이터를 Amazon EFS에 복제합니다. 재해 발생 시 AWS CodePipeline을 사용하여 온프레미스 서버를 복원하는 템플릿을 배포합니다. DataSync를 사용하여 데이터를 장애 복구합니다.` },
      { k: 'C', en: `Create an AWS Cloud Development Kit (AWS CDK) pipeline to stand up a multi-site active-active environment on AWS. Replicate data into Amazon S3 by using the s3 sync command. During a disaster, swap DNS endpoints to point to AWS. Fail back the data by using the s3 sync command.`, ko: `AWS CDK 파이프라인을 생성하여 AWS에서 다중 사이트 Active-Active 환경을 구축합니다. s3 sync 명령을 사용하여 데이터를 Amazon S3에 복제합니다. 재해가 발생하면 DNS 엔드포인트를 AWS를 가리키도록 교체하세요. s3 sync 명령을 사용하여 데이터를 장애 복구합니다.` },
      { k: 'D', en: `Use AWS Elastic Disaster Recovery to replicate the on-premises servers. Replicate data to an Amazon FSx for Windows File Server file system by using AWS DataSync. Mount the file system to AWS servers. During a disaster, fail over the on-premises servers to AWS. Fail back to new or existing servers by using Elastic Disaster Recovery.`, ko: `AWS Elastic Disaster Recovery를 사용하여 온프레미스 서버를 복제합니다. AWS DataSync를 사용하여 Amazon FSx for Windows File Server 파일 시스템에 데이터를 복제합니다. 파일 시스템을 AWS 서버에 탑재합니다. 재해 발생 시 온프레미스 서버를 AWS로 장애 조치합니다. Elastic Disaster Recovery를 사용하여 신규 또는 기존 서버로 장애 복구합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — AWS Elastic Disaster Recovery + DataSync + FSx for Windows</span></p>
<p><strong>RTO 15분·RPO 5분·네이티브 장애 조치/대체:</strong> AWS Elastic Disaster Recovery(EDR)는 온프레미스 서버를 지속적으로 복제하여 RPO를 분 단위로 달성하고, 장애 시 수분 내에 AWS EC2로 장애 조치(RTO 충족)합니다. 복구 후 원래 서버로 장애 대체(fallback)도 네이티브로 지원합니다.</p>
<p><strong>공통 파일 공유:</strong> 수백 대의 Windows 서버가 공통 SMB 공유를 마운트하므로 <strong>FSx for Windows File Server</strong>가 적합합니다. DataSync로 온프레미스 공유 데이터를 FSx로 지속 복제하면 RPO 5분을 충족합니다. EFS는 Windows 서버에서 마운트할 수 없습니다.</p>
<p><a href="https://aws.amazon.com/blogs/storage/recovering-network-file-shares-with-aws-elastic-disaster-recovery-and-aws-datasync/" target="_blank">AWS 공식 블로그 - EDR + DataSync로 네트워크 파일 공유 복구</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 일일 백업은 RPO 5분을 절대 충족하지 못합니다. 백업에서 복구하는 시간도 RTO 15분을 초과합니다.</p>
<p><span class="mark-no">❌ B</span> — EFS는 <strong>Windows 서버에서 마운트할 수 없습니다</strong>(Linux 전용). CodePipeline으로 인프라를 재배포하는 과정도 RTO 15분 내에 완료하기 어렵습니다.</p>
<p><span class="mark-no">❌ C</span> — Active-Active 환경은 비용이 매우 높고, s3 sync 기반 데이터 복제는 RPO 5분 보장이 어렵습니다. 또한 Windows 서버의 SMB 공유를 S3로 직접 교체하는 것은 애플리케이션 수정을 요구합니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'EDR로 서버 지속 복제(RPO 5분 충족), FSx for Windows로 SMB 공유 복제(Windows 전용). B의 EFS는 Windows 마운트 불가. A의 일일 백업은 RPO 미충족. EDR의 네이티브 fallback이 핵심.' }
    ]
  },
  {
    n: 235,
    en: `A company has built a high performance computing (HPC) cluster in AWS for a tightly coupled workload that generates a large number of shared files stored in Amazon EFS. The cluster was performing well when the number of Amazon EC2 instances in the cluster was 100. However, when the company increased the cluster size to 1,000 EC2 instances, overall performance was well below expectations.<br><br>Which collection of design choices should a solutions architect make to achieve the maximum performance from the HPC cluster? (Choose three.)`,
    ko: `한 회사가 Amazon EFS에 저장된 대량의 공유 파일을 생성하는 긴밀하게 결합된 워크로드를 위해 AWS에 고성능 컴퓨팅(HPC) 클러스터를 구축했습니다. 클러스터의 Amazon EC2 인스턴스 수가 100개일 때는 클러스터 성능이 좋았습니다. 그러나 회사가 클러스터 크기를 EC2 인스턴스 1,000개로 늘렸을 때 전체 성능은 기대보다 훨씬 낮았습니다.<br><br>솔루션 아키텍트는 HPC 클러스터에서 최대 성능을 달성하기 위해 어떤 디자인 선택을 해야 합니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Ensure the HPC cluster is launched within a single Availability Zone.`, ko: `HPC 클러스터가 단일 가용 영역 내에서 시작되는지 확인하세요.` },
      { k: 'B', en: `Launch the EC2 instances and attach elastic network interfaces in multiples of four.`, ko: `EC2 인스턴스를 시작하고 탄력적 네트워크 인터페이스를 4의 배수로 연결합니다.` },
      { k: 'C', en: `Select EC2 instance types with an Elastic Fabric Adapter (EFA) enabled.`, ko: `EFA(Elastic Fabric Adapter)가 활성화된 EC2 인스턴스 유형을 선택합니다.` },
      { k: 'D', en: `Ensure the cluster is launched across multiple Availability Zones.`, ko: `클러스터가 여러 가용 영역에서 시작되는지 확인합니다.` },
      { k: 'E', en: `Replace Amazon EFS with multiple Amazon EBS volumes in a RAID array.`, ko: `Amazon EFS를 RAID 어레이의 여러 Amazon EBS 볼륨으로 교체합니다.` },
      { k: 'F', en: `Replace Amazon EFS with Amazon FSx for Lustre.`, ko: `Amazon EFS를 Lustre용 Amazon FSx로 교체합니다.` },
    ],
    answer: ['A', 'C', 'F'],
    vote: '88% ACF',
    explain: `<p><span class="mark-ok">✅ A — 단일 가용 영역 내 배포</span></p>
<p>HPC 클러스터는 인스턴스 간 지연 시간이 매우 중요합니다. 단일 AZ 내(특히 클러스터 배치 그룹 활용)에서 실행하면 AZ 간 네트워크 홉을 없애 최저 지연 시간을 달성합니다. 다중 AZ는 AZ 간 데이터 전송으로 성능이 저하됩니다.</p>
<p><span class="mark-ok">✅ C — EFA(Elastic Fabric Adapter) 활성화</span></p>
<p>EFA는 HPC 워크로드를 위한 전용 네트워크 인터페이스로, OS 우회(OS bypass) 기능으로 인스턴스 간 마이크로초 수준의 지연 시간과 고대역폭 통신을 지원합니다. 1,000개 인스턴스의 긴밀한 결합 워크로드에 필수적입니다.</p>
<p><span class="mark-ok">✅ F — Amazon FSx for Lustre</span></p>
<p>EFS는 범용 파일 시스템으로 수천 개 인스턴스의 HPC 워크로드에서 병목이 발생할 수 있습니다. FSx for Lustre는 HPC 전용 고성능 파일 시스템으로 수백만 IOPS와 수백 GB/s 처리량을 지원합니다.</p>
<p><a href="https://aws.amazon.com/hpc/efa/" target="_blank">AWS 공식 문서 - EFA</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — ENI를 4의 배수로 추가해도 HPC 인스턴스 간 통신 성능이 향상되지 않습니다. EFA가 고성능 MPI 통신을 위한 올바른 솔루션입니다.</p>
<p><span class="mark-no">❌ D</span> — 다중 AZ 배포는 고가용성을 위한 선택이지 성능 향상이 아닙니다. AZ 간 네트워크 지연이 추가되어 긴밀한 결합 워크로드 성능이 저하됩니다.</p>
<p><span class="mark-no">❌ E</span> — EBS는 단일 인스턴스에 연결되는 블록 스토리지입니다. RAID 어레이로 구성해도 수천 개 인스턴스가 공유하는 스토리지로 사용할 수 없습니다.</p>`,
    disc: [
      { ans: 'ACF (88%)', txt: 'A=단일 AZ로 인스턴스 간 지연 최소화, C=EFA로 초고속 MPI 통신, F=FSx for Lustre로 HPC 최적화 파일 시스템. D는 성능이 아닌 HA용, B와 E는 HPC 성능 향상에 무관.' }
    ]
  },
  {
    n: 236,
    en: `A company is designing an AWS Organizations structure. The company wants to standardize a process to apply tags across the entire organization. The company will require tags with specific values when a user creates a new resource. Each of the company's OUs will have unique tag values.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사가 AWS Organizations 구조를 설계하고 있습니다. 회사는 전체 조직에 태그를 적용하는 프로세스를 표준화하려고 합니다. 회사에서는 사용자가 새 리소스를 생성할 때 특정 값이 포함된 태그를 요구합니다. 회사의 각 OU에는 고유한 태그 값이 있습니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use an SCP to deny the creation of resources that do not have the required tags. Create a tag policy that includes the tag values that the company has assigned to each OU. Attach the tag policies to the OUs.`, ko: `필수 태그가 없는 리소스 생성을 거부하려면 SCP를 사용하십시오. 회사가 각 OU에 할당한 태그 값을 포함하는 태그 정책을 생성합니다. 태그 정책을 OU에 연결합니다.` },
      { k: 'B', en: `Use an SCP to deny the creation of resources that do not have the required tags. Create a tag policy that includes the tag values that the company has assigned to each OU. Attach the tag policies to the organization's management account.`, ko: `SCP를 사용하여 필수 태그가 없는 리소스 생성을 거부합니다. 회사가 각 OU에 할당한 태그 값을 포함하는 태그 정책을 생성합니다. 태그 정책을 조직의 마스터 계정에 연결합니다.` },
      { k: 'C', en: `Use an SCP to allow the creation of resources only when the resources have the required tags. Create a tag policy that includes the tag values that the company has assigned to each OU. Attach the tag policies to the OUs.`, ko: `SCP를 사용하여 리소스에 필수 태그가 있는 경우에만 리소스 생성을 허용합니다. 회사가 각 OU에 할당한 태그 값을 포함하는 태그 정책을 생성합니다. 태그 정책을 OU에 연결합니다.` },
      { k: 'D', en: `Use an SCP to deny the creation of resources that do not have the required tags. Define the list of tags. Attach the SCP to the OUs.`, ko: `SCP를 사용하여 필수 태그가 없는 리소스 생성을 거부합니다. 태그 목록을 정의합니다. SCP를 OU에 연결합니다.` },
    ],
    answer: ['A'],
    vote: '82% A',
    explain: `<p><span class="mark-ok">✅ A — SCP(생성 거부) + 태그 정책을 각 OU에 연결</span></p>
<p><strong>OU별 고유 태그 값:</strong> 각 OU에 고유한 태그 값이 있으므로 태그 정책을 OU 수준에 개별 연결해야 합니다. 관리 계정(B)에 연결하면 단일 정책이 모든 OU에 적용되어 OU별 고유 값을 정의할 수 없습니다.</p>
<p><strong>SCP로 태그 없는 리소스 생성 거부:</strong> SCP의 Deny 조건으로 필수 태그가 없는 리소스 생성 API를 차단합니다. <strong>태그 정책은 태그 표준화를 정의</strong>하고 SCP는 강제 적용합니다.</p>
<p><a href="https://aws.amazon.com/blogs/mt/implement-aws-resource-tagging-strategy-using-aws-tag-policies-and-service-control-policies-scps/" target="_blank">AWS 공식 블로그 - 태그 정책 + SCP로 태깅 전략 구현</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 태그 정책을 관리 계정에만 연결하면 조직 전체에 동일한 태그 정책이 적용됩니다. OU별로 <strong>고유한 태그 값</strong>을 설정할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — SCP는 기본적으로 명시적 Allow 방식으로 사용하지 않습니다. SCP의 올바른 사용 패턴은 루트 계정의 FullAccess를 상속받고 SCP로 특정 작업을 Deny하는 것입니다. "Allow만" 방식은 의도치 않은 차단을 유발할 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — SCP에만 태그 목록을 정의하고 태그 정책을 별도로 사용하지 않으면 OU별 고유 태그 값 관리가 어렵습니다. 태그 정책과 SCP의 조합이 모범 사례입니다.</p>`,
    disc: [
      { ans: 'A (82%)', txt: '"각 OU에 고유한 태그 값" → 태그 정책을 OU별 개별 연결(A). 관리 계정 연결(B)은 단일 정책으로 모든 OU 적용되어 고유 값 불가. SCP Deny로 미태그 리소스 생성 차단.' }
    ]
  },
  {
    n: 237,
    en: `A company has more than 10,000 sensors that send data to an on-premises Apache Kafka server by using the Message Queuing Telemetry Transport (MQTT) protocol. The on-premises Kafka server transforms the data and then stores the results as objects in an Amazon S3 bucket.<br><br>Recently, the Kafka server crashed. The company lost sensor data while the server was being restored. A solutions architect must create a new design on AWS that is highly available and scalable to prevent a similar occurrence.<br><br>Which solution will meet these requirements?`,
    ko: `회사에는 MQTT(Message Queuing Telemetry Transport) 프로토콜을 사용하여 온프레미스 Apache Kafka 서버에 데이터를 보내는 10,000개 이상의 센서가 있습니다. 온프레미스 Kafka 서버는 데이터를 변환한 다음 결과를 Amazon S3 버킷에 객체로 저장합니다.<br><br>최근 Kafka 서버가 다운되었습니다. 서버를 복원하는 동안 회사에서 센서 데이터가 손실되었습니다. 솔루션 아키텍트는 유사한 발생을 방지하기 위해 가용성과 확장성이 뛰어난 새로운 설계를 AWS에서 생성해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Launch two Amazon EC2 instances to host the Kafka server in an active/standby configuration across two Availability Zones. Create a domain name in Amazon Route 53. Create a Route 53 failover policy. Route the sensors to send the data to the domain name.`, ko: `두 개의 Amazon EC2 인스턴스를 시작하여 두 개의 가용 영역에 걸쳐 활성/대기 구성으로 Kafka 서버를 호스팅합니다. Amazon Route 53에서 도메인 이름을 생성합니다. Route 53 장애 조치 정책을 생성합니다. 데이터를 도메인 이름으로 보내도록 센서를 라우팅합니다.` },
      { k: 'B', en: `Migrate the on-premises Kafka server to Amazon Managed Streaming for Apache Kafka (Amazon MSK). Create a Network Load Balancer (NLB) that points to the Amazon MSK broker. Enable NLB health checks. Route the sensors to send the data to the NLB.`, ko: `온프레미스 Kafka 서버를 Amazon MSK로 마이그레이션합니다. Amazon MSK 브로커를 가리키는 NLB를 생성합니다. NLB 상태 확인을 활성화합니다. 데이터를 NLB로 보내도록 센서를 라우팅합니다.` },
      { k: 'C', en: `Deploy AWS IoT Core, and connect it to an Amazon Kinesis Data Firehose delivery stream. Use an AWS Lambda function to handle data transformation. Route the sensors to send the data to AWS IoT Core.`, ko: `AWS IoT Core를 배포하고 Amazon Kinesis Data Firehose 전송 스트림에 연결합니다. AWS Lambda 함수를 사용하여 데이터 변환을 처리합니다. 데이터를 AWS IoT Core로 보내도록 센서를 라우팅합니다.` },
      { k: 'D', en: `Deploy AWS IoT Core, and launch an Amazon EC2 instance to host the Kafka server. Configure AWS IoT Core to send the data to the EC2 instance. Route the sensors to send the data to AWS IoT Core.`, ko: `AWS IoT Core를 배포하고 Amazon EC2 인스턴스를 시작하여 Kafka 서버를 호스팅합니다. 데이터를 EC2 인스턴스로 보내도록 AWS IoT Core를 구성합니다. 데이터를 AWS IoT Core로 보내도록 센서를 라우팅합니다.` },
    ],
    answer: ['C'],
    vote: '79% C',
    explain: `<p><span class="mark-ok">✅ C — AWS IoT Core + Kinesis Data Firehose + Lambda</span></p>
<p><strong>MQTT 프로토콜 지원:</strong> AWS IoT Core는 MQTT 프로토콜을 네이티브로 지원하는 완전 관리형 서비스입니다. 수천만 개의 디바이스 연결을 처리할 수 있어 고가용성·확장성 요건을 충족합니다.</p>
<p><strong>데이터 변환 + S3 저장:</strong> Kinesis Data Firehose는 S3로의 자동 전달을 지원하고, Lambda 함수로 데이터 변환(기존 Kafka의 역할)을 처리합니다. 서버 다운으로 인한 데이터 손실이 없습니다.</p>
<p>B(MSK)는 MQTT를 처리하려면 HiveMQ 등 추가 브로커가 필요하고, 데이터 변환 기능이 없습니다.</p>
<p><a href="https://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html" target="_blank">AWS 공식 문서 - IoT Core MQTT 지원</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2 두 대로 Active/Standby를 구성해도 단일 서버 장애 취약성을 근본적으로 해결하지 못합니다. 완전 관리형 서비스보다 운영 부담이 크고 확장성이 낮습니다.</p>
<p><span class="mark-no">❌ B</span> — Amazon MSK는 완전 관리형 Kafka이지만 <strong>MQTT 프로토콜을 기본 지원하지 않습니다.</strong> 또한 데이터 변환 기능이 없어 별도 처리 레이어가 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — IoT Core는 올바르지만 EC2에서 Kafka 서버를 운영하면 기존과 동일한 단일 장애 지점 문제가 발생합니다. 고가용성·확장성 요건을 충족하지 못합니다.</p>`,
    disc: [
      { ans: 'C (79%)', txt: 'IoT Core = MQTT 네이티브 지원 + 완전 관리형 HA/확장성. MSK(B)는 MQTT 미지원으로 추가 브로커 필요, 변환 기능 없음. D의 EC2 Kafka는 동일한 SPOF 문제.' }
    ]
  },
  {
    n: 238,
    en: `A company recently started hosting new application workloads in the AWS Cloud. The company is using Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) file systems, and Amazon RDS DB instances.<br><br>To meet regulatory and business requirements, the company must make the following changes for data backups:<br><br>• Backups must be retained based on custom daily, weekly, and monthly requirements.<br>• Backups must be replicated to at least one other AWS Region immediately after capture.<br>• The backup solution must provide a single source of backup status across the AWS environment.<br>• The backup solution must send immediate notifications upon failure of any resource backup.<br><br>Which combination of steps will meet these requirements with the LEAST amount of operational overhead? (Choose three.)`,
    ko: `회사는 최근 AWS 클라우드에서 새로운 애플리케이션 워크로드를 호스팅하기 시작했습니다. 회사는 Amazon EC2 인스턴스, Amazon EFS 파일 시스템 및 Amazon RDS DB 인스턴스를 사용하고 있습니다.<br><br>규정 및 비즈니스 요구 사항을 충족하기 위해 회사는 데이터 백업에 대해 다음과 같은 변경을 수행해야 합니다.<br><br>• 백업은 사용자 지정 일일, 주간 및 월간 요구 사항에 따라 유지되어야 합니다.<br>• 백업은 캡처 후 즉시 하나 이상의 다른 AWS 리전에 복제되어야 합니다.<br>• 백업 솔루션은 AWS 환경 전반에 걸쳐 백업 상태에 대한 단일 소스를 제공해야 합니다.<br>• 백업 솔루션은 리소스 백업 실패 시 즉시 알림을 보내야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Create an AWS Backup plan with a backup rule for each of the retention requirements.`, ko: `각 보존 요구 사항에 대한 백업 규칙을 사용하여 AWS Backup 계획을 생성합니다.` },
      { k: 'B', en: `Configure an AWS Backup plan to copy backups to another Region.`, ko: `백업을 다른 리전으로 복사하도록 AWS Backup 계획을 구성합니다.` },
      { k: 'C', en: `Create an AWS Lambda function to replicate backups to another Region and send notification if a failure occurs.`, ko: `백업을 다른 리전에 복제하고 오류가 발생하면 알림을 보내는 AWS Lambda 함수를 생성합니다.` },
      { k: 'D', en: `Add an Amazon Simple Notification Service (Amazon SNS) topic to the backup plan to send a notification for finished jobs that have any status except BACKUP_JOB_COMPLETED.`, ko: `BACKUP_JOB_COMPLETED를 제외한 모든 상태의 완료된 작업에 대한 알림을 보내려면 백업 계획에 Amazon SNS 주제를 추가합니다.` },
      { k: 'E', en: `Create an Amazon Data Lifecycle Manager (Amazon DLM) snapshot lifecycle policy for each of the retention requirements.`, ko: `각 보존 요구 사항에 대한 Amazon DLM 스냅샷 수명 주기 정책을 생성합니다.` },
      { k: 'F', en: `Set up RDS snapshots on each database.`, ko: `각 데이터베이스에 RDS 스냅샷을 설정합니다.` },
    ],
    answer: ['A', 'B', 'D'],
    vote: '100% ABD',
    explain: `<p><span class="mark-ok">✅ A — AWS Backup 계획 + 보존 규칙</span></p>
<p>AWS Backup 계획에 일일·주간·월간 보존 규칙을 각각 정의하면 EC2, EFS, RDS 모두를 단일 서비스로 통합 관리합니다. 백업 상태의 단일 소스(Single source of truth)를 제공합니다.</p>
<p><span class="mark-ok">✅ B — Backup 계획에서 리전 간 복사 구성</span></p>
<p>AWS Backup 계획의 복사 작업(copy action) 설정으로 백업 캡처 직후 다른 리전에 자동 복제됩니다. Lambda 없이 네이티브로 지원됩니다.</p>
<p><span class="mark-ok">✅ D — SNS 알림 (BACKUP_JOB_COMPLETED 제외 상태)</span></p>
<p>AWS Backup에 SNS 주제를 연결하고 <code>BACKUP_JOB_COMPLETED</code>를 제외한 상태(실패, 만료 등) 발생 시 알림을 보내도록 구성하면 백업 실패 시 즉각 알림이 전송됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — AWS Backup이 리전 간 복제를 기본 지원(B)하므로 Lambda로 직접 구현할 필요가 없습니다. 불필요한 운영 오버헤드입니다.</p>
<p><span class="mark-no">❌ E</span> — Amazon DLM은 <strong>EBS 스냅샷 및 EBS 기반 AMI에만</strong> 적용됩니다. EFS와 RDS 백업을 지원하지 않아 요구 사항을 완전히 충족하지 못합니다.</p>
<p><span class="mark-no">❌ F</span> — RDS 스냅샷을 개별 설정하면 EC2·EFS와 분리된 백업 관리가 필요합니다. AWS Backup이 RDS를 통합 관리하므로 중복 구성입니다.</p>`,
    disc: [
      { ans: 'ABD (100%)', txt: 'A=통합 보존 규칙, B=리전 간 복사(Lambda 불필요), D=SNS 알림(실패 감지). E의 DLM은 EBS 전용(EFS/RDS 미지원). F는 AWS Backup으로 통합 관리 가능해 중복.' }
    ]
  },
  {
    n: 239,
    en: `A company is developing a gene reporting device that will collect genomic information to assist researchers with collecting large samples of data from a diverse population. The device will push 8 KB of genomic data every second to a data platform that will need to process and analyze the data and provide information back to researchers. The data platform must meet the following requirements:<br><br>• Provide near-real-time analytics of the inbound genomic data<br>• Ensure the data is flexible, parallel, and durable<br>• Deliver results of processing to a data warehouse<br><br>Which strategy should a solutions architect use to meet these requirements?`,
    ko: `한 회사가 연구자들이 다양한 집단으로부터 대량의 데이터 샘플을 수집하는 데 도움이 되도록 게놈 정보를 수집하는 유전자 보고 장치를 개발하고 있습니다. 이 장치는 데이터를 처리 및 분석하고 연구자들에게 정보를 다시 제공해야 하는 데이터 플랫폼에 매초 8KB의 게놈 데이터를 푸시합니다. 데이터 플랫폼은 다음 요구 사항을 충족해야 합니다.<br><br>• 인바운드 게놈 데이터에 대한 거의 실시간 분석 제공<br>• 데이터의 유연성, 병렬성 및 내구성 보장<br>• 처리 결과를 데이터 웨어하우스에 전달<br><br>솔루션 아키텍트가 사용해야 하는 전략은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use Amazon Kinesis Data Firehose to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon RDS instance.`, ko: `Amazon Kinesis Data Firehose를 사용하여 인바운드 센서 데이터를 수집하고, Kinesis 클라이언트로 데이터를 분석하고, 결과를 Amazon RDS 인스턴스에 저장합니다.` },
      { k: 'B', en: `Use Amazon Kinesis Data Streams to collect the inbound sensor data, analyze the data with Kinesis clients, and save the results to an Amazon Redshift cluster using Amazon EMR.`, ko: `Amazon Kinesis Data Streams를 사용하여 인바운드 센서 데이터를 수집하고, Kinesis 클라이언트로 데이터를 분석하고, Amazon EMR을 사용하여 Amazon Redshift 클러스터에 결과를 저장합니다.` },
      { k: 'C', en: `Use Amazon S3 to collect the inbound device data, analyze the data from Amazon SQS with Kinesis, and save the results to an Amazon Redshift cluster.`, ko: `Amazon S3를 사용하여 인바운드 장치 데이터를 수집하고, Kinesis를 사용하여 Amazon SQS에서 데이터를 분석하고, 결과를 Amazon Redshift 클러스터에 저장합니다.` },
      { k: 'D', en: `Use an Amazon API Gateway to put requests into an Amazon SQS queue, analyze the data with an AWS Lambda function, and save the results to an Amazon Redshift cluster using Amazon EMR.`, ko: `Amazon API Gateway를 사용하여 Amazon SQS 대기열에 요청을 넣고, AWS Lambda 함수로 데이터를 분석하고, Amazon EMR을 사용하여 Amazon Redshift 클러스터에 결과를 저장합니다.` },
    ],
    answer: ['B'],
    vote: '94% B',
    explain: `<p><span class="mark-ok">✅ B — Kinesis Data Streams + Kinesis 클라이언트 분석 + Redshift</span></p>
<p><strong>거의 실시간 분석:</strong> Kinesis Data Streams는 밀리초 단위 지연 시간으로 데이터를 수집·처리합니다. Kinesis Client Library(KCL)를 사용하는 소비자 애플리케이션이 실시간으로 데이터를 분석합니다.</p>
<p><strong>유연성·병렬성·내구성:</strong> Kinesis Streams는 다수의 소비자가 동일 스트림을 병렬로 처리할 수 있고, 데이터를 24시간~365일 보존하여 내구성을 보장합니다.</p>
<p><strong>데이터 웨어하우스:</strong> Amazon Redshift는 AWS의 표준 데이터 웨어하우스 서비스입니다. A의 RDS는 OLTP 데이터베이스로 데이터 웨어하우스가 아닙니다.</p>
<p><a href="https://docs.aws.amazon.com/streams/latest/dev/introduction.html" target="_blank">AWS 공식 문서 - Kinesis Data Streams</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — RDS는 관계형 OLTP 데이터베이스로 <strong>데이터 웨어하우스가 아닙니다.</strong> 대용량 분석 워크로드에는 Redshift가 적합합니다. Firehose는 실시간 분석보다 배치 전달에 적합합니다.</p>
<p><span class="mark-no">❌ C</span> — S3는 실시간 스트리밍 수집에 적합하지 않습니다. "Kinesis를 사용하여 SQS에서 데이터 분석"이라는 설명은 기술적으로 잘못된 구성입니다.</p>
<p><span class="mark-no">❌ D</span> — API Gateway → SQS는 초당 8KB의 연속 스트리밍보다 요청/응답 패턴에 적합합니다. Lambda는 병렬 처리 한계와 실행 시간 제한이 있어 지속적 스트림 분석에 부적합합니다.</p>`,
    disc: [
      { ans: 'B (94%)', txt: 'Kinesis Streams = 실시간·병렬·내구성. Redshift = 데이터 웨어하우스(RDS 아님). A는 RDS가 웨어하우스 아님. C는 SQS+Kinesis 구성 오류. D는 스트리밍 수집에 부적합.' }
    ]
  },
  {
    n: 240,
    en: `A solutions architect needs to define a reference architecture for a solution for three-tier applications with web, application, and NoSQL data layers. The reference architecture must meet the following requirements:<br><br>• High availability within an AWS Region<br>• Able to fail over in 1 minute to another AWS Region for disaster recovery<br>• Provide the most efficient solution while minimizing the impact on the user experience<br><br>Which combination of steps will meet these requirements? (Choose three.)`,
    ko: `솔루션 아키텍트는 웹, 애플리케이션 및 NoSQL 데이터 계층이 있는 3계층 애플리케이션을 위한 솔루션의 참조 아키텍처를 정의해야 합니다. 참조 아키텍처는 다음 요구 사항을 충족해야 합니다.<br><br>• AWS 리전 내 고가용성<br>• 재해 복구를 위해 1분 안에 다른 AWS 리전으로 장애 조치 가능<br>• 사용자 경험에 미치는 영향을 최소화하면서 가장 효율적인 솔루션 제공<br><br>어떤 단계를 조합해야 이러한 요구 사항을 충족합니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Use an Amazon Route 53 weighted routing policy set to 100/0 across the two selected Regions. Set Time to Live (TTL) to 1 hour.`, ko: `선택한 두 리전에서 100/0으로 설정된 Amazon Route 53 가중치 라우팅 정책을 사용하십시오. TTL(Time to Live)을 1시간으로 설정합니다.` },
      { k: 'B', en: `Use an Amazon Route 53 failover routing policy for failover from the primary Region to the disaster recovery Region. Set Time to Live (TTL) to 30 seconds.`, ko: `기본 지역에서 재해 복구 지역으로의 장애 조치를 위해 Amazon Route 53 장애 조치 라우팅 정책을 사용합니다. TTL(Time to Live)을 30초로 설정합니다.` },
      { k: 'C', en: `Use a global table within Amazon DynamoDB so data can be accessed in the two selected Regions.`, ko: `선택한 두 리전에서 데이터에 액세스할 수 있도록 Amazon DynamoDB 내의 글로벌 테이블을 사용합니다.` },
      { k: 'D', en: `Back up data from an Amazon DynamoDB table in the primary Region every 60 minutes and then write the data to Amazon S3. Use S3 cross-Region replication to copy the data from the primary Region to the disaster recovery Region. Have a script import the data into DynamoDB in a disaster recovery scenario.`, ko: `60분마다 기본 리전의 Amazon DynamoDB 테이블에서 데이터를 백업한 다음 Amazon S3에 데이터를 씁니다. S3 교차 리전 복제를 사용하여 기본 리전의 데이터를 재해 복구 리전으로 복사합니다. 재해 복구 시나리오에서 스크립트를 통해 데이터를 DynamoDB로 가져오도록 합니다.` },
      { k: 'E', en: `Implement a hot standby model using Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use zonal Reserved Instances for the minimum number of servers and On-Demand Instances for any additional resources.`, ko: `리전의 여러 가용 영역에 걸쳐 웹 및 애플리케이션 계층에 대한 Auto Scaling 그룹을 사용하여 상시 대기 모델을 구현합니다. 최소 서버 수에는 영역 예약 인스턴스를 사용하고 추가 리소스에는 온디맨드 인스턴스를 사용합니다.` },
      { k: 'F', en: `Use Auto Scaling groups for the web and application layers across multiple Availability Zones in the Regions. Use Spot Instances for the required resources.`, ko: `리전의 여러 가용 영역에 걸쳐 웹 및 애플리케이션 계층에 Auto Scaling 그룹을 사용합니다. 필요한 리소스에 스팟 인스턴스를 사용하십시오.` },
    ],
    answer: ['B', 'C', 'E'],
    vote: '92% BCE',
    explain: `<p><span class="mark-ok">✅ B — Route 53 장애 조치 라우팅 + TTL 30초</span></p>
<p>Route 53 장애 조치 라우팅 정책은 주 리전 상태 확인 실패 시 DR 리전으로 자동 전환합니다. TTL을 30초로 설정하면 DNS 캐시 만료 후 빠르게 새 엔드포인트로 전환되어 1분 이내 장애 조치를 지원합니다.</p>
<p><span class="mark-ok">✅ C — DynamoDB 글로벌 테이블</span></p>
<p>DynamoDB 글로벌 테이블은 선택한 리전 간에 데이터를 자동으로 복제합니다. 1분 장애 조치 요건을 충족하며 양방향 복제로 DR 리전에서 즉시 데이터 접근이 가능합니다.</p>
<p><span class="mark-ok">✅ E — Hot Standby + Reserved/On-Demand 인스턴스</span></p>
<p>DR 리전에도 ASG와 EC2 인스턴스를 상시 실행(Hot Standby)하면 장애 조치 시 즉각 트래픽을 처리할 수 있어 1분 RTO를 달성합니다. 예약 인스턴스로 기본 비용을 절감하고 온디맨드로 확장합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 가중치 100/0으로 설정하면 장애 조치 효과가 없습니다. 또한 TTL 1시간은 DNS 전파에 최대 1시간이 걸려 1분 RTO를 달성할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 60분 간격 백업은 RPO가 최대 60분이며 1분 장애 조치 목표와 맞지 않습니다. 스크립트로 DynamoDB 가져오기도 시간이 소요됩니다.</p>
<p><span class="mark-no">❌ F</span> — 스팟 인스턴스는 AWS가 용량이 필요할 때 2분 경고 후 종료할 수 있어 <strong>재해 복구 환경에 적합하지 않습니다.</strong> 예약·온디맨드 인스턴스(E)가 적합합니다.</p>`,
    disc: [
      { ans: 'BCE (92%)', txt: 'B=Route 53 장애 조치 + TTL 30초(1분 RTO 충족), C=DynamoDB 글로벌 테이블(즉시 데이터 복제), E=Hot Standby(즉각 트래픽 처리). A의 TTL 1시간과 D의 60분 백업은 1분 RTO 불가. F의 스팟은 DR에 부적합.' }
    ]
  },
];