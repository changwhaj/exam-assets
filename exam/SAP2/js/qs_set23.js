window.QS_SET23 = [
  {
    n: 221,
    en: `A company uses AWS Organizations to manage its AWS accounts. The company needs a list of all its Amazon EC2 instances that have underutilized CPU or memory usage. The company also needs recommendations for how to downsize these underutilized instances.<br><br>Which solution will meet these requirements with the LEAST effort?`,
    ko: `회사는 AWS Organizations를 사용하여 AWS 계정을 관리합니다. 회사에는 CPU 또는 메모리 사용량이 부족한 모든 Amazon EC2 인스턴스 목록이 필요합니다. 또한 회사는 활용도가 낮은 인스턴스의 크기를 줄이는 방법에 대한 권장 사항도 필요합니다.<br><br>최소한의 노력으로 이러한 요구 사항을 충족할 수 있는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Install a CPU and memory monitoring tool from AWS Marketplace on all the EC2 instances. Store the findings in Amazon S3. Implement a Python script to identify underutilized instances. Reference EC2 instance pricing information for recommendations about downsizing options.`, ko: `AWS Marketplace의 CPU 및 메모리 모니터링 도구를 모든 EC2 인스턴스에 설치합니다. 결과를 Amazon S3에 저장합니다. 활용도가 낮은 인스턴스를 식별하는 Python 스크립트를 구현합니다. 축소 옵션에 대한 권장 사항은 EC2 인스턴스 요금 정보를 참조합니다.` },
      { k: 'B', en: `Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Retrieve the resource optimization recommendations from AWS Cost Explorer in the organization's management account. Use the recommendations to downsize underutilized instances in all accounts of the organization.`, ko: `AWS Systems Manager를 사용하여 모든 EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다. 조직 마스터 계정의 AWS Cost Explorer에서 리소스 최적화 권장 사항을 검색합니다. 권장 사항을 사용하여 조직의 모든 계정에서 활용률이 낮은 인스턴스의 크기를 줄입니다.` },
      { k: 'C', en: `Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Retrieve the resource optimization recommendations from AWS Cost Explorer in each account of the organization. Use the recommendations to downsize underutilized instances in all accounts of the organization.`, ko: `AWS Systems Manager를 사용하여 모든 EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다. 조직의 각 계정에 있는 AWS Cost Explorer에서 리소스 최적화 권장 사항을 검색합니다. 권장 사항을 사용하여 조직의 모든 계정에서 활용률이 낮은 인스턴스의 크기를 줄입니다.` },
      { k: 'D', en: `Install the Amazon CloudWatch agent on all the EC2 instances by using AWS Systems Manager. Create an AWS Lambda function to extract CPU and memory usage from all the EC2 instances. Store the findings as files in Amazon S3. Use Amazon Athena to find underutilized instances. Reference EC2 instance pricing information for recommendations about downsizing options.`, ko: `AWS Systems Manager를 사용하여 모든 EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다. 모든 EC2 인스턴스에서 CPU 및 메모리 사용량을 추출하는 AWS Lambda 함수를 생성합니다. 결과를 Amazon S3에 파일로 저장합니다. Amazon Athena를 사용하여 활용도가 낮은 인스턴스를 찾습니다. 축소 옵션에 대한 권장 사항은 EC2 인스턴스 요금 정보를 참조합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — CloudWatch 에이전트 + 관리 계정 Cost Explorer 리소스 최적화 권장 사항</span></p>
<p>AWS Systems Manager를 통해 CloudWatch 에이전트를 대량 배포하면 CPU·메모리 지표를 수집할 수 있습니다. <strong>AWS Cost Explorer의 리소스 최적화 권장 사항</strong>은 수집된 지표를 기반으로 활용도가 낮은 인스턴스를 자동으로 식별하고 다운사이징 옵션을 제안합니다.</p>
<p>Organizations의 <strong>관리(마스터) 계정에서 Cost Explorer를 조회하면</strong> 조직 내 모든 계정의 데이터를 한 번에 확인할 수 있어, 각 계정을 개별 조회하는 C보다 훨씬 효율적입니다.</p>
<p><a href="https://docs.aws.amazon.com/cost-management/latest/userguide/ce-rightsizing.html" target="_blank">AWS 공식 문서 - Cost Explorer 리소스 최적화 권장 사항</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Marketplace 타사 도구 설치 + Python 스크립트 개발 + 가격 정보 수동 참조는 노력이 매우 높습니다. AWS 기본 서비스 활용보다 복잡합니다.</p>
<p><span class="mark-no">❌ C</span> — B와 동일한 접근이지만 각 계정에서 개별적으로 권장 사항을 조회해야 합니다. 수백 개 계정에서 반복 작업이 필요하므로 B보다 노력이 많이 듭니다.</p>
<p><span class="mark-no">❌ D</span> — Lambda + S3 + Athena로 커스텀 파이프라인을 구축하는 것은 Cost Explorer의 기본 제공 권장 사항을 사용하는 것보다 훨씬 복잡하고 유지 관리 부담이 큽니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '관리 계정 Cost Explorer에서 조직 전체를 한 번에 조회(B) vs 각 계정 개별 조회(C). 이상적으로는 Compute Optimizer가 더 적합하나 선택지에 없어 B가 정답. 관리 계정이 핵심 키워드.' }
    ]
  },
  {
    n: 222,
    en: `A company wants to run a custom network analysis software package to inspect traffic as traffic leaves and enters a VPC. The company has deployed the solution by using AWS CloudFormation on three Amazon EC2 instances in an Auto Scaling group. All network routing has been established to direct traffic to the EC2 instances.<br><br>Whenever the analysis software stops working, the Auto Scaling group replaces an instance. The network routes are not updated when the instance replacement occurs.<br><br>Which combination of steps will resolve this issue? (Choose three.)`,
    ko: `회사는 VPC를 떠나고 들어갈 때 트래픽을 검사하기 위해 사용자 정의 네트워크 분석 소프트웨어 패키지를 실행하려고 합니다. 회사는 Auto Scaling 그룹의 Amazon EC2 인스턴스 3개에 AWS CloudFormation을 사용하여 솔루션을 배포했습니다. 트래픽을 EC2 인스턴스로 전달하기 위해 모든 네트워크 라우팅이 설정되었습니다.<br><br>분석 소프트웨어가 작동을 멈출 때마다 Auto Scaling 그룹은 인스턴스를 교체합니다. 인스턴스 교체가 발생하면 네트워크 경로가 업데이트되지 않습니다.<br><br>이 문제를 해결하려면 어떤 단계를 조합해야 합니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Create alarms based on EC2 status check metrics that will cause the Auto Scaling group to replace the failed instance.`, ko: `Auto Scaling 그룹이 실패한 인스턴스를 교체하게 하는 EC2 상태 확인 지표를 기반으로 경보를 생성합니다.` },
      { k: 'B', en: `Update the CloudFormation template to install the Amazon CloudWatch agent on the EC2 instances. Configure the CloudWatch agent to send process metrics for the application.`, ko: `CloudFormation 템플릿을 업데이트하여 EC2 인스턴스에 Amazon CloudWatch 에이전트를 설치합니다. 애플리케이션에 대한 프로세스 지표를 보내도록 CloudWatch 에이전트를 구성합니다.` },
      { k: 'C', en: `Update the CloudFormation template to install AWS Systems Manager Agent on the EC2 instances. Configure Systems Manager Agent to send process metrics for the application.`, ko: `CloudFormation 템플릿을 업데이트하여 EC2 인스턴스에 AWS Systems Manager 에이전트를 설치합니다. 애플리케이션에 대한 프로세스 지표를 보내도록 Systems Manager 에이전트를 구성합니다.` },
      { k: 'D', en: `Create an alarm for the custom metric in Amazon CloudWatch for the failure scenarios. Configure the alarm to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic.`, ko: `실패 시나리오에 대해 Amazon CloudWatch에서 사용자 지정 지표에 대한 경보를 생성합니다. Amazon SNS 주제에 메시지를 게시하도록 경보를 구성합니다.` },
      { k: 'E', en: `Create an AWS Lambda function that responds to the Amazon Simple Notification Service (Amazon SNS) message to take the instance out of service. Update the network routes to point to the replacement instance.`, ko: `Amazon SNS 메시지에 응답하여 인스턴스 서비스를 중단하는 AWS Lambda 함수를 생성합니다. 대체 인스턴스를 가리키도록 네트워크 경로를 업데이트합니다.` },
      { k: 'F', en: `In the CloudFormation template, write a condition that updates the network routes when a replacement instance is launched.`, ko: `CloudFormation 템플릿에서 대체 인스턴스가 시작될 때 네트워크 경로를 업데이트하는 조건을 작성합니다.` },
    ],
    answer: ['B', 'D', 'E'],
    vote: '100% BDE',
    explain: `<p><span class="mark-ok">✅ B — CloudWatch 에이전트로 애플리케이션 프로세스 지표 수집</span></p>
<p>분석 소프트웨어의 프로세스 상태를 나타내는 사용자 지정 지표를 CloudWatch에 전송하여 소프트웨어 장애를 감지합니다.</p>
<p><span class="mark-ok">✅ D — CloudWatch 경보 → SNS 주제 게시</span></p>
<p>소프트웨어 장애 시나리오를 탐지하는 CloudWatch 경보를 생성하고, 경보 발동 시 SNS 주제에 메시지를 게시하여 자동화된 대응을 트리거합니다.</p>
<p><span class="mark-ok">✅ E — Lambda → 네트워크 경로 업데이트</span></p>
<p>SNS 메시지를 수신한 Lambda 함수가 장애 인스턴스를 서비스에서 제거하고, ASG가 교체 인스턴스를 시작하면 네트워크 경로를 새 인스턴스의 ENI를 가리키도록 자동으로 업데이트합니다. 이를 통해 인스턴스 교체 후 라우팅 문제를 해결합니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — EC2 상태 확인 지표 기반 경보는 EC2 인스턴스 자체의 하드웨어/하이퍼바이저 문제를 감지합니다. <strong>애플리케이션 소프트웨어 수준의 장애</strong>는 감지하지 못합니다. 또한 ASG는 이미 자동으로 장애 인스턴스를 교체합니다.</p>
<p><span class="mark-no">❌ C</span> — Systems Manager 에이전트는 패치, 명령 실행 등 운영 관리에 사용됩니다. 애플리케이션 프로세스 지표를 CloudWatch로 전송하는 것은 CloudWatch 에이전트(B)의 역할입니다.</p>
<p><span class="mark-no">❌ F</span> — CloudFormation 조건(Condition)은 스택 배포 시 정적 평가에 사용됩니다. 실행 중 동적 이벤트(인스턴스 교체)에 반응하여 네트워크 경로를 업데이트하는 데 사용할 수 없습니다.</p>`,
    disc: [
      { ans: 'BDE (100%)', txt: '흐름: CW 에이전트로 앱 지표 수집(B) → CW 경보로 장애 감지 후 SNS 전송(D) → Lambda가 SNS 응답하여 네트워크 경로 업데이트(E). A는 이미 ASG가 처리, C는 SSM이 지표 전송 불가, F는 동적 이벤트 처리 불가.' }
    ]
  },
  {
    n: 223,
    en: `A company is developing a new on-demand video application that is based on microservices. The application will have 5 million users at launch and will have 30 million users after 6 months. The company has deployed the application on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. The company developed the application by using ECS services that use the HTTPS protocol.<br><br>A solutions architect needs to implement updates to the application by using blue/green deployments. The solution must distribute traffic to each ECS service through a load balancer. The application must automatically adjust the number of tasks in response to an Amazon CloudWatch alarm.<br><br>Which solution will meet these requirements?`,
    ko: `한 회사가 마이크로서비스를 기반으로 하는 새로운 주문형 비디오 애플리케이션을 개발하고 있습니다. 이 애플리케이션은 출시 시점에 500만 명의 사용자를 확보하고 6개월 후에는 3000만 명의 사용자를 확보하게 됩니다. 회사는 AWS Fargate의 Amazon ECS에 애플리케이션을 배포했습니다. 회사는 HTTPS 프로토콜을 사용하는 ECS 서비스를 사용하여 애플리케이션을 개발했습니다.<br><br>솔루션 아키텍트는 블루/그린 배포를 사용하여 애플리케이션에 대한 업데이트를 구현해야 합니다. 솔루션은 로드 밸런서를 통해 각 ECS 서비스에 트래픽을 분산해야 합니다. 애플리케이션은 Amazon CloudWatch 경보에 응답하여 작업 수를 자동으로 조정해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Configure the ECS services to use the blue/green deployment type and a Network Load Balancer. Request increases to the service quota for tasks per service to meet the demand.`, ko: `블루/그린 배포 유형과 Network Load Balancer를 사용하도록 ECS 서비스를 구성합니다. 수요를 충족하기 위해 서비스당 작업에 대한 서비스 할당량을 요청합니다.` },
      { k: 'B', en: `Configure the ECS services to use the blue/green deployment type and a Network Load Balancer. Implement Auto Scaling group for each ECS service by using the Cluster Autoscaler.`, ko: `블루/그린 배포 유형과 Network Load Balancer를 사용하도록 ECS 서비스를 구성합니다. Cluster Autoscaler를 사용하여 각 ECS 서비스에 대한 Auto Scaling 그룹을 구현합니다.` },
      { k: 'C', en: `Configure the ECS services to use the blue/green deployment type and an Application Load Balancer. Implement an Auto Scaling group for each ECS service by using the Cluster Autoscaler.`, ko: `블루/그린 배포 유형과 Application Load Balancer를 사용하도록 ECS 서비스를 구성합니다. Cluster Autoscaler를 사용하여 각 ECS 서비스에 대한 Auto Scaling 그룹을 구현합니다.` },
      { k: 'D', en: `Configure the ECS services to use the blue/green deployment type and an Application Load Balancer. Implement Service Auto Scaling for each ECS service.`, ko: `블루/그린 배포 유형과 Application Load Balancer를 사용하도록 ECS 서비스를 구성합니다. 각 ECS 서비스에 대해 서비스 자동 조정을 구현합니다.` },
    ],
    answer: ['D'],
    vote: '85% D',
    explain: `<p><span class="mark-ok">✅ D — ALB + ECS 블루/그린 배포 + Service Auto Scaling</span></p>
<p>HTTPS 프로토콜 기반 웹 애플리케이션은 <strong>Application Load Balancer(ALB)</strong>를 사용해야 합니다. ALB는 HTTP/HTTPS 레이어 7 라우팅을 지원하며 AWS CodeDeploy를 통한 ECS 블루/그린 배포와 통합됩니다.</p>
<p>AWS Fargate에서는 <strong>Cluster Autoscaler가 지원되지 않습니다.</strong> Fargate는 서버리스이므로 클러스터 노드(EC2) 수를 조정하는 Cluster Autoscaler가 아닌, ECS 태스크 수를 조정하는 <strong>ECS Service Auto Scaling</strong>을 사용해야 합니다. CloudWatch 경보에 연동하여 태스크 수를 자동으로 조정합니다.</p>
<p><a href="https://repost.aws/knowledge-center/ecs-fargate-service-auto-scaling" target="_blank">AWS 공식 문서 - ECS Fargate Service Auto Scaling</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — NLB는 Layer 4(TCP)만 지원하며, ECS 블루/그린 배포를 위한 HTTPS 라우팅과 가중치 기반 트래픽 전환에 ALB가 더 적합합니다. 서비스 할당량 증가는 자동 조정이 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — NLB 문제(A와 동일) + Cluster Autoscaler는 Fargate에서 지원되지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — ALB는 올바르지만, <strong>Cluster Autoscaler는 AWS Fargate 워크로드에서 사용할 수 없습니다.</strong> Fargate 용량 공급자를 참조해야 하며, 태스크 수 조정에는 ECS Service Auto Scaling을 사용합니다.</p>`,
    disc: [
      { ans: 'D (85%)', txt: 'HTTPS → ALB 필수(NLB는 L7 미지원). Fargate → Cluster Autoscaler 미지원, ECS Service Auto Scaling 사용. D만이 ALB + Service Auto Scaling 조합을 올바르게 제시.' }
    ]
  },
  {
    n: 224,
    en: `A company is running a containerized application in the AWS Cloud. The application is running by using Amazon Elastic Container Service (Amazon ECS) on a set of Amazon EC2 instances. The EC2 instances run in an Auto Scaling group.<br><br>The company uses Amazon Elastic Container Registry (Amazon ECR) to store its container images. When a new image version is uploaded, the new image version receives a unique tag.<br><br>The company needs a solution that inspects new image versions for common vulnerabilities and exposures. The solution must automatically delete new image tags that have Critical or High severity findings. The solution also must notify the development team when such a deletion occurs.<br><br>Which solution meets these requirements?`,
    ko: `회사는 AWS 클라우드에서 컨테이너화된 애플리케이션을 실행하고 있습니다. 애플리케이션은 Amazon EC2 인스턴스 세트에서 Amazon ECS를 사용하여 실행됩니다. EC2 인스턴스는 Auto Scaling 그룹에서 실행됩니다.<br><br>회사는 Amazon ECR을 사용하여 컨테이너 이미지를 저장합니다. 새 이미지 버전이 업로드되면 새 이미지 버전은 고유한 태그를 받습니다.<br><br>회사에는 일반적인 취약점과 노출이 있는지 새 이미지 버전을 검사하는 솔루션이 필요합니다. 솔루션은 심각도 또는 높음 심각도 결과가 있는 새 이미지 태그를 자동으로 삭제해야 합니다. 또한 솔루션은 그러한 삭제가 발생하는 경우 개발팀에 알려야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Configure scan on push on the repository. Use Amazon EventBridge to invoke an AWS Step Functions state machine when a scan is complete for images that have Critical or High severity findings. Use the Step Functions state machine to delete the image tag for those images and to notify the development team through Amazon Simple Notification Service (Amazon SNS).`, ko: `리포지토리에서 푸시 시 검색을 구성합니다. 위험 또는 높음 심각도 결과가 있는 이미지에 대한 스캔이 완료되면 Amazon EventBridge를 사용하여 AWS Step Functions 상태 시스템을 호출합니다. Step Functions 상태 시스템을 사용하여 해당 이미지의 이미지 태그를 삭제하고 Amazon SNS를 통해 개발 팀에 알립니다.` },
      { k: 'B', en: `Configure scan on push on the repository. Configure scan results to be pushed to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Lambda function when a new message is added to the SQS queue. Use the Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).`, ko: `리포지토리에서 푸시 시 검색을 구성합니다. Amazon SQS 대기열에 스캔 결과가 푸시되도록 구성합니다. SQS 대기열에 새 메시지가 추가되면 AWS Lambda 함수를 호출합니다. Lambda 함수를 사용하여 심각도 또는 높음 심각도 결과가 있는 이미지의 이미지 태그를 삭제합니다. Amazon SES를 사용하여 개발 팀에 알립니다.` },
      { k: 'C', en: `Schedule an AWS Lambda function to start a manual image scan every hour. Configure Amazon EventBridge to invoke another Lambda function when a scan is complete. Use the second Lambda function to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Notification Service (Amazon SNS).`, ko: `매시간 수동 이미지 스캔을 시작하도록 AWS Lambda 함수를 예약합니다. 스캔이 완료되면 다른 Lambda 함수를 호출하도록 Amazon EventBridge를 구성합니다. 두 번째 Lambda 함수를 사용하여 심각도 또는 높음 심각도 결과가 있는 이미지의 이미지 태그를 삭제합니다. Amazon SNS를 사용하여 개발팀에 알립니다.` },
      { k: 'D', en: `Configure periodic image scan on the repository. Configure scan results to be added to an Amazon Simple Queue Service (Amazon SQS) queue. Invoke an AWS Step Functions state machine when a new message is added to the SQS queue. Use the Step Functions state machine to delete the image tag for images that have Critical or High severity findings. Notify the development team by using Amazon Simple Email Service (Amazon SES).`, ko: `리포지토리에서 정기적인 이미지 검색을 구성합니다. Amazon SQS 대기열에 스캔 결과가 추가되도록 구성합니다. SQS 대기열에 새 메시지가 추가되면 AWS Step Functions 상태 시스템을 호출합니다. Step Functions 상태 시스템을 사용하여 심각도 또는 높음 심각도 결과가 있는 이미지의 이미지 태그를 삭제합니다. Amazon SES를 사용하여 개발 팀에 알립니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — ECR 푸시 시 스캔 + EventBridge + Step Functions + SNS</span></p>
<p><strong>푸시 시 스캔(scan on push)</strong>을 활성화하면 새 이미지가 업로드되는 즉시 자동으로 스캔이 시작됩니다. 스캔 완료 시 ECR은 EventBridge에 이벤트를 발행하므로, EventBridge 규칙으로 Critical/High 결과를 필터링하여 Step Functions를 트리거할 수 있습니다.</p>
<p>Step Functions 상태 머신이 이미지 태그 삭제와 SNS 알림을 순서대로 처리합니다. <strong>SNS는 운영 알림의 표준 도구</strong>이며 이메일, SMS, HTTP 등 다양한 채널로 개발팀에 알릴 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/ecr-eventbridge.html" target="_blank">AWS 공식 문서 - ECR EventBridge 통합</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — ECR 스캔 결과를 SQS로 직접 전송하는 기능은 지원되지 않습니다. 또한 SES는 대량 이메일 전송 서비스로 운영 알림에는 SNS가 더 적합합니다.</p>
<p><span class="mark-no">❌ C</span> — 매시간 수동 스캔을 예약하는 것은 새 이미지가 푸시되는 즉시 검사하지 못합니다. 취약한 이미지가 최대 1시간 동안 사용 가능한 상태로 유지될 수 있습니다.</p>
<p><span class="mark-no">❌ D</span> — 정기 스캔은 B·C와 같이 즉각적인 대응이 불가합니다. 또한 SQS로의 직접 ECR 스캔 결과 전송이 지원되지 않으며, SES는 운영 알림에 부적합합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: '푸시 시 즉시 스캔 → ECR이 EventBridge에 이벤트 발행 → Step Functions로 태그 삭제 및 SNS 알림. C/D의 주기적 스캔은 즉각 대응 불가. B/D의 ECR→SQS 직접 전송 불가, SES는 알림에 부적합.' }
    ]
  },
  {
    n: 225,
    en: `A company runs many workloads on AWS and uses AWS Organizations to manage its accounts. The workloads are hosted on Amazon EC2, AWS Fargate, and AWS Lambda. Some of the workloads have unpredictable demand. Accounts record high usage in some months and low usage in other months.<br><br>The company wants to optimize its compute costs over the next 3 years. A solutions architect obtains a 6-month average for each of the accounts across the organization to calculate usage.<br><br>Which solution will provide the MOST cost savings for all the organization's compute usage?`,
    ko: `회사는 AWS에서 많은 워크로드를 실행하고 AWS Organizations를 사용하여 계정을 관리합니다. 워크로드는 Amazon EC2, AWS Fargate, AWS Lambda에서 호스팅됩니다. 일부 워크로드에는 예측할 수 없는 수요가 있습니다. 계정은 어떤 달에는 높은 사용량을 기록하고 다른 달에는 낮은 사용량을 기록합니다.<br><br>회사는 향후 3년 동안 컴퓨팅 비용을 최적화하려고 합니다. 솔루션 아키텍트는 사용량을 계산하기 위해 조직 전체의 각 계정에 대해 6개월 평균을 얻습니다.<br><br>조직의 모든 컴퓨팅 사용량에 대해 가장 많은 비용 절감 효과를 제공하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Purchase Reserved Instances for the organization to match the size and number of the most common EC2 instances from the member accounts.`, ko: `회원 계정에서 가장 일반적인 EC2 인스턴스의 크기와 수에 맞게 조직의 예약 인스턴스를 구매합니다.` },
      { k: 'B', en: `Purchase a Compute Savings Plan for the organization from the management account by using the recommendation at the management account level.`, ko: `마스터 계정 수준의 권장 사항을 사용하여 마스터 계정에서 조직을 위한 Compute Savings Plan을 구매합니다.` },
      { k: 'C', en: `Purchase Reserved Instances for each member account that had high EC2 usage according to the data from the last 6 months.`, ko: `지난 6개월 동안의 데이터에 따라 EC2 사용량이 높은 각 멤버 계정에 대해 예약 인스턴스를 구매합니다.` },
      { k: 'D', en: `Purchase an EC2 Instance Savings Plan for each member account from the management account based on EC2 usage data from the last 6 months.`, ko: `지난 6개월 동안의 EC2 사용 데이터를 기반으로 마스터 계정에서 각 멤버 계정에 대한 EC2 Instance Savings Plan을 구매합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Compute Savings Plan (관리 계정에서 조직 전체 구매)</span></p>
<p><strong>Compute Savings Plan</strong>은 EC2, Fargate, Lambda 모두에 적용되는 가장 유연한 절감 계획입니다. 인스턴스 패밀리, 크기, AZ, 리전, OS, 테넌시에 관계없이 자동으로 적용되어 최대 66%까지 비용을 절감합니다.</p>
<p>조직의 <strong>관리(마스터) 계정에서 구매</strong>하면 조직 내 모든 계정에 자동으로 적용됩니다. 수요가 예측 불가능한 워크로드가 있어도 6개월 평균 기준으로 약정 금액을 설정하면 유연하게 대응할 수 있습니다.</p>
<p><a href="https://aws.amazon.com/savingsplans/compute-pricing/" target="_blank">AWS 공식 문서 - Compute Savings Plan</a></p>`,
    wrong: `<p><span class="mark-no">❌ A, C</span> — 예약 인스턴스(RI)는 <strong>EC2 인스턴스에만 적용</strong>됩니다. Fargate와 Lambda에는 적용되지 않아 세 가지 플랫폼 모두에 대한 최대 절감을 달성할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 Instance Savings Plan은 EC2에만 적용되며 Fargate와 Lambda를 포함하지 않습니다. Compute Savings Plan보다 유연성이 낮습니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'EC2+Fargate+Lambda 모두 포함 → Compute Savings Plan만 해당. RI와 EC2 Instance Savings Plan은 EC2 전용. 관리 계정에서 구매 시 조직 전체 적용.' }
    ]
  },
  {
    n: 226,
    en: `A company has hundreds of AWS accounts. The company uses an organization in AWS Organizations to manage all the accounts. The company has turned on all features.<br><br>A finance team has allocated a daily budget for AWS costs. The finance team must receive an email notification if the organization's AWS costs exceed 80% of the allocated budget. A solutions architect needs to implement a solution to track the costs and deliver the notifications.<br><br>Which solution will meet these requirements?`,
    ko: `회사에는 수백 개의 AWS 계정이 있습니다. 회사는 AWS Organizations의 조직을 사용하여 모든 계정을 관리합니다. 회사는 모든 기능을 켰습니다.<br><br>재무팀은 AWS 비용에 대한 일일 예산을 할당했습니다. 조직의 AWS 비용이 할당된 예산의 80%를 초과하는 경우 재무팀은 이메일 알림을 받아야 합니다. 솔루션 아키텍트는 비용을 추적하고 알림을 전달하는 솔루션을 구현해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `In the organization's management account, use AWS Budgets to create a budget that has a daily period. Add an alert threshold and set the value to 80%. Use Amazon Simple Notification Service (Amazon SNS) to notify the finance team.`, ko: `조직의 마스터 계정에서 AWS Budgets를 사용하여 일일 기간이 있는 예산을 생성합니다. 경고 임계값을 추가하고 값을 80%로 설정합니다. Amazon SNS를 사용하여 재무팀에 알립니다.` },
      { k: 'B', en: `In the organization's management account, set up the organizational view feature for AWS Trusted Advisor. Create an organizational view report for cost optimization. Set an alert threshold of 80%. Configure notification preferences. Add the email addresses of the finance team.`, ko: `조직의 마스터 계정에서 AWS Trusted Advisor에 대한 조직 보기 기능을 설정합니다. 비용 최적화를 위한 조직 보기 보고서를 만듭니다. 경고 임계값을 80%로 설정합니다. 알림 기본 설정을 구성합니다. 재무팀의 이메일 주소를 추가합니다.` },
      { k: 'C', en: `Register the organization with AWS Control Tower. Activate the optional cost control (guardrail). Set a control (guardrail) parameter of 80%. Configure control (guardrail) notification preferences. Use Amazon Simple Notification Service (Amazon SNS) to notify the finance team.`, ko: `AWS Control Tower에 조직을 등록합니다. 선택적 비용 관리(가드레일)를 활성화합니다. 제어(가드레일) 매개변수를 80%로 설정합니다. 제어(가드레일) 알림 기본 설정을 구성합니다. Amazon SNS를 사용하여 재무팀에 알립니다.` },
      { k: 'D', en: `Configure the member accounts to save a daily AWS Cost and Usage Report to an Amazon S3 bucket in the organization's management account. Use Amazon EventBridge to schedule a daily Amazon Athena query to calculate the organization's costs. Configure Athena to send an Amazon CloudWatch alert if the total costs are more than 80% of the allocated budget. Use Amazon Simple Notification Service (Amazon SNS) to notify the finance team.`, ko: `일일 AWS 비용 및 사용 보고서를 조직의 마스터 계정의 Amazon S3 버킷에 저장하도록 회원 계정을 구성합니다. Amazon EventBridge를 사용하여 일일 Amazon Athena 쿼리를 예약하여 조직의 비용을 계산합니다. 총 비용이 할당된 예산의 80%를 초과하는 경우 Amazon CloudWatch 경보를 보내도록 Athena를 구성합니다. Amazon SNS를 사용하여 재무팀에 알립니다.` },
    ],
    answer: ['A'],
    vote: '100% A',
    explain: `<p><span class="mark-ok">✅ A — AWS Budgets + SNS 알림 (관리 계정)</span></p>
<p><strong>AWS Budgets</strong>는 조직의 관리 계정에서 전체 조직의 비용을 추적하도록 구성할 수 있습니다. 일일(daily) 예산 주기와 80% 임계값 경보를 설정하면 비용이 기준을 초과할 때 SNS를 통해 재무팀에 이메일 알림을 자동으로 전송합니다. 가장 간단하고 직접적인 솔루션입니다.</p>
<p><a href="https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html" target="_blank">AWS 공식 문서 - AWS Budgets</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — Trusted Advisor는 비용 최적화 권장 사항을 제공하지만, 예산 대비 비율 임계값 알림 기능이 없습니다. 비용 추적 및 임계값 알림에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Control Tower 가드레일은 보안·거버넌스 정책 적용을 위한 도구입니다. 비용 예산 임계값 알림 기능을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Cost and Usage Report + Athena + CloudWatch 파이프라인은 구현 복잡도가 매우 높고 불필요합니다. AWS Budgets가 이 기능을 기본 제공합니다.</p>`,
    disc: [
      { ans: 'A (100%)', txt: 'AWS Budgets는 예산 추적 + 임계값 알림의 표준 솔루션. 관리 계정에서 조직 전체 비용 추적 가능. B/C/D는 모두 과잉 구성이거나 적합하지 않은 서비스 조합.' }
    ]
  },
  {
    n: 227,
    en: `A company provides auction services for artwork and has users across North America and Europe. The company hosts its application in Amazon EC2 instances in the us-east-1 Region. Artists upload photos of their work as large-size, high-resolution image files from their mobile phones to a centralized Amazon S3 bucket created in the us-east-1 Region. The users in Europe are reporting slow performance for their image uploads.<br><br>How can a solutions architect improve the performance of the image upload process?`,
    ko: `회사는 미술품 경매 서비스를 제공하고 북미와 유럽 전역에 사용자를 보유하고 있습니다. 회사는 us-east-1 리전의 Amazon EC2 인스턴스에서 애플리케이션을 호스팅합니다. 아티스트는 자신의 작품 사진을 휴대폰에서 대형 고해상도 이미지 파일로 us-east-1 리전에서 생성된 중앙 집중식 Amazon S3 버킷으로 업로드합니다. 유럽 사용자들은 이미지 업로드 성능이 저하되고 있다고 보고하고 있습니다.<br><br>솔루션 아키텍트는 이미지 업로드 프로세스의 성능을 어떻게 향상시킬 수 있습니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Redeploy the application to use S3 multipart uploads.`, ko: `S3 멀티파트 업로드를 사용하도록 애플리케이션을 재배포합니다.` },
      { k: 'B', en: `Create an Amazon CloudFront distribution and point to the application as a custom origin.`, ko: `Amazon CloudFront 배포판을 생성하고 애플리케이션을 사용자 지정 오리진으로 지정합니다.` },
      { k: 'C', en: `Configure the buckets to use S3 Transfer Acceleration.`, ko: `S3 Transfer Acceleration을 사용하도록 버킷을 구성합니다.` },
      { k: 'D', en: `Create an Auto Scaling group for the EC2 instances and create a scaling policy.`, ko: `EC2 인스턴스에 대한 Auto Scaling 그룹을 생성하고 조정 정책을 생성합니다.` },
    ],
    answer: ['C'],
    vote: '90% C',
    explain: `<p><span class="mark-ok">✅ C — S3 Transfer Acceleration</span></p>
<p>S3 Transfer Acceleration은 Amazon CloudFront의 글로벌 엣지 로케이션 네트워크를 활용하여 클라이언트에서 S3 버킷으로의 업로드 속도를 향상시킵니다. 유럽 사용자가 업로드하면 데이터가 가장 가까운 CloudFront 엣지 포인트를 통해 들어와 최적화된 AWS 백본 네트워크를 통해 us-east-1 S3 버킷으로 전달됩니다. <strong>지리적으로 원거리 사용자의 업로드 지연을 직접적으로 해결</strong>합니다.</p>
<p><a href="https://aws.amazon.com/s3/transfer-acceleration/" target="_blank">AWS 공식 문서 - S3 Transfer Acceleration</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 멀티파트 업로드는 대용량 파일 전송의 안정성과 병렬 업로드 처리량을 향상시키지만, <strong>지리적 거리로 인한 네트워크 지연(latency)을 해결하지 못합니다.</strong> 유럽에서 us-east-1까지의 물리적 거리 문제는 여전히 존재합니다.</p>
<p><span class="mark-no">❌ B</span> — CloudFront는 콘텐츠 다운로드(배포)를 가속화하는 CDN입니다. 업로드(PUT) 가속화에는 S3 Transfer Acceleration이 적합합니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 Auto Scaling은 애플리케이션 서버의 처리 용량을 확장하는 것으로, S3 직접 업로드의 네트워크 지연 문제와 무관합니다.</p>`,
    disc: [
      { ans: 'C (90%)', txt: '유럽 사용자만 지연 → 지리적 거리 문제 → Transfer Acceleration으로 엣지 경유. A(멀티파트)는 처리량 향상이나 거리 문제 미해결. B(CloudFront)는 다운로드 가속 전용.' }
    ]
  },
  {
    n: 228,
    en: `A company wants to containerize a multi-tier web application and move the application from an on-premises data center to AWS. The application includes web, application, and database tiers. The company needs to make the application fault tolerant and scalable. Some frequently accessed data must always be available across application servers. Frontend web servers need session persistence and must scale to meet increases in traffic.<br><br>Which solution will meet these requirements with the LEAST ongoing operational overhead?`,
    ko: `회사는 다중 계층 웹 애플리케이션을 컨테이너화하고 애플리케이션을 온프레미스 데이터 센터에서 AWS로 이동하려고 합니다. 애플리케이션에는 웹, 애플리케이션 및 데이터베이스 계층이 포함됩니다. 회사는 애플리케이션의 내결함성과 확장성을 높여야 합니다. 자주 액세스하는 일부 데이터는 애플리케이션 서버 전체에서 항상 사용할 수 있어야 합니다. 프런트엔드 웹 서버에는 세션 지속성이 필요하며 트래픽 증가에 맞춰 확장해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Run the application on Amazon Elastic Container Service (Amazon ECS) on AWS Fargate. Use Amazon Elastic File System (Amazon EFS) for data that is frequently accessed between the web and application tiers. Store the frontend web server session data in Amazon Simple Queue Service (Amazon SQS).`, ko: `AWS Fargate의 Amazon ECS에서 애플리케이션을 실행합니다. 웹 계층과 애플리케이션 계층 간에 자주 액세스되는 데이터에는 Amazon EFS를 사용합니다. Amazon SQS에 프런트엔드 웹 서버 세션 데이터를 저장합니다.` },
      { k: 'B', en: `Run the application on Amazon Elastic Container Service (Amazon ECS) on Amazon EC2. Use Amazon ElastiCache for Redis to cache frontend web server session data. Use Amazon Elastic Block Store (Amazon EBS) with Multi-Attach on EC2 instances that are distributed across multiple Availability Zones.`, ko: `Amazon EC2의 Amazon ECS에서 애플리케이션을 실행합니다. Redis용 Amazon ElastiCache를 사용하여 프런트엔드 웹 서버 세션 데이터를 캐시합니다. 여러 가용 영역에 분산된 EC2 인스턴스에서 다중 연결 기능이 있는 Amazon EBS를 사용합니다.` },
      { k: 'C', en: `Run the application on Amazon Elastic Kubernetes Service (Amazon EKS). Configure Amazon EKS to use managed node groups. Use ReplicaSets to run the web servers and applications. Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system across all EKS pods to store frontend web server session data.`, ko: `Amazon EKS에서 애플리케이션을 실행합니다. 관리형 노드 그룹을 사용하도록 Amazon EKS를 구성합니다. ReplicaSets를 사용하여 웹 서버와 애플리케이션을 실행합니다. Amazon EFS 파일 시스템을 생성합니다. 모든 EKS 포드에 EFS 파일 시스템을 탑재하여 프런트엔드 웹 서버 세션 데이터를 저장합니다.` },
      { k: 'D', en: `Deploy the application on Amazon Elastic Kubernetes Service (Amazon EKS). Configure Amazon EKS to use managed node groups. Run the web servers and application as Kubernetes deployments in the EKS cluster. Store the frontend web server session data in an Amazon DynamoDB table. Create an Amazon Elastic File System (Amazon EFS) volume that all applications will mount at the time of deployment.`, ko: `Amazon EKS에 애플리케이션을 배포합니다. 관리형 노드 그룹을 사용하도록 Amazon EKS를 구성합니다. EKS 클러스터에서 웹 서버와 애플리케이션을 Kubernetes 배포로 실행합니다. 프런트엔드 웹 서버 세션 데이터를 Amazon DynamoDB 테이블에 저장합니다. 배포 시 모든 애플리케이션이 탑재될 Amazon EFS 볼륨을 생성합니다.` },
    ],
    answer: ['D'],
    vote: '88% D',
    explain: `<p><span class="mark-ok">✅ D — EKS + DynamoDB(세션) + EFS(공유 데이터)</span></p>
<p>커뮤니티 다수(88%)가 D를 선택합니다. 각 요구 사항 대응:</p>
<p><strong>공유 데이터(항상 사용 가능):</strong> Amazon EFS는 다중 AZ의 모든 포드/인스턴스에 동시 마운트 가능한 공유 파일 시스템입니다.</p>
<p><strong>세션 지속성:</strong> Amazon DynamoDB는 완전 관리형 NoSQL로 세션 데이터 저장에 적합하며 자동 확장을 지원합니다. EFS를 세션 스토어로 사용하는 C보다 적합합니다.</p>
<p><strong>내결함성·확장성:</strong> EKS 관리형 노드 그룹 + Kubernetes Deployment가 자동 복구와 수평 확장을 제공합니다.</p>
<p>B가 탈락하는 이유: EBS Multi-Attach는 <strong>동일 가용 영역 내에서만</strong> 다중 연결을 지원합니다. 다중 AZ에 분산된 EC2 인스턴스 간에는 동작하지 않습니다.</p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — SQS는 메시지 큐 서비스로 세션 데이터 저장에 적합하지 않습니다. 세션 데이터는 상태를 유지해야 하지만 SQS는 메시지가 소비되면 삭제됩니다.</p>
<p><span class="mark-no">❌ B</span> — EBS Multi-Attach는 <strong>단일 가용 영역 내에서만</strong> 지원됩니다. 다중 AZ의 EC2 인스턴스 간에 사용할 수 없어 공유 스토리지 요구 사항을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — EFS를 세션 데이터 저장소로 사용하는 것은 파일 시스템 기반으로 세션 관리에 비효율적입니다. DynamoDB가 세션 스토어로 더 적합합니다.</p>`,
    disc: [
      { ans: 'D (88%)', txt: 'A 탈락: SQS에 세션 데이터 저장 불가. B 탈락: EBS Multi-Attach는 단일 AZ 제한. C 탈락: EFS는 세션 스토어에 비효율. D는 DynamoDB(세션) + EFS(공유 데이터) 조합이 요구 사항 충족.' }
    ]
  },
  {
    n: 229,
    en: `A solutions architect is planning to migrate critical Microsoft SQL Server databases to AWS. Because the databases are legacy systems, the solutions architect will move the databases to a modern data architecture. The solutions architect must migrate the databases with near-zero downtime.<br><br>Which solution will meet these requirements?`,
    ko: `솔루션 아키텍트는 중요한 Microsoft SQL Server 데이터베이스를 AWS로 마이그레이션할 계획입니다. 데이터베이스는 레거시 시스템이므로 솔루션 아키텍트는 데이터베이스를 최신 데이터 아키텍처로 이동합니다. 솔루션 아키텍트는 가동 중지 시간이 거의 없이 데이터베이스를 마이그레이션해야 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS Application Migration Service and the AWS Schema Conversion Tool (AWS SCT). Perform an in-place upgrade before the migration. Export the migrated data to Amazon Aurora Serverless after cutover. Repoint the applications to Amazon Aurora.`, ko: `AWS Application Migration Service 및 AWS SCT를 사용합니다. 마이그레이션 전에 전체 업그레이드를 수행합니다. 컷오버 후 마이그레이션된 데이터를 Amazon Aurora Serverless로 내보냅니다. 애플리케이션을 Amazon Aurora로 다시 지정합니다.` },
      { k: 'B', en: `Use AWS Database Migration Service (AWS DMS) to rehost the database. Set Amazon S3 as a target. Set up change data capture (CDC) replication. When the source and destination are fully synchronized, load the data from Amazon S3 into an Amazon RDS for Microsoft SQL Server DB instance.`, ko: `AWS DMS를 사용하여 데이터베이스를 다시 호스팅합니다. Amazon S3를 대상으로 설정합니다. 변경 데이터 캡처(CDC) 복제를 설정합니다. 원본과 대상이 완전히 동기화되면 Amazon S3의 데이터를 Microsoft SQL Server DB 인스턴스용 Amazon RDS로 로드합니다.` },
      { k: 'C', en: `Use native database high availability tools. Connect the source system to an Amazon RDS for Microsoft SQL Server DB instance. Configure replication accordingly. When data replication is finished, transition the workload to an Amazon RDS for Microsoft SQL Server DB instance.`, ko: `기본 데이터베이스 고가용성 도구를 사용합니다. 소스 시스템을 Microsoft SQL Server DB 인스턴스용 Amazon RDS에 연결합니다. 이에 따라 복제를 구성합니다. 데이터 복제가 완료되면 워크로드를 Microsoft SQL Server DB 인스턴스용 Amazon RDS로 전환합니다.` },
      { k: 'D', en: `Use AWS Application Migration Service. Rehost the database server on Amazon EC2. When data replication is finished, detach the database and move the database to an Amazon RDS for Microsoft SQL Server DB instance. Reattach the database and then cut over all networking.`, ko: `AWS Application Migration Service를 사용합니다. Amazon EC2에서 데이터베이스 서버를 다시 호스팅합니다. 데이터 복제가 완료되면 데이터베이스를 분리하고 데이터베이스를 Microsoft SQL Server DB 인스턴스용 Amazon RDS로 이동합니다. 데이터베이스를 다시 연결한 다음 모든 네트워킹을 차단합니다.` },
    ],
    answer: ['C'],
    vote: 'C(47%) B(49%) 분분 — 제시 정답 C',
    explain: `<p><span class="mark-ok">✅ C — SQL Server 기본 HA 도구 (트랜잭션 복제) + RDS for SQL Server</span></p>
<p>SQL Server는 <strong>트랜잭션 복제(Transactional Replication)</strong> 또는 <strong>분산 가용성 그룹(Distributed Availability Group)</strong> 같은 기본 HA 도구를 제공합니다. 온프레미스 SQL Server를 소스로, Amazon RDS for SQL Server를 구독자(타겟)로 설정하면 거의 실시간으로 데이터가 동기화됩니다.</p>
<p>완전 동기화 후 애플리케이션을 RDS로 전환하면 <strong>가동 중지 시간을 최소화</strong>할 수 있습니다. AWS 공식 블로그에서 이 접근 방식을 권장합니다.</p>
<p><a href="https://aws.amazon.com/blogs/database/part-3-migrating-to-amazon-rds-for-sql-server-using-transactional-replication-with-native-backup-and-restore/" target="_blank">AWS 공식 블로그 - RDS SQL Server 트랜잭션 복제 마이그레이션</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 컷오버 후 데이터를 Aurora Serverless로 내보내는 것은 추가 마이그레이션 단계로 가동 중지 시간이 발생합니다. Application Migration Service는 서버 리호스팅 도구이며 DB 스키마 현대화에 직접 사용하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — DMS의 CDC 복제를 S3로 전송한 후 RDS로 로드하는 방식은 간접적이어서 최종 로딩 단계에서 추가 가동 중지 시간이 발생할 수 있습니다. DMS를 RDS로 직접 복제하면 더 나을 수 있으나, B는 S3를 중간 단계로 사용하는 구성입니다.</p>
<p><span class="mark-no">❌ D</span> — EC2로 리호스팅 후 RDS로 이동하는 2단계 마이그레이션은 복잡하고 데이터베이스 분리(detach) 시 가동 중지가 발생합니다.</p>`,
    disc: [
      { ans: 'C(47%) vs B(49%)', txt: '커뮤니티 의견 양분. C 지지: 트랜잭션 복제/분산 AG로 near-zero downtime 달성. B 지지: DMS CDC가 더 표준적. AWS 제시 정답은 C(기본 HA 도구 활용). 실제로는 Always On AG가 온프레미스→RDS 간 지원 제한이 있어 트랜잭션 복제 방식(C)이 현실적.' }
    ]
  },
  {
    n: 230,
    en: `A company's solutions architect is analyzing costs of a multi-application environment. The environment is deployed across multiple Availability Zones in a single AWS Region. After a recent acquisition, the company manages two organizations in AWS Organizations. The company has created multiple service provider applications as AWS PrivateLink-powered VPC endpoint services in one organization. The company has created multiple service consumer applications in the other organization.<br><br>Data transfer charges are much higher than the company expected, and the solutions architect needs to reduce the costs. The solutions architect must recommend guidelines for developers to follow when they deploy services. These guidelines must minimize data transfer charges for the whole environment.<br><br>Which guidelines meet these requirements? (Choose two.)`,
    ko: `회사의 솔루션 아키텍트가 다중 애플리케이션 환경의 비용을 분석하고 있습니다. 환경은 단일 AWS 리전의 여러 가용 영역에 배포됩니다. 최근 인수 후 회사는 AWS Organizations에서 두 개의 조직을 관리합니다. 회사는 한 조직에서 AWS PrivateLink 기반 VPC 엔드포인트 서비스로 여러 서비스 공급자 애플리케이션을 만들었습니다. 회사는 다른 조직에서 여러 서비스 소비자 애플리케이션을 만들었습니다.<br><br>데이터 전송 비용은 회사가 예상한 것보다 훨씬 높으며, 솔루션 아키텍트는 비용을 줄여야 합니다. 솔루션 아키텍트는 개발자가 서비스를 배포할 때 따라야 할 지침을 권장해야 합니다. 이러한 지침은 전체 환경에 대한 데이터 전송 비용을 최소화해야 합니다.<br><br>이러한 요구 사항을 충족하는 지침은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Use AWS Resource Access Manager to share the subnets that host the service provider applications with other accounts in the organization.`, ko: `AWS Resource Access Manager를 사용하여 서비스 공급자 애플리케이션을 호스팅하는 서브넷을 조직의 다른 계정과 공유합니다.` },
      { k: 'B', en: `Place the service provider applications and the service consumer applications in AWS accounts in the same organization.`, ko: `동일한 조직의 AWS 계정에 서비스 공급자 애플리케이션과 서비스 소비자 애플리케이션을 배치합니다.` },
      { k: 'C', en: `Turn off cross-zone load balancing for the Network Load Balancer in all service provider application deployments.`, ko: `모든 서비스 공급자 애플리케이션 배포에서 Network Load Balancer에 대한 교차 영역 로드 밸런싱을 비활성화합니다.` },
      { k: 'D', en: `Ensure that service consumer compute resources use the Availability Zone-specific endpoint service by using the endpoint's local DNS name.`, ko: `엔드포인트의 로컬 DNS 이름을 사용하여 서비스 소비자 컴퓨팅 리소스가 가용 영역별 엔드포인트 서비스를 사용하는지 확인합니다.` },
      { k: 'E', en: `Create a Savings Plan that provides adequate coverage for the organization's planned inter-Availability Zone data transfer usage.`, ko: `조직의 계획된 가용 영역 간 데이터 전송 사용량에 대해 적절한 적용 범위를 제공하는 절약 계획을 만듭니다.` },
    ],
    answer: ['C', 'D'],
    vote: 'BD(42%) CD(33%) 분분 — 제시 정답 CD',
    explain: `<p><span class="mark-ok">✅ C — NLB 교차 영역 로드 밸런싱 비활성화</span></p>
<p>NLB에서 교차 영역 로드 밸런싱을 비활성화하면 각 AZ의 NLB 노드가 <strong>동일 AZ의 대상에만 트래픽을 전달</strong>합니다. 이를 통해 AZ 간 데이터 전송을 방지하여 비용을 절감합니다. NLB는 기본적으로 교차 영역 로드 밸런싱이 비활성화되어 있지만, 활성화된 경우 AZ 간 트래픽이 발생합니다.</p>
<p><span class="mark-ok">✅ D — AZ별 엔드포인트 로컬 DNS 이름 사용</span></p>
<p>AWS PrivateLink 엔드포인트는 AZ별 DNS 이름을 제공합니다. 소비자가 <strong>AZ별 로컬 DNS 이름</strong>을 사용하면 트래픽이 동일 AZ 내의 엔드포인트로 라우팅되어 AZ 간 데이터 전송 비용을 제거합니다.</p>
<p><a href="https://docs.aws.amazon.com/whitepapers/latest/aws-privatelink/creating-highly-available-endpoint-services.html" target="_blank">AWS 공식 문서 - PrivateLink 고가용성 엔드포인트 서비스</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS RAM의 서브넷 공유는 <strong>동일 조직 내 계정 간에만</strong> 지원됩니다. 두 개의 별도 조직 간에는 RAM 서브넷 공유가 작동하지 않습니다.</p>
<p><span class="mark-no">❌ B</span> — 공급자와 소비자를 동일 조직에 배치하는 것은 조직 구조 재편이 필요합니다. 또한 B는 AZ 간 데이터 전송 비용 자체를 줄이지 않습니다. D와 결합되지 않으면 효과가 없습니다(다른 AZ 간 트래픽 여전히 발생).</p>
<p><span class="mark-no">❌ E</span> — Savings Plan은 컴퓨팅(EC2, Fargate, Lambda) 비용을 절감합니다. <strong>데이터 전송 비용에는 적용되지 않습니다.</strong></p>`,
    disc: [
      { ans: 'CD vs BD 논란', txt: 'C+D: AZ 간 전송을 물리적으로 방지(공급자 NLB 교차 영역 끄기 + 소비자 AZ별 DNS 사용). B+D: B는 동일 조직 배치로 AZ ID 일치 보장(Just_Ninja 설명). A 탈락: RAM은 동일 조직 내에서만 공유. E 탈락: Savings Plan은 데이터 전송 비용에 미적용. AWS 제시 정답은 CD.' }
    ]
  },
];