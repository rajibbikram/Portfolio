'use client';

import Link from 'next/link';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

const ImageSlider = dynamic(() => import('@/components/ImageSlider'), { ssr: false });

export default function ProjectDetailClient({ project }) {
  return (
    <div className={styles.projectDetail}>
      <Link href="/#projects" className={styles.backLink}>
        <FaArrowLeft /> Back to Projects
      </Link>

      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.details}</p>

      {project.images.length > 0 && (
        <div className={styles.sliderWrapper}>
          <ImageSlider images={project.images} />
        </div>
      )}

      <div className={styles.technologies}>
        <h3>Technologies Used</h3>
        <div className={styles.techList}>
          {project.technologies.map((tech, i) => (
            <span key={i} className={styles.techTag}>{tech}</span>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            <FaGithub /> GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${styles.linkButton} ${styles.primary}`}>
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
