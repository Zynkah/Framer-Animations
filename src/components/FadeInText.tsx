import { motion, useAnimation, type Variant } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

type AnimatedTextProps = {
  text: string | string[];
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
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
    <div>
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
                    className="inline-block"
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
    </div>
  );
};
