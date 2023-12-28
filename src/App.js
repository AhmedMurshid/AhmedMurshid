import React, { useState } from 'react';
import DisplayComponets from './DisplayScreen/DisplayComponets';
import './App.css';


import MyPDF from './files/my-resume.pdf';


function App() {
  const [displayAboutMe, setDisplayAboutMe] = useState(true);
  const [displayProjects, setDisplayProjects] = useState(false);
  const [displaySkills, setDisplaySkills] = useState(false);

    // Function to open PDF
    const handleOpenPDF = () => {
      window.open(MyPDF);
    };
  const toggleAboutMe = () => {
    setDisplayAboutMe(!displayAboutMe);
    setDisplayProjects(false);
    setDisplaySkills(false);
  };

  const toggleProjects = () => {
    setDisplayProjects(!displayProjects);
    setDisplayAboutMe(false);
    setDisplaySkills(false);
  };

  const toggleSkills = () => {
    setDisplaySkills(!displaySkills);
    setDisplayAboutMe(false);
    setDisplayProjects(false);
  };


  return (
    <div className="App">
      <div className='all-button nav'>
        <button onClick={toggleAboutMe} className='button-group'>Just Me</button>
        <button onClick={toggleProjects} className='button-group'>Projects</button>
        <button onClick={toggleSkills} className='button-group'>Skills</button>
      </div>
      <div className='resume-button'>
      <button onClick={handleOpenPDF} className='button-group'>Open PDF</button>
      </div>
      <DisplayComponets
        showAboutMe={displayAboutMe}
        showProjects={displayProjects}
        showSkills={displaySkills}
      />
    </div>
  );
}

export default App;
