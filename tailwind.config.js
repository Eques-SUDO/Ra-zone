/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Logo font - Matches PDF Harboro Soft Extra Bold style
        'logo': ['Poppins', 'Rubik', 'Montserrat', 'sans-serif'],
        // Primary font - Alt Carbonized (using Bebas Neue as web alternative)
        'primary': ['Bebas Neue', 'Oswald', 'sans-serif'],
        // Secondary font - Helvetica LT Pro
        'secondary': ['Helvetica LT Pro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        // Additional font options
        'display': ['Bebas Neue', 'sans-serif'],
        'body': ['Helvetica LT Pro', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        // RAZONE Brand Colors from PDF Charter
        primary: '#3B0510', // Black Bean - Main brand color
        secondary: '#2A181A', // Licorice - Secondary dark
        accent: '#F4F4F1', // White Smoke - Light accent

        // Brand palette
        razone: {
          'black-bean': '#3B0510',
          'licorice': '#2A181A',
          'white-smoke': '#F4F4F1',
          'night': '#131313',
          'antique-white': '#F5EADA',
        },

        // Semantic colors based on brand
        dark: {
          primary: '#3B0510',
          secondary: '#2A181A',
          tertiary: '#131313',
        },
        light: {
          primary: '#F4F4F1',
          secondary: '#F5EADA',
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
