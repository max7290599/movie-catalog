import React from 'react';
import Header from './components/header/header';
import CardMovie from './components/card-movie/card-movie';
import {INTRO} from './constants';

import './App.css';


const App = () => {
  const [dataMovie, setDataMovie] = React.useState([]);
  const [searchMovie, setSearchMovie] = React.useState('');
  const [searchTotalResults, setSearchTotalResults] = React.useState(0);

  return (
    <div className="App">
      <Header 
        setDataMovie={setDataMovie}
        setSearchMovie={setSearchMovie}
        setSearchTotalResults={setSearchTotalResults}
      />
      <div className="title-menu">
        {dataMovie.length ? `You searched for: ${searchMovie}, ${searchTotalResults} results found `: INTRO}
      </div>
      <div className="container-card">
        {dataMovie.map((item)=> <CardMovie movie={item}/>)}
      </div>
      
    </div>
  );
}

export default App;
