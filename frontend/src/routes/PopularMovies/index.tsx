import React from "react";

import { fetchPopularMovies } from "../../services/api";
import { MoviesList } from "../../components/MoviesList";


import * as S from "./style";

export default function PopularMovies() {
  return (
    <S.Container>
      <MoviesList fetchMovies={fetchPopularMovies}/>
    </S.Container>
  );
}
