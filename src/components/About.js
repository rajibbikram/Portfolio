'use client';
import { useState } from 'react';
import Image from "next/image";
import Profile from "../../public/image/profile.jpg";
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCode, FaCertificate, FaExternalLinkAlt, FaTimes, FaTrophy, FaMedal } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiGit } from 'react-icons/si';
import '../css/About.css';

const About = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    
    // Debug function to log certificate clicks
    const handleCertificateClick = (cert, e) => {
        console.log('Button clicked!', { cert, event: e });
        e.preventDefault();
        e.stopPropagation();
        console.log('Setting selected certificate:', cert.title);
        setSelectedCertificate(cert);
        console.log('Selected certificate after set:', cert);
    };

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

    const certifications = [
        {
            title: "Frontend Development",
            issuer: "IT Training Center",
            date: "2025",
            credentialId: "FD-2025-001",
            verifyLink: "#",
            imageUrl: "/image/certificates/react-certificate.jpg",
            icon: <FaCertificate className="certificate-icon" />,
            type: "certification"
        },
        {
            title: "JavaScript Mastery",
            issuer: "Code Academy",
            date: "2024",
            credentialId: "JS-2024-045",
            verifyLink: "#",
            imageUrl: "/image/certificates/js-certificate.jpg",
            icon: <FaCode className="certificate-icon" />,
            type: "certification"
        },
        {
            title: "Responsive Web Design",
            issuer: "Web Dev Institute",
            date: "2024",
            credentialId: "RWD-2024-078",
            verifyLink: "#",
            imageUrl: "/image/certificates/responsive-certificate.jpg",
            icon: <SiCss3 className="certificate-icon" />,
            type: "certification"
        }
    ];

    const achievements = [
        {
            title: "Top Performer Award",
            issuer: "Web Dev Community",
            date: "2024",
            description: "Recognized for outstanding contributions to open-source projects",
            icon: <FaTrophy className="achievement-icon" />,
            type: "achievement"
         }
        //,
        // {
        //     title: "Hackathon Winner",
        //     issuer: "Tech Innovators 2024",
        //     date: "2024",
        //     description: "1st place in the annual web development hackathon",
        //     icon: <FaMedal className="achievement-icon" />,
        //     type: "achievement"
        // }
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
            <div className="containerr">
                <motion.div
                    className="about-content"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className="about-image" variants={itemVariants}>
                        <Image
                            src={Profile}
                            alt="Rajib Bikram Shah"
                            width={450}
                            height={600}
                            className="profile-image"
                            priority
                        />
                    </motion.div>

                    <motion.div className="about-details" variants={itemVariants}>
                        <div className="about-text">
                            <motion.span className="section-subtitle" variants={itemVariants}>
                                About Me
                            </motion.span>
                            <motion.h2 className="section-title" variants={itemVariants}>
                                Transforming Ideas Into <span className="highlight">Digital Reality</span>
                            </motion.h2>

                            <motion.div className="divider" variants={itemVariants}></motion.div>

                            <motion.p className="about-description" variants={itemVariants}>
                                Hi! I'm Rajib Bikram Shah, a passionate Frontend Developer with expertise in creating
                                modern, responsive, and user-friendly web applications. I specialize in React.js,
                                and modern JavaScript frameworks to build seamless digital experiences.
                            </motion.p>

                            <motion.p className="about-description" variants={itemVariants}>
                                With a strong foundation in computer science and hands-on experience in web development,
                                I bring ideas to life with clean, efficient code and attention to detail. I'm dedicated to
                                continuous learning and staying updated with the latest industry trends.
                            </motion.p>
                        </div>

                        <motion.div className="skills-section" variants={itemVariants}>
                            <h4 className="skills-title">My Skills</h4>
                            <motion.div 
                                className="skills-container"
                                variants={containerVariants}
                            >
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="skill-item"
                                        whileHover={{ scale: 1.05 }}
                                        variants={itemVariants}
                                    >
                                        <div className="skill-icon">
                                            {skill.icon}
                                        </div>
                                        <span className="skill-name">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div 
                    className="section-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h3 className="section-subtitle" variants={itemVariants}>
                        <FaCertificate className="icon" /> Certifications
                    </motion.h3>
                    <motion.h2 className="section-title" variants={itemVariants}>
                        My <span className="highlight">Professional</span> Credentials
                    </motion.h2>

                    <motion.div className="divider" variants={itemVariants}></motion.div>

                    <motion.div 
                        className="certificates-container" 
                        variants={containerVariants}
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={`cert-${index}`}
                                className="certificate-card"
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                            <div className="certificate-card-inner">
                                <div className="certificate-icon">
                                    {cert.icon}
                                </div>
                                <div className="certificate-content">
                                    <h4 className="certificate-title">{cert.title}</h4>
                                    <div className="certificate-meta">
                                        <span className="issuer">{cert.issuer}</span>
                                        <span className="separator">•</span>
                                        <span className="date">{cert.date}</span>
                                    </div>
                                    {cert.credentialId && (
                                        <div className="credential-id">
                                            <span className="id-label">ID:</span> {cert.credentialId}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="certificate-actions">
                                {cert.verifyLink && (
                                    <a
                                        href={cert.verifyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="verify-link"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FaExternalLinkAlt className="external-icon" /> Verify
                                    </a>
                                )}
                                {cert.imageUrl && (
                                    <button
                                        className="view-certificate-btn"
                                        onClick={(e) => handleCertificateClick(cert, e)}
                                        aria-label={`View ${cert.title} certificate`}
                                    >
                                        <FaCertificate className="certificate-icon" />
                                        <span>View Certificate</span>
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

                {/* Section Break */}
                <div className="section-break"></div>

                {/* Achievements Section */}
                <motion.div
                    className="section-wrapper"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.h3 className="section-subtitle" variants={itemVariants}>
                        <FaTrophy className="icon" /> Achievements
                    </motion.h3>
                    <motion.h2 className="section-title" variants={itemVariants}>
                        My <span className="highlight">Notable</span> Accomplishments
                    </motion.h2>

                    <motion.div className="divider" variants={itemVariants}></motion.div>

                    <motion.div 
                        className="achievements-container" 
                        variants={containerVariants}
                    >
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={`ach-${index}`}
                                className="achievement-card"
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className="achievement-icon-wrapper">
                                    {achievement.icon}
                                </div>
                                <div className="achievement-content">
                                    <h4 className="achievement-title">{achievement.title}</h4>
                                    <div className="achievement-meta">
                                        <span className="issuer">{achievement.issuer}</span>
                                        <span className="separator">•</span>
                                        <span className="date">{achievement.date}</span>
                                    </div>
                                    {achievement.description && (
                                        <p className="achievement-description">
                                            {achievement.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
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
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                        if (e.target.classList.contains('certificate-modal')) {
                            setSelectedCertificate(null);
                        }
                    }}
                >
                    <motion.div
                        className="certificate-modal-content"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        <button
                            className="close-modal"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCertificate(null);
                            }}
                            aria-label="Close certificate modal"
                        >
                            <FaTimes />
                        </button>
                        <div className="certificate-image-container">
                            <Image
                                src={selectedCertificate.imageUrl}
                                alt={`${selectedCertificate.title} Certificate`}
                                width={800}
                                height={600}
                                style={{ 
                                    objectFit: 'contain',
                                    maxWidth: '100%',
                                    height: 'auto'
                                }}
                                quality={100}
                                priority
                                unoptimized={false}
                            />
                        </div>
                        <div className="certificate-modal-footer">
                            <h4>{selectedCertificate.title}</h4>
                            <p>Issued by {selectedCertificate.issuer} • {selectedCertificate.date}</p>
                            {selectedCertificate.verifyLink && (
                                <a
                                    href={selectedCertificate.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="verify-link"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Verify Certificate <FaExternalLinkAlt style={{ fontSize: '0.8em' }} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        </section>
    );
};

export default About;
