import React from 'react';
import { useTheme } from '../ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = (e) => {
    const target = e.target;
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const id = target.getAttribute('href').substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar" onClick={handleNavClick}>
      <h2 className="logo">Shivam <span>Gupta</span></h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button className="theme-toggle" onClick={toggleTheme} title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
