var webpack = require("webpack");
var path = require("path");

module.exports = {resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  context: __dirname,
  entry: ['bootstrap-loader',"./app/main.jsx"],
  output: {
    path: path.join(__dirname, "assets"),
    filename: "app.js",
    publicPath: 'assets/'
  },
  module: {
    loaders: [
      { // JSX
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      { // SASS
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,           loader: "file-loader" },
      { test: /\.eot$/,           loader: "file-loader" },
      { test: /\.svg$/,           loader: "file-loader" }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}