/**@type {import ('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      colors:{
        vuejs: "#49e659"
      }
    },
  },
  // purge: [],
  // darkMode: false, // or 'media' or 'class'
  // theme: {
  //   extend: {},
  // },
  variants: {
    extend: {},
  },
  plugins: [],
}
