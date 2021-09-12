import {DEFAULT_IMG} from '../../constants'
import './card-movie.css';

const CardMovie = ({movie}) => {
  const {Poster, Title, Year, imdbID, Type} = movie;

  return (
    <div className="card">
      <img className="card-img" src={Poster === "N/A" ? DEFAULT_IMG : Poster} alt={Title} />
      <div className="card-info">
        <h4>Title: {Title}</h4>
        <h4>Year: {Year}</h4>
        <h4>imdbID: {imdbID}</h4>
        <h4>Type: {Type}</h4>
      </div>
    </div>
  );
}

export default CardMovie;