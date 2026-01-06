import Image from "next/image";
import lucid from "@/styles/images/lucid.png";

export default function DrLucidSection() {
  return (
    <section className="h-screen grid grid-cols-1 lg:grid-cols-2 snap-start mx-12">
      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center font-LilitaOne tracking-wider">
          <div className="flex flex-col items-center md:items-start w-[100%] md:w-[70%]">
            <div className="text-[2rem] md:text-[4rem] text-blue-800 mt-8 md:mt-0">
              Dr.lucid.
            </div>
            <div className="text-sm md:text-lg text-gray-800 font-BlackHanSans mb-2 md:mb-10">
              비대면 의료 플랫폼
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="block md:hidden mb-4 md:mb-12"
                src={lucid}
                alt="Dr.lucid Image"
                width={600}
                height={600}
                placeholder="blur"
                priority
              />
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-10 md:w-28">
                기간:
              </div>
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans">
                2024.08 - (진행중)
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-12 md:w-28">
                플랫폿:
              </div>
              <div className="text-sm md:text-lg text-gray-600">Web</div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-22 md:w-28">
                인원:
              </div>
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans">
                FE 2명, BE 5명, 기획 2명, 디자인 4명
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-18 md:w-28">
                역할:
              </div>
              <div className="text-sm md:text-lg text-gray-600">
                Front-End(BackOffice)
              </div>
            </div>
            <div className="text-lg md:text-2xl text-gray-500 font-BlackHanSans my-2 md:my-8">
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
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-24 md:w-28">
                프레임워크:
              </div>
              <div className="text-sm md:text-lg text-gray-600">
                ReactNative, Next.js, StringBoot
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-24 md:w-28">
                라이브러리:
              </div>
              <div className="text-sm md:text-lg text-gray-600">React</div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 w-18 md:w-28">
                ETC:
              </div>
              <div className="text-sm md:text-lg text-gray-600">
                Github, Figma, ReduxToolkit, Rest API, WBS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          className="hidden md:block mb-12"
          src={lucid}
          alt="Dr.lucid Image"
          width={600}
          height={600}
          placeholder="blur"
          priority
        />
      </div>
    </section>
  );
}
