import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../services/api";

type MovieDetails = {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
  image: string;
};

export default function Details() {
        // @ts-ignore
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({});

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const { title, release_date, overview, poster_path } = await getMovie(
        `${id}`
      );

      const movie = {
        id,
        title,
        releaseDate: release_date,
        overview,
        image: `${import.meta.env.VITE_API_IMAGE_PATH}${poster_path}`,
      };
      // @ts-ignore
      setMovieDetails(movie);
    };
    fetchMovie();
  }, [id]);

  return (
    <div>
      {movieDetails?.title} <br />
      {movieDetails?.overview}
    </div>
  );
}
