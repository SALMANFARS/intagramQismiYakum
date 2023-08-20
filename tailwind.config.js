/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "320px",
      md: "780px",
      lg: "1020px",
      xl: "1280px",
      "2xl": "1430px",
    },
  },
  plugins: [],
};


