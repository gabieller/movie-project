import axios from "axios";

type Movie = {
  original_title: string;
  genres: [];
  release_date: string;
  vote_average: string;
};



//DONE WITH EXPRESS
export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL_POPULAR_MOVIES}`
    );

    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//DONE WITH EXPRESS
export const getMovie = async (id: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/${id}`
    );

    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovie = async (query: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_SEARCH_URL}=${query}`
    );
    const { data } = response;
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
