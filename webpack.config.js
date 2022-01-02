const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
        from: 'subtitles-octopus-worker*',
        context: 'node_modules/libass-wasm/dist/js/'
      }]
    })
  ],
  devServer: {
    compress: true,
    port: 3000
  }
};