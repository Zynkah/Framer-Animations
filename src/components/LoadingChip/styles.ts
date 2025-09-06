import styled from "styled-components";

export const SLoadingChip = styled.div<{
  $wrapperWidth?: string;
  $wrapperHeight?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  padding: 16px;

  > .chip-border-img {
    position: absolute;
    height: 200px;
    width: 200px;
  }

  > .chip-center-img {
    height: 100px;
    width: 100px;
  }
`;

export const SFilledLoadingChip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;