import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import exampleMovies from './components/exampledata.js';

ReactDOM.render(<App movies={exampleMovies}/>, document.getElementById('app'));