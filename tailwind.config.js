/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C9A554', // Rich gold inspired by Egyptian artifacts
        secondary: '#2A4365', // Deep royal blue
        accent: {
          1: '#D4AF37', // Bright gold
          2: '#794E9B', // Royal purple
          3: '#1F4E5F', // Deep teal
        },
        sand: {
          50: '#FAF6F0',
          100: '#F5EDE1',
          200: '#EBD9C4',
          300: '#E0C4A7',
          400: '#D6AF8A',
          500: '#CB9A6D',
        },
        night: {
          50: '#E8EAF2',
          100: '#D1D6E5',
          200: '#A3ACCA',
          300: '#7583B0',
          400: '#475995',
          500: '#19307B',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-egyptian': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-sand': 'linear-gradient(to right bottom, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
