
import axios from "axios";
export async function GET() {
    const res = await axios.get("https://randomuser.me/api");
    //console.log (res.data)

     const userData = res.data.results[0];
     console.log ("blabla", userData)

  const data = {
    "prenom":userData.name.first,
    "nom": userData.name.last,
    //"id": userData.id.value,
    "email": userData.email,
    "photo":userData.picture.medium

  };

  return Response.json ({data})
}