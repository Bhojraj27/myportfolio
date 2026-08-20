import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiGooglegemini,
  SiAuth0,
  SiStripe,
  SiGit,
  SiGithub,
  SiSentry,
  SiPostman,
  SiJira,
  SiNextdotjs,
  SiVercel,
  SiVite,
  SiReactrouter,
  SiZod,
  SiD3,
  SiI18Next,
} from 'react-icons/si';
import {
  TbApi,
  TbBrandSocketIo,
  TbBrain,
  TbLock,
  TbClockHour4,
  TbDatabase,
  TbCode,
  TbUsers,
  TbGitBranch,
  TbForms,
  TbFileText,
  TbDragDrop,
  TbTable,
  TbBrandJavascript,
  TbStack2,
  TbBrandOpenai,
  TbBrandAws,
} from 'react-icons/tb';
import { Boxes } from 'lucide-react';

const ICON_MAP = {
  // Frontend
  'react.js (vite)': { Icon: SiReact, color: '#61DAFB' },
  'react': { Icon: SiReact, color: '#61DAFB' },
  'react.js': { Icon: SiReact, color: '#61DAFB' },
  'typescript': { Icon: SiTypescript, color: '#3178C6' },
  'javascript (es6+)': { Icon: SiJavascript, color: '#F7DF1E' },
  'javascript': { Icon: SiJavascript, color: '#F7DF1E' },
  'tanstack query': { Icon: SiReact, color: '#FF4154' },
  'redux': { Icon: SiRedux, color: '#764ABC' },
  'tailwind css': { Icon: SiTailwindcss, color: '#06B6D4' },
  'mui x data grid': { Icon: SiMui, color: '#007FFF' },
  'framer motion': { Icon: SiFramer, color: '#0055FF' },
  'html5 / css3': { Icon: SiHtml5, color: '#E34F26' },
  'react router v7': { Icon: SiReactrouter, color: '#CA4245' },
  'react router': { Icon: SiReactrouter, color: '#CA4245' },
  'next.js': { Icon: SiNextdotjs, color: '#FFFFFF' },
  'vite': { Icon: SiVite, color: '#646CFF' },
  'zustand': { Icon: Boxes, color: '#F59E0B' },
  'zod': { Icon: SiZod, color: '#3E67B1' },
  'lucide': { Icon: TbBrandJavascript, color: '#F56565' },
  'vercel': { Icon: SiVercel, color: '#FFFFFF' },

  // Backend
  'node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  'express.js': { Icon: SiExpress, color: '#FFFFFF' },
  'express': { Icon: SiExpress, color: '#FFFFFF' },
  'restful apis': { Icon: TbApi, color: '#3B82F6' },
  'websocket / sse': { Icon: TbBrandSocketIo, color: '#22D3EE' },
  'jwt / bcrypt': { Icon: TbLock, color: '#FBBF24' },
  'node-cron': { Icon: TbClockHour4, color: '#A78BFA' },
  'bullmq': { Icon: TbStack2, color: '#EF4444' },

  // AI & Integrations
  'openai api': { Icon: TbBrandOpenai, color: '#10A37F' },
  'openai': { Icon: TbBrandOpenai, color: '#10A37F' },
  'google gemini': { Icon: SiGooglegemini, color: '#8E75B2' },
  'litellm / ragie': { Icon: TbBrain, color: '#818CF8' },
  'rag pipelines': { Icon: TbBrain, color: '#38BDF8' },
  'auth0': { Icon: SiAuth0, color: '#EB5424' },
  'stripe': { Icon: SiStripe, color: '#635BFF' },
  'firebase admin': { Icon: SiFirebase, color: '#FFCA28' },
  'firebase': { Icon: SiFirebase, color: '#FFCA28' },
  'firebase cloud functions': { Icon: SiFirebase, color: '#FFCA28' },
  'firestore': { Icon: SiFirebase, color: '#FFCA28' },

  // Database & Cloud
  'mongodb / mongoose': { Icon: SiMongodb, color: '#47A248' },
  'mongodb': { Icon: SiMongodb, color: '#47A248' },
  'redis': { Icon: SiRedis, color: '#FF4438' },
  'firebase firestore': { Icon: SiFirebase, color: '#FFCA28' },
  'aws s3': { Icon: TbBrandAws, color: '#FF9900' },
  'aws sqs': { Icon: TbBrandAws, color: '#FF9900' },
  'aws rekognition': { Icon: TbBrandAws, color: '#FF9900' },
  'aws': { Icon: TbBrandAws, color: '#FF9900' },

  // Tools
  'git / github / bitbucket': { Icon: SiGithub, color: '#FFFFFF' },
  'git': { Icon: SiGit, color: '#F05032' },
  'github': { Icon: SiGithub, color: '#FFFFFF' },
  'sentry': { Icon: SiSentry, color: '#362D59' },
  'postman': { Icon: SiPostman, color: '#FF6C37' },
  'jira': { Icon: SiJira, color: '#0052CC' },
  'agile / scrum': { Icon: TbUsers, color: '#22D3EE' },
  'ci/cd': { Icon: TbGitBranch, color: '#34D399' },
  'code review': { Icon: TbCode, color: '#A78BFA' },

  // Libraries
  'formik': { Icon: TbForms, color: '#3B82F6' },
  'recharts / d3': { Icon: SiD3, color: '#F9A03C' },
  'apryse webviewer': { Icon: TbFileText, color: '#EA580C' },
  'dnd-kit': { Icon: TbDragDrop, color: '#818CF8' },
  'i18next': { Icon: SiI18Next, color: '#26A69A' },
  'exceljs': { Icon: TbTable, color: '#217346' },
};

const FALLBACK = { Icon: TbDatabase, color: '#94A3B8' };

export function getTechIcon(name) {
  if (!name) return FALLBACK;
  const key = name.trim().toLowerCase();
  return ICON_MAP[key] || FALLBACK;
}

export function TechChip({ name, size = 'md', showLabel = true }) {
  const { Icon, color } = getTechIcon(name);
  const sizes = {
    sm: { wrap: 'gap-1.5 px-2.5 py-1.5 text-[11px]', icon: 14 },
    md: { wrap: 'gap-2 px-3 py-2 text-xs', icon: 16 },
    lg: { wrap: 'gap-3 px-4 py-3 text-sm', icon: 22 },
  };
  const s = sizes[size] || sizes.md;

  return (
    <span
      title={name}
      className={`inline-flex items-center ${s.wrap} rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 font-medium transition-all duration-300 hover:border-primary/35 hover:bg-primary/10 hover:text-white hover:-translate-y-0.5`}
    >
      <Icon size={s.icon} style={{ color }} className="shrink-0" aria-hidden />
      {showLabel && <span className="truncate max-w-[9rem]">{name}</span>}
    </span>
  );
}

export function TechIconBadge({ name, size = 20 }) {
  const { Icon, color } = getTechIcon(name);
  return (
    <span
      title={name}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:scale-110"
    >
      <Icon size={size} style={{ color }} aria-hidden />
    </span>
  );
}
