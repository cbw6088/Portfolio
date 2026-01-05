import "@/styles/globals.css";
import type { Metadata } from "next";
import ReduxProvider from "./ReduxProvider";

export const metadata: Metadata = {
  title: "Portfolio | Choi Byungwoo",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
