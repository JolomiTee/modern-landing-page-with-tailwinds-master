module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bm-purple": "#5267DF",
        "bm-red": "#FA5959",
        "bm-blue": "#242A45",
        "bm-grey": "#9194A2",
        "bm-white": "#F7F7F7",
      }
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
    
  },
  plugins: [],
};
