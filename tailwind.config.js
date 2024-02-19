/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#00D8FF",
        secondary: "#ff5e7d"
      }
    },
  },
  plugins: [],
}

