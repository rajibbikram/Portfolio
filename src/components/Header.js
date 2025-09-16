"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import "../css/header.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  // Handle scroll events for header visibility
  useEffect(() => {
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the first focusable element in the menu
      const firstFocusable = menuRef.current?.querySelector('button, [href], [tabindex]:not([tabindex="-1"])');
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`header ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="container">
          <div className="firstdiv">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Home"
            >
              Rajib Bikram Shah
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        id="mobile-menu"
        className={`sidebar ${isMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button
            onClick={toggleMenu}
            className="sidebar-close"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="overlay open" 
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;