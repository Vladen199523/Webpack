const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    open: true,
    liveReload: true,
  },
  resolve: {
    alias:{
    components: path.resolve(__dirname, 'src/components'),
    hoc: path.resolve (__dirname, 'src/HOC'),
    images: path.resolve (__dirname, 'src/images'),
    }
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
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
      ]
  }
};
