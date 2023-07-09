import { styled } from 'styled-components';

export const H1 = styled.h1`
  margin-left: 25px;
  text-shadow: 1px 1px #000000;
  transform: scaleY(1);
  animation: pulse 3s infinite;
  @keyframes pulse {
    0% {
      transform: scaleY(0.95);
    }

    50% {
      transform: scaleY(1);
    }

    100% {
      transform: scaleY(0.95);
    }
  }
`;
export const P = styled.p`
  margin-left: 25px;
  text-shadow: 1px 1px #000000;
  transform: scaleY(1);
  animation: vibration 5s infinite;
  @keyframes vibration {
    0% {
      transform: scaleY(0);
    }

    50% {
      transform: scaleY(1);
    }

    100% {
      transform: scaleY(0);
    }
  }
`;
