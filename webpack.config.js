var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template:  __dirname + "/app/index.html",
  inject: "body",
});

module.exports = {
  entry: ['./app/index.js'],
  module: {
    loaders: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/}
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  plugins: [HtmlWebpackPluginConfig],
};
