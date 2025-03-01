import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Program from './Components/Program/Program';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Blog from './Components/Blog/Blog';
import Saystudent from './Components/Saystudent/Saystudent';
import Owntask from './Components/Owntask/Owntask';
import Guided from './Components/Guided/Guided';
import Create from './Components/Create/Create';
import Job from './Components/Job/Job';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Program/>
      <About/>
      <Skill/>
      <Blog/>
      <Saystudent/>
      <Owntask/>
      <Guided/>
      <Create/>
      <Job/>
      <Footer/>
    </div>
  )
}

export default App
