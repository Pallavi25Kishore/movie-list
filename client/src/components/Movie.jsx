import React from 'react';
import ToggleButton from './ToggleButton.jsx';

const Movie = ({movie, setMovies, movies}) => {
  return (
    <div className="movie">
      {movie.title}
      <ToggleButton movie={movie} setMovies={setMovies} movies={movies}/>
      </div>
  );
};

export default Movie;

