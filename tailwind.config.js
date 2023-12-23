const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Sometype Mono', 'monospace'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
      // color:{
      //   cb: "#272829",
      // },
    },
  },
  plugins: [],
});
