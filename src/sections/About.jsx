import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-header reveal">
          <h2 className="section-title">About me</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Bio */}
          <div className="about-bio reveal reveal-stagger-1">
            <div className="bio-block">
              <div className="accent-line"></div>
              <p className="about-text">
                I'm Bhilal CHITOU, a full-stack developer focused on building robust, responsive, and user-centered applications. I turn ideas and business requirements into reliable, high-performing web and mobile experiences using modern technologies like React, Laravel, and Flutter.
              </p>
            </div>
            
            <p className="about-text mt-4">
              Curious by nature and detail-oriented, I care as much about usability and performance as I do about code quality. My goal is simple: create digital products that are both efficient and meaningful.
            </p>
            
            <p className="about-text mt-4">
              Outside of development, I enjoy exploring new tech stacks and constantly refining my architectural approaches to deliver scalable solutions.
            </p>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="about-timeline">
            
            {/* Experience Group */}
            <div className="timeline-group reveal reveal-stagger-2">
              <div className="timeline-label">
                <span className="label-number">01</span>
                <h3>Professional Experience</h3>
              </div>
              
              <div className="timeline-cards">
                <div className="timeline-card glass-panel">
                  <span className="timeline-date">2023 — Present</span>
                  <h4 className="timeline-role">Full-Stack Developer (Freelance)</h4>
                  <span className="timeline-company">Various Clients</span>
                  <p className="timeline-desc">End-to-end development of web and mobile applications using React, Laravel, and Flutter.</p>
                </div>
                
                <div className="timeline-card glass-panel">
                  <span className="timeline-date">2021 — 2023</span>
                  <h4 className="timeline-role">Web Developer</h4>
                  <span className="timeline-company">Tech Agency</span>
                  <p className="timeline-desc">Integration of responsive designs and optimization of backend performance.</p>
                </div>
              </div>
            </div>

            {/* Education Group */}
            <div className="timeline-group reveal reveal-stagger-3 mt-12">
              <div className="timeline-label">
                <span className="label-number">02</span>
                <h3>Education</h3>
              </div>
              
              <div className="timeline-cards">
                <div className="timeline-card glass-panel">
                  <span className="timeline-date">2018 — 2021</span>
                  <h4 className="timeline-role">Bachelor's Degree in Computer Science</h4>
                  <span className="timeline-company">University Name</span>
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
