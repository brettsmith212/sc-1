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
        'buffer-text': '#213130',
        'buffer-navbar': '#FFFFFA',
        'buffer-button': '#B0EC9C',
        'buffer-button-hover': '#9BE784',
        'buffer-hero': '#F2F2E8',
        'buffer-box-purple': '#D4C2FF',
        'buffer-box-pink': '#FFB2A8',
        'buffer-box-orange': '#FFD88A',
        'buffer-box-green': '#B0EC9C',
        'buffer-box-blue': '#ADDAFF',
        'buffer-footer': '#213130',
      },
    },
  },
  plugins: [],
}
