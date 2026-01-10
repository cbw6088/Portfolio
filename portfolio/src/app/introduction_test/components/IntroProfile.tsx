"use client";

import Image from "next/image";
import MyImage from "@/styles/images/me.png";
import {
  INTRO_NAME,
  INTRO_ROLE,
  INTRO_DESCRIPTION,
  INTRO_CONTACTS,
} from "../constants";

export default function IntroProfile() {
  return (
    <section className="pt-8 pb-12 border-b border-stone-200">
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 flex items-center justify-center">
          {/* 테두리만 있는 사각형 - z축 뒤, 사진과 동일 높이·약간 좌측 */}
          <div
            className="absolute w-[85%] h-[85%] border-2 border-stone-400 bg-transparent pointer-events-none rotate-45 z-0"
            style={{ left: "2%", top: "7.5%", aspectRatio: "1" }}
          />
          {/* 사진: 다이아몬드(45도 회전한 사각형), 앞에 배치 */}
          <div
            className="absolute w-[85%] h-[85%] left-[7.5%] top-[7.5%] overflow-hidden rotate-45 z-10"
            style={{ aspectRatio: "1" }}
          >
            <div
              className="w-full h-full -rotate-45 scale-150"
              style={{ aspectRatio: "1" }}
            >
              <Image
                className="w-full h-full object-cover"
                src={MyImage}
                alt={INTRO_NAME}
                width={320}
                height={320}
                placeholder="blur"
                priority
              />
            </div>
          </div>
        </div>
        <h1 className="mt-6 font-semibold text-xl sm:text-2xl text-stone-800">
          {INTRO_NAME}
        </h1>
        <p className="text-amber-600 text-sm sm:text-base font-medium mt-0.5">
          {INTRO_ROLE}
        </p>
        <div className="mt-6 space-y-2 max-w-lg text-center">
          {INTRO_DESCRIPTION.map((line, i) => (
            <p key={i} className="text-stone-600 text-sm leading-relaxed">
              {line}
            </p>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {INTRO_CONTACTS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-amber-600 hover:text-amber-700 hover:underline underline-offset-2"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
