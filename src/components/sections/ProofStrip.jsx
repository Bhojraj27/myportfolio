'use client';

import { motion } from 'framer-motion';
import { Users, Code2, Brain, Rocket } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const stats = [
  { icon: Rocket, value: `${personalInfo.yearsOfExperience}+`, label: 'Years shipping' },
  { icon: Users, value: '500+', label: 'Users supported' },
  { icon: Code2, value: '5+', label: 'Production apps' },
  { icon: Brain, value: 'AI/RAG', label: 'In production' },
];

export default function ProofStrip() {
  return (
    <section className="relative z-10 -mt-2 mb-2">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass-strong rounded-2xl neon-border p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-slate-400">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
