import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";

import { AiFillStar } from "react-icons/ai";


import * as S from "./styles";

export const MovieCard = ({ id, poster_path, title, vote_average }: Movie) => {
  return (
    <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
      <S.Card>
        <S.Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
        <S.InfoDetails>
          <S.Title>{title}</S.Title>
          <S.VotesWrapper>
            <AiFillStar color="#4A4E69" /> <span>{vote_average}</span>
          </S.VotesWrapper>
        </S.InfoDetails>
      </S.Card>
    </Link>
  );
};
