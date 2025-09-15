'use client';
import { useState } from 'react';
import Image from "next/image";
import Profile from "../../public/image/profile.png";
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaCertificate, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiGit } from 'react-icons/si';
import '../css/About.css';

const About = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    
    const skills = [
        { name: 'React.js', icon: <FaReact className="skill-icon" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="skill-icon" /> },
        { name: 'JavaScript', icon: <SiJavascript className="skill-icon" /> },
        { name: 'HTML5', icon: <SiHtml5 className="skill-icon" /> },
        { name: 'CSS3', icon: <SiCss3 className="skill-icon" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="skill-icon" /> },
        { name: 'Node.js', icon: <FaNodeJs className="skill-icon" /> },
        { name: 'Git', icon: <SiGit className="skill-icon" /> },
        { name: 'Responsive Design', icon: <FaCode className="skill-icon" /> },
        { name: 'MongoDB', icon: <FaDatabase className="skill-icon" /> }
    ];

    const certificates = [
        {
            title: "Frontend Development",
            issuer: "IT Training Center",
            date: "2025",
            credentialId: "..",
            verifyLink: "#",
            imageUrl: "/certificates/react-certificate.jpg", // Add your certificate image path
            icon: <FaCertificate className="certificate-icon" />
        }
       
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="about-section" id="about">
            <div className="container">
                <motion.div 
                    className="about-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="about-image" variants={itemVariants}>
                        <div className="image-wrapper">
                            <Image
                                src={Profile}
                                alt="Rajib Bikram Shah"
                                width={350}
                                height={350}
                                className="profile-image"
                                priority
                            />
                            <div className="image-border"></div>
                        </div>
                    </motion.div>

                    <motion.div className="about-text" variants={itemVariants}>
                        <motion.h3 className="section-subtitle" variants={itemVariants}>
                            About Me
                        </motion.h3>
                        <motion.h2 className="section-title" variants={itemVariants}>
                            Transforming Ideas Into <span className="highlight">Digital Reality</span>
                        </motion.h2>
                        
                        <motion.div className="divider" variants={itemVariants}></motion.div>
                        
                        <motion.p className="about-description" variants={itemVariants}>
                            Hi! I'm Rajib Bikram Shah, a passionate Frontend Developer with expertise in creating 
                            modern, responsive, and user-friendly web applications. I specialize in React.js, Next.js, 
                            and modern JavaScript frameworks to build seamless digital experiences.
                        </motion.p>
                        
                        <motion.p className="about-description" variants={itemVariants}>
                            With a strong foundation in computer science and hands-on experience in web development, 
                            I bring ideas to life with clean, efficient code and attention to detail. I'm dedicated to 
                            continuous learning and staying updated with the latest industry trends.
                        </motion.p>

                        <motion.div className="skills-section" variants={itemVariants}>
                            <h4 className="skills-title">My Skills</h4>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="skill-item"
                                        whileHover={{ scale: 1.05 }}
                                        variants={itemVariants}
                                    >
                                        {skill.icon}
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Certificates Section */}
                    <motion.div 
                        className="certificates-section"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.h3 className="section-subtitle" variants={itemVariants}>
                            <FaCertificate className="icon" /> My Certificates
                        </motion.h3>
                        <motion.h2 className="section-title" variants={itemVariants}>
                            My <span className="highlight">Credentials</span>
                        </motion.h2>
                        
                        <motion.div className="divider" variants={itemVariants}></motion.div>
                        
                        <motion.div className="certificates-grid" variants={containerVariants}>
                            {certificates.map((cert, index) => (
                                <motion.div 
                                    key={index} 
                                    className="certificate-card"
                                    variants={itemVariants}
                                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                                >
                                    <div className="certificate-icon">
                                        {cert.icon}
                                    </div>
                                    <div className="certificate-content">
                                        <h4>{cert.title}</h4>
                                        <div className="certificate-meta">
                                            <span className="issuer">{cert.issuer}</span>
                                            <span className="date">{cert.date}</span>
                                        </div>
                                        <div className="credential-id">
                                            ID: {cert.credentialId}
                                        </div>
                                        <a 
                                            href={cert.verifyLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="verify-link"
                                        >
                                            Verify Credential <FaExternalLinkAlt className="external-icon" />
                                        </a>
                                        {cert.imageUrl && (
                                            <button 
                                                className="view-certificate-btn"
                                                onClick={() => setSelectedCertificate(cert)}
                                            >
                                                View Certificate
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div 
                        className="certificate-modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={(e) => {
                            if (e.target.classList.contains('certificate-modal')) {
                                setSelectedCertificate(null);
                            }
                        }}
                    >
                        <motion.div 
                            className="certificate-modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <button 
                                className="close-modal"
                                onClick={() => setSelectedCertificate(null)}
                            >
                                <FaTimes />
                            </button>
                            <div className="certificate-image-container">
                                <Image
                                    src={selectedCertificate.imageUrl}
                                    alt={`${selectedCertificate.title} Certificate`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    quality={100}
                                    priority
                                />
                            </div>
                            <div className="certificate-modal-footer">
                                <h4>{selectedCertificate.title}</h4>
                                <p>Issued by {selectedCertificate.issuer} • {selectedCertificate.date}</p>
                                <a 
                                    href={selectedCertificate.verifyLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="verify-link"
                                >
                                    Verify Credential <FaExternalLinkAlt className="external-icon" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default About;
