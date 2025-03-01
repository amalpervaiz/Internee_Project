import React from 'react'
import './Blog.css'
import blog_1 from '../../assets/blog_1.jpeg'
import blog_2 from '../../assets/blog_2.jpeg'
import blog_3 from '../../assets/blog_3.jpeg'
import blog_4 from '../../assets/blog_4.jpg'
const Blog = () => {
  return (
    <div className='Blog'>
      <p className='blog_p'>Our Blog</p>
      <h2 className='blog_h'>Recent Blog</h2>

      <div className="main_div_blog ">
        
      <div className="sub_blog_div">
        <img className='sub_blog_img' src={blog_1} alt="" />
        <h2 className='sub_blog_h'>Complete all of the task but didn't get certification yet? 😓🤦‍♀️</h2>
        <p className='sub_blog_p'>Drop us a quick email at issues@internee.pk with the subject Didn&apos;t get certification yet. Our team will swiftly resolve the matter, ensuring you get your recognition promptly.</p>
      </div>
      <div className="sub_blog_div">
        <img className='sub_blog_img' src={blog_2} alt="" />
        <h2 className='sub_blog_h'>Looking to make a meaningful impact in the community?🌟🎉</h2>
        <p className='sub_blog_p'>Our goal is to make Pakistan as an IT Hub. For this, we need more hands-on developers and tech enthusiast who will lift the Pakistan's IT export into the top👨‍💻. Your guidance and help may create a significant impact on some one's career. 🚀</p>
      </div>
      <div className="sub_blog_div">
        <img className='sub_blog_img' src={blog_3} alt="" />
        <h2 className='sub_blog_h'>🚀Calling communities to Empower Students with Internee.pk!✌</h2>
        <p className='sub_blog_p'>We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially with students.</p>
      </div>
      <div className="sub_blog_div">
        <img className='sub_blog_img' src={blog_4} alt="" />
        <h2 className='sub_blog_h'>Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟</h2>
        <p className='sub_blog_p'>To complete the process, send us all the task details via email at careers@internee.pk. This ensures that we have all the necessary information to validate your certification.</p>
      </div>
      </div>
      

    </div>
  )
}

export default Blog
