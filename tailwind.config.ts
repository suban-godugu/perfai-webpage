import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        violet: "var(--violet)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        // Preserve legacy tokens for backwards compatibility
        midnight: "#070B14",
        deepnavy: "#0E1626",
        techblue: "#3B82F6",
        tealaccent: "#2DD4BF",
        mist: "#F6F8FB",
        slatecustom: "#8EA0BA",
        textdark: "#0B1220",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        input: "8px",
        card: "12px",
        panel: "20px",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
