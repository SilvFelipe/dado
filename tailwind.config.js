/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('../src/assets/textura.png')",
        header: "url('../src/assets/header.png')",
        content: "url('../src/assets/bg.png')"
      }
    },
  },
  plugins: [],
}
