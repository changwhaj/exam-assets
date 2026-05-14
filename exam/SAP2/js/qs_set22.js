window.QS_SET22 = [
  {
    n: 211,
    en: `A company wants to migrate to AWS. The company is running thousands of VMs in a VMware ESXi environment. The company has no configuration management database and has little knowledge about the utilization of the VMware portfolio.<br><br>A solutions architect must provide the company with an accurate inventory so that the company can plan for a cost-effective migration.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사는 AWS로 마이그레이션하려고 합니다. 이 회사는 VMware ESXi 환경에서 수천 개의 VM을 실행하고 있습니다. 회사에는 구성 관리 데이터베이스가 없으며 VMware 포트폴리오 활용에 대한 지식도 거의 없습니다.<br><br>솔루션 아키텍트는 회사가 비용 효율적인 마이그레이션을 계획할 수 있도록 정확한 인벤토리를 제공해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Use AWS Systems Manager Patch Manager to deploy Migration Evaluator to each VM. Review the collected data in Amazon QuickSight. Identify servers that have high utilization. Remove the servers that have high utilization from the migration list. Import the data to AWS Migration Hub.`, ko: `AWS Systems Manager Patch Manager를 사용하여 Migration Evaluator를 각 VM에 배포합니다. Amazon QuickSight에서 수집된 데이터를 검토합니다. 활용도가 높은 서버를 식별합니다. 활용도가 높은 서버를 마이그레이션 목록에서 제거합니다. 데이터를 AWS Migration Hub로 가져옵니다.` },
      { k: 'B', en: `Export the VMware portfolio to a .csv file. Check the disk utilization for each server. Remove servers that have high utilization. Export the data to AWS Application Migration Service. Use AWS Server Migration Service (AWS SMS) to migrate the remaining servers.`, ko: `VMware 포트폴리오를 .csv 파일로 내보냅니다. 각 서버의 디스크 활용도를 확인합니다. 활용도가 높은 서버를 제거합니다. 데이터를 AWS Application Migration Service로 내보냅니다. AWS Server Migration Service(AWS SMS)를 사용하여 나머지 서버를 마이그레이션합니다.` },
      { k: 'C', en: `Deploy the Migration Evaluator agentless collector to the ESXi hypervisor. Review the collected data in Migration Evaluator. Identify inactive servers. Remove the inactive servers from the migration list. Import the data to AWS Migration Hub.`, ko: `Migration Evaluator 에이전트 없는 수집기를 ESXi 하이퍼바이저에 배포합니다. Migration Evaluator에서 수집된 데이터를 검토합니다. 비활성 서버를 식별합니다. 비활성 서버를 마이그레이션 목록에서 제거합니다. 데이터를 AWS Migration Hub로 가져옵니다.` },
      { k: 'D', en: `Deploy the AWS Application Migration Service Agent to each VM. When the data is collected, use Amazon Redshift to import and analyze the data. Use Amazon QuickSight for data visualization.`, ko: `AWS Application Migration Service 에이전트를 각 VM에 배포합니다. 데이터가 수집되면 Amazon Redshift를 사용하여 데이터를 가져오고 분석합니다. 데이터 시각화를 위해 Amazon QuickSight를 사용합니다.` },
    ],
    answer: ['C'],
    vote: '100% C',
    explain: `<p><span class="mark-ok">✅ C — Migration Evaluator 에이전트 없는 수집기</span></p>
<p>AWS Migration Evaluator는 VMware ESXi 하이퍼바이저에 <strong>에이전트 없이(agentless)</strong> 배포할 수 있는 수집기를 제공합니다. 각 VM에 에이전트를 설치할 필요 없이 하이퍼바이저 레벨에서 수천 개의 VM 인벤토리와 활용도 데이터를 자동으로 수집합니다. 이는 운영 오버헤드를 최소화합니다.</p>
<p>수집된 데이터는 Migration Evaluator 콘솔에서 검토하여 비활성 서버를 식별하고 마이그레이션 범위를 최적화한 후 AWS Migration Hub로 가져와 통합 관리할 수 있습니다.</p>
<p><a href="https://aws.amazon.com/migration-evaluator/features/" target="_blank">AWS 공식 문서 - Migration Evaluator 기능</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Systems Manager Patch Manager는 각 VM에 에이전트를 배포해야 하므로 운영 오버헤드가 큽니다. 또한 Migration Evaluator를 각 VM에 배포하는 것은 에이전트 없는 방식보다 복잡합니다.</p>
<p><span class="mark-no">❌ B</span> — VMware 포트폴리오를 CSV로 수동 내보내기는 정확한 활용도 데이터를 수집하지 못하며, 회사가 VMware 포트폴리오에 대한 지식이 거의 없다는 전제에서 수동 작업이 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — Application Migration Service 에이전트를 수천 개 VM 각각에 배포하는 것은 매우 높은 운영 오버헤드를 발생시킵니다. 이는 인벤토리 수집이 아닌 실제 마이그레이션 단계에서 사용하는 도구입니다.</p>`,
    disc: [
      { ans: 'C (100%)', txt: 'Migration Evaluator의 에이전트 없는 수집기를 ESXi 하이퍼바이저에 배포하면 각 VM 에이전트 설치 없이 전체 포트폴리오 인벤토리를 자동 수집. 운영 오버헤드 최소화의 핵심.' }
    ]
  },
  {
    n: 212,
    en: `A company runs a microservice as an AWS Lambda function. The microservice writes data to an on-premises SQL database that supports a limited number of concurrent connections. When the number of Lambda function invocations is too high, the database crashes and causes application downtime. The company has an AWS Direct Connect connection between the company's VPC and the on-premises data center. The company wants to protect the database from crashes.<br><br>Which solution will meet these requirements?`,
    ko: `회사는 AWS Lambda 함수로 마이크로서비스를 실행합니다. 마이크로서비스는 제한된 수의 동시 연결을 지원하는 온프레미스 SQL 데이터베이스에 데이터를 씁니다. Lambda 함수 호출 수가 너무 많으면 데이터베이스가 충돌하고 애플리케이션 가동 중지 시간이 발생합니다. 회사는 VPC와 온프레미스 데이터 센터 간에 AWS Direct Connect 연결을 보유하고 있습니다. 회사는 충돌로부터 데이터베이스를 보호하려고 합니다.<br><br>어떤 솔루션이 이러한 요구 사항을 충족합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Write the data to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the Lambda function to read from the queue and write to the existing database. Set a reserved concurrency limit on the Lambda function that is less than the number of connections that the database supports.`, ko: `Amazon SQS 대기열에 데이터를 씁니다. 대기열에서 읽고 기존 데이터베이스에 쓰도록 Lambda 함수를 구성합니다. 데이터베이스가 지원하는 연결 수보다 적은 수로 Lambda 함수에 대해 예약된 동시성 제한을 설정합니다.` },
      { k: 'B', en: `Create a new Amazon Aurora Serverless DB cluster. Use AWS DataSync to migrate the data from the existing database to Aurora Serverless. Reconfigure the Lambda function to write to Aurora.`, ko: `새로운 Amazon Aurora Serverless DB 클러스터를 생성합니다. AWS DataSync를 사용하여 기존 데이터베이스의 데이터를 Aurora Serverless로 마이그레이션합니다. Aurora에 쓰도록 Lambda 함수를 재구성합니다.` },
      { k: 'C', en: `Create an Amazon RDS Proxy DB instance. Attach the RDS Proxy DB instance to the Amazon RDS DB instance. Reconfigure the Lambda function to write to the RDS Proxy DB instance.`, ko: `Amazon RDS 프록시 DB 인스턴스를 생성합니다. RDS 프록시 DB 인스턴스를 Amazon RDS DB 인스턴스에 연결합니다. RDS 프록시 DB 인스턴스에 쓰도록 Lambda 함수를 재구성합니다.` },
      { k: 'D', en: `Write the data to an Amazon Simple Notification Service (Amazon SNS) topic. Invoke the Lambda function to write to the existing database when the topic receives new messages. Configure provisioned concurrency for the Lambda function to be equal to the number of connections that the database supports.`, ko: `Amazon SNS 주제에 데이터를 씁니다. 주제가 새 메시지를 수신하면 Lambda 함수를 호출하여 기존 데이터베이스에 씁니다. 데이터베이스가 지원하는 연결 수와 동일하도록 Lambda 함수에 대한 프로비저닝된 동시성을 구성합니다.` },
    ],
    answer: ['A'],
    vote: '96% A',
    explain: `<p><span class="mark-ok">✅ A — SQS + Lambda 예약 동시성 제한</span></p>
<p>SQS 대기열이 Lambda와 온프레미스 DB 사이의 버퍼 역할을 합니다. Lambda 함수에 <strong>예약 동시성(Reserved Concurrency)</strong> 제한을 DB의 최대 허용 연결 수보다 낮게 설정하면, 동시에 실행되는 Lambda 인스턴스 수(= DB 연결 수)가 제한됩니다. 처리되지 못한 데이터는 SQS에 대기하며 유실되지 않습니다.</p>
<p>RDS Proxy는 온프레미스 데이터베이스가 아닌 <strong>Amazon RDS/Aurora 전용</strong>으로 온프레미스 SQL DB에는 사용할 수 없습니다.</p>
<p><a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-concurrency.html" target="_blank">AWS 공식 문서 - Lambda 동시성 관리</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — 데이터베이스를 Aurora Serverless로 마이그레이션하면 온프레미스 DB를 유지하지 않게 됩니다. 질문의 요구 사항은 기존 온프레미스 DB를 충돌로부터 보호하는 것입니다.</p>
<p><span class="mark-no">❌ C</span> — Amazon RDS Proxy는 <strong>Amazon RDS 및 Aurora에서만 동작</strong>합니다. 온프레미스 SQL 데이터베이스에는 적용할 수 없습니다.</p>
<p><span class="mark-no">❌ D</span> — SNS는 팬아웃(다수 구독자에게 메시지 전달) 용도이며, 메시지 지속성과 스로틀링 제어에 SQS만큼 적합하지 않습니다. 또한 프로비저닝된 동시성은 함수 호출 수를 줄이지 않고 오히려 항상 일정 수의 인스턴스를 준비 상태로 유지합니다.</p>`,
    disc: [
      { ans: 'A (96%)', txt: 'DB가 온프레미스이므로 RDS Proxy(C) 사용 불가. SQS 버퍼 + 예약 동시성 제한으로 DB 연결 수를 안전하게 제어. SNS(D)는 스로틀링 제어에 부적합.' }
    ]
  },
  {
    n: 213,
    en: `A company uses a Grafana data visualization solution that runs on a single Amazon EC2 instance to monitor the health of the company's AWS workloads. The company has invested time and effort to create dashboards that the company wants to preserve. The dashboards need to be highly available and cannot be down for longer than 10 minutes. The company needs to minimize ongoing maintenance.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사는 단일 Amazon EC2 인스턴스에서 실행되는 Grafana 데이터 시각화 솔루션을 사용하여 AWS 워크로드의 상태를 모니터링합니다. 회사는 보존하고 싶은 대시보드를 만들기 위해 시간과 노력을 투자했습니다. 대시보드는 가용성이 높아야 하며 10분 이상 종료될 수 없습니다. 회사는 지속적인 유지 관리를 최소화해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Migrate to Amazon CloudWatch dashboards. Recreate the dashboards to match the existing Grafana dashboards. Use automatic dashboards where possible.`, ko: `Amazon CloudWatch 대시보드로 마이그레이션합니다. 기존 Grafana 대시보드와 일치하도록 대시보드를 다시 만듭니다. 가능하면 자동 대시보드를 사용합니다.` },
      { k: 'B', en: `Create an Amazon Managed Grafana workspace. Configure a new Amazon CloudWatch data source. Export dashboards from the existing Grafana instance. Import the dashboards into the new workspace.`, ko: `Amazon Managed Grafana 작업 공간을 생성합니다. 새로운 Amazon CloudWatch 데이터 소스를 구성합니다. 기존 Grafana 인스턴스에서 대시보드를 내보냅니다. 대시보드를 새 작업 영역으로 가져옵니다.` },
      { k: 'C', en: `Create an AMI that has Grafana pre-installed. Store the existing dashboards in Amazon Elastic File System (Amazon EFS). Create an Auto Scaling group that uses the new AMI. Set the Auto Scaling group's minimum, desired, and maximum number of instances to one. Create an Application Load Balancer that serves at least two Availability Zones.`, ko: `Grafana가 사전 설치된 AMI를 생성합니다. Amazon EFS에 기존 대시보드를 저장합니다. 새 AMI를 사용하는 Auto Scaling 그룹을 생성합니다. Auto Scaling 그룹의 최소, 원하는, 최대 인스턴스 수를 1로 설정합니다. 2개 이상의 가용 영역을 제공하는 Application Load Balancer를 생성합니다.` },
      { k: 'D', en: `Configure AWS Backup to back up the EC2 instance that runs Grafana once each hour. Restore the EC2 instance from the most recent snapshot in an alternate Availability Zone when required.`, ko: `매 시간마다 Grafana를 실행하는 EC2 인스턴스를 백업하도록 AWS Backup을 구성합니다. 필요한 경우 대체 가용 영역의 최신 스냅샷에서 EC2 인스턴스를 복원합니다.` },
    ],
    answer: ['B'],
    vote: '93% B',
    explain: `<p><span class="mark-ok">✅ B — Amazon Managed Grafana</span></p>
<p>Amazon Managed Grafana는 Grafana를 완전 관리형 서비스로 제공합니다. 고가용성, 자동 확장, 패치, 업데이트 등 인프라 관리를 AWS가 처리하므로 운영 오버헤드가 최소화됩니다. 10분 이상 다운 없이 고가용성을 보장합니다.</p>
<p>기존 Grafana 인스턴스에서 대시보드를 JSON으로 내보내고 Amazon Managed Grafana 작업 공간으로 가져오면 <strong>기존 대시보드를 그대로 보존</strong>할 수 있습니다.</p>
<p><a href="https://aws.amazon.com/grafana/" target="_blank">AWS 공식 문서 - Amazon Managed Grafana</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — CloudWatch 대시보드는 Grafana와 기능이 다르며 기존 Grafana 대시보드를 완전히 재현할 수 없습니다. 대시보드를 처음부터 다시 만들어야 하므로 "보존"이라는 요구 사항에 위배됩니다.</p>
<p><span class="mark-no">❌ C</span> — AMI + ASG(최소 1) + ALB 구성은 운영 오버헤드가 크고, 최소 인스턴스 수를 1로 설정하면 완전한 고가용성을 보장하기 어렵습니다. 완전 관리형(B)보다 유지 관리 부담이 높습니다.</p>
<p><span class="mark-no">❌ D</span> — 시간별 백업 후 복원은 복구 시간이 10분 SLA를 초과할 수 있습니다. 또한 수동 복원 과정에서 운영 오버헤드가 발생합니다.</p>`,
    disc: [
      { ans: 'B (93%)', txt: 'Amazon Managed Grafana는 인프라 관리 불필요, 고가용성 기본 제공, 기존 대시보드 JSON 가져오기 지원. A는 대시보드 재작성 필요, C/D는 운영 오버헤드 과다.' }
    ]
  },
  {
    n: 214,
    en: `A company needs to migrate its customer transactions database from on premises to AWS. The database resides on an Oracle DB instance that runs on a Linux server. According to a new security requirement, the company must rotate the database password each year.<br><br>Which solution will meet these requirements with the LEAST operational overhead?`,
    ko: `회사는 고객 거래 데이터베이스를 온프레미스에서 AWS로 마이그레이션해야 합니다. 데이터베이스는 Linux 서버에서 실행되는 Oracle DB 인스턴스에 상주합니다. 새로운 보안 요구 사항에 따라 회사는 매년 데이터베이스 비밀번호를 교체해야 합니다.<br><br>최소한의 운영 오버헤드로 이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Convert the database to Amazon DynamoDB by using the AWS Schema Conversion Tool (AWS SCT). Store the password in AWS Systems Manager Parameter Store. Create an Amazon CloudWatch alarm to invoke an AWS Lambda function for yearly password rotation.`, ko: `AWS SCT를 사용하여 데이터베이스를 Amazon DynamoDB로 변환합니다. AWS Systems Manager Parameter Store에 암호를 저장합니다. 연간 암호 교체를 위해 AWS Lambda 함수를 호출하는 Amazon CloudWatch 경보를 생성합니다.` },
      { k: 'B', en: `Migrate the database to Amazon RDS for Oracle. Store the password in AWS Secrets Manager. Turn on automatic rotation. Configure a yearly rotation schedule.`, ko: `데이터베이스를 Amazon RDS for Oracle로 마이그레이션합니다. AWS Secrets Manager에 비밀번호를 저장합니다. 자동 교체를 켭니다. 연간 교체 일정을 구성합니다.` },
      { k: 'C', en: `Migrate the database to an Amazon EC2 instance. Use AWS Systems Manager Parameter Store to keep and rotate the connection string by using an AWS Lambda function on a yearly schedule.`, ko: `데이터베이스를 Amazon EC2 인스턴스로 마이그레이션합니다. AWS Systems Manager Parameter Store를 사용하여 연간 일정에 따라 AWS Lambda 함수를 사용하여 연결 문자열을 유지하고 교체합니다.` },
      { k: 'D', en: `Migrate the database to Amazon Neptune by using the AWS Schema Conversion Tool (AWS SCT). Create an Amazon CloudWatch alarm to invoke an AWS Lambda function for yearly password rotation.`, ko: `AWS SCT를 사용하여 데이터베이스를 Amazon Neptune으로 마이그레이션합니다. 연간 암호 교체를 위해 AWS Lambda 함수를 호출하는 Amazon CloudWatch 경보를 생성합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — Amazon RDS for Oracle + Secrets Manager 자동 교체</span></p>
<p>Oracle 데이터베이스를 <strong>Amazon RDS for Oracle</strong>로 마이그레이션하면 완전 관리형 서비스로 운영 오버헤드를 줄입니다. AWS Secrets Manager는 RDS for Oracle과 네이티브 통합되어 <strong>자동 비밀번호 교체(rotation)</strong>를 기본 제공합니다. 교체 일정을 설정하면 Lambda 함수와 복잡한 스크립트 없이 완전 자동으로 연간 교체가 이루어집니다.</p>
<p><a href="https://aws.amazon.com/blogs/security/how-to-use-aws-secrets-manager-rotate-credentials-amazon-rds-database-types-oracle/" target="_blank">AWS 공식 블로그 - Secrets Manager로 RDS Oracle 자격 증명 교체</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Oracle 관계형 DB를 DynamoDB(NoSQL)로 변환하는 것은 대규모 애플리케이션 재작성을 요구합니다. Parameter Store는 자동 교체 기능이 없어 Lambda를 직접 구현해야 합니다.</p>
<p><span class="mark-no">❌ C</span> — EC2에서 Oracle을 직접 운영하는 것은 완전 관리형(RDS)보다 운영 오버헤드가 훨씬 큽니다. Parameter Store도 자동 교체 기능이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — Neptune은 그래프 데이터베이스로 Oracle 관계형 DB를 Neptune으로 마이그레이션하는 것은 전면적인 데이터 모델 재설계가 필요합니다. 잘못된 마이그레이션 대상입니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: 'RDS for Oracle + Secrets Manager 자동 교체가 운영 오버헤드 최소화의 정답. Parameter Store는 자동 교체 미지원. A는 NoSQL 전환 부적절, D는 Neptune이 관계형 DB 대체 불가.' }
    ]
  },
  {
    n: 215,
    en: `A solutions architect is designing an AWS account structure for a company that consists of multiple teams. All the teams will work in the same AWS Region. The company needs a VPC that is connected to the on-premises network. The company expects less than 50 Mbps of total traffic to and from the on-premises network.<br><br>Which combination of steps will meet these requirements MOST cost-effectively? (Choose two.)`,
    ko: `솔루션 아키텍트는 여러 팀으로 구성된 회사의 AWS 계정 구조를 설계하고 있습니다. 모든 팀은 동일한 AWS 리전에서 작업합니다. 회사에는 온프레미스 네트워크에 연결된 VPC가 필요합니다. 회사에서는 온프레미스 네트워크를 오가는 총 트래픽이 50Mbps 미만일 것으로 예상합니다.<br><br>이러한 요구 사항을 가장 비용 효율적으로 충족하는 단계 조합은 무엇입니까? (2개를 선택하세요.)`,
    type: 'multi',
    multiCount: 2,
    choices: [
      { k: 'A', en: `Create an AWS CloudFormation template that provisions a VPC and the required subnets. Deploy the template to each AWS account.`, ko: `VPC와 필수 서브넷을 프로비저닝하는 AWS CloudFormation 템플릿을 생성합니다. 각 AWS 계정에 템플릿을 배포합니다.` },
      { k: 'B', en: `Create an AWS CloudFormation template that provisions a VPC and the required subnets. Deploy the template to a shared services account. Share the subnets by using AWS Resource Access Manager.`, ko: `VPC와 필수 서브넷을 프로비저닝하는 AWS CloudFormation 템플릿을 생성합니다. 공유 서비스 계정에 템플릿을 배포합니다. AWS Resource Access Manager를 사용하여 서브넷을 공유합니다.` },
      { k: 'C', en: `Use AWS Transit Gateway along with an AWS Site-to-Site VPN for connectivity to the on-premises network. Share the transit gateway by using AWS Resource Access Manager.`, ko: `온프레미스 네트워크에 연결하려면 AWS Site-to-Site VPN과 함께 AWS Transit Gateway를 사용합니다. AWS Resource Access Manager를 사용하여 Transit Gateway를 공유합니다.` },
      { k: 'D', en: `Use AWS Site-to-Site VPN for connectivity to the on-premises network.`, ko: `온프레미스 네트워크에 연결하려면 AWS Site-to-Site VPN을 사용합니다.` },
      { k: 'E', en: `Use AWS Direct Connect for connectivity to the on-premises network.`, ko: `온프레미스 네트워크에 연결하려면 AWS Direct Connect를 사용합니다.` },
    ],
    answer: ['B', 'D'],
    vote: '70% BD',
    explain: `<p><span class="mark-ok">✅ B — 공유 서비스 계정에 단일 VPC + RAM으로 서브넷 공유</span></p>
<p>공유 서비스 계정에 VPC를 하나만 생성하고 AWS Resource Access Manager(RAM)를 통해 서브넷을 다른 팀 계정과 공유하면 VPC 비용을 절감하고 네트워크 구성을 중앙에서 관리할 수 있습니다. 각 계정에 별도 VPC를 생성하는 것보다 훨씬 비용 효율적입니다.</p>
<p><span class="mark-ok">✅ D — AWS Site-to-Site VPN (50Mbps 미만 트래픽)</span></p>
<p>총 트래픽이 50Mbps 미만으로 예상될 때는 Site-to-Site VPN이 Direct Connect보다 훨씬 비용 효율적입니다. Direct Connect는 최소 1Gbps 전용 회선으로 소량 트래픽에는 과잉 투자입니다. Transit Gateway(C)는 VPC 간 라우팅 목적이며 단일 VPC 환경에서는 불필요한 추가 비용입니다.</p>
<p><a href="https://docs.aws.amazon.com/ram/latest/userguide/shareable.html" target="_blank">AWS 공식 문서 - RAM 공유 가능 리소스</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 각 AWS 계정에 별도 VPC를 배포하면 계정당 VPN 연결이 필요하고 비용과 관리 복잡성이 증가합니다. 공유 VPC(B)보다 비용 비효율적입니다.</p>
<p><span class="mark-no">❌ C</span> — Transit Gateway는 다수의 VPC를 연결하는 허브 역할을 합니다. 단일 공유 VPC를 사용하는 이 설계에서는 Transit Gateway가 불필요하며 추가 비용(시간당 요금 + 데이터 처리 요금)이 발생합니다.</p>
<p><span class="mark-no">❌ E</span> — Direct Connect는 1Gbps 이상의 전용 회선으로 50Mbps 미만 트래픽에는 심각한 과잉 투자입니다. VPN보다 훨씬 비용이 높습니다.</p>`,
    disc: [
      { ans: 'BD (70%)', txt: '단일 VPC + RAM 서브넷 공유로 비용 절감(B). 50Mbps 미만은 Site-to-Site VPN이 Direct Connect보다 비용 효율적(D). TGW는 단일 VPC 환경에서 불필요(C 탈락).' }
    ]
  },
  {
    n: 216,
    en: `A solutions architect at a large company needs to set up network security for outbound traffic to the internet from all AWS accounts within an organization in AWS Organizations. The organization has more than 100 AWS accounts, and the accounts route to each other by using a centralized AWS Transit Gateway. Each account has both an internet gateway and a NAT gateway for outbound traffic to the internet. The company deploys resources only into a single AWS Region.<br><br>The company needs the ability to add centrally managed rule-based filtering on all outbound traffic to the internet for all AWS accounts in the organization. The peak load of outbound traffic will not exceed 25 Gbps in each Availability Zone.<br><br>Which solution meets these requirements?`,
    ko: `대기업의 솔루션 아키텍트는 AWS Organizations 내 모든 AWS 계정에서 인터넷으로의 아웃바운드 트래픽에 대한 네트워크 보안을 설정해야 합니다. 조직에는 100개 이상의 AWS 계정이 있으며, 계정은 중앙 집중식 AWS Transit Gateway를 사용하여 서로 라우팅됩니다. 각 계정에는 인터넷으로의 아웃바운드 트래픽을 위한 인터넷 게이트웨이와 NAT 게이트웨이가 모두 있습니다. 회사는 단일 AWS 리전에만 리소스를 배포합니다.<br><br>회사는 조직 내 모든 AWS 계정에 대해 인터넷으로의 모든 아웃바운드 트래픽에 대해 중앙에서 관리되는 규칙 기반 필터링을 추가할 수 있는 기능이 필요합니다. 아웃바운드 트래픽의 최대 로드는 각 가용 영역에서 25Gbps를 초과하지 않습니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC. Configure a new NAT gateway. Create an Auto Scaling group of Amazon EC2 instances that run an open-source internet proxy for rule-based filtering across all Availability Zones in the Region. Modify all default routes to point to the proxy's Auto Scaling group.`, ko: `인터넷으로의 아웃바운드 트래픽을 위한 새 VPC를 생성합니다. 기존 Transit Gateway를 새 VPC에 연결합니다. 새 NAT 게이트웨이를 구성합니다. 리전의 모든 가용 영역에서 규칙 기반 필터링을 위해 오픈 소스 인터넷 프록시를 실행하는 Amazon EC2 인스턴스의 Auto Scaling 그룹을 생성합니다. 프록시의 Auto Scaling 그룹을 가리키도록 모든 기본 경로를 수정합니다.` },
      { k: 'B', en: `Create a new VPC for outbound traffic to the internet. Connect the existing transit gateway to the new VPC. Configure a new NAT gateway. Use an AWS Network Firewall firewall for rule-based filtering. Create Network Firewall endpoints in each Availability Zone. Modify all default routes to point to the Network Firewall endpoints.`, ko: `인터넷으로의 아웃바운드 트래픽을 위한 새 VPC를 생성합니다. 기존 Transit Gateway를 새 VPC에 연결합니다. 새 NAT 게이트웨이를 구성합니다. 규칙 기반 필터링에는 AWS 네트워크 방화벽을 사용합니다. 각 가용 영역에 네트워크 방화벽 엔드포인트를 생성합니다. 네트워크 방화벽 엔드포인트를 가리키도록 모든 기본 경로를 수정합니다.` },
      { k: 'C', en: `Create an AWS Network Firewall firewall for rule-based filtering in each AWS account. Modify all default routes to point to the Network Firewall firewalls in each account.`, ko: `각 AWS 계정에서 규칙 기반 필터링을 위한 AWS 네트워크 방화벽을 생성합니다. 각 계정의 네트워크 방화벽을 가리키도록 모든 기본 경로를 수정합니다.` },
      { k: 'D', en: `In each AWS account, create an Auto Scaling group of network-optimized Amazon EC2 instances that run an open-source internet proxy for rule-based filtering. Modify all default routes to point to the proxy's Auto Scaling group.`, ko: `각 AWS 계정에서 규칙 기반 필터링을 위해 오픈 소스 인터넷 프록시를 실행하는 네트워크 최적화 Amazon EC2 인스턴스의 Auto Scaling 그룹을 생성합니다. 프록시의 Auto Scaling 그룹을 가리키도록 모든 기본 경로를 수정합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — 중앙 집중식 인터넷 출구 VPC + AWS Network Firewall</span></p>
<p>중앙 출구(egress) VPC를 생성하고 Transit Gateway에 연결하면 모든 계정의 아웃바운드 트래픽이 이 VPC를 통해 집중됩니다. <strong>AWS Network Firewall</strong>은 완전 관리형 상태 저장 방화벽으로 도메인 이름 필터링, 침입 감지 등 규칙 기반 필터링을 지원합니다. 각 가용 영역에 방화벽 엔드포인트를 배포하여 최대 100Gbps 처리량을 지원하므로 25Gbps 요건을 충족합니다.</p>
<p><a href="https://docs.aws.amazon.com/whitepapers/latest/building-scalable-secure-multi-vpc-network-infrastructure/using-nat-gateway-with-firewall.html" target="_blank">AWS 공식 문서 - NAT Gateway와 Network Firewall 사용</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — 오픈 소스 프록시를 EC2로 운영하면 타사 소프트웨어 패치·관리 등 운영 오버헤드가 큽니다. AWS 관리형 서비스(Network Firewall)보다 안정성이 낮습니다.</p>
<p><span class="mark-no">❌ C</span> — 각 계정마다 별도 네트워크 방화벽을 생성하는 것은 <strong>중앙 집중식 관리</strong>라는 요구 사항에 위배됩니다. 100개 계정에 개별 방화벽을 설정하면 정책 일관성 유지가 어렵습니다.</p>
<p><span class="mark-no">❌ D</span> — 각 계정에서 EC2 프록시를 운영하는 것은 분산 관리로 중앙 집중식 필터링 요구 사항에 위배되고, 운영 오버헤드도 매우 큽니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '중앙 집중식 관리가 핵심 요구 사항 → 각 계정별(C/D)은 탈락. 중앙 출구 VPC + Network Firewall(B)이 완전 관리형으로 규칙 기반 필터링 제공. EC2 프록시(A)는 운영 오버헤드 과다.' }
    ]
  },
  {
    n: 217,
    en: `A company uses a load balancer to distribute traffic to Amazon EC2 instances in a single Availability Zone. The company is concerned about security and wants a solutions architect to re-architect the solution to meet the following requirements:<br><br>• Inbound requests must be filtered for common vulnerability attacks.<br>• Rejected requests must be sent to a third-party auditing application.<br>• All resources should be highly available.<br><br>Which solution meets these requirements?`,
    ko: `회사는 로드 밸런서를 사용하여 단일 가용 영역의 Amazon EC2 인스턴스에 트래픽을 분산합니다. 회사는 보안에 대해 우려하고 있으며 솔루션 아키텍트가 다음 요구 사항을 충족하도록 솔루션을 다시 설계하기를 원합니다.<br><br>• 일반적인 취약성 공격에 대해 인바운드 요청을 필터링해야 합니다.<br>• 거부된 요청은 타사 감사 애플리케이션으로 전송되어야 합니다.<br>• 모든 리소스는 가용성이 높아야 합니다.<br><br>이러한 요구 사항을 충족하는 솔루션은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Configure a Multi-AZ Auto Scaling group using the application's AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Use Amazon Inspector to monitor traffic to the ALB and EC2 instances. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB. Use an AWS Lambda function to frequently push the Amazon Inspector report to the third-party auditing application.`, ko: `애플리케이션의 AMI를 사용하여 다중 AZ Auto Scaling 그룹을 구성합니다. ALB를 생성하고 Auto Scaling 그룹을 대상으로 선택합니다. Amazon Inspector를 사용하여 ALB 및 EC2 인스턴스에 대한 트래픽을 모니터링합니다. WAF에서 웹 ACL을 생성합니다. 웹 ACL 및 ALB를 사용하여 AWS WAF를 생성합니다. Lambda 함수를 사용하여 Amazon Inspector 보고서를 타사 감사 애플리케이션에 자주 푸시합니다.` },
      { k: 'B', en: `Configure an Application Load Balancer (ALB) and add the EC2 instances as targets. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB name and enable logging with Amazon CloudWatch Logs. Use an AWS Lambda function to frequently push the logs to the third-party auditing application.`, ko: `ALB를 구성하고 EC2 인스턴스를 대상으로 추가합니다. WAF에서 웹 ACL을 생성합니다. 웹 ACL 및 ALB 이름을 사용하여 AWS WAF를 생성하고 Amazon CloudWatch Logs로 로깅을 활성화합니다. Lambda 함수를 사용하여 로그를 타사 감사 애플리케이션에 자주 푸시합니다.` },
      { k: 'C', en: `Configure an Application Load Balancer (ALB) along with a target group adding the EC2 instances as targets. Create an Amazon Kinesis Data Firehose with the destination of the third-party auditing application. Create a web ACL in WAF. Create an AWS WAF using the web ACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.`, ko: `ALB와 대상 그룹을 구성하고 EC2 인스턴스를 대상으로 추가합니다. 타사 감사 애플리케이션을 대상으로 하는 Amazon Kinesis Data Firehose를 생성합니다. WAF에서 웹 ACL을 생성합니다. 웹 ACL 및 ALB를 사용하여 AWS WAF를 생성한 다음 Kinesis Data Firehose를 대상으로 선택하여 로깅을 활성화합니다. AWS Marketplace에서 AWS 관리형 규칙을 구독하고 WAF를 구독자로 선택합니다.` },
      { k: 'D', en: `Configure a Multi-AZ Auto Scaling group using the application's AMI. Create an Application Load Balancer (ALB) and select the previously created Auto Scaling group as the target. Create an Amazon Kinesis Data Firehose with a destination of the third-party auditing application. Create a web ACL in WAF. Create an AWS WAF using the WebACL and ALB then enable logging by selecting the Kinesis Data Firehose as the destination. Subscribe to AWS Managed Rules in AWS Marketplace, choosing the WAF as the subscriber.`, ko: `애플리케이션의 AMI를 사용하여 다중 AZ Auto Scaling 그룹을 구성합니다. ALB를 생성하고 Auto Scaling 그룹을 대상으로 선택합니다. 타사 감사 애플리케이션을 대상으로 하는 Amazon Kinesis Data Firehose를 생성합니다. WAF에서 웹 ACL을 생성합니다. WebACL 및 ALB를 사용하여 AWS WAF를 생성한 다음 Kinesis Data Firehose를 대상으로 선택하여 로깅을 활성화합니다. AWS Marketplace에서 AWS 관리형 규칙을 구독하고 WAF를 구독자로 선택합니다.` },
    ],
    answer: ['D'],
    vote: '77% D',
    explain: `<p><span class="mark-ok">✅ D — Multi-AZ ASG + ALB + WAF + Kinesis Data Firehose</span></p>
<p><strong>고가용성:</strong> 다중 AZ Auto Scaling 그룹이 EC2 인스턴스의 고가용성을 보장합니다.</p>
<p><strong>취약성 공격 필터링:</strong> AWS WAF에 AWS 관리형 규칙(Managed Rules)을 구독하면 OWASP Top 10 등 일반적인 취약성 공격을 자동으로 필터링합니다.</p>
<p><strong>거부된 요청 전송:</strong> AWS WAF는 Kinesis Data Firehose를 로깅 대상으로 직접 지원합니다. Firehose를 타사 감사 애플리케이션으로 전달하도록 구성하면 거부된 요청 로그가 실시간으로 전송됩니다.</p>
<p><a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging-kinesis.html" target="_blank">AWS 공식 문서 - WAF Kinesis 로깅</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Amazon Inspector는 <strong>EC2 인스턴스의 소프트웨어 취약성 스캔</strong> 도구이지, 인바운드 웹 트래픽을 실시간 필터링하는 도구가 아닙니다. WAF가 그 역할을 합니다.</p>
<p><span class="mark-no">❌ B</span> — ALB를 단일 AZ 구성으로 추가하면 고가용성 요구 사항을 충족하지 못합니다. 또한 CloudWatch Logs로의 WAF 로깅 후 Lambda로 타사 전송하는 방식은 D의 Kinesis 직접 통합보다 복잡합니다.</p>
<p><span class="mark-no">❌ C</span> — C는 D와 유사하지만 <strong>Multi-AZ Auto Scaling 그룹이 없어 고가용성 요구 사항을 충족하지 못합니다.</strong></p>`,
    disc: [
      { ans: 'D (77%)', txt: 'A는 Inspector가 인바운드 트래픽 필터링 도구가 아님. B와 C는 고가용성(Multi-AZ ASG) 부재. D만이 HA + WAF 취약성 필터링 + Kinesis Firehose로 감사 앱 전송 모두 충족.' }
    ]
  },
  {
    n: 218,
    en: `A company is running an application in the AWS Cloud. The application consists of microservices that run on a fleet of Amazon EC2 instances in multiple Availability Zones behind an Application Load Balancer. The company recently added a new REST API that was implemented in Amazon API Gateway. Some of the older microservices that run on EC2 instances need to call this new API.<br><br>The company does not want the API to be accessible from the public internet and does not want proprietary data to traverse the public internet.<br><br>What should a solutions architect do to meet these requirements?`,
    ko: `회사는 AWS 클라우드에서 애플리케이션을 실행하고 있습니다. 애플리케이션은 ALB 뒤의 여러 가용 영역에 있는 Amazon EC2 인스턴스 집합에서 실행되는 마이크로서비스로 구성됩니다. 이 회사는 최근 Amazon API Gateway에 구현된 새로운 REST API를 추가했습니다. EC2 인스턴스에서 실행되는 일부 이전 마이크로서비스는 이 새로운 API를 호출해야 합니다.<br><br>회사는 공용 인터넷에서 API에 액세스하는 것을 원하지 않으며 독점 데이터가 공용 인터넷을 통과하는 것을 원하지 않습니다.<br><br>솔루션 아키텍트는 이러한 요구 사항을 충족하기 위해 무엇을 해야 합니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Create an AWS Site-to-Site VPN connection between the VPC and the API Gateway. Use API Gateway to generate a unique API Key for each microservice. Configure the API methods to require the key.`, ko: `VPC와 API 게이트웨이 사이에 AWS Site-to-Site VPN 연결을 생성합니다. API 게이트웨이를 사용하여 각 마이크로서비스에 대한 고유한 API 키를 생성합니다. 키를 요구하도록 API 메서드를 구성합니다.` },
      { k: 'B', en: `Create an interface VPC endpoint for API Gateway, and set an endpoint policy to only allow access to the specific API. Add a resource policy to API Gateway to only allow access from the VPC endpoint. Change the API Gateway endpoint type to private.`, ko: `API 게이트웨이용 인터페이스 VPC 엔드포인트를 생성하고 특정 API에 대한 액세스만 허용하도록 엔드포인트 정책을 설정합니다. VPC 엔드포인트에서의 액세스만 허용하도록 API 게이트웨이에 리소스 정책을 추가합니다. API 게이트웨이 엔드포인트 유형을 프라이빗으로 변경합니다.` },
      { k: 'C', en: `Modify the API Gateway to use IAM authentication. Update the IAM policy for the IAM role that is assigned to the EC2 instances to allow access to the API Gateway. Move the API Gateway into a new VPC. Deploy a transit gateway and connect the VPCs.`, ko: `IAM 인증을 사용하도록 API 게이트웨이를 수정합니다. API 게이트웨이에 대한 액세스를 허용하도록 EC2 인스턴스에 할당된 IAM 역할에 대한 IAM 정책을 업데이트합니다. API 게이트웨이를 새 VPC로 이동하고 Transit Gateway를 배포하여 VPC를 연결합니다.` },
      { k: 'D', en: `Create an accelerator in AWS Global Accelerator, and connect the accelerator to the API Gateway. Update the route table for all VPC subnets with a route to the created Global Accelerator endpoint IP address. Add an API key for each service to use for authentication.`, ko: `AWS Global Accelerator에서 액셀러레이터를 생성하고 API 게이트웨이에 연결합니다. 생성된 Global Accelerator 엔드포인트 IP 주소에 대한 경로를 사용하여 모든 VPC 서브넷의 라우팅 테이블을 업데이트합니다. 인증에 사용할 서비스별로 API 키를 추가합니다.` },
    ],
    answer: ['B'],
    vote: '100% B',
    explain: `<p><span class="mark-ok">✅ B — API Gateway 인터페이스 VPC 엔드포인트 + 프라이빗 엔드포인트 유형</span></p>
<p>인터페이스 VPC 엔드포인트(AWS PrivateLink)를 API Gateway 서비스에 생성하면 EC2 인스턴스에서 API Gateway로의 트래픽이 <strong>공용 인터넷을 거치지 않고 AWS 내부 네트워크</strong>를 통해 이동합니다.</p>
<p>API Gateway의 엔드포인트 유형을 <strong>프라이빗(Private)</strong>으로 변경하면 VPC 엔드포인트를 통해서만 접근 가능하게 됩니다. 엔드포인트 정책과 리소스 정책을 조합하여 특정 API와 VPC 엔드포인트만 허용하는 세밀한 접근 제어를 구현합니다.</p>
<p><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html" target="_blank">AWS 공식 문서 - API Gateway 프라이빗 API</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — Site-to-Site VPN은 온프레미스와 AWS 간 연결에 사용합니다. 동일 AWS 계정 내 VPC에서 API Gateway로의 연결에는 VPN이 불필요하며, API 키는 데이터가 인터넷을 통과하는 문제를 해결하지 못합니다.</p>
<p><span class="mark-no">❌ C</span> — API Gateway를 "새 VPC로 이동"하는 것은 불가능합니다. API Gateway는 VPC 내 리소스가 아닙니다. Transit Gateway도 이 시나리오에서 불필요합니다.</p>
<p><span class="mark-no">❌ D</span> — Global Accelerator는 인터넷을 통한 성능 개선 서비스로 인터넷 트래픽을 제거하는 것이 아닙니다. 데이터가 여전히 공용 인터넷을 통과합니다.</p>`,
    disc: [
      { ans: 'B (100%)', txt: '"인터넷 통과 방지" 키워드 → VPC 엔드포인트. API Gateway 인터페이스 엔드포인트 + 프라이빗 API 유형 변경으로 데이터가 AWS 내부 네트워크만 경유.' }
    ]
  },
  {
    n: 219,
    en: `A company has set up its entire infrastructure on AWS. The company uses Amazon EC2 instances to host its ecommerce website and uses Amazon S3 to store static data. Three engineers at the company handle the cloud administration and development through one AWS account. Occasionally, an engineer alters an EC2 security group configuration of another engineer and causes noncompliance issues in the environment.<br><br>A solutions architect must set up a system that tracks changes that the engineers make. The system must send alerts when the engineers make noncompliant changes to the security settings for the EC2 instances.<br><br>What is the FASTEST way for the solutions architect to meet these requirements?`,
    ko: `회사에 AWS에 전체 인프라가 설정되어 있습니다. 회사는 Amazon EC2 인스턴스를 사용하여 전자상거래 웹사이트를 호스팅하고 Amazon S3를 사용하여 정적 데이터를 저장합니다. 회사의 엔지니어 3명이 하나의 AWS 계정을 통해 클라우드 관리 및 개발을 처리합니다. 때때로 엔지니어가 다른 엔지니어의 EC2 보안 그룹 구성을 변경하여 환경에 규정 준수 문제가 발생하는 경우가 있습니다.<br><br>솔루션 아키텍트는 엔지니어의 변경 사항을 추적하는 시스템을 설정해야 합니다. 엔지니어가 EC2 인스턴스의 보안 설정을 비준수로 변경하면 시스템에서 경고를 보내야 합니다.<br><br>솔루션 아키텍트가 이러한 요구 사항을 충족하는 가장 빠른 방법은 무엇입니까?`,
    type: 'single',
    choices: [
      { k: 'A', en: `Set up AWS Organizations for the company. Apply SCPs to govern and track noncompliant security group changes that are made to the AWS account.`, ko: `회사를 위한 AWS Organizations를 설정합니다. SCP를 적용하여 AWS 계정에 대한 비준수 보안 그룹 변경 사항을 관리하고 추적합니다.` },
      { k: 'B', en: `Enable AWS CloudTrail to capture the changes to EC2 security groups. Enable Amazon CloudWatch rules to provide alerts when noncompliant security settings are detected.`, ko: `AWS CloudTrail을 활성화하여 EC2 보안 그룹에 대한 변경 사항을 캡처합니다. 비준수 보안 설정이 감지되면 알림을 제공하도록 Amazon CloudWatch 규칙을 활성화합니다.` },
      { k: 'C', en: `Enable SCPs on the AWS account to provide alerts when noncompliant security group changes are made to the environment.`, ko: `환경에 비준수 보안 그룹 변경이 있을 때 경고를 제공하도록 AWS 계정의 SCP를 활성화합니다.` },
      { k: 'D', en: `Enable AWS Config on the EC2 security groups to track any noncompliant changes. Send the changes as alerts through an Amazon Simple Notification Service (Amazon SNS) topic.`, ko: `EC2 보안 그룹에서 AWS Config를 활성화하여 비준수 변경 사항을 추적합니다. Amazon SNS 주제를 통해 변경 사항을 알림으로 보냅니다.` },
    ],
    answer: ['D'],
    vote: '86% D',
    explain: `<p><span class="mark-ok">✅ D — AWS Config + SNS 알림</span></p>
<p>AWS Config를 EC2 보안 그룹에 활성화하면 구성 변경 사항을 지속적으로 추적하고, 기준(desired state)과 비교하여 <strong>비준수(noncompliant) 여부를 자동으로 평가</strong>합니다. Config 규칙을 사용하면 보안 그룹의 비준수 변경을 탐지하여 SNS 주제를 통해 즉시 알림을 전송할 수 있습니다.</p>
<p>별도의 Organizations 설정이나 복잡한 구성 없이 기존 계정에서 빠르게 활성화할 수 있어 <strong>가장 빠른(FASTEST)</strong> 구현 방법입니다.</p>
<p><a href="https://docs.aws.amazon.com/config/latest/developerguide/notifications-for-AWS-Config.html" target="_blank">AWS 공식 문서 - AWS Config 알림</a></p>`,
    wrong: `<p><span class="mark-no">❌ A</span> — AWS Organizations 설정은 추가적인 계정 구조 재편이 필요하며 시간이 걸립니다. SCP는 변경을 예방하는 도구이지 변경 사항 추적과 알림 발송 도구가 아닙니다.</p>
<p><span class="mark-no">❌ B</span> — CloudTrail은 API 호출을 기록하지만, <strong>비준수 여부를 자동 평가하거나 SNS로 직접 알림을 전송하는 기능이 없습니다.</strong> CloudWatch 메트릭 필터를 별도로 구성해야 하는 추가 작업이 필요합니다.</p>
<p><span class="mark-no">❌ C</span> — SCP는 단일 계정 레벨에서 적용되지 않으며(Organizations 필요), 알림 기능을 제공하지 않습니다.</p>`,
    disc: [
      { ans: 'D (86%)', txt: 'AWS Config는 비준수 감지 + SNS 알림을 몇 분 내에 구성 가능한 가장 빠른 방법. CloudTrail(B)은 변경 추적은 가능하나 비준수 판단 및 알림 자동화 기능 없음.' }
    ]
  },
  {
    n: 220,
    en: `A company has IoT sensors that monitor traffic patterns throughout a large city. The company wants to read and collect data from the sensors and perform aggregations on the data.<br><br>A solutions architect designs a solution in which the IoT devices are streaming to Amazon Kinesis Data Streams. Several applications are reading from the stream. However, several consumers are experiencing throttling and are periodically encountering a ReadProvisionedThroughputExceeded error.<br><br>Which actions should the solutions architect take to resolve this issue? (Choose three.)`,
    ko: `회사에는 대도시 전체의 교통 패턴을 모니터링하는 IoT 센서가 있습니다. 회사는 센서에서 데이터를 읽고 수집하고 데이터 집계를 수행하려고 합니다.<br><br>솔루션 아키텍트는 IoT 장치가 Amazon Kinesis Data Streams로 스트리밍되는 솔루션을 설계합니다. 여러 애플리케이션이 스트림에서 읽고 있습니다. 그러나 여러 소비자가 스로틀링을 겪고 있으며 정기적으로 ReadProvisionedThroughputExceeded 오류가 발생하고 있습니다.<br><br>이 문제를 해결하기 위해 솔루션 아키텍트는 어떤 조치를 취해야 합니까? (3개를 선택하세요.)`,
    type: 'multi',
    multiCount: 3,
    choices: [
      { k: 'A', en: `Reshard the stream to increase the number of shards in the stream.`, ko: `스트림을 다시 샤딩하여 스트림의 샤드 수를 늘립니다.` },
      { k: 'B', en: `Use the Kinesis Producer Library (KPL). Adjust the polling frequency.`, ko: `KPL(Kinesis 생산자 라이브러리)을 사용합니다. 폴링 빈도를 조정합니다.` },
      { k: 'C', en: `Use consumers with the enhanced fan-out feature.`, ko: `향상된 팬아웃 기능을 갖춘 소비자를 사용합니다.` },
      { k: 'D', en: `Reshard the stream to reduce the number of shards in the stream.`, ko: `스트림을 다시 샤딩하여 스트림의 샤드 수를 줄입니다.` },
      { k: 'E', en: `Use an error retry and exponential backoff mechanism in the consumer logic.`, ko: `소비자 논리에서 오류 재시도 및 지수 백오프 메커니즘을 사용합니다.` },
      { k: 'F', en: `Configure the stream to use dynamic partitioning.`, ko: `동적 파티셔닝을 사용하도록 스트림을 구성합니다.` },
    ],
    answer: ['A', 'C', 'E'],
    vote: '100% ACE',
    explain: `<p><span class="mark-ok">✅ A — 샤드 수 증가 (용량 확장)</span></p>
<p>샤드 수를 늘리면 스트림의 총 읽기 처리량이 증가합니다. 각 샤드는 최대 2MB/s 읽기를 지원하므로 샤드를 추가하면 더 많은 소비자가 동시에 데이터를 읽을 수 있습니다.</p>
<p><span class="mark-ok">✅ C — Enhanced Fan-Out (향상된 팬아웃)</span></p>
<p>Enhanced Fan-Out을 사용하면 각 소비자가 샤드당 <strong>전용 2MB/s 읽기 처리량</strong>을 독립적으로 받습니다. 기존 방식은 모든 소비자가 샤드의 2MB/s를 공유하지만, Enhanced Fan-Out은 소비자별로 처리량이 분리됩니다.</p>
<p><span class="mark-ok">✅ E — 지수 백오프 재시도</span></p>
<p>ReadProvisionedThroughputExceeded 오류 발생 시 지수 백오프를 적용하면 일시적인 스로틀링을 우아하게 처리하고 시스템 부하를 점진적으로 줄입니다.</p>
<p><a href="https://repost.aws/knowledge-center/kinesis-readprovisionedthroughputexceeded" target="_blank">AWS Knowledge Center - ReadProvisionedThroughputExceeded 해결</a></p>`,
    wrong: `<p><span class="mark-no">❌ B</span> — KPL(Kinesis Producer Library)은 <strong>데이터 쓰기(생산자)</strong> 최적화 도구입니다. 읽기 스로틀링 문제 해결과 관련이 없습니다.</p>
<p><span class="mark-no">❌ D</span> — 샤드 수를 줄이면 처리량이 감소하여 스로틀링이 더 심해집니다. 이미 용량 초과 상태에서 역방향 조치입니다.</p>
<p><span class="mark-no">❌ F</span> — 동적 파티셔닝은 Amazon Kinesis Data Firehose의 기능으로 데이터를 S3에 저장할 때 파티션 키 기반으로 분류하는 기능입니다. Kinesis Data Streams의 읽기 스로틀링 문제와는 직접 관련이 없습니다.</p>`,
    disc: [
      { ans: 'ACE (100%)', txt: 'A=샤드 증가로 읽기 용량 확대, C=Enhanced Fan-Out으로 소비자별 독립 처리량 할당, E=지수 백오프로 일시적 스로틀링 처리. KPL(B)은 생산자 전용 도구, D는 용량 감소, F는 Firehose 기능.' }
    ]
  },
];