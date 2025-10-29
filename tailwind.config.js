/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant Upright', 'serif'],
        'notoSansKr': ['"Noto Sans KR"', 'sans-serif'],
      },
      colors: {
        'taeguk-brown': '#3f4026',
        'taeguk-cream': '#fef9ec',
      }
    },
  },
  plugins: [],
}