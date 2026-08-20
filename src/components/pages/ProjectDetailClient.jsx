'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Code2,
  Rocket,
} from 'lucide-react';
import { GithubIcon as Github } from '@/components/ui/Icons';
import { TechChip } from '@/components/ui/TechIcons';

function Sidebar({ project }) {
  return (
    <div className="space-y-6">
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechChip key={tech} name={tech} size="sm" />
          ))}
        </div>
      </div>

      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Metrics</h3>
        <div className="space-y-3">
          {project.metrics &&
            Object.entries(project.metrics).map(([key, val]) => (
              <div key={key} className="flex justify-between items-center text-sm">
                <span className="text-gray-500 capitalize">{key}</span>
                <span className="text-primary font-mono">{val}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Deployment</h3>
        <p className="text-sm text-gray-400 flex items-center gap-2">
          <Rocket size={14} className="text-primary" />
          {project.deployment}
        </p>
      </div>

      <div className="glass-strong rounded-2xl p-6">
        <h3 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">Links</h3>
        <div className="space-y-3">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
            >
              <Github size={14} /> Source Code
            </a>
          )}
        </div>
      </div>

      <Link
        href="/#projects"
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:border-primary/30 transition-all"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>
    </div>
  );
}

export default function ProjectDetailClient({ project }) {
  return (
    <div className="min-h-screen pt-24 pb-16 text-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10"
        >
          {project.image && (
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
          <div className="absolute bottom-6 left-8 right-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">{project.title}</h1>
            <p className="text-gray-400 text-sm md:text-base">{project.shortDescription}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: AlertTriangle, iconColor: 'text-yellow-400', title: 'Problem Statement', content: project.problem },
              { icon: Lightbulb, iconColor: 'text-primary', title: 'Solution', content: project.solution },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-strong rounded-2xl p-6 sm:p-8"
              >
                <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <section.icon size={18} className={section.iconColor} /> {section.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-strong rounded-2xl p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-400" /> Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                    <CheckCircle2 size={14} className="text-primary/60 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-strong rounded-2xl p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Code2 size={18} className="text-accent" /> My Contributions
              </h3>
              <ul className="space-y-3">
                {project.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                    <CheckCircle2 size={14} className="text-accent/60 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-strong rounded-2xl p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-orange-400" /> Challenges
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                    <AlertTriangle size={14} className="text-orange-400/60 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <Sidebar project={project} />
            </div>
          </div>

          <div className="lg:hidden">
            <Sidebar project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}
