import WebSearchResult from '@/components/WebSearchResult'
import Link from 'next/link'
import React, { Suspense } from 'react'

const WebSearchPage =async ({searchParams}) => {
  await new Promise((resolve)=>setTimeout(resolve,7000))
  const startIndex=searchParams.start || "1"
  const response=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}&start=${startIndex}`)
  if(!response.ok){
    throw new Error("Something went wrong")
  }
   const data= await response.json()
   const results=data.items;
   if(!results){
    return( <div className=' flex flex-col mt-60 justify-center items-center pt-10'>
      <h1 className='text-3xl mb-4'>No results found:(</h1>
      <p className='text-lg'>Try search something else or go back to {" "}
      <Link href="/" className="text-blue-500">homepage</Link>
      </p>
    </div>)
   }

  return <Suspense>
  {results && <WebSearchResult results={data}/>}
  </Suspense>;
}

export default WebSearchPage