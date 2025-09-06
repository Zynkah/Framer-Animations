import { motion, useAnimation, type Variant } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import { CanvasContainer } from "../shared/CanvasContainer";
import { AnimatedTextProps } from "./types";
import { defaultAnimations } from "./variants";

export const FadeInText = ({
  text,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible");
    }, 300);

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <CanvasContainer>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    style={{ fontSize: "56px" }}
                    key={`${char}-${charIndex}`}
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </CanvasContainer>
  );
};
