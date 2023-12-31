import React from 'react';
import AboutMe from '../nav/Aboutme';
import Projects from '../nav/Projects'; 
import Skills from '../nav/Skills';
import Courses from '../nav/Courses'; 
import './Display.css'

import RandomShapes from './RandomShapes';

function DisplayComponets({ showAboutMe, showProjects, showSkills, showCourses }) {
  return (
    <div className='MainDiv'>
      <h1>Ahmed M Abdullahi</h1>
      <p></p>
      {showAboutMe && <AboutMe />}
      {showProjects && <Projects />}
      {showSkills && <Skills />}
      {showCourses && <Courses />} 
      <RandomShapes />
    </div>
  );
}

export default DisplayComponets;
