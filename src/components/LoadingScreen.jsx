'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import BrandLogo from './ui/BrandLogo';

const DURATION = 900;

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(100, Math.round((elapsed / DURATION) * 100)));
      if (elapsed < DURATION) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const fadeTimer = setTimeout(() => setFadingOut(true), DURATION);
    const hideTimer = setTimeout(() => {
      setHidden(true);
      onComplete();
    }, DURATION + 350);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <motion.div
      animate={fadingOut ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[9999] bg-navy flex items-center justify-center"
      style={{ pointerEvents: fadingOut ? 'none' : 'auto' }}
      aria-label="Loading portfolio"
    >
      <div className="relative z-10 text-center px-6">
        <div className="mx-auto mb-5 w-fit">
          <BrandLogo size={56} />
        </div>
        <p className="font-display text-base text-white mb-1">{personalInfo.name}</p>
        <p className="text-sm text-gray-500 mb-6">{personalInfo.title}</p>
        <div className="w-40 mx-auto h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
