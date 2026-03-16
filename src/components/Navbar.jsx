import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className={`logo ${isScrolled ? 'logo-scrolled' : ''}`}>
          Bhil<span style={{ color: 'var(--accent-primary)' }}>$</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop glass-panel floating-pill">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className={`nav-actions-desktop ${isScrolled ? 'actions-scrolled' : ''}`}>
          <div className="nav-controls">
            <button onClick={toggleLanguage} className="icon-btn" aria-label="Toggle language">
              <Globe size={18} />
              <span className="lang-text">{language.toUpperCase()}</span>
            </button>
            <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <a href="#contact" className="btn btn-primary btn-sm rounded-pill">
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="nav-mobile-toggle">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-controls">
          <button onClick={toggleLanguage} className="icon-btn">
            <Globe size={18} />
            <span className="lang-text">{language.toUpperCase()}</span>
          </button>
          <button onClick={toggleTheme} className="icon-btn">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <ul className="nav-mobile-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="nav-mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
             <a href="#contact" className="nav-mobile-link text-accent" onClick={() => setIsMobileMenuOpen(false)}>
               {t('nav.contact')}
             </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
