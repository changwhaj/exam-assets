[Q0001]

[문제요약]
모바일 애플리케이션이 ALB를 통해 Lambda 기반 API를 호출한다. 회사는 모바일 앱 버전(user-agent 기준)별로 API 응답 코드에 따른 호출 횟수를 CloudWatch에서 모니터링하려 한다. Lambda 함수는 작업 이름, 앱 버전, 응답 코드를 로그로 남기도록 수정되었으며, 이 로그를 기반으로 사용자 정의 메트릭을 생성할 수 있는지를 묻는 문제이다.

[정답] : A

[설명]

A. CloudWatch Logs에 기록된 로그로 Metric Filter를 생성한다. (정답)
Lambda 로그는 CloudWatch Logs에 저장되며, Metric Filter를 사용하면 로그 패턴을 기반으로 사용자 정의 메트릭을 생성할 수 있다. 앱 버전 및 응답 코드별 호출 횟수를 집계할 수 있어 요구사항에 가장 적합하다.

B. CloudWatch Logs Insights를 사용한다. (오답)
Logs Insights는 로그 분석용 도구로, 지속적인 CloudWatch 메트릭 생성에는 적합하지 않다.

C. ALB 액세스 로그를 사용한다. (오답)
ALB 로그에는 Lambda 내부 로직이나 앱 버전 정보가 포함되지 않아 요구사항을 직접 충족하기 어렵다.

D. AWS X-Ray를 사용한다. (오답)
X-Ray는 분산 트레이싱에 적합하지만 집계 메트릭 생성 용도는 아니다.

[주요 개념]

CloudWatch Logs Metric Filter는 로그 이벤트를 기반으로 사용자 정의 CloudWatch 메트릭을 생성하는 기능이다. 서버리스 환경에서 애플리케이션 지표를 수집할 때 가장 표준적인 방식이다.

---

[Q0002]

[문제요약]
API Gateway를 통해 Lambda 함수를 호출하는 애플리케이션에서 Lambda 초기화 시 DynamoDB 데이터를 대량으로 읽어 콜드 스타트 지연이 발생하고 있다. 트래픽 변동이 큰 환경에서 하루 전체 동안 지연 시간을 최소화하면서 비용 효율적으로 운영할 수 있는 Lambda 구성 방안을 묻는 문제이다.

[정답] : C

[설명]

A. Provisioned concurrency를 1로 고정 설정한다. (오답)
고정 값은 트래픽 피크를 충분히 처리하지 못한다.

B. Reserved concurrency를 0으로 설정한다. (오답)
Lambda 호출이 차단되어 서비스가 동작하지 않는다.

C. Provisioned concurrency와 Application Auto Scaling을 함께 구성한다. (정답)
Provisioned concurrency로 콜드 스타트를 제거하고, Auto Scaling으로 트래픽에 따라 용량을 자동 조정해 성능과 비용 요구사항을 모두 만족한다.

D. Reserved concurrency와 API Gateway 자동 확장을 사용한다. (오답)
콜드 스타트 문제를 직접 해결하지 못한다.

[주요 개념]

Provisioned Concurrency는 Lambda 실행 환경을 사전에 초기화해 콜드 스타트를 방지한다. 트래픽 변동이 큰 경우 Application Auto Scaling과 함께 사용하는 것이 핵심이다.

---

[Q0003]

[문제요약]
AWS CodeDeploy를 사용하여 EC2 기반 애플리케이션을 배포하고 있다. 여러 배포 그룹을 운영 중이며, 애플리케이션 코드 수정 없이 배포 그룹별로 로그 레벨을 다르게 설정하려 한다. 최소한의 관리 오버헤드로 환경별 로그 설정을 적용하는 방법을 묻는 문제이다.

[정답] : B

[설명]

A. EC2 태그 및 메타데이터 서비스를 사용한다. (오답)
구현은 가능하지만 별도의 스크립트 관리가 필요해 관리 오버헤드가 증가한다.

B. CodeDeploy가 제공하는 DEPLOYMENT\_GROUP\_NAME 환경 변수를 사용한다. (정답)
CodeDeploy는 배포 과정에서 DEPLOYMENT\_GROUP\_NAME 환경 변수를 자동으로 설정한다. 이를 배포 스크립트에서 참조하면 애플리케이션 수정 없이 배포 그룹별 로그 레벨을 동적으로 설정할 수 있다.

C. 사용자 정의 환경 변수를 설정한다. (오답)
환경별로 별도 관리가 필요해 최소 오버헤드 조건에 부합하지 않는다.

D. DEPLOYMENT\_GROUP\_ID를 사용한다. (오답)
내부 식별자 사용으로 불필요한 복잡성이 증가한다.

[주요 개념]

CodeDeploy는 배포 라이프사이클 동안 기본 환경 변수를 제공한다. DEPLOYMENT\_GROUP\_NAME을 활용하면 애플리케이션 코드 변경 없이 배포 그룹 단위 설정이 가능하다.

[참조]
[https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file-structure-hooks.html)

---

[Q0004]

[문제요약]
EBS 볼륨마다 Backup\_Frequency라는 커스텀 태그로 백업 빈도를 지정해야 한다. 개발자가 태그를 누락하는 경우가 있어, **누락된 경우에도 최소 주 1회 백업이 가능하도록 태그가 항상 적용되도록 보장**하려 한다. 이를 자동화하는 솔루션을 묻는 문제이다.

[정답] : B

[설명]

A. AWS Config + 사용자 정의 규칙 + SSM Automation 런북 (오답)
사용자 정의 규칙은 가능하지만 관리 복잡도가 크다.

B. AWS Config + 관리형 규칙 + SSM Automation 런북 (정답)
AWS Config의 관리형 규칙을 활성화하고, 비준수 리소스를 감지하면 SSM Automation 런북으로 Backup\_Frequency 태그를 자동 추가한다. 이렇게 하면 모든 EBS 볼륨에 누락 없이 태그가 적용되어 백업 정책을 보장할 수 있다.

C. CloudTrail + EventBridge(CreateVolume) + SSM Automation (오답)
새로 생성되는 볼륨만 처리 가능해 기존 누락 볼륨에는 적용되지 않는다.

D. CloudTrail + EventBridge(Create/Modify) + SSM Automation (오답)
생성/수정 이벤트 기반이지만 전체 준수 보장 조건에서는 Config 기반 자동화보다 적합하지 않다.

[주요 개념]

- AWS Config 관리형 규칙은 리소스가 정책과 일치하는지 자동 평가하고 비준수 상태를 감지한다.
- Systems Manager Automation 런북을 구성해 비준수 리소스에 자동 수정(remediation) 작업을 실행하면 누락된 태그를 자동으로 적용할 수 있다.

[참조]

- AWS Config 및 관리형 규칙 + SSM Automation 문서: [https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html)
- AWS Systems Manager Automation 개요: [https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html)

---

[Q0005]

[문제요약]
애플리케이션이 Amazon Aurora 클러스터(단일 인스턴스)를 데이터 저장소로 사용하고 있다. 유지 관리 기간 동안 가능한 최소한의 중단으로 클러스터를 계속 사용해야 한다. 이를 위해 DevOps 엔지니어가 취해야 할 조치를 묻는 문제이다.

[정답] : A

[설명]

A. Aurora 클러스터에 리더 인스턴스를 추가하고, 쓰기는 클러스터 엔드포인트, 읽기는 리더 엔드포인트로 분리 (정답)
→ 추가 리더 인스턴스가 있으면 기본 인스턴스에 장애 또는 유지 관리가 걸리는 동안에도 읽기 및 쓰기 트래픽을 적절히 분리·처리할 수 있어 중단을 최소화할 수 있다.

B. 리더 인스턴스 추가 + 사용자 정의 ANY 엔드포인트 생성 (오답)
→ 사용자 정의 ANY 엔드포인트는 Aurora에서 읽기/쓰기 트래픽 최적화 용도가 아니며 유지 관리 중 최소 중단 보장과 직접적인 관련이 없다.

C. Multi-AZ 옵션 활성화 + 기본/리더 엔드포인트 사용 (오답)
→ 지금 상태에서 Multi-AZ 전환을 통해 유지 관리 중 중단을 보장할 수 없다.

D. Multi-AZ 옵션 + 사용자 정의 ANY 엔드포인트 사용 (오답)
→ 옵션 C와 동일하며 사용자 정의 엔드포인트로 문제 요구를 해결할 수 없다.

[주요 개념]

- Aurora 클러스터 엔드포인트는 쓰기 작업을 기본 인스턴스로 라우팅하며, 리더 엔드포인트는 복제 인스턴스로 읽기 트래픽을 분산시킨다.
- Aurora 리더 인스턴스를 추가하면 읽기/쓰기 작업의 부하 분산뿐 아니라 유지 관리 또는 장애 상황에서 가용성을 높이고 중단을 최소화할 수 있다.

[참조]

- Amazon Aurora 고가용성 개요 (공식 문서): [https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html)

---

[Q0006]

[문제요약]
회사는 계정 간 공유하는 모든 AMI를 암호화해야 한다. 소스 계정에 암호화되지 않은 커스텀 AMI가 있고, 대상 계정의 EC2 Auto Scaling 그룹에서 사용한다. 요구사항을 만족하기 위해 수행해야 할 단계를 묻는 문제이다.

[정답] : A, D, F

[설명]

A. 소스 계정에서 암호화되지 않은 AMI를 암호화된 AMI로 복사하고, KMS 키를 지정 (정답)

B. 암호화 시 기본 EBS 키를 지정 (오답)

C. 소스 계정에서 대상 계정 Auto Scaling 역할에 대한 KMS 권한 위임 생성 (오답)

D. 소스 계정의 키 정책을 수정하여 대상 계정 권한 부여, 대상 계정에서 Auto Scaling 서비스 역할에 권한 위임 (정답)

E. 암호화되지 않은 AMI를 대상 계정과 공유 (오답)

F. 소스 계정에서 암호화된 AMI를 대상 계정과 공유 (정답)

[주요 개념]

- AMI 암호화 및 복사: 공유할 커스텀 AMI는 소스 계정에서 암호화된 상태로 생성해야 하며, CMK를 지정해야 한다.
- KMS 키 정책: 암호화된 AMI를 다른 계정에서 사용하려면 대상 계정에 복호화 권한이 필요하다.
- 공유: 암호화된 AMI는 암호화 상태로 대상 계정과 공유해야 한다.

[참조]

- AWS 공식: Cross-account Amazon EC2 AMI encryption & sharing 안내 [https://aws.amazon.com/blogs/security/how-to-create-a-custom-ami-with-encrypted-amazon-ebs-snapshots-and-share-it-with-other-accounts-and-regions/](https://aws.amazon.com/blogs/security/how-to-create-a-custom-ami-with-encrypted-amazon-ebs-snapshots-and-share-it-with-other-accounts-and-regions/)

---

[Q0007]

[문제요약]
회사는 CodePipeline을 이용해 애플리케이션 릴리스를 자동화하고 있다. 현재 빌드/테스트/배포 단계를 각각 AWS CodeBuild 프로젝트로 처리했으며, 이제 배포 단계만 AWS CodeDeploy로 전환하려 한다. 애플리케이션은 RPM 패키지로 패키징되어 있으며, 배포 대상은 공통 AMI 기반 EC2 Auto Scaling 그룹이다. 요구 사항을 충족하기 위한 단계 조합을 묻는 문제이다.

[정답] : A, D

[설명]

A. 공통 AMI 새 버전을 만든 후 CodeDeploy 에이전트 설치 및 EC2 인스턴스 IAM 역할 업데이트 (정답)

B. RPM 배포 스크립트를 AppSpec 파일에 포함 (오답)

C. EC2 Image Builder를 파이프라인에 추가 (오답)

D. CodeDeploy에서 애플리케이션 생성, 인플레이스 배포, Auto Scaling 그룹 타겟 지정 후 CodePipeline에서 CodeDeploy 작업 사용 (정답)

E. Auto Scaling 그룹의 개별 EC2 인스턴스 대상 지정 (오답)

[주요 개념]

- CodeDeploy 에이전트 설치: 배포를 위해 EC2 인스턴스에 설치 필요
- AppSpec 파일: 배포 동작 정의, 권한/대상 설정 아님
- Auto Scaling 그룹 대상: 배포 대상 지정 시 확장성과 가용성 확보

[참조]

- AWS CodeDeploy 및 Auto Scaling 통합 공식 문서: [https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-auto-scaling.html)

---

[Q0008]

[문제요약]
보안팀은 모든 외부 ALB 및 Amazon API Gateway API에 AWS WAF 웹 ACL을 연결하도록 규정을 세웠다. 조직 내 일부 외부 ALB가 WAF 웹 ACL과 연결되지 않아 향후 위반 사례를 방지하는 솔루션을 설계해야 한다.

[정답] : A, C

[설명]

A. AWS Firewall Manager를 보안 계정에 위임 (정답)

B. Amazon GuardDuty를 보안 계정에 위임 (오답)

C. AWS Firewall Manager 정책을 생성하여 새 ALB/API Gateway에 WAF 웹 ACL 연결 (정답)

D. Amazon GuardDuty 정책을 생성하여 새 리소스에 WAF 웹 ACL 연결 (오답)

E. AWS Config 관리 규칙으로 새 리소스에 WAF 웹 ACL 연결 (오답)

[주요 개념]

- AWS Firewall Manager: 조직 전체 WAF 정책 중앙 관리
- AWS WAF 웹 ACL: HTTP(S) 트래픽 필터링, ALB/API Gateway에 연결 가능

[참조]

- AWS Firewall Manager 정책 및 WAF 웹 ACL 공식 문서: [https://docs.aws.amazon.com/waf/latest/developerguide/firewall-manager.html](https://docs.aws.amazon.com/waf/latest/developerguide/firewall-manager.html)

---

[Q0009]

[문제요약]
AWS KMS 키를 규제 준수 목적으로 수동 교체 중이다. 보안팀은 키가 90일 이상 교체되지 않은 경우 알림을 받고 싶다. 이를 자동으로 알림 받을 수 있는 솔루션을 묻는 문제이다.

[정답] : C

[설명]

A. KMS 자체 설정으로 SNS 알림 구성 (오답)
→ KMS는 키 기간 기준 SNS 알림 기능 제공하지 않는다.

B. EventBridge → Lambda → Trusted Advisor API (오답)
→ Trusted Advisor는 KMS 키 회전 모니터링에 적합하지 않다.

C. AWS Config 사용자 정의 규칙을 생성하여 90일 이상 교체되지 않은 키에 대해 SNS 알림 발송 (정답)
→ AWS Config는 사용자 정의 규칙으로 비준수 상태 감지 및 SNS 알림 가능.

D. AWS Security Hub 구성 (오답)
→ Security Hub는 KMS 키 회전 모니터링 기능 없음.

[주요 개념]

- AWS Config 사용자 정의 규칙은 리소스 속성 기반 조건을 적용해 비준수 상태 탐지 가능
- 탐지된 비준수 상태에 대해 SNS 알림 또는 자동 Remediation 트리거 가능

[참조]

- AWS Config 사용자 정의 규칙 공식 문서: [https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config\_develop-rules.html](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html)

---

[Q0010]

[문제요약]
보안 검토에서 AWS CodeBuild 프로젝트가 S3 버킷에서 데이터베이스 스크립트를 인증 없이 다운로드하도록 되어 있다. 인증되지 않은 S3 요청을 허용할 수 없으며, 가장 안전한 방식으로 수정해야 한다.

[정답] : C

[설명]

A. CodeBuild AllowedBuckets 설정만 추가 (오답)
→ 명시적 허용 버킷만으로 인증되지 않은 접근 제거 불가, 버킷 정책 필요.

B. S3에 HTTPS 기본 인증 + 토큰 (오답)
→ S3는 토큰 기반 기본 인증 옵션 없음.

C. 버킷 정책으로 인증되지 않은 접근 제거 + CodeBuild 서비스 역할에 S3 접근 권한 부여 (정답)
→ 익명/인터넷 공개 접근 제거, CodeBuild 역할에 필요한 권한 부여로 안전하게 접근 가능.

D. IAM 액세스 키/비밀 키로 CLI 접근 (오답)
→ 하드코딩된 키 사용은 보안상 위험.

[주요 개념]

- S3 버킷 정책: 인증되지 않은 접근 차단
- CodeBuild 서비스 역할: 빌드 시 필요한 AWS 리소스 접근 권한 제공

[참조]

- AWS CodeBuild와 IAM 역할 구성 개요 (공식 문서)\
  [https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam.html](https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam.html)
- Amazon S3 버킷 정책을 통한 인증 제어\
  [https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html)

---



