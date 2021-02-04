const { merge } = require("webpack-merge");
const path = require("path");
const client = require("./webpack.client.js");

module.exports = merge(client, {
  mode: "development",
  devtool: "inline-source-map",
});
