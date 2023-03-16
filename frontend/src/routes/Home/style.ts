import styled from "styled-components";

type ButtonProps = {
  isSelected: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
  gap: 2rem;
`;

export const Menu = styled.button<ButtonProps>`
  text-transform: uppercase;
  font-weight: 500;
  background-color: transparent;
  border: none;
  color: #22223b;
  cursor: pointer;

  ${({ isSelected }) => isSelected && "color: red"}
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${Menu}:hover {
    color: #4a4e6980;
  }
`;

export const Line = styled.hr`
  height: 1.5rem;
  border-left: 2px solid #000;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
