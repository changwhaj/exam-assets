window.QS_SET03 = [
{
  n:21,
  ko:`한 회사가 사내 품질 관리 애플리케이션을 모두 컨테이너화했습니다. 이 회사는 Amazon EC2 인스턴스에서 Jenkins를 실행하고 있으며, 패치 및 업그레이드가 필요합니다. 규정 준수 책임자는 빌드 아티팩트에 회사 지적 재산이 포함되어 있으므로 암호화를 시작하도록 요청했습니다.<br><br><strong>가장 유지 관리하기 쉬운 방식으로 이를 달성하기 위해 DevOps 엔지니어는 무엇을 해야 합니까?</strong>`,
  en:`A company has containerized all of its in-house quality control applications. The company is running Jenkins on Amazon EC2 instances, which require patching and upgrading. The compliance officer has requested a DevOps engineer begin encrypting build artifacts since they contain company intellectual property.<br><br><strong>What should the DevOps engineer do to accomplish this in the MOST maintainable manner?</strong>`,
  type:'single',
  choices:[
    {k:'A', ko:`AWS Systems Manager를 사용하여 EC2 인스턴스에서 패치 및 업그레이드를 자동화하고 기본적으로 Amazon EBS 볼륨을 암호화합니다.`, en:`Automate patching and upgrading using AWS Systems Manager on EC2 instances and encrypt Amazon EBS volumes by default.`},
    {k:'B', ko:`Amazon ECS 클러스터에 Jenkins를 배포하고 기본 암호화가 활성화된 Amazon S3 버킷에 빌드 아티팩트를 복사합니다.`, en:`Deploy Jenkins to an Amazon ECS cluster and copy build artifacts to an Amazon S3 bucket with default encryption enabled.`},
    {k:'C', ko:`AWS CodePipeline을 빌드 작업과 함께 활용하고 AWS Secrets Manager를 사용하여 아티팩트를 암호화합니다.`, en:`Leverage AWS CodePipeline with a build action and encrypt the artifacts using AWS Secrets Manager.`},
    {k:'D', ko:`EC2 인스턴스에서 실행되는 Jenkins 인스턴스를 아티팩트 암호화가 포함된 AWS CodeBuild로 대체합니다.`, en:`Use AWS CodeBuild with artifact encryption to replace the Jenkins instance running on EC2 instances.`},
  ],
  answer:['D'],
  vote:'82% D',
  explain:`<p><span class="mark-ok">✅ D — AWS CodeBuild (완전 관리형 서비스)</span></p><p>AWS CodeBuild는 완전 관리형 CI 서비스로 패치·업그레이드가 불필요합니다. CodeBuild는 S3에 아티팩트를 저장할 때 KMS를 사용한 자동 암호화를 기본 제공합니다. "가장 유지 관리하기 쉬운" 방식이므로 서버를 직접 관리할 필요 없는 완전 관리형 서비스가 정답입니다.</p><p><a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ B (18% 지지)</span> — ECS에서 Jenkins를 운영해도 Jenkins 자체의 유지 관리(플러그인 업데이트, OS 관리)는 여전히 필요합니다. 가장 유지 관리하기 쉬운 솔루션은 Jenkins를 아예 대체하는 D입니다.</p>`,
  disc:[{ans:'D (82%)',txt:'"가장 유지 관리하기 쉬운"이라는 키워드가 보이면 CodeBuild 같은 완전 관리형 서비스를 선택하세요. Jenkins는 아무리 컨테이너화해도 자체 유지 관리 부담이 있습니다.'}]
},
{
  n:22,
  ko:`IT 팀이 AWS CloudFormation 템플릿을 구축했습니다. 이 템플릿은 사용자 데이터 스크립트가 있는 Amazon EC2 인스턴스와 애플리케이션이 실행되는 동안 사용하는 Amazon S3 버킷을 만듭니다. CloudFormation 스택을 삭제하면 모든 리소스가 제거되어야 합니다. 그러나 팀은 스택 삭제 중에 오류가 발생하고 S3 버킷이 삭제되지 않는다는 것을 확인합니다.<br><br><strong>가장 효율적인 방식으로 오류를 해결하는 방법은 무엇입니까?</strong>`,
  en:`An IT team has built an AWS CloudFormation template so others in the company can quickly and reliably deploy and terminate an application. The template creates an Amazon EC2 instance with a user data script to install the application and an Amazon S3 bucket that the application uses to serve static webpages while it is running. All resources should be removed when the CloudFormation stack is deleted. However, the team observes that CloudFormation reports an error during stack deletion, and the S3 bucket created by the stack is not deleted. How can the team resolve the error in the MOST efficient manner to ensure that all resources are deleted without errors?`,
  type:'single',
  choices:[
    {k:'A', ko:`S3 버킷 리소스에 DeletionPolicy 속성을 추가하고 값에 Delete를 지정하면 스택이 삭제될 때 버킷도 제거됩니다.`, en:`Add a DeletionPolicy attribute to the S3 bucket resource, with the value Delete forcing the bucket to be removed when the stack is deleted.`},
    {k:'B', ko:`S3 버킷과 IAM 역할을 지정하는 DependsOn 속성이 있는 AWS Lambda 함수로 사용자 지정 리소스를 추가합니다. RequestType이 Delete일 때 버킷에서 모든 객체를 삭제하는 Lambda 함수를 작성합니다.`, en:`Add a custom resource with an AWS Lambda function with the DependsOn attribute specifying the S3 bucket, and an IAM role. Write the Lambda function to delete all objects from the bucket when RequestType is Delete.`},
    {k:'C', ko:`삭제되지 않은 리소스를 식별합니다. S3 버킷을 수동으로 비운 다음 삭제합니다.`, en:`Identify the resource that was not deleted. Manually empty the S3 bucket and then delete it.`},
    {k:'D', ko:`EC2 및 S3 버킷 리소스를 단일 AWS OpsWorks Stacks 리소스로 교체합니다. 스택에 대한 사용자 지정 레시피를 정의하여 EC2 인스턴스와 S3 버킷을 만들고 삭제합니다.`, en:`Replace the EC2 and S3 bucket resources with a single AWS OpsWorks Stacks resource. Define a custom recipe for the stack to create and delete the EC2 instance and the S3 bucket.`},
  ],
  answer:['B'],
  vote:'100% B',
  explain:`<p><span class="mark-ok">✅ B — CloudFormation 사용자 지정 리소스 + Lambda</span></p><p>CloudFormation이 S3 버킷을 삭제하지 못하는 이유는 버킷이 비어있지 않기 때문입니다(AWS 공식 문서: "For Amazon S3 buckets, you must delete all objects for deletion to succeed"). DeletionPolicy: Delete를 추가해도 버킷 안의 객체가 있으면 여전히 실패합니다. Lambda 사용자 지정 리소스를 이용해 스택 삭제 시 먼저 버킷을 비우고 제거하는 것이 올바른 자동화 방식입니다.</p><p><a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-init.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ A</span> — DeletionPolicy: Delete를 추가해도 객체가 있는 버킷은 삭제되지 않습니다.</p><p style="margin-top:8px;"><span class="mark-no">❌ C</span> — 수동 작업은 자동화 요구사항에 위배됩니다.</p>`,
  disc:[{ans:'B (100%)',txt:'"For Amazon S3 buckets, you must delete all objects in the bucket for deletion to succeed." — AWS 공식 문서. Lambda 사용자 지정 리소스로 먼저 버킷을 비워야 합니다.'}]
},
{
  n:23,
  ko:`한 회사가 eu-west-1의 CodePipeline 파이프라인을 사용하여 Lambda 애플리케이션을 eu-west-1에 배포합니다. 파이프라인은 AWS CodeBuild 프로젝트 빌드 작업과 AWS CloudFormation 배포 작업으로 구성됩니다. 회사는 eu-west-1의 파이프라인을 사용하여 Lambda 애플리케이션을 us-east-1에도 배포하려고 합니다. DevOps 엔지니어는 이미 CodeBuild 프로젝트를 업데이트하여 us-east-1에 대한 추가 출력 아티팩트를 생성하도록 했습니다.<br><br><strong>DevOps 엔지니어가 수행해야 할 추가 단계 조합은 무엇입니까? (두 가지를 선택하세요.)</strong>`,
  en:`A company has an AWS CodePipeline pipeline that is configured with an Amazon S3 bucket in the eu-west-1 Region. The pipeline deploys an AWS Lambda application to the same Region. The pipeline consists of an AWS CodeBuild project build action and an AWS CloudFormation deploy action. The company wants to also deploy the Lambda application to the us-east-1 Region by using the pipeline in eu-west-1. A DevOps engineer has already updated the CodeBuild project to use the aws cloudformation package command to produce an additional output artifact for us-east-1. Which combination of additional steps should the DevOps engineer take to meet these requirements? (Choose two.)`,
  type:'multi',
  multiCount:2,
  choices:[
    {k:'A', ko:`Lambda 함수 코드의 zip 파일 위치에 대한 매개변수를 포함하도록 CloudFormation 템플릿을 수정합니다. 파이프라인에서 us-east-1에 대한 새 CloudFormation 배포 작업을 만듭니다. 매개변수 재정의로 us-east-1 아티팩트 위치를 전달하도록 새 배포 작업을 구성합니다.`, en:`Modify the CloudFormation template to include a parameter for the Lambda function code's zip file location. Create a new CloudFormation deploy action for us-east-1 in the pipeline. Configure the new deploy action to pass in the us-east-1 artifact location as a parameter override.`},
    {k:'B', ko:`파이프라인에서 us-east-1에 대한 새 CloudFormation 배포 작업을 만듭니다. us-east-1 출력 아티팩트의 CloudFormation 템플릿을 사용하도록 새 배포 작업을 구성합니다.`, en:`Create a new CloudFormation deploy action for us-east-1 in the pipeline. Configure the new deploy action to use the CloudFormation template from the us-east-1 output artifact.`},
    {k:'C', ko:`us-east-1에 S3 버킷을 만듭니다. CodePipeline이 읽기 및 쓰기 액세스 권한을 가질 수 있도록 S3 버킷 정책을 구성합니다.`, en:`Create an S3 bucket in us-east-1. Configure the S3 bucket policy to allow CodePipeline to have read and write access.`},
    {k:'D', ko:`us-east-1에 S3 버킷을 만듭니다. eu-west-1의 S3 버킷에서 us-east-1의 S3 버킷으로 S3 Cross-Region Replication(CRR)을 구성합니다.`, en:`Create an S3 bucket in us-east-1. Configure S3 Cross-Region Replication (CRR) from the S3 bucket in eu-west-1 to the S3 bucket in us-east-1.`},
    {k:'E', ko:`파이프라인을 수정하여 us-east-1의 S3 버킷을 아티팩트 저장소로 포함합니다. 파이프라인에서 us-east-1에 대한 새 CloudFormation 배포 작업을 만듭니다. us-east-1 출력 아티팩트의 CloudFormation 템플릿을 사용하도록 새 배포 작업을 구성합니다.`, en:`Modify the pipeline to include the S3 bucket for us-east-1 as an artifact store. Create a new CloudFormation deploy action for us-east-1 in the pipeline. Configure the new deploy action to use the CloudFormation template from the us-east-1 output artifact.`},
  ],
  answer:['C','E'],
  vote:'62% CE',
  explain:`<p><span class="mark-ok">✅ C</span>: CodePipeline이 교차 리전 작업을 수행하려면 각 배포 리전에 S3 아티팩트 버킷이 필요합니다. us-east-1에 S3 버킷을 생성하고 CodePipeline이 접근할 수 있도록 정책을 설정합니다.</p><p style="margin-top:8px;"><span class="mark-ok">✅ E</span>: 파이프라인에 us-east-1 S3 버킷을 아티팩트 저장소로 추가하고, us-east-1 출력 아티팩트의 CloudFormation 템플릿을 사용하는 새 배포 작업을 추가합니다.</p><p><a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-create-cross-region.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ D</span> — DevOps 엔지니어가 이미 us-east-1용 아티팩트를 CodeBuild에서 직접 생성하도록 설정했으므로 CRR이 불필요합니다.</p><p style="margin-top:8px;"><span class="mark-no">❌ B</span> — us-east-1 S3 아티팩트 버킷 없이 배포 작업만 추가하면 동작하지 않습니다.</p>`,
  disc:[{ans:'CE (62%)',txt:'CodePipeline 교차 리전 배포: 각 리전에 아티팩트 저장소용 S3 버킷 필요. CLI/CFN 사용 시 직접 버킷 생성 필요. — AWS Docs'}]
},
{
  n:24,
  ko:`한 회사가 Amazon EC2 인스턴스 하나에서 애플리케이션을 실행합니다. 애플리케이션 메타데이터는 Amazon S3에 저장되며 인스턴스가 재시작되면 검색해야 합니다. 인스턴스가 응답하지 않으면 인스턴스가 자동으로 재시작되거나 다시 시작되어야 합니다.<br><br><strong>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</strong>`,
  en:`A company runs an application on one Amazon EC2 instance. Application metadata is stored in Amazon S3 and must be retrieved if the instance is restarted. The instance must restart or relaunch automatically if the instance becomes unresponsive. Which solution will meet these requirements?`,
  type:'single',
  choices:[
    {k:'A', ko:`StatusCheckFailed 메트릭에 대한 Amazon CloudWatch 알람을 만듭니다. 복구 작업을 사용하여 인스턴스를 중지하고 시작합니다. S3 이벤트 알림을 사용하여 인스턴스가 다시 작동하고 실행될 때 메타데이터를 인스턴스에 푸시합니다.`, en:`Create an Amazon CloudWatch alarm for the StatusCheckFailed metric. Use the recover action to stop and start the instance. Use an S3 event notification to push the metadata to the instance when the instance is back up and running.`},
    {k:'B', ko:`AWS OpsWorks를 구성하고 자동 복구 기능을 사용하여 인스턴스를 중지하고 시작합니다. OpsWorks의 라이프사이클 이벤트를 사용하여 Amazon S3에서 메타데이터를 가져와 인스턴스에 업데이트합니다.`, en:`Configure AWS OpsWorks, and use the auto healing feature to stop and start the instance. Use a lifecycle event in OpsWorks to pull the metadata from Amazon S3 and update it on the instance.`},
    {k:'C', ko:`EC2 자동 복구를 사용하여 장애 발생 시 인스턴스를 자동으로 중지하고 시작합니다. S3 이벤트 알림을 사용하여 인스턴스가 다시 작동하고 실행 중일 때 메타데이터를 인스턴스에 푸시합니다.`, en:`Use EC2 Auto Recovery to automatically stop and start the instance in case of a failure. Use an S3 event notification to push the metadata to the instance when the instance is back up and running.`},
    {k:'D', ko:`AWS CloudFormation을 사용하여 EC2 리소스에 대한 UserData 속성을 포함하는 EC2 인스턴스를 만듭니다. UserData에 명령을 추가하여 Amazon S3에서 애플리케이션 메타데이터를 검색합니다.`, en:`Use AWS CloudFormation to create an EC2 instance that includes the UserData property for the EC2 resource. Add a command in UserData to retrieve the application metadata from Amazon S3.`},
  ],
  answer:['B'],
  vote:'97% B',
  explain:`<p><span class="mark-ok">✅ B — AWS OpsWorks Auto Healing + 라이프사이클 이벤트</span></p><p>A와 C의 EC2 복구(recover)는 시스템 상태 검사 실패(하드웨어 이슈)에만 대응하며, 인스턴스 내부 문제(OS 레벨)에는 반응하지 않습니다. OpsWorks의 Auto Healing은 시스템·인스턴스 상태 검사 모두에 대응합니다. 또한 복구 후 Configure 라이프사이클 이벤트를 통해 S3에서 메타데이터를 자동으로 가져옵니다.</p><p><a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-IMDS-existing-instances.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ A, C</span> — S3 이벤트 알림은 S3 객체가 변경될 때 발생합니다. 인스턴스 재시작 자체가 S3 알림을 트리거하지 않습니다.</p><p style="margin-top:8px;"><span class="mark-no">❌ D</span> — UserData는 최초 시작 시에만 실행되며 자동 재시작 기능을 제공하지 않습니다.</p>`,
  disc:[{ans:'B (97%)',txt:'A와 C가 매력적으로 보이지만 S3 이벤트 알림은 S3 객체 변경 시에만 발생합니다. 인스턴스 재시작 이벤트는 S3 알림을 트리거하지 않습니다.'}]
},
{
  n:25,
  ko:`한 회사가 여러 AWS 계정을 가지고 있습니다. AWS IAM Identity Center(AWS Single Sign-On)가 AWS Toolkit for Microsoft Azure DevOps와 통합되어 사용됩니다. 액세스 제어를 위한 속성 기능이 IAM Identity Center에서 활성화됩니다. 속성 매핑에는 department 키가 <code>\${path:enterprise.department}</code>에 매핑되어 있습니다. 모든 기존 Amazon EC2 인스턴스에는 department 태그(d1, d2, d3)가 있습니다. DevOps 엔지니어는 일치하는 속성을 기반으로 정책을 만들어야 합니다. 정책은 관리 작업을 최소화해야 하며 각 Azure AD 사용자에게 사용자의 해당 부서 이름으로 태그가 지정된 EC2 인스턴스에만 액세스 권한을 부여해야 합니다.<br><br><strong>DevOps 엔지니어는 사용자 지정 권한 정책에 어떤 조건 키를 포함해야 합니까?</strong>`,
  en:`A company has multiple AWS accounts. The company uses AWS IAM Identity Center (AWS Single Sign-On) that is integrated with AWS Toolkit for Microsoft Azure DevOps. The attributes for access control feature is enabled in IAM Identity Center. The attribute mapping list contains an entry where the department key is mapped to \${path:enterprise.department}. All existing Amazon EC2 instances have a department tag that corresponds to three company departments (d1, d2, d3). A DevOps engineer must create policies based on the matching attributes. The policies must minimize administrative effort and must grant each Azure AD user access to only the EC2 instances that are tagged with the user's respective department name. Which condition key should the DevOps engineer include in the custom permissions policies to meet these requirements?`,
  type:'single',
  choices:[
    {k:'A', ko:`<pre style="background:var(--surface2);padding:10px;border-radius:6px;font-size:12px;">"Condition": {
  "ForAllValues:StringEquals": {
    "aws:TagKeys": ["department"]
  }
}</pre>`, en:`Condition using ForAllValues:StringEquals on aws:TagKeys: ["department"]`},
    {k:'B', ko:`<pre style="background:var(--surface2);padding:10px;border-radius:6px;font-size:12px;">"Condition": {
  "StringEquals": {
    "aws:PrincipalTag/department":
      "\${aws:ResourceTag/department}"
  }
}</pre>`, en:`Condition using StringEquals: aws:PrincipalTag/department equals aws:ResourceTag/department`},
    {k:'C', ko:`<pre style="background:var(--surface2);padding:10px;border-radius:6px;font-size:12px;">"Condition": {
  "StringEquals": {
    "ec2:ResourceTag/department":
      "\${aws:PrincipalTag/department}"
  }
}</pre>`, en:`Condition using StringEquals: ec2:ResourceTag/department equals aws:PrincipalTag/department`},
    {k:'D', ko:`<pre style="background:var(--surface2);padding:10px;border-radius:6px;font-size:12px;">"Condition": {
  "ForAllValues:StringEquals": {
    "ec2:ResourceTag/department":
      ["d1", "d2", "d3"]
  }
}</pre>`, en:`Condition using ForAllValues:StringEquals: ec2:ResourceTag/department equals ["d1", "d2", "d3"]`},
  ],
  answer:['C'],
  vote:'100% C',
  explain:`<p><span class="mark-ok">✅ C — ec2:ResourceTag/department = aws:PrincipalTag/department</span></p><p>이것이 ABAC(Attribute-Based Access Control) 패턴입니다. <code>ec2:ResourceTag/department</code>는 EC2 리소스의 department 태그 값이고, <code>\${aws:PrincipalTag/department}</code>는 현재 사용자의 department 속성 값입니다. 이 두 값이 일치할 때만 접근을 허용하므로, 단일 정책으로 모든 부서 사용자를 관리할 수 있어 관리 오버헤드가 최소화됩니다.</p><p><a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ D</span> — 부서 값을 하드코딩하면 새 부서가 추가될 때마다 정책을 수정해야 합니다.</p>`,
  disc:[{ans:'C (100%)',txt:'ABAC 패턴: 사용자 속성(PrincipalTag)과 리소스 태그(ResourceTag)를 매칭. EC2 리소스에는 ec2:ResourceTag를 사용합니다.'}]
},
{
  n:26,
  ko:`한 회사가 AWS 계정에서 보안 감사 애플리케이션을 호스팅합니다. 감사 애플리케이션은 IAM 역할을 사용하여 다른 AWS 계정에 액세스합니다. 모든 계정은 AWS Organizations에서 동일한 조직에 있습니다. 최근 보안 감사에서 감사된 AWS 계정의 사용자가 감사 애플리케이션의 IAM 역할을 수정하거나 삭제할 수 있음이 밝혀졌습니다. 이 회사는 신뢰할 수 있는 관리자 IAM 역할이 아닌 다른 엔터티가 감사 애플리케이션의 IAM 역할을 수정하는 것을 방지해야 합니다.<br><br><strong>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</strong>`,
  en:`A company hosts a security auditing application in an AWS account. The auditing application uses an IAM role to access other AWS accounts. All the accounts are in the same organization in AWS Organizations. A recent security audit revealed that users in the audited AWS accounts could modify or delete the auditing application's IAM role. The company needs to prevent any modification to the auditing application's IAM role by any entity other than a trusted administrator IAM role. Which solution will meet these requirements?`,
  type:'single',
  choices:[
    {k:'A', ko:`감사 애플리케이션의 IAM 역할에 대한 변경에 대한 Deny 문이 포함된 SCP를 만듭니다. 신뢰할 수 있는 관리자 IAM 역할이 변경을 수행할 수 있도록 허용하는 조건을 포함합니다. SCP를 조직의 루트에 연결합니다.`, en:`Create an SCP that includes a Deny statement for changes to the auditing application's IAM role. Include a condition that allows the trusted administrator IAM role to make changes. Attach the SCP to the root of the organization.`},
    {k:'B', ko:`신뢰할 수 있는 관리자 IAM 역할에 의한 감사 애플리케이션의 IAM 역할 변경에 대한 허용 명령문을 포함하는 SCP를 만듭니다. 다른 모든 IAM 주체에 의한 변경에 대한 거부 명령문을 포함합니다. 감사 애플리케이션에 IAM 역할이 있는 각 AWS 계정의 IAM 서비스에 SCP를 연결합니다.`, en:`Create an SCP that includes an Allow statement for changes to the auditing application's IAM role by the trusted administrator IAM role. Include a Deny statement for changes by all other IAM principals. Attach the SCP to the IAM service in each AWS account where the auditing application has an IAM role.`},
    {k:'C', ko:`감사 애플리케이션의 IAM 역할에 대한 변경에 대한 Deny 문을 포함하는 IAM 권한 경계를 만듭니다. 신뢰할 수 있는 관리자 IAM 역할이 변경을 수행할 수 있도록 허용하는 조건을 포함합니다. 감사된 AWS 계정에 권한 경계를 연결합니다.`, en:`Create an IAM permissions boundary that includes a Deny statement for changes to the auditing application's IAM role. Include a condition that allows the trusted administrator IAM role to make changes. Attach the permissions boundary to the audited AWS accounts.`},
    {k:'D', ko:`감사 애플리케이션의 IAM 역할에 대한 변경에 대한 Deny 문을 포함하는 IAM 권한 경계를 만듭니다. 신뢰할 수 있는 관리자 IAM 역할이 변경을 수행할 수 있도록 허용하는 조건을 포함합니다. AWS 계정에서 감사 애플리케이션의 IAM 역할에 권한 경계를 연결합니다.`, en:`Create an IAM permissions boundary that includes a Deny statement for changes to the auditing application's IAM role. Include a condition that allows the trusted administrator IAM role to make changes. Attach the permissions boundary to the auditing application's IAM role in the AWS accounts.`},
  ],
  answer:['A'],
  vote:'89% A',
  explain:`<p><span class="mark-ok">✅ A — SCP(서비스 제어 정책) + 조건부 Deny</span></p><p>AWS Organizations의 SCP를 조직 루트에 연결하면 모든 멤버 계정에 일괄 적용됩니다. SCP에 Deny 문과 함께 신뢰할 수 있는 관리자일 때는 허용하는 조건을 추가하면, 단일 정책으로 조직 전체의 역할 보호가 가능합니다.</p><p><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ B</span> — SCP는 Allow 문을 지원하지 않습니다. 또한 SCP를 IAM 서비스에 직접 연결할 수 없습니다.</p><p style="margin-top:8px;"><span class="mark-no">❌ C, D</span> — IAM 권한 경계는 계정이 아닌 IAM 엔터티(사용자/역할)에 적용됩니다.</p>`,
  disc:[{ans:'A (89%)',txt:'SCP 조건부 Deny 패턴: Deny + 조건(aws:PrincipalArn이 관리자 역할이 아닐 때). 조직 루트 연결로 모든 멤버 계정에 적용됩니다.'}]
},
{
  n:27,
  ko:`한 회사에 Go로 작성된 온프레미스 애플리케이션이 있습니다. DevOps 엔지니어는 애플리케이션을 AWS로 옮겨야 합니다. 회사의 개발팀은 블루/그린 배포를 활성화하고 A/B 테스트를 수행하려고 합니다.<br><br><strong>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</strong>`,
  en:`A company has an on-premises application that is written in Go. A DevOps engineer must move the application to AWS. The company's development team wants to enable blue/green deployments and perform A/B testing. Which solution will meet these requirements?`,
  type:'single',
  choices:[
    {k:'A', ko:`Amazon EC2 인스턴스에 애플리케이션을 배포하고 인스턴스의 AMI를 만듭니다. AMI를 사용하여 Auto Scaling 그룹에서 사용되는 자동 스케일링 시작 구성을 만듭니다. Elastic Load Balancing을 사용하여 트래픽을 분산합니다. 애플리케이션에 변경 사항이 있으면 새 AMI가 생성되어 EC2 인스턴스 새로 고침이 시작됩니다.`, en:`Deploy the application on an Amazon EC2 instance, and create an AMI of the instance. Use the AMI to create an automatic scaling launch configuration that is used in an Auto Scaling group. Use Elastic Load Balancing to distribute traffic. When changes are made to the application, a new AMI will be created, which will initiate an EC2 instance refresh.`},
    {k:'B', ko:`Amazon Lightsail을 사용하여 애플리케이션을 배포합니다. 애플리케이션을 Amazon S3 버킷에 압축 형식으로 저장합니다. 이 압축 버전을 사용하여 애플리케이션의 새 버전을 Lightsail에 배포합니다. Lightsail 배포 옵션을 사용하여 배포를 관리합니다.`, en:`Use Amazon Lightsail to deploy the application. Store the application in a zipped format in an Amazon S3 bucket. Use this zipped version to deploy new versions of the application to Lightsail. Use Lightsail deployment options to manage the deployment.`},
    {k:'C', ko:`AWS CodeArtifact를 사용하여 애플리케이션 코드를 저장합니다. AWS CodeDeploy를 사용하여 Amazon EC2 인스턴스 플릿에 애플리케이션을 배포합니다. Elastic Load Balancing을 사용하여 트래픽을 EC2 인스턴스에 분산합니다. 애플리케이션을 변경할 때 CodeArtifact에 새 버전을 업로드하고 새 CodeDeploy 배포를 만듭니다.`, en:`Use AWS CodeArtifact to store the application code. Use AWS CodeDeploy to deploy the application to a fleet of Amazon EC2 instances. Use Elastic Load Balancing to distribute the traffic to the EC2 instances. When making changes to the application, upload a new version to CodeArtifact and create a new CodeDeploy deployment.`},
    {k:'D', ko:`AWS Elastic Beanstalk를 사용하여 애플리케이션을 호스팅합니다. Amazon S3에 애플리케이션의 압축 버전을 저장합니다. 해당 위치를 사용하여 애플리케이션의 새 버전을 배포합니다. Elastic Beanstalk를 사용하여 배포 옵션을 관리합니다.`, en:`Use AWS Elastic Beanstalk to host the application. Store a zipped version of the application in Amazon S3. Use that location to deploy new versions of the application. Use Elastic Beanstalk to manage the deployment options.`},
  ],
  answer:['D'],
  vote:'100% D',
  explain:`<p><span class="mark-ok">✅ D — AWS Elastic Beanstalk</span></p><p>Elastic Beanstalk는 Go를 포함한 다양한 언어를 지원하며, 블루/그린 배포와 A/B 테스트를 기본 제공합니다. 환경 교체(Environment swap)로 블루/그린 전환이 가능하고, 트래픽 분할로 A/B 테스트를 수행할 수 있습니다.</p><p><a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ B</span> — Lightsail은 블루/그린 배포나 A/B 테스트를 기본 제공하지 않습니다.</p>`,
  disc:[{ans:'D (100%)',txt:'Elastic Beanstalk 지원 플랫폼: Go, Java, .NET, Node.js, Python, PHP, Ruby, Docker 등. 배포 정책: All at once, Rolling, Immutable, Blue/Green.'}]
},
{
  n:28,
  ko:`개발자는 50대의 Amazon EC2 Linux 서버를 유지 관리하고 있습니다. 이 서버는 Amazon EC2 Auto Scaling 그룹의 일부이며, 부하 분산을 위해 Elastic Load Balancing도 사용합니다. 가끔 일부 애플리케이션 서버가 ELB HTTP 상태 검사에 실패한 후 종료됩니다. 개발자는 이 문제에 대한 근본 원인 분석을 수행하고 싶지만 애플리케이션 로그에 액세스하기 전에 서버가 종료됩니다.<br><br><strong>로그 수집을 어떻게 자동화할 수 있습니까?</strong>`,
  en:`A developer is maintaining a fleet of 50 Amazon EC2 Linux servers. The servers are part of an Amazon EC2 Auto Scaling group, and also use Elastic Load Balancing for load balancing. Occasionally, some application servers are being terminated after failing ELB HTTP health checks. The developer would like to perform a root cause analysis on the issue, but before being able to access application logs, the server is terminated. How can log collection be automated?`,
  type:'single',
  choices:[
    {k:'A', ko:`Auto Scaling 라이프사이클 후크를 사용하여 인스턴스를 Pending:Wait 상태로 만듭니다. EC2 인스턴스 종료 성공에 대한 Amazon CloudWatch 알람을 만들고 SSM Run Command 스크립트를 호출하여 로그를 수집하고 Amazon S3에 푸시하고 로그가 수집되면 라이프사이클 작업을 완료하는 AWS Lambda 함수를 트리거합니다.`, en:`Use Auto Scaling lifecycle hooks to put instances in a Pending:Wait state. Create an Amazon CloudWatch alarm for EC2 Instance Terminate Successful and trigger an AWS Lambda function that invokes an SSM Run Command script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.`},
    {k:'B', ko:`Auto Scaling 라이프사이클 후크를 사용하여 인스턴스를 Terminating:Wait 상태로 만듭니다. EC2 Instance-terminate 라이프사이클 액션에 대한 AWS Config 규칙을 만들고 로그를 수집하고 Amazon S3에 푸시하고 로그가 수집되면 라이프사이클 액션을 완료하는 스크립트를 호출하는 단계 함수를 트리거합니다.`, en:`Use Auto Scaling lifecycle hooks to put instances in a Terminating:Wait state. Create an AWS Config rule for EC2 Instance-terminate Lifecycle Action and trigger a step function that invokes a script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.`},
    {k:'C', ko:`Auto Scaling 라이프사이클 후크를 사용하여 인스턴스를 Terminating:Wait 상태로 만듭니다. EC2 Instance Terminate Successful에 대한 Amazon CloudWatch 구독 필터를 만들고 로그를 수집하고 Amazon S3에 푸시하고 로그가 수집되면 라이프사이클 작업을 완료하는 스크립트를 호출하는 CloudWatch 에이전트를 트리거합니다.`, en:`Use Auto Scaling lifecycle hooks to put instances in a Terminating:Wait state. Create an Amazon CloudWatch subscription filter for EC2 Instance Terminate Successful and trigger a CloudWatch agent that invokes a script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.`},
    {k:'D', ko:`Auto Scaling 라이프사이클 후크를 사용하여 인스턴스를 Terminating:Wait 상태로 만듭니다. EC2 Instance-terminate 라이프사이클 액션에 대한 Amazon EventBridge 규칙을 만들고 SSM Run Command 스크립트를 호출하여 로그를 수집하고 Amazon S3에 푸시하고 로그가 수집되면 라이프사이클 액션을 완료하는 AWS Lambda 함수를 트리거합니다.`, en:`Use Auto Scaling lifecycle hooks to put instances in a Terminating:Wait state. Create an Amazon EventBridge rule for EC2 Instance-terminate Lifecycle Action and trigger an AWS Lambda function that invokes an SSM Run Command script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.`},
  ],
  answer:['D'],
  vote:'86% D',
  explain:`<p><span class="mark-ok">✅ D — Terminating:Wait + EventBridge + Lambda + SSM Run Command</span></p><p>스케일-인 이벤트 시 라이프사이클 후크가 인스턴스를 <code>Terminating:Wait</code> 상태로 일시 중지합니다. EventBridge 규칙이 이 이벤트를 감지하여 Lambda를 호출하고, Lambda는 SSM Run Command로 인스턴스에서 로그를 수집하여 S3에 저장한 후 라이프사이클 작업을 완료합니다.</p><p><a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/send-commands-multiple.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ A</span> — <code>Pending:Wait</code>는 인스턴스가 시작될 때의 상태이며, 종료 시에는 <code>Terminating:Wait</code>를 사용해야 합니다.</p><p style="margin-top:8px;"><span class="mark-no">❌ C</span> — CloudWatch 에이전트는 스크립트를 직접 실행하는 기능이 없습니다.</p>`,
  disc:[{ans:'D (86%)',txt:'"스케일-인 이벤트가 발생하면 라이프사이클 후크가 인스턴스를 일시 중지하고 EventBridge로 알림을 보냅니다." — AWS Blog'}]
},
{
  n:29,
  ko:`회사에 AWS Organizations에 조직이 있습니다. 조직에는 엔터프라이즈 애플리케이션이 포함된 워크로드 계정이 포함됩니다. 회사는 운영 계정에서 사용자를 중앙에서 관리합니다. 워크로드 계정에서 사용자를 만들 수 없습니다. 회사는 최근에 운영 팀을 추가했으며 운영 팀 구성원에게 각 워크로드 계정에 대한 관리자 액세스 권한을 제공해야 합니다.<br><br><strong>이 액세스를 제공하는 작업 조합은 무엇입니까? (세 가지를 선택하세요.)</strong>`,
  en:`A company has an organization in AWS Organizations. The organization includes workload accounts that contain enterprise applications. The company centrally manages users from an operations account. No users can be created in the workload accounts. The company recently added an operations team and must provide the operations team members with administrator access to each workload account. Which combination of actions will provide this access? (Choose three.)`,
  type:'multi',
  multiCount:3,
  choices:[
    {k:'A', ko:`운영 계정에서 SysAdmin 역할을 만듭니다. AdministratorAccess 정책을 역할에 연결합니다. 신뢰 관계를 수정하여 워크로드 계정에서 sts:AssumeRole 작업을 허용합니다.`, en:`Create a SysAdmin role in the operations account. Attach the AdministratorAccess policy to the role. Modify the trust relationship to allow the sts:AssumeRole action from the workload accounts.`},
    {k:'B', ko:`각 워크로드 계정에서 SysAdmin 역할을 만듭니다. AdministratorAccess 정책을 역할에 연결합니다. 운영 계정에서 sts:AssumeRole 작업을 허용하도록 신뢰 관계를 수정합니다.`, en:`Create a SysAdmin role in each workload account. Attach the AdministratorAccess policy to the role. Modify the trust relationship to allow the sts:AssumeRole action from the operations account.`},
    {k:'C', ko:`운영 계정에서 Amazon Cognito ID 풀을 만듭니다. SysAdmin 역할을 인증된 역할로 연결합니다.`, en:`Create an Amazon Cognito identity pool in the operations account. Attach the SysAdmin role as an authenticated role.`},
    {k:'D', ko:`운영 계정에서 각 운영 팀 구성원에 대한 IAM 사용자를 만듭니다.`, en:`In the operations account, create an IAM user for each operations team member.`},
    {k:'E', ko:`운영 계정에서 SysAdmins라는 이름의 IAM 사용자 그룹을 만듭니다. 각 워크로드 계정에서 SysAdmin 역할에 대한 sts:AssumeRole 작업을 허용하는 IAM 정책을 추가합니다. 모든 운영 팀 구성원을 그룹에 추가합니다.`, en:`In the operations account, create an IAM user group that is named SysAdmins. Add an IAM policy that allows the sts:AssumeRole action for the SysAdmin role in each workload account. Add all operations team members to the group.`},
    {k:'F', ko:`운영 계정에서 Amazon Cognito 사용자 풀을 만듭니다. 각 운영 팀원에 대해 Amazon Cognito 사용자를 만듭니다.`, en:`Create an Amazon Cognito user pool in the operations account. Create an Amazon Cognito user for each operations team member.`},
  ],
  answer:['B','D','E'],
  vote:'84% BDE',
  explain:`<p><span class="mark-ok">✅ B</span>: 워크로드 계정에 SysAdmin 역할을 생성하고, 운영 계정을 신뢰할 수 있도록 신뢰 관계를 설정합니다.</p><p style="margin-top:8px;"><span class="mark-ok">✅ D</span>: 운영 계정에 IAM 사용자를 생성합니다. (워크로드 계정에는 사용자를 만들 수 없으므로)</p><p style="margin-top:8px;"><span class="mark-ok">✅ E</span>: 운영 계정의 SysAdmins 그룹에 각 워크로드 계정 역할로의 AssumeRole 권한을 부여합니다.</p><p><a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_access.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ A</span> — 역할은 접근하는 계정이 아닌 접근받는 계정에 있어야 합니다.</p><p style="margin-top:8px;"><span class="mark-no">❌ C, F</span> — Cognito는 애플리케이션 ID 관리용이며 이 시나리오와 무관합니다.</p>`,
  disc:[{ans:'BDE (84%)',txt:'교차 계정 접근: 1단계-워크로드 계정에 역할 생성(운영 계정 신뢰). 2단계-운영 계정에 사용자 생성. 3단계-그룹에 AssumeRole 권한 부여.'}]
},
{
  n:30,
  ko:`한 회사가 AWS Organizations의 조직에 여러 계정을 가지고 있습니다. 조직의 계정이 Amazon S3 버킷에서 Block Public Access 기능을 끄면 회사의 SecOps 팀은 Amazon Simple Notification Service(Amazon SNS) 알림을 받아야 합니다. DevOps 엔지니어는 AWS 계정의 운영에 영향을 미치지 않고 이 변경 사항을 구현해야 합니다. 구현은 조직의 개별 멤버 계정이 알림을 끌 수 없도록 해야 합니다.<br><br><strong>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?</strong>`,
  en:`A company has multiple accounts in an organization in AWS Organizations. The company's SecOps team needs to receive an Amazon Simple Notification Service (Amazon SNS) notification if any account in the organization turns off the Block Public Access feature on an Amazon S3 bucket. A DevOps engineer must implement this change without affecting the operation of any AWS accounts. The implementation must ensure that individual member accounts in the organization cannot turn off the notification. Which solution will meet these requirements?`,
  type:'single',
  choices:[
    {k:'A', ko:`위임된 Amazon GuardDuty 관리자 계정이 될 계정을 지정합니다. 조직 전체의 모든 계정에 대해 GuardDuty를 켭니다. GuardDuty 관리자 계정에서 SNS 토픽을 만듭니다. SecOps 팀의 이메일 주소를 SNS 토픽에 구독합니다. 동일한 계정에서 GuardDuty 결과에 대한 이벤트 패턴과 SNS 토픽의 대상을 사용하는 Amazon EventBridge 규칙을 만듭니다.`, en:`Designate an account to be the delegated Amazon GuardDuty administrator account. Turn on GuardDuty for all accounts across the organization. In the GuardDuty administrator account, create an SNS topic. Subscribe the SecOps team's email address to the SNS topic. In the same account, create an Amazon EventBridge rule that uses an event pattern for GuardDuty findings and a target of the SNS topic.`},
    {k:'B', ko:`SNS 토픽을 만들고 SecOps 팀의 이메일 주소를 SNS 토픽에 구독하는 AWS CloudFormation 템플릿을 만듭니다. 템플릿에 s3:PutBucketPublicAccessBlock에 대한 CloudTrail 활동의 이벤트 패턴과 SNS 토픽의 대상을 사용하는 Amazon EventBridge 규칙을 포함합니다. CloudFormation StackSets를 사용하여 조직의 모든 계정에 스택을 배포합니다.`, en:`Create an AWS CloudFormation template that creates an SNS topic and subscribes the SecOps team's email address to the SNS topic. In the template, include an Amazon EventBridge rule that uses an event pattern of CloudTrail activity for s3:PutBucketPublicAccessBlock and a target of the SNS topic. Deploy the stack to every account in the organization by using CloudFormation StackSets.`},
    {k:'C', ko:`조직 전체에서 AWS Config를 켭니다. 위임된 관리자 계정에서 SNS 토픽을 만듭니다. SecOps 팀의 이메일 주소를 SNS 토픽에 구독합니다. 각 계정에서 s3-bucket-level-public-access-prohibited AWS Config 관리 규칙을 사용하고 AWS Systems Manager 문서를 사용하여 SecOps 팀에 알리기 위해 SNS 토픽에 이벤트를 게시하는 적합성 팩을 배포합니다.`, en:`Turn on AWS Config across the organization. In the delegated administrator account, create an SNS topic. Subscribe the SecOps team's email address to the SNS topic. Deploy a conformance pack that uses the s3-bucket-level-public-access-prohibited AWS Config managed rule in each account and uses an AWS Systems Manager document to publish an event to the SNS topic to notify the SecOps team.`},
    {k:'D', ko:`조직 전체에서 Amazon Inspector를 켭니다. Amazon Inspector 위임 관리자 계정에서 SNS 토픽을 만듭니다. SecOps 팀의 이메일 주소를 SNS 토픽에 구독합니다. 같은 계정에서 S3 버킷의 퍼블릭 네트워크 노출에 대한 이벤트 패턴을 사용하고 SecOps 팀에 알리기 위해 SNS 토픽에 이벤트를 게시하는 Amazon EventBridge 규칙을 만듭니다.`, en:`Turn on Amazon Inspector across the organization. In the Amazon Inspector delegated administrator account, create an SNS topic. Subscribe the SecOps team's email address to the SNS topic. In the same account, create an Amazon EventBridge rule that uses an event pattern for public network exposure of the S3 bucket and publishes an event to the SNS topic to notify the SecOps team.`},
  ],
  answer:['C'],
  vote:'69% C (25% A)',
  explain:`<p><span class="mark-ok">✅ C — AWS Config 적합성 팩 + SSM Automation</span></p><p>AWS Config 적합성 팩을 사용하면 조직 전체에 Config 규칙을 중앙에서 배포할 수 있으며, 위임된 관리자를 통해 멤버 계정이 규칙을 비활성화할 수 없습니다. SSM Automation 런북으로 SNS 알림을 전송합니다.</p><p><a href="https://docs.aws.amazon.com/config/latest/developerguide/conformance-packs.html" target="_blank">📎 AWS 공식 문서</a></p>`,
  wrong:`<p><span class="mark-no">❌ B</span> — StackSets로 배포하면 각 계정에서 관리자 권한을 가진 사용자가 EventBridge 규칙을 비활성화하여 알림을 끌 수 있습니다.</p>`,
  disc:[{ans:'C (69%)',txt:'AWS Config 적합성 팩은 조직 전체에 중앙에서 배포되며 멤버 계정이 수정할 수 없습니다.'}]
}
];
