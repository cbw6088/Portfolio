import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { showBar } from "@/feature/bar/TopBarSlice";
import Image from 'next/image';
import SideButtons from "@/components/button/SideButton";
import TopBar from "@/components/bar/TopBar";
import Git from "../styles/icon/git.png";
import Web from "../styles/icon/web.png";
import quizgen from "../styles/images/quizgen.png";
import quzigen2 from "../styles/images/quizgen2.png";
import goaldiary from "../styles/images/goaldiary.png";
import goaldiary2 from "../styles/images/goaldiary2.png";
import lucid from "../styles/images/lucid.png";
import nickname from "../styles/images/nickname.png";
import Head from 'next/head';

export default function Project() {
    const dispatch = useDispatch();
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        dispatch(showBar('Introduction'));

        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [dispatch]);

    const handleScrollToSection = (section: number) => {
        const targetSection = document.querySelectorAll('section')[section];
        targetSection?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet" />
            </Head>
            <div className="w-screen h-screen bg-gray-100 overflow-y-scroll scroll-start snap-y snap-mandatory animate-fadeIn">
                {/* 마우스 커서 */}
                <div 
                    id="cursor-dot" 
                    className="absolute w-cursor h-cursor bg-orange-600 rounded-full transition-transform duration-150 ease-in-out pointer-events-none"
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        transform: "translate(-50%, -50%)",
                        willChange: "transform",
                    }}
                />
                <div 
                    id="cursor-dot-outline" 
                    className="absolute w-cursor-outline h-cursor-outline border border-red-500/30 rounded-full transition-transform duration-150 ease-in-out pointer-events-none"
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        transform: "translate(-50%, -50%)",
                        willChange: "transform",
                    }}
                />
                {/* 첫 번째 섹션 */}
                <section className="h-screen grid grid-cols-1 lg:grid-cols-2 snap-start mx-12">
                    <div className="flex justify-center items-center bg-gray-100">
                        <div className="flex flex-col items-center text-4xl text-blue-600 font-LilitaOne tracking-wider">
                            <div className="mt-4 lg:mt-0 lg:mb-8">
                                QuizGen.
                            </div>
                            <Image
                                src={quizgen}
                                alt="QuizGen Image"
                                layout="intrinsic"
                                width={500}
                                height={500} 
                                placeholder="blur"
                                priority
                            />
                            <div className="hidden lg:block text-lg text-gray-500 mt-4">
                                2024.08 - 2024.09
                            </div>
                            <div className="hidden lg:block text-lg text-gray-800 text-center mt-8 font-BlackHanSans">
                                PDF파일을 업로드하고 간편하게 나만의 문제지를 만들어<br/>퀴즈를 풀어볼 수 있는 웹사이트
                            </div>
                            <button onClick={() => handleScrollToSection(1)} className="text-lg text-white bg-gray-800 px-2 mt-4 md:mt-6 lg:mt-10">
                                VIEW
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-gray-100">
                        <div className="flex flex-col items-center text-4xl text-green-500 font-LilitaOne tracking-wider">
                            <div className="mt-4 lg:mt-0 mb-4 lg:mb-8 xl:mb-4">
                                GoalDiary.
                            </div>
                            <Image
                                className="md:mt-2 lg:my-8"
                                src={goaldiary}
                                alt="goaldiary Image"
                                layout="intrinsic"
                                width={600}
                                height={600} 
                                placeholder="blur"
                                priority
                            />
                            <div className="hidden lg:block text-lg text-gray-500 mt-2 md:mt-8 lg:mt-4 xl:mt-0">
                                2024.03 - 2024.06
                            </div>
                            <div className="hidden lg:block text-lg text-gray-800 text-center mt-6 md:mt-8 xl:mt-6 font-BlackHanSans">
                                최종 목표와 세부 목표를 나누어 한 단계 씩 해결하고<br/> 그에 맞는 피드백을 받으며 성장하는 어플리케이션
                            </div>
                            <button onClick={() => handleScrollToSection(3)} className="text-lg text-white bg-gray-800 px-2 mt-4 md:mt-6 lg:mt-10">
                                VIEW
                            </button>
                        </div>
                    </div>
                </section>
                {/* 두 번째 섹션 */}
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
                                        layout="intrinsic"
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
                                                layout="intrinsic"
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
                                                layout="intrinsic"
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
                                    <div className="text-sm md:text-lg text-gray-600">
                                        Web
                                    </div>
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
                                        Front-End(팀장, Web UI/UX Design)
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
                                    <div className="text-sm md:text-lg text-gray-600">
                                        React
                                    </div>
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
                            layout="intrinsic"
                            width={600}
                            height={600} 
                            placeholder="blur"
                            priority
                        />
                        <div className="hidden md:block flex flex-col justify-center">
                            {/* <div className="w-full flex flex-row justify-start mb-4">
                                <Image
                                    src={Web}
                                    alt="WebLogo"
                                    layout="intrinsic"
                                    width={25}
                                    height={25} 
                                    placeholder="blur"
                                    priority
                                />
                                <a
                                    href="https://quizgen.site/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-LilitaOne tracking-wider text-md text-gray-800 ml-2"
                                >
                                    https://quizgen.site/
                                </a>
                            </div> */}
                            <div className="w-full flex flex-row justify-start">
                                <Image
                                    src={Git}
                                    alt="GitLogo"
                                    layout="intrinsic"
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
                {/* 세 번째 섹션 */}
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
                                    이 프로젝트는 사용자가 본인의 PDF 파일을 바탕으로
                                    문제를 생성하고 풀 수 있는 서비스로,<br/>
                                    이용자 경험 최적화가 핵심 과제였습니다.<br/>
                                    초기에는 UI/UX 미흡과 데이터 전송 속도<br/>
                                    문제로 어려움이 많았습니다.<br/>
                                    사용자들이 메인 버튼을 찾기까지 평균 7번의 클릭이 필요했고,<br/>
                                    데이터 전송에 50초가 걸렸습니다. 신규 사용자 이탈률이 높아<br/>
                                    문제 해결이 시급했습니다.<br/><br/>

                                    Clarity로 사용자 행동 패턴을 분석하고<br/>
                                    설문조사를 통해 불편 사항을 확인한 후,<br/>
                                    UI를 개선하여 사용자가 메인 기능을 찾는 과정까지의 클릭은<br/>
                                    2회 이하로 감소하였고, SSE(Server-Sent Events)로<br/>
                                    전송 속도를 4초로 단축해 대기 시간을 94% 줄였습니다.<br/>
                                    이를 통해 신규 사용자 이탈률은 60% 이상 감소했습니다.<br/>
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
                            layout="intrinsic"
                            width={600}
                            height={600} 
                            placeholder="blur"
                            priority
                        />
                    </div>
                </section>
                {/* 네 번째 섹션 */}
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
                                        layout="intrinsic"
                                        width={600}
                                        height={600} 
                                        placeholder="blur"
                                        priority
                                    />
                                    <div className="w-full flex flex-row justify-center">
                                        <Image
                                            src={Git}
                                            alt="GitLogo"
                                            layout="intrinsic"
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
                                    <div className="text-sm md:text-lg text-gray-600">
                                        App
                                    </div>
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
                                        Front-End(팀장, App UI/UX Design)
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
                                        Kotlin
                                    </div>
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
                            layout="intrinsic"
                            width={600}
                            height={600} 
                            placeholder="blur"
                            priority
                        />
                        <div className="w-full flex flex-row justify-center">
                            <Image
                                src={Git}
                                alt="GitLogo"
                                layout="intrinsic"
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
                {/* 다섯 번째 섹션 */}
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
                                        프로젝트를 진행할 때 팀원들 모두 처음 협업하는 상황이었기에,<br/>
                                        문제 발생 시 즉각 공유하는 소통 규칙을 도입하여 협업 효율성을 높였습니다.<br/><br/>
                                        
                                        프론트엔드 작업으로는 로그인, 회원가입, 일지 작성 페이지를 설계하고,<br/>
                                        Material Design을 활용해 UI를 구현했습니다.<br/>
                                        특히 직관적인 사용자 경험을 고려하며<br/>
                                        앱의 주요 기능을 안정적으로 완성했습니다.<br/><br/>

                                        다만 개발 기간이 촉박해 성능보다는 기능 구현에 집중하게 <br/>
                                        되었습니다. 그 결과 UI/UX에 대한 세밀한 고려가 부족했던<br/>
                                        점이 아쉬웠습니다. 이를 통해 초기 설계 단계에서부터<br/>
                                        사용자 경험을 충분히 반영해야 한다는 교훈을 얻었고,<br/>
                                        다음 프로젝트에서는 이를 보완하고자 합니다.<br/><br/>

                                        이번 프로젝트는 협업과 소통, 그리고 효율적인 일정 관리의<br/>
                                        중요성을 깨닫는 좋은 기회가 되었으며, 프론트엔드<br/>
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
                            layout="intrinsic"
                            width={600}
                            height={600} 
                            placeholder="blur"
                            priority
                        />
                    </div>
                </section>
                {/* 여섯 번째 섹션 */}
                <section className="h-screen snap-start flex items-center justify-center">
                    <div className="flex flex-col items-center justify-between font-LilitaOne tracking-wider h-full">
                        <div className="flex-grow flex items-center justify-center">
                            <div className="text-[3rem] md:text-[5rem] lg:text-[7rem] text-gray-800">
                                ETC.
                            </div>
                        </div>
                        <button onClick={() => handleScrollToSection(6)} className="w-20 text-lg text-white bg-gray-800 mb-12">
                            NEXT
                        </button>
                    </div>
                </section>
                {/* 일곱 번째 섹션 */}
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
                                        alt="GoalDiary Image"
                                        layout="intrinsic"
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
                                    <div className="text-sm md:text-lg text-gray-600">
                                        Web
                                    </div>
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
                                        Front-End(Web UI/UX Design)
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
                                    <div className="text-sm md:text-lg text-gray-600">
                                        React
                                    </div>
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
                            alt="GoalDiary Image"
                            layout="intrinsic"
                            width={600}
                            height={600} 
                            placeholder="blur"
                            priority
                        />
                    </div>
                </section>
                {/* 여덟 번째 섹션 */}
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
                                        layout="intrinsic"
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
                                    <div className="text-sm md:text-lg text-gray-600">
                                        Web
                                    </div>
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
                                        Front-End(UI/UX Design)
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
                                    <div className="text-sm md:text-lg text-gray-600">
                                        React
                                    </div>
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
                            layout="intrinsic"
                            width={600}
                            height={600} 
                            placeholder="blur"
                            priority
                        />
                    </div>
                </section>
                <SideButtons/>
                <TopBar/>
            </div>
        </>
    )
}