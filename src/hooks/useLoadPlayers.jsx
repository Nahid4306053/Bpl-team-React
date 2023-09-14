import React, { useEffect, useState } from 'react'
export default function useLoadPlayers() {
  const [players , setPlayers] = useState([]);
  useEffect(()=>{
  const getPlayers = async () =>{
     try{
       const snapshort = await fetch('/datas.json');
       const getdata = await snapshort.json();
       setPlayers(getdata);

     }
     catch(err){
       console.log(err)
     }                  
  }
  getPlayers()
  },[])
  return {players 
};
}    
        