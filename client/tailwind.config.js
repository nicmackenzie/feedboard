/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        '--clr-purple': '#ad1fea',
        'clr-orange': '#f49f85',
        '--clr-blue-primary': '#4661e6',
        '--clr-blue-secondary': '#62bcfa',
        '--clr-gray-primary': '#373f68',
        '--clr-gray-secondary': '#3a4374',
        '--clr-gray-accent': '#647196',
        '--clr-white-primary': ' #fff',
        '--clr-white-secondary': '#f2f4ff',
        '--clr-white-accent': '#f7f8fd',
      },
      height: {
        dvh: '100dvh',
      },
    },
    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },
  },
  plugins: [],
};
