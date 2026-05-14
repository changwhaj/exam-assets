window.QS_SET52 = [
  {
    n: 511,
    en: `<p>A company hosts a data-processing application on Amazon EC2 instances. The application polls an Amazon Elastic File System (Amazon EFS) file system for newly uploaded files. When a new file is detected, the application extracts data from the file and runs logic to select a Docker container image to process the file. The application starts the appropriate container image and passes the file location as a parameter.</p>
<p>The data processing that the container performs can take up to 2 hours. When the processing is complete, the code that runs inside the container writes the file back to Amazon EFS and exits.</p>
<p>The company needs to refactor the application to eliminate the EC2 instances that are running the containers.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 Amazon EC2 인스턴스에서 데이터 처리 애플리케이션을 호스팅합니다. 애플리케이션은 새로 업로드된 파일에 대해 Amazon EFS 파일 시스템을 폴링합니다. 새 파일이 감지되면 파일에서 데이터를 추출하고 처리할 Docker 컨테이너 이미지를 선택하는 로직을 실행합니다. 컨테이너 처리는 최대 2시간이 걸릴 수 있습니다.</p>
<p>회사는 컨테이너를 실행하는 EC2 인스턴스를 제거하기 위해 애플리케이션을 리팩터링해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an Amazon ECS cluster. Configure the processing to run as AWS Fargate tasks. Extract the container selection logic to run as an Amazon EventBridge rule that starts the appropriate Fargate task. Configure the EventBridge rule to run when files are added to the EFS file system.', ko: 'ECS 클러스터를 만들고 처리를 Fargate 작업으로 구성합니다. 컨테이너 선택 로직을 적절한 Fargate 작업을 시작하는 EventBridge 규칙으로 추출합니다. EFS에 파일이 추가될 때 규칙이 실행되도록 구성합니다.' },
      { k: 'B', en: 'Create an Amazon ECS cluster. Configure the processing to run as AWS Fargate tasks. Update and containerize the container selection logic to run as a Fargate service that starts the appropriate Fargate task. Configure an EFS event notification to invoke the Fargate service when files are added to the EFS file system.', ko: 'ECS 클러스터를 만들고 처리를 Fargate 작업으로 구성합니다. 컨테이너 선택 로직을 컨테이너화하여 Fargate 서비스로 실행합니다. EFS 이벤트 알림을 구성합니다.' },
      { k: 'C', en: 'Create an Amazon ECS cluster. Configure the processing to run as AWS Fargate tasks. Extract the container selection logic to run as an AWS Lambda function that starts the appropriate Fargate task. Migrate the storage of file uploads to an Amazon S3 bucket. Update the processing code to use Amazon S3. Configure an S3 event notification to invoke the Lambda function when objects are created.', ko: 'ECS 클러스터를 만들고 처리를 Fargate 작업으로 구성합니다. 컨테이너 선택 로직을 적절한 Fargate 작업을 시작하는 Lambda 함수로 추출합니다. 파일 업로드 스토리지를 Amazon S3 버킷으로 마이그레이션합니다. S3 이벤트 알림이 객체 생성 시 Lambda 함수를 호출하도록 구성합니다.' },
      { k: 'D', en: 'Create AWS Lambda container images for the processing. Configure Lambda functions to use the container images. Extract the container selection logic to run as a decision Lambda function that invokes the appropriate Lambda processing function. Migrate the storage of file uploads to an Amazon S3 bucket. Configure an S3 event notification to invoke the decision Lambda function when objects are created.', ko: '처리를 위한 Lambda 컨테이너 이미지를 만듭니다. 컨테이너 선택 로직을 결정 Lambda 함수로 추출합니다. 파일 업로드 스토리지를 S3로 마이그레이션하고 S3 이벤트 알림을 구성합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — ECS Fargate + Lambda(컨테이너 선택) + S3 이벤트 알림</span></p>
<p>세 가지 제약을 모두 해결합니다:</p>
<ul>
<li><strong>EC2 제거</strong>: AWS Fargate는 서버리스 컨테이너 실행으로 EC2 불필요</li>
<li><strong>2시간 처리</strong>: Fargate 작업은 실행 시간 제한 없음(Lambda는 15분 제한으로 D 불가)</li>
<li><strong>이벤트 트리거</strong>: EFS는 S3처럼 이벤트 알림 기능이 없음 → S3로 스토리지 마이그레이션 후 S3 이벤트 알림으로 Lambda 트리거</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html" target="_blank">AWS 공식 문서: AWS Fargate</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EFS는 EventBridge 이벤트를 직접 발생시키지 않습니다. EFS에 파일이 추가되는 이벤트를 EventBridge에서 직접 감지할 수 없습니다.</p>
<p><span class="mark-no">❌ B</span> — EFS는 S3처럼 이벤트 알림(Event Notification) 기능이 없습니다. EFS에 파일 추가 시 서비스를 직접 호출할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda 컨테이너 이미지도 최대 실행 시간은 15분입니다. 2시간 처리 요구사항을 충족할 수 없습니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'EFS는 이벤트 알림 미지원 → S3로 이전. Lambda(선택 로직, 15초 미만) → Fargate 작업(최대 2시간) 기동.' },
    ],
  },
  {
    n: 512,
    en: `<p>A media company has a 30-TB repository of digital news videos. These videos are stored on tape in an on-premises tape library and referenced by a Media Asset Management (MAM) system. The company wants to enrich the metadata for these videos in an automated fashion and put them into a searchable catalog by using a MAM feature. The company must be able to search based on information in the video, such as objects, scenery items, or people's faces. A catalog is available that contains faces of people who have appeared in the videos that include an image of each person. The company would like to migrate these videos to AWS.</p>
<p>The company has a high-speed AWS Direct Connect connection with AWS and would like to move the MAM solution video content directly from its current file system.</p>
<p>How can these requirements be met by using the LEAST amount of ongoing management overhead and causing MINIMAL disruption to the existing system?</p>`,
    ko: `<p>한 미디어 회사가 온프레미스 테이프 라이브러리에 30TB의 디지털 뉴스 비디오 저장소를 보유합니다. MAM 시스템이 이를 참조합니다. 회사는 비디오의 객체, 풍경, 사람 얼굴 등의 정보를 기반으로 검색 가능한 카탈로그를 만들고자 합니다.</p>
<p>회사는 고속 AWS Direct Connect 연결을 보유하며 현재 파일 시스템에서 비디오 콘텐츠를 직접 이전하려고 합니다.</p>
<p>최소한의 지속적 관리 오버헤드와 기존 시스템 중단으로 이러한 요구사항을 충족하는 방법은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Set up an AWS Storage Gateway, file gateway appliance on-premises. Use the MAM solution to extract the videos from the current archive and push them into the file gateway. Use the catalog of faces to build a collection in Amazon Rekognition. Build an AWS Lambda function that invokes the Rekognition Javascript SDK to have Rekognition pull the video from the Amazon S3 files backing the file gateway, retrieve the required metadata, and push the metadata into the MAM solution.', ko: '온프레미스에 Storage Gateway 파일 게이트웨이를 설정합니다. MAM 솔루션으로 비디오를 파일 게이트웨이로 푸시합니다. 얼굴 카탈로그로 Rekognition 컬렉션을 구축합니다. Lambda 함수가 Rekognition SDK를 호출하여 S3 파일에서 비디오를 가져와 메타데이터를 MAM으로 푸시합니다.' },
      { k: 'B', en: 'Set up an AWS Storage Gateway, tape gateway appliance on-premises. Use the MAM solution to extract the videos from the current archive and push them into the tape gateway. Use the catalog of faces to build a collection in Amazon Rekognition. Build an AWS Lambda function that invokes the Rekognition Javascript SDK to have Amazon Rekognition process the video in the tape gateway, retrieve the required metadata, and push the metadata into the MAM solution.', ko: '온프레미스에 Storage Gateway 테이프 게이트웨이를 설정합니다. MAM 솔루션으로 비디오를 테이프 게이트웨이로 푸시합니다. Rekognition 컬렉션을 구축합니다. Lambda 함수가 Rekognition SDK를 호출하여 비디오를 처리하고 메타데이터를 MAM으로 푸시합니다.' },
      { k: 'C', en: 'Configure a video ingestion stream by using Amazon Kinesis Video Streams. Use the catalog of faces to build a collection in Amazon Rekognition. Stream the videos from the MAM solution into Kinesis Video Streams. Configure Amazon Rekognition to process the streamed videos. Then, use a stream consumer to retrieve the required metadata, and push the metadata into the MAM solution. Configure the stream to store the videos in Amazon S3.', ko: 'Kinesis Video Streams로 비디오 수집 스트림을 구성합니다. Rekognition 컬렉션을 구축합니다. MAM에서 Kinesis Video Streams로 비디오를 스트리밍합니다. Rekognition으로 처리하고 메타데이터를 MAM으로 푸시합니다.' },
      { k: 'D', en: 'Set up an Amazon EC2 instance that runs the OpenCV libraries. Copy the videos, images, and face catalog from the on-premises library into an Amazon EBS volume mounted on this EC2 instance. Process the videos to retrieve the required metadata, and push the metadata into the MAM solution, while also copying the video files to an Amazon S3 bucket.', ko: 'OpenCV 라이브러리가 실행되는 EC2 인스턴스를 설정합니다. 비디오, 이미지, 얼굴 카탈로그를 EBS 볼륨에 복사합니다. 비디오를 처리하여 메타데이터를 MAM으로 푸시하고 비디오를 S3 버킷으로 복사합니다.' },
    ],
    answer: ['A'],
    vote: '50% A / 50% B',
    explain: `<p><span class="mark-ok">✅ A — Storage Gateway 파일 게이트웨이 + S3 + Rekognition + Lambda</span></p>
<p>핵심 분석: "현재 파일 시스템에서 직접 이전"이라는 요구사항.</p>
<ul>
<li><strong>파일 게이트웨이</strong>: NFS/SMB를 통해 파일 시스템처럼 접근하며 백엔드는 S3에 저장. MAM 솔루션이 현재 파일 시스템에서 직접 파일 게이트웨이로 비디오를 푸시 가능</li>
<li><strong>Rekognition</strong>: S3의 비디오 파일에 직접 접근하여 얼굴 인식, 객체 감지 등 메타데이터 추출</li>
<li>테이프 게이트웨이(B)는 VTL(가상 테이프 라이브러리)로 Rekognition과 직접 연동 불가(S3 Glacier에 저장됨)</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 테이프 게이트웨이는 VTL(가상 테이프 라이브러리)로 비디오를 S3 Glacier에 저장합니다. Rekognition은 S3 Glacier 객체를 직접 처리할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — Kinesis Video Streams는 실시간 스트리밍용이며 30TB 보관 데이터 처리에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — EC2+EBS+OpenCV는 관리 오버헤드가 크고 Rekognition 같은 관리형 AI 서비스 활용 없이 직접 구현해야 합니다.</p>`,
    disc: [
      { ans: 'A (50%)', txt: '파일 게이트웨이 = S3 백엔드 → Rekognition 직접 분석 가능. 현재 파일 시스템에서 직접 이전 지원.' },
      { ans: 'B (50%)', txt: '테이프 라이브러리 환경이므로 테이프 게이트웨이가 더 자연스럽다는 주장. 그러나 Rekognition과 직접 연동 불가.' },
    ],
  },
  {
    n: 513,
    en: `<p>A company needs to optimize the cost of an AWS environment that contains multiple accounts in an organization in AWS Organizations. The company conducted cost optimization activities 3 years ago and purchased Amazon EC2 Standard Reserved Instances that recently expired.</p>
<p>The company needs EC2 instances for 3 more years. Additionally, the company has deployed a new serverless workload.</p>
<p>Which strategy will provide the company with the MOST cost savings?</p>`,
    ko: `<p>한 회사가 AWS Organizations의 여러 계정이 포함된 AWS 환경의 비용을 최적화해야 합니다. 3년 전 비용 최적화 활동으로 EC2 표준 예약 인스턴스를 구매했는데 최근 만료되었습니다.</p>
<p>회사는 3년 더 EC2 인스턴스가 필요하며 새로운 서버리스 워크로드도 배포했습니다.</p>
<p>가장 많은 비용 절감을 제공하는 전략은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Purchase the same Reserved Instances for an additional 3-year term with All Upfront payment. Purchase a 3-year Compute Savings Plan with All Upfront payment in the management account to cover any additional compute costs.', ko: '전액 선불로 동일한 예약 인스턴스를 3년 추가 구매합니다. 추가 컴퓨팅 비용을 충당하기 위해 관리 계정에서 전액 선불로 3년 Compute Savings Plan을 구매합니다.' },
      { k: 'B', en: 'Purchase a 1-year Compute Savings Plan with No Upfront payment in each member account. Use the Savings Plans recommendations in the AWS Cost Management console to choose the Compute Savings Plan.', ko: '각 멤버 계정에서 선불 없이 1년 Compute Savings Plan을 구매합니다. Cost Management 콘솔의 Savings Plans 권장 사항을 사용합니다.' },
      { k: 'C', en: 'Purchase a 3-year EC2 Instance Savings Plan with No Upfront payment in the management account to cover EC2 costs in each AWS Region. Purchase a 3-year Compute Savings Plan with No Upfront payment in the management account to cover any additional compute costs.', ko: '관리 계정에서 선불 없이 3년 EC2 인스턴스 Savings Plan을 구매합니다. 추가 비용을 위해 선불 없이 3년 Compute Savings Plan을 구매합니다.' },
      { k: 'D', en: 'Purchase a 3-year EC2 Instance Savings Plan with All Upfront payment in each member account. Use the Savings Plans recommendations in the AWS Cost Management console to choose the EC2 Instance Savings Plan.', ko: '각 멤버 계정에서 전액 선불로 3년 EC2 인스턴스 Savings Plan을 구매합니다.' },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — 전액 선불 3년 RI + 관리 계정 Compute Savings Plan</span></p>
<p>두 가지 워크로드를 최적화합니다:</p>
<ul>
<li><strong>EC2(기존 워크로드)</strong>: 표준 예약 인스턴스(RI)는 전액 선불 + 3년 조건으로 최대 약 75% 할인. EC2 Instance Savings Plan(72%)보다 높음</li>
<li><strong>서버리스(새 워크로드)</strong>: Compute Savings Plan은 Lambda, Fargate, EC2 모두 커버. 관리 계정에서 구매 시 조직 전체 계정에 자동 적용</li>
</ul>
<p><a href="https://aws.amazon.com/savingsplans/compute-pricing/" target="_blank">AWS Savings Plans 비교</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 1년 + 선불 없음 조합은 할인율이 가장 낮습니다. 서버리스에 Compute Savings Plan은 맞지만 기간과 결제 방식이 비효율적입니다.</p>
<p><span class="mark-no">❌ C</span> — 선불 없음 조합은 할인율이 낮습니다. 가장 많은 비용 절감을 위해서는 전액 선불이 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — 각 멤버 계정에서 개별 구매 시 조직 단위 최적화가 불가능합니다. 관리 계정 구매가 더 효율적입니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'EC2: 3년 전액 선불 RI = 최대 할인(약 75%). 서버리스: Compute Savings Plan. 관리 계정 구매로 조직 전체 적용.' },
    ],
  },
  {
    n: 514,
    en: `<p>A company operates a static content distribution platform that serves customers globally. The customers consume content from their own AWS accounts.</p>
<p>The company serves its content from an Amazon S3 bucket. The company uploads the content from its on-premises environment to the S3 bucket by using an S3 File Gateway.</p>
<p>The company wants to improve the platform's performance and reliability by serving content from the AWS Region that is geographically closest to customers. The company must route the on-premises data to Amazon S3 with minimal latency and without public internet exposure.</p>
<p>Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)</p>`,
    ko: `<p>한 회사가 전 세계 고객에게 서비스를 제공하는 정적 콘텐츠 배포 플랫폼을 운영합니다. 고객은 자체 AWS 계정에서 콘텐츠를 소비합니다.</p>
<p>회사는 S3 파일 게이트웨이를 사용하여 온프레미스 환경에서 S3 버킷에 콘텐츠를 업로드합니다.</p>
<p>지리적으로 가장 가까운 리전에서 콘텐츠를 제공하여 성능과 안정성을 개선하고, 최소한의 지연 시간과 공개 인터넷 노출 없이 데이터를 S3로 라우팅해야 합니다.</p>
<p>최소한의 운영 오버헤드로 이러한 요구사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: 'Implement S3 Multi-Region Access Points.', ko: 'S3 다중 리전 액세스 포인트를 구현합니다.' },
      { k: 'B', en: 'Use S3 Cross-Region Replication (CRR) to copy content to different Regions.', ko: 'S3 교차 리전 복제(CRR)를 사용하여 콘텐츠를 다른 리전으로 복사합니다.' },
      { k: 'C', en: 'Create an AWS Lambda function that tracks the routing of clients to Regions.', ko: '클라이언트의 리전 라우팅을 추적하는 Lambda 함수를 만듭니다.' },
      { k: 'D', en: 'Use an AWS Site-to-Site VPN connection to connect to a Multi-Region Access Point.', ko: 'AWS Site-to-Site VPN 연결을 사용하여 다중 리전 액세스 포인트에 연결합니다.' },
      { k: 'E', en: 'Use AWS PrivateLink and AWS Direct Connect to connect to a Multi-Region Access Point.', ko: 'AWS PrivateLink와 AWS Direct Connect를 사용하여 다중 리전 액세스 포인트에 연결합니다.' },
    ],
    answer: ['A', 'E'],
    vote: '100% AE',
    explain: `<p><span class="mark-ok">✅ A — S3 다중 리전 액세스 포인트(MRAP)</span></p>
<p>단일 글로벌 엔드포인트를 제공하며 요청을 가장 가까운 리전의 S3 버킷으로 자동 라우팅합니다. S3 CRR과 통합하여 여러 리전에 자동 복제됩니다.</p>
<p><span class="mark-ok">✅ E — AWS PrivateLink + AWS Direct Connect</span></p>
<p>온프레미스에서 S3 MRAP으로 인터넷을 우회하여 프라이빗 연결을 제공합니다. Direct Connect로 전용 네트워크 연결, PrivateLink로 VPC 엔드포인트를 통해 S3 MRAP에 접근합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — CRR은 MRAP와 함께 사용할 수 있지만 단독으로는 가장 가까운 리전으로 자동 라우팅이 안 됩니다. 별도 라우팅 로직이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — Lambda로 라우팅을 추적하는 것은 추가 개발과 운영 오버헤드가 발생합니다.</p>
<p><span class="mark-no">❌ D</span> — Site-to-Site VPN은 공용 인터넷을 통해 터널을 구성하여 "공개 인터넷 노출 없음" 요구사항과 충돌합니다.</p>`,
    disc: [
      { ans: 'AE (100%)', txt: 'MRAP으로 가장 가까운 리전 자동 라우팅 + DX+PrivateLink로 인터넷 우회 프라이빗 연결.' },
    ],
  },
  {
    n: 515,
    en: `<p>A company is migrating its data center to the AWS Cloud and needs to complete the migration as quickly as possible. The company has many applications that are running on hundreds of VMware VMs in the data center. Each VM is configured with a shared Windows folder that contains common shared files. The file share is larger than 100 GB in size.</p>
<p>The company's compliance team requires a change request to be filed and approved for every software installation and modification to each VM. The company has an AWS Direct Connect connection with 10 GB of bandwidth between AWS and the data center.</p>
<p>Which set of steps should the company take to complete the migration in the LEAST amount of time?</p>`,
    ko: `<p>한 회사가 데이터 센터를 AWS 클라우드로 가능한 한 빨리 마이그레이션해야 합니다. 수백 개의 VMware VM에서 많은 애플리케이션이 실행 중이며 각 VM은 공통 공유 파일이 포함된 공유 Windows 폴더가 있습니다. 파일 공유 크기는 100GB 이상입니다.</p>
<p>규정 준수 팀은 각 VM에 대한 모든 소프트웨어 설치 및 수정에 대해 변경 요청을 제출하고 승인해야 합니다. 회사는 10GB 대역폭의 AWS Direct Connect 연결을 보유합니다.</p>
<p>가장 빠른 시간 내에 마이그레이션을 완료하기 위한 단계는 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Use VM Import/Export to create images of each VM. Use AWS Application Migration Service to manage and view the images. Copy the Windows file share data to an Amazon EFS file system. After migration, remap the file share to the EFS file system.', ko: 'VM Import/Export를 사용하여 각 VM의 이미지를 만듭니다. Application Migration Service로 이미지를 관리합니다. Windows 파일 공유 데이터를 EFS로 복사합니다.' },
      { k: 'B', en: 'Deploy the AWS Application Discovery Service agentless appliance to VMware vCenter. Review the portfolio of discovered VMs in AWS Migration Hub.', ko: 'AWS Application Discovery Service 에이전트리스 어플라이언스를 VMware vCenter에 배포합니다. Migration Hub에서 검색된 VM 포트폴리오를 검토합니다.' },
      { k: 'C', en: 'Deploy the AWS Application Migration Service agentless appliance to VMware vCenter. Copy the Windows file share data to a new Amazon FSx for Windows File Server file system. After migration, remap the file share on each VM to the FSx for Windows File Server file system.', ko: 'AWS Application Migration Service 에이전트리스 어플라이언스를 VMware vCenter에 배포합니다. Windows 파일 공유 데이터를 Amazon FSx for Windows File Server에 복사합니다. 마이그레이션 후 각 VM의 파일 공유를 FSx에 다시 매핑합니다.' },
      { k: 'D', en: 'Deploy the AWS Application Discovery Service Agent and the AWS Application Migration Service Agent onto each VMware hypervisor directly. Review the portfolio in AWS Migration Hub. Copy each VM\'s file share data to a new Amazon FSx for Windows File Server file system. After migration, remap the file share on each VM to the FSx for Windows File Server file system.', ko: 'AWS Application Discovery Service 에이전트와 AWS Application Migration Service 에이전트를 각 VMware 하이퍼바이저에 직접 배포합니다. Migration Hub에서 포트폴리오를 검토합니다. 각 VM의 파일 공유 데이터를 FSx로 복사합니다.' },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — MGN 에이전트리스 어플라이언스 + FSx for Windows</span></p>
<p>규정 준수 요구사항: 각 VM에 소프트웨어 설치 시 변경 요청 필요 → <strong>에이전트 설치 없는 에이전트리스 방식</strong>이 필수.</p>
<ul>
<li><strong>Application Migration Service 에이전트리스 어플라이언스</strong>: VMware vCenter에 단 하나의 어플라이언스만 배포. 각 VM에 소프트웨어 설치 불필요</li>
<li><strong>FSx for Windows</strong>: Windows 공유 파일 시스템을 AWS에서 완전 관리형으로 호스팅. SMB 프로토콜 지원으로 마이그레이션 후 재매핑 가능</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Application Discovery Service는 발견(Discovery) 도구이지 마이그레이션(Migration) 도구가 아닙니다. 실제 VM 마이그레이션을 수행하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 각 VM에 에이전트를 직접 설치하면 모든 VM에 대해 변경 요청을 제출해야 하여 시간이 매우 오래 걸립니다.</p>
<p><span class="mark-no">❌ A</span> — VM Import/Export와 MGN을 혼합하는 것은 불필요합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: '에이전트리스 어플라이언스 = VM별 변경 요청 불필요. FSx for Windows = Windows 파일 공유 완전 대체.' },
    ],
  },
  {
    n: 516,
    en: `<p>A company has multiple AWS accounts that are in an organization in AWS Organizations. The company needs to store AWS account activity and query the data from a central location by using SQL.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS Organizations의 조직에 여러 AWS 계정이 있습니다. 회사는 AWS 계정 활동을 저장하고 중앙 위치에서 SQL을 사용하여 데이터를 쿼리해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Create an AWS CloudTrail trail in each account. Specify CloudTrail management events for the trail. Configure CloudTrail to send the events to Amazon CloudWatch Logs. Configure CloudWatch cross-account observability. Query the data in CloudWatch Logs Insights.', ko: '각 계정에서 CloudTrail 추적을 만들고 CloudWatch Logs로 보냅니다. CloudWatch 교차 계정 관찰을 구성합니다. CloudWatch Logs Insights에서 데이터를 쿼리합니다.' },
      { k: 'B', en: 'Use a delegated administrator account to create an AWS CloudTrail Lake data store. Specify CloudTrail management events for the data store. Enable the data store for all accounts in the organization. Query the data in CloudTrail Lake.', ko: '위임된 관리자 계정을 사용하여 AWS CloudTrail Lake 데이터 스토어를 만듭니다. 데이터 스토어에 대한 CloudTrail 관리 이벤트를 지정합니다. 조직의 모든 계정에 대해 데이터 스토어를 활성화합니다. CloudTrail Lake에서 데이터를 쿼리합니다.' },
      { k: 'C', en: 'Use a delegated administrator account to create an AWS CloudTrail trail. Specify CloudTrail management events for the trail. Enable the trail for all accounts in the organization. Keep all other settings as default. Query the CloudTrail data from the CloudTrail event history page.', ko: '위임된 관리자 계정을 사용하여 CloudTrail 추적을 만들고 조직의 모든 계정에 활성화합니다. CloudTrail 이벤트 기록 페이지에서 데이터를 쿼리합니다.' },
      { k: 'D', en: 'Use AWS CloudFormation StackSets to deploy AWS CloudTrail Lake data stores in each account. Specify CloudTrail management events for the data stores. Keep all other settings as default. Query the data in CloudTrail Lake.', ko: 'CloudFormation StackSets를 사용하여 각 계정에 CloudTrail Lake 데이터 스토어를 배포합니다. CloudTrail Lake에서 데이터를 쿼리합니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — CloudTrail Lake + 위임된 관리자 계정 + 조직 전체 활성화</span></p>
<p>두 가지 요구사항을 모두 충족합니다:</p>
<ul>
<li><strong>중앙 저장</strong>: 조직 모든 계정의 이벤트를 단일 데이터 스토어에 집계</li>
<li><strong>SQL 쿼리</strong>: AWS CloudTrail Lake는 표준 SQL 쿼리를 직접 지원하는 완전 관리형 이벤트 데이터 스토어</li>
<li>위임된 관리자 계정으로 중앙 집중식 관리</li>
</ul>
<p><a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake.html" target="_blank">AWS 공식 문서: CloudTrail Lake</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudWatch Logs Insights는 SQL이 아닌 자체 쿼리 언어를 사용합니다. SQL 쿼리 요구사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — CloudTrail 이벤트 기록 페이지는 제한적인 검색만 지원하며 SQL 쿼리 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 각 계정에 별도 CloudTrail Lake 데이터 스토어를 생성하면 중앙 쿼리가 불가능합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'CloudTrail Lake = SQL 지원 중앙 이벤트 스토어. 조직 전체 계정 데이터 자동 집계. 위임 관리자로 운영.' },
    ],
  },
  {
    n: 517,
    en: `<p>A company is using AWS to develop and manage its production web application. The application includes an Amazon API Gateway HTTP API that invokes an AWS Lambda function. The Lambda function processes and then stores data in a database.</p>
<p>The company wants to implement user authorization for the web application in an integrated way. The company already uses a third-party identity provider that issues OAuth tokens for the company's other applications.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS에서 프로덕션 웹 애플리케이션을 개발하고 관리하고 있습니다. 애플리케이션에는 Lambda 함수를 호출하는 Amazon API Gateway HTTP API가 있습니다.</p>
<p>회사는 웹 애플리케이션에 대한 사용자 권한을 통합된 방식으로 구현하려고 합니다. 회사는 이미 다른 애플리케이션에 OAuth 토큰을 발급하는 타사 ID 공급자를 사용하고 있습니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Integrate the company\'s third-party identity provider with API Gateway. Configure an API Gateway Lambda authorizer to validate tokens from the identity provider. Require the Lambda authorizer on all API routes. Update the web application to get tokens from the identity provider and include the tokens in the Authorization header when calling the API Gateway HTTP API.', ko: '회사의 타사 ID 공급자를 API Gateway와 통합합니다. ID 공급자의 토큰을 검증하도록 API Gateway Lambda 권한 부여자를 구성합니다. 모든 API 경로에서 Lambda 권한 부여자를 요구합니다. ID 공급자에서 토큰을 가져와 Authorization 헤더에 포함하도록 웹 애플리케이션을 업데이트합니다.' },
      { k: 'B', en: 'Integrate the company\'s third-party identity provider with AWS Directory Service. Configure Directory Service as an API Gateway authorizer to validate tokens from the identity provider. Require the Directory Service authorizer on all API routes. Configure AWS IAM Identity Center as a SAML 2.0 identity provider. Configure the web application as a custom SAML 2.0 application.', ko: '타사 ID 공급자를 AWS Directory Service와 통합합니다. Directory Service를 API Gateway 권한 부여자로 구성합니다. IAM Identity Center를 SAML 2.0 IdP로 구성합니다.' },
      { k: 'C', en: 'Integrate the company\'s third-party identity provider with AWS IAM Identity Center. Configure API Gateway to use IAM Identity Center for zero-configuration authentication and authorization. Update the web application to retrieve AWS STS tokens from IAM Identity Center and include the tokens in the Authorization header when calling the API Gateway HTTP API.', ko: '타사 ID 공급자를 IAM Identity Center와 통합합니다. API Gateway가 IAM Identity Center를 사용하여 인증/권한 부여를 수행하도록 구성합니다.' },
      { k: 'D', en: 'Integrate the company\'s third-party identity provider with AWS IAM Identity Center. Configure IAM users with permissions to call the API Gateway HTTP API. Update the web application to extract request parameters from the IAM users and include the parameters in the Authorization header.', ko: '타사 ID 공급자를 IAM Identity Center와 통합합니다. API Gateway HTTP API를 호출할 권한이 있는 IAM 사용자를 구성합니다.' },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — API Gateway Lambda 권한 부여자 + OAuth 토큰 검증</span></p>
<p>기존 타사 OAuth IdP와 통합하는 표준 방법입니다:</p>
<ul>
<li><strong>Lambda 권한 부여자</strong>: 커스텀 토큰 검증 로직 구현 가능. OAuth, JWT, OpenID Connect 등 다양한 토큰 형식 지원</li>
<li>기존 타사 IdP를 그대로 활용하여 "통합된 방식" 요구사항 충족</li>
<li>모든 API 경로에 권한 부여자 적용으로 일관된 보안 정책</li>
</ul>`,
    wrong: `<p><span class="mark-no">❌ B</span> — AWS Directory Service는 API Gateway 권한 부여자로 직접 사용할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — API Gateway는 IAM Identity Center를 "구성 없이" 사용하는 기능을 직접 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — IAM 사용자 기반 접근은 OAuth 토큰 기반 시스템과 통합이 어렵고 기존 IdP를 활용하지 않습니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'Lambda 권한 부여자는 OAuth 토큰을 포함한 다양한 외부 IdP와 통합 가능한 표준 방법.' },
    ],
  },
  {
    n: 518,
    en: `<p>A company has deployed applications to thousands of Amazon EC2 instances in an AWS account. A security audit discovers that several unencrypted Amazon Elastic Block Store (Amazon EBS) volumes are attached to the EC2 instances. The company's security policy requires the EBS volumes to be encrypted.</p>
<p>The company needs to implement an automated solution to encrypt the EBS volumes. The solution also must prevent development teams from creating unencrypted EBS volumes.</p>
<p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS 계정의 수천 개의 EC2 인스턴스에 애플리케이션을 배포했습니다. 보안 감사에서 암호화되지 않은 여러 EBS 볼륨이 발견됐습니다.</p>
<p>회사는 EBS 볼륨을 암호화하는 자동화된 솔루션을 구현해야 하며, 개발팀이 암호화되지 않은 EBS 볼륨을 생성하지 못하도록 해야 합니다.</p>
<p>이러한 요구사항을 충족하는 솔루션은 무엇입니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Configure the AWS Config managed rule that identifies unencrypted EBS volumes. Configure an automatic remediation action. Associate an AWS Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Create an AWS KMS customer managed key. In the key policy, include a statement to deny the creation of unencrypted EBS volumes.', ko: 'AWS Config 관리 규칙으로 암호화되지 않은 EBS 볼륨을 식별합니다. 자동 수정 작업을 구성합니다. KMS CMK를 만들고 키 정책에 암호화되지 않은 EBS 볼륨 생성을 거부하는 문을 포함합니다.' },
      { k: 'B', en: 'Use AWS Systems Manager Fleet Manager to create a list of unencrypted EBS volumes. Create a Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Create an SCP to deny the creation of unencrypted EBS volumes.', ko: 'Systems Manager Fleet Manager로 암호화되지 않은 EBS 볼륨 목록을 만듭니다. Automation 런북을 만듭니다. SCP로 암호화되지 않은 EBS 볼륨 생성을 거부합니다.' },
      { k: 'C', en: 'Use AWS Systems Manager Fleet Manager to create a list of unencrypted EBS volumes. Create a Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Modify the AWS account setting for EBS encryption to always encrypt new EBS volumes.', ko: 'Fleet Manager로 암호화되지 않은 EBS 볼륨 목록을 만듭니다. Automation 런북을 만듭니다. EBS 암호화에 대한 계정 설정을 새 EBS 볼륨을 항상 암호화하도록 수정합니다.' },
      { k: 'D', en: 'Configure the AWS Config managed rule that identifies unencrypted EBS volumes. Configure an automatic remediation action. Associate an AWS Systems Manager Automation runbook that includes the steps to create a new encrypted EBS volume. Modify the AWS account setting for EBS encryption to always encrypt new EBS volumes.', ko: 'AWS Config 관리 규칙으로 암호화되지 않은 EBS 볼륨을 식별합니다. 자동 수정 작업을 구성합니다. Systems Manager Automation 런북을 연결합니다. EBS 암호화에 대한 계정 설정을 새 EBS 볼륨을 항상 암호화하도록 수정합니다.' },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — AWS Config + SSM Automation 런북 + EBS 기본 암호화 계정 설정</span></p>
<p>두 가지 요구사항을 모두 해결합니다:</p>
<ul>
<li><strong>기존 암호화되지 않은 볼륨 자동 수정</strong>: AWS Config 규칙이 비규정 준수 볼륨을 감지 → SSM Automation 런북이 자동으로 암호화된 볼륨 생성 및 교체</li>
<li><strong>미래 암호화되지 않은 볼륨 생성 방지</strong>: AWS 계정의 EBS 기본 암호화 설정을 활성화하면 새로 생성되는 모든 EBS 볼륨이 자동으로 암호화됨</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default" target="_blank">AWS 공식 문서: EBS 기본 암호화</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — KMS 키 정책으로 암호화되지 않은 EBS 볼륨 생성을 거부하는 것은 올바른 방법이 아닙니다. EBS 기본 암호화 설정이 더 직접적이고 효과적입니다.</p>
<p><span class="mark-no">❌ B, C</span> — Fleet Manager는 암호화되지 않은 볼륨을 식별하는 도구가 아닙니다. AWS Config가 더 적합합니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'Config로 기존 볼륨 감지+자동 수정 + EBS 기본 암호화 계정 설정으로 미래 생성 방지. 두 요구사항 모두 해결.' },
    ],
  },
  {
    n: 519,
    en: `<p>A company is running a large containerized workload in the AWS Cloud. The workload consists of approximately 100 different services. The company uses Amazon Elastic Container Service (Amazon ECS) to orchestrate the workload.</p>
<p>Recently the company's development team started using AWS Fargate instead of Amazon EC2 instances in the ECS cluster. In the past, the workload has come close to running the maximum number of EC2 instances that are available in the account.</p>
<p>The company is worried that the workload could reach the maximum number of ECS tasks that are allowed. A solutions architect must implement a solution that will notify the development team when Fargate reaches 80% of the maximum number of tasks.</p>
<p>What should the solutions architect do to meet this requirement?</p>`,
    ko: `<p>한 회사가 AWS 클라우드에서 대규모 컨테이너화된 워크로드를 실행하고 있습니다. 약 100개의 다른 서비스로 구성되며 Amazon ECS로 오케스트레이션됩니다.</p>
<p>개발팀이 최근 ECS 클러스터에서 EC2 인스턴스 대신 AWS Fargate를 사용하기 시작했습니다. 솔루션 아키텍트는 Fargate가 최대 작업 수의 80%에 도달하면 개발팀에 알리는 솔루션을 구현해야 합니다.</p>
<p>이 요구사항을 충족하기 위해 무엇을 해야 합니까?</p>`,
    type: 'single',
    choices: [
      { k: 'A', en: 'Use Amazon CloudWatch to monitor the Sample Count statistic for each service in the ECS cluster. Set an alarm for when the math expression sample count/SERVICE_QUOTA(service)*100 is greater than 80. Notify the development team by using Amazon SNS.', ko: 'ECS 클러스터의 각 서비스에 대한 샘플 수 통계를 모니터링합니다. 수학 표현식이 80보다 클 때 경보를 설정합니다. SNS로 알립니다.' },
      { k: 'B', en: 'Use Amazon CloudWatch to monitor service quotas that are published under the AWS/Usage metric namespace. Set an alarm for when the math expression metric/SERVICE_QUOTA(metric)*100 is greater than 80. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).', ko: 'Amazon CloudWatch를 사용하여 AWS/Usage 지표 네임스페이스에 게시된 서비스 할당량을 모니터링합니다. 수학 표현식 metric/SERVICE_QUOTA(metric)*100이 80보다 클 때 경보를 설정합니다. Amazon SNS를 사용하여 개발팀에 알립니다.' },
      { k: 'C', en: 'Create an AWS Lambda function to poll detailed metrics from the ECS cluster. When the number of running Fargate tasks is greater than 80, invoke Amazon SES to notify the development team.', ko: 'ECS 클러스터에서 자세한 메트릭을 폴링하는 Lambda 함수를 만듭니다. 실행 중인 Fargate 작업 수가 80보다 크면 SES로 개발팀에 알립니다.' },
      { k: 'D', en: 'Create an AWS Config rule to evaluate whether the Fargate SERVICE_QUOTA is greater than 80. Use Amazon SES to notify the development team when the AWS Config rule is not compliant.', ko: 'Fargate SERVICE_QUOTA가 80보다 큰지 평가하는 Config 규칙을 생성합니다. 규정 미준수 시 SES로 개발팀에 알립니다.' },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — CloudWatch AWS/Usage 네임스페이스 + SERVICE_QUOTA 수학 표현식 + SNS</span></p>
<p>서비스 할당량 모니터링을 위한 AWS 표준 방법입니다:</p>
<ul>
<li><strong>AWS/Usage 네임스페이스</strong>: 서비스 할당량 사용률이 자동으로 게시됩니다</li>
<li><strong>SERVICE_QUOTA() 함수</strong>: CloudWatch 수학 표현식으로 현재 할당량 한도를 참조하여 사용률 백분율 계산</li>
<li>80% 임계값 초과 시 SNS 알림 전송</li>
</ul>
<p><a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Quotas-Visualize-Alarms.html" target="_blank">AWS 공식 문서: CloudWatch 서비스 할당량 시각화 및 경보</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Sample Count는 CloudWatch 지표의 데이터 포인트 수로 ECS 작업 수와 무관합니다.</p>
<p><span class="mark-no">❌ C</span> — Lambda 폴링은 추가 개발과 운영 오버헤드가 필요합니다. "80보다 크면"의 의미가 80%가 아닌 80개 작업으로 잘못된 조건입니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Config는 리소스 구성 규정 준수 서비스로 실시간 할당량 사용률 모니터링에 적합하지 않습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'AWS/Usage 네임스페이스 + SERVICE_QUOTA() 함수로 할당량 대비 사용률 80% 임계값 경보. AWS 공식 방법.' },
    ],
  },
  {
    n: 520,
    en: `<p>A company has several AWS Lambda functions written in Python. The functions are deployed with the .zip package deployment type. The functions use a Lambda layer that contains common libraries and packages in a .zip file. The Lambda .zip packages and Lambda layer .zip file are stored in an Amazon S3 bucket.</p>
<p>The company must implement automatic scanning of the Lambda functions and the Lambda layer to identify CVEs. A subset of the Lambda functions must receive automated code scans to detect potential data leaks and other vulnerabilities. The code scans must occur only for selected Lambda functions, not all the Lambda functions.</p>
<p>Which combination of actions will meet these requirements? (Choose three.)</p>`,
    ko: `<p>한 회사가 Python으로 작성된 여러 AWS Lambda 함수를 보유합니다. 함수는 .zip 패키지 배포 유형으로 배포되며 공통 라이브러리와 패키지가 있는 Lambda 계층을 사용합니다.</p>
<p>Lambda 함수와 Lambda 계층에서 CVE를 자동으로 식별해야 합니다. Lambda 함수의 하위 집합은 데이터 유출 및 기타 취약성을 감지하기 위한 자동화된 코드 스캔을 받아야 합니다. 코드 스캔은 선택된 Lambda 함수에 대해서만 수행해야 합니다.</p>
<p>이러한 요구사항을 충족하는 작업 조합은 무엇입니까? (3개를 선택하세요.)</p>`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: 'Activate Amazon Inspector. Start automated CVE scans.', ko: 'Amazon Inspector를 활성화합니다. 자동화된 CVE 스캔을 시작합니다.' },
      { k: 'B', en: 'Activate Lambda standard scanning and Lambda code scanning in Amazon Inspector.', ko: 'Amazon Inspector에서 Lambda 표준 스캐닝과 Lambda 코드 스캐닝을 활성화합니다.' },
      { k: 'C', en: 'Enable Amazon GuardDuty. Enable the Lambda Protection feature in GuardDuty.', ko: 'Amazon GuardDuty를 활성화합니다. GuardDuty에서 Lambda Protection 기능을 활성화합니다.' },
      { k: 'D', en: 'Enable scanning in the Monitor settings of the Lambda functions that need code scans.', ko: '코드 스캔이 필요한 Lambda 함수의 모니터 설정에서 스캐닝을 활성화합니다.' },
      { k: 'E', en: 'Tag Lambda functions that do not need code scans. In the tag, include a key of InspectorCodeExclusion and a value of LambdaCodeScanning.', ko: '코드 스캔이 필요 없는 Lambda 함수에 태그를 지정합니다. 태그에 InspectorCodeExclusion 키와 LambdaCodeScanning 값을 포함합니다.' },
      { k: 'F', en: 'Use Amazon Inspector to scan the S3 bucket that contains the Lambda .zip packages and the Lambda layer .zip file for code scans.', ko: 'Amazon Inspector를 사용하여 Lambda .zip 패키지와 Lambda 계층 .zip 파일이 포함된 S3 버킷을 코드 스캔합니다.' },
    ],
    answer: ['A', 'B', 'E'],
    vote: '100% ABE',
    explain: `<p><span class="mark-ok">✅ A — Amazon Inspector 활성화</span></p>
<p>Lambda CVE 스캔의 전제 조건. Inspector를 활성화해야 Lambda 함수 및 계층의 취약성 스캔이 시작됩니다.</p>
<p><span class="mark-ok">✅ B — Lambda 표준 스캐닝 + Lambda 코드 스캐닝 활성화</span></p>
<p>두 가지 스캔 유형이 필요합니다: 표준 스캔(CVE 감지)과 코드 스캔(데이터 유출 등 취약성)을 모두 활성화합니다.</p>
<p><span class="mark-ok">✅ E — 코드 스캔 제외 Lambda 함수에 InspectorCodeExclusion 태그</span></p>
<p>선택된 Lambda 함수에 대해서만 코드 스캔을 수행하려면, 코드 스캔이 필요 없는 함수에 <code>InspectorCodeExclusion: LambdaCodeScanning</code> 태그를 설정하여 제외합니다.</p>
<p><a href="https://docs.aws.amazon.com/inspector/latest/user/scanning-lambda.html" target="_blank">AWS 공식 문서: Inspector Lambda 코드 스캐닝</a></p>`,
    wrong: `<p><span class="mark-no">❌ C</span> — GuardDuty Lambda Protection은 런타임 동작 모니터링용이며 CVE 스캔 또는 코드 취약성 스캔이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda 함수의 모니터 설정에서 스캐닝을 활성화하는 것은 Inspector의 기능이 아닙니다.</p>
<p><span class="mark-no">❌ F</span> — Inspector는 Lambda 함수 자체를 직접 스캔합니다. S3 버킷의 .zip 파일을 별도로 스캔하는 방식이 아닙니다.</p>`,
    disc: [
      { ans: 'ABE (100%)', txt: 'A: Inspector 활성화. B: 표준+코드 스캔 활성화. E: InspectorCodeExclusion 태그로 일부 함수만 코드 스캔 제외.' },
    ],
  },
];