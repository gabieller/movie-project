import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovie } from "../../services/api";
import { Movie } from "../../types/Movie";

import * as S from "./style";

export default function Details() {
  const [movieDetails, setMovieDetails] = useState<Movie>();

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const {
        title,
        release_date,
        overview,
        poster_path,
        runtime,
        vote_average,
      } = await getMovie(`${id}`);

      const movie = {
        id,
        title,
        releaseDate: release_date,
        overview,
        poster_path: `${import.meta.env.VITE_API_IMAGE_PATH}${poster_path}`,
        runtime,
        vote_average,
      };
      // @ts-ignore
      setMovieDetails(movie);
    };
    fetchMovie();
  }, [id]);

  return (
    <S.Container>
      <S.Image src={movieDetails?.poster_path} />
      <S.InfoWrapper>
        <S.Title>{movieDetails?.title}</S.Title>
        <div>{movieDetails?.overview}</div>
        <div>Data de lançamento: {movieDetails?.releaseDate}</div>

        <div> Duração: {movieDetails?.runtime} minutos</div>
        <div>Votos: {movieDetails?.vote_average}</div>
      </S.InfoWrapper>
    </S.Container>
  );
}
