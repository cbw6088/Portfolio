"use client";

import React from "react";

interface IntroductionSecondSectionProps {
    onBack: () => void;
}

export default function IntroductionSecondSection({ onBack }: IntroductionSecondSectionProps) {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-gray-100 snap-start">
            <div className="text-md md:text-lg lg:text-4xl text-gray-800 font-LilitaOne tracking-wider">
                EDUCATION.
            </div>
            <div className="text-sm md:text-lg text-center mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 dark:text-gray-800">
                    <div className="text-center md:text-left">2011.02 - 2014.02 졸업</div>
                    <div className="text-center md:text-left">
                        <span className="font-bold mb-4 md:mb-0">성동공업고등학교</span> 컴퓨터응용기계경영과
                    </div>
                    <div className="text-center md:text-left">2017.02 - 2019.02 졸업</div>
                    <div className="text-center md:text-left">
                        <span className="font-bold mb-4 md:mb-0">학점은행제</span> 실내디자인과
                    </div>
                    <div className="text-center md:text-left">2022.02 - 2025.02 졸업예정</div>
                    <div className="text-center md:text-left">
                        <span className="font-bold mb-4 md:mb-0">세종대학교</span> 컴퓨터공학과
                    </div>
                </div>
            </div>
            <div className="text-md md:text-lg lg:text-4xl text-gray-800 font-LilitaOne tracking-wider mt-8 md:mt-24">
                EXPERIENCES.
            </div>
            <div className="text-sm lg:text-lg text-center mt-4 dark:text-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                    <div className="text-center md:text-left">2023.01 - 2023.02 수료</div>
                    <div className="text-center md:text-left">
                        <span className="font-bold">42Seoul</span> 라피신9기
                    </div>
                </div>
            </div>
            <div className="text-md md:text-lg lg:text-4xl text-gray-800 font-LilitaOne tracking-wider mt-8 md:mt-24">
                STACKS.
            </div>
            <div className="mt-4 flex gap-2 md:gap-4 flex-wrap justify-center">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center my-1 md:my-2 gap-2 md:gap-4">
                        <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge" />
                        <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge" />
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
                    </div>
                    <div className="flex flex-row justify-center my-1 md:my-2 gap-2 md:gap-4">
                        <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter Badge" />
                        <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge" />
                        <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native Badge" />
                        <img className="hidden md:block" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Badge" />
                        <img className="hidden md:block" src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled-Components Badge" />
                    </div>
                    <div className="block md:hidden flex flex-row justify-center my-1 md:my-2 gap-2 md:gap-4">
                        <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Badge" />
                        <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled-Components Badge" />
                    </div>
                    <div className="flex flex-row justify-center my-1 md:my-2 gap-2 md:gap-4">
                        <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS Badge" />
                        <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Badge" />
                        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge" />
                        <img className="hidden md:block" src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack Badge" />
                        <img className="hidden md:block" src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge" />
                    </div>
                    <div className="block md:hidden flex flex-row justify-center my-1 md:my-2 gap-2 md:gap-4">
                        <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack Badge" />
                        <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge" />
                    </div>
                </div>
            </div>
            <button onClick={onBack} className="mt-8 text-gray-800 font-LilitaOne tracking-wider text-lg lg:text-2xl px-8 py-2">
                BACK
            </button>
        </section>
    );
}
