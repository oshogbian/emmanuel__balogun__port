import React from 'react';
import { Briefcase, GraduationCap, Code, Mail, Phone, MapPin } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="resume-container">
        <h2 className="resume-title">Resume</h2>
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
            <div className="work-item">
              <h4>Leadership and Project Experience</h4>
              <p>Football Team Captain & Class Project Leader</p>
              <p className="date">August 2020 - 2024</p>
              <ul>
                <li>Led the football team on and off the field, fostering teamwork, discipline, and motivation.</li>
                <li>Guided teammates through strategic planning and decision-making, ensuring peak performance during games and practices.</li>
                <li>Coordinated practice schedules, managed team dynamics, and served as the main point of contact for coaches and players.</li>
                <li>Led class projects focused on building practical software solutions using React, Node.js, and Unity, collaborating with peers to meet project deadlines and objectives.</li>
                <li>Applied leadership skills in managing team collaboration during complex problem-solving scenarios in both sports and class environments.</li>
              </ul>
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
            onClick={async () => {
              
              const fileName = "Resume_Emmanuel Balogun.pdf";
              const encodedFileName = encodeURIComponent(fileName);
              const fileUrl = `${process.env.PUBLIC_URL}/${encodedFileName}`;

              try {
                // Check if the file exists
                const response = await fetch(fileUrl);
                if (!response.ok) {
                  alert('Resume file not found. Please try again later.');
                  return;
                }

                // Create a download link
                const link = document.createElement('a');
                link.href = fileUrl;
                link.download = fileName; // This will be the suggested filename when downloading
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              } catch (error) {
                console.error('Download error:', error);
                alert('Error downloading resume. Please try again later.');
              }
            }}
          >
            Download Full Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;