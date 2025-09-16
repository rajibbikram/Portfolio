'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top and refresh the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    router.push('/');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-50 transition-all duration-300">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="bg-indigo-600 hover:bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
