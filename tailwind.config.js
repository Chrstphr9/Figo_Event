/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',           // App directory
    './src/components/**/*.{js,ts,jsx,tsx}' // Components in src
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'], // optional global default
      },
      boxShadow: {
        'glow-purple': '0px 2.64px 7.91px 0px rgba(201, 182, 255, 0.25)',
        'inner-light': 'inset 0px 0.66px 1.32px 0px rgba(255, 255, 255, 0.15)'
      },
      backdropBlur: {
        'custom': '13.17538070678711px'
      }
    },
  },
  plugins: [],
}
