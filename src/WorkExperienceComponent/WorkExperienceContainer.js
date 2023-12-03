import React from 'react';
import './common-container.css';

const WorkExperienceContainer = ({ workExperiences }) => {
  const limitedWorkExperiences = workExperiences.slice(0, 2); // Adjust 3 to your desired limit

  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>
      {limitedWorkExperiences.map((work, index) => (
        <div key={index} className="work-experience">
          <h3>{work.company}</h3>
          <p><strong>Position:</strong> {work.position}</p>
          <p><strong>Duration:</strong> {work.duration}</p>
          <p><strong>Location:</strong> {work.location}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceContainer;
