"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter, usePathname } from "next/navigation";

const TopBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { isVisible, barType } = useSelector((state: RootState) => state.bar);
    if (!isVisible || !barType) return null;

    const handleHomeClick = () => {
        router.push('/');
    }
    const handleIntroductionClick = () => {
        router.push('/introduction');
    }
    const handleProjectClick = () => {
        router.push('/project');
    }

    const renderButtons = () => {
        return (
            <div className="flex justify-center space-x-6">
                <button
                    className={`px-2 text-sm font-LilitaOne tracking-wider ${
                        pathname === '/' ? 'text-white bg-gray-500' : 'text-gray-300'
                    }`}
                    onClick={handleHomeClick}
                >
                    HOME
                </button>
                <button
                    className={`px-2 text-sm font-LilitaOne tracking-wider ${
                        pathname === '/introduction' ? 'text-white bg-gray-500' : 'text-gray-300'
                    }`}
                    onClick={handleIntroductionClick}
                >
                    INTRODUCTION
                </button>
                <button
                    className={`px-2 text-sm font-LilitaOne tracking-wider ${
                        pathname === '/project' ? 'text-white bg-gray-500' : 'text-gray-300'
                    }`}
                    onClick={handleProjectClick}
                >
                    PROJECT
                </button>
            </div>
        );
    };

    return (
        <div className="block sm:hidden bg-transparent fixed top-0 left-0 w-full bg-gray-800 p-2 z-50">
            {renderButtons()}
        </div>
    );
};

export default TopBar;
