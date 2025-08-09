// src/nav/Aboutme.js
import React from 'react';
import aboutMeData from '../files/Resume.json';
import ProfileImage from '../images/me.jpg';
import './Aboutme.css';   // or a dedicated AboutMe.css

function AboutMe() {
  const { name, contact, education } = aboutMeData;

  return (
    <div className="about-me-container">
      <h2 className="section-title">About Me</h2>
      <p className="about-me-text">
        I’m Ahmed Abdullahi, 24, a Computer Science student at the University of Louisville …
      </p>
      <div className="profile-wrapper">
        {/* <img
          src={ProfileImage}
          alt="Ahmed Abdullahi"
          className="profile-img"
        /> */}
      </div>
      <table className="info-table">
        <tbody>
          {[
            ['Name:', name],
            ['Location:', contact.location],
            ['Email:', contact.email],
            ['Phone:', contact.phone],
            ['LinkedIn:', <a href={contact.linkedin}>LinkedIn</a>],
            ['GitHub:', <a href={contact.github}>GitHub</a>],
            ['WayUp:', <a href={contact.wayup}>WayUp</a>],
            ['Education:', 'BSc in Computer Science …'],
            ['Graduation:', education.anticipated_graduation],
            ['GPA:', education.gpa],
          ].map(([label, val]) => (
            <tr key={label}>
              <td className="info-cell label-cell"><strong>{label}</strong></td>
              <td className="info-cell value-cell">{val}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AboutMe;
