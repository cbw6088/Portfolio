"use client";

import {
  HOME_TAGLINE,
  HOME_NAME,
  HOME_LINKS,
} from "@/app/constants";
import {
  IntroProfile,
  IntroEducation,
  IntroExperience,
  IntroStacks,
  IntroStrengths,
} from "@/app/introduction/components";
import { WORK_PROJECTS, PERSONAL_PROJECTS } from "@/app/project/constants";
import PdfProjectPages from "./components/PdfProjectPages";

/** 2페이지로 나누는 프로젝트 (내용이 긴 경우) */
const TWO_PAGE_PROJECT_IDS = [
  "work-brand-renewal",   // 브랜드사이트 리뉴얼
  "work-customer-portal", // 커스터머포탈
  "work-site-maintenance",// 유지보수
  "quizgen",              // QuizGen
];

/** PDF 한 페이지 = 가로형 A4 한 장. 웹과 동일한 stone/amber 컨셉 + 공통 토큰 */
const pageClass =
  "pdf-page box-border flex flex-col min-h-[180mm]";

/** 1페이지: 홈 화면 */
function PdfPage1Home() {
  return (
    <section
      className={`${pageClass} items-center justify-center px-6 py-8 print:flex print:flex-col print:justify-center`}
    >
      <div className="pdf-page-inner w-full flex flex-col items-center text-center">
        <p className="pdf-label">Portfolio</p>
        <h1 className="font-LilitaOne text-3xl sm:text-4xl text-stone-800 tracking-tight mt-2 text-center print:text-2xl">
          Frontend
          <br />
          <span className="text-amber-600">Developer</span>
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto mt-2 text-center print:text-[11px]">
          {HOME_TAGLINE}
        </p>
        <div className="h-px w-12 mx-auto bg-stone-300 my-3" />
        <p className="font-LilitaOne text-base sm:text-lg text-stone-700 tracking-widest print:text-sm">
          {HOME_NAME}
        </p>
        <p className="text-xs text-stone-600 mt-1 print:text-[10px]">
          {HOME_LINKS.map((l) => l.label).join(" · ")}
        </p>
      </div>
    </section>
  );
}

/** 2페이지: 소개 화면 (프로필 + 전화번호, 메일, 깃주소) */
function PdfPage2Intro() {
  return (
    <section className={`${pageClass} px-4 py-6 print:py-4`}>
      <div className="pdf-page-header">Portfolio</div>
      <div className="pdf-page-inner flex-1 min-h-0 overflow-hidden px-0 w-full">
        <p className="pdf-label mb-0.5">Introduction</p>
        <h2 className="font-semibold text-stone-800 text-lg tracking-tight mb-3 print:text-base">
          Profile
        </h2>
        <IntroProfile />
      </div>
    </section>
  );
}

/** 3페이지: 교육, 경험, 스택 */
function PdfPage3EduExpStack() {
  return (
    <section className={`${pageClass} px-4 py-6 print:py-4`}>
      <div className="pdf-page-header">Portfolio</div>
      <div className="pdf-page-inner flex-1 min-h-0 overflow-hidden px-0 w-full">
        <IntroEducation />
        <IntroExperience />
        <IntroStacks />
      </div>
    </section>
  );
}

/** 4페이지: 핵심역량 */
function PdfPage4Strengths() {
  return (
    <section className={`${pageClass} px-4 py-6 print:py-4`}>
      <div className="pdf-page-header">Portfolio</div>
      <div className="pdf-page-inner flex-1 min-h-0 overflow-hidden px-0 w-full pdf-strengths">
        <IntroStrengths />
      </div>
    </section>
  );
}

export default function PdfPage() {
  const projects = [...WORK_PROJECTS, ...PERSONAL_PROJECTS];

  return (
    <div className="min-h-screen">
      <div className="print:hidden sticky top-0 z-[9999] bg-amber-500/95 text-stone-900 px-4 py-3 flex flex-wrap items-center justify-center gap-3 shadow-md">
        <span className="text-sm font-medium">
          인쇄 시 &quot;대상: PDF로 저장&quot;을 선택하면 포트폴리오 PDF를 저장할 수 있습니다.
        </span>
        <button
          type="button"
          onClick={() => window.print()}
          className="px-4 py-2 bg-stone-800 text-white text-sm font-medium rounded-lg hover:bg-stone-700 transition-colors"
        >
          인쇄 / PDF로 저장
        </button>
      </div>

      <div className="pdf-pages">
        <PdfPage1Home />
        <PdfPage2Intro />
        <PdfPage3EduExpStack />
        <PdfPage4Strengths />
        {projects.map((project) => (
          <PdfProjectPages
            key={project.id}
            project={project}
            twoPageProjectIds={TWO_PAGE_PROJECT_IDS}
          />
        ))}
      </div>
    </div>
  );
}
