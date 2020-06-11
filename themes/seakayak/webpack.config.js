const path = require("path");

module.exports = [
  {
    entry: "./source/js/jquery.js",
    output: {
      path: path.resolve(__dirname, "assets/js"),
      filename: "jquery.min.js",
    },
    mode: "production",
  },
];
