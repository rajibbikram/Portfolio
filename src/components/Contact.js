"use client";
import { useState } from "react";
import "../css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
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
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      {status && <p className="contact-status">{status}</p>}
    </div>
  );
}
