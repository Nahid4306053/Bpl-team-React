import React, { useEffect, useState } from 'react'
import PlayerCard from './playerCard'
import useLoadPlayers from '../hooks/useLoadPlayers'

export default function Players({slectetPlayerlistUpdate}) {
  const {players} = useLoadPlayers();
  const [selectedPlayers , setselectedPlayers] = useState([]);
  const handelSelectedPlayerList = (id) =>{
   const findplayer = selectedPlayers.findIndex((ele)=> ele === id);
   if(findplayer > -1){
    const olddata = [...selectedPlayers];
    olddata.splice(findplayer,1);
      setselectedPlayers(olddata); 
   }

   else{
    setselectedPlayers([...selectedPlayers , id])
   }

  }
  useEffect(()=>{
    slectetPlayerlistUpdate(selectedPlayers);
  },[selectedPlayers]);

  return (
    <>
    <div className="grid grid-cols-1 custom-scrollbar max-h-screen overflow-y-auto overflow-x-hidden justify-center lg:grid-cols-2 2xl:grid-cols-3 gap-10
    "> 
      {  players ? players.map((ele,index)=>{
         return <PlayerCard selectedPlayers={selectedPlayers} handelSelectedPlayerList={handelSelectedPlayerList} key={index} players={ele}/>
        }) : ""
      }
    </div>
    </>
  )
}
