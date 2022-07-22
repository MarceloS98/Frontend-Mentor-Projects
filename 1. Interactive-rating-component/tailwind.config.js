/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "	#fb7413",
        white: "#fff",
        lightGrey: "#959eac",
        mediumGrey: "#7c8798",
        darkBlue: "#252d37",
        veryDarkBlue: "#121417",
      },
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
