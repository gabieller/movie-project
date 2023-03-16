import React from "react";

import { MoviesList } from "../../components/MoviesList";
import { fetchTopRatedMovies } from "../../services/api";


import * as S from "./style";

export default function TopRated() {
  return (
    <S.Container>
      <MoviesList fetchMovies={fetchTopRatedMovies}/>
    </S.Container>
  );
}
