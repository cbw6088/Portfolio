import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio PDF",
  description: "포트폴리오 PDF 인쇄용 뷰",
};

export default function PdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="route-pdf bg-stone-50 text-stone-800">{children}</div>;
}
