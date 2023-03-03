import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { fetchPopularMovies } from "../../services/api";

import * as S from "./style";

type MovieType = {
  id?: string;
  poster_path?: string;
  title: string;
  vote_average: number;
};

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  //TODO destruct to get only the props I want
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetchPopularMovies();
      setPopularMovies(data);
    };

    fetchMovies();
  }, []);

  return (
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
    </S.Container>
  );
}
