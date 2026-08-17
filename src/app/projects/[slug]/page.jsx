import { projects } from '@/data/portfolio';
import PortfolioShell from '@/components/PortfolioShell';
import ProjectDetailClient from '@/components/pages/ProjectDetailClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.image ? [{ url: project.image }] : [],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <PortfolioShell showFooter>
      <ProjectDetailClient project={project} />
    </PortfolioShell>
  );
}
