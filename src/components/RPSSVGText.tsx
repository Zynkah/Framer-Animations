import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState } from "react";
import {
  HandRow,
  ModalContent,
  modalContentVariants,
  ModalWrapper,
  SGradientWalletModalContent,
} from "../styles/SVGText";
import { FadeInText } from "./FadeInText";

const handVariants = {
  initial: {
    opacity: 0,
    y: 0,
    rotate: 0,
    scale: 0.8,
    filter: "drop-shadow(0 0 0px #410dff)",
  },
  animate: {
    y: [0, -40, 20, -30, 0],
    x: [0, 20, 40, 0],
    scale: [0.8, 1.5, 1.2, 1, 1.1],
    rotate: [0, 45, 90, 0, -10],
    opacity: [1, 1, 1, 1, 1],
    filter: [
      "drop-shadow(0 0 0px #410dff)",
      "drop-shadow(0 0 24px #410dff)",
      "drop-shadow(0 0 12px #410dff)",
      "drop-shadow(0 0 24px #410dff)",
      "drop-shadow(0 0 0px #410dff)",
    ],
    transition: {
      duration: 2,
    },
  },
};

const altHandVariants = {
  initial: { y: 0, scale: 1, filter: "drop-shadow(0 0 0px #d900d5)" },
  animate: {
    y: [0, -40, 20, 0],
    x: [0, -20, 0],
    scale: [1, 1.3, 0.8, 0.5],
    rotate: [0, -45, -90, -45],
    opacity: [1, 1, 0.7, 0],
    filter: [
      "drop-shadow(0 0 0px #d900d5)",
      "drop-shadow(0 0 24px #d900d5)",
      "drop-shadow(0 0 12px #d900d5)",
      "drop-shadow(0 0 0px #d900d5)",
    ],
    transition: {
      duration: 2,
    },
  },
};

export default function RPSSVGText() {
  const [showModal, setShowModal] = useState(true);

  return (
    <AnimatePresence>
      {showModal && (
        <ModalWrapper>
          <SGradientWalletModalContent
            variants={modalContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ModalContent
              as={motion.div}
              initial="initial"
              animate="animate"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <HandRow key="row-1">
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
              </HandRow>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <FadeInText
                    text={[
                      `YOU
                    WON!`,
                    ]}
                  />
                </div>
              </motion.div>
            </ModalContent>
          </SGradientWalletModalContent>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
}
