import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-scale global e-commerce platform built with Next.js and Node.js. Features include user authentication, payment processing, and an admin dashboard.",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: null, // Placeholder will show
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Real-time Chat Application",
      description: "A high-performance real-time messaging application using Vue 3 and Firebase. Supports individual chats, group channels, and file sharing.",
      tags: ["Vue 3", "Firebase", "Tailwind CSS"],
      image: null,
      githubUrl: "https://github.com",
    },
    {
      title: "Finance Tracker Mobile",
      description: "A cross-platform mobile application built with Flutter to track personal expenses, categorize spending, and visualize financial health over time.",
      tags: ["Flutter", "Dart", "SQLite"],
      image: null,
      liveUrl: "https://example.com"
    },
    {
      title: "Corporate Dashboard",
      description: "An interactive analytics dashboard built with React and Laravel for monitoring internal company KPIs securely.",
      tags: ["React", "Laravel", "MySQL", "Chart.js"],
      image: null,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of my best work across web and mobile platforms.</p>
        </div>
        
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-wrapper reveal" style={{ transitionDelay: `${index * 0.15}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
