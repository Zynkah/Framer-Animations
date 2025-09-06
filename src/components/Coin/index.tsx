import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SCoinRow } from "./styles";
import { CanvasContainer } from "../shared/CanvasContainer";
import { coinVariants } from "./variants";

export const Coin = () => {
  const [showCoins, setShowCoins] = useState(true);

  useEffect(() => {
    const coinTimer = setTimeout(() => setShowCoins(false), 2500);

    return () => {
      clearTimeout(coinTimer);
    };
  }, []);

  return (
    <CanvasContainer>
      <SCoinRow>
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
      </SCoinRow>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </CanvasContainer>
  );
}
