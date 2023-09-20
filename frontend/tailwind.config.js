/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1565D8",
        dark: {
          hard: "#0D2436",
          soft: "#"
        }
      }
    },
  },
  plugins: [],
}

