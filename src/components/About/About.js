import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Server, BarChart2, Users, Zap, Layers, GitBranch, GraduationCap, Award, Briefcase } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, icon: <Cpu size={20} className="text-blue-500" />, category: 'languages' },
    { name: 'React & Node.js', level: 90, icon: <Layers size={20} className="text-blue-500" />, category: 'frameworks' },
    { name: 'Python', level: 85, icon: <Code size={20} className="text-blue-500" />, category: 'languages' },
    { name: 'SQL', level: 85, icon: <Server size={20} className="text-blue-500" />, category: 'databases' },
    { name: 'Git', level: 90, icon: <GitBranch size={20} className="text-blue-500" />, category: 'tools' },
    { name: 'Unity & C#', level: 80, icon: <Cpu size={20} className="text-blue-500" />, category: 'game-dev' },
    { name: 'Problem Solving', level: 95, icon: <BarChart2 size={20} className="text-blue-500" />, category: 'soft-skills' },
    { name: 'Agile/Scrum', level: 90, icon: <Zap size={20} className="text-blue-500" />, category: 'methodologies' },
  ];

  const education = [
    {
      degree: 'B.A. in Computer Science',
      institution: 'University of North Carolina at Charlotte',
      year: '2023-2024',
      icon: <GraduationCap className="text-blue-500" />,
      highlights: [
        'Focused on software engineering and web development',
        'Advanced algorithms and data structures',
        'Completed senior project in full-stack development'
      ]
    },
    {
      degree: 'B.A. in Computer Science',
      institution: 'Marshall University',
      year: '2020-2023',
      icon: <GraduationCap className="text-blue-500" />,
      highlights: [
        'Emphasized algorithms and data structures',
        'Competitive programming team member',
        'Student athlete balancing academics and athletics'
      ]
    }
  ];

  const experience = [
    {
      role: 'Software Developer & Student Athlete',
      company: 'Self-Employed',
      year: '2020 - Present',
      icon: <Briefcase className="text-blue-500" />,
      highlights: [
        'Developed JobSync, a job-tracking application with Flask and SQLite',
        'Created immersive VR applications in Unity with C#',
        'Built IoT devices with Particle.io for environmental monitoring'
      ]
    },
    {
      role: 'Computer Science Tutor',
      company: 'Marshall University',
      year: '2021 - 2023',
      icon: <Award className="text-blue-500" />,
      highlights: [
        'Tutored students in data structures and algorithms',
        'Assisted with programming assignments in Java and Python',
        'Helped students debug complex code issues'
      ]
    }
  ];

  const skillCategories = [
    { id: 'languages', name: 'Languages', icon: <Code className="mr-2" /> },
    { id: 'frameworks', name: 'Frameworks', icon: <Layers className="mr-2" /> },
    { id: 'databases', name: 'Databases', icon: <Server className="mr-2" /> },
    { id: 'tools', name: 'Tools', icon: <GitBranch className="mr-2" /> },
    { id: 'game-dev', name: 'Game Dev', icon: <Cpu className="mr-2" /> },
    { id: 'soft-skills', name: 'Soft Skills', icon: <Users className="mr-2" /> },
    { id: 'methodologies', name: 'Methods', icon: <Zap className="mr-2" /> },
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate Full-Stack Developer and former student athlete with a strong foundation in computer science.
            I love building responsive web applications and immersive experiences while solving complex problems through code.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center">
            <Code className="mr-2 text-blue-500" />
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => {
              const categorySkills = skills.filter(skill => skill.category === category.id);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={catIndex} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4 flex items-center">
                    {category.icon}
                    {category.name}
                  </h4>
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-sm font-medium text-blue-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <motion.div
                            className="bg-blue-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center">
              <GraduationCap className="mr-2 text-blue-500" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 group"
                >
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-blue-500 -translate-x-1/2 flex items-center justify-center text-white">
                    {edu.icon}
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-sm text-blue-500 font-medium mb-3">{edu.year}</p>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 flex items-center">
              <Briefcase className="mr-2 text-blue-500" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 group"
                >
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-blue-500 -translate-x-1/2 flex items-center justify-center text-white">
                    {exp.icon}
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{exp.role}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                    <p className="text-sm text-blue-500 font-medium mb-3">{exp.year}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
