import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      Movie App
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </S.NavBar>
  );
};
