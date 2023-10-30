import { Button, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import nitexImg1 from '../../assets/nitex-wallpaper1.jpg'
import nitexImg2 from '../../assets/nitex-wallpaper-2.jpg'
import nitexImg3 from '../../assets/nitex-wallpaper-3.jpg'
import { useState } from 'react';

function CustomCarousel() {

  return (
   
    <Carousel className='max-w-[1234px] m-auto'>
    <Carousel.Item>
      <img
        className=" w-full h-[500px]"
        src={nitexImg1}
        alt="First slide"
      />
      <Carousel.Caption className='bg-slate-400 opacity-[0.9] '>
        <h3>Nitex: Where Fashion Meets Creativity</h3>
        <p>Unleash your inner fashionista with Nitex's creative designs and unique styles.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className=" w-full h-[500px]"
        src={nitexImg2}
        alt="Second slide"
      />
  
      <Carousel.Caption className='bg-slate-400 opacity-[0.9] '>
        <h3>Collaborate with Nitex: Redefining Style Together</h3>
        <p>Join our fashion journey, where we work together to set new trends and create timeless pieces</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className=" w-full h-[500px]"
        src={nitexImg3}
        alt="Third slide"
      />
  
      <Carousel.Caption className='bg-slate-400 opacity-[0.9] '>
        <h3>Protect Your Style, Elevate Your Fashion with Nitex</h3>
        <p>Trust us to safeguard your unique style while we elevate your fashion game to new heights.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default CustomCarousel;