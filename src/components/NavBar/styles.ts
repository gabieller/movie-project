import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  height: 4rem;
  background-color: #4a4e69;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  color: #f2e9e4;
`;

export const SeachInput = styled.input`
  height: 2rem;
  width: 16rem;
  padding: 0 2rem;
  color: #f2e9e4;
  border-radius: 2rem;
  outline: none;
  border-color: transparent;
  background-color: #4a4e69;
  border: 1px solid #f2e9e4;
`;
