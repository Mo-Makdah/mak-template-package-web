import { Config } from "tailwindcss";

/** @type {Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08D9D6",
        light: "#EAEAEA",
        dark: "#252A34",
        secondary: "#FF2E63",
        gray: {
          primary: "#808080",
          light: "#D3D3D3",
          dark: "#A9A9A9",
        },
        black: "#000000",
        white: "#FFFFFF",
        textPrimary: "#252A34",
        textSecondary: "#252A34",
      },
    },
  },
  plugins: [],
} satisfies Config;
