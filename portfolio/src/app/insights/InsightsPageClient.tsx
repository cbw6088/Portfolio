"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import HomeBackground from "@/app/components/HomeBackground";
import {
  ProjectTypeChart,
  StudyCategoryChart,
  StudyMonthlyChart,
  TechStackChart,
} from "./components/InsightsCharts";
import {
  getInsightsSummary,
  getProjectTypeCounts,
  getStudyCategoryCounts,
  getTechStackCounts,
} from "./stats";

export default function InsightsPageClient() {
  const dispatch = useDispatch();
  const summary = getInsightsSummary();
  const categories = getStudyCategoryCounts();
  const projectTypes = getProjectTypeCounts();
  const techStacks = getTechStackCounts();

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  const kpis = [
    { label: "프로젝트", value: `${summary.totalProjects}` },
    { label: "현업 / 개인", value: `${summary.workProjects} / ${summary.personalProjects}` },
    { label: "핵심 스택", value: summary.topTechName },
    { label: "스터디 글", value: `${summary.totalStudyPosts}` },
  ];

  return (
    <div className="h-screen max-h-[100dvh] overflow-hidden">
      <div className="fixed inset-0 w-full bg-stone-50 text-stone-800 flex flex-col animate-fadeIn dark:bg-stone-950 dark:text-stone-100">
        <HomeBackground showGlow={false} />
        <main className="relative flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 pt-16 pb-8 sm:py-12">
            <header className="mb-8">
              <p className="text-sm tracking-[0.2em] uppercase text-stone-500 mb-1">
                Insights
              </p>
              <h1 className="relative inline-block font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight mb-3 dark:text-stone-100">
                <span
                  className="absolute inset-[-40%_-30%] pointer-events-none -z-10 dark:opacity-90"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(245, 158, 11, 0.35) 0%, rgba(245, 158, 11, 0.12) 45%, transparent 70%)",
                  }}
                />
                Activity
              </h1>
              {summary.narrative ? (
                <p className="text-sm leading-relaxed text-stone-600 break-keep text-pretty dark:text-stone-300">
                  {summary.narrative}
                </p>
              ) : null}
            </header>

            <section
              aria-label="핵심 지표"
              className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg border border-stone-200 bg-white/60 px-3 py-3 dark:border-stone-700 dark:bg-stone-900/60"
                >
                  <p className="text-[11px] tracking-wide text-stone-500 dark:text-stone-400">
                    {kpi.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-stone-800 dark:text-stone-100">
                    {kpi.value}
                  </p>
                </div>
              ))}
            </section>

            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <ProjectTypeChart data={projectTypes} />
                <TechStackChart data={techStacks} />
              </div>
              <StudyMonthlyChart />
              <StudyCategoryChart data={categories} />
            </div>

            <p className="mt-8 text-xs text-stone-500 dark:text-stone-500">
              데이터는 포트폴리오에 등록된 스터디·프로젝트 기록을 기준으로
              집계됩니다.
            </p>
          </div>
        </main>

        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}
