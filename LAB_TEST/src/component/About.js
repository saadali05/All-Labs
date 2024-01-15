// About.js
import React from 'react';

const About = () => {
  const aboutStyle = {
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
    <div style={aboutStyle}>
      <h2 style={headingStyle}>About Page</h2>
      <p style={paragraphStyle}>Learn more about us here.</p>
    </div>
  );
};

export default About;
