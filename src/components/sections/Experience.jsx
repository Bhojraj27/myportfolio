'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { experience } from '../../data/portfolio';
import { SectionContainer, SectionHeading } from '../ui/SectionContainer';

function ExperienceCard({ exp }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div className="absolute left-7 lg:left-9 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent hidden md:block" />

      <div className="flex items-start gap-5 lg:gap-6">
        <div className="hidden md:flex shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 items-center justify-center relative z-10">
          <Briefcase size={22} className="text-primary" />
        </div>

        <div className="flex-1 glass-strong rounded-2xl overflow-hidden card-hover">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full p-5 sm:p-6 lg:p-7 text-left flex items-center justify-between gap-4"
          >
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-lg lg:text-xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-primary text-sm font-semibold mb-2">{exp.company}</p>
              <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
                <Calendar size={12} />
                <span>{exp.duration}</span>
              </div>
            </div>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-gray-500 shrink-0">
              <ChevronDown size={20} />
            </motion.div>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="px-5 sm:px-6 lg:px-7 pb-6 lg:pb-7 space-y-6 border-t border-white/5 pt-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      Responsibilities
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                          <CheckCircle2 size={14} className="text-primary/60 mt-0.5 shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                          <CheckCircle2 size={14} className="text-accent/60 mt-0.5 shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-mono border border-primary/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <SectionContainer id="experience">
      <SectionHeading tag="Career" title="Work" highlight="Experience" />
      <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
        {experience.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </SectionContainer>
  );
}
