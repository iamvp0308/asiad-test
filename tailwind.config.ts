import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#08080a",
          900: "#0d0d10",
          850: "#121216",
          800: "#17171c",
          700: "#212228",
          600: "#33343c",
        },
        ash: {
          400: "#8a8a92",
          300: "#b4b4ba",
          100: "#eeeeee",
        },
        ember: {
          400: "#ff7a3d",
          500: "#ff5a1f",
          600: "#e6440c",
          700: "#b8340a",
        },
        amber: {
          400: "#ffb457",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at 50% 0%, rgba(255,90,31,0.15), transparent 60%)",
      },
      clipPath: {
        panel: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)",
      },
      boxShadow: {
        ember: "0 0 40px rgba(255,90,31,0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
