/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
       fontFamily: {
        display: ['"M PLUS Rounded 1c"'],
    },
      colors: {
        'profile': {
          light: '#f0e7db',
          dark: '#202023',
          heroLight: '#f6f0e8',
          heroDark: '#323234',
          textLight: '#1a202c',
          textDark: '#ededed',
        },
        'frontend': {
          html: '#dc4d25',
          css: '#2277bc',
          js: '#f7df1e',
          react:'#66dbfb',
          bootstrap: '#7c18f8',
          tailwind: "#1dc0cd",
          chakraUi: '#69cccd',
        },
        'backend': {
          node: '#127524',
          go: '#08afd8',
          php: '#7b7fb5',
          laravel: '#ff3326',
        },
        'database': {
          mongodb: '#55ad47',
          postgresql: '#396c94',
          mysql: '#08668e',
        },
        'utils': {
          docker: '#19a2dc',
          git: '#f15639',
        },
      },
    },
  },
  plugins: [],
}

