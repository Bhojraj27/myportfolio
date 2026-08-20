'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, ExternalLink, Mail, Download } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../ui/Icons';
import { personalInfo } from '../../data/portfolio';
import { scrollToSection } from '../../utils/scrollTo';

const scrollTo = (href) => scrollToSection(href);

function FloatingBubbles() {
  const bubbles = [
    { size: 100, top: '8%', left: '4%', delay: 0, duration: 10 },
    { size: 60, top: '55%', left: '3%', delay: 2, duration: 12 },
    { size: 140, top: '15%', right: '2%', delay: 1, duration: 14 },
    { size: 45, top: '70%', right: '6%', delay: 3, duration: 9 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            right: b.right,
            background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.1), rgba(129,140,248,0.05), transparent 70%)',
            border: '1px solid rgba(59,130,246,0.08)',
          }}
          animate={{ y: [0, -24, 0, 16, 0], x: [0, 8, -8, 4, 0] }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center"
    >
      <div className="portrait-aura cursor-pointer">
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
      <FloatingBubbles />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 w-full pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/25 text-neon-blue text-sm font-medium w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to full-time & freelance roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08]"
            >
              Senior{' '}
              <span className="gradient-text">Full Stack</span>
              <br />
              Developer
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="glass-strong rounded-2xl p-5 sm:p-6 neon-border max-w-xl"
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-3">
                Hi, I'm <span className="text-white font-semibold">{personalInfo.name.split(' ')[0]}</span> —{' '}
                <TypeAnimation
                  sequence={[
                    'Senior Full Stack Developer',
                    2200,
                    'React & Node.js Developer',
                    2200,
                    'Production Web Apps & SaaS',
                    2200,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                  preRenderFirstString
                  className="text-primary font-semibold"
                />
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {personalInfo.yearsOfExperience}+ years shipping production apps for 500+ users — React, Node.js, TypeScript, and hands-on AI integration experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
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
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-4"
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
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all duration-200 hover:-translate-y-0.5"
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
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors motion-reduce:hidden"
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
