import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "409f18c0-89b7-49a1-b700-3cb71f989740", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset button
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header text-center mb-12 reveal">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-grid glass-panel reveal reveal-stagger-1">
          <div className="contact-info">
            <h3 className="contact-info-title">{t('contact.infoTitle')}</h3>
            <p className="contact-info-desc">
              {t('contact.infoDesc')}
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <span>+229 01 98 87 40 19</span>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <span>7bhilal.chitou7@gmail.com</span>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <span>Remote / Full-time</span>
              </div>
            </div>
            
            <div className="contact-shape"></div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">{t('contact.formName')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                placeholder={t('contact.formName')}
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">{t('contact.formEmail')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                placeholder={t('contact.formEmail')}
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group form-group-full">
              <label htmlFor="message" className="form-label">{t('contact.formMessage')}</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea" 
                placeholder={t('contact.formMessage')}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <div className="form-submit">
              <Button type="submit" variant="primary" disabled={status === 'loading'} className={status === 'success' ? 'btn-success' : status === 'error' ? 'btn-error' : ''}>
                {status === 'loading' ? 'Envoi en cours...' : 
                 status === 'success' ? t('contact.successMsg') : 
                 status === 'error' ? 'Erreur lors de l\'envoi' : 
                 t('contact.formSubmit')}
                {status === 'idle' && <Send size={18} />}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
