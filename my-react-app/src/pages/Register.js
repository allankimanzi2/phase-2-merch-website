import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // You can add registration logic here
    // For simplicity, let's assume the registration is successful if both username and password are non-empty
    if (username && password) {
      onRegister(username);
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  return (
    <div className='container text-center'>
      <h2>Register</h2>
      <label className='m-2'>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label className='m-2'>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button className='btn btn-success' onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;