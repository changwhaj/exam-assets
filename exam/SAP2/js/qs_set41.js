window.QS_SET41 = [
  {
    n: 401,

    en: `<p>A company wants to design a disaster recovery (DR) solution for an application that runs in the company's data center. The application writes to an SMB file share and creates a copy on a second file share. Both file shares are in the data center. The application uses two types of files: metadata files and image files.</p><p>The company wants to store the copy on AWS. The company needs the ability to use SMB to access the data from either the data center or AWS if a disaster occurs. The copy of the data is rarely accessed but must be available within 5 minutes.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>회사는 회사 데이터 센터에서 실행되는 애플리케이션에 대한 재해 복구(DR) 솔루션을 설계하려고 합니다. 애플리케이션은 SMB 파일 공유에 쓰고 두 번째 파일 공유에 복사본을 만듭니다. 두 파일 공유는 모두 데이터 센터에 있습니다. 애플리케이션은 메타데이터 파일과 이미지 파일이라는 두 가지 유형의 파일을 사용합니다.</p><p>회사는 복사본을 AWS에 저장하려고 합니다. 회사는 재해가 발생할 경우 SMB를 사용하여 데이터 센터나 AWS의 데이터에 액세스할 수 있는 능력이 필요합니다. 데이터 사본은 거의 액세스되지 않지만 5분 이내에 사용 가능해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Deploy AWS Outposts with Amazon S3 storage. Configure a Windows Amazon EC2 instance on Outposts as a file server.`, ko:`Amazon S3 스토리지를 사용하여 AWS Outposts를 배포합니다. Outposts에서 Windows Amazon EC2 인스턴스를 파일 서버로 구성합니다.` },
      { k:'B', en:`Deploy an Amazon FSx File Gateway. Configure an Amazon FSx for Windows File Server Multi-AZ file system that uses SSD storage.`, ko:`Amazon FSx 파일 게이트웨이를 배포합니다. SSD 스토리지를 사용하는 Windows 파일 서버 다중 AZ 파일 시스템용 Amazon FSx를 구성합니다.` },
      { k:'C', en:`Deploy an Amazon S3 File Gateway. Configure the S3 File Gateway to use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) for the metadata files and to use S3 Glacier Deep Archive for the image files.`, ko:`Amazon S3 파일 게이트웨이를 배포합니다. 메타데이터 파일에 Amazon S3 Standard-Infrequent Access(S3 Standard-IA)를 사용하고 이미지 파일에 S3 Glacier Deep Archive를 사용하도록 S3 파일 게이트웨이를 구성합니다.` },
      { k:'D', en:`Deploy an Amazon S3 File Gateway. Configure the S3 File Gateway to use Amazon S3 Standard-Infrequent Access (S3 Standard-IA) for the metadata files and image files.`, ko:`Amazon S3 파일 게이트웨이를 배포합니다. 메타데이터 파일 및 이미지 파일에 Amazon S3 Standard-Infrequent Access(S3 Standard-IA)를 사용하도록 S3 파일 게이트웨이를 구성합니다.` }
    ],

    answer: ['D'],
    vote: '71% D',

    explain: `<p><span class="mark-ok">✅ D — Amazon S3 파일 게이트웨이 + S3 Standard-IA</span></p>
<p><strong>Amazon S3 파일 게이트웨이</strong>는 SMB 파일 공유를 통해 S3에 저장된 데이터에 온프레미스와 AWS 모두에서 액세스할 수 있도록 합니다. 데이터가 거의 액세스되지 않으므로 <strong>S3 Standard-IA</strong>가 비용 최적화에 적합하며, 5분 이내 가용성 요건을 충족합니다(S3 Standard-IA는 즉시 검색 지원). 메타데이터 파일과 이미지 파일 모두 동일한 스토리지 클래스를 사용하는 것이 관리를 단순화합니다.</p>
<p><a href="https://docs.aws.amazon.com/filegateway/latest/files3/CreatingAnSMBFileShare.html" target="_blank">AWS 공식 문서 - S3 파일 게이트웨이 SMB 파일 공유</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — AWS Outposts는 온프레미스에 AWS 인프라를 배포하는 것으로 DR 솔루션으로 적합하지 않으며 비용이 매우 높습니다.</p>
<p><span class="mark-no">❌ B</span> — FSx for Windows File Server Multi-AZ + SSD는 고성능을 제공하지만 거의 액세스하지 않는 DR 데이터에는 과도하게 비싼 솔루션입니다.</p>
<p><span class="mark-no">❌ C</span> — S3 Glacier Deep Archive는 검색에 12시간 이상 소요되므로 5분 이내 가용성 요건을 충족하지 못합니다.</p>`,

    disc: [
      { ans:'D (71%)', txt:'S3 파일 게이트웨이는 SMB를 지원하여 데이터 센터와 AWS 양쪽에서 접근 가능하며, S3 Standard-IA는 즉시 검색 가능하면서 비용 효율적입니다. DR용 데이터에 Glacier는 5분 요건을 충족하지 못합니다.' },
      { ans:'B (29%)', txt:'FSx 파일 게이트웨이도 SMB를 지원하지만 Multi-AZ + SSD 구성은 거의 액세스하지 않는 DR 데이터에 과도한 비용이 발생합니다.' }
    ]
  },

  {
    n: 402,

    en: `<p>A company is creating a solution that can move 400 employees into a remote working environment in the event of an unexpected disaster. The user desktops have a mix of Windows and Linux operating systems. Multiple types of software, such as web browsers and mail clients, are installed on each desktop.</p><p>A solutions architect needs to implement a solution that can be integrated with the company's on-premises Active Directory to allow employees to use their existing identity credentials. The solution must provide multifactor authentication (MFA) and must replicate the user experience from the existing desktops.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사에서는 예상치 못한 재해가 발생할 경우 400명의 직원을 원격 근무 환경으로 이동할 수 있는 솔루션을 만들고 있습니다. 사용자 데스크탑에는 Windows와 Linux 운영 체제가 혼합되어 있습니다. 웹 브라우저, 메일 클라이언트 등 다양한 유형의 소프트웨어가 각 데스크탑에 설치됩니다.</p><p>솔루션 설계자는 직원이 기존 ID 자격 증명을 사용할 수 있도록 회사의 온프레미스 Active Directory와 통합할 수 있는 솔루션을 구현해야 합니다. 솔루션은 다중 인증(MFA)을 제공해야 하며 기존 데스크탑의 사용자 경험을 복제해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Use Amazon WorkSpaces for the cloud desktop service. Set up a VPN connection to the on-premises network. Create an AD Connector, and connect to the on-premises Active Directory. Activate MFA for Amazon WorkSpaces by using the AWS Management Console.`, ko:`클라우드 데스크탑 서비스에는 Amazon WorkSpaces를 사용하십시오. 온프레미스 네트워크에 대한 VPN 연결을 설정합니다. AD 커넥터를 생성하고 온프레미스 Active Directory에 연결합니다. AWS Management Console을 사용하여 Amazon WorkSpaces에 대한 MFA를 활성화합니다.` },
      { k:'B', en:`Use Amazon AppStream 2.0 as an application streaming service. Configure Desktop View for the employees. Set up a VPN connection to the on-premises network. Set up Active Directory Federation Services (AD FS) on premises. Connect the VPC network to AD FS through the VPN connection.`, ko:`Amazon AppStream 2.0을 애플리케이션 스트리밍 서비스로 사용하십시오. 직원을 위한 데스크탑 보기를 구성하십시오. 온프레미스 네트워크에 대한 VPN 연결을 설정합니다. 온프레미스에 AD FS(Active Directory Federation Services)를 설정합니다. VPN 연결을 통해 VPC 네트워크를 AD FS에 연결합니다.` },
      { k:'C', en:`Use Amazon WorkSpaces for the cloud desktop service. Set up a VPN connection to the on-premises network. Create an AD Connector, and connect to the on-premises Active Directory. Configure a RADIUS server for MFA.`, ko:`클라우드 데스크탑 서비스에는 Amazon WorkSpaces를 사용하십시오. 온프레미스 네트워크에 대한 VPN 연결을 설정합니다. AD 커넥터를 생성하고 온프레미스 Active Directory에 연결합니다. MFA용 RADIUS 서버를 구성합니다.` },
      { k:'D', en:`Use Amazon AppStream 2.0 as an application streaming service. Set up Active Directory Federation Services on premises. Configure MFA to grant users access on AppStream 2.0.`, ko:`Amazon AppStream 2.0을 애플리케이션 스트리밍 서비스로 사용하십시오. 온프레미스에 Active Directory Federation Services를 설정합니다. AppStream 2.0에 대한 사용자 액세스 권한을 부여하도록 MFA를 구성합니다.` }
    ],

    answer: ['C'],
    vote: '83% C',

    explain: `<p><span class="mark-ok">✅ C — Amazon WorkSpaces + AD Connector + RADIUS 서버 MFA</span></p>
<p><strong>Amazon WorkSpaces</strong>는 Windows와 Linux 데스크탑을 모두 지원하여 기존 사용자 경험을 복제합니다. AD Connector를 통해 온프레미스 Active Directory와 통합하여 기존 자격 증명을 사용할 수 있습니다. Amazon WorkSpaces에서 MFA를 활성화하려면 <strong>RADIUS 서버</strong>가 필요합니다. AWS 관리 콘솔만으로 MFA를 활성화하는 방식(옵션 A)은 RADIUS 없이는 실제 MFA를 구현할 수 없습니다.</p>
<p><a href="https://aws.amazon.com/blogs/security/how-to-enable-multi-factor-authentication-for-amazon-workspaces-and-amazon-quicksight-by-using-microsoft-ad-and-on-premises-credentials/" target="_blank">AWS 공식 문서 - WorkSpaces MFA 활성화</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — AWS 관리 콘솔에서 WorkSpaces MFA를 "활성화"하는 것만으로는 실제 MFA가 구현되지 않습니다. RADIUS 서버가 필수입니다.</p>
<p><span class="mark-no">❌ B</span> — AppStream 2.0은 애플리케이션 스트리밍 서비스로 완전한 데스크탑 경험을 복제하지 않습니다. AD FS만으로는 MFA가 구현되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — AppStream 2.0은 완전한 데스크탑 경험을 제공하지 못하며 AD FS 단독으로 MFA를 "구성"하는 방식은 불완전합니다.</p>`,

    disc: [
      { ans:'C (83%)', txt:'WorkSpaces는 Windows/Linux 혼합 환경을 지원하여 기존 데스크탑 경험을 복제합니다. WorkSpaces에서 MFA는 반드시 RADIUS 서버를 통해 구현해야 하며, AWS 콘솔의 "활성화" 버튼만으로는 MFA가 구현되지 않습니다.' }
    ]
  },

  {
    n: 403,

    en: `<p>A company has deployed an Amazon Connect contact center. Contact center agents are reporting large numbers of computer-generated calls. The company is concerned about the cost and productivity effects of these calls. The company wants a solution that will allow agents to flag the call as spam and automatically block the numbers from going to an agent in the future.</p><p>What is the MOST operationally efficient solution to meet these requirements?</p>`,
    ko: `<p>한 회사에서 Amazon Connect 연락 센터를 배포했습니다. 연락 센터 상담원은 컴퓨터에서 생성된 수많은 통화를 보고하고 있습니다. 회사는 이러한 통화로 인한 비용 및 생산성 영향을 우려하고 있습니다. 회사는 상담원이 해당 통화를 스팸으로 표시하고 향후 상담원에게 전달되는 번호를 자동으로 차단할 수 있는 솔루션을 원합니다.</p><p>이러한 요구 사항을 충족하는 가장 운영 효율적인 솔루션은 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Customize the Contact Control Panel (CCP) by adding a flag call button that will invoke an AWS Lambda function that calls the UpdateContactAttributes API. Use an Amazon DynamoDB table to store the spam numbers. Modify the contact flows to look for the updated attribute and to use a Lambda function to read and write to the DynamoDB table.`, ko:`UpdateContactAttributes API를 호출하는 AWS Lambda 함수를 호출하는 플래그 호출 버튼을 추가하여 CCP(Contact Control Panel)를 사용자 지정합니다. Amazon DynamoDB 테이블을 사용하여 스팸 번호를 저장합니다. 업데이트된 속성을 찾고 Lambda 함수를 사용하여 DynamoDB 테이블을 읽고 쓰도록 고객 응대 흐름을 수정합니다.` },
      { k:'B', en:`Use a Contact Lens for Amazon Connect rule that will look for spam calls. Use an Amazon DynamoDB table to store the spam numbers. Modify the contact flows to look for the rule and to invoke an AWS Lambda function to read and write to the DynamoDB table.`, ko:`스팸 전화를 찾는 Amazon Connect 규칙용 콘택트 렌즈를 사용합니다. Amazon DynamoDB 테이블을 사용하여 스팸 번호를 저장합니다. 규칙을 찾고 AWS Lambda 함수를 호출하여 DynamoDB 테이블을 읽고 쓰도록 고객 응대 흐름을 수정합니다.` },
      { k:'C', en:`Use an Amazon DynamoDB table to store the spam numbers. Create a quick connect that the agents can transfer the spam call to from the Contact Control Panel (CCP). Modify the quick connect contact flow to invoke an AWS Lambda function to write to the DynamoDB table.`, ko:`Amazon DynamoDB 테이블을 사용하여 스팸 번호를 저장합니다. 상담원이 CCP(Contact Control Panel)에서 스팸 전화를 연결할 수 있는 빠른 연결을 만듭니다. DynamoDB 테이블에 쓰기 위해 AWS Lambda 함수를 호출하도록 빠른 연결 고객 응대 흐름을 수정합니다.` },
      { k:'D', en:`Modify the initial contact flow to ask for caller input. If the agent does not receive input, the agent should mark the caller as spam. Use an Amazon DynamoDB table to store the spam numbers. Use an AWS Lambda function to read and write to the DynamoDB table.`, ko:`발신자 입력을 요청하도록 초기 고객 응대 흐름을 수정합니다. 에이전트가 입력을 받지 못한 경우 에이전트는 발신자를 스팸으로 표시해야 합니다. Amazon DynamoDB 테이블을 사용하여 스팸 번호를 저장합니다. AWS Lambda 함수를 사용하여 DynamoDB 테이블을 읽고 씁니다.` }
    ],

    answer: ['A'],
    vote: '82% A',

    explain: `<p><span class="mark-ok">✅ A — CCP 커스터마이즈 + UpdateContactAttributes + DynamoDB + Lambda</span></p>
<p>CCP(Contact Control Panel)에 "스팸 플래그" 버튼을 추가하면 상담원이 최소한의 작업으로 통화를 스팸으로 표시할 수 있습니다. Lambda 함수가 <strong>UpdateContactAttributes API</strong>를 호출하여 해당 통화에 플래그를 설정하고 DynamoDB에 번호를 저장합니다. 고객 응대 흐름에서 수신 번호를 DynamoDB와 대조하여 스팸 번호를 자동으로 차단합니다. 이것이 가장 운영 효율적인 완전 자동화 솔루션입니다.</p>
<p><a href="https://repost.aws/knowledge-center/connect-deny-list-numbers" target="_blank">AWS 공식 문서 - Amazon Connect 거부 목록</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — Contact Lens는 통화 분석 도구로 상담원이 직접 스팸 플래그를 설정하는 방식이 아니며, 스팸 통화 자동 탐지 정확도가 제한적입니다.</p>
<p><span class="mark-no">❌ C</span> — 빠른 연결(Quick Connect)을 이용한 통화 전환 방식은 상담원이 추가 단계를 수행해야 하며 A보다 덜 직관적입니다.</p>
<p><span class="mark-no">❌ D</span> — 초기 흐름에서 발신자 입력을 요청하는 방식은 합법적인 무음 통화(예: 청각 장애인 발신자)를 차단할 수 있으며 상담원이 직접 플래그를 설정하는 것이 아닙니다.</p>`,

    disc: [
      { ans:'A (82%)', txt:'CCP에 플래그 버튼을 추가하고 UpdateContactAttributes + Lambda + DynamoDB 조합으로 상담원이 원클릭으로 스팸 번호를 차단 목록에 추가하는 완전 자동화 솔루션입니다.' }
    ]
  },

  {
    n: 404,

    en: `<p>A company has mounted sensors to collect information about environmental parameters such as humidity and light throughout all the company's factories. The company needs to stream and analyze the data in the AWS Cloud in real time. If any of the parameters fall out of acceptable ranges, the factory operations team must receive a notification immediately.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사는 회사 전체 공장 전체에 습도, 빛과 같은 환경 매개변수에 대한 정보를 수집하기 위해 센서를 장착했습니다. 회사는 AWS 클라우드의 데이터를 실시간으로 스트리밍하고 분석해야 합니다. 매개변수 중 하나라도 허용 가능한 범위를 벗어나면 공장 운영팀은 즉시 알림을 받아야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Stream the data to an Amazon Kinesis Data Firehose delivery stream. Use AWS Step Functions to consume and analyze the data in the Kinesis Data Firehose delivery stream. Use Amazon Simple Notification Service (Amazon SNS) to notify the operations team.`, ko:`데이터를 Amazon Kinesis Data Firehose 전송 스트림으로 스트리밍합니다. AWS Step Functions를 사용하여 Kinesis Data Firehose 전송 스트림의 데이터를 사용하고 분석합니다. Amazon Simple 알림 서비스(Amazon SNS)를 사용하여 운영팀에 알립니다.` },
      { k:'B', en:`Stream the data to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster. Set up a trigger in Amazon MSK to invoke an AWS Fargate task to analyze the data. Use Amazon Simple Email Service (Amazon SES) to notify the operations team.`, ko:`데이터를 Amazon Managed Streaming for Apache Kafka(Amazon MSK) 클러스터로 스트리밍합니다. Amazon MSK에서 트리거를 설정하여 AWS Fargate 작업을 호출하여 데이터를 분석합니다. Amazon Simple Email Service(Amazon SES)를 사용하여 운영 팀에 알립니다.` },
      { k:'C', en:`Stream the data to an Amazon Kinesis data stream. Create an AWS Lambda function to consume the Kinesis data stream and to analyze the data. Use Amazon Simple Notification Service (Amazon SNS) to notify the operations team.`, ko:`데이터를 Amazon Kinesis 데이터 스트림으로 스트리밍합니다. Kinesis 데이터 스트림을 사용하고 데이터를 분석하는 AWS Lambda 함수를 생성합니다. Amazon Simple 알림 서비스(Amazon SNS)를 사용하여 운영팀에 알립니다.` },
      { k:'D', en:`Stream the data to an Amazon Kinesis Data Analytics application. Use an automatically scaled and containerized service in Amazon Elastic Container Service (Amazon ECS) to consume and analyze the data. Use Amazon Simple Email Service (Amazon SES) to notify the operations team.`, ko:`데이터를 Amazon Kinesis Data Analytics 애플리케이션으로 스트리밍합니다. Amazon Elastic Container Service(Amazon ECS)에서 자동으로 확장되고 컨테이너화된 서비스를 사용하여 데이터를 사용하고 분석합니다. Amazon Simple Email Service(Amazon SES)를 사용하여 운영 팀에 알립니다.` }
    ],

    answer: ['C'],
    vote: '92% C',

    explain: `<p><span class="mark-ok">✅ C — Kinesis Data Streams + Lambda + SNS</span></p>
<p><strong>Amazon Kinesis Data Streams</strong>는 센서 데이터의 실시간 스트리밍을 지원합니다. <strong>AWS Lambda</strong>가 스트림을 소비하여 실시간으로 데이터를 분석하고, 허용 범위를 벗어난 경우 <strong>Amazon SNS</strong>를 통해 운영팀에 즉각적인 알림을 보냅니다. SNS는 SMS, 이메일, 모바일 푸시 등 다양한 알림 채널을 지원하여 "즉시 알림" 요건에 최적입니다.</p>
<p><a href="https://docs.aws.amazon.com/streams/latest/dev/building-consumers.html" target="_blank">AWS 공식 문서 - Kinesis Data Streams 소비자</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — Kinesis Data Firehose는 스트림 데이터를 S3, Redshift 등 대상에 전달하는 ETL 도구로 실시간 분석에 적합하지 않습니다. Step Functions도 스트리밍 데이터 소비에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — Amazon SES는 이메일 서비스로 즉각적인 알림에 SNS보다 적합하지 않습니다. MSK의 트리거 방식도 추가적인 복잡성을 더합니다.</p>
<p><span class="mark-no">❌ D</span> — SES는 이메일 전용이며 즉각적인 다채널 알림에 적합하지 않습니다. ECS 컨테이너는 Lambda보다 관리 오버헤드가 높습니다.</p>`,

    disc: [
      { ans:'C (92%)', txt:'Kinesis Data Streams로 실시간 수집 → Lambda로 즉시 분석 → SNS로 즉각 알림의 표준 IoT 실시간 모니터링 패턴입니다. SES가 포함된 옵션은 즉각적인 알림 요건에 부적합합니다.' }
    ]
  },

  {
    n: 405,

    en: `<p>A company is preparing to deploy an Amazon Elastic Kubernetes Service (Amazon EKS) cluster for a workload. The company expects the cluster to support an unpredictable number of stateless pods. Many of the pods will be created during a short time period as the workload automatically scales the number of replicas that the workload uses.</p><p>Which solution will MAXIMIZE node resilience?</p>`,
    ko: `<p>한 회사가 워크로드를 위해 Amazon Elastic Kubernetes Service(Amazon EKS) 클러스터 배포를 준비하고 있습니다. 회사는 클러스터가 예측할 수 없는 수의 상태 비저장 포드를 지원할 것으로 기대합니다. 워크로드가 사용하는 복제본 수를 자동으로 확장하므로 짧은 기간 동안 많은 포드가 생성됩니다.</p><p>노드 복원력을 극대화하는 솔루션은 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Use a separate launch template to deploy the EKS control plane into a second cluster that is separate from the workload node groups.`, ko:`별도의 시작 템플릿을 사용하여 워크로드 노드 그룹과 별개인 두 번째 클러스터에 EKS 제어 플레인을 배포합니다.` },
      { k:'B', en:`Update the workload node groups. Use a smaller number of node groups and larger instances in the node groups.`, ko:`워크로드 노드 그룹을 업데이트합니다. 더 적은 수의 노드 그룹과 더 큰 인스턴스를 노드 그룹에 사용하세요.` },
      { k:'C', en:`Configure the Kubernetes Cluster Autoscaler to ensure that the compute capacity of the workload node groups stays underprovisioned.`, ko:`워크로드 노드 그룹의 컴퓨팅 용량이 부족하게 프로비저닝되도록 Kubernetes Cluster Autoscaler를 구성합니다.` },
      { k:'D', en:`Configure the workload to use topology spread constraints that are based on Availability Zone.`, ko:`가용 영역을 기반으로 하는 토폴로지 분산 제약 조건을 사용하도록 워크로드를 구성합니다.` }
    ],

    answer: ['D'],
    vote: '88% D',

    explain: `<p><span class="mark-ok">✅ D — 가용 영역 기반 토폴로지 분산 제약 조건</span></p>
<p><strong>Topology Spread Constraints</strong>를 사용하여 포드를 여러 가용 영역에 균등하게 분산시키면 노드 복원력이 극대화됩니다. 하나의 AZ에서 장애가 발생해도 다른 AZ의 노드와 포드가 워크로드를 계속 처리합니다. 질문은 "포드 복원력"이 아닌 <strong>노드 복원력</strong>을 묻고 있으며, 여러 AZ에 걸친 노드 분산이 핵심입니다.</p>
<p><a href="https://aws.amazon.com/blogs/containers/getting-visibility-into-your-amazon-eks-cross-az-pod-to-pod-network-bytes/" target="_blank">AWS 공식 문서 - EKS 고가용성 모범 사례</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — EKS 제어 플레인을 별도 클러스터에 배포하는 것은 노드 복원력과 관련이 없습니다.</p>
<p><span class="mark-no">❌ B</span> — 더 적은 노드 그룹과 더 큰 인스턴스를 사용하면 단일 실패 지점이 증가하여 복원력이 오히려 감소합니다.</p>
<p><span class="mark-no">❌ C</span> — 컴퓨팅 용량을 의도적으로 부족하게 프로비저닝하면 피크 시간대에 포드가 스케줄링되지 않을 수 있어 복원력을 감소시킵니다.</p>`,

    disc: [
      { ans:'D (88%)', txt:'토폴로지 분산 제약 조건으로 포드를 여러 AZ의 노드에 분산시키면 AZ 장애에 대한 노드 복원력이 극대화됩니다.' }
    ]
  },

  {
    n: 406,

    en: `<p>A company needs to implement a disaster recovery (DR) plan for a web application. The application runs in a single AWS Region.</p><p>The application uses microservices that run in containers. The containers are hosted on AWS Fargate in Amazon Elastic Container Service (Amazon ECS). The application has an Amazon RDS for MySQL DB instance as its data layer and uses Amazon Route 53 for DNS resolution. An Amazon CloudWatch alarm invokes an Amazon EventBridge rule if the application experiences a failure.</p><p>A solutions architect must design a DR solution to provide application recovery to a separate Region. The solution must minimize the time that is necessary to recover from a failure.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>회사는 웹 애플리케이션에 대한 재해 복구(DR) 계획을 구현해야 합니다. 애플리케이션은 단일 AWS 리전에서 실행됩니다.</p><p>애플리케이션은 컨테이너에서 실행되는 마이크로서비스를 사용합니다. 컨테이너는 Amazon ECS의 AWS Fargate에서 호스팅됩니다. 애플리케이션에는 데이터 계층으로 MySQL용 Amazon RDS DB 인스턴스가 있고 DNS 확인을 위해 Amazon Route 53을 사용합니다. 애플리케이션에 오류가 발생하면 Amazon CloudWatch 경보는 Amazon EventBridge 규칙을 호출합니다.</p><p>솔루션 설계자는 별도의 지역에 애플리케이션 복구를 제공하도록 DR 솔루션을 설계해야 합니다. 솔루션은 오류로부터 복구하는 데 필요한 시간을 최소화해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Setup a second ECS cluster and ECS service on Fargate in the separate Region. Create an AWS Lambda function to perform the following actions: take a snapshot of the RDS DB instance, copy the snapshot to the separate Region, create a new RDS DB instance from the snapshot, and update Route 53 to route traffic to the second ECS cluster. Update the EventBridge rule to add a target that will invoke the Lambda function.`, ko:`별도의 리전에 있는 Fargate에 두 번째 ECS 클러스터와 ECS 서비스를 설정합니다. RDS DB 인스턴스의 스냅샷 생성, 스냅샷을 별도의 리전에 복사, 스냅샷에서 새 RDS DB 인스턴스 생성, Route 53을 업데이트하여 트래픽을 두 번째 ECS 클러스터로 라우팅하는 Lambda 함수를 생성합니다. EventBridge 규칙을 업데이트하여 Lambda 함수를 호출할 대상을 추가합니다.` },
      { k:'B', en:`Create an AWS Lambda function that creates a second ECS cluster and ECS service in the separate Region. Configure the Lambda function to perform the following actions: take a snapshot of the RDS DB instance, copy the snapshot to the separate Region, create a new RDS DB instance from the snapshot, and update Route 53 to route traffic to the second ECS cluster. Update the EventBridge rule to add a target that will invoke the Lambda function.`, ko:`별도의 지역에 두 번째 ECS 클러스터와 ECS 서비스를 생성하는 AWS Lambda 함수를 생성합니다. RDS DB 인스턴스의 스냅샷 생성, 별도의 리전에 복사, 스냅샷에서 새 RDS DB 인스턴스 생성, Route 53 업데이트를 수행하도록 Lambda 함수를 구성합니다. EventBridge 규칙을 업데이트하여 Lambda 함수를 호출할 대상을 추가합니다.` },
      { k:'C', en:`Setup a second ECS cluster and ECS service on Fargate in the separate Region. Create a cross-Region read replica of the RDS DB instance in the separate Region. Create an AWS Lambda function to promote the read replica to the primary database. Configure the Lambda function to update Route 53 to route traffic to the second ECS cluster. Update the EventBridge rule to add a target that will invoke the Lambda function.`, ko:`별도의 지역에 있는 Fargate에 두 번째 ECS 클러스터와 ECS 서비스를 설정합니다. 별도의 리전에서 RDS DB 인스턴스의 리전 간 읽기 전용 복제본을 생성합니다. 읽기 전용 복제본을 기본 데이터베이스로 승격하는 AWS Lambda 함수를 생성합니다. Route 53을 업데이트하여 두 번째 ECS 클러스터로 트래픽을 라우팅하도록 Lambda 함수를 구성합니다. EventBridge 규칙을 업데이트하여 Lambda 함수를 호출할 대상을 추가합니다.` },
      { k:'D', en:`Setup a second ECS cluster and ECS service on Fargate in the separate Region. Take a snapshot of the RDS DB instance. Convert the snapshot to an Amazon DynamoDB global table. Create an AWS Lambda function to update Route 53 to route traffic to the second ECS cluster. Update the EventBridge rule to add a target that will invoke the Lambda function.`, ko:`별도 리전의 Fargate에 두 번째 ECS 클러스터와 ECS 서비스를 설정합니다. RDS DB 인스턴스의 스냅샷을 찍습니다. 스냅샷을 Amazon DynamoDB 전역 테이블로 변환합니다. 두 번째 ECS 클러스터로 트래픽을 라우팅하도록 Route 53을 업데이트하는 AWS Lambda 함수를 생성합니다. EventBridge 규칙을 업데이트하여 Lambda 함수를 호출할 대상을 추가합니다.` }
    ],

    answer: ['C'],
    vote: '100% C',

    explain: `<p><span class="mark-ok">✅ C — 두 번째 ECS 클러스터 + RDS 리전 간 읽기 복제본 + Lambda 승격</span></p>
<p>복구 시간을 최소화하려면 대상 리전에 인프라를 미리 준비해야 합니다. <strong>리전 간 RDS 읽기 복제본</strong>은 지속적으로 데이터를 동기화하여 재해 시 Lambda 함수가 즉시 읽기 복제본을 기본 DB로 승격시킬 수 있습니다. 스냅샷 방식(A, B)은 스냅샷 생성 → 복사 → 새 인스턴스 생성에 수십 분이 소요됩니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.XRgn.html" target="_blank">AWS 공식 문서 - RDS 리전 간 읽기 복제본</a></p>`,

    wrong: `<p><span class="mark-no">❌ A, B</span> — 재해 발생 시 스냅샷 생성, 리전 간 복사, 새 DB 인스턴스 생성 과정이 수십 분 소요되어 복구 시간이 크게 증가합니다. B는 추가로 ECS 클러스터 자체도 재해 시 생성해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — RDS MySQL 스냅샷을 DynamoDB 글로벌 테이블로 변환하는 것은 아키텍처 변경으로 애플리케이션 코드 수정이 필요합니다.</p>`,

    disc: [
      { ans:'C (100%)', txt:'읽기 복제본은 지속적으로 동기화되므로 RPO가 매우 낮습니다. 재해 시 Lambda가 복제본 승격 + Route 53 업데이트를 수행하여 RTO도 최소화됩니다.' }
    ]
  },

  {
    n: 407,

    en: `<p>A company has AWS accounts that are in an organization in AWS Organizations. The company wants to track Amazon EC2 usage as a metric. The company's architecture team must receive a daily alert if the EC2 usage is more than 10% higher than the average EC2 usage from the last 30 days.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>회사에는 AWS Organizations의 조직에 속한 AWS 계정이 있습니다. 회사는 Amazon EC2 사용량을 지표로 추적하려고 합니다. 회사의 아키텍처 팀은 EC2 사용량이 지난 30일 동안의 평균 EC2 사용량보다 10% 이상 높은 경우 매일 알림을 받아야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Configure AWS Budgets in the organization's management account. Specify a usage type of EC2 running hours. Specify a daily period. Set the budget amount to be 10% more than the reported average usage for the last 30 days from AWS Cost Explorer. Configure an alert to notify the architecture team if the usage threshold is met.`, ko:`조직의 관리 계정에서 AWS 예산을 구성합니다. EC2 실행 시간의 사용 유형을 지정합니다. 일일 기간을 지정합니다. AWS Cost Explorer에서 지난 30일 동안 보고된 평균 사용량보다 10% 더 높게 예산 금액을 설정합니다. 사용량 임계값이 충족되면 아키텍처 팀에 알리도록 경고를 구성합니다.` },
      { k:'B', en:`Configure AWS Cost Anomaly Detection in the organization's management account. Configure a monitor type of AWS Service. Apply a filter of Amazon EC2. Configure an alert subscription to notify the architecture team if the usage is 10% more than the average usage for the last 30 days.`, ko:`조직의 관리 계정에서 AWS 비용 이상 탐지를 구성합니다. AWS 서비스의 모니터 유형을 구성합니다. Amazon EC2 필터를 적용합니다. 사용량이 지난 30일 동안의 평균 사용량보다 10% 많은 경우 아키텍처 팀에 알리도록 경고 구독을 구성합니다.` },
      { k:'C', en:`Enable AWS Trusted Advisor in the organization's management account. Configure a cost optimization advisory alert to notify the architecture team if the EC2 usage is 10% more than the reported average usage for the last 30 days.`, ko:`조직의 관리 계정에서 AWS Trusted Advisor를 활성화합니다. EC2 사용량이 지난 30일 동안 보고된 평균 사용량보다 10% 더 많은 경우 아키텍처 팀에 알리도록 비용 최적화 권고 경고를 구성합니다.` },
      { k:'D', en:`Configure Amazon Detective in the organization's management account. Configure an EC2 usage anomaly alert to notify the architecture team if Detective identifies a usage anomaly of more than 10%.`, ko:`조직의 관리 계정에서 Amazon Detective를 구성합니다. Detective가 10%가 넘는 사용 이상을 식별한 경우 아키텍처 팀에 알리도록 EC2 사용 이상 경고를 구성합니다.` }
    ],

    answer: ['A'],
    vote: '72% A',

    explain: `<p><span class="mark-ok">✅ A — AWS Budgets + EC2 실행 시간 사용 유형 + 일일 기간</span></p>
<p><strong>AWS Budgets</strong>는 EC2 실행 시간(Running Hours)과 같은 <strong>사용량(Usage)</strong>을 직접 추적할 수 있습니다. 일일 기간을 설정하고 지난 30일 평균의 110%를 예산으로 설정하면 일일 사용량 초과 시 알림을 받을 수 있습니다. Cost Anomaly Detection(B)은 비용 이상에 특화되어 있으며 사용량(시간)을 직접 추적하지 않습니다.</p>
<p><a href="https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html" target="_blank">AWS 공식 문서 - AWS Budgets 비용 및 사용량 관리</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — AWS Cost Anomaly Detection은 비용($) 이상을 탐지하는 서비스로 EC2 사용량(Running Hours)을 직접 추적하는 기능이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Trusted Advisor는 비용 최적화 권고 사항을 제공하지만 사용자 정의 임계값으로 일일 경고를 설정하는 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon Detective는 보안 조사 도구로 EC2 사용량 추적 및 비용 알림과 관련이 없습니다.</p>`,

    disc: [
      { ans:'A (72%)', txt:'AWS Budgets는 EC2 실행 시간을 사용 유형으로 지정하여 일일 기간으로 사용량 예산을 설정하고 초과 시 알림을 받을 수 있는 솔루션입니다.' },
      { ans:'B (28%)', txt:'Cost Anomaly Detection이 EC2 필터로 이상을 감지할 수 있다는 주장이 있으나, 비용 기반 서비스이며 정확한 10% 사용량 임계값 설정에 부적합합니다.' }
    ]
  },

  {
    n: 408,

    en: `<p>An e-commerce company is revamping its IT infrastructure and is planning to use AWS services. The company's CIO has asked a solutions architect to design a simple, highly available, and loosely coupled order processing application. The application is responsible for receiving and processing orders before storing them in an Amazon DynamoDB table. The application has a sporadic traffic pattern and should be able to scale during marketing campaigns to process the orders with minimal delays.</p><p>Which of the following is the MOST reliable approach to meet the requirements?</p>`,
    ko: `<p>한 전자 상거래 회사는 IT 인프라를 개편하고 있으며 AWS 서비스를 사용할 계획입니다. 회사의 CIO는 솔루션 설계자에게 간단하고 가용성이 높으며 느슨하게 결합된 주문 처리 애플리케이션을 설계해 달라고 요청했습니다. 애플리케이션은 주문을 Amazon DynamoDB 테이블에 저장하기 전에 수신하고 처리하는 역할을 담당합니다. 애플리케이션에는 산발적인 트래픽 패턴이 있으며 마케팅 캠페인 중에 확장하여 지연을 최소화하면서 주문을 처리할 수 있어야 합니다.</p><p>다음 중 요구 사항을 충족하기 위한 가장 신뢰할 수 있는 접근 방식은 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Receive the orders in an Amazon EC2-hosted database and use EC2 instances to process them.`, ko:`Amazon EC2 호스팅 데이터베이스에서 주문을 받고 EC2 인스턴스를 사용하여 처리합니다.` },
      { k:'B', en:`Receive the orders in an Amazon SQS queue and invoke an AWS Lambda function to process them.`, ko:`Amazon SQS 대기열에서 주문을 받고 AWS Lambda 함수를 호출하여 처리합니다.` },
      { k:'C', en:`Receive the orders using the AWS Step Functions program and launch an Amazon ECS container to process them.`, ko:`AWS Step Functions 프로그램을 사용하여 주문을 받고 Amazon ECS 컨테이너를 시작하여 처리합니다.` },
      { k:'D', en:`Receive the orders in Amazon Kinesis Data Streams and use Amazon EC2 instances to process them.`, ko:`Amazon Kinesis Data Streams에서 주문을 받고 Amazon EC2 인스턴스를 사용하여 처리합니다.` }
    ],

    answer: ['B'],
    vote: '73% B',

    explain: `<p><span class="mark-ok">✅ B — Amazon SQS + AWS Lambda</span></p>
<p><strong>Amazon SQS</strong>는 느슨하게 결합된(Loosely Coupled) 아키텍처의 핵심으로 주문을 버퍼링합니다. 마케팅 캠페인 중 트래픽 급증 시 SQS가 주문을 보관하고 <strong>Lambda</strong>가 자동으로 확장되어 처리합니다. Lambda는 서버리스로 산발적인 트래픽 패턴에 비용 효율적이며, SQS와의 조합이 단순하고 가용성이 높은 솔루션을 제공합니다.</p>
<p><a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html" target="_blank">AWS 공식 문서 - Lambda SQS 이벤트 소스</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — EC2 호스팅 데이터베이스와 EC2 처리는 느슨하게 결합되지 않으며 산발적 트래픽에 대한 자동 확장이 복잡합니다.</p>
<p><span class="mark-no">❌ C</span> — Step Functions는 다단계 워크플로우 오케스트레이션에 적합하지만 단순한 주문 접수에는 과도하게 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — Kinesis Data Streams는 대규모 실시간 데이터 스트리밍에 적합하지만, EC2 처리는 자동 확장이 어렵고 느슨하게 결합되지 않습니다.</p>`,

    disc: [
      { ans:'B (73%)', txt:'SQS + Lambda는 느슨한 결합, 자동 확장, 고가용성, 단순성의 모든 요건을 충족합니다. SQS 버퍼링으로 주문 손실 위험이 없고 Lambda가 자동으로 확장됩니다.' },
      { ans:'C (27%)', txt:'주문 처리가 다단계인 경우 Step Functions가 적합할 수 있으나 "단순한" 솔루션 요건과 느슨한 결합 관점에서 SQS+Lambda가 더 적합합니다.' }
    ]
  },

  {
    n: 409,

    en: `<p>A company is deploying AWS Lambda functions that access an Amazon RDS for PostgreSQL database. The company needs to launch the Lambda functions in a QA environment and in a production environment.</p><p>The company must not expose credentials within application code and must rotate passwords automatically.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 PostgreSQL용 Amazon RDS 데이터베이스에 액세스하는 AWS Lambda 함수를 배포하고 있습니다. 회사는 QA 환경과 프로덕션 환경에서 Lambda 기능을 시작해야 합니다.</p><p>회사는 애플리케이션 코드 내에서 자격 증명을 노출해서는 안 되며 비밀번호를 자동으로 교체해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Store the database credentials for both environments in AWS Systems Manager Parameter Store. Encrypt the credentials by using an AWS Key Management Service (AWS KMS) key. Within the application code of the Lambda functions, pull the credentials from the Parameter Store parameter by using the AWS SDK for Python (Boto3). Add a role to the Lambda functions to provide access to the Parameter Store parameter.`, ko:`두 환경 모두에 대한 데이터베이스 자격 증명을 AWS Systems Manager Parameter Store에 저장하십시오. AWS KMS 키를 사용하여 자격 증명을 암호화합니다. Lambda 함수의 애플리케이션 코드 내에서 Boto3를 사용하여 Parameter Store 매개변수에서 자격 증명을 가져옵니다. Parameter Store 파라미터에 대한 액세스를 제공하기 위해 Lambda 함수에 역할을 추가합니다.` },
      { k:'B', en:`Store the database credentials for both environments in AWS Secrets Manager with distinct key entry for the QA environment and the production environment. Turn on rotation. Provide a reference to the Secrets Manager key as an environment variable for the Lambda functions.`, ko:`QA 환경과 프로덕션 환경에 대한 고유한 키 항목을 사용하여 AWS Secrets Manager의 두 환경에 대한 데이터베이스 자격 증명을 저장합니다. 회전을 켭니다. Lambda 함수의 환경 변수로 Secrets Manager 키에 대한 참조를 제공합니다.` },
      { k:'C', en:`Store the database credentials for both environments in AWS Key Management Service (AWS KMS). Turn on rotation. Provide a reference to the credentials that are stored in AWS KMS as an environment variable for the Lambda functions.`, ko:`AWS Key Management Service(AWS KMS)에 두 환경 모두에 대한 데이터베이스 자격 증명을 저장합니다. 회전을 켭니다. Lambda 함수에 대한 환경 변수로 AWS KMS에 저장된 자격 증명에 대한 참조를 제공합니다.` },
      { k:'D', en:`Create separate S3 buckets for the QA environment and the production environment. Turn on server-side encryption with AWS KMS keys (SSE-KMS) for the S3 buckets. Use an object naming pattern that gives each Lambda function's application code the ability to pull the correct credentials for the function's corresponding environment. Grant each Lambda function's execution role access to Amazon S3.`, ko:`QA 환경과 프로덕션 환경을 위해 별도의 S3 버킷을 생성합니다. S3 버킷에 대해 AWS KMS 키(SSE-KMS)를 사용하여 서버 측 암호화를 활성화합니다. 각 Lambda 함수의 해당 환경에 대한 올바른 자격 증명을 가져오는 기능을 제공하는 객체 명명 패턴을 사용합니다. 각 Lambda 함수의 실행 역할에 Amazon S3에 대한 액세스 권한을 부여합니다.` }
    ],

    answer: ['B'],
    vote: '100% B',

    explain: `<p><span class="mark-ok">✅ B — AWS Secrets Manager + 자동 교체(Rotation)</span></p>
<p><strong>AWS Secrets Manager</strong>는 데이터베이스 자격 증명 저장, 암호화, 그리고 가장 중요한 <strong>자동 비밀번호 교체(Automatic Rotation)</strong>를 기본으로 지원합니다. QA와 프로덕션 환경을 위한 별도의 시크릿을 생성하고, Lambda 함수의 환경 변수로 시크릿 키를 참조하면 코드에 자격 증명이 노출되지 않습니다.</p>
<p><a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/rotating-secrets.html" target="_blank">AWS 공식 문서 - Secrets Manager 자동 교체</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — AWS Systems Manager Parameter Store는 <strong>자동 비밀번호 교체</strong>를 기본 지원하지 않습니다. 별도의 Lambda 함수와 EventBridge 규칙을 구성해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — AWS KMS는 암호화 키 관리 서비스로 데이터베이스 자격 증명 저장에 적합하지 않습니다. KMS 키 교체는 암호화 키 교체이며 비밀번호 교체가 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — S3에 자격 증명을 저장하는 것은 Secrets Manager에 비해 자동 교체, 감사, 접근 제어가 복잡하며 모범 사례가 아닙니다.</p>`,

    disc: [
      { ans:'B (100%)', txt:'"자동 비밀번호 교체" 키워드는 항상 AWS Secrets Manager를 의미합니다. Parameter Store는 자동 교체를 기본 지원하지 않습니다.' }
    ]
  },

  {
    n: 410,

    en: `<p>A company is using AWS Control Tower to manage AWS accounts in an organization in AWS Organizations. The company has an OU that contains accounts. The company must prevent any new or existing Amazon EC2 instances in the OU's accounts from gaining a public IP address.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS Control Tower를 사용하여 AWS Organizations에 속한 조직의 AWS 계정을 관리하고 있습니다. 회사에는 계정이 포함된 OU가 있습니다. 회사는 OU 계정의 신규 또는 기존 Amazon EC2 인스턴스가 퍼블릭 IP 주소를 얻지 못하도록 방지해야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Configure all instances in each account in the OU to use AWS Systems Manager. Use a Systems Manager Automation runbook to prevent public IP addresses from being attached to the instances.`, ko:`AWS 시스템 관리자를 사용하도록 OU의 각 계정에 있는 모든 인스턴스를 구성합니다. 시스템 관리자 자동화 Runbook을 사용하여 퍼블릭 IP 주소가 인스턴스에 연결되는 것을 방지합니다.` },
      { k:'B', en:`Implement the AWS Control Tower proactive control to check whether instances in the OU's accounts have a public IP address. Set the AssociatePublicIpAddress property to False. Attach the proactive control to the OU.`, ko:`OU 계정의 인스턴스에 퍼블릭 IP 주소가 있는지 확인하기 위해 AWS Control Tower 사전 제어를 구현합니다. AssociatePublicIpAddress 속성을 False로 설정합니다. OU에 사전 제어를 연결합니다.` },
      { k:'C', en:`Create an SCP that prevents the launch of instances that have a public IP address. Additionally, configure the SCP to prevent the attachment of a public IP address to existing instances. Attach the SCP to the OU.`, ko:`공용 IP 주소가 있는 인스턴스의 시작을 방지하는 SCP를 생성합니다. 또한 기존 인스턴스에 공용 IP 주소가 연결되지 않도록 SCP를 구성합니다. SCP를 OU에 연결합니다.` },
      { k:'D', en:`Create an AWS Config custom rule that detects instances that have a public IP address. Configure a remediation action that uses an AWS Lambda function to detach the public IP addresses from the instances.`, ko:`퍼블릭 IP 주소가 있는 인스턴스를 감지하는 AWS Config 사용자 지정 규칙을 생성합니다. AWS Lambda 함수를 사용하여 인스턴스에서 퍼블릭 IP 주소를 분리하는 해결 작업을 구성합니다.` }
    ],

    answer: ['C'],
    vote: '67% C',

    explain: `<p><span class="mark-ok">✅ C — SCP(서비스 제어 정책)으로 퍼블릭 IP 차단</span></p>
<p><strong>SCP(Service Control Policy)</strong>는 OU 수준에서 모든 계정에 적용되는 예방적 제어입니다. 퍼블릭 IP 주소가 있는 인스턴스 시작을 차단하고 기존 인스턴스에 퍼블릭 IP 연결도 방지하는 SCP를 OU에 연결하면 모든 계정에서 즉시 적용됩니다. AWS Organizations를 사용하는 환경에서 예방적 조치는 SCP가 가장 효과적입니다.</p>
<p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html" target="_blank">AWS 공식 문서 - 서비스 제어 정책(SCP)</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — Systems Manager Runbook은 사후 처리 방식으로 예방적 제어가 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — Control Tower 사전 제어는 CloudFormation을 통한 배포에만 적용되며 AWS 콘솔이나 CLI를 통한 직접 생성은 차단하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Config는 탐지 후 수정하는 사후 제어 방식으로 퍼블릭 IP를 가진 인스턴스가 일시적으로 존재할 수 있습니다.</p>`,

    disc: [
      { ans:'C (67%)', txt:'SCP는 OU 내 모든 계정에 대한 예방적 제어로 가장 효과적입니다. "전체 OU에 정책 적용"은 SCP의 전형적인 사용 사례입니다.' },
      { ans:'B (33%)', txt:'Control Tower의 사전 제어는 CloudFormation 배포에만 적용되어 불완전하며, AWS 관리 콘솔에서 직접 EC2를 생성하는 경우 차단되지 않습니다.' }
    ]
  }
];