import React, { useEffect, useState } from "react";
import SideButtons from "@/components/button/SideButton";
import TopBar from "@/components/bar/TopBar";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "@/feature/button/SideButtonSlice";
import { showBar } from "@/feature/bar/TopBarSlice";

export default function Home() {
    const router = useRouter();
    const dispatch = useDispatch();

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        console.log("showBar('Home') 호출");
        dispatch(showBar('Home'));

        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        // 마우스 이동 시 커서 위치 업데이트
        document.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [dispatch]);
    
    const handleProjectPageClick = () => {
        dispatch(setCurrentPage(2));
        router.push("/project");
    };

    return (
        <div className="w-screen h-screen flex justify-center bg-gray-100 animate-fadeIn">
            {/* 마우스 커서 */}
            <div 
                id="cursor-dot" 
                className="absolute w-cursor h-cursor bg-orange-600 rounded-full transition-transform duration-150 ease-in-out pointer-events-none"
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            />
            <div 
                id="cursor-dot-outline" 
                className="absolute w-cursor-outline h-cursor-outline border border-red-500/30 rounded-full transition-transform duration-150 ease-in-out pointer-events-none"
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            />
            <div className="w-full h-full flex flex-col justify-start">
                {/* 상단 박스 */}
                <div 
                    className="hidden md:block lg:w-36 lg:h-32 md:w-24 md:h-24 sm:w-16 sm:h-16 border-t-2 border-l-2 border-gray-200 mx-10 my-10" 
                    style={{ boxShadow: '-1px -1px 2px 0 rgba(0, 0, 0, 0.1)' }}
                />
                {/* 가운데 콘텐츠 */}
                <div className="h-full flex items-end">
                    <div className="w-full flex flex-row">
                        <div className="w-full flex flex-col items-center font-black">
                            <div className="relative flex items-center">
                                {/* 텍스트 */}
                                <div className="z-10 lg:my-4 md:my-2 sm:my-1 lg:text-[7rem] md:text-[4rem] text-[2.5rem] text-gray-800 mx-12 font-LilitaOne tracking-wider">
                                    PORTFOLIO.
                                </div>
                                {/* 배경 텍스트 */}
                                <div className="absolute lg:left-0 lg:bottom-12 md:left-4 md:bottom-8 left-8 bottom-4 text-orange-600 lg:text-[7rem] md:text-[4rem] text-[2.5rem] font-LilitaOne tracking-wider">
                                    2024.
                                </div>
                                <div className="z-20 absolute lg:right-0 lg:bottom-8 md:right-4 md:bottom-4 right-6 bottom-2 text-orange-600 lg:text-[2rem] md:text-[1.5rem] text-[1rem] font-LilitaOne tracking-wider">
                                    FRONTEND DEVELOPER.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 하단 콘텐츠 */}
                <div className="flex justify-between items-end h-full lg:mb-10 mb-4">
                    <div className="flex flex-col justify-end h-full">
                        <div className="relative lg:w-auto md:w-56 w-40">
                            <div className="absolute inset-0 bg-white" style={{ clipPath: 'inset(12px 0px 0px 0px)' }}/>
                            <div className="relative text-gray-800 font-bold md:ml-14 ml-4 flex lg:justify-end lg:text-3xl md:text-lg text-md font-LilitaOne tracking-wider">
                                CHOI BYUNGWOO.
                            </div>
                        </div>
                        <div className="font-LilitaOne tracking-wider lg:text-lg md:text-md text-sm text-gray-800 ml-4 md:ml-14">
                            010 4186 6088.
                        </div>
                        <div className="font-LilitaOne tracking-wider lg:text-lg md:text-md text-sm text-gray-800 ml-4 md:ml-14">
                            cbw60881@gmail.com
                        </div>
                        <a
                            href="https://github.com/cbw6088"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-LilitaOne tracking-wider lg:text-lg md:text-md text-sm text-gray-800 ml-4 md:ml-14"
                        >
                            https://github.com/cbw6088
                        </a>
                        <button 
                            className="font-LilitaOne tracking-wider text-sm md:text-lg text-white bg-gray-800 ml-4 md:ml-14 md:w-32 w-28 flex justify-center"
                            onClick={handleProjectPageClick} 
                        >
                            PROJECT PAGE
                        </button>
                    </div>
                    <div 
                        className="hidden md:block lg:w-36 lg:h-16 md:w-28 md:h-14 sm:w-20 sm:h-12 border-b-2 border-r-2 border-gray-200 mx-10" 
                        style={{ boxShadow: '1px 1px 2px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            </div>
            <SideButtons/>
            <TopBar/>
        </div>
    );
}
