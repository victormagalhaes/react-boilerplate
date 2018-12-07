const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'public'),
  filename: './index.html'
});

module.exports = {
  entry: {
    path: path.resolve(__dirname, 'src'),
    filename: 'main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};
