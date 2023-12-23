import React from 'react'
import Logo from '../assets/AB.png'
import './Header.css'
const Header = () => {
  return (
    <div className='Header'>
        <img src={Logo} alt="" className='logo' />
        <ul className='header-menu'>
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header