const path = require('path');

module.exports = {
  // Entry file.
  entry: './src',
  
  // Output file. 
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },

  //loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          "presets": [
            "es2015",
            "react"
          ],
          plugins: [
          ],
          compact: false
        }
      }
    ]
  },

  // enable Source maps
  'devtool': 'source-map',

  // DevServer config
  'devServer': {
    'contentBase': './src',
    'historyApiFallback': true,
    'hot': true,
    'disableHostCheck': true
  },
};