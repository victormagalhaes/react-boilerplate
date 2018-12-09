const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const cleanPlugin = new CleanWebpackPlugin(['dist']);

module.exports = {
  entry: './src/app.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test:/\.(s*)css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [htmlPlugin, cleanPlugin]
};
