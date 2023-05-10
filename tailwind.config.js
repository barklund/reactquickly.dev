module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "ui-sans-serif", "Arial", "Verdana"],
        body: ["Nunito", "ui-sans-serif", "Arial", "Verdana"],
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["20px", "30px"],
        box: ["22px", "27px"],
        md: ["26px", "54px"],
        lg: ["30px", "60px"],
        xl: ["36px", "44px"],
        "2xl": ["48px", "60px"],
      },
      colors: {
        teal: {
          300: "#31acad",
          700: "#01323d",
        },
        gray: {
          100: "#fbfbfb",
          500: "#808080",
        },
      },
    },
  },
  plugins: [],
};
