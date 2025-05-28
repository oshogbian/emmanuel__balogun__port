import { jsPDF } from 'jspdf';

export const generateResumePdf = async () => {
  const doc = new jsPDF();
  
  // Add content to the PDF
  doc.setFontSize(22);
  doc.text('EMMANUEL OLUWASEGUN BALOGUN', 105, 20, { align: 'center' });
  doc.setFontSize(14);
  doc.setTextColor(100);
  doc.text('Software Developer & Student', 105, 30, { align: 'center' });
  
  // Contact Information
  doc.setFontSize(11);
  doc.setTextColor(0);
  doc.text('📱 704-534-8737  •  📧 emmanuelbalogunn@gmail.com', 105, 40, { align: 'center' });
  doc.text('📍 Charlotte, NC 28213  •  🌐 emmanuelbalogunport.firebaseapp.com', 105, 46, { align: 'center' });
  
  // Add a line
  doc.setDrawColor(200);
  doc.line(20, 55, 190, 55);
  
  // Add sections
  addSection(doc, 'EDUCATION', 65);
  addEducation(doc, 70);
  
  addSection(doc, 'AWARDS & CERTIFICATIONS', 100);
  addAwards(doc, 105);
  
  addSection(doc, 'PROFESSIONAL PROFILE', 125);
  addProfile(doc, 130);
  
  addSection(doc, 'TECHNICAL SKILLS', 180);
  addSkills(doc, 185);
  
  addSection(doc, 'WORK EXPERIENCE', 220);
  addExperience(doc, 225);
  
  // Save the PDF
  doc.save('Emmanuel_Balogun_Resume.pdf');
};

const addSection = (doc, title, y) => {
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(title, 20, y);
  doc.setDrawColor(200);
  doc.line(20, y + 2, 50, y + 2);
  doc.setFont('helvetica', 'normal');
};

const addEducation = (doc, y) => {
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Marshall University', 20, y);
  doc.setFont('helvetica', 'normal');
  doc.text('2020 - 2022', 160, y);
  doc.text('B.A. Computer Science', 20, y + 7);
  
  doc.setFont('helvetica', 'bold');
  doc.text('University of North Carolina at Charlotte', 20, y + 20);
  doc.setFont('helvetica', 'normal');
  doc.text('2022 - 2024', 160, y + 20);
  doc.text('B.A. Computer Science', 20, y + 27);
};

const addAwards = (doc, y) => {
  doc.setFontSize(11);
  doc.text('• Dean\'s List', 20, y);
  doc.text('• Honor Roll Athlete', 20, y + 7);
  doc.text('• NCAA Division I Athlete', 20, y + 14);
};

const addProfile = (doc, y) => {
  doc.setFontSize(11);
  const text = 'Results-driven Computer Science graduate and former NCAA Division I athlete with a unique combination of technical expertise and leadership skills. Proven track record of driving innovative software development projects and delivering high-quality solutions.';
  doc.text(text, 20, y, { maxWidth: 170, align: 'justify' });
  
  doc.setFont('helvetica', 'bold');
  doc.text('Key Achievements:', 20, y + 30);
  doc.setFont('helvetica', 'normal');
  doc.text('• Successfully developed multiple front-end interfaces using React and JavaScript (ES6+)', 25, y + 40, { maxWidth: 165 });
  doc.text('• Designed and implemented backend systems using Node.js, ASP.NET, and RESTful APIs', 25, y + 50, { maxWidth: 165 });
  doc.text('• Collaborated with cross-functional teams to develop database-driven solutions', 25, y + 60, { maxWidth: 165 });
  doc.text('• Utilized Git, Unity, and VS Code to streamline development workflows', 25, y + 70, { maxWidth: 165 });
};

const addSkills = (doc, y) => {
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Programming Languages', 20, y);
  doc.setFont('helvetica', 'normal');
  doc.text('• JavaScript (ES6+)', 25, y + 10);
  doc.text('• Python', 25, y + 17);
  doc.text('• C#', 25, y + 24);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Technologies & Tools', 90, y);
  doc.setFont('helvetica', 'normal');
  doc.text('• React.js, Node.js, ASP.NET', 95, y + 10);
  doc.text('• RESTful APIs, SQL Server', 95, y + 17);
  doc.text('• MongoDB, Git, Unity, VS Code', 95, y + 24);
};

const addExperience = (doc, y) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('Software Developer & Student Athlete', 20, y);
  doc.setFont('helvetica', 'normal');
  doc.text('January 2020 - Present', 160, y);
  
  doc.setFontSize(11);
  doc.text('• Developed JobSync, a job-tracking application using Flask and SQLite', 25, y + 15, { maxWidth: 165 });
  doc.text('• Created immersive VR applications in Unity with C#', 25, y + 25, { maxWidth: 165 });
  doc.text('• Contributed to a hardware-based tire tread analysis tool using Particle.io', 25, y + 35, { maxWidth: 165 });
  doc.text('• Optimized application performance through code refactoring', 25, y + 45, { maxWidth: 165 });
  doc.text('• Collaborated in Agile environments to deliver high-quality solutions', 25, y + 55, { maxWidth: 165 });
};
