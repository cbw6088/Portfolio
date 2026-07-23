import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import StudyPageClient from "./StudyPageClient";

export const metadata: Metadata = {
  title: "Study",
  description:
    "프론트엔드·백엔드·SEO·보안·자격증 등 학습 노트를 정리한 Study Archive",
  alternates: {
    canonical: `${SITE_URL}/study`,
  },
  openGraph: {
    title: "Study | Choi Byungwoo",
    description: "학습 노트 Archive — Frontend, SEO, Security 등",
    url: `${SITE_URL}/study`,
  },
};

export default function StudyPage() {
  return <StudyPageClient />;
}
