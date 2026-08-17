'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2200;

    const tick = () => {
      const elapsed = Date.now() - start;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(next);
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);

    const fadeTimer = setTimeout(() => setFadingOut(true), 2200);
    const hideTimer = setTimeout(() => {
      setHidden(true);
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <motion.div
      animate={fadingOut ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] bg-navy flex items-center justify-center"
      style={{ pointerEvents: fadingOut ? 'none' : 'auto' }}
      aria-label="Loading portfolio"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-electric-purple flex items-center justify-center font-display font-bold text-xl text-white shadow-[0_0_40px_rgba(59,130,246,0.3)]"
        >
          BC
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-lg text-white mb-1"
        >
          {personalInfo.name}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-sm text-gray-500 mb-8"
        >
          {personalInfo.title}
        </motion.p>

        <div className="w-48 mx-auto">
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary via-electric-purple to-accent rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
