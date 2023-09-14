import React, { useEffect, useState } from 'react'
import useLoadPlayers from '../hooks/useLoadPlayers'

export default function HomeSidebar({selectedPlayerList}) {
   const {players} = useLoadPlayers();
   const [finalselectedPlyers , setFinalselectedplayers] = useState([]);  
   useEffect(()=>{
     const matchedPlayers = players.filter((ele)=> selectedPlayerList.findIndex((id)=> id === ele.id ) > -1)
     setFinalselectedplayers(matchedPlayers);  

   },[selectedPlayerList])
              
  return (
    <div className="selectedPlayerContainer mt-10 md:mt-0 lg:ml-10 p-sm rounded-lg bg-[#00000070] text-[#ffa253]">
       <div className="total text-center w-full flex flex-col justify-center">
         <div className='totalplayesr flex justify-center text-xl items-center font-bold '><i className="fa-solid fa-user mr-2"></i><p>Player Added: {selectedPlayerList.length}</p></div>           
         <div className='totalplayesr flex justify-center mt-2 text-xl items-center font-bold '><p>Total Cost: <i className="fa-sharp fa-solid fa-dollar-sign"></i>{finalselectedPlyers.length > -1 && finalselectedPlyers.reduce((a , b)=>{
           const salary = b.salary;         
           return a + salary;
         },0)}</p></div>            
       </div>
       <div className="selectedPlayerList  ">                                                                          {
           finalselectedPlyers.length > -1 &&  
           finalselectedPlyers.map((ele,index)=>{
                const { name  , image } = ele
              return   <div key={index} className="mt-5 rounded-lg overflow-hidden playertost flex bg-[#ffa253] text-black font-bold items-center justify-between">
              <img className='w-16 mr-2' src={image} alt="" />
              <p className='text-xl'>{name}</p> 
               <p className='bg-[green] p-[5px_8px]  rounded-full mr-2 text-[#fff]'><i className="fa-solid fa-check"></i></p>         
              </div>
           })
        }          
       </div>
    </div>
  )
}
