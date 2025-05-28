import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from '../../components/HeroSection/HeroSection';
import ProjectsGrid from '../../components/ProjectsGrid/ProjectsGrid';
import Resume from '../../components/Resume/Resume';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <HeroSection />
        <About />
        <ProjectsGrid />
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default App;