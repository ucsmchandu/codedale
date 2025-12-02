import React from 'react'
import mainImage from '../../public/mainImage.png'
import {Link} from 'react-router-dom'
import {CircleArrowOutUpRight } from 'lucide-react'
const Navbar = () => {
  return (
    <div className=' flex bg-gray-50 flex-row justify-between items-center p-7 -mt-3 '>
      <Link to='/'>
        <img 
        className='h-5'
        src={mainImage} alt="codedale" />
      </Link>
      <div className='flex flex-row gap-3 text-sm px-2 font-medium bg-white shadow-md  rounded-4xl py-2'>
        <p className='hover:bg-gray-100 cursor-pointer rounded-4xl py-2 px-2'>Our Work</p>
        <p className='hover:bg-gray-100 cursor-pointer rounded-4xl py-2 px-2'>Achievements</p>
        <p className='hover:bg-gray-100 cursor-pointer rounded-4xl py-2 px-2'>FAQs</p>
        <p className='hover:bg-gray-100 cursor-pointer rounded-4xl py-2 px-2'>Contact</p>
      </div>
      <div className='flex flex-row justify-center items-center gap-1 bg-black text-white p-3 rounded-4xl px-2 text-sm'>
        <button className=' cursor-pointer'>Book a Call</button>
        <CircleArrowOutUpRight size={16} color='white'  />
      </div>
    </div>
  )
}

export default Navbar