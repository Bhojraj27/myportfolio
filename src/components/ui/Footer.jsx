'use client';

import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { personalInfo } from '../../data/portfolio';
import { scrollToSection, getLenis } from '../../utils/scrollTo';

const scrollTo = (href) => scrollToSection(href);

export default function Footer() {
  const scrollTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-navy-dark/60">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-electric-purple flex items-center justify-center shrink-0 font-display font-bold text-sm text-white">
                BC
              </div>
              <span className="font-display text-lg font-bold text-white">
                bhojraj<span className="text-primary">.dev</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Full-stack developer building scalable SaaS and AI-powered web applications.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">Navigation</h4>
            <div className="space-y-2.5">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(`#${item.toLowerCase()}`); }}
                  className="block text-gray-500 hover:text-primary text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} {personalInfo.name}. Designed & built with care.
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
