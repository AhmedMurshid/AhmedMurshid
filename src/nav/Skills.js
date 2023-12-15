import React from 'react';
import skillsData from '../files/Resume.json';

function Skills() {
  const { skills } = skillsData;

  return (
    <div>
      <h2>Skills</h2>
      <div>
        <h3>Software and Tools</h3>
        <ul>
          {skills["Software and Tools"].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Programming Languages</h3>
        <ul>
          {skills["Programming Languages"].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Database Management</h3>
        <ul>
          {skills["Database Management"].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
