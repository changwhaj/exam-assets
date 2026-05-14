window.QS_SET34 = [
  {
    n: 331,
    en: `<p>A company is migrating an application to the AWS Cloud. The application runs in an on-premises data center and writes thousands of images into a mounted NFS file system each night. After the company migrates the application, the company will host the application on an Amazon EC2 instance with a mounted Amazon Elastic File System (Amazon EFS) file system.</p><p>The company has established an AWS Direct Connect connection to AWS. Before the migration cutover, a solutions architect must build a process that will replicate the newly created on-premises images to the EFS file system.</p><p>What is the MOST operationally efficient way to replicate the images?</p>`,
    ko: `<p>한 회사가 애플리케이션을 AWS 클라우드로 마이그레이션하고 있습니다. 애플리케이션은 온프레미스 데이터 센터에서 실행되며 매일 밤 마운트된 NFS 파일 시스템에 수천 개의 이미지를 씁니다. 회사는 애플리케이션을 마이그레이션한 후 Amazon EFS 파일 시스템이 탑재된 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다.</p><p>회사는 AWS에 대한 AWS Direct Connect 연결을 설정했습니다. 마이그레이션 전환 전에 솔루션 설계자는 새로 생성된 온프레미스 이미지를 EFS 파일 시스템에 복제하는 프로세스를 구축해야 합니다.</p><p>이미지를 복제하는 가장 운영상 효율적인 방법은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Configure a periodic process to run the aws s3 sync command from the on-premises file system to Amazon S3. Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system.`, ko: `온프레미스 파일 시스템에서 Amazon S3로 aws s3 sync 명령을 실행하도록 정기적인 프로세스를 구성합니다. Amazon S3의 이벤트 알림을 처리하고 Amazon S3의 이미지를 EFS 파일 시스템으로 복사하도록 AWS Lambda 함수를 구성합니다.` },
      { k: 'B', en: `Deploy an AWS Storage Gateway file gateway with an NFS mount point. Mount the file gateway file system on the on-premises server. Configure a process to periodically copy the images to the mount point.`, ko: `NFS 마운트 지점을 사용하여 AWS Storage Gateway 파일 게이트웨이를 배포합니다. 온프레미스 서버에 파일 게이트웨이 파일 시스템을 탑재합니다. 이미지를 마운트 지점에 주기적으로 복사하는 프로세스를 구성합니다.` },
      { k: 'C', en: `Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system. Send data over the Direct Connect connection to an S3 bucket by using a public VIF. Configure an AWS Lambda function to process event notifications from Amazon S3 and copy the images from Amazon S3 to the EFS file system.`, ko: `NFS 파일 시스템에 액세스할 수 있는 온프레미스 서버에 AWS DataSync 에이전트를 배포합니다. 퍼블릭 VIF를 사용하여 Direct Connect 연결을 통해 S3 버킷으로 데이터를 보냅니다. Amazon S3의 이벤트 알림을 처리하고 Amazon S3의 이미지를 EFS 파일 시스템으로 복사하도록 AWS Lambda 함수를 구성합니다.` },
      { k: 'D', en: `Deploy an AWS DataSync agent to an on-premises server that has access to the NFS file system. Send data over the Direct Connect connection to an AWS PrivateLink interface VPC endpoint for Amazon EFS by using a private VIF. Configure a DataSync scheduled task to send the images to the EFS file system every 24 hours.`, ko: `NFS 파일 시스템에 액세스할 수 있는 온프레미스 서버에 AWS DataSync 에이전트를 배포합니다. 프라이빗 VIF를 사용하여 Direct Connect 연결을 통해 Amazon EFS용 AWS PrivateLink 인터페이스 VPC 엔드포인트로 데이터를 보냅니다. 24시간마다 EFS 파일 시스템에 이미지를 보내도록 DataSync 예약 작업을 구성합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — DataSync 에이전트 + Direct Connect 프라이빗 VIF → EFS</span></p>
<p><strong>AWS DataSync</strong>는 온프레미스 NFS 파일 시스템과 Amazon EFS 간의 데이터 이동을 위해 설계된 완전 관리형 데이터 전송 서비스입니다. Direct Connect <strong>프라이빗 VIF</strong>를 통해 퍼블릭 인터넷을 경유하지 않고 안전하게 데이터를 전송할 수 있습니다. DataSync 예약 작업으로 매일 밤 자동으로 증분 복제를 수행하여 운영 효율성을 극대화합니다. S3를 중간 단계로 사용하는 A/C와 달리, D는 NFS에서 EFS로 직접 전송하여 불필요한 단계와 지연을 제거합니다.</p>
<p><a href="https://docs.aws.amazon.com/datasync/latest/userguide/datasync-in-vpc.html" target="_blank">AWS 공식 문서: DataSync in VPC</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3를 중간 단계로 사용하고 Lambda로 EFS에 복사하는 과정은 불필요한 복잡성을 추가합니다. 직접 NFS→EFS 전송이 가능한데 두 단계를 거칠 필요가 없습니다.</p>
<p><span class="mark-no">❌ B</span> — Storage Gateway 파일 게이트웨이는 S3를 백엔드로 사용하며 EFS에 직접 연결되지 않습니다. 목적지가 EFS이므로 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — S3를 경유하는 불필요한 단계가 있으며, 퍼블릭 VIF 사용은 프라이빗 VIF보다 보안성이 낮습니다. D가 직접적이고 더 효율적입니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'DataSync는 NFS → EFS 직접 전송 지원. 프라이빗 VIF로 Direct Connect를 통한 안전한 전송. S3 경유(A, C) 대비 불필요한 중간 단계 제거 → 운영 효율성 최고.' },
    ]
  },
  {
    n: 332,
    en: `<p>A company recently migrated a web application from an on-premises data center to the AWS Cloud. The web application infrastructure consists of an Amazon CloudFront distribution that routes to an Application Load Balancer (ALB), with Amazon Elastic Container Service (Amazon ECS) to process requests. A recent security audit revealed that the web application is accessible by using both CloudFront and ALB endpoints. However, the company requires that the web application must be accessible only by using the CloudFront endpoint.</p><p>Which solution will meet this requirement with the LEAST amount of effort?</p>`,
    ko: `<p>한 회사가 최근 온프레미스 데이터 센터에서 AWS 클라우드로 웹 애플리케이션을 마이그레이션했습니다. 웹 애플리케이션 인프라는 ALB(Application Load Balancer)로 라우팅하는 Amazon CloudFront 배포와 요청을 처리하는 Amazon ECS로 구성됩니다. 최근 보안 감사에서는 CloudFront와 ALB 엔드포인트를 모두 사용하여 웹 애플리케이션에 액세스할 수 있는 것으로 나타났습니다. 그러나 회사에서는 CloudFront 엔드포인트를 통해서만 웹 애플리케이션에 액세스할 수 있도록 요구합니다.</p><p>최소한의 노력으로 이 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a new security group and attach it to the CloudFront distribution. Update the ALB security group ingress to allow access only from the CloudFront security group.`, ko: `새 보안 그룹을 생성하여 CloudFront 배포에 연결합니다. CloudFront 보안 그룹에서만 액세스를 허용하도록 ALB 보안 그룹 수신을 업데이트합니다.` },
      { k: 'B', en: `Update ALB security group ingress to allow access only from the com.amazonaws.global.cloudfront.origin-facing CloudFront managed prefix list.`, ko: `com.amazonaws.global.cloudfront.origin-facing CloudFront 관리형 접두사 목록에서만 액세스를 허용하도록 ALB 보안 그룹 수신을 업데이트합니다.` },
      { k: 'C', en: `Create a com.amazonaws.region.elasticloadbalancing VPC interface endpoint for Elastic Load Balancing. Update the ALB scheme from internet-facing to internal.`, ko: `Elastic Load Balancing을 위한 com.amazonaws.region.elasticloadbalancing VPC 인터페이스 엔드포인트를 생성합니다. ALB 체계를 인터넷 연결에서 내부로 업데이트합니다.` },
      { k: 'D', en: `Extract CloudFront IPs from the AWS provided ip-ranges.json document. Update ALB security group ingress to allow access only from CloudFront IPs.`, ko: `AWS가 제공한 ip-ranges.json 문서에서 CloudFront IP를 추출합니다. CloudFront IP에서만 액세스를 허용하도록 ALB 보안 그룹 수신을 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — CloudFront 관리형 접두사 목록으로 ALB 보안 그룹 수신 제한</span></p>
<p>AWS는 <strong>CloudFront 오리진 대면 IP 주소 범위</strong>를 <code>com.amazonaws.global.cloudfront.origin-facing</code> 관리형 접두사 목록으로 자동 관리합니다. 이 접두사 목록을 ALB 보안 그룹 수신 규칙에 참조하면, CloudFront에서 오는 요청만 ALB에 접근할 수 있습니다. AWS가 CloudFront IP 변경 시 접두사 목록을 자동으로 업데이트하므로 수동 관리가 불필요합니다.</p>
<p><a href="https://aws.amazon.com/blogs/networking-and-content-delivery/limit-access-to-your-origins-using-the-aws-managed-prefix-list-for-amazon-cloudfront/" target="_blank">AWS 블로그: CloudFront 관리형 접두사 목록</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFront 배포에는 보안 그룹을 연결할 수 없습니다. CloudFront는 보안 그룹을 지원하지 않는 글로벌 엣지 인프라에서 운영됩니다.</p>
<p><span class="mark-no">❌ C</span> — ALB를 내부(internal)로 변경하면 인터넷에서 직접 접근을 차단할 수 있지만, CloudFront에서의 접근도 복잡해지고 추가 구성이 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — ip-ranges.json에서 CloudFront IP를 수동으로 추출하여 보안 그룹에 추가하는 방식은 IP 변경 시 수동 업데이트가 필요하며, 보안 그룹의 규칙 수 제한(60개)으로 모든 CloudFront IP를 추가하지 못할 수 있습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'CloudFront에는 보안 그룹 연결 불가(A 제외). 수동 IP 관리는 규칙 60개 제한 및 업데이트 부담(D 제외). 관리형 접두사 목록은 AWS가 자동 최신화하여 노력 최소화.' },
    ]
  },
  {
    n: 333,
    en: `<p>A company hosts a community forum site using an Application Load Balancer (ALB) and a Docker application hosted in an Amazon ECS cluster. The site data is stored in Amazon RDS for MySQL and the container image is stored in ECR. The company needs to provide their customers with a disaster recovery SLA with an RTO of no more than 24 hours and RPO of no more than 8 hours.</p><p>Which of the following solutions is the MOST cost-effective way to meet the requirements?</p>`,
    ko: `<p>회사는 ALB(Application Load Balancer)와 Amazon ECS 클러스터에서 호스팅되는 Docker 애플리케이션을 사용하여 커뮤니티 포럼 사이트를 호스팅합니다. 사이트 데이터는 Amazon RDS for MySQL에 저장되고 컨테이너 이미지는 ECR에 저장됩니다. 회사는 RTO가 24시간 이하, RPO가 8시간 이하인 재해 복구 SLA를 고객에게 제공해야 합니다.</p><p>다음 솔루션 중 요구 사항을 충족하는 가장 비용 효율적인 방법은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS CloudFormation to deploy identical ALB, EC2, ECS and RDS resources in two regions. Schedule RDS snapshots every 8 hours. Use RDS multi-region replication to update the secondary region's copy of the database. In the event of a failure, restore from the latest snapshot, and use an Amazon Route 53 DNS failover policy to automatically redirect customers to the ALB in the secondary region.`, ko: `AWS CloudFormation을 사용하여 두 리전에 동일한 ALB, EC2, ECS 및 RDS 리소스를 배포합니다. 8시간마다 RDS 스냅샷을 예약합니다. RDS 다중 리전 복제를 사용하여 보조 리전의 데이터베이스 복사본을 업데이트합니다. 오류가 발생하면 최신 스냅샷에서 복원하고 Route 53 DNS 장애 조치 정책을 사용하여 자동으로 고객을 보조 리전의 ALB로 리디렉션합니다.` },
      { k: 'B', en: `Store the Docker image in ECR in two regions. Schedule RDS snapshots every 8 hours with snapshots copied to the secondary region. In the event of a failure, use AWS CloudFormation to deploy the ALB, EC2, ECS and RDS resources in the secondary region, restore from the latest snapshot, and update the DNS record to point to the ALB in the secondary region.`, ko: `두 리전의 ECR에 Docker 이미지를 저장합니다. 스냅샷을 보조 리전에 복사하여 8시간마다 RDS 스냅샷을 예약합니다. 오류가 발생하는 경우 AWS CloudFormation을 사용하여 보조 리전에 ALB, EC2, ECS 및 RDS 리소스를 배포하고, 최신 스냅샷에서 복원하고, 보조 리전의 ALB를 가리키도록 DNS 레코드를 업데이트합니다.` },
      { k: 'C', en: `Use AWS CloudFormation to deploy identical ALB, EC2, ECS, and RDS resources in a secondary region. Schedule hourly RDS MySQL backups to Amazon S3 and use cross-region replication to replicate data to a bucket in the secondary region. In the event of a failure, import the latest Docker image to Amazon ECR in the secondary region, deploy to the EC2 instance, restore the latest MySQL backup, and update the DNS record to point to the ALB in the secondary region.`, ko: `AWS CloudFormation을 사용하여 보조 리전에 동일한 ALB, EC2, ECS 및 RDS 리소스를 배포합니다. Amazon S3에 대한 시간별 RDS MySQL 백업을 예약하고 리전 간 복제를 사용하여 보조 리전의 버킷에 데이터를 복제합니다. 오류가 발생하면 최신 Docker 이미지를 보조 리전의 ECR로 가져오고, EC2 인스턴스에 배포하고, 최신 MySQL 백업을 복원하고, DNS 레코드를 업데이트합니다.` },
      { k: 'D', en: `Deploy a pilot light environment in a secondary region with an ALB and a minimal resource EC2 deployment for Docker in an AWS Auto Scaling group with a scaling policy to increase instance size and number of nodes. Create a cross-region read replica of the RDS data. In the event of a failure, promote the replica to primary, and update the DNS record to point to the ALB in the secondary region.`, ko: `인스턴스 크기와 노드 수를 늘리기 위한 조정 정책을 사용하여 AWS Auto Scaling 그룹의 Docker용 ALB 및 최소 리소스 EC2 배포를 사용하여 보조 리전에 파일럿 라이트 환경을 배포합니다. RDS 데이터의 리전 간 읽기 복제본을 생성합니다. 오류가 발생하는 경우 복제본을 기본으로 승격하고 DNS 레코드를 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '89% B',
    explain: `<p><span class="mark-ok">✅ B — 백업 및 복원(Backup and Restore) DR 전략</span></p>
<p>RTO 24시간, RPO 8시간 요구 사항에서 <strong>가장 비용 효율적</strong>인 DR 전략은 <strong>백업 및 복원</strong> 방식입니다. 사전에 DR 리전에 인프라를 상시 운영하지 않고, 장애 발생 시 CloudFormation으로 빠르게 배포하고 스냅샷을 복원합니다. 8시간마다 RDS 스냅샷 + 보조 리전 복사로 RPO 8시간을 충족하고, CloudFormation 배포 + 복원 시간이 24시간 이내이므로 RTO도 충족합니다. ECR에 미리 이미지를 복제해 두면 배포 시간도 단축됩니다.</p>
<p><a href="https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html" target="_blank">AWS 공식 문서: 클라우드 DR 옵션</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 두 리전 모두에 항상 동일한 리소스를 배포하는 것은 비용이 두 배가 됩니다. RTO 24시간이면 이렇게 할 필요가 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 보조 리전에 미리 동일한 인프라를 배포하는 방식(A와 유사)으로 불필요한 비용이 발생합니다. 또한 S3에 MySQL 백업 후 복원하는 과정이 RDS 스냅샷보다 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — 파일럿 라이트(Pilot Light) 방식은 최소 인프라를 상시 운영하는 비용이 발생합니다. RTO 24시간에 파일럿 라이트는 과잉 투자입니다.</p>`,
    disc: [
      { ans: 'B (89%)', txt: 'RTO 24시간 = 콜드(백업 및 복원) DR로 충분. 평소에는 스냅샷+ECR 이미지 복제만 유지 → 비용 최소. 장애 시 CloudFormation으로 즉시 인프라 구축 가능.' },
    ]
  },
  {
    n: 334,
    en: `<p>A company is migrating its infrastructure to the AWS Cloud. The company must comply with a variety of regulatory standards for different projects. The company needs a multi-account environment.</p><p>A solutions architect needs to prepare the baseline infrastructure. The solution must provide a consistent baseline of management and security, but it must allow flexibility for different compliance requirements within various AWS accounts. The solution also needs to integrate with the existing on-premises Active Directory Federation Services (AD FS) server.</p><p>Which solution meets these requirements with the LEAST amount of operational overhead?</p>`,
    ko: `<p>한 회사가 인프라를 AWS 클라우드로 마이그레이션하고 있습니다. 회사는 다양한 프로젝트에 대한 다양한 규제 표준을 준수해야 합니다. 회사에는 다중 계정 환경이 필요합니다.</p><p>솔루션 설계자는 기본 인프라를 준비해야 합니다. 솔루션은 일관된 관리 및 보안 기준을 제공해야 하지만 다양한 AWS 계정 내의 다양한 규정 준수 요구 사항에 대한 유연성을 허용해야 합니다. 또한 솔루션은 기존 온프레미스 Active Directory Federation Services(AD FS) 서버와 통합되어야 합니다.</p><p>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an organization in AWS Organizations. Create a single SCP for least privilege access across all accounts. Create a single OU for all accounts. Configure an IAM identity provider for federation with the on-premises AD FS server. Configure a central logging account with a defined process for log generating services to send log events to the central account. Enable AWS Config in the central account with conformance packs for all accounts.`, ko: `AWS Organizations에서 조직을 생성합니다. 모든 계정에 대한 최소 권한 액세스를 위해 단일 SCP를 만듭니다. 모든 계정에 대해 단일 OU를 만듭니다. 온프레미스 AD FS 서버와의 연동을 위해 IAM ID 공급자를 구성합니다. 중앙 로깅 계정을 구성합니다. 모든 계정에 대한 적합성 팩을 사용하여 중앙 계정에서 AWS Config를 활성화합니다.` },
      { k: 'B', en: `Create an organization in AWS Organizations. Enable AWS Control Tower on the organization. Review included controls (guardrails) for SCPs. Check AWS Config for areas that require additions. Add OUs as necessary. Connect AWS IAM Identity Center (AWS Single Sign-On) to the on-premises AD FS server.`, ko: `AWS Organizations에서 조직을 생성합니다. 조직에서 AWS Control Tower를 활성화합니다. SCP에 포함된 제어(가드레일)를 검토합니다. 추가가 필요한 영역은 AWS Config를 확인합니다. 필요에 따라 OU를 추가합니다. AWS IAM Identity Center(AWS Single Sign-On)를 온프레미스 AD FS 서버에 연결합니다.` },
      { k: 'C', en: `Create an organization in AWS Organizations. Create SCPs for least privilege access. Create an OU structure, and use it to group AWS accounts. Connect AWS IAM Identity Center (AWS Single Sign-On) to the on-premises AD FS server. Configure a central logging account with a defined process for log generating services to send log events to the central account. Enable AWS Config in the central account with aggregators and conformance packs.`, ko: `AWS Organizations에서 조직을 생성합니다. 최소 권한 액세스를 위해 SCP를 생성합니다. OU 구조를 생성하고 이를 사용하여 AWS 계정을 그룹화합니다. AWS IAM Identity Center를 온프레미스 AD FS 서버에 연결합니다. 중앙 로깅 계정을 구성합니다. 집계자 및 적합성 팩을 사용하여 중앙 계정에서 AWS Config를 활성화합니다.` },
      { k: 'D', en: `Create an organization in AWS Organizations. Enable AWS Control Tower on the organization. Review included controls (guardrails) for SCPs. Check AWS Config for areas that require additions. Configure an IAM identity provider for federation with the on-premises AD FS server.`, ko: `AWS Organizations에서 조직을 생성합니다. 조직에서 AWS Control Tower를 활성화합니다. SCP에 포함된 제어(가드레일)를 검토합니다. 추가가 필요한 영역은 AWS Config를 확인합니다. 온프레미스 AD FS 서버와의 연동을 위해 IAM ID 공급자를 구성합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Control Tower + IAM Identity Center + AD FS 연동</span></p>
<p>세 가지 핵심 이점이 있습니다:<br>① <strong>AWS Control Tower</strong>: 모범 사례 기반 다중 계정 환경(랜딩 존)을 자동으로 구성하고, 중앙 로깅, AWS Config, SCP 기반 가드레일을 포함합니다. A와 C처럼 수동으로 모든 것을 구성할 필요가 없습니다.<br>② <strong>OU 유연성</strong>: 필요에 따라 OU를 추가하여 다양한 규정 준수 요구 사항에 맞게 계정을 그룹화할 수 있습니다.<br>③ <strong>IAM Identity Center</strong>: AD FS 서버와 연동하는 인력 인증의 권장 방식으로, D의 IAM ID 공급자보다 중앙 집중식 관리가 쉽습니다.</p>
<p><a href="https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html" target="_blank">AWS 공식 문서: AWS Control Tower</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 모든 것을 수동으로 구성해야 하므로 운영 오버헤드가 가장 높습니다. 단일 OU 구조는 규정 준수 요구 사항의 유연성을 제공하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — Control Tower를 사용하지 않고 모든 것을 수동으로 구성하는 방식입니다. 기능적으로 가능하지만 운영 오버헤드가 B보다 훨씬 높습니다.</p>
<p><span class="mark-no">❌ D</span> — Control Tower를 사용하지만 OU 추가가 언급되지 않아 다양한 규정 준수 요구 사항을 위한 유연성이 부족합니다. 또한 IAM ID 공급자(D)보다 IAM Identity Center(B)가 AD FS 연동에 더 적합한 관리형 서비스입니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'Control Tower가 중앙 로깅, Config, SCP, OU 구조를 자동 구성 → 운영 오버헤드 최소. IAM Identity Center가 AD FS 연동에 권장 방식. D는 OU 추가가 없고 IAM ID 공급자 방식이 덜 효율적.' },
    ]
  },
  {
    n: 335,
    en: `<p>An online magazine will launch its latest edition this month. This edition will be the first to be distributed globally. The magazine's dynamic website currently uses an Application Load Balancer in front of the web tier, a fleet of Amazon EC2 instances for web and application servers, and Amazon Aurora MySQL. Portions of the website include static content and almost all traffic is read-only.</p><p>The magazine is expecting a significant spike in internet traffic when the new edition is launched. Optimal performance is a top priority for the week following the launch.</p><p>Which combination of steps should a solutions architect take to reduce system response times for a global audience? (Choose two.)</p>`,
    ko: `<p>온라인 잡지가 이번 달 최신판을 출시할 예정입니다. 이번 판은 전 세계적으로 처음으로 배포될 예정입니다. 이 잡지의 동적 웹사이트는 현재 웹 계층 앞에 ALB, 웹 및 애플리케이션 서버용 EC2 인스턴스 집합, Amazon Aurora MySQL을 사용하고 있습니다. 웹사이트의 일부에는 정적 콘텐츠가 포함되어 있으며 거의 모든 트래픽은 읽기 전용입니다.</p><p>잡지는 새 판이 출시되면 인터넷 트래픽이 크게 급증할 것으로 예상합니다. 출시 다음 주에는 최적의 성능이 최우선 과제입니다.</p><p>전 세계 사용자의 시스템 응답 시간을 줄이기 위해 솔루션 설계자가 수행해야 하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 2,
    choices: [
      { k: 'A', en: `Use logical cross-Region replication to replicate the Aurora MySQL database to a secondary Region. Replace the web servers with Amazon S3. Deploy S3 buckets in cross-Region replication mode.`, ko: `논리적 교차 리전 복제를 사용하여 Aurora MySQL 데이터베이스를 보조 리전에 복제합니다. 웹 서버를 Amazon S3로 교체합니다. 리전 간 복제 모드로 S3 버킷을 배포합니다.` },
      { k: 'B', en: `Ensure the web and application tiers are each in Auto Scaling groups. Introduce an AWS Direct Connect connection. Deploy the web and application tiers in Regions across the world.`, ko: `웹 및 애플리케이션 계층이 각각 Auto Scaling 그룹에 있는지 확인합니다. AWS Direct Connect 연결을 도입합니다. 전 세계 리전에 웹 및 애플리케이션 계층을 배포합니다.` },
      { k: 'C', en: `Migrate the database from Amazon Aurora to Amazon RDS for MySQL. Ensure all three of the application tiers – web, application, and database – are in private subnets.`, ko: `Amazon Aurora에서 MySQL용 Amazon RDS로 데이터베이스를 마이그레이션합니다. 세 가지 애플리케이션 계층(웹, 애플리케이션, 데이터베이스)이 모두 프라이빗 서브넷에 있는지 확인합니다.` },
      { k: 'D', en: `Use an Aurora global database for physical cross-Region replication. Use Amazon S3 with cross-Region replication for static content and resources. Deploy the web and application tiers in Regions across the world.`, ko: `물리적 교차 리전 복제를 위해 Aurora 글로벌 데이터베이스를 사용합니다. 정적 콘텐츠 및 리소스에 대해 리전 간 복제와 함께 Amazon S3를 사용합니다. 전 세계 리전에 웹 및 애플리케이션 계층을 배포합니다.` },
      { k: 'E', en: `Introduce Amazon Route 53 with latency-based routing and Amazon CloudFront distributions. Ensure the web and application tiers are each in Auto Scaling groups.`, ko: `지연 시간 기반 라우팅 및 Amazon CloudFront 배포 기능을 갖춘 Amazon Route 53을 도입합니다. 웹 및 애플리케이션 계층이 각각 Auto Scaling 그룹에 있는지 확인합니다.` },
    ],
    answer: ['D', 'E'],
    vote: '100% DE',
    explain: `<p><span class="mark-ok">✅ D — Aurora 글로벌 데이터베이스 + S3 리전 간 복제 + 전 세계 웹/앱 계층 배포</span></p>
<p><strong>Aurora 글로벌 데이터베이스</strong>는 물리적 복제를 사용하여 1초 미만의 리전 간 복제 지연을 달성합니다. S3에 정적 콘텐츠를 리전 간 복제하고, 웹/앱 계층을 각 리전에 배포하면 사용자와 가까운 곳에서 서비스할 수 있습니다.</p>
<p><span class="mark-ok">✅ E — Route 53 지연 시간 기반 라우팅 + CloudFront + Auto Scaling</span></p>
<p><strong>CloudFront</strong>는 정적 콘텐츠를 엣지에서 캐싱하여 전 세계 응답 시간을 단축하고, <strong>Route 53 지연 시간 기반 라우팅</strong>은 사용자를 가장 빠른 리전으로 연결합니다. <strong>Auto Scaling</strong>은 트래픽 급증 시 용량을 자동 확장합니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html" target="_blank">AWS 공식 문서: Aurora 글로벌 데이터베이스</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 논리적 복제는 물리적 복제(D)보다 지연이 높습니다. 또한 동적 웹 서버를 S3로 단순히 교체할 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — Direct Connect는 온프레미스-AWS 전용선이며, 전 세계 사용자의 응답 시간 단축 목적에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Aurora에서 RDS for MySQL로 마이그레이션하는 것은 성능 향상이 아닌 다운그레이드입니다. 프라이빗 서브넷 이동도 응답 시간 단축과 무관합니다.</p>`,
    disc: [
      { ans: 'DE (100%)', txt: 'D: Aurora 글로벌 DB(물리적 복제) + S3 리전 간 복제 + 다중 리전 배포. E: CloudFront 캐싱 + Route 53 지연 시간 라우팅 + Auto Scaling으로 전 세계 성능 최적화.' },
    ]
  },
  {
    n: 336,
    en: `<p>An online gaming company needs to optimize the cost of its workloads on AWS. The company uses a dedicated account to host the production environment for its online gaming application and an analytics application.</p><p>Amazon EC2 instances host the gaming application and must always be available. The EC2 instances run all year. The analytics application uses data that is stored in Amazon S3. The analytics application can be interrupted and resumed without issue.</p><p>Which solution will meet these requirements MOST cost-effectively?</p>`,
    ko: `<p>온라인 게임 회사는 AWS에서 워크로드 비용을 최적화해야 합니다. 회사는 전용 계정을 사용하여 온라인 게임 애플리케이션과 분석 애플리케이션을 위한 프로덕션 환경을 호스팅합니다.</p><p>Amazon EC2 인스턴스는 게임 애플리케이션을 호스팅하며 항상 사용 가능해야 합니다. EC2 인스턴스는 일년 내내 실행됩니다. 분석 애플리케이션은 Amazon S3에 저장된 데이터를 사용합니다. 분석 애플리케이션은 문제 없이 중단되었다가 재개될 수 있습니다.</p><p>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Purchase an EC2 Instance Savings Plan for the online gaming application instances. Use On-Demand Instances for the analytics application.`, ko: `온라인 게임 애플리케이션 인스턴스에 대한 EC2 Instance Savings Plan을 구매합니다. 분석 애플리케이션에 온디맨드 인스턴스를 사용합니다.` },
      { k: 'B', en: `Purchase an EC2 Instance Savings Plan for the online gaming application instances. Use Spot Instances for the analytics application.`, ko: `온라인 게임 애플리케이션 인스턴스에 대한 EC2 Instance Savings Plan을 구매합니다. 분석 애플리케이션에 스팟 인스턴스를 사용합니다.` },
      { k: 'C', en: `Use Spot Instances for the online gaming application and the analytics application. Set up a catalog in AWS Service Catalog to provision services at a discount.`, ko: `온라인 게임 애플리케이션과 분석 애플리케이션에 스팟 인스턴스를 사용합니다. 할인된 가격으로 서비스를 프로비저닝하려면 AWS Service Catalog에 카탈로그를 설정합니다.` },
      { k: 'D', en: `Use On-Demand Instances for the online gaming application. Use Spot Instances for the analytics application. Set up a catalog in AWS Service Catalog to provision services at a discount.`, ko: `온라인 게임 애플리케이션에 온디맨드 인스턴스를 사용합니다. 분석 애플리케이션에 스팟 인스턴스를 사용합니다. 할인된 가격으로 서비스를 프로비저닝하려면 AWS Service Catalog에 카탈로그를 설정합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — EC2 Instance Savings Plan(게임) + 스팟 인스턴스(분석)</span></p>
<p>두 애플리케이션의 특성에 맞게 최적화된 조합입니다:<br>① <strong>게임 애플리케이션</strong>: 항상 실행되고 연중 내내 운영 → <strong>EC2 Instance Savings Plan</strong>으로 온디맨드 대비 최대 72% 절감. 중단 없이 예측 가능한 워크로드에 최적.<br>② <strong>분석 애플리케이션</strong>: 중단 및 재개 가능 → <strong>스팟 인스턴스</strong>로 온디맨드 대비 최대 90% 절감. 중단 허용 워크로드에 최적.</p>
<p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html" target="_blank">AWS 공식 문서: EC2 스팟 인스턴스</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Savings Plan은 게임 애플리케이션에 적합하나, 분석에 온디맨드를 사용하면 비용 절감 기회를 놓칩니다. 중단 가능한 워크로드에는 스팟이 훨씬 저렴합니다.</p>
<p><span class="mark-no">❌ C</span> — 게임 애플리케이션은 항상 가용해야 하므로 중단될 수 있는 스팟 인스턴스를 사용할 수 없습니다. AWS Service Catalog는 비용 절감 도구가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — 게임 애플리케이션에 온디맨드를 사용하면 Savings Plan 대비 비용이 높습니다. AWS Service Catalog도 비용 절감과 무관합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '게임: 연중 상시 운영 → Savings Plan(예측 가능, 고할인). 분석: 중단 허용 → 스팟 인스턴스(최대 90% 절감). AWS Service Catalog는 비용 절감 도구가 아님.' },
    ]
  },
  {
    n: 337,
    en: `<p>A company runs applications in hundreds of production AWS accounts. The company uses AWS Organizations with all features enabled and has a centralized backup operation that uses AWS Backup.</p><p>The company is concerned about ransomware attacks. To address this concern, the company has created a new policy that all backups must be resilient to breaches of privileged-user credentials in any production account.</p><p>Which combination of steps will meet this new requirement? (Choose three.)</p>`,
    ko: `<p>회사는 수백 개의 프로덕션 AWS 계정에서 애플리케이션을 실행합니다. 회사는 모든 기능이 활성화된 AWS Organizations를 사용하며 AWS Backup을 사용하는 중앙 집중식 백업 작업을 수행합니다.</p><p>회사는 랜섬웨어 공격을 우려하고 있습니다. 이러한 문제를 해결하기 위해 회사는 모든 백업이 모든 프로덕션 계정의 권한 있는 사용자 자격 증명 위반에 대해 복원력을 가져야 한다는 새로운 정책을 만들었습니다.</p><p>이 새로운 요구 사항을 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 3,
    choices: [
      { k: 'A', en: `Implement cross-account backup with AWS Backup vaults in designated non-production accounts.`, ko: `지정된 비프로덕션 계정에서 AWS Backup 볼트를 사용하여 교차 계정 백업을 구현합니다.` },
      { k: 'B', en: `Add an SCP that restricts the modification of AWS Backup vaults.`, ko: `AWS Backup 볼트 수정을 제한하는 SCP를 추가합니다.` },
      { k: 'C', en: `Implement AWS Backup Vault Lock in compliance mode.`, ko: `규정 준수 모드에서 AWS Backup Vault Lock을 구현합니다.` },
      { k: 'D', en: `Configure the backup frequency, lifecycle, and retention period to ensure that at least one backup always exists in the cold tier.`, ko: `콜드 계층에 항상 하나 이상의 백업이 존재하도록 백업 빈도, 수명 주기 및 보존 기간을 구성합니다.` },
      { k: 'E', en: `Configure AWS Backup to write all backups to an Amazon S3 bucket in a designated non-production account. Ensure that the S3 bucket has S3 Object Lock enabled.`, ko: `지정된 비프로덕션 계정의 Amazon S3 버킷에 모든 백업을 기록하도록 AWS Backup을 구성합니다. S3 버킷에 S3 객체 잠금이 활성화되어 있는지 확인합니다.` },
    ],
    answer: ['A', 'B', 'C'],
    vote: '57% ABC',
    explain: `<p><span class="mark-ok">✅ A — 비프로덕션 계정으로 교차 계정 백업</span></p>
<p>프로덕션 계정의 자격 증명이 침해되더라도 별도의 비프로덕션 계정에 저장된 백업은 영향을 받지 않습니다. 계정 격리가 핵심입니다.</p>
<p><span class="mark-ok">✅ B — SCP로 Backup 볼트 수정 제한</span></p>
<p>Organizations SCP로 프로덕션 계정에서 Backup 볼트 수정을 제한하면, 침해된 자격 증명으로도 볼트를 변경하거나 백업을 삭제할 수 없습니다.</p>
<p><span class="mark-ok">✅ C — Backup Vault Lock 규정 준수 모드</span></p>
<p><strong>규정 준수 모드</strong>의 Vault Lock은 보존 기간 동안 루트 사용자를 포함한 누구도 백업을 삭제하거나 설정을 변경할 수 없습니다. 한번 설정하면 취소할 수 없어 가장 강력한 불변성을 제공합니다.</p>
<p><a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html" target="_blank">AWS 공식 문서: AWS Backup Vault Lock</a></p>`,
    wrong: `<p><span class="mark-no">❌ D</span> — 콜드 계층 백업 보존 설정은 백업 접근성을 높이지만, 침해된 자격 증명으로 백업을 삭제하는 것을 직접 막지는 못합니다.</p>
<p><span class="mark-no">❌ E</span> — <strong>AWS Backup은 S3를 백업 저장 위치(볼트)로 직접 지원하지 않습니다.</strong> AWS Backup으로 S3 버킷을 백업할 수는 있지만, 백업 데이터를 S3에 저장하는 것은 불가능합니다.</p>`,
    disc: [
      { ans: 'ABC (57%)', txt: 'A: 계정 격리로 프로덕션 침해 시 보호. B: SCP로 볼트 수정 차단. C: Vault Lock 규정 준수 모드로 루트도 삭제 불가. D: 수명 주기는 삭제 방지와 무관. E: Backup의 S3 볼트 미지원.' },
      { ans: 'ACD (23%)', txt: 'B(SCP) 대신 D(수명 주기)를 포함하는 의견. 하지만 수명 주기 구성은 자격 증명 침해 방어와 직접적인 관련이 없음.' },
    ]
  },
  {
    n: 338,
    en: `<p>A company needs to aggregate Amazon CloudWatch logs from its AWS accounts into one central logging account. The collected logs must remain in the AWS Region of creation. The central logging account will then process the logs, normalize the logs into standard output format, and stream the output logs to a security tool for more processing.</p><p>A solutions architect must design a solution that can handle a large volume of logging data that needs to be ingested. Less logging will occur outside normal business hours than during normal business hours. The logging solution must scale with the anticipated load. The solutions architect has decided to use an AWS Control Tower design to handle the multi-account logging process.</p><p>Which combination of steps should the solutions architect take to meet the requirements? (Choose three.)</p>`,
    ko: `<p>회사는 AWS 계정의 Amazon CloudWatch 로그를 하나의 중앙 로깅 계정으로 집계해야 합니다. 수집된 로그는 생성된 AWS 리전에 남아 있어야 합니다. 그런 다음 중앙 로깅 계정은 로그를 처리하고, 로그를 표준 출력 형식으로 정규화하고, 추가 처리를 위해 출력 로그를 보안 도구로 스트리밍합니다.</p><p>솔루션 설계자는 수집해야 하는 대량의 로깅 데이터를 처리할 수 있는 솔루션을 설계해야 합니다. 정규 업무 시간 동안보다 정규 업무 시간 외에는 로깅이 덜 발생합니다. 로깅 솔루션은 예상 부하에 따라 확장되어야 합니다.</p><p>솔루션 설계자는 요구 사항을 충족하기 위해 어떤 단계 조합을 수행해야 합니까? (3개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 3,
    choices: [
      { k: 'A', en: `Create a destination Amazon Kinesis data stream in the central logging account.`, ko: `중앙 로깅 계정에 대상 Amazon Kinesis 데이터 스트림을 생성합니다.` },
      { k: 'B', en: `Create a destination Amazon Simple Queue Service (Amazon SQS) queue in the central logging account.`, ko: `중앙 로깅 계정에 대상 Amazon SQS 대기열을 생성합니다.` },
      { k: 'C', en: `Create an IAM role that grants Amazon CloudWatch Logs the permission to add data to the Amazon Kinesis data stream. Create a trust policy. Specify the trust policy in the IAM role. In each member account, create a subscription filter for each log group to send data to the Kinesis data stream.`, ko: `Amazon CloudWatch Logs에 Amazon Kinesis 데이터 스트림에 데이터를 추가할 수 있는 권한을 부여하는 IAM 역할을 생성합니다. 신뢰 정책을 만들고 IAM 역할에 신뢰 정책을 지정합니다. 각 회원 계정에서 각 로그 그룹에 대한 구독 필터를 생성하여 Kinesis 데이터 스트림으로 데이터를 보냅니다.` },
      { k: 'D', en: `Create an IAM role that grants Amazon CloudWatch Logs the permission to add data to the Amazon SQS queue. Create a trust policy. Specify the trust policy in the IAM role. In each member account, create a single subscription filter for all log groups to send data to the SQS queue.`, ko: `Amazon CloudWatch Logs에 Amazon SQS 대기열에 데이터를 추가할 수 있는 권한을 부여하는 IAM 역할을 생성합니다. 신뢰 정책을 만들고 IAM 역할에 신뢰 정책을 지정합니다. 각 회원 계정에서 모든 로그 그룹에 대한 단일 구독 필터를 생성하여 SQS 대기열로 데이터를 보냅니다.` },
      { k: 'E', en: `Create an AWS Lambda function. Program the Lambda function to normalize the logs in the central logging account and to write the logs to the security tool.`, ko: `AWS Lambda 함수를 생성합니다. 중앙 로깅 계정의 로그를 정규화하고 보안 도구에 로그를 쓰도록 Lambda 함수를 프로그래밍합니다.` },
      { k: 'F', en: `Create an AWS Lambda function. Program the Lambda function to normalize the logs in the member accounts and to write the logs to the security tool.`, ko: `AWS Lambda 함수를 생성합니다. 회원 계정의 로그를 정규화하고 보안 도구에 로그를 쓰도록 Lambda 함수를 프로그래밍합니다.` },
    ],
    answer: ['A', 'C', 'E'],
    vote: '100% ACE',
    explain: `<p><span class="mark-ok">✅ A — 중앙 로깅 계정에 Kinesis 데이터 스트림 생성</span></p>
<p><strong>CloudWatch Logs 구독 필터</strong>의 지원 대상은 Kinesis Data Streams, Kinesis Data Firehose, Lambda입니다. <strong>SQS는 CloudWatch Logs 구독 대상으로 지원되지 않으므로</strong> B는 불가합니다. Kinesis Data Streams는 부하에 따라 자동 확장되어 가변적인 로깅 볼륨을 처리할 수 있습니다.</p>
<p><span class="mark-ok">✅ C — IAM 역할 + 각 로그 그룹 구독 필터 → Kinesis</span></p>
<p>회원 계정의 각 로그 그룹에서 중앙 Kinesis 스트림으로 데이터를 전달합니다.</p>
<p><span class="mark-ok">✅ E — 중앙 로깅 계정에서 Lambda로 정규화 후 보안 도구 전송</span></p>
<p>로그 처리 및 정규화는 중앙 계정에서 수행하는 것이 올바른 아키텍처입니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CrossAccountSubscriptions.html" target="_blank">AWS 공식 문서: CloudWatch Logs 교차 계정 구독</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Amazon SQS는 CloudWatch Logs 구독 필터의 지원 대상이 아닙니다. CloudWatch Logs 구독은 Kinesis Data Streams, Kinesis Firehose, Lambda만 지원합니다.</p>
<p><span class="mark-no">❌ D</span> — SQS를 사용할 수 없으므로 D도 제외됩니다. 또한 모든 로그 그룹에 대한 단일 구독 필터 방식은 로그 그룹별 세밀한 제어가 어렵습니다.</p>
<p><span class="mark-no">❌ F</span> — 로그 처리와 정규화는 중앙 로깅 계정에서 해야 합니다(E). 회원 계정에서 처리하면 각 계정에 Lambda를 배포해야 하는 운영 오버헤드가 발생합니다.</p>`,
    disc: [
      { ans: 'ACE (100%)', txt: 'CloudWatch Logs 구독 → SQS 불지원, Kinesis 지원(A 선택). 중앙 계정 Kinesis → Lambda로 정규화 → 보안 도구(E). 회원 계정별 구독 필터로 Kinesis 전송(C).' },
    ]
  },
  {
    n: 339,
    en: `<p>A company is migrating a legacy application from an on-premises data center to AWS. The application consists of a single application server and a Microsoft SQL Server database server. Each server is deployed on a VMware VM that consumes 500 TB of data across multiple attached volumes.</p><p>The company has established a 10 Gbps AWS Direct Connect connection from the closest AWS Region to its on-premises data center. The Direct Connect connection is not currently in use by other services.</p><p>Which combination of steps should a solutions architect take to migrate the application with the LEAST amount of downtime? (Choose two.)</p>`,
    ko: `<p>회사는 온프레미스 데이터 센터의 레거시 애플리케이션을 AWS로 마이그레이션하고 있습니다. 애플리케이션은 단일 애플리케이션 서버와 Microsoft SQL Server 데이터베이스 서버로 구성됩니다. 각 서버는 여러 연결된 볼륨에서 500TB의 데이터를 사용하는 VMware VM에 배포됩니다.</p><p>회사는 가장 가까운 AWS 리전에서 온프레미스 데이터 센터까지 10Gbps AWS Direct Connect 연결을 설정했습니다. Direct Connect 연결은 현재 다른 서비스에서 사용되지 않습니다.</p><p>가동 중지 시간을 최소화하면서 애플리케이션을 마이그레이션하려면 솔루션 설계자가 수행해야 하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 2,
    choices: [
      { k: 'A', en: `Use an AWS Server Migration Service (AWS SMS) replication job to migrate the database server VM to AWS.`, ko: `AWS SMS(AWS Server Migration Service) 복제 작업을 사용하여 데이터베이스 서버 VM을 AWS로 마이그레이션합니다.` },
      { k: 'B', en: `Use VM Import/Export to import the application server VM.`, ko: `VM Import/Export를 사용하여 애플리케이션 서버 VM을 가져옵니다.` },
      { k: 'C', en: `Export the VM images to an AWS Snowball Edge Storage Optimized device.`, ko: `VM 이미지를 AWS Snowball Edge Storage Optimized 디바이스로 내보냅니다.` },
      { k: 'D', en: `Use an AWS Server Migration Service (AWS SMS) replication job to migrate the application server VM to AWS.`, ko: `AWS SMS(AWS Server Migration Service) 복제 작업을 사용하여 애플리케이션 서버 VM을 AWS로 마이그레이션합니다.` },
      { k: 'E', en: `Use an AWS Database Migration Service (AWS DMS) replication instance to migrate the database to an Amazon RDS DB instance.`, ko: `AWS DMS(AWS Database Migration Service) 복제 인스턴스를 사용하여 데이터베이스를 Amazon RDS DB 인스턴스로 마이그레이션합니다.` },
    ],
    answer: ['D', 'E'],
    vote: '59% DE / 31% AD',
    explain: `<p><span class="mark-ok">✅ D — AWS SMS로 애플리케이션 서버 VM 복제</span></p>
<p><strong>AWS Server Migration Service(SMS)</strong>는 VMware VM의 증분 라이브 복제를 지원합니다. 운영 중인 VM을 지속적으로 AWS에 동기화하여 최종 전환 시 다운타임을 최소화합니다.</p>
<p><span class="mark-ok">✅ E — AWS DMS로 SQL Server → RDS 마이그레이션</span></p>
<p><strong>AWS DMS</strong>는 운영 중인 데이터베이스에서 지속적인 변경 데이터 캡처(CDC)를 통해 최소 다운타임으로 마이그레이션합니다. 500TB 데이터를 10Gbps Direct Connect를 통해 전송하는 것이 Snowball보다 빠릅니다(10Gbps = ~1.25GB/s, 500TB ≈ 4.5일).</p>
<p><a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html" target="_blank">AWS 공식 문서: AWS SMS</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 데이터베이스 서버에 SMS를 사용하면 DB가 EC2에서 실행되므로 관리 오버헤드가 증가합니다. DMS를 통해 RDS로 마이그레이션하는 것이 최소 다운타임과 관리 측면에서 더 적합합니다.</p>
<p><span class="mark-no">❌ B</span> — VM Import/Export는 일회성 오프라인 가져오기이며 증분 동기화를 지원하지 않아 다운타임이 더 깁니다. SMS가 VM Import/Export의 개선 버전으로 권장됩니다.</p>
<p><span class="mark-no">❌ C</span> — Snowball Edge 디바이스 배송은 10Gbps Direct Connect를 통한 전송보다 훨씬 오래 걸립니다(배송 왕복 수일).</p>`,
    disc: [
      { ans: 'DE (59%)', txt: 'SMS: VMware VM 증분 라이브 복제 → 최소 다운타임. DMS + CDC: DB 운영 중 마이그레이션 → 최소 다운타임. 10Gbps DX로 Snowball보다 빠른 전송.' },
      { ans: 'AD (31%)', txt: 'RDS SQL Server 최대 16TB 제한으로 E(DMS→RDS) 불가, 대신 A(SMS로 DB VM 복제)를 주장. 하지만 500TB는 두 VM 합계이며 DB 단독 크기 아닐 수 있다는 반론.' },
    ]
  },
  {
    n: 340,
    en: `<p>A company operates a fleet of servers on premises and operates a fleet of Amazon EC2 instances in its organization in AWS Organizations. The company's AWS accounts contain hundreds of VPCs. The company wants to connect its AWS accounts to its on-premises network. AWS Site-to-Site VPN connections are already established to a single AWS account. The company wants to control which VPCs can communicate with other VPCs.</p><p>Which combination of steps will achieve this level of control with the LEAST operational effort? (Choose three.)</p>`,
    ko: `<p>회사는 온프레미스로 서버 집합을 운영하고 AWS Organizations의 조직에서 Amazon EC2 인스턴스 집합을 운영합니다. 회사의 AWS 계정에는 수백 개의 VPC가 포함되어 있습니다. 회사는 AWS 계정을 온프레미스 네트워크에 연결하려고 합니다. AWS Site-to-Site VPN 연결은 이미 단일 AWS 계정에 설정되어 있습니다. 회사는 어떤 VPC가 다른 VPC와 통신할 수 있는지 제어하려고 합니다.</p><p>최소한의 운영 노력으로 이러한 수준의 제어를 달성할 수 있는 단계 조합은 무엇입니까? (3개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 3,
    choices: [
      { k: 'A', en: `Create a transit gateway in an AWS account. Share the transit gateway across accounts by using AWS Resource Access Manager (AWS RAM).`, ko: `AWS 계정에서 전송 게이트웨이를 생성합니다. AWS Resource Access Manager(AWS RAM)를 사용하여 계정 간에 전송 게이트웨이를 공유합니다.` },
      { k: 'B', en: `Configure attachments to all VPCs and VPNs.`, ko: `모든 VPC 및 VPN에 대한 연결을 구성합니다.` },
      { k: 'C', en: `Setup transit gateway route tables. Associate the VPCs and VPNs with the route tables.`, ko: `Transit Gateway 라우팅 테이블을 설정합니다. VPC 및 VPN을 라우팅 테이블과 연결합니다.` },
      { k: 'D', en: `Configure VPC peering between the VPCs.`, ko: `VPC 간 VPC 피어링을 구성합니다.` },
      { k: 'E', en: `Configure attachments between the VPCs and VPNs.`, ko: `VPC와 VPN 간의 연결을 구성합니다.` },
      { k: 'F', en: `Setup route tables on the VPCs and VPNs.`, ko: `VPC 및 VPN에 라우팅 테이블을 설정합니다.` },
    ],
    answer: ['A', 'B', 'C'],
    vote: '63% ABC / 37% ACE',
    explain: `<p><span class="mark-ok">✅ A — Transit Gateway 생성 + AWS RAM으로 계정 간 공유</span></p>
<p><strong>Transit Gateway</strong>는 수백 개의 VPC와 VPN을 단일 허브로 연결하는 허브 앤 스포크 아키텍처를 제공합니다. AWS RAM으로 여러 계정에서 단일 TGW를 공유하면 VPC 피어링처럼 N×(N-1)/2 개의 연결을 관리할 필요가 없습니다.</p>
<p><span class="mark-ok">✅ B — 모든 VPC 및 VPN에 대한 TGW 연결 구성</span></p>
<p>모든 VPC와 VPN을 TGW에 연결합니다. E("VPC와 VPN 간 연결")는 잘못된 표현입니다. 연결은 각 VPC→TGW 및 VPN→TGW 방식으로 이루어지며, VPC와 VPN 사이에 직접 연결하는 것이 아닙니다.</p>
<p><span class="mark-ok">✅ C — Transit Gateway 라우팅 테이블 설정 + VPC/VPN 연결</span></p>
<p>TGW 라우팅 테이블을 통해 <strong>어떤 VPC가 어떤 VPC와 통신할 수 있는지 세밀하게 제어</strong>합니다. 격리 또는 공유 라우팅 테이블을 구성하여 통신 정책을 적용합니다.</p>
<p><a href="https://docs.aws.amazon.com/vpc/latest/tgw/TGW_Scenarios.html" target="_blank">AWS 공식 문서: Transit Gateway 시나리오</a></p>`,
    wrong: `<p><span class="mark-no">❌ D</span> — VPC 피어링은 수백 개의 VPC 환경에서 관리가 매우 복잡하고(VPC 간 N×(N-1)/2 연결 필요), 전이적 라우팅을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — "VPC와 VPN 간의 연결 구성"은 개념적으로 잘못된 표현입니다. TGW 아키텍처에서는 VPC→TGW 및 VPN→TGW 연결을 각각 구성하며, VPC와 VPN 사이에 직접 연결하지 않습니다. B가 올바른 표현입니다.</p>
<p><span class="mark-no">❌ F</span> — VPC 라우팅 테이블은 TGW 통신 제어의 주요 도구가 아닙니다. TGW 라우팅 테이블(C)에서 통신 정책을 제어하는 것이 표준입니다.</p>`,
    disc: [
      { ans: 'ABC (63%)', txt: 'B: "모든 VPC 및 VPN에 대한 연결" = TGW 연결. E: "VPC와 VPN 간 연결"은 잘못된 구성 방식. TGW는 허브-스포크 구조로 B가 정확한 표현.' },
      { ans: 'ACE (37%)', txt: '"모든 VPC에 연결할 필요 없다(B 거부)"는 주장. 하지만 통신 제어는 TGW 라우팅 테이블(C)로 하므로, 연결 자체는 모두 필요함.' },
    ]
  },
];