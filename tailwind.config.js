/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#F5C518",
          light: "#FFD740",
          dark: "#C9A000",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          card: "#111111",
          elevated: "#1A1A1A",
          border: "#2A2A2A",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        heading: ["'Barlow Condensed'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
}