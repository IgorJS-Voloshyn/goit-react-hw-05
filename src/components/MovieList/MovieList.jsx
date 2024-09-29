import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={css.item}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
