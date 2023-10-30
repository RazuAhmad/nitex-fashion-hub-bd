import React from 'react'
import style1 from '../../assets/style1.jpg'
import style2 from '../../assets/style2.jpg'
import style3 from '../../assets/style3.jpg'
import CustomCart from '../CustomCart/CustomCart'

const SummerCollection = () => {

    const allModelDetails=[
        {
            id:1,
            img:style1,
            category:"T-shirt"
        },

        {
            id:2,
            img:style2,
            category:"Deshi Panjabi"
        },

        {
            id:3,
            img:style3,
            category:"Premium Shirt"
        }
    ]

  return (
    <div className='max-w-[1234px] m-auto pt-12 px-0 sm:px-2'>
        <h1 className='text-amber-600 font-bold text-5xl text-center mb-9'>Summer Collection</h1>
       
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        {
            allModelDetails.map((item)=><CustomCart key={item.id} imgSrc={item.img} category={item.category}/>)
        }
        {/* <CustomCart/>
        <CustomCart/> */}
        </div>
    </div>
  )
}

export default SummerCollection