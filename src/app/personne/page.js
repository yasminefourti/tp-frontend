export const dynamic = 'force-dynamic';

import axios from "axios";

async function Personne() {
  try {
    const res = await axios.get("http://localhost:3000/api/test");
    const txt = JSON.stringify(res.data);
    return <div>{txt}</div>;
  } catch (error) {
    console.error("Erreur de chargement:", error);
    return <div>Erreur de chargement des données.</div>;
  }
}

export default Personne;
