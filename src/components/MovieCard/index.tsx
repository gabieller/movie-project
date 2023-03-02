import { Link } from "react-router-dom";
import * as S from "./styles";

type MovieType = {
  id?: string;
  poster: string;
  title: string;
  vote_average: number;
};

export const MovieCard = ({ id, poster, title, vote_average }: MovieType) => {
  return (
    <S.Card>
        <Link to={`/details/${id}`}>
          <S.Image src={`${import.meta.env.VITE_API_IMAGE_PATH}${poster}`} />
        </Link>
      <S.InfoDetails>
        <S.Title>{title}</S.Title>
        <S.Text>{vote_average}</S.Text>
      </S.InfoDetails>
    </S.Card>
  );
};
