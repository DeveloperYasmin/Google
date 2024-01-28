import Link from 'next/link'
import React from 'react'
import Searchbox from './Searchbox'
import { RiSettings3Line } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import SearchHeaderOptions from './SearchHeaderOptions';


const SearchHeader = () => {
  return (
    
   <header className=' fixed  overflow-hidden top-0  bg-white'>
    <div className=' lg:flex  w-full p-6 items-center justify-between'>
      <div className='flex'>
      <Link href={"/"}>
      <h1 className=' lg:text-5xl text-4xl font-extrabold text-black animate-pulse '>Google</h1>
      </Link>
      
      <button className='ml-20 sm:hidden inline-block lg:mt-0 bg-gradient-to-r from-blue-600 to-red-400 transition-shadow text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md'>Sign in
        </button></div>
      <div className=' flex-1'>
        <Searchbox/>
        </div>
        <div className='hidden md:inline-flex space-x-2 ml-40'>
        <RiSettings3Line className='header-icon' />
        <CgMenuGridO className='header-icon' />
        </div>
        <button className='hidden sm:inline-block ml-6  lg:mt-0 bg-gradient-to-r from-blue-600 to-red-400 transition-shadow text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md'>Sign in
        </button>
    </div>
  <SearchHeaderOptions/>
   </header>
  )
}

export default SearchHeader