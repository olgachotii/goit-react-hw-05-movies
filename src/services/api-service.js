const API_KEY = '6ab460452e9d6fb8f59cab399bd5ef0f';
const BASE_URL = 'https://api.themoviedb.org/3';

async function Api(url = '') {
  const response = await fetch(url);
  return response.json();
}

export function getTrending() {
  return Api(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}
export function getMovieDetails(moviesId) {
  return Api(`${BASE_URL}/movie/${moviesId}?api_key=${API_KEY}`);
}
export function getCast(moviesId) {
  return Api(
    `${BASE_URL}/movie/${moviesId}/credits?api_key=${API_KEY}&language=en-US`
  );
}
export function getRewiew(moviesId) {
  return Api(`${BASE_URL}/movie/${moviesId}/reviews?api_key=${API_KEY}&page=1`);
}
export function getSearch(movie) {
  return Api(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movie}`);
}
