import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SearchButton } from "../SearchButton";

import { searchMovie } from "../../services/api";

import { Link } from "react-router-dom";

import * as S from "./styles";

//TODO: add debounce to submit function
export const NavBar = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  useEffect(() => {
    async function fetchMovies() {
      const data = await searchMovie(search, 1);
      // @ts-ignore
      setMovies(data.results)
    }
    fetchMovies()
  }, [search]);

  return (
    <S.NavBar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <S.Title>Movies Project</S.Title>
      </Link>

      <Link to="/popular-movies" style={{ textDecoration: "none" }}>
        <span>Popular</span>
      </Link>

      <Link to="/top-rated" style={{ textDecoration: "none" }}>
        <span>Top Rated</span>
      </Link>

      <S.SearchWrapper>
        <form onSubmit={handleSubmit}>
          <S.SeachInput
            type="text"
            placeholder="Pesquise um filme..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <SearchButton onClick={handleSubmit} />
      </S.SearchWrapper>
    </S.NavBar>
  );
};
