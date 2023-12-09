/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        logo: ["Nature Beauty Personal Use"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
