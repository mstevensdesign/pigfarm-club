import { Londrina_Solid } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      yellow: "#ffd564",
    },
    extend: {
      fontSize: {
        h1: "94px",
        h2: "75px",
        h3: "60px",
        h4: "48px",
        h5: "38px",
        h6: "31px",
        h7: "25px",
        h8: "20px",
        p: "16px",
      },
      fontFamily: {
        Londrina_Solid: ["Londrina Solid", "cursive"],
        maven: ["Maven Pro", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
