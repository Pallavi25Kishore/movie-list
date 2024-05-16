import React from 'react';

const ToggleButton = ({movie, setMovies, movies}) => {
var display;
if (movie.watched === true) {
  display = "WATCHED";
} else {
  display = "TO WATCH";
}

const handleToggle = (e) => {
  var newObj; // to create new object with updated watched
  if (movie.watched === false) {
    newObj = {title: movie.title, watched: true, id: movie.id};
    display = 'WATCHED';
  } else if (movie.watched === true) {
    newObj = {title: movie.title, watched: false, id: movie.id};
    display = 'TO WATCH';
  }
  var newArr = movies.map((item) => { // creating new array of new objects
    if (item.id !== movie.title) {
    return {...item}; // creating new objects with same properties
  } else if (item.id === movie.id) {
    return newObj; // creating new object with updated watched property
  }
  });
  setMovies(newArr);
};

  return (
   <button onClick={handleToggle}>{display}</button>
  );

};

export default ToggleButton;