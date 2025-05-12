export const STUDY_CATEGORIES = [
  { id: "frontend", label: "프론트엔드" },
  { id: "backend", label: "백엔드" },
  { id: "infra", label: "인프라·도구" },
  { id: "seo", label: "SEO·분석" },
  { id: "security", label: "보안" },
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

/** Study/2025/*.md 스터디 글 목록 (날짜 최신순). categoryId: frontend | backend | infra | seo | hobby */
export const STUDY_POSTS: StudyPost[] = [
  { id: "2025-11-10", categoryId: "backend", title: "SQL 완벽 가이드: 기초부터 고급까지", date: "2025-11-10", slug: "2025-11-10" },
  { id: "2025-11-01", categoryId: "frontend", title: "코드 최적화 핵심 가이드", date: "2025-11-01", slug: "2025-11-01" },
  { id: "2025-10-25", categoryId: "frontend", title: "반응형 이미지 최적화 완벽 가이드", date: "2025-10-25", slug: "2025-10-25" },
  { id: "2025-10-21", categoryId: "frontend", title: "브레이크포인트 기반 반응형 웹 개발: lg, xl, 2xl, 3xl 완벽 가이드", date: "2025-10-21", slug: "2025-10-21" },
  { id: "2025-09-13", categoryId: "frontend", title: "Outlook 2013 이메일 HTML 폰트 적용 완벽 가이드", date: "2025-09-13", slug: "2025-09-13" },
  { id: "2025-09-05", categoryId: "seo", title: "Google Analytics 완벽 가이드: 웹사이트 데이터 분석의 시작", date: "2025-09-05", slug: "2025-09-05" },
  { id: "2025-08-26", categoryId: "seo", title: "SEO 최적화 실전 전략: 검색 순위 상승을 위한 핵심 기법", date: "2025-08-26", slug: "2025-08-26" },
  { id: "2025-08-21", categoryId: "seo", title: "웹사이트 SEO 최적화 완벽 가이드: 검색 엔진에서 상위 노출하기", date: "2025-08-21", slug: "2025-08-21" },
  { id: "2025-08-11", categoryId: "frontend", title: "에디터에 이미지 삽입하기: 업로드부터 최적화까지 완벽 가이드", date: "2025-08-11", slug: "2025-08-11" },
  { id: "2025-07-06", categoryId: "frontend", title: "게시글 작성 에디터 완벽 가이드: WYSIWYG부터 마크다운까지", date: "2025-07-06", slug: "2025-07-06" },
  { id: "2025-07-03", categoryId: "frontend", title: "코드 에디터 선택과 활용: 생산성을 높이는 개발 도구", date: "2025-07-03", slug: "2025-07-03" },
  { id: "2025-06-23", categoryId: "frontend", title: "라이브러리와 프레임워크: 개발 도구 선택의 핵심", date: "2025-06-23", slug: "2025-06-23" },
  { id: "2025-06-19", categoryId: "frontend", title: "프론트엔드 API 통신 완벽 가이드: Fetch부터 React Query까지", date: "2025-06-19", slug: "2025-06-19" },
  { id: "2025-06-03", categoryId: "frontend", title: "Next.js API 완벽 가이드: API Routes부터 RESTful 설계까지", date: "2025-06-03", slug: "2025-06-03" },
  { id: "2025-05-11", categoryId: "frontend", title: "React 달력 라이브러리 완벽 가이드: 날짜 선택부터 일정 관리까지", date: "2025-05-11", slug: "2025-05-11" },
  { id: "2025-05-01", categoryId: "frontend", title: "Next.js에서 리치 텍스트 에디터 구현하기: React-quill-new 완벽 가이드", date: "2025-05-01", slug: "2025-05-01" },
  { id: "2025-04-22", categoryId: "frontend", title: "Next.js와 Tailwind CSS로 이미지 및 비디오 삽입 완벽 가이드", date: "2025-04-22", slug: "2025-04-22" },
  { id: "2025-04-10", categoryId: "infra", title: "Docker 완전 정복: 컨테이너화로 배포와 개발을 혁신하다", date: "2025-04-10", slug: "2025-04-10" },
  { id: "2025-03-31", categoryId: "backend", title: "데이터베이스 완전 정복: 관계형부터 NoSQL까지 현대 데이터 관리의 모든 것", date: "2025-03-31", slug: "2025-03-31" },
  { id: "2025-03-16", categoryId: "frontend", title: "웹사이트 구조 설계: 사용자 경험과 개발 효율성을 높이는 구조화 전략", date: "2025-03-16", slug: "2025-03-16" },
  { id: "2025-03-13", categoryId: "frontend", title: "Next.js: React 기반 풀스택 프레임워크 완전 정복", date: "2025-03-13", slug: "2025-03-13" },
  { id: "2025-02-23", categoryId: "frontend", title: "React와 현대 프론트엔드 프레임워크: 선택의 기준과 최적화 전략", date: "2025-02-23", slug: "2025-02-23" },
  { id: "2025-05-12", categoryId: "security", title: "WAF란?", date: "2025-05-12", slug: "2025-05-12" },
];
