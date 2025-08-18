"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>rajibikram2079@gmail.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+977 9765347443</p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>Kathmandu, Nepal</p>
          </div>

          <div className="social-links">
            <a href="
https://github.com/rajibbikram" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/rajib-bikram-shah-55b81326a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.facebook.com/rajib.thakure" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
          {status && <p className="form-status">{status}</p>}
        </div>
      </div>
    </section>
  );
}
