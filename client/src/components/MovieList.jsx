import React from 'react';
import Movie from './Movie.jsx';

//MovieList component
const MovieList = ({filteredmovies, movies, searchText, setMovies}) => {
  if (searchText === '') { // to filter search
  return (
    <div className="movie-list">
      {
      filteredmovies.map((movie, index) => (<Movie movie={movie} setMovies={setMovies} movies={movies} key={index}/>))
      }
    </div>
  )
} else { //to filter search
var wordsArr = searchText.toLowerCase().split(' ');
var filteredArr = filteredmovies.filter((movie) => {
    var movieNameArr = movie.title.toLowerCase().split(' ');
    var counter = 0;
    for (var i = 0; i < wordsArr.length; i++) {
      if(wordsArr[i] === movieNameArr[i]) {
        counter++;
      }
    }
    if (counter === wordsArr.length) {
      return true;
    }
  });
if (filteredArr.length !== 0) {
  return (
  <div className="movie-list">
    {
    filteredArr.map((movie, index) => (<Movie movie={movie} setMovies={setMovies} movies={movies} key={index}/>))
    }
    </div>
  )
} else if (filteredArr.length === 0) {
  return (
  <div className="no-movies"> Sorry, there are no results available for this search!</div>
)}
}
  };

export default MovieList;
