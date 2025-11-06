import styled from "styled-components";

export const WishesWrapper = styled.section`
  padding: 2rem 1rem;
  background: #141414;
  color: #fff;
`;

export const WishesTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const WishesForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 1rem;
  min-height: 100px;
`;

export const SubmitButton = styled.button`
  background: red;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: 0.3s;

  &:hover {
    background: darkred;
  }
`;

export const WishesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const WishCard = styled.div`
  background: #000;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const WishName = styled.h3`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const WishMessage = styled.p`
  font-size: 0.95rem;
  color: #ccc;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px; /* Netflix avatar biasanya kotak rounded */
  margin-right: 1rem;
`;
