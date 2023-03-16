import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchButton } from "../SearchButton";

import { Link } from "react-router-dom";

import * as S from "./styles";

export const NavBar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };
  return (
    <S.NavBar>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <S.Title>Movies Project</S.Title>
      </Link>

      <Link to="/top-rated" style={{ textDecoration: 'none' }}>
        <S.Title>Movies Project</S.Title>
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
