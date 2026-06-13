'use client';

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/rajibbikram', icon: <FaGithub /> },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rajib-bikram-shah-55b81326a',
    icon: <FaLinkedin />,
  },
  { name: 'Facebook', href: 'https://www.facebook.com/rajib.thakure', icon: <FaFacebook /> },
  { name: 'Instagram', href: 'https://www.instagram.com/rajib.thakure', icon: <FaInstagram /> },
  { name: 'Email', href: 'mailto:shahrajib278@gmail.com', icon: <FaEnvelope /> },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-social">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p>© {year} Rajib Bikram Shah. All rights reserved.</p>
        <small>Built with care using Next.js &amp; Framer Motion.</small>
      </div>
    </footer>
  );
}
