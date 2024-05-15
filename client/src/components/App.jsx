import React from 'react';
import exampleMovies from './exampledata.js';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

const App = (props) => {

  const [movieList, setMoviewList] = React.useState(exampleMovies);
  return (
    <div>
      <nav className="header">MovieList</nav>
      <hr></hr>
      <Search/>
      <MovieList movies={movieList}/>
    </div>
  );
};

export default App;