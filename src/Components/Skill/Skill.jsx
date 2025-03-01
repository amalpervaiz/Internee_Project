import React from 'react'
import './Skill.css'
import sub_div_1 from '../../assets/sub_div_1.webp'
import sub_div_2 from '../../assets/sub_div_2.jpg'
import sub_div_3 from '../../assets/sub_div_3.jpg'
import sub_div_4 from '../../assets/sub_div_4.webp'
import sub_div_5 from '../../assets/sub_div_5.jpg'
import sub_arrow from '../../assets/sub_arrow.png'
const Skill = () => {
  return (
    
      <div className="main_div " id='skill'>

        <div className="sub_div">
            <img className='sub_img' src={sub_div_1} alt="" />
            <h2 className='subH2'>Backend Development</h2>
            <div className='sub_btn'>
                <button className='btn skill_btn'>Apply Now</button>
            </div>
        </div>
        <div className="sub_div">
            <img className='sub_img'  src={sub_div_2} alt="" />
            <h2 className='subH2'>App Development Internship</h2>
            <div className='sub_btn'>
                <button className='btn skill_btn'>Apply Now</button>
            </div>
        </div>
        <div className="sub_div">
            <img className='sub_img'  src={sub_div_3} alt="" />
            <h2 className='subH2'>Graphic Design</h2>
            <div className='sub_btn'>
                <button className='btn skill_btn'>Apply Now</button>
            </div>
        </div>
        <div className="sub_div">
            <img className='sub_img'  src={sub_div_4} alt="" />
            <h2 className='subH2'>Chatbot Development</h2>
            <div className='sub_btn'>
                <button className='btn skill_btn'>Apply Now</button>
            </div>
        </div>
        <div className="sub_div">
            <img className='sub_img'  src={sub_div_5} alt="" />
            <h2 className='subH2'>Frontend Internship</h2>
            <div className='sub_btn'>
                <button className='btn skill_btn'>Apply Now</button>
            </div>
        </div>
        <div className='sub_btn_last'>
                <button className='btn skill_btn'>Browse More Internships <img className='arrow' src={sub_arrow} alt="" /> </button>
        </div>
      </div>
  )
}

export default Skill
