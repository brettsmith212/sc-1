/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'text-primary': '#213130',
        'light': '#FFFFFA',
        'primary': '#B0EC9C',
        'primary-hover': '#9BE784',
        'warm': '#F2F2E8',
        'purple': '#D4C2FF',
        'pink': '#FFB2A8',
        'orange': '#FFD88A',
        'green': '#B0EC9C',
        'blue': '#ADDAFF',
        'dark': '#213130',
      },
    },
  },
  plugins: [],
}
