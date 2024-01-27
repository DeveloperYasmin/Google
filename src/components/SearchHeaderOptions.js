"use client"
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";




const SearchHeaderOptions = () => {
const pathname=usePathname()
const router=useRouter()
const searchParams=useSearchParams()
const searchTerm=searchParams.get("searchTerm")
const selectTab=(tab)=>{
  router.push(`/search/${tab === "Images"?"image":"web"}?searchTerm=${searchTerm}`)}

  return (
    <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-60 text-sm'>
      <div onClick={()=>selectTab("All")} className={` flex  items-center space-x-1 border-b-4 border-transparent active:text-purple-700 cursor-pointer pb-3 px-2 ${pathname=="/search/web" && "text-purple-700 border-purple-700"}`}>
      <IoIosSearch className='text-md'/>
      <p>All</p>
      </div>
      <div onClick={()=>selectTab("Images")} className={` flex  items-center space-x-1 border-b-4 border-transparent active:text-purple-700 cursor-pointer pb-3 px-2 ${pathname=="/search/image" && "text-purple-700 border-purple-700"}`}>
      <IoCameraOutline className='text-md' />

        <p>Images</p>
      </div>
      </div>
  )
}

export default SearchHeaderOptions