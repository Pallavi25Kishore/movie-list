import React from 'react';

const ToggleButton = ({movie, handleToggle}) => {
var display;
if (movie.watched === 1) {
  display = "WATCHED";
} else {
  display = "TO WATCH";
}

  return (
   <button onClick={() => handleToggle(movie)}>{display}</button>
  );

};

export default ToggleButton;