import getMovie from '../../utils/getMovie';
import './header.css';

const Header = ({setDataMovie, setSearchMovie, setSearchTotalResults}) => {
  const searchHandle = async (e) => {
      if(e.key === 'Enter'){
        const data = await getMovie(e.target.value);
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
        <img className="avatar-img" src="./avatar.png" alt="" />
        <h5>Atroschenko Maxim</h5>
        <img className="avatar-img" src="./arrow-down.png" alt="" />
      </div>
    </div>
  );
}

export default Header;