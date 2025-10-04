const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: [
      {
        directory: path.resolve(__dirname, '../dist'),
        publicPath: '/',
      },
    ],
    hot: true,
  open: false,
  port: 3001,
    compress: true,
    historyApiFallback: true,
    watchFiles: ['src/**/*'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Studio Braza - Landing Pages que Transformam',
      template: 'src/index.html',
      favicon: 'src/assets/icons/favicon.png',
    }),
    new HtmlWebpackPlugin({
      filename: 'thank-you.html',
      template: 'src/thank-you.html',
      inject: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images', to: 'assets/images' },
        { from: 'src/assets/icons', to: 'assets/icons' },
        { from: 'src/assets/fonts', to: 'assets/fonts', noErrorOnMissing: true },
        { from: 'src/legal', to: 'legal' },
      ],
    }),
  ],
});