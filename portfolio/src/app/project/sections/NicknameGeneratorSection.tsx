import Image from "next/image";
import nickname from "@/styles/images/nickname.png";

export default function NicknameGeneratorSection() {
  return (
    <section className="h-screen grid grid-cols-1 lg:grid-cols-2 snap-start mx-12">
      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center font-LilitaOne tracking-wider">
          <div className="flex flex-col items-center md:items-start w-[100%] md:w-[70%]">
            <div className="text-[2rem] md:text-[4rem] text-pink-500 mt-8 md:mt-0">
              NicknameGenerator.
            </div>
            <div className="text-sm md:text-lg text-gray-800 font-BlackHanSans mb-2 md:mb-10">
              닉네임 랜덤 생성 오픈 API
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                className="block md:hidden mb-12"
                src={nickname}
                alt="Nickname Image"
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
                2024.07 - 2024.07 (2주)
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-12 md:w-28">
                플랫폿:
              </div>
              <div className="text-sm md:text-lg text-gray-600">Web</div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-18 md:w-28">
                인원:
              </div>
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans">
                FE 1명, AI 1명
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-BlackHanSans w-12 md:w-28">
                역할:
              </div>
              <div className="text-sm md:text-lg text-gray-600">
                Front-End
              </div>
            </div>
            <div className="text-lg md:text-2xl text-gray-500 font-BlackHanSans my-8">
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
              <div className="text-sm md:text-lg text-gray-600 w-18 md:w-28 font-BlackHanSans">
                라이브러리:
              </div>
              <div className="text-sm md:text-lg text-gray-600">React</div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-bold w-14 md:w-28">
                DevOps:
              </div>
              <div className="text-sm md:text-lg text-gray-600">
                Docker, AWS EC2
              </div>
            </div>
            <div className="flex flex-row mb-2">
              <div className="text-sm md:text-lg text-gray-600 font-bold w-8 md:w-28">
                ETC:
              </div>
              <div className="text-sm md:text-lg text-gray-600">
                Github, Figma, Vite, Rest API
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          className="hidden md:block mb-12"
          src={nickname}
          alt="Nickname Image"
          width={600}
          height={600}
          placeholder="blur"
          priority
        />
      </div>
    </section>
  );
}
