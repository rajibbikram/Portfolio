import { projectsData } from '@/components/Project';
import ProjectDetailClient from './ProjectDetailClient';

export async function generateStaticParams() {
  return projectsData.map(project => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }) {
  const { slug } = params;
  const project = projectsData.find(p => p.slug === slug);

  if (!project) return <div>Project not found</div>;
  return <ProjectDetailClient project={project} />;
}
