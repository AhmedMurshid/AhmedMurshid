import React, { useState } from 'react';
import DisplayComponets from './DisplayScreen/DisplayComponets';
import './App.css'

function App() {
  const [displayAboutMe, setDisplayAboutMe] = useState(false);
  const [displayProjects, setDisplayProjects] = useState(false);
  const [displaySkills, setDisplaySkills] = useState(false); 

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
      <button onClick={toggleAboutMe} className='button-group'>About Me</button>
      <button onClick={toggleProjects} className='button-group'>Projects</button>
      <button onClick={toggleSkills} className='button-group'>Skills</button> 
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
