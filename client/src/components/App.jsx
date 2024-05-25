import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FilteredMovies from './FilteredMovies.jsx';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
import Watched from './Watched.jsx';
import ToWatch from './ToWatch.jsx';

const App = () => {

  const [searchText, setSearchText] = useState('');
  const [movies, setMovies]= useState([]);
  const [watchStatusTab, setWatchStatusTab] = useState('');

  useEffect(() => {
    axios.get('/api/movies')
    .then((response) => {
      setMovies(response.data);
    })
    .catch((err) => {
      console.log(error);
    });
  }, []);


  var handleWatchedTab = function () {
    setWatchStatusTab('filterWatched');
  };

  var handleToWatchTab = function () {
    setWatchStatusTab('filterToWatch');
  };

  return (
    <div>
      <nav className="header">MovieList</nav>
      <hr></hr>
      <AddMovies movies={movies} setMovies={setMovies}/>
      <Watched handleWatchedTab={handleWatchedTab}/>
      <ToWatch handleToWatchTab={handleToWatchTab}/>
      <Search setSearchText={setSearchText} />
      <FilteredMovies movies={movies} searchText={searchText} setMovies={setMovies} watchStatusTab={watchStatusTab}/>
    </div>
  );
};

export default App;