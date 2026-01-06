import Image from "next/image";
import Git from "@/styles/icon/git.png";
import goaldiary from "@/styles/images/goaldiary.png";
import goaldiary2 from "@/styles/images/goaldiary2.png";
import type { ScrollToSection } from "./types";

type Props = { onScrollToSection: ScrollToSection };

export default function GoalDiarySection({ onScrollToSection }: Props) {
  return (
    <>
      <section className="h-screen grid grid-cols-1 lg:grid-cols-2 snap-start lg:mx-12">
        <div className="flex justify-center items-center">
          <div className="w-full flex justify-center font-LilitaOne tracking-wider">
            <div className="flex flex-col items-center md:items-start w-[100%] md:w-[70%]">
              <div className="text-[2rem] md:text-[5rem] text-green-600 mt-6 md:mt-0">
                GoalDiary.
              </div>
              <div className="text-sm md:text-lg text-gray-800 font-BlackHanSans mb-4 md:mb-10">
                목표를 등록 후 AI에게 피드백을 받는 앱 서비스
              </div>
              <div className="block md:hidden flex flex-col justify-center items-center">
                <Image
                  className="mb-4 md:mb-12"
                  src={goaldiary}
                  alt="GoalDiary Image"
                  width={600}
                  height={600}
                  placeholder="blur"
                  priority
                />
                <div className="w-full flex flex-row justify-center">
                  <Image
                    src={Git}
                    alt="GitLogo"
                    width={20}
                    height={20}
                    placeholder="blur"
                    priority
                  />
                  <a
                    href="https://github.com/GOALDIARY/GOALDIARY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-LilitaOne tracking-wider text-sm md:text-lg text-gray-800 ml-2"
                  >
                    https://github.com/GOALDIARY/GOALDIARY
                  </a>
                </div>
              </div>
              <div className="flex flex-row mb-2 mt-4 md:mt-0">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-10 md:w-28">
                  기간:
                </div>
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans">
                  2024.04 - 2024.06 (약 10주)
                </div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-12 md:w-28">
                  플랫폿:
                </div>
                <div className="text-sm md:text-lg text-gray-600">App</div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-10 md:w-28">
                  인원:
                </div>
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans">
                  FE 1명, BE 2명, AI 1명
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
              <div className="text-lg md:text-2xl text-gray-500 font-BlackHanSans my-2 md:my-8">
                개발환경
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-10 md:w-28">
                  언어:
                </div>
                <div className="text-sm md:text-lg text-gray-600">Kotlin</div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-18 md:w-28">
                  프레임워크:
                </div>
                <div className="text-sm md:text-lg text-gray-600">
                  Jetpack
                </div>
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm md:text-lg text-gray-600 font-bold w-18  md:w-28">
                  ETC:
                </div>
                <div className="text-sm md:text-lg text-gray-600">
                  Github, Figma, Rest API
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="hidden md:block mb-12"
            src={goaldiary}
            alt="GoalDiary Image"
            width={600}
            height={600}
            placeholder="blur"
            priority
          />
          <div className="w-full flex flex-row justify-center">
            <Image
              src={Git}
              alt="GitLogo"
              width={25}
              height={25}
              className="hidden md:block"
              placeholder="blur"
              priority
            />
            <a
              href="https://github.com/GOALDIARY/GOALDIARY"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block font-LilitaOne tracking-wider text-md text-gray-800 ml-2"
            >
              https://github.com/GOALDIARY/GOALDIARY
            </a>
          </div>
        </div>
      </section>

      <section className="h-screen grid grid-cols-1 lg:grid-cols-2 snap-start mx-12">
        <div className="flex justify-center items-center">
          <div className="w-full flex justify-center font-LilitaOne tracking-wider">
            <div className="flex flex-col items-start w-[85%] md:w-[70%]">
              <div className="text-[2rem] md:text-[5rem] text-orange-600 mt-10 md:mt-0">
                About.
              </div>
              <div className="text-sm md:text-lg text-gray-800 font-BlackHanSans mb-0 md:mb-10">
                팀장과 프론트엔드 개발자로서의 역할
              </div>
              <div className="flex flex-row mb-2">
                <div className="text-sm lg:text-lg text-gray-600 font-BlackHanSans">
                  프로젝트를 진행할 때 팀원들 모두 처음 협업하는 상황이었기에,
                  <br />
                  문제 발생 시 즉각 공유하는 소통 규칙을 도입하여 협업 효율성을
                  높였습니다.
                  <br />
                  <br />
                  프론트엔드 작업으로는 로그인, 회원가입, 일지 작성 페이지를
                  설계하고,
                  <br />
                  Material Design을 활용해 UI를 구현했습니다.
                  <br />
                  특히 직관적인 사용자 경험을 고려하며 앱의 주요 기능을 안정적으로
                  완성했습니다.
                  <br />
                  <br />
                  다만 개발 기간이 촉박해 성능보다는 기능 구현에 집중하게
                  <br />
                  되었습니다. 그 결과 UI/UX에 대한 세밀한 고려가 부족했던 점이
                  아쉬웠습니다. 이를 통해 초기 설계 단계에서부터
                  <br />
                  사용자 경험을 충분히 반영해야 한다는 교훈을 얻었고, 다음
                  프로젝트에서는 이를 보완하고자 합니다.
                  <br />
                  <br />
                  이번 프로젝트는 협업과 소통, 그리고 효율적인 일정 관리의
                  중요성을 깨닫는 좋은 기회가 되었으며, 프론트엔드
                  <br />
                  개발자로서의 역량을 한층 더 성장시킬 수 있었습니다.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="hidden md:block mb-12"
            src={goaldiary2}
            alt="GoalDiary2 Image"
            width={600}
            height={600}
            placeholder="blur"
            priority
          />
        </div>
      </section>

      <section className="h-screen snap-start flex items-center justify-center">
        <div className="flex flex-col items-center justify-between font-LilitaOne tracking-wider h-full">
          <div className="flex-grow flex items-center justify-center">
            <div className="text-[3rem] md:text-[5rem] lg:text-[7rem] text-gray-800">
              ETC.
            </div>
          </div>
          <button
            onClick={() => onScrollToSection(6)}
            className="w-20 text-lg text-white bg-gray-800 mb-12"
          >
            NEXT
          </button>
        </div>
      </section>
    </>
  );
}
