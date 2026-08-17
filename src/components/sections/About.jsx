'use client';

import { personalInfo, education } from '../../data/portfolio';
import countupPkg from 'react-countup';
const CountUp = countupPkg.default || countupPkg;
import { Code2, Server, Database, Cloud, Brain, Rocket } from 'lucide-react';
import { SectionContainer, SectionHeading } from '../ui/SectionContainer';

const stats = [
  { label: 'Years Experience', value: personalInfo.yearsOfExperience, suffix: '+', icon: Rocket },
  { label: 'Projects Delivered', value: 5, suffix: '+', icon: Code2 },
  { label: 'Technologies', value: 25, suffix: '+', icon: Database },
  { label: 'Active Users', value: 500, suffix: '+', icon: Cloud },
];

const highlights = [
  { icon: Code2, title: 'Clean Code', desc: 'Maintainable, scalable code' },
  { icon: Server, title: 'Full Stack', desc: 'End-to-end development' },
  { icon: Database, title: 'Data Design', desc: 'Optimized architectures' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'AWS, CI/CD, Git workflows' },
  { icon: Brain, title: 'AI Integration', desc: 'Hands-on LLM & RAG experience' },
  { icon: Rocket, title: 'Performance', desc: 'Speed and scale' },
];

export default function About() {
  return (
    <SectionContainer id="about">
      <SectionHeading tag="About" title="Who" highlight="Am I" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="glass-strong rounded-2xl p-6 sm:p-8 neon-border">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/profile.png"
              alt={personalInfo.name}
              className="w-14 h-14 rounded-xl object-cover object-top shrink-0 ring-2 ring-primary/30"
            />
            <div className="min-w-0">
              <h3 className="text-white font-display font-semibold text-lg">{personalInfo.name}</h3>
              <p className="text-primary text-sm font-mono">{personalInfo.currentRole}</p>
            </div>
          </div>

          <p className="text-gray-300 text-base leading-relaxed mb-4">{personalInfo.summary}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">{personalInfo.philosophy}</p>

          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-primary font-mono">{'>'}</span>
              <span className="text-gray-500 w-20 shrink-0">Location:</span>
              <span className="text-gray-300">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-primary font-mono">{'>'}</span>
              <span className="text-gray-500 w-20 shrink-0">Email:</span>
              <span className="text-gray-300">{personalInfo.email}</span>
            </div>
            {education.map((edu, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <span className="text-primary font-mono">{'>'}</span>
                <span className="text-gray-500 w-20 shrink-0">Education:</span>
                <span className="text-gray-300">{edu.degree}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-5 sm:p-6 text-center card-hover">
                <stat.icon size={24} className="text-primary mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  <CountUp end={stat.value} duration={2} />
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.title} className="glass rounded-xl p-5 flex items-start gap-4 card-hover group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
