import React, { useState } from 'react';
import DisplayComponets from './DisplayScreen/DisplayComponets';

function App() {
  const [displayAboutMe, setDisplayAboutMe] = useState(false);
  const [displayProjects, setDisplayProjects] = useState(false); // State for the Projects component

  const toggleAboutMe = () => {
    setDisplayAboutMe(!displayAboutMe);
    setDisplayProjects(false); 
  };

  const toggleProjects = () => {
    setDisplayProjects(!displayProjects);
    setDisplayAboutMe(false); 
  };

  return (
    <div className="App"> 
      <button onClick={toggleAboutMe}>About Me</button>
      <button onClick={toggleProjects}>Projects</button>
      <DisplayComponets showAboutMe={displayAboutMe} showProjects={displayProjects} />
    </div>
  );
}

export default App;
