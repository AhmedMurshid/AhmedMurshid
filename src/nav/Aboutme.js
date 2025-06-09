import React from 'react';
import aboutMeData from '../files/Resume.json';
import ProfileImage from '../images/Ahmed.png'; 
//import SlideShowImage1 from '../images/IMG_2092.jpg';  // Example paths to your additional images
// import SlideShowImage2 from '../images/IMG_2290.jpg'; 
//import SlideShowImage3 from '../images/IMG_2298.jpg'; 

function AboutMe() {
  const {
    name,
    contact,
    education,
  } = aboutMeData;

  return (
    <div style={{ position: 'relative', margin: '0 auto', maxWidth: '900px', padding: '20px' }}>
      {/* Slideshow images on the left side */}
      {/* <div style={{ position: 'absolute', left: '-220px', top: '200px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ transform: 'rotate(10deg)' }}>
          <img src={SlideShowImage1} alt="Slide 1" width="310" height="350" style={{ borderRadius: '20px' }}/>
        </div>
        <div style={{ transform: 'rotate(5deg)' }}>
          <img src={SlideShowImage2} alt="Slide 2" width="240" height="300" style={{ borderRadius: '20px' }}/>
        </div>
      </div> */}

      {/* Slideshow images on the right side */}
      {/* <div style={{ position: 'absolute', right: '-300px', top: '180px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ transform: 'rotate(-10deg)' }}>
          <img src={SlideShowImage3} alt="Slide 3" width="310" height="350" style={{ borderRadius: '20px' }}/>
        </div>
  
      </div> */}

      {/* About Me Section */}
      <h2>About Me</h2>
      {/* New introduction paragraph */}
      <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '20px' }}>
      I'm Ahmed Abdullahi, 23, a Computer Science student at the University of Louisville with a passion for building—whether it's software, databases, 
      or AI-driven solutions. I'm eager to keep learning and growing through new opportunities.
      </p>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src={ProfileImage} 
          alt='' 
          width="150" 
          height="200" 
          style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '500px' }} 
        />
      </div>
      
      {/* Table with basic information */}
      <table>
        <tr style={{margin: '3px'}}>
          <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}>
            <strong>Name:</strong>
          </td>
          <td>{name}</td>
        </tr>
        <tr style={{margin: '3px'}}>
          <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}>
            <strong>Location:</strong>
          </td>
          <td>{contact.location}</td>
        </tr>
        <tr style={{margin: '3px'}}>
          <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}>
            <strong>Email:</strong>
          </td>
          <td>{contact.email}</td>
        </tr>
        <tr style={{margin: '3px'}}>
          <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}>
            <strong>Phone:</strong>
          </td>
          <td>{contact.phone}</td>
        </tr>
        <tr style={{ margin: '3px' }}>
          <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom: '0px' }}>
            <strong>LinkedIn:</strong>
          </td>
          <td>
            <a href="https://www.linkedin.com/in/ahmed-murshid/" target="_blank" rel="noopener noreferrer">
              {contact.linkedin}
            </a>
          </td>
        </tr>
        <tr style={{margin: '3px'}}>
          <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}>
            <strong>Education:</strong>
          </td>
          <td>Bachelor of Arts in Computer Science from the J.B. Speed School of Engineering at the University of Louisville.</td>
        </tr>
        <tr style={{margin: '3px'}}>
          <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}>
            <strong>Anticipated Graduation:</strong></td>
          <td>{education.anticipated_graduation}</td>
        </tr>
        <tr style={{margin: '3px'}}>
          <td style={{ backgroundColor: '#f0f0f0', padding: '3px', borderRadius: '5px', marginBottom:'0px' }}>
            <strong>GPA:</strong></td>
          <td>{education.gpa}</td>
        </tr>
      </table>
    </div>
  );
}

export default AboutMe;
