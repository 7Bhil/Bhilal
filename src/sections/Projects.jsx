import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from '../components/ProjectCard';
import bhilalImg from '../assets/images/language.png';
import bhilCoursImg from '../assets/images/cours.png';
import arrondissementImg from '../assets/images/arrondissement.png';
import mpbImg from '../assets/images/mpb.png';
import challengeImg from '../assets/images/challenge.png';
import restoImg from '../assets/images/resto.png';
import voitureImg from '../assets/images/voiture.png';
import './Projects.css';

const Projects = () => {
  const { t } = useLanguage();

  const featuredProjects = [
    {
      title: t('projects.bhilal.title'),
      description: t('projects.bhilal.description'),
      tags: ["Node.js", "Go", "Cybersecurity", "Custom Language"],
      image: bhilalImg,
      githubUrl: "https://github.com/7Bhil/Language-Bhilal",
      liveUrl: "https://bhil-documentations.netlify.app/"
    },
    {
      title: t('projects.bhilcours.title'),
      description: t('projects.bhilcours.description'),
      tags: ["React", "Django", "PostgreSQL"],
      image: bhilCoursImg,
      githubUrl: "https://github.com/7Bhil/Cours-front",
      liveUrl: "https://bhilcours.netlify.app/"
    },
    {
      title: t('projects.arrondissement.title'),
      description: t('projects.arrondissement.description'),
      tags: ["React", "UI/UX", "Political Party"],
      image: arrondissementImg,
      githubUrl: "https://github.com/7Bhil/Arrondissement",
      liveUrl: "https://chef-d-arrondissement.netlify.app/"
    },
    {
      title: t('projects.mpb.title'),
      description: t('projects.mpb.description'),
      tags: ["MERN Stack", "Express", "MongoDB", "Full-stack"],
      image: mpbImg,
      liveUrl: "https://mouvementpatriotiquedubenin.netlify.app/"
    },
    {
      title: t('projects.challenge.title'),
      description: t('projects.challenge.description'),
      tags: ["MERN Stack", "State Management", "Leaderboard"],
      image: challengeImg,
      githubUrl: "https://github.com/7Bhil/Challenge-react",
      liveUrl: "https://challenge-react-delta.vercel.app/"
    },
    {
      title: t('projects.resto.title'),
      description: t('projects.resto.description'),
      tags: ["React", "Tailwind CSS", "Premium UI"],
      image: restoImg,
      githubUrl: "https://github.com/7Bhil/Restaurant",
      liveUrl: "https://restaurant-nine-tau.vercel.app/"
    },
    {
      title: t('projects.voiture.title'),
      description: t('projects.voiture.description'),
      tags: ["React", "E-Commerce", "UI/UX"],
      image: voitureImg,
      githubUrl: "https://github.com/7Bhil/react-voiture",
      liveUrl: "https://bhilcars.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
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
