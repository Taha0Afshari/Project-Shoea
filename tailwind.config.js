/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      km: { max: "410px" },
    },
    extend: {},
    backgroundImage: {
      mainOne: "url('/assets/img/WallpaperDog-20534610 1.png')",
      wallOne: "url('/assets/img/Wall1.png')",
    },
  },
  plugins: [],
};
