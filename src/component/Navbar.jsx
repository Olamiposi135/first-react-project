import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] m-auto px-4'>
      <h1 className='font-bold text-3xl text-emerald-300 w-full'>OLAMIPO.</h1>
      <ul className='flex gap-4'>
        <li className='cursor-pointer'>
          Home
          </li>
        <li className='cursor-pointer'>
          Company
          </li>
        <li className='cursor-pointer'>
          Resources
          </li>
        <li className='cursor-pointer'>
          About
          </li>
        <li className='cursor-pointer'>
          Contact
          </li>
      </ul>
    </div>
  )
}

export default Navbar