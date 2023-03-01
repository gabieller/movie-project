import { useEffect, useState } from "react";
import { getMovie, searchMovie } from "../services/api";

export default function Home() {
  const [movie, setMovie] = useState({ title: "", vote_average: "" });
  const [movies, setMovies] = useState();
  const [searchTerms, setSearchTerms] = useState("");

  const handleInput = (e) => {
    setSearchTerms(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!searchTerms) return;

    const data = await searchMovie(searchTerms);
    setMovies(data)

  };

  console.log(movies)

  useEffect(() => {
    const fetchMovie = async () => {
      const { title, vote_average } = await getMovie("551");
      setMovie({
        title,
        vote_average,
      });
    };

    // const queryMovie = async () => {
    //   const data = await searchMovie(searchTerms)
    //   console.log(data)
    // }

    fetchMovie();
    // queryMovie()
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Busque um filme"
        value={searchTerms}
        onChange={handleInput}
      />
      <button type="submit" onClick={handleSubmit}>
        Buscar
      </button>
      {/* <div>
        O filme é {movie.title} e a nota é {movie.vote_average}
      </div> */}
      <h2>Filmes buscados:</h2>
      {movies?.map((e) => <div>{e.title}</div>)}  
    </>
  );
}
