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
        dashboardWhite: "#FBFBFB",
        navy: "#213F7D",
        navy1: "#545F7D",
        borderColor1: "rgba(84, 95, 125, 0.15)",
        cyanLight: "#39cdcc0f",
        cyanBlue: "#39CDCC",
        cyanDark: "#2AB0AF",
        grey4: "#C4C4C4",
      },
      boxShadow: {
        primary: "3px 0 20px rgba(0, 0, 0, 0.07)",
      },
      fontFamily: {
        roboto: "Roboto, sans-serif",
        workSans: "Work Sans",
        avenirNext: "Avenir Next LT Pro",
      },
    },
  },
  plugins: [],
};
