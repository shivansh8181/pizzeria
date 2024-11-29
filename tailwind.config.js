/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#FF6347",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
      },
      fontFamily: {
        love: ['Love', 'cursive'], 
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
