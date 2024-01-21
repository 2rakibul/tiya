/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./event.html",
    "./listing.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom2':'#F2CC8F',
      },
      backgroundColor: {
        'custom': '#3D405B',
        'custom2':'#F2CC8F',
        'custom3':'#F4F1DE',
        'custom4':'#81B29A',
      },
      textColor: {
        'custom': '#3D405B',
        'custom2':'#F2CC8F',
      },
      zIndex: {
        '99': '99',
      },
    },
  },
  plugins: [],
}

