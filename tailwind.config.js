/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)',
        'custom-gradient':
          'linear-gradient(to bottom, rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)',
      },
    },
  },
  plugins: [],
};
