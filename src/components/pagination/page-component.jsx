import getMovie from "../../utils/getMovie";
import './pagination.css';

const PagePomponent = ({setDataMovie, searchMovie, setSearchTotalResults, numberPage}) => {

  const pageHandle = async (e) => {
    const dataMovie = await getMovie(searchMovie, Number(e.target.id));
    setDataMovie(dataMovie.Search);
    setSearchTotalResults(dataMovie.totalResults);
  };

  return (
    <button className="btn" id={numberPage} onClick={pageHandle}>
      {numberPage}
    </button>
  );
}

export default PagePomponent;