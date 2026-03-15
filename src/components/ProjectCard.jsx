import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, image, githubUrl, liveUrl }) => {
  return (
    <div className="project-card glass-panel">
      <div className="project-image-container">
        {image ? (
          <img src={image} alt={title} className="project-image" />
        ) : (
          <div className="project-image-placeholder">
            <span>Project Image</span>
          </div>
        )}
        <div className="project-links-overlay">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="GitHub Repository">
              <Github size={20} />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="Live Demo">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
