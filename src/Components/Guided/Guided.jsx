import React from 'react'
import './Guided.css'
import guid_2 from '../../assets/guid_2.png'
import guid_3 from '../../assets/guid_3.png'
import guid_4 from '../../assets/guid_4.png'
import guid_5 from '../../assets/guid_5.png'
import guid_1 from '../../assets/guid_1.png'
const Guided = () => {
  return (
    <div className='mainguid '>
           <div className="guidleft">
             <h2 className='guid_h2'>Our LMS</h2>
             <h1 className='guid_h1'>Guided Tutorials in Learning Management System</h1>
             <p className='guid_p'>Want to learn something but don't know what's the roadmap or 
                your english is not too good? That's why we launch LMS for you.</p>
             <div className="sub_guid_task">
             <div className="subguid">
               <img className='guid_img' src={guid_2} alt="" />
               <p className='sub_guid_p'><b>Sell Courses and Earn</b> Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise.</p>
             </div>
             <div className="subguid">
             <img className='guid_img' src={guid_3} alt="" />
               <p className='sub_guid_p'><b>Certification</b> Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape.</p>
             </div>
             <div className="subguid">
             <img className='guid_img' src={guid_4} alt="" />
               <p className='sub_guid_p'><b>Courses in Urdu </b>Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home.</p>
             </div>
             <div className="subguid">
             <img className='guid_img' src={guid_5} alt="" />
               <p className='sub_guid_p'><b>Practice Exercises</b> Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence.</p>
             </div>
             </div>
           </div>
           <div className="guidright">
               <img className='guid_right_img' src={guid_1} alt="" />
           </div>
       </div>
  )
}

export default Guided
