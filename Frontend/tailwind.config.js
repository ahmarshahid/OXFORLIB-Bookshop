/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customColor: "light", // Replace with your custom color
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui : {
    themes : ["light"], // false only light + dark 
  }
};



