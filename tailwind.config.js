const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Sometype Mono', 'monospace'],
      },
      // color:{
      //   cb: "#272829",
      // },
    },
  },
  plugins: [],
});
