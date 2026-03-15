import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, integrate an API like Formspree or EmailJS here
    console.log("Form submitted: ", formData);
    alert("Thanks! Your message has been sent.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="section-header text-center mb-12 reveal">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? Let's talk.
          </p>
        </div>

        <div className="contact-grid glass-panel reveal reveal-stagger-1">
          <div className="contact-info">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-desc">
              Fill up the form and I will get back to you within 24 hours.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <span>+33 (0) 1 23 45 67 89</span>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <span>contact@bhilalchitou.com</span>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <span>Paris, France (Remote)</span>
              </div>
            </div>
            
            <div className="contact-shape"></div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group form-group-full">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea" 
                placeholder="How can I help you?"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <div className="form-submit">
              <Button type="submit" variant="primary">
                Send Message
                <Send size={18} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
