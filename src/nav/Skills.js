import React from 'react';
import skillsData from '../files/Resume.json';

function Skills() {
  const { skills } = skillsData;

  return (
    <div>
       <div >
      <h2>💻 Most Used Languages</h2>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AhmedMurshid&layout=compact" alt="Top Languages" style={{ width: "50%", height: "auto" }} />
      </div>
      <h2>Skills</h2>
      <div>
        <h3>Software and Tools</h3>
        <ul>
          {skills["Software and Tools"].map((skill, index) => (
            <span key={index} style={{ backgroundColor: '#f0f0f0', padding: '1px', borderRadius: '5px', margin: '2px' }}>{skill} </span>
          ))}
        </ul>
      </div>
      <div>
        <h3>Programming Languages</h3>
        <ul >
          {skills["Programming Languages"].map((skill, index) => (
            <span key={index} style={{ backgroundColor: '#f0f0f0', padding: '1px', borderRadius: '5px', margin: '2px' }}>{skill} </span>
          ))}
        </ul>
      </div>
      <div>
        <h3>Database Management</h3>
        <ul>
          {skills["Database Management"].map((skill, index) => (
            <span key={index} style={{ backgroundColor: '#f0f0f0', padding: '1px', borderRadius: '5px',margin: '2px' }}>{skill} </span>
          ))}
        </ul>
      </div>
     
      
    </div>
  );
}

export default Skills;
