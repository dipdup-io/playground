var CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: mode,
  entry: {
    'graphqli-explorer-page': './src/graphqli-explorer-page.jsx'
  },
  output: {
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.mjs', '.jsx', '.js', '.css']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'src/static' }
        ]
    })
  ]
};