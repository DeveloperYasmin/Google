"use client"
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { SiGooglelens } from "react-icons/si";
import { useSearchParams,useRouter } from 'next/navigation';

const Searchbox = () => {
  const searchParams=useSearchParams()
  const router=useRouter()
  const searchTerm=searchParams.get("searchTerm")
  const [term,setterm]=useState(searchTerm||"")
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(!term.trim()) return
    router.push(`/search/web?searchTerm=${term}`)
  }

  return (
    
    <form className='flex  border border-gray-200 rounded-full lg:w-[700px] w-60 shadow-lg px-6 py-3 lg:ml-10 ml-10 mr-5 flex-grow max-w-3xl items-center mt-5 lg:mt-0' onSubmit={handlesubmit}>
      <input type="text" value={term} onChange={(e)=>setterm(e.target.value)} className='w-full focus:outline-none bg-transparent '/>
      <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={()=>setterm("")}/>
      <FaMicrophone className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-5'/>
      <SiGooglelens  className='hidden sm:inline-flex text-2xl text-blue-500 cursor-pointer mr-5'/>
      <IoIosSearch className='text-3xl hidden sm:inline-flex text-blue-500 cursor-pointer ' onClick={handlesubmit}/>
      
    </form>
  )
}

export default Searchbox