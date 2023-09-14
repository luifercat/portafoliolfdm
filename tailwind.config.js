/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {},

    fontFamily: {
      Exo: ["Exo 2", "sans - serif"], //fuente para usar en tailwind
    },
  },

  plugins: [],
};
