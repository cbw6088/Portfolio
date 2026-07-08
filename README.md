# Portfolio

**Choi Byungwoo** · Frontend Developer

React와 TypeScript 기반으로 사용자 경험과 웹 성능 최적화에 집중하는 프론트엔드 개발자입니다.  
현재 (주)모니터랩에서 프론트엔드 개발자로 근무 중이며, 상세 프로필·경력·기술 스택은 사이트 **소개(Introduction)** 페이지에서 확인할 수 있습니다.

- **GitHub**: [github.com/cbw6088](https://github.com/cbw6088)
- **Email**: cbw60881@gmail.com
- **Portfolio**: https://portfolio-cbw.vercel.app/

---

## 주요 기능

| 페이지 | 경로 | 설명 |
|--------|------|------|
| Home | `/` | 메인 랜딩, 커스텀 커서·배경 애니메이션 |
| Introduction | `/introduction` | 프로필, 학력, 경력, 기술 스택, 핵심 역량 |
| Project | `/project` | 업무·개인 프로젝트 (탭 분류, 상세 페이지) |
| Study | `/study` | 학습 기록 아카이브 (카테고리별 필터) |
| PDF | `/pdf` | 포트폴리오 PDF 출력용 레이아웃 |

---

## Tech Stack

### Core
- **Next.js 14** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS** · **Redux Toolkit** (전역 UI 상태)
- **react-markdown** · **remark-gfm** (스터디 글 렌더링)

### Tools & Collaboration
- Git / GitHub · ESLint · PostCSS
- Slack · Notion · Jira

### Experience (실무·프로젝트)
- HTML · CSS · JavaScript · React · Next.js · Tailwind CSS · Redux
- Flutter · React Native · Styled Components · WordPress

---

## 프로젝트 구조

```
Portfolio/
├── portfolio/                    # Next.js 앱
│   └── src/
│       ├── app/                  # App Router 페이지
│       │   ├── page.tsx          # Home
│       │   ├── introduction/     # 소개 (constants + components)
│       │   ├── project/          # 프로젝트 (workProjects, personalProjects)
│       │   ├── study/            # 스터디 목록·상세
│       │   ├── pdf/              # PDF 출력 페이지
│       │   └── api/study/[slug]/ # Study 마크다운 API
│       ├── components/           # 공통 UI (TopBar, SideButton)
│       ├── feature/              # Redux Slice (bar, button, count)
│       ├── redux/                # Store 설정
│       └── styles/               # 전역 CSS
│
└── Study/                        # 스터디 마크다운 원본
    ├── 2025/
    └── 2026/
```

### 코드 구조 요약

- **페이지별 constants 분리** — 소개(`introduction/constants.ts`), 스터디(`study/constants.ts`), 프로젝트(`workProjects.ts` / `personalProjects.ts`) 등 콘텐츠를 코드와 UI로 분리
- **컴포넌트 단위 구성** — 각 페이지는 `components/` 하위에 섹션별 컴포넌트로 분리 (예: `IntroProfile`, `ProjectCard`, `StudyPostList`)
- **Redux Toolkit** — TopBar·사이드 네비게이션 등 공통 UI 상태 관리
- **Study 콘텐츠** — `Study/YYYY/*.md` 파일을 API Route로 읽어 마크다운 렌더링 (`/study/[slug]`)
- **App + Pages Router 혼용** — 주요 페이지는 App Router, 레거시 Pages Router(`src/pages/`) 일부 유지

---

## 실행 방법

```bash
cd portfolio
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

```bash
npm run build   # 프로덕션 빌드
npm run start   # 프로덕션 서버 실행
npm run lint    # ESLint
```

---

## Study 카테고리

| ID | 라벨 |
|----|------|
| `frontend` | 프론트엔드 |
| `backend` | 백엔드 |
| `infra` | 인프라·도구 |
| `seo` | SEO·분석 |
| `security` | 보안 |
| `certificate` | 자격증 |
| `hobby` | 취미 |

새 글 추가 시 `Study/YYYY/YYYY-MM-DD.md` 작성 후 `portfolio/src/app/study/constants.ts`의 `STUDY_POSTS`에 메타데이터를 등록합니다.
