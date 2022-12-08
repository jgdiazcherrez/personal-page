const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const commonConfig = require('./common.config');

module.exports = {
  mode: 'production',
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './src/assets/resource', to: './resource' }]
    }),
    new WebpackBar(),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  performance: {
    hints: false
  },
  ...commonConfig
};
