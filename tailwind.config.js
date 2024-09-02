/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'text-gradient': 'linear-gradient(45deg, #f3ec78, #af4261)',
    },
  },
  plugins: [],
}