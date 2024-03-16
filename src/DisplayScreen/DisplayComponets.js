// DisplayComponents.js
import React from 'react';

import AboutMe from '../nav/Aboutme';
import Projects from '../nav/Projects';
import Skills from '../nav/Skills';
import Courses from '../nav/Courses';
import Clubs from '../nav/Clubs';
import NavigationButtons from '../NavSwitch'; // Ensure this component is adjusted to use toggleVisibility

import './Display.css';
import RandomShapes from './RandomShapes';

function DisplayComponents({
  showAboutMe,
  showProjects,
  showClubs,
  showSkills,
  showCourses,
  handleOpenPDF,
  toggleVisibility, // Passed from ParentComponent
}) {
  return (
    <div className='MainDiv'>
      <NavigationButtons toggleVisibility={toggleVisibility} handleOpenPDF={handleOpenPDF} />
      <h1>Ahmed M Abdullahi</h1>
      {showAboutMe && <AboutMe />}
      {showProjects && <Projects />}
      {showClubs && <Clubs />}
      {showSkills && <Skills />}
      {showCourses && <Courses />}
      <RandomShapes />
    </div>
  );
}

export default DisplayComponents;
