import React from 'react';

import WorkExperienceContainer from './WorkExperienceComponent/WorkExperienceContainer';
import ContactContainer from './LinksComponent/ContactContainer';
import LinksContainer from './LinksComponent/LinksContainer';
import ProjectContainer from './WorkExperienceComponent/ProjectsContainer';
import Resume from './ResumeComponent/Resume'; 

import resumeData from './resume.json';
import './App.css';
import './base.css';
import './responsive.css'
import ImageContainer from './ImagesComponent/ImageContainer';

import Achievements from './Achievements';





const App = () => {
  const achievementsData = [
    ...resumeData.activities_honors.honors,
    // ...resumeData.activities_honors.hobbies,
  ];

  const myLinks = [
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmed001a/' },
    { title: 'GitHub', url: 'https://github.com/AhmedMurshid' },
    { title: 'My Site', url: 'https://ahmedmurshid.github.io/my-site/'},
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
    <h1>Ahmed M Abdullahi</h1>
      

      
      <div className="resume-content" style={{ display: 'none' }}>
        <Resume data={resumeData} />
      </div>
    </div>
    <div className='container'>
    <Achievements achievementsData={achievementsData} />

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

          <div className='Blocks'>
            <LinksContainer links={myLinks} />
          </div>

          <div className="Blocks">
            <ContactContainer contactInfo={resumeData.contact} />
          </div>
        </div>


      </div>
  
      
     
    </div>
  );
};

export default App;
