import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const Image = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 10px 6px 8px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: orange;
  border: none;
  color: white;
  padding: 10px 15px;
  margin: 15px 0;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 5px 5px 10px;
  transform: scale(1);
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Genre = styled.div`
  display: flex;
  gap: 7px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
`;

export const P = styled.div`
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  padding-bottom: 20px;
`;

export const H2 = styled.div`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`;

export const H3 = styled.div`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
`;

export const MoreInfo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
