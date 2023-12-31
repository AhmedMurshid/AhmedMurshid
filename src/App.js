import React, { useState } from 'react';
import DisplayComponets from './DisplayScreen/DisplayComponets';
import './App.css';
import MyPDF from './files/my-resume.pdf';

function App() {
  const [displayAboutMe, setDisplayAboutMe] = useState(true);
  const [displayProjects, setDisplayProjects] = useState(false);
  const [displaySkills, setDisplaySkills] = useState(false);
  const [displayCourses, setDisplayCourses] = useState(false); // New state for Courses

  const handleOpenPDF = () => {
    window.open(MyPDF);
  };

  const toggleAboutMe = () => {
    setDisplayAboutMe(!displayAboutMe);
    setDisplayProjects(false);
    setDisplaySkills(false);
    setDisplayCourses(false); // Reset Courses state
  };

  const toggleProjects = () => {
    setDisplayProjects(!displayProjects);
    setDisplayAboutMe(false);
    setDisplaySkills(false);
    setDisplayCourses(false); // Reset Courses state
  };

  const toggleSkills = () => {
    setDisplaySkills(!displaySkills);
    setDisplayAboutMe(false);
    setDisplayProjects(false);
    setDisplayCourses(false); // Reset Courses state
  };

  const toggleCourses = () => { // New function for toggling Courses
    setDisplayCourses(!displayCourses);
    setDisplayAboutMe(false);
    setDisplayProjects(false);
    setDisplaySkills(false);
  };

  return (
    <div className="App">
      <div className='all-button nav'>
        <button onClick={toggleAboutMe} className='button-group'>Just Me</button>
        <button onClick={toggleProjects} className='button-group'>Projects</button>
        <button onClick={toggleSkills} className='button-group'>Skills</button>
        <button onClick={toggleCourses} className='button-group'>Courses</button> {/* New Button for Courses */}
      </div>
      <div className='resume-button'>
        <button onClick={handleOpenPDF} className='button-group1'>Print Resume</button>
      </div>
      <DisplayComponets
        showAboutMe={displayAboutMe}
        showProjects={displayProjects}
        showSkills={displaySkills}
        showCourses={displayCourses} 
      />
    </div>
  );
}

export default App;
