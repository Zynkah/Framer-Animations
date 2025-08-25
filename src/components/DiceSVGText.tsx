import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ModalContent, modalContentVariants, ModalWrapper, SGradientWalletModalContent } from "../styles/SVGText";


const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.5 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring" as const, duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function DiceSVGText() {
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
            <ModalContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <motion.svg
                  width={500}
                  height={150}
                  viewBox="0 0 600 100"
                  initial="hidden"
                  animate="visible"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Letter Y */}
                  <motion.path
                    d="M15 10 L50 70 L85 10 M50 70 L50 120"
                    stroke="#410dff"
                    strokeWidth="8"
                    fill="none"
                    variants={draw}
                    custom={1}
                  />

                  {/* Letter O */}
                  <motion.ellipse
                    cx="150"
                    cy="60"
                    rx="35"
                    ry="50"
                    stroke="#410dff"
                    strokeWidth="8"
                    fill="none"
                    variants={draw}
                    custom={2}
                  />

                  {/* Letter U */}
                  <motion.path
                    d="M220 10 L220 80 A30 30 0 0 0 280 90 L280 10"
                    stroke="#410dff"
                    strokeWidth="8"
                    fill="none"
                    variants={draw}
                    custom={3}
                  />

                  {/* Letter W */}
                  <motion.path
                    d="M330 10 L330 100 L370 50 L410 100 L410 10"
                    stroke="#d900d5"
                    strokeWidth="8"
                    fill="none"
                    variants={draw}
                    custom={4}
                  />

                  {/* Letter I */}
                  <motion.line
                    x1="460"
                    y1="10"
                    x2="460"
                    y2="110"
                    stroke="#d900d5"
                    strokeWidth="8"
                    variants={draw}
                    custom={5}
                  />

                  {/* Letter N */}
                  <motion.path
                    d="M500 110 L500 15 L580 100 L580 4"
                    stroke="#d900d5"
                    strokeWidth="8"
                    fill="none"
                    variants={draw}
                    custom={6}
                  />
                </motion.svg>
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
              </div>
            </ModalContent>
          </SGradientWalletModalContent>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
}
