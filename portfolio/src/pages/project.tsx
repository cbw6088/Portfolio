import React, { useState } from "react";
import Image from 'next/image';
import { useDispatch } from "react-redux";
import SideButtons from "@/components/button/SideButton";
import { useLocation, Link } from "react-router-dom";
import MyImage from "../styles/images/me.png";
import Phone from "../styles/icon/phone.png";
import Mail from "../styles/icon/mail.png";
import Git from "../styles/icon/git.png";

export default function project() {

    const handleScrollToSection = (section: number) => {
        const targetSection = document.querySelectorAll('section')[section];
        targetSection?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return(
        <div className="w-screen h-screen bg-gray-100 overflow-y-scroll scroll-start snap-y snap-mandatory">
            {/* 첫 번째 섹션 */}
            <section className="h-screen grid grid-cols-2 snap-start">
                {/* 왼쪽 절반 */}
                <div className="flex justify-center items-center bg-gray-100">
                    <div className="flex flex-col text-4xl text-blue-600 font-LilitaOne tracking-wider">
                        QuizGen
                    </div>
                </div>

                {/* 오른쪽 절반 */}
                <div className="flex justify-center items-center bg-blue-200">
                    오른쪽 콘텐츠
                </div>
            </section>
            <SideButtons />
        </div>
    )
}