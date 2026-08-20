'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const SECTION_MOOD = {
  home: { mood: 'wave', line: 'Hey! Scroll around 👋' },
  about: { mood: 'curious', line: 'Nice to meet you' },
  skills: { mood: 'thinking', line: 'Stack check…' },
  experience: { mood: 'proud', line: 'Real work stories' },
  projects: { mood: 'excited', line: 'Oooh, demos!' },
  contact: { mood: 'wave', line: 'Say hi anytime' },
};

const CLICK_LINES = [
  'I ship bugs… into production? Wait—',
  'console.log("hire me")',
  '404: excuses not found',
  'npm install coffee',
  'Git commit -m "vibes"',
];

function MascotFace({ mood, lookX, lookY, reduced }) {
  const eyeOffsetX = reduced ? 0 : lookX * 3.2;
  const eyeOffsetY = reduced ? 0 : lookY * 2.4;

  const mouth =
    mood === 'excited' || mood === 'celebrate'
      ? 'M26 40 Q32 48 38 40'
      : mood === 'thinking'
        ? 'M27 42 H37'
        : mood === 'proud'
          ? 'M26 41 Q32 46 38 41'
          : mood === 'curious'
            ? 'M30 41 Q32 44 34 41'
            : 'M27 41 Q32 45 37 41';

  const browY = mood === 'thinking' ? -1.5 : mood === 'curious' ? -0.5 : 0;
  const leftBrowRotate = mood === 'thinking' ? -12 : mood === 'curious' ? 8 : 0;
  const rightBrowRotate = mood === 'thinking' ? 18 : mood === 'curious' ? -8 : 0;

  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden>
      <defs>
        <linearGradient id="mascotBody" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* Antenna */}
      <motion.g
        animate={reduced ? undefined : { rotate: mood === 'wave' ? [0, -8, 8, 0] : 0 }}
        transition={{ duration: 1.4, repeat: mood === 'wave' && !reduced ? Infinity : 0, ease: 'easeInOut' }}
        style={{ transformOrigin: '32px 10px' }}
      >
        <line x1="32" y1="14" x2="32" y2="6" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="4.5" r="3.2" fill="#EA580C" />
        <circle cx="32" cy="4.5" r="1.2" fill="#FFFFFF" opacity="0.85" />
      </motion.g>

      {/* Body */}
      <rect x="10" y="14" width="44" height="40" rx="16" fill="url(#mascotBody)" />
      <rect x="11.5" y="15.5" width="41" height="37" rx="14.5" stroke="#FFFFFF" strokeOpacity="0.22" strokeWidth="1.5" fill="none" />

      {/* Face plate */}
      <rect x="18" y="24" width="28" height="22" rx="10" fill="#0A0E27" fillOpacity="0.35" />

      {/* Brows */}
      <g transform={`translate(0 ${browY})`}>
        <rect
          x="22"
          y="27"
          width="8"
          height="2"
          rx="1"
          fill="#E0E7FF"
          transform={`rotate(${leftBrowRotate} 26 28)`}
        />
        <rect
          x="34"
          y="27"
          width="8"
          height="2"
          rx="1"
          fill="#E0E7FF"
          transform={`rotate(${rightBrowRotate} 38 28)`}
        />
      </g>

      {/* Eyes */}
      <g transform={`translate(${eyeOffsetX} ${eyeOffsetY})`}>
        {mood === 'celebrate' ? (
          <>
            <path d="M22 34 L26 30 L30 34" stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M34 34 L38 30 L42 34" stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        ) : (
          <>
            <ellipse cx="26" cy="33" rx={mood === 'curious' ? 3.6 : 4} ry={mood === 'thinking' ? 2.6 : 4.2} fill="#FFFFFF" />
            <ellipse cx="38" cy="33" rx={mood === 'curious' ? 3.6 : 4} ry={mood === 'thinking' ? 2.6 : 4.2} fill="#FFFFFF" />
            <circle cx={26 + eyeOffsetX * 0.15} cy={33 + eyeOffsetY * 0.1} r="1.6" fill="#0A0E27" />
            <circle cx={38 + eyeOffsetX * 0.15} cy={33 + eyeOffsetY * 0.1} r="1.6" fill="#0A0E27" />
          </>
        )}
      </g>

      {/* Mouth */}
      <path d={mouth} stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* Cheek blush when happy */}
      {(mood === 'excited' || mood === 'wave' || mood === 'celebrate') && (
        <>
          <circle cx="20" cy="38" r="2.2" fill="#FB923C" opacity="0.45" />
          <circle cx="44" cy="38" r="2.2" fill="#FB923C" opacity="0.45" />
        </>
      )}

      {/* Arm wave for wave/celebrate */}
      {(mood === 'wave' || mood === 'celebrate') && !reduced && (
        <motion.g
          animate={{ rotate: [0, 25, -10, 20, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 36px' }}
        >
          <rect x="48" y="32" width="6" height="14" rx="3" fill="#60A5FA" />
        </motion.g>
      )}
    </svg>
  );
}

export default function SiteMascot() {
  const reduced = useReducedMotion();
  const [mood, setMood] = useState('wave');
  const [line, setLine] = useState(SECTION_MOOD.home.line);
  const [showBubble, setShowBubble] = useState(true);
  const [look, setLook] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clickIndex, setClickIndex] = useState(0);
  const bubbleTimer = useRef(null);
  const celebrateTimer = useRef(null);

  const flashBubble = useCallback((text, ms = 3200) => {
    setLine(text);
    setShowBubble(true);
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setShowBubble(false), ms);
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('mascot-hidden') === '1') setHidden(true);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const ids = Object.keys(SECTION_MOOD);
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          const next = SECTION_MOOD[id];
          if (!next) return;
          setMood((prev) => (prev === 'celebrate' ? prev : next.mood));
          flashBubble(next.line, 2800);
        },
        { threshold: 0.35, rootMargin: '-10% 0px -40% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [flashBubble]);

  useEffect(() => {
    if (reduced) return undefined;

    const onMove = (e) => {
      const cx = window.innerWidth * 0.12;
      const cy = window.innerHeight * 0.82;
      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      setLook({
        x: Math.max(-1, Math.min(1, dx * 2.2)),
        y: Math.max(-1, Math.min(1, dy * 2.2)),
      });
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced]);

  useEffect(() => {
    const onCelebrate = () => {
      setMood('celebrate');
      flashBubble('Message sent! High five ✋', 4200);
      if (celebrateTimer.current) clearTimeout(celebrateTimer.current);
      celebrateTimer.current = setTimeout(() => setMood('excited'), 4200);
    };

    window.addEventListener('portfolio:mascot-celebrate', onCelebrate);
    return () => {
      window.removeEventListener('portfolio:mascot-celebrate', onCelebrate);
      if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
      if (celebrateTimer.current) clearTimeout(celebrateTimer.current);
    };
  }, [flashBubble]);

  const dismiss = () => {
    setHidden(true);
    try {
      sessionStorage.setItem('mascot-hidden', '1');
    } catch {
      /* ignore */
    }
  };

  const onClick = () => {
    const next = CLICK_LINES[clickIndex % CLICK_LINES.length];
    setClickIndex((i) => i + 1);
    setMood('curious');
    flashBubble(next, 3000);
  };

  if (hidden) return null;

  return (
    <div className="fixed bottom-6 left-4 sm:left-6 z-[190] flex flex-col items-start gap-2 pointer-events-none">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            className="pointer-events-none max-w-[180px] sm:max-w-[200px] rounded-2xl rounded-bl-md px-3 py-2 text-xs sm:text-sm font-medium text-slate-100 bg-navy-dark/90 border border-white/15 shadow-lg backdrop-blur-md"
          >
            {line}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative pointer-events-auto">
        <button
          type="button"
          onClick={onClick}
          aria-label="Site mascot — click for a joke"
          className="relative w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-[22%] bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          <motion.div
            animate={reduced ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full drop-shadow-[0_8px_24px_rgba(59,130,246,0.35)]"
          >
            <MascotFace mood={mood} lookX={look.x} lookY={look.y} reduced={!!reduced} />
          </motion.div>
        </button>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Hide mascot"
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-navy-dark/90 border border-white/15 text-[10px] text-slate-400 hover:text-white leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}
