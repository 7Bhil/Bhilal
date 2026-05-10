import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, X } from 'lucide-react';
import './Certifications.css';

const certificationsList = [
  {
    id: 'html-css',
    title: 'HTML & CSS',
    image: `${import.meta.env.BASE_URL}Certifications/certification html && css.png`
  },
  {
    id: 'js',
    title: 'JavaScript',
    image: `${import.meta.env.BASE_URL}Certifications/certification js.png`
  },
  {
    id: 'php-mysql',
    title: 'PHP & MySQL',
    image: `${import.meta.env.BASE_URL}Certifications/certification php && Mysql.png`
  },
  {
    id: 'python',
    title: 'Python',
    image: `${import.meta.env.BASE_URL}Certifications/certification python.png`
  },
  {
    id: 'c',
    title: 'C Programming',
    image: `${import.meta.env.BASE_URL}Certifications/certification C.png`
  },
  {
    id: 'linux',
    title: 'Linux',
    image: `${import.meta.env.BASE_URL}Certifications/certification linux.png`
  },
  {
    id: 'reseau1',
    title: 'Networking Concepts',
    image: `${import.meta.env.BASE_URL}Certifications/certification reseau.png`
  },
  {
    id: 'reseau2',
    title: 'Advanced Networking',
    image: `${import.meta.env.BASE_URL}Certifications/certification reseau2.png`
  }
];

const Certifications = () => {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  const openModal = (cert, e) => {
    e.preventDefault();
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">{t('certifications.title')}</h2>
          <p className="section-subtitle">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="certifications-grid">
          {certificationsList.map((cert, index) => (
            <div 
              key={cert.id} 
              className="cert-card reveal" 
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={(e) => openModal(cert, e)}
            >
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-image" loading="lazy" />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <ExternalLink size={20} className="view-icon" aria-label={t('certifications.viewFull')} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div 
        className={`cert-modal-overlay ${selectedCert ? 'open' : ''}`}
        onClick={closeModal}
      >
        <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="cert-modal-close" onClick={closeModal} aria-label="Close modal">
            <X size={32} />
          </button>
          {selectedCert && (
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
