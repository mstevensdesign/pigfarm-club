import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        yellow: "#ffd564",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
