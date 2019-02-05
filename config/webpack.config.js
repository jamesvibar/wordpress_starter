const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/js/all.js"),
  output: {
    filename: "all.js",
    path: path.resolve(__dirname, "dist")
  }
};
