"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SideButtonTest from "@/components/button/SideButtonTest";
import TopBar from "@/components/bar/TopBar";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import { STUDY_POSTS } from "../constants";

export default function StudyPostPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const slug = (params?.slug as string) ?? "";
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const post = STUDY_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    dispatch(showBar("Home"));
  }, [dispatch]);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);
    fetch(`/api/study/${encodeURIComponent(slug)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setContent(data.content ?? "");
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <div className="fixed inset-0 flex flex-col">
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-6 py-8 sm:py-12">
            <Link
              href="/study"
              className="text-sm text-amber-600 hover:text-amber-700 font-medium"
            >
              ← 목록으로
            </Link>
            <article className="mt-6">
              <h1 className="font-semibold text-2xl sm:text-3xl text-stone-800 tracking-tight">
                {post?.title ?? (slug ? decodeURIComponent(slug) : "글")}
              </h1>
              {post?.date && (
                <time className="text-stone-500 text-sm mt-1 block">
                  {post.date}
                </time>
              )}
              {loading && (
                <p className="text-stone-500 text-sm mt-4">불러오는 중...</p>
              )}
              {error && (
                <p className="text-stone-500 text-sm mt-4">
                  글을 불러올 수 없습니다.
                </p>
              )}
              {!loading && !error && content !== null && (
                <div className="mt-6 study-markdown">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-xl font-semibold text-stone-800 mt-8 mb-3 first:mt-0">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-lg font-semibold text-stone-800 mt-6 mb-2">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-base font-medium text-stone-800 mt-4 mb-2">
                          {children}
                        </h3>
                      ),
                      h4: ({ children }) => (
                        <h4 className="text-sm font-medium text-stone-700 mt-3 mb-1">
                          {children}
                        </h4>
                      ),
                      p: ({ children }) => (
                        <p className="text-stone-600 text-sm leading-relaxed my-2">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside text-stone-600 text-sm my-3 space-y-1">
                          {children}
                        </ul>
                      ),
                      table: ({ children }) => (
                        <div className="my-4 overflow-x-auto">
                          <table className="min-w-full text-sm text-left border border-stone-200 rounded-md overflow-hidden">
                            {children}
                          </table>
                        </div>
                      ),
                      thead: ({ children }) => (
                        <thead className="bg-stone-100 text-stone-700">
                          {children}
                        </thead>
                      ),
                      tbody: ({ children }) => (
                        <tbody className="text-stone-600">{children}</tbody>
                      ),
                      tr: ({ children }) => (
                        <tr className="border-b border-stone-200 last:border-b-0">
                          {children}
                        </tr>
                      ),
                      th: ({ children }) => (
                        <th className="px-3 py-2 font-semibold">{children}</th>
                      ),
                      td: ({ children }) => (
                        <td className="px-3 py-2 align-top">{children}</td>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside text-stone-600 text-sm my-3 space-y-1">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="ml-2">{children}</li>
                      ),
                      code: ({ className, children }) => {
                        const isBlock = className?.includes("language-");
                        if (isBlock) {
                          return (
                            <pre className="my-4 p-4 rounded-lg bg-stone-100 border border-stone-200 text-sm overflow-x-auto">
                              <code className={className}>{children}</code>
                            </pre>
                          );
                        }
                        return (
                          <code className="px-1.5 py-0.5 rounded bg-stone-200 text-stone-800 text-sm font-mono">
                            {children}
                          </code>
                        );
                      },
                      pre: ({ children }) => <>{children}</>,
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-amber-500/50 pl-4 my-3 text-stone-600 text-sm italic">
                          {children}
                        </blockquote>
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 hover:text-amber-700 underline underline-offset-2"
                        >
                          {children}
                        </a>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-stone-800">
                          {children}
                        </strong>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              )}
            </article>
          </div>
        </main>
        <SideButtonTest />
        <TopBar />
      </div>
    </div>
  );
}
