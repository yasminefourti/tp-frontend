"use client";
import { useState } from "react";

function Bonjour() {
  const [prenom, setPrenom] = useState("");

  // ✅ Define the missing function
  const direBonjour = () => {
    alert(`Bonjour, ${prenom || "inconnu"} !`);
  };

  return (
    <div className="p-4">
      <h1>Entrez un prénom</h1>
      <input
        onChange={(e) => setPrenom(e.target.value)}
        className="border-b-black border-4 mb-2"
        placeholder="Votre prénom"
      />
      <br />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
        onClick={direBonjour}
      >
        Dire bonjour
      </button>
    </div>
  );
}

export default Bonjour;
