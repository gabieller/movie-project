import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
  gap: 2rem;
`;

export const TabWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style-type: none;
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
