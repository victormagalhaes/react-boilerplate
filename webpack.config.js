const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  entry: './src/app.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve('dist'),
    filename: '[name].[hash:8].js',
    sourceMapFilename: '[name].[hash:8].map',
    chunkFilename: '[id].[hash:8].js'
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
  plugins: [htmlPlugin]
};
