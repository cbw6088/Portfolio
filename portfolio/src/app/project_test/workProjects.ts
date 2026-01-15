import type { ProjectItem } from "./constants";

export const WORK_PROJECTS: ProjectItem[] = [
  {
    id: "work-1",
    type: "work",
    title: "현업 프로젝트 A",
    subtitle: "내부 관리 시스템 프론트엔드 개발",
    period: "2024.XX - 현재",
    platform: "Web",
    role: "Front-End",
    description:
      "현재 재직 중인 회사에서 진행한 프로젝트로, 상세 내용 및 스크린샷은 보안상 생략합니다.",
    workForm: {
      summary:
        "사내 ○○ 도메인의 업무 효율을 높이기 위한 내부 관리 시스템입니다. 기존 수기/엑셀 기반 업무를 웹으로 전환하여, 담당자들이 한 화면에서 데이터를 조회·관리할 수 있도록 개선했습니다.",
      responsibilities:
        "- 요구사항 분석 및 화면 설계 참여\n- 주요 리스트/상세 페이지 프론트엔드 개발\n- Form 검증, 상태관리, 공통 컴포넌트 정리\n- 디자이너·백엔드와의 협업을 통한 UI/UX 개선",
      achievements:
        "- 특정 업무 처리 시간을 평균 △△분 → △분으로 단축\n- 운영팀에서 요청하던 수동 처리 이슈를 다수 자동화\n- 공통 컴포넌트화로 이후 유사 화면 개발 속도 향상",
    },
  },
];

