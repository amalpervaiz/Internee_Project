import React from 'react'
import './Create.css'
import create_2 from '../../assets/create_2.png'
import create_3 from '../../assets/create_3.webp'
import create_4 from '../../assets/create_4.png'
import create_5 from '../../assets/create_5.jpg'
import create_1 from '../../assets/create_1.png'

const Create= () => {
  return (
      <div className='maincreate container'>
            <div className="createleft">
                <img className='create_img' src={create_1} alt="" />
            </div>
            <div className="createright">
              <h2 className='create_h2'>Are you Tech Instructor or Content Creator?</h2>
              <h1 className='create_h1'>Create Courses In Local Language & Generate Income</h1>
              <p className='create_p'>Are you a professional want to start your journey as a tech instructor and content creator to make some revenue? Just visit Our LMS Intructor Portal</p>
              <div className="sub_create">
              <div className="subcreate_div">
                <img className='sub_create_img' src={create_2} alt="" />
                <p className='sub_create_p'><b>Upload Tutorials & Excersice</b> Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners.</p>
              </div>
              <div className="subcreate_div">
              <img className='sub_create_img' src={create_3} alt="" />
                <p className='sub_create_p'><b>Generate Revenue</b> Teach what you love and earn what you deserve. Internee.pk LMS offers instructors the opportunity to generate revenue. Monetize your expertise, reach a global audience, and make a meaningful income from your passion.</p>
              </div>
              <div className="subcreate_div">
              <img className='sub_create_img' src={create_4} alt="" />
                <p className='sub_create_p'><b>Instructor Identity</b> Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in the world of online education.</p>
              </div>
              <div className="subcreate_div">
              <img className='sub_create_img' src={create_5} alt="" />
                <p className='sub_create_p'><b>Perfact Share Ratio </b>We believe in fair partnerships. we enjoy a perfect share ratio that ensures transparency and fairness. Your hard work deserves to be rewarded, and we make sure you get your share</p>
              </div>
              </div>
            </div>
            
        </div>
  )
}

export default Create
