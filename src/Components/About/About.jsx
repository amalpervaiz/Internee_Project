import React from 'react'
import './About.css'
import About_logo from '../../assets/About_logo.webp'
const About = () => {
  return (
    <div className='about'>
      <img className='about_logo' src={About_logo} alt="" />
      <h1 className='about_1'>What is internee.pk?</h1>
      <p className='about_2'>The ultimate platform designed to turbocharge 
        the IT sector in Pakistan! We recognize the immense potential of 
        talented individuals in the country and aim to bridge the gap 
        between them and the thriving IT industry. Internee.pk offers a 
        comprehensive range of virtual internship opportunities exclusively 
        in the IT field.</p>
    </div>
  )
}

export default About
