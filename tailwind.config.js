/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    listStyleType: {
      square: "square",
    },
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      inset: {
        initial: "initial",
      },
    },
  },
  plugins: [],
};
