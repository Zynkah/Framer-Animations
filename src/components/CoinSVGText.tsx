import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import {
  CoinRow,
  ModalContent,
  modalContentVariants,
  ModalWrapper,
  SGradientWalletModalContent,
} from "../styles/SVGText";
import { FadeInText } from "./FadeInText";

const coinContainerVariants = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const coinVariants = {
  initial: { y: 0, scale: 0.8, filter: "drop-shadow(0 0 0px #ffd700)" },
  animate: {
    y: [0, -40, 0, -10, 0],
    rotateY: [0, 180, 360],
    scale: [0.8, 1.2, 1, 1.1, 1],
    filter: [
      "drop-shadow(0 0 0px #ffd700)",
      "drop-shadow(0 0 24px #ffd700)",
      "drop-shadow(0 0 12px #ffd700)",
      "drop-shadow(0 0 24px #ffd700)",
      "drop-shadow(0 0 0px #ffd700)",
    ],
    opacity: [1, 1, 0.8, 1, 0],
    transition: {
      duration: 0.9,
    },
  },
  exit: { y: 0, opacity: 0, scale: 0.8 },
};

export default function CoinSVGText() {
  const [showCoins, setShowCoins] = useState(true);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const coinTimer = setTimeout(() => setShowCoins(false), 2500);

    return () => {
      clearTimeout(coinTimer);
    };
  }, []);

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
              variants={coinContainerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CoinRow>
                <AnimatePresence>
                  {showCoins &&
                    Array.from({ length: 5 }).map((_, index) => (
                      <motion.img
                        variants={coinVariants}
                        key={index}
                        src="/coin.svg"
                        alt="coin"
                        width={64}
                        whileHover={{
                          scale: 1.3,
                          rotate: 20,
                          filter: "drop-shadow(0 0 32px #fff700)",
                        }}
                      />
                    ))}
                </AnimatePresence>

                {!showCoins && (
                  <motion.img
                    src="/coin.svg"
                    width={64}
                    alt="bet"
                    initial={{ opacity: 0, y: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      y: [0, -40, 0, -10, 0],
                      scale: [0.8, 1.2, 1, 1.1, 1],
                      filter: [
                        "drop-shadow(0 0 0px #ffd700)",
                        "drop-shadow(0 0 24px #ffd700)",
                        "drop-shadow(0 0 12px #ffd700)",
                        "drop-shadow(0 0 24px #ffd700)",
                        "drop-shadow(0 0 0px #ffd700)",
                      ],
                      transition: {
                        duration: 0.9,
                      },
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 20,
                      filter: "drop-shadow(0 0 32px #fff700)",
                    }}
                  />
                )}
              </CoinRow>
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
