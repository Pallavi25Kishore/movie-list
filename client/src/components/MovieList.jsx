import React from 'react';
import Movie from './Movie.jsx';

//MovieList component
const MovieList = ({movies, searchText, setMovies}) => {
if (searchText === '') {
  return (
    <div className="movie-list">
      {
      movies.map((movie, index) => (<Movie movie={movie} setMovies={setMovies} movies={movies} key={index}/>))
      }
    </div>
  )
} else {
var wordsArr = searchText.toLowerCase().split(' ');
var filteredArr = movies.filter((movie) => {
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
  <div> Sorry, there are no results available for this search!</div>
)}
}
  };

export default MovieList;
