import './project-container.css';

import React from 'react';


const ProjectContainer = ({ workExperiences1 }) => {
  const limitedWorkExperiences = workExperiences1.slice(0, 3); // Adjust 3 to your desired limit

  return (
    <div className="project-container">
      <h2>Projects</h2>
      {limitedWorkExperiences.map((work, index) => (
        <div key={index} className="projects">
          <h3>{work.company}</h3>
          <p><strong>Type:</strong> {work.language} Project </p>
          <p><strong>description:</strong> {work.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectContainer;
