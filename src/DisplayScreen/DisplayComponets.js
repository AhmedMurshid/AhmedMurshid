import React from 'react';
import AboutMe from '../nav/Aboutme';
import Projects from '../nav/Projects'; // Import the new component

function DisplayComponets({ showAboutMe, showProjects }) {
  return (
    <div>
      <h1>Display Component</h1>
      <p>This is the Display Component content.</p>
      {showAboutMe && <AboutMe />}
      {showProjects && <Projects />} {/* Conditionally render the Projects component */}
    </div>
  );
}

export default DisplayComponets;
