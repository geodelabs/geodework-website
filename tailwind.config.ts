import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "var(--font-ibm-plex-sans)",
        mono: "var(--font-ibm-plex-mono)",
      },
      fontSize: {
        "4xl": "2.375rem",
      },
      colors: {
        primary: {
          DEFAULT: "hsla(var(--primary))",
          light: "hsla(var(--primary-light))",
          dark: "hsla(var(--primary-dark))",
          alt: "hsla(var(--primary-alt))",
        },
        accent: {
          DEFAULT: "hsla(var(--accent))",
          light: "hsla(var(--accent-light))",
          dark: "hsla(var(--accent-dark))",
          alt: "hsla(var(--accent-alt))",
        },
        body: {
          DEFAULT: "hsla(var(--body))",
          secondary: "hsla(var(--body-secondary))",
        },
      },
      spacing: {
        15: "3.75rem",
      },
      animation: {
        "spin-7-5": "spin 7.5s linear infinite",
        "spin-15": "spin 15s linear infinite",
        "spin-30": "spin 30s linear infinite",
        "spin-60": "spin 60s linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(270deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(270deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
