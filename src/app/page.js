import React from 'react'
import HomeHeader from './components/HomeHeader'
import HomeSearch from './components/HomeSearch'

const page = () => {
  return (
    <div className="bg-[url('https://img.freepik.com/premium-photo/city-building-silhouette-cityscape-background-against-pink-sky-evening-summer_50179-2188.jpg')] w-full h-full bg-no-repeat bg-left  bg-fixed bg-cover">
      <HomeHeader/>
      <div className='flex flex-col items-center mt-12'>
        <h1 className='text-8xl font-extrabold font-serif p-5 bg-gradient-to-r bg-clip-text from-red-600 to-blue-700   animate-bounce text-transparent '>Google</h1>
        <HomeSearch/>
      </div>
    </div>
  )
}

export default page