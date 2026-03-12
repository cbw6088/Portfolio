"use client";

import Link from "next/link";

export default function IntroStrengths() {
  return (
    <section className="py-12">
      <h2 className="font-semibold text-lg text-stone-800 mb-4">
        Core Strengths &amp; Impact
      </h2>
      <div className="space-y-6 text-sm text-stone-700">
        <div className="rounded-lg border border-stone-200 bg-white/60 px-4 py-3">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-amber-600 mb-1">
            01 · Migration (Customer Portal)
          </p>
          <h3 className="font-semibold text-stone-900 mb-2">
            레거시 포털을 Next.js 기반 운영 서비스로 전환
          </h3>
          <div className="space-y-1.5">
            <p>
              <span className="font-medium text-stone-900">핵심 역량</span>
              <span className="text-stone-600">
                {" "}
                · 기존 HTML/CSS/JavaScript로만 구현되어 있던 Customer Portal을
                Next.js와 Tailwind CSS 기반으로 마이그레이션하고, 고객·파트너·관리자
                별 접근 권한과 실제 업무 플로우에 맞춰 화면 구조를 재설계했습니다.
              </span>
            </p>
            <p>
              <span className="font-medium text-stone-900">성과</span>
              <span className="text-stone-600">
                {" "}
                · 버그와 미완성 기능으로 인해 현업에서 사용되지 못하던 포털을,
                실제 고객/파트너/관리자가 사용하는 운영 서비스로 전환하고, 제품
                신청·문의·공지 등을 하나의 포털로 통합해 운영 효율을 높였습니다.
              </span>
            </p>
          </div>
          <div className="mt-3 flex justify-start">
            <Link
              href="/project#project-work-customer-portal"
              className="text-amber-600 hover:text-amber-700 text-sm font-medium underline-offset-2 hover:underline"
            >
              Customer Portal 프로젝트 바로가기 →
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white/60 px-4 py-3">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-amber-600 mb-1">
            02 · SEO Optimization (Brand Site)
          </p>
          <h3 className="font-semibold text-stone-900 mb-2">
            브랜드 사이트 검색 노출·클릭 지표 개선
          </h3>
          <div className="space-y-1.5">
            <p>
              <span className="font-medium text-stone-900">핵심 역량</span>
              <span className="text-stone-600">
                {" "}
                · 브랜드 사이트의 정보 구조와 메타 태그, 오픈그래프, 사이트맵 등을
                정비하고, 검색 엔진 크롤링에 유리한 구조로 페이지를 재구성하는 등
                SEO 중심의 마크업/구조 개선을 수행했습니다.
              </span>
            </p>
            <p>
              <span className="font-medium text-stone-900">성과</span>
              <span className="text-stone-600">
                {" "}
                · 주요 보안 관련 키워드가 노출되지 않거나 검색 결과 4페이지 이후에
                위치하던 문제를 개선하여, 평균 노출 위치를 약 1.6페이지 이내로
                끌어올렸습니다. 평균 노출 수는 약 4,200에서 약 22,000으로, 평균
                클릭 수는 약 110회에서 약 600회 수준으로 증가했습니다.
              </span>
            </p>
          </div>
          <div className="mt-3 flex justify-start">
            <Link
              href="/project#project-work-brand-renewal"
              className="text-amber-600 hover:text-amber-700 text-sm font-medium underline-offset-2 hover:underline"
            >
              Brand Site 프로젝트 바로가기 →
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white/60 px-4 py-3">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-amber-600 mb-1">
            03 · AI Capability (QuizGen)
          </p>
          <h3 className="font-semibold text-stone-900 mb-2">
            LangChain · GPT-4 기반 PDF 퀴즈 생성
          </h3>
          <div className="space-y-1.5">
            <p>
              <span className="font-medium text-stone-900">핵심 역량</span>
              <span className="text-stone-600">
                {" "}
                · 인공지능 담당자와 협업하여 LangChain과 GPT-4를 활용해 PDF 문서를
                분석하고, 내용에 기반한 퀴즈를 자동으로 생성하는 파이프라인을
                설계하는 등 AI 기능을 실제 웹 서비스에 녹여냈습니다.
              </span>
            </p>
            <p>
              <span className="font-medium text-stone-900">성과</span>
              <span className="text-stone-600">
                {" "}
                · 사용자가 업로드한 PDF를 기반으로, 별도의 문제 출제 작업 없이
                맞춤형 퀴즈를 생성·풀이할 수 있는 경험을 제공했습니다. Clarity와
                SSE를 도입해 초기 UX·성능 문제를 개선하며, 서비스 완성도와 사용자
                이탈률을 함께 개선한 경험이 있습니다.
              </span>
            </p>
          </div>
          <div className="mt-3 flex justify-start">
            <Link
              href="/project#project-quizgen"
              className="text-amber-600 hover:text-amber-700 text-sm font-medium underline-offset-2 hover:underline"
            >
              QuizGen 프로젝트 바로가기 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

