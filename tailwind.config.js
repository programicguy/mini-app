export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "scale-rotate": "scaleRotate 10s infinite",
      },
      keyframes: {
        scaleRotate: {
          "0%": {
            transform: "scale(1.1) rotate(0deg)",
          },
          "50%": {
            transform: "scale(1.05) rotate(180deg)",
          },
          "100%": {
            transform: "scale(1) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
