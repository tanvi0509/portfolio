import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackish: "#0f0f0f",
        pink: "#FFFFFF",
        whitish: "#fafafa",
        hovercolor: "#d3d3d3",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        zcool: ["ZCOOL XiaoWei", "serif"],
        inter: ["Roboto", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "bg-shine": "bg-shine 2.1s linear infinite",
      },
      keyframes: {
        "bg-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
