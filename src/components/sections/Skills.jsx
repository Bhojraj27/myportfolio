'use client';

import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/portfolio';
import { SectionContainer, SectionHeading } from '../ui/SectionContainer';

const categories = Object.keys(skills);

function SkillCard({ skill }) {
  const uid = useId();
  const gradientId = `grad-${uid}`;
  const circumference = 2 * Math.PI * 36;
  const offset = circumference - (skill.level / 100) * circumference;

  return (
    <div className="glass rounded-xl p-5 sm:p-6 card-hover group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 shrink-0">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <circle cx="40" cy="40" r="36" fill="none" stroke={`url(#${gradientId})`} strokeWidth="4" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F5FF" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-mono font-bold text-white">{skill.level}%</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-sm group-hover:text-primary transition-colors">{skill.name}</h4>
          <div className="flex items-center gap-2.5 mt-2">
            <span className="text-xs text-gray-500 font-mono shrink-0">{skill.years}yr</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <SectionContainer id="skills">
      <SectionHeading tag="Expertise" title="Tech" highlight="Stack" />

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 shadow-[0_0_15px_rgba(0,245,255,0.15)]'
                : 'glass text-gray-400 hover:text-white hover:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {skills[activeCategory].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionContainer>
  );
}
