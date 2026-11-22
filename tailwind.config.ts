import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#101B2D",
          dark: "#0B1320",
          light: "#17263C"
        },
        deepnavy: {
          DEFAULT: "#172B45",
          dark: "#122238",
          light: "#1F3A5C"
        },
        techblue: {
          DEFAULT: "#2879B9",
          hover: "#1E659D",
          subtle: "#EAF3FB"
        },
        tealaccent: {
          DEFAULT: "#27B9A2",
          hover: "#20A28E",
          subtle: "#E7F8F5"
        },
        mist: "#EAF1F7",
        slatecustom: "#738397",
        textdark: "#17212F"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"]
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
};

export default config;
