// ContactContainer.js
import React from 'react';
import './contact-container.css';

const ContactContainer = ({ contactInfo }) => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
      <p>Location: {contactInfo.location}</p>
    </div>
  );
};

export default ContactContainer;
