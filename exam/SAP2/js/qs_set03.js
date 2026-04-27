window.QS_SET03 = [
  {
    n: 21,
    en: `A company is using an on-premises Active Directory service for user authentication. The company wants to use the same authentication service to sign in to the company's AWS accounts, which are using AWS Organizations. AWS Site-to-Site VPN connectivity already exists between the on-premises environment and all the company's AWS accounts. The company's security policy requires conditional access to the accounts based on user groups and roles. User identities must be managed in a single location. Which solution will meet these requirements?`,
    ko: `한 회사가 사용자 인증을 위해 온프레미스 Active Directory 서비스를 사용하고 있습니다. 회사는 AWS Organizations를 사용하는 회사의 AWS 계정에 로그인할 때도 동일한 인증 서비스를 사용하려고 합니다. 온프레미스 환경과 모든 회사의 AWS 계정 사이에는 이미 AWS Site-to-Site VPN 연결이 존재합니다. 회사의 보안 정책은 사용자 그룹 및 역할을 기반으로 한 조건부 액세스를 요구합니다. 사용자 ID는 단일 위치에서 관리되어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure AWS IAM Identity Center (AWS Single Sign-On) to connect to Active Directory by using SAML 2.0. Enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using attribute-based access controls (ABACs).`, ko:`SAML 2.0을 사용하여 Active Directory에 연결하도록 AWS IAM Identity Center(AWS Single Sign-On)를 구성합니다. SCIM v2.0 프로토콜을 사용하여 자동 프로비저닝을 활성화합니다. 속성 기반 액세스 제어(ABAC)를 사용하여 AWS 계정에 대한 액세스를 부여합니다.` },
      { k:'B', en:`Configure AWS IAM Identity Center (AWS Single Sign-On) by using IAM Identity Center as an identity source. Enable automatic provisioning by using the System for Cross-domain Identity Management (SCIM) v2.0 protocol. Grant access to the AWS accounts by using IAM Identity Center permission sets.`, ko:`IAM Identity Center를 ID 소스로 사용하여 AWS IAM Identity Center(AWS Single Sign-On)를 구성합니다. SCIM v2.0 프로토콜을 사용하여 자동 프로비저닝을 활성화합니다. IAM Identity Center 권한 세트를 사용하여 AWS 계정에 대한 액세스를 부여합니다.` },
      { k:'C', en:`In one of the company's AWS accounts, configure AWS Identity and Access Management (IAM) to use a SAML 2.0 identity provider. Provision IAM users that are mapped to the federated users. Grant access that corresponds to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM users.`, ko:`회사의 AWS 계정 중 하나에서 SAML 2.0 ID 공급자를 사용하도록 AWS IAM을 구성합니다. 페더레이션 사용자에 매핑되는 IAM 사용자를 프로비저닝합니다. Active Directory의 적절한 그룹에 해당하는 액세스를 부여합니다. 교차 계정 IAM 사용자를 사용하여 필요한 AWS 계정에 대한 액세스를 부여합니다.` },
      { k:'D', en:`In one of the company's AWS accounts, configure AWS Identity and Access Management (IAM) to use an OpenID Connect (OIDC) identity provider. Provision IAM roles that grant access to the AWS account for the federated users that correspond to appropriate groups in Active Directory. Grant access to the required AWS accounts by using cross-account IAM roles.`, ko:`회사의 AWS 계정 중 하나에서 OpenID Connect(OIDC) ID 공급자를 사용하도록 AWS IAM을 구성합니다. Active Directory의 적절한 그룹에 해당하는 페더레이션 사용자에게 AWS 계정 액세스를 부여하는 IAM 역할을 프로비저닝합니다. 교차 계정 IAM 역할을 사용하여 필요한 AWS 계정에 대한 액세스를 부여합니다.` },
    ],
    answer: ['A'],
    vote: '85% A',
    explain: `<p><span class="mark-ok">✅ A — IAM Identity Center + AD SAML 2.0 + SCIM + ABAC</span></p>
<p>AWS IAM Identity Center는 외부 Active Directory를 SAML 2.0을 통해 연결하는 공식 권장 방식입니다. SCIM v2.0 프로토콜을 사용하면 AD의 사용자와 그룹이 IAM Identity Center로 자동 동기화되어 단일 위치에서 ID를 관리할 수 있습니다. ABAC(속성 기반 액세스 제어)를 사용하면 AD 사용자 속성(그룹, 역할 등)을 기반으로 조건부 액세스 정책을 구현할 수 있어 보안 정책 요구 사항을 충족합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — IAM Identity Center 자체를 ID 소스로 사용하면 온프레미스 AD와 분리된 별도의 ID 저장소가 생성됩니다. 사용자 ID가 단일 위치(온프레미스 AD)에서 관리되어야 한다는 요구 사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — 개별 AWS 계정에 SAML 2.0 IdP를 구성하고 교차 계정 IAM 사용자를 사용하는 방식은 Organizations의 모든 계정에서 개별적으로 설정해야 하므로 관리 복잡성이 높습니다. ID Center를 통한 중앙 집중식 관리가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — AD는 OIDC가 아닌 SAML 2.0 프로토콜을 사용합니다. OIDC는 AD와 직접 통합되지 않으며, 교차 계정 IAM 역할 기반 방식은 Organizations 전체 계정을 중앙에서 관리하는 데 적합하지 않습니다.</p>`,
    disc: [{ ans:'A', txt:'IAM Identity Center + AD SAML 2.0 federation: SCIM provides automatic user/group sync from AD, ABAC maps AD group attributes to AWS account access policies, meeting both single-identity-store and conditional-access requirements.' }]
  },
  {
    n: 22,
    en: `A software company has deployed an application that consumes a REST API by using Amazon API Gateway, AWS Lambda functions, and an Amazon DynamoDB table. The application is showing an increase in the number of errors during PUT requests. Most of the PUT calls come from a small number of clients that are authenticated with specific API keys. A solutions architect has identified that a large number of the PUT requests originate from one client. The API is noncritical, and clients can tolerate retries of unsuccessful calls. However, the errors are displayed to customers and are causing damage to the API's reputation. What should the solutions architect recommend to improve the customer experience?`,
    ko: `한 소프트웨어 회사가 Amazon API Gateway, AWS Lambda 함수, Amazon DynamoDB 테이블을 사용하는 REST API를 소비하는 애플리케이션을 배포했습니다. 애플리케이션은 PUT 요청 중 오류 수가 증가하고 있습니다. PUT 호출의 대부분은 특정 API 키로 인증된 소수의 클라이언트에서 발생합니다. Solutions Architect는 많은 수의 PUT 요청이 하나의 클라이언트에서 발생한다는 것을 확인했습니다. API는 중요하지 않으며 클라이언트는 실패한 호출의 재시도를 허용할 수 있습니다. 그러나 오류가 고객에게 표시되어 API의 평판을 손상시키고 있습니다. 고객 경험을 개선하기 위해 솔루션 설계자는 무엇을 권장해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Implement retry logic with exponential backoff and irregular variation in the client application. Ensure that the errors are caught and handled with descriptive error messages.`, ko:`클라이언트 애플리케이션에 지수 백오프와 불규칙한 변형을 사용하는 재시도 로직을 구현합니다. 오류가 설명적인 오류 메시지로 잡히고 처리되도록 합니다.` },
      { k:'B', en:`Implement API throttling through a usage plan at the API Gateway level. Ensure that the client application handles code 429 replies without error.`, ko:`API Gateway 레벨에서 사용 계획을 통해 API 제한을 구현합니다. 클라이언트 애플리케이션이 코드 429 응답을 오류 없이 처리하도록 합니다.` },
      { k:'C', en:`Turn on API caching to enhance responsiveness for the production stage. Run 10-minute load tests. Verify that the cache capacity is appropriate for the workload.`, ko:`프로덕션 단계의 응답성을 향상시키기 위해 API 캐싱을 켭니다. 10분 부하 테스트를 실행합니다. 캐시 용량이 워크로드에 적합한지 확인합니다.` },
      { k:'D', en:`Implement reserved concurrency at the Lambda function level to provide the resources that are needed during sudden increases in traffic.`, ko:`트래픽의 갑작스러운 증가 중에 필요한 리소스를 제공하기 위해 Lambda 함수 레벨에서 예약된 동시성을 구현합니다.` },
    ],
    answer: ['B'],
    vote: '88% B',
    explain: `<p><span class="mark-ok">✅ B — API Gateway Usage Plan 기반 API 제한</span></p>
<p>API Gateway 사용 계획(Usage Plan)을 통한 API 키별 요청 제한은 특정 클라이언트의 과도한 요청을 API Gateway 레벨에서 차단하는 가장 적합한 방법입니다. API Gateway는 임계값 초과 시 HTTP 429 Too Many Requests를 반환하며, 클라이언트 애플리케이션이 429를 정상적으로 처리(재시도 대기)하도록 수정하면 고객에게 오류가 노출되지 않습니다. 이 방식은 DynamoDB 과부하를 방지하면서도 오류 메시지 노출 문제를 해결합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 지수 백오프는 클라이언트 측 재시도 패턴으로, 서버 측 과부하 원인을 제거하지 않습니다. 이미 발생한 오류를 더 잘 처리할 뿐이며, 오류 자체를 예방하지는 못합니다.</p>
<p><span class="mark-no">❌ C</span> — API 캐싱은 GET 요청에 효과적이지만, PUT 요청은 데이터를 변경하는 요청이므로 캐싱의 이점이 없습니다. 문제는 PUT 요청의 과부하이므로 캐싱은 근본 원인을 해결하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda 예약 동시성(Reserved Concurrency)은 함수가 사용할 수 있는 최대 동시 실행 수를 제한합니다. 이는 오히려 처리량을 줄여 더 많은 오류를 유발할 수 있으며, 요청 유입 자체를 제한하지 않습니다.</p>`,
    disc: [{ ans:'B', txt:'Usage Plan throttling limits per-client request rates at API Gateway, returning 429 before requests reach Lambda/DynamoDB. Client-side 429 handling with retry logic prevents user-visible errors without changing server infrastructure.' }]
  },
  {
    n: 23,
    en: `A company is running a data-intensive application on AWS. The application runs on a cluster of hundreds of Amazon EC2 instances. A shared file system also runs on several EC2 instances that store 200 TB of data. The application reads and modifies the data on the shared file system and generates a report. The job runs once monthly, reads a subset of the files from the shared file system, and takes about 72 hours to complete. The compute instances scale in an Auto Scaling group, but the instances that host the shared file system run continuously. The compute and storage instances are all in the same AWS Region. A solutions architect needs to reduce costs by replacing the shared file system instances. The file system must provide high performance access to the needed data for the duration of the 72-hour run. Which solution will provide the LARGEST overall cost reduction while meeting these requirements?`,
    ko: `한 회사가 AWS에서 데이터 집약적인 애플리케이션을 실행하고 있습니다. 애플리케이션은 수백 개의 Amazon EC2 인스턴스 클러스터에서 실행됩니다. 공유 파일 시스템도 200TB의 데이터를 저장하는 여러 EC2 인스턴스에서 실행됩니다. 애플리케이션은 공유 파일 시스템의 데이터를 읽고 수정하며 보고서를 생성합니다. 작업은 매월 한 번 실행되고, 공유 파일 시스템에서 파일의 일부를 읽으며 완료하는 데 약 72시간이 소요됩니다. 컴퓨팅 인스턴스는 Auto Scaling 그룹에서 확장되지만, 공유 파일 시스템을 호스팅하는 인스턴스는 지속적으로 실행됩니다. 솔루션 설계자는 공유 파일 시스템 인스턴스를 교체하여 비용을 절감해야 합니다. 파일 시스템은 72시간 실행 기간 동안 필요한 데이터에 대한 고성능 액세스를 제공해야 합니다. 이 요구 사항을 충족하면서 가장 큰 전체 비용 절감을 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Intelligent-Tiering storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using lazy loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.`, ko:`기존 공유 파일 시스템의 데이터를 S3 Intelligent-Tiering 스토리지 클래스를 사용하는 Amazon S3 버킷으로 마이그레이션합니다. 매월 작업이 실행되기 전에 지연 로드를 사용하여 Amazon S3의 데이터로 새 파일 시스템을 생성하는 데 Amazon FSx for Lustre를 사용합니다. 작업 기간 동안 새 파일 시스템을 공유 스토리지로 사용합니다. 작업이 완료되면 파일 시스템을 삭제합니다.` },
      { k:'B', en:`Migrate the data from the existing shared file system to a large Amazon Elastic Block Store (Amazon EBS) volume with Multi-Attach enabled. Attach the EBS volume to each of the instances by using a user data script in the Auto Scaling group launch template. Use the EBS volume as the shared storage for the duration of the job. Detach the EBS volume when the job is complete.`, ko:`기존 공유 파일 시스템의 데이터를 Multi-Attach가 활성화된 대규모 Amazon EBS 볼륨으로 마이그레이션합니다. Auto Scaling 그룹 시작 템플릿의 사용자 데이터 스크립트를 사용하여 각 인스턴스에 EBS 볼륨을 연결합니다. 작업 기간 동안 EBS 볼륨을 공유 스토리지로 사용합니다. 작업이 완료되면 EBS 볼륨을 분리합니다.` },
      { k:'C', en:`Migrate the data from the existing shared file system to an Amazon S3 bucket that uses the S3 Standard storage class. Before the job runs each month, use Amazon FSx for Lustre to create a new file system with the data from Amazon S3 by using batch loading. Use the new file system as the shared storage for the duration of the job. Delete the file system when the job is complete.`, ko:`기존 공유 파일 시스템의 데이터를 S3 Standard 스토리지 클래스를 사용하는 Amazon S3 버킷으로 마이그레이션합니다. 매월 작업이 실행되기 전에 배치 로드를 사용하여 Amazon S3의 데이터로 새 파일 시스템을 생성하는 데 Amazon FSx for Lustre를 사용합니다. 작업 기간 동안 새 파일 시스템을 공유 스토리지로 사용합니다. 작업이 완료되면 파일 시스템을 삭제합니다.` },
      { k:'D', en:`Migrate the data from the existing shared file system to an Amazon S3 bucket. Before the job runs each month, use AWS Storage Gateway to create a file gateway with the data from Amazon S3. Use the file gateway as the shared storage for the job. Delete the file gateway when the job is complete.`, ko:`기존 공유 파일 시스템의 데이터를 Amazon S3 버킷으로 마이그레이션합니다. 매월 작업이 실행되기 전에 AWS Storage Gateway를 사용하여 Amazon S3의 데이터로 파일 게이트웨이를 생성합니다. 작업에 대한 공유 스토리지로 파일 게이트웨이를 사용합니다. 작업이 완료되면 파일 게이트웨이를 삭제합니다.` },
    ],
    answer: ['A'],
    vote: '82% A',
    explain: `<p><span class="mark-ok">✅ A — S3 Intelligent-Tiering + FSx for Lustre 지연 로드</span></p>
<p>S3 Intelligent-Tiering은 200TB의 데이터를 비용 효율적으로 저장합니다(접근 패턴에 따라 자동으로 스토리지 계층 전환). FSx for Lustre는 S3 버킷과 네이티브 통합을 지원하며, 지연 로드(lazy loading) 방식으로 실제 액세스가 발생할 때만 S3에서 데이터를 가져옵니다. 작업이 200TB 중 일부만 읽으므로, 지연 로드는 실제 필요한 데이터만 FSx 파일 시스템에 로드하여 스토리지 비용을 최소화합니다. 72시간 후 파일 시스템을 삭제하면 유휴 비용이 완전히 제거됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — EBS Multi-Attach는 동일 AZ 내 최대 16개 Nitro 인스턴스에만 연결 가능합니다. 수백 개의 EC2 인스턴스 클러스터에서는 사용할 수 없는 구조적 한계가 있습니다.</p>
<p><span class="mark-no">❌ C</span> — S3 Standard는 Intelligent-Tiering보다 비용이 높으며, 배치 로드(batch loading)는 작업 시작 전 200TB 전체를 FSx로 사전 로드하므로 불필요한 데이터까지 로드하여 시간과 비용이 증가합니다.</p>
<p><span class="mark-no">❌ D</span> — Storage Gateway 파일 게이트웨이는 온프레미스 워크로드를 위한 솔루션이며, AWS 클라우드 내 HPC 클러스터의 고성능 공유 스토리지로는 FSx for Lustre에 비해 성능이 크게 낮습니다.</p>`,
    disc: [{ ans:'A', txt:'S3 Intelligent-Tiering auto-tiers 200TB at lower cost than S3 Standard. FSx for Lustre lazy loading only pulls files actually accessed during the 72-hr job, minimizing FSx capacity needed. Deleting FSx after job completion eliminates idle storage charges.' }]
  },
  {
    n: 24,
    en: `A company is developing a new service that will be accessed using TCP on a static port. A solutions architect must ensure that the service is highly available, has redundancy across Availability Zones, and is accessible using the DNS name my.service.com, which is publicly accessible. The service must use fixed address assignments so other companies can add the addresses to their allow lists. Assuming that resources are deployed in multiple Availability Zones in a single Region, which solution will meet these requirements?`,
    ko: `한 회사가 정적 포트에서 TCP를 사용하여 액세스하는 새로운 서비스를 개발하고 있습니다. 솔루션 설계자는 서비스가 가용성이 높고, 가용 영역 간 이중화가 있으며, 공개적으로 액세스 가능한 DNS 이름 my.service.com을 사용하여 액세스할 수 있는지 확인해야 합니다. 서비스는 다른 회사들이 해당 주소를 허용 목록에 추가할 수 있도록 고정 주소 할당을 사용해야 합니다. 리소스가 단일 리전의 여러 가용 영역에 배포되어 있다고 가정할 때, 이 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Create Amazon EC2 instances with an Elastic IP address for each instance. Create a Network Load Balancer (NLB) and expose the static TCP port. Register EC2 instances with the NLB. Create a new name server record set named my.service.com, and assign the Elastic IP addresses of the EC2 instances to the record set. Provide the Elastic IP addresses of the EC2 instances to the other companies to add to their allow lists.`, ko:`각 인스턴스에 대해 탄력적 IP 주소를 사용하여 Amazon EC2 인스턴스를 생성합니다. Network Load Balancer(NLB)를 생성하고 정적 TCP 포트를 노출합니다. EC2 인스턴스를 NLB에 등록합니다. my.service.com이라는 새 이름 서버 레코드 세트를 생성하고, EC2 인스턴스의 탄력적 IP 주소를 레코드 세트에 할당합니다. EC2 인스턴스의 탄력적 IP 주소를 다른 회사에 제공하여 허용 목록에 추가하도록 합니다.` },
      { k:'B', en:`Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP addresses for the ECS cluster. Create a Network Load Balancer (NLB) and expose the TCP port. Create a target group and assign the ECS cluster name to the NLB. Create a new A record set named my.service.com, and assign the public IP addresses of the ECS cluster to the record set. Provide the public IP addresses of the ECS cluster to the other companies to add to their allow lists.`, ko:`애플리케이션에 대한 Amazon ECS 클러스터 및 서비스 정의를 생성합니다. ECS 클러스터에 대한 공용 IP 주소를 생성하고 할당합니다. Network Load Balancer(NLB)를 생성하고 TCP 포트를 노출합니다. 대상 그룹을 생성하고 ECS 클러스터 이름을 NLB에 할당합니다. my.service.com이라는 새 A 레코드 세트를 생성하고 ECS 클러스터의 공용 IP 주소를 레코드 세트에 할당합니다. ECS 클러스터의 공용 IP 주소를 다른 회사에 제공하여 허용 목록에 추가하도록 합니다.` },
      { k:'C', en:`Create Amazon EC2 instances for the service. Create one Elastic IP address for each Availability Zone. Create a Network Load Balancer (NLB) and expose the assigned TCP port. Assign the Elastic IP addresses to the NLB for each Availability Zone. Create a target group and register the EC2 instances with the NLB. Create a new A (alias) record set named my.service.com, and assign the NLB DNS name to the record set.`, ko:`서비스에 대한 Amazon EC2 인스턴스를 생성합니다. 각 가용 영역에 하나의 탄력적 IP 주소를 생성합니다. Network Load Balancer(NLB)를 생성하고 할당된 TCP 포트를 노출합니다. 각 가용 영역의 NLB에 탄력적 IP 주소를 할당합니다. 대상 그룹을 생성하고 EC2 인스턴스를 NLB에 등록합니다. my.service.com이라는 새 A(별칭) 레코드 세트를 생성하고 NLB DNS 이름을 레코드 세트에 할당합니다.` },
      { k:'D', en:`Create an Amazon ECS cluster and a service definition for the application. Create and assign public IP address for each host in the cluster. Create an Application Load Balancer (ALB) and expose the static TCP port. Create a target group and assign the ECS service definition name to the ALB. Create a new CNAME record set and associate the public IP addresses to the record set. Provide the Elastic IP addresses of the Amazon EC2 instances to the other companies to add to their allow lists.`, ko:`애플리케이션에 대한 Amazon ECS 클러스터 및 서비스 정의를 생성합니다. 클러스터의 각 호스트에 대한 공용 IP 주소를 생성하고 할당합니다. Application Load Balancer(ALB)를 생성하고 정적 TCP 포트를 노출합니다. 대상 그룹을 생성하고 ECS 서비스 정의 이름을 ALB에 할당합니다. 새 CNAME 레코드 세트를 생성하고 공용 IP 주소를 레코드 세트에 연결합니다. Amazon EC2 인스턴스의 탄력적 IP 주소를 다른 회사에 제공하여 허용 목록에 추가하도록 합니다.` },
    ],
    answer: ['C'],
    vote: '84% C',
    explain: `<p><span class="mark-ok">✅ C — NLB에 AZ별 Elastic IP 할당 + Route 53 Alias 레코드</span></p>
<p>NLB(Network Load Balancer)는 각 가용 영역에 고정 Elastic IP 주소를 할당할 수 있는 유일한 AWS 로드 밸런서입니다. Elastic IP는 변경되지 않으므로 다른 회사들이 허용 목록에 추가할 수 있습니다. NLB는 TCP/UDP 트래픽을 처리하며, EC2 인스턴스를 대상 그룹에 등록하면 여러 AZ에 걸쳐 고가용성을 제공합니다. Route 53 Alias 레코드로 my.service.com을 NLB DNS에 연결하면 공개적으로 접근 가능한 DNS 이름을 제공합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2 인스턴스에 개별 Elastic IP를 할당하고 NLB에 등록하는 방식은 NLB의 고정 IP가 아닌 EC2의 IP를 허용 목록에 등록하는 구조입니다. EC2 인스턴스가 교체되면 IP가 변경될 수 있어 허용 목록 유지가 어렵습니다.</p>
<p><span class="mark-no">❌ B</span> — ECS 태스크의 공용 IP는 태스크가 재시작될 때마다 변경됩니다. 고정 IP 요구 사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — ALB는 정적 IP를 지원하지 않습니다(Global Accelerator 없이는). CNAME 레코드는 루트 도메인에 사용할 수 없으며, ALB는 순수 TCP 패스스루를 지원하지 않습니다.</p>`,
    disc: [{ ans:'C', txt:'NLB is the only AWS LB that supports assigning Elastic IPs per AZ, providing fixed IPs for third-party allowlists. EC2 targets span multiple AZs for HA. Route 53 alias record maps the custom DNS name to the NLB endpoint.' }]
  },
  {
    n: 25,
    en: `A company uses an on-premises data analytics platform. The system is highly available in a fully redundant configuration across 12 servers in the company's data center. The system runs scheduled jobs, both hourly and daily, in addition to one-time requests from users. Scheduled jobs can take between 20 minutes and 2 hours to finish running and have tight SLAs. The scheduled jobs account for 65% of the system usage. User jobs typically finish running in less than 5 minutes and have no SLA. The user jobs account for 35% of system usage. During system failures, scheduled jobs must continue to meet SLAs. However, user jobs can be delayed. A solutions architect needs to move the system to Amazon EC2 instances and adopt a consumption-based model to reduce costs with no long-term commitments. The solution must maintain high availability and must not affect the SLAs. Which solution will meet these requirements MOST cost-effectively?`,
    ko: `한 회사는 온프레미스 데이터 분석 플랫폼을 사용합니다. 이 시스템은 회사의 데이터 센터에 있는 12대의 서버에 걸쳐 완전히 이중화된 구성으로 고가용성을 갖추고 있습니다. 시스템은 사용자의 일회성 요청 외에도 시간별 및 일별 예약 작업을 실행합니다. 예약된 작업은 완료하는 데 20분에서 2시간이 걸릴 수 있으며 타이트한 SLA를 갖습니다. 예약된 작업은 시스템 사용량의 65%를 차지합니다. 사용자 작업은 일반적으로 5분 미만에 완료되며 SLA가 없습니다. 사용자 작업은 시스템 사용량의 35%를 차지합니다. 시스템 장애 중에 예약된 작업은 SLA를 계속 충족해야 합니다. 그러나 사용자 작업은 지연될 수 있습니다. 솔루션 설계자는 시스템을 Amazon EC2 인스턴스로 이전하고, 장기적인 약정 없이 비용을 줄이기 위한 소비 기반 모델을 채택해야 합니다. 솔루션은 고가용성을 유지하고 SLA에 영향을 주지 않아야 합니다. 이 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Split the 12 instances across two Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run four instances in each Availability Zone as Spot Instances.`, ko:`선택한 AWS 리전의 두 가용 영역에 12개 인스턴스를 분산합니다. 각 가용 영역에서 두 인스턴스를 용량 예약이 있는 온디맨드 인스턴스로 실행합니다. 각 가용 영역에서 네 인스턴스를 스팟 인스턴스로 실행합니다.` },
      { k:'B', en:`Split the 12 instances across three Availability Zones in the chosen AWS Region. In one of the Availability Zones, run all four instances as On-Demand Instances with Capacity Reservations. Run the remaining instances as Spot Instances.`, ko:`선택한 AWS 리전의 세 가용 영역에 12개 인스턴스를 분산합니다. 가용 영역 중 하나에서 네 인스턴스 모두를 용량 예약이 있는 온디맨드 인스턴스로 실행합니다. 나머지 인스턴스를 스팟 인스턴스로 실행합니다.` },
      { k:'C', en:`Split the 12 instances across three Availability Zones in the chosen AWS Region. Run two instances in each Availability Zone as On-Demand Instances with a Savings Plan. Run two instances in each Availability Zone as Spot Instances.`, ko:`선택한 AWS 리전의 세 가용 영역에 12개 인스턴스를 분산합니다. 각 가용 영역에서 두 인스턴스를 Savings Plan이 있는 온디맨드 인스턴스로 실행합니다. 각 가용 영역에서 두 인스턴스를 스팟 인스턴스로 실행합니다.` },
      { k:'D', en:`Split the 12 instances across three Availability Zones in the chosen AWS Region. Run three instances in each Availability Zone as On-Demand Instances with Capacity Reservations. Run one instance in each Availability Zone as a Spot Instance.`, ko:`선택한 AWS 리전의 세 가용 영역에 12개 인스턴스를 분산합니다. 각 가용 영역에서 세 인스턴스를 용량 예약이 있는 온디맨드 인스턴스로 실행합니다. 각 가용 영역에서 한 인스턴스를 스팟 인스턴스로 실행합니다.` },
    ],
    answer: ['D'],
    vote: '79% D',
    explain: `<p><span class="mark-ok">✅ D — 3 AZ에 On-Demand Capacity Reservation 3개/AZ + Spot 1개/AZ</span></p>
<p>3개 AZ에 분산하면 한 AZ 장애 시에도 나머지 두 AZ가 SLA 충족 가능한 충분한 용량을 보유합니다. On-Demand Capacity Reservation(용량 예약)은 장기 약정 없이 특정 AZ에 EC2 용량을 보장하여 SLA가 중요한 예약 작업(65%)의 가용성을 확보합니다. 각 AZ의 Spot 인스턴스 1개는 SLA 없는 사용자 작업(35%)에 사용되며, Spot 중단 시 사용자 작업만 지연됩니다. 장기 약정이 없어 소비 기반 모델 요구 사항도 충족합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 2개 AZ에만 분산하면 한 AZ 전체 장애 시 나머지 한 AZ가 모든 부하를 감당해야 합니다. 3 AZ 구성 대비 고가용성이 낮습니다.</p>
<p><span class="mark-no">❌ B</span> — 한 AZ에만 모든 On-Demand 인스턴스를 집중하면, 해당 AZ 장애 시 예약 작업의 SLA를 보장할 수 없습니다. 보호된 용량이 특정 AZ에 편중됩니다.</p>
<p><span class="mark-no">❌ C</span> — Savings Plan은 비용 할인을 제공하지만 특정 AZ의 용량 가용성을 보장하지 않습니다. Capacity Reservation이 없으면 AZ 용량 부족으로 SLA 보장에 실패할 수 있습니다.</p>`,
    disc: [{ ans:'D', txt:'3 AZs for resilience: one AZ failure still leaves 6 On-Demand instances (3/AZ × 2 AZs) to maintain SLA. Capacity Reservations guarantee instance availability without 1-year/3-year commitment. Spot instances handle no-SLA user jobs at lower cost.' }]
  },
  {
    n: 26,
    en: `A security engineer determined that an existing application retrieves credentials to an Amazon RDS for MySQL database from an encrypted file in Amazon S3. For the next version of the application, the security engineer wants to implement the following application design changes to improve security: The database must use strong, randomly generated passwords stored in a secure AWS managed service. The application resources must be deployed through AWS CloudFormation. The application must rotate credentials for the database every 90 days. A solutions architect will generate a CloudFormation template to deploy the application. Which resources specified in the CloudFormation template will meet the security engineer's requirements with the LEAST amount of operational overhead?`,
    ko: `보안 엔지니어는 기존 애플리케이션이 Amazon S3의 암호화된 파일에서 Amazon RDS for MySQL 데이터베이스의 자격 증명을 검색한다는 것을 확인했습니다. 다음 버전의 애플리케이션을 위해, 보안 엔지니어는 보안을 개선하기 위해 다음과 같은 애플리케이션 설계 변경 사항을 구현하려고 합니다: 데이터베이스는 안전한 AWS 관리 서비스에 저장된 강력한 무작위로 생성된 패스워드를 사용해야 합니다. 애플리케이션 리소스는 AWS CloudFormation을 통해 배포되어야 합니다. 애플리케이션은 90일마다 데이터베이스의 자격 증명을 교체해야 합니다. 솔루션 설계자는 애플리케이션을 배포하기 위한 CloudFormation 템플릿을 생성합니다. CloudFormation 템플릿에 지정된 어떤 리소스가 최소한의 운영 오버헤드로 보안 엔지니어의 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Specify a Secrets Manager RotationSchedule resource to rotate the database password every 90 days.`, ko:`AWS Secrets Manager를 사용하여 데이터베이스 패스워드를 비밀 리소스로 생성합니다. 데이터베이스 패스워드를 교체하는 AWS Lambda 함수 리소스를 생성합니다. Secrets Manager RotationSchedule 리소스를 지정하여 90일마다 데이터베이스 패스워드를 교체합니다.` },
      { k:'B', en:`Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Create an AWS Lambda function resource to rotate the database password. Specify a Parameter Store RotationSchedule resource to rotate the database password every 90 days.`, ko:`AWS Systems Manager Parameter Store를 사용하여 데이터베이스 패스워드를 SecureString 파라미터 유형으로 생성합니다. 데이터베이스 패스워드를 교체하는 AWS Lambda 함수 리소스를 생성합니다. Parameter Store RotationSchedule 리소스를 지정하여 90일마다 데이터베이스 패스워드를 교체합니다.` },
      { k:'C', en:`Generate the database password as a secret resource using AWS Secrets Manager. Create an AWS Lambda function resource to rotate the database password. Create an Amazon EventBridge scheduled rule resource to trigger the Lambda function password rotation every 90 days.`, ko:`AWS Secrets Manager를 사용하여 데이터베이스 패스워드를 비밀 리소스로 생성합니다. 데이터베이스 패스워드를 교체하는 AWS Lambda 함수 리소스를 생성합니다. Amazon EventBridge 예약 규칙 리소스를 생성하여 90일마다 Lambda 함수 패스워드 교체를 트리거합니다.` },
      { k:'D', en:`Generate the database password as a SecureString parameter type using AWS Systems Manager Parameter Store. Specify an AWS AppSync DataSource resource to automatically rotate the database password every 90 days.`, ko:`AWS Systems Manager Parameter Store를 사용하여 데이터베이스 패스워드를 SecureString 파라미터 유형으로 생성합니다. AWS AppSync DataSource 리소스를 지정하여 90일마다 데이터베이스 패스워드를 자동으로 교체합니다.` },
    ],
    answer: ['A'],
    vote: '86% A',
    explain: `<p><span class="mark-ok">✅ A — Secrets Manager + Lambda 교체 함수 + RotationSchedule</span></p>
<p>AWS Secrets Manager는 강력한 랜덤 패스워드 생성과 안전한 저장을 AWS 관리 서비스로 제공합니다. CloudFormation의 <code>AWS::SecretsManager::RotationSchedule</code> 리소스를 사용하면 자동 교체 일정을 90일로 직접 설정할 수 있습니다. Secrets Manager는 RDS for MySQL용 내장 교체 Lambda 함수를 지원하므로 Lambda 함수와 RotationSchedule 리소스만으로 최소한의 운영 오버헤드로 전체 교체 프로세스를 자동화할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Parameter Store에는 <code>RotationSchedule</code> CloudFormation 리소스가 없습니다. Parameter Store는 자동 자격 증명 교체를 기본 지원하지 않으므로, 교체를 위한 별도 메커니즘이 필요해 운영 오버헤드가 증가합니다.</p>
<p><span class="mark-no">❌ C</span> — Secrets Manager + EventBridge 규칙 조합은 기술적으로 작동하지만, Secrets Manager의 내장 RotationSchedule 기능을 사용하는 것보다 구성이 복잡합니다. RotationSchedule이 EventBridge 규칙보다 더 적은 리소스로 동일한 기능을 제공합니다.</p>
<p><span class="mark-no">❌ D</span> — AppSync는 GraphQL API 서비스로 자격 증명 교체 기능이 없습니다. Parameter Store SecureString은 자동 교체를 지원하지 않습니다.</p>`,
    disc: [{ ans:'A', txt:'Secrets Manager natively supports RDS MySQL rotation via built-in Lambda rotation functions. CloudFormation RotationSchedule resource sets the 90-day cadence directly — fewer resources to manage than EventBridge + custom Lambda orchestration.' }]
  },
  {
    n: 27,
    en: `A company is storing data in several Amazon DynamoDB tables. A solutions architect must use a serverless architecture to make the data accessible publicly through a simple API over HTTPS. The solution must scale automatically in response to demand. Which solutions meet these requirements? (Choose two.)`,
    ko: `한 회사가 여러 Amazon DynamoDB 테이블에 데이터를 저장하고 있습니다. 솔루션 설계자는 서버리스 아키텍처를 사용하여 HTTPS를 통한 간단한 API를 통해 데이터를 공개적으로 액세스 가능하게 만들어야 합니다. 솔루션은 수요에 따라 자동으로 확장되어야 합니다. 이 요구 사항을 충족하는 솔루션은 무엇입니까? (두 가지를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Create an Amazon API Gateway REST API. Configure this API with direct integrations to DynamoDB by using API Gateway's AWS integration type.`, ko:`Amazon API Gateway REST API를 생성합니다. API Gateway의 AWS 통합 유형을 사용하여 DynamoDB와 직접 통합으로 이 API를 구성합니다.` },
      { k:'B', en:`Create an Amazon API Gateway HTTP API. Configure this API with direct integrations to DynamoDB by using API Gateway's AWS integration type.`, ko:`Amazon API Gateway HTTP API를 생성합니다. API Gateway의 AWS 통합 유형을 사용하여 DynamoDB와 직접 통합으로 이 API를 구성합니다.` },
      { k:'C', en:`Create an Amazon API Gateway HTTP API. Configure this API with integrations to AWS Lambda functions that return data from the DynamoDB tables.`, ko:`Amazon API Gateway HTTP API를 생성합니다. DynamoDB 테이블에서 데이터를 반환하는 AWS Lambda 함수와의 통합으로 이 API를 구성합니다.` },
      { k:'D', en:`Create an accelerator in AWS Global Accelerator. Configure this accelerator with AWS Lambda@Edge function integrations that return data from the DynamoDB tables.`, ko:`AWS Global Accelerator에 액셀러레이터를 생성합니다. DynamoDB 테이블에서 데이터를 반환하는 AWS Lambda@Edge 함수 통합으로 이 액셀러레이터를 구성합니다.` },
      { k:'E', en:`Create a Network Load Balancer. Configure listener rules to forward requests to the appropriate AWS Lambda functions.`, ko:`Network Load Balancer를 생성합니다. 적절한 AWS Lambda 함수로 요청을 전달하는 리스너 규칙을 구성합니다.` },
    ],
    answer: ['A','C'],
    vote: '83% AC',
    explain: `<p><span class="mark-ok">✅ A — API Gateway REST API + DynamoDB AWS 직접 통합</span></p>
<p>API Gateway REST API는 AWS 서비스 통합(AWS integration type)을 지원하며, Lambda 없이 DynamoDB에 직접 요청을 보낼 수 있습니다. 매핑 템플릿을 통해 HTTP 요청을 DynamoDB API 호출로 변환하며, 완전 서버리스 아키텍처로 자동 확장됩니다.</p>
<p><span class="mark-ok">✅ C — API Gateway HTTP API + Lambda + DynamoDB</span></p>
<p>API Gateway HTTP API는 REST API보다 저렴하고 낮은 지연 시간을 제공하며, Lambda 통합을 지원합니다. Lambda 함수가 DynamoDB에서 데이터를 조회하여 반환하는 구조로, 완전 서버리스이며 자동 확장됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — API Gateway HTTP API는 AWS 서비스 직접 통합(AWS integration type)을 지원하지 않습니다. DynamoDB와의 직접 통합은 REST API 전용 기능입니다. HTTP API는 Lambda, HTTP, 또는 사설 통합만 지원합니다.</p>
<p><span class="mark-no">❌ D</span> — Global Accelerator는 엔드포인트 가속화 서비스이며 Lambda@Edge 통합을 직접 지원하지 않습니다. Lambda@Edge는 CloudFront와 통합됩니다. 이 조합은 DynamoDB API 서비스에 적합한 아키텍처가 아닙니다.</p>
<p><span class="mark-no">❌ E</span> — NLB는 Lambda를 타겟으로 지원하지만, HTTP/HTTPS API 라우팅 기능이 없고 서버리스가 아닌 네트워크 레이어 로드 밸런서로 이 사용 사례에 부적합합니다.</p>`,
    disc: [
      { ans:'A', txt:'REST API supports AWS integration type for direct DynamoDB service calls without Lambda — PutItem/GetItem invoked via mapping templates, fully serverless and auto-scaling.' },
      { ans:'C', txt:'HTTP API + Lambda is recommended for custom query logic; HTTP API is cheaper and lower-latency than REST API when Lambda handles DynamoDB calls.' }
    ]
  },
  {
    n: 28,
    en: `A company has registered 10 new domain names. The company uses the domains for online marketing. The company needs a solution that will redirect online visitors to a specific URL for each domain. All domains and target URLs are defined in a JSON document. All DNS records are managed by Amazon Route 53. A solutions architect must implement a redirect service that accepts HTTP and HTTPS requests. Which combination of steps should the solutions architect take to meet these requirements with the LEAST amount of operational effort? (Choose three.)`,
    ko: `한 회사가 10개의 새 도메인 이름을 등록했습니다. 회사는 온라인 마케팅을 위해 해당 도메인을 사용합니다. 회사는 각 도메인에 대해 온라인 방문자를 특정 URL로 리디렉션하는 솔루션이 필요합니다. 모든 도메인과 대상 URL은 JSON 문서에 정의되어 있습니다. 모든 DNS 레코드는 Amazon Route 53에서 관리됩니다. 솔루션 설계자는 HTTP 및 HTTPS 요청을 수락하는 리디렉션 서비스를 구현해야 합니다. 솔루션 설계자가 최소한의 운영 노력으로 이 요구 사항을 충족하기 위해 취해야 할 단계의 조합은 무엇입니까? (세 가지를 선택하세요.)`,
    type: 'multi', multiCount: 3,
    choices: [
      { k:'A', en:`Create a dynamic webpage that runs on an Amazon EC2 instance. Configure the webpage to use the JSON document in combination with the event message to look up and respond with a redirect URL.`, ko:`Amazon EC2 인스턴스에서 실행되는 동적 웹페이지를 생성합니다. JSON 문서와 이벤트 메시지를 결합하여 리디렉션 URL을 조회하고 응답하도록 웹페이지를 구성합니다.` },
      { k:'B', en:`Create an Application Load Balancer that includes HTTP and HTTPS listeners.`, ko:`HTTP 및 HTTPS 리스너를 포함하는 Application Load Balancer를 생성합니다.` },
      { k:'C', en:`Create an AWS Lambda function that uses the JSON document in combination with the event message to look up and respond with a redirect URL.`, ko:`JSON 문서와 이벤트 메시지를 결합하여 리디렉션 URL을 조회하고 응답하는 AWS Lambda 함수를 생성합니다.` },
      { k:'D', en:`Use an Amazon API Gateway API with a custom domain to publish an AWS Lambda function.`, ko:`사용자 지정 도메인이 있는 Amazon API Gateway API를 사용하여 AWS Lambda 함수를 게시합니다.` },
      { k:'E', en:`Create an Amazon CloudFront distribution. Deploy a Lambda@Edge function.`, ko:`Amazon CloudFront 배포를 생성합니다. Lambda@Edge 함수를 배포합니다.` },
      { k:'F', en:`Create an SSL certificate by using AWS Certificate Manager (ACM). Include the domains as Subject Alternative Names.`, ko:`AWS Certificate Manager(ACM)를 사용하여 SSL 인증서를 생성합니다. 도메인을 주체 대체 이름(Subject Alternative Names)으로 포함합니다.` },
    ],
    answer: ['C','E','F'],
    vote: '78% CEF',
    explain: `<p><span class="mark-ok">✅ C — Lambda 함수로 JSON 조회 및 리디렉션 응답</span></p>
<p>Lambda 함수는 JSON 문서에서 요청 도메인에 해당하는 목표 URL을 조회하고 HTTP 301/302 리디렉션 응답을 반환합니다. 서버리스이므로 별도의 서버 관리가 필요 없으며 자동 확장됩니다.</p>
<p><span class="mark-ok">✅ E — CloudFront 배포 + Lambda@Edge</span></p>
<p>CloudFront는 HTTP/HTTPS를 모두 수신하며, Lambda@Edge를 통해 엣지 로케이션에서 리디렉션 로직을 실행합니다. CloudFront는 10개 도메인을 단일 배포로 처리하고 전역 엣지 네트워크를 통해 낮은 지연 시간을 제공합니다.</p>
<p><span class="mark-ok">✅ F — ACM SSL 인증서 (SAN 포함)</span></p>
<p>ACM에서 10개 도메인을 SAN(Subject Alternative Names)으로 포함하는 단일 인증서를 생성하면 HTTPS를 지원하는 모든 도메인에 대해 하나의 인증서만 관리하면 됩니다. CloudFront와 원활하게 통합됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2 인스턴스에서 동적 웹페이지를 실행하는 방식은 서버 관리, 패치, 스케일링이 필요합니다. 서버리스 Lambda + CloudFront 대비 운영 오버헤드가 훨씬 높습니다.</p>
<p><span class="mark-no">❌ B</span> — ALB는 HTTP/HTTPS 리스너를 제공하지만, 10개 도메인에 대한 SSL 구성이 복잡합니다. CloudFront + Lambda@Edge 조합보다 운영 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ D</span> — API Gateway + Lambda는 기술적으로 가능하지만, 각 도메인마다 별도 사용자 지정 도메인을 API Gateway에 설정해야 합니다. CloudFront + Lambda@Edge가 더 적은 구성으로 동일 기능을 제공합니다.</p>`,
    disc: [{ ans:'C, E, F', txt:'CloudFront+Lambda@Edge handles HTTP+HTTPS at edge with minimal ops; Lambda reads JSON domain map and returns 301 redirect; single ACM cert with 10 SANs avoids managing separate certificates per domain.' }]
  },
  {
    n: 29,
    en: `A company that has multiple AWS accounts is using AWS Organizations. The company's AWS accounts host VPCs, Amazon EC2 instances, and containers. The company's compliance team has deployed a security tool in each VPC where the company has deployments. The security tools run on EC2 instances and send information to the AWS account that is dedicated for the compliance team. The company has tagged all the compliance-related resources with a key of "costCenter" and a value or "compliance". The company wants to identify the cost of the security tools that are running on the EC2 instances so that the company can charge the compliance team's AWS account. The cost calculation must be as accurate as possible. What should a solutions architect do to meet these requirements?`,
    ko: `여러 AWS 계정을 보유한 회사가 AWS Organizations를 사용하고 있습니다. 회사의 AWS 계정은 VPC, Amazon EC2 인스턴스, 컨테이너를 호스팅합니다. 회사의 컴플라이언스 팀은 회사가 배포한 각 VPC에 보안 도구를 배포했습니다. 보안 도구는 EC2 인스턴스에서 실행되며 컴플라이언스 팀 전용 AWS 계정으로 정보를 보냅니다. 회사는 "costCenter" 키와 "compliance" 값으로 모든 컴플라이언스 관련 리소스에 태그를 달았습니다. 회사는 EC2 인스턴스에서 실행 중인 보안 도구의 비용을 파악하여 컴플라이언스 팀의 AWS 계정에 청구하려고 합니다. 비용 계산은 가능한 한 정확해야 합니다. 솔루션 설계자는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`In the management account of the organization, activate the costCenter user-defined tag. Configure monthly AWS Cost and Usage Reports to save to an Amazon S3 bucket in the management account. Use the tag breakdown in the report to obtain the total cost for the costCenter tagged resources.`, ko:`조직의 관리 계정에서 costCenter 사용자 정의 태그를 활성화합니다. Amazon S3 버킷에 관리 계정에 월별 AWS Cost and Usage Report를 저장하도록 구성합니다. 보고서의 태그 분류를 사용하여 costCenter 태그가 있는 리소스의 총 비용을 얻습니다.` },
      { k:'B', en:`In the member accounts of the organization, activate the costCenter user-defined tag. Configure monthly AWS Cost and Usage Reports to save to an Amazon S3 bucket in the management account. Schedule a monthly AWS Lambda function to retrieve the reports and calculate the total cost for the costCenter tagged resources.`, ko:`조직의 멤버 계정에서 costCenter 사용자 정의 태그를 활성화합니다. Amazon S3 버킷에 관리 계정에 월별 AWS Cost and Usage Report를 저장하도록 구성합니다. 월별 AWS Lambda 함수를 예약하여 보고서를 검색하고 costCenter 태그가 있는 리소스의 총 비용을 계산합니다.` },
      { k:'C', en:`In the member accounts of the organization activate the costCenter user-defined tag. From the management account, schedule a monthly AWS Cost and Usage Report. Use the tag breakdown in the report to calculate the total cost for the costCenter tagged resources.`, ko:`조직의 멤버 계정에서 costCenter 사용자 정의 태그를 활성화합니다. 관리 계정에서 월별 AWS Cost and Usage Report를 예약합니다. 보고서의 태그 분류를 사용하여 costCenter 태그가 있는 리소스의 총 비용을 계산합니다.` },
      { k:'D', en:`Create a custom report in the organization view in AWS Trusted Advisor. Configure the report to generate a monthly billing summary for the costCenter tagged resources in the compliance team's AWS account.`, ko:`AWS Trusted Advisor의 조직 보기에서 사용자 지정 보고서를 생성합니다. 컴플라이언스 팀의 AWS 계정에서 costCenter 태그가 있는 리소스에 대한 월별 청구 요약을 생성하도록 보고서를 구성합니다.` },
    ],
    answer: ['A'],
    vote: '81% A',
    explain: `<p><span class="mark-ok">✅ A — 관리 계정에서 costCenter 태그 활성화 + CUR to S3</span></p>
<p>AWS Organizations에서 사용자 정의 비용 할당 태그는 <strong>관리 계정(management account)</strong>에서 활성화해야만 조직 전체의 Cost and Usage Report(CUR)에 태그 데이터가 포함됩니다. 관리 계정의 S3 버킷에 저장된 CUR은 멤버 계정을 포함한 전체 조직의 태그별 비용 내역을 포함하므로, costCenter=compliance 리소스의 비용을 정확하게 집계할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 멤버 계정에서 태그를 활성화해도 조직 수준의 CUR에는 반영되지 않습니다. 태그 활성화는 반드시 관리 계정에서 이루어져야 합니다. Lambda로 보고서를 수동 집계하는 것은 불필요한 복잡성을 추가합니다.</p>
<p><span class="mark-no">❌ C</span> — 멤버 계정에서의 태그 활성화는 올바른 활성화 위치가 아닙니다. CUR 태그 데이터는 관리 계정에서 활성화된 태그만 포함됩니다.</p>
<p><span class="mark-no">❌ D</span> — Trusted Advisor는 비용 최적화 권고를 제공하지만 태그 기반 상세 비용 보고서를 생성하는 기능이 없습니다. CUR이 태그별 비용 추적의 표준 도구입니다.</p>`,
    disc: [{ ans:'A', txt:'Cost allocation tags must be activated in the management account to appear in org-level CUR. CUR tag breakdown is the most accurate method to attribute cross-account costs by tag without custom Lambda aggregation.' }]
  },
  {
    n: 30,
    en: `A company has 50 AWS accounts that are members of an organization in AWS Organizations. Each account contains multiple VPCs. The company wants to use AWS Transit Gateway to establish connectivity between the VPCs in each member account. Each time a new member account is created, the company wants to automate the process of creating a new VPC and a transit gateway attachment. Which combination of steps will meet these requirements? (Choose two.)`,
    ko: `한 회사는 AWS Organizations의 조직 멤버인 50개의 AWS 계정을 보유하고 있습니다. 각 계정에는 여러 VPC가 포함되어 있습니다. 회사는 AWS Transit Gateway를 사용하여 각 멤버 계정의 VPC 간 연결을 설정하려고 합니다. 새로운 멤버 계정이 생성될 때마다 회사는 새 VPC와 Transit Gateway 연결을 생성하는 프로세스를 자동화하려고 합니다. 이 요구 사항을 충족하는 단계의 조합은 무엇입니까? (두 가지를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`From the management account, share the transit gateway with member accounts by using AWS Resource Access Manager.`, ko:`관리 계정에서 AWS Resource Access Manager를 사용하여 Transit Gateway를 멤버 계정과 공유합니다.` },
      { k:'B', en:`From the management account, share the transit gateway with member accounts by using an AWS Organizations SCP.`, ko:`관리 계정에서 AWS Organizations SCP를 사용하여 Transit Gateway를 멤버 계정과 공유합니다.` },
      { k:'C', en:`Launch an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a VPC transit gateway attachment in a member account. Associate the attachment with the transit gateway in the management account by using the transit gateway ID.`, ko:`관리 계정에서 AWS CloudFormation 스택 세트를 시작하여 멤버 계정에 새 VPC와 VPC Transit Gateway 연결을 자동으로 생성합니다. Transit Gateway ID를 사용하여 관리 계정의 Transit Gateway와 연결을 연결합니다.` },
      { k:'D', en:`Launch an AWS CloudFormation stack set from the management account that automatically creates a new VPC and a peering transit gateway attachment in a member account. Share the attachment with the transit gateway in the management account by using a transit gateway service-linked role.`, ko:`관리 계정에서 AWS CloudFormation 스택 세트를 시작하여 멤버 계정에 새 VPC와 피어링 Transit Gateway 연결을 자동으로 생성합니다. Transit Gateway 서비스 연결 역할을 사용하여 관리 계정의 Transit Gateway와 연결을 공유합니다.` },
      { k:'E', en:`From the management account, share the transit gateway with member accounts by using AWS Service Catalog.`, ko:`관리 계정에서 AWS Service Catalog를 사용하여 Transit Gateway를 멤버 계정과 공유합니다.` },
    ],
    answer: ['A','C'],
    vote: '85% AC',
    explain: `<p><span class="mark-ok">✅ A — RAM으로 Transit Gateway 공유</span></p>
<p>AWS Resource Access Manager(RAM)는 관리 계정의 Transit Gateway를 Organizations 내 모든 멤버 계정과 공유하는 공식 방법입니다. RAM은 리소스를 실제로 공유하는 서비스로, 멤버 계정이 공유된 TGW에 VPC 연결을 직접 생성할 수 있게 합니다.</p>
<p><span class="mark-ok">✅ C — CloudFormation StackSets로 VPC + TGW 연결 자동 생성</span></p>
<p>CloudFormation StackSets는 새 멤버 계정 생성 이벤트에 자동으로 반응하여(AWS Organizations 자동 배포 기능) 각 멤버 계정에 VPC와 TGW VPC 연결을 자동으로 프로비저닝합니다. TGW ID를 사용하면 공유된 관리 계정의 TGW에 연결을 직접 연결할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — SCP(서비스 제어 정책)는 IAM 권한을 제어하는 정책으로, 리소스를 공유하거나 네트워크 연결을 설정하는 메커니즘이 아닙니다. TGW 공유에 SCP를 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 피어링 TGW 연결은 서로 다른 리전 또는 다른 AWS 계정의 두 TGW 간 연결에 사용됩니다. 멤버 계정의 VPC를 관리 계정의 단일 TGW에 연결하는 데는 VPC 연결(VPC attachment)이 올바른 방법입니다.</p>
<p><span class="mark-no">❌ E</span> — Service Catalog는 제품 카탈로그를 통해 리소스를 프로비저닝하는 서비스로, 특정 네트워크 리소스(TGW)를 계정 간에 직접 공유하는 기능을 제공하지 않습니다.</p>`,
    disc: [{ ans:'A, C', txt:'RAM shares the TGW from the management account to all org member accounts. CloudFormation StackSets with auto-deployment creates VPCs and VPC TGW attachments in new member accounts automatically using the shared TGW ID.' }]
  },
];
