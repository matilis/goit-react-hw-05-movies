import { styled } from 'styled-components';

export const Form = styled.form`
  margin: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: orange;
  border: none;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  transform: scale(1);
  transition: all 300ms ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 10px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #000;
  width: 300px;
  margin-bottom: 20px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  outline: none;
  &:focus {
    border: 2px solid #000;
  }
`;
