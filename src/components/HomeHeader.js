import Link from 'next/link'
import React from 'react'
import { CgMenuGridO } from "react-icons/cg";
const HomeHeader = () => {  
  return (
    <header className='font-serif flex justify-end p-5 text-sm'>
        <div className='flex space-x-4 items-center'>
            <Link className='hover:underline cursor-pointer' href="https://mail.google.com/">
            Gmail
            </Link>
            <Link className='hover:underline cursor-pointer' href="https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl">
            Images
            </Link>
            <CgMenuGridO className="bg-transparent cursor-pointer hover:bg-gray-200 rounded-full text-4xl p-2" />
            <button className='bg-gradient-to-r from-blue-600 to-red-400 transition-shadow text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md'>Sign In</button>

        </div>
    </header>
  )
}

export default HomeHeader
