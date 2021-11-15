const path = require('path');

module.exports = {
  mode: "development",

  entry: {
    "customize": "./src/customize.js"
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // https://webpack.js.org/loaders/babel-loader/#root
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};