import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <div
      className={`fixed bottom-5 right-5 hover:bg-[#0c7b93] bg-[#00a8cc] text-white w-10 h-10 flex justify-center items-center rounded-full cursor-pointer transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp className="text-xl" />
    </div>
  );
};

export default ScrollToTopButton;
