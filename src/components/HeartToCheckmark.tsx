import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.3 + i * 0.3;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function HeartToCheck() {
  const [done, setDone] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.svg
        width={200}
        height={200}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        style={{ cursor: "pointer" }}
        onAnimationComplete={() => setDone(true)} // after heart animates, swap to check
      >
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.path
              key="heart"
              d="M100 170 L40 100 A30 30 0 0 1 100 40 A30 30 0 0 1 160 100 Z"
              stroke="#e63946"
              strokeWidth="8"
              fill="none"
              variants={draw}
              custom={1}
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                pathLength: 1,
                transition: {
                  duration: 1.2,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0 }}
            />
          ) : (
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
          )}
        </AnimatePresence>
      </motion.svg>
    </div>
  );
}