/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    extend: {
      colors: {
        VeryDarkDesaturatedBlue: "#1d1e35",
        SoftRed: "#f47c57",
        SoftViolet: "#af67e9",
        SoftBlue: "#6565e7",
        VeryDarkGrayishBlue: "#4a4b5e",
        DarkGrayishBlue: "#787887",
        LightGrayishBlue: "#e7e7e9",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
