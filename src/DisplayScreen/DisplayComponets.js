import React from 'react';
import AboutMe from '../nav/Aboutme';
import Projects from '../nav/Projects'; 
import Skills from '../nav/Skills';
import './Display.css'

function DisplayComponets({ showAboutMe, showProjects, showSkills }) {
  return (
    <div className='MainDiv'>
      <h1>Ahmed M Abdullahi</h1>
      <p></p>
      {showAboutMe && <AboutMe />}
      {showProjects && <Projects />}
      {showSkills && <Skills />}
    </div>
  );
}

export default DisplayComponets;
