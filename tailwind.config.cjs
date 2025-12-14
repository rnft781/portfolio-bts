/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#f97316',
        accent: '#22d3ee',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
