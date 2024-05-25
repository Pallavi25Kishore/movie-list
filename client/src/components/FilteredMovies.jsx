import React from 'react';
import MovieList from './MovieList.jsx';

const FilteredMovies = ({movies, searchText, handleToggle, watchStatusTab}) => {
  var filteredArr;
  if(watchStatusTab === 'filterWatched') {
    filteredArr = movies.filter((item) => {
      if(item.watched === 1) {
        return true;
      }
    });
    return (
      <MovieList filteredmovies={filteredArr} searchText={searchText} handleToggle={handleToggle} />
    )
  } else if (watchStatusTab === 'filterToWatch') {
      filteredArr = movies.filter((item) => {
        if(item.watched === 0) {
          return true;
        }
      });
      return (
        <MovieList filteredmovies={filteredArr} searchText={searchText} handleToggle={handleToggle} />
      )

  } else {
    return (
      <MovieList filteredmovies={movies}  searchText={searchText} handleToggle={handleToggle} />
    )
  }
};

export default FilteredMovies;
