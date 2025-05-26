// components/FeatureFilm.js
import Image from 'next/image';
export default function FeatureFilm() {
  const film = {
    title: "Inception",
    overview: "Un voleur qui s'empare des secrets les plus précieux grâce au rêve partagé doit accomplir l'impossible : l'inception.",
    release_date: "2010-07-16",
    vote_average: 8.8,
    poster_path: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎬 Film à la Une</h1>
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src={film.poster_path}
          alt={film.title}
          className="w-full md:w-1/3 object-cover"
        />
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{film.title}</h2>
            <p className="text-gray-700 mt-2">{film.overview}</p>
          </div>
          <div className="mt-4">
            <p><strong>Note :</strong> ⭐ {film.vote_average}</p>
            <p><strong>Date de sortie :</strong> {film.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
