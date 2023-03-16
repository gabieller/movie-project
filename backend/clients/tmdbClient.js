const axios = require("axios");
const config = require("../../config");

const instance = axios.create({
  baseURL: config.tmdb.baseUrl,
  params: {
    api_key: process.env.API_KEY,
  },
});

async function getMovieById(movieId) {
  const res = await instance.get(`/movie/${movieId}`);
  return res.data;
}

async function getPopularMovies(page) {
  const res = await instance.get(`/movie/popular`, {
    params: {
      language: "en-US",
      page,
    },
  });
  return res.data;
}

async function searchMovie(query, page) {
  const res = await instance.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return res.data;
}

async function getTopRatedMovies(page) {
  const res = await instance.get('movie/top_rated', {
    params: {
      language: 'en-US',
      page
    }
  })
  return res.data
}

module.exports = {
  getMovieById,
  getPopularMovies,
  searchMovie,
  getTopRatedMovies
};
