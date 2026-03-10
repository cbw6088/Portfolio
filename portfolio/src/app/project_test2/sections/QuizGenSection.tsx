import Image from "next/image";
import Git from "@/styles/icon/git.png";
import Web from "@/styles/icon/web.png";
import quizgen from "@/styles/images/quizgen.png";
import quzigen2 from "@/styles/images/quizgen2.png";

export default function QuizGenSection() {
  return (
    <>
      <section className="h-screen grid grid-cols-1 lg:grid-cols-2 snap-start lg:mx-12">
        <div className="flex justify-center items-center">
          <div className="w-full flex justify-center font-LilitaOne tracking-wider">
            <div className="flex flex-col items-center md:items-start w-[85%] md:w-[70%]">
              <div className="text-[2rem] md:text-[5rem] text-blue-600 mt-6 md:mt-0">
                QuizGen.
              </div>
              <div className="text-sm md:text-lg text-gray-800 font-BlackHanSans mb-0 lg:mb-10">
                PDF를 퀴즈로 만들어주는 웹서비스
              </div>
              <div className="block md:hidden flex flex-col justify-center items-center">
                <Image
                  className="mb-4"
                  src={quizgen}
                  alt="QuizGen Image"
                  width={600}
                  height={600}
                  placeholder="blur"
                  priority
                />
                <div className="flex flex-col justify-center">
                  <div className="w-full flex flex-row justify-center mb-2">
                    <Image
                      src={Web}
                      alt="WebLogo"
                      width={20}
                      height={20}
                      placeholder="blur"
                      priority
                    />
                    <a
                      href="https://quizgen.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-LilitaOne tracking-wider text-sm text-gray-800 ml-2"
                    >
                      https://quizgen.site/
                    </a>
                  </div>
                  <div className="w-full flex flex-row justify-start">
                    <Image
                      src={Git}
                      alt="GitLogo"
                      width={20}
                      height={20}
                      placeholder="blur"
                      priority
                    />
                    <a
                      href="https://github.com/August-ToyProject/PDF-Quiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-LilitaOne tracking-wider text-sm text-gray-800 ml-2"
                    >
                      https://github.com/August-ToyProject
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mb-2 mt-4">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-10 md:w-28">
                  기간:
                </div>
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans">
                  2024.08 - 2024.09 (약 6주)
                </div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-12 md:w-28">
                  플랫폿:
                </div>
                <div className="text-sm md:text-lg text-gray-600">Web</div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-10 md:w-28">
                  인원:
                </div>
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans">
                  FE 2명, BE 2명
                </div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-18 md:w-28">
                  역할:
                </div>
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans">
                  Front-End(팀장)
                </div>
              </div>
              <div className="text-lg md:text-2xl text-gray-500 font-BlackHanSans md:my-8">
                개발환경
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-10 md:w-28">
                  언어:
                </div>
                <div className="text-sm md:text-lg text-gray-600">
                  TypeScript
                </div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-18 md:w-28">
                  프레임워크:
                </div>
                <div className="text-sm md:text-lg text-gray-600">
                  SpringBoot
                </div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-18 md:w-28">
                  라이브러리:
                </div>
                <div className="text-sm md:text-lg text-gray-600">React</div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-bold w-16 md:w-28">
                  DevOps:
                </div>
                <div className="text-sm md:text-lg text-gray-600">
                  Docker, AWS EC2
                </div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-bold w-18 md:w-28">
                  ETC:
                </div>
                <div className="text-sm md:text-lg text-gray-600">
                  Github, Figma, Vite, Langchain, Rest API
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="hidden md:block lg:mb-12"
            src={quizgen}
            alt="QuizGen Image"
            width={600}
            height={600}
            placeholder="blur"
            priority
          />
          <div className="hidden md:block flex flex-col justify-center">
            <div className="w-full flex flex-row justify-start">
              <Image
                src={Git}
                alt="GitLogo"
                width={25}
                height={25}
                placeholder="blur"
                priority
              />
              <a
                href="https://github.com/August-ToyProject/PDF-Quiz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-LilitaOne tracking-wider text-md text-gray-800 ml-2"
              >
                https://github.com/August-ToyProject/PDF-Quiz
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen grid grid-cols-1 lg:grid-cols-2 snap-start mx-12">
        <div className="flex justify-center items-center">
          <div className="w-full flex justify-center font-LilitaOne tracking-wider">
            <div className="flex flex-col items-start w-[100%] md:w-[70%]">
              <div className="text-[2rem] md:text-[5rem] text-orange-600 mt-10 md:mt-0">
                About.
              </div>
              <div className="text-sm md:text-lg text-gray-800 font-BlackHanSans mb-4 md:mb-10">
                문제 전송 시간 94% 단축 및 UI/UX 개선
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm lg:text-lg text-gray-600 font-BlackHanSans">
                  이 프로젝트는 사용자가 본인의 PDF 파일을 바탕으로 문제를
                  생성하고 풀 수 있는 서비스로,
                  <br />
                  이용자 경험 최적화가 핵심 과제였습니다.
                  <br />
                  초기에는 UI/UX 미흡과 데이터 전송 속도 문제로 어려움이
                  많았습니다.
                  <br />
                  사용자들이 메인 버튼을 찾기까지 평균 7번의 클릭이 필요했고,
                  <br />
                  데이터 전송에 50초가 걸렸습니다. 신규 사용자 이탈률이 높아
                  문제 해결이 시급했습니다.
                  <br />
                  <br />
                  Clarity로 사용자 행동 패턴을 분석하고 설문조사를 통해 불편
                  사항을 확인한 후,
                  <br />
                  UI를 개선하여 사용자가 메인 기능을 찾는 과정까지의 클릭은 2회
                  이하로 감소하였고, SSE(Server-Sent Events)로
                  <br />
                  전송 속도를 4초로 단축해 대기 시간을 94% 줄였습니다.
                  <br />
                  이를 통해 신규 사용자 이탈률은 60% 이상 감소했습니다.
                  <br />
                  Clarity와 SSE를 활용해 서비스 품질을 크게 개선할 수 있었습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="hidden md:block mb-12"
            src={quzigen2}
            alt="QuizGen Image"
            width={600}
            height={600}
            placeholder="blur"
            priority
          />
        </div>
      </section>
    </>
  );
}
