import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main>
            <HeroSection />
            <About />
            <Projects />
            <Contact />
          </main>
          <footer className="py-12 bg-gray-50 dark:bg-gray-800 relative z-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <p className="text-gray-600 dark:text-gray-300">
                    &copy; {new Date().getFullYear()} Emmanuel Balogun. All rights reserved.
                  </p>
                </div>
                <div className="flex space-x-6 z-10 relative">
                  <a 
                    href="https://github.com/oshogbian?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-700/50 dark:hover:bg-gray-600/70 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github size={24} className="pointer-events-none" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/emmanuel-balogun-53a633246/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-700/50 dark:hover:bg-gray-600/70 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} className="pointer-events-none" />
                  </a>
                  <a 
                    href="mailto:emmanuelbalogunn@gmail.com" 
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-gray-700/50 dark:hover:bg-gray-600/70 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-all duration-300 transform hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail size={24} className="pointer-events-none" />
                  </a>
                </div>
              </div>
              <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
                Built with React, Tailwind CSS, and ❤️
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
