import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CustomCarousel from './components/carousel/Carousel'
import SummerCollection from './components/SummerCollection/SummerCollection'
import OurServices from './components/OurServices/OurServices'
import Testimonials from './components/Testimonials/Testimonials'
import OverallStatistics from './components/OverallStatistics/OverallStatistics'
import Footer from './components/Footer/Footer'
import AboutUs from './components/AboutUs/AboutUs'


const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <CustomCarousel/>
    <SummerCollection/>
    <OurServices/>
    <Testimonials/>
    <AboutUs/>
    <OverallStatistics/>
    <Footer/>
    </div>
  )
}

export default App