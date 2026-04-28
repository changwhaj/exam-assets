window.QS_SET15 = [
  {
    n: 141,
    en: `A company is processing videos in the AWS Cloud by using Amazon EC2 instances in an Auto Scaling group. It takes 30 minutes to process a video. Several EC2 instances scale in and out depending on the number of videos in an Amazon Simple Queue Service (Amazon SQS) queue.<br><br>The company has configured the SQS queue with a redrive policy that specifies a target dead-letter queue and a maxReceiveCount of 1. The company has set the visibility timeout for the SQS queue to 1 hour. The company has set up an Amazon CloudWatch alarm to notify the development team when there are messages in the dead-letter queue.<br><br>Several times during the day, the development team receives notification that messages are in the dead-letter queue and that videos have not been processed properly. An investigation finds no errors in the application logs.<br><br>How can the company solve this problem?`,
    ko: `회사는 Auto Scaling 그룹의 Amazon EC2 인스턴스를 사용하여 AWS 클라우드에서 비디오를 처리하고 있습니다. 비디오를 처리하는 데 30분이 소요됩니다. 여러 EC2 인스턴스는 Amazon SQS 대기열의 비디오 수에 따라 확장 및 축소됩니다.<br><br>회사는 대상 배달 못한 편지(DLQ) 대기열과 maxReceiveCount를 1로 지정하는 리드라이브 정책을 사용하여 SQS 대기열을 구성했습니다. 회사는 SQS 대기열에 대한 표시 제한 시간을 1시간으로 설정했습니다. 회사는 배달 못한 편지 대기열에 메시지가 있을 때 개발 팀에 알리기 위해 Amazon CloudWatch 경보를 설정했습니다.<br><br>하루에도 여러 번 개발 팀은 메시지가 배달 못한 편지 대기열에 있고 비디오가 제대로 처리되지 않았다는 알림을 받습니다. 조사 결과 애플리케이션 로그에서 오류가 발견되지 않았습니다.<br><br>회사는 이 문제를 어떻게 해결할 수 있습니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Turn on termination protection for the EC2 instances.`, ko: `EC2 인스턴스에 대한 종료 방지 기능을 활성화합니다.` },
      { k: 'B', en: `Update the visibility timeout for the SQS queue to 3 hours.`, ko: `SQS 대기열의 표시 제한 시간을 3시간으로 업데이트합니다.` },
      { k: 'C', en: `Configure scale-in protection for the instances during processing.`, ko: `처리 중 인스턴스에 대한 축소 보호를 구성합니다.` },
      { k: 'D', en: `Update the redrive policy and set maxReceiveCount to 0.`, ko: `리드라이브 정책을 업데이트하고 maxReceiveCount를 0으로 설정합니다.` },
    ],
    answer: ['C'],
    vote: '77% C',
    explain: `<p><span class="mark-ok">✅ C — 처리 중 축소 보호(Scale-In Protection) 구성</span></p>
<p>애플리케이션 로그에 오류가 없다는 것은 처리 자체에는 문제가 없음을 의미합니다. 실제 원인은 Auto Scaling 축소 이벤트가 비디오를 처리 중인 EC2 인스턴스를 종료하기 때문입니다. 인스턴스가 종료되면 메시지가 다시 대기열에 나타나고, maxReceiveCount=1이므로 두 번째 수신 시도에서 DLQ로 이동합니다. <strong>축소 보호(SetInstanceProtection)</strong>를 처리 시작 시 활성화하고 처리 완료 후 해제하면 이 문제가 해결됩니다.</p>
<p><a href="https://aws.amazon.com/blogs/aws/new-instance-protection-for-auto-scaling/" target="_blank">AWS 공식 블로그: Auto Scaling 인스턴스 보호</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2 종료 방지(termination protection)는 AWS Management Console이나 API를 통한 수동 종료만 방지합니다. Auto Scaling 그룹의 축소 이벤트에는 적용되지 않으며, Auto Scaling 자체 기능도 방해합니다.</p>
<p><span class="mark-no">❌ B</span> — 표시 제한 시간은 이미 1시간으로 30분 처리 시간보다 충분합니다. 3시간으로 늘려도 인스턴스가 도중에 종료되는 근본 원인은 해결되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — maxReceiveCount의 허용 범위는 1~1000입니다. 0은 유효하지 않은 값입니다. 설령 올바른 값으로 수정하더라도 처리 실패의 근본 원인(인스턴스 종료)을 해결하지 못합니다.</p>`,
    disc: [
      { ans: 'C (77%)', txt: '로그에 오류 없음 → 앱 버그 아님 → Auto Scaling 축소로 인스턴스 종료 → 메시지 재수신 → maxReceiveCount=1로 DLQ 이동. 축소 보호로 처리 중 종료 방지가 유일한 해결책. D의 maxReceiveCount=0은 무효 값.' },
    ]
  },
  {
    n: 142,
    en: `A company has developed APIs that use Amazon API Gateway with Regional endpoints. The APIs call AWS Lambda functions that use API Gateway authentication mechanisms. After a design review, a solutions architect identifies a set of APIs that do not require public access.<br><br>The solutions architect must design a solution to make the set of APIs accessible only from a VPC. All APIs need to be called with an authenticated user.<br><br>Which solution will meet these requirements with the LEAST amount of effort?`,
    ko: `한 회사가 지역 엔드포인트와 함께 Amazon API Gateway를 사용하는 API를 개발했습니다. API는 API Gateway 인증 메커니즘을 사용하는 AWS Lambda 함수를 호출합니다. 설계 검토 후 솔루션 설계자는 공개 액세스가 필요하지 않은 API 세트를 식별합니다.<br><br>솔루션 설계자는 VPC에서만 API 세트에 액세스할 수 있도록 솔루션을 설계해야 합니다. 모든 API는 인증된 사용자를 통해 호출해야 합니다.<br><br>최소한의 노력으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an internal Application Load Balancer (ALB). Create a target group. Select the Lambda function to call. Use the ALB DNS name to call the API from the VPC.`, ko: `내부 Application Load Balancer(ALB)를 생성합니다. 대상 그룹을 만듭니다. 호출할 Lambda 함수를 선택합니다. ALB DNS 이름을 사용하여 VPC에서 API를 호출합니다.` },
      { k: 'B', en: `Remove the DNS entry that is associated with the API in API Gateway. Create a hosted zone in Amazon Route 53. Create a CNAME record in the hosted zone. Update the API in API Gateway with the CNAME record. Use the CNAME record to call the API from the VPC.`, ko: `API Gateway에서 API와 연결된 DNS 항목을 제거합니다. Amazon Route 53에서 호스팅 영역을 생성합니다. 호스팅 영역에 CNAME 레코드를 생성합니다. CNAME 레코드를 사용하여 API Gateway의 API를 업데이트합니다. CNAME 레코드를 사용하여 VPC에서 API를 호출합니다.` },
      { k: 'C', en: `Update the API endpoint from Regional to private in API Gateway. Create an interface VPC endpoint in the VPC. Create a resource policy, and attach it to the API. Use the VPC endpoint to call the API from the VPC.`, ko: `API Gateway에서 API 엔드포인트를 지역(Regional)에서 프라이빗(Private)으로 업데이트합니다. VPC에서 인터페이스 VPC 엔드포인트를 생성합니다. 리소스 정책을 생성하고 이를 API에 연결합니다. VPC 엔드포인트를 사용하여 VPC에서 API를 호출합니다.` },
      { k: 'D', en: `Deploy the Lambda functions inside the VPC. Provision an EC2 instance, and install an Apache server. From the Apache server, call the Lambda functions. Use the internal CNAME record of the EC2 instance to call the API from the VPC.`, ko: `VPC 내부에 Lambda 함수를 배포합니다. EC2 인스턴스를 프로비저닝하고 Apache 서버를 설치합니다. Apache 서버에서 Lambda 함수를 호출합니다. EC2 인스턴스의 내부 CNAME 레코드를 사용하여 VPC에서 API를 호출합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — API Gateway 프라이빗 엔드포인트 + 인터페이스 VPC 엔드포인트 + 리소스 정책</span></p>
<p>API Gateway에서 기존 Regional 엔드포인트를 Private 엔드포인트로 변경하고, VPC 내에 <code>com.amazonaws.[region].execute-api</code> 인터페이스 VPC 엔드포인트를 생성합니다. 리소스 정책으로 특정 VPC 또는 VPC 엔드포인트에서만 API 호출을 허용하도록 제한합니다. 이 방법은 기존 인증 메커니즘을 그대로 유지하면서 VPC에서만 API에 접근하도록 최소 변경으로 구현 가능합니다.</p>
<p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html" target="_blank">AWS 공식 문서: API Gateway 프라이빗 API</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — ALB는 HTTP/HTTPS(L7) 프로토콜을 지원하지만, Lambda를 직접 대상 그룹으로 구성하는 방식은 API Gateway를 완전히 우회하므로 기존 인증 메커니즘을 잃게 됩니다.</p>
<p><span class="mark-no">❌ B</span> — DNS 항목 제거와 Route 53 CNAME 설정만으로는 API의 공개 접근성을 실제로 차단하지 못합니다. API 엔드포인트 자체가 여전히 인터넷에서 접근 가능합니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 인스턴스에 Apache 서버를 설치하는 것은 불필요한 복잡성과 관리 오버헤드를 추가합니다. 최소 노력 요구사항에 위배됩니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'API Gateway의 Regional → Private 변환 + 인터페이스 VPC 엔드포인트 생성 + 리소스 정책이 세 요구사항(VPC 전용, 인증, 최소 노력)을 모두 충족하는 유일한 방법.' },
    ]
  },
  {
    n: 143,
    en: `A weather service provides high-resolution weather maps from a web application hosted on AWS in the eu-west-1 Region. The weather maps are updated frequently and stored in Amazon S3 along with static HTML content. The web application is fronted by Amazon CloudFront.<br><br>The company recently expanded to serve users in the us-east-1 Region, and these new users report that viewing their respective weather maps is slow from time to time.<br><br>Which combination of steps will resolve the us-east-1 performance issues? (Choose two.)`,
    ko: `날씨 서비스는 eu-west-1 리전의 AWS에 호스팅된 웹 애플리케이션에서 고해상도 날씨 지도를 제공합니다. 날씨 지도는 자주 업데이트되며 정적 HTML 콘텐츠와 함께 Amazon S3에 저장됩니다. 웹 애플리케이션 앞에는 Amazon CloudFront가 있습니다.<br><br>회사는 최근 us-east-1 리전의 사용자에게 서비스를 제공하도록 확장했으며 이러한 신규 사용자는 날씨 지도를 보는 것이 때때로 느리다고 보고합니다.<br><br>us-east-1 성능 문제를 해결하려면 어떤 단계를 조합해야 합니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Configure the AWS Global Accelerator endpoint for the S3 bucket in eu-west-1. Configure endpoint groups for TCP ports 80 and 443 in us-east-1.`, ko: `eu-west-1의 S3 버킷에 대한 AWS Global Accelerator 엔드포인트를 구성합니다. us-east-1에서 TCP 포트 80 및 443에 대한 엔드포인트 그룹을 구성합니다.` },
      { k: 'B', en: `Create a new S3 bucket in us-east-1. Configure S3 cross-Region replication to synchronize from the S3 bucket in eu-west-1.`, ko: `us-east-1에 새 S3 버킷을 생성합니다. eu-west-1의 S3 버킷에서 동기화하도록 S3 교차 리전 복제를 구성합니다.` },
      { k: 'C', en: `Use Lambda@Edge to modify requests from North America to use the S3 Transfer Acceleration endpoint in us-east-1.`, ko: `Lambda@Edge를 사용하여 us-east-1에서 S3 Transfer Acceleration 엔드포인트를 사용하도록 북미의 요청을 수정합니다.` },
      { k: 'D', en: `Use Lambda@Edge to modify requests from North America to use the S3 bucket in us-east-1.`, ko: `Lambda@Edge를 사용하여 us-east-1의 S3 버킷을 사용하도록 북미의 요청을 수정합니다.` },
      { k: 'E', en: `Configure the AWS Global Accelerator endpoint for us-east-1 as an origin on the CloudFront distribution. Use Lambda@Edge to modify requests from North America to use the new origin.`, ko: `us-east-1에 대한 AWS Global Accelerator 엔드포인트를 CloudFront 배포의 오리진으로 구성합니다. Lambda@Edge를 사용하여 새 오리진을 사용하도록 북미의 요청을 수정합니다.` },
    ],
    answer: ['B', 'D'],
    vote: '95% BD',
    explain: `<p><span class="mark-ok">✅ B — us-east-1에 S3 버킷 생성 + 교차 리전 복제</span></p>
<p>eu-west-1의 날씨 지도 데이터를 us-east-1의 새 S3 버킷으로 자동 복제하면 북미 사용자가 가까운 리전에서 데이터를 받을 수 있습니다. S3 교차 리전 복제는 소스 버킷의 객체 변경 사항을 자동으로 동기화합니다.</p>
<p><span class="mark-ok">✅ D — Lambda@Edge로 북미 요청을 us-east-1 버킷으로 라우팅</span></p>
<p>CloudFront의 Lambda@Edge 함수로 요청자의 지역을 감지하여 북미 요청은 us-east-1 S3 버킷에서 콘텐츠를 제공하도록 동적으로 오리진을 변경합니다. 이를 통해 us-east-1 사용자는 물리적으로 가까운 버킷에서 데이터를 받아 지연 시간이 줄어듭니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Global Accelerator는 S3 버킷을 엔드포인트로 직접 지원하지 않습니다. Global Accelerator는 EC2, ALB, NLB 등을 지원합니다.</p>
<p><span class="mark-no">❌ C</span> — S3 Transfer Acceleration은 S3 버킷으로의 업로드(PUT 요청) 속도를 높이는 서비스입니다. 날씨 지도 조회(GET 요청)의 지연 시간 감소에는 적합하지 않습니다. 또한 Transfer Acceleration 엔드포인트는 지역별이 아닌 글로벌 엔드포인트입니다.</p>
<p><span class="mark-no">❌ E</span> — CloudFront는 이미 AWS 글로벌 네트워크를 사용합니다. CloudFront 오리진에 Global Accelerator를 추가해도 추가적인 성능 이점이 없으며, Global Accelerator는 L4 네트워킹과 정적 애니캐스트 IP용으로 설계되었습니다.</p>`,
    disc: [
      { ans: 'BD (95%)', txt: '날씨 지도는 읽기(GET)이므로 Transfer Acceleration(C) 부적합. Global Accelerator는 S3 직접 지원 안 함(A). B+D 조합: 미국에 버킷 생성+복제하고 Lambda@Edge로 북미 요청을 해당 버킷으로 라우팅.' },
    ]
  },
  {
    n: 144,
    en: `A solutions architect is investigating an issue in which a company cannot establish new sessions in Amazon Workspaces. An initial analysis indicates that the issue involves user profiles. The Amazon Workspaces environment is configured to use Amazon FSx for Windows File Server as the profile share storage. The FSx for Windows File Server file system is configured with 10 TB of storage.<br><br>The solutions architect discovers that the file system has reached its maximum capacity. The solutions architect must ensure that users can regain access. The solution also must prevent the problem from occurring again.<br><br>Which solution will meet these requirements?`,
    ko: `솔루션 설계자는 회사가 Amazon Workspaces에서 새 세션을 설정할 수 없는 문제를 조사하고 있습니다. 초기 분석에 따르면 문제에 사용자 프로필이 관련되어 있는 것으로 나타났습니다. Amazon Workspaces 환경은 Amazon FSx for Windows File Server를 프로필 공유 스토리지로 사용하도록 구성되어 있습니다. FSx for Windows File Server 파일 시스템은 10TB의 스토리지로 구성됩니다.<br><br>솔루션 설계자는 파일 시스템이 최대 용량에 도달했음을 발견합니다. 솔루션 설계자는 사용자가 다시 액세스할 수 있도록 해야 합니다. 또한 솔루션은 문제가 다시 발생하는 것을 방지해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Remove old user profiles to create space. Migrate the user profiles to an Amazon FSx for Lustre file system.`, ko: `이전 사용자 프로필을 제거하여 공간을 만듭니다. 사용자 프로필을 Amazon FSx for Lustre 파일 시스템으로 마이그레이션합니다.` },
      { k: 'B', en: `Increase capacity by using the update-file-system command. Implement an Amazon CloudWatch metric that monitors free space. Use Amazon EventBridge to invoke an AWS Lambda function to increase capacity as required.`, ko: `update-file-system 명령을 사용하여 용량을 늘립니다. 여유 공간을 모니터링하는 Amazon CloudWatch 지표를 구현합니다. Amazon EventBridge를 사용하여 AWS Lambda 함수를 호출하여 필요에 따라 용량을 늘립니다.` },
      { k: 'C', en: `Monitor the file system by using the FreeStorageCapacity metric in Amazon CloudWatch. Use AWS Step Functions to increase the capacity as required.`, ko: `Amazon CloudWatch에서 FreeStorageCapacity 지표를 사용하여 파일 시스템을 모니터링합니다. AWS Step Functions를 사용하여 필요에 따라 용량을 늘립니다.` },
      { k: 'D', en: `Remove old user profiles to create space. Create an additional FSx for Windows File Server file system. Update the user profile redirection for 50% of the users to use the new file system.`, ko: `이전 사용자 프로필을 제거하여 공간을 만듭니다. Windows 파일 서버 파일 시스템용 추가 FSx를 생성합니다. 사용자 중 50%가 새 파일 시스템을 사용하도록 사용자 프로필 리디렉션을 업데이트합니다.` },
    ],
    answer: ['B'],
    vote: '87% B',
    explain: `<p><span class="mark-ok">✅ B — update-file-system으로 즉시 용량 증가 + CloudWatch + EventBridge + Lambda 자동화</span></p>
<p>AWS CLI의 <code>aws fsx update-file-system --storage-capacity [새용량]</code> 명령으로 FSx for Windows File Server의 스토리지 용량을 즉시 늘릴 수 있습니다. 두 번째로 재발 방지를 위해 CloudWatch의 <code>FreeStorageCapacity</code> 지표를 모니터링하고, EventBridge 규칙으로 임계값 초과 시 Lambda 함수를 트리거하여 자동으로 용량을 늘리는 자동화 파이프라인을 구축합니다.</p>
<p><a href="https://docs.aws.amazon.com/fsx/latest/WindowsGuide/managing-storage-capacity.html" target="_blank">AWS 공식 문서: FSx for Windows 스토리지 용량 관리</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — FSx for Lustre는 Linux 기반 고성능 컴퓨팅 파일 시스템입니다. Windows 프로파일 스토리지에는 적합하지 않으며, 프로필 삭제만으로는 재발을 방지할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Step Functions는 워크플로 오케스트레이션 서비스입니다. FSx 스토리지 용량을 직접 늘리는 기능이 없으며, update-file-system 명령이 누락되어 있어 현재 용량 부족 문제를 즉시 해결하지 못합니다.</p>
<p><span class="mark-no">❌ D</span> — 프로필 삭제와 파일 시스템 분리는 단기적 해결책이며, 50% 분리로는 두 파일 시스템 모두 다시 용량에 도달할 수 있습니다. 자동화된 재발 방지 메커니즘이 없습니다.</p>`,
    disc: [
      { ans: 'B (87%)', txt: 'FSx for Windows File Server는 update-file-system CLI 명령으로 용량 확장 가능. CloudWatch FreeStorageCapacity + EventBridge + Lambda 조합으로 자동 확장 파이프라인 구현 가능.' },
    ]
  },
  {
    n: 145,
    en: `An international delivery company hosts a delivery management system on AWS. Drivers use the system to upload confirmation of delivery. Confirmation includes the recipient's signature or a photo of the package with the recipient. The driver's handheld device uploads signatures and photos through FTP to a single Amazon EC2 instance. Each handheld device saves a file in a directory based on the signed-in user, and the file name matches the delivery number. The EC2 instance then adds metadata to the file after querying a central database to pull delivery information. The file is then placed in Amazon S3 for archiving.<br><br>As the company expands, drivers report that the system is rejecting connections. The FTP server is having problems because of dropped connections and memory issues. In response to these problems, a system engineer schedules a cron task to reboot the EC2 instance every 30 minutes. The billing team reports that files are not always in the archive and that the central system is not always updated.<br><br>A solutions architect needs to design a solution that maximizes scalability to ensure that the archive always receives the files and that systems are always updated. The handheld devices cannot be modified, so the company cannot deploy a new application.<br><br>Which solution will meet these requirements?`,
    ko: `국제 배송 회사는 AWS에서 배송 관리 시스템을 호스팅합니다. 운전자는 시스템을 사용하여 배송 확인을 업로드합니다. 운전자의 휴대용 장치는 FTP를 통해 단일 Amazon EC2 인스턴스에 서명과 사진을 업로드합니다. 각 휴대용 장치는 로그인한 사용자를 기반으로 하는 디렉터리에 파일을 저장하며 파일 이름은 배달 번호와 일치합니다. 그런 다음 EC2 인스턴스는 중앙 데이터베이스에 쿼리하여 배달 정보를 가져온 후 파일에 메타데이터를 추가합니다. 그런 다음 파일은 보관을 위해 Amazon S3에 배치됩니다.<br><br>회사가 확장됨에 따라 운전자는 시스템이 연결을 거부하고 있다고 보고합니다. FTP 서버는 연결 끊김 및 메모리 문제를 겪고 있습니다. 청구팀에서는 파일이 항상 아카이브에 있는 것은 아니며 중앙 시스템이 항상 업데이트되지는 않는다고 보고합니다.<br><br>솔루션 설계자는 확장성을 최대화하는 솔루션을 설계해야 합니다. 휴대용 장치는 수정할 수 없으므로 회사에서는 새 애플리케이션을 배포할 수 없습니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AMI of the existing EC2 instance. Create an Auto Scaling group of EC2 instances behind an Application Load Balancer. Configure the Auto Scaling group to have a minimum of three instances.`, ko: `기존 EC2 인스턴스의 AMI를 생성합니다. Application Load Balancer 뒤에 EC2 인스턴스의 Auto Scaling 그룹을 생성합니다. 최소 3개의 인스턴스를 갖도록 Auto Scaling 그룹을 구성합니다.` },
      { k: 'B', en: `Use AWS Transfer Family to create an FTP server that places the files in Amazon Elastic File System (Amazon EFS). Mount the EFS volume to the existing EC2 instance. Point the EC2 instance to the new path for file processing.`, ko: `AWS Transfer Family를 사용하여 Amazon EFS에 파일을 저장하는 FTP 서버를 생성합니다. EFS 볼륨을 기존 EC2 인스턴스에 마운트합니다. EC2 인스턴스가 파일 처리를 위한 새 경로를 가리키도록 합니다.` },
      { k: 'C', en: `Use AWS Transfer Family to create an FTP server that places the files in Amazon S3. Use an S3 event notification through Amazon Simple Notification Service (Amazon SNS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.`, ko: `AWS Transfer Family를 사용하여 Amazon S3에 파일을 배치하는 FTP 서버를 생성합니다. Amazon SNS를 통해 S3 이벤트 알림을 사용하여 AWS Lambda 함수를 호출합니다. 메타데이터를 추가하고 전달 시스템을 업데이트하도록 Lambda 함수를 구성합니다.` },
      { k: 'D', en: `Update the handheld devices to place the files directly in Amazon S3. Use an S3 event notification through Amazon Simple Queue Service (Amazon SQS) to invoke an AWS Lambda function. Configure the Lambda function to add the metadata and update the delivery system.`, ko: `파일을 Amazon S3에 직접 배치하려면 휴대용 장치를 업데이트합니다. Amazon SQS를 통해 S3 이벤트 알림을 사용하여 AWS Lambda 함수를 호출합니다. 메타데이터를 추가하고 전달 시스템을 업데이트하도록 Lambda 함수를 구성합니다.` },
    ],
    answer: ['C'],
    vote: '77% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Transfer Family(FTP→S3) + SNS 이벤트 + Lambda(메타데이터 추가)</span></p>
<p><strong>AWS Transfer Family</strong>는 완전 관리형 FTP 서버 서비스로 파일을 Amazon S3에 직접 저장합니다. 휴대용 장치의 FTP 클라이언트는 변경 없이 그대로 사용합니다. S3에 파일이 도착하면 SNS 이벤트 알림이 Lambda 함수를 트리거하고, Lambda가 메타데이터 추가와 중앙 시스템 업데이트를 처리합니다. 서버리스 아키텍처이므로 확장성이 자동으로 보장됩니다.</p>
<p><a href="https://aws.amazon.com/aws-transfer-family/" target="_blank">AWS 공식 문서: AWS Transfer Family</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — FTP는 HTTP/HTTPS가 아니므로 ALB가 처리할 수 없습니다. ALB는 L7(HTTP/HTTPS) 로드 밸런서로 FTP(L4) 트래픽을 지원하지 않습니다. 또한 여전히 EC2에 의존하여 근본 문제를 해결하지 못합니다.</p>
<p><span class="mark-no">❌ B</span> — EFS에 저장하고 기존 EC2를 계속 사용하면 메모리 문제와 단일 장애 지점이 그대로 남습니다. 확장성 문제가 근본적으로 해결되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 휴대용 장치를 수정할 수 없다고 명시되어 있으므로 S3에 직접 업로드하도록 변경하는 것은 불가능합니다.</p>`,
    disc: [
      { ans: 'C (77%)', txt: '휴대용 장치 변경 불가 → FTP 방식 유지 필수. Transfer Family로 FTP→S3 완전 관리형 처리. SNS→Lambda로 메타데이터 추가 자동화. 서버리스 구조로 확장성 극대화. A는 ALB가 FTP 지원 불가.' },
    ]
  },
  {
    n: 146,
    en: `A company is running an application in the AWS Cloud. The application runs on containers in an Amazon Elastic Container Service (Amazon ECS) cluster. The ECS tasks use the Fargate launch type. The application's data is relational and is stored in Amazon Aurora MySQL. To meet regulatory requirements, the application must be able to recover to a separate AWS Region in the event of an application failure. In case of a failure, no data can be lost.<br><br>Which solution will meet these requirements with the LEAST amount of operational overhead?`,
    ko: `회사는 AWS 클라우드에서 애플리케이션을 실행하고 있습니다. 애플리케이션은 Amazon ECS 클러스터의 컨테이너에서 실행됩니다. ECS 태스크는 Fargate 시작 유형을 사용합니다. 애플리케이션의 데이터는 관계형이며 Amazon Aurora MySQL에 저장됩니다. 규제 요구 사항을 충족하려면 애플리케이션 오류가 발생할 경우 애플리케이션을 별도의 AWS 리전으로 복구할 수 있어야 합니다. 장애가 발생하더라도 데이터는 손실되지 않습니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Provision an Aurora Replica in a different Region.`, ko: `다른 리전에 Aurora 복제본을 프로비저닝합니다.` },
      { k: 'B', en: `Set up AWS DataSync for continuous replication of the data to a different Region.`, ko: `데이터를 다른 리전으로 지속적으로 복제하도록 AWS DataSync를 설정합니다.` },
      { k: 'C', en: `Set up AWS Database Migration Service (AWS DMS) to perform a continuous replication of the data to a different Region.`, ko: `데이터를 다른 리전으로 지속적으로 복제하도록 AWS DMS를 설정합니다.` },
      { k: 'D', en: `Use Amazon Data Lifecycle Manager (Amazon DLM) to schedule a snapshot every 5 minutes.`, ko: `Amazon Data Lifecycle Manager(Amazon DLM)를 사용하여 5분마다 스냅샷을 예약합니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — 다른 리전에 Aurora 복제본(Aurora Global Database) 프로비저닝</span></p>
<p>Amazon Aurora의 교차 리전 복제본(Aurora Global Database)은 기본 리전의 변경 사항을 일반적으로 1초 미만의 지연으로 보조 리전에 복제합니다. 장애 발생 시 복제본을 기본 데이터베이스로 승격하면 데이터 손실 없이 복구가 가능합니다. 이는 완전 관리형 서비스로 추가 구성이나 에이전트 없이 최소 운영 오버헤드로 RPO=0을 달성합니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html" target="_blank">AWS 공식 문서: Aurora Global Database</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS DataSync는 파일 스토리지(S3, EFS, NFS)의 데이터 전송 도구입니다. Aurora MySQL 데이터베이스를 직접 복제하는 데 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS DMS를 사용한 지속적 복제는 가능하지만 추가 설정(복제 인스턴스, 마이그레이션 태스크)이 필요하여 운영 오버헤드가 큽니다. Aurora의 기본 복제 기능이 훨씬 간단합니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon DLM은 EBS 볼륨 스냅샷 관리 서비스입니다. Aurora는 완전 관리형 서비스로 EBS에 직접 액세스할 수 없습니다. 또한 5분 스냅샷은 데이터 손실 없음 요구사항(RPO=0)을 충족하지 못합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'DataSync = 파일 스토리지용(B 오답). DLM = EBS 스냅샷용(D 오답). DMS는 복잡한 설정 필요(C 오답). Aurora 교차 리전 복제본이 최소 오버헤드로 데이터 손실 없는 DR 달성.' },
    ]
  },
  {
    n: 147,
    en: `A financial services company receives a regular data feed from its credit card servicing partner. Approximately 5,000 records are sent every 15 minutes in plaintext, delivered over HTTPS directly into an Amazon S3 bucket with server-side encryption. This feed contains sensitive credit card primary account number (PAN) data. The company needs to automatically mask the PAN before sending the data to another S3 bucket for additional internal processing. The company also needs to remove and merge specific fields, and then transform the record into JSON format. Additionally, extra feeds are likely to be added in the future, so any design needs to be easily expandable.<br><br>Which solution will meet these requirements?`,
    ko: `금융 서비스 회사는 신용 카드 서비스 파트너로부터 정기적인 데이터 피드를 받습니다. 약 5,000개의 레코드가 15분마다 일반 텍스트로 전송되며 서버 측 암호화를 통해 HTTPS를 통해 Amazon S3 버킷으로 직접 전달됩니다. 이 피드에는 민감한 신용카드 기본 계좌 번호(PAN) 데이터가 포함되어 있습니다. 회사는 추가 내부 처리를 위해 데이터를 다른 S3 버킷으로 보내기 전에 PAN을 자동으로 마스킹해야 합니다. 또한 회사는 특정 필드를 제거하고 병합한 다음 레코드를 JSON 형식으로 변환해야 합니다. 또한 향후 추가 피드가 추가될 가능성이 높으므로 모든 디자인은 쉽게 확장 가능해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Invoke an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Invoke another Lambda function when new messages arrive in the SQS queue to process the records, writing the results to a temporary location in Amazon S3. Invoke a final Lambda function once the SQS queue is empty to transform the records into JSON format and send the results to another S3 bucket for internal processing.`, ko: `각 레코드를 추출하여 Amazon SQS 대기열에 쓰는 파일 전송 시 AWS Lambda 함수를 호출합니다. SQS 대기열에 새 메시지가 도착하면 다른 Lambda 함수를 호출하여 레코드를 처리하고 결과를 Amazon S3의 임시 위치에 씁니다. SQS 대기열이 비어 있으면 최종 Lambda 함수를 호출하여 레코드를 JSON 형식으로 변환하고 내부 처리를 위해 결과를 다른 S3 버킷으로 보냅니다.` },
      { k: 'B', en: `Invoke an AWS Lambda function on file delivery that extracts each record and writes it to an Amazon SQS queue. Configure an AWS Fargate container application to automatically scale to a single instance when the SQS queue contains messages. Have the application process each record, and transform the record into JSON format. When the queue is empty, send the results to another S3 bucket for internal processing and scale down the AWS Fargate instance.`, ko: `각 레코드를 추출하여 Amazon SQS 대기열에 쓰는 파일 전송 시 AWS Lambda 함수를 호출합니다. SQS 대기열에 메시지가 포함된 경우 단일 인스턴스로 자동 확장되도록 AWS Fargate 컨테이너 애플리케이션을 구성합니다. 애플리케이션에서 각 레코드를 처리하고 레코드를 JSON 형식으로 변환하도록 합니다. 대기열이 비어 있으면 내부 처리를 위해 결과를 다른 S3 버킷으로 보내고 Fargate 인스턴스를 축소합니다.` },
      { k: 'C', en: `Create an AWS Glue crawler and custom classifier based on the data feed formats and build a table definition to match. Invoke an AWS Lambda function on file delivery to start an AWS Glue ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, have the ETL job send the results to another S3 bucket for internal processing.`, ko: `데이터 피드 형식을 기반으로 AWS Glue 크롤러 및 사용자 지정 분류자를 생성하고 일치하는 테이블 정의를 구축합니다. 파일 전송 시 AWS Lambda 함수를 호출하여 처리 및 변환 요구 사항에 따라 전체 레코드를 변환하는 AWS Glue ETL 작업을 시작합니다. 출력 형식을 JSON으로 정의합니다. 완료되면 ETL 작업이 내부 처리를 위해 결과를 다른 S3 버킷으로 보내도록 합니다.` },
      { k: 'D', en: `Create an AWS Glue crawler and custom classifier based upon the data feed formats and build a table definition to match. Perform an Amazon Athena query on file delivery to start an Amazon EMR ETL job to transform the entire record according to the processing and transformation requirements. Define the output format as JSON. Once complete, send the results to another S3 bucket for internal processing and scale down the EMR cluster.`, ko: `데이터 피드 형식을 기반으로 AWS Glue 크롤러 및 사용자 지정 분류자를 생성하고 일치하는 테이블 정의를 구축합니다. 파일 전송에 대해 Amazon Athena 쿼리를 수행하여 Amazon EMR ETL 작업을 시작합니다. 출력 형식을 JSON으로 정의합니다. 완료되면 내부 처리를 위해 결과를 다른 S3 버킷으로 보내고 EMR 클러스터를 축소합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Glue 크롤러 + 사용자 지정 분류자 + Glue ETL 작업</span></p>
<p><strong>AWS Glue</strong>는 ETL(Extract, Transform, Load) 작업에 최적화된 완전 관리형 서비스입니다. Glue 크롤러가 데이터 피드 형식을 자동으로 감지하고 테이블 정의를 생성합니다. Lambda 함수가 파일 도착 시 Glue ETL 작업을 트리거하고, ETL 작업에서 PAN 마스킹, 필드 제거/병합, JSON 변환을 모두 처리합니다. 새 피드가 추가될 때 새 크롤러와 ETL 작업만 추가하면 되므로 확장이 용이합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 여러 Lambda 함수와 SQS 대기열을 체이닝하는 방식은 아키텍처가 복잡하고 운영 오버헤드가 큽니다. "SQS 대기열이 비어 있을 때" 로직도 구현하기 어렵습니다.</p>
<p><span class="mark-no">❌ B</span> — Fargate 컨테이너를 SQS 기반으로 확장/축소하는 방식은 필요 이상으로 복잡합니다. ETL 목적에는 Glue가 훨씬 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon EMR은 Hadoop/Spark 기반 대규모 빅데이터 처리에 특화되어 있습니다. 15분마다 5,000개 레코드 수준은 빅데이터가 아니며, EMR 클러스터 관리 오버헤드가 불필요하게 큽니다. Athena로 EMR을 트리거하는 방식도 부적절합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'ETL 패턴에는 AWS Glue가 최적. 15분마다 5,000레코드는 빅데이터가 아니므로 EMR 불필요(D). Glue는 새 피드 형식 추가 시 크롤러+ETL만 추가하면 되어 확장 용이성 충족.' },
    ]
  },
  {
    n: 148,
    en: `A company wants to use AWS to create a business continuity solution in case the company's main on-premises application fails. The application runs on physical servers that also run other applications. The on-premises application that the company is planning to migrate uses a MySQL database as a data store. All the company's on-premises applications use operating systems that are compatible with Amazon EC2.<br><br>Which solution will achieve the company's goal with the LEAST operational overhead?`,
    ko: `회사에서는 회사의 주요 온프레미스 애플리케이션이 실패할 경우를 대비해 AWS를 사용하여 비즈니스 연속성 솔루션을 만들고 싶어합니다. 애플리케이션은 다른 애플리케이션도 실행하는 물리적 서버에서 실행됩니다. 회사에서 마이그레이션할 계획인 온프레미스 애플리케이션은 MySQL 데이터베이스를 데이터 저장소로 사용합니다. 회사의 모든 온프레미스 애플리케이션은 Amazon EC2와 호환되는 운영 체제를 사용합니다.<br><br>최소한의 운영 오버헤드로 회사의 목표를 달성할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Install the AWS Replication Agent on the source servers, including the MySQL servers. Set up replication for all servers. Launch test instances for regular drills. Cut over to the test instances to fail over the workload in the case of a failure event.`, ko: `MySQL 서버를 포함한 소스 서버에 AWS 복제 에이전트를 설치합니다. 모든 서버에 대한 복제를 설정합니다. 정기 훈련을 위한 테스트 인스턴스를 시작합니다. 오류 이벤트가 발생할 경우 워크로드를 장애 조치하기 위해 테스트 인스턴스로 전환합니다.` },
      { k: 'B', en: `Install the AWS Replication Agent on the source servers, including the MySQL servers. Initialize AWS Elastic Disaster Recovery in the target AWS Region. Define the launch settings. Frequently perform failover and fallback from the most recent point in time.`, ko: `MySQL 서버를 포함한 소스 서버에 AWS 복제 에이전트를 설치합니다. 대상 AWS 리전에서 AWS Elastic Disaster Recovery를 초기화합니다. 시작 설정을 정의합니다. 가장 최근 시점부터 장애 조치 및 대체를 자주 수행합니다.` },
      { k: 'C', en: `Create AWS Database Migration Service (AWS DMS) replication servers and a target Amazon Aurora MySQL DB cluster to host the database. Create a DMS replication task to copy the existing data to the target DB cluster. Create a local AWS Schema Conversion Tool (AWS SCT) change data capture (CDC) task to keep the data synchronized. Install the rest of the software on EC2 instances by starting with a compatible base AMI.`, ko: `AWS DMS 복제 서버와 대상 Amazon Aurora MySQL DB 클러스터를 생성하여 데이터베이스를 호스팅합니다. 기존 데이터를 대상 DB 클러스터에 복사하는 DMS 복제 작업을 생성합니다. 로컬 AWS SCT CDC 작업을 생성하여 데이터 동기화를 유지합니다. 호환되는 기본 AMI로 시작하여 EC2 인스턴스에 나머지 소프트웨어를 설치합니다.` },
      { k: 'D', en: `Deploy an AWS Storage Gateway Volume Gateway on premises. Mount volumes on all on-premises servers. Install the application and the MySQL database on the new volumes. Take regular snapshots. Install all the software on EC2 instances by starting with a compatible base AMI. Launch a Volume Gateway on an EC2 instance. Restore the volumes from the latest snapshot. Mount the new volumes on the EC2 instances in the case of a failure event.`, ko: `온프레미스에 AWS Storage Gateway 볼륨 게이트웨이를 배포합니다. 모든 온프레미스 서버에 볼륨을 마운트합니다. 새 볼륨에 애플리케이션과 MySQL 데이터베이스를 설치합니다. 정기적으로 스냅샷을 찍습니다. 호환되는 기본 AMI로 시작하여 EC2 인스턴스에 모든 소프트웨어를 설치합니다. EC2 인스턴스에서 볼륨 게이트웨이를 시작합니다. 최신 스냅샷에서 볼륨을 복원합니다. 오류가 발생하는 경우 EC2 인스턴스에 새 볼륨을 마운트합니다.` },
    ],
    answer: ['B'],
    vote: '85% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Elastic Disaster Recovery(AWS DRS)</span></p>
<p>이 시나리오는 데이터베이스만이 아니라 전체 애플리케이션(MySQL 포함 서버)의 비즈니스 연속성 솔루션이 필요합니다. <strong>AWS Elastic Disaster Recovery</strong>는 온프레미스 서버 전체를 AWS에 지속적으로 복제하는 완전 관리형 DR 서비스입니다. 소스 서버에 AWS 복제 에이전트를 설치하고 대상 리전에서 DRS를 초기화하면 복제가 자동으로 이루어집니다. 장애 발생 시 가장 최근 시점으로 신속하게 장애 조치할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html" target="_blank">AWS 공식 문서: AWS Elastic Disaster Recovery</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Elastic Disaster Recovery를 초기화하지 않고 에이전트만 설치하는 것은 불완전합니다. DRS 서비스를 초기화해야 복제가 제대로 작동합니다.</p>
<p><span class="mark-no">❌ C</span> — DMS + SCT는 데이터베이스 마이그레이션에는 적합하지만, 전체 서버(MySQL 외 다른 애플리케이션 포함)의 DR 솔루션으로는 불완전합니다. 물리적 서버에서 실행되는 다른 애플리케이션들은 별도로 처리해야 합니다. 또한 SCT와 CDC를 조합하는 방식은 DRS보다 복잡합니다.</p>
<p><span class="mark-no">❌ D</span> — Storage Gateway 볼륨 게이트웨이를 사용한 방식은 많은 수동 단계가 필요하고 장애 복구 시간(RTO)이 길 수 있습니다. 운영 오버헤드가 가장 큰 옵션입니다.</p>`,
    disc: [
      { ans: 'B (85%)', txt: '전체 서버(DB+앱) DR이 목적 → AWS Elastic Disaster Recovery가 최적. C는 DB만 처리하고 다른 앱은 별도 처리 필요. DRS는 에이전트 설치 후 초기화만으로 전체 서버 복제 자동화.' },
    ]
  },
  {
    n: 149,
    en: `A company is subject to regulatory audits of its financial information. External auditors who use a single AWS account need access to the company's AWS account. A solutions architect must provide the auditors with secure, read-only access to the company's AWS account. The solution must comply with AWS security best practices.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 재무 정보에 대한 규제 감사를 받습니다. 단일 AWS 계정을 사용하는 외부 감사자는 회사의 AWS 계정에 액세스해야 합니다. 솔루션 설계자는 감사자에게 회사의 AWS 계정에 대한 안전한 읽기 전용 액세스 권한을 제공해야 합니다. 솔루션은 AWS 보안 모범 사례를 준수해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `In the company's AWS account, create resource policies for all resources in the account to grant access to the auditors' AWS account. Assign a unique external ID to the resource policy.`, ko: `회사의 AWS 계정에서 계정의 모든 리소스에 대한 리소스 정책을 생성하여 감사자의 AWS 계정에 대한 액세스 권한을 부여합니다. 리소스 정책에 고유한 외부 ID를 할당합니다.` },
      { k: 'B', en: `In the company's AWS account, create an IAM role that trusts the auditors' AWS account. Create an IAM policy that has the required permissions. Attach the policy to the role. Assign a unique external ID to the role's trust policy.`, ko: `회사의 AWS 계정에서 감사자의 AWS 계정을 신뢰하는 IAM 역할을 생성합니다. 필요한 권한이 있는 IAM 정책을 생성합니다. 정책을 역할에 연결합니다. 역할의 신뢰 정책에 고유한 외부 ID를 할당합니다.` },
      { k: 'C', en: `In the company's AWS account, create an IAM user. Attach the required IAM policies to the IAM user. Create API access keys for the IAM user. Share the access keys with the auditors.`, ko: `회사의 AWS 계정에서 IAM 사용자를 생성합니다. 필요한 IAM 정책을 IAM 사용자에게 연결합니다. IAM 사용자에 대한 API 액세스 키를 생성합니다. 감사자와 액세스 키를 공유합니다.` },
      { k: 'D', en: `In the company's AWS account, create an IAM group that has the required permissions. Create an IAM user in the company's account for each auditor. Add the IAM users to the IAM group.`, ko: `회사의 AWS 계정에서 필요한 권한이 있는 IAM 그룹을 생성합니다. 각 감사자에 대해 회사 계정에 IAM 사용자를 생성합니다. IAM 그룹에 IAM 사용자를 추가합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 교차 계정 IAM 역할 + 외부 ID</span></p>
<p>AWS 보안 모범 사례의 표준 교차 계정 접근 패턴입니다. 회사 계정에 IAM 역할을 생성하고 감사자의 AWS 계정을 신뢰하는 신뢰 정책을 설정합니다. <strong>외부 ID(External ID)</strong>는 혼동된 대리인(Confused Deputy) 공격을 방지하는 추가 보안 레이어입니다. 감사자는 자신의 계정에서 <code>sts:AssumeRole</code>로 역할을 위임받아 필요한 기간만 임시 자격 증명으로 접근합니다.</p>
<p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html" target="_blank">AWS 공식 문서: 교차 계정 IAM 역할 생성</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 모든 리소스에 개별 리소스 정책을 설정하는 것은 매우 비효율적입니다. 또한 일부 AWS 리소스는 리소스 기반 정책을 지원하지 않습니다. IAM 역할이 훨씬 간결하고 관리하기 쉽습니다.</p>
<p><span class="mark-no">❌ C</span> — 장기 액세스 키(API access key)를 외부 당사자와 공유하는 것은 AWS 보안 모범 사례에 위배됩니다. 키가 유출될 경우 취소하기 전까지 지속적인 보안 위협이 됩니다.</p>
<p><span class="mark-no">❌ D</span> — 외부 감사자를 위해 회사 계정에 개별 IAM 사용자를 생성하는 것은 최소 권한 원칙과 관리 효율성에 위배됩니다. 역할 위임이 외부 접근에 더 적합합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'AWS 보안 모범 사례: 교차 계정 액세스는 역할 위임 사용. 외부 ID로 혼동된 대리인 공격 방지. 임시 자격 증명으로 보안 강화. 장기 액세스 키(C, D) 공유 방지.' },
    ]
  },
  {
    n: 150,
    en: `A company has a latency-sensitive trading platform that uses Amazon DynamoDB as a storage backend. The company configured the DynamoDB table to use on-demand capacity mode. A solutions architect needs to design a solution to improve the performance of the trading platform. The new solution must ensure high availability for the trading platform.<br><br>Which solution will meet these requirements with the LEAST latency?`,
    ko: `한 회사에는 Amazon DynamoDB를 스토리지 백엔드로 사용하는 지연 시간에 민감한 거래 플랫폼이 있습니다. 회사는 온디맨드 용량 모드를 사용하도록 DynamoDB 테이블을 구성했습니다. 솔루션 설계자는 거래 플랫폼의 성능을 향상시키기 위한 솔루션을 설계해야 합니다. 새로운 솔루션은 거래 플랫폼의 고가용성을 보장해야 합니다.<br><br>가장 짧은 대기 시간으로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a two-node DynamoDB Accelerator (DAX) cluster. Configure an application to read and write data by using DAX.`, ko: `2노드 DynamoDB Accelerator(DAX) 클러스터를 생성합니다. DAX를 사용하여 데이터를 읽고 쓰도록 애플리케이션을 구성합니다.` },
      { k: 'B', en: `Create a three-node DynamoDB Accelerator (DAX) cluster. Configure an application to read data by using DAX and to write data directly to the DynamoDB table.`, ko: `3노드 DynamoDB Accelerator(DAX) 클러스터를 생성합니다. DAX를 사용하여 데이터를 읽고 DynamoDB 테이블에 직접 데이터를 쓰도록 애플리케이션을 구성합니다.` },
      { k: 'C', en: `Create a three-node DynamoDB Accelerator (DAX) cluster. Configure an application to read data directly from the DynamoDB table and to write data by using DAX.`, ko: `3노드 DynamoDB Accelerator(DAX) 클러스터를 생성합니다. DynamoDB 테이블에서 직접 데이터를 읽고 DAX를 사용하여 데이터를 쓰도록 애플리케이션을 구성합니다.` },
      { k: 'D', en: `Create a single-node DynamoDB Accelerator (DAX) cluster. Configure an application to read data by using DAX and to write data directly to the DynamoDB table.`, ko: `단일 노드 DynamoDB Accelerator(DAX) 클러스터를 생성합니다. DAX를 사용하여 데이터를 읽고 DynamoDB 테이블에 직접 데이터를 쓰도록 애플리케이션을 구성합니다.` },
    ],
    answer: ['B'],
    vote: '90% B',
    explain: `<p><span class="mark-ok">✅ B — 3노드 DAX 클러스터 + 읽기는 DAX, 쓰기는 DynamoDB 직접</span></p>
<p><strong>3노드 DAX 클러스터</strong>: AWS는 프로덕션 환경에서 내결함성을 위해 3개 이상의 노드(각각 다른 가용 영역)를 권장합니다. 1~2노드 클러스터는 내결함성이 없어 프로덕션 사용에 부적합합니다.</p>
<p><strong>읽기는 DAX, 쓰기는 DynamoDB 직접(Write-Around 패턴)</strong>: DAX를 통해 쓰면 추가 네트워크 홉이 발생하여 DynamoDB 직접 쓰기보다 느립니다. 지연 시간에 민감한 트레이딩 플랫폼에서는 읽기 캐싱(DAX)과 직접 쓰기를 조합하는 Write-Around 패턴이 최소 지연 시간을 달성합니다.</p>
<p><a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.consistency.html" target="_blank">AWS 공식 문서: DAX 일관성</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 2노드 DAX는 내결함성이 없어 고가용성 요구사항을 충족하지 못합니다. 또한 DAX를 통한 쓰기는 추가 지연 시간을 유발합니다.</p>
<p><span class="mark-no">❌ C</span> — DynamoDB 테이블에서 직접 읽으면 DAX의 인 메모리 캐시 이점을 활용하지 못합니다. 읽기는 반드시 DAX를 통해 해야 지연 시간이 줄어듭니다.</p>
<p><span class="mark-no">❌ D</span> — 단일 노드 DAX는 단일 장애 지점이 존재하여 고가용성을 보장하지 못합니다. 노드 장애 시 캐시 데이터가 손실될 수 있습니다.</p>`,
    disc: [
      { ans: 'B (90%)', txt: '3노드 = 내결함성(HA) 달성. DAX 읽기 = 마이크로초 지연 시간. DynamoDB 직접 쓰기(Write-Around) = 추가 홉 없이 최소 쓰기 지연. 지연 시간 민감 트레이딩에 최적 조합.' },
    ]
  },
];
