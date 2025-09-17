'use client';
import { FaLaptopCode, FaGraduationCap, FaCode, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { FiAward, FiCode as FiCodeIcon, FiCpu, FiDatabase } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import '../css/Hero.css';

const techStack = [
  { name: 'React', icon: <FaReact className="inline mr-1" /> },
  { name: 'Next.js', icon: <FaCode className="inline mr-1" /> },
  { name: 'Node.js', icon: <FaNodeJs className="inline mr-1" /> },
  { name: 'MongoDB', icon: <FaDatabase className="inline mr-1" /> },
  { name: 'Tailwind', icon: <FiCpu className="inline mr-1" /> },
  { name: 'SQL', icon: <FiDatabase className="inline mr-1" /> },
];

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    status: '2022 - 2025',
    institution: 'Tribhuvan University, Nepal',
    description: 'Kirtipur, Kathmandu'
  },
  {
    degree: 'High School',
    status: '2019 - 2021',
    institution: 'Bagmati Modern College',
    description: 'Sukhedahara,Kathmandu'
  }
];

const stats = [
  { name: 'Projects', value: 5, max: 10, icon: <FaLaptopCode className="text-2xl" />, color: 'blue' },
  { name: 'Experience', value: 1, max: 5, icon: <FiAward className="text-2xl" />, color: 'purple' },
  { name: 'Satisfaction', value: 100, max: 100, icon: <FiCodeIcon className="text-2xl" />, color: 'green' }
];

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section id="hero" className="hero">
      {/* Animated Background Elements */}
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-intro">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm Rajib Bikram Shah
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A Passionate <span className="highlight-blue">Frontend Developer</span> & <span className="highlight-purple">Designer</span>
            </motion.p>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I create responsive and interactive web experiences using modern technologies.
            </motion.p>

            {/* Tech Stack */}
            <motion.div 
              className="tech-stack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {techStack.map((tech, index) => (
                <span key={index} className="tech-item">
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </motion.div>
            
            <motion.div 
              className="cta-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <a 
                href="#projects" 
                className="cta-button"
              >
                View My Work
                <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats & Education Grid */}
        <motion.div 
          className="content-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          ref={ref}
        >
          {/* Stats */}
          <div className="stat-card">
            <h2 className="section-title">My Skills</h2>
            <div className="stats-container">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.name}
                  className="stat-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="stat-header">
                    <div className="stat-icon-container">
                      <div className={`stat-icon stat-icon-${stat.color}`}>
                        {stat.icon}
                      </div>
                      <span className="stat-name">{stat.name}</span>
                    </div>
                    <span className="stat-value">{stat.value}{stat.name !== 'Satisfaction' ? '+' : '%'}</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div 
                      className="progress-fill" 
                      initial={{ width: 0 }}
                      animate={{ width: `${(stat.value / stat.max) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="education-card">
            <div className="education-header">
              <div className="education-icon">
                <FaGraduationCap className="icon" />
              </div>
              <h2 className="section-title">
                Education
              </h2>
            </div>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <h3 className="degree">{edu.degree}</h3>
                  <p className="period">{edu.status}</p>
                  <p className="institution">{edu.institution}</p>
                  <p className="location">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
