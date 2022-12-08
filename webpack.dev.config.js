const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const commonConfig = require('./common.config');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    'webpack/hot/dev-server.js',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: './src/assets/resource', to: './resource' }]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    hot: 'only',
    liveReload: false,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname)
    }
  },
  ...commonConfig
};
