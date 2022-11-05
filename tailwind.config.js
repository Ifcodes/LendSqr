/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#213F7D",
        navy1: "#545F7D",
        borderColor1: "rgba(84, 95, 125, 0.15)",
        cyanBlue: "#39CDCC",
        cyanDark: "#2AB0AF",
      },
    },
  },
  plugins: [],
};
