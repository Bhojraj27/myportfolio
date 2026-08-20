'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon as Github } from '../ui/Icons';
import { projects } from '../../data/portfolio';
import { SectionContainer, SectionHeading } from '../ui/SectionContainer';
import { TechChip } from '../ui/TechIcons';

function ProjectCard({ project, featured = false }) {
  return (
    <div
      className={`group glass-strong rounded-2xl overflow-hidden card-hover neon-border flex flex-col h-full ${
        featured ? 'ring-1 ring-primary/20' : ''
      }`}
    >
      <div className={`relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 ${
        featured ? 'h-56 sm:h-64' : 'h-48 sm:h-52'
      }`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5" />

        {featured && (
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-mono backdrop-blur-sm">
            <Sparkles size={12} />
            Featured
          </div>
        )}

        <div className="absolute bottom-4 left-5 right-5">
          <h3 className={`font-display font-bold text-white group-hover:text-primary transition-colors leading-tight ${
            featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
          }`}>
            {project.title}
          </h3>
        </div>

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-300 hover:text-primary transition-all hover:scale-110">
              <ExternalLink size={16} />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-300 hover:text-primary transition-all hover:scale-110">
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <p className={`text-gray-400 leading-relaxed mb-5 ${featured ? 'text-sm sm:text-base' : 'text-sm line-clamp-3'}`}>
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, featured ? 6 : 5).map((tech) => (
            <TechChip key={tech} name={tech} size="sm" />
          ))}
          {project.techStack.length > (featured ? 6 : 5) && (
            <span className="inline-flex items-center px-2.5 py-1.5 rounded-xl bg-white/5 text-gray-500 text-[11px] font-mono border border-white/10">
              +{project.techStack.length - (featured ? 6 : 5)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-white/5">
          <div className="min-w-0">
            {project.metrics && (
              <span className="text-xs font-mono text-gray-500">
                Perf: <span className="text-primary">{project.metrics.performance}</span>
                {project.metrics.loadTime && <> · <span className="text-primary">{project.metrics.loadTime}</span></>}
              </span>
            )}
          </div>
          <Link href={`/projects/${project.id}`} className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link shrink-0">
            View Case Study
            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <SectionHeading tag="Selected work" title="Featured" highlight="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={cardVariants}
            className={index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
          >
            <ProjectCard project={project} featured={index === 0} />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
