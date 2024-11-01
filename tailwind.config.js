/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgTrans: "rgba(0, 0, 0, 0.564)",
      },
      gridTemplateColumns: {
        cardGrid: "repeat(auto-fill, minmax(300px, 1fr))",
        InfoGrid: "repeat(auto-fill, minmax(200px, 1fr))",
        mediaGrid: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/forms')
  ],
};
