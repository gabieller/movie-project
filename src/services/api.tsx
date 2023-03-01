import axios from "axios";

type Movie = {
  original_title: string;
  genres: [];
  release_date: string;
  vote_average: string;
};

type getMovieType = {
  data: Movie[];
};

//TODO check if is a good idea add params to this call
//TODO add ts
export const getMovie = async (id: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }`
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
