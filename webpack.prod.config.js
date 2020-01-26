const  webpack = require('webpack');
const moduleConfig = require('./module.config');
const WebpackBar = require('webpackbar');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

module.exports = {
    devtool: '', // Removed dev-tools mapping
    mode: "production",
    entry: ['./src/index.js'],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new WebpackBar(),
        new WebpackNotifierPlugin()
    ],
    performance: {
        hints: false
    },
    module:moduleConfig
};