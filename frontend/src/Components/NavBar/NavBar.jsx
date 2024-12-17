import React, { useState } from 'react'
import '../NavBar/NavBar.css'
import  {Link}  from "react-router-dom";
import Logo from "../../assets/Images/Logo.png";
function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='NavBar'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h2>
          DEEP <span className='net'>NET</span> <br />
          <span className='soft'>SOFT</span>
        </h2>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      <ul className={`nav-lists ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <Link
            to='/home'
            className={`navlink ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleClick(0)}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to='/menu'
            className={`navlink ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleClick(1)}
          >
            MENU
          </Link>
        </li>
        <li>
          <Link
            to='/reserve'
            className={`navlink ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleClick(2)}
          >
            MAKE A RESERVATION
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            className={`navlink ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleClick(3)}
          >
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar