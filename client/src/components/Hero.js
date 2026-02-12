import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const words = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let charIndex = 0;
    let interval;
    let wordIndex = 0;

    const type = () => {
      if (charIndex < words[wordIndex].length) {
        setDisplayText(words[wordIndex].substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setDisplayText('');
          charIndex = 0;
        }, 2000);
      }
    };

    interval = setInterval(type, 100);
    return () => clearInterval(interval);
  }, [wordIndex]);

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <h1>Hello, I'm <span>Shivam Gupta</span></h1>
      <h2 className="typing">{displayText}</h2>
      <button className="btn" onClick={handleViewWork}>View My Work</button>
    </section>
  );
};

export default Hero;
