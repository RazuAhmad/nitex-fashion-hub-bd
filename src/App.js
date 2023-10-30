import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CustomCarousel from './components/carousel/Carousel'
import SummerCollection from './components/SummerCollection/SummerCollection'


const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <CustomCarousel/>
    <SummerCollection/>
    </div>
  )
}

export default App