module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "0%": { transform: "scale(1)" },
        },
      },
      animation: {
        scale: "scale 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
