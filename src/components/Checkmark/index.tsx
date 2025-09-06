import { AnimatePresence, motion } from "framer-motion";
import { CanvasContainer } from "../shared/CanvasContainer";
import { SContainer } from "../../styles/Styles";

export const Checkmark = () => {
  return (
    <CanvasContainer>
      <SContainer>
        <motion.svg
          width={200}
          height={200}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          style={{ cursor: "pointer" }}
        >
          <AnimatePresence mode="wait">
            <motion.path
              key="check"
              d="M50 100 L90 140 L150 60"
              stroke="#06d6a0"
              strokeWidth="8"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut" },
              }}
            />
          </AnimatePresence>
        </motion.svg>
      </SContainer>
    </CanvasContainer>
  );
};
