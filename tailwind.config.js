/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DEDBC8",
      },
      fontFamily: {
        sans: ["Almarai", "Noto Sans SC", "sans-serif"],
        serif: ['"Instrument Serif"', "serif"],
      },
      maxWidth: {
        page: "1700px",
      },
    },
  },
  plugins: [],
};
