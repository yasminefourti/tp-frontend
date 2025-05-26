//http://localhost:3000/movies
//app/movies/page.js
import Navbar from "../components/Navbar";
import FeatureFilm from "../components/FeaturedFilm";

export default async function FeaturesFilm() {
  const res = await fetch('http://localhost:3000/api/popular' );

  const data = await res.json();

  return (
    <div>
      <Navbar />
      
      <h1>Films Populaires</h1>
      <ul>
        {data.results?.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Note : {movie.vote_average}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '150px' }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
