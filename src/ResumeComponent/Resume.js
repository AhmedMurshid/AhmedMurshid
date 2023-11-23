// Resume.js
import React from 'react';
import './Resume.css';

const Resume = ({ data }) => {
  // Destructure your resume data for easier access

  const {
    name,
    contact,
    objective,
    when,
    education,
    technical_skills,
    applied_experience,
    work_experience,
    activities_honors,
    programs_and_volunteer
  } = data;
  
  return (
    <div className="resume-content1 ">
      <h1>{name}</h1>
      <div className='contact-info'>
        <h2 className='h2-re'>Contact</h2>
        <p className='p-re'>Email: {contact.email}</p>
        <p className='p-re'>Phone: {contact.phone}</p>
        <p className='p-re'>Location: {contact.location}</p>
      </div>
      <div className='goal-education'>
        <h2 className='h2-re'>Education</h2>
        <p className='p-re'>{education.degree}</p>
        <p className='p-re'>{education.school}</p>
        <p className='p-re'>Anticipated Graduation: {education.anticipated_graduation}</p>
        <p className='p-re'>GPA: {education.gpa}</p>
        <h2 className='h2-re'>Objective</h2>
        <p className='p-re'>{objective}</p>
        <h2 className='h2-re'>When</h2>
        <p className='p-re'>{when}</p>
      </div>
    
      
      <div className='skills'>
        <h2 className='h2-re'>Technical Skills</h2>
        <ul className='ul-one'>
          {Object.entries(technical_skills).map(([category, skills]) => (
              <li key={category}>
              {category}
              <ul className='ul-one'>
                  {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                  ))}
              </ul>
              </li>
          ))}
        </ul>
      </div>
      <div className='projects-re'>
        <h2 className='h2-re'>Applied Experience</h2>
        {applied_experience.projects.map((project, index) => (
          <div className='div-re' key={index}>
            <h3>{project.language} Project</h3>
            <p className='p-re'>{project.description}</p>
          </div>
        ))}
      </div>
      <div className='work-exp'>
        <h2 className='h2-re'>Work Experience</h2>
        {work_experience.map((job, index) => (
          <div className='div-re' key={index}>
            <h3>{job.position} - {job.company}</h3>
            <p className='p-re'>{job.duration}</p>
            <p className='p-re'>{job.location}</p>
            {job.responsibilities && (
              <ul className='ul-one'>
                {job.responsibilities.map((responsibility, listIndex) => (
                  <li key={listIndex}>{responsibility}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className='acti'>   
        <h2 className='h2-re'>Activities & Honors</h2>
        <ul className='ul-one'>
          {activities_honors.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <ul className='ul-one'>
          {activities_honors.honors.map((honor, index) => (
            <li key={index}>{honor}</li>
          ))}
        </ul>
      </div>
      <div className='volun'>
        <h2 className='h2-re'>Programs & Volunteer Work</h2>
        <ul className='ul-one'>
          {programs_and_volunteer.map((program, index) => (
            <li key={index}>{program}</li>
          ))}
        </ul>
     
      </div>
      
    </div>
  );
};

export default Resume;
