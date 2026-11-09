/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",       // If using Expo Router
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}"            // If using root App.js
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};