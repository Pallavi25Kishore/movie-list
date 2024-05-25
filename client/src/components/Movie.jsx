import React from 'react';
import ToggleButton from './ToggleButton.jsx';

const Movie = ({movie, handleToggle}) => {
  return (
    <div className="movie">
      {movie.title}
      <ToggleButton movie={movie} handleToggle={handleToggle}/>
      </div>
  );
};

export default Movie;

