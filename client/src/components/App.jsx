import React from 'react';
import FilteredMovies from './FilteredMovies.jsx';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
import Watched from './Watched.jsx';
import ToWatch from './ToWatch.jsx';

const App = () => {

  const [searchText, setSearchText] = React.useState('');
  const [movies, setMovies]= React.useState([]);
  const [watchStatusTab, setWatchStatusTab] = React.useState('');

  return (
    <div>
      <nav className="header">MovieList</nav>
      <hr></hr>
      <AddMovies movies={movies} setMovies={setMovies}/>
      <Watched setWatchStatusTab={setWatchStatusTab}/>
      <ToWatch setWatchStatusTab={setWatchStatusTab}/>
      <Search searchText={searchText} onSearchTextChange={setSearchText} />
      <FilteredMovies movies={movies} searchText={searchText} setMovies={setMovies} watchStatusTab={watchStatusTab}/>
    </div>
  );
};

export default App;