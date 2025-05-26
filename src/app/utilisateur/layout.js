// /app/utilisateur/layout.js
import Link from 'next/link';
export default function UtilisateurLayout({ children }) {
  return (
    <div>
      <h1>Section Utilisateur</h1>
      <Link href="/">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4">Retour à l accueil</button>
      </Link>
      <body>{children}</body>
    </div>
  );

  
}
