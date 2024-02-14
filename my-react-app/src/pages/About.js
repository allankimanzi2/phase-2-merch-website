import React,{useState} from 'react'

export default function About() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    
    <div id="About-us" className={isDarkMode ? 'dark-mode' : 'light-mode'} >
      <button type="button" onClick={toggleDarkMode} className="mode-toggle-btn btn btn-primary">
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <h3 className="text-center">ABOUT US</h3>
      <p className="text-center fs-5">
        Bandwagon is the ultimate music t-shirt store for any rock, heavy metal or punk fan! With officially licensed merchandise from all of the popular bands you know and love, our store offers rock music fans a way to show their passion through vibrant and stylish t-shirts. Whether you're into rock, heavy metal, alternative or punk rock, our selection of rock t-shirts has something perfect for everyone. Our lines of band merch and concert t-shirts come directly from the iconic bands themselves, so you can rest assured that every piece of gear at Bandwagon is 100% authentic. Come find the perfect band t-shirts and merch today at Bandwagon!
      </p>
    </div>
  )
}