/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-bottom1": "inset 0 -8px 0 0 #CC8B13",
        "inner-bottom2": "inset 0 -8px 0 0 #118C87",
        "inner-bottom3": "inset 0 -8px 0 0 #10212A",
        "inner-bottom4": "inset 0 -8px 0 0 #6B8997",
        "inner-bottom5": "inset 0 -4px 0 0 #6B8997",
        "inner-bottom6": "inset 0 -4px 0 0 #CC8B13",
      },
      colors: {
        silver: "#A8BFC9",
        silverHover: "#DBE8ED",
        lightBlue: "#31C3BD",
        lightBlueHover: "#65E9E4",
        lightYellow: "#F2B137",
        lightYellowHover: "#FFC860",
        darkNavy: "#1A2A33",
        semiDarkNavy: "#1F3641",
      },
    },
  },
  plugins: [],
};
