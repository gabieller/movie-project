import React, { useEffect, useState } from "react";

import { MovieCard } from "../../components/MovieCard";
import { fetchPopularMovies, fetchTopRatedMovies } from "../../services/api";
import { Movie } from "../../types/Movie";

import * as S from "./style";

export default function Home() {
  const [showedMovies, setShowedMovies] = useState<Movie[]>();
  const [isSelected, setIsSelected] = useState<boolean>();

  const getPopularMovies = async () => {
    const data = await fetchPopularMovies();

    const sortedPopular = data?.sort((a, b) =>
      a.vote_average < b.vote_average
        ? 1
        : a.vote_average > b.vote_average
        ? -1
        : 0
    );
    setShowedMovies(sortedPopular);
    setIsSelected(true);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();

    const sortedTopRated = data?.sort((a, b) => {
      a.vote_average < b.vote_average
        ? 1
        : a.vote_average > b.vote_average
        ? -1
        : 0;
    });

    setShowedMovies(sortedTopRated);
    setIsSelected(true);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return (
    <S.Container>
      <S.MenuWrapper>
        <S.Menu onClick={getPopularMovies} isSelected={isSelected}>
          Trending Movies
        </S.Menu>
        <S.Line />
        <S.Menu onClick={getTopRatedMovies} isSelected={isSelected}>
          Top Rated
        </S.Menu>
      </S.MenuWrapper>

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
