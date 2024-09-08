/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'house-bg' : "url('/public/images/house.png')",
        'free-bg' : "url('/public/images/free.png')",
      },
      fontFamily: {
        kalam: ['Kalam', 'sans-serif']
      }
    },
  },
  plugins: [],
}

