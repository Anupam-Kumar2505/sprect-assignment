/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gtwalsheimBold: ["GTWalsheimPro-Bold", "sans-serif"],
        gtwalsheimRegular: ["GTWalsheimPro-Regular", "sans-serif"],
        gtwalsheimMedium: ["GtWalsheimPro-Medium", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
