import type { ProjectItem } from "./constants";

export const PERSONAL_PROJECTS: ProjectItem[] = [
  {
    id: "quizgen",
    type: "personal",
    title: "QuizGen",
    subtitle: "PDF를 퀴즈로 만들어주는 웹서비스",
    period: "2024.08 - 2024.09 (약 6주)",
    platform: "Web",
    teamSize: "FE 2명, BE 2명",
    role: "Front-End(팀장)",
    description:
      "PDF 파일을 업로드하고 간편하게 나만의 문제지를 만들어 퀴즈를 풀어볼 수 있는 웹사이트",
    tech: {
      language: "TypeScript",
      framework: "SpringBoot",
      library: "React",
      devops: "Docker, AWS EC2",
      etc: "Github, Figma, Vite, Langchain, Rest API",
    },
    about:
      "이 프로젝트는 사용자가 본인의 PDF 파일을 바탕으로 문제를 생성하고 풀 수 있는 서비스로, 이용자 경험 최적화가 핵심 과제였습니다. 초기에는 UI/UX 미흡과 데이터 전송 속도 문제로 어려움이 많았습니다. 사용자들이 메인 버튼을 찾기까지 평균 7번의 클릭이 필요했고, 데이터 전송에 50초가 걸렸습니다. 신규 사용자 이탈률이 높아 문제 해결이 시급했습니다.\n\nClarity로 사용자 행동 패턴을 분석하고 설문조사를 통해 불편 사항을 확인한 후, UI를 개선하여 사용자가 메인 기능을 찾는 과정까지의 클릭은 2회 이하로 감소하였고, SSE(Server-Sent Events)로 전송 속도를 4초로 단축해 대기 시간을 94% 줄였습니다. 이를 통해 신규 사용자 이탈률은 60% 이상 감소했습니다. Clarity와 SSE를 활용해 서비스 품질을 크게 개선할 수 있었습니다.",
    links: [
      { label: "사이트", href: "https://quizgen.site/" },
      { label: "GitHub", href: "https://github.com/August-ToyProject/PDF-Quiz" },
    ],
  },
  {
    id: "goaldiary",
    type: "personal",
    title: "GoalDiary",
    subtitle: "목표를 등록 후 AI에게 피드백을 받는 앱 서비스",
    period: "2024.04 - 2024.06 (약 10주)",
    platform: "App",
    teamSize: "FE 1명, BE 2명, AI 1명",
    role: "Front-End(팀장)",
    description:
      "최종 목표와 세부 목표를 나누어 한 단계씩 해결하고 그에 맞는 피드백을 받으며 성장하는 어플리케이션",
    tech: {
      language: "Kotlin",
      framework: "Jetpack",
      etc: "Github, Figma, Rest API",
    },
    about:
      "프로젝트를 진행할 때 팀원들 모두 처음 협업하는 상황이었기에, 문제 발생 시 즉각 공유하는 소통 규칙을 도입하여 협업 효율성을 높였습니다.\n\n프론트엔드 작업으로는 로그인, 회원가입, 일지 작성 페이지를 설계하고, Material Design을 활용해 UI를 구현했습니다. 특히 직관적인 사용자 경험을 고려하며 앱의 주요 기능을 안정적으로 완성했습니다.\n\n다만 개발 기간이 촉박해 성능보다는 기능 구현에 집중하게 되었습니다. 그 결과 UI/UX에 대한 세밀한 고려가 부족했던 점이 아쉬웠습니다. 이를 통해 초기 설계 단계에서부터 사용자 경험을 충분히 반영해야 한다는 교훈을 얻었고, 다음 프로젝트에서는 이를 보완하고자 합니다. 이번 프로젝트는 협업과 소통, 그리고 효율적인 일정 관리의 중요성을 깨닫는 좋은 기회가 되었으며, 프론트엔드 개발자로서의 역량을 한층 더 성장시킬 수 있었습니다.",
    links: [{ label: "GitHub", href: "https://github.com/GOALDIARY/GOALDIARY" }],
  },
  {
    id: "drlucid",
    type: "personal",
    title: "Dr.lucid",
    subtitle: "비대면 의료 플랫폼",
    period: "2024.08 - (진행중)",
    platform: "Web",
    teamSize: "FE 2명, BE 5명, 기획 2명, 디자인 4명",
    role: "Front-End(BackOffice)",
    tech: {
      language: "TypeScript",
      framework: "ReactNative, Next.js, SpringBoot",
      library: "React",
      etc: "Github, Figma, ReduxToolkit, Rest API, WBS",
    },
  },
  {
    id: "nickname",
    type: "personal",
    title: "NicknameGenerator",
    subtitle: "닉네임 랜덤 생성 오픈 API",
    period: "2024.07 (2주)",
    platform: "Web",
    teamSize: "FE 1명, AI 1명",
    role: "Front-End",
    tech: {
      language: "TypeScript",
      library: "React",
      devops: "Docker, AWS EC2",
      etc: "Github, Figma, Vite, Rest API",
    },
  },
];

