/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // bodyBG: "#18181B",
      },
      fontFamily: {
        // rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
