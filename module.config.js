//Default modules rules and common object
let path = require('path');
module.exports  = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules\/(?!ee-core)/,
            use: {
                loader: 'babel-loader',
                query:{
                    presets: ['@babel/env',  '@babel/preset-react', {
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-regenerator',
                          //  'babel-plugin-syntax-dynamic-import'
                        ]
                    }],
                    cacheDirectory: true
                }
            }
        }
    ]
};