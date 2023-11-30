import React from 'react'
import { useState } from 'react'

import Logo from "../../assets/logo.png"
import "./Navbar.css"

const Navbar = () => {

   const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'>

      <img className='logo' src={Logo} alt="logo" />

      <ul className='navbar-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Prevention</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="navbar-login">
        <a href="#">Log in/Sign Up</a>
        <div></div>
        <a href="#">Book Now</a>
      </div>

    <div className="navbar-smallscreen">

      <button style={{fontWeight:"bolder"}} onClick={ () => {setToggleMenu(true)}}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {
      toggleMenu &&  
        <div className="navbar-smallscreen_overlay flex__center">
        <p className='overlay__close' style={{ cursor:"pointer"}} onClick={() => {setToggleMenu(false)}}>X</p>

        <ul className='navbar-smallscreen-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Prevention</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      </div>
      
      }
      
    </div>

    </div>
  )
}

export default Navbar