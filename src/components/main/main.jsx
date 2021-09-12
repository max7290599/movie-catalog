import Pagination from '../pagination/pagination';
import CardMovie from '../card-movie/card-movie';
import {INTRO} from '../../constants';

const Main = ({
  setDataMovie,
  setSearchTotalResults, 
  dataMovie, 
  searchMovie, 
  searchTotalResults
}) => {

  return (
    <div>
    <div className="title-menu">
    {dataMovie.length ? `You searched for: ${searchMovie}, ${searchTotalResults} results found `: INTRO}
  </div>
  <div className="container-card">
    {dataMovie.length ? dataMovie.map((item, index)=> <CardMovie key={index.toString()} movie={item}/>) : ''}
  </div>
  {dataMovie.length ? <Pagination
    setDataMovie={setDataMovie}
    searchMovie={searchMovie}
    setSearchTotalResults={setSearchTotalResults} 
    searchTotalResults={searchTotalResults}
  /> : '' }
  </div>
  );
}

export default Main;