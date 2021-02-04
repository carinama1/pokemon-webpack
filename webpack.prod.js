const { merge } = require("webpack-merge");
const client = require("./webpack.client.js");

module.exports = merge(client, {
  mode: "production",
});
