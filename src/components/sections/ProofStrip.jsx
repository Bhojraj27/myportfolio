'use client';

import { motion } from 'framer-motion';
import { Briefcase, Users, Code2, Award } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const stats = [
  { icon: Briefcase, value: `${personalInfo.yearsOfExperience}+`, label: 'Years Experience' },
  { icon: Code2, value: '5+', label: 'Projects Delivered' },
  { icon: Users, value: '500+', label: 'Users Supported' },
  { icon: Award, value: '25+', label: 'Technologies' },
];

export default function ProofStrip() {
  return (
    <section className="relative z-10 -mt-4 mb-4">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong rounded-2xl neon-border p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white">{value}</div>
                  <div className="text-xs sm:text-sm text-gray-500">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
