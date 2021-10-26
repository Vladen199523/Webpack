const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
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