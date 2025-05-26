import React from 'react'

function creer() {
  return (
    <div>
        <h1>creer un  utilisateur</h1>
        <p>creer des utilisateurs! </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4">
        sign in </button>
        <a href="/utilisateur/creer" className="text-blue-700 underline hover:text-blue-900">aller a la page de creation </a>
    </div>
  )
}

export default creer