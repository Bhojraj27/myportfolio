'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleHoverStart = useCallback(() => setIsHovering(true), []);
  const handleHoverEnd = useCallback(() => setIsHovering(false), []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    };

    const animateTrail = () => {
      trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.15;
      trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.15;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - 20}px, ${trailPos.current.y - 20}px)`;
      }
      rafId.current = requestAnimationFrame(animateTrail);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    rafId.current = requestAnimationFrame(animateTrail);

    const attachListeners = () => {
      const elements = document.querySelectorAll('a, button, [data-cursor]');
      elements.forEach(el => {
        if (!el.dataset.cursorAttached) {
          el.dataset.cursorAttached = 'true';
          el.addEventListener('mouseenter', handleHoverStart);
          el.addEventListener('mouseleave', handleHoverEnd);
        }
      });
    };

    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      observer.disconnect();
      document.querySelectorAll('[data-cursor-attached]').forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
        delete el.dataset.cursorAttached;
      });
    };
  }, [isMobile, handleHoverStart, handleHoverEnd]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          background: isHovering ? 'transparent' : '#00F5FF',
          border: isHovering ? '2px solid #00F5FF' : 'none',
          transform: isClicking ? 'scale(0.5)' : 'scale(1)',
          transition: 'all 0.15s ease-out',
          boxShadow: isHovering ? '0 0 20px rgba(0,245,255,0.5)' : '0 0 10px rgba(0,245,255,0.3)',
        }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998]"
        style={{
          border: `1px solid rgba(0,245,255,${isHovering ? 0.6 : 0.2})`,
          transition: 'border-color 0.3s ease',
          boxShadow: isHovering ? '0 0 30px rgba(0,245,255,0.2)' : 'none',
        }}
      />
    </>
  );
}
