"use client"

import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from 'next/navigation';
 

const HomeSearch = () => {
    const router=useRouter()
    const [input,setinput]=useState("")
    const handlesubmit=(e)=>{
        e.preventDefault()
        if(!input.trim()) return
        router.push(`/search/web?searchTerm=${input}`)
       }
  return ( <>
   <form onSubmit={handlesubmit} className='flex sm:max-w-xl lg:max-w-xl focus-within:shadow-md w-full mt-5 mx-auto max-w-[90%] border rounded-full border-gray-200 px-5 py-3'>
    <IoIosSearch className='text-xl hover:shadow-md transition-shadow text-gray-800'/>
    <input className='flex-grow focus:outline-none bg-transparent' type="text" onChange={(e)=>setinput(e.target.value)} value={input}/>
    <FaMicrophone className='text-lg' />
   </form>
   <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8'>
    <button onClick={handlesubmit} className='btn'>Google Search</button>
    <button className='btn'>I'm Feeling Lucky</button>


   </div></>
  )
}

export default HomeSearch