import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2e9e4;
  color: #22223b;
  gap: 0.25rem;
  height: 28rem;
  width: 17rem;
  border-radius: 0.75rem;
  border-left: 1px solid #ffffff;
  border-top: 1px solid #ffffff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 0.125px 0.5px 0px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;

export const Image = styled.img`
  height: 22rem;
  width: 14rem;
  border-radius: 0.75rem;
`;

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #22223b;
`;

export const VotesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;
