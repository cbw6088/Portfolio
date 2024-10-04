import React, { useState } from "react";
import Image from 'next/image';
import { useDispatch } from "react-redux";
import SideButtons from "@/components/button/SideButton";
import { useLocation, Link } from "react-router-dom";
import MyImage from "../styles/images/me.png";
import Phone from "../styles/icon/phone.png";
import Mail from "../styles/icon/mail.png";
import Git from "../styles/icon/git.png";

export default function introduction() {
    const handleScrollToSection = (section: number) => {
        const targetSection = document.querySelectorAll('section')[section];
        targetSection?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="w-screen h-screen bg-gray-100 overflow-y-scroll scroll-start snap-y snap-mandatory">
            {/* 첫 번째 섹션 */}
            <section className="h-screen flex flex-col justify-center items-center snap-start">
                <div className="flex flex-col items-center">
                    <Image
                        className="w-64 h-64"
                        src={MyImage}
                        alt="My Image"
                    />
                    </div>
                    <div className="font-LilitaOne text-white text-2xl bg-gray-800 px-5 mt-8">
                        Choi Byungwoo
                    </div>
                    <div className="text-orange-600 text-2xl font-LilitaOne px-2">
                        FRONT DEVELOPER
                    </div>
                    <div className="w-full grid grid-rows-1 mt-6 font-black">
                        <div>
                            <div className="flex justify-center my-4 text-4xl text-gray-800 font-LilitaOne tracking-wider">
                                INTRODUCTION.
                            </div>
                            <div className="text-center text-lg">
                                성능 최적화에 강점을 가진 React와 TypeScript 기반의 프론트엔드 개발자입니다.<br/>
                                사용자 경험(UX)을 최우선으로 고려한 UI 구현에 열정을 가지고 있으며, 성능 개선을 통해 웹 애플리케이션의 최적화를 추구합니다.<br/>
                                협업을 통해 문제를 해결하고, 효율적인 코드 리뷰와 소통을 중시합니다.<br/>
                                회사에서 사용하는 기술을 빠르고 정확하게 학습해 실무에 적용함으로써 프로젝트에 기여하겠습니다.
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center mt-12">
                            <Image className="w-6 h-6" src={Phone} alt="Phone"/>
                            <div className="font-LilitaOne tracking-wider text-lg text-gray-800 ml-2">
                                010 4186 6088.
                            </div>
                            <Image className="w-6 h-6 ml-10" src={Mail} alt="Mail"/>
                            <div className="font-LilitaOne tracking-wider text-lg text-gray-800 ml-2">
                                cbw60881@gmail.com
                            </div>
                            <Image className="w-6 h-6 ml-10" src={Git} alt="Git"/>
                            <a
                                href="https://github.com/cbw6088"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-LilitaOne tracking-wider text-lg text-gray-800 ml-2"
                            >
                                https://github.com/cbw6088
                            </a>
                    </div>
                </div>
                <button onClick={() => handleScrollToSection(1)} className="mt-8 text-gray-800 font-LilitaOne tracking-wider text-2xl px-8 py-2">
                    NEXT
                </button>
            </section>
            {/* 두 번째 섹션 */}
            <section className="h-screen flex flex-col justify-center items-center bg-gray-100 snap-start">
                <div className="text-4xl text-gray-800 font-LilitaOne tracking-wider">
                    EDUCATION.
                </div>
                <div className="text-lg text-center mt-4">
                    <div className="grid grid-cols-2 gap-x-8">
                        <div className="text-left">
                            2011.02 - 2014.02 졸업
                        </div>
                        <div className="text-left">
                            <span className="font-bold">성동공업고등학교</span> 컴퓨터응용기계경영과
                        </div>
                        <div className="text-left">
                            2017.02 - 2019.02 졸업
                        </div>
                        <div className="text-left">
                            <span className="font-bold">호서직업전문학교</span> 실내디자인과
                        </div>
                        <div className="text-left">
                            2022.02 - 2025.02 졸업예정
                        </div>
                        <div className="text-left">
                            <span className="font-bold">세종대학교</span> 컴퓨터공학과
                        </div>
                    </div>
                </div>
                <div className="text-4xl text-gray-800 font-LilitaOne tracking-wider mt-24">
                    EXPERIENCES.
                </div>
                <div className="text-lg text-center mt-4">
                    <div className="grid grid-cols-2 gap-x-8">
                        <div className="text-left">
                            2023.01 - 2023.02 수료
                        </div>
                        <div className="text-left">
                            <span className="font-bold">42Seoul</span> 라피신9기
                        </div>
                    </div>
                </div>
                <div className="text-4xl text-gray-800 font-LilitaOne tracking-wider mt-24">
                    STACKS.
                </div>
                <div className="mt-4 flex gap-4 flex-wrap justify-center">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-center my-2 gap-4">
                            <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge" />
                            <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge" />
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
                            <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" alt="C Language Badge" />
                        </div>
                        <div className="flex flex-row justify-center my-2 gap-4">
                            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge" />
                            <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native Badge" />
                            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Badge" />
                            <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled-Components Badge" />
                        </div>
                        <div className="flex flex-row justify-center my-2 gap-4">
                            <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS Badge" />
                            <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Badge" />
                            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
                            <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack Badge" />
                            <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge" />
                        </div>
                    </div>
                </div>
                <button onClick={() => handleScrollToSection(0)} className="mt-8 text-gray-800 font-LilitaOne tracking-wider text-2xl px-8 py-2">
                    BACK
                </button>
            </section>
            <SideButtons />
        </div>
    );
}