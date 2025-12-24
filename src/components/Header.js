"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import "../css/header.css";

// Dynamically import icons with no SSR
const MenuIcon = dynamic(() => import('@mui/icons-material/Menu'), { ssr: false });
const CloseIcon = dynamic(() => import('@mui/icons-material/Close'), { ssr: false });

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll events for header visibility
  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 100;

      setIsScrolled(currentScrollY > 10);

      if (headerRef.current) {
        if (isScrollingDown) {
          headerRef.current.style.transform = 'translateY(-100%)';
        } else {
          headerRef.current.style.transform = 'translateY(0)';
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    if (!isMounted) return;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
        headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Prevent body scroll when menu is open and manage focus
  useEffect(() => {
    if (!isMounted) return;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('menu-open');

      // Focus the close button when menu opens
      const closeButton = menuRef.current?.querySelector('.sidebar-close');
      closeButton?.focus();

      // Trap focus inside the sidebar when open
      const handleTabKey = (e) => {
        if (e.key === 'Tab') {
          const focusableElements = menuRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

          if (focusableElements?.length) {
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        } else if (e.key === 'Escape') {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener('keydown', handleTabKey);
      return () => {
        document.removeEventListener('keydown', handleTabKey);
        document.body.style.overflow = 'unset';
        document.documentElement.classList.remove('menu-open');
      };
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`header pill ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="floating-pill">
          <div className="pill-left">
            <Link href="#hero" className="logo-link">
              Rajib Bikram Shah
            </Link>
            <span className="logo-tagline">Frontend engineer & UX-focused designer</span>
          </div>

          <div className="pill-center">
            <ul className="nav-pill-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-pill-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pill-right">
            <a href="#contact" className="cta-link">Get in touch</a>
            <div className="mobile-menu-button-container">
              <button
                className="mobile-menu-button"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`sidebar-overlay ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="presentation"
            aria-hidden={!isMenuOpen}
          />
        </div>
      </header>

  

      {/* Mobile Menu Sidebar */}
      <aside
        ref={menuRef}
        id="mobile-menu"
        className={`sidebar ${isMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="sidebar-header">
          <h2 id="sidebar-title">Menu</h2>
          <button
            onClick={toggleMenu}
            className="sidebar-close"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <nav aria-labelledby="sidebar-title" className="sidebar-menu">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Header;