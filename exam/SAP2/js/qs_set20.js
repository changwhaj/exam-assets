window.QS_SET20 = [
  {
    n: 191,
    en: `A company is planning to migrate an application to AWS. The application runs as a Docker container and uses an NFS version 4 file share.<br><br>A solutions architect must design a secure and scalable containerized solution that does not require provisioning or management of the underlying infrastructure.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사에서 애플리케이션을 AWS로 마이그레이션할 계획입니다. 애플리케이션은 Docker 컨테이너로 실행되며 NFS 버전 4 파일 공유를 사용합니다.<br><br>솔루션 설계자는 기본 인프라의 프로비저닝이나 관리가 필요하지 않은 안전하고 확장 가능한 컨테이너형 솔루션을 설계해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Deploy the application containers by using Amazon Elastic Container Service (Amazon ECS) with the Fargate launch type. Use Amazon Elastic File System (Amazon EFS) for shared storage. Reference the EFS file system ID, container mount point, and EFS authorization IAM role in the ECS task definition.`, ko:`Fargate 시작 유형과 함께 Amazon Elastic Container Service(Amazon ECS)를 사용하여 애플리케이션 컨테이너를 배포합니다. 공유 스토리지에는 Amazon Elastic File System(Amazon EFS)을 사용하십시오. ECS 작업 정의에서 EFS 파일 시스템 ID, 컨테이너 탑재 지점 및 EFS 권한 부여 IAM 역할을 참조하세요.` },
      { k:'B', en:`Deploy the application containers by using Amazon Elastic Container Service (Amazon ECS) with the Fargate launch type. Use Amazon FSx for Lustre for shared storage. Reference the FSx for Lustre file system ID, container mount point, and FSx for Lustre authorization IAM role in the ECS task definition.`, ko:`Fargate 시작 유형과 함께 Amazon Elastic Container Service(Amazon ECS)를 사용하여 애플리케이션 컨테이너를 배포합니다. 공유 스토리지에는 Lustre용 Amazon FSx를 사용하세요. ECS 작업 정의에서 Lustre용 FSx 파일 시스템 ID, 컨테이너 탑재 지점 및 Lustre용 FSx 인증 IAM 역할을 참조하세요.` },
      { k:'C', en:`Deploy the application containers by using Amazon Elastic Container Service (Amazon ECS) with the Amazon EC2 launch type and auto scaling turned on. Use Amazon Elastic File System (Amazon EFS) for shared storage. Mount the EFS file system on the ECS container instances. Add the EFS authorization IAM role to the EC2 instance profile.`, ko:`Amazon EC2 시작 유형 및 자동 크기 조정이 활성화된 Amazon Elastic Container Service(Amazon ECS)를 사용하여 애플리케이션 컨테이너를 배포합니다. 공유 스토리지에는 Amazon Elastic File System(Amazon EFS)을 사용하십시오. ECS 컨테이너 인스턴스에 EFS 파일 시스템을 마운트합니다. EC2 인스턴스 프로필에 EFS 권한 부여 IAM 역할을 추가합니다.` },
      { k:'D', en:`Deploy the application containers by using Amazon Elastic Container Service (Amazon ECS) with the Amazon EC2 launch type and auto scaling turned on. Use Amazon Elastic Block Store (Amazon EBS) volumes with Multi-Attach enabled for shared storage. Attach the EBS volumes to ECS container instances. Add the EBS authorization IAM role to an EC2 instance profile.`, ko:`Amazon EC2 시작 유형 및 자동 크기 조정이 활성화된 Amazon Elastic Container Service(Amazon ECS)를 사용하여 애플리케이션 컨테이너를 배포합니다. 공유 스토리지에 대해 다중 연결이 활성화된 Amazon Elastic Block Store(Amazon EBS) 볼륨을 사용하십시오. EBS 볼륨을 ECS 컨테이너 인스턴스에 연결합니다. EC2 인스턴스 프로필에 EBS 권한 부여 IAM 역할을 추가합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — ECS Fargate + Amazon EFS(NFS v4 지원)</span></p>
<p>두 가지 요건을 모두 충족합니다. <strong>AWS Fargate</strong>는 기본 인프라(EC2 인스턴스) 프로비저닝 및 관리가 필요 없는 서버리스 컨테이너 실행 환경입니다. <strong>Amazon EFS</strong>는 NFS 버전 4 프로토콜을 지원하는 완전 관리형 공유 파일 시스템으로 여러 Fargate 태스크에서 동시 마운트가 가능합니다. ECS 태스크 정의에서 EFS 파일 시스템 ID와 마운트 포인트를 참조하면 자동으로 NFS v4로 마운트됩니다.</p>
<p><a href="https://aws.amazon.com/about-aws/whats-new/2017/03/amazon-elastic-file-system-amazon-efs-now-supports-nfsv4-lock-upgrading-and-downgrading/" target="_blank">AWS 공식: EFS NFS v4 지원</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — FSx for Lustre는 AWS Fargate 시작 유형에서 지원되지 않습니다. 또한 NFS가 아닌 Lustre 전용 프로토콜을 사용합니다.</p>
<p><span class="mark-no">❌ C/D</span> — EC2 시작 유형은 기본 인프라(EC2 인스턴스) 프로비저닝 및 관리가 필요하여 "기본 인프라 관리 불필요" 요건을 충족하지 못합니다. 또한 D의 EBS 다중 연결은 단일 AZ 내에서만 동작합니다.</p>`,
    disc: [
      { ans:'A (100%)', txt:'Fargate=서버리스(인프라 관리 불필요). EFS=NFS v4 지원+완전 관리형. FSx for Lustre는 Fargate 미지원. EC2 기반 C/D는 인프라 관리 필요' },
    ]
  },
  {
    n: 192,
    en: `A company is running an application in the AWS Cloud. The core business logic is running on a set of Amazon EC2 instances in an Auto Scaling group. An Application Load Balancer (ALB) distributes traffic to the EC2 instances. Amazon Route 53 record api.example.com is pointing to the ALB.<br><br>The company's development team makes major updates to the business logic. The company has a rule that when changes are deployed, only 10% of customers can receive the new logic during a testing window. A customer must use the same version of the business logic during the testing window.<br><br>How should the company deploy the updates to meet these requirements?`,
    ko: `한 회사가 AWS 클라우드에서 애플리케이션을 실행하고 있습니다. 핵심 비즈니스 로직은 Auto Scaling 그룹의 Amazon EC2 인스턴스 세트에서 실행됩니다. Application Load Balancer(ALB)는 트래픽을 EC2 인스턴스에 분산합니다. Amazon Route 53 레코드 api.example.com이 ALB를 가리키고 있습니다.<br><br>회사의 개발 팀은 비즈니스 로직을 크게 업데이트합니다. 회사에는 변경 사항이 배포되면 테스트 기간 동안 고객 중 10%만 새 논리를 받을 수 있다는 규칙이 있습니다. 고객은 테스트 기간 동안 동일한 버전의 비즈니스 로직을 사용해야 합니다.<br><br>회사는 이러한 요구 사항을 충족하기 위해 업데이트를 어떻게 배포해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create a second ALB, and deploy the new logic to a set of EC2 instances in a new Auto Scaling group. Configure the ALB to distribute traffic to the EC2 instances. Update the Route 53 record to use weighted routing, and point the record to both of the ALBs.`, ko:`두 번째 ALB를 생성하고 새 Auto Scaling 그룹의 EC2 인스턴스 세트에 새 로직을 배포합니다. EC2 인스턴스에 트래픽을 분산하도록 ALB를 구성합니다. 가중치 기반 라우팅을 사용하도록 Route 53 레코드를 업데이트하고 레코드가 두 ALB를 모두 가리키도록 합니다.` },
      { k:'B', en:`Create a second target group that is referenced by the ALB. Deploy the new logic to EC2 instances in this new target group. Update the ALB listener rule to use weighted target groups. Configure ALB target group stickiness.`, ko:`ALB에서 참조하는 두 번째 대상 그룹을 생성합니다. 이 새 대상 그룹의 EC2 인스턴스에 새 논리를 배포합니다. 가중치가 적용된 대상 그룹을 사용하도록 ALB 리스너 규칙을 업데이트합니다. ALB 대상 그룹 고정성을 구성합니다.` },
      { k:'C', en:`Create a new launch configuration for the Auto Scaling group. Specify the launch configuration to use the AutoScalingRollingUpdate policy, and set the MaxBatchSize option to 10. Replace the launch configuration on the Auto Scaling group. Deploy the changes.`, ko:`Auto Scaling 그룹에 대한 새로운 시작 구성을 생성합니다. AutoScalingRollingUpdate 정책을 사용하도록 시작 구성을 지정하고 MaxBatchSize 옵션을 10으로 설정합니다. Auto Scaling 그룹에서 시작 구성을 바꿉니다. 변경 사항을 배포합니다.` },
      { k:'D', en:`Create a second Auto Scaling group that is referenced by the ALB. Deploy the new logic on a set of EC2 instances in this new Auto Scaling group. Change the ALB routing algorithm to least outstanding requests (LOR). Configure ALB session stickiness.`, ko:`ALB에서 참조하는 두 번째 Auto Scaling 그룹을 생성합니다. 이 새로운 Auto Scaling 그룹의 EC2 인스턴스 세트에 새 로직을 배포합니다. ALB 라우팅 알고리즘을 LOR(최소 미해결 요청)로 변경합니다. ALB 세션 고정성을 구성합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — ALB 가중치 대상 그룹(Weighted Target Groups) + 대상 그룹 고정성(Stickiness)</span></p>
<p>이것은 카나리아 배포(Canary Deployment) 패턴입니다. <strong>ALB 가중치 대상 그룹</strong>을 사용하면 기존 버전과 새 버전에 대한 트래픽 비율(90:10)을 정밀하게 제어할 수 있습니다. <strong>대상 그룹 고정성(Target Group Stickiness)</strong>은 한번 라우팅된 고객이 테스트 기간 동안 동일한 버전(대상 그룹)에 계속 연결되도록 보장합니다. 단일 ALB에서 두 대상 그룹을 관리하므로 운영이 간단합니다.</p>
<p><a href="https://aws.amazon.com/blogs/aws/new-application-load-balancer-simplifies-deployment-with-weighted-target-groups/" target="_blank">AWS 공식 블로그: ALB 가중치 대상 그룹</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Route 53 가중치 라우팅은 DNS 기반이어서 DNS TTL 동안 같은 사용자가 다른 ALB로 전환될 수 있습니다. 고객이 테스트 기간 동안 동일한 버전을 사용한다는 요건을 충분히 보장하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — 롤링 업데이트는 점진적으로 인스턴스를 교체하지만 특정 고객에게만 새 로직을 제공하거나 고객별 버전 고정을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — LOR(최소 미해결 요청) 알고리즘은 부하 분산 방식이며 10% 트래픽 제어에 적합하지 않습니다.</p>`,
    disc: [
      { ans:'B (100%)', txt:'카나리아 배포 = ALB 가중치 대상 그룹(90:10). 대상 그룹 고정성으로 동일 고객이 테스트 기간 동안 동일 버전 사용 보장. Route 53 가중치 라우팅(A)은 DNS TTL로 인한 버전 불일치 가능' },
    ]
  },
  {
    n: 193,
    en: `A large education company recently introduced Amazon Workspaces to provide access to internal applications across multiple universities. The company is storing user profiles on an Amazon FSx for Windows File Server file system. The file system is configured with a DNS alias and is connected to a self-managed Active Directory. As more users begin to use the Workspaces, login time increases to unacceptable levels.<br><br>An investigation reveals a degradation in performance of the file system. The company created the file system on HDD storage with a throughput of 16 MBps. A solutions architect must improve the performance of the file system during a defined maintenance window.<br><br>What should the solutions architect do to meet these requirements with the LEAST administrative effort?`,
    ko: `한 대규모 교육 회사는 최근 여러 대학에서 내부 애플리케이션에 대한 액세스를 제공하기 위해 Amazon Workspaces를 도입했습니다. 회사는 Windows 파일 서버용 Amazon FSx 파일 시스템에 사용자 프로필을 저장하고 있습니다. 파일 시스템은 DNS 별칭으로 구성되고 자체 관리형 Active Directory에 연결됩니다. 더 많은 사용자가 작업 공간을 사용하기 시작하면 로그인 시간이 허용할 수 없는 수준으로 늘어납니다.<br><br>조사 결과 파일 시스템의 성능 저하가 드러났습니다. 회사는 16MBps의 처리량으로 HDD 스토리지에 파일 시스템을 만들었습니다. 솔루션 설계자는 정의된 유지 관리 기간 동안 파일 시스템의 성능을 개선해야 합니다.<br><br>최소한의 관리 노력으로 이러한 요구 사항을 충족하려면 솔루션 설계자가 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use AWS Backup to create a point-in-time backup of the file system. Restore the backup to a new FSx for Windows File Server file system. Select SSD as the storage type. Select 32 MBps as the throughput capacity. When the backup and restore process is completed, adjust the DNS alias accordingly. Delete the original file system.`, ko:`AWS Backup을 사용하여 파일 시스템의 특정 시점 백업을 생성하십시오. 백업을 새로운 FSx for Windows File Server 파일 시스템으로 복원합니다. 스토리지 유형으로 SSD를 선택합니다. 처리량 용량으로 32MBps를 선택합니다. 백업 및 복원 프로세스가 완료되면 그에 따라 DNS 별칭을 조정합니다. 원본 파일 시스템을 삭제합니다.` },
      { k:'B', en:`Disconnect users from the file system. In the Amazon FSx console, update the throughput capacity to 32 MBps. Update the storage type to SSD. Reconnect users to the file system.`, ko:`파일 시스템에서 사용자 연결을 끊습니다. Amazon FSx 콘솔에서 처리량 용량을 32MBps로 업데이트합니다. 스토리지 유형을 SSD로 업데이트합니다. 사용자를 파일 시스템에 다시 연결합니다.` },
      { k:'C', en:`Deploy an AWS DataSync agent onto a new Amazon EC2 instance. Create a task. Configure the existing file system as the source location. Configure a new FSx for Windows File Server file system with SSD storage and 32 MBps of throughput as the target location. Schedule the task. When the task is completed, adjust the DNS alias accordingly. Delete the original file system.`, ko:`AWS DataSync 에이전트를 새로운 Amazon EC2 인스턴스에 배포합니다. 작업을 만듭니다. 기존 파일 시스템을 소스 위치로 구성합니다. SSD 스토리지와 32MBps의 처리량을 대상 위치로 사용하여 Windows 파일 서버 파일 시스템용 새 FSx를 구성합니다. 작업을 예약합니다. 작업이 완료되면 그에 따라 DNS 별칭을 조정합니다. 원본 파일 시스템을 삭제합니다.` },
      { k:'D', en:`Enable shadow copies on the existing file system by using a Windows PowerShell command. Schedule the shadow copy job to create a point-in-time backup of the file system. Choose to restore previous versions. Create a new FSx for Windows File Server file system with SSD storage and 32 MBps of throughput. When the copy job is completed, adjust the DNS alias. Delete the original file system.`, ko:`Windows PowerShell 명령을 사용하여 기존 파일 시스템에서 섀도 복사본을 활성화합니다. 파일 시스템의 특정 시점 백업을 생성하도록 섀도 복사본 작업을 예약합니다. 이전 버전을 복원하려면 선택하세요. SSD 스토리지와 32MBps의 처리량을 갖춘 새로운 FSx for Windows File Server 파일 시스템을 생성합니다. 복사 작업이 완료되면 DNS 별칭을 조정합니다. 원본 파일 시스템을 삭제합니다.` },
    ],
    answer: ['B'],
    vote: '63% B',
    explain: `<p><span class="mark-ok">✅ B — Amazon FSx 콘솔에서 처리량/스토리지 유형 직접 업데이트</span></p>
<p>2023년 이후 Amazon FSx for Windows File Server는 콘솔 또는 API를 통해 HDD에서 SSD로 스토리지 유형을 직접 변경할 수 있습니다. 처리량 용량도 콘솔에서 직접 변경 가능합니다. 정의된 유지 관리 기간 동안 사용자 연결을 끊고 설정을 변경한 후 다시 연결하면 됩니다. DNS 별칭 변경이나 새 파일 시스템 생성이 필요 없어 관리 노력이 가장 적습니다.</p>
<p><a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-type.html" target="_blank">AWS 공식 문서: FSx for Windows 스토리지 유형 변경</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Backup을 사용한 백업/복원은 데이터 크기에 따라 시간이 오래 걸리고 DNS 별칭 변경이 필요하여 관리 노력이 더 높습니다. 또한 백업 이후 변경된 데이터는 새 파일 시스템에 없어 데이터 손실 위험이 있습니다.</p>
<p><span class="mark-no">❌ C</span> — DataSync는 두 파일 시스템 간 데이터 마이그레이션에 사용하지만 새 EC2 인스턴스 배포, 새 FSx 시스템 생성 등 관리 노력이 가장 높습니다.</p>
<p><span class="mark-no">❌ D</span> — Shadow Copy는 사용자가 이전 버전 파일을 복구하는 기능이지 성능 업그레이드에 사용하지 않습니다. 매우 복잡한 접근 방식입니다.</p>`,
    disc: [
      { ans:'B (63%) vs A (37%)', txt:'2023년 9월 이후 FSx for Windows는 HDD→SSD 직접 변경 지원. B가 가장 적은 관리 노력. A는 백업/복원 시간 + 데이터 손실 위험 + DNS 변경 필요로 더 많은 노력' },
    ]
  },
  {
    n: 194,
    en: `A company hosts an application on AWS. The application reads and writes objects that are stored in a single Amazon S3 bucket. The company must modify the application to deploy the application in two AWS Regions.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사가 AWS에서 애플리케이션을 호스팅합니다. 애플리케이션은 단일 Amazon S3 버킷에 저장된 객체를 읽고 씁니다. 회사는 두 AWS 지역에 애플리케이션을 배포하려면 애플리케이션을 수정해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Set up an Amazon CloudFront distribution with the S3 bucket as an origin. Deploy the application to a second Region. Modify the application to use the CloudFront distribution. Use AWS Global Accelerator to access the data in the S3 bucket.`, ko:`S3 버킷을 오리진으로 사용하여 Amazon CloudFront 배포를 설정합니다. 두 번째 지역에 애플리케이션 배포. CloudFront 배포를 사용하도록 애플리케이션을 수정합니다. AWS Global Accelerator를 사용하여 S3 버킷의 데이터에 액세스합니다.` },
      { k:'B', en:`Create a new S3 bucket in a second Region. Set up bidirectional S3 Cross-Region Replication (CRR) between the original S3 bucket and the new S3 bucket. Configure an S3 Multi-Region Access Point that uses both S3 buckets. Deploy a modified application to both Regions.`, ko:`두 번째 지역에 새 S3 버킷을 생성합니다. 원래 S3 버킷과 새 S3 버킷 간에 양방향 S3 교차 리전 복제(CRR)를 설정합니다. 두 S3 버킷을 모두 사용하는 S3 다중 지역 액세스 포인트를 구성합니다. 수정된 애플리케이션을 두 지역 모두에 배포합니다.` },
      { k:'C', en:`Create a new S3 bucket in a second Region. Deploy the application in the second Region. Configure the application to use the new S3 bucket. Set up S3 Cross-Region Replication (CRR) from the original S3 bucket to the new S3 bucket.`, ko:`두 번째 지역에 새 S3 버킷을 생성합니다. 두 번째 지역에 애플리케이션을 배포합니다. 새 S3 버킷을 사용하도록 애플리케이션을 구성합니다. 원래 S3 버킷에서 새 S3 버킷으로 S3 교차 리전 복제(CRR)를 설정합니다.` },
      { k:'D', en:`Set up an S3 gateway endpoint with the S3 bucket as an origin. Deploy the application to a second Region. Modify the application to use the new S3 gateway endpoint. Use S3 Intelligent-Tiering on the S3 bucket.`, ko:`S3 버킷을 원본으로 사용하여 S3 게이트웨이 엔드포인트를 설정합니다. 두 번째 지역에 애플리케이션을 배포합니다. 새 S3 게이트웨이 엔드포인트를 사용하도록 애플리케이션을 수정합니다. S3 버킷에서 S3 Intelligent-Tiering을 사용하십시오.` },
    ],
    answer: ['B'],
    vote: '86% B',
    explain: `<p><span class="mark-ok">✅ B — S3 다중 지역 액세스 포인트 + 양방향 CRR</span></p>
<p><strong>S3 다중 지역 액세스 포인트(Multi-Region Access Point)</strong>는 두 리전의 S3 버킷에 대한 단일 글로벌 엔드포인트를 제공합니다. 애플리케이션은 리전을 고려할 필요 없이 단일 엔드포인트로 가장 가까운 버킷에 자동 라우팅됩니다. <strong>양방향 CRR</strong>은 어느 쪽에 쓰더라도 자동으로 다른 리전에 복제하여 데이터 동기화를 유지합니다. 두 리전에서 동시에 읽기/쓰기가 가능하므로 최소한의 코드 변경으로 두 리전 배포가 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFront는 읽기 전용 캐시이며 쓰기 작업을 지원하지 않습니다. 애플리케이션이 쓰기도 수행하므로 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 단방향 CRR만 설정하면 두 번째 리전에서 쓴 데이터가 첫 번째 리전으로 복제되지 않습니다. 두 리전 모두에서 쓰기를 수행하려면 양방향 CRR이 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — S3 게이트웨이 엔드포인트는 VPC 내에서 S3에 접근하는 방식이며 다중 리전 배포와 무관합니다. Intelligent-Tiering은 비용 최적화 스토리지 클래스입니다.</p>`,
    disc: [
      { ans:'B (86%)', txt:'S3 MRAP=두 리전 단일 글로벌 엔드포인트. 양방향 CRR=양쪽 리전에서 쓰기 후 자동 동기화. C의 단방향 CRR은 두 번째 리전 쓰기가 첫 리전에 미복제' },
    ]
  },
  {
    n: 195,
    en: `An online gaming company needs to rehost its gaming platform on AWS. The company's gaming application requires high performance computing (HPC) processing and has a leaderboard that changes frequently. An Ubuntu instance that is optimized for compute generation hosts a Node.js application for game display. Game state is tracked in an on-premises Redis instance.<br><br>The company needs a migration strategy that optimizes application performance.<br><br>Which solution will meet these requirements?`,
    ko: `온라인 게임 회사는 AWS에서 게임 플랫폼을 다시 호스팅해야 합니다. 이 회사의 게임 애플리케이션에는 고성능 컴퓨팅(HPC) 처리가 필요하며 리더보드가 자주 변경됩니다. 컴퓨팅 생성에 최적화된 Ubuntu 인스턴스는 게임 디스플레이용 Node.js 애플리케이션을 호스팅합니다. 게임 상태는 온프레미스 Redis 인스턴스에서 추적됩니다.<br><br>회사에는 애플리케이션 성능을 최적화하는 마이그레이션 전략이 필요합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create an Auto Scaling group of m5.large Amazon EC2 Spot Instances behind an Application Load Balancer. Use an Amazon ElastiCache for Redis cluster to maintain the leaderboard.`, ko:`Application Load Balancer 뒤에 m5.large Amazon EC2 스팟 인스턴스의 Auto Scaling 그룹을 생성합니다. Redis 클러스터용 Amazon ElastiCache를 사용하여 순위표를 유지합니다.` },
      { k:'B', en:`Create an Auto Scaling group of c5.large Amazon EC2 Spot Instances behind an Application Load Balancer. Use an Amazon OpenSearch Service cluster to maintain the leaderboard.`, ko:`Application Load Balancer 뒤에 c5.large Amazon EC2 스팟 인스턴스의 Auto Scaling 그룹을 생성합니다. Amazon OpenSearch Service 클러스터를 사용하여 순위표를 유지합니다.` },
      { k:'C', en:`Create an Auto Scaling group of c5.large Amazon EC2 On-Demand Instances behind an Application Load Balancer. Use an Amazon ElastiCache for Redis cluster to maintain the leaderboard.`, ko:`Application Load Balancer 뒤에 c5.large Amazon EC2 온디맨드 인스턴스의 Auto Scaling 그룹을 생성합니다. Redis 클러스터용 Amazon ElastiCache를 사용하여 순위표를 유지합니다.` },
      { k:'D', en:`Create an Auto Scaling group of m5.large Amazon EC2 On-Demand Instances behind an Application Load Balancer. Use an Amazon DynamoDB table to maintain the leaderboard.`, ko:`Application Load Balancer 뒤에 m5.large Amazon EC2 온디맨드 인스턴스의 Auto Scaling 그룹을 생성합니다. Amazon DynamoDB 테이블을 사용하여 순위표를 유지합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — c5.large 온디맨드 + ElastiCache for Redis</span></p>
<p><strong>c5.large</strong>는 컴퓨팅 최적화 인스턴스 패밀리로 HPC 처리가 필요한 게임 애플리케이션에 적합합니다(온프레미스 "컴퓨팅 생성에 최적화된 Ubuntu" 일치). <strong>온디맨드 인스턴스</strong>는 게임 서비스처럼 안정적인 가용성이 필요한 워크로드에 적합합니다(스팟 인스턴스는 중단될 수 있어 게임 서비스에 부적합). <strong>Amazon ElastiCache for Redis</strong>는 온프레미스 Redis를 완전 관리형으로 마이그레이션하며 실시간으로 자주 변경되는 리더보드에 최적입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — m5는 범용 인스턴스로 HPC에 최적화되지 않았습니다. 스팟 인스턴스는 게임 서비스처럼 중단 허용이 불가한 워크로드에 부적합합니다.</p>
<p><span class="mark-no">❌ B</span> — c5는 적합하지만 스팟 인스턴스는 부적합. OpenSearch는 검색/분석용이며 자주 변경되는 실시간 리더보드에 Redis보다 성능이 낮습니다.</p>
<p><span class="mark-no">❌ D</span> — m5는 HPC에 미최적화. DynamoDB는 리더보드에 사용 가능하지만 Redis의 정렬 집합(Sorted Set)이 리더보드에 더 적합합니다.</p>`,
    disc: [
      { ans:'C (100%)', txt:'HPC→컴퓨팅 최적화 c5. 게임 서버=중단 불가→온디맨드(스팟 탈락). 온프레미스 Redis 마이그레이션→ElastiCache for Redis(완전 관리형, 실시간 리더보드 최적)' },
    ]
  },
  {
    n: 196,
    en: `A solutions architect is designing an application to accept timesheet entries from employees on their mobile devices. Timesheets will be submitted weekly, with most of the submissions occurring on Friday. The data must be stored in a format that allows payroll administrators to run monthly reports. The infrastructure must be highly available and scale to match the rate of incoming data and reporting requests.<br><br>Which combination of steps meets these requirements while minimizing operational overhead? (Choose two.)`,
    ko: `솔루션 아키텍트는 모바일 장치에서 직원의 작업표 항목을 허용하는 애플리케이션을 설계하고 있습니다. 시간표는 매주 제출되며 대부분의 제출은 금요일에 이루어집니다. 데이터는 급여 관리자가 월별 보고서를 실행할 수 있는 형식으로 저장되어야 합니다. 인프라는 가용성이 높아야 하며 수신 데이터 및 보고 요청의 속도에 맞게 확장되어야 합니다.<br><br>운영 오버헤드를 최소화하면서 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Deploy the application to Amazon EC2 On-Demand Instances with load balancing across multiple Availability Zones. Use scheduled Amazon EC2 Auto Scaling to add capacity before the high volume of submissions on Fridays.`, ko:`여러 가용 영역에 걸친 로드 밸런싱을 통해 Amazon EC2 온디맨드 인스턴스에 애플리케이션을 배포합니다. 금요일에 제출량이 많아지기 전에 예약된 Amazon EC2 Auto Scaling을 사용하여 용량을 추가하세요.` },
      { k:'B', en:`Deploy the application in a container using Amazon Elastic Container Service (Amazon ECS) with load balancing across multiple Availability Zones. Use scheduled Service Auto Scaling to add capacity before the high volume of submissions on Fridays.`, ko:`여러 가용 영역에 걸쳐 로드 밸런싱을 수행하는 Amazon Elastic Container Service(Amazon ECS)를 사용하여 컨테이너에 애플리케이션을 배포합니다. 금요일에 제출량이 많아지기 전에 예약된 서비스 자동 조정을 사용하여 용량을 추가하세요.` },
      { k:'C', en:`Deploy the application front end to an Amazon S3 bucket served by Amazon CloudFront. Deploy the application backend using Amazon API Gateway with an AWS Lambda proxy integration.`, ko:`Amazon CloudFront에서 제공하는 Amazon S3 버킷에 애플리케이션 프런트 엔드를 배포합니다. AWS Lambda 프록시 통합과 함께 Amazon API Gateway를 사용하여 애플리케이션 백엔드를 배포합니다.` },
      { k:'D', en:`Store the timesheet submission data in Amazon Redshift. Use Amazon QuickSight to generate the reports using Amazon Redshift as the data source.`, ko:`작업표 제출 데이터를 Amazon Redshift에 저장합니다. Amazon QuickSight를 사용하면 Amazon Redshift를 데이터 소스로 사용하여 보고서를 생성할 수 있습니다.` },
      { k:'E', en:`Store the timesheet submission data in Amazon S3. Use Amazon Athena and Amazon QuickSight to generate the reports using Amazon S3 as the data source.`, ko:`작업표 제출 데이터를 Amazon S3에 저장합니다. Amazon Athena 및 Amazon QuickSight를 사용하면 Amazon S3를 데이터 소스로 사용하여 보고서를 생성할 수 있습니다.` },
    ],
    answer: ['C','E'],
    vote: '48% CE vs 34% BE',
    explain: `<p><span class="mark-ok">✅ C — S3+CloudFront(프론트엔드) + API Gateway+Lambda(백엔드)</span></p>
<p>완전 서버리스 아키텍처로 운영 오버헤드가 최소입니다. S3+CloudFront로 정적 프론트엔드를 제공하고 API Gateway+Lambda 백엔드로 작업표 제출을 처리합니다. Lambda는 트래픽에 따라 자동 확장되어 금요일 폭증도 별도 스케줄링 없이 처리됩니다.</p>
<p><span class="mark-ok">✅ E — Amazon S3 + Athena + QuickSight</span></p>
<p>S3에 저장된 데이터를 Athena로 쿼리하고 QuickSight로 보고서를 생성합니다. Redshift 클러스터 관리 없이 서버리스 방식으로 월별 보고서를 생성할 수 있어 운영 오버헤드가 낮습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A/B</span> — EC2 또는 ECS 기반 솔루션은 인스턴스/클러스터 관리, 패치, 모니터링 등 높은 운영 오버헤드가 발생합니다. 서버리스 C에 비해 관리 부담이 큽니다.</p>
<p><span class="mark-no">❌ D</span> — Redshift 클러스터는 프로비저닝, 관리, 비용이 발생하여 Athena(서버리스)보다 운영 오버헤드가 높습니다.</p>`,
    disc: [
      { ans:'CE (48%) vs BE (34%)', txt:'완전 서버리스(C)는 금요일 폭증 자동 처리. S3+Athena+QuickSight(E)는 Redshift 대비 서버리스. EC2/ECS는 관리 오버헤드 높음. 공식 답안 CE' },
    ]
  },
  {
    n: 197,
    en: `A company is storing sensitive data in an Amazon S3 bucket. The company must log all activities for objects in the S3 bucket and must keep the logs for 5 years. The company's security team also must receive an email notification every time there is an attempt to delete data in the S3 bucket.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose three.)`,
    ko: `한 회사가 민감한 데이터를 Amazon S3 버킷에 저장하고 있습니다. 회사는 S3 버킷의 객체에 대한 모든 활동을 기록해야 하며 해당 로그를 5년 동안 보관해야 합니다. 또한 회사의 보안 팀은 S3 버킷의 데이터를 삭제하려고 시도할 때마다 이메일 알림을 받아야 합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Configure AWS CloudTrail to log S3 data events.`, ko:`S3 데이터 이벤트를 기록하도록 AWS CloudTrail을 구성합니다.` },
      { k:'B', en:`Configure S3 server access logging for the S3 bucket.`, ko:`S3 버킷에 대한 S3 서버 액세스 로깅을 구성합니다.` },
      { k:'C', en:`Configure Amazon S3 to send object deletion events to Amazon Simple Email Service (Amazon SES).`, ko:`Amazon Simple Email Service(Amazon SES)에 객체 삭제 이벤트를 보내도록 Amazon S3를 구성합니다.` },
      { k:'D', en:`Configure Amazon S3 to send object deletion events to an Amazon EventBridge event bus that publishes to an Amazon Simple Notification Service (Amazon SNS) topic.`, ko:`Amazon SNS(Amazon SNS) 주제에 게시되는 Amazon EventBridge 이벤트 버스로 객체 삭제 이벤트를 보내도록 Amazon S3를 구성합니다.` },
      { k:'E', en:`Configure Amazon S3 to send the logs to Amazon Timestream with data storage tiering.`, ko:`데이터 스토리지 계층화를 통해 로그를 Amazon Timestream으로 보내도록 Amazon S3를 구성합니다.` },
      { k:'F', en:`Configure a new S3 bucket to store the logs with an S3 Lifecycle policy.`, ko:`S3 수명 주기 정책에 따라 로그를 저장하도록 새 S3 버킷을 구성합니다.` },
    ],
    answer: ['A','D','F'],
    vote: '61% ADF vs 38% BDF',
    explain: `<p><span class="mark-ok">✅ A — AWS CloudTrail로 S3 데이터 이벤트 기록</span></p>
<p>AWS는 S3 버킷 및 객체 수준 작업 로깅에 CloudTrail을 권장합니다. S3 서버 액세스 로그보다 더 완전하고 신뢰할 수 있는 로그를 제공합니다(서버 액세스 로그는 best-effort 전달). 버킷 수준 및 객체 수준 이벤트 모두 캡처합니다.</p>
<p><span class="mark-ok">✅ D — S3 이벤트 → EventBridge → SNS → 이메일</span></p>
<p>Amazon S3는 객체 삭제 이벤트를 EventBridge에 직접 전송할 수 있습니다. EventBridge 규칙으로 SNS 토픽에 게시하면 구독된 이메일로 알림이 전송됩니다. SES 직접 연동(C)은 Lambda 등 중간 단계가 필요하여 더 복잡합니다.</p>
<p><span class="mark-ok">✅ F — 새 S3 버킷 + 수명 주기 정책으로 5년 보관</span></p>
<p>로그 전용 S3 버킷을 생성하고 S3 수명 주기 정책으로 5년 후 자동 삭제를 구성합니다. Intelligent-Tiering이나 Glacier로 전환하면 비용도 절약됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — S3 서버 액세스 로그는 비용은 낮지만 best-effort 전달(누락 가능)이어서 "모든 활동 기록" 요건에 CloudTrail보다 신뢰성이 낮습니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon S3는 이벤트를 SES로 직접 전송할 수 없습니다. Lambda 중간 단계가 필요하여 복잡하고 비용이 더 발생합니다.</p>
<p><span class="mark-no">❌ E</span> — Amazon Timestream은 시계열 데이터베이스로 S3 액세스 로그 저장에 과도하게 복잡하고 비용이 높습니다.</p>`,
    disc: [
      { ans:'ADF (61%) vs BDF (38%)', txt:'CloudTrail(A) vs S3 서버 로그(B): CloudTrail이 더 신뢰성 있음(AWS 권장). S3→SES 직접 불가(C 탈락). EventBridge+SNS(D)가 이메일 알림에 적합. 새 버킷+수명주기(F)로 5년 보관' },
    ]
  },
  {
    n: 198,
    en: `A company is building a hybrid environment that includes servers in an on-premises data center and in the AWS Cloud. The company has deployed Amazon EC2 instances in three VPCs. Each VPC is in a different AWS Region. The company has established an AWS Direct Connect connection to the data center from the Region that is closest to the data center.<br><br>The company needs the servers in the on-premises data center to have access to the EC2 instances in all three VPCs. The servers in the on-premises data center also must have access to AWS public services.<br><br>Which combination of steps will meet these requirements with the LEAST cost? (Choose two.)`,
    ko: `한 회사가 온프레미스 데이터 센터와 AWS 클라우드에 서버를 포함하는 하이브리드 환경을 구축하고 있습니다. 이 회사는 세 개의 VPC에 Amazon EC2 인스턴스를 배포했습니다. 각 VPC는 서로 다른 AWS 리전에 있습니다. 회사는 AWS Direct Connect 연결을 데이터 센터에 가장 가까운 리전에서 데이터 센터에 연결했습니다.<br><br>회사는 세 VPC 모두의 EC2 인스턴스에 액세스하려면 온프레미스 데이터 센터에 서버가 필요합니다. 온프레미스 데이터 센터의 서버도 AWS 공용 서비스에 액세스할 수 있어야 합니다.<br><br>가장 적은 비용으로 이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Create a Direct Connect gateway in the Region that is closest to the data center. Attach the Direct Connect connection to the Direct Connect gateway. Use the Direct Connect gateway to connect the VPCs in the other two Regions.`, ko:`데이터 센터에 가장 가까운 지역에 Direct Connect 게이트웨이를 생성합니다. Direct Connect 게이트웨이에 Direct Connect 연결을 연결합니다. Direct Connect 게이트웨이를 사용하여 다른 두 리전의 VPC를 연결합니다.` },
      { k:'B', en:`Set up additional Direct Connect connections from the on-premises data center to the other two Regions.`, ko:`온프레미스 데이터 센터에서 다른 두 지역으로의 추가 Direct Connect 연결을 설정합니다.` },
      { k:'C', en:`Create a private VIF. Establish an AWS Site-to-Site VPN connection over the private VIF to the VPCs in the other two Regions.`, ko:`프라이빗 VIF를 생성합니다. 프라이빗 VIF를 통해 다른 두 리전의 VPC에 대한 AWS Site-to-Site VPN 연결을 설정합니다.` },
      { k:'D', en:`Create a public VIF. Establish an AWS Site-to-Site VPN connection over the public VIF to the VPCs in the other two Regions.`, ko:`공개 VIF를 생성합니다. 퍼블릭 VIF를 통해 다른 두 리전의 VPC에 대한 AWS Site-to-Site VPN 연결을 설정합니다.` },
      { k:'E', en:`Use VPC peering to establish a connection between the VPCs across the Regions. Create a private VIF with the existing Direct Connect connection to connect to the peered VPCs.`, ko:`VPC 피어링을 사용하여 리전 전체에 걸쳐 VPC 간 연결을 설정합니다. 기존 Direct Connect 연결을 사용하여 프라이빗 VIF를 생성하여 피어링된 VPC에 연결합니다.` },
    ],
    answer: ['A','D'],
    vote: '100% AD',
    explain: `<p><span class="mark-ok">✅ A — Direct Connect 게이트웨이로 다중 리전 VPC 연결</span></p>
<p><strong>AWS Direct Connect 게이트웨이</strong>는 글로벌 리소스로 단일 Direct Connect 연결로 여러 AWS 리전의 VPC에 연결할 수 있습니다. 추가 Direct Connect 연결(B) 없이 기존 연결 하나로 세 VPC 모두를 연결합니다. 비용이 가장 적습니다.</p>
<p><span class="mark-ok">✅ D — 퍼블릭 VIF를 통한 AWS 퍼블릭 서비스 접근</span></p>
<p><strong>퍼블릭 VIF(Public Virtual Interface)</strong>는 Direct Connect를 통해 S3, DynamoDB 등 AWS 퍼블릭 서비스에 직접 접근하는 방법입니다. 퍼블릭 VIF 위에 Site-to-Site VPN을 구성하면 암호화된 채널로 다른 두 리전의 VPC에도 연결할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 추가 Direct Connect 연결은 매우 비용이 높습니다. DX 게이트웨이(A)로 기존 연결 하나로 해결 가능합니다.</p>
<p><span class="mark-no">❌ C</span> — 프라이빗 VIF 위에서 Site-to-Site VPN을 설정할 수 없습니다. VPN은 퍼블릭 VIF 또는 Transit Gateway를 통해 구성합니다.</p>
<p><span class="mark-no">❌ E</span> — VPC 피어링은 전이적이지 않아 온프레미스에서 피어링된 VPC로 직접 접근이 불가능합니다.</p>`,
    disc: [
      { ans:'AD (100%)', txt:'DX 게이트웨이(A)=단일 DX로 다중 리전 VPC 연결. 퍼블릭 VIF(D)=DX를 통한 AWS 퍼블릭 서비스 접근+VPN으로 다른 리전 VPC 연결. 추가 DX 연결(B)은 고비용. 프라이빗 VIF 위 VPN(C) 불가. VPC 피어링 비전이적(E)' },
    ]
  },
  {
    n: 199,
    en: `A company is using an organization in AWS Organizations to manage hundreds of AWS accounts. A solutions architect is working on a solution to provide baseline protection for the Open Web Application Security Project (OWASP) top 10 web application vulnerabilities. The solutions architect is using AWS WAF for all existing and new Amazon CloudFront distributions that are deployed within the organization.<br><br>Which combination of steps should the solutions architect take to provide the baseline protection? (Choose three.)`,
    ko: `한 회사가 AWS Organizations의 조직을 사용하여 수백 개의 AWS 계정을 관리하고 있습니다. 솔루션 설계자는 OWASP(Open Web Application Security Project) 상위 10개 웹 애플리케이션 취약점에 대한 기본 보호를 제공하는 솔루션을 개발 중입니다. 솔루션 아키텍트는 조직 내에 배포된 모든 기존 및 신규 Amazon CloudFront 배포에 AWS WAF를 사용하고 있습니다.<br><br>솔루션 설계자는 기본 보호를 제공하기 위해 어떤 단계 조합을 수행해야 합니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Enable AWS Config in all accounts.`, ko:`모든 계정에서 AWS Config 활성화.` },
      { k:'B', en:`Enable Amazon GuardDuty in all accounts.`, ko:`모든 계정에서 Amazon GuardDuty 활성화.` },
      { k:'C', en:`Enable all features for the organization.`, ko:`조직의 모든 기능을 활성화합니다.` },
      { k:'D', en:`Use AWS Firewall Manager to deploy AWS WAF rules in all accounts for all CloudFront distributions.`, ko:`AWS Firewall Manager를 사용하여 모든 CloudFront 배포에 대한 모든 계정에 AWS WAF 규칙을 배포합니다.` },
      { k:'E', en:`Use AWS Shield Advanced to deploy AWS WAF rules in all accounts for all CloudFront distributions.`, ko:`AWS Shield Advanced를 사용하여 모든 CloudFront 배포에 대한 모든 계정에 AWS WAF 규칙을 배포합니다.` },
      { k:'F', en:`Use AWS Security Hub to deploy AWS WAF rules in all accounts for all CloudFront distributions.`, ko:`AWS Security Hub를 사용하여 모든 CloudFront 배포에 대한 모든 계정에 AWS WAF 규칙을 배포합니다.` },
    ],
    answer: ['A','C','D'],
    vote: '70% ACD',
    explain: `<p><span class="mark-ok">✅ A — 모든 계정에서 AWS Config 활성화</span></p>
<p>AWS Firewall Manager의 필수 선행 조건입니다. Firewall Manager는 새로 생성된 CloudFront 배포를 감지하기 위해 AWS Config가 필요합니다.</p>
<p><span class="mark-ok">✅ C — 조직의 모든 기능 활성화</span></p>
<p>AWS Firewall Manager는 AWS Organizations에서 모든 기능이 활성화된 경우에만 조직 전체 계정에 정책을 배포할 수 있습니다. Firewall Manager 사용의 필수 전제 조건입니다.</p>
<p><span class="mark-ok">✅ D — AWS Firewall Manager로 WAF 규칙 중앙 배포</span></p>
<p>AWS Firewall Manager는 수백 개의 계정에 걸쳐 AWS WAF 규칙을 중앙에서 배포하고 관리할 수 있는 유일한 서비스입니다. 기존 및 신규 CloudFront 배포에 자동으로 적용됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — GuardDuty는 위협 탐지 서비스로 WAF 규칙 배포와 무관합니다. OWASP 취약점 차단을 직접 수행하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — Shield Advanced는 DDoS 방어 서비스입니다. WAF 규칙 배포 기능이 없습니다.</p>
<p><span class="mark-no">❌ F</span> — Security Hub는 보안 발견 사항 통합 및 가시성 서비스이며 WAF 규칙 배포 기능이 없습니다.</p>`,
    disc: [
      { ans:'ACD (70%)', txt:'Firewall Manager 전제 조건: 1) AWS Organizations 모든 기능 활성화(C), 2) 모든 계정 AWS Config 활성화(A). WAF 배포 도구=Firewall Manager(D). GuardDuty/Shield/Security Hub는 WAF 규칙 배포 불가' },
    ]
  },
  {
    n: 200,
    en: `A solutions architect has implemented a SAML 2.0 federated identity solution with their company's on-premises identity provider (IdP) to authenticate users' access to the AWS environment. When the solutions architect tests authentication through the federated identity web portal, access to the AWS environment is granted. However, when test users attempt to authenticate through the federated identity web portal, they are not able to access the AWS environment.<br><br>Which items should the solutions architect check to ensure identity federation is properly configured? (Choose three.)`,
    ko: `솔루션 아키텍트는 AWS 환경에 대한 사용자 액세스를 인증하기 위해 회사의 온프레미스 ID 공급자(IdP)와 함께 SAML 2.0 통합 ID 솔루션을 구현했습니다. 솔루션 아키텍트가 연합 ID 웹 포털을 통해 인증을 테스트하면 AWS 환경에 대한 액세스 권한이 부여됩니다. 그러나 테스트 사용자가 연합 ID 웹 포털을 통해 인증을 시도하면 AWS 환경에 액세스할 수 없습니다.<br><br>ID 페더레이션이 올바르게 구성되었는지 확인하기 위해 솔루션 설계자가 확인해야 하는 항목은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`The IAM user's permissions policy has allowed the use of SAML federation for that user.`, ko:`IAM 사용자의 권한 정책에 따라 해당 사용자에 대한 SAML 연동 사용이 허용되었습니다.` },
      { k:'B', en:`The IAM roles created for the federated users' or federated groups' trust policy have set the SAML provider as the principal.`, ko:`연합 사용자 또는 연합 그룹의 신뢰 정책을 위해 생성된 IAM 역할은 SAML 공급자를 주체로 설정했습니다.` },
      { k:'C', en:`Test users are not in the AWSFederatedUsers group in the company's IdP.`, ko:`테스트 사용자는 회사 IdP의 AWSFederatedUsers 그룹에 속하지 않습니다.` },
      { k:'D', en:`The web portal calls the AWS STS AssumeRoleWithSAML API with the ARN of the SAML provider, the ARN of the IAM role, and the SAML assertion from IdP.`, ko:`웹 포털은 SAML 공급자의 ARN, IAM 역할의 ARN 및 IdP의 SAML 어설션을 사용하여 AWS STS AssumeRoleWithSAML API를 호출합니다.` },
      { k:'E', en:`The on-premises IdP's DNS hostname is reachable from the AWS environment VPCs.`, ko:`온프레미스 IdP의 DNS 호스트 이름은 AWS 환경 VPC에서 연결할 수 있습니다.` },
      { k:'F', en:`The company's IdP defines SAML assertions that properly map users or groups to IAM roles with appropriate permissions.`, ko:`회사의 IdP는 사용자 또는 그룹을 적절한 권한이 있는 IAM 역할에 적절하게 매핑하는 SAML 어설션을 정의합니다.` },
    ],
    answer: ['B','D','F'],
    vote: '69% BDF',
    explain: `<p><span class="mark-ok">✅ B — IAM 역할 신뢰 정책에 SAML 공급자가 주체(Principal)로 설정됨</span></p>
<p>SAML 연동을 위한 IAM 역할의 신뢰 정책에는 SAML 공급자 ARN이 Principal로 설정되어야 합니다. 이 설정이 없으면 SAML 어설션을 제시해도 역할을 Assume할 수 없습니다.</p>
<p><span class="mark-ok">✅ D — 웹 포털이 STS AssumeRoleWithSAML API를 올바르게 호출하는지 확인</span></p>
<p>SAML 기반 인증에서 웹 포털은 SAML 공급자 ARN, IAM 역할 ARN, SAML 어설션을 포함하여 <code>AssumeRoleWithSAML</code> API를 호출해야 합니다. 이 API 호출이 올바르지 않으면 접근이 거부됩니다.</p>
<p><span class="mark-ok">✅ F — IdP가 올바른 SAML 어설션을 정의하여 사용자/그룹을 IAM 역할에 매핑</span></p>
<p>온프레미스 IdP는 SAML 어설션에 사용자/그룹 정보와 해당 IAM 역할 매핑을 포함해야 합니다. 테스트 사용자가 올바른 그룹에 속하고 해당 그룹이 적절한 IAM 역할에 매핑되어야 합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SAML 연동은 IAM 사용자를 사용하지 않고 IAM 역할을 Assume하는 방식입니다. IAM 사용자 권한 정책은 관련이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — "AWSFederatedUsers"는 AWS의 표준 그룹이 아닙니다. SAML 연동에서 그룹 멤버십은 IdP의 SAML 어설션에 포함되어 전달됩니다.</p>
<p><span class="mark-no">❌ E</span> — AWS STS는 SAML 어설션을 검증하기 위해 IdP DNS를 직접 확인하지 않습니다. SAML 어설션 자체가 웹 포털을 통해 STS로 전달됩니다.</p>`,
    disc: [
      { ans:'BDF (69%)', txt:'SAML 연동 3요소 확인: 1) IAM 역할 신뢰 정책의 SAML Provider ARN(B), 2) AssumeRoleWithSAML API 올바른 호출(D), 3) IdP의 사용자→IAM 역할 매핑(F). IAM 사용자 정책(A)과 DNS 확인(E)은 SAML 연동과 무관' },
    ]
  },
];