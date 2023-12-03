import React from 'react';
import './common-container.css'; // Updated the import statement

const ContactContainer = ({ contactInfo }) => {
  return (
    <div className="contact-container common-container"> {/* Added common-container class */}
      <h2>Contact</h2>
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
      <p>Location: {contactInfo.location}</p>
    </div>
  );
};

export default ContactContainer;
