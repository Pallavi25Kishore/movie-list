import React from 'react';

import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

const App = ({movies}) => {

  const [searchText, setSearchText] = React.useState('');

  return (
    <div>
      <nav className="header">MovieList</nav>
      <hr></hr>
      <Search searchText={searchText} onSearchTextChange={setSearchText} />
      <MovieList movies={movies} searchText={searchText}/>
    </div>
  );
};

export default App;