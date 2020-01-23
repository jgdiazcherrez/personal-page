const  webpack = require('webpack');
const moduleConfig = require('./module.config');
const resolveConfig = require('./resolve.config');
const WebpackBar = require('webpackbar');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    devtool: '', // Removed dev-tools mapping
    entry: ['./src/index.js'],
    resolve:resolveConfig,
    output: {
        filename: '[name].min.js',
        path: '/srv/www/nhfp_project_elections/public/static/js/',
        publicPath: '/static/js/'
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.ENV': JSON.stringify('production'),
            'process.env.API_URL': JSON.stringify("/api/"),
        }),
        new WebpackBar(),
        new WebpackNotifierPlugin()
    ],
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module:moduleConfig
};