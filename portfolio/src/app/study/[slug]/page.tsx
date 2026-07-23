import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getStudyContent } from "@/lib/studyContent";
import { SITE_URL } from "@/lib/site";
import { STUDY_POSTS } from "../constants";
import StudyPostClient from "./StudyPostClient";

interface StudyPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return STUDY_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: StudyPostPageProps): Promise<Metadata> {
  const post = STUDY_POSTS.find((p) => p.slug === params.slug);
  const title = post?.title ?? params.slug;
  const description =
    post?.excerpt ??
    `${title} — Choi Byungwoo Study Archive`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/study/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/study/${params.slug}`,
      type: "article",
      ...(post?.date ? { publishedTime: post.date } : {}),
    },
  };
}

export default async function StudyPostPage({ params }: StudyPostPageProps) {
  const { slug } = params;
  const post = STUDY_POSTS.find((p) => p.slug === slug);
  const content = await getStudyContent(slug);

  if (content === null) {
    notFound();
  }

  return <StudyPostClient slug={slug} post={post} content={content} />;
}
