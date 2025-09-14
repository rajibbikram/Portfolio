"use client";
import { useState } from "react";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <div className="contact">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">We’d love to hear from you. Fill out the form below!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={5} />
        <button type="submit">Send Message</button>
      </form>

      {status && <p className="contact-status">{status}</p>}

      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p><FaEnvelope /> Gmail: <a href="mailto:shahrajib278@gmail.com">shahrajib278@gmail.com</a></p>
        <p><FaPhone /> Phone: <a href="tel:+977-9765347443">+977-9765347443</a></p>
        <div className="social-links">
          <a href="https://www.facebook.com/rajib.thakure" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/rajib.thakure" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/rajib-bikram-shah-55b81326a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}
