import React from 'react'
import './Saystudent.css'
import star from '../../assets/star.jpg'
const Saystudent = () => {
  return (
    <div className='SayStd'>
      <div className="mainSay">

        <div className="Sayheading">
          <h1 className='Sayh'>What Students are saying about internee.pk</h1>
          <p className='Saypara'>Around 1500+ students have said how good internee.pk helped them in thier career 👨🏻‍🎓</p>
        </div>

        <div className="subSay">
            <div className="Say_div_1">
                <div className="saystar">
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                </div>
                <p className='say3'>"This platform helps students so boots thier career with hands-on practice with learning as well."</p>
                <div className="nameSaying">
                <p className='say1'>Rabia Zain</p>
                <p className='say2'>Lahore, Pakistan</p>
                </div>
            </div>
            <div className="Say_div_1">
                <div className="saystar">
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                </div>
                <p className='say3'>"This platform helps students so boots thier career with hands-on practice with learning as well."</p>
                <div className="nameSaying">
                <p className='say1'>Rabia Zain</p>
                <p className='say2'>Lahore, Pakistan</p>
                </div>
            </div>
            <div className="Say_div_1">
                <div className="saystar">
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                </div>
                <p className='say3'>"This platform helps students so boots thier career with hands-on practice with learning as well."</p>
                <div className="nameSaying">
                <p className='say1'>Rabia Zain</p>
                <p className='say2'>Lahore, Pakistan</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Saystudent
