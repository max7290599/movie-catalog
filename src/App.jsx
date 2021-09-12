import React, {Suspense} from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import ErrorSearch from './components/error-search/error-search';
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
      <Suspense fallback={<div>Loading...</div>}>
        {dataMovie === undefined ? <ErrorSearch searchMovie={searchMovie}/> : 
          <Main 
            setDataMovie={setDataMovie}
            setSearchTotalResults={setSearchTotalResults}
            dataMovie={dataMovie}
            searchMovie={searchMovie}
            searchTotalResults={searchTotalResults}
          />
        }
      </Suspense>
    </div>
  );
}

export default App;
