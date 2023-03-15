import React from "react";
import { useEffect, useState } from "react";

import { MovieCard } from "../../components/MovieCard";
import { fetchPopularMovies } from "../../services/api";
import { Movie } from "../../types/Movie";

import * as S from "./style";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchPopularMovies();

      const sortedPopular = data?.sort((a, b) =>
        a.vote_average < b.vote_average
          ? 1
          : a.vote_average > b.vote_average
          ? -1
          : 0
      );
      setPopularMovies(sortedPopular);
    };

    fetchMovies();
  }, []);

  return (
    <S.Container>
      <S.Title>Filmes populares</S.Title>

      <S.Grid>
        {popularMovies?.map(
          ({ id, poster_path, title, vote_average }: Movie) => {
            return (
              <MovieCard
                id={id}
                poster_path={poster_path}
                title={title}
                vote_average={vote_average}
              />
            );
          }
        )}
      </S.Grid>
    </S.Container>
  );
}
