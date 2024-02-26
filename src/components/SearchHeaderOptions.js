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
      <div onClick={()=>selectTab("All")} className={` flex  items-center space-x-1  active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname=="/search/web" && "text-blue-500 border-b-2  border-blue-500"}`}>
      <IoIosSearch className='text-md'/>
      <p>All</p>
      </div>
      <div onClick={()=>selectTab("Images")} className={` flex  items-center space-x-1  active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname=="/search/image" && "text-blue-500 border-b-2 border-blue-500  "}`}>
      <IoCameraOutline className='text-md' />

        <p>Images</p>
      </div>
      </div>
  )
}

export default SearchHeaderOptions