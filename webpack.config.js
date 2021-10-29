const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, ''),
    },
    open: true,
    liveReload: true,
  },
  
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [new MiniCssExtractPlugin()],
  module: {
      rules: [
          {
            test: /\.js$/,
            use: ["babel-loader"]
          },
          {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
          }
      ]
  }
};
