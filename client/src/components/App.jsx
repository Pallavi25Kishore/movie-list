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


  const handleWatchedTab = function () {
    setWatchStatusTab('filterWatched');
  };

  const handleToWatchTab = function () {
    setWatchStatusTab('filterToWatch');
  };

  const handleToggle = (movie) => {
    /*var newObj; // to create new object with updated watched
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
    setMovies(newArr);*/
    axios.patch(`/api/movies/watched/${movie.id}`)
    .then ((response) => {
      axios.get('/api/movies')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    })
  };

  const handleMovieNameClick = (movie) => {
    axios.patch(`/api/movies/info/${movie.id}`)
    .then ((response) => {
      axios.get('/api/movies')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    })
  };

  return (
    <div>
      <nav className="header">MovieList</nav>
      <hr></hr>
      <AddMovies movies={movies} setMovies={setMovies}/>
      <Watched handleWatchedTab={handleWatchedTab}/>
      <ToWatch handleToWatchTab={handleToWatchTab}/>
      <Search setSearchText={setSearchText} />
      <FilteredMovies movies={movies} searchText={searchText} handleToggle={handleToggle} watchStatusTab={watchStatusTab} handleMovieNameClick={handleMovieNameClick} />
    </div>
  );
};

export default App;