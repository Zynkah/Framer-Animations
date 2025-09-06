export const handVariants = {
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

export const altHandVariants = {
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