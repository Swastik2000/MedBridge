/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.js",
    "./pages/sellerPage.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}