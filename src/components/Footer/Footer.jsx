import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://github.com/oshogbian?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-balogun-53a633246/" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:emmanuelbalogunn@gmail.com" className="social-link">
            <Mail size={24} />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Eport. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;