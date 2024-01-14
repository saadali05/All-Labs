// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Login submitted:', { username, password });
  };

  const loginStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    width: '300px',
    margin: 'auto',
    marginTop: '100px',
  };

  const inputStyle = {
    margin: '10px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    width: '100%',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={loginStyle}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default Login;
