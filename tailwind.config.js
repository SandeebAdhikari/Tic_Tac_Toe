/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-bottom1": "inset 0 -8px 0 0 #CC8B13",
        "inner-bottom2": "inset 0 -8px 0 0 #118C87",
        "inner-bottom3": "inset 0 -8px 0 0 #10212A",
      },
      colors: {
        silver: "#A8BFC9",
      },
    },
  },
  plugins: [],
};
