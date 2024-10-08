// src/NavSwitch.js
import React from 'react';
import './App.css';

function NavigationButtons({
  toggleVisibility, // Correctly use the passed toggleVisibility function
  handleOpenPDF,
}) {
  return (
    <>
       
      <div className='all-button'>
        {/* <button className='button-group' onClick={() => toggleVisibility('aboutMe')}>Just Me</button> */}
        {/* <button className='button-group' onClick={() => toggleVisibility('projects')}>Projects</button>
        <button className='button-group' onClick={() => toggleVisibility('skills')}>Skills</button>
        <button className='button-group' onClick={() => toggleVisibility('courses')}>Courses</button>
        <button className='button-group' onClick={() => toggleVisibility('clubs')}>Clubs</button> */}
      </div>
      
      <button className='' onClick={handleOpenPDF}>Print Resume</button>
    </>
  );
}

export default NavigationButtons;
