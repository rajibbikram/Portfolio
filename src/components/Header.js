"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "../css/header.css";
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Always show header when at the top of the page
        if (currentScrollY === 0) {
          setVisible(true);
        } 
        // Scrolling down
        else if (currentScrollY > lastScrollY && visible) {
          setVisible(false);
        } 
        // Scrolling up
        else if (currentScrollY < lastScrollY && !visible) {
          setVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader, { passive: true });
      return () => window.removeEventListener('scroll', controlHeader);
    }
  }, [lastScrollY, visible]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header 
    className={`bg-gray-800 text-white p-4 fixed w-full z-50 transition-transform duration-300 ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}
  >
      <div className="container mx-auto flex justify-between items-center">
        <div className="firstdiv text-xl font-bold flex items-center gap-4">
          <Link href="/">Rajib Bikram Shah</Link>
          <span className="cursor-pointer" onClick={toggleSidebar}>
            <ViewSidebarIcon />
          </span>
        </div>

        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            <li><Link href="#hero" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="#about" className="hover:text-gray-400">About</Link></li>
            <li><Link href="#projects" className="hover:text-gray-400">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="text-xl font-bold">MENU</h2>
          <span className="cursor-pointer" onClick={toggleSidebar}>
            <CloseIcon />
          </span>
        </div>
        <ul className="sidebar-menu">
          <li><Link href="#hero" onClick={toggleSidebar}>HOME</Link></li>
          <li><Link href="#about" onClick={toggleSidebar}>ABOUT</Link></li>
          <li><Link href="#projects" onClick={toggleSidebar}>PROJECTS</Link></li>
          <li><Link href="#contact" onClick={toggleSidebar}>CONTACT</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Header;
