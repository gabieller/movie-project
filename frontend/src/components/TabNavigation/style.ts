import styled from "styled-components";

type ListProps = {
  isActive?: boolean;
};

export const Tab = styled.li<ListProps>`
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  color: #22223b;
  cursor: pointer;

  ${({ isActive }) => isActive && "text-decoration: #22223B underline"}
`;

export const TabWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style-type: none;

  ${Tab}:hover {
    color: #9a8c9880;
  }
`;

export const Line = styled.hr`
  height: 1.5rem;
  border-left: 2px solid #000;
`;
