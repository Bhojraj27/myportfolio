'use client';

import { useScrollReveal } from '../../hooks/useScrollReveal';

export function SectionContainer({ children, className = '', id }) {
  return (
    <section id={id} className={`relative py-16 md:py-20 lg:py-24 ${className}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ tag, title, highlight }) {
  const headingRef = useScrollReveal({ y: 36, duration: 0.85 });

  return (
    <div ref={headingRef} className="text-center mb-12 md:mb-16">
      {tag && <span className="font-mono text-sm text-primary/80 block mb-3 tracking-wide uppercase">{tag}</span>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
    </div>
  );
}
