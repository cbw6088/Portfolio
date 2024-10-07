import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRouter } from "next/router";

const TopBar = () => {
    const router = useRouter();
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
                        router.pathname === '/' ? 'text-white bg-gray-500' : 'text-gray-300'
                    }`}
                    onClick={handleHomeClick}
                >
                    HOME
                </button>
                <button
                    className={`px-2 text-sm font-LilitaOne tracking-wider ${
                        router.pathname === '/introduction' ? 'text-white bg-gray-500' : 'text-gray-300'
                    }`}
                    onClick={handleIntroductionClick}
                >
                    INTRODUCTION
                </button>
                <button
                    className={`px-2 text-sm font-LilitaOne tracking-wider ${
                        router.pathname === '/project' ? 'text-white bg-gray-500' : 'text-gray-300'
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
