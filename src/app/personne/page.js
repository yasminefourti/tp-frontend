import axios from "axios" //Importation de la bibliothèque axios, qui sert à faire des requêtes HTTP facilement.

async function Personne() {
  const res = await axios.get("http://localhost:3000/api/test"); //On utilise axios.get pour faire une requête GET vers l’URL http://localhost:3000/api/test
  console.log(res.data);
  const txt = JSON.stringify(res.data); //  il faut transformer notre objet data en string avec JSON.stringify avant de le mettre dans le div 
  //Transforme l’objet JavaScript reçu (res.data) en chaîne de caractères JSON avec JSON.stringify
return (<div>{txt}</div>)

}

export default Personne