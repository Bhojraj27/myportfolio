'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Mail, Download } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/Icons';
import { personalInfo } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scrollTo';

const scrollTo = (href) => scrollToSection(href);

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center"
    >
      <div className="portrait-aura">
        <div className="portrait-aura__frame w-[310px] h-[310px] sm:w-[370px] sm:h-[370px] lg:w-[410px] lg:h-[410px]">
          <img
            src="/profile.png"
            alt={personalInfo.name}
            className="w-full h-full rounded-full object-cover object-top"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 w-full pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 lg:gap-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/25 text-neon-blue text-sm font-medium w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to full-time & freelance roles
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
                {personalInfo.name.split(' ')[0]}
                <br />
                <span className="gradient-text">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="mt-4 font-display text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200">
                {personalInfo.title}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7 }}
              className="glass-strong rounded-2xl p-5 sm:p-6 neon-border max-w-xl"
            >
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-2">
                Building production SaaS with{' '}
                <span className="text-primary font-semibold">React</span>,{' '}
                <span className="text-primary font-semibold">Node.js</span> &{' '}
                <span className="text-primary font-semibold">TypeScript</span>
                — including hands-on AI integration.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {personalInfo.yearsOfExperience}+ years shipping apps used by 500+ people.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); scrollTo('#projects'); }}
                className="btn-primary group"
              >
                View My Work
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                className="btn-secondary"
              >
                Hire Me
                <Mail size={16} />
              </a>
              <a
                href="/resume.pdf"
                download="Bhojraj_Chavan_Resume.pdf"
                className="btn-secondary"
              >
                Download Resume
                <Download size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex items-center gap-3"
            >
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <ProfileImage />
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => { e.preventDefault(); scrollTo('#about'); }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-primary transition-colors motion-reduce:hidden"
        aria-label="Scroll to about section"
      >
        <span className="text-xs tracking-widest uppercase">Explore</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
