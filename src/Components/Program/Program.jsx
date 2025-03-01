import React from 'react'
import './Program.css'
import pro_img_1 from '../../assets/pro_img_1.png'
import pro_img_2 from '../../assets/pro_img_2.webp'
import pro_img_3 from '../../assets/pro_img_3.png'
import pro_img_4 from '../../assets/pro_img_4.png'
import pro_img_5 from '../../assets/pro_img_5.png'
import pro_img_6 from '../../assets/pro_img_6.png'
import pro_img_7 from '../../assets/pro_img_7.png'
const Program = () => {
  return (
    <div className='program'>
      <h1 className='pro_1'>Trusted by the tech giants</h1>
      <div className='pro_2'>
        <img className='pro_img' src={pro_img_1} alt="minitry" />
        <img className='pro_img' src={pro_img_2} alt="google" />
        <img className='pro_img' src={pro_img_3} alt="microsoft" />
        <img className='pro_img' src={pro_img_4} alt="ignite" />
        <img className='pro_img' src={pro_img_5} alt="zindigi" />
        <img className='pro_img' src={pro_img_6} alt="smit" />
        <img className='pro_img' src={pro_img_7} alt="pafla" />
      </div>
    </div>
  )
}

export default Program
