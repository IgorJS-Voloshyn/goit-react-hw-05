import { useEffect, useState } from "react";
import { fetchMovies } from "../../Api/Api";
import { useLocation } from "react-router-dom";
import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";

const params = "trending/movie/day";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function featch() {
      try {
        const { data } = await fetchMovies(params);
        setTrendingMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    featch();
  }, []);

  return (
    <>
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={trendingMovies} location={location} />
    </>
  );
};

export default Home;
