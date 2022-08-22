/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a014f",
          dark: '#0f172abf',
        },
        secondary: {
          DEFAULT: "#3ec5f0",
          dark: '#0f172abf',
        },
        paragraph: {
          DEFAULT: "#373435",
          dark: '#0f172abf',
        }
      },
      backgroundColor: {
        primary: "#0a014f",
        paragraph: "#373435",
      },
      fontFamily: {
        fontPrimary: [
          "'Poppins'",
          "'Airbnb Cereal'",
          "'Helvetica Neue'",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
