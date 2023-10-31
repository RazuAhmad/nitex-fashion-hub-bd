import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CustomCarousel from './components/carousel/Carousel'
import SummerCollection from './components/SummerCollection/SummerCollection'
import OurServices from './components/OurServices/OurServices'
import Testimonials from './components/Testimonials/Testimonials'


const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <CustomCarousel/>
    <SummerCollection/>
    <OurServices/>
    <Testimonials/>
    </div>
  )
}

export default App