import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useState } from "react";
import { HandRow, ModalContent, modalContentVariants, ModalWrapper, SGradientWalletModalContent } from "../styles/SVGText";
import { FadeInText } from "./FadeInText";

const handVariants = {
  initial: { opacity: 0, y: 0, rotate: 0 },
  animate: {
    y: [0, -20, 20, -30],
    x: [0, 20, 40],
    scale: [1, 1.5],
    rotate: [0, 45, 90, 0],
    opacity: [1, 1],
    transition: {
      duration: 2,
      ease: easeInOut,
    },
  },
};

const altHandVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 20, 0],
    x: [0, -20, 0],
    scale: [1, 0],
    rotate: [0, -45, -90, -45],
    opacity: [1, 0],
    transition: {
      duration: 2,
      ease: easeInOut,
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
                />
                <motion.img
                  src="/rps-scissors-icon-alt.svg"
                  width={120}
                  alt="bet"
                  variants={altHandVariants}
                  style={{ marginLeft: 20 }}
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
