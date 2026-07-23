import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface StudyMarkdownProps {
  content: string;
}

/** 마크다운 본문 — Server/Client 모두에서 동일하게 SSR 가능 */
export default function StudyMarkdown({ content }: StudyMarkdownProps) {
  return (
    <div className="mt-6 study-markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-xl font-semibold text-stone-800 mt-8 mb-3 first:mt-0 dark:text-stone-100">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-semibold text-stone-800 mt-6 mb-2 dark:text-stone-100">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-medium text-stone-800 mt-4 mb-2 dark:text-stone-100">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-sm font-medium text-stone-700 mt-3 mb-1 dark:text-stone-200">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-stone-600 text-sm leading-relaxed my-2 dark:text-stone-300">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-stone-600 text-sm my-3 space-y-1 dark:text-stone-300">
              {children}
            </ul>
          ),
          table: ({ children }) => (
            <div className="my-4 overflow-x-auto">
              <table className="min-w-full text-sm text-left border border-stone-200 rounded-md overflow-hidden dark:border-stone-700">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-200">
              {children}
            </thead>
          ),
          tbody: ({ children }) => (
            <tbody className="text-stone-600 dark:text-stone-300">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="border-b border-stone-200 last:border-b-0 dark:border-stone-700">
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
            <ol className="list-decimal list-inside text-stone-600 text-sm my-3 space-y-1 dark:text-stone-300">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="ml-2">{children}</li>,
          code: ({ className, children }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <pre className="my-4 p-4 rounded-lg bg-stone-100 border border-stone-200 text-sm overflow-x-auto dark:bg-stone-900 dark:border-stone-700">
                  <code className={className}>{children}</code>
                </pre>
              );
            }
            return (
              <code className="px-1.5 py-0.5 rounded bg-stone-200 text-stone-800 text-sm font-mono dark:bg-stone-800 dark:text-stone-100">
                {children}
              </code>
            );
          },
          pre: ({ children }) => <>{children}</>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-amber-500/50 pl-4 my-3 text-stone-600 text-sm italic dark:text-stone-300">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 underline underline-offset-2 dark:hover:text-amber-400"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-stone-800 dark:text-stone-100">
              {children}
            </strong>
          ),
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt ?? ""}
              className="my-4 w-full rounded-lg border border-stone-200 dark:border-stone-700"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
