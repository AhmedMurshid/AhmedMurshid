import React from 'react';
import projectsData from '../files/Resume.json';

function Projects() {
  const projects = projectsData.Projects || [];

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>Language: {project.language}</p>
          <p>Description: {project.description}</p>
          {project.link && (
            <p>
              Link: <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
            </p>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Projects;
