export const STUDY_CATEGORIES = [
  { id: "frontend", label: "프론트엔드" },
  { id: "backend", label: "백엔드" },
  { id: "infra", label: "인프라·도구" },
  { id: "seo", label: "SEO·분석" },
  { id: "security", label: "보안" },
  { id: "certificate", label: "자격증" },
  { id: "hobby", label: "취미" },
] as const;

export type StudyCategoryId = (typeof STUDY_CATEGORIES)[number]["id"];

export interface StudyPost {
  id: string;
  categoryId: StudyCategoryId;
  title: string;
  date: string;
  excerpt?: string;
  slug: string;
}

/** Study/YYYY/*.md 스터디 글 목록 (날짜 최신순). categoryId: frontend | backend | infra | seo | security | certificate | hobby */
export const STUDY_POSTS: StudyPost[] = [
  { id: "2026-04-10", categoryId: "certificate", title: "소프트웨어 설계 핵심 정리", date: "2026-04-10", slug: "2026-04-10" },
  { id: "2025-11-10", categoryId: "backend", title: "SQL 기초와 활용", date: "2025-11-10", slug: "2025-11-10" },
  { id: "2025-11-01", categoryId: "frontend", title: "코드 최적화란?", date: "2025-11-01", slug: "2025-11-01" },
  { id: "2025-10-25", categoryId: "frontend", title: "반응형 이미지 최적화", date: "2025-10-25", slug: "2025-10-25" },
  { id: "2025-10-21", categoryId: "frontend", title: "브레이크포인트란?", date: "2025-10-21", slug: "2025-10-21" },
  { id: "2025-09-13", categoryId: "frontend", title: "Outlook HTML 폰트 적용", date: "2025-09-13", slug: "2025-09-13" },
  { id: "2025-09-05", categoryId: "seo", title: "Google Analytics란?", date: "2025-09-05", slug: "2025-09-05" },
  { id: "2025-08-26", categoryId: "seo", title: "SEO 최적화 전략", date: "2025-08-26", slug: "2025-08-26" },
  { id: "2025-08-21", categoryId: "seo", title: "웹사이트 SEO 기본", date: "2025-08-21", slug: "2025-08-21" },
  { id: "2025-08-11", categoryId: "frontend", title: "에디터 이미지 삽입", date: "2025-08-11", slug: "2025-08-11" },
  { id: "2025-07-06", categoryId: "frontend", title: "게시글 에디터 정리", date: "2025-07-06", slug: "2025-07-06" },
  { id: "2025-07-03", categoryId: "frontend", title: "코드 에디터 선택법", date: "2025-07-03", slug: "2025-07-03" },
  { id: "2025-06-23", categoryId: "frontend", title: "라이브러리 vs 프레임워크", date: "2025-06-23", slug: "2025-06-23" },
  { id: "2025-06-19", categoryId: "frontend", title: "프론트엔드 API 통신", date: "2025-06-19", slug: "2025-06-19" },
  { id: "2025-06-03", categoryId: "frontend", title: "Next.js API 정리", date: "2025-06-03", slug: "2025-06-03" },
  { id: "2025-05-11", categoryId: "frontend", title: "React 달력 라이브러리", date: "2025-05-11", slug: "2025-05-11" },
  { id: "2025-05-01", categoryId: "frontend", title: "Next.js 리치 텍스트 에디터", date: "2025-05-01", slug: "2025-05-01" },
  { id: "2025-04-22", categoryId: "frontend", title: "Next.js 미디어 삽입", date: "2025-04-22", slug: "2025-04-22" },
  { id: "2025-04-10", categoryId: "infra", title: "Docker란?", date: "2025-04-10", slug: "2025-04-10" },
  { id: "2025-03-31", categoryId: "backend", title: "데이터베이스란?", date: "2025-03-31", slug: "2025-03-31" },
  { id: "2025-03-16", categoryId: "frontend", title: "웹사이트 구조 설계", date: "2025-03-16", slug: "2025-03-16" },
  { id: "2025-03-13", categoryId: "frontend", title: "Next.js란?", date: "2025-03-13", slug: "2025-03-13" },
  { id: "2025-02-23", categoryId: "frontend", title: "React란?", date: "2025-02-23", slug: "2025-02-23" },
  { id: "2025-05-12", categoryId: "security", title: "WAF란?", date: "2025-05-12", slug: "2025-05-12" },
  { id: "2025-06-09", categoryId: "security", title: "SWG란?", date: "2025-06-09", slug: "2025-06-09" },
  { id: "2025-07-17", categoryId: "security", title: "RBI란?", date: "2025-07-17", slug: "2025-07-17" },
  { id: "2025-07-24", categoryId: "security", title: "SVA란?", date: "2025-07-24", slug: "2025-07-24" },
  { id: "2025-08-04", categoryId: "security", title: "ZTNA란?", date: "2025-08-04", slug: "2025-08-04" },
  { id: "2025-09-23", categoryId: "security", title: "인증과 인가의 차이", date: "2025-09-23", slug: "2025-09-23" },
  { id: "2025-09-28", categoryId: "security", title: "최소 권한 원칙이란?", date: "2025-09-28", slug: "2025-09-28" },
  { id: "2025-10-06", categoryId: "security", title: "패스워드 보안의 기본", date: "2025-10-06", slug: "2025-10-06" },
  { id: "2025-10-13", categoryId: "security", title: "로그와 모니터링의 중요성", date: "2025-10-13", slug: "2025-10-13" },
];
