let webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    devtool: '', // Removed dev-tools mapping
    entry: ['./src/index.js'],
    output: {
        //path: path.resolve(__dirname, 'build'),
       // path: '/srv/www/opta_sports/web/bundles/framework/js/',
        //filename: `bundle.min.js`
        filename: '[name].min.js',
        path: '/srv/www/nhfp_project_elections/public/static/js/',
        publicPath: '/static/js/'
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./dist/index.html"
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query:{
                        presets: ['@babel/env',  '@babel/preset-react', {
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-transform-regenerator',
                               // 'babel-plugin-syntax-dynamic-import'
                            ]
                        }],
                        cacheDirectory: true
                    }
                }
            }
        ]
    }
};
