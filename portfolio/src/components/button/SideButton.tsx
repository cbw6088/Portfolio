import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setCurrentPage } from '@/feature/button/SideButtonSlice';

const pageLabels = ['PORTFOLIO.', 'INTRODUCTION.', 'PROJECT.', 'ETC.'];

export default function SideButtons() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.button.currentPage);
  const [hovered, setHovered] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleMouseEnter = () => {
    setHovered(true);
    setAnimationClass('animate__fadeIn');
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setAnimationClass('animate__fadeOut');
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
                onClick={() => dispatch(setCurrentPage(index))}
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
                onClick={() => dispatch(setCurrentPage(index))}
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
