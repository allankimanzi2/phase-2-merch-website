import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contacts() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    
    <div id="Contacts" className={isDarkMode ? 'dark-mode' : 'light-mode'} >
    <button type="button" onClick={toggleDarkMode} className="mode-toggle-btn btn btn-primary">
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
      
<section className="ftco-section">
<div className="container">
  <div className="row justify-content-center">
   <div className="col-md-12">
    <div className="wrapper">
      <div className="row no-gutters">
        <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
          <div className="contact-wrap w-100 p-md-5 p-4">
            <h3 className="mb-4">Get in touch</h3>
            <div id="form-message-warning" className="mb-4"></div>
            
            <form  className="contactForm" >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                <label className="label" for="name">Full Name</label>
                <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                <label className="label" for="email">Email Address</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                <label className="label" for="subject">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                </div>
              </div>
              <div className="col-md-12">
              <div className="form-group">
              <label className="label" for="#">Message</label>
              <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
              </div>
              </div>
              <div className="col-md-12">
              <div className="form-group">
              <input type="submit" value="Send Message" className="btn btn-primary"/>
              <div className="submitting"></div>
              </div>
              </div>
            </div>
            </form>
        </div>
      </div>
    <div className="col-lg-4 col-md-5 d-flex align-items-stretch text-white">
      <div className="info-wrap bg-primary w-100 p-md-5 p-4">
        <h3>Let's get in touch</h3>
        <p className="mb-4">We're open for any suggestion or just to have a chat</p>
        <div className="dbox w-100 d-flex align-items-start">
          <div className="icon d-flex align-items-center justify-content-center">
          <span className="fa fa-map-marker">&nbsp;&nbsp;</span>
          </div>
          <div className="text pl-3">
          <p><span>Address:</span> Central Business District, Nairobi NRB </p>
          </div>
        </div>
        <div className="dbox w-100 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
          <span className="fa fa-phone">&nbsp;&nbsp;</span>
          </div>
          <div className="text pl-3">
          <p><span>Phone:</span> + 254 718 074 885</p>
          </div>
        </div>
        <div className="dbox w-100 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
          <span className="fa fa-paper-plane">&nbsp;&nbsp;</span>
          </div>
          <div className="text pl-3">
          <p><span>Email:</span> rowlandswanderi@gmail.com</p>
          </div>
        </div>
        <div className="dbox w-100 d-flex align-items-center">
          <div className="icon d-flex align-items-center justify-content-center">
          <span className="fa fa-globe">&nbsp;&nbsp;</span>
          </div>
          <div className="text pl-3">
          <p><span>Website:</span> <Link className='text-white'to="/">bandwagon.com</Link></p>
        </div>
        </div>
      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



    </div>
  )
}
