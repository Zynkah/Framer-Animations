import { Variants } from "framer-motion";

export const modalContentVariants: Variants = {
  initial: {
    y: -60,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: -60,
  },
};

export const mobileModalContentVariants: Variants = {
  initial: {
    y: "110%",
    opacity: 1,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      damping: 25,
      type: "spring",
    },
  },
  exit: {
    y: "110%",
    opacity: 0.8,
    transition: {
      damping: 25,
      type: "spring",
    },
  },
};
