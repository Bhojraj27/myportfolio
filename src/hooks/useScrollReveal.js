import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { opacity: 1, y: 0 });
      return undefined;
    }

    gsap.set(el, { opacity: 1, y: 0 });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: options.y ?? 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 0.9,
          ease: 'power3.out',
          delay: options.delay ?? 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
            scroller: document.documentElement,
          },
        },
      );
    }, el);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [options.y, options.duration, options.delay]);

  return ref;
}
