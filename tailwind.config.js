/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        libre: "libre baskerville",
        lato: "lato",
      },
      colors: {
        bluetone: "#1fb0d8",
        orangetone: "#e9c822",
        navybl: "#152238",
      },
    },
  },
  plugins: [],
};
