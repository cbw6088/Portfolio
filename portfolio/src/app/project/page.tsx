import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import ProjectPageClient from "./ProjectPageClient";

export const metadata: Metadata = {
  title: "Project",
  description:
    "현업·개인 프로젝트 — Customer Portal 마이그레이션, 브랜드 사이트 SEO, QuizGen 등 Frontend 작업 모음",
  alternates: {
    canonical: `${SITE_URL}/project`,
  },
  openGraph: {
    title: "Project | Choi Byungwoo",
    description:
      "현업·개인 프로젝트 — Customer Portal, Brand Site SEO, QuizGen 등",
    url: `${SITE_URL}/project`,
  },
};

export default function ProjectPage() {
  return <ProjectPageClient />;
}
