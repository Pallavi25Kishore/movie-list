import React from 'react';
import MovieInfo from './MovieInfo.jsx';

const Movie = ({movie, handleToggle, handleMovieNameClick}) => {

  if (movie.info === 0) {
    return (
      <div className="movie">
        <div onClick={() => handleMovieNameClick(movie)}>{movie.title}</div>
      </div>
    );
  }

  else {
    return (
    <div className="movie">
      <div onClick={() => handleMovieNameClick(movie)}>{movie.title}</div>
      <MovieInfo movie={movie} handleToggle={handleToggle}/>
      </div>
  );
};

}

export default Movie;

