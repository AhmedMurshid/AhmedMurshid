import React from 'react';
import aboutMeData from '../files/Resume.json';
import ProfileImage from '../images/me.jpeg'; 

function AboutMe() {
  const {
    name,
    contact,
    when,
    education,
     // Assuming you have an image field in your JSON
  } = aboutMeData;

  return (
    <div>
      <h2>About Me</h2>
      <div>
        <img src={ProfileImage} alt='' width="100" height="140" style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '500px' }}/>
      </div>
      <p>
        I am <strong>{name}</strong>, a computer science student currently located in <strong>{contact.location}</strong>. 
        You can reach me via email at <strong>{contact.email}</strong> or by phone at <strong>{contact.phone}</strong>. 
        You can also visit my website at "
        <a href={contact.website} target="_blank" rel="noopener noreferrer">{contact.website}</a>".
      </p>
      <p>
        My goal is to contribute to innovative projects 
        and collaborate with others for mutual growth.</p>
      <p>
        I am currently looking for <strong>internships and co-ops</strong>. I am available for opportunities starting in <strong>{when}.</strong>
      </p>
      <p>
        I am pursuing a Bachelor of Arts in Computer Science from the J.B. Speed School of 
        Engineering at the University of Louisville, with an anticipated graduation date in 
        <strong>{education.anticipated_graduation}</strong>. My GPA is <strong>{education.gpa}</strong>.
      </p> 
    </div>
  );
}

export default AboutMe;
