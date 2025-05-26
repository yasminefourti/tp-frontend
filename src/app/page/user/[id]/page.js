import axios from "axios";
 async function user() {
    const res = await axios.get("http://localhost:3000/api/user/2020");
    const data = res.data.data


    console.log (data);




  return (
    <div>
        <h1>{data.nom}</h1>
        <p>{data.email}</p>

    </div>
  )
}

export default user
