/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kakiPrimary: "#485E4E",
        kakiLighter: "#5E7B66",
        kakiDarker: "#3D5042",
        orangePrimary: "#FF8343",
        orangeLighter: "#F9955F",
        beigePrimary: "#FFEFD4",
        beigeDarker: "#E9D4B2",
        blackPrimary: "#25231E",
      },
      spacing: {
        30: "30px",
        50: "50px",
        300: "300px",
      },
      borderRadius: {
        20: "20px",
        40: "40px",
      },
      gap: {
        30: "30px",
        50: "50px",
      },
      fontFamily: {
        tanker: "Tanker",
        cafeFrancoise: "CafeFrancoise",
        pally: "Pally",
      },
      fontSize: {
        18: "18px",
        20: "20px",
        22: "22px",
        28: "28px",
        35: "35px",
        50: "50px",
        70: "70px",
      },
    },
  },
  plugins: [],
};
