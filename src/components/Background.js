'use client';

import { useEffect, useRef } from 'react';

export default function Background() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let raf = 0;
    const handleMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.setProperty('--mx', `${e.clientX}px`);
        glow.style.setProperty('--my', `${e.clientY}px`);
        glow.style.opacity = '1';
      });
    };
    const handleLeave = () => {
      glow.style.opacity = '0';
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerleave', handleLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-gradient" />
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />
      <div className="bg-glow" ref={glowRef} />
    </div>
  );
}
