import React, { useEffect, useState } from "react";

import { MovieCard } from "../../components/MovieCard";

import { Movie } from "../../types/Movie";

import * as S from "./styles";

type TabContent = {
  id: number;
  title: string;
};

export function MoviesList({ fetchMovies }) {
  const [showedMovies, setShowedMovies] = useState<Movie[]>();


  const getMovies = async () => {
    const data = await fetchMovies();
    const sortedPopular = data?.sort((a, b) =>
      a.vote_average < b.vote_average
        ? 1
        : a.vote_average > b.vote_average
        ? -1
        : 0
    );
    setShowedMovies(sortedPopular);
  };


  useEffect(() => {
    getMovies()
   }, []);


  return (
    <S.Container>
      <S.Grid>
        {showedMovies?.map(
          ({ id, poster_path, title, vote_average }: Movie) => {
            return (
              <MovieCard
                key={id}
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