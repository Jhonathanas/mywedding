/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "main": "#f5ece4"
    },
    extend: {
      fontFamily: {
        dancing: ["Dancing Script"],
        spicy: ["Spicy Rice"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
