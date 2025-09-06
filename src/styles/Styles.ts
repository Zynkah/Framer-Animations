import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

export const SHomePageWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100vw;
  height: 100vh;
  gap: 50px;
`;

export const SSideNav = styled.nav`
  background-color: #000000;
  min-width: 250px;
  padding-inline-start: 5%;

  ul {
    list-style: none;
    padding-inline-start: 0;
  }
`;

export const SModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 460px;
  width: 600px;
  border-radius: 6px;
`;

const gradientKeyframe = keyframes`
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }
  
  100% {
    background-position: 0% 50%
  }
`;

export const FARE_GRADIENT = css`
  background: linear-gradient(
    to right,
    #410dff,
    "#d900d5",
    '#ff5e4f
  );
  background-size: 400% 400%;

  -webkit-animation: ${gradientKeyframe} 10s ease infinite;
  -moz-animation: ${gradientKeyframe} 10s ease infinite;
  animation: ${gradientKeyframe} 10s ease infinite;
`;

export const SGradientWalletModalContent = styled(motion.div)`
  padding: 1px;
  border-radius: 6px;
  ${FARE_GRADIENT}
`;


export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
