"use client";

import Image from "next/image";
import MyImage from "@/styles/images/me.png";
import {
  INTRO_NAME,
  INTRO_ROLE,
  INTRO_DESCRIPTION,
  INTRO_CONTACTS,
  INTRO_EDUCATION,
  INTRO_EXPERIENCES,
  INTRO_STACK_BADGES,
} from "@/app/introduction/constants";
import PdfShell from "./PdfShell";

interface PdfIntroProps {
  pageNumber: number;
  totalPages: number;
}

export default function PdfIntro({ pageNumber, totalPages }: PdfIntroProps) {
  return (
    <PdfShell section="Introduction" pageNumber={pageNumber} totalPages={totalPages}>
      <div className="pdf-intro">
        <div className="pdf-intro-photo">
          <div className="pdf-intro-photo-frame" aria-hidden />
          <div className="pdf-intro-photo-clip">
            <div className="pdf-intro-photo-inner">
              <Image
                src={MyImage}
                alt={INTRO_NAME}
                width={220}
                height={220}
                className="pdf-intro-photo-img"
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div className="pdf-intro-about">
          {INTRO_DESCRIPTION.map((line) => (
            <p key={line} className="break-keep">
              {line}
            </p>
          ))}
        </div>

        <div className="pdf-intro-identity">
          <h2 className="pdf-intro-name">{INTRO_NAME}</h2>
          <p className="pdf-intro-role">{INTRO_ROLE}</p>
          <ul className="pdf-intro-contacts">
            {INTRO_CONTACTS.map((c) => (
              <li key={c.href}>{c.label}</li>
            ))}
          </ul>
        </div>

        <div className="pdf-intro-meta">
          <section className="pdf-block">
            <h3 className="pdf-subhead">기술 스택</h3>
            <ul className="pdf-stack-list">
              {INTRO_STACK_BADGES.map((s) => (
                <li key={s.label}>{s.label}</li>
              ))}
            </ul>
          </section>

          <section className="pdf-block">
            <h3 className="pdf-subhead">교육</h3>
            <ul className="pdf-timeline">
              {INTRO_EDUCATION.map((item) => (
                <li key={item.name}>
                  <span className="pdf-timeline-period">{item.period}</span>
                  <span className="pdf-timeline-body">
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="pdf-block">
            <h3 className="pdf-subhead">경력</h3>
            <ul className="pdf-timeline">
              {INTRO_EXPERIENCES.map((item) => (
                <li key={item.name}>
                  <span className="pdf-timeline-period">{item.period}</span>
                  <span className="pdf-timeline-body">
                    <strong>{item.name}</strong>
                    <span>{item.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </PdfShell>
  );
}
