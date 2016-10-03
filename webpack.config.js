var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template:  __dirname + "/app/index.html",
  inject: "body",
});

module.exports = {
  entry: ['./app/index.js'],
  module: {
    loaders: [
      {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  plugins: [HtmlWebpackPluginConfig],
};
