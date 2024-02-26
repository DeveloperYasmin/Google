"use client"

import React, { useEffect } from 'react'

const Error = ({error,reset}) => {
    useEffect(()=>{
        console.log("Error:",error)
    },[error])
  return (
    <div className='flex flex-col justify-center items-center pt-10 '>
        <h1 className='text-3xl mb-4 '>OOPS!! Something went wrong :(</h1>
        <button className='bg-stone-700 text-white rounded-xl p-2 m-2' onClick={()=>reset()}>Try again</button>
    </div>
  )
}

export default Error