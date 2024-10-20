import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
        <link
          href='https://fonts.googleapis.com/css2?family=Lilita+One&display=swap'
          rel="stylesheet"
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap'
          rel="stylesheet"
        />
        <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
