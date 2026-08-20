'use client';

import { personalInfo, education } from '../../data/portfolio';
import { Code2, Server, Cloud, Brain } from 'lucide-react';
import { SectionContainer, SectionHeading } from '../ui/SectionContainer';

const highlights = [
  { icon: Server, title: 'Full Stack delivery', desc: 'React, Node, APIs end-to-end' },
  { icon: Cloud, title: 'Cloud & production', desc: 'AWS, CI/CD, monitoring' },
  { icon: Brain, title: 'AI in real products', desc: 'OpenAI, Gemini, RAG pipelines' },
  { icon: Code2, title: 'SaaS at scale', desc: '500+ users, PWAs, billing' },
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

          <p className="text-slate-200 text-base leading-relaxed mb-4">{personalInfo.summary}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{personalInfo.philosophy}</p>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-slate-400 w-20 shrink-0">Location</span>
              <span className="text-slate-200">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-slate-400 w-20 shrink-0">Email</span>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-200 hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
            {education.map((edu, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <span className="text-slate-400 w-20 shrink-0">Education</span>
                <span className="text-slate-200">{edu.degree}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="glass rounded-xl p-5 flex items-start gap-4 card-hover group">
              <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                <item.icon size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
