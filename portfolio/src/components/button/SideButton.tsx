import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setCurrentPage } from '@/feature/button/SideButtonSlice';
import { useRouter } from 'next/router';

const pageLabels = ['PORTFOLIO.', 'INTRODUCTION.', 'PROJECT.'];
const pageRoutes = ['/', '/introduction', '/project'];

export default function SideButtons() {
    const router = useRouter();
    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.button.currentPage);
    const [hovered, setHovered] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const saveScrollPosition = () => {
        sessionStorage.setItem('scrollPosition', JSON.stringify(window.scrollY));
    };

    const restoreScrollPosition = () => {
        const savedPosition = sessionStorage.getItem('scrollPosition');
        if (savedPosition) {
            window.scrollTo(0, JSON.parse(savedPosition));
        }
    };

    const saveCurrentPage = (index: number) => {
        sessionStorage.setItem('currentPage', JSON.stringify(index));
    };

    const restoreCurrentPage = () => {
        const savedPage = sessionStorage.getItem('currentPage');
        if (savedPage) {
            dispatch(setCurrentPage(JSON.parse(savedPage)));
        }
    };

    useEffect(() => {
        restoreScrollPosition();
        restoreCurrentPage();
    }, []);

    const handleMouseEnter = () => {
        setHovered(true);
        setAnimationClass('animate__fadeIn');
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setAnimationClass('animate__fadeOut');
    };

    const handleButtonClick = (index: number) => {
        saveScrollPosition();
        saveCurrentPage(index);
        dispatch(setCurrentPage(index));
        router.push(pageRoutes[index]);
    };

  return (
    <div
        className="flex flex-col justify-center items-center mr-12 mb-12 fixed right-0 top-[45%] transform -translate-y-1/2" // 위치 고정
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
            zIndex: 1000,
        }}
    >
      {pageLabels.map((label, index) => (
        <div key={index} className="relative my-3">
            <button
                onClick={() => handleButtonClick(index)}
                className={`relative transform rotate-45 ${
                    currentPage === index ? 'bg-gray-800 w-4 h-4' : 'border border-black w-2 h-2'
                } transition-all duration-300 ease-in-out`}
                style={{
                    position: 'relative',
                    zIndex: 1,
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    width: '40px',
                    height: '40px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0,
                }}
                onClick={() => handleButtonClick(index)}
            ></div>
            <div
                className={`absolute right-0 mr-8 top-1/2 transform -translate-y-1/2 text-lg font-bold animate__animated ${animationClass}`}
                style={{
                    opacity: hovered ? 1 : 0,
                    backgroundColor: currentPage === index ? 'black' : 'transparent',
                    color: currentPage === index ? 'white' : 'gray',
                    paddingLeft: currentPage === index ? '8px' : '0',
                    paddingRight: currentPage === index ? '8px' : '0',
                }}
            >
                {label}
            </div>
        </div>
        ))}
    </div>
  );
}
