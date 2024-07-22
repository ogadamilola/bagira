import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bagiRed: "#e81d5a",
        bagiGreen: "#9cc556",
        bagiBlue: "#014E9E",
        bagiOrange: "#eb5028",
        bagiBlack: "#0f1211",
        bagiWhite: "#eff2f1",
      },
    },
  },
  plugins: [],
};
export default config;
