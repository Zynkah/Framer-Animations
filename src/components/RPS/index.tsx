import { motion } from "framer-motion";
import { SHandRow } from "./styles";
import { CanvasContainer } from "../shared/CanvasContainer";
import { altHandVariants, handVariants } from "./variants";



export const RPS = () => {
  return (
    <CanvasContainer>
      <SHandRow key="row-1">
        <motion.img
          src="/rps-rock-icon.svg"
          width={64}
          alt="bet"
          variants={handVariants}
          style={{ marginRight: 20 }}
          whileHover={{
            scale: 1.3,
            rotate: 20,
            filter: "drop-shadow(0 0 32px #410dff)",
          }}
        />
        <motion.img
          src="/rps-scissors-icon-alt.svg"
          width={120}
          alt="bet"
          variants={altHandVariants}
          style={{ marginLeft: 20 }}
          whileHover={{
            scale: 1.3,
            rotate: -20,
            filter: "drop-shadow(0 0 32px #d900d5)",
          }}
        />
      </SHandRow>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </CanvasContainer>
  );
};
