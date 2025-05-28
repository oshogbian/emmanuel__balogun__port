import React from 'react';
import { Briefcase, GraduationCap, Code, Download, Mail, Phone, MapPin } from 'lucide-react';
import './Resume.css';
import downloadResume from '../../utils/downloadResume';

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="resume-container">
        <div className="resume-header">
          <h2 className="resume-title">Resume</h2>
          <button 
            onClick={downloadResume}
            className="download-btn"
            aria-label="Download Resume"
          >
            <Download size={20} className="mr-2" />
            Download PDF
          </button>
        </div>
        <div className="resume-content">
          <section className="resume-section">
            <div className="section-header">
              <GraduationCap size={24} />
              <h3 className="section-title">Education</h3>
            </div>
            <div className="education-item">
              <h4>Bachelor of Art in Computer Science</h4>
              <p>University of North Carolina at Charlotte</p>
              <p className="date">2023 - 2024</p>
            </div>
            <div className="education-item">
              <h4>Bachelor of Art in Computer Science</h4>
              <p>Marshall University</p>
              <p className="date">2020 - 2023</p>
            </div>
          </section>

          <section className="resume-section">
            <div className="section-header">
              <Briefcase size={24} />
              <h3 className="section-title">Work Experience</h3>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">Software Developer & Student Athlete</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-6">January 2020 - Present</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Developed <span className="font-semibold text-gray-900 dark:text-white">JobSync</span>, a job-tracking application built with Flask and SQLite.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Created immersive <span className="font-semibold text-gray-900 dark:text-white">VR applications</span> in Unity using C#, implementing real-time physics interactions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Contributed to a hardware-based <span className="font-semibold text-gray-900 dark:text-white">tire tread analysis tool</span> using Particle.io and IoT data integration.
                  </span>
                </li>
              </ul>
              
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">Flask</span>
                <span className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">SQLite</span>
                <span className="px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium rounded-full">Unity</span>
                <span className="px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full">C#</span>
                <span className="px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-sm font-medium rounded-full">Particle.io</span>
                <span className="px-3 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 text-sm font-medium rounded-full">IoT</span>
              </div>
            </div>
          </section>

          <section className="resume-section" id="skills">
            <div className="section-header">
              <Code size={24} />
              <h3 className="section-title">Skills</h3>
            </div>
            <ul className="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>React & Front-End Development</li>
              <li>Node.js & Backend Development</li>
              <li>Python (Data Structures, Algorithms)</li>
              <li>SQL & Database Management</li>
              <li>Git & Version Control</li>
              <li>RESTful APIs & Microservices</li>
              <li>Agile Methodologies & Scrum</li>
              <li>Leadership & Team Collaboration (Football Team Captain)</li>
              <li>Project Management & Problem-Solving (Class Projects & Team Leadership)</li>
              <li>Unity & Game Development</li>
            </ul>
          </section>

          <section className="resume-section" id="contact">
            <div className="section-header">
              <Mail size={24} />
              <h3 className="section-title">Contact</h3>
            </div>
            <div className="contact-card">
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:emmanuelbalogunn@gmail.com">emmanuelbalogunn@gmail.com</a>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <a href="tel:+17045348737">(704)534-8737</a>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <p>Charlotte, NC</p>
              </div>
            </div>
          </section>
        </div>

        <div className="resume-download">
          <button
            className="button primary"
            onClick={downloadResume}
          >
            Download Full Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;