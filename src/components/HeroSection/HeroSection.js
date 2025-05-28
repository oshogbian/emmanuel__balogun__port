import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  useEffect(() => {
    // Initialize particles effect
    if (window.particlesJS) {
      // Ensure the canvas doesn't block clicks
      const canvas = document.getElementById('particles-js');
      if (canvas) {
        canvas.style.pointerEvents = 'none';
      }
      
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#3B82F6' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#3B82F6',
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden pt-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Animated Background */}
      <div id="particles-js" className="absolute inset-0 -z-10 pointer-events-none" />
      
      <div className="fixed inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="block">Athlete.</span>
              <span className="block">Innovator.</span>
              <span className="text-gradient">Problem-Solver.</span>
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 min-h-[2.5rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  1500,
                  'UI/UX Enthusiast',
                  1500,
                  'Problem Solver',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary font-medium"
              />
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I craft exceptional digital experiences with clean, efficient code and beautiful design.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900"
              >
                Get In Touch
                <ArrowRight className="ml-2" size={18} />
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image Gallery - Always visible */}
          <motion.div 
            className="relative mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md mx-auto space-y-6">
              {/* Main Profile Image */}
              <motion.div 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img 
                  src="/images/heroPictures/hero.jpg" 
                  alt="Emmanuel Balogun - Full Stack Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
              
              {/* Image Grid - Always visible */}
              <div className="grid grid-cols-3 gap-4">
                {['image1.jpg', 'image2.jpg', 'image3.jpg'].map((img, index) => (
                  <motion.div 
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: 0.5 + (index * 0.1),
                        duration: 0.6,
                        ease: [0.2, 0.8, 0.2, 1]
                      }
                    }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      transition: { 
                        type: 'spring',
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                  >
                    <motion.img 
                      src={`/images/heroPictures/${img}`} 
                      alt={`Emmanuel Balogun - Project ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      initial={{ scale: 1 }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: {
                          duration: 0.8,
                          ease: [0.2, 0.8, 0.2, 1]
                        } 
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
