// src/NavSwitch.js
import React, { useState } from 'react';
import './NavSwitch.css';

function NavSwitch({ toggleVisibility, handleOpenPDF }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section) => {
    toggleVisibility(section);
    setIsOpen(false); // close menu on selection
  };

  return (
    <div className="nav-container">
      <div className="desktop-nav">
        <button className="nav-button" onClick={() => handleNavClick('aboutMe')}>About Me</button>
        <button className="nav-button" onClick={() => handleNavClick('projects')}>Projects</button>
        <button className="nav-button" onClick={() => handleNavClick('skills')}>Skills</button>
        <button className="nav-button" onClick={() => handleNavClick('courses')}>Courses</button>
        <button className="nav-button" onClick={() => handleNavClick('clubs')}>Clubs</button>
        <button className="nav-button" onClick={handleOpenPDF}>Resume</button>
      </div>

      <div className="mobile-nav">
        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        {isOpen && (
          <div className="mobile-menu glass-box">
            <button onClick={() => handleNavClick('aboutMe')}>About Me</button>
            <button onClick={() => handleNavClick('projects')}>Projects</button>
            <button onClick={() => handleNavClick('skills')}>Skills</button>
            <button onClick={() => handleNavClick('courses')}>Courses</button>
            <button onClick={() => handleNavClick('clubs')}>Clubs</button>
            <button onClick={handleOpenPDF}>Resume</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavSwitch;
