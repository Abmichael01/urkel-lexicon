/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playwrite": ["Playwrite ES", "cursive"],
        "quicksand": ["Quicksand", "san-serif"],
        "fontdiner": ["Fontdiner Swanky"]
      },
    },
  },
  plugins: [],
}

