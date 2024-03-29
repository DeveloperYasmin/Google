import React from 'react'
import HomeSearch from '@/components/HomeSearch'
import HomeHeader from '@/components/HomeHeader'

const page = () => {
  return (
    <div>
      <HomeHeader/>
      <div className='flex flex-col items-center mt-12'>
        <h1 className='text-6xl  font-extrabold font-serif p-5 bg-gradient-to-r bg-clip-text from-red-600 to-blue-700   animate-bounce text-transparent '>Google</h1>
        <HomeSearch/>
      </div>
    </div>
  )
}

export default page