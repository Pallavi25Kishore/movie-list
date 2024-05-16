import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
import Watched from './Watched.jsx';
import ToWatch from './ToWatch.jsx';

const App = () => {

  const [searchText, setSearchText] = React.useState('');
  const [movies, setMovies]= React.useState([]);

  return (
    <div>
      <nav className="header">MovieList</nav>
      <hr></hr>
      <AddMovies movies={movies} setMovies={setMovies}/>
      <Watched movies={movies}/>
      <ToWatch movies={movies}/>
      <Search searchText={searchText} onSearchTextChange={setSearchText} />
      <MovieList movies={movies} searchText={searchText} setMovies={setMovies}/>
    </div>
  );
};

export default App;