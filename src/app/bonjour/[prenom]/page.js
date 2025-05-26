import React from 'react'

async function Bonjour({ params }) {
  const { prenom } = await params
  return (
    <div>
      <p>bonjour {prenom}</p>
     
    </div>
  )
}

export default Bonjour