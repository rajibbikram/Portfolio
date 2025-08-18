'use client';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../app/projects/[slug]/page.module.css';

const ImageSlider = ({ images }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted || !images || images.length === 0) return null;

  const nextSlide = () => setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  const toggleFullscreen = () => { setIsFullscreen(!isFullscreen); setLastClickTime(0); };

  const handleSlideClick = e => {
    const now = new Date().getTime();
    if (now - lastClickTime < 300) {
      e.stopPropagation();
      toggleFullscreen();
    } else setLastClickTime(now);
  };

  return (
    <div className={`${styles.sliderContainer} ${isFullscreen ? styles.fullscreen : ''}`}>
      <div className={styles.sliderWrapper}>
        <button className={`${styles.sliderButton} ${styles.prevButton}`} onClick={prevSlide}><FaChevronLeft /></button>

        <div className={styles.slide} onClick={handleSlideClick}>
          <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} fill className={styles.sliderImage} sizes="100vw" priority />
        </div>

        <button className={`${styles.sliderButton} ${styles.nextButton}`} onClick={nextSlide}><FaChevronRight /></button>
        {isFullscreen && <button className={styles.closeButton} onClick={toggleFullscreen}><FaTimes /></button>}
      </div>

      {images.length > 1 && (
        <div className={styles.dotsContainer}>
          {images.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ''}`} onClick={() => setCurrentIndex(i)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
