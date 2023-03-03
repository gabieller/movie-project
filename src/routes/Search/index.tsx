import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../services/api";

import * as S from "./styles";

export default function Search() {
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await searchMovie(query);
      setMovies(data);
    };
    fetchMovies();
  }, [movies]);

  return (
    <S.Container>
      <S.Grid>{movies.map((movie) => <p>{movie.title} - {movie.vote_average}</p>)}</S.Grid>
    </S.Container>
  );
}
