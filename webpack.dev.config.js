const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const moduleConfig = require('./module.config');


const host = 'localhost';
const port = 10000;


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    // filename: '[name].min.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: `http://${host}:${port}/`
  },
  plugins: [
    // new WebpackNotifierPlugin(),
    // new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port,
    host,
    overlay: {
      errors: true,
      warnings: true
    },
    historyApiFallback: true,
    hot: true,
    disableHostCheck: true,
    stats: {
      colors: true
    }
  },
  module: moduleConfig
};
