//http://localhost:3000/api/popular
//app/api/popular/route.js
import axios from 'axios';

export async function GET() {
  try {
    const res = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTBhMTJmZjIxODA5ZTc4N2Y1NDI5NWFiODViNDAyMiIsIm5iZiI6MTc0NzcyMjk1OC41MDEsInN1YiI6IjY4MmMyMmNlYWRmNTdjYTcwOWY1NjFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rWU9JwFvU_EatZ-mzqH7Hj7-kTd4IROr9hIENl6_CQ0' // Remplacez par votre token réel
      }
    });

    return new Response(JSON.stringify(res.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ error: 'Erreur lors de la récupération des données' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
