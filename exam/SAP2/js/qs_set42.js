window.QS_SET42 = [
  {
    n: 411,

    en: `<p>A company is deploying a third-party web application on AWS. The application is packaged as a Docker image. The company has deployed the Docker image as an AWS Fargate service in Amazon Elastic Container Service (Amazon ECS). An Application Load Balancer (ALB) directs traffic to the application.</p><p>The company needs to give only a specific list of users the ability to access the application from the internet. The company cannot change the application and cannot integrate the application with an identity provider. All users must be authenticated through multi-factor authentication (MFA).</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 회사가 AWS에 타사 웹 애플리케이션을 배포하고 있습니다. 애플리케이션은 Docker 이미지로 패키지됩니다. 회사는 Docker 이미지를 Amazon ECS의 AWS Fargate 서비스로 배포했습니다. ALB(Application Load Balancer)는 트래픽을 애플리케이션으로 전달합니다.</p><p>회사는 특정 사용자 목록에만 인터넷에서 애플리케이션에 액세스할 수 있는 기능을 제공해야 합니다. 회사는 애플리케이션을 변경할 수 없으며 애플리케이션을 ID 공급자와 통합할 수도 없습니다. 모든 사용자는 다단계 인증(MFA)을 통해 인증되어야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Create a user pool in Amazon Cognito. Configure the pool for the application. Populate the pool with the required users. Configure the pool to require MFA. Configure a listener rule on the ALB to require authentication through the Amazon Cognito hosted UI.`, ko:`Amazon Cognito에서 사용자 풀을 생성합니다. 애플리케이션에 대한 풀을 구성합니다. 필요한 사용자로 풀을 채웁니다. MFA를 요구하도록 풀을 구성합니다. Amazon Cognito 호스팅 UI를 통해 인증을 요구하도록 ALB에서 리스너 규칙을 구성합니다.` },
      { k:'B', en:`Configure the users in AWS Identity and Access Management (IAM). Attach a resource policy to the Fargate service to require users to use MFA. Configure a listener rule on the ALB to require authentication through IAM.`, ko:`AWS Identity and Access Management(IAM)에서 사용자를 구성합니다. 사용자가 MFA를 사용하도록 요구하려면 Fargate 서비스에 리소스 정책을 연결합니다. IAM을 통한 인증을 요구하도록 ALB에서 리스너 규칙을 구성합니다.` },
      { k:'C', en:`Configure the users in AWS Identity and Access Management (IAM). Enable AWS IAM Identity Center (AWS Single Sign-On). Configure resource protection for the ALB. Create a resource protection rule to require users to use MFA.`, ko:`AWS Identity and Access Management(IAM)에서 사용자를 구성합니다. AWS IAM ID 센터(AWS Single Sign-On)를 활성화합니다. ALB에 대한 리소스 보호를 구성합니다. 사용자가 MFA를 사용하도록 요구하는 리소스 보호 규칙을 만듭니다.` },
      { k:'D', en:`Create a user pool in AWS Amplify. Configure the pool for the application. Populate the pool with the required users. Configure the pool to require MFA. Configure a listener rule on the ALB to require authentication through the Amplify hosted UI.`, ko:`AWS Amplify에서 사용자 풀을 생성합니다. 애플리케이션에 대한 풀을 구성합니다. 필요한 사용자로 풀을 채웁니다. MFA를 요구하도록 풀을 구성합니다. Amplify 호스팅 UI를 통해 인증을 요구하도록 ALB에서 리스너 규칙을 구성합니다.` }
    ],

    answer: ['A'],
    vote: '90% A',

    explain: `<p><span class="mark-ok">✅ A — Amazon Cognito 사용자 풀 + ALB 리스너 규칙</span></p>
<p><strong>Amazon Cognito</strong> 사용자 풀은 특정 사용자 목록 관리, MFA 요구, 호스팅 UI 제공을 모두 지원합니다. <strong>ALB 리스너 규칙</strong>에서 Cognito 또는 OIDC를 통한 인증을 강제할 수 있으며, 이를 통해 애플리케이션 코드를 수정하지 않고도 인증 계층을 추가합니다. 애플리케이션 통합 없이 ALB 레벨에서 인증을 적용하는 것이 요건을 정확히 충족합니다.</p>
<p><a href="https://repost.aws/knowledge-center/cognito-user-pool-alb-authentication" target="_blank">AWS 공식 문서 - Cognito 사용자 풀 ALB 인증</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — ALB는 IAM 인증을 직접 지원하지 않습니다. ALB의 인증 통합은 Cognito와 OIDC만 지원합니다.</p>
<p><span class="mark-no">❌ C</span> — IAM Identity Center는 AWS 리소스 접근을 위한 것으로 웹 애플리케이션의 사용자 인증에 직접 사용하기 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS Amplify는 사용자 풀을 제공하지 않으며 ALB에서 Amplify 인증을 직접 통합하는 기능은 존재하지 않습니다.</p>`,

    disc: [
      { ans:'A (90%)', txt:'ALB는 Cognito와 OIDC만 인증 통합을 지원합니다. Cognito 사용자 풀에 특정 사용자를 등록하고 MFA를 설정한 후 ALB 리스너 규칙으로 Cognito 호스팅 UI 인증을 강제하면 애플리케이션 수정 없이 요건을 충족합니다.' }
    ]
  },

  {
    n: 412,

    en: `<p>A solutions architect is preparing to deploy a new security tool into several previously unused AWS Regions. The solutions architect will deploy the tool by using an AWS CloudFormation stack set. The stack set's template contains an IAM role that has a custom name. Upon creation of the stack set, no stack instances are created successfully.</p><p>What should the solutions architect do to deploy the stacks successfully?</p>`,
    ko: `<p>솔루션 아키텍트는 이전에 사용되지 않은 여러 AWS 리전에 새로운 보안 도구를 배포할 준비를 하고 있습니다. 솔루션 아키텍트는 AWS CloudFormation 스택 세트를 사용하여 도구를 배포합니다. 스택 세트의 템플릿에는 사용자 지정 이름이 있는 IAM 역할이 포함되어 있습니다. 스택 세트를 생성하면 스택 인스턴스가 성공적으로 생성되지 않습니다.</p><p>스택을 성공적으로 배포하려면 솔루션 설계자가 무엇을 해야 합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Enable the new Regions in all relevant accounts. Specify the CAPABILITY_NAMED_IAM capability during the creation of the stack set.`, ko:`모든 관련 계정에서 새 지역을 활성화합니다. 스택 세트를 생성하는 동안 CAPABILITY_NAMED_IAM 기능을 지정합니다.` },
      { k:'B', en:`Use the Service Quotas console to request a quota increase for the number of CloudFormation stacks in each new Region in all relevant accounts. Specify the CAPABILITY_IAM capability during the creation of the stack set.`, ko:`Service Quotas 콘솔을 사용하여 모든 관련 계정의 각 새 지역에서 CloudFormation 스택 수에 대한 할당량 증가를 요청합니다. 스택 세트를 생성하는 동안 CAPABILITY_IAM 기능을 지정합니다.` },
      { k:'C', en:`Specify the CAPABILITY_NAMED_IAM capability and the SELF_MANAGED permissions model during the creation of the stack set.`, ko:`스택 세트를 생성하는 동안 CAPABILITY_NAMED_IAM 기능과 SELF_MANAGED 권한 모델을 지정합니다.` },
      { k:'D', en:`Specify an administration role ARN and the CAPABILITY_IAM capability during the creation of the stack set.`, ko:`스택 세트를 생성하는 동안 관리 역할 ARN 및 CAPABILITY_IAM 기능을 지정합니다.` }
    ],

    answer: ['A'],
    vote: '91% A',

    explain: `<p><span class="mark-ok">✅ A — 새 리전 활성화 + CAPABILITY_NAMED_IAM</span></p>
<p>두 가지 문제가 있습니다. 첫째, 이전에 사용되지 않은 리전은 계정에서 활성화해야 합니다. 둘째, CloudFormation 템플릿에 <strong>사용자 지정 이름</strong>이 있는 IAM 역할이 포함될 때는 반드시 <strong>CAPABILITY_NAMED_IAM</strong>을 명시해야 합니다. 일반 IAM 리소스는 CAPABILITY_IAM으로 충분하지만 커스텀 이름은 CAPABILITY_NAMED_IAM이 필요합니다.</p>
<p><a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html" target="_blank">AWS 공식 문서 - CloudFormation CreateStack Capabilities</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — CloudFormation 스택 수 할당량 증가는 새 리전 활성화 문제와 관련이 없으며, CAPABILITY_IAM은 커스텀 이름 IAM 리소스에 충분하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — SELF_MANAGED 권한 모델 지정만으로는 새 리전 활성화 문제가 해결되지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — CAPABILITY_IAM은 커스텀 이름 IAM 리소스에 불충분합니다.</p>`,

    disc: [
      { ans:'A (91%)', txt:'사용되지 않은 리전 활성화 + 커스텀 이름 IAM 역할에 대한 CAPABILITY_NAMED_IAM 지정이 두 가지 실패 원인을 모두 해결합니다.' }
    ]
  },

  {
    n: 413,

    en: `<p>A company has an application that uses an Amazon Aurora PostgreSQL DB cluster for the application's database. The DB cluster contains one small primary instance and three larger replica instances. The application runs on an AWS Lambda function. The application makes many short-lived connections to the database's replica instances to perform read-only operations.</p><p>During periods of high traffic, the application becomes unreliable and the database reports that too many connections are being established. The frequency of high-traffic periods is unpredictable.</p><p>Which solution will improve the reliability of the application?</p>`,
    ko: `<p>회사에는 애플리케이션 데이터베이스로 Amazon Aurora PostgreSQL DB 클러스터를 사용하는 애플리케이션이 있습니다. DB 클러스터에는 하나의 작은 기본 인스턴스와 세 개의 큰 복제본 인스턴스가 포함되어 있습니다. 애플리케이션은 AWS Lambda 함수에서 실행됩니다. 애플리케이션은 읽기 전용 작업을 수행하기 위해 데이터베이스의 복제본 인스턴스에 대한 단기 연결을 여러 개 만듭니다.</p><p>트래픽이 많은 기간에는 애플리케이션이 불안정해지고 데이터베이스에서 너무 많은 연결이 설정되고 있다고 보고합니다. 트래픽이 많은 기간의 빈도는 예측할 수 없습니다.</p><p>애플리케이션의 안정성을 향상시키는 솔루션은 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Use Amazon RDS Proxy to create a proxy for the DB cluster. Configure a read-only endpoint for the proxy. Update the Lambda function to connect to the proxy endpoint.`, ko:`Amazon RDS 프록시를 사용하여 DB 클러스터에 대한 프록시를 생성하십시오. 프록시에 대한 읽기 전용 끝점을 구성합니다. 프록시 엔드포인트에 연결하도록 Lambda 함수를 업데이트합니다.` },
      { k:'B', en:`Increase the max_connections setting on the DB cluster's parameter group. Reboot all the instances in the DB cluster. Update the Lambda function to connect to the DB cluster endpoint.`, ko:`DB 클러스터의 파라미터 그룹에서 max_connections 설정을 늘립니다. DB 클러스터의 모든 인스턴스를 재부팅합니다. DB 클러스터 엔드포인트에 연결하도록 Lambda 함수를 업데이트합니다.` },
      { k:'C', en:`Configure instance scaling for the DB cluster to occur when the DatabaseConnections metric is close to the max connections setting. Update the Lambda function to connect to the Aurora reader endpoint.`, ko:`DatabaseConnections 지표가 최대 연결 설정에 가까울 때 발생하도록 DB 클러스터에 대한 인스턴스 조정을 구성합니다. Aurora 리더 엔드포인트에 연결하도록 Lambda 함수를 업데이트합니다.` },
      { k:'D', en:`Use Amazon RDS Proxy to create a proxy for the DB cluster. Configure a read-only endpoint for the Aurora Data API on the proxy. Update the Lambda function to connect to the proxy endpoint.`, ko:`Amazon RDS 프록시를 사용하여 DB 클러스터용 프록시를 생성합니다. 프록시에서 Aurora 데이터 API에 대한 읽기 전용 엔드포인트를 구성합니다. 프록시 엔드포인트에 연결하도록 Lambda 함수를 업데이트합니다.` }
    ],

    answer: ['A'],
    vote: '100% A',

    explain: `<p><span class="mark-ok">✅ A — Amazon RDS Proxy + 읽기 전용 엔드포인트</span></p>
<p><strong>Amazon RDS Proxy</strong>는 Lambda 함수와 Aurora 복제본 사이에서 연결 풀링을 수행하여 단기 연결 급증 시 데이터베이스에 설정되는 연결 수를 획기적으로 줄입니다. RDS Proxy는 Aurora 복제본에 대한 <strong>읽기 전용 엔드포인트</strong>를 지원하며, 이를 통해 읽기 전용 트래픽을 복제본으로 올바르게 라우팅합니다.</p>
<p><a href="https://aws.amazon.com/about-aws/whats-new/2021/03/amazon-rds-proxy-adds-read-only-endpoints-for-amazon-aurora-replicas/" target="_blank">AWS 공식 문서 - RDS Proxy Aurora 복제본 읽기 전용 엔드포인트</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — max_connections를 늘리는 것은 근본적인 연결 급증 문제를 해결하지 못하며 재부팅으로 인한 다운타임이 발생합니다.</p>
<p><span class="mark-no">❌ C</span> — 인스턴스 스케일링은 트래픽 급증에 빠르게 대응하기 어렵고 연결 수 문제를 직접 해결하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — Aurora Data API는 Aurora Serverless용 기능으로 일반 Aurora PostgreSQL 클러스터에는 적용되지 않습니다.</p>`,

    disc: [
      { ans:'A (100%)', txt:'Lambda + RDS Proxy + Aurora 복제본 읽기 전용 엔드포인트가 Lambda 함수의 단기 연결 급증으로 인한 DB 연결 수 초과 문제를 해결하는 표준 패턴입니다.' }
    ]
  },

  {
    n: 414,

    en: `<p>A retail company is mounting IoT sensors in all of its stores worldwide. During the manufacturing of each sensor, the company's private certificate authority (CA) issues an X.509 certificate that contains a unique serial number. The company then deploys each certificate to its respective sensor.</p><p>A solutions architect needs to give the sensors the ability to send data to AWS after they are installed. Sensors must not be able to send data to AWS until they are installed.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 소매업체가 전 세계 모든 매장에 IoT 센서를 탑재하고 있습니다. 각 센서를 제조하는 동안 회사의 사설 인증 기관(CA)은 고유 일련 번호가 포함된 X.509 인증서를 발급합니다. 그런 다음 회사는 각 인증서를 해당 센서에 배포합니다.</p><p>솔루션 아키텍트는 센서가 설치된 후 AWS로 데이터를 전송할 수 있는 기능을 센서에 부여해야 합니다. 센서는 설치될 때까지 AWS로 데이터를 보낼 수 없어야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Create an AWS Lambda function that can validate the serial number. Create an AWS IoT Core provisioning template. Include the SerialNumber parameter in the Parameters section. Add the Lambda function as a pre-provisioning hook. During manufacturing, call the RegisterThing API operation and specify the template and parameters.`, ko:`일련번호를 검증할 수 있는 AWS Lambda 함수를 생성합니다. AWS IoT Core 프로비저닝 템플릿을 생성합니다. 매개변수 섹션에 SerialNumber 매개변수를 포함합니다. Lambda 함수를 사전 프로비저닝 후크로 추가합니다. 제조 중에 RegisterThing API 작업을 호출하고 템플릿과 매개변수를 지정합니다.` },
      { k:'B', en:`Create an AWS Step Functions state machine that can validate the serial number. Create an AWS IoT Core provisioning template. Include the SerialNumber parameter in the Parameters section. Specify the Step Functions state machine to validate parameters. Call the StartThingRegistrationTask API operation during installation.`, ko:`일련 번호를 확인할 수 있는 AWS Step Functions 상태 머신을 생성합니다. AWS IoT Core 프로비저닝 템플릿을 생성합니다. 매개변수 섹션에 SerialNumber 매개변수를 포함합니다. 매개변수를 검증하려면 Step Functions 상태 시스템을 지정하세요. 설치 중에 StartThingRegistrationTask API 작업을 호출합니다.` },
      { k:'C', en:`Create an AWS Lambda function that can validate the serial number. Create an AWS IoT Core provisioning template. Include the SerialNumber parameter in the Parameters section. Add the Lambda function as a pre-provisioning hook. Register the CA with AWS IoT Core, specify the provisioning template, and set the allow-auto-registration parameter.`, ko:`일련번호를 검증할 수 있는 AWS Lambda 함수를 생성합니다. AWS IoT Core 프로비저닝 템플릿을 생성합니다. 매개변수 섹션에 SerialNumber 매개변수를 포함합니다. Lambda 함수를 사전 프로비저닝 후크로 추가합니다. AWS IoT Core에 CA를 등록하고, 프로비저닝 템플릿을 지정하고, Allow-auto-registration 매개변수를 설정합니다.` },
      { k:'D', en:`Create an AWS IoT Core provisioning template. Include the SerialNumber parameter in the Parameters section. Include parameter validation in the template. Provision a claim certificate and a private key for each device that uses the CA. Grant AWS IoT Core service permissions to update AWS IoT things during provisioning.`, ko:`AWS IoT Core 프로비저닝 템플릿을 생성합니다. 매개변수 섹션에 SerialNumber 매개변수를 포함합니다. 템플릿에 매개변수 검증을 포함합니다. CA를 사용하는 각 장치에 대해 청구 인증서와 개인 키를 프로비저닝합니다. 프로비저닝 중에 AWS IoT 사물을 업데이트할 수 있는 AWS IoT Core 서비스 권한을 부여합니다.` }
    ],

    answer: ['C'],
    vote: '88% C',

    explain: `<p><span class="mark-ok">✅ C — CA 등록 + 사전 프로비저닝 후크 Lambda + allow-auto-registration</span></p>
<p>AWS IoT Core의 <strong>Fleet Provisioning</strong>을 활용합니다. 회사의 사설 CA를 IoT Core에 등록하고 <code>allow-auto-registration</code>을 설정하면, 센서가 처음 연결을 시도할 때(설치 후) 자동으로 등록이 시작됩니다. <strong>사전 프로비저닝 후크(Pre-provisioning Hook)</strong>의 Lambda 함수가 일련 번호를 검증하여 유효한 장치만 프로비저닝되도록 합니다. 이 방식은 설치 시 자동 등록을 트리거하므로 "설치 전에는 데이터 전송 불가" 요건을 충족합니다.</p>
<p><a href="https://aws.amazon.com/blogs/iot/how-to-automate-onboarding-of-iot-devices-to-aws-iot-core-at-scale-with-fleet-provisioning/" target="_blank">AWS 공식 문서 - IoT Fleet Provisioning</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — 제조 중에 RegisterThing을 호출하면 센서가 설치 전에도 프로비저닝되어 "설치 전 데이터 전송 불가" 요건을 위반합니다.</p>
<p><span class="mark-no">❌ B</span> — IoT Core 프로비저닝 후크는 Step Functions가 아닌 Lambda만 지원합니다.</p>
<p><span class="mark-no">❌ D</span> — 청구(Claim) 인증서 방식은 CA를 사용하는 기존 X.509 인증서 기반 방식과 다른 접근법입니다.</p>`,

    disc: [
      { ans:'C (88%)', txt:'CA를 IoT Core에 등록하고 allow-auto-registration을 설정하면 센서가 설치되어 처음 연결을 시도할 때 자동 등록이 트리거됩니다. 사전 프로비저닝 후크가 일련 번호를 검증하여 보안을 보장합니다.' }
    ]
  },

  {
    n: 415,

    en: `<p>A startup company recently migrated a large ecommerce website to AWS. The website has experienced a 70% increase in sales. Software engineers are using a private GitHub repository to manage code. The DevOps team is using Jenkins for builds and unit testing. The engineers need to receive notifications for bad builds and zero downtime during deployments. The engineers also need to ensure any changes to production are seamless for users and can be rolled back in the event of a major issue.</p><p>The software engineers have decided to use AWS CodePipeline to manage their build and deployment process.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>한 스타트업 회사는 최근 대규모 전자 상거래 웹사이트를 AWS로 마이그레이션했습니다. 웹사이트 매출이 70% 증가했습니다. 소프트웨어 엔지니어는 개인 GitHub 저장소를 사용하여 코드를 관리하고 있습니다. DevOps 팀은 빌드 및 단위 테스트에 Jenkins를 사용하고 있습니다. 엔지니어는 배포 중에 잘못된 빌드와 가동 중지 시간에 대한 알림을 받아야 합니다. 또한 엔지니어는 프로덕션 변경 사항이 사용자에게 원활하게 전달되고 중대한 문제가 발생할 경우 롤백될 수 있는지 확인해야 합니다.</p><p>소프트웨어 엔지니어는 AWS CodePipeline을 사용하여 빌드 및 배포 프로세스를 관리하기로 결정했습니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Use GitHub websockets to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.`, ko:`GitHub 웹소켓을 사용하여 CodePipeline 파이프라인을 트리거하십시오. AWS CodeBuild용 Jenkins 플러그인을 사용하여 단위 테스트를 수행합니다. 잘못된 빌드에 대해 Amazon SNS 주제에 알림을 보냅니다. AWS CodeDeploy를 사용하여 전체 동시 배포 구성으로 배포합니다.` },
      { k:'B', en:`Use GitHub webhooks to trigger the CodePipeline pipeline. Use the Jenkins plugin for AWS CodeBuild to conduct unit testing. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.`, ko:`GitHub 웹훅을 사용하여 CodePipeline 파이프라인을 트리거합니다. AWS CodeBuild용 Jenkins 플러그인을 사용하여 단위 테스트를 수행합니다. 잘못된 빌드에 대해 Amazon SNS 주제에 알림을 보냅니다. AWS CodeDeploy를 사용하여 블루/그린 배포로 배포합니다.` },
      { k:'C', en:`Use GitHub websockets to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in a blue/green deployment using AWS CodeDeploy.`, ko:`GitHub 웹소켓을 사용하여 CodePipeline 파이프라인을 트리거합니다. 단위 테스트 및 정적 코드 분석에 AWS X-Ray를 사용하십시오. 잘못된 빌드에 대해 Amazon SNS 주제에 알림을 보냅니다. AWS CodeDeploy를 사용하여 블루/그린 배포로 배포합니다.` },
      { k:'D', en:`Use GitHub webhooks to trigger the CodePipeline pipeline. Use AWS X-Ray for unit testing and static code analysis. Send alerts to an Amazon SNS topic for any bad builds. Deploy in an in-place, all-at-once deployment configuration using AWS CodeDeploy.`, ko:`GitHub 웹훅을 사용하여 CodePipeline 파이프라인을 트리거합니다. 단위 테스트 및 정적 코드 분석에 AWS X-Ray를 사용하십시오. 잘못된 빌드에 대해 Amazon SNS 주제에 알림을 보냅니다. AWS CodeDeploy를 사용하여 전체 동시 배포 구성으로 배포합니다.` }
    ],

    answer: ['B'],
    vote: '100% B',

    explain: `<p><span class="mark-ok">✅ B — GitHub 웹훅 + Jenkins 플러그인 + SNS 알림 + 블루/그린 배포</span></p>
<p><strong>GitHub 웹훅</strong>은 CodePipeline 트리거의 표준 방식입니다(웹소켓이 아님). 기존 Jenkins를 계속 활용하기 위해 <strong>CodeBuild용 Jenkins 플러그인</strong>을 사용하며, SNS로 빌드 실패 알림을 보냅니다. <strong>블루/그린 배포</strong>는 제로 다운타임과 즉각적인 롤백을 제공하여 "원활한 배포 + 롤백 가능" 요건을 충족합니다.</p>
<p><a href="https://aws.amazon.com/blogs/devops/setting-up-a-ci-cd-pipeline-by-integrating-jenkins-with-aws-codebuild-and-aws-codedeploy/" target="_blank">AWS 공식 문서 - Jenkins + CodeBuild + CodeDeploy CI/CD</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — 웹소켓은 파이프라인 트리거 방식이 아닙니다(웹훅이 맞음). 또한 전체 동시 배포(All-at-once)는 다운타임이 발생합니다.</p>
<p><span class="mark-no">❌ C</span> — AWS X-Ray는 분산 추적 서비스로 단위 테스트에 사용되지 않습니다. 웹소켓도 부적절합니다.</p>
<p><span class="mark-no">❌ D</span> — X-Ray는 단위 테스트에 적합하지 않으며 전체 동시 배포는 다운타임이 발생합니다.</p>`,

    disc: [
      { ans:'B (100%)', txt:'GitHub 웹훅으로 트리거, Jenkins 플러그인으로 기존 빌드 도구 활용, SNS 알림, 블루/그린으로 무중단 배포 및 롤백이 모든 요건을 충족합니다.' }
    ]
  },

  {
    n: 416,

    en: `<p>A software as a service (SaaS) company has developed a multi-tenant environment. The company uses Amazon DynamoDB tables that the tenants share for the storage layer. The company uses AWS Lambda functions for the application services.</p><p>The company wants to offer a tiered subscription model that is based on resource consumption by each tenant. Each tenant is identified by a unique tenant ID that is sent as part of each request to the Lambda functions. The company has created an AWS Cost and Usage Report (AWS CUR) in an AWS account. The company wants to allocate the DynamoDB costs to each tenant to match that tenant's resource consumption.</p><p>Which solution will provide a granular view of the DynamoDB cost for each tenant with the LEAST operational effort?</p>`,
    ko: `<p>SaaS(Software as a Service) 회사는 다중 테넌트 환경을 개발했습니다. 회사는 테넌트가 스토리지 계층을 위해 공유하는 Amazon DynamoDB 테이블을 사용합니다. 회사는 애플리케이션 서비스를 위해 AWS Lambda 기능을 사용합니다.</p><p>회사는 각 테넌트의 리소스 소비를 기반으로 하는 계층형 구독 모델을 제공하려고 합니다. 각 테넌트는 Lambda 함수에 대한 각 요청의 일부로 전송되는 고유한 테넌트 ID로 식별됩니다. 회사는 AWS 계정에 AWS 비용 및 사용 보고서(AWS CUR)를 생성했습니다. 회사는 각 테넌트의 리소스 소비에 맞춰 DynamoDB 비용을 각 테넌트에 할당하려고 합니다.</p><p>최소한의 운영 노력으로 각 테넌트의 DynamoDB 비용에 대한 세부적인 보기를 제공하는 솔루션은 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Associate a new tag that is named tenant ID with each table in DynamoDB. Activate the tag as a cost allocation tag in the AWS Billing and Cost Management console. Deploy new Lambda function code to log the tenant ID in Amazon CloudWatch Logs. Use the AWS CUR to separate DynamoDB consumption cost for each tenant ID.`, ko:`테넌트 ID라는 새 태그를 DynamoDB의 각 테이블과 연결합니다. AWS Billing and Cost Management 콘솔에서 태그를 비용 할당 태그로 활성화합니다. Amazon CloudWatch Logs에 테넌트 ID를 기록하는 새로운 Lambda 함수 코드를 배포합니다. AWS CUR을 사용하여 각 테넌트 ID에 대한 DynamoDB 소비 비용을 구분합니다.` },
      { k:'B', en:`Configure the Lambda functions to log the tenant ID and the number of RCUs and WCUs consumed from DynamoDB for each transaction to Amazon CloudWatch Logs. Deploy another Lambda function to calculate the tenant costs by using the logged capacity units and the overall DynamoDB cost from the AWS Cost Explorer API. Create an Amazon EventBridge rule to invoke the calculation Lambda function on a schedule.`, ko:`각 트랜잭션에 대해 DynamoDB에서 소비된 테넌트 ID와 RCU 및 WCU 수를 Amazon CloudWatch Logs에 기록하도록 Lambda 함수를 구성합니다. 기록된 용량 단위와 AWS Cost Explorer API의 전체 DynamoDB 비용을 사용하여 테넌트 비용을 계산하는 또 다른 Lambda 함수를 배포합니다. 일정에 따라 계산 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 생성합니다.` },
      { k:'C', en:`Create a new partition key that associates DynamoDB items with individual tenants. Deploy a Lambda function to populate the new column as part of each transaction. Deploy another Lambda function to calculate the tenant costs by using Amazon Athena to calculate the number of tenant items from DynamoDB and the overall DynamoDB cost from the AWS CUR. Create an Amazon EventBridge rule to invoke the calculation Lambda function on a schedule.`, ko:`DynamoDB 항목을 개별 테넌트와 연결하는 새 파티션 키를 생성합니다. 각 트랜잭션의 일부로 새 열을 채우는 Lambda 함수를 배포합니다. Amazon Athena를 사용하여 DynamoDB의 테넌트 항목 수와 AWS CUR의 전체 DynamoDB 비용을 계산함으로써 테넌트 비용을 계산하는 또 다른 Lambda 함수를 배포합니다. 일정에 따라 계산 Lambda 함수를 호출하는 Amazon EventBridge 규칙을 생성합니다.` },
      { k:'D', en:`Deploy a Lambda function to log the tenant ID, the size of each response, and the duration of the transaction call as custom metrics to Amazon CloudWatch Logs. Use CloudWatch Logs Insights to query the custom metrics for each tenant. Use AWS Pricing Calculator to obtain the overall DynamoDB costs and to calculate the tenant costs.`, ko:`테넌트 ID, 각 응답의 크기 및 트랜잭션 호출 기간을 Amazon CloudWatch Logs에 사용자 지정 지표로 기록하는 Lambda 함수를 배포합니다. CloudWatch Logs Insights를 사용하여 각 테넌트에 대한 사용자 지정 지표를 쿼리합니다. AWS 가격 계산기를 사용하여 전체 DynamoDB 비용을 확인하고 테넌트 비용을 계산하세요.` }
    ],

    answer: ['B'],
    vote: '100% B',

    explain: `<p><span class="mark-ok">✅ B — RCU/WCU 로깅 + Cost Explorer API + EventBridge 스케줄</span></p>
<p>각 트랜잭션에서 <strong>RCU/WCU 소비량</strong>을 테넌트 ID와 함께 CloudWatch Logs에 기록하면 세밀한 비용 추적이 가능합니다. DynamoDB의 RCU/WCU 지표는 이미 CloudWatch에 기록됩니다. <strong>AWS Cost Explorer API</strong>로 전체 DynamoDB 비용을 가져와 비율로 배분하면 각 테넌트의 비용을 계산할 수 있으며, EventBridge로 정기 실행을 자동화합니다.</p>
<p><a href="https://aws.amazon.com/blogs/apn/optimizing-cost-per-tenant-visibility-in-saas-solutions/" target="_blank">AWS 공식 문서 - SaaS 테넌트별 비용 최적화</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — 테넌트가 DynamoDB 테이블을 공유하므로 테이블 단위 태그로는 테넌트별 비용을 구분할 수 없습니다.</p>
<p><span class="mark-no">❌ C</span> — 파티션 키 변경은 스키마 수정이 필요하며 Athena로 DynamoDB 항목 수를 세는 것은 비용 산출의 정확도가 낮습니다.</p>
<p><span class="mark-no">❌ D</span> — AWS 가격 계산기는 수동 프로세스로 자동화된 테넌트별 비용 할당에 적합하지 않습니다.</p>`,

    disc: [
      { ans:'B (100%)', txt:'RCU/WCU 로깅으로 테넌트별 실제 DynamoDB 소비량을 추적하고 Cost Explorer API로 전체 비용을 비율 배분하여 정확한 테넌트별 비용을 자동으로 계산합니다.' }
    ]
  },

  {
    n: 417,

    en: `<p>A company has an application that stores data in a single Amazon S3 bucket. The company must keep all data for 1 year. The company's security team is concerned that an attacker could gain access to the AWS account through leaked long-term credentials.</p><p>Which solution will ensure that existing and future objects in the S3 bucket are protected?</p>`,
    ko: `<p>회사에는 단일 Amazon S3 버킷에 데이터를 저장하는 애플리케이션이 있습니다. 회사는 모든 데이터를 1년간 보관해야 합니다. 회사의 보안 팀은 공격자가 유출된 장기 자격 증명을 통해 AWS 계정에 액세스할 수 있다는 점을 우려하고 있습니다.</p><p>S3 버킷의 기존 객체와 향후 객체를 보호하는 솔루션은 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Create a new AWS account that is accessible only to the security team through an assumed role. Create an S3 bucket in the new account. Enable S3 Versioning and S3 Object Lock. Configure a default retention period of 1 year. Set up replication from the existing S3 bucket to the new S3 bucket. Create an S3 Batch Replication job to copy all existing data.`, ko:`위임된 역할을 통해 보안 팀만 액세스할 수 있는 새 AWS 계정을 생성합니다. 새 계정에 S3 버킷을 생성합니다. S3 버전 관리 및 S3 객체 잠금을 활성화합니다. 기본 보존 기간을 1년으로 구성합니다. 기존 S3 버킷에서 새 S3 버킷으로의 복제를 설정합니다. 기존 데이터를 모두 복사하려면 S3 배치 복제 작업을 생성하세요.` },
      { k:'B', en:`Use the s3-bucket-versioning-enabled AWS Config managed rule. Configure an automatic remediation action that uses an AWS Lambda function to enable S3 Versioning and MFA Delete on noncompliant resources. Add an S3 Lifecycle rule to delete objects after 1 year.`, ko:`s3-bucket-versioning 지원 AWS Config 관리형 규칙을 사용합니다. 비준수 리소스에 대해 S3 버전 관리 및 MFA 삭제를 활성화하기 위해 AWS Lambda 함수를 사용하는 자동 수정 작업을 구성합니다. 1년 후에 객체를 삭제하는 S3 수명 주기 규칙을 추가합니다.` },
      { k:'C', en:`Explicitly deny bucket creation from all users and roles except for an AWS Service Catalog launch constraint role. Define a Service Catalog product for the creation of the S3 bucket to force S3 Versioning and MFA Delete to be enabled. Authorize users to launch the product when they need to create an S3 bucket.`, ko:`AWS Service Catalog 시작 제약 역할을 제외한 모든 사용자 및 역할의 버킷 생성을 명시적으로 거부합니다. S3 버전 관리 및 MFA 삭제가 활성화되도록 S3 버킷 생성을 위한 서비스 카탈로그 제품을 정의합니다. S3 버킷을 생성해야 할 때 사용자에게 제품을 시작할 수 있는 권한을 부여합니다.` },
      { k:'D', en:`Enable Amazon GuardDuty with the S3 protection feature for the account and the AWS Region. Add an S3 Lifecycle rule to delete objects after 1 year.`, ko:`계정 및 AWS 지역에 대한 S3 보호 기능으로 Amazon GuardDuty를 활성화합니다. 1년 후에 객체를 삭제하는 S3 수명 주기 규칙을 추가합니다.` }
    ],

    answer: ['A'],
    vote: '75% A',

    explain: `<p><span class="mark-ok">✅ A — 별도 계정 + S3 Object Lock + 교차 계정 복제</span></p>
<p>유출된 자격 증명으로 원본 계정이 침해되더라도, 보안 팀만 접근 가능한 <strong>별도 AWS 계정</strong>의 S3 버킷에 복제된 데이터는 보호됩니다. <strong>S3 Object Lock</strong>으로 1년 보존을 강제하여 침해된 계정에서도 삭제나 수정이 불가능합니다. S3 배치 복제로 기존 데이터도 마이그레이션합니다.</p>
<p><a href="https://repost.aws/knowledge-center/s3-cross-account-replication-object-lock" target="_blank">AWS 공식 문서 - S3 교차 계정 복제 + Object Lock</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — MFA Delete는 보안을 강화하지만 단기 자격 증명(STS 토큰)은 MFA 요건 없이 삭제 가능할 수 있습니다.</p>
<p><span class="mark-no">❌ C</span> — Service Catalog는 새 버킷 생성 제어에만 도움이 되며 기존 버킷의 데이터 보호에는 효과가 없습니다.</p>
<p><span class="mark-no">❌ D</span> — GuardDuty는 탐지 서비스로 공격자가 이미 삭제한 후에 알려줄 뿐 데이터를 보호하지는 않습니다.</p>`,

    disc: [
      { ans:'A (75%)', txt:'원본 계정 자격 증명이 유출되더라도 별도 계정의 Object Lock 보호된 복제본은 삭제/수정이 불가능합니다. 진정한 데이터 보호 솔루션입니다.' },
      { ans:'D (25%)', txt:'GuardDuty가 위협을 탐지하지만 이미 발생한 삭제는 되돌릴 수 없습니다. 예방적 보호가 아닙니다.' }
    ]
  },

  {
    n: 418,

    en: `<p>A company needs to improve the security of its web-based application on AWS. The application uses Amazon CloudFront with two custom origins. The first custom origin routes requests to an Amazon API Gateway HTTP API. The second custom origin routes traffic to an Application Load Balancer (ALB). The application integrates with an OpenID Connect (OIDC) identity provider (IdP) for user management.</p><p>A security audit shows that a JSON Web Token (JWT) authorizer provides access to the API. The security audit also shows that the ALB accepts requests from unauthenticated users.</p><p>A solutions architect must design a solution to ensure that all backend services respond to only authenticated users.</p><p>Which solution will meet this requirement?</p>`,
    ko: `<p>회사는 AWS에서 웹 기반 애플리케이션의 보안을 개선해야 합니다. 애플리케이션은 두 개의 사용자 지정 오리진과 함께 Amazon CloudFront를 사용합니다. 첫 번째 사용자 지정 오리진은 요청을 Amazon API Gateway HTTP API로 라우팅합니다. 두 번째 사용자 지정 원본은 트래픽을 ALB(Application Load Balancer)로 라우팅합니다. 이 애플리케이션은 사용자 관리를 위해 OIDC(OpenID Connect) ID 공급자(IdP)와 통합됩니다.</p><p>보안 감사에 따르면 JWT(JSON Web Token) 권한 부여자가 API에 대한 액세스를 제공하는 것으로 나타났습니다. 또한 보안 감사는 ALB가 인증되지 않은 사용자의 요청을 수락한다는 것을 보여줍니다.</p><p>솔루션 설계자는 모든 백엔드 서비스가 인증된 사용자에게만 응답하도록 솔루션을 설계해야 합니다.</p><p>이 요구 사항을 충족하는 솔루션은 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Configure the ALB to enforce authentication and authorization by integrating the ALB with the IdP. Allow only authenticated users to access the backend services.`, ko:`ALB를 IdP와 통합하여 인증 및 권한 부여를 시행하도록 ALB를 구성합니다. 인증된 사용자만 백엔드 서비스에 액세스하도록 허용합니다.` },
      { k:'B', en:`Modify the CloudFront configuration to use signed URLs. Implement a permissive signing policy that allows any request to access the backend services.`, ko:`서명된 URL을 사용하도록 CloudFront 구성을 수정합니다. 모든 요청이 백엔드 서비스에 액세스하도록 허용하는 허용적 서명 정책을 구현합니다.` },
      { k:'C', en:`Create an AWS WAF web ACL that filters out unauthenticated requests at the ALB level. Allow only authenticated traffic to reach the backend services.`, ko:`ALB 수준에서 인증되지 않은 요청을 필터링하는 AWS WAF 웹 ACL을 생성합니다. 인증된 트래픽만 백엔드 서비스에 도달하도록 허용합니다.` },
      { k:'D', en:`Enable AWS CloudTrail to log all requests that come to the ALB. Create an AWS Lambda function to analyze the logs and block any requests that come from unauthenticated users.`, ko:`AWS CloudTrail을 활성화하여 ALB에 들어오는 모든 요청을 기록합니다. 로그를 분석하고 인증되지 않은 사용자로부터 오는 모든 요청을 차단하는 AWS Lambda 함수를 생성합니다.` }
    ],

    answer: ['A'],
    vote: '100% A',

    explain: `<p><span class="mark-ok">✅ A — ALB와 OIDC IdP 통합으로 인증 강제</span></p>
<p>ALB는 <strong>OIDC IdP와 직접 통합</strong>하여 리스너 규칙 수준에서 인증을 강제할 수 있습니다. 미인증 사용자는 IdP 로그인 페이지로 리디렉션되고, 인증된 사용자의 요청만 백엔드로 전달됩니다. 이미 OIDC IdP가 있으므로 추가 인프라 없이 ALB 설정 변경만으로 요건을 충족할 수 있습니다.</p>
<p><a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/listener-authenticate-users.html" target="_blank">AWS 공식 문서 - ALB 사용자 인증</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — 허용적(permissive) 서명 정책은 모든 요청을 허용하므로 인증 요건을 충족하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — WAF는 IP, 헤더, 패턴 기반 필터링을 제공하지만 OIDC/JWT 기반의 사용자 인증은 지원하지 않습니다.</p>
<p><span class="mark-no">❌ D</span> — CloudTrail 로그 분석 후 Lambda 차단은 사후 조치로 실시간 인증 강제에 적합하지 않습니다.</p>`,

    disc: [
      { ans:'A (100%)', txt:'ALB에서 OIDC IdP를 직접 통합하여 미인증 요청을 리디렉션하는 것이 가장 단순하고 효과적인 해결책입니다.' }
    ]
  },

  {
    n: 419,

    en: `<p>A company creates an AWS Control Tower landing zone to manage and govern a multi-account AWS environment. The company's security team will deploy preventive controls and detective controls to monitor AWS services across all the accounts. The security team needs a centralized view of the security state of all the accounts.</p><p>Which solution will meet these requirements?</p>`,
    ko: `<p>회사는 다중 계정 AWS 환경을 관리하고 통제하기 위해 AWS Control Tower 랜딩 존을 생성합니다. 회사의 보안 팀은 예방 제어 및 탐지 제어를 배포하여 모든 계정에서 AWS 서비스를 모니터링합니다. 보안 팀은 모든 계정의 보안 상태를 중앙 집중식으로 볼 수 있어야 합니다.</p><p>어떤 솔루션이 이러한 요구 사항을 충족합니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`From the AWS Control Tower management account, use AWS CloudFormation StackSets to deploy an AWS Config conformance pack to all accounts in the organization.`, ko:`AWS Control Tower 관리 계정에서 AWS CloudFormation StackSets를 사용하여 조직의 모든 계정에 AWS Config 적합성 팩을 배포합니다.` },
      { k:'B', en:`Enable Amazon Detective for the organization in AWS Organizations. Designate one AWS account as the delegated administrator for Detective.`, ko:`AWS Organizations의 조직에 대해 Amazon Detective를 활성화합니다. 하나의 AWS 계정을 Detective의 위임된 관리자로 지정합니다.` },
      { k:'C', en:`From the AWS Control Tower management account, deploy an AWS CloudFormation stack set that uses the automatic deployment option to enable Amazon Detective for the organization.`, ko:`AWS Control Tower 관리 계정에서 자동 배포 옵션을 사용하여 조직에 대해 Amazon Detective를 활성화하는 AWS CloudFormation 스택 세트를 배포합니다.` },
      { k:'D', en:`Enable AWS Security Hub for the organization in AWS Organizations. Designate one AWS account as the delegated administrator for Security Hub.`, ko:`AWS Organizations의 조직에 대해 AWS Security Hub를 활성화합니다. 하나의 AWS 계정을 Security Hub의 위임된 관리자로 지정합니다.` }
    ],

    answer: ['D'],
    vote: '100% D',

    explain: `<p><span class="mark-ok">✅ D — AWS Security Hub + 위임된 관리자</span></p>
<p><strong>AWS Security Hub</strong>는 여러 계정의 보안 상태에 대한 중앙 집중식 뷰를 제공하는 AWS 서비스입니다. Organizations와 통합하여 조직 전체에 활성화하고, <strong>위임된 관리자 계정</strong>에서 모든 계정의 보안 결과를 집계하여 볼 수 있습니다. 예방 제어(Control Tower 가드레일)와 탐지 제어(Config 규칙, Security Hub 표준)의 결과를 통합 대시보드에서 확인합니다.</p>
<p><a href="https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html" target="_blank">AWS 공식 문서 - Security Hub 중앙 구성</a></p>`,

    wrong: `<p><span class="mark-no">❌ A</span> — Config 적합성 팩은 규정 준수 검사를 제공하지만 보안 상태의 중앙 집중식 대시보드 뷰는 Security Hub가 더 포괄적입니다.</p>
<p><span class="mark-no">❌ B, C</span> — Amazon Detective는 보안 조사 및 근본 원인 분석 도구로 보안 상태의 중앙 집중식 모니터링 대시보드가 아닙니다.</p>`,

    disc: [
      { ans:'D (100%)', txt:'"중앙 집중식 보안 상태 뷰" 요건은 항상 AWS Security Hub를 의미합니다. 위임된 관리자 계정에서 조직 전체의 보안 결과를 통합 조회할 수 있습니다.' }
    ]
  },

  {
    n: 420,

    en: `<p>A company that develops consumer electronics with offices in Europe and Asia has 60 TB of software images stored on premises in Europe. The company wants to transfer the images to an Amazon S3 bucket in the ap-northeast-1 Region. New software images are created daily and must be encrypted in transit. The company needs a solution that does not require custom development to automatically transfer all existing and new software images to Amazon S3.</p><p>What is the next step in the transfer process?</p>`,
    ko: `<p>유럽과 아시아에 사무실을 두고 가전 제품을 개발하는 회사는 유럽의 온프레미스에 60TB의 소프트웨어 이미지를 저장했습니다. 회사는 ap-northeast-1 리전의 Amazon S3 버킷으로 이미지를 전송하려고 합니다. 새로운 소프트웨어 이미지는 매일 생성되며 전송 중에 암호화되어야 합니다. 이 회사에는 모든 기존 소프트웨어 이미지와 새 소프트웨어 이미지를 Amazon S3로 자동 전송하기 위해 사용자 지정 개발이 ​​필요하지 않은 솔루션이 필요합니다.</p><p>이전 프로세스의 다음 단계는 무엇입니까?</p>`,

    type: 'single',

    choices: [
      { k:'A', en:`Deploy an AWS DataSync agent and configure a task to transfer the images to the S3 bucket.`, ko:`AWS DataSync 에이전트를 배포하고 이미지를 S3 버킷으로 전송하는 작업을 구성합니다.` },
      { k:'B', en:`Configure Amazon Kinesis Data Firehose to transfer the images using S3 Transfer Acceleration.`, ko:`S3 Transfer Acceleration을 사용하여 이미지를 전송하도록 Amazon Kinesis Data Firehose를 구성합니다.` },
      { k:'C', en:`Use an AWS Snowball device to transfer the images with the S3 bucket as the target.`, ko:`AWS Snowball 디바이스를 사용하여 S3 버킷을 대상으로 하는 이미지를 전송합니다.` },
      { k:'D', en:`Transfer the images over a Site-to-Site VPN connection using the S3 API with multipart upload.`, ko:`멀티파트 업로드가 포함된 S3 API를 사용하여 Site-to-Site VPN 연결을 통해 이미지를 전송합니다.` }
    ],

    answer: ['A'],
    vote: '100% A',

    explain: `<p><span class="mark-ok">✅ A — AWS DataSync 에이전트 배포 + 전송 작업 구성</span></p>
<p><strong>AWS DataSync</strong>는 온프레미스 스토리지에서 Amazon S3로 데이터를 자동으로 전송하는 관리형 서비스입니다. 커스텀 개발 없이 설정 가능하고, 전송 중 암호화(TLS)를 기본 지원합니다. 기존 60TB 데이터와 매일 생성되는 새 이미지 모두를 자동으로 동기화할 수 있는 작업(Task)을 구성하면 됩니다.</p>
<p><a href="https://aws.amazon.com/blogs/storage/synchronizing-your-data-to-amazon-s3-using-aws-datasync/" target="_blank">AWS 공식 문서 - DataSync를 사용한 S3 동기화</a></p>`,

    wrong: `<p><span class="mark-no">❌ B</span> — Kinesis Data Firehose는 스트리밍 데이터 전달 서비스로 파일/이미지 전송에 적합하지 않습니다.</p>
<p><span class="mark-no">❌ C</span> — Snowball은 대규모 일회성 마이그레이션에 적합하지만 매일 새 이미지가 생성되는 지속적인 전송에는 물리적 장치 배송 때문에 부적합합니다.</p>
<p><span class="mark-no">❌ D</span> — S3 API + 멀티파트 업로드는 커스텀 개발이 필요하므로 요건("사용자 지정 개발 불필요")을 위반합니다.</p>`,

    disc: [
      { ans:'A (100%)', txt:'DataSync는 커스텀 개발 없이 온프레미스에서 S3로 기존 및 신규 파일을 자동 동기화하며 전송 중 암호화를 기본 지원합니다.' }
    ]
  }
];