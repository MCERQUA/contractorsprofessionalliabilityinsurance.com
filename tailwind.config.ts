import type { Config } from "tailwindcss";

/* ============================================================
   CONTRACTORS PROFESSIONAL LIABILITY INSURANCE — "Corporate Authority"
   Warm ivory content · deep walnut #2A1D15 hero/footer · copper + brass accents
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
        cream: "#F8F5F0",
        sand: "#EFE8DE",
        white: "#FFFFFF",
        // Was deep navy; now walnut (Josh: no blue/purple/pink).
        clay: {
          DEFAULT: "#2A1D15",
          dark: "#1A120D",
          light: "#4A3326",
          50: "#F6F1EC",
          100: "#E8DDD3",
          200: "#D0BBA8",
          300: "#A88A72",
          400: "#7A5A45",
          500: "#4A3326",
          600: "#2A1D15",
          700: "#1A120D",
          800: "#110B08",
          900: "#080504",
        },
        // Was sky blue; now copper.
        sage: {
          DEFAULT: "#B0501A",
          dark: "#8A3F14",
          light: "#E3A574",
          50: "#FBF1EA",
          100: "#F5DCC8",
          200: "#EBB892",
          300: "#E3A574",
          400: "#C66A2E",
          500: "#B0501A",
          600: "#8A3F14",
          700: "#672F0F",
        },
        // Was silver; now brass. dark is deep enough for AA text on light tints.
        gold: {
          DEFAULT: "#D4A640",
          dark: "#8A6516",
          light: "#E8C877",
          50: "#FBF6E9",
          100: "#F5E9C7",
          200: "#EDD89A",
          300: "#E8C877",
          400: "#DDB65A",
          500: "#D4A640",
          600: "#8A6516",
        },
        espresso: "#1F1712",
        cocoa: "#3D2E24",
        mocha: "#5E4E42",
        adobe: "#DCD2C4",
        adobeDark: "#C4B6A4",
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
        "sunrise-bands": "linear-gradient(180deg, #F8F5F0 0%, #EFE8DE 40%, #F8F5F0 70%, #EFE8DE 100%)",
        "warm-radial": "radial-gradient(circle at 30% 20%, rgba(42,29,21,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(176,80,26,0.06) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #2A1D15 0%, #4A3326 100%)",
        "sage-gradient": "linear-gradient(135deg, #B0501A 0%, #E3A574 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4A640 0%, #E8C877 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(42,29,21,0.20), 0 4px 12px -6px rgba(42,29,21,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(42,29,21,0.28), 0 10px 30px -10px rgba(42,29,21,0.12)",
        card: "0 1px 4px -1px rgba(42,29,21,0.08), 0 1px 2px -1px rgba(42,29,21,0.04)",
        "card-hover": "0 8px 24px -6px rgba(42,29,21,0.16), 0 4px 12px -4px rgba(42,29,21,0.08)",
        arch: "inset 0 -4px 20px -6px rgba(42,29,21,0.08)",
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
