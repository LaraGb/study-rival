/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        cards: "repeat(auto-fit,minmax(8rem,1fr))",
      },
      colors: {
        primary: "#605BFF",
        primary_light: "#8D98DC",
        primary_dark: "#4F60C9",
        secondary_light: "#96f2914f",
        tertiary_light: "#ee82ee2b",
        secondary_txt:"#A1A1AA",
        tertiary_txt:"#71717A",
      },
    },
  },
  plugins: [],
};

