import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-header reveal">
          <h2 className="section-title">{t('about.title')}</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio */}
          <div className="about-bio reveal reveal-stagger-1">
            <div className="bio-block">
              <div className="accent-line"></div>
              <p className="about-text">
                {t('about.bio1')}
              </p>
            </div>
            
            <p className="about-text mt-4">
              {t('about.bio2')}
            </p>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="about-timeline">
            
            {/* Experience Group */}
            <div className="timeline-group reveal reveal-stagger-2">
              <div className="timeline-label">
                <span className="label-number">01</span>
                <h3>{t('about.experience')}</h3>
              </div>
              
              <div className="timeline-cards">
                <div className="timeline-card glass-panel">
                  <span className="timeline-date">2025 — 2026</span>
                  <h4 className="timeline-role">{t('about.exp1_title')}</h4>
                  <span className="timeline-company">{t('about.exp1_company')}</span>
                  <p className="timeline-desc">{t('about.exp1_desc')}</p>
                </div>
                
                <div className="timeline-card glass-panel">
                  <span className="timeline-date">2023 — 2025</span>
                  <h4 className="timeline-role">{t('about.exp2_title')}</h4>
                  <span className="timeline-company">{t('about.exp2_company')}</span>
                  <p className="timeline-desc">{t('about.exp2_desc')}</p>
                </div>
              </div>
            </div>

            {/* Education Group */}
            <div className="timeline-group reveal reveal-stagger-3 mt-12">
              <div className="timeline-label">
                <span className="label-number">02</span>
                <h3>{t('about.education')}</h3>
              </div>
              
              <div className="timeline-cards">
                <div className="timeline-card glass-panel">
                  <span className="timeline-date">{t('about.edu1_year')}</span>
                  <h4 className="timeline-role">{t('about.edu1_title')}</h4>
                  <span className="timeline-company">{t('about.edu1_school')}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
