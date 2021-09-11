
import './header.css';

const Header = () => {
const searchHandle = (e) => {
  console.log(e.target.value);
}

  return (
    <div className="header">
      <h2>Movie Catalog</h2>
      <input type="text" className="search-input" onChange={searchHandle} placeholder="Search..."/>
      <div className="container-avatar">

      <h6>Atroschenko Maxim</h6>
      </div>
    </div>
  );
}

export default Header;