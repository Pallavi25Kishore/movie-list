import React from 'react';
import ToggleButton from './ToggleButton.jsx';

const MovieInfo = ({movie, handleToggle}) => {
  return (
    <div className="movieinfo">
     <ul>
      <li>Year:</li>
      <li>Runtime: </li>
      <li>Metascore: </li>
      <li>imdbRating: </li>
      <li><ToggleButton movie={movie} handleToggle={handleToggle}/></li>
     </ul>
     <img/>
      </div>
  );
};

export default MovieInfo;


