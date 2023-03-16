import axios, { AxiosResponse } from "axios";
import {Movie, MoviesResponse} from '../types'

export const fetchPopularMovies = async (): Promise<MoviesResponse> => {
  try {
    const response: AxiosResponse<MoviesResponse> = await axios.get("/api/popular-movies");
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error
  }
};

export const fetchTopRatedMovies = async (): Promise<MoviesResponse> => {
  try {
    const response: AxiosResponse<MoviesResponse> = await axios.get("/api/top-rated");
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error
  }
};

export const getMovie = async (id: string): Promise<Movie> => {
  try {
    const response: AxiosResponse<Movie> = await axios.get(`/api/movies/${id}`);
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error
  }
};

export const searchMovie = async (query: string, page: number): Promise<MoviesResponse> => {
  try {
    const response: AxiosResponse<MoviesResponse> = await axios.get(`/api/search`, {
      params: {
        query: query,
        page: page
      },
    });
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error
  }
};
