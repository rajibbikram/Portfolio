"use client";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rajibbikram",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rajib-bikram-shah-55b81326a",
    icon: <FaLinkedin />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/rajib.thakure",
    icon: <FaFacebook />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rajib.thakure",
    icon: <FaInstagram />,
  },
];

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus({
        state: "success",
        message: "Thanks! Your message has been sent.",
      });
      setForm(initialForm);
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "Failed to send message.",
      });
    }
  };

  const isLoading = status.state === "loading";

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Have a project in mind or want to chat? Feel free to reach out!
        </p>

        <div className="contact-grid">
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" className="contact-submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {status.state === "success" && (
              <p className="form-status form-status-success" role="status">
                {status.message}
              </p>
            )}
            {status.state === "error" && (
              <p className="form-status form-status-error" role="alert">
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
