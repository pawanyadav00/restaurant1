/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a82c35',
          DEFAULT: '#7a151b', // Warm Dark Red
          dark: '#580d11',
        },
        accent: {
          light: '#f1d279',
          DEFAULT: '#cfa844', // Warm Subtle Gold Accent
          dark: '#a1802b',
        },
        cream: {
          light: '#fdfdfb',
          DEFAULT: '#faf6ee', // Soft warm cream
          dark: '#f0e8d5',
        },
        charcoal: {
          light: '#2d2d2d',
          DEFAULT: '#1c1c1c', // Elegant Charcoal/Soft Black
          dark: '#111111',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
