/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header_bg: '#3D4451',
        btn_color: '#A87F34',
        second_btn_color: '#ececec',
        banner: '#edf1f228',
        second_bg: '#757575',

      },
    },
  },
  plugins: [require("daisyui")],
}