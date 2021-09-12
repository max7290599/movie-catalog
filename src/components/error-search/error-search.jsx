import './error-search.css';

const ErrorSearch = ({searchMovie}) => {

  return (
    <div className="error">
      {`Your search: ${searchMovie} did not find anything`}
    </div>
  );
}

export default ErrorSearch;
