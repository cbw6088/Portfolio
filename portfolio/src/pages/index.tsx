import React from "react";
import SideButtons from "@/components/button/SideButton";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter(); // useRouter 훅 사용

    const handleProjectPageClick = () => {
      router.push("/project"); // /project로 이동
    };

    return (
        <div className="w-screen h-screen flex justify-center bg-gray-100">
            <div className="w-full h-full flex flex-col justify-start">
                <div 
                    className="w-36 h-32 border-t-2 border-l-2 border-gray-200 mx-10 my-10" 
                    style={{boxShadow: '-1px -1px 2px 0 rgba(0, 0, 0, 0.1)'}}
                />
                <div className="h-full flex items-end">
                    <div className="w-full flex flex-row">
                        <div className="w-full flex flex-col items-center font-black">
                            <div className="relative flex items-center">
                                {/* 앞 텍스트 */}
                                <div className={"z-10 my-4 text-gray-800 mx-12 text-[7rem] font-LilitaOne tracking-wider"}>
                                    PORTFOLIO.
                                </div>
                                {/* 배경 텍스트 */}
                                <div className="absolute left-0 bottom-12 text-orange-600 text-[7rem] font-LilitaOne tracking-wider">
                                    2024.
                                </div>
                                <div className="z-20 absolute right-0 bottom-8 text-orange-600 text-[2rem] font-LilitaOne tracking-wider">
                                    FRONTEND DEVELOPER.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-end h-full mb-10">
                    <div className="flex flex-col justify-end h-full">
                        <div className="relative w-[20rem]">
                            <div className="absolute inset-0 bg-white" style={{ clipPath: 'inset(12px 0px 0px 0px)' }}/>
                            <div className="relative text-3xl text-gray-800 font-bold ml-10 flex justify-end font-LilitaOne tracking-wider">
                                CHOI BYUNGWOO.
                            </div>
                        </div>
                        <div className="font-LilitaOne tracking-wider text-lg text-gray-800 ml-14">
                            010 4186 6088.
                        </div>
                        <div className="font-LilitaOne tracking-wider text-lg text-gray-800 ml-14">
                            cbw60881@gmail.com
                        </div>
                        <a
                            href="https://github.com/cbw6088"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-LilitaOne tracking-wider text-lg text-gray-800 ml-14"
                        >
                            https://github.com/cbw6088
                        </a>
                        <button 
                            className="font-LilitaOne tracking-wider text-lg text-white bg-gray-800 ml-14 w-32 flex justify-center"
                            onClick={handleProjectPageClick} 
                        >
                            PROJECT PAGE
                        </button>
                    </div>
                <div 
                    className="w-36 h-16 border-b-2 border-r-2 border-gray-200 mx-10" 
                    style={{boxShadow: '1px 1px 2px 0 rgba(0, 0, 0, 0.1)'}}
                />
                </div>
            </div>
            <SideButtons />
        </div>
    );
}
