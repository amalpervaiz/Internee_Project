import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import { Link } from 'react-scroll'
const Navbar = () => {
  const [sticky, setsticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY> 50 ? setsticky(true) : setsticky(false);
    })
  },[]);
  const [mobile_menu, setmobile_menu] = useState(false);
  const toggleMenu = ()=>{
    mobile_menu ? setmobile_menu(false) : setmobile_menu(true);
  }
  return (
    <nav className={` ${sticky ? 'dark_nav' : ''}`}>
        <img src={logo} alt="" className='navlogo ' />
        <ul className={mobile_menu? '':'hide-mobile-menu'}>
            <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='skill' smooth={true} offset={-160} duration={500}>Internship</Link></li>
            <li><Link to='Blog' smooth={true} offset={-90} duration={500}>Graduate Program</Link></li>
            <li><Link to='SayStd' smooth={true} offset={-20} duration={500}>Company Collaboration</Link></li>
            <li><Link to='Footer' smooth={true} offset={-260} duration={500}>Contact</Link></li>
            <Link to='job' smooth={true} offset={-100} duration={500}><button className='btn'>Job Portal</button></Link>
            <button className='btn white_btn'>internee's login</button>
        </ul>
        <img className='menu_icon' src={menu} alt="" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
