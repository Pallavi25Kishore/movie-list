import React from 'react';
import MovieList from './MovieList.jsx';

const FilteredMovies = ({movies, searchText, setMovies, watchStatusTab}) => {
  var filteredArr;
  if(watchStatusTab === 'filterWatched') {
    filteredArr = movies.filter((item) => {
      if(item.watched === true) {
        return true;
      }
    });
    console.log('hi', filteredArr);
    return (
      <MovieList filteredmovies={filteredArr} movies={movies} searchText={searchText} setMovies={setMovies} />
    )
  } else if (watchStatusTab === 'filterToWatch') {
      filteredArr = movies.filter((item) => {
        if(item.watched === false) {
          return true;
        }
      });
      console.log('bye', filteredArr);
      return (
        <MovieList filteredmovies={filteredArr} movies={movies} searchText={searchText} setMovies={setMovies} />
      )

  } else {
    return (
      <MovieList filteredmovies={movies} movies={movies} searchText={searchText} setMovies={setMovies} />
    )
  }
};

export default FilteredMovies;
