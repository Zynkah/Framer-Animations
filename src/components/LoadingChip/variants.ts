import { Variants } from "framer-motion";

export const borderImgVariants: Variants = {
  initial: {
    rotateZ: 0,
    scale: 1,
  },
  animate: {
    scale: [1.06, 0.9],
    rotateZ: [0, 360],
    transition: {
      scale: {
        type: "tween",
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.5,
      },
      rotateZ: {
        type: "tween",
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        duration: 4,
      },
    },
  },
};

export const slowBorderImgVariants: Variants = {
  initial: {
    rotateZ: 0,
    scale: 1,
    opacity: 1,
    y: 0,
  },
  animate: {
    opacity: [1, 0.6],
    scale: [1.06, 0.9],
    rotateZ: [0, 360],
    y: 0,
    transition: {
      opacity: {
        type: "tween",
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
      },
      scale: {
        type: "tween",
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
      },
      rotateZ: {
        type: "tween",
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
      },
    },
  },
  exit: {
    y: -100,
  },
};
