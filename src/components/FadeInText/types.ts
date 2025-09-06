import { Variant } from "framer-motion";

export type AnimatedTextProps = {
  text: string | string[];
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};