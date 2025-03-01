import React from 'react'
import './Footer.css'

import logo from '../../assets/logo.png'
import twiter from '../../assets/twiter.png'
import facebook from '../../assets/facebook.jpg'
import instagram from '../../assets/instagram.png'
const Footer = () => {
  return (
    <div className='Footer'>
     <div className="foot">

     <div className="sub_div_logo div1">
        <img className='logo' src={logo} alt="" />
        <p className='footer_p'> The ultimate platform designed to turbocharge the IT sector in Pakistan.</p>
        <p className='footer_mail'>info@internee.pk</p>
        <p className='footer_phone'>+92312-3023645</p>
        <p className='footer_location'><b>NIC Karachi, NED University</b></p>
        <div className="imagesfoot">
          <img className='footimg twiter' src={twiter} alt="" />
          <img className='footimg' src={facebook} alt="" />
          <img className='footimg' src={instagram} alt="" />
        </div>
      </div>
      <div className="sub_div_logo div2">
        <p>COMPANY</p>
        <div className="link">
        <p className='foot_p'>Contact us </p>
        <p className='foot_p'>internships</p>
        <p className='foot_p'>company</p>
        </div>
      </div>
      <div className="sub_div_logo div2">
      <p>HELP</p>
        {/* <link rel="stylesheet" href="Contact Us" />
        <link rel="stylesheet" href="Internships" />
        <link rel="stylesheet" href="Company" /> */}
        <div className="link">
        <p className='foot_p'>Job Portal </p>
        <p className='foot_p'>Task Portal</p>
        <p className='foot_p'>LMS</p>
        </div>
      </div>
      <div className="sub_div_logo div4">
       <p>SUBSCRIBE TO NEWSLETTER</p>
      <form className="footinput" >
       <input id='email' type="email"  placeholder='Enter your email'/>
       <button className='btn footbtn'>Subscribe</button>
      </form>
      </div>
      
     </div>

     <div className="bottom">
          <div className="bottomline"></div>
          <p className='bottom_p'>© Copyright 2025, All Rights Reserved by Techviochats</p>
       </div>
    </div>
  )
}

export default Footer
