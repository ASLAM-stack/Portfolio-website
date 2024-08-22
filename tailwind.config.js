// Import the withMT utility
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
module.exports = withMT({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {

    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["dark"], // Add more themes if needed
  },
});
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('daisyui')],
//   daisyui: {
//     themes: ["dark"], // Add more themes if needed
//   },
// }