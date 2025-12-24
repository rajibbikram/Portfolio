'use client';
import "../css/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {year} Rajib Bikram Shah. All rights reserved.</p>
        <small>Built with care using Next.js &amp; Framer Motion.</small>
      </div>
    </footer>
  );
}
