"use client"
//import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function Bonjour() {
    const [prenom, setPrenom]=useState("");
    

  return (
    <div>
        <h1>Enter un prenom</h1>
        <input onChange={(e)=>{console.log(e)}}  className='border-b-black border-4'></input>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4 " onClick={ direBonjour}>dire bonjour</button>
    </div>
  )
}
export default Bonjour