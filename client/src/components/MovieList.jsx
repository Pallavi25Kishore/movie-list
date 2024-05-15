import React from 'react';
import Movie from './Movie.jsx';

//MovieList component
const MovieList = ({movies}) => {
  return (
    <div className="movie-list">
      {
      movies.map((movie) =>  (<Movie key={movie.title} movie={movie}/>))
      }
    </div>
  )
  };

export default MovieList;
