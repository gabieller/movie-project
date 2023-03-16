import React, { useCallback } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import { searchMovie } from "../../services/api";

import { MoviesList } from "../../components/MoviesList";

import * as S from "./styles";

export default function Search() {
  const [searchParams] = useSearchParams();


  const searchWithQuery = useCallback(() => {
    console.log(searchParams)
    const query = searchParams.get("q");
    // @ts-ignore
    return searchMovie(query)
  }, [])


  return (
    <S.Container>
      <MoviesList fetchMovies={searchWithQuery}/>
    </S.Container>
  );
}
