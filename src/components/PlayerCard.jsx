import React from "react";
import '../styles/PlayerCrad.css'
export default function PlayerCard({selectedPlayers ,handelSelectedPlayerList,players}) {
  const {id , name ,age , image ,salary , country   } = players
  return (
  <div className="flex justify-center">
     <div className="card hover:shadow-2xl min-w-[300px] max-w-[450px]   shadow-">
      <figure className="px-10 pt-10 mt-8">
        <img     
          src={image}
          alt="Shoes"
          className="rounded-full h-48 w-48"
        />
      </figure>
      <div className="card-body ">
        <table className="text-[#145f58]  text-lg font-semibold">
          <tbody>
          <tr><td className="font-bold">Name</td><td>: {name.slice(0,15)}</td></tr>          
          <tr><td className="font-bold">Age</td><td>: {age}</td></tr>          
          <tr><td className="font-bold">Country</td><td>: {country}</td></tr> 
          <tr><td className="font-bold">Salary</td><td>: ${salary}</td></tr> 
            </tbody>          
        </table>
        <div className="card-actions flex justify-center">
          <button onClick={()=>handelSelectedPlayerList(id)} className="mt-5 btn text-lg text-neutral-50 border-none shadow-xl shadow-[#00000037]  bg-[#3498db] hover:bg-[#3498db]  capitalize">{selectedPlayers.findIndex((elid)=> elid === id ) > -1 ? <><i class="fa-solid fa-trash-can rounded-lg  bg-[#16669b] p-[5px+7px]"></i>Unselect this player</> : <><i className=" bg-[#16669b] p-[5px] fa-solid fa-check rounded-lg "></i>Select this player</>}</button>
        </div> 
      </div>
    </div> 
  </div>
  );
}
