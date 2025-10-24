import React from "react";
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import "../css/Project.css";

//image import of Ecomarce project
import Hero from '../../public/image/ecomarce/hero.png';
import HomePage from '../../public/image/ecomarce/homepage.png';
import LoginPage from '../../public/image/ecomarce/loginpage.png';
import Profile from '../../public/image/ecomarce/profile.png';
import Review from '../../public/image/ecomarce/rat.png';
import RegisterPage from '../../public/image/ecomarce/registerpage.png';

//image import of Exam Portal project
import Aaa from '../../public/image/Exam/aa.jpeg';
import AddCat from '../../public/image/Exam/addcat.jpeg';
import Cat from '../../public/image/Exam/cat.jpeg';
import Heero from '../../public/image/Exam/hero.jpeg';
import Userpro from '../../public/image/Exam/userpro.jpeg';



export const projectsData = [
  {
    id: 1,
    title: "Ecomarc",
    details: "Full-stack e-commerce platform with authentication, catalog, cart, and payments.",
    slug: "ecomarc",
    technologies: ["MERN Stack", "React.js", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/rajibbikram/Ecomarce-Web.git",
    demo: "#",
    images: [Hero, HomePage, LoginPage,Profile,Review,RegisterPage]
  },
  {
    id: 2,
    title: "The Exam Portal",
    details: "Online examination system allowing students to take tests and get automatic results.",
    slug: "exam-portal",
    technologies: ["React.js", "Java", "Postgres", "Spring Boot", "bootstrap"],
    github: "https://github.com/bikalpcdr/Exam--Portal.git",
    demo: "#",
    images: [Heero, Userpro,Cat,AddCat,Aaa]
  }
  ,
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
