// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const logoStyle = {
    width: '50px', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
    marginRight: '10px',
  };
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
