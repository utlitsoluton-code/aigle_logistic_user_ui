import React from 'react'
import CustomNav from './components/Navbar/CustomNav'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Platform from "./components/Platform/Platform"
import LogoSlider from './components/LogoSlider/LogoSlider'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <CustomNav />
      <Hero />
      <Services />
      <Platform />
      <LogoSlider/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App

