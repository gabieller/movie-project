import { useEffect, useState } from "react";
import { getMovie } from "../services/api";

export default function Home() {
  const [movie, setMovie] = useState({ title: "", vote_average: "" });


  useEffect(() => {
    const fetchMovie = async () => {
      const { title, vote_average } = await getMovie('551');
      setMovie({
        title, 
        vote_average
      });
    };
    fetchMovie();
  }, []);

  return <div>O filme é {movie.title} e a nota é {movie.vote_average}</div>;
}
