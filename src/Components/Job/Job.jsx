import React from 'react'
import './Job.css'
import own_task_imag_3 from '../../assets/own_task_imag_3.png'
import own_task_imag_1 from '../../assets/own_task_imag_1.webp'
import own_task_imag_2 from '../../assets/own_task_imag_2.png'
import own_task_imag_4 from '../../assets/own_task_imag_4.png'
import job from '../../assets/job.png'
const Job = () => {
  return (
     <div className='mainjob  job'>
            <div className="jobleft">
              <h2 className='job_h2'>Already have a good skill but looking for job?</h2>
              <h1 className='job_h1'>Job Portal, Ultimate Place To Find The Best Job</h1>
              <p className='job_p'>Streamline the approval process with your customer to quickly close the deal, get the sale, and start production.</p>
              <div className="sub_job">
              <div className="subjob">
                <img className='job_sub_img' src={own_task_imag_3} alt="" />
                <p className='job_sub_p'><b>100% Mobile friendly</b> online art approvals</p>
              </div>
              <div className="subjob">
              <img className='job_sub_img' src={own_task_imag_1} alt="" />
                <p className='job_sub_p'><b>Speed up the design process</b> Everything is done online, from mockup to final design.</p>
              </div>
              <div className="subjob">
              <img className='job_sub_img' src={own_task_imag_2} alt="" />
                <p className='job_sub_p'><b>Communicate easier</b> Add multiple recipients to an Art Approval to reduce traditional email clutter.</p>
              </div>
              <div className="subjob">
              <img className='job_sub_img' src={own_task_imag_4} alt="" />
                <p className='job_sub_p'><b>Add changes faster</b> Students can add comments to approvals for changes, saving you both time on finalizing designs.</p>
              </div>
              </div>
            </div>
            <div className="jobright">
                <img className='job_img' src={job} alt="" />
            </div>
        </div>
    
  )
}

export default Job
