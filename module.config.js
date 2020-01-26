module.exports  = {
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
                            '@babel/plugin-transform-regenerator'
                        ]
                    }],
                    cacheDirectory: true,
                    cacheCompression: false
                }
            }
        }
    ]
};