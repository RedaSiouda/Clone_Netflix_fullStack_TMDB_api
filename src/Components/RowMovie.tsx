import { useState, useEffect } from 'react';
import { fetchDataTopRated, fetchDataHorrorMovie, fetchDataAdventureMovie } from '../requests/TMDBRequest';
import '../CSS/RowMovie.css';

interface MovieState {
  topData: any; // Replace 'any' with the actual type of topData
  horrorData: any; // Replace 'any' with the actual type of horrorData
  adventureData: any; // Replace 'any' with the actual type of adventureData
}

function RowMovie() {
  const [movieData, setMovieData] = useState<MovieState | null>(null);

  useEffect(() => {
    const pullTheRequest = async () => {
      try {
        const topData = await fetchDataTopRated();
        const horrorData = await fetchDataHorrorMovie();
        const adventureData = await fetchDataAdventureMovie();
        setMovieData({ topData, horrorData, adventureData });
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    pullTheRequest();
  }, []); 

  return (
    <div className="RowMovie">
      {movieData && (
        <>
        <div className='RowMovie__row'>
          <h2 className='RowMovie__title'>Top Rated Movies</h2>
          <div className="RowMovie__movieList">
            {movieData.topData.results.map((movie: any) => (
              <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="RowMovie__img" />
            ))}
          </div>
        </div>

        <div className='RowMovie__row'>
          <h2 className='RowMovie__title'>Horror Movies</h2>
          <div className="RowMovie__movieList">
            {/* Render horrorData here */}
            {movieData.horrorData.results.map((movie: any) => (
              <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="RowMovie__img" />
            ))}
          </div>
        </div>

        <div className='RowMovie__row'>
          <h2 className='RowMovie__title'>Adventure Movies</h2>
          <div className="RowMovie__movieList">
            {/* Render adventureData here */}
            {movieData.adventureData.results.map((movie: any) => (
              <img key={movie.id} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="RowMovie__img" />
            ))}
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default RowMovie;
