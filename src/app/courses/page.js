"use client";

import { useState } from 'react';

function Courses() {
  const [produit, setProduit] = useState("");
  const [liste, setListe] = useState([]);

  const ajouterProduit = () => {
    if (produit.trim() !== "") {
      setListe([...liste, produit]);
      setProduit("");
    }
  };

  return (
    <div>
      <h1>Créer la liste de courses</h1>
      <input
        className="border-2 border-black px-2 py-1 mr-2"
        value={produit}
        onChange={(e) => setProduit(e.target.value)}
        placeholder="Ajouter un produit"
      />
      <button
        onClick={ajouterProduit}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Ajouter un produit
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Accéder à la liste des produits
      </button>
    </div>
  );
}

export default Courses;
