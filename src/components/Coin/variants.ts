export const coinContainerVariants = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const coinVariants = {
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
