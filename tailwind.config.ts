import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
        },
        footerNavy: "#0B0F19",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
        },
        lineGreen: "#06C755",
        surface: "#F8FAFC",
      },
      fontFamily: {
        prompt: ["var(--font-prompt)"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(90deg, #D4AF37 0%, #F3E5AB 100%)",
        "gold-gradient-diag": "linear-gradient(135deg, #D4AF37 0%, #F3E5AB 100%)",
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(212, 175, 55, 0.45)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
