"use client";

import { HOME_NAME, HOME_TAGLINE } from "@/app/constants";
import { INTRO_CONTACTS } from "@/app/introduction/constants";
import PdfShell from "./PdfShell";

const PORTFOLIO_URL = "https://portfolio-cbw.vercel.app/";

export default function PdfCover() {
  return (
    <PdfShell bare>
      <div className="pdf-cover">
        <div className="pdf-cover-accent" aria-hidden />
        <div className="pdf-cover-inner">
          <p className="pdf-kicker">Portfolio</p>
          <h1 className="pdf-cover-title">
            Frontend
            <span className="pdf-cover-title-accent">Developer</span>
          </h1>
          <p className="pdf-cover-tagline break-keep">{HOME_TAGLINE}</p>
          <div className="pdf-cover-rule" aria-hidden />
          <p className="pdf-cover-name">{HOME_NAME}</p>
          <ul className="pdf-cover-contacts">
            {INTRO_CONTACTS.map((c) => (
              <li key={c.href}>
                <a href={c.href}>{c.label}</a>
              </li>
            ))}
          </ul>
          <p className="pdf-cover-site break-keep">
            웹 포트폴리오 ·{" "}
            <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">
              {PORTFOLIO_URL.replace(/\/$/, "")}
            </a>
          </p>
        </div>
      </div>
    </PdfShell>
  );
}
