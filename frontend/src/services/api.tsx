import axios from "axios";

type Movie = {
  original_title: string;
  genres: [];
  release_date: string;
  vote_average: string;
};

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get("/api/popular-movies");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await axios.get("api/top-rated");
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (id: string) => {
  try {
    const response = await axios.get(`/api/movies/${id}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovie = async (query: string) => {
  try {
    const response = await axios.get(`/api/search`, {
      params: {
        query: query,
      },
    });
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
