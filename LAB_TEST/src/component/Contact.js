import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formData;
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormError('Please fill out all fields');
      setFormSuccess('');
    } else {
      setFormSuccess('Your message has been sent');
      setFormError('');
    }
  };

  const contactStyle = {
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

  const formStyle = {
    textAlign: 'left', // Align form elements to the left
    margin: 'auto', // Center align the form
  };

  return (
    <div style={contactStyle}>
      <h2>Contact Us</h2>
      <div style={formStyle}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={handleChange}
            style={{ ...inputStyle, height: '150px' }}
          ></textarea>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
        {formError && <p style={{ color: 'red', marginTop: '10px' }}>{formError}</p>}
        {formSuccess && <p style={{ color: 'green', marginTop: '10px' }}>{formSuccess}</p>}
      </div>
    </div>
  );
};

export default Contact;
