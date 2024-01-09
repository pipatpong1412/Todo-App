/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [],
  },
  theme: {
    extend: {
      width: {
        '410': '410px',
      },
    },
  },
  plugins: [require("daisyui")],
}

