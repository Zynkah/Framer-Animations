import { AnimatePresence, motion } from "framer-motion";
import {
  ModalContent,
  modalContentVariants,
  ModalWrapper,
  SGradientWalletModalContent,
} from "../styles/SVGText";

export default function DiceSVGText() {
  return (
    <AnimatePresence>
      <ModalWrapper>
        <SGradientWalletModalContent
          variants={modalContentVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <ModalContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <motion.img
                src="/dice.svg"
                alt="dice"
                width={64}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{
                  opacity: 1,
                  y: [-1000, 0, -20, 0],
                  x: [0, -10, -30],
                  rotate: [0, 180, -10, -25, 0],
                  transition: {
                    delay: 0.8,
                    duration: 1,
                    ease: "easeInOut",
                  },
                }}
              />
              <motion.img
                src="/dice.svg"
                alt="dice"
                width={64}
                initial={{ opacity: 0, y: 0, x: 0 }}
                animate={{
                  opacity: 1,
                  y: [-1000, 0, -20, 0],
                  x: [0, 10, -10],
                  rotate: [0, 180, -10, -25, 0],
                  transition: {
                    delay: 0.5,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
              />
            </div>
          </ModalContent>
        </SGradientWalletModalContent>
      </ModalWrapper>
    </AnimatePresence>
  );
}
