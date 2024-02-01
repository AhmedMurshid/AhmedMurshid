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
      <table>
  <tr style={{margin: '3px'}}>
    <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}><strong>Name:</strong></td>
    <td>{name}</td>
  </tr>
  <tr style={{margin: '3px'}}>
    <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}><strong>Location:</strong></td>
    <td>{contact.location}</td>
  </tr>
  <tr style={{margin: '3px'}}>
    <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}><strong>Email:</strong></td>
    <td>{contact.email}</td>
  </tr>
  <tr style={{margin: '3px'}}>
    <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}><strong>Phone:</strong></td>
    <td>{contact.phone}</td>
  </tr>
  <tr style={{ margin: '3px' }}>
  <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom: '0px' }}><strong>LinkedIn:</strong></td>
  <td>
    <a href="https://www.linkedin.com/in/ahmed001a/" target="_blank" rel="noopener noreferrer">
      {contact.linkedin}
    </a>
  </td>
</tr>

  <tr style={{margin: '3px'}}>
    <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}><strong>Career Goal:</strong></td>
    <td>Contribute to innovative projects and collaborate with others for mutual growth.</td>
  </tr>
  <tr style={{margin: '3px'}}>
    <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}><strong>Availability:</strong></td>
    <td>Seeking internships and co-ops, available starting {when}.</td>
  </tr>
  <tr style={{margin: '3px'}}>
    <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}><strong>Education:</strong></td>
    <td>Bachelor of Arts in Computer Science from the J.B. Speed School of Engineering at the University of Louisville.</td>
  </tr>
  <tr style={{margin: '3px'}}>
    <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}><strong>Anticipated Graduation:</strong></td>
    <td>{education.anticipated_graduation}</td>
  </tr>
  <tr style={{margin: '3px'}}>
    <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}><strong>GPA:</strong></td>
    <td>{education.gpa}</td>
  </tr>
</table>


    </div>
  );
}

export default AboutMe;
