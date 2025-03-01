import React from 'react'
import './Owntask.css'
import own_task_imag_1 from '../../assets/own_task_imag_1.webp'
import own_task_imag_2 from '../../assets/own_task_imag_2.png'
import own_task_imag_3 from '../../assets/own_task_imag_3.png'
import own_task_imag_4 from '../../assets/own_task_imag_4.png'
import owntask from '../../assets/owntask.webp'

const Owntask = () => {
  return (
    <div className='maintask  Owntask'>
        <div className="ownleft">
            <img className='tast_img' src={owntask} alt="" />
        </div>
        <div className="ownright">
          <h2 className='own_task_h2'>Our own task portal</h2>
          <h1 className='own_task_h1'>Manage Project Via Own Task Portal</h1>
          <p className='own_task_p'>Welcome to internee.pk task portal. Where Tasks Transform Into Skills</p>
          <div className="sub_own_task">
          <div className="subtask">
            <img className='own_img' src={own_task_imag_1} alt="" />
            <p className='sub_task_p'><b>Hands on Projects</b> we believe in learning by doing. Dive into hands-on 
              projects that simulate real-world scenarios. From coding challenges to 
              creative projects, every task is crafted to impart practical skills 
              that resonate in professional environments.</p>
          </div>
          <div className="subtask">
          <img className='own_img' src={own_task_imag_2} alt="" />
            <p className='sub_task_p'><b>How to represent yourself</b> More than just completing tasks, It empowers you 
              to showcase your journey. Every completed task contributes to your digital 
              portfolio, a dynamic representation of your skills and accomplishments. 
              Let your work speak volumes about your capabilities.</p>
          </div>
          <div className="subtask">
          <img className='own_img' src={own_task_imag_3} alt="" />
            <p className='sub_task_p'><b>SDLC Techniques</b> Understanding the Software Development 
              Life Cycle (SDLC) is pivotal in the tech world. Acquire 
              skills that align with industry standards and boost your 
              project management proficiency.</p>
          </div>
          <div className="subtask">
          <img className='own_img' src={own_task_imag_4} alt="" />
            <p className='sub_task_p'><b>Easy to understand</b> Learning shouldn't be complicated. Our tasks are 
              designed to be easily comprehensible, ensuring a smooth learning 
              experience for everyone. Whether you're a seasoned professional 
              or a beginner.</p>
          </div>
          </div>
        </div>
    </div>

  )
}

export default Owntask
