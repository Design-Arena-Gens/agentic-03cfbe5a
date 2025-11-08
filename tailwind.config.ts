import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nodi: {
          red: "#FF3B45",
          dark: "#0B0B0F",
          light: "#F5F5F7",
        },
      },
      fontFamily: {
        sans: ["'Space Grotesk'", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glow: "0 0 45px rgba(255, 59, 69, 0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
