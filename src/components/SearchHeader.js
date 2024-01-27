import Link from 'next/link'
import React from 'react'
import Searchbox from './Searchbox'
import { RiSettings3Line } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import SearchHeaderOptions from './SearchHeaderOptions';


const SearchHeader = () => {
  return (
   <header className='sticky top-0'>
    <div className='flex w-full p-6 items-center justify-between'>
      <Link href={"/"}>
      <h1 className='text-5xl font-extrabold text-black animate-pulse '>Google</h1>
      </Link>
      <div className='flex-1'>
        <Searchbox/>
        </div>
        <div className='hidden md:inline-flex space-x-2 '>
        <RiSettings3Line className='header-icon' />
        <CgMenuGridO className='header-icon' />
        </div>
        <button className='bg-gradient-to-r from-blue-600 to-red-400 transition-shadow text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ml-2'>Sign in
        </button>
    </div>
  <SearchHeaderOptions/>
   </header>
  )
}

export default SearchHeader