import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import InsightsPageClient from "./InsightsPageClient";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "스터디 게시글 추이, 카테고리 비중, 프로젝트·기술 스택 통계를 한눈에 보는 Insights",
  alternates: {
    canonical: `${SITE_URL}/insights`,
  },
  openGraph: {
    title: "Insights | Choi Byungwoo",
    description:
      "스터디·프로젝트 활동 통계 — 월별 추이, 카테고리, 기술 스택",
    url: `${SITE_URL}/insights`,
  },
};

export default function InsightsPage() {
  return <InsightsPageClient />;
}
