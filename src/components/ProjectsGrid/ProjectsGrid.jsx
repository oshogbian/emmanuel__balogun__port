import React from 'react';
import { Github, Code, Calendar } from 'lucide-react';
import './ProjectsGrid.css';

const ProjectsGrid = () => {
  const projects = [
    { 
      id: 1, 
      title: 'JobSync', 
      description: 'This is a Group Project. JobSync is an app that helps you keep track of your applications to jobs and internships',
      sourceCode: 'https://github.com/nsvedberg/JobSync',
      timeline: 'Fall 2023',
      techStack: 'React, Node.js, MongoDB'
    },
    { 
      id: 2, 
      title: 'Particle device', 
      description: 'IoT Particle device that monitors temperature, humidity, and soil moisture, then publishes the data and sends alerts when certain conditions are met',
      sourceCode: 'https://build.particle.io/build/65d5485b34e6b102519b9390',
      timeline: 'Spring 2023',
      techStack: 'IoT, C++, Particle API'
    },
    { 
      id: 3, 
      title: 'Eport', 
      description: 'Personal portfolio',
      sourceCode: 'https://github.com/yourusername/project3',
      timeline: 'Summer 2023',
      techStack: 'React, CSS, JavaScript'
    },
  ];

  return (
    <div className="projects-grid" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span className="tech-stack">
                  <Code size={16} />
                  {project.techStack}
                </span>
                <span className="timeline">
                  <Calendar size={16} />
                  {project.timeline}
                </span>
              </div>
              <a href={project.sourceCode} className="project-link" target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;