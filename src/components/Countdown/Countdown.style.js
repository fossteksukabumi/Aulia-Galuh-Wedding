import styled from "styled-components";

export const CountdownWrapper = styled.section`
  width: 100%;
  text-align: center;
  padding: 3rem 1rem;
  background: #000;
  color: #fff;
`;

export const CountdownTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const TimeBox = styled.div`
  background: #141414;
  padding: 1rem;
  border-radius: 8px;
  min-width: 70px;

  @media (min-width: 768px) {
    min-width: 100px;
  }
`;

export const TimeNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const TimeLabel = styled.div`
  font-size: 0.8rem;
  color: #999;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
