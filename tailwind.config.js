/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      fontFamily: {
        'custom1': ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"]
      },
    },
  },
  plugins: [],
}
