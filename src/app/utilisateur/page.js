import Image from "next/image";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">utilisateur </h1>
      <p>voici la liste des utilisateurs! </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4">
        Voir la liste</button>
      <a href="/utilisateur" className="text-blue-700 underline hover:text-blue-900">Accéder à la liste des utilisateurs</a>
      
         
    </div>
  );
}
