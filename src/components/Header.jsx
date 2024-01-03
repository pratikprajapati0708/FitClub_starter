import React, { useState } from 'react'
import Logo from '../assets/AB.png'
import Bars from '../assets/bars.png'
import './Header.css'
import { Link } from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='Header'>
      <img src={Logo} alt="" className='logo' />
      {menuOpened === false && mobile === true ? 
      (<div style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}} onClick={()=> setMenuOpened(true)}>
        <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/>
      </div>) : (
        <ul className='header-menu'>
          <li><Link
          to='home' spy={true} smooth={true}
          onClick={()=>setMenuOpened(false)}
          activeClass='active'
          >Home</Link></li>
          <li><Link
          to='programs' spy={true} smooth={true}
          onClick={()=>setMenuOpened(false)}
          >Programs</Link></li>
          <li><Link
          to='programs' spy={true} smooth={true}
          onClick={()=>setMenuOpened(false)}
          >Why us</Link></li>
          <li><Link
          to='plans' spy={true} smooth={true}
          onClick={()=>setMenuOpened(false)}
          >Plans</Link></li>
          <li><Link
          to='testimonials' spy={true} smooth={true}
          onClick={()=>setMenuOpened(false)}
          >Testimonials</Link></li>
        </ul>
      )}

    </div>
  )
}

export default Header