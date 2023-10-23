/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'profile': {
          light: '#f0e7db',
          dark: '#202023',
          heroLight: '#f6f0e8',
          heroDark: '#323234',
          textLight: '#1a202c',
          textDark: '#ededed',
          navDark: '',
          navLight: '',
        },

      },
    },
  },
  plugins: [],
}

