// src/ParentComponent.js
import React, { useState } from 'react';
import DisplayComponents from './DisplayScreen/DisplayComponets'; // Adjust the import path as needed
import MyPDF from './files/Ahmed_Abdullahi_Resume_2025.pdf';

function ParentComponent() {
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showProjects, setShowProjects] = useState(false);
  const [showClubs, setShowClubs] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const handleOpenPDF = () => window.open(MyPDF); 

  const toggleVisibility = (section) => {
    setShowAboutMe(false);
    setShowProjects(false);
    setShowClubs(false);
    setShowSkills(false);
    setShowCourses(false);

    switch (section) {
      case 'aboutMe':
        setShowAboutMe(true);
        break;
      case 'projects':
        setShowProjects(true);
        break;
      case 'clubs':
        setShowClubs(true);
        break;
      case 'skills':
        setShowSkills(true);
        break;
      case 'courses':
        setShowCourses(true);
        break;
      default:
        // Optional: Handle default case
        break;
    }
  };

  return (
    <DisplayComponents
      showAboutMe={showAboutMe}
      showProjects={showProjects}
      showClubs={showClubs}
      showSkills={showSkills}
      showCourses={showCourses}
      handleOpenPDF={handleOpenPDF}
      toggleVisibility={toggleVisibility}
    />
    
  );
}

export default ParentComponent;
