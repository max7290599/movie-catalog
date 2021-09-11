
import getMovie from '../../utils/getMovie';
import './header.css';

const Header = ({setDataMovie, setSearchMovie, setSearchTotalResults}) => {
  const searchHandle = async (e) => {
      if(e.key === 'Enter'){
        const data = await getMovie(e.target.value, 2);
        setDataMovie(data.Search);
        setSearchMovie(e.target.value);
        setSearchTotalResults(data.totalResults);
    }
  }

  return (
    <div className="header">
      <h2>Movie Catalog</h2>
      <input type="text" className="search-input" onKeyPress={searchHandle} placeholder="Search..."/>
      <div className="container-avatar">
      <h6>Atroschenko Maxim</h6>
      </div>
    </div>
  );
}

export default Header;