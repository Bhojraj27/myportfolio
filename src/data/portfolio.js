export const personalInfo = {
  name: "Bhojraj Chavan",
  title: "Full Stack Developer",
  email: "bhojrajchavan5@gmail.com",
  phone: "+91-7887780210",
  location: "Kolhapur, Maharashtra",
  github: "https://github.com/Bhojraj27",
  linkedin: "https://linkedin.com/in/bhojraj-chavan",
  portfolio: "https://bhojrajchavan.netlify.app",
  summary:
    "Full Stack Developer with 2+ years of experience building and shipping SaaS web applications. Strong in React.js, TypeScript, Node.js, and Express.js — including PWA architecture, REST APIs, and AWS. Hands-on experience integrating AI/LLM APIs (OpenAI, Google Gemini, RAG) into production systems. Comfortable in Agile teams and delivering features from concept to production.",
  yearsOfExperience: 2,
  currentRole: "Sr. Software Developer — Walstar Technologies",
  philosophy:
    "I focus on shipping production SaaS that real users rely on — clear APIs, reusable UI, and integrations that hold up under real traffic. Recently that has included AI features in live products, not demos for demos’ sake.",
};

export const experience = [
  {
    id: 1,
    company: "Walstar Technologies",
    role: "Sr. Software Developer",
    duration: "Apr 2024 — May 2026",
    description:
      "Full-stack development of scalable SaaS web applications using React.js, TypeScript, TanStack Query, and MUI X, supporting 500+ active users across a production PWA.",
    responsibilities: [
      "Built and shipped full-stack SaaS features with React.js, TypeScript, TanStack Query, and MUI X for a production PWA used by 500+ active users",
      "Implemented AI-powered face recognition for employee clock-in using AWS Rekognition, integrated with GPS-based attendance tracking to prevent proxy attendance",
      "Built cron-based automated reporting pipelines using node-cron to generate and deliver daily workforce attendance summaries via email to stakeholders",
      "Worked on the Bynaus AI Companion integrating OpenAI, Google Gemini, LiteLLM, and Ragie for multi-agent chat, AI-assisted contract reviews, and workflow DAGs",
      "Implemented a PDF vector engine with Apryse WebViewer for architectural drawing processing, takeoff calibration, and submittal/RFI document workflows",
      "Integrated Sentry for error monitoring, Auth0 SSO, Stripe billing, AWS S3/SQS, Redis, and Google Maps into the platform",
    ],
    achievements: [
      "Reduced manual data processing time by 45% with AI Companion integration",
      "Supported 500+ active users with 99.9% uptime across the production PWA",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "OpenAI",
      "Google Gemini",
      "Redis",
      "Auth0",
      "Stripe",
    ],
  },
  {
    id: 2,
    company: "Mobiloitte Technologies",
    role: "Software Developer Trainee — React.js",
    duration: "Mar 2023 — Oct 2023",
    description:
      "Built and maintained responsive React.js interfaces using JavaScript (ES6+), HTML5, and CSS3, delivering production-ready features across multiple client projects.",
    responsibilities: [
      "Built and maintained responsive React.js interfaces using JavaScript (ES6+), HTML5, and CSS3 across client projects",
      "Implemented RESTful API integrations and collaborated in Agile teams on bugs and frontend–backend integration",
      "Contributed to sprint planning and code reviews; improved component reusability with shared UI libraries",
    ],
    achievements: [
      "Improved component reusability by introducing shared UI component libraries",
      "Delivered production-ready features across multiple client projects",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs"],
  },
];

export const skills = {
  Frontend: [
    { name: "React.js (Vite)", level: 95, years: 2 },
    { name: "TypeScript", level: 90, years: 2 },
    { name: "JavaScript (ES6+)", level: 95, years: 2 },
    { name: "TanStack Query", level: 85, years: 1 },
    { name: "Redux", level: 85, years: 2 },
    { name: "Tailwind CSS", level: 92, years: 2 },
    { name: "MUI X Data Grid", level: 88, years: 1 },
    { name: "HTML5 / CSS3", level: 95, years: 2 },
  ],
  Backend: [
    { name: "Node.js", level: 90, years: 2 },
    { name: "Express.js", level: 88, years: 2 },
    { name: "RESTful APIs", level: 92, years: 2 },
    { name: "WebSocket / SSE", level: 80, years: 1 },
    { name: "JWT / bcrypt", level: 85, years: 2 },
  ],
  "AI & Integrations": [
    { name: "OpenAI API", level: 85, years: 1 },
    { name: "Google Gemini", level: 82, years: 1 },
    { name: "LiteLLM / Ragie", level: 75, years: 1 },
    { name: "RAG Pipelines", level: 78, years: 1 },
    { name: "Auth0", level: 80, years: 1 },
    { name: "Stripe", level: 78, years: 1 },
  ],
  "Database & Cloud": [
    { name: "MongoDB / Mongoose", level: 90, years: 2 },
    { name: "Redis", level: 80, years: 1 },
    { name: "Firebase Firestore", level: 78, years: 1 },
    { name: "AWS S3", level: 82, years: 1 },
    { name: "AWS SQS", level: 75, years: 1 },
    { name: "AWS Rekognition", level: 72, years: 1 },
  ],
  "Tools & Practices": [
    { name: "Git / GitHub / Bitbucket", level: 92, years: 2 },
    { name: "Sentry", level: 80, years: 1 },
    { name: "Postman", level: 88, years: 2 },
    { name: "Jira", level: 82, years: 1 },
    { name: "Agile / Scrum", level: 85, years: 2 },
    { name: "CI/CD", level: 78, years: 1 },
  ],
};

export const projects = [
  {
    id: "bynaus",
    title: "Bynaus — Construction Operations Platform",
    slug: "/projects/bynaus",
    shortDescription:
      "Multi-tenant SaaS platform for full-lifecycle construction management with AI Companion, GPS-based workforce tracking, and real-time document workflows — live at bynaus.ai.",
    image: "/projects/bynaus.png",
    problem:
      "Construction companies struggle with fragmented project management tools that don't integrate workforce tracking, document workflows, and AI-assisted decision making into a unified platform.",
    solution:
      "Built a scalable multi-tenant SaaS web application covering project setup, cost codes, daily reporting, drawings, submittals, RFIs, and document transmittals with integrated AI and GPS tracking.",
    features: [
      "Multi-tenant SaaS architecture for 500+ active users",
      "GPS-based clock-in/out with geofence enforcement and kiosk mode",
      "AI Companion with OpenAI, Google Gemini, LiteLLM, and Ragie — multi-agent chat, contract reviews, playbook automation",
      "PDF vector engine with Apryse WebViewer for architectural drawing processing",
      "MUI X Data Grid Pro for workforce timecard records display and export",
      "Auth0 SSO, Stripe billing, AWS S3/SQS, Redis, Google Maps integration",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
      "OpenAI",
      "Google Gemini",
      "Redis",
      "Auth0",
      "Stripe",
    ],
    challenges: [
      "Implementing AI-powered face recognition with AWS Rekognition for workforce accountability",
      "Building multi-agent AI chat with LLM pipeline orchestration across OpenAI and Google Gemini",
      "Processing large architectural drawings with PDF vector engine and takeoff calibration",
    ],
    contributions: [
      "Contributed full-stack features across the multi-tenant SaaS product used by 500+ active users",
      "Built AI Companion integrations with OpenAI, Gemini, LiteLLM, and Ragie",
      "Implemented GPS-based attendance with AWS Rekognition face recognition",
      "Worked on the PDF vector engine for architectural drawing workflows",
    ],
    metrics: { uptime: "99.9%", users: "500+" },
    deployment: "AWS EC2 + S3 + CloudFront",
    liveUrl: "https://bynaus.ai",
    githubUrl: "#",
  },
  {
    id: "nexora",
    title: "NEXORA — AI Knowledge Workspace",
    slug: "/projects/nexora",
    shortDescription:
      "Full-stack SaaS platform that turns uploaded documents into a searchable knowledge base — ask questions in plain English and get grounded RAG answers with source citations.",
    image: "/projects/nexora.jpg",
    problem:
      "Teams drowning in PDFs, contracts, and reports need a way to query their documents without manually searching through files. Generic chatbots hallucinate without source grounding.",
    solution:
      "Built NEXORA — a multi-tenant AI knowledge workspace with document ingestion, vector search, streaming RAG chat, team collaboration, usage analytics, and tiered billing. Runs in demo mode out of the box or connects to MongoDB, Redis, S3, and OpenAI for production.",
    features: [
      "Intelligent document ingestion — auto-extract, chunk, and embed PDF, DOCX, TXT, Markdown, and CSV files",
      "Streaming RAG chat with source citations and conversation history",
      "Semantic search across all workspace documents",
      "Multi-tenant workspaces with role-based access (Owner, Admin, Member, Viewer)",
      "Background job pipeline via BullMQ — extract, index, and notify on completion",
      "Analytics dashboard, team invitations, billing tiers (Free, Pro, Team), and dark/light theme",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "BullMQ",
      "OpenAI",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Zod",
    ],
    challenges: [
      "Designing a document processing pipeline with status tracking from upload through embedding",
      "Building streaming RAG chat with NDJSON responses and real-time source references",
      "Implementing workspace-scoped RBAC and rate limiting across server actions and API routes",
    ],
    contributions: [
      "Architected the full-stack application — Next.js App Router, service layer, and MongoDB models",
      "Built the RAG pipeline — text extraction, chunking, vector search, and AI provider abstraction",
      "Implemented BullMQ workers for async document processing and notifications",
      "Designed the landing page, authenticated app shell, and billing/analytics dashboards",
    ],
    metrics: { features: "12+" },
    deployment: "Vercel + Railway (Worker)",
    liveUrl: "#",
    githubUrl: "https://github.com/Bhojraj27/nexora",
  },
  {
    id: "yau-teamup",
    title: "YAU TeamUp — Sports Management Platform",
    slug: "/projects/yau-teamup",
    shortDescription:
      "Multi-portal sports management platform for admins, coaches, and members with roster scheduling, team communications, and role-based access control.",
    image: "/projects/yau-teamup.png",
    problem:
      "Youth athletic organizations struggle with fragmented communication between admins, coaches, and members, leading to scheduling conflicts and inefficient roster management.",
    solution:
      "Created a scalable multi-portal web application handling complex roster scheduling, team communications, and role-based access with Firebase-powered backend.",
    features: [
      "Three portals: Admin, Coach, Member with role-based access control",
      "Complex roster scheduling and team communications",
      "Firebase Cloud Functions and Firestore backend processing 1,000+ weekly data syncs",
      "99.9% uptime for critical data operations",
    ],
    techStack: ["React", "Tailwind CSS", "Firebase", "Firebase Cloud Functions", "Firestore"],
    challenges: [
      "Designing role-based access control across three distinct portals",
      "Building reliable real-time data sync with Firebase for 1,000+ weekly operations",
      "Handling complex roster scheduling with conflict resolution",
    ],
    contributions: [
      "Developed the scalable multi-portal frontend architecture",
      "Engineered Firebase Cloud Functions for backend logic",
      "Implemented role-based access control across all portals",
    ],
    metrics: { uptime: "99.9%" },
    deployment: "Firebase Hosting + Cloud Functions",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "jeff-music",
    title: "Jeff Music Therapy Admin Panel",
    slug: "/projects/jeff-music",
    shortDescription:
      "Full-stack administrative dashboard managing a library of 5,000+ media assets with secure role-based access control and optimized data retrieval pipelines.",
    problem:
      "Music therapy facilities need a centralized admin dashboard to manage thousands of media assets with secure access control and efficient data retrieval.",
    solution:
      "Built a full-stack admin dashboard with Node.js/Express APIs, MongoDB storage for 5,000+ assets, and optimized retrieval pipelines reducing backend latency.",
    features: [
      "Full-stack admin dashboard for 5,000+ media assets",
      "Secure role-based access control for facility users",
      "Optimized RESTful API data retrieval pipelines",
      "15% reduction in backend latency through query optimization",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    challenges: [
      "Managing and displaying 5,000+ media assets efficiently",
      "Implementing granular role-based access control for facility users",
      "Optimizing API response times for large dataset queries",
    ],
    contributions: [
      "Designed and built the full-stack admin dashboard",
      "Engineered RESTful APIs with optimized data retrieval pipelines",
      "Implemented role-based access control system",
    ],
    metrics: { assets: "5,000+" },
    deployment: "Node.js Server + MongoDB",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ember-and-bean",
    title: "Ember & Bean | Café Website",
    slug: "/projects/ember-and-bean",
    shortDescription:
      "Premium café website for a fictional artisan coffee house with a cinematic hero, data-driven menu with filtering and search, masonry gallery with lightbox, and a validated reservations form.",
    image: "/projects/ember-and-bean.jpg",
    problem:
      "Most café websites are generic templates that feel the same. Ember & Bean needed a premium brand experience that matched a real artisan coffee house, with fast load times and a strong mobile experience.",
    solution:
      "Designed and built a premium editorial-style website with subtle glassmorphism, Playfair Display + Inter typography, and a warm espresso/cream palette. Menu is data-driven with category filtering, search and empty states. Gallery uses a masonry layout with a full keyboard- and swipe-friendly lightbox.",
    features: [
      "Cinematic full-screen hero with floating glass spec card",
      "Data-driven menu with category tabs, search, vegetarian and popular badges",
      "Masonry gallery with lightbox supporting keyboard and touch navigation",
      "Reservations form with full validation and loading, success and error states",
      "Scroll-reveal animations, number counters and reduced-motion support",
      "SEO-ready with Open Graph tags and CafeOrCoffeeShop structured data",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Lucide", "Vercel"],
    challenges: [
      "Building a polished gallery lightbox with keyboard and mobile swipe support",
      "Creating a design system with CSS variables and consistent glassmorphism",
      "Keeping the bundle lean and images lazy-loaded for fast performance",
    ],
    contributions: [
      "Designed the full visual system, colors and typography",
      "Built all six pages and every reusable component from scratch",
      "Implemented forms, filters, lightbox and animations without extra libraries",
    ],
    metrics: { pages: "6" },
    deployment: "Vercel",
    liveUrl: "https://ember-and-bean-ebon.vercel.app/",
    githubUrl: "https://github.com/Bhojraj27/ember-and-bean",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Dr D Y Patil College of Engineering and Innovation",
    year: "2020 — 2023",
    achievements: ["78.44%"],
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Sharad Institute of Technology and Polytechnic",
    year: "2017 — 2020",
    achievements: ["85.94%"],
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
