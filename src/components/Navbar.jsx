import React from 'react'
import logo from '/faviIvon.png'
export default function Navbar() {
  return (
   <header className='header bg-[#ffffff5a] py-sm '>
     <div className="container flex flex-col  text-center text-[#009432]">
       <div><img className='h-24 mx-auto' src={logo} alt="" /></div>             
       <h1 className='text-5xl font-bold '>Bangladesh Premier League</h1>
       <p className='text-2xl mt-3 font-bold'>This players are available for your team</p>             
     </div>
   </header>
  )
}
 