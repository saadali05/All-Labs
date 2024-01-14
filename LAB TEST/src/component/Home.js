// Home.js
import React from 'react';

const Home = () => {
  const homeStyle = {
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
    <div style={homeStyle}>
      <h2 style={headingStyle}>Home Page</h2>
      <p style={paragraphStyle}>Welcome to the home page!</p>
    </div>
  );
};

export default Home;
