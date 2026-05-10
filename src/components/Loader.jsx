import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const totalDuration = 1800; // ms
    const interval = 20;
    const steps = totalDuration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      // Ease-out progression
      const easedProgress = Math.round((1 - Math.pow(1 - current / steps, 3)) * 100);
      setProgress(easedProgress);

      if (current >= steps) {
        clearInterval(timer);
        // Start fade-out
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            onComplete?.();
          }, 600);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        {/* Logo / initials */}
        <div className="loader-logo">
          <span className="loader-logo-text">BC</span>
          <div className="loader-logo-ring" />
        </div>

        {/* Name */}
        <p className="loader-name">Bhilal Chitou</p>

        {/* Progress bar */}
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <p className="loader-percent">{progress}%</p>
      </div>

      {/* Decorative blobs */}
      <div className="loader-blob loader-blob-1" />
      <div className="loader-blob loader-blob-2" />
    </div>
  );
};

export default Loader;
