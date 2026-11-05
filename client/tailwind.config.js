/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#05070e',
          900: '#0a0e1a',
          850: '#0f1629',
          800: '#141d36',
          700: '#1e2b4f',
          600: '#2c3e70'
        },
        cosmic: {
          blue: '#38bdf8',
          cyan: '#22d3ee',
          purple: '#a855f7',
          pink: '#ec4899',
          amber: '#fbbf24'
        }
      },
      fontFamily: {
        sans: ['"Josefin Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Josefin Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cardo"', '"Lora"', 'serif']
      }
    },
  },
  plugins: [],
}

