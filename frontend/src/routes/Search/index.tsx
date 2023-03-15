import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { searchMovie } from "../../services/api";

import * as S from "./styles";

export default function Search() {
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchMovies = async () => {
      console.log('TESTE')
      // @ts-ignore
      const movies = await searchMovie(query);
      setMovies(movies);
    };
    console.log('TESTE2')
    fetchMovies();
  }, []);

  return (
    <S.Container>
      <h2>
        Resultados para: <S.Text>{query}</S.Text>
      </h2>

      <S.Grid>
        {movies?.map((movie: any) => (
          <p>
            {movie.title} - {movie.vote_average}
          </p>
        ))}
      </S.Grid>
    </S.Container>
  );
}
