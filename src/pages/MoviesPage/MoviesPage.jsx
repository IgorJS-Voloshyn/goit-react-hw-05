import { useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovies } from "../../Api/Api";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { CiSearch } from "react-icons/ci";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState("");
  const location = useLocation();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (query === "") return;

    setInputText(query);
    const params = "search/movie";
    const queryParams = `query=${query}`;
    async function featch() {
      try {
        const { data } = await fetchMovies(params, queryParams);
        setMovies(data.results);

        if (data.results.length === 0) {
          return Notify.failure("Sorry, but nothing found");
        }
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const searchQuery = event.target.elements.input.value;

    setSearchParams({ query: searchQuery });
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          type="text"
          name="input"
          onChange={handleInputChange}
          value={inputText}
          placeholder="Search movies"
        />
        <button className={css.btn} type="submit">
          <CiSearch color="black" fontSize="40px" />
        </button>
      </form>
      <MovieList movies={movies} location={location} />
    </section>
  );
};

export default Movies;
