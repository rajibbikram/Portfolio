import React from "react";
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import "../css/Project.css";

export const projectsData = [
  {
    id: 1,
    title: "Ecomarc",
    details: "Full-stack e-commerce platform with authentication, catalog, cart, and payments.",
    slug: "ecomarc",
    technologies: ["MERN Stack", "React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/rajibbikram/Ecomarce-Web.git",
    demo: "#",
    images: ["/homepage.png", "/loginpage.png", "/registerpage.png"]
  },
  {
    id: 2,
    title: "The Exam Portal",
    details: "Online examination system allowing students to take tests and get automatic results.",
    slug: "exam-portal",
    technologies: ["React.js", "Java", "Postgres", "Spring Boot", "bootstrap"],
    github: "https://github.com/bikalpcdr/Exam--Portal.git",
    demo: "#",
    images: ["/homepage.png", "/loginpage.png", "/registerpage.png"]
  },
  {
    id: 3,
    title: "Portfolio Website",
    details: "A responsive portfolio website to showcase projects, skills, and experience.",
    slug: "portfolio",
    technologies: [ "Next.js", "Tailwind CSS", "React.js", "Node.js"],
    github: "https://github.com/rajibbikram/Portfolio.git",
    demo: "#",
    images: ["/homepage.png", "/loginpage.png", "/registerpage.png"]
  }
  ,
  {
    id: 4,
    title: "Digital-Clock ",
    details: "The Digital Clock Web Page shows the current time in hours, minutes, and seconds. It updates automatically every second using JavaScript and is styled with HTML and CSS. This project is simple, beginner-friendly, and helps learn basic web development.",
    slug: "digital-clock",
    technologies: [ "HTML", "CSS", "JavaScript"],
    github: "https://github.com/rajibbikram/Digital-Clock.git",
    demo: "#",
    images: ["/homepage.png", "/loginpage.png", "/registerpage.png"]
  } ,
  {
    id: 5,
    title: "Plan-Nepal-Travel-and-Tours",
    details: "The Plan Nepal Travel and Tours Clone is a travel website that provides information about tour packages, destinations, and booking options. It is designed to help users explore and plan their trips easily.",
    slug: "pan-nepal-travel-and-tours",
    technologies: [ "HTML", "SCSS", "bootstrap"],
    github: "https://github.com/rajibbikram/Plan-Nepal-Travel-and-Tours.git",
    demo: "#",
    images: ["/homepage.png", "/loginpage.png", "/registerpage.png"]
  }
];


export default function Project() {
  return (
    <section id="projects" className="projects-container">
      <h1 className="projects-title">Featured Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <article key={project.id} className="project-card" style={{ '--index': index }}>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.details}</p>
              <div className="project-meta">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="project-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <Link href={project.github} className="project-link secondary" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Code
                </Link>
                <Link href={`/projects/${project.slug}`} className="project-link primary">
                  View Project <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
