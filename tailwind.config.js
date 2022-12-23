/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      km: { max: "410px" },
    },
    extend: {},
    backgroundImage: {
      mainOne: "url('/Project-Shoea/assets/img/WallpaperDog-20534610 1.png')",
    },
  },
  plugins: [],
};
