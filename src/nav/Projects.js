import React from 'react';
import projectsData from '../files/Resume.json';

function Projects() {
  const projects = projectsData.Projects || [];

  return (
    <div style={{ display: 'flex' }}>
      {/* Fixed sidebar for quick navigation */}
      {/* <div className="qnav" style={{ position: 'fixed', top: 100, left: 0, width: '200px', height: '100vh', overflowY: 'auto' }}>
        <h3>Quick Navigation</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {projects.map((project, index) => (
            <li key={index}>
              <a href={`#project-${index}`}>{project.title}</a>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Main content - adjusted to not overlap with sidebar */}
      {/* <div style={{ marginLeft: '120px' }}> */}
      <div>
  <h2>Projects</h2>
  {projects.map((project, index) => (
    <div key={index} id={`project-${index}`}>
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
