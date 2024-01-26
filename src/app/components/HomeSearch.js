"use client"

import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from 'next/navigation';
 

const HomeSearch = () => {
    const router=useRouter()
    const [input,setinput]=useState("")
    const[randomsearchloading,setrandomsearchloading]=useState(false)
    const[googlesearchloading,setgooglesearchloading]=useState(false)

    const handlesubmit=(e)=>{
        e.preventDefault()
        setgooglesearchloading(true)
        if(!input.trim()) return
        router.push(`/search/web?searchTerm=${input}`)
       }
       const randomsearch=async()=>{
        setrandomsearchloading(true)
        const response=await fetch("https://random-word-api.herokuapp.com/word").then((res)=>res.json()).then((data)=>data[0])
      if(!response)    return
      router.push(`/search/web?searchTerm=${response}`)
      setrandomsearchloading(false)
    }
  return ( <>
   <form onSubmit={handlesubmit} className='flex sm:max-w-xl lg:max-w-xl focus-within:shadow-lg shadow-lg w-full mt-5 mx-auto max-w-[90%] border rounded-full border-gray-900 px-5 py-3'>
    <IoIosSearch className='text-xl hover:shadow-md transition-shadow text-gray-800'/>
    <input className='flex-grow pl-6 focus:outline-none bg-transparent' type="text" onChange={(e)=>setinput(e.target.value)} value={input}/>
    <FaMicrophone className='text-lg' />
   </form>
   <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8'>
    <button onClick={handlesubmit} disabled={googlesearchloading} className='btn flex items-center justify-center disabled:opacity-80'>
    {googlesearchloading?(<img src="spin.svg" alt="spin" className='h-6 text-center'/>):"Google Search"}
    </button>
    <button disabled={randomsearchloading} onClick={randomsearch} className='btn flex items-center justify-center disabled:opacity-80'>
      {randomsearchloading?(<img src="spin.svg" alt="spin" className='h-6 text-center'/>):"I'm Feeling Lucky"}
      </button>


   </div></>
  )
}

export default HomeSearch