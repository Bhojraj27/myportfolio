'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/portfolio';
import { SectionContainer, SectionHeading } from '../ui/SectionContainer';
import { getTechIcon } from '../ui/TechIcons';

const categories = Object.keys(skills);

function SkillCard({ skill }) {
  const { Icon, color } = getTechIcon(skill.name);

  return (
    <div className="glass rounded-xl p-5 sm:p-6 card-hover group cursor-default">
      <div className="flex items-center gap-4">
        <div
          className="relative w-14 h-14 shrink-0 rounded-xl flex items-center justify-center border border-white/15 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/35"
          style={{ background: `linear-gradient(135deg, ${color}28, ${color}0c)` }}
        >
          <Icon size={28} style={{ color }} aria-hidden />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-sm group-hover:text-primary transition-colors truncate">
            {skill.name}
          </h4>
          <p className="text-xs text-slate-400 font-mono mt-1.5">
            {skill.years}+ {skill.years === 1 ? 'year' : 'years'} experience
          </p>
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

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-primary/20 text-primary border border-primary/35'
                : 'glass text-slate-300 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {skills[activeCategory].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionContainer>
  );
}
