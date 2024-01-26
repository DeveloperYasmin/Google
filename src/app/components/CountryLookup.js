"use client"
import React, { useEffect, useState } from 'react'

const CountryLookup = () => {
  const [country,setcountry]=useState("United States")
  useEffect(()=>{
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`).then((res)=>res.json()).then((data)=>setcountry(data.country))},[])
  return (
    <div>{country}</div>
  )
}

export default CountryLookup