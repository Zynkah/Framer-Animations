export const BACKGROUND_COLORS = {
  one: "black",
  // two: '#05030e',
  two: "rgba(0, 0, 0, .06)",
  three: "#0a071b",
  four: "#101010",
} as const;

export const TEXT_COLORS = {
  one: "#ffffff",
  two: "#aaaaaa",
  three: "#666",
} as const;

export const BORDER_COLORS = {
  one: "#1b1d26", // Dark navy blue
  two: "#2c3142", // Slightly lighter navy, provides contrast
  three: "#3a4052", // Subtle bluish-gray accent
};

export const COLORS = {
  success: "#27ff83",
  warning: "#ffad4d",
  error: "#ff2763",
  softSuccess: "#66bb6a",
  softError: "#ef5350",
};

export const PRIMARY_COLORS = {
  peach: "#ffcd9e",
  salmon: "#ff5e4f",
  pink: "#d900d5",
  blue: "#410dff",
  aqua: "#4af5d3",
  gray: "#34383f",
  black: "#0a0a0a",
} as const;


export const MENU_COLORS = {
  coinFlip: {
    one: "#dd7129",
    two: "#4a310ff5",
    three: "#4a310f40",
    four: "#1d1408f5",
  },
  dice: {
    one: "#7e1aff",
    two: "#27094d",
    three: "#35047540",
    four: "#11081df5",
  },
  rps: {
    one: "#0076ff",
    two: "#092f51f5",
    three: "#092f5140",
    four: "#08131df5",
  },
  bombs: {
    one: "#d92a3e",
    two: "#481111",
    three: "#48111140",
    four: "#f64f641f",
  },
  plinko: {
    one: "#d900d5",
    two: "#400f3f",
    three: "#400f3f40",
    four: "#f754f41f",
  },
  crash: {
    one: "#ff2b2b",
    two: "#4a310f",
    three: "#4a310f40",
    four: "#ff800040",
  },
  cards: {
    one: "#410dff",
    two: "#0d0d29f5",
    three: "#0d0d2940",
    four: "#0d0d2940",
  },
  roulette: {
    one: "#31f542",
    two: "#2b4a0ff5",
    three: "#1b4a0f40",
    four: "#111d08f5",
  },
  deathmatch: {
    one: "#d92a3e",
    two: "#481111",
    three: "#48111140",
    four: "#f64f641f",
  },
  settings: {
    one: "#ffffff",
    two: "#ffffff25",
    three: "#ffffff05",
  },
  discord: {
    one: "#0d0d29f5",
  },
  x: {
    one: "#ffffff15",
  },
};

export const OUTCOME_COLORS = {
  loss: "rgb(255, 72, 72)",
  win: {
    one: "rgb(26, 185, 26)",
    two: "rgb(26, 215, 26)",
    three: "rgb(26, 245, 26)",
    four: "rgb(255, 215, 0)",
    five: "rgb(217, 0, 213)",
  },
} as const;
