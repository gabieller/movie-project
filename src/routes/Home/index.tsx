import { SetStateAction, useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { fetchPopularMovies, searchMovie } from "../../services/api";

import * as S from './style'

type MovieType = {
  id?: string;
  poster_path?: string;
  title: string;
  vote_average: number;
};

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [movies, setMovies] = useState();
  const [term, setTerm] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!term) return;

    const data = await searchMovie(term);
    setMovies(data);
  };

  const handleInput = (e: { target: { value: SetStateAction<string> } }) => {
    setTerm(e.target.value);
  };

  //TODO destruct to get only the props I want
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchPopularMovies();
      setPopularMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          value={term}
          onChange={handleInput}
        />
      </form>
      <S.Container>
      <S.Title>Filmes populares</S.Title>
      <S.Grid>
        {popularMovies?.map(
          ({ id, poster_path, title, vote_average }: MovieType) => {
            return (

              <MovieCard
                id={id}
                poster={poster_path}
                title={title}
                vote_average={vote_average}
              />
            );
          }
        )}
      </S.Grid>

      <S.Title>Filmes buscados:</S.Title>
      {movies?.map(({ title }: MovieType) => (
        <div>{title}</div>
      ))}
      </S.Container>

    </>
  );
}
