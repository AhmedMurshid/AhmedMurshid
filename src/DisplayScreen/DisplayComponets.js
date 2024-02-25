import React from 'react';
import AboutMe from '../nav/Aboutme';
import Projects from '../nav/Projects'; 
import Skills from '../nav/Skills';
import Courses from '../nav/Courses'; 
import Clubs from '../nav/Clubs';
import './Display.css'

import RandomShapes from './RandomShapes';

function DisplayComponets({ showAboutMe, showProjects, showClubs, showSkills, showCourses}) {
  return (
    <div className='MainDiv'>
      <h1>Ahmed M Abdullahi</h1>
      <p></p>
      {showAboutMe && <AboutMe />}
      {showProjects && <Projects />}
      {showClubs && <Clubs />} 
      {showSkills && <Skills />}
      {showCourses && <Courses />}
      
      <RandomShapes />
    </div>
  );
}

export default DisplayComponets;
