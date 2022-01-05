const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js'),
    player: path.resolve(__dirname, 'src', 'player.js')
  },
  mode: 'production',
  output: {
    filename: '[name].js',
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