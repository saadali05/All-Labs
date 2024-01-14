// Contact.js
import React from 'react';

const Contact = () => {
  const contactStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
  };

  const headingStyle = {
    color: '#333',
  };

  const paragraphStyle = {
    color: '#555',
  };

  return (
    <div style={contactStyle}>
      <h2 style={headingStyle}>Contact Page</h2>
      <p style={paragraphStyle}>Feel free to reach out to us!</p>
    </div>
  );
};

export default Contact;
