import { keyframes } from "styled-components";
import styled from "styled-components";

const fall = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100vh);
  }
`;

export const Coin = styled.img`
  position: absolute;
  width: 24px;
  pointer-events: none;
  z-index: 0;
  animation: ${fall} ${() => Math.random() * 5 + 3}s linear infinite;
`;
