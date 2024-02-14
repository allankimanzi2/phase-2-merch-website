import React, { useState } from 'react';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add authentication logic here
    // For simplicity, let's assume the user is authenticated if both username and password are non-empty
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  return (
    <div className='container text-center'>
      <h2>Login</h2>
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
      <button className='btn btn-success'onClick={handleLogin}>Login</button>
     
    </div>
  );
};

export default Login;