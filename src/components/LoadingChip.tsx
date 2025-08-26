import { Variants, motion } from "framer-motion";
import styled from "styled-components";

interface ILoadingChip {
  width?: number;
  height?: number;
  wrapperDimensions?: [string, string];
  slowAnimation?: boolean;
}

const borderImgVariants: Variants = {
  initial: {
    rotateZ: 0,
    scale: 1,
  },
  animate: {
    scale: [1.06, 0.9],
    rotateZ: [0, 360],
    transition: {
      scale: {
        type: "tween",
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.5,
      },
      rotateZ: {
        type: "tween",
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
      },
    },
  },
};

const slowBorderImgVariants: Variants = {
  initial: {
    rotateZ: 0,
    scale: 1,
    opacity: 1,
    y: 0,
  },
  animate: {
    opacity: [1, 0.6],
    scale: [1.06, 0.9],
    rotateZ: [0, 360],
    y: 0,
    transition: {
      opacity: {
        type: "tween",
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
      },
      scale: {
        type: "tween",
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
      },
      rotateZ: {
        type: "tween",
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
      },
    },
  },
  exit: {
    y: -100,
  },
};

const SLoadingChip = styled.div<{
  $width: number;
  $height: number;
  $wrapperWidth?: string;
  $wrapperHeight?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.$wrapperHeight || `${props.$height}px`};
  width: ${(props) => props.$wrapperWidth || `${props.$width}px`};
  padding: 16px;

  > .chip-border-img {
    position: absolute;
    height: ${(props) => props.$height}px;
    width: ${(props) => props.$width}px;
  }

  > .chip-center-img {
    height: ${(props) => props.$height * 0.50}px;
    width: ${(props) => props.$width * 0.50}px;
  }
`;
export const LoadingChip = ({
  width = 200,
  height = 200,
  wrapperDimensions,
  slowAnimation = false,
  ...props
}: ILoadingChip) => {
  const [wrapperHeight, wrapperWidth] = wrapperDimensions || ["", ""];

  return (
    <SLoadingChip
      $width={width}
      $height={height}
      $wrapperWidth={wrapperWidth}
      $wrapperHeight={wrapperHeight}
      {...props}
    >
      <motion.img
        className="chip-border-img"
        alt="Border"
        src="/level_0.svg"
        variants={slowAnimation ? slowBorderImgVariants : borderImgVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
      <motion.img
        className="chip-center-img"
        alt="poker hand"
        variants={slowAnimation ? slowBorderImgVariants : borderImgVariants}
        src="/poker-hand.svg"
        initial="initial"
        animate="initial"
        exit="exit"
      />
    </SLoadingChip>
  );
};

const SFilledLoadingChip = styled.div`
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

export const FilledLoadingChip = ({
  width = 100,
  height = 100,
  wrapperDimensions,
  ...props
}: ILoadingChip) => {
  return (
    <SFilledLoadingChip>
      <LoadingChip
        width={width}
        height={height}
        wrapperDimensions={wrapperDimensions}
        {...props}
      />
    </SFilledLoadingChip>
  );
};
