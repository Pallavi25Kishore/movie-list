import React from 'react';

const ToggleButton = ({movie, handleToggle}) => {
/*var display;
if (movie.watched === 1) {
  display = "WATCHED";
} else {
  display = "TO WATCH";
}*/
  if (movie.watched) { // if movie has been watched - retaining the tick mark in checkbox
    return (
      <div>
        <label for="watched">Watched:</label>
        <input type="checkbox" name="watched" id="watched" onClick={() => handleToggle(movie)} checked></input>
      </div>
  );
  } else {
    return (
      <div>
        <label for="watched">Watched:</label>
        <input type="checkbox" name="watched" id="watched" onClick={() => handleToggle(movie)}></input>
      </div>
    );
  }
};

export default ToggleButton;