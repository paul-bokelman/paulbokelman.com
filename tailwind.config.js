module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    "gatsby-plugin-postcss",
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
