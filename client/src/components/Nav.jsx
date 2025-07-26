import './style.css'
import './nav.css'
import image1 from "../assets/5.jpg";
import image2 from "../assets/NSS.png";
import { useState } from 'react';
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='Nav'>
        <div className="leftLogo">
          <img className='img1' src={image1} alt="" />
          <img className='img2' src={image2} alt="" />
        </div>
        
        {/* Hamburger Menu Button */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="Menu desktop-menu">
          <button><Link to="/home">Home</Link></button>
          <button><Link to="/about">About</Link></button>
          <button><Link to="/our-team">Our Team</Link></button>
          <button><Link to="/events">Events & Activities</Link></button>
          <button><Link to="/annual-camp">Annual Camp</Link></button>
          <button className="LogIn">
            <Link to="/login">Log In</Link>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={toggleMenu}><Link to="/home">Home</Link></button>
          <button onClick={toggleMenu}><Link to="/about">About</Link></button>
          <button onClick={toggleMenu}><Link to="/our-team">Our Team</Link></button>
          <button onClick={toggleMenu}><Link to="/events">Events & Activities</Link></button>
          <button onClick={toggleMenu}><Link to="/annual-camp">Annual Camp</Link></button>
          <button className="LogIn" onClick={toggleMenu}>
            <Link to="/login">Log In</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Nav