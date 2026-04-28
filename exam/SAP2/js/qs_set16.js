window.QS_SET16 = [
  {
    n: 151,
    en: `A company has migrated an application from on premises to AWS. The application frontend is a static website that runs on two Amazon EC2 instances behind an Application Load Balancer (ALB). The application backend is a Python application that runs on three EC2 instances behind another ALB. The EC2 instances are large, general purpose On-Demand Instances that were sized to meet the on-premises specifications for peak usage of the application.<br><br>The application averages hundreds of thousands of requests each month. However, the application is used mainly during lunchtime and receives minimal traffic during the rest of the day.<br><br>A solutions architect needs to optimize the infrastructure cost of the application without negatively affecting the application availability.<br><br>Which combination of steps will meet these requirements? (Choose two.)`,
    ko: `한 회사가 애플리케이션을 온프레미스에서 AWS로 마이그레이션했습니다. 애플리케이션 프런트엔드는 Application Load Balancer(ALB) 뒤에 있는 두 개의 Amazon EC2 인스턴스에서 실행되는 정적 웹 사이트입니다. 애플리케이션 백엔드는 다른 ALB 뒤에 있는 3개의 EC2 인스턴스에서 실행되는 Python 애플리케이션입니다. EC2 인스턴스는 애플리케이션의 최대 사용량에 대한 온프레미스 사양을 충족하도록 크기가 조정된 대규모 범용 온디맨드 인스턴스입니다.<br><br>이 애플리케이션은 매월 평균 수십만 건의 요청을 처리합니다. 그러나 애플리케이션은 주로 점심 시간에 사용되며 나머지 시간에는 트래픽이 최소화됩니다.<br><br>솔루션 설계자는 애플리케이션 가용성에 부정적인 영향을 주지 않고 애플리케이션의 인프라 비용을 최적화해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Change all the EC2 instances to compute optimized instances that have the same number of cores as the existing EC2 instances.`, ko: `기존 EC2 인스턴스와 동일한 수의 코어를 가진 컴퓨팅 최적화 인스턴스로 모든 EC2 인스턴스를 변경합니다.` },
      { k: 'B', en: `Move the application frontend to a static website that is hosted on Amazon S3.`, ko: `애플리케이션 프런트엔드를 Amazon S3에서 호스팅되는 정적 웹 사이트로 이동합니다.` },
      { k: 'C', en: `Deploy the application frontend by using AWS Elastic Beanstalk. Use the same instance type for the nodes.`, ko: `AWS Elastic Beanstalk를 사용하여 애플리케이션 프런트엔드를 배포합니다. 노드에 동일한 인스턴스 유형을 사용합니다.` },
      { k: 'D', en: `Change all the backend EC2 instances to Spot Instances.`, ko: `모든 백엔드 EC2 인스턴스를 스팟 인스턴스로 변경합니다.` },
      { k: 'E', en: `Deploy the backend Python application to general purpose burstable EC2 instances that have the same number of cores as the existing EC2 instances.`, ko: `기존 EC2 인스턴스와 코어 수가 동일한 범용 버스트 가능 EC2 인스턴스에 백엔드 Python 애플리케이션을 배포합니다.` },
    ],
    answer: ['B', 'E'],
    vote: '92% BE',
    explain: `<p><span class="mark-ok">✅ B — 프런트엔드를 Amazon S3 정적 웹 사이트로 이동</span></p>
<p>정적 HTML/CSS/JS로 구성된 프런트엔드는 EC2 인스턴스 없이 Amazon S3에서 직접 호스팅할 수 있습니다. S3 정적 웹 사이트 호스팅은 EC2 인스턴스 실행 비용보다 훨씬 저렴하며, CloudFront와 결합하면 글로벌 성능도 향상됩니다.</p>
<p><span class="mark-ok">✅ E — 백엔드를 버스트 가능 EC2 인스턴스(T 시리즈)로 전환</span></p>
<p>버스트 가능 인스턴스(T3, T4g 등)는 낮은 기준 CPU 성능으로 가동되다가 점심 시간 같은 피크 시간에 CPU 크레딧을 사용해 일시적으로 높은 성능을 제공합니다. 평소 낮은 트래픽 시간대에 비용 절감 효과가 크며, 가용성에는 영향이 없습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 컴퓨팅 최적화 인스턴스는 범용 인스턴스보다 코어당 비용이 더 높을 수 있습니다. 단순히 인스턴스 유형을 변경하는 것은 비용 절감으로 이어지지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Elastic Beanstalk를 사용해도 동일한 인스턴스 유형을 그대로 사용하면 비용이 절감되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — 스팟 인스턴스는 언제든지 중단될 수 있어 프로덕션 웹 애플리케이션의 가용성에 부정적인 영향을 줍니다. 가용성을 유지해야 한다는 요구사항에 위배됩니다.</p>`,
    disc: [
      { ans: 'BE (92%)', txt: '정적 프런트엔드는 S3로 이전하여 EC2 비용 절감(B). Python 백엔드는 점심 시간만 피크이므로 버스트 가능 인스턴스가 적합(E). 스팟 인스턴스(D)는 가용성 위협으로 부적합.' },
    ]
  },
  {
    n: 152,
    en: `A company is running an event ticketing platform on AWS and wants to optimize the platform's cost-effectiveness. The platform is deployed on Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 and is backed by an Amazon RDS for MySQL DB instance. The company is developing new application features to run on Amazon EKS with AWS Fargate.<br><br>The platform experiences infrequent high peaks in demand. The surges in demand depend on event dates.<br><br>Which solution will provide the MOST cost-effective setup for the platform?`,
    ko: `한 회사가 AWS에서 이벤트 티켓팅 플랫폼을 운영하고 있으며 플랫폼의 비용 효율성을 최적화하려고 합니다. 이 플랫폼은 Amazon EC2와 함께 Amazon EKS에 배포되며 MySQL DB 인스턴스용 Amazon RDS의 지원을 받습니다. 이 회사는 AWS Fargate와 함께 Amazon EKS에서 실행할 수 있는 새로운 애플리케이션 기능을 개발하고 있습니다.<br><br>플랫폼은 드물게 높은 수요 피크를 경험합니다. 수요 급증은 이벤트 날짜에 따라 다릅니다.<br><br>플랫폼에 가장 비용 효율적인 설정을 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Purchase Standard Reserved Instances for the EC2 instances that the EKS cluster uses in its baseline load. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet predicted peak load for the year.`, ko: `EKS 클러스터가 기준 로드에 사용하는 EC2 인스턴스에 대한 표준 예약 인스턴스를 구매합니다. 피크를 처리하려면 스팟 인스턴스로 클러스터를 확장합니다. 해당 연도의 예상 최대 로드를 충족하려면 데이터베이스에 대한 1년 전체 선결제 예약 인스턴스를 구매합니다.` },
      { k: 'B', en: `Purchase Compute Savings Plans for the predicted medium load of the EKS cluster. Scale the cluster with On-Demand Capacity Reservations based on event dates for peaks. Purchase 1-year No Upfront Reserved Instances for the database to meet the predicted base load. Temporarily scale out database read replicas during peaks.`, ko: `EKS 클러스터의 예상 중간 로드에 대한 Compute Savings Plan을 구매합니다. 피크 이벤트 날짜를 기준으로 온디맨드 용량 예약을 통해 클러스터를 확장합니다. 예측된 기본 로드를 충족하려면 데이터베이스에 대한 1년 선결제 없음 예약 인스턴스를 구매합니다. 피크 기간 동안 데이터베이스 읽기 복제본을 일시적으로 확장합니다.` },
      { k: 'C', en: `Purchase EC2 Instance Savings Plans for the predicted base load of the EKS cluster. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet the predicted base load. Temporarily scale up the DB instance manually during peaks.`, ko: `EKS 클러스터의 예상 기본 로드에 대한 EC2 Instance Savings Plan을 구매합니다. 피크를 처리하려면 스팟 인스턴스로 클러스터를 확장합니다. 예상 기본 로드를 충족하려면 데이터베이스에 대한 1년 전체 선결제 예약 인스턴스를 구매합니다. 피크 기간 동안 일시적으로 DB 인스턴스를 수동으로 확장합니다.` },
      { k: 'D', en: `Purchase Compute Savings Plans for the predicted base load of the EKS cluster. Scale the cluster with Spot Instances to handle peaks. Purchase 1-year All Upfront Reserved Instances for the database to meet the predicted base load. Temporarily scale up the DB instance manually during peaks.`, ko: `EKS 클러스터의 예상 기본 로드에 대한 Compute Savings Plan을 구매합니다. 피크를 처리하려면 스팟 인스턴스로 클러스터를 확장합니다. 예상 기본 로드를 충족하려면 데이터베이스에 대한 1년 전체 선결제 예약 인스턴스를 구매합니다. 피크 기간 동안 일시적으로 DB 인스턴스를 수동으로 확장합니다.` },
    ],
    answer: ['B'],
    vote: '69% B',
    explain: `<p><span class="mark-ok">✅ B — Compute Savings Plans + 온디맨드 용량 예약 + No Upfront RI + 읽기 복제본</span></p>
<p><strong>Compute Savings Plans</strong>는 EC2뿐만 아니라 <strong>AWS Fargate</strong>에도 적용됩니다. 회사가 Fargate로 전환할 계획이므로 EC2 Instance Savings Plans(A, C)는 Fargate를 커버하지 못해 부적합합니다. 이벤트 날짜를 알고 있으므로 <strong>온디맨드 용량 예약</strong>으로 피크 시 필요한 용량을 사전 확보할 수 있습니다(스팟 인스턴스는 중단 가능성으로 프로덕션 부적합). DB RI는 No Upfront로 유연성을 유지하고, 피크 시 읽기 복제본 추가로 읽기 부하를 분산합니다.</p>
<p><a href="https://aws.amazon.com/savingsplans/compute-pricing/" target="_blank">AWS 공식 문서: Compute Savings Plans</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — Standard Reserved Instances와 EC2 Instance Savings Plans는 Fargate를 커버하지 않습니다. 회사가 Fargate로 이전할 계획이므로 Fargate를 포함하는 Compute Savings Plans가 필요합니다.</p>
<p><span class="mark-no">❌ D</span> — B와 거의 동일하지만 피크 처리에 스팟 인스턴스를 사용합니다. 이벤트 날짜를 알고 있을 때 스팟 인스턴스는 중단 위험이 있어 온디맨드 용량 예약보다 신뢰성이 낮습니다. 또한 DB를 수동 스케일업하는 것은 읽기 복제본 추가보다 비효율적입니다.</p>`,
    disc: [
      { ans: 'B (69%)', txt: 'Compute Savings Plans = EC2 + Fargate 모두 커버. 이벤트 날짜 알면 ODCR로 피크 용량 확보. No Upfront RI로 유연성 유지. 읽기 복제본으로 피크 읽기 부하 분산. 스팟 인스턴스는 프로덕션 티켓팅에 부적합.' },
    ]
  },
  {
    n: 153,
    en: `A company has deployed an application on AWS Elastic Beanstalk. The application uses Amazon Aurora for the database layer. An Amazon CloudFront distribution serves web requests and includes the Elastic Beanstalk domain name as the origin server. The distribution is configured with an alternate domain name that visitors use when they access the application.<br><br>Each week, the company takes the application out of service for routine maintenance. During the time that the application is unavailable, the company wants visitors to receive an informational message instead of a CloudFront error message.<br><br>A solutions architect creates an Amazon S3 bucket as the first step in the process.<br><br>Which combination of steps should the solutions architect take next to meet the requirements? (Choose three.)`,
    ko: `한 회사가 AWS Elastic Beanstalk에 애플리케이션을 배포했습니다. 애플리케이션은 데이터베이스 계층에 Amazon Aurora를 사용합니다. Amazon CloudFront 배포는 웹 요청을 처리하고 Elastic Beanstalk 도메인 이름을 오리진 서버로 포함합니다. 배포는 방문자가 애플리케이션에 액세스할 때 사용하는 대체 도메인 이름으로 구성됩니다.<br><br>매주 회사는 정기 유지 관리를 위해 애플리케이션 서비스를 중단합니다. 애플리케이션을 사용할 수 없는 동안 회사에서는 방문자가 CloudFront 오류 메시지 대신 정보 메시지를 받기를 원합니다.<br><br>솔루션 설계자는 프로세스의 첫 번째 단계로 Amazon S3 버킷을 생성합니다.<br><br>솔루션 설계자가 요구 사항을 충족하기 위해 다음에 수행해야 하는 단계 조합은 무엇입니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Upload static informational content to the S3 bucket.`, ko: `S3 버킷에 정적 정보 콘텐츠를 업로드합니다.` },
      { k: 'B', en: `Create a new CloudFront distribution. Set the S3 bucket as the origin.`, ko: `새로운 CloudFront 배포를 생성합니다. S3 버킷을 오리진으로 설정합니다.` },
      { k: 'C', en: `Set the S3 bucket as a second origin in the original CloudFront distribution. Configure the distribution and the S3 bucket to use an origin access identity (OAI).`, ko: `S3 버킷을 원래 CloudFront 배포의 두 번째 오리진으로 설정합니다. OAI(원본 액세스 ID)를 사용하도록 배포 및 S3 버킷을 구성합니다.` },
      { k: 'D', en: `During the weekly maintenance, edit the default cache behavior to use the S3 origin. Revert the change when the maintenance is complete.`, ko: `주간 유지 관리 중에 S3 오리진을 사용하도록 기본 캐시 동작을 편집합니다. 유지 관리가 완료되면 변경 사항을 되돌립니다.` },
      { k: 'E', en: `During the weekly maintenance, create a cache behavior for the S3 origin on the new distribution. Set the path pattern to \\ and the precedence to 0. Delete the cache behavior when the maintenance is complete.`, ko: `주간 유지 관리 중에 새 배포에서 S3 오리진에 대한 캐시 동작을 만듭니다. 경로 패턴을 \\로 설정하고 우선 순위를 0으로 설정합니다. 유지 관리가 완료되면 캐시 동작을 삭제합니다.` },
      { k: 'F', en: `During the weekly maintenance, configure Elastic Beanstalk to serve traffic from the S3 bucket.`, ko: `주간 유지 관리 중에 S3 버킷의 트래픽을 제공하도록 Elastic Beanstalk를 구성합니다.` },
    ],
    answer: ['A', 'C', 'D'],
    vote: '100% ACD',
    explain: `<p><span class="mark-ok">✅ A — S3 버킷에 정보 콘텐츠 업로드</span></p>
<p>유지 관리 중 방문자에게 표시할 정적 HTML 페이지를 S3 버킷에 업로드합니다.</p>
<p><span class="mark-ok">✅ C — S3 버킷을 기존 CloudFront 배포의 두 번째 오리진으로 추가 + OAI 구성</span></p>
<p>기존 CloudFront 배포에 S3 버킷을 두 번째 오리진으로 추가합니다. OAI(Origin Access Identity)를 사용하면 S3 버킷에 CloudFront만 접근할 수 있어 보안이 강화됩니다.</p>
<p><span class="mark-ok">✅ D — 유지 관리 시 기본 캐시 동작을 S3 오리진으로 변경, 완료 후 복구</span></p>
<p>기존 CloudFront 배포의 기본 캐시 동작에서 오리진을 Elastic Beanstalk에서 S3로 전환합니다. 유지 관리 완료 후 다시 Elastic Beanstalk로 되돌립니다. 이렇게 하면 동일한 도메인으로 정보 페이지를 제공할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 새 CloudFront 배포를 생성하면 방문자가 접근하는 도메인 이름이 달라져 방문자가 유지 관리 페이지에 도달하지 못합니다. 기존 배포를 수정하는 것이 올바릅니다.</p>
<p><span class="mark-no">❌ E</span> — CloudFront에서 우선 순위(Precedence) 0은 유효한 값이 아닙니다. 가능한 최솟값은 1입니다. 또한 새 배포에 캐시 동작을 추가하는 것은 의미가 없습니다.</p>
<p><span class="mark-no">❌ F</span> — Elastic Beanstalk는 S3에서 트래픽을 서비스하도록 구성하는 기능이 없으며, 유지 관리 중 Elastic Beanstalk 자체가 내려간 상태입니다.</p>`,
    disc: [
      { ans: 'ACD (100%)', txt: '기존 CloudFront 배포에 S3를 두 번째 오리진으로 추가(C). 유지 관리 시 기본 캐시 동작 오리진을 S3로 교체(D). 완료 후 원복. E의 우선순위 0은 무효값.' },
    ]
  },
  {
    n: 154,
    en: `A company gives users the ability to upload images from a custom application. The upload process invokes an AWS Lambda function that processes and stores the image in an Amazon S3 bucket. The application invokes the Lambda function by using a specific function version ARN.<br><br>The Lambda function accepts image processing parameters by using environment variables. The company often adjusts the environment variables of the Lambda function to achieve optimal image processing output. The company tests different parameters and publishes a new function version with the updated environment variables after validating results. This update process also requires frequent changes to the custom application to invoke the new function version ARN. These changes cause interruptions for users.<br><br>A solutions architect needs to simplify this process to minimize disruption to users.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사는 사용자에게 맞춤형 애플리케이션에서 이미지를 업로드할 수 있는 기능을 제공합니다. 업로드 프로세스는 Amazon S3 버킷에서 이미지를 처리하고 저장하는 AWS Lambda 함수를 호출합니다. 애플리케이션은 특정 함수 버전 ARN을 사용하여 Lambda 함수를 호출합니다.<br><br>Lambda 함수는 환경 변수를 사용하여 이미지 처리 매개변수를 허용합니다. 회사에서는 최적의 이미지 처리 출력을 얻기 위해 Lambda 함수의 환경 변수를 조정하는 경우가 많습니다. 회사는 다양한 매개변수를 테스트하고 결과를 검증한 후 업데이트된 환경 변수를 사용하여 새 기능 버전을 게시합니다. 또한 이 업데이트 프로세스에서는 새 기능 버전 ARN을 호출하기 위해 사용자 지정 애플리케이션을 자주 변경해야 합니다. 이러한 변경으로 인해 사용자가 중단될 수 있습니다.<br><br>솔루션 설계자는 사용자의 업무 중단을 최소화하기 위해 이 프로세스를 단순화해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Directly modify the environment variables of the published Lambda function version. Use the SLATEST version to test image processing parameters.`, ko: `게시된 Lambda 함수 버전의 환경 변수를 직접 수정합니다. SLATEST 버전을 사용하여 이미지 처리 매개변수를 테스트합니다.` },
      { k: 'B', en: `Create an Amazon DynamoDB table to store the image processing parameters. Modify the Lambda function to retrieve the image processing parameters from the DynamoDB table.`, ko: `이미지 처리 매개변수를 저장할 Amazon DynamoDB 테이블을 생성합니다. DynamoDB 테이블에서 이미지 처리 매개변수를 검색하도록 Lambda 함수를 수정합니다.` },
      { k: 'C', en: `Directly code the image processing parameters within the Lambda function and remove the environment variables. Publish a new function version when the company updates the parameters.`, ko: `Lambda 함수 내에서 이미지 처리 매개변수를 직접 코딩하고 환경 변수를 제거합니다. 회사에서 매개변수를 업데이트하면 새 기능 버전을 게시합니다.` },
      { k: 'D', en: `Create a Lambda function alias. Modify the client application to use the function alias ARN. Reconfigure the Lambda alias to point to new versions of the function when the company finishes testing.`, ko: `Lambda 함수 별칭을 생성합니다. 함수 별칭 ARN을 사용하도록 클라이언트 애플리케이션을 수정합니다. 회사에서 테스트가 완료되면 함수의 새 버전을 가리키도록 Lambda 별칭을 재구성합니다.` },
    ],
    answer: ['D'],
    vote: '100% D',
    explain: `<p><span class="mark-ok">✅ D — Lambda 함수 별칭(Alias) 사용</span></p>
<p><strong>Lambda 별칭</strong>은 특정 함수 버전을 가리키는 고정된 ARN입니다. 클라이언트 애플리케이션은 별칭 ARN을 한 번만 설정하면, 이후 새 버전이 게시될 때마다 별칭이 가리키는 버전만 업데이트하면 됩니다. 애플리케이션 코드는 변경할 필요가 없으므로 사용자 중단이 발생하지 않습니다. 테스트 완료 후 별칭을 새 버전으로 재구성하는 것만으로 배포가 완료됩니다.</p>
<p><a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html" target="_blank">AWS 공식 문서: Lambda 함수 별칭</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 게시된(published) Lambda 함수 버전의 환경 변수는 수정할 수 없습니다. 게시된 버전은 불변(immutable)입니다. 환경 변수를 변경하려면 새 버전을 게시해야 합니다.</p>
<p><span class="mark-no">❌ B</span> — DynamoDB를 추가하면 Lambda 함수 코드도 변경해야 하고, DynamoDB 테이블 관리도 필요합니다. 운영 오버헤드가 증가하고 애플리케이션 ARN 문제는 해결되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — 매개변수를 코드에 직접 넣어도 새 버전 게시가 필요하며, 클라이언트 애플리케이션의 ARN 업데이트 문제가 여전히 남습니다.</p>`,
    disc: [
      { ans: 'D (100%)', txt: 'Lambda 별칭은 고정 ARN으로 클라이언트 코드 변경 없이 백엔드 버전만 교체 가능. 게시된 버전은 불변이므로 A 불가. DynamoDB 추가(B)는 과도한 오버헤드.' },
    ]
  },
  {
    n: 155,
    en: `A global media company is planning a multi-Region deployment of an application. Amazon DynamoDB global tables will back the deployment to keep the user experience consistent across the two continents where users are concentrated. Each deployment will have a public Application Load Balancer (ALB). The company manages public DNS internally. The company wants to make the application available through an apex domain.<br><br>Which solution will meet these requirements with the LEAST effort?`,
    ko: `글로벌 미디어 회사가 애플리케이션의 다중 리전 배포를 계획하고 있습니다. Amazon DynamoDB 글로벌 테이블은 사용자가 집중되어 있는 두 대륙에서 사용자 경험을 일관되게 유지하기 위해 배포를 지원합니다. 각 배포에는 공용 ALB(Application Load Balancer)가 있습니다. 공용 DNS는 회사 내부에서 관리합니다. 회사는 Apex 도메인을 통해 애플리케이션을 사용할 수 있도록 하려고 합니다.<br><br>최소한의 노력으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Migrate public DNS to Amazon Route 53. Create CNAME records for the apex domain to point to the ALB. Use a geolocation routing policy to route traffic based on user location.`, ko: `퍼블릭 DNS를 Amazon Route 53으로 마이그레이션합니다. ALB를 가리키도록 apex 도메인에 대한 CNAME 레코드를 생성합니다. 지리적 위치 라우팅 정책을 사용하여 사용자 위치에 따라 트래픽을 라우팅합니다.` },
      { k: 'B', en: `Place a Network Load Balancer (NLB) in front of the ALB. Migrate public DNS to Amazon Route 53. Create a CNAME record for the apex domain to point to the NLB's static IP address. Use a geolocation routing policy to route traffic based on user location.`, ko: `ALB 앞에 NLB(Network Load Balancer)를 배치합니다. 퍼블릭 DNS를 Amazon Route 53으로 마이그레이션합니다. NLB의 고정 IP 주소를 가리키도록 apex 도메인에 대한 CNAME 레코드를 생성합니다. 지리적 위치 라우팅 정책을 사용하여 사용자 위치에 따라 트래픽을 라우팅합니다.` },
      { k: 'C', en: `Create an AWS Global Accelerator accelerator with multiple endpoint groups that target endpoints in appropriate AWS Regions. Use the accelerator's static IP address to create a record in public DNS for the apex domain.`, ko: `적절한 AWS 리전의 엔드포인트를 대상으로 하는 여러 엔드포인트 그룹이 있는 AWS Global Accelerator 액셀러레이터를 생성합니다. 가속기의 고정 IP 주소를 사용하여 apex 도메인에 대한 공용 DNS에 레코드를 생성합니다.` },
      { k: 'D', en: `Create an Amazon API Gateway API that is backed by AWS Lambda in one of the AWS Regions. Configure a Lambda function to route traffic to application deployments by using the round robin method. Create CNAME records for the apex domain to point to the API's URL.`, ko: `AWS 리전 중 하나에서 AWS Lambda가 지원하는 Amazon API Gateway API를 생성합니다. 라운드 로빈 방법을 사용하여 애플리케이션 배포로 트래픽을 라우팅하도록 Lambda 함수를 구성합니다. API의 URL을 가리키도록 apex 도메인에 대한 CNAME 레코드를 생성합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — AWS Global Accelerator + 고정 IP를 apex 도메인 A 레코드로 사용</span></p>
<p><strong>Apex 도메인(루트 도메인)</strong>에는 DNS 표준상 CNAME 레코드를 사용할 수 없습니다. Apex 도메인은 A 레코드(IP 주소)만 가져야 합니다. AWS Global Accelerator는 두 개의 <strong>고정 Anycast IP 주소</strong>를 제공하므로, 이를 회사 내부 DNS의 apex 도메인 A 레코드로 등록할 수 있습니다. Global Accelerator는 자동으로 가장 가까운 리전의 ALB로 트래픽을 라우팅합니다. Route 53 마이그레이션 없이 내부 DNS를 그대로 사용할 수 있어 최소한의 노력으로 구현 가능합니다.</p>
<p><a href="https://aws.amazon.com/global-accelerator/" target="_blank">AWS 공식 문서: AWS Global Accelerator</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Apex 도메인에 CNAME 레코드를 사용하는 것은 DNS 표준 위반입니다. AWS Route 53은 Alias 레코드를 제공하지만, 이는 Route 53 내에서만 작동하며 회사 내부 DNS와는 호환되지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — A와 동일하게 CNAME 레코드를 apex 도메인에 사용하므로 DNS 표준 위반입니다. 또한 NLB를 ALB 앞에 추가하는 것은 불필요한 복잡성을 추가합니다.</p>
<p><span class="mark-no">❌ D</span> — CNAME을 apex 도메인에 사용하는 문제가 있으며, API Gateway + Lambda로 라운드 로빈 라우팅을 구현하는 것은 Global Accelerator에 비해 과도하게 복잡합니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'Apex 도메인에 CNAME 불가(A, B, D 모두 오답). Global Accelerator의 고정 Anycast IP → apex 도메인 A 레코드. 내부 DNS 마이그레이션 불필요. 자동 지역 기반 라우팅 내장.' },
    ]
  },
  {
    n: 156,
    en: `A company is developing a new serverless API by using Amazon API Gateway and AWS Lambda. The company integrated the Lambda functions with API Gateway to use several shared libraries and custom classes.<br><br>A solutions architect needs to simplify the deployment of the solution and optimize for code reuse.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사가 Amazon API Gateway와 AWS Lambda를 사용하여 새로운 서버리스 API를 개발하고 있습니다. 회사는 여러 공유 라이브러리와 사용자 지정 클래스를 사용하기 위해 Lambda 함수를 API Gateway와 통합했습니다.<br><br>솔루션 설계자는 솔루션 배포를 단순화하고 코드 재사용을 최적화해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Deploy the shared libraries and custom classes into a Docker image. Store the image in an S3 bucket. Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.`, ko: `공유 라이브러리와 사용자 정의 클래스를 Docker 이미지에 배포합니다. 이미지를 S3 버킷에 저장합니다. Docker 이미지를 소스로 사용하는 Lambda 계층을 생성합니다. API의 Lambda 함수를 Zip 패키지로 배포합니다. Lambda 계층을 사용하도록 패키지를 구성합니다.` },
      { k: 'B', en: `Deploy the shared libraries and custom classes to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Create a Lambda layer that uses the Docker image as the source. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the Lambda layer.`, ko: `공유 라이브러리와 사용자 정의 클래스를 Docker 이미지에 배포합니다. Amazon ECR에 이미지를 업로드합니다. Docker 이미지를 소스로 사용하는 Lambda 계층을 생성합니다. API의 Lambda 함수를 Zip 패키지로 배포합니다. Lambda 계층을 사용하도록 패키지를 구성합니다.` },
      { k: 'C', en: `Deploy the shared libraries and custom classes to a Docker container in Amazon Elastic Container Service (Amazon ECS) by using the AWS Fargate launch type. Deploy the API's Lambda functions as Zip packages. Configure the packages to use the deployed container as a Lambda layer.`, ko: `AWS Fargate 시작 유형을 사용하여 Amazon ECS의 Docker 컨테이너에 공유 라이브러리 및 사용자 지정 클래스를 배포합니다. API의 Lambda 함수를 Zip 패키지로 배포합니다. 배포된 컨테이너를 Lambda 계층으로 사용하도록 패키지를 구성합니다.` },
      { k: 'D', en: `Deploy the shared libraries, custom classes, and code for the API's Lambda functions to a Docker image. Upload the image to Amazon Elastic Container Registry (Amazon ECR). Configure the API's Lambda functions to use the Docker image as the deployment package.`, ko: `API의 Lambda 함수에 대한 공유 라이브러리, 사용자 지정 클래스 및 코드를 Docker 이미지에 배포합니다. Amazon ECR에 이미지를 업로드합니다. Docker 이미지를 배포 패키지로 사용하도록 API의 Lambda 함수를 구성합니다.` },
    ],
    answer: ['D'],
    vote: '68% D',
    explain: `<p><span class="mark-ok">✅ D — 공유 라이브러리 + Lambda 코드를 단일 Docker 이미지로 ECR에 배포</span></p>
<p>Lambda 함수를 컨테이너 이미지로 배포하면 공유 라이브러리와 사용자 지정 클래스를 Docker 이미지의 레이어로 포함할 수 있습니다. <strong>컨테이너 이미지로 패키징된 Lambda 함수는 Lambda 레이어를 지원하지 않습니다.</strong> 따라서 A, B, C처럼 Docker 이미지를 Lambda 레이어 소스로 사용하는 것은 불가능합니다. ECR에 이미지를 업로드하고 Lambda 함수의 배포 패키지로 사용하는 D가 올바른 방법입니다.</p>
<p><a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html" target="_blank">AWS 공식 문서: Lambda 레이어 — 컨테이너 이미지 제한</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — S3는 Lambda 레이어를 위한 Docker 이미지 저장소로 지원되지 않습니다. Lambda 레이어의 소스는 .zip 파일 아카이브여야 합니다.</p>
<p><span class="mark-no">❌ B</span> — ECR의 Docker 이미지를 Lambda 레이어의 소스로 사용할 수 없습니다. 람다 레이어는 컨테이너 이미지가 아닌 .zip 파일만 지원합니다.</p>
<p><span class="mark-no">❌ C</span> — ECS/Fargate 컨테이너를 Lambda 레이어로 사용하는 것은 지원되지 않는 구성입니다.</p>`,
    disc: [
      { ans: 'D (68%)', txt: '핵심: 컨테이너 이미지 기반 Lambda는 Lambda 레이어 사용 불가(AWS 공식 제약). A/B/C 모두 Docker→Lambda Layer 조합으로 불가능한 구성. D만이 유효: 전체를 Docker 이미지로 ECR 업로드 후 Lambda 배포 패키지로 사용.' },
    ]
  },
  {
    n: 157,
    en: `A manufacturing company is building an inspection solution for its factory. The company has IP cameras at the end of each assembly line. The company has used Amazon SageMaker to train a machine learning (ML) model to identify common defects from still images.<br><br>The company wants to provide local feedback to factory workers when a defect is detected. The company must be able to provide this feedback even if the factory's internet connectivity is down. The company has a local Linux server that hosts an API that provides local feedback to the workers.<br><br>How should the company deploy the ML model to meet these requirements?`,
    ko: `한 제조 회사가 공장용 검사 솔루션을 구축하고 있습니다. 이 회사는 각 조립 라인 끝에 IP 카메라를 설치했습니다. 이 회사는 Amazon SageMaker를 사용하여 기계 학습(ML) 모델을 훈련하여 정지 이미지에서 일반적인 결함을 식별했습니다.<br><br>회사에서는 결함이 발견되면 공장 작업자에게 현지 피드백을 제공하려고 합니다. 회사는 공장의 인터넷 연결이 끊어진 경우에도 이러한 피드백을 제공할 수 있어야 합니다. 회사에는 작업자에게 로컬 피드백을 제공하는 API를 호스팅하는 로컬 Linux 서버가 있습니다.<br><br>회사는 이러한 요구 사항을 충족하기 위해 ML 모델을 어떻게 배포해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Set up an Amazon Kinesis video stream from each IP camera to AWS. Use Amazon EC2 instances to take still images of the streams. Upload the images to an Amazon S3 bucket. Deploy a SageMaker endpoint with the ML model. Invoke an AWS Lambda function to call the inference endpoint when new images are uploaded. Configure the Lambda function to call the local API when a defect is detected.`, ko: `각 IP 카메라에서 AWS로 Amazon Kinesis 비디오 스트림을 설정합니다. Amazon EC2 인스턴스를 사용하여 스트림의 정지 이미지를 찍습니다. Amazon S3 버킷에 이미지를 업로드합니다. ML 모델을 사용하여 SageMaker 엔드포인트를 배포합니다. 새 이미지가 업로드되면 AWS Lambda 함수를 호출하여 추론 엔드포인트를 호출합니다. 결함이 감지되면 로컬 API를 호출하도록 Lambda 함수를 구성합니다.` },
      { k: 'B', en: `Deploy AWS IoT Greengrass on the local server. Deploy the ML model to the Greengrass server. Create a Greengrass component to take still images from the cameras and run inference. Configure the component to call the local API when a defect is detected.`, ko: `로컬 서버에 AWS IoT Greengrass를 배포합니다. ML 모델을 Greengrass 서버에 배포합니다. Greengrass 구성 요소를 생성하여 카메라에서 스틸 이미지를 가져와 추론을 실행합니다. 결함이 감지되면 로컬 API를 호출하도록 구성 요소를 구성합니다.` },
      { k: 'C', en: `Order an AWS Snowball device. Deploy a SageMaker endpoint, the ML model, and an Amazon EC2 instance on the Snowball device. Take still images from the cameras. Run inference from the EC2 instance. Configure the instance to call the local API when a defect is detected.`, ko: `AWS Snowball 디바이스를 주문합니다. SageMaker 엔드포인트, ML 모델 및 Amazon EC2 인스턴스를 Snowball 디바이스에 배포합니다. 카메라에서 정지 이미지를 가져옵니다. EC2 인스턴스에서 추론을 실행합니다. 결함이 감지되면 로컬 API를 호출하도록 인스턴스를 구성합니다.` },
      { k: 'D', en: `Deploy Amazon Monitron devices on each IP camera. Deploy an Amazon Monitron Gateway on premises. Deploy the ML model to the Amazon Monitron devices. Use Amazon Monitron health state alarms to call the local API from an AWS Lambda function when a defect is detected.`, ko: `각 IP 카메라에 Amazon Monitron 장치를 배포합니다. Amazon Monitron Gateway를 온프레미스에 배포합니다. ML 모델을 Amazon Monitron 디바이스에 배포합니다. 결함이 감지되면 Amazon Monitron 상태 경보를 사용하여 AWS Lambda 함수에서 로컬 API를 호출합니다.` },
    ],
    answer: ['B'],
    vote: '92% B',
    explain: `<p><span class="mark-ok">✅ B — AWS IoT Greengrass로 로컬 서버에 ML 모델 배포</span></p>
<p><strong>AWS IoT Greengrass</strong>는 클라우드 기능을 로컬 디바이스로 확장하는 서비스입니다. 인터넷 연결이 끊어져도 로컬에서 데이터 처리, ML 추론, 로컬 서비스 호출이 가능합니다. SageMaker로 훈련한 모델을 Greengrass를 통해 로컬 서버에 배포하고, Greengrass 컴포넌트가 카메라 이미지를 캡처하여 추론을 실행하고 결함 발견 시 로컬 API를 호출합니다.</p>
<p><a href="https://aws.amazon.com/greengrass/" target="_blank">AWS 공식 문서: AWS IoT Greengrass</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS 클라우드를 통해 처리하는 방식으로, 인터넷 연결이 끊어지면 작동하지 않습니다. 오프라인 요구사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — Snowball은 대용량 데이터 마이그레이션 또는 원격 지역의 임시 컴퓨팅 솔루션입니다. 공장에 영구적으로 설치하는 용도로는 부적합하며, 비용과 복잡성이 과도합니다.</p>
<p><span class="mark-no">❌ D</span> — Amazon Monitron은 진동과 온도 센서로 기계 상태를 모니터링하는 서비스입니다. 이미지 기반 결함 감지와는 다른 용도이며, AWS 클라우드 연결이 필요합니다.</p>`,
    disc: [
      { ans: 'B (92%)', txt: '오프라인 요구사항 → IoT Greengrass. 인터넷 없이 로컬에서 ML 추론 + 로컬 API 호출 가능. A는 클라우드 의존으로 오프라인 불가. D는 Monitron이 인터넷 필요하고 이미지 감지 용도 아님.' },
    ]
  },
  {
    n: 158,
    en: `A solutions architect must create a business case for migration of a company's on-premises data center to the AWS Cloud. The solutions architect will use a configuration management database (CMDB) export of all the company's servers to create the case.<br><br>Which solution will meet these requirements MOST cost-effectively?`,
    ko: `솔루션 설계자는 회사의 온프레미스 데이터 센터를 AWS 클라우드로 마이그레이션하기 위한 비즈니스 사례를 만들어야 합니다. 솔루션 설계자는 회사의 모든 서버에 대한 CMDB(구성 관리 데이터베이스) 내보내기를 사용하여 사례를 생성합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS Well-Architected Tool to import the CMDB data to perform an analysis and generate recommendations.`, ko: `AWS Well-Architected Tool을 사용하여 CMDB 데이터를 가져와 분석을 수행하고 권장 사항을 생성합니다.` },
      { k: 'B', en: `Use Migration Evaluator to perform an analysis. Use the data import template to upload the data from the CMDB export.`, ko: `마이그레이션 평가기를 사용하여 분석을 수행합니다. 데이터 가져오기 템플릿을 사용하여 CMDB 내보내기에서 데이터를 업로드합니다.` },
      { k: 'C', en: `Implement resource matching rules. Use the CMDB export and the AWS Price List Bulk API to query CMDB data against AWS services in bulk.`, ko: `자원 일치 규칙을 구현합니다. CMDB 내보내기 및 AWS Price List Bulk API를 사용하여 AWS 서비스에 대한 CMDB 데이터를 대량으로 쿼리합니다.` },
      { k: 'D', en: `Use AWS Application Discovery Service to import the CMDB data to perform an analysis.`, ko: `AWS Application Discovery Service를 사용하여 CMDB 데이터를 가져와 분석을 수행합니다.` },
    ],
    answer: ['B'],
    vote: '88% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Migration Evaluator + 데이터 가져오기 템플릿</span></p>
<p><strong>AWS Migration Evaluator</strong>(구 TSO Logic)는 온프레미스에서 AWS로 마이그레이션하기 위한 비즈니스 사례 구축을 전용으로 지원하는 <strong>무료</strong> 서비스입니다. CMDB 내보내기를 포함한 타사 도구의 내보내기 파일을 데이터 가져오기 템플릿으로 업로드하면, AWS 클라우드에서 실행하는 데 드는 비용 추정치와 절감액을 담은 평가 보고서를 생성합니다. 비즈니스 사례 구축에 특화되어 있어 가장 적합합니다.</p>
<p><a href="https://aws.amazon.com/migration-evaluator/" target="_blank">AWS 공식 문서: AWS Migration Evaluator</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Well-Architected Tool은 기존 AWS 아키텍처를 평가하는 설문지 도구입니다. CMDB 데이터를 가져오는 기능이 없으며 마이그레이션 비즈니스 사례 구축 목적이 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Price List API를 직접 사용하면 많은 개발 작업이 필요하며, 이는 가장 비용 효율적인 방법이 아닙니다.</p>
<p><span class="mark-no">❌ D</span> — Application Discovery Service는 마이그레이션 계획을 위한 서버 검색 도구로, 비즈니스 사례 구축보다는 현재 환경 파악에 적합합니다. 또한 에이전트나 커넥터 설치가 필요할 수 있어 추가 비용이 발생합니다.</p>`,
    disc: [
      { ans: 'B (88%)', txt: '비즈니스 사례(Business Case) 구축 → Migration Evaluator. 무료 서비스. CMDB CSV 업로드 지원. AWS 비용 예측 및 절감액 보고서 자동 생성. Application Discovery Service(D)는 검색 도구로 목적이 다름.' },
    ]
  },
  {
    n: 159,
    en: `A company has a website that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances are in an Auto Scaling group. The ALB is associated with an AWS WAF web ACL.<br><br>The website often encounters attacks in the application layer. The attacks produce sudden and significant increases in traffic on the application server. The access logs show that each attack originates from different IP addresses. A solutions architect needs to implement a solution to mitigate these attacks.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `ALB(Application Load Balancer) 뒤에 Amazon EC2 인스턴스에서 실행되는 웹 사이트가 있는 회사가 있습니다. 인스턴스는 Auto Scaling 그룹에 있습니다. ALB는 AWS WAF 웹 ACL과 연결되어 있습니다.<br><br>웹사이트는 애플리케이션 계층에서 공격을 받는 경우가 많습니다. 공격으로 인해 애플리케이션 서버의 트래픽이 갑자기 크게 증가합니다. 액세스 로그는 각 공격이 서로 다른 IP 주소에서 시작되었음을 보여줍니다. 솔루션 설계자는 이러한 공격을 완화하기 위한 솔루션을 구현해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an Amazon CloudWatch alarm that monitors server access. Set a threshold based on access by IP address. Configure an alarm action that adds the IP address to the web ACL's deny list.`, ko: `서버 액세스를 모니터링하는 Amazon CloudWatch 경보를 생성합니다. IP 주소별 액세스를 기반으로 임계값을 설정합니다. 웹 ACL의 거부 목록에 IP 주소를 추가하는 경보 작업을 구성합니다.` },
      { k: 'B', en: `Deploy AWS Shield Advanced in addition to AWS WAF. Add the ALB as a protected resource.`, ko: `AWS WAF 외에 AWS Shield Advanced를 배포합니다. ALB를 보호된 리소스로 추가합니다.` },
      { k: 'C', en: `Create an Amazon CloudWatch alarm that monitors user IP addresses. Set a threshold based on access by IP address. Configure the alarm to invoke an AWS Lambda function to add a deny rule in the application server's subnet route table for any IP addresses that activate the alarm.`, ko: `사용자 IP 주소를 모니터링하는 Amazon CloudWatch 경보를 생성합니다. IP 주소별 액세스를 기반으로 임계값을 설정합니다. 경보를 활성화하는 모든 IP 주소에 대해 애플리케이션 서버의 서브넷 라우팅 테이블에 거부 규칙을 추가하도록 AWS Lambda 함수를 호출하도록 경보를 구성합니다.` },
      { k: 'D', en: `Inspect access logs to find a pattern of IP addresses that launched the attacks. Use an Amazon Route 53 geolocation routing policy to deny traffic from the countries that host those IP addresses.`, ko: `액세스 로그를 검사하여 공격을 시작한 IP 주소의 패턴을 찾습니다. Amazon Route 53 지리적 위치 라우팅 정책을 사용하여 해당 IP 주소를 호스팅하는 국가의 트래픽을 거부합니다.` },
    ],
    answer: ['B'],
    vote: '91% B',
    explain: `<p><span class="mark-ok">✅ B — AWS Shield Advanced + AWS WAF 조합</span></p>
<p>이미 WAF가 적용되어 있는 환경에서 <strong>AWS Shield Advanced</strong>를 추가하면 운영 오버헤드 없이 분산된 IP 주소에서 오는 애플리케이션 계층 공격(Layer 7 DDoS)에 대한 포괄적인 보호를 받을 수 있습니다. Shield Advanced는 ALB를 보호 리소스로 등록하면 자동으로 공격을 탐지하고 완화합니다. 또한 전담 DDoS 대응팀(DRT)의 지원을 받을 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-app-layer-protections.html" target="_blank">AWS 공식 문서: Shield Advanced 애플리케이션 계층 보호</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudWatch 경보에서 WAF 거부 목록에 IP를 자동 추가하는 기능은 별도 Lambda 등 추가 구현이 필요하며, 서로 다른 IP에서 오는 공격(분산 공격)에는 효과가 제한적입니다.</p>
<p><span class="mark-no">❌ C</span> — 라우팅 테이블에 거부 규칙을 추가하는 것은 지원되지 않는 구성입니다. 라우팅 테이블은 패킷 필터가 아닌 목적지 경로만 정의합니다. 또한 Lambda를 사용한 자동화는 운영 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ D</span> — 로그를 수동으로 분석하고 국가별 차단을 설정하는 것은 많은 운영 오버헤드가 필요하며, 공격 IP가 정상 사용자가 많은 국가에서 오는 경우 과도한 차단이 발생합니다.</p>`,
    disc: [
      { ans: 'B (91%)', txt: '분산된 IP 주소 공격 → Shield Advanced가 자동 탐지/완화. 최소 운영 오버헤드. C는 라우팅 테이블에 거부 규칙 추가 불가(잘못된 구성). A/D는 수동 작업 많고 효과 제한적.' },
    ]
  },
  {
    n: 160,
    en: `A company has a critical application in which the data tier is deployed in a single AWS Region. The data tier uses an Amazon DynamoDB table and an Amazon Aurora MySQL DB cluster. The current Aurora MySQL engine version supports a global database. The application tier is already deployed in two Regions.<br><br>Company policy states that critical applications must have application tier components and data tier components deployed across two Regions. The RTO and RPO must be no more than a few minutes each. A solutions architect must recommend a solution to make the data tier compliant with company policy.<br><br>Which combination of steps will meet these requirements? (Choose two.)`,
    ko: `회사에는 데이터 계층이 단일 AWS 리전에 배포되는 중요한 애플리케이션이 있습니다. 데이터 계층은 Amazon DynamoDB 테이블과 Amazon Aurora MySQL DB 클러스터를 사용합니다. 현재 Aurora MySQL 엔진 버전은 글로벌 데이터베이스를 지원합니다. 애플리케이션 계층은 이미 두 리전에 배포되었습니다.<br><br>회사 정책에 따르면 중요한 애플리케이션에는 애플리케이션 계층 구성 요소와 데이터 계층 구성 요소가 두 리전에 걸쳐 배포되어야 합니다. RTO 및 RPO는 각각 몇 분 이하여야 합니다. 솔루션 설계자는 데이터 계층이 회사 정책을 준수하도록 하는 솔루션을 권장해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Add another Region to the Aurora MySQL DB cluster.`, ko: `Aurora MySQL DB 클러스터에 다른 리전을 추가합니다.` },
      { k: 'B', en: `Add another Region to each table in the Aurora MySQL DB cluster.`, ko: `Aurora MySQL DB 클러스터의 각 테이블에 다른 리전을 추가합니다.` },
      { k: 'C', en: `Set up scheduled cross-Region backups for the DynamoDB table and the Aurora MySQL DB cluster.`, ko: `DynamoDB 테이블 및 Aurora MySQL DB 클러스터에 대한 예약된 교차 리전 백업을 설정합니다.` },
      { k: 'D', en: `Convert the existing DynamoDB table to a global table by adding another Region to its configuration.`, ko: `구성에 다른 리전을 추가하여 기존 DynamoDB 테이블을 글로벌 테이블로 변환합니다.` },
      { k: 'E', en: `Use Amazon Route 53 Application Recovery Controller to automate database backup and recovery to the secondary Region.`, ko: `Amazon Route 53 Application Recovery Controller를 사용하여 데이터베이스 백업 및 보조 리전으로의 복구를 자동화합니다.` },
    ],
    answer: ['A', 'D'],
    vote: '85% AD',
    explain: `<p><span class="mark-ok">✅ A — Aurora MySQL DB 클러스터에 다른 리전 추가 (Aurora Global Database)</span></p>
<p>Aurora MySQL이 글로벌 데이터베이스를 지원하므로, 클러스터에 보조 리전을 추가하면 1초 미만의 지연으로 데이터가 복제됩니다. 장애 발생 시 몇 분 이내에 보조 리전으로 승격할 수 있어 RPO/RTO 요구사항을 충족합니다.</p>
<p><span class="mark-ok">✅ D — DynamoDB 테이블을 글로벌 테이블로 변환</span></p>
<p>기존 DynamoDB 테이블에 보조 리전을 추가하여 글로벌 테이블로 변환하면 다중 리전 활성-활성 복제가 자동으로 이루어집니다. 일반적으로 1초 미만의 복제 지연으로 두 번째 리전에서도 데이터를 즉시 사용할 수 있습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Aurora MySQL DB 클러스터에서 각 테이블별로 리전을 추가하는 기능은 없습니다. 리전 추가는 클러스터 수준에서 이루어집니다.</p>
<p><span class="mark-no">❌ C</span> — 예약된 교차 리전 백업은 RPO(복구 지점 목표)가 몇 분이 아닌 몇 시간이 될 수 있으며, 백업에서 복구하는 RTO도 상당히 길어집니다. "몇 분" 요구사항을 충족하기 어렵습니다.</p>
<p><span class="mark-no">❌ E</span> — Route 53 Application Recovery Controller는 트래픽 라우팅 제어에 사용되며, 데이터베이스 백업과 복구를 자동화하는 서비스가 아닙니다.</p>`,
    disc: [
      { ans: 'AD (85%)', txt: 'Aurora Global Database(A) = 리전 추가로 초저지연 복제. DynamoDB 글로벌 테이블(D) = 기존 테이블에 리전 추가로 변환. 예약 백업(C)은 RPO/RTO 요구사항 미충족.' },
    ]
  },
];