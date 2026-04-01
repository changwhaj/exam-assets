# AWS DOP-C02 DOP2 해설 (Q0001 ~ Q0010)


[Q0001]

[문제요약]
모바일 애플리케이션이 ALB를 통해 Lambda 기반 API를 호출한다. 모바일 앱 버전별 API 응답 코드 호출 횟수를 CloudWatch에서 모니터링하려 한다.

[정답] : A

[설명]
CloudWatch Logs에 기록된 Lambda 로그로 Metric Filter를 생성하면 로그 패턴 기반 사용자 정의 메트릭을 만들 수 있다.

---

[Q0002]

[문제요약]
Lambda 콜드 스타트로 지연이 발생하고 있으며 트래픽 변동이 큰 환경에서 성능과 비용을 모두 고려한 구성을 묻는다.

[정답] : C

[설명]
Provisioned Concurrency로 콜드 스타트를 제거하고 Application Auto Scaling으로 트래픽에 따라 자동 조정한다.

---

[Q0003]

[문제요약]
CodeDeploy 배포 그룹별로 애플리케이션 수정 없이 로그 레벨을 다르게 설정하려 한다.

[정답] : B

[설명]
CodeDeploy가 제공하는 DEPLOYMENT_GROUP_NAME 환경 변수를 활용하면 배포 그룹별 설정이 가능하다.

---

[Q0004]

[문제요약]
EBS 볼륨에 백업 태그 누락을 방지하고 최소 주 1회 백업을 자동 보장해야 한다.

[정답] : B

[설명]
AWS Config 관리형 규칙과 SSM Automation을 연계해 누락된 태그를 자동으로 보정한다.

---

[Q0005]

[문제요약]
Aurora 단일 인스턴스 환경에서 유지 관리 중 중단을 최소화해야 한다.

[정답] : A

[설명]
Aurora 리더 인스턴스를 추가해 읽기/쓰기 트래픽을 분리하고 가용성을 높인다.

---

[Q0006]

[문제요약]
계정 간 공유되는 모든 AMI를 암호화해야 한다.

[정답] : A, D, F

[설명]
AMI를 암호화해 복사한 뒤 KMS 권한을 위임하고 암호화된 AMI를 공유한다.

---

[Q0007]

[문제요약]
CodePipeline에서 배포 단계만 CodeDeploy로 전환하려 한다.

[정답] : A, D

[설명]
EC2에 CodeDeploy 에이전트를 설치하고 Auto Scaling 그룹을 배포 대상으로 설정한다.

---

[Q0008]

[문제요약]
외부 ALB와 API Gateway에 WAF 웹 ACL 연결을 강제해야 한다.

[정답] : A, C

[설명]
AWS Firewall Manager를 통해 조직 전체에 WAF 정책을 중앙에서 강제한다.

---

[Q0009]

[문제요약]
90일 이상 회전되지 않은 KMS 키를 자동으로 감지해 알림을 받고자 한다.

[정답] : C

[설명]
AWS Config 사용자 정의 규칙으로 키 회전 상태를 평가하고 SNS 알림을 연동한다.

---

[Q0010]

[문제요약]
CodeBuild가 인증 없이 S3 객체를 다운로드하고 있어 보안 개선이 필요하다.

[정답] : C

[설명]
S3 버킷 정책으로 익명 접근을 차단하고 CodeBuild 서비스 역할에 권한을 부여한다.
