module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#02897A",
        text: "#22343D",
      },
      backgroundImage: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
