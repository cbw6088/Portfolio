"use client";

import React from "react";
import Image from "next/image";
import MyImage from "@/styles/images/me.png";
import Phone from "@/styles/icon/phone.png";
import Mail from "@/styles/icon/mail.png";
import Git from "@/styles/icon/git.png";

interface IntroductionFirstSectionProps {
    onNext: () => void;
}

export default function IntroductionFirstSection({ onNext }: IntroductionFirstSectionProps) {
    return (
        <section className="h-screen flex flex-col justify-center items-center snap-start">
            <div className="flex flex-col items-center mt-12 md:mt-0">
                <Image
                    className="w-36 h-36 md:w-64 md:h-64"
                    src={MyImage}
                    alt="My Image"
                    width={256}
                    height={256}
                    placeholder="blur"
                    priority
                />
            </div>
            <div className="font-LilitaOne text-white text-sm md:text-lg lg:text-2xl bg-gray-800 px-2 mt-4 md:px-5 md:mt-8">
                Choi Byungwoo
            </div>
            <div className="text-orange-600 text-sm md:text-lg lg:text-2xl font-LilitaOne px-2">
                FRONT DEVELOPER
            </div>
            <div className="w-full grid grid-rows-1 mt-6 font-black">
                <div>
                    <div className="flex justify-center my-4 text-md md:text-lg lg:text-4xl text-gray-800 font-LilitaOne tracking-wider">
                        INTRODUCTION.
                    </div>
                    <div className="hidden md:block text-center text-sm lg:text-lg dark:text-gray-800">
                        성능 최적화에 강점을 가진 React와 TypeScript 기반의 프론트엔드 개발자입니다.<br/>
                        사용자 경험(UX)을 최우선으로 고려한 UI 구현에 열정을 가지고 있으며, 성능 개선을 통해 웹 애플리케이션의 최적화를 추구합니다.<br/>
                        협업을 통해 문제를 해결하고, 효율적인 코드 리뷰와 소통을 중시합니다.<br/>
                        회사에서 사용하는 기술을 빠르고 정확하게 학습해 실무에 적용함으로써 프로젝트에 기여하겠습니다.
                    </div>
                    <div className="block md:hidden text-center text-sm lg:text-lg dark:text-gray-800">
                        성능 최적화에 강점을 가진<br/>
                        React와 TypeScript 기반의 프론트엔드 개발자입니다.<br/>
                        사용자 경험(UX)을 최우선으로 고려한<br/>
                        UI 구현에 열정을 가지고 있으며,<br/>
                        성능 개선을 통해 웹 애플리케이션의 최적화를 추구합니다.<br/>
                        협업을 통해 문제를 해결하고,<br/>
                        효율적인 코드 리뷰와 소통을 중시합니다.<br/>
                        회사에서 사용하는 기술을 빠르고 정확하게 학습해<br/>
                        실무에 적용함으로써 프로젝트에 기여하겠습니다.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center mt-4 md:mt-12">
                    <div className="flex flex-row items-center">
                        <Image className="w-4 h-4 lg:w-6 lg:h-6" src={Phone} alt="Phone"/>
                        <div className="font-LilitaOne tracking-wider md:text-md lg:text-lg text-gray-800 ml-2">
                            010 4186 6088
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <Image className="w-4 h-4 lg:w-6 lg:h-6 md:ml-10" src={Mail} alt="Mail"/>
                        <div className="font-LilitaOne tracking-wider md:text-md lg:text-lg text-gray-800 ml-2">
                            cbw60881@gmail.com
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <Image className="w-4 h-4 lg:w-6 lg:h-6 md:ml-10" src={Git} alt="Git"/>
                        <a
                            href="https://github.com/cbw6088"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-LilitaOne tracking-wider md:text-md lg:text-lg text-gray-800 ml-2"
                        >
                            https://github.com/cbw6088
                        </a>
                    </div>
                </div>
            </div>
            <button onClick={onNext} className="mt-4 md:mt-8 text-gray-800 font-LilitaOne tracking-wider text-lg lg:text-2xl px-8 py-2">
                NEXT
            </button>
        </section>
    );
}
