const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Studio Braza - Landing Pages que Transformam',
      template: 'src/index.html',
      favicon: 'src/assets/icons/favicon.png',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'thank-you.html',
      template: 'src/thank-you.html',
      inject: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      }
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
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});