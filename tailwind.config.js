/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'scaleIn': 'scaleIn 1s ease-in-out',
      },
      keyframes: {
        'scaleIn': {
          '0%': {
            scale: 0
          },
          '8%': {
            scale: 1.1
          },
          '100%': {
            scale: 1
          },
        },
      },
    },
  },
  plugins: [],
}