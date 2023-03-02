import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #e0e1dd;
  height: 22rem;
  width: 13.5rem;
  border-radius: 1rem;
`;

export const Image = styled.img`
  height: 18rem;
  width: 13.5rem;
`;

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #1b263b;
  font-size: 1rem;
`;

export const Text = styled.span`
  color: #1b263b;
  font-size: 16px;
`;
