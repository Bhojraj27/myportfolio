'use client';

import { useEffect, useState } from 'react';
import { getLenis } from '../../utils/scrollTo';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId;

    const updateProgress = () => {
      const lenis = getLenis();
      const scroll = lenis ? lenis.scroll : window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scroll / total) * 100 : 0);
      frameId = requestAnimationFrame(updateProgress);
    };

    frameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] pointer-events-none" style={{ zIndex: 200 }}>
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm"
        style={{ left: `calc(${progress}% - 40px)` }}
      />
    </div>
  );
}
