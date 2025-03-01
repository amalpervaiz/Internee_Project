import React from 'react'
import './Hero.css'
import hero_2 from '../../assets/hero_2.jpg'
import hero_3 from '../../assets/hero_3.png'
import hero_4 from '../../assets/hero_4.jpg'
import hero_5 from '../../assets/hero_5.jpg'
const Hero = () => {
  return (
    <div className='Hero '>
        <div className='hero_left'>
        <h1 id='hero_1'>Looking for dream internship?</h1>
       <span className='hero2'>
       <h1 class="typing-effect">Gain Hands On Experience</h1>
       </span>
        <p >Internee.pk kickstart student's tech careers 
        with first internships, providing industry 
        exposure, practical skills, and networking 
        opportunities, paving the way for their 
        success in the tech industry.</p>
        <div className="hero_images">
            <img className='heroImg' src={hero_2} alt="hero_2" />
            <img className='heroImg'  src={hero_3} alt="hero_2" />
            <img className='heroImg'  src={hero_4} alt="hero_2" />
            <img className='heroImg'  src={hero_5} alt="hero_2" />
        </div>

        <div className='hero_btn'>
        <div className='left_btn'>
           <button className='btn white_btn btn1'>Job Portal</button>
           <p className='para'>Get latest Job Updates</p>
        </div>
        <div className='right_btn '>
           <button className='btn btn2'>Our LMS</button>
           <p className='para'>90% Courses are in Urdu</p>
        </div>
        </div>

     </div>



        <div className='hero_right'>
            <img className='hero_img' src="https://www.internee.pk/LMS%20video.gif" alt="" />
        </div>
    </div>
  )
}

export default Hero
