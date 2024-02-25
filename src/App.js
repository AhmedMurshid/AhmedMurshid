import React, { useState } from 'react';
import DisplayComponets from './DisplayScreen/DisplayComponets';
import './App.css';
import MyPDF from './files/my-resume.pdf';

function App() {
  const [displayAboutMe, setDisplayAboutMe] = useState(true);
  const [displayProjects, setDisplayProjects] = useState(false);
  const [displayClubs, setDisplayClubs] = useState(false);
  const [displaySkills, setDisplaySkills] = useState(false);
  const [displayCourses, setDisplayCourses] = useState(false); 

  const handleOpenPDF = () => {
    window.open(MyPDF);
  };

  const toggleAboutMe = () => {
    setDisplayAboutMe(!displayAboutMe);
    setDisplayProjects(false);
    setDisplaySkills(false);
    setDisplayCourses(false);
    setDisplayClubs(false);
  };

  const toggleProjects = () => {
    setDisplayProjects(!displayProjects);
    setDisplayAboutMe(false);
    setDisplaySkills(false);
    setDisplayCourses(false); 
    setDisplayClubs(false);
  };

  const toggleSkills = () => {
    setDisplaySkills(!displaySkills);
    setDisplayAboutMe(false);
    setDisplayProjects(false);
    setDisplayCourses(false);
    setDisplayClubs(false);
  };

  const toggleCourses = () => { // New function for toggling Courses
    setDisplayCourses(!displayCourses);
    setDisplayAboutMe(false);
    setDisplayProjects(false);
    setDisplaySkills(false);
    setDisplayClubs(false);
    
  };

const toggleClubs = () => { // New function for toggling Clubs  
  setDisplayClubs(!displayClubs);
  setDisplayAboutMe(false);
  setDisplayProjects(false);
  setDisplaySkills(false);
  setDisplayCourses(false);
};

  return (
    <div className="App">
      <div className='all-button nav'>
        <button onClick={toggleAboutMe} className='button-group'>Just Me</button>
        <button onClick={toggleProjects} className='button-group'>Projects</button>
        <button onClick={toggleClubs} className='button-group'>Clubs</button>
        <button onClick={toggleSkills} className='button-group'>Skills</button>
        <button onClick={toggleCourses} className='button-group'>Courses</button>
      </div>
      <div className='resume-button'>
        <button onClick={handleOpenPDF} className='button-group1'>Print Resume</button>
      </div>
      <DisplayComponets
        showAboutMe={displayAboutMe}
        showProjects={displayProjects}
        showSkills={displaySkills}
        showCourses={displayCourses} 
        showClubs={displayClubs}
      />
    </div>
  );
}

export default App;
