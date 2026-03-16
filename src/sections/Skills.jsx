import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layout, Server, Smartphone, ShieldCheck } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      id: 'frontend',
      title: t('skills.frontend'),
      icon: <Layout className="skill-icon" />,
      skills: [
        { name: 'React', icon: 'react' },
        { name: 'Next.js', icon: 'nextdotjs' },
        { name: 'Electron', icon: 'electron' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3/1572B6' }
      ],
      size: 'large'
    },
    {
      id: 'backend',
      title: t('skills.backend'),
      icon: <Server className="skill-icon" />,
      skills: [
        { name: 'Node.js', icon: 'nodedotjs' },
        { name: 'Express', icon: 'express' },
        { name: 'Django', icon: 'django' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'Go', icon: 'go' },
        { name: 'PHP', icon: 'php' }
      ],
      size: 'medium'
    },
    {
      id: 'mobile',
      title: t('skills.mobile'),
      icon: <Smartphone className="skill-icon" />,
      skills: [
        { name: 'React Native', icon: 'react' },
        { name: 'Flutter', icon: 'flutter' },
        { name: 'Dart', icon: 'dart' }
      ],
      size: 'small'
    },
    {
      id: 'tools_security',
      title: t('skills.tools_security'),
      icon: <ShieldCheck className="skill-icon" />,
      skills: [
        { name: 'Kali Linux', icon: 'kalilinux' },
        { name: 'Git', icon: 'git' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Linux', icon: 'linux' }
      ],
      size: 'medium'
    }
  ];

  const getIconUrl = (slug) => `https://cdn.simpleicons.org/${slug}`;

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">{t('skills.subtitle')}</p>
        </div>

        <div className="bento-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id} 
              className={`bento-item ${category.size} glass-panel reveal`} 
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bento-content">
                <div className="bento-header">
                  <div className="icon-wrapper">
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill.name} className="skill-tag">
                      <img 
                        src={getIconUrl(skill.icon)} 
                        alt={skill.name} 
                        className="tech-logo"
                        loading="lazy"
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bento-bg-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
