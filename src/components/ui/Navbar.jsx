'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/portfolio';
import { scrollToSection, getLenis } from '../../utils/scrollTo';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  const scrollTo = useCallback((href) => {
    if (isHome) {
      scrollToSection(href);
    } else {
      router.push('/' + href);
    }
  }, [isHome, router]);

  useEffect(() => {
    const updateScrollState = () => {
      const currentY = getLenis()?.scroll ?? window.scrollY;

      setIsScrolled(currentY > 50);
      setHidden(currentY > lastScrollY.current && currentY > 200);
      lastScrollY.current = currentY;

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const lenis = getLenis();
    if (lenis) {
      lenis.on('scroll', updateScrollState);
    }
    window.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();

    const waitForLenis = setInterval(() => {
      const instance = getLenis();
      if (instance) {
        instance.on('scroll', updateScrollState);
        clearInterval(waitForLenis);
      }
    }, 100);

    return () => {
      clearInterval(waitForLenis);
      window.removeEventListener('scroll', updateScrollState);
      if (lenis) lenis.off('scroll', updateScrollState);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'glass border-b border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.25)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-18">
            {isHome ? (
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
                className="group"
                aria-label="Bhojraj Chavan — home"
              >
                <BrandLogo
                  size={36}
                  showWordmark
                  className="transition-opacity group-hover:opacity-90"
                  wordmarkClassName="text-base hidden sm:inline"
                />
              </a>
            ) : (
              <Link href="/" className="group" aria-label="Bhojraj Chavan — home">
                <BrandLogo
                  size={36}
                  showWordmark
                  className="transition-opacity group-hover:opacity-90"
                  wordmarkClassName="text-base hidden sm:inline"
                />
              </Link>
            )}

            <div className="hidden md:flex items-center gap-1 glass rounded-full px-1.5 py-1 border border-white/15">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className={`relative px-4 py-2 text-sm font-body transition-colors duration-200 rounded-full ${
                      isActive
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-gray-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent to-accent-soft text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(234,88,12,0.35)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Let's Talk
              </a>
            </div>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-navy-dark/95 backdrop-blur-2xl border-l border-white/5 z-[101] md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <BrandLogo size={32} showWordmark wordmarkClassName="text-base" />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-gray-400 hover:text-white p-1"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileOpen(false);
                      setTimeout(() => scrollTo(link.href), 300);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-4 mt-4 border-t border-white/5">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileOpen(false);
                      setTimeout(() => scrollTo('#contact'), 300);
                    }}
                    className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-navy font-semibold text-sm"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
