import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import IntroductionPageClient from "./IntroductionPageClient";

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "성능 최적화에 강점을 가진 Frontend Developer Choi Byungwoo 소개 — 학력, 경력, 기술 스택, Core Strengths",
  alternates: {
    canonical: `${SITE_URL}/introduction`,
  },
  openGraph: {
    title: "Introduction | Choi Byungwoo",
    description:
      "Frontend Developer Choi Byungwoo — 학력, 경력, 스택, Core Strengths",
    url: `${SITE_URL}/introduction`,
  },
};

export default function IntroductionPage() {
  return <IntroductionPageClient />;
}
