import { styled } from 'styled-components';

export const Ul = styled.div`
  list-style: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
  }
`;

export const Li = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 200px;
  }
`;

export const P = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    font-size: 22px;
    font-weight: 600;
  }
`;

export const T = styled.div`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
  }
`;
