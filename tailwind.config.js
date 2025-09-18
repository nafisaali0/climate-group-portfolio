/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark_green: "#001510",
        light_green: "#00bf8f",
        button_color: "#53a8b6",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
