import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=E-Commerce',
      liveUrl: 'https://example.com/ecommerce',
      codeUrl: 'https://github.com/yourusername/ecommerce',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tags: ['React', 'Firebase', 'Material-UI', 'Redux'],
      image: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Task+App',
      liveUrl: 'https://example.com/taskapp',
      codeUrl: 'https://github.com/yourusername/taskapp',
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Framer Motion for smooth animations.',
      tags: ['React', 'Framer Motion', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/600x400/6366F1/FFFFFF?text=Portfolio',
      liveUrl: 'https://example.com/portfolio',
      codeUrl: 'https://github.com/yourusername/portfolio',
      category: 'Web Design'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'A mobile-first fitness tracking application with workout plans and progress visualization.',
      tags: ['React Native', 'Firebase', 'D3.js'],
      image: 'https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Fitness+App',
      liveUrl: 'https://example.com/fitness',
      codeUrl: 'https://github.com/yourusername/fitness',
      category: 'Mobile'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'Discover and save your favorite recipes with nutritional information and meal planning.',
      tags: ['React', 'Spoonacular API', 'Context API'],
      image: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Recipe+App',
      liveUrl: 'https://example.com/recipe',
      codeUrl: 'https://github.com/yourusername/recipe',
      category: 'Web App'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast and location-based weather data.',
      tags: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      image: 'https://via.placeholder.com/600x400/06B6D4/FFFFFF?text=Weather+App',
      liveUrl: 'https://example.com/weather',
      codeUrl: 'https://github.com/yourusername/weather',
      category: 'Web App'
    },
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of my recent work and projects I've built to solve real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="space-y-2">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 text-xs bg-white/10 text-white rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <Eye size={18} />
                    </a>
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in seeing more of my work?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Check out my GitHub profile for more projects and contributions to open-source software.
          </p>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            <Github className="mr-2" size={20} />
            View My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
