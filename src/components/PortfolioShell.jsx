'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import SmoothScrollProvider from '@/providers/SmoothScrollProvider';
import PortfolioChat from '@/components/PortfolioChat';
import { getLenis } from '@/utils/scrollTo';

const AnimatedBackground = dynamic(() => import('@/components/three/AnimatedBackground'), { ssr: false });

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default function PortfolioShell({ children, showFooter = true }) {
  const [loading, setLoading] = useState(true);

  const handleLoadDone = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen">
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        <AnimatedBackground />
        <div className="relative z-10">
          <ScrollToTop />
          <ScrollProgress />
          <Navbar />
          {children}
          {showFooter && <Footer />}
        </div>
        <PortfolioChat />
        {loading && <LoadingScreen onComplete={handleLoadDone} />}
      </div>
    </SmoothScrollProvider>
  );
}
