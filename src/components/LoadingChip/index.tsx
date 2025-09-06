import { motion } from "framer-motion";
import { CanvasContainer } from "../shared/CanvasContainer";
import { ILoadingChip } from "./types";
import { SFilledLoadingChip, SLoadingChip } from "./styles";
import { borderImgVariants, slowBorderImgVariants } from "./variants";

// todo figure out why position breaks on refresh

export const LoadingChip = ({
  wrapperDimensions,
  slowAnimation = false,
  ...props
}: ILoadingChip) => {
  const [wrapperHeight, wrapperWidth] = wrapperDimensions || ["", ""];

  return (
    <CanvasContainer>
      <SLoadingChip
 
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
    </CanvasContainer>
  );
};

export const FilledLoadingChip = ({
  wrapperDimensions,
  ...props
}: ILoadingChip) => {
  return (
    <SFilledLoadingChip>
      <LoadingChip
        width={100}
        height={100}
        wrapperDimensions={wrapperDimensions}
        {...props}
      />
    </SFilledLoadingChip>
  );
};
