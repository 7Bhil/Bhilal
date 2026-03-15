import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="tech-badge reveal reveal-stagger-1">
            <span className="live-dot"></span>
            Available for new opportunities
          </div>
          
          <h1 className="hero-title reveal reveal-stagger-2">
            Hi, I'm <span className="text-accent">Bhilal CHITOU</span>
            <br />
            Full-Stack Developer.
          </h1>
          
          <p className="hero-description reveal reveal-stagger-3">
            I craft modern, robust, and scalable web and mobile applications. 
            Passionate about creating elegant solutions using cutting-edge technologies.
          </p>
          
          <div className="hero-actions reveal reveal-stagger-4">
            <Button variant="primary">
              View My Work
              <ArrowRight size={18} />
            </Button>
            <Button variant="outline">
              Download CV
              <Download size={18} />
            </Button>
          </div>
          
          <div className="hero-socials reveal reveal-stagger-4 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={22} />
            </a>
            <a href="mailto:contact@example.com" className="social-link">
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual" style={{ animationDelay: '0.2s' }}>
          {/* We'll use a CSS shape for the premium abstract visual until we get the photo */}
          <div className="abstract-shape">
             <div className="glass-panel shape-card card-1">
                <div className="code-line w-3/4"></div>
                <div className="code-line w-1/2"></div>
                <div className="code-line w-5/6"></div>
             </div>
             <div className="glass-panel shape-card card-2">
                <div className="tech-stack-circles">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
