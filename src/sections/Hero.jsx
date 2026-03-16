import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/Button';
import './Hero.css';
import profileImg from '../assets/images/me.jpeg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          {/* <div className="tech-badge reveal reveal-stagger-1">
            <span className="live-dot"></span>
            {t('hero.available')}
          </div> */}
          
          <h1 className="hero-title reveal reveal-stagger-2">
            {t('hero.welcome')} <span className="text-accent">Bhilal CHITOU</span>
            <br />
            {t('hero.role')}
          </h1>
          
          <p className="hero-description reveal reveal-stagger-3">
            {t('hero.description')}
          </p>
          
          <div className="hero-actions reveal reveal-stagger-4">
            <Button variant="primary">
              {t('hero.viewWork')}
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline">
              {t('hero.downloadCV')}
              <Download size={18} />
            </Button>
          </div>
          
          <div className="hero-socials reveal reveal-stagger-4 mt-4">
            <a href="https://github.com/7Bhil/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/bhilal-chitou/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={22} />
            </a>
            <a href="https://web.facebook.com/bh.chitou.9/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Facebook size={22} />
            </a>
            <a href="mailto:7bhilal.chitou7@gmail.com" className="social-link">
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual reveal" style={{ animationDelay: '0.2s' }}>
          <div className="profile-image-wrapper">
             <img src={profileImg} alt="Bhilal CHITOU" className="profile-img" />
             <div className="profile-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
