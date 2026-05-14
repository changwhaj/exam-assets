window.QS_SET31 = [
  {
    n: 301,
    en: `<p>A company is building an application that will run on an AWS Lambda function. Hundreds of customers will use the application. The company wants to give each customer a quota of requests for a specific time period. The quotas must match customer usage patterns. Some customers must receive a higher quota for a shorter time period.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS Lambda 함수에서 실행될 애플리케이션을 구축하고 있습니다. 수백 명의 고객이 이 애플리케이션을 사용합니다. 회사는 특정 기간 동안 각 고객에게 요청 할당량을 제공하려고 합니다. 할당량은 고객 사용 패턴과 일치해야 합니다. 일부 고객은 더 짧은 기간 동안 더 높은 할당량을 받아야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an Amazon API Gateway REST API with a proxy integration to invoke the Lambda function. For each customer, configure an API Gateway usage plan that includes an appropriate request quota. Create an API key from the usage plan for each user that the customer needs.`, ko: `프록시 통합을 통해 Amazon API Gateway REST API를 생성하여 Lambda 함수를 호출합니다. 각 고객에 대해 적절한 요청 할당량이 포함된 API Gateway 사용 계획을 구성합니다. 고객이 필요로 하는 각 사용자에 대해 사용 계획에서 API 키를 생성합니다.` },
      { k: 'B', en: `Create an Amazon API Gateway HTTP API with a proxy integration to invoke the Lambda function. For each customer, configure an API Gateway usage plan that includes an appropriate request quota. Configure route-level throttling for each usage plan. Create an API key from the usage plan for each user that the customer needs.`, ko: `프록시 통합을 통해 Amazon API Gateway HTTP API를 생성하여 Lambda 함수를 호출합니다. 각 고객에 대해 적절한 요청 할당량이 포함된 API Gateway 사용 계획을 구성합니다. 각 사용 계획에 대해 경로 수준 조절을 구성합니다. 고객이 필요로 하는 각 사용자에 대해 사용 계획에서 API 키를 생성합니다.` },
      { k: 'C', en: `Create a Lambda function alias for each customer. Include a concurrency limit with an appropriate request quota. Create a Lambda function URL for each function alias. Share the Lambda function URL for each alias with the relevant customer.`, ko: `각 고객에 대한 Lambda 함수 별칭을 생성합니다. 적절한 요청 할당량과 함께 동시성 제한을 포함합니다. 각 함수 별칭에 대한 Lambda 함수 URL을 생성합니다. 관련 고객과 각 별칭의 Lambda 함수 URL을 공유합니다.` },
      { k: 'D', en: `Create an Application Load Balancer (ALB) in a VPC. Configure the Lambda function as a target for the ALB. Configure an AWS WAF web ACL for the ALB. For each customer, configure a rate-based rule that includes an appropriate request quota.`, ko: `VPC에 ALB(Application Load Balancer)를 생성합니다. Lambda 함수를 ALB의 대상으로 구성합니다. ALB에 대한 AWS WAF 웹 ACL을 구성합니다. 각 고객에 대해 적절한 요청 할당량이 포함된 속도 기반 규칙을 구성합니다.` },
    ],
    answer: ['A'],
    vote: '80% A',
    explain: `<p><span class="mark-ok">✅ A — API Gateway REST API + 사용 계획 + API 키</span></p>
<p>API Gateway <strong>REST API</strong>는 사용 계획(Usage Plan)과 API 키 기능을 완전히 지원합니다. 사용 계획에서는 특정 기간(일/주/월) 동안의 요청 할당량(Quota)과 초당/버스트 처리율(Throttle)을 고객별로 독립적으로 설정할 수 있습니다. API 키를 사용 계획과 연결하면 고객별로 서로 다른 할당량을 적용할 수 있어 요구 사항을 완전히 충족합니다.</p>
<p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html" target="_blank">AWS 공식 문서: API Gateway Usage Plans</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — API Gateway <strong>HTTP API</strong>는 사용 계획(Usage Plan) 기능을 지원하지 않습니다. HTTP API는 비용 절감을 위해 기능을 최소화한 제품이므로, 고객별 요청 할당량 설정이 불가능합니다. REST API만 사용 계획과 API 키를 완전히 지원합니다.</p>
<p><span class="mark-no">❌ C</span> — Lambda 함수 별칭의 동시성 제한은 초당 동시 실행 수를 제한하는 것이며, 특정 기간 동안의 요청 할당량(Quota)과는 다른 개념입니다. 고객별 할당량 관리에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS WAF 속도 기반 규칙은 IP 주소 기반으로 속도를 제한하는 것으로, 고객 계정별 맞춤형 할당량 관리에는 적합하지 않습니다. 또한 구성 복잡도가 높아 운영 오버헤드가 증가합니다.</p>`,
    disc: [
      { ans: 'A (80%)', txt: 'REST API만 사용 계획/API 키를 지원 — HTTP API는 해당 기능 없음. 경로 수준 조절은 사용자별 적용 불가능하므로 B도 부적합.' },
      { ans: 'B (20%)', txt: '"더 짧은 기간 동안 더 높은 할당량"을 조절로 처리할 수 있다는 주장이지만, HTTP API에는 사용 계획 기능 자체가 없어 전제가 무너짐.' },
    ]
  },
  {
    n: 302,
    en: `<p>A company is planning to migrate its on-premises VMware cluster of 120 VMs to AWS. The VMs have many different operating systems and many custom software packages installed. The company also has an on-premises NFS server that is 10 TB in size. The company has set up a 10 Gbps AWS Direct Connect connection to AWS for the migration.</p><p>Which solution will complete the migration to AWS in the LEAST amount of time?</p>`,
    ko: `<p>한 회사가 온프레미스 VMware 클러스터의 VM 120개를 AWS로 마이그레이션할 계획입니다. VM에는 다양한 운영 체제와 여러 맞춤형 소프트웨어 패키지가 설치되어 있습니다. 회사에는 10TB 크기의 온프레미스 NFS 서버도 있습니다. 회사는 마이그레이션을 위해 10Gbps AWS Direct Connect 연결을 설정했습니다.</p><p>가장 짧은 시간 내에 AWS로의 마이그레이션을 완료할 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Export the on-premises VMs and copy them to an Amazon S3 bucket. Use VM Import/Export to create AMIs from the VM images stored in Amazon S3. Order an AWS Snowball Edge device. Copy the NFS server data to the device. Restore the NFS server data to an Amazon EC2 instance that has NFS configured.`, ko: `온프레미스 VM을 내보내고 Amazon S3 버킷에 복사합니다. VM Import/Export를 사용하여 Amazon S3에 저장된 VM 이미지에서 AMI를 생성합니다. AWS Snowball Edge 디바이스를 주문합니다. NFS 서버 데이터를 디바이스에 복사합니다. NFS가 구성된 Amazon EC2 인스턴스로 NFS 서버 데이터를 복원합니다.` },
      { k: 'B', en: `Configure AWS Application Migration Service with a connection to the VMware cluster. Create a replication job for the VMs. Create an Amazon Elastic File System (Amazon EFS) file system. Configure AWS DataSync to copy the NFS server data to the EFS file system over the Direct Connect connection.`, ko: `VMware 클러스터에 연결하도록 AWS Application Migration Service를 구성합니다. VM에 대한 복제 작업을 생성합니다. Amazon Elastic File System(Amazon EFS) 파일 시스템을 생성합니다. Direct Connect 연결을 통해 NFS 서버 데이터를 EFS 파일 시스템에 복사하도록 AWS DataSync를 구성합니다.` },
      { k: 'C', en: `Recreate the VMs on AWS as Amazon EC2 instances. Install all the required software packages. Create an Amazon FSx for Lustre file system. Configure AWS DataSync to copy the NFS server data to the FSx for Lustre file system over the Direct Connect connection.`, ko: `AWS에서 VM을 Amazon EC2 인스턴스로 다시 생성합니다. 필요한 모든 소프트웨어 패키지를 설치합니다. Amazon FSx for Lustre 파일 시스템을 생성합니다. Direct Connect 연결을 통해 NFS 서버 데이터를 FSx for Lustre 파일 시스템에 복사하도록 AWS DataSync를 구성합니다.` },
      { k: 'D', en: `Order two AWS Snowball Edge devices. Copy the VMs and the NFS server data to the devices. Run VM Import/Export after the data from the devices is loaded to an Amazon S3 bucket. Create an Amazon Elastic File System (Amazon EFS) file system. Copy the NFS server data from Amazon S3 to the EFS file system.`, ko: `AWS Snowball Edge 디바이스 2개를 주문합니다. VM 및 NFS 서버 데이터를 디바이스에 복사합니다. 디바이스의 데이터가 Amazon S3 버킷에 로드된 후 VM Import/Export를 실행합니다. Amazon EFS 파일 시스템을 생성합니다. Amazon S3의 NFS 서버 데이터를 EFS 파일 시스템에 복사합니다.` },
    ],
    answer: ['B'],
    vote: '92% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Application Migration Service + DataSync over Direct Connect</span></p>
<p>10Gbps Direct Connect 연결은 약 1.25GB/s의 처리량을 제공하여 10TB NFS 데이터를 대략 2~3시간 내에 전송할 수 있습니다. <strong>AWS Application Migration Service(MGN)</strong>는 에이전트 기반 방식으로 VM을 AWS로 실시간 복제하며, 다양한 OS와 커스텀 소프트웨어 환경에서도 동작합니다. <strong>AWS DataSync</strong>는 NFS 프로토콜을 직접 지원하여 온프레미스 NFS 서버에서 Amazon EFS로 고속 데이터 이전이 가능합니다. Snowball 물리 배송(A, D)보다 훨씬 빠릅니다.</p>
<p><a href="https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html" target="_blank">AWS 공식 문서: AWS Application Migration Service</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Snowball Edge 디바이스 배송 시간(일반적으로 수일)이 포함되어 가장 느린 옵션입니다. 단일 디바이스만 사용하며, NFS 데이터를 EC2 인스턴스에 복원하는 구성도 비효율적입니다.</p>
<p><span class="mark-no">❌ C</span> — 맞춤형 소프트웨어가 설치된 VM 120개를 수동으로 EC2에 재구성하고 소프트웨어를 재설치하는 것은 매우 많은 시간이 소요됩니다.</p>
<p><span class="mark-no">❌ D</span> — Snowball Edge 디바이스 2개를 주문하고 데이터를 복사한 뒤 배송하는 과정은 10Gbps Direct Connect를 활용하는 것보다 시간이 훨씬 오래 걸립니다.</p>`,
    disc: [
      { ans: 'B (92%)', txt: '10Gbps = 1.25GB/s로 10TB를 약 2.5시간 내 전송 가능. Snowball 배송은 수일 소요. Application Migration Service는 에이전트 방식으로 VM 복제를 자동화.' },
      { ans: 'D (8%)', txt: 'Snowball Edge 2대로 VM+NFS 동시 이동을 주장하나, 배송 왕복 시간과 데이터 복사 시간 합산 시 Direct Connect 방식보다 느림.' },
    ]
  },
  {
    n: 303,
    en: `<p>An online survey company runs its application in the AWS Cloud. The application is distributed and consists of microservices that run in an automatically scaled Amazon Elastic Container Service (Amazon ECS) cluster. The ECS cluster is a target for an Application Load Balancer (ALB). The ALB is a custom origin for an Amazon CloudFront distribution.</p><p>The company has a survey that contains sensitive data. The sensitive data must be encrypted when it moves through the application. The application's data-handling microservice is the only microservice that should be able to decrypt the data.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>온라인 설문 조사 회사가 AWS 클라우드에서 애플리케이션을 실행합니다. 이 애플리케이션은 분산 구조이며 자동으로 확장되는 Amazon ECS 클러스터에서 실행되는 마이크로서비스로 구성됩니다. ECS 클러스터는 ALB(Application Load Balancer)의 대상입니다. ALB는 Amazon CloudFront 배포의 사용자 지정 오리진입니다.</p><p>회사에는 민감한 데이터가 포함된 설문조사가 있습니다. 민감한 데이터는 애플리케이션을 통해 이동할 때 암호화되어야 합니다. 애플리케이션의 데이터 처리 마이크로서비스만 데이터를 복호화할 수 있어야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a symmetric AWS Key Management Service (AWS KMS) key that is dedicated to the data-handling microservice. Create a field-level encryption profile and a configuration. Associate the KMS key and the configuration with the CloudFront cache behavior.`, ko: `데이터 처리 마이크로서비스 전용 대칭 AWS KMS 키를 생성합니다. 필드 수준 암호화 프로필 및 구성을 생성합니다. KMS 키와 구성을 CloudFront 캐시 동작과 연결합니다.` },
      { k: 'B', en: `Create an RSA key pair that is dedicated to the data-handling microservice. Upload the public key to the CloudFront distribution. Create a field-level encryption profile and a configuration. Add the configuration to the CloudFront cache behavior.`, ko: `데이터 처리 마이크로서비스 전용 RSA 키 쌍을 생성합니다. CloudFront 배포에 공개 키를 업로드합니다. 필드 수준 암호화 프로필 및 구성을 생성합니다. CloudFront 캐시 동작에 구성을 추가합니다.` },
      { k: 'C', en: `Create a symmetric AWS Key Management Service (AWS KMS) key that is dedicated to the data-handling microservice. Create a Lambda@Edge function. Program the function to use the KMS key to encrypt the sensitive data.`, ko: `데이터 처리 마이크로서비스 전용 대칭 AWS KMS 키를 생성합니다. Lambda@Edge 함수를 생성합니다. KMS 키를 사용하여 민감한 데이터를 암호화하는 기능을 프로그래밍합니다.` },
      { k: 'D', en: `Create an RSA key pair that is dedicated to the data-handling microservice. Create a Lambda@Edge function. Program the function to use the private key of the RSA key pair to encrypt the sensitive data.`, ko: `데이터 처리 마이크로서비스 전용 RSA 키 쌍을 생성합니다. Lambda@Edge 함수를 생성합니다. RSA 키 쌍의 개인 키를 사용하여 민감한 데이터를 암호화하는 기능을 프로그래밍합니다.` },
    ],
    answer: ['B'],
    vote: '86% B',
    explain: `<p><span class="mark-ok">✅ B — RSA 키 쌍 + CloudFront 필드 수준 암호화(Field-Level Encryption)</span></p>
<p>CloudFront의 <strong>필드 수준 암호화(Field-Level Encryption)</strong>는 비대칭 암호화 알고리즘(<code>RSA/ECB/OAEPWithSHA-256AndMGF1Padding</code>)을 사용합니다. 공개 키를 CloudFront에 업로드하면 CloudFront가 엣지에서 민감 필드를 즉시 암호화하며, 개인 키를 보유한 데이터 처리 마이크로서비스만 복호화할 수 있습니다. 이 방식으로 ALB, 다른 마이크로서비스 등 중간 계층에서는 평문 데이터에 접근할 수 없습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html" target="_blank">AWS 공식 문서: CloudFront Field-Level Encryption</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudFront 필드 수준 암호화는 KMS 대칭 키를 지원하지 않습니다. RSA 기반 비대칭 키만 사용할 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — KMS 대칭 키를 Lambda@Edge에서 사용하면 암호화는 가능하나, 대칭 키 방식이므로 키 접근 제어가 복잡해집니다. 또한 CloudFront의 내장 필드 수준 암호화 기능을 활용하는 것이 더 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — 암호화 시에는 공개 키를 사용해야 합니다. 개인 키로 암호화하는 것은 비대칭 암호화의 올바른 사용 방식이 아니며, 데이터 기밀성 보호 목적에 맞지 않습니다.</p>`,
    disc: [
      { ans: 'B (86%)', txt: 'CloudFront 필드 수준 암호화는 RSA 공개 키로 에지에서 암호화 → 개인 키를 가진 마이크로서비스만 복호화 가능. KMS 대칭 키는 해당 기능에서 지원되지 않음.' },
      { ans: 'A (14%)', txt: 'KMS 연동을 선호하는 의견이 있으나, CloudFront FLE의 암호화 알고리즘 스펙이 RSA 전용임을 확인하면 A는 불가.' },
    ]
  },
  {
    n: 304,
    en: `<p>A solutions architect is determining the DNS strategy for an existing VPC. The VPC is provisioned to use the 10.24.34.0/24 CIDR block. The VPC also uses Amazon Route 53 Resolver for DNS. New requirements mandate that DNS queries must use private hosted zones. Additionally, instances that have public IP addresses must receive corresponding public hostnames.</p><p>Which solution will meet these requirements to ensure that the domain names are correctly resolved within the VPC?</p>`,
    ko: `<p>솔루션 설계자가 기존 VPC의 DNS 전략을 결정하고 있습니다. VPC는 10.24.34.0/24 CIDR 블록을 사용하도록 프로비저닝됩니다. VPC는 DNS용 Amazon Route 53 Resolver도 사용합니다. 새로운 요구 사항에 따라 DNS 쿼리는 프라이빗 호스팅 영역을 사용해야 합니다. 또한 퍼블릭 IP 주소가 있는 인스턴스는 해당하는 퍼블릭 호스트 이름을 받아야 합니다.</p><p>VPC 내에서 도메인 이름이 올바르게 확인되도록 하기 위해 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a private hosted zone. Activate the enableDnsSupport attribute and the enableDnsHostnames attribute for the VPC. Update the VPC DHCP options set to include domain-name-servers=10.24.34.2.`, ko: `프라이빗 호스팅 영역을 생성합니다. VPC에 대한 enableDnsSupport 속성과 enableDnsHostnames 속성을 활성화합니다. domain-name-servers=10.24.34.2를 포함하도록 VPC DHCP 옵션 세트를 업데이트합니다.` },
      { k: 'B', en: `Create a private hosted zone. Associate the private hosted zone with the VPC. Activate the enableDnsSupport attribute and the enableDnsHostnames attribute for the VPC. Create a new VPC DHCP options set, and configure domain-name-servers=AmazonProvidedDNS. Associate the new DHCP options set with the VPC.`, ko: `프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 VPC와 연결합니다. VPC에 대한 enableDnsSupport 속성과 enableDnsHostnames 속성을 활성화합니다. 새 VPC DHCP 옵션 세트를 생성하고 domain-name-servers=AmazonProvidedDNS를 구성합니다. 새 DHCP 옵션 세트를 VPC와 연결합니다.` },
      { k: 'C', en: `Deactivate the enableDnsSupport attribute for the VPC. Activate the enableDnsHostnames attribute for the VPC. Create a new VPC DHCP options set, and configure domain-name-servers=10.24.34.2. Associate the new DHCP options set with the VPC.`, ko: `VPC의 enableDnsSupport 속성을 비활성화합니다. VPC의 enableDnsHostnames 속성을 활성화합니다. 새 VPC DHCP 옵션 세트를 생성하고 domain-name-servers=10.24.34.2를 구성합니다. 새 DHCP 옵션 세트를 VPC와 연결합니다.` },
      { k: 'D', en: `Create a private hosted zone. Associate the private hosted zone with the VPC. Activate the enableDnsSupport attribute for the VPC. Deactivate the enableDnsHostnames attribute for the VPC. Update the VPC DHCP options set to include domain-name-servers=AmazonProvidedDNS.`, ko: `프라이빗 호스팅 영역을 생성합니다. 프라이빗 호스팅 영역을 VPC와 연결합니다. VPC에 대한 enableDnsSupport 속성을 활성화합니다. VPC에 대한 enableDnsHostnames 속성을 비활성화합니다. domain-name-servers=AmazonProvidedDNS를 포함하도록 VPC DHCP 옵션 세트를 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 프라이빗 호스팅 영역 연결 + enableDnsSupport/enableDnsHostnames 모두 활성화 + AmazonProvidedDNS</span></p>
<p>Route 53 프라이빗 호스팅 영역을 사용하려면 다음 세 가지가 모두 필요합니다.</p>
<p>① <strong>프라이빗 호스팅 영역을 VPC에 연결</strong>해야 해당 VPC에서 프라이빗 DNS 레코드를 조회할 수 있습니다.<br>② <strong>enableDnsSupport</strong>를 활성화해야 VPC 내에서 Amazon DNS 서버(AmazonProvidedDNS, 즉 x.x.x.2 주소)를 사용할 수 있습니다.<br>③ <strong>enableDnsHostnames</strong>를 활성화해야 퍼블릭 IP가 있는 인스턴스에 퍼블릭 DNS 호스트 이름이 자동 할당됩니다.<br>④ DHCP 옵션 세트에서 <code>domain-name-servers=AmazonProvidedDNS</code>를 지정해야 인스턴스가 AWS 제공 DNS를 사용합니다.</p>
<p><a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-dns.html" target="_blank">AWS 공식 문서: VPC DNS 속성</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — DHCP 옵션에서 <code>10.24.34.2</code>는 해당 VPC CIDR 범위 내 Amazon DNS 서버의 IP이지만, 프라이빗 호스팅 영역을 VPC에 연결하지 않았으므로 프라이빗 DNS 조회가 불가능합니다.</p>
<p><span class="mark-no">❌ C</span> — enableDnsSupport를 비활성화하면 Amazon DNS 서버 자체가 비활성화되어 Route 53 Resolver와 프라이빗 호스팅 영역 모두 작동하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — enableDnsHostnames를 비활성화하면 퍼블릭 IP가 있는 인스턴스에 퍼블릭 DNS 호스트 이름이 할당되지 않아 두 번째 요구 사항을 충족하지 못합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '두 DNS 옵션(DnsSupport, DnsHostnames)을 모두 활성화하고, 프라이빗 호스팅 영역을 VPC와 연결해야 함. AmazonProvidedDNS 사용이 핵심.' },
    ]
  },
  {
    n: 305,
    en: `<p>A data analytics company has an Amazon Redshift cluster that consists of several reserved nodes. The cluster is experiencing unexpected bursts of usage because a team of employees is compiling a deep audit analysis report. The queries to generate the report are complex read queries and are CPU intensive.</p><p>Business requirements dictate that the cluster must be able to service read and write queries at all times. A solutions architect must devise a solution that accommodates the bursts of usage.</p><p>Which solution meets these requirements MOST cost-effectively?</p>`,
    ko: `<p>데이터 분석 회사에 여러 예약 노드로 구성된 Amazon Redshift 클러스터가 있습니다. 직원 팀이 심층 감사 분석 보고서를 작성하고 있어 클러스터에서 예상치 못한 사용량 급증이 발생하고 있습니다. 보고서 생성 쿼리는 복잡한 읽기 쿼리이며 CPU를 많이 사용합니다.</p><p>비즈니스 요구 사항에 따라 클러스터는 항상 읽기 및 쓰기 쿼리를 처리할 수 있어야 합니다. 솔루션 설계자는 사용량 급증을 수용할 수 있는 솔루션을 고안해야 합니다.</p><p>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Provision an Amazon EMR cluster. Offload the complex data processing tasks.`, ko: `Amazon EMR 클러스터를 프로비저닝합니다. 복잡한 데이터 처리 작업을 오프로드합니다.` },
      { k: 'B', en: `Deploy an AWS Lambda function to add capacity to the Amazon Redshift cluster by using a classic resize operation when the cluster's CPU metrics in Amazon CloudWatch reach 80%.`, ko: `Amazon CloudWatch의 클러스터 CPU 지표가 80%에 도달하면 클래식 크기 조정 작업을 사용하여 Amazon Redshift 클러스터에 용량을 추가하는 AWS Lambda 함수를 배포합니다.` },
      { k: 'C', en: `Deploy an AWS Lambda function to add capacity to the Amazon Redshift cluster by using an elastic resize operation when the cluster's CPU metrics in Amazon CloudWatch reach 80%.`, ko: `Amazon CloudWatch의 클러스터 CPU 지표가 80%에 도달하면 탄력적 크기 조정 작업을 사용하여 Amazon Redshift 클러스터에 용량을 추가하는 AWS Lambda 함수를 배포합니다.` },
      { k: 'D', en: `Turn on the Concurrency Scaling feature for the Amazon Redshift cluster.`, ko: `Amazon Redshift 클러스터에 대한 동시성 확장 기능을 활성화합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — Redshift 동시성 확장(Concurrency Scaling) 활성화</span></p>
<p><strong>Concurrency Scaling</strong>을 활성화하면 Amazon Redshift가 읽기 및 쓰기 쿼리 증가를 처리하기 위해 추가 클러스터 용량을 자동으로 확장합니다. 사용량 급증 시 수 초 내에 용량이 추가되고, 급증이 끝나면 자동으로 축소됩니다. 매일 처음 1시간 분량의 동시성 확장 사용은 무료이며, 그 이후에는 초 단위로 요금이 청구되어 비용 효율적입니다. 별도 인프라 관리나 Lambda 자동화가 필요 없어 운영 오버헤드도 최소화됩니다.</p>
<p><a href="https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html" target="_blank">AWS 공식 문서: Redshift Concurrency Scaling</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EMR 클러스터를 별도로 프로비저닝하면 추가 비용이 발생하고, 기존 Redshift 환경에서 데이터 이동이 필요하여 복잡성이 증가합니다.</p>
<p><span class="mark-no">❌ B</span> — 클래식 크기 조정(Classic Resize)은 클러스터를 읽기 전용 상태로 만들어 작업 완료까지 수 시간이 소요됩니다. "항상 읽기/쓰기 가능" 요구 사항을 위반합니다.</p>
<p><span class="mark-no">❌ C</span> — 탄력적 크기 조정(Elastic Resize)은 클래식 방식보다 빠르지만(수 분), 사용량 급증마다 Lambda를 통해 수동으로 트리거해야 하므로 Concurrency Scaling보다 운영 오버헤드가 높고 비용도 큽니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'Concurrency Scaling은 읽기/쓰기 쿼리 급증에 자동 대응하며 매일 1시간 무료. 클러스터 중단 없이 즉각 확장/축소 — 가장 비용 효율적인 선택.' },
    ]
  },
  {
    n: 306,
    en: `<p>A research center is migrating to the AWS Cloud and has moved its on-premises 1 PB object storage to an Amazon S3 bucket. One hundred scientists are using this object storage to store their work-related documents. Each scientist has a personal folder on the object store. All the scientists are members of a single IAM user group.</p><p>The research center's compliance officer is worried that scientists will be able to access each other's work. The research center has a strict obligation to report on which scientist accesses which documents. The team that is responsible for these reports has little AWS experience and wants a ready-to-use solution that minimizes operational overhead.</p><p>Which combination of actions should a solutions architect take to meet these requirements? (Choose two.)</p>`,
    ko: `<p>한 연구 센터가 AWS 클라우드로 마이그레이션하여 온프레미스 1PB 객체 스토리지를 Amazon S3 버킷으로 이동했습니다. 100명의 과학자들이 이 객체 스토리지를 사용하여 업무 관련 문서를 저장합니다. 각 과학자는 객체 스토리지에 개인 폴더를 가지고 있습니다. 모든 과학자는 단일 IAM 사용자 그룹의 구성원입니다.</p><p>연구 센터의 규정 준수 담당자는 과학자들이 서로의 작업에 접근할 수 있을지 걱정하고 있습니다. 연구 센터는 어떤 과학자가 어떤 문서에 접근하는지 보고할 엄격한 의무가 있습니다. 이러한 보고서를 담당하는 팀은 AWS 경험이 거의 없으며 운영 오버헤드를 최소화하는 즉시 사용 가능한 솔루션을 원합니다.</p><p>이러한 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 조치 조합을 취해야 합니까? (2개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 2,
    choices: [
      { k: 'A', en: `Create an identity policy that grants the user read and write access. Add a condition that specifies that the S3 paths must be prefixed with ${`\${aws:username}`}. Apply the policy on the scientists' IAM user group.`, ko: `사용자에게 읽기 및 쓰기 액세스 권한을 부여하는 자격 증명 정책을 만듭니다. S3 경로 앞에 \${aws:username}이 붙어야 함을 지정하는 조건을 추가합니다. 과학자의 IAM 사용자 그룹에 정책을 적용합니다.` },
      { k: 'B', en: `Configure a trail with AWS CloudTrail to capture all object-level events in the S3 bucket. Store the trail output in another S3 bucket. Use Amazon Athena to query the logs and generate reports.`, ko: `S3 버킷의 모든 객체 수준 이벤트를 캡처하도록 AWS CloudTrail 추적을 구성합니다. 추적 출력을 다른 S3 버킷에 저장합니다. Amazon Athena를 사용하여 로그를 쿼리하고 보고서를 생성합니다.` },
      { k: 'C', en: `Enable S3 server access logging. Configure another S3 bucket as the target for log delivery. Use Amazon Athena to query the logs and generate reports.`, ko: `S3 서버 액세스 로깅을 활성화합니다. 로그 전송 대상으로 다른 S3 버킷을 구성합니다. Amazon Athena를 사용하여 로그를 쿼리하고 보고서를 생성합니다.` },
      { k: 'D', en: `Create an S3 bucket policy that grants read and write access to users in the scientists' IAM user group.`, ko: `과학자의 IAM 사용자 그룹에 속한 사용자에게 읽기 및 쓰기 액세스 권한을 부여하는 S3 버킷 정책을 생성합니다.` },
      { k: 'E', en: `Configure a trail with AWS CloudTrail to capture all object-level events in the S3 bucket and write the events to Amazon CloudWatch. Use the Amazon Athena CloudWatch connector to query the logs and generate reports.`, ko: `S3 버킷의 모든 객체 수준 이벤트를 캡처하고 Amazon CloudWatch에 이벤트를 기록하도록 AWS CloudTrail 추적을 구성합니다. Amazon Athena CloudWatch 커넥터를 사용하여 로그를 쿼리하고 보고서를 생성합니다.` },
    ],
    answer: ['A', 'B'],
    vote: '71% AB',
    explain: `<p><span class="mark-ok">✅ A — IAM 정책에 aws:username 조건 추가</span></p>
<p><code>\${aws:username}</code> 정책 변수를 S3 경로 접두사 조건으로 활용하면, 각 과학자는 자신의 사용자 이름과 일치하는 폴더에만 접근할 수 있습니다. 단일 정책을 그룹에 한 번만 적용하면 되어 관리가 간편합니다.</p>
<p><span class="mark-ok">✅ B — AWS CloudTrail + Amazon Athena</span></p>
<p>CloudTrail은 S3 객체 수준 이벤트(GetObject, PutObject 등)를 정확하게 기록하며, 규정 준수 감사에 <strong>선호되는 방식</strong>입니다. S3 서버 액세스 로그와 달리 CloudTrail은 모든 요청의 완전한 기록을 보장합니다. Athena를 사용하면 SQL로 로그를 쿼리하여 보고서를 쉽게 생성할 수 있어 AWS 경험이 적은 팀에도 적합합니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/logging-with-S3.html" target="_blank">AWS 공식 문서: S3 로깅 비교</a></p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — S3 서버 액세스 로그는 "최선 노력(best-effort)" 방식으로 전달됩니다. 일부 요청이 누락될 수 있고 전달 시간도 보장되지 않아 규정 준수 감사 목적에는 CloudTrail이 더 신뢰할 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — 버킷 정책으로 그룹 전체에 읽기/쓰기를 허용하면 과학자 간 접근 격리가 되지 않아 규정 준수 담당자의 우려를 해결하지 못합니다.</p>
<p><span class="mark-no">❌ E</span> — CloudTrail 로그를 CloudWatch에 기록한 뒤 Athena CloudWatch 커넥터로 쿼리하는 방식은 불필요하게 복잡합니다. S3에 직접 저장하고 Athena로 쿼리하는 방식(B)이 더 간단하고 비용 효율적입니다.</p>`,
    disc: [
      { ans: 'AB (71%)', txt: '규정 준수 감사에는 CloudTrail이 S3 서버 액세스 로그보다 신뢰성이 높음. aws:username 조건으로 개인 폴더 접근 격리 가능.' },
      { ans: 'AC (18%)', txt: 'C(서버 액세스 로깅)를 지지하는 의견도 있으나, 로그 전달이 보장되지 않아 규정 준수 목적에는 부적합하다는 반론이 우세.' },
    ]
  },
  {
    n: 307,
    en: `<p>A company uses AWS Organizations to manage a multi-account structure. The company has hundreds of AWS accounts and expects the number of accounts to increase. The company is building a new application that uses Docker images. The company will push the Docker images to Amazon Elastic Container Registry (Amazon ECR). Only accounts that are within the company's organization should have access to the images.</p><p>The company has a CI/CD process that runs frequently. The company wants to retain all the tagged images. However, the company wants to retain only the five most recent untagged images.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>한 회사가 AWS Organizations를 사용하여 다중 계정 구조를 관리합니다. 회사는 수백 개의 AWS 계정을 보유하고 있으며 계정 수가 더 늘어날 것으로 예상합니다. 회사는 Docker 이미지를 사용하는 새로운 애플리케이션을 구축하고 있습니다. 회사는 Docker 이미지를 Amazon ECR로 푸시합니다. 회사 조직 내의 계정만 이미지에 액세스할 수 있어야 합니다.</p><p>회사에는 자주 실행되는 CI/CD 프로세스가 있습니다. 회사는 태그가 지정된 모든 이미지를 유지하려고 합니다. 그러나 태그가 지정되지 않은 가장 최근 5개 이미지만 유지하려고 합니다.</p><p>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a private repository in Amazon ECR. Create a permissions policy for the repository that allows only required ECR operations. Include a condition to allow the ECR operations if the value of the aws:PrincipalOrgID condition key is equal to the ID of the company's organization. Add a lifecycle rule to the ECR repository that deletes all untagged images over the count of five.`, ko: `Amazon ECR에 프라이빗 리포지토리를 생성합니다. 필수 ECR 작업만 허용하는 리포지토리 권한 정책을 생성합니다. aws:PrincipalOrgID 조건 키의 값이 회사 조직의 ID와 동일한 경우 ECR 작업을 허용하는 조건을 포함합니다. 태그가 지정되지 않은 이미지가 5개를 초과하면 삭제하는 수명 주기 규칙을 ECR 리포지토리에 추가합니다.` },
      { k: 'B', en: `Create a public repository in Amazon ECR. Create an IAM role in the ECR account. Set permissions so that any account can assume the role if the value of the aws:PrincipalOrgID condition key is equal to the ID of the company's organization. Add a lifecycle rule to the ECR repository that deletes all untagged images over the count of five.`, ko: `Amazon ECR에 퍼블릭 리포지토리를 생성합니다. ECR 계정에 IAM 역할을 생성합니다. aws:PrincipalOrgID 조건 키의 값이 회사 조직의 ID와 동일한 경우 모든 계정이 역할을 맡을 수 있도록 권한을 설정합니다. 태그가 지정되지 않은 이미지가 5개를 초과하면 삭제하는 수명 주기 규칙을 ECR 리포지토리에 추가합니다.` },
      { k: 'C', en: `Create a private repository in Amazon ECR. Create a permissions policy for the repository that includes only required ECR operations. Include a condition to allow the ECR operations for all account IDs in the organization. Schedule a daily Amazon EventBridge rule to invoke an AWS Lambda function that deletes all untagged images over the count of five.`, ko: `Amazon ECR에 프라이빗 리포지토리를 생성합니다. 필수 ECR 작업만 포함하는 리포지토리 권한 정책을 생성합니다. 조직의 모든 계정 ID에 대해 ECR 작업을 허용하는 조건을 포함합니다. 태그가 지정되지 않은 이미지가 5개를 초과하면 삭제하는 AWS Lambda 함수를 호출하도록 일일 Amazon EventBridge 규칙을 예약합니다.` },
      { k: 'D', en: `Create a public repository in Amazon ECR. Configure Amazon ECR to use an interface VPC endpoint with an endpoint policy that includes the required permissions for images that the company needs to pull. Include a condition to allow the ECR operations for all account IDs in the company's organization. Schedule a daily Amazon EventBridge rule to invoke an AWS Lambda function that deletes all untagged images over the count of five.`, ko: `Amazon ECR에 퍼블릭 리포지토리를 생성합니다. 회사가 풀해야 하는 이미지에 대한 필수 권한이 포함된 엔드포인트 정책과 함께 인터페이스 VPC 엔드포인트를 사용하도록 Amazon ECR을 구성합니다. 회사 조직의 모든 계정 ID에 대해 ECR 작업을 허용하는 조건을 포함합니다. 태그가 지정되지 않은 이미지가 5개를 초과하면 삭제하는 Lambda 함수를 호출하도록 일일 EventBridge 규칙을 예약합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — ECR 프라이빗 리포지토리 + aws:PrincipalOrgID 조건 + ECR 수명 주기 규칙</span></p>
<p><strong>aws:PrincipalOrgID</strong> 조건 키를 ECR 리포지토리 권한 정책에 사용하면, 개별 계정 ID를 열거하지 않고도 전체 조직의 계정에만 접근을 허용할 수 있습니다. 계정이 추가되어도 정책 변경이 필요 없어 확장성이 뛰어납니다. ECR <strong>수명 주기 규칙</strong>을 사용하면 태그 없는 이미지 5개 초과 시 자동으로 정리되며, Lambda/EventBridge 없이 관리형 방식으로 동작하여 운영 오버헤드가 최소화됩니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html" target="_blank">AWS 공식 문서: ECR 수명 주기 정책</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — "퍼블릭 리포지토리"는 조직 외부에도 공개되므로 "조직 내 계정만 접근" 요구 사항에 위배됩니다.</p>
<p><span class="mark-no">❌ C</span> — 모든 계정 ID를 개별 열거하는 방식은 계정이 수백 개로 늘어날 경우 정책 관리 오버헤드가 매우 높아집니다. 또한 수명 주기 규칙 대신 EventBridge+Lambda를 사용하면 불필요한 복잡성이 추가됩니다.</p>
<p><span class="mark-no">❌ D</span> — 퍼블릭 리포지토리 + EventBridge+Lambda 방식은 조직 접근 제어 및 이미지 정리 모두에서 불필요한 오버헤드를 유발합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'aws:PrincipalOrgID로 계정 수 증가에도 정책 변경 없이 조직 전체 접근 제어 가능. ECR 수명 주기 규칙이 Lambda/EventBridge 없이 이미지 정리 자동화.' },
    ]
  },
  {
    n: 308,
    en: `<p>A solutions architect is reviewing a company's process for taking snapshots of Amazon RDS DB instances. The company takes automatic snapshots every day and retains the snapshots for 7 days.</p><p>The solutions architect needs to recommend a solution that takes snapshots every 6 hours and retains the snapshots for 30 days. The company uses AWS Organizations to manage all of its AWS accounts. The company needs a consolidated view of the health of the RDS snapshots.</p><p>Which solution will meet these requirements with the LEAST operational overhead?</p>`,
    ko: `<p>솔루션 설계자가 Amazon RDS DB 인스턴스의 스냅샷 생성 프로세스를 검토하고 있습니다. 회사는 매일 자동 스냅샷을 촬영하고 해당 스냅샷을 7일 동안 보관합니다.</p><p>솔루션 설계자는 6시간마다 스냅샷을 생성하고 30일 동안 보관하는 솔루션을 권장해야 합니다. 회사는 AWS Organizations를 사용하여 모든 AWS 계정을 관리합니다. 회사에는 RDS 스냅샷 상태에 대한 통합 보기가 필요합니다.</p><p>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Turn on the cross-account management feature in AWS Backup. Create a backup plan that specifies the frequency and retention requirements. Add a tag to the DB instances. Apply the backup plan by using tags. Use AWS Backup to monitor the status of the backups.`, ko: `AWS Backup에서 교차 계정 관리 기능을 활성화합니다. 빈도 및 보존 요구 사항을 지정하는 백업 계획을 만듭니다. DB 인스턴스에 태그를 추가합니다. 태그를 사용하여 백업 계획을 적용합니다. AWS Backup을 사용하여 백업 상태를 모니터링합니다.` },
      { k: 'B', en: `Turn on the cross-account management feature in Amazon RDS. Create a snapshot global policy that specifies the frequency and retention requirements. Use the RDS console in the management account to monitor the status of the backups.`, ko: `Amazon RDS에서 교차 계정 관리 기능을 활성화합니다. 빈도 및 보존 요구 사항을 지정하는 스냅샷 글로벌 정책을 만듭니다. 관리 계정의 RDS 콘솔을 사용하여 백업 상태를 모니터링합니다.` },
      { k: 'C', en: `Turn on the cross-account management feature in AWS CloudFormation. From the management account, deploy a CloudFormation stack set that contains a backup plan from AWS Backup that specifies the frequency and retention requirements. Create an AWS Lambda function in the management account to monitor the status of the backups. Create an Amazon EventBridge rule in each account to run the Lambda function on a schedule.`, ko: `AWS CloudFormation에서 교차 계정 관리 기능을 활성화합니다. 관리 계정에서 빈도 및 보존 요구 사항을 지정하는 AWS Backup의 백업 계획이 포함된 CloudFormation 스택 세트를 배포합니다. 관리 계정에서 백업 상태를 모니터링하는 AWS Lambda 함수를 생성합니다. 각 계정에 일정에 따라 Lambda 함수를 실행하는 Amazon EventBridge 규칙을 생성합니다.` },
      { k: 'D', en: `Configure AWS Backup in each account. Create an Amazon Data Lifecycle Manager lifecycle policy that specifies the frequency and retention requirements. Specify the DB instances as the target resource. Use the Amazon Data Lifecycle Manager console in each member account to monitor the status of the backups.`, ko: `각 계정에서 AWS Backup을 구성합니다. 빈도 및 보존 요구 사항을 지정하는 Amazon Data Lifecycle Manager 수명 주기 정책을 생성합니다. DB 인스턴스를 대상 리소스로 지정합니다. 각 멤버 계정의 Amazon Data Lifecycle Manager 콘솔을 사용하여 백업 상태를 모니터링합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — AWS Backup 교차 계정 관리 + 백업 계획 + 태그 기반 적용</span></p>
<p><strong>AWS Backup</strong>은 AWS Organizations와 네이티브로 통합되어 <strong>교차 계정 관리(Cross-Account Management)</strong> 기능을 제공합니다. 관리 계정에서 백업 계획을 생성하고 태그를 통해 여러 계정의 RDS 인스턴스에 일괄 적용할 수 있습니다. 6시간 빈도와 30일 보존도 백업 계획에서 직접 설정 가능합니다. AWS Backup 대시보드에서 모든 계정의 백업 상태를 통합 모니터링할 수 있어 운영 오버헤드가 최소화됩니다.</p>
<p><a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/create-cross-account-backup.html" target="_blank">AWS 공식 문서: AWS Backup 교차 계정 백업</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Amazon RDS 자체에는 조직 수준의 교차 계정 관리 기능이 없습니다. 이는 AWS Backup 전용 기능입니다.</p>
<p><span class="mark-no">❌ C</span> — CloudFormation 스택 세트 + Lambda + EventBridge 조합은 기능적으로 가능하지만, AWS Backup의 내장 기능으로 처리할 수 있는 것을 복잡하게 구성하는 방식입니다. 운영 오버헤드가 크게 증가합니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon Data Lifecycle Manager는 EC2 EBS 스냅샷 관리에 특화되어 있으며, RDS 스냅샷을 조직 수준에서 통합 관리하는 기능이 없습니다. 각 계정에서 별도 모니터링도 필요합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: '교차 계정 관리는 AWS Backup 전용 기능. 태그 기반 적용으로 계정 증가에도 자동 확장. 통합 대시보드로 모든 계정 백업 상태 한눈에 확인 가능.' },
    ]
  },
  {
    n: 309,
    en: `<p>A company is using AWS Organizations with a multi-account architecture. The company's current security configuration for the account architecture includes SCPs, resource-based policies, identity-based policies, trust policies, and session policies.</p><p>A solutions architect needs to allow an IAM user in Account A to assume a role in Account B.</p><p>Which combination of steps must the solutions architect take to meet this requirement? (Choose three.)</p>`,
    ko: `<p>한 회사가 다중 계정 아키텍처로 AWS Organizations를 사용하고 있습니다. 계정 아키텍처에 대한 현재 보안 구성에는 SCP, 리소스 기반 정책, 자격 증명 기반 정책, 신뢰 정책, 세션 정책이 포함됩니다.</p><p>솔루션 설계자는 계정 A의 IAM 사용자가 계정 B의 역할을 맡도록 허용해야 합니다.</p><p>이 요구 사항을 충족하기 위해 솔루션 설계자는 어떤 단계 조합을 수행해야 합니까? (3개를 선택하세요.)</p>`,
    type: 'multi', multiCount: 3,
    choices: [
      { k: 'A', en: `Configure the SCP for Account A to allow the action.`, ko: `작업을 허용하도록 계정 A에 대한 SCP를 구성합니다.` },
      { k: 'B', en: `Configure the resource-based policies to allow the action.`, ko: `작업을 허용하도록 리소스 기반 정책을 구성합니다.` },
      { k: 'C', en: `Configure the identity-based policy on the user in Account A to allow the action.`, ko: `작업을 허용하도록 계정 A의 사용자에 대한 자격 증명 기반 정책을 구성합니다.` },
      { k: 'D', en: `Configure the identity-based policy on the user in Account B to allow the action.`, ko: `작업을 허용하도록 계정 B의 사용자에 대한 자격 증명 기반 정책을 구성합니다.` },
      { k: 'E', en: `Configure the trust policy on the target role in Account B to allow the action.`, ko: `작업을 허용하도록 계정 B의 대상 역할에 대한 신뢰 정책을 구성합니다.` },
      { k: 'F', en: `Configure the session policy to allow the action and to be passed programmatically by the GetSessionToken API operation.`, ko: `작업을 허용하고 GetSessionToken API 작업을 통해 프로그래밍 방식으로 전달되도록 세션 정책을 구성합니다.` },
    ],
    answer: ['A', 'C', 'E'],
    vote: '50% ACE',
    explain: `<p><span class="mark-ok">✅ A — 계정 A의 SCP 허용</span></p>
<p>이 문제에서 회사는 이미 SCP를 사용 중입니다. SCP는 계정 내 IAM 권한의 최대 허용 범위를 정의하므로, SCP에서 <code>sts:AssumeRole</code>이 허용되어 있어야 합니다.</p>
<p><span class="mark-ok">✅ C — 계정 A 사용자의 자격 증명 기반 정책</span></p>
<p>계정 A의 IAM 사용자가 <code>sts:AssumeRole</code>을 실행할 수 있도록 자격 증명 기반 정책에 명시적 허용이 필요합니다.</p>
<p><span class="mark-ok">✅ E — 계정 B 대상 역할의 신뢰 정책</span></p>
<p>계정 B의 IAM 역할 신뢰 정책에 계정 A의 IAM 사용자 또는 계정 A가 역할을 맡도록 신뢰하는 주체(Principal)로 포함되어야 합니다.</p>
<p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html" target="_blank">AWS 공식 문서: 교차 계정 역할 수임 튜토리얼</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 리소스 기반 정책은 S3 버킷, KMS 키 등 리소스에 연결되는 정책이며, IAM 역할 수임 자체를 활성화하는 데 필요하지 않습니다. 동일 계정 내 교차 서비스 접근에서 사용됩니다.</p>
<p><span class="mark-no">❌ D</span> — 계정 B에는 사용자가 없습니다. 역할을 맡는 주체는 계정 A의 사용자이므로, 계정 B 사용자에 대한 정책은 의미가 없습니다.</p>
<p><span class="mark-no">❌ F</span> — 세션 정책은 <code>AssumeRole</code>, <code>AssumeRoleWithSAML</code>, <code>AssumeRoleWithWebIdentity</code>, <code>GetFederationToken</code> API와 함께 전달됩니다. <code>GetSessionToken</code>은 MFA 인증을 위한 임시 자격 증명 발급에 사용되며 세션 정책을 지원하지 않습니다.</p>`,
    disc: [
      { ans: 'ACE (50%)', txt: 'SCP가 이미 사용 중이므로 역할 수임 허용을 SCP에서도 설정해야 함. GetSessionToken은 세션 정책 전달 불가 → F 제외.' },
      { ans: 'BCE (29%)', txt: 'SCP는 거부에만 사용된다는 관점에서 A를 제외하고, 리소스 기반 정책(B)을 포함하는 의견. 그러나 리소스 기반 정책은 역할 수임과 직접 관련 없음.' },
      { ans: 'CEF (21%)', txt: 'SCP는 허용보다 거부에 쓰인다는 관점 + GetSessionToken 세션 정책 주장. 하지만 문제에서 SCP를 사용 중임을 명시하고, GetSessionToken은 세션 정책 미지원.' },
    ]
  },
  {
    n: 310,
    en: `<p>A company wants to use Amazon S3 to back up its on-premises file storage solution. The company's on-premises file storage solution supports NFS, and the company wants its new solution to support NFS. The company wants to archive the backup files after 5 days. If the company needs archived files for disaster recovery, the company is willing to wait a few days for the retrieval of those files.</p><p>Which solution meets these requirements MOST cost-effectively?</p>`,
    ko: `<p>한 회사가 Amazon S3를 사용하여 온프레미스 파일 스토리지 솔루션을 백업하려고 합니다. 회사의 온프레미스 파일 스토리지 솔루션은 NFS를 지원하며, 회사는 새로운 솔루션도 NFS를 지원하길 원합니다. 회사는 5일 후에 백업 파일을 보관하려고 합니다. 재해 복구를 위해 보관된 파일이 필요한 경우, 회사는 파일을 검색하는 데 며칠 정도 기다릴 의향이 있습니다.</p><p>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy an AWS Storage Gateway file gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the file gateway. Create an S3 Lifecycle rule to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.`, ko: `S3 버킷과 연결된 AWS Storage Gateway 파일 게이트웨이를 배포합니다. 온프레미스 파일 스토리지 솔루션에서 파일 게이트웨이로 파일을 이동합니다. 5일 후에 파일을 S3 Standard-Infrequent Access(S3 Standard-IA)로 이동하는 S3 수명 주기 규칙을 생성합니다.` },
      { k: 'B', en: `Deploy an AWS Storage Gateway volume gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the volume gateway. Create an S3 Lifecycle rule to move the files to S3 Glacier Deep Archive after 5 days.`, ko: `S3 버킷과 연결된 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다. 온프레미스 파일 스토리지 솔루션에서 볼륨 게이트웨이로 파일을 이동합니다. 5일 후에 파일을 S3 Glacier Deep Archive로 이동하는 S3 수명 주기 규칙을 생성합니다.` },
      { k: 'C', en: `Deploy an AWS Storage Gateway tape gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the tape gateway. Create an S3 Lifecycle rule to move the files to S3 Standard-Infrequent Access (S3 Standard-IA) after 5 days.`, ko: `S3 버킷과 연결된 AWS Storage Gateway 테이프 게이트웨이를 배포합니다. 온프레미스 파일 스토리지 솔루션에서 테이프 게이트웨이로 파일을 이동합니다. 5일 후에 파일을 S3 Standard-Infrequent Access(S3 Standard-IA)로 이동하는 S3 수명 주기 규칙을 생성합니다.` },
      { k: 'D', en: `Deploy an AWS Storage Gateway file gateway that is associated with an S3 bucket. Move the files from the on-premises file storage solution to the file gateway. Create an S3 Lifecycle rule to move the files to S3 Glacier Deep Archive after 5 days.`, ko: `S3 버킷과 연결된 AWS Storage Gateway 파일 게이트웨이를 배포합니다. 온프레미스 파일 스토리지 솔루션에서 파일 게이트웨이로 파일을 이동합니다. 5일 후에 파일을 S3 Glacier Deep Archive로 이동하는 S3 수명 주기 규칙을 생성합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — Storage Gateway 파일 게이트웨이 + S3 Glacier Deep Archive</span></p>
<p>두 가지 핵심 요구 사항을 분석하면:</p>
<p>① <strong>NFS 지원</strong>: AWS Storage Gateway의 <strong>파일 게이트웨이</strong>는 NFS(및 SMB) 프로토콜을 지원합니다. 볼륨 게이트웨이(iSCSI)와 테이프 게이트웨이는 NFS를 지원하지 않습니다.<br>② <strong>최저 비용 보관</strong>: "며칠 기다릴 의향"이 있다는 것은 즉각적 복구가 필요 없다는 의미입니다. <strong>S3 Glacier Deep Archive</strong>는 AWS에서 가장 저렴한 스토리지 클래스(S3 Standard-IA 대비 약 75% 저렴)이며, 복구 시간은 12시간 이내입니다.</p>
<p><a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html" target="_blank">AWS 공식 문서: Storage Gateway 유형</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 파일 게이트웨이(NFS 지원)는 적합하나, S3 Standard-IA는 Glacier Deep Archive보다 비용이 높습니다. 며칠을 기다릴 수 있다면 더 저렴한 클래스를 선택해야 합니다.</p>
<p><span class="mark-no">❌ B</span> — 볼륨 게이트웨이는 iSCSI 블록 스토리지 프로토콜을 사용하며 NFS를 지원하지 않습니다. NFS 요구 사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — 테이프 게이트웨이는 가상 테이프 라이브러리(VTL) 인터페이스를 제공하며 NFS를 지원하지 않습니다. 또한 Standard-IA는 Deep Archive보다 비용이 높습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: '파일 게이트웨이만 NFS 지원. Glacier Deep Archive가 Standard-IA 대비 약 75% 저렴하며, 며칠 대기 수용 가능하므로 DR 요구 사항과 부합.' },
    ]
  },
];