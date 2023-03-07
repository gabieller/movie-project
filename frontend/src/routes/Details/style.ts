import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 15rem;
  gap: 3rem;
`;

export const Image = styled.img`
  height: 26rem;
  width: 16rem;
  border-radius: 1rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  color: #4a4e69;
  line-height: 1.5rem;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #22223b;
  font-weight: bold;
`;
