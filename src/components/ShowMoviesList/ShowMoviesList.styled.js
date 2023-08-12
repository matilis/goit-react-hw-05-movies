import { styled } from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
  list-style: none;
  font-size: 18px;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  border: 1px solid orange;
  padding: 2px;
  border-radius: 2px;

  transition: all 250ms ease-in-out;
  transform: scale(1);
  &:hover {
    background-color: orange;
    transform: scale(1.01);
  }
`;
export const Img = styled.img`
  width: 50px;
`;
