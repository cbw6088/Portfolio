import type { ProjectItem } from "./constants";

export const WORK_PROJECTS: ProjectItem[] = [
  {
    id: "work-brand-renewal",
    type: "work",
    title: "MONITORAPP 브랜드 사이트 리뉴얼",
    subtitle: "15년 된 워드프레스 기반 브랜드 사이트 리뉴얼 및 백오피스 신규 구축",
    period: "2025.04 - 2025.07 (이후 유지보수 및 콘텐츠 추가)",
    platform: "Web",
    role: "Front-End",
    description:
      "약 15년간 워드프레스로 운영되던 보안 기업 브랜드 사이트를 리뉴얼하고, 운영 효율을 위한 백오피스까지 새롭게 구축한 프로젝트입니다.",
    tech: {
      language: "TypeScript (FE), Java (BE)",
      framework: "Next.js",
      library: "React, Tailwind CSS",
      devops: "Docker",
      etc: "GitLab, Jira, Figma, XD, Rest API",
    },
    links: [
      { label: "MONITORAPP Brand Site", href: "https://www.monitorapp.com/ko" },
    ],
    workForm: {
      summary:
        "보안 기업의 브랜드 이미지를 강화하고 정보 전달력을 높이기 위해, 약 15년간 운영되던 워드프레스 기반 웹사이트를 전면 리뉴얼한 프로젝트입니다. " +
        "리뉴얼 이후에는 유지보수와 신규 콘텐츠 제작, 검색 노출 개선 등을 지속적으로 담당하며 사이트를 운영하고 있습니다.",
      responsibilities:
        "- 이해관계자 인터뷰를 통한 요구사항 정리 및 화면 설계 참여\n" +
        "- 메인/브랜드/제품/문의/게시글 등 주요 페이지 웹 퍼블리싱 및 API 연동\n" +
        "- SEO 구조 개선 및 메타 태그, 사이트맵, 오픈그래프 등 검색 최적화 작업\n" +
        "- 구글 애널리틱스를 활용한 유입/행동 데이터 수집 환경 세팅 및 기본 지표 모니터링\n" +
        "- 디자이너와의 협업으로 초기 시안 기반 UI/UX를 반복 개선\n" +
        "- 기존에 없던 백오피스 사이트를 신규로 구축하여 게시글·콘텐츠를 내부에서 관리할 수 있도록 구현",
      achievements:
        "- 리뉴얼 전, 주요 보안 관련 키워드가 노출되지 않거나 검색 결과 4페이지 이후에 위치하던 문제를 개선\n" +
        "- 리뉴얼 후 주요 키워드 평균 노출 위치를 약 1.6페이지 이내로 끌어올림\n" +
        "- 전체 사이트 유입량이 리뉴얼 이전 대비 약 40% 증가\n" +
        "- 백오피스 도입으로 마케팅/운영 담당자가 개발 의존도 없이 콘텐츠를 관리할 수 있게 되어 운영 효율 향상",
    },
  },
  {
    id: "work-customer-portal",
    type: "work",
    title: "Customer Portal 리뉴얼",
    subtitle: "고객·파트너사·관리자용 제품 신청/문의/운영 포털 리뉴얼",
    period: "2025.01 - 2025.03 (이후 유지보수)",
    platform: "Web",
    role: "Front-End",
    description:
      "기존에 개발만 되어 있던 Customer Portal을 실제 서비스에 사용할 수 있도록 전면 리뉴얼하고, 고객·파트너사·관리자 간의 제품 신청과 문의, 운영을 위한 허브로 재구성한 프로젝트입니다.",
    tech: {
      language: "TypeScript (FE), Java (BE)",
      framework: "Next.js",
      library: "React, Tailwind CSS",
      devops: "Docker",
      etc: "GitLab, Jira, Figma, XD, Rest API",
    },
    workForm: {
      summary:
        "사내 제품을 사용하는 고객과 파트너사, 그리고 관리자가 하나의 포털에서 제품을 신청·문의·관리할 수 있도록 하는 Customer Portal 리뉴얼 프로젝트입니다. " +
        "기존 포털은 개발 미흡과 다양한 버그로 인해 실제 업무에서는 사용되지 않고 있었고, 이를 안정적으로 운영 가능한 서비스로 전환하는 것이 핵심 목표였습니다. " +
        "리뉴얼 이후에는 별도 SEO나 애널리틱스 없이도, 실사용자 중심으로 기능을 개선하며 지속적으로 유지보수·운영을 담당하고 있습니다.",
      responsibilities:
        "- 고객, 파트너사, 관리자 역할별 요구사항 정리 및 화면 설계 참여\n" +
        "- 제품 신청, 문의, 게시글, 알림 등 주요 플로우의 웹 퍼블리싱 및 API 연동\n" +
        "- 사용자 유형별(고객/파트너/관리자) 접근 권한과 화면 구성을 고려한 UI 구조 설계\n" +
        "- 문의 처리, 게시글 등록, 제품 부여 등 업무 흐름이 실제 운영 프로세스와 맞도록 플로우 개선\n" +
        "- Firebase를 활용한 알림 기능 구현으로, 주요 상태 변경(신청/문의 처리 등)에 대한 실시간 알림 제공\n" +
        "- 리뉴얼 이후 발생하는 버그 수정, 기능 개선, 신규 페이지 추가 등 지속적인 유지보수",
      achievements:
        "- 기존에는 버그와 미완성 기능으로 인해 실제 사용되지 않던 포털을, 현업에서 계속 사용하는 운영 서비스로 전환\n" +
        "- 고객·파트너사·관리자가 각각 다른 채널로 요청하던 업무를 포털로 통합하여 커뮤니케이션 창구 일원화\n" +
        "- 제품 부여, 문의 처리, 공지/게시 등 반복 업무를 포털 내에서 처리할 수 있게 되어 운영 담당자의 수작업 부담 감소\n" +
        "- 알림 기능 도입으로, 요청 상태를 이메일·메신저로 따로 확인하던 비효율이 줄어들고 응답 속도가 개선",
    },
    links: [
      { label: "Customer Portal", href: "https://customer.monitorapp.com/signin" },
    ],
  },
  {
    id: "work-site-maintenance",
    type: "work",
    title: "사내 웹사이트 유지보수 및 운영",
    subtitle: "워드프레스 기반 사내/서비스 웹사이트 다수의 유지보수 및 개선",
    period: "2025.01 - 현재",
    platform: "Web",
    role: "Front-End",
    description:
      "워드프레스로 운영 중인 사내 및 서비스 웹사이트(AIONCLOUD, AIWorks, MONITORAPP 관련 사이트 등)의 유지보수와 기능 개선을 담당하고 있습니다.",
    tech: {
      language: "HTML, CSS, JavaScript",
      framework: "WordPress",
      devops: "Docker",
      etc: "Jira, Figma, XD",
    },
    workForm: {
      summary:
        "AIONCLOUD Website, AIONCLOUD Partner Portal, AIONCLOUD User Portal, AIWorks Website, MONITORAPP Partner Portal 등 워드프레스 기반으로 운영되는 여러 웹사이트의 유지보수와 운영을 담당하고 있습니다. " +
        "서비스별로 UI 일관성 유지, 콘텐츠 업데이트, 기능 오류 수정 등을 진행하며, 실제 사용자가 불편을 겪는 지점을 빠르게 개선하는 데 집중하고 있습니다.",
      responsibilities:
        "- 디자인 시안과 실제 페이지 간의 UI 불일치 수정 및 스타일 정리\n" +
        "- API 요청 오류 및 연동 이슈 분석 후 수정, 예외 상황에 대한 처리 보완\n" +
        "- 신규/변경 콘텐츠에 대한 페이지 생성 및 마크업, 컴포넌트 단위 재사용 구조로 정리\n" +
        "- 워드프레스 플러그인/테마 설정 점검 및 필요 시 커스터마이징 지원\n" +
        "- Jira를 활용한 이슈 관리 및 우선순위에 따른 작업 진행, 배포 전 간단한 자체 QA 수행\n" +
        "- 여러 사이트가 동시에 운영되는 환경에서 공통 UI/패턴을 정리하여 관리 효율성 확보",
      achievements:
        "- 디자인과 실제 화면의 불일치, 링크/요청 오류 등으로 인한 사용자 불편 이슈를 지속적으로 해소하여 운영 안정성 향상\n" +
        "- 반복적으로 발생하던 유지보수 요청을 컴포넌트화·패턴화하여 수정 범위를 줄이고 대응 속도 개선\n" +
        "- 여러 개의 워드프레스 사이트를 일관된 UI/경험으로 관리할 수 있는 기반을 마련",
    },
    links: [
      { label: "AIONCLOUD Website", href: "https://www.aioncloud.com/ko/home-kr/" },
      { label: "AIONCLOUD Partner Portal", href: "https://partner.aioncloud.com/signin" },
      { label: "AIONCLOUD User Portal", href: "https://user.aioncloud.com/signin" },
      { label: "MONITORAPP Partner Portal", href: "https://partner.monitorapp.com/signin" },
      { label: "AIWorks Website", href: "https://www.aiworks.pro/" },
    ],
  },
  {
    id: "work-newsletter-edm",
    type: "work",
    title: "뉴스레터 및 행사 eDM 제작",
    subtitle: "월간 뉴스레터, 웹 공격 동향 보고서, 행사 eDM 제작 및 발송",
    period: "2025.01 - 현재",
    platform: "Email",
    role: "Email 퍼블리싱 / 마케팅 협업",
    description:
      "월간 뉴스레터, 웹 공격 동향 보고서, 각종 행사 안내 등 약 15,000명 대상의 eDM을 HTML 기반으로 제작·관리하고 있습니다.",
    tech: {
      language: "HTML, CSS",
    },
    workForm: {
      summary:
        "보안 솔루션과 관련된 월간 뉴스레터, 웹 공격 동향 보고서, 온·오프라인 행사 초청 eDM 등을 정기적으로 제작하는 업무를 담당하고 있습니다. " +
        "주요 발송 채널은 Outlook 기반 메일 환경으로, 워드 서버에서 사용하는 HTML 구조에 맞춰 마크업을 구성하고, 다양한 메일 클라이언트에서 깨지지 않도록 호환성을 고려해 작업합니다.",
      responsibilities:
        "- 마케팅 팀과 협의하여 뉴스레터/보고서/eDM의 콘텐츠 구조와 레이아웃 설계\n" +
        "- Outlook 등 메일 클라이언트 특성을 고려한 테이블 기반 HTML/CSS 코딩\n" +
        "- 다양한 화면 크기와 다국어(영문/국문 등) 환경에서 레이아웃이 깨지지 않도록 스타일 조정\n" +
        "- 발송 전 테스트 메일을 통한 링크/이미지/레이아웃 검수 및 수정\n" +
        "- 정기 발송 일정에 맞춰 템플릿을 재사용·관리하고, 신규 캠페인에 맞는 레이아웃 변형",
      achievements:
        "- 매월 약 15,000명 규모의 수신자에게 발송되는 eDM을 안정적으로 제작·운영\n" +
        "- 기존 산발적으로 제작되던 메일 템플릿을 정리해 재사용 가능한 구조로 만들며 제작 시간을 단축\n" +
        "- 메일 클라이언트별 깨짐 현상과 링크 오류 등을 지속적으로 개선해, 마케팅/세일즈 팀이 신뢰하고 사용할 수 있는 메일 템플릿 기반을 구축",
    },
  },
];

