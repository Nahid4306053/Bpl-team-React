import React, { useState } from 'react'
import Players from '../components/Players'
import HomeSidebar from '../components/HomeSidebar'
export default function Home() {
  const [selectedPlayerList , setSelectedPlayerList] = useState([])
  const slectetPlayerlistUpdate = (datas)=>{
   setSelectedPlayerList(datas) 
  }
  return ( 
    <div className="container mt-10 ">
      <div className="grid   grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-7 2xl:col-span-8">
         <div className="content_part">
          <Players slectetPlayerlistUpdate={slectetPlayerlistUpdate}/>
          </div>       
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-5  2xl:col-span-4"> 
        <div className="sidebar">     
         <HomeSidebar  selectedPlayerList={selectedPlayerList}/>
         </div>     
        </div>
      </div>
    </div>
  )
}
