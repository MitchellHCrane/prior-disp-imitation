import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      pdBlue: "#002169",
      pdLightBlue: "#04A9FF",
      pdRed: "#E81C2C",
      pdYellow: "#FFC600",
      pdMedical: "#056836",
      pdNurse: "#FF4B00",
      pdGray: "rgb(107 114 128)",
      pdLightGray: "rgb(209 213 219)",
      pdTranGray: "#ffffff38",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
