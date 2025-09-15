"use client";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>
        
        <div className="contact-info-container">
          <div className="contact-info-side">
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of these channels:</p>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div className="contact-info-text">
                <h4>Email</h4>
                <a href="mailto:shahrajib278@gmail.com">shahrajib278@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaPhone />
              </div>
              <div className="contact-info-text">
                <h4>Phone</h4>
                <a href="tel:+977-9765347443">+977-9765347443</a>
              </div>
            </div>
            
            <div className="social-links">
              <a 
                href="https://www.facebook.com/rajib.thakure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.instagram.com/rajib.thakure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/in/rajib-bikram-shah-55b81326a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
