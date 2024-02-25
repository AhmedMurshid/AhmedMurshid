import React from 'react';
import projectsData from '../files/Resume.json';

const backgroundColor1 = '#defe';

function Projects() {
  const projects = projectsData.Projects || [];

  return (
    <div style={{ display: 'flex' }}>
      <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} id={`project-${index}`} style={{ backgroungcolor: backgroundColor1, padding: '10px', marginBottom: '10px' }}>
        
          <h3 style={{ backgroundColor: '#f0f0f0', padding: '5px', borderRadius: '5px' }}>{project.title}</h3>
          <p>Language: {project.language}</p>
          <p><strong style={{ backgroundColor: '#f0f0f0', padding: '1px', borderRadius: '5px' }}>Description:</strong> <br/>{project.description}</p>
          {project.skills && project.skills.length > 0 && (
            <div>
              <h4>Skills:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} style={{ backgroundColor: '#f0f0f0', padding: '5px', borderRadius: '5px' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
      {project.link && (
        <p>
          Link: <a href={project.link} target="_blank" rel="noopener noreferrer">Project Repository</a>
        </p>
      )}
      {project.pdfLink && (
        <p>
          PDF: <a href={project.pdfLink} target="_blank" rel="noopener noreferrer">View OneDrive PDF</a>
        </p>
      )}
      <hr />
    </div>
  ))}
</div>


  </div>
  );
}

export default Projects;
