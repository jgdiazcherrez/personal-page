const path = require('path');
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/env',
              '@babel/preset-react',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties',
                  '@babel/plugin-transform-regenerator'
                ]
              }
            ],
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
