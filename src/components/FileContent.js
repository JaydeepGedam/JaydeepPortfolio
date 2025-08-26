import React from 'react';
import { portfolioData } from '../data/portfolioData';

const FileContent = ({ activeFile, onFileOpen }) => {
  const renderContent = () => {
    switch (activeFile) {
      case 'about.md':
        return <AboutContent />;
      case 'experience.js':
        return <ExperienceContent />;
      case 'projects.tsx':
        return <ProjectsContent />;
      case 'education.py':
        return <EducationContent />;
      case 'skills.css':
        return <SkillsContent />;
      case 'contact.html':
        return <ContactContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <div className="file-content active">
      <div className="content-section">
        {renderContent()}
      </div>
    </div>
  );
};

const AboutContent = () => (
  <>
    <div className="profile-header">
      <div className="profile-avatar">JD</div>
      <div className="profile-info">
        <h1>{portfolioData.developer.name}</h1>
        <p className="profile-role">{portfolioData.developer.role}</p>
        <p className="profile-location">📍 {portfolioData.developer.location}</p>
        <p className="profile-status">🔍 {portfolioData.developer.status}</p>
      </div>
    </div>

    <div className="about-content">
      <h2>About Me</h2>
      <p>{portfolioData.developer.bio}</p>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <div className="contact-grid">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span style={{fontSize: '0.9em'}}>{portfolioData.developer.email}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span style={{fontSize: '0.9em'}}>{portfolioData.developer.phone}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🔗</span>
            <a href={portfolioData.developer.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-icon">💻</span>
            <a href={portfolioData.developer.github} target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

const ExperienceContent = () => (
  <>
    <h2>Professional Experience</h2>
    <div className="experience-timeline">
      {portfolioData.experience.map((exp, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>{exp.position}</h3>
            <h4>{exp.company}</h4>
            <p className="timeline-date">{exp.year} • {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="achievements-section">
      <h2>Achievements</h2>
      <div className="achievements-grid">
        {portfolioData.achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            🏆 {achievement}
          </div>
        ))}
      </div>
    </div>
  </>
);

const ProjectsContent = () => (
  <>
    <h2>Projects</h2>
    <div className="projects-grid">
      {portfolioData.projects.map(project => (
        <div key={project.id} className="project-card">
          <div className="project-header">
            <span className="project-icon">{project.icon}</span>
            <h3>{project.title}</h3>
            <span className="project-year">{project.year}</span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">
            {project.technologies.map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <span>GitHub</span>
              </a>
            )}
            <span className="project-status">{project.status}</span>
          </div>
        </div>
      ))}
    </div>
  </>
);

const EducationContent = () => (
  <>
    <h2>Education</h2>
    <div className="education-timeline">
      {portfolioData.education.map((edu, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p className="timeline-date">{edu.duration}</p>
            <p className="grade">{edu.grade}</p>
          </div>
        </div>
      ))}
    </div>
  </>
);

const SkillsContent = () => (
  <>
    <h2>Skills & Technologies</h2>
    <div className="skills-container">
      {Object.entries(portfolioData.skills).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)} Development</h3>
          <div className="skills-grid">
            {skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

const ContactContent = () => (
  <>
    <h2>Contact Information</h2>
    <div className="contact-container">
      <div className="contact-card">
        <h3>Get in Touch</h3>
        <div className="contact-details">
          <div className="contact-row">
            <span className="contact-label">📧 Email:</span>
            <a href={`mailto:${portfolioData.developer.email}`} style={{color: 'var(--accent-primary)'}}>
              {portfolioData.developer.email}
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-label">📱 Phone:</span>
            <a href={`tel:${portfolioData.developer.phone}`} style={{color: 'var(--accent-primary)'}}>
              {portfolioData.developer.phone}
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-label">📍 Location:</span>
            <span>{portfolioData.developer.location}</span>
          </div>
        </div>
      </div>

      <div className="social-links">
        <h3>Connect With Me</h3>
        <div className="social-grid">
          <a href={portfolioData.developer.github} target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="social-icon">💻</span>
            <span>GitHub</span>
          </a>
          <a href={portfolioData.developer.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="social-icon">🔗</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </>
);

export default FileContent;
