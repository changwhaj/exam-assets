window.QS_SET09 = [
  {
    n: 81,
    en: `A company is building an electronic document management system in which users upload their documents. The application stack is entirely serverless and runs on AWS in the eu-central-1 Region. The system includes a web application that uses an Amazon CloudFront distribution for delivery with Amazon S3 as the origin. The web application communicates with Amazon API Gateway Regional endpoints. The API Gateway APIs call AWS Lambda functions that store metadata in an Amazon Aurora Serverless database and put the documents into an S3 bucket.<br/>The company is growing steadily and has completed a proof of concept with its largest customer. The company must improve latency outside of Europe.<br/><br/>Which combination of actions will meet these requirements? (Choose two.)`,
    ko: `한 회사에서 사용자가 문서를 업로드하는 전자 문서 관리 시스템을 구축하고 있습니다. 애플리케이션 스택은 완전히 서버리스이며 eu-central-1 리전의 AWS에서 실행됩니다. 시스템에는 Amazon S3를 오리진으로 사용하는 Amazon CloudFront 배포를 통해 제공되는 웹 애플리케이션이 포함되어 있습니다. 웹 애플리케이션은 Amazon API Gateway 지역(Regional) 엔드포인트와 통신합니다. API Gateway API는 Amazon Aurora Serverless 데이터베이스에 메타데이터를 저장하고 문서를 S3 버킷에 저장하는 AWS Lambda 함수를 호출합니다.<br/>회사는 꾸준히 성장하고 있으며 최대 고객과의 개념 증명(PoC)을 완료했습니다. 회사는 유럽 이외의 지역에서 지연 시간을 개선해야 합니다.<br/><br/>이 요구 사항을 충족하는 작업 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Enable S3 Transfer Acceleration on the S3 bucket. Ensure that the web application uses the Transfer Acceleration signed URLs.`, ko:`S3 버킷에서 S3 Transfer Acceleration을 활성화합니다. 웹 애플리케이션이 Transfer Acceleration 서명 URL을 사용하는지 확인합니다.` },
      { k:'B', en:`Create an accelerator in AWS Global Accelerator. Attach the accelerator to the CloudFront distribution.`, ko:`AWS Global Accelerator에서 액셀러레이터를 생성합니다. CloudFront 배포에 액셀러레이터를 연결합니다.` },
      { k:'C', en:`Change the API Gateway Regional endpoints to edge-optimized endpoints.`, ko:`API Gateway 지역(Regional) 엔드포인트를 엣지 최적화(edge-optimized) 엔드포인트로 변경합니다.` },
      { k:'D', en:`Provision the entire stack in two other locations that are spread across the world. Use global databases on the Aurora Serverless cluster.`, ko:`전 세계에 분산된 다른 두 위치에 전체 스택을 프로비저닝합니다. Aurora Serverless 클러스터에서 글로벌 데이터베이스를 사용합니다.` },
      { k:'E', en:`Add an Amazon RDS proxy between the Lambda functions and the Aurora Serverless database.`, ko:`Lambda 함수와 Aurora Serverless 데이터베이스 사이에 Amazon RDS 프록시를 추가합니다.` },
    ],
    answer: ['A', 'C'],
    vote: '59% AC, 31% CD',
    explain: `<p><span class="mark-ok">✅ A — S3 Transfer Acceleration</span></p><p>S3 Transfer Acceleration은 CloudFront 엣지 로케이션을 통해 업로드 트래픽을 라우팅합니다. 유럽 외부 사용자의 문서 업로드가 가장 가까운 AWS 엣지 로케이션을 경유해 eu-central-1 버킷에 도달하므로 장거리 업로드 지연을 크게 줄입니다.</p><p><span class="mark-ok">✅ C — Edge-optimized API Gateway endpoint</span></p><p>API Gateway 엣지 최적화 엔드포인트는 자동으로 CloudFront 배포를 생성하여 전 세계 엣지 로케이션에서 API 요청을 수락합니다. 기존 Regional 엔드포인트는 eu-central-1로 직접 연결되므로 원거리 사용자에게 지연이 발생하지만, 엣지 최적화로 전환하면 가까운 PoP에서 TLS 종료와 TCP 최적화가 이루어져 API 응답 지연이 감소합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Global Accelerator는 CloudFront와 함께 사용하도록 설계되지 않았습니다. CloudFront 배포는 이미 자체 글로벌 엣지 네트워크를 보유하므로 Global Accelerator를 추가해도 추가적인 이점이 없습니다. Global Accelerator는 ALB·NLB·EC2 같은 비-CloudFront 엔드포인트의 가속에 적합합니다.</p><p><span class="mark-no">❌ D</span> — 전체 스택을 여러 리전에 복제하면 비용이 급증하고 운영 복잡성이 크게 높아집니다. Aurora Serverless v1은 Multi-Region 글로벌 데이터베이스를 지원하지 않으므로 실현 가능성도 낮습니다.</p><p><span class="mark-no">❌ E</span> — RDS Proxy는 Lambda의 데이터베이스 연결 풀링을 개선해 연결 폭발 문제를 완화하지만, 유럽 외부 사용자의 지연 시간 문제와는 무관합니다.</p>`,
    disc: [
      { ans:'A, C', txt:'S3 Transfer Acceleration은 업로드 경로를, 엣지 최적화 API Gateway는 API 요청 경로를 가속화합니다. CloudFront는 정적 콘텐츠 다운로드에 이미 최적화되어 있으므로 누락된 두 병목 지점을 A와 C가 각각 해결합니다.' },
      { ans:'C, D', txt:'D를 선택하면 전체 스택 복제 비용과 Aurora Serverless 글로벌 DB 제약을 간과하게 됩니다. C만으로도 API 지연은 크게 개선되며, A로 업로드 경로까지 커버하는 것이 합리적입니다.' },
    ]
  },
  {
    n: 82,
    en: `An adventure company has launched a new feature on its mobile app. Users can use the feature to upload their hiking and rafting photos and videos anytime. The photos and videos are stored in Amazon S3 Standard storage in an S3 bucket and are served through Amazon CloudFront. The company needs to optimize the cost of the storage. A solutions architect discovers that most of the uploaded photos and videos are accessed infrequently after 30 days. However, some of the uploaded photos and videos are accessed frequently after 30 days. The solutions architect needs to implement a solution that maintains millisecond retrieval availability of the photos and videos at the lowest possible cost.<br/><br/>Which solution will meet these requirements?`,
    ko: `한 모험 여행 회사가 모바일 앱에 새로운 기능을 출시했습니다. 사용자는 이 기능을 이용해 언제든지 하이킹·래프팅 사진과 동영상을 업로드할 수 있습니다. 사진과 동영상은 S3 버킷의 Amazon S3 Standard 스토리지에 저장되며 Amazon CloudFront를 통해 제공됩니다. 회사는 스토리지 비용을 최적화해야 합니다. 솔루션 아키텍트는 업로드된 사진과 동영상의 대부분이 30일 이후에는 드물게 액세스된다는 것을 발견했습니다. 그러나 일부 사진·동영상은 30일 이후에도 자주 액세스됩니다. 솔루션 아키텍트는 가장 낮은 비용으로 밀리초 단위의 검색 가용성을 유지하는 솔루션을 구현해야 합니다.<br/><br/>어떤 솔루션이 이 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure S3 Intelligent-Tiering on the S3 bucket.`, ko:`S3 버킷에 S3 Intelligent-Tiering을 구성합니다.` },
      { k:'B', en:`Configure an S3 Lifecycle policy to transition image objects and video objects from S3 Standard to S3 Glacier Deep Archive after 30 days.`, ko:`30일 후에 이미지 객체와 동영상 객체를 S3 Standard에서 S3 Glacier Deep Archive로 전환하는 S3 수명 주기 정책을 구성합니다.` },
      { k:'C', en:`Replace Amazon S3 with an Amazon Elastic File System (Amazon EFS) file system that is mounted on Amazon EC2 instances.`, ko:`Amazon S3를 Amazon EC2 인스턴스에 마운트된 Amazon Elastic File System(Amazon EFS) 파일 시스템으로 교체합니다.` },
      { k:'D', en:`Add a Cache-Control: max-age header to the S3 image objects and S3 video objects. Set the header to 30 days.`, ko:`S3 이미지 객체와 동영상 객체에 Cache-Control: max-age 헤더를 추가합니다. 헤더를 30일로 설정합니다.` },
    ],
    answer: ['A'],
    vote: '97% A',
    explain: `<p><span class="mark-ok">✅ A — S3 Intelligent-Tiering</span></p><p>S3 Intelligent-Tiering은 객체의 액세스 패턴을 자동으로 모니터링하고, 30일 연속 비액세스 시 객체를 Infrequent Access 계층으로 자동 이동합니다. 이후 해당 객체가 다시 액세스되면 즉시 Frequent Access 계층으로 복귀합니다. 두 계층 모두 밀리초 검색을 지원하며, 검색 수수료가 없습니다. 액세스 패턴이 예측 불가능하거나 혼재(일부는 30일 후에도 자주 액세스)한 이 시나리오에서 Intelligent-Tiering이 가장 비용 효율적인 선택입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — S3 Glacier Deep Archive는 검색에 12시간이 소요되므로 밀리초 가용성 요구 사항을 충족하지 못합니다. 또한 30일 이후에도 자주 액세스되는 객체에는 부적합합니다.</p><p><span class="mark-no">❌ C</span> — EFS는 S3 대비 스토리지 비용이 훨씬 높고(약 3배), EC2 인스턴스 유지 비용도 추가됩니다. 서버리스 워크로드에 맞지 않으며 비용 최적화 목표에 역행합니다.</p><p><span class="mark-no">❌ D</span> — Cache-Control 헤더는 CloudFront 엣지의 캐시 유지 기간을 늘려 원본 요청을 줄이는 효과가 있지만, S3 스토리지 비용 자체를 줄이지는 않습니다.</p>`,
    disc: [
      { ans:'A', txt:'핵심은 "일부 객체는 30일 이후에도 자주 액세스된다"는 점입니다. 고정 Lifecycle 정책(B)은 액세스 빈도를 무시하고 일괄 전환하므로 부적합합니다. Intelligent-Tiering은 개별 객체의 패턴을 추적해 자동으로 계층을 조정합니다.' },
    ]
  },
  {
    n: 83,
    en: `A company uses Amazon S3 to store files and images in a variety of storage classes. The company's S3 costs have increased substantially during the past year.<br/><br/>A solutions architect needs to review data trends for the past 12 months and identity the appropriate storage class for the objects.<br/><br/>Which solution will meet these requirements?`,
    ko: `한 회사가 Amazon S3를 사용하여 다양한 스토리지 클래스에 파일과 이미지를 저장합니다. 회사의 S3 비용이 지난 1년 동안 크게 증가했습니다.<br/><br/>솔루션 아키텍트는 지난 12개월의 데이터 추세를 검토하고 객체에 적합한 스토리지 클래스를 식별해야 합니다.<br/><br/>어떤 솔루션이 이 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Download AWS Cost and Usage Reports for the last 12 months of S3 usage. Review AWS Trusted Advisor recommendations for cost savings.`, ko:`지난 12개월간 S3 사용에 대한 AWS 비용 및 사용 보고서를 다운로드합니다. 비용 절감을 위한 AWS Trusted Advisor 권장 사항을 검토합니다.` },
      { k:'B', en:`Use S3 storage class analysis. Import data trends into an Amazon QuickSight dashboard to analyze storage trends.`, ko:`S3 스토리지 클래스 분석을 사용합니다. 데이터 추세를 Amazon QuickSight 대시보드로 가져와 스토리지 추세를 분석합니다.` },
      { k:'C', en:`Use Amazon S3 Storage Lens. Upgrade the default dashboard to include advanced metrics for storage trends.`, ko:`Amazon S3 Storage Lens를 사용합니다. 스토리지 추세에 대한 고급 지표를 포함하도록 기본 대시보드를 업그레이드합니다.` },
      { k:'D', en:`Use Access Analyzer for S3. Download the Access Analyzer for S3 report for the last 12 months. Import the .csv file to an Amazon QuickSight dashboard.`, ko:`S3용 액세스 분석기를 사용합니다. 지난 12개월의 S3용 액세스 분석기 보고서를 다운로드합니다. .csv 파일을 Amazon QuickSight 대시보드로 가져옵니다.` },
    ],
    answer: ['C'],
    vote: '78% C, 12% B',
    explain: `<p><span class="mark-ok">✅ C — Amazon S3 Storage Lens + advanced metrics</span></p><p>S3 Storage Lens는 조직 전체 S3 스토리지 활동을 집계하는 클라우드 스토리지 분석 서비스입니다. 기본(무료) 지표는 14일치 데이터만 조회 가능하지만, <strong>고급(Advanced) 지표</strong>로 업그레이드하면 최대 <strong>15개월</strong>치 데이터를 조회할 수 있습니다. 따라서 지난 12개월의 스토리지 클래스별 사용량 추세를 분석하여 적절한 스토리지 클래스를 식별하는 요구 사항에 정확히 부합합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Cost and Usage Reports는 비용 데이터를 제공하지만, 객체별·스토리지 클래스별 액세스 패턴 분석은 제공하지 않습니다. Trusted Advisor는 특정 권장 사항을 제시하지만 12개월 추세 분석 기능이 없습니다.</p><p><span class="mark-no">❌ B</span> — S3 스토리지 클래스 분석(Storage Class Analysis)은 Infrequent Access 전환 적기를 식별하는 데 유용하지만, 분석 시작 후 30일 이상이 지나야 데이터가 축적됩니다. 또한 QuickSight로 내보내는 추가 설정이 필요하며, 기본적으로 12개월 이력 데이터를 즉시 제공하지 않습니다.</p><p><span class="mark-no">❌ D</span> — Access Analyzer for S3는 버킷 정책·ACL의 퍼블릭/크로스 계정 액세스 여부를 분석하는 보안 도구입니다. 스토리지 클래스 비용 최적화와는 무관합니다.</p>`,
    disc: [
      { ans:'C', txt:'S3 Storage Lens 고급 지표의 핵심 차별점: 무료 지표는 14일, 고급 지표는 15개월 조회 가능. 12개월 추세 분석 요구 사항에 맞는 유일한 선택입니다.' },
      { ans:'B', txt:'B도 스토리지 추세 분석에 쓰이지만, 30일+ 데이터 수집 대기가 필요하고 과거 12개월 이력이 즉시 제공되지 않는다는 점에서 C가 우선입니다.' },
    ]
  },
  {
    n: 84,
    en: `A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one AWS Region. The company's business expansion plan includes deployments in multiple Regions across multiple AWS accounts.<br/><br/>What should the solutions architect do to meet these requirements?`,
    ko: `회사는 AWS에 클라우드 인프라를 보유하고 있습니다. 솔루션 아키텍트는 인프라를 코드로 정의해야 합니다. 인프라는 현재 하나의 AWS 리전에 배포되어 있습니다. 회사의 비즈니스 확장 계획에는 여러 AWS 계정에 걸쳐 여러 리전에 배포하는 것이 포함됩니다.<br/><br/>솔루션 아키텍트는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use AWS CloudFormation templates. Add IAM policies to control the various accounts, Deploy the templates across the multiple Regions.`, ko:`AWS CloudFormation 템플릿을 사용합니다. IAM 정책을 추가하여 여러 계정을 제어하고 여러 리전에 템플릿을 배포합니다.` },
      { k:'B', en:`Use AWS Organizations. Deploy AWS CloudFormation templates from the management account Use AWS Control Tower to manage deployments across accounts.`, ko:`AWS Organizations를 사용합니다. 관리 계정에서 AWS CloudFormation 템플릿을 배포합니다. AWS Control Tower를 사용하여 계정 전체의 배포를 관리합니다.` },
      { k:'C', en:`Use AWS Organizations and AWS CloudFormation StackSets. Deploy a Cloud Formation template from an account that has the necessary IAM permissions.`, ko:`AWS Organizations와 AWS CloudFormation StackSets를 사용합니다. 필요한 IAM 권한이 있는 계정에서 CloudFormation 템플릿을 배포합니다.` },
      { k:'D', en:`Use nested stacks with AWS CloudFormation templates. Change the Region by using nested stacks.`, ko:`AWS CloudFormation 템플릿과 함께 중첩 스택(nested stacks)을 사용합니다. 중첩 스택을 사용하여 리전을 변경합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Organizations + CloudFormation StackSets</span></p><p>CloudFormation StackSets는 단일 CloudFormation 템플릿을 사용하여 여러 AWS 계정과 여러 리전에 걸쳐 스택을 동시에 생성·업데이트·삭제할 수 있는 기능입니다. AWS Organizations와 통합 시 서비스 관리형(service-managed) 권한을 사용하면 관리자 계정에서 조직 내 모든 대상 계정에 자동으로 스택을 배포할 수 있습니다. 인프라 코드(IaC)를 중앙에서 관리하면서 멀티 리전·멀티 계정 배포를 단일 작업으로 처리할 수 있어 요구 사항에 정확히 부합합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 단순 CloudFormation 템플릿과 IAM 정책만으로는 여러 계정·리전에 자동 배포하는 오케스트레이션 기능이 없습니다. 각 계정·리전에 수동으로 템플릿을 배포해야 하므로 확장성이 없습니다.</p><p><span class="mark-no">❌ B</span> — Control Tower는 랜딩 존(landing zone) 거버넌스 설정에 적합하지만, 기존 CloudFormation 스택을 여러 리전·계정에 반복 배포하는 StackSets 기능을 대체하지 않습니다.</p><p><span class="mark-no">❌ D</span> — 중첩 스택(Nested Stacks)은 단일 스택 내에서 모듈화된 템플릿을 재사용하는 패턴입니다. 다른 리전이나 다른 계정으로의 배포를 지원하지 않습니다.</p>`,
    disc: [
      { ans:'C', txt:'StackSets의 서비스 관리형 권한 모드를 사용하면 Organizations의 OU 단위로 자동 배포가 가능합니다. 새 계정이 OU에 추가될 때도 자동으로 스택이 생성됩니다.' },
    ]
  },
  {
    n: 85,
    en: `A company has its cloud infrastructure on AWS. A solutions architect needs to define the infrastructure as code. The infrastructure is currently deployed in one AWS Region. The company's business expansion plan includes deployments in multiple Regions across multiple AWS accounts.<br/><br/>What should the solutions architect do to meet these requirements?`,
    ko: `회사는 AWS에 클라우드 인프라를 보유하고 있습니다. 솔루션 아키텍트는 인프라를 코드로 정의해야 합니다. 인프라는 현재 하나의 AWS 리전에 배포되어 있습니다. 회사의 비즈니스 확장 계획에는 여러 AWS 계정에 걸쳐 여러 리전에 배포하는 것이 포함됩니다.<br/><br/>솔루션 아키텍트는 이 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Use AWS CloudFormation templates. Add IAM policies to control the various accounts, Deploy the templates across the multiple Regions.`, ko:`AWS CloudFormation 템플릿을 사용합니다. IAM 정책을 추가하여 여러 계정을 제어하고 여러 리전에 템플릿을 배포합니다.` },
      { k:'B', en:`Use AWS Organizations. Deploy AWS CloudFormation templates from the management account Use AWS Control Tower to manage deployments across accounts.`, ko:`AWS Organizations를 사용합니다. 관리 계정에서 AWS CloudFormation 템플릿을 배포합니다. AWS Control Tower를 사용하여 계정 전체의 배포를 관리합니다.` },
      { k:'C', en:`Use AWS Organizations and AWS CloudFormation StackSets. Deploy a Cloud Formation template from an account that has the necessary IAM permissions.`, ko:`AWS Organizations와 AWS CloudFormation StackSets를 사용합니다. 필요한 IAM 권한이 있는 계정에서 CloudFormation 템플릿을 배포합니다.` },
      { k:'D', en:`Use nested stacks with AWS CloudFormation templates. Change the Region by using nested stacks.`, ko:`AWS CloudFormation 템플릿과 함께 중첩 스택(nested stacks)을 사용합니다. 중첩 스택을 사용하여 리전을 변경합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Organizations + CloudFormation StackSets</span></p><p>Q84와 동일한 문제입니다. CloudFormation StackSets를 AWS Organizations와 함께 사용하면 단일 관리 지점에서 멀티 계정·멀티 리전에 인프라를 코드로 배포할 수 있습니다. 서비스 관리형 권한 사용 시 Organizations OU 기반의 자동 배포도 지원합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, B, D</span> — Q84 오답 해설과 동일합니다. 이 문제는 ExamTopics에 Q84와 중복 등재된 문제입니다.</p>`,
    disc: [
      { ans:'C', txt:'Q84와 동일한 중복 문제입니다. 정답은 C — CloudFormation StackSets + Organizations 조합입니다.' },
    ]
  },
  {
    n: 86,
    en: `A company plans to refactor a monolithic application into a modern application design deployed on AWS. The CI/CD pipeline needs to be upgraded to support the modern design for the application with the following requirements:<br/><br/>•&nbsp;It should allow changes to be released several times every hour.<br/>•&nbsp;It should be able to roll back the changes as quickly as possible.<br/><br/>Which design will meet these requirements?`,
    ko: `한 회사가 모놀리식 애플리케이션을 AWS에 배포된 현대적인 애플리케이션 디자인으로 리팩터링할 계획입니다. CI/CD 파이프라인은 다음 요구 사항으로 현대적인 디자인을 지원하도록 업그레이드되어야 합니다.<br/><br/>• 변경 사항을 매시간 여러 번 릴리스할 수 있어야 합니다.<br/>• 변경 사항을 최대한 빠르게 롤백할 수 있어야 합니다.<br/><br/>어떤 디자인이 이 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Deploy a CI/CD pipeline that incorporates AMIs to contain the application and their configurations. Deploy the application by replacing Amazon EC2 instances.`, ko:`애플리케이션과 해당 구성을 포함하기 위해 AMI를 통합하는 CI/CD 파이프라인을 배포합니다. Amazon EC2 인스턴스를 교체하여 애플리케이션을 배포합니다.` },
      { k:'B', en:`Specify AWS Elastic Beanstalk to stage in a secondary environment as the deployment target for the CI/CD pipeline of the application. To deploy, swap the staging and production environment URLs.`, ko:`애플리케이션의 CI/CD 파이프라인의 배포 대상으로 보조 환경에서 스테이징하도록 AWS Elastic Beanstalk를 지정합니다. 배포하려면 스테이징 환경과 프로덕션 환경 URL을 교체합니다.` },
      { k:'C', en:`Use AWS Systems Manager to re-provision the infrastructure for each deployment. Update the Amazon EC2 user data to pull the latest code artifact from Amazon S3 and use Amazon Route 53 weighted routing to point to the new environment.`, ko:`AWS Systems Manager를 사용하여 각 배포마다 인프라를 다시 프로비저닝합니다. Amazon EC2 사용자 데이터를 업데이트하여 Amazon S3에서 최신 코드 아티팩트를 가져오고 Amazon Route 53 가중 라우팅을 사용하여 새 환경을 가리킵니다.` },
      { k:'D', en:`Roll out the application updates as part of an Auto Scaling event using prebuilt AMIs. Use new versions of the AMIs to add instances. and phase out all instances that use the previous AMI version with the configured termination policy during a deployment event.`, ko:`사전 구축된 AMI를 사용하여 Auto Scaling 이벤트의 일부로 애플리케이션 업데이트를 롤아웃합니다. 새 버전의 AMI를 사용하여 인스턴스를 추가합니다. 배포 이벤트 중에 구성된 종료 정책으로 이전 AMI 버전을 사용하는 모든 인스턴스를 단계적으로 종료합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Elastic Beanstalk blue/green 환경 교체</span></p><p>Elastic Beanstalk의 환경 URL 교체(CNAME swap) 방식은 블루/그린 배포를 구현합니다. 새 버전을 스테이징(그린) 환경에 배포한 뒤 URL을 교체하면 트래픽이 즉시 새 환경으로 전환되므로 다운타임 없이 시간당 여러 번 릴리스가 가능합니다. 문제 발생 시 URL을 원래대로 재교체하면 수 초 내에 롤백이 완료됩니다. 두 요구 사항(빈번한 릴리스 + 빠른 롤백)을 모두 충족하는 최적 선택입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AMI 기반 EC2 인스턴스 교체는 새 AMI 빌드 → 인스턴스 교체 시간이 필요해 시간당 여러 번 릴리스가 현실적으로 어렵습니다. 롤백도 이전 AMI로 인스턴스를 재교체해야 하므로 느립니다.</p><p><span class="mark-no">❌ C</span> — Systems Manager + Route 53 가중 라우팅 조합은 카나리아 배포에 유용하지만, 매번 인프라를 다시 프로비저닝하는 방식은 시간이 걸리고 빠른 롤백이 어렵습니다.</p><p><span class="mark-no">❌ D</span> — Auto Scaling AMI 교체 방식은 인스턴스가 서서히 교체되어 빠른 롤백이 어렵습니다. 이전 버전으로 돌아가려면 새 AMI를 다시 빌드하거나 런치 구성을 수동으로 변경해야 합니다.</p>`,
    disc: [
      { ans:'B', txt:'Elastic Beanstalk CNAME swap은 DNS TTL 수준(수 초)의 즉각적인 전환과 롤백을 지원합니다. 이 점이 A·C·D와 결정적으로 다릅니다.' },
    ]
  },
  {
    n: 87,
    en: `A company has an application that runs on Amazon EC2 instances. A solutions architect is designing VPC infrastructure in an AWS Region where the application needs to access an Amazon Aurora DB Cluster. The EC2 instances are all associated with the same security group. The DB cluster is associated with its own security group.<br/><br/>The solutions architect needs to add rules to the security groups to provide the application with least privilege access to the DB Cluster.<br/><br/>Which combination of steps will meet these requirements? (Choose two.)`,
    ko: `회사에 Amazon EC2 인스턴스에서 실행되는 애플리케이션이 있습니다. 솔루션 아키텍트는 애플리케이션이 Amazon Aurora DB 클러스터에 액세스해야 하는 AWS 리전에서 VPC 인프라를 설계하고 있습니다. EC2 인스턴스는 모두 동일한 보안 그룹과 연결되어 있습니다. DB 클러스터는 자체 보안 그룹과 연결되어 있습니다.<br/><br/>솔루션 아키텍트는 애플리케이션에 DB 클러스터에 대한 최소 권한 액세스를 제공하기 위해 보안 그룹에 규칙을 추가해야 합니다.<br/><br/>이 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi', multiCount: 2,
    choices: [
      { k:'A', en:`Add an inbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the source over the default Aurora port.`, ko:`EC2 인스턴스의 보안 그룹에 인바운드 규칙을 추가합니다. 기본 Aurora 포트를 통한 소스로 DB 클러스터의 보안 그룹을 지정합니다.` },
      { k:'B', en:`Add an outbound rule to the EC2 instances' security group. Specify the DB cluster's security group as the destination over the default Aurora port.`, ko:`EC2 인스턴스의 보안 그룹에 아웃바운드 규칙을 추가합니다. 기본 Aurora 포트를 통한 대상으로 DB 클러스터의 보안 그룹을 지정합니다.` },
      { k:'C', en:`Add an inbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the source over the default Aurora port.`, ko:`DB 클러스터의 보안 그룹에 인바운드 규칙을 추가합니다. 기본 Aurora 포트를 통한 소스로 EC2 인스턴스의 보안 그룹을 지정합니다.` },
      { k:'D', en:`Add an outbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the destination over the default Aurora port.`, ko:`DB 클러스터의 보안 그룹에 아웃바운드 규칙을 추가합니다. 기본 Aurora 포트를 통한 대상으로 EC2 인스턴스의 보안 그룹을 지정합니다.` },
      { k:'E', en:`Add an outbound rule to the DB cluster's security group. Specify the EC2 instances' security group as the destination over the ephemeral ports.`, ko:`DB 클러스터의 보안 그룹에 아웃바운드 규칙을 추가합니다. 임시 포트(ephemeral ports)를 통한 대상으로 EC2 인스턴스의 보안 그룹을 지정합니다.` },
    ],
    answer: ['B', 'C'],
    vote: '76% BC, 24% AC',
    explain: `<p><span class="mark-ok">✅ B — EC2 보안 그룹에 아웃바운드 규칙 추가 (대상: DB SG, 포트: Aurora 기본 포트)</span></p><p>EC2 인스턴스가 DB 클러스터로 연결을 시작하므로, EC2 측 보안 그룹에는 DB 포트로의 <strong>아웃바운드</strong> 규칙이 필요합니다. IP 대역 대신 DB 클러스터의 보안 그룹 ID를 대상으로 지정하면 최소 권한 원칙(IP 범위 하드코딩 없이)이 구현됩니다.</p><p><span class="mark-ok">✅ C — DB 보안 그룹에 인바운드 규칙 추가 (소스: EC2 SG, 포트: Aurora 기본 포트)</span></p><p>DB 클러스터가 EC2에서 오는 연결을 수락하려면 DB 보안 그룹에 EC2 보안 그룹 ID를 소스로 지정한 <strong>인바운드</strong> 규칙이 필요합니다. 보안 그룹 참조 방식은 동적으로 추가·삭제되는 EC2 인스턴스 IP를 자동으로 처리합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2 인스턴스 보안 그룹에 "DB SG를 소스로 하는 인바운드" 규칙은 DB가 EC2로 연결을 시작하는 방향입니다. 실제 흐름(EC2 → DB)과 반대이므로 필요하지 않습니다.</p><p><span class="mark-no">❌ D, E</span> — AWS 보안 그룹은 상태 기반(stateful)이므로, 허용된 인바운드 연결의 반환 트래픽은 아웃바운드 규칙 없이도 자동으로 허용됩니다. DB 보안 그룹에 아웃바운드 규칙을 추가할 필요가 없습니다.</p>`,
    disc: [
      { ans:'B, C', txt:'보안 그룹은 stateful이라 허용된 인바운드의 반환 트래픽은 자동 허용됩니다. 따라서 DB SG에는 아웃바운드 규칙(D, E)이 불필요하고, EC2 SG의 아웃바운드(B) + DB SG의 인바운드(C)만으로 충분합니다.' },
      { ans:'A, C', txt:'일부는 EC2의 기본 아웃바운드 규칙(0.0.0.0/0 허용)이 이미 있다고 가정해 A+C를 선택합니다. 하지만 최소 권한 원칙에서는 명시적 아웃바운드 규칙(B)을 추가하는 것이 올바릅니다.' },
    ]
  },
  {
    n: 88,
    en: `A company wants to change its internal cloud billing strategy for each of its business units. Currently, the cloud governance team shares reports for overall cloud spending with the head of each business unit. The company uses AWS Organizations to manage the separate AWS accounts for each business unit. The existing tagging standard in Organizations includes the application, environment, and owner. The cloud governance team wants a centralized solution so each business unit receives monthly reports on its cloud spending. The solution should also send notifications for any cloud spending that exceeds a set threshold.<br/><br/>Which solution is the MOST cost-effective way to meet these requirements?`,
    ko: `회사는 각 사업부에 대한 내부 클라우드 청구 전략을 변경하려고 합니다. 현재 클라우드 거버넌스 팀은 전체 클라우드 지출에 대한 보고서를 각 사업부 책임자와 공유하고 있습니다. 회사는 AWS Organizations를 사용하여 각 사업부에 대한 별도의 AWS 계정을 관리합니다. Organizations의 기존 태깅 표준에는 애플리케이션, 환경 및 소유자가 포함됩니다. 클라우드 거버넌스 팀은 각 사업부가 클라우드 지출에 대한 월간 보고서를 받을 수 있는 중앙 집중식 솔루션을 원합니다. 솔루션은 설정된 임계값을 초과하는 클라우드 지출에 대한 알림도 보내야 합니다.<br/><br/>이 요구 사항을 충족하는 가장 비용 효율적인 방법은 무엇입니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in each account to create monthly reports for each business unit.`, ko:`각 계정에서 AWS Budgets를 구성하고 애플리케이션, 환경 및 소유자별로 그룹화된 예산 알림을 구성합니다. 각 알림에 대한 Amazon SNS 주제에 각 사업부를 추가합니다. 각 계정에서 Cost Explorer를 사용하여 각 사업부에 대한 월별 보고서를 생성합니다.` },
      { k:'B', en:`Configure AWS Budgets in the organization's management account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use Cost Explorer in the organization's management account to create monthly reports for each business unit.`, ko:`조직의 관리 계정에서 AWS Budgets를 구성하고 애플리케이션, 환경 및 소유자별로 그룹화된 예산 알림을 구성합니다. 각 알림에 대한 Amazon SNS 주제에 각 사업부를 추가합니다. 조직의 관리 계정에서 Cost Explorer를 사용하여 각 사업부에 대한 월별 보고서를 생성합니다.` },
      { k:'C', en:`Configure AWS Budgets in each account and configure budget alerts that are grouped by application, environment, and owner. Add each business unit to an Amazon SNS topic for each alert. Use the AWS Billing and Cost Management dashboard in each account to create monthly reports for each business unit.`, ko:`각 계정에서 AWS Budgets를 구성하고 애플리케이션, 환경 및 소유자별로 그룹화된 예산 알림을 구성합니다. 각 알림에 대한 Amazon SNS 주제에 각 사업부를 추가합니다. 각 계정의 AWS Billing and Cost Management 대시보드를 사용하여 각 사업부에 대한 월별 보고서를 생성합니다.` },
      { k:'D', en:`Enable AWS Cost and Usage Reports in the organization's management account and configure reports grouped by application, environment. and owner. Create an AWS Lambda function that processes AWS Cost and Usage Reports, sends budget alerts, and sends monthly reports to each business unit's email list.`, ko:`조직의 관리 계정에서 AWS 비용 및 사용 보고서(CUR)를 활성화하고 애플리케이션, 환경 및 소유자별로 그룹화된 보고서를 구성합니다. AWS 비용 및 사용 보고서를 처리하고 예산 알림을 보내며 각 사업부의 이메일 목록에 월별 보고서를 보내는 AWS Lambda 함수를 생성합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 관리 계정에서 AWS Budgets + Cost Explorer 중앙 집중 관리</span></p><p>AWS Organizations의 관리 계정은 조직 내 모든 계정의 통합 청구(Consolidated Billing) 데이터를 보유합니다. 관리 계정에서 AWS Budgets를 구성하면 태그(application·environment·owner) 기반으로 조직 전체 비용을 필터링하고 임계값 초과 시 SNS를 통해 알림을 보낼 수 있습니다. Cost Explorer도 관리 계정에서 전체 조직 지출을 분석하여 사업부별 월간 보고서를 생성할 수 있습니다. 각 계정에서 개별 설정할 필요가 없어 운영 오버헤드가 최소화됩니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — 각 계정에서 Budgets를 개별 설정하면 계정 수만큼 관리 포인트가 늘어나고, 조직 전체의 통합 뷰가 없습니다. 중앙 집중식 솔루션 요구 사항에 맞지 않습니다.</p><p><span class="mark-no">❌ D</span> — CUR + Lambda 조합은 유연하지만 Lambda 개발·운영 비용이 추가되며 AWS Budgets의 기본 임계값 알림 기능으로 충분히 해결 가능한 요구 사항에 대해 과도한 복잡성을 초래합니다.</p>`,
    disc: [
      { ans:'B', txt:'관리 계정에서 Budgets + Cost Explorer를 사용하면 태그 기반 필터로 사업부별 비용 분리가 가능합니다. 태그 활성화(Cost Allocation Tags)는 사전에 관리 계정에서 설정해야 합니다.' },
    ]
  },
  {
    n: 89,
    en: `A company is using AWS CloudFormation to deploy its infrastructure. The company is concerned that, if a production CloudFormation stack is deleted, important data stored in Amazon RDS databases or Amazon EBS volumes might also be deleted.<br/><br/>How can the company prevent users from accidentally deleting data in this way?`,
    ko: `한 회사가 AWS CloudFormation을 사용하여 인프라를 배포하고 있습니다. 회사는 프로덕션 CloudFormation 스택이 삭제되면 Amazon RDS 데이터베이스 또는 Amazon EBS 볼륨에 저장된 중요한 데이터도 삭제될 수 있다는 점을 우려하고 있습니다.<br/><br/>회사는 사용자가 이런 방식으로 실수로 데이터를 삭제하는 것을 어떻게 방지할 수 있습니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Modify the CloudFormation templates to add a DeletionPolicy attribute to RDS and EBS resources.`, ko:`CloudFormation 템플릿을 수정하여 RDS 및 EBS 리소스에 DeletionPolicy 속성을 추가합니다.` },
      { k:'B', en:`Configure a stack policy that disallows the deletion of RDS and EBS resources.`, ko:`RDS 및 EBS 리소스 삭제를 허용하지 않는 스택 정책을 구성합니다.` },
      { k:'C', en:`Modify IAM policies lo deny deleting RDS and EBS resources that are tagged with an "aws:cloudformation:stack-name" tag.`, ko:`IAM 정책을 수정하여 "aws:cloudformation:stack-name" 태그가 지정된 RDS 및 EBS 리소스 삭제를 거부합니다.` },
      { k:'D', en:`Use AWS Config rules to prevent deleting RDS and EBS resources.`, ko:`AWS Config 규칙을 사용하여 RDS 및 EBS 리소스 삭제를 방지합니다.` },
    ],
    answer: ['A'],
    vote: '85% A, 15% B',
    explain: `<p><span class="mark-ok">✅ A — CloudFormation DeletionPolicy 속성</span></p><p><code>DeletionPolicy</code>는 CloudFormation 리소스에 적용되는 속성으로, 스택 삭제 시 해당 리소스를 어떻게 처리할지 결정합니다. RDS·EBS 리소스에 <code>DeletionPolicy: Retain</code>을 설정하면 스택이 삭제되어도 리소스는 그대로 유지됩니다. RDS에는 <code>DeletionPolicy: Snapshot</code>도 사용 가능하며, 삭제 전 자동으로 최종 스냅샷을 생성합니다. 이 접근법은 CloudFormation 스택 수명주기와 데이터 수명주기를 분리하는 가장 직접적이고 권장되는 방법입니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 스택 정책(Stack Policy)은 스택 <em>업데이트</em> 시 특정 리소스의 변경을 제한하는 데 사용됩니다. 스택 자체를 삭제하는 것은 제한하지 않으므로 스택 삭제 시 RDS·EBS가 함께 삭제되는 것을 막지 못합니다.</p><p><span class="mark-no">❌ C</span> — IAM 정책으로 RDS·EBS 삭제를 거부하면 CloudFormation이 스택 삭제 중 해당 리소스를 삭제하지 못해 스택 삭제 자체가 실패합니다. 데이터 보호와 스택 정리 모두 불가능해지는 부작용이 있습니다.</p><p><span class="mark-no">❌ D</span> — AWS Config는 리소스의 구성 상태를 평가하고 기록하지만, 리소스 삭제 작업 자체를 실시간으로 차단하는 기능이 없습니다. 사후 감지 도구로만 활용됩니다.</p>`,
    disc: [
      { ans:'A', txt:'DeletionPolicy: Retain은 스택 삭제 후 RDS·EBS를 독립 리소스로 유지합니다. DeletionPolicy: Snapshot(RDS 전용)은 삭제 전 스냅샷을 자동 생성하므로 데이터 복구 옵션도 확보됩니다.' },
      { ans:'B', txt:'스택 정책은 스택 업데이트 시 리소스 수정을 제어하는 도구이며 스택 삭제와는 무관합니다. B는 오답입니다.' },
    ]
  },
  {
    n: 90,
    en: `A company has VPC flow logs enabled for Its NAT gateway. The company is seeing Action = ACCEPT for inbound traffic that comes from public IP address 198.51.100.2 destined for a private Amazon EC2 instance.<br/><br/>A solutions architect must determine whether the traffic represents unsolicited inbound connections from the internet. The first two octets of the VPC CIDR block are 203.0.<br/><br/>Which set of steps should the solutions architect take to meet these requirements?`,
    ko: `회사는 NAT 게이트웨이에 대해 VPC 흐름 로그를 활성화했습니다. 회사에서는 퍼블릭 IP 주소 198.51.100.2에서 프라이빗 Amazon EC2 인스턴스로 향하는 인바운드 트래픽에 대해 Action = ACCEPT가 표시됩니다.<br/><br/>솔루션 아키텍트는 해당 트래픽이 인터넷에서 오는 원치 않는 인바운드 연결인지 여부를 확인해야 합니다. VPC CIDR 블록의 처음 두 옥텟은 203.0입니다.<br/><br/>솔루션 아키텍트는 이 요구 사항을 충족하기 위해 어떤 단계를 수행해야 합니까?`,
    type: 'single',
    choices: [
      { k:'A', en:`Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interlace. Run a query to filter with the destination address set as "like 203.0" and the source address set as "like 198.51.100.2". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.`, ko:`AWS CloudTrail 콘솔을 엽니다. NAT 게이트웨이의 탄력적 네트워크 인터페이스와 프라이빗 인스턴스의 탄력적 네트워크 인터페이스가 포함된 로그 그룹을 선택합니다. 대상 주소를 "like 203.0"으로 설정하고 소스 주소를 "like 198.51.100.2"로 설정하여 필터링하는 쿼리를 실행합니다. stats 명령을 실행하여 소스 주소와 대상 주소로 전송된 바이트 합계를 필터링합니다.` },
      { k:'B', en:`Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as "like 203.0" and the source address set as "like 198.51.100.2". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.`, ko:`Amazon CloudWatch 콘솔을 엽니다. NAT 게이트웨이의 탄력적 네트워크 인터페이스와 프라이빗 인스턴스의 탄력적 네트워크 인터페이스가 포함된 로그 그룹을 선택합니다. 대상 주소를 "like 203.0"으로 설정하고 소스 주소를 "like 198.51.100.2"로 설정하여 필터링하는 쿼리를 실행합니다. stats 명령을 실행하여 소스 주소와 대상 주소로 전송된 바이트 합계를 필터링합니다.` },
      { k:'C', en:`Open the AWS CloudTrail console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as "like 198.51.100.2" and the source address set as "like 203.0". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.`, ko:`AWS CloudTrail 콘솔을 엽니다. NAT 게이트웨이의 탄력적 네트워크 인터페이스와 프라이빗 인스턴스의 탄력적 네트워크 인터페이스가 포함된 로그 그룹을 선택합니다. 대상 주소를 "like 198.51.100.2"로 설정하고 소스 주소를 "like 203.0"으로 설정하여 필터링하는 쿼리를 실행합니다. stats 명령을 실행하여 소스 주소와 대상 주소로 전송된 바이트 합계를 필터링합니다.` },
      { k:'D', en:`Open the Amazon CloudWatch console. Select the log group that contains the NAT gateway's elastic network interface and the private instance's elastic network interface. Run a query to filter with the destination address set as "like 198.51.100.2" and the source address set as "like 203.0". Run the stats command to filter the sum of bytes transferred by the source address and the destination address.`, ko:`Amazon CloudWatch 콘솔을 엽니다. NAT 게이트웨이의 탄력적 네트워크 인터페이스와 프라이빗 인스턴스의 탄력적 네트워크 인터페이스가 포함된 로그 그룹을 선택합니다. 대상 주소를 "like 198.51.100.2"로 설정하고 소스 주소를 "like 203.0"으로 설정하여 필터링하는 쿼리를 실행합니다. stats 명령을 실행하여 소스 주소와 대상 주소로 전송된 바이트 합계를 필터링합니다.` },
    ],
    answer: ['B'],
    vote: '66% B, 34% D',
    explain: `<p><span class="mark-ok">✅ B — Amazon CloudWatch Logs에서 VPC 흐름 로그 쿼리</span></p><p>VPC 흐름 로그는 <strong>CloudTrail이 아닌 Amazon CloudWatch Logs</strong>에 저장됩니다. 이것이 A·C를 제거하는 핵심 이유입니다. 쿼리 방향은 다음과 같이 분석합니다: 원치 않는 인바운드 연결 여부를 확인하려면 198.51.100.2(외부 IP)에서 VPC(203.0.x.x)로 향하는 트래픽 양을 측정해야 합니다. 따라서 <code>srcAddr like '198.51.100.2'</code>이고 <code>dstAddr like '203.0'</code>인 로그를 집계합니다. 이 방향의 바이트 합계가 크고 반대 방향(VPC → 외부 IP)이 없거나 적다면 원치 않는 인바운드 연결임을 확인할 수 있습니다. AWS 공식 Knowledge Center에서도 이 접근법을 권장합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — VPC 흐름 로그는 CloudTrail이 아닌 CloudWatch Logs(또는 S3)에 저장됩니다. CloudTrail은 AWS API 호출 이벤트를 기록하며 네트워크 흐름 데이터를 포함하지 않습니다.</p><p><span class="mark-no">❌ D</span> — D의 쿼리는 VPC(203.0)에서 외부 IP(198.51.100.2)로 향하는 <em>아웃바운드</em> 트래픽을 조회합니다. 이는 VPC가 먼저 연결을 시작했는지(요청된 트래픽) 확인하는 데 유용하지만, 원치 않는 <em>인바운드</em> 연결 여부를 직접 확인하는 목적에는 B가 더 직접적입니다.</p>`,
    disc: [
      { ans:'B', txt:'VPC 흐름 로그 분석의 핵심: (1) CloudWatch Logs에 저장됨(CloudTrail X), (2) 인바운드 의심 트래픽 확인 시 srcAddr = 외부 IP, dstAddr = VPC CIDR 처음 두 옥텟으로 필터링합니다.' },
      { ans:'D', txt:'D는 VPC에서 외부 IP로의 아웃바운드(=연결 요청 방향)를 보는 쿼리입니다. 이 방향에 바이트가 없다면 외부에서 일방적으로 들어오는 트래픽임을 간접 확인할 수 있어, 일부는 D도 유효하다고 봅니다.' },
    ]
  }
];
