/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
				'primary': '#1e0700',
        'secondary': '#210a02',
        'tertiary': '#ef8b1f',
			},
      colors: {
        'secondary': '#ef8b1f',
      }
    },
  },
  plugins: [],
}

