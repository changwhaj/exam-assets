window.QS_SET07 = [
  {
    n: 61,
    en: `A finance company hosts a data lake in Amazon S3. The company receives financial data records over SFTP each night from several third parties. The company runs its own SFTP server on an Amazon EC2 instance in a public subnet of a VPC. After the files are uploaded, they are moved to the data lake by a cron job that runs on the same instance. The SFTP server is reachable on DNS sftp.example.com through the use of Amazon Route 53.<br/><br/>What should a solutions architect do to improve the reliability and scalability of the SFTP solution?`,
    ko: `금융 회사가 Amazon S3에 데이터 레이크를 호스팅합니다. 매일 밤 여러 서드파티로부터 SFTP를 통해 금융 데이터 레코드를 수신합니다. 회사는 VPC 퍼블릭 서브넷의 EC2 인스턴스에서 자체 SFTP 서버를 운영합니다. 파일 업로드 후 동일 인스턴스의 cron 작업이 데이터 레이크로 이동합니다. SFTP 서버는 Route 53을 통해 sftp.example.com으로 접근 가능합니다.<br/><br/>SFTP 솔루션의 신뢰성과 확장성을 향상하려면 어떻게 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Move the EC2 instance into an Auto Scaling group. Place the EC2 instance behind an Application Load Balancer (ALB). Update the DNS record sftp.example.com in Route 53 to point to the ALB.`, ko:`EC2 인스턴스를 Auto Scaling 그룹으로 이동합니다. EC2 인스턴스를 ALB 뒤에 배치합니다. Route 53에서 sftp.example.com DNS 레코드가 ALB를 가리키도록 업데이트합니다.` },
      { k:'B', en:`Migrate the SFTP server to AWS Transfer for SFTP. Update the DNS record sftp.example.com in Route 53 to point to the server endpoint hostname.`, ko:`SFTP 서버를 AWS Transfer for SFTP로 마이그레이션합니다. Route 53에서 sftp.example.com DNS 레코드가 서버 엔드포인트 호스트명을 가리키도록 업데이트합니다.` },
      { k:'C', en:`Migrate the SFTP server to a file gateway in AWS Storage Gateway. Update the DNS record sftp.example.com in Route 53 to point to the file gateway endpoint.`, ko:`SFTP 서버를 AWS Storage Gateway의 파일 게이트웨이로 마이그레이션합니다. Route 53에서 sftp.example.com DNS 레코드가 파일 게이트웨이 엔드포인트를 가리키도록 업데이트합니다.` },
      { k:'D', en:`Place the EC2 instance behind a Network Load Balancer (NLB). Update the DNS record sftp.example.com in Route 53 to point to the NLB.`, ko:`EC2 인스턴스를 NLB 뒤에 배치합니다. Route 53에서 sftp.example.com DNS 레코드가 NLB를 가리키도록 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Transfer for SFTP (완전 관리형 SFTP 서비스)</span></p>
<p>AWS Transfer for SFTP는 Amazon S3에 직접 연결되는 완전 관리형 SFTP 서비스입니다.</p>
<ul>
  <li>EC2 인스턴스, OS, cron 작업 등 인프라 관리 불필요 → <strong>운영 오버헤드 제거</strong></li>
  <li>AWS가 자동으로 가용성과 확장성을 관리 → <strong>신뢰성·확장성 향상</strong></li>
  <li>업로드된 파일이 S3에 직접 저장되므로 cron 기반 이동 단계 제거</li>
  <li>커스텀 도메인(sftp.example.com)을 서버 엔드포인트 호스트명의 CNAME으로 Route 53에 등록하면 서드파티 연결 변경 불필요</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ALB는 HTTP/HTTPS(7계층) 프로토콜만 지원합니다. SFTP는 SSH 기반 TCP(포트 22)이므로 ALB로 SFTP 트래픽을 로드밸런싱할 수 없습니다. 또한 SFTP 세션 상태를 유지하려면 스티키 세션이 필요한데 Auto Scaling 그룹은 파일 동기화 문제를 일으킵니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Storage Gateway 파일 게이트웨이는 NFS/SMB 프로토콜로 S3에 접근하는 하이브리드 스토리지 서비스입니다. SFTP 프로토콜을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — NLB를 추가해도 EC2 기반 SFTP 서버 자체의 단일 장애 지점(SPOF) 문제가 해결되지 않습니다. 인스턴스 장애 시 서비스 중단이 여전히 발생하며, cron 기반 파일 이동도 그대로 유지됩니다.</p>`,
    disc: [
      { ans:'B', txt:'AWS Transfer for SFTP는 EC2 인스턴스·OS 관리·cron 작업 모두 제거하고 S3에 직접 파일을 저장하는 완전 관리형 서비스. 확장성·가용성 자동 처리.' },
    ]
  },
  {
    n: 62,
    en: `A company wants to migrate an application to Amazon EC2 from VMware Infrastructure that runs in an on-premises data center. A solutions architect must preserve the software and configuration settings during the migration.<br/><br/>What should the solutions architect do to meet these requirements?`,
    ko: `회사가 온프레미스 데이터 센터의 VMware 인프라에서 Amazon EC2로 애플리케이션을 마이그레이션하려 합니다. 솔루션 아키텍트는 마이그레이션 중 소프트웨어와 구성 설정을 보존해야 합니다.<br/><br/>이 요구 사항을 충족하려면 어떻게 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure the AWS DataSync agent to start replicating the data store to Amazon FSx for Windows File Server. Use the SMB share to host the VMware data store. Use AWS Application Migration Service to migrate the application to Amazon EC2.`, ko:`AWS DataSync 에이전트를 구성하여 데이터 스토어를 Amazon FSx for Windows File Server로 복제하기 시작합니다. SMB 공유를 사용하여 VMware 데이터 스토어를 호스팅합니다. AWS Application Migration Service를 사용하여 애플리케이션을 Amazon EC2로 마이그레이션합니다.` },
      { k:'B', en:`Use the VMware vSphere client to export the application as an image in Open Virtualization Format (OVF) format. Create an Amazon S3 bucket to store the image in the destination AWS Region. Create and apply an IAM role for the VM Import/Export service. Import the image as an Amazon Machine Image (AMI). Deploy an EC2 instance by using the AMI.`, ko:`VMware vSphere 클라이언트를 사용하여 애플리케이션을 OVF(Open Virtualization Format) 형식의 이미지로 내보냅니다. 대상 AWS 리전에 이미지를 저장할 Amazon S3 버킷을 생성합니다. VM Import/Export 서비스에 대한 IAM 역할을 생성하고 적용합니다. 이미지를 Amazon Machine Image(AMI)로 가져옵니다. AMI를 사용하여 EC2 인스턴스를 배포합니다.` },
      { k:'C', en:`Configure AWS Storage Gateway for files service to export a Common Internet File System (CIFS) share. Create a backup copy to the shared folder. Sign in to the AWS Management Console and create an AMI from the backup copy. Deploy an EC2 instance by using the AMI.`, ko:`파일 서비스를 위해 AWS Storage Gateway를 구성하여 CIFS 공유를 내보냅니다. 공유 폴더에 백업 복사본을 생성합니다. AWS Management Console에 로그인하고 백업 복사본에서 AMI를 생성합니다. AMI를 사용하여 EC2 인스턴스를 배포합니다.` },
      { k:'D', en:`Create a managed-instance activation for a hybrid environment in AWS Systems Manager. Download and install Systems Manager Agent on the on-premises VM. Register the VM with Systems Manager to create a managed instance. Create an AMI from the managed instance. Deploy an EC2 instance by using the AMI.`, ko:`AWS Systems Manager에서 하이브리드 환경에 대한 관리형 인스턴스 활성화를 생성합니다. Systems Manager 에이전트를 온프레미스 VM에 다운로드하여 설치합니다. VM을 Systems Manager에 등록하여 관리형 인스턴스를 생성합니다. 관리형 인스턴스에서 AMI를 생성합니다. AMI를 사용하여 EC2 인스턴스를 배포합니다.` },
    ],
    answer: ['B'],
    vote: '97% B',
    explain: `<p><span class="mark-ok">✅ B — VMware OVF 내보내기 → S3 업로드 → VM Import/Export → AMI → EC2</span></p>
<p>AWS <strong>VM Import/Export</strong>는 VMware OVF/OVA, VHD 등의 가상 머신 이미지를 EC2 AMI로 직접 변환합니다. OS, 설치된 소프트웨어, 구성 파일이 그대로 보존됩니다.</p>
<ul>
  <li>vSphere에서 OVF로 내보내기 → S3 버킷 업로드 → <code>aws ec2 import-image</code> 명령으로 AMI 생성</li>
  <li>VM Import/Export 서비스에 필요한 vmimport IAM 서비스 역할 필요</li>
  <li>기존 소프트웨어 라이선스, 구성, 데이터가 모두 AMI에 포함됨</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — DataSync는 파일 시스템 데이터를 복제하는 서비스이며, VMware VM 이미지(소프트웨어 스택 포함)를 마이그레이션하지 않습니다. Application Migration Service(MGN)는 에이전트를 VM에 설치하는 별도 방식이며, 이 선택지에 설명된 DataSync+FSx 흐름은 VM 마이그레이션과 무관합니다.</p>
<p><span class="mark-no">❌ C</span> — Storage Gateway CIFS 공유로 VMware 데이터스토어를 백업해도, 그 데이터에서 부팅 가능한 AMI를 만드는 공식 방법이 없습니다. VM의 소프트웨어 설치 상태와 OS 구성이 파일 백업으로 보존되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Systems Manager managed instance activation은 온프레미스 서버를 AWS Systems Manager로 관리하기 위한 기능입니다. 관리형 인스턴스로 등록된 온프레미스 VM에서 AMI를 직접 생성하는 기능은 지원하지 않습니다.</p>`,
    disc: [
      { ans:'B', txt:'VM Import/Export: OVF/OVA → S3 → AMI 변환. OS·설치 소프트웨어·구성 설정이 완전히 보존된다. vmimport IAM 역할이 필수.' },
    ]
  },
  {
    n: 63,
    en: `A video processing company has an application that downloads images from an Amazon S3 bucket, processes the images, stores a transformed image in a second S3 bucket, and updates metadata about the image in an Amazon DynamoDB table. The application is written in Node.js and runs by using an AWS Lambda function. The Lambda function is invoked when a new image is uploaded to Amazon S3. The application has been performing well. However, a new business requirement states that the image processing must complete within 5 minutes of image upload. The current Lambda execution times are approaching the 15-minute timeout limit, and there is concern that they will increase as new image sizes and resolutions are added.<br/><br/>Which combination of steps should the solutions architect take to ensure that the processing time requirement is met? (Choose two.)`,
    ko: `비디오 처리 회사가 S3 버킷에서 이미지를 다운로드하고, 처리 후 변환된 이미지를 두 번째 S3 버킷에 저장하고, DynamoDB 테이블에 메타데이터를 업데이트하는 Node.js 애플리케이션을 Lambda로 운영합니다. 현재 Lambda 실행 시간이 15분 제한에 근접하고 있으며, 새 이미지 크기와 해상도 추가 시 더 늘어날 우려가 있습니다. 새 비즈니스 요구 사항은 이미지 처리가 이미지 업로드 후 5분 내에 완료되어야 한다고 합니다.<br/><br/>처리 시간 요구 사항을 충족하기 위해 어떤 단계 조합을 취해야 합니까? (2개 선택)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Modify the application deployment by building a Docker image that contains the application code. Publish the image to Amazon Elastic Container Registry (Amazon ECR).`, ko:`애플리케이션 코드가 포함된 Docker 이미지를 빌드하여 Amazon ECR에 게시하도록 애플리케이션 배포를 수정합니다.` },
      { k:'B', en:`Create a new Amazon Elastic Container Service (Amazon ECS) task definition with a compatibility type of AWS Fargate. Configure the task definition to use the new container image. Set up an Amazon EventBridge rule to invoke the ECS task when a new object is uploaded to the S3 bucket.`, ko:`AWS Fargate 호환성 유형으로 새 Amazon ECS 태스크 정의를 생성합니다. 새 컨테이너 이미지를 사용하도록 태스크 정의를 구성합니다. S3 버킷에 새 객체가 업로드될 때 ECS 태스크를 호출하는 EventBridge 규칙을 설정합니다.` },
      { k:'C', en:`Create an AWS Step Functions state machine with a Parallel state to invoke the Lambda function. Increase the provisioned concurrency of the Lambda function.`, ko:`Lambda 함수를 호출하는 병렬 상태가 있는 AWS Step Functions 상태 머신을 생성합니다. Lambda 함수의 프로비저닝된 동시성을 늘립니다.` },
      { k:'D', en:`Create a new Amazon Elastic Container Service (Amazon ECS) task definition with a compatibility type of Amazon EC2. Configure the task definition to use the new container image. Set up an Amazon EventBridge rule to invoke the ECS task when a new object is uploaded to the S3 bucket.`, ko:`Amazon EC2 호환성 유형으로 새 Amazon ECS 태스크 정의를 생성합니다. 새 컨테이너 이미지를 사용하도록 태스크 정의를 구성합니다. S3 버킷에 새 객체가 업로드될 때 ECS 태스크를 호출하는 EventBridge 규칙을 설정합니다.` },
      { k:'E', en:`Modify the application to store images on Amazon Elastic File System (Amazon EFS) and to store metadata on an Amazon RDS DB instance. Adjust the Lambda function to read from and write to the new storage services.`, ko:`애플리케이션이 이미지를 Amazon EFS에 저장하고 메타데이터를 Amazon RDS DB 인스턴스에 저장하도록 수정합니다. 새 스토리지 서비스에서 읽고 쓰도록 Lambda 함수를 조정합니다.` },
    ],
    answer: ['A', 'B'],
    vote: '89% AB',
    explain: `<p><span class="mark-ok">✅ A — Docker 이미지 빌드 후 ECR에 게시</span></p>
<p>Lambda 15분 제한을 근본적으로 해결하려면 컨테이너 기반으로 전환해야 합니다. 기존 Node.js 코드를 Docker로 패키징하면 실행 환경을 그대로 유지하면서 플랫폼을 변경할 수 있습니다.</p>
<p><span class="mark-ok">✅ B — ECS Fargate 태스크 + EventBridge S3 트리거</span></p>
<p>ECS Fargate는 실행 시간 제한이 없으며, S3 업로드 이벤트에 반응하여 필요한 만큼만 컨테이너를 실행하고 종료합니다.</p>
<ul>
  <li>EventBridge 규칙: S3 Object Created 이벤트 → ECS <code>RunTask</code> API 호출</li>
  <li>Fargate는 서버리스 컨테이너이므로 EC2 클러스터 관리 불필요</li>
  <li>처리 시간이 수십 분으로 늘어도 제한 없이 처리 가능</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ C</span> — Step Functions Parallel state는 여러 Lambda를 병렬 호출하지만, 각 Lambda 인스턴스의 15분 제한은 변하지 않습니다. 하나의 이미지 처리 작업이 15분 이상 걸리는 경우 여전히 타임아웃이 발생합니다.</p>
<p><span class="mark-no">❌ D</span> — ECS EC2 타입은 EC2 클러스터를 직접 관리해야 하므로 Fargate에 비해 운영 오버헤드가 큽니다. 기능 면에서 B(Fargate)와 동일한 문제를 해결하지만, 선호도는 서버리스인 Fargate가 더 높습니다.</p>
<p><span class="mark-no">❌ E</span> — EFS와 RDS로 스토리지 레이어를 변경해도 Lambda의 15분 실행 제한은 해결되지 않습니다. 처리 로직 자체가 오래 걸리는 것이 문제이므로 스토리지 변경은 무관합니다.</p>`,
    disc: [
      { ans:'A, B', txt:'Lambda 15분 타임아웃이 근본 문제 → ECS Fargate로 전환. A(Docker/ECR) + B(Fargate task + EventBridge)가 전환 경로. Fargate는 실행 시간 제한 없음.' },
    ]
  },
  {
    n: 64,
    en: `A company has an organization in AWS Organizations. The company is using AWS Control Tower to deploy a landing zone for the organization. The company wants to implement governance and policy enforcement. The company must implement a policy that will detect Amazon RDS DB instances that are not encrypted at rest in the company's production OU.<br/><br/>Which solution will meet this requirement?`,
    ko: `회사가 AWS Organizations를 사용하고 AWS Control Tower로 랜딩 존을 배포합니다. 회사는 거버넌스와 정책 시행을 구현하려 합니다. 프로덕션 OU에서 저장 시 암호화되지 않은 Amazon RDS DB 인스턴스를 탐지하는 정책을 구현해야 합니다.<br/><br/>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Turn on mandatory guardrails in AWS Control Tower. Apply the mandatory guardrails to the production OU.`, ko:`AWS Control Tower에서 필수 가드레일을 켭니다. 프로덕션 OU에 필수 가드레일을 적용합니다.` },
      { k:'B', en:`Enable the appropriate guardrail from the list of strongly recommended guardrails in AWS Control Tower. Apply the guardrail to the production OU.`, ko:`AWS Control Tower의 강력 권장 가드레일 목록에서 적절한 가드레일을 활성화합니다. 프로덕션 OU에 가드레일을 적용합니다.` },
      { k:'C', en:`Use AWS Config to create a new mandatory guardrail. Apply the rule to all accounts in the production OU.`, ko:`AWS Config를 사용하여 새로운 필수 가드레일을 생성합니다. 프로덕션 OU의 모든 계정에 규칙을 적용합니다.` },
      { k:'D', en:`Create a custom SCP in AWS Control Tower. Apply the SCP to the production OU.`, ko:`AWS Control Tower에서 커스텀 SCP를 생성합니다. 프로덕션 OU에 SCP를 적용합니다.` },
    ],
    answer: ['B'],
    vote: '92% B',
    explain: `<p><span class="mark-ok">✅ B — Control Tower 강력 권장 가드레일 활성화</span></p>
<p>AWS Control Tower는 <strong>"Detect - RDS DB instances that are not encrypted at rest"</strong> 가드레일을 <strong>strongly recommended(강력 권장)</strong> 카테고리로 제공합니다. 이는 AWS Config 규칙 기반의 탐지(detective) 가드레일입니다.</p>
<ul>
  <li>Control Tower 콘솔에서 해당 가드레일을 활성화하고 프로덕션 OU에 적용하면 됩니다</li>
  <li>가드레일이 비준수 RDS 인스턴스를 자동으로 탐지하고 Control Tower 대시보드에 표시</li>
  <li>별도의 Config 규칙 작성이나 커스텀 구현 불필요</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Control Tower 필수(mandatory) 가드레일은 모든 OU에 자동으로 적용되는 기본 보안 정책(루트 계정 MFA 등)입니다. RDS 암호화 탐지는 필수 가드레일이 아닌 강력 권장 가드레일에 포함됩니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Config는 Control Tower와 별개로 사용할 수 있지만, Control Tower가 이미 해당 기능을 제공하는 가드레일로 관리하는데 직접 Config 규칙을 만들 필요가 없습니다. 또한 Config 규칙이 "Control Tower 가드레일"로 등록되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — SCP는 <strong>예방적(preventive)</strong> 제어로, 특정 작업을 차단합니다. 그러나 이 요구 사항은 "탐지(detect)"이지 방지(prevent)가 아닙니다. SCP로 암호화되지 않은 RDS 생성을 막을 수는 있지만, 이미 존재하는 비암호화 인스턴스를 탐지할 수 없습니다.</p>`,
    disc: [
      { ans:'B', txt:'Control Tower strongly recommended guardrail: "Detect - RDS DB instances that are not encrypted at rest"는 Config 기반 탐지 가드레일. OU에 적용하면 자동 탐지. SCP(D)는 preventive이고 여기서는 detective 필요.' },
    ]
  },
  {
    n: 65,
    en: `A startup company hosts a fleet of Amazon EC2 instances in private subnets using the latest Amazon Linux 2 AMI. The company's engineers rely heavily on SSH access to the instances for troubleshooting. The company's existing architecture includes the following: A VPC with private and public subnets, and a NAT gateway. Site-to-Site VPN for connectivity with the on-premises environment. EC2 security groups that allow SSH access from the on-premises network.<br/><br/>The startup recently experienced a security breach in which an attacker was able to gain SSH access to one of the EC2 instances. The company wants to implement a solution that reduces the risk of this type of attack while minimizing operational overhead and still allowing engineers to access instances to troubleshoot issues.<br/><br/>Which solution meets these requirements?`,
    ko: `스타트업이 Amazon Linux 2 AMI를 사용하여 프라이빗 서브넷에서 EC2 인스턴스 플릿을 호스팅합니다. 엔지니어들은 문제 해결을 위해 SSH 접근에 크게 의존합니다. 기존 아키텍처에는 NAT 게이트웨이가 있는 VPC, Site-to-Site VPN, 온프레미스 네트워크의 SSH 접근을 허용하는 보안 그룹이 포함됩니다. 공격자가 EC2 인스턴스에 SSH 접근하는 보안 침해가 발생했습니다. 운영 오버헤드를 최소화하면서 이런 유형의 공격 위험을 줄이고 엔지니어가 여전히 접근할 수 있는 솔루션을 원합니다.<br/><br/>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Install and configure EC2 Instance Connect on the fleet of EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22.`, ko:`EC2 인스턴스 플릿에 EC2 Instance Connect를 설치하고 구성합니다. EC2 인스턴스에 연결된 포트 22의 인바운드 TCP를 허용하는 모든 보안 그룹 규칙을 제거합니다.` },
      { k:'B', en:`Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Install the Amazon CloudWatch agent on all the EC2 instances.`, ko:`엔지니어 장치의 IP 주소에만 포트 22의 인바운드 TCP를 허용하도록 EC2 보안 그룹을 업데이트합니다. 모든 EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다.` },
      { k:'C', en:`Update the EC2 security groups to only allow inbound TCP on port 22 to the IP addresses of the engineer's devices. Enable AWS Config for EC2 security group resource type to identify the noncompliant security groups.`, ko:`엔지니어 장치의 IP 주소에만 포트 22의 인바운드 TCP를 허용하도록 EC2 보안 그룹을 업데이트합니다. EC2 보안 그룹 리소스 유형에 대해 AWS Config를 활성화하여 비준수 보안 그룹을 식별합니다.` },
      { k:'D', en:`Create an IAM role with the AmazonSSMManagedInstanceCore managed policy attached. Attach the IAM role to all the EC2 instances. Remove all security group rules attached to EC2 instances that allow inbound TCP on port 22.`, ko:`AmazonSSMManagedInstanceCore 관리형 정책이 연결된 IAM 역할을 생성합니다. 모든 EC2 인스턴스에 IAM 역할을 연결합니다. EC2 인스턴스에 연결된 포트 22의 인바운드 TCP를 허용하는 모든 보안 그룹 규칙을 제거합니다.` },
    ],
    answer: ['D'],
    vote: '98% D',
    explain: `<p><span class="mark-ok">✅ D — SSM Session Manager + 포트 22 인바운드 규칙 완전 제거</span></p>
<p>AWS Systems Manager <strong>Session Manager</strong>는 SSH 포트(22)를 열지 않고 IAM 권한만으로 EC2 인스턴스에 접근하는 서비스입니다.</p>
<ul>
  <li><code>AmazonSSMManagedInstanceCore</code> 정책을 가진 IAM 역할을 인스턴스에 연결하면 SSM 에이전트가 AWS와 통신 가능 (Amazon Linux 2에는 에이전트 기본 설치)</li>
  <li>보안 그룹에서 포트 22 인바운드 규칙을 <strong>완전히 제거</strong> → SSH 기반 공격 경로 원천 차단</li>
  <li>엔지니어는 콘솔 또는 AWS CLI로 세션 시작, IAM 정책으로 접근 제어</li>
  <li>세션 로그를 CloudWatch Logs/S3에 저장하여 감사 가능</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2 Instance Connect는 IAM을 통해 임시 SSH 키를 푸시하는 방식이지만, 여전히 포트 22(SSH)가 열려있어야 합니다. 포트 22를 제거하면 Instance Connect도 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — 특정 IP만 허용하는 방식은 엔지니어의 IP가 변경되거나 VPN IP 범위가 넓을 때 관리가 복잡합니다. 또한 포트 22 자체는 여전히 열려 있어 공격 표면이 남습니다. CloudWatch 에이전트는 보안 문제를 해결하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Config는 비준수 보안 그룹을 탐지하지만, 공격을 실시간으로 차단하지 않습니다. 탐지 후 수동 교정이 필요하여 운영 오버헤드가 증가합니다.</p>`,
    disc: [
      { ans:'D', txt:'SSM Session Manager는 SSH 포트 없이 IAM으로 인스턴스 접근. AmazonSSMManagedInstanceCore 정책 + 포트 22 규칙 제거로 SSH 공격 경로 완전 차단. Amazon Linux 2에는 SSM Agent 기본 설치.' },
    ]
  },
  {
    n: 66,
    en: `A company that uses AWS Organizations allows developers to experiment on AWS. As part of the landing zone that the company has deployed, developers use their company email address to request an account. The company wants to ensure that developers are not launching costly services or running services unnecessarily. The company must give developers a fixed monthly budget to limit their AWS costs.<br/><br/>Which combination of actions will meet these requirements? (Choose three.)`,
    ko: `AWS Organizations를 사용하는 회사가 개발자들의 AWS 실험을 허용합니다. 개발자들은 회사 이메일 주소로 계정을 요청합니다. 회사는 개발자들이 고가 서비스를 시작하거나 불필요하게 서비스를 실행하지 않도록 하고, 고정 월간 예산으로 AWS 비용을 제한하려 합니다.<br/><br/>이 요구 사항을 충족하는 작업 조합은 무엇입니까? (3개 선택)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Create an SCP to set a fixed monthly account usage limit. Apply the SCP to the developer accounts.`, ko:`고정 월간 계정 사용 한도를 설정하는 SCP를 생성합니다. SCP를 개발자 계정에 적용합니다.` },
      { k:'B', en:`Use AWS Budgets to create a fixed monthly budget for each developer's account as part of the account creation process.`, ko:`계정 생성 프로세스의 일부로 각 개발자 계정에 대해 고정 월간 예산을 생성하려면 AWS Budgets를 사용합니다.` },
      { k:'C', en:`Create an SCP to deny access to costly services and components. Apply the SCP to the developer accounts.`, ko:`고가 서비스 및 구성 요소에 대한 액세스를 거부하는 SCP를 생성합니다. SCP를 개발자 계정에 적용합니다.` },
      { k:'D', en:`Create an IAM policy to deny access to costly services and components. Apply the IAM policy to the developer accounts.`, ko:`고가 서비스 및 구성 요소에 대한 액세스를 거부하는 IAM 정책을 생성합니다. IAM 정책을 개발자 계정에 적용합니다.` },
      { k:'E', en:`Create an AWS Budgets alert action to terminate services when the budgeted amount is reached. Configure the action to terminate all services.`, ko:`예산 금액에 도달하면 서비스를 종료하는 AWS Budgets 경보 작업을 생성합니다. 모든 서비스를 종료하도록 작업을 구성합니다.` },
      { k:'F', en:`Create an AWS Budgets alert action to send an Amazon Simple Notification Service (Amazon SNS) notification when the budgeted amount is reached. Invoke an AWS Lambda function to terminate all services in the developer account.`, ko:`예산 금액에 도달하면 SNS 알림을 보내는 AWS Budgets 경보 작업을 생성합니다. AWS Lambda 함수를 호출하여 개발자 계정의 모든 서비스를 종료합니다.` },
    ],
    answer: ['B', 'C', 'F'],
    vote: '55% BCF, 27% BDF',
    explain: `<p><span class="mark-ok">✅ B — AWS Budgets로 계정별 고정 월간 예산 설정</span></p>
<p>계정 생성 프로세스에서 AWS Budgets를 통해 월간 비용 한도를 설정합니다. 실제 또는 예상 비용이 임계값에 도달하면 알림이 발생합니다.</p>
<p><span class="mark-ok">✅ C — SCP로 고가 서비스 접근 차단</span></p>
<p>Organizations SCP는 OU 또는 계정 수준에서 특정 서비스(예: Redshift, 대형 EC2 인스턴스 타입 등)를 거부하는 예방적 제어입니다. 개발자 계정 전체에 일괄 적용됩니다.</p>
<p><span class="mark-ok">✅ F — Budgets 경보 → SNS → Lambda로 자동 서비스 종료</span></p>
<p>예산 초과 시 SNS 알림을 통해 Lambda를 호출하여 실행 중인 서비스를 자동으로 종료합니다. E와 달리 Lambda를 통해 세밀한 제어가 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SCP에는 "월간 비용 사용 한도"를 설정하는 기능이 없습니다. SCP는 특정 API 작업을 허용/거부하는 정책이며, 비용 금액 기반 제한은 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — IAM 정책은 계정 내 특정 IAM 사용자/역할에만 적용됩니다. 개발자가 루트 계정을 사용하거나 새 IAM 사용자를 생성하면 정책을 우회할 수 있습니다. 조직 수준 제어인 SCP(C)가 더 강력하고 일관됩니다.</p>
<p><span class="mark-no">❌ E</span> — Budgets 경보 작업(Budget Actions)으로 IAM 정책 연결, 서비스 제어 등을 직접 실행할 수 있습니다. 그러나 "모든 서비스 종료" 작업은 너무 광범위하며, Lambda를 통해 더 세밀하게 제어하는 F가 더 적절합니다.</p>`,
    disc: [
      { ans:'B, C, F', txt:'B: Budgets로 월간 한도 설정. C: SCP로 고가 서비스 사전 차단(IAM 정책은 계정 수준에서 우회 가능). F: 초과 시 Lambda로 자동 정리(E는 너무 광범위).' },
      { ans:'B, D, F', txt:'D 지지: IAM 정책으로도 계정 내 모든 사용자에게 적용 가능. 그러나 SCP가 계정 생성 시 자동 적용되어 더 강력한 제어 제공.' },
    ]
  },
  {
    n: 67,
    en: `A company has applications in an AWS account that is named Source. The account is in an organization in AWS Organizations. One of the applications uses AWS Lambda functions and stores inventory data in an Amazon Aurora database. The application deploys the Lambda functions by using a deployment package. The company has configured automated backups for Aurora. The company wants to migrate the Lambda functions and the Aurora DB cluster to a different AWS account that is named Target.<br/><br/>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사가 "Source"라는 AWS 계정에서 애플리케이션을 운영합니다. 이 계정은 AWS Organizations의 조직에 속합니다. 애플리케이션은 Lambda 함수와 Aurora 데이터베이스에 인벤토리 데이터를 저장합니다. Aurora에는 자동 백업이 구성되어 있습니다. 회사가 Lambda 함수와 Aurora DB 클러스터를 "Target"이라는 다른 AWS 계정으로 마이그레이션하려 합니다.<br/><br/>가장 낮은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Download the Lambda function deployment package from the Source account. Use the deployment package and create new Lambda functions in the Target account. Share the automated Aurora DB cluster snapshot with the Target account by using a different encryption key. Restore the snapshot to create a new Aurora DB cluster in the Target account.`, ko:`Source 계정에서 Lambda 함수 배포 패키지를 다운로드합니다. 배포 패키지를 사용하여 Target 계정에 새 Lambda 함수를 생성합니다. 다른 암호화 키를 사용하여 자동화된 Aurora DB 클러스터 스냅샷을 Target 계정과 공유합니다. 스냅샷을 복원하여 Target 계정에 새 Aurora DB 클러스터를 생성합니다.` },
      { k:'B', en:`Download the Lambda function deployment package from the Source account. Use the deployment package and create new Lambda functions in the Target account. Share the automated Aurora DB cluster snapshot with the Target account. Restore the snapshot to create a new Aurora DB cluster in the Target account.`, ko:`Source 계정에서 Lambda 함수 배포 패키지를 다운로드합니다. 배포 패키지를 사용하여 Target 계정에 새 Lambda 함수를 생성합니다. 자동화된 Aurora DB 클러스터 스냅샷을 Target 계정과 공유합니다. 스냅샷을 복원하여 Target 계정에 새 Aurora DB 클러스터를 생성합니다.` },
      { k:'C', en:`Use AWS Resource Access Manager (AWS RAM) to share the Lambda functions and the Aurora DB cluster with the Target account. Grant the Target account permissions to create a copy of the Lambda functions and the Aurora DB cluster.`, ko:`AWS Resource Access Manager(AWS RAM)를 사용하여 Lambda 함수와 Aurora DB 클러스터를 Target 계정과 공유합니다. Target 계정에 Lambda 함수와 Aurora DB 클러스터의 복사본을 생성할 수 있는 권한을 부여합니다.` },
      { k:'D', en:`Use AWS Resource Access Manager (AWS RAM) to share the Lambda functions with the Target account. Share the automated Aurora DB cluster snapshot with the Target account. Restore the snapshot to create a new Aurora DB cluster in the Target account.`, ko:`AWS RAM을 사용하여 Lambda 함수를 Target 계정과 공유합니다. 자동화된 Aurora DB 클러스터 스냅샷을 Target 계정과 공유합니다. 스냅샷을 복원하여 Target 계정에 새 Aurora DB 클러스터를 생성합니다.` },
    ],
    answer: ['B'],
    vote: '78% B',
    explain: `<p><span class="mark-ok">✅ B — Lambda 배포 패키지 재배포 + Aurora 스냅샷 공유 후 복원</span></p>
<p>Lambda와 Aurora를 계정 간 마이그레이션하는 가장 직접적인 방법입니다.</p>
<ul>
  <li><strong>Lambda</strong>: 배포 패키지(ZIP 또는 컨테이너 이미지)를 다운로드하여 Target 계정에 동일하게 생성. Lambda는 코드+설정이 패키지에 포함되어 이식이 간단</li>
  <li><strong>Aurora</strong>: 자동 백업 스냅샷을 Target 계정과 공유(RDS 콘솔에서 스냅샷 공유) → Target 계정에서 복원하여 동일한 DB 클러스터 생성</li>
  <li>AWS RAM으로 Lambda나 Aurora 클러스터를 직접 공유하는 기능은 지원하지 않음</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A</span> — B와 거의 동일하지만, A는 "다른 암호화 키 사용"을 명시합니다. 암호화된 스냅샷을 다른 계정과 공유할 때 KMS 키도 공유해야 하므로 추가 KMS 작업이 필요하여 운영 오버헤드가 더 높습니다. B는 이 복잡성 없이 공유합니다.</p>
<p><span class="mark-no">❌ C</span> — AWS RAM은 Transit Gateway, 서브넷, License Manager 구성 등을 공유하는 서비스입니다. <strong>Lambda 함수와 Aurora DB 클러스터는 RAM으로 공유할 수 없습니다.</strong></p>
<p><span class="mark-no">❌ D</span> — C와 마찬가지로 RAM으로 Lambda 함수를 공유하는 것은 지원되지 않습니다.</p>`,
    disc: [
      { ans:'B', txt:'Lambda: 배포 패키지 다운로드 → Target 계정에 재생성. Aurora: 스냅샷 공유 → 복원. RAM은 Lambda/Aurora를 지원하지 않아 C, D 불가. A는 불필요한 KMS 키 변경이 오버헤드 추가.' },
    ]
  },
  {
    n: 68,
    en: `A company runs a Python script on an Amazon EC2 instance to process data. The script runs every 10 minutes. The script ingests files from an Amazon S3 bucket and processes the files. On average, the script takes approximately 5 minutes to process each file. The script will not reprocess a file that the script has already processed. The company reviewed Amazon CloudWatch metrics and noticed that the EC2 instance is underutilized most of the time.<br/><br/>Which solution will MOST cost-effectively replace the EC2 instance?`,
    ko: `회사가 Amazon EC2 인스턴스에서 Python 스크립트를 실행하여 데이터를 처리합니다. 스크립트는 10분마다 실행되며 S3 버킷에서 파일을 가져와 처리합니다. 파일 처리에 평균 5분이 걸립니다. 이미 처리된 파일은 재처리하지 않습니다. CloudWatch 지표를 검토한 결과 EC2 인스턴스가 대부분의 시간 동안 사용률이 낮습니다.<br/><br/>EC2 인스턴스를 가장 비용 효율적으로 대체하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Migrate the data processing script to an AWS Lambda function. Use an S3 event notification to invoke the Lambda function to process the objects when the company uploads files to the S3 bucket.`, ko:`데이터 처리 스크립트를 AWS Lambda 함수로 마이그레이션합니다. S3 이벤트 알림을 사용하여 회사가 S3 버킷에 파일을 업로드할 때 Lambda 함수를 호출하여 객체를 처리합니다.` },
      { k:'B', en:`Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure Amazon S3 to send event notifications to the SQS queue. Create an EC2 Auto Scaling group with a minimum capacity of 0 and a maximum capacity of 1. Configure the Auto Scaling group to scale based on the number of messages in the SQS queue.`, ko:`Amazon SQS 대기열을 생성합니다. SQS 대기열로 이벤트 알림을 보내도록 Amazon S3를 구성합니다. 최소 용량 0, 최대 용량 1의 EC2 Auto Scaling 그룹을 생성합니다. SQS 대기열의 메시지 수를 기반으로 확장하도록 Auto Scaling 그룹을 구성합니다.` },
      { k:'C', en:`Migrate the data processing script to a container image. Run the data processing container on an EC2 instance. Configure the container to poll the S3 bucket for new files every 10 minutes.`, ko:`데이터 처리 스크립트를 컨테이너 이미지로 마이그레이션합니다. EC2 인스턴스에서 데이터 처리 컨테이너를 실행합니다. 10분마다 새 파일을 위해 S3 버킷을 폴링하도록 컨테이너를 구성합니다.` },
      { k:'D', en:`Migrate the data processing script to a container image that runs on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Create an AWS Lambda function that is invoked by an S3 event notification to run the ECS task when new files are uploaded.`, ko:`데이터 처리 스크립트를 AWS Fargate의 Amazon ECS에서 실행되는 컨테이너 이미지로 마이그레이션합니다. S3 이벤트 알림으로 호출되는 AWS Lambda 함수를 생성하여 새 파일이 업로드될 때 ECS 태스크를 실행합니다.` },
    ],
    answer: ['A'],
    vote: '76% A, 19% D',
    explain: `<p><span class="mark-ok">✅ A — Lambda + S3 이벤트 알림 (서버리스, 이벤트 기반)</span></p>
<p>처리 시간이 평균 5분이므로 Lambda 15분 제한 내에서 처리 가능합니다. S3 이벤트 기반 트리거로 파일 업로드 즉시 처리가 시작되어 10분 폴링 대기 시간도 제거됩니다.</p>
<ul>
  <li>EC2 인스턴스 비용 완전 제거 → <strong>가장 비용 효율적</strong></li>
  <li>Lambda는 처리 시간(5분)에 대해서만 과금, 유휴 시간 비용 없음</li>
  <li>파일 업로드 → S3 이벤트 → Lambda 호출 흐름으로 폴링 필요 없음</li>
  <li>5분 처리로 15분 Lambda 제한 이내 → 아키텍처 변경 최소</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — SQS + Auto Scaling 그룹은 파일이 없을 때 EC2를 0으로 줄일 수 있지만, EC2 인스턴스 시작 시간(콜드 스타트)이 수분 소요됩니다. 또한 EC2는 시간 단위로 과금되어 Lambda보다 비용이 높습니다.</p>
<p><span class="mark-no">❌ C</span> — 컨테이너를 EC2에서 10분마다 폴링하는 방식은 기존 구조와 유사하여 EC2 유휴 비용 문제가 해결되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — ECS Fargate + Lambda 조합은 처리 시간이 Lambda 15분을 초과할 때 유용합니다. 이 경우 5분 처리이므로 Lambda 직접 실행(A)이 더 간단하고 비용 효율적입니다. D는 불필요한 복잡성을 추가합니다.</p>`,
    disc: [
      { ans:'A', txt:'처리 시간 5분 < Lambda 15분 제한 → Lambda 직접 사용 가능. S3 이벤트 트리거로 폴링 제거. EC2 비용 완전 제거. D는 처리 시간이 15분 초과할 때 필요한 패턴.' },
    ]
  },
  {
    n: 69,
    en: `A financial services company in North America plans to release a new online web application to its customers on AWS. The company will launch the application in the us-east-1 Region on Amazon EC2 instances. The application must be highly available and must dynamically scale to meet user traffic. The company also wants to implement a disaster recovery environment for the application in the us-west-1 Region with a Recovery Time Objective (RTO) of 2 hours.<br/><br/>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `북미 금융 서비스 회사가 AWS에서 새 온라인 웹 애플리케이션을 출시하려 합니다. us-east-1 리전의 EC2 인스턴스에서 애플리케이션을 시작합니다. 애플리케이션은 고가용성을 갖추고 사용자 트래픽에 동적으로 확장해야 합니다. 또한 us-west-1 리전에 RTO 2시간의 재해 복구 환경을 구현하려 합니다.<br/><br/>가장 낮은 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a VPC in us-east-1 and a VPC in us-west-1. Configure VPC peering. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones. Create an Auto Scaling group that is behind the ALB. In the us-west-1 VPC, create an Auto Scaling group. Create a Route 53 health check. Create a Route 53 record with a failover routing policy.`, ko:`us-east-1과 us-west-1에 VPC를 생성합니다. VPC 피어링을 구성합니다. us-east-1 VPC에서 여러 가용 영역에 걸친 ALB를 생성합니다. ALB 뒤에 Auto Scaling 그룹을 생성합니다. us-west-1 VPC에 Auto Scaling 그룹을 생성합니다. Route 53 상태 확인과 장애 조치 라우팅 정책의 레코드를 생성합니다.` },
      { k:'B', en:`Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones. Create an Auto Scaling group that is behind the ALB. In the us-west-1 VPC, create an Auto Scaling group. Create a Route 53 health check. Create a Route 53 record with a failover routing policy.`, ko:`us-east-1과 us-west-1에 VPC를 생성합니다. us-east-1 VPC에서 여러 가용 영역에 걸친 ALB를 생성합니다. ALB 뒤에 Auto Scaling 그룹을 생성합니다. us-west-1 VPC에 Auto Scaling 그룹을 생성합니다. Route 53 상태 확인과 장애 조치 라우팅 정책의 레코드를 생성합니다.` },
      { k:'C', en:`Create a VPC in us-east-1 and a VPC in us-west-1. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones. Create an Auto Scaling group that is behind the ALB. In the us-west-1 VPC, create an ALB that extends across multiple Availability Zones. Create an Auto Scaling group that is behind the ALB. Create a Route 53 health check. Create a Route 53 record with a failover routing policy.`, ko:`us-east-1과 us-west-1에 VPC를 생성합니다. us-east-1 VPC에서 여러 가용 영역에 걸친 ALB를 생성합니다. ALB 뒤에 Auto Scaling 그룹을 생성합니다. us-west-1 VPC에서 여러 가용 영역에 걸친 ALB를 생성합니다. ALB 뒤에 Auto Scaling 그룹을 생성합니다. Route 53 상태 확인과 장애 조치 라우팅 정책의 레코드를 생성합니다.` },
      { k:'D', en:`Create a VPC in us-east-1 and a VPC in us-west-1. Configure VPC peering. In the us-east-1 VPC, create an Application Load Balancer (ALB) that extends across multiple Availability Zones. Create an Auto Scaling group that is behind the ALB. In the us-west-1 VPC, create an ALB that extends across multiple Availability Zones. Create an Auto Scaling group that is behind the ALB. Create a Route 53 health check. Create a Route 53 record with a failover routing policy.`, ko:`us-east-1과 us-west-1에 VPC를 생성합니다. VPC 피어링을 구성합니다. us-east-1 VPC에서 여러 가용 영역에 걸친 ALB를 생성합니다. ALB 뒤에 Auto Scaling 그룹을 생성합니다. us-west-1 VPC에서 여러 가용 영역에 걸친 ALB를 생성합니다. ALB 뒤에 Auto Scaling 그룹을 생성합니다. Route 53 상태 확인과 장애 조치 라우팅 정책의 레코드를 생성합니다.` },
    ],
    answer: ['C'],
    vote: '91% C',
    explain: `<p><span class="mark-ok">✅ C — 양 리전 ALB + Auto Scaling + Route 53 장애 조치 라우팅</span></p>
<p>RTO 2시간 이내의 재해 복구를 위해 us-west-1에도 완전한 애플리케이션 스택을 준비하는 <strong>Warm Standby</strong> 패턴입니다.</p>
<ul>
  <li>us-east-1: 다중 AZ ALB + Auto Scaling → 고가용성 프로덕션 환경</li>
  <li>us-west-1: 다중 AZ ALB + Auto Scaling → 웜 스탠바이 DR 환경 (최소 용량으로 실행)</li>
  <li>Route 53 장애 조치 라우팅 + 상태 확인 → us-east-1 장애 시 자동으로 us-west-1으로 전환</li>
  <li>RTO 2시간: Auto Scaling 스케일아웃 시간 포함, 완전한 트래픽 처리 가능</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — us-west-1에 ALB 없이 Auto Scaling 그룹만 있으면, 장애 조치 시 트래픽을 받을 로드밸런서가 없습니다. Route 53 장애 조치 레코드는 ALB 또는 NLB의 DNS를 대상으로 해야 합니다.</p>
<p><span class="mark-no">❌ A, D</span> — VPC 피어링은 두 VPC 간 프라이빗 통신을 위한 것이며, 재해 복구 또는 고가용성 아키텍처에서 DR 리전 간 VPC 피어링이 필요하지 않습니다. 피어링 구성은 불필요한 운영 오버헤드를 추가합니다.</p>`,
    disc: [
      { ans:'C', txt:'DR 리전(us-west-1)에도 ALB + Auto Scaling이 완전히 구성되어야 Route 53 장애 조치가 동작. VPC 피어링은 이 아키텍처에서 불필요. RTO 2시간은 Warm Standby로 충족 가능.' },
    ]
  },
  {
    n: 70,
    en: `A company has an environment that has a single AWS account. A solutions architect is reviewing the environment to recommend what the company could improve specifically in terms of access to the AWS Management Console. The company's IT support workers currently access the console for administrative tasks, authenticating with named IAM users that have been mapped to their job role. The IT support workers also use the same credentials to access the company's on-premises systems. The company wants the IT support workers to authenticate with their existing on-premises credentials when they access AWS.<br/><br/>What should the solutions architect recommend?`,
    ko: `회사가 단일 AWS 계정 환경을 운영합니다. IT 지원 직원들이 직무 역할에 매핑된 IAM 사용자로 콘솔에 접근합니다. 동일한 자격 증명을 온프레미스 시스템에서도 사용합니다. 회사는 IT 지원 직원들이 AWS에 접근할 때 기존 온프레미스 자격 증명으로 인증하기를 원합니다.<br/><br/>솔루션 아키텍트는 무엇을 권장해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an organization in AWS Organizations. Turn on the IAM Identity Center feature in Organizations. Create and configure a directory in AWS Directory Service for Microsoft Active Directory. Set up IAM Identity Center with a two-way trust with the new directory.`, ko:`AWS Organizations에서 조직을 생성합니다. Organizations에서 IAM Identity Center 기능을 켭니다. AWS Directory Service for Microsoft Active Directory에서 디렉터리를 생성하고 구성합니다. 새 디렉터리와 양방향 트러스트를 사용하여 IAM Identity Center를 설정합니다.` },
      { k:'B', en:`Create an organization in AWS Organizations. Turn on the IAM Identity Center feature in Organizations. Create and configure an AD Connector to connect to the company's on-premises Active Directory. Set up IAM Identity Center to use the AD Connector as its identity source.`, ko:`AWS Organizations에서 조직을 생성합니다. Organizations에서 IAM Identity Center 기능을 켭니다. 회사의 온프레미스 Active Directory에 연결하는 AD Connector를 생성하고 구성합니다. AD Connector를 ID 소스로 사용하도록 IAM Identity Center를 설정합니다.` },
      { k:'C', en:`Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure a directory in AWS Directory Service for Microsoft Active Directory. Set up IAM Identity Center with a two-way trust with the new directory.`, ko:`AWS Organizations에서 조직을 생성합니다. 조직의 모든 기능을 켭니다. AWS Directory Service for Microsoft Active Directory에서 디렉터리를 생성하고 구성합니다. 새 디렉터리와 양방향 트러스트를 사용하여 IAM Identity Center를 설정합니다.` },
      { k:'D', en:`Create an organization in AWS Organizations. Turn on all features for the organization. Create and configure an AD Connector to connect to the company's on-premises Active Directory. Set up IAM Identity Center to use the AD Connector as its identity source.`, ko:`AWS Organizations에서 조직을 생성합니다. 조직의 모든 기능을 켭니다. 회사의 온프레미스 Active Directory에 연결하는 AD Connector를 생성하고 구성합니다. AD Connector를 ID 소스로 사용하도록 IAM Identity Center를 설정합니다.` },
    ],
    answer: ['D'],
    vote: '82% D',
    explain: `<p><span class="mark-ok">✅ D — Organizations(all features) + AD Connector + IAM Identity Center</span></p>
<p>세 가지 핵심 선택 근거:</p>
<ul>
  <li><strong>All features(모든 기능)</strong>: IAM Identity Center, SCP 등 전체 Organizations 기능을 사용하려면 "IAM Identity Center 기능만" 켜는 것이 아니라 "all features"를 활성화해야 합니다</li>
  <li><strong>AD Connector</strong>: 기존 온프레미스 AD에 <strong>프록시</strong>로 연결합니다. 디렉터리 데이터를 AWS로 복제하지 않고 인증 요청을 온프레미스 AD로 전달합니다. 기존 사용자 자격 증명을 그대로 사용 가능</li>
  <li><strong>Managed AD(A, C)</strong>는 AWS에 새로운 독립 AD 디렉터리를 생성합니다. 기존 온프레미스 자격 증명을 사용하려면 AD Connector가 적합합니다</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — Organizations에서 IAM Identity Center를 사용하려면 "IAM Identity Center 기능"만 켜는 것이 아니라 Organizations의 <strong>모든 기능(all features)</strong>이 활성화되어야 합니다. "IAM Identity Center 기능"을 켠다는 표현은 Organizations 설정에서 올바른 옵션이 아닙니다.</p>
<p><span class="mark-no">❌ A, C</span> — AWS Directory Service for Microsoft Active Directory(Managed AD)는 AWS에 새로운 AD 포리스트를 생성합니다. 기존 온프레미스 AD 자격 증명을 직접 사용하려면 AD Connector(온프레미스 AD 프록시)가 필요합니다. Managed AD와의 양방향 트러스트도 구성 가능하지만 더 복잡하고 추가 비용이 발생합니다.</p>`,
    disc: [
      { ans:'D', txt:'All features 필수(B는 틀린 표현). AD Connector는 온프레미스 AD 프록시로 자격 증명 복제 없이 기존 계정 그대로 사용. Managed AD(A, C)는 새 디렉터리 생성이므로 기존 자격 증명 직접 사용 불가.' },
    ]
  },
];
