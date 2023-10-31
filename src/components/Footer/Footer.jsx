import { Icon } from '@iconify/react'
import { TextField } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#1F2937]'>
    <div className="max-w-[1250px] m-auto py-16 ">
        
        {/* Footer content starts from here */}
        <div className="flex flex-col md:flex-row gap-7 md:gap-0 items-center md:items-start justify-between border-b border-gray-400[#9CA3AF] mb-8 pb-8">
        
        {/* Customer Services */}
        <div className="flex flex-col  gap-4 text-[#D1D5DB]">
        <h2 className='text-[#E5E7EB] text-lg font-bold'>Customer Services</h2>
        <p className=''>Contact Us</p>
        <p>Shipping and Returns</p>
        <p>Privacy Policy</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        </div>

        {/* Company */}
        <div className="flex flex-col  gap-4 text-[#D1D5DB]">
        <h2 className='text-[#E5E7EB] text-lg font-bold'>Copyright Information</h2>
        <p >About</p>
        <p>Blog</p>
        <p>Career</p>
        <p>Contact</p>
        </div>

        {/* Legals */}
        <div className="flex flex-col gap-4 text-[#D1D5DB]">
        <h2 className='text-[#E5E7EB] text-lg font-bold'>Legal & Law Concern</h2>
        <p >How it works</p>
        <p>FAQ</p>
        <p>Privacy policy</p>
        <p>Terms & Conditions</p>
        </div>

        {/* Subscribe to our newsletter */}
        <div className="flex flex-col gap-4 text-[#D1D5DB]">
        <h2 className='text-[#E5E7EB] text-lg font-bold'>Subscribe to newsletter</h2>
        <p >Stay connected, join our newsletter</p>
        <TextField variant='outlined' label="Enter your email" sx={{backgroundColor:"#fff", color:'black',borderRadius:"7px"}} />
        <p>Terms & Conditions</p>
        </div>

        </div>

        {/* rights reserved and social icons::: */}
    <div className="flex items-center justify-between flex-col md:flex-row gap-3 md:gap-0 text-white">
        <p>©2023 Nitex.com. All rights reserved.</p>
        <div className="flex gap-6">
        <Icon  width={24} height={24} icon="ic:round-facebook" />
        <Icon  width={24} height={24} icon="ri:instagram-line" />
        <Icon  width={24} height={24} icon="ri:twitter-fill" />
        <Icon  width={24} height={24}icon="bi:youtube" />
        </div>
    </div>
    </div>

    </div>
  )
}

export default Footer