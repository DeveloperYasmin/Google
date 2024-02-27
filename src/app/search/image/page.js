import ImageSearchResults from '@/components/ImageSearchResults'
import {useSearchParams } from 'next/navigation'

import Link from 'next/link'
import React, { Suspense } from 'react'

const ImageSearchPage = async () => {

  const searchParams=useSearchParams()
  const searchTerm=searchParams.get("searchTerm")
  const startIndex=searchParams.get("start")||1
  
  await new Promise((resolve)=>setTimeout(resolve,7000))
  const response=await fetch(`https://www.googleapis.com/customsearch/v1?key=`)
  if(!response.ok){
    throw new Error("Something went wrong")
  }
   const data= await response.json()
   const results=data.items;
   if(!results){
    return( 
    <Suspense>
    <div className=' flex flex-col mt-60 justify-center items-center pt-10'><Link href={`${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}}&searchType=image&start=${startIndex}`}></Link>
      <h1 className='text-3xl mb-4'>No results found:(</h1>
      <p className='text-lg'>Try search something else or go back to {" "}
      <Link href="/" className="text-blue-500">homepage</Link>
      </p>
    </div>
    </Suspense>)
   
  }
  return <>
  {results && <ImageSearchResults results={data}/>}
  </>;
}

export default ImageSearchPage