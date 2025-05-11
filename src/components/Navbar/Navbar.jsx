import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';
import logoImage from './navBarPictures/image copy 2.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <a href="#top" onClick={handleLinkClick}>
              <img src={logoImage} alt="Eport Logo" className="logo" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="navbar-actions">
            <button 
              onClick={toggleDarkMode} 
              className="dark-mode-toggle"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={handleLinkClick}>Home</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#resume" onClick={handleLinkClick}>Resume</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;