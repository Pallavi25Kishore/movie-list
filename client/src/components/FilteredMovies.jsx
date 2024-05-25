import React from 'react';
import MovieList from './MovieList.jsx';

const FilteredMovies = ({movies, searchText, handleToggle, watchStatusTab, handleMovieNameClick}) => {
  var filteredArr;
  if(watchStatusTab === 'filterWatched') {
    filteredArr = movies.filter((item) => {
      if(item.watched === 1) {
        return true;
      }
    });
    return (
      <MovieList filteredmovies={filteredArr} searchText={searchText} handleToggle={handleToggle} handleMovieNameClick={handleMovieNameClick} />
    )
  } else if (watchStatusTab === 'filterToWatch') {
      filteredArr = movies.filter((item) => {
        if(item.watched === 0) {
          return true;
        }
      });
      return (
        <MovieList filteredmovies={filteredArr} searchText={searchText} handleToggle={handleToggle} handleMovieNameClick={handleMovieNameClick} />
      )

  } else {
    return (
      <MovieList filteredmovies={movies}  searchText={searchText} handleToggle={handleToggle} handleMovieNameClick={handleMovieNameClick}/>
    )
  }
};

export default FilteredMovies;
