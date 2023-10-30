import React from 'react'


const CustomCart = ({imgSrc,category}) => {

   

  return (
    <div className='relative w-full md:max-w-[32%]'>
    <img src={imgSrc} width={440} height={762} alt='style1' className='rounded-xl m-auto'/>
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2  text-center bg-white opacity-60'>
        <h3 className='text-sm text-black font-bold'>SHOP NOW</h3>
        <h2 className=' text-amber-700 font-normal text-4xl'>{category}</h2>
    </div>
    </div>
  )
}

export default CustomCart