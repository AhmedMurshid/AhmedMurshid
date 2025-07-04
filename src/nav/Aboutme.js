import React from 'react';
import aboutMeData from '../files/Resume.json';
import ProfileImage from '../images/me.jpg';

const cellStyle = {
  backgroundColor: '#f0f0f0',
  padding: '3px',
  borderRadius: '5px',
  marginBottom: '0px',
};

function AboutMe() {
  const {
    name,
    contact,
    education,
  } = aboutMeData;

  return (
    <div style={{ position: 'relative', margin: '0 auto', maxWidth: '900px', padding: '20px' }}>
      <h2>About Me</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
        I'm Ahmed Abdullahi, 24, a Computer Science student at the University of Louisville with a passion for building—whether it's software, databases, or AI-driven solutions. I'm eager to keep learning and growing through new opportunities.
      </p>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src={ProfileImage} 
          alt="Ahmed Abdullahi" 
          width="150" 
          height="200" 
          style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '500px' }} 
        />
      </div>

      <table>
        <tbody>
          <tr>
            <td style={cellStyle}><strong>Name:</strong></td>
            <td>{name}</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>Location:</strong></td>
            <td>{contact.location}</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>Email:</strong></td>
            <td>{contact.email}</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>Phone:</strong></td>
            <td>{contact.phone}</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>LinkedIn:</strong></td>
            <td>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                {contact.linkedin}
              </a>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>GitHub:</strong></td>
            <td>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                {contact.github}
              </a>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>WayUp:</strong></td>
            <td>
              <a href={contact.wayup} target="_blank" rel="noopener noreferrer">
                {contact.wayup}
              </a>
            </td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>Education:</strong></td>
            <td>Bachelor of Science in Computer Science from the J.B. Speed School of Engineering at the University of Louisville.</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>Anticipated Graduation:</strong></td>
            <td>{education.anticipated_graduation}</td>
          </tr>
          <tr>
            <td style={cellStyle}><strong>GPA:</strong></td>
            <td>{education.gpa}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutMe;
