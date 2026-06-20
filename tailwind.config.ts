import type { Config } from "tailwindcss";

/* ============================================================
   CONTRACTORS PROFESSIONAL LIABILITY INSURANCE — "Corporate Authority"
   Light blue-white content · deep navy #0a1628 hero/footer · silver accent
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f2f4f8",
        sand: "#e6eaf2",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#0a1628",
          dark: "#050d1a",
          light: "#1e3360",
          50: "#edf0f7",
          100: "#d4daea",
          200: "#a8b4d5",
          300: "#7a8fbc",
          400: "#4a6aa0",
          500: "#1e3360",
          600: "#0a1628",
          700: "#050d1a",
          800: "#020810",
          900: "#010408",
        },
        sage: {
          DEFAULT: "#4a90d9",
          dark: "#2d70b8",
          light: "#74aee8",
          50: "#eaf3fc",
          100: "#cce2f8",
          200: "#99c6f1",
          300: "#74aee8",
          400: "#4a90d9",
          500: "#2d70b8",
          600: "#1a5290",
          700: "#0e3a6a",
        },
        gold: {
          DEFAULT: "#c0c0c0",
          dark: "#909090",
          light: "#e0e0e0",
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#c8c8c8",
          400: "#c0c0c0",
          500: "#a0a0a0",
          600: "#808080",
        },
        espresso: "#0a1628",
        cocoa: "#1e3360",
        mocha: "#3d5a80",
        adobe: "#c4cce0",
        adobeDark: "#a0b0cc",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "0",
        arch2: "0",
        "4xl": "0",
        "5xl": "0",
      },
      backgroundImage: {
        "sunrise-bands": "linear-gradient(180deg, #f2f4f8 0%, #e6eaf2 40%, #f2f4f8 70%, #e6eaf2 100%)",
        "warm-radial": "radial-gradient(circle at 30% 20%, rgba(10,22,40,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(74,144,217,0.06) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #0a1628 0%, #1e3360 100%)",
        "sage-gradient": "linear-gradient(135deg, #4a90d9 0%, #74aee8 100%)",
        "gold-gradient": "linear-gradient(135deg, #c0c0c0 0%, #e0e0e0 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(10,22,40,0.20), 0 4px 12px -6px rgba(10,22,40,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(10,22,40,0.28), 0 10px 30px -10px rgba(10,22,40,0.12)",
        card: "0 1px 4px -1px rgba(10,22,40,0.08), 0 1px 2px -1px rgba(10,22,40,0.04)",
        "card-hover": "0 8px 24px -6px rgba(10,22,40,0.16), 0 4px 12px -4px rgba(10,22,40,0.08)",
        arch: "inset 0 -4px 20px -6px rgba(10,22,40,0.08)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
