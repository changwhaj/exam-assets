window.QS_SET16 = [
{
  n: 151,
  en: `A DevOps engineer wants to find a solution to migrate an application from on premises to AWS. The application is running on Linux and needs to run on specific versions of Apache Tomcat, HAProxy, and Varnish Cache to function properly. The application's operating system-level parameters require tuning. The solution must include a way to automate the deployment of new application versions. The infrastructure should be scalable and faulty servers should be replaced automatically.<br><br>Which solution should the DevOps engineer use?`,
  ko: `DevOps 엔지니어가 온프레미스에서 AWS로 애플리케이션을 마이그레이션하는 솔루션을 찾고 있습니다. 이 애플리케이션은 Linux에서 실행되며, 정상 작동을 위해 특정 버전의 Apache Tomcat, HAProxy, Varnish Cache에서 실행되어야 합니다. 애플리케이션의 운영 체제 수준 매개변수에는 튜닝이 필요합니다. 솔루션에는 새로운 애플리케이션 버전 배포를 자동화하는 방법이 포함되어야 합니다. 인프라는 확장 가능해야 하고, 오류가 있는 서버는 자동으로 교체되어야 합니다.<br><br>DevOps 엔지니어는 어떤 솔루션을 사용해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Upload the application as a Docker image that contains all the necessary software to Amazon ECR. Create an Amazon ECS cluster using an AWS Fargate launch type and an Auto Scaling group. Create an AWS CodePipeline pipeline that uses Amazon ECR as a source and Amazon ECS as a deployment provider.`, ko:`모든 필수 소프트웨어가 포함된 Docker 이미지로 애플리케이션을 Amazon ECR에 업로드합니다. AWS Fargate 시작 유형과 Auto Scaling 그룹을 사용하여 Amazon ECS 클러스터를 생성합니다. Amazon ECR을 소스로, Amazon ECS를 배포 공급자로 사용하는 AWS CodePipeline 파이프라인을 생성합니다.` },
    { k:'B', en:`Upload the application code to an AWS CodeCommit repository with a saved configuration file to configure and install the software. Create an AWS Elastic Beanstalk web server tier and a load balanced-type environment that uses the Tomcat solution stack. Create an AWS CodePipeline pipeline that uses CodeCommit as a source and Elastic Beanstalk as a deployment provider.`, ko:`소프트웨어를 구성 및 설치하기 위해 저장된 구성 파일과 함께 AWS CodeCommit 리포지토리에 애플리케이션 코드를 업로드합니다. Tomcat 솔루션 스택을 사용하는 AWS Elastic Beanstalk 웹 서버 계층과 로드 밸런싱 유형 환경을 생성합니다. CodeCommit을 소스로, Elastic Beanstalk을 배포 공급자로 사용하는 AWS CodePipeline 파이프라인을 생성합니다.` },
    { k:'C', en:`Upload the application code to an AWS CodeCommit repository with a set of .ebextensions files to configure and install the software. Create an AWS Elastic Beanstalk worker tier environment that uses the Tomcat solution stack. Create an AWS CodePipeline pipeline that uses CodeCommit as a source and Elastic Beanstalk as a deployment provider.`, ko:`소프트웨어를 구성 및 설치하기 위해 .ebextensions 파일 세트와 함께 AWS CodeCommit 리포지토리에 애플리케이션 코드를 업로드합니다. Tomcat 솔루션 스택을 사용하는 AWS Elastic Beanstalk 워커 계층 환경을 생성합니다. CodeCommit을 소스로, Elastic Beanstalk을 배포 공급자로 사용하는 AWS CodePipeline 파이프라인을 생성합니다.` },
    { k:'D', en:`Upload the application code to an AWS CodeCommit repository with an appspec.yml file to configure and install the necessary software. Create an AWS CodeDeploy deployment group associated with an Amazon EC2 Auto Scaling group. Create an AWS CodePipeline pipeline that uses CodeCommit as a source and CodeDeploy as a deployment provider.`, ko:`필요한 소프트웨어를 구성 및 설치하기 위해 appspec.yml 파일과 함께 AWS CodeCommit 리포지토리에 애플리케이션 코드를 업로드합니다. Amazon EC2 Auto Scaling 그룹과 연결된 AWS CodeDeploy 배포 그룹을 생성합니다. CodeCommit을 소스로, CodeDeploy를 배포 공급자로 사용하는 AWS CodePipeline 파이프라인을 생성합니다.` },
  ],
  answer: ['D'],
  vote: '90% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>특정 버전의 Apache Tomcat, HAProxy, Varnish Cache가 필요하고, <strong>OS 수준 매개변수 튜닝</strong>이 요구됩니다. AWS Fargate는 서버리스 특성으로 인해 OS 수준 접근이 제한됩니다. Elastic Beanstalk는 Varnish Cache를 지원하지 않으며 OS 수준 제어가 제한적입니다. CodeDeploy + EC2 Auto Scaling 조합은 완전한 OS 제어권을 보장하며, appspec.yml을 통해 소프트웨어 설치 및 구성을 자동화하고, Auto Scaling 그룹으로 확장성과 자동 교체를 지원합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Fargate는 서버리스로 OS 수준 매개변수 튜닝이 불가능합니다.</p>
<p><span class="mark-no">❌ B</span> — Elastic Beanstalk은 Varnish Cache를 지원하지 않으며 OS 수준 제어가 제한됩니다.</p>
<p><span class="mark-no">❌ C</span> — Worker 계층은 백그라운드 프로세스용이며 웹 애플리케이션에 적합하지 않습니다.</p>`,
  disc: [{ ans:'D (90%)', txt:'OS 수준 튜닝 필요 + 특정 소프트웨어 버전 요구 → Fargate/Beanstalk 제외. CodeDeploy + EC2 Auto Scaling이 유일한 정답.' }]
},
{
  n: 152,
  en: `A DevOps engineer is using AWS CodeDeploy across a fleet of Amazon EC2 instances in an EC2 Auto Scaling group. The associated CodeDeploy deployment group, which is integrated with EC2 Auto Scaling, is configured to perform in-place deployments with CodeDeployDefault.OneAtATime. During an ongoing new deployment, the engineer discovers that, although the overall deployment finished successfully, two out of five instances have the previous application revision deployed. The other three instances have the newest application revision.<br><br>What is likely causing this issue?`,
  ko: `DevOps 엔지니어가 EC2 Auto Scaling 그룹의 Amazon EC2 인스턴스 플릿에서 AWS CodeDeploy를 사용하고 있습니다. EC2 Auto Scaling과 통합된 해당 CodeDeploy 배포 그룹은 CodeDeployDefault.OneAtATime을 사용하는 인플레이스 배포로 구성되어 있습니다. 진행 중인 새 배포 중에 엔지니어는 전체 배포가 성공적으로 완료되었지만, 5개 인스턴스 중 2개에는 이전 애플리케이션 개정이 배포되어 있음을 발견했습니다. 나머지 3개 인스턴스에는 최신 애플리케이션 개정이 있습니다.<br><br>이 문제의 원인으로 가장 가능성이 높은 것은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`The two affected instances failed to fetch the new deployment.`, ko:`영향을 받은 두 인스턴스가 새 배포를 가져오지 못했습니다.` },
    { k:'B', en:`A failed AfterInstall lifecycle event hook caused the CodeDeploy agent to roll back to the previous version on the affected instances.`, ko:`AfterInstall 라이프사이클 이벤트 후크가 실패하여 CodeDeploy 에이전트가 영향을 받은 인스턴스에서 이전 버전으로 롤백되었습니다.` },
    { k:'C', en:`The CodeDeploy agent was not installed in two affected instances.`, ko:`영향을 받은 두 인스턴스에 CodeDeploy 에이전트가 설치되지 않았습니다.` },
    { k:'D', en:`EC2 Auto Scaling launched two new instances while the new deployment had not yet finished, causing the previous version to be deployed on the affected instances.`, ko:`EC2 Auto Scaling이 새 배포가 아직 완료되지 않은 상태에서 두 개의 새 인스턴스를 시작하여, 영향을 받은 인스턴스에 이전 버전이 배포되었습니다.` },
  ],
  answer: ['D'],
  vote: '89% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>인플레이스 배포는 배포 시작 시점에 존재하는 인스턴스만 대상으로 합니다. 배포 진행 중에 Auto Scaling으로 새 인스턴스가 추가되면, 해당 인스턴스는 배포 대상에서 제외되고 Auto Scaling 시작 구성의 <strong>이전 버전</strong>(현재 사용 가능한 최신 AMI/구성)을 받게 됩니다. 따라서 배포는 성공으로 완료되지만 일부 인스턴스에는 구버전이 남습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A/B</span> — 이 경우 5개 인스턴스 모두에 영향을 미쳐야 합니다. 2개만 영향을 받은 것은 설명하기 어렵습니다.</p>
<p><span class="mark-no">❌ C</span> — 에이전트가 없으면 해당 인스턴스에 아예 아무것도 배포되지 않습니다.</p>`,
  disc: [{ ans:'D (89%)', txt:'Auto Scaling이 배포 중간에 새 인스턴스를 시작하면 구버전 배포 발생. 공식 문서 troubleshooting-auto-scaling 참조.' }]
},
{
  n: 153,
  en: `A security team is concerned that a developer can unintentionally attach an Elastic IP address to an Amazon EC2 instance in production. No developer should be allowed to attach an Elastic IP address to an instance. The security team must be notified if any production server has an Elastic IP address at any time.<br><br>How can this task be automated?`,
  ko: `보안 팀은 개발자가 실수로 프로덕션의 Amazon EC2 인스턴스에 Elastic IP 주소를 연결할 수 있다는 우려가 있습니다. 어떤 개발자도 인스턴스에 Elastic IP 주소를 연결할 수 없어야 합니다. 프로덕션 서버에 언제든지 Elastic IP 주소가 연결된 경우 보안 팀에 알려야 합니다.<br><br>이 작업을 어떻게 자동화할 수 있습니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use Amazon Athena to query AWS CloudTrail logs to check for any associate-address attempts. Create an AWS Lambda function to disassociate the Elastic IP address from the instance, and alert the security team.`, ko:`Amazon Athena를 사용하여 AWS CloudTrail 로그를 쿼리하여 associate-address 시도가 있는지 확인합니다. AWS Lambda 함수를 생성하여 인스턴스에서 Elastic IP 주소를 분리하고 보안 팀에 알립니다.` },
    { k:'B', en:`Attach an IAM policy to the developers' IAM group to deny associate-address permissions. Create a custom AWS Config rule to check whether an Elastic IP address is associated with any instance tagged as production, and alert the security team.`, ko:`개발자의 IAM 그룹에 IAM 정책을 연결하여 associate-address 권한을 거부합니다. production으로 태그된 인스턴스에 Elastic IP 주소가 연결되어 있는지 확인하는 사용자 지정 AWS Config 규칙을 생성하고 보안 팀에 경고합니다.` },
    { k:'C', en:`Ensure that all IAM groups associated with developers do not have associate-address permissions. Create a scheduled AWS Lambda function to check whether an Elastic IP address is associated with any instance tagged as production, and alert the security team if an instance has an Elastic IP address associated with it.`, ko:`개발자와 연결된 모든 IAM 그룹에 associate-address 권한이 없는지 확인합니다. 예약된 AWS Lambda 함수를 생성하여 production으로 태그된 인스턴스에 Elastic IP 주소가 연결되어 있는지 확인하고, 연결된 경우 보안 팀에 알립니다.` },
    { k:'D', en:`Create an AWS Config rule to check that all production instances have EC2 IAM roles that include deny associate-address permissions. Verify whether there is an Elastic IP address associated with any instance, and alert the security team if an instance has an Elastic IP address associated with it.`, ko:`모든 프로덕션 인스턴스에 deny associate-address 권한이 포함된 EC2 IAM 역할이 있는지 확인하는 AWS Config 규칙을 생성합니다. 인스턴스에 Elastic IP 주소가 연결되어 있는지 확인하고, 연결된 경우 보안 팀에 경고합니다.` },
  ],
  answer: ['B'],
  vote: '100% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>두 가지 요구사항을 모두 충족합니다: ① IAM 정책으로 개발자 그룹의 <code>ec2:AssociateAddress</code> 권한을 거부하여 연결 자체를 차단하고, ② 사용자 지정 AWS Config 규칙으로 production 태그 인스턴스의 Elastic IP 연결 여부를 지속적으로 감지하여 보안 팀에 알립니다. AWS Config의 <code>eip-attached</code> 관리 규칙도 활용할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — CloudTrail 쿼리는 사후 탐지이며, Athena로 Lambda를 직접 트리거하는 구조가 아닙니다.</p>
<p><span class="mark-no">❌ C</span> — 예약 Lambda는 실시간 감지가 아니며 B보다 관리 오버헤드가 큽니다.</p>
<p><span class="mark-no">❌ D</span> — EC2 IAM 역할은 인스턴스가 수행하는 작업에 대한 권한이므로 개발자의 IAM 권한과 무관합니다.</p>`,
  disc: [{ ans:'B (100%)', txt:'IAM 정책으로 사전 차단 + Config 규칙으로 사후 감지 및 알림. 두 요구사항을 가장 직접적으로 충족.' }]
},
{
  n: 154,
  en: `A company is using AWS Organizations to create separate AWS accounts for each of its departments. The company needs to automate the following tasks:<br><br>• Update the Linux AMIs with new patches periodically and generate a golden image<br>• Install a new version of Chef agents in the golden image, if available<br>• Provide the newly generated AMIs to the department's accounts<br><br>Which solution meets these requirements with the LEAST management overhead?`,
  ko: `한 회사가 AWS Organizations를 사용하여 각 부서에 대해 별도의 AWS 계정을 생성하고 있습니다. 회사는 다음 작업을 자동화해야 합니다:<br><br>• 주기적으로 새 패치로 Linux AMI를 업데이트하고 골든 이미지 생성<br>• 사용 가능한 경우 골든 이미지에 새 버전의 Chef 에이전트 설치<br>• 새로 생성된 AMI를 부서 계정에 제공<br><br>가장 적은 관리 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Write a script to launch an Amazon EC2 instance from the previous golden image. Apply the patch updates. Install the new version of the Chef agent, generate a new golden image, and then modify the AMI permissions to share only the new image with the department's accounts.`, ko:`이전 골든 이미지에서 Amazon EC2 인스턴스를 시작하는 스크립트를 작성합니다. 패치 업데이트를 적용합니다. Chef 에이전트의 새 버전을 설치하고 새 골든 이미지를 생성한 다음, AMI 권한을 수정하여 부서 계정과만 새 이미지를 공유합니다.` },
    { k:'B', en:`Use Amazon EC2 Image Builder to create an image pipeline that consists of the base Linux AMI and components to install the Chef agent. Use AWS Resource Access Manager to share EC2 Image Builder images with the department's accounts.`, ko:`Amazon EC2 Image Builder를 사용하여 기본 Linux AMI와 Chef 에이전트를 설치하는 구성 요소로 구성된 이미지 파이프라인을 생성합니다. AWS Resource Access Manager를 사용하여 EC2 Image Builder 이미지를 부서 계정과 공유합니다.` },
    { k:'C', en:`Use an AWS Systems Manager Automation runbook to update the Linux AMI by using the previous image. Provide the URL for the script that will update the Chef agent. Use AWS Organizations to replace the previous golden image in the department's accounts.`, ko:`AWS Systems Manager Automation 런북을 사용하여 이전 이미지를 기반으로 Linux AMI를 업데이트합니다. Chef 에이전트를 업데이트할 스크립트의 URL을 제공합니다. AWS Organizations를 사용하여 부서 계정의 이전 골든 이미지를 교체합니다.` },
    { k:'D', en:`Use Amazon EC2 Image Builder to create an image pipeline that consists of the base Linux AMI and components to install the Chef agent. Create a parameter in AWS Systems Manager Parameter Store to store the new AMI ID that can be referenced by the department's accounts.`, ko:`Amazon EC2 Image Builder를 사용하여 기본 Linux AMI와 Chef 에이전트를 설치하는 구성 요소로 구성된 이미지 파이프라인을 생성합니다. 부서 계정에서 참조할 수 있는 새 AMI ID를 저장하기 위해 AWS Systems Manager Parameter Store에 파라미터를 생성합니다.` },
  ],
  answer: ['B'],
  vote: '86% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>EC2 Image Builder는 골든 AMI 빌드 파이프라인을 완전 자동화하며(패치 적용, Chef 설치 포함), <strong>AWS Resource Access Manager(RAM)</strong>를 통해 조직 내 다른 계정과 AMI를 쉽게 공유할 수 있습니다. 이는 최소한의 관리 오버헤드로 세 가지 요구사항을 모두 충족합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 스크립트 기반의 수동 접근 방식으로 관리 오버헤드가 높습니다.</p>
<p><span class="mark-no">❌ C</span> — AWS Organizations는 AMI 공유 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Parameter Store는 AMI ID를 저장할 수 있지만, 계정 간 AMI 공유는 RAM이 담당해야 합니다.</p>`,
  disc: [{ ans:'B (86%)', txt:'EC2 Image Builder + RAM 조합이 골든 이미지 생성 및 배포 자동화의 표준 패턴.' }]
},
{
  n: 155,
  en: `A company has a mission-critical application on AWS that uses automatic scaling. The company wants the deployment lifecycle to meet the following parameters:<br><br>• The application must be deployed one instance at a time to ensure the remaining fleet continues to serve traffic.<br>• The application is CPU intensive and must be closely monitored.<br>• The deployment must automatically roll back if the CPU utilization of the deployment instance exceeds 85%.<br><br>Which solution will meet these requirements?`,
  ko: `한 회사가 AWS에서 자동 스케일링을 사용하는 미션 크리티컬 애플리케이션을 보유하고 있습니다. 회사는 배포 라이프사이클이 다음 조건을 충족하기를 원합니다:<br><br>• 나머지 플릿이 트래픽을 계속 처리할 수 있도록 한 번에 하나의 인스턴스씩 애플리케이션을 배포해야 합니다.<br>• 애플리케이션은 CPU 집약적이며 면밀히 모니터링해야 합니다.<br>• 배포 인스턴스의 CPU 사용률이 85%를 초과하면 배포가 자동으로 롤백되어야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Use AWS CloudFormation to create an AWS Step Functions state machine and Auto Scaling lifecycle hooks to move to one instance at a time into a wait state. Use AWS Systems Manager automation to deploy the update to each instance and move it back into the Auto Scaling group using the heartbeat timeout.`, ko:`AWS CloudFormation을 사용하여 AWS Step Functions 상태 머신과 Auto Scaling 라이프사이클 후크를 생성하여 한 번에 한 인스턴스씩 대기 상태로 이동합니다. AWS Systems Manager 자동화를 사용하여 각 인스턴스에 업데이트를 배포하고 하트비트 타임아웃을 사용하여 Auto Scaling 그룹으로 다시 이동합니다.` },
    { k:'B', en:`Use AWS CodeDeploy with Amazon EC2 Auto Scaling. Configure an alarm tied to the CPU utilization metric. Use the CodeDeployDefault.OneAtATime configuration as a deployment strategy. Configure automatic rollbacks within the deployment group to roll back the deployment if the alarm thresholds are breached.`, ko:`Amazon EC2 Auto Scaling과 함께 AWS CodeDeploy를 사용합니다. CPU 사용률 메트릭에 연결된 알람을 구성합니다. 배포 전략으로 CodeDeployDefault.OneAtATime 구성을 사용합니다. 알람 임계값이 초과되면 배포를 롤백하도록 배포 그룹 내에서 자동 롤백을 구성합니다.` },
    { k:'C', en:`Use AWS Elastic Beanstalk for load balancing and AWS Auto Scaling. Configure an alarm tied to the CPU utilization metric. Configure rolling deployments with a fixed batch size of one instance. Enable enhanced health to monitor the status of the deployment and roll back based on the alarm previously created.`, ko:`로드 밸런싱 및 AWS 자동 확장을 위해 AWS Elastic Beanstalk를 사용합니다. CPU 사용률 메트릭에 연결된 알람을 구성합니다. 고정 배치 크기가 인스턴스 하나인 롤링 배포를 구성합니다. 향상된 상태 모니터링을 활성화하여 배포 상태를 모니터링하고 이전에 생성된 알람을 기반으로 롤백합니다.` },
    { k:'D', en:`Use AWS Systems Manager to perform a blue/green deployment with Amazon EC2 Auto Scaling. Configure an alarm tied to the CPU utilization metric. Deploy updates one at a time. Configure automatic rollbacks within the Auto Scaling group to roll back the deployment if the alarm thresholds are breached.`, ko:`AWS Systems Manager를 사용하여 Amazon EC2 Auto Scaling으로 블루/그린 배포를 수행합니다. CPU 사용률 메트릭에 연결된 알람을 구성합니다. 한 번에 하나씩 업데이트를 배포합니다. 알람 임계값이 초과되면 배포를 롤백하도록 Auto Scaling 그룹 내에서 자동 롤백을 구성합니다.` },
  ],
  answer: ['B'],
  vote: '93% B',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>CodeDeploy의 <strong>CodeDeployDefault.OneAtATime</strong> 전략은 한 번에 한 인스턴스씩 배포를 지원합니다. CloudWatch 알람을 배포 그룹에 연결하면 CPU 사용률 85% 초과 시 자동 롤백이 트리거됩니다. Amazon EC2 Auto Scaling과 통합되어 확장성도 보장합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — Step Functions은 배포 기능을 제공하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Elastic Beanstalk은 CPU 사용률 기반 자동 롤백을 지원하지 않습니다. 롤백은 수동으로 재배포해야 합니다.</p>
<p><span class="mark-no">❌ D</span> — AWS SSM은 배포 기능을 제공하지 않으며, Auto Scaling 그룹에서 알람 기반 자동 롤백을 구성할 수 없습니다.</p>`,
  disc: [{ ans:'B (93%)', txt:'CodeDeploy OneAtATime + CloudWatch 알람 + 자동 롤백이 세 가지 요구사항을 모두 충족하는 유일한 솔루션.' }]
},
{
  n: 156,
  en: `A company has a single developer writing code for an automated deployment pipeline. The developer is storing source code in an Amazon S3 bucket for each project. The company wants to add more developers to the team but is concerned about code conflicts and lost work. The company also wants to build a test environment to deploy newer versions of code for testing and allow developers to automatically deploy to both environments when code is changed in the repository.<br><br>What is the MOST efficient way to meet these requirements?`,
  ko: `한 회사에 자동화된 배포 파이프라인을 위한 코드를 작성하는 개발자가 한 명 있습니다. 개발자는 각 프로젝트의 Amazon S3 버킷에 소스 코드를 저장하고 있습니다. 회사는 팀에 개발자를 더 추가하고 싶지만 코드 충돌과 작업 손실에 대해 우려하고 있습니다. 회사는 또한 새 버전의 코드를 테스트하기 위한 테스트 환경을 구축하고, 리포지토리에서 코드가 변경될 때 개발자가 두 환경 모두에 자동으로 배포할 수 있기를 원합니다.<br><br>이러한 요구 사항을 충족하는 가장 효율적인 방법은 무엇입니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create an AWS CodeCommit repository for each project, use the main branch for production code, and create a testing branch for code deployed to testing. Use feature branches to develop new features and pull requests to merge code to testing and main branches.`, ko:`각 프로젝트에 대한 AWS CodeCommit 리포지토리를 생성하고, 프로덕션 코드에는 main 브랜치를 사용하며, 테스트에 배포되는 코드에 대한 테스트 브랜치를 생성합니다. 기능 브랜치를 사용하여 새로운 기능을 개발하고, 풀 리퀘스트를 사용하여 코드를 테스트 및 main 브랜치에 병합합니다.` },
    { k:'B', en:`Create another S3 bucket for each project for testing code, and use an AWS Lambda function to promote code changes between testing and production buckets. Enable versioning on all buckets to prevent code conflicts.`, ko:`각 프로젝트에 대해 테스트 코드용 S3 버킷을 별도로 생성하고, AWS Lambda 함수를 사용하여 테스트 버킷과 프로덕션 버킷 간의 코드 변경을 승격합니다. 코드 충돌을 방지하기 위해 모든 버킷에서 버전 관리를 활성화합니다.` },
    { k:'C', en:`Create an AWS CodeCommit repository for each project, and use the main branch for production and test code with different deployment pipelines for each environment. Use feature branches to develop new features.`, ko:`각 프로젝트에 대한 AWS CodeCommit 리포지토리를 생성하고, 프로덕션 및 테스트 코드 모두에 main 브랜치를 사용하되 각 환경에 대해 서로 다른 배포 파이프라인을 사용합니다. 기능 브랜치를 사용하여 새로운 기능을 개발합니다.` },
    { k:'D', en:`Enable versioning and branching on each S3 bucket, use the main branch for production code, and create a testing branch for code deployed to testing. Have developers use each branch for developing in each environment.`, ko:`각 S3 버킷에서 버전 관리 및 브랜칭을 활성화하고, 프로덕션 코드에는 main 브랜치를 사용하며, 테스트에 배포되는 코드에는 테스트 브랜치를 생성합니다. 개발자가 각 환경에서 각 브랜치를 사용하도록 합니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>AWS CodeCommit은 Git 기반 버전 관리 시스템으로 코드 충돌 방지와 협업을 지원합니다. <strong>main 브랜치(프로덕션) + testing 브랜치 + feature 브랜치</strong> 전략은 업계 표준 Git 브랜칭 패턴이며, 풀 리퀘스트를 통한 코드 리뷰 및 브랜치 변경 시 자동 배포 트리거를 지원합니다. S3는 소스 코드 버전 관리 도구가 아닙니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B, D</span> — S3는 소스 코드 협업에 적합하지 않습니다. 브랜칭 개념이 없으며 코드 충돌 해결 기능이 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 프로덕션과 테스트 코드 모두에 main 브랜치를 사용하는 것은 좋지 않은 관행입니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'CodeCommit + Git 브랜칭 전략이 코드 충돌 방지, 협업, 자동 배포 요구사항을 모두 충족.' }]
},
{
  n: 157,
  en: `A DevOps engineer notices that all Amazon EC2 instances running behind an Application Load Balancer in an Auto Scaling group are failing to respond to user requests. The EC2 instances are also failing target group HTTP health checks.<br><br>Upon inspection, the engineer notices the application process was not running in any EC2 instances. There are a significant number of out of memory messages in the system logs. The engineer needs to improve the resilience of the application to cope with a potential application memory leak. Monitoring and notifications should be enabled to alert when there is an issue.<br><br>Which combination of actions will meet these requirements? (Choose two.)`,
  ko: `DevOps 엔지니어는 Auto Scaling 그룹의 Application Load Balancer 뒤에서 실행되는 모든 Amazon EC2 인스턴스가 사용자 요청에 응답하지 않는다는 것을 알게 되었습니다. EC2 인스턴스는 대상 그룹 HTTP 상태 검사에도 실패하고 있습니다.<br><br>검사 결과, 어떤 EC2 인스턴스에서도 애플리케이션 프로세스가 실행되지 않고 있었습니다. 시스템 로그에 메모리 부족 메시지가 상당히 많이 있습니다. 엔지니어는 잠재적인 애플리케이션 메모리 누수에 대처하기 위해 애플리케이션의 복원력을 개선해야 합니다. 문제 발생 시 경고하도록 모니터링 및 알림을 활성화해야 합니다.<br><br>이러한 요구 사항을 충족하는 작업의 조합은 무엇입니까? (두 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Change the Auto Scaling configuration to replace the instances when they fail the load balancer's health checks.`, ko:`로드 밸런서의 상태 검사에 실패할 경우 인스턴스를 교체하도록 Auto Scaling 구성을 변경합니다.` },
    { k:'B', en:`Change the target group health check HealthCheckIntervalSeconds parameter to reduce the interval between health checks.`, ko:`대상 그룹 상태 검사 HealthCheckIntervalSeconds 파라미터를 변경하여 상태 검사 간격을 줄입니다.` },
    { k:'C', en:`Change the target group health checks from HTTP to TCP to check if the port where the application is listening is reachable.`, ko:`대상 그룹 상태 검사를 HTTP에서 TCP로 변경하여 애플리케이션이 수신 대기하는 포트에 도달 가능한지 확인합니다.` },
    { k:'D', en:`Enable the available memory consumption metric within the Amazon CloudWatch dashboard for the entire Auto Scaling group. Create an alarm when the memory utilization is high. Associate an Amazon SNS topic to the alarm to receive notifications when the alarm goes off.`, ko:`전체 Auto Scaling 그룹에 대해 Amazon CloudWatch 대시보드 내에서 사용 가능한 메모리 소비 메트릭을 활성화합니다. 메모리 사용률이 높을 때 알람을 생성합니다. 알람이 울릴 때 알림을 받으려면 Amazon SNS 토픽을 알람에 연결합니다.` },
    { k:'E', en:`Use the Amazon CloudWatch agent to collect the memory utilization of the EC2 instances in the Auto Scaling group. Create an alarm when the memory utilization is high and associate an Amazon SNS topic to receive a notification.`, ko:`Amazon CloudWatch 에이전트를 사용하여 Auto Scaling 그룹의 EC2 인스턴스 메모리 사용률을 수집합니다. 메모리 사용률이 높을 때 알람을 생성하고 Amazon SNS 토픽을 연결하여 알림을 받습니다.` },
  ],
  answer: ['A','E'],
  vote: '87% AE',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>기본적으로 Auto Scaling은 EC2 인스턴스 상태 검사를 사용하지만, <strong>ELB/ALB 상태 검사를 사용하도록 구성</strong>해야 로드 밸런서 상태 검사 실패 시 인스턴스를 자동 교체할 수 있습니다. 이를 통해 메모리 누수로 응답 불가 상태가 되면 자동으로 교체됩니다.</p>
<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p>EC2의 기본 CloudWatch 메트릭에는 메모리 사용률이 포함되지 않습니다. <strong>CloudWatch 에이전트</strong>를 설치해야만 메모리 메트릭을 수집할 수 있습니다. SNS 토픽 연결로 높은 메모리 사용 시 알림을 받을 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — 검사 간격을 줄이면 더 빨리 감지할 수 있지만, 복원력(자동 교체)을 개선하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — HTTP에서 TCP로 변경하면 애플리케이션 수준 상태 검사 능력이 떨어집니다.</p>
<p><span class="mark-no">❌ D</span> — CloudWatch 대시보드에서 메모리 메트릭을 직접 활성화할 수 없습니다. 에이전트가 필요합니다.</p>`,
  disc: [{ ans:'AE (87%)', txt:'복원력 향상에는 ALB 상태 검사 기반 자동 교체(A), 메모리 모니터링에는 CloudWatch 에이전트(E)가 필요.' }]
},
{
  n: 158,
  en: `An ecommerce company uses a large number of Amazon Elastic Block Store (Amazon EBS) backed Amazon EC2 instances. To decrease manual work across all the instances, a DevOps engineer is tasked with automating restart actions when EC2 instance retirement events are scheduled.<br><br>How can this be accomplished?`,
  ko: `전자상거래 회사가 많은 수의 Amazon Elastic Block Store(Amazon EBS) 지원 Amazon EC2 인스턴스를 사용합니다. 모든 인스턴스에서 수동 작업을 줄이기 위해 DevOps 엔지니어는 EC2 인스턴스 은퇴 이벤트가 예약될 때 재시작 작업을 자동화하는 업무를 맡았습니다.<br><br>이를 어떻게 달성할 수 있습니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a scheduled Amazon EventBridge rule to run an AWS Systems Manager Automation runbook that checks if any EC2 instances are scheduled for retirement once a week. If the instance is scheduled for retirement, the runbook will hibernate the instance.`, ko:`일주일에 한 번 EC2 인스턴스가 은퇴를 위해 예약되어 있는지 확인하는 AWS Systems Manager Automation 런북을 실행하기 위해 예약된 Amazon EventBridge 규칙을 생성합니다. 인스턴스가 은퇴를 위해 예약된 경우 런북이 인스턴스를 최대 절전 모드로 전환합니다.` },
    { k:'B', en:`Enable EC2 Auto Recovery on all of the instances. Create an AWS Config rule to limit the recovery to occur during a maintenance window only.`, ko:`모든 인스턴스에서 EC2 자동 복구를 활성화합니다. 유지 관리 기간 동안만 복구가 발생하도록 제한하는 AWS Config 규칙을 생성합니다.` },
    { k:'C', en:`Reboot all EC2 instances during an approved maintenance window that is outside of standard business hours. Set up Amazon CloudWatch alarms to send a notification in case any instance is failing EC2 instance status checks.`, ko:`표준 업무 시간 외의 승인된 유지 관리 기간 동안 모든 EC2 인스턴스를 재부팅합니다. 인스턴스가 EC2 인스턴스 상태 검사에 실패하는 경우 알림을 보내도록 Amazon CloudWatch 알람을 설정합니다.` },
    { k:'D', en:`Set up an AWS Health Amazon EventBridge rule to run AWS Systems Manager Automation runbooks that stop and start the EC2 instance when a retirement scheduled event occurs.`, ko:`은퇴 예약 이벤트가 발생할 때 EC2 인스턴스를 중지하고 시작하는 AWS Systems Manager Automation 런북을 실행하기 위한 AWS Health Amazon EventBridge 규칙을 설정합니다.` },
  ],
  answer: ['D'],
  vote: '100% D',
  explain: `<p><span class="mark-ok">✅ D — 핵심 이유</span></p>
<p>EC2 인스턴스 은퇴 이벤트는 <strong>AWS Health</strong>를 통해 발생합니다. AWS Health EventBridge 규칙을 설정하면 은퇴 이벤트 발생 시 자동으로 SSM Automation 런북을 트리거할 수 있습니다. EBS 지원 인스턴스는 <strong>중지 후 시작(stop-start)</strong>으로 다른 물리적 호스트로 재배치되어 은퇴 문제를 해결합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 주 1회 예약 검사는 실시간 대응이 아니며, 최대 절전 모드(hibernate)는 은퇴 이벤트 해결 방법이 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — AWS Config 규칙은 복구를 제한할 수 없습니다. 규정 준수 보고만 가능합니다.</p>
<p><span class="mark-no">❌ C</span> — 수동 재부팅은 자동화된 작업이 아닙니다.</p>`,
  disc: [{ ans:'D (100%)', txt:'EC2 은퇴 이벤트 → AWS Health → EventBridge → SSM Automation (stop/start)이 자동화 표준 패턴.' }]
},
{
  n: 159,
  en: `A company manages AWS accounts for application teams in AWS Control Tower. Individual application teams are responsible for securing their respective AWS accounts.<br><br>A DevOps engineer needs to enable Amazon GuardDuty for all AWS accounts in which the application teams have not already enabled GuardDuty. The DevOps engineer is using AWS CloudFormation StackSets from the AWS Control Tower management account.<br><br>How should the DevOps engineer configure the CloudFormation template to prevent failure during the StackSets deployment?`,
  ko: `한 회사가 AWS Control Tower에서 애플리케이션 팀의 AWS 계정을 관리합니다. 개별 애플리케이션 팀은 각자의 AWS 계정을 보안하는 책임이 있습니다.<br><br>DevOps 엔지니어는 애플리케이션 팀이 아직 GuardDuty를 활성화하지 않은 모든 AWS 계정에 대해 Amazon GuardDuty를 활성화해야 합니다. DevOps 엔지니어는 AWS Control Tower 관리 계정에서 AWS CloudFormation StackSets를 사용하고 있습니다.<br><br>StackSets 배포 중 실패를 방지하기 위해 CloudFormation 템플릿을 어떻게 구성해야 합니까?`,
  type: 'single',
  choices: [
    { k:'A', en:`Create a CloudFormation custom resource that invokes an AWS Lambda function. Configure the Lambda function to conditionally enable GuardDuty if GuardDuty is not already enabled in the accounts.`, ko:`AWS Lambda 함수를 호출하는 CloudFormation 사용자 지정 리소스를 생성합니다. GuardDuty가 계정에서 아직 활성화되지 않은 경우 조건부로 GuardDuty를 활성화하도록 Lambda 함수를 구성합니다.` },
    { k:'B', en:`Use the Conditions section of the CloudFormation template to enable GuardDuty in accounts where GuardDuty is not already enabled.`, ko:`CloudFormation 템플릿의 조건 섹션을 사용하여 GuardDuty가 아직 활성화되지 않은 계정에서 GuardDuty를 활성화합니다.` },
    { k:'C', en:`Use the CloudFormation Fn::GetAtt intrinsic function to check whether GuardDuty is already enabled. If GuardDuty is not already enabled, use the Resources section of the CloudFormation template to enable GuardDuty.`, ko:`CloudFormation Fn::GetAtt 내장 함수를 사용하여 GuardDuty가 이미 활성화되었는지 확인합니다. GuardDuty가 아직 활성화되지 않은 경우 CloudFormation 템플릿의 리소스 섹션을 사용하여 GuardDuty를 활성화합니다.` },
    { k:'D', en:`Manually discover the list of AWS account IDs where GuardDuty is not enabled. Use the CloudFormation Fn::ImportValue intrinsic function to import the list of account IDs into the CloudFormation template to skip deployment for the listed AWS accounts.`, ko:`GuardDuty가 활성화되지 않은 AWS 계정 ID 목록을 수동으로 검색합니다. CloudFormation Fn::ImportValue 내장 함수를 사용하여 계정 ID 목록을 CloudFormation 템플릿으로 가져와 나열된 AWS 계정에 대한 배포를 건너뜁니다.` },
  ],
  answer: ['A'],
  vote: '100% A',
  explain: `<p><span class="mark-ok">✅ A — 핵심 이유</span></p>
<p>CloudFormation은 기본적으로 GuardDuty 활성화 여부를 조건부로 처리하는 내장 기능이 없습니다. <strong>Lambda 함수를 사용하는 사용자 지정 리소스</strong>는 GuardDuty API를 호출하여 이미 활성화된 경우를 감지하고 조건부로 활성화할 수 있어 StackSets 배포 실패를 방지합니다. AWS 공식 처방 지침(Prescriptive Guidance)에서도 이 패턴을 권장합니다.</p>`,
  wrong: `<p><span class="mark-no">❌ B</span> — CloudFormation Conditions 섹션은 리소스를 생성할지 여부를 결정하지만, 런타임 상태(GuardDuty 활성화 여부)를 동적으로 조회하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — Fn::GetAtt는 동일 템플릿 내 리소스 속성 조회에만 사용됩니다. 기존 GuardDuty 상태를 조회할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 수동 검색은 자동화가 아니며, Fn::ImportValue는 이 목적에 적합하지 않습니다.</p>`,
  disc: [{ ans:'A (100%)', txt:'Lambda 기반 Custom Resource로 GuardDuty 상태를 조건부 확인 후 활성화하는 것이 StackSets 배포 실패 방지 표준 패턴.' }]
},
{
  n: 160,
  en: `A company has an AWS Control Tower landing zone. The company's DevOps team creates a workload OU. A development OU and a production OU are nested under the workload OU. The company grants users full access to the company's AWS accounts to deploy applications.<br><br>The DevOps team needs to allow only a specific management IAM role to manage the IAM roles and policies of any AWS accounts in only the production OU.<br><br>Which combination of steps will meet these requirements? (Choose two.)`,
  ko: `한 회사에 AWS Control Tower 랜딩 존이 있습니다. 회사의 DevOps 팀이 워크로드 OU를 생성합니다. 개발 OU와 프로덕션 OU는 워크로드 OU 아래에 중첩됩니다. 회사는 애플리케이션을 배포하기 위해 사용자에게 회사의 AWS 계정에 대한 전체 액세스 권한을 부여합니다.<br><br>DevOps 팀은 프로덕션 OU에서만 특정 관리 IAM 역할이 모든 AWS 계정의 IAM 역할과 정책을 관리하도록 허용해야 합니다.<br><br>이러한 요구 사항을 충족하는 단계의 조합은 무엇입니까? (두 가지를 선택하십시오.)`,
  type: 'multi',
  multiCount: 2,
  choices: [
    { k:'A', en:`Create an SCP that denies full access with a condition to exclude the management IAM role for the organization root.`, ko:`조직 루트에 대한 관리 IAM 역할을 제외하는 조건으로 전체 액세스를 거부하는 SCP를 생성합니다.` },
    { k:'B', en:`Ensure that the FullAWSAccess SCP is applied at the organization root.`, ko:`FullAWSAccess SCP가 조직 루트에 적용되어 있는지 확인합니다.` },
    { k:'C', en:`Create an SCP that allows IAM related actions. Attach the SCP to the development OU.`, ko:`IAM 관련 작업을 허용하는 SCP를 생성합니다. SCP를 개발 OU에 연결합니다.` },
    { k:'D', en:`Create an SCP that denies IAM related actions with a condition to exclude the management IAM role. Attach the SCP to the workload OU.`, ko:`관리 IAM 역할을 제외하는 조건으로 IAM 관련 작업을 거부하는 SCP를 생성합니다. SCP를 워크로드 OU에 연결합니다.` },
    { k:'E', en:`Create an SCP that denies IAM related actions with a condition to exclude the management IAM role. Attach the SCP to the production OU.`, ko:`관리 IAM 역할을 제외하는 조건으로 IAM 관련 작업을 거부하는 SCP를 생성합니다. SCP를 프로덕션 OU에 연결합니다.` },
  ],
  answer: ['B','E'],
  vote: '95% BE',
  explain: `<p><span class="mark-ok">✅ B — 핵심 이유</span></p>
<p>SCP는 허용(Allow) 정책이 없으면 기본적으로 모든 것이 거부됩니다. 조직 루트에 <strong>FullAWSAccess SCP</strong>가 적용되어 있어야 하위 OU에서 권한이 부여됩니다. SCP 상속 구조상 루트의 허용 정책이 없으면 전체 조직이 잠길 수 있습니다.</p>
<p><span class="mark-ok">✅ E — 핵심 이유</span></p>
<p>프로덕션 OU만을 대상으로 IAM 관련 작업을 거부하는 SCP를 생성하되, <strong>관리 IAM 역할을 예외 조건</strong>으로 설정합니다. 이렇게 하면 관리 역할만 프로덕션 OU의 IAM을 관리할 수 있습니다.</p>`,
  wrong: `<p><span class="mark-no">❌ A</span> — 조직 루트에 전체 액세스 거부 SCP를 적용하면 개발 OU를 포함한 전체 조직에 영향을 미칩니다.</p>
<p><span class="mark-no">❌ C</span> — 개발 OU에 IAM 허용 SCP를 추가하는 것은 요구사항(프로덕션만 제한)과 무관합니다.</p>
<p><span class="mark-no">❌ D</span> — 워크로드 OU에 SCP를 연결하면 개발 OU와 프로덕션 OU 모두에 영향을 미칩니다. 프로덕션만 제한해야 합니다.</p>`,
  disc: [{ ans:'BE (95%)', txt:'FullAWSAccess를 루트에 확보(B) + 프로덕션 OU에만 IAM 거부 SCP 연결(E). 개발 OU는 영향 없음.' }]
}
];
