/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bottons: {
          100: '#ebf3f9',
          200: '#d7e7f3',
          300: '#c3dcee',
          400: '#afd0e8',
          500: '#9bc4e2',
          600: '#7c9db5',
          700: '#5d7688',
          800: '#3e4e5a',
          900: '#1f272d',
        },
        fondo: {
          100: '#fafcfc',
          200: '#f5f9fa',
          300: '#f1f5f7',
          400: '#ecf2f5',
          500: '#e7eff2',
          600: '#b9bfc2',
          700: '#8b8f91',
          800: '#5c6061',
          900: '#2e3030',
        },
      },
    },
  },
  plugins: [],
};
