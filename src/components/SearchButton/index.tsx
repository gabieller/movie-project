import { MouseEventHandler } from "react";
import { FaSearch } from "react-icons/fa";

import * as S from "./style";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SearchButton = ({ onClick }: ButtonProps) => {
  return (
    <S.Button onClick={onClick}>
      <FaSearch size="1rem" color="#f2e9e4" />
    </S.Button>
  );
};
