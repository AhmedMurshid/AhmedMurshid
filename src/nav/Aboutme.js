import React from 'react';
import aboutMeData from '../files/Resume.json';

function AboutMe() {
  const {
    name,
    contact,
    when,
    education,
  } = aboutMeData;

  return (
    <div>
      <h2>About Me</h2>
      <p>
        I am {name}, a computer science student currently located in {contact.location}. You can reach me via email at {contact.email} or by phone at {contact.phone}. You can also visit my website at <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a>.
      </p>
      <p>
        I am eager to apply my theoretical knowledge and strong technical skills in a dynamic tech role. My objective is to contribute to innovative projects and collaborate with experienced professionals for mutual growth. I am available for opportunities starting in {when}.
      </p>
      <p>
        I am pursuing a Bachelor of Arts in Computer Science from the J.B. Speed School of Engineering at the University of Louisville, with an anticipated graduation date in {education.anticipated_graduation}. My current GPA is {education.gpa}.
      </p>
    </div>
  );
}

export default AboutMe;
