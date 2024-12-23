import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      screens: {
        '2xl': '1722px',
        '3xl': '2000px'
      },
      textShadow: {
        sm: "2px 2px var(--tw-shadow-color)",
        DEFAULT: "4px 4px var(--tw-shadow-color)",
        lg: "8px 8px var(--tw-shadow-color)",
      },
      rounded: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
} satisfies Config;
