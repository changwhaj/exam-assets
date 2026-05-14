window.QS_SET30 = [
  {
    n: 291,
    en: `A company ingests and processes streaming market data. The data rate is constant. A nightly process that calculates aggregate statistics takes 4 hours to complete. The statistical analysis is not critical to the business, and data points are processed during the next iteration if a particular run fails.<br><br>The current architecture uses a pool of Amazon EC2 Reserved Instances with 1-year reservations. These EC2 instances run full time to ingest and store the streaming data in attached Amazon Elastic Block Store (Amazon EBS) volumes. A scheduled script launches EC2 On-Demand Instances each night to perform the nightly processing. The instances access the stored data from NFS shares on the ingestion servers. The script terminates the instances when the processing is complete.<br><br>The Reserved Instance reservations are expiring. The company needs to determine whether to purchase new reservations or implement a new design.<br><br>Which solution will meet these requirements MOST cost-effectively?`,
    ko: `회사는 스트리밍 시장 데이터를 수집하고 처리합니다. 데이터 속도는 일정합니다. 집계 통계를 계산하는 야간 프로세스는 완료하는 데 4시간이 걸립니다. 통계 분석은 비즈니스에 중요하지 않으며 특정 실행이 실패하면 다음 반복 중에 데이터 포인트가 처리됩니다.<br><br>현재 아키텍처는 1년 예약이 포함된 Amazon EC2 예약 인스턴스 풀을 사용합니다. EC2 인스턴스는 풀타임으로 실행되어 연결된 Amazon EBS 볼륨에 스트리밍 데이터를 수집하고 저장합니다. 예약된 스크립트는 매일 밤 EC2 온디맨드 인스턴스를 시작하여 야간 처리를 수행합니다. 예약 인스턴스 예약이 만료됩니다. 회사는 새로운 예약을 구매할지 아니면 새로운 디자인을 구현할지 결정해야 합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon S3. Use a scheduled script to launch a fleet of EC2 On-Demand Instances each night to perform the batch processing of the S3 data. Configure the script to terminate the instances when the processing is complete.`, ko: `Amazon Kinesis Data Firehose를 사용하여 Amazon S3에 데이터를 저장하도록 수집 프로세스를 업데이트합니다. 예약된 스크립트를 사용하여 매일 밤 EC2 온디맨드 인스턴스 집합을 시작하여 S3 데이터의 일괄 처리를 수행합니다. 처리가 완료되면 인스턴스를 종료하도록 스크립트를 구성합니다.` },
      { k: 'B', en: `Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon S3. Use AWS Batch with Spot Instances to perform nightly processing with a maximum Spot price that is 50% of the On-Demand price.`, ko: `Amazon Kinesis Data Firehose를 사용하여 Amazon S3에 데이터를 저장하도록 수집 프로세스를 업데이트합니다. 스팟 인스턴스와 함께 AWS Batch를 사용하여 온디맨드 가격의 50%에 해당하는 최대 스팟 가격으로 야간 처리를 수행합니다.` },
      { k: 'C', en: `Update the ingestion process to use a fleet of EC2 Reserved Instances with 3-year reservations behind a Network Load Balancer. Use AWS Batch with Spot Instances to perform nightly processing with a maximum Spot price that is 50% of the On-Demand price.`, ko: `Network Load Balancer 뒤에 3년 예약이 포함된 EC2 예약 인스턴스 집합을 사용하도록 수집 프로세스를 업데이트합니다. 스팟 인스턴스와 함께 AWS Batch를 사용하여 야간 처리를 수행합니다.` },
      { k: 'D', en: `Update the ingestion process to use Amazon Kinesis Data Firehose to save data to Amazon Redshift. Use Amazon EventBridge to schedule an AWS Lambda function to run nightly to query Amazon Redshift to generate the daily statistics.`, ko: `Amazon Kinesis Data Firehose를 사용하여 Amazon Redshift에 데이터를 저장하도록 수집 프로세스를 업데이트합니다. Amazon EventBridge를 사용하여 AWS Lambda 함수가 야간에 실행되어 Amazon Redshift에 쿼리하도록 예약합니다.` },
    ],
    answer: ['B'],
    vote: '94% B',
    explain: `<p><span class="mark-ok">✅ B — Kinesis Firehose + S3 + AWS Batch + 스팟 인스턴스</span></p>
<p><strong>수집 계층:</strong> Kinesis Data Firehose + S3는 영구 EC2 예약 인스턴스보다 훨씬 비용 효율적입니다. S3는 내구성과 확장성이 뛰어나고 비용이 저렴합니다.</p>
<p><strong>야간 처리:</strong> 분석이 비즈니스에 중요하지 않고 실패해도 다음 반복에 처리되므로 <strong>스팟 인스턴스</strong> 사용이 완벽합니다. AWS Batch가 스팟 인스턴스의 중단을 자동으로 처리하고 재시도합니다. 온디맨드 대비 최대 90% 비용 절감 가능합니다.</p>
<p>A는 온디맨드 인스턴스를 사용하여 B보다 비용이 높습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Firehose + S3 조합은 좋지만 야간 처리에 온디맨드 EC2를 사용하는 것은 스팟 인스턴스(B)보다 비용이 높습니다.</p>
<p><span class="mark-no">❌ C</span> — 3년 예약 인스턴스로 수집 계층을 업데이트하는 것은 Firehose + S3보다 비용이 높습니다. NLB도 불필요한 추가 비용입니다.</p>
<p><span class="mark-no">❌ D</span> — Redshift는 지속적인 클러스터 비용이 발생하여 S3보다 비용이 높습니다. Lambda는 4시간 처리 시간을 지원하지 않습니다(최대 15분).</p>`,
    disc: [
      { ans: 'B (94%)', txt: '통계 분석이 비즈니스 비필수 + 실패 허용 → 스팟 인스턴스 최적. Firehose+S3가 영구 EC2보다 저렴. AWS Batch가 스팟 중단 자동 처리. A는 온디맨드로 B보다 비용 과다.' }
    ]
  },
  {
    n: 292,
    en: `A company needs to migrate an on-premises SFTP site to AWS. The SFTP site currently runs on a Linux VM. Uploaded files are made available to downstream applications through an NFS share.<br><br>As part of the migration to AWS, a solutions architect must implement high availability. The solution must provide external vendors with a set of static public IP addresses that the vendors can allow. The company has set up an AWS Direct Connect connection between its on-premises data center and its VPC.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사는 온프레미스 SFTP 사이트를 AWS로 마이그레이션해야 합니다. SFTP 사이트는 현재 Linux VM에서 실행됩니다. 업로드된 파일은 NFS 공유를 통해 다운스트림 애플리케이션에서 사용할 수 있습니다.<br><br>AWS로 마이그레이션하는 과정에서 솔루션 아키텍트는 고가용성을 구현해야 합니다. 솔루션은 공급업체가 허용할 수 있는 고정 공용 IP 주소 집합을 외부 공급업체에 제공해야 합니다. 회사는 온프레미스 데이터 센터와 VPC 간에 AWS Direct Connect 연결을 설정했습니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS Transfer Family server. Configure an internet-facing VPC endpoint for the Transfer Family server. Specify an Elastic IP address for each subnet. Configure the Transfer Family server to place files into an Amazon Elastic File System (Amazon EFS) file system that is deployed across multiple Availability Zones. Modify the configuration on the downstream applications that access the existing NFS share to mount the EFS endpoint instead.`, ko: `AWS Transfer Family 서버를 생성합니다. Transfer Family 서버에 대한 인터넷 연결 VPC 엔드포인트를 구성합니다. 각 서브넷에 대해 탄력적 IP 주소를 지정합니다. 여러 가용 영역에 배포된 Amazon EFS 파일 시스템에 파일을 배치하도록 Transfer Family 서버를 구성합니다. EFS 엔드포인트를 탑재하도록 다운스트림 애플리케이션 구성을 수정합니다.` },
      { k: 'B', en: `Create an AWS Transfer Family server. Configure a publicly accessible endpoint for the Transfer Family server. Configure the Transfer Family server to place files into an Amazon Elastic File System (Amazon EFS) file system that is deployed across multiple Availability Zones. Modify the configuration on the downstream applications that access the existing NFS share to mount the EFS endpoint instead.`, ko: `AWS Transfer Family 서버를 생성합니다. Transfer Family 서버에 대해 공개적으로 액세스 가능한 엔드포인트를 구성합니다. 여러 가용 영역에 배포된 Amazon EFS 파일 시스템에 파일을 배치하도록 Transfer Family 서버를 구성합니다. EFS 엔드포인트를 탑재하도록 다운스트림 애플리케이션 구성을 수정합니다.` },
      { k: 'C', en: `Use AWS Application Migration Service to migrate the existing Linux VM to an Amazon EC2 instance. Assign an Elastic IP address to the EC2 instance. Mount an Amazon Elastic File System (Amazon EFS) file system to the EC2 instance. Configure the SFTP server to place files in the EFS file system. Modify the configuration on the downstream applications that access the existing NFS share to mount the EFS endpoint instead.`, ko: `AWS Application Migration Service를 사용하여 기존 Linux VM을 Amazon EC2 인스턴스로 마이그레이션합니다. EC2 인스턴스에 탄력적 IP 주소를 할당합니다. EFS 파일 시스템을 EC2 인스턴스에 탑재합니다. SFTP 서버가 EFS에 파일을 배치하도록 구성합니다.` },
      { k: 'D', en: `Use AWS Application Migration Service to migrate the existing Linux VM to an AWS Transfer Family server. Configure a publicly accessible endpoint for the Transfer Family server. Configure the Transfer Family server to place files into an Amazon FSx for Lustre file system that is deployed across multiple Availability Zones.`, ko: `AWS Application Migration Service를 사용하여 기존 Linux VM을 AWS Transfer Family 서버로 마이그레이션합니다. Transfer Family 서버에 대해 공개적으로 액세스 가능한 엔드포인트를 구성합니다. 여러 가용 영역에 배포되는 Amazon FSx for Lustre 파일 시스템에 파일을 배치하도록 서버를 구성합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — Transfer Family VPC 엔드포인트 + Elastic IP + EFS</span></p>
<p><strong>고정 공용 IP:</strong> <strong>인터넷 연결 VPC 엔드포인트</strong> 유형만 각 서브넷에 Elastic IP를 지정할 수 있습니다. 공개적으로 액세스 가능한 엔드포인트(B)는 Elastic IP 할당이 불가합니다.</p>
<p><strong>고가용성:</strong> Transfer Family는 완전 관리형 서비스로 고가용성이 내장되어 있습니다. EFS가 다중 AZ로 배포되어 파일 스토리지도 고가용성입니다.</p>
<p><strong>NFS 호환:</strong> EFS는 NFS 프로토콜을 지원하므로 다운스트림 애플리케이션이 기존 NFS 공유 대신 EFS 엔드포인트를 마운트하도록 쉽게 재구성할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 공개적으로 액세스 가능한 엔드포인트는 <strong>Elastic IP를 연결할 수 없어</strong> 고정 IP 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — EC2에서 SFTP를 직접 운영하면 단일 인스턴스로 고가용성 요건을 충족하지 못하고 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ D</span> — FSx for Lustre는 HPC 워크로드용이며, Application Migration Service로 Transfer Family 서버를 "마이그레이션"하는 것은 올바른 개념이 아닙니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'VPC 호스팅 인터넷 연결 엔드포인트만 EIP 지정 가능(고정 IP 요건). 공개 엔드포인트(B)는 EIP 불가. Transfer Family + EFS = 완전 관리형 HA + NFS 호환. EC2(C)는 단일 SPOF.' }
    ]
  },
  {
    n: 293,
    en: `A solutions architect has an operational workload deployed on Amazon EC2 instances in an Auto Scaling group. The VPC architecture spans two Availability Zones (AZ) with a subnet in each that the Auto Scaling group is targeting. The VPC is connected to an on-premises environment and connectivity cannot be interrupted. The maximum size of the Auto Scaling group is 20 instances in service. The VPC IPv4 addressing is as follows:<br><br>VPC CIDR: 10.0.0.0/23<br>AZ1 subnet CIDR: 10.0.0.0/24<br>AZ2 subnet CIDR: 10.0.1.0/24<br><br>Since deployment, a third AZ has become available in the Region. The solutions architect wants to adopt the new AZ without adding additional IPv4 address space and without service downtime. Which solution will meet these requirements?`,
    ko: `솔루션 아키텍트는 Auto Scaling 그룹의 Amazon EC2 인스턴스에서 실행되는 운영 워크로드를 보유하고 있습니다. VPC 아키텍처는 2개의 가용 영역(AZ)에 걸쳐 있으며 각각 서브넷이 있습니다. VPC는 온프레미스 환경에 연결되어 있으며 연결이 중단될 수 없습니다. Auto Scaling 그룹의 최대 크기는 서비스 중인 인스턴스 20개입니다.<br><br>VPC 주소 지정: VPC CIDR: 10.0.0.0/23 / AZ1: 10.0.0.0/24 / AZ2: 10.0.1.0/24<br><br>배포 이후 세 번째 AZ가 해당 리전에서 사용 가능해졌습니다. 솔루션 아키텍트는 추가 IPv4 주소 공간을 추가하지 않고 서비스 가동 중지 시간 없이 새 AZ를 채택하기를 원합니다. 어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Update the Auto Scaling group to use the AZ2 subnet only. Delete and re-create the AZ1 subnet using half the previous address space. Adjust the Auto Scaling group to also use the new AZ1 subnet. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Remove the current AZ2 subnet. Create a new AZ2 subnet using the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.`, ko: `AZ2 서브넷만 사용하도록 Auto Scaling 그룹을 업데이트합니다. 이전 주소 공간의 절반을 사용하여 AZ1 서브넷을 삭제하고 다시 생성합니다. Auto Scaling 그룹을 조정하여 새 AZ1 서브넷도 사용하도록 합니다. 인스턴스가 정상이면 AZ1 서브넷만 사용하도록 조정합니다. 현재 AZ2 서브넷을 제거합니다. 원래 AZ1 서브넷 주소 공간의 후반부를 사용하여 새 AZ2 서브넷을 생성합니다. 원래 AZ2 서브넷 주소 공간의 절반을 사용하여 새 AZ3 서브넷을 생성한 다음 세 개의 새 서브넷 모두를 대상으로 지정하도록 Auto Scaling 그룹을 업데이트합니다.` },
      { k: 'B', en: `Terminate the EC2 instances in the AZ1 subnet. Delete and re-create the AZ1 subnet using half the address space. Update the Auto Scaling group to use this new subnet. Repeat this for the second AZ. Define a new subnet in AZ3, then update the Auto Scaling group to target all three new subnets.`, ko: `AZ1 서브넷에서 EC2 인스턴스를 종료합니다. 주소 공간의 절반을 사용하여 AZ1 서브넷을 삭제하고 다시 생성합니다. 이 새 서브넷을 사용하도록 Auto Scaling 그룹을 업데이트합니다. 두 번째 AZ에 대해 이를 반복합니다.` },
      { k: 'C', en: `Create a new VPC with the same IPv4 address space and define three subnets, with one for each AZ. Update the existing Auto Scaling group to target the new subnets in the new VPC.`, ko: `동일한 IPv4 주소 공간으로 새 VPC를 생성하고 각 AZ마다 하나씩 3개의 서브넷을 정의합니다. 기존 Auto Scaling 그룹이 새 VPC의 새 서브넷을 대상으로 지정하도록 업데이트합니다.` },
      { k: 'D', en: `Update the Auto Scaling group to use the AZ2 subnet only. Update the AZ1 subnet to have half the previous address space. Adjust the Auto Scaling group to also use the AZ1 subnet again. When the instances are healthy, adjust the Auto Scaling group to use the AZ1 subnet only. Update the current AZ2 subnet and assign the second half of the address space from the original AZ1 subnet. Create a new AZ3 subnet using half the original AZ2 subnet address space, then update the Auto Scaling group to target all three new subnets.`, ko: `AZ2 서브넷만 사용하도록 Auto Scaling 그룹을 업데이트합니다. 이전 주소 공간의 절반을 갖도록 AZ1 서브넷을 업데이트합니다. Auto Scaling 그룹을 조정하여 AZ1 서브넷도 다시 사용하도록 합니다. 현재 AZ2 서브넷을 업데이트하고 원래 AZ1 서브넷에서 주소 공간의 두 번째 절반을 할당합니다.` },
    ],
    answer: ['A'],
    vote: '85% A',
    explain: `<p><span class="mark-ok">✅ A — 순차적 서브넷 삭제/재생성으로 3개 AZ에 주소 분배</span></p>
<p>핵심 제약: <strong>AWS에서 서브넷의 CIDR을 직접 수정(업데이트)할 수 없습니다.</strong> 기존 서브넷을 삭제하고 새로운 CIDR로 재생성해야 합니다.</p>
<p>A는 한 번에 한 AZ씩 단계적으로 처리하여 서비스 중단 없이 진행합니다. 기존 /24 두 개를 각각 /25 두 개로 분할하면 세 AZ에 각 /25 서브넷을 배정할 수 있습니다(AZ1: /25, AZ2: /25, AZ3: /25 — 각 128개 IP, 20개 인스턴스를 수용하기 충분).</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — EC2 인스턴스를 종료하면 서비스 중단이 발생합니다. "서비스 가동 중지 시간 없음" 요건에 위배됩니다.</p>
<p><span class="mark-no">❌ C</span> — 새 VPC를 생성하면 온프레미스 연결 재구성이 필요합니다. "연결이 중단될 수 없음" 요건에 위배됩니다.</p>
<p><span class="mark-no">❌ D</span> — 기존 서브넷의 CIDR을 "업데이트(update)"하는 것은 AWS에서 지원하지 않습니다. 서브넷을 삭제하고 다시 생성해야 합니다.</p>`,
    disc: [
      { ans: 'A (85%)', txt: '서브넷 CIDR은 수정 불가(삭제+재생성 필요) → D 탈락. B는 인스턴스 종료로 다운타임 발생. C는 VPC 재생성으로 온프레미스 연결 중단. A만이 단계적 삭제/재생성으로 무중단 달성.' }
    ]
  },
  {
    n: 294,
    en: `A company uses an organization in AWS Organizations to manage the company's AWS accounts. The company uses AWS CloudFormation to deploy all infrastructure. A finance team wants to build a chargeback model. The finance team asked each business unit to tag resources by using a predefined list of project values.<br><br>When the finance team used the AWS Cost and Usage Report in AWS Cost Explorer and filtered based on project, the team noticed noncompliant project values. The company wants to enforce the use of project tags for new resources.<br><br>Which solution will meet these requirements with the LEAST effort?`,
    ko: `회사는 AWS Organizations의 조직을 사용하여 AWS 계정을 관리합니다. 회사는 AWS CloudFormation을 사용하여 모든 인프라를 배포합니다. 재무팀은 지불 거절 모델을 구축하려고 합니다. 재무팀은 각 사업부에게 사전 정의된 프로젝트 값 목록을 사용하여 리소스에 태그를 지정하도록 요청했습니다.<br><br>재무팀은 규정을 준수하지 않는 프로젝트 값을 발견했습니다. 회사는 새 리소스에 대해 프로젝트 태그 사용을 시행하려고 합니다.<br><br>최소한의 노력으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a tag policy that contains the allowed project tag values in the organization's management account. Create an SCP that denies the cloudformation:CreateStack API operation unless a project tag is added. Attach the SCP to each OU.`, ko: `조직의 마스터 계정에 허용된 프로젝트 태그 값을 포함하는 태그 정책을 생성합니다. 프로젝트 태그가 추가되지 않는 한 cloudformation:CreateStack API 작업을 거부하는 SCP를 생성합니다. SCP를 각 OU에 연결합니다.` },
      { k: 'B', en: `Create a tag policy that contains the allowed project tag values in each OU. Create an SCP that denies the cloudformation:CreateStack API operation unless a project tag is added. Attach the SCP to each OU.`, ko: `각 OU에 허용되는 프로젝트 태그 값을 포함하는 태그 정책을 생성합니다. 프로젝트 태그가 추가되지 않는 한 cloudformation:CreateStack API 작업을 거부하는 SCP를 생성합니다. SCP를 각 OU에 연결합니다.` },
      { k: 'C', en: `Create a tag policy that contains the allowed project tag values in the AWS management account. Create an IAM policy that denies the cloudformation:CreateStack API operation unless a project tag is added. Assign the policy to each user.`, ko: `AWS 마스터 계정에서 허용되는 프로젝트 태그 값을 포함하는 태그 정책을 생성합니다. 프로젝트 태그가 추가되지 않는 한 cloudformation:CreateStack API 작업을 거부하는 IAM 정책을 생성합니다. 각 사용자에게 정책을 할당합니다.` },
      { k: 'D', en: `Use AWS Service Catalog to manage the CloudFormation stacks as products. Use a TagOptions library to control project tag values. Share the portfolio with all OUs that are in the organization.`, ko: `AWS Service Catalog를 사용하여 CloudFormation 스택을 제품으로 관리합니다. TagOptions 라이브러리를 사용하여 프로젝트 태그 값을 제어합니다. 조직에 있는 모든 OU와 포트폴리오를 공유합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — 관리 계정 태그 정책 + SCP(cloudformation:CreateStack 거부) + 각 OU 연결</span></p>
<p><strong>태그 정책(관리 계정):</strong> AWS Organizations 태그 정책을 관리 계정에서 생성하면 조직 전체에 상속됩니다. 각 OU별로 개별 생성하는 B보다 훨씬 효율적입니다.</p>
<p><strong>SCP:</strong> <code>cloudformation:CreateStack</code>에 <code>aws:RequestedTag/project</code> 조건을 사용하여 태그 없는 스택 생성을 Deny합니다. 모든 CloudFormation 인프라 배포에 강제 적용됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 각 OU에 개별 태그 정책을 생성하는 것은 불필요한 반복 작업입니다. 관리 계정에서 한 번 생성하면 조직 전체에 상속됩니다.</p>
<p><span class="mark-no">❌ C</span> — 각 사용자에게 IAM 정책을 할당하는 것은 수백 명의 사용자가 있을 때 비실용적입니다. SCP가 더 중앙 집중적이고 효율적입니다.</p>
<p><span class="mark-no">❌ D</span> — Service Catalog는 제품 관리에 유용하지만 설정이 복잡하고 모든 인프라 배포를 Service Catalog를 통해 강제하기 어렵습니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: '관리 계정 태그 정책 = 조직 전체 상속(B는 OU별 개별 생성으로 비효율). SCP로 CloudFormation 배포 시 태그 강제. C는 사용자별 IAM 정책 할당으로 관리 불가. D는 Service Catalog 설정 복잡.' }
    ]
  },
  {
    n: 295,
    en: `An application is deployed on Amazon EC2 instances that run in an Auto Scaling group. The Auto Scaling group configuration uses only one type of instance.<br><br>CPU and memory utilization metrics show that the instances are underutilized. A solutions architect needs to implement a solution to permanently reduce the EC2 cost and increase the utilization.<br><br>Which solution will meet these requirements with the LEAST number of configuration changes in the future?`,
    ko: `애플리케이션은 Auto Scaling 그룹에서 실행되는 Amazon EC2 인스턴스에 배포됩니다. Auto Scaling 그룹 구성은 한 가지 유형의 인스턴스만 사용합니다.<br><br>CPU 및 메모리 사용률 지표는 인스턴스의 사용률이 낮은 것으로 나타났습니다. 솔루션 아키텍트는 EC2 비용을 영구적으로 줄이고 활용도를 높이는 솔루션을 구현해야 합니다.<br><br>앞으로 최소한의 구성 변경으로 이러한 요구 사항을 충족할 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `List instance types that have properties that are similar to the properties that the current instances have. Modify the Auto Scaling group's launch template configuration to use multiple instance types from the list.`, ko: `현재 인스턴스와 유사한 속성을 가진 인스턴스 유형을 나열합니다. 목록에 있는 여러 인스턴스 유형을 사용하도록 Auto Scaling 그룹의 시작 템플릿 구성을 수정합니다.` },
      { k: 'B', en: `Use the information about the application's CPU and memory utilization to select an instance type that matches the requirements. Modify the Auto Scaling group's configuration by adding the new instance type. Remove the current instance type from the configuration.`, ko: `애플리케이션의 CPU 및 메모리 사용률에 대한 정보를 사용하여 요구 사항에 맞는 인스턴스 유형을 선택합니다. 새 인스턴스 유형을 추가하여 Auto Scaling 그룹의 구성을 수정합니다. 구성에서 현재 인스턴스 유형을 제거합니다.` },
      { k: 'C', en: `Use the information about the application's CPU and memory utilization to specify CPU and memory requirements in a new revision of the Auto Scaling group's launch template. Remove the current instance type from the configuration.`, ko: `애플리케이션의 CPU 및 메모리 사용률에 대한 정보를 사용하여 Auto Scaling 그룹 시작 템플릿의 새 개정판에서 CPU 및 메모리 요구 사항을 지정합니다. 구성에서 현재 인스턴스 유형을 제거합니다.` },
      { k: 'D', en: `Create a script that selects the appropriate instance types from the AWS Price List Bulk API. Use the selected instance types to create a new revision of the Auto Scaling group's launch template.`, ko: `AWS Price List Bulk API에서 적절한 인스턴스 유형을 선택하는 스크립트를 생성합니다. 선택한 인스턴스 유형을 사용하여 Auto Scaling 그룹 시작 템플릿의 새 개정판을 생성합니다.` },
    ],
    answer: ['C'],
    vote: '68% C',
    explain: `<p><span class="mark-ok">✅ C — 시작 템플릿에 CPU/메모리 요구 사항(속성 기반 인스턴스 선택)</span></p>
<p>EC2 Auto Scaling의 <strong>속성 기반 인스턴스 유형 선택(Attribute-based Instance Type Selection)</strong>을 사용하면 특정 인스턴스 유형 대신 CPU, 메모리 등 워크로드 요구 사항을 지정합니다. AWS가 현재 사용 가능하고 요건을 충족하는 최적의 인스턴스 유형을 자동으로 선택합니다.</p>
<p><strong>"향후 최소한의 구성 변경"이 핵심:</strong> 새로운 인스턴스 세대가 출시되거나 기존 인스턴스가 폐기되어도 CPU/메모리 요구 사항을 재정의할 필요가 없습니다. B처럼 특정 인스턴스 유형을 수동으로 업데이트할 필요가 없습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 여러 특정 인스턴스 유형을 수동으로 나열하면 새 인스턴스 유형이 출시될 때마다 목록을 업데이트해야 합니다.</p>
<p><span class="mark-no">❌ B</span> — 단일 인스턴스 유형을 지정하면 향후 해당 유형이 폐기되거나 더 나은 옵션이 나올 때 변경이 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — Price List Bulk API 스크립트는 불필요한 복잡성을 추가하고 유지 관리가 필요합니다.</p>`,
    disc: [
      { ans: 'C (68%)', txt: '"향후 최소 구성 변경" = 속성 기반 인스턴스 선택(C). CPU/메모리 요구 사항만 지정하면 AWS가 현재 최적 인스턴스 자동 선택. B는 특정 인스턴스 유형 지정으로 향후 업데이트 필요. A도 목록 수동 유지 필요.' }
    ]
  },
  {
    n: 296,
    en: `A company implements a containerized application by using Amazon Elastic Container Service (Amazon ECS) and Amazon API Gateway. The application data is stored in Amazon Aurora databases and Amazon DynamoDB databases. The company automates infrastructure provisioning by using AWS CloudFormation. The company automates application deployment by using AWS CodePipeline.<br><br>A solutions architect needs to implement a disaster recovery (DR) strategy that meets an RPO of 2 hours and an RTO of 4 hours.<br><br>Which solution will meet these requirements MOST cost-effectively?`,
    ko: `회사는 Amazon ECS 및 Amazon API Gateway를 사용하여 컨테이너화된 애플리케이션을 구현합니다. 애플리케이션 데이터는 Amazon Aurora 데이터베이스 및 Amazon DynamoDB 데이터베이스에 저장됩니다. 회사는 AWS CloudFormation을 사용하여 인프라 프로비저닝을 자동화하고 AWS CodePipeline을 사용하여 애플리케이션 배포를 자동화합니다.<br><br>솔루션 아키텍트는 RPO 2시간, RTO 4시간의 재해 복구(DR) 전략을 구현해야 합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Set up an Aurora global database and DynamoDB global tables to replicate the databases to a secondary AWS Region. Configure API Gateway Regional endpoints. Implement Amazon CloudFront with origin failover to route traffic to the secondary Region during a DR scenario.`, ko: `데이터베이스를 보조 AWS 리전에 복제하도록 Aurora 글로벌 데이터베이스와 DynamoDB 글로벌 테이블을 설정합니다. API Gateway 리전 엔드포인트를 구성합니다. DR 시나리오 중에 CloudFront 오리진 장애 조치를 구현합니다.` },
      { k: 'B', en: `Use AWS Database Migration Service (AWS DMS), Amazon EventBridge, and AWS Lambda to replicate the Aurora databases. Use DynamoDB Streams, EventBridge, and Lambda to replicate the DynamoDB databases. Configure API Gateway Regional endpoints. Implement Amazon Route 53 failover routing.`, ko: `AWS DMS, Amazon EventBridge 및 AWS Lambda를 사용하여 Aurora 데이터베이스를 복제합니다. DynamoDB 스트림, EventBridge 및 Lambda를 사용하여 DynamoDB 데이터베이스를 복제합니다. API Gateway 리전 엔드포인트를 구성합니다. Amazon Route 53 장애 조치 라우팅을 구현합니다.` },
      { k: 'C', en: `Use AWS Backup to create backups of the Aurora databases and the DynamoDB databases in a secondary AWS Region. Configure API Gateway Regional endpoints. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.`, ko: `AWS Backup을 사용하여 보조 AWS 리전에 Aurora 및 DynamoDB 데이터베이스 백업을 생성합니다. API Gateway 리전 엔드포인트를 구성합니다. Amazon Route 53 장애 조치 라우팅을 구현합니다.` },
      { k: 'D', en: `Set up an Aurora global database and DynamoDB global tables to replicate the databases to a secondary AWS Region. Configure API Gateway Regional endpoints. Implement Amazon Route 53 failover routing to switch traffic from the primary Region to the secondary Region.`, ko: `데이터베이스를 보조 AWS 리전에 복제하도록 Aurora 글로벌 데이터베이스와 DynamoDB 글로벌 테이블을 설정합니다. API Gateway 리전 엔드포인트를 구성합니다. Amazon Route 53 장애 조치 라우팅을 구현합니다.` },
    ],
    answer: ['C'],
    vote: 'C(58%) D(37%) 논란',
    explain: `<p><span class="mark-ok">✅ C — AWS Backup + Route 53 장애 조치 (비용 최적화)</span></p>
<p><strong>비용 최적화가 핵심:</strong> RPO 2시간과 RTO 4시간은 엄격하지 않은 요건입니다. Aurora와 DynamoDB는 모두 <strong>지속적 백업(PITR)</strong>을 지원하므로 AWS Backup으로 RPO 2시간을 충족할 수 있습니다.</p>
<p>D(글로벌 데이터베이스 + 글로벌 테이블)는 더 강력하지만 비용이 훨씬 높습니다. CloudFormation + CodePipeline이 이미 있어 DR 리전에 인프라를 빠르게 재배포할 수 있으므로 RTO 4시간도 달성 가능합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Aurora 글로벌 DB + DynamoDB 글로벌 테이블 + CloudFront는 과잉 투자입니다. RTO/RPO 요건 대비 비용이 지나치게 높습니다.</p>
<p><span class="mark-no">❌ B</span> — DMS + EventBridge + Lambda 조합은 운영 복잡성이 높고 RPO 2시간 보장이 불확실합니다.</p>
<p><span class="mark-no">❌ D</span> — 글로벌 데이터베이스와 글로벌 테이블은 C보다 비용이 훨씬 높습니다. "가장 비용 효율적" 요건에서 C가 우선합니다.</p>`,
    disc: [
      { ans: 'C(58%) vs D(37%)', txt: '"가장 비용 효율적"이 핵심. C(백업+복원)가 D(글로벌 DB)보다 저렴. CloudFormation+CodePipeline으로 4시간 내 DR 리전 재배포 가능. D는 완전한 솔루션이나 비용 과다.' }
    ]
  },
  {
    n: 297,
    en: `A company has a complex web application that leverages Amazon CloudFront for global scalability and performance. Over time, users report that the web application is slowing down.<br><br>The company's operations team reports that the CloudFront cache hit ratio has been dropping steadily. The cache metrics report indicates that query strings on some URLs are inconsistently ordered and are specified sometimes in mixed-case letters and sometimes in lowercase letters.<br><br>Which set of actions should the solutions architect take to increase the cache hit ratio as quickly as possible?`,
    ko: `회사에는 글로벌 확장성과 성능을 위해 Amazon CloudFront를 활용하는 복잡한 웹 애플리케이션이 있습니다. 시간이 지나면서 사용자들은 웹 애플리케이션 속도가 느려지고 있다고 보고합니다.<br><br>회사 운영 팀은 CloudFront 캐시 적중률이 꾸준히 감소하고 있다고 보고합니다. 캐시 지표 보고서는 일부 URL의 쿼리 문자열이 일관되지 않게 정렬되어 있으며 때로는 대소문자가 혼합되거나 소문자로 지정된다는 것을 나타냅니다.<br><br>캐시 적중률을 최대한 빨리 높이기 위해 솔루션 설계자는 어떤 조치를 취해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy a Lambda@Edge function to sort parameters by name and force them to be lowercase. Select the CloudFront viewer request trigger to invoke the function.`, ko: `매개변수를 이름별로 정렬하고 소문자로 강제 지정하려면 Lambda@Edge 함수를 배포하세요. CloudFront 뷰어 요청 트리거를 선택하여 함수를 호출합니다.` },
      { k: 'B', en: `Update the CloudFront distribution to disable caching based on query string parameters.`, ko: `쿼리 문자열 매개변수를 기반으로 캐싱을 비활성화하도록 CloudFront 배포를 업데이트합니다.` },
      { k: 'C', en: `Deploy a reverse proxy after the load balancer to post-process the emitted URLs in the application to force the URL strings to be lowercase.`, ko: `로드 밸런서 뒤에 역방향 프록시를 배포하여 애플리케이션에서 내보낸 URL을 사후 처리하여 URL 문자열을 소문자로 만듭니다.` },
      { k: 'D', en: `Update the CloudFront distribution to specify casing-insensitive query string processing.`, ko: `대소문자를 구분하지 않는 쿼리 문자열 처리를 지정하도록 CloudFront 배포를 업데이트합니다.` },
    ],
    answer: ['A'],
    vote: '89% A',
    explain: `<p><span class="mark-ok">✅ A — Lambda@Edge + 뷰어 요청 트리거 (쿼리 문자열 정규화)</span></p>
<p>CloudFront는 쿼리 문자열 캐싱 시 파라미터의 대소문자와 순서를 구분합니다. Lambda@Edge를 <strong>뷰어 요청</strong> 이벤트에 연결하면 요청이 캐시 키 평가 전에 처리되어, 파라미터를 이름순 정렬 + 소문자로 정규화합니다.</p>
<p>AWS 공식 문서의 Lambda@Edge 예제에서 쿼리 문자열 파라미터를 정규화하는 코드를 제공합니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-examples.html#lambda-examples-normalize-query-string-parameters" target="_blank">AWS 공식 문서 - Lambda@Edge 쿼리 문자열 정규화 예제</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 쿼리 문자열 기반 캐싱을 비활성화하면 모든 요청이 오리진으로 전달되어 캐시 적중률이 더 낮아집니다.</p>
<p><span class="mark-no">❌ C</span> — 역방향 프록시는 응답(response)을 처리하지 요청(request)의 캐시 키를 변경하지 않습니다. 캐시 적중률에 도움이 되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudFront 배포에는 대소문자를 구분하지 않는 쿼리 문자열 처리 옵션이 기본 제공되지 않습니다.</p>`,
    disc: [
      { ans: 'A (89%)', txt: 'CloudFront는 쿼리 문자열 대소문자/순서 구분 → Lambda@Edge로 뷰어 요청 시 정규화. D는 CloudFront 기본 제공 기능 없음. B는 캐싱 비활성화로 역효과. AWS 공식 예제에서 A 패턴 권장.' }
    ]
  },
  {
    n: 298,
    en: `A company runs an ecommerce application in a single AWS Region. The application uses a five-node Amazon Aurora MySQL DB cluster to store information about customers and their recent orders. The DB cluster experiences a large number of write transactions throughout the day.<br><br>The company needs to replicate the data in the Aurora database to another Region to meet disaster recovery requirements. The company has an RPO of 1 hour.<br><br>Which solution will meet these requirements with the LOWEST cost?`,
    ko: `회사는 단일 AWS 리전에서 전자상거래 애플리케이션을 실행합니다. 애플리케이션은 5노드 Amazon Aurora MySQL DB 클러스터를 사용합니다. DB 클러스터에서는 하루 종일 많은 수의 쓰기 트랜잭션이 발생합니다.<br><br>회사는 재해 복구 요구 사항을 충족하기 위해 Aurora 데이터베이스의 데이터를 다른 지역으로 복제해야 합니다. 회사의 RPO는 1시간입니다.<br><br>가장 저렴한 비용으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Modify the Aurora database to be an Aurora global database. Create a second Aurora database in another Region.`, ko: `Aurora 데이터베이스를 Aurora 글로벌 데이터베이스로 수정합니다. 다른 리전에 두 번째 Aurora 데이터베이스를 생성합니다.` },
      { k: 'B', en: `Enable the Backtrack feature for the Aurora database. Create an AWS Lambda function that runs daily to copy the snapshots of the database to a backup Region.`, ko: `Aurora 데이터베이스에 대한 역추적 기능을 활성화합니다. 매일 실행하여 데이터베이스 스냅샷을 백업 리전에 복사하는 AWS Lambda 함수를 생성합니다.` },
      { k: 'C', en: `Use AWS Database Migration Service (AWS DMS). Create a DMS change data capture (CDC) task that replicates the ongoing changes from the Aurora database to an Amazon S3 bucket in another Region.`, ko: `AWS DMS를 사용합니다. Aurora 데이터베이스에서 다른 리전의 Amazon S3 버킷으로 진행 중인 변경 사항을 복제하는 DMS CDC 작업을 생성합니다.` },
      { k: 'D', en: `Turn off automated Aurora backups. Configure Aurora backups with a backup frequency of 1 hour. Specify another Region as the destination Region. Select the Aurora database as the resource assignment.`, ko: `자동화된 Aurora 백업을 끕니다. 1시간의 백업 빈도로 Aurora 백업을 구성합니다. 다른 리전을 대상 리전으로 지정합니다. Aurora 데이터베이스를 리소스 할당으로 선택합니다.` },
    ],
    answer: ['C'],
    vote: 'C(69%) A(25%) 논란',
    explain: `<p><span class="mark-ok">✅ C — AWS DMS CDC + S3 (최저 비용)</span></p>
<p>RTO가 명시되지 않았습니다. 요건은 RPO 1시간과 최저 비용입니다. AWS DMS CDC로 Aurora의 변경 사항을 다른 리전의 S3에 지속적으로 복제하면 RPO 1시간 이내를 충족합니다.</p>
<p>Aurora 글로벌 데이터베이스(A)는 실시간 복제를 제공하지만 보조 리전에서 전체 Aurora 클러스터를 운영하므로 비용이 훨씬 높습니다. DMS + S3는 데이터만 보관하므로 비용이 낮습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Aurora 글로벌 데이터베이스는 보조 리전에 전체 Aurora 클러스터를 운영하므로 비용이 높습니다. RPO 1시간보다 훨씬 낮은 RPO를 제공하여 과잉 투자입니다.</p>
<p><span class="mark-no">❌ B</span> — 일일 복사는 RPO 1시간을 충족하지 못합니다(최대 24시간 데이터 손실 가능). 역추적은 DR 복제가 아닌 오류 수정용입니다.</p>
<p><span class="mark-no">❌ D</span> — Aurora에서는 자동 백업을 완전히 비활성화할 수 없습니다(보존 기간 최소 1일). 설명이 잘못되어 있습니다.</p>`,
    disc: [
      { ans: 'C(69%) vs A(25%)', txt: 'RTO 없음 → 복원 시간 불확실. 핵심은 "최저 비용". A(글로벌 DB)=보조 클러스터 상시 비용 과다. DMS CDC+S3=데이터만 보관으로 저렴. RPO 1시간 충족 가능(CDC 지속 복제).' }
    ]
  },
  {
    n: 299,
    en: `A company's solutions architect is evaluating an AWS workload that was deployed several years ago. The application tier is stateless and runs on a single large Amazon EC2 instance that was launched from an AMI. The application stores data in a MySQL database that runs on a single EC2 instance.<br><br>The CPU utilization on the application server EC2 instance often reaches 100% and causes the application to stop responding. The company manually installs patches on the instances. Patching has caused downtime in the past. The company needs to make the application highly available.<br><br>Which solution will meet these requirements with the LEAST development effort?`,
    ko: `회사의 솔루션 아키텍트가 몇 년 전에 배포된 AWS 워크로드를 평가하고 있습니다. 애플리케이션 계층은 상태 비저장이며 AMI에서 시작된 단일 대규모 Amazon EC2 인스턴스에서 실행됩니다. 애플리케이션은 단일 EC2 인스턴스에서 실행되는 MySQL 데이터베이스에 데이터를 저장합니다.<br><br>애플리케이션 서버 EC2 인스턴스의 CPU 사용률이 100%에 도달하는 경우가 많아 애플리케이션이 응답을 중지합니다. 회사는 인스턴스에 패치를 수동으로 설치합니다. 과거에는 패치 적용으로 인해 다운타임이 발생했습니다. 회사는 애플리케이션의 가용성을 높여야 합니다.<br><br>최소한의 개발로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Move the application tier to AWS Lambda functions in the existing VPC. Create an Application Load Balancer to distribute traffic across the Lambda functions. Use Amazon GuardDuty to scan the Lambda functions. Migrate the database to Amazon DocumentDB (with MongoDB compatibility).`, ko: `애플리케이션 계층을 기존 VPC의 AWS Lambda 함수로 이동합니다. ALB를 생성하여 Lambda 함수 전체에 트래픽을 분산시킵니다. Amazon GuardDuty를 사용하여 Lambda 함수를 스캔합니다. 데이터베이스를 Amazon DocumentDB로 마이그레이션합니다.` },
      { k: 'B', en: `Change the EC2 instance type to a smaller Graviton-based instance type. Use the existing AMI to create a launch template for an Auto Scaling group. Create an Application Load Balancer to distribute traffic. Set the Auto Scaling group to scale based on CPU utilization. Migrate the database to Amazon DynamoDB.`, ko: `EC2 인스턴스 유형을 더 작은 Graviton 기반 인스턴스 유형으로 변경합니다. 기존 AMI를 사용하여 Auto Scaling 그룹에 대한 시작 템플릿을 생성합니다. ALB를 생성합니다. DynamoDB로 데이터베이스를 마이그레이션합니다.` },
      { k: 'C', en: `Move the application tier to containers by using Docker. Run the containers on Amazon ECS with EC2 instances. Create an ALB to distribute traffic. Configure the ECS cluster to scale based on CPU utilization. Migrate the database to Amazon Neptune.`, ko: `Docker를 사용하여 애플리케이션 계층을 컨테이너로 이동합니다. Amazon ECS에서 컨테이너를 실행합니다. ALB를 생성합니다. Neptune으로 데이터베이스를 마이그레이션합니다.` },
      { k: 'D', en: `Create a new AMI that is configured with AWS Systems Manager Agent (SSM Agent). Use the new AMI to create a launch template for an Auto Scaling group. Use smaller instances in the Auto Scaling group. Create an Application Load Balancer to distribute traffic across the instances. Set the Auto Scaling group to scale based on CPU utilization. Migrate the database to Amazon Aurora MySQL.`, ko: `AWS Systems Manager 에이전트(SSM 에이전트)로 구성된 새 AMI를 생성합니다. 새 AMI를 사용하여 Auto Scaling 그룹에 대한 시작 템플릿을 생성합니다. Auto Scaling 그룹에서 더 작은 인스턴스를 사용합니다. ALB를 생성합니다. CPU 사용률에 따라 조정되도록 Auto Scaling 그룹을 설정합니다. 데이터베이스를 Amazon Aurora MySQL로 마이그레이션합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — SSM Agent AMI + ASG + ALB + Aurora MySQL</span></p>
<p><strong>최소 개발 노력:</strong> 기존 애플리케이션을 Lambda(A), 컨테이너(C), DynamoDB(B)/Neptune(C) 등으로 마이그레이션하면 대규모 코드 재작성이 필요합니다.</p>
<p><strong>Aurora MySQL:</strong> 기존 MySQL과 완벽 호환으로 마이그레이션 코드 변경이 최소화됩니다. 완전 관리형 서비스로 패치 다운타임 문제도 해결됩니다.</p>
<p><strong>SSM Agent + ALB + ASG:</strong> 기존 애플리케이션을 그대로 사용하면서 수평 확장으로 CPU 과부하를 해결합니다. SSM으로 패치를 다운타임 없이 자동화할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Lambda로의 마이그레이션은 애플리케이션 전면 재작성이 필요합니다. MySQL→DocumentDB도 대규모 변경입니다.</p>
<p><span class="mark-no">❌ B</span> — MySQL→DynamoDB(NoSQL)로의 마이그레이션은 데이터 모델과 쿼리 코드를 전면 재작성해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — Docker 컨테이너화 + Neptune(그래프 DB) 마이그레이션은 가장 많은 개발 노력을 요구합니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'Aurora MySQL = MySQL 호환(코드 변경 최소). SSM Agent AMI로 자동 패치(다운타임 해결). ALB+ASG로 고가용성+확장. A/B/C는 DB 유형 변경으로 대규모 재작성 필요.' }
    ]
  },
  {
    n: 300,
    en: `A company is planning to migrate several applications to AWS. The company does not have a good understanding of its entire application estate. The estate consists of a mixture of physical machines and VMs.<br><br>One application that the company will migrate has many dependencies that are sensitive to latency. The company is unsure what all the dependencies are. However, the company knows that the low-latency communications use a custom IP-based protocol that runs on port 1000. The company wants to migrate the application and these dependencies together to move all the low-latency interfaces to AWS at the same time.<br><br>The company has installed the AWS Application Discovery Agent and has been collecting data for several months.<br><br>What should the company do to identify the dependencies that need to be migrated in the same phase as the application?`,
    ko: `회사는 여러 애플리케이션을 AWS로 마이그레이션할 계획입니다. 회사는 전체 애플리케이션 자산을 제대로 이해하지 못하고 있습니다. 자산은 물리적 머신과 VM의 혼합으로 구성됩니다.<br><br>마이그레이션할 애플리케이션에는 대기 시간에 민감한 종속성이 많이 있습니다. 회사는 모든 종속성이 무엇인지 확신하지 못합니다. 그러나 지연 시간이 짧은 통신이 포트 1000에서 실행되는 사용자 지정 IP 기반 프로토콜을 사용한다는 것을 알고 있습니다. 회사는 AWS Application Discovery Agent를 설치하고 몇 달 동안 데이터를 수집해 왔습니다.<br><br>애플리케이션과 동일한 단계에서 마이그레이션해야 하는 종속성을 식별하려면 회사는 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS Migration Hub and select the servers that host the application. Visualize the network graph to find servers that interact with the application. Turn on data exploration in Amazon Athena. Query the data that is transferred between the servers to identify the servers that communicate on port 1000. Return to Migration Hub. Create a move group that is based on the findings from the Athena queries.`, ko: `AWS Migration Hub를 사용하고 애플리케이션을 호스팅하는 서버를 선택합니다. 네트워크 그래프를 시각화하여 애플리케이션과 상호 작용하는 서버를 찾습니다. Amazon Athena에서 데이터 탐색을 활성화합니다. 서버 간에 전송되는 데이터를 쿼리하여 포트 1000에서 통신하는 서버를 식별합니다. Migration Hub로 돌아가 Athena 쿼리 결과를 기반으로 이동 그룹을 만듭니다.` },
      { k: 'B', en: `Use AWS Application Migration Service and select the servers that host the application. Visualize the network graph. Configure Application Migration Service to launch test instances for all servers that interact with the application. Perform acceptance tests. Create a move group based on the tested servers.`, ko: `AWS Application Migration Service를 사용하고 애플리케이션을 호스팅하는 서버를 선택합니다. 네트워크 그래프를 시각화합니다. 애플리케이션과 상호 작용하는 모든 서버에 대해 테스트 인스턴스를 시작하도록 Application Migration Service를 구성합니다. 테스트된 서버를 기반으로 이동 그룹을 만듭니다.` },
      { k: 'C', en: `Use AWS Migration Hub and select the servers that host the application. Turn on data exploration in Network Access Analyzer. Use the Network Access Analyzer console to select the servers that host the application. Select a Network Access Scope of port 1000 and note the matching servers. Return to Migration Hub. Create a move group that is based on the findings from Network Access Analyzer.`, ko: `AWS Migration Hub를 사용하고 애플리케이션을 호스팅하는 서버를 선택합니다. 네트워크 액세스 분석기에서 데이터 탐색을 활성화합니다. 포트 1000의 네트워크 액세스 범위를 선택하고 일치하는 서버를 기록합니다. Migration Hub로 돌아가 이동 그룹을 만듭니다.` },
      { k: 'D', en: `Use AWS Migration Hub and select the servers that host the application. Push the Amazon CloudWatch agent to the identified servers by using the AWS Application Discovery Agent. Export the CloudWatch logs to Amazon S3. Use Amazon Athena to query the logs to find servers that communicate on port 1000. Return to Migration Hub. Create a move group based on the Athena query findings.`, ko: `AWS Migration Hub를 사용하고 애플리케이션을 호스팅하는 서버를 선택합니다. AWS Application Discovery Agent를 사용하여 Amazon CloudWatch 에이전트를 식별된 서버로 푸시합니다. CloudWatch 로그를 Amazon S3로 내보냅니다. Amazon Athena를 사용하여 로그를 쿼리하여 포트 1000에서 통신하는 서버를 찾습니다.` },
    ],
    answer: ['A'],
    vote: '95% A',
    explain: `<p><span class="mark-ok">✅ A — Migration Hub 네트워크 그래프 + Athena 데이터 탐색</span></p>
<p>AWS Application Discovery Agent가 이미 몇 달간 데이터를 수집했습니다. AWS Migration Hub의 <strong>네트워크 시각화</strong> 기능으로 서버 간 연결 관계를 그래프로 볼 수 있습니다.</p>
<p>Migration Hub에서 <strong>Amazon Athena 데이터 탐색</strong>을 활성화하면 Discovery Agent가 수집한 네트워크 연결 데이터를 SQL로 쿼리할 수 있습니다. 포트 1000에서 통신하는 서버를 식별한 후 Migration Hub에서 이동 그룹을 생성합니다.</p>
<p><a href="https://aws.amazon.com/blogs/mt/using-aws-migration-hub-network-visualization-to-overcome-application-and-server-dependency-challenges/" target="_blank">AWS 공식 블로그 - Migration Hub 네트워크 시각화</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Application Migration Service는 서버 리프트-앤-시프트 마이그레이션 도구이지 종속성 매핑 도구가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — Network Access Analyzer는 <strong>AWS 리소스</strong>의 네트워크 접근성을 분석하는 도구입니다. 온프레미스 서버 간 통신 분석에는 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudWatch 에이전트를 추가로 배포하는 것은 불필요한 복잡성을 추가합니다. Discovery Agent 데이터를 Athena로 직접 쿼리하는 것(A)이 더 직접적입니다.</p>`,
    disc: [
      { ans: 'A (95%)', txt: 'Discovery Agent 데이터 → Migration Hub 네트워크 그래프(시각화) → Athena 데이터 탐색(포트 1000 쿼리) → 이동 그룹 생성. Network Access Analyzer(C)는 온프레미스 미지원. Application Migration Service(B)는 DR 도구.' }
    ]
  },
];