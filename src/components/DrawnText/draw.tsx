export const draw = {
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