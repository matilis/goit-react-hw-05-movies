import { styled } from 'styled-components';

export const Form = styled.form`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: orange;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  border-radius: 5px;
  transform: scale(1);
  transition: all 300ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 25px;
  font-weight: 700;
  color: #000;
  outline: none;
  &:focus {
    border: 2px solid #000;
  }
`;
