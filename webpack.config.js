const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});
const cleanPlugin = new CleanWebpackPlugin(['dist']);
const cssExtractPlugin = new MiniCssExtractPlugin({ filename: '[name].css' });


module.exports = (env) => {
  const devMode = env.mode !== 'production';

  return {
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
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
                disable: true,
              },
            },
          ],
        }
      ]
    },
    plugins: [htmlPlugin, cleanPlugin, cssExtractPlugin]
  };
};
