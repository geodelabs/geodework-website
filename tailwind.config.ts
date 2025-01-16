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
        "plex-mono": "var(--font-ibm-plex-mono)",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "spin-ccw": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-cw-7-5": "spin 7.5s linear infinite",
        "spin-ccw-15": "spin-ccw 15s linear infinite",
        "spin-cw-30": "spin 30s linear infinite",
        "spin-ccw-60": "spin-ccw 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
