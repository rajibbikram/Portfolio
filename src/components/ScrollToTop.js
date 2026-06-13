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
    <div className={`scroll-top ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop} aria-label="Scroll to top" className="scroll-top-btn">
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
