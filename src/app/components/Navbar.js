// components/Navbar.js
"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [prenom, setPrenom] = useState("");

  return (
    <nav className="bg-amber-700 p-5">
      <div className="flex items-center justify-between w-full">
        {/* Gauche - FilmReco */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-white text-xl font-bold">FilmReco</Link>
        </div>

        {/* Centre - Barre de recherche */}
        <div className="flex-grow text-center">
          <input
            onChange={(e) => setPrenom(e.target.value)}
            value={prenom}
            type="text"
            placeholder="Recherche..."
            className="w-1/2 px-4 py-2 rounded border-2 border-black"
          />
        </div>

        {/* Droite - Top 10 */}
        <div className="flex-shrink-0">
          <Link href="/movies" className="text-white text-lg">Top 10</Link>
        </div>
      </div>
    </nav>
  );
}
