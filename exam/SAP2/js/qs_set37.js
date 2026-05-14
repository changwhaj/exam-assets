window.QS_SET37 = [
  {
    n: 361,
    en: `A software as a service (SaaS) company uses AWS to host a service that is powered by AWS PrivateLink. The service consists of proprietary software that runs on three Amazon EC2 instances behind a Network Load Balancer (NLB). The instances are in private subnets in multiple Availability Zones in the eu-west-2 Region. All the company's customers are in eu-west-2.<br><br>However, the company now acquires a new customer in the us-east-1 Region. The company creates a new VPC and new subnets in us-east-1. The company establishes inter-Region VPC peering between the VPCs in the two Regions.<br><br>The company wants to give the new customer access to the SaaS service, but the company does not want to immediately deploy new EC2 resources in us-east-1.<br><br>Which solution will meet these requirements?`,
    ko: `한 SaaS 회사가 AWS PrivateLink로 제공되는 서비스를 AWS에서 호스팅합니다. 이 서비스는 NLB 뒤에 있는 3개의 EC2 인스턴스에서 실행됩니다. 인스턴스는 eu-west-2 리전의 여러 AZ 프라이빗 서브넷에 있습니다. 회사의 모든 고객은 eu-west-2에 있습니다.<br><br>그러나 회사는 us-east-1 리전의 새 고객을 확보했습니다. 회사는 us-east-1에 새 VPC와 서브넷을 생성하고 두 리전 간 VPC 피어링을 설정했습니다.<br><br>회사는 us-east-1에 새 EC2 리소스를 즉시 배포하지 않으면서 신규 고객에게 SaaS 서비스 접근 권한을 부여하려 합니다.<br><br>이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Configure a PrivateLink endpoint service in us-east-1 to use the existing NLB that is in eu-west-2. Grant specific AWS accounts access to connect to the SaaS service.`, ko: `eu-west-2에 있는 기존 NLB를 사용하도록 us-east-1에서 PrivateLink 엔드포인트 서비스를 구성합니다. 특정 AWS 계정에 SaaS 서비스 연결 권한을 부여합니다.` },
      { k: 'B', en: `Create an NLB in us-east-1. Create an IP target group that uses the IP addresses of the company's instances in eu-west-2 that host the SaaS service. Configure a PrivateLink endpoint service that uses the NLB that is in us-east-1. Grant specific AWS accounts access to connect to the SaaS service.`, ko: `us-east-1에 NLB를 생성합니다. eu-west-2 인스턴스의 IP 주소를 사용하는 IP 대상 그룹을 생성합니다. us-east-1의 NLB를 사용하는 PrivateLink 엔드포인트 서비스를 구성합니다. 특정 AWS 계정에 접근 권한을 부여합니다.` },
      { k: 'C', en: `Create an Application Load Balancer (ALB) in front of the EC2 instances in eu-west-2. Create an NLB in us-east-1. Associate the NLB with an ALB target group that uses the ALB in eu-west-2. Configure a PrivateLink endpoint service that uses the NLB in us-east-1. Grant specific AWS accounts access to connect to the SaaS service.`, ko: `eu-west-2 EC2 인스턴스 앞에 ALB를 생성합니다. us-east-1에 NLB를 생성합니다. NLB를 eu-west-2 ALB를 사용하는 ALB 대상 그룹과 연결합니다. PrivateLink 엔드포인트 서비스를 구성하고 특정 계정에 권한을 부여합니다.` },
      { k: 'D', en: `Use AWS Resource Access Manager (AWS RAM) to share the EC2 instances in eu-west-2. In us-east-1, create an NLB and an instance target group that includes the shared EC2 instances from eu-west-2. Configure a PrivateLink endpoint service that uses the NLB in us-east-1. Grant specific AWS accounts access to connect to the SaaS service.`, ko: `AWS RAM을 사용하여 eu-west-2의 EC2 인스턴스를 공유합니다. us-east-1에 공유 EC2 인스턴스를 포함하는 NLB와 인스턴스 대상 그룹을 생성합니다. PrivateLink 엔드포인트 서비스를 구성하고 특정 계정에 권한을 부여합니다.` },
    ],
    answer: ['A'],
    vote: 'A 61% / B 39%',
    explain: `<p><span class="mark-ok">✅ A — 리전 간 VPC 피어링을 통한 PrivateLink 접근</span></p>
<p>AWS는 2018년부터 <strong>PrivateLink가 리전 간 VPC 피어링을 통한 액세스를 지원</strong>한다고 발표했습니다. 회사는 이미 두 리전 간 VPC 피어링을 설정했으므로, us-east-1 고객 VPC에서 eu-west-2의 기존 PrivateLink 엔드포인트 서비스에 접근하는 것이 가능합니다. us-east-1에 새 NLB나 EC2 리소스를 배포할 필요가 없어 요구 사항을 완전히 충족합니다.</p>
<p>📎 <a href="https://aws.amazon.com/about-aws/whats-new/2018/10/aws-privatelink-now-supports-access-over-inter-region-vpc-peering/" target="_blank">PrivateLink 리전 간 VPC 피어링 지원 발표</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 작동하지만 us-east-1에 새 NLB 생성 및 IP 대상 그룹 설정이라는 추가 오버헤드가 발생합니다. 리전 간 피어링이 이미 설정되어 있으므로 A가 더 단순합니다.</p>
<p><span class="mark-no">❌ C</span> — NLB는 ALB를 대상으로 직접 사용할 수 없습니다. 아키텍처적으로 불필요한 복잡성입니다.</p>
<p><span class="mark-no">❌ D</span> — AWS RAM으로 EC2 인스턴스를 다른 리전과 공유하는 기능은 지원되지 않습니다.</p>`,
    disc: [
      { ans: 'A (61%)', txt: '2018년부터 PrivateLink는 리전 간 VPC 피어링을 통한 액세스를 공식 지원. 기존 NLB·엔드포인트 서비스 변경 없이 us-east-1 고객이 접근 가능.' },
      { ans: 'B (39%)', txt: 'PrivateLink 엔드포인트 서비스 생성 시 같은 리전 NLB만 선택 가능하다는 점을 근거로 B를 선택하는 의견도 있으나, 피어링 설정 후 리전 간 접근이 공식 지원됨.' },
    ]
  },

  {
    n: 362,
    en: `A company needs to monitor a growing number of Amazon S3 buckets across two AWS Regions. The company also needs to track the percentage of objects that are encrypted in Amazon S3. The company needs a dashboard to display this information for internal compliance teams.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `한 회사는 두 AWS 리전에서 점점 늘어나는 Amazon S3 버킷 수를 모니터링해야 합니다. 또한 Amazon S3에서 암호화된 객체의 비율을 추적해야 합니다. 회사는 내부 규정 준수 팀을 위해 이 정보를 표시하는 대시보드가 필요합니다.<br><br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a new S3 Storage Lens dashboard in each Region to track bucket and encryption metrics. Aggregate data from both Region dashboards into a single dashboard in Amazon QuickSight for the compliance teams.`, ko: `각 리전에 새로운 S3 Storage Lens 대시보드를 생성하여 버킷 및 암호화 지표를 추적합니다. 두 리전 대시보드의 데이터를 Amazon QuickSight의 단일 대시보드로 집계합니다.` },
      { k: 'B', en: `Deploy an AWS Lambda function in each Region to list the number of buckets and the encryption status of objects. Store this data in Amazon S3. Use Amazon Athena queries to display the data on a custom dashboard in Amazon QuickSight for the compliance teams.`, ko: `각 리전에 Lambda 함수를 배포하여 버킷 수와 암호화 상태를 나열합니다. 데이터를 S3에 저장합니다. Athena 쿼리를 사용하여 QuickSight 대시보드에 표시합니다.` },
      { k: 'C', en: `Use the S3 Storage Lens default dashboard to track bucket and encryption metrics. Give the compliance teams access to the dashboard directly in the S3 console.`, ko: `S3 Storage Lens 기본 대시보드를 사용하여 버킷 및 암호화 지표를 추적합니다. S3 콘솔에서 직접 대시보드에 대한 액세스 권한을 규정 준수 팀에 부여합니다.` },
      { k: 'D', en: `Create an Amazon EventBridge rule to detect AWS CloudTrail events for S3 object creation. Configure the rule to invoke an AWS Lambda function to record encryption metrics in Amazon DynamoDB. Use Amazon QuickSight to display the metrics in a dashboard for the compliance teams.`, ko: `S3 객체 생성 CloudTrail 이벤트를 감지하는 EventBridge 규칙을 생성합니다. DynamoDB에 암호화 지표를 기록하는 Lambda를 호출하도록 구성합니다. QuickSight로 대시보드에 지표를 표시합니다.` },
    ],
    answer: ['C'],
    vote: '80% C',
    explain: `<p><span class="mark-ok">✅ C — S3 Storage Lens 기본 대시보드</span></p>
<p>Amazon S3 Storage Lens의 <strong>기본 대시보드</strong>는 추가 설정 없이 즉시 사용 가능하며 무료입니다. 모든 리전의 버킷 수, 암호화된 객체 비율 등의 지표를 단일 뷰로 자동 집계합니다. 규정 준수 팀에게 S3 콘솔 접근 권한만 부여하면 추가 인프라 없이 즉시 사용 가능합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_basics_metrics_recommendations.html#storage_lens_basics_default_dashboard" target="_blank">S3 Storage Lens 기본 대시보드 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Storage Lens는 리전별로 별도 생성할 필요 없이 기본 대시보드가 모든 리전을 자동으로 커버합니다. QuickSight 추가 구성은 불필요한 오버헤드입니다.</p>
<p><span class="mark-no">❌ B</span> — Lambda + S3 + Athena + QuickSight 파이프라인은 코드 작성·유지 관리 등 운영 오버헤드가 매우 높습니다.</p>
<p><span class="mark-no">❌ D</span> — EventBridge + Lambda + DynamoDB + QuickSight 조합은 구성 요소가 가장 많고 복잡합니다.</p>`,
    disc: [
      { ans: 'C (80%)', txt: 'Storage Lens 기본 대시보드는 무료·즉시 사용 가능하며 다중 리전 암호화 지표를 포함. 최소 오버헤드 = 기본 대시보드 + 콘솔 접근 권한 부여.' },
    ]
  },

  {
    n: 363,
    en: `A company's CISO has asked a solutions architect to re-engineer the company's current CI/CD practices to make sure patch deployments to its application can happen as quickly as possible with minimal downtime if vulnerabilities are discovered. The company must also be able to quickly roll back a change in case of errors.<br><br>The web application is deployed in a fleet of Amazon EC2 instances behind an Application Load Balancer. The company is currently using GitHub to host the application source code, and has configured an AWS CodeBuild project to build the application. The company also intends to use AWS CodePipeline to trigger builds from GitHub commits using the existing CodeBuild project.<br><br>What CI/CD configuration meets all of the requirements?`,
    ko: `회사의 CISO가 취약점 발견 시 최소 다운타임으로 패치 배포가 가능한 빠른 CI/CD 재설계를 요청했습니다. 오류 발생 시 신속한 롤백도 가능해야 합니다.<br><br>웹 애플리케이션은 ALB 뒤 EC2 인스턴스 집합에 배포됩니다. GitHub로 소스 코드를 호스팅하고 CodeBuild 프로젝트로 빌드합니다. CodePipeline으로 GitHub 커밋에서 빌드를 트리거할 예정입니다.<br><br>모든 요구 사항을 충족하는 CI/CD 구성은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Configure CodePipeline with a deploy stage using AWS CodeDeploy configured for in-place deployment. Monitor the newly deployed code, and, if there are any issues, push another code update.`, ko: `인플레이스 배포용 CodeDeploy를 사용하여 배포 단계로 CodePipeline을 구성합니다. 새로 배포된 코드를 모니터링하고, 문제가 있으면 다른 코드 업데이트를 푸시합니다.` },
      { k: 'B', en: `Configure CodePipeline with a deploy stage using AWS CodeDeploy configured for blue/green deployments. Monitor the newly deployed code, and, if there are any issues, trigger a manual rollback using CodeDeploy.`, ko: `블루/그린 배포용 CodeDeploy를 사용하여 배포 단계로 CodePipeline을 구성합니다. 새로 배포된 코드를 모니터링하고, 문제가 있으면 CodeDeploy를 사용하여 수동 롤백을 트리거합니다.` },
      { k: 'C', en: `Configure CodePipeline with a deploy stage using AWS CloudFormation to create a pipeline for test and production stacks. Monitor the newly deployed code, and, if there are any issues, push another code update.`, ko: `CloudFormation을 사용하여 테스트 및 프로덕션 스택을 위한 파이프라인으로 CodePipeline을 구성합니다. 문제가 있으면 다른 코드 업데이트를 푸시합니다.` },
      { k: 'D', en: `Configure the CodePipeline with a deploy stage using AWS OpsWorks and in-place deployments. Monitor the newly deployed code, and, if there are any issues, push another code update.`, ko: `AWS OpsWorks 및 인플레이스 배포를 사용하여 배포 단계로 CodePipeline을 구성합니다. 문제가 있으면 다른 코드 업데이트를 푸시합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — CodeDeploy 블루/그린 배포 + 수동 롤백</span></p>
<p><strong>블루/그린 배포:</strong> 현재 버전(블루)과 별도로 새 버전(그린)을 배포한 후 ALB를 통해 트래픽을 전환합니다. 두 버전이 동시에 실행되므로 <strong>가동 중지 시간이 최소화</strong>됩니다.</p>
<p><strong>빠른 롤백:</strong> 문제 발생 시 CodeDeploy에서 즉시 트래픽을 블루(이전) 버전으로 다시 전환합니다. 새 코드를 다시 배포할 필요 없이 수 분 내에 완료됩니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-create-console-blue-green.html" target="_blank">CodeDeploy 블루/그린 배포 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 인플레이스 배포는 배포 중 다운타임이 발생할 수 있고, 롤백도 새 코드 재배포가 필요하여 느립니다.</p>
<p><span class="mark-no">❌ C</span> — CloudFormation은 인프라 프로비저닝 도구로 빠른 코드 배포·롤백에 최적화되어 있지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — OpsWorks는 Chef/Puppet 기반 구성 관리 서비스로, 빠른 패치 배포와 신속한 롤백 시나리오에 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '블루/그린 = 최소 다운타임 + 빠른 롤백 두 요구 사항 동시 충족. CodeDeploy의 즉시 롤백 기능이 인플레이스 재배포 방식보다 훨씬 신속.' },
    ]
  },

  {
    n: 364,
    en: `A company is managing many AWS accounts by using an organization in AWS Organizations. Different business units in the company run applications on Amazon EC2 instances. All the EC2 instances must have a BusinessUnit tag so that the company can track the cost for each business unit.<br><br>A recent audit revealed that some instances were missing this tag. The company manually added the missing tag to the instances.<br><br>What should a solutions architect do to enforce the tagging requirement in the future?`,
    ko: `한 회사가 AWS Organizations로 다수의 AWS 계정을 관리하고 있습니다. 모든 EC2 인스턴스에는 비용 추적을 위한 BusinessUnit 태그가 있어야 합니다.<br><br>최근 감사 결과 일부 인스턴스에 태그가 누락된 것으로 나타났습니다. 회사에서는 누락된 태그를 수동으로 추가했습니다.<br><br>향후 태그 요구 사항을 적용하려면 솔루션 설계자가 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Enable tag policies in the organization. Create a tag policy for the BusinessUnit tag. Ensure that compliance with tag key capitalization is turned off. Implement the tag policy for the ec2:instance resource type. Attach the tag policy to the root of the organization.`, ko: `조직에서 태그 정책을 활성화합니다. BusinessUnit 태그에 대한 태그 정책을 생성합니다. 태그 키 대문자 준수를 끕니다. ec2:instance 리소스 유형에 태그 정책을 구현합니다. 태그 정책을 조직 루트에 연결합니다.` },
      { k: 'B', en: `Enable tag policies in the organization. Create a tag policy for the BusinessUnit tag. Ensure that compliance with tag key capitalization is turned on. Implement the tag policy for the ec2:instance resource type. Attach the tag policy to the organization's management account.`, ko: `조직에서 태그 정책을 활성화합니다. BusinessUnit 태그에 대한 태그 정책을 생성합니다. 태그 키 대문자 준수를 켭니다. ec2:instance 리소스 유형에 태그 정책을 구현합니다. 태그 정책을 관리 계정에 연결합니다.` },
      { k: 'C', en: `Create an SCP and attach the SCP to the root of the organization. Include a statement in the SCP that denies <code>ec2:RunInstances</code> if the request does not include the <strong>BusinessUnit</strong> tag.`, ko: `SCP를 생성하고 조직 루트에 연결합니다. 요청에 BusinessUnit 태그가 없으면 <code>ec2:RunInstances</code>를 거부하는 SCP 문을 포함합니다.` },
      { k: 'D', en: `Create an SCP and attach the SCP to the organization's management account. Include a statement in the SCP that denies <code>ec2:RunInstances</code> if the request does not include the <strong>BusinessUnit</strong> tag.`, ko: `SCP를 생성하고 관리 계정에 연결합니다. 요청에 BusinessUnit 태그가 없으면 <code>ec2:RunInstances</code>를 거부하는 SCP 문을 포함합니다.` },
    ],
    answer: ['C'],
    vote: '69% C',
    explain: `<p><span class="mark-ok">✅ C — SCP (조직 루트에 연결, BusinessUnit 태그 없으면 RunInstances 거부)</span></p>
<p><strong>왜 태그 정책이 아닌 SCP인가:</strong> 태그 정책은 태그의 키·값 형식을 표준화하는 도구이지만, <strong>태그 자체의 존재 여부를 강제하지 않습니다</strong>. SCP의 Condition에 <code>"Null": {"aws:RequestTag/BusinessUnit": "true"}</code>를 사용하면 태그가 없는 경우 인스턴스 시작 자체를 거부합니다.</p>
<p><strong>왜 루트에 연결하는가:</strong> 조직 루트에 SCP를 연결하면 모든 멤버 계정에 정책이 적용됩니다. SCP를 관리 계정에 연결해도 멤버 계정에는 영향을 미치지 않습니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_tagging.html" target="_blank">태그 요구 SCP 예제 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — 태그 정책은 태그 형식 표준화 도구입니다. 태그 없이 리소스를 생성하는 것을 차단하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — SCP를 관리 계정에 연결해도 멤버 계정(사업부 계정)에는 적용되지 않습니다.</p>`,
    disc: [
      { ans: 'C (69%)', txt: '"태그 요구 사항 적용(enforce)"이 핵심. 태그 정책은 형식 표준화만 가능, SCP만이 태그 없는 리소스 생성을 차단 가능. 루트 연결로 모든 멤버 계정에 적용.' },
    ]
  },

  {
    n: 365,
    en: `A company is running a workload that consists of thousands of Amazon EC2 instances. The workload is running in a VPC that contains several public subnets and private subnets. The public subnets have a route for 0.0.0.0/0 to an existing internet gateway. The private subnets have a route for 0.0.0.0/0 to an existing NAT gateway.<br><br>A solutions architect needs to migrate the entire fleet of EC2 instances to use IPv6. The EC2 instances that are in private subnets must not be accessible from the public internet.<br><br>What should the solutions architect do to meet these requirements?`,
    ko: `한 회사가 수천 개의 EC2 인스턴스로 구성된 워크로드를 VPC에서 실행하고 있습니다. 퍼블릭 서브넷에는 인터넷 게이트웨이로의 0.0.0.0/0 경로가, 프라이빗 서브넷에는 NAT 게이트웨이로의 0.0.0.0/0 경로가 있습니다.<br><br>솔루션 아키텍트는 전체 EC2 인스턴스 플릿을 IPv6로 마이그레이션해야 합니다. 프라이빗 서브넷의 EC2 인스턴스는 퍼블릭 인터넷에서 액세스할 수 없어야 합니다.<br><br>이 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Update the existing VPC, and associate a custom IPv6 CIDR block with the VPC and all subnets. Update all the VPC route tables, and add a route for ::/0 to the internet gateway.`, ko: `사용자 지정 IPv6 CIDR 블록을 VPC 및 모든 서브넷과 연결합니다. 모든 VPC 라우팅 테이블을 업데이트하고 ::/0 경로를 인터넷 게이트웨이에 추가합니다.` },
      { k: 'B', en: `Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Update the VPC route tables for all private subnets, and add a route for ::/0 to the NAT gateway.`, ko: `Amazon 제공 IPv6 CIDR 블록을 VPC 및 모든 서브넷과 연결합니다. 프라이빗 서브넷의 라우팅 테이블에 NAT 게이트웨이로의 ::/0 경로를 추가합니다.` },
      { k: 'C', en: `Update the existing VPC, and associate an Amazon-provided IPv6 CIDR block with the VPC and all subnets. Create an egress-only internet gateway. Update the VPC route tables for all private subnets, and add a route for ::/0 to the egress-only internet gateway.`, ko: `Amazon 제공 IPv6 CIDR 블록을 VPC 및 모든 서브넷과 연결합니다. 외부 전용 인터넷 게이트웨이를 생성합니다. 프라이빗 서브넷의 라우팅 테이블에 외부 전용 인터넷 게이트웨이로의 ::/0 경로를 추가합니다.` },
      { k: 'D', en: `Update the existing VPC, and associate a custom IPv6 CIDR block with the VPC and all subnets. Create a new NAT gateway, and enable IPv6 support. Update the VPC route tables for all private subnets, and add a route for ::/0 to the IPv6-enabled NAT gateway.`, ko: `사용자 지정 IPv6 CIDR 블록을 VPC 및 모든 서브넷과 연결합니다. 새 NAT 게이트웨이를 생성하고 IPv6 지원을 활성화합니다. 프라이빗 서브넷 라우팅 테이블에 IPv6 지원 NAT 게이트웨이로의 ::/0 경로를 추가합니다.` },
    ],
    answer: ['C'],
    vote: '88% C',
    explain: `<p><span class="mark-ok">✅ C — Amazon 제공 IPv6 CIDR + 외부 전용 인터넷 게이트웨이(Egress-Only IGW)</span></p>
<p><strong>Egress-Only Internet Gateway:</strong> IPv6 전용 게이트웨이로, 프라이빗 서브넷 인스턴스의 아웃바운드 통신은 허용하지만 인터넷에서의 인바운드 접근은 차단합니다. IPv4의 NAT 게이트웨이와 동일한 역할을 IPv6에서 수행합니다.</p>
<p>📎 <a href="https://repost.aws/knowledge-center/configure-private-ipv6-subnet" target="_blank">프라이빗 IPv6 서브넷 구성 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 프라이빗 서브넷에도 인터넷 게이트웨이로의 ::/0 경로를 추가하면 프라이빗 인스턴스가 인터넷에서 직접 접근 가능해집니다.</p>
<p><span class="mark-no">❌ B</span> — NAT 게이트웨이는 IPv4만 지원합니다. NAT 게이트웨이에 IPv6(::/0) 경로를 추가하는 것은 지원되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — IPv6를 지원하는 NAT 게이트웨이는 존재하지 않습니다.</p>`,
    disc: [
      { ans: 'C (88%)', txt: 'IPv6 프라이빗 서브넷의 아웃바운드 전용 인터넷 접근 = Egress-Only IGW. NAT GW는 IPv4 전용. Egress-Only IGW가 IPv4 NAT GW의 IPv6 대응 서비스.' },
    ]
  },

  {
    n: 366,
    en: `A company is using Amazon API Gateway to deploy a private REST API that will provide access to sensitive data. The API must be accessible only from an application that is deployed in a VPC. The company deploys the API successfully. However, the API is not accessible from an Amazon EC2 instance that is deployed in the VPC.<br><br>Which solution will provide connectivity between the EC2 instance and the API?`,
    ko: `한 회사가 API Gateway를 사용하여 민감한 데이터에 대한 접근을 제공하는 프라이빗 REST API를 배포하고 있습니다. API는 VPC에 배포된 애플리케이션에서만 접근 가능해야 합니다. API 배포는 성공했지만 VPC의 EC2 인스턴스에서는 접근할 수 없습니다.<br><br>EC2 인스턴스와 API 간의 연결을 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an interface VPC endpoint for API Gateway. Attach an endpoint policy that allows <code>apigateway:*</code> actions. Disable private DNS naming for the VPC endpoint. Configure an API resource policy that allows access from the VPC. Use the VPC endpoint's DNS name to access the API.`, ko: `API Gateway용 인터페이스 VPC 엔드포인트를 생성합니다. apigateway:* 작업을 허용하는 엔드포인트 정책을 연결합니다. 프라이빗 DNS 이름을 비활성화합니다. VPC 접근을 허용하는 API 리소스 정책을 구성합니다. VPC 엔드포인트의 DNS 이름으로 API에 접근합니다.` },
      { k: 'B', en: `Create an interface VPC endpoint for API Gateway. Attach an endpoint policy that allows the <code>execute-api:Invoke</code> action. Enable private DNS naming for the VPC endpoint. Configure an API resource policy that allows access from the VPC endpoint. Use the API endpoint's DNS names to access the API.`, ko: `API Gateway용 인터페이스 VPC 엔드포인트를 생성합니다. execute-api:Invoke 작업을 허용하는 엔드포인트 정책을 연결합니다. 프라이빗 DNS 이름을 활성화합니다. VPC 엔드포인트 접근을 허용하는 API 리소스 정책을 구성합니다. API 엔드포인트의 DNS 이름으로 API에 접근합니다.` },
      { k: 'C', en: `Create a Network Load Balancer (NLB) and a VPC link. Configure private integration between API Gateway and the NLB. Use the API endpoint's DNS names to access the API.`, ko: `NLB와 VPC 링크를 생성합니다. API Gateway와 NLB 간의 프라이빗 통합을 구성합니다. API 엔드포인트의 DNS 이름으로 API에 접근합니다.` },
      { k: 'D', en: `Create an Application Load Balancer (ALB) and a VPC Link. Configure private integration between API Gateway and the ALB. Use the ALB endpoint's DNS name to access the API.`, ko: `ALB와 VPC 링크를 생성합니다. API Gateway와 ALB 간의 프라이빗 통합을 구성합니다. ALB 엔드포인트의 DNS 이름으로 API에 접근합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 인터페이스 VPC 엔드포인트 + execute-api:Invoke + 프라이빗 DNS 활성화</span></p>
<p>VPC 내에서 API Gateway의 프라이빗 REST API에 접근하려면 <code>com.amazonaws.{region}.execute-api</code>에 대한 인터페이스 VPC 엔드포인트가 필요합니다. 엔드포인트 정책에서 <code>execute-api:Invoke</code>를 허용하고, 프라이빗 DNS를 활성화하면 표준 API Gateway 도메인이 VPC 내에서 VPC 엔드포인트 IP로 해석되어 EC2 인스턴스가 표준 이름으로 API를 호출할 수 있습니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html" target="_blank">API Gateway 프라이빗 API 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 프라이빗 DNS를 비활성화하면 표준 API Gateway 도메인으로의 요청이 VPC 엔드포인트가 아닌 인터넷으로 라우팅됩니다.</p>
<p><span class="mark-no">❌ C, D</span> — VPC 링크는 API Gateway가 VPC 내 백엔드 리소스에 연결하기 위한 것으로, 클라이언트(EC2)→API Gateway 인바운드 접근 문제를 해결하는 솔루션이 아닙니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '프라이빗 REST API 접근 = 인터페이스 VPC 엔드포인트 필수. 프라이빗 DNS 활성화로 표준 도메인 이름 사용 가능. execute-api:Invoke가 API 호출에 필요한 올바른 권한.' },
    ]
  },

  {
    n: 367,
    en: `A large payroll company recently merged with a small staffing company. The unified company now has multiple business units, each with its own existing AWS account.<br><br>A solutions architect must ensure that the company can centrally manage the billing and access policies for all the AWS accounts. The solutions architect configures AWS Organizations by sending an invitation to all member accounts of the company from a centralized management account.<br><br>What should the solutions architect do next to meet these requirements?`,
    ko: `대규모 급여 회사가 소규모 채용 회사와 합병되었습니다. 통합된 회사에는 자체 AWS 계정을 가진 여러 사업부가 있습니다.<br><br>솔루션 아키텍트는 모든 AWS 계정에 대한 청구 및 액세스 정책을 중앙에서 관리할 수 있도록 해야 합니다. 중앙 관리 계정에서 모든 멤버 계정에 초대를 보내 AWS Organizations를 구성했습니다.<br><br>이 요구 사항을 충족하기 위해 다음에 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create the OrganizationAccountAccess IAM group in each member account. Include the necessary IAM roles for each administrator.`, ko: `각 멤버 계정에 OrganizationAccountAccess IAM 그룹을 생성합니다. 각 관리자에게 필요한 IAM 역할을 포함합니다.` },
      { k: 'B', en: `Create the OrganizationAccountAccessPolicy IAM policy in each member account. Connect the member accounts to the management account by using cross-account access.`, ko: `각 멤버 계정에서 OrganizationAccountAccessPolicy IAM 정책을 생성합니다. 교차 계정 액세스를 사용하여 멤버 계정을 관리 계정에 연결합니다.` },
      { k: 'C', en: `Create the OrganizationAccountAccessRole IAM role in each member account. Grant permission to the management account to assume the IAM role.`, ko: `각 멤버 계정에서 OrganizationAccountAccessRole IAM 역할을 생성합니다. 관리 계정에 IAM 역할을 맡을 수 있는 권한을 부여합니다.` },
      { k: 'D', en: `Create the OrganizationAccountAccessRole IAM role in the management account. Attach the AdministratorAccess AWS managed policy to the IAM role. Assign the IAM role to the administrators in each member account.`, ko: `관리 계정에서 OrganizationAccountAccessRole IAM 역할을 생성합니다. AdministratorAccess 관리형 정책을 연결합니다. 각 멤버 계정의 관리자에게 역할을 할당합니다.` },
    ],
    answer: ['C'],
    vote: '90% C',
    explain: `<p><span class="mark-ok">✅ C — 각 멤버 계정에 OrganizationAccountAccessRole 생성 + 관리 계정에 Assume 권한 부여</span></p>
<p>초대를 통해 가입한 기존 계정은 <code>OrganizationAccountAccessRole</code>이 자동 생성되지 않으므로 수동으로 각 멤버 계정에 생성해야 합니다(Organizations에서 직접 계정을 생성하면 자동 생성됨). 이 역할은 신뢰 정책에 관리 계정 ID를 Principal로 지정하여 관리 계정이 역할을 맡을 수 있도록 합니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html#orgs_manage_accounts_create-cross-account-role" target="_blank">교차 계정 액세스 역할 생성 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — OrganizationAccountAccess IAM 그룹은 AWS 표준 구성이 아닙니다. 교차 계정 접근에는 역할(Role)을 사용합니다.</p>
<p><span class="mark-no">❌ B</span> — OrganizationAccountAccessPolicy라는 표준 IAM 정책은 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 역할을 관리 계정에 생성하면 멤버 계정을 관리하는 용도로 사용할 수 없습니다. 교차 계정 역할은 접근 대상(멤버 계정)에 생성해야 합니다.</p>`,
    disc: [
      { ans: 'C (90%)', txt: '초대 방식 기존 계정은 OrganizationAccountAccessRole이 자동 생성되지 않아 수동 생성 필요. 역할은 멤버 계정에 생성하고 신뢰 정책에 관리 계정을 지정.' },
    ]
  },

  {
    n: 368,
    en: `A company has application services that have been containerized and deployed on multiple Amazon EC2 instances with public IPs. An Apache Kafka cluster has been deployed to the EC2 instances. A PostgreSQL database has been migrated to Amazon RDS for PostgreSQL. The company expects a significant increase of orders on its platform when a new version of its flagship product is released.<br><br>What changes to the current architecture will reduce operational overhead and support the product release?`,
    ko: `한 회사에 퍼블릭 IP를 가진 여러 EC2 인스턴스에 컨테이너화·배포된 애플리케이션 서비스가 있습니다. Apache Kafka 클러스터가 EC2 인스턴스에 배포되어 있고, PostgreSQL 데이터베이스는 Amazon RDS for PostgreSQL로 마이그레이션되었습니다. 신제품 출시 시 주문이 크게 증가할 것으로 예상됩니다.<br><br>운영 오버헤드를 줄이고 제품 릴리스를 지원하는 아키텍처 변경 사항은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an EC2 Auto Scaling group behind an Application Load Balancer. Create additional read replicas for the DB instance. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.`, ko: `ALB 뒤에 EC2 Auto Scaling 그룹을 생성합니다. 추가 읽기 복제본을 생성합니다. Amazon Kinesis 데이터 스트림을 생성하고 애플리케이션 서비스를 구성합니다. S3에서 직접 정적 콘텐츠를 저장·제공합니다.` },
      { k: 'B', en: `Create an EC2 Auto Scaling group behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create Amazon Kinesis data streams and configure the application services to use the data streams. Store and serve static content directly from Amazon S3.`, ko: `ALB 뒤에 EC2 Auto Scaling 그룹을 생성합니다. DB 인스턴스를 Multi-AZ 모드로 배포하고 스토리지 Auto Scaling을 활성화합니다. Kinesis 데이터 스트림을 생성합니다. S3에서 직접 정적 콘텐츠를 저장·제공합니다.` },
      { k: 'C', en: `Deploy the application on a Kubernetes cluster created on the EC2 instances behind an Application Load Balancer. Deploy the DB instance in Multi-AZ mode and enable storage auto scaling. Create an Amazon MSK cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.`, ko: `EC2 인스턴스의 Kubernetes 클러스터에 ALB 뒤로 애플리케이션을 배포합니다. DB를 Multi-AZ 모드로 배포하고 스토리지 Auto Scaling을 활성화합니다. Amazon MSK 클러스터를 생성합니다. CloudFront 배포 뒤의 S3에 정적 콘텐츠를 저장합니다.` },
      { k: 'D', en: `Deploy the application on Amazon EKS with AWS Fargate and enable auto scaling behind an Application Load Balancer. Create additional read replicas for the DB instance. Create an Amazon MSK cluster and configure the application services to use the cluster. Store static content in Amazon S3 behind an Amazon CloudFront distribution.`, ko: `AWS Fargate를 사용하여 Amazon EKS에 애플리케이션을 배포하고 ALB 뒤에서 자동 확장을 활성화합니다. 추가 읽기 복제본을 생성합니다. Amazon MSK 클러스터를 생성합니다. CloudFront 배포 뒤의 S3에 정적 콘텐츠를 저장합니다.` },
    ],
    answer: ['D'],
    vote: '90% D',
    explain: `<p><span class="mark-ok">✅ D — EKS Fargate + MSK + CloudFront/S3 + 읽기 복제본</span></p>
<p><strong>EKS + Fargate:</strong> 기존 EC2에서 직접 Kubernetes를 관리하는 것보다 Fargate 사용 시 노드 관리 부담이 없고 자동 확장으로 트래픽 급증에 대응합니다.</p>
<p><strong>Amazon MSK:</strong> EC2에서 자체 관리하던 Apache Kafka를 AWS 완전 관리형 MSK로 전환하면 Kafka 클러스터 관리 부담이 제거됩니다.</p>
<p><strong>CloudFront + S3:</strong> 정적 콘텐츠를 CDN으로 제공하면 오리진 서버 부하를 줄이고 전 세계 사용자에게 낮은 지연 시간을 제공합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, B</span> — Kinesis 데이터 스트림은 기존 Kafka 환경에서 불필요한 마이그레이션 부담을 추가합니다. S3 직접 제공은 CloudFront 없이 콘텐츠 지연 시간을 최적화하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — EC2에서 직접 Kubernetes를 운영하면 노드 관리·패치·스케일링 등 운영 오버헤드가 높습니다.</p>`,
    disc: [
      { ans: 'D (90%)', txt: 'Fargate로 노드 관리 제거, MSK로 Kafka 관리 오버헤드 제거, CloudFront로 정적 콘텐츠 최적화. 세 가지 운영 오버헤드 감소 포인트가 명확.' },
    ]
  },

  {
    n: 369,
    en: `A company hosts a VPN in an on-premises data center. Employees currently connect to the VPN to access files in their Windows home directories. Recently, there has been a large growth in the number of employees who work remotely. As a result, bandwidth usage for connections into the data center has begun to reach 100% during business hours.<br><br>The company must design a solution on AWS that will support the growth of the company's remote workforce, reduce the bandwidth usage for connections into the data center, and reduce operational overhead.<br><br>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)`,
    ko: `한 회사가 온프레미스 데이터 센터에서 VPN을 호스팅합니다. 직원들은 VPN에 연결하여 Windows 홈 디렉터리의 파일에 접근합니다. 원격 근무 직원이 크게 늘어 업무 시간 데이터 센터 대역폭 사용량이 100%에 도달하기 시작했습니다.<br><br>원격 인력 성장 지원, 데이터 센터 대역폭 사용량 감소, 운영 오버헤드 감소를 위한 솔루션을 AWS에서 설계해야 합니다.<br><br>최소한의 운영 오버헤드로 이 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Create an AWS Storage Gateway Volume Gateway. Mount a volume from the Volume Gateway to the on-premises file server.`, ko: `AWS Storage Gateway 볼륨 게이트웨이를 생성합니다. 볼륨 게이트웨이에서 온프레미스 파일 서버로 볼륨을 마운트합니다.` },
      { k: 'B', en: `Migrate the home directories to Amazon FSx for Windows File Server.`, ko: `홈 디렉터리를 Windows 파일 서버용 Amazon FSx로 마이그레이션합니다.` },
      { k: 'C', en: `Migrate the home directories to Amazon FSx for Lustre.`, ko: `홈 디렉터리를 Amazon FSx for Lustre로 마이그레이션합니다.` },
      { k: 'D', en: `Migrate remote users to AWS Client VPN.`, ko: `원격 사용자를 AWS Client VPN으로 마이그레이션합니다.` },
      { k: 'E', en: `Create an AWS Direct Connect connection from the on-premises data center to AWS.`, ko: `온프레미스 데이터 센터에서 AWS로 AWS Direct Connect 연결을 생성합니다.` },
    ],
    answer: ['B', 'D'],
    vote: '100% BD',
    explain: `<p><span class="mark-ok">✅ B, D — FSx for Windows File Server + AWS Client VPN</span></p>
<p><strong>B — Amazon FSx for Windows File Server:</strong> Windows 홈 디렉터리를 AWS 완전 관리형 Windows 파일 시스템으로 마이그레이션합니다. 원격 직원이 파일에 접근할 때 데이터 센터를 경유하지 않아 <strong>데이터 센터 대역폭 사용량이 감소</strong>합니다.</p>
<p><strong>D — AWS Client VPN:</strong> 원격 직원을 온프레미스 VPN에서 AWS Client VPN으로 전환하면, 직원들이 AWS 리소스(FSx)에 데이터 센터를 거치지 않고 직접 연결할 수 있어 대역폭 병목이 해소됩니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html" target="_blank">Amazon FSx for Windows File Server 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 볼륨 게이트웨이는 온프레미스 스토리지를 AWS에 백업하는 용도입니다. 원격 직원의 파일 접근이 여전히 온프레미스를 경유하므로 대역폭 문제가 해결되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — FSx for Lustre는 HPC·머신러닝용 파일 시스템입니다. Windows 홈 디렉터리와 호환되지 않으며 SMB 프로토콜을 지원하지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — Direct Connect는 데이터 센터와 AWS 간의 전용 연결입니다. 원격 직원은 여전히 데이터 센터 VPN을 통해 연결하므로 근본 문제가 해결되지 않습니다.</p>`,
    disc: [
      { ans: 'BD (100%)', txt: 'Windows 홈 디렉터리 → FSx for Windows(SMB 호환), 온프레미스 VPN → AWS Client VPN. 두 변경으로 트래픽이 데이터 센터를 우회하여 대역폭 문제 해결.' },
    ]
  },

  {
    n: 370,
    en: `A company has multiple AWS accounts. The company recently had a security audit that revealed many unencrypted Amazon Elastic Block Store (Amazon EBS) volumes attached to Amazon EC2 instances.<br><br>A solutions architect must encrypt the unencrypted volumes and ensure that unencrypted volumes will be detected automatically in the future. Additionally, the company wants a solution that can centrally manage multiple AWS accounts with a focus on compliance and security.<br><br>Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)`,
    ko: `한 회사에 여러 AWS 계정이 있습니다. 보안 감사를 통해 EC2 인스턴스에 연결된 암호화되지 않은 EBS 볼륨이 많이 발견되었습니다.<br><br>솔루션 설계자는 암호화되지 않은 볼륨을 암호화하고 향후 자동으로 감지되도록 해야 합니다. 또한 규정 준수 및 보안에 중점을 두고 여러 AWS 계정을 중앙에서 관리할 수 있는 솔루션이 필요합니다.<br><br>이 요구 사항을 충족하기 위한 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Create an organization in AWS Organizations. Set up AWS Control Tower, and turn on the strongly recommended controls (guardrails). Join all accounts to the organization. Categorize the AWS accounts into OUs.`, ko: `AWS Organizations에서 조직을 생성합니다. AWS Control Tower를 설정하고 강력히 권장되는 컨트롤(가드레일)을 켭니다. 모든 계정을 조직에 가입합니다. AWS 계정을 OU로 분류합니다.` },
      { k: 'B', en: `Use the AWS CLI to list all the unencrypted volumes in all the AWS accounts. Run a script to encrypt all the unencrypted volumes in place.`, ko: `AWS CLI를 사용하여 모든 계정의 암호화되지 않은 볼륨을 나열합니다. 스크립트를 실행하여 암호화되지 않은 볼륨을 제자리에서 암호화합니다.` },
      { k: 'C', en: `Create a snapshot of each unencrypted volume. Create a new encrypted volume from the unencrypted snapshot. Detach the existing volume, and replace it with the encrypted volume.`, ko: `암호화되지 않은 각 볼륨의 스냅샷을 생성합니다. 암호화되지 않은 스냅샷에서 새로운 암호화된 볼륨을 생성합니다. 기존 볼륨을 분리하고 암호화된 볼륨으로 교체합니다.` },
      { k: 'D', en: `Create an organization in AWS Organizations. Set up AWS Control Tower, and turn on the mandatory controls (guardrails). Join all accounts to the organization. Categorize the AWS accounts into OUs.`, ko: `AWS Organizations에서 조직을 생성합니다. AWS Control Tower를 설정하고 필수 컨트롤(가드레일)을 켭니다. 모든 계정을 조직에 가입합니다. AWS 계정을 OU로 분류합니다.` },
      { k: 'E', en: `Turn on AWS CloudTrail. Configure an Amazon EventBridge rule to detect and automatically encrypt unencrypted volumes.`, ko: `AWS CloudTrail을 활성화합니다. 암호화되지 않은 볼륨을 감지하고 자동으로 암호화하도록 EventBridge 규칙을 구성합니다.` },
    ],
    answer: ['A', 'C'],
    vote: 'AC 76% / AE 24%',
    explain: `<p><span class="mark-ok">✅ A, C — Control Tower(강력히 권장 가드레일) + 스냅샷 기반 암호화</span></p>
<p><strong>A — AWS Control Tower + 강력히 권장 가드레일:</strong> "Amazon EC2 인스턴스에 연결된 EBS 볼륨의 암호화 여부 감지"는 강력히 권장(strongly recommended) 가드레일에 포함되어 있습니다. 이 가드레일이 암호화되지 않은 EBS 볼륨을 <strong>자동으로 지속적으로 감지</strong>합니다. Control Tower는 여러 계정을 중앙에서 규정 준수·보안 중점으로 관리합니다.</p>
<p><strong>C — 스냅샷 → 암호화 볼륨 교체:</strong> EBS 볼륨은 제자리에서(in-place) 암호화할 수 없습니다. AWS 공식 절차는 스냅샷 생성 → 암호화된 볼륨 생성 → 기존 볼륨 분리 후 교체입니다.</p>
<p>📎 <a href="https://docs.aws.amazon.com/controltower/latest/userguide/strongly-recommended-controls.html" target="_blank">Control Tower 강력히 권장 가드레일 공식 문서</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — EBS 볼륨은 제자리에서 암호화할 수 없습니다. 기술적으로 불가능합니다.</p>
<p><span class="mark-no">❌ D</span> — EBS 암호화 감지는 강력히 권장(strongly recommended) 가드레일에 포함됩니다. 필수(mandatory) 가드레일에는 포함되지 않습니다.</p>
<p><span class="mark-no">❌ E</span> — CloudTrail+EventBridge로 감지는 가능하지만 EBS 제자리 암호화 불가로 이 방식도 스냅샷→교체 프로세스가 필요합니다. Control Tower 가드레일이 이미 감지를 담당하므로 중복입니다.</p>`,
    disc: [
      { ans: 'AC (76%)', txt: 'EBS 암호화 감지 = Control Tower 강력히 권장 가드레일. EBS 제자리 암호화 불가 → 스냅샷→암호화 볼륨→교체가 AWS 공식 절차. 필수 가드레일(D)은 EBS 암호화 감지를 포함하지 않음.' },
      { ans: 'AE (24%)', txt: 'CloudTrail+EventBridge가 자동 감지 역할을 할 수 있다는 의견이 있으나, 가드레일이 이미 감지 역할을 하므로 중복.' },
    ]
  },
];