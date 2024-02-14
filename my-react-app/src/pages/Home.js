import React, { useState } from 'react';
import Landingpage from '../components/Landingpage';
import Products from '../components/Products';
import Login from './Login'
import Register from './Register'
import metallica from '../images/Metallica-removebg-preview.png';
import slipknot from '../images/Daco_1823518.png';
import beatles from '../images/t_the-beatles9241-removebg-preview.png';
import misfits from '../images/Misfits-logo-9BD1B66D82-seeklogo.com.png';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleRegister = (username) => {
    // You can add registration logic here, e.g., send a request to your backend
    // For now, let's simulate a successful registration
    alert(`Registration successful! Welcome, ${username}!`);
    setUser(username);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
         <button type="button" onClick={toggleDarkMode} className="mode-toggle-btn btn btn-primary">
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <div>
        {user? (
          <div className = 'container text-center'>
          <h2 className='text-center '>Welcome, {user}!</h2>
          {/* Add your authenticated content here */}
          <Products />
        </div>
        ) : (
          <div>
          <Landingpage />
          <Login onLogin={handleLogin} />
          <Register onRegister={handleRegister} />
          {/* ... (rest of your components) */}
        </div>
        )}
      </div>
      <div id="popular-bands-container" className="container-fluid mt-5">
        <h3 className="text-center">POPULAR BANDS</h3>
        <div id="bands-images" className="container row">
          <div className="col-md-3">
            <a href="https://www.thebeatles.com/">
              <img width={250} src={beatles} alt="loading beatles logo" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="https://www.metallica.com/">
              <img width={250} src={metallica} alt="loading metallica logo" />
            </a>
          </div>
          <div className="col-md-3 mt-5">
            <a href="https://www.misfits.com/">
              <img width={250} src={misfits} alt="loading misfits logo" />
            </a>
          </div>
          <div className="col-md-3 mt-5">
            <a href="https://slipknot1.com/">
              <img width={250} src={slipknot} alt="loading slipknot logo" />
            </a>
          </div>
        </div>
      </div>
     
    </div>
  );
}
