import React from 'react';

import WorkExperienceContainer from './WorkExperienceComponent/WorkExperienceContainer';
import ContactContainer from './ContactComponent/ContactContainer';
import LinksContainer from './LinksComponent/LinksContainer';
import ProjectContainer from './ProjectComponent/ProjectsContainer';
import Resume from './ResumeComponent/Resume'; 

import resumeData from './resume.json';
import './App.css';
import './base.css';
import ImageContainer from './ImagesComponent/ImageContainer';




const App = () => {


  const myLinks = [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/yourprofile' },
    { title: 'GitHub', url: 'https://github.com/yourusername' },
    // ... other links
  ];

  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }

  return (
    <div className="App">
    {/*  */}
    
    <button className="show-resume-button" onClick={toggleDarkMode} >Toggle Dark Mode</button>

    <div className='toprow'>
    <h1>Ahmed Abdullahi</h1>
      

      
      <div className="resume-content" style={{ display: 'none' }}>
        <Resume data={resumeData} />
      </div>
    </div>
    <div className='container'>
        <div className='Blocks3'>
            <ImageContainer
            imageUrl={require("./image1.png")}
            altText="A sample image"/>
        </div>
        <div className='group-of-blocks'>

        <div className="Blocks">
          <WorkExperienceContainer workExperiences={resumeData.work_experience} />
          
        </div>

        <div className="Blocks">
          <ProjectContainer workExperiences1={resumeData.work_experience1} /> 
        </div>

      
          <div className="Blocks">
              <ContactContainer contactInfo={resumeData.contact} />
          </div>
          <div className='Blocks'>
            <LinksContainer links={myLinks} />
          </div>
        
    
      </div>
      </div>
     
    </div>
  );
};

export default App;
