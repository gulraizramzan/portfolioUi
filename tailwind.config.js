/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'aero-blue':'#B2DBCD',
        'gold':'#d68f00',
        'deep-purpal':'#7E57C2',
        'grey':'#E4EBF1'
      }
    },
  },
  plugins: [],
});

