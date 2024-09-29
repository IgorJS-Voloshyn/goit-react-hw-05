import axios from 'axios';

export async function fetchMovies(params, query) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '2985c175ed6d4fc745585d65a0cdd44e';

  return await axios.get(
    `${BASE_URL}${params}?api_key=${API_KEY}&${query}&language=en-US`
  );
}
