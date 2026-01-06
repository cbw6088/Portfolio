import Image from "next/image";
import quizgen from "@/styles/images/quizgen.png";
import goaldiary from "@/styles/images/goaldiary.png";
import type { ScrollToSection } from "./types";

type Props = { onScrollToSection: ScrollToSection };

export default function OverviewSection({ onScrollToSection }: Props) {
  return (
    <section className="h-screen grid grid-cols-1 lg:grid-cols-2 snap-start mx-12">
      <div className="flex justify-center items-center bg-gray-100">
        <div className="flex flex-col items-center text-4xl text-blue-600 font-LilitaOne tracking-wider">
          <div className="mt-4 lg:mt-0 lg:mb-8">QuizGen.</div>
          <Image
            src={quizgen}
            alt="QuizGen Image"
            width={500}
            height={500}
            placeholder="blur"
            priority
          />
          <div className="hidden lg:block text-lg text-gray-500 mt-4">
            2024.08 - 2024.09
          </div>
          <div className="hidden lg:block text-lg text-gray-800 text-center mt-8 font-BlackHanSans">
            PDF파일을 업로드하고 간편하게 나만의 문제지를 만들어
            <br />퀴즈를 풀어볼 수 있는 웹사이트
          </div>
          <button
            onClick={() => onScrollToSection(1)}
            className="text-lg text-white bg-gray-800 px-2 mt-4 md:mt-6 lg:mt-10"
          >
            VIEW
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="flex flex-col items-center text-4xl text-green-500 font-LilitaOne tracking-wider">
          <div className="mt-4 lg:mt-0 mb-4 lg:mb-8 xl:mb-4">GoalDiary.</div>
          <Image
            className="md:mt-2 lg:my-8"
            src={goaldiary}
            alt="goaldiary Image"
            width={600}
            height={600}
            placeholder="blur"
            priority
          />
          <div className="hidden lg:block text-lg text-gray-500 mt-2 md:mt-8 lg:mt-4 xl:mt-0">
            2024.03 - 2024.06
          </div>
          <div className="hidden lg:block text-lg text-gray-800 text-center mt-6 md:mt-8 xl:mt-6 font-BlackHanSans">
            최종 목표와 세부 목표를 나누어 한 단계 씩 해결하고
            <br /> 그에 맞는 피드백을 받으며 성장하는 어플리케이션
          </div>
          <button
            onClick={() => onScrollToSection(3)}
            className="text-lg text-white bg-gray-800 px-2 mt-4 md:mt-6 lg:mt-10"
          >
            VIEW
          </button>
        </div>
      </div>
    </section>
  );
}
