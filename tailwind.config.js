/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'house-bg' : "url('/images/house.png')",
        'free-bg' : "url('/images/free.png')",
      },
      fontFamily: {
        kalam: ['Kalam', 'sans-serif']
      },
      gridTemplateColumns: {
        'char-traits': 'minmax(0,1fr) 200px minmax(0,1fr)'
      }
    },
  },
  plugins: [],
}

